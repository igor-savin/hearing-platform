import type { Location, SitePage } from "@/lib/site";
import { areaCities, areaCounties, cityForPath, cityLinkPath, countyForPath, countyPath } from "@/lib/serviceAreas";
import { pressFeaturePath, pressFeatures } from "@/lib/press";
import { providerForPath } from "@/lib/team";

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

export type NextStepsEntry = { heading: string; links: { label: string; href: string }[] };

// Data-driven "next steps" block for page families where one hand-written entry
// per page does not scale: the generated town pages, the county pages and the
// provider pages. PageCrossLinks asks for a hand-written pageCrossLinks entry
// first and only calls this when there is none, so a hand-written entry always
// wins. It adds only links the template does not already render (the five core
// services and the nearest office are already on the town pages) and it makes no
// claim about an office beyond lib/serviceAreas.ts: every href is a site-wide page.
type NextStepLink = { label: string; href: string };

// Town blocks must not be the same block with a new town name. Each town gets
// three fixed links (with the town and office names in the text) and two links
// picked from rotating sets. The position of the
// town in the list of generated towns (lib/serviceAreas.ts) decides which item it
// takes. The nearest office (nearestOffice in the same file) sets the heading and
// the office link text.
const townServiceSet: NextStepLink[] = [
  { label: "Earwax removal", href: "/how-we-can-help/earwax-removal" },
  { label: "Hearing aid tune-ups", href: "/how-we-can-help/hearing-aid-tune-ups" },
  { label: "Cochlear implant support", href: "/how-we-can-help/cochlear-implants" },
  { label: "Cognivue cognitive screening", href: "/how-we-can-help/cognivue-cognitive-screening" },
  { label: "Advanced hearing aid technology", href: "/how-we-can-help/advanced-hearing-aid-technology" },
  { label: "Tinnitus management", href: "/how-we-can-help/tinnitus-management" }
];

const townGuideSet: NextStepLink[] = [
  { label: "The first signs of hearing loss families notice", href: "/first-signs-of-hearing-loss-family-notice" },
  { label: "What happens during a comprehensive hearing evaluation", href: "/what-happens-during-comprehensive-hearing-evaluation" },
  { label: "What a hearing test costs in Westchester", href: "/how-much-does-a-hearing-test-cost-westchester" },
  { label: "How often adults should get their hearing checked", href: "/how-often-should-adults-get-hearing-checked" },
  { label: "Questions to ask before buying hearing aids", href: "/questions-before-buying-hearing-aids" },
  { label: "Hearing aid second opinion in Westchester", href: "/hearing-aid-second-opinion" },
  { label: "What to expect during a hearing aid fitting", href: "/what-to-expect-hearing-aid-fitting" }
];

export function serviceNextStepsFor(page: SitePage): NextStepsEntry | null {
  const assess = { label: "Comprehensive hearing assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" };
  const brands = { label: "Hearing aid brands we fit", href: "/hearing-aids-brands" };
  const offices = { label: "Compare the Harrison and Somers offices", href: "/contact-us" };
  const testCost = { label: "What a hearing test costs in Westchester", href: "/how-much-does-a-hearing-test-cost-westchester" };

  const city = cityForPath(page.path);
  if (city) {
    const officeName = city.nearestOffice === "harrison" ? "Harrison" : "Somers";
    // Set sizes 6 and 7 share no factor, so no two of the 27 towns get the same
    // service and guide link together.
    const place = Math.max(0, areaCities.filter((item) => !item.legacyPath).findIndex((item) => item.slug === city.slug));
    const service = townServiceSet[place % townServiceSet.length];
    const guide = townGuideSet[place % townGuideSet.length];
    const links: NextStepLink[] = [
      { label: `Hearing assessments for ${city.name} patients`, href: assess.href },
      brands,
      service,
      guide,
      { label: `Compare the offices: ${officeName} is nearest to ${city.name}`, href: offices.href }
    ];
    // Reciprocal "nearby" link. Another generated town lists this town as nearby in
    // lib/serviceAreas.ts, but this town does not list it back. The town page shows
    // only its own nearby list, so the link is new to the page. The first such town
    // in the data is used.
    const reciprocal = areaCities.find(
      (item) => !item.legacyPath && item.slug !== city.slug && item.nearby.includes(city.name) && !city.nearby.includes(item.name)
    );
    if (reciprocal) links.push({ label: `Hearing care near ${reciprocal.name}, ${reciprocal.state}`, href: cityLinkPath(reciprocal) });
    return { heading: `Next steps for ${city.name} patients near our ${officeName} office`, links };
  }

  const county = countyForPath(page.path);
  if (county) {
    const otherCounties = areaCounties
      .filter((item) => item.slug !== county.slug)
      .map((item) => ({ label: `Hearing care near ${item.name}, ${item.state}`, href: countyPath(item.slug) }));
    return { heading: `More hearing care in ${county.name}`, links: [assess, brands, testCost, offices, ...otherCounties] };
  }

  const provider = providerForPath(page.path);
  if (provider) {
    const text = provider.specialties.join(" ").toLowerCase();
    const links = [assess];
    const add = (test: boolean, label: string, href: string) => {
      if (test && !links.some((link) => link.href === href)) links.push({ label, href });
    };
    add(/hearing aid|amplification|dispens/.test(text), brands.label, brands.href);
    add(/tinnitus/.test(text), "Tinnitus therapy", "/tinnitus-therapy");
    add(/cochlear/.test(text), "Cochlear implant support", "/how-we-can-help/cochlear-implants");
    add(/cerumen/.test(text), "Earwax removal", "/how-we-can-help/earwax-removal");
    add(/lyric/.test(text), "Lyric invisible hearing aids", "/lyric-invisible-hearing");
    add(/protection|musician/.test(text), "Hearing protection", "/hearing-protection");
    // The practice's press feature names one interviewee. Their page links to it.
    // Six links is the most a block shows, so the press link takes the sixth place.
    const feature = pressFeatures.find((item) => item.interviewee === provider.slug);
    if (!feature) return { heading: "Related care and next steps", links: links.slice(0, 6) };
    return {
      heading: "Related care and next steps",
      links: [...links.slice(0, 5), { label: `As featured in ${feature.publication}`, href: pressFeaturePath(feature) }]
    };
  }

  return null;
}

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
      { label: "Tinnitus Therapy", href: "/tinnitus-therapy" },
      { label: "Hearing screening vs hearing test", href: "/hearing-screening-vs-hearing-test" },
      { label: "Pulsatile tinnitus: why heartbeat-like sounds need attention", href: "/pulsatile-tinnitus-heartbeat-sound" },
      { label: "Dizziness and ringing in the ears: audiology or ENT?", href: "/dizziness-and-ringing-audiology-or-ent" },
      { label: "One ear hearing loss: when to get checked", href: "/one-ear-hearing-loss-when-to-get-checked" },
      { label: "Sudden hearing loss: why not to wait", href: "/sudden-hearing-loss-why-not-wait" },
      { label: "Harrison, NY office", href: "/harrison-ny" }
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
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Hearing test vs hearing screening: what is the difference?", href: "/hearing-test-vs-hearing-screening-difference" },
      { label: "What happens during a comprehensive hearing evaluation", href: "/what-happens-during-comprehensive-hearing-evaluation" },
      { label: "Comprehensive hearing assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
      { label: "What a hearing test costs in Westchester", href: "/how-much-does-a-hearing-test-cost-westchester" },
      { label: "Harrison, NY office", href: "/harrison-ny" },
      { label: "Somers, NY office", href: "/Somers-NY" },
      { label: "Precision hearing care: why your audiogram matters more than ever in 2026", href: "/precision-hearing-care-audiogram" }
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
      { label: "Latest: Hearing Glasses Compared (Legato vs. Nuance Audio Plus)", href: "/hearing-glasses-comparison" },
      { label: "Latest: Samsung Galaxy Buds Are Becoming Hearing Aids", href: "/samsung-galaxy-buds-hearing-aid-feature" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Types of Hearing Aids", href: "/types-of-hearing-aids" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing aids 101", href: "/hearing-aids-101" },
      { label: "Hearing aid brands we fit", href: "/hearing-aids-brands" },
      { label: "Are OTC hearing aids right for me?", href: "/are-otc-hearing-aids-right-for-me" },
      { label: "Latest: Elehear Beyond 2 Pro ($799 OTC) vs. Prescription Hearing Aids", href: "/elehear-beyond-2-pro-vs-prescription-hearing-aids" }
    ]
  }
];

export function trackingHref(kind: string, pagePath: string) {
  const id = pagePath.replace(/^\//, "").replace(/\//g, "-") || "home";
  return `${kind}-${id}`;
}
