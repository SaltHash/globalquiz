function buildSignificanceChain(item) {
  const parts = item.significanceLong
    .split(/[.;]/)
    .map(p => p.trim())
    .filter(Boolean)
    .flatMap(p => p.split(',').map(x => x.trim()).filter(Boolean));
  const unique = [...new Set(parts)];
  const chain = unique.slice(0, 3);
  while(chain.length < 3) chain.push(item.significanceShort);
  return chain.map(c => c[0]?.toUpperCase() + c.slice(1));
}

const quizData = [
  {
    year: "1350",
    event: "Bubonic Plague",
    era: "Renaissance",
    significanceLong: "The plague shattered demographic and labor patterns, forcing elites and institutions to renegotiate how work and authority functioned. By destabilizing older social arrangements, it widened space for new economic habits and cultural priorities across Europe.",
    significanceShort: "Demographic collapse pushed long-term social and economic restructuring.",
    significanceOptions: [
      "Demographic collapse pushed long-term social and economic restructuring.",
      "A brief health crisis mostly remembered for local suffering, with little structural change.",
      "A military disruption that mainly altered borders rather than social systems."
    ]
  },
  {
    year: "1445",
    event: "Invention of the printing press",
    era: "Renaissance",
    significanceLong: "Cheap reproducible text transformed how ideas were stored, corrected, and circulated among different social groups. Over time, this changed the scale of religious debate, literacy growth, and political persuasion.",
    significanceShort: "Mass print reshaped idea-sharing, literacy, and public argument.",
    significanceOptions: [
      "Mass print reshaped idea-sharing, literacy, and public argument.",
      "It was mostly a decorative craft innovation used by courts and monasteries.",
      "It standardized handwriting traditions but did not change who accessed ideas."
    ]
  },
  {
    year: "1487",
    event: "Dias rounded the Cape of Good Hope",
    era: "Renaissance",
    significanceLong: "Rounding the Cape demonstrated a workable maritime corridor linking Atlantic and Indian Ocean trade systems. That route encouraged new imperial and commercial strategies that reoriented European power toward long-distance sea exchange.",
    significanceShort: "A viable Cape route redirected trade and imperial strategy.",
    significanceOptions: [
      "A viable Cape route redirected trade and imperial strategy.",
      "The voyage mainly settled inland border disputes in southern Africa.",
      "It proved overland caravans remained the dominant path for global trade."
    ]
  },
  {
    year: "1517",
    event: "Luther’s 95 Theses",
    era: "Reformation",
    significanceLong: "Luther’s challenge accelerated fractures in religious authority by making doctrinal conflict politically unavoidable for rulers and communities. The resulting disputes reshaped institutions, education, and confessional identity across generations.",
    significanceShort: "It triggered confessional conflict that reworked authority in Europe.",
    significanceOptions: [
      "It triggered confessional conflict that reworked authority in Europe.",
      "It was a local clerical complaint resolved quickly inside existing church structures.",
      "It mainly changed monastic architecture without wider political effects."
    ]
  },
  {
    year: "1648",
    event: "Peace of Westphalia",
    era: "State Building",
    significanceLong: "The settlements closed major confessional wars while formalizing negotiation among territorially defined states. In practice, they reinforced a diplomatic framework where sovereignty and balance mattered more than universal religious authority.",
    significanceShort: "It strengthened sovereign-state diplomacy after religious wars.",
    significanceOptions: [
      "It strengthened sovereign-state diplomacy after religious wars.",
      "It restored a unified religious hierarchy as Europe’s central political referee.",
      "It had little effect beyond ceremonial court protocol."
    ]
  },
  {
    year: "1687",
    event: "Principia",
    era: "Scientific Revolution",
    significanceLong: "Newton’s synthesis gave scholars a shared mathematical language for describing motion and force across different phenomena. This credibility for predictive, law-based inquiry deeply influenced scientific institutions and Enlightenment confidence in reason.",
    significanceShort: "It established predictive physical laws with broad intellectual authority.",
    significanceOptions: [
      "It established predictive physical laws with broad intellectual authority.",
      "It argued natural events were unknowable and beyond mathematical study.",
      "It was mainly a theological text with little scientific uptake."
    ]
  },
  {
    year: "1688",
    event: "Glorious Revolution",
    era: "State Building",
    significanceLong: "The revolution reset the English crown’s legitimacy around legal limits and parliamentary consent rather than inherited absolutism alone. Its settlement influenced later debates on rights, representation, and constitutional governance in and beyond Britain.",
    significanceShort: "It tied monarchy more tightly to parliamentary constitutional limits.",
    significanceOptions: [
      "It tied monarchy more tightly to parliamentary constitutional limits.",
      "It replaced parliamentary politics with permanent military dictatorship.",
      "It ended succession disputes without affecting constitutional ideas."
    ]
  },
  {
    year: "1765",
    event: "Spinning Jenny",
    era: "Industrial Revolution",
    significanceLong: "The device multiplied thread output per worker, helping shift textile production toward mechanized, centralized systems. That productivity change fed broader industrial growth, new labor discipline, and urban economic transformation.",
    significanceShort: "Higher textile output accelerated factory-style industrial production.",
    significanceOptions: [
      "Higher textile output accelerated factory-style industrial production.",
      "It reduced cloth production and reinforced guild handcraft dominance.",
      "It mattered mainly as a luxury tool for aristocratic households."
    ]
  },
  {
    year: "1789",
    event: "Beginning of French Revolution",
    era: "French Revolution and Napoleon",
    significanceLong: "Revolutionary upheaval challenged inherited privilege and sovereign authority by grounding legitimacy in citizenship and national will. Its conflicts and reforms spread durable arguments about rights, law, and political participation.",
    significanceShort: "It recast legitimacy around citizenship, rights, and national sovereignty.",
    significanceOptions: [
      "It recast legitimacy around citizenship, rights, and national sovereignty.",
      "It restored feudal privilege as the preferred model for modern governance.",
      "It was chiefly a tax protest with minimal ideological consequences."
    ]
  },
  {
    year: "1815",
    event: "Congress of Vienna",
    era: "French Revolution and Napoleon",
    significanceLong: "The congress built a conservative diplomatic order meant to contain revolutionary spillover through consultation and balance. Its framework shaped nineteenth-century crisis management even as nationalist pressures kept testing the settlement.",
    significanceShort: "It organized a balance-of-power order to manage post-Napoleonic Europe.",
    significanceOptions: [
      "It organized a balance-of-power order to manage post-Napoleonic Europe.",
      "It abolished diplomacy in favor of unilateral imperial annexation.",
      "It prioritized immediate democratic federation across all major states."
    ]
  },
  {
    year: "1832",
    event: "Great Reform Bill",
    era: "Liberal Revolutions and Unification",
    significanceLong: "The bill widened representation and reduced some structural distortions in Britain’s electoral system. Although limited, it legitimized incremental parliamentary reform as a pathway for adapting political order.",
    significanceShort: "It expanded representation and normalized gradual parliamentary reform.",
    significanceOptions: [
      "It expanded representation and normalized gradual parliamentary reform.",
      "It abolished elections and centralized authority in the monarchy.",
      "It had no meaningful effect on representation or reform politics."
    ]
  },
  {
    year: "1848",
    event: "Year of Revolution",
    era: "Liberal Revolutions and Unification",
    significanceLong: "Across Europe, uprisings exposed the scale of liberal and nationalist demands even where governments reasserted control. The failures still left organizational experience and ideological momentum that shaped later state-building.",
    significanceShort: "Failed uprisings still advanced liberal and nationalist momentum.",
    significanceOptions: [
      "Failed uprisings still advanced liberal and nationalist momentum.",
      "The revolts produced a stable pan-European republic within a year.",
      "They were isolated peasant riots with no ideological continuity."
    ]
  },
  {
    year: "1871",
    event: "Unification of Germany",
    era: "Liberal Revolutions and Unification",
    significanceLong: "German unification created a large industrial state at Europe’s center under Prussian-led institutions and military prestige. Its emergence altered alliance logic, competition, and strategic calculations for decades.",
    significanceShort: "A powerful unified Germany transformed Europe’s strategic balance.",
    significanceOptions: [
      "A powerful unified Germany transformed Europe’s strategic balance.",
      "It dissolved central authority and fragmented German lands further.",
      "It remained culturally symbolic with negligible diplomatic impact."
    ]
  },
  {
    year: "1914",
    event: "Outbreak of WWI",
    era: "World War I",
    significanceLong: "The war mobilized societies and economies at unprecedented scale, collapsing empires and normalizing mass industrial conflict. Its outcomes redrew political maps and seeded unresolved tensions that shaped the twentieth century.",
    significanceShort: "Total war collapsed empires and reordered twentieth-century politics.",
    significanceOptions: [
      "Total war collapsed empires and reordered twentieth-century politics.",
      "It remained a short border skirmish with little societal mobilization.",
      "It stabilized dynastic empires and reduced nationalist pressures."
    ]
  },
  {
    year: "1919",
    event: "Treaty of Versailles",
    era: "Interwar and World War II",
    significanceLong: "Versailles imposed punitive and territorial terms while attempting to institutionalize a new international order. The settlement’s contradictions fed revisionism, grievance politics, and unstable interwar diplomacy.",
    significanceShort: "Punitive peace terms deepened instability in interwar Europe.",
    significanceOptions: [
      "Punitive peace terms deepened instability in interwar Europe.",
      "It produced broad reconciliation that removed major geopolitical grievances.",
      "It had no role in shaping interwar political radicalization."
    ]
  },
  {
    year: "1945",
    event: "Yalta Conference",
    era: "Interwar and World War II",
    significanceLong: "Yalta coordinated immediate postwar arrangements while exposing differing visions for Europe’s political future. Those unresolved tensions hardened into competing blocs and institutions during the early Cold War.",
    significanceShort: "Postwar planning at Yalta foreshadowed Cold War bloc division.",
    significanceOptions: [
      "Postwar planning at Yalta foreshadowed Cold War bloc division.",
      "It created a unified European military under shared command.",
      "It ended superpower rivalry by agreeing on permanent neutrality."
    ]
  },
  {
    year: "1968",
    event: "Prague Spring",
    era: "Cold War",
    significanceLong: "Reform efforts in Czechoslovakia revealed both popular demand for liberalization and strict limits of Soviet tolerance. The crackdown became a reference point for dissent, legitimacy debates, and later resistance movements.",
    significanceShort: "Its suppression exposed limits of reform inside the Soviet bloc.",
    significanceOptions: [
      "Its suppression exposed limits of reform inside the Soviet bloc.",
      "It permanently liberalized Eastern Europe under Soviet endorsement.",
      "It was primarily an economic summit with no political implications."
    ]
  },
  {
    year: "1989",
    event: "Year of Revolution",
    era: "Cold War",
    significanceLong: "Revolutions across Eastern Europe dismantled communist rule with remarkable speed and varying local paths. Together they accelerated systemic collapse in the Soviet sphere and reshaped Europe’s ideological map.",
    significanceShort: "1989 toppled communist regimes and sped the Cold War’s end.",
    significanceOptions: [
      "1989 toppled communist regimes and sped the Cold War’s end.",
      "It strengthened one-party communist control through coordinated reforms.",
      "It marked cultural protest without major regime change."
    ]
  },
  {
    year: "1991",
    event: "Treaty of Maastricht",
    era: "Contemporary Europe",
    significanceLong: "Maastricht deepened integration by expanding shared institutions, policy coordination, and plans for monetary union. It pushed European cooperation from loose coordination toward a more ambitious political project.",
    significanceShort: "It moved Europe toward deeper institutional and monetary integration.",
    significanceOptions: [
      "It moved Europe toward deeper institutional and monetary integration.",
      "It dissolved shared institutions in favor of strict national isolation.",
      "It focused only on cultural exchange with no governance changes."
    ]
  },
  {
    year: "1993",
    event: "European Union Formed",
    era: "Contemporary Europe",
    significanceLong: "The EU’s launch consolidated prior treaties into a stronger supranational framework with wider policy reach. This institutional shift altered how member states negotiated sovereignty, regulation, and collective identity.",
    significanceShort: "EU formation institutionalized stronger supranational coordination across Europe.",
    significanceOptions: [
      "EU formation institutionalized stronger supranational coordination across Europe.",
      "It replaced cooperation with a temporary bilateral trade pact only.",
      "It was mostly symbolic and left state coordination unchanged."
    ]
  }
].map((item) => ({
  type: 'text',
  prompt: `${item.year} — ${item.event}`,
  era: item.era,
  answers: [
    { type: 'text-input', label: 'Event:', correct: item.event },
    { type: 'text-input', label: 'Year:', correct: item.year },
    {
      type: 'text-mc',
      label: 'Significance:',
      options: item.significanceOptions,
      correct: item.significanceShort
    }
  ],
  significanceLong: item.significanceLong,
  significanceShort: item.significanceShort,
  significanceChain: item.significanceChain || buildSignificanceChain(item)
}));
