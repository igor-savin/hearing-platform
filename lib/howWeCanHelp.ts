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
  whyItMatters: string;
  relatedServices: Array<{ label: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export function helpServicePath(service: HelpService | string) {
  const slug = typeof service === "string" ? service : service.slug;
  return `${howWeCanHelpRootPath}/${slug}`;
}

const photo = (name: string) => `/assets/blog-seed/photo-v2/${name}-photo-v2.webp`;

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
    shortDescription: "A practical starting point for understanding hearing changes, communication needs, and next steps.",
    metaDescription:
      "Learn when to schedule hearing care, what hearing changes can feel like, and how Audiology Associates of Westchester helps patients choose next steps.",
    intro: [
      "Hearing care starts with understanding what has changed in daily life. Some patients notice that conversations sound less clear, others feel more tired after listening, and some first come in because family members are concerned.",
      "Audiology Associates of Westchester helps patients connect those everyday experiences to a clear clinical next step, whether that is a hearing evaluation, hearing aid discussion, tinnitus consultation, device service, or another recommendation."
    ],
    whoWeHelp: [
      "Adults who ask others to repeat themselves more often",
      "Patients who feel conversations are clearer one-on-one than in background noise",
      "Families who want a loved one to understand hearing care options",
      "Hearing aid users who are not getting the clarity or comfort they expected"
    ],
    signs: [
      "Speech sounds muffled or soft even when volume seems loud enough",
      "Restaurants, meetings, cars, and family gatherings feel harder than they used to",
      "Tinnitus, blocked ears, dizziness, or listening fatigue is affecting daily routines",
      "Existing hearing aids need cleaning, adjustment, repair, or a second opinion"
    ],
    appointmentSteps: [
      "The team listens to your main hearing and communication concerns.",
      "Your audiologist recommends the appropriate evaluation or service pathway.",
      "Results and next steps are explained in plain language.",
      "You leave with guidance that fits your hearing needs, lifestyle, and appointment findings."
    ],
    whyItMatters:
      "Hearing care is not only about volume. It is about communication, confidence, safety, family connection, and choosing technology or treatment options that match the way you live.",
    relatedServices: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Tinnitus Therapy", href: "/tinnitus-therapy" }
    ],
    faqs: [
      {
        question: "How do I know which hearing service to schedule first?",
        answer:
          "If you are unsure, call the practice and describe what you are noticing. The team can help determine whether a hearing evaluation, device service appointment, tinnitus consultation, or another visit type is appropriate."
      },
      {
        question: "Can a family member come to the appointment?",
        answer:
          "Yes. Many patients find it helpful to bring someone who understands their everyday listening needs and communication goals."
      },
      {
        question: "Will the website information diagnose my hearing problem?",
        answer:
          "No. Website content is educational. Personalized recommendations require an appointment with an audiologist or appropriate clinical professional."
      }
    ]
  },
  {
    title: "Comprehensive Hearing Assessments",
    menuTitle: "Comprehensive Hearing Assessments",
    slug: "comprehensive-hearing-assessments",
    shortDescription: "Full diagnostic hearing evaluations to understand hearing health and guide personalized care.",
    metaDescription:
      "Schedule a comprehensive hearing assessment in Westchester County with Audiology Associates of Westchester.",
    intro: [
      "A comprehensive hearing assessment helps identify how well you hear different pitches, how clearly you understand speech, and which listening situations may need support.",
      "The evaluation gives your audiologist the foundation for recommending hearing aids, medical follow-up, tinnitus support, hearing protection, or monitoring when appropriate."
    ],
    whoWeHelp: [
      "Adults noticing gradual hearing changes",
      "Patients who struggle in background noise",
      "People with tinnitus, fullness, dizziness, or communication fatigue",
      "Current hearing aid users who need updated testing"
    ],
    signs: [
      "You can hear people talking but miss words",
      "TV or phone volume has increased",
      "You avoid noisy restaurants or group conversations",
      "Family members have raised concerns about your hearing"
    ],
    appointmentSteps: [
      "Your hearing history, symptoms, communication goals, and listening environments are reviewed.",
      "The audiologist performs appropriate diagnostic testing for your concerns.",
      "Your results are explained clearly, including what they mean for daily communication.",
      "The team discusses next steps, which may include hearing aids, monitoring, tinnitus support, or referral if needed."
    ],
    whyItMatters:
      "A hearing test should do more than produce a chart. It should help connect clinical results to real-life communication needs and a plan that makes sense for the patient.",
    relatedServices: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Tinnitus Therapy", href: "/tinnitus-therapy" }
    ],
    faqs: [
      {
        question: "Is a comprehensive hearing assessment the same as a hearing screening?",
        answer:
          "No. A screening is usually a quick pass/fail check. A comprehensive assessment is more detailed and helps guide clinical recommendations."
      },
      {
        question: "How often should adults have their hearing checked?",
        answer:
          "Patients should schedule testing when they notice hearing changes, tinnitus, communication difficulty, or hearing aid concerns. Your audiologist can suggest an appropriate follow-up interval after reviewing your results."
      },
      {
        question: "Will I be pressured to buy hearing aids?",
        answer:
          "The purpose of the evaluation is to understand your hearing and explain appropriate options. Hearing aid recommendations depend on your test results, goals, and clinical needs."
      }
    ]
  },
  {
    title: "Advanced Hearing Aid Technology",
    menuTitle: "Advanced Hearing Aid Technology",
    slug: "advanced-hearing-aid-technology",
    shortDescription: "Current hearing aid options focused on clarity, comfort, connectivity, and real-world listening.",
    metaDescription:
      "Explore advanced hearing aid technology and professional fitting support from Audiology Associates of Westchester.",
    intro: [
      "Modern hearing aids can support clearer speech, easier listening in noise, rechargeable power, phone connectivity, discreet styles, and personalized sound settings.",
      "The best technology choice depends on the hearing test, the environments that matter most, physical handling needs, cosmetic preferences, and follow-up care."
    ],
    whoWeHelp: [
      "Patients comparing hearing aid brands and technology levels",
      "Experienced hearing aid users ready for updated features",
      "People who want better speech clarity in restaurants, meetings, or family events",
      "Patients interested in rechargeable, Bluetooth, invisible, or app-connected options"
    ],
    signs: [
      "Older hearing aids no longer perform well in common listening situations",
      "Phone calls, media streaming, or work communication would be easier with connectivity",
      "You want a more discreet or comfortable hearing aid style",
      "You need help deciding which brand or product family fits your needs"
    ],
    appointmentSteps: [
      "Your audiologist reviews your hearing results and listening priorities.",
      "Different hearing aid styles, brands, and features are explained in patient-friendly terms.",
      "The team discusses fit, handling, connectivity, battery options, and follow-up expectations.",
      "A recommendation is made based on clinical findings and real-world communication goals."
    ],
    whyItMatters:
      "Technology alone does not create better hearing. Professional selection, verification, counseling, and follow-up programming are what help hearing aids work in daily life.",
    relatedServices: [
      { label: "Hearing Aid Brands", href: "/products/hearing-aids-by-brand" },
      { label: "Types of Hearing Aids", href: "/types-of-hearing-aids" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" }
    ],
    faqs: [
      {
        question: "Which hearing aid technology is best?",
        answer:
          "There is no single best device for every patient. The right option depends on your hearing test, communication goals, comfort, handling needs, and follow-up care."
      },
      {
        question: "Can I compare hearing aid brands at the practice?",
        answer:
          "Yes. The team can explain differences among hearing aid brands and product families during a consultation."
      },
      {
        question: "Do advanced hearing aids still need professional fitting?",
        answer:
          "Yes. Even sophisticated devices need proper selection, fitting, verification, orientation, and follow-up adjustments."
      }
    ]
  },
  {
    title: "Hearing Aid Tune-Ups",
    menuTitle: "Hearing Aid Tune-Ups",
    slug: "hearing-aid-tune-ups",
    shortDescription: "Cleaning, troubleshooting, and adjustments to help hearing devices perform at their best.",
    metaDescription:
      "Get hearing aid cleaning, tune-ups, troubleshooting, and adjustment support in Westchester County.",
    intro: [
      "Hearing aids are small medical devices that work in a demanding environment. Moisture, earwax, debris, aging parts, software settings, and changes in hearing can all affect performance.",
      "A tune-up visit helps identify whether the device needs cleaning, replacement parts, reprogramming, repair, or updated hearing testing."
    ],
    whoWeHelp: [
      "Current hearing aid users with weak, distorted, intermittent, or uncomfortable sound",
      "Patients whose hearing aids are whistling or not holding a charge",
      "People who have not had their devices professionally cleaned recently",
      "Patients who need help with domes, filters, receivers, molds, batteries, or apps"
    ],
    signs: [
      "Sound is softer than usual or cutting in and out",
      "The device whistles, feels uncomfortable, or seems blocked",
      "The battery drains quickly or rechargeable devices are not lasting",
      "Phone pairing or app settings are no longer working correctly"
    ],
    appointmentSteps: [
      "The team reviews what has changed with the device or your hearing.",
      "Hearing aids are inspected, cleaned, and checked for common performance issues.",
      "Replaceable parts may be reviewed when appropriate.",
      "Your audiologist can determine whether programming, repair, or updated testing is needed."
    ],
    whyItMatters:
      "Routine device care protects the investment patients have made in better hearing and can prevent small issues from becoming bigger frustrations.",
    relatedServices: [
      { label: "Hearing Aid Repair", href: "/hearing-aid-repair" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Batteries and Accessories", href: "/batteries-and-accessories" }
    ],
    faqs: [
      {
        question: "How often should hearing aids be cleaned professionally?",
        answer:
          "The right interval depends on the device, earwax, moisture, and daily use. Many patients benefit from periodic professional cleaning and performance checks."
      },
      {
        question: "Can the practice service hearing aids bought somewhere else?",
        answer:
          "The practice may be able to help depending on the device, manufacturer, condition, and compatibility. Call to confirm before scheduling."
      },
      {
        question: "Is a tune-up the same as a repair?",
        answer:
          "Not always. A tune-up may involve cleaning, troubleshooting, and adjustment. A repair may be needed if a component has failed or manufacturer service is required."
      }
    ]
  },
  {
    title: "Tinnitus Management",
    menuTitle: "Tinnitus Management",
    slug: "tinnitus-management",
    shortDescription: "Personalized strategies for patients experiencing ringing, buzzing, humming, or sound sensitivity.",
    metaDescription:
      "Learn about tinnitus management and therapy options with Audiology Associates of Westchester.",
    intro: [
      "Tinnitus can sound like ringing, buzzing, humming, hissing, roaring, or another internal sound. For some people it is mild; for others it affects concentration, sleep, stress, and quality of life.",
      "Audiology Associates of Westchester helps patients understand tinnitus, hearing status, sound comfort, and management options that may be appropriate after evaluation."
    ],
    whoWeHelp: [
      "Patients with new or long-standing tinnitus",
      "People whose tinnitus is more noticeable in quiet settings",
      "Hearing aid users who need tinnitus-related programming support",
      "Patients seeking education, counseling, sound strategies, or technology options"
    ],
    signs: [
      "Ringing, buzzing, hissing, or humming is distracting or stressful",
      "Tinnitus affects sleep, concentration, or relaxation",
      "Sound sensitivity makes normal environments uncomfortable",
      "Hearing changes and tinnitus are occurring together"
    ],
    appointmentSteps: [
      "Your audiologist reviews your tinnitus history, hearing concerns, and daily impact.",
      "Appropriate hearing and tinnitus-related testing is discussed or completed.",
      "The team explains management options, which may include counseling, sound strategies, hearing aids, or other treatment pathways.",
      "Recommendations are personalized to your results and symptoms."
    ],
    whyItMatters:
      "Tinnitus care should be grounded in education and realistic strategies. The goal is to reduce the burden of tinnitus and help patients understand their options.",
    relatedServices: [
      { label: "Tinnitus Therapy", href: "/tinnitus-therapy" },
      { label: "Lenire for Tinnitus", href: "/how-we-can-help/lenire-for-tinnitus" },
      { label: "Hearing Testing", href: "/hearing-testing" }
    ],
    faqs: [
      {
        question: "Can tinnitus be evaluated by an audiologist?",
        answer:
          "Yes. Audiologists often evaluate hearing and tinnitus-related concerns and can explain management options based on the appointment findings."
      },
      {
        question: "Does tinnitus always mean hearing loss?",
        answer:
          "Not always, but tinnitus and hearing changes commonly occur together. A hearing evaluation can clarify what is happening."
      },
      {
        question: "Will tinnitus treatment make the sound disappear?",
        answer:
          "Outcomes vary. Tinnitus care focuses on education, management strategies, sound support, and personalized recommendations rather than guaranteed results."
      }
    ]
  },
  {
    title: "Cochlear Implant Support",
    menuTitle: "Cochlear Implants",
    slug: "cochlear-implants",
    shortDescription: "Support for patients who may need cochlear implant candidacy guidance, programming, or follow-up care.",
    metaDescription:
      "Learn about cochlear implant support, candidacy guidance, activation, and programming with Audiology Associates of Westchester.",
    intro: [
      "Some patients with significant hearing loss do not receive enough benefit from traditional hearing aids. Cochlear implant evaluation and support can be part of the conversation when hearing aids are not meeting communication needs.",
      "The practice can help patients understand candidacy questions, hearing aid benefit, programming needs, and appropriate next steps based on clinical findings."
    ],
    whoWeHelp: [
      "Patients with hearing aids who still struggle to understand speech",
      "Adults exploring whether cochlear implant evaluation may be appropriate",
      "Patients needing cochlear implant activation, mapping, or programming support when available",
      "Families trying to understand the difference between hearing aids and cochlear implants"
    ],
    signs: [
      "Speech remains unclear even with appropriately fitted hearing aids",
      "Phone conversations or group settings are still very difficult",
      "Hearing aid benefit has declined or no longer meets daily needs",
      "You were advised to ask about cochlear implant candidacy"
    ],
    appointmentSteps: [
      "The audiologist reviews hearing history, hearing aid use, and communication needs.",
      "Testing and device information are used to discuss whether additional evaluation may be appropriate.",
      "If relevant, cochlear implant programming or follow-up needs are reviewed.",
      "The team explains next steps and any needed coordination."
    ],
    whyItMatters:
      "Cochlear implant decisions require careful evaluation and counseling. Patients need clear guidance about candidacy, expectations, follow-up, and how implant technology differs from hearing aids.",
    relatedServices: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Meet the Team", href: "/meet-the-team" }
    ],
    faqs: [
      {
        question: "Are cochlear implants the same as hearing aids?",
        answer:
          "No. Hearing aids amplify sound through the ear, while cochlear implants are surgically implanted devices that stimulate the auditory nerve. Candidacy requires clinical evaluation."
      },
      {
        question: "Can an audiologist help decide whether to consider a cochlear implant?",
        answer:
          "An audiologist can evaluate hearing, hearing aid benefit, and communication needs, then discuss whether cochlear implant evaluation or support may be appropriate."
      },
      {
        question: "Does everyone with hearing loss need a cochlear implant?",
        answer:
          "No. Many patients benefit from hearing aids or other support. Cochlear implant candidacy depends on hearing levels, speech understanding, medical factors, and individual goals."
      }
    ]
  },
  {
    title: "Earwax Removal",
    menuTitle: "Earwax Removal",
    slug: "earwax-removal",
    shortDescription: "Cerumen management support when earwax affects hearing, comfort, testing, or hearing aid performance.",
    metaDescription:
      "Schedule earwax removal and cerumen management support with Audiology Associates of Westchester when clinically appropriate.",
    intro: [
      "Earwax can block sound, create fullness, interfere with hearing testing, and prevent hearing aids from working properly. Some patients notice a sudden change in hearing when wax blocks the ear canal or a device component.",
      "Audiology Associates of Westchester can evaluate earwax-related concerns and provide or recommend appropriate cerumen management when clinically appropriate."
    ],
    whoWeHelp: [
      "Patients with ear fullness or muffled hearing that may be related to wax",
      "Hearing aid users whose devices clog frequently",
      "Patients who need wax addressed before accurate hearing testing",
      "People who should avoid unsafe at-home ear cleaning methods"
    ],
    signs: [
      "The ear feels blocked or hearing seems suddenly reduced",
      "Hearing aids sound weak because filters or receivers clog with wax",
      "There is feedback, discomfort, or poor physical fit related to wax buildup",
      "A prior appointment could not be completed because the canal was blocked"
    ],
    appointmentSteps: [
      "The ear canal is inspected as part of the appointment.",
      "The team determines whether wax may be affecting hearing, testing, or device performance.",
      "Cerumen management is discussed or provided when appropriate for the patient.",
      "If the situation requires another type of medical care, the patient is directed accordingly."
    ],
    whyItMatters:
      "Safe earwax care protects the ear canal and helps hearing tests and hearing aids work as intended. Patients should avoid inserting cotton swabs or tools deep into the ear canal.",
    relatedServices: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Repair", href: "/hearing-aid-repair" },
      { label: "Hearing Aid Tune-Ups", href: "/how-we-can-help/hearing-aid-tune-ups" }
    ],
    faqs: [
      {
        question: "Can earwax make hearing aids stop working?",
        answer:
          "Yes. Wax can clog filters, receivers, earmolds, or domes and make hearing aids sound weak or distorted."
      },
      {
        question: "Is earwax removal always appropriate at an audiology appointment?",
        answer:
          "Not always. The team must inspect the ear and determine whether cerumen management is appropriate or whether another medical referral is needed."
      },
      {
        question: "Should I use cotton swabs to remove wax?",
        answer:
          "Patients should avoid pushing cotton swabs or tools into the ear canal because wax can be pushed deeper or the ear can be irritated."
      }
    ]
  },
  {
    title: "Cognivue Cognitive Screening",
    menuTitle: "Cognivue Cognitive Screening",
    slug: "cognivue-cognitive-screening",
    shortDescription: "A digital screening option that helps connect hearing care conversations with cognitive wellness.",
    metaDescription:
      "Learn about Cognivue cognitive screening and how hearing and cognitive wellness conversations can be part of audiology care.",
    intro: [
      "Hearing and cognitive wellness are often discussed together because listening requires attention, memory, and processing effort. A cognitive screening can provide additional context during hearing care conversations.",
      "Cognivue is a digital screening tool. It is not a diagnosis, and results should be discussed with appropriate clinical professionals."
    ],
    whoWeHelp: [
      "Adults who want a broader view of hearing, listening effort, and cognitive wellness",
      "Patients who feel listening takes more concentration than it used to",
      "Families who want structured information to discuss with healthcare providers",
      "Patients whose hearing care plan may benefit from additional context"
    ],
    signs: [
      "Listening feels mentally exhausting",
      "Hearing concerns overlap with attention, memory, or processing concerns",
      "Family members want a more complete wellness conversation",
      "A provider suggested discussing hearing and cognitive screening"
    ],
    appointmentSteps: [
      "The team explains what the screening does and does not measure.",
      "The screening is completed when appropriate and available.",
      "Results are reviewed as screening information, not a diagnosis.",
      "Patients are encouraged to discuss medical or cognitive concerns with their physician or appropriate provider."
    ],
    whyItMatters:
      "A screening can help organize a conversation, but it should never replace medical diagnosis. Hearing care recommendations still depend on hearing test results and patient needs.",
    relatedServices: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Your Hearing", href: "/how-we-can-help/your-hearing" },
      { label: "Meet the Team", href: "/meet-the-team" }
    ],
    faqs: [
      {
        question: "Is Cognivue a diagnosis?",
        answer:
          "No. Cognivue is a screening tool. Patients should discuss medical, cognitive, or diagnostic concerns with the appropriate healthcare provider."
      },
      {
        question: "Why discuss cognition at a hearing care appointment?",
        answer:
          "Listening uses attention and processing. A broader conversation can help patients understand listening effort and coordinate care when needed."
      },
      {
        question: "Can hearing aids treat cognitive concerns?",
        answer:
          "Hearing aids are prescribed for hearing needs. They do not diagnose or treat cognitive conditions, but better access to sound may support communication and listening participation for appropriate patients."
      }
    ]
  },
  {
    title: "Adoption Plan",
    menuTitle: "Adoption Plan",
    slug: "adoption-plan",
    shortDescription: "Care and support for hearing aids purchased elsewhere, when the devices can be serviced by the practice.",
    metaDescription:
      "Audiology Associates of Westchester can discuss support for hearing aids purchased elsewhere through an adoption plan when appropriate.",
    intro: [
      "Some patients move to Westchester, change providers, inherit devices, buy hearing aids elsewhere, or need local support for technology they already own.",
      "An adoption plan gives patients a path to professional hearing aid care when the devices, manufacturer, condition, and clinical needs can be supported by the practice."
    ],
    whoWeHelp: [
      "Patients who purchased hearing aids at another clinic",
      "People who moved and need a local audiology team",
      "Hearing aid users who need cleaning, programming, troubleshooting, or counseling",
      "Patients unsure whether their current devices still match their hearing needs"
    ],
    signs: [
      "You like your hearing aids but need local follow-up care",
      "Your devices are working but settings no longer feel right",
      "You need help with cleaning, parts, apps, or connectivity",
      "You want an audiologist to review whether your current devices are still appropriate"
    ],
    appointmentSteps: [
      "The team confirms the device brand, model, age, and serviceability when possible.",
      "Your hearing history and current concerns are reviewed.",
      "The devices are inspected and care options are discussed.",
      "The audiologist explains what the practice can support and whether testing, programming, repair, or replacement should be considered."
    ],
    whyItMatters:
      "Hearing aid ownership works best with ongoing care. Patients deserve clear guidance even when their devices came from another source.",
    relatedServices: [
      { label: "Hearing Aid Repair", href: "/hearing-aid-repair" },
      { label: "Hearing Aid Tune-Ups", href: "/how-we-can-help/hearing-aid-tune-ups" },
      { label: "Advanced Hearing Aid Technology", href: "/how-we-can-help/advanced-hearing-aid-technology" }
    ],
    faqs: [
      {
        question: "Can Audiology Associates of Westchester program hearing aids bought elsewhere?",
        answer:
          "Possibly. It depends on the brand, model, software access, device condition, and clinical needs. Patients should call with device details before scheduling."
      },
      {
        question: "What if my current hearing aids cannot be serviced?",
        answer:
          "The team can explain what options are available, which may include manufacturer repair, replacement parts, updated testing, or discussion of newer technology."
      },
      {
        question: "Do adoption plans include warranties or pricing?",
        answer:
          "Patients should contact the practice directly for current availability, policies, pricing, and warranty details. The website should not be used as a quote."
      }
    ]
  },
  {
    title: "Lenire for Tinnitus",
    menuTitle: "Lenire for Tinnitus",
    slug: "lenire-for-tinnitus",
    shortDescription: "A tinnitus treatment pathway that may be discussed for appropriate candidates after evaluation.",
    metaDescription:
      "Learn about Lenire for tinnitus and how Audiology Associates of Westchester discusses candidacy and tinnitus care options.",
    intro: [
      "Lenire is a tinnitus treatment option that may be considered for appropriate candidates as part of a tinnitus management plan.",
      "Because tinnitus experiences vary, patients need an individualized evaluation before determining whether Lenire, hearing aids, sound strategies, counseling, or another pathway is appropriate."
    ],
    whoWeHelp: [
      "Patients whose tinnitus affects focus, sleep, stress, or quality of life",
      "People looking for a structured tinnitus management conversation",
      "Patients who want to understand whether Lenire may be an option",
      "Individuals who need realistic expectations and professional guidance"
    ],
    signs: [
      "Tinnitus is persistent or distressing",
      "You have tried general strategies without enough relief",
      "Tinnitus is paired with hearing difficulty or sound sensitivity",
      "You want to discuss candidacy for a specific tinnitus treatment pathway"
    ],
    appointmentSteps: [
      "The audiologist reviews tinnitus history, hearing status, goals, and daily impact.",
      "Tinnitus-related evaluation and counseling are discussed.",
      "Lenire candidacy and availability are reviewed when appropriate.",
      "The team explains realistic expectations and next steps."
    ],
    whyItMatters:
      "Tinnitus treatment should be individualized and evidence-informed. Patients should not have to guess which products or therapies apply to their specific symptoms.",
    relatedServices: [
      { label: "Tinnitus Therapy", href: "/tinnitus-therapy" },
      { label: "Tinnitus Management", href: "/how-we-can-help/tinnitus-management" },
      { label: "Hearing Testing", href: "/hearing-testing" }
    ],
    faqs: [
      {
        question: "Is Lenire right for every tinnitus patient?",
        answer:
          "No. Candidacy depends on the patient's tinnitus profile, hearing status, medical history, goals, and clinical evaluation."
      },
      {
        question: "Can I schedule directly for Lenire?",
        answer:
          "Patients should contact the practice to confirm availability, candidacy steps, and whether a tinnitus evaluation should be scheduled first."
      },
      {
        question: "Does Lenire guarantee tinnitus relief?",
        answer:
          "No treatment should be presented as a guarantee. The audiology team can explain expectations, candidacy, and alternatives during an appointment."
      }
    ]
  },
  {
    title: "Executive Assistance",
    menuTitle: "Executive Assistance",
    slug: "executive-assistance",
    shortDescription: "Hearing care for professionals who rely on clear communication in meetings, calls, travel, and public settings.",
    metaDescription:
      "Learn about professional and executive hearing care support from Audiology Associates of Westchester.",
    intro: [
      "For many professionals, hearing difficulty first shows up in meetings, conference rooms, presentations, restaurants, travel, or phone calls. The issue may not be loudness; it may be clarity and listening effort.",
      "Executive assistance focuses on communication goals, discreet technology discussions, device optimization, and strategies that support demanding professional listening environments."
    ],
    whoWeHelp: [
      "Professionals who need clarity in meetings, calls, and presentations",
      "Patients who want discreet hearing technology options",
      "Hearing aid users who need workplace-specific programming support",
      "Executives, attorneys, physicians, educators, consultants, and frequent travelers"
    ],
    signs: [
      "You miss details in meetings or group conversations",
      "Video calls, phones, and conference rooms are harder than expected",
      "You leave workdays feeling drained from listening effort",
      "You want technology that fits professional and personal settings"
    ],
    appointmentSteps: [
      "Your audiologist reviews the communication environments that matter most.",
      "Hearing results, technology options, and practical listening goals are discussed.",
      "Programming and accessory options may be considered for work-specific challenges.",
      "Follow-up care helps refine settings after real-world use."
    ],
    whyItMatters:
      "Professional communication depends on confidence and precision. Hearing care should account for the specific environments where the patient needs to perform.",
    relatedServices: [
      { label: "Advanced Hearing Aid Technology", href: "/how-we-can-help/advanced-hearing-aid-technology" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Hearing Protection", href: "/hearing-protection" }
    ],
    faqs: [
      {
        question: "Can hearing aids be programmed for work settings?",
        answer:
          "Many modern hearing aids can be adjusted for different listening environments. Your audiologist can discuss realistic options based on the device and your hearing needs."
      },
      {
        question: "Are there discreet hearing aid options?",
        answer:
          "Yes. Discreet options may include small receiver-in-canal devices, custom styles, or invisible extended-wear options for appropriate candidates."
      },
      {
        question: "Can accessories help with meetings or phone calls?",
        answer:
          "In some cases, phone connectivity, remote microphones, or app settings can help. Recommendations depend on device compatibility and communication goals."
      }
    ]
  },
  {
    title: "Hearing Protection",
    menuTitle: "Hearing Protection",
    slug: "hearing-protection",
    shortDescription: "Custom protection for work, music, recreation, travel, and everyday noise exposure.",
    metaDescription:
      "Learn about custom hearing protection and ear protection options from Audiology Associates of Westchester.",
    intro: [
      "Noise exposure can affect hearing gradually, and many loud environments are part of normal life: concerts, construction, power tools, sports, commuting, music, and busy public spaces.",
      "Custom hearing protection can be selected for comfort, fit, communication needs, and the specific noise environment."
    ],
    whoWeHelp: [
      "Musicians and concertgoers",
      "Workers exposed to occupational noise",
      "People using power tools, motorcycles, or recreational equipment",
      "Patients who want custom plugs, molds, or sound-sensitive support"
    ],
    signs: [
      "Your ears ring after loud activities",
      "Disposable earplugs feel uncomfortable or do not fit well",
      "You need protection without overly muffling speech or music",
      "You want custom earmolds or musician-style protection"
    ],
    appointmentSteps: [
      "The team reviews the noise environments where protection is needed.",
      "Ear anatomy, fit needs, and product options are discussed.",
      "Impressions or measurements may be taken when custom products are appropriate.",
      "Care instructions and follow-up needs are reviewed."
    ],
    whyItMatters:
      "The best hearing protection is protection patients will actually wear. Comfort, fit, and the right attenuation level matter.",
    relatedServices: [
      { label: "Hearing Protection", href: "/hearing-protection" },
      { label: "Batteries and Accessories", href: "/batteries-and-accessories" },
      { label: "Hearing Testing", href: "/hearing-testing" }
    ],
    faqs: [
      {
        question: "Are custom earplugs better than disposable earplugs?",
        answer:
          "Custom plugs can improve comfort, fit, and consistency for many patients, but the right choice depends on the activity and protection needs."
      },
      {
        question: "Can musicians protect hearing without ruining sound quality?",
        answer:
          "Musician-style protection may reduce loudness while preserving more natural sound balance than standard foam plugs for appropriate users."
      },
      {
        question: "Should I schedule testing if I have noise exposure?",
        answer:
          "A hearing evaluation can establish a baseline and help guide prevention and protection strategies."
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
      "A hearing test should connect clinical results to daily listening needs, not just produce a chart. The appointment helps identify whether hearing loss, tinnitus, wax, device issues, or another concern may be affecting communication.",
    appointmentSteps: [
      "The audiologist reviews your hearing history, symptoms, and communication goals.",
      "Testing is selected based on your concerns and what needs to be measured.",
      "Results are explained in plain language, including how they may affect speech clarity.",
      "Next steps may include monitoring, hearing aids, tinnitus support, medical referral, or additional services when appropriate."
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
      "A professional fitting turns hearing aid technology into a personalized hearing plan. The process should account for your test results, listening goals, ear shape, comfort, handling needs, and follow-up care.",
    appointmentSteps: [
      "Your audiologist confirms the selected devices and physical fit.",
      "The hearing aids are programmed for your hearing profile.",
      "Verification, orientation, and listening goals are reviewed when appropriate.",
      "Follow-up visits help refine comfort, clarity, and real-world performance."
    ],
    practicalNotes: [
      "Make a list of the situations where you most want improvement.",
      "Ask about phone compatibility, rechargeable options, care steps, and accessories.",
      "Plan for follow-up adjustments after real-world listening."
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
      "Management options may include education, sound strategies, hearing aids, Lenire candidacy discussion, or other recommendations.",
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
      "The team reviews noise exposure, comfort needs, and communication requirements.",
      "Protection options are matched to the activity and desired sound reduction.",
      "Custom impressions or fittings may be completed when appropriate.",
      "Care instructions and replacement expectations are reviewed."
    ],
    practicalNotes: [
      "Think about whether you need to hear speech, music, alerts, or environmental sound while protected.",
      "Bring existing plugs or earmolds if they are uncomfortable.",
      "Ask about musician plugs, swim molds, sleep plugs, and occupational options if relevant."
    ],
    related: [
      { label: "Hearing Protection", href: "/how-we-can-help/hearing-protection" },
      { label: "Hearing Testing", href: "/hearing-testing" }
    ]
  },
  "/hearing-aid-repair": {
    title: "What happens during a hearing aid repair visit",
    intro:
      "A repair visit starts by identifying whether the problem is the device, the fit, wax or moisture, a replaceable part, a programming issue, or a change in hearing.",
    appointmentSteps: [
      "The team reviews the symptoms and when they began.",
      "Devices are inspected and cleaned when appropriate.",
      "Common parts such as filters, domes, receivers, batteries, or molds may be checked.",
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
