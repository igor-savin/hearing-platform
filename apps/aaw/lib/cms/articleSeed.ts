import "server-only";

type TopicGroup = {
  category: string;
  format: string;
  frame: string;
  serviceLabel: string;
  serviceHref: string;
  sourceLabel: string;
  sourceHref: string;
  items: Array<[title: string, focus: string, patientQuestion: string]>;
};

const topicGroups: TopicGroup[] = [
  {
    category: "Hearing Loss Basics",
    format: "Symptom Guide",
    frame: "Audiologist perspective",
    serviceLabel: "Hearing Testing",
    serviceHref: "/hearing-testing",
    sourceLabel: "NIDCD: Adult Hearing Health Care",
    sourceHref: "https://www.nidcd.nih.gov/health/adult-hearing-health-care",
    items: [
      ["Why Do Voices Sound Muffled Even When They Are Loud Enough?", "Muffled speech can reflect reduced access to high-frequency speech detail, ear blockage, middle-ear change, or another hearing pattern that needs testing rather than more volume alone.", "Why do voices sound loud but still muffled?"],
      ["Why Is It Harder to Hear Women's and Children's Voices?", "Higher-pitched voices often contain speech details that become difficult to distinguish when high-frequency hearing changes, especially in noise or at a distance.", "Why are some voices much harder to understand than others?"],
      ["Why Can I Hear Better in One Room Than Another?", "Distance, reverberation, background sound, lighting, and visual cues can change speech access dramatically even when hearing ability itself has not changed from room to room.", "Why does my hearing seem different depending on the room?"],
      ["Does Asking People to Repeat Themselves Mean I Have Hearing Loss?", "Frequent repetition requests can arise from hearing change, attention, room acoustics, unclear speech, or several factors together; patterns across settings are more informative than one isolated moment.", "How much repetition is enough to justify a hearing test?"],
      ["Why Does Television Dialogue Sound Less Clear Than Music?", "Modern sound mixes, competing effects, speaker quality, and reduced consonant access can make dialogue harder to follow even when music and background sound seem loud.", "Why can I hear the television but miss the dialogue?"],
      ["Can Mild Hearing Loss Still Affect Daily Conversation?", "A mild audiogram does not always mean a mild daily impact; speech-in-noise demands, work responsibilities, fatigue, and individual communication goals matter.", "Can a small hearing change cause a noticeable communication problem?"],
      ["What Does Asymmetrical Hearing Loss Mean?", "A meaningful difference between ears deserves careful measurement because it can affect localization, speech understanding, device choices, and whether medical referral is appropriate.", "What does it mean when one ear tests worse than the other?"],
      ["Why Do I Miss the Beginning or End of Words?", "Missing parts of words often reflects reduced access to softer consonants, rapid speech, distance, or competing noise rather than a simple lack of overall loudness.", "Why do words sound incomplete even when I hear someone talking?"],
      ["Can Hearing Loss Fluctuate From Day to Day?", "Perceived hearing can vary with congestion, fatigue, tinnitus, device function, noise exposure, and attention, while true fluctuating thresholds may require additional evaluation.", "Is it normal for hearing to feel better on some days than others?"],
      ["Why Is Hearing in the Car So Difficult?", "Road noise, speaker direction, limited visual cues, and safety demands combine to make the car one of the hardest everyday listening environments.", "Why do conversations become so difficult in the car?"]
    ]
  },
  {
    category: "Testing & Diagnosis",
    format: "Appointment Guide",
    frame: "Decision guide",
    serviceLabel: "Comprehensive Hearing Assessments",
    serviceHref: "/how-we-can-help/comprehensive-hearing-assessments",
    sourceLabel: "NIDCD: Adult Hearing Health Care",
    sourceHref: "https://www.nidcd.nih.gov/health/adult-hearing-health-care",
    items: [
      ["What Is Speech-in-Noise Testing and Why Does It Matter?", "Speech-in-noise testing measures a problem that a quiet-tone audiogram may not fully capture: how much competing sound affects real conversation.", "Will a hearing test show why restaurants are difficult?"],
      ["What Do Word Recognition Scores Mean on a Hearing Test?", "Word recognition adds information about speech clarity at a controlled level and should be interpreted with thresholds, presentation level, test conditions, and real-life concerns.", "What does my word recognition percentage actually tell me?"],
      ["What Is Tympanometry and What Can It Show?", "Tympanometry evaluates how the eardrum and middle-ear system respond to pressure changes and can help identify patterns that pure-tone testing alone does not explain.", "Why is pressure testing included in some hearing evaluations?"],
      ["Why Does an Audiologist Look in Your Ears Before Testing?", "Otoscopy can reveal wax, drainage, canal concerns, eardrum appearance, or other factors that affect testing safety and interpretation.", "What is the clinician checking before the hearing test starts?"],
      ["Can You Pass a Hearing Screening and Still Have Trouble Hearing?", "A screening is designed to flag certain findings quickly; it may not measure speech-in-noise difficulty, subtle asymmetry, tinnitus impact, or the full communication picture.", "Why do I struggle even though I passed a screening?"],
      ["How Should You Prepare for a Baseline Hearing Test?", "A useful baseline includes symptom timing, noise history, medications, family observations, prior results, and specific listening situations—not special studying or trying to perform well.", "What information should I bring to my first hearing test?"],
      ["What Does Conductive Hearing Loss Mean?", "Conductive findings suggest sound is being reduced or altered in the outer or middle ear, which may call for medical assessment, monitoring, or treatment depending on the cause.", "How is conductive hearing loss different from inner-ear hearing loss?"],
      ["What Does Sensorineural Hearing Loss Mean?", "Sensorineural loss usually involves the inner ear or auditory pathway and is interpreted through thresholds, speech testing, history, symmetry, and communication needs.", "What does an inner-ear hearing loss diagnosis mean for next steps?"],
      ["Why Might an Audiologist Recommend an ENT Referral?", "Audiologists refer when symptoms, ear findings, asymmetry, sudden change, dizziness, pain, drainage, pulsatile tinnitus, or test patterns require medical evaluation.", "Why would a hearing appointment lead to an ENT visit?"],
      ["How Often Should a Hearing Test Be Repeated After a Baseline?", "Retest timing depends on age, symptoms, noise exposure, medical factors, device use, prior results, and whether the patient or family notices a change.", "When should I repeat my hearing test if the first one is stable?"]
    ]
  },
  {
    category: "Hearing Aid Decisions",
    format: "Buyer Guide",
    frame: "Buyer decision guide",
    serviceLabel: "Advanced Hearing Aid Technology",
    serviceHref: "/how-we-can-help/advanced-hearing-aid-technology",
    sourceLabel: "FDA: How to Get Hearing Aids",
    sourceHref: "https://www.fda.gov/medical-devices/hearing-aids/how-get-hearing-aids",
    items: [
      ["Do You Need One Hearing Aid or Two?", "The decision depends on hearing in both ears, speech understanding, safety, localization, listening goals, medical findings, and whether both ears can benefit from amplification.", "Why might two hearing aids work better than one?"],
      ["What Hearing Aid Features Are Actually Worth Paying For?", "Feature value depends on the patient's environments; noise management, rechargeability, connectivity, remote microphones, telecoils, and support should be matched to real routines.", "Which hearing aid features will I actually use?"],
      ["How Do Hearing Aid Technology Levels Differ?", "Technology levels often vary in processing options and automation, but fitting quality, verification, support, and suitability can matter as much as the label on the product tier.", "What am I getting when I move to a higher technology level?"],
      ["Are Rechargeable Hearing Aids Reliable for Travel?", "Travel reliability depends on battery duration, charging access, adapters, backup plans, climate, streaming use, and whether the charger stores additional power.", "Can I depend on rechargeable hearing aids away from home?"],
      ["What Is a Receiver-in-Canal Hearing Aid?", "Receiver-in-canal devices separate the behind-the-ear processor from a small receiver in the canal and can balance discretion, flexibility, and a more open physical fit for many users.", "Why are receiver-in-canal hearing aids so common?"],
      ["Who Is a Good Candidate for In-the-Ear Hearing Aids?", "In-the-ear candidacy depends on ear anatomy, hearing level, dexterity, wax and moisture, cosmetic preference, battery needs, connectivity, and required power.", "Would a custom in-the-ear device fit my hearing and lifestyle?"],
      ["Can Hearing Aids Be Too Powerful?", "More output is not automatically better; excessive or poorly controlled amplification can be uncomfortable, distort sound, and fail to improve clarity.", "Can a hearing aid provide more sound than I should be receiving?"],
      ["What Is a Hearing Aid Trial Period?", "A trial period is the defined window for evaluating fit and benefit, and patients should understand dates, fees, return terms, follow-up, and what will be adjusted during that time.", "What should I accomplish during a hearing aid trial?"],
      ["How Long Do Hearing Aids Usually Last?", "Useful life varies with maintenance, moisture, wax, battery health, repairs, hearing changes, software support, and whether the technology still meets daily needs.", "When is an older hearing aid still worth maintaining?"],
      ["Should You Wait for the Next Hearing Aid Model?", "Waiting makes sense only when a confirmed feature is important and the current communication cost is acceptable; unconfirmed release rumors should not drive a health decision.", "Is newer technology worth waiting for if I need help now?"]
    ]
  },
  {
    category: "Hearing Aid Care",
    format: "Troubleshooting Guide",
    frame: "Troubleshooting guide",
    serviceLabel: "Hearing Aid Tune-Ups",
    serviceHref: "/how-we-can-help/hearing-aid-tune-ups",
    sourceLabel: "FDA: Hearing Aid Care Guidance",
    sourceHref: "https://www.fda.gov/medical-devices/hearing-aids/how-get-hearing-aids",
    items: [
      ["Why Does One Hearing Aid Battery Drain Faster?", "Uneven battery drain can reflect streaming patterns, receiver power, battery condition, charging contacts, firmware, environmental exposure, or a device fault.", "Why does one hearing aid run out before the other?"],
      ["Why Does My Hearing Aid Cut Out Intermittently?", "Intermittent sound may come from moisture, battery contacts, receiver wiring, wax, phone connections, physical damage, or an internal component that needs testing.", "What causes a hearing aid to work only some of the time?"],
      ["Why Is My Hearing Aid App Not Connecting?", "App problems can involve Bluetooth permissions, pairing records, phone updates, battery level, app versions, background settings, or the hearing aid connection itself.", "How do I tell whether the app, phone, or hearing aid is causing the problem?"],
      ["Can Humidity Damage Hearing Aids?", "Moisture can affect microphones, receivers, batteries, contacts, and charging; prevention should match the climate, activity level, and device instructions.", "Do I need a dryer or dehumidifier for my hearing aids?"],
      ["How Do You Clean Hearing Aid Microphones Safely?", "Microphone ports require gentle, model-appropriate care because pushing debris inward or applying liquid can create more damage than the original blockage.", "What is the safe way to clear hearing aid microphone openings?"],
      ["Why Does My Own Voice Sound Boomy in Hearing Aids?", "A boomy or plugged voice can involve physical occlusion, venting, dome style, low-frequency output, insertion, or the normal early adjustment process.", "Why does my own voice sound unnatural with hearing aids?"],
      ["What Causes Hearing Aid Static or Crackling?", "Static may reflect moisture, receiver damage, debris, battery contact, wireless interference, a poor connection, or internal component failure.", "Does crackling mean my hearing aid needs repair?"],
      ["Why Do Hearing Aids Fall Out During the Day?", "Retention can change with receiver length, dome or mold fit, jaw movement, glasses, masks, perspiration, and ear anatomy.", "How can I keep my hearing aids secure without pushing them too deeply?"],
      ["How Should Hearing Aids Be Stored Overnight?", "Safe storage balances charging or battery management, drying, ventilation, protection from pets and children, and avoidance of heat and moisture.", "Where is the safest place to keep hearing aids overnight?"],
      ["When Should Hearing Aid Receivers Be Replaced?", "Receiver replacement may be needed for weak or distorted output, repeated blockage, physical damage, intermittent sound, or test-box findings that cleaning cannot correct.", "How do I know whether a weak receiver needs cleaning or replacement?"]
    ]
  },
  {
    category: "Tinnitus",
    format: "Patient Guide",
    frame: "Red flag guide",
    serviceLabel: "Tinnitus Management",
    serviceHref: "/how-we-can-help/tinnitus-management",
    sourceLabel: "NIDCD: Tinnitus",
    sourceHref: "https://www.nidcd.nih.gov/health/tinnitus",
    items: [
      ["Can Stress Make Tinnitus Seem Louder?", "Stress can change attention, sleep, muscle tension, and emotional response, making tinnitus feel more intrusive even when the underlying sound has not objectively changed.", "Why does tinnitus spike during stressful periods?"],
      ["Can Caffeine Affect Tinnitus?", "Individual responses to caffeine vary, so broad elimination rules are less useful than tracking intake, sleep, hydration, and symptom patterns without creating unnecessary restriction.", "Should I stop caffeine because of tinnitus?"],
      ["Why Does Tinnitus Change Pitch?", "Pitch can vary with hearing changes, noise exposure, stress, somatic input, medications, and attention; sudden or one-sided changes still deserve appropriate evaluation.", "What does a change in tinnitus pitch mean?"],
      ["Can Jaw or Neck Movement Change Tinnitus?", "Some tinnitus is influenced by somatosensory input, so jaw clenching, neck movement, or muscle tension may temporarily alter loudness or pitch.", "Why does moving my jaw or neck change the sound?"],
      ["What Is a Tinnitus Spike?", "A tinnitus spike is a temporary increase in perceived loudness or intrusiveness that may follow stress, poor sleep, illness, sound exposure, or no obvious trigger.", "How long should a tinnitus spike last before I call someone?"],
      ["Can Earwax Make Tinnitus Worse?", "Wax can change hearing and ear sensation and may contribute to tinnitus perception in some people, but it should not be assumed to explain every new or changing sound.", "Could a blocked ear be making my tinnitus louder?"],
      ["Why Is Tinnitus More Noticeable After a Busy Day?", "Listening effort, fatigue, stress, sound exposure, and the contrast of a quiet evening can make tinnitus more noticeable after demanding days.", "Why does tinnitus catch up with me at the end of the day?"],
      ["Can Hearing Aids Mask Tinnitus All Day?", "Hearing aids may reduce tinnitus awareness by improving access to environmental sound, but benefit varies and the goal is not always complete masking.", "Should hearing aids cover tinnitus completely?"],
      ["What Should You Track Before a Tinnitus Appointment?", "A short symptom record can clarify onset, side, sound quality, pulse relationship, triggers, sleep, hearing changes, dizziness, and impact without encouraging constant monitoring.", "What information will make a tinnitus evaluation more useful?"],
      ["How Do Sound Enrichment and Sound Masking Differ?", "Masking aims to cover tinnitus more directly, while sound enrichment adds low-level environmental sound that may reduce contrast and support habituation or relaxation.", "Should tinnitus sound therapy cover the tinnitus completely?"]
    ]
  },
  {
    category: "Ear Care",
    format: "Safety Guide",
    frame: "Red flag guide",
    serviceLabel: "Earwax Removal",
    serviceHref: "/how-we-can-help/earwax-removal",
    sourceLabel: "FDA: Hearing and Ear Evaluation Guidance",
    sourceHref: "https://www.fda.gov/medical-devices/hearing-aids/how-get-hearing-aids",
    items: [
      ["Why Does My Ear Feel Blocked After Using Earbuds?", "A blocked feeling after earbuds may involve wax movement, skin irritation, pressure, moisture, fit, or an unrelated hearing change.", "Did my earbuds cause the blocked feeling in my ear?"],
      ["Can Earwax Cause Temporary Hearing Loss?", "A significant wax blockage can reduce sound reaching the eardrum, but sudden hearing change should never be assumed to be wax without an examination.", "Will hearing return after earwax is removed?"],
      ["Why Do My Ears Itch When I Wear Hearing Aids?", "Itching can reflect dry skin, moisture, product residue, fit, material sensitivity, wax, or infection and should be addressed without inserting objects into the canal.", "Is hearing aid itching a fit problem or an ear problem?"],
      ["Are Ear-Cleaning Cameras Safe to Use at Home?", "A camera can improve visibility without providing clinical judgment, safe depth control, or a diagnosis; manipulating the canal still carries risk.", "Does seeing earwax on a camera mean I should remove it myself?"],
      ["What Does Dark Earwax Mean?", "Wax color and texture can vary with age, exposure, and time in the canal; symptoms and examination matter more than color alone.", "Should dark earwax worry me?"],
      ["Can Hearing Aids Increase Earwax Buildup?", "Devices can alter wax migration and make existing wax more noticeable while also exposing receivers and filters to blockage.", "Why do I seem to have more wax since getting hearing aids?"],
      ["Why Does My Ear Feel Wet Without Drainage?", "A wet sensation can come from perspiration, skin irritation, wax texture, trapped moisture, or true drainage that needs medical assessment.", "How can my ear feel wet when I do not see fluid?"],
      ["Should You Clean Your Ears Before a Hearing Test?", "Routine outer-ear hygiene is enough; inserting swabs or using unapproved drops before testing can compact wax or irritate the canal.", "Do I need to remove wax before my hearing appointment?"],
      ["Can Ear Pressure Affect a Hearing Test?", "Pressure and middle-ear changes can alter hearing results and tympanometry, so timing, congestion, pain, travel, and illness should be reported.", "Will congestion or pressure change my hearing-test results?"],
      ["When Is Ear Fullness an Urgent Symptom?", "Fullness deserves faster care when it begins suddenly with hearing loss, severe dizziness, neurological symptoms, significant pain, drainage, or injury.", "When should a plugged-ear feeling be treated urgently?"]
    ]
  },
  {
    category: "Hearing Protection",
    format: "Prevention Guide",
    frame: "Decision guide",
    serviceLabel: "Hearing Protection",
    serviceHref: "/hearing-protection",
    sourceLabel: "NIDCD: Noise-Induced Hearing Loss",
    sourceHref: "https://www.nidcd.nih.gov/health/noise-induced-hearing-loss",
    items: [
      ["How Much Hearing Protection Do You Need at a Concert?", "Protection should reduce exposure while preserving enough music and awareness, and the right choice depends on level, duration, fit, and frequency of attendance.", "How do I protect my hearing without ruining the concert?"],
      ["Are Noise-Canceling Headphones Hearing Protection?", "Active noise cancellation can reduce the urge to raise listening volume, but consumer headphones are not automatically rated protection for hazardous occupational or recreational noise.", "Can I use noise-canceling headphones instead of earplugs?"],
      ["How Should Earplugs Fit to Work Properly?", "Protection depends on a consistent seal; even a highly rated plug provides limited benefit when inserted shallowly or loosened during use.", "How can I tell whether my earplugs are actually sealing?"],
      ["Do Musicians Need Different Earplugs Than Concertgoers?", "Musicians often need balanced attenuation, reliable fit, monitoring access, and repeatable performance across rehearsals and shows.", "What makes musician earplugs different from ordinary foam plugs?"],
      ["Can Lawn Equipment Damage Hearing?", "Mowers, blowers, trimmers, and other equipment can create cumulative exposure, especially when used for long sessions or alongside music headphones.", "When should I wear hearing protection for yard work?"],
      ["What Hearing Protection Works for Motorcycles?", "Riders need to reduce sustained wind and engine noise while preserving safe awareness and ensuring the protection fits comfortably under a helmet.", "Can earplugs reduce motorcycle noise without blocking important sounds?"],
      ["Should You Wear Earplugs on Airplanes?", "Earplugs may reduce cabin noise but do not directly treat pressure equalization, and different products address sound, comfort, and pressure sensations differently.", "Will earplugs help with airplane noise or ear pressure?"],
      ["How Can Parents Protect Hearing at Fireworks?", "Fireworks create intense impulse sound; distance, duration, child-sized protection, correct fit, and leaving when protection cannot be maintained all matter.", "What is the safest hearing protection plan for children at fireworks?"],
      ["Can You Wear Too Much Hearing Protection?", "Overprotection can reduce communication and awareness in moderate settings, while double protection may be appropriate for truly high levels.", "Is stronger hearing protection always safer?"],
      ["When Should Custom Earplugs Be Replaced?", "Custom protection should be checked when fit loosens, material changes, filters fail, comfort declines, or ear anatomy changes over time.", "How long should custom hearing protection continue to fit well?"]
    ]
  },
  {
    category: "Communication & Family",
    format: "Practical Guide",
    frame: "Family conversation guide",
    serviceLabel: "Your Hearing",
    serviceHref: "/how-we-can-help/your-hearing",
    sourceLabel: "NIDCD: Adult Hearing Health Care",
    sourceHref: "https://www.nidcd.nih.gov/health/adult-hearing-health-care",
    items: [
      ["How Can Families Communicate Better With Hearing Loss?", "Clear communication combines attention, distance, lighting, reduced background noise, natural speech, confirmation, and appropriate hearing care.", "What can our family change without making conversation feel awkward?"],
      ["What Should You Say Instead of 'Never Mind'?", "Abandoning a missed message can create isolation; brief rephrasing and context usually work better than repeating the same words more loudly.", "How should I respond when someone misses what I said?"],
      ["How Do You Discuss Hearing Loss Without Starting an Argument?", "A productive conversation uses specific shared experiences, curiosity, choice, and a low-pressure first step rather than blame or a device ultimatum.", "How can I raise a hearing concern respectfully?"],
      ["Why Is Group Conversation So Exhausting With Hearing Loss?", "Multiple speakers require rapid attention shifts, localization, memory, prediction, and filling in missed speech, which can create significant cognitive effort.", "Why am I tired after family gatherings even when I followed most of the conversation?"],
      ["How Can Couples Reduce Hearing-Related Misunderstandings?", "Couples benefit from shared communication routines, better positioning, repair strategies, and separating a missed message from assumptions about attention or caring.", "How do we stop hearing difficulty from becoming a relationship conflict?"],
      ["How Should Coworkers Speak to Someone With Hearing Loss?", "Workplace communication improves with clear turn-taking, agendas, captions, written follow-up, appropriate microphones, and direct speech without exaggeration.", "What practical accommodations make meetings easier?"],
      ["Why Do People With Hearing Loss Seem to Ignore Questions?", "A missed question can look like inattention when the speaker is out of view, the first words are soft, or background noise masks key information.", "How can we distinguish not hearing from not listening?"],
      ["How Can Adult Children Help at a Parent's Hearing Appointment?", "A support person can contribute real-life examples, goals, medical context, technology needs, and shared understanding while preserving the patient's autonomy.", "What is helpful for family to do during a hearing visit?"],
      ["What Communication Strategies Help in Restaurants?", "Seat choice, lighting, distance, wall position, quieter times, visual cues, and technology can reduce the work required to follow conversation.", "What can I do before and during a restaurant meal to hear better?"],
      ["How Can Hearing Loss Affect Confidence?", "Repeated misses can lead to guessing, withdrawal, embarrassment, or reduced participation even when the hearing loss is described as mild.", "Why has a hearing problem changed how willing I am to join conversations?"]
    ]
  },
  {
    category: "Advanced Hearing Technology",
    format: "Technology Guide",
    frame: "Buyer decision guide",
    serviceLabel: "Advanced Hearing Aid Technology",
    serviceHref: "/how-we-can-help/advanced-hearing-aid-technology",
    sourceLabel: "NIDCD: Hearing Aids",
    sourceHref: "https://www.nidcd.nih.gov/health/hearing-aids",
    items: [
      ["What Is a CROS Hearing Aid?", "A CROS system routes sound from an ear with very limited usable hearing to the better-hearing ear and is considered after ear-specific testing and medical review.", "How can technology help when one ear cannot use ordinary amplification?"],
      ["What Is a BiCROS Hearing Aid?", "BiCROS technology routes sound from the poorer ear while also amplifying the better ear when that ear has aidable hearing loss.", "How is BiCROS different from CROS?"],
      ["What Is a Remote Microphone for Hearing Aids?", "A remote microphone places the sound pickup closer to the speaker, improving the signal before distance and room noise degrade it.", "When will a remote microphone help more than changing a hearing-aid program?"],
      ["What Is a Telecoil and Do You Still Need One?", "Telecoils connect with hearing loops and some phones or accessories, and their value depends on local venues, worship spaces, theaters, and personal routines.", "Is a telecoil still useful with modern Bluetooth hearing aids?"],
      ["How Does AI Work in Hearing Aids?", "Hearing-aid AI may classify environments, steer processing, reduce noise, or support user controls, but the term covers different functions across manufacturers.", "What does an AI label actually mean on a hearing aid?"],
      ["Can Hearing Aids Translate Languages?", "Some connected apps and devices can provide translation support, but accuracy, latency, phone dependence, privacy, and listening conditions shape usefulness.", "Will hearing aids translate another language directly into my ears?"],
      ["What Is LE Audio for Hearing Aids?", "Bluetooth LE Audio introduces newer connection and broadcast capabilities, but exact support depends on the hearing aids, phone, operating system, firmware, and enabled profiles.", "Does LE Audio guarantee that every device will connect?"],
      ["Can Hearing Aids Connect to Laptops Reliably?", "Laptop connectivity varies with hearing-aid protocols, Bluetooth hardware, operating systems, conferencing apps, and whether an intermediary accessory is needed.", "Why do my hearing aids connect to my phone but not my computer?"],
      ["What Is Frequency Lowering in Hearing Aids?", "Frequency-lowering features move selected high-frequency information into a region where the listener may have better access and require careful verification and validation.", "Why would a hearing aid move high-pitched sounds to another frequency?"],
      ["What Is an Extended-Wear Hearing Aid?", "Extended-wear devices remain in the canal for weeks at a time and require candidacy assessment for anatomy, hearing level, ear health, lifestyle, and ongoing clinical replacement.", "Could an extended-wear hearing aid fit my ears and daily routine?"]
    ]
  },
  {
    category: "Westchester Hearing Care",
    format: "Local Decision Guide",
    frame: "Local service guide",
    serviceLabel: "Contact Audiology Associates",
    serviceHref: "/contact-us",
    sourceLabel: "FDA: How to Get Hearing Aids",
    sourceHref: "https://www.fda.gov/medical-devices/hearing-aids/how-get-hearing-aids",
    items: [
      ["How to Choose an Audiologist in Westchester County", "A strong comparison considers diagnostic scope, credentials, verification, device options, tinnitus or implant expertise, follow-up, repair access, and communication style.", "What should I compare when choosing a local audiologist?"],
      ["What to Bring to a Hearing Aid Repair Appointment", "Bringing both devices, charger, accessories, app access, records, warranty information, and a symptom timeline can shorten troubleshooting.", "How should I prepare so a repair visit is productive?"],
      ["How to Compare Hearing Aid Warranties and Service Plans", "Patients should separate manufacturer coverage from clinic services and compare loss coverage, repair terms, office visits, programming, supplies, and exclusions.", "What is actually included after I buy hearing aids?"],
      ["Where Should Greenwich Patients Go for Hearing Care?", "Greenwich-area patients may compare cross-border travel, appointment availability, specialty services, follow-up frequency, and the practical route to a nearby Westchester office.", "How do I choose convenient hearing care near the New York–Connecticut border?"],
      ["How to Plan a First Hearing Visit in Northern Westchester", "Northern Westchester patients can make the visit more useful by confirming office location, travel time, records, devices, symptoms, and the type of evaluation needed.", "What should I know before a first visit near Somers?"],
      ["Can an Audiologist Help With Hearing Aids Bought Online?", "Help depends on whether the product is a hearing aid, its brand and model, software access, condition, lock status, and the clinic's ability to verify and support it.", "Will a local audiologist support an online hearing-aid purchase?"],
      ["How Soon Should You Schedule After Noticing Hearing Changes?", "Timing depends on whether the change is sudden, one-sided, painful, progressive, disruptive, or accompanied by dizziness, drainage, or neurological symptoms.", "Is my hearing concern routine or time-sensitive?"],
      ["What Questions Should You Ask a Tinnitus Clinic?", "Useful questions cover evaluation, red-flag referral, clinician training, treatment options, realistic outcomes, follow-up, fees, and progress measurement.", "How can I tell whether a tinnitus clinic offers comprehensive care?"],
      ["How to Choose Between an Office Visit and a Device Drop-Off", "A drop-off may suit a straightforward hardware issue, while sudden hearing change, ear symptoms, fit problems, or complex programming usually requires the patient to be present.", "Does my hearing-aid problem require an appointment or only a drop-off?"],
      ["What Makes Follow-Up Care Important After a Hearing Aid Purchase?", "Follow-up addresses physical fit, verified output, sound quality, real environments, connectivity, maintenance, communication goals, and changes that appear after regular use.", "Why are follow-up visits part of successful hearing-aid care?"]
    ]
  }
];

const photoSlugs = [
  "hearing-test-or-earwax-removal", "are-otc-hearing-aids-right-for-me", "what-to-expect-hearing-aid-fitting",
  "sudden-hearing-loss-why-not-wait", "lenire-for-tinnitus-candidate-guide", "one-ear-hearing-loss-when-to-get-checked",
  "rechargeable-vs-battery-hearing-aids", "how-many-follow-up-visits-new-hearing-aids", "questions-before-buying-hearing-aids",
  "first-signs-of-hearing-loss-family-notice", "ear-fullness-no-pain-hearing-loss", "hearing-care-professionals-meetings-calls",
  "ear-pressure-and-hearing-loss-evaluation", "ringing-in-one-ear-red-flags-next-steps", "hearing-aid-cost-westchester-county",
  "hearing-loss-cognitive-effort-listening-fatigue", "hear-people-talking-not-understand-words", "what-high-frequency-hearing-loss-sounds-like",
  "how-loud-is-too-loud-decibels", "otc-vs-prescription-hearing-aids-real-world", "how-often-should-adults-get-hearing-checked",
  "what-happens-during-comprehensive-hearing-evaluation", "pulsatile-tinnitus-heartbeat-sound", "does-insurance-cover-hearing-aids-tests",
  "tinnitus-after-loud-noise-what-to-do", "costco-hearing-aids-vs-audiologist-care", "how-to-make-hearing-aids-more-comfortable",
  "can-hearing-aids-help-tinnitus", "hearing-aid-sounds-weak", "is-hearing-loss-normal-with-age",
  "why-new-hearing-aids-sound-strange", "how-to-talk-to-parent-about-hearing-help", "hearing-test-vs-hearing-screening-difference",
  "hearing-protection-power-tools-yard-work", "noise-induced-hearing-loss-prevention", "tinnitus-at-night-why-louder",
  "why-real-ear-verification-matters", "how-often-professional-hearing-aid-cleaning", "kids-teens-ear-protection-concerts-sports",
  "sound-sensitivity-vs-tinnitus", "hearing-aid-domes-wax-guards-receivers", "invisible-hearing-aids-pros-cons-candidacy",
  "hearing-protection-concerts-musician-vs-foam", "bluetooth-hearing-aids-before-buying", "dizziness-and-ringing-audiology-or-ent",
  "why-hearing-aids-whistle", "why-restaurants-hard-with-hearing-loss", "hearing-aid-not-charging",
  "how-long-hearing-aid-batteries-last", "airpods-as-hearing-aids"
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

export function buildScheduledArticleSeeds(startAt: Date) {
  const topics = topicGroups.flatMap((group) => group.items.map((item) => ({ group, item })));
  let publishAt = new Date(startAt);

  return topics.map(({ group, item }, index) => {
    const [title, focus, patientQuestion] = item;
    const slug = slugify(title);
    const imageSlug = photoSlugs[index % photoSlugs.length];
    const nextStep = `A visit for ${group.serviceLabel.toLowerCase()} can connect the question to ear findings, current hearing, communication goals, and the safest next action.`;
    const localContext = "Audiology Associates of Westchester serves Harrison, Somers, White Plains, Scarsdale, Rye, Greenwich, northern Westchester, and nearby communities. Local follow-up is most valuable when it is tied to the places where listening is actually difficult.";
    const safety = "Seek prompt medical guidance for sudden hearing loss, severe dizziness, facial weakness, significant pain, drainage or bleeding, symptoms after injury, or tinnitus that pulses with the heartbeat. Educational guidance cannot diagnose an individual ear or hearing condition.";
    const article = {
      id: slug,
      path: `/${slug}`,
      title,
      metaTitle: title.length <= 55 ? `${title} | Westchester` : title,
      metaDescription: `${focus} Learn what an evaluation can clarify and when Westchester patients should schedule care.`.slice(0, 155),
      h1: title,
      category: group.category,
      format: group.format,
      status: "scheduled" as const,
      publishAt: publishAt.toISOString(),
      heroImage: {
        src: `/assets/blog-seed/photo-v2/${imageSlug}-photo-v2.webp`,
        alt: `Patient-centered ${group.category.toLowerCase()} guide for ${title}`
      },
      body: [
        `This question often begins with a real-life listening problem rather than a test result. ${focus}`,
        `The useful next step is to identify the pattern without overreacting or waiting too long. ${localContext}`,
        "What this question usually means",
        `${focus} The timing, side, listening environment, related symptoms, and effect on daily communication help distinguish a routine concern from one that deserves faster assessment.`,
        "Start with the pattern, not an assumption",
        `Write down when the issue began, whether one ear or both ears are involved, which situations make it better or worse, and what other people have noticed. The central patient question is: “${patientQuestion}”`,
        "What an audiology evaluation can clarify",
        "Depending on the concern, an audiologist may review ear health, hearing thresholds, speech understanding, middle-ear function, device performance, sound tolerance, and real-world communication goals. Findings can also show when medical or specialty referral should come first.",
        "Questions worth bringing to the appointment",
        `Ask what the findings explain, what they do not explain, whether the pattern is stable or time-sensitive, which options match the actual listening goal, how benefit will be verified, and what follow-up is included. ${nextStep}`,
        "What not to assume",
        "Do not assume that louder is always clearer, that every blocked sensation is wax, that every tinnitus change is harmless, or that a product feature can replace an appropriate evaluation. The same symptom can have more than one possible contributor.",
        "When to move faster",
        safety,
        "A practical Westchester next step",
        `${localContext} Bring current hearing devices, chargers, app access, prior test results, a medication list when relevant, and two or three examples of conversations you want to improve.`,
        "Bottom line",
        `${focus} ${nextStep}`
      ],
      faqs: [
        { question: patientQuestion, answer: `${focus} An evaluation can determine which explanation best matches the individual pattern.` },
        { question: "When should I schedule rather than keep watching it?", answer: "Schedule when the concern persists, changes, affects communication or safety, or creates uncertainty. Move faster for sudden, one-sided, painful, draining, dizzy, pulsatile, or neurological symptoms." },
        { question: "What should I bring to the visit?", answer: "Bring prior hearing results, current devices and accessories, a symptom timeline, relevant medical information, and examples of the listening situations you want to improve." }
      ],
      related: [
        { label: group.serviceLabel, href: group.serviceHref },
        { label: "Hearing Testing", href: "/hearing-testing" },
        { label: "Contact Audiology Associates", href: "/contact-us" },
        { label: "Areas We Serve", href: "/areas-we-serve" }
      ],
      blogMeta: {
        frame: group.frame,
        byline: "From the Audiology Associates editorial desk",
        reviewedBy: "Audiology Associates of Westchester editorial team",
        readTime: "6 min read",
        articleType: group.format,
        pullQuote: focus,
        keyTakeaways: [
          focus,
          "The timing, side, related symptoms, and real-world impact are more useful than a symptom label alone.",
          nextStep
        ],
        patientQuestion,
        storyLead: "A useful hearing-care answer begins with the pattern and the patient's real listening goal.",
        sources: [{ label: group.sourceLabel, href: group.sourceHref }]
      }
    };

    publishAt = addDays(publishAt, index % 2 === 0 ? 3 : 4);
    return article;
  });
}
