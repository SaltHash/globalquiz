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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"One of the earliest and most complex uses of oil paint in Northern Europe, showcasing mastery of light, texture, and realistic detail with a convex mirror demonstrating technical innovation.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"A landmark of Italian Renaissance art among the first large-scale paintings since antiquity to depict a pagan goddess, reflecting the Medici court's embrace of Neoplatonism and classical mythology.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This drawing perfectly encapsulates the Renaissance ideal of humanity as the measure of all things, combining art and science to explore ideal human proportions.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"A revolutionary mural using perspective and psychological realism to depict Christ announcing his betrayal with individualized emotional reactions among apostles.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Carved when Michelangelo was only 24, this marble sculpture displayed unprecedented technical skill and emotional depth synthesizing Renaissance ideals of beauty with religious devotion.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation, embodying intellectual courage and symbolizing Florentine republican independence.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
				],
				correct: 'This monumental marble statue redefined the representation of the male nude by depicting a biblical hero in tense anticipation, embodying intellectual courage and symbolizing Florentine republican independence.'
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"The centerpiece of the Sistine Chapel ceiling depicting the moment God breathes life into Adam with nearly touching fingers becoming one of the most iconic images in Western art.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Painted for the Vatican depicting ancient philosophers gathered with Plato and Aristotle at the center celebrating the Renaissance recovery of classical learning and the compatibility of philosophy and Christian truth.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This dynamic mythological scene showcases revolutionary use of color and movement drawn from classical texts exemplifying Italian Renaissance embrace of pagan mythology as worthy of serious artistic treatment.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This iconic frontal portrait projects overwhelming royal authority and effectively became the definitive visual representation of Tudor power especially significant in Henry's break with Rome and establishment of the Church of England.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This painting is a pivotal example of portraiture's political function during the Reformation era showing how Renaissance portraiture could serve and distort high-stakes diplomatic negotiations.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This signature technique of extreme contrasts of light and dark gives biblical scene visceral shocking realism as a hallmark of Counter-Reformation Baroque style intended to move viewers emotionally toward faith.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This breathtaking marble sculptural group set within a theatrical architectural frame depicts the mystical vision of St. Teresa of \u00c1vila exemplifying Baroque strategy of engaging the senses to inspire religious devotion.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This group portrait of surgeons witnessing a public dissection reflects the Dutch Golden Age enthusiasm for empirical inquiry and scientific learning capturing the spirit of the Scientific Revolution.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This large-scale group portrait of an Amsterdam civic militia company is celebrated for dynamic composition dramatic use of light and motion departing radically from static conventions of Dutch group portraiture.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This intimate domestic scene captures a quiet moment of everyday life suffused with subtle luminous light from a leaded window reflecting Dutch Golden Age's unique valuation of middle-class life as worthy of serious artistic treatment.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Often called the Mona Lisa of the North this tronie is celebrated for extraordinary intimacy and enigmatic gaze exemplifying Vermeer's mastery of light and reflecting how Dutch art market for private collectors drove innovation.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Painted on the eve of the French Revolution this neoclassical work depicts an ancient philosopher choosing death over compromise widely read as a critique of corruption and call for civic virtue.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Painted weeks after assassination of the radical journalist Jean-Paul Marat David transformed a murder scene into a secular martyrdom image as France's de facto propaganda minister during the Terror.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This idealized equestrian portrait though historically inaccurate depicts Napoleon as heroic military commander exemplifying systematic use of art to build and sustain the emperor's cult of personality.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Painted after Napoleon's forces were driven out of Spain this harrowing scene depicts execution of Spanish civilians with unprecedented emotional rawness becoming one of history's most powerful anti-war images.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Painted to commemorate the July Revolution of 1830 this Romantic masterpiece personifies Liberty bearing the tricolor flag across a barricade uniting classical allegory with contemporary political reality.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Inspired by the real-life Zong massacre this turbulent seascape used Romantic expressiveness to make a searing moral argument against the slave trade serving as one of the few major European artworks to directly confront Atlantic slavery.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Degas's numerous ballet scenes capture the rigorous labor behind Parisian entertainment during La Belle \u00c9poque depicting rehearsals rather than performances to reveal unglamorous reality of dancers' lives.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This hazy depiction of the port of Le Havre gave the Impressionist movement its name when a critic used the title mockingly representing a revolutionary break from academic painting.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This vibrant sun-drenched scene of Parisian friends dining by the Seine captures the leisure culture of France's growing urban middle class considered one of the finest Impressionist achievements.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Manet's final major painting depicts a barmaid at a famous venue using a disorienting mirror reflection to observe modern commercial culture and commodification of women's labor in Belle \u00c9poque entertainment.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This anguished figure beneath a blood-red sky became the defining image of existential anxiety in modern life expressing psychological alienation amid rapid industrialization and was foundational to Expressionism development.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Seurat spent two years applying his scientific Pointillist technique placing tiny dots of pure color side by side with stiffly posed bourgeois Parisians subtly satirizing social rigidity of French society.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Painted while confined to asylum this swirling nocturnal landscape expresses intense emotional and spiritual turmoil through dynamic almost violent brushwork directly influencing Expressionism and abstraction.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"One of over 30 self-portraits Van Gogh produced this work painted at the asylum uses swirling blue brushstrokes and intense unflinching gaze to convey profound psychological depth influencing how later artists approached introspective autobiographical work.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"The golden masterpiece of Vienna's Jugendstil movement this painting fuses Byzantine gold mosaic with sinuous organic decoration representing total art of the 20th century in fin-de-si\u00e8cle Vienna.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Painted in the immediate aftermath of World War I and failed German Revolution this nightmarish scene of violence and torture reflects trauma and moral collapse of Weimar Germany's birth.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This radical proto-Cubist work shatters centuries of Western pictorial tradition by depicting five nude figures with distorted fragmented forms announcing the beginning of Cubism and modern art.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This small Surrealist canvas depicts melting watches in a barren dreamlike landscape drawing on Freudian ideas to subvert rational understandings of time and reality.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Commissioned by Spanish Republicans after the Nazi bombing of a Basque town, this enormous monochromatic Cubist painting depicts civilian suffering with fragmented anguish and became one of the most powerful anti-war artworks of the 20th century.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
				],
				correct: 'Commissioned by Spanish Republicans after the Nazi bombing of a Basque town, this enormous monochromatic Cubist painting depicts civilian suffering with fragmented anguish and became one of the most powerful anti-war artworks of the 20th century.'
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"This elongated emaciated bronze figure embodies the postwar Existentialist spirit with fragile human presence reaching into an uncertain void profoundly influencing Jean-Paul Sartre's philosophy.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
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
							"A dramatic anti-war mural responding to the bombing of a civilian town, notable for fragmented forms and monochrome intensity.",
							"A domestic Dutch interior that elevates everyday middle-class life through quiet light and meticulous surface detail.",
							"Rothko's large Color Field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences becoming central to Abstract Expressionism movement during Cold War.",
							"Its historical importance comes mainly from being the first major artwork to use photography as its primary medium.",
							"It is chiefly significant for directly triggering the outbreak of a major European war within a year of its unveiling."
				],
				correct: 'Rothko\'s large Color Field canvas with luminous hovering rectangles of color was intended to evoke profound almost religious emotional experiences becoming central to Abstract Expressionism movement during Cold War.'
			},
		]
	},
];