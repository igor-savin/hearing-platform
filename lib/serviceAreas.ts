export type AreaCounty = {
  slug: string;
  name: string;
  state: string;
  headline: string;
  summary: string;
  officeContext: string;
  cities: string[];
};

export type AreaCity = {
  slug: string;
  name: string;
  state: string;
  countySlug: string;
  nearestOffice: "harrison" | "somers" | "white-plains" | "scarsdale";
  nearby: string[];
  localContext: string;
  travelNote: string;
  patientNeeds: string[];
};

export const serviceAreasRootPath = "/areas-we-serve";

export const areaCounties: AreaCounty[] = [
  {
    slug: "westchester-county-ny",
    name: "Westchester County",
    state: "NY",
    headline: "Hearing aids and audiology across Westchester County",
    summary:
      "Audiology Associates of Westchester serves patients throughout Westchester County from convenient offices in Harrison, Somers, White Plains, and Scarsdale.",
    officeContext:
      "Depending on your neighborhood, the Harrison, Somers, White Plains, or Scarsdale office may be the most convenient place to schedule a hearing test, hearing aid consultation, tinnitus visit, hearing protection appointment, or hearing aid repair.",
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
    nearestOffice: "white-plains",
    nearby: ["Hartsdale", "Scarsdale", "Harrison", "Purchase"],
    localContext:
      "White Plains is central to Westchester County and remains an important service area for hearing testing, hearing aids, tinnitus therapy, and hearing protection.",
    travelNote: "Patients should call to confirm the most appropriate office location and appointment availability.",
    patientNeeds: ["central Westchester hearing evaluations", "hearing aid technology consultations", "hearing aid repair support", "tinnitus counseling"]
  },
  {
    slug: "scarsdale",
    name: "Scarsdale",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "scarsdale",
    nearby: ["Hartsdale", "White Plains", "Eastchester", "New Rochelle"],
    localContext:
      "Scarsdale patients can access audiology services through nearby Westchester County offices, including hearing tests and personalized hearing aid care.",
    travelNote: "The current site references a Scarsdale address, and patients should call to confirm appointment location details.",
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
    nearestOffice: "scarsdale",
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
    nearestOffice: "white-plains",
    nearby: ["White Plains", "Scarsdale", "Ardsley", "Greenburgh"],
    localContext:
      "Hartsdale patients can access nearby Westchester audiology care for hearing tests, hearing aid fitting, and hearing protection.",
    travelNote: "White Plains and Scarsdale-area appointments may be convenient depending on availability.",
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
    nearestOffice: "white-plains",
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
    nearestOffice: "white-plains",
    nearby: ["Purchase", "Chappaqua", "Bedford", "White Plains"],
    localContext:
      "Armonk patients can schedule hearing care through nearby Westchester offices for hearing tests, hearing aid technology, and follow-up care.",
    travelNote: "White Plains and Harrison-area appointments may be convenient depending on availability.",
    patientNeeds: ["hearing testing", "hearing aids", "hearing protection", "tinnitus care"]
  },
  {
    slug: "pleasantville",
    name: "Pleasantville",
    state: "NY",
    countySlug: "westchester-county-ny",
    nearestOffice: "white-plains",
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

const officePathByKey = {
  harrison: "/harrison-ny",
  somers: "/Somers-NY",
  "white-plains": "/White-Plains-NY",
  scarsdale: "/Scarsdale-NY"
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

