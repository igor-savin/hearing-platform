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
};

export type AreaCityLocalFlavor = {
  heading: string;
  intro: string;
  listeningEnvironments: Array<{
    title: string;
    body: string;
  }>;
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
      "Depending on your neighborhood, the Harrison or Somers office may be the most convenient place to schedule a hearing test, hearing aid consultation, tinnitus visit, hearing protection appointment, or hearing aid repair.",
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
      "The Harrison office is often the most practical option for Greenwich-area patients seeking audiology care close to the New York and Connecticut border.",
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
      "The Somers office is positioned for patients traveling from Mahopac, Carmel, and nearby northern Westchester and southern Putnam communities.",
    cities: ["mahopac"]
  }
];

export const countyLocalFlavorBySlug: Record<string, AreaCountyLocalFlavor> = {
  "westchester-county-ny": {
    heading: "Hearing Care Across Westchester's Sound Shore, Downtowns, and Northern Communities",
    intro:
      "Westchester County hearing needs can change from town to town. A patient in Rye or Mamaroneck may be thinking about waterfront wind and humidity, while a patient in White Plains may need help with downtown restaurants and Metro-North announcements, and a patient in Somers or Katonah may notice tinnitus more in quiet northern Westchester settings.",
    regions: [
      {
        title: "Sound Shore communities",
        body:
          "Rye, Mamaroneck, Larchmont, Port Chester, and nearby communities often bring water, wind, outdoor events, and restaurant noise into the hearing conversation. Moisture care, wind handling, and speech-in-noise performance are practical considerations."
      },
      {
        title: "Central Westchester",
        body:
          "White Plains, Hartsdale, Scarsdale, Purchase, and Harrison patients often need hearing support for work, medical visits, shopping, restaurants, traffic, and train travel. Technology should be fit for movement between quiet rooms and busy public spaces."
      },
      {
        title: "Northern Westchester",
        body:
          "Somers, Katonah, Bedford, Yorktown Heights, Chappaqua, Mt. Kisco, Armonk, and Pleasantville can involve longer drives, community events, outdoor recreation, and quieter homes. Tinnitus support, car comfort, and follow-up care can be especially relevant."
      }
    ],
    hearingPriorities: [
      "hearing testing and hearing aid fitting near multiple Westchester communities",
      "restaurant, commuter, meeting-room, and family-conversation clarity",
      "custom hearing protection for music, tools, events, and recreation",
      "tinnitus support and hearing aid repair through local office access"
    ]
  },
  "fairfield-county-ct": {
    heading: "Hearing Care for Greenwich and Nearby Lower Fairfield County Patients",
    intro:
      "Lower Fairfield County patients who live near the New York border often move between Greenwich, the Sound Shore, Westchester offices, train travel, I-95, the Merritt Parkway, restaurants, waterfront activity, and family gatherings. Hearing care should account for that cross-border rhythm.",
    regions: [
      {
        title: "Greenwich Avenue and downtown listening",
        body:
          "Shopping, dining, and appointments can combine background music, traffic, and overlapping voices. Hearing aid programming can be shaped around speech clarity in those real environments."
      },
      {
        title: "Waterfront and outdoor activity",
        body:
          "Coastal wind and moisture can affect hearing aid comfort and device care. Patients who spend time near parks, marinas, or the shoreline may want to discuss moisture management and outdoor listening settings."
      },
      {
        title: "Cross-border convenience",
        body:
          "The Harrison office can be a practical option for Greenwich-area patients seeking hearing tests, hearing aid support, tinnitus care, or repair service near the Connecticut/New York border."
      }
    ],
    hearingPriorities: [
      "nearby hearing evaluations for Greenwich and lower Fairfield County patients",
      "speech clarity for restaurants, appointments, shopping, and family events",
      "wind and moisture planning for shoreline routines",
      "follow-up care close to the NY/CT border"
    ]
  },
  "putnam-county-ny": {
    heading: "Hearing Care Near Southern Putnam County and the Somers Office",
    intro:
      "Southern Putnam patients, especially around Mahopac and nearby communities, often need hearing support for lake activity, Route 6 errands, family gatherings, quiet home settings, and travel into northern Westchester. The Somers office gives these patients a practical nearby care option.",
    regions: [
      {
        title: "Lake and outdoor routines",
        body:
          "Wind, water, humidity, lawn equipment, and recreation can all shape hearing needs. Device care, outdoor programs, and custom hearing protection may be worth discussing during an appointment."
      },
      {
        title: "Route 6 and daily errands",
        body:
          "Car noise, shopping areas, and public spaces can make speech harder to follow. Hearing aids can be selected and adjusted for the environments patients actually visit each week."
      },
      {
        title: "Quiet homes and tinnitus",
        body:
          "In quieter communities, tinnitus may feel more noticeable at night or in calm rooms. A hearing evaluation can help determine whether hearing technology, sound strategies, or counseling may help."
      }
    ],
    hearingPriorities: [
      "hearing testing near Mahopac and southern Putnam County",
      "hearing aid maintenance for outdoor, humid, and lake-adjacent routines",
      "speech clarity for cars, errands, and family conversations",
      "tinnitus support through the nearby Somers office"
    ]
  }
};

export const areaCities: AreaCity[] = [
  {
    slug: "harrison",
    name: "Harrison",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Purchase", "Rye", "White Plains", "Mamaroneck"],
    localContext:
      "Harrison patients have convenient access to the practice's Harrison office at 550 Mamaroneck Avenue for diagnostic hearing care and hearing aid services.",
    travelNote: "The Harrison office is located in town, making it the natural first choice for many Harrison and Purchase patients.",
    patientNeeds: ["office-based hearing evaluations", "hearing aid fittings and follow-up care", "tinnitus support", "hearing aid troubleshooting"]
  },
  {
    slug: "somers",
    name: "Somers",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    nearby: ["Mahopac", "Yorktown Heights", "Katonah", "North Salem"],
    localContext:
      "Somers patients can schedule care at the Somers office on NY 100 for hearing testing, hearing aid consultations, tinnitus care, and hearing aid repair.",
    travelNote: "The Somers office is the primary northern Westchester location for patients near NY 100 and surrounding communities.",
    patientNeeds: ["hearing tests in northern Westchester", "hearing aid fitting and maintenance", "custom hearing protection", "tinnitus therapy appointments"]
  },
  {
    slug: "white-plains",
    name: "White Plains",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Hartsdale", "Scarsdale", "Harrison", "Purchase"],
    localContext:
      "White Plains is central to Westchester County and remains an important service area for hearing testing, hearing aids, tinnitus therapy, and hearing protection.",
    travelNote: "The Harrison office is the nearest practice location for White Plains patients; call to confirm appointment availability.",
    patientNeeds: ["central Westchester hearing evaluations", "hearing aid technology consultations", "hearing aid repair support", "tinnitus counseling"]
  },
  {
    slug: "scarsdale",
    name: "Scarsdale",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Hartsdale", "White Plains", "Eastchester", "New Rochelle"],
    localContext:
      "Scarsdale patients can access audiology services through nearby Westchester County offices, including hearing tests and personalized hearing aid care.",
    travelNote: "The Harrison office is the nearest practice location for Scarsdale patients; call to confirm appointment availability.",
    patientNeeds: ["hearing aid consultations", "diagnostic hearing testing", "hearing protection", "follow-up programming"]
  },
  {
    slug: "rye",
    name: "Rye",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Harrison", "Rye Brook", "Port Chester", "Greenwich"],
    localContext:
      "Rye patients are close to the Harrison office for hearing tests, hearing aid fittings, tinnitus care, and hearing aid support.",
    travelNote: "The live site describes the Harrison office as about 10 minutes from Rye.",
    patientNeeds: ["hearing tests near Rye", "hearing aids and accessories", "tinnitus therapy", "hearing aid repair"]
  },
  {
    slug: "mamaroneck",
    name: "Mamaroneck",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Larchmont", "Harrison", "Rye", "Scarsdale"],
    localContext:
      "Mamaroneck patients can reach the Harrison office for audiology appointments, hearing aid support, and hearing protection services.",
    travelNote: "The Harrison office is a practical nearby option for many Mamaroneck and Sound Shore patients.",
    patientNeeds: ["hearing aid consultations", "hearing evaluations", "custom ear protection", "hearing aid maintenance"]
  },
  {
    slug: "larchmont",
    name: "Larchmont",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Mamaroneck", "New Rochelle", "Rye", "Scarsdale"],
    localContext:
      "Larchmont residents can schedule nearby hearing care through Audiology Associates of Westchester for testing, hearing aids, and tinnitus concerns.",
    travelNote: "The Harrison office is a convenient option for Larchmont and nearby Sound Shore communities.",
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
      "Port Chester patients can use the Harrison office for audiology services close to the Sound Shore and Connecticut border.",
    travelNote: "Patients should call for appointment availability and the best office option.",
    patientNeeds: ["hearing tests", "hearing aids", "hearing aid repair", "tinnitus care"]
  },
  {
    slug: "rye-brook",
    name: "Rye Brook",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Rye", "Port Chester", "Purchase", "Greenwich"],
    localContext:
      "Rye Brook patients are close to the Harrison office for hearing evaluations, hearing aid consultations, and follow-up care.",
    travelNote: "The Harrison location is the nearest core office for many Rye Brook patients.",
    patientNeeds: ["hearing aid fitting", "diagnostic hearing testing", "hearing aid repairs", "tinnitus appointments"]
  },
  {
    slug: "purchase",
    name: "Purchase",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Harrison", "White Plains", "Rye Brook", "Armonk"],
    localContext:
      "Purchase patients can schedule care at the Harrison office for hearing tests, hearing aid technology discussions, and hearing aid service.",
    travelNote: "The Harrison office is a nearby option for Purchase residents and nearby campus communities.",
    patientNeeds: ["hearing aid consultations", "hearing testing", "custom hearing protection", "hearing aid follow-up"]
  },
  {
    slug: "new-rochelle",
    name: "New Rochelle",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Larchmont", "Mamaroneck", "Eastchester", "Scarsdale"],
    localContext:
      "New Rochelle patients can connect with Audiology Associates of Westchester for hearing testing, hearing aids, and tinnitus support through nearby offices.",
    travelNote: "Call to confirm the most convenient office and appointment timing.",
    patientNeeds: ["hearing tests near New Rochelle", "hearing aid fitting", "hearing aid repair", "tinnitus support"]
  },
  {
    slug: "hartsdale",
    name: "Hartsdale",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["White Plains", "Scarsdale", "Ardsley", "Greenburgh"],
    localContext:
      "Hartsdale patients can access nearby Westchester audiology care for hearing tests, hearing aid fitting, and hearing protection.",
    travelNote: "The Harrison office is the nearest practice location for Hartsdale patients.",
    patientNeeds: ["hearing testing", "hearing aid support", "tinnitus therapy", "custom protection"]
  },
  {
    slug: "mount-kisco",
    name: "Mt. Kisco",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    nearby: ["Bedford", "Katonah", "Chappaqua", "Somers"],
    localContext:
      "Mt. Kisco patients can schedule audiology appointments through nearby northern Westchester offices for hearing testing and hearing aid care.",
    travelNote: "The existing site describes Audiology Associates of Westchester offices as a short drive from Mt. Kisco.",
    patientNeeds: ["hearing aids near Mt. Kisco", "hearing testing", "hearing aid repair", "tinnitus care"]
  },
  {
    slug: "yorktown-heights",
    name: "Yorktown Heights",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    nearby: ["Somers", "Mahopac", "Katonah", "Cortlandt Manor"],
    localContext:
      "Yorktown Heights patients can use the Somers office for hearing evaluations, hearing aid consultations, and follow-up appointments.",
    travelNote: "The Somers location is a practical northern Westchester option for Yorktown Heights residents.",
    patientNeeds: ["hearing testing", "hearing aid fitting", "hearing aid repair", "tinnitus therapy"]
  },
  {
    slug: "katonah",
    name: "Katonah",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    nearby: ["Bedford", "Somers", "Mt. Kisco", "North Salem"],
    localContext:
      "Katonah patients can schedule hearing care nearby through the Somers office, including testing, hearing aids, and hearing protection.",
    travelNote: "Somers is often the closest core office for Katonah and Bedford-area patients.",
    patientNeeds: ["hearing tests", "hearing aid consultations", "custom hearing protection", "follow-up programming"]
  },
  {
    slug: "bedford",
    name: "Bedford",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    nearby: ["Katonah", "Bedford Hills", "Mt. Kisco", "Pound Ridge"],
    localContext:
      "Bedford patients can work with Audiology Associates of Westchester for hearing tests, hearing aid selection, tinnitus support, and hearing protection.",
    travelNote: "The Somers office is a strong option for many Bedford-area patients.",
    patientNeeds: ["hearing aid evaluations", "hearing testing", "tinnitus care", "custom ear protection"]
  },
  {
    slug: "chappaqua",
    name: "Chappaqua",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "somers",
    nearby: ["Pleasantville", "Mt. Kisco", "Armonk", "White Plains"],
    localContext:
      "Chappaqua patients can access Westchester audiology care for hearing testing, hearing aid fitting, and hearing aid troubleshooting.",
    travelNote: "Call the practice to identify the most convenient office based on appointment availability.",
    patientNeeds: ["hearing aid consultations", "hearing testing", "tinnitus support", "hearing aid repair"]
  },
  {
    slug: "armonk",
    name: "Armonk",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Purchase", "Chappaqua", "Bedford", "White Plains"],
    localContext:
      "Armonk patients can schedule hearing care through nearby Westchester offices for hearing tests, hearing aid technology, and follow-up care.",
    travelNote: "The Harrison office is the nearest practice location for Armonk patients.",
    patientNeeds: ["hearing testing", "hearing aids", "hearing protection", "tinnitus care"]
  },
  {
    slug: "pleasantville",
    name: "Pleasantville",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "harrison",
    nearby: ["Chappaqua", "Briarcliff Manor", "Mt. Kisco", "Hawthorne"],
    localContext:
      "Pleasantville patients can connect with Audiology Associates of Westchester for diagnostic hearing care, hearing aids, and tinnitus support.",
    travelNote: "Call to choose the most convenient office and appointment time.",
    patientNeeds: ["hearing tests", "hearing aid fitting", "hearing aid repair", "custom hearing protection"]
  },
  {
    slug: "greenwich",
    name: "Greenwich",
    state: "CT",
    countySlug: "fairfield-county-ct",
    nearestOffice: "harrison",
    nearby: ["Rye", "Port Chester", "Old Greenwich", "Stamford"],
    localContext:
      "Greenwich patients can reach Audiology Associates of Westchester through nearby Westchester County offices for hearing testing, hearing aids, and tinnitus care.",
    travelNote: "The live site describes the Harrison office as an easy drive from Greenwich.",
    patientNeeds: ["hearing tests near Greenwich", "hearing aid fitting", "tinnitus therapy", "hearing aid repair"]
  },
  {
    slug: "mahopac",
    name: "Mahopac",
    state: "NY",
    countySlug: "putnam-county-ny",
    nearestOffice: "somers",
    nearby: ["Somers", "Carmel", "Yorktown Heights", "Baldwin Place"],
    localContext:
      "Mahopac patients can schedule nearby audiology services at the Somers office, including hearing tests, hearing aid fittings, tinnitus care, and repair support.",
    travelNote: "The Somers office is a practical option for Mahopac and southern Putnam County patients.",
    patientNeeds: ["hearing testing near Mahopac", "hearing aids", "hearing aid repair", "tinnitus appointments"]
  }
];

export const cityLocalFlavorBySlug: Record<string, AreaCityLocalFlavor> = {
  harrison: {
    heading: "Hearing Care for Harrison's Mamaroneck Avenue, Purchase, and Commuter Lifestyle",
    intro:
      "Harrison patients are balancing everyday listening needs across office visits, restaurants on busy corridors, Metro-North travel, school and family events, and quieter conversations at home. A hearing plan for Harrison should account for both local convenience and the different sound settings people move through in a normal week.",
    listeningEnvironments: [
      {
        title: "Mamaroneck Avenue and medical visits",
        body:
          "Street noise, parking-lot activity, elevators, reception desks, and exam-room conversations all ask different things from hearing aids. Directional microphone settings and careful follow-up programming can make local appointments and errands easier to manage."
      },
      {
        title: "Restaurants, family gatherings, and clubs",
        body:
          "Harrison and nearby Purchase patients often notice hearing difficulty first in dining rooms, social events, and family celebrations. Speech-in-noise testing and real-ear verification help match hearing technology to those real conversations."
      },
      {
        title: "Commuting and cross-county travel",
        body:
          "Train platforms, traffic along I-287 and the Hutchinson River Parkway, and busy waiting areas can make announcements and speech cues harder to follow. Modern hearing aids can be adjusted for movement between quiet and noisy settings."
      }
    ],
    hearingPriorities: [
      "clear speech in waiting rooms, restaurants, and family settings",
      "hearing aid programs for traffic, train platforms, and public spaces",
      "Bluetooth and phone clarity for work calls and appointments",
      "fast local follow-up at the Harrison office for cleaning, repair, and adjustments"
    ]
  },
  somers: {
    heading: "Hearing Solutions for Somers, Heritage Hills, and Northern Westchester",
    intro:
      "Somers has a different listening rhythm than lower Westchester: residential neighborhoods, Route 100 travel, Heritage Hills activities, outdoor recreation, and quiet evenings where tinnitus can feel more noticeable. Local hearing care should fit that blend of calm settings, family time, and road noise.",
    listeningEnvironments: [
      {
        title: "Route 100 and everyday errands",
        body:
          "Car noise, parking lots, checkout counters, and medical-office conversations are common listening challenges for Somers patients. Hearing aid settings can be tuned so speech stays clear without making every background sound feel too sharp."
      },
      {
        title: "Heritage Hills and community activities",
        body:
          "Group conversations, club meetings, exercise classes, and shared meals can expose subtle hearing difficulty. A hearing test can identify whether amplification, assistive accessories, or communication strategies would help."
      },
      {
        title: "Quiet homes and outdoor spaces",
        body:
          "In quieter northern Westchester settings, tinnitus can become more distracting, while wind and road sound can affect outdoor listening. Counseling, sound therapy options, and properly fit devices can support day-to-day comfort."
      }
    ],
    hearingPriorities: [
      "hearing tests close to Somers and nearby northern Westchester towns",
      "tinnitus support for quiet home settings",
      "hearing aid adjustments for cars, errands, and community activities",
      "custom hearing protection for yard work, hobbies, and recreation"
    ]
  },
  "white-plains": {
    heading: "Hearing Care for Downtown White Plains and Central Westchester",
    intro:
      "White Plains patients often need hearing support for the busiest listening environments in Westchester: downtown streets, Metro-North commuting, restaurants, shopping, medical offices, and workplace meetings. The goal is not just louder sound, but better speech clarity in places where sound changes quickly.",
    listeningEnvironments: [
      {
        title: "Downtown, restaurants, and retail corridors",
        body:
          "Mamaroneck Avenue dining rooms, retail spaces, and busy sidewalks can make voices blend into background noise. Hearing technology can be selected and programmed with restaurant and crowd settings in mind."
      },
      {
        title: "Metro-North and public spaces",
        body:
          "Station announcements, traffic, escalators, and crowds create layered sound. Patients who commute or travel through White Plains may benefit from hearing aids that adapt quickly and pair with phones for alerts and directions."
      },
      {
        title: "Work, courts, and professional appointments",
        body:
          "White Plains is full of meetings, office visits, and professional conversations where missed words matter. Diagnostic testing helps separate volume needs from clarity needs before hearing aid recommendations are made."
      }
    ],
    hearingPriorities: [
      "speech clarity for meetings, appointments, and downtown errands",
      "noise management for restaurants and transit settings",
      "phone and Bluetooth support for work and family communication",
      "follow-up programming for changing central Westchester listening environments"
    ]
  },
  scarsdale: {
    heading: "Hearing Support for Scarsdale Village, Neighborhoods, and Family Life",
    intro:
      "Scarsdale listening needs often show up in everyday moments: a conversation at a village cafe, a family dinner, a community meeting, a school event, or a quiet room where tinnitus feels louder. Local hearing care should support those specific situations, not just a generic hearing aid fitting.",
    listeningEnvironments: [
      {
        title: "Village center and Metro-North routines",
        body:
          "The shift from quiet residential streets to train platforms, shops, and restaurants can be difficult when hearing loss is untreated. Adaptive hearing aid programs can help patients move between those settings more comfortably."
      },
      {
        title: "Family, school, and community gatherings",
        body:
          "Many Scarsdale patients want to keep up with soft voices, quick side conversations, and group discussion. Testing and verification help make sure devices are set for speech, not just volume."
      },
      {
        title: "Quiet homes and tinnitus awareness",
        body:
          "In quiet rooms, ringing or buzzing can become harder to ignore. Tinnitus-focused counseling and sound strategies can be part of a hearing care plan when appropriate."
      }
    ],
    hearingPriorities: [
      "hearing tests for subtle speech clarity concerns",
      "hearing aid settings for cafes, meetings, and family gatherings",
      "tinnitus support for quiet environments",
      "custom protection for music, recreation, and home projects"
    ]
  },
  rye: {
    heading: "Hearing Care for Rye's Sound Shore, Parks, and Family Activities",
    intro:
      "Rye patients are close to the Harrison office, but their day-to-day listening environments are distinct: Long Island Sound breezes, Rye Town Park, Playland-area outings, marina and shoreline activity, restaurants, and train travel. Those details matter when selecting and programming hearing aids.",
    listeningEnvironments: [
      {
        title: "Waterfront wind and outdoor listening",
        body:
          "Wind, moisture, and open-air background sound near the Sound Shore can interfere with speech. Hearing aids with wind-noise management, moisture protection, and outdoor programs may be especially useful for Rye patients."
      },
      {
        title: "Rye Playland, parks, and family visits",
        body:
          "Outdoor events and family activities can mix laughter, music, traffic, and voices from several directions. Directional microphones and realistic follow-up programming help support comfort in these lively settings."
      },
      {
        title: "Restaurants, commuting, and errands",
        body:
          "Dining rooms, train platforms, and everyday errands often reveal hearing difficulty before quiet conversations do. A diagnostic evaluation can show whether amplification, repair, or a change in hearing aid settings is the right next step."
      }
    ],
    hearingPriorities: [
      "wind and moisture considerations for Sound Shore activity",
      "speech clarity for restaurants, parks, and family events",
      "hearing aid maintenance for devices exposed to humidity and outdoor use",
      "nearby access to the Harrison office for testing and follow-up care"
    ]
  },
  mamaroneck: {
    heading: "Hearing Solutions for Mamaroneck Harbor, the Sound Shore, and Village Life",
    intro:
      "Mamaroneck patients move between waterfront paths, Harbor Island Park, village restaurants, train travel, and busy family schedules. Hearing care for this community should account for water, wind, restaurant noise, and the need for convenient follow-up close to home.",
    listeningEnvironments: [
      {
        title: "Harbor Island Park and waterfront activity",
        body:
          "Wind and moisture around the harbor can make hearing aid comfort and reliability important. Patients who spend time near the water may benefit from technology choices and care habits that protect devices."
      },
      {
        title: "Mamaroneck Avenue dining and errands",
        body:
          "Restaurants and shops can make speech blur into background sound. Hearing aid fittings should include realistic conversations about where hearing feels hardest, not just how a test sounds in a quiet room."
      },
      {
        title: "Train and Sound Shore routines",
        body:
          "Commuting, station announcements, traffic, and quick conversations on the go all require clarity. Modern devices can be set up for mobility, phone connection, and changing noise levels."
      }
    ],
    hearingPriorities: [
      "hearing aid moisture care for Sound Shore patients",
      "restaurant and group-conversation speech clarity",
      "custom protection for music, tools, and recreational noise",
      "nearby Harrison office access for hearing aid service and repairs"
    ]
  },
  larchmont: {
    heading: "Hearing Care for Larchmont Harbor, Manor Park, and Village Conversations",
    intro:
      "Larchmont residents often need hearing support for a mix of coastal outdoor time, village errands, train travel, and close family conversations. The right hearing plan should fit the Sound Shore lifestyle and the quieter moments where missed words matter most.",
    listeningEnvironments: [
      {
        title: "Harbor breezes and outdoor walks",
        body:
          "Waterfront walks and parks can bring wind, humidity, and competing environmental sound. Hearing aids can be selected and adjusted with wind handling, comfort, and device care in mind."
      },
      {
        title: "Village shops and cafes",
        body:
          "Hard surfaces, background music, and nearby conversations make cafes and shops challenging. Follow-up programming can help patients tune devices for speech in moderate noise."
      },
      {
        title: "Metro-North and family schedules",
        body:
          "Announcements, traffic, and busy routines require hearing aids that shift smoothly between public noise and private conversation. Bluetooth features may also help with calls, directions, and alerts."
      }
    ],
    hearingPriorities: [
      "outdoor and waterfront listening comfort",
      "clear speech in cafes, shops, and family gatherings",
      "hearing aid cleaning and maintenance for humidity exposure",
      "tinnitus conversations when quiet rooms make ringing more noticeable"
    ]
  },
  "port-chester": {
    heading: "Hearing Care for Port Chester's Restaurants, Music Venues, and Border-Area Commutes",
    intro:
      "Port Chester has a lively soundscape: restaurants, nightlife, the Capitol Theatre area, train travel, I-95 traffic, and nearby waterfront neighborhoods. Hearing care here should address both speech clarity and hearing protection.",
    listeningEnvironments: [
      {
        title: "Live music and entertainment",
        body:
          "Concerts and amplified sound can be enjoyable but intense. Custom hearing protection and musician-focused earplugs can help reduce exposure while preserving sound quality."
      },
      {
        title: "Restaurant and downtown noise",
        body:
          "Busy dining rooms and street activity can make one-on-one conversation frustrating. Speech-in-noise goals should be part of the hearing aid discussion for Port Chester patients."
      },
      {
        title: "Train, I-95, and cross-border errands",
        body:
          "Transit noise and fast-moving public spaces can make announcements and conversations harder to catch. Adaptive hearing aid settings and phone connectivity can support daily travel."
      }
    ],
    hearingPriorities: [
      "custom hearing protection for concerts and loud events",
      "hearing aid programs for restaurant noise",
      "hearing tests for speech clarity concerns near the Sound Shore",
      "repair and cleaning support for devices used in active daily settings"
    ]
  },
  "rye-brook": {
    heading: "Hearing Support for Rye Brook Families, Parks, and Nearby Office Corridors",
    intro:
      "Rye Brook patients often describe hearing challenges in family gatherings, school and community events, local shopping areas, and travel between Rye, Port Chester, Purchase, and Greenwich. A local hearing plan should support those practical moments.",
    listeningEnvironments: [
      {
        title: "Family gatherings and community events",
        body:
          "Group conversations are one of the first places many people notice hearing changes. Testing can identify whether the issue is volume, clarity, background noise, or a combination."
      },
      {
        title: "Parks, recreation, and neighborhood walks",
        body:
          "Outdoor environments bring wind, distance, and voices from different directions. Hearing aids can be adjusted for comfort beyond quiet indoor rooms."
      },
      {
        title: "King Street, Purchase, and border-area travel",
        body:
          "Traffic corridors, errands, and office visits can create quick changes in background sound. Adaptive technology can help patients shift between car, sidewalk, office, and home."
      }
    ],
    hearingPriorities: [
      "hearing evaluations for family and group conversation difficulty",
      "hearing aid fittings close to Rye Brook through the Harrison office",
      "Bluetooth and phone clarity for daily scheduling and calls",
      "follow-up adjustments for errands, events, and quieter home settings"
    ]
  },
  purchase: {
    heading: "Hearing Care for Purchase Campuses, Corporate Settings, and Nearby Families",
    intro:
      "Purchase combines campus life, office corridors, residential neighborhoods, and quick access to Harrison and White Plains. Hearing needs here often center on lectures, meetings, group conversations, dining rooms, and busy roadways.",
    listeningEnvironments: [
      {
        title: "Campus lectures and performance spaces",
        body:
          "Lecture halls, classrooms, and arts venues can make distance and acoustics a problem. Hearing aids and assistive accessories can be selected with speech clarity and event listening in mind."
      },
      {
        title: "Corporate meetings and hybrid work",
        body:
          "Conference rooms and video calls can expose subtle hearing difficulty. Bluetooth streaming, remote microphones, and careful programming may help with work communication."
      },
      {
        title: "I-684, I-287, and daily travel",
        body:
          "Road noise and public spaces can make listening more tiring. A hearing evaluation can guide whether amplification or settings changes may reduce that strain."
      }
    ],
    hearingPriorities: [
      "speech clarity for meetings, lectures, and group settings",
      "phone, computer, and Bluetooth hearing aid support",
      "custom hearing protection for music and performance environments",
      "nearby access to the Harrison office for testing and follow-up"
    ]
  },
  "new-rochelle": {
    heading: "Hearing Care for New Rochelle's Downtown, Waterfront, and Commuter Routes",
    intro:
      "New Rochelle patients often need hearing support in dense, changing sound environments: downtown restaurants, transit, I-95 travel, waterfront parks, medical appointments, and family gatherings. Hearing care should be specific to that mix.",
    listeningEnvironments: [
      {
        title: "Downtown and restaurant conversations",
        body:
          "Background music, hard surfaces, and nearby tables can make speech harder to separate from noise. Hearing aid programming can prioritize speech clarity in these common settings."
      },
      {
        title: "Transit, I-95, and daily errands",
        body:
          "Announcements, traffic, and crowded spaces can create listening fatigue. Devices with adaptive noise management and phone connectivity may make daily movement easier."
      },
      {
        title: "Waterfront parks and outdoor sound",
        body:
          "Wind and open-air environments can affect comfort and clarity. Outdoor programs and routine hearing aid care can help patients stay active near the Sound Shore."
      }
    ],
    hearingPriorities: [
      "hearing tests for downtown and commuter listening challenges",
      "hearing aid settings for restaurants and public spaces",
      "wind and moisture considerations for waterfront activity",
      "tinnitus support when quiet settings make symptoms more noticeable"
    ]
  },
  hartsdale: {
    heading: "Hearing Solutions for Hartsdale, Central Avenue, and Greenburgh Routines",
    intro:
      "Hartsdale patients often move between quiet neighborhoods, Central Avenue retail, train travel, restaurants, and nearby medical appointments. That variety can make hearing loss feel inconsistent from one setting to the next.",
    listeningEnvironments: [
      {
        title: "Central Avenue shopping and errands",
        body:
          "Large stores, checkout lines, traffic, and background music can make quick conversations difficult. Hearing aids can be fine-tuned for these practical day-to-day situations."
      },
      {
        title: "Train station and commuter listening",
        body:
          "Announcements, platform noise, and phone alerts matter when traveling. Connectivity and adaptive settings can help patients stay oriented and connected."
      },
      {
        title: "Restaurants, appointments, and family rooms",
        body:
          "A good hearing plan should address both noisy public spaces and softer voices at home. Diagnostic testing helps identify the right combination of technology and communication strategies."
      }
    ],
    hearingPriorities: [
      "speech clarity in retail, restaurant, and appointment settings",
      "hearing aid adjustments for traffic and commuter noise",
      "follow-up care close to central Westchester",
      "tinnitus counseling for quiet home environments"
    ]
  },
  "mount-kisco": {
    heading: "Hearing Care for Mt. Kisco's Village Center and Northern Westchester Routines",
    intro:
      "Mt. Kisco patients often need hearing support for village restaurants, medical visits, train travel, shopping, and trips across northern Westchester. Hearing care should fit both active public settings and quiet home conversations.",
    listeningEnvironments: [
      {
        title: "Village center and restaurants",
        body:
          "Conversation in busy dining rooms and shops can be one of the clearest signs that hearing has changed. Hearing aids can be programmed to support speech while managing background sound."
      },
      {
        title: "Medical appointments and caregiver conversations",
        body:
          "Clear communication at appointments matters. Testing can help determine whether hearing technology, repairs, or listening accessories may improve confidence during important conversations."
      },
      {
        title: "Train travel and Saw Mill Parkway routes",
        body:
          "Commuting and road noise can make listening more tiring. Adaptive hearing aid features and phone pairing can help with calls, alerts, and changing environments."
      }
    ],
    hearingPriorities: [
      "hearing tests for northern Westchester patients",
      "hearing aid fitting for restaurant, medical, and commuter settings",
      "repair and cleaning support for everyday device reliability",
      "tinnitus support for quiet home or evening symptoms"
    ]
  },
  "yorktown-heights": {
    heading: "Hearing Solutions for Yorktown Heights, Taconic Travel, and Outdoor Living",
    intro:
      "Yorktown Heights patients often balance family life, car travel, local shopping, parks, trails, and quieter residential settings. Hearing care should help with both active outdoor environments and the everyday conversations that happen at home.",
    listeningEnvironments: [
      {
        title: "Taconic and Route 202 routines",
        body:
          "Road noise, errands, and car conversations can create listening fatigue. Hearing aid programs can be adjusted for comfort and clarity during daily travel."
      },
      {
        title: "Parks, trails, and outdoor activities",
        body:
          "Wind, distance, and environmental sound can affect speech outdoors. Patients who spend time outside may need attention to wind handling, comfort, and hearing protection."
      },
      {
        title: "Family gatherings and community spaces",
        body:
          "Restaurants, local events, and family rooms can require different listening strategies. Testing and follow-up care help keep hearing technology matched to real life."
      }
    ],
    hearingPriorities: [
      "hearing evaluations near Yorktown Heights through the Somers office",
      "hearing aid settings for driving, errands, and community events",
      "custom protection for tools, yard work, and recreation",
      "tinnitus support for quiet northern Westchester settings"
    ]
  },
  katonah: {
    heading: "Hearing Care for Katonah's Village, Arts Venues, and Quiet Northern Westchester Settings",
    intro:
      "Katonah has a quieter village feel, but listening needs can still be complex: train announcements, restaurants, arts events, museum visits, outdoor spaces, and soft voices at home. Local hearing care should preserve clarity without making the world feel over-amplified.",
    listeningEnvironments: [
      {
        title: "Village, train, and daily errands",
        body:
          "Small shops, station noise, and quick conversations can reveal hearing changes. Modern hearing aids can be fit for natural sound and practical daily use."
      },
      {
        title: "Music, museums, and cultural events",
        body:
          "Arts and performance settings require a different approach than ordinary speech. Patients may benefit from music programs, custom hearing protection, or accessories for distance listening."
      },
      {
        title: "Quiet homes and outdoor preserves",
        body:
          "Quiet environments can make tinnitus more noticeable, while outdoor spaces can introduce wind and distance. Tinnitus counseling and outdoor programming can be part of a personalized plan."
      }
    ],
    hearingPriorities: [
      "natural-sound hearing aid fittings for quiet and moderate settings",
      "hearing protection and music-friendly listening support",
      "tinnitus conversations for quiet home environments",
      "nearby Somers office access for follow-up and repairs"
    ]
  },
  bedford: {
    heading: "Hearing Support for Bedford's Village Life, Preserves, and Social Gatherings",
    intro:
      "Bedford patients often describe a blend of quiet residential life, outdoor time, local meetings, family gatherings, and travel between Bedford Hills, Katonah, Mt. Kisco, and Somers. Hearing care should feel personal to those settings.",
    listeningEnvironments: [
      {
        title: "Village meetings and social events",
        body:
          "Group conversations, soft voices, and rooms with background noise can make hearing loss more noticeable. Speech-focused testing helps guide the right next step."
      },
      {
        title: "Preserves, gardens, and outdoor routines",
        body:
          "Wind and distance can make outdoor speech less clear. Hearing aids can be adjusted for outdoor comfort, and custom protection can help with tools or recreational noise."
      },
      {
        title: "Quiet evenings and tinnitus",
        body:
          "In quieter homes, ringing or buzzing can stand out. Tinnitus support may include education, sound strategies, and hearing technology when appropriate."
      }
    ],
    hearingPriorities: [
      "diagnostic hearing testing for subtle clarity concerns",
      "hearing aid settings for meetings and social gatherings",
      "outdoor listening comfort and hearing protection",
      "tinnitus support for quiet residential settings"
    ]
  },
  chappaqua: {
    heading: "Hearing Care for Chappaqua's Village, Schools, and Wooded Neighborhoods",
    intro:
      "Chappaqua patients often need hearing support for village errands, school and community events, train travel, wooded neighborhoods, and busy family schedules. Local hearing care should make it easier to follow conversation without losing comfort in quieter spaces.",
    listeningEnvironments: [
      {
        title: "Village center and Metro-North travel",
        body:
          "Station announcements, traffic, and restaurant noise can be difficult when hearing clarity is reduced. Adaptive hearing aids can help patients move between public noise and conversation."
      },
      {
        title: "School, family, and community events",
        body:
          "Group settings often reveal hearing challenges before one-on-one conversations do. A hearing evaluation can help identify the settings where support is most needed."
      },
      {
        title: "Wooded neighborhoods and quiet homes",
        body:
          "Quiet surroundings can make tinnitus more noticeable, while outdoor sounds can vary by season and weather. Counseling and device programming should reflect those everyday realities."
      }
    ],
    hearingPriorities: [
      "speech clarity for family, school, and community conversations",
      "commuter-friendly hearing aid settings and phone pairing",
      "tinnitus support for quiet home settings",
      "custom protection for yard work and recreation"
    ]
  },
  armonk: {
    heading: "Hearing Solutions for Armonk's Town Center, Office Corridors, and I-684 Travel",
    intro:
      "Armonk patients may need hearing support for work meetings, restaurants, town-center errands, nearby corporate campuses, family gatherings, and travel along I-684. Hearing care should focus on communication where details matter.",
    listeningEnvironments: [
      {
        title: "Meetings and professional conversations",
        body:
          "Conference rooms, hybrid calls, and side conversations can make untreated hearing loss more frustrating. Bluetooth streaming and remote microphone options may be worth discussing."
      },
      {
        title: "Restaurants and town-center activity",
        body:
          "Dining rooms and local shops can combine background music, traffic, and multiple voices. Hearing aids can be programmed for speech in these common settings."
      },
      {
        title: "Reservoir-area roads and daily travel",
        body:
          "Road noise and car conversations can be tiring. Follow-up adjustments can help patients balance audibility with comfort during travel."
      }
    ],
    hearingPriorities: [
      "workplace and meeting-room speech clarity",
      "restaurant and social-event noise management",
      "phone and computer connectivity for hearing aids",
      "hearing protection for tools, recreation, and loud hobbies"
    ]
  },
  pleasantville: {
    heading: "Hearing Care for Pleasantville's Village Events, Film Center, and Train Routines",
    intro:
      "Pleasantville's listening environments include village restaurants, the Jacob Burns Film Center area, train travel, farmers-market style events, nearby college activity, and family gatherings. Hearing care should support both entertainment and everyday conversation.",
    listeningEnvironments: [
      {
        title: "Film, performances, and public events",
        body:
          "Theaters and event spaces can create distance, echoes, and changing volume. Hearing technology, accessories, or hearing protection may help depending on the situation."
      },
      {
        title: "Village restaurants and cafes",
        body:
          "Background music and close tables can make speech harder to follow. Hearing aid programming can be adjusted for dining and group conversation."
      },
      {
        title: "Train, errands, and family schedules",
        body:
          "Public announcements, traffic, and phone calls all matter in daily routines. Connectivity and adaptive settings can help patients stay connected between home and the village."
      }
    ],
    hearingPriorities: [
      "speech clarity for restaurants, films, events, and family gatherings",
      "hearing aid programs for train and public-space listening",
      "custom protection for music and loud recreation",
      "follow-up care for changing listening needs"
    ]
  },
  greenwich: {
    heading: "Hearing Care Near Greenwich Avenue, the Waterfront, and Lower Fairfield County",
    intro:
      "Greenwich patients often need hearing support for busy shopping and dining, Metro-North travel, waterfront activity, family events, and the shift between Connecticut and nearby Westchester offices. The Harrison office can be a practical option for many Greenwich-area patients.",
    listeningEnvironments: [
      {
        title: "Greenwich Avenue and restaurant noise",
        body:
          "Busy shops, dining rooms, and background music can make speech blend into the environment. Hearing aid settings should be matched to these real social situations."
      },
      {
        title: "Waterfront parks, marinas, and outdoor activity",
        body:
          "Wind and moisture near the water can affect both listening comfort and device care. Patients may want to discuss moisture-resistant options, drying routines, and outdoor programs."
      },
      {
        title: "Metro-North, I-95, and Merritt Parkway travel",
        body:
          "Travel noise and public announcements can create listening fatigue. Adaptive devices and phone connectivity can support directions, calls, and alerts."
      }
    ],
    hearingPriorities: [
      "hearing tests near Greenwich through nearby Westchester offices",
      "restaurant and shopping speech clarity",
      "wind and moisture planning for waterfront activity",
      "hearing aid service, cleaning, and repair support close to the NY/CT border"
    ]
  },
  mahopac: {
    heading: "Hearing Solutions for Mahopac, Lake Life, and Southern Putnam County",
    intro:
      "Mahopac patients often split time between Lake Mahopac, Route 6 and 6N errands, family gatherings, boating or outdoor recreation, and trips to the Somers office. Hearing care should reflect both recreational sound and everyday communication.",
    listeningEnvironments: [
      {
        title: "Lake Mahopac and outdoor recreation",
        body:
          "Water, wind, and humidity can affect hearing aid comfort and maintenance. Patients who spend time near the lake may benefit from moisture-aware device care and outdoor settings."
      },
      {
        title: "Route 6 errands and car conversations",
        body:
          "Road noise, shopping areas, and car travel can make speech harder to catch. Hearing aids can be adjusted for comfort in vehicles and public spaces."
      },
      {
        title: "Quiet homes and northern-county evenings",
        body:
          "Tinnitus can feel more noticeable in quiet environments. A hearing evaluation can help determine whether hearing technology, sound strategies, or tinnitus counseling may help."
      }
    ],
    hearingPriorities: [
      "hearing testing near southern Putnam through the Somers office",
      "hearing aid maintenance for lake, humidity, and outdoor use",
      "speech clarity for car travel, errands, and family gatherings",
      "tinnitus support for quiet home settings"
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
