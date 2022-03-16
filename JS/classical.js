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
    document.getElementById("Maurya").click();

});

const classical = [
    {
        id: 1,
        title: `Maurya Dynasty`,
        category: `Maurya`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Maurya_Empire%2C_c.250_BCE.png/800px-Maurya_Empire%2C_c.250_BCE.png",
        img2: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Mauryan_ruins_of_pillared_hall_at_Kumrahar_site_of_Pataliputra_ASIEC_1912-13.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Pataliputra_capital%2C_Bihar_Museum%2C_Patna%2C_3rd_century_BCE.jpg/800px-Pataliputra_capital%2C_Bihar_Museum%2C_Patna%2C_3rd_century_BCE.jpg",
        desc: `
        The Maurya Empire was a geographically extensive Iron Age historical power in South Asia based in Magadha, founded by Chandragupta Maurya in 322 BCE, and existing in loose-knit fashion until 185 BCE. The Maurya Empire was centralized by the conquest of the Indo-Gangetic Plain, and its capital city was located at Pataliputra (modern Patna). Outside this imperial center, the empire's geographical extent was dependent on the loyalty of military commanders who controlled the armed cities sprinkling it. During Ashoka's rule (ca. 268–232 BCE) the empire briefly controlled the major urban hubs and arteries of the Indian subcontinent excepting the deep south. It declined for about 50 years after Ashoka's rule, and dissolved in 185 BCE with the assassination of Brihadratha by Pushyamitra Shunga and foundation of the Shunga dynasty in Magadha.<br><br>

        Chandragupta Maurya raised an army, with the assistance of Chanakya, author of Arthasastra, and overthrew the Nanda Empire in c. 322 BCE. Chandragupta rapidly expanded his power westwards across central and western India by conquering the satraps left by Alexander the Great, and by 317 BCE the empire had fully occupied northwestern India. The Mauryan Empire then defeated Seleucus I, a diadochus and founder of the Seleucid Empire, during the Seleucid–Mauryan war, thus acquiring territory west of the Indus River.<br><br>

        Under the Mauryas, internal and external trade, agriculture, and economic activities thrived and expanded across South Asia due to the creation of a single and efficient system of finance, administration, and security. The Maurya dynasty built a precursor of the Grand Trunk Road from Patliputra to Taxila. After the Kalinga War, the Empire experienced nearly half a century of centralized rule under Ashoka. Ashoka's embrace of Buddhism and sponsorship of Buddhist missionaries allowed for the expansion of that faith into Sri Lanka, northwest India, and Central Asia.
        `,
        desc1: `Maximum extent of the Maurya Empire`,
        desc2: `Pataliputra, capital of the Mauryas. Ruins of pillared hall at Kumrahar site.`,
        desc3: `The Pataliputra capital, discovered at the Bulandi Bagh site of Pataliputra,`,
        subTitle: `Founding`,
        subDesc: `
        The Maurya Empire was established in the Greater Punjab region under the leadership of Chandragupta Maurya and his mentor Chanakya. Chandragupta was taken to Taxila by Chanakya and was tutored about statecraft and governing. Requiring an army Chandragupta recruited and annexed local military republics such as the Yaudheyas that had resisted Alexanders Empire. The Mauryan army quickly rose to become the prominent regional power in the North West of the Indian Subcontinent. The Mauryan army then conquered the satraps established by the Macedonians. Ancient Greek historians Nearchus, Onesictrius and Aristobolus have provided lot of information about the Mauryan empire. The Greek generals Eudemus and Peithon ruled in the Indus Valley until around 317 BCE, when Chandragupta Maurya (with the help of Chanakya, who was now his advisor) fought and drove out the Greek governors, and subsequently brought the Indus Valley under the control of his new seat of power in Magadha.<br><br>

        Chandragupta Maurya's ancestry is shrouded in mystery and controversy. On one hand, a number of ancient Indian accounts, such as the drama Mudrarakshasa (Signet ring of Rakshasa – Rakshasa was the prime minister of Magadha) by Vishakhadatta, describe his royal ancestry and even link him with the Nanda family. A kshatriya clan known as the Mauryas are referred to in the earliest Buddhist texts, Mahaparinibbana Sutta. However, any conclusions are hard to make without further historical evidence. Chandragupta first emerges in Greek accounts as "Sandrokottos". As a young man he is said to have met Alexander. Chanakya is said to have met the Nanda king, angered him, and made a narrow escape.
        `,
        listTitle: `Mauryan Rulers`,
    },
    {
        id: 2,
        title: `Shunga Dynasty`,
        category: `Shunga`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/SungaEmpireMap.jpg/800px-SungaEmpireMap.jpg",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Royal_family_Sunga_West_Bengal_1st_century_BCE.jpg/800px-Royal_family_Sunga_West_Bengal_1st_century_BCE.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/SungaCoin.JPG/353px-SungaCoin.JPG",
        desc: `
        The Shunga Empire (IAST: Śuṅga) was an ancient Indian dynasty from Magadha that controlled areas of the central and eastern Indian subcontinent from around 184 to 75 BCE. The dynasty was established by Pushyamitra Shunga, after taking the throne of the Maurya Empire. Its capital was Pataliputra, but later emperors such as Bhagabhadra also held court at Besnagar (modern Vidisha) in eastern Malwa.<br><br>

        Pushyamitra Shunga ruled for 36 years and was succeeded by his son Agnimitra. There were ten Shunga rulers. However, after the death of Agnimitra, the second king of the dynasty, the empire rapidly disintegrated: inscriptions and coins indicate that much of northern and central India consisted of small kingdoms and city-states that were independent of any Shunga hegemony. The dynasty is noted for its numerous wars with both foreign and indigenous powers. They fought the Kalinga, the Satavahana dynasty, the Indo-Greek Kingdom and possibly the Panchalas and Mitras of Mathura.<br><br>

        Art, education, philosophy, and other forms of learning flowered during this period including small terracotta images, larger stone sculptures, and architectural monuments such as the stupa at Bharhut, and the renowned Great Stupa at Sanchi. Shunga rulers helped to establish the tradition of royal sponsorship of learning and art. The script used by the empire was a variant of Brahmi script and was used to write Sanskrit.<br><br>

        The Shunga Empire played an imperative role in patronising culture at a time when some of the most important developments in Hindu thought were taking place. Patanjali's Mahābhāṣya was composed in this period. Artistry also progressed with the rise of the Mathura art style.
        `,
        desc1: `Approximate extent of the Shunga empire`,
        desc2: `Shunga royal family, West Bengal, 1st century BCE.`,
        desc3: `Bronze coin of the Shunga period.`,
        subTitle: `Origins`,
        subDesc: `
        The Shunga dynasty was a Brahmin dynasty, established in 184 BCE, about 50 years after Ashoka's death, when the emperor Brihadratha Maurya, the last ruler of the Maurya Empire, was assassinated by his Senānī or commander-in-chief, Pushyamitra Shunga, while he was reviewing the Guard of Honour of his forces. Pushyamitra Shunga then ascended the throne.<br><br>

        Pushyamitra Shunga became the ruler of Magadha and neighbouring territories. His realm essentially covered the central parts of the old Mauryan Empire. The Shunga definitely had control of the central city of Ayodhya in northern central India, as is proved by the Dhanadeva-Ayodhya inscription. However, the city of Mathura further west never seems to have been under the direct control of the Shungas, as no archaeological evidence of a Shunga presence has ever been found in Mathura. On the contrary, according to the Yavanarajya inscription, Mathura was probably under the control of Indo-Greeks from some time between 180 BCE and 100 BCE, and remained so as late as 70 BCE.<br><br>

        Also, the Malavikagnimitra claims that the empire of Pushyamitra extended to the Narmada River in the south. They may also have controlled the city of Ujjain.Meanwhile, Kabul and much of the Punjab passed into the hands of the Indo-Greeks and the Deccan Plateau to the Satavahana dynasty.
        `,
        listTitle: `Shunga Rulers`,
    },
    {
        id: 3,
        title: `Kushan Dynasty`,
        category: `Kushan`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/0/09/Kushan.jpg",
        img2: "https://upload.wikimedia.org/wikipedia/commons/8/82/Heraios_coin_portrait.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Relief_Showing_Shiva_Linga_Worshipped_by_Saka_Devotees_-_Kushan_Period_-_Dampier_Nagar_-_ACCN_36-2661_-_Government_Museum_-_Mathura_2013-02-23_5614.JPG/1024px-Relief_Showing_Shiva_Linga_Worshipped_by_Saka_Devotees_-_Kushan_Period_-_Dampier_Nagar_-_ACCN_36-2661_-_Government_Museum_-_Mathura_2013-02-23_5614.JPG",
        desc: `
        The Kushan Empire was a syncretic empire, formed by the Yuezhi, in the Bactrian territories in the early 1st century. It spread to encompass much of modern-day territory of Afghanistan, Pakistan, Nepal and northern India, at least as far as Saketa and Sarnath near Varanasi (Benares), where inscriptions have been found dating to the era of the Kushan Emperor Kanishka the Great.<br><br>

        The Kushans were most probably one of five branches of the Yuezhi confederation, an Indo-European nomadic people of possible Tocharian origin, who migrated from northwestern China (Xinjiang and Gansu) and settled in ancient Bactria. The founder of the dynasty, Kujula Kadphises, followed Greek religious ideas and iconography after the Greco-Bactrian tradition, and also followed traditions of Hinduism, being a devotee of the Hindu God Shiva. The Kushans in general were also great patrons of Buddhism, and, starting with Emperor Kanishka, they also employed elements of Zoroastrianism in their pantheon. They played an important role in the spread of Buddhism to Central Asia and China.<br><br>

        The Kushans possibly used the Greek language initially for administrative purposes, but soon began to use the Bactrian language. Kanishka sent his armies north of the Karakoram mountains. A direct road from Gandhara to China remained under Kushan control for more than a century, encouraging travel across the Karakoram and facilitating the spread of Mahayana Buddhism to China. The Kushan dynasty had diplomatic contacts with the Roman Empire, Sasanian Persia, the Aksumite Empire and the Han dynasty of China. The Kushan Empire was at the center of trade relations between the Roman Empire and China: according to Alain Daniélou, "for a time, the Kushana Empire was the centerpoint of the major civilizations". While much philosophy, art, and science was created within its borders, the only textual record of the empire's history today comes from inscriptions and accounts in other languages, particularly Chinese
        `,
        desc1: `Major sites and extent of the Kushan empire`,
        desc2: `The first king to call himself "Kushan" on his coinage: Heraios (AD 1–30).`,
        desc3: `Shiva Linga worshipped by Kushan devotees, circa 2nd century AD.`,
        subTitle: `Origins`,
        subDesc: `
        Chinese sources describe the Guìshuāng, i.e. the Kushans, as one of the five aristocratic tribes of the Yuezhi. Many scholars believe that the Yuezhi were a people of Indo-European origin. A specifically Tocharian origin of the Yuezhi is often suggested. An Iranian, specifically Saka, origin, also has some support among scholars. Others suggest that the Yuezhi might have originally been a nomadic Iranian people, who were then partially assimilated by settled Tocharians, thus containing both Iranian and Tocharian elements.<br><br>

        The Yuezhi were described in the Records of the Great Historian and the Book of Han as living in the grasslands of eastern Xinjiang and northwestern part of Gansu, in the northwest of modern-day China, until their King was beheaded by the Xiongnu (匈奴) who were also at war with China, which eventually forced them to migrate west in 176–160 BC. The five tribes constituting the Yuezhi are known in Chinese history as Xiūmì (休密), Guìshuāng (貴霜), Shuāngmǐ (雙靡), Xìdùn (肸頓), and Dūmì (都密).<br><br>
        
        The ethnonym "KOϷϷANO" (Koshshano, "Kushan") in Greek alphabet (with the addition of the letter Ϸ, "Sh") on a coin of the first known Kushan ruler Heraios (1st century AD). The Yuezhi reached the Hellenic kingdom of Greco-Bactria (in northern Afghanistan and Uzbekistan) around 135 BC. The displaced Greek dynasties resettled to the southeast in areas of the Hindu Kush and the Indus basin (in present-day Afghanistan and Pakistan), occupying the western part of the Indo-Greek Kingdom.<br><br>

        In India, Kushan emperors regularly used the dynastic name ΚΟϷΑΝΟ ("Koshano") on their coinage. Several inscriptions in Sanskrit in the Brahmi script, such as the Mathura inscription of the statue of Vima Kadphises, refer to the Kushan Emperor as Gupta allahabad ku.jpg Gupta gujarat ssaa.jpg Gupta ashoka nn.svg, Ku-ṣā-ṇa ("Kushana"). Some later Indian literary sources referred to the Kushans as Turushka, a name which in later Sanskrit sources was confused with Turk, "probably due to the fact that Tukharistan passed into the hands of the western Turks in the seventh century". According to John M. Rosenfield, Turushka, Tukhāra or Tukhāra are variations of the word Tokhari in Indian writings. Yet, according to Wink, "nowadays no historian considers them to be Turkish-Mongoloid or 'Hun', although there is no doubt about their Central-Asian origin."
        `,
        listTitle: `Main Kushan Rulers`,
    },
    {
        id: 4,
        title: `Satavahana Dynasty`,
        category: `Satavahana`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Map_of_the_Satavahanas.png/800px-Map_of_the_Satavahanas.png",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Complete_view_of_Inscription_in_cave_at_Naneghat.jpg/290px-Complete_view_of_Inscription_in_cave_at_Naneghat.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Vashishtiputra_Sri_Satakarni.jpg/800px-Vashishtiputra_Sri_Satakarni.jpg",
        desc: `
        The Satavahanas (Sādavāhana or Sātavāhana, IAST: Sātavāhana), also referred to as the Andhras in the Puranas, were an ancient Indian dynasty based in the Deccan region. Most modern scholars believe that the Satavahana rule began in the late second century BCE and lasted until the early third century CE, although some assign the beginning of their rule to as early as the 3rd century BCE based on the Puranas, but uncorroborated by archaeological evidence. The Satavahana kingdom mainly comprised the present-day Andhra Pradesh, Telangana, and Maharashtra. At different times, their rule extended to parts of modern Gujarat, Madhya Pradesh, and Karnataka. The dynasty had different capital cities at different times, including Pratishthana (Paithan) and Amaravati (Dharanikota).<br><br>

        The origin of the dynasty is uncertain, but according to the Puranas, their first king overthrew the Kanva dynasty. In the post-Maurya era, the Satavahanas established peace in the Deccan region and resisted the onslaught of foreign invaders. In particular their struggles with the Saka Western Satraps went on for a long time. The dynasty reached its zenith under the rule of Gautamiputra Satakarni and his successor Vasisthiputra Pulamavi. The kingdom fragmented into smaller states by the early 3rd century CE.<br><br>

        The Satavahanas were early issuers of Indian state coinage struck with images of their rulers. They formed a cultural bridge and played a vital role in trade and the transfer of ideas and culture to and from the Indo-Gangetic Plain to the southern tip of India. They supported Hinduism as well as Buddhism and patronised Prakrit literature.
        `,
        desc1: `The Satavahanas and neighbouring polities in South Asia, early 1st century CE.`,
        desc2: `Naneghat inscription. Dated to 70-60 BCE, in the reign of Satakarni I.`,
        desc3: `Coin of Vashishtiputra Satakarni.`,
        subTitle: `Origins`,
        subDesc: `
        According to one theory, the word "Satavahana" is a Prakrit form of the Sanskrit Sapta-Vahana ("driven by seven"; in Hindu mythology, the chariot of the sun god is drawn by seven horses). This would indicate that the Satavahanas originally claimed association with the legendary solar dynasty, as was common in ancient India.<br><br>

        According to Inguva Kartikeya Sarma, the dynasty's name is derived from the words sata ("sharpened",
        "nimble" or "swift") and vahana ("vehicle"); the expression thus means "one who rides a nimble horse". Another theory connects their name to the earlier Satiyaputa dynasty. Yet another theory derives their name from the Munda words Sadam ("horse") and Harpan ("son"), implying "son of the performer of a horse sacrifice".<br><br>

        Several rulers of the dynasty bear the name or title "Satakarni". Satavahana, Satakarni, Satakani and Shalivahana appear to be variations of the same word. Damodar Dharmanand Kosambi theorised that the word "Satakarni" is derived from the Munda words sada ("horse") and kon ("son").<br><br>

        The Puranas use the name "Andhra" for the Satavahanas. The term "Andhra" may refer to the ethnicity or territory of the dynasty. It does not appear in the dynasty's own records.
        `,
        listTitle: `Main Satavahana Rulers`,
    },
    {
        id: 5,
        title: `Gupta Dynasty`,
        category: `Gupta`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Map_of_the_Gupta_Empire.png/250px-Map_of_the_Gupta_Empire.png",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/ChandraguptaIIOnHorse.jpg/220px-ChandraguptaIIOnHorse.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Deogarh01.jpg/800px-Deogarh01.jpg",
        desc: `
        The Gupta Empire was an ancient Indian empire which existed from the early 4th century CE to late 6th century CE. At its zenith, from approximately 319 to 467 CE, it covered much of the Indian subcontinent. This period is considered as the Golden Age of India by historians. The ruling dynasty of the empire was founded by the king Sri Gupta; the most notable rulers of the dynasty were Chandragupta I, Samudragupta, and Chandragupta II, also known as Vikramaditya. The 5th-century CE Sanskrit poet Kalidasa credits the Guptas with having conquered about twenty-one kingdoms, both in and outside India, including the kingdoms of Parasikas, the Hunas, the Kambojas, tribes located in the west and east Oxus valleys, the Kinnaras, Kiratas, and others.<br><br>

        The high points of this period are the great cultural developments which took place primarily during the reigns of Samudragupta, Chandragupta II and Kumaragupta I. Many Hindu epics and literary sources, such as Mahabharata and Ramayana, were canonised during this period. The Gupta period produced scholars such as Kalidasa, Aryabhata, Varahamihira, and Vatsyayana who made great advancements in many academic fields. Science and political administration reached new heights during the Gupta era. The period gave rise to achievements in architecture, sculpture, and painting that "set standards of form and taste determined the whole subsequent course of art, not only in India but far beyond her borders". Strong trade ties also made the region an important cultural centre and established the region as a base that would influence nearby kingdoms and regions in India and Southeast Asia. The Puranas, earlier long poems on a variety of subjects, are also thought to have been committed to written texts around this period. Hinduism was followed by the rulers and the Brahmins flourished in the Gupta empire but the Guptas tolerated people of other faiths as well.<br><br>

        The empire eventually died out because of factors such as substantial loss of territory and imperial authority caused by their own erstwhile feudatories, as well as the invasion by the Huna peoples (Kidarites and Alchon Huns) from Central Asia. After the collapse of the Gupta Empire in the 6th century, India was again ruled by numerous regional kingdoms.
        `,
        desc1: `Approximate extent of the Gupta territories`,
        desc2: `An 8 gm gold coin featuring Chandragupta II.`,
        desc3: `Dashavatara Temple is a Vishnu Hindu temple built during the Gupta period.`,
        subTitle: `Origins`,
        subDesc: `
        The homeland of the Guptas is uncertain. According to one theory, they originated in the present-day lower-doab region of Uttar Pradesh, where most of the inscriptions and coin hoards of the early Gupta kings have been discovered. This theory is also supported by the Purana, as argued by the proponents, that mention the territory of the early Gupta kings as Prayaga, Saketa, and Magadha areas in the Ganges basin.<br><br>

        Another prominent theory locates the Gupta homeland in the present-day Bengal region in Ganges basin, based on the account of the 7th-century Chinese Buddhist monk Yijing. According to Yijing, king Che-li-ki-to (identified with the dynasty's founder Shri Gupta) built a temple for Chinese pilgrims near Mi-li-kia-si-kia-po-no (apparently a transcription of Mriga-shikha-vana). Yijing states that this temple was located more than 40 yojanas east of Nalanda, which would mean it was situated somewhere in the modern Bengal region. Another proposal is that the early Gupta kingdom extended from Prayaga in the west to northern Bengal in the east.<br><br>

        The Gupta records do not mention the dynasty's varna (social class). Some historians, such as A.S. Altekar, have theorised that they were of Vaishya origin, as certain ancient Indian texts prescribe the name "Gupta" for the members of the Vaishya varna. According to historian R. S. Sharma, the Vaishyas – who were traditionally associated with trade – may have become rulers after resisting oppressive taxation by the previous rulers. Critics of the Vaishya-origin theory point out that the suffix Gupta features in the names of several non-Vaishyas before as well as during the Gupta period, and the dynastic name "Gupta" may have simply derived from the name of the family's first king Gupta. Some scholars, such as S.R. Goyal, theorise that the Guptas were Brahmanas, because they had matrimonial relations with Brahmans, but others reject this evidence as inconclusive.Based on the Pune and Riddhapur inscriptions of the Gupta princess Prabhavati-gupta, some scholars believe that the name of her paternal gotra (clan) was "Dharana", but an alternative reading of these inscriptions suggests that Dharana was the gotra of her mother Kuberanaga.
        `,
        listTitle: `Main Gupta Rulers`,
    },
]

const classicalList = [
    {
        id: 1,
        singleTitle: `Chandragupta Maurya`,
        time1: `322BCE`,
        singleCategory: `Maurya`,
        time2: `297BCE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Shravanabelagola2007_-_44.jpg/800px-Shravanabelagola2007_-_44.jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MauryanCoin.JPG/1280px-MauryanCoin.JPG",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Footprint_of_Chandragupta_Maurya.jpg/1024px-Footprint_of_Chandragupta_Maurya.jpg",
        info: `
        After the death of Alexander the Great in 323 BCE, Chandragupta led a series of campaigns in 305 BCE to take satrapies in the Indus Valley and northwest India. When Alexander's remaining forces were routed, returning westwards, Seleucus I Nicator fought to defend these territories. Not many details of the campaigns are known from ancient sources. Seleucus was defeated and retreated into the mountainous region of Afghanistan.<br><br>

        The two rulers concluded a peace treaty in 303 BCE, including a marital alliance. Under its terms, Chandragupta received the satrapies of Paropamisadae (Kamboja and Gandhara) and Arachosia (Kandhahar) and Gedrosia (Balochistan). Seleucus I received the 500 war elephants that were to have a decisive role in his victory against western Hellenistic kings at the Battle of Ipsus in 301 BCE. Diplomatic relations were established and several Greeks, such as the historian Megasthenes, Deimakos and Dionysius resided at the Mauryan court.<br><br>

        Megasthenes in particular was a notable Greek ambassador in the court of Chandragupta Maurya. According to Arrian, ambassador Megasthenes (c. 350 – c. 290 BCE) lived in Arachosia and travelled to Pataliputra. Megasthenes' description of Mauryan society as freedom-loving gave Seleucus a means to avoid invasion, however, underlying Seleucus' decision was the improbability of success. In later years, Seleucus' successors maintained diplomatic relations with the Empire based on similar accounts from returning travellers.<br><br>

        Chandragupta established a strong centralised state with an administration at Pataliputra, which, according to Megasthenes, was "surrounded by a wooden wall pierced by 64 gates and 570 towers". Aelian, although not expressly quoting Megasthenes nor mentioning Pataliputra, described Indian palaces as superior in splendor to Persia's Susa or Ecbatana. The architecture of the city seems to have had many similarities with Persian cities of the period.
        `,
        info1: `Bhadrabahu Cave, Shravanabelagola where Chandragupta is said to have died`,
        info2: `Silver punch mark coin of the Maurya empire, with symbols of wheel and elephant`,
        info3: `The Footprints of Chandragupta Maurya on Chandragiri Hill`,
    },
    {
        id: 2,
        singleTitle: `Bindusara`,
        time1: `297BCE`,
        singleCategory: `Maurya`,
        time2: `272BCE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Barabar_Caves_2.JPG/260px-Barabar_Caves_2.JPG",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/I42_1karshapana_Maurya_Bindusara_MACW4165_1ar_%288486583162%29.jpg/1920px-I42_1karshapana_Maurya_Bindusara_MACW4165_1ar_%288486583162%29.jpg",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/9/9b/MauryanRingstone.JPG",
        info: `
        Bindusara was born to Chandragupta, the founder of the Mauryan Empire. This is attested by several sources, including the various Puranas and the Mahavamsa. He is attested by the Buddhist texts such as Dipavamsa and Mahavamsa ("Bindusaro"); the Jain texts such as Parishishta-Parvan; as well as the Hindu texts such as Vishnu Purana ("Vindusara"). According to the 12th century Jain writer Hemachandra's Parishishta-Parvan, the name of Bindusara's mother was Durdhara. Some Greek sources also mention him by the name "Amitrochates" or its variations.<br><br>

        Historian Upinder Singh estimates that Bindusara ascended the throne around 297 BCE. Bindusara, just 22 years old, inherited a large empire that consisted of what is now, Northern, Central and Eastern parts of India along with parts of Afghanistan and Baluchistan. Bindusara extended this empire to the southern part of India, as far as what is now known as Karnataka. He brought sixteen states under the Mauryan Empire and thus conquered almost all of the Indian peninsula (he is said to have conquered the 'land between the two seas' – the peninsular region between the Bay of Bengal and the Arabian Sea). Bindusara did not conquer the friendly Tamil kingdoms of the Cholas, ruled by King Ilamcetcenni, the Pandyas, and Cheras. Apart from these southern states, Kalinga (modern Odisha) was the only kingdom in India that did not form part of Bindusara's empire. It was later conquered by his son Ashoka, who served as the viceroy of Ujjaini during his father's reign, which highlights the importance of the town.<br><br>

        Bindusara's life has not been documented as well as that of his father Chandragupta or of his son Ashoka. Chanakya continued to serve as prime minister during his reign. According to the medieval Tibetan scholar Taranatha who visited India, Chanakya helped Bindusara "to destroy the nobles and kings of the sixteen kingdoms and thus to become absolute master of the territory between the eastern and western oceans". During his rule, the citizens of Taxila revolted twice. The reason for the first revolt was the maladministration of Susima, his eldest son. The reason for the second revolt is unknown, but Bindusara could not suppress it in his lifetime. It was crushed by Ashoka after Bindusara's death
        `,
        info1: `Mauryan architecture in the Barabar Caves. Lomas Rishi Cave.`,
        info2: `A silver coin of 1 karshapana of the Maurya empire, period of Bindusara.`,
        info3: `Mauryan ringstone, with standing goddess.`,
    },
    {
        id: 3,
        singleTitle: `Ashoka`,
        time1: `272BCE`,
        singleCategory: `Maurya`,
        time2: `232BCE`,
        pic1: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Sarnath_capital.jpg/320px-Sarnath_capital.jpg",
        pic2: "https://upload.wikimedia.org/wikipedia/commons/4/45/6thPillarOfAshoka.JPG",
        pic3: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Ashoka%27s_visit_to_the_Ramagrama_stupa_Sanchi_Stupa_1_Southern_gateway.jpg/800px-Ashoka%27s_visit_to_the_Ramagrama_stupa_Sanchi_Stupa_1_Southern_gateway.jpg",
        info: `
        As a young prince, Ashoka (r. 272–232 BCE) was a brilliant commander who crushed revolts in Ujjain and Takshashila. As monarch he was ambitious and aggressive, re-asserting the Empire's superiority in southern and western India. But it was his conquest of Kalinga (262–261 BCE) which proved to be the pivotal event of his life. Ashoka used Kalinga to project power over a large region by building a fortification there and securing it as a possession. Although Ashoka's army succeeded in overwhelming Kalinga forces of royal soldiers and civilian units, an estimated 100,000 soldiers and civilians were killed in the furious warfare, including over 10,000 of Ashoka's own men. Hundreds of thousands of people were adversely affected by the destruction and fallout of war. When he personally witnessed the devastation, Ashoka began feeling remorse. Although the annexation of Kalinga was completed, Ashoka embraced the teachings of Buddhism, and renounced war and violence. He sent out missionaries to travel around Asia and spread Buddhism to other countries.<br><br>

        Ashoka implemented principles of ahimsa by banning hunting and violent sports activity and ending indentured and forced labor (many thousands of people in war-ravaged Kalinga had been forced into hard labour and servitude). While he maintained a large and powerful army, to keep the peace and maintain authority, Ashoka expanded friendly relations with states across Asia and Europe, and he sponsored Buddhist missions. He undertook a massive public works building campaign across the country. Over 40 years of peace, harmony and prosperity made Ashoka one of the most successful and famous monarchs in Indian history. He remains an idealized figure of inspiration in modern India.<br><br>

        The Edicts of Ashoka, set in stone, are found throughout the Subcontinent. Ranging from as far west as Afghanistan and as far south as Andhra (Nellore District), Ashoka's edicts state his policies and accomplishments. Although predominantly written in Prakrit, two of them were written in Greek, and one in both Greek and Aramaic. Ashoka's edicts refer to the Greeks, Kambojas, and Gandharas as peoples forming a frontier region of his empire. They also attest to Ashoka's having sent envoys to the Greek rulers in the West as far as the Mediterranean. The edicts precisely name each of the rulers of the Hellenic world at the time such as Amtiyoko (Antiochus), Tulamaya (Ptolemy), Amtikini (Antigonos), Maka (Magas) and Alikasudaro (Alexander) as recipients of Ashoka's proselytism.[citation needed] The Edicts also accurately locate their territory "600 yojanas away" (a yojanas being about 7 miles), corresponding to the distance between the center of India and Greece (roughly 4,000 miles).
        `,
        info1: `Ashoka pillar at Vaishali.`,
        info2: `Fragment of the 6th Pillar Edict of Ashoka (238 BCE).`,
        info3: `1st century BCE/CE relief from Sanchi, showing Ashoka on his chariot, visiting the Nagas at Ramagrama.`,
    },
    {
        id: 4,
        singleTitle: `Pushyamitra Shunga`,
        time1: `185BCE`,
        singleCategory: `Shunga`,
        time2: `149BCE`,
        info: `
        Pushyamitra Shunga (IAST: Puṣyamitra Śuṅga) was the founder and first ruler of the Shunga Empire which he established against the Maurya Empire.<br><br>

        Pushyamitra is recorded to have performed numerous Ashvamedha campaigns to legitimize his right to rule. Inscriptions of the Shungas have been found as far as the Ayodhya (the Dhanadeva-Ayodhya inscription), and the Divyavadana mentions that his empire stretched as far as Sakala (Sialkot) in the Punjab region in the northwest.<br><br>

        The Buddhist texts state that Pushyamitra persecuted the Buddhists; scholars have expressed skepticism about these claims.  According to the Puranas, Pushyamitra became the king after killing his master Brihadratha, the last Mauryan king. However, the Buddhist text Divyavadana names Pushyamitra as the last Mauryan king. This text appears to have confused Brihadratha with Pushyamitra.<br><br>

        H. C. Raychaudhuri theorized that the name "Shunga" is derived from the Sanskrit word for the fig tree.
        `,
        },
    {
        id: 5,
        singleTitle: `Agnimitra Shunga`,
        time1: `149BCE`,
        singleCategory: `Shunga`,
        time2: `141BCE`,
        info: `
        Agnimitra (Sanskrit: अग्निमित्रः) was the second king of the Shunga dynasty of northern India. He succeeded his father, Pushyamitra Shunga, in 149 BCE. The Vayu Purana and the Brahmanda Purana have assigned 8 years as the length of his reign.<br><br>

        According to the Mālavikāgnimitra (Act I, Verse 6-8 and Act V, Verse 13–14), a war broke out between the Shungas and neighboring Vidarbha kingdom during Agnimitra's reign. Before the rise of the Shungas, Vidarbha had become independent from the Mauryan Empire when a former Mauryan sachiva (minister) put his brother-in-law Yajnasena on the throne. Madhavasena, a cousin of Yajnasena, sought help from Agnimitra in overthrowing his cousin, but was captured while crossing the border of Vidarbha and imprisoned.<br><br>

        Agnimitra demanded the release of Madhavasena, and in return Yajnasena demanded the release of the former Mauryan minister, who had been captured earlier by Agnimitra. Instead, Agnimitra sent his army to invade Vidarbha. Yajnasena was defeated and forced to divide Vidarbha with Madhavasena, and both cousins recognized the suzerainty of the Shunga rulers.
        `,
    },
    {
        id: 6,
        singleTitle: `Devabhuti Shunga`,
        time1: `83BCE`,
        singleCategory: `Shunga`,
        time2: `75BCE`,
        info: `
        Devabhuti also known as Devbhomi', was the last king of the Shunga Empire in ancient India. He was assassinated by his minister Vasudeva Kanva. Following his death, the Shunga dynasty was then replaced by the subsequent Kanvas.<br><br>

        The later Shunga kings after Pushyamitra Shunga, had little power and were puppets in the hands of their ministers. According to Bana's Harshacharita, he was killed by his Chief minister Vasudeva Kanva with help of the daughter of a servant woman of Devabhuti, who disguised herself as his queen.He is said to have been overfond of the company of women & overindulging in sensual pleasures
        `,
    },
    {
        id: 7,
        singleTitle: `Kujula Kadphises`,
        time1: `30CE`,
        singleCategory: `Kushan`,
        time2: `80CE`,
        info: `
        Kujula Kadphises was a Kushan prince who united the Yuezhi confederation of China during the 1st century CE, and became the first Kushan emperor. According to the Rabatak inscription, he was the great grandfather of the great Kushan king Kanishka I. He is considered the founder of the Kushan Empire.<br><br>

        Conquests by Kujula Kadphises probably took place sometime between AD 45 and 60 and laid the basis for the Kushan Empire which was rapidly expanded by his descendants.<br><br>

        Kujula issued an extensive series of coins and fathered at least two sons, Sadaṣkaṇa (who is known from only two inscriptions, especially the Rabatak inscription, and apparently never ruled), and seemingly Vima Takto.Kujula Kadphises was the great-grandfather of Kanishka.
        `,
    },
    {
        id: 8,
        singleTitle: `Vima Taktu or Sadashkana`,
        time1: `80CE`,
        singleCategory: `Kushan`,
        time2: `95CE`,
        info: `
        Vima Takto (Ancient Chinese: 閻膏珍 Yangaozhen) is mentioned in the Rabatak inscription (another son, Sadashkana, is mentioned in an inscription of Senavarman, the King of Odi). He was the predecessor of Vima Kadphises, and Kanishka I. He expanded the Kushan Empire into the northwest of South Asia.<br><br>

        Vima Takto was long known as "The nameless King", since his coins only showed the legend "The King of Kings, Great Saviour", until the discovery of the Rabatak inscription helped connect his name with the title on the coins.<br><br>

        Vima Takto's empire covered northwestern Gandhara and greater Bactria towards China, where Kushan presence has been asserted in the Tarim Basin. Under his reign, embassies were also sent to the Chinese court.
        `,
    },
    {
        id: 9,
        singleTitle: `Vima Kadphises`,
        time1: `95CE`,
        singleCategory: `Kushan`,
        time2: `127CE`,
        info: `
        Vima Kadphises (Kushan language: Οοημο Καδφισης) was a Kushan emperor from around AD 95–127, the son of Sadashkana and the grandson of Kujula Kadphises, and the father of Kanishka I, as detailed by the Rabatak inscription.<br><br>

        Vima Kadphises added to the Kushan territory by his conquests in Bactria. He issued an extensive series of coins and inscriptions. He issued gold coins in addition to the existing copper and silver coinage
        `,
    },
    {
        id: 10,
        singleTitle: `Kanishka I`,
        time1: `127CE`,
        singleCategory: `Kushan`,
        time2: `150CE`,
        info: `
        The rule of Kanishka the Great, fourth Kushan king, lasted for about 23 years from c. AD 127. Upon his accession, Kanishka ruled a huge territory (virtually all of northern India), south to Ujjain and Kundina and east beyond Pataliputra, according to the Rabatak inscription.<br><br>

        His territory was administered from two capitals: Purushapura (now Peshawar in northwestern Pakistan) and Mathura, in northern India. He is also credited (along with Raja Dab) for building the massive, ancient Fort at Bathinda (Qila Mubarak), in the modern city of Bathinda, Indian Punjab.<br><br>

        The Kushans also had a summer capital in Bagram (then known as Kapisa), where the "Begram Treasure", comprising works of art from Greece to China, has been found. According to the Rabatak inscription, Kanishka was the son of Vima Kadphises, the grandson of Sadashkana, and the great-grandson of Kujula Kadphises. Kanishka's era is now generally accepted to have begun in 127 on the basis of Harry Falk's ground-breaking research. Kanishka's era was used as a calendar reference by the Kushans for about a century, until the decline of the Kushan realm.
        `,
    },
    {
        id: 11,
        singleTitle: `Huvishka`,
        time1: `150CE`,
        singleCategory: `Kushan`,
        time2: `180CE`,
        info: `
        Huvishka (Kushan: Οοηϸκι, "Ooishki") was a Kushan emperor from the death of Kanishka (assumed on the best evidence available to be in 150) until the succession of Vasudeva I about thirty years later. His rule was a period of retrenchment and consolidation for the Empire. In particular he devoted time and effort early in his reign to the exertion of greater control over the city of Mathura.
        `,
    },
    {
        id: 12,
        singleTitle: `Vasudeva I`,
        time1: `190CE`,
        singleCategory: `Kushan`,
        time2: `230CE`,
        info: `
        Vasudeva I (Kushan: Βαζοδηο "Bazodeo", Chinese: 波調 "Bodiao") was the last of the "Great Kushans". Named inscriptions dating from year 64 to 98 of Kanishka's era suggest his reign extended from at least AD 191 to 225. He was the last great Kushan emperor, and the end of his rule coincides with the invasion of the Sasanians as far as northwestern India, and the establishment of the Indo-Sasanians or Kushanshahs in what is nowadays Afghanistan, Pakistan and northwestern India from around AD 240.
        `,
    },
    {
        id: 13,
        singleTitle: `Vāsishka`,
        time1: `247CE`,
        singleCategory: `Kushan`,
        time2: `267CE`,
        info: `
        Vāsishka was a Kushan emperor who seems to have had a 20-year reign following Kanishka II. His rule is recorded at Mathura, in Gandhara and as far south as Sanchi (near Vidisa), where several inscriptions in his name have been found, dated to the year 22 (the Sanchi inscription of "Vaksushana" – i.e., Vasishka Kushana) and year 28 (the Sanchi inscription of Vasaska – i.e., Vasishka) of a possible second Kanishka era.
        `,
    },
    {
        id: 14,
        singleTitle: `Little Kushans`,
        time1: `270CE`,
        singleCategory: `Kushan`,
        time2: `350CE`,
        info: `
        Following territory losses in the west (Bactria lost to the Kushano-Sasanians), and in the east (loss of Mathura to the Gupta Empire), several "Little Kushans" are known, who ruled locally in the area of Punjab with their capital at Taxila: Vasudeva II (270-300), Mahi (300-305), Shaka (305-335) and Kipunada (335-350).They probably were vassals of the Gupta Empire, until the invasion of the Kidarites destroyed the last remains of Kushan rule.
        `,
    },
    {
        id: 15,
        singleTitle: `Simuka`,
        time1: `120BCE`,
        singleCategory: `Satavahana`,
        time2: `100BCE`,
        info: `
        Simuka was an Indian king belonging to the Satavahana dynasty. He is mentioned as the first king in a list of royals in a Satavahana inscription at Nanaghat. In the Puranas, the name of the first Andhra (Satavahana) king is variously spelt as Shivmukha, Sishuka, Sindhuka, Chhismaka, Shipraka, Srimukha, etc. These are believed to be corrupted spellings of "Simuka", resulting from copying and re-copying of manuscripts.<br><br>

        Based on available evidence, Simuka cannot be dated with certainty. According to one theory, he lived in 3rd century BCE; but he is generally thought to have lived in the 1st century BCE. Epigraphical evidence strongly suggests a 1st century BCE date for Simuka: Simuka seems to be mentioned as the father the acting king Satakarni in the Naneghat inscription dated to 70-60 BCE, itself considered on palaeographical grounds to be posterior to the Nasik Caves inscription of Kanha (probably Simuka's brother) in Cave 19, dated to 100-70 BCE. Recent analysis of sources puts Simuka´s reign possibly around 120 - 96 BCE.
        `,
    },
    {
        id: 16,
        singleTitle: `Kanha`,
        time1: `100BCE`,
        singleCategory: `Satavahana`,
        time2: `70BCE`,
        info: `
        Kanha was a ruler of the Satavahana dynasty of India. Historian Himanshu Prabha Ray assigns his reign to the period c. 100-70 BCE. Kanha has been mentioned as "Krishna" (IAST: Kṛṣṇa) in the Puranas. According to the Puranic genealogy, he was the brother of the first Satavahana king Simuka (whose name varies according to the different Puranas).<br><br>

        Besides the legendary Puranas, Kanha's existence is also supported by an epigraphic record at Cave No.19 in the Nasik Caves. He is identified with the "Kanha-raja" (King Kanha) of "Satavahana-kula" (Satavahana family) mentioned in a Nashik cave inscription. The inscription states that the cave was excavated by maha-matra (officer-in-charge) of the shramanas (non-Vedic ascetics) during Kanha's reign. Based on this, Sudhakar Chattopadhyaya concludes that Kanha favoured Buddhism, and had an administrative department dedicated to the welfare of Buddhist monks. Also, the term maha-matra, well known in Ashokan inscriptions, indicates that the early Satavahanas followed the Mauryan administrative model.
        `,
    },
    {
        id: 17,
        singleTitle: `Sātakarnī I`,
        time1: `70BCE`,
        singleCategory: `Satavahana`,
        time2: `60BCE`,
        info: `
        Satakarni was the third of the Satavahana kings, who ruled the Deccan region of India. His reign is generally dated to 70-60 BCE, although some authors have claimed 187-177 BCE, and most recently dated to 88-42 BCE. It was thought there were "two Satakarnis" (Satakarni I and Satakarni II), however, Andrew Ollett argues that there is only one Satakarni, as the alleged first Satakarni is assigned ten years, and the second, fifty years by other scholars, but the only dated inscription of this king is Candankheda seal from his reign's year 30, around 60 BCE, and he ruled ca. 88-42 BCE.<br><br>

        According to the Puranas, the Satavahana king Simuka was succeeded by his brother Krishna (also known as Kanha). According to Matsya Purana, Krishna was succeeded by Mallakarni, but according to other Puranas, he was succeeded by Satakarni. The Nanaghat cave inscription of Satakarni lists his family members: it mentions Simuka's name, but not that of Krishna. Based on this, multiple historians conclude that Satakarni was Simuka's son, and succeeded Krishna. G. V. Rao, however, believes that the inscription is that of a different king Satakarni II; Simuka is mentioned in the inscription as the founder of the dynasty.According to the Matsya Purana, Satakarni enjoyed a long reign of about 56 years. He seems to have conquered Western Malwa region from the Shungas.
        `,
    },
    {
        id: 18,
        singleTitle: `Gautamiputra Satakarni`,
        time1: `86CE`,
        singleCategory: `Satavahana`,
        time2: `110CE`,
        info: `
        Gautamiputra Satakarni was a ruler of the Satavahana Empire in present-day Deccan region of India. He was mentioned as the important and greatest ruler of Satavahana Dynasty. He ruled in the 1st or 2nd century CE, although his exact period is uncertain. His reign is dated variously: 86-110 CE, c. 103-127 CE, 106-130 CE, or more recently and specifically ca. 60-85 CE.<br><br>

        The information available about Gautamiputra Satakarni comes from his coins, the Satavahana inscriptions, and the royal genealogies in the various Puranas. The best known of these is the Nashik prashasti (eulogy) inscription of his mother Gautami Balashri, which credits him with extensive military conquests. Historical evidence suggests that Gautamiputra revived the Satavahana power after a decline caused by Saka invasions.
        `,
    },
    {
        id: 19,
        singleTitle: `Vasishthiputra Pulumavi`,
        time1: `110CE`,
        singleCategory: `Satavahana`,
        time2: `138CE`,
        info: `
        Vasishthiputra Pulumavi was a Satavahana king, and the son of Gautamiputra Satakarni. The new consensus for his reign is ca. 85-125 CE, although it was earlier dated variously: 110–138 CE or 130–159 CE. He is also referred to as Vasishthiputra Sri Pulumavi. Ptolemy, the second century writer, refers to Pulumavi as Siriptolemaios, a contemporary of the Western satrap, Chastana. The capital of Sri Pulumavi is reported to have been at Paithan.
        `,
    },
    {
        id: 20,
        singleTitle: `Vasishthiputra Satakarni`,
        time1: `138CE`,
        singleCategory: `Satavahana`,
        time2: `145CE`,
        info: `
        Vashishtiputra Sātakarni was a Satavahana king, who ruled the Deccan region in India, during the 2nd century CE. He was the brother of Yajna Sri Satakarni his regnal successor. His reign is dated variously: 158-165 CE.<br><br>

        Vashishtiputra Sātakarni was in great conflict with the Scythian Western Kshatrapas in the West, but he eventually married the daughter of Rudradaman I of the Western Kshatrapas dynasty, in order to forge an alliance. The inscription relating the marriage between Rudradaman I's daughter and Vashishtiputra Satakarni appears in a cave at Kanheri. Later, however, Vashishtiputra Sātakarni was defeated by his father-in-law in battle, with serious effect on Sātavāhana power and prestige.
        `,
    },
    {
        id: 21,
        singleTitle: `Shivaskanda Satakarni`,
        time1: `145CE`,
        singleCategory: `Satavahana`,
        time2: `152CE`,
        info: `
        Shivaskanda Satakarni was one of the last rulers of the Satavahana dynasty in India. He succeeded Vashishtiputra Satakarni in 145 CE. His reign is dated variously: 154-161 CE, or 145-152 CE. He was defeated twice in battle by his Western Satrap enemy Rudradaman.
        `,
    },
    {
        id: 22,
        singleTitle: `Shivaskanda Satakarni`,
        time1: `152CE`,
        singleCategory: `Satavahana`,
        time2: `181CE`,
        info: `
        Yajna Sri Satakarni also known as Gautamiputra Yajna Sri, was an Indian ruler of the Satavahana dynasty. He was the brother of Vashishtiputra Satakarni. His reign is dated variously: c. 152-181 CE, c. 165-195 CE, c. 170-199 CE or c. 174-203.<br><br>

        He is considered to be the last great king of the Satavahana dynasty. He regained some of the territory lost to Shakas (the Western Satraps) under Vashishtiputra Satakarni. He defeated the Western Satraps and reconquered their southern regions in western and central India. The Satavahana started to decline after Yajna Sri Satakarni, while the Western Satraps would continue to prosper for another two centuries.
        `,
    },
    {
        id: 23,
        singleTitle: `Chandragupta I`,
        time1: `319CE`,
        singleCategory: `Gupta`,
        time2: `350CE`,
        info: `
        Chandragupta I (Gupta script: Gupta allahabad c.svgGupta allahabad ndr.jpgGupta allahabad gu.jpgGupta allahabad pt.jpg Cha-ndra-gu-pta, r. c. 319-335 or 319-350 CE) was a king of the Gupta dynasty, who ruled in northern India. His title Maharajadhiraja ("great king of kings") suggests that he was the first emperor of the dynasty. It is not certain how he turned his small ancestral kingdom into an empire, although a widely accepted theory among modern historians is that his marriage to the Lichchhavi princess Kumaradevi helped him extend his political power. Their son Samudragupta further expanded the Gupta empire.<br><br>

        Chandragupta was a son of the Gupta king Ghatotkacha, and a grandson of the dynasty's founder Gupta, both of whom are called Maharaja ("great king") in the Allahabad Pillar inscription. Chandragupta assumed the title Maharajadhiraja and issued gold coins, which suggests that he was the first imperial ruler of the dynasty.<br><br>

        Chandragupta certainly reigned in the first quarter of the 4th century CE, but the exact period of his reign is uncertain. His assumption of the title Maharajadhiraja has led to suggestions that he founded the Gupta calendar era, and that the epoch of this era marks his coronation. Based on this argument, several historians, including V. A. Smith and P. L. Gupta, date Chandragupta's ascension to 319-320 CE, which they believe to be the beginning of the Gupta era. However, this is merely an assumption, and the identity of the founder of the Gupta era is not certain. Some historians, such as D. C. Sircar and R. C. Majumdar, theorize that the Gupta era marks the coronation of his son Samudragupta. S. R. Goyal theorizes that the era was started by the later king Chandragupta II, but its beginning was dated to Samudragupta's ascension. Chandragupta I probably had a long reign, as the Allahabad Pillar inscription suggests that he appointed his son as his successor, presumably after reaching an old age. However, the exact period of his reign is debated.
        `,
    },
    {
        id: 24,
        singleTitle: `Samudragupta`,
        time1: `350CE`,
        singleCategory: `Gupta`,
        time2: `375CE`,
        info: `
        Samudragupta was a ruler of the Gupta Empire of Ancient India. As a son of the Gupta emperor Chandragupta I and the Lichchhavi princess Kumaradevi, he greatly expanded his dynasty's political power.<br><br>

        The Allahabad Pillar inscription, a prashasti (eulogy) composed by his courtier Harishena, credits him with extensive military conquests. It suggests that he defeated several kings of northern India, and annexed their territories to his empire. He also marched along the south-eastern coast of India, advancing as far as the Pallava kingdom. In addition, he subjugated several frontier kingdoms and tribal oligarchies. His empire extended from Ravi River in the west to the Brahmaputra River in the east, and from the Himalayan foothills in the north to central India in the south-west; several rulers along the south-eastern coast were his tributaries.<br><br>

        Samudragupta performed the Ashvamedha sacrifice to prove his imperial sovereignty, and according to his coins, remained undefeated. His gold coins and inscriptions suggest that he was an accomplished poet, and also played music. His expansionist policy was continued by his son Chandragupta II.
        `,
    },
    {
        id: 25,
        singleTitle: `Chandragupta II "Vikramaditya"`,
        time1: `380CE`,
        singleCategory: `Gupta`,
        time2: `415CE`,
        info: `
        According to the Gupta records, amongst his sons, Samudragupta nominated prince Chandragupta II, born of queen Dattadevi, as his successor. Chandragupta II, Vikramaditya (the Sun of Power), ruled from 375 until 415. He married a Kadamba princess of Kuntala and of Naga lineage (Nāgakulotpannnā), Kuberanaga. His daughter Prabhavatigupta from this Naga queen was married to Rudrasena II, the Vakataka ruler of Deccan. His son Kumaragupta I was married to a Kadamba princess of the Karnataka region. Chandragupta II expanded his realm westwards, defeating the Saka Western Kshatrapas of Malwa, Gujarat and Saurashtra in a campaign lasting until 409. His main opponent Rudrasimha III was defeated by 395, and he crushed the Bengal chiefdoms. This extended his control from coast to coast, established a second capital at Ujjain and was the high point of the empire.[citation needed] Kuntala inscriptions indicate rule of Chandragupta in Kuntala region of Indian state of Karnataka. Hunza inscription also indicate that Chandragupta was able to rule north western indian subcontinent and proceeded to conquer Balkh, although some scholars have also disputed the identity of gupta king. Chalukyan ruler Vikramditya VI (r. 1076 – 1126 CE) mentions Chandragupta with his title and states 'why should the glory of the Kings Vikramaditya and Nanda be a hindrance any longer ? he with a loud command abolished that (era), which has the name of Saka, and made that (era) which has the Chalukya counting ”.<br><br>

        Despite the creation of the empire through war, the reign is remembered for its very influential style of Hindu art, literature, culture and science, especially during the reign of Chandragupta II. Some excellent works of Hindu art such as the panels at the Dashavatara Temple in Deogarh serve to illustrate the magnificence of Gupta art. Above all, it was the synthesis of elements that gave Gupta art its distinctive flavour. During this period, the Guptas were supportive of thriving Buddhist and Jain cultures as well, and for this reason, there is also a long history of non-Hindu Gupta period art. In particular, Gupta period Buddhist art was to be influential in most of East and Southeast Asia. Many advances were recorded by the Chinese scholar and traveller Faxian in his diary and published afterwards.
        `,
    },
    {
        id: 26,
        singleTitle: `Kumaragupta I`,
        time1: `415CE`,
        singleCategory: `Gupta`,
        time2: `455CE`,
        info: `
        Kumaragupta I was an emperor of the Gupta Empire of Ancient India. A son of the Gupta emperor Chandragupta II and queen Dhruvadevi, he seems to have maintained control of his inherited territory, which extended from Gujarat in the west to Bengal region in the east.<br><br>

        Kumaragupta performed an Ashvamedha sacrifice, which was usually performed to prove imperial sovereignty, although no concrete information is available about his military achievements. Based on the epigraphic and numismatic evidence, some modern historians have theorized that he may have subdued the Aulikaras of central India and the Traikutakas of western India.<br><br>

        The Bhitari pillar inscription states that his successor Skandagupta restored the fallen fortunes of the Gupta family, which has led to suggestions that during his last years, Kumaragupta suffered reverses, possibly against the Pushyamitras or the Hunas. However, this cannot be said with certainty, and the situation described in the Bhitari inscription may have been the result of events that happened after his death.
        `,
    },
    {
        id: 27,
        singleTitle: `Skandagupta`,
        time1: `455CE`,
        singleCategory: `Gupta`,
        time2: `467CE`,
        info: `
        Skandagupta, son and successor of Kumaragupta I is generally considered to be the last of the great Gupta rulers. He assumed the titles of Vikramaditya and Kramaditya. He defeated the Pushyamitra threat, but then was faced with invading Kidarites (sometimes described as the Hephthalites or "White Huns", known in India as the Sweta Huna), from the northwest.<br><br>

        He repelled a Huna attack around 455 CE, but the expense of the wars drained the empire's resources and contributed to its decline. The Bhitari Pillar inscription of Skandagupta, the successor of Chandragupta, recalls the near-annihilation of the Gupta Empire following the attacks of the Kidarites. The Kidarites seem to have retained the western part of the Gupta Empire.Skandagupta died in 467 and was succeeded by his agnate brother Purugupta.<br><br>
        `,
    }
]

const btns = document.querySelectorAll('.menu-btn');
const mainContainer = document.querySelector('.age-container');
const subContainer = document.querySelector('.age-sub-container');

btns.forEach(function (btn) {

    btn.addEventListener('click', function (e) {
        e.stopImmediatePropagation();
        const category = e.currentTarget.dataset.id;

        const classicalCat = classical.filter(function (item) {
            if (item.category === category) {
                return item;
            }
        });

        const listCat = classicalList.filter(function (item) {
            if (item.singleCategory === category) {
                return item;
            }
        })
        displayMain(classicalCat);
        if (category === 'Shunga' || category === 'Gupta' || category === 'Kushan' || category === 'Satavahana'){
        displaySub2(listCat);
    }else{
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

