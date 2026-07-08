import { howWeCanHelpRootPath } from "@/lib/howWeCanHelp";

export const tinnitusRootPath = `${howWeCanHelpRootPath}/tinnitus-management`;

export type TinnitusPage = {
  title: string;
  slug: string;
  description: string;
  intro: string[];
  sections: Array<{
    title: string;
    body: string[];
    bullets?: string[];
  }>;
  faqs: Array<{ question: string; answer: string }>;
};

export function tinnitusPath(slug: string) {
  return `${tinnitusRootPath}/${slug}`;
}

export const tinnitusPages: TinnitusPage[] = [
  {
    title: "What Is Tinnitus?",
    slug: "what-is-tinnitus",
    description:
      "Learn what tinnitus is, why ringing or buzzing can happen, how tinnitus is evaluated, and when to schedule care in Westchester County.",
    intro: [
      "Tinnitus is the perception of sound when no outside sound is present. Patients often describe it as ringing, buzzing, humming, hissing, roaring, clicking, or pulsing.",
      "Tinnitus is a symptom, not a diagnosis by itself. A hearing and tinnitus evaluation can help identify whether hearing loss, noise exposure, earwax, medication, jaw or neck factors, vascular concerns, or another condition may be involved."
    ],
    sections: [
      {
        title: "Common tinnitus sounds",
        body: [
          "Describing the sound is one of the first useful steps. Tinnitus can be steady or intermittent, soft or intrusive, high-pitched or low-pitched, and it may be heard in one ear, both ears, or in the head."
        ],
        bullets: ["Ringing", "Buzzing or humming", "Hissing or static", "Roaring", "Clicking", "Whistling", "Pulsing or heartbeat-like sound"]
      },
      {
        title: "Subjective, objective, and pulsatile tinnitus",
        body: [
          "Most tinnitus is subjective, meaning only the patient hears it. Objective tinnitus is uncommon and may sometimes be detected by a clinician.",
          "Pulsatile tinnitus is different because the sound has a rhythm, often matching the heartbeat. One-sided tinnitus, pulsatile tinnitus, or tinnitus with sudden hearing changes should be discussed promptly with a medical professional."
        ]
      },
      {
        title: "Symptoms that often come with tinnitus",
        body: [
          "Many patients are bothered not only by the sound itself, but by how it affects focus, sleep, stress, and communication. Tinnitus can also make quiet rooms feel uncomfortable and can increase listening fatigue in restaurants, family gatherings, meetings, and busy community settings."
        ],
        bullets: [
          "Trouble sleeping or relaxing in quiet rooms",
          "Difficulty concentrating",
          "Sound sensitivity or discomfort with loud places",
          "Hearing conversations feels harder",
          "Stress, frustration, or worry about the sound",
          "Mental fatigue from trying to ignore it"
        ]
      },
      {
        title: "The hearing loss connection",
        body: [
          "Tinnitus and hearing loss commonly occur together, even when a patient does not notice obvious hearing difficulty. When the brain receives less clear sound input, tinnitus may become more noticeable.",
          "A complete hearing evaluation helps determine whether hearing changes, speech clarity, middle-ear function, or other ear-related findings are part of the picture."
        ]
      },
      {
        title: "How tinnitus is evaluated",
        body: [
          "A tinnitus visit usually starts with a careful history: when the sound started, what it sounds like, whether it is in one ear or both, what makes it better or worse, and how it affects sleep, concentration, and daily life.",
          "Testing may include a hearing evaluation, speech understanding, middle-ear measures, ear inspection, and discussion of whether medical referral is appropriate. Some patients also benefit from tinnitus pitch or loudness matching when it helps guide counseling."
        ]
      },
      {
        title: "When tinnitus deserves attention",
        body: [
          "Mild tinnitus after a loud event may fade, but persistent or changing tinnitus should not be ignored. The right timing depends on symptoms and risk factors."
        ],
        bullets: [
          "Schedule care if tinnitus lasts more than a short temporary episode",
          "Call promptly if tinnitus appears suddenly or is only in one ear",
          "Seek urgent medical guidance if tinnitus occurs with sudden hearing loss, severe dizziness, neurological symptoms, or a heartbeat-like rhythm",
          "Schedule a tinnitus consultation if the sound affects sleep, mood, focus, or quality of life"
        ]
      },
      {
        title: "Can tinnitus be treated?",
        body: [
          "There is no single universal cure, but tinnitus is often manageable. Treatment may focus on the cause when one is found, reducing listening strain, adding sound support, improving sleep, counseling the nervous system response, and helping the patient regain control.",
          "For Westchester patients, the best first step is usually a hearing and tinnitus evaluation so the plan is based on real findings rather than generic online advice."
        ]
      }
    ],
    faqs: [
      {
        question: "Is tinnitus a disease?",
        answer: "No. Tinnitus is usually a symptom of another hearing, ear, neurological, vascular, medication-related, jaw, neck, or health factor."
      },
      {
        question: "Can tinnitus happen without hearing loss?",
        answer: "Yes, but tinnitus and hearing loss often occur together. A hearing evaluation helps clarify what is happening."
      },
      {
        question: "Should I ignore tinnitus if it is mild?",
        answer: "Mild tinnitus may not need urgent care, but persistent, worsening, one-sided, pulsatile, or distressing tinnitus should be evaluated."
      },
      {
        question: "What should I bring to a tinnitus appointment?",
        answer: "Bring a medication list, hearing aid details if you use devices, notes about when tinnitus started, noise exposure history, and examples of when the sound is most noticeable."
      }
    ]
  },
  {
    title: "Tinnitus Causes and Triggers",
    slug: "causes-and-triggers",
    description:
      "Explore common tinnitus causes and triggers, including hearing loss, noise exposure, earwax, stress, medications, TMJ, sleep, and local Westchester listening environments.",
    intro: [
      "Tinnitus can have more than one contributing factor. For some patients it starts after loud noise exposure; for others it appears gradually with hearing changes, stress, earwax, medications, jaw tension, neck tension, or other health factors.",
      "Understanding patterns and triggers helps the audiology team recommend the right evaluation and next steps."
    ],
    sections: [
      {
        title: "How tinnitus can develop",
        body: [
          "For many people, tinnitus begins when the inner ear or hearing nerve sends reduced or altered sound information to the brain. The brain may respond by increasing internal sensitivity, making phantom sound more noticeable.",
          "This is one reason tinnitus care often includes both hearing testing and counseling. The goal is to understand both the ear-related findings and the brain's reaction to the sound."
        ]
      },
      {
        title: "Most common causes",
        body: ["A tinnitus evaluation looks for hearing and ear-related contributors first, while also recognizing when medical follow-up may be needed."],
        bullets: [
          "Noise exposure from concerts, power tools, firearms, headphones, or workplace sound",
          "Age-related or sensorineural hearing loss",
          "Earwax buildup or blocked hearing",
          "Ear infection, pressure, or middle-ear fluid",
          "Sudden hearing change",
          "Head, neck, or jaw injury",
          "TMJ or jaw tension",
          "Some medications or dosage changes"
        ]
      },
      {
        title: "Medical conditions that may be involved",
        body: [
          "Tinnitus can sometimes be linked with medical conditions outside the hearing system. Audiology testing can document hearing status, but a physician may need to evaluate symptoms such as one-sided tinnitus, pulsatile tinnitus, dizziness, neurological symptoms, or sudden changes."
        ],
        bullets: [
          "Meniere's disease or inner-ear disorders",
          "Blood pressure or vascular changes",
          "Thyroid or metabolic conditions",
          "Migraine or neurological conditions",
          "TMJ disorders",
          "Acoustic nerve concerns that require physician evaluation"
        ]
      },
      {
        title: "Medications and tinnitus",
        body: [
          "Some medications may cause or worsen tinnitus for certain patients. This does not mean a patient should stop medication on their own.",
          "If tinnitus started after a new medication or dosage change, make a note of the timing and speak with the prescribing clinician. Your audiologist can include medication timing in the tinnitus history."
        ]
      },
      {
        title: "Everyday triggers",
        body: [
          "Triggers are personal. A helpful pattern for one patient may not apply to another, so tracking symptoms for a week or two can make the appointment more productive."
        ],
        bullets: [
          "Poor sleep or fatigue",
          "Stressful workdays",
          "Quiet rooms at night",
          "Heavy headphone use",
          "Restaurants, events, or loud gatherings",
          "Caffeine or alcohol for some patients",
          "Jaw clenching or neck tension",
          "Illness, congestion, or sinus pressure"
        ]
      },
      {
        title: "Westchester listening environments",
        body: [
          "Patients in Westchester often move between Metro-North travel, parkways, busy restaurants, worship spaces, family gatherings, healthcare appointments, offices, and quiet homes. These changes in sound environment can make tinnitus feel more or less noticeable throughout the day.",
          "A patient in Harrison or White Plains may notice tinnitus after noisy commuting or restaurant settings, while a patient in Somers or northern Westchester may notice it more during quiet evenings. Local routines matter when building a realistic plan."
        ]
      },
      {
        title: "Can tinnitus be prevented or reduced?",
        body: [
          "Not every tinnitus case is preventable, but risk can often be reduced by protecting hearing, managing noise exposure, avoiding unsafe headphone volume, treating ear issues promptly, and scheduling evaluation when symptoms change."
        ],
        bullets: [
          "Use custom or well-fit hearing protection for loud hobbies and tools",
          "Take listening breaks after noisy events",
          "Keep headphone volume comfortable",
          "Avoid ear cleaning methods that push wax deeper",
          "Discuss medication concerns with the prescribing clinician",
          "Schedule hearing care when tinnitus is persistent or changing"
        ]
      }
    ],
    faqs: [
      {
        question: "Can earwax cause tinnitus?",
        answer: "Earwax can contribute to blocked hearing, fullness, and sometimes tinnitus. The ear should be inspected before assuming wax is the cause."
      },
      {
        question: "Can stress make tinnitus worse?",
        answer: "Stress does not always cause tinnitus, but it can make tinnitus more noticeable and harder to tolerate."
      },
      {
        question: "Can medications affect tinnitus?",
        answer: "Some medications may cause or worsen tinnitus. Do not stop prescribed medication without speaking with the prescribing clinician."
      },
      {
        question: "What if no single cause is found?",
        answer: "That is common. Tinnitus can have several contributors, and management can still help even when one exact cause is not identified."
      }
    ]
  },
  {
    title: "Tinnitus Treatment and Relief Options",
    slug: "treatment-and-relief-options",
    description:
      "Compare tinnitus relief options including hearing aids, sound therapy, counseling, CBT concepts, TRT concepts, Lenire candidacy discussions, sleep strategies, and professional evaluation.",
    intro: [
      "There is no single tinnitus treatment that is right for everyone. Relief depends on hearing status, tinnitus pattern, daily impact, medical history, sleep, stress, sound sensitivity, and patient goals.",
      "Audiology Associates of Westchester provides patient-centered tinnitus support and can discuss appropriate options after evaluation."
    ],
    sections: [
      {
        title: "Start with evaluation",
        body: [
          "A treatment plan should begin with understanding the tinnitus pattern and the patient's hearing status. The appointment may explore onset, sound quality, laterality, sleep impact, stress, medication history, noise exposure, sound sensitivity, and hearing test results.",
          "This helps separate strategies that are likely to help from generic advice that may not match the patient's needs."
        ]
      },
      {
        title: "Evidence-informed options",
        body: ["Treatment plans may combine hearing care, education, sound support, and coping strategies."],
        bullets: [
          "Hearing aids when hearing loss is present",
          "Sound therapy or environmental sound enrichment",
          "Tinnitus counseling and education",
          "Tinnitus Retraining Therapy concepts when appropriate",
          "CBT-informed coping strategies with a qualified clinician when distress is significant",
          "Lenire candidacy discussion when appropriate",
          "Sleep and relaxation strategies",
          "Referral for medical or mental health support when needed"
        ]
      },
      {
        title: "Hearing aids and tinnitus",
        body: [
          "When tinnitus occurs with hearing loss, properly fit hearing aids may reduce listening effort and increase access to environmental sound. For some patients, that can make tinnitus less noticeable because the brain receives more useful sound input.",
          "Many modern devices also include tinnitus support programs, streaming options, and fine tuning for different listening environments. The best device and settings depend on testing, comfort, goals, and daily listening demands."
        ]
      },
      {
        title: "Sound therapy",
        body: [
          "Sound therapy is not about drowning out tinnitus with loud noise. It uses comfortable external sound to reduce the contrast between tinnitus and silence, support relaxation, and help the brain treat the sound as less important.",
          "Options may include nature sounds, broadband noise, bedside sound, hearing-aid-based programs, streaming, and carefully chosen background sound during quiet tasks."
        ]
      },
      {
        title: "Counseling, TRT, and CBT concepts",
        body: [
          "Education and counseling help patients understand what tinnitus is, why it can feel threatening, and how the nervous system can gradually respond differently.",
          "TRT-style care combines education and sound support for habituation. CBT-informed care focuses on reducing distress, fear, avoidance, and sleep disruption. When anxiety or depression is significant, mental health support can be an important part of care."
        ]
      },
      {
        title: "Lenire and neuromodulation conversations",
        body: [
          "Some patients ask about device-based tinnitus treatment pathways such as Lenire. Candidacy depends on the patient's tinnitus profile, medical history, hearing status, goals, and whether the service is available and appropriate.",
          "The practice should confirm candidacy steps directly rather than promising outcomes online."
        ]
      },
      {
        title: "What relief realistically means",
        body: [
          "Tinnitus care should not promise a cure. Many patients improve by reducing distress, improving sleep, understanding triggers, reducing listening effort, and helping the brain pay less attention to the sound.",
          "A practical goal is better control, better coping, and a clearer care plan."
        ]
      },
      {
        title: "How we build a plan in Westchester",
        body: [
          "A Westchester tinnitus plan may look different for a commuter, a teacher, a musician, a retiree, or someone who mainly notices symptoms in a quiet bedroom. The plan should fit real settings such as family dinners, restaurants, worship services, offices, Metro-North travel, and quiet evenings at home.",
          "Follow-up matters because tinnitus response can change as hearing aids are adjusted, sleep improves, sound strategies are tested, or medical questions are addressed."
        ]
      }
    ],
    faqs: [
      {
        question: "Can tinnitus be cured?",
        answer: "Some tinnitus resolves when the underlying cause is addressed, but chronic tinnitus is often managed rather than cured."
      },
      {
        question: "Do hearing aids help tinnitus?",
        answer: "They may help when hearing loss is present, especially when devices are professionally selected, fit, and adjusted."
      },
      {
        question: "Is Lenire right for everyone?",
        answer: "No. Candidacy and availability should be discussed directly with the practice after a tinnitus evaluation."
      },
      {
        question: "How long does tinnitus management take?",
        answer: "Some patients notice early relief with hearing or sound support, while others improve gradually over weeks or months as strategies are adjusted."
      }
    ]
  },
  {
    title: "Sudden or Worsening Tinnitus",
    slug: "sudden-or-worsening-tinnitus",
    description:
      "Understand when sudden, one-sided, worsening, or severe tinnitus should be evaluated promptly, what warning signs matter, and what to track before calling.",
    intro: [
      "Sudden tinnitus can feel alarming. Sometimes it follows noise exposure, temporary ear pressure, illness, or stress, but certain patterns should be taken seriously.",
      "If tinnitus appears suddenly with hearing loss, dizziness, severe headache, neurological symptoms, recent head trauma, or a heartbeat-like rhythm, seek prompt medical guidance."
    ],
    sections: [
      {
        title: "What sudden tinnitus means",
        body: [
          "Sudden tinnitus is tinnitus that appears all at once or changes noticeably over a short period. Some patients wake up with it, notice it after a loud event, or realize that one ear suddenly feels different.",
          "The key question is whether tinnitus is isolated or appears with symptoms that suggest an urgent medical problem."
        ]
      },
      {
        title: "Emergency warning signs",
        body: ["Patients should not wait on symptoms that may require urgent medical evaluation."],
        bullets: [
          "Sudden hearing loss in one or both ears",
          "Severe vertigo or spinning that makes standing difficult",
          "Facial drooping, weakness, numbness, confusion, or trouble speaking",
          "Sudden severe headache",
          "Double vision, major balance changes, or neurological symptoms",
          "Recent head or neck trauma followed by tinnitus",
          "A heartbeat-like sound that starts suddenly or is one-sided"
        ]
      },
      {
        title: "Urgent but not always emergency",
        body: [
          "Some cases do not require emergency services but should still be discussed promptly with a physician, ENT, or audiologist depending on symptoms."
        ],
        bullets: [
          "New tinnitus in one ear only",
          "Ear pain, pressure, drainage, or infection symptoms",
          "Tinnitus after severe congestion, flu, or sinus illness",
          "New tinnitus after medication changes",
          "A major change in tinnitus for someone with known ear, jaw, neck, or balance issues"
        ]
      },
      {
        title: "When an audiology visit is appropriate",
        body: [
          "Schedule an audiology appointment when tinnitus persists, affects sleep or focus, appears with hearing difficulty, or feels progressively louder.",
          "The office can help determine whether audiology testing, device support, tinnitus counseling, or medical referral is the right next step."
        ]
      },
      {
        title: "Common sudden-onset contributors",
        body: [
          "Sudden tinnitus can occur for many reasons. A careful history helps determine whether the pattern points toward temporary sound exposure, ear blockage, middle-ear pressure, sudden hearing change, medication timing, stress, or a medical concern."
        ],
        bullets: [
          "Recent loud sound exposure",
          "Sudden sensorineural hearing change",
          "Earwax blockage",
          "Ear infection or fluid",
          "Jaw or neck flare-up",
          "Medication timing",
          "Illness, congestion, or pressure changes",
          "Vascular or neurological symptoms requiring medical evaluation"
        ]
      },
      {
        title: "What you can do right now",
        body: [
          "Avoid loud sound and do not try to remove earwax deeply at home. Write down when symptoms started, whether one or both ears are affected, whether hearing changed, and whether you have dizziness, pain, pressure, headache, or heartbeat-like sound.",
          "If symptoms feel urgent, seek medical care. If symptoms are stable but persistent, schedule a hearing and tinnitus evaluation."
        ]
      },
      {
        title: "What to tell the office",
        body: [
          "When you call, describe the timeline clearly. Mention if tinnitus is sudden, one-sided, pulsatile, paired with hearing loss, or affecting sleep. This helps the team point you to the right type of appointment or medical follow-up."
        ]
      }
    ],
    faqs: [
      {
        question: "Should sudden tinnitus be evaluated?",
        answer: "Yes, especially if it is one-sided, pulsing, worsening, or paired with hearing loss, dizziness, pain, or neurological symptoms."
      },
      {
        question: "Is sudden tinnitus always an emergency?",
        answer: "Not always, but sudden tinnitus with sudden hearing loss, severe dizziness, neurological symptoms, head trauma, or a severe headache should be treated as urgent."
      },
      {
        question: "Can loud noise cause temporary tinnitus?",
        answer: "Yes. Temporary ringing can happen after loud sound exposure, but recurring or persistent symptoms deserve evaluation."
      },
      {
        question: "Should I wait a few months to see if sudden tinnitus goes away?",
        answer: "No. Persistent, sudden, one-sided, worsening, or pulsatile tinnitus should be discussed sooner so important causes are not missed."
      }
    ]
  },
  {
    title: "Pulsatile Tinnitus",
    slug: "pulsatile-tinnitus",
    description:
      "Learn why heartbeat-like tinnitus is different, what causes may be involved, when pulsatile tinnitus is a red flag, and how evaluation usually works.",
    intro: [
      "Pulsatile tinnitus is a rhythmic sound, often described as whooshing, thumping, pulsing, or a heartbeat in the ear.",
      "Because pulsatile tinnitus can be related to blood flow, vascular factors, middle-ear issues, or other medical concerns, it should be discussed with a healthcare professional rather than treated as ordinary ringing."
    ],
    sections: [
      {
        title: "How pulsatile tinnitus is different",
        body: [
          "Typical tinnitus is often a steady ringing, buzzing, or hissing. Pulsatile tinnitus has a rhythm and may change with pulse, position, activity, pressure, or lying down.",
          "It may be heard in one ear or both and may require medical evaluation beyond a routine hearing test."
        ]
      },
      {
        title: "How patients describe it",
        body: [
          "The words patients use can help guide the workup. If the sound is synchronized with the heartbeat, use the term pulsatile tinnitus when speaking with the office or medical provider."
        ],
        bullets: [
          "Whooshing in the ear",
          "Heartbeat sound",
          "Thumping or drumming",
          "Pulse that changes with exertion",
          "Sound that is stronger when lying down",
          "One-sided rhythmic sound"
        ]
      },
      {
        title: "Possible contributors",
        body: ["Only a clinician can determine the cause, but pulsatile tinnitus may be associated with several categories of concern."],
        bullets: [
          "Blood pressure or vascular changes",
          "Turbulent blood flow near the ear",
          "Middle ear or Eustachian tube issues",
          "Certain vascular abnormalities",
          "Anemia or thyroid factors",
          "Benign intracranial hypertension",
          "Other medical conditions requiring evaluation"
        ]
      },
      {
        title: "When it is a red flag",
        body: [
          "Pulsatile tinnitus should be evaluated, especially if it is new, one-sided, worsening, or paired with other symptoms."
        ],
        bullets: [
          "Sudden onset",
          "Only one ear is affected",
          "New headache, vision changes, dizziness, weakness, or neurological symptoms",
          "Recent head or neck injury",
          "New hearing loss, ear pain, drainage, or pressure",
          "The pulse-like sound is constant or getting stronger"
        ]
      },
      {
        title: "How evaluation may work",
        body: [
          "Audiology testing can document hearing status, middle-ear function, and ear-related findings. Depending on the pattern, the patient may also need evaluation by a physician, ENT, neurologist, cardiologist, or another specialist.",
          "Medical providers may consider blood pressure review, ear examination, imaging, lab work, or vascular evaluation when clinically appropriate."
        ]
      },
      {
        title: "Treatment and management",
        body: [
          "Management depends on the cause. Some cases involve ear or hearing care, while others require medical treatment for vascular, pressure-related, middle-ear, or systemic contributors.",
          "For patients who also have hearing loss or steady tinnitus, audiology care may still support communication, listening comfort, and sound management while medical questions are addressed."
        ]
      },
      {
        title: "What to track before your visit",
        body: [
          "Write down when the sound started, whether it matches your pulse, whether it changes with exercise or lying down, whether it is one-sided, and whether you have hearing loss, dizziness, headache, ear pressure, or vision changes."
        ]
      }
    ],
    faqs: [
      {
        question: "Is pulsatile tinnitus serious?",
        answer: "It can be. Pulsatile tinnitus should be evaluated because some causes require medical attention."
      },
      {
        question: "Can an audiologist evaluate pulsatile tinnitus?",
        answer: "An audiologist can assess hearing and ear-related factors, but medical referral may be needed to evaluate vascular or other causes."
      },
      {
        question: "What should I tell the office when I call?",
        answer: "Mention whether the sound matches your heartbeat, whether it is one-sided, when it started, and whether you have hearing loss, dizziness, headache, or other symptoms."
      },
      {
        question: "Can pulsatile tinnitus be treated with hearing aids?",
        answer: "Hearing aids may help if hearing loss is also present, but pulsatile tinnitus itself often requires medical evaluation to identify the cause."
      }
    ]
  },
  {
    title: "Tinnitus Relief Exercises and Sleep Strategies",
    slug: "relief-exercises-and-sleep",
    description:
      "Practical tinnitus coping strategies for relaxation, breathing, sleep, sound enrichment, jaw tension, neck tension, lifestyle triggers, and when to seek professional care.",
    intro: [
      "At-home strategies can help some people reduce tinnitus distress, especially when symptoms are worse in quiet settings, during stress, or at bedtime.",
      "Exercises and sleep strategies are not a substitute for evaluation, but they can support a broader tinnitus management plan."
    ],
    sections: [
      {
        title: "How exercises can help",
        body: [
          "Tinnitus is connected to the auditory system and brain, but stress, muscle tension, breathing, posture, sleep, and attention can change how intrusive it feels.",
          "Gentle routines can help calm the nervous system, reduce neck and jaw tension, and give the brain another focus besides the sound."
        ],
        bullets: [
          "Reduce muscle tension in the neck, jaw, and shoulders",
          "Lower stress activation before sleep",
          "Support steadier breathing",
          "Improve posture during desk work",
          "Shift attention away from tinnitus during spikes"
        ]
      },
      {
        title: "Safety first",
        body: [
          "Exercises should be gentle. Stop if you feel pain, dizziness, worsening symptoms, or anything that feels unsafe. Patients with neck, jaw, balance, spine, heart, or neurological concerns should speak with a medical professional before starting new exercises.",
          "Seek urgent medical guidance for sudden hearing loss, severe vertigo, neurological symptoms, or sudden pulsatile tinnitus."
        ]
      },
      {
        title: "Breathing and relaxation",
        body: [
          "Slow breathing can reduce the stress response that makes tinnitus feel more threatening. A simple pattern is to inhale gently, then exhale slightly longer than the inhale for several minutes.",
          "Progressive muscle relaxation and body scanning can also help before bed. Keep jaw, face, and neck effort gentle."
        ],
        bullets: ["Slow belly breathing", "Longer exhale breathing", "Progressive muscle relaxation", "Body scan before bed", "Brief quiet reset during tinnitus spikes"]
      },
      {
        title: "Neck, shoulder, and jaw tension",
        body: [
          "Some patients notice tinnitus changes with jaw clenching, neck posture, or shoulder tension. This does not mean the ear is not involved; it means body tension may be part of the overall pattern.",
          "Gentle neck range-of-motion, shoulder rolls, jaw relaxation, and unclenching reminders can be useful, especially for desk work, commuting, and evening routines."
        ],
        bullets: [
          "Keep stretches slow and pain-free",
          "Avoid forceful jaw movement",
          "Notice clenching during computer work or driving",
          "Use relaxed tongue posture and soft lips",
          "Ask a clinician if jaw or neck symptoms are significant"
        ]
      },
      {
        title: "Sound enrichment",
        body: [
          "Quiet rooms often make tinnitus more noticeable. Low-level background sound can reduce the contrast between tinnitus and the environment.",
          "Options include a fan, soft music, nature sounds, white noise, pink noise, low-volume podcasts, or hearing aid sound support when clinically appropriate."
        ]
      },
      {
        title: "Nighttime tinnitus and sleep",
        body: [
          "Tinnitus can feel louder at night because there is less environmental sound and fewer distractions. A consistent wind-down routine and comfortable background sound can help.",
          "Helpful sleep routines may include dim lights, less screen time, a regular sleep window, low-level sound, relaxing breathing, and avoiding late-night checking behaviors that train the brain to monitor tinnitus."
        ],
        bullets: [
          "Use a comfortable sound level rather than loud masking",
          "Set a timer if using audio",
          "Keep the room calm and predictable",
          "Avoid repeatedly measuring how loud tinnitus feels",
          "Ask for help if tinnitus is causing ongoing insomnia"
        ]
      },
      {
        title: "Lifestyle and diet triggers",
        body: [
          "Food and drink triggers vary. Some patients notice patterns with caffeine, alcohol, dehydration, high stress, poor sleep, or heavy sodium intake, while others do not.",
          "The most useful approach is tracking symptoms without becoming overly restrictive. If a pattern is consistent, discuss it at the appointment."
        ]
      },
      {
        title: "A simple daily plan",
        body: [
          "A practical tinnitus routine should be short enough to use consistently. Many patients do better with small daily habits than with complicated programs they cannot maintain."
        ],
        bullets: [
          "Morning: note sleep quality and tinnitus level without overanalyzing",
          "Daytime: use hearing technology or background sound when helpful",
          "Stress spike: take two minutes of slow breathing",
          "Evening: reduce quiet-room contrast with gentle sound",
          "Weekly: track patterns and questions for your audiologist"
        ]
      }
    ],
    faqs: [
      {
        question: "Can exercises cure tinnitus?",
        answer: "Exercises do not cure tinnitus, but relaxation, sound enrichment, and sleep strategies may reduce distress for some patients."
      },
      {
        question: "Should I use masking sound all night?",
        answer: "Some patients benefit from low-level sound at night. It should be comfortable and not loud enough to risk hearing."
      },
      {
        question: "Can caffeine or alcohol make tinnitus worse?",
        answer: "Some patients notice a pattern, while others do not. Track symptoms and discuss consistent triggers during your appointment."
      },
      {
        question: "When should I stop trying home strategies and schedule care?",
        answer: "Schedule care if tinnitus is persistent, worsening, one-sided, pulsing, affects sleep or concentration, or occurs with hearing changes."
      }
    ]
  }
];

export function tinnitusPageForPath(path: string) {
  return tinnitusPages.find((page) => tinnitusPath(page.slug) === path);
}
