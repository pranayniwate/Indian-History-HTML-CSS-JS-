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
    document.getElementById("Chalukya").click();

});

const medieval = [
    {
        id: 1,
        title: `Chalukya Dynasty`,
        category: `Chalukya`,
        img1: "https://www.mapsofindia.com/history/chalukya-dynasty-map.jpg",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/6th_century_Kannada_inscription_in_cave_temple_number_3_at_Badami.jpg/220px-6th_century_Kannada_inscription_in_cave_temple_number_3_at_Badami.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Cave_temple_number_3_at_Badami.jpg/220px-Cave_temple_number_3_at_Badami.jpg",
        desc: `
        The Chalukya dynasty was a Classical Indian dynasty that ruled large parts of southern and central India between the 6th and the 12th centuries. During this period, they ruled as three related yet individual dynasties. The earliest dynasty, known as the "Badami Chalukyas", ruled from Vatapi (modern Badami) from the middle of the 6th century. The Badami Chalukyas began to assert their independence at the decline of the Kadamba kingdom of Banavasi and rapidly rose to prominence during the reign of Pulakeshin II. After the death of Pulakeshin II, the Eastern Chalukyas became an independent kingdom in the eastern Deccan. They ruled from Vengi until about the 11th century. In the western Deccan, the rise of the Rashtrakutas in the middle of the 8th century eclipsed the Chalukyas of Badami before being revived by their descendants, the Western Chalukyas, in the late 10th century. These Western Chalukyas ruled from Kalyani (modern Basavakalyan) until the end of the 12th century.<br><br>

        The rule of the Chalukyas marks an important milestone in the history of South India and a golden age in the history of Karnataka. The political atmosphere in South India shifted from smaller kingdoms to large empires with the ascendancy of Badami Chalukyas. A Southern India-based kingdom took control and consolidated the entire region between the Kaveri and the Narmada rivers. The rise of this empire saw the birth of efficient administration, overseas trade and commerce and the development of new style of architecture called "Chalukyan architecture". Kannada literature, which had enjoyed royal support in the 9th century Rashtrakuta court found eager patronage from the Western Chalukyas in the Jain and Veerashaiva traditions. The 11th century saw the patronage of Telugu literature under the Eastern Chalukyas.
        `,
        desc1: `Maximum extent of the Chalukya Empire`,
        desc2: `Old Kannada inscription of Chalukya King Mangalesha.`,
        desc3: `Vaishnava Cave temple No. 3 at Badami, 578 CE.`,
        subTitle: `Origins`,
        subDesc: `
        While opinions vary regarding the early origins of the Chalukyas, the consensus among noted historians such as John Keay, D.C. Sircar, Hans Raj, S. Sen, Kamath, K. V. Ramesh and Karmarkar is that the founders of the empire at Badami were native to the modern Karnataka region. A theory that they were descendants of a 2nd-century chieftain called Kandachaliki Remmanaka, a feudatory of the Andhra Ikshvaku (from an Ikshvaku inscription of the 2nd century) was put forward. This according to Kamath has failed to explain the difference in lineage. The Kandachaliki feudatory call themselves Vashisthiputras of the Hiranyakagotra. The Chalukyas, however, address themselves as Harithiputras of Manavyasagotra in their inscriptions, which is the same lineage as their early overlords, the Kadambas of Banavasi. This makes them descendants of the Kadambas. The Chalukyas took control of the territory formerly ruled by the Kadambas.<br><br>

        A later record of Eastern Chalukyas mentions the northern origin theory and claims one ruler of Ayodhya came south, defeated the Pallavas and married a Pallava princess. She had a child called Vijayaditya who is claimed to be the Pulakeshin I's father. However, according to the historians K. V. Ramesh, Chopra and Sastri, there are Badami Chalukya inscriptions that confirm Jayasimha was Pulakeshin I's grandfather and Ranaraga, his father. Kamath and Moraes claim it was a popular practice in the 11th century to link South Indian royal family lineage to a Northern kingdom. The Badami Chalukya records themselves are silent with regards to the Ayodhya origin.<br><br>

        While the northern origin theory has been dismissed by many historians, the epigraphist K. V. Ramesh has suggested that an earlier southern migration is a distinct possibility which needs examination. According to him, the complete absence of any inscriptional reference of their family connections to Ayodhya, and their subsequent Kannadiga identity may have been due to their earlier migration into present day Karnataka region where they achieved success as chieftains and kings. Hence, the place of origin of their ancestors may have been of no significance to the kings of the empire who may have considered themselves natives of the Kannada speaking region. The writing of 12th century Kashmiri poet Bilhana suggests the Chalukya family belonged to the Shudra caste while other sources claim they were Kshatriyas.
        `,
        listTitle: `Periods in Chalukya history`,
    },
    {
        id: 2,
        title: `Harsha Dynasty`,
        category: `Harsha`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/India_7th_century_AD.jpg/800px-India_7th_century_AD.jpg",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_ruins_2.JPG/800px-Palace_ruins_2.JPG",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Seal_of_Harshavardhana_found_in_Nalanda.jpg/800px-Seal_of_Harshavardhana_found_in_Nalanda.jpg",
        desc: `
        Harshavardhana (c. 590–647 CE) was an Indian emperor who ruled northern India from 606 to 647 CE. He was a member of the Vardhana dynasty; and was the son of Prabhakaravardhana who defeated the Alchon Huna invaders, and the younger brother of Rajyavardhana, a king of Thanesar, present-day Haryana.<br><br>

        At the height of Harsha's power, his Empire covered much of North and Northwestern India, with the Narmada River as its southern boundary. He eventually made Kannauj (in present Uttar Pradesh state) his capital, and ruled till 647 CE. Harsha was defeated by the south Indian Emperor Pulakeshin II of the Chalukya dynasty in the Battle of Narmada, when Harsha tried to expand his Empire into the southern peninsula of India.<br><br>

        The peace and prosperity that prevailed made his court a centre of cosmopolitanism, attracting scholars, artists and religious visitors from far and wide. The Chinese traveller Xuanzang visited the court of Harsha and wrote a very favourable account of him, praising his justice and generosity. His biography Harshacharita ("Deeds of Harsha") written by Sanskrit poet Banabhatta, describes his association with Thanesar, besides mentioning the defence wall, a moat and the palace with a two-storied Dhavalagriha (white mansion).
        `,
        desc1: `Empire of Harsha, 7th century CE India.`,
        desc2: `Palace ruins at "Harsh ka tila" mound area spread over 1 km.`,
        desc3: `Seal of Harshavardhana found in Nalanda.`,
        subTitle: `Origins`,
        subDesc: `
        After the downfall of the Gupta Empire in the middle of the 6th century, North India was split into several independent kingdoms. The northern and western regions of India passed into the hands of a dozen or more feudatory states. Prabhakara Vardhana, the ruler of Sthanvisvara, who belonged to the Vardhana family, extended his control over neighbouring states. Prabhakar Vardhana was the first king of the Vardhana dynasty with his capital at Thaneswar. After Prabhakar Vardhana's death in 605, his eldest son, Rajya Vardhana, ascended the throne. Harsha Vardhana was Rajya Vardhana's younger brother. This period of kings from the same line has been referred to as the Vardhana dynasty in many publications.<br><br>

        At the time of Hwen Tshang's visit, Kanoj was the capital of Raja Harshvardhan, the most powerful sovereign in Northern India. According to Xuanxang, Emperor Harsha was of the Bais Rajput [Fei-she].  Thomas Rhys says that Xuanxang had ample opportunities for learning the antecedents of the royal family, so his assertion must have had some. Banabhatt his court poet also wrote in harshcharitra that he was a Bais kshatriya<br><br>

        Harsha's sister Rajyashri had been married to the Maukhari king, Grahavarman. This king, some years later, had been defeated and killed by king Devagupta of Malwa and after his death Rajyashri had been cast into prison by the victor. Harsha's brother, Rajya Vardhana, then the king at Thanesar, could not accept this affront on his family. So he marched against Devagupta and defeated him. However, Shashanka, king of Gauda in Eastern Bengal, then entered Magadha as a friend of Rajyavardhana, but in secret alliance with the Malwa king. Accordingly, Shashanka treacherously murdered Rajyavardhana. In the meantime, Rajyasri escaped into forests. On hearing about the murder of his brother, Harsha resolved at once to march against the treacherous king of Gauda, but this campaign remained inconclusive and beyond a point he turned back. Harsha ascended the throne at the age of 16. His first responsibility was to rescue his sister and to avenge the killings of his brother and brother-in-law. He rescued his sister when she was about to immolate herself.
        `,
        listTitle: ``,
    },
    {
        id: 3,
        title: `Karkota Dynasty`,
        category: `Karkota`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Karkota_Empire_map.jpg/220px-Karkota_Empire_map.jpg",
        img2: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Coin_of_%C5%9Ari_Durlabha_%28Jammu_and_Kashmir%29.jpg",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ancient_Ruins_at_Parihaspora_01.jpg/1024px-Ancient_Ruins_at_Parihaspora_01.jpg",
        desc: `
        The Karkota Dynasty (c. 625 − 855 CE) ruled over the Kashmir valley and some northern parts of the Indian subcontinent during 7th and 8th centuries. Their rule saw a period of political expansion, economic prosperity and emergence of Kashmir as a centre of culture and scholarship. The dynasty was founded by Durlabhavardhana.<br><br>

        The Karkota rulers were Kayastha and constructed several Vishnu shrines in their dominions. They however also allowed Buddhism to flourish under them. Stupa, Chaitya and Vihara can be found in the ruins of their capital. Martand Sun Temple in the Anantnag district were built by Lalitaditya. It is the oldest known Sun temple in India and was also one of the biggest temple complexes at the time.<br><br>

        Avanti Varman ascended the throne of Kashmir in 855, establishing the Utpala dynasty and ending the rule of Karkota dynasty.
        `,
        desc1: `Maximum extent of the Karkota Empire.`,
        desc2: `Coin of Durlabhavardhana, founder of the dynasty.`,
        desc3: `Parihaspur Stupa, built during the reign of Lalitaditya Muktapida.`,
        subTitle: `Establishment`,
        subDesc: `
        Scholars disagree on the specifics of establishment of the Karkotas, though it is held that their establishment followed the rule of the Hunas in the region of Kashmir.<br><br>

        Kalhana's third book mentions of a Gonanda dynasty (II), which ruled for about 590 years till the establishment of the Karkotas; however the chronology is widely deemed to be faulty and on cross-vetting with coins and inscriptions from outside Kashmir, names of some of the rulers are found to roughly correspond with the Alchon Huns, who ruled hundreds of years later than the time-frame assigned by Kalhana. In Kalhana's narrative, names of some rulers are reshuffled and/or repeated multiple times across the first three books, some stories are retrofitted and recycled, some reigns are impossibly long, and some rulers are telescoped into the past.<br><br>

        According to a roughly literal reading of the Rajatarangini, Durlabhavardhana belonged to a low caste and was employed by Baladitya, the last ruler of the Gonanda dynasty. Baladitya (apparently) had no male heir but a daughter Anaṅgalekhā and did not wish his territory to be annexed by in-laws. To avert such a possibility he married her to Durlabhavardhana, who had no royal lineage. However, after Baladitya's death, Durlabhavardhana ascended to the throne with help from a minister, and claimed descent from the mythical Naga king Karkotaka, establishing the Karkota Dynasty. This view is accepted by Witzeland Devika Rangachari.<br><br>

        Atreyi Biswas however rejects this literal description of the establishment of the Karkota dynasty as fictitious. In a critical reading of the Rajatarangini, and taking into account numismatic as well as literary sources, the dates of the Gonanda rulers are adjusted and Biswas deems the first ruler of the Karkota dynasty to be Durlabhaka Pratapaditya, who claimed the throne after defeating Yudhisthira, the last Alchon Hun ruler of Kashmir. His father Durlabhavardhana would have been a subordinate king under the-then Huna ruler, Narendraditya Khinkhila. Baladitya and his immediate predecessors of the Gonanda dynasty would never have existed at all or were subordinate kings under the Karkotas. Ahmad Hasan Dani follows her interpretation in one of his works.

        `,
        listTitle: `Rulers of KarKota Dynasty`,
    },
    {
        id: 4,
        title: `Arab Invasion`,
        category: `Arab`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/d/dd/QASIM.PNG",
        img2: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Coin_of_the_Umayyad_Caliphate%2C_minted_in_al-Hind_%28probably_Multan%29.jpg?20190611193645",
        img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/A_wide_angle_picture_of_Muhammad_Bin_Qasim_Masjid.jpg/1024px-A_wide_angle_picture_of_Muhammad_Bin_Qasim_Masjid.jpg",
        desc: `
        In the first half of the 8th century CE, a series of battles took place between the Umayyad Caliphate and the Indian kingdoms to the east of the Indus river.<br><br>

        Subsequent to the Arab conquest of Sindh in present-day Pakistan in 712 CE, Arab armies engaged kingdoms further east of the Indus. Between 724 and 810 CE, a series of battles took place between the Arabs and King Nagabhata I of the Pratihara dynasty, King Vikramaditya II of the Chalukya dynasty, and other small Indian kingdoms. In the north, Nagabhata of the Pratihara Dynasty defeated a major Arab expedition in Malwa. From the South, Vikramaditya II sent his general Avanijanashraya Pulakeshin, who defeated the Arabs in Gujarat. Later in 776 CE, a naval expedition by the Arabs was defeated by the Saindhava naval fleet under Agguka I.<br><br>

        The Arab defeats led to an end of their eastward expansion, and later manifested in the overthrow of Arab rulers in Sindh itself and the establishment of indigenous Muslim Rajput dynasties (Soomras and Sammas) there.<br><br>

        The first Arab invasion of India was an expedition by sea to conquer Thana near Mumbai as early as 636 A.D. It was undertaken during the vigorous expansionist regime of the second Caliph, Umar-bin-Akhtab, who was on a proselytizing mission to spread Islam to all corners of the world. He appointed Usman, of the tribe of Sakif, to capture Bahrain and Oman. Usman sent his brother Hakam to Bahrain and himself proceeded to Oman. Upon reaching Oman, Usman sent a naval expedition to capture Thana on the western coast of India.The Arab army was repulsed decisively and returned to Oman and the first ever Arab raid on India was defeated.<br><br>

        A second naval expedition was sent to conquer Barwas or Barauz (Broach) on the coast of southern Gujarat by Hakam, the brother of Usman. This attack too was repelled and the Arabs were driven back successfully.
        `,
        desc1: `Extent and expansion of Umayyad rule under Muhammad bin Qasim.`,
        desc2: `Coin of the Umayyad Caliphate.`,
        desc3: `Muhammad ibn Qasim Mosque in Sukkur, Pakistan.`,
        subTitle: `Background`,
        subDesc: `
        Post-Harsha Northern India. After Harsha's death in 647 A.D. confusion once again reigned supreme and a large number of small states sprang up on the ruins of his empire. The national unity of the country was completely lost. New States were being formed, dissolved and formed again. Most of these new states were under the rules of the Rajputs. At the time of Muslim invasions the whole of Northern India was divided into a large number of Rajput Kingdoms.<br><br>

        The Northwest was controlled by the Kashmir-based Karkota dynasty, and the Turk Shahis based in Kabul. Kanauj, the de facto capital of North India was held by Yashovarman, Northeast India was held by the Pala dynasty, and South India by the powerful Chalukyas. Western India was dominated by the Rai dynasty of Sindh, and several kingdoms of Gurjara-Pratihara(A Controversial and Major Rajput clan according to Historian Shanta Rani Sharma and Harsha's inscription) clans, based at Bhinmal (Bhillamala), Mandor, Nandol-Broach (Nandipuri-Bharuch) and Ujjain. The last of these clans, who called themselves Pratiharas were to be the eventually dominating force. Altogether, the combined region of southern Rajasthan and northern Gujarat was called Gurjaradesa (Gurjara country), before it got renamed to Rajputana in later medieval times. The Kathiawar peninsula (Saurashtra) was controlled by several small kingdoms, such as Saindhavas, and dominated by Maitrakas at Vallabhi.<br><br>

        The third wave of military expansion of the Umayyad Caliphate lasted from 692 to 718 CE. The reign of Al-Walid I (705–715 CE) saw the most dramatic Marwanid Umayyad conquests. In a period of barely ten years, North Africa, Spain, Transoxiana, and Sindh were subdued and colonised. Sindh, controlled by King Raja Dahir of the Rai dynasty, was captured by the Umayyad general Muhammad bin Qasim. Sindh, now a second-level province of the Caliphate (iqlim) with its capital at Al Mansura, was a suitable base for excursions into India. But, after bin Qasim's departure most of his captured territories were recaptured by Indian kings.<br><br>

        During the reign of Yazid II (720 to 724 CE), the fourth expansion was launched to all the warring frontiers, including India. The campaign lasted from 720 to 740 CE. During Yazid's times, there was no significant check to the Arab expansion. However, the advent of Hisham ibn Abd al-Malik (r. 691–743 CE), the 10th Umayyad Caliph, saw a turn in the fortune of the Umayyads which resulted in eventual defeat on all the fronts and a complete halt of Arab expansionism. The hiatus from 740 to 750 CE due to military exhaustion, also saw the advent of the third of a series of civil wars, which resulted in the collapse of the Umayyad Caliphate.
        `,
        listTitle: `Campaigns`,
    },
    {
        id: 5,
        title: `Medieval Cholas`,
        category: `Chola`,
        img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Rajendra_map_new.svg/800px-Rajendra_map_new.svg.png",
        img2: "https://upload.wikimedia.org/wikipedia/commons/0/03/Vijayala_choleswaram.png",
        img3: "https://upload.wikimedia.org/wikipedia/commons/9/94/Bronze_siva.png",
        desc: `
        Medieval Cholas rose to prominence during the middle of the 9th century CE and established one of the greatest empires of India. They successfully united South India under their rule and through their naval strength extended their influence in Southeast Asia and Sri Lanka. They had trade contacts with the Arabs in the west and with the Chinese in the east.<br><br>

        Medieval Cholas and Chalukyas were continuously in conflict over the control of Vengi and the conflict eventually exhausted both the empires and led to their decline. The Chola dynasty merged into the Eastern Chalukyan dynasty of Vengi through decades of alliances and later united under the Later Cholas.
        `,
        desc1: `Maximum extent of the Chola Empire.`,
        desc2: `Vijayalaya Choleswaram.`,
        desc3: `Chola Bronze icon. Shiva and Parvathi.`,
        subTitle: `Early History`,
        subDesc: `
        Vijayalaya Chola was probably a Pallava vassal. Vijayalaya captured Thanjavur in 848, making use of the opportunity during a war between Pandyas and Pallavas. The Cholas under Aditya I captured the Pallavas in the north (c. 869) and subdued the Pandayas and Cheras in the south (c. 903). Parantaka I drove the Pandayas out of their territories and captured Sri Lanka in 910. Rashtrakutas and Gangas in the north posed the biggest threat to the nascent Chola Empire and the Chola prince Rajaditya was killed in the battle of Thakkolam in 949. Parantaka had a long reign, and when he died in 950 his second son Gandaraditya became king. The Chola throne went to Gandaraditya's younger brother Arinjaya briefly before Arinjaya's son Sundara Chola took the reins of the kingdom overlooking the claims of Uttama Chola, son of Gandaraditya.<br><br>

        The Chola power recovered during Sundara Chola's reign. The Chola army under the command of the crown prince Aditya Karikala defeated the Pandyas and invaded up to Tondaimandalam in the north. Aditya Karikala was assassinated in a political plot suspected to be enacted by Uttama Chola. Uttama forced[citation needed] Sundara Chola to declare him as heir apparent and took over the reins in 970.
        `,
        listTitle: `Rulers of Chola Dynasty`,
    },
]

const medievalList = [
    {
        id: 1,
        singleTitle: `Chalukyas of Badami`,
        time1: `500CE`,
        singleCategory: `Chalukya`,
        time2: `753CE`,
        info: `
        In the 6th century, with the decline of the Gupta dynasty and their immediate successors in northern India, major changes began to happen in the area south of the Vindhyas – the Deccan and Tamilakam. The age of small kingdoms had given way to large empires in this region. The Chalukya dynasty was established by Pulakeshin I in 543. Pulakeshin I took Vatapi (modern Badami in Bagalkot district, Karnataka) under his control and made it his capital. Pulakeshin I and his descendants are referred to as "Chalukyas of Badami". They ruled over an empire that comprised the entire state of Karnataka and most of Andhra Pradesh in the Deccan.<br><br>

        Pulakeshin II, whose pre-coronation name was Ereya,commanded control over the entire Deccan and is perhaps the most well-known emperor of the Badami dynasty.He is considered one of the notable kings in Indian history.His queens were princess from the Alupa Dynasty of South Canara and the Western Ganga Dynasty of Talakad, clans with whom the Chalukyas maintained close family and marital relationships. Pulakeshin II extended the Chalukya Empire up to the northern extents of the Pallava kingdom and halted the southward march of Harsha by defeating him on the banks of the river Narmada. He then defeated the Vishnukundins in the south-eastern Deccan. Pallava Narasimhavarman however reversed this victory in 642 by attacking and occupying Badami temporarily. It is presumed Pulakeshin II, "the great hero", died fighting.<br><br>

        The Badami Chalukya dynasty went into a brief decline following the death of Pulakeshin II due to internal feuds when Badami was occupied by the Pallavas for a period of thirteen years. It recovered during the reign of Vikramaditya I, who succeeded in pushing the Pallavas out of Badami and restoring order to the empire. Vikramaditya I took the title "Rajamalla" (lit "Sovereign of the Mallas" or Pallavas). The thirty-seven year rule of Vijayaditya (696–733) was a prosperous one and is known for prolific temple building activity.<br><br>

        The empire was its peak again during the rule of the illustrious Vikramaditya II (733–744) who is known not only for his repeated invasions of the territory of Tondaimandalam and his subsequent victories over Pallava Nandivarman II, but also for his benevolence towards the people and the monuments of Kanchipuram, the Pallava capital. He thus avenged the earlier humiliation of the Chalukyas by the Pallavas and engraved a Kannada inscription on the victory pillar at the Kailasanatha Temple. During his reign Arab intruders of the Caliphal province of Sind invaded southern Gujarat which was under Chalukya rule, but the Arabs were defeated and driven out by Avanijanashraya Pulakeshin, the governor of the Chalukya branch of Navsari. Vikramaditya II later overran the other traditional kingdoms of Tamil country, the Pandyas, the Cholas and the Cheras in addition to subduing a Kalabhra ruler. The last Chalukya king, Kirtivarman II, was overthrown by the Rashtrakuta King Dantidurga in 753. At their peak, the Chalukyas ruled a vast empire stretching from the Kaveri in the south to the Narmada in the north.
        `,
    },
    {
        id: 2,
        singleTitle: `Chalukyas of Vengi`,
        time1: `624CE`,
        singleCategory: `Chalukya`,
        time2: `1061CE`,
        info: `
        Pulakeshin II conquered the eastern Deccan, corresponding to the coastal districts of modern Andhra Pradesh in 616, defeating the remnants of the Vishnukundina kingdom. He appointed his brother Kubja Vishnuvardhana as Viceroy in 621.Thus the Eastern Chalukyas were originally of Kannada stock. After the death of Pulakeshin II, the Vengi Viceroyalty developed into an independent kingdom and included the region between Nellore and Visakhapatnam.<br><br>

        After the decline of the Badami Chalukya empire in the mid-8th century, territorial disputes flared up between the Rashtrakutas, the new rulers of the western deccan, and the Eastern Chalukyas. For much of the next two centuries, the Eastern Chalukyas had to accept subordination towards the Rashtrakutas.<br><br>

        Apart from a rare military success, such as the one by Vijayaditya II(c.808–847), it was only during the rule of Bhima I (c.892–921) that these Chalukyas were able to celebrate a measure of independence. After the death of Bhima I, the Andhra region once again saw succession disputes and interference in Vengi affairs by the Rashtrakutas.<br><br>

        The fortunes of the Eastern Chalukyas took a turn around 1000. Danarnava, their king, was killed in battle in 973 by the Telugu Choda King Bhima who then imposed his rule over the region for twenty-seven years. During this time, Danarnava's two sons took refuge in the Chola kingdom. Choda Bhima's invasion of Tondaimandalam, a Chola territory, and his subsequent death on the battlefield opened up a new era in Chola–Chalukya relations. Saktivarman I, the elder son of Danarnava was crowned as the ruler of Vengi in 1000, though under the control of king Rajaraja Chola I. This new relationship between the Cholas and the coastal Andhra kingdom was unacceptable to the Western Chalukyas, who had by then replaced the Rashtrakutas as the main power in the western Deccan. The Western Chalukyas sought to brook the growing Chola influence in the Vengi region but were unsuccessful. Initially, the Eastern Chalukyas had encouraged Kannada language and literature, though, after a period of time, local factors took over and they gave importance to Telugu language. Telugu literature owes its growth to the Eastern Chalukyas.
        `,
    },
    {
        id: 3,
        singleTitle: `Chalukyas of Kalyani`,
        time1: `957CE`,
        singleCategory: `Chalukya`,
        time2: `1200CE`,
        info: `
        The Chalukyas revived their fortunes in 973 after over 200 years of dormancy when much of the Deccan was under the rule of the Rashtrakutas. The genealogy of the kings of this empire is still debated. One theory, based on contemporary literary and inscriptional evidence plus the finding that the Western Chalukyas employed titles and names commonly used by the early Chalukyas, suggests that the Western Chalukya kings belonged to the same family line as the illustrious Badami Chalukya dynasty of the 6th century while other Western Chalukya inscriptional evidence indicates they were a distinct line unrelated to the Early Chalukyas.<br><br>

        Tailapa II, a Rashtrakuta feudatory ruling from Tardavadi – 1000 (Bijapur district) overthrew Karka II, re-established the Chalukya rule in the western Deccan and recovered most of the Chalukya empire. The Western Chalukyas ruled for over 200 years and were in constant conflict with the Cholas, and with their cousins, the Eastern Chalukyas of Vengi. Vikramaditya VI is widely considered the most notable ruler of the dynasty. Starting from the very beginning of his reign, which lasted fifty years, he abolished the original Saka era and established the Vikrama Era. Most subsequent Chalukya inscriptions are dated in this new era. Vikramaditya VI was an ambitious and skilled military leader. Under his leadership the Western Chalukyas were able to end the Chola influence over Vengi (coastal Andhra) and become the dominant power in the Deccan. The Western Chalukya period was an important age in the development of Kannada literature and Sanskrit literature. They went into their final dissolution towards the end of the 12th century with the rise of the Hoysala Empire, the Pandyas, the Kakatiya and the Seuna Yadavas of Devagiri.<br><br>
        `,
    },
    {
        id: 4,
        singleTitle: `Durlabhavardhana`,
        time1: `625CE`,
        singleCategory: `Karkota`,
        time2: `661/2CE`,
        info: `
        Kalhana assigns a regnal span of thirty six years from 625−661/2. He was also known as Prajnaditya and gifted many villages (agraharas) to Brahmins.<br><br>

        Rajatarangini records no military activity during his reign; assuming Xuanzang to have visited Kashmir twice during his reign, Durlabhavardhana controlled vast swaths of territories including modern day Kashmir, Punjab and Khyber Pakhtunkhwa.
        `,
    },
    {
        id: 5,
        singleTitle: `Durlabhaka`,
        time1: `662CE`,
        singleCategory: `Karkota`,
        time2: `712CE`,
        info: `
        Per Kalhana, Anaṅgalekhā had him declared as her dauhitra and Durlabhaka became known as Pratapaditya, adopting the surname of his maternal grandfather. Durlabhaka is assigned a regnal span of 50 years (662−712). He had a brother Malhana.<br><br>

        His reign saw increasing trade relation with neighboring polities and the development of the Classical Kārkoṭa style of sculpture. Kalhana records him to have impressive military prowess. Several agraharas were established by Hanumant, son of his minister Uda (var. Oda, Aida).<br><br>

        Durlabhaka married Narendraprabhā, who had been earlier married to Nona, a wealthy merchant from outside Kashmir. He had three sons — Chandrapida, Tarapida and Lalitaditya — in descending order of age.
        `,
    },
    {
        id: 6,
        singleTitle: `Candrapida`,
        time1: `712/13CE`,
        singleCategory: `Karkota`,
        time2: `720CE`,
        info: `
        Candrapida ruled from 712/13−720 and bore the name Vajraditya. Candrapida Vajraditya is otherwise known from Chinese sources, as he is mentioned in the Chinese Tang Dynasty Chronicles (Tangshu) under the name Zhentuoluobili, as contemporary of the period 713−720. Kalhana paints a benevolent and virtuous image of the ruler — two stories are narrated to the same effect. Jayanta Bhatta's great-grandfather Saktisvāmin was one of his ministers.<br><br>

        In 713, Emperor Xuanzong of Tang received an embassy from Candrapida requesting aid against Arab invasions. Candrapida did not receive any help but managed to defend his territory. In 720, Xuanzong sent an envoy to bestow upon him, the title "King of Kashmir".[33] These diplomatic exchanges led to the formation of an imperial alliance between the Tangs and Karakotas; in 722, after the Tangs emerged victorious against Tibet, the Chinese court credits Kashmir for having provided ample food to their troops stationed in Gilgit.<br><br>

        His assassination is blamed upon Tarapida, who recruited a Brahmin.
        `,
    },
    {
        id: 7,
        singleTitle: `Tarapida`,
        time1: `720CE`,
        singleCategory: `Karkota`,
        time2: `724CE`,
        info: `
        Little is noted about his rule in Rajatarangini except that he was tyrannical and oppressed the Brahmins. In October–November 724, Chinese chronicles mention of an unhappy Jincheng seeking defection to Kashmir; the-then King (unnamed) apparently consented and urged for military assistance from Zabulistan to ward off the Tibetan troops. Tansen Sen notes this king to be Tarapida; however other scholars have identified him with Candrapida.<br><br>

        Tarapida bore the name Udayaditya, and was murdered after four years; the practice of magic-rites by Brahmins is held to be the cause.
        `,
    },
    {
        id: 8,
        singleTitle: `Lalitaditya`,
        time1: `724/725CE`,
        singleCategory: `Karkota`,
        time2: `760/761CE`,
        info: `
        Kalhana lived around four centuries after Lalitaditya Muktapida (724/725−760/761), and popular imagination appears to have embellished Lalitaditya's achievements by then. Lalitaditya Muktapida is otherwise known from Chinese sources, as he is mentioned in the Chinese Tang Dynasty Chronicles, as a contemporary of the 736−747 period. A world conqueror, he is credited with extensive conquests spanning major parts of India, Afghanistan and Central Asia; he was in a conflict with the Indian king Yashovarman whom he subdued ,thus gaining control of the kingdom of Kannauj. A century prior to Kalhana, Al-Biruni noted the Kashmiris to celebrate an annual festival in commemoration of Lalitaditya, who defeated the Turks and ruled over the world.<br><br>

        Whilst Stein rejected these assertions as "purely mythological" (and noted that Kalhana was quite ignorant about territories outside Kashmir), it was since accepted by Hermann Goetz as "historical fact", whose views were subsequently relied upon by André Wink and Ronald Inden. Sen however rejects the conquest-accounts concerned with parts of Afghanistan and Central Asia as excessively exaggerated, selective, and contradicting contemporary Chinese and Tibetan sources including official histories, coins and pilgrim-chronicles.<br><br>

        Numerous Brahmin immigrants were brought to Kashmir during his time including the ancestors of Abhinavagupta. A brilliant intellectual and artistic culture flourished during his reign.
        `,
    },
    {
        id: 9,
        singleTitle: `Kuvalayapida`,
        time1: `761CE`,
        singleCategory: `Karkota`,
        time2: `762CE`,
        info: `
        Son of Lalitaditya and his first queen Kamaladevi, his short reign of one year and half a month was marked by a succession struggle between him and his half-brother. He is claimed to be a virtuous ruler. Per Kalhana, after being subject to a treachery by his minister, he realized the folly of material gains, abdicated as the emperor, and retreated to a holy forest where he attained siddhi.<br><br>

        No evidence other than the Rajatarangini exists to corroborate his reign, per Stein.
        `,
    },
    {
        id: 10,
        singleTitle: `Vajraditya`,
        time1: `763CE`,
        singleCategory: `Karkota`,
        time2: `770CE`,
        info: `
        Son of Lalitaditya and his second queen Chakramardika, his reign saw a successful raid by the Governor of Sindh and introduction of slave trade. Kalhana notes his seven year of rule to be cruel.<br><br>

        He had numerous concubines and at-least four wives Meghavali, Amrtaprabha, Manjarika and Mamma; his four sons were Tribhuvanapida (from Meghabali), Jayapida (from Amrtaprabha), Prithivyapida I (from Manjarika) and Samgramapida I (from Mamma). Stein notes a similar lack of sources; he was also known as Bappiyaka.
        `,
    },
    {
        id: 11,
        singleTitle: `Prithivyapida I`,
        time1: `770CE`,
        singleCategory: `Karkota`,
        time2: `774CE`,
        info: `
        According to Kalhana, he ruled for a span of four years and one month. He was overthrown by Samgramapida I, who ruled for seven days. Tribhuvanapida, despite being the eldest, had abdicated the throne.<br><br>

        Kalhana does not note any additional detail except not finding either of them to be worthy of wielding royal power, and Stein reiterates that no other evidence of these rulers have been located.
        `,
    },
    {
        id: 12,
        singleTitle: `Jayapida`,
        time1: `775CE`,
        singleCategory: `Karkota`,
        time2: `806CE`,
        info: `
        Jayapida ruled for 31 years and partook in multiple conquests to faraway territories in an apparent bid to out-rival Muktapida; however, Kalhana's narrative is noted to be excessively exaggerated and in absence of other corroborating sources from across a vast geographical region, the authenticity of the raids and other events must be disputed. He was also known by the name Vinayaditya.<br><br>

        Brahmin immigrants from Indus and Dravida regions were settled in Kashmir during Jayapida's reign; Kshemendra's great-great-grandfather Narendra was a minister in his court. Jayapida married Kalyanadevi, daughter of King Jayanta of Cooch Behar, whilst away in a conquest. Returning to Kashmir, he found his brother-in-law Jajja to have usurped the throne but went on to defeat him.<br><br>

        Kalhana notes his later years to be tyrannical when Jayapida sought to (unsuccessfully) rescind agraharas and imposed a cruel taxation regime on Brahmins, forcing them to emigrate; he was cursed to death by a Brahmin. Jayapida had two sons — Lalitapida (from Durga) and Samgramapida II (from Kalyanadevi).
        `,
    },
    {
        id: 13,
        singleTitle: `Lalitapida`,
        time1: `807CE`,
        singleCategory: `Karkota`,
        time2: `819CE`,
        info: `
        Kalhana condemns Lalitapida as a recklessly extravagant ruler, whose court was infested with courtesans/concubines and jesters, and provided no patronage to learning. He ruled for twelve years and had donated agraharas.<br><br>

        He had one son Cippatajayapida, from his concubine Jayadevi, who was the daughter of a spirit distiller.
        `,
    },
    {
        id: 14,
        singleTitle: `Samgramapida II`,
        time1: `820CE`,
        singleCategory: `Karkota`,
        time2: `825CE`,
        info: `
        Lalitapida was succeeded by his step-brother Samgramapida II, also known as Prithivyapida II. He had at least one son - Anangipida and ruled for seven years; Kalhana notes no additional detail.
        `,
    },
    {
        id: 15,
        singleTitle: `Cippatajayapida`,
        time1: `837CE`,
        singleCategory: `Karkota`,
        time2: `840CE`,
        info: `
        Cippatajayapida (var. Brhaspati) was crowned in 837/8. However, due to his young age, the real power was vested in the five brothers of Jayadevi — Padma, Utpala, Kalyana, Mamma, and Dharma — who followed the orders of Jayadevi but yet engaged in an acute mismanagement of affairs.
        `,
    },
    {
        id: 16,
        singleTitle: `Vijayalaya Chola`,
        time1: `847CE`,
        singleCategory: `Chola`,
        time2: `871CE`,
        info: `
        Vijayalaya Chola was a king of South India (r. 847 – 871 CE) who founded the imperial Chola Empire. He ruled over the region to the north of the river Kaveri.<br><br>

        Making use of the opportunity during a war between Pandyas and Pallavas, Vijayalaya rose out of obscurity and captured Thanjavur[citation needed]. However, there is no substantiate proof to verify the claim regarding his obscure beginnings. For a very long time, historians could not trace the ancestry of Vijayalaya Chola, who is considered to be the founder of Medieval Chola dynasty. However, in recent times, historians and epigraphists in the wake of Eastern Chalukyan king's Copper plate grants, Anbil plates of Parantaka Chola II and Velanjeri plates of Parantaka I believe that Vijayalaya chola might well belong to the Cholas lineage, who themselves trace their ancestry to the ancient Tamil King, Karikala Cholan. At this time there was a great struggle going on between the Pallavas and the Pandyas for the political supremacy of South India. In this disturbed state of affairs, Vijayalaya seems to have found a good opportunity to defeat the Pandyas, and make himself the ruler of Thanjavur and the surrounding Chola country. He also defeated the Pallavas.<br><br>

        Vijayalaya Chola conquered Thanjavur from Elango Mutharaiyar who was the final ruler of Mutharaiyar dynasty[citation needed]. It is said that in the year 852 CE Vijayalaya Chola waged war with Pandya's and defeated the latter. Making use of the opportunity during a war between Pandyas and Pallavas, Vijayalaya rose and established the Chola kingdom at Thanjavur with help of Muttaraiyar king Sattan Paliyilli (826–852 CE). Cholas became so powerful that the Pallavas were also wiped out from the Thanjavur region at a later stage.
        `,
    },
    {
        id: 17,
        singleTitle: `Aditya I`,
        time1: `871CE`,
        singleCategory: `Chola`,
        time2: `907CE`,
        info: `
        Aditya I (c. 870/71 – c. 907 CE), the son of Vijayalaya, was the Chola king who extended the Chola dominions by the conquest of the Pallavas and occupied the Western Ganga Kingdom.<br><br>

        Aditya I is known to have built a number of temples 108 for Shiva along the banks of the Kaveri. The Kanyakumari inscription gives us the information that Aditya I was also known by the surname Kodandarama. There is a temple near the town of Tondaimanarrur called Kodandarameshvaraa, also mentioned in its inscriptions by the name Adityesvara. This seems to have been built by Aditya I. He also revised Annamalaiyar sanctum in Thiruvaannamalai during 872 – 900. Aditya also was the patron of Sureswara and prabhakara who were pupils of kumarila bhatta a favourite student of Adisankaracharya. The author of that work do confirm that they settled in the banks of Kaveri (Sibishu kaveriteere meaning in the country of cholas (Sibi is an ancestor of Cholas)) and were employed by Manukula Adityan (Aditya Chola).
        `,
    },
    {
        id: 18,
        singleTitle: `Parantaka I`,
        time1: `907CE`,
        singleCategory: `Chola`,
        time2: `955CE`,
        info: `
        Parantaka Chola I (907 CE–955 CE) was a Chola emperor who ruled for forty-eight years, annexing Pandya by defeating Rajasimhan II. The best part of his reign was marked by increasing success and prosperity.<br><br>

        Parantaka I continuing the expansion started by his father, invaded the Pandya kingdom in 910. He captured the Pandyan capital Madurai and assumed the title Madurain-konda (Capturer of Madurai). The Pandyan ruler Maravarman Rajasinha II sought the help of Kassapa V of Anuradhapura who sent an army to his aid. defeated the combined army at the battle of Vellore. The Pandya king fled into exile in Sri Lanka and Parantaka I completed his conquest of the entire Pandya country.<br><br>

        Parantaka I spent many years in the newly conquered country reducing it to subjugation, and when he felt he had at last achieved his aim, he wanted to celebrate his victory by a coronation in Madurai in which he was to invest himself with the insignia of Pandyan monarchy. However he was failed in this attempt by the Pandyan king carried them away and left in the safe custody of the Lankan king. Towards the end of his reign, Parantaka I tried to capture them by invading Lanka. Mahavamsa records that the Lankan king Udaya IV took the Pandya crown and the jewels and hid himself in the Rohana hills. Parantaka I's armies had to return empty handed.<br><br>

        After his exploits in the Pandya country and in Lanka, took the title of Maduraiyum Eelamum Konda Parakesarivarman – Parakesarivarman who conquered Madurai and Sri Lanka.
        `,
    },
    {
        id: 19,
        singleTitle: `Rajaditya Chola`,
        time1: `935CE`,
        singleCategory: `Chola`,
        time2: `949CE`,
        info: `
        Rajaditya Chola was a Chola prince, son of king Parantaka I (r. 907–955) and a Chera/Kerala princess (the Ko Kizhan Adigal), known for commanding the Chola troops in the battle of Takkolam (948–949).<br><br>

        The death of prince Rajaditya in the battle is unusually commemorated by the Cholas. The Chola version of the events can be found in Larger Leiden Grant (1006 AD) of Rajaraja I and Tiruvalangadu Plates (1018 AD) of Rajendra Chola. An account of the battle, which differs in some details from the Chola version, is found in the Atakur inscription issued by Krishna III and prince Butuga II (a young underlord of Krishna III) of the Western Ganga family. The Sravana Belgola record of Ganga king Marasimha (963 - 975 AD) also claims victory of the Chera king for his predecessor Bhutuga II. Indirect references to the battle can also be found in the inscriptions of Vellan Kumaran, a Kerala commander in the Chola army.<br><br>

        Rajaditya was the son of the Ko Kizhan Atikal, the Chera Perumal princess, and the Chola king Parantaka I (r. 907–955 AD). King Parantaka I is known to have married two distinct Chera princesses, Ko Kizhan Adigal and Kizhan Adikal Ravi Neeli (the mothers of his two sons, Rajaditya and Arinjaya Chola). The marriage between a Chera princess and Parantaka, c. 910 CE, is mentioned in the Udayendiram plates of Ganga king Prthivipati II Hastimalla.<br><br>

        It seems that Chola king Parantaka I anticipated a climactic battle with the Rashtrakutas and their allies in Tirumunaippati Nadu. Sometime in the 930s, or perhaps as early as 923 AD, prince Rajaditya was sent with a substantial military contingent, including elephants and horses, as well as his entire household, to Rajadityapura (Tirunavalur/Tirumanallur) in Tirumunaippati Nadu (to protect the northern edges of a nascent Chola state). The prince was joined at Rajadityapura by his mother (the Chera princess Ko Kizhan Adikal) in the mid-930s and his half-brother Arinjaya. Rajaditya was supported by a number of military personnel from Kerala (Chera) chiefdoms in Tirumunaippati Nadu.
        `,
    },
    {
        id: 20,
        singleTitle: `Gandaraditya`,
        time1: `949CE`,
        singleCategory: `Chola`,
        time2: `962CE`,
        info: `
        Gandaraditha Chola succeeded his father Parantaka I and became the Chola king about 955 CE. He was also a Tamil literary poet in the Thiruvisaippa Palandu.<br><br>

        It has been widely accepted by researchers of Tamil literature and Saiva religious scholars that Gandaraditya was the author of a Thiruvisaippa on Siva at the Temple of Chidambaram. In this there is a distinct statement that Parantaka I conquered the Pandya country and Eelam (Sri Lanka) and covered the temple of Nataraja with gold. Gandaraditya composed eleven poems on Lord Nataraja of Chidambaram. These are part of the ninth volume of the Tirumurai and are called Tiruvisaippa. He refers to himself as "Koli Vendan Thanjaiyar Kon Gandaradittan" in these poems. It is not clear when he composed this poetry and whether it was he who covered the Chidambaram shrine in lieu of his father, or if it was done at Parantaka I's term.
        `,
    },
    {
        id: 21,
        singleTitle: `Arinjaya Chola`,
        time1: `956CE`,
        singleCategory: `Chola`,
        time2: `957CE`,
        info: `
        Arinjaya Chola was a Tamil ruler of the Chola kingdom. He was the third son of Parantaka I and the younger brother of Gandaraditya Chola, whom he is thought to have succeeded in about 956. Arinjaya seems to have ruled for a very short time.<br><br>

        Recent scholarship suggests that Arinjaya was the son of a Chera Perumal princess (hence a half-brother to prince Rajaditya)<br><br>

        Gandaraditya probably made his younger brother co-regent very early in his rule. It is also very probable that Gandaraditya did not have any heir until very late in his life. As a result, he must have made Arinjaya heir apparent and paved the way for Arinjaya's heirs to the line of succession to the Chola crown.
        `,
    },
    {
        id: 22,
        singleTitle: `Parantaka Chola II`,
        time1: `962CE`,
        singleCategory: `Chola`,
        time2: `980CE`,
        info: `
        Parantaka Chola II (r. 962 - 980 CE) was a Chola emperor. He is also known as Sundara Chola as he was considered an epitome of male beauty. He was the son of Arinjaya Chola and Kalyani, a princess from the clan of Vaidumbas, an Andhra dynasty based in Kurnool and Kadapa districts. Parantaka II ascended the Chola throne despite the fact that his cousin Uttama Chola, the son of Gandaraditya (the elder brother of Arinjaya) was alive and he had equal if not more claim to the Chola throne.<br><br>

        When Parantaka II became king, the Chola kingdom had shrunk to the size of a small principality. The Pandyas in the south had revived their fortunes and had defeated the Chola armies and occupied their ancestral lands.<br><br>

        During Parantaka II's reign, the foundations were laid for the success of the Chola Empire a generation later. A few territories in the north were recovered. The Pandyan ruler Vira Pandya was defeated and Madurai was taken. An expedition was made to gain control of Sri Lanka but it was not successful.
        `,
    },
    {
        id: 23,
        singleTitle: `Aditya II`,
        time1: `966CE`,
        singleCategory: `Chola`,
        time2: `971CE`,
        info: `
        Adithya II also known as Adithya Karikalan, was a Chola prince who lived in the 10th century in India. He was born in Tirukoilur and was the eldest son of Parantaka Chola II. He was the elder brother of Rajaraja Chola I and Kundavai. He was called as Virapandiyan Thalai Konda Koparakesari Varman Karikalan.<br><br>

        He led the Chola expedition against the Pandyas and defeated the Pandya king Veerapandyan at the Battle of Chevur. He killed Veerapandiyan after chasing him on the banks of Vaigai river. Aditya was made the co-regent and heir apparent to the Chola throne even though Uttama Chola, the son of Gandaraditya Chola, had more right to throne. He was planned and murdered by the associates of Veerapandiyan in revenge for the defeat. Aditya was succeeded by Uttama Chola. As per epigraphs, the inquiry into the death was completed in the second year of Rajaraja Chola I's reign and the lands of certain officials were confiscated for their complicity in the murder of "Karikala Chola who took the head of the Pandya".<br><br>

        According to archaeologist Kudavayil Balasubramanian, "Dr K T Tirunavukkarasu in his collection of historical essays titled "Arunmozhi Aiyvu Thogudi", comprehensively ruled out Madurantaka Uttama's role in Aditya Karikala's murder. In the said article, basing his view on a number of historical data points, Dr Tirunavukkarasu has gone on to explain that there was a delay in apprehending the perpetrators immediately thereafter and it was only during Rajaraja I's second regnal year that the culprits were brought to book and given that the assassins were Brahmins". Suspicions were pointed to Uttama Chola but confiscations of land belonging to culprits started before Raja Raja's period suggesting that Uttama Chola did not spare the plotters. Among the punished were Ravidasan, Soman and Parameshwaran who were all government officials and brothers born to a brahmin family. They avenged for the decapitation of Veerapandyan by Aditha Karikalan. According to Kudavayil Balasubramanian, claims that Raja Raja would have spared the plotters if they were Brahmins sound absurd because Cholas would not show lenience on account of anyone's caste
        `,
    },
    {
        id: 24,
        singleTitle: `Uttama Chola`,
        time1: `971CE`,
        singleCategory: `Chola`,
        time2: `985CE`,
        info: `
        Uttama Chola (born Madurantaka) was a Chola Emperor who ruled from 971 CE - 985 CE. According to Tiruvalangadu plates of Rajendra Chola, Madurantaka Uttama Chola's reign is placed after Aditya II. The latter may have been a co-regent of Parantaka II and seems to have died before he could formally ascend the throne. Uttama was the cousin of Parantaka II and was the son of the illustrious Sembiyan Mahadevi and Gandaraditya.<br><br>

        The circumstances under which Uttama ascended the Chola throne is surrounded by controversy and mystery. At the time of Gandarditya's death Uttama must have been a very young child. Due to his young age, his rights to the Chola throne were probably set aside and Gandaraditya's younger brother Arinjaya was crowned king.<br><br>

        Arinjaya ruled for a very short time – possibly for less than a year and on his death, his son Parantaka II (Sundara Chola) succeeded him. By the time Maduranthaka was old enough to claim the crown, Sundara Chola had two sons – Aditya Karikalan (the one who took the head of the Vira Pandya) and Arulmozhivarman.<br><br>

        During the reign of Paranta Sundara Chola, his son, Aditya II, was made the co-regent and heir apparent to the Chola throne even though Uttama Chola, had more right to throne. Aditya II was assassinated c. 969 CE under mysterious circumstances. As per the Thiruvalangadu plates of Rajendra Chola I there was question on ascension and Arulmozhivarman, the future Rajaraja I, chose to step aside for his paternal uncle Madhuranthaka. According to the Tiruvalangadu plates, after the death of Aditya II Karikala, the people wanted Arulmozhivarman - Aditya II Karikala's brother to be their king, but the prince refused.
        `,
    },
    {
        id: 25,
        singleTitle: `Rajaraja I`,
        time1: `985CE`,
        singleCategory: `Chola`,
        time2: `1014CE`,
        info: `
        Rajaraja I born Arulmoli Varman often described as Rajaraja the Great was a Chola emperor who reigned from 985 CE to 1014 CE and was the most powerful king in south at his time chiefly remembered for reinstating the Chola power and ensuring its supremacy in South India and Indian Ocean.<br><br>

        His extensive empire included the Pandya country (southern Tamil Nadu), the Chera country (central Kerala and western Tamil Nadu) and northern Sri Lanka. He also acquired the Lakshadweep and Thiladhunmadulu atoll or part of the northern most islands of Maldives in the Indian Ocean. Campaigns against the Western Gangas (southern Karnataka) and Chalukyas extended the Chola influence as far as the Tungabhadra River. On the eastern coast he battled with the Chalukyas for the possession of Vengi (the Godavari districts).<br><br>

        Rajaraja, an able administrator, also built the great Brihadisvara Temple at the Chola capital Thanjavur. The temple is regarded as the foremost of all temples in the medieval south Indian architectural style. During his reign, the texts of the Tamil poets Appar, Sambandar and Sundarar were collected and edited into one compilation called Thirumurai. He initiated a massive project of land survey and assessment in 1000 CE which led to the reorganisation of the country into individual units known as valanadus. Rajaraja died in 1014 CE and was succeeded by his son Rajendra Chola I.
        `,
    },
    {
        id: 26,
        singleTitle: `Rajendra Chola I`,
        time1: `1014CE`,
        singleCategory: `Chola`,
        time2: `1044CE`,
        info: `
        Rajendra Chola I often described as Rajendra the Great was a Chola emperor who ruled between 1014 and 1044 CE. Rajendra succeeded his father Rajaraja I in 1014 CE. The extensive Chola empire under Rajendra I included most parts of present-day south India, with the river Krishna as the northern limit, Sri Lanka and the Laccadives and the Maldives. He carried out a successful military expedition to the River Ganges through Orissa and Bengal and brought Ganges water to his new capital down in the Kaveri Delta, Gangaikondacholapuram. Rajendra's ambitious campaign against the Srivijaya (the southern Malay peninsula and Sumatra) is dated to c. 1025 CE. A number of strategic places along the Straits of Malacca came under Chola control as a result of this campaign. Rajendra was succeeded by Rajadhiraja I (1044 - 1054).<br><br>

        The Cholas were by far the most important dynasty of South Asia at the time of Rajendra, although their activities mainly affected the South India and Southeast Asia. The Chola naval campaigns in the Arabian Sea and the Strait of Malacca were essential to the control over the Indian Ocean spice trade (from the Southeast Asia or southern China to the Arabia or eastern Africa).
        `,
    },
    {
        id: 27,
        singleTitle: `Rajadhiraja Chola`,
        time1: `1044CE`,
        singleCategory: `Chola`,
        time2: `1052CE`,
        info: `
        Rajadhiraja Chola  was a Chola emperor and the successor of his father, Rajendra I. During his short reign, he helped his father conquer many territories and maintained the Chola authority over most of Sri Lanka, Eastern Chalukya, Kalinga, etc. and the relations with overseas domains despite a series of revolts in the territory. Rajadhiraja Chola’s record shows that he was a born fighter who was very capable of maintaining a vast and expansive empire with territories even outside the shores of India. He was a great warrior who always led his soldiers from the front. His life is a testimony to a great king who fought his own wars, standing shoulder to shoulder with his men on front lines. He earned the title Jayamkonda Chola (The Victorious Cholan) after numerous victories. Towards the end of his reign, he sacked the Western Chalukyan capital Kalyanapuram and assumed the title Kalyanapuramgonda Chola and performed a Virabhisheka (anointment of heroes) under the name Vijaya Rajendra Cholan (the victorious Rajendra Cholan).<br><br>

        Rajadhiraja, eager to subdue the rising power of the Western Chalukyas and to restore Chola influence with the Eastern Chalukyas in Vengi, personally led an expedition into the Telugu country in 1046 CE. He defeated the Western Chalukya forces in a battle at Dannada on the river Krishna and set fire to their fort. This expedition was followed by number of raids into the Chalukya country by the Chola army in which they captured several generals and feudatories of Chalukya, demolished the Chalukya palace at Kampali. The victorious Chola forces crossed the Krishna river and erected a victory pillar at a place called Yetagiri. After more fighting, Kalyani, the capital of Chalukya, which is identified as Kalyan or Basavakalyan in Bidar was sacked. Cholas also placed a victory pillar in Kolhapur or Kollapuram in Maharashtra.The victorious Rajadhiraja entered the capital of the vanquished Chalukyas and his coronation was performed at 'Kalyanapura', subsequent to which he assumed the title Vijayarajendra. Someshvara I was banished to places like Rodda, Kadambalige and Kogali 1000 territories in the Nolambavadi areas.
        `,
    }, 
    {
        id: 28,
        singleTitle: `Rajendra Chola II`,
        time1: `1052CE`,
        singleCategory: `Chola`,
        time2: `1064CE`,
        info: `
        Rajendra Chola II reigned as the Chola emperor succeeding his elder brother Rajadhiraja Chola I in the 11th century after his brother dead. He is best remembered for his role in the Battle of Koppam along with his elder brother Rajadhiraja Chola where he dramatically turned the tables on the Chalukyan King Someshvara I, after the death of his brother in 1052. During his early reign an expedition was led to Sri Lanka, in the course of which the Sri Lanka army was routed and their king Vijayabahu I of Polonnaruwa was driven to take refuge in a mountain-fortress. He maintained the Chola Empire well as the distribution of his records show that the Chola Empire did not suffer any loss of territory during his reign by protecting the territory.<br><br>

        When he was a co-regent of his elder brother, Rajadhiraja Chola I, he shared the latter's workload by taking care of the internal affairs of the state. He was a great patron of dance and theatre and we know of several occasions where he encouraged various artists and poets. For example, he passed a royal order in the 4th year of his reign to provide paddy and other ration to Santi Kuttan Tiruvalan Tirumud Kunran alias Vijaya Rajendra Acharyan(named after Rajadhiraja) for enacting RajaRajeswara Natakam (a musical), in the Brihadeeswarar Temple, Thanjavur. Accordingly, the dancer was to get 120 Kalam paddy for this purpose and that he and his descendants were to perform the musical regularly during the annual festival.
        `,
    },
    {
        id: 29,
        singleTitle: `Virarajendra Chola`,
        time1: `1065CE`,
        singleCategory: `Chola`,
        time2: `1070CE`,
        info: `
        Virarajendra Chola was a Tamil ruler of Chola emperor, who spent a major part of his life as a subordinate of his two elder brothers Rajadhiraja I and Rajendra II,he is son of Rajendra I. During his early reign he granted the maintenance of a school to study the Vedas, Sastras and Grammar and a hostel was provided for the students. A hospital named Virasolan was also provided by him for the sick people. The famous grammatical work in Tamil, Virasoliyam was written by Buddhamitra during his reign.<br><br>

        Virarajendra’s reign falls in a period of the medieval Cholas, when it was both trying to expand its boundaries and preserve its existing territories, but had appeared to stutter in its attempts because of the death, in his prime, of the eldest brother and king Rajadhiraja-I and the short rule of Virarajendra's elder brother Rajendra-II. In total, the three brothers ruled for 16-20 years altogether by succeeding one another. This rapid succession was seen as a golden opportunity by the traditional enemies and subordinates of the Cholas, viz. the Singhalas (Ceylon), Pandyas and even the Chera Perumals, with each adversary either trying to become free or declaring a war on the Cholas. Ultimately, however, Virarajendra proved to be a very capable and brave ruler, who was kind and protective to his subjects, reimposed authority on Chola dominions and was particularly ruthless to the old nemeses of the Cholas, both the Chalukyas and the Pandyas. Viewed overall, especially in the context of the fact that his own rule lasted for less than 10 years, yet, as borne out by his various inscriptions in Karur, Virarajendra's was a lasting legacy in that in the short time he ruled, he overwhelmed everyone of his adversaries, and succeeded not only in preserving Chola territories, but also made overseas conquests in far-off lands like Indonesia, Malaysia, Sri Lanka, Nicobar, Sakkarakottam (around Bastar district, Chhattisgarh - this was also a place governed by the next major Chola monarch, Kulothunga-I or Rajendra Chalukya, son of Eastern Chalukya King Rajaraja Narendra and thus grandson of Rajendra Chola I through his daughter Ammangadevi.
        `,
    },
    {
        id: 30,
        singleTitle: `Athirajendra Chola`,
        time1: `1070CE`,
        singleCategory: `Chola`,
        time2: `1070CE`,
        info: `
        Athirajendra Chola reigned for a very short period of few months as the Chola king succeeding his father Virarajendra Chola. His reign was marked by civil unrest, possibly religious in nature. Athirajendra Chola was last clan of Chola Dynasty. He was killed in the religious chaos. Athirajindra and Virarajendra Chola interfered in the Vengi succession disputes after the Vengi king Rajaraja Narendra, who was closely related to the Chola clan through his mother Kundavai, a daughter of Rajaraja Chola, died in 1061 CE. The Vengi throne went to Saktivarman II in a palace coup. The Cholas wanted the Chola influence re-established in Vengi. Saktivarman II was killed, but Vijayaditya, Saktivarman’s father assumed the throne and repulsed the Chola attempts at unseating him. Vijayaditya however accepted to serving as a Chola vassal.<br><br>

        Although this attempt at gaining total control over Vengi was unsuccessful, Virarajendra found another Chalukya ally in Vikramaditya by marrying his daughter to him.<br><br>

        While these intrigues were going on, the son of Rajaraja Narendra, prince Rajendra Chalukya later known as Kulothunga I sought to become the Vengi king and felt Vijayaditya had usurped the throne that was rightfully his. The Cholas probably helped him in his efforts. Thwarted in his attempts by his uncle Vijayaditya, Kulothunga Chola carved himself a small dominion near Baster District in Chhattisgarh state and bided his time. An opportunity arose with the demise of Virarajendra and Rajendra Chalukya acted swiftly to capture the Chola throne.
        `,
    },
    {
        id: 31,
        singleTitle: `Campaign by Muhammad bin Qasim`,
        time1: `712CE`,
        singleCategory: `Arab`,
        time2: `715CE`,
        info: `
        After conquering Brahmanabad in Sindh, Bin Qasim co-opted the local Brahman elite, whom he held in esteem, re-appointing them to posts held under the Brahman dynasty and offering honours and awards to their religious leaders and scholars. This arrangement with local Brahman elites resulted in the continued persecution of Jatts, with Bin Qasim confirming the existing Brahman regulation forbidding them from wearing anything but coarse clothing and requiring them to always walk barefoot accompanied by dogs. The eastern Jats supported the Sind ruler, Dahir, against the Arab invaders, whereas the western Jats aligned with Muhammad bin Qasim against Dahir. Having settled the question of the freedom of religion and the social status of the Brahmans, Muhammad bin al-Qasim turned his attention to the Jats of Lohana.<br><br>

        Significant medieval Muslim chronicles such as the Chach Nama, Zainul-Akhbar and Tarikh-I-Baihaqi have recorded battles between Jats and forces of Muhammad ibn Qasim.<br><br>

        Following his success in Sindh, Muhammad bin Qasim wrote to 'the kings of Hind' calling upon them to surrender and accept the faith of Islam. He dispatched a force against al-Baylaman (Bhinmal), which is said to have offered submission. The Mid people of Surast (Maitrakas of Vallabhi) also made peace. Bin Qasim then sent a cavalry of 10,000 to Kanauj, along with a decree from the Caliph. He himself went with an army to the prevailing frontier of Kashmir called panj-māhīyāt (in west Punjab). Nothing is known of the Kanauj expedition. The frontier of Kashmir might be what is referred to as al-Kiraj in later records (Kira kingdom in Kangra Valley, Himachal Pradesh), which was apparently subdued.<br><br>

        Bin Qasim destroyed the temples and "idolatrous" artwork.He attempted to establish Sharia law in the conquered regions and during these campaigns, the native population of the region suffered religious persecution, selective killings of males, rapes, and forced marriages of women.< br > <br>

        Bin Qasim was recalled in 715 CE and died en route. Al-Baladhuri writes that, upon his departure, the kings of al-Hind had come back to their kingdoms. The period of Caliph Umar II (r. 717–720) was relatively peaceful. Umar invited the kings of "al-Hind" to convert to Islam and become his subjects, in return for which they would continue to remain kings. Hullishah of Sindh and other kings accepted the offer and adopted Arab names.
        `,
    },
    {
        id: 32,
        singleTitle: `Campaign by Al Junayd`,
        time1: `723CE`,
        singleCategory: `Arab`,
        time2: `726CE`,
        info: `
        During the caliphates of Yazid II (r. 720–724) and Hisham (r. 724–743), the expansion policy was resumed. Junayd ibn Abd ar-Rahman al-Murri (or Al Junayd) was appointed the governor of Sindh in 723 CE.<br><br>

        After subduing Sindh, Junayd sent campaigns to various parts of India. The justification was that these parts had previously paid tribute to Bin Qasim but then stopped. The first target was al-Kiraj (possibly Kangra valley), whose conquest effectively put an end to the kingdom. A large campaign was carried out in Rajasthan which included Mermad (Maru-Mada, in Jaisalmer, north Jodhpur), al-Baylaman (Bhillamala or Bhinmal) and Jurz (Gurjara country—southern Rajasthan and northern Gujarat). Another force was sent against Uzayn (Ujjain), which made incursions into its country (Avanti) and some parts of it were destroyed (the city of Baharimad, unidentified). Ujjain itself may not have been conquered. A separate force was also sent against al-Malibah (Malwa, to the east of Ujjain), but the outcome is not recorded.<br><br>

        Towards the North, Umayyads attempted to expand into Punjab but were defeated by Lalitaditya Muktapida of Kashmir. Another force was dispatched south. It subdued Qassa (Kutch), al-Mandal (perhaps Okha), Dahnaj (unidentified), Surast (Saurashtra) and Barus or Barwas (Bharuch).<br><br>

        The kingdoms weakened or destroyed included the Bhattis of Jaisalmer, the Gurjaras of Bhinmal, the Mauryas of Chittor, the Guhilots of Mewar, the Kacchelas of Kutch, the Maitrakas of Saurashtra and Gurjaras of Nandipuri. Altogether, Al-Junayd might have conquered all of Gujarat, a large part of Rajasthan, and some parts of Madhya Pradesh. Blankinship states that this was a full-scale invasion carried out with the intent of founding a new province of the Caliphate.<br><br>

        In 726 CE, the Caliphate replaced Al-Junayd by Tamim ibn Zaid al-Utbi as the governor of Sindh. During the next few years, all of the gains made by Junayd were lost. The Arab records do not explain why, except to state that the Caliphate troops, drawn from distant lands such as Syria and Yemen, abandoned their posts in India and refused to go back. Blankinship admits the possibility that the Indians must have revolted, but thinks it more likely that the problems were internal to the Arab forces.<br><br>

        Governor Tamim is said to have fled Sindh and died en route. The Caliphate appointed al-Hakam ibn Awana al-Kalbi (Al-Hakam) in 731 who governed till 740.
        `,
    },
    {
        id: 33,
        singleTitle: `Al-Hakam and Indian resistance`,
        time1: `732CE`,
        singleCategory: `Arab`,
        time2: `740CE`,
        info: `
        Al-Hakam restored order to Sindh and Kutch and built secure fortifications at Al-Mahfuzah and Al-Mansur. He then proceeded to retake Indian kingdoms previously conquered by Al-Junayd. The Arab sources are silent on the details of the campaigns. However, several Indian sources record victories over the Arab forces.<br><br>

        The king of Nandipuri, Jayabhata IV, documented, in an inscription dated to 736 CE, that he went to the aid of the king of Vallabhi and inflicted a crushing defeat on a Tājika (Arab) army. The Arabs then overran the kingdom of Jayabhata himself and proceeded on to Navsari in southern Gujarat. The Arab intention might have been to make inroads into South India. However, to the south of the Mahi River lay the powerful Chalukyan empire. The Chalukyan viceroy at Navsari, Avanijanashraya Pulakeshin, decisively defeated the invading Arab forces as documented in a Navsari grant of 739 CE. The Tājika (Arab) army defeated was, according to the grant, one that had attacked "Kacchella, Saindhava, Saurashtra, Cavotaka, Maurya and Gurjara" kings. Pulakeshin subsequently received the titles "Solid Pillar of Deccan" (Dakshināpatha-sādhāra) and the "Repeller of the Unrepellable" (Anivartaka-nivartayitr). The Rashtrakuta prince Dantidurga, who was subsidiary to Chalukyas at this time, also played an important role in the battle.<br><br>

        The kingdoms recorded in the Navsari grant are interpreted as follows: Kacchelas were the people of Kutch. The Saindhavas are thought to have been emigrants from Sindh, who presumably moved to Kathiawar after the Arab occupation of Sindh in 712 CE. Settling down in the northern tip of Kathiawar, they had a ruler by the name of Pushyadeva. The Cavotakas (also called Capotaka or Capa) were also associated with Kathiawar, with their capital at Anahilapataka. Saurashtra is south Kathiawar. The Mauryas and Gurjaras are open to interpretation. Blankinship takes them to be the Mauryas of Chittor and Gurjaras of Bhinmal whereas Baij Nath Puri takes them to be a subsidiary line of Mauryas based in Vallabhi and the Gurjaras of Bharuch under Jayabhata IV. In Puri's interpretation, this invasion of the Arab forces was limited to the southern parts of modern Gujarat with several small kingdoms, which was halted by the Chalukyan empire.<br><br>

        Indications are that Al-Hakam was overstretched. An appeal for reinforcements from the Caliphate in 737 is recorded, with 600 men being sent, a surprisingly small contingent. Even this force was absorbed in its passage through Iraq for quelling a local rebellion. The defeat at the hands of Chalukyas is believed to have been a blow to the Arab forces with large costs in men and arms.<br><br>

        The weakened Arab forces were driven out by the subsidiaries of the erstwhile kings. The Guhilot prince Bappa Rawal (r. 734–753) drove out the Arabs who had put an end to the Maurya dynasty at Chittor. A Jain prabandha mentions a king Nahada, who is said to have been the first ruler of his family at Jalore, near Bhinmal, and who came into conflict with a Muslim ruler whom he defeated. Nahada is identified with Nagabhata I (r. 730–760), the founder of the Gurjara-Pratihara dynasty, which is believed to have started from the Jalore-Bhinmal area and spread to Avanti at Ujjain. The Gwalior inscription of the king Bhoja I, says that Nagabhata, the founder of the dynasty, defeated a powerful army of Valacha Mlecchas (foreigners called "Baluchs") around 738 CE. Even though many historians believe that Nagabhata repulsed Arab forces at Ujjain.<br><br>

        Baij Nath Puri states that the Arab campaigns to the east of Indus proved ineffective. However, they had the unintended effect of integrating the Indian kingdoms in Rajasthan and Gujarat. The Chalukyas extended their empire to the north after fighting off the Arabs successfully. Nagabhata I secured a firm position and laid the foundation for a new dynasty, which would rise to become the principal deterrent against Arab expansion. Blankinship also notes that Hakam's campaigns caused the creation of larger, more powerful kingdoms, which was inimical to the caliphate's interests. Al-Hakam died in battle in 740 CE while fighting the Meds of north Saurashtra (Maitrakas, probably under the control of Chalukyas at this time).
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

        const medievalCat = medieval.filter(function (item) {
            if (item.category === category) {
                return item;
            }
        });

        const listCat = medievalList.filter(function (item) {
            if (item.singleCategory === category) {
                return item;
            }
        })
        displayMain(medievalCat);
       displaySub2(listCat)


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

