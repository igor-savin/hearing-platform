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
      "pleasantville"
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
      "Ask a Mamaroneck patient where hearing is hardest and the answer is usually one specific table at one specific restaurant on Mamaroneck Avenue. That is more useful than an audiogram on its own. The audiologist writes the room down and checks the fitting against it.",
    listeningEnvironments: [
      {
        title: "Village restaurants",
        body:
          "Background music and close tables turn one conversation into four. A hearing aid program set for this room is a different setting from the one you wear at home, and switching between them should be automatic."
      },
      {
        title: "Boats, docks, and salt air",
        body:
          "Harbor Island in July is wind, engines, and humidity. Ask about moisture-resistant models and drying routines at the consultation instead of after the first failure."
      },
      {
        title: "The train and the car",
        body:
          "Announcements and car conversation share one problem, which is that the talker is never facing you."
      }
    ],
    hearingPriorities: [
      "restaurant and group conversation clarity",
      "moisture care for devices used near the harbor"
    ]
  },
  larchmont: {
    heading: "Hearing Care for Larchmont Harbor, Manor Park, and Village Conversations",
    intro:
      "Larchmont hearing complaints tend to be quiet ones. A voice on a walk by the water that keeps getting lost in the wind. A grandchild's voice, which sits high and soft, right where age-related hearing loss usually starts. Both ends of that range get tested.",
    listeningEnvironments: [
      {
        title: "Soft, high voices",
        body:
          "Children's voices and consonants like s, f, and th live in the high frequencies, which is where age-related hearing loss starts. Losing them feels like people are mumbling rather than like the world got quiet. That distinction is what the audiogram is for."
      },
      {
        title: "Wind on the walks by the water",
        body:
          "Wind across a microphone is a roar. Models differ enormously in how well they suppress it, and that difference is worth asking about directly."
      }
    ],
    hearingPriorities: [
      "diagnostic testing for high-frequency loss",
      "wind handling for waterfront walks",
      "cafe and family conversation settings",
      "cleaning and maintenance for humidity exposure"
    ]
  },
  "port-chester": {
    heading: "Hearing Care for Port Chester's Restaurants, Music Venues, and Border-Area Commutes",
    intro:
      "Port Chester is loud in a way the rest of the Sound Shore is not. The Capitol Theatre puts amplified music into the middle of the village, and the restaurants around it run full rooms and hard surfaces. A good half of the hearing conversations here are about protecting what you have rather than amplifying it.",
    listeningEnvironments: [
      {
        title: "Restaurant rooms and street noise",
        body:
          "A busy dining room defeats more hearing aids than any other everyday setting. Speech-in-noise testing at the evaluation predicts how you will actually do there, which a tone test cannot."
      },
      {
        title: "Live music and the ringing that follows it",
        body:
          "Ringing or muffled hearing the morning after a show is a warning, not a souvenir. Custom musician's plugs lower the whole level evenly so the music still sounds like music. If you work the room rather than visit it, get the impression taken this month."
      },
      {
        title: "I-95 and the New Haven Line",
        body:
          "Traffic and platform noise are constant and low, and adaptive settings cut the fatigue they cause more than they improve the words."
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
    ]
  },
  "rye-brook": {
    heading: "Hearing Support for Rye Brook Families, Parks, and Nearby Office Corridors",
    intro:
      "Nobody in Rye Brook books a hearing test because of a road. They book it after a table of ten at a holiday dinner, or because somebody else finally said something out loud. That is the normal way this starts, and it is a reasonable reason to call.",
    listeningEnvironments: [
      {
        title: "Big tables and family gatherings",
        body:
          "Group conversation is where hearing loss shows first, because you cannot ask ten people to repeat themselves. Bring the family member who noticed. Their account of what you miss is usually more accurate than yours."
      },
      {
        title: "Meetings, calls, and headsets",
        body:
          "Conference audio is compressed and often bad to begin with. Hearing aids that stream the call directly cut out the room entirely, and the audiologist will pair them with your phone in the office rather than leaving you to the manual."
      }
    ],
    hearingPriorities: [
      "hearing evaluations for group-conversation difficulty",
      "fittings and follow-up at the Harrison office",
      "phone and Bluetooth pairing done in the office",
      "custom hearing protection",
      "repairs without a long drive"
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
          "Distance and reverberation beat hearing aids more reliably than noise does. A microphone on the speaker is the fix. Programming alone will not get you there."
      },
      {
        title: "Conference rooms and video calls",
        body:
          "Hybrid meetings mix a bad room microphone with a compressed connection. Streaming the call straight into both ears removes the room from the equation."
      },
      {
        title: "The drive on I-684 and I-287",
        body:
          "Road noise makes listening tiring even when you follow every word, and that fatigue is worth raising at the appointment."
      }
    ],
    hearingPriorities: [
      "remote microphones for lectures and meetings",
      "Bluetooth and computer audio set up in the office",
      "custom hearing protection for performance and rehearsal spaces"
    ]
  },
  "new-rochelle": {
    heading: "Hearing Care for New Rochelle's Downtown, Waterfront, and Commuter Routes",
    intro:
      "New Rochelle packs a downtown, a waterfront, and I-95 into a few square miles, and a hearing aid behaves differently in each of them. Closing that gap is what the follow-up appointments are for. It is normal to need more than one.",
    listeningEnvironments: [
      {
        title: "Downtown restaurants and bars",
        body:
          "Hard rooms, close tables, music. This is the setting people judge their hearing aids by, so it belongs in the conversation before you choose them, not after."
      },
      {
        title: "Loud work and loud nights",
        body:
          "Construction, kitchens, and live music all leave ringing behind. Custom protection is molded from an ear impression taken in the office, and a tinnitus appointment starts with a hearing test rather than a product."
      },
      {
        title: "The waterfront and the wind",
        body:
          "Open air near the Sound puts wind straight across the microphones, and models differ enormously in how they handle it."
      },
      {
        title: "I-95 and the New Haven Line",
        body:
          "A long commute in noise is exhausting with untreated hearing loss, because your brain spends the whole trip reconstructing what it missed. That tiredness is worth raising at the appointment. It is as real a symptom as a missed word."
      }
    ],
    hearingPriorities: [
      "hearing tests for downtown and commuter listening",
      "follow-up programming after the fitting, more than once if needed"
    ]
  },
  hartsdale: {
    heading: "Hearing Solutions for Hartsdale, Central Avenue, and Greenburgh Routines",
    intro:
      "Central Avenue is where a lot of Hartsdale patients first notice something. A big store, a wide counter, a cashier behind glass and to one side. That is a genuinely hard listening situation, and it is also a fixable one.",
    listeningEnvironments: [
      {
        title: "Store counters and checkout lines",
        body:
          "Distance, background music, and a talker who is not facing you. Hearing aids can be set for exactly this, and it is worth naming the shop at the fitting."
      },
      {
        title: "Power tools and the ringing after",
        body:
          "Leaf blowers, saws, and shop vacuums all clear the level where protection matters. Custom plugs are molded from an impression in the office. Ringing that hangs around after the tool is off is worth a tinnitus appointment."
      },
      {
        title: "The Harlem Line platform",
        body:
          "Announcements arrive compressed and echoing and are never repeated. Streaming to your phone catches the ones the speakers lose."
      }
    ],
    hearingPriorities: [
      "diagnostic testing",
      "settings for shops, counters, and restaurants",
      "cleaning and repair at the Harrison office",
      "tinnitus appointments"
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
          "Bring a second person and bring your hearing aids working. If you have missed something important at an appointment before, say so at the hearing test, because it changes what gets prioritised in the fitting."
      },
      {
        title: "Village restaurants and shops",
        body:
          "A full dining room is the standard test everyone applies to a new hearing aid. Speech-in-noise testing at the evaluation predicts how that will go before you spend anything."
      },
      {
        title: "The Saw Mill and the Harlem Line",
        body:
          "Road and platform noise are constant and low, and they wear you out rather than block you outright."
      }
    ],
    hearingPriorities: [
      "hearing tests at the Somers office",
      "hearing aid repairs and cleanings without driving south",
      "tinnitus appointments for quiet evenings"
    ]
  },
  "yorktown-heights": {
    heading: "Hearing Solutions for Yorktown Heights, Taconic Travel, and Outdoor Living",
    intro:
      "Two things bring Yorktown Heights patients down to Somers. Conversation in the car, where the talker faces forward and the road covers the consonants. And the tools, none of which anyone wears protection for. Both have straightforward answers.",
    listeningEnvironments: [
      {
        title: "Car conversation on the Taconic",
        body:
          "The passenger faces away, the road noise sits right on top of speech, and you cannot lip-read while driving. A remote microphone on the passenger fixes this better than any program change does."
      },
      {
        title: "Chainsaws, mowers, and the ringing after",
        body:
          "A gas mower runs near 90 decibels and a chainsaw well past that. Custom plugs are made from an impression taken in the office and they let a shout through, which is why they get worn and foam does not. Ringing that outlasts the job is worth a tinnitus appointment."
      }
    ],
    hearingPriorities: [
      "hearing evaluations at the Somers office",
      "remote microphones for the car",
      "custom protection for tools and yard work",
      "tinnitus appointments",
      "repairs and cleanings in northern Westchester"
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
          "The quieter the room, the louder the ringing, because there is nothing left to mask it. The hearing test comes first: it tells the audiologist whether hearing loss is feeding the tinnitus, which changes what is worth trying."
      },
      {
        title: "Concerts and rehearsals",
        body:
          "Custom musician's plugs drop the level evenly instead of muffling the top end, so a string quartet still sounds like a string quartet. They are molded from an impression taken in the office. Dr. Ratner is a former musician and works with musicians' hearing needs."
      },
      {
        title: "The village and the train",
        body:
          "Small shops with hard surfaces and a platform announcement you cannot ask to have repeated. Modest problems, ordinary fixes."
      }
    ],
    hearingPriorities: [
      "tinnitus appointments with a certified clinician",
      "musician's plugs and custom protection",
      "hearing tests and follow-up at the Somers office"
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
          "Group rooms with a hard floor and a soft speaker are the hardest ordinary listening there is. Speech-in-noise testing measures it directly. Ask for that result in plain words rather than a number on a chart."
      },
      {
        title: "Outdoors, at a distance",
        body:
          "Wind and distance take the top of speech off before it reaches you. Hearing aids have limits outdoors that nobody selling them enjoys mentioning, and knowing them ahead of time saves a disappointing first week."
      }
    ],
    hearingPriorities: [
      "diagnostic testing for subtle clarity loss",
      "hearing aid settings for meetings and dinners",
      "custom hearing protection",
      "tinnitus appointments at the Somers office"
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
          "Beyond a few feet a hearing aid microphone picks up as much room as it does talker, which is what a microphone on the speaker fixes."
      },
      {
        title: "The house, once it has gone quiet",
        body:
          "Wooded neighborhoods are quiet at night, and quiet is when tinnitus takes over. A hearing test comes first, because hearing loss is often what is driving it."
      }
    ],
    hearingPriorities: [
      "remote microphones for school and community events",
      "diagnostic testing and follow-up programming",
      "tinnitus appointments"
    ]
  },
  armonk: {
    heading: "Hearing Solutions for Armonk's Town Center, Office Corridors, and I-684 Travel",
    intro:
      "Armonk hearing trouble shows up at work first. A conference room, a speakerphone, a colleague who talks toward the window. People compensate for years, and the compensating is what makes the day tiring. A diagnostic test separates hearing loss from everything else people blame it on.",
    listeningEnvironments: [
      {
        title: "Conference rooms and speakerphones",
        body:
          "Table microphones flatten everyone to the same level, including the air conditioning. Streaming the call into both hearing aids skips the room, and the audiologist sets that up in the office."
      },
      {
        title: "Loud recreation and the ringing after",
        body:
          "Motorcycles, range time, and power tools all sit above the level where protection matters. Custom plugs are molded from an impression taken in the office, and ringing that outlasts the exposure is worth a tinnitus appointment."
      },
      {
        title: "Restaurants in the town center",
        body:
          "Small rooms, full tables, one program that needs to handle it. Name the restaurant at the fitting."
      }
    ],
    hearingPriorities: [
      "meeting and speakerphone clarity",
      "hearing tests and follow-up at the Harrison office"
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
          "Outdoor events and amplified music are worth protecting against, and custom plugs are molded from an impression taken in the office. Ringing the next morning is the signal to book, not to wait."
      },
      {
        title: "Village restaurants and the platform",
        body:
          "Close tables, background music, and announcements you cannot have repeated. Ordinary problems with ordinary fixes, once the fitting is verified."
      }
    ],
    hearingPriorities: [
      "telecoil and assistive listening compatibility for the film center",
      "restaurant and group settings",
      "custom hearing protection",
      "follow-up programming at the Harrison office"
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
      "On the lake it is wind and engine noise. In the house it is the ringing that turns up once the boat is out of the water for the season. Mahopac patients bring both down to Somers, often in the same appointment.",
    listeningEnvironments: [
      {
        title: "The lake, the wind, and the engine",
        body:
          "Wind across a hearing aid microphone is a roar, and an outboard at speed is loud enough to matter over a summer. Wind handling varies a lot between models, so compare before you commit."
      },
      {
        title: "Boats, mowers, and the ringing after",
        body:
          "A gas mower sits near 90 decibels and a chainsaw runs well past it. Custom plugs are molded from an impression taken in the office and still let a shout through. Ringing that lasts past the end of the job belongs in a tinnitus appointment."
      },
      {
        title: "Route 6 and the car",
        body:
          "The passenger faces forward, the road covers the consonants, and you cannot lip-read at the wheel. A remote microphone clipped to the passenger solves more of this than any program change."
      }
    ],
    hearingPriorities: [
      "hearing tests at the Somers office on NY 100",
      "moisture care for devices used near the lake",
      "custom protection for boats, mowers, and power tools",
      "tinnitus appointments for winter evenings"
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
