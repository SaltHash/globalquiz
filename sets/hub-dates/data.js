const quizData = [
  {
    year: "1350",
    event: "Bubonic Plague",
    era: "Renaissance",
    significanceLong:
      "By 1350, the plague wave that hit England, France, and the Italian city-states shattered labor patterns, forcing elites and institutions to renegotiate work and authority. Across the 1350s, this destabilization widened space for new economic habits and cultural priorities.",
    significanceShort:
      "Demographic collapse pushed long-term social and economic restructuring.",
    significanceOptions: [
      "Demographic collapse pushed long-term social and economic restructuring.",
      "A brief health crisis mostly remembered for local suffering, with little structural change.",
      "A military disruption that mainly altered borders rather than social systems.",
    ],
  },
  {
    year: "1445",
    event: "Invention of the printing press",
    era: "Renaissance",
    significanceLong:
      "Around 1445 in Mainz (in the Holy Roman Empire, now Germany), cheap reproducible text transformed how ideas were stored, corrected, and circulated among different social groups. By the late 1400s and 1500s across German states, France, and England, this changed the scale of religious debate, literacy growth, and political persuasion.",
    significanceShort:
      "Mass print reshaped idea-sharing, literacy, and public argument.",
    significanceOptions: [
      "Mass print reshaped idea-sharing, literacy, and public argument.",
      "It was mostly a decorative craft innovation used by courts and monasteries.",
      "It standardized handwriting traditions but did not change who accessed ideas.",
    ],
  },
  {
    year: "1487",
    event: "Dias rounded the Cape of Good Hope",
    era: "Renaissance",
    significanceLong:
      "In 1487, Bartolomeu Dias sailing for Portugal demonstrated a workable maritime corridor around southern Africa linking Atlantic and Indian Ocean trade systems. By the 1490s and early 1500s, Portugal and then Spain used this route to build imperial and commercial strategies centered on long-distance sea exchange.",
    significanceShort:
      "A viable ocean route redirected trade and imperial strategy.",
    significanceOptions: [
      "A viable ocean route redirected trade and imperial strategy.",
      "The voyage mainly settled inland border disputes in southern Africa.",
      "It proved overland caravans remained the dominant path for global trade.",
    ],
  },
  {
    year: "1517",
    event: "Luther’s 95 Theses",
    era: "Reformation",
    significanceLong:
      "In 1517 at Wittenberg in the Holy Roman Empire (today Germany), Luther’s challenge accelerated fractures in religious authority and made conflict politically unavoidable for rulers and communities. Through the 1520s-1550s in German principalities, Switzerland, and England, these disputes reshaped institutions, education, and confessional identity.",
    significanceShort:
      "It triggered confessional conflict that reworked authority across states.",
    significanceOptions: [
      "It triggered confessional conflict that reworked authority across states.",
      "It was a local clerical complaint resolved quickly inside existing church structures.",
      "It mainly changed monastic architecture without wider political effects.",
    ],
  },
  {
    year: "1648",
    event: "Peace of Westphalia",
    era: "State Building",
    significanceLong:
      "In 1648, the treaties signed at Münster and Osnabrück in the Holy Roman Empire ended major confessional wars involving powers such as France, Sweden, and the Habsburg lands. The settlement formalized negotiation among territorially defined states and reinforced a framework where sovereignty and balance outweighed universal religious authority.",
    significanceShort:
      "It strengthened sovereign-state diplomacy after religious wars.",
    significanceOptions: [
      "It strengthened sovereign-state diplomacy after religious wars.",
      "It restored a unified religious hierarchy as the central political referee.",
      "It had little effect beyond ceremonial court protocol.",
    ],
  },
  {
    year: "1687",
    event: "Principia",
    era: "Scientific Revolution",
    significanceLong:
      "When published in England in 1687, Newton’s synthesis gave scholars in Britain, the Dutch Republic, and France a shared mathematical language for motion and force. By the early 1700s, this credibility for predictive, law-based inquiry deeply influenced scientific institutions and Enlightenment confidence in reason.",
    significanceShort:
      "It established predictive physical laws with broad intellectual authority.",
    significanceOptions: [
      "It established predictive physical laws with broad intellectual authority.",
      "It argued natural events were unknowable and beyond mathematical study.",
      "It was mainly a theological text with little scientific uptake.",
    ],
  },
  {
    year: "1688",
    event: "Glorious Revolution",
    era: "State Building",
    significanceLong:
      "In 1688-1689 in England, the overthrow of James II and accession of William and Mary reset royal legitimacy around legal limits and parliamentary consent rather than inherited absolutism alone. The post-1689 settlement influenced later debates on rights, representation, and constitutional governance in Britain, the Dutch Republic, and the Atlantic world.",
    significanceShort:
      "It tied monarchy more tightly to parliamentary constitutional limits.",
    significanceOptions: [
      "It tied monarchy more tightly to parliamentary constitutional limits.",
      "It replaced parliamentary politics with permanent military dictatorship.",
      "It ended succession disputes without affecting constitutional ideas.",
    ],
  },
  {
    year: "1765",
    event: "Spinning Jenny",
    era: "Industrial Revolution",
    significanceLong:
      "Introduced in Britain in 1764-1765, the spinning jenny multiplied thread output per worker and helped shift textile production toward mechanized, centralized systems. From the 1770s onward in Britain and then parts of Belgium and France, that productivity change fed industrial growth, new labor discipline, and urban transformation.",
    significanceShort:
      "Higher textile output accelerated factory-style industrial production.",
    significanceOptions: [
      "Higher textile output accelerated factory-style industrial production.",
      "It reduced cloth production and reinforced guild handcraft dominance.",
      "It mattered mainly as a luxury tool for aristocratic households.",
    ],
  },
  {
    year: "1789",
    event: "Beginning of French Revolution",
    era: "French Revolution and Napoleon",
    significanceLong:
      "Beginning in France in 1789, revolutionary upheaval challenged inherited privilege and sovereign authority by grounding legitimacy in citizenship and national will. Through the 1790s and Napoleonic era, conflicts and reforms carried these arguments about rights, law, and participation into Belgium, the German states, and Italy.",
    significanceShort:
      "It recast legitimacy around citizenship, rights, and national sovereignty.",
    significanceOptions: [
      "It recast legitimacy around citizenship, rights, and national sovereignty.",
      "It restored feudal privilege as the preferred model for modern governance.",
      "It was chiefly a tax protest with minimal ideological consequences.",
    ],
  },
  {
    year: "1815",
    event: "Congress of Vienna",
    era: "French Revolution and Napoleon",
    significanceLong:
      "At Vienna in 1814-1815, Austria, Britain, Prussia, Russia, and a restored France built a conservative order to contain revolutionary spillover through consultation and balance. This framework shaped nineteenth-century crisis management even as nationalist pressures in Italy, the German states, and the Balkans repeatedly tested it.",
    significanceShort:
      "It organized a balance-of-power order to manage the postwar continent.",
    significanceOptions: [
      "It organized a balance-of-power order to manage the postwar continent.",
      "It abolished diplomacy in favor of unilateral imperial annexation.",
      "It prioritized immediate democratic federation across all major states.",
    ],
  },
  {
    year: "1832",
    event: "Great Reform Bill",
    era: "Liberal Revolutions and Unification",
    significanceLong:
      "In the United Kingdom in 1832, this law widened representation and reduced structural distortions such as rotten boroughs in England and Wales. Though limited, it legitimized incremental parliamentary reform, setting precedents later expanded by reforms in 1867 and 1884.",
    significanceShort:
      "It expanded representation and normalized gradual parliamentary reform.",
    significanceOptions: [
      "It expanded representation and normalized gradual parliamentary reform.",
      "It abolished elections and centralized authority in the monarchy.",
      "It had no meaningful effect on representation or reform politics.",
    ],
  },
  {
    year: "1848",
    event: "Year of Revolution (Earlier)",
    era: "Liberal Revolutions and Unification",
    significanceLong:
      "In 1848, uprisings across France, the Austrian Empire, the German states, and northern Italy exposed the scale of liberal and nationalist demands, even where governments reasserted control by 1849. These failures still left organizational experience and ideological momentum that shaped later state-building in Italy and Germany.",
    significanceShort:
      "Failed uprisings still advanced liberal and nationalist momentum.",
    significanceOptions: [
      "Failed uprisings still advanced liberal and nationalist momentum.",
      "The revolts produced a stable continental republic within a year.",
      "They were isolated peasant riots with no ideological continuity.",
    ],
  },
  {
    year: "1871",
    event: "Unification of Germany",
    era: "Liberal Revolutions and Unification",
    significanceLong:
      "In 1871, Prussia-led unification created the German Empire at Europe’s center under militarized institutions and growing industrial power. Germany’s emergence altered alliance logic and strategic calculations for France, Austria-Hungary, Russia, and Britain for decades.",
    significanceShort:
      "A powerful newly unified state transformed the strategic balance.",
    significanceOptions: [
      "A powerful newly unified state transformed the strategic balance.",
      "It dissolved central authority and fragmented regional territories further.",
      "It remained culturally symbolic with negligible diplomatic impact.",
    ],
  },
  {
    year: "1914",
    event: "Outbreak of WWI",
    era: "World War I",
    significanceLong:
      "From 1914, war between blocs led by Germany and Austria-Hungary versus France, Britain, and Russia mobilized societies and economies at unprecedented scale. By 1918, the German, Austro-Hungarian, Ottoman, and Russian empires had collapsed, redrawing maps and seeding tensions that shaped the twentieth century.",
    significanceShort:
      "Total war collapsed empires and reordered twentieth-century politics.",
    significanceOptions: [
      "Total war collapsed empires and reordered twentieth-century politics.",
      "It remained a short border skirmish with little societal mobilization.",
      "It stabilized dynastic empires and reduced nationalist pressures.",
    ],
  },
  {
    year: "1919",
    event: "Treaty of Versailles",
    era: "Interwar and World War II",
    significanceLong:
      "In 1919 at Paris, the treaty imposed punitive terms on Germany while trying to institutionalize a new order through the League of Nations. Its contradictions fed revisionism in Germany, grievance politics in Central Europe, and unstable diplomacy across the 1920s and 1930s.",
    significanceShort:
      "Punitive peace terms deepened instability in the interwar period.",
    significanceOptions: [
      "Punitive peace terms deepened instability in the interwar period.",
      "It produced broad reconciliation that removed major geopolitical grievances.",
      "It had no role in shaping interwar political radicalization.",
    ],
  },
  {
    year: "1945",
    event: "Yalta Conference",
    era: "Interwar and World War II",
    significanceLong:
      "At Yalta in February 1945, the United States, United Kingdom, and Soviet Union coordinated immediate postwar arrangements while exposing incompatible visions for Eastern and Central Europe. Those unresolved tensions hardened into rival blocs and institutions by 1947-1949, especially over Poland and Germany.",
    significanceShort:
      "Postwar planning there foreshadowed Cold War bloc division.",
    significanceOptions: [
      "Postwar planning there foreshadowed Cold War bloc division.",
      "It created a unified continental military under shared command.",
      "It ended superpower rivalry by agreeing on permanent neutrality.",
    ],
  },
  {
    year: "1968",
    event: "Prague Spring",
    era: "Cold War",
    significanceLong:
      "In Czechoslovakia in 1968, reform efforts under Dubček revealed strong demand for liberalization and the strict limits of Soviet tolerance. The Warsaw Pact invasion in August 1968 became a reference point for dissent and legitimacy debates in Czechoslovakia, Poland, and Hungary.",
    significanceShort:
      "Its suppression exposed limits of reform inside the Soviet bloc.",
    significanceOptions: [
      "Its suppression exposed limits of reform inside the Soviet bloc.",
      "It permanently liberalized the region under superpower endorsement.",
      "It was primarily an economic summit with no political implications.",
    ],
  },
  {
    year: "1989",
    event: "Year of Revolution (Later)",
    era: "Cold War",
    significanceLong:
      "In 1989, revolutions in Poland, Hungary, East Germany, Czechoslovakia, and Romania dismantled one-party rule with different local paths. Together they accelerated the collapse of the Soviet sphere, culminating in German reunification in 1990 and Soviet dissolution in 1991.",
    significanceShort:
      "These uprisings toppled one-party regimes and sped the Cold War’s end.",
    significanceOptions: [
      "These uprisings toppled one-party regimes and sped the Cold War’s end.",
      "It strengthened one-party control through coordinated reforms.",
      "It marked cultural protest without major regime change.",
    ],
  },
  {
    year: "1991",
    event: "Treaty of Maastricht",
    era: "Contemporary Europe",
    significanceLong:
      "Signed in 1991 and entering into force in 1993, the Maastricht Treaty among twelve EC states (including France, Germany, Italy, and Spain) deepened integration through shared institutions and plans for monetary union. It pushed cooperation from loose coordination toward a more ambitious political project that later enabled the euro in 1999.",
    significanceShort:
      "It moved the region toward deeper institutional and monetary integration.",
    significanceOptions: [
      "It moved the region toward deeper institutional and monetary integration.",
      "It dissolved shared institutions in favor of strict national isolation.",
      "It focused only on cultural exchange with no governance changes.",
    ],
  },
  {
    year: "1993",
    event: "European Union Formed",
    era: "Contemporary Europe",
    significanceLong:
      "When the European Union was formally established in 1993, member states such as France, Germany, Italy, and Spain consolidated prior treaties into a stronger supranational framework with wider policy reach. This shift changed how states negotiated sovereignty, regulation, and collective identity through the 1990s and 2000s.",
    significanceShort:
      "Its formation institutionalized stronger supranational coordination across the region.",
    significanceOptions: [
      "Its formation institutionalized stronger supranational coordination across the region.",
      "It replaced cooperation with a temporary bilateral trade pact only.",
      "It was mostly symbolic and left state coordination unchanged.",
    ],
  },
].map((item) => {
  let eventAccepted;
  if (item.year === "1517") {
    eventAccepted = ["Luther's 95 Theses"];
  } else if (item.year === "1848") {
    // Allow answers without the (Earlier) suffix.
    eventAccepted = [
      "Year of Revolution",
      "Year of Revolution Earlier",
      "Earlier Year of Revolution",
    ];
  } else if (item.year === "1989") {
    // Allow answers without the (Later) suffix.
    eventAccepted = [
      "Year of Revolution",
      "Year of Revolution Later",
      "Later Year of Revolution",
    ];
  }
  return {
    type: "text",
    prompt: `${item.year} — ${item.event}`,
    era: item.era,
    answers: [
      {
        type: "text-input",
        label: "Event:",
        correct: item.event,
        ...(eventAccepted ? { accepted: eventAccepted } : {}),
      },
      { type: "text-input", label: "Year:", correct: item.year },
      {
        type: "text-mc",
        label: "Significance:",
        options: item.significanceOptions,
        correct: item.significanceShort,
      },
    ],
    significanceLong: item.significanceLong,
    significanceShort: item.significanceShort,
  };
});
