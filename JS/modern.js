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
    document.getElementById("Mughal").click();

});


const modern = [
    {
        id: 1,
        title: `Mughal Empire`,
        category: `Mughal`,
        img1: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Joppen1907India1700a.jpg/800px-Joppen1907India1700a.jpg",
        img2: "https://upload.wikimedia.org/wikipedia/commons/0/04/Officer_of_the_Mughal_Army%2C_c.1585_%28colour_litho%29.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Old_Mughal_Courtier.png/220px-Old_Mughal_Courtier.png",
        desc: `
        The Mughal Empire, also spelled the Mogul or Moghul Empire, was an early modern empire in South Asia. For some two centuries, the empire stretched from the outer fringes of the Indus basin in the west, northern Afghanistan in the northwest, and Kashmir in the north Bangladesh in the east, and the uplands of the Deccan plateau in south India.<br><br>

        The Mughal empire is conventionally said to have been founded in 1526 by Babur, a warrior chieftain from what is today Uzbekistan, who employed military aid in the form of matchlock guns and cast cannon from the Ottoman Empire, and his superior strategy and cavalry to defeat the Sultan of Delhi, Ibrahim Lodhi, in the First Battle of Panipat, and to sweep down the plains of Upper India, subduing Rajputs and Afghans. The Mughal imperial structure, however, is sometimes dated to 1600, to the rule of Babur's grandson, Akbar. This imperial structure lasted until 1720, until shortly after the death of the last major emperor, Aurangzeb, during whose reign the empire also achieved its maximum geographical extent. Reduced subsequently, especially due to the conquests of the Marathas and later during the East India Company rule in India, to the region in and around Old Delhi, the empire was formally dissolved by the British Raj after the Indian Rebellion of 1857.<br><br>

        Although the Mughal empire was created and sustained by military warfare, it came to rule by establishing new administrative practices, and incorporating diverse ruling elites, leading to more efficient, centralised, and standardised rule. The base of the empire's collective wealth was agricultural taxes, instituted by the third Mughal emperor, Akbar. These taxes, which amounted to well over half the output of a peasant cultivator, were paid in the well-regulated silver currency, and caused peasants and artisans to enter larger markets.<br><br>

        The relative peace maintained by the empire during much of the 17th century was a factor in India's economic expansion. Burgeoning European presence in the Indian Ocean, and its increasing demand for Indian raw and finished products, created still greater wealth in the Mughal courts. There was more conspicuous consumption among the Mughal elite, resulting in greater patronage of painting, literary forms, textiles, and architecture, especially during the reign of Shah Jahan. Among the Mughal UNESCO World Heritage Sites in South Asia are: Agra Fort, Fatehpur Sikri, Red Fort, Humayun's Tomb, Lahore Fort, and the Taj Mahal, which is described as the "jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."
        `,
        desc1: `Map of India 1700 showing the Mughal Empire.`,
        desc2: `Mughal matchlock rifle, 16th century.`,
        desc3: `Portrait of an Old Mughal Courtier Wearing Muslin.`,
        subTitle: `Background`,
        subDesc: `
        Contemporaries referred to the empire founded by Babur as the Timurid empire, which reflected the heritage of his dynasty, and this was the term preferred by the Mughals themselves.<br><br>

        The Mughal designation for their own dynasty was Gurkani. The use of "Mughal" and "Moghul" derived from the Arabic and Persian corruption of "Mongol", and it emphasised the Mongol origins of the Timurid dynasty. The term gained currency during the 19th century, but remains disputed by Indologists. Similar terms had been used to refer to the empire, including "Mogul" and "Moghul". Nevertheless, Babur's ancestors were sharply distinguished from the classical Mongols insofar as they were oriented towards Persian rather than Turco-Mongol culture.<br><br>

        Another name for the empire was Hindustan, which was documented in the Ain-i-Akbari, and which has been described as the closest to an official name for the empire. In the west, the term "Mughal" was used for the emperor, and by extension, the empire as a whole.
        `,
        listTitle: `Major Rulers`,
    },
    {
        id: 2,
        title: `Sur Empire`,
        category: `Sur`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Suri_dynasty_1540_-_1556_ad.PNG",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sher_shah%27s_rupee.jpg/1280px-Sher_shah%27s_rupee.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sher_Shah_Suri_Tomb.jpg/1024px-Sher_Shah_Suri_Tomb.jpg",
        desc: `
        The Sur Empire was an Afghan dynasty which ruled a large territory in the northern part of the Indian subcontinent for nearly 16 years, between 1540 and 1556, with Sasaram, in modern-day Bihar, serving as its capital.<br><br>

        The Sur dynasty held control of nearly all the Mughal territories, from eastern Balochistan, Pakistan in the west to modern-day Rakhine, Myanmar in the east.<br><br>

        Sher Shah, an ethnic Afghan of the tribal house of Sur, first served as a private before rising to become a commander in the Mughal army under Babur and then the governor of Bihar. In 1537, when Babur's son Humayun was elsewhere on an expedition, Sher Shah overran the state of Bengal and established the Suri dynasty, who supplanted the Mughal dynasty as rulers of North India during the reign of the relatively ineffectual second Mughal Humayun. Sher Shah defeated badshah-i-Hind ('Hindustani emperor') Humayun in the Battle of Chausa (26 June 1539) and again in the Battle of Bilgram (17 May 1540).
        `,
        desc1: `Territory of Sur Empire.`,
        desc2: `Rupiya released by Sher Shah Suri, 1538–1545 CE, was the first Rupee.`,
        desc3: `Sher Shah Suri Tomb at Sasaram.`,
        subTitle: `Background`,
        subDesc: `
        Sher Shah Suri was known for the destruction of some old cities while conquering parts of India. He has been accused by 'Abd al-Qadir Bada'uni and other Muslim historians for destroying old cities in order to build new ones on their ruins after his own name. One example included Shergarh. Sher Shah is also said to have destroyed Dinpanah, which Humayun was constructing as the "sixth city of Delhi". The new city built by him, was itself destroyed in 1555 after Humayun re-conquered the territory from the Surs. Tarikh-i-Da'udi states, however, that he destroyed Siri. Abbas Sarwani states that he had the older city of Delhi destroyed. Tarikh-i-Khan Jahan states that Salim Shah Suri had built a wall around Humayun's imperial city.<br><br>

        The Sur dynasty held control of nearly all the Mughal territories, from Balochistan in the west to modern-day Bangladesh in the east.

        `,
        listTitle: `Major Rulers`,
    },
    {
        id: 3,
        title: `Maratha Empire`,
        category: `Maratha`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/India1760_1905.jpg/800px-India1760_1905.jpg",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Maratha_Armor.jpg/800px-Maratha_Armor.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Arms_of_Maratha_History_of_India_1906.jpg/800px-Arms_of_Maratha_History_of_India_1906.jpg",
        desc: `
        The Maratha Empire or Maratha Confederacy was a early modern era confederacy that dominated a large portion of the Indian subcontinent in the 18th century. The empire formally began in 1674 with the coronation of Shivaji as the Chhatrapati. The rule of Marathas officially ended in 1818 with the defeat of Peshwa Bajirao II at the hands of the British East India Company. The Marathas are credited for ending Mughal Rule over most of the Indian subcontinent.<br><br>

        The Marathas were a Marathi-speaking warrior group from the western Deccan Plateau (present-day Maharashtra) who rose to prominence by establishing Hindavi Swarajya (meaning "self-rule of Hindus").The Marathas became prominent in the 17th century under the leadership of Shivaji Maharaj, who revolted against the Adil Shahi dynasty, and the Mughals to carve out a kingdom with Raigad as his capital. His father, Shahji Raje Bhosale had earlier conquered Thanjavur which Shivaji's half-brother, Venkoji Rao alias Ekoji inherited and that Kingdom was known as the Thanjavur Maratha kingdom. Known for their mobility, the Marathas were able to consolidate their territory during the Mughal–Maratha Wars and later controlled a large part of the Indian subcontinent.<br><br>

        Upon his release from Mughal captivity, Shahu became the Maratha ruler after a brief struggle with his aunt Tarabai, with the help of Balaji Vishwanath. Pleased by his help, Shahu appointed Balaji and later, his descendants, as the Peshwas or prime ministers of the empire. Balaji and his descendants played a key role in the expansion of Maratha rule. The empire at its peak stretched from Tamil Nadu in the south, to Peshawar (modern-day Khyber Pakhtunkhwa, Pakistan) in the north, and Orissa & West Bengal up to the Hooghly River, in the east. The Marathas discussed abolishing the Mughal throne and placing Vishwas Rao on it in Delhi. In 1761, the Maratha Army lost the Third Battle of Panipat, which halted their imperial expansion into Afghanistan. Ten years after Panipat, the young Peshwa Madhav Rao I's Maratha Resurrection reinstated Maratha authority over North India.<br><br>

        In a bid to effectively manage the large empire, Madhav Rao gave semi-autonomy to the strongest of the knights, and created a confederacy of Maratha states. These leaders became known as the Gaekwads of Baroda, the Holkars of Indore and Malwa, the Scindias of Gwalior and Ujjain, the Bhonsales of Nagpur, the Meheres of Vidharbha, the Puars of Dhar and Dewas. In 1775, the East India Company intervened in a Peshwa family succession struggle in Pune, which led to the First Anglo-Maratha War in which the Marathas emerged victorious. The Marathas remained the pre-eminent power in India until their defeat in the Second and Third Anglo-Maratha Wars (1805–1818), which resulted in the East India Company seizing control of most of the Indian subcontinent.<br><br>

        A large portion of the Maratha empire was coastline, which had been secured by the potent Maratha Navy under commanders such as Kanhoji Angre. He was very successful at keeping foreign naval ships at bay, particularly those of the Portuguese and British. Securing the coastal areas and building land-based fortifications were crucial aspects of the Maratha's defensive strategy and regional military history.
        `,
        desc1: `Maratha Empire in 1760.`,
        desc2: `Signature Maratha helmet with curved back, front view.`,
        desc3: `Arms of Maratha.`,
        subTitle: `Background`,
        subDesc: `
        The Maratha Empire, at its peak, encompassed a large area of the Indian sub-continent. Apart from capturing various regions, the Marathas maintained a large number of tributaries who were bounded by agreements to pay a certain amount of regular tax, known as Chauth. The empire defeated the Sultanate of Mysore under Hyder Ali and Tipu Sultan, the Nawab of Oudh, the Nizam of Hyderabad, the Nawab of Bengal and the Nawab of Arcot as well as the Polygar kingdoms of South India. They extracted chauth from the rulers in Delhi, Oudh, Bengal, Bihar, Odisha, Punjab, Hyderabad, Mysore, Uttar Pradesh and Rajputana.<br><br>

        The Marathas were requested by Safdarjung, the Nawab of Oudh, in 1752 to help him defeat the Afghani Rohillas. The Maratha force set out from Pune and defeated the Afghan Rohillas in 1752, capturing the whole of Rohilkhand (present-day northwestern Uttar Pradesh). In 1752, the Marathas entered into an agreement with the Mughal emperor, through his wazir, Safdarjung, and the Mughals gave the Marathas the chauth of Punjab, Sindh and Doab in addition to the subedari of Ajmer and Agra. In 1758, Marathas started their north-west conquest and expanded their boundary till Afghanistan. They defeated Afghan forces of Ahmed Shah Abdali, in what is now Pakistan, including Pakistani Punjab Province and Khyber Pakhtunkhwa. The Afghans were numbered around 25,000–30,000 and were led by Timur Shah, the son of Ahmad Shah Durrani. The Marathas massacred and looted thousands of Afghan soldiers and captured Lahore, Multan, Dera Ghazi Khan, Attock, Peshawar in the Punjab region and Kashmir.<br><br>

        During the confederacy era, Mahadji Shinde resurrected the Maratha domination on much of North India, which was lost after the Third battle of Panipat including the cis-Sutlej states (south of Sutlej) like Kaithal, Patiala, Jind, Thanesar, Maler Kotla and Faridkot. Delhi and Uttar Pradesh were under the suzerainty of the Scindhias of the Maratha Empire and following the Second Anglo-Maratha War of 1803–1805, the Marathas lost these territories to the British East India Company.
        `,
        listTitle: `Major Rulers`,
    },
    {
        id: 4,
        title: `Sikh Empire`,
        category: `Sikh`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Guru_Gobind_Singh_bowing_to_Guru_Granth.jpg",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/2_Sri_Kesgarh_Takhat_Anandpur_Sahib_Khalsa_birthplace_Himalayan_foothills_in_view_Punjab_India.jpg/800px-2_Sri_Kesgarh_Takhat_Anandpur_Sahib_Khalsa_birthplace_Himalayan_foothills_in_view_Punjab_India.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/2/20/Coin_of_Maharaja_Ranjit_Singh%2C_minted_in_Amritsar.jpg",
        desc: `
        The Sikh Empire, also known as the Punjab Empire, was a state originating in the Indian subcontinent, formed under the leadership of Maharaja Ranjit Singh, who established an empire based in the Punjab. The empire existed from 1799, when Maharaja Ranjit Singh captured Lahore, to 1849, when it was defeated and conquered in the Second Anglo-Sikh War. It was forged on the foundations of the Khalsa from a collection of autonomous Sikh misls. At its peak in the 19th century, the Empire extended from the Khyber Pass in the west to western Tibet in the east, and from Mithankot in the south to Kashmir in the north. It was divided into four provinces: Lahore, in Punjab, which became the Sikh capital; Multan, also in Punjab; Peshawar; and Kashmir from 1799 to 1849. Religiously diverse, with an estimated population of 3.5 million in 1831 (making it the 19th most populous country at the time), it was the last major region of the Indian subcontinent to be annexed by the British Empire.<br><br>

        The foundations of the Sikh Empire can be traced to as early as 1707, the year of Aurangzeb's death and the start of the downfall of the Mughal Empire. With the Mughals significantly weakened, the Sikh army, known as the Dal Khalsa, a rearrangement of the Khalsa inaugurated by Guru Gobind Singh, led expeditions against them and the Afghans in the west. This led to a growth of the army which split into different confederacies or semi-independent misls. Each of these component armies controlled different areas and cities. However, in the period from 1762 to 1799, Sikh commanders of the misls appeared to be coming into their own as independent.<br><br>

        The formation of the empire began with the capture of Lahore, by Maharaja Ranjit Singh, from its Afghan ruler, Zaman Shah Durrani, and the subsequent and progressive expulsion of Afghans from the Punjab, by defeating them in the Afghan-Sikh Wars, and the unification of the separate Sikh misls. Ranjit Singh was proclaimed as Maharaja of the Punjab on 12 April 1801 (to coincide with Vaisakhi), creating a unified political state. Sahib Singh Bedi, a descendant of Guru Nanak, conducted the coronation. Ranjit Singh rose to power in a very short period, from a leader of a single misl to finally becoming the Maharaja of Punjab. He began to modernise his army, using the latest training as well as weapons and artillery. After the death of Maharaja Ranjit Singh, the empire was weakened by internal divisions and political mismanagement. Finally, by 1849 the state was dissolved after the defeat in the Second Anglo-Sikh War.
        `,
        desc1: `Early 20th century Sikh painting, depicting Guru Gobind Singh.`,
        desc2: `Anandpur Sahib gurdwara, Punjab, the birthplace of Khalsa.`,
        desc3: `Nanakshahi coins of Sikh empire.`,
        subTitle: `Background`,
        subDesc: `
        The Sikh religion began around the time of the conquest of Northern Indian subcontinent by Babur, the founder of the Mughal Empire. His conquering grandson, Mughal Emperor Akbar, supported religious freedom and after visiting the langar of Guru Amar Das got a favourable impression of Sikhism. As a result of his visit he donated land to the langar and the Mughals did not have any conflict with Sikh gurus until his death in 1605. His successor Jahangir, however, saw the Sikhs as a political threat. He ordered Guru Arjun Dev, who had been arrested for supporting the rebellious Khusrau Mirza, to change the passage about Islam in the Adi Granth. When the Guru refused, Jahangir ordered him to be put to death by torture. Guru Arjan Dev's martyrdom led to the sixth Guru, Guru Hargobind, declaring Sikh sovereignty in the creation of the Akal Takht and the establishment of a fort to defend Amritsar. Jahangir attempted to assert authority over the Sikhs by jailing Guru Hargobind at Gwalior, but released him after a number of years when he no longer felt threatened. The Sikh community did not have any further issues with the Mughal empire until the death of Jahangir in 1627. The succeeding son of Jahangir, Shah Jahan, took offence at Guru Hargobind's "sovereignty" and after a series of assaults on Amritsar forced the Sikhs to retreat to the Sivalik Hills.<br><br>

        The next guru, Guru Har Rai, maintained the guruship in these hills by defeating local attempts to seize Sikh land and playing a neutral role in the power struggle between two of the sons of Shah Jahan, Aurangzeb and Dara Shikoh, for control of the Mughal Empire. The ninth Guru, Guru Tegh Bahadur, moved the Sikh community to Anandpur and travelled extensively to visit and preach in defiance of Aurangzeb, who attempted to install Ram Rai as new guru. Guru Tegh Bahadur aided Kashmiri Pandits in avoiding conversion to Islam and was arrested by Aurangzeb. When offered a choice between conversion to Islam and death, he chose to die rather than compromise his principles and was executed.
        `,
        listTitle: `Khalsa`,
    },
    {
        id: 5,
        title: `Kingdom of Mysore`,
        category: `Mysore`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Indian_Mysore_Kingdom_1784_map.svg/800px-Indian_Mysore_Kingdom_1784_map.svg.png",
        img2: "https://upload.wikimedia.org/wikipedia/commons/b/b7/The_North_Entrance_Into_The_Fort_Of_Bangalore_-with_Tipu%27s_flag_flying-.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/6/60/Mysore_Palace%2C_India_%28photo_-_Jim_Ankan_Deka%29.jpg",
        desc: `
        The Kingdom of Mysore was a realm in southern India, traditionally believed to have been founded in 1399 in the vicinity of the modern city of Mysore. From 1799 until 1950, it was a princely state, until 1947 in a subsidiary alliance with British India. The British took Direct Control over the Princely State in 1831. It then became Mysore State (later enlarged and renamed to Karnataka) with its ruler remaining as Rajapramukh until 1956, when he became the first Governor of the reformed state.<br><br>

        The kingdom, which was founded and ruled for most part by the Hindu Wodeyar family, initially served as a vassal state of the Vijayanagara Empire. The 17th century saw a steady expansion of its territory and during the rule of Narasaraja Wodeyar I and Chikka Devaraja Wodeyar, the kingdom annexed large expanses of what is now southern Karnataka and parts of Tamil Nadu to become a powerful state in the southern Deccan. During a brief Muslim rule, the kingdom shifted to a Sultanate style of administration.<br><br>

        During this time, it came into conflict with the Marathas, the Nizam of Hyderabad, the Kingdom of Travancore and the British, which culminated in the four Anglo-Mysore Wars. Success in the First Anglo-Mysore war and stalemate in the Second was followed by defeats in the Third and the Fourth. Following Tipu's death in the fourth war in the Siege of Seringapatam (1799), large parts of his kingdom were annexed by the British, which signalled the end of a period of Mysorean hegemony over South India. The British restored the Wodeyars to their throne by way of a subsidiary alliance and the diminished Mysore was transformed into a princely state. The Wodeyars continued to rule the state until Indian independence in 1947, when Mysore acceded to the Union of India.<br><br>

        Even as a princely state, Mysore came to be counted among the more developed and urbanised regions of India. This period (1799–1947) also saw Mysore emerge as one of the important centres of art and culture in India. The Mysore kings were not only accomplished exponents of the fine arts and men of letters, they were enthusiastic patrons as well, and their legacies continue to influence rocket science, music, and art even today.
        `,
        desc1: `Extent of the Mysore Kingdom under Tipu Sultan.`,
        desc2: `The flag of the Sultanate of Mysore at the entrance to the fort of Bangalore.`,
        desc3: `Mysore Palace.`,
        subTitle: `Origin`,
        subDesc: `
        Sources for the history of the kingdom include numerous extant lithic and copper plate inscriptions, records from the Mysore palace and contemporary literary sources in Kannada, Persian and other languages. According to traditional accounts, the kingdom originated as a small state based in the modern city of Mysore and was founded by two brothers, Yaduraya (also known as Vijaya) and Krishnaraya. Their origins are mired in legend and are still a matter of debate; while some historians posit a northern origin at Dwarka, others locate it in Karnataka. Yaduraya is said to have married Chikkadevarasi, the local princess and assumed the feudal title "Wodeyar" (lit, "Lord"), which the ensuing dynasty retained. The first unambiguous mention of the Wodeyar family is in 16th century Kannada literature from the reign of the Vijayanagara king Achyuta Deva Raya (1529–1542); the earliest available inscription, issued by the Wodeyars themselves, dates to the rule of the petty chief Timmaraja II in 1551.<br><br>

        The kings who followed ruled as vassals of the Vijayanagara empire until the decline of the latter in 1565. By this time, the kingdom had expanded to thirty-three villages protected by a force of 300 soldiers. King Timmaraja II conquered some surrounding chiefdoms, and King Bola Chamaraja IV (lit, "Bald"), the first ruler of any political significance among them, withheld tribute to the nominal Vijayanagara monarch Aravidu Ramaraya. After the death of Aravidu Aliya Rama Raya, the Wodeyars began to assert themselves further and King Raja Wodeyar I wrested control of Srirangapatna from the Vijayanagara governor (Mahamandaleshvara) Aravidu Tirumalla – a development which elicited, if only ex post facto, the tacit approval of Venkatapati Raya, the incumbent king of the diminished Vijayanagar empire ruling from Chandragiri. Raja Wodeyar I's reign also saw territorial expansion with the annexation of Channapatna to the north from Jaggadeva Raya – a development which made Mysore a regional political factor to reckon with.
        `,
        listTitle: `Notable Rulers`,
    },
    {
        id: 6,
        title: `Company Raj`,
        category: `Company`,
        img1: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/India_british_expansion_1805a.jpg/250px-India_british_expansion_1805a.jpg",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/East_India_Company_Silver_Rupee_1835_William_IV_King.jpg/320px-East_India_Company_Silver_Rupee_1835_William_IV_King.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Military_orphan_school_calcutta1794.jpg/800px-Military_orphan_school_calcutta1794.jpg",
        desc: `
        Company rule in India (sometimes, Company Raj) refers to the rule or dominion of the British East India Company on the Indian subcontinent. This is variously taken to have commenced in 1757, after the Battle of Plassey, when the Nawab of Bengal surrendered his dominions to the Company, in 1765, when the Company was granted the diwani, or the right to collect revenue, in Bengal and Bihar, or in 1773, when the Company established a capital in Calcutta, appointed its first Governor-General, Warren Hastings, and became directly involved in governance. The rule lasted until 1858, when, after the Indian rebellion of 1857 and consequent of the Government of India Act 1858, the British government assumed the task of directly administering India in the new British Raj.
        `,
        desc1: `Areas of South Asia under Company rule 1774-1858.`,
        desc2: `Silver Rupee 1835, William IV, King.`,
        desc3: `Military Orphan School for private soldiers of the East India Company, Howrah, Bengal Presidency, 1794.`,
        subTitle: `Origin`,
        subDesc: `
        The English East India Company ("the Company") was founded in 1600, as The Company of Merchants of London Trading into the East Indies. It gained a foothold in India in with the establishment of a factory in Masulipatnam on the Eastern coast of India in 1611 and the grant of the rights to establish a factory in Surat in 1612 by the Mughal Emperor Jahangir. In 1640, after receiving similar permission from the Vijayanagara ruler farther south, a second factory was established in Madras on the southeastern coast. Bombay island, not far from Surat, a former Portuguese outpost gifted to England as dowry in the marriage of Catherine of Braganza to Charles II, was leased by the Company in 1668. Two decades later, the Company established a presence on the eastern coast as well; far up that coast, in the Ganges river delta, a factory was set up in Calcutta. Since, during this time other companies—established by the Portuguese, Dutch, French, and Danish—were similarly expanding in the region, the English Company's unremarkable beginnings on coastal India offered no clues to what would become a lengthy presence on the Indian subcontinent.<br><br>

        The Company's victory under Andrea Bustamante and Robert Clive in the 1757 Battle of Plassey and another victory in the 1764 Battle of Buxar (in Bihar), consolidated the Company's power, and forced emperor Shah Alam II to appoint it the diwan, or revenue collector, of Bengal, Bihar, and Orissa. The Company thus became the de facto ruler of large areas of the lower Gangetic plain by 1773. It also proceeded by degrees to expand its dominions around Bombay and Madras. The Anglo-Mysore Wars (1766–1799) and the Anglo-Maratha Wars (1772–1818) left it in control of large areas of India south of the Sutlej River. With the defeat of the Marathas, no native power represented a threat for the Company any longer.<br><br>

        The proliferation of the Company's power chiefly took two forms. The first of these was the outright annexation of Indian states and subsequent direct governance of the underlying regions, which collectively came to comprise British India. The annexed regions included the North-Western Provinces (comprising Rohilkhand, Gorakhpur, and the Doab) (1801), Delhi (1803), Assam (Ahom Kingdom 1828), and Sindh (1843). Punjab, North-West Frontier Province, and Kashmir, were annexed after the Anglo-Sikh Wars in 1849-1856 (Period of tenure of Marquess of Dalhousie Governor General); however, Kashmir was immediately sold under the Treaty of Amritsar (1850) to the Dogra Dynasty of Jammu, and thereby became a princely state. In 1854 Berar was annexed, and the state of Oudh two years later.<br><br>

        The second form of asserting power involved treaties in which Indian rulers acknowledged the Company's hegemony in return for limited internal autonomy. Since the Company operated under financial constraints, it had to set up political underpinnings for its rule. The most important such support came from the subsidiary alliances with Indian princes during the first 75 years of Company rule. In the early 19th century, the territories of these princes accounted for two-third of India. When an Indian ruler, who was able to secure his territory, wanted to enter such an alliance, the Company welcomed it as an economical method of indirect rule, which did not involve the economic costs of direct administration or the political costs of gaining the support of alien subjects.
        `,
        listTitle: `Notable Governal Generals`,
    },
]

const modernList = [
    {
        id: 1,
        singleTitle: `Babur`,
        time1: `1526CE`,
        singleCategory: `Mughal`,
        time2: `1230CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/8/80/Babur_of_India.jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Coin_of_Babur%2C_as_ruler_of_Kabul.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Babur_crossing_the_Indus_in_the_heat_of_battle.jpg/320px-Babur_crossing_the_Indus_in_the_heat_of_battle.jpg",
        info: `
        Babur (14 February 1483 – 26 December 1530), born Zahīr ud-Dīn Muhammad, was the founder of the Mughal Empire in the Indian subcontinent. He was a descendant of Timur and Genghis Khan through his father and mother respectively. He was also given the posthumous name of Firdaws Makani ('Dwelling in Paradise').<br><br>

        Of Chagatai Turkic origin and born in Andijan in the Fergana Valley (in present-day Uzbekistan), Babur was the eldest son of Umar Sheikh Mirza (1456–1494, governor of Fergana from 1469 to 1494) and a great-great grandson of Timur (1336–1405). Babur ascended the throne of Fergana in its capital Akhsikent in 1494 at the age of twelve and faced rebellion. He conquered Samarkand two years later, only to lose Fergana soon after. In his attempt to reconquer Fergana, he lost control of Samarkand. In 1501 his attempt to recapture both the regions failed when Muhammad Shaybani Khan defeated him. In 1504 he conquered Kabul, which was under the putative rule of Abdur Razaq Mirza, the infant heir of Ulugh Beg II. Babur formed a partnership with the Safavid ruler Ismail I and reconquered parts of Turkistan, including Samarkand, only to again lose it and the other newly conquered lands to the Sheybanids.<br><br>

        After losing Samarkand for the third time, Babur turned his attention to India and employed aid from the neighbouring Safavid and Ottoman empires Babur defeated Ibrahim Lodi, Sultan of Delhi, at the First Battle of Panipat in 1526 CE and founded the Mughal Empire. At the time, the sultanate at Delhi was a spent force that was long crumbling. The Mewar kingdom, under the able rule of Rana Sanga, had turned into one of the strongest powers of northern India. Sanga unified several Rajput clans for the first time after Prithviraj Chauhan and advanced on Babur with a grand coalition of 100,000 Rajputs. However, Sanga suffered a major defeat in the Battle of Khanwa due to Babur's skillful positioning of troops and modern tactics and firepower. The Battle of Khanua was one of the most decisive battles in Indian history, more so than the First Battle of Panipat, as the defeat of Rana Sanga was a watershed event in the Mughal conquest of northern India.<br><br>

        Babur married several times. Notable among his sons are Humayun, Kamran Mirza and Hindal Mirza. Babur died in 1530 in Agra and Humayun succeeded him. Babur was first buried in Agra but, as per his wishes, his remains were moved to Kabul and reburied. He ranks as a national hero in Uzbekistan and Kyrgyzstan. Many of his poems have become popular folk songs. He wrote the Baburnama in Chaghatai Turkic; it was translated into Persian during the reign (1556–1605) of his grandson, the Emperor Akbar.
        `,
        info1: `Idealized portrait of Babur, early 17th century.`,
        info2: `Coin minted by Babur during his time as ruler of Kabul.`,
        info3: `Babur crossing the Indus River.`,
    },
    {
        id: 2,
        singleTitle: `Humayun`,
        time1: `1530CE`,
        singleCategory: `Mughal`,
        time2: `1540CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Emperor_Humayun.JPG/220px-Emperor_Humayun.JPG",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Copper_coin_of_Humayun%2C_944_A._H.%2C_Delhi.JPG/1280px-Copper_coin_of_Humayun%2C_944_A._H.%2C_Delhi.JPG",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Humayun%27s_Tomb%2C_Delhi%2C_India_2019.jpg/1024px-Humayun%27s_Tomb%2C_Delhi%2C_India_2019.jpg",
        info: `
        Nasir-ud-Din Muḥammad (6 March 1508 – 27 January 1556), better known by his regnal name, Humayun , was the second emperor of the Mughal Empire, who ruled over territory in what is now Afghanistan, Pakistan, Northern India, and Bangladesh from 1530 to 1540 and again from 1555 to 1556. Like his father, Babur, he lost his kingdom early but regained it with the aid of the Safavid dynasty of Persia, with additional territory. At the time of his death in 1556, the Mughal Empire spanned almost one million square kilometres.<br><br>

        In December 1530, Humayun succeeded his father to the throne of Delhi as ruler of the Mughal territories in the Indian subcontinent. Humayun was an inexperienced ruler when he came to power, at the age of 22. His half-brother Kamran Mirza inherited Kabul and Kandahar, the northernmost parts of their father's empire. Kamran was to become a bitter rival of Humayun.<br><br>

        Humayun lost Mughal territories to Sher Shah Suri, but regained them 15 years later with Safavid aid. Humayun's return from Persia was accompanied by a large retinue of Persian noblemen and signalled an important change in Mughal court culture. The Central Asian origins of the dynasty were largely overshadowed by the influences of Persian art, architecture, language, and literature. There are many stone carvings and thousands of Persian manuscripts in India dating from the time of Humayun.<br><br>

        Subsequently, Humayun further expanded the Empire in a very short time, leaving a substantial legacy for his son, Akbar.
        `,
        info1: `Portrait of Humayun.`,
        info2: `Copper coin of Humayun.`,
        info3: `Humayun's Tomb in Delhi,.`,
    },
    {
        id: 3,
        singleTitle: `Akbar`,
        time1: `1556CE`,
        singleCategory: `Mughal`,
        time2: `1605CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Govardhan._Akbar_With_Lion_and_Calf_ca._1630%2C_Metmuseum_%28cropped%29.jpg/800px-Govardhan._Akbar_With_Lion_and_Calf_ca._1630%2C_Metmuseum_%28cropped%29.jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Audienzhalle.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/8/88/Silver_Rupee_Akbar.jpg",
        info: `
        Abu'l-Fath Jalal-ud-din Muhammad Akbar(25 October 1542 – 27 October 1605), popularly known as Akbar the Great, and also as Akbar I was the third Mughal emperor, who reigned from 1556 to 1605. Akbar succeeded his father, Humayun, under a regent, Bairam Khan, who helped the young emperor expand and consolidate Mughal domains in India.<br><br>

        A strong personality and a successful general, Akbar gradually enlarged the Mughal Empire to include much of the Indian subcontinent. His power and influence, however, extended over the entire subcontinent because of Mughal military, political, cultural, and economic dominance. To unify the vast Mughal state, Akbar established a centralised system of administration throughout his empire and adopted a policy of conciliating conquered rulers through marriage and diplomacy. To preserve peace and order in a religiously and culturally diverse empire, he adopted policies that won him the support of his non-Muslim subjects. Eschewing tribal bonds and Islamic state identity, Akbar strove to unite far-flung lands of his realm through loyalty, expressed through an Indo-Persian culture, to himself as an emperor.<br><br>

        Mughal India developed a strong and stable economy, leading to commercial expansion and greater patronage of culture. Akbar himself was a patron of art and culture. He was fond of literature, and created a library of over 24,000 volumes written in Sanskrit, Urdu, Persian, Greek, Latin, Arabic and Kashmiri, staffed by many scholars, translators, artists, calligraphers, scribes, bookbinders and readers. He did much of the cataloging himself through three main groupings. Akbar also established the library of Fatehpur Sikri exclusively for women, and he decreed that schools for the education of both Muslims and Hindus should be established throughout the realm. He also encouraged bookbinding to become a high art. Holy men of many faiths, poets, architects, and artisans adorned his court from all over the world for study and discussion. Akbar's courts at Delhi, Agra, and Fatehpur Sikri became centres of the arts, letters, and learning. Timurid and Perso-Islamic culture began to merge and blend with indigenous Indian elements, and a distinct Indo-Persian culture emerged characterized by Mughal style arts, painting, and architecture. Disillusioned with orthodox Islam and perhaps hoping to bring about religious unity within his empire, Akbar promulgated Din-i-Ilahi, a syncretic creed derived mainly from Islam and Hinduism as well as some parts of Zoroastrianism and Christianity.<br><br>

        Akbar's reign significantly influenced the course of Indian history. During his rule, the Mughal Empire tripled in size and wealth. He created a powerful military system and instituted effective political and social reforms. By abolishing the sectarian tax on non-Muslims and appointing them to high civil and military posts, he was the first Mughal ruler to win the trust and loyalty of the native subjects. He had Sanskrit literature translated, participated in native festivals, realising that a stable empire depended on the co-operation and good-will of his subjects. Thus, the foundations for a multicultural empire under Mughal rule were laid during his reign. Akbar was succeeded as emperor by his son, Prince Salim, later known as Jahangir.
        `,
        info1: `Akbar by Govardhan, c. 1630.`,
        info2: `Diwan-i-Khas (Hall of Private Audience) in Fatehpur Sikri.`,
        info3: `Silver coin of Akbar with inscriptions of the Islamic declaration of faith.`,
    },
    {
        id: 4,
        singleTitle: `Jahangir`,
        time1: `1605CE`,
        singleCategory: `Mughal`,
        time2: `1627CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Portrait_of_Emperor_Jahangir.jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Tomb_of_Jahangir_and_gardens_3.jpg/800px-Tomb_of_Jahangir_and_gardens_3.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jahangir_hunting_with_a_falcon..jpg",
        info: `
        Nūr i Dīn Muḥammad Salīm, known by his imperial name, Jahāngīr (31 August 1569 – 28 October 1627), was the fourth Mughal Emperor, who ruled from 1605 until his death in 1627. His imperial name (in Persian) means 'conqueror of the world', 'world-conqueror' or 'world-seizer' (Jahan: world; gir: the root of the Persian verb gereftan: to seize, to grab).<br><br>

        The fictitious tale of his relationship with the Mughal courtesan, Anarkali, has been widely adapted into the literature, art and cinema of India.<br><br>

        Born on 31 August 1569, Prince Salīm, later Jahāngīr, was the third son born to Akbar and his favorite Queen, Mariam-uz-Zamani in Fatehpur Sikri. Akbar's previous children had died in infancy and he had sought the blessing of holy men to produce a son. Salim was named for one such man, Shaikh Salim Chisti. Salim grew up fluent in Persian and premodern Hindi, with a "respectable" knowledge of Turkic, the Mughal ancestral language.<br><br>

        Prince Salim succeeded to the throne on Thursday, 3 November 1605, eight days after his father's death. Salim ascended to the throne with the title of Nur-ud-din Muhammad Jahangir Badshah Ghazi, and thus began his 22-year reign at the age of 36. Jahangir, soon after, had to fend off his own son, Prince Khusrau Mirza, when the latter attempted to claim the throne based on Akbar's will to become his next heir. Khusrau Mirza was defeated in 1606 and confined in the fort of Agra. Jahangir considered his third son, Prince Khurram (reign name Shah Jahan), his favourite. As punishment, Khusrau Mirza was handed over to his younger brother and was partially blinded and killed. In 1622, Jahangir sent his son, Prince Khurram, to fight against the combined forces of Ahmednagar, Bijapur and Golconda. After his victory, Khurram turned against his father and made a bid for power. Khurram murdered his blind older brother, Khusrau Mirza, in order to smooth his own path to the throne.[14] As with the insurrection of his eldest son, Khusrau Mirza, Jahangir was able to defeat the challenge from within his family and retain power.
        `,
        info1: `Portrait of Emperor Jahangir.`,
        info2: `The Tomb of Jahangir in Shahdara, Lahore.`,
        info3: `Jahangir with falcon on horseback.`,
    },
    {
        id: 5,
        singleTitle: `Shah Jahan`,
        time1: `1628CE`,
        singleCategory: `Mughal`,
        time2: `1658CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Portrait_of_the_emperor_Shajahan%2C_enthroned..jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/TajMahalbyAmalMongia.jpg/800px-TajMahalbyAmalMongia.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Red_Fort_-_The_marble_jharokha.jpg/800px-Red_Fort_-_The_marble_jharokha.jpg",
        info: `
        Shahab-ud-din Muhammad Khurram (January 1592 – 22 January 1666), better known by his regnal name, Shah Jahan was the fifth Mughal emperor of India, and reigned from 1628 to 1658. Historian J. L. Mehta wrote that under Shah Jahan's reign, the Mughal Empire reached the peak of its glory. Shah Jahan is best remembered for his architectural achievements. His reign ushered in the golden age of Mughal architecture. Shah Jahan commissioned many monuments, the best known of which is the Taj Mahal in Agra, in which is entombed his favorite wife, Mumtaz Mahal. His relationship with Mumtaz Mahal has been heavily adapted into Indian art, literature and cinema. He owned the royal treasury, and several precious stones such as the Kohinoor and has thus often been regarded as the wealthiest person in history.<br><br>

        The death of his father Jahangir in late 1627 spurred a war of succession between his sons Shahryar and Khurram from which Shah Jahan emerged victoriously. He executed all of his rivals for the throne and crowned himself emperor on January 1628 in Agra, under the regnal title "Shah Jahan" (which was originally given to him as a princely title). His rule saw many grand building projects, including the Red Fort and the Shah Jahan Mosque. Foreign affairs saw war with the Safavids, aggressive campaigns against the Shia Deccan Sultanates, conflict with the Portuguese, and positive relations with the Ottoman Empire. Domestic concerns included putting down numerous rebellions, and the devastating famine from 1630-32.<br><br>

        In September 1657, Shah Jahan fell seriously ill. This set off a war of succession among his four sons in which his third son, Aurangzeb, emerged victorious and usurped his father's throne. Shah Jahan recovered from his illness, but Emperor Aurangzeb put his father under house arrest in Agra Fort from July 1658 until his death in January 1666. He was laid to rest next to his wife in the Taj Mahal. His reign is known for doing away with the liberal policies initiated by Akbar. Shah Jahan was an Orthodox Muslim, and it was during his time that Islamic revivalist movements like the Naqsbandi began to shape Mughal policies.
        `,
        info1: `17th Century Portrait of Shah Jahan.`,
        info2: `The Taj Mahal, the burial place of Shah Jahan and his wife Mumtaz Mahal.`,
        info3: `Throne of king Shah Jahan, Red Fort, Delhi.`,
    },
    {
        id: 6,
        singleTitle: `Aurangzeb`,
        time1: `1658CE`,
        singleCategory: `Mughal`,
        time2: `1707CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/6/6d/The_Emperor_Aurangzeb_Alamgir.jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Badshahi_Mosque_July_1_2005_pic32_by_Ali_Imran_%281%29.jpg/1024px-Badshahi_Mosque_July_1_2005_pic32_by_Ali_Imran_%281%29.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Copper_coin_of_Aurangazeb%2C_issue_from_Surat.jpg/1280px-Copper_coin_of_Aurangazeb%2C_issue_from_Surat.jpg",
        info: `
        Muhi-ud-Din Muhammad (November 1618 – 3 March 1707), commonly known by the sobriquet Aurangzeb or by his regnal title Alamgir (Persian: عالمگیر, lit. 'Conqueror of the World'), was the sixth Mughal emperor, who ruled over almost the entire Indian subcontinent for a period of 49 years. Widely considered to be the last effective ruler of the Mughal Empire, Aurangzeb compiled the Fatawa-e-Alamgiri, and was among the few monarchs to have fully established Sharia law and Islamic economics throughout the Indian subcontinent. He was an accomplished military leader whose rule has been the subject of praise, though he has also been described as the most controversial ruler in Indian history.<br><br>

        He was a notable expansionist; during his reign, the Mughal Empire reached its greatest extent, ruling over nearly all of the Indian subcontinent. During his lifetime, victories in the south expanded the Mughal Empire to 4 million square kilometres, and he ruled over a population estimated to be over 158 million subjects. Under his reign, India surpassed Qing China to become the world's largest economy and biggest manufacturing power, worth nearly a quarter of global GDP and more than the entirety of Western Europe, and its largest and wealthiest subdivision, the Bengal Subah, signaled proto-industrialization.<br><br>

        Aurangzeb was noted for his religious piety; he memorized the entire Quran, studied hadiths and stringently observed the rituals of Islam, and "transcribe copies of the Quran." He also patronized works of Islamic and Arabic calligraphy.<br><br>

        Multiple interpretations of Aurangzeb's life and reign over the years by critics have led to a very complicated legacy. Some argue that his policies abandoned his predecessors' legacy of pluralism and religious tolerance, citing his introduction of the jizya tax and other policies based on Islamic ethics; his demolition of Hindu temples; the executions of his elder brother Dara Shikoh, King Sambhaji of Maratha and Sikh Guru Tegh Bahadur; and the prohibition and supervision of behaviour and activities that are forbidden in Islam such as gambling, fornication, and consumption of alcohol and narcotics. At the same time, some historians question the historical authenticity of the claims of his critics, arguing that his destruction of temples has been exaggerated, and noting that he built more temples than he destroyed, paid for their maintenance, employed significantly more Hindus in his imperial bureaucracy than his predecessors, and opposed bigotry against Hindus and Shia Muslims.
        `,
        info1: `Portrait of Aurangzeb.`,
        info2: `Badshahi Masjid built by Aurangzeb in Lahore.`,
        info3: `A copper dam of Aurangzeb.`,
    },
    {
        id: 7,
        singleTitle: `Sher Shah Suri`,
        time1: `1537CE`,
        singleCategory: `Sur`,
        time2: `1545CE`,
        info: `
        Sher Shah Suri (1472, or 1486 – 22 May 1545), born Farīd Khān , was the founder of the Suri Empire in India, with its capital in Sasaram in modern-day Bihar. He introduced the currency of rupee. An ethnic Pashtun ruler originally from Afghanistan, Sher Shah took control of the Mughal Empire in 1540. After his accidental death in 1545, his son Islam Shah became his successor.<br><br>

        He first served as a private before rising to become a commander in the Mughal army under Babur and then the governor of Bihar. In 1537, when Babur's son Humayun was elsewhere on an expedition, Sher Shah overran the state of Bengal and established the Suri dynasty. A brilliant strategist, Sher Shah proved himself as a gifted Muslim administrator as well as a capable general. His reorganization of the empire laid the foundations for the later Mughal emperors, notably Akbar, son of Humayun.<br><br>

        During his five-year rule from 1540 to 1545, he set up a new economic and military administration, issued the first Rupiya from "Tanka" and organized the postal system of the Indian Subcontinent.<br><br>

        Some of his strategies and contributions were later idolized by the Mughal emperors, most notably Akbar. Suri further developed Humayun's Dina-panah city and named it Shergarh and revived the historical city of Pataliputra, which had been in decline since the 7th century CE, as Patna.<br><br>

        He extended the Grand Trunk Road from Chittagong in the frontiers of the province of Bengal in northeast India to Kabul in Afghanistan in the far northwest of the country. The influence of his innovations and reforms extended far beyond his brief reign; his arch foe, Humayun, referred to him as “Ustad-I-Badshahan”, teacher of kings. In the seven years of his reign he never lost a battle.
        `,
    },
    {
        id: 8,
        singleTitle: `Islam Shah Suri`,
        time1: `1545CE`,
        singleCategory: `Sur`,
        time2: `1554CE`,
        info: `
        Islam Shah Suri (reigned: 1545–1554) was the second ruler of the Suri dynasty which ruled the part of India in the mid-16th century. His original name was Jalal Khan and he was the second son of Sher Shah Suri.<br><br>

        On his father's death, an emergency meeting of nobles chose Jalal Khan to be successor instead of his elder brother Adil Khan, since he had shown greater military ability. Jalal Khan was crowned on 26 May 1545 and took the title "Islam Shah". He was still worried that his brother would threaten his power and tried to have him captured. But Adil Khan evaded his grasp and raised an army. It marched on Islam Shah while he was at Agra. In the battle Islam Shah came out victorious and Adil Khan fled, never to be seen again.<br><br>

        The support some of the nobles had given his brother made Islam Shah suspicious and he ruthlessly purged their ranks, strictly subordinating the nobility to the crown. He continued his father's policies of efficient administration and increased centralisation. He had little opportunity for military campaigning; the fugitive Mughal emperor Humayun, whom his father had overthrown, made one abortive attempt to attack him.<br><br>

        Jalal Khan's father died in the first siege of Kalinjar. In which the Rajput king of Kalinjar, Keeratrai Chandel was victorious, as a result of calling an emergency meeting in Delhi, the Amirs declared Jalal Khan as Sultan (King). As a result, to avenge his father's death, Jalal Khan again besieged Kalinjar and resumed the siege of Kalinjar. They sent the proposal of the treaty but the Rajputs refused, which resulted in a war, but the Delhi army attacked the Chandelas camp in the night itself and took them captive. When Rajputs were asked whether to accept subjugation or death, they chose to die with Raja keeratrai , whereas in the fort of Kalinjar, kshatriya womens also committed self-immolation by Johar. In this war, the Rajputs of Kalinjar made a lot of sacrifices and due to their killing, Jalal Khan took the title of Islam Shah.
        `,
    },
    {
        id: 9,
        singleTitle: `Adil Shah Suri`,
        time1: `1555CE`,
        singleCategory: `Sur`,
        time2: `1555CE`,
        info: `
        Adil Shah Suri was the seventh and final ruler of the Sur dynasty. He was the brother in law of Sikandar Shah Suri, who ruled over a region east of Delhi after Sikandar Shah Suri was defeated by Humayun in 1555. He and Sikandar Shah Suri were contenders for the Delhi throne against the Mughal emperor Abu'l-Fath Jalal-ud-din Muhammad aka Akbar.<br><br>

        Early in Adil Shah's reign, he fought back a challenge from Muhammad Shah, ruler of Bengal. At the battle of Chhapparghatta in December 1555, Adil Shah and his Hindu general Hemu routed the Bengali forces and Muhammad Shah was killed. The following year, following the child-Emperor Akbar's absence from Delhi on a campaign, Hemu attacked and defeated the regent Tardi Beg Khan who fled the city. This was Hemu's 22nd successive victory in battle and rather than appoint Adil Shah as ruler he appointed himself ruler.<br><br>

        Meanwhile, the Bengal throne had passed on to Ghiyasuddin Abul Muzaffar Bahadur Shah, son of the slain Muhammad Shah. After killing an ambitious uncle, Bahadur Shah marched against Adil Shah to avenge his father's murder. In the battle of Fathpur in Munghyr in April 1557 Adil Shah's army was routed and Adil himself was captured and killed.
        `,
    },
    {
        id: 10,
        singleTitle: `Shivaji`,
        time1: `1674CE`,
        singleCategory: `Maratha`,
        time2: `1680CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Shivaji_British_Museum.jpg/800px-Shivaji_British_Museum.jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Shivaji%27s_seal%2C_enlarged.jpg/800px-Shivaji%27s_seal%2C_enlarged.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Death_of_Afzal_Khan.jpg/800px-Death_of_Afzal_Khan.jpg",
        info: `
        Shivaji Bhonsale I (c.19 February 1630 – 3 April 1680), also referred to as Chhatrapati Shivaji, was an Indian ruler and a member of the Bhonsle Maratha clan. Shivaji carved out an enclave from the declining Adilshahi sultanate of Bijapur that formed the genesis of the Maratha Empire. In 1674, he was formally crowned the Chhatrapati of his realm at Raigad Fort.<br><br>

        Over the course of his life, Shivaji engaged in both alliances and hostilities with the Mughal Empire, the Sultanate of Golkonda, Sultanate of Bijapur and the European colonial powers. Shivaji's military forces expanded the Maratha sphere of influence, capturing and building forts, and forming a Maratha navy. Shivaji established a competent and progressive civil rule with well-structured administrative organisations. He revived ancient Hindu political traditions, court conventions and promoted the usage of the Marathi and Sanskrit languages, replacing Persian in court and administration.<br><br>

        Shivaji's legacy was to vary by observer and time, but nearly two centuries after his death, he began to take on increased importance with the emergence of the Indian independence movement, as many Indian nationalists elevated him as a proto-nationalist and hero of the Hindus.<br><br>

        In 1636, the Adil Shahi sultanate of Bijapur invaded the kingdoms to its south. The sultanate had recently become a tributary state of the Mughal empire. It was being helped by Shahaji, who at the time was a chieftain in the Maratha uplands of western India. Shahaji was looking for opportunities of rewards of jagir land in the conquered territories, the taxes on which he could collect as an annuity.<br><br>

        Shahji was a rebel from brief Mughal service. Shahji's campaigns against the Mughals, supported by the Bijapur government, were generally unsuccessful. He was constantly pursued by the Mughal army and Shivaji and his mother Jijabai had to move from fort to fort.<br><br>

        In 1636, Shahaji joined in the service of Bijapur and obtained Poona as a grant. Shivaji and Jijabai settled in Poona. Shahaji, being deployed in Bangalore by the Bijapuri ruler Adilshah, appointed Dadoji Kondadeo as administrator. Kondadeo died in 1647 and Shivaji took over the administration. One of his first acts directly challenged the Bijapuri government.
        `,
        info1: `Shivaji's portrait (1680s) from the collection of British Museum.`,
        info2: `Royal seal of Shivaji.`,
        info3: `An early-20th-century painting by Sawlaram Haldankar of Shivaji fighting the Bijapuri general Afzal Khan.`,
    },
    {
        id: 11,
        singleTitle: `Sambhaji`,
        time1: `1681CE`,
        singleCategory: `Maratha`,
        time2: `1689CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Sambhaji_painting_late_17th_century.png/800px-Sambhaji_painting_late_17th_century.png",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Chh._Sambhaji%27s_WatanPatra.jpg/232px-Chh._Sambhaji%27s_WatanPatra.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vadhu_Tulapur_-_Statue_of_Sambhaji_Maharaja.JPG/800px-Vadhu_Tulapur_-_Statue_of_Sambhaji_Maharaja.JPG",
        info: `
        Sambhaji Bhosale (14 May 1657 – 11 March 1689) was the second Chhatrapati of the Maratha Empire, who ruled from 1681 to 1689. He was the eldest son of Shivaji, founder of the Maratha Empire. Sambhaji's rule was largely shaped by the ongoing wars between the Maratha kingdom and Mughal Empire as well as other neighbouring powers such as the Siddis, Mysore and the Portuguese in Goa. After Sambhaji's death, his brother Rajaram I succeeded him as the next Chhatrapati.<br><br>

        Sambhaji was born into a Hindu Marathi family at Purandar fort to the Maratha ruler Shivaji, and his first wife Saibai, who died when he was two years old and he was raised by his paternal grandmother Jijabai. At the age of nine, Sambhaji was sent to live with Raja Jai Singh I of Amber as a political hostage to ensure compliance of the Treaty of Purandar that Shivaji had signed with the Mughals on 11 June 1665. As a result of the treaty, Sambhaji became a Mughal mansabdar. He and his father Shivaji presented themselves to Mughal emperor, Aurangzeb's court at Agra on 12 May 1666. Aurangzeb put both of them under house arrest but they escaped on 22 July 1666. However, the two sides reconciled and had cordial relations during the period 1666–1670. During the period between 1666 and 1668, Aurangzeb conferred the title of raja on Shivaji. Sambhaji was also restored as a Mughal mansabdar with 5,000 horses. Shivaji at that time sent Sambhaji with general Prataprao Gujar to serve the Mughal viceroy in Aurangabad, Prince Mu'azzam. Sambhaji was also granted territory in Berar for revenue collection. In this period, Shivaji and Sambhaji fought alongside the Mughals against the Sultanate of Bijapur.<br><br>

        Sambhaji was married to Jivubai in a marriage of political alliance; per Maratha custom she took the name Yesubai. Jivubai was the daughter of Pilajirao Shirke, who had entered Shivaji's service following the defeat of a powerful deshmukh Rao Rana Suryajirao Surve who was his previous patron. This marriage thus gave Shivaji access to the Konkan coastal belt. Yesubai had two children, daughter Bhavani Bai and then a son named Shahu, who later became the Chhatrapati of the Maratha empire.<br><br>

        Sambhaji's behaviour, including alleged irresponsibility and addiction to sensual pleasures, led Shivaji to imprison his son at Panhala fort in 1678 to curb his behaviour. Sambhaji escaped from the fort with his wife and defected to the Mughals in December 1678 for a year, but then returned home when he learnt of a plan by Dilir Khan, the Mughal viceroy of Deccan, to arrest him and send him to Delhi. Upon returning home, Sambhaji was unrepentant and was put under surveillance at Panhala.
        `,
        info1: `A painting of Sambhaji, late 17th century.`,
        info2: `WatanPatra, grant document, by Chh. Sambhaji.`,
        info3: `Statue of Sambhaji at Tulapur.`,
    },
    {
        id: 12,
        singleTitle: `Shahu I`,
        time1: `1707CE`,
        singleCategory: `Maratha`,
        time2: `1749CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Chhatrapati_Shahu_I.jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/1/19/Maratha_darbar.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Maratha-Grabs-and-Gallivats-attacking-an-English-Ship.jpg/1024px-Maratha-Grabs-and-Gallivats-attacking-an-English-Ship.jpg",
        info: `
        Shahu Bhosale I (1682–1749 CE) was the fifth Chhatrapati of the Maratha Empire founded by his grandfather, Shivaji. Born in the Bhonsle family, he was the son of Sambhaji Maharaj, Shivaji Maharaj's eldest son and successor. Shahu, as a child, was taken prisoner along with his mother in 1689 by Mughal sardar, Zulfikar Khan Nusrat Jang after the Battle of Raigarh.<br><br>

        Under Shahu's reign, Maratha power and influence extended to all corners of the Indian subcontinent. After his death, his ministers (the Ashtapradhans) and the generals carved out their own fieldoms such as Bhonsle of Nagpur, Gaekwad of Baroda, Sindhia of Gwalior and Holkar of Indore, which eventually turned into a strong Maratha Empire during his time.<br><br>

        After the death of Aurangzeb in 1707, leading Mughal courtiers released Shahu with a force of fifty men, thinking that a friendly Maratha leader would be a useful ally. At that time he fought a brief war with his aunt Tarabai in an internecine conflict to gain the Maratha throne in 1708. Early in his reign, Shahu appointed Balaji Vishwanath as his Peshwa. Over the next fifty years, Balaji followed by his son, Bajirao I and grandson Balaji Bajirao with help of capable military leaders such as Shinde, Holkar, Gaekwad, Pawar and Bhonsle of Nagpur expanded Maratha power in all directions of the Indian subcontinent.
        `,
        info1: `A painting of Shahu I.`,
        info2: `Maratha darbar or court.`,
        info3: `Maratha Gurabs ships attacking a British East India Company ship.`,
    },
    {
        id: 13,
        singleTitle: `Balaji Vishwanath`,
        time1: `1713CE`,
        singleCategory: `Maratha`,
        time2: `1720CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Peshwa_Balaji_Vishwanath.jpg/800px-Peshwa_Balaji_Vishwanath.jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Peshwa_Smarak.jpg/800px-Peshwa_Smarak.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Shaniwarwada_gate.JPG/1024px-Shaniwarwada_gate.JPG",
        info: `
        Balaji Vishwanath Bhat (1662–1720), better known as Shrimant Peshwa Balaji Vishwanath, was the first of a series of hereditary Peshwas hailing from the Bhat family who gained effective control of the Maratha Empire during the 18th century. Balaji Vishwanath assisted a young Maratha Emperor Shahu to consolidate his grip on a kingdom that had been racked by civil war and persistently intruded on by the Mughals under Aurangzeb. He was called the Second Founder of the Maratha State. Later, his son Bajirao I became the Peshwa.<br><br>

        Balaji Vishwanath Bhat was born into a Marathi Hindu Chitpavan Brahmin family. The family hailed from the coastal Konkan region of present-day Maharashtra and were the hereditary Deshmukh for Shrivardhan under the Siddi of Janjira. He went out in search of employment to the upper regions of western ghats and worked as a mercenary trooper under various Maratha generals. According to Kincaid & Parasnis, Balaji Vishwanath entered the Maratha administration during the reign of Chhatrapati Sambhaji or the regency of his brother, Rajaram. Later, he served as an accountant for the Maratha general, Dhanaji Jadhav, at Janjira. Between 1699 and 1702, he served as the Sar-subhedar or head-administrator at Pune and from 1704 to 1707 as Sarsubedar of Daulatabad. By the time Dhanaji died, Balaji had proven himself as an honest and able officer. Balaji fell out with Dhanaji's son and successor, Chandrasen Jadhav and went over to the newly released Maratha ruler Chhatrapati Shahu who took note of his abilities and appointed Balaji as his assistant (c.1708).
        `,
        info1: `Statue of Peshwa Balaji Vishwanath at Shrivardhan.`,
        info2: `An information plaque describing Balaji Vishwanath Peshwa, a part of the Peshwa Memorial.`,
        info3: `Shaniwar Wada palace fort in Pune, it was the seat of the Peshwa rulers.`,
    },
    {
        id: 14,
        singleTitle: `Baji Rao I`,
        time1: `1720CE`,
        singleCategory: `Maratha`,
        time2: `1740CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Baji_Rao_I.png/220px-Baji_Rao_I.png",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/%E0%A4%AC%E0%A4%BE%E0%A4%9C%E0%A5%80%E0%A4%B0%E0%A4%BE%E0%A4%B5_%E0%A4%AA%E0%A5%87%E0%A4%B6%E0%A4%B5%E0%A5%87_%E0%A4%AF%E0%A4%BE%E0%A4%82%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE_%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A4%AE%E0%A5%81%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%9A%E0%A5%80_%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A5%83%E0%A4%A4%E0%A5%80_%E0%A4%B6%E0%A4%A8%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%A1%E0%A4%BE_%E0%A4%AA%E0%A5%81%E0%A4%A3%E0%A5%87.jpg/220px-thumbnail.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/0/02/Bajirao_Peshwa_Statue%2C_Pune.jpg",
        info: `
        Baji Rao I (18 August 1700 – 28 April 1740), born as Visaji, also known as Bajirao Ballal, was the 7th Peshwa (Prime Minister) of the Maratha Empire. His achievements are establishing Maratha supremacy in southern India and political hegemony in northern India. During his 20-year career as Peshwa, he defeated Mughals and as well as their vassal Nizam-ul-Mulk at several battles like Battle of Palkhed and Battle of Bhopal . He was responsible for the establishment of Maratha power in Malwa, Bundelkhand, Gujarat, as redeemer of Konkan from Siddis of Janjira and liberator of the western coast from the rule of the Portuguese.<br><br>

        His relationship with his Muslim wife, a subject of controversy, has been adapted in Indian novels and cinema.<br><br>

        Baji Rao was appointed Peshwa, succeeding his father, by Shahu on 17 April 1720. By the time of his appointment, the Mughal emperor Muhammad Shah had upheld Maratha claims to the territories held by Shivaji at his death. A treaty gave the Marathas the right to collect taxes (chauth) in the Deccan's six provinces. Baji Rao convinced Shahu that the Maratha Empire had to go on the offensive against its enemies to defend itself. He believed that the Mughal Empire was in decline, and wanted to take advantage of the situation with aggressive expansion into North India. Baji Rao compared the Mughals' declining fortune to a tree which, if attacked at its roots, would collapse.<br><br>

        As a new Peshwa, however, he faced several challenges. His appointment at a young age had evoked jealousy from senior officials such as Naro Ram Mantri, Anant Ram Sumant, Shripatrao Pant Pratinidhi, Khanderao Dabhade and Kanhoji Bhosle. Baji Rao promoted young men like himself, such as Malhar Rao Holkar, Ranoji Shinde, the Pawar brothers and Fateh Singh Bhosle, as commanders; these men did not belong to families who were hereditary Deshmukhs in the Deccan sultanates. Also the Purandare family who were the close associates of the Bhat Peshwa family, largely contributed in Baji Rao's success.<br><br>

        The Mughal viceroy of the Deccan, Nizam-ul-Mulk Asaf Jah I, had created a de facto autonomous kingdom in the region. He challenged Shahu's right to collect taxes on the pretext that he did not know whether Shahu or his cousin, Sambhaji II of Kolhapur, was the rightful heir to the Maratha throne. The Marathas needed to assert their rights over the nobles of newly acquired territories in Malwa and Gujarat. Several nominally-Maratha areas were not actually under the Peshwa's control; for example, the Siddis controlled the Janjira fort.
        `,
        info1: `Portrait of Baji Rao I, an artist's impression.`,
        info2: `Seal of Bajirao I.`,
        info3: `Equestrian statue of Peshwa Baji Rao I outside Shaniwar Wada, Pune.`,
    },
    {
        id: 15,
        singleTitle: `Balaji Baji Rao`,
        time1: `1740CE`,
        singleCategory: `Maratha`,
        time2: `1761CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/2/24/Peshwa_Balaji_Bajirao.jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/The_Third_battle_of_Panipat_13_January_1761.jpg/800px-The_Third_battle_of_Panipat_13_January_1761.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Nanasaheb_peshawe_samadhi_%281%29.JPG/1000px-Nanasaheb_peshawe_samadhi_%281%29.JPG",
        info: `
        Shrimant Peshwa Balajirao Bhat (8 December 1720 – 23 June 1761), also known as Nana Saheb, was the 8th Peshwa of the Maratha Empire in India. He was appointed as Peshwa in 1740 upon the death of his illustrious father, the Peshwa Bajirao I.<br><br>

        During his tenure, the Chhatrapati (Maratha Emperor) was a mere figurehead. At the same time, the Maratha empire started transforming into a confederacy, in which individual chiefs—such as the Holkars, the Scindias and the Bhonsles of Nagpur kingdom—became more powerful. During Balaji Rao's tenure, the Maratha territory reached its zenith. A large part of this expansion, however, was led by the individual chiefs of the Maratha Empire.<br><br>

        Balaji Bajirao was an astute startegist, a shrewd diplomat and an accomplished statesman. He, along with his cousin Sadashivrao Bhau, introduced new legislative and financial systems in the state. Under his leadership, the borders of the Maratha Empire expanded to Lahore in present day Pakistan, Srirangapattanam in the South, and Medinipore in present day West Bengal. Nanasaheb built canals, bridges, temples and lodges for travellers in the capital city of Pune and in other parts of the Maratha Empire. In his twenty-year reign as the Peshwa, Nanasaheb subdued three major powers under his menace, viz. Mughals in the North, the Nizam in the South and the English in Bengal and Mumbai.<br><br>

        Balaji Rao was born in the Bhat family, to Peshwa Baji Rao I, on 8 December 1720. After Baji Rao's death in April 1740, Chhatrapati Shahu appointed 19-year old Balaji as the Peshwa in August 1740, despite opposition from other chiefs such as Raghoji I Bhonsle. He was married to Gopikabai. The couple had three sons, Vishwasrao who died in the battle of Panipat in 1761, Madhavrao who succeeded Nanasaheb as Peshwa and Narayanrao who succeeded Madhavrao in his late teens. Nanasaheb had an able brother called Raghunathrao whose ambitions to be the Peshwa became disastrous for the Maratha empire.
        `,
        info1: `Portrait of Peshwa Balaji Bajirao.`,
        info2: `A c. 1770 drawing of the Third battle of Panipat.`,
        info3: `The samadhi of Peshwa Nana Saheb.`,
    },
    {
        id: 16,
        singleTitle: `Formation of the Khalsa`,
        time1: `1675CE`,
        singleCategory: `Sikh`,
        time2: `1707CE`,
        info: `
        Guru Gobind Singh assumed the guruship in 1675 and to avoid battles with Sivalik Hill rajas moved the guruship to Paunta. There he built a large fort to protect the city and garrisoned an army to protect it. The growing power of the Sikh community alarmed the Sivalik Hill rajas who attempted to attack the city but Guru Gobind Singh's forces routed them at the Battle of Bhangani. He moved on to Anandpur and established the Khalsa, a collective army of baptised Sikhs, on 30 March 1699. The establishment of the Khalsa united the Sikh community against various Mughal-backed claimants to the guruship. In 1701, a combined army of the Sivalik Hill rajas and the Mughals under Wazir Khan attacked Anandpur. The Khalsa retreated but regrouped to defeat the Mughals at the Battle of Muktsar. In 1707, Guru Gobind Singh accepted an invitation by Aurangzeb's successor Bahadur Shah I to meet him. The meeting took place at Agra on 23 July 1707.
        `,
    },
    {
        id: 17,
        singleTitle: `Banda Singh Bahadur`,
        time1: `1708CE`,
        singleCategory: `Sikh`,
        time2: `1716CE`,
        info: `
        In August 1708 Guru Gobind Singh visited Nanded. There he met a Bairāgī recluse, Madho Das, who converted to Sikhism, rechristened as Banda Singh Bahadur. A short time before his death, Guru Gobind Singh ordered him to reconquer Punjab region and gave him a letter that commanded all Sikhs to join him. After two years of gaining supporters, Banda Singh Bahadur initiated an agrarian uprising by breaking up the large estates of Zamindar families and distributing the land to the poor peasants who farmed the land.<br><br>

        Banda Singh Bahadur started his rebellion with the defeat of Mughal armies at Samana and Sadhaura and the rebellion culminated in the defeat of Sirhind. During the rebellion, Banda Singh Bahadur made a point of destroying the cities in which Mughals had been cruel to the supporters of Guru Gobind Singh. He executed Wazir Khan in revenge for the deaths of Guru Gobind Singh's sons and Pir Budhu Shah after the Sikh victory at Sirhind. He ruled the territory between the Sutlej river and the Yamuna river, established a capital in the Himalayas at Lohgarh and struck coinage in the names of Guru Nanak and Guru Gobind Singh. In 1716, his army was defeated by the Mughals after he attempted to defend his fort at Gurdas Nangal. He was captured along with 700 of his men and sent to Delhi, where they were all tortured and executed after refusing to convert to Islam.
        `,
    },
    {
        id: 18,
        singleTitle: `Sikh Confederacy`,
        time1: `1716CE`,
        singleCategory: `Sikh`,
        time2: `1799CE`,
        info: `
        The period from 1716 to 1799 was a highly turbulent time politically and militarily in the Punjab region. This was caused by the overall decline of the Mughal empire that left a power vacuum in the region that was eventually filled by the Sikhs of the Dal Khalsa, meaning "Khalsa army" or "Khalsa party". In the late 18th century, after defeating several invasions by the Afghan rulers of the Durrani Empire and their allies, remnants of the Mughals and their administrators, the Mughal-allied Hindu hill-rajas of the Sivalik Hills, and hostile local Muslims siding with other Muslim forces. The Sikhs of the Dal Khalsa eventually formed their own independent Sikh administrative regions, Misls, derived from a Perso-Arabic term meaning 'similar', headed by Misldars. These Misls were united in large part by Maharaja Ranjit Singh.
        `,
    },
    {
        id: 19,
        singleTitle: `Cis-Sutlej states`,
        time1: `1809CE`,
        singleCategory: `Sikh`,
        time2: `1862CE`,
        info: `
        The Cis-Sutlej states were a group of Sikh states in the Punjab region lying between the Sutlej River to the north, the Himalayas to the east, the Yamuna River and Delhi district to the south, and Sirsa District to the west. These states fell under the suzerainty of the Maratha Empire after 1785 before the Second Anglo-Maratha War of 1803–1805, after which the Marathas lost control of the territory to the British East India Company. The Cis-Sutlej states included Kalsia, Kaithal, Patiala State, Nabha State, Jind State, Thanesar, Maler Kotla, Ludhiana, Kapurthala State, Ambala, Ferozpur and Faridkot State, among others. While these Sikh states had been set up by the Dal Khalsa, they did not become part of the Sikh Empire and there was a mutual ban on warfare following the treaty of Amritsar in 1809 (in which the empire forfeited the claim to the Cis-Sutlej States, and the British were not to interfere north of the Sutlej or in the empire's existing territory south of the Sutlej), following attempts by Ranjit Singh to wrest control of these states from the British between 1806 and 1809.<br><br>

        The Sikh crossing of the Sutlej, following British militarization of the border with Punjab (from 2,500 men and six guns in 1838 to 17,612 men and 66 guns in 1844, and 40,523 men and 94 guns in 1845), and plans on using the newly conquered territory of Sindh as a springboard to advance on the Sikh-held region of Multan, would eventually result in conflict with the British.

        `,
    },
    {
        id: 20,
        singleTitle: `Hyder Ali`,
        time1: `1761CE`,
        singleCategory: `Mysore`,
        time2: `1782CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/d/de/Hyder_Ali.jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Royal_seal_of_Mysore%2C_Islamic_Museum%2C_Qatar.JPG/800px-Royal_seal_of_Mysore%2C_Islamic_Museum%2C_Qatar.JPG",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hyder_Ally%27s_Tomb.jpg/800px-Hyder_Ally%27s_Tomb.jpg",
        info: `
        Hyder Ali, Haidarālī (c. 1720 – 7 December 1782) was the Sultan and de facto ruler of the Kingdom of Mysore in southern India. Born as Hyder Ali Khan,[citation needed] he distinguished himself as a soldier, eventually drawing the attention of Mysore's rulers. Rising to the post of Dalavayi (commander-in-chief) to Krishnaraja Wodeyar II, he came to dominate the titular monarch and the Mysore government. He became the de facto ruler of Mysore as Sarvadhikari (Chief Minister) by 1761. During intermittent conflicts against the East India Company during the First and Second Anglo–Mysore Wars, Hyder Ali was a military leader.<br><br>

        Though illiterate, Hyder Ali concluded an alliance with the French, and used the services of French workmen in raising his artillery and arsenal. His rule of Mysore was characterised by frequent warfare with his neighbours and rebellion within his territories. This was not unusual for the time as much of the Indian subcontinent was then in turmoil. He left his eldest son, Tipu Sultan, an extensive kingdom bordered by the Krishna River in the north, the Eastern Ghats in the east and the Arabian Sea in the west.<br><br>

        The exact date of Hyder Ali's birth is not known with certainty. He was born to Fath Muhammad and Lal Bai (though it is not confirmed if Lal bai was actually his mother's name). Various historical sources provide dates ranging between 1717 and 1722 for his birth. There are also some variations in reports of his ancestry. According to some accounts, his grandfather was descended from a line tracing their lineage back to Baghdad, while another traces his lineage instead to the area of present-day Afghanistan or Punjab. In a third account, written by one of his French military officers, hyder himself claimed descent from the Arabs Bani Hashim clan of the Quraysh, the tribe of Muhammad. His father, Fath Muhammad, was born in Kolar, and served as a commander of 50 men in the bamboo rocket artillery (mainly used for signalling) in the army of the Nawab of Carnatic. Fath Muhammad eventually entered the service of the Wodeyar Rajas of the Kingdom of Mysore, where he rose to become a powerful military commander. The Wodeyars awarded him Budikote as a jagir (land grant), where he then served as Naik (Lord).<br><br>

        Hyder Ali was born in Budikote, Kolar district; he was Fath Muhammad's fifth child, and the second by his third wife. His early years are not well documented; he entered military service along with his brother Shahbaz after their father died in combat. After serving for a number of years under the rulers of Arcot, they came to Seringapatam, where Hyder's uncle served. He introduced them to Devaraja, the dalwai (chief minister, military leader, and virtual ruler) of Krishnaraja Wodeyar II, and his brother Nanjaraja, who also held important ministerial posts.[10] hyder and his brother were both given commands in the Mysorean army; Hyder served under Shahbaz, commanding 100 cavalry and 2,000 infantry
        `,
        info1: `Hyder Ali wearing a Mughal style Turban and uniform of Mysore.`,
        info2: `Royal Seal of Mysore.`,
        info3: `Tomb of Hyder Ali.`,
    },
    {
        id: 21,
        singleTitle: `Tipu Sultan`,
        time1: `1782CE`,
        singleCategory: `Mysore`,
        time2: `1799CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/en/d/df/TipuSultanPic.jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Double_paisa_of_Tipu_Sultan.jpg/1280px-Double_paisa_of_Tipu_Sultan.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/9/97/Gumbaz.jpg",
        info: `
        Hyder Ali, Haidarālī (c. 1720 – 7 December 1782) was the Sultan and de facto ruler of the Kingdom of Mysore in southern India. Born as Hyder Ali Khan,[citation needed] he distinguished himself as a soldier, eventually drawing the attention of Mysore's rulers. Rising to the post of Dalavayi (commander-in-chief) to Krishnaraja Wodeyar II, he came to dominate the titular monarch and the Mysore government. He became the de facto ruler of Mysore as Sarvadhikari (Chief Minister) by 1761. During intermittent conflicts against the East India Company during the First and Second Anglo–Mysore Wars, Hyder Ali was a military leader.<br><br>

        Though illiterate, Hyder Ali concluded an alliance with the French, and used the services of French workmen in raising his artillery and arsenal. His rule of Mysore was characterised by frequent warfare with his neighbours and rebellion within his territories. This was not unusual for the time as much of the Indian subcontinent was then in turmoil. He left his eldest son, Tipu Sultan, an extensive kingdom bordered by the Krishna River in the north, the Eastern Ghats in the east and the Arabian Sea in the west.<br><br>

        The exact date of Hyder Ali's birth is not known with certainty. He was born to Fath Muhammad and Lal Bai (though it is not confirmed if Lal bai was actually his mother's name). Various historical sources provide dates ranging between 1717 and 1722 for his birth. There are also some variations in reports of his ancestry. According to some accounts, his grandfather was descended from a line tracing their lineage back to Baghdad, while another traces his lineage instead to the area of present-day Afghanistan or Punjab. In a third account, written by one of his French military officers, hyder himself claimed descent from the Arabs Bani Hashim clan of the Quraysh, the tribe of Muhammad. His father, Fath Muhammad, was born in Kolar, and served as a commander of 50 men in the bamboo rocket artillery (mainly used for signalling) in the army of the Nawab of Carnatic. Fath Muhammad eventually entered the service of the Wodeyar Rajas of the Kingdom of Mysore, where he rose to become a powerful military commander. The Wodeyars awarded him Budikote as a jagir (land grant), where he then served as Naik (Lord).<br><br>

        Hyder Ali was born in Budikote, Kolar district; he was Fath Muhammad's fifth child, and the second by his third wife. His early years are not well documented; he entered military service along with his brother Shahbaz after their father died in combat. After serving for a number of years under the rulers of Arcot, they came to Seringapatam, where Hyder's uncle served. He introduced them to Devaraja, the dalwai (chief minister, military leader, and virtual ruler) of Krishnaraja Wodeyar II, and his brother Nanjaraja, who also held important ministerial posts.[10] hyder and his brother were both given commands in the Mysorean army; Hyder served under Shahbaz, commanding 100 cavalry and 2,000 infantry
        `,
        info1: `Portrait of Tipu Sultan.`,
        info2: `Copper double paisa during of Tipu Sultan.`,
        info3: `The tomb of Tipu Sultan at Srirangapatna.`,
    },
    {
        id: 22,
        singleTitle: `Warren Hastings`,
        time1: `1773CE`,
        singleCategory: `Company`,
        time2: `1785CE`,
        info: `
        Warren Hastings (6 December 1732 – 22 August 1818) was a British colonial administrator, who served as the first Governor of the Presidency of Fort William (Bengal), the head of the Supreme Council of Bengal, and so the first de facto Governor-General of Bengal in 1772–1785. He and Robert Clive are credited with laying the foundation of the British Empire in India. He was an energetic organizer and reformer. In 1779–1784 he led forces of the East India Company against a coalition of native states and the French. Finally, the well-organized British side held its own, while France lost influence in India. In 1787, he was accused of corruption and impeached, but after a long trial acquitted in 1795. He was made a Privy Councillor in 1814.<br><br>

        In 1758 Hastings became the British Resident in the Bengali capital of Murshidabad – a major step forward in his career – at the instigation of Clive. His role in the city was ostensibly that of an ambassador but as Bengal came increasingly under the dominance of the East India Company he was often given the task of issuing orders to the new Nawab on behalf of Clive and the Calcutta authorities. Hastings personally sympathised with Mir Jafar and regarded many of the demands placed on him by the company as excessive. Hastings had already developed a philosophy that was grounded in trying to establish a more understanding relationship with India's inhabitants and their rulers, and he often tried to mediate between the two sides.<br><br>

        During Mir Jafar's reign the East India Company exerted an increasingly large role in the running of the region, and effectively took over the defence of Bengal against external invaders when Bengal's troops proved insufficient for the task. As he grew older, Mir Jafar became gradually less effective in ruling the state, and in 1760 EIC troops ousted him from power and replaced him with Mir Qasim. Hastings expressed his doubts to Calcutta over the move, believing they were honour-bound to support Mir Jafar, but his opinions were overruled. Hastings established a good relationship with the new Nawab and again had misgivings about the demands he relayed from his superiors. In 1761 he was recalled and appointed to the Calcutta council.
        `,
    },
    {
        id: 23,
        singleTitle: `Charles Cornwallis`,
        time1: `1786CE`,
        singleCategory: `Company`,
        time2: `1793CE`,
        info: `
        Charles Cornwallis, 1st Marquess Cornwallis, KG, PC (31 December 1738 – 5 October 1805), styled Viscount Brome between 1753 and 1762 and known as the Earl Cornwallis between 1762 and 1792, was a British Army general and official. In the United States and the United Kingdom he is best remembered as one of the leading British generals in the American War of Independence. His surrender in 1781 to a combined American and French force at the siege of Yorktown ended significant hostilities in North America. He later served as a civil and military governor in Ireland, where he helped bring about the Act of Union; and in India, where he helped enact the Cornwallis Code and the Permanent Settlement.<br><br>

        Born into an aristocratic family and educated at Eton and Cambridge, Cornwallis joined the army in 1757, seeing action in the Seven Years' War. Upon his father's death in 1762 he became Earl Cornwallis and entered the House of Lords. From 1766 until 1805 he was Colonel of the 33rd Regiment of Foot. He next saw military action in 1776 in the American War of Independence. Active in the advance forces of many campaigns, in 1780 he inflicted an embarrassing defeat on the American army at the Battle of Camden. He also commanded British forces in the March 1781 Pyrrhic victory at Guilford Court House. Cornwallis surrendered his army at Yorktown in October 1781 after an extended campaign through the Southern states, marked by disagreements between him and his superior, General Sir Henry Clinton.<br><br>

        Despite this defeat, Cornwallis retained the confidence of successive British governments and continued to enjoy an active career. Knighted in 1786, he was in that year appointed to be Governor-General and commander-in-chief in India. There he enacted numerous significant reforms within the East India Company and its territories, including the Cornwallis Code, part of which implemented important land taxation reforms known as the Permanent Settlement. From 1789 to 1792 he led British and Company forces in the Third Anglo-Mysore War to defeat the Mysorean ruler Tipu Sultan.<br><br>

        Returning to Britain in 1794, Cornwallis was given the post of Master-General of the Ordnance. In 1798 he was appointed Lord Lieutenant and Commander-in-chief of Ireland, where he oversaw the response to the 1798 Irish Rebellion, including a French invasion of Ireland, and was instrumental in bringing about the Union of Great Britain and Ireland. Following his Irish service, Cornwallis was the chief British signatory to the 1802 Treaty of Amiens and was reappointed to India in 1805. He died in India not long after his arrival.
        `,
    },
    {
        id: 24,
        singleTitle: `John Shore`,
        time1: `1793CE`,
        singleCategory: `Company`,
        time2: `1798CE`,
        info: `
        John Shore, 1st Baron Teignmouth (5 October 1751 – 14 February 1834) was a British official of the East India Company who served as Governor-General of Bengal from 1793 to 1798. In 1798 he was created Baron Teignmouth in the Peerage of Ireland.<br><br>

        Shore was the first president of the British and Foreign Bible Society. A close friend of the orientalist Sir William Jones (1746–1794), Shore edited a memoir of Jones's life in 1804, containing many of Jones's letters.<br><br>

        Shore was appointed by the court of directors governor-general of India in succession to Cornwallis on 19 September 1792, and was created a baronet on 2 October following; Edmund Burke protested vainly. Shore embarked for India at the end of the month. On 10 March 1793 he arrived at Calcutta, where he remained without official employment or responsibility until the departure of Cornwallis. He succeeded to the government on 28 October 1793.<br><br>

        The period of Shore's rule as governor-general was comparatively uneventful. His policy was attacked as temporising and timid. He acquiesced in the invasion by the Mahrattas of the dominions of Ali Khan Asaf Jah II, the Nizam of Hyderabad; he permitted the growth of a French subsidiary force in the service of more than one native power; he thwarted Lord Hobart's efforts for extending the sphere of British influence; he allowed the growth of the Sikh states in northern India; and he looked on while Tipu Sahib was preparing for war. In these matters Shore faithfully obeyed his instructions.<br><br>

        Though he showed weakness in dealing with the mutiny of the officers of the Bengal army, he boldly settled the question of the Oudh succession, when he substituted Saadat Ali Khan II for Wazir Ali Khan, albeit at the cost of the Massacre of Benares. As a reward for his services Shore was created Baron Teignmouth, of Teignmouth in the peerage of Ireland by letters patent executed at Dublin on 3 March 1798.
        `,
    },
    {
        id: 25,
        singleTitle: `Richard Wellesley`,
        time1: `1798CE`,
        singleCategory: `Company`,
        time2: `1805CE`,
        info: `
        Richard Colley Wellesley, 1st Marquess Wellesley of Norragh, (20 June 1760 – 26 September 1842) was an Anglo-Irish politician and colonial administrator. He was styled as Viscount Wellesley until 1781, when he succeeded his father as 2nd Earl of Mornington. In 1799, he was granted the Irish peerage title of Marquess Wellesley. He first made his name as fifth Governor-General of India between 1798 and 1805, and he later served as Foreign Secretary in the British Cabinet and as Lord Lieutenant of Ireland. In 1799, his forces invaded Mysore and defeated Tipu, the Sultan of Mysore, in a major battle. He also initiated the Second Anglo-Maratha War.<br><br>

        He was the eldest son of The 1st Earl of Mornington, an Irish peer, and Anne, the eldest daughter of The 1st Viscount Dungannon. His younger brother, Arthur, was Field Marshal The 1st Duke of Wellington.<br><br>

        Mornington seems to have caught Pitt's large political spirit in the period 1798 to 1805. That both had consciously formed the design of expanding their influence in the Indian subcontinent to compensate for the loss of the American colonies is not proved; but the rivalry with France, which in Europe placed Britain at the head of coalition after coalition against the French, made Mornington aware of the necessity of ensuring French power did not reign supreme in India. On the voyage outwards, he formed the design of curbing French influence in the Deccan. Soon after his arrival, in April 1798, he learned that an alliance was being negotiated between Tipu Sultan and France. Mornington resolved to anticipate the action of the Sultan, and ordered preparations for war. The first step was to order the disbandment of the French troops entertained by the Nizam of Hyderabad.<br><br>

        The capture of Mysore followed in February 1799, and the campaign was brought to a swift conclusion by the capture of Seringapatam on 4 May 1799 and the death of Tipu Sultan, who was killed in action. In 1803, the restoration of the Peshwa proved the prelude to the Mahratha war against Sindhia and the raja of Berar, in which his brother Arthur took a leading role. The result of these wars and of the treaties which followed them was that French influence in India was reduced to Pondicherry, and that Britain acquired increased influence in the heartlands of central India. He proved to be a skilled administrator, and picked two of his talented brothers for his staff: Arthur was his military adviser, and Henry was his personal secretary. He founded Fort William College, a training centre intended for those who would be involved in governing India. In connection with this college, he established the governor-general's office, to which civilians who had shown talent at the college were transferred, in order that they might learn something of the highest statesmanship in the immediate service of their chief. He endeavoured to remove some of the restrictions on the trade between Europe and Asia. He took the time to publish an appreciation of British composer Harriet Wainwright's opera Comala in the Calcutta Post on 27 April 1804.<br><br>

        Both the commercial policy of Wellesley and his educational projects brought him into hostility with the court of directors, and he more than once tendered his resignation, which, however, public necessities led him to postpone till the autumn of 1805. He reached England just in time to see Pitt before his death. He had been created a Peer of Great Britain in 1797 as Baron Wellesley, and in 1799 became Marquess Wellesley in the Peerage of Ireland. He formed an enormous collection of over 2,500 painted miniatures in the Company style of Indian natural history. A motion by James Paull (MP) to impeach Wellesley due to his expulsion of British traders from Oudh was defeated in the House of Commons by 182 votes to 31 in 1808. Mornington also disapproved of liaisons between Company officials and soldiers and locals, seeing them as improper.
        `,
    },
    {
        id: 26,
        singleTitle: `Francis Rawdon-Hastings`,
        time1: `1813CE`,
        singleCategory: `Company`,
        time2: `1823CE`,
        info: `
        Francis Edward Rawdon-Hastings, 1st Marquess of Hastings, KG, PC (9 December 1754 – 28 November 1826), styled The Honourable Francis Rawdon from birth until 1762, Lord Rawdon between 1762 and 1783, The Lord Rawdon from 1783 to 1793 and The Earl of Moira between 1793 and 1816, was an Anglo-Irish politician and military officer who served as Governor-General of India from 1813 to 1823. He had also served with British forces for years during the American Revolutionary War and in 1794 during the War of the First Coalition. He took the additional surname "Hastings" in 1790 in compliance with the will of his maternal uncle, Francis Hastings, 10th Earl of Huntingdon.<br><br>

        Through the influence of the Prince-Regent, Moira was appointed Governor-General of the Presidency of Fort William, effectively the Governor-General of India, on 11 November 1812. His tenure as Governor-General was a memorable one, overseeing the victory in the Gurkha War (1814–1816); the final conquest of the Marathas in 1818; and the purchase of the island of Singapore in 1819.<br><br>

        After delays clearing his affairs, he reached Madras on 11 September 1813. In October, he settled in at Calcutta and assumed office. British India then consisted of Madras, Bengal, and Bombay. He commanded an army of 15,000 British regulars, a Bengal army of 27 regiments of native infantry, and eight regiments of cavalry; a Madras army, led by General John Abercrombie of 24 regiments of native infantry, and eight regiments of native cavalry.
        `,
    },
    {
        id: 27,
        singleTitle: `Lord William Bentinck`,
        time1: `1834CE`,
        singleCategory: `Company`,
        time2: `1835CE`,
        info: `
        Lieutenant General Lord William Henry Cavendish-Bentinck (14 September 1774 – 17 June 1839), known as Lord William Bentinck, was a British soldier and statesman. He served as Governor-General of India from 1828 to 1835. He has been credited for significant social and educational reforms in India, including abolishing sati, he forbade women to witness the cremations on the ghats of Varanasi, suppressing female infanticide and human sacrifice. Bentinck said that "the dreadful responsibility hanging over his head in this world and the next, if… he was to consent to the continuance of this practice (sati) one moment longer." Bentinck after consultation with the army and officials passed the Bengal Sati Regulation, 1829 there was little opposition. The only challenge came from the Dharma Sabha which appealed in the Privy Council, however the ban on Sati was upheld. He ended lawlessness by eliminating thuggee – which had existed for over 450 years – with the aid of his chief captain, William Henry Sleeman. Along with Thomas Babington Macaulay he introduced English as the language of instruction in India.<br><br>

        Lord William Bentinck was the first governor general of British-occupied India . Everyone else before him was the governor of Bengal (Fort William) On his return to England, Bentinck served in the House of Commons for some years before being appointed Governor-General of Bengal in 1828. His principal concern was to turn around the loss-making East India Company, to ensure that its charter would be renewed by the British government.<br><br>

        Lady William Cavendish-Bentinck (c 1783–1843) (Ellen Sharples) Bentinck engaged in an extensive range of cost-cutting measures, earning the lasting enmity of many military men whose wages were cut. Although historians emphasise his more efficient financial management, his modernising projects also included a policy of westernisation, influenced by the Utilitarianism of Jeremy Bentham and James Mill, which was more controversial. He reformed the court system
        `,
    },
    {
        id: 28,
        singleTitle: `George Eden`,
        time1: `1836CE`,
        singleCategory: `Company`,
        time2: `1842CE`,
        info: `
        George Eden, 1st Earl of Auckland, (25 August 1784 – 1 January 1849) was an English Whig politician and colonial administrator. He was thrice First Lord of the Admiralty and also served as Governor-General of India between 1836 and 1842.<br><br>

        Born in Beckenham, Kent, Auckland was the second son of William Eden, 1st Baron Auckland, and Eleanor, daughter of Sir Gilbert Elliot, 3rd Baronet. His sister was the traveller and author Emily Eden, who would visit India for long periods and write about her experiences. He was educated at Eton, and Christ Church, Oxford, and was called to the Bar, Lincoln's Inn, in 1809. He became heir apparent to the barony after his elder brother William Eden drowned in the Thames in 1810.<br><br>

        In 1836 Lord Auckland was appointed of Governor-General of India. His private secretary was John Russell Colvin, who rose to be lieutenant-governor of the North-West Provinces and named his son Auckland Colvin after him. As a legislator, he dedicated himself especially to the improvement of native schools and the expansion of the commercial industry of India.<br><br>

        But complications in Afghanistan interrupted this work in 1838. Lord Auckland decided on war, and on 1 October 1838 in Simla published the Simla Manifesto, dethroning Dost Mahommed Khan. After successful early operations he was created Baron Eden, of Norwood in the County of Surrey, and Earl of Auckland. However the Afghan campaign ultimately ended in disaster. He handed over the governor-generalship to Lord Ellenborough and returned to England the following year.
        `,
    },
    {
        id: 29,
        singleTitle: `James Broun-Ramsay`,
        time1: `1848CE`,
        singleCategory: `Company`,
        time2: `1856CE`,
        info: `
        James Andrew Broun-Ramsay, 1st Marquess of Dalhousie (22 April 1812 – 19 December 1860), also known as Lord Dalhousie, styled Lord Ramsay until 1838 and known as The Earl of Dalhousie between 1838 and 1849, was a Scottish statesman and colonial administrator in British India. He served as Governor-General of India from 1848 to 1856.<br><br>

        He established the foundations of the modern educational system in India by adding mass education in addition to elite higher education. He introduced passenger trains in railways, the electric telegraph and uniform postage, which he described as the "three great engines of social improvement". He also founded the Public Works Department in India. To his supporters he stands out as the far-sighted Governor-General who consolidated East India Company rule in India, laid the foundations of its later administration, and by his sound policy enabled his successors to stem the tide of rebellion.<br><br>

        His period of rule in India directly preceded the transformation into the Victorian Raj period of Indian administration. He was denounced by many in Britain on the eve of his death as having failed to notice the signs of the brewing Indian Rebellion of 1857, having aggravated the crisis by his overbearing self-confidence, centralizing activity and expansive annexations.<br><br>

        As Governor-General of India and Governor of Bengal on 12 January 1848, and shortly afterwards he was honoured with the green ribbon of the Order of the Thistle. During this period, he was an extremely hard worker, often working sixteen to eighteen hours a day. The shortest workday Dalhousie would take began at half-past eight and would continue until half-past five, remaining at his desk even during lunch. During this period, he sought to expand the reach of the empire and rode long distances on horseback, in spite of having a bad back.<br><br>

        In contrast to many of the past leaders of the British Empire in India, he saw himself as an Orientalist monarch and believed his rule was that of a modernizer, attempting to bring the British intellectual revolution to India. A staunch utilitarian, he sought to improve Indian society under the prevalent Benthamite ideals of the period. However, in his attempt to do so he ruled with authoritarianism, believing these means were the most likely to increase the material development and progress of India. His policies, especially the doctrine of lapse, contributed to a growing sense of discontent among sectors of Indian society and therefore greatly contributed to the Great Indian Uprising of 1857, which directly followed his departure from India.<br><br>

        In 1849, under Dalhousie's command, the British captured the princely state of Punjab. In the process he captured the famous Koh-i-Noor diamond from the twelve-year old Punjabi Maharaja Duleep Singh. According to usual practise the treasury of Duleep Singh was considered war booty and Duleep Singh was forced to hand over the diamond. The Koh-i-Noor diamond was presented to Queen Victoria and displayed in 1851 and at the Dublin Exhibition in 1853 and the World's Fair in London in 1862. The diamond features in a number of, often contradictory ways. It was afterall war booty and old-fashioned plunder imperialism (Kinsey D.C. 2009, 392). In 1858 and 1882 Duleep Singh, at that time living in England, reclaimed the Koh-i-Noor diamond arguing that it has been taken unjustly and without compensation.
        `,
    },
]

const btns = document.querySelectorAll('.menu-btn');
const mainContainer = document.querySelector('.age-container');
const subContainer = document.querySelector('.age-sub-container');

btns.forEach(function (btn) {

    btn.addEventListener('click', function (e) {
        e.stopImmediatePropagation();
        const category = e.currentTarget.dataset.id;

        const modernCat = modern.filter(function (item) {
            if (item.category === category) {
                return item;
            }
        });

        const listCat = modernList.filter(function (item) {
            if (item.singleCategory === category) {
                return item;
            }
        })
        displayMain(modernCat);
        if (category === 'Sur'|| category === "Sikh" || category === "Company") {
            displaySub2(listCat);
        } else {
            displaySub(listCat);
        }


    });
});

function displayMain(Item) {
    let displayItem = Item.map(function (val) {
        return `<h2>${val.title}</h2>
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

function displaySub(Item) {
    let subItem = Item.map(function (val) {
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
                <div class="timeline">
                    <h4>${val.time1}</h4>
                    <article></article>
                    <h4>${val.time2}</h4>
                </div>
        
                
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