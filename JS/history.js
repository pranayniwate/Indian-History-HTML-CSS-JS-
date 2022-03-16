const getElement = (selector) => {
	const element = document.querySelector(selector)
	if (element) return element
	throw Error(`please check you class name`)
}


const navlinks = getElement('.nav-links');
const navbtn = getElement('.nav-btn');

navbtn.addEventListener('click', () => {
	navlinks.classList.toggle('show-links')
})

document.addEventListener("DOMContentLoaded", function (event) {
	document.getElementById("Indus").click();

});

const ancient = [
	{
	  id: 1,
	  title: `Indus Valley Civilization`,
	  category: `Indus`,
	  img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Indus_Valley_Civilization%2C_Mature_Phase_%282600-1900_BCE%29.png/330px-Indus_Valley_Civilization%2C_Mature_Phase_%282600-1900_BCE%29.png",
	  img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Mohenjo-daro.jpg/220px-Mohenjo-daro.jpg",
	  img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Harappan_small_figures.jpg/220px-Harappan_small_figures.jpg",
	  desc: `The Indus Valley Civilisation (IVC), also known as the Indus Civilisation, was a Bronze Age civilisation in the northwestern regions of South Asia, lasting from 3300 BCE to 1300 BCE, and in its mature form from 2600 BCE to 1900 BCE. Together with ancient Egypt and Mesopotamia, it was one of three early civilisations of the Near East and South Asia, and of the three, the most widespread, its sites spanning an area stretching from today's northeast Afghanistan, through much of Pakistan, and into western and northwestern India. It flourished in the basins of the Indus River, which flows through the length of Pakistan, and along a system of perennial, mostly monsoon-fed, rivers that once coursed in the vicinity of the seasonal Ghaggar-Hakra river in northwest India and eastern Pakistan.<br><br>

	  The civilisation's cities were noted for their urban planning, baked brick houses, elaborate drainage systems, water supply systems, clusters of large non-residential buildings, and new techniques in handicraft (carnelian products, seal carving) and metallurgy (copper, bronze, lead, and tin). The large cities of Mohenjo-daro and Harappa very likely grew to contain between 30,000 and 60,000 individuals, and the civilisation itself during its florescence may have contained between one and five million individuals.<br><br>

	  Gradual drying of the region's soil during the 3rd millennium BCE may have been the initial spur for the urbanisation associated with the civilisation, but eventually weaker monsoons and reduced water supply caused the civilisation's demise, and caused its population to scatter eastward and southward.<br><br>

	  The Indus civilisation is also known as the Harappan Civilisation, after its type site, Harappa, the first of its sites to be excavated early in the 20th century in what was then the Punjab province of British India and is now in Pakistan. The discovery of Harappa and soon afterwards Mohenjo-daro was the culmination of work beginning in 1861 with the founding of the Archaeological Survey of India during the British Raj. There were however earlier and later cultures often called Early Harappan and Late Harappan in the same area; for this reason, the Harappan civilisation is sometimes called the Mature Harappan to distinguish it from these other cultures. `,
	  desc1: `Major sites and extent of the Indus Valley Civilisation`,
	  desc2: `Excavated ruins of Mohenjo-daro, Sindh province, Pakistan, showing the Great Bath in the foreground.`,
	  desc3: `Miniature votive images or toy models from Harappa, c. 2500 BCE.`,
	  subTitle: `Extent of Indus valley Civilisation`,
	  subDesc: `The Indus Civilisation was roughly contemporary with the other riverine civilisations of the ancient world: Egypt along the Nile, Mesopotamia in the lands watered by the Euphrates and the Tigris, and China in the drainage basin of the Yellow River and the Yangtze. By the time of its mature phase, the civilisation had spread over an area larger than the others, which included a core of 1,500 kilometres (900 mi) up the alluvial plain of the Indus and its tributaries. In addition, there was a region with disparate flora, fauna, and habitats, up to ten times as large, which had been shaped culturally and economically by the Indus.<br><br>

	  Around 6500 BCE, agriculture emerged in Balochistan, on the margins of the Indus alluvium. In the following millennia, settled life made inroads into the Indus plains, setting the stage for the growth of rural and urban human settlements. The more organized sedentary life, in turn, led to a net increase in the birth rate. The large urban centres of Mohenjo-daro and Harappa very likely grew to containing between 30,000 and 60,000 individuals, and during the civilisation's florescence, the population of the subcontinent grew to between 4–6 million people. During this period the death rate increased as well, for close living conditions of humans and domesticated animals led to an increase in contagious diseases.According to one estimate, the population of the Indus Civilisation at its peak may have been between one and five million.<br><br>

	  The Indus Valley Civilisation (IVC) extended from Pakistan's Balochistan in the west to India's western Uttar Pradesh in the east, from northeastern Afghanistan in the north to India's Gujarat state in the south. The largest number of sites are in Gujarat, Haryana, Punjab, Rajasthan, Uttar Pradesh, Jammu and Kashmir states in India, and Sindh, Punjab, and Balochistan provinces in Pakistan. Coastal settlements extended from Sutkagan Dor in Western Baluchistan to Lothal in Gujarat. An Indus Valley site has been found on the Oxus River at Shortugai in northern Afghanistan, in the Gomal River valley in northwestern Pakistan, at Manda, Jammu on the Beas River near Jammu, India, and at Alamgirpur on the Hindon River, only 28 km (17 mi) from Delhi. The southernmost site of the Indus valley civilisation is Daimabad in Maharashtra. Indus Valley sites have been found most often on rivers, but also on the ancient seacoast, for example, Balakot, and on islands, for example, Dholavira.`,
	  listTitle: `Chronology`,
	},
	{
		id: 2,
		title: `Vedic Civilization`,
		category: `Vedic`,
		img1: "https://www.shorthistory.org/images/Map_of_Vedic_India.png",
		img2: "https://i.pinimg.com/originals/67/72/d0/6772d00045d21fca8ca565118c2d82dd.jpg",
		img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ax_Blade_%28Celt%29.jpg/157px-Ax_Blade_%28Celt%29.jpg",
		desc: `The Vedic period, or the Vedic age (c. 1500 – c. 500 BCE), is the period in the late Bronze Age and early Iron Age of the history of India when the Vedic literature, including the Vedas (ca. 1300–900 BCE), was composed in the northern Indian subcontinent, between the end of the Urban Indus Valley Civilisation and a second urbanisation which began in the central Indo-Gangetic Plain c. 600 BCE. The Vedas are liturgical texts which formed the basis of modern day Hinduism, which also developed in the Kuru Kingdom. The Vedas contain details of life during this period that have been interpreted to be historical and constitute the primary sources for understanding the period. These documents, alongside the corresponding archaeological record, allow for the evolution of the Vedic culture to be traced and inferred.<br><br>

		The Vedas were composed and orally transmitted with precision in this period. The Vedic society was patriarchal and patrilineal. Early Indo-Aryans were a Late Bronze Age society centred in the Punjab, organised into tribes rather than kingdoms, and primarily sustained by a pastoral way of life.<br><br>

		Around c. 1200–1000 BCE Vedic culture spread eastward to the fertile western Ganges Plain. Iron tools were adopted, which allowed for the clearing of forests and the adoption of a more settled, agricultural way of life. The second half of the Vedic period was characterised by the emergence of towns, kingdoms, and a complex social differentiation distinctive to India, and the Kuru Kingdom's codification of orthodox sacrificial ritual. During this time, the central Ganges Plain was dominated by a related but non-Vedic culture, of Greater Magadha. The end of the Vedic period witnessed the rise of true cities and large states (called mahajanapadas) as well as śramaṇa movements (including Jainism and Buddhism) which challenged the Vedic orthodoxy.<br><br>

		The Vedic period saw the emergence of a hierarchy of social classes that would remain influential. Vedic religion developed into Brahmanical orthodoxy, and around the beginning of the Common Era, the Vedic tradition formed one of the main constituents of "Hindu synthesis".`,
		desc1: `Major sites and extent of Vedic Era`,
		desc2: `Caste system in Vedic Era`,
		desc3: `Ancient Indian axe blade, 1500–1000 BCE`,
		subTitle: `Society`,
		subDesc: `While Vedic society was relatively egalitarian in the sense that a distinct hierarchy of socio-economic classes or castes was absent, the Vedic period saw the emergence of a hierarchy of social classes. Political hierarchy was determined by rank, where rājan (tribal king or chieftain) and rājanya (tribal nobility) stood at the top, the viś (the common people) in the middle, and the dāsa and dasyu (non-Indo-Aryan servants) at the bottom. The words Brahamana and Kshatriya occur in various family books of the Rigveda, but they are not associated with the term varna. The words Vaishya and Shudra are absent. Verses of the Rigveda, such as 3.44-45, indicate the absence of strict social hierarchy and the existence of social mobility.<br><br>

		<i>"O, Indra, fond of soma, would you make me the protector of people, or would you make me a king, would you make me a sage who has drunk soma, would you impart to me endless wealth."</i><br><br>

		The institution of marriage was important and different types of marriages— monogamy, polygyny and polyandry are mentioned in the Rigveda. Both women sages and female gods were known to Vedic Aryans. Women could choose their husbands and could remarry if their husbands died or disappeared. The wife enjoyed a respectable position.People consumed milk, milk products, grains, fruits and vegetables. Meat eating is mentioned; however, cows are labelled aghnya (not to be killed). Clothes of cotton, wool and animal skin were worn.Soma and sura were popular drinks in the Vedic society, of which soma was sanctified by religion. Flute (vana), lute (vina), harp, cymbals and drums were the musical instruments played and a heptatonic scale was used. Dancing, dramas, chariot racing and gambling were other popular pastimes.
		`,
		listTitle: `Chronology`,
	},
	{
		id: 3,
		title: `Mahājanapadas`,
		category: `Mahajan`,
		img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Mahajanapadas_%28c._500_BCE%29.png/250px-Mahajanapadas_%28c._500_BCE%29.png",
		img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Fragment_-_Northern_Black_Polished_Ware_-_500-100_BCE_-_Sonkh_-_Showcase_6-15_-_Prehistory_and_Terracotta_Gallery_-_Government_Museum_-_Mathura_2013-02-24_6458.JPG/220px-thumbnail.jpg",
		img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kosala_Karshapana.jpg/220px-Kosala_Karshapana.jpg",
		desc: `The Mahājanapadas (Sanskrit: great realm, from maha,"great", and janapada "foothold of a people") were sixteen kingdoms or oligarchic republics that existed in Northern ancient India from the sixth to fourth centuries BCE during the second urbanisation period.<br><br>

		The 6th–5th centuries BCE is often regarded as a major turning point in early Indian history; during this period India's first large cities arose after the demise of the Indus Valley Civilization. It was also the time of the rise of sramana movements (including Buddhism and Jainism), which challenged the religious orthodoxy of the Vedic Period.<br><br>

		Two of the Mahājanapadas were most probably ganatantras (oligarchic republics) and others had forms of monarchy. Ancient Buddhist texts like the Anguttara Nikayamake frequent reference to sixteen great kingdoms and republics which had developed and flourished in a belt stretching from Gandhara in the northwest to Anga in the eastern part of the Indian subcontinent. They included parts of the trans-Vindhyan region,and all had developed prior to the rise of Buddhism in India.<br><br>

		Archaeologically, this period has been identified as corresponding in part to the Northern Black Polished Ware culture.
		`,
		desc1: `Major sites and extent of Mahājanapadas`,
		desc2: `Pottery of the Northern Black Polished Ware culture (c. 500-200 BCE)`,
		desc3: `Silver coins of Kosala mahajanapada (c. 525–465 BCE)`,
		subTitle: `Overview`,
		subDesc: `The term "Janapada" literally means the foothold of a people. The fact that Janapada is derived from Jana points to an early stage of land-taking by the Jana people for a settled way of life. This process of settlement on land had completed its final stage prior to the times of the Buddha and Pāṇini. The Pre-Buddhist north-west region of the Indian sub-continent was divided into several Janapadas, demarcated from each other by boundaries. In Pāṇini's "Ashtadhyayi", Janapada stands for country and Janapadin for its citizenry. Each of these Janapadas was named after the Kshatriya people (or the Kshatriya Jana) who had settled therein.<br><br>

		Buddhist and other texts only incidentally refer to sixteen great nations (Solasa Mahajanapadas) that existed prior to the time of the Buddha. They do not give any connected history except in the case of Magadha. The Buddhist Anguttara Nikaya, at several places,gives a list of sixteen great nations.
		`,
		listTitle: `List of Mahājanapadas`,
	},
	{
		id: 4,
		title: `Nanda Dynasty`,
		category: `Nanda`,
		img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Nanda_Empire%2C_c.325_BCE.png/800px-Nanda_Empire%2C_c.325_BCE.png",
		img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/I12_1karshapana_Maghada_1ar_%288482307176%29.jpg/220px-I12_1karshapana_Maghada_1ar_%288482307176%29.jpg",
		img3: "https://upload.wikimedia.org/wikipedia/commons/9/92/Bodh_gaya_before_restoration.jpg",
		desc: `
		The Nanda dynasty ruled in the northern part of the Indian subcontinent during the 4th century BCE, and possibly during the 5th century BCE. The Nandas overthrew the Shaishunaga dynasty in the Magadha region of eastern India, and expanded their empire to include a larger part of northern India. Ancient sources differ considerably regarding the names of the Nanda kings, and the duration of their rule, but based on the Buddhist tradition recorded in the Mahavamsa, they appear to have ruled during c. 345–322 BCE, although some theories date the start of their rule to 5th century BCE.<br><br>

		Modern historians generally identify the ruler of the Gangaridai and the Prasii mentioned in ancient Greco-Roman accounts as a Nanda king. The chroniclers of Alexander the Great, who invaded north-western India during 327–325 BCE, characterise this king as a militarily powerful and prosperous ruler. The prospect of a war against this king led to a mutiny among the soldiers of Alexander, who had to retreat from India without waging a war against him.<br><br>

		The Nandas built on the successes of their Haryanka and Shaishunaga predecessors, and instituted a more centralised administration. Ancient sources credit them with amassing great wealth, which was probably a result of introduction of new currency and taxation system. Ancient texts also suggest that the Nandas were unpopular among their subjects because of their low status birth, their excessive taxation, and their general misconduct. The last Nanda king was overthrown by Chandragupta Maurya, the founder of the Maurya Empire, and the latter's mentor Chanakya.
		`,
		desc1: `Major sites and extent of Nanda Dynasty`,
		desc2: `A Silver Coin of Nanda Dynasty`,
		desc3: `The ancient Mahabodhi temple at Bodh Gaya prior to its restoration`,
		subTitle: `Origins`,
		subDesc: `
		Both Indian and Greco-Roman traditions characterize the dynasty's founder as of low birth. According to Greek historian Diodorus (1st century BCE), Porus told Alexander that the contemporary Nanda king was thought to be the son of a barber.Roman historian Curtius (1st century CE) adds that according to Porus, this barber became the former queen's paramour thanks to his attractive looks, treacherously assassinated the then king, usurped the supreme authority by pretending to act as a guardian for the then princes, and later killed the princes.<br><br>

		The Jain tradition, as recorded in the Avashyaka Sutra and Parishishta-parvan, corroborates the Greco-Roman accounts, stating that the first Nanda king was the son of a barber.  According to the 12th century text Parishishta-parvan, the mother of the first Nanda king was a courtesan. However, the text also states that the daughter of the last Nanda king married Chandragupta, because it was customary for Kshatriya girls to choose their husbands; thus, it implies that the Nanda king claimed to be a Kshatriya, that is, a member of the warrior class.<br><br>

		The Puranas name the dynasty's founder as Mahapadma, and claim that he was the son of the Shaishunaga king Mahanandin. However, even these texts hint at the low birth of the Nandas, when they state that Mahapadma's mother belonged to the Shudra class, the lowest of the varnas. 
		`,
		listTitle: `Kingdoms Conquered by King Mahapadma`,
	},
];

const ancientList = [
	{
	 id: 1,
	 singleTitle: `Pre-Harappan era: Mehrgarh`,
	 time1: `7000BCE`,
	 singleCategory:`Indus`,
	 time2: `2500BCE`,
	 pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Mehrgarh_ruins.jpg/220px-Mehrgarh_ruins.jpg",
	 pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/MET_2003_592_2_O.jpg/220px-MET_2003_592_2_O.jpg",
	 pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Site_Location_of_Mehrgarh.jpg/220px-Site_Location_of_Mehrgarh.jpg",
	 info: `Mehrgarh is a Neolithic mountain site in the Balochistan province of Pakistan, which gave new insights on the emergence of the Indus Valley Civilisation. Mehrgarh is one of the earliest sites with evidence of farming and herding in South Asia. Mehrgarh was influenced by the Near Eastern Neolithic, with similarities between "domesticated wheat varieties, early phases of farming, pottery, other archaeological artefacts, some domesticated plants and herd animals."<br><br>

	 Jean-Francois Jarrige argues for an independent origin of Mehrgarh. Jarrige notes "the assumption that farming economy was introduced full-fledged from Near-East to South Asia," and the similarities between Neolithic sites from eastern Mesopotamia and the western Indus valley, which are evidence of a "cultural continuum" between those sites. But given the originality of Mehrgarh, Jarrige concludes that Mehrgarh has an earlier local background," and is not a "'backwater' of the Neolithic culture of the Near East."<br><br>

	 Lukacs and Hemphill suggest an initial local development of Mehrgarh, with a continuity in cultural development but a change in population. According to Lukacs and Hemphill, while there is a strong continuity between the neolithic and chalcolithic (Copper Age) cultures of Mehrgarh, dental evidence shows that the chalcolithic population did not descend from the neolithic population of Mehrgarh, which "suggests moderate levels of gene flow." Mascarenhas et al. (2015) note that "new, possibly West Asian, body types are reported from the graves of Mehrgarh beginning in the Togau phase (3800 BCE)."`,
	 info1:`Ruins of houses at Mehrgarh, Balochistan`,
	 info2:`Mehrgarh painted pottery. 3000-2500 BC.`,
	 info3:`Site location of Mehrgarh, Kacchi Plain`,
	},
	{
		id: 2,
		singleTitle: `Early Harappan`,
		time1: `3300BCE `,
		singleCategory: `Indus`,
		time2: `2800BCE`,
		pic1: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Indus_Valley_Civilization%2C_Early_Phase_%283300-2600_BCE%29.png",
		pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Valle_dell%27indo%2C_barca_a_forma_di_toro%2C_periodo_kot-dijan%2C_2800-2600_ac_ca._%28coll._priv.%29_02.jpg/220px-Valle_dell%27indo%2C_barca_a_forma_di_toro%2C_periodo_kot-dijan%2C_2800-2600_ac_ca._%28coll._priv.%29_02.jpg",
		pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Oiseau_a_tete_de_belier_monte_sur_roues_Indus_Guimet.jpg/165px-Oiseau_a_tete_de_belier_monte_sur_roues_Indus_Guimet.jpg",
		info: `The Early Harappan Ravi Phase, named after the nearby Ravi River, lasted from c. 3300 BCE until 2800 BCE. It started when farmers from the mountains gradually moved between their mountain homes and the lowland river valleys,and is related to the Hakra Phase, identified in the Ghaggar-Hakra River Valley to the west, and predates the Kot Diji Phase (2800–2600 BCE, Harappan 2), named after a site in northern Sindh, Pakistan, near Mohenjo-daro. The earliest examples of the Indus script date to the 3rd millennium BCE.<br><br>

		The mature phase of earlier village cultures is represented by Rehman Dheri and Amri in Pakistan. Kot Diji represents the phase leading up to Mature Harappan, with the citadel representing centralised authority and an increasingly urban quality of life. Another town of this stage was found at Kalibangan in India on the Hakra River.<br><br>

		Trade networks linked this culture with related regional cultures and distant sources of raw materials, including lapis lazuli and other materials for bead-making. By this time, villagers had domesticated numerous crops, including peas, sesame seeds, dates, and cotton, as well as animals, including the water buffalo. Early Harappan communities turned to large urban centres by 2600 BCE, from where the mature Harappan phase started. The latest research shows that Indus Valley people migrated from villages to cities`,

		info1: `Early Harappan Period, c. 3300–2600 BCE`,
		info2: `Terracotta boat in the shape of a bull`,
		info3: `Ram-headed bird mounted on wheels, probably a toy`,
	},
	{
		id: 3,
		singleTitle: `Mature Harappan`,
		time1: `2600BCE `,
		singleCategory: `Indus`,
		time2: `1900BCE`,
		pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Indus_Valley_Civilization%2C_Mature_Phase_%282600-1900_BCE%29.png/330px-Indus_Valley_Civilization%2C_Mature_Phase_%282600-1900_BCE%29.png",
		pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Another_view_of_Granary_and_Great_Hall_on_Mound_F.JPG/218px-Another_view_of_Granary_and_Great_Hall_on_Mound_F.JPG",
		pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Harappan_%28Indus_Valley%29_Balance_%26_Weights.jpg/200px-Harappan_%28Indus_Valley%29_Balance_%26_Weights.jpg",
		info: `A sophisticated and technologically advanced urban culture is evident in the Indus Valley Civilisation, making them the first urban centre in the region. The quality of municipal town planning suggests the knowledge of urban planning and efficient municipal governments which placed a high priority on hygiene, or, alternatively, accessibility to the means of religious ritual.<br><br>

		As seen in Harappa, Mohenjo-daro and the recently partially excavated Rakhigarhi, this urban plan included the world's first known urban sanitation systems: see hydraulic engineering of the Indus Valley Civilisation. Within the city, individual homes or groups of homes obtained water from wells. From a room that appears to have been set aside for bathing, waste water was directed to covered drains, which lined the major streets. Houses opened only to inner courtyards and smaller lanes. The house-building in some villages in the region still resembles in some respects the house-building of the Harappans.<br><br>

		The ancient Indus systems of sewerage and drainage that were developed and used in cities throughout the Indus region were far more advanced than any found in contemporary urban sites in the Middle East and even more efficient than those in many areas of Pakistan and India today. The advanced architecture of the Harappans is shown by their impressive dockyards, granaries, warehouses, brick platforms, and protective walls. The massive walls of Indus cities most likely protected the Harappans from floods and may have dissuaded military conflicts.`,

		info1: `Mature Harappan Period, c. 2600–1900 BCE`,
		info2: `View of Granary and Great Hall on Mound F in Harappa`,
		info3: `Harappan weights found in the Indus Valley`,
	},
	{
		id: 4,
		singleTitle: `Late Harappan`,
		time1: `1900BCE `,
		singleCategory: `Indus`,
		time2: `1300BCE`,
		pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Indus_Valley_Civilization%2C_Late_Phase_%281900-1300_BCE%29.png/330px-Indus_Valley_Civilization%2C_Late_Phase_%281900-1300_BCE%29.png",
		pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Coach_driver_Indus_01.jpg/220px-Coach_driver_Indus_01.jpg",
		pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cemetery_H_Pottery.png/1024px-Cemetery_H_Pottery.png",
		info: `Around 1900 BCE signs of a gradual decline began to emerge, and by around 1700 BCE most of the cities had been abandoned. Recent examination of human skeletons from the site of Harappa has demonstrated that the end of the Indus Civilisation saw an increase in inter-personal violence and in infectious diseases like leprosy and tuberculosis.<br><br>

		According to historian Upinder Singh, "the general picture presented by the late Harappan phase is one of a breakdown of urban networks and an expansion of rural ones."<br><br>

		During the period of approximately 1900 to 1700 BCE, multiple regional cultures emerged within the area of the Indus Civilisation. The Cemetery H culture was in Punjab, Haryana, and Western Uttar Pradesh, the Jhukar culture was in Sindh, and the Rangpur culture (characterised by Lustrous Red Ware pottery) was in Gujarat.Other sites associated with the Late phase of the Harappan culture are Pirak in Balochistan, Pakistan, and Daimabad in Maharashtra, India.<br><br>

		The largest Late Harappan sites are Kudwala in Cholistan, Bet Dwarka in Gujarat, and Daimabad in Maharashtra, which can be considered as urban, but they are smaller and few in number compared with the Mature Harappan cities. Bet Dwarka was fortified and continued to have contacts with the Persian Gulf region, but there was a general decrease of long-distance trade. On the other hand, the period also saw a diversification of the agricultural base, with a diversity of crops and the advent of double-cropping, as well as a shift of rural settlement towards the east and the south.
		
		`,

		info1: `Late Harappan Period, c. 1900–1300 BCE`,
		info2: `Late Harappan figures from a hoard at Daimabad, 2000 BCE`,
		info3: `Painted pottery urns from Harappa`,
	},
	{
		id: 5,
		singleTitle: `Origins`,
		time1: `1900BCE `,
		singleCategory: `Vedic`,
		time2: `1500BCE`,
		pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Indo-Iranian_origins.png/220px-Indo-Iranian_origins.png",
		pic2: "https://qph.fs.quoracdn.net/main-qimg-c7c60b617904889e4f8663f6298222e0.webp",
		pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mathura_anthropomorphological_artefact.jpg/220px-Mathura_anthropomorphological_artefact.jpg",
		info: `The early Vedic age is historically dated to the second half of the second millennium BCE. Historically, after the collapse of the Indus Valley Civilisation, which occurred around 1900 BCE, groups of Indo-Aryan peoples migrated into north-western India and started to inhabit the northern Indus Valley. The Indo-Aryans represented a sub-group that diverged from other Indo-Iranian tribes at the Andronovo horizon before the middle of the 2nd millennium BCE, The Indo-Iranians originated in the Sintashta culture, from which arose the subsequent Andronovo horizon.The Indo-Aryans migrated through the adjacent Bactria–Margiana area (present-day northern Afghanistan) to northwest India, followed by the rise of the Iranian Yaz culture at c. 1500 BCE, and the Iranian migrations into Iran at c. 800 BCE.<br><br>

		Some Indian writers and archaeologists have opposed the notion of a migration of Indo-Aryans into India, and argued for an indigenous origin of the Indo-Aryans. In this view, "the Indian civilization must be viewed as an unbroken tradition that goes back to the earliest period of the Sindhu-Sarasvati (or Indus) tradition (7000 or 8000 BCE)."Though popular in India, and reflecting Indian views on Indian history and religion, the idea of a purely indigenous origin of the Indo-Aryans is outside the academic mainstream.`,

		info1: `Archaeological cultures associated with Indo-Iranian migrations`,
		info2: `Wood carvings of Vedic period`,
		info3: `Mathura anthropomorphological artefact. Copper Hoard Culture (2nd millennium CE)`,
	},
	{
		id: 6,
		singleTitle: `Early Vedic Period`,
		time1: `1500BCE `,
		singleCategory: `Vedic`,
		time2: `1000BCE`,
		pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Early_Vedic_Culture_%281700-1100_BCE%29.png/800px-Early_Vedic_Culture_%281700-1100_BCE%29.png",
		pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cremation_Urn_with_Lid_LACMA_AC1994.234.8a-b.jpg/220px-Cremation_Urn_with_Lid_LACMA_AC1994.234.8a-b.jpg",
		pic3: "https://panaceaconcept.in/wp-content/uploads/2021/02/image-result-for-painted-grey-ware.jpeg",
		info: `The Rigveda contains accounts of conflicts between the Aryas and the Dasas and Dasyus. It describes Dasas and Dasyus as people who do not perform sacrifices (akratu) or obey the commandments of gods (avrata). Their speech is described as mridhra which could variously mean soft, uncouth, hostile, scornful or abusive. Other adjectives which describe their physical appearance are subject to many interpretations. However, some modern scholars such as Asko Parpola connect the Dasas and Dasyus to Iranian tribes Dahae and Dahyu and believe that Dasas and Dasyus were early Indo-Aryan immigrants who arrived into the subcontinent before the Vedic Aryans. Likwise, Bronkhorst has argued that the central Ganges Plain was dominated by a related but non-Vedic Indo-Aryan culture, a difference also noted by Samuel.<br><br>

		Accounts of military conflicts inbetween the various tribes of Vedic Aryans are also described in the Rigveda. Most notable of such conflicts was the Battle of Ten Kings, which took place on the banks of the river Parushni (modern day Ravi). The battle was fought between the tribe Bharatas, led by their chief Sudas, against a confederation of ten tribes. The Bharatas lived around the upper regions of the river Saraswati, while the Purus, their western neighbours, lived along the lower regions of Saraswati. The other tribes dwelt north-west of the Bharatas in the region of Punjab. Division of the waters of Ravi could have been a reason for the war.The confederation of tribes tried to inundate the Bharatas by opening the embankments of Ravi, yet Sudas emerged victorious in the Battle of Ten Kings.The Bharatas and the Purus merged into a new tribe, the Kuru, after the war.
		`,

		info1: `Major Sites of Early Vedic Period`,
		info2: `Wood carvings of Vedic periodCremation urn of the Gandhara grave culture (c. 1200 BCE)`,
		info3: `Potteries in Early Vedic Period`,
	},
	{
		id: 7,
		singleTitle: `Later Vedic Period`,
		time1: `1000BCE `,
		singleCategory: `Vedic`,
		time2: `600BCE`,
		pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Late_Vedic_Culture_%281100-500_BCE%29.png/800px-Late_Vedic_Culture_%281100-500_BCE%29.png",
		pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Painted_Grey_Ware_-_Sonkh_-_1000-600_BCE_-_Showcase_6-15_-_Prehistory_and_Terracotta_Gallery_-_Government_Museum_-_Mathura_2013-02-24_6461.JPG/220px-Painted_Grey_Ware_-_Sonkh_-_1000-600_BCE_-_Showcase_6-15_-_Prehistory_and_Terracotta_Gallery_-_Government_Museum_-_Mathura_2013-02-24_6461.JPG",
		pic3: "https://www.insightsonindia.com/wp-content/uploads/2021/10/Society-of-Vedic-Period.jpg",
		info: `After the 12th century BCE, as the Rigveda had taken its final form, the Vedic society, which is associated with the Kuru-Pancala region but were not the only Indo-Aryan people in northern India, transitioned from semi-nomadic life to settled agriculture in north-western India. Possession of horses remained an important priority of Vedic leaders and a remnant of the nomadic lifestyle,resulting in trade routes beyond the Hindu Kush to maintain this supply as horses needed for cavalry and sacrifice could not be bred in India. The Gangetic plains had remained out of bounds to the Vedic tribes because of thick forest cover. After 1000 BCE, the use of iron axes and ploughs became widespread and the jungles could be cleared with ease. This enabled the Vedic Aryans to extend their settlements into the western area of the Ganga-Yamuna Doab. Many of the old tribes coalesced to form larger political units.<br><br>

		The Vedic religion was further developed with the emergence of the Kuru kingdom, systematising its religious literature and developing the Śrauta ritual.It is associated with the Painted Grey Ware culture (c.1200–600 BCE), which did not expand east of the Ganga-Yamnuya Doab.It differed from the related, yet markedly different, culture of the Central Ganges region, which was associated with the Northern Black Polished Ware and the Mahajanapadas of Kosala and Magadha.<br><br>

		In this period the varna system emerged, state Kulke and Rothermund, which in this stage of Indian history were a "hierarchical order of estates which reflected a division of labor among various social classes". The Vedic period estates were four: Brahmin priests and warrior nobility stood on top, free peasants and traders were the third, and slaves, labourers and artisans, many belonging to the indigenous people, were the fourth. This was a period where agriculture, metal, and commodity production, as well as trade, greatly expanded, and the Vedic era texts including the early Upanishads and many Sutras important to later Hindu culture were completed.
		`,

		info1: `Major Sites of Later Vedic Period`,
		info2: `Pottery of the Painted Grey Ware culture (c. 1000–600 BCE)`,
		info3: `Societal values in Later Vedic Period`,
	},
	{
		id: 8,
		singleTitle: `Anga`,
		singleCategory: `Mahajan`,
		info: `The first reference to the Angas is found in the Atharva-Veda where they find mention along with the Magadhas, Gandharis and the Mujavats, apparently as a despised people. The Jaina Prajnapana ranks Angas and Vangas in the first group of Aryan people. It mentions the principal cities of ancient India.<br><br>

 		It was also a great center of trade and commerce and its merchants regularly sailed to distant Suvarnabhumi. Anga was annexed by Magadha in the time of Bimbisara. This was the one and only conquest of Bimbisara.
		`,
	},
	{
		id: 9,
		singleTitle: `Assaka`,
		singleCategory: `Mahajan`,
		info: `
		The country of Assaka or the Ashmaka tribe was located in Dakshinapatha or southern India. It included areas in present-day Andhra Pradesh, Telangana, and Maharashtra.In Gautama Buddha's time, many of the Assakas were located on the banks of the Godavari River (south of the Vindhya mountains). The capital of the Assakas was Potana or Potali, which corresponds present-day Bodhan in Telangana and Paudanya of Mahabharata.<br><br>

		In Maharashtra its capital is located in Potali which corresponds to present day Nandura, Buldhana district. The Ashmakas are also mentioned by Pāṇini. They are placed in the north-west in the Markendeya Purana and the Brhat Samhita. The river Godavari separated the country of the Assakas from that of the Mulakas (or Alakas). The country of Assaka lay outside the pale of Madhyadesa. It was located on a southern high road, the Dakshinapatha. At one time, Assaka included Mulaka and abutted Avanti.
		`,
	},
	{
		id: 10,
		singleTitle: `Avanti`,
		singleCategory: `Mahajan`,
		info: `
		The country of the Avantis was an important kingdom of western India and was one of the four great monarchies in India in the post era of Mahavira and Buddha, the other three being Kosala, Vatsa and Magadha. Avanti was divided into north and south by the river Narmada. Initially, Mahishamati (Mahissati) was the capital of Southern Avanti, and Ujjaini (Sanskrit: Ujjayini) was of northern Avanti, but at the times of Mahavira and Buddha, Ujjaini was the capital of integrated Avanti. <br><br>

		The country of Avanti roughly corresponded to modern Malwa, Nimar and adjoining parts of today's Madhya Pradesh. Both Mahishmati and Ujjaini stood on the southern high road called Dakshinapatha which extended from Rajagriha to Pratishthana (modern Paithan). Avanti was an important centre of Buddhism and some of the leading theras and theris were born and resided there. King Nandivardhana of Avanti was defeated by king Shishunaga of Magadha. Avanti later became part of the Magadhan empire.
		`,
	},
	{
		id: 11,
		singleTitle: `Chedi`,
		singleCategory: `Mahajan`,
		info: `
		The Chedis, Chetis or Chetyas had two distinct settlements of which one was in the mountains of Nepal and the other in Bundelkhand near Kausambi. According to old authorities, Chedis lay near Yamuna midway between the kingdom of Kurus and Vatsas. In the mediaeval period, the southern frontiers of Chedi extended to the banks of the river Narmada. Sotthivatnagara, the Sukti or Suktimati of Mahabharata, was the capital of Chedi. The Chedis were an ancient people of India and are mentioned in the Rigveda, with their king Kashu Chaidya.<br><br>

		The location of the capital city, Suktimati, has not been established with certainty. Historian Hem Chandra Raychaudhuri and F. E. Pargiter believed that it was in the vicinity of Banda, Uttar Pradesh.<br><br>

		Archaeologist Dilip Kumar Chakrabarti has proposed that Suktimati can be identified as the ruins of a large early historical city, at a place with the modern-day name Itaha, on the outskirts of Rewa, Madhya Pradesh.
		`,
	},
	{
		id: 12,
		singleTitle: `Gandhara`,
		singleCategory: `Mahajan`,
		info: `
		The wool of the Gandharis is referred to in the Rigveda. The Gandharas and their king figure prominently as strong allies of the Kurus against the Pandavas in the Mahabharata war. The Gandharas were furious people, well-trained in the art of war. According to Puranic traditions, this Janapada was founded by Gandhara, son of Aruddha, a descendant of Yayati. The princes of this country are said to have come from the line of Druhyu who was a famous king of the Rigvedic period and one of the five sons of king Yayati of lunar dynasty. The river Indus watered the lands of Gandhara. Taksashila and Pushkalavati, the two cities of this Mahajanapada, are said to have been named after Taksa and Pushkara, the two sons of Bharata, a prince of Ayodhya and younger brother of Lord Rama. According to Vayu Purana (II.36.107), the Gandharas were destroyed by Pramiti (a.k.a. Kalika) at the end of Kali Yuga. Pāṇini mentioned both the Vedic form Gandhari as well as the later form Gandhara in his Ashtadhyayi. The Gandhara kingdom sometimes also included Kashmira.<br><br>

		Hecataeus of Miletus (549-468) refers to Kaspapyros (Kasyapura or Purushapura, i.e., modern day Peshawar) as a Gandharic city. According to Gandhara Jataka, at one time, Gandhara formed a part of the kingdom of Kashmir. The Jataka also gives another name Chandahara for Gandhara.
		`,
	},
	{
		id: 13,
		singleTitle: `Kamboja`,
		singleCategory: `Mahajan`,
		info: `
		Kambojas are also included in the Uttarapatha. In ancient literature, the Kamboja is variously associated with the Gandhara, Darada and the Bahlika (Bactria). Ancient Kamboja is known to have comprised regions on either side of the Hindukush. The original Kamboja was located in eastern Oxus country as neighbor to Bahlika, but with time, some clans of the Kambojas appear to have crossed the Hindukush and planted colonies on its southern side also. These latter Kambojas are associated with the Daradas and Gandharas in Indian literature and also find mention in the Edicts of Ashoka. The evidence in the Mahabharata and in Ptolemy's Geography distinctly supports two Kamboja settlements.The cis-Hindukush region from Nurestan up to Rajauri in southwest of Kashmir sharing borders with the Daradas and the Gandharas constituted the Kamboja country.The capital of Kamboja was probably Rajapura (modern Rajori) in the south-west of Kashmir. The Kamboja Mahajanapada of the Buddhist traditions refers to this cis-Hindukush branch of ancient Kambojas.
		`,
	},
	{
		id: 14,
		singleTitle: `Kashi`,
		singleCategory: `Mahajan`,
		info: `
		The kingdom was located in the region around its capital Varanasi, bounded by the Varuna and Asi rivers in the north and south which gave Varanasi its name. Before Buddha, Kasi was the most powerful of the sixteen Mahajanapadas. Several jataka tales bear witness to the superiority of its capital over other cities in India and speak highly of its prosperity and opulence. These stories tell of the long struggle for supremacy between Kashi and the three kingdoms of Kosala, Anga and Magadha. Although King Brihadratha of Kashi conquered Kosala, Kashi was later incorporated into Kosala by King Kansa during Buddha's time. The Kashis along with the Kosalas and Videhans find mention in Vedic texts and appear to have been a closely allied people. The Matsya Purana and Alberuni spell Kashi as Kausika and Kaushaka respectively. All other ancient texts read Kashi.
		`,
	},
	{
		id: 15,
		singleTitle: `Kosala`,
		singleCategory: `Mahajan`,
		info: `
		The country of Kosala was located to the north-west of Magadha, with its capital at Ayodhya. Its territory corresponded to the modern Awadh (or Oudh) in Central and Eastern Uttar Pradesh. It had the river Ganges for its southern, the river Gandak (Narayani) for its eastern, and the Himalaya mountains for its northern boundary. It finds mention as the center of Vedic Dharma. Its kings allied with the Devatas in various wars against the Daityas, Rakshas, and Asuras. Koshala and Ayodhya hold a central place in the Hindu scriptures, Itihas, and Purana. Raghuvansha-Ikshvakuvansha was the longest continuous dynasty; Lord Rama was a king in this dynasty. Other great kings were Prithu, Harishchandra, and Dilip, who are each mentioned in different Puranas, Ramayan, and Mahabharat. According to these texts, Koshala was the most powerful and biggest kingdom ever in the recorded history.
		`,
	},
	{
		id: 16,
		singleTitle: `Kuru`,
		singleCategory: `Mahajan`,
		info: `
		The Puranas trace the origin of Kurus from the Puru-Bharata family. Kuru was born after 25 generations of Puru's dynasty, and after 15 generations of Kuru, Kauravas and Pandavas were born. Aitareya Brahmana locates the Kurus in Madhyadesha and also refers to the Uttarakurus as living beyond the Himalayas. According to the Buddhist text Sumangavilasini, the people of Kururashtra (the Kurus) came from the Uttarakuru. Vayu Purana attests that Kuru, son of Samvarsana of the Puru lineage, was the eponymous ancestor of the Kurus and the founder of Kururashtra (Kuru Janapada) in Kurukshetra.<br><br>

The country of the Kurus roughly corresponded to the modern Thanesar, state of Delhi, and Meerut district of Uttar Pradesh. According to the Jatakas, the capital of the Kurus was Indraprastha (Indapatta) near modern Delhi which extended seven leagues. At Buddha's time, the Kuru country was ruled by a titular chieftain (king consul) named Korayvya. The Kurus of the Buddhist period did not occupy the same position as they did in the Vedic period but they continued to enjoy their ancient reputation for deep wisdom and sound health. The Kurus had matrimonial relations with the Yadavas, the Bhojas, Trigratas, and the Panchalas. There is a Jataka reference to king Dhananjaya, introduced as a prince from the race of Yudhishtra. Though a well known monarchical people in the earlier period, the Kurus are known to have switched to a republican form of government during the 6th to 5th centuries BCE. In the 4th century BCE, Kautiliya's Arthashastra also attests the Kurus following the Rajashabdopajivin (king consul) constitution
		`,
	},
	{
		id: 17,
		singleTitle: `Magadha`,
		singleCategory: `Mahajan`,
		info: `
		The Magadha was one of the most prominent and prosperous of mahajanapadas. The capital city Pataliputra (near present day Patna, Bihar) was situated on the confluence of major rivers like the Ganga, Son, Punpun and Gandak. The alluvial plains of this region and its proximity to the copper and iron rich areas of Bihar and Jharkhand helped the kingdom to develop good quality weapons and support the agrarian economy. Its location at the centre of the highways of trade of those days contributed to its wealth. All these factors helped Magadha to emerge as the most prosperous state of that period.<br><br>

King Bimbisara of Magadha visits the Bamboo Garden (Venuvana) in Rajagriha; artwork from Sanchi. The kingdom of the Magadhas roughly corresponded to the modern districts of Patna and Gaya in southern Bihar and parts of Bengal in the east. The capital city of Pataliputra was bound in the north by the river Ganges, in the east by the river Champa, in the south by the Vindhya mountains and in the west by the river Sona. During Buddha's time its boundaries included Anga. Its earliest capital was Girivraja or Rajagaha (modern Rajgir in the Nalanda district of Bihar). The other names for the city were Magadhapura, Brihadrathapura, Vasumati, Kushagrapura and Bimbisarapuri. It was an active center of Jainism in ancient times. The first Buddhist Council was held in Rajagaha in the Vaibhara Hills. Later on, Pataliputra became the capital of Magadha.
		`,
	},
	{
		id: 18,
		singleTitle: `Malla`,
		singleCategory: `Mahajan`,
		info: `
		The Mallas are frequently mentioned in Buddhist and Jain works. They were a powerful people dwelling in Northern India. According to Mahabharata, Panduputra Bhimasena is said to have conquered the chief of the Mallas/Malls in the course of his expedition in Eastern India. During the Buddhist period, the Mallas/Malls Kshatriya were a republican people with their dominion consisting of nine territories corresponding to the nine confederated clans. These republican states were known as Gana. Two of these confederations – one with Kuśināra (modern Kasia near Gorakhpur) as its capital and the second with Pava (modern Padrauna, 12 miles from Kasia) as the capital – had become very important at the time of Buddha. <br><br>

Kuśināra and Pava are very important in the history of Buddhism and Jainism since Lord Buddha and Lord Mahavira, the 24th Tirthankara took their last meals at Kushinara and Pava/Pavapuri respectively. Buddha was taken ill at Pava and died at Kusinara, whereas lord Mahavira took his Nirvana at Pavapuri. It is widely believed that Lord Gautam died at the courtyard of King Sastipal Mall of Kushinagar/Kushinara. Kushinagar is now the centre of the Buddhist pilgrimage circle which is being developed by the tourism development corporation of Uttar Pradesh.
		`,
	},
	{
		id: 19,
		singleTitle: `Matsya`,
		singleCategory: `Mahajan`,
		info: `
		The country of the Matsya or Meena tribe lay to the south of the Kurus and west of the Yamuna, which separated them from the Panchalas. It roughly corresponded to the former state of Jaipur in Rajasthan, and included the whole of Alwar with portions of Bharatpur. The capital of Matsya was at Viratanagara (modern Bairat) which is said to have been named after its founder king Virata. In Pali literature, the Matsyas are usually associated with the Surasenas. The western Matsya was the hill tract on the north bank of the Chambal. A branch of Matsya is also found in later days in the Vizagapatam region. The Matsyas had not much political importance of their own during the time of Buddha. King Sujata ruled over both the Chedis and Matsyas, thus showing that Matsya once formed a part of the Chedi kingdom.
		`,
	},
	{
		id: 20,
		singleTitle: `Panchala`,
		singleCategory: `Mahajan`,
		info: `
		The Panchalas occupied the country to the east of the Kurus between the mountains and river Ganges. It roughly corresponded to modern Budaun, Farrukhabad and the adjoining districts of Uttar Pradesh. The country was divided into Uttara-Panchala and Dakshina-Panchala. The northern Panchala had its capital at Adhichhatra or Chhatravati (modern Ramnagar in the Bareilly District), while southern Panchala had its capital at Kampilya or Kampil in the Farrukhabad District. The famous city of Kanyakubja or Kanauj was situated in the kingdom of Panchala. Originally a monarchical clan, the Panchals appear to have switched to republican corporation in the 6th and 5th centuries BCE. In the 4th century BCE, Kautiliya's Arthashastra also attests the Panchalas as following the Rajashabdopajivin (king consul) constitution.
		`,
	},
	{
		id: 21,
		singleTitle: `Surasena`,
		singleCategory: `Mahajan`,
		info: `
		The country of the Surasenas lay to the east of Matsya and west of Yamuna. This corresponds roughly to the Brij region of Uttar Pradesh, Haryana and Rajasthan. and Gwalior region of Madhya Pradesh. It had its capital at Madhura or Mathura. Avantiputra, the king of Surasena, was the first among the chief disciples of Buddha, through whose help Buddhism gained ground in Mathura country. The Andhakas and Vrishnis of Mathura/Surasena are referred to in the Ashtadhyayi of Pāṇini. In Kautiliya's Arthashastra, the Vrishnis are described as sangha or republic. The Vrishnis, Andhakas and other allied tribes of the Yadavas formed a sangha and Vasudeva (Krishna) is described as the sangha-mukhya. Mathura, the capital of Surasena, was also known at the time of Megasthenes as the centre of Krishna worship. The Surasena kingdom had lost its independence on annexation by the Magadhan empire.
		`,
	},
	{
		id: 22,
		singleTitle: `Vajji`,
		singleCategory: `Mahajan`,
		info: `
		Vajji (Sanskrit: Vṛji) or Vrijji was a confederacy of neighbouring clans including the Licchavis and one of the principal mahājanapadas of Ancient India. The area they ruled constitutes the region of Mithila in northern Bihar and their capital was the city of Vaishali.<br><br>

Both the Buddhist text Anguttara Nikaya and the Jaina text Bhagavati Sutra (Saya xv Uddesa I) included Vajji in their lists of solasa (sixteen) mahājanapadas. The name of this mahājanapada was derived from one of its ruling clans, the Vṛjis. The Vajji state is indicated to have been a republic. This clan is mentioned by Pāṇini, Chanakya and Xuanzang.
		`,
	},
	{
		id: 23,
		singleTitle: `Vatsa or Vamsa`,
		singleCategory: `Mahajan`,
		info: `
		The Vatsas or Vamsas are called to be a branch of the Kurus. The Vatsa or Vamsa country corresponded with the territory of modern Allahabad in Uttar Pradesh. It had a monarchical form of government with its capital at Kausambi (identified with the village Kosam, 38 miles from Allahabad).<br><br>
Kausambi was a very prosperous city where a large number of wealthy merchants resided. It was the most important entrepôt of goods and passengers from the north-west and south. Udayana was the ruler of Vatsa in the 6th-5th century BCE. He was very powerful, warlike and fond of hunting. Initially king Udayana was opposed to Buddhism, but later became a follower of Buddha and made Buddhism the state religion. Udayana's mother, Queen Mrigavati, is notable for being one of the earliest known female rulers in Indian history.
		`,
	},
	{
		id: 24,
		singleTitle: `Maithalas`,
		singleCategory: `Nanda`,
		info: `
		The Maithala (literally, "of Mithila") territory was located to the north of Magadha, on the border of present-day Nepal and northern Bihar. This region had come under the control of Magadha during the reign of the 5th century BCE king Ajatashatru. The Nandas probably subjugated the local chieftains, who may have retained some degree of independence from Magadha.
		`,
	},
	{
		id: 25,
		singleTitle: `Kasheyas`,
		singleCategory: `Nanda`,
		info: `
		The Kasheyas were the residents of the area around Kashi, that is, present-day Varanasi. According to the Puranas, a Shaishunaga prince was appointed to govern Kashi, which suggests that this region was under Shaishunaga control. The Nandas may have captured it from a successor of the Shaishunaga prince.
		`,
	},
	{
		id: 26,
		singleTitle: `Ikshvakus`,
		singleCategory: `Nanda`,
		info: `
		The Ikshvakus ruled the historical Kosala region of present-day Uttar Pradesh, and had come into conflict with the Magadha kingdom during the reign of Ajatashatru. Their history after the reign of Virudhaka is obscure. A passage of the 11th century story-collection Kathasaritsagara refers to the Nanda camp (kataka) in the Ayodhya town of the Kosala region. This suggests that the Nanda king went on a military campaign to Kosala.
		`,
	},
	{
		id: 27,
		singleTitle: `Panchalas`,
		singleCategory: `Nanda`,
		info: `
		The Panchalas occupied the Ganges valley to the north-west of the Kosala region, and there are no records of their conflict with the Magadha monarchs before the Nanda period. Therefore, it appears that the Nandas subjugated them.
		According to the Greek accounts, Alexander expected to face king Agrammes (identified as a Nanda king) if he advanced eastwards from the Punjab region. This suggests that the Nanda territory extended up to the Ganges river in the present-day western Uttar Pradesh.
		`,
	},
	{
		id: 28,
		singleTitle: `Kurus`,
		singleCategory: `Nanda`,
		info: `
		The Kuru territory, which included the sacred site of Kurukshetra, was located to the west of the Panchala territory. The Greek records suggest that the king of Gangaridai and Prasii controlled this region, which may be taken as corrorobrative evidence for the Nanda conquest of the Kuru territory.
		`,
	},
	{
		id: 29,
		singleTitle: `Haihayas`,
		singleCategory: `Nanda`,
		info: `
		The Haihayas ruled the Narmada valley in central India, with their capital at Mahishmati. The Nanda control over this territory does not seem improbable, given that their predecessors – the Shaishunagas – are said to have subjugated the rulers of Avanti in central India (according to the Puranas), and their successors – the Mauryas – are known to have ruled over Central India.
		`,
	},
	{
		id: 30,
		singleTitle: `Vitihotras`,
		singleCategory: `Nanda`,
		info: `
		The Vitihotras, according to the Puranas, were closely associated with the Haihayas. Their sovereignty is said to have ended before the rise of the Pradyota dynasty in Avanti, far earlier than the Nandas and the Shaishunagas came to power. However, a passage in the Bhavishyanukirtana of the Puranas suggests that the Vitihotras were contemporaries of the Shaishunagas. It is possible that the Shaishunagas restored a Pradyota prince as a subordinate ruler, after defeating the Pradyotas. The Nandas may have defeated this Vitihotra ruler. The Jain writers describe the Nandas as the successors of Palaka, the son of king Pradyota.
		`,
	},
	{
		id: 31,
		singleTitle: `Kalingas`,
		singleCategory: `Nanda`,
		info: `
		The Kalingas occupied the coastal territory in present-day Odisha and Andhra Pradesh. The Nanda control of this region is corroborated by the Hathigumpha inscription of the later king Kharavela (c. 1st or 2nd century BCE).The inscription states that "Nanda-raja" (the Nanda king) had excavated a canal in Kalinga, and had taken a Jain idol from Kalinga. According to the inscription, this canal had been dug "ti-vasa-sata" years ago: the term is variously interpreted as "three hundred" or "one hundred and three".
		`,
	},
	{
		id: 32,
		singleTitle: `Ashmakas`,
		singleCategory: `Nanda`,
		info: `
		The Ashmakas occupied the Godavari valley in the Deccan region. According to one theory, Nanded in this region was originally called "Nau Nand Dehra" (abode of the nine Nandas), which may be considered as evidence of the Nanda control of this area. However, there is no concrete evidence that the Nanda rule extended to the south of the Vindhya range.
		`,
	},


];

const btns = document.querySelectorAll('.menu-btn');
const mainContainer = document.querySelector('.age-container');
const subContainer = document.querySelector('.age-sub-container');

btns.forEach(function(btn){

btn.addEventListener('click', function(e){
e.stopImmediatePropagation();
const category = e.currentTarget.dataset.id;

const ancientCat = ancient.filter(function(item){
	if(item.category === category){
		return item;
	}
});

const listCat = ancientList.filter(function(item){
	if(item.singleCategory === category){
		return item;
	}
})
displayMain(ancientCat);

if(category === "Mahajan" || category === "Nanda"){
	displaySub2(listCat);
}
else{
	displaySub(listCat);

}

});
});

function displayMain(Item){
	let  displayItem = Item.map(function(val){
		return`<h2>${val.title}</h2>
		<div class="age-main">
			<section class="age-main-info">
				<h4>${val.desc}</h4>
			</section>
	
			<section class="age-main-pic">
	
				<div class="age-single-pic">
					<img src="${val.img1}" />
					<h5>${val.desc1}</h5>
				</div>
	
				<div class="age-single-pic">
					<img src="${val.img2}" />
					<h5>${val.desc2}</h5>
				</div>
	
				<div class="age-single-pic">
					<img src="${val.img3}" />
					<h5>${val.desc3}</h5>
				</div>
	
			</section>
		</div>
	
		<div class="age-sub">
			<h2>${val.subTitle}</h2>
			<section class="age-sub-info">
				<h4>${val.subDesc}</h4>
			</section>
		</div>
		<h2>${val.listTitle}</h2>
		`
	});
	displayItem = displayItem.join("");
	mainContainer.innerHTML = displayItem;
}

function displaySub(Item){
	let subItem = Item.map(function(val){
		return `      
			

        <section class="age-sub-list">

            <div class="age-single-list">
                <header class="single-list-header">
                <h3>${val.singleTitle}</h3>
                <div class="timeline">
                    <h4>${val.time1}</h4>
                    <article></article>
                    <h4>${val.time2}</h4>
                </div>
        
                
                </header>
                
                <div class="age-main-info">
                    <h4>${val.info}</h4>
                </div>

                <div class="age-main-pic">
                    <div class="age-single-pic">
                        <img src="${val.pic1}" />
                        <h5>${val.info1}</h5>
                    </div>

                    <div class="age-single-pic">
                        <img src="${val.pic2}" />
                        <h5>${val.info2}</h5>
                    </div>

                    <div class="age-single-pic">
                        <img src="${val.pic3}" />
                        <h5>${val.info3}</h5>
                    </div>
                </div>
            </div>

        </section>
		`
	});
	subItem = subItem.join("");
	console.log(subItem)
	subContainer.innerHTML = subItem;
}


function displaySub2(Item) {
	let subItem = Item.map(function (val) {
		return `      
			

        <section class="age-sub-list">

            <div class="age-single-list">
                <header class="single-list-header">
                <h3>${val.singleTitle}</h3>
                
        
                
                </header>
                
                <div class="age-main-info">
                    <h4>${val.info}</h4>
                </div>

                
            </div>

        </section>
		`
	});
	subItem = subItem.join("");
	console.log(subItem)
	subContainer.innerHTML = subItem;
}

