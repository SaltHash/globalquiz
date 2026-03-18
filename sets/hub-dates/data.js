const THEOPTIONS = [
  "Renaissance",
  "Reformation",
  "State Building",
  "Scientific Revolution",
  "Industrial Revolution",
  "French Revolution and Napoleon",
  "Liberal Revolutions and Unification",
  "World War I",
  "Interwar and World War II",
  "Cold War",
  "Contemporary Europe"
];

function eventImage(year, event) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='500' height='300'>
    <rect width='100%' height='100%' fill='#1f2937'/>
    <text x='50%' y='45%' fill='#ff9169' font-size='46' text-anchor='middle' font-family='Arial'>${year}</text>
    <text x='50%' y='62%' fill='#e5e7eb' font-size='22' text-anchor='middle' font-family='Arial'>${event}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const quizData = [
  ["1350", "Bubonic Plague", "Renaissance", "Decimated Europe’s population, weakened feudal structures, and accelerated long-term social and economic change."],
  ["1445", "Invention of the printing press", "Renaissance", "Massively expanded access to knowledge and helped spread literacy, new ideas, and reform movements."],
  ["1487", "Dias rounded the Cape of Good Hope", "Renaissance", "Opened a direct sea route around Africa, transforming trade networks and launching European maritime expansion."],
  ["1517", "Luther’s 95 Theses", "Reformation", "Triggered the Protestant Reformation and permanently reshaped religion, politics, and authority in Europe."],
  ["1648", "Peace of Westphalia", "State Building", "Ended major religious wars and strengthened the principle of sovereign states in European politics."],
  ["1687", "Principia", "Scientific Revolution", "Laid out universal laws of motion and gravitation, anchoring modern scientific thought."],
  ["1688", "Glorious Revolution", "State Building", "Confirmed parliamentary supremacy and advanced constitutional monarchy in Britain."],
  ["1765", "Spinning Jenny", "Industrial Revolution", "Increased textile productivity and accelerated industrialization and factory-based production."],
  ["1789", "Beginning of French Revolution", "French Revolution and Napoleon", "Challenged absolute monarchy and spread new ideas about rights, citizenship, and popular sovereignty."],
  ["1815", "Congress of Vienna", "French Revolution and Napoleon", "Restored balance-of-power diplomacy and attempted long-term political stability after Napoleon."],
  ["1832", "Great Reform Bill", "Liberal Revolutions and Unification", "Expanded political representation in Britain and strengthened reform through parliamentary means."],
  ["1848", "Year of Revolution", "Liberal Revolutions and Unification", "Revealed the power of nationalist and liberal movements even where uprisings failed immediately."],
  ["1871", "Unification of Germany", "Liberal Revolutions and Unification", "Created a powerful new nation-state and shifted the European balance of power."],
  ["1914", "Outbreak of WWI", "World War I", "Began a total war that destroyed old empires and transformed global politics."],
  ["1919", "Treaty of Versailles", "Interwar and World War II", "Redrew borders and imposed punitive terms that deepened interwar tensions."],
  ["1945", "Yalta Conference", "Interwar and World War II", "Set terms for postwar Europe and helped define spheres of influence that fed Cold War rivalry."],
  ["1968", "Prague Spring", "Cold War", "Demonstrated limits of reform within Soviet control and inspired later resistance in Eastern Europe."],
  ["1989", "Year of Revolution", "Cold War", "Collapsed communist regimes across Eastern Europe and accelerated the end of the Cold War."],
  ["1991", "Treaty of Maastricht", "Contemporary Europe", "Deepened European integration through shared institutions and a path toward monetary union."],
  ["1993", "European Union Formed", "Contemporary Europe", "Institutionalized supranational cooperation and marked a new phase of European unity."]
].map(([year, event, era, impact]) => ({
  type: 'image',
  question: 'Identify the event and its significance.',
  image: eventImage(year, event),
  answers: [
    { type: 'text-input', label: 'Name:', correct: event },
    { type: 'text-input', label: 'Artist:', correct: year },
    { type: 'text-mc', label: 'Era:', options: THEOPTIONS, correct: era },
    {
      type: 'text-mc',
      label: 'Significance:',
      options: [
        'Had little effect beyond local politics and did not change long-term European development.',
        'Primarily remembered as a cultural moment with limited political or economic consequences.',
        'A short-term crisis that was quickly reversed without lasting historical impact.',
        'Mostly symbolic at the time and disconnected from broader European transformations.',
        impact
      ],
      correct: impact
    },
    { type: 'text-input', label: 'Significance (Short):', correct: impact }
  ]
}));
