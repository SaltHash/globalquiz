-- Access request gate schema for Supabase Postgres.
-- Run this in the Supabase SQL editor as a privileged role.

create extension if not exists pgcrypto;
create extension if not exists vault;

create table if not exists public.access_requests (
  id uuid primary key default gen_random_uuid(),
  access_key text not null unique,
  status text not null default 'pending' check (status in ('pending','approved','denied')),
  requested_at timestamptz not null default timezone('utc', now()),
  approved_at timestamptz,
  reviewed_by uuid,
  review_note text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint access_requests_key_length_chk check (
    length(access_key) between 6 and 254
  ),
  constraint access_requests_approved_at_chk check (
    (status = 'approved' and approved_at is not null)
    or (status <> 'approved')
  )
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists trg_access_requests_updated_at on public.access_requests;
create trigger trg_access_requests_updated_at
before update on public.access_requests
for each row execute function public.set_updated_at();

alter table public.access_requests enable row level security;
alter table public.access_requests force row level security;

-- Start from least privilege.
revoke all on table public.access_requests from public;
revoke all on table public.access_requests from anon;
revoke all on table public.access_requests from authenticated;

-- Admin table access (tighten to your admin role if available).
grant select, update on table public.access_requests to authenticated;

drop policy if exists "authenticated_review_access_requests" on public.access_requests;
create policy "authenticated_review_access_requests"
on public.access_requests
for all
to authenticated
using (true)
with check (true);

-- SECURITY DEFINER RPC for request submission from anon clients.
create or replace function public.request_access(p_access_key text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  normalized_access_key text;
begin
  normalized_access_key := trim(p_access_key);
  if normalized_access_key is null or normalized_access_key = '' then
    raise exception 'access_key_required';
  end if;

  insert into public.access_requests (access_key)
  values (normalized_access_key)
  on conflict (access_key)
  do update set
    -- Allow re-request only if still pending; otherwise keep reviewer decision immutable.
    requested_at = case when public.access_requests.status = 'pending' then timezone('utc', now()) else public.access_requests.requested_at end,
    updated_at = timezone('utc', now());
end;
$$;

-- SECURITY DEFINER RPC for status polling from anon clients.
create or replace function public.check_access(p_access_key text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  normalized_access_key text;
  rec public.access_requests%rowtype;
begin
  normalized_access_key := trim(p_access_key);
  if normalized_access_key is null or normalized_access_key = '' then
    return jsonb_build_object('status', 'missing');
  end if;

  select * into rec
  from public.access_requests
  where access_key = normalized_access_key
  limit 1;

  if rec.id is null then
    return jsonb_build_object('status', 'missing');
  end if;

  return jsonb_build_object(
    'status', rec.status,
    'approved_at', rec.approved_at
  );
end;
$$;

revoke all on function public.request_access(text) from public;
revoke all on function public.check_access(text) from public;
grant execute on function public.request_access(text) to anon;
grant execute on function public.check_access(text) to anon;

create index if not exists idx_access_requests_access_key on public.access_requests (access_key);
create index if not exists idx_access_requests_status on public.access_requests (status);


-- Admin-authenticated RPCs using a shared key passed in header x-admin-key.
-- Store your key in Supabase Vault, for example:
--   select vault.create_secret('super-secret-admin-key', 'admin_access_key');

create or replace function public.admin_list_access_requests()
returns setof public.access_requests
language plpgsql
security definer
set search_path = public
as $$
declare
  req_key text;
  expected_key text;
begin
  req_key := coalesce(current_setting('request.headers', true)::json->>'x-admin-key', '');
  select coalesce(
    (select decrypted_secret
     from vault.decrypted_secrets
     where name = 'admin_access_key'
     order by created_at desc
     limit 1),
    ''
  ) into expected_key;

  if expected_key = '' or req_key = '' or req_key <> expected_key then
    raise exception 'invalid_admin_key';
  end if;

  return query
  select *
  from public.access_requests
  order by
    case when status = 'pending' then 0 else 1 end,
    requested_at desc;
end;
$$;

create or replace function public.admin_review_access_request(p_id uuid, p_status text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  req_key text;
  expected_key text;
  normalized_status text;
begin
  req_key := coalesce(current_setting('request.headers', true)::json->>'x-admin-key', '');
  select coalesce(
    (select decrypted_secret
     from vault.decrypted_secrets
     where name = 'admin_access_key'
     order by created_at desc
     limit 1),
    ''
  ) into expected_key;

  if expected_key = '' or req_key = '' or req_key <> expected_key then
    raise exception 'invalid_admin_key';
  end if;

  normalized_status := lower(trim(p_status));
  if normalized_status not in ('approved', 'denied') then
    raise exception 'invalid_status';
  end if;

  update public.access_requests
  set
    status = normalized_status,
    approved_at = case when normalized_status = 'approved' then timezone('utc', now()) else null end,
    updated_at = timezone('utc', now())
  where id = p_id;

  if not found then
    raise exception 'request_not_found';
  end if;
end;
$$;

revoke all on function public.admin_list_access_requests() from public;
revoke all on function public.admin_review_access_request(uuid, text) from public;
grant execute on function public.admin_list_access_requests() to anon;
grant execute on function public.admin_review_access_request(uuid, text) to anon;
