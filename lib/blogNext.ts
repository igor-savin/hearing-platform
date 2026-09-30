import type { SitePage } from "@/lib/site";

type NextBlogBlueprint = Omit<SitePage, "url" | "canonical" | "type" | "lastModified" | "images">;

const reviewedBy = "Audiology Associates of Westchester clinical team";

const nextBlogBlueprints: NextBlogBlueprint[] = [
  {
    path: "/lgbtq-affirming-hearing-care",
    title: "LGBTQ+ Affirming Hearing Care",
    metaTitle: "LGBTQ+ Affirming Hearing Care | Westchester & Hudson Valley",
    metaDescription: "What affirming care means inside an audiology clinic: chosen name in the chart, how speech testing is recorded, and hearing after decades on HIV treatment.",
    h1: "LGBTQ+ Affirming Hearing Care in Westchester",
    heroImage: { src: "/assets/blog-conversation.png", alt: "Two adults in unhurried conversation at a hearing care appointment" },
    sections: ["Affirming Care", "The chart, and the New York wrinkle", "Speech testing, talkers, and what we write down", "Hearing and long-term HIV treatment", "Hearing aids after a voice change", "What we do not claim"],
    body: [
      "Most pages like this one say a practice is welcoming and stop there. Welcome is the floor, not the service. What follows is the specific, practical difference affirming care makes inside an audiology clinic: what goes in your chart, how the tests are chosen and recorded, and the two clinical situations where being LGBTQ+ genuinely changes what your audiologist should be doing. We have tried to be honest about the evidence throughout. Two of the four topics below are well studied. Two are not studied at all, and where that is the case we say so rather than dressing an educated guess as established practice.",
      "The chart, and the New York wrinkle. Your chosen name and pronouns go in your record and are what the front desk and the clinicians use, including on reminder and follow-up calls. Where a legal name is required for insurance billing, it lives in the billing field and nowhere else. That sounds administrative because it is, but the consequence is not: being misnamed in a waiting room is among the most commonly cited reasons LGBTQ+ patients delay or avoid care, and delayed hearing care has a particular cost, because untreated hearing loss compounds while you wait. The New York wrinkle is worth knowing about. Since the Gender Recognition Act took effect on 21 December 2021, changing a name in this state no longer requires publishing notice in a newspaper, and since 24 June 2022 the DMV has issued driver licences with an X marker on self-attestation, without a doctor's letter. The practical result is that a New Yorker's licence can be correct while an insurance card issued under an older policy is not, or the reverse. That mismatch is now more common here than it used to be, not less. Tell us when you book and it is set up before you arrive, rather than negotiated at the desk in front of a full room.",
      "Speech testing, talkers, and what we write down. Here is a piece of clinical detail almost nobody explains. A speech-in-noise test is not one test. QuickSIN uses a female talker against four-talker babble; HINT and BKB-SIN use a male talker. Those are properties of the recordings, and the choice measurably changes the score, because the signal-to-noise ratio you need for fifty per cent correct is not the same across them. A result therefore only means something beside another result from the same test and the same recording. We record which test and which recording were used and keep it constant across your visits, so that a change in your score is a change in your hearing rather than a change in the disc. That is good practice for every patient. We raise it on this page because when a patient's voice or presentation is not what a clinician unthinkingly expects, an unexamined talker choice is exactly the sort of thing that quietly creeps in. There is no published guidance on speech audiometry for transgender and gender-diverse patients. We looked; the audiology literature on trans care is about clinical culture rather than test procedure. In the absence of guidance, consistency is what protects you. One clarification while we are here: standard speech testing uses recorded talkers or the clinician's voice, never yours. Your own voice enters into it only when we are checking occlusion, which is two sections down.",
      "Hearing and long-term HIV treatment. This one is genuinely established, and it is more interesting than the version usually repeated. A large cohort study published in JAMA Otolaryngology-Head & Neck Surgery, drawing on the Multicenter AIDS Cohort Study and the Women's Interagency HIV Study, found that adults living with HIV had measurably poorer hearing thresholds than HIV-negative comparators, on the order of ten decibels on average, at both low and high frequencies. The American Academy of Audiology's position is that several large studies now point consistently toward an association. What makes it worth understanding rather than merely knowing is the part usually left out: in that study the difference was not explained by white blood cell count, viral load, duration of antiretroviral therapy, or adherence. The common assumption that it is simply the medication is not what the data showed.",
      "The reason this matters more in New York than almost anywhere else is demographic. New York State Department of Health figures put more than 104,000 New Yorkers living with diagnosed HIV in 2022, and 57 per cent of them were aged 50 or older. That is a majority, and it is the age band where age-related hearing loss arrives on its own. Many in it were treated in the 1980s and 1990s with the older nucleoside analogues, zidovudine, stavudine and didanosine, which carry historical ototoxicity signals of their own. For someone on a modern regimen the honest position is that an association exists and the mechanism is not settled. What we do about it is unglamorous and useful: get a baseline audiogram and repeat it, so that change is measured against your own history rather than against a population average. That is the same advice we would give anyone with a known risk factor, and it is worth more than a theory about why.",
      "Hearing aids after voice training or voice surgery. If your voice has changed substantially, through training, through surgery, or through testosterone, and you wear hearing aids, three things are worth checking. We should be upfront that none of them rests on published evidence: there is no literature on this and no manufacturer guidance, so what follows is reasoning from documented mechanisms, clearly labelled as such. First, own-voice processing. Some hearing aids are trained during fitting to recognise your voice. Signia's implementation builds a spatial model of the path from your mouth to the microphones and states plainly that detection rests on spatial cues rather than on the sound quality of your voice, remaining reliable when the voice is raised, hoarse, or speaking another language. That mechanism argues a change in pitch or resonance should not defeat it. Signia does not address voice change anywhere in its documentation, so treat that as a documented silence rather than a reassurance. Second, occlusion, the boom or blocked feeling of your own voice. The occlusion effect is concentrated below one kilohertz and varies strongly with the vowel being spoken, so a lower fundamental frequency puts proportionally more of your own voice into exactly that region. It is reasonable to predict that occlusion may feel worse after masculinisation and better after feminisation. No study has tested that. It is a reason to re-check, not a finding.",
      "Third, and this is the one that matters most: real-ear verification will not catch any of it. Verification uses a standardised international speech signal built from six talkers, deliberately independent of your voice. That is precisely why your fitting stays valid through a voice change, and precisely why an own-voice complaint will not appear on the measurement. The check has to be a conversation and a re-fit, not a printout. If your voice has changed since your aids were fitted, book a check and say so when you book.",
      "What we do not claim. We are a general audiology practice, not a specialist gender clinic, and we have no specific training in gender-affirming care beyond keeping current with an audiology literature that is, on these topics, thin. We do not provide voice therapy. That is a speech-language pathology specialty, and if you need it we will say so and point you elsewhere rather than improvise. For community support, referrals and local programming, The LOFT LGBTQ+ Community Center at 252 Bryant Avenue in White Plains has served Westchester and the Hudson Valley since 1983 and is a better first call than we are for anything outside hearing. What we can offer is competent hearing care from clinicians who will use your name, choose and record your tests carefully, know why a baseline matters after decades on HIV treatment, and take an own-voice complaint seriously instead of pointing at a verification screen. Our offices are in Harrison and Somers. Call (914) 949-0034 and tell us anything you would like us to know before you arrive."
    ],
    faqs: [
      { question: "Will you use my chosen name?", answer: "Yes, in your record, at the desk, and on reminder and follow-up calls. A legal name is stored only where insurance billing requires it. If your ID and your insurance card do not agree, which is increasingly common in New York since the Gender Recognition Act simplified name and gender marker changes, tell us when you book and it will be set up before you arrive." },
      { question: "Does HIV or antiretroviral therapy cause hearing loss?", answer: "Large cohort studies consistently find poorer hearing thresholds in adults living with HIV, around ten decibels on average in the JAMA Otolaryngology study. But that study did not find the difference explained by viral load, duration of treatment or adherence, so the simple version in which the medication is the cause is not what the evidence showed. The older nucleoside analogues such as zidovudine and stavudine do carry historical ototoxicity signals. The practical answer is a baseline audiogram, repeated, so change is measured against your own history. This matters here in particular: 57 per cent of the more than 104,000 New Yorkers living with diagnosed HIV in 2022 were 50 or older." },
      { question: "My voice has changed. Do my hearing aids need refitting?", answer: "Possibly, and it is worth a check. Own-voice detection in the aids that use it appears to rely on the spatial path from your mouth to the microphones rather than on the sound of your voice, so it should survive a change, though no manufacturer addresses voice change directly. Occlusion is the more likely complaint, because it sits in the low frequencies where a lowered voice puts more energy. Real-ear verification will not show any of this, since it uses a standard signal rather than your voice, so the check is a conversation and a re-fit." },
      { question: "Do you offer voice therapy?", answer: "No. Voice training and voice feminisation or masculinisation are speech-language pathology, not audiology, and we will not improvise them. If you need that, we will tell you so and help you find the right professional." },
      { question: "Is there research on audiology care for transgender patients?", answer: "Very little. Two tutorials appeared in the American Journal of Audiology in 2023, both concerned with clinical culture and terminology rather than test procedure. There is no published guidance on speech audiometry for trans and gender-diverse patients, and nothing at all on hearing aid fitting after a voice change. We would rather tell you the gap exists than write around it." },
      { question: "Where is the nearest LGBTQ+ community centre?", answer: "The LOFT LGBTQ+ Community Center, at 252 Bryant Avenue in White Plains, has served Westchester and the Hudson Valley since 1983 and runs Westchester Pride among other programming. For anything outside hearing care, it is a better first call than we are." }
    ],
    related: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Comprehensive Hearing Assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "Harrison office", href: "/harrison-ny" },
      { label: "Somers office", href: "/Somers-NY" },
      { label: "Contact Us", href: "/contact-us" }
    ],
    blogMeta: {
      frame: "Practice guide",
      byline: "From the audiology desk",
      reviewedBy,
      readTime: "8 min read",
      articleType: "Affirming care",
      pullQuote: "Welcome is the floor, not the service. The question is what happens at the front desk in November, not what colour the website goes in June.",
      keyTakeaways: [
        "Chosen name and pronouns go in your record and are what we use; a legal name lives in the billing field only.",
        "Speech-in-noise tests use different talkers, QuickSIN female, HINT and BKB-SIN male, and the choice changes the score. We record which test and recording were used and keep it constant.",
        "Hearing loss is associated with HIV in large cohort studies, but that study did not find it explained by time on antiretroviral therapy or adherence. A repeated baseline audiogram is the useful response.",
        "After a substantial voice change, re-check own-voice comfort and occlusion. Real-ear verification will not detect an own-voice problem, because it deliberately does not use your voice.",
        "There is no published audiology guidance on speech testing for trans patients and none on hearing aids after voice change. Where we are reasoning rather than citing, we say so."
      ],
      patientQuestion: "What does an affirming audiology practice actually do differently?",
      storyLead: "Four concrete things: what goes in the chart, how speech tests are chosen and recorded, why a baseline matters after decades on HIV treatment, and what to re-check after a voice change.",
      sources: [
        { label: "NYCLU: Changing Your Name or Gender Marker Under the Gender Recognition Act", href: "https://www.nyclu.org/resources/know-your-rights/changing-your-name-or-gender-marker-under-gender-recognition-act" },
        { label: "NYSDOH: National HIV/AIDS and Aging Awareness Day", href: "https://www.health.ny.gov/press/releases/2024/2024-09-18_hiv_aids_aging_awareness_day.htm" },
        { label: "American Academy of Audiology: HIV and Hearing Loss", href: "https://www.audiology.org/" },
        { label: "The LOFT LGBTQ+ Community Center", href: "https://www.theloftcenter.org/" }
      ]
    }
  },
  {
    path: "/fortell-hearing-aids-what-we-know",
    title: "Fortell Hearing Aids: What Is Actually Known",
    metaTitle: "Fortell Hearing Aids: What Is Actually Known | Audiology Associates",
    metaDescription: "Fortell fits only in its own clinics, at $6,800 a pair, out of network with every insurer. What the evidence shows, and what to ask before you book a visit.",
    h1: "Fortell Hearing Aids: What Is Actually Known So Far",
    heroImage: { src: "/assets/blog-hearing-care-options.png", alt: "Weighing hearing aid options before committing to a purchase" },
    sections: ["Why this concerns Westchester now", "The idea", "Following the evidence", "The exclusions", "What is good about it", "What we can and cannot do", "Corrections"],
    body: [
      "Fortell is a New York hearing aid company that launched in December 2025 and has since raised $163 million at a $740 million valuation, been profiled by Wired and the New York Times, and named to Forbes' Next Billion-Dollar Startups. Its founders came from Butterfly Network. The device costs $6,800 a pair and is sold only at Fortell's own clinics, fitted by audiologists Fortell employs.",
      "Why this concerns Westchester now. Most coverage frames Fortell as something arriving later, in cities that are still waitlists. That is not the position here. Two of its three open clinics are at 530 Park Avenue and on Greenwich Avenue, which puts one a short drive east of Harrison and the other a train ride south. Patients in this county can be fitted this month if they choose to be, with no waitlist involved. We would rather they went into that decision informed than discover the terms afterwards.",
      "We should also declare our position, because you should weigh what follows accordingly. Fortell does not supply independent practices and has no intention of doing so, which makes this a competitor writing about a competitor. We have tried to write it the way we would want somebody to write about us.",
      "The idea. Nearly every hearing aid advertising artificial intelligence works by classifying the room and adjusting to suit: this is a restaurant, so narrow the microphones and pull the noise down. Fortell's position is that classification is the wrong level to work at, and that the device should instead separate the individual sound sources and rebuild the mixture with the voices you want brought forward. That is source separation, the technique behind the noise suppression on a video call, and the reason it has not appeared in hearing aids before is delay. An aid that lags the room makes your own voice sound wrong and stops lips matching sound. Fortell built its own chip to get the delay to roughly ten milliseconds, which is inside the window where most wearers stop noticing. Whatever one makes of the marketing, this is a genuine engineering position rather than last year's processing renamed.",
      "Following the evidence. The homepage claims the world's most intelligent hearing aid, up to 98 per cent of background noise eliminated, and ten times more words understood. Behind those sit two studies. The first, from November 2025, is a pre-registered, double-blind randomised trial of speech intelligibility in thirty hearing aid users, posted as a PDF on Fortell's own site. The second, dated May 2026, is a blinded preference study in twenty adults, and it is published: Spatial AI consistently preferred to state-of-the-art hearing aids in multitalker noise, International Journal of Audiology, and you can read it at https://doi.org/10.1080/14992027.2026.2663345. An earlier version of this page said we could not find that paper indexed outside Fortell's own site, and that neither study stated a sample size. Both statements were wrong. The corrections are set out at the foot of this page.",
      "What we would still put to a reader is narrower than what we first wrote. Every author on the published paper is a Fortell founder, employee or compensated consultant, the study was funded by Fortell, and the paper declares as much in its statement of interest, which is more than a good deal of industry research does. Neither study names the make and model of what it was compared against: the preference study describes its five controls as the top-spec device from each major manufacturer, and the intelligibility study withholds its single control altogether. The January 2026 reporting on that trial named the control as Phonak's Audéo Infinio Sphere.",
      "Two numbers need separating, because we ran them together. The 9.2 dB quoted in January and the 17 dB on the site today are different measurements from the same trial, and neither has moved. The first is the SNR-50 improvement, the shift in the noise level at which listeners get half the words right, measured against the control aid. The second is a laboratory measurement of signal-to-noise improvement over the unaided ear, where the control aid managed 1.9 dB. Our description of the headline figure as having changed was wrong.",
      "The ten-times claim needs the same care. It is an odds ratio rather than a count of words. In the hardest condition tested, minus 6 dB, the model puts the odds of identifying a word correctly 18.9 times higher with the Fortell device than with the control, which the company converts to roughly ten times the probability for a typical listener; the raw group averages there are 50 per cent against 7 per cent. At 0 dB they are 80 per cent against 31 per cent. We set the 0 dB figures against a claim the company makes about the hardest condition, called the ratio two and a half, and have withdrawn it. What is left is a point about presentation and not about fact: a shopper reads ten times more words as ten times the words, and the number behind it is a modelled odds ratio at the single most difficult signal-to-noise ratio in the study. Ask about it.",
      "One thing has not changed. The NYU researcher quoted on the homepage saying he had never seen so categorical a result also told the same reporter that the configuration used was particularly good at showing the advantages of this aid, and that different configurations might show different results. That sentence still does not appear in the marketing. None of this makes the device poor. It means the evidence is company-funded and company-authored, and that at $6,800 you are entitled to notice.",
      "Update, September 25, 2026: this has changed since the page was last corrected. HearAdvisor, whose standardised bench measurements are the nearest thing this field has to a neutral referee, published its results on Fortell on September 15, 2026 (https://www.hearadvisor.com/products/fortell-ai-hearing-aids; see also Fortell's own summary at https://www.fortell.com/blog/fortell-hearadvisor-press-release). Testing on an acoustic manikin gave Fortell an overall SoundScore of 6.0, a speech-in-noise score of 6.4, which HearAdvisor describes as the highest it has recorded, a first-fit speech-in-quiet score of 5.4, and a perfect result on feedback management. That is a genuine independent measurement, and it closes the gap we described in an earlier version of this page. It still reflects laboratory conditions on a manikin at first-fit rather than an individually tuned real-world fitting. The trade-press gap has narrowed but not closed: there is still nothing in Hearing Review, nothing in The Hearing Journal, no review from Doctor Cliff, none from HearingTracker's Matthew Allsop. Most of the wider professional discussion is still happening in a single forum thread.",
      "The exclusions. Three, and for some readers they settle it before performance enters into it. There is no telecoil, so if you use loop systems the device cannot receive them, and no amount of processing substitutes for that. The app is iPhone-only with no Android version, which is a hard exclusion rather than an inconvenience. And Front Voices, the noise-elimination mode the marketing is built around, has to be switched on by hand rather than engaging when a room turns difficult. Then the one that surprises people most: Fortell is out of network with every insurer. It will hand you paperwork to submit yourself and nothing further. If you hold hearing aid benefits through an employer plan, a union, or a Medicare Advantage rider, that is real money the model gives you no way to use.",
      "What is good about it. We would rather say this plainly than bury it. Building custom silicon to get latency low enough for source separation is not a thing companies do for marketing reasons. The advisory board, which includes Stanford and NYU Langone audiology, is not decorative. The price is honest in a way much of this industry is not: $6,800 covering five years of care, a three-year warranty and a hundred-day trial is a clear bundled number, and plenty of practices charge more for less while being vaguer about it. And the most useful single data point we found is not Fortell's. An independent audiologist described fitting a patient with these devices, then running real-ear measurement and verifying directionality, and reported the result was accurate and the patient delighted. One case proves nothing statistically. But it is exactly the check we would run, done by someone with no stake in the answer, and it came out well.",
      "What we can and cannot do. We cannot sell you a Fortell device and we cannot service one; the company does not supply practices like ours, by design. Two things we can do cost you nothing. If you are holding a quote from anywhere, Fortell included, we will give you a second opinion on it, which means a conversation about whether the device suits your audiogram and the rooms you actually struggle in, not a pitch for something else. And if you already wear aids fitted elsewhere, we will verify them with real-ear measurement: a probe microphone in the canal measuring what the device delivers against your prescription across pitches. First-fit settings routinely land well under target, and an unverified premium aid can easily be beaten by a carefully verified mid-range one. That check is worth having whoever fitted you. We fit Phonak, Oticon, Signia, Starkey, ReSound and Widex at Harrison and Somers, which is the real difference between an independent practice and a single-product clinic: no manufacturer's marketing can wrong-foot us, because none of them pays our rent.",
      "Corrections. We went back over this page against the primary sources and found four statements that were wrong. We have rewritten the relevant passages rather than quietly adjusting them. We had said we could not find the May 2026 preference study indexed anywhere outside Fortell's site; it is published in the International Journal of Audiology at https://doi.org/10.1080/14992027.2026.2663345. We had said neither study states a sample size; both do, in their abstracts, at thirty and twenty. We had said the headline improvement figure moved from 9.2 dB to 17 dB; it did not, and the two are different measurements reported in the same paper. We had said the ten-times claim was contradicted by Fortell's own 80 per cent against 31 per cent figures; those are the 0 dB condition, while the claim concerns minus 6 dB, where the modelled odds ratio is 18.9 and the raw averages are 50 per cent against 7 per cent. We have described the original wording here rather than deleting it, because a page that holds a company to an evidentiary standard should show its own corrections in the open. What had not changed as of that correction: no independent laboratory had published measurements of this device, both studies are funded and authored by the company, and neither names the devices it was compared against. Corrected 8 September 2026. Update, 25 September 2026: the independent-measurement gap noted above has since closed. HearAdvisor has published standardised laboratory test results for Fortell, described above under 'Following the evidence.' This is new information rather than a correction of an earlier error; both studies behind Fortell's own speech-understanding and preference claims remain company-funded and company-authored, and neither names the devices it was compared against. Updated 25 September 2026."
    ],
    faqs: [
      { question: "Can I buy Fortell hearing aids from Audiology Associates of Westchester?", answer: "No. Fortell employs its own audiologists and fits only in its own clinics; it does not supply independent practices at all, and that is deliberate rather than an oversight. We cannot order or service the device. What we can do is give you a second opinion on a Fortell quote, and verify any hearing aids you already own with real-ear measurement." },
      { question: "Where is the nearest Fortell clinic to Westchester?", answer: "Two are already open nearby: 530 Park Avenue in Manhattan and Greenwich Avenue in Greenwich, Connecticut. A third is in Palm Beach. Boston is announced for autumn 2026, and Miami, San Francisco and Palo Alto are waitlists with no published address or date." },
      { question: "Will my insurance cover a Fortell hearing aid?", answer: "No. Fortell holds no contracts with any insurer. It provides paperwork so you can file an out-of-network claim yourself, and nothing beyond that. If you have hearing aid benefits through work, a union, or a Medicare Advantage rider, it is worth establishing what those are worth before deciding, because they are generally far easier to use with an in-network provider." },
      { question: "Is the evidence for Fortell strong?", answer: "Stronger than this page first said, and still largely controlled by the company. The preference study, in twenty adults, is published in the International Journal of Audiology. The intelligibility study, in thirty hearing aid users, is a pre-registered double-blind trial posted on Fortell's own site. Both state their sample sizes; an earlier version of this page said they did not, which was wrong and has been corrected. Every author on both studies is a Fortell founder, employee or paid consultant, and Fortell funded the work, which the published paper declares. Neither study names the make and model of what it was compared against. Independent measurement has now arrived from another source: HearAdvisor published standardised laboratory test results on September 15, 2026, giving Fortell an overall SoundScore of 6.0 and the highest speech-in-noise score HearAdvisor has recorded. That is a genuine independent measurement, though it reflects laboratory conditions at first-fit rather than an individually tuned fitting." },
      { question: "What should I ask before paying $6,800?", answer: "Which comparator devices the studies used, by make and model, because neither study names them. Whether your fitting will be verified with real-ear measurement and whether you may have the printout. What becomes of the five years of included care if you move, or if the clinic nearest you closes. Whether the Android app has shipped, if you are not on an iPhone. And raise loop systems directly if you use them anywhere, because there is no telecoil." }
    ],
    related: [
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Signia MaX: What Is Actually Known", href: "/signia-max-what-we-know" },
      { label: "Phonak EON: What Is Actually Known", href: "/phonak-eon-what-we-know" }
    ]
  },
  {
    path: "/signia-max-what-we-know",
    title: "Signia MaX: What Is Actually Known",
    metaTitle: "Signia MaX: What Is Actually Known | Audiology Associates",
    metaDescription: "Signia released MaX on 24 August 2026. What is confirmed, which figures come from Signia's own unpublished papers, and what nobody has measured.",
    h1: "Signia MaX: What Is Actually Known So Far",
    heroImage: { src: "/assets/brands/Signia-MaX-device.webp", alt: "Signia Pure Charge and Go MaX rechargeable hearing aid" },
    sections: ["The idea", "Where the numbers come from", "The Auracast caveat", "What is missing", "Who it suits"],
    body: [
      "Signia announced MaX on 24 August 2026 and American dispensers could order it the same day. It now sits above Signia IX at the head of the range, and the pitch behind it is unusual: rather than a single trained system doing everything, four of them, each given a narrower job.",
      "The idea. The industry standard is a lone network trained to pull conversation clear of everything else. Signia's argument is that this asks a single system to settle several unrelated questions simultaneously — is anyone actually talking, is that the wearer's own voice, has the acoustic environment changed underfoot — and that a wrong answer to any of them sends the aid off in the wrong direction. MaX therefore distributes those judgements across four separately trained networks running in concert, badged Acoustic Intelligence. It is a real engineering stance, not a slogan bolted onto last year's silicon.",
      "Where the numbers come from. Signia reports that 97 per cent of wearers do better in noisy group conversation than with unnamed competitors, and that MaX leads on signal-to-noise performance in the same conditions. Both cite white papers written by Signia in 2026 that we have not been able to find published anywhere, with no stated protocol, sample size or comparator. A third figure — 54 times the processing power — carries a footnote whose entire content is that the yardstick was Signia IX. That is a baseline, not a study. That is not an accusation. Manufacturers validate their own designs because that is how devices get built, and the company has been publishing hearing research for decades. It does mean no outside party has verified any of it, and that the figures doing the heaviest persuasive work describe the chip rather than what a patient experiences across a dinner table.",
      "The Auracast caveat almost nobody is printing. Every summary of this device lists Auracast, and the hardware genuinely supports it. What the summaries leave out sits in Signia's own small print: the capability is enabled by a software release scheduled before March 2027. Buy today and you own a device built for broadcast audio that cannot yet receive any. With the entire industry marketing this technology at once, the distinction deserves stating plainly. Meanwhile the built-in telecoil is working, and around here that still reaches more venues than Auracast does.",
      "What is missing. No outside laboratory has measured MaX, and none will for months. There is no published price at any level, no performance-tier breakdown, no fitting range, no receiver strengths and no ingress rating. The platform comes in exactly one form: rechargeable, worn behind the ear with the receiver in the canal, offered in eight colours. Nothing custom, nothing instant-fit, no slim or powerful variant, and no CROS option. And nothing in the launch material refers to tinnitus, although notch therapy and the relief signals have been standard across Signia IX for years. We expect they carry forward and will confirm it in the fitting software before saying so.",
      "Who it suits. Crowded rooms full of overlapping voices are the situation this design targets most directly — and also the one where the supporting evidence is thinnest, so ask for a demonstration instead of accepting the figure. If your ears need a form MaX is not made in, choosing IX is not settling for less; it is the only Signia that physically fits the brief, and it carries external test results the newer platform lacks. And if your current IX aids have been verified and are doing their job, our advice is to leave them alone. Our Harrison and Somers audiologists will set MaX beside whatever you wear now, in a noisy room rather than a quiet booth, and you can decide with your own ears."
    ],
    faqs: [
      { question: "What does MaX stand for?", answer: "Multi-adaptive Xperience. Signia names platforms this way: AX was Augmented Xperience, IX was Integrated Xperience. MaX is the 2026 generation and now sits at the top of the range." },
      { question: "Has anyone independent tested Signia MaX?", answer: "Not as of late August 2026. Every published figure originates with Signia. Signia IX has been externally measured and performed strongly, which is the relevant comparison if evidence matters more to you than release date." },
      { question: "Does MaX support Auracast?", answer: "The chip does. Switching it on waits for a software release Signia has put before March 2027. In the meantime the built-in telecoil is live, and locally that reaches more venues than Auracast currently does anyway." },
      { question: "Should I wait for it or be fitted now?", answer: "If hearing is a daily struggle, a properly verified fitting today will serve you better than waiting on a platform whose real-world performance nobody has measured. If your present aids work, nothing about this launch obliges you to move." }
    ],
    related: [
      { label: "Signia MaX", href: "/hearing-aids-brands/signia/signia-max" },
      { label: "Signia MaX vs Signia IX", href: "/hearing-aids-brands/signia/signia-max-vs-signia-ix" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Fortell Hearing Aids: What Is Actually Known", href: "/fortell-hearing-aids-what-we-know" }
    ]
  },
  {
    path: "/phonak-eon-what-we-know",
    title: "Phonak EON: What Is Actually Known",
    metaTitle: "Phonak EON: What Is Actually Known | Audiology Associates",
    metaDescription: "Phonak released EON on 24 August 2026. What the reference behind the headline claim actually says, and what Phonak is careful not to claim at all.",
    h1: "Phonak EON: What Is Actually Known So Far",
    heroImage: { src: "/assets/brands/Phonak-EON-Sphere-device.webp", alt: "Phonak Audeo EON Sphere rechargeable receiver-in-canal hearing aid" },
    sections: ["What changed", "Following the reference", "What Phonak will not claim", "What is missing", "Who it suits"],
    body: [
      "Phonak released EON from Staefa on 24 August 2026, on sale in the United States the same afternoon — the same day Signia released its own flagship, which is not something that happens often. Three receiver-in-canal models make up the range: Audeo EON Sphere, Audeo EON R, and a CROS version for hearing lost on one side.",
      "What changed is the processor. The previous flagship carried two chips, the second doing nothing but running a neural network that separates voices from noise. EON does that on one chip, called HYPERSONIC, and the efficiency saving becomes a shell Phonak puts at 25 per cent smaller and 20 per cent lighter drawing 37 per cent less current. The consequence that matters most is indirect: because the network costs less to run, it now operates at three performance levels rather than being confined to the two most expensive. For a practice that fits plenty of people who cannot justify a top-tier device, that is the most significant thing in the launch.",
      "Following the reference. One sentence is doing most of the work in the coverage: that wearers are twice as likely to catch every word, from any direction. It carries a reference marker, so we followed it. It leads to a Phonak field study from 2024, about the previous platform's version of the same feature, and the comparison described is that feature running against the identical aid with the feature disabled. That is a sound result and we have no argument with it — but it is not a measurement of EON, not a comparison with the platform EON replaces, and not a comparison with whatever you wear now. Anyone already in an Infinio Sphere has had that benefit since 2024. A second claim, that EON Sphere beat four rival devices for clarity in loud noise, comes from a 2026 paper Phonak wrote which never names the four.",
      "What Phonak will not claim. Read the material closely and an absence stands out: nowhere does Phonak argue that EON hears more clearly in a noisy room than the previous flagship did. From a company that has built its reputation on precisely that measure, the restraint is striking, and we read it as honesty rather than evasion. It also reframes the upgrade question entirely. Moving from a working Infinio fitting buys a smaller, lighter aid with broadcast audio that functions — not, on the manufacturer's own account, better hearing in a restaurant.",
      "What is missing. No independent laboratory has assessed EON; testing is said to be under way and on past form will take months. There is no published price at any level, and no ingress rating in the launch documents. Every EON is receiver-in-canal, so there is no custom shell, no titanium in-the-canal model, no powerful behind-the-ear instrument and nothing for children. And there is no telecoil on any model, which is not new for this line but matters here, because loops remain how most Westchester venues broadcast. Tinnitus goes unmentioned throughout, despite Tinnitus Balance having shipped as standard on these aids for years.",
      "Who it suits. Anyone for whom Auracast is already real, because a venue they attend has installed it. Anyone with hearing lost on one side, since EON launched with a CROS model and Signia's flagship did not. Anyone who would benefit from a Roger microphone, which carries across and still has no equivalent from another manufacturer. Anyone whose aids sit in a drawer because of their size. And anyone previously priced out of the speech network. If you are wearing verified Infinio aids that work, we would not move you, and we will say so at the appointment rather than afterwards."
    ],
    faqs: [
      { question: "When did Phonak EON become available?", answer: "Announced and on sale in the United States on 24 August 2026, with Germany, France, the UK and Australia scheduled for September. What any practice can fit depends on stock and fitting software updates." },
      { question: "Does Phonak EON have a telecoil?", answer: "No, and no model in this line has for several years. EON supports Auracast instead, and unlike some devices launched the same month it works now rather than later. Most looped venues locally are still loops, so name the venue that matters to you and we will check what it uses." },
      { question: "Is EON better than Phonak Infinio in noise?", answer: "Phonak does not claim that it is. The gains claimed are size, weight, efficiency, working Auracast, and the speech network reaching a third performance level." },
      { question: "Has anyone independent measured it?", answer: "Not yet. Every figure in circulation comes from Phonak's own field studies and insight papers. The platform EON replaces has been externally assessed and scored near the top of its category." }
    ],
    related: [
      { label: "Phonak EON", href: "/hearing-aids-brands/phonak/phonak-eon" },
      { label: "Phonak EON vs Phonak Infinio", href: "/hearing-aids-brands/phonak/phonak-eon-vs-phonak-infinio" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Fortell Hearing Aids: What Is Actually Known", href: "/fortell-hearing-aids-what-we-know" }
    ]
  },
  {
    path: "/can-an-audiologist-remove-earwax-westchester",
    title: "Can an Audiologist Remove Earwax?",
    metaTitle: "Earwax Removal by an Audiologist | Westchester",
    metaDescription: "Audiologists can remove earwax when the ear history and the examination allow it. Here is what happens at the appointment, and when a referral is safer.",
    h1: "Can an Audiologist Remove Earwax? What Westchester Patients Should Know",
    heroImage: { src: "/assets/blog-ear-care.png", alt: "Adult preparing for safe professional ear care and an ear examination" },
    sections: ["Earwax Removal", "Local Service Guide", "Audiologist perspective", "Frequently asked questions"],
    body: [
      "Yes. Audiologists may provide cerumen management when their training, state scope of practice, equipment, and the patient's ear history make removal appropriate. The first step is always an ear examination—not an assumption that every plugged ear is caused by wax.",
      "At Audiology Associates of Westchester, earwax questions often arise before a hearing test, after a hearing aid begins sounding weak, or when an ear suddenly feels blocked. The safest next step depends on what the clinician sees and the symptoms you report.",
      "Why earwax can affect more than comfort",
      "A significant wax blockage can reduce sound reaching the eardrum, interfere with accurate hearing-test results, cause a hearing aid to whistle, clog a receiver or wax guard, and create a feeling of fullness. But fullness can also have other causes. A visual ear check helps determine whether wax is actually the likely explanation before anyone tries to remove it.",
      "What happens at an earwax appointment",
      "The clinician reviews symptoms, prior ear surgery, eardrum perforations, tubes, drainage, pain, medications, and other relevant history. The ear canal and eardrum are inspected when visible. If removal is appropriate, the method is selected for the amount and location of wax and the patient's comfort. Hearing testing or a device check may follow when those were part of the original concern.",
      "When an audiologist may refer instead",
      "Referral may be the safer choice when there is severe pain, active drainage or bleeding, a suspected infection, an object in the ear, a known or possible eardrum problem, certain surgical histories, or wax that cannot be removed safely in the office. Sudden hearing loss should not be treated as a routine wax problem, even when the ear feels clogged.",
      "Why cotton swabs usually make the problem harder",
      "Cotton swabs and other objects can push wax deeper, scratch the canal, or injure the eardrum. Ear candles are not a safe substitute for professional care. Home drops may be inappropriate for some ears, especially with tubes, perforation, drainage, or prior surgery, so ask a qualified clinician before putting a product into an ear with an uncertain history.",
      "Earwax and hearing aids",
      "Hearing aids naturally encounter earwax because the receiver, dome, or earmold sits at the canal entrance or inside it. A weak or intermittent device may need a wax-guard change or professional cleaning rather than a programming change. If the device is clean but hearing still feels muffled, an ear inspection and updated hearing check can separate a device issue from an ear or hearing change.",
      "Where to schedule in Westchester",
      "Patients near Harrison, White Plains, Scarsdale, Somers, Rye, and nearby communities can call the practice to describe the blockage, timing, pain, drainage, hearing change, and hearing-aid symptoms. That information helps the team select the right appointment and advise whether audiology care or medical evaluation should come first.",
      "Bottom line",
      "An audiologist may be able to remove earwax safely, but the value of the visit begins with determining whether wax is truly the problem. Seek faster medical guidance for sudden hearing change, severe pain, drainage, bleeding, marked dizziness, facial weakness, or other acute symptoms."
    ],
    faqs: [
      { question: "Can I have a hearing test right after earwax removal?", answer: "Often, yes, when the canal is clear and the ear is comfortable. The clinician will decide whether testing can proceed accurately that day." },
      { question: "Can wax make a hearing aid sound weak?", answer: "Yes. Wax can block the receiver or wax guard and can also obstruct the ear canal. A device check and ear inspection can identify which issue is present." },
      { question: "Should I use drops before my appointment?", answer: "Ask the office first. Drops are not appropriate for every ear, particularly with drainage, tubes, a possible perforation, or certain surgical histories." }
    ],
    related: [
      { label: "Earwax Removal", href: "/how-we-can-help/earwax-removal" },
      { label: "Do I Need a Hearing Test or Just Earwax Removal?", href: "/hearing-test-or-earwax-removal" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Harrison office", href: "/harrison-ny" },
      { label: "Somers office", href: "/Somers-NY" }
    ],
    blogMeta: {
      frame: "Local service guide",
      byline: "From the audiology desk",
      reviewedBy,
      reviewedBySlug: "caitlin-dold",
      readTime: "4 min read",
      articleType: "Local care guide",
      pullQuote: "The ear gets looked at before anything is removed. A plugged ear is not proof that wax is what is plugging it.",
      keyTakeaways: ["Audiologists may provide earwax removal when the ear history and examination make it appropriate.", "Wax can affect hearing tests and hearing-aid performance.", "Sudden loss, severe pain, drainage, or bleeding needs prompt medical guidance."],
      patientQuestion: "Can an audiologist remove my earwax?",
      storyLead: "A plugged ear can be wax, a device problem, or a hearing change, so inspection comes before treatment.",
      sources: [
        { label: "FDA: How to Get Hearing Aids", href: "https://www.fda.gov/medical-devices/hearing-aids/how-get-hearing-aids" },
        { label: "ASHA: 2027 Audiology Certification Standards", href: "https://www.asha.org/certification/2027-audiology-certification-standards/" }
      ]
    }
  },
  {
    path: "/can-audiologist-program-hearing-aids-bought-elsewhere",
    title: "Can an Audiologist Program Hearing Aids Bought Somewhere Else?",
    metaTitle: "Program Hearing Aids Bought Elsewhere? | Westchester",
    metaDescription: "Hearing aids bought online, at Costco or from another clinic can sometimes be reprogrammed. It depends on the model, the lock status and the software.",
    h1: "Can an Audiologist Program Hearing Aids Bought Somewhere Else?",
    heroImage: { src: "/assets/blog-hearing-aid-fit.png", alt: "Adult receiving a professional hearing aid fit and programming adjustment" },
    sections: ["Hearing Aid Support", "Bottom-Funnel Guide", "Buyer decision", "Frequently asked questions"],
    body: [
      "Sometimes. Whether another clinic can program your hearing aids depends on the brand, model, age, condition, software access, device lock status, and whether the clinic supports that manufacturer. A quick phone description can help, but the final answer may require an in-person device inspection.",
      "Audiology Associates of Westchester offers an Adoption Plan for appropriate devices purchased elsewhere. The goal is not merely to turn the volume up; it is to determine whether the technology can be safely and effectively matched to your current hearing and communication needs.",
      "Why the brand and model matter",
      "Prescription hearing aids usually require manufacturer-specific fitting software and compatible programming equipment. Some models are widely serviceable, while others may be proprietary, locked to a retailer, obsolete, damaged, or unsupported. Bring the exact model information, serial numbers, charger, accessories, and any prior hearing-test or fitting records so the clinic can assess what is possible.",
      "What a useful adoption visit includes",
      "A strong visit starts with hearing and ear-health context, not software alone. The audiologist may review an updated audiogram, inspect the devices, check physical and electroacoustic function, connect them to fitting software, assess comfort, and discuss the situations where they are failing. Cleaning, receiver or dome changes, firmware, pairing, and repair needs may be addressed before programming.",
      "Why an old hearing test may not be enough",
      "Programming should reflect current hearing thresholds, speech understanding, listening goals, and sound tolerance. If your test is outdated or symptoms have changed, new diagnostic information may be needed. Sudden, asymmetric, painful, draining, or dizzy symptoms should be evaluated rather than handled as a routine programming complaint.",
      "Real-ear verification is the quality check",
      "A hearing aid can look correct on a computer screen and still deliver too little or too much sound in an individual ear. Real-ear measurement uses a small probe microphone to measure the device's output in the ear and compare it with evidence-based targets. ASHA describes this as the gold standard for hearing-aid fitting verification.",
      "When keeping the devices makes sense",
      "Reusing existing devices may be reasonable when they are appropriate for the hearing loss, in good condition, supported by current software, comfortable, and capable of meeting communication goals. It may be less practical when repair costs are high, parts are unavailable, batteries are failing, the technology cannot provide needed power or features, or the devices are locked to another provider.",
      "Questions to ask before scheduling",
      "Ask whether the clinic supports your exact brand, whether a current hearing test is required, what the evaluation and programming fees include, whether real-ear verification is available, and how follow-up adjustments are handled. Clear expectations prevent a programming appointment from becoming an unexpected device-replacement conversation.",
      "Bottom line",
      "Hearing aids purchased elsewhere can sometimes be adopted into professional care, but compatibility is only the first hurdle. The better question is whether those devices can be verified, adjusted, maintained, and supported well enough to improve the listening situations that matter to you."
    ],
    faqs: [
      { question: "Can you program Costco hearing aids?", answer: "It depends on the exact brand and model, whether it is locked or proprietary, and whether compatible software and support are available. Call with the model and serial information." },
      { question: "Do I need a new hearing test first?", answer: "You may if the prior test is outdated, incomplete, unavailable, or your hearing and symptoms have changed." },
      { question: "What should I bring?", answer: "Bring both devices, charger or batteries, accessories, phone and app access, prior audiograms, purchase records, and notes about the situations that are not working." }
    ],
    related: [
      { label: "Adoption Plan", href: "/how-we-can-help/adoption-plan" },
      { label: "Why Real-Ear Verification Matters", href: "/why-real-ear-verification-matters" },
      { label: "Hearing Aid Tune-Ups", href: "/how-we-can-help/hearing-aid-tune-ups" },
      { label: "Hearing Aid Repair", href: "/hearing-aid-repair" },
      { label: "Costco Hearing Aids vs Audiologist Care", href: "/costco-hearing-aids-vs-audiologist-care" }
    ],
    blogMeta: {
      frame: "Buyer decision guide",
      byline: "A practical device-support guide",
      reviewedBy,
      reviewedBySlug: "jennifer-ratner",
      readTime: "4 min read",
      articleType: "Bottom-funnel guide",
      pullQuote: "Bring the model number and the serial number. Whether anyone can program the devices is decided by those two lines, not by the brand on the box.",
      keyTakeaways: ["Compatibility depends on the exact device and whether the clinic supports it.", "Current testing and real-ear verification may be needed.", "Bring the devices, accessories, app access, and prior records."],
      patientQuestion: "Will an audiologist work with hearing aids I bought somewhere else?",
      storyLead: "The answer starts with the model number but ends with whether the devices can meet your needs.",
      sources: [
        { label: "FDA: How to Get Hearing Aids", href: "https://www.fda.gov/medical-devices/hearing-aids/how-get-hearing-aids" },
        { label: "ASHA: Hearing Aids for Adults and Real-Ear Measures", href: "https://www.asha.org/practice-portal/professional-issues/hearing-aids-for-adults/" }
      ]
    }
  },
  {
    path: "/hearing-aid-tune-up-vs-repair",
    title: "Hearing Aid Tune-Up vs Repair",
    metaTitle: "Hearing Aid Tune-Up vs Repair | Westchester",
    metaDescription: "A tune-up covers cleaning, parts, comfort and programming. A repair is for damage, no output, or a device that will not charge. Here is how to tell.",
    h1: "Hearing Aid Tune-Up vs Repair: Which Appointment Do You Need?",
    heroImage: { src: "/assets/blog-hearing-aid-fit.png", alt: "Hearing aids being inspected for cleaning, adjustment, or repair" },
    sections: ["Hearing Aid Care", "Decision Guide", "Troubleshooting", "Frequently asked questions"],
    body: [
      "Choose a tune-up when the devices basically work but need cleaning, routine parts, comfort changes, pairing help, or programming refinement. Choose a repair evaluation when a device is dead, physically damaged, intermittent, exposed to moisture, unable to charge, or still malfunctioning after basic cleaning.",
      "The boundary is not always obvious. Audiology Associates of Westchester can inspect the devices, check the ears, and determine whether the likely solution is maintenance, adjustment, in-office repair, or manufacturer service.",
      "Signs a tune-up may be enough",
      "A tune-up is a sensible starting point when sound has gradually become weak, a dome or wax guard is due for replacement, the fit feels loose, feedback appears in certain positions, the app will not reconnect, or a listening program no longer matches daily routines. Routine cleaning and preventive maintenance can also catch moisture, debris, and worn parts before they become larger failures.",
      "Signs the device may need repair",
      "Repair becomes more likely with cracks, a broken receiver wire, corrosion, repeated shutdowns, a charger that recognizes only one device, battery drain that changes suddenly, distortion, no output after fresh batteries or cleaning, or damage from water, pets, or impact. Some simple problems can be handled in the office; others require manufacturer tools, parts, or warranty service.",
      "Do not overlook the ear",
      "A hearing aid can test normally while the wearer still hears poorly. Earwax, an ear-health problem, or a genuine hearing change can mimic a device failure. Bring both devices even if only one seems affected, and describe whether the problem follows the device, follows one ear, began suddenly, or changes after cleaning and charging.",
      "What to try safely before the visit",
      "Confirm the devices are powered on, fully charged or using fresh batteries, seated correctly in the charger, and free of visible debris. Replace user-serviceable wax guards or domes only as instructed for your model. Do not use water, alcohol, a hair dryer, compressed air, or sharp objects on the devices; the FDA warns that moisture, solvents, and heat can damage hearing-aid electronics.",
      "What to bring to the appointment",
      "Bring both hearing aids, the charger and cable, spare batteries, domes, filters, remote microphones, phone, app login, and any warranty information. Write down when the problem happens and in which environments. Intermittent issues are much easier to diagnose when the clinician knows whether they occur during calls, after exercise, outdoors, or late in the battery cycle.",
      "Planning for manufacturer service",
      "If a device must leave the office, ask about estimated timing, warranty status, repair cost, data or programming preservation, and temporary hearing options. The practice notes that loaner devices may be available when a hearing aid needs manufacturer repair, although availability and suitability should be confirmed for the individual situation.",
      "Bottom line",
      "You do not need to diagnose the device before calling. Describe the symptom, model, age, visible damage, charging behavior, and any sudden change in hearing. The office can then guide you toward a tune-up, repair visit, hearing evaluation, or medical referral."
    ],
    faqs: [
      { question: "Can most hearing aid repairs be done in the office?", answer: "Many cleaning, part, and simple function issues can be handled in the office, while severe damage or internal failures may require manufacturer service." },
      { question: "Should I bring the charger?", answer: "Yes. Charging problems can involve the devices, contacts, cable, power adapter, or charger itself." },
      { question: "What if the hearing aid works but still sounds wrong?", answer: "It may need cleaning, an ear check, updated testing, verification, or programming rather than hardware repair." }
    ],
    related: [
      { label: "Hearing Aid Tune-Ups", href: "/how-we-can-help/hearing-aid-tune-ups" },
      { label: "Hearing Aid Repair", href: "/hearing-aid-repair" },
      { label: "Hearing Aid Sounds Weak", href: "/hearing-aid-sounds-weak" },
      { label: "Hearing Aid Not Charging", href: "/hearing-aid-not-charging" },
      { label: "Why Hearing Aids Whistle", href: "/why-hearing-aids-whistle" }
    ],
    blogMeta: {
      frame: "Troubleshooting guide",
      byline: "From the hearing-aid support desk",
      reviewedBy,
      reviewedBySlug: "jenna-elias",
      readTime: "4 min read",
      articleType: "Decision guide",
      pullQuote: "Bring both hearing aids even when only one is misbehaving. Half the diagnosis is whether the fault follows the device or follows the ear.",
      keyTakeaways: ["Tune-ups cover cleaning, routine parts, pairing, comfort, and programming refinement.", "Physical damage, no output, corrosion, or repeated shutdowns suggest repair.", "Bring both devices, the charger, accessories, and notes about when the failure occurs."],
      patientQuestion: "Do my hearing aids need a tune-up or a repair?",
      storyLead: "A weak device is not always broken, and a working device is not always fit correctly.",
      sources: [
        { label: "FDA: Hearing Aid Care and Purchasing Guidance", href: "https://www.fda.gov/medical-devices/hearing-aids/how-get-hearing-aids" },
        { label: "Audiology Associates: Hearing Aid Repair", href: "https://www.audiologyassociates.org/hearing-aid-repair" }
      ]
    }
  },
  {
    path: "/when-hearing-aids-no-longer-enough-cochlear-implant",
    title: "When Are Hearing Aids No Longer Enough?",
    metaTitle: "When Hearing Aids Aren't Enough | Westchester",
    metaDescription: "When well-fitted hearing aids give volume but not words, aided speech testing is the next step. Here is what a cochlear implant evaluation involves.",
    h1: "When Are Hearing Aids No Longer Enough? Cochlear Implant Evaluation Signs",
    heroImage: { src: "/assets/blog-conversation.png", alt: "Adults discussing speech understanding and advanced hearing care options" },
    sections: ["Cochlear Implant Support", "Candidate Guide", "Audiologist perspective", "Frequently asked questions"],
    body: [
      "Hearing aids may no longer be enough when appropriately fitted devices make sound louder but speech remains too unclear for important conversations. A cochlear implant evaluation does not commit someone to surgery; it measures whether another hearing pathway deserves consideration.",
      "Audiology Associates of Westchester can help patients recognize referral signs, review current hearing-aid performance, and coordinate next steps with a cochlear implant center when appropriate.",
      "Loudness and clarity are different",
      "Hearing aids amplify acoustic sound so the ear can use more of it. Cochlear implants work differently: they bypass damaged parts of the inner ear and directly stimulate the auditory nerve. Someone may hear that a person is speaking yet miss most of the words, especially without visual cues. That gap between audibility and understanding is one reason speech testing matters.",
      "Everyday signs worth discussing",
      "Possible signs include heavy dependence on lip reading, inability to follow conversation even in quiet, poor telephone understanding, turning hearing aids up without gaining clarity, withdrawing from group communication, or relying on captions for nearly everything. These experiences do not prove candidacy, but they justify checking whether the current devices are optimized and whether a formal implant evaluation is appropriate.",
      "First verify the hearing aids",
      "Before concluding that hearing aids have reached their limit, the clinician should consider device condition, current audiograms, aided speech testing, programming, fit, power, and real-ear verification. A poorly fit or underpowered hearing aid can look like treatment failure. Conversely, well-verified devices with persistently poor speech understanding provide useful evidence for the referral conversation.",
      "What a cochlear implant evaluation considers",
      "A specialized team evaluates hearing history, medical factors, unaided and aided hearing, speech understanding, communication goals, expectations, support, and willingness to participate in follow-up rehabilitation. Candidacy criteria vary by device indication, age, insurance policy, and individual findings. The implant center—not a blog post—determines whether someone qualifies.",
      "What an implant can and cannot do",
      "A cochlear implant does not restore normal hearing, and sound is different from natural acoustic hearing. Many recipients gain meaningful access to speech and environmental sound, but outcomes vary and learning takes time. The process involves surgery, device activation, mapping, practice, and ongoing audiologic care, so informed expectations are as important as the test results.",
      "Why earlier discussion can help",
      "Patients sometimes wait because they assume implants are only for people with no hearing at all. Modern candidacy is broader than that stereotype, and some people use a hearing aid in one ear and an implant in the other. Asking for an evaluation earlier preserves time for education and testing even if the result is to continue with hearing aids for now.",
      "Bottom line",
      "If well-fit hearing aids provide volume but not enough speech understanding, ask for aided testing and a candidacy discussion. The next step may be better programming, assistive technology, communication strategies, or referral to a cochlear implant team."
    ],
    faqs: [
      { question: "Does a cochlear implant evaluation mean I need surgery?", answer: "No. It is an assessment and education process. You can review the findings and options before making any decision." },
      { question: "Can I still have useful hearing and qualify?", answer: "Possibly. Modern candidacy can include people with residual hearing, but eligibility depends on formal aided testing, medical review, device indications, and insurance criteria." },
      { question: "Can one ear use a hearing aid and the other an implant?", answer: "Yes, some people use bimodal hearing, but the appropriate setup is determined by the implant and audiology teams." }
    ],
    related: [
      { label: "Cochlear Implant Support", href: "/how-we-can-help/cochlear-implants" },
      { label: "Comprehensive Hearing Assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "Why Real-Ear Verification Matters", href: "/why-real-ear-verification-matters" },
      { label: "Why Can I Hear but Not Understand Words?", href: "/hear-people-talking-not-understand-words" }
    ],
    blogMeta: {
      frame: "Audiologist perspective",
      byline: "A patient-centered candidacy guide",
      reviewedBy,
      reviewedBySlug: "caitlin-dold",
      readTime: "4 min read",
      articleType: "Candidate guide",
      pullQuote: "An evaluation is a set of measurements, not a commitment to surgery. People go through it and carry on with hearing aids.",
      keyTakeaways: ["Poor speech understanding with well-fit hearing aids may justify an implant evaluation.", "Verification and aided testing should come before declaring hearing aids unsuccessful.", "An evaluation provides information and does not commit anyone to surgery."],
      patientQuestion: "How do I know when hearing aids are no longer enough?",
      storyLead: "The turning point is often clarity, not loudness.",
      sources: [
        { label: "NIDCD: Cochlear Implants", href: "https://www.nidcd.nih.gov/health/cochlear-implants" },
        { label: "NIDCD: Age-Related Hearing Loss", href: "https://www.nidcd.nih.gov/health/age-related-hearing-loss" }
      ]
    }
  },
  {
    path: "/hearing-test-and-cognitive-screening",
    title: "Hearing Tests and Cognitive Screening",
    metaTitle: "Hearing Tests & Cognitive Screening | Westchester",
    metaDescription: "Hearing tests and cognitive screening measure different things. Here is what each one can show, and what the ACHIEVE trial actually reported.",
    h1: "Hearing Tests and Cognitive Screening: Why Both May Be Discussed",
    heroImage: { src: "/assets/blog-conversation.png", alt: "Older adult discussing hearing, communication, and cognitive wellness with a clinician" },
    sections: ["Healthy Aging", "Screening Guide", "Evidence update", "Frequently asked questions"],
    body: [
      "Hearing testing and cognitive screening answer different questions. A hearing evaluation measures auditory function and speech understanding; a cognitive screening is a brief check that may identify whether more comprehensive medical assessment should be considered. Neither test, by itself, diagnoses dementia.",
      "Audiology Associates of Westchester offers Cognivue cognitive screening as one part of a broader conversation about hearing, communication, and healthy aging. Results should be interpreted within the appropriate clinical scope and shared with medical providers when follow-up is indicated.",
      "Why hearing can affect a screening experience",
      "If a person cannot clearly hear spoken instructions or test items, performance may reflect reduced access to information rather than cognitive ability alone. That is why hearing status, test format, and communication accommodations matter. A clinician should know when hearing difficulty might confound a result and avoid presenting a screening score as a standalone diagnosis.",
      "What the evidence actually says",
      "Hearing loss is associated with cognitive decline, but association is not proof that one condition directly causes the other. In the ACHIEVE randomized trial, a hearing intervention did not change three-year cognitive decline across the entire study population, but it did slow decline in a prespecified group of older adults at higher risk. That nuanced result is more useful than claiming hearing aids prevent dementia.",
      "What hearing care may improve",
      "Appropriate hearing care can improve access to conversation, reduce listening effort in some settings, support social participation, and make it easier to communicate with family and health professionals. Those are meaningful goals regardless of any cognitive outcome. Hearing aids should be recommended for documented hearing and communication needs, not sold as a guaranteed brain-health treatment.",
      "What a cognitive screening can do",
      "A screening can provide a baseline, flag a pattern that deserves discussion, and support a referral to primary care, neurology, geriatrics, or another qualified professional. It cannot determine a cause, replace a full diagnostic workup, or predict an individual's future. Sleep, mood, medications, vision, language, education, illness, and hearing can all affect performance.",
      "When families often raise the question",
      "Families may notice repeated questions, missed instructions, withdrawal, or confusion in group conversation. Some of those moments can arise from hearing loss, cognition, stress, or several factors together. Rather than guessing, document specific examples and pursue both hearing and medical guidance when the pattern is persistent or concerning.",
      "How to prepare for the visit",
      "Bring hearing aids, prior audiograms, a medication list, relevant medical history, and examples of recent communication changes. Ask how the screening is administered, how hearing access is handled, what the score means, who receives the result, and which findings would prompt medical referral. If there is sudden confusion or another acute neurological change, seek urgent medical care.",
      "Bottom line",
      "Hearing and cognition belong in the same healthy-aging conversation, but they should not be collapsed into one claim. Test hearing accurately, use cognitive screening as a screening tool, and coordinate medical follow-up when the findings or family observations warrant it."
    ],
    faqs: [
      { question: "Does hearing loss mean I will develop dementia?", answer: "No. Hearing loss is associated with cognitive decline at a population level, but it does not determine an individual's future." },
      { question: "Can hearing aids prevent dementia?", answer: "Evidence does not support a blanket guarantee. Hearing intervention may help some higher-risk older adults, and it can improve communication and participation for appropriate candidates." },
      { question: "Is cognitive screening a diagnosis?", answer: "No. It is a brief screening that may indicate whether further evaluation by a qualified medical professional is appropriate." }
    ],
    related: [
      { label: "Cognivue Cognitive Screening", href: "/how-we-can-help/cognivue-cognitive-screening" },
      { label: "Comprehensive Hearing Assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "Hearing Loss and Listening Fatigue", href: "/hearing-loss-cognitive-effort-listening-fatigue" },
      { label: "Is Hearing Loss Normal With Age?", href: "/is-hearing-loss-normal-with-age" }
    ],
    blogMeta: {
      frame: "Myth and evidence guide",
      byline: "An evidence-informed healthy aging guide",
      reviewedBy,
      reviewedBySlug: "caitlin-dold",
      readTime: "4 min read",
      articleType: "Evidence update",
      pullQuote: "In the ACHIEVE trial, hearing treatment did not slow three-year cognitive decline across the whole study population. It slowed it in the higher-risk group.",
      keyTakeaways: ["Hearing tests and cognitive screens measure different things.", "A cognitive screen is not a dementia diagnosis.", "The ACHIEVE results were promising for a higher-risk subgroup, not a universal guarantee."],
      patientQuestion: "Why would an audiology practice discuss cognitive screening?",
      storyLead: "Hearing access can shape communication, but cognitive questions still require their own careful pathway.",
      sources: [
        { label: "National Institute on Aging: Hearing Aids and Cognitive Decline", href: "https://www.nia.nih.gov/news/hearing-aids-slow-cognitive-decline-people-high-risk" },
        { label: "The Lancet/PMC: ACHIEVE Randomized Trial", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10529382/" }
      ]
    }
  },
  {
    path: "/how-to-choose-tinnitus-specialist-westchester",
    title: "How to Choose a Tinnitus Specialist in Westchester",
    metaTitle: "Tinnitus Specialist in Westchester: What to Look For",
    metaDescription: "What to ask a tinnitus provider before booking: how they evaluate, which symptoms they refer on, what the options are, and how progress gets measured.",
    h1: "How to Choose a Tinnitus Specialist in Westchester County",
    heroImage: { src: "/assets/blog-hearing-care-options.png", alt: "Patient comparing evidence-informed tinnitus care options in Westchester County" },
    sections: ["Tinnitus Care", "Westchester Guide", "Local decision guide", "Frequently asked questions"],
    body: [
      "Look for tinnitus care that begins with evaluation, explains red flags, measures hearing, sets realistic goals, and offers more than a single product. The right provider should be able to tell you what they can address, when medical referral is needed, and how progress will be measured.",
      "Audiology Associates of Westchester provides tinnitus services in collaboration with specialized care resources and offers evaluation, counseling, hearing-related options, and Lenire discussions for appropriate candidates. The best plan still depends on the individual's tinnitus pattern and health history.",
      "Start with the evaluation process",
      "A thoughtful intake asks when the tinnitus began, whether it is in one ear or both, whether it pulses with the heartbeat, how it affects sleep and concentration, and whether there is hearing loss, dizziness, pain, pressure, drainage, medication change, or noise exposure. Hearing testing helps identify patterns that may influence treatment or referral.",
      "Ask how red flags are handled",
      "Sudden hearing loss, pulsatile tinnitus, new one-sided symptoms, severe dizziness, neurological symptoms, significant pain, drainage, or symptoms after injury may require prompt medical assessment. A tinnitus provider should not treat every case as routine or imply that a device replaces appropriate ENT, primary-care, emergency, or specialty evaluation.",
      "Compare the actual treatment menu",
      "Evidence-informed tinnitus care may include education, hearing aids when hearing loss is present, sound enrichment, sleep strategies, counseling, and behavioral health collaboration. Some patients may discuss tinnitus retraining concepts, cognitive behavioral therapy, or bimodal neuromodulation such as Lenire. No single option is right for everyone, and no responsible provider should promise a universal cure.",
      "Clarify Lenire candidacy",
      "Lenire is not simply an online purchase; it is a prescribed pathway that requires evaluation and clinician guidance. Ask who assesses candidacy, what the treatment schedule involves, what outcomes are realistic, what follow-up is included, and what happens if another medical or hearing issue is identified first.",
      "Look for measurable goals",
      "Useful goals might include less sleep disruption, lower distress, improved concentration, more confidence in quiet rooms, or reduced day-to-day intrusiveness. Ask which validated questionnaires or progress measures are used and when the plan is reviewed. A change in quality of life may matter even when the perceived loudness does not disappear.",
      "Consider local follow-up, not just the first visit",
      "Tinnitus care often works best as a process rather than a one-time transaction. For patients in Harrison, White Plains, Scarsdale, Somers, Rye, Greenwich, and surrounding communities, practical access to follow-up can matter for counseling, device adjustments, hearing-aid verification, and coordination with medical providers.",
      "Questions to ask before booking",
      "Ask about the provider's tinnitus training, what the first appointment includes, whether hearing testing is performed, which red flags trigger referral, the range of management options, total fees, insurance documentation, follow-up schedule, and how outcomes are tracked. Bring prior tests, imaging or ENT notes, medication changes, and a short symptom timeline.",
      "Bottom line",
      "Choose a tinnitus specialist for the quality of the assessment and care pathway, not for the boldest promise. The strongest plan is individualized, medically alert, evidence-informed, and honest about what improvement can mean."
    ],
    faqs: [
      { question: "Should I see an audiologist or ENT for tinnitus?", answer: "Audiologists evaluate hearing and tinnitus impact; ENTs assess medical and surgical contributors. The right starting point depends on symptoms, and coordinated care is often useful." },
      { question: "Is there a cure for tinnitus?", answer: "There is no universal cure, but several approaches can reduce impact and improve sleep, concentration, communication, or distress." },
      { question: "Is Lenire right for everyone?", answer: "No. It is one option for selected patients after evaluation, and candidacy, expectations, cost, and follow-up should be discussed with a trained clinician." }
    ],
    related: [
      { label: "Tinnitus Management", href: "/how-we-can-help/tinnitus-management" },
      { label: "Lenire for Tinnitus", href: "/how-we-can-help/lenire-for-tinnitus" },
      { label: "Tinnitus Treatment and Relief Options", href: "/how-we-can-help/tinnitus-management/treatment-and-relief-options" },
      { label: "Sudden or Worsening Tinnitus", href: "/how-we-can-help/tinnitus-management/sudden-or-worsening-tinnitus" },
      { label: "Harrison office", href: "/harrison-ny" }
    ],
    blogMeta: {
      frame: "Local decision guide",
      byline: "A Westchester tinnitus care guide",
      reviewedBy,
      reviewedBySlug: "jennifer-ratner",
      readTime: "4 min read",
      articleType: "Local decision guide",
      pullQuote: "Ask which symptoms would make them send you elsewhere. A provider who treats every case as routine is the one to walk away from.",
      keyTakeaways: ["Choose evaluation depth over cure claims.", "Confirm how the provider handles sudden, one-sided, pulsatile, or neurological symptoms.", "Ask about the complete plan, not only one device or treatment."],
      patientQuestion: "How do I compare tinnitus specialists near me?",
      storyLead: "The most important difference is often the process behind the treatment menu.",
      sources: [
        { label: "NIDCD: Tinnitus—Causes, Diagnosis, and Treatment", href: "https://www.nidcd.nih.gov/health/tinnitus" },
        { label: "Audiology Associates: Tinnitus Therapy", href: "https://www.audiologyassociates.org/tinnitus-therapy" }
      ]
    }
  },
  {
    path: "/hearing-aid-glasses-2026",
    title: "Hearing Aid Glasses in 2026",
    metaTitle: "Hearing Aid Glasses in 2026: Patient Guide",
    metaDescription: "Hearing aid glasses are cleared over the counter for adults with perceived mild to moderate loss. Here is what they do, and what they do not replace.",
    h1: "Hearing Aid Glasses in 2026: What Patients Should Know",
    heroImage: { src: "/assets/blog-hearing-care-options.png", alt: "Adult comparing newer over-the-counter hearing technology with prescription hearing care" },
    sections: ["Hearing Technology", "2026 Update", "News explained", "Frequently asked questions"],
    body: [
      "Hearing aid glasses combine eyewear with microphones, speakers, and user-adjusted amplification. In the United States, Nuance Audio Hearing Aid Software received FDA clearance for over-the-counter use with compatible wearable products and is intended for adults 18 and older with perceived mild to moderate hearing impairment.",
      "The form factor is interesting because it places hearing support in something many people already wear. It also has the same essential limitation as other OTC pathways: convenience does not reveal the type, degree, symmetry, or medical significance of a person's hearing loss.",
      "How the concept works",
      "Microphones in the frames pick up surrounding sound, software processes it, and open-ear speakers direct amplified sound toward the ears. Because the ear canal remains open, some users may prefer the physical feel. The tradeoff is that open delivery, microphone position, glasses fit, prescription-lens needs, wind, and noisy environments can all affect the real-world experience.",
      "Who OTC hearing products are designed for",
      "FDA OTC hearing aids are for adults with perceived mild to moderate hearing loss. They are not intended for children, and self-fitting should not replace medical evaluation when warning signs are present. People with severe difficulty, sudden change, one-sided loss, pain, drainage, marked dizziness, or pulsatile tinnitus should seek professional guidance rather than assuming a consumer device is the right first step.",
      "What the glasses may do well",
      "Potential advantages include discretion, an open ear canal, simple daily use for someone who already wears glasses, and situational support in quieter face-to-face settings. They may appeal to an adult who recognizes mild difficulty but is not ready for conventional hearing aids. Actual benefit still varies by hearing pattern, listening environment, frame fit, and expectations.",
      "What they may not replace",
      "A comprehensive evaluation can identify wax, middle-ear issues, asymmetric or more severe loss, and poor speech understanding. Prescription hearing care also offers ear-specific programming, multiple device styles, verified output, ongoing adjustments, repair support, tinnitus integration, and stronger options for complex listening needs. Glasses and hearing aids should be compared as care pathways, not just gadgets.",
      "Questions to ask before buying",
      "Confirm the exact OTC labeling, return period, warranty, compatible phones, battery life, prescription-lens process, water resistance, app requirements, repair procedure, and whether both hearing and vision components remain usable if one part needs service. Ask how settings are individualized and what happens if the product does not improve speech clarity.",
      "Why baseline testing still has value",
      "Adults can legally purchase an OTC hearing aid without an audiogram, but baseline testing provides information that a product questionnaire cannot: ear-specific thresholds, speech understanding, asymmetry, and possible referral needs. It also creates a reference point if hearing changes later and makes it easier to compare aided and unaided performance.",
      "Bottom line",
      "Hearing aid glasses expand the menu of OTC hearing options, especially for adults drawn to an open-ear and discreet design. Treat them as one tool for a defined user group—not as proof that all hearing difficulty can be safely self-diagnosed or solved by a single form factor. EssilorLuxottica announced a second-generation Nuance Audio model in September 2026, and we compare it with Meta's hearing feature in [Nuance Audio Plus vs. Meta glasses](/nuance-audio-plus-vs-meta-glasses)."
    ],
    faqs: [
      { question: "Are hearing aid glasses FDA cleared?", answer: "Nuance Audio Hearing Aid Software received FDA 510(k) clearance for OTC use with compatible wearable products. Always verify the labeling of the exact product being considered." },
      { question: "Do I need a hearing test first?", answer: "Adults can buy OTC hearing aids without one, but testing can identify the type and amount of loss, asymmetry, speech understanding, and referral needs." },
      { question: "Can hearing aid glasses help severe hearing loss?", answer: "OTC devices are intended for perceived mild to moderate loss. More severe or complex difficulty should be evaluated by a hearing professional." }
    ],
    related: [
      { label: "Are OTC Hearing Aids Right for Me?", href: "/are-otc-hearing-aids-right-for-me" },
      { label: "OTC vs Prescription Hearing Aids", href: "/otc-vs-prescription-hearing-aids-real-world" },
      { label: "Nuance Audio Plus vs. Meta Glasses", href: "/nuance-audio-plus-vs-meta-glasses" },
      { label: "Comprehensive Hearing Assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "Advanced Hearing Aid Technology", href: "/how-we-can-help/advanced-hearing-aid-technology" }
    ],
    blogMeta: {
      frame: "Myth and evidence guide",
      byline: "A hearing technology update",
      reviewedBy,
      reviewedBySlug: "kira-savin",
      readTime: "4 min read",
      articleType: "2026 technology update",
      pullQuote: "The frames leave the ear canal open, which many people prefer. Wind, frame fit and a noisy room all get a say in whether that works.",
      keyTakeaways: ["OTC hearing aid glasses are intended for adults with perceived mild to moderate loss.", "Open-ear design may be comfortable but has real-world tradeoffs.", "Baseline testing remains valuable for clarity, asymmetry, and safety."],
      patientQuestion: "Can glasses really work as hearing aids?",
      storyLead: "The technology is real; the important question is who it fits and what care it replaces—or does not replace.",
      sources: [
        { label: "FDA 510(k): Nuance Audio Hearing Aid Software", href: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K243150" },
        { label: "FDA: OTC Hearing Aids—What You Should Know", href: "https://www.fda.gov/medical-devices/hearing-aids/otc-hearing-aids-what-you-should-know" }
      ]
    }
  },
  {
    path: "/auracast-hearing-aids-explained",
    title: "Auracast and Hearing Aids Explained",
    metaTitle: "Auracast Hearing Aids: What Patients Should Know",
    metaDescription: "Auracast broadcasts one audio stream to many listeners, some hearing aids included. Both ends have to support it. Here is what to check before buying.",
    h1: "Auracast and Hearing Aids: What It Could Change for TVs and Public Spaces",
    heroImage: { src: "/assets/blog-headphones.png", alt: "Adult using connected audio technology at home with accessible listening support" },
    sections: ["Connected Hearing", "Technology Guide", "News explained", "Frequently asked questions"],
    body: [
      "Auracast is a Bluetooth broadcast-audio capability designed to let one transmitter send sound to many compatible receivers, including some hearing aids, earbuds, and headphones. Instead of pairing to one device in the familiar way, a listener may be able to select an available broadcast much like choosing a Wi-Fi network.",
      "For people with hearing loss, the most promising use is direct access to sound from televisions, public-address systems, theaters, worship spaces, meeting rooms, airports, museums, and other venues—when both the venue and the listener's equipment support the required technology.",
      "Why broadcast audio is different",
      "Traditional Bluetooth connections are usually personal and one-to-one. Auracast is designed for one-to-many sharing. A television could send the same program to multiple listeners, or a venue could transmit its sound system directly to compatible personal devices. That may reduce the effect of distance and room acoustics, two major reasons speech becomes difficult in public spaces.",
      "What you need for it to work",
      "The transmitter must offer an Auracast broadcast, the receiving hearing aids or other devices must support it, and the listener needs a way to discover and join the broadcast. That joining function may live in a phone, hearing-aid app, remote control, or another assistant device. Bluetooth version numbers alone do not guarantee that every required feature is enabled.",
      "Will current hearing aids receive Auracast?",
      "Some current products support Auracast or related Bluetooth LE Audio features, while others do not. Whether an existing device can gain support through an update depends on its hardware and the manufacturer's product strategy. Confirm the exact model, firmware, phone compatibility, and enabled features rather than relying on a broad statement such as 'Bluetooth 5.2 compatible.'",
      "How this affects a hearing-aid purchase",
      "Future connectivity matters, but it should not outweigh hearing fit, speech understanding, comfort, reliability, battery needs, professional verification, and follow-up care. Ask where you realistically expect to use broadcast audio, whether your phone can serve as an assistant, and which local venues currently provide it. A promised future feature has less value than a verified current capability.",
      "Auracast does not replace hearing-aid fitting",
      "A clean audio stream can improve signal access, but the hearing aids still need to be appropriate for the hearing loss and adjusted for the individual ears. Streaming also does not solve every communication challenge; visual cues, captions, remote microphones, room acoustics, and conversation strategies remain useful parts of the toolkit.",
      "What Westchester patients can ask now",
      "When comparing Oticon, Phonak, Starkey, Signia, Widex, ReSound, or other technology, bring the devices you use most: phone, laptop, tablet, television, and workplace systems. Ask for a live demonstration of the connections you need, not only a feature list. The most useful setup is the one you can operate confidently at home and in daily routines.",
      "Bottom line",
      "Auracast has the potential to make direct, accessible audio more common in homes and public places, and compatible products are already reaching the market. Adoption will be uneven, so verify both ends of the connection and choose hearing aids primarily for hearing benefit, fit, and support."
    ],
    faqs: [
      { question: "Is Auracast the same as regular Bluetooth?", answer: "No. It is a broadcast-audio capability built on Bluetooth LE Audio specifications and is designed for one transmitter to reach many compatible receivers." },
      { question: "Can my current hearing aids get Auracast through an update?", answer: "Possibly, but only if the hardware supports the needed features and the manufacturer enables them. Check the exact model and firmware." },
      { question: "Should I delay buying hearing aids for Auracast?", answer: "Not automatically. Current hearing benefit, speech understanding, fit, support, and daily connectivity needs usually matter more than waiting for an uncertain feature timeline." }
    ],
    related: [
      { label: "Bluetooth Hearing Aids Before Buying", href: "/bluetooth-hearing-aids-before-buying" },
      { label: "Advanced Hearing Aid Technology", href: "/how-we-can-help/advanced-hearing-aid-technology" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Hearing Care for Professionals", href: "/hearing-care-professionals-meetings-calls" },
      { label: "Hearing Aid Brands", href: "/hearing-aids-brands" }
    ],
    blogMeta: {
      frame: "Buyer decision guide",
      byline: "A connected-hearing technology guide",
      reviewedBy,
      reviewedBySlug: "kira-savin",
      readTime: "4 min read",
      articleType: "Technology explainer",
      pullQuote: "Both ends of the connection have to support it. Name the venue you actually want this for, and find out what that venue broadcasts today.",
      keyTakeaways: ["Auracast is designed for one-to-many audio broadcasting.", "Both the transmitter and receiver must support the necessary features.", "Do not trade verified hearing benefit for a vague future-connectivity promise."],
      patientQuestion: "Will Auracast let my hearing aids connect directly in public places?",
      storyLead: "The potential is significant, but real-world compatibility depends on every link in the chain.",
      sources: [
        { label: "Bluetooth SIG: Auracast Overview", href: "https://www.bluetooth.com/auracast/" },
        { label: "Bluetooth SIG: Auracast FAQ", href: "https://www.bluetooth.com/auracast/faq/" },
        { label: "Bluetooth SIG: Find an Auracast Product", href: "https://www.bluetooth.com/auracast/find-a-product/" }
      ]
    }
  },
  {
    path: "/meta-glasses-hearing-aid-feature",
    title: "Meta's New Glasses Include a Hearing Aid Feature. Should You Try It?",
    metaTitle: "Meta Glasses Hearing Aid Feature | Westchester",
    metaDescription: "Meta announced an FDA-cleared hearing aid feature for its AI glasses at Meta Connect 2026. What it does, how it compares to AirPods, and when to get tested.",
    h1: "Meta's New Glasses Include a Hearing Aid Feature. Should You Try It Instead of a Hearing Aid?",
    heroImage: { src: "/assets/blog-headphones.png", alt: "Adult wearing consumer audio glasses, representing new self-fit hearing technology" },
    sections: ["Hearing Technology", "Buyer decision guide", "Audiologist perspective", "Frequently asked questions"],
    body: [
      "A patient forwarded us a headline within an hour of Meta's keynote ending: their glasses can now work as a hearing aid. The short answer is yes, in a specific, regulated sense, and the longer answer is the more useful one.",
      "Meta's \"Hearing Enhancement\" is a real, FDA-cleared over-the-counter hearing aid feature, not a gimmick and not a general medical device. It sits inside a category we already help patients navigate every week, just with a new pair of glasses attached to it.",
      "What Meta actually announced",
      "At Meta Connect on September 23, 2026, Meta said its newer Meta Glasses models will offer a software feature called Hearing Enhancement, cleared by the FDA for adults with self-assessed mild-to-moderate hearing loss. It sets up at home with no exam or prescription, adjusts each ear separately, and turns on with a voice command. Meta is launching it in the US later this year, starting on select Meta Glasses rather than the Ray-Ban Meta line, with a 30-day free trial and a $149.99 one-time cost afterward, or inclusion with a Meta One subscription. If you are also weighing glasses built only for hearing, we compare [Nuance Audio Plus and Meta's feature](/nuance-audio-plus-vs-meta-glasses) after EssilorLuxottica announced the Plus model.",
      "It's the same OTC category you may already know",
      "Nothing about the regulatory ground here is new. The FDA created the over-the-counter hearing aid category in 2022 for adults with mild-to-moderate, fairly symmetric hearing loss, and we've written before about how [OTC and prescription hearing aids differ in real-world use](/otc-vs-prescription-hearing-aids-real-world) and about [who OTC devices actually suit](/are-otc-hearing-aids-right-for-me). Meta's glasses meet that same bar. \"FDA-cleared\" is worth being precise about, too: it is a narrower claim than \"FDA-approved,\" and it means this software met the OTC category's requirements, not that the glasses were reviewed as a general medical device.",
      "Where this sits next to AirPods and other consumer options",
      "Patients have been asking us a version of this question since Apple added a hearing aid feature to AirPods Pro, and we wrote about [what AirPods can and can't do as a hearing aid](/airpods-as-hearing-aids) at the time. Meta's feature is a step further than that, in that it is built and cleared specifically as an OTC hearing aid rather than a general amplification mode, but the underlying trade-off is the same one we describe there: a self-assessed, self-fit device can be a reasonable low-cost entry point for the right listener, and it is not a substitute for a measured fitting when your hearing picture is more complicated than mild and even.",
      "When a self-fit device isn't enough",
      "OTC hearing aids, in any form factor, assume your loss is mild-to-moderate and roughly balanced between your ears. That assumption fails for a meaningful share of the patients we see. Seek prompt medical guidance rather than a self-fit device for sudden hearing loss, severe dizziness, new one-sided symptoms, drainage, significant ear pain, facial weakness, head injury, or heartbeat-like tinnitus. Outside those red flags, a self-assessment still can't tell you the shape of your loss the way an audiogram and real-ear verification can, which matters more the longer you plan to rely on the device.",
      "Our answer, plainly",
      "Try it if you want, once it's available, provided none of the warning signs above apply to you. But you do not have to guess which category you're in. A hearing evaluation gives you an actual measurement to judge any device against, glasses included, and takes well under an hour. Our team sees patients at both our Harrison and Somers offices, and we're glad to talk through your results and your options either way, with no pressure toward a purchase from us specifically."
    ],
    faqs: [
      { question: "Is Meta's hearing glasses feature a real hearing aid?", answer: "Yes, in the regulatory sense that matters. It falls under the FDA's over-the-counter hearing aid category created in 2022, the same one behind other self-fit devices, including AirPods Pro's hearing aid feature. \"FDA-cleared\" is a specific, narrower claim than \"FDA-approved,\" and it applies to adults with self-assessed mild-to-moderate hearing loss." },
      { question: "How is this different from getting hearing aids fitted here?", answer: "The main difference is measurement and follow-up. A professional fitting starts with a hearing test that maps your loss precisely, uses real-ear measurement to confirm the device is delivering the right output at each pitch, and continues with adjustments as your needs change. A self-fit device, including this one, sets up within preset ranges based on how you describe your own hearing, with no measurement checking that description." },
      { question: "Should I wait for this instead of getting a hearing test now?", answer: "There's no real reason to. A hearing evaluation takes under an hour and gives you a concrete answer regardless of what device you eventually choose, including this one once it launches. Knowing your actual results means you can judge any product against your hearing rather than a guess." },
      { question: "When should I skip OTC options entirely and come in?", answer: "Sudden hearing loss, severe dizziness, a new one-sided symptom, drainage, significant ear pain, facial weakness, a recent head injury, or heartbeat-like tinnitus are reasons to be seen rather than to try a self-fit device first, glasses or otherwise." }
    ],
    related: [
      { label: "OTC vs Prescription Hearing Aids: Real-World Differences", href: "/otc-vs-prescription-hearing-aids-real-world" },
      { label: "Are OTC Hearing Aids Right for Me?", href: "/are-otc-hearing-aids-right-for-me" },
      { label: "AirPods as Hearing Aids: What They Can and Can't Do", href: "/airpods-as-hearing-aids" },
      { label: "Nuance Audio Plus vs. Meta Glasses", href: "/nuance-audio-plus-vs-meta-glasses" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" }
    ],
    blogMeta: {
      frame: "Buyer decision guide",
      byline: "A same-day read on Meta Connect's hearing news",
      reviewedBy,
      reviewedBySlug: "caitlin-dold",
      readTime: "4 min read",
      articleType: "Buyer decision guide",
      pullQuote: "Meta's glasses meet the same 2022 OTC bar as every other self-fit hearing aid. The form factor changed. The question you still have to answer for yourself didn't.",
      keyTakeaways: [
        "Meta's Hearing Enhancement is an FDA-cleared OTC hearing aid feature, not a new device category — the same 2022 rule covers it as other self-fit devices.",
        "It suits the same listener OTC devices generally suit: adults with mild-to-moderate, fairly even hearing loss, comfortable managing a self-assessed setup.",
        "Sudden, one-sided, painful, draining, or dizzy symptoms call for an evaluation, not a self-fit device — and a hearing test beats guessing either way."
      ],
      patientQuestion: "Should I try Meta's new hearing glasses instead of a hearing aid?",
      storyLead: "A patient forwarded us the headline within an hour of the keynote ending. Here is the straight answer.",
      sources: [
        { label: "Meta: Everything We Announced at Connect 2026", href: "https://www.meta.com/blog/meta-connect-2026-everything-we-announced/" },
        { label: "FDA: Over-the-Counter Hearing Aids", href: "https://www.fda.gov/medical-devices/hearing-aids/otc-hearing-aids" }
      ]
    }
  },
  {
    path: "/nuance-audio-plus-vs-meta-glasses",
    title: "Nuance Audio Plus vs. Meta Glasses: Which Hearing Aid Glasses Fit You?",
    metaTitle: "Nuance Audio Plus vs. Meta Glasses | Westchester",
    metaDescription: "Nuance Audio Plus starts at $829 in the US. How it compares with Meta's hearing glasses feature, what open-ear glasses cannot do, and who should test first.",
    h1: "Nuance Audio Plus vs. Meta Glasses: Which Hearing Aid Glasses Are Right for You?",
    heroImage: { src: "/assets/blog-hearing-care-options.png", alt: "Adult comparing newer over-the-counter hearing technology with prescription hearing care" },
    sections: ["Hearing Technology", "Buyer decision guide", "Audiologist perspective", "Frequently asked questions"],
    body: [
      "Two pairs of glasses now claim to help you hear. One is Nuance Audio Plus, the second-generation product from EssilorLuxottica, announced last week. The other is the hearing feature Meta announced on September 23 for its own glasses. Several patients have already asked which one to pick, and whether either replaces a hearing aid.",
      "They are built differently, and those differences matter more than the gap in price. This page lays out what each one is, what open-ear glasses do well and badly, and who should have a hearing test before spending anything.",
      "What each product is",
      "Nuance Audio Plus is a hearing device built into eyewear. Directional microphones and small speakers sit in the temples, and nothing goes into the ear canal. The app offers two listening modes (Frontal and All-Around), four amplification presets and three levels of noise reduction. EssilorLuxottica rates the battery at about 10 hours and describes Plus as FDA-cleared for adults with perceived mild to moderate hearing loss. US pricing starts at $829, depending on the lenses, and it is sold through optical and hearing care professionals. The first-generation glasses stay on sale, listed by HearingTracker at $699.",
      "Meta's Hearing Enhancement is a software feature, not a separate product. As we explained in [our earlier post on Meta's announcement](/meta-glasses-hearing-aid-feature), it builds a hearing profile from a setup you do yourself, treats each ear separately, and turns on by voice command. Meta says it arrives in the US later this year on its newer Meta Glasses models, with a 30-day free trial and then $149.99 once, or included with a Meta One subscription. You buy the glasses separately, and they do other things besides amplify sound.",
      "What is new in Plus",
      "Compared with the first Nuance Audio glasses, the company lists more amplification, clearer speech in noise, a longer battery, a power switch and volume buttons on the frame, hands-free calls with iPhones on iOS 16 or later, and more frame styles and colors. The independent record on the first generation is useful here. A HearingTracker review using HearAdvisor lab tests found good speech scores, poor handling of feedback (whistling), a battery life of six to eight hours, and no streaming. Plus is aimed at the battery and calling complaints. The company also says it improves amplification, and we have not seen independent testing that shows whether the whistling is fixed. Treat those points as claims until someone measures them.",
      "The open-ear trade-off",
      "Open-ear means the speaker sits near the ear and the canal stays clear. Your own voice sounds like your own voice, and many people find that more comfortable than a sealed device. The trade is limited amplification, because the speaker can only push so much sound before it whistles, and background noise reaches your ear untouched. Reviewers also reported an echo quality in the wearer's own voice for some people, and less gain on larger heads because the speaker sits farther from the ear. Frames add practical questions of their own: nose pad fit, the weight of your prescription lenses, and losing all amplification when you take them off. We cover the wider picture in [our guide to hearing aid glasses in 2026](/hearing-aid-glasses-2026).",
      "Who these glasses tend to suit",
      "Adults who already wear glasses all day, notice missing words in restaurants or group settings, follow quiet conversation without much effort, and would rather not wear something that looks like a hearing aid. Comfort with a phone app helps. The FDA's over-the-counter category is written for adults 18 and older with perceived mild to moderate loss, and perceived is the key word. Nobody verifies your assessment, so the device works from your own description of your hearing. For the wider category, see [Are OTC hearing aids right for me?](/are-otc-hearing-aids-right-for-me) and [OTC vs prescription hearing aids](/otc-vs-prescription-hearing-aids-real-world).",
      "When to get tested first",
      "Book an evaluation before trying any self-fit device if your hearing dropped suddenly, one ear is clearly worse than the other, you have ear pain, drainage, dizziness or ringing in one ear, or you hear voices but cannot make out the words. Those are reasons to be seen, not reasons to experiment.",
      "What a hearing test tells you that a questionnaire cannot",
      "A [hearing test](/hearing-testing) measures each ear separately, shows the shape of your loss, checks how well you understand speech, and can turn up wax or a middle ear problem. That matters here because open-ear devices tend to work best for mild loss in the higher pitches, and one page of results shows whether you fall in that range. It also gives you a baseline if your hearing changes later. Plus offers four fixed presets. A [fitted hearing aid](/hearing-aid-fitting) is programmed to your results and checked with real-ear measurement. Our [comprehensive hearing assessments](/how-we-can-help/comprehensive-hearing-assessments) cover the full workup.",
      "Our view",
      "If you wear glasses all day and your hearing loss is on the milder side, hearing glasses are worth taking seriously. Get a baseline test first, ask about the return window before you pay, and keep your results. If the test shows something the glasses are not built for, you will know before you have spent $829. We see patients in Harrison and Somers and are glad to go through your results whichever route you take."
    ],
    faqs: [
      { question: "Is Nuance Audio Plus FDA-cleared?", answer: "EssilorLuxottica's announcement says it is, for adults with perceived mild to moderate hearing loss. The software in the first-generation glasses has a public FDA 510(k) record, K243150. We have not looked at the filing for Plus itself, only the company's statement, so check the labeling of the exact model before you buy." },
      { question: "How much does Nuance Audio Plus cost?", answer: "US pricing starts at $829 and depends on the lens configuration, according to the company. The first-generation glasses remain available, and HearingTracker lists them at $699." },
      { question: "Should I buy Nuance Audio Plus or wait for Meta's hearing feature?", answer: "You cannot compare them fairly yet. Meta's feature has not launched, and Meta has not said which glasses will qualify beyond a hardware minimum. Waiting is a poor reason to put off a hearing test. A test takes under an hour, and the results help with either choice." },
      { question: "Do hearing glasses replace hearing aids?", answer: "For some adults with mild loss they may cover part of the day. They use presets and an open ear, and they are not meant for more than moderate loss. Prescription aids are programmed to your results and verified, which glasses do not offer. If you struggle with conversation in a quiet room, get tested first." },
      { question: "What should I ask before buying hearing glasses?", answer: "Ask about the return window, who repairs the frames or speakers, what happens to the hearing hardware when your eyeglass prescription changes, how long the battery lasts on calls, and whether the glasses work with your phone. The company describes hands-free calling for iPhones on iOS 16 or later." }
    ],
    related: [
      { label: "Meta Glasses Hearing Aid Feature", href: "/meta-glasses-hearing-aid-feature" },
      { label: "Hearing Aid Glasses in 2026", href: "/hearing-aid-glasses-2026" },
      { label: "Are OTC Hearing Aids Right for Me?", href: "/are-otc-hearing-aids-right-for-me" },
      { label: "OTC vs Prescription Hearing Aids", href: "/otc-vs-prescription-hearing-aids-real-world" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" }
    ],
    blogMeta: {
      frame: "Buyer decision guide",
      byline: "A comparison of the two hearing glasses announced in September",
      reviewedBy,
      readTime: "5 min read",
      articleType: "Buyer decision guide",
      pullQuote: "Both pairs of glasses are self-fit and open-ear. Neither one measures your hearing first, and that step is what tells you whether either is a good idea.",
      keyTakeaways: [
        "Nuance Audio Plus is a hearing device in a frame, from $829 in the US. Meta's Hearing Enhancement is software on Meta's glasses, priced at $149.99 after a trial, and it has not launched.",
        "Open-ear glasses suit mild loss best. Amplification is limited, noise gets through, and the first generation whistled in lab testing. Plus has not been independently tested yet.",
        "A hearing test shows whether your loss fits what these products are built for, and it rules out problems that no pair of glasses will fix."
      ],
      patientQuestion: "Should I buy Nuance Audio Plus or wait for Meta's hearing feature?",
      storyLead: "Two pairs of glasses now claim to help you hear. Here is how they differ and who should get tested first.",
      sources: [
        { label: "EssilorLuxottica: Nuance Audio Plus announcement", href: "https://www.prnewswire.com/news-releases/essilorluxottica-unveils-nuance-audio-plus-the-next-generation-of-hearing-glasses-302891793.html" },
        { label: "HearingTracker: EssilorLuxottica Launches Nuance Audio Plus", href: "https://www.hearingtracker.com/news/essilorluxottica-launches-nuance-audio-plus-hearing-glasses" },
        { label: "HearingTracker: Nuance Audio Glasses, Audiologist and Lab Tested", href: "https://www.hearingtracker.com/hearing-aids/nuance-audio-glasses-audiologist-and-lab-tested" },
        { label: "FDA 510(k): Nuance Audio Hearing Aid Software", href: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K243150" },
        { label: "Meta: Everything We Announced at Connect 2026", href: "https://www.meta.com/blog/meta-connect-2026-everything-we-announced/" }
      ]
    }
  },
  {
    path: "/auracast-goes-live-in-a-us-theater",
    title: "Auracast Goes Live in a U.S. Theater: What It Means for Hearing Aid Wearers",
    metaTitle: "Auracast Live in a U.S. Theater | Westchester",
    metaDescription: "A Montana clinic paid for Auracast at Billings Studio Theatre, live since September 11, 2026. What happened, what is still unknown, and what to ask about your hearing aids.",
    h1: "Auracast Goes Live in a U.S. Theater: What It Means for Hearing Aid Wearers",
    heroImage: { src: "/assets/blog-headphones.png", alt: "Adult using connected audio technology with accessible listening support" },
    sections: ["Hearing Technology", "News explained", "Audiologist perspective", "Frequently asked questions"],
    body: [
      "Billings Studio Theatre, a community theater in Montana, now broadcasts its shows by Auracast. The system was running for the opening of Come From Away on September 11, 2026. Big Sky Audiology, a local clinic, paid for the equipment and the installation and gave it to the theater.",
      "Patients have asked us what Auracast looks like outside a product announcement. This is a good example, and it comes with limits. It is not the first U.S. installation, and one theater does not mean the venues near you are ready. This page covers what was reported, what is still unknown, and what to ask before you plan an evening around it.",
      "What was reported",
      "A transmitter was installed at the theater and connected to its soundboard. Listeners with compatible hearing aids, cochlear implants, headphones or earbuds can pick the broadcast from their device, much as you pick a Wi-Fi network. Reports say people without a compatible device can still borrow equipment at the theater. Sources differ on what the theater used before and whether it kept the older system, so we will not say either way. The clinic's founder said the clinic covered the purchase and installation, and the clinic has said it wants to work with other venues in Billings.",
      "Why the soundboard connection matters",
      "In a theater, the sound you want is the sound at the mixing desk, before the room changes it. A feed taken from the desk gives you the performance without the echo, the seat noise and the people around you. A hearing loop can do that for hearing aids with a telecoil. Auracast does it for a wider set of devices, including earbuds and headphones that a person already owns. Loops are still far more common in real venues, and a telecoil stays a useful feature for years to come.",
      "What has to line up for you",
      "Three things must work together. The venue needs a transmitter. Your hearing aids or other device must support Auracast, which generally means a recent model with Bluetooth LE Audio. And you need a way to find and join the broadcast, often through a phone app or a button on the hearing aids. Some hearing aids carry the hardware but wait for a software release before the feature works, so check what your model does today, not what it may do later. Our [Auracast explainer covers the basics.",
      "What to ask before a show",
      "Call the venue and ask whether it offers Auracast, a loop or loaner headsets, what the broadcast is called, and how to join. Ask your audiologist whether your current hearing aids support Auracast now. If you are shopping, ask the same about each model, and ask what joining a broadcast involves in daily use. Venues add features when patrons ask for them, so your call helps.",
      "Our view",
      "This is good news, and it is early. If you already own compatible hearing aids, it is worth asking about Auracast at the places you visit. If you do not, hearing aids that work well for you do not need replacing because of one installation. A hearing test and an honest talk about where you most want to hear better will do more for you than any single feature. We see patients in Harrison and Somers and are glad to go through your options, including hearing aid fitting and what your devices support."
    ],
    faqs: [
      { question: "Is this the first U.S. theater to use Auracast?", answer: "No. Other U.S. venues have tried or installed Auracast before. What stands out in Billings is that a local audiology clinic paid for the system and donated it to a community theater." },
      { question: "Do my hearing aids work with Auracast?", answer: "It depends on the model. Auracast generally needs Bluetooth LE Audio hardware, and some hearing aids also need a software update before the feature switches on. Bring your devices in and we will check what they support." },
      { question: "Do I still need a telecoil?", answer: "Often, yes. Hearing loops are still much more common in venues than Auracast. A telecoil is useful if you attend places that have not adopted the new standard." },
      { question: "How do I find out whether a venue near me has Auracast?", answer: "Call and ask. Ask whether it broadcasts by Auracast, what the broadcast is called and how listeners join. Also ask about loops and loaner headsets, since many venues offer those instead." },
      { question: "Should I wait to buy hearing aids until Auracast is everywhere?", answer: "No. Fit, sound quality and follow-up care matter more today. If Auracast matters to you, choose a model that supports it now and tell us at your appointment." }
    ],
    related: [
      { label: "Auracast and Hearing Aids Explained", href: "/auracast-hearing-aids-explained" },
      { label: "Bluetooth Hearing Aids Before Buying", href: "/bluetooth-hearing-aids-before-buying" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Hearing Aid Brands", href: "/hearing-aids-brands" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" }
    ],
    blogMeta: {
      frame: "Industry news explained",
      byline: "What a Montana theater's Auracast system means for patients",
      reviewedBy,
      readTime: "4 min read",
      articleType: "News explained",
      pullQuote: "One theater is good news. Before you plan an evening around Auracast, check the venue and check your own hearing aids.",
      keyTakeaways: [
        "Billings Studio Theatre in Montana went live with Auracast for the opening of Come From Away on September 11, 2026.",
        "Big Sky Audiology, a local clinic, paid for the equipment and installation and donated it to the theater.",
        "Auracast needs a venue transmitter, a compatible device and a way to join. Ask about all three before you count on it."
      ],
      patientQuestion: "Will my hearing aids work with Auracast at a theater?",
      storyLead: "A clinic-funded Auracast system is now running in a Montana community theater. Here is what it means for you.",
      sources: [
        { label: "KTVQ: Billings Studio Theater sees upgrades to hearing accessibility technology", href: "https://www.ktvq.com/news/billings-studio-theater-sees-upgrades-to-hearing-accessibility-technology" },
        { label: "EIN Presswire: Billings Audiology Clinic Donates Auracast System to Billings Studio Theatre", href: "https://www.einpresswire.com/article/942190393/billings-audiology-clinic-donates-auracast-system-to-billings-studio-theatre" },
        { label: "Aurahear: Auracast at Billings Studio Theatre, Big Sky Audiology gift", href: "https://aurahear.com/2026/09/audiology-clinic-donates-auracast-billings-studio-theatre" }
      ]
    }
  },
  {
    path: "/invisible-cochlear-implant-med-el-tici-unico",
    title: "The World's First Invisible Cochlear Implant: What MED-EL's TICI UNICO Means for U.S. Patients",
    metaTitle: "Invisible Cochlear Implant: MED-EL TICI UNICO Explained",
    metaDescription: "MED-EL launched TICI UNICO, a fully implantable cochlear implant, in Europe on Sept 29, 2026. How it works, who it is for, and when US patients may get it.",
    h1: "The World's First Invisible Cochlear Implant: What MED-EL's TICI UNICO Means for U.S. Patients",
    heroImage: { src: "/assets/news/invisible-cochlear-implant-med-el-tici-unico.png", alt: "Diagram comparing a conventional cochlear implant with an external processor and coil to the fully implantable TICI UNICO, which sits entirely under the skin" },
    sections: ["Cochlear Implants", "News explained", "Audiologist perspective", "Frequently asked questions"],
    body: [
      "MED-EL announced TICI UNICO on September 29, 2026 in Innsbruck, Austria. The company calls it the first commercially available, totally invisible cochlear implant. The microphone, battery and processing all sit under the skin. A wearer has no processor to put on and no coil on the scalp.",
      "Status as of September 30, 2026: TICI UNICO has a European CE Mark and is launching in European markets. It is not FDA-approved and not available in the United States. We have not seen a U.S. timeline or a price. This page covers what is confirmed, what is still unknown, and what patients in Westchester and the Hudson Valley can do today.",
      "What MED-EL announced",
      "MED-EL said the first four commercial implantations took place on launch day. A MED-EL co-founder described the device as a new category of implant. One outside expert quoted by IEEE Spectrum called it the first meaningful innovation in cochlear implants in about 30 years. Those are significant statements, and they come from the company and from early coverage. Long-term results are not yet available.",
      "How it differs from a conventional implant",
      "Today's cochlear implants have an internal part placed by a surgeon and an external sound processor that holds the microphone and battery. A coil holds the two together through the skin with a magnet. TICI UNICO removes the external part. IEEE Spectrum reports that the system weighs about 20 grams and has four connected components under the scalp. The microphone is about the width of a nickel and sits roughly 6 millimeters beneath the skin.",
      "What invisible changes in daily life",
      "MED-EL says a wearer can hear around the clock, including while asleep, showering and swimming, and while the battery charges. There is no device to lose, keep dry or remember at night. That may matter most for people who stop wearing an external processor because of hair, glasses, sport, sleep or appearance. There is still a routine. The battery charges through the scalp with a small magnetic unit called a GoPod.",
      "Battery facts reported so far",
      "IEEE Spectrum reports a battery designed for up to about 40 hours per charge, and a charge time of one to one and a half hours. The battery is not replaceable. The design goal is at least 24 hours of use per charge for at least 15 years. These are design targets. We would want to know what happens at the end of the battery's life before recommending the device to anyone.",
      "What the evidence shows",
      "MED-EL published a six-person feasibility study in 2025 that reported a good safety profile and hearing results comparable to conventional implants. The launch material refers to a larger clinical investigation of about 30 patients. Comparable results in small groups over a short time are a promising start. They do not show long-term outcomes across many patients, and they do not show how the under-skin microphone handles noisy rooms.",
      "What has not been disclosed",
      "The launch release did not give a price, MRI compatibility details or a U.S. regulatory plan. It did not say whether U.S. insurers would cover it. We will not guess at any of these. We will update this page when MED-EL or the FDA says more.",
      "Who it is for",
      "MED-EL designed TICI UNICO for severe-to-profound sensorineural hearing loss. Candidacy is a clinical decision made from formal testing, medical review and imaging. A person cannot choose it from a product page.",
      "When could U.S. patients get it?",
      "Cochlear implants are high-risk devices in the United States, and they need FDA approval before sale. TICI UNICO does not have it. No U.S. launch date has been announced. Anyone who gives you a date is guessing.",
      "What is available in the U.S. today",
      "Advanced Bionics, Cochlear and MED-EL sell cochlear implant systems in the United States. They all use an external sound processor. For the right candidate, they deliver large gains in understanding speech, especially in quiet and on the phone. Waiting for a future device carries a cost, because ears that go a long time without useful hearing tend to do less well after implantation.",
      "What we offer today",
      "Dr. Caitlin Dold does the cochlear implant work at Audiology Associates of Westchester in Harrison and Somers: candidacy testing before surgery, and activation and programming after. The surgery itself is done by an implant surgeon. We do not offer TICI UNICO, and no U.S. practice does yet. What we can do now is find out whether any cochlear implant should be on your list. That starts with aided speech testing, with hearing aids that have been checked with real-ear measurement.",
      "Should you wait for TICI UNICO?",
      "No. An evaluation does not commit you to surgery. If you qualify today, waiting years is a poor trade. If you do not qualify yet, your test results give you a baseline, and your hearing aids can be checked and improved. Either way, the results will still be useful if new devices reach the United States. Last updated September 30, 2026. This is the first version of the page.",
      "Medical information notice",
      "This page is for general information only. It is not medical advice, and it does not diagnose or recommend treatment. Whether a cochlear implant is right for you depends on testing and a conversation with your clinical team."
    ],
    faqs: [
      { question: "Is TICI UNICO available in the United States?", answer: "No. It has a CE Mark for Europe and is launching there. It does not have FDA approval, and we have not seen a U.S. launch date. We will update this page if that changes." },
      { question: "How is it different from a regular cochlear implant?", answer: "A regular implant has an external sound processor worn on the ear or head. TICI UNICO puts the microphone, battery and processing under the skin, so nothing is worn outside. The battery is charged through the scalp with a small magnetic unit." },
      { question: "Who qualifies for a cochlear implant?", answer: "Candidacy depends on how well you understand speech with well-fitted hearing aids, plus medical and imaging review. A pure-tone average of 60 dB HL or worse with speech understanding of 60% or less is a common reason to refer for a full evaluation. The implant team makes the final decision." },
      { question: "How do I know if I am a candidate?", answer: "Ask for a hearing evaluation that includes aided sentence testing. If the results point toward an implant, Dr. Dold coordinates the next steps with an implant center for imaging and a surgical assessment." },
      { question: "Should I wait for TICI UNICO or get evaluated now?", answer: "Get evaluated now. An evaluation does not commit you to surgery, and long periods without useful hearing can reduce how well an implant works later. Your test results stay useful if new devices arrive." }
    ],
    related: [
      { label: "Cochlear Implant Support", href: "/how-we-can-help/cochlear-implants" },
      { label: "When Are Hearing Aids No Longer Enough?", href: "/when-hearing-aids-no-longer-enough-cochlear-implant" },
      { label: "What Is the 60/60 Rule in Audiology?", href: "/what-is-the-60-60-rule-in-audiology" },
      { label: "Comprehensive Hearing Assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Medicare Open Enrollment and Hearing Benefits", href: "/medicare-open-enrollment-hearing-benefits" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" }
    ],
    blogMeta: {
      frame: "Industry news explained",
      byline: "What a fully implantable cochlear implant means for patients in the U.S.",
      reviewedBy,
      readTime: "6 min read",
      articleType: "News explained",
      pullQuote: "TICI UNICO is real, and it is not available in the United States. If hearing aids no longer give you clear speech, the useful step today is an evaluation.",
      keyTakeaways: [
        "MED-EL announced TICI UNICO on September 29, 2026. It is fully implantable, with no external processor, and has a CE Mark for Europe.",
        "It is not FDA-approved and not available in the United States. No U.S. timeline, price or MRI information has been announced.",
        "Candidacy for any cochlear implant starts with aided speech testing. An evaluation does not commit you to surgery, and waiting can cost hearing results."
      ],
      patientQuestion: "Should I wait for the invisible cochlear implant or get evaluated now?",
      storyLead: "MED-EL launched the first fully implantable cochlear implant in Europe. Here is what it means for patients in the U.S.",
      sources: [
        { label: "Business Wire: MED-EL launches TICI UNICO", href: "https://www.businesswire.com/news/home/20260929847077/en/MED-EL-Launches-TICI-UNICO-the-Worlds-First-and-Only-Totally-Invisible-Cochlear-Implant" },
        { label: "IEEE Spectrum: Fully implantable cochlear implant", href: "https://spectrum.ieee.org/fully-implantable-cochlear-implant" },
        { label: "Hearing Practitioner News: MED-EL launches world-first invisible cochlear implant", href: "https://hearingpractitionernews.com.au/hearing-milestone-med-el-launches-world-first-invisible-cochlear-implant-tici-unico/" },
        { label: "MED-EL: 2025 TICI feasibility study results", href: "https://www.medel.com/press-room/press-details/2025/02/06/the-future-of-cochlear-implants--promising-feasibility-study-results-for-med-el-s-totally-implantable-cochlear-implant-(tici)" }
      ]
    }
  },
  {
    path: "/samsung-galaxy-buds-hearing-aid-feature",
    title: "Samsung Galaxy Buds Are Becoming Hearing Aids: What the FDA Clearance Means",
    metaTitle: "Samsung Galaxy Buds Hearing Aid: FDA-Cleared, Coming Q4",
    metaDescription: "Samsung's Galaxy Buds 3 Pro and 4 Pro are getting an FDA-cleared hearing aid feature. An audiologist explains what it can, and cannot, do.",
    h1: "Samsung Galaxy Buds Are Becoming Hearing Aids: What the FDA Clearance Means",
    heroImage: { src: "/assets/news/samsung-galaxy-buds-hearing-aid-feature.png", alt: "Comparison of OTC earbud hearing aids and prescription hearing aids by who they suit, how they are fitted and what follow-up care is included" },
    sections: ["Hearing Technology", "News explained", "Audiologist perspective", "Frequently asked questions"],
    body: [
      "Samsung announced on August 11, 2026 that the FDA cleared a hearing aid feature and a hearing test for the Galaxy Buds3 Pro and Galaxy Buds4 Pro. Samsung says it arrives by software update in the fourth quarter of 2026 in the United States and some other approved markets.",
      "Status as of September 30, 2026: we have not seen confirmation that the update is live. Check Samsung before you plan around a date. Patients in Harrison and Somers have started asking whether this changes what they should buy. This page gives our answer.",
      "What was cleared",
      "There are two features in the Galaxy Buds app. The Hearing Test is a self-administered, five-minute test that uses pure-tone audiometry, one ear at a time, and produces an audiogram. It is registered as Software as a Medical Device. The Hearing Aid feature amplifies sound based on the result. It went through the FDA's over-the-counter pathway, the same category as OTC hearing aids sold in stores. It is for adults 18 and older with perceived mild to moderate hearing loss.",
      "How the fitting works",
      "After the test, the app groups your result as normal or one of four stages of loss. The amplification then follows NAL-NL2, a fitting formula from Australia's National Acoustic Laboratories that clinics use for prescription hearing aids. Beamforming microphones favor sound in front of you, and noise reduction works on speech. Wareable reports that the audiogram is stored in Samsung Health.",
      "What the published figures say",
      "audioXpress, citing Samsung's data, reports a maximum output of about 111.9 dB SPL, full-on gain of about 31.5 dB, a frequency range of roughly 100 to 9,000 Hz and a processing delay of about 2.7 milliseconds. In a 30-day study of 103 adults with mild to moderate loss, people who fit the feature themselves reported benefit that was not worse than people fitted by a clinician. In a separate 367-person validation, the app's test differed from clinic audiometry by a median of 3.75 dB. These are encouraging figures from Samsung's own data, reported second-hand. We have not seen independent lab testing.",
      "What you need",
      "You need Galaxy Buds3 Pro or Galaxy Buds4 Pro, a compatible Galaxy phone and the update. Samsung's own announcement says One UI 9 or later. Some outlets have reported One UI 8. Check Samsung's note for your region. Samsung also says availability varies by market, model and paired device.",
      "What it does well",
      "It gets more people to take a hearing test, and many adults wait years. It uses a clinical fitting formula, not a generic volume boost. And it lives in earbuds that people already wear. For someone with mild to moderate loss who wants help in conversation, it may be a good first step.",
      "Where OTC earbuds run out of road",
      "A five-minute test at home cannot rule out wax, a middle-ear problem or a difference between the ears that needs a doctor. The power has a ceiling. In our reading, a full-on gain near 31.5 dB suggests that people at the upper end of moderate loss may run out of power in some pitches. Earbud tips can block the canal and change how your own voice sounds. No one verifies what reaches your eardrum or adjusts the fit afterward. HearingTracker summarized recent research on earbud hearing features and found that real gain can fall short of the fitting targets.",
      "OTC earbuds and prescription hearing aids side by side",
      "Earbuds suit adults with perceived mild to moderate loss. Prescription hearing aids cover mild through profound loss, including one-sided loss and complex cases. Earbuds are self-fitted from an app test. Prescription aids are programmed from a full evaluation and checked with real-ear measurement. With earbuds you adjust alone. With a clinic you get fine-tuning, cleaning and repairs. Earbuds also play music and take calls, and the Buds4 line adds Bluetooth LE Audio and Auracast, according to audioXpress. Neither is better for everyone.",
      "How it compares with AirPods Pro",
      "Apple's AirPods Pro hearing aid feature was authorized in September 2024. It has a similar design: a test, a self-fit and amplification in the earbuds. Samsung brings the idea to Android. Reports say both can help with mild to moderate loss. We have not seen independent head-to-head testing, so the simplest guide is to match the phone you own.",
      "When to see a professional first",
      "Get a hearing evaluation before you rely on an app if you have sudden hearing loss, loss much worse in one ear, dizziness, ear pain or drainage, ringing in one ear only, or trouble understanding words even when they are loud. If you struggle even in quiet rooms, that may be more than an OTC device is built for.",
      "Does Medicare cover it?",
      "Original Medicare generally does not cover hearing aids, and it does not cover OTC earbuds. Some Medicare Advantage plans include a hearing or OTC allowance, and the rules vary. Open enrollment runs from October 15 to December 7, so read our page on Medicare open enrollment and hearing benefits.",
      "Status and last update",
      "Last updated September 30, 2026. This is the first version of the page. We will update it when Samsung's rollout goes live or independent testing is published.",
      "Medical information notice",
      "This page is for general information only. It is not medical advice. Earbud prices are product prices, not the cost of hearing care. If you are unsure whether an OTC device is enough for you, book a hearing evaluation."
    ],
    faqs: [
      { question: "Which Galaxy Buds work as hearing aids?", answer: "Only the Galaxy Buds3 Pro and Galaxy Buds4 Pro, once the update arrives. You also need a compatible Galaxy phone. Samsung's announcement says One UI 9 or later." },
      { question: "When is the hearing aid update coming out?", answer: "Samsung says the fourth quarter of 2026 in the United States and some other approved markets. As of September 30, 2026, we have not seen confirmation that it is live." },
      { question: "How does it compare to AirPods Pro hearing features?", answer: "Both use a self-administered hearing test and amplify sound in the earbuds for adults with mild to moderate loss. Apple's feature was authorized in September 2024. We have not seen independent head-to-head testing, so match the one that works with your phone." },
      { question: "Can earbuds replace my hearing aids?", answer: "For mild loss they may be enough. For moderate to profound loss, loss in one ear, or complex needs, prescription hearing aids are built and verified for the job. If your hearing aids work for you, do not swap them without talking to us." },
      { question: "Do I still need an audiologist?", answer: "Often, yes. An evaluation can rule out wax or a medical cause and checks your hearing more fully than a five-minute app test. It also tells you whether an OTC device is enough." }
    ],
    related: [
      { label: "Prescription vs. OTC Hearing Aids", href: "/prescription-vs-otc-hearing-aids" },
      { label: "Auracast and Hearing Aids Explained", href: "/auracast-hearing-aids-explained" },
      { label: "Nuance Audio Plus vs. Meta Glasses", href: "/nuance-audio-plus-vs-meta-glasses" },
      { label: "Medicare Open Enrollment and Hearing Benefits", href: "/medicare-open-enrollment-hearing-benefits" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" }
    ],
    blogMeta: {
      frame: "Industry news explained",
      byline: "What the FDA clearance means for people with hearing loss",
      reviewedBy,
      readTime: "6 min read",
      articleType: "News explained",
      pullQuote: "The earbuds may be a good first step for mild loss. A five-minute app test is not a hearing evaluation.",
      keyTakeaways: [
        "The FDA cleared Samsung's Hearing Aid and Hearing Test for Galaxy Buds3 Pro and Galaxy Buds4 Pro. Samsung plans a Q4 2026 software rollout.",
        "It is for adults 18 and older with perceived mild to moderate loss, and uses the NAL-NL2 fitting formula. Samsung says it does not replace professional diagnosis.",
        "Sudden loss, one-sided loss, dizziness, ear pain or severe loss need an evaluation, not an app."
      ],
      patientQuestion: "Can Samsung Galaxy Buds replace my hearing aids?",
      storyLead: "Samsung's earbuds are getting an FDA-cleared hearing aid feature. Here is what they can and cannot do.",
      sources: [
        { label: "Samsung Newsroom: hearing aid feature cleared by the FDA", href: "https://news.samsung.com/us/?p=87094" },
        { label: "Wareable: Samsung's Galaxy Buds cleared as OTC hearing aids", href: "https://www.wareable.com/samsung/samsung-galaxy-buds-3-pro-4-pro-otc-hearing-test-aids-amplification" },
        { label: "HearingTracker: Samsung Galaxy Buds gain FDA-cleared hearing aid feature", href: "https://hearingtracker.com/news/samsung-galaxy-buds-gain-fda-cleared-otc-hearing-aid-feature" },
        { label: "audioXpress: FDA clearance and regulated hearing platforms", href: "https://audioxpress.com/news/samsung-galaxy-buds-hearing-aid-clearance-confirms-earbuds-are-becoming-regulated-hearing-platforms" },
        { label: "eWeek: Samsung Galaxy Buds hearing aid clearance", href: "https://www.eweek.com/news/samsung-galaxy-buds-hearing-aid/" }
      ]
    }
  },
  {
    path: "/medicare-open-enrollment-hearing-benefits",
    title: "Medicare Open Enrollment 2027: 5 Hearing Benefit Checks Before December 7",
    metaTitle: "Medicare Open Enrollment 2027: Hearing Benefits to Check",
    metaDescription: "Medicare open enrollment runs Oct 15 to Dec 7. Five hearing benefit checks for 2027: hearing aid allowances, in-network audiologists and exam coverage.",
    h1: "Medicare Open Enrollment 2027: 5 Hearing Benefit Checks Before December 7",
    heroImage: { src: "/assets/news/medicare-open-enrollment-hearing-benefits.png", alt: "Timeline of Medicare dates: Annual Notice of Change in September, open enrollment October 15 to December 7, new plans start January 1, 2027, and the Medicare Advantage window from January 1 to March 31" },
    sections: ["Hearing Insurance", "Plan guide", "Audiologist perspective", "Frequently asked questions"],
    body: [
      "Medicare's Annual Enrollment Period runs from October 15 to December 7, 2026. Changes take effect January 1, 2027. If you have a Medicare Advantage plan, or are thinking of joining one, this is the window to look at what it pays for hearing care.",
      "CMS released its 2027 projections on September 28, 2026. It expects the average Medicare Advantage premium to drop from about $14.37 to about $12 a month, and says extra benefits such as hearing, dental and vision are anticipated to hold steady. Those are national averages. Your plan's hearing allowance, network and copays can be very different. This page gives five checks to do before December 7. It is general information, not insurance advice.",
      "The dates that matter",
      "During the Annual Enrollment Period you can switch Medicare Advantage plans, move between Original Medicare and Medicare Advantage, and change or add Part D drug coverage. The window closes December 7. A second period, the Medicare Advantage Open Enrollment Period, runs January 1 to March 31, 2027. It is only for people already in a Medicare Advantage plan, and it allows one change. Treat it as a backstop, not a plan.",
      "What CMS expects for 2027",
      "CMS said about eight in ten Medicare Advantage members should be able to keep their current plan at the same or a lower premium in 2027. It also said supplemental benefits such as hearing are anticipated to hold steady. Plans can still change networks, allowances and copays, and some plans leave counties each year. Your plan's documents decide what applies to you.",
      "Check 1: Read your Annual Notice of Change",
      "Plans send an Annual Notice of Change each fall, usually by the end of September. It lists next year's changes to premiums, copays, networks and extra benefits. Find the hearing section. Look for changes to the hearing aid allowance, the number of exams and the list of covered brands. If you cannot find it, call the number on your plan card.",
      "Check 2: The hearing aid allowance",
      "Ask four things. How much is the allowance? Does it cover one hearing aid or two? How often does it renew? Which brands and models does it cover? Some plans route hearing benefits through a separate hearing benefit manager, so ask who runs it. A large allowance that covers only a few devices may be worth less than a smaller one you can use on the hearing aids that suit your hearing.",
      "Check 3: Is your audiologist in network?",
      "Network status decides what you pay. Do not assume that a practice that takes your plan for one service is in network for hearing aids. Call Audiology Associates of Westchester with your plan name and member number, and we will tell you whether we are in your network. If we are not, we will say so and explain your options.",
      "Check 4: Exam coverage and referral rules",
      "Original Medicare does not cover routine hearing exams. It generally covers a diagnostic hearing or balance exam when a doctor orders it to plan treatment, and you usually pay part of the cost. Medicare Advantage plans often include routine exams, but some need a referral from your primary care doctor or limit visits. Ask whether you need a referral and how many exams a year are covered.",
      "Check 5: OTC and flex-card benefits",
      "Some Medicare Advantage plans offer a spending card or an over-the-counter benefit. Ask whether it can pay for OTC hearing aids or accessories, and whether it covers earbuds with a hearing feature, such as the Samsung Galaxy Buds update we describe in our guide. Rules differ widely. Get the answer in writing if you can.",
      "Original Medicare and Medicare Advantage for hearing",
      "Original Medicare, Parts A and B, does not cover hearing aids, fittings or routine hearing exams. Medicare Advantage plans replace Original Medicare and can add benefits, and hearing is one of the most common. One exception is cochlear implants. Medicare can cover them when its criteria are met, which is very different from hearing aids. Our cochlear implant page explains the evaluation.",
      "Why timing before year-end can matter",
      "Many plans reset benefits on January 1. If your plan has a hearing allowance or a set number of exams that renews yearly, unused 2026 benefits generally do not carry over. If you have been putting off a hearing test, use your 2026 benefits first, then see what your 2027 plan offers. If you are switching plans, ask whether service and repairs on your current hearing aids are covered under the new plan.",
      "Status and last update",
      "Last updated September 30, 2026. This is the first version of the page. We will update it when CMS publishes final landscape data. For your own plan, use your Annual Notice of Change, your plan's member services and Medicare.gov.",
      "Insurance and medical notice",
      "This page is for general information only. It is not insurance, legal or medical advice. Plan benefits, allowances and networks vary by plan and county. Always check with your plan or Medicare.gov before you decide."
    ],
    faqs: [
      { question: "Does Medicare cover hearing aids in 2027?", answer: "Original Medicare does not cover hearing aids. Many Medicare Advantage plans include some hearing aid coverage, and CMS expects those extra benefits to hold steady overall. The amount and rules depend on your plan." },
      { question: "What is the deadline to change plans?", answer: "December 7, 2026 is the end of the Annual Enrollment Period. Changes made in that window take effect on January 1, 2027." },
      { question: "What is the Annual Notice of Change?", answer: "It is a document your plan sends each fall that lists next year's changes to premiums, copays, networks and extra benefits. It is the first thing to read for hearing coverage." },
      { question: "What is the difference between AEP and the January to March window?", answer: "The Annual Enrollment Period, October 15 to December 7, is open to all Medicare members. The Medicare Advantage Open Enrollment Period, January 1 to March 31, is only for people already in a Medicare Advantage plan, and it allows one change." },
      { question: "Does Original Medicare cover hearing exams?", answer: "Not routine ones. It generally covers a diagnostic hearing or balance exam when a doctor orders it to plan treatment, and you usually pay part of the cost. Ask your clinician to confirm how it applies to you." }
    ],
    related: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Comprehensive Hearing Assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "Samsung Galaxy Buds Hearing Aid Feature", href: "/samsung-galaxy-buds-hearing-aid-feature" },
      { label: "Prescription vs. OTC Hearing Aids", href: "/prescription-vs-otc-hearing-aids" },
      { label: "Cochlear Implant Support", href: "/how-we-can-help/cochlear-implants" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" }
    ],
    blogMeta: {
      frame: "Plan guide",
      byline: "Five hearing benefit checks before Medicare open enrollment closes",
      reviewedBy,
      readTime: "6 min read",
      articleType: "Plan guide",
      pullQuote: "CMS expects hearing benefits to hold steady on average. Your own plan is the only one that matters, so read its notice before December 7.",
      keyTakeaways: [
        "Annual Enrollment runs October 15 to December 7, 2026, with changes starting January 1, 2027.",
        "Original Medicare does not cover hearing aids. Medicare Advantage plans often cover some hearing care, and the amounts and rules differ by plan and county.",
        "Current Medicare Advantage members get one more change from January 1 to March 31, 2027."
      ],
      patientQuestion: "What should I check about hearing benefits before Medicare open enrollment ends?",
      storyLead: "Medicare open enrollment runs until December 7. Here are five hearing checks to do first.",
      sources: [
        { label: "AHA: CMS projects decline in MA, small increase in standalone Part D premiums for 2027", href: "https://www.aha.org/news/headline/2026-09-29-cms-projects-decline-ma-small-increase-standalone-part-d-premiums-2027" },
        { label: "Becker's Payer: CMS projects lower Medicare Advantage premiums for 2027", href: "https://www.beckerspayer.com/payer/medicare-advantage/cms-projects-lower-medicare-advantage-premiums-flat-enrollment-for-2027/" },
        { label: "Medicare.gov: Medicare and you", href: "https://www.medicare.gov/" }
      ]
    }
  },
];

export function buildNextBlogPosts(baseUrl: string, _siteName: string): SitePage[] {
  return nextBlogBlueprints.map((post): SitePage => ({
    ...post,
    url: `${baseUrl}${post.path}`,
    canonical: `${baseUrl}${post.path}`,
    type: "blog-post",
    lastModified: "2026-07-15",
    images: post.heroImage ? [post.heroImage] : []
  }));
}
