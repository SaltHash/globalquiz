const THEOPTIONS = [
    "Renaissance",
    "Reformation",
    "Counter Reformation",
    "Dutch Baroque Period",
    "Absolutism",
    "Constitutionalism",
    "Scientific Revolution",
    "Enlightenment ",
    "French Revolution",
    "Napoleonic Era",
    "Industrial Revolution",
    "Liberal Revolutions and Unification",
    "Post 1871 State Building (La Belle Epoch)",
    "WWI",
    "Interwar Years",
    "WWII",
    "Cold War",
    "Contemporary Europe," 
]

const quizData = [
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_Arnolfini_portrait_%281434%29.jpg/500px-The_Arnolfini_portrait_%281434%29.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Arnolfini Portrait',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Van Eyck',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Renaissance'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This painting was the first use of watercolor in European art and influenced Dutch landscape painting for centuries.",
					"One of the earliest and most complex uses of oil paint in Northern Europe, showcasing mastery of light, texture, and realistic detail with a convex mirror demonstrating technical innovation.",
					"A monumental marble sculpture that redefined the representation of the male nude as a symbol of civic virtue.",
					"This work introduced the technique of chiaroscuro to create spiritual devotion during the Counter-Reformation.",
					"A scientific drawing that perfectly encapsulates Renaissance ideals of human proportion and interdisciplinary genius."
				],
				correct: 'One of the earliest and most complex uses of oil paint in Northern Europe, showcasing mastery of light, texture, and realistic detail with a convex mirror demonstrating technical innovation.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/500px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Birth of Venus',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Botticelli',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Renaissance'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This radical proto-Cubist work shattered centuries of pictorial tradition by depicting distorted figures influenced by African masks and Iberian sculpture.",
					"Painted to commemorate a 19th-century revolution, this work unites classical allegory with contemporary political reality as a symbol of popular struggle.",
					"A landmark of Italian Renaissance art among the first large-scale paintings since antiquity to depict a pagan goddess, reflecting the Medici court's embrace of Neoplatonism and classical mythology.",
					"This elongated bronze figure embodies postwar Existentialist spirit and human dignity in the face of destruction.",
					"An anguished figure beneath a blood-red sky expressing psychological alienation amid rapid industrialization and social change."
				],
				correct: 'A landmark of Italian Renaissance art among the first large-scale paintings since antiquity to depict a pagan goddess, reflecting the Medici court\'s embrace of Neoplatonism and classical mythology.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/500px-Da_Vinci_Vitruve_Luc_Viatour.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Vitruvian Man',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Da Vinci',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Renaissance'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This ballet scene captures the rigorous labor behind Parisian entertainment and offers subtle commentary on gender and class during the Belle Époque.",
					"This drawing perfectly encapsulates the Renaissance ideal of humanity as the measure of all things, combining art and science to explore ideal human proportions.",
					"This monochromatic Cubist painting depicts the suffering caused by aerial warfare and became the most powerful anti-war artwork of the 20th century.",
					"This hazy depiction of a port gave the Impressionist movement its name and represented a revolutionary break from academic painting.",
					"This seascape used Romantic expressiveness to make a moral argument against the slave trade drawing on the real-life Zong massacre."
				],
				correct: 'This drawing perfectly encapsulates the Renaissance ideal of humanity as the measure of all things, combining art and science to explore ideal human proportions.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/500px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'The Last Supper',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Da Vinci',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Renaissance'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"A nightmarish scene of violence and torture reflecting the trauma and moral collapse of Weimar Germany's birth after World War I.",
					"A revolutionary mural using perspective and psychological realism to depict Christ announcing his betrayal with individualized emotional reactions among apostles.",
					"A marble sculpture displaying unprecedented technical skill and emotional depth depicting Mary cradling Christ's body with serene tenderness.",
					"An iconic frontal portrait projecting overwhelming royal authority and establishing the standard for state portraiture across Europe.",
					"A dynamic mythological scene showcasing revolutionary use of color and movement drawn from classical texts by Ovid and Catullus."
				],
				correct: 'A revolutionary mural using perspective and psychological realism to depict Christ announcing his betrayal with individualized emotional reactions among apostles.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Michelangelo%27s_Pieta_5450_cropncleaned_edit.jpg/500px-Michelangelo%27s_Pieta_5450_cropncleaned_edit.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Pietà',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Michelangelo',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Renaissance'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This group portrait of surgeons witnessing a dissection reflects the Dutch Golden Age's enthusiasm for empirical inquiry and scientific learning.",
					"This intense biblical scene uses extreme contrasts of light and dark to give visceral realism to Counter-Reformation art intended to move viewers emotionally toward faith.",
					"Carved when Michelangelo was only 24, this marble sculpture displayed unprecedented technical skill and emotional depth synthesizing Renaissance ideals of beauty with religious devotion.",
					"This intimate domestic scene captures a quiet moment of everyday life suffused with subtle luminous light reflecting Dutch Golden Age values.",
					"This monumental marble statue redefined the representation of the male nude as a symbol of intellectual courage and Florentine civic virtue."
				],
				correct: 'Carved when Michelangelo was only 24, this marble sculpture displayed unprecedented technical skill and emotional depth synthesizing Renaissance ideals of beauty with religious devotion.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/%27David%27_by_Michelangelo_Fir_JBU004.jpg/500px-%27David%27_by_Michelangelo_Fir_JBU004.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'David',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Michelangelo',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Renaissance'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This tronie character study exemplifies mastery of light and reflects how the Dutch art market for private collectors drove artistic innovation.",
					"This monumental marble statue redefined the representation of the male nude depicting David in tense anticipation embodying intellectual courage and serving as a symbol of Florentine republican independence.",
					"This ancient subject painted on the eve of the French Revolution was widely read as a critique of corruption and a call for civic virtue.",
					"This harrowing scene depicts execution of Spanish civilians with unprecedented emotional rawness becoming one of history's most powerful anti-war images.",
					"This breathtaking sculptural group set within a theatrical frame depicts the mystical vision of a Counter-Reformation saint with intense spiritual rapture."
				],
				correct: 'This monumental marble statue redefined the representation of the male nude depicting David in tense anticipation embodying intellectual courage and serving as a symbol of Florentine republican independence.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/500px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'The Creation of Adam',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Michelangelo',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Renaissance'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This vibrant sun-drenched scene of Parisians dining captures the leisure culture and social freedoms of the Third Republic's prosperous years during La Belle Époque.",
					"This Surrealist canvas depicts melting watches in a dreamlike landscape drawing on Freudian ideas to subvert rational understandings of time and reality.",
					"The centerpiece of the Sistine Chapel ceiling depicting the moment God breathes life into Adam with nearly touching fingers becoming one of the most iconic images in Western art.",
					"This small bronze figure with its melting forms became the masterpiece of Post-Impressionism reflecting the movement's turn toward subjective inner experience.",
					"This group portrait of militiamen celebrates with dynamic composition the pride and prosperity of Amsterdam's merchant republic during the Golden Age."
				],
				correct: 'The centerpiece of the Sistine Chapel ceiling depicting the moment God breathes life into Adam with nearly touching fingers becoming one of the most iconic images in Western art.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/500px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'School of Athens',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Raphael',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Renaissance'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This large Color Field canvas with luminous hovering rectangles was intended to evoke profound religious emotional experiences and became central to Abstract Expressionism during the Cold War.",
					"Painted for the Vatican depicting ancient philosophers gathered with Plato and Aristotle at the center celebrating the Renaissance recovery of classical learning and the compatibility of philosophy and Christian truth.",
					"This oval composition with a disorienting mirror reflection observes modern Parisian commercial culture and the commodification of women's labor in Belle Époque entertainment.",
					"This small hazy depiction of a port was mocked by a critic whose title the artists adopted proudly announcing a new era in subjective perception over objective reality.",
					"This stiffly posed scene of bourgeois Parisians enjoying a Sunday outing subtly satirizes social rigidity while demonstrating scientific Pointillist technique."
				],
				correct: 'Painted for the Vatican depicting ancient philosophers gathered with Plato and Aristotle at the center celebrating the Renaissance recovery of classical learning and the compatibility of philosophy and Christian truth.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Titian_Bacchus_and_Ariadne.jpg/500px-Titian_Bacchus_and_Ariadne.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Bacchus and Ariadne',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Titian',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Renaissance'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This dynamic mythological scene showcases revolutionary use of color and movement drawn from classical texts exemplifying Italian Renaissance embrace of pagan mythology as worthy of serious artistic treatment.",
					"This portrait painted as a betrothal gift shows a woman Henry VIII found less attractive in person than in the flattering portrait leading to annulment after six months.",
					"This elongated emaciated bronze figure embodies postwar Existentialist spirit and suggests both survival and irreducible human dignity in the face of destruction.",
					"This intimate domestic scene of a woman with a water jug is typical of capturing quiet everyday moments suffused with subtle luminous light.",
					"This iconic frontal portrait projects overwhelming royal authority and became the definitive visual representation of Tudor power and state portraiture across Europe."
				],
				correct: 'This dynamic mythological scene showcases revolutionary use of color and movement drawn from classical texts exemplifying Italian Renaissance embrace of pagan mythology as worthy of serious artistic treatment.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/After_Hans_Holbein_the_Younger_-_Portrait_of_Henry_VIII_-_Google_Art_Project.jpg/500px-After_Hans_Holbein_the_Younger_-_Portrait_of_Henry_VIII_-_Google_Art_Project.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Portrait of Henry VIII',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Holbein',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Reformation'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This iconic frontal portrait projects overwhelming royal authority and effectively became the definitive visual representation of Tudor power especially significant in Henry's break with Rome and establishment of the Church of England.",
					"This scene of violence and torture reflects trauma and moral collapse of Weimar Germany's birth using jagged composition to confront humanity stripped of dignity.",
					"This breathtaking sculptural group depicts mystical vision of a Counter-Reformation saint with intense physical and spiritual rapture within a theatrical architectural frame.",
					"This betrothal portrait is pivotal as an example of portraiture's political function illustrating high-stakes diplomatic negotiations of the Reformation era.",
					"This anguished figure beneath a blood-red sky became the defining image of existential anxiety in modern life expressing psychological alienation."
				],
				correct: 'This iconic frontal portrait projects overwhelming royal authority and effectively became the definitive visual representation of Tudor power especially significant in Henry\'s break with Rome and establishment of the Church of England.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Anne_de_Cl%C3%A8ves_-_Hans_Holbein_le_Jeune_-_Mus%C3%A9e_du_Louvre_Peintures_INV_1348_%3B_MR_756_-_version_2.jpg/500px-Anne_de_Cl%C3%A8ves_-_Hans_Holbein_le_Jeune_-_Mus%C3%A9e_du_Louvre_Peintures_INV_1348_%3B_MR_756_-_version_2.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Anne of Cleves',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Holbein',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Reformation'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This painting is a pivotal example of portraiture's political function during the Reformation era showing how Renaissance portraiture could serve and distort high-stakes diplomatic negotiations.",
					"This group portrait of surgeons witnessing dissection reflects Dutch Golden Age enthusiasm for empirical inquiry and establishes the artist's reputation.",
					"This intimate character study exemplifies mastery of luminous light and reflects the thriving Dutch art market for private collectors.",
					"This monumental sculpture redefined the male nude as embodying civic virtue and intellectual courage serving as a symbol of republican independence.",
					"This portrait projects royal authority and becomes the standard for state portraiture across Europe under Napoleonic influence."
				],
				correct: 'This painting is a pivotal example of portraiture\'s political function during the Reformation era showing how Renaissance portraiture could serve and distort high-stakes diplomatic negotiations.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Caravaggio_-_Giuditta_e_Oloferne_%28ca._1599%29.jpg/500px-Caravaggio_-_Giuditta_e_Oloferne_%28ca._1599%29.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Judith Slaying Holofernes',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Caravaggio',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Counter Reformation'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This signature technique of extreme contrasts of light and dark gives biblical scene visceral shocking realism as a hallmark of Counter-Reformation Baroque style intended to move viewers emotionally toward faith.",
					"This neoclassical work depicts an ancient philosopher choosing death over compromise widely read as critique of corruption and call for civic virtue on the eve of French Revolution.",
					"This portrait painted during asylum confinement uses swirling blue brushstrokes and intense unflinching gaze to convey profound psychological depth through subjective Post-Impressionist expression.",
					"This group portrait celebrates Amsterdam civic militia company with dynamic composition reflecting pride and prosperity of a merchant republic during the Golden Age.",
					"This large Color Field canvas with hovering rectangles was intended to evoke religious emotional experiences and became central to Abstract Expressionist movement during Cold War."
				],
				correct: 'This signature technique of extreme contrasts of light and dark gives biblical scene visceral shocking realism as a hallmark of Counter-Reformation Baroque style intended to move viewers emotionally toward faith.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ecstasy_of_St._Teresa_HDR.jpg/500px-Ecstasy_of_St._Teresa_HDR.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'The Ecstasy of St. Teresa',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Bernini',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Counter Reformation'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This breathtaking marble sculptural group set within a theatrical architectural frame depicts the mystical vision of St. Teresa of Ávila exemplifying Baroque strategy of engaging the senses to inspire religious devotion.",
					"This radical proto-Cubist work shatters centuries of pictorial tradition by depicting distorted figures influenced by African masks challenging academic norms of ideal beauty.",
					"This intense biblical scene uses chiaroscuro to give visceral realism breaking with idealized Renaissance conventions and influencing European painting for centuries.",
					"This dynamic equestrian portrait depicts a military commander as heroic though historically inaccurate exemplifying Napoleonic propaganda and cult of personality.",
					"This intimate domestic scene suffused with luminous light from a leaded window reflects Dutch Golden Age valuation of middle-class life as worthy of serious artistic treatment."
				],
				correct: 'This breathtaking marble sculptural group set within a theatrical architectural frame depicts the mystical vision of St. Teresa of Ávila exemplifying Baroque strategy of engaging the senses to inspire religious devotion.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/500px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'The Anatomy Lesson of Dr. Tulp',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Rembrandt',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Dutch Baroque Period'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This group portrait of surgeons witnessing a public dissection reflects the Dutch Golden Age enthusiasm for empirical inquiry and scientific learning capturing the spirit of the Scientific Revolution.",
					"This large-scale group portrait is celebrated for dynamic composition dramatic use of light and motion departing radically from static convention in Dutch group portraiture.",
					"This tronie character study exemplifies mastery of luminous light and reflects how the thriving Dutch art market for private collectors drove artistic innovation.",
					"This intimate domestic scene captures quiet everyday moments suffused with subtle light from a leaded window reflecting Dutch Golden Age values.",
					"This portrait of entertainment venue barmaid uses a disorienting mirror reflection to create ambiguity about space and observe commodification of women's labor."
				],
				correct: 'This group portrait of surgeons witnessing a public dissection reflects the Dutch Golden Age enthusiasm for empirical inquiry and scientific learning capturing the spirit of the Scientific Revolution.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/500px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'The Night Watch',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Rembrandt',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Dutch Baroque Period'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This large-scale group portrait of an Amsterdam civic militia company is celebrated for dynamic composition dramatic use of light and motion departing radically from static conventions of Dutch group portraiture.",
					"This intimate domestic scene captures quiet moments suffused with subtle luminous light from a leaded window reflecting Dutch Golden Age valuation of middle-class life.",
					"This character study is celebrated for extraordinary intimacy and enigmatic gaze of an unknown subject exemplifying mastery of light in the Dutch Baroque period.",
					"This group portrait of surgeons witnessing a dissection reflects Dutch enthusiasm for empirical inquiry and the spirit of the Scientific Revolution.",
					"This portrait of a barmaid uses disorienting mirror reflection to observe modern Parisian commercial culture and commodification of women's bodies."
				],
				correct: 'This large-scale group portrait of an Amsterdam civic militia company is celebrated for dynamic composition dramatic use of light and motion departing radically from static conventions of Dutch group portraiture.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Jan_Vermeer_van_Delft_019.jpg/500px-Jan_Vermeer_van_Delft_019.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Woman with a Water Jug',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Vermeer',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Dutch Baroque Period'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This intimate domestic scene captures a quiet moment of everyday life suffused with subtle luminous light from a leaded window reflecting Dutch Golden Age's unique valuation of middle-class life as worthy of serious artistic treatment.",
					"This large-scale group portrait celebrates civic militia with dynamic composition and dramatic light reflecting pride and prosperity of Amsterdam's merchant republic.",
					"This character study with enigmatic gaze is celebrated for extraordinary intimacy exemplifying the thriving Dutch art market and mastery of luminous light.",
					"This portrait of a barmaid at a famous venue uses disorienting mirror reflection to observe commercial culture and commodification of women's labor in entertainment.",
					"This group portrait of surgeons reflects Dutch enthusiasm for empirical inquiry and scientific learning capturing the spirit of the Scientific Revolution."
				],
				correct: 'This intimate domestic scene captures a quiet moment of everyday life suffused with subtle luminous light from a leaded window reflecting Dutch Golden Age\'s unique valuation of middle-class life as worthy of serious artistic treatment.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/500px-1665_Girl_with_a_Pearl_Earring.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Girl with a Pearl Earring',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Vermeer',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Dutch Baroque Period'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"Often called the Mona Lisa of the North this tronie is celebrated for extraordinary intimacy and enigmatic gaze exemplifying Vermeer's mastery of light and reflecting how Dutch art market for private collectors drove innovation.",
					"This intimate domestic scene captures everyday life suffused with luminous light from a leaded window reflecting Dutch Golden Age valuation of middle-class domestic life.",
					"This large-scale group portrait of militiamen is celebrated for dynamic composition and dramatic light reflecting the pride of Amsterdam's merchant republic.",
					"This portrait of a barmaid uses disorienting mirror reflection to observe modern commercial culture and commodification of women's labor in Belle Époque entertainment.",
					"This group portrait of surgeons witnessing dissection reflects Dutch Golden Age enthusiasm for empirical inquiry and scientific learning."
				],
				correct: 'Often called the Mona Lisa of the North this tronie is celebrated for extraordinary intimacy and enigmatic gaze exemplifying Vermeer\'s mastery of light and reflecting how Dutch art market for private collectors drove innovation.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/500px-David_-_The_Death_of_Socrates.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'The Death of Socrates',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Jacques-Louis David',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Enlightenment'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"Painted on the eve of the French Revolution this neoclassical work depicts an ancient philosopher choosing death over compromise widely read as a critique of corruption and call for civic virtue.",
					"This harrowing scene depicts execution of Spanish civilians with white-shirted martyr figure in Christ-like pose against faceless firing squad becoming one of history's most powerful anti-war images.",
					"This idealized equestrian portrait though historically inaccurate exemplifies Napoleonic propaganda shaping the emperor's image as dynamic invincible leader.",
					"This dynamic mythological scene showcases revolutionary use of color and movement exemplifying Italian Renaissance embrace of pagan mythology.",
					"This anguished figure beneath blood-red sky became the defining image of existential anxiety expressing psychological alienation amid rapid industrialization."
				],
				correct: 'Painted on the eve of the French Revolution this neoclassical work depicts an ancient philosopher choosing death over compromise widely read as a critique of corruption and call for civic virtue.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Death_of_Marat_by_David.jpg/500px-Death_of_Marat_by_David.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Death of Marat',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Jacques-Louis David',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'French Revolution'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"Painted weeks after assassination of the radical journalist Jean-Paul Marat David transformed a murder scene into a secular martyrdom image as France's de facto propaganda minister during the Terror.",
					"This portrait of Henry VIII projects overwhelming royal authority and became the definitive visual representation of Tudor power and state portraiture standards.",
					"This Surrealist canvas depicts melting watches in a dreamlike landscape drawing on Freudian ideas to subvert rational understandings of time and reality.",
					"This neoclassical work depicts an ancient philosopher choosing death over compromise widely read as critique of corruption on the eve of French Revolution.",
					"This scene of Parisians dining by the Seine captures leisure culture and social freedoms of the Third Republic's prosperous early years during La Belle Époque."
				],
				correct: 'Painted weeks after assassination of the radical journalist Jean-Paul Marat David transformed a murder scene into a secular martyrdom image as France\'s de facto propaganda minister during the Terror.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg/500px-David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Napoleon Crossing the Alps',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Jacques-Louis David',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Napoleonic Era'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This idealized equestrian portrait though historically inaccurate depicts Napoleon as heroic military commander exemplifying systematic use of art to build and sustain the emperor's cult of personality.",
					"This harrowing scene depicts execution of Spanish civilians using white-shirted martyr in Christ-like pose against faceless firing squad becoming one of history's most powerful anti-war images.",
					"This work depicts ancient philosopher choosing death over compromise widely read as critique of corruption and call for civic virtue on eve of French Revolution.",
					"This baroque sculptural group depicts mystical vision of a Counter-Reformation saint with intense spiritual rapture within theatrical architectural frame.",
					"This portrait painting of an unknown woman as betrothal gift for Henry VIII illustrates high-stakes diplomatic negotiations of the Reformation era."
				],
				correct: 'This idealized equestrian portrait though historically inaccurate depicts Napoleon as heroic military commander exemplifying systematic use of art to build and sustain the emperor\'s cult of personality.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg/500px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'The Third of May',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Goya',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Napoleonic Era'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"Painted after Napoleon's forces were driven out of Spain this harrowing scene depicts execution of Spanish civilians with unprecedented emotional rawness becoming one of history's most powerful anti-war images.",
					"This idealized equestrian portrait depicts Napoleon as heroic military commander exemplifying systematic use of art for propaganda and cult of personality.",
					"This neoclassical work depicts ancient philosopher choosing death over compromise widely read as critique of corruption on eve of French Revolution.",
					"This portrait projects overwhelming royal authority becoming the definitive visual representation of Tudor power and establishing state portraiture standards across Europe.",
					"This turbulent seascape inspired by the Zong massacre used Romantic expressiveness to make moral argument against slave trade just as Britain's abolitionist movement gained momentum."
				],
				correct: 'Painted after Napoleon\'s forces were driven out of Spain this harrowing scene depicts execution of Spanish civilians with unprecedented emotional rawness becoming one of history\'s most powerful anti-war images.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/500px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Liberty Leading the People',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Delacroix',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Liberal Revolutions and Unification'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"Painted to commemorate the July Revolution of 1830 this Romantic masterpiece personifies Liberty bearing the tricolor flag across a barricade uniting classical allegory with contemporary political reality.",
					"This turbulent seascape inspired by the Zong massacre made a moral argument against the slave trade anticipating Impressionism while serving as powerful social commentary.",
					"This monumental marble statue redefined the male nude depicting David in anticipation embodying intellectual courage and serving as symbol of Florentine republican independence.",
					"This harrowing scene of Spanish civilian execution with white-shirted martyr in Christ-like pose became one of history's most powerful anti-war images.",
					"This scene of Parisians dining by the Seine captures leisure culture and social freedoms of the Third Republic's prosperous early years."
				],
				correct: 'Painted to commemorate the July Revolution of 1830 this Romantic masterpiece personifies Liberty bearing the tricolor flag across a barricade uniting classical allegory with contemporary political reality.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Slave-ship.jpg/500px-Slave-ship.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'The Slave Ship',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Turner',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Industrial Revolution'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"Inspired by the real-life Zong massacre this turbulent seascape used Romantic expressiveness to make a searing moral argument against the slave trade serving as one of the few major European artworks to directly confront Atlantic slavery.",
					"This personification of Liberty bearing the tricolor flag across a barricade unites classical allegory with contemporary political reality as symbol of popular struggle for freedom.",
					"This portrait painting though Henri VIII reportedly found the subject less attractive in person illustrates portraiture's political function during the Reformation era.",
					"This monumental marble statue redefined the male nude depicting David in tense anticipation as symbol of Florentine republican independence.",
					"This neoclassical work depicts ancient philosopher choosing death over compromise read as critique of corruption and call for civic virtue on eve of revolution."
				],
				correct: 'Inspired by the real-life Zong massacre this turbulent seascape used Romantic expressiveness to make a searing moral argument against the slave trade serving as one of the few major European artworks to directly confront Atlantic slavery.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Edgar_Germain_Hilaire_Degas_004.jpg/500px-Edgar_Germain_Hilaire_Degas_004.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Ballet Rehearsal',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Degas',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Post 1871 State Building (La Belle Époque)'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"Degas's numerous ballet scenes capture the rigorous labor behind Parisian entertainment during La Belle Époque depicting rehearsals rather than performances to reveal unglamorous reality of dancers' lives.",
					"This hazy depiction of Le Havre port gave the Impressionist movement its name representing revolutionary break from academic painting transforming Western art.",
					"This vibrant sun-drenched scene of Parisians dining by the Seine captures the leisure culture and social freedoms of the Third Republic's prosperous early years.",
					"This stiffly posed scene of bourgeois Parisians in a park subtly satirizes social rigidity while demonstrating scientific Pointillist technique.",
					"This swirling nocturnal landscape with vivid color expresses intense emotional and spiritual turmoil directly influencing development of Expressionism and abstraction."
				],
				correct: 'Degas\'s numerous ballet scenes capture the rigorous labor behind Parisian entertainment during La Belle Époque depicting rehearsals rather than performances to reveal unglamorous reality of dancers\' lives.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/500px-Monet_-_Impression%2C_Sunrise.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Impression, Sunrise',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Monet',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Post 1871 State Building (La Belle Époque)'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This hazy depiction of the port of Le Havre gave the Impressionist movement its name when a critic used the title mockingly representing a revolutionary break from academic painting.",
					"This vibrant sun-drenched scene of Parisians dining captures the leisure culture and social freedoms of the Third Republic's prosperous early years during La Belle Époque.",
					"This stiffly posed scene of bourgeois people in a park subtly satirizes social rigidity while demonstrating scientific Pointillist technique applied over two years.",
					"This swirling nocturnal landscape with vivid color and violent brushwork expresses intense emotional turmoil directly influencing Expressionism and abstraction.",
					"Degas's numerous ballet scenes capture the rigorous labor behind entertainment depicting rehearsals to reveal the unglamorous reality of dancers' working lives."
				],
				correct: 'This hazy depiction of the port of Le Havre gave the Impressionist movement its name when a critic used the title mockingly representing a revolutionary break from academic painting.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/500px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'The Luncheon of the Boating Party',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Renoir',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Post 1871 State Building (La Belle Époque)'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This vibrant sun-drenched scene of Parisian friends dining by the Seine captures the leisure culture of France's growing urban middle class considered one of the finest Impressionist achievements.",
					"This hazy depiction of a port gave the Impressionist movement its name representing revolutionary break from academic painting transforming Western art.",
					"This stiffly posed scene of bourgeois Parisians in a park subtly satirizes social rigidity while demonstrating scientific Pointillist technique.",
					"This swirling nocturnal landscape expresses intense emotional turmoil through dynamic brushwork directly influencing Expressionism and abstraction.",
					"This portrait of a barmaid uses disorienting mirror reflection to observe modern commercial culture and commodification of women's labor in entertainment."
				],
				correct: 'This vibrant sun-drenched scene of Parisian friends dining by the Seine captures the leisure culture of France\'s growing urban middle class considered one of the finest Impressionist achievements.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/%22Un_Bar_aux_Folies-Berg%C3%A8re%22_by_%C3%89douard_Manet_%281882%29.jpg/500px-%22Un_Bar_aux_Folies-Berg%C3%A8re%22_by_%C3%89douard_Manet_%281882%29.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'A Bar at the Folies-Bergère',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Manet',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Post 1871 State Building (La Belle Époque)'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"Manet's final major painting depicts a barmaid at a famous venue using a disorienting mirror reflection to observe modern commercial culture and commodification of women's labor in Belle Époque entertainment.",
					"This vibrant sun-drenched scene of friends dining by the Seine captures the leisure culture and social freedoms of the Third Republic's prosperous years.",
					"This hazy depiction of Le Havre port gave the Impressionist movement its name representing revolutionary break from academic painting.",
					"This stiffly posed scene of bourgeois Parisians subtly satirizes social rigidity while demonstrating the scientific Pointillist technique.",
					"This swirling nocturnal landscape expresses intense emotional turmoil through dynamic brushwork directly influencing Expressionism and 20th-century abstraction."
				],
				correct: 'Manet\'s final major painting depicts a barmaid at a famous venue using a disorienting mirror reflection to observe modern commercial culture and commodification of women\'s labor in Belle Époque entertainment.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/500px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'The Scream',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Munch',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Post 1871 State Building (La Belle Époque)'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This anguished figure beneath a blood-red sky became the defining image of existential anxiety in modern life expressing psychological alienation amid rapid industrialization and was foundational to Expressionism development.",
					"This stiffly posed scene of bourgeois Parisians in a park subtly satirizes social rigidity while demonstrating scientific Pointillist color technique.",
					"This swirling nocturnal landscape expresses intense emotional turmoil through dynamic brushwork directly influencing development of Expressionism and abstraction.",
					"This hazy depiction of Le Havre port gave the Impressionist movement its name representing revolutionary break from academic painting.",
					"This vibrant scene of Parisians dining captures leisure culture and social freedoms of the Third Republic's prosperous early Belle Époque years."
				],
				correct: 'This anguished figure beneath a blood-red sky became the defining image of existential anxiety in modern life expressing psychological alienation amid rapid industrialization and was foundational to Expressionism development.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/500px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'A Sunday Afternoon on the Island of La Grande Jatte',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Seurat',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Post 1871 State Building (La Belle Époque)'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"Seurat spent two years applying his scientific Pointillist technique placing tiny dots of pure color side by side with stiffly posed bourgeois Parisians subtly satirizing social rigidity of French society.",
					"This anguished figure beneath blood-red sky became the defining image of existential anxiety expressing psychological alienation amid rapid industrialization.",
					"This swirling nocturnal landscape expresses intense emotional turmoil through dynamic brushwork directly influencing Expressionism and abstraction.",
					"This vibrant sun-drenched scene of friends dining captures leisure culture and social freedoms of the Third Republic's prosperous early years.",
					"This hazy depiction of a port gave the Impressionist movement its name representing revolutionary break from academic painting transforming Western art."
				],
				correct: 'Seurat spent two years applying his scientific Pointillist technique placing tiny dots of pure color side by side with stiffly posed bourgeois Parisians subtly satirizing social rigidity of French society.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/500px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Starry Night',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Van Gogh',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Post 1871 State Building (La Belle Époque)'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"Painted while confined to asylum this swirling nocturnal landscape expresses intense emotional and spiritual turmoil through dynamic almost violent brushwork directly influencing Expressionism and abstraction.",
					"Seurat's scientific Pointillist technique with stiffly posed bourgeois Parisians subtly satirizes social rigidity while representing moment when avant-garde engaged with color theory.",
					"This anguished figure beneath blood-red sky became the defining image of existential anxiety expressing psychological alienation amid rapid industrialization.",
					"This hazy depiction of Le Havre port gave the Impressionist movement its name representing revolutionary break from academic painting.",
					"This vibrant sun-drenched scene of friends dining captures leisure culture and social freedoms of the Third Republic's prosperous early Belle Époque years."
				],
				correct: 'Painted while confined to asylum this swirling nocturnal landscape expresses intense emotional and spiritual turmoil through dynamic almost violent brushwork directly influencing Expressionism and abstraction.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/500px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Self Portrait',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Van Gogh',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Post 1871 State Building (La Belle Époque)'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"One of over 30 self-portraits Van Gogh produced this work painted at the asylum uses swirling blue brushstrokes and intense unflinching gaze to convey profound psychological depth influencing how later artists approached introspective autobiographical work.",
					"This swirling nocturnal landscape expresses intense emotional turmoil through dynamic brushwork directly influencing development of Expressionism and abstraction.",
					"This anguished figure beneath blood-red sky became the defining image of existential anxiety expressing psychological alienation amid industrialization.",
					"This vibrant scene of Parisians dining captures leisure culture and social freedoms of the Third Republic's prosperous early Belle Époque years.",
					"This stiffly posed scene of bourgeois Parisians subtly satirizes social rigidity while demonstrating scientific Pointillist color technique applied methodically."
				],
				correct: 'One of over 30 self-portraits Van Gogh produced this work painted at the asylum uses swirling blue brushstrokes and intense unflinching gaze to convey profound psychological depth influencing how later artists approached introspective autobiographical work.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/500px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'The Kiss',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Klimt',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Post 1871 State Building (La Belle Époque)'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"The golden masterpiece of Vienna's Jugendstil movement this painting fuses Byzantine gold mosaic with sinuous organic decoration representing total art of the 20th century in fin-de-siècle Vienna.",
					"This radical proto-Cubist work shattered centuries of pictorial tradition by depicting distorted figures influenced by African masks and Iberian sculpture.",
					"This monochromatic Cubist painting depicts the suffering of civilians during aerial warfare becoming the most powerful anti-war artwork of the 20th century.",
					"One of over 30 self-portraits this work uses swirling brushstrokes and intense gaze to convey psychological depth at the asylum.",
					"This small canvas depicts melting watches in a dreamlike landscape drawing on Freudian ideas to subvert rational understandings of time."
				],
				correct: 'The golden masterpiece of Vienna\'s Jugendstil movement this painting fuses Byzantine gold mosaic with sinuous organic decoration representing total art of the 20th century in fin-de-siècle Vienna.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Max_Beckmann%2C_1918-19%2C_The_Night_%28Die_Nacht%29%2C_oil_on_canvas%2C_133_x_154_cm%2C_Kunstsammlung_Nordrhein-Westfalen%2C_D%C3%BCsseldorf.jpg/500px-Max_Beckmann%2C_1918-19%2C_The_Night_%28Die_Nacht%29%2C_oil_on_canvas%2C_133_x_154_cm%2C_Kunstsammlung_Nordrhein-Westfalen%2C_D%C3%BCsseldorf.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'The Night',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Beckmann',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'WWI'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"Painted in the immediate aftermath of World War I and failed German Revolution this nightmarish scene of violence and torture reflects trauma and moral collapse of Weimar Germany's birth.",
					"This monochromatic Cubist painting depicts suffering of civilians during aerial bombing becoming the most powerful anti-war artwork of the 20th century.",
					"This harrowing scene depicts execution of Spanish civilians with white-shirted martyr in Christ-like pose becoming one of history's most powerful anti-war images.",
					"This elongated emaciated bronze figure embodies postwar Existentialist spirit suggesting both survival and irreducible human dignity in face of destruction.",
					"This radical proto-Cubist work shatters centuries of pictorial tradition by depicting distorted figures influenced by African masks and Iberian sculpture."
				],
				correct: 'Painted in the immediate aftermath of World War I and failed German Revolution this nightmarish scene of violence and torture reflects trauma and moral collapse of Weimar Germany\'s birth.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/500px-Les_Demoiselles_d%27Avignon.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Les Demoiselles d\'Avignon',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Picasso',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Post 1871 State Building (La Belle Époque)'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This radical proto-Cubist work shatters centuries of Western pictorial tradition by depicting five nude figures with distorted fragmented forms announcing the beginning of Cubism and modern art.",
					"This monochromatic Cubist painting depicts suffering of civilians during aerial warfare becoming the most powerful anti-war artwork of the 20th century.",
					"The golden masterpiece of Vienna's Jugendstil movement fusing Byzantine gold mosaic with sinuous organic decoration representing total art.",
					"This small canvas depicts melting watches in a dreamlike landscape drawing on Freudian ideas to subvert rational understandings of time and reality.",
					"This nightmarish scene of violence and torture reflects trauma and moral collapse of Weimar Germany's birth after World War I."
				],
				correct: 'This radical proto-Cubist work shatters centuries of Western pictorial tradition by depicting five nude figures with distorted fragmented forms announcing the beginning of Cubism and modern art.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'The Persistence of Memory',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Dalí',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Interwar Years'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This small Surrealist canvas depicts melting watches in a barren dreamlike landscape drawing on Freudian ideas to subvert rational understandings of time and reality.",
					"This radical proto-Cubist work shatters centuries of pictorial tradition by depicting distorted figures influenced by African masks announcing Cubism.",
					"This monochromatic Cubist painting depicts suffering of civilians during aerial bombing becoming the most powerful anti-war artwork of the 20th century.",
					"This nightmarish scene reflects trauma and moral collapse of Weimar Germany's birth using Expressionism and medieval altarpiece influences.",
					"The golden masterpiece of Vienna's Jugendstil movement fuses Byzantine mosaic with organic decoration representing total art of fin-de-siècle Vienna."
				],
				correct: 'This small Surrealist canvas depicts melting watches in a barren dreamlike landscape drawing on Freudian ideas to subvert rational understandings of time and reality.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Guernica',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Picasso',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Interwar Years'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"Commissioned by Spanish Republicans and inspired by Nazi bombing of Guernica this enormous monochromatic Cubist painting depicts civilian suffering with raw fragmented anguish becoming the most powerful anti-war artwork of the 20th century.",
					"This small Surrealist canvas depicts melting watches drawing on Freudian ideas to subvert rational understandings of time and reality.",
					"This radical proto-Cubist work shatters centuries of pictorial tradition by depicting distorted figures influenced by African masks and Iberian sculpture.",
					"This elongated emaciated bronze figure embodies postwar Existentialist spirit suggesting survival and irreducible human dignity in face of destruction.",
					"This nightmarish scene reflects trauma and moral collapse of Weimar Germany's birth using jagged compressed Expressionist composition."
				],
				correct: 'Commissioned by Spanish Republicans and inspired by Nazi bombing of Guernica this enormous monochromatic Cubist painting depicts civilian suffering with raw fragmented anguish becoming the most powerful anti-war artwork of the 20th century.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://upload.wikimedia.org/wikipedia/en/8/81/L%27Homme_au_doigt_Alberto_Giacometti.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Man Pointing',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Giacometti',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Cold War'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"This elongated emaciated bronze figure embodies the postwar Existentialist spirit with fragile human presence reaching into an uncertain void profoundly influencing Jean-Paul Sartre's philosophy.",
					"This monochromatic Cubist painting depicts civilian suffering during aerial warfare becoming the most powerful anti-war artwork of the 20th century.",
					"This small Surrealist canvas depicts melting watches drawing on Freudian ideas to subvert rational understandings of time and reality.",
					"This large Color Field canvas with luminous hovering rectangles was intended to evoke profound religious emotional experiences central to Abstract Expressionism.",
					"This radical proto-Cubist work shatters centuries of pictorial tradition by depicting distorted figures influenced by African masks announcing modern art."
				],
				correct: 'This elongated emaciated bronze figure embodies the postwar Existentialist spirit with fragile human presence reaching into an uncertain void profoundly influencing Jean-Paul Sartre\'s philosophy.'
			},
		]
	},
	{
		type: 'image',
		question: 'Complete the information about the artwork.',
		image: 'https://www.mark-rothko.org/assets/img/paintings/ochre-and-red-on-red.jpg',
		answers: [
			{
				type: 'text-input',
				label: "Name:",
				correct: 'Ochre on Red',
			},
			{
				type: 'text-input',
				label: "Artist:",
				correct: 'Rothko',
			},
			{
				type: 'text-mc',
				label: "Era:",
				options: THEOPTIONS,
				correct: 'Cold War'
			},
			{
				type: 'text-mc',
				label: "Significance:",
				options: [
					"Rothko's large Color Field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences becoming central to Abstract Expressionism movement during Cold War.",
					"This elongated emaciated bronze figure embodies postwar Existentialist spirit suggesting survival and irreducible human dignity in face of destruction.",
					"This monochromatic Cubist painting depicts suffering of civilians during aerial bombing becoming the most powerful anti-war artwork of the 20th century.",
					"This small Surrealist canvas depicts melting watches drawing on Freudian ideas to subvert rational understandings of time and reality.",
					"This radical proto-Cubist work shatters centuries of pictorial tradition by depicting distorted figures influenced by African masks and Iberian sculpture."
				],
				correct: 'Rothko\'s large Color Field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences becoming central to Abstract Expressionism movement during Cold War.'
			},
		]
	},
];