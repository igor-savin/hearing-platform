import { primaryPhone } from "@/lib/siteBasics";
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
    heroImage: { src: "/assets/couple-conversation-hearing-loss-at-home.png", alt: "Two adults in unhurried conversation at a hearing care appointment" },
    sections: ["Affirming Care", "The chart, and the New York wrinkle", "Speech testing, talkers, and what we write down", "Hearing and long-term HIV treatment", "Hearing aids after a voice change", "What we do not claim"],
    body: [
      "Most pages like this one say a practice is welcoming and stop there. Welcome is the floor, not the service. What follows is the specific, practical difference affirming care makes inside an audiology clinic: what goes in your chart, how the tests are chosen and recorded, and the two clinical situations where being LGBTQ+ genuinely changes what your audiologist should be doing.",
      "We have tried to be honest about the evidence throughout. Two of the four topics below are well studied. Two are not studied at all, and where that is the case we say so rather than dressing an educated guess as established practice.",
      "The chart, and the New York wrinkle",
      "Your chosen name and pronouns go in your record and are what the front desk and the clinicians use, including on reminder and follow-up calls. Where a legal name is required for insurance billing, it lives in the billing field and nowhere else. That sounds administrative because it is, but the consequence is not: being misnamed in a waiting room is among the most commonly cited reasons LGBTQ+ patients delay or avoid care, and delayed hearing care has a particular cost, because untreated hearing loss compounds while you wait. The New York wrinkle is worth knowing about. Since the Gender Recognition Act took effect on 21 December 2021, changing a name in this state no longer requires publishing notice in a newspaper, and since 24 June 2022 the DMV has issued driver licences with an X marker on self-attestation, without a doctor's letter. The practical result is that a New Yorker's licence can be correct while an insurance card issued under an older policy is not, or the reverse. That mismatch is now more common here than it used to be, not less. Tell us when you book and it is set up before you arrive, rather than negotiated at the desk in front of a full room.",
      "Speech testing, talkers, and what we write down",
      "Here is a piece of clinical detail almost nobody explains. A speech-in-noise test is not one test. QuickSIN uses a female talker against four-talker babble; HINT and BKB-SIN use a male talker. Those are properties of the recordings, and the choice measurably changes the score, because the signal-to-noise ratio you need for fifty per cent correct is not the same across them. A result therefore only means something beside another result from the same test and the same recording. We record which test and which recording were used and keep it constant across your visits, so that a change in your score is a change in your hearing rather than a change in the disc. That is good practice for every patient. We raise it on this page because when a patient's voice or presentation is not what a clinician unthinkingly expects, an unexamined talker choice is exactly the sort of thing that quietly creeps in. There is no published guidance on speech audiometry for transgender and gender-diverse patients. We looked; the audiology literature on trans care is about clinical culture rather than test procedure. In the absence of guidance, consistency is what protects you. One clarification while we are here: standard speech testing uses recorded talkers or the clinician's voice, never yours. Your own voice enters into it only when we are checking occlusion, which is two sections down.",
      "Hearing and long-term HIV treatment",
      "This one is genuinely established, and it is more interesting than the version usually repeated. A large cohort study published in JAMA Otolaryngology-Head & Neck Surgery, drawing on the Multicenter AIDS Cohort Study and the Women's Interagency HIV Study, found that adults living with HIV had measurably poorer hearing thresholds than HIV-negative comparators, on the order of ten decibels on average, at both low and high frequencies. The American Academy of Audiology's position is that several large studies now point consistently toward an association. What makes it worth understanding rather than merely knowing is the part usually left out: in that study the difference was not explained by white blood cell count, viral load, duration of antiretroviral therapy, or adherence. The common assumption that it is simply the medication is not what the data showed. The reason this matters more in New York than almost anywhere else is demographic. New York State Department of Health figures put more than 104,000 New Yorkers living with diagnosed HIV in 2022, and 57 per cent of them were aged 50 or older. That is a majority, and it is the age band where age-related hearing loss arrives on its own. Many in it were treated in the 1980s and 1990s with the older nucleoside analogues, zidovudine, stavudine and didanosine, which carry historical ototoxicity signals of their own. For someone on a modern regimen the honest position is that an association exists and the mechanism is not settled. What we do about it is unglamorous and useful: get a baseline audiogram and repeat it, so that change is measured against your own history rather than against a population average. That is the same advice we would give anyone with a known risk factor, and it is worth more than a theory about why.",
      "Hearing aids after voice training or voice surgery",
      "If your voice has changed substantially, through training, through surgery, or through testosterone, and you wear hearing aids, three things are worth checking. We should be upfront that none of them rests on published evidence: there is no literature on this and no manufacturer guidance, so what follows is reasoning from documented mechanisms, clearly labelled as such. First, own-voice processing. Some hearing aids are trained during fitting to recognise your voice. Signia's implementation builds a spatial model of the path from your mouth to the microphones and states plainly that detection rests on spatial cues rather than on the sound quality of your voice, remaining reliable when the voice is raised, hoarse, or speaking another language. That mechanism argues a change in pitch or resonance should not defeat it. Signia does not address voice change anywhere in its documentation, so treat that as a documented silence rather than a reassurance. Second, occlusion, the boom or blocked feeling of your own voice. The occlusion effect is concentrated below one kilohertz and varies strongly with the vowel being spoken, so a lower fundamental frequency puts proportionally more of your own voice into exactly that region. It is reasonable to predict that occlusion may feel worse after masculinisation and better after feminisation. No study has tested that. It is a reason to re-check, not a finding. Third, and this is the one that matters most: real-ear verification will not catch any of it. Verification uses a standardised international speech signal built from six talkers, deliberately independent of your voice. That is precisely why your fitting stays valid through a voice change, and precisely why an own-voice complaint will not appear on the measurement. The check has to be a conversation and a re-fit, not a printout. If your voice has changed since your aids were fitted, book a check and say so when you book.",
      "What we do not claim",
      "We are a general audiology practice, not a specialist gender clinic, and we have no specific training in gender-affirming care beyond keeping current with an audiology literature that is, on these topics, thin. We do not provide voice therapy. That is a speech-language pathology specialty, and if you need it we will say so and point you elsewhere rather than improvise. For community support, referrals and local programming, The LOFT LGBTQ+ Community Center at 252 Bryant Avenue in White Plains has served Westchester and the Hudson Valley since 1983 and is a better first call than we are for anything outside hearing. What we can offer is competent hearing care from clinicians who will use your name, choose and record your tests carefully, know why a baseline matters after decades on HIV treatment, and take an own-voice complaint seriously instead of pointing at a verification screen. Our offices are in Harrison and Somers. Call (914) 949-0034 and tell us anything you would like us to know before you arrive."
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
      { label: "Compare the Harrison and Somers offices", href: "/contact-us" },
      { label: "Celebrating Pride Month: inclusivity and compassion", href: "/celebrating-pride-month-embracing-inclusivity-and-compassion" }
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
    heroImage: { src: "/assets/hearing-care-options-reviewing-paperwork.png", alt: "Weighing hearing aid options before committing to a purchase" },
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
      { label: "Phonak EON: What Is Actually Known", href: "/phonak-eon-what-we-know" },
      { label: "Harrison, NY audiology office", href: "/harrison-ny" },
      { label: "Somers, NY audiology office", href: "/Somers-NY" },
      { label: "Hearing aid second opinion in Westchester", href: "/hearing-aid-second-opinion" },
      { label: "Hearing aid brands we fit", href: "/hearing-aids-brands" },
      { label: "Questions to ask before buying hearing aids", href: "/questions-before-buying-hearing-aids" },
      { label: "The 6 hearing aid platforms of fall 2026, compared", href: "/best-ai-hearing-aids-fall-2026" }
    ]
  },
  {
    path: "/signia-max-what-we-know",
    title: "Signia MaX: What Is Actually Known",
    metaTitle: "Signia MaX: What Is Actually Known | Audiology Associates",
    metaDescription: "Signia released MaX on 24 August 2026. What is confirmed, what Signia claims, what one lab has now measured, and what is still missing.",
    h1: "Signia MaX: What Is Actually Known So Far",
    heroImage: { src: "/assets/brands/Signia-MaX-device.webp", alt: "Signia Pure Charge and Go MaX rechargeable hearing aid" },
    sections: ["The idea", "Where the numbers come from", "The Auracast caveat", "What is missing", "Who it suits"],
    body: [
      "Signia announced MaX on 24 August 2026 and American dispensers could order it the same day. It now sits above Signia IX at the head of the range, and the pitch behind it is unusual: rather than a single trained system doing everything, four of them, each given a narrower job.",
      "The idea. The industry standard is a lone network trained to pull conversation clear of everything else. Signia's argument is that this asks a single system to settle several unrelated questions simultaneously — is anyone actually talking, is that the wearer's own voice, has the acoustic environment changed underfoot — and that a wrong answer to any of them sends the aid off in the wrong direction. MaX therefore distributes those judgements across four separately trained networks running in concert, badged Acoustic Intelligence. It is a real engineering stance, not a slogan bolted onto last year's silicon.",
      "Where the numbers come from. Signia reports that 97 per cent of wearers do better in noisy group conversation than with unnamed competitors, and that MaX leads on signal-to-noise performance in the same conditions. Both cite white papers written by Signia in 2026 that we have not been able to find published anywhere, with no stated protocol, sample size or comparator. A third figure — 54 times the processing power — carries a footnote whose entire content is that the yardstick was Signia IX. That is a baseline, not a study. That is not an accusation. Manufacturers validate their own designs because that is how devices get built, and the company has been publishing hearing research for decades. It does mean the white-paper claims stay unverified, and that the figures doing the heaviest persuasive work describe the chip rather than what a patient experiences across a dinner table.",
      "What a lab has measured since launch. HearAdvisor, the lab HearingTracker works with, has tested the top-level MaX 7 and gave it a SoundScore of 4.3 out of 5, an A grade and its Expert Choice award, against a prescription-category average of 4.19. Speech in noise scored 2.1 untuned and 2.8 after professional tuning, speech in quiet 3.6, own voice 3.7, streamed music 2.9 and feedback handling 4.6, according to HearingTracker. Look at the gap between 2.1 and 2.8: the same aids scored better once they were tuned by a professional, which is the fitting effect in a single number. It is also one lab's standard test of one technology level. MaX 5 and MaX 3 have not been rated separately, and a lab score says nothing about the group conversation in your own restaurant, which is where Signia's 97 per cent claim sits.",
      "The Auracast caveat almost nobody is printing. Every summary of this device lists Auracast, and the hardware genuinely supports it. What the summaries leave out sits in Signia's own small print: the capability is enabled by a software release scheduled before March 2027. Buy today and you own a device built for broadcast audio that cannot yet receive any. With the entire industry marketing this technology at once, the distinction deserves stating plainly. Meanwhile the built-in telecoil is working, and around here that still reaches more venues than Auracast does.",
      "What is missing. A lab has now measured one MaX model, and the other levels are untested. Signia has published no price. One online retailer lists MaX 3 from $2,698, MaX 5 from $2,798 and MaX 7 at $3,298 a pair, according to HearingTracker, but a price at a practice also covers testing, fitting and follow-up, so ask for a written quote. Hearing Review reports an IP68 rating, and HearingTracker lists up to 30 hours of battery per charge. At launch the platform comes in exactly one form: rechargeable, worn behind the ear with the receiver in the canal, offered in eight colours. Nothing custom, nothing instant-fit, no slim or powerful variant, and no CROS option. And nothing in the launch material refers to tinnitus, although notch therapy and the relief signals have been standard across Signia IX for years. We expect they carry forward and will confirm it in the fitting software before saying so.",
      "Who it suits. Crowded rooms full of overlapping voices are the situation this design targets most directly — and also the one where the supporting evidence is thinnest, so ask for a demonstration instead of accepting the figure. If your ears need a form MaX is not made in, choosing IX is not settling for less; it is the only Signia that physically fits the brief, and it carries external test results the newer platform lacks. And if your current IX aids have been verified and are doing their job, our advice is to leave them alone. Our Harrison and Somers audiologists will set MaX beside whatever you wear now, in a noisy room rather than a quiet booth, and you can decide with your own ears.",
      "Last updated 8 October 2026. What changed: we added the HearAdvisor lab result for MaX 7, the retailer price listings, the IP68 rating, the battery claim and the United States availability details, and we corrected earlier statements that no outside laboratory had measured MaX. We also added a link to our roundup of the five new AI hearing aids."
    ],
    faqs: [
      { question: "What does MaX stand for?", answer: "Multi-adaptive Xperience. Signia names platforms this way: AX was Augmented Xperience, IX was Integrated Xperience. MaX is the 2026 generation and now sits at the top of the range." },
      { question: "Has anyone independent tested Signia MaX?", answer: "One lab has, as of October 2026. HearAdvisor scored the top-level MaX 7 at 4.3 out of 5, an A grade. The other levels are untested, and Signia's group-conversation and processing figures remain company claims. Signia IX has also been externally measured and performed strongly, which is the relevant comparison if evidence matters more to you than release date." },
      { question: "Is Signia MaX available in the United States?", answer: "Yes. Signia announced MaX on 24 August 2026 with launch in the United States, Germany and the Nordics, according to Hearing Review, and HearUSA reported nationwide availability on 1 September. What any one practice can fit depends on stock and fitting software, so call before you plan around it." },
      { question: "How does MaX compare with the other new flagship hearing aids?", answer: "Four other makers launched AI flagships within seven weeks of MaX. We set them side by side in one table in our roundup of the five new AI hearing aids of fall 2026, and we name no winner because the right device depends on your hearing and your fitting." },
      { question: "Does MaX support Auracast?", answer: "The chip does. Switching it on waits for a software release Signia has put before March 2027. In the meantime the built-in telecoil is live, and locally that reaches more venues than Auracast currently does anyway." },
      { question: "Should I wait for it or be fitted now?", answer: "If hearing is a daily struggle, a properly verified fitting today will serve you better than waiting on a platform whose real-world performance has barely been measured. If your present aids work, nothing about this launch obliges you to move." }
    ],
    related: [
      { label: "Signia MaX", href: "/hearing-aids-brands/signia/signia-max" },
      { label: "Signia MaX vs Signia IX", href: "/hearing-aids-brands/signia/signia-max-vs-signia-ix" },
      { label: "The 6 hearing aid platforms of fall 2026, compared", href: "/best-ai-hearing-aids-fall-2026" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Fortell Hearing Aids: What Is Actually Known", href: "/fortell-hearing-aids-what-we-know" },
      { label: "Harrison, NY audiology office", href: "/harrison-ny" },
      { label: "Somers, NY audiology office", href: "/Somers-NY" },
      { label: "What Signia MaX costs", href: "/hearing-aids-brands/signia/signia-max-cost" },
      { label: "Signia MaX vs Oticon Reveal", href: "/hearing-aids-brands/signia/signia-max-vs-oticon-reveal" },
      { label: "Signia hearing aids in Westchester", href: "/hearing-aids-brands/signia" },
      { label: "Phonak EON: what is actually known so far", href: "/phonak-eon-what-we-know" }
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
      "What is missing. One lab has now assessed EON, and only at the top level: HearAdvisor gave the EON Sphere 90 a SoundScore of 5.0 out of 5 and an A grade, according to HearingTracker, while the other levels and the EON R are untested. Phonak has published no price. One online retailer lists the Sphere 90 at $4,598, the Advanced 70 at $3,598 and the Standard 50 at $3,198 a pair, and a price at a practice also covers testing, fitting and follow-up. HearingTracker lists an IP68 rating. Every EON is receiver-in-canal, so there is no custom shell, no titanium in-the-canal model, no powerful behind-the-ear instrument and nothing for children. And there is no telecoil on any model, which is not new for this line but matters here, because loops remain how most Westchester venues broadcast. Tinnitus goes unmentioned throughout, despite Tinnitus Balance having shipped as standard on these aids for years.",
      "Who it suits. Anyone for whom Auracast is already real, because a venue they attend has installed it. Anyone with hearing lost on one side, since EON launched with a CROS model and Signia's flagship did not. Anyone who would benefit from a Roger microphone, which carries across and still has no equivalent from another manufacturer. Anyone whose aids sit in a drawer because of their size. And anyone previously priced out of the speech network. If you are wearing verified Infinio aids that work, we would not move you, and we will say so at the appointment rather than afterwards.",
      "Last updated 8 October 2026. What changed: we added the HearAdvisor lab result for the EON Sphere 90, retailer price listings and the IP68 rating, and corrected earlier statements that no outside laboratory had assessed EON and that no price had appeared anywhere. We also added a link to our roundup of the five new AI hearing aids."
    ],
    faqs: [
      { question: "When did Phonak EON become available?", answer: "Announced and on sale in the United States on 24 August 2026, with Germany, France, the UK and Australia scheduled for September. What any practice can fit depends on stock and fitting software updates." },
      { question: "Does Phonak EON have a telecoil?", answer: "No, and no model in this line has for several years. EON supports Auracast instead, and unlike some devices launched the same month it works now rather than later. Most looped venues locally are still loops, so name the venue that matters to you and we will check what it uses." },
      { question: "Is EON better than Phonak Infinio in noise?", answer: "Phonak does not claim that it is. The gains claimed are size, weight, efficiency, working Auracast, and the speech network reaching a third performance level." },
      { question: "Has anyone independent measured it?", answer: "One lab has, for the top level. HearAdvisor gave the EON Sphere 90 a SoundScore of 5.0 out of 5, according to HearingTracker. The other levels are untested, and Phonak's own field-study figures remain company claims. The platform EON replaces has also been externally assessed and scored near the top of its category." }
    ],
    related: [
      { label: "Phonak EON", href: "/hearing-aids-brands/phonak/phonak-eon" },
      { label: "Phonak EON vs Phonak Infinio", href: "/hearing-aids-brands/phonak/phonak-eon-vs-phonak-infinio" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Fortell Hearing Aids: What Is Actually Known", href: "/fortell-hearing-aids-what-we-know" },
      { label: "Harrison, NY audiology office", href: "/harrison-ny" },
      { label: "Somers, NY audiology office", href: "/Somers-NY" },
      { label: "What Phonak EON costs", href: "/hearing-aids-brands/phonak/phonak-eon-cost" },
      { label: "Phonak EON vs Signia MaX", href: "/hearing-aids-brands/phonak/phonak-eon-vs-signia-max" },
      { label: "Phonak hearing aids in Westchester", href: "/hearing-aids-brands/phonak" },
      { label: "Signia MaX: what is actually known so far", href: "/signia-max-what-we-know" },
      { label: "The 6 hearing aid platforms of fall 2026, compared", href: "/best-ai-hearing-aids-fall-2026" }
    ]
  },
  {
    path: "/can-an-audiologist-remove-earwax-westchester",
    title: "Can an Audiologist Remove Earwax?",
    metaTitle: "Earwax Removal by an Audiologist | Westchester",
    metaDescription: "Audiologists can remove earwax when the ear history and the examination allow it. Here is what happens at the appointment, and when a referral is safer.",
    h1: "Can an Audiologist Remove Earwax? What Westchester Patients Should Know",
    heroImage: { src: "/assets/ear-care-drying-ear-with-towel.png", alt: "Adult preparing for safe professional ear care and an ear examination" },
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
      { label: "Somers office", href: "/Somers-NY" },
      { label: "How to take care of a blocked ear", href: "/how-to-take-care-of-a-blocked-ear" },
      { label: "Getting water out of your ear safely", href: "/how-to-get-water-out-of-your-ear" },
      { label: "Ear pressure: what may help", href: "/how-to-relieve-ear-pressure" },
      { label: "Dry, itchy ears: causes and next steps", href: "/understanding-and-treating-dry-ears" }
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
    heroImage: { src: "/assets/hearing-aid-fit-adjusting-behind-the-ear.png", alt: "Adult receiving a professional hearing aid fit and programming adjustment" },
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
      { label: "Costco Hearing Aids vs Audiologist Care", href: "/costco-hearing-aids-vs-audiologist-care" },
      { label: "Hearing aid adjustments in Westchester", href: "/hearing-aid-adjustments-westchester" },
      { label: "Hearing aid second opinion in Westchester", href: "/hearing-aid-second-opinion" },
      { label: "Hearing aid tune-up or repair?", href: "/hearing-aid-tune-up-vs-repair" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" },
      { label: "Elehear Beyond 2 Pro vs. prescription hearing aids: a Westchester decision guide", href: "/elehear-beyond-2-pro-vs-prescription-hearing-aids" }
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
    heroImage: { src: "/assets/hearing-aid-fit-adjusting-behind-the-ear.png", alt: "Hearing aids being inspected for cleaning, adjustment, or repair" },
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
    heroImage: { src: "/assets/couple-conversation-hearing-loss-at-home.png", alt: "Adults discussing speech understanding and advanced hearing care options" },
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
    heroImage: { src: "/assets/couple-conversation-hearing-loss-at-home.png", alt: "Older adult discussing hearing, communication, and cognitive wellness with a clinician" },
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
      { label: "Is Hearing Loss Normal With Age?", href: "/is-hearing-loss-normal-with-age" },
      { label: "Precision hearing care: why your audiogram matters more than ever in 2026", href: "/precision-hearing-care-audiogram" }
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
    heroImage: { src: "/assets/hearing-care-options-reviewing-paperwork.png", alt: "Patient comparing evidence-informed tinnitus care options in Westchester County" },
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
      { label: "Harrison office", href: "/harrison-ny" },
      { label: "Tinnitus therapy", href: "/tinnitus-therapy" },
      { label: "Can Hearing Aids Help Tinnitus?", href: "/can-hearing-aids-help-tinnitus" },
      { label: "Lenire for tinnitus: who might be a candidate?", href: "/lenire-for-tinnitus-candidate-guide" },
      { label: "Tinnitus habituation", href: "/how-we-can-help/tinnitus-management/habituation" },
      { label: "Ringing in one ear: causes, red flags and next steps", href: "/ringing-in-one-ear-red-flags-next-steps" },
      { label: "Somers, NY office", href: "/Somers-NY" }
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
    heroImage: { src: "/assets/hearing-care-options-reviewing-paperwork.png", alt: "Adult comparing newer over-the-counter hearing technology with prescription hearing care" },
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
      { label: "Hearing Glasses Compared: Legato vs Nuance vs Hearing Aids", href: "/hearing-glasses-comparison" },
      { label: "Comprehensive Hearing Assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "Advanced Hearing Aid Technology", href: "/how-we-can-help/advanced-hearing-aid-technology" },
      { label: "Meta glasses hearing aid feature: should you try it?", href: "/meta-glasses-hearing-aid-feature" }
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
    heroImage: { src: "/assets/headphones-listening-at-home.png", alt: "Adult using connected audio technology at home with accessible listening support" },
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
      { label: "Hearing Aid Brands", href: "/hearing-aids-brands" },
      { label: "Elehear Beyond 2 Pro vs. prescription hearing aids: a Westchester decision guide", href: "/elehear-beyond-2-pro-vs-prescription-hearing-aids" },
      { label: "The 6 hearing aid platforms of fall 2026, compared", href: "/best-ai-hearing-aids-fall-2026" }
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
    heroImage: { src: "/assets/headphones-listening-at-home.png", alt: "Adult wearing consumer audio glasses, representing new self-fit hearing technology" },
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
      { label: "Somers, NY office", href: "/Somers-NY" },
      { label: "Hearing glasses compared with hearing aids", href: "/hearing-glasses-comparison" },
      { label: "Hearing aid glasses in 2026", href: "/hearing-aid-glasses-2026" },
      { label: "Samsung Galaxy Buds as hearing aids", href: "/samsung-galaxy-buds-hearing-aid-feature" },
      { label: "Prescription hearing aid brands we fit", href: "/hearing-aids-brands" },
      { label: "Comprehensive hearing assessment", href: "/how-we-can-help/comprehensive-hearing-assessments" }
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
    heroImage: { src: "/assets/hearing-care-options-reviewing-paperwork.png", alt: "Adult comparing newer over-the-counter hearing technology with prescription hearing care" },
    sections: ["Hearing Technology", "Buyer decision guide", "Audiologist perspective", "Frequently asked questions"],
    body: [
      "Two pairs of glasses now claim to help you hear. One is Nuance Audio Plus, the second-generation product from EssilorLuxottica, announced last week. The other is the hearing feature Meta announced on September 23 for its own glasses. Several patients have already asked which one to pick, and whether either replaces a hearing aid.",
      "They are built differently, and those differences matter more than the gap in price. This page lays out what each one is, what open-ear glasses do well and badly, and who should have a hearing test before spending anything.",
      "What each product is",
      "Nuance Audio Plus is a hearing device built into eyewear. Directional microphones and small speakers sit in the temples, and nothing goes into the ear canal. The app offers two listening modes (Frontal and All-Around), four amplification presets and three levels of noise reduction. EssilorLuxottica rates the battery at about 10 hours and describes Plus as FDA-cleared for adults with perceived mild to moderate hearing loss. US pricing starts at $829, depending on the lenses, and it is sold through optical and hearing care professionals. The first-generation glasses stay on sale, listed by HearingTracker at $699.",
      "What Meta's Hearing Enhancement is",
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
      { label: "Hearing Glasses Compared: Legato vs Nuance vs Hearing Aids", href: "/hearing-glasses-comparison" },
      { label: "Hearing Aid Glasses in 2026", href: "/hearing-aid-glasses-2026" },
      { label: "Are OTC Hearing Aids Right for Me?", href: "/are-otc-hearing-aids-right-for-me" },
      { label: "OTC vs Prescription Hearing Aids", href: "/otc-vs-prescription-hearing-aids-real-world" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" },
      { label: "Samsung Galaxy Buds as hearing aids", href: "/samsung-galaxy-buds-hearing-aid-feature" },
      { label: "AirPods as hearing aids", href: "/airpods-as-hearing-aids" },
      { label: "Prescription hearing aid brands we fit", href: "/hearing-aids-brands" },
      { label: "Comprehensive hearing assessment", href: "/how-we-can-help/comprehensive-hearing-assessments" }
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
    heroImage: { src: "/assets/headphones-listening-at-home.png", alt: "Adult using connected audio technology with accessible listening support" },
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
    // reviewedBySlug intentionally unset until a clinician reviews this page
    path: "/invisible-cochlear-implant-med-el-tici-unico",
    title: "The Invisible Cochlear Implant (TICI UNICO): Are You a Candidate?",
    metaTitle: "Invisible Cochlear Implant TICI UNICO: Are You a Candidate?",
    metaDescription: "TICI UNICO is not in the U.S. yet. See 5 signs you may be a cochlear implant candidate today and how testing works in Westchester. Book an evaluation.",
    h1: "The Invisible Cochlear Implant (TICI UNICO): Are You a Candidate?",
    heroImage: { src: "/assets/news/invisible-cochlear-implant-med-el-tici-unico.png", alt: "Diagram comparing a conventional cochlear implant with an external processor and coil to the fully implantable TICI UNICO, which sits entirely under the skin" },
    ogImage: { src: "/assets/og/invisible-cochlear-implant-med-el-tici-unico.png", alt: "The Invisible Cochlear Implant: what MED-EL's TICI UNICO means for U.S. patients. Audiology Associates of Westchester." },
    ogTitle: "The World's First Invisible Cochlear Implant Just Launched",
    ogDescription: "No external processor. Nothing to take off at night. Here's what MED-EL's TICI UNICO is, and when U.S. patients might get it.",
    sections: ["Cochlear Implants", "Candidacy guide", "Audiologist perspective", "Frequently asked questions"],
    body: [
      "If your hearing aids no longer make speech clear, a cochlear implant may belong in your next conversation. Dr. Caitlin Dold does the cochlear implant testing and programming at Audiology Associates of Westchester. On September 29, 2026, MED-EL gave that conversation a new headline: an implant with nothing worn on the outside.",
      "Where things stand on September 30, 2026: MED-EL unveiled TICI UNICO on September 29 and holds a European CE Mark for it. The FDA has not approved it. No U.S. date or price has surfaced. We do not offer TICI UNICO, and the trial results so far are early. This page covers the news first, then the question that matters more for most readers: could you be a candidate for a cochlear implant today?",
      "Five signs you may be a candidate",
      `Sign 1: Even in a quiet room, speech stays unclear with your hearing aids in. Sign 2: The phone has become hard or impossible to use. Sign 3: You ask people to say things again everywhere, not just in restaurants or crowds. Sign 4: A hearing screen finds a pure-tone average of 60 dB HL or worse, with speech understanding of 60% or less. Clinics often treat that pairing as a reason to refer. Sign 5: Your hearing keeps slipping even though your hearing aids are well fitted and verified. If any of these sounds like you, book a hearing evaluation with aided speech testing. Call ${primaryPhone} or use our contact page. Having the evaluation does not mean you have agreed to surgery.`,
      "What the process looks like for a Westchester patient",
      "First we check what your hearing aids are really delivering, using real-ear measurement. An implant talk that starts from under-fitted hearing aids starts in the wrong place. Then we test your hearing and your word understanding, with and without your devices. We explain where your results sit against candidacy criteria. You might not be a candidate, and better-fitted hearing aids might be the answer. If an implant evaluation makes sense, we refer you to an implant surgeon and send the testing with you.",
      "Who does what: Dr. Dold and the surgeon",
      "The surgeon and the hospital handle the surgery. It is not done at our offices. Dr. Dold handles the audiology on either side of it. Before surgery, that is the candidacy testing. After healing, she activates the processor and programs it. Mapping then continues over a series of follow-up visits, and the settings are adjusted for as long as you wear the implant.",
      "Where TICI UNICO fits in",
      "A conventional cochlear implant has an internal part placed by a surgeon and an external sound processor that holds the microphone and battery. A coil joins the two through the skin. TICI UNICO removes the external part. IEEE Spectrum reports that it weighs about 20 grams and has four connected components under the scalp, and that its microphone sits roughly 6 millimeters beneath the skin. MED-EL says a wearer can hear around the clock, including asleep, in the shower, swimming, and while the battery charges.",
      "Conventional implant and TICI UNICO at a glance",
      "Here are the two designs next to each other, limited to details reported so far. Charging for conventional processors is not covered on this page.",
      "What is known, and what is not",
      "MED-EL reported four commercial implantations on launch day itself. A six-person feasibility study it published in 2025 described a good safety profile and hearing results comparable to conventional implants, and the launch material mentions a larger investigation of about 30 patients. Early results from small groups are a hopeful sign. They say little about how the device performs for years. The launch release left out a price, MRI details and a U.S. regulatory plan, and it was silent on insurer coverage. We will not guess at any of those.",
      "Wait for TICI UNICO, or get tested now?",
      "Get tested now. Cochlear implants need FDA approval before sale in the United States, and no one can give you a date. Three companies sell implant systems here today: Advanced Bionics, Cochlear and MED-EL. All use an external processor. For the right candidate they give large gains in understanding speech, especially in quiet and on the phone. Ears that go a long time without useful hearing tend to do less well after implantation. An evaluation today gives you a baseline that will still be useful if new devices arrive.",
      "Status and last update",
      "Last updated September 30, 2026. This is the page's first version. We will revise it if MED-EL or the FDA shares news on a U.S. plan, a price or MRI details.",
      "Medical information notice",
      "This page offers general information, not medical advice. It does not diagnose anything or recommend a treatment. Whether you should have an implant depends on your test results and on talks with your care team."
    ],
    faqs: [
      { question: "Does Audiology Associates of Westchester offer TICI UNICO?", answer: "No. TICI UNICO lacks FDA approval, so no U.S. practice can offer it yet. We do provide candidacy testing before cochlear implant surgery and programming after it, with Dr. Caitlin Dold." },
      { question: "How much does a cochlear implant cost?", answer: "Many insurers cover cochlear implants, including Medicare when its criteria are met. Your own share of the bill depends on your plan. Before you commit, ask the implant program to run a benefits check for you." },
      { question: "What happens at a cochlear implant evaluation?", answer: "We begin by measuring what your hearing aids deliver in your ears. Next come tests of hearing and word understanding, with and without the devices, and a plain explanation of how you compare with candidacy criteria. If an implant evaluation is the next step, we refer you to an implant surgeon and send the results along." },
      { question: "Can poorly fitted hearing aids make me look like a candidate?", answer: "They can muddy the picture, so we verify your hearing aids first. A talk about implants that begins with under-fitted devices begins in the wrong place." },
      { question: "What do we still not know about TICI UNICO?", answer: "At launch MED-EL did not share a price, MRI details or a U.S. regulatory plan. Nor did it say whether U.S. insurers would cover the device. The trial results come from small groups over a short period." },
      { question: "Who does the surgery?", answer: "An implant surgeon operates at a hospital, not in our offices. Our part is the testing beforehand and the activation and programming afterward, led by Dr. Dold." }
    ],
    related: [
      { label: "Cochlear Implant Support", href: "/how-we-can-help/cochlear-implants" },
      { label: "When Are Hearing Aids No Longer Enough?", href: "/when-hearing-aids-no-longer-enough-cochlear-implant" },
      { label: "What Is the 60/60 Rule in Audiology?", href: "/what-is-the-60-60-rule-in-audiology" },
      { label: "Comprehensive Hearing Assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Medicare Open Enrollment and Hearing Benefits", href: "/medicare-open-enrollment-hearing-benefits" },
      { label: "Dr. Caitlin Dold", href: "/meet-the-team/caitlin-dold" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" },
      { label: "Hearing but not understanding words", href: "/hear-people-talking-not-understand-words" },
      { label: "Hearing loss in one ear: when to get checked", href: "/one-ear-hearing-loss-when-to-get-checked" },
      { label: "Hearing aid second opinion before an implant", href: "/hearing-aid-second-opinion" }
    ],
    blogMeta: {
      frame: "Industry news explained",
      byline: "Who should ask about a cochlear implant today, and how to find out",
      reviewedBy,
      readTime: "6 min read",
      articleType: "Candidacy guide",
      pullQuote: "TICI UNICO is real, and it is not available in the United States. If hearing aids no longer give you clear speech, the useful step today is an evaluation.",
      keyTakeaways: [
        "Five signs point to a candidacy check: unclear speech in quiet, trouble on the phone, repeats in every setting, a 60 dB HL / 60% screen, and decline despite verified aids.",
        "Dr. Caitlin Dold does candidacy testing and programming here. The surgery is done by an implant surgeon.",
        "TICI UNICO carries a CE Mark for Europe. It lacks FDA approval, has no U.S. date or price, and is not offered here."
      ],
      patientQuestion: "How do I find out if I am a cochlear implant candidate?",
      storyLead: "MED-EL launched an implant with nothing worn outside. Here is how to tell whether any cochlear implant should be on your list.",
      comparisonTable: {
        afterHeading: "Conventional implant and TICI UNICO at a glance",
        caption: "Conventional cochlear implant versus TICI UNICO",
        headers: ["Feature", "Conventional implant", "TICI UNICO"],
        rows: [
          ["Outside parts", "External sound processor, plus a coil held on by a magnet", "None. No processor and no coil on the scalp"],
          ["Microphone", "In the external processor", "Under the skin, roughly 6 millimeters below the surface (IEEE Spectrum)"],
          ["Battery", "In the external processor", "Sits under the skin and cannot be replaced. Reported design target of up to about 40 hours per charge"],
          ["Charging", "Not covered in this article", "Charged through the scalp by a small magnetic unit, the GoPod. MED-EL says hearing continues during charging"],
          ["U.S. status", "Three makers sell systems in the U.S.: Advanced Bionics, Cochlear and MED-EL", "Not FDA-approved and not available. No U.S. date announced"]
        ]
      },
      notify: {
        context: "Notify: TICI UNICO FDA",
        heading: "TICI UNICO is not in the U.S. yet.",
        body: "Get one email the week anything changes.",
        button: "Email me the update"
      },
      sources: [
        { label: "Business Wire: MED-EL launches TICI UNICO", href: "https://www.businesswire.com/news/home/20260929847077/en/MED-EL-Launches-TICI-UNICO-the-Worlds-First-and-Only-Totally-Invisible-Cochlear-Implant" },
        { label: "IEEE Spectrum: Fully implantable cochlear implant", href: "https://spectrum.ieee.org/fully-implantable-cochlear-implant" },
        { label: "Hearing Practitioner News: MED-EL launches world-first invisible cochlear implant", href: "https://hearingpractitionernews.com.au/hearing-milestone-med-el-launches-world-first-invisible-cochlear-implant-tici-unico/" },
        { label: "MED-EL: 2025 TICI feasibility study results", href: "https://www.medel.com/press-room/press-details/2025/02/06/the-future-of-cochlear-implants--promising-feasibility-study-results-for-med-el-s-totally-implantable-cochlear-implant-(tici)" }
      ]
    }
  },
  {
    // reviewedBySlug intentionally unset until a clinician reviews this page
    path: "/samsung-galaxy-buds-hearing-aid-feature",
    title: "Samsung Galaxy Buds Are Becoming Hearing Aids: What Patients Ask Us",
    metaTitle: "Samsung Galaxy Buds Hearing Aid: Your Questions Answered",
    metaDescription: "Samsung's Galaxy Buds are getting an FDA-cleared hearing aid feature. Patient questions, a buying checklist and a safe trial plan. Ask us first.",
    h1: "Samsung Galaxy Buds Are Becoming Hearing Aids: What Patients Ask Us",
    heroImage: { src: "/assets/news/samsung-galaxy-buds-hearing-aid-feature.png", alt: "Comparison of OTC earbud hearing aids and prescription hearing aids by who they suit, how they are fitted and what follow-up care is included" },
    ogImage: { src: "/assets/og/samsung-galaxy-buds-hearing-aid-feature.png", alt: "Galaxy Buds Are Becoming Hearing Aids: what the FDA clearance means. Audiology Associates of Westchester." },
    ogTitle: "Samsung Galaxy Buds Are Becoming Hearing Aids",
    ogDescription: "The FDA cleared a hearing aid feature for Galaxy Buds3 Pro and Buds4 Pro. Here is what it can and cannot do.",
    sections: ["Hearing Technology", "Patient questions", "Audiologist perspective", "Frequently asked questions"],
    body: [
      "Ever since Samsung's August 11, 2026 announcement, patients have asked us one thing: can my earbuds now do a hearing aid's job? Per Samsung, the FDA has cleared two features for the Galaxy Buds3 Pro and Buds4 Pro, a hearing test and a hearing aid mode. A software update is planned for the last three months of 2026 in the U.S. and other approved markets.",
      "As of September 30, 2026, we cannot confirm that the update has reached phones. Ask Samsung for the current timing before you build plans around it. Below you will find the questions we hear most, a checklist for before you spend money, and a way to try the feature without putting your hearing at risk.",
      "Is this a real hearing aid?",
      "The clearance covers two features. The Hearing Test runs about five minutes, checks one ear at a time with pure tones, and ends in an audiogram. It is registered as Software as a Medical Device. The Hearing Aid feature uses that result to shape amplification, and it was cleared through the FDA's over-the-counter route, the same route as OTC hearing aids in stores. Samsung positions it for adults 18 and older who notice mild to moderate loss, and says it is no stand-in for professional diagnosis.",
      "What do I need to use it?",
      "To use it you need Galaxy Buds3 Pro or Buds4 Pro, a Galaxy phone that qualifies, and the update itself. Samsung's announcement lists One UI 9 or later, though some outlets wrote One UI 8. Samsung's footnote for your region is the tiebreaker. Samsung adds that availability shifts with market, model and paired device.",
      "How does it decide what I hear?",
      "Once the test is done, the app files your result as normal or as one of four loss stages. NAL-NL2 then sets the amplification. That is the formula from Australia's National Acoustic Laboratories that many clinics apply to prescription aids. Beamforming microphones favor what is in front of you, and noise reduction targets speech. Wareable says the audiogram is saved in Samsung Health.",
      "Are the published numbers good?",
      "audioXpress, quoting Samsung, gives a maximum output of about 111.9 dB SPL, full-on gain of about 31.5 dB, a range of roughly 100 to 9,000 Hz and about 2.7 milliseconds of delay. Samsung's 30-day study of 103 adults with mild to moderate loss found that people who fit it themselves reported benefit that was not worse than clinic-fitted users. A separate 367-person check put the app test a median of 3.75 dB from clinic audiometry. All of this is Samsung's data, relayed by others, and no independent bench tests have reached us.",
      "Where will earbuds fall short?",
      "A living-room test of five minutes cannot spot earwax, a middle-ear problem, or an imbalance between the ears that calls for a doctor. The output also tops out. We read gain near 31.5 dB as a hint that people at the upper end of moderate loss could run short of power at some pitches. Tips that seal the canal can alter how your own voice sounds. And no one measures what reaches your eardrum or retunes the fit afterward. HearingTracker's roundup of recent studies found that real-world gain can fall short of targets.",
      "Earbuds or prescription hearing aids: which fits whom?",
      "Neither wins for everyone. The table lays out the main differences, based only on what this page reports.",
      "What about AirPods Pro?",
      "Apple authorized its AirPods Pro hearing aid feature in September 2024, with a similar recipe: test, self-fit, amplify in the earbuds. Samsung's version serves Android users. No independent head-to-head test has come to our attention, so the simplest tiebreaker is the phone in your pocket.",
      "A checklist before you spend money",
      "Check 1: Confirm that you own, or plan to buy, Galaxy Buds3 Pro or Buds4 Pro, plus a Galaxy phone that qualifies. Check 2: Read Samsung's note for your region and confirm the update is live. Check 3: Rule out the red flags. Sudden hearing loss, one ear much worse than the other, dizziness, ear pain or drainage, ringing in one ear only, and trouble with words that are loud enough all call for an evaluation first. Check 4: If your current hearing aids are working, talk to us before you set them aside. Check 5: Keep in mind that the earbud price covers a product, not hearing care.",
      "A try-before-you-rely plan",
      "Step 1: Book a hearing evaluation so you have a complete baseline. The app's audiogram is welcome, yet we will run our own testing. Step 2: Start with the setting that frustrates you most, such as conversation at home. Step 3: If words still slip away in quiet rooms, or your own voice sounds blocked, stop leaning on the earbuds and call us. Your needs may go beyond what an OTC device is built for. Step 4: Keep your evaluation results. They stay useful whichever device you pick.",
      "Does Medicare cover it?",
      "As a rule, Original Medicare pays for neither hearing aids nor OTC earbuds. Some Medicare Advantage plans add a hearing or OTC allowance, with rules that differ by plan. Open enrollment ends December 7, so look at our Medicare open enrollment page before you buy.",
      "Status and last update",
      "Last updated September 30, 2026. This is the page's first version. We will revise it once Samsung's rollout is live or independent test results appear.",
      "Medical information notice",
      "This page is general information, not medical advice. The price of earbuds is the price of a product, not of hearing care. Not sure an OTC device will be enough? Book a hearing evaluation."
    ],
    faqs: [
      { question: "Can the Galaxy Buds hearing test replace a hearing evaluation?", answer: "No. A five-minute app test cannot detect earwax, a middle-ear problem or an imbalance between your ears that a doctor should see. A full evaluation examines your hearing far more completely." },
      { question: "I already wear hearing aids. Should I switch to the earbuds?", answer: "Not without talking to us first. Prescription aids are programmed from a complete evaluation and checked with real-ear measurement. The earbuds are built for loss that people perceive as mild to moderate." },
      { question: "How accurate is the app's hearing test?", answer: "In Samsung's 367-person validation, the app's results sat a median of 3.75 dB from clinic audiometry. Samsung supplied that figure and others relayed it. Independent testing has not come to our attention." },
      { question: "Why might my own voice sound odd with earbuds in?", answer: "Tips that seal the ear canal can change how your own voice sounds. If that bothers you, let us know." },
      { question: "What if I hear worse in just one ear?", answer: "Get evaluated before you rely on an app. Prescription hearing aids cover one-sided loss and complex cases, while the earbuds target perceived mild to moderate loss." },
      { question: "Will Medicare or my plan pay for Galaxy Buds?", answer: "Usually not under Original Medicare, which covers neither hearing aids nor OTC earbuds. Certain Medicare Advantage plans add a hearing or OTC allowance, and the rules vary. Ask your plan before you buy." }
    ],
    related: [
      { label: "Prescription vs. OTC Hearing Aids", href: "/prescription-vs-otc-hearing-aids" },
      { label: "Auracast and Hearing Aids Explained", href: "/auracast-hearing-aids-explained" },
      { label: "Nuance Audio Plus vs. Meta Glasses", href: "/nuance-audio-plus-vs-meta-glasses" },
      { label: "Medicare Open Enrollment and Hearing Benefits", href: "/medicare-open-enrollment-hearing-benefits" },
      { label: "The Invisible Cochlear Implant (TICI UNICO)", href: "/invisible-cochlear-implant-med-el-tici-unico" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" },
      { label: "Auracast goes live in a US theater", href: "/auracast-goes-live-in-a-us-theater" },
      { label: "AirPods as hearing aids", href: "/airpods-as-hearing-aids" },
      { label: "Bluetooth hearing aids: what to know before buying", href: "/bluetooth-hearing-aids-before-buying" },
      { label: "Hearing aid brands we fit", href: "/hearing-aids-brands" },
      { label: "Meta glasses hearing aid feature: should you try it?", href: "/meta-glasses-hearing-aid-feature" },
      { label: "Elehear Beyond 2 Pro vs. prescription hearing aids: a Westchester decision guide", href: "/elehear-beyond-2-pro-vs-prescription-hearing-aids" }
    ],
    blogMeta: {
      frame: "Industry news explained",
      byline: "Patient questions about Samsung's FDA-cleared earbud hearing aid feature",
      reviewedBy,
      readTime: "6 min read",
      articleType: "Patient questions",
      pullQuote: "The earbuds may be a good first step for mild loss. A five-minute app test is not a hearing evaluation.",
      keyTakeaways: [
        "Two features got FDA clearance for Galaxy Buds3 Pro and Buds4 Pro: a Hearing Test and a Hearing Aid mode. Samsung plans a Q4 2026 update, and we cannot yet confirm it is live.",
        "Adults 18 and older with mild to moderate loss are the target. Sudden loss, one-sided loss, dizziness or ear pain call for an evaluation first.",
        "Work through the checklist, then test it in one everyday setting. If words still slip away in quiet rooms, book a visit."
      ],
      patientQuestion: "Can my Samsung Galaxy Buds replace a hearing aid?",
      storyLead: "Patients keep asking whether Samsung's earbuds are now hearing aids. Here are the answers, plus a checklist and a safe way to try them.",
      comparisonTable: {
        afterHeading: "Earbuds or prescription hearing aids: which fits whom?",
        caption: "OTC earbud hearing aids compared with prescription hearing aids",
        headers: ["Question", "OTC earbuds (Galaxy Buds)", "Prescription hearing aids"],
        rows: [
          ["Who it suits", "Adults who perceive mild to moderate loss", "Mild through profound loss, including one-sided loss and complex cases"],
          ["How it is fitted", "Self-fitted from an app test", "Programmed from the results of a complete evaluation"],
          ["Verification", "No one verifies what reaches your eardrum", "Checked with real-ear measurement"],
          ["Follow-up care", "You adjust settings yourself", "The clinic fine-tunes, cleans and repairs"],
          ["Extras", "Music and calls. The Buds4 line also adds Bluetooth LE Audio and Auracast, says audioXpress", "Not compared here. Ask your audiologist which features fit your needs"]
        ]
      },
      notify: {
        context: "Notify: Samsung Galaxy Buds hearing aid update",
        heading: "Get one email when Samsung's update goes live.",
        body: "Leave your email and we will send one message when the rollout is confirmed.",
        button: "Email me the update"
      },
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
    // reviewedBySlug intentionally unset until a clinician reviews this page
    path: "/medicare-open-enrollment-hearing-benefits",
    title: "Medicare Open Enrollment 2027: How to Read Your Plan for Hearing Benefits",
    metaTitle: "Medicare Open Enrollment 2027: Read Your Hearing Benefits",
    metaDescription: "Holding your Annual Notice of Change? Five hearing checks to make before December 7, and what to ask your plan and us. Call us with your plan name.",
    h1: "Medicare Open Enrollment 2027: How to Read Your Plan for Hearing Benefits",
    heroImage: { src: "/assets/news/medicare-open-enrollment-hearing-benefits.png", alt: "Timeline of Medicare dates: Annual Notice of Change in September, open enrollment October 15 to December 7, new plans start January 1, 2027, and the Medicare Advantage window from January 1 to March 31" },
    ogImage: { src: "/assets/og/medicare-open-enrollment-hearing-benefits.png", alt: "Medicare Open Enrollment 2027: 5 hearing benefit checks before December 7. Audiology Associates of Westchester." },
    ogTitle: "Medicare Open Enrollment 2027: Hearing Checks",
    ogDescription: "Five hearing benefit checks to do before December 7.",
    sections: ["Hearing Insurance", "Plan walkthrough", "Audiologist perspective", "Frequently asked questions"],
    body: [
      "Is your plan's Annual Notice of Change on the kitchen table? This page takes you through its hearing lines, with readers in Westchester and the Hudson Valley in mind. You will see what to put to your plan and what to put to us.",
      "Nobody outside your plan can say exactly what it pays. Benefits differ from county to county, and your plan's own paperwork has the final word. Treat this page as general background, not insurance advice. The five checks below help you read that paperwork before open enrollment closes on December 7, 2026.",
      "Where Medicare stands on hearing",
      "Parts A and B of Original Medicare leave out hearing aids, fittings and routine hearing exams. Medicare Advantage plans stand in for Original Medicare and may add benefits, and hearing is among the most frequent additions. Cochlear implants are the one exception. Medicare can pay for an implant once Medicare's criteria are met, a very different situation from hearing aids. Our cochlear implant page describes the evaluation.",
      "Original Medicare and Medicare Advantage side by side",
      "Here is how the two routes compare for hearing, limited to what this page says. Your plan's documents settle the details.",
      "The dates, in one place",
      "The Annual Enrollment Period runs October 15 to December 7, 2026, with changes starting January 1, 2027. During it you can move to a different Medicare Advantage plan, go between Original Medicare and Medicare Advantage, or alter your Part D drug coverage. From January 1 to March 31, 2027 there is one more window, but only for people already in a Medicare Advantage plan, and it permits a single change. Think of it as a safety net, not a strategy.",
      "Check 1: Find the hearing lines in your notice",
      "Every fall, usually by the end of September, your plan mails the Annual Notice of Change. It spells out what shifts next year in premiums, copays, networks and extra benefits. Turn to the hearing section first and mark any change to the hearing aid allowance, the number of exams or the covered brands. If the wording is unclear or the notice never arrived, phone the number on your plan card.",
      "Check 2: Put four questions to your plan",
      "Ask your plan for the size of the allowance, whether it pays for one hearing aid or two, how often it renews, and which brands and models qualify. Some plans run hearing benefits through a separate hearing benefit manager, so find out who runs yours. A big allowance limited to a few devices can be worth less than a modest one that fits the hearing aids you need. Also ask about any spending card or over-the-counter benefit. Can it pay for OTC hearing aids, accessories, or earbuds with a hearing feature, such as the coming Samsung Galaxy Buds update? Rules vary widely, so ask for the answers in writing.",
      "Check 3: Ask us if we are in your network",
      `Whether we are in network changes your bill, and a practice that accepts your plan for one service may sit outside it for hearing aids. Phone ${primaryPhone} with the plan name and your member number. We will tell you if Audiology Associates of Westchester is in network. If we are not, we will say so plainly and go over your options.`,
      "Check 4: Clarify exams and referrals",
      "Routine hearing exams fall outside Original Medicare. A diagnostic hearing or balance exam is generally covered when a doctor orders it to plan treatment, and you typically pay a share. Medicare Advantage plans frequently include routine exams, though some ask for a primary care referral or cap the visits. Find out whether you need a referral and how many exams each year the plan allows.",
      "Check 5: Plan around January 1",
      "Plans commonly reset benefits on January 1, and an allowance or exam count that renews yearly generally does not roll over unused 2026 benefits. If a hearing test has been on your to-do list, use 2026 benefits before they expire, then look at what 2027 brings. Thinking of switching? Ask whether the new plan covers service and repairs for the hearing aids you wear now.",
      "What CMS expects nationally",
      "On September 28, 2026, CMS published its 2027 projections. It expects the average Medicare Advantage premium to fall from about $14.37 to about $12 a month, roughly eight in ten members to keep their plan at the same or a lower premium, and extras such as hearing to hold steady. Those are national averages. Networks, allowances and copays can still change, and some plans withdraw from counties each year.",
      "Status and last update",
      "Last updated September 30, 2026. This is the page's first version. We will revise it when CMS publishes final landscape data. For your own plan, rely on your Annual Notice of Change, your plan's member services and Medicare.gov.",
      "Insurance and medical notice",
      "This page offers general information, not insurance, legal or medical advice. Benefits, allowances and networks differ by plan and county, so confirm with your plan or Medicare.gov before you decide."
    ],
    faqs: [
      { question: "My notice's hearing section is vague. What should I do?", answer: "Phone the number on your plan card and ask for a plain explanation of the allowance, the exam count and the covered brands. Request the answers in writing if possible. What governs is your plan's paperwork." },
      { question: "Can I keep my audiologist if I change plans?", answer: "Whether we are in your network changes what you pay. Phone us with your plan name and member number and we will confirm. If we are out of network, we will tell you and walk through alternatives." },
      { question: "Do I lose unused hearing benefits on January 1?", answer: "Many plans start fresh on January 1, and unused 2026 benefits generally do not carry over. Check your own plan's rules. If a hearing test is overdue, use 2026 benefits first." },
      { question: "Does Medicare cover cochlear implants?", answer: "Yes, when Medicare's criteria are met. That is a separate matter from hearing aids, which Original Medicare leaves out. Our cochlear implant page covers the evaluation." },
      { question: "Can a Medicare Advantage plan pay for OTC hearing aids or earbuds?", answer: "Some plans give a spending card or an over-the-counter benefit. Ask if it reaches OTC hearing aids, accessories or earbuds with a hearing feature. Rules vary widely, so get the answer in writing." },
      { question: "What if I miss the December 7 deadline?", answer: "Members already in Medicare Advantage get another window, January 1 to March 31, 2027, with one change allowed. Consider it a safety net only." }
    ],
    related: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Comprehensive Hearing Assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "Samsung Galaxy Buds Hearing Aid Feature", href: "/samsung-galaxy-buds-hearing-aid-feature" },
      { label: "The Invisible Cochlear Implant (TICI UNICO)", href: "/invisible-cochlear-implant-med-el-tici-unico" },
      { label: "Does Insurance Cover Hearing Aids or Hearing Tests?", href: "/does-insurance-cover-hearing-aids-tests" },
      { label: "Prescription vs. OTC Hearing Aids", href: "/prescription-vs-otc-hearing-aids" },
      { label: "Cochlear Implant Support", href: "/how-we-can-help/cochlear-implants" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" },
      { label: "Employer and union hearing aid benefits in Westchester", href: "/employer-union-hearing-aid-benefits-westchester" }
    ],
    blogMeta: {
      frame: "Plan guide",
      byline: "A walkthrough of your plan notice, for hearing benefits",
      reviewedBy,
      readTime: "6 min read",
      articleType: "Plan walkthrough",
      pullQuote: "Your own plan documents have the final say on hearing coverage. Read the notice before December 7.",
      keyTakeaways: [
        "Annual Enrollment runs October 15 to December 7, 2026. New plan terms begin January 1, 2027.",
        "Original Medicare leaves out hearing aids. Medicare Advantage plans often add some hearing care, with amounts and rules that vary by plan and county.",
        "Put the allowance, exams and referrals to your plan, and ask us whether we are in your network."
      ],
      patientQuestion: "How do I read my plan notice for hearing benefits before open enrollment ends?",
      storyLead: "If your Annual Notice of Change is in hand, here is how to find the hearing lines and what to ask.",
      comparisonTable: {
        afterHeading: "Original Medicare and Medicare Advantage side by side",
        caption: "Hearing coverage: Original Medicare versus Medicare Advantage",
        headers: ["Hearing item", "Original Medicare (Parts A and B)", "Medicare Advantage"],
        rows: [
          ["Hearing aids and fittings", "Not covered", "Many plans include some coverage. Your plan sets the amount and the rules"],
          ["Routine hearing exams", "Not covered", "Often included, though some plans want a referral or cap visits"],
          ["Diagnostic hearing or balance exams", "Covered in general when a doctor orders it as part of treatment planning. You typically pay a share", "Depends on your plan. Ask member services"],
          ["Extras", "None added. Benefits are added by Medicare Advantage plans", "Plans can add benefits, such as a spending card or over-the-counter benefit. Rules vary by plan"]
        ]
      },
      sources: [
        { label: "AHA: CMS projects decline in MA, small increase in standalone Part D premiums for 2027", href: "https://www.aha.org/news/headline/2026-09-29-cms-projects-decline-ma-small-increase-standalone-part-d-premiums-2027" },
        { label: "Becker's Payer: CMS projects lower Medicare Advantage premiums for 2027", href: "https://www.beckerspayer.com/payer/medicare-advantage/cms-projects-lower-medicare-advantage-premiums-flat-enrollment-for-2027/" },
        { label: "Medicare.gov: Medicare and you", href: "https://www.medicare.gov/" }
      ]
    }
  },
  {
    // reviewedBySlug intentionally unset until a clinician reviews this page
    path: "/hearing-glasses-comparison",
    title: "Hearing Glasses in 2026: Legato Frames vs. Nuance Audio Plus vs. Prescription Hearing Aids",
    metaTitle: "Hearing Glasses Compared: Legato vs Nuance vs Hearing Aids",
    metaDescription: "Two hearing glasses launched in one week. Compare Legato Frames, Nuance Audio Plus and prescription hearing aids, and see who should test first.",
    h1: "Hearing Glasses in 2026: Legato Frames vs. Nuance Audio Plus vs. Prescription Hearing Aids",
    heroImage: { src: "/assets/hearing-care-options-reviewing-paperwork.png", alt: "Adult weighing hearing glasses against prescription hearing aids before choosing" },
    ogImage: { src: "/assets/og/hearing-glasses-comparison.png", alt: "Hearing glasses compared in 2026: Legato, Nuance Audio Plus and hearing aids. Audiology Associates of Westchester." },
    ogTitle: "Hearing Glasses Compared in 2026",
    ogDescription: "Legato Frames, Nuance Audio Plus and prescription hearing aids, side by side, with who each one tends to suit.",
    sections: ["Hearing Technology", "Buyer decision guide", "Comparison", "Frequently asked questions"],
    body: [
      "Two pairs of hearing glasses reached the market within three days of each other. EssilorLuxottica announced Nuance Audio Plus on September 29, 2026, and Boston-based Legato began selling Legato Frames on October 1. Until now, hearing glasses were a curiosity. With two launches in one week, patients are asking us which pair to buy and whether either one replaces a hearing aid.",
      "This page is a buyer's guide, not a verdict. No independent lab has tested the two pairs against each other, so we do not name a winner. We describe who each one tends to suit, set them next to prescription hearing aids, and say who should skip all three and have their hearing measured first. We do not sell either pair of glasses.",
      "Why hearing glasses suddenly exist",
      "The FDA created the over-the-counter hearing aid category in 2022 for adults with perceived mild to moderate loss. That opened the door to products sold outside a hearing clinic, and eyewear is a natural fit. Most people who need help with hearing do not have it. By Legato's count, roughly 50 million US adults live with hearing loss, and around 80 percent of the people who could benefit use no device, which the company blames on stigma, cost and comfort. That figure is Legato's, but the pattern behind it matches what we hear from patients every week. Glasses attack the stigma problem directly, because the device looks like something people already wear. They also change who sells hearing help. Both products are sold through eyecare channels, and Legato says purchases through eyecare providers will often be eligible for vision insurance. That is a different path from a hearing clinic, and it is the reason the category deserves attention now.",
      "Legato Frames, Nuance Audio Plus and hearing aids at a glance",
      "The table below sets the three options side by side. The glasses columns come from what each company says about its own product. The hearing aid column describes a device that a clinic fits and verifies. Prices are US starting prices, and lenses and care plans change the final number.",
      "Legato Frames in depth",
      "On Legato Frames, the microphones, processors and speakers all sit in the arms. Legato calls its processing SpeechSense, a neural network that runs on the glasses and tries to separate speech from background noise. Legato says nothing is processed off the device, and that the glasses have no camera and do not record. Open-ear speakers mean nothing goes into your ear canal. The company says HearAdvisor, an independent lab, scored the glasses 4.6 out of 5 and placed them in its top 10 devices, which is a strong first result and also one lab's standard test, not a promise about your ears. There are three frames. Aria is a browline style at 142 mm, Symphony is a narrow 134 mm, and Harmony comes in 140 mm and 145 mm. Symphony and Harmony start at $999 and Aria at $1,099, with prescription lenses extra. Legato rates the battery at 10 to 12 hours of hearing use. It offers a 45-day money-back guarantee, free lifetime support from its own audiologists and product specialists, and an optional $199 Legato Care plan that extends the one-year warranty to three years. California Hearing Center, our sister practice, covers the launch in more detail in its Legato Frames explainer.",
      "Nuance Audio Plus in depth",
      "Nuance Audio Plus is the second generation of hearing glasses from EssilorLuxottica, the eyewear group behind Ray-Ban and Oakley. It starts at $829 in the US, depending on the lenses, and the first-generation glasses remain on sale at $699. The company says Plus adds directional microphones with beamforming, two listening modes called Frontal and All-Around, about 10 hours of battery and hands-free calls with a compatible iPhone. It comes in three shapes, Square, Panthos and Upturn, and five colors, and it accepts prescription lenses. EssilorLuxottica sells through optical and hearing care professionals as well as online, and reports describe a rollout reaching about 18,000 stores in 14 countries. That reach is the company's real advantage, because a pair of glasses can be fitted and adjusted where people already buy eyewear. The first-generation glasses scored well on speech in noise in HearingTracker's lab testing but poorly on feedback, the whistling that comes from open speakers. We have not seen independent lab results for Plus, so claims about its improvements remain the company's own.",
      "The honest trade-offs",
      "All open-ear glasses share a physical limit. With nothing in the ear canal, sound leaks out of the speaker and background noise reaches your ear untouched, so amplification is limited, especially for low pitches. That suits mild loss and strains as loss deepens. Both products are self-fit through a phone app, and neither one measures what reaches your eardrum, which a clinic does with real-ear verification. You also wear their frames. If a frame style does not suit your face, or your eyeglass prescription changes, the hearing hardware is tied to that decision. And both rely on your own sense of your hearing, since nobody checks that your loss is mild before you buy. None of that makes the glasses a bad idea. It means they are a trade, and the trade is more comfortable and less visible in exchange for less precision.",
      "The stigma question: Lyric or glasses",
      "Lyric and hearing glasses answer the same problem with opposite philosophies. Lyric is an extended-wear hearing aid that a trained professional places deep in the ear canal, designed to stay out of sight and to be worn continuously between office visits. Its answer to stigma is to hide the device. Hearing glasses answer it by making the device a style choice that people choose and show. Lyric is not right for every ear canal or every hearing loss, and it needs a consultation to find out. Glasses need no consultation, but they suit a narrower range of loss. A patient who wants no one to know they use hearing help may prefer Lyric if their ears and loss allow it. A patient who already wears glasses all day, has mild loss and likes the idea of one device may prefer glasses. Neither choice is more honest or more modern. They suit different people, and a hearing test is how you find out which group you are in.",
      "Who should skip all three and get tested first",
      "See a hearing professional or a physician before buying any hearing device, glasses included, if your hearing dropped suddenly, if one ear is clearly worse than the other, if you have dizziness or vertigo, ear pain or drainage, or ringing in one ear only, or if you can hear people talking but cannot make out the words. Severe to profound loss is outside what open-ear glasses can do, whatever the marketing suggests. Those signs point to causes that no device fixes, and some need prompt medical attention. Outside those red flags, a hearing evaluation still tells you the degree and shape of your loss, how your two ears compare, and how well you understand speech. That is what lets you judge any product, including these.",
      "How we would choose",
      "If you have mild loss, already wear glasses every day, and are comfortable with a phone app, hearing glasses are worth a try. Take a baseline hearing test first, ask about the return window before you pay, and keep your results. Legato's 45-day money-back guarantee is a real safety net for that approach. Ask any seller of Nuance Audio Plus about its return terms in the same way. If your loss is moderate or worse, uneven between the ears, or comes with other symptoms, begin with a professional evaluation, because the answer may be a fitted hearing aid. Not sure which category you belong in? A hearing evaluation answers that in one visit, at our Harrison or Somers office, and we go through your results with you whichever route you pick.",
      "Status and last update",
      "Last updated October 5, 2026. Change note: this is the first version, so nothing has changed yet. We will update this page when independent video reviews appear, when US retail reviews of Nuance Audio Plus land, when Legato announces its eyecare provider rollout, or when either product changes price or FDA status. Prices and specifications come from the companies and from news reports. Sources are listed at the end of this page.",
      "Medical information notice",
      "This page is for information only and is not medical advice. Hearing aids and hearing glasses do not suit everyone, and a hearing evaluation is the way to find out what suits you."
    ],
    faqs: [
      { question: "Which hearing glasses are better, Legato or Nuance Audio Plus?", answer: "Nobody can say yet. No independent lab has tested them against each other, and we have not seen lab results for Nuance Audio Plus at all. Choose by frame style, price, return terms and how the glasses feel on your face, and get a hearing test before you buy either." },
      { question: "Can hearing glasses replace my hearing aids?", answer: "For most people who already wear hearing aids, no. Glasses are open-ear and self-fit, and they are meant for mild to moderate loss. Hearing aids that were programmed and checked for your loss give you more precision than glasses can." },
      { question: "Why are hearing glasses cheaper than hearing aids?", answer: "Part of the answer is what the price includes. What you pay for a fitted hearing aid also buys the hearing test, the programming, the verification and the follow-up visits, while glasses are self-fit and support comes from the seller. The device itself is only part of the difference." },
      { question: "Do hearing glasses work for severe hearing loss?", answer: "No. Both products are cleared for mild to moderate loss, and an open-ear design cannot deliver the amplification that severe loss needs. If you struggle to follow a conversation in a quiet room, get tested first." },
      { question: "Can I get my own prescription lenses in them?", answer: "Yes, for both. Legato offers Pentax prescription lenses from -10.0 to +5.0, plus progressive readers from +1.0 to +3.0, and Nuance Audio Plus accepts prescription lenses too. Lenses add to the price, so your lens setup decides your final cost." },
      { question: "What happens if my hearing gets worse?", answer: "The hearing hardware sits in the frame, so you cannot upgrade it without changing the glasses. If your hearing drops, the next step is usually a prescription hearing aid. A baseline test now gives you a record to compare against, and sudden change needs prompt medical care, not a new gadget." }
    ],
    related: [
      { label: "Hearing Aid Glasses in 2026", href: "/hearing-aid-glasses-2026" },
      { label: "Nuance Audio Plus vs. Meta Glasses", href: "/nuance-audio-plus-vs-meta-glasses" },
      { label: "Meta Glasses Hearing Aid Feature", href: "/meta-glasses-hearing-aid-feature" },
      { label: "Lyric Invisible Hearing", href: "/lyric-invisible-hearing" },
      { label: "OTC vs Prescription Hearing Aids", href: "/otc-vs-prescription-hearing-aids-real-world" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" },
      { label: "Elehear Beyond 2 Pro vs. prescription hearing aids: a Westchester decision guide", href: "/elehear-beyond-2-pro-vs-prescription-hearing-aids" }
    ],
    blogMeta: {
      frame: "Buyer decision guide",
      byline: "A buyer's guide to the two hearing glasses launched in one week",
      reviewedBy,
      readTime: "8 min read",
      articleType: "Buyer decision guide",
      pullQuote: "Lyric hides the device. Hearing glasses turn it into a style choice. A hearing test tells you which of those is even on the table.",
      keyTakeaways: [
        "Two over-the-counter hearing glasses launched in one week: Nuance Audio Plus from $829 and Legato Frames from $999. Both are self-fit and open-ear, for adults with mild to moderate loss.",
        "No independent test has compared them, so we describe who each suits and name no winner.",
        "Hearing glasses and Lyric answer the same stigma problem in opposite ways. A hearing test shows which route fits your hearing, or whether any of them does."
      ],
      patientQuestion: "Which hearing glasses should I choose, or should I stay with hearing aids?",
      storyLead: "Two pairs of hearing glasses launched in one week. Here is how they compare with each other and with hearing aids, and who should test first.",
      comparisonTable: {
        afterHeading: "Legato Frames, Nuance Audio Plus and hearing aids at a glance",
        caption: "Legato Frames, Nuance Audio Plus and prescription hearing aids compared",
        headers: ["", "Legato Frames", "Nuance Audio Plus", "Prescription hearing aids"],
        rows: [
          ["Price", "From $999 (Symphony, Harmony) or $1,099 (Aria). Lenses extra", "From $829, depending on lenses. First generation stays on sale at $699", "Varies by device and clinic. Includes testing, fitting and follow-up"],
          ["FDA status", "FDA-regulated OTC hearing aid, per Legato", "FDA-cleared, per EssilorLuxottica", "Fitted by a hearing professional"],
          ["Who it is for", "Adults with mild to moderate loss", "Adults with perceived mild to moderate loss", "Mild to profound loss, including one-sided loss"],
          ["Battery", "10 to 12 hours of hearing use, per Legato", "About 10 hours, per the company", "Varies by model"],
          ["Styles", "Three frames: Aria, Symphony, Harmony", "Three frames: Square, Panthos, Upturn, in five colors", "Many styles, including invisible devices such as Lyric"],
          ["Where to buy", "legatohearing.com, with select eyecare providers coming", "Optical and hearing care professionals, and online", "Hearing clinics such as ours"],
          ["Professional support", "Lifetime support from Legato's own audiologists and specialists at no charge, per Legato", "Depends on the seller", "Fitting, adjustments, cleaning and repairs at the clinic"],
          ["Fitting and verification", "Self-fit in an app. No real-ear verification", "Self-fit in an app. No real-ear verification", "Programmed to your test results and checked with real-ear measurement"]
        ]
      },
      notify: {
        context: "Notify: Hearing glasses comparison updates",
        heading: "Get one email when something changes.",
        body: "We will send one email when independent reviews appear or when Legato names its eyecare provider rollout.",
        button: "Notify me"
      },
      sources: [
        { label: "Legato: Frames are now available in the U.S. (GlobeNewswire)", href: "https://www.globenewswire.com/news-release/2026/10/01/3372968/0/en/legato-frames-the-world-s-first-ai-based-hearing-glasses-are-now-available-in-the-u-s.html" },
        { label: "Legato Hearing", href: "https://www.legatohearing.com/" },
        { label: "Mixed-News: Legato Frames pricing and specifications", href: "https://mixed-news.com/en/legato-frames-ai-hearing-glasses-999-dollars-bose-frames-founder/" },
        { label: "audioXpress: Legato Frames combine AI speech enhancement with open-ear hearing assistance", href: "https://audioxpress.com/news/legato-frames-combine-ai-speech-enhancement-with-open-ear-hearing-assistance" },
        { label: "Hearing Review: Legato Frames now available in the U.S.", href: "https://hearingreview.com/hearing-products/hearing-aids/otc/legato-frames-now-available-in-the-us-combining-ai-hearing-technology-with-prescription-eyewear" },
        { label: "EssilorLuxottica: Nuance Audio Plus announcement", href: "https://www.prnewswire.com/news-releases/essilorluxottica-unveils-nuance-audio-plus-the-next-generation-of-hearing-glasses-302891793.html" },
        { label: "HearingTracker: EssilorLuxottica Launches Nuance Audio Plus", href: "https://www.hearingtracker.com/news/essilorluxottica-launches-nuance-audio-plus-hearing-glasses" },
        { label: "HearingTracker: Nuance Audio Glasses, Audiologist and Lab Tested", href: "https://www.hearingtracker.com/hearing-aids/nuance-audio-glasses-audiologist-and-lab-tested" },
        { label: "Particle: EssilorLuxottica launches FDA-cleared Nuance Audio Plus", href: "https://particle.news/story/essilorluxottica-launches-fdacleared-nuance-audio-plus-hearing-glasses" },
        { label: "FDA 510(k): Nuance Audio Hearing Aid Software", href: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K243150" },
        { label: "California Hearing Center: Legato Frames explainer", href: "https://www.calhearing.com/legato-frames-ai-hearing-glasses/" }
      ]
    }
  },
  {
    path: "/hearing-aid-cost-westchester-county",
    title: "How Much Do Hearing Aids Cost in Westchester County?",
    metaTitle: "Hearing Aid Cost in Westchester, NY (2026 Guide)",
    metaDescription: "Hearing aids run about $200 to $8,000+ a pair. See what each price includes, Costco vs clinic, and how to compare quotes. Call us for a hearing test.",
    h1: "How Much Do Hearing Aids Cost in Westchester County? (2026 Guide)",
    heroImage: { src: "/assets/blog-seed/photo-v2/hearing-aid-cost-westchester-county-photo-v2.webp", alt: "Comparing hearing aid options and prices before choosing" },
    sections: [
      "Why the range is so wide",
      "Where you buy changes what you get",
      "What a clinic price usually includes",
      "Costco and other retailers",
      "Ways to lower the cost",
      "Questions to ask about any quote"
    ],
    body: [
      "Hearing aids cost about $200 to more than $8,000 a pair. That is a very wide range, and the figures on this page are broad market estimates as of October 2026. They are not our price list. Your audiologist can give you an exact number only after a hearing test, because the right device depends on your hearing loss, your daily life and your budget.",
      "Two terms trip people up. The first is \"per pair\" and \"per device\". Many people with hearing loss need two hearing aids, one for each ear. Some prices you see online are for one device. Always check which one a quote means. The second is \"what is included\". Two quotes with the same number can cover very different amounts of care.",
      "Why the range is so wide",
      "Three things drive most of the difference. The first is the technology level. Higher levels usually add more advanced noise handling, more automatic adjustment and more features such as phone streaming and rechargeable batteries. A quieter lifestyle often does not need the top level. A busy one, with restaurants, meetings and group events, often benefits from a higher one. The second is the style and brand. Small receiver-in-canal devices, custom in-the-ear devices and invisible options are built and priced differently. The third is the care that comes with the device. A hearing aid is a small computer, but it only works well when someone programs it to your hearing and checks the result. That professional work is part of what you pay for at a clinic.",
      "Where you buy changes what you get",
      "The table below compares the three main places people buy hearing aids. The ranges are approximate and change often. Use them to set expectations, then ask for a written quote.",
      "What a clinic price usually includes",
      "At an independent audiology clinic, the price often bundles more than the devices. Ask whether the quote covers a full hearing test, the fitting visit, real-ear measurement, follow-up visits, cleanings and adjustments, a repair warranty, and loss and damage cover. Real-ear measurement uses a thin probe tube in the ear canal to check what the hearing aid delivers at your eardrum. Many audiologists consider it the best way to confirm that a fitting matches your hearing test. It is worth asking any provider whether they do it. Bundled pricing means you pay once and the visits are covered for a set period. Unbundled pricing means you pay for each visit as you go. Neither is wrong. They are different ways to pay, so compare the full cost over the first few years, not just the first number.",
      "Costco and other retailers",
      "Costco and other retail chains can be a sensible choice for some people. They often suit adults with straightforward hearing needs who are happy to choose from a smaller range. Before you decide, ask who will fit the devices and what training they have, whether the fitting is verified in your ear canal, how many follow-up visits are included, and how adjustments work after you buy. Retail prices also change, so check the current price directly with the store. Over-the-counter hearing aids sit at the low end of the range. The FDA created this category for adults who feel they have mild to moderate hearing loss. They need no prescription and no fitting visit. They can be a good start for some people. They do not replace a hearing test, and they will not help if the cause of your hearing problem is wax, an ear infection or another medical issue. A test is the way to find out which group you are in.",
      "Ways to lower the cost",
      "There are several ways to bring the cost down. None of them apply to everyone, so check each one for your own situation. Many Medicare Advantage plans include some hearing benefit. See our page on hearing aid insurance in Westchester and Greenwich for how that works. Some employer plans and some state-regulated plans also help. Veterans may qualify for hearing aids through the VA. Hearing aids are generally an eligible medical expense for a flexible spending account or a health savings account. Ask any provider about payment plans. Last, ask whether a prior-generation or entry-level device would meet your needs. A device does not have to be the newest to work well.",
      "Questions to ask about any quote",
      "Use these questions with every provider, including us. Is the price per pair or per device? What exactly is included, and for how long? Does the fitting include real-ear measurement? How many follow-up visits are covered? What is the trial period, and are there restocking or return fees? Please get the answer in writing. Who will fit my devices, and what are their credentials? Can I use any brand, or only one? What does the warranty cover, and does it cover loss and damage? What happens when I need a repair? If you would like a quote built around your own hearing test, call our Harrison office at (914) 949-0034 or our Somers office at (914) 556-6720. Ask for a written quote so you can compare it at home."
    ],
    faqs: [
      { question: "How much do hearing aids cost in Westchester?", answer: "Hearing aids cost about $200 to more than $8,000 a pair as of October 2026. Over-the-counter devices sit at the low end. Independent clinics sit at the higher end because the price often bundles fitting and follow-up care. Your exact cost depends on your hearing test and the technology you choose." },
      { question: "Is Costco cheaper than a clinic?", answer: "Retail chains such as Costco often have lower sticker prices than independent clinics. The two are not always the same product. Compare who fits the device, whether the fitting is verified, and how many follow-up visits are included. A lower price helps most when the care you need is also included." },
      { question: "Why do hearing aid prices vary so much?", answer: "Price follows technology level, style, brand and the care that comes with the device. A clinic price often includes the hearing test, fitting, verification and follow-up visits. An online or over-the-counter price usually covers the device only." },
      { question: "Are over-the-counter hearing aids as good as prescription ones?", answer: "Over-the-counter devices are made for adults with self-perceived mild to moderate hearing loss. They can help some people. Prescription devices are programmed to your own hearing test and can serve a wider range of hearing loss. A hearing test shows which type suits you." },
      { question: "Do I need a hearing test before I buy hearing aids?", answer: "A test is strongly recommended. It shows the type and level of your hearing loss and can find medical causes such as wax or an ear infection. It also gives you a baseline to compare against later." },
      { question: "Can I get an exact price from Audiology Associates of Westchester?", answer: "Yes. Your audiologist can quote a price after your hearing test. Call Harrison at (914) 949-0034 or Somers at (914) 556-6720, and ask for the quote in writing." }
    ],
    related: [
      { label: "Does Insurance Cover Hearing Aids or Hearing Tests?", href: "/does-insurance-cover-hearing-aids-tests" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Best Hearing Aid at Costco?", href: "/what-is-the-best-hearing-aid-sold-at-costco" },
      { label: "Prescription vs Over-the-Counter Hearing Aids", href: "/prescription-vs-otc-hearing-aids" },
      { label: "Costco Hearing Aids vs Audiologist Care", href: "/costco-hearing-aids-vs-audiologist-care" },
      { label: "Questions to Ask Before Buying Hearing Aids", href: "/questions-before-buying-hearing-aids" },
      { label: "Hearing care across Westchester County", href: "/areas-we-serve/westchester-county-ny" },
      { label: "Hearing aid brands we fit", href: "/hearing-aids-brands" },
      { label: "Hearing aids 101", href: "/hearing-aids-101" },
      { label: "Fortell hearing aids: what is actually known so far", href: "/fortell-hearing-aids-what-we-know" },
      { label: "Employer and union hearing aid benefits in Westchester", href: "/employer-union-hearing-aid-benefits-westchester" },
      { label: "Elehear Beyond 2 Pro vs. prescription hearing aids: a Westchester decision guide", href: "/elehear-beyond-2-pro-vs-prescription-hearing-aids" },
      { label: "The 6 hearing aid platforms of fall 2026, compared", href: "/best-ai-hearing-aids-fall-2026" }
    ],
    blogMeta: {
      frame: "Cost guide",
      byline: "From the audiology desk",
      reviewedBy,
      readTime: "6 min read",
      articleType: "Cost and coverage",
      pullQuote: "Two quotes with the same number can cover very different amounts of care. Compare what is included, not only the price.",
      keyTakeaways: [
        "Hearing aids cost about $200 to $8,000 or more a pair, as of October 2026. These are broad market estimates, not our price list.",
        "Check whether a quote is per pair or per device.",
        "A clinic price often bundles the test, fitting, verification and follow-up visits. A device-only price does not.",
        "Ask for the trial period, return terms and any restocking fee in writing.",
        "A hearing test comes first. It shows what you need and rules out medical causes."
      ],
      patientQuestion: "How much will hearing aids cost me, and what am I paying for?",
      storyLead: "A plain guide to hearing aid prices in Westchester: what drives the range, what each price includes, and what to ask before you buy.",
      comparisonTable: {
        afterHeading: "Where you buy changes what you get",
        caption: "Where people buy hearing aids, with approximate price ranges per pair as of October 2026",
        headers: ["Where you buy", "Approximate price per pair", "Who fits and programs them", "Follow-up care"],
        rows: [
          ["Over-the-counter (online or in a store)", "About $200 to $2,000", "You, using an app", "Usually phone or online support"],
          ["Warehouse club or retail chain", "About $1,500 to $3,500", "Retailer staff. Training varies, so ask", "Varies by retailer. Ask what is included"],
          ["Independent audiology clinic", "About $3,000 to $8,000 or more", "A licensed audiologist", "Often bundled. Confirm in writing"]
        ]
      },
      sources: [
        { label: "FDA: Over-the-Counter Hearing Aids", href: "https://www.fda.gov/medical-devices/hearing-aids/over-counter-hearing-aids" },
        { label: "Medicare.gov: Hearing aids", href: "https://www.medicare.gov/coverage/hearing-aids" },
        { label: "IRS Publication 502: Medical and Dental Expenses", href: "https://www.irs.gov/publications/p502" },
        { label: "American Academy of Audiology", href: "https://www.audiology.org/" }
      ]
    }
  },
  {
    path: "/does-insurance-cover-hearing-aids-tests",
    title: "Does Insurance Cover Hearing Aids or Hearing Tests?",
    metaTitle: "Does Insurance Cover Hearing Aids? NY and CT Guide",
    metaDescription: "Does insurance cover hearing aids? Medicare, Medicare Advantage, NY Medicaid and Connecticut rules explained in plain words. Call us to check your plan.",
    h1: "Does Insurance Cover Hearing Aids or Hearing Tests? A Westchester and Greenwich Guide",
    heroImage: { src: "/assets/blog-seed/photo-v2/does-insurance-cover-hearing-aids-tests-photo-v2.webp", alt: "Reviewing hearing aid insurance coverage options" },
    sections: [
      "Original Medicare",
      "Medicare Advantage",
      "New York Medicaid",
      "Employer and private plans",
      "Greenwich and Connecticut",
      "Veterans",
      "Pay with pre-tax money",
      "How to check your own benefit"
    ],
    body: [
      "Coverage for hearing aids depends on the type of plan you have, the state it comes from, and the provider you see. This page gives the general rules as of October 2026. Plans change every year. Always confirm the details with your plan before you buy. We cannot list every plan we work with on this page, so call us to check before you book.",
      "The sections below explain each plan type in plain words. A summary table sits at the end of the page.",
      "Original Medicare",
      "Original Medicare does not cover hearing aids. It also does not cover routine hearing exams that are done to fit hearing aids. It can cover a diagnostic hearing or balance exam when your doctor orders it to find out whether you need medical treatment. You usually pay part of the cost for that exam. If you are on Original Medicare, plan to pay for hearing aids yourself, or look at the other options on this page.",
      "Medicare Advantage",
      "Many Medicare Advantage plans include some hearing benefit. The benefit varies a lot. Some plans give a set dollar amount toward hearing aids. Some give a set copay per device. Some only work with a specific network of providers. Ask your plan four things. Is a hearing exam covered? What is the dollar amount for hearing aids, and how often does it renew? Which providers or networks can I use? Do I need a referral or approval first? Use the plan's phone number on your member card. During Medicare open enrollment, you can compare hearing benefits between plans before you choose.",
      "New York Medicaid",
      "New York Medicaid can cover hearing aids when they are medically necessary. Rules usually include prior approval, a Medicaid-enrolled provider, and limits on how often you can get new devices. Rules differ between the fee-for-service program and Medicaid managed care plans. Call your plan or the New York State Department of Health to confirm what applies to you. Call us to ask whether we can see you under your plan.",
      "Employer and private plans",
      "Many employer and private plans in New York do not pay for adult hearing aids. Some do, with a dollar limit or a set number of years between devices. A plan that your employer pays for itself, rather than buying from an insurer, often follows federal rules instead of state law. This is one reason two people in the same town can have different coverage. Read your plan summary, or ask your benefits office.",
      "Greenwich and Connecticut",
      "Our offices are in Harrison and Somers, New York. Harrison is the closer office to Greenwich. If you live in Connecticut, your plan may follow Connecticut rules. According to the American Academy of Audiology, a Connecticut law that took effect on January 1, 2020 expanded coverage to adults. It covers one hearing aid per ear every two years on plans regulated by the state. Plans that an employer pays for itself may not follow that law. Ask your plan whether it applies to you, and what the plan pays.",
      "Veterans",
      "Veterans who are enrolled in VA health care may be able to get hearing aids through the VA. Eligibility depends on your service record and your enrollment. Contact the VA to find out what you qualify for. If you choose to buy outside the VA, ask us what we can offer.",
      "Pay with pre-tax money",
      "Hearing aids are generally an eligible medical expense for a flexible spending account (FSA) or a health savings account (HSA). Some people can also deduct medical costs on their taxes when the costs pass a set share of their income. Ask your tax adviser how this applies to you.",
      "How to check your own benefit",
      "Call the number on your insurance card. Ask these questions. Does my plan cover a hearing exam and hearing aids? What is the dollar limit, and how often does it renew? Do I need a referral or prior approval? Is Audiology Associates of Westchester in my network? Write down the date, the name of the person you spoke with and what they said. Then call our Harrison office at (914) 949-0034 or our Somers office at (914) 556-6720, and we will help you with the next step."
    ],
    faqs: [
      { question: "Does Medicare cover hearing aids?", answer: "Original Medicare does not cover hearing aids or routine hearing exams for fitting them. It can cover a diagnostic hearing or balance exam when a doctor orders it. Many Medicare Advantage plans include some hearing benefit, and the details vary by plan." },
      { question: "Does New York Medicaid pay for hearing aids?", answer: "New York Medicaid can cover hearing aids when they are medically necessary. Rules often include prior approval and an enrolled provider. Check with your plan before you book, because rules differ by plan." },
      { question: "Does Connecticut require insurance to cover adult hearing aids?", answer: "According to the American Academy of Audiology, a Connecticut law that took effect on January 1, 2020 expanded coverage to adults, at one hearing aid per ear every two years. It applies to plans regulated by the state. Employer plans that pay claims themselves may be outside it, so ask your plan." },
      { question: "Can I use my FSA or HSA for hearing aids?", answer: "Hearing aids are generally an eligible medical expense for an FSA or HSA. Check your plan's rules, and keep your receipt." },
      { question: "Do you take my insurance?", answer: "Plans and networks change often. Call our Harrison office at (914) 949-0034 or our Somers office at (914) 556-6720 with your plan name and member ID, and we will tell you what applies." },
      { question: "What if my plan does not cover hearing aids?", answer: "You still have options. You can ask about payment plans, a lower technology level, or an over-the-counter device after a hearing test. Our hearing aid cost guide explains what each option includes." }
    ],
    related: [
      { label: "How Much Do Hearing Aids Cost in Westchester County?", href: "/hearing-aid-cost-westchester-county" },
      { label: "Medicare Open Enrollment and Hearing Benefits", href: "/medicare-open-enrollment-hearing-benefits" },
      { label: "Greenwich, CT", href: "/greenwich-ct" },
      { label: "Harrison office", href: "/harrison-ny" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Compare the Harrison and Somers offices", href: "/contact-us" },
      { label: "Hearing care across Westchester County", href: "/areas-we-serve/westchester-county-ny" },
      { label: "What a hearing test costs in Westchester", href: "/how-much-does-a-hearing-test-cost-westchester" },
      { label: "Employer and union hearing aid benefits in Westchester", href: "/employer-union-hearing-aid-benefits-westchester" }
    ],
    blogMeta: {
      frame: "Coverage guide",
      byline: "From the audiology desk",
      reviewedBy,
      readTime: "5 min read",
      articleType: "Cost and coverage",
      pullQuote: "Coverage depends on your plan, your state and your provider. Ask your plan four questions before you buy.",
      keyTakeaways: [
        "Original Medicare does not cover hearing aids.",
        "Many Medicare Advantage plans include some hearing benefit. The amount and the network vary.",
        "New York Medicaid can cover medically necessary hearing aids. Prior approval and an enrolled provider usually apply.",
        "Connecticut has a law for adult hearing aid coverage on state-regulated plans. Employer plans that pay claims themselves may be outside it.",
        "Hearing aids are generally an eligible FSA and HSA expense."
      ],
      patientQuestion: "Will my insurance pay for hearing aids?",
      storyLead: "A plain guide to hearing aid coverage for patients in Westchester and Greenwich: Medicare, Medicare Advantage, New York Medicaid, Connecticut rules and veterans.",
      comparisonTable: {
        afterHeading: "How to check your own benefit",
        caption: "Hearing aid coverage by plan type, as of October 2026. Always confirm with your plan.",
        headers: ["Plan type", "Hearing aids", "Hearing exams", "What to check"],
        rows: [
          ["Original Medicare", "Not covered", "Diagnostic exams may be covered when a doctor orders them", "Whether your doctor can order the exam"],
          ["Medicare Advantage", "Often some benefit. Varies by plan", "Often covered", "Dollar limit, network and approvals"],
          ["New York Medicaid", "May be covered when medically necessary", "Varies by plan", "Prior approval and enrolled provider"],
          ["Employer or private plan", "Varies. Many adult plans exclude them", "Varies", "Your plan summary or benefits office"],
          ["Connecticut state-regulated plan", "One hearing aid per ear every two years for adults, per the American Academy of Audiology", "Varies", "Whether your plan is state-regulated"],
          ["VA health care", "May be covered if you qualify", "May be covered", "Your enrollment and eligibility"]
        ]
      },
      sources: [
        { label: "Medicare.gov: Hearing aids", href: "https://www.medicare.gov/coverage/hearing-aids" },
        { label: "Medicare.gov: Hearing and balance exams", href: "https://www.medicare.gov/coverage/hearing-and-balance-exams" },
        { label: "American Academy of Audiology: New laws in Connecticut and Maine expand hearing aid coverage to include adults", href: "https://www.audiology.org/new-laws-in-connecticut-and-maine-effective-january-1-2020-expand-hearing-aid-coverage-to-include-adults" },
        { label: "New York State Department of Health: Medicaid", href: "https://www.health.ny.gov/health_care/medicaid/" },
        { label: "IRS Publication 502: Medical and Dental Expenses", href: "https://www.irs.gov/publications/p502" }
      ]
    }
  },
  {
    path: "/hearing-aid-second-opinion",
    title: "Hearing Aid Second Opinion in Westchester",
    metaTitle: "Hearing Aid Second Opinion in Westchester, NY",
    metaDescription: "Unsure about a hearing aid quote, or your current hearing aids are not working? Get a second opinion from a Doctor of Audiology. Call to book a visit.",
    h1: "Hearing Aid Second Opinion in Westchester",
    heroImage: { src: "/assets/blog-hearing-care-options.png", alt: "Reviewing a hearing test and hearing aid quote with an audiologist" },
    sections: [
      "When a second opinion makes sense",
      "What to bring",
      "What we check",
      "What a second opinion does not do",
      "What it costs",
      "What happens next"
    ],
    body: [
      "A second opinion means a Doctor of Audiology looks at your hearing test, your hearing aid quote, or the hearing aids you wear now, and tells you what they see. You do not have to be unhappy with your first provider to ask for one. Many people simply want to be sure before they spend money or keep struggling with devices that do not help.",
      "We offer second opinions at our Harrison and Somers offices. You will leave with a clear answer in plain words, and you decide what to do next. There is no pressure to switch providers or to buy anything from us.",
      "When a second opinion makes sense",
      "Some common reasons are a quote that feels too high or too hard to compare, a recommendation you do not fully understand, hearing aids that still do not help after several adjustment visits, or a provider who has not measured the fit in your ear canal. People also ask when a hearing test result seems different from how they hear every day, when they are told they have no hearing loss but still struggle, or when someone suggests a device they did not expect.",
      "What to bring",
      "Bring any recent hearing test results, the written quote or purchase agreement, and the hearing aids you wear now, with their chargers and any domes or molds. Bring a list of the situations where you struggle most, such as restaurants, meetings or the phone. Bring the name of the provider, and their trial and return terms, if you still have them. A family member or friend can also help describe how your hearing affects daily life.",
      "What we check",
      "The table below shows what we look at in each situation. Your audiologist tells you which of these apply to you. We may repeat parts of your hearing test if your results are old or if something does not match how you hear.",
      "What a second opinion does not do",
      "A second opinion does not judge your first provider. Often it confirms the original advice, and we will tell you so. It does not replace medical care. If we find signs that need a physician, such as sudden hearing loss, one-sided hearing loss, drainage or significant ear pain, we will tell you to see a doctor promptly. We also cannot promise that a different device will fix every problem, and we will not promise a result that your hearing test does not support.",
      "What it costs",
      "Fees and what the visit includes depend on what you need, such as a review of paperwork only, a repeat hearing test, or a check of your hearing aids. Please ask us about the fee and about insurance when you book, so you know before you come in. If you were quoted a price elsewhere, our guides on hearing aid cost and insurance in Westchester can help you compare it fairly.",
      "What happens next",
      "After your visit, you can take our findings back to your first provider, stay with them, or move your care. If you decide to continue with us, we will explain the options and the costs in writing. Call our Harrison office at (914) 949-0034 or our Somers office at (914) 556-6720 to book a second opinion visit."
    ],
    faqs: [
      { question: "Do I need to tell my current audiologist that I want a second opinion?", answer: "No. You can book a visit on your own. Many people ask their first provider for a copy of their hearing test and quote, which helps us compare. Your records belong to you, and you can ask for them." },
      { question: "Can you review a quote from another provider or from Costco?", answer: "Yes. Bring the written quote. We look at the device, what is included, and how the care is set up, so you can compare it fairly. We tell you what we see and leave the decision to you." },
      { question: "My hearing aids are not helping. Can you check them?", answer: "Yes. Bring them with their chargers and parts. Your audiologist checks the devices, the fit in your ear, and whether the settings match your hearing test. In many cases, adjustments or reprogramming can help. If the devices are not the right fit for your hearing, we tell you." },
      { question: "Will you tell me my hearing aids were a bad choice?", answer: "We will tell you what we see, in plain words. Often the original advice was sound, and we say so. If something does not match your hearing test, we explain what and why." },
      { question: "Do I have to buy hearing aids from you after a second opinion?", answer: "No. There is no obligation. You can take the findings back to your first provider or stay where you are." },
      { question: "What does a second opinion visit cost?", answer: "It depends on what you need, such as a review of paperwork, a repeat hearing test or a device check. Ask us about the fee and about insurance when you call to book." }
    ],
    related: [
      { label: "How Much Do Hearing Aids Cost in Westchester County?", href: "/hearing-aid-cost-westchester-county" },
      { label: "Does Insurance Cover Hearing Aids or Hearing Tests?", href: "/does-insurance-cover-hearing-aids-tests" },
      { label: "Questions to Ask Before Buying Hearing Aids", href: "/questions-before-buying-hearing-aids" },
      { label: "Programming Hearing Aids Bought Somewhere Else", href: "/can-audiologist-program-hearing-aids-bought-elsewhere" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Cochlear implant support", href: "/how-we-can-help/cochlear-implants" },
      { label: "Hearing aid brands we fit", href: "/hearing-aids-brands" },
      { label: "Signia MaX: what is actually known so far", href: "/signia-max-what-we-know" },
      { label: "Phonak EON: what is actually known so far", href: "/phonak-eon-what-we-know" },
      { label: "When hearing aids are no longer enough: cochlear implant evaluation", href: "/when-hearing-aids-no-longer-enough-cochlear-implant" },
      { label: "The 6 hearing aid platforms of fall 2026, compared", href: "/best-ai-hearing-aids-fall-2026" }
    ],
    blogMeta: {
      frame: "Patient guide",
      byline: "From the audiology desk",
      reviewedBy,
      readTime: "4 min read",
      articleType: "Second opinion",
      pullQuote: "A second opinion does not judge your first provider. Often it confirms the original advice, and we will tell you so.",
      keyTakeaways: [
        "You can ask for a second opinion without telling your current provider.",
        "Bring recent test results, the written quote, and the hearing aids you wear now.",
        "We review the test, the quote or the devices, and explain what we see in plain words.",
        "There is no obligation to switch providers or to buy from us.",
        "Ask us about the visit fee and insurance when you book."
      ],
      patientQuestion: "How do I get a second opinion on hearing aids?",
      storyLead: "What a hearing aid second opinion is, when it helps, what to bring and what to expect at our Harrison and Somers offices.",
      comparisonTable: {
        afterHeading: "What we check",
        caption: "What a second opinion can look at, by situation",
        headers: ["Your situation", "What we look at", "Possible outcome"],
        rows: [
          ["You have a quote and are unsure", "The devices, what is included, and the follow-up care", "A clear comparison you can use with any provider"],
          ["Your hearing aids do not help", "The fit in your ear, the settings against your hearing test, and the condition of the devices", "Adjustments, reprogramming, or a different option"],
          ["Your hearing test seems wrong", "A repeat test, if your results are old or do not match how you hear", "Confirmed results, or a new baseline"],
          ["You were told you have no hearing loss but still struggle", "Speech understanding in noise, not only quiet tones", "An explanation, and next steps"]
        ]
      },
      sources: [
        { label: "American Academy of Audiology", href: "https://www.audiology.org/" },
        { label: "Medicare.gov: Hearing and balance exams", href: "https://www.medicare.gov/coverage/hearing-and-balance-exams" }
      ]
    }
  },
  {
    path: "/how-much-does-a-hearing-test-cost-westchester",
    title: "How Much Does a Hearing Test Cost in Westchester?",
    metaTitle: "Hearing Test Cost in Westchester, NY (2026 Guide)",
    metaDescription: "A hearing test can cost from nothing to a few hundred dollars. See what a full test includes, what insurance may cover, and how to book. Call us today.",
    h1: "How Much Does a Hearing Test Cost in Westchester? (2026 Guide)",
    heroImage: { src: "/assets/blog-hearing-care-options.png", alt: "Audiologist explaining hearing test results to a patient" },
    sections: [
      "Screening or full test",
      "What a full hearing test includes",
      "What affects the cost",
      "What insurance may cover",
      "How to find out your cost before you book"
    ],
    body: [
      "A hearing test can cost anywhere from nothing to a few hundred dollars. That is a broad estimate as of October 2026, not our price list. The range is wide because \"hearing test\" can mean a quick screening at a store or a full diagnostic exam with a Doctor of Audiology.",
      "The two are not the same. A screening tells you whether you may have a problem. A full test shows the type and level of your hearing loss, how well you understand speech, and whether something medical, such as wax or fluid, is involved. Call our Harrison office at (914) 949-0034 or our Somers office at (914) 556-6720 to ask what applies to you.",
      "Screening or full test",
      "A screening is short and usually checks whether you hear a few tones at set levels. Retail hearing centers and some events offer them at no charge, often linked to a hearing aid consultation. Online tests are also screenings. They can point to a need for follow-up. They do not replace a full exam.",
      "What a full hearing test includes",
      "A full test usually starts with a case history and a look in your ears. It often includes tests of the middle ear, tones in each ear through earphones and through a bone oscillator, and speech testing. Your audiologist explains the results on a chart called an audiogram, and tells you what the results mean for your daily life. Plan on 30 to 60 minutes. The result also gives you a baseline to compare against in later years.",
      "What affects the cost",
      "Cost depends on how much testing you need, the type of practice, and how your insurance treats the visit. A first full exam usually costs more than a repeat test. Some practices include a hearing test in the price of hearing aids. Others bill it on its own. Ask what is included, and whether the test fee is credited toward hearing aids if you buy them.",
      "What insurance may cover",
      "Original Medicare does not cover routine hearing exams for fitting hearing aids. It can cover a diagnostic hearing or balance exam when your doctor orders it to find out whether you need medical treatment. Many Medicare Advantage plans include a hearing exam. Employer and private plans vary. New York Medicaid may cover a medically necessary exam, with rules that depend on your plan. Our insurance guide explains each plan type in plain words.",
      "How to find out your cost before you book",
      "Call your plan and ask whether a diagnostic hearing test is covered, and whether you need a referral. Then call us with your plan name, and ask what your cost will be. Tell us if you have noticed sudden hearing loss, one-sided hearing loss, dizziness, drainage or ear pain. Those signs need prompt medical care, and we will help you find the right visit."
    ],
    faqs: [
      { question: "How much does a hearing test cost?", answer: "A hearing test can cost from nothing to a few hundred dollars, as a broad estimate as of October 2026. A free screening is not the same as a full diagnostic exam. Call us to find out what applies to you." },
      { question: "Is a hearing test free?", answer: "Some screenings are free, often at retail hearing centers. A full diagnostic exam with a Doctor of Audiology is a medical service, and it is usually billed to insurance or charged as a fee. Ask what is included before you book." },
      { question: "Does Medicare cover a hearing test?", answer: "Original Medicare does not cover routine hearing exams for fitting hearing aids. It can cover a diagnostic exam when your doctor orders it. Many Medicare Advantage plans include a hearing exam, so check your plan." },
      { question: "How long does a hearing test take?", answer: "A full test usually takes 30 to 60 minutes, including time to talk through your results." },
      { question: "Do I need a referral for a hearing test?", answer: "Many plans do not require one for a hearing test with an audiologist. Some plans, and Medicare when a doctor orders a diagnostic exam, do. Ask your plan before you book." },
      { question: "Is an online hearing test as good as a clinic test?", answer: "An online test is a screening. It can show that you may need a full exam. It cannot measure each ear with calibrated equipment or check for medical causes." }
    ],
    related: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Does Insurance Cover Hearing Aids or Hearing Tests?", href: "/does-insurance-cover-hearing-aids-tests" },
      { label: "Hearing Screening vs Hearing Test", href: "/hearing-test-vs-hearing-screening-difference" },
      { label: "How Much Does Costco Charge for a Hearing Test?", href: "/how-much-does-costco-charge-for-a-hearing-test" },
      { label: "What Happens During a Comprehensive Hearing Evaluation", href: "/what-happens-during-comprehensive-hearing-evaluation" },
      { label: "Hearing Aid Cost in Westchester County", href: "/hearing-aid-cost-westchester-county" },
      { label: "Hearing screening vs hearing test", href: "/hearing-screening-vs-hearing-test" },
      { label: "Hearing care across Westchester County", href: "/areas-we-serve/westchester-county-ny" },
      { label: "Comprehensive hearing assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "Precision hearing care: why your audiogram matters more than ever in 2026", href: "/precision-hearing-care-audiogram" }
    ],
    blogMeta: {
      frame: "Cost guide",
      byline: "From the audiology desk",
      reviewedBy,
      readTime: "4 min read",
      articleType: "Cost and coverage",
      pullQuote: "A screening tells you whether you may have a problem. A full test shows what the problem is.",
      keyTakeaways: [
        "A hearing test can cost from nothing to a few hundred dollars, as a broad estimate as of October 2026.",
        "A screening and a full diagnostic exam are different services.",
        "A full test usually takes 30 to 60 minutes and gives you a baseline.",
        "Original Medicare covers a diagnostic exam only when a doctor orders it. Many Medicare Advantage plans include an exam.",
        "Ask what the test fee includes, and whether it is credited toward hearing aids."
      ],
      patientQuestion: "How much does a hearing test cost, and will insurance pay?",
      storyLead: "A plain guide to hearing test cost in Westchester: screening versus full exam, what is included, and what insurance may cover.",
      comparisonTable: {
        afterHeading: "What a full hearing test includes",
        caption: "Parts of a full hearing test and what each one shows",
        headers: ["Part of the test", "What it shows"],
        rows: [
          ["Case history", "Your symptoms, noise exposure, medicines and health factors"],
          ["Ear inspection", "Wax, blockage or signs of infection in the ear canal"],
          ["Middle-ear test", "How well the eardrum and middle ear work"],
          ["Tone test through earphones", "The softest sounds you hear in each ear"],
          ["Tone test through a bone oscillator", "Whether the loss is in the outer, middle or inner ear"],
          ["Speech testing", "How well you understand words, in quiet and sometimes in noise"]
        ]
      },
      sources: [
        { label: "Medicare.gov: Hearing and balance exams", href: "https://www.medicare.gov/coverage/hearing-and-balance-exams" },
        { label: "American Academy of Audiology", href: "https://www.audiology.org/" },
        { label: "NIDCD: Hearing and balance", href: "https://www.nidcd.nih.gov/health/hearing-ear-infections-deafness" }
      ]
    }
  },
  {
    path: "/employer-union-hearing-aid-benefits-westchester",
    title: "Employer and Union Hearing Aid Benefits in Westchester",
    metaTitle: "Hearing Aid Benefits: Empire Plan, UFT, Aetna",
    metaDescription: "Use a work or union hearing aid benefit in Westchester? See how Empire Plan (NYSHIP), UFT and Aetna benefits work. Call us and our biller will check yours.",
    h1: "Employer and Union Hearing Aid Benefits in Westchester",
    heroImage: { src: "/assets/hearing-care-options-reviewing-paperwork.png", alt: "Reviewing an employer or union hearing aid benefit before a visit" },
    sections: [
      "How the benefit works",
      "Empire Plan (NYSHIP)",
      "UFT Welfare Fund",
      "Aetna and other employer plans",
      "Pay first, claim later",
      "What to ask your plan",
      "How we can help"
    ],
    body: [
      "Can you use an Empire Plan, UFT or Aetna hearing aid benefit with Audiology Associates of Westchester? Please call us before you book. Our biller can check the benefits of any plan for you. We do not say on this page that we are in network with any plan. This page explains how these three benefits work, as of October 2026, so you know what to ask.",
      "A hearing aid benefit comes from your employer or your union. It is not the same as general health insurance. Two people in the same office can have different hearing aid benefits. The rules are in your own plan documents, so we use named plans below only as examples.",
      "How the benefit works",
      "Most work and union hearing aid benefits do one of two things. Some pay a set dollar amount toward hearing aids on a fixed schedule, such as once every few years. Some cover hearing aids as one of many services, with limits. In both cases, ask three things. How much does the plan pay? How often can I use it? Do I pay first and send in a claim, or does the provider bill the plan?",
      "Empire Plan (NYSHIP)",
      "The Empire Plan is the main health plan of the New York State Health Insurance Program (NYSHIP). It is for New York State employees, retirees and their dependents. The 2026 Empire Plan summary of benefits lists hearing aids under other covered services and says limitations may apply. It sends you to your plan document for the details. It does not give a dollar amount or a time limit in the summary. For the amount that applies to you, read your plan document or call NYSHIP at 1-877-769-7447. Benefits can differ by bargaining unit and by program, so do not rely on what a co-worker was told.",
      "UFT Welfare Fund",
      "The United Federation of Teachers (UFT) Welfare Fund is for UFT-represented employees and their dependents. The UFT website says the fund reimburses up to $4,000 for hearing aids every three years, or the cost of the hearing aids if that is less. The UFT describes this as direct reimbursement. You pay the full cost first and then send a claim to the fund. The UFT also keeps its own preferred provider list with discounts. We do not say here whether any provider is on that list. Ask the UFT Welfare Fund how the list affects your claim.",
      "Aetna and other employer plans",
      "Aetna coverage depends on the employer that bought the plan. Aetna's own clinical policy bulletin, last reviewed on 23 September 2026, says most Aetna benefit plans exclude hearing aids. It tells members to check their benefit plan description. For plans that do not exclude hearing aids, it says over-the-counter and prescription hearing aids can both be eligible. The device must be cleared by the FDA, prescribed by a qualified provider and medically necessary. The same idea holds for most other insurers. Your employer chose what to include.",
      "Pay first, claim later",
      "Many hearing aid benefits pay you back after you have paid the provider. The UFT Welfare Fund describes its benefit this way. It asks for an itemized receipt marked paid and for claims within 90 days of the date of service. Rules like these are strict, and they are set by your plan, not by us. Read your claim form before your visit. Ask for an itemized receipt when you pay. If you want to spread the cost while you wait for your claim, see our page on hearing aid payment plans.",
      "What to ask your plan",
      "Call the number on your member card or your benefits office. Ask these questions. Does my plan cover a hearing exam and hearing aids? What is the dollar limit, and how often does it renew? Does it pay the provider or pay me? Is there a deadline to send a claim? What papers does it need, such as an itemized receipt or a prescription? Does it limit which providers I can use? Write down the date and the name of the person you spoke with.",
      "How we can help",
      "Call our Harrison office at (914) 949-0034 or our Somers office at (914) 556-6720. Tell us the name of your plan. Our biller can check the benefits of any plan for you before your visit. We offer patient financing, so you can ask about that on the same call. Plans change each year, so we will tell you what we find and you can confirm it with your plan."
    ],
    faqs: [
      { question: "Do you take the Empire Plan or NYSHIP?", answer: "Please call us. Our biller can check the benefits of any plan for you. We do not promise on this page that we are in network with a plan. Ask your plan how it handles claims for the provider you choose." },
      { question: "Does the UFT Welfare Fund pay for hearing aids?", answer: "The UFT website says it reimburses up to $4,000 for hearing aids every three years, or the cost of the hearing aids if that is less. You pay first and send a claim. Check the UFT Welfare Fund for the current rules and deadlines." },
      { question: "Does Aetna cover hearing aids?", answer: "It depends on your employer's plan. Aetna says most of its benefit plans exclude hearing aids. Check your benefit plan description, or call the number on your member card." },
      { question: "What if my plan reimburses me after I pay?", answer: "Ask us for an itemized receipt when you pay, and read your plan's claim rules before the visit. Some plans have short deadlines. We also offer patient financing if you want to spread the cost while you wait for your claim." },
      { question: "Does Medicare cover hearing aids?", answer: "Original Medicare does not cover hearing aids. Many Medicare Advantage plans include some benefit. Our insurance guide explains how to check." }
    ],
    related: [
      { label: "Does Insurance Cover Hearing Aids or Hearing Tests?", href: "/does-insurance-cover-hearing-aids-tests" },
      { label: "How Much Do Hearing Aids Cost in Westchester County?", href: "/hearing-aid-cost-westchester-county" },
      { label: "Hearing Aid Payment Plans in Westchester", href: "/hearing-aid-payment-plans-westchester" },
      { label: "Questions to Ask Before Buying Hearing Aids", href: "/questions-before-buying-hearing-aids" },
      { label: "Medicare Open Enrollment and Hearing Benefits", href: "/medicare-open-enrollment-hearing-benefits" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing care across Westchester County", href: "/areas-we-serve/westchester-county-ny" },
      { label: "Hearing aid brands we fit", href: "/hearing-aids-brands" }
    ],
    blogMeta: {
      frame: "Patient guide",
      byline: "From the audiology desk",
      reviewedBy,
      readTime: "4 min read",
      articleType: "Cost and coverage",
      pullQuote: "Named plans on this page are examples. Your own plan document decides what you get.",
      keyTakeaways: [
        "Call us before you book. Our biller can check the benefits of any plan for you.",
        "The UFT website says its fund reimburses up to $4,000 for hearing aids every three years. You pay first and send a claim.",
        "The 2026 Empire Plan summary lists hearing aids as a covered service with limits. Read your plan document for the amount.",
        "Aetna says most of its plans exclude hearing aids. Employer plans differ, so check yours.",
        "We do not claim to be in network with any plan on this page."
      ],
      patientQuestion: "Can I use my work or union hearing aid benefit?",
      storyLead: "How Empire Plan (NYSHIP), UFT Welfare Fund and Aetna hearing aid benefits work, what to ask your plan, and how our team can help.",
      comparisonTable: {
        afterHeading: "How the benefit works",
        caption: "What each plan's own pages say, as of October 2026",
        headers: ["Plan", "What its own pages say", "What to check"],
        rows: [
          ["Empire Plan (NYSHIP)", "Hearing aids are listed as an other covered service, with limitations", "The amount and time limit in your plan document"],
          ["UFT Welfare Fund", "Reimburses up to $4,000 every three years, or the cost if less", "Claim deadline and receipt rules"],
          ["Aetna employer plans", "Most plans exclude hearing aids", "Your benefit plan description"]
        ]
      },
      sources: [
        { label: "UFT: Hearing aids and exams", href: "https://www.uft.org/news/you-should-know/know-your-benefits/hearing-aids-and-exams" },
        { label: "UFT: Hearing aid providers and direct reimbursement", href: "https://www.uft.org/hearing-aid-providers" },
        { label: "NYSHIP: Empire Plan 2026 Summary of Benefits and Coverage", href: "https://www.cs.ny.gov/employee-benefits/sbc/pdfs/2026/ny-unrep-sbc-2026.pdf" },
        { label: "NYSHIP: The Empire Plan", href: "https://www.nyship.ny.gov" },
        { label: "Aetna: Clinical Policy Bulletin, Hearing Aids", href: "https://www.aetna.com/cpb/medical/data/600_699/0612.html" }
      ]
    }
  },
  {
    path: "/hearing-aid-adjustments-westchester",
    title: "Hearing Aid Adjustments in Westchester: Why Visits Matter",
    metaTitle: "Hearing Aid Adjustment in Westchester, NY",
    metaDescription: "We adjust hearing aids in person in Harrison and Somers. Learn why regular visits matter, what happens at one, and what you can do by phone or email.",
    h1: "Hearing Aid Adjustments in Westchester: Why In-Person Visits Matter",
    heroImage: { src: "/assets/hearing-aid-fit-adjusting-behind-the-ear.png", alt: "Audiologist making a hearing aid adjustment in person" },
    sections: [
      "What a hearing aid adjustment is",
      "Why we adjust in person",
      "How often to come in",
      "What you can do by phone or email",
      "What to bring and what to write down",
      "When not to wait"
    ],
    body: [
      "We make hearing aid adjustments in person, at our Harrison and Somers offices. We do not offer remote or virtual adjustments. Some people search for them, so we want to be clear. This page explains why we prefer in-person visits, how often we suggest them, and what you can do by phone or email between visits.",
      "A hearing aid adjustment changes how your devices sound. It also checks that they still fit well and still match your hearing. Most people need a few adjustments in the first months. Many need more as their hearing or their daily life changes.",
      "What a hearing aid adjustment is",
      "Your audiologist programs hearing aids from your hearing test. After you wear them in real rooms, you learn what works. Voices may sound sharp. Your own voice may sound boomy. A restaurant may still be hard. An adjustment changes the settings to match what you tell us. The National Institute on Deafness and Other Communication Disorders (NIDCD) advises working with your audiologist until you are comfortable and satisfied. The American Speech-Language-Hearing Association (ASHA) says your audiologist makes the adjustments you need.",
      "Why we adjust in person",
      "In the office, your audiologist can do things that a phone call cannot. We look in your ears, because wax or a loose dome can cause problems that look like settings problems. We check how the device sits in your ear. We can measure what the hearing aid delivers at your eardrum with real-ear measurement, and we can repeat your hearing test if your hearing may have changed. We also hear how you do in conversation in the room. Then we make a change and check it with you while you are there. Some providers offer remote adjustment. We do not. We see our patients over time, and we prefer to see you in person.",
      "How often to come in",
      "We prefer to see patients a few times a year. These visits check your progress and make adjustments. Your audiologist sets the schedule with you, and it can change as your needs change. New wearers usually come in more often at the start. Our page on follow-up visits for new hearing aids explains what to expect in the first months.",
      "What you can do by phone or email",
      "If you are an existing patient and something is wrong, call or email us. Our team will try to troubleshoot with you by phone or email. For example, we can talk you through cleaning, changing a dome or wax guard, checking the charger, or restarting the pairing with your phone. If the problem needs a change to the settings or a closer look, we will book you in. Our pages on why hearing aids whistle and on the difference between a tune-up and a repair can help you before you call.",
      "What to bring and what to write down",
      "Bring both hearing aids, even if only one has a problem. Bring the charger and cable, spare domes and filters, and your phone if you use the app. Keep a short list of times when you did not hear well. Note the place, the time of day and what you were trying to hear. This list helps us adjust to your real life, not only to what we can test in a quiet room. If you bought your hearing aids somewhere else, call us with the make and model first. Some brands limit who can program them, so we tell you what we can do before you drive over.",
      "When not to wait",
      "A hearing aid adjustment does not fix every problem. Do not wait for your next visit if you have sudden hearing loss, severe dizziness, ear pain, or drainage from the ear. Contact a doctor promptly. If your hearing has changed gradually, book a hearing test. Your settings may need to match a new result. Call our Harrison office at (914) 949-0034 or our Somers office at (914) 556-6720 to book."
    ],
    faqs: [
      { question: "Do you offer remote hearing aid adjustments?", answer: "No. We make adjustments in person at our Harrison and Somers offices. Existing patients can call or email us about a problem, and our team will troubleshoot by phone or email." },
      { question: "How often should I have my hearing aids adjusted?", answer: "We prefer to see patients a few times a year to check progress and make adjustments. New wearers usually come in more often at first. Your audiologist will set a plan with you." },
      { question: "My hearing aids sound different today. Should I come in?", answer: "First check the simple causes: a clean dome and wax guard, a full charge, and the right program. If the sound is still wrong, call us. Do not wait if the change in your hearing was sudden." },
      { question: "Can you adjust hearing aids I bought somewhere else?", answer: "Often, but it depends on the brand, the model and the fitting software. Call us with the make and model before you book." },
      { question: "Is an adjustment included in the price of hearing aids?", answer: "Ask us what your quote includes before you buy. Our cost guide lists the questions to ask about follow-up visits, adjustments and warranty." }
    ],
    related: [
      { label: "How Many Follow-Up Visits Do New Hearing Aids Need?", href: "/how-many-follow-up-visits-new-hearing-aids" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Hearing Aid Tune-Ups", href: "/how-we-can-help/hearing-aid-tune-ups" },
      { label: "Hearing Aid Tune-Up vs Repair", href: "/hearing-aid-tune-up-vs-repair" },
      { label: "Why Hearing Aids Whistle", href: "/why-hearing-aids-whistle" },
      { label: "Programming Hearing Aids Bought Somewhere Else", href: "/can-audiologist-program-hearing-aids-bought-elsewhere" },
      { label: "Why Real-Ear Verification Matters", href: "/why-real-ear-verification-matters" },
      { label: "Hearing aids for musicians in Westchester", href: "/musician-hearing-aids-westchester" },
      { label: "How many hours a day should you wear new hearing aids?", href: "/how-many-hours-a-day-should-you-wear-new-hearing-aids" }
    ],
    blogMeta: {
      frame: "Patient guide",
      byline: "From the audiology desk",
      reviewedBy,
      readTime: "4 min read",
      articleType: "Hearing aid care",
      pullQuote: "We make hearing aid adjustments in person. Here is why, and what you can do between visits.",
      keyTakeaways: [
        "We adjust hearing aids in person at our Harrison and Somers offices. We do not offer remote adjustments.",
        "We prefer to see patients a few times a year to check progress and make adjustments.",
        "Existing patients can call or email, and our team will troubleshoot by phone or email.",
        "Bring both hearing aids, the charger, spare parts, and a list of times you did not hear well.",
        "Do not wait for a visit if you have sudden hearing loss, severe dizziness, ear pain or drainage."
      ],
      patientQuestion: "Can my hearing aids be adjusted remotely?",
      storyLead: "What a hearing aid adjustment is, why we make them in person, how often to come in, and what you can do by phone or email.",
      sources: [
        { label: "NIDCD: Hearing Aids", href: "https://www.nidcd.nih.gov/health/hearing-aids" },
        { label: "ASHA: Hearing Aids", href: "https://www.asha.org/public/hearing/hearing-aids/" }
      ]
    }
  },
  {
    path: "/custom-earplugs-westchester",
    title: "Custom Earplugs in Westchester: Sleep, Swim, Music, Work",
    metaTitle: "Custom Earplugs in Westchester, NY | Audiologist",
    metaDescription: "We make custom earplugs at our Harrison and Somers offices, for sleep, swimming, music, work and noisy hobbies. Learn how they work and how to book.",
    h1: "Custom Earplugs in Westchester: Sleep, Swim, Music and Work",
    heroImage: { src: "/assets/brands/earmolds-earplugs.webp", alt: "Custom earplugs made by an audiologist in Westchester" },
    sections: [
      "What custom earplugs are",
      "How we make them",
      "Sleep",
      "Swimming and water",
      "Music and concerts",
      "Work and noisy hobbies",
      "What custom earplugs do not do",
      "How to book"
    ],
    body: [
      "Yes, we make custom earplugs. Our audiologists make them at our Harrison and Somers offices. You can get a pair for sleep, swimming, music, work or a noisy hobby. A custom earplug is shaped to your own ear. That is the main difference from the plugs you buy at a store. This page explains the uses, how the plugs are made, and what to expect.",
      "Patients come to us from White Plains and from towns across Westchester. Harrison is the closer office for central and southern Westchester. Somers is the closer office for the north. Call to ask which office suits you.",
      "What custom earplugs are",
      "A custom earplug is made from an impression of your ear. Stores sell foam and pre-molded plugs in standard sizes. These can work, but a standard size may not seal your ear well. A plug that does not seal does not protect as much. The National Institute on Deafness and Other Communication Disorders (NIDCD) says custom musician earplugs are molded to your ear. They are made to reduce sound while letting in as much natural sound as possible. It advises that you consult a hearing health professional for them.",
      "How we make them",
      "Your audiologist looks in your ear first. Wax or a medical problem must be dealt with before a plug is made. Then we take an impression of your ear in the office. The impression is used to make the plugs. Tell us what you need them for, because the use decides the type. Ask us about the options for your use. The plug should feel secure and should not hurt. The NIDCD says to never force an earplug into your ear.",
      "Sleep",
      "Some people wear earplugs to sleep because of a partner who snores, street noise or shift work. A custom plug can be made small and soft so that it is comfortable when you lie on your side. Tell us how you sleep. Ask how much sound you will still hear, such as an alarm clock or a smoke alarm, and how to clean the plugs.",
      "Swimming and water",
      "Water in the ear canal can lead to swimmer's ear, an infection of the outer ear canal. The Centers for Disease Control and Prevention (CDC) advises keeping your ears as dry as possible while swimming. It lists a bathing cap, earplugs or custom-fitted swim molds as ways to do this. The CDC also says to see a healthcare provider for ear pain or drainage. Do not wear any earplug if you have ear pain or drainage until a provider has looked at your ear.",
      "Music and concerts",
      "Music plugs lower the sound evenly, so music stays clear and does not sound muffled. The NIDCD lists band and orchestra rehearsals and performances, and concerts, among the times to wear hearing protection. For a closer look at filters and foam plugs, read our guide to concert hearing protection. If you play in a band, tell us which instrument you play and where you stand. We fit hearing aids for musicians as well.",
      "Work and noisy hobbies",
      "The NIDCD says sounds at or above 85 dBA can cause hearing loss with long or repeated exposure. The Occupational Safety and Health Administration (OSHA) says employers must run a hearing conservation program when workers are exposed to an average of 85 dBA or more over eight hours. Employers must provide hearing protection free of charge in that program. Many people still want a plug that fits their own ear and that they will wear all day. Custom plugs can suit power tools, lawn work, shooting sports, motorcycles and other loud hobbies. Our article on power tools and yard work gives more detail.",
      "What custom earplugs do not do",
      "Hearing protectors do not block all sound. A higher noise reduction rating usually blocks more, but only when the plug is worn correctly. Earplugs do not treat hearing loss or ringing in the ears. If you already have ringing or trouble hearing, book a hearing test. If your hearing changed suddenly after loud noise, do not wait. Contact a doctor promptly.",
      "How to book",
      "Call our Harrison office at (914) 949-0034 or our Somers office at (914) 556-6720. Tell us what you want the earplugs for. We do not list prices on this page, so please ask when you call."
    ],
    faqs: [
      { question: "Do you make custom earplugs?", answer: "Yes. We make custom earplugs at our Harrison and Somers offices. Call us and tell us what you want them for." },
      { question: "How much do custom earplugs cost?", answer: "Please ask when you call. The cost depends on the type of plug you need." },
      { question: "Can I get custom earplugs for sleeping?", answer: "Yes. Tell your audiologist how you sleep so that the plugs can be comfortable. Ask how much sound you will still hear, such as an alarm." },
      { question: "Can I get custom swim plugs?", answer: "We make custom earplugs for several uses. The CDC lists custom-fitted swim molds as one way to keep ears dry. Do not wear any plug if you have ear pain or drainage. See a healthcare provider first." },
      { question: "Are custom earplugs better than foam plugs?", answer: "They fit your own ear and can be more comfortable for long wear. A well-fitted foam plug also protects. The best plug is one that fits and that you will wear." },
      { question: "Do I need a hearing test first?", answer: "Your audiologist will look in your ear before taking an impression. A hearing test is a good idea if you have been around loud noise for years, or if you have ringing or trouble understanding speech." }
    ],
    related: [
      { label: "Hearing Protection", href: "/hearing-protection" },
      { label: "Ear Gear: Custom Earplugs and Earmolds", href: "/products/eargear" },
      { label: "Hearing Protection for Concerts: Musician Earplugs vs Foam Plugs", href: "/hearing-protection-concerts-musician-vs-foam" },
      { label: "Hearing Protection for Power Tools and Yard Work", href: "/hearing-protection-power-tools-yard-work" },
      { label: "How Loud Is Too Loud?", href: "/how-loud-is-too-loud-decibels" },
      { label: "Hearing Aids for Musicians", href: "/musician-hearing-aids-westchester" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing protection service overview", href: "/how-we-can-help/hearing-protection" }
    ],
    blogMeta: {
      frame: "Patient guide",
      byline: "From the audiology desk",
      reviewedBy,
      readTime: "4 min read",
      articleType: "Hearing protection",
      pullQuote: "A plug that does not seal does not protect as much. A custom plug is shaped to your own ear.",
      keyTakeaways: [
        "We make custom earplugs at our Harrison and Somers offices.",
        "Plugs are made from an impression of your ear, taken in the office.",
        "Common uses are sleep, swimming, music, work and noisy hobbies.",
        "Earplugs do not block all sound, and they do not treat hearing loss.",
        "Do not wear a plug if you have ear pain or drainage. See a provider first."
      ],
      patientQuestion: "Where can I get custom earplugs near me?",
      storyLead: "What custom earplugs are, what they are used for, how we make them, and how to book at our Harrison or Somers office.",
      sources: [
        { label: "NIDCD: Hearing Protectors", href: "https://www.nidcd.nih.gov/publication-products/hearing-protectors" },
        { label: "CDC: Preventing Swimmer's Ear", href: "https://cdc.gov/healthy-swimming/prevention/preventing-swimmers-ear.html" },
        { label: "OSHA: Occupational Noise Exposure", href: "https://www.osha.gov/noise" }
      ]
    }
  },
  {
    path: "/hearing-aid-payment-plans-westchester",
    title: "Hearing Aid Payment Plans and Financing in Westchester",
    metaTitle: "Hearing Aid Payment Plans in Westchester, NY",
    metaDescription: "We offer patient financing for hearing aids. See how paying over time works, what to ask before you sign, and how it differs from insurance. Call to book.",
    h1: "Hearing Aid Payment Plans and Financing in Westchester",
    heroImage: { src: "/assets/hearing-care-options-reviewing-paperwork.png", alt: "Reviewing hearing aid payment plan options with an audiologist" },
    sections: [
      "Financing and insurance are different",
      "How paying over time works",
      "What to ask before you sign",
      "Watch for deferred interest",
      "Other ways to lower the cost",
      "How to book"
    ],
    body: [
      "Yes, we offer patient financing for hearing aids. Financing lets you pay over time instead of all at once. Ask our team how it works for you when you book your visit. This page explains how payment plans work in general, and what to ask about any plan before you sign. We do not list lenders, rates or terms here.",
      "Hearing aids cost about $200 to more than $8,000 a pair, as a broad market estimate as of October 2026. Our cost guide explains why the range is so wide. A payment plan does not change the price of the hearing aids. It changes when you pay.",
      "Financing and insurance are different",
      "Insurance pays part of the cost, if your plan has a hearing aid benefit. Financing does not reduce what you owe. It spreads what you owe over a number of payments. You can use both. Some benefits pay you back after you pay the provider. In that case, financing can help you cover the cost while you wait for your claim. Our guides on hearing aid insurance and on employer and union benefits explain how to check your plan. Call us if you want our biller to check it.",
      "How paying over time works",
      "In most financing plans, you agree to a monthly payment for a set number of months. The plan may charge interest, fees, or both. The total you pay can be higher than the price of the hearing aids. The length of the plan changes the monthly payment. A longer plan has a lower monthly payment, but it can cost more in total. Ask our team about the choices that are open to you.",
      "What to ask before you sign",
      "Get the answers in writing. What is the total I will pay, including interest and fees? What is the interest rate? How many months is the plan, and what is each payment? Is there a fee for paying early? What happens if I pay late? Does the plan need a credit check? What does the quote include? Does it cover the fitting, follow-up visits, cleanings and the warranty? Our guide to questions before buying hearing aids lists more.",
      "Watch for deferred interest",
      "Some health care financing offers no interest for a set time. This is often called deferred interest. The Consumer Financial Protection Bureau (CFPB) has warned about it. If you do not pay the full balance before the promotional period ends, interest can be charged from the original purchase date. The CFPB also notes that minimum payments usually do not pay off the balance by the end of the promotional period. If a plan has a promotional period, ask for the end date and the monthly payment that clears the balance in time.",
      "Other ways to lower the cost",
      "Ask your plan about a hearing aid benefit. Hearing aids are generally an eligible expense for a flexible spending account or a health savings account. The Internal Revenue Service (IRS) lists hearing aids among deductible medical expenses, to the extent that your medical expenses exceed 7.5 percent of your adjusted gross income. Ask your tax adviser how this applies to you. Also ask whether a different technology level would meet your needs. A device does not need to be the newest to work well.",
      "How to book",
      "Call our Harrison office at (914) 949-0034 or our Somers office at (914) 556-6720. Start with a hearing test. After the test, your audiologist can give you a written quote built around your own hearing. Ask about financing when you book, and again when you have the quote."
    ],
    faqs: [
      { question: "Do you offer payment plans for hearing aids?", answer: "Yes. We offer patient financing. Ask our team how it works for you when you book." },
      { question: "Does financing lower the price of hearing aids?", answer: "No. Financing spreads the cost over payments. Interest or fees can make the total higher than the price of the hearing aids. Ask for the total in writing." },
      { question: "Can I use insurance and financing together?", answer: "Often yes. Insurance pays part of the cost if your plan has a hearing aid benefit. Financing can cover the rest, or cover the cost while you wait for a reimbursement. Call us and our biller can check your plan." },
      { question: "What is deferred interest?", answer: "It is a no-interest offer for a set time. If you do not pay the full balance before the offer ends, interest can be charged from the first day. Ask for the end date." },
      { question: "Can I pay with an FSA or HSA?", answer: "Hearing aids are generally an eligible expense for a flexible spending account or a health savings account. Check the rules of your own account." }
    ],
    related: [
      { label: "How Much Do Hearing Aids Cost in Westchester County?", href: "/hearing-aid-cost-westchester-county" },
      { label: "Does Insurance Cover Hearing Aids or Hearing Tests?", href: "/does-insurance-cover-hearing-aids-tests" },
      { label: "Employer and Union Hearing Aid Benefits", href: "/employer-union-hearing-aid-benefits-westchester" },
      { label: "Questions to Ask Before Buying Hearing Aids", href: "/questions-before-buying-hearing-aids" },
      { label: "How Much Does a Hearing Test Cost in Westchester?", href: "/how-much-does-a-hearing-test-cost-westchester" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing care across Westchester County", href: "/areas-we-serve/westchester-county-ny" },
      { label: "Hearing aid brands we fit", href: "/hearing-aids-brands" }
    ],
    blogMeta: {
      frame: "Patient guide",
      byline: "From the audiology desk",
      reviewedBy,
      readTime: "4 min read",
      articleType: "Cost and coverage",
      pullQuote: "A payment plan does not change the price of the hearing aids. It changes when you pay.",
      keyTakeaways: [
        "We offer patient financing. Ask our team how it works when you book.",
        "Financing spreads the cost. Insurance reduces it. They are not the same.",
        "Ask for the total cost, the rate, the fees and the length of the plan in writing.",
        "Be careful with deferred interest offers. Ask for the end date.",
        "FSA and HSA money can generally be used for hearing aids."
      ],
      patientQuestion: "Can I pay for hearing aids over time?",
      storyLead: "How hearing aid payment plans work, how they differ from insurance, and what to ask before you sign.",
      sources: [
        { label: "CFPB: What's the deal with health care credit cards?", href: "https://www.consumerfinance.gov/about-us/blog/whats-the-deal-with-health-care-credit-cards-four-things-you-should-know" },
        { label: "IRS: Topic no. 502, Medical and dental expenses", href: "https://www.irs.gov/taxtopics/tc502" },
        { label: "NIDCD: Hearing Aids", href: "https://www.nidcd.nih.gov/health/hearing-aids" }
      ]
    }
  },
  {
    path: "/musician-hearing-aids-westchester",
    title: "Hearing Aids for Musicians in Westchester",
    metaTitle: "Hearing Aids for Musicians in Westchester, NY",
    metaDescription: "Hearing aids for musicians need more than a speech setting. Learn about music programs, feedback and sound quality, and how we fit them in Westchester.",
    h1: "Hearing Aids for Musicians in Westchester",
    heroImage: { src: "/assets/blog-seed/photo-v2/hearing-protection-concerts-musician-vs-foam-photo-v2.webp", alt: "Musician at a concert who needs hearing aids that keep music clear" },
    sections: [
      "Why music is different from speech",
      "Music programs",
      "Feedback and sound quality",
      "Compression and loud peaks",
      "Protecting the hearing you have",
      "What to bring to your visit",
      "What we cannot promise"
    ],
    body: [
      "Yes, we fit hearing aids for musicians. We see patients from every profession, and some of them play or sing. Hearing aids are built mainly to help you understand speech. Music is a different job, so a musician should say so at the first visit. This page explains what is different and what to ask your audiologist.",
      "Why music is different from speech",
      "Speech changes level and pitch in a narrow range. Music can be much louder, can last for a long time, and often has pure, steady tones. Hearing aid settings that suit a conversation can distort a flute, flatten a piano, or cut the top off a cymbal. Musicians also need to hear their own instrument and the players around them. The settings that help in a restaurant may not be the settings that help on stage.",
      "Music programs",
      "Many hearing aids have a separate music program. Greasley and Crook, writing in ENT & Audiology News in 2021, advise using a manufacturer music program, because it can include other strategies. They also say that research on the benefit is mixed and that each patient should try the program and judge it. We agree with that approach. Try the program in the rooms where you play and listen, and tell us what you hear.",
      "Feedback and sound quality",
      "Hearing aids have a feedback manager that removes whistling. It can mistake steady musical notes, such as an organ or a flute, for feedback and suppress them. Greasley and Crook note that an audiologist may switch it off for the music program if you report problems with live music. Marshall Chasin, an audiologist who writes about musicians and hearing aids, also suggests turning off noise reduction and frequency shifting in the music program, because they can change musical sound. These are options for your audiologist to weigh, not a rule for every patient.",
      "Compression and loud peaks",
      "Compression changes how a hearing aid handles loud and soft sounds. Greasley and Crook report that slow-acting compression was linked to higher preference ratings for classical music in some studies. They say more research is needed. Chasin suggests devices that can take in loud peaks without clipping, and a low compression ratio so music keeps its dynamics. Your audiologist can explain which of these your devices allow. Not every hearing aid has these options. We do not promise that a specific product will suit your instrument.",
      "Protecting the hearing you have",
      "Loud music can harm hearing over time. The National Institute on Deafness and Other Communication Disorders (NIDCD) lists band and orchestra rehearsals and performances among the times to wear hearing protection. Custom musician earplugs are molded to the ear and lower the sound while letting in as much natural sound as possible. We make custom earplugs. Read our pages on custom earplugs and on concert hearing protection.",
      "What to bring to your visit",
      "Bring your instrument or tell us what you play. Tell us where you play, how loud it is, and whether you use in-ear monitors or a stage monitor. Bring your hearing aids if you have them. Write down what sounds wrong: notes that sound out of tune, a harsh tone, a cut-off sound, or your own instrument sounding strange. These details help us choose and set up devices for you.",
      "What we cannot promise",
      "Hearing aids do not restore normal hearing. The research on hearing aids and music is still limited. The recommendations in the Greasley and Crook article come from a survey of 99 audiologists, and the authors say the evidence is not yet enough for validated guidelines. We will not promise that music will sound the way it did before. We will work with you on settings, check them in the rooms where you play, and adjust. Call our Harrison office at (914) 949-0034 or our Somers office at (914) 556-6720 to book."
    ],
    faqs: [
      { question: "Do you fit hearing aids for musicians?", answer: "Yes. We work with a number of musicians. Tell us what you play and where, so we can plan your fitting around it." },
      { question: "Can hearing aids make music sound natural?", answer: "They can help, but they may not make music sound as it did before. A music program and careful settings can improve it. Research on this is limited, so we adjust with you and check the result in your own setting." },
      { question: "Should I turn off the feedback manager for music?", answer: "Your audiologist decides. The feedback manager can mistake steady notes for feedback. Switching it off for a music program is one option when live music is a problem." },
      { question: "Do hearing aids work with in-ear monitors?", answer: "Tell us if you use in-ear monitors. We plan the fitting around how you perform. Ask about this at your first visit." },
      { question: "Should I wear earplugs when I play?", answer: "Loud music can harm hearing over time. We make custom earplugs, and the NIDCD advises hearing protection for band and orchestra rehearsals and performances." }
    ],
    related: [
      { label: "Hearing Protection for Concerts: Musician Earplugs vs Foam Plugs", href: "/hearing-protection-concerts-musician-vs-foam" },
      { label: "Custom Earplugs in Westchester", href: "/custom-earplugs-westchester" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Bluetooth Hearing Aids: What to Know Before Buying", href: "/bluetooth-hearing-aids-before-buying" },
      { label: "Hearing Aid Adjustments in Westchester", href: "/hearing-aid-adjustments-westchester" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing protection", href: "/hearing-protection" },
      { label: "Tinnitus after loud noise: what to do next", href: "/tinnitus-after-loud-noise-what-to-do" },
      { label: "Hearing protection service overview", href: "/how-we-can-help/hearing-protection" }
    ],
    blogMeta: {
      frame: "Patient guide",
      byline: "From the audiology desk",
      reviewedBy,
      readTime: "4 min read",
      articleType: "Hearing aids",
      pullQuote: "Hearing aids are built mainly for speech. Music is a different job, so say so at the first visit.",
      keyTakeaways: [
        "We fit hearing aids for musicians. Tell us what you play and where.",
        "Many hearing aids have a music program. Try it in the rooms where you play.",
        "Feedback management and noise reduction can change musical sound. Your audiologist can adjust them.",
        "Research on hearing aids and music is limited, and we do not promise a result.",
        "Protect the hearing you have. We make custom earplugs."
      ],
      patientQuestion: "Are there hearing aids for musicians?",
      storyLead: "What is different about hearing aids for music, which settings your audiologist can change, and what to bring to a fitting.",
      sources: [
        { label: "Greasley and Crook: Clinical strategies for improving music listening (ENT & Audiology News, 2021)", href: "https://www.entandaudiologynews.com/features/audiology-features/post/clinical-strategies-for-improving-music-listening" },
        { label: "Marshall Chasin: Guidelines for musicians with hearing loss to bring to their audiologist (Hearing Health & Technology Matters, 2020)", href: "https://hearinghealthmatters.org/hear-the-music/2020/top-post-2020-6/" },
        { label: "NIDCD: Hearing Protectors", href: "https://www.nidcd.nih.gov/publication-products/hearing-protectors" }
      ]
    }
  },
  {
    // reviewedBySlug intentionally unset until a clinician reviews this page
    path: "/precision-hearing-care-audiogram",
    title: "Precision Hearing Care: Why Your Audiogram Matters More Than Ever",
    metaTitle: "Precision Hearing Care: Why Your Audiogram Matters (2026)",
    metaDescription: "A 2026 study found audiograms capture hearing loss risk better than diagnosis codes. See what that means and when to book a baseline test.",
    h1: "Precision Hearing Care Is Coming: Why Your Audiogram Matters More Than Ever in 2026",
    heroImage: { src: "/assets/news/precision-hearing-care-audiogram-westchester.png", alt: "Audiogram chart of hearing thresholds beside a DNA helix, illustrating precision hearing care in Westchester" },
    ogImage: { src: "/assets/og/precision-hearing-care-audiogram.png", alt: "Your audiogram matters more than ever: what a 2026 hearing genetics study means for you. Audiology Associates of Westchester." },
    ogTitle: "Why Your Audiogram Matters More Than Ever",
    ogDescription: "A new hearing genetics study found the audiogram carries more signal than diagnosis codes. What it shows, what it does not, and why a baseline test helps.",
    sections: ["Research explained", "Hearing test", "Brain health", "Frequently asked questions"],
    body: [
      "Neuroscience News reported on October 8, 2026 on a new hearing genetics study from Vanderbilt University Medical Center, published in JAMA Otolaryngology–Head & Neck Surgery. The team ran two genetic searches on the same biobank. The search built on diagnosis codes found nothing. The search built on audiogram measurements found three regions of the genome that map to four genes: EML6, SPTBN1, ARHGEF28 and EYA4.",
      "It is a quiet result, and it is about something our audiologists do every day. A hearing test is not only a way to decide whether you need hearing aids. It is measured data about how your auditory system works, and this study suggests that kind of data is what precision medicine will lean on. We think about hearing the same way at Audiology Associates of Westchester: as part of how your brain gets information from the world, not a box to tick. This page explains what the study found, what it does not show, and why a baseline audiogram is worth having on file. Our sister practice in California covers the same paper from the genetics side in [its own explainer](https://www.calhearing.com/hearing-test-genetic-risk-hearing-loss/).",
      "What the Vanderbilt team did",
      "The researchers used whole-genome sequencing data from a Vanderbilt biobank of people of European ancestry. They ran two genome-wide association studies, which scan the genome for small DNA differences that travel with a trait. The first defined hearing loss mainly by diagnosis codes in medical records, with 10,164 cases and 51,305 controls. The second used a number from the audiogram instead: the pure-tone average, which is the average of the quietest tones a person hears at three test pitches, taken from the better ear. That analysis included 16,057 people with audiogram data.",
      "Why a number beat a label",
      "Only the audiogram search found anything: three genome-wide significant regions, mapped to four genes. The diagnosis-code search found none. The team also estimated how much of the variation in hearing could be tied to common DNA differences. Audiogram data put that share at 11.78 percent. Diagnosis codes put it at 2.90 percent. Lead author Andrea DeFreese, AuD, described the trouble with codes this way: they leave 'a kind of gray area in which we're not able to accurately define who has hearing loss and who doesn't.' A code says someone has hearing loss. An audiogram shows how much, and at which pitches. The precision lives in that detail.",
      "What the study does not show",
      "In a separate check against the NIH All of Us cohort, people with a higher audiogram-based risk score were somewhat more likely to report deafness (odds ratio 1.09, 95 percent confidence interval 1.07 to 1.12). The same check using diagnosis codes showed no link (odds ratio 1.00). A 1.09 is a small nudge, not a forecast. The study has other limits: one medical center, people of European ancestry, and a check against self-reported deafness rather than a hearing test. The four genes are associated regions, not 'the hearing loss genes.' This is research. We do not offer genetic testing for these genes, and nothing in the study says a score can forecast your own hearing.",
      "The mammogram of hearing, and where the idea breaks",
      "We like to call a baseline audiogram the mammogram of hearing. That is our analogy, not a medical guideline, and it breaks in places. A mammogram screens for a disease. A baseline audiogram does something quieter: it records where your hearing sits today, so later changes show up against your own history instead of a population average. Hearing often shifts slowly enough that people adapt without noticing. A result on file from your 50s, or earlier if noise or family history worry you, turns 'I think it is worse' into a comparison you can measure. If you have never had a full test, read [what happens during a comprehensive hearing evaluation](/what-happens-during-comprehensive-hearing-evaluation) and [how often adults should get their hearing checked](/how-often-should-adults-get-hearing-checked).",
      "Where the brain comes in",
      "Our approach starts from a simple idea: hearing is something the brain does with help from the ears. When sound arrives incomplete, the brain spends effort filling the gaps, which is one reason a restaurant can feel exhausting. An audiogram cannot measure that effort, and a hearing test is not a cognitive test, so we keep the two apart. Cognitive screening is its own service, and our guide to [hearing tests and cognitive screening](/hearing-test-and-cognitive-screening) explains how they fit together. The evidence is modest and specific. In the ACHIEVE randomized trial, hearing treatment did not change three-year cognitive decline across the whole study group, but it did slow decline in a higher-risk subgroup. Read more about [listening effort and fatigue](/hearing-loss-cognitive-effort-listening-fatigue). A carefully measured audiogram is where that kind of care begins.",
      "Precision care you can use today",
      "The measurements that power this research also guide a good fitting right now. Your audiologist programs hearing aids to the shape of your audiogram instead of an average, then uses real-ear measurement to check what the devices deliver at your eardrum, and live speech mapping to show the benefit as it happens. That is why we treat [hearing aid fitting](/hearing-aid-fitting) as a precision service, and why we explain [why real-ear verification matters](/why-real-ear-verification-matters). If you are weighing this fall's new devices, our [roundup of the five new AI hearing aids](/best-ai-hearing-aids-fall-2026) shows why the fitting matters as much as the chip. Precision hearing care is not waiting for genetics. It starts with a careful test and a result you understand.",
      "Planning a baseline test in Westchester",
      "If you live or work around Harrison, Rye, Scarsdale, White Plains or Greenwich, our [Harrison office](/harrison-ny) is the closest. For northern Westchester and Putnam County, look at our [Somers office](/Somers-NY). Bring any old audiograms, a list of medications, and a short note about where listening feels hard. To learn the price first, see [what a hearing test costs in Westchester](/how-much-does-a-hearing-test-cost-westchester). Sudden hearing loss, hearing that is clearly worse in one ear, ringing in one ear, dizziness or ear pain should not wait for a routine baseline. See a clinician promptly.",
      "Status and last update",
      "Last updated October 8, 2026. Change note: this is the first version, written the day the study was reported. We will update this page if the full paper, replication studies or clinical guidance change the picture. We could not open the full JAMA article, which sits behind a verification page, so the study figures here come from the Neuroscience News summary of it. Sources are listed at the end of this page.",
      "Medical information notice",
      "This page is for information only and is not medical advice. A hearing test shows how well you hear. It does not diagnose the cause of a hearing loss or predict your future hearing. Talk to your physician about whether genetic testing is right for you."
    ],
    faqs: [
      { question: "What is an audiogram, in plain words?", answer: "An audiogram is a chart of the quietest sounds you can hear at different pitches, usually for each ear. It shows how much hearing you have at low, middle and high pitches. Your audiologist uses it to explain your loss and to program hearing aids if you need them." },
      { question: "Is a baseline hearing test worth it if I hear fine?", answer: "It can be. A baseline records your hearing while it is still good, so later changes show up against your own history. It also catches slow changes that people often adapt to without noticing." },
      { question: "At what age should I get a baseline hearing test?", answer: "We know of no single rule that fits everyone. We suggest considering one in your 50s, or sooner if you have noise exposure, a family history of hearing loss or ringing in the ears. Our guide on [how often adults should get their hearing checked](/how-often-should-adults-get-hearing-checked) goes through the factors." },
      { question: "Does this study mean hearing loss is inherited?", answer: "It shows that common DNA differences account for some of the variation in hearing, about 11.78 percent in this analysis, and that four genes sit near the signals it found. Age, noise exposure and health conditions also matter. The study does not say any one person will or will not lose hearing." },
      { question: "Can I get a genetic hearing test at Audiology Associates of Westchester?", answer: "No. We do not offer genetic testing for these genes, and the study is research, not a clinical test. If hearing loss runs in your family or began in childhood, talk to your physician about whether genetic counseling makes sense." },
      { question: "Does a normal audiogram mean I am in the clear?", answer: "Not always. A normal test shows your hearing at the time of the test. Trouble understanding speech in noise, ringing or sudden change still deserve a conversation with an audiologist, and a repeat test over time is how slow change shows up." }
    ],
    related: [
      { label: "Hearing Tests and Cognitive Screening", href: "/hearing-test-and-cognitive-screening" },
      { label: "What Happens During a Comprehensive Hearing Evaluation", href: "/what-happens-during-comprehensive-hearing-evaluation" },
      { label: "How Often Should Adults Get Their Hearing Checked?", href: "/how-often-should-adults-get-hearing-checked" },
      { label: "Hearing Loss and Listening Fatigue", href: "/hearing-loss-cognitive-effort-listening-fatigue" },
      { label: "Is Hearing Loss Normal With Age?", href: "/is-hearing-loss-normal-with-age" },
      { label: "Sensorineural hearing loss", href: "/hearing-loss/sensorineural-hearing-loss" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Comprehensive Hearing Assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "Cognivue Cognitive Screening", href: "/how-we-can-help/cognivue-cognitive-screening" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Why Real-Ear Verification Matters", href: "/why-real-ear-verification-matters" },
      { label: "The 6 hearing aid platforms of fall 2026", href: "/best-ai-hearing-aids-fall-2026" },
      { label: "What a hearing test costs in Westchester", href: "/how-much-does-a-hearing-test-cost-westchester" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" },
      { label: "Hearing care across Westchester County", href: "/areas-we-serve/westchester-county-ny" }
    ],
    blogMeta: {
      frame: "Research explained",
      byline: "An explainer on the new hearing genetics research",
      reviewedBy,
      readTime: "6 min read",
      articleType: "Research explained",
      pullQuote: "A diagnosis code says someone has hearing loss. An audiogram shows how much, and at which pitches. In this study, only the second one found genes.",
      keyTakeaways: [
        "A Vanderbilt study in JAMA Otolaryngology–Head & Neck Surgery found three regions mapped to four genes (EML6, SPTBN1, ARHGEF28, EYA4) using audiogram data. A search built on diagnosis codes found none.",
        "Audiogram data carried more genetic signal: 11.78 percent of variation tied to common DNA differences, against 2.90 percent for diagnosis codes.",
        "These are research findings. No score in the study predicts your own hearing, and we do not offer genetic testing for these genes.",
        "A baseline audiogram gives you a personal record to compare against later, and the same data guides a precise hearing aid fitting today."
      ],
      patientQuestion: "Why does my audiogram matter if I hear fine?",
      storyLead: "A new hearing genetics study suggests the audiogram carries more information than we assumed. Here is what it found, what it does not show, and why a baseline test is worth having on file.",
      comparisonTable: {
        afterHeading: "Why a number beat a label",
        caption: "Diagnosis codes versus audiogram data in the Vanderbilt hearing genetics study",
        headers: ["", "Diagnosis codes", "Audiogram (pure-tone average)"],
        rows: [
          ["How hearing loss was defined", "Mainly diagnosis codes in medical records", "Pure-tone average from the better ear, treated as a number"],
          ["People analyzed", "10,164 cases and 51,305 controls", "16,057 people with audiogram data"],
          ["Genome-wide significant regions", "None", "Three, mapped to four genes"],
          ["Genes named", "None", "EML6, SPTBN1, ARHGEF28, EYA4"],
          ["Variation tied to common DNA differences", "2.90 percent", "11.78 percent"],
          ["Risk score checked against self-reported deafness in All of Us", "No significant association (odds ratio 1.00)", "Significant association (odds ratio 1.09)"]
        ]
      },
      notify: {
        context: "Notify: Precision hearing care and audiogram research updates",
        heading: "Get one email if the research moves.",
        body: "We will send one email if the full paper, a replication study or new guidance changes what this page says.",
        button: "Notify me"
      },
      sources: [
        { label: "Neuroscience News: Can we predict hearing loss long before symptoms ever start?", href: "https://neurosciencenews.com/can-we-predict-hearing-loss-long-before-symptoms-ever-start/" },
        { label: "JAMA Otolaryngology–Head & Neck Surgery: Precision Phenotyping With Audiometric Data and Gene Discovery for Sensorineural Hearing Loss (DOI)", href: "https://doi.org/10.1001/jamaoto.2026.3089" },
        { label: "JAMA Network: Audiology and hearing collection", href: "https://jamanetwork.com/collections/42098/audiology-and-hearing" },
        { label: "National Institute on Aging: Hearing aids and cognitive decline (ACHIEVE)", href: "https://www.nia.nih.gov/news/hearing-aids-slow-cognitive-decline-people-high-risk" },
        { label: "California Hearing Center: Your hearing test may reveal genetic risk for hearing loss", href: "https://www.calhearing.com/hearing-test-genetic-risk-hearing-loss/" }
      ]
    }
  },
  {
    // reviewedBySlug intentionally unset until a clinician reviews this page
    path: "/elehear-beyond-2-pro-vs-prescription-hearing-aids",
    title: "Elehear Beyond 2 Pro vs. Prescription Hearing Aids",
    metaTitle: "Elehear Beyond 2 Pro vs Prescription Hearing Aids (2026)",
    metaDescription: "Elehear's $799 Beyond 2 Pro adds Auracast and translation. See what OTC can and cannot do next to fitted hearing aids, and who should test first.",
    h1: "Elehear Beyond 2 Pro vs. Prescription Hearing Aids: Who Should Choose Which in 2026",
    heroImage: { src: "/assets/news/elehear-vs-prescription-hearing-aids-westchester.png", alt: "A phone with tone sliders beside an ear and hearing test card, comparing app-set and clinic-fitted hearing aids in Westchester" },
    ogImage: { src: "/assets/og/elehear-beyond-2-pro-vs-prescription-hearing-aids.png", alt: "Elehear Beyond 2 Pro vs. prescription hearing aids: a Westchester guide to the $799 OTC question. Audiology Associates of Westchester." },
    ogTitle: "Elehear Beyond 2 Pro vs. Prescription Hearing Aids",
    ogDescription: "The $799 OTC hearing aid with Auracast, set beside fitted hearing aids, with three questions that decide which one suits you.",
    sections: ["Buyer decision guide", "Hearing aid buying", "Frequently asked questions"],
    body: [
      "Elehear launched the Beyond 2 Pro on September 22, 2026. It is a rechargeable receiver-in-canal hearing aid sold directly by the company for $799 a pair, aimed at adults with perceived mild to moderate hearing loss and sold without a prescription. It adds Auracast support, a new generation of speech processing and face-to-face translation in the app. For many of our Westchester and Greenwich patients, the question is not whether it is clever. It is whether $799 and an app can do the work of a fitted hearing aid.",
      "Our short answer is that it can be a sensible first step for some people and the wrong one for many others. This guide gives you a way to decide. We start with what Elehear says the device does, label every performance number as a company claim, and then walk through the three questions that matter more than any spec. We do not sell Elehear devices, and no independent lab has published results for this model yet, so we rank nothing.",
      "What the Beyond 2 Pro offers on paper",
      "Everything here comes from Elehear or from trade press covering the launch. The processing is called VOCCLEAR 3.0. It builds on Elehear's deep neural network noise reduction and adds a feature aimed at competing voices. Auracast support lets the aids receive compatible public Bluetooth broadcasts, though public coverage is still limited. The app offers bass, midrange and treble sliders in 1 dB steps across plus or minus 8 dB, plus real-time AI translation for face-to-face conversation, in 20 languages according to HearingTracker. Each aid weighs about 4.3 grams, has an IP67 rating, and uses user-replaceable receivers in several lengths. Optional ElePro Plus remote audiology costs $99 a session. Elehear also reports a 39 percent improvement in speech understanding in very noisy conditions and feedback suppression that responds 32 percent faster, both against its previous generation and both from internal testing. Treat those as company claims until a lab repeats them.",
      "What is independent and what is not",
      "HearingTracker and its lab partner HearAdvisor have said they have not yet published test results for the Beyond 2 Pro. Elehear's earlier Beyond Pro did score well in HearAdvisor's lab, with a SoundScore of 4.8 out of 5, according to HearingTracker. That is useful background on the company's engineering. It is also a different device, and a lab score describes performance in a standard test, not what you will hear in your own kitchen. We will update this page when Beyond 2 Pro results appear.",
      "The Beyond 2 Pro and prescription hearing aids side by side",
      "The table sets the Beyond 2 Pro next to a prescription hearing aid fitted in a clinic. The middle column comes from Elehear and press coverage. The last column describes how a fitted device is handled, and we show no price for it because prices vary by device and clinic.",
      "Three questions that decide it",
      "First, what does your hearing test show? Over-the-counter hearing aids are built for perceived mild to moderate loss in adults, and the word perceived matters, because nobody confirms the degree of your loss before you buy. A hearing test does. It also shows whether your ears differ and whether you understand speech clearly or only hear it louder. Second, what is your hardest listening moment? If it is a quiet dinner for two, a self-fit device may be enough to try. If it is a loud restaurant, a family table or a work meeting, ask how the device is tuned and checked for that moment, because noise is where precision matters most and where listening effort builds. Third, who adjusts it when it is wrong? Every hearing aid needs fine-tuning in the first weeks. With an over-the-counter device the answer is you, the app and remote support where it exists. With a fitted device it is a person who has measured your ear.",
      "When an over-the-counter first try is reasonable",
      "A first try can make sense if your loss feels mild to moderate and about equal in both ears, you are comfortable with phone apps, budget is the main barrier, and nothing on the red-flag list below applies. Do three things first. Get a baseline hearing test, so you know what you are working with. Ask about the return window and warranty before you pay, because we did not find either in the launch coverage we reviewed. Keep your receipt and your test results in case you move to a fitted device later. Hearing help that you actually wear beats hearing help you keep postponing.",
      "When prescription care tends to win",
      "Start with a professional evaluation if one ear is worse than the other, if tinnitus bothers you, if you hear people but cannot make out the words, if you have tried over-the-counter devices and still struggle, or if your loss is more than mild to moderate. The same goes for ear pain, drainage, dizziness or a sudden change, which are medical questions before they are hearing aid questions. The FDA also says over-the-counter hearing aids are for adults 18 and older, so children and teens need a professional evaluation. Prescription fitting adds a measured result: your audiologist programs from your audiogram, checks the output in your ear, and adjusts over follow-up visits. Our guides to [why real-ear verification matters](/why-real-ear-verification-matters) and [what to expect at a hearing aid fitting](/what-to-expect-hearing-aid-fitting) explain that process.",
      "Auracast at $799: a sober note",
      "Auracast lets hearing devices receive public broadcast audio in venues that install it, and that list is still short. Before you pay for the feature, ask where you would use it. Our guides explain [what Auracast is and how it works](/auracast-hearing-aids-explained) and [what the first US theater going live means](/auracast-goes-live-in-a-us-theater). We also compare this fall's new flagship hearing aids, which all list Auracast, in our [roundup of five new AI hearing aids](/best-ai-hearing-aids-fall-2026).",
      "The Westchester angle: remote care and local follow-up",
      "Elehear launched ElePro Plus on August 17, 2026 in nine states, and Hearing Review's list did not include New York or Connecticut. Hearing Health Matters later reported 24 states as of September 9, but we could not find that list, so confirm with Elehear before you count on remote sessions from Westchester or Greenwich. Local follow-up is a separate question. If you already own an over-the-counter device, call us with the make and model. Whether we can adjust it depends on the model, and our guide to [programming hearing aids bought somewhere else](/can-audiologist-program-hearing-aids-bought-elsewhere) explains what to expect. If you are weighing a quote or a device you own, a [hearing aid second opinion](/hearing-aid-second-opinion) at our Harrison or Somers office is built for that.",
      "Status and last update",
      "Last updated October 8, 2026. Change note: this is the first version. We will update this page when independent lab results, return terms, FDA listing details or New York and Connecticut remote-care coverage become available. Prices and specifications come from Elehear and trade press as of October 8, 2026 and may change. Sources are listed at the end of this page.",
      "Medical information notice",
      "This page is for information only and is not medical advice. Over-the-counter hearing aids do not suit everyone, and a hearing evaluation is the way to find out what suits you. Audiology Associates of Westchester does not sell Elehear devices."
    ],
    faqs: [
      { question: "Is the Elehear Beyond 2 Pro as good as a prescription hearing aid?", answer: "Nobody can say yet, because no independent lab has published results for it. It can be a reasonable first step for mild to moderate loss, but it is self-fit, and the launch coverage we reviewed describes no real-ear verification. A prescription fitting adds a measured result that an app cannot replace." },
      { question: "Can I bring an Elehear to an audiologist for adjustments?", answer: "Call us with the make and model before you book. Whether we can adjust an over-the-counter device depends on the model and its software. We can always test your hearing and tell you whether the device matches your results." },
      { question: "Is the Beyond 2 Pro FDA approved?", answer: "It is sold as an over-the-counter hearing aid, a category the FDA created in 2022 for adults with perceived mild to moderate loss. The launch coverage we reviewed does not describe the product's FDA filing, so check Elehear's materials and the FDA's device databases before you buy." },
      { question: "Will Auracast work where I live?", answer: "Only in venues that have installed it, and public coverage is still limited. Ask yourself where you would use it before you pay for it. Our Auracast guides list what has gone live so far." },
      { question: "Is $799 a good price for hearing aids?", answer: "It is a price per pair for a self-fit device, and it does not include a hearing test, in-person fitting or follow-up visits. Prescription prices vary widely by device and clinic. Our [hearing aid cost guide for Westchester County](/hearing-aid-cost-westchester-county) explains what a fitted price covers." },
      { question: "Who should not start with an over-the-counter hearing aid?", answer: "Anyone under 18, and anyone with sudden hearing loss, hearing clearly worse in one ear, ear pain or drainage, dizziness, or ringing in one ear, should get an evaluation first. The same goes if you cannot follow speech in a quiet room." }
    ],
    related: [
      { label: "OTC vs Prescription Hearing Aids: Real-World Differences", href: "/otc-vs-prescription-hearing-aids-real-world" },
      { label: "Are OTC Hearing Aids Right for Me?", href: "/are-otc-hearing-aids-right-for-me" },
      { label: "Prescription vs OTC hearing aids", href: "/prescription-vs-otc-hearing-aids" },
      { label: "Hearing Glasses Compared: Legato vs Nuance vs Hearing Aids", href: "/hearing-glasses-comparison" },
      { label: "Auracast hearing aids explained", href: "/auracast-hearing-aids-explained" },
      { label: "Why Real-Ear Verification Matters", href: "/why-real-ear-verification-matters" },
      { label: "Programming Hearing Aids Bought Somewhere Else", href: "/can-audiologist-program-hearing-aids-bought-elsewhere" },
      { label: "Hearing aid second opinion in Westchester", href: "/hearing-aid-second-opinion" },
      { label: "How Much Do Hearing Aids Cost in Westchester County?", href: "/hearing-aid-cost-westchester-county" },
      { label: "Questions to Ask Before Buying Hearing Aids", href: "/questions-before-buying-hearing-aids" },
      { label: "The 6 hearing aid platforms of fall 2026", href: "/best-ai-hearing-aids-fall-2026" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" }
    ],
    blogMeta: {
      frame: "Buyer decision guide",
      byline: "A buyer's guide to the $799 over-the-counter question",
      reviewedBy,
      readTime: "7 min read",
      articleType: "Buyer decision guide",
      pullQuote: "The spec sheet tells you what the device can do. A hearing test tells you what your ears need. You want both before you spend $799.",
      keyTakeaways: [
        "Elehear launched the Beyond 2 Pro on September 22, 2026: a $799 per pair over-the-counter receiver-in-canal hearing aid with Auracast support, for adults with perceived mild to moderate loss.",
        "The 39 percent and 32 percent improvements are Elehear's internal figures. No independent lab has published results for this model yet.",
        "It can be a reasonable first try for mild, even hearing loss if you test first and check the return terms. One-sided loss, tinnitus, dizziness or a history of struggling with OTC aids points to a professional evaluation.",
        "Elehear's remote audiology listed no New York or Connecticut coverage in launch reporting. Confirm before you rely on it."
      ],
      patientQuestion: "Should I buy the $799 Elehear Beyond 2 Pro or see an audiologist?",
      storyLead: "Elehear's new over-the-counter hearing aid adds Auracast and AI translation at $799. Here is what it can and cannot do next to a fitted hearing aid, and who should get a hearing test first.",
      comparisonTable: {
        afterHeading: "The Beyond 2 Pro and prescription hearing aids side by side",
        caption: "Elehear Beyond 2 Pro and prescription hearing aids fitted in a clinic compared",
        headers: ["", "Elehear Beyond 2 Pro", "Prescription hearing aids fitted in a clinic"],
        rows: [
          ["Price", "$799 per pair, sold direct by Elehear", "Varies by device and clinic. Ask what testing, fitting and follow-up the price includes"],
          ["Who it is for", "Adults 18 and older with perceived mild to moderate hearing loss", "Mild to profound loss, including one-sided loss"],
          ["How it is set", "Self-fit through the Elehear app", "Programmed to your audiogram by an audiologist"],
          ["Checked in your ear", "No real-ear verification described in the launch coverage", "Real-ear measurement checks the output at your eardrum"],
          ["Support", "Optional ElePro Plus remote audiology at $99 a session, in a limited list of states", "In-person adjustments, cleaning and repairs at the clinic"],
          ["Auracast", "Supported, per Elehear. Public venue coverage is still limited", "Varies by model. Ask whether it is active now"],
          ["Noise performance", "39 percent speech-in-noise improvement over the last generation is Elehear's internal figure. No independent test yet", "Varies by device. Ask for a demonstration in noise"],
          ["Trial period and warranty", "Not stated in the launch coverage we reviewed. Ask Elehear", "Set by each provider. Ask for it in writing"]
        ]
      },
      notify: {
        context: "Notify: Elehear Beyond 2 Pro lab results",
        heading: "Get one email when lab results appear.",
        body: "We will send one email when independent lab results for the Beyond 2 Pro are published or when Elehear clarifies its return terms and remote-care states.",
        button: "Notify me"
      },
      sources: [
        { label: "HearingTracker: ELEHEAR Beyond 2 Pro OTC Hearing Aids Debut at $799", href: "https://www.hearingtracker.com/news/elehear-launches-799-beyond-2-pro-otc-hearing-aids" },
        { label: "Hearing Health Matters: ELEHEAR Introduces Beyond 2 Pro", href: "https://hearinghealthmatters.org/hearing-technologies/2026/beyond-pro-2-launch/" },
        { label: "audioXpress: Elehear introduces Beyond Pro OTC hearing aids with Auracast", href: "https://audioxpress.com/news/elehear-introduced-beyond-pro-otc-hearing-aids-with-auracast" },
        { label: "Hearing Review: ELEHEAR launches ElePro Plus live tele-audiology service", href: "https://hearingreview.com/hearing-products/hearing-aids/otc/elehear-launches-elepro-plus-live-tele-audiology-service-for-otc-hearing-aid-users" },
        { label: "HearingTracker: Elehear Beyond Pro review and lab results", href: "https://legacy.hearingtracker.com/hearing-aids/elehear-beyond-pro" },
        { label: "FDA: OTC Hearing Aids, What You Should Know", href: "https://www.fda.gov/medical-devices/hearing-aids/otc-hearing-aids-what-you-should-know" },
        { label: "California Hearing Center: Elehear Beyond 2 Pro explained", href: "https://www.calhearing.com/elehear-beyond-2-pro/" }
      ]
    }
  },
  {
    // reviewedBySlug intentionally unset until a clinician reviews this page
    path: "/best-ai-hearing-aids-fall-2026",
    title: "The 6 Hearing Aid Platforms to Know in Fall 2026",
    metaTitle: "Best AI Hearing Aids Fall 2026: 6 Platforms Compared",
    metaDescription: "Six hearing aid platforms for fall 2026: Sensia, Reveal, EON, MaX, Omega AI+ and Allure AI. Compare them in one table, then see which fits you.",
    h1: "The 6 Hearing Aid Platforms to Know in Fall 2026: Which One Is Right for You?",
    heroImage: { src: "/assets/news/best-ai-hearing-aids-fall-2026-westchester.png", alt: "Timeline of six hearing aid announcements from May 20 to October 1, 2026, above a network diagram, for the fall 2026 comparison in Westchester" },
    ogImage: { src: "/assets/og/best-ai-hearing-aids-fall-2026.png", alt: "6 hearing aid platforms to know in fall 2026: ReSound, Oticon, Phonak, Signia, Starkey and Widex compared. Audiology Associates of Westchester." },
    ogTitle: "The 6 Hearing Aid Platforms to Know in Fall 2026",
    ogDescription: "ReSound Sensia, Oticon Reveal, Phonak EON, Signia MaX, Starkey Omega AI+ and Widex Allure AI in one honest table, and how we choose among them.",
    sections: ["Hearing technology", "Roundup", "Frequently asked questions"],
    body: [
      "Between August 10 and October 1, 2026, five of the big hearing aid makers each introduced a new AI flagship: ReSound Sensia, Oticon Reveal, Phonak EON, Signia MaX and Starkey Omega AI+. Widex, the sixth, announced its Allure AI RIC earlier, on May 20, but does not reach the US until November 1, so it belongs on any fall shopping list. That is a lot of acronyms and a lot of marketing, and patients have started asking us by name which one to buy.",
      "Here is our honest answer. As of October 8, 2026, no independent lab has published results for all six, so we crown no winner. We also do not recommend one brand over another before we know you. This page lays the platforms side by side using what the companies and trade press have published, marks performance figures as company claims, and writes 'not stated' wherever a source is silent. Then it explains why, in our experience, the fitting matters more than the chip.",
      "The six platforms at a glance",
      "Dates are announcement dates, and availability is what the sources state. Widex announced in May, earlier than the other five. 'Not stated' means we found no figure in the sources we checked. Battery figures are company claims for the rechargeable models and vary with use. The table is current as of October 8, 2026, and none of these companies has published a price in the launch material we reviewed.",
      "What the platforms have in common",
      "Three things stand out. Every one now uses AI to separate speech from noise, through deep neural networks or a dual-AI design, although Widex's Clarity Boost runs only when the wearer switches it on. Five of the six list Auracast, although the public venues that broadcast it are still few, and Signia's waits on a firmware update. For Widex, one trade report calls the device Auracast-ready and the company's own release does not mention it. And none of the launch announcements we reviewed states a price. That last point matters: you cannot budget from a launch article, and anyone quoting a number is quoting a retailer or a practice. HearingTracker lists retail prices per pair for the top level of some of these, from $3,298 for Signia MaX 7 to $4,598 for Oticon Reveal 1 and Phonak EON Sphere 90. Those are retail listings, not manufacturer prices, and a clinic price also covers testing, fitting and follow-up care.",
      "Reading the lab scores",
      "HearAdvisor, a hearing aid lab that works with HearingTracker, has published scores for three of the six: Oticon Reveal 1 at 5.1, Phonak EON Sphere 90 at 5.0 and Signia MaX 7 at 4.3, against a prescription-category average of 4.19. All three earned an A grade. Three cautions apply. The scores cover each company's top technology level, not the lower ones. A gap of a tenth of a point is not something we would shop on. And a lab score describes sound quality in a standard test, not the benefit in your ears. HearingTracker says it has not yet tested ReSound Sensia, and HearAdvisor said it would test Starkey Omega AI+ soon. We found no score for Widex Allure AI. The scores HearingTracker lists for Widex are for the earlier, non-AI Allure, which is a different product.",
      "How the six differ",
      "ReSound Sensia, announced August 10 and launching August 20 in the US, runs on the same chips as Vivia. ReSound adds AcoustIQ, which classifies the environment, and says all Sensia models are Auracast-compatible with two models carrying a telecoil. Its [brand page](/hearing-aids-brands/resound) lists the family. Oticon Reveal pairs a Speech AI with a Context AI, and Oticon claims a stronger brain response than its previous generation, a company claim from its own research. See our pages on [Oticon Reveal](/hearing-aids-brands/oticon/oticon-reveal) and [Signia MaX against Oticon Reveal](/hearing-aids-brands/signia/signia-max-vs-oticon-reveal). Phonak EON moves the speech-separation network onto a new HYPERSONIC chip and adds a CROS model; our [Phonak EON explainer](/phonak-eon-what-we-know) follows its claims to their references. Signia MaX splits the work across four networks, and our [Signia MaX explainer](/signia-max-what-we-know) covers its Auracast caveat and what has been measured. Starkey Omega AI+, announced October 1, pairs a G4 processor with four networks, longer rechargeable battery claims and a US-only sleep-tracking feature that Starkey says is not a diagnostic tool; see our [Starkey brand page](/hearing-aids-brands/starkey). Widex Allure AI RIC, announced May 20 and due in the US on November 1, adds a dedicated AI co-processor to the W1 chip of the Allure platform. Its Clarity Boost program is switched on by the wearer rather than always running, and Widex claims up to 6 dB better output signal-to-noise ratio than competitors' AI products, a company claim with no named comparison. See our [Widex brand page](/hearing-aids-brands/widex) and [Widex Allure page](/hearing-aids-brands/widex/widex-allure).",
      "Why the fitting matters more than the chip",
      "The chip decides what a hearing aid can do. The fitting decides what it does for you. A good [hearing aid fitting](/hearing-aid-fitting) programs the device to your audiogram, uses [real-ear measurement](/why-real-ear-verification-matters) to confirm what reaches your eardrum, and continues over [follow-up visits](/how-many-follow-up-visits-new-hearing-aids) as your brain adapts. That is also the brain-first reason to care. When sound arrives clearly, listening takes less effort, and [listening fatigue](/hearing-loss-cognitive-effort-listening-fatigue) eases. A June 2026 analysis in Cell Reports Medicine pooled 61,089 hearing-impaired adults aged 55 and older and found about 9 percent lower risk of probable dementia among hearing aid users than non-users, and about 14 percent lower among those who reported good hearing improvement. People who reported poor improvement saw no significant reduction. The study was observational, so it cannot prove cause, but the researchers' point is useful: the benefit is not about wearing a device, it is whether the device meaningfully improves hearing in daily life.",
      "How to choose among them",
      "We do not recommend a brand up front. The hearing test comes first. Then we learn about you: your days, your phone, your ears and what you want back. Only then does your audiologist narrow the options and recommend the device that serves you best, and that device may be one of these six or none of them. To prepare, start from your life, not the logo. Where does listening break down: restaurants, meetings, the car? Which phone do you use all day? Do you need a telecoil for looped venues? Is one ear much worse? Phonak lists a CROS EON R, Oticon announced a new CROS RE, and ReSound says Sensia Bimodal works with Cochlear Nucleus sound processors, so one-sided loss and [cochlear implant support](/how-we-can-help/cochlear-implants) can shape the shortlist. Bring those answers to an evaluation, and ask for a demonstration in noise, not a quiet booth. Which models we can fit, and when, depends on stock and fitting software and changes week to week, so call before you plan around a model.",
      "Your next step in Harrison or Somers",
      "If you have a quote for one of these, or you wear hearing aids that no longer keep up, a [hearing aid second opinion](/hearing-aid-second-opinion) can compare the options against your own test. Our [Harrison](/harrison-ny) and [Somers](/Somers-NY) offices both fit the brands on our [brands page](/hearing-aids-brands). We recommend by fitting the person, not by brand. Our [cost guide for Westchester County](/hearing-aid-cost-westchester-county) explains what to ask about any quote. California Hearing Center, our sister practice, covers [Signia MaX in its own explainer](https://www.calhearing.com/signia-max-what-we-know/).",
      "Status and last update",
      "Last updated October 8, 2026. Change note: this is the first version, built from launch coverage, HearingTracker's lab listings and the companies' own announcements. It includes Widex Allure AI RIC. We will update it when independent results arrive for ReSound Sensia, Starkey Omega AI+ and Widex Allure AI, when Widex reaches the US on November 1, when companies publish prices, or when Signia switches on Auracast. Sources are listed at the end of this page.",
      "Medical information notice",
      "This page is for information only and is not medical advice. Hearing aids do not suit everyone, and a hearing evaluation is the way to find out what suits you. Performance figures here are company claims or lab scores in standard tests, not promises about your hearing."
    ],
    faqs: [
      { question: "Which of the six hearing aid platforms is best?", answer: "No independent test compares all six yet, so we cannot name a best. We do not recommend a brand before your hearing test and a real conversation about you. Then your audiologist chooses the device that suits your hearing, phone, ears and daily listening, and verifies it in your ear." },
      { question: "Do all six support Auracast?", answer: "Five of the six list Auracast in the launch coverage we reviewed. Signia MaX needs a firmware update planned by March 2027, and one trade report calls Widex Allure AI Auracast-ready while Widex's own release does not mention it. The venues that broadcast Auracast are still few, so ask where you would use it." },
      { question: "Are the new hearing aids available in the US now?", answer: "Per the sources we checked, ReSound said Sensia would launch in the US on August 20, Phonak and Signia reported US availability from August 24, HearingLife listed Oticon Reveal in 42 states on August 27, and Widex says Allure AI reaches the US on November 1. Starkey's announcement did not state an availability date. Availability at any one practice depends on stock and software, so call before you plan around a model." },
      { question: "Do the new hearing aids cost more?", answer: "None of the launch announcements we reviewed states a price. HearingTracker lists retail prices per pair for top levels from $3,298 to $4,598, and clinic prices vary by model, technology level and the care included. Our [cost guide for Westchester County](/hearing-aid-cost-westchester-county) explains what to ask." },
      { question: "Should I upgrade if my current hearing aids work?", answer: "If your aids are verified and doing their job, a new platform is not an obligation. The clearest reasons to look are a change in your hearing, a feature you need such as a CROS option or a particular phone connection, or devices that no longer meet your listening needs. A second opinion can sort out which applies." },
      { question: "Can the new hearing aids slow dementia?", answer: "No hearing aid can promise that. An observational analysis of 61,089 adults found about 9 percent lower probable dementia risk among hearing aid users, with the benefit tied to reported hearing improvement, but observational work cannot prove cause. The practical goal is hearing well in daily life." }
    ],
    related: [
      { label: "Phonak EON: What Is Actually Known", href: "/phonak-eon-what-we-know" },
      { label: "Signia MaX: What Is Actually Known", href: "/signia-max-what-we-know" },
      { label: "Elehear Beyond 2 Pro vs. Prescription Hearing Aids", href: "/elehear-beyond-2-pro-vs-prescription-hearing-aids" },
      { label: "Auracast hearing aids explained", href: "/auracast-hearing-aids-explained" },
      { label: "Bluetooth hearing aids: what to know before buying", href: "/bluetooth-hearing-aids-before-buying" },
      { label: "Hearing aid second opinion in Westchester", href: "/hearing-aid-second-opinion" },
      { label: "Why Real-Ear Verification Matters", href: "/why-real-ear-verification-matters" },
      { label: "How Many Follow-Up Visits After New Hearing Aids?", href: "/how-many-follow-up-visits-new-hearing-aids" },
      { label: "Hearing Loss and Listening Fatigue", href: "/hearing-loss-cognitive-effort-listening-fatigue" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Hearing aid brands we fit", href: "/hearing-aids-brands" },
      { label: "Widex hearing aids in Westchester", href: "/hearing-aids-brands/widex" },
      { label: "Widex Allure", href: "/hearing-aids-brands/widex/widex-allure" },
      { label: "Oticon Reveal", href: "/hearing-aids-brands/oticon/oticon-reveal" },
      { label: "Signia MaX vs Oticon Reveal", href: "/hearing-aids-brands/signia/signia-max-vs-oticon-reveal" },
      { label: "Phonak EON vs Signia MaX", href: "/hearing-aids-brands/phonak/phonak-eon-vs-signia-max" },
      { label: "ReSound hearing aids in Westchester", href: "/hearing-aids-brands/resound" },
      { label: "Starkey hearing aids in Westchester", href: "/hearing-aids-brands/starkey" },
      { label: "Cochlear implant support", href: "/how-we-can-help/cochlear-implants" },
      { label: "How Much Do Hearing Aids Cost in Westchester County?", href: "/hearing-aid-cost-westchester-county" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" }
    ],
    blogMeta: {
      frame: "Buyer decision guide",
      byline: "A comparison of six hearing aid platforms for fall 2026",
      reviewedBy,
      readTime: "9 min read",
      articleType: "Buyer decision guide",
      pullQuote: "The chip decides what a hearing aid can do. The fitting decides what it does for you.",
      keyTakeaways: [
        "Six platforms to know: ReSound Sensia (announced Aug 10), Oticon Reveal (Aug 11), Phonak EON (Aug 24), Signia MaX (Aug 24), Starkey Omega AI+ (Oct 1) and Widex Allure AI RIC (May 20, US launch Nov 1). Widex announced before the Aug 10 to Oct 1 window.",
        "Five of six list Auracast, and Signia's needs a firmware update planned by March 2027. None of the launch announcements we reviewed states a price.",
        "Performance figures are company claims. HearAdvisor has scored Oticon Reveal 1, Phonak EON Sphere 90 and Signia MaX 7 in its lab. We found no published results for ReSound Sensia, Starkey Omega AI+ or Widex Allure AI.",
        "We name no winner and recommend no brand up front. After your hearing test and a real conversation about you, your audiologist chooses the device that serves you best."
      ],
      patientQuestion: "Which of the six hearing aid platforms is right for me?",
      storyLead: "Six makers, six platforms, one table: what is known, what is a company claim, and why we choose by fitting the person, not by brand.",
      comparisonTable: {
        afterHeading: "The six platforms at a glance",
        caption: "ReSound Sensia, Oticon Reveal, Phonak EON, Signia MaX, Starkey Omega AI+ and Widex Allure AI RIC compared",
        headers: ["Hearing aid", "Announced", "US availability, per sources", "Chip and AI, as described", "Auracast and telecoil", "Battery, company claim", "HearAdvisor SoundScore"],
        rows: [
          ["ReSound Sensia", "Aug 10, 2026", "US launch Aug 20, per Hearing Review", "Same chips as Vivia, plus AcoustIQ environment classification. DNN count not stated", "Auracast on all models. Telecoil on two models", "At least 24 hours, up to about 30", "Not yet tested, per HearingTracker"],
          ["Oticon Reveal", "Aug 11, 2026 (some reports say Aug 12)", "Orders from Aug 24. HearingLife listed it in 42 states on Aug 27", "Dual AI: Speech AI and Context AI. Chip and DNN count not stated", "Auracast supported. Telecoil: yes, per HearingTracker's listing", "A full day, per Oticon. HearingTracker's review cites up to about 20 hours", "5.1 (Reveal 1)"],
          ["Phonak EON", "Aug 24, 2026", "Ordering through US hearing care professionals from Aug 24", "HYPERSONIC chip, deep neural network speech separation. DNN count not stated", "Auracast supported. Telecoil: none, per HearingTracker", "Up to 38 hours", "5.0 (EON Sphere 90)"],
          ["Signia MaX", "Aug 24, 2026", "US launch Aug 24. HearUSA reported nationwide availability Sept 1", "New MaX chip, four DNNs: speech, own voice, scene and noise", "Auracast hardware-ready, firmware update planned by March 2027. Telecoil: yes", "Up to about 30 hours, per HearingTracker", "4.3 (MaX 7)"],
          ["Starkey Omega AI+", "Oct 1, 2026", "Not stated in the coverage we reviewed", "G4 Gen AI Neuro Processor, four DNNs", "Auracast supported. Telecoil not stated", "Up to 51 hours (RIC RT), up to 42 hours (mRIC and custom rechargeable)", "Not yet tested. HearAdvisor said it will test soon"],
          ["Widex Allure AI RIC", "May 20, 2026 (before the other five)", "Five unnamed markets June 1. US and remaining markets Nov 1, 2026, per Widex's release", "W1 chip plus a dedicated AI co-processor for Clarity Boost, which the wearer switches on. DNN count not stated", "LE Audio and telecoil listed. Auracast: one trade report says Auracast-ready, Widex's release does not mention it", "Up to 32 hours including 6 hours of AI use or streaming", "No score for the AI model. Scores listed are for the earlier, non-AI Allure"]
        ]
      },
      notify: {
        context: "Notify: AI hearing aid roundup updates",
        heading: "Get one email when independent results land.",
        body: "We will send one email when independent labs publish results for the remaining hearing aids in this roundup, when Widex reaches the US, or when a company announces prices.",
        button: "Notify me"
      },
      sources: [
        { label: "Hearing Review: Lifting the voice you choose, ReSound Sensia hearing aids launch", href: "https://hearingreview.com/hearing-products/hearing-aids/lifting-the-voice-you-choose-resound-sensia-hearing-aids-launch" },
        { label: "HearingTracker: ReSound Sensia launch", href: "https://www.hearingtracker.com/news/resound-sensia-launch-ai-follows-the-voice-you-want-to-hear" },
        { label: "HearingTracker: Oticon Reveal launches with Dual AI", href: "https://www.hearingtracker.com/news/oticon-reveal-launches-with-dual-ai-for-speech-and-surrounding-sounds" },
        { label: "Hearing Health Matters: Oticon launches Reveal with Dual AI processing", href: "https://hearinghealthmatters.org/hearing-technologies/2026/oticon-reveal-dual-ai-processing/" },
        { label: "Hearing Review: HearingLife now offering Oticon Reveal", href: "https://hearingreview.com/practice-building/office-services/dispensing-networks/hearinglife-now-offering-oticon-reveal-a-dual-ai-powered-hearing-aid" },
        { label: "Hearing Health Matters: Phonak introduces EON with HYPERSONIC chip", href: "https://hearinghealthmatters.org/hearing-technologies/2026/phonak-eon-hearing-aids-new-chip/" },
        { label: "HearingTracker: Phonak Audeo EON review and lab results", href: "https://www.hearingtracker.com/hearing-aids/phonak-audeo-eon" },
        { label: "Hearing Review: Signia debuts MaX AI hearing aid platform with 4 DNNs", href: "https://hearingreview.com/hearing-products/hearing-aids/live-noisy-signia-debuts-max-ai-hearing-aid-platform-with-4-dnns" },
        { label: "Audiology Worldnews: Signia introduces MaX, a 4DNN hearing aid platform", href: "https://www.audiology-worldnews.com/new-products/signia-introduces-max-a-4dnn-hearing-aid-platform/" },
        { label: "HearingTracker: Signia Pure Charge&Go MaX review and lab results", href: "https://www.hearingtracker.com/hearing-aids/signia-pure-charge-go-max" },
        { label: "HearUSA: New Signia Pure C&G MaX hearing aids (HearingTracker press releases)", href: "https://www.hearingtracker.com/press-releases/hearusa-expands-portfolio-to-include-new-signia-pure-c-g-max-hearing-aids" },
        { label: "Hearing Health Matters: Starkey unveils Omega AI+ with G4 Gen AI processor", href: "https://hearinghealthmatters.org/hearing-technologies/2026/omega-ai-plus-g4-hearing-aids/" },
        { label: "HearingTracker: Starkey launches Omega AI+ with Quad DNN", href: "https://www.hearingtracker.com/news/starkey-launches-omega-ai-with-quad-dnn-and-dual-compression" },
        { label: "HearingTracker: Oticon Reveal vs. Phonak Audeo EON", href: "https://www.hearingtracker.com/hearing-aids/compare/oticon-reveal-1-minirite-r-vs-phonak-audeo-eon-sphere-90" },
        { label: "HearingTracker: Oticon Reveal vs. Signia Pure Charge&Go MaX", href: "https://www.hearingtracker.com/hearing-aids/compare/oticon-reveal-1-minirite-r-vs-signia-pure-charge-go-max-7" },
        { label: "Hearing Review: Widex announces Allure AI RIC with Clarity Boost, Compass Cloud 2.0", href: "https://hearingreview.com/hearing-products/hearing-aids/bte/natural-sound-meets-ai-widex-announces-allure-ai-ric-hearing-aid-with-clarity-boost-compass-cloud-2-0" },
        { label: "WSA: Widex introduces Allure AI RIC with Clarity Boost (press release)", href: "https://www.wsa.com/press-release/widex-introduces-allure-ai-ric-with-clarity-boost-redefining-how-ai-supports-natural-hearing/" },
        { label: "Hearing Health Matters: Widex Allure AI RIC with dual-chip AI processing", href: "https://hearinghealthmatters.org/hearing-news-watch/2026/dual-processor-widex-allure-ai/" },
        { label: "HearingTracker: Widex Allure review", href: "https://www.hearingtracker.com/hearing-aids/widex-allure" },
        { label: "HKUMed (HKU Lead): Effective hearing aid use and probable dementia, Cell Reports Medicine", href: "https://lead.hku.hk/en/article/2026/06/hkumed-finds-effective-use-of-hearing-aids-may-help-reduce-dementia-risk-in-older-adults" },
        { label: "California Hearing Center: Signia MaX explained", href: "https://www.calhearing.com/signia-max-what-we-know/" }
      ]
    }
  }
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
