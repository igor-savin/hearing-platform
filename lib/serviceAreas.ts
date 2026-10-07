export type AreaCounty = {
  slug: string;
  name: string;
  state: string;
  headline: string;
  summary: string;
  officeContext: string;
  cities: string[];
};

export type AreaCountyLocalFlavor = {
  heading: string;
  intro: string;
  regions: Array<{
    title: string;
    body: string;
  }>;
  hearingPriorities: string[];
};

export type AreaCity = {
  slug: string;
  name: string;
  state: string;
  countySlug: string;
  nearestOffice: "harrison" | "somers";
  nearby: string[];
  localContext: string;
  travelNote: string;
  // Optional shorter page title for towns whose primary query fits better
  // than the generic "Audiologist Near X" form. Falls back to the default.
  metaTitle?: string;
  patientNeeds: string[];
  // Some towns already had a bespoke page on the live Duda site. Those URLs
  // hold the search equity, so we do not also publish a generated
  // /areas-we-serve/* page for them -- two indexable pages chasing the same
  // local intent split the signal. The generated path 301s to this one.
  legacyPath?: string;
};

export type AreaCityLocalFlavor = {
  heading: string;
  intro: string;
  listeningEnvironments: Array<{
    title: string;
    body: string;
  }>;
  // Hand-written, town-specific Q&A. When present these replace the
  // generated set in lib/site.ts cityAreaFaqs(). The generated questions are
  // built from templates with the town name substituted in, which is the
  // doorway-content failure mode the California site was rebuilt to avoid:
  // there, every city page carries its own written FAQs. Towns without this
  // field keep the generated set, which is still better than nothing.
  faqs?: { question: string; answer: string }[];

  // Kept required only because components/PageRenderer.tsx renders
  // flavor.hearingPriorities unguarded. Towns whose priorities would just
  // restate the listening environments above carry a short list instead of a
  // padded four.
  hearingPriorities: string[];
};

export const serviceAreasRootPath = "/areas-we-serve";

export const areaCounties: AreaCounty[] = [
  {
    slug: "westchester-county-ny",
    name: "Westchester County",
    state: "NY",
    headline: "Hearing aids and audiology across Westchester County",
    summary:
      "Audiology Associates of Westchester serves patients throughout Westchester County from two offices in Harrison and Somers.",
    officeContext:
      "There are two offices. Harrison, at 550 Mamaroneck Ave, is open weekdays 8:30 to 5:00. Somers, at 325 NY 100, is open Monday through Wednesday, closed Thursday, and closes at 2:30 on Friday. Book at whichever one you would rather drive to.",
    cities: [
      "harrison",
      "somers",
      "white-plains",
      "scarsdale",
      "rye",
      "mamaroneck",
      "larchmont",
      "port-chester",
      "rye-brook",
      "purchase",
      "new-rochelle",
      "hartsdale",
      "mount-kisco",
      "yorktown-heights",
      "katonah",
      "bedford",
      "chappaqua",
      "armonk",
      "pleasantville",
      "greenburgh",
      "elmsford",
      "ardsley",
      "yonkers",
      "dobbs-ferry",
      "tarrytown",
      "hastings-on-hudson",
      "briarcliff-manor",
      "sleepy-hollow",
      "irvington",
      "ossining",
      "croton-on-hudson",
      "cortlandt-manor"
    ]
  },
  {
    slug: "fairfield-county-ct",
    name: "Fairfield County",
    state: "CT",
    headline: "Hearing care near Fairfield County, CT",
    summary:
      "Patients from lower Fairfield County, especially Greenwich and nearby communities, can reach Audiology Associates of Westchester through nearby Westchester County offices.",
    officeContext:
      "Harrison is the closer of the two offices for Greenwich and the towns along the state line. It is a New York practice, so ask about your plan's out-of-network and out-of-state rules when you call to book.",
    cities: ["greenwich"]
  },
  {
    slug: "putnam-county-ny",
    name: "Putnam County",
    state: "NY",
    headline: "Audiology services near Putnam County, NY",
    summary:
      "Patients from southern Putnam County can schedule hearing care at the Somers office, including hearing tests, hearing aid fittings, tinnitus support, and hearing aid repair.",
    officeContext:
      "Somers, at 325 NY 100, is the closer office for Mahopac, Carmel, and the towns just over the Westchester line. It is closed Thursdays and closes at 2:30 on Fridays, which is worth knowing before you plan the drive.",
    cities: ["mahopac"]
  }
];

export const countyLocalFlavorBySlug: Record<string, AreaCountyLocalFlavor> = {
  "westchester-county-ny": {
    heading: "Hearing Care Across Westchester's Sound Shore, Downtowns, and Northern Communities",
    intro:
      "A patient from Rye asks how to keep hearing aids working after a summer near the water. A patient from White Plains asks why a phone call is easy and a restaurant on Mamaroneck Avenue is not. A patient from Katonah asks why the ringing gets loud at ten at night in a quiet house. Same practice, same test, three different starting questions.",
    regions: [
      {
        title: "Sound Shore communities",
        body:
          "Rye, Mamaroneck, Larchmont, and Port Chester patients bring up wind, humidity, and restaurants. Two of those are device-care problems and one is a speech-in-noise problem, and the audiologist will separate them before recommending anything."
      },
      {
        title: "Central Westchester",
        body:
          "White Plains, Hartsdale, Scarsdale, Purchase, and Harrison patients spend the day moving between quiet offices and loud public rooms. What they usually need is a hearing aid that changes settings without being asked."
      },
      {
        title: "Northern Westchester",
        body:
          "Somers, Katonah, Bedford, Yorktown Heights, Chappaqua, Mt. Kisco, Armonk, and Pleasantville mean longer drives and quieter houses. Tinnitus comes up more often here. So does the question of how often you will have to come back, which is worth asking before you buy anything."
      }
    ],
    hearingPriorities: [
      "diagnostic hearing tests at either the Harrison or the Somers office",
      "speech in restaurants, meetings, cars, and family rooms",
      "custom hearing protection for music, tools, and shooting sports",
      "tinnitus appointments and hearing aid repair without a trip into the city"
    ]
  },
  "fairfield-county-ct": {
    heading: "Hearing Care for Greenwich and Nearby Lower Fairfield County Patients",
    intro:
      "Greenwich patients already cross the state line for plenty of things. Hearing care is one more. The practical questions are which office to drive to, what your plan says about a New York provider, and whether the hearing aids you are considering will hold up to a summer spent near the water.",
    regions: [
      {
        title: "Greenwich Avenue and downtown listening",
        body:
          "Hard floors, music overhead, and a table of six. That is the room most people describe when they finally book a test. Hearing aid programming gets checked against it."
      },
      {
        title: "Waterfront and outdoor activity",
        body:
          "Salt air and humidity are hard on receivers and microphones. If you are on the water most weekends, ask about drying routines and moisture-resistant models at the consultation rather than after the first failure."
      },
      {
        title: "Crossing the line to Harrison",
        body:
          "Harrison is the closer of the two offices. Call (914) 949-0034 to book a hearing test, a repair, or a tinnitus visit, and ask about out-of-state coverage while you have someone on the phone."
      }
    ],
    hearingPriorities: [
      "hearing tests for Greenwich patients at the Harrison office",
      "speech clarity on Greenwich Avenue and in restaurants",
      "moisture and wind planning for time spent on the water",
      "repairs and follow-up close to the state line"
    ]
  },
  "putnam-county-ny": {
    heading: "Hearing Care Near Southern Putnam County and the Somers Office",
    intro:
      "Somers is the office southern Putnam patients drive to, on NY 100. Most of what brings people in is ordinary: a spouse who is tired of repeating things, a hearing aid that quit, a ringing that got worse.",
    regions: [
      {
        title: "Lake and outdoor routines",
        body:
          "A gas mower runs around 90 decibels and a chainsaw well past that. Over a summer that adds up. Custom plugs are molded from an impression taken in the office and they beat foam because you can still hear someone shout."
      },
      {
        title: "Route 6 and daily errands",
        body:
          "Car conversation is one of the hardest listening situations there is: the talker faces away from you and the road covers the consonants. Bring it up at the fitting, because it is a fixable problem."
      },
      {
        title: "Quiet houses and tinnitus",
        body:
          "Tinnitus gets louder when the room gets quieter, which is why northern Putnam patients notice it at night. A hearing test comes first. It tells the audiologist whether hearing loss is feeding the tinnitus, and that changes what is worth trying."
      }
    ],
    hearingPriorities: [
      "diagnostic hearing tests at the Somers office",
      "custom hearing protection for boats, mowers, and power tools",
      "tinnitus appointments and hearing aid repair"
    ]
  }
};

export const areaCities: AreaCity[] = [
  {
    slug: "harrison",
    legacyPath: "/harrison-ny",
    name: "Harrison",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Purchase", "Rye", "White Plains", "Mamaroneck"],
    localContext:
      "Harrison is where the practice's main office sits: 550 Mamaroneck Ave, Suite 407, on the fourth floor. Testing, hearing aid fittings, tinnitus appointments, earwax removal, and repairs all happen in that building.",
    travelNote:
      "The office is open weekdays, 8:30 to 5:00. Call (914) 949-0034 to book, and mention elevator access or arrival instructions on the phone if they matter for the visit.",
    patientNeeds: [
      "hearing tests in town",
      "hearing aid fittings and follow-up",
      "hearing aid repair and cleaning",
      "tinnitus appointments",
      "custom hearing protection"
    ]
  },
  {
    slug: "somers",
    legacyPath: "/Somers-NY",
    name: "Somers",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    nearby: ["Mahopac", "Yorktown Heights", "Katonah", "North Salem"],
    localContext:
      "The Somers office is at 325 NY 100 and does the same work as Harrison: diagnostic testing, hearing aid fittings and repairs, tinnitus appointments, and custom earplugs.",
    travelNote:
      "Somers is open Monday through Wednesday, closed Thursday, and open Friday until 2:30. The number there is (914) 556-6720. Dr. Dold and Dr. Rivera see patients at both offices, so say which location you want when you call.",
    patientNeeds: [
      "hearing tests in northern Westchester",
      "hearing aid fitting and maintenance",
      "custom hearing protection",
      "tinnitus appointments"
    ]
  },
  {
    slug: "white-plains",
    legacyPath: "/White-Plains-NY",
    name: "White Plains",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Hartsdale", "Scarsdale", "Harrison", "Purchase"],
    localContext:
      "White Plains is a service area, not an office. The nearest practice location is Harrison, at 550 Mamaroneck Ave, Suite 407, and that is where testing, fittings, and repairs are done.",
    travelNote:
      "Harrison is the nearer of the practice's two offices for anyone in White Plains. Weekdays, 8:30 to 5:00, (914) 949-0034. If an early slot before work is easier than a midday one, ask for it when you book.",
    patientNeeds: [
      "diagnostic hearing evaluations",
      "hearing aid technology consultations",
      "hearing aid repair",
      "tinnitus appointments"
    ]
  },
  {
    slug: "scarsdale",
    legacyPath: "/Scarsdale-NY",
    name: "Scarsdale",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Hartsdale", "White Plains", "Eastchester", "New Rochelle"],
    localContext:
      "There is no Scarsdale office. Harrison, at 550 Mamaroneck Ave, is the nearest practice location, and it is where hearing tests, hearing aid fittings, and follow-up programming happen.",
    travelNote:
      "Harrison is the closer of the two offices for Scarsdale patients. When you call (914) 949-0034, ask for a diagnostic hearing evaluation rather than a screening. They are not the same test, and only the first one tells you what kind of hearing loss you have.",
    patientNeeds: [
      "diagnostic hearing testing",
      "hearing aid consultations",
      "follow-up programming",
      "custom hearing protection"
    ]
  },
  {
    slug: "rye",
    legacyPath: "/rye-ny",
    name: "Rye",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Harrison", "Rye Brook", "Port Chester", "Greenwich"],
    localContext:
      "Rye patients are sent to the Harrison office at 550 Mamaroneck Ave, Suite 407, for hearing tests, hearing aid fittings, tinnitus visits, and repairs.",
    travelNote:
      "Harrison is about ten minutes from Rye and is open weekdays, 8:30 to 5:00. Call (914) 949-0034 to book a test, a fitting, or a repair.",
    patientNeeds: [
      "hearing tests near Rye",
      "hearing aids and accessories",
      "hearing aid repair",
      "tinnitus appointments"
    ]
  },
  {
    slug: "mamaroneck",
    name: "Mamaroneck",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Larchmont", "Harrison", "Rye", "Scarsdale"],
    localContext:
      "Mamaroneck patients are seen at the Harrison office, one town over on Mamaroneck Avenue, for testing, hearing aid work, and custom earplugs.",
    travelNote:
      "Harrison is the nearer of the two offices. It is open weekdays and the number is (914) 949-0034. If the reason you are calling is a hearing aid that has stopped working, say that, because a repair visit is shorter than a full evaluation.",
    patientNeeds: [
      "hearing evaluations",
      "hearing aid consultations",
      "hearing aid maintenance",
      "custom ear protection"
    ]
  },
  {
    slug: "larchmont",
    name: "Larchmont",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Mamaroneck", "New Rochelle", "Rye", "Scarsdale"],
    localContext:
      "Larchmont has no practice office. Harrison is the nearest one, and it covers hearing testing, hearing aid fittings, tinnitus care, and repairs.",
    travelNote:
      "Book at Harrison, weekdays 8:30 to 5:00, on (914) 949-0034. First visits are diagnostic: the audiologist tests, explains the audiogram, and only then talks about whether hearing aids are the answer.",
    patientNeeds: ["hearing testing", "hearing aid fitting", "tinnitus support", "hearing protection"]
  },
  {
    slug: "port-chester",
    name: "Port Chester",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Rye Brook", "Rye", "Greenwich", "Harrison"],
    localContext:
      "Port Chester patients use the Harrison office at 550 Mamaroneck Ave, which is the closer of the practice's two locations to the Sound Shore and the Connecticut line.",
    travelNote:
      "Harrison books hearing tests, hearing aid work, and custom earplug impressions on weekdays, 8:30 to 5:00. Call (914) 949-0034. Musicians and staff who work the Capitol Theatre floor should ask specifically about musician's plugs, which are a different product from ordinary protection.",
    patientNeeds: [
      "hearing tests",
      "custom and musician hearing protection",
      "hearing aids",
      "hearing aid repair",
      "tinnitus appointments"
    ]
  },
  {
    slug: "rye-brook",
    name: "Rye Brook",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Rye", "Port Chester", "Purchase", "Greenwich"],
    localContext:
      "Rye Brook patients are seen at Harrison, the nearer of the practice's two offices, for evaluations, hearing aid consultations, and follow-up visits.",
    travelNote:
      "Appointments at Harrison run weekdays from 8:30 to 5:00; the number is (914) 949-0034. Bring whoever is telling you to get your hearing checked. A second person in the room usually gives the audiologist a more accurate picture than you will.",
    patientNeeds: [
      "diagnostic hearing testing",
      "hearing aid fitting",
      "hearing aid repairs",
      "tinnitus appointments"
    ]
  },
  {
    slug: "purchase",
    name: "Purchase",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Harrison", "White Plains", "Rye Brook", "Armonk"],
    localContext:
      "Purchase sits in the Town of Harrison, and the practice's Harrison office at 550 Mamaroneck Ave is the location Purchase patients are booked into.",
    travelNote:
      "Harrison takes appointments weekdays, 8:30 to 5:00, on (914) 949-0034. If your problem is conference calls and headsets rather than restaurants, say so when you book, because that changes what gets tested and what gets demonstrated.",
    patientNeeds: [
      "hearing testing",
      "hearing aid consultations",
      "Bluetooth and remote microphone setup",
      "custom hearing protection"
    ]
  },
  {
    slug: "new-rochelle",
    name: "New Rochelle",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Larchmont", "Mamaroneck", "Eastchester", "Scarsdale"],
    localContext:
      "New Rochelle is a service area. The nearest practice location is the Harrison office at 550 Mamaroneck Ave, Suite 407, which handles testing, hearing aids, tinnitus visits, and repairs.",
    travelNote:
      "Harrison is the closer of the two offices and is open weekdays, 8:30 to 5:00. The number is (914) 949-0034. Ask what the visit costs and what your plan covers on that same call, before you drive anywhere.",
    patientNeeds: [
      "hearing tests near New Rochelle",
      "hearing aid fitting",
      "hearing aid repair",
      "tinnitus support"
    ]
  },
  {
    slug: "hartsdale",
    name: "Hartsdale",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["White Plains", "Scarsdale", "Ardsley", "Greenburgh"],
    localContext:
      "Hartsdale patients are booked into the Harrison office, the closer of the practice's two locations, for hearing tests, hearing aid fittings, and hearing protection.",
    travelNote:
      "Call (914) 949-0034 for a weekday slot at Harrison, any time between 8:30 and 5:00. Bring your current hearing aids and their chargers even if you think they are finished. Some of what looks like device failure is wax in the receiver.",
    patientNeeds: [
      "hearing testing",
      "hearing aid support and repair",
      "tinnitus appointments",
      "custom protection"
    ]
  },
  {
    slug: "mount-kisco",
    name: "Mt. Kisco",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    nearby: ["Bedford", "Katonah", "Chappaqua", "Somers"],
    localContext:
      "Mt. Kisco patients go north to the Somers office at 325 NY 100 for hearing testing, hearing aid fittings, and repairs.",
    travelNote:
      "Somers is the nearer of the practice's two offices for Mt. Kisco. It is open Monday through Wednesday and Friday morning, closed Thursday, on (914) 556-6720. If you are arranging the appointment for a parent, book it for a Monday or Tuesday when the office runs a full day.",
    patientNeeds: [
      "hearing aids near Mt. Kisco",
      "diagnostic hearing testing",
      "hearing aid repair",
      "tinnitus appointments"
    ]
  },
  {
    slug: "yorktown-heights",
    name: "Yorktown Heights",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    nearby: ["Somers", "Mahopac", "Katonah", "Cortlandt Manor"],
    localContext:
      "Yorktown Heights patients use the Somers office on NY 100 for evaluations, hearing aid consultations, and follow-up appointments.",
    travelNote:
      "Somers is the closer office. It is closed Thursdays and closes at 2:30 on Fridays, so call (914) 556-6720 early in the week. Repairs and cleanings are quicker visits than fittings, and it is worth saying which one you need.",
    patientNeeds: ["hearing testing", "hearing aid fitting", "hearing aid repair", "custom hearing protection"]
  },
  {
    slug: "katonah",
    name: "Katonah",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    nearby: ["Bedford", "Somers", "Mt. Kisco", "North Salem"],
    localContext:
      "Katonah patients are seen at the Somers office at 325 NY 100, which covers testing, hearing aids, hearing protection, and tinnitus appointments.",
    travelNote:
      "Somers is the nearer of the two offices for Katonah and Bedford. Monday through Wednesday and Friday morning, on (914) 556-6720. Dr. Ratner is a former musician and handles musician-focused fittings and plugs, which is worth asking about if Caramoor is on your calendar.",
    patientNeeds: [
      "hearing tests",
      "hearing aid consultations",
      "musician and custom hearing protection",
      "tinnitus appointments"
    ]
  },
  {
    slug: "bedford",
    name: "Bedford",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    nearby: ["Katonah", "Bedford Hills", "Mt. Kisco", "Pound Ridge"],
    localContext:
      "Bedford patients drive to the Somers office at 325 NY 100 for hearing tests, hearing aid selection, tinnitus appointments, and custom earplugs.",
    travelNote:
      "Somers is the closer of the two offices, on (914) 556-6720. It takes appointments Monday through Wednesday and on Friday morning, and it is closed Thursdays. Harrison is open five days if the week only leaves you a Thursday.",
    patientNeeds: [
      "diagnostic hearing testing",
      "hearing aid evaluations",
      "tinnitus appointments",
      "custom ear protection"
    ]
  },
  {
    slug: "chappaqua",
    name: "Chappaqua",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    nearby: ["Pleasantville", "Mt. Kisco", "Armonk", "White Plains"],
    localContext:
      "Chappaqua sits between the practice's two offices. Somers, at 325 NY 100, is the one Chappaqua patients are usually booked into, and it handles testing, fittings, and repairs.",
    travelNote:
      "Somers is closed Thursdays and closes at 2:30 on Fridays, on (914) 556-6720. Harrison is open weekdays on (914) 949-0034. Chappaqua is close enough to both that the deciding factor is usually your calendar, not the map, so pick the one that fits and say so when you call.",
    patientNeeds: [
      "hearing aid consultations",
      "diagnostic hearing testing",
      "hearing aid repair",
      "tinnitus appointments"
    ]
  },
  {
    slug: "armonk",
    name: "Armonk",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Purchase", "Chappaqua", "Bedford", "White Plains"],
    localContext:
      "Armonk patients are booked into the Harrison office at 550 Mamaroneck Ave, Suite 407, which is the closer of the practice's two locations.",
    travelNote:
      "Harrison books weekdays from 8:30 to 5:00 on (914) 949-0034. If you are coming down I-684 between meetings, ask for the first appointment of the day. Testing is quieter and faster before the office fills.",
    patientNeeds: [
      "hearing testing",
      "hearing aids and Bluetooth setup",
      "hearing protection",
      "tinnitus appointments"
    ]
  },
  {
    slug: "pleasantville",
    name: "Pleasantville",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Chappaqua", "Briarcliff Manor", "Mt. Kisco", "Hawthorne"],
    localContext:
      "Pleasantville patients are seen at the Harrison office at 550 Mamaroneck Ave for diagnostic hearing care, hearing aids, and tinnitus appointments.",
    travelNote:
      "Pleasantville falls between the two offices. Harrison is the one listed for it and is open weekdays on (914) 949-0034; Somers, on (914) 556-6720, may be the easier drive depending on which side of town you live on. Say which you want when you call.",
    patientNeeds: [
      "hearing tests",
      "hearing aid fitting",
      "hearing aid repair",
      "custom hearing protection"
    ]
  },
  {
    slug: "greenwich",
    legacyPath: "/greenwich-ct",
    name: "Greenwich",
    state: "CT",
    countySlug: "fairfield-county-ct",
    nearestOffice: "harrison",
    nearby: ["Rye", "Port Chester", "Old Greenwich", "Stamford"],
    localContext:
      "Greenwich patients cross into New York for care. The Harrison office at 550 Mamaroneck Ave, Suite 407, is the nearest practice location and covers testing, hearing aids, tinnitus, and repairs.",
    travelNote:
      "Harrison is open weekdays, 8:30 to 5:00, on (914) 949-0034. Because this is a New York practice, ask about your plan's out-of-state and out-of-network rules on the same call, before the appointment rather than after it.",
    patientNeeds: [
      "hearing tests near Greenwich",
      "hearing aid fitting",
      "tinnitus appointments",
      "hearing aid repair"
    ]
  },
  {
    slug: "mahopac",
    name: "Mahopac",
    state: "NY",
    countySlug: "putnam-county-ny",
    nearestOffice: "somers",
    nearby: ["Somers", "Carmel", "Yorktown Heights", "Baldwin Place"],
    localContext:
      "Mahopac patients come down NY 100 to the Somers office at 325 NY 100 for hearing tests, hearing aid fittings, tinnitus appointments, and repairs.",
    travelNote:
      "Somers is the nearer of the practice's two offices for southern Putnam. Monday through Wednesday all day, Friday until 2:30, closed Thursday, on (914) 556-6720. Bring the hearing aids you already own even if they are old, because what you liked and did not like about them shapes the next fitting.",
    patientNeeds: [
      "hearing testing near Mahopac",
      "hearing aids",
      "hearing aid repair",
      "custom hearing protection for boats and yard work"
    ]
  },
  {
    slug: "greenburgh",
    name: "Greenburgh",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    metaTitle: "Hearing Aid Repair and Evaluation in Greenburgh, NY",
    nearby: ["Hartsdale", "Elmsford", "Ardsley", "Dobbs Ferry", "Tarrytown", "Irvington", "Hastings-on-Hudson"],
    localContext:
      "Greenburgh is a town of six villages. Our Harrison office, 550 Mamaroneck Ave, Suite 407, serves the whole town for hearing tests and repairs.",
    travelNote:
      "Harrison is about 14 minutes from the middle of Greenburgh, and Somers is about 36 minutes. These are estimates for October 2026 in normal traffic. Villages on the river are farther from Harrison, so check the page for your village. Harrison is open weekdays, 8:30 to 5:00, on (914) 949-0034.",
    patientNeeds: [
      "hearing aid repair and cleaning",
      "hearing aid evaluations",
      "hearing tests",
      "tinnitus appointments"
    ]
  },
  {
    slug: "elmsford",
    name: "Elmsford",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    metaTitle: "Hearing Aids and Hearing Aid Repair in Elmsford, NY",
    nearby: ["Greenburgh", "Hartsdale", "Ardsley", "Tarrytown", "White Plains"],
    localContext:
      "Elmsford patients go to our Harrison office, about 16 minutes away, for in-the-ear and other hearing aids, hearing tests, and hearing aid repair.",
    travelNote:
      "Harrison is about 16 minutes from Elmsford. Somers is about 35 minutes. These are estimates for October 2026 in normal traffic. Harrison is open weekdays, 8:30 to 5:00, on (914) 949-0034. If your hearing aids need repair, call first with the make and model.",
    patientNeeds: [
      "in-the-ear and custom hearing aids",
      "hearing aid repair near Elmsford",
      "hearing tests",
      "hearing aid cleaning and parts"
    ]
  },
  {
    slug: "ardsley",
    name: "Ardsley",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    metaTitle: "Audiologist and Hearing Test in Ardsley, NY",
    nearby: ["Greenburgh", "Hartsdale", "Elmsford", "Irvington", "Dobbs Ferry"],
    localContext:
      "Ardsley patients see a Doctor of Audiology at our Harrison office, about 19 minutes away, for hearing tests, hearing aids and follow-up care.",
    travelNote:
      "Harrison is about 19 minutes from Ardsley. Somers is about 41 minutes. These are estimates for October 2026 in normal traffic. Harrison is open weekdays, 8:30 to 5:00, on (914) 949-0034. Ask for a time that fits around work or school drop-off.",
    patientNeeds: [
      "hearing tests",
      "hearing aids and fittings",
      "audiologist visits for adults",
      "hearing aid follow-up"
    ]
  },
  {
    slug: "yonkers",
    name: "Yonkers",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    metaTitle: "Audiologist and Hearing Aids in Yonkers, NY",
    nearby: ["Hartsdale", "Greenburgh", "Scarsdale", "Ardsley", "White Plains"],
    localContext:
      "Yonkers is the largest city in Westchester. Our Harrison office is about 19 minutes away for hearing tests, hearing aids, tinnitus care and repairs.",
    travelNote:
      "Harrison is about 19 minutes from the center of Yonkers. Somers is about 51 minutes, so Harrison is the practical choice. These are estimates for October 2026 in normal traffic and will differ across a large city. Harrison is open weekdays, 8:30 to 5:00, on (914) 949-0034.",
    patientNeeds: [
      "hearing aids in Yonkers",
      "choosing an audiologist",
      "hearing tests",
      "hearing aid repair and tinnitus appointments"
    ]
  },
  {
    slug: "dobbs-ferry",
    name: "Dobbs Ferry",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    metaTitle: "Audiologist and Hearing Aids in Dobbs Ferry, NY",
    nearby: ["Greenburgh", "Hastings-on-Hudson", "Irvington", "Ardsley", "Tarrytown"],
    localContext:
      "Dobbs Ferry patients visit our Harrison office, about 22 minutes away, for a hearing test, hearing aids and an audiologist who explains the results.",
    travelNote:
      "Harrison is about 22 minutes from Dobbs Ferry. Somers is about 44 minutes. These are estimates for October 2026 in normal traffic. Harrison is open weekdays, 8:30 to 5:00, on (914) 949-0034.",
    patientNeeds: [
      "hearing tests",
      "hearing aids",
      "audiologist visits",
      "hearing aid repair and cleaning"
    ]
  },
  {
    slug: "tarrytown",
    name: "Tarrytown",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    metaTitle: "Hearing Test in Tarrytown, NY | Audiologist",
    nearby: ["Sleepy Hollow", "Irvington", "Elmsford", "Greenburgh", "Dobbs Ferry"],
    localContext:
      "To book a hearing test from Tarrytown, call our Harrison office. It is about 22 minutes away, and a Doctor of Audiology explains your results.",
    travelNote:
      "Harrison is about 22 minutes from Tarrytown. Somers is about 37 minutes. These are estimates for October 2026 in normal traffic. Harrison is open weekdays, 8:30 to 5:00, on (914) 949-0034. Somers is closed on Thursdays.",
    patientNeeds: [
      "booking a hearing test",
      "hearing protection for concerts and music",
      "hearing aids",
      "tinnitus appointments"
    ]
  },
  {
    slug: "hastings-on-hudson",
    name: "Hastings-on-Hudson",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    metaTitle: "Tinnitus and Hearing Aids in Hastings-on-Hudson, NY",
    nearby: ["Dobbs Ferry", "Greenburgh", "Yonkers", "Ardsley", "Irvington"],
    localContext:
      "Hastings-on-Hudson patients see our Harrison audiologists, about 23 minutes away, for ringing in the ears, hearing tests and buying hearing aids.",
    travelNote:
      "Harrison is about 23 minutes from Hastings-on-Hudson. Somers is about 45 minutes. These are estimates for October 2026 in normal traffic. Harrison is open weekdays, 8:30 to 5:00, on (914) 949-0034.",
    patientNeeds: [
      "ringing in the ears (tinnitus) appointments",
      "where to buy hearing aids",
      "hearing tests",
      "hearing aid repair"
    ]
  },
  {
    slug: "briarcliff-manor",
    name: "Briarcliff Manor",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    metaTitle: "Audiologist and Signia Hearing Aids, Briarcliff Manor",
    nearby: ["Ossining", "Sleepy Hollow", "Pleasantville", "Chappaqua", "Croton-on-Hudson"],
    localContext:
      "Briarcliff Manor is about 25 minutes from both our Harrison and Somers offices. Choose by hours, then book a hearing test or Signia fitting.",
    travelNote:
      "Both offices are about 25 minutes from Briarcliff Manor: Harrison 24 minutes and Somers 25. These are estimates for October 2026 in normal traffic. Harrison is open weekdays, 8:30 to 5:00, on (914) 949-0034. Somers is open Monday to Wednesday and Friday until 2:30, on (914) 556-6720.",
    patientNeeds: [
      "Signia hearing aid fitting",
      "choosing an audiologist",
      "hearing tests",
      "hearing aid follow-up at the office you prefer"
    ]
  },
  {
    slug: "sleepy-hollow",
    name: "Sleepy Hollow",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    metaTitle: "Tinnitus and Hearing Aid Repair in Sleepy Hollow, NY",
    nearby: ["Tarrytown", "Briarcliff Manor", "Irvington", "Ossining", "Elmsford"],
    localContext:
      "Sleepy Hollow patients visit our Harrison office, about 24 minutes away, for ringing in the ears, hearing tests and hearing aid repair.",
    travelNote:
      "Harrison is about 24 minutes from Sleepy Hollow. Somers is about 35 minutes. These are estimates for October 2026 in normal traffic. Harrison is open weekdays, 8:30 to 5:00, on (914) 949-0034. Somers is closed on Thursdays.",
    patientNeeds: [
      "ringing in the ears (tinnitus) appointments",
      "hearing aid repair",
      "hearing tests",
      "earwax checks"
    ]
  },
  {
    slug: "irvington",
    name: "Irvington",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    metaTitle: "Audiologist and Hearing Aid Fitting in Irvington, NY",
    nearby: ["Tarrytown", "Dobbs Ferry", "Ardsley", "Greenburgh", "Hastings-on-Hudson"],
    localContext:
      "Irvington patients go to our Harrison office, about 25 minutes away, for a hearing aid fitting checked in the ear and follow-up visits after.",
    travelNote:
      "Harrison is about 25 minutes from Irvington. Somers is about 45 minutes. These are estimates for October 2026 in normal traffic. Harrison is open weekdays, 8:30 to 5:00, on (914) 949-0034.",
    patientNeeds: [
      "hearing aid fitting",
      "choosing an audiologist",
      "hearing tests",
      "hearing aid follow-up and adjustments"
    ]
  },
  {
    slug: "ossining",
    name: "Ossining",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    metaTitle: "Audiologist and Hearing Test in Ossining, NY",
    nearby: ["Briarcliff Manor", "Croton-on-Hudson", "Sleepy Hollow", "Yorktown Heights", "Pleasantville"],
    localContext:
      "Ossining patients can reach our Somers office in about 28 minutes, or Harrison in about 31, for hearing tests, hearing aids and repairs.",
    travelNote:
      "Somers is about 28 minutes from Ossining and Harrison is about 31. These are estimates for October 2026 in normal traffic. Somers is open Monday to Wednesday, closed Thursday, and open Friday until 2:30, on (914) 556-6720. Harrison is open weekdays, 8:30 to 5:00, on (914) 949-0034.",
    patientNeeds: [
      "hearing tests",
      "best hearing aids for your hearing loss",
      "choosing between two offices",
      "hearing aid repair"
    ]
  },
  {
    slug: "croton-on-hudson",
    name: "Croton-on-Hudson",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    metaTitle: "Audiologist and Hearing Tests in Croton-on-Hudson, NY",
    nearby: ["Cortlandt Manor", "Ossining", "Briarcliff Manor", "Yorktown Heights", "Somers"],
    localContext:
      "Croton-on-Hudson patients drive about 30 minutes to our Somers office for an audiologist, a hearing test and hearing aids. Harrison is about 38.",
    travelNote:
      "Somers is about 30 minutes from Croton-on-Hudson and Harrison is about 38. These are estimates for October 2026 in normal traffic. Somers is open Monday to Wednesday, closed Thursday, and open Friday until 2:30, on (914) 556-6720.",
    patientNeeds: [
      "audiologist visits",
      "hearing tests",
      "hearing aids",
      "hearing aid repair and cleaning"
    ]
  },
  {
    slug: "cortlandt-manor",
    name: "Cortlandt Manor",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    metaTitle: "Tinnitus and Hearing Aid Repair in Cortlandt Manor, NY",
    nearby: ["Croton-on-Hudson", "Yorktown Heights", "Ossining", "Somers", "Mahopac"],
    localContext:
      "Cortlandt Manor patients reach our Somers office in about 29 minutes for tinnitus appointments, hearing tests and hearing aid repair.",
    travelNote:
      "Somers is about 29 minutes from Cortlandt Manor and Harrison is about 46. These are estimates for October 2026 in normal traffic. Somers is open Monday to Wednesday, closed Thursday, and open Friday until 2:30, on (914) 556-6720.",
    patientNeeds: [
      "tinnitus (ringing in the ears) appointments",
      "hearing aid repair",
      "hearing tests",
      "hearing aid cleaning and parts"
    ]
  }
];

export const cityLocalFlavorBySlug: Record<string, AreaCityLocalFlavor> = {
  harrison: {
    heading: "Hearing Care in Harrison, from Mamaroneck Avenue to the Purchase Line",
    intro:
      "Most people book the first appointment because of one room. A restaurant on Mamaroneck Avenue where every voice runs together. A conference room where the person at the far end is a mumble. The audiologist tests in a quiet booth first, then asks which rooms are the problem, because those rooms are what the fitting gets checked against.",
    listeningEnvironments: [
      {
        title: "Restaurant tables on Mamaroneck Avenue",
        body:
          "Hard floors, low ceilings, tables close together. This is the room that sends most people in, and it is also the hardest one to fix. Be blunt at the fitting about how much better you expect it to get, and the audiologist will be blunt back."
      },
      {
        title: "Loud hobbies and ringing that follows them",
        body:
          "Range time, power tools, and amplified music all leave ringing behind. Custom plugs are taken from an ear impression in the office. If the ringing outlasts the noise by days, that is worth a tinnitus appointment rather than a wait-and-see."
      },
      {
        title: "Exam rooms and reception desks",
        body:
          "Harrison has a lot of medical offices, and a lot of important information gets said across a desk by someone looking at a screen. If you have already missed a dosage instruction, say so at the hearing test."
      },
      {
        title: "The house, with the television on",
        body:
          "The argument about the television volume is almost always about consonants rather than loudness. A hearing test tells you which."
      }
    ],
    hearingPriorities: [
      "speech in restaurants and family rooms",
      "same-town follow-up for cleaning, repairs, and reprogramming",
      "custom hearing protection made from an impression taken in the office"
    ]
  },
  somers: {
    heading: "Hearing Care for Somers, Heritage Hills, and Northern Westchester",
    intro:
      "Somers is quieter than lower Westchester, and that changes what people complain about. Fewer restaurants. More tinnitus at night, more trouble with a spouse talking from the next room, more hearing aids that quit on a Sunday. The office at 325 NY 100 is there so the last one stays a local errand.",
    listeningEnvironments: [
      {
        title: "A voice from the next room",
        body:
          "Somebody talks to you from the kitchen while you are in the den. You catch the rhythm and none of the words. That is a classic high-frequency pattern. It shows up plainly on an audiogram, which is why the test is worth doing before you buy anything."
      },
      {
        title: "Yard work, workshops, and the ringing after",
        body:
          "A gas mower sits around 90 decibels and a chainsaw runs well past it. Custom plugs are molded from an impression taken in the office and they let you hear someone shout, which is why people actually wear them."
      },
      {
        title: "Heritage Hills and group activities",
        body:
          "A club meeting or an exercise class puts eight people in a room with a hard floor. Group settings expose hearing loss earlier than one-on-one conversation does. It is often why somebody else makes the call."
      }
    ],
    hearingPriorities: [
      "hearing tests without driving south",
      "tinnitus appointments with a certified clinician",
      "hearing aid repairs and cleanings on NY 100",
      "custom protection for tools, hunting, and recreation"
    ]
  },
  "white-plains": {
    heading: "Hearing Care for Downtown White Plains and Central Westchester",
    intro:
      "White Plains has the loudest ordinary week in the county. A courthouse corridor, a hospital waiting room, a restaurant on Mamaroneck Avenue, and a Harlem Line platform can all happen before dinner. By then, volume is rarely the problem. Clarity is, and a diagnostic test measures the two separately.",
    listeningEnvironments: [
      {
        title: "Downtown restaurants at seven o'clock",
        body:
          "Full rooms, hard surfaces, music over the top. Hearing aids handle this better than they used to and still not perfectly. The fitting is where you find out what your particular hearing loss allows."
      },
      {
        title: "Concerts, clubs, and the ringing afterward",
        body:
          "A loud night that leaves your ears ringing the next morning is worth a test, not a shrug. Custom musician's plugs cut the level without dulling the music, and they are made from an impression taken in the office."
      },
      {
        title: "Meetings, courtrooms, and offices",
        body:
          "Professional listening is unforgiving. Nobody repeats a number twice in a deposition. A remote microphone clipped to whoever is talking often does more than a technology upgrade."
      },
      {
        title: "Metro-North platforms and parking garages",
        body:
          "Platform announcements are compressed, echoed, and never repeated. A garage adds a second echo on top. Phone streaming picks up the alerts the loudspeaker loses."
      },
      {
        title: "Medical appointments",
        body:
          "White Plains Hospital and the medical offices around it generate a lot of conversations you cannot afford to half-hear. Bring someone with you, and bring your hearing aids in working order."
      }
    ],
    hearingPriorities: [
      "diagnostic testing that separates volume from clarity",
      "restaurant and crowd programs",
      "remote microphones for meetings and courtrooms",
      "phone and Bluetooth setup done in the office rather than at home"
    ]
  },
  scarsdale: {
    heading: "Hearing Support for Scarsdale Village, Neighborhoods, and Family Life",
    intro:
      "Hearing loss in Scarsdale usually shows up socially long before anyone calls an audiologist. You stop contributing at a dinner. You ask a grandchild to repeat things twice. People wait years on that. The audiologist will not lecture you about the wait, but an earlier test gives a clearer baseline to measure against later.",
    listeningEnvironments: [
      {
        title: "Dinner tables and village cafes",
        body:
          "Six people, one table, two conversations at once. The test that matters here is speech in noise. It is not the beeps everyone remembers from school, and it predicts the dinner table far better."
      },
      {
        title: "Quiet houses at night",
        body:
          "Tinnitus gets louder as the room gets quieter, which is why it owns the hour before sleep. A hearing test comes first, because it tells the audiologist whether hearing loss is feeding it."
      }
    ],
    hearingPriorities: [
      "speech-in-noise testing rather than a tone screening",
      "hearing aid settings for dinner tables",
      "tinnitus appointments"
    ]
  },
  rye: {
    heading: "Hearing Care for Rye's Sound Shore, Parks, and Family Activities",
    intro:
      "Rye is about ten minutes from the office, and the questions Rye patients bring in are mostly about water. Whether hearing aids survive a summer on the Sound. Whether the wind at Rye Town Park will make conversation impossible. Both get answered at the consultation, and the answers differ by model.",
    listeningEnvironments: [
      {
        title: "Wind off the Sound",
        body:
          "Wind hitting a microphone is a roar, and it buries speech more completely than a restaurant does. Wind-noise management is a real feature that differs sharply between models, so ask to compare before you choose."
      },
      {
        title: "Boat engines, tools, and the ringing after",
        body:
          "An outboard at speed is loud enough to matter over a season. Custom plugs are molded in the office. If a day on the water leaves you ringing that night, book a tinnitus appointment rather than waiting to see whether it settles."
      },
      {
        title: "Humidity and what it does to a hearing aid",
        body:
          "Salt air and sweat are hard on receivers and microphones. A nightly drying routine is the simplest thing that extends a device's life."
      },
      {
        title: "Playland, parks, and family days",
        body:
          "Outdoor noise arrives from every direction at once, which is the one situation a directional microphone is worst at, so expect to switch programs."
      }
    ],
    hearingPriorities: [
      "wind and moisture planning before you buy",
      "speech clarity in restaurants and outdoors",
      "cleaning and repair ten minutes away in Harrison"
    ]
  },
  mamaroneck: {
    heading: "Hearing Solutions for Mamaroneck Harbor, the Sound Shore, and Village Life",
    intro:
      "Ask a Mamaroneck patient where hearing is hardest and the answer is usually one specific table at one specific restaurant on Mamaroneck Avenue. That is more useful than an audiogram on its own. The audiologist writes the room down and checks the fitting against it. Worth knowing before you call: the same avenue runs north into Harrison, and the office is at number 550, so for most of the village it is the nearer of the two.",
    listeningEnvironments: [
      {
        title: "Village restaurants",
        body:
          "Background music and close tables turn one conversation into four. A hearing aid program set for this room is a different setting from the one you wear at home, and switching between them should be automatic. Name the restaurant at the fitting, so the program is built against a room you actually sit in rather than against a category."
      },
      {
        title: "Boats, docks, and salt air",
        body:
          "Harbor Island in July is wind, engines, and humidity. Ask about moisture-resistant models and drying routines at the consultation instead of after the first failure. Salt air works on receivers and microphones from the inside, and moisture is one of the most common reasons a hearing aid stops working. It is manageable rather than disqualifying, but it should shape which model gets recommended."
      },
      {
        title: "The train and the car",
        body:
          "Announcements and car conversation share one problem, which is that the talker is never facing you. Platform announcements on the New Haven Line are compressed and said once, and the thruway lays a constant low band of noise across the south of the village. Neither stops you hearing outright, which is why people discount them, and both make listening tiring by the end of the day."
      },
      {
        title: "The Emelin, and anywhere you sit still and listen",
        body:
          "A seated auditorium is a different problem from a restaurant and often has a different solution. Many venues run an assistive listening system that sends sound to a receiver at the door or, if your hearing aids have a telecoil, straight to your ears. Ask what the venue offers and whether your aids can use it. That is the difference between following a performance and reconstructing it on the drive home."
      }
    ],
    hearingPriorities: [
      "restaurant and group conversation clarity",
      "moisture care for devices used near the harbor",
      "custom ear protection for time on the water"
    ],
    faqs: [
      {
        question: "Is the Harrison office really on Mamaroneck Avenue?",
        answer:
          "Yes, at 550 Mamaroneck Avenue, Suite 407, a few minutes north of the village end of the same road. For most Mamaroneck patients it is the nearer of the practice's two offices. It books weekdays from 8:30 to 5:00 on (914) 949-0034."
      },
      {
        question: "Does living near the water shorten the life of hearing aids?",
        answer:
          "It can. Salt air and humidity are hard on receivers and microphones, and moisture is one of the most common reasons a device stops working. A drying kit, a consistent storage habit, and regular cleaning at the office handle most of it. Say where you keep them at the fitting, because it affects which model is worth recommending."
      },
      {
        question: "Can I get earplugs made for swimming or boating?",
        answer:
          "Yes. They are taken from an impression of your own ear so they seal instead of working loose, and they are a different product from musician or shooting filters. If you spend the summer on the water, mention it when you book and the impression can be taken at the same appointment."
      }
    ]
  },
  larchmont: {
    heading: "Hearing Care for Larchmont Harbor, Manor Park, and Village Conversations",
    intro:
      "Larchmont hearing complaints tend to be quiet ones. A voice on a walk by the water that keeps getting lost in the wind. A grandchild's voice, which sits high and soft, right where age-related hearing loss usually starts. Both ends of that range get tested. Come with two or three specific moments rather than a general sense that things have got harder, because the audiogram measures the ear and the fitting gets built against the rooms you name.",
    listeningEnvironments: [
      {
        title: "Soft, high voices",
        body:
          "Children's voices and consonants like s, f, and th live in the high frequencies, which is where age-related hearing loss starts. Losing them feels like people are mumbling rather than like the world got quiet. That distinction is what the audiogram is for. It is also why people arrive convinced their own hearing is fine and the problem is everyone else's diction."
      },
      {
        title: "Wind on the walks by the water",
        body:
          "Wind across a microphone is a roar. Models differ enormously in how well they suppress it, and that difference is worth asking about directly. If a walk along the shore is part of most days, treat wind handling as a feature you are choosing for rather than one you find out you lack."
      },
      {
        title: "Palmer Avenue and the village rooms",
        body:
          "A short row of shops and restaurants means hard surfaces and short distances, which sounds like it should be easy and is not. Close tables put three conversations inside the same few feet. Name the room at the fitting and the program is built against that room rather than against a category."
      },
      {
        title: "Salt air, and the drawer",
        body:
          "Larchmont sits on the Sound, and humidity is one of the most common reasons a hearing aid stops working, so a drying routine matters more here than it does inland. The other common reason is simpler. A device that never quite got comfortable ends up in a drawer. Say so early, because the follow-up visit exists to fix exactly that."
      }
    ],
    hearingPriorities: [
      "diagnostic testing for high-frequency loss",
      "wind handling for waterfront walks",
      "cafe and family conversation settings",
      "cleaning and maintenance for humidity exposure"
    ],
    faqs: [
      {
        question: "Which office do Larchmont patients use?",
        answer:
          "Harrison, at 550 Mamaroneck Avenue, Suite 407. It is a short drive up through Mamaroneck and it is the nearer of the practice's two offices. Appointments run weekdays from 8:30 to 5:00 on (914) 949-0034."
      },
      {
        question: "My grandchildren sound like they are mumbling. Is that a hearing problem?",
        answer:
          "Often, yes, and it is a specific one. Children's voices and the consonants that carry meaning sit in the high frequencies, which is where age-related loss begins. The result is speech you can hear but cannot resolve. A diagnostic test shows whether that is what is happening rather than leaving it a matter of opinion at the dinner table."
      },
      {
        question: "Do I leave the first appointment with hearing aids?",
        answer:
          "No, and you should be wary of anywhere that says otherwise. The first visit is diagnostic: history, otoscopy, air and bone thresholds, and speech testing, with the results explained to you the same day. Whether hearing aids are the right answer is a conversation that happens after there is something to look at."
      }
    ]
  },
  "port-chester": {
    heading: "Hearing Care for Port Chester's Restaurants, Music Venues, and Border-Area Commutes",
    intro:
      "Port Chester is loud in a way the rest of the Sound Shore is not. The Capitol Theatre puts amplified music into the middle of the village, and the restaurants around it run full rooms and hard surfaces. A good half of the hearing conversations here are about protecting what you have rather than amplifying it. That is a better conversation to have at forty than at seventy.",
    listeningEnvironments: [
      {
        title: "Restaurant rooms and street noise",
        body:
          "A busy dining room defeats more hearing aids than any other everyday setting. Speech-in-noise testing at the evaluation predicts how you will actually do there, which a tone test cannot. Ask for that result in plain words rather than as a score, because what you want to know is whether the room will be manageable."
      },
      {
        title: "Live music and the ringing that follows it",
        body:
          "Ringing or muffled hearing the morning after a show is a warning, not a souvenir. Custom musician's plugs lower the whole level evenly so the music still sounds like music, which is why they get worn and foam ends up in a pocket. If you work the room rather than visit it, get the impression taken this month."
      },
      {
        title: "I-95 and the New Haven Line",
        body:
          "Traffic and platform noise are constant and low, and adaptive settings cut the fatigue they cause more than they improve the words. That tiredness is a real symptom rather than something to absorb, and it is worth raising at the appointment."
      },
      {
        title: "Two languages in one conversation",
        body:
          "Following a second language takes more of the signal than following your first, so hearing loss costs you more there. Say which languages you use when you book, and Dr. Dold is proficient in American Sign Language if that is relevant to your family."
      }
    ],
    hearingPriorities: [
      "custom and musician hearing protection",
      "speech-in-noise testing before a hearing aid decision",
      "tinnitus appointments after loud exposure",
      "repair and cleaning for devices worn in dusty, loud work"
    ],
    faqs: [
      {
        question: "I work shows at the Capitol Theatre. What protection do I actually need?",
        answer:
          "Custom musician's plugs rather than foam. They are molded from an impression of your own ear and use a filter that drops the whole level evenly, so the mix still sounds like the mix and you can still talk to the person next to you. Foam muffles the top end, which is why people take it out halfway through a set. Dr. Ratner is a former musician and fits these regularly."
      },
      {
        question: "My ears ring the morning after a loud night. Is that damage?",
        answer:
          "It is a signal that the exposure was enough to matter. Ringing and muffled hearing often settle within a day, but repeated episodes are associated with permanent change, and the ones that do not settle need looking at sooner rather than later. If it is happening regularly, book a hearing test and get protection made."
      },
      {
        question: "Does hearing loss make a second language harder to follow?",
        answer:
          "Yes, noticeably. Understanding speech in a language you learned later relies more on catching every sound, because you have less practice filling in gaps from context. The same degree of hearing loss therefore costs you more in that language than in your first. Mention which languages you use day to day when you book, because it affects what gets tested and how the fitting is checked."
      }
    ]
  },
  "rye-brook": {
    heading: "Hearing Support for Rye Brook Families, Parks, and Nearby Office Corridors",
    intro:
      "Nobody in Rye Brook books a hearing test because of a road. They book it after a table of ten at a holiday dinner, or because somebody else finally said something out loud. That is the normal way this starts, and it is a reasonable reason to call. It is also worth bringing the person who said it.",
    listeningEnvironments: [
      {
        title: "Big tables and family gatherings",
        body:
          "Group conversation is where hearing loss shows first, because you cannot ask ten people to repeat themselves. Bring the family member who noticed. Their account of what you miss is usually more accurate than yours, and the audiologist will ask them directly."
      },
      {
        title: "Meetings, calls, and headsets",
        body:
          "Conference audio is compressed and often bad to begin with. Hearing aids that stream the call directly cut out the room entirely, and the audiologist will pair them with your phone in the office rather than leaving you to the manual. Bring the phone and laptop you actually use."
      },
      {
        title: "The airport a few minutes north",
        body:
          "Westchester County Airport sits just up the road, and people who live under the pattern stop registering it within a year of moving in. Not noticing noise is not the same as not being exposed to it. A baseline test gives you a number, and every later test is read against that number rather than against an assumption."
      },
      {
        title: "The follow-up, which is where fittings get fixed",
        body:
          "Nobody walks out of a first fitting with it right. The settings are a starting point, checked against your own rooms once you have lived in them for a week or two. The visit where you say what is still wrong is the one that does most of the work, so book it rather than deciding to see how it goes."
      }
    ],
    hearingPriorities: [
      "hearing evaluations for group-conversation difficulty",
      "fittings and follow-up at the Harrison office",
      "phone and Bluetooth pairing done in the office",
      "custom hearing protection",
      "repairs without a long drive"
    ],
    faqs: [
      {
        question: "My family says I have a hearing problem and I do not think I do. Who is right?",
        answer:
          "That disagreement is common and a test settles it in an afternoon. People with early high-frequency loss genuinely do hear speech; what they lose is the clarity that separates similar words, so it feels like everyone else has started mumbling. Bring whoever raised it. Their description of when you miss things is part of the assessment."
      },
      {
        question: "How far is the Harrison office from Rye Brook?",
        answer:
          "A few minutes down through Port Chester or Rye, and it is the closer of the practice's two offices. Harrison books weekdays from 8:30 to 5:00 on (914) 949-0034. Somers, the northern office, is a considerably longer drive and is rarely the easier choice from here."
      },
      {
        question: "Will hearing aids help with conference calls?",
        answer:
          "Usually more than they help in a restaurant. A call streamed straight into both hearing aids skips the room, so air conditioning and keyboard noise stop competing with the talker. The pairing is worth setting up and testing in the office with your own devices rather than at your desk on a Monday morning."
      }
    ]
  },
  purchase: {
    heading: "Hearing Care for Purchase Campuses, Corporate Settings, and Nearby Families",
    intro:
      "Purchase is offices and a college campus, so hearing trouble here turns up at work before it turns up at dinner. A lecture hall from row twelve. A conference call with three people talking at once. Remote microphones and direct streaming handle both, and the audiologist demonstrates them in the room rather than describing them.",
    listeningEnvironments: [
      {
        title: "Lecture halls and performance spaces",
        body:
          "Distance and reverberation beat hearing aids more reliably than noise does. A microphone on the speaker is the fix. Programming alone will not get you there, and no amount of paying more for a device changes the physics of sitting twelve rows back."
      },
      {
        title: "Conference rooms and video calls",
        body:
          "Hybrid meetings mix a bad room microphone with a compressed connection. Streaming the call straight into both ears removes the room from the equation. Bring the hardware you actually work on so the pairing is tested here rather than discovered to be awkward later."
      },
      {
        title: "The drive on I-684 and I-287",
        body:
          "Road noise makes listening tiring even when you follow every word, and that fatigue is worth raising at the appointment. A passenger facing forward at speed is one of the harder everyday listening tasks there is, and a remote microphone solves it more completely than any program change."
      },
      {
        title: "Open floors and the end of the day",
        body:
          "Open-plan offices run a low continuous background that never quite stops, and the cost usually shows up as tiredness rather than as missed words. If you arrive home with nothing left for conversation, say so at the appointment. That is a symptom of effortful listening, not a personality trait."
      }
    ],
    hearingPriorities: [
      "remote microphones for lectures and meetings",
      "Bluetooth and computer audio set up in the office",
      "custom hearing protection for performance and rehearsal spaces",
      "tinnitus appointments"
    ],
    faqs: [
      {
        question: "Is the Harrison office far from Purchase?",
        answer:
          "No. Purchase sits inside the Town of Harrison, and the office at 550 Mamaroneck Avenue, Suite 407 is the one Purchase patients are booked into. It runs weekdays from 8:30 to 5:00 on (914) 949-0034."
      },
      {
        question: "I struggle in lecture halls. Will better hearing aids fix that?",
        answer:
          "Usually not on their own. Past a few feet, a hearing aid microphone collects as much room as it does speaker, and reverberation does the rest. The reliable fix is a remote microphone worn by or placed near the person talking, which sends their voice straight to your ears. Ask to try one before spending money on a device upgrade that will not address the distance."
      },
      {
        question: "Can hearing aids connect to a laptop for video calls?",
        answer:
          "Most current models can, either directly or through a small transmitter, and it makes a larger difference than people expect. Bring the laptop and phone you use for work to the appointment. Getting it paired and tested in the office is the difference between a feature you own and one you actually use."
      }
    ]
  },
  "new-rochelle": {
    heading: "Hearing Care for New Rochelle's Downtown, Waterfront, and Commuter Routes",
    intro:
      "New Rochelle packs a downtown, a waterfront, and I-95 into a few square miles, and a hearing aid behaves differently in each of them. Closing that gap is what the follow-up appointments are for. It is normal to need more than one. Come to the first appointment with two or three rooms in mind rather than a general complaint, because those rooms are what the fitting gets built and checked against.",
    listeningEnvironments: [
      {
        title: "Downtown restaurants and bars",
        body:
          "Hard rooms, close tables, music. This is the setting people judge their hearing aids by, so it belongs in the conversation before you choose them, not after. Speech-in-noise testing at the evaluation gives an honest forecast of how that room will go, which is better than finding out on a Friday night."
      },
      {
        title: "Loud work and loud nights",
        body:
          "Construction, kitchens, and live music all leave ringing behind. Custom protection is molded from an ear impression taken in the office, and a tinnitus appointment starts with a hearing test rather than a product. If the ringing outlasts the shift by a day or more, that is the point to book rather than wait it out again."
      },
      {
        title: "The waterfront and the wind",
        body:
          "Open air near the Sound puts wind straight across the microphones, and models differ enormously in how they handle it. If you walk, run, or fish along the water most days, say so at the fitting. Wind management is a feature worth choosing for rather than discovering you lack."
      },
      {
        title: "I-95 and the New Haven Line",
        body:
          "A long commute in noise is exhausting with untreated hearing loss, because your brain spends the whole trip reconstructing what it missed. That tiredness is worth raising at the appointment. It is as real a symptom as a missed word."
      }
    ],
    hearingPriorities: [
      "hearing tests for downtown and commuter listening",
      "follow-up programming after the fitting, more than once if needed",
      "custom hearing protection for loud work"
    ],
    faqs: [
      {
        question: "Which office do New Rochelle patients use?",
        answer:
          "Harrison, at 550 Mamaroneck Avenue, Suite 407. It is a short drive up from New Rochelle and books weekdays from 8:30 to 5:00 on (914) 949-0034. Somers is the practice's other office and sits considerably further north, so it is rarely the easier choice from here."
      },
      {
        question: "How many appointments does getting hearing aids actually take?",
        answer:
          "More than one, and that is by design. The evaluation comes first, then the fitting, then at least one follow-up once you have worn them in your own rooms. The follow-up is where most of the real improvement happens, because it is the first visit where you can say what is still not working."
      },
      {
        question: "I am worn out by the end of my commute. Is that related to my hearing?",
        answer:
          "It can be. Listening with untreated hearing loss means your brain spends the trip reconstructing what it missed, and that is genuinely tiring. It is worth raising at the appointment as a symptom in its own right rather than as an aside at the end."
      }
    ]
  },
  hartsdale: {
    heading: "Hearing Solutions for Hartsdale, Central Avenue, and Greenburgh Routines",
    intro:
      "Central Avenue is where a lot of Hartsdale patients first notice something. A big store, a wide counter, a cashier behind glass and to one side. That is a genuinely hard listening situation, and it is also a fixable one. What it is not is a reason to conclude the problem is the shop.",
    listeningEnvironments: [
      {
        title: "Store counters and checkout lines",
        body:
          "Distance, background music, and a talker who is not facing you. Hearing aids can be set for exactly this, and it is worth naming the shop at the fitting. Glass partitions make it worse again, because they reflect the voice away from you before it arrives."
      },
      {
        title: "Power tools and the ringing after",
        body:
          "Leaf blowers, saws, and shop vacuums all clear the level where protection matters. Custom plugs are molded from an impression in the office. Ringing that hangs around after the tool is off is worth a tinnitus appointment, and repeated episodes matter more than any single loud afternoon."
      },
      {
        title: "The Harlem Line platform",
        body:
          "Announcements arrive compressed and echoing and are never repeated. Streaming to your phone catches the ones the speakers lose. If you commute daily, that is a feature worth choosing for rather than a nicety."
      },
      {
        title: "Apartment and co-op living",
        body:
          "A lot of Hartsdale sits in buildings near the station, which changes two things. Neighbours mean the television volume is not only your business, and a doorbell or intercom you cannot hear is a practical problem rather than a social one. Both are worth naming at the fitting, because there are specific settings and alerting options for them."
      }
    ],
    hearingPriorities: [
      "diagnostic testing",
      "settings for shops, counters, and restaurants",
      "cleaning and repair at the Harrison office",
      "tinnitus appointments"
    ],
    faqs: [
      {
        question: "Which office do Hartsdale patients use, and how do I get there?",
        answer:
          "Harrison, at 550 Mamaroneck Avenue, Suite 407, on (914) 949-0034, weekdays from 8:30 to 5:00. It is a straightforward run east across the county. Bring your current hearing aids and their chargers even if you think they are finished, because some of what looks like device failure is wax in the receiver."
      },
      {
        question: "I keep missing what the cashier says. Is that really hearing loss?",
        answer:
          "It is one of the most common first signs, and it is not about volume. Distance, a talker who is not facing you, background music, and often a glass partition remove most of the cues you rely on without noticing. A diagnostic test shows whether the underlying clarity is the problem, which is what decides whether a hearing aid would help there."
      },
      {
        question: "My neighbours can hear my television. What can be done?",
        answer:
          "Quite a lot, and it is a common reason people finally book. Turning the set up adds loudness without adding clarity, which is why it stops working. Hearing aids that stream the television audio directly to your ears let you set your own level independently of the room. Say at the appointment that this is the problem you want solved."
      }
    ]
  },
  "mount-kisco": {
    heading: "Hearing Care for Mt. Kisco's Village Center and Northern Westchester Routines",
    intro:
      "Mt. Kisco is where northern Westchester goes for appointments, and a lot of hearing complaints start there. A diagnosis explained too fast. A discharge instruction half-heard in a corridor. Those are the conversations worth fixing first, and the audiologist will ask which ones you have already missed.",
    listeningEnvironments: [
      {
        title: "Medical appointments and caregiver conversations",
        body:
          "Bring a second person and bring your hearing aids working. If you have missed something important at an appointment before, say so at the hearing test, because it changes what gets prioritised in the fitting. A consulting room is a small hard space with one quiet talker who is often looking at a screen, which is a harder listening task than it looks."
      },
      {
        title: "Village restaurants and shops",
        body:
          "A full dining room is the standard test everyone applies to a new hearing aid. Speech-in-noise testing at the evaluation predicts how that will go before you spend anything, and it gives the audiologist something honest to say about what to expect rather than a promise."
      },
      {
        title: "The Saw Mill and the Harlem Line",
        body:
          "Road and platform noise are constant and low, and they wear you out rather than block you outright. The tiredness that comes from a day of effortful listening is a symptom in its own right and belongs in the conversation."
      },
      {
        title: "Arranging it for a parent",
        body:
          "A good share of the calls about Mt. Kisco appointments are made by an adult child rather than the patient. That is fine, and it works better when the person who booked it comes along. Book Monday or Tuesday, when the Somers office runs a full day, and bring any hearing aids they already own even if nobody has worn them for a year."
      }
    ],
    hearingPriorities: [
      "hearing tests at the Somers office",
      "hearing aid repairs and cleanings without driving south",
      "tinnitus appointments for quiet evenings",
      "appointments arranged by a family member"
    ],
    faqs: [
      {
        question: "Which office is nearer to Mt. Kisco, and when is it open?",
        answer:
          "Somers, at 325 NY 100. It runs Monday through Wednesday and Friday morning, is closed Thursday, and closes at 2:30 on Friday, on (914) 556-6720. Harrison is open five weekdays if the only slot you have is a Thursday."
      },
      {
        question: "I am booking this for my mother. What should I do to make it useful?",
        answer:
          "Come with her, book Monday or Tuesday when Somers runs a full day, and bring any hearing aids she already owns along with their chargers. Write down two or three situations where she misses things, because the fitting gets built against real rooms. If she has missed instructions at a medical appointment, say so; it changes what the audiologist prioritises."
      },
      {
        question: "I missed what my doctor told me. Is that worth mentioning at a hearing test?",
        answer:
          "Yes, and it is one of the more useful things you can say. A consulting room is small and hard-surfaced, the talker is often quiet and looking away, and the words carry more weight than usual. Naming that as the situation you want to fix changes which settings get built and checked first."
      }
    ]
  },
  "yorktown-heights": {
    heading: "Hearing Solutions for Yorktown Heights, Taconic Travel, and Outdoor Living",
    intro:
      "Two things bring Yorktown Heights patients down to Somers. Conversation in the car, where the talker faces forward and the road covers the consonants. And the tools, none of which anyone wears protection for. Both have straightforward answers, and neither requires buying the most expensive device in the cabinet.",
    listeningEnvironments: [
      {
        title: "Car conversation on the Taconic",
        body:
          "The passenger faces away, the road noise sits right on top of speech, and you cannot lip-read while driving. A remote microphone on the passenger fixes this better than any program change does. It is a small clip-on device, and it is the single most underused accessory in hearing care."
      },
      {
        title: "Chainsaws, mowers, and the ringing after",
        body:
          "A gas mower runs near 90 decibels and a chainsaw well past that. Custom plugs are made from an impression taken in the office and they let a shout through, which is why they get worn and foam does not. Ringing that outlasts the job is worth a tinnitus appointment."
      },
      {
        title: "Spread-out errands and a long drive to anywhere",
        body:
          "Yorktown is not walkable in the way a village centre is, so more of the day happens in the car and on the phone. Hearing aids that take a call straight into both ears turn the hardest of those conversations into one of the easiest, and it is worth setting the pairing up in the office."
      },
      {
        title: "Quiet evenings and the ringing that fills them",
        body:
          "Northern Westchester goes properly quiet after dark, and quiet is when tinnitus is loudest, because there is nothing left to mask it. The hearing test comes first: it shows whether hearing loss is feeding the ringing, which changes what is worth trying."
      }
    ],
    hearingPriorities: [
      "hearing evaluations at the Somers office",
      "remote microphones for the car",
      "custom protection for tools and yard work",
      "tinnitus appointments",
      "repairs and cleanings in northern Westchester"
    ],
    faqs: [
      {
        question: "What are the Somers office hours, and where is it?",
        answer:
          "325 NY 100, on (914) 556-6720. Monday through Wednesday all day, Friday until 2:30, closed Thursday. Repairs and cleanings are shorter visits than fittings, so say which one you need when you call and the slot can be sized to match."
      },
      {
        question: "I cannot hear my wife in the car. Is that a hearing aid problem?",
        answer:
          "It is a geometry problem that hearing aids alone handle badly. She is facing forward, the road noise sits in the same frequency range as speech, and you cannot use her face to fill the gaps. A remote microphone clipped to her collar sends her voice straight to your ears and skips the car entirely. Ask to try one at the appointment."
      },
      {
        question: "Do I really need custom earplugs for mowing the lawn?",
        answer:
          "For an hour behind a gas mower, yes, it is worth it. The level is high enough to matter and the exposure repeats every week through the summer. Custom plugs are molded from an impression of your ear and use a filter that still lets a shout or an engine change through, which is precisely why people keep them in and take foam out."
      }
    ]
  },
  katonah: {
    heading: "Hearing Care for Katonah's Village, Arts Venues, and Quiet Northern Settings",
    intro:
      "Katonah is quiet, which ought to make hearing easier. It does the opposite for tinnitus. A silent house at ten at night is when the ringing is loudest, and that is when people finally call. Dr. Ratner and Dr. Savin both hold tinnitus certification, and the appointment starts with a hearing test rather than a product.",
    listeningEnvironments: [
      {
        title: "Quiet houses and tinnitus at night",
        body:
          "The quieter the room, the louder the ringing, because there is nothing left to mask it. The hearing test comes first: it tells the audiologist whether hearing loss is feeding the tinnitus, which changes what is worth trying. Anyone who offers a cure before testing is selling something."
      },
      {
        title: "Concerts and rehearsals",
        body:
          "Custom musician's plugs drop the level evenly instead of muffling the top end, so a string quartet still sounds like a string quartet. They are molded from an impression taken in the office. Dr. Ratner is a former musician and works with musicians' hearing needs, which is worth asking about if Caramoor is on your calendar."
      },
      {
        title: "Outdoor summer concerts and the lawn",
        body:
          "Sitting out on a lawn is a different listening problem from sitting in a hall. There are no walls to reflect sound toward you, so distance takes the top off speech and music alike, and wind adds a roar straight across the microphones. Wind handling varies a lot between models and is worth comparing before you commit."
      },
      {
        title: "The village and the train",
        body:
          "Small shops with hard surfaces and a platform announcement you cannot ask to have repeated. Modest problems, ordinary fixes, and worth naming at the fitting anyway, because a program built against a room you actually use beats one built against a category."
      }
    ],
    hearingPriorities: [
      "tinnitus appointments with a certified clinician",
      "musician's plugs and custom protection",
      "hearing tests and follow-up at the Somers office"
    ],
    faqs: [
      {
        question: "My ears ring most at night. What happens at a tinnitus appointment?",
        answer:
          "It starts with a diagnostic hearing test, because hearing loss is often what is driving the ringing and that changes the plan. From there the conversation covers what makes it worse, what masks it, and which of sound therapy, hearing aids with a tinnitus program, or a referral is the sensible next step. Dr. Ratner and Dr. Savin both hold tinnitus certification."
      },
      {
        question: "I play in an ensemble. Will earplugs ruin the sound?",
        answer:
          "Not the custom ones. Musician's plugs use a filter that lowers every frequency by roughly the same amount, so the balance you rely on stays intact and the music simply gets quieter. Foam does not do that, which is why it sounds dull and ends up out of the ear by the second half. The impression is taken in the office."
      },
      {
        question: "Which office should Katonah patients book?",
        answer:
          "Somers, at 325 NY 100, on (914) 556-6720. It runs Monday through Wednesday and Friday morning and is closed Thursday. It is the nearer of the two offices for Katonah and Bedford by a comfortable margin."
      }
    ]
  },
  bedford: {
    heading: "Hearing Support for Bedford's Village Life, Preserves, and Social Gatherings",
    intro:
      "Bedford patients often arrive having read about hearing aids for a year first. What the test adds is which sounds you are actually missing, and that is frequently not what people assume from the reading. Bring the notes. The audiologist will go through them with you.",
    listeningEnvironments: [
      {
        title: "Meetings, dinners, and soft voices",
        body:
          "Group rooms with a hard floor and a soft speaker are the hardest ordinary listening there is. Speech-in-noise testing measures it directly. Ask for that result in plain words rather than a number on a chart, because the useful answer is whether the room will be manageable and what would make it better."
      },
      {
        title: "Outdoors, at a distance",
        body:
          "Wind and distance take the top of speech off before it reaches you. Hearing aids have limits outdoors that nobody selling them enjoys mentioning, and knowing them ahead of time saves a disappointing first week. If most of your conversation happens on a trail or across a paddock, say so before the fitting rather than after."
      },
      {
        title: "Barns, tractors, and machinery",
        body:
          "Equipment that runs for an hour at a time sits above the level where protection matters, and the exposure repeats all season. Custom plugs are molded from an impression taken in the office and still let a shout or an engine note through, which is why they stay in. Ringing that outlasts the work belongs in a tinnitus appointment."
      },
      {
        title: "Large rooms and old houses",
        body:
          "High ceilings and hard floors make a room reverberant, and reverberation smears speech in a way that raising the volume cannot repair. It is why a dinner in a handsome room can be harder than one in a plain one. A microphone placed near the person talking does more than any setting will."
      }
    ],
    hearingPriorities: [
      "diagnostic testing for subtle clarity loss",
      "hearing aid settings for meetings and dinners",
      "custom hearing protection",
      "tinnitus appointments at the Somers office"
    ],
    faqs: [
      {
        question: "Which office do Bedford patients use?",
        answer:
          "Somers, at 325 NY 100, on (914) 556-6720. It takes appointments Monday through Wednesday and on Friday morning and is closed Thursdays. Harrison, on (914) 949-0034, is open five weekdays if the only day your week leaves you is a Thursday."
      },
      {
        question: "I have read a lot about hearing aids. What does a test actually add?",
        answer:
          "It tells you which frequencies you have lost and how well you separate speech from noise, and those two results decide almost everything that follows. Most of what is written about hearing aids is about features. What determines whether a given device helps you is your own audiogram and your speech-in-noise score. Bring your notes and they will be gone through against the results."
      },
      {
        question: "Will hearing aids work outdoors and at a distance?",
        answer:
          "Less well than indoors, and it is better to know that beforehand. Microphones are a few millimetres across and sit at your ear, so past a certain distance they collect wind and space rather than voice. Wind handling differs a lot between models. For conversation that regularly happens at a distance, a remote microphone is the honest answer rather than a more expensive hearing aid."
      }
    ]
  },
  chappaqua: {
    heading: "Hearing Care for Chappaqua's Village, Schools, and Wooded Neighborhoods",
    intro:
      "The complaint that brings most Chappaqua patients in is an auditorium or a school gym: a high ceiling, a distant speaker, a hundred people. Distance and reverberation defeat hearing aids more often than noise does. A remote microphone is usually the honest answer, and it is worth asking to try one before upgrading anything.",
    listeningEnvironments: [
      {
        title: "Auditoriums, gyms, and distance",
        body:
          "Beyond a few feet a hearing aid microphone picks up as much room as it does talker, which is what a microphone on the speaker fixes. A gym is the worst case: hard floor, high ceiling, and a public address system that was installed for volume rather than clarity."
      },
      {
        title: "The house, once it has gone quiet",
        body:
          "Wooded neighborhoods are quiet at night, and quiet is when tinnitus takes over. A hearing test comes first, because hearing loss is often what is driving it. Ringing that is inaudible on the parkway in the morning can be the only thing in the room at eleven."
      },
      {
        title: "Performances and talks at Chappaqua Crossing",
        body:
          "A seated venue is a different problem from a restaurant and often has a different solution. Many run an assistive listening system that sends sound to a receiver at the door or, if your hearing aids carry a telecoil, straight to your ears. Ask the venue what it offers and ask the audiologist whether your devices can use it."
      },
      {
        title: "The commute, and calls from a moving train",
        body:
          "Station announcements are compressed and said once. A phone call on a train adds engine noise to a connection that is already thin. Streaming the call into both hearing aids removes the carriage from the equation, which is the version of that conversation people find least embarrassing."
      }
    ],
    hearingPriorities: [
      "remote microphones for school and community events",
      "diagnostic testing and follow-up programming",
      "tinnitus appointments",
      "hearing tests at whichever office fits the week"
    ],
    faqs: [
      {
        question: "Which of the two offices should I book?",
        answer:
          "Chappaqua sits between them, so the deciding factor is usually your calendar rather than the map. Somers, on (914) 556-6720, runs Monday through Wednesday and Friday morning and is closed Thursday. Harrison, on (914) 949-0034, is open all five weekdays. Say which you want when you call."
      },
      {
        question: "I cannot follow anything at school events. Would better hearing aids help?",
        answer:
          "Usually not as much as you would hope, because the problem is distance and reverberation rather than volume. Past a few feet the microphone at your ear collects the room along with the speaker. The reliable fix is a remote microphone near the person talking. Ask to try one before spending on a device upgrade that will not change the physics."
      },
      {
        question: "The ringing is worst when the house is silent. Is that normal?",
        answer:
          "It is the usual pattern. Tinnitus is not louder at night; there is simply less around to mask it, and a quiet wooded street offers very little. The evaluation starts with a hearing test because hearing loss frequently drives the ringing, and treating the loss often reduces it. Mention it when you book so enough time is set aside."
      }
    ]
  },
  armonk: {
    heading: "Hearing Solutions for Armonk's Town Center, Office Corridors, and I-684 Travel",
    intro:
      "Armonk hearing trouble shows up at work first. A conference room, a speakerphone, a colleague who talks toward the window. People compensate for years, and the compensating is what makes the day tiring. A diagnostic test separates hearing loss from everything else people blame it on. Describe the room before anyone talks about devices, because that is the part of the appointment that decides the most.",
    listeningEnvironments: [
      {
        title: "Conference rooms and speakerphones",
        body:
          "Table microphones flatten everyone to the same level, including the air conditioning. Streaming the call into both hearing aids skips the room, and the audiologist sets that up in the office. Bring the phone and the laptop you actually work on, because the pairing is worth testing here rather than at your desk on a Monday."
      },
      {
        title: "Loud recreation and the ringing after",
        body:
          "Motorcycles, range time, and power tools all sit above the level where protection matters. Custom plugs are molded from an impression taken in the office, and ringing that outlasts the exposure is worth a tinnitus appointment. Each use takes a different filter, so say what you are protecting against rather than asking for plugs in general."
      },
      {
        title: "Restaurants in the town center",
        body:
          "Small rooms, full tables, one program that needs to handle it. Name the restaurant at the fitting. A short downtown means hard surfaces and tables close together, and it is usually the room where somebody first says out loud that they are missing things."
      },
      {
        title: "The house once everyone has gone home",
        body:
          "Armonk is quiet at night, and quiet is when ringing gets loud. Tinnitus that is inaudible on I-684 in the morning can be the only thing in the room at eleven. Raise it when you book rather than at the end of the appointment, so there is time set aside to do something about it."
      }
    ],
    hearingPriorities: [
      "meeting and speakerphone clarity",
      "hearing tests and follow-up at the Harrison office",
      "custom hearing protection and tinnitus appointments"
    ],
    faqs: [
      {
        question: "How far is the Harrison office from Armonk?",
        answer:
          "It is a short run south down I-684 and then across, and it is the closer of the practice's two offices for anyone in Armonk or North Castle. Harrison books weekdays from 8:30 to 5:00 on (914) 949-0034. If you are fitting the appointment between meetings, ask for the first slot of the day, when testing is quicker."
      },
      {
        question: "I spend all day on calls. Will hearing aids help with that?",
        answer:
          "Usually yes, and often more than they help in a restaurant. A call streamed straight into both hearing aids bypasses the room, so the air conditioning and the table stop competing with the talker. Bring the phone and laptop you actually use and have the pairing set up and tested in the office."
      },
      {
        question: "Nothing is obviously wrong. Is a hearing test still worth having?",
        answer:
          "If you are over fifty, or you have spent years around loud equipment, a baseline is worth having. It takes one appointment, you keep the result, and every later test is read against it. That comparison is worth more than any single reading taken once something has already gone wrong."
      }
    ]
  },
  pleasantville: {
    heading: "Hearing Care for Pleasantville's Village, Film Center, and Train Routines",
    intro:
      "A film at the Jacob Burns is a good test of your hearing and a bad place to find out the result. Dialogue sits under the music, the room is dark so there is no lip-reading, and you cannot ask the person beside you. If that has started happening, book a diagnostic test before the next season.",
    listeningEnvironments: [
      {
        title: "Dark rooms and recorded dialogue",
        body:
          "Film and theatre remove every visual cue you had been using without noticing you were using it. Cinemas and theatres are required to provide assistive listening systems, and hearing aids with a telecoil can pick them up. Ask the venue what it has and ask the audiologist whether your devices have a telecoil."
      },
      {
        title: "Concerts and outdoor events",
        body:
          "Outdoor events and amplified music are worth protecting against, and custom plugs are molded from an impression taken in the office. Ringing the next morning is the signal to book, not to wait. Repeated episodes matter more than any single loud evening."
      },
      {
        title: "Village restaurants and the platform",
        body:
          "Close tables, background music, and announcements you cannot have repeated. Ordinary problems with ordinary fixes, once the fitting is verified in your own ear rather than assumed from the fitting software."
      },
      {
        title: "Subtitles, and what they tell you",
        body:
          "Switching the subtitles on at home is the most common unacknowledged sign of hearing loss there is. It is a sensible adaptation and worth keeping, but it is also information. If you have stopped being able to watch anything without them, that belongs in the case history."
      }
    ],
    hearingPriorities: [
      "telecoil and assistive listening compatibility for the film center",
      "restaurant and group settings",
      "custom hearing protection",
      "follow-up programming at the Harrison office"
    ],
    faqs: [
      {
        question: "What is a telecoil, and do I need one?",
        answer:
          "It is a small copper coil inside a hearing aid that picks up sound from a venue's assistive listening loop and delivers it straight to your ears without the room in between. In a cinema or theatre it is often the difference between following the dialogue and reconstructing it afterwards. Not every model includes one, so if seated venues matter to you, say so before you choose devices rather than after."
      },
      {
        question: "Which office do Pleasantville patients use?",
        answer:
          "Harrison is the one listed, at 550 Mamaroneck Avenue, Suite 407, weekdays on (914) 949-0034. Somers, on (914) 556-6720, may be the easier drive depending on which side of town you are on. Say which you want when you call."
      },
      {
        question: "I watch everything with subtitles now. Should I get tested?",
        answer:
          "Yes, and it is a better reason than most. Needing subtitles for ordinary dialogue is a practical measure of speech clarity rather than loudness, which is exactly what age-related hearing loss takes first. It is worth mentioning at the appointment, because it gives the audiologist something concrete to check the fitting against later."
      }
    ]
  },
  greenwich: {
    heading: "Hearing Care Near Greenwich Avenue, the Waterfront, and Lower Fairfield County",
    intro:
      "Greenwich patients usually want two things settled before anything else. Is this hearing loss or is it just noisy rooms, and is it worth crossing into New York for the appointment. A diagnostic test answers the first. Harrison being the closer of the practice's two offices answers most of the second.",
    listeningEnvironments: [
      {
        title: "Restaurants on and around the avenue",
        body:
          "Hard floors, music overhead, a table of six. This is the room people describe when they finally book, and speech-in-noise testing measures how you actually do in it."
      },
      {
        title: "Boats, salt air, and the ringing after a loud day",
        body:
          "Engines and wind are hard on ears and harder on hearing aids. Custom plugs are molded in the office. Salt air is a device problem, so ask about drying routines and moisture-resistant models before you buy rather than after the first repair."
      },
      {
        title: "Long rooms and high ceilings",
        body:
          "Older houses scatter speech. Someone talking from the far end of a long dining room is a distance problem, and distance is what a remote microphone is for."
      },
      {
        title: "I-95, the Merritt, and the New Haven Line",
        body:
          "Constant road and platform noise is tiring rather than blocking. Say so at the appointment if the tiredness is the worst part of it."
      }
    ],
    hearingPriorities: [
      "hearing tests at the Harrison office, weekdays",
      "moisture planning for time on the water",
      "repairs and follow-up close to the state line"
    ]
  },
  mahopac: {
    heading: "Hearing Solutions for Mahopac, Lake Life, and Southern Putnam County",
    intro:
      "On the lake it is wind and engine noise. In the house it is the ringing that turns up once the boat is out of the water for the season. Mahopac patients bring both down to Somers, often in the same appointment, and the two are more related than they look.",
    listeningEnvironments: [
      {
        title: "The lake, the wind, and the engine",
        body:
          "Wind across a hearing aid microphone is a roar, and an outboard at speed is loud enough to matter over a summer. Wind handling varies a lot between models, so compare before you commit rather than discovering the difference in July."
      },
      {
        title: "Boats, mowers, and the ringing after",
        body:
          "A gas mower sits near 90 decibels and a chainsaw runs well past it. Custom plugs are molded from an impression taken in the office and still let a shout through. Ringing that lasts past the end of the job belongs in a tinnitus appointment rather than in the category of things you put up with."
      },
      {
        title: "Route 6 and the car",
        body:
          "The passenger faces forward, the road covers the consonants, and you cannot lip-read at the wheel. A remote microphone clipped to the passenger solves more of this than any program change. It is small, it is inexpensive next to the aids themselves, and almost nobody is offered one."
      },
      {
        title: "Winter evenings, once the season ends",
        body:
          "Southern Putnam gets very quiet after the summer, and quiet is when tinnitus is at its loudest because there is nothing left to mask it. That is why the calls cluster in the autumn. The hearing test comes first, since hearing loss is often what is feeding the ringing."
      }
    ],
    hearingPriorities: [
      "hearing tests at the Somers office on NY 100",
      "moisture care for devices used near the lake",
      "custom protection for boats, mowers, and power tools",
      "tinnitus appointments for winter evenings"
    ],
    faqs: [
      {
        question: "How far is the Somers office from Mahopac?",
        answer:
          "It is a short run down NY 100, and Somers is the nearer of the practice's two offices for southern Putnam by a wide margin. It runs Monday through Wednesday all day and Friday until 2:30, closed Thursday, on (914) 556-6720."
      },
      {
        question: "Does being on the water damage hearing aids?",
        answer:
          "Moisture is one of the most common reasons a hearing aid stops working, and a summer of lake use is harder on a device than a winter indoors. It is manageable rather than disqualifying: a drying kit, a consistent storage habit, and regular cleaning at the office deal with most of it. Say how you use them at the fitting, because it should influence which model is recommended."
      },
      {
        question: "I already have hearing aids I stopped wearing. Is it worth bringing them?",
        answer:
          "Yes, even if they are old and even if you disliked them. What you liked and did not like about them is the most useful information in the room, and it shapes the next fitting more than any brochure will. Bring the chargers too. Some of what gets written off as device failure turns out to be wax in the receiver."
      }
    ]
  },
  greenburgh: {
    heading: "Hearing Care for Greenburgh, Its Six Villages and Hartsdale",
    intro:
      "Greenburgh is a town, not a single place. It holds six villages: Ardsley, Dobbs Ferry, Elmsford, Hastings-on-Hudson, Irvington and Tarrytown. It also holds hamlets such as Hartsdale. Our Harrison office serves all of them. This page is for you if you want a hearing aid evaluation, or a repair for hearing aids you already own.",
    listeningEnvironments: [
      {
        title: "A hearing aid evaluation, step by step",
        body:
          "A hearing aid evaluation is a hearing test plus a talk about whether hearing aids can help. We look in your ears, test the softest sounds you hear, and test how well you understand speech. If hearing aids may help, we explain the styles, features and follow-up care in plain words."
      },
      {
        title: "A hearing aid that has stopped working",
        body:
          "Hearing aids that sound weak or cut out are often blocked with wax, or need a new dome or filter. Bring both devices, the charger and spare parts. If you bought them somewhere else, call first with the make and model. We tell you what we can do before you drive over."
      },
      {
        title: "Finding your village",
        body:
          "Drive times differ across a town this size. Dobbs Ferry, Tarrytown, Irvington, Elmsford, Ardsley and Hastings-on-Hudson each have a page with the drive time from the village center. Hartsdale has one too."
      }
    ],
    hearingPriorities: [
      "hearing aid evaluations and hearing tests at Harrison",
      "repair and cleaning for hearing aids you already own",
      "one office for the whole town, open weekdays"
    ],
    faqs: [
      {
        question: "Which of your offices serves Greenburgh?",
        answer:
          "Harrison, at 550 Mamaroneck Ave, Suite 407, serves the whole town. It is about 14 minutes from the middle of Greenburgh, and Somers is about 36. Harrison is open weekdays, 8:30 to 5:00."
      },
      {
        question: "Do you repair hearing aids for people in Greenburgh?",
        answer:
          "We clean hearing aids, replace worn parts and check the programming. If a part has failed, the device may need to go back to its maker. Call with the make and model first, especially if you bought the hearing aids somewhere else."
      },
      {
        question: "What is a hearing aid evaluation?",
        answer:
          "It is a hearing test plus a talk about hearing aids. Your audiologist tests your hearing, looks in your ears, and explains whether hearing aids can help and which kind may suit you."
      },
      {
        question: "Which villages are part of Greenburgh?",
        answer:
          "Greenburgh contains the villages of Ardsley, Dobbs Ferry, Elmsford, Hastings-on-Hudson, Irvington and Tarrytown. Hartsdale is a hamlet in the town. All are served from our Harrison office."
      },
      {
        question: "Do you have an office in Greenburgh?",
        answer:
          "No. Our offices are in Harrison and Somers. Greenburgh is a service area, and Harrison is the closer office."
      }
    ]
  },
  elmsford: {
    heading: "In-the-Ear Hearing Aids and Hearing Aid Repair for Elmsford",
    intro:
      "Elmsford is where I-287, the Saw Mill River Parkway, the Sprain Brook Parkway and Route 9A meet. If you search from here, you often want one of two things: an in-the-ear hearing aid, or a place to get a hearing aid fixed. This page answers both, and the Harrison office is about 16 minutes away.",
    listeningEnvironments: [
      {
        title: "In-the-ear hearing aids: who they suit",
        body:
          "An in-the-ear aid is made to fit the outer ear. The Mayo Clinic says it comes as a full shell or a half shell, helps mild to more serious hearing loss, and has room for features such as directional microphones. It is easier for others to see than smaller styles. An ear exam and a hearing test show whether it is an option for you."
      },
      {
        title: "Where to get a hearing aid fixed",
        body:
          "Bring both devices, the charger and spare parts to the Harrison office. We clean them, change domes and filters, and check the settings. If a part has failed, we tell you whether it needs the maker. Call first with the make and model if you bought them elsewhere."
      },
      {
        title: "Road noise on the way to the appointment and everywhere else",
        body:
          "Highway noise covers the high sounds in speech, so a conversation in the car can be harder than one at home. Tell your audiologist about long drives. It affects how the hearing aids are set."
      }
    ],
    hearingPriorities: [
      "in-the-ear and custom hearing aids",
      "repair, cleaning and new parts",
      "hearing tests before you choose a style"
    ],
    faqs: [
      {
        question: "What are the best in-the-ear hearing aids?",
        answer:
          "There is no single best one. The right in-the-ear aid depends on your hearing test, the size and shape of your ear canal, and how well you handle small devices. We look in your ears and test your hearing first. Then we show you the choices that fit."
      },
      {
        question: "Where can I get hearing aids fixed near Elmsford?",
        answer:
          "At our Harrison office, about 16 minutes from Elmsford. We clean hearing aids, replace parts and check the programming. If a component has failed, the device may have to go to its maker."
      },
      {
        question: "Can you fix hearing aids I bought somewhere else?",
        answer:
          "Often yes, but it depends on the brand, the model and the fitting software. Call with the make and model before you book."
      },
      {
        question: "Is an in-the-ear hearing aid right for me?",
        answer:
          "Maybe. It needs an ear canal that can hold the device, and a hearing loss that suits its size. A hearing test and an ear exam decide."
      }
    ]
  },
  ardsley: {
    heading: "Hearing Tests and Hearing Aids for Ardsley",
    intro:
      "Ardsley is a village in the town of Greenburgh. If you are looking for an audiologist, a hearing test or hearing aids in Ardsley, the Harrison office is about 19 minutes away. A small note on names: the Ardsley-on-Hudson area, with its Metro-North station, is part of Irvington, not Ardsley.",
    listeningEnvironments: [
      {
        title: "Hearing test in Ardsley",
        body:
          "A full hearing test takes time, and it shows the type and level of your hearing loss. We look in your ears, test the softest tones you hear in each ear, and test how well you understand speech. We then explain the audiogram. If your hearing changed suddenly, call and say so."
      },
      {
        title: "Hearing aids in Ardsley",
        body:
          "If hearing aids are the answer, we choose them from your hearing test and your daily life. Every fitting is checked with a probe microphone in your ear, and follow-up visits fine-tune the sound after you have worn them in real rooms."
      },
      {
        title: "An audiologist near Ardsley",
        body:
          "Our audiologists are Doctors of Audiology. They see patients at the Harrison office and at Somers. Say which office you want when you call."
      }
    ],
    hearingPriorities: [
      "a hearing test with the results explained",
      "hearing aids checked in your own ear",
      "follow-up visits after you start wearing them"
    ],
    faqs: [
      {
        question: "Where can I get a hearing test near Ardsley?",
        answer:
          "At our Harrison office, about 19 minutes from Ardsley. Call (914) 949-0034. Our hearing test is a full diagnostic evaluation, not a screening."
      },
      {
        question: "Is Ardsley-on-Hudson part of Ardsley?",
        answer:
          "No. The Ardsley-on-Hudson area is part of the village of Irvington. Irvington has its own page on this site, with its own drive time."
      },
      {
        question: "Do I need a referral for a hearing test?",
        answer:
          "Many people book directly. Some insurance plans have their own rules, so ask your plan. Our biller can check any plan's benefits for you."
      },
      {
        question: "How is an audiologist different from a hearing aid store?",
        answer:
          "A Doctor of Audiology tests your hearing, looks for medical causes, and fits and adjusts hearing aids. Ask any provider who will do your testing, how the fitting is checked, and what follow-up is included."
      }
    ]
  },
  yonkers: {
    heading: "Choosing an Audiologist and Hearing Aids if You Live in Yonkers",
    intro:
      "Yonkers is the largest city in Westchester County, with 211,569 people at the 2020 census. It has the Hudson River on its west side and the Bronx to its south. With that many choices, how do you pick an audiologist? This page gives you a short checklist, and tells you what the Harrison office, about 19 minutes away, offers.",
    listeningEnvironments: [
      {
        title: "A checklist for choosing an audiologist",
        body:
          "Ask who does the testing and what their training is. Ask whether the hearing aid fitting is checked in your ear canal with a probe microphone. Ask how many follow-up visits are included, and what happens if the hearing aids do not work for you. A good provider answers these questions in writing."
      },
      {
        title: "Hearing aids in a large city",
        body:
          "City life is loud. Trains, traffic and crowded rooms all compete with speech. Tell the audiologist where you struggle. The settings and the style of hearing aid depend on those rooms."
      },
      {
        title: "Repairs and tinnitus",
        body:
          "We also see patients for hearing aid repair and for ringing in the ears. If the ringing began suddenly, or in one ear, see a doctor promptly."
      }
    ],
    hearingPriorities: [
      "a hearing test and a clear explanation of the results",
      "hearing aids checked in your own ear",
      "repairs and follow-up at one office"
    ],
    faqs: [
      {
        question: "Who is the best audiologist in Yonkers?",
        answer:
          "We cannot rank providers, and we will not call ourselves the best. Choose a Doctor of Audiology, ask how the fitting is verified in your ear, and ask what follow-up is included. Then pick the office you trust."
      },
      {
        question: "How far is your office from Yonkers?",
        answer:
          "Harrison is about 19 minutes from the center of Yonkers in normal traffic, as an estimate for October 2026. Somers is about 51 minutes, so Harrison is the practical choice."
      },
      {
        question: "Where can I get hearing aids in Yonkers?",
        answer:
          "We fit hearing aids at our Harrison office. We do not have an office in Yonkers. We fit Oticon, Phonak, ReSound, Signia, Starkey, Widex, Unitron and Rexton hearing aids."
      },
      {
        question: "Do you take my insurance?",
        answer:
          "Please call us. Our biller can check the benefits of any plan for you. We do not promise acceptance of a plan on this page."
      }
    ]
  },
  "dobbs-ferry": {
    heading: "Hearing Care for Dobbs Ferry, from the River to the Trailway",
    intro:
      "Dobbs Ferry is a village in the town of Greenburgh, on the east bank of the Hudson River. It has a Metro-North station, and the Old Croton Aqueduct Trailway runs through it. If you want an audiologist, a hearing test or hearing aids, the Harrison office is about 22 minutes away.",
    listeningEnvironments: [
      {
        title: "The platform and the train",
        body:
          "Train platforms are loud, and announcements are hard to follow with hearing loss. If you commute by Metro-North and miss announcements, say so at your hearing test. Phone-connected hearing aids and some settings can help, and we explain which."
      },
      {
        title: "Walks on the trailway and wind",
        body:
          "Wind across a hearing aid microphone sounds like a roar. Wind handling differs between models, so ask about it before you choose. If you walk or run outdoors, tell your audiologist."
      },
      {
        title: "What to expect at a hearing test",
        body:
          "We ask about your hearing and health, look in your ears, test tones in each ear, and test speech. Your audiologist then explains your results. The visit gives you a baseline, even if you do not need hearing aids yet."
      }
    ],
    hearingPriorities: [
      "a hearing test with the results explained",
      "hearing aids that handle trains, wind and busy rooms",
      "hearing aid repair and cleaning"
    ],
    faqs: [
      {
        question: "Is there an audiologist in Dobbs Ferry?",
        answer:
          "We do not have an office in Dobbs Ferry. Our Harrison office is about 22 minutes away in normal traffic, as an estimate for October 2026. Somers is about 44 minutes."
      },
      {
        question: "Where can I get hearing aids near Dobbs Ferry?",
        answer:
          "At our Harrison office. We test your hearing first, then explain which hearing aids may help. Call (914) 949-0034."
      },
      {
        question: "How long does a hearing test take?",
        answer:
          "The length depends on the visit. Ask when you book how long to plan for, because your audiologist also explains the results."
      },
      {
        question: "Can I get a hearing test if I only notice trouble in noise?",
        answer:
          "Yes. Trouble in noise is a common reason to book. We test how well you understand speech as well as which tones you hear."
      }
    ]
  },
  tarrytown: {
    heading: "Booking a Hearing Test from Tarrytown",
    intro:
      "Tarrytown is a village in the town of Greenburgh, on the east bank of the Hudson. The Mario Cuomo Bridge crosses the river here, and the village has a Metro-North station. This page is for people who want to book a hearing test in Tarrytown. Our Harrison office is about 22 minutes away.",
    listeningEnvironments: [
      {
        title: "How to book a hearing test, in four steps",
        body:
          "First, call (914) 949-0034. Second, tell us what you notice and which ear. Third, choose a time. Fourth, bring your hearing aids if you have them, and a list of the rooms where you struggle. We tell you what to expect on the call."
      },
      {
        title: "Concerts at the Tarrytown Music Hall",
        body:
          "The Tarrytown Music Hall is a historic theater in the village. Live music can be loud. If you go to concerts often, ask about custom earplugs. We make them. A hearing test gives you a baseline too."
      },
      {
        title: "Phone calls and the commute",
        body:
          "Many people book a test because phone calls got hard. Tell the audiologist if calls are a problem. Phone-connected hearing aids can stream calls, and the fitting can be set for them."
      }
    ],
    hearingPriorities: [
      "a hearing test you can book by phone",
      "custom earplugs for concerts",
      "hearing aids that help on phone calls"
    ],
    faqs: [
      {
        question: "How do I book a hearing test in Tarrytown, NY?",
        answer:
          "Call our Harrison office at (914) 949-0034. Harrison is about 22 minutes from Tarrytown in normal traffic, as an estimate for October 2026. We have no office in Tarrytown."
      },
      {
        question: "What does the hearing test include?",
        answer:
          "A case history, a look in your ears, tone tests in each ear, and speech tests. Your audiologist explains the audiogram in plain words."
      },
      {
        question: "Is Somers an option for Tarrytown patients?",
        answer:
          "Somers is about 37 minutes from Tarrytown. It is open Monday to Wednesday, closed Thursday, and open Friday until 2:30. Harrison is open weekdays."
      },
      {
        question: "Do you make custom earplugs for concerts?",
        answer:
          "Yes. We make custom earplugs. Call and tell us what you need them for."
      }
    ]
  },
  "hastings-on-hudson": {
    heading: "Ringing in the Ears and Hearing Aids for Hastings-on-Hudson",
    intro:
      "Hastings-on-Hudson is a village in the town of Greenburgh, with the Hudson River on its west side. The Old Croton Aqueduct Trailway passes through the village. This page covers two questions: what can be done about ringing in the ears, and where to buy hearing aids. The Harrison office is about 23 minutes away.",
    listeningEnvironments: [
      {
        title: "Ringing in the ears: a first appointment",
        body:
          "The National Institute on Deafness and Other Communication Disorders says there is no cure for tinnitus, but there are ways to reduce symptoms. We look in your ears, test your hearing, and ask what you hear and when it is loudest. If a cause such as earwax is found, treating it may help. Sound therapy and counseling can help you cope with ringing that stays."
      },
      {
        title: "When ringing needs a doctor first",
        body:
          "See a doctor promptly if the ringing began suddenly, is in one ear only, beats with your pulse, or comes with hearing loss, dizziness, numbness or weakness."
      },
      {
        title: "Where to buy hearing aids",
        body:
          "Buy hearing aids from a licensed provider who tests your hearing first. Ask who fits them, how the fit is checked, how many follow-up visits are included, and what the trial and return terms are. Ask us about ours when you book."
      }
    ],
    hearingPriorities: [
      "tinnitus appointments with a hearing test first",
      "hearing aids bought with a tested fit",
      "follow-up care at the Harrison office"
    ],
    faqs: [
      {
        question: "What is the treatment for ringing in the ears?",
        answer:
          "There is no cure for most tinnitus, according to the National Institute on Deafness and Other Communication Disorders. Treating a cause such as earwax can help. Sound therapy and counseling help many people cope. Start with a hearing test."
      },
      {
        question: "Can hearing aids help with ringing in the ears?",
        answer:
          "They can help some people, especially when hearing loss is part of the problem. The Institute lists hearing aids among the devices used for sound therapy. A hearing test shows whether they may help you."
      },
      {
        question: "Where can I buy hearing aids near Hastings-on-Hudson?",
        answer:
          "At our Harrison office, about 23 minutes away in normal traffic, as an estimate for October 2026. We test your hearing first, then explain the choices."
      },
      {
        question: "Do you have an office in Hastings-on-Hudson?",
        answer:
          "No. Our offices are in Harrison and Somers. Harrison is the closer one."
      }
    ]
  },
  "briarcliff-manor": {
    heading: "Two Offices, Both About 25 Minutes from Briarcliff Manor",
    intro:
      "Briarcliff Manor is a village that spans the towns of Mount Pleasant and Ossining. Its main street is Pleasantville Road. Our Harrison office is about 24 minutes away, and our Somers office is about 25. So the choice is not about distance. It is about hours and which audiologist you want. This page also covers Signia hearing aids.",
    listeningEnvironments: [
      {
        title: "Which office to choose",
        body:
          "Harrison is open weekdays, 8:30 to 5:00. Somers is open Monday to Wednesday, closed Thursday, and open Friday until 2:30. If you need a Thursday or a late Friday visit, choose Harrison. Dr. Dold and Dr. Rivera see patients at both offices."
      },
      {
        title: "Signia hearing aids",
        body:
          "We fit Signia hearing aids, including the Signia MaX and the Signia IX range. Whether Signia is right for you depends on your hearing test, your ears and your daily life. We explain the choices and let you decide."
      },
      {
        title: "How to judge an audiologist",
        body:
          "Choose a Doctor of Audiology. Ask how the fitting is checked in your ear, how many follow-up visits are included, and what happens if the hearing aids do not work for you."
      }
    ],
    hearingPriorities: [
      "a choice of two offices at the same drive time",
      "Signia hearing aid fittings",
      "a hearing test with the results explained"
    ],
    faqs: [
      {
        question: "Which office is closer to Briarcliff Manor?",
        answer:
          "They are about the same. Harrison is about 24 minutes and Somers is about 25 in normal traffic, as an estimate for October 2026. Choose by hours."
      },
      {
        question: "Do you fit Signia hearing aids?",
        answer:
          "Yes. We fit Signia hearing aids, including the Signia MaX and the Signia IX range. A hearing test shows whether they suit you."
      },
      {
        question: "Who is the top audiologist near Briarcliff Manor?",
        answer:
          "We do not rank providers. Look for a Doctor of Audiology, a fitting checked in your ear, and clear follow-up care. Our audiologists see patients at both offices."
      },
      {
        question: "Can I switch between your offices?",
        answer:
          "Yes. Dr. Dold and Dr. Rivera see patients at both Harrison and Somers. Say which office you want when you call."
      }
    ]
  },
  "sleepy-hollow": {
    heading: "Ringing in the Ears and Hearing Aid Repair for Sleepy Hollow",
    intro:
      "Sleepy Hollow is a village in the town of Mount Pleasant, on the east bank of the Hudson. It was called North Tarrytown until 1996. The Legend of Sleepy Hollow is an 1820 story by Washington Irving. Our Harrison office is about 24 minutes away. This page covers ringing in the ears and hearing aid repair.",
    listeningEnvironments: [
      {
        title: "Ringing in the ears: what we do",
        body:
          "We look in your ears, test your hearing, and ask when the ringing is loudest. The National Institute on Deafness and Other Communication Disorders says there is no cure for most tinnitus, but treating a cause such as earwax can help, and sound therapy and counseling help many people cope."
      },
      {
        title: "When to see a doctor first",
        body:
          "See a doctor promptly if the ringing began suddenly, is in one ear only, beats with your pulse, or comes with hearing loss, dizziness, numbness or weakness."
      },
      {
        title: "Hearing aid repair",
        body:
          "Hearing aids that whistle, sound weak or will not charge often need cleaning or a new part. Bring both devices, the charger and spare parts to Harrison. Call first with the make and model if you bought them elsewhere."
      }
    ],
    hearingPriorities: [
      "tinnitus appointments with a hearing test first",
      "repair, cleaning and new parts",
      "an earwax check before other steps"
    ],
    faqs: [
      {
        question: "Where can I get treatment for ringing in my ears near Sleepy Hollow?",
        answer:
          "At our Harrison office, about 24 minutes away in normal traffic, as an estimate for October 2026. We start with a look in your ears and a hearing test."
      },
      {
        question: "Where can I get hearing aids repaired in Sleepy Hollow?",
        answer:
          "We have no office in Sleepy Hollow. Bring the hearing aids to Harrison for cleaning, parts and checks. Call first with the make and model."
      },
      {
        question: "Is Somers closer for Sleepy Hollow patients?",
        answer:
          "No. Somers is about 35 minutes away. Harrison is about 24."
      },
      {
        question: "Can earwax cause ringing in the ears?",
        answer:
          "Yes. The Mayo Clinic says a blockage of wax can change pressure in the ear and cause tinnitus. Have your ear checked before you try to remove wax yourself."
      }
    ]
  },
  irvington: {
    heading: "Hearing Aid Fittings and Follow-Up for Irvington",
    intro:
      "Irvington is a village in the town of Greenburgh. The village includes the Ardsley-on-Hudson station area. Our Harrison office is about 25 minutes away. This page explains a hearing aid fitting and how to pick an audiologist.",
    listeningEnvironments: [
      {
        title: "What happens at a hearing aid fitting",
        body:
          "Your audiologist programs the hearing aids from your hearing test, and checks what they deliver with a probe microphone in your ear. You practice handling, cleaning and charging. A follow-up visit comes after you have worn them for a week or two."
      },
      {
        title: "Choosing an audiologist in Irvington",
        body:
          "Choose a Doctor of Audiology. Ask how the fit is checked, how many follow-up visits are included, and who adjusts the hearing aids later. Ask for the answers in writing."
      },
      {
        title: "Concerts, theaters and music",
        body:
          "Halls and theaters can be hard for hearing aid wearers. If you go often, or you play an instrument, tell your audiologist. Some hearing aids have a music setting."
      }
    ],
    hearingPriorities: [
      "a hearing aid fitting checked in your own ear",
      "follow-up visits and adjustments",
      "settings for music and theaters"
    ],
    faqs: [
      {
        question: "Where can I get a hearing aid fitting near Irvington?",
        answer:
          "At our Harrison office, about 25 minutes from Irvington in normal traffic, as an estimate for October 2026. Somers is about 45 minutes."
      },
      {
        question: "How many visits does a hearing aid fitting take?",
        answer:
          "Usually a fitting visit and at least one follow-up after you have worn the hearing aids for a week or two. Your audiologist sets the plan with you."
      },
      {
        question: "Who is the best audiologist in Irvington?",
        answer:
          "We do not rank providers. Choose a Doctor of Audiology, ask how the fitting is verified, and ask what follow-up is included."
      },
      {
        question: "Is Ardsley-on-Hudson part of Irvington?",
        answer:
          "Yes. The Ardsley-on-Hudson area and its station are part of the village of Irvington."
      }
    ]
  },
  ossining: {
    heading: "Hearing Care for Ossining: Two Offices, a Similar Drive",
    intro:
      "Ossining has two parts: the village, and the larger town around it. The town sits on the Hudson River. Our Somers office is about 28 minutes from Ossining, and Harrison is about 31. So the two offices are a similar drive. This page helps you choose, and explains how we pick hearing aids.",
    listeningEnvironments: [
      {
        title: "Somers or Harrison: how to choose",
        body:
          "Somers is about three minutes closer. But Somers is closed on Thursdays and closes at 2:30 on Fridays. Harrison is open weekdays, 8:30 to 5:00. Choose by the day and time you need. Our audiologists see patients at both."
      },
      {
        title: "Finding the best hearing aids for you",
        body:
          "No hearing aid is best for everyone. The right one depends on your hearing test, your ears, how well you handle small devices, and the rooms where you struggle. We fit Oticon, Phonak, ReSound, Signia, Starkey, Widex, Unitron and Rexton hearing aids."
      },
      {
        title: "Your first hearing test",
        body:
          "We ask about your hearing and health, look in your ears, test tones and speech, and explain the audiogram. You leave with a clear plan."
      }
    ],
    hearingPriorities: [
      "a hearing test at whichever office suits your schedule",
      "hearing aids chosen from your test, not from a brand",
      "repair and follow-up close to where you live"
    ],
    faqs: [
      {
        question: "Which office should I use if I live in Ossining?",
        answer:
          "Somers is about 28 minutes away and Harrison about 31, as an estimate for October 2026 in normal traffic. Somers is closed on Thursdays. Choose by the day you need."
      },
      {
        question: "What are the best hearing aids in Ossining?",
        answer:
          "There is no single best hearing aid. We choose from your hearing test and your daily life. We explain the options and let you decide."
      },
      {
        question: "Do you have an office in Ossining?",
        answer:
          "No. Our offices are in Harrison and Somers. Ossining is a service area."
      },
      {
        question: "Can I see the same audiologist at both offices?",
        answer:
          "Yes. Dr. Dold and Dr. Rivera see patients at both offices. Say which office and which day you want when you call."
      }
    ]
  },
  "croton-on-hudson": {
    heading: "Hearing Care for Croton-on-Hudson and the Croton Valley",
    intro:
      "Croton-on-Hudson is a village in the town of Cortlandt, on the shore of the Hudson River. It has the Croton-Harmon station and Croton Point Park. If you are looking for an audiologist, a hearing test or hearing aids in Croton, our Somers office is about 30 minutes away.",
    listeningEnvironments: [
      {
        title: "Hearing test in Croton",
        body:
          "We look in your ears, test the softest tones you hear in each ear, and test how well you understand speech. Your audiologist explains the results in plain words. If your hearing changed suddenly, call and say so."
      },
      {
        title: "Wind, water and the park",
        body:
          "Croton Point Park is a large park on a peninsula in the Hudson. Wind and water are hard on hearing aid microphones. If you spend time outdoors, ask about wind handling and moisture care when you choose hearing aids."
      },
      {
        title: "The commute from Croton-Harmon",
        body:
          "Croton-Harmon is a Metro-North and Amtrak station. Train announcements and platform noise can be hard with hearing loss. Tell your audiologist if you commute. It helps us set up your hearing aids."
      }
    ],
    hearingPriorities: [
      "a hearing test at the Somers office",
      "hearing aids set for wind, trains and busy rooms",
      "repair and cleaning close to home"
    ],
    faqs: [
      {
        question: "Where is the nearest audiologist to Croton-on-Hudson?",
        answer:
          "Our Somers office, about 30 minutes away, as an estimate for October 2026 in normal traffic. Harrison is about 38 minutes. We have no office in Croton."
      },
      {
        question: "When is the Somers office open?",
        answer:
          "Monday to Wednesday, 8:30 to 5:00. It is closed on Thursdays and open on Fridays until 2:30. Call (914) 556-6720. Harrison is open weekdays if you need a Thursday."
      },
      {
        question: "Can I get hearing aids in Croton?",
        answer:
          "We fit hearing aids at our Somers and Harrison offices. We test your hearing first, then explain the choices."
      },
      {
        question: "Do you repair hearing aids?",
        answer:
          "We clean hearing aids, replace worn parts and check the programming. If a part has failed, the device may need to go to its maker. Call first with the make and model."
      }
    ]
  },
  "cortlandt-manor": {
    heading: "Tinnitus and Hearing Aid Repair for Cortlandt Manor",
    intro:
      "Cortlandt Manor is a hamlet in the town of Cortlandt, with ZIP code 10567. It lies north of Croton-on-Hudson. Our Somers office is about 29 minutes away. This page covers ringing in the ears and hearing aid repair.",
    listeningEnvironments: [
      {
        title: "Tinnitus treatment: where it starts",
        body:
          "We look in your ears and test your hearing. The National Institute on Deafness and Other Communication Disorders says there is no cure for most tinnitus, but there are ways to reduce symptoms. Treating a cause such as earwax can help. Sound therapy and counseling help many people cope."
      },
      {
        title: "When to see a doctor first",
        body:
          "See a doctor promptly if the ringing began suddenly, is in one ear only, beats with your pulse, or comes with hearing loss, dizziness, numbness or weakness."
      },
      {
        title: "Hearing aid repair near Cortlandt Manor",
        body:
          "Bring both hearing aids, the charger and spare parts to the Somers office. We clean them, replace worn parts and check the settings. If you bought them elsewhere, call first with the make and model."
      }
    ],
    hearingPriorities: [
      "tinnitus appointments with a hearing test first",
      "hearing aid repair and cleaning at Somers",
      "an earwax check before other steps"
    ],
    faqs: [
      {
        question: "Where can I get tinnitus treatment near Cortlandt Manor?",
        answer:
          "At our Somers office, about 29 minutes away, as an estimate for October 2026 in normal traffic. We start with a look in your ears and a hearing test. Harrison is about 46 minutes."
      },
      {
        question: "Where can I get hearing aids repaired near Cortlandt Manor?",
        answer:
          "At our Somers office. We have no office in Cortlandt Manor. Call (914) 556-6720 first with the make and model."
      },
      {
        question: "Is Cortlandt Manor a town?",
        answer:
          "No. It is a hamlet, an unincorporated area, in the town of Cortlandt."
      },
      {
        question: "What days is the Somers office open?",
        answer:
          "Monday to Wednesday, 8:30 to 5:00, and Friday until 2:30. It is closed on Thursdays."
      }
    ]
  }
};

export function localFlavorForCity(city: AreaCity) {
  return cityLocalFlavorBySlug[city.slug];
}

export function localFlavorForCounty(county: AreaCounty) {
  return countyLocalFlavorBySlug[county.slug];
}

const officePathByKey = {
  harrison: "/harrison-ny",
  somers: "/Somers-NY"
} as const;

export function countyPath(slug: string) {
  return `${serviceAreasRootPath}/${slug}`;
}

export function cityPath(city: AreaCity) {
  return `${countyPath(city.countySlug)}/${city.slug}`;
}

// Where a link to this town should actually point. For towns with a legacy
// page that is the legacy URL; for everyone else it is the generated path.
export function cityLinkPath(city: AreaCity) {
  return city.legacyPath ?? cityPath(city);
}

// Towns whose generated page is not published because a legacy page owns the
// intent. Consumed by lib/redirects.ts so the old generated URL 301s.
export const supersededCityPaths = areaCities
  .filter((city) => Boolean(city.legacyPath))
  .map((city) => ({ source: cityPath(city), destination: city.legacyPath as string, name: city.name }));

export function countyForPath(path: string) {
  return areaCounties.find((county) => countyPath(county.slug) === path);
}

export function cityForPath(path: string) {
  return areaCities.find((city) => cityPath(city) === path);
}

export function countyForCity(city: AreaCity) {
  return areaCounties.find((county) => county.slug === city.countySlug);
}

export function citiesForCounty(countySlug: string) {
  const county = areaCounties.find((item) => item.slug === countySlug);
  const ordered = county?.cities || [];
  return ordered.map((slug) => areaCities.find((city) => city.slug === slug)).filter((city): city is AreaCity => Boolean(city));
}

export function officePathForCity(city: AreaCity) {
  return officePathByKey[city.nearestOffice];
}
