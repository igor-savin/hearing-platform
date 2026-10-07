import type { SitePage } from "@/lib/site";

// Richer copy for service pages whose text still comes from the 2026 crawl of
// the old Duda site. The crawl text is short and generic. An entry here
// replaces the body, FAQs and search snippet for one path and nothing else.
//
// The service page renderer shows the first three body strings as intro
// paragraphs. After that, a short line without end punctuation is read as a
// label for the paragraph that follows it. A line shaped like
// "Call ... appointment!" becomes the phone button. Keep labels at 48
// characters or fewer, and keep them free of end punctuation.
//
// Rules for this copy:
// - No prices, trial lengths, restocking terms or insurance networks. The
//   practice has not confirmed them for the web. Tell the reader to ask.
// - Real-ear measurement and live speech mapping are stated on the live site.
type ServicePageOverride = Partial<Pick<SitePage, "body" | "faqs" | "metaTitle" | "metaDescription" | "h1" | "title">>;

export const servicePageOverrides: Record<string, ServicePageOverride> = {
  "/hearing-aid-fitting": {
    metaTitle: "Hearing Aid Fitting in Westchester, NY | Audiology Associates",
    metaDescription:
      "Hearing aid fitting with real-ear measurement, live speech mapping and follow-up care in Harrison and Somers, NY. Call us to book your fitting.",
    body: [
      "Getting a customized fitting is just as important as choosing the right hearing aid. At Audiology Associates of Westchester, we make sure your hearing aids are programmed to your hearing, checked in your ear canal, and comfortable to wear. We serve patients across White Plains, NY; Harrison, NY; Scarsdale, NY; Rye, NY; Mt. Kisco, NY; Somers, NY; and Greenwich, CT.",
      "A fitting is more than handing over a device. Your audiologist sets the hearing aids from your hearing test results, measures what they deliver at your eardrum, and shows you how to handle, clean and charge them. The visits that follow fine-tune the sound after you have worn them in real rooms.",
      "Hearing aids that fit well also stay put, stay quiet, and need fewer adjustments. If you already own hearing aids that feel wrong, a fitting visit can help you too.",
      "Programming to your hearing test",
      "Your audiologist programs each hearing aid to the pattern of your own hearing loss. Factory settings are built on averages, and no two ears are the same. Programming also covers where and when you plan to use the devices, such as quiet rooms, restaurants, the car, meetings and phone calls.",
      "Real-ear measurement",
      "Real-ear measurement uses a thin, soft probe tube placed in the ear canal near the eardrum. It measures what the hearing aid actually delivers and compares it with a target for your hearing loss. Many audiologists consider it the best way to confirm a fitting. We use real-ear measurement at every fitting, because a device that looks right on a screen can still miss the target in your ear.",
      "Live speech mapping",
      "Live speech mapping uses the same probe microphones to show the benefit of your hearing aids in real time. You can see how speech sounds change as your audiologist adjusts the devices, and you can hear the difference at the same moment.",
      "Fit, comfort and style",
      "Your audiologist checks how each device sits in the ear, whether it stays in place, and whether it whistles. If you wear glasses or masks, use a phone often, or want a discreet device, say so at the fitting. Small receiver-in-canal models, in-the-ear styles and invisible options each suit different ears and different hearing losses.",
      "What happens at the visit",
      "Your audiologist confirms the devices and checks the fit in both ears. The hearing aids are programmed to your prescription. Real-ear measurement checks the result at your eardrum. You practice insertion, cleaning, charging and phone pairing before you leave. A follow-up visit is then planned for after you have worn the devices for a week or two.",
      "Getting used to new hearing aids",
      "Getting used to hearing aids takes time, usually a few weeks or months. Wear them as much as you can and be patient. The brain needs time to relearn sounds it has not heard clearly in years. A deeper hearing loss usually takes longer. Keep a log of times when you did not hear well, and bring it to your next visit so your audiologist can adjust the devices to match.",
      "Follow-up care",
      "Follow-up care is part of a good fitting. Ask what follow-up visits are included, and for how long, before you buy. Please get that in writing. If you need more adjustments or reprogramming in the future, call us.",
      "Trial period and return terms",
      "Every provider sets its own trial period, return terms and fees. Ask each one to give you the trial length, the return terms and any restocking fee in writing. Ask us about ours when you book.",
      "Hearing aids from another provider",
      "If you bought your hearing aids somewhere else, call ahead with the brand and model. In many cases we can help with adjustments, cleaning or reprogramming. Your audiologist will tell you what is possible for your device.",
      "Dr. Cliff Approved Provider",
      "Audiology Associates of Westchester is a Dr. Cliff Approved Provider. Dr. Cliff is a doctor of audiology whose videos explain hearing aid care to patients.",
      "Call Us Today to Schedule an Appointment!"
    ],
    faqs: [
      {
        question: "What is real-ear measurement?",
        answer:
          "Real-ear measurement uses a thin probe tube in your ear canal to measure what your hearing aid delivers near your eardrum. Your audiologist compares that result with a target for your hearing loss and adjusts the device to match."
      },
      {
        question: "How long does it take to get used to hearing aids?",
        answer:
          "Most people need a few weeks to a few months. The brain needs time to relearn sounds. Wear the devices as much as you can and keep a note of the situations that are hard."
      },
      {
        question: "Why do I need follow-up visits?",
        answer:
          "Your first week or two with hearing aids shows what you need in real rooms. Follow-up visits let your audiologist fine-tune comfort, clarity and settings based on what you tell us."
      },
      {
        question: "Can you adjust hearing aids I bought somewhere else?",
        answer:
          "In many cases, yes. Call ahead with the brand and model so the team can tell you what is possible for your device."
      },
      {
        question: "How much do hearing aids cost, and will insurance help?",
        answer:
          "Price depends on the technology level, the style and the care included. Our cost guide and our insurance guide explain the ranges and the rules for Medicare, New York Medicaid and Connecticut plans. Call us to talk through your own situation."
      },
      {
        question: "What should I ask about the trial period?",
        answer:
          "Ask for the trial length, the return terms and any restocking fee in writing before you buy. Ask us about ours when you book."
      }
    ]
  },
  "/": {
    metaTitle: "Audiologist Near You in Westchester | Audiology Associates",
    metaDescription: "Audiologist and hearing tests near you in Westchester. Offices in Harrison and Somers, NY. Hearing aids, tinnitus care and repairs. Call to book."
  },
  "/hearing-testing": {
    metaTitle: "Hearing Test Near You in Westchester | Harrison, Somers",
    metaDescription: "Book a full diagnostic hearing test at our Harrison or Somers office. A Doctor of Audiology explains your results. Call to schedule your visit.",
    body: [
      "Looking for a hearing test near you? We test hearing at two offices in Westchester County, in Harrison and Somers, NY. At Audiology Associates of Westchester, the hearing test is a full diagnostic evaluation rather than a screening. Our audiologists measure the softest tones you can hear across the pitch range and how well you understand speech, then check the eardrum and middle ear. What the results mean for the rooms you are in gets explained before anyone talks about devices.",
      "Call our Harrison or Somers office today to schedule a thorough hearing test and learn more about your specific hearing loss needs!",
      "Initial Hearing Consultation",
      "At the start of the appointment, one of our audiologists will learn more about you and ask you questions that will help us learn more about your needs. After that, we will look in your ears to see if there are obstructions. The first hearing consultation will help us find out about any hearing loss, the causes and degree of hearing loss, and the location of hearing loss. Finally, we will discuss possible treatment options.",
      "Types of Hearing Tests",
      "Audiometric Test",
      "An audiometric test uses tones of various intensity and speed to find out the extent of any hearing loss.",
      "Tympanometry",
      "Tympanometry tests the ear, eardrum, and conduction bones by putting pressure on the ear canal.",
      "OAEs",
      "Acoustically evoked otoacoustic emission testing (OAE) gives us a better idea of the health of the hair cells of your outer and inner ear.",
      "Call Our Hearing Doctor Today for an Appointment!",
      "After your hearing test is complete, we will review your audiogram with you to show you the degree of hearing loss. We will also discuss treatments with you so that you understand all of your options and can make the decision that’s best for you.",
      "Call us today to schedule a hearing test with our audiologist at Audiology Associates of Westchester. We look forward to helping you improve your hearing! We proudly serve clients in and around Greenwich, CT; White Plains, Scarsdale, Mt. Kisco, Harrison & Rye, NY."
    ],
    faqs: [
      { question: "Where can I get a hearing test near me in Westchester?", answer: "We test hearing at two offices in Westchester County, in Harrison and in Somers. The addresses, phone numbers and hours are listed on this page. Call the office that is the easier drive for you." },
      { question: "What happens during a hearing test?", answer: "We ask about your hearing and health, look in your ears, and test the softest tones you hear in each ear. We also test how well you understand speech, and check the eardrum and middle ear. Your audiologist then explains your audiogram." },
      { question: "Is a hearing test the same as a hearing screening?", answer: "No. A screening tells you whether you may have a problem. Ours is a full diagnostic evaluation by a Doctor of Audiology. It shows the type and level of hearing loss." },
      { question: "How much does a hearing test cost?", answer: "Ask us about the fee and about insurance when you book. Our guide to hearing test cost in Westchester explains what changes the price and what insurance may cover." },
      { question: "Who should have a hearing test?", answer: "Anyone who asks others to repeat themselves, struggles in restaurants or on the phone, has ringing in the ears, or has noticed a change in hearing. If your hearing changed suddenly, contact a doctor promptly." }
    ]
  },
  "/improve-your-hearing": {
    metaTitle: "Improve Your Hearing in Westchester | Hearing Loss Treatment",
    metaDescription: "Improve your hearing with a hearing test, hearing aids and listening support for noise. Offices in Harrison and Somers, NY. Call to book.",
    body: [
      "Hearing loss usually arrives over years, so it is easy to dismiss. The people around you often notice first. If you are missing words in busy rooms, or someone at home has started asking you to repeat yourself, the team at Audiology Associates of Westchester can find out what is happening and what can be done about it.",
      "The Effects of Hearing Loss",
      "Untreated hearing loss is hard on the people around you as well as on you. Conversations get shorter. Family events stop being worth the effort, and so do some of the things you used to enjoy. Improving your hearing starts with a hearing test at Audiology Associates of Westchester, which tells us what kind of loss you have and what will actually help.",
      "Types of Hearing Loss",
      "Different types of hearing loss call for different solutions, and the first job of a hearing test is to tell them apart. Conductive Hearing Loss: sound is blocked on its way through the outer or middle ear, often by earwax, middle-ear fluid, or infection, and it is frequently treatable and sometimes fully reversible. Sensorineural Hearing Loss: the hair cells of the inner ear or the hearing nerve are damaged, which is the most common permanent type, and well-fit hearing aids are the usual answer. Mixed Hearing Loss: a conductive problem sitting on top of a sensorineural one, so the plan usually has two parts, one medical and one technological. Sudden Hearing Loss: a rapid drop in hearing, usually in one ear, is a medical urgency and should be seen promptly rather than waited out. Find out which one applies by calling the hearing doctors at Audiology Associates of Westchester. We serve patients in and around Scarsdale, White Plains, Harrison, Rye and Mt. Kisco, NY, as well as Greenwich, CT.",
      "Conductive Hearing Loss: sound is blocked on its way through the outer or middle ear, often by earwax, middle-ear fluid, or infection. It is frequently treatable and sometimes fully reversible.",
      "Sensorineural Hearing Loss: the hair cells of the inner ear or the hearing nerve are damaged. This is the most common permanent type, and well-fit hearing aids are the usual answer.",
      "Mixed Hearing Loss: a conductive problem sitting on top of a sensorineural one, so the plan usually has two parts, one medical and one technological.",
      "Sudden Hearing Loss: a rapid drop in hearing, usually in one ear, is a medical urgency. It should be seen promptly rather than waited out.",
      "Hearing training to hear better in noise",
      "Many people say the hard part is noise, not quiet. A restaurant, a meeting or a family dinner can be the hardest room. Hearing training, also called auditory training, is practice at listening. The American Academy of Audiology says listening is a skill that can be practiced and improved, and that some audiologists recommend programs for hearing in noise. The American Speech-Language-Hearing Association (ASHA) says auditory training can support hearing care, especially when it is combined with other approaches. It can be done in person, at home, or with computer programs and mobile apps.",
      "Training does not replace hearing aids or other care. Hearing aids that are fitted well and set for your hearing do much of the work. Other tools also help in noise, such as remote microphones and simple habits: face the speaker, ask for a clear repeat, and choose a quiet seat. The best plan depends on your hearing test, so ask your audiologist what suits you.",
      "How to start",
      "Start with a hearing test. It shows whether noise is hard for you because of how your ears work, how you understand speech in noise, or both. Then tell your audiologist which rooms are hardest. Call our Harrison office at (914) 949-0034 or our Somers office at (914) 556-6720 to book."
    ],
    faqs: [
      { question: "Can hearing training help me hear better in noise?", answer: "It may help some people. The American Academy of Audiology says listening is a skill that can be practiced, and ASHA says auditory training can support hearing care when combined with other approaches. Ask your audiologist whether it suits you." },
      { question: "Does hearing training replace hearing aids?", answer: "No. Hearing aids that are fitted and set for your hearing do much of the work in noise. Training and communication habits are added to that care." },
      { question: "What else helps me hear in a noisy restaurant?", answer: "Hearing aids set for your hearing, a remote microphone, a seat with your back to the wall, and facing the speaker. Your audiologist can tell you which of these suit you after a hearing test." },
      { question: "Where do I start?", answer: "Start with a hearing test at our Harrison or Somers office. Tell us which rooms are hardest." }
    ]
  },
  "/lyric-invisible-hearing": {
    h1: "Lyric Hearing Aids in Westchester, NY",
    title: "Lyric Hearing Aids in Westchester, NY",
    metaTitle: "Lyric Hearing Aids in Westchester, NY | Invisible",
    metaDescription: "Lyric is an invisible hearing aid worn for months at a time. See who it suits, how it works and how to book a Lyric visit in Harrison or Somers.",
    body: [
      "Lyric is an invisible hearing aid that sits deep in the ear canal. A trained hearing care professional places it, and it stays in for months at a time. We fit Lyric at our Harrison and Somers offices. Ask us whether your ears and your hearing loss suit it.",
      "What Lyric is",
      "Lyric is made by Phonak, a Sonova brand, and is sold as Phonak Lyric. Phonak says it sits deep inside the ear canal, which is why Phonak calls it invisible. A Lyric-trained professional places it. Phonak recommends that a Lyric-trained professional also removes it.",
      "How long you wear Lyric",
      "Phonak designs Lyric for round-the-clock wear, including sleep. Each device lasts for months at a time. How long depends on your ear, your hearing loss and your noise environment. There is no daily insertion and no battery to change or charge. When a device reaches the end of its wear time, it is replaced at a visit.",
      "Showering, swimming and exercise",
      "Phonak says you can wear Lyric in the shower and while you exercise. Lyric is water resistant, not waterproof. Phonak does not recommend underwater swimming or diving. Phonak also says not to wear Lyric while skydiving.",
      "Medical scans",
      "Phonak says Lyric must be removed before an MRI because it contains metal parts. Tell the staff that you wear Lyric before any X-ray or CT scan.",
      "Who can wear Lyric",
      "Lyric does not suit every ear. Ear canal shape, skin health, hearing level and lifestyle all matter. Your audiologist looks in your ears and reviews your hearing test first. If Lyric is not right for you, ask about other discreet styles. Our guide to invisible hearing aids and our page on types of hearing aids explain the choices.",
      "How Lyric is bought",
      "Phonak says Lyric is sold as a subscription through authorized providers, for one, two or three years. It says each annual subscription covers replacement devices and servicing, and that professional fees may apply. Ask us what is included in your quote and what the visits cost. Please get the answers in writing.",
      "Book a Lyric visit in Westchester",
      "Call our Harrison office at (914) 949-0034 or our Somers office at (914) 556-6720. Tell us you are interested in Lyric, and we will plan a visit to check your ears and your hearing."
    ],
    faqs: [
      { question: "What is a Lyric hearing aid?", answer: "Lyric is an extended-wear hearing aid made by Phonak. A trained professional places it deep in the ear canal, and it stays in for months at a time." },
      { question: "Can I sleep or shower with Lyric?", answer: "Phonak says you can wear Lyric while you sleep and in the shower. It is water resistant, not waterproof, so Phonak does not recommend underwater swimming or diving." },
      { question: "Can I have an MRI with Lyric?", answer: "Phonak says Lyric must be removed before an MRI because it contains metal parts. Tell your care team that you wear Lyric before any scan." },
      { question: "Is Lyric right for everyone?", answer: "No. It depends on your ear canal, your skin, your hearing level and your lifestyle. A visit with an audiologist shows whether it suits you." },
      { question: "Do you fit Lyric hearing aids in Westchester?", answer: "Yes. We fit Lyric at our Harrison and Somers offices. Call to book a visit." }
    ]
  },
  "/hearing-aids-brands/phonak/phonak-lyric": {
    metaTitle: "Phonak Lyric Hearing Aid: Wear Time, Care, Candidacy",
    metaDescription: "Phonak Lyric facts: who places it, how long it is worn, showering, MRI limits and subscription. For local fitting, see our Lyric page."
  },
  "/hearing-aids-brands": {
    metaTitle: "Hearing Aid Brands and Manufacturers | Westchester",
    metaDescription: "Compare hearing aid brands and the companies that make them: Oticon, Phonak, ReSound, Signia, Starkey, Widex and more. Call us for advice."
  },
  "/types-of-hearing-aids": {
    metaTitle: "Types of Hearing Aids: BTE, RIC, ITE, ITC and CIC",
    metaDescription: "Compare the types of hearing aids: behind-the-ear, receiver-in-canal, in-the-ear and in-the-canal. See who each suits and book a hearing test.",
    body: [
      "There are several types of hearing aids: behind-the-ear, receiver-in-canal, in-the-ear, in-the-canal, completely-in-canal and extended-wear. The right type depends on your hearing loss, your ear, how well you handle small parts, and the features you want. Your audiologist helps you choose after a hearing test. Call our Harrison office at (914) 949-0034 or our Somers office at (914) 556-6720 to book.",
      "Behind-the-ear (BTE) hearing aids",
      "A BTE hearing aid hooks over the top of the ear and rests behind it. Many models send sound through a tube to a custom earmold in the ear canal. The Mayo Clinic says BTE aids suit almost any hearing loss and all ages, and can give the most volume. Newer models are smaller and hard to see when worn. They can pick up more wind noise.",
      "Receiver-in-canal (RIC) hearing aids",
      "A RIC hearing aid, also called receiver-in-the-ear, works like a BTE. The speaker sits in the ear canal and connects to the part behind the ear by a thin wire. The Mayo Clinic says RIC aids are usually harder to see than BTE aids. Earwax can clog the speaker. Some RIC models are rechargeable and connect to a phone.",
      "In-the-ear (ITE) hearing aids",
      "An ITE hearing aid is made to fit the outer ear. It comes as a full shell or a half shell. The Mayo Clinic says ITE aids help mild to more serious hearing loss. They have room for features such as volume control and directional microphones, and a larger battery. They are easier for others to see, and can pick up more wind noise.",
      "In-the-canal and completely-in-canal hearing aids",
      "An in-the-canal (ITC) aid fits partly in the ear canal. A completely-in-canal (CIC) aid is the smallest type. The Mayo Clinic says both are for mild to moderate hearing loss in adults, and are harder for others to see. They have smaller batteries, fewer features, and controls that can be hard to handle. Earwax can clog the speaker.",
      "Extended-wear and invisible hearing aids",
      "Some hearing aids sit deep in the ear canal and stay in for months at a time. Lyric is one example. These do not suit every ear. Read our page on Lyric hearing aids in Westchester and our guide to invisible hearing aids.",
      "How to choose a type of hearing aid",
      "Four things matter most. The first is your hearing loss: a larger device can give more power. The second is your ear, because the canal size and shape decide what fits. The third is handling: small devices need steady fingers and good vision. The fourth is features, such as rechargeable batteries, phone connection and directional microphones. A hearing test and an ear exam show what is possible for you.",
      "The Advantages of Wireless Hearing Aids",
      "If you would like the ability to pair your hearing aids directly with your smartphone or TV, wireless hearing aids may be the solution you want. Audiology Associates of Westchester can help you find wireless hearing aids and program them to suit you.",
      "Assistive Listening Devices",
      "Assistive Listening Devices - (ALDs) If you’re in an area with a lot of noise, ALDs can strengthen the sounds you actually wish to hear. They can also be used in conjunction with hearing aids or cochlear implants.",
      "Augmentative and Alternative Communication Devices - (AAC) These enable you to express yourself if you have a communication disorder.",
      "Alerting Devices – These can send an alert from your doorbell, phone, or alarm directly to your hearing device.",
      "Infrared Systems: These use a signal that can’t penetrate walls, which means they are ideal in classrooms, movie theaters, and rooms where private information is being discussed.",
      "Personal Amplifiers: These can be used when watching TV or outside. They are usually used when any of the aforementioned systems aren’t available."
    ],
    faqs: [
      { question: "What are the main types of hearing aids?", answer: "The main types are behind-the-ear, receiver-in-canal, in-the-ear, in-the-canal and completely-in-canal. Some devices are extended-wear and sit deep in the ear canal." },
      { question: "Which type of hearing aid is the smallest?", answer: "The Mayo Clinic says the completely-in-canal type is the smallest and hardest for others to see. It is for mild to moderate hearing loss in adults and has fewer features." },
      { question: "Which type of hearing aid is the most powerful?", answer: "The Mayo Clinic says behind-the-ear aids can hold the largest receiver and give the most volume. Your hearing test shows how much power you need." },
      { question: "How do I choose the right type?", answer: "Your hearing loss, ear canal, handling and the features you want all matter. An audiologist can show you the choices after a hearing test and an ear exam." }
    ]
  },
  "/Scarsdale-NY": {
    metaTitle: "Audiologist in Scarsdale, NY | Hearing Tests, Aids, Repair",
    metaDescription: "Hearing tests, hearing aids and hearing aid repair for Scarsdale, NY patients at our Harrison office. Call (914) 949-0034 to book a visit."
  },
  "/White-Plains-NY": {
    metaTitle: "Audiologist in White Plains, NY | Hearing Tests, Aids, Repair",
    metaDescription: "Hearing tests, hearing aids and hearing aid repair for White Plains, NY patients at our Harrison office. Call (914) 949-0034 to book a visit."
  },
  "/greenwich-ct": {
    metaTitle: "Audiologist Near Greenwich, CT | Hearing Aids, Tinnitus",
    metaDescription: "Audiologist near Greenwich, CT: hearing tests, hearing aids and tinnitus treatment at our Harrison, NY office, about 15 minutes away. Call to book."
  }
};
