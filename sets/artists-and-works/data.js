const THEOPTIONS = [
  "Renaissance",
  "Reformation",
  "Counter Reformation",
  "Dutch Baroque Period",
  "Absolutism",
  "Constitutionalism",
  "Scientific Revolution",
  "Enlightenment",
  "French Revolution",
  "Napoleonic Era",
  "Industrial Revolution",
  "Liberal Revolutions and Unification",
  "Post 1871 State Building (La Belle Époque)",
  "WWI",
  "Interwar Years",
  "WWII",
  "Cold War",
  "Contemporary Europe,"
];

const quizData = [
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_Arnolfini_portrait_%281434%29.jpg/500px-The_Arnolfini_portrait_%281434%29.jpg",
    significanceLong: "One of the earliest and most complex uses of oil paint in Northern Europe, showcasing mastery of light, texture, and realistic detail with a convex mirror demonstrating technical innovation.",
    significanceShort: "One of the earliest and most complex uses of oil paint in Northern Europe",
    significanceOptions: [
      "A solemn depiction of a royal wedding ceremony, notable for its strict adherence to medieval flat perspective and lack of symbolic objects.",
      "An early study in anatomical proportion, focusing entirely on the structural realism of the human figures while ignoring the surrounding domestic space.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
      "One of the earliest and most complex uses of oil paint in Northern Europe, showcasing mastery of light, texture, and realistic detail with a convex mirror demonstrating technical innovation."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Arnolfini Portrait"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Van Eyck"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Renaissance"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A solemn depiction of a royal wedding ceremony, notable for its strict adherence to medieval flat perspective and lack of symbolic objects.",
          "An early study in anatomical proportion, focusing entirely on the structural realism of the human figures while ignoring the surrounding domestic space.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
          "One of the earliest and most complex uses of oil paint in Northern Europe, showcasing mastery of light, texture, and realistic detail with a convex mirror demonstrating technical innovation."
        ],
        correct: "One of the earliest and most complex uses of oil paint in Northern Europe, showcasing mastery of light, texture, and realistic detail with a convex mirror demonstrating technical innovation."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/500px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    significanceLong: "A landmark of Italian art among the first large-scale paintings since antiquity to depict a pagan goddess, reflecting a powerful ruling family's embrace of Neoplatonism and classical mythology.",
    significanceShort: "A landmark of Italian art among the first large-scale paintings since antiquity to depict a pagan goddess,...",
    significanceOptions: [
      "A straightforward biblical illustration of a baptism, utilizing newly discovered oil techniques to create luminous skin tones on the central figure.",
      "A political allegory commissioned to celebrate naval victories, showing maritime dominance through the turbulent depiction of ocean waves and wind.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
      "A landmark of Italian art among the first large-scale paintings since antiquity to depict a pagan goddess, reflecting a powerful ruling family's embrace of Neoplatonism and classical mythology."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Birth of Venus"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Botticelli"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Renaissance"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A straightforward biblical illustration of a baptism, utilizing newly discovered oil techniques to create luminous skin tones on the central figure.",
          "A political allegory commissioned to celebrate naval victories, showing maritime dominance through the turbulent depiction of ocean waves and wind.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
          "A landmark of Italian art among the first large-scale paintings since antiquity to depict a pagan goddess, reflecting a powerful ruling family's embrace of Neoplatonism and classical mythology."
        ],
        correct: "A landmark of Italian art among the first large-scale paintings since antiquity to depict a pagan goddess, reflecting a powerful ruling family's embrace of Neoplatonism and classical mythology."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/500px-Da_Vinci_Vitruve_Luc_Viatour.jpg",
    significanceLong: "This drawing perfectly encapsulates the humanist ideal of humanity as the measure of all things, combining art and science to explore ideal human proportions.",
    significanceShort: "This drawing perfectly encapsulates the humanist ideal of humanity as the measure of all things",
    significanceOptions: [
      "An early anatomical sketch intended strictly for medical practitioners, focusing on the internal musculature rather than geometric perfection.",
      "A preliminary study for a large-scale crucifix sculpture, experimenting with multiple arm positions to capture the agony of martyrdom.",
      "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
      "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
      "This drawing perfectly encapsulates the humanist ideal of humanity as the measure of all things, combining art and science to explore ideal human proportions."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Vitruvian Man"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Da Vinci"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Renaissance"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "An early anatomical sketch intended strictly for medical practitioners, focusing on the internal musculature rather than geometric perfection.",
          "A preliminary study for a large-scale crucifix sculpture, experimenting with multiple arm positions to capture the agony of martyrdom.",
          "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
          "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
          "This drawing perfectly encapsulates the humanist ideal of humanity as the measure of all things, combining art and science to explore ideal human proportions."
        ],
        correct: "This drawing perfectly encapsulates the humanist ideal of humanity as the measure of all things, combining art and science to explore ideal human proportions."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/500px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg",
    significanceLong: "A revolutionary mural using perspective and psychological realism to depict a central biblical figure announcing his betrayal with individualized emotional reactions among followers.",
    significanceShort: "A revolutionary mural using perspective and psychological realism to depict a central biblical figure annou...",
    significanceOptions: [
      "A standard monastic dining hall fresco that strictly adheres to the medieval tradition of placing the traitor on the opposite side of the table for clarity.",
      "An experimental oil on canvas work celebrated for its preservation of vibrant, unblemished colors despite centuries of exposure to the elements.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "A revolutionary mural using perspective and psychological realism to depict a central biblical figure announcing his betrayal with individualized emotional reactions among followers."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "The Last Supper"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Da Vinci"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Renaissance"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A standard monastic dining hall fresco that strictly adheres to the medieval tradition of placing the traitor on the opposite side of the table for clarity.",
          "An experimental oil on canvas work celebrated for its preservation of vibrant, unblemished colors despite centuries of exposure to the elements.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "A revolutionary mural using perspective and psychological realism to depict a central biblical figure announcing his betrayal with individualized emotional reactions among followers."
        ],
        correct: "A revolutionary mural using perspective and psychological realism to depict a central biblical figure announcing his betrayal with individualized emotional reactions among followers."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Michelangelo%27s_Pieta_5450_cropncleaned_edit.jpg/500px-Michelangelo%27s_Pieta_5450_cropncleaned_edit.jpg",
    significanceLong: "Carved when the artist was only 24, this marble sculpture displayed unprecedented technical skill and emotional depth synthesizing humanist ideals of beauty with religious devotion.",
    significanceShort: "Carved when the artist was only 24, this marble sculpture displayed unprecedented technical skill and emoti...",
    significanceOptions: [
      "A realistic depiction of mourning that intentionally emphasizes the gruesome wounds and physical decay of the martyred figure to inspire fear.",
      "A roughly hewn, unfinished stone monument designed to show the artist's struggle with the material rather than achieving anatomical perfection.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
      "Carved when the artist was only 24, this marble sculpture displayed unprecedented technical skill and emotional depth synthesizing humanist ideals of beauty with religious devotion."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Pietà"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Michelangelo"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Renaissance"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A realistic depiction of mourning that intentionally emphasizes the gruesome wounds and physical decay of the martyred figure to inspire fear.",
          "A roughly hewn, unfinished stone monument designed to show the artist's struggle with the material rather than achieving anatomical perfection.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
          "Carved when the artist was only 24, this marble sculpture displayed unprecedented technical skill and emotional depth synthesizing humanist ideals of beauty with religious devotion."
        ],
        correct: "Carved when the artist was only 24, this marble sculpture displayed unprecedented technical skill and emotional depth synthesizing humanist ideals of beauty with religious devotion."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/%27David%27_by_Michelangelo_Fir_JBU004.jpg/500px-%27David%27_by_Michelangelo_Fir_JBU004.jpg",
    significanceLong: "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation, embodying intellectual courage and symbolizing a city-state's republican independence.",
    significanceShort: "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in...",
    significanceOptions: [
      "A victory monument depicting a triumphant warrior holding a severed head, intended to intimidate rival Italian city-states.",
      "A purely decorative garden sculpture meant to showcase the exaggerated, elongated proportions typical of the Mannerist style.",
      "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
      "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation, embodying intellectual courage and symbolizing a city-state's republican independence."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "David"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Michelangelo"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Renaissance"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A victory monument depicting a triumphant warrior holding a severed head, intended to intimidate rival Italian city-states.",
          "A purely decorative garden sculpture meant to showcase the exaggerated, elongated proportions typical of the Mannerist style.",
          "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
          "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation, embodying intellectual courage and symbolizing a city-state's republican independence."
        ],
        correct: "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation, embodying intellectual courage and symbolizing a city-state's republican independence."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/500px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    significanceLong: "The centerpiece of a major papal chapel ceiling depicting the moment the divine breathes life into the first man with nearly touching fingers, becoming one of the most iconic images in Western art.",
    significanceShort: "The centerpiece of a major papal chapel ceiling depicting the moment the divine breathes life into the firs...",
    significanceOptions: [
      "An oil painting on canvas designed as an altarpiece, focusing heavily on the intricate details of the earthly landscape beneath the figures.",
      "A heavily shadowed, chaotic composition intended to warn viewers about the impending consequences of original sin and divine judgment.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
      "The centerpiece of a major papal chapel ceiling depicting the moment the divine breathes life into the first man with nearly touching fingers, becoming one of the most iconic images in Western art."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "The Creation of Adam"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Michelangelo"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Renaissance"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "An oil painting on canvas designed as an altarpiece, focusing heavily on the intricate details of the earthly landscape beneath the figures.",
          "A heavily shadowed, chaotic composition intended to warn viewers about the impending consequences of original sin and divine judgment.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
          "The centerpiece of a major papal chapel ceiling depicting the moment the divine breathes life into the first man with nearly touching fingers, becoming one of the most iconic images in Western art."
        ],
        correct: "The centerpiece of a major papal chapel ceiling depicting the moment the divine breathes life into the first man with nearly touching fingers, becoming one of the most iconic images in Western art."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/500px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    significanceLong: "Painted for papal apartments, depicting ancient thinkers gathered with Plato and Aristotle at the center, celebrating the period's recovery of classical learning and the compatibility of philosophy and faith.",
    significanceShort: "Painted for papal apartments, depicting ancient thinkers gathered with Plato and Aristotle at the center, c...",
    significanceOptions: [
      "A dramatic depiction of a religious council condemning heresy, using extreme chiaroscuro to highlight the righteous clergy over the condemned.",
      "An exact historical recreation of an ancient Greek academy, completely devoid of contemporary portraits or grand architectural elements.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
      "Painted for papal apartments, depicting ancient thinkers gathered with Plato and Aristotle at the center, celebrating the period's recovery of classical learning and the compatibility of philosophy and faith."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "School of Athens"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Raphael"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Renaissance"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A dramatic depiction of a religious council condemning heresy, using extreme chiaroscuro to highlight the righteous clergy over the condemned.",
          "An exact historical recreation of an ancient Greek academy, completely devoid of contemporary portraits or grand architectural elements.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
          "Painted for papal apartments, depicting ancient thinkers gathered with Plato and Aristotle at the center, celebrating the period's recovery of classical learning and the compatibility of philosophy and faith."
        ],
        correct: "Painted for papal apartments, depicting ancient thinkers gathered with Plato and Aristotle at the center, celebrating the period's recovery of classical learning and the compatibility of philosophy and faith."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Titian_Bacchus_and_Ariadne.jpg/500px-Titian_Bacchus_and_Ariadne.jpg",
    significanceLong: "This dynamic mythological scene showcases revolutionary use of color and movement drawn from classical texts, exemplifying the era's embrace of pagan mythology as worthy of serious artistic treatment.",
    significanceShort: "This dynamic mythological scene showcases revolutionary use of color and movement drawn from classical text...",
    significanceOptions: [
      "A quiet, static portrait of two lovers in a landscape, emphasizing precise, linear draftsmanship over color and dynamic action.",
      "A somber Christian allegory disguised as a mythological event, meant to critique the decadent excesses of the contemporary aristocracy.",
      "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "This dynamic mythological scene showcases revolutionary use of color and movement drawn from classical texts, exemplifying the era's embrace of pagan mythology as worthy of serious artistic treatment."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Bacchus and Ariadne"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Titian"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Renaissance"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A quiet, static portrait of two lovers in a landscape, emphasizing precise, linear draftsmanship over color and dynamic action.",
          "A somber Christian allegory disguised as a mythological event, meant to critique the decadent excesses of the contemporary aristocracy.",
          "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "This dynamic mythological scene showcases revolutionary use of color and movement drawn from classical texts, exemplifying the era's embrace of pagan mythology as worthy of serious artistic treatment."
        ],
        correct: "This dynamic mythological scene showcases revolutionary use of color and movement drawn from classical texts, exemplifying the era's embrace of pagan mythology as worthy of serious artistic treatment."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/After_Hans_Holbein_the_Younger_-_Portrait_of_Henry_VIII_-_Google_Art_Project.jpg/500px-After_Hans_Holbein_the_Younger_-_Portrait_of_Henry_VIII_-_Google_Art_Project.jpg",
    significanceLong: "This iconic frontal portrait projects overwhelming royal authority and effectively became the definitive visual representation of a monarch's power, especially significant during a major break with the Roman church.",
    significanceShort: "This iconic frontal portrait projects overwhelming royal authority and effectively became the definitive vi...",
    significanceOptions: [
      "An intimate, psychological study meant to reveal the monarch's inner vulnerability and growing religious doubts in his later years.",
      "A rapidly executed sketch intended only for private court use, deliberately ignoring the intricate details of fabric and jewelry.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
      "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
      "This iconic frontal portrait projects overwhelming royal authority and effectively became the definitive visual representation of a monarch's power, especially significant during a major break with the Roman church."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Portrait of Henry VIII"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Holbein"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Reformation"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "An intimate, psychological study meant to reveal the monarch's inner vulnerability and growing religious doubts in his later years.",
          "A rapidly executed sketch intended only for private court use, deliberately ignoring the intricate details of fabric and jewelry.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
          "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
          "This iconic frontal portrait projects overwhelming royal authority and effectively became the definitive visual representation of a monarch's power, especially significant during a major break with the Roman church."
        ],
        correct: "This iconic frontal portrait projects overwhelming royal authority and effectively became the definitive visual representation of a monarch's power, especially significant during a major break with the Roman church."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Anne_de_Cl%C3%A8ves_-_Hans_Holbein_le_Jeune_-_Mus%C3%A9e_du_Louvre_Peintures_INV_1348_%3B_MR_756_-_version_2.jpg/500px-Anne_de_Cl%C3%A8ves_-_Hans_Holbein_le_Jeune_-_Mus%C3%A9e_du_Louvre_Peintures_INV_1348_%3B_MR_756_-_version_2.jpg",
    significanceLong: "This painting is a pivotal example of portraiture's political function during a time of religious upheaval, showing how art could serve and distort high-stakes diplomatic negotiations.",
    significanceShort: "This painting is a pivotal example of portraiture's political function during a time of religious upheaval,...",
    significanceOptions: [
      "A deeply emotional and highly expressive depiction intended to capture the passionate romance between a newlywed royal couple.",
      "An allegorical piece showing the subject as a classical goddess, entirely disconnected from the reality of 16th-century court fashion.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
      "This painting is a pivotal example of portraiture's political function during a time of religious upheaval, showing how art could serve and distort high-stakes diplomatic negotiations."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Anne of Cleves"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Holbein"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Reformation"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A deeply emotional and highly expressive depiction intended to capture the passionate romance between a newlywed royal couple.",
          "An allegorical piece showing the subject as a classical goddess, entirely disconnected from the reality of 16th-century court fashion.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
          "This painting is a pivotal example of portraiture's political function during a time of religious upheaval, showing how art could serve and distort high-stakes diplomatic negotiations."
        ],
        correct: "This painting is a pivotal example of portraiture's political function during a time of religious upheaval, showing how art could serve and distort high-stakes diplomatic negotiations."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Caravaggio_-_Giuditta_e_Oloferne_%28ca._1599%29.jpg/500px-Caravaggio_-_Giuditta_e_Oloferne_%28ca._1599%29.jpg",
    significanceLong: "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism as a hallmark of the period's dramatic style intended to move viewers emotionally.",
    significanceShort: "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking re...",
    significanceOptions: [
      "A serene and highly idealized interpretation of a classical myth, utilizing soft pastel colors to avoid offending the viewer's sensibilities.",
      "A strictly symmetrical composition designed to evoke the rational, orderly principles of the early Renaissance rather than emotional turmoil.",
      "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism as a hallmark of the period's dramatic style intended to move viewers emotionally."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Judith Slaying Holofernes"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Caravaggio"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Counter Reformation"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A serene and highly idealized interpretation of a classical myth, utilizing soft pastel colors to avoid offending the viewer's sensibilities.",
          "A strictly symmetrical composition designed to evoke the rational, orderly principles of the early Renaissance rather than emotional turmoil.",
          "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism as a hallmark of the period's dramatic style intended to move viewers emotionally."
        ],
        correct: "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism as a hallmark of the period's dramatic style intended to move viewers emotionally."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ecstasy_of_St._Teresa_HDR.jpg/500px-Ecstasy_of_St._Teresa_HDR.jpg",
    significanceLong: "This breathtaking marble sculptural group set within a theatrical architectural frame depicts a mystical vision, exemplifying the seventeenth-century strategy of engaging the senses to inspire religious devotion.",
    significanceShort: "This breathtaking marble sculptural group set within a theatrical architectural frame depicts a mystical vi...",
    significanceOptions: [
      "A restrained, purely classical monument focused entirely on the stoic endurance of suffering, deliberately avoiding any suggestion of physical pleasure.",
      "A free-standing bronze sculpture meant to be viewed from all angles in a public square, representing secular triumph rather than spiritual revelation.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
      "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
      "This breathtaking marble sculptural group set within a theatrical architectural frame depicts a mystical vision, exemplifying the seventeenth-century strategy of engaging the senses to inspire religious devotion."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "The Ecstasy of St. Teresa"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Bernini"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Counter Reformation"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A restrained, purely classical monument focused entirely on the stoic endurance of suffering, deliberately avoiding any suggestion of physical pleasure.",
          "A free-standing bronze sculpture meant to be viewed from all angles in a public square, representing secular triumph rather than spiritual revelation.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
          "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
          "This breathtaking marble sculptural group set within a theatrical architectural frame depicts a mystical vision, exemplifying the seventeenth-century strategy of engaging the senses to inspire religious devotion."
        ],
        correct: "This breathtaking marble sculptural group set within a theatrical architectural frame depicts a mystical vision, exemplifying the seventeenth-century strategy of engaging the senses to inspire religious devotion."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/500px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
    significanceLong: "This group portrait of surgeons witnessing a public dissection reflects the period's enthusiasm for empirical inquiry and scientific learning, capturing the spirit of a new scientific age.",
    significanceShort: "This group portrait of surgeons witnessing a public dissection reflects the period's enthusiasm for empiric...",
    significanceOptions: [
      "A gruesome, moralizing critique of medical science, intended to show the vanity and hubris of men interfering with the human body.",
      "A highly stylized and abstract interpretation of a medical procedure, completely ignoring anatomical accuracy in favor of geometric harmony.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
      "This group portrait of surgeons witnessing a public dissection reflects the period's enthusiasm for empirical inquiry and scientific learning, capturing the spirit of a new scientific age."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "The Anatomy Lesson of Dr. Tulp"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Rembrandt"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Dutch Baroque Period"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A gruesome, moralizing critique of medical science, intended to show the vanity and hubris of men interfering with the human body.",
          "A highly stylized and abstract interpretation of a medical procedure, completely ignoring anatomical accuracy in favor of geometric harmony.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
          "This group portrait of surgeons witnessing a public dissection reflects the period's enthusiasm for empirical inquiry and scientific learning, capturing the spirit of a new scientific age."
        ],
        correct: "This group portrait of surgeons witnessing a public dissection reflects the period's enthusiasm for empirical inquiry and scientific learning, capturing the spirit of a new scientific age."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/500px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg",
    significanceLong: "This large-scale group portrait of a civic militia company is celebrated for its dynamic composition and dramatic use of light and motion, departing radically from the static conventions of group portraiture.",
    significanceShort: "This large-scale group portrait of a civic militia company is celebrated for its dynamic composition and dr...",
    significanceOptions: [
      "A traditional, rigidly organized guild portrait where every member is painted with equal lighting and prominence to ensure fair representation.",
      "An explicit depiction of an actual battlefield skirmish, showing the tragic consequences of nighttime urban warfare.",
      "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "This large-scale group portrait of a civic militia company is celebrated for its dynamic composition and dramatic use of light and motion, departing radically from the static conventions of group portraiture."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "The Night Watch"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Rembrandt"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Dutch Baroque Period"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A traditional, rigidly organized guild portrait where every member is painted with equal lighting and prominence to ensure fair representation.",
          "An explicit depiction of an actual battlefield skirmish, showing the tragic consequences of nighttime urban warfare.",
          "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "This large-scale group portrait of a civic militia company is celebrated for its dynamic composition and dramatic use of light and motion, departing radically from the static conventions of group portraiture."
        ],
        correct: "This large-scale group portrait of a civic militia company is celebrated for its dynamic composition and dramatic use of light and motion, departing radically from the static conventions of group portraiture."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Jan_Vermeer_van_Delft_019.jpg/500px-Jan_Vermeer_van_Delft_019.jpg",
    significanceLong: "This intimate domestic scene captures a quiet moment of everyday life suffused with subtle luminous light from a leaded window, reflecting the period's unique valuation of middle-class life.",
    significanceShort: "This intimate domestic scene captures a quiet moment of everyday life suffused with subtle luminous light f...",
    significanceOptions: [
      "A moralizing genre painting filled with explicit symbols warning against the dangers of vanity, idleness, and the squandering of household resources.",
      "A grand, theatrical depiction of a wealthy aristocrat preparing for a public event, emphasizing opulence and dynamic movement.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
      "This intimate domestic scene captures a quiet moment of everyday life suffused with subtle luminous light from a leaded window, reflecting the period's unique valuation of middle-class life."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Woman with a Water Jug"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Vermeer"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Dutch Baroque Period"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A moralizing genre painting filled with explicit symbols warning against the dangers of vanity, idleness, and the squandering of household resources.",
          "A grand, theatrical depiction of a wealthy aristocrat preparing for a public event, emphasizing opulence and dynamic movement.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
          "This intimate domestic scene captures a quiet moment of everyday life suffused with subtle luminous light from a leaded window, reflecting the period's unique valuation of middle-class life."
        ],
        correct: "This intimate domestic scene captures a quiet moment of everyday life suffused with subtle luminous light from a leaded window, reflecting the period's unique valuation of middle-class life."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/500px-1665_Girl_with_a_Pearl_Earring.jpg",
    significanceLong: "Often called a northern Mona Lisa, this idealized study is celebrated for its extraordinary intimacy and enigmatic gaze, exemplifying mastery of light and reflecting how the local art market drove innovation.",
    significanceShort: "Often called a northern Mona Lisa, this idealized study is celebrated for its extraordinary intimacy and en...",
    significanceOptions: [
      "A highly specific commissioned portrait of a prominent merchant's daughter, intended to secure a favorable marriage arrangement.",
      "An academic exercise in rendering complex background landscapes, with the figure serving merely as a secondary element in the composition.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
      "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
      "Often called a northern Mona Lisa, this idealized study is celebrated for its extraordinary intimacy and enigmatic gaze, exemplifying mastery of light and reflecting how the local art market drove innovation."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Girl with a Pearl Earring"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Vermeer"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Dutch Baroque Period"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A highly specific commissioned portrait of a prominent merchant's daughter, intended to secure a favorable marriage arrangement.",
          "An academic exercise in rendering complex background landscapes, with the figure serving merely as a secondary element in the composition.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
          "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
          "Often called a northern Mona Lisa, this idealized study is celebrated for its extraordinary intimacy and enigmatic gaze, exemplifying mastery of light and reflecting how the local art market drove innovation."
        ],
        correct: "Often called a northern Mona Lisa, this idealized study is celebrated for its extraordinary intimacy and enigmatic gaze, exemplifying mastery of light and reflecting how the local art market drove innovation."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/500px-David_-_The_Death_of_Socrates.jpg",
    significanceLong: "Painted on the eve of a major political revolution, this neoclassical work depicts an ancient philosopher choosing death over compromise, widely read as a critique of corruption and a call for civic virtue.",
    significanceShort: "Painted on the eve of a major political revolution",
    significanceOptions: [
      "A chaotic, emotionally unrestrained Romantic depiction of a political assassination, utilizing loose brushwork and vivid, unnatural colors.",
      "An entirely accurate historical reconstruction based on newly discovered archaeological evidence, devoid of any contemporary political messaging.",
      "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "Painted on the eve of a major political revolution, this neoclassical work depicts an ancient philosopher choosing death over compromise, widely read as a critique of corruption and a call for civic virtue."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "The Death of Socrates"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Jacques-Louis David"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Enlightenment"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A chaotic, emotionally unrestrained Romantic depiction of a political assassination, utilizing loose brushwork and vivid, unnatural colors.",
          "An entirely accurate historical reconstruction based on newly discovered archaeological evidence, devoid of any contemporary political messaging.",
          "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "Painted on the eve of a major political revolution, this neoclassical work depicts an ancient philosopher choosing death over compromise, widely read as a critique of corruption and a call for civic virtue."
        ],
        correct: "Painted on the eve of a major political revolution, this neoclassical work depicts an ancient philosopher choosing death over compromise, widely read as a critique of corruption and a call for civic virtue."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Death_of_Marat_by_David.jpg/500px-Death_of_Marat_by_David.jpg",
    significanceLong: "Painted weeks after a high-profile assassination, the artist transformed a murder scene into a secular martyrdom image, serving as powerful political propaganda during a period of radical terror.",
    significanceShort: "Painted weeks after a high-profile assassination",
    significanceOptions: [
      "A private, objective police record of a crime scene, intended solely for documentary purposes without any idealization of the victim.",
      "A religious altarpiece commissioned by the church to depict the suffering of a traditional Christian saint bathed in divine light.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
      "Painted weeks after a high-profile assassination, the artist transformed a murder scene into a secular martyrdom image, serving as powerful political propaganda during a period of radical terror."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Death of Marat"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Jacques-Louis David"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "French Revolution"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A private, objective police record of a crime scene, intended solely for documentary purposes without any idealization of the victim.",
          "A religious altarpiece commissioned by the church to depict the suffering of a traditional Christian saint bathed in divine light.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
          "Painted weeks after a high-profile assassination, the artist transformed a murder scene into a secular martyrdom image, serving as powerful political propaganda during a period of radical terror."
        ],
        correct: "Painted weeks after a high-profile assassination, the artist transformed a murder scene into a secular martyrdom image, serving as powerful political propaganda during a period of radical terror."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg/500px-David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg",
    significanceLong: "This idealized equestrian portrait, though historically inaccurate, depicts the subject as a heroic military commander, exemplifying the systematic use of art to build a cult of personality.",
    significanceShort: "This idealized equestrian portrait, though historically inaccurate, depicts the subject as a heroic militar...",
    significanceOptions: [
      "A brutally realistic depiction of the hardships of alpine warfare, showing an exhausted leader struggling alongside his freezing troops.",
      "A subtle, understated portrait meant to emphasize the subject's intellectual and administrative genius rather than his military prowess.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
      "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
      "This idealized equestrian portrait, though historically inaccurate, depicts the subject as a heroic military commander, exemplifying the systematic use of art to build a cult of personality."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Napoleon Crossing the Alps"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Jacques-Louis David"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Napoleonic Era"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A brutally realistic depiction of the hardships of alpine warfare, showing an exhausted leader struggling alongside his freezing troops.",
          "A subtle, understated portrait meant to emphasize the subject's intellectual and administrative genius rather than his military prowess.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
          "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
          "This idealized equestrian portrait, though historically inaccurate, depicts the subject as a heroic military commander, exemplifying the systematic use of art to build a cult of personality."
        ],
        correct: "This idealized equestrian portrait, though historically inaccurate, depicts the subject as a heroic military commander, exemplifying the systematic use of art to build a cult of personality."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg/500px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg",
    significanceLong: "Painted after foreign imperial forces were driven out, this harrowing scene depicts the execution of civilians with unprecedented emotional rawness, becoming one of history's most powerful anti-war images.",
    significanceShort: "Painted after foreign imperial forces were driven out",
    significanceOptions: [
      "A heroic glorification of military discipline, intended to celebrate the orderly efficiency of the occupying army bringing civilization to the region.",
      "An objective, emotionless journalistic recording of a judicial punishment, utilizing the balanced, rational composition of Neoclassicism.",
      "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "Painted after foreign imperial forces were driven out, this harrowing scene depicts the execution of civilians with unprecedented emotional rawness, becoming one of history's most powerful anti-war images."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "The Third of May"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Goya"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Napoleonic Era"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A heroic glorification of military discipline, intended to celebrate the orderly efficiency of the occupying army bringing civilization to the region.",
          "An objective, emotionless journalistic recording of a judicial punishment, utilizing the balanced, rational composition of Neoclassicism.",
          "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "Painted after foreign imperial forces were driven out, this harrowing scene depicts the execution of civilians with unprecedented emotional rawness, becoming one of history's most powerful anti-war images."
        ],
        correct: "Painted after foreign imperial forces were driven out, this harrowing scene depicts the execution of civilians with unprecedented emotional rawness, becoming one of history's most powerful anti-war images."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/500px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg",
    significanceLong: "Painted to commemorate a major 19th-century uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade, uniting classical allegory with contemporary political reality.",
    significanceShort: "Painted to commemorate a major 19th-century uprising",
    significanceOptions: [
      "A meticulously factual documentary painting of a street skirmish, deliberately excluding any symbolic or mythological elements to maintain pure realism.",
      "A conservative propaganda piece intended to warn the middle and upper classes against the violent chaos and anarchy of mob rule.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
      "Painted to commemorate a major 19th-century uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade, uniting classical allegory with contemporary political reality."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Liberty Leading the People"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Delacroix"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Liberal Revolutions and Unification"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A meticulously factual documentary painting of a street skirmish, deliberately excluding any symbolic or mythological elements to maintain pure realism.",
          "A conservative propaganda piece intended to warn the middle and upper classes against the violent chaos and anarchy of mob rule.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
          "Painted to commemorate a major 19th-century uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade, uniting classical allegory with contemporary political reality."
        ],
        correct: "Painted to commemorate a major 19th-century uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade, uniting classical allegory with contemporary political reality."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Slave-ship.jpg/500px-Slave-ship.jpg",
    significanceLong: "Inspired by a real-life maritime massacre, this turbulent seascape used Romantic expressiveness to make a searing moral argument against a brutal human trade.",
    significanceShort: "Inspired by a real-life maritime massacre, this turbulent seascape used Romantic expressiveness to make a s...",
    significanceOptions: [
      "A precise, technical illustration of a naval vessel navigating a storm, commissioned by a shipping company to showcase the durability of their fleet.",
      "A serene, atmospheric study of a vibrant sunset over a calm ocean, completely detached from any contemporary political or social issues.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "Inspired by a real-life maritime massacre, this turbulent seascape used Romantic expressiveness to make a searing moral argument against a brutal human trade."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "The Slave Ship"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Turner"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Industrial Revolution"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A precise, technical illustration of a naval vessel navigating a storm, commissioned by a shipping company to showcase the durability of their fleet.",
          "A serene, atmospheric study of a vibrant sunset over a calm ocean, completely detached from any contemporary political or social issues.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "Inspired by a real-life maritime massacre, this turbulent seascape used Romantic expressiveness to make a searing moral argument against a brutal human trade."
        ],
        correct: "Inspired by a real-life maritime massacre, this turbulent seascape used Romantic expressiveness to make a searing moral argument against a brutal human trade."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Edgar_Germain_Hilaire_Degas_004.jpg/500px-Edgar_Germain_Hilaire_Degas_004.jpg",
    significanceLong: "This work captures the rigorous labor behind urban entertainment, depicting practice sessions rather than performances to reveal the unglamorous reality and physical strain of the dancers' lives.",
    significanceShort: "This work captures the rigorous labor behind urban entertainment",
    significanceOptions: [
      "A highly idealized, flawless depiction of opening night on stage, emphasizing the effortless grace and aristocratic glamour of the performance.",
      "An abstract exploration of movement utilizing completely unrecognizable geometric shapes to suggest the rhythm of a musical score.",
      "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
      "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
      "This work captures the rigorous labor behind urban entertainment, depicting practice sessions rather than performances to reveal the unglamorous reality and physical strain of the dancers' lives."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Ballet Rehearsal"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Degas"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Post 1871 State Building (La Belle Époque)"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A highly idealized, flawless depiction of opening night on stage, emphasizing the effortless grace and aristocratic glamour of the performance.",
          "An abstract exploration of movement utilizing completely unrecognizable geometric shapes to suggest the rhythm of a musical score.",
          "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
          "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
          "This work captures the rigorous labor behind urban entertainment, depicting practice sessions rather than performances to reveal the unglamorous reality and physical strain of the dancers' lives."
        ],
        correct: "This work captures the rigorous labor behind urban entertainment, depicting practice sessions rather than performances to reveal the unglamorous reality and physical strain of the dancers' lives."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/500px-Monet_-_Impression%2C_Sunrise.jpg",
    significanceLong: "This hazy depiction of a harbor gave a major late 19th-century art movement its name when a critic used the title mockingly, representing a revolutionary break from academic painting.",
    significanceShort: "This hazy depiction of a harbor gave a major late 19th-century art movement its name when a critic used the...",
    significanceOptions: [
      "A highly detailed, topographically accurate rendering of industrial port infrastructure, celebrated for its invisible brushstrokes and strict academic finish.",
      "A politically charged social realist work intended to highlight the grueling early-morning conditions of dockworkers in the industrial age.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
      "This hazy depiction of a harbor gave a major late 19th-century art movement its name when a critic used the title mockingly, representing a revolutionary break from academic painting."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Impression, Sunrise"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Monet"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Post 1871 State Building (La Belle Époque)"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A highly detailed, topographically accurate rendering of industrial port infrastructure, celebrated for its invisible brushstrokes and strict academic finish.",
          "A politically charged social realist work intended to highlight the grueling early-morning conditions of dockworkers in the industrial age.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
          "This hazy depiction of a harbor gave a major late 19th-century art movement its name when a critic used the title mockingly, representing a revolutionary break from academic painting."
        ],
        correct: "This hazy depiction of a harbor gave a major late 19th-century art movement its name when a critic used the title mockingly, representing a revolutionary break from academic painting."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/500px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg",
    significanceLong: "This vibrant sun-drenched scene of friends dining by the river captures the leisure culture of a growing urban middle class, considered one of the finest achievements of its movement.",
    significanceShort: "This vibrant sun-drenched scene of friends dining by the river captures the leisure culture of a growing ur...",
    significanceOptions: [
      "A somber critique of bourgeois decadence, utilizing dark, oppressive colors to suggest the moral emptiness of modern urban leisure.",
      "A staged, formal group portrait commissioned by a wealthy aristocratic family, insisting on rigid postures and clear social hierarchies.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "This vibrant sun-drenched scene of friends dining by the river captures the leisure culture of a growing urban middle class, considered one of the finest achievements of its movement."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "The Luncheon of the Boating Party"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Renoir"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Post 1871 State Building (La Belle Époque)"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A somber critique of bourgeois decadence, utilizing dark, oppressive colors to suggest the moral emptiness of modern urban leisure.",
          "A staged, formal group portrait commissioned by a wealthy aristocratic family, insisting on rigid postures and clear social hierarchies.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "This vibrant sun-drenched scene of friends dining by the river captures the leisure culture of a growing urban middle class, considered one of the finest achievements of its movement."
        ],
        correct: "This vibrant sun-drenched scene of friends dining by the river captures the leisure culture of a growing urban middle class, considered one of the finest achievements of its movement."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/%22Un_Bar_aux_Folies-Berg%C3%A8re%22_by_%C3%89douard_Manet_%281882%29.jpg/500px-%22Un_Bar_aux_Folies-Berg%C3%A8re%22_by_%C3%89douard_Manet_%281882%29.jpg",
    significanceLong: "The artist's final major painting depicts a worker at a famous venue using a disorienting mirror reflection to observe modern commercial culture and the commodification of labor in urban entertainment.",
    significanceShort: "The artist's final major painting depicts a worker at a famous venue using a disorienting mirror reflection...",
    significanceOptions: [
      "A joyful, uncomplicated celebration of Parisian nightlife, focusing entirely on the dynamic movement and bright colors of the background crowd.",
      "An exact, perspectivally flawless interior study, explicitly designed to demonstrate the artist's adherence to traditional academic rules.",
      "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
      "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
      "The artist's final major painting depicts a worker at a famous venue using a disorienting mirror reflection to observe modern commercial culture and the commodification of labor in urban entertainment."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "A Bar at the Folies-Bergère"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Manet"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Post 1871 State Building (La Belle Époque)"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A joyful, uncomplicated celebration of Parisian nightlife, focusing entirely on the dynamic movement and bright colors of the background crowd.",
          "An exact, perspectivally flawless interior study, explicitly designed to demonstrate the artist's adherence to traditional academic rules.",
          "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
          "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
          "The artist's final major painting depicts a worker at a famous venue using a disorienting mirror reflection to observe modern commercial culture and the commodification of labor in urban entertainment."
        ],
        correct: "The artist's final major painting depicts a worker at a famous venue using a disorienting mirror reflection to observe modern commercial culture and the commodification of labor in urban entertainment."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/500px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
    significanceLong: "This anguished figure beneath a blood-red sky became the defining image of existential anxiety in modern life, expressing psychological alienation amid rapid industrialization and early modernist development.",
    significanceShort: "This anguished figure beneath a blood-red sky became the defining image of existential anxiety in modern li...",
    significanceOptions: [
      "A literal representation of a volcanic eruption, focusing on the atmospheric effects and color changes caused by ash in the air.",
      "A cheerful, decorative landscape designed to capture the vibrant colors of a sunset over a serene northern fjord.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
      "This anguished figure beneath a blood-red sky became the defining image of existential anxiety in modern life, expressing psychological alienation amid rapid industrialization and early modernist development."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "The Scream"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Munch"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Post 1871 State Building (La Belle Époque)"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A literal representation of a volcanic eruption, focusing on the atmospheric effects and color changes caused by ash in the air.",
          "A cheerful, decorative landscape designed to capture the vibrant colors of a sunset over a serene northern fjord.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
          "This anguished figure beneath a blood-red sky became the defining image of existential anxiety in modern life, expressing psychological alienation amid rapid industrialization and early modernist development."
        ],
        correct: "This anguished figure beneath a blood-red sky became the defining image of existential anxiety in modern life, expressing psychological alienation amid rapid industrialization and early modernist development."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/500px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
    significanceLong: "The artist spent two years applying a scientific optical technique placing tiny dots of pure color side by side, subtly satirizing the social rigidity of the bourgeoisie.",
    significanceShort: "The artist spent two years applying a scientific optical technique placing tiny dots of pure color side by...",
    significanceOptions: [
      "A spontaneous, rapidly painted impression of a crowd enjoying the riverbank, celebrated for its loose, emotional brushwork and lack of formal structure.",
      "An overtly political call to arms, depicting the unified working class gathering on an island to organize a massive urban strike.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "The artist spent two years applying a scientific optical technique placing tiny dots of pure color side by side, subtly satirizing the social rigidity of the bourgeoisie."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "A Sunday Afternoon on the Island of La Grande Jatte"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Seurat"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Post 1871 State Building (La Belle Époque)"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A spontaneous, rapidly painted impression of a crowd enjoying the riverbank, celebrated for its loose, emotional brushwork and lack of formal structure.",
          "An overtly political call to arms, depicting the unified working class gathering on an island to organize a massive urban strike.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "The artist spent two years applying a scientific optical technique placing tiny dots of pure color side by side, subtly satirizing the social rigidity of the bourgeoisie."
        ],
        correct: "The artist spent two years applying a scientific optical technique placing tiny dots of pure color side by side, subtly satirizing the social rigidity of the bourgeoisie."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/500px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    significanceLong: "Painted while confined to an asylum, this swirling nocturnal landscape expresses intense emotional and spiritual turmoil through dynamic almost violent brushwork directly influencing later expressionist and abstract movements.",
    significanceShort: "Painted while confined to an asylum, this swirling nocturnal landscape expresses intense emotional and spir...",
    significanceOptions: [
      "A scientifically precise astronomical observation, meticulously mapping out the exact constellations visible on a specific night in history.",
      "A calm, balanced classical landscape intended to evoke the peaceful order and divine harmony of the rural countryside.",
      "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
      "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
      "Painted while confined to an asylum, this swirling nocturnal landscape expresses intense emotional and spiritual turmoil through dynamic almost violent brushwork directly influencing later expressionist and abstract movements."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Starry Night"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Van Gogh"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Post 1871 State Building (La Belle Époque)"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A scientifically precise astronomical observation, meticulously mapping out the exact constellations visible on a specific night in history.",
          "A calm, balanced classical landscape intended to evoke the peaceful order and divine harmony of the rural countryside.",
          "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
          "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
          "Painted while confined to an asylum, this swirling nocturnal landscape expresses intense emotional and spiritual turmoil through dynamic almost violent brushwork directly influencing later expressionist and abstract movements."
        ],
        correct: "Painted while confined to an asylum, this swirling nocturnal landscape expresses intense emotional and spiritual turmoil through dynamic almost violent brushwork directly influencing later expressionist and abstract movements."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/500px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg",
    significanceLong: "One of over 30 self-portraits the artist produced at an asylum, using swirling brushstrokes and an intense unflinching gaze to convey profound psychological depth influencing later introspective autobiographical work.",
    significanceShort: "One of over 30 self-portraits the artist produced at an asylum",
    significanceOptions: [
      "An arrogant display of wealth and success, depicting the artist in finery to prove his acceptance by the elite Parisian art establishment.",
      "A purely formal exercise in color theory, devoid of emotional expression or personal psychological revelation.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
      "One of over 30 self-portraits the artist produced at an asylum, using swirling brushstrokes and an intense unflinching gaze to convey profound psychological depth influencing later introspective autobiographical work."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Self Portrait"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Van Gogh"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Post 1871 State Building (La Belle Époque)"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "An arrogant display of wealth and success, depicting the artist in finery to prove his acceptance by the elite Parisian art establishment.",
          "A purely formal exercise in color theory, devoid of emotional expression or personal psychological revelation.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
          "One of over 30 self-portraits the artist produced at an asylum, using swirling brushstrokes and an intense unflinching gaze to convey profound psychological depth influencing later introspective autobiographical work."
        ],
        correct: "One of over 30 self-portraits the artist produced at an asylum, using swirling brushstrokes and an intense unflinching gaze to convey profound psychological depth influencing later introspective autobiographical work."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/500px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    significanceLong: "The golden masterpiece of a major Secessionist movement, this painting fuses Byzantine mosaic style with sinuous organic decoration representing the total art of the 20th century in a fin-de-siècle capital.",
    significanceShort: "The golden masterpiece of a major Secessionist movement",
    significanceOptions: [
      "A stark, minimalist exploration of romantic love, stripped of all ornamentation or decorative elements to focus entirely on the physical form.",
      "A highly realistic genre painting depicting a peasant couple in a rural setting, emphasizing the simple, unadorned life.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "The golden masterpiece of a major Secessionist movement, this painting fuses Byzantine mosaic style with sinuous organic decoration representing the total art of the 20th century in a fin-de-siècle capital."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "The Kiss"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Klimt"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Post 1871 State Building (La Belle Époque)"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A stark, minimalist exploration of romantic love, stripped of all ornamentation or decorative elements to focus entirely on the physical form.",
          "A highly realistic genre painting depicting a peasant couple in a rural setting, emphasizing the simple, unadorned life.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "The golden masterpiece of a major Secessionist movement, this painting fuses Byzantine mosaic style with sinuous organic decoration representing the total art of the 20th century in a fin-de-siècle capital."
        ],
        correct: "The golden masterpiece of a major Secessionist movement, this painting fuses Byzantine mosaic style with sinuous organic decoration representing the total art of the 20th century in a fin-de-siècle capital."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Max_Beckmann%2C_1918-19%2C_The_Night_%28Die_Nacht%29%2C_oil_on_canvas%2C_133_x_154_cm%2C_Kunstsammlung_Nordrhein-Westfalen%2C_D%C3%BCsseldorf.jpg/500px-Max_Beckmann%2C_1918-19%2C_The_Night_%28Die_Nacht%29%2C_oil_on_canvas%2C_133_x_154_cm%2C_Kunstsammlung_Nordrhein-Westfalen%2C_D%C3%BCsseldorf.jpg",
    significanceLong: "Painted in the immediate aftermath of a global conflict, this nightmarish scene of violence and torture reflects the trauma and moral collapse accompanying the birth of an unstable republic.",
    significanceShort: "Painted in the immediate aftermath of a global conflict",
    significanceOptions: [
      "A celebratory historical painting documenting the triumphant end of a war and the joyful restoration of social order.",
      "An abstract composition utilizing only geometric shapes and primary colors to evoke a sense of universal harmony and balance.",
      "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
      "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
      "Painted in the immediate aftermath of a global conflict, this nightmarish scene of violence and torture reflects the trauma and moral collapse accompanying the birth of an unstable republic."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "The Night"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Beckmann"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "WWI"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A celebratory historical painting documenting the triumphant end of a war and the joyful restoration of social order.",
          "An abstract composition utilizing only geometric shapes and primary colors to evoke a sense of universal harmony and balance.",
          "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
          "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
          "Painted in the immediate aftermath of a global conflict, this nightmarish scene of violence and torture reflects the trauma and moral collapse accompanying the birth of an unstable republic."
        ],
        correct: "Painted in the immediate aftermath of a global conflict, this nightmarish scene of violence and torture reflects the trauma and moral collapse accompanying the birth of an unstable republic."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/500px-Les_Demoiselles_d%27Avignon.jpg",
    significanceLong: "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting five nude figures with distorted fragmented forms, announcing the beginning of a major geometric abstract movement.",
    significanceShort: "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting five nude figu...",
    significanceOptions: [
      "A traditional academic study of female nudes, adhering strictly to classical proportions and single-point linear perspective.",
      "A romanticized, soft-focus depiction of a bustling Parisian brothel, intended to evoke sympathy for the plight of urban sex workers.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
      "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting five nude figures with distorted fragmented forms, announcing the beginning of a major geometric abstract movement."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Les Demoiselles d'Avignon"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Picasso"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Post 1871 State Building (La Belle Époque)"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A traditional academic study of female nudes, adhering strictly to classical proportions and single-point linear perspective.",
          "A romanticized, soft-focus depiction of a bustling Parisian brothel, intended to evoke sympathy for the plight of urban sex workers.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
          "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting five nude figures with distorted fragmented forms, announcing the beginning of a major geometric abstract movement."
        ],
        correct: "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting five nude figures with distorted fragmented forms, announcing the beginning of a major geometric abstract movement."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
    significanceLong: "This small avant-garde canvas depicts melting objects in a barren dreamlike landscape drawing on psychoanalytic ideas to subvert rational understandings of time and reality.",
    significanceShort: "This small avant-garde canvas depicts melting objects in a barren dreamlike landscape drawing on psychoanal...",
    significanceOptions: [
      "A hyper-realistic still life arranged to demonstrate the physical properties of metal and decay under extreme desert heat.",
      "A scientific illustration attempting to visualize the complex physics of relativity and the curvature of space-time.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "This small avant-garde canvas depicts melting objects in a barren dreamlike landscape drawing on psychoanalytic ideas to subvert rational understandings of time and reality."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "The Persistence of Memory"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Dalí"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Interwar Years"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A hyper-realistic still life arranged to demonstrate the physical properties of metal and decay under extreme desert heat.",
          "A scientific illustration attempting to visualize the complex physics of relativity and the curvature of space-time.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "This small avant-garde canvas depicts melting objects in a barren dreamlike landscape drawing on psychoanalytic ideas to subvert rational understandings of time and reality."
        ],
        correct: "This small avant-garde canvas depicts melting objects in a barren dreamlike landscape drawing on psychoanalytic ideas to subvert rational understandings of time and reality."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
    significanceLong: "Commissioned by political republicans after the bombing of a civilian town, this enormous monochromatic painting depicts suffering with fragmented anguish and became one of the most powerful anti-war artworks.",
    significanceShort: "Commissioned by political republicans after the bombing of a civilian town",
    significanceOptions: [
      "A vibrant, multi-colored celebration of a traditional Spanish bullfight, emphasizing the heroism and cultural heritage of the matador.",
      "A purely abstract geometric composition completely divorced from any real-world political event or historical narrative.",
      "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
      "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
      "Commissioned by political republicans after the bombing of a civilian town, this enormous monochromatic painting depicts suffering with fragmented anguish and became one of the most powerful anti-war artworks."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Guernica"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Picasso"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Interwar Years"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A vibrant, multi-colored celebration of a traditional Spanish bullfight, emphasizing the heroism and cultural heritage of the matador.",
          "A purely abstract geometric composition completely divorced from any real-world political event or historical narrative.",
          "This radical avant-garde work shatters centuries of Western pictorial tradition by depicting nude figures with distorted fragmented forms.",
          "Painted to commemorate a major uprising, this Romantic masterpiece personifies an allegorical figure bearing a flag across a barricade.",
          "Commissioned by political republicans after the bombing of a civilian town, this enormous monochromatic painting depicts suffering with fragmented anguish and became one of the most powerful anti-war artworks."
        ],
        correct: "Commissioned by political republicans after the bombing of a civilian town, this enormous monochromatic painting depicts suffering with fragmented anguish and became one of the most powerful anti-war artworks."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://upload.wikimedia.org/wikipedia/en/8/81/L%27Homme_au_doigt_Alberto_Giacometti.jpg",
    significanceLong: "This elongated emaciated bronze figure embodies the postwar philosophical spirit with a fragile human presence reaching into an uncertain void, profoundly influencing existentialist thought.",
    significanceShort: "This elongated emaciated bronze figure embodies the postwar philosophical spirit with a fragile human prese...",
    significanceOptions: [
      "A muscular, heroic monument celebrating the physical perfection and triumphant victory of the modern soldier.",
      "A precise, life-like cast taken directly from a human model, intended for use as a medical or anatomical reference tool.",
      "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
      "This elongated emaciated bronze figure embodies the postwar philosophical spirit with a fragile human presence reaching into an uncertain void, profoundly influencing existentialist thought."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Man Pointing"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Giacometti"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Cold War"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A muscular, heroic monument celebrating the physical perfection and triumphant victory of the modern soldier.",
          "A precise, life-like cast taken directly from a human model, intended for use as a medical or anatomical reference tool.",
          "This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences.",
          "This elongated emaciated bronze figure embodies the postwar philosophical spirit with a fragile human presence reaching into an uncertain void, profoundly influencing existentialist thought."
        ],
        correct: "This elongated emaciated bronze figure embodies the postwar philosophical spirit with a fragile human presence reaching into an uncertain void, profoundly influencing existentialist thought."
      }
    ]
  },
  {
    type: "image",
    question: "Complete the information about the artwork.",
    image: "https://www.mark-rothko.org/assets/img/paintings/ochre-and-red-on-red.jpg",
    significanceLong: "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences during the postwar era.",
    significanceShort: "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound alm...",
    significanceOptions: [
      "A highly detailed, zoomed-in depiction of a microscopic cellular structure, revealing the complex biological layers of organic matter.",
      "A strict, hard-edged geometric abstraction composed of perfectly solid, flat, and sharply delineated primary colors.",
      "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
      "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
      "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences during the postwar era."
    ],
    answers: [
      {
        type: "text-input",
        label: "Name:",
        correct: "Ochre on Red"
      },
      {
        type: "text-input",
        label: "Artist:",
        correct: "Rothko"
      },
      {
        type: "text-mc",
        label: "Era:",
        options: [
          "Renaissance",
          "Reformation",
          "Counter Reformation",
          "Dutch Baroque Period",
          "Absolutism",
          "Constitutionalism",
          "Scientific Revolution",
          "Enlightenment",
          "French Revolution",
          "Napoleonic Era",
          "Industrial Revolution",
          "Liberal Revolutions and Unification",
          "Post 1871 State Building (La Belle Époque)",
          "WWI",
          "Interwar Years",
          "WWII",
          "Cold War",
          "Contemporary Europe,"
        ],
        correct: "Cold War"
      },
      {
        type: "text-mc",
        label: "Significance:",
        options: [
          "A highly detailed, zoomed-in depiction of a microscopic cellular structure, revealing the complex biological layers of organic matter.",
          "A strict, hard-edged geometric abstraction composed of perfectly solid, flat, and sharply delineated primary colors.",
          "This signature technique of extreme contrasts of light and dark gives a biblical scene visceral shocking realism.",
          "A domestic interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
          "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences during the postwar era."
        ],
        correct: "This large color field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences during the postwar era."
      }
    ]
  }
];
