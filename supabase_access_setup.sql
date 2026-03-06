-- Access request gate schema for Supabase Postgres.
-- Run this in the Supabase SQL editor as a privileged role.

create extension if not exists pgcrypto;

create table if not exists public.access_requests (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  status text not null default 'pending' check (status in ('pending','approved','denied')),
  requested_at timestamptz not null default timezone('utc', now()),
  approved_at timestamptz,
  reviewed_by uuid,
  review_note text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint access_requests_email_format_chk check (
    email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$'
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
create or replace function public.request_access(p_email text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  normalized_email text;
begin
  normalized_email := lower(trim(p_email));
  if normalized_email is null or normalized_email = '' then
    raise exception 'email_required';
  end if;

  insert into public.access_requests (email)
  values (normalized_email)
  on conflict (email)
  do update set
    -- Allow re-request only if still pending; otherwise keep reviewer decision immutable.
    requested_at = case when public.access_requests.status = 'pending' then timezone('utc', now()) else public.access_requests.requested_at end,
    updated_at = timezone('utc', now());
end;
$$;

-- SECURITY DEFINER RPC for status polling from anon clients.
create or replace function public.check_access(p_email text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  normalized_email text;
  rec public.access_requests%rowtype;
begin
  normalized_email := lower(trim(p_email));
  if normalized_email is null or normalized_email = '' then
    return jsonb_build_object('status', 'missing');
  end if;

  select * into rec
  from public.access_requests
  where email = normalized_email
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

create index if not exists idx_access_requests_email on public.access_requests (email);
create index if not exists idx_access_requests_status on public.access_requests (status);
