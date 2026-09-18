export const howWeCanHelpRootPath = "/how-we-can-help";

export type HelpService = {
  title: string;
  menuTitle: string;
  slug: string;
  shortDescription: string;
  metaDescription: string;
  intro: string[];
  whoWeHelp: string[];
  signs: string[];
  appointmentSteps: string[];
  /** Section heading for whyItMatters. Twelve services making twelve
   *  different arguments should not share one hardcoded heading. */
  whyItMattersTitle?: string;
  whyItMatters: string;
  relatedServices: Array<{ label: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
  // Kept out of the header dropdown to keep that menu to a scannable length.
  // The page stays published, in the sitemap, and linked from the
  // /how-we-can-help hub -- this hides it from the nav, it does not retire it.
  hideFromMenu?: boolean;
};

export function helpServicePath(service: HelpService | string) {
  const slug = typeof service === "string" ? service : service.slug;
  return `${howWeCanHelpRootPath}/${slug}`;
}

const photo = (name: string) => `/assets/blog-seed/photo-v2/${name}-photo-v2.webp`;

// Per-service eyebrow so pages don't all read "How we can help".
export const helpServiceEyebrows: Record<string, string> = {
  "your-hearing": "Start here",
  "comprehensive-hearing-assessments": "Diagnostic hearing care",
  "advanced-hearing-aid-technology": "Hearing aid technology",
  "hearing-aid-tune-ups": "Hearing aid service",
  "tinnitus-management": "Tinnitus care",
  "cochlear-implants": "Cochlear implant support",
  "earwax-removal": "Ear health",
  "cognivue-cognitive-screening": "Hearing & cognition",
  "adoption-plan": "New-patient support",
  "lenire-for-tinnitus": "Tinnitus therapy",
  "executive-assistance": "Professional hearing care",
  "hearing-protection": "Hearing protection"
};

// Distinct, owned hero photo per service so no two pages share the same imagery.
export const helpServiceImages: Record<string, { src: string; alt: string }> = {
  "your-hearing": {
    src: photo("first-signs-of-hearing-loss-family-notice"),
    alt: "Family member gently talking with an older adult about noticing hearing changes"
  },
  "comprehensive-hearing-assessments": {
    src: photo("what-happens-during-comprehensive-hearing-evaluation"),
    alt: "Audiologist reviewing a comprehensive hearing evaluation with a patient"
  },
  "advanced-hearing-aid-technology": {
    src: photo("invisible-hearing-aids-pros-cons-candidacy"),
    alt: "Close-up of a discreet modern hearing aid held between fingertips"
  },
  "hearing-aid-tune-ups": {
    src: photo("how-often-professional-hearing-aid-cleaning"),
    alt: "Hearing aids being professionally cleaned and serviced on a clinic bench"
  },
  "tinnitus-management": {
    src: photo("can-hearing-aids-help-tinnitus"),
    alt: "Person pressing a hand to their ear while managing ringing from tinnitus"
  },
  "cochlear-implants": {
    src: photo("sudden-hearing-loss-why-not-wait"),
    alt: "Patient consulting an audiologist about significant hearing loss and next steps"
  },
  "earwax-removal": {
    src: photo("hearing-test-or-earwax-removal"),
    alt: "Clinician examining a patient's ear canal before earwax removal"
  },
  "cognivue-cognitive-screening": {
    src: photo("hearing-loss-cognitive-effort-listening-fatigue"),
    alt: "Adult concentrating hard to follow a conversation, showing listening fatigue"
  },
  "adoption-plan": {
    src: photo("costco-hearing-aids-vs-audiologist-care"),
    alt: "Audiologist supporting a patient with hearing aids purchased elsewhere"
  },
  "lenire-for-tinnitus": {
    src: photo("lenire-for-tinnitus-candidate-guide"),
    alt: "Patient learning about Lenire bimodal neuromodulation for tinnitus relief"
  },
  "executive-assistance": {
    src: photo("hearing-care-professionals-meetings-calls"),
    alt: "Professional staying engaged in a busy meeting with clear hearing support"
  },
  "hearing-protection": {
    src: photo("hearing-protection-power-tools-yard-work"),
    alt: "Person wearing custom hearing protection while using loud power tools"
  }
};

export const helpServices: HelpService[] = [
  {
    title: "Your Hearing",
    menuTitle: "Your Hearing",
    slug: "your-hearing",
    shortDescription: "Not sure which appointment you need? Start here, then call.",
    metaDescription:
      "Not sure which hearing appointment to book? A short guide to the three reasons people call Audiology Associates of Westchester, and how to pick the right visit.",
    intro: [
      "Most people who call arrive with one of three things. Conversation has got harder. A hearing aid is not doing its job. Or a family member kept asking until they picked up the phone. Any of those is a reason to book, and the front desk can tell you which visit fits before you drive to Harrison or Somers."
    ],
    whoWeHelp: [
      "Adults who are asking people to repeat themselves",
      "Hearing aid wearers whose devices are not performing the way they used to",
      "Families who want a relative's hearing looked at and do not know where to start"
    ],
    signs: [
      "You follow one person fine and a table of four defeats you",
      "The TV is louder than anyone else in the house wants it",
      "Ringing, fullness, or dizziness has started and has not settled"
    ],
    appointmentSteps: [
      "You describe what has changed and where it bothers you most.",
      "We book the visit that answers it: a hearing evaluation, a device appointment, or a tinnitus consultation.",
      "You leave knowing what was found and what happens next."
    ],
    whyItMatters:
      "This page is a signpost, not a service. Nobody is diagnosed from a website. One phone call gets you to the right appointment faster than an hour of reading.",
    relatedServices: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Tinnitus Therapy", href: "/tinnitus-therapy" },
      { label: "LGBTQ+ Affirming Hearing Care", href: "/lgbtq-affirming-hearing-care" }
    ],
    faqs: [
      {
        question: "How do I know which appointment to book?",
        answer:
          "Call and describe what you have noticed. The team books hearing evaluations, device service visits, and tinnitus consultations, and they will tell you which one your description fits."
      },
      {
        question: "Can I bring my daughter or my husband?",
        answer:
          "Yes, and it helps. The person who sits across from you at dinner usually describes the problem more accurately than you can."
      }
    ]
  },
  {
    title: "Comprehensive Hearing Assessments",
    menuTitle: "Comprehensive Hearing Assessments",
    slug: "comprehensive-hearing-assessments",
    shortDescription: "A full diagnostic evaluation: thresholds at every pitch, word understanding, and an ear examination.",
    metaDescription:
      "A comprehensive hearing assessment in Westchester County measures thresholds at each pitch and how clearly you understand words. Harrison and Somers, NY.",
    intro: [
      "A comprehensive hearing assessment measures two different things: the softest sounds you can hear at each pitch, and how well you make out words. They are not the same measurement, and the gap between them is why someone can insist the room is loud enough and still miss half of what was said.",
      "The appointment also includes looking in both ears and, when the picture calls for it, a middle-ear test (tympanometry) that shows whether the eardrum and the space behind it are moving normally.",
      "What comes out is an audiogram and a recommendation. That may be hearing aids. It may be a medical referral, wax management first, or nothing yet except a baseline to measure against in a few years."
    ],
    whoWeHelp: [
      "Adults who have noticed hearing changes over the last few years",
      "People who hear fine one to one and lose the thread in noise",
      "Patients with tinnitus, fullness, or dizziness alongside hearing changes",
      "Hearing aid wearers whose test results are years older than their devices"
    ],
    signs: [
      "You hear that someone is speaking but cannot make out the words",
      "The TV volume has crept up and somebody else has mentioned it",
      "You skip restaurants and large gatherings because following them is work",
      "One ear seems worse than the other",
      "Your family has raised your hearing more than once"
    ],
    appointmentSteps: [
      "We take the history: what changed, when, noise exposure, medications, ear surgery, and where listening breaks down.",
      "We look in both ears before any testing, because wax in the canal changes the result.",
      "You listen for tones through headphones across the pitch range, then repeat back words at conversational levels.",
      "Middle-ear testing is added when the pattern suggests a blockage rather than an inner-ear loss.",
      "We go through the audiogram with you, say what it means for restaurants and phones and the people you live with, and agree the next step."
    ],
    whyItMatters:
      "Half the value of the audiogram is what it rules out: wax, a middle-ear problem, a one-sided loss that belongs with an ENT. Bring someone who talks to you every day. Their account of what you miss is information the test cannot produce.",
    relatedServices: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Types of Hearing Loss", href: "/hearing-loss" },
      { label: "LGBTQ+ Affirming Hearing Care", href: "/lgbtq-affirming-hearing-care" }
    ],
    faqs: [
      {
        question: "Is this the same as a hearing screening?",
        answer:
          "No. A screening gives a pass or a fail. An assessment measures thresholds at each pitch, measures word understanding, and ends in a plan."
      },
      {
        question: "How often should I have one?",
        answer:
          "Book one when you notice a change. After that, your audiologist will suggest an interval based on your results, your noise exposure, and whether you wear hearing aids."
      },
      {
        question: "Will I be pushed to buy hearing aids?",
        answer:
          "No. Some assessments end in monitoring, some in a wax appointment, some in a referral. Hearing aids are recommended when the results and your daily listening call for them."
      },
      {
        question: "Should I bring my current hearing aids?",
        answer:
          "Yes, with the charger and the phone app if you use one. Whether your existing devices still match your hearing is part of the answer."
      }
    ]
  },
  {
    title: "Advanced Hearing Aid Technology",
    menuTitle: "Advanced Hearing Aid Technology",
    slug: "advanced-hearing-aid-technology",
    shortDescription: "Choosing between brands, styles, and technology levels, and having the result verified in your ear.",
    metaDescription:
      "Compare hearing aid brands, styles and technology levels with an independent audiologist, then have the fitting verified with real-ear measurement.",
    intro: [
      "The practice fits Oticon, Phonak, ReSound, Signia, Starkey, Widex, Unitron, Rexton, and Lyric. The range is wide on purpose: what we recommend is not limited to what we happen to stock.",
      "Technology level changes how a hearing aid behaves in noise, how it handles calls and streaming, whether it recharges, and how small it can be. It does not change how well the device is fitted, and the fitting is where most of the benefit is won or lost."
    ],
    whoWeHelp: [
      "Patients comparing brands and technology tiers before committing",
      "Long-time wearers ready to replace aging devices",
      "People who want phone calls and TV audio going straight to their hearing aids",
      "Patients asking about custom, invisible, or extended-wear styles"
    ],
    signs: [
      "Your hearing aids cope with the kitchen and fail in the restaurant",
      "Phone calls are the part of the day you dread",
      "You take the devices out for meetings because they are not helping there",
      "You were told a style was impossible for your hearing and want a second view"
    ],
    appointmentSteps: [
      "We start from your audiogram and the situations you named, not from a brochure.",
      "We narrow the field to the styles your hearing level and ear anatomy actually allow.",
      "We talk through handling: rechargeable or batteries, dexterity, who will clean them, and which phone you carry.",
      "At the fitting we run real-ear measurement, so what the device delivers at your eardrum is measured against the prescription rather than assumed.",
      "You come back after living with them, and the settings are adjusted from what happened in real rooms."
    ],
    whyItMatters:
      "Two people with the same audiogram often need different devices, and the same device set two ways performs differently. A verified mid-tier hearing aid beats an unverified premium one. If your listening is quiet rooms and one-to-one conversation, we will tell you that the top tier is not worth your money.",
    relatedServices: [
      { label: "Hearing Aid Brands", href: "/hearing-aids-brands" },
      { label: "Types of Hearing Aids", href: "/types-of-hearing-aids" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Lyric Invisible Hearing", href: "/lyric-invisible-hearing" }
    ],
    faqs: [
      {
        question: "Which brand is best?",
        answer:
          "None of them, universally. The platforms differ in how they process noise, what they connect to, and which custom styles they offer. The right one depends on your audiogram, your ears, your hands, and your phone."
      },
      {
        question: "Do I need the top technology level?",
        answer:
          "Not always. The higher tiers mostly buy performance in noisy and complicated places. If the hard listening in your week happens twice a year, that money is better kept."
      },
      {
        question: "What is real-ear measurement?",
        answer:
          "A thin probe microphone sits in your ear canal while the hearing aid plays, so the output at your eardrum can be measured and matched to the prescription for your hearing loss. Manufacturer first-fit settings routinely fall short of those targets, which is why the measurement is worth the extra minutes."
      },
      {
        question: "Can I hear one before I decide?",
        answer:
          "Ask the office what demonstration and trial arrangements currently apply. Those terms change, so we will not quote them on a web page."
      },
      {
        question: "Are invisible hearing aids an option for me?",
        answer:
          "Sometimes. Lyric sits deep in the ear canal, is placed by a clinician, and stays in for months at a time between visits. Candidacy depends on the shape of your canal, your hearing level, and the health of the skin in the ear."
      }
    ]
  },
  {
    title: "Hearing Aid Tune-Ups",
    menuTitle: "Hearing Aid Tune-Ups",
    slug: "hearing-aid-tune-ups",
    shortDescription: "Cleaning, parts, and troubleshooting for hearing aids that have gone weak, whistly, or intermittent.",
    metaDescription:
      "Hearing aid cleaning, wax filters, receivers, domes, and troubleshooting in Westchester County. Bring the devices, the charger, and the app.",
    intro: [
      "Hearing aids sit all day in a warm, humid, waxy place. Sound goes weak, one side cuts out, a receiver clogs. Most of it is fixable at the bench in the office.",
      "A tune-up separates the three usual causes: the device needs cleaning or a part, the programming no longer matches your hearing, or your hearing itself has changed and needs retesting."
    ],
    whoWeHelp: [
      "Wearers whose sound has gone weak, distorted, or intermittent",
      "Anyone whose hearing aids whistle or will not hold a charge",
      "Patients who need domes, wax filters, receivers, or earmolds replaced"
    ],
    signs: [
      "One side is quieter than the other",
      "The device cuts in and out through the day",
      "It whistles when you put on a hat or hug someone",
      "A full charge no longer lasts the evening",
      "The phone pairing drops and will not come back"
    ],
    appointmentSteps: [
      "We ask when it started, which ear, and what you have already tried.",
      "The device is examined and cleaned: wax filter, receiver, dome, microphone ports, battery contacts.",
      "Worn parts are replaced from what we hold for that manufacturer.",
      "If cleaning does not bring it back, we check the programming and tell you whether this is a manufacturer repair, a retest, or a device at the end of its life."
    ],
    whyItMatters:
      "A lot of the hearing aids people have given up on are not broken. They are blocked. Bring them in before the wax reaches the receiver, and say which ear and which situation, because that is what shortens the visit.",
    relatedServices: [
      { label: "Hearing Aid Repair", href: "/hearing-aid-repair" },
      { label: "Batteries and Accessories", href: "/batteries-and-accessories" },
      { label: "Adoption Plan", href: "/how-we-can-help/adoption-plan" }
    ],
    faqs: [
      {
        question: "How often should hearing aids be cleaned here?",
        answer:
          "It depends on how much wax you produce, how dusty or humid your days are, and the device itself. Ask at your next visit what interval makes sense for yours."
      },
      {
        question: "Can you service hearing aids I bought somewhere else?",
        answer:
          "Often, but it depends on the brand, the model, the age, and whether we have the fitting software. Call with the make and model before you drive over."
      },
      {
        question: "Is a tune-up the same as a repair?",
        answer:
          "No. A tune-up is cleaning, parts, and adjustment done here. A repair means the device goes back to the manufacturer because a component has failed."
      },
      {
        question: "What should I bring?",
        answer:
          "Everything: both devices even if only one is misbehaving, the charger and cable, spare domes and filters, and your phone with the app on it."
      }
    ]
  },
  {
    title: "Tinnitus Management",
    menuTitle: "Tinnitus Management",
    slug: "tinnitus-management",
    shortDescription: "Evaluation and management for ringing, buzzing, humming, and sound sensitivity.",
    metaDescription:
      "Tinnitus evaluation and management in Westchester County: hearing testing, counseling, sound strategies, and hearing aids where hearing loss is part of it.",
    intro: [
      "Tinnitus is sound you hear that has no source outside your head: ringing, buzzing, hissing, a hum, sometimes a roar. For some people it stays in the background. For others it owns the evening and the first hour of the night.",
      "The first job is finding out what sits underneath it. Tinnitus commonly arrives alongside hearing loss, so the work starts with a hearing test and a look in the ears.",
      "Dr. Ratner and Dr. Savin both hold the CH-TM certificate in tinnitus management, and Dr. Dold does tinnitus testing and treatment. Care here means counseling, sound strategies, hearing aids where there is hearing loss to treat, and the Lenire pathway for patients who meet its candidacy criteria."
    ],
    whoWeHelp: [
      "People whose tinnitus started recently and want to know what it is",
      "Long-term sufferers who were told nothing could be done",
      "Hearing aid wearers who want the tinnitus features in their devices set up properly",
      "People whose sound sensitivity makes ordinary rooms hard to sit in"
    ],
    signs: [
      "The ringing follows you into bed and delays sleep",
      "You cannot hold your concentration through it at work",
      "Quiet rooms have become the hardest rooms",
      "The tinnitus started around the same time your hearing changed"
    ],
    appointmentSteps: [
      "We take the history: when it started, one ear or both, what makes it worse, what it costs you in sleep and concentration.",
      "We test your hearing, because tinnitus and hearing loss usually travel together.",
      "We explain the findings and what a realistic target looks like for your case.",
      "We agree a plan: counseling and sound strategies, hearing aids where there is loss to treat, tinnitus programming in your devices, or a Lenire candidacy discussion."
    ],
    whyItMatters:
      "Some tinnitus belongs with a physician first: tinnitus that pulses with your heartbeat, or that is new in one ear alongside a drop in hearing. For everyone else, understand what management means here. Nobody will promise to switch the sound off.",
    relatedServices: [
      { label: "Tinnitus Therapy", href: "/tinnitus-therapy" },
      { label: "Lenire for Tinnitus", href: "/how-we-can-help/lenire-for-tinnitus" },
      { label: "Hearing Testing", href: "/hearing-testing" }
    ],
    faqs: [
      {
        question: "Will it ever go away?",
        answer:
          "For some people it fades. For many it stays and takes up less of the day than it used to, which is what management aims at. Anyone promising a cure is selling something."
      },
      {
        question: "Does tinnitus mean I am going deaf?",
        answer:
          "Not on its own. Tinnitus and hearing changes commonly occur together, which is why a hearing test comes first."
      },
      {
        question: "Do hearing aids help tinnitus?",
        answer:
          "When hearing loss is present, treating it is the first step and often changes how intrusive the tinnitus is. Most current platforms also carry tinnitus sound programs that we can set up during the fitting."
      },
      {
        question: "What should I bring to the appointment?",
        answer:
          "Any previous hearing tests, ENT or imaging reports, your medication list, and a note of when the tinnitus is at its worst."
      }
    ]
  },
  {
    title: "Cochlear Implant Support",
    menuTitle: "Cochlear Implants",
    slug: "cochlear-implants",
    shortDescription: "Candidacy testing before the referral, activation and mapping after the surgery.",
    metaDescription:
      "Cochlear implant candidacy testing, activation, and mapping with Dr. Caitlin Dold at Audiology Associates of Westchester in Harrison and Somers, NY.",
    intro: [
      "A cochlear implant works differently from a hearing aid. A hearing aid makes sound louder and clearer for an ear that still works. An implant bypasses the damaged inner ear and stimulates the hearing nerve directly, and it is placed surgically.",
      "The question that brings most people to this page is simpler than the technology: my hearing aids are turned up and I still cannot understand my grandchildren. That is the point at which candidacy is worth testing.",
      "Dr. Caitlin Dold does the cochlear implant work at this practice. Candidacy testing before, activation and programming after. The surgery itself is done by an implant surgeon at a hospital, not here."
    ],
    whoWeHelp: [
      "Hearing aid wearers who still cannot follow speech with well-fitted devices",
      "Adults whose word understanding has dropped while the audiogram looked stable",
      "Patients whose ENT or audiologist told them to ask about candidacy",
      "Implant recipients who want mapping and follow-up closer to home",
      "Families trying to understand what an implant would and would not change"
    ],
    signs: [
      "Speech is still unclear through hearing aids that have been verified in your ears",
      "The phone has become unusable even with streaming",
      "You are relying on captions and lipreading for most conversation",
      "The hearing aids were turned up again and clarity did not improve"
    ],
    appointmentSteps: [
      "We check what your current hearing aids are actually delivering, with real-ear measurement. An implant conversation that starts from underfitted hearing aids starts in the wrong place.",
      "We test hearing and word understanding, with and without your devices. That measurement is what candidacy turns on.",
      "We explain where your results sit against candidacy criteria, including the possibility that you are not a candidate and better-fitted hearing aids are the answer.",
      "If an implant evaluation is appropriate, we refer you to an implant surgeon and send the testing with you.",
      "Coverage and cost are worked out between you, the implant program, and your insurer. We do not quote either on this site.",
      "After surgery and healing, activation happens here with Dr. Dold: the processor is programmed and switched on for the first time.",
      "Mapping continues over a series of follow-up visits, and the settings keep being adjusted for as long as you wear the implant."
    ],
    whyItMatters:
      "Two expectations are worth setting early. An implant delivers a different kind of signal, and the first days rarely sound like the hearing anyone remembers, so the early weeks take practice. And the decision is a surgical one made with a surgeon. What audiology owns is the testing that gets you there and the programming you come back for.",
    relatedServices: [
      { label: "Dr. Caitlin Dold", href: "/meet-the-team/caitlin-dold" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Advanced Hearing Aid Technology", href: "/how-we-can-help/advanced-hearing-aid-technology" },
      { label: "Sensorineural Hearing Loss", href: "/hearing-loss/sensorineural-hearing-loss" }
    ],
    faqs: [
      {
        question: "Is a cochlear implant the same as a hearing aid?",
        answer:
          "No. Hearing aids amplify sound into an ear that still works. A cochlear implant is placed surgically and stimulates the hearing nerve directly. Candidacy is decided by testing."
      },
      {
        question: "Do you do the surgery here?",
        answer:
          "No. Surgery is done by an implant surgeon at a hospital. The testing before it and the programming after it happen at this practice with Dr. Dold."
      },
      {
        question: "Am I too old for one?",
        answer:
          "That question is answered by the evaluation rather than by a birth year. Candidacy rests on your test results, your word understanding with well-fitted hearing aids, medical factors, and what you want to be able to do again."
      },
      {
        question: "Will insurance cover it?",
        answer:
          "Coverage is settled between you, the implant program, and your plan, and the criteria differ from plan to plan. The implant program's coordinator handles that process. We do not quote coverage or cost here."
      },
      {
        question: "What happens at activation?",
        answer:
          "The processor is programmed and switched on, and you hear through the implant for the first time. Follow-up mapping sessions come after it, and the settings are refined across that series."
      },
      {
        question: "What will an implant not do?",
        answer:
          "It will not give you back the hearing you had, and it will not make a loud restaurant easy on day one. It also does not end the appointments: the mapping is adjusted for as long as you use it."
      }
    ]
  },
  {
    title: "Earwax Removal",
    menuTitle: "Earwax Removal",
    slug: "earwax-removal",
    shortDescription: "Cerumen management when wax is blocking hearing, a hearing test, or a hearing aid.",
    metaDescription:
      "Earwax removal and cerumen management at Audiology Associates of Westchester, when it is clinically appropriate. Harrison and Somers, NY.",
    intro: [
      "Wax is normal and most ears clear it on their own. It matters when it blocks the canal, clogs a hearing aid, or stops a hearing test from being accurate.",
      "We look first. If the canal is blocked and it is safe to clear, cerumen management is done in the office. If what we see is a perforation, an infection, drainage, or an ear that has had surgery, you go to a physician instead."
    ],
    whoWeHelp: [
      "People whose ear has gone blocked and muffled",
      "Hearing aid wearers whose devices clog again and again",
      "Patients whose hearing test could not be completed because of wax"
    ],
    signs: [
      "One ear feels plugged and everything through it sounds dull",
      "Your hearing aid sounds weak within days of being cleaned",
      "You have been using cotton swabs and it has got worse"
    ],
    appointmentSteps: [
      "We look into the canal before anything is touched.",
      "If the wax is safe to remove, it is removed here and the eardrum is checked afterwards.",
      "If it is not safe, or something else is going on, you leave with a referral rather than a procedure."
    ],
    whyItMatters:
      "A fully blocked canal can drop hearing enough to be mistaken for hearing loss, and wax under a receiver makes a working hearing aid sound broken. Keep cotton swabs out of the canal: they push wax deeper.",
    relatedServices: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Conductive Hearing Loss", href: "/hearing-loss/conductive-hearing-loss" }
    ],
    faqs: [
      {
        question: "Can earwax stop a hearing aid working?",
        answer:
          "Yes. Wax clogs filters, receivers, domes, and earmolds, and the device goes weak or distorted."
      },
      {
        question: "Will you always remove it?",
        answer:
          "No. If the ear is not safe to work in, or the picture suggests infection, perforation, or a surgical history, the right answer is a physician rather than a suction tip."
      },
      {
        question: "Should I use drops first?",
        answer:
          "Ask before you do. What softens wax in a healthy ear is the wrong thing for an ear with a perforation, which is one reason we look before anything else."
      }
    ]
  },
  {
    title: "Cognivue Cognitive Screening",
    menuTitle: "Cognivue Cognitive Screening",
    slug: "cognivue-cognitive-screening",
    hideFromMenu: true,
    shortDescription: "A computer-based screening that gives you and your physician something written down.",
    metaDescription:
      "Cognivue cognitive screening at Audiology Associates of Westchester in Harrison and Somers, NY. A screening tool, not a diagnosis.",
    intro: [
      "Following a conversation takes attention and memory as well as hearing. Cognivue is a computer-based screening that gives a snapshot of that side of listening, offered here alongside hearing care.",
      "It is a screening, not a diagnosis. It cannot tell you that you have dementia and it cannot tell you that you do not. What it gives you is a written result to take to your physician."
    ],
    whoWeHelp: [
      "Patients who find listening has become mentally tiring",
      "People whose hearing concerns overlap with worries about memory or attention",
      "Families who want something concrete to bring to a physician"
    ],
    signs: [
      "A long conversation leaves you drained rather than just deaf",
      "You lose the thread when several people talk at once",
      "A physician or a relative has raised memory alongside hearing"
    ],
    appointmentSteps: [
      "We explain what the screening measures and what it cannot tell you.",
      "You complete it on the device at your own pace.",
      "We go through the result as screening information.",
      "Anything medical goes to your physician, and the result goes with you."
    ],
    whyItMatters:
      "The reason this sits in an audiology office is practical. Straining to hear makes listening effortful, and effort can look like a memory problem from the outside. Sorting out the hearing part first makes the rest of the picture easier to read.",
    relatedServices: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Comprehensive Hearing Assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "Meet the Team", href: "/meet-the-team" }
    ],
    faqs: [
      {
        question: "Is Cognivue a diagnosis?",
        answer:
          "No. It is a screening tool. Diagnosis belongs with a physician, and a screening result is something to bring to that appointment."
      },
      {
        question: "Why is a hearing practice asking about cognition?",
        answer:
          "Because listening uses attention and processing, and untreated hearing loss makes both harder to judge. The two questions get tangled together, and it helps to separate them."
      },
      {
        question: "Do hearing aids treat memory problems?",
        answer:
          "No. Hearing aids are fitted for hearing loss. They do not diagnose or treat cognitive conditions."
      }
    ]
  },
  {
    title: "Adoption Plan",
    menuTitle: "Adoption Plan",
    slug: "adoption-plan",
    shortDescription: "Taking over care of hearing aids bought elsewhere, when the brand and software allow it.",
    metaDescription:
      "Local care for hearing aids purchased elsewhere: cleaning, parts, programming, and honest limits. Call with the make and model first.",
    intro: [
      "You bought hearing aids somewhere else and now you need someone here. People moved, the clinic closed, the online seller has no clinic, or the follow-up they were promised never materialized.",
      "An adoption plan is this practice taking over care of devices it did not sell, where the brand, the model, and the fitting software allow. Call with the make, model, and rough age before you book, because that is what decides whether we can help."
    ],
    whoWeHelp: [
      "Patients who moved to Westchester with hearing aids fitted elsewhere",
      "People whose original clinic has closed or changed hands",
      "Buyers of online or big-box devices who need in-person programming",
      "Anyone unsure whether the hearing aids they own still match their hearing"
    ],
    signs: [
      "You like the hearing aids but have nobody local to adjust them",
      "The settings have not been touched since the day you got them",
      "You need parts, cleaning, or app help and have no clinic to call"
    ],
    appointmentSteps: [
      "You call with brand, model, and approximate age, and we check serviceability before you come in.",
      "We review your hearing history and what is not working now.",
      "The devices are inspected and cleaned, and we check whether the physical fit is still right.",
      "Where we hold the manufacturer's software, we check the settings against your hearing rather than trusting the previous programming.",
      "We tell you what the practice can support, and where a manufacturer repair or a replacement is the honest answer."
    ],
    whyItMatters:
      "Hearing aids need somebody to adjust them, and devices with nobody behind them end up in a drawer. There is a real limit worth knowing: some brands lock their fitting software to their own channel, and goodwill does not get around that. Better to hear it on the phone than after the drive.",
    relatedServices: [
      { label: "Hearing Aid Repair", href: "/hearing-aid-repair" },
      { label: "Hearing Aid Tune-Ups", href: "/how-we-can-help/hearing-aid-tune-ups" },
      { label: "Advanced Hearing Aid Technology", href: "/how-we-can-help/advanced-hearing-aid-technology" }
    ],
    faqs: [
      {
        question: "Can you program hearing aids bought elsewhere?",
        answer:
          "Often, but not always. It depends on the brand, the model, and whether we hold the manufacturer's fitting software. Call with those details first."
      },
      {
        question: "What if mine cannot be serviced here?",
        answer:
          "We say so, and explain what is left: manufacturer repair, replacement parts, or a conversation about newer devices."
      },
      {
        question: "What does an adoption plan cost?",
        answer:
          "Contact the office for current fees and what is included. Pricing is not published on this site, and a page is a bad place to quote it."
      },
      {
        question: "Are online or warehouse-club hearing aids covered?",
        answer:
          "It depends entirely on the model and the software behind it. Some are supportable here, some are locked to the seller. The phone call takes two minutes."
      }
    ]
  },
  {
    title: "Lenire for Tinnitus",
    menuTitle: "Lenire for Tinnitus",
    slug: "lenire-for-tinnitus",
    shortDescription: "A prescribed bimodal neuromodulation pathway, assessed after testing rather than ordered online.",
    metaDescription:
      "Lenire for tinnitus in Westchester County: what the candidacy assessment involves at Audiology Associates of Westchester, Harrison and Somers, NY.",
    intro: [
      "Lenire is a bimodal neuromodulation device for tinnitus. It pairs sound through headphones with mild electrical stimulation, used in daily sessions across a course of treatment.",
      "It is a prescribed pathway rather than something to order online. Candidacy is assessed after a hearing test and a tinnitus evaluation, and part of that assessment is ruling out what belongs with a physician instead."
    ],
    whoWeHelp: [
      "People whose tinnitus is affecting sleep, focus, or mood",
      "Patients who have worked through sound apps and general advice without enough relief",
      "Anyone who has read about Lenire and wants a straight answer on whether they qualify"
    ],
    signs: [
      "The tinnitus is persistent rather than occasional",
      "General strategies have not moved it enough",
      "It comes with hearing difficulty or sound sensitivity",
      "You want a specific pathway assessed rather than more advice"
    ],
    appointmentSteps: [
      "We take the tinnitus history and measure your hearing.",
      "We look for the findings that change the plan: pulsatile tinnitus, one-sided symptoms, sudden change, dizziness.",
      "Where there is hearing loss, that is addressed on its own merits before any device pathway is considered.",
      "If Lenire is appropriate, we go through what the treatment course involves and what follow-up it needs.",
      "You decide with the expectations spelled out, including the possibility that this is not the right tool for your tinnitus."
    ],
    whyItMatters:
      "Tinnitus attracts more marketing than almost anything else in hearing care. The value of a candidacy appointment is partly the assessment and partly the filter: an honest answer about whether this device has anything to offer your particular tinnitus.",
    relatedServices: [
      { label: "Tinnitus Management", href: "/how-we-can-help/tinnitus-management" },
      { label: "Tinnitus Therapy", href: "/tinnitus-therapy" },
      { label: "Hearing Testing", href: "/hearing-testing" }
    ],
    faqs: [
      {
        question: "Can I just buy Lenire myself?",
        answer:
          "No. It is a prescribed pathway. Candidacy is assessed after testing, and other causes are looked at first."
      },
      {
        question: "Does it cure tinnitus?",
        answer:
          "No tinnitus treatment should be presented as a cure, and this one is no exception. The conversation is about how much of your day the tinnitus takes up, not about switching it off."
      },
      {
        question: "Do I need a hearing test first?",
        answer:
          "Yes. Your hearing status and your tinnitus profile are the facts a candidacy discussion runs on."
      },
      {
        question: "What does it cost?",
        answer:
          "Call the office. Pricing, availability, and what a course includes all change, and a web page is the wrong place to quote them."
      },
      {
        question: "What if I am not a candidate?",
        answer:
          "Then we say so, and the plan goes back to what does apply: counseling, sound strategies, hearing aids where there is hearing loss, or a medical referral."
      }
    ]
  },
  {
    title: "Executive Assistance",
    menuTitle: "Executive Assistance",
    slug: "executive-assistance",
    shortDescription: "Ordinary hearing care aimed at meetings, calls, and conference rooms.",
    metaDescription:
      "Hearing care for professionals in Westchester County: discreet devices, programs built for meeting rooms and calls, and follow-up after a real working week.",
    intro: [
      "This is ordinary hearing care aimed at a specific room: the conference call, the boardroom, the restaurant where the business actually gets discussed. The test is the same test and the devices are the same devices. What changes is which environments we optimize for, and how discreet the fitting has to be."
    ],
    whoWeHelp: [
      "Professionals losing detail in meetings and on calls",
      "Patients who want the least visible device their hearing allows",
      "Wearers who need a program set up for conference rooms and headsets"
    ],
    signs: [
      "You miss the quiet person at the far end of the table",
      "Video calls take more concentration than the meeting itself",
      "You are worn out by the end of a day of listening"
    ],
    appointmentSteps: [
      "We map the week: which rooms, which calls, which devices you already carry.",
      "We fit and verify to your hearing, then build a program for the rooms that matter.",
      "You come back after a real week of meetings and we adjust from that."
    ],
    whyItMatters:
      "The honest limit: no hearing aid turns a bad conference-room speakerphone into a good one. A remote microphone on the table, or streaming straight from your laptop, usually does more for meetings than paying up a technology tier.",
    relatedServices: [
      { label: "Advanced Hearing Aid Technology", href: "/how-we-can-help/advanced-hearing-aid-technology" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Batteries and Accessories", href: "/batteries-and-accessories" }
    ],
    faqs: [
      {
        question: "Can hearing aids be set up for work specifically?",
        answer:
          "Yes. Most current platforms hold several programs, and one can be built for meeting rooms and calls. How much it helps depends on the room and on the device."
      },
      {
        question: "What are the most discreet options?",
        answer:
          "Small receiver-in-canal devices, custom in-the-ear styles, and Lyric, which sits in the canal and is placed by a clinician. Which of those your hearing allows is decided by the audiogram."
      }
    ]
  },
  {
    title: "Hearing Protection",
    menuTitle: "Hearing Protection",
    slug: "hearing-protection",
    shortDescription: "Custom plugs and molds for music, work, shooting, sleep, and water.",
    metaDescription:
      "Custom hearing protection fitted from ear impressions: musician's plugs, occupational protection, sleep plugs, and swim molds. Harrison and Somers, NY.",
    intro: [
      "Custom protection is made from an impression of your ear, so it seals without being jammed in, and it can be built with filters that lower the level while leaving speech and music intelligible.",
      "The practice makes musician's plugs, protection for loud work and machinery, sleep plugs, and swim molds. Which style and which filter depend on what you still need to hear while you are protected."
    ],
    whoWeHelp: [
      "Musicians, sound engineers, and regular concertgoers",
      "Workers around machinery, saws, and compressed air",
      "Shooters, motorcyclists, and people running loud yard equipment",
      "Patients who find foam plugs uncomfortable or useless"
    ],
    signs: [
      "Your ears ring or sound dull after a gig, a shift, or an afternoon with the mower",
      "Foam plugs fall out, hurt, or turn everything to mush",
      "You need to hear speech or music clearly while still protected",
      "Your job requires protection and nobody has ever fitted it to your ears"
    ],
    appointmentSteps: [
      "We go through the exposure: how loud, how long, how often, and what you need to hear through it.",
      "The ears are checked and impressions are taken when a custom product is the right answer.",
      "The order goes to the manufacturer, and we fit it when it arrives and check the seal.",
      "We show you how to insert, clean, and store them, and when filters or molds need replacing."
    ],
    whyItMatters:
      "Noise damage is permanent and it is one of the few kinds you can prevent outright. The protection that works is the protection you will keep in your ears, which is why comfort and the right filter matter more than the biggest number on the packet.",
    relatedServices: [
      { label: "Hearing Protection", href: "/hearing-protection" },
      { label: "Prevent Hearing Loss", href: "/prevent-hearing-loss" },
      { label: "Noise-Induced Hearing Loss", href: "/hearing-loss/noise-induced-hearing-loss" }
    ],
    faqs: [
      {
        question: "Are custom plugs worth it over foam?",
        answer:
          "For repeated exposure, usually. They seal reliably and they are comfortable enough that people keep them in. For one afternoon with a leaf blower, foam is fine."
      },
      {
        question: "Will musician's plugs ruin how music sounds?",
        answer:
          "That is what the filters are there to avoid. They reduce level fairly evenly across pitches instead of taking the highs out the way foam does."
      },
      {
        question: "Do I need a hearing test first?",
        answer:
          "Not necessarily, but a baseline is worth having if you are around noise regularly. It is the only way to see damage before it reaches conversation."
      }
    ]
  }
];

export function helpServiceForPath(path: string) {
  return helpServices.find((service) => helpServicePath(service) === path);
}

export type CoreServiceDeepDive = {
  title: string;
  intro: string;
  appointmentSteps: string[];
  practicalNotes: string[];
  related: Array<{ label: string; href: string }>;
};

export const coreServiceDeepDives: Record<string, CoreServiceDeepDive> = {
  "/hearing-testing": {
    title: "What happens during a hearing testing appointment",
    intro:
      "A hearing test produces a chart, and the chart is the least useful part of it. What the appointment is for is finding out whether hearing loss, tinnitus, wax, or a device problem is what is getting in the way of conversation.",
    appointmentSteps: [
      "The audiologist reviews your hearing history, symptoms, and communication goals.",
      "Testing is selected based on your concerns and what needs to be measured.",
      "Results are explained in plain language, including how they may affect speech clarity.",
      "You leave with a next step: a date to be retested, a hearing aid discussion, tinnitus care, or a referral to a physician."
    ],
    practicalNotes: [
      "Bring current hearing aids if you use them.",
      "Bring a family member if they can help describe communication changes.",
      "Tell the team about tinnitus, dizziness, ear fullness, noise exposure, or sudden changes."
    ],
    related: [
      { label: "Comprehensive Hearing Assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "Your Hearing", href: "/how-we-can-help/your-hearing" }
    ]
  },
  "/hearing-aid-fitting": {
    title: "What happens during a hearing aid fitting",
    intro:
      "A fitting is where the devices are matched to your ears and to your hearing. It covers physical fit, programming, verification in the ear canal, and how you will handle and clean them.",
    appointmentSteps: [
      "Your audiologist confirms the devices and checks the physical fit in both ears.",
      "The hearing aids are programmed to the prescription for your hearing loss.",
      "Real-ear measurement checks what the devices deliver at your eardrum against that prescription.",
      "You are shown insertion, cleaning, charging, and phone pairing before you leave.",
      "Follow-up visits refine comfort and clarity once you have worn them in real rooms."
    ],
    practicalNotes: [
      "Make a list of the situations where you most want improvement.",
      "Bring your phone, and its passcode, if you want streaming set up.",
      "Ask what follow-up visits are included and over what period.",
      "Plan for an adjustment visit after a week or two of real-world listening."
    ],
    related: [
      { label: "Advanced Hearing Aid Technology", href: "/how-we-can-help/advanced-hearing-aid-technology" },
      { label: "Hearing Aid Tune-Ups", href: "/how-we-can-help/hearing-aid-tune-ups" }
    ]
  },
  "/tinnitus-therapy": {
    title: "What happens during tinnitus care",
    intro:
      "Tinnitus care starts with understanding the sound, how often it occurs, what makes it better or worse, and how much it affects sleep, focus, stress, or quality of life.",
    appointmentSteps: [
      "The audiologist reviews tinnitus history and related hearing concerns.",
      "Hearing and tinnitus-related findings are discussed in clear language.",
      "Management is discussed: counseling and sound strategies, hearing aids where there is hearing loss, tinnitus programming, or Lenire candidacy.",
      "The plan is adjusted to your symptoms, goals, and clinical findings."
    ],
    practicalNotes: [
      "Track when tinnitus is most noticeable before the visit.",
      "Tell the team about sound sensitivity, sleep changes, or sudden onset.",
      "Do not rely on online tinnitus claims without clinical guidance."
    ],
    related: [
      { label: "Tinnitus Management", href: "/how-we-can-help/tinnitus-management" },
      { label: "Lenire for Tinnitus", href: "/how-we-can-help/lenire-for-tinnitus" }
    ]
  },
  "/hearing-protection": {
    title: "What happens during a hearing protection visit",
    intro:
      "Hearing protection works best when it matches the exact listening environment. Musicians, workers, commuters, hunters, athletes, and frequent concertgoers may all need different solutions.",
    appointmentSteps: [
      "The team reviews the exposure, the comfort needs, and what you must still be able to hear through the protection.",
      "Impressions are taken when a custom product is the right answer.",
      "Care, storage, and replacement expectations are covered when the product is fitted."
    ],
    practicalNotes: [
      "Think about whether you need to hear speech, music, alerts, or environmental sound while protected.",
      "Bring existing plugs or earmolds if they are uncomfortable.",
      "Ask about musician plugs, swim molds, sleep plugs, and occupational options if relevant."
    ],
    related: [
      { label: "Hearing Protection", href: "/hearing-protection" },
      { label: "Hearing Testing", href: "/hearing-testing" }
    ]
  },
  "/hearing-aid-repair": {
    title: "What happens during a hearing aid repair visit",
    intro:
      "A repair visit starts by identifying whether the problem is the device, the fit, wax or moisture, a replaceable part, a programming issue, or a change in hearing.",
    appointmentSteps: [
      "The team reviews the symptoms and when they began.",
      "Devices are inspected and cleaned at the bench.",
      "Wax filters, domes, receivers, batteries, and molds are checked and replaced where they have failed.",
      "If more support is needed, the audiologist explains repair, reprogramming, testing, or replacement options."
    ],
    practicalNotes: [
      "Bring all parts, chargers, batteries, molds, and accessories.",
      "Note whether the issue happens in one ear or both.",
      "Call ahead with the device brand and model if the hearing aids were purchased elsewhere."
    ],
    related: [
      { label: "Hearing Aid Tune-Ups", href: "/how-we-can-help/hearing-aid-tune-ups" },
      { label: "Adoption Plan", href: "/how-we-can-help/adoption-plan" }
    ]
  }
};
