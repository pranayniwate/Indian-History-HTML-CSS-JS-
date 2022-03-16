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
    document.getElementById("Delhi").click();

});

const lateMedieval =[
    {
        id: 1,
        title: `Delhi Sultanate`,
        category: `Delhi`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Tughlaq_dynasty_1321_-_1398_ad.PNG",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Qutab_Minar_mausoleum.jpg/800px-Qutab_Minar_mausoleum.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tomb_of_Ghiyasuddin_Tughlaq_and_side_tomb_%283319047170%29.jpg/800px-Tomb_of_Ghiyasuddin_Tughlaq_and_side_tomb_%283319047170%29.jpg",
        desc: `
        The Delhi Sultanate was an Islamic empire based in Delhi that stretched over large parts of South Asia for 320 years (1206–1526). Five dynasties ruled over the Delhi Sultanate sequentially: the Mamluk dynasty (1206–1290), the Khalji dynasty (1290–1320), the Tughlaq dynasty (1320–1414), the Sayyid dynasty (1414–1451), and the Lodi dynasty (1451–1526). It covered large swathes of territory in modern-day India, Pakistan, and Bangladesh as well as some parts of southern Nepal.<br><br>

        As a successor to the Ghurid dynasty, the Delhi Sultanate was originally one among a number of principalities ruled by the Turkic slave-generals of Muhammad Ghori (who had conquered large parts of northern India), including Yildiz, Aibek and Qubacha, that had inherited and divided the Ghurid territories amongst themselves. After a long period of infighting, the Mamluks were overthrown in the Khalji revolution which marked the transfer of power from the Turks to a heterogeneous Indo-Muslim nobility. Both of the resulting Khalji and Tughlaq dynasties respectively saw a new wave of rapid Muslim conquests deep into South India.The sultanate finally reached the peak of its geographical reach during the Tughlaq dynasty, occupying most of the Indian subcontinent under Muhammad bin Tughluq. This was followed by decline due to Hindu reconquests, Hindu kingdoms such as the Vijayanagara Empire and Mewar asserting independence, and new Muslim sultanates such as the Bengal Sultanate breaking off.In 1526, the Sultanate was conquered and succeeded by the Mughal Empire.<br><br>

        The sultanate is noted for its integration of the Indian subcontinent into a global cosmopolitan culture(as seen concretely in the development of the Hindustani language and Indo-Islamic architecture), being one of the few powers to repel attacks by the Mongols (from the Chagatai Khanate) and for enthroning one of the few female rulers in Islamic history, Razia Sultana, who reigned from 1236 to 1240. Bakhtiyar Khalji's annexations were responsible for the large-scale desecration of Hindu and Buddhist temples (leading to the decline of Buddhism in East India and Bengal), and the destruction of universities and libraries. Mongolian raids on West and Central Asia set the scene for centuries of migration of fleeing soldiers, intelligentsia, mystics, traders, artists, and artisans from those regions into the subcontinent, thereby establishing Islamic culture in India and the rest of the region.
        `,
        desc1: `Map of the Delhi Sultanate at its zenith`,
        desc2: `The Qutb Minar (left, begun c. 1200) next to the Alai Darwaza gatehouse (1311).`,
        desc3: `Tomb of Ghiyath al-Din Tughluq (d. 1325), Delhi`,
        subTitle: `Background`,
        subDesc: `
        The context behind the rise of the Delhi Sultanate in India was part of a wider trend affecting much of the Asian continent, including the whole of southern and western Asia: the influx of nomadic Turkic peoples from the Central Asian steppes. This can be traced back to the 9th century when the Islamic Caliphate began fragmenting in the Middle East, where Muslim rulers in rival states began enslaving non-Muslim nomadic Turks from the Central Asian steppes and raising many of them to become loyal military slaves called Mamluks. Soon, Turks were migrating to Muslim lands and becoming Islamicized. Many of the Turkic Mamluk slaves eventually rose up to become rulers, and conquered large parts of the Muslim world, establishing Mamluk Sultanates from Egypt to present-day Afghanistan, before turning their attention to the Indian subcontinent.<br><br>

        It is also part of a longer trend predating the spread of Islam. Like other settled, agrarian societies in history, those in the Indian subcontinent have been attacked by nomadic tribes throughout its long history. In evaluating the impact of Islam on the subcontinent, one must note that the northwestern subcontinent was a frequent target of tribes raiding from Central Asia in the pre-Islamic era. In that sense, the Muslim intrusions and later Muslim invasions were not dissimilar to those of the earlier invasions during the 1st millennium.<br><br>

        By 962 AD, Hindu and Buddhist kingdoms in South Asia faced a series of raids from Muslim armies from Central Asia. Among them was Mahmud of Ghazni, the son of a Turkic Mamluk military slave, who raided and plundered kingdoms in north India from east of the Indus river to west of Yamuna river seventeen times between 997 and 1030. Mahmud of Ghazni raided the treasuries but retracted each time, only extending Islamic rule into western Punjab.<br><br>

        The series of raids on north Indian and western Indian kingdoms by Muslim warlords continued after Mahmud of Ghazni. The raids did not establish or extend the permanent boundaries of the Islamic kingdoms. In contrast, the Ghurid Sultan Mu'izz ad-Din Muhammad Ghori (commonly known as Muhammad of Ghor) began a systematic war of expansion into north India in 1173. He sought to carve out a principality for himself and expand the Islamic world. Muhammad of Ghor created a Sunni Islamic kingdom of his own extending east of the Indus river, and he thus laid the foundation for the Muslim kingdom called the Delhi Sultanate. Some historians chronicle the Delhi Sultanate from 1192 due to the presence and geographical claims of Muhammad Ghori in South Asia by that time.<br><br>

        Ghori was assassinated in 1206, by Ismāʿīlī Shia Muslims in some accounts or by Khokhars in others. After the assassination, one of Ghori's slaves (or mamluks, Arabic: مملوك), the Turkic Qutb al-Din Aibak, assumed power, becoming the first Sultan of Delhi.
        `,
        listTitle: `Dynasties`,
    },
    {
        id: 2,
        title: `Pandyan Dynasty`,
        category: `Pandyan`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/ImperioPandya1251-1283AD.svg/250px-ImperioPandya1251-1283AD.svg.png",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Temple_between_hill_symbols_and_elephant_coin_of_the_Pandyas_Sri_Lanka_1st_century_CE.jpg/800px-Temple_between_hill_symbols_and_elephant_coin_of_the_Pandyas_Sri_Lanka_1st_century_CE.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/S-TN-71_Vettuvan_Koil_Tuticorin.jpg/1024px-S-TN-71_Vettuvan_Koil_Tuticorin.jpg",
        desc: `
        The Pandya dynasty, also known as the Pandyas of Madurai, was a dynasty of south India, one of the three famous Tamil lineages, the other two being the Chola and the Chera. Extant since at least the 4th to 3rd centuries BC, the dynasty passed through two periods of imperial dominance, the 6th to 10th centuries CE, and under the 'Later Pandyas' (13th to 14th centuries CE). The Pandyas ruled extensive territories, at times including the large portions of present-day south India and northern Sri Lanka through collateral branches subject to Madurai.<br><br>

        The rulers of the three Tamil dynasties were referred to as the "three crowned rulers (the mu-ventar) of the Tamil country". The age and the antiquity of the Pandya dynasty are difficult to establish. The early Pandya chieftains ruled their country (the Pandya nadu) from time immemorial, which included the inland city of Madurai and the southern port of Korkai. The Pandyas are celebrated in the earliest available Tamil poetry ("the Sangam literature"). Graeco-Roman accounts (as early as 4th century CE), the edicts of Maurya emperor Asoka, coins with legends in Tamil-Brahmi script, and Tamil-Brahmi inscriptions suggest the continuity of the Pandya dynasty from the 3rd century CE to the early centuries CE. The early historic Pandyas faded into obscurity upon the rise of the Kalabhra dynasty in south India.<br><br>

        From the 6th century to the 9th century CE, the Chalukyas of Badami or Rashtrakutas of the Deccan, the Pallavas of Kanchi, and Pandyas of Madurai dominated the politics of south India. The Pandyas at one time or another ruled or invaded the fertile estuary of Kaveri (the Chola country), the ancient Chera country (Kongu and central Kerala) and Venadu (south Kerala), the Pallava country and Sri Lanka. The Pandyas went into decline with the rise of the Cholas of Tanjore in the 9th century and were in constant conflict with them. The Pandyas allied themselves with the Sinhalese (Sri Lanka) and the Cheras in harassing the Chola Empire until it found an opportunity for reviving its fortunes during the late 13th century.<br><br>

        The Pandyas entered their "golden age" under Maravarman I and Jatavarman Sundara Pandya I (13th century). Some early efforts by Maravarman I to expand into the ancient Chola country were effectively checked by the Hoysalas. Jatavarman I (c. 1251) successfully expanded the empire into the Telugu country (as far north as Nellore), south Kerala and conquered northern Sri Lanka. The city of Kanchi became a secondary capital of the Pandyas. The Hoysalas, in general, were confined to Mysore Plateau and even king Somesvara was killed in a battle with Pandyas. Maravarman Kulasekhara I (c. 1268) defeated an alliance of the Hoysalas and the Cholas (1279) and invaded Sri Lanka. The venerable Tooth Relic of the Buddha was carried away by the Pandyas. During this period the rule of the empire was shared among several royals, one of them enjoying primacy over the rest. An internal crisis in the Pandya empire coincided with the Khalji invasion of south India in 1310–11. The ensuing political crisis saw more sultanate raids and plunder, the loss of south Kerala (1312), and north Sri Lanka (1323) and the establishment of the Madurai sultanate (c. 1334). In the mid-16th century, the Vijayanagara governors of Madurai declared independence and established the Madurai Nayak dynasty. The Pandyas of Ucchangi (9th–13th century), in the Tungabhadra Valley were related to the Pandyas of Madurai.<br><br>

        According to tradition, the legendary Sangams ("the Academies") were held in Madurai under the patronage of the Pandyas, and some of the Pandya rulers claim to be poets themselves. The Pandya country was home to a number of renowned temples including Meenakshi Temple in Madurai. After the revival of the Pandya power by Kadungon (7th century AD), the Shaivite nayanars and the Vaishnavite alvars rose to prominence. It is known that the Pandya rulers followed Jainism for a short period of time in history.
        `,
        desc1: `Pandyan empire under greatest extent`,
        desc2: `Pandya coin with temple between hills and elephant.`,
        desc3: `Vettuvan Koil, Kalugumalai, Tuticorin. Pandya kingdom, 8th century CE`,
        subTitle: `Origin`,
        subDesc: `
        The word pandya is thought to be derived from the ancient Tamil word "pandu" meaning "old". The theory suggests that in early historic Tamil lexicon the word pandya means old country in contrast with Chola meaning new country, Chera meaning hill country and Pallava meaning branch in Sanskrit. The etymology of pandya is still a matter of considerable speculation among scholars. Apart from the derivations mentioned, a number of other theories do appear in historical studies.<br><br>

        According to the ancient Tamil legends, the three brothers Cheran, Cholan and Pandyan ruled in common at the southern city of Korkai. While Pandya remained at home, his two brothers Cheran and Cholan after a separation founded their own kingdoms in north and west. Epic poem Silappatikaram mentions that the emblem of the Pandyas was that of a fish. Indian traditions such as the Great Epics and the Puranas often associate southern India with Sage Agastya (who had his ashrama in the south). Agastya appears prominently in medieval Tamil literature also.<br><br>

        Folklores attributes Alli Rani (meaning "the queen Alli") as one of the early historic rulers of the Pandyas. She is attributed as an "amazonian queen" whose servants were men and administrative officials and army were women. She is thought of ruling the whole western and northern coast of Sri Lanka from her capital Kudiramalai, where remains of what is thought of as her fort are found. She is sometimes seen as an incarnation of the Pandya associated gods, Meenakshi and Kannagi.<br><br>
        `,
        listTitle: `Pandyan Rulers`,
    },
    {
        id: 3,
        title: `Vijayanagara`,
        category: `Vijayanagara`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Vijayanagara-empire-map.svg/800px-Vijayanagara-empire-map.svg.png",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Panaromic_view_of_the_natural_fortification_and_landscape_at_Hampi.jpg/1024px-Panaromic_view_of_the_natural_fortification_and_landscape_at_Hampi.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/2/22/Vijayanagara_royal_insignia.jpg",
        desc: `
        The Vijayanagara Empire, also called Karnata Kingdom, was based in the Deccan Plateau region in South India. It was established in 1336 by the brothers Harihara I and Bukka Raya I of the Sangama dynasty, members of a pastoralist cowherd community, possibly Kuruba, that claimed Yadava lineage. The empire rose to prominence as a culmination of attempts by the southern powers to ward off Islamic invasions by the end of the 13th century. At its peak, it subjugated almost all of South India's ruling families and pushed the sultans of the Deccan beyond the Tungabhadra-Krishna river doab region, in addition to annexing modern day Odisha (ancient Kalinga) from the Gajapati Kingdom thus becoming a notable power. It lasted until 1646, although its power declined after a major military defeat in the Battle of Talikota in 1565 by the combined armies of the Deccan sultanates. The empire is named after its capital city of Vijayanagara, whose ruins surround present day Hampi, now a World Heritage Site in Karnataka, India. The wealth and fame of the empire inspired visits by and writings of medieval European travelers such as Domingo Paes, Fernão Nunes, and Niccolò de' Conti. These travelogues, contemporary literature and epigraphy in the local languages and modern archeological excavations at Vijayanagara has provided ample information about the history and power of the empire.<br><br>

        The empire's legacy includes monuments spread over South India, the best known of which is the group at Hampi. Different temple building traditions in South and Central India were merged into the Vijayanagara architecture style. This synthesis inspired architectural innovations in the construction of Hindu temples. Efficient administration and vigorous overseas trade brought new technologies to the region such as water management systems for irrigation. The empire's patronage enabled fine arts and literature to reach new heights in Kannada, Telugu, Tamil, and Sanskrit with topics such as astronomy, mathematics, medicine, fiction, musicology, historiography and theater gaining popularity. The classical music of Southern India, Carnatic music, evolved into its current form. The Vijayanagara Empire created an epoch in the history of Southern India that transcended regionalism by promoting Hinduism as a unifying factor.
        `,
        desc1: `Extent of Vijayanagara Empire, 1446, 1520 CE.`,
        desc2: `Medieval City of Vijayanagara, a natural fortress.`,
        desc3: `A relief of the Vijayanagara insignia: boar, sun, moon, and dagger.`,
        subTitle: `Origin`,
        subDesc: `
        Before the early 14th-century rise of the Vijayanagara Empire, the Hindu states of the Deccan – the Yadava Empire of Devagiri, the Kakatiya dynasty of Warangal, and the Pandyan Empire of Madurai – were repeatedly raided and attacked by Muslims from the north. By 1336 the upper Deccan region (modern-day Maharashtra and Telangana) had been defeated by armies of Sultan Alauddin Khalji and Muhammad bin Tughluq of the Delhi Sultanate.<br><br>

        Further south in the Deccan region, Hoysala commander Singeya Nayaka-III declared independence after the Muslim forces of the Delhi Sultanate defeated and captured the territories of the Yadava Empire in 1294 CE. He created the Kampili kingdom near Gulbarga and Tungabhadra River in the northeastern parts of present-day Karnataka state. The kingdom collapsed after a defeat by the armies of Delhi Sultanate and upon their defeat, the populace committed a jauhar (ritual mass suicide) in c. 1327–28. The Vijayanagara Kingdom was founded in 1336 CE as a successor to the hitherto prosperous Hindu kingdoms of the Hoysalas, the Kakatiyas, and the Yadavas with the breakaway Kampili Kingdom adding a new dimension to the resistance to the Muslim invasion of South India.<br><br>

        Two theories have been proposed regarding the linguistic origins of the Vijayanagara empire. One is that Harihara I and Bukka I, the founders of the empire, were Kannadigas and commanders in the army of the Hoysala Empire stationed in the Tungabhadra region to ward off Muslim invasions from Northern India. Another theory is that Harihara and Bukkaraya were Telugu people, first associated with the Kakatiya Kingdom, who took control of the northern parts of the Hoysala Empire during its decline. They were believed to have been captured by the army of Ulugh Khan at Warangal. According to tradition, based on a Telugu-narrative, the founders were supported and inspired by Vidyaranya, a saint at the Sringeri monastery, to fight the Muslim invasion of South India, but the role of Vidyaranya in the founding of the Vijayanagara Empire is not certain.
        `,
        listTitle: `Dynasties`,
    },
    {
        id: 4,
        title: `Bengal Sultanate`,
        category: `Bengal`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Mint_Towns_and_Realm_of_Bengal_Sultanate.png/656px-Mint_Towns_and_Realm_of_Bengal_Sultanate.png",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Silver_coin_of_Danujamarddana.jpg/220px-Silver_coin_of_Danujamarddana.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Adina_Mosque_at_Malda_district_of_West_Bengal_07.jpg/1024px-Adina_Mosque_at_Malda_district_of_West_Bengal_07.jpg",
        desc: `
        The Sultanate of Bengal was an empire based in Bengal for much of the 14th, 15th and 16th centuries. It was the dominant power of the Ganges–Brahmaputra Delta, with a network of mint towns spread across the region. The Bengal Sultanate had a circle of vassal states, including Odisha in the southwest, Arakan in the southeast, and Tripura in the east. Its raids and conquests reached Nepal in the north, Assam in the east, and Jaunpur and Varanasi in the west. The Bengal Sultanate controlled large parts of the northern, eastern and northeastern subcontinent during its five dynastic periods, reaching its peak under Hussain Shahi dynasty. It was reputed as a thriving trading nation and one of Asia's strongest states. Its decline began with an interregnum by the Suri Empire, followed by Mughal conquest and disintegration into petty kingdoms. The Bengali Muslim, Assamese Muslim and Arakanese Muslim communities trace their history to the Bengal Sultanate.<br><br>

        The Bengal Sultanate was a Sunni Muslim monarchy with Indo-Turkic, Bengali, Arab, Abyssinian, Pashtun and Persian elites. Its two most prominent dynasties were the Ilyas Shahi and Hussain Shahi Sultans. It was also ruled by periods of Bengali Sultans; Pashtun Sultans; and Abyssinian Sultans. The empire was known for its religious pluralism where non-Muslim communities co-existed peacefully. While Persian was used as the primary official, diplomatic and commercial language, it was under the Sultans that Bengali first received court recognition as an official language. The cities of the Bengal Sultanate are termed as Mint Towns where the historical taka was minted. These cities were adorned with stately medieval buildings. In 1500, the royal capital of Gaur was the fifth-most populous city in the world. Other notable cities included the initial royal capital of Pandua, the economic hub of Sonargaon, the Mosque City of Bagerhat, and the seaport and trading hub of Chittagong. The Bengal Sultanate was connected to states in Asia, Africa, the Indian Ocean, and Europe through maritime links and overland trade routes. The Bengal Sultanate was a major trading center on the coast of the Bay of Bengal. It attracted immigrants and traders from different parts of the world. Bengali ships and merchants traded across the region, including in Malacca, China, and the Maldives.<br><br>

        The Bengal Sultanate was described by contemporary European and Chinese visitors as a prosperous kingdom. Due to the abundance of goods in Bengal, the region was described as the "richest country to trade with". The Bengal Sultanate left a strong architectural legacy. Buildings from the period show foreign influences merged into a distinct Bengali style. The Bengal Sultanate was also the largest and most prestigious authority among the independent medieval Muslim-ruled states in the history of Bengal.
        `,
        desc1: `Extent of Bengal Sultanate.`,
        desc2: `Coinage from Chandradwip, a vassal of the Bengal Sultanate.`,
        desc3: `Ruins of Adina Mosque, the largest mosque in the Indian subcontinent, in Pandua, the first capital of the Bengal Sultanate.`,
        subTitle: `Culture and Society`,
        subDesc: `
        The Bengali language was the most spoken language while Persian was an administrative and commercial language. Men wore white shirts, cotton fabrics of various colors, turbans, sarongs, lungis, dhutis, leather shoes, and belts to wrap their robes on the waist. Women wore cotton saris. Upper-class women wore gold jewelry. There were various classes of artisans, as well as physicians and fortune tellers. There was a class of musicians who would gather by the houses of the rich during dawn and play music; and they would be rewarded with wine, food and money during breakfast hours. Some men would have performances with a chained tiger. The Hindu minority did not eat beef. The streets and markets included bathing areas, eating and drinking places, and dessert shops. Betel nut was offered to guests. The population included royalty, aristocrats, natives and foreigners. Many of the rich built ships and went abroad for trade. Many were agriculturalists. Punishments for breaking the law included expulsion from the kingdom, as well as bamboo flogging.<br><br>

        Bengal received settlers from North India, the Middle East and Central Asia. They included Turks, Afghans, Persians and Arabs. An important migrant community were Persians. Many Persians in Bengal were teachers, lawyers, scholars and clerics. Mercenaries were widely imported for domestic, military and political service. One particular group of mercenaries were the Abyssinians.
        `,
        listTitle: `Periods in Bengal Sultanate`,
    },
]

const lateMedievalList = [
    {
        id: 1,
        singleTitle: `Mamluk Dynasty`,
        time1: `1206CE`,
        singleCategory: `Delhi`,
        time2: `1290CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/4/43/Mamluk_dynasty_1206_-_1290_ad.GIF",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Qutb_Complex_Shrine.JPG/800px-Qutb_Complex_Shrine.JPG",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Islamic_Sultanates._Bengal._Ghiyath_al-Din_%27Iwad._Governor%2C_AH_614-616_AD_1217-1220._Struck_in_the_name_of_Shams_al-Din_Iltutmish%2C_Sultan_of_Dehli.jpg/1280px-Islamic_Sultanates._Bengal._Ghiyath_al-Din_%27Iwad._Governor%2C_AH_614-616_AD_1217-1220._Struck_in_the_name_of_Shams_al-Din_Iltutmish%2C_Sultan_of_Dehli.jpg",
        info: `
        The Mamluk dynasty was founded in Northern India by Qutb ud-Din Aibak, a Turkic Mamluk general of the Ghurid Empire from Central Asia. The Mamluk dynasty ruled from 1206 to 1290; it was the first of five unrelated dynasties to rule as the Delhi Sultanate until 1526. Before the establishment of the Mamluk dynasty, Qutb al-Din Aibak's tenure as a Ghurid dynasty administrator lasted from 1192 to 1206, a period during which he led forays into the Gangetic plain and established control over some of the new areas.<br><br>

        A Mamluk was a soldier of slave origin who had converted to Islam. The phenomenon started in the 9th century and gradually the Mamluks became a powerful military class in various Muslim societies. Mamluks held political and military power most notably in Egypt, but also in the Levant, Iraq, and India.<br><br>

        In 1206, Muhammad of Ghor, Sultan of the Ghurid Empire, was assassinated. Since he had no children, his empire split into minor sultanates led by his former Mamluk generals. Taj-ud-Din Yildoz became the ruler of Ghazni, Muhammad bin Bakhtiyar Khilji got Bengal and Nasir-ud-Din Qabacha became the sultan of Multan. Qutb ud-Din Aibak became the sultan of Delhi, and that was the beginning of the Slave dynasty.<br><br>

        Aibak rose to power when his Ghurid overlord Muhammad of Ghor was assassinated. However, his reign as the Sultan of Delhi was short-lived as he died in 1210 and his son Aram Shah rose to the throne, only to be assassinated by Iltutmish in 1211.<br><br>

        The Sultanate under Iltutmish established cordial diplomatic contact with the Abbasid Caliphate between 1228–29 and had managed to keep India unaffected by the invasions of Genghis Khan and his successors. Following the death of Iltutmish in 1236 a series of weak rulers remained in power and a number of the noblemen gained autonomy over the provinces of the Sultanate. Power shifted hands from Rukn ud din Firuz to Razia Sultana until Ghiyas ud din Balban rose to the throne and successfully repelled both external threats to the Sultanate from the Chagatai Khanate invasions and internal threats from the rebellious sultanate nobles.<br><br>

        At least until the end of the 13th century when they ruled the Mamluk Sultanate in India, the Ghurid Turks maintained their ethnical characteristics, continuing to use Turkish as their main language, rather than Persian, and persisting in their rude and bellicose ways as "men of the sword", in opposition to the Persian "men of the pen".<br><br>

        The Khalji dynasty came into being when Jalal ud din Firuz Khalji overthrew the last of the Slave dynasty rulers, Muiz ud din Qaiqabad, the grandson of Balban, and assumed the throne at Delhi.
        `,
        info1: `Territory of the Delhi Mamluk Dynasty`,
        info2: `Tomb of Iltutmish in the Qutub Minar complex`,
        info3: `Coin of Ghiyath al-Din 'Iwad, Governor of Bengal.`,
    },
    {
        id: 2,
        singleTitle: `Khalji Dynasty`,
        time1: `1290CE`,
        singleCategory: `Delhi`,
        time2: `1320CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Delhi_Sultanate_under_Khalji_dynasty_-_based_on_A_Historical_Atlas_of_South_Asia.svg/800px-Delhi_Sultanate_under_Khalji_dynasty_-_based_on_A_Historical_Atlas_of_South_Asia.svg.png",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/9/96/Copper_coin_of_Alauddin_Khilji.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Koh-i-noor_%28after_1852%29_black.png",
        info: `
        The Khaljis of the Khalji Dynasty were of Turko-Afghan origin whose ancestors, the Khalaj, are said to have been initially a Turkic people who migrated together with the Hunas and Hephthalites from Central Asia, into the southern and eastern regions of modern-day Afghanistan as early as 660CE, where they ruled the region of Kabul as the Buddhist Turk Shahis. According to Radhey Shyam Chaurasia, the Khaljis slowly inherited many Afghan habits and customs, and that they were treated as Afghans by the Turkic nobles of the Delhi Sultanate. Even to the point where Turkic nobles in the Delhi Sultanate opposed Jalal-ud-din's acension to the throne of Delhi after the Khilji revolution.<br><br>

        According to C. E. Bosworth, the modern Pashto-speaking Ghilzai Pashtuns, who make up the majority of the Pashtuns in Afghanistan, are the modern result of the Khalaj assimilation into the Pashtuns.Between the 10th and 13th centuries, some sources refer to the Khalaj people as of Turkic, but some others do not. Minorsky argues that the early history of the Khalaj tribe is obscure and adds that the identity of the name Khalaj is still to be proved. Mahmud al-Kashgari (11th century) does not include the Khalaj among the Oghuz Turkic tribes, but includes them among the Oghuz-Turkman (where Turkman meant "Like the Turks") tribes. Kashgari felt the Khalaj did not belong to the original stock of Turkish tribes but had associated with them and therefore, in language and dress, often appeared "like Turks". The 11th century Tarikh-i Sistan and the Firdausi's Shahnameh also distinguish and differentiate the Khalaj from the Turks. Minhaj-i-Siraj Juzjani (13th century) never identified Khalaj as Turks, but was careful not to refer to them as Pashtuns. They were always a category apart from Turks, Tajiks and Pashtuns. Muhammad ibn Najib Bakran's Jahan-nama explicitly describes them as Turkic, although he notes that their complexion had become darker (compared to the Turks) and their language had undergone enough alterations to become a distinct dialect. The modern historian Irfan Habib has argued that the Khaljis were not related to the Turkic people and were instead ethnic Pashtuns. Habib pointed out that, in some 15th-century Devanagari Sati inscriptions, the later Khaljis of Malwa have been referred to as "Khalchi" and "Khilchi", and that the 17th century chronicle Padshahnama, an area near Boost in Afghanistan (where the Khalaj once resided) as "Khalich". Habib theorizes that the earlier Persian chroniclers misread the name "Khalchi" as "Khalji" . He also argues that no 13th century source refers to the Turkish background of the Khalji. However, Muhammad ibn Najib Bakran's Jahan-nama (c. 1200-1220) described the Khalaj people as a "tribe of Turks" that had been going through a language shift.
        `,
        info1: `Territory controlled by the Khaljis (dark green) and their tributaries (light green)`,
        info2: `Copper coin of Alauddin Khalji.`,
        info3: `The Koh-i-Noor diamond was seized by Alauddin Khalji's army in 1310.`,
    },
    {
        id: 3,
        singleTitle: `Tughlaq Dynasty`,
        time1: `1320CE`,
        singleCategory: `Delhi`,
        time2: `1413CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Tughlaq_dynasty_1321_-_1398_ad.PNG",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Bastions_at_the_Old_City_of_Tughlaqabad.JPG/1024px-Bastions_at_the_Old_City_of_Tughlaqabad.JPG",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Islamic_Sultanates._Dehli._Ghiyath_al-Din_Muhammad_bin_Tughluq._1325-1351_CE.jpg/1280px-Islamic_Sultanates._Dehli._Ghiyath_al-Din_Muhammad_bin_Tughluq._1325-1351_CE.jpg",
        info: `
        The Tughlaq dynasty also referred to as Tughluq or Tughluk dynasty, was a Muslim dynasty of Turkic origin which ruled over the Delhi sultanate in medieval India. Its reign started in 1320 in Delhi when Ghazi Malik assumed the throne under the title of Ghiyath al-Din Tughluq. The dynasty ended in 1413.<br><br>

        The dynasty expanded its territorial reach through a military campaign led by Muhammad bin Tughluq, and reached its zenith between 1330 and 1335. It ruled most of the Indian subcontinent.<br><br>

        The Khalji dynasty ruled the Delhi Sultanate before 1320. Its last ruler, Khusro Khan, was a Hindu slave who had been forcibly converted to Islam and then served the Delhi Sultanate as the general of its army for some time. Khusro Khan, along with Malik Kafur, had led numerous military campaigns on behalf of Alauddin Khalji, to expand the Sultanate and plunder non-Muslim kingdoms in India.<br><br>

        After Alauddin Khalji's death from illness in 1316, a series of palace arrests and assassinations followed, with Khusro Khan coming to power in June 1320, after killing the licentious son of Alauddin Khalji, Mubarak Khalji, initiating a massacre of all members of the Khalji family and reverting from Islam. However, he lacked the support of the Muslim nobles and aristocrats of the Delhi Sultanate. Delhi's aristocracy invited Ghazi Malik, then the governor in Punjab under the Khaljis, to lead a coup in Delhi and remove Khusro Khan. In 1320, Ghazi Malik launched an attack with the use of an army of Khokhar tribesmen and killed Khusro Khan to assume power.
        `,
        info1: `Territory under Tughlaq dynasty of Delhi Sultanate, 1330-1335 AD.`,
        info2: `Ghiyasuddin Tughlaq ordered the construction of Tughlakabad, a city near Delhi.`,
        info3: `Gold coinage of Muhammad bin Tughluq. 1325-1351 CE.`,
    },
    {
        id: 4,
        singleTitle: `Sayyid Dynasty`,
        time1: `1414CE`,
        singleCategory: `Delhi`,
        time2: `1450CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Lodhi_Garden%2C_New_Delhi._taken_by_Anita_Mishra.JPG/250px-Lodhi_Garden%2C_New_Delhi._taken_by_Anita_Mishra.JPG",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Sultans_of_Dehli%2C_D0651%2C_Khidr_Khan%2C_BI_80_Rati_Tanka_INO_Firoz_Shah_Tughlaq.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Sultans_of_Dehli%2C_D0662%2C_Mubarak_Shah%2C_AE_Double_falus.jpg/1280px-Sultans_of_Dehli%2C_D0662%2C_Mubarak_Shah%2C_AE_Double_falus.jpg",
        info: `
        The Sayyid dynasty was the fourth dynasty of the Delhi Sultanate, with four rulers ruling from 1414 to 1451. Founded by Khizr Khan, a former governor of Multan, they succeeded the Tughlaq dynasty and ruled the sultanate until they were displaced by the Lodi dynasty.<br><br>

        Following Timur's 1398 Sack of Delhi, he appointed Khizr Khan as deputy of Multan (Punjab). Khizr Khan captured Delhi on 28 May 1414 thereby establishing the Sayyid dynasty. Khizr Khan did not take up the title of Sultan and nominally, continued to be a Rayat-i-Ala (vassal) of the Timurids - initially that of Timur, and later his son Shah Rukh.<br><br>

        Khizr Khan was succeeded by his son Sayyid Mubarak Shah after his death on 20 May 1421. Mubarak Shah referred to himself as Muizz-ud-Din Mubarak Shah on his coins. A detailed account of his reign is available in the Tarikh-i-Mubarak Shahi written by Yahya-bin-Ahmad Sirhindi. After the death of Mubarak Shah, his nephew, Muhammad Shah ascended the throne and styled himself as Sultan Muhammad Shah. Just before his death, he called his son Sayyid Ala-ud-Din Shah from Badaun, and nominated him as successor.<br><br>

        The last ruler of the Sayyids, Ala-ud-Din, voluntarily abdicated the throne of the Delhi Sultanate in favour of Bahlul Khan Lodi on 19 April 1451, and left for Badaun, where he died in 1478.
        `,
        info1: `The tomb of Muhammad Shah at Lodi Gardens, New Delhi.`,
        info2: `Billon Tanka of Khizr Khan INO Firoz Shah Tughlaq.`,
        info3: `Double falls of Mubarak Shah.`,
    },
    {
        id: 5,
        singleTitle: `Lodi Dynasty`,
        time1: `1451CE`,
        singleCategory: `Delhi`,
        time2: `1526CE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/India_in_1525_Joppen.jpg/800px-India_in_1525_Joppen.jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Coin_of_Bahlul_Lodi.jpg/220px-Coin_of_Bahlul_Lodi.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Tomb_of_Bahlol_Lodi.JPG",
        info: `
        The Lodi dynasty was an Afghan dynasty that ruled the Delhi Sultanate from 1451 to 1526. It was the fifth and final dynasty of the Delhi Sultanate, and was founded by Bahlul Khan Lodi when he replaced the Sayyid dynasty.<br><br>

        Bahlul Khan Lodi (r. 1451–1489) was the nephew and son-in-law of Malik Sultan Shah Lodi, the governor of Sirhind in (Punjab), India and succeeded him as the governor of Sirhind during the reign of Sayyid dynasty ruler Muhammad Shah. Muhammad Shah raised him to the status of an Tarun-Bin-Sultan. He was the most powerful of the Punjab chiefs and a vigorous leader, holding together a loose confederacy of Afghan and Turkish chiefs with his strong personality. He reduced the turbulent chiefs of the provinces to submission and infused some vigour into the government.[citation needed] After the last Sayyid ruler of Delhi, Alauddin Alam Shah voluntarily abdicated in favour of him, Bahlul Khan Lodi ascended the throne of the Delhi sultanate on 19 April 1451. The most important event of his reign was the conquest of Jaunpur.[citation needed] Bahlul spent most of his time in fighting against the Sharqi dynasty and ultimately annexed it. He placed his eldest surviving son Barbak on the throne of Jaunpur in 1486.
        `,
        info1: `Map showing the territory under the Lodi dynasty, marked as Afghan Empire.`,
        info2: `A coin of Bahlul Lodi.`,
        info3: `Tomb of Bahlol Lodi.`,
    },
    {
        id: 6,
        singleTitle: `Maravarman Sundara I`,
        time1: `1216CE`,
        singleCategory: `Pandyan`,
        time2: `1238CE`,
        info: `
        The foundation for the Pandya supremacy in south India was laid by Maravarman Sundara I early in the 13th century. He succeeded his older brother Jatavarman Kulasekhara in 1216. He invaded the Chola country, sacked Uraiyur and Thanjavur, and drove the Chola king Kulothunga III into exile. The Chola king subsequently made a formal submission to Maravarman Sundara I and acknowledged his overlordship. Attempts by the next Chola king Rajaraja III (1216 – 46 CE[7]) for self-rule (to stop the Pandya invasion into the Chola country), with the help of the Hoysalas king Narasimha II (r. 1220 – 1238 CE), resulted in a battle between the Pandya and Hoysala forces at Mahendramangalam on the Kaveri Valley. Maravarman Sundara I was defeated and Rajaraja III was restored in the Chola country. Sometime later Chola prince Rajendra III attacked the Pandyas and defeated two Pandya royals including Maravarman Sundara II. Hoysala king Somesvara (r. 1233 – 1267 CE[7]) then came to the aid of the Pandyas, defeated Rajendra III and then made peace with the Cholas.
        `,
    },
    {
        id: 7,
        singleTitle: `Maravarman Sundara Pandyan II`,
        time1: `1238CE`,
        singleCategory: `Pandyan`,
        time2: `1251CE`,
        info: `
        Maravarman Sundara Pandyan II was a Pandyan king, who ruled regions of South India between 1238–1240 CE.<br><br>

        Sundara Pandiyan II was one of two Pandyan princes who acceded to power in 1238 after Maravarman Sundara Pandyan I. He shared his rule with his elder brother Jatavarman Kulasekaran II for two years. This practice of shared rule with one prince asserting primacy was common in the Pandyan Kingdom. His years of reign are unclear. While KA Nilakanta Sastri mentions him as the Pandyan prince defeated by Rajendra Chola III around 1250, N Sethuraman mentions another Pandyan prince - Jatavarman Vikkiraman I as the Pandyan ruler between 1241 and 1250.
        `,
    },

    {
        id: 8,
        singleTitle: `Jatavarman Sundara I`,
        time1: `1251CE`,
        singleCategory: `Pandyan`,
        time2: `1268CE`,
        info: `
        Jatavarman Sundara I ascended the Pandya throne in 1251 CE. He led his army to the Chola country (even as far as Nellore), to Sri Lanka and to south Kerala. He was also successful in confining the Hoysala control to the Mysore Plateau (the ancient Chola country was now overrun by the Pandyas). Kanchi functioned as the second major city in the kingdom. In his conquests, Jatavarman Sundara I was assisted by number of Pandya royals such as Jatavarman Vira Pandya.<br><br>

        Jatavarman Sundara I subdued Rajendra II around 1258–1260 CE and made him pay tribute. The rule of the Cholas ended c. 1279 with Rajendra III. The Pandya attacked the Hoysalas in the Kaveri and captured the fort of Kannanur Koppam. Hoysala king Somesvara was forced to fall back into the Mysore Plateau. The Hoysala king, pressed by enemies from north and south, "assigned" the southern half of his kingdom to his younger son Ramanatha (r. 1254–1292). Somesvara was eventually killed by the Pandya in 1262 CE. Ramanatha managed to recover Kannanur and hold against the Pandya power. Jatavarman Sundara I also came into conflict with the Kadava ruler Kopperunjinga II. It seems that Bana (Magadai) and Kongu countries came under the Pandya rule during the wars against the Hoysalas and the Kadavas. Jatavarman Sundara I also fought the Kakatiya ruler Ganapati (1199-1262). Sri Lanka was invaded by Jatavarman Sundara I in 1258 and on his behalf by his younger brother Jatavarman Vira II between 1262 and 1264 CE. The island was again invaded and defeated by Jatavarman Vira II in 1270 CE.
        `,
    },
    {
        id: 9,
        singleTitle: `Maravarman Kulasekara I`,
        time1: `1268CE`,
        singleCategory: `Pandyan`,
        time2: `1310CE`,
        info: `
        Sundara Pandya I (died in 1268) was succeeded by Maravarman Kulasekara I. Around 1279 the combined force of Hoysala king Ramanatha and Rajendra III was defeated by Maravarman Kulasekara I. Maravarman Kulasekara I, now virtually unchallenged, ruled over the Chola country and southern Tamil speaking portions of Hoysala kingdom. He also invaded Sri Lanka, ruled by Bhuvanaikabahu I, "carried away to the Pandya country the venerable Tooth Relic", and the wealth of the island. Sri Lanka remained under Pandya control until c. 1308–1309 CE.
        `,
    },
    {
        id: 10,
        singleTitle: `Sangama Dynasty`,
        time1: `1336CE`,
        singleCategory: `Vijayanagara`,
        time2: `1485CE`,
        info: `
        The Sangama dynasty was a dynasty of the Vijayanagara Empire founded in the 14th century by two brothers: Harihara I (also called Vira Harihara or Hakka Raya) and Bukka Raya I. They were the sons of Bhavana Sangama, the chieftain of a cowherd pastoralist community, which claimed descent from the Yadava race.<br><br>

        Bukka's successor, Harihara II, continued Bukka's campaign through southern India and managed to take control of coastal Andhra between Nellore and Kalinga and conquer the Addanki and Srisailam areas as well as most of the territory between the peninsula to the south of the Krishna River. Harihara II also managed to conquer many Indian ports such as that of Goa, Chaul, and Dabhol.<br><br>

        After Harihara II died the throne was in conflict between Virupaksha Raya, Bukka Raya II, and Deva Raya of which Deva Raya eventually would come out as victor. During his reign, Deva Raya managed to successfully control the vast amount of territory in the empire. The kings after Deva Raya on the other hand did not manage to do anything significant at all for the kingdom. This was until Deva Raya II, who would bring about the golden age of the Sangama Dynasty. Under Deva Raya II's rule, the empire would succeed in completely conquering southern India such as conquering Kondavidu, defeating the ruler of Quilon as well as other chieftains, extending the empire from Odisha to Malabar and from Ceylon to Gulbarga, and also taking over a lot of the major Indian ports. However after Deva Raya II, his incompetent successors would eventually lead to the destruction of the dynasty with the Bahamani Kingdoms continually taking over much of the Vijayanaga territory. Virupaksha Raya II was the last emperor of the dynasty.
        `,
    },
    {
        id: 11,
        singleTitle: `Saluva Dynasty`,
        time1: `1485CE`,
        singleCategory: `Vijayanagara`,
        time2: `1505CE`,
        info: `
        The Saluva dynasty was created by the Saluvas, who by historical tradition were natives of the Kalyani region of northern Karnataka in modern India. The Gorantla inscription traces their origins to this region from the time of the Western Chalukyas and Kalachuris of Karnataka. The term "Saluva" is known to lexicographers as "hawk" used in hunting. They later spread into the east coast of modern Andhra Pradesh, perhaps by migration or during the Vijayanagara conquests during the 14th century.<br><br>

        The earliest known Saluva from inscriptional evidence in the Vijayanagara era was Mangaldeva, the great grandfather of Saluva Narasimha Deva Raya. Mangaldeva played an important role in the victories of King Bukka Raya I against the Sultanate of Madurai. His descendants founded the Saluva Dynasty and were one of the ruling lines of the Vijayanagara Empire of Southern India. Three kings ruled from 1485 to 1505 after which the Tuluva Dynasty claimed the throne. They ruled almost the entire South India with Vijaynagara as their capital.<br><br>

        Saluva Narasimha was the first king of the dynasty ruling from 1486–1491. Narasimha spent his reign in relatively successful campaigns to reduce his vassals throughout the kingdom to submission and in unsuccessful attempts to stop the encroachment of the Suryavamsa king of Orissa. Narasimha also opened new ports on the west coast so that he could revive the horse trade, which had fallen into Bahmanī hands.<br><br>

        At his death in 1491, following the siege of Udayagiri and his own imprisonment there by the Suryavamsi king of Orissa, Narasimha left his kingdom in the hands of his chief minister, Narasa Nayaka. The King did not think his sons were ready to take charge of the throne so he gave that power to his most trusted general and minister Narasa. The minister in effect ruled Vijayanagar from 1490 until his own death in 1503. Narasimha's eldest son, Thimma Bhupa, was murdered by an army commander and one of Narasa's enemies in 1492 so Narasimha's youngest son, Narasimha Raya II, ascended his brother to the throne as king. He was enthroned as Immadi Narasimha. Although he was named king, the authentic control came from Narasa's eldest son and successor, best known as Vira Narasimha. He ordered the murder of Immadi Narasimha in 1505. He then ascended the throne and inaugurated the Tuluva dynasty, the third dynasty of Vijayanagar and reigned from 1503-1509.
        `,
    },
    {
        id: 12,
        singleTitle: `Tuluva Dynasty`,
        time1: `1491CE`,
        singleCategory: `Vijayanagara`,
        time2: `1570CE`,
        info: `
        Tuluva is the name of the third ruling dynasty of the Vijayanagara Empire. Tuluva Narasa Nayaka, a powerful warlord from the westerly His son Narasimha Nayaka arranged for the assassination of the weak Narasimha Raya II bringing an end to the rule of the Saluva dynasty. Narasimha Nayaka later assumed the Vijayangara throne as Viranarasimha Raya bringing the Tuluva dynasty to prominence. The dynasty was at its zenith during the rule of Krishnadevaraya, the second son of Tuluva Narasa Nayaka.<br><br>

        The original home of the kingdom was the westerly Tulu speaking region. A Sanskrit epigraph on the eastern wall of Tirumala temple describes the genealogy of Krishnadevaraya. The first ancestor of the Tuluva lineage to be mentioned is Timmabhupati and his wife Devaki Timmabhupati is followed by his son Ishvara and consort Bukkamma and then a certain Narasa Bhupala who is none other than Tuluva Narasa Nayaka, the father of Emperor Krishnadevaraya. The powerful warlord Tuluva Narasa Nayaka is attributed with the conquest of the Gajapatis as well as certain Muslim rulers.<br><br>

        Krishnadevaraya a Tulu speaker himself was noted to be linguistically neutral as he ruled a multilingual empire. He is known to have patronised poets and issued inscriptions in languages as varied as Sanskrit, Tamil, Kannada and Telugu. However, he elevated Telugu as a royal language possibly because of the dominance of Telugu speaking chiefs and composed the epic poem Amuktamalyada in it. Tuluva rulers were staunch Vaishnavas and patronised Vaishnavism. Vyasatirtha, a Dvaita saint was the Kulaguru of Krishnadevaraya.<br><br>

        The fall of the Tuluva dynasty led to the beginning of the disintegration of the Vijayanagar empire.
        `,
    },
    {
        id: 13,
        singleTitle: `Aravidu Dynasty`,
        time1: `1542CE`,
        singleCategory: `Vijayanagara`,
        time2: `1646CE`,
        info: `
        The Aravidu Dynasty was the fourth and last Hindu dynasty, of Telugu language and origin, which ruled the Vijayanagara Empire in South India. Its founder was Tirumala Deva Raya, whose brother Rama Raya had been the masterful regent of the last ruler of the previous dynasty. Rama Raya's death at the Battle of Rakasa-Tangadi (also known as the Battle of Talikota) in 1565 led to the subsequent destruction of Vijayanagar by the combined forces of the Muslim states of the Deccan.<br><br>

        The Aravidu family claimed to be Kshatriyas and were based in Andhra region They claimed to belong to the Atreya gotra and traced their lineage to Rajaraja Narendra.
        `,
    },
    {
        id: 14,
        singleTitle: `Origin of Bengal Sultanate`,
        time1: `1202CE`,
        singleCategory: `Bengal`,
        time2: `1352CE`,
        info: `
        Bengal was gradually absorbed into the Delhi Sultanate during the 1200s. It began with Bakhtiar Khilji's conquest of Gauda between 1202 and 1204 during the reign of Muhammad of Ghor. After the assassination of Bakhtiar Khalji by his own officer Ali Mardan in 1206, Bengal was administered by various Maliks belonging to the Khalji tribe (except a brief interregnum by Ali Mardan himself) till Delhi Sultan Iltutmish sent forces under his son, Nasir-ud-din Mahmud, to bring Bengal under the direct control of the Delhi Sultans. Iltutmish declared Bengal as a province of Delhi in 1225. The Delhi Sultans attempted to govern Bengal through appointed governors, however, Delhi could not succeed given the considerable overland distance with Bengal.<br><br>

        Ambitious governors rebelled and ruled as independent rulers until being suppressed militarily by the Delhi Sultanate. However, there were capable rulers among the rebels, including Yuzbak Shah (1257), Tughral Khan (1271–1282), and Shamsuddin Firoz Shah (1301–1322). The latter achieved the Conquest of Sylhet and established a strong administration in eastern and south-western Bengal. In 1325, the Delhi Sultan Ghiyath al-Din Tughluq reorganized the province into three administrative regions, with Sonargaon ruling eastern Bengal; Gauda ruling northern Bengal; and Satgaon ruling southern Bengal. Even this arrangement broke down. By 1338, the three administrative regions had separatist Sultans, including Fakhruddin Mubarak Shah in Sonargaon; Alauddin Ali Shah in Gauda, and Shamsuddin Ilyas Shah in Satgaon. Fakhruddin conquered Chittagong in 1340 and was succeeded by his son Ikhtiyaruddin Ghazi Shah in 1349. Shamsuddin Ilyas Shah (or just Ilyas Shah) defeated Alauddin Ali Shah and secured control of Gauda. He then defeated Ikhtiyaruddin of Sonargaon. By 1352, Ilyas Shah emerged victorious among the Bengali triad.
        `,
    },
    {
        id: 15,
        singleTitle: `Early Bengal Sultanate`,
        time1: `1352CE`,
        singleCategory: `Bengal`,
        time2: `1414CE`,
        info: `
        Ilyas Shah established his capital in Pandua. He unified the delta of Ganges, Brahmaputra and Meghna Rivers into the Sultanate of Bengal. Ilyas Shah waged wars and raids against several city-states and kingdoms in the eastern subcontinent. He conquered eastern Bengal and northern Bihar. He led the first Muslim army into Nepal, raided the Kathmandu Valley, and returned to Bengal with treasures. He controlled an area stretching from Assam in the east to Varanasi in the west. In 1353, Ilyas Shah was defeated by Delhi Sultan Firuz Shah Tughluq in the Siege of Ekdala Fort during the Bengal Sultanate-Delhi Sultanate War. Bengal agreed to pay a tribute to the Delhi Sultan. Despite losing control of many conquered areas, Ilyas Shah remained in firm control of Bengal.<br><br>

        Ilyas Shah founded the Indo-Turkic Ilyas Shahi dynasty which ruled Bengal for fifteen decades. His son and successor Sikandar Shah defeated Delhi Sultan Firuz Shah Tughluq during the second Siege of Ekdala Fort in 1359. A peace treaty was signed between Delhi and Bengal, with the former recognizing the independence of the latter. Firuz Shah Tughluq gave a golden crown estimated to be worth 80,000 taka to Sikandar Shah. The peace treaty ensured Bengal's independence for two centuries.<br><br>

        Sikandar Shah's reign lasted for three decades. The Adina Mosque was built during his reign. The mosque's design was based on the Great Mosque of Damascus- a style used during the introduction of Islam in new areas. During this time, much of the agricultural land was controlled by Hindu zamindars, which caused tensions with Muslim taluqdars.<br><br>

        Bengal became the eastern frontier kingdom among medieval Islamic states. In the 14th-century, Islamic kingdoms stretched from Muslim Spain in the west to the Indian subcontinent in the east. The Islamic kingdoms had multiethnic elites. Persian and Arabic were used alongside local languages. Persian was used as a diplomatic and commercial language. Arabic was the liturgical language of the clergy. In Bengal, the Bengali language became a court language and was the main vernacular language under Muslim rule.<br><br>

        The third Sultan Ghiyasuddin Azam Shah began expanding Bengal's influence abroad. He began to send embassies to Ming China, which continued as a tradition during the reigns of his successors. Ghiyasuddin also sponsored construction projects in Arabia. He exchanged letters and poetry with the Persian poet Hafez. The Bengal Sultans pledged nominal allegiance to the Abbasid Caliphate in Cairo. The coins of the Bengal Sultans often bore the name of the contemporary Abbasid Caliph. Ghiyasuddin Azam Shah held his court in the central Bengali city of Sonargaon, in addition to Pandua. The travel accounts of Chinese envoys state that the Sultan lived in a palace near the river port of Sonargaon. The river port had shipping links to China, Southeast Asia, and the Middle East. In 1406, Ma Huan found Sonargaon as a large metropolis. Other Chinese envoys provided descriptions of a fortified walled city. Sonargaon was a center of Sufi education and Persian literature and Sultan Ghiyasuddin even invited Hafez to settle there. The institutions founded by Abu Tawwama during the Delhi Sultanate were maintained by his successors in the Bengal Sultanate, including the Sufi preachers Ibrahim Danishmand, Saiyid Arif Billah Muhammad Kamel, Saiyid Muhammad Yusuf and others
        `,
    },
    {
        id: 16,
        singleTitle: `Rise of Nativists`,
        time1: `1414CE`,
        singleCategory: `Bengal`,
        time2: `1494CE`,
        info: `
        During the early 15th-century, the Ilyas Shahi rule was challenged by Raja Ganesha, a powerful Hindu landowner, who managed to place his son (a convert to Islam), Jalaluddin Muhammad Shah, on the throne. Jalaluddin had a relatively short-lived but significant reign, during which he helped an Arakanese king to achieve the Reconquest of Arakan. Jalaluddin established control over Fatehabad. Jalaluddin also promoted more native Bengali elements into the architecture and governance of the sultanate. Jalaluddin was initially loyal to the Abbasid Caliph but later declared himself as the Caliph in a sign of Bengali Muslim independence. The Ilyas Shahi dynasty was restored in 1432.<br><br>

        Nine kings ruled Bengal from Pandua over the course of ten decades. They built palaces, forts, bridges, mosques, and mausoleums. Chinese envoy Ma Huan described the city at the time in his travel accounts, which state that "the city walls are very imposing, the bazaars well-arranged, the shops side by side, the pillars in orderly rows, they are full of every kind of goods". Pandua was an export center for cloth and wine. At least six varieties of fine muslin and four types of wine were found in Pandua. High-quality paper was produced from the bark of Pandua's mulberry trees. Sultan Mahmud Shah of Bengal shifted the capital from Pandua to Gaur in 1450. One of the probable reasons behind the move was a change in the course of nearby rivers.<br><br>

        The reign of Mahmud Shah witnessed greater control over the Sundarbans. The governor of the Sundarbans, Khan Jahan Ali, built the mint town of Khalifatabad. Like many other officials, Khan Jahan had settled in Bengal after Timur's sack of Delhi. During the reign of Rukunuddin Barbak Shah, the Kingdom of Mrauk U conquered Chittagong. The late 1480s saw four usurper Sultans from the Abyssinian mercenary corps. Tensions between different Muslim communities often affected the sultanate.
        `,
    },
    {
        id: 17,
        singleTitle: `Regional Empire`,
        time1: `1494CE`,
        singleCategory: `Bengal`,
        time2: `1564CE`,
        info: `
        Alauddin Hussain Shah gained control of Bengal in 1494 when he was prime minister. He brought end to a period of instability. As Sultan, Hussain Shah ruled till 1519. The dynasty he founded reigned till 1538. Muslims and Hindus jointly served in the royal administration during the Hussain Shahi dynasty. This era is often regarded as the golden age of the Bengal Sultanate, in which Bengali territory included areas of Arakan, Orissa, Tripura, and Assam. Under the order of Hussain Shah, Shah Ismail Ghazi commanded the Bengali forces in the Conquest of Kamata, conquering large parts of Assam. After overthrowing the Hindu Khen dynasty, Prince Sayyid Danyal was appointed the governor of the new region. Hussain Shah also restored Bengali sovereignty in Chittagong and northern Arakan after the Bengal Sultanate–Kingdom of Mrauk U War of 1512–1516. Hussain Shah minted coins with the proclamation "conqueror of Kamrupa, Kamata, Jajnagar and Orissa". According to an inscription in Sonargaon from 1513, Hussain Shah annexed large parts of the Twipra Kingdom. The Pratapgarh Kingdom came under Bengali suzerainty. Hussain Shah also waged several campaigns against the Gajapati rulers of Orissa and secured control of northern Orissa. Hussain Shah extended Bengali territory in the west beyond Bihar, up to Saran in Jaunpur. The Sultan of Jaunpur took refuge in Bengal after an invasion by the Lodi dynasty of Delhi. The Delhi Sultan attacked Bengal in pursuit of the Jaunpur Sultan. Unable to make headway, the Delhi Sultan withdrew after concluding a peace treaty with Bengal.<br><br>

        Embassies from Portuguese India frequented Bengal after the landing of Vasco Da Gama in the principality of Calicut. Individual Portuguese merchants are recorded to have lived in the Bengal Sultanate's capital of Gaur. Portuguese politics played out in Gaur as a reflection of contradictions in contemporary Portugal. The Portuguese provided vivid descriptions of Gaur. They compared the affluence of Gaur with Lisbon. The city included a citadel, a royal palace and durbar, mosques, houses for the rich, and bustling bazaars. Portuguese historian Castenhada de Lopez described the houses of Gaur as being one-storeyed with ornamental floor tiles, courtyards, and gardens. Gaur was the center of regional politics. The Sultan of Bengal gave permission for establishing the Portuguese settlement in Chittagong. During the period of the Iberian Union, there was no official Portuguese sovereignty over Chittagong. The Portuguese trading post was dominated by pirates who allied with the Arakanese against Bengal.
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

        const medievalCat = lateMedieval.filter(function (item) {
            if (item.category === category) {
                return item;
            }
        });

        const listCat = lateMedievalList.filter(function (item) {
            if (item.singleCategory === category) {
                return item;
            }
        })
        displayMain(medievalCat);
        if (category === 'Vijayanagara' || category === "Pandyan" || category === "Bengal") {
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