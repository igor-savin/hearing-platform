import type { Location, SitePage } from "@/lib/site";

const baseUrl = "https://www.audiologyassociates.org";
export const primaryPhone = "(914) 949-0034";
export const primaryPhoneHref = "tel:+19149490034";

export type ServiceDecisionGuide = {
  bestFor: string[];
  notBestFor: string[];
  appointmentIncludes: string[];
  questionsToAsk: string[];
};

export type LocationPlanningGuide = {
  parking: string;
  bestFor: string[];
  nearbyLandmarks: string[];
  nearbyCommunities: string[];
};

export const appointmentConversionLinks = [
  { label: "Schedule a hearing evaluation", href: "/hearing-testing" },
  { label: "Find the nearest office", href: "/contact-us" },
  { label: "Compare hearing aid options", href: "/hearing-aid-fitting" }
];

export const appointmentPrinciples = [
  "A complete case history and a clear explanation of symptoms.",
  "Ear inspection and testing recommendations based on what the patient is noticing.",
  "Plain-language next steps, including whether hearing aids, tinnitus care, repair, monitoring, or referral may be appropriate.",
  "Follow-up support so hearing care can be adjusted around real listening situations."
];

export const serviceDecisionGuides: Record<string, ServiceDecisionGuide> = {
  "/hearing-testing": {
    bestFor: [
      "You can hear people talking but miss words, especially in groups or noise.",
      "Family members notice the TV, phone, or repeated questions before you do.",
      "You have tinnitus, fullness, dizziness, or a meaningful change in hearing."
    ],
    notBestFor: [
      "Sudden one-sided hearing loss or severe dizziness that needs urgent medical care.",
      "A device-only issue when your hearing aid simply needs cleaning or repair."
    ],
    appointmentIncludes: [
      "Review of hearing history, communication goals, symptoms, and listening environments.",
      "Diagnostic testing selected for the concern, with results explained in plain language.",
      "Recommendations for hearing aids, tinnitus care, monitoring, or referral when needed."
    ],
    questionsToAsk: [
      "What do my results mean for speech clarity in noise?",
      "Do I need hearing aids now, monitoring, or medical follow-up?",
      "Which situations should I track before the next appointment?"
    ]
  },
  "/hearing-aid-fitting": {
    bestFor: [
      "You have hearing test results and want a professional device recommendation.",
      "You need help comparing brands, styles, Bluetooth, rechargeable options, or invisible devices.",
      "Your current hearing aids are not matching your everyday listening needs."
    ],
    notBestFor: [
      "You have not had a recent hearing evaluation.",
      "You only need a quick cleaning, receiver, dome, wax filter, or battery check."
    ],
    appointmentIncludes: [
      "Review of hearing results, dexterity, lifestyle, phone needs, and cosmetic preferences.",
      "Device selection based on clinical findings and real listening priorities.",
      "Orientation, real-ear verification, and follow-up planning."
    ],
    questionsToAsk: [
      "How will this recommendation help in restaurants, meetings, cars, or family gatherings?",
      "What follow-up adjustments are included?",
      "How will comfort, retention, and phone connectivity be handled?"
    ]
  },
  "/tinnitus-therapy": {
    bestFor: [
      "Ringing, buzzing, hissing, or sound sensitivity is affecting focus, sleep, or mood.",
      "Tinnitus is paired with hearing difficulty or listening fatigue.",
      "You want practical strategies instead of guessing with apps or masking sounds alone."
    ],
    notBestFor: [
      "Pulsatile tinnitus, sudden hearing loss, severe dizziness, or neurological symptoms that need prompt medical guidance.",
      "A one-time blocked-ear sensation that first needs ear inspection or medical assessment."
    ],
    appointmentIncludes: [
      "Discussion of tinnitus history, triggers, hearing changes, and daily impact.",
      "Testing or recommendations selected around the tinnitus pattern.",
      "Education, sound strategies, hearing technology options, and referral guidance when appropriate."
    ],
    questionsToAsk: [
      "Are my tinnitus symptoms connected to hearing loss?",
      "Which symptoms should prompt medical follow-up?",
      "What can I try between visits to reduce the impact?"
    ]
  },
  "/hearing-protection": {
    bestFor: [
      "You work, perform, exercise, hunt, travel, or socialize around loud sound.",
      "You want custom protection that is more comfortable and consistent than disposable plugs.",
      "You already have tinnitus or hearing changes and want to reduce further risk."
    ],
    notBestFor: [
      "Ear pain, drainage, sudden hearing change, or infection symptoms.",
      "A hearing aid problem that needs device service rather than noise protection."
    ],
    appointmentIncludes: [
      "Discussion of sound exposure, fit needs, communication needs, and protection goals.",
      "Recommendations for musician plugs, custom molds, sleep plugs, swim plugs, or other options.",
      "Guidance on when protection helps and when it can interfere with communication or safety."
    ],
    questionsToAsk: [
      "Which filter level fits my everyday noise exposure?",
      "Can I still communicate while wearing this protection?",
      "How should I clean and store custom molds?"
    ]
  },
  "/hearing-aid-repair": {
    bestFor: [
      "Your hearing aid sounds weak, distorted, intermittent, or unusually noisy.",
      "The device whistles, will not charge, drains batteries, or will not connect to your phone.",
      "You need help with domes, wax filters, receivers, earmolds, or cleaning."
    ],
    notBestFor: [
      "A major change in hearing that may need updated testing.",
      "Pain, drainage, or medical symptoms that should be evaluated clinically."
    ],
    appointmentIncludes: [
      "Inspection, cleaning, troubleshooting, and review of the reported problem.",
      "Assessment of whether parts, programming, repair, or updated testing may be needed.",
      "Practical advice for preventing the same issue when possible."
    ],
    questionsToAsk: [
      "Is this a device problem or a change in my hearing?",
      "What parts should I replace routinely?",
      "When is repair no longer the best investment?"
    ]
  }
};

export const locationPlanningGuides: Record<string, LocationPlanningGuide> = {
  "/harrison-ny": {
    parking: "Plan for a medical-office visit at 550 Mamaroneck Ave, Suite 407. Call before the visit if elevator access, mobility needs, or arrival instructions matter for the appointment.",
    bestFor: ["Southern Westchester patients", "Rye and Greenwich-area patients", "Hearing aid fitting, testing, tinnitus, and follow-up care"],
    nearbyLandmarks: ["Mamaroneck Avenue corridor", "Rye", "Greenwich", "White Plains"],
    nearbyCommunities: ["Harrison", "Rye", "Greenwich", "Purchase", "Mamaroneck", "White Plains"]
  },
  "/Somers-NY": {
    parking: "The Somers office at 325 NY 100 is useful for northern Westchester and nearby Putnam County patients. Call ahead to confirm the best appointment time because Friday hours differ from the rest of the week.",
    bestFor: ["Northern Westchester patients", "Mahopac and southern Putnam patients", "Testing, hearing aid care, repair, and tinnitus support"],
    nearbyLandmarks: ["NY 100", "Somers", "Mahopac", "Mt. Kisco"],
    nearbyCommunities: ["Somers", "Mahopac", "Yorktown Heights", "Katonah", "Bedford", "Mt. Kisco"]
  },
  "/White-Plains-NY": {
    parking: "White Plains is a service area, not a physical office. The nearest practice location is the Harrison office at 550 Mamaroneck Ave, Suite 407 (4th floor).",
    bestFor: ["White Plains and central Westchester patients", "Planning a visit to the Harrison office", "Diagnostic hearing testing and hearing aid care"],
    nearbyLandmarks: ["White Plains", "Mamaroneck Avenue corridor", "Purchase", "Harrison"],
    nearbyCommunities: ["White Plains", "Scarsdale", "Hartsdale", "Harrison", "Rye", "New Rochelle"]
  },
  "/Scarsdale-NY": {
    parking: "Scarsdale is a service area, not a physical office. The nearest practice location is the Harrison office at 550 Mamaroneck Ave, Suite 407 (4th floor).",
    bestFor: ["Scarsdale-area patients", "Planning a visit to the Harrison office", "Hearing testing, hearing aid fitting, and follow-up care"],
    nearbyLandmarks: ["Scarsdale", "White Plains", "Hartsdale", "Harrison"],
    nearbyCommunities: ["Scarsdale", "Hartsdale", "White Plains", "New Rochelle", "Eastchester", "Harrison"]
  }
};

export function planningGuideForLocation(location: Location | null | undefined) {
  if (!location) return null;
  return locationPlanningGuides[location.path] || null;
}

export function serviceGuideForPage(page: SitePage) {
  return serviceDecisionGuides[page.path] || null;
}

export function nearestOfficeText(location: Location) {
  if (location.type === "office") return `${location.city}, ${location.state} office`;
  if (location.path === "/greenwich-ct" || location.path === "/rye-ny") return "Harrison, NY office";
  if (location.path === "/mt-kisco-ny") return "Somers, NY office";
  if (location.path === "/White-Plains-NY" || location.path === "/Scarsdale-NY") return "Harrison, NY office";
  return "nearest Westchester office";
}

export const comparisonPages: SitePage[] = [
  {
    path: "/audiologist-vs-ent-for-hearing-loss",
    url: `${baseUrl}/audiologist-vs-ent-for-hearing-loss`,
    title: "Audiologist vs ENT for Hearing Loss",
    metaTitle: "Audiologist vs ENT for Hearing Loss | Audiology Associates",
    metaDescription:
      "Learn when to schedule with an audiologist, when ENT medical care may be needed, and how Westchester patients can choose the right first step.",
    h1: "Audiologist vs ENT: Who Should You See for Hearing Loss?",
    type: "blog-post",
    lastModified: "2026-07-14",
    canonical: `${baseUrl}/audiologist-vs-ent-for-hearing-loss`,
    images: [],
    sections: ["When an audiologist helps", "When ENT care matters", "How to choose"],
    body: [
      "An audiologist is often the right first step for gradual hearing difficulty, speech clarity problems, tinnitus paired with hearing concerns, hearing aid questions, hearing protection, or device follow-up.",
      "An ENT or urgent medical setting may be needed when symptoms suggest a medical ear condition. Sudden hearing loss, severe spinning dizziness, facial weakness, drainage, significant pain, injury, or tinnitus that sounds like a heartbeat should not wait for a routine hearing-aid appointment.",
      "Many patients benefit from both types of care. An audiologist can document hearing results, explain what the pattern means for communication, and identify when medical referral is appropriate.",
      "If you are unsure where to start, describe the symptom, timing, and severity when you call. The team can help determine whether a hearing evaluation, device visit, tinnitus consultation, or medical referral is the safer next step."
    ],
    faqs: [
      {
        question: "Should I see an audiologist or ENT first for gradual hearing loss?",
        answer: "For gradual communication difficulty, an audiologist is often an appropriate first step because diagnostic testing can clarify the hearing pattern and next options."
      },
      {
        question: "What hearing symptoms should not wait?",
        answer: "Sudden hearing loss, severe dizziness, facial weakness, injury, drainage, severe pain, or heartbeat-like tinnitus should receive prompt medical guidance."
      }
    ],
    related: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Audiology Red Flags", href: "/what-are-the-red-flags-for-audiology-referrals" },
      { label: "Tinnitus Therapy", href: "/tinnitus-therapy" }
    ]
  },
  {
    path: "/hearing-screening-vs-hearing-test",
    url: `${baseUrl}/hearing-screening-vs-hearing-test`,
    title: "Hearing Screening vs Hearing Test",
    metaTitle: "Hearing Screening vs Hearing Test | Audiology Associates",
    metaDescription:
      "Compare quick hearing screenings with comprehensive hearing evaluations and learn which appointment is better for real communication concerns.",
    h1: "Hearing Screening vs Hearing Test: What Is the Difference?",
    type: "blog-post",
    lastModified: "2026-07-14",
    canonical: `${baseUrl}/hearing-screening-vs-hearing-test`,
    images: [],
    sections: ["Screening", "Comprehensive testing", "Choosing a visit"],
    body: [
      "A hearing screening is usually a quick pass-or-refer check. It can be useful for flagging whether more testing may be needed, but it does not always explain speech clarity, ear-specific patterns, or everyday listening difficulty.",
      "A comprehensive hearing evaluation is more detailed. It may include case history, ear inspection, tone testing, speech testing, middle-ear checks when appropriate, and a review of results in the context of daily communication.",
      "If you are comparing appointments, ask what is included. Price or speed alone does not tell you whether the visit will answer the question you actually have.",
      "Patients who notice speech difficulty, tinnitus, one-sided symptoms, dizziness, or hearing aid problems usually need more than a quick screening."
    ],
    faqs: [
      {
        question: "Is a free hearing screening enough?",
        answer: "Sometimes it is a useful starting point, but ongoing symptoms or communication difficulty usually deserve a more complete hearing evaluation."
      },
      {
        question: "What should I ask before scheduling a hearing test?",
        answer: "Ask whether the appointment includes case history, ear inspection, speech testing, explanation of results, and recommendations based on your goals."
      }
    ],
    related: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Costco Hearing Test Cost", href: "/how-much-does-costco-charge-for-a-hearing-test" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" }
    ]
  },
  {
    path: "/prescription-vs-otc-hearing-aids",
    url: `${baseUrl}/prescription-vs-otc-hearing-aids`,
    title: "Prescription vs OTC Hearing Aids",
    metaTitle: "Prescription vs OTC Hearing Aids | Audiology Associates of Westchester",
    metaDescription:
      "Understand the difference between OTC and professionally fit prescription hearing aids, including when testing and follow-up care matter most.",
    h1: "Prescription vs OTC Hearing Aids: How to Compare",
    type: "blog-post",
    lastModified: "2026-07-14",
    canonical: `${baseUrl}/prescription-vs-otc-hearing-aids`,
    images: [],
    sections: ["OTC hearing aids", "Prescription hearing aids", "Professional fitting"],
    body: [
      "OTC hearing aids can be appropriate for some adults with perceived mild-to-moderate hearing difficulty who want a self-directed option. They are not designed to diagnose hearing loss or rule out medical concerns.",
      "Prescription hearing aids are selected and fit after an evaluation. The process can account for ear-specific hearing results, speech understanding, tinnitus, dexterity, comfort, ear anatomy, technology needs, and follow-up programming.",
      "Professional care matters when hearing is uneven, symptoms are sudden, speech clarity is poor, tinnitus is significant, dizziness is present, or previous devices did not work well.",
      "The strongest comparison is not just device cost. It is device plus testing, fitting, verification, counseling, support, repair, and adjustments over time."
    ],
    faqs: [
      {
        question: "Are OTC hearing aids safe for everyone?",
        answer: "No. Sudden, one-sided, painful, or medically concerning symptoms should be evaluated rather than self-treated with an OTC device."
      },
      {
        question: "Why choose professionally fit hearing aids?",
        answer: "Professional fitting can match technology and programming to test results, ear anatomy, comfort, communication goals, and follow-up needs."
      }
    ],
    related: [
      { label: "Latest: Samsung Galaxy Buds Are Becoming Hearing Aids", href: "/samsung-galaxy-buds-hearing-aid-feature" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Types of Hearing Aids", href: "/types-of-hearing-aids" },
      { label: "Hearing Testing", href: "/hearing-testing" }
    ]
  }
];

export function trackingHref(kind: string, pagePath: string) {
  const id = pagePath.replace(/^\//, "").replace(/\//g, "-") || "home";
  return `${kind}-${id}`;
}
