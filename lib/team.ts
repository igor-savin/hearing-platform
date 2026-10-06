export type ProviderProfile = {
  slug: string;
  name: string;
  pronouns: string;
  role: string;
  image: string;
  alt: string;
  quote?: string;
  paragraphs: string[];
  credentials: string[];
  affiliations?: string[];
  specialties: string[];
  // Location paths this provider sees patients at, when it is more than the
  // main Harrison office. Drives the phone numbers shown on their profile and
  // the workLocation links in their Person schema. Omit for Harrison-only.
  officePaths?: string[];
  // National Provider Identifier. The canonical public key for a US clinician:
  // it is what lets a search engine or model tell this Dr. Rivera from every
  // other one, and ties the profile to the NPPES record those systems already
  // hold. Emitted as schema.org `identifier`. Left unset until the practice
  // confirms each number -- an NPI guessed from a name match is worse than
  // none, because it asserts an identity.
  npi?: string;
  // Languages the clinician can actually practise in, beyond English. Recorded
  // explicitly rather than parsed out of the credential prose so the claim is
  // deliberate: it tells a patient who needs it that the appointment can happen
  // in that language.
  knowsLanguage?: string[];
};

export const providerRootPath = "/meet-the-team";

export const providerProfiles: ProviderProfile[] = [
  {
    slug: "jennifer-ratner",
    name: "Dr. Jennifer Ratner, Au.D.",
    pronouns: "(she/her/hers)",
    role: "Partner, Doctor of Audiology",
    image: "/assets/duda/dr-jennifer-ratner-audiologist-westchester.jpg",
    alt: "Jennifer Ratner, Au.D. - Doctor of Audiology - Audiology Associates of Westchester",
    quote:
      "I consider it an absolute privilege to re-connect my patients to their loved ones and surroundings through better hearing. I find such joy in helping my patients and cherish the connection I make with each and every one of them.",
    paragraphs: [
      "Dr. Ratner earned her Au.D. at Vanderbilt University School of Medicine in 2012, after a B.A. in communication sciences and disorders at Florida State University. At Vanderbilt she worked as a research assistant in the Dan Maddox Hearing Aid Research Laboratory. She completed her externship at the Veterans Affairs Medical Center in Nashville, Tennessee, and then practiced at a private office in Manhattan before joining this practice, where she is now a partner.",
      "She is licensed in New York State as an audiologist and as a hearing aid dispenser, board certified by the American Academy of Audiology, a member of the American Speech-Language-Hearing Association, and a fellow of the Tinnitus Practitioners Association. She holds the CH-TM certificate in tinnitus management.",
      "Her clinical work is diagnostic testing, hearing aid fitting and verification, and the counseling and auditory rehabilitation that follow a fitting. She is a former musician, and musicians are the patients she seeks out. She sees patients at the Harrison office. In 2017 the Business Council of Westchester gave her its Rising Stars Top 40 Under 40 award."
    ],
    credentials: [
      "Audiology Licensure: New York State; New York State Hearing Aid Dispenser",
      "College: B.A. Communication Sciences and Disorders, Magna Cum Laude; Florida State University, 2008",
      "Graduate: Au.D. Audiology, Vanderbilt University School of Medicine, 2012",
      "Board Certification: American Academy of Audiology",
      "Awards: American Academy of Audiology, 2013-2014 Scholar Award",
      "Certificate Holder: Tinnitus Management (CH-TM)"
    ],
    affiliations: [
      "American Academy of Audiology",
      "Tinnitus Practitioners Association",
      "American Speech, Language, and Hearing Association"
    ],
    specialties: [
      "Diagnostic hearing testing",
      "Hearing aid fitting and verification",
      "Counseling and auditory rehabilitation",
      "Tinnitus management",
      "Musician-focused hearing needs"
    ]
  },
  {
    slug: "caitlin-dold",
    name: "Dr. Caitlin Dold, Au.D.",
    pronouns: "(she/her/hers)",
    role: "Lead Audiologist, Doctor of Audiology",
    image: "/assets/duda/dr-caitlin-dold-audiologist-westchester.jpg",
    alt: "Caitlin Dold, Au.D. - Doctor of Audiology at Audiology Associates of Westchester",
    paragraphs: [
      "Dr. Dold grew up in White Plains and earned her Au.D. at Vanderbilt University School of Medicine in 2020. At Vanderbilt she was a research assistant on a collaboration between the Hearing and Communication Research Lab and the Listening and Learning Lab studying listening-related fatigue. She held a T-35 traineeship from the NIH, was published from that work, and completed a traineeship with the U.S. Department of Veterans Affairs.",
      "She did her externship at Audiology Associates of Westchester and stayed. She now runs the practice's clinical education program for audiology students in training, and she sees patients at both the Harrison and Somers offices.",
      "Cochlear implant work is hers: candidacy testing, activation, and programming. She also does comprehensive diagnostic testing, hearing aid fitting and verification, tinnitus testing and treatment, cerumen removal, Lyric extended-wear devices, custom hearing protection and musician's plugs, and auditory rehabilitation.",
      "She has worked with veterans, people with disabilities, and D/deaf patients. Her American Sign Language is at professional proficiency, so an appointment can be conducted in ASL. She holds a New York State license in audiology, holds ASHA's Certificate of Clinical Competence, and is a fellow of the American Academy of Audiology. In 2024 the Business Council of Westchester gave her its Rising Stars Top 40 Under 40 award."
    ],
    credentials: [
      "Audiology Licensure: New York State; New York State Hearing Aid Dispenser",
      "College: B.A., Sociology; Self-Designed Second Major: Learning and Culture in the Deaf Community, College of the Holy Cross, 2010",
      "Graduate: Au.D. Audiology, Vanderbilt University School of Medicine, 2020",
      "Certificate Holder: Tinnitus Management (CH-TM); Auditory Preceptor (CH-AP)",
      "Professional Proficiency in American Sign Language"
    ],
    // Stated in her bio and credentials: professional proficiency, not a
    // courtesy phrase.
    knowsLanguage: ["English", "American Sign Language"],
    affiliations: [
      "American Academy of Audiology - Academy Fellow",
      "American Speech-Language-Hearing Association - Certificate of Clinical Competence"
    ],
    officePaths: ["/harrison-ny", "/Somers-NY"],
    specialties: [
      "Comprehensive diagnostic testing",
      "Hearing aid fitting and verification",
      "Cochlear implant candidacy, activation, and programming",
      "Tinnitus testing and treatment",
      "Cerumen removal",
      "Lyric invisible extended-wear hearing devices",
      "Custom hearing protection and musician's plugs",
      "American Sign Language"
    ]
  },
  {
    slug: "jenna-elias",
    name: "Dr. Jenna M. Elias, Au.D., F-AAA",
    pronouns: "(she/her/hers)",
    role: "Audiology Staff, Doctor of Audiology",
    image: "/assets/duda/dr-jenna-elias-audiologist-westchester.jpg",
    alt: "Dr. Jenna Elias",
    quote:
      "Hearing loss can really affect people's lives especially if it goes untreated. I became an audiologist as I love reconnecting my patients to their surrounding environments and to what they love. I find it truly rewarding to put hearing aids on my patients and see their eyes light up at how well they are hearing.",
    paragraphs: [
      "Dr. Elias earned her Doctor of Audiology at the University of Florida in 2018, after a master's in audiology at Hofstra University in 2015. She is licensed in New York State as an audiologist and as a hearing aid dispenser.",
      "Before joining this practice she worked in a large ENT practice and at Bellevue Hospital in New York City. She is a fellow of the American Academy of Audiology, holds ASHA's Certificate of Clinical Competence, and is a member of the Sigma Pi honor society.",
      "She sees patients at the Harrison office for diagnostic audiology, hearing aid consultations, dispensing, and counseling."
    ],
    credentials: [
      "Audiology Licensure: New York State and NYS Hearing Aid Dispenser",
      "College: M.A. Audiology, Hofstra University, 2015",
      "Graduate: University of Florida, Doctor of Audiology; Spring 2018"
    ],
    affiliations: [
      "American Academy of Audiology - Academy Fellow",
      "American Speech-Language-Hearing Association - Certificate of Clinical Competence"
    ],
    specialties: [
      "Diagnostic audiology",
      "Hearing aid dispensing",
      "Hearing aid consultations",
      "Patient counseling"
    ]
  },
  {
    slug: "leannmarie-senat",
    name: "Dr. Leannmarie Senat",
    pronouns: "(she/her/hers)",
    role: "Audiology Staff, Doctor of Audiology",
    image: "/assets/team/dr-leannmarie-senat-audiologist-westchester.jpg",
    alt: "Dr. Leannmarie Senat",
    paragraphs: [
      "Dr. Senat earned her Doctor of Audiology at the CUNY Graduate Center in 2025, after a B.A. in communication science and disorders at CUNY Queens College.",
      "Her clinical placements were at the Brooklyn Veterans Affairs Medical Center, where she worked on adult amplification, and at Long Island Jewish Medical Center, where she worked on vestibular assessment and on pediatric and adult diagnostics. She completed her residency at the LIJ Hearing and Speech Center.",
      "She sees patients at the Harrison office for diagnostic audiology and hearing aid care."
    ],
    credentials: [
      "College: CUNY Queens College, B.A., Communication Science and Disorders, Spring 2021",
      "Graduate: CUNY Graduate Center, Doctor of Audiology; Spring 2025"
    ],
    specialties: [
      "Adult amplification",
      "Vestibular assessment",
      "Pediatric and adult diagnostics",
      "Diagnostic audiology",
      "Hearing aid services across the lifespan"
    ]
  },
  {
    slug: "julia-rivera",
    name: "Dr. Julia Rivera, Au.D.",
    pronouns: "(she/her/hers)",
    role: "Audiology Staff, Doctor of Audiology",
    image: "/assets/team/dr-julia-rivera-audiologist-westchester.jpg",
    alt: "Dr. Julia Rivera, Au.D.",
    // Single source of truth for her bio. The meet-the-team roster reads these
    // paragraphs from here rather than keeping its own copy.
    paragraphs: [
      "Dr. Rivera earned her Doctor of Audiology at Montclair State University in May 2026, after a B.A. in communication sciences and disorders at Pace University.",
      "Before her doctoral studies she spent more than 150 hours in school-based speech and language therapy with students aged 4 to 21, many of them with developmental, intellectual, physical, or communication disabilities.",
      "Her clinical training ran through private practice, hospital, and ENT settings: pediatric and adult diagnostic audiology, vestibular assessment, tinnitus evaluation, cerumen removal, Lyric hearing aids, custom hearing protection and musician’s earplugs, and the selection, orientation, fitting, verification, and ongoing management of hearing aids. She sees patients at both the Harrison and Somers offices.",
      "Her doctoral research examined how structural racism and social determinants of health influence follow-up adherence within Early Hearing Detection and Intervention programs."
    ],
    credentials: [
      "College: Pace University, B.A., Communication Sciences and Disorders",
      "Graduate: Montclair State University, Doctor of Audiology; May 2026"
    ],
    officePaths: ["/harrison-ny", "/Somers-NY"],
    specialties: [
      "Pediatric and adult diagnostic audiology",
      "Vestibular assessment",
      "Tinnitus evaluation",
      "Cerumen removal",
      "Hearing aid selection, fitting, and verification",
      "Lyric extended-wear hearing aids",
      "Custom hearing protection and musician\u2019s earplugs",
      "Patient and family counseling"
    ]
  },
  {
    slug: "kira-savin",
    name: "Dr. Kira Savin, Au.D.",
    pronouns: "(she/her/hers)",
    role: "Partner, Doctor of Audiology",
    image: "/assets/duda/dr-kira-savin-audiologist-westchester.jpg",
    alt: "Kira Savin, Au.D. - Doctor of Audiology at Audiology Associates of Westchester",
    quote:
      "There is nothing more rewarding than helping a patient achieve better hearing. I believe that everyone's hearing needs are unique, like a fingerprint, and my goal is to find customized solutions for all populations.",
    paragraphs: [
      "Dr. Savin is a partner in the practice. She earned her Au.D. at Salus University's George S. Osborne College of Audiology in 2013, after a B.A. in communication sciences and disorders at Pace University, and completed her residency at SUNY Downstate Medical Center in Brooklyn.",
      "She then worked at a private practice in New York City, dispensing hearing aids and making customized musicians' devices, before joining this practice.",
      "She holds a New York State license in audiology and in hearing aid dispensing, is a fellow of the American Academy of Audiology, is a member of the American Speech-Language-Hearing Association and the Long Island Speech and Hearing Association, and holds the CH-TM certificate in tinnitus management.",
      "Her work is with adults: hearing rehabilitation, auditory counseling and retraining therapy, tinnitus management, and hearing aids and assistive listening technology. She fits Lyric, the extended-wear device a clinician places in the ear canal and that stays in for months at a time between visits. She sees patients at the Harrison office."
    ],
    credentials: [
      "Audiology Licensure: New York State; New York State Hearing Aid Dispenser",
      "College: B.A., Communication Sciences and Disorders, Pace University, 2005",
      "Graduate: Au.D., Salus University, George S. Osborne College of Audiology, 2013",
      "Certification: American Academy of Audiology",
      "Certificate Holder: Tinnitus Management (CH-TM)"
    ],
    affiliations: [
      "American Academy of Audiology - Academy Scholar",
      "American Speech-Language-Hearing Association",
      "Long Island Speech and Hearing Association"
    ],
    specialties: [
      "Personalized hearing solutions",
      "Lyric invisible extended-wear hearing devices",
      "Hearing rehabilitation",
      "Auditory counseling and retraining therapy",
      "Tinnitus management",
      "Hearing aids and assistive listening technology for adults",
      "Customized musicians' devices"
    ]
  }
];

export function providerPath(provider: ProviderProfile) {
  return `${providerRootPath}/${provider.slug}`;
}

// `credentials` is a flat list of display strings with a label prefix. Only the
// College/Graduate entries were ever read, as alumniOf; the licences, board
// certifications, certificates, and awards were rendered on the page and then
// discarded before the schema saw them. Split them here so each lands on the
// property that actually means it.
//
// An entry with no recognised prefix stays out of the structured data rather
// than being forced into a category: `hasCredential` is a claim about a formal
// qualification, and "Professional Proficiency in American Sign Language" is
// not one -- it is carried by `knowsLanguage` instead.
export type ParsedCredentials = {
  alumniOf: string[];
  credentials: { category: "license" | "certification" | "certificate"; name: string }[];
  awards: string[];
};

const credentialCategories: { prefix: string; category: "license" | "certification" | "certificate" }[] = [
  { prefix: "Audiology Licensure:", category: "license" },
  { prefix: "Board Certification:", category: "certification" },
  { prefix: "Certification:", category: "certification" },
  { prefix: "Certificate Holder:", category: "certificate" }
];

export function parseCredentials(provider: ProviderProfile): ParsedCredentials {
  const parsed: ParsedCredentials = { alumniOf: [], credentials: [], awards: [] };

  for (const entry of provider.credentials) {
    if (entry.startsWith("College:") || entry.startsWith("Graduate:")) {
      parsed.alumniOf.push(entry.replace(/^(College|Graduate):\s*/, ""));
      continue;
    }
    if (entry.startsWith("Awards:")) {
      // One string can hold several awards separated by semicolons.
      parsed.awards.push(...entry.replace(/^Awards:\s*/, "").split(";").map((award) => award.trim()).filter(Boolean));
      continue;
    }
    const match = credentialCategories.find((candidate) => entry.startsWith(candidate.prefix));
    if (!match) continue;
    const value = entry.slice(match.prefix.length).trim();
    for (const name of value.split(";").map((item) => item.trim()).filter(Boolean)) {
      parsed.credentials.push({ category: match.category, name });
    }
  }

  return parsed;
}

// Resolve a provider slug recorded on an article's blogMeta. Returns undefined
// for an unknown slug so a typo degrades to organization-level attribution
// rather than throwing during the build.
export function providerForSlug(slug: string) {
  return providerProfiles.find((provider) => provider.slug === slug);
}

export function providerForPath(path: string) {
  return providerProfiles.find((provider) => providerPath(provider) === path);
}

export function providerForName(name: string) {
  return providerProfiles.find((provider) => provider.name === name);
}
