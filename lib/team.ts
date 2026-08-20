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
};

export const providerRootPath = "/meet-the-team";

export const providerProfiles: ProviderProfile[] = [
  {
    slug: "jennifer-ratner",
    name: "Dr. Jennifer Ratner, Au.D.",
    pronouns: "(she/her/hers)",
    role: "Partner, Doctor of Audiology",
    image: "/assets/duda/jen-ratner-img.jpg",
    alt: "Jennifer Ratner, Au.D. - Doctor of Audiology - Audiology Associates of Westchester",
    quote:
      "I consider it an absolute privilege to re-connect my patients to their loved ones and surroundings through better hearing. I find such joy in helping my patients and cherish the connection I make with each and every one of them.",
    paragraphs: [
      "Dr. Ratner was awarded her doctorate in audiology from the top graduate audiology program in the country, Vanderbilt University School of Medicine. She has worked as a research assistant in the Dan Maddox Hearing Aid Research Laboratory at Vanderbilt University, and she completed her externship at the renowned Veterans Affairs Medical Center in Nashville, TN.",
      "Dr. Ratner went on to work at a private practice in Manhattan prior to joining our staff. She is a member of the American Academy of Audiology, accredited by the American Speech-Language-Hearing Association, and a fellow of the Tinnitus Practitioners Association.",
      "She has a strong background in diagnostic testing, fitting and verification of hearing aids, counseling and orientation and auditory rehabilitation. As a music lover and former musician, she enjoys meeting the unique needs of musicians with hearing loss. In 2017, she was awarded the Rising Stars Top 40 Under 40 award from the Business Council of Westchester."
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
    image: "/assets/duda/0255mfox9-2021-edit.jpg",
    alt: "Caitlin Dold, Au.D. - Doctor of Audiology at Audiology Associates of Westchester",
    paragraphs: [
      "Dr. Dold is a White Plains native who received her doctorate from Vanderbilt University School of Medicine. While at Vanderbilt, she worked as a research assistant in a collaboration between the Hearing and Communication Research Lab and Listening and Learning Lab examining listening-related fatigue.",
      "She was awarded a T-35 Traineeship from the NIH and was subsequently published and completed a traineeship with the U.S. Department of Veteran Affairs. She completed her externship at Audiology Associates of Westchester and runs the Practice's clinical education program for Audiology students in training.",
      "Her areas of expertise include comprehensive diagnostic testing, counseling and orientation, fitting and verification of hearing aids, testing for cochlear implant candidacy, activation and programming of cochlear implants, tinnitus testing and treatment, cerumen removal, Lyric invisible extended-wear hearing devices, custom fit hearing protection and musician's plugs, and auditory rehabilitation.",
      "She has worked with special populations including veterans, individuals with disabilities, and D/deaf individuals. She is highly proficient in American Sign Language and holds a New York State license in Audiology, is accredited by the American Speech-Language-Hearing Association and is a member of the American Academy of Audiology. In 2024, she was awarded the Rising Stars Top 40 Under 40 Award from the Business Council of Westchester."
    ],
    credentials: [
      "Audiology Licensure: New York State; New York State Hearing Aid Dispenser",
      "College: B.A., Sociology; Self-Designed Second Major: Learning and Culture in the Deaf Community, College of the Holy Cross, 2010",
      "Graduate: Au.D. Audiology, Vanderbilt University School of Medicine, 2020",
      "Certificate Holder: Tinnitus Management (CH-TM); Auditory Preceptor (CH-AP)",
      "Professional Proficiency in American Sign Language"
    ],
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
    image: "/assets/duda/untitled-3.jpg",
    alt: "Dr. Jenna Elias",
    quote:
      "Hearing loss can really affect people's lives especially if it goes untreated. I became an audiologist as I love reconnecting my patients to their surrounding environments and to what they love. I find it truly rewarding to put hearing aids on my patients and see their eyes light up at how well they are hearing.",
    paragraphs: [
      "Jenna M. Elias received her Doctor of Audiology degree at the University of Florida and her master's degree at Hofstra University. She is licensed in New York State as an audiologist and hearing aid dispenser.",
      "Dr. Elias worked in various clinical settings including a large ENT practice and Bellevue Hospital in New York City prior to joining the Audiology Associates of Westchester team.",
      "Dr. Elias is a fellow of the American Academy of Audiology and Sigma Pi honor society. She has extensive training in hearing aid dispensing and diagnostic audiology."
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
    image: "/assets/team/leannmarie-senat.jpg",
    alt: "Dr. Leannmarie Senat",
    paragraphs: [
      "Leannmarie Senat earned her Doctorate of Audiology from The City University of New York Graduate Center.",
      "Her clinical training included placements at the Brooklyn Veterans Affairs Medical Center, with a focus on adult amplification, and at the Long Island Jewish (LIJ) Medical Center, where she concentrated on vestibular assessment as well as pediatric and adult diagnostics.",
      "She completed her residency at the LIJ Hearing and Speech Center, gaining extensive experience in diagnostic audiology and hearing aid services for patients across the lifespan."
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
    image: "/assets/team/julia-rivera.jpg",
    alt: "Dr. Julia Rivera, Au.D.",
    // Single source of truth for her bio. The meet-the-team roster reads these
    // paragraphs from here rather than keeping its own copy.
    paragraphs: [
      "Julia Rivera earned her Doctor of Audiology degree from Montclair State University in May 2026. She earned her Bachelor of Arts in Communication Sciences and Disorders from Pace University.",
      "Before beginning her doctoral studies, Julia gained more than 150 hours of experience in speech and language therapy, working with individuals ages 4 to 21 in school-based settings. She worked with individuals with a variety of developmental, intellectual, physical, and communication disabilities. This background strengthened her understanding of communication development and deepened her commitment to interdisciplinary, patient-centered care.",
      "Her clinical training includes experience across private practice, hospital, and ENT settings, where she developed a strong foundation in pediatric and adult diagnostic audiology, vestibular assessment, tinnitus evaluation, cerumen removal, hearing aid technology, and patient counseling. She also has experience with Lyric hearing aids, custom hearing protection and musician’s earplugs, as well as the selection, orientation, fitting, verification, and ongoing management of hearing aids. Julia is passionate about providing person- and family-centered care that empowers individuals to improve their communication and overall quality of life.",
      "Julia’s doctoral research examined how structural racism and social determinants of health influence follow-up adherence within Early Hearing Detection and Intervention programs, reflecting her commitment to promoting equity and access in hearing healthcare."
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
    image: "/assets/duda/0422mfox9-2021-edit.jpg",
    alt: "Kira Savin, Au.D. - Doctor of Audiology at Audiology Associates of Westchester",
    quote:
      "There is nothing more rewarding than helping a patient achieve better hearing. I believe that everyone's hearing needs are unique, like a fingerprint, and my goal is to find customized solutions for all populations.",
    paragraphs: [
      "Dr. Kira Savin specializes in providing personalized hearing solutions using the latest and most discreet technology available, including the Lyric invisible extended-wear hearing device.",
      "Dr. Savin's areas of expertise include hearing rehabilitation, auditory counseling and retraining therapy, tinnitus management, and dispensing hearing aids and assistive listening technologies for adults.",
      "She holds a New York State license in audiology, as well as hearing aid dispensing. She has been accredited by the American Speech-Language-Hearing Association and is a fellow of the American Academy of Audiology.",
      "Dr. Savin completed her residency at SUNY Downstate Medical Center in Brooklyn, NY. She previously worked at a private practice in New York City where she dispensed hearing aids and provided hearing care solutions, including customized musicians' devices for all populations."
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
