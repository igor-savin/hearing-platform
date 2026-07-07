import type { Metadata } from "next";
import crawl from "@/data/crawl.json";
import {
  brandPath,
  hearingAidBrandsPath,
  hearingAidProducts,
  productBrands,
  productPath,
  productsRootPath
} from "@/lib/products";
import {
  areaCities,
  areaCounties,
  cityForPath,
  cityPath,
  countyForCity,
  countyForPath,
  countyPath,
  citiesForCounty,
  localFlavorForCity,
  localFlavorForCounty,
  officePathForCity,
  serviceAreasRootPath
} from "@/lib/serviceAreas";
import { providerPath, providerProfiles } from "@/lib/team";

export const baseUrl = "https://www.audiologyassociates.org";
export const siteName = "Audiology Associates of Westchester";
export const primaryPhone = "(914) 821-6496";
export const primaryPhoneHref = "tel:+19148216496";
export const zocdocUrl = "https://www.zocdoc.com/practice/audiology-associates-of-westchester-69184";
export const zocdocPracticeId = "69184";
export const logoUrl =
  "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/Audiologoy-Associates-of-West-Chester-logo-1920w.png";

type CrawlImage = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

type CrawlPage = {
  url: string;
  status: number;
  title: string;
  h1: string;
  metaDescription: string;
  canonical: string;
  type: string;
  sections: string[];
  images: CrawlImage[];
  internalLinks: { href: string; text: string }[];
  forms: unknown[];
  schema: string[];
  indexability: string;
  text: string[];
};

export type SitePageType =
  | "home"
  | "service"
  | "location"
  | "service-area"
  | "hearing-aids"
  | "products-index"
  | "product-brand-index"
  | "product-brand"
  | "product"
  | "service-areas-index"
  | "area-county"
  | "area-city"
  | "educational"
  | "blog-index"
  | "blog-post"
  | "contact"
  | "form"
  | "team"
  | "provider"
  | "careers"
  | "legal"
  | "thank-you"
  | "page";

export type Location = {
  name: string;
  path: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  phoneHref: string;
  fax?: string;
  hours: string[];
  type: "office" | "service-area";
  nearby: string[];
  note?: string;
};

export type SitePage = {
  path: string;
  url: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  type: SitePageType;
  lastModified?: string;
  canonical: string;
  heroImage?: CrawlImage;
  images: CrawlImage[];
  sections: string[];
  body: string[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
};

export const services = [
  {
    title: "Hearing Testing",
    path: "/hearing-testing",
    description: "Diagnostic hearing evaluations that help identify hearing needs and next steps."
  },
  {
    title: "Hearing Aid Fitting",
    path: "/hearing-aid-fitting",
    description: "Personalized hearing aid selection, fitting, verification, and follow-up care."
  },
  {
    title: "Tinnitus Therapy",
    path: "/tinnitus-therapy",
    description: "Patient-centered tinnitus support and management options."
  },
  {
    title: "Hearing Protection",
    path: "/hearing-protection",
    description: "Custom hearing protection for musicians, work, recreation, and daily life."
  },
  {
    title: "Hearing Aid Repair",
    path: "/hearing-aid-repair",
    description: "Troubleshooting, cleaning, adjustment, and repair support for hearing aids."
  }
];

export const locations: Location[] = [
  {
    name: "Harrison, NY Location",
    path: "/harrison-ny",
    city: "Harrison",
    state: "NY",
    address: "550 Mamaroneck Ave, Suite 407 (4th floor), Harrison, NY 10528",
    phone: primaryPhone,
    phoneHref: primaryPhoneHref,
    hours: ["Monday-Friday: 8:30am - 5:00pm"],
    type: "office",
    nearby: ["Rye", "Greenwich", "Scarsdale", "White Plains"],
    note: "The live site identifies this office as Suite 407 on the 4th floor."
  },
  {
    name: "Somers, NY Location",
    path: "/Somers-NY",
    city: "Somers",
    state: "NY",
    address: "325 NY 100, Somers, NY 10589",
    phone: "(914) 556-6720",
    phoneHref: "tel:+19145566720",
    fax: "(914) 556-6722",
    hours: ["Monday, Tuesday, Wednesday, Thursday: 8:30am - 5:00pm"],
    type: "office",
    nearby: ["Mahopac", "Putnam Valley", "Mt. Kisco", "Northern Westchester"]
  },
  {
    name: "White Plains, NY Location",
    path: "/White-Plains-NY",
    city: "White Plains",
    state: "NY",
    address: "785 Mamaroneck Ave., Bldg. 4, White Plains, NY 10605",
    phone: primaryPhone,
    phoneHref: primaryPhoneHref,
    fax: "(914) 949-0717",
    hours: ["Monday-Friday: 8:30am - 5:00pm"],
    type: "office",
    nearby: ["Harrison", "Scarsdale", "Rye", "Westchester County"],
    note: "This address appears on the live White Plains location page but not in the current footer/contact NAP."
  },
  {
    name: "Scarsdale, NY Location",
    path: "/Scarsdale-NY",
    city: "Scarsdale",
    state: "NY",
    address: "259 Heathcote Road, Scarsdale, NY 10583",
    phone: primaryPhone,
    phoneHref: primaryPhoneHref,
    fax: "(914) 949-0717",
    hours: ["Monday-Friday: 8:30am - 5:00pm"],
    type: "office",
    nearby: ["White Plains", "Harrison", "Rye", "Westchester County"],
    note: "This address appears on the live Scarsdale page but not in the current footer/contact NAP."
  },
  {
    name: "Greenwich, CT",
    path: "/greenwich-ct",
    city: "Greenwich",
    state: "CT",
    address: "Served from nearby Westchester County offices",
    phone: primaryPhone,
    phoneHref: primaryPhoneHref,
    hours: ["Please call for appointment availability."],
    type: "service-area",
    nearby: ["Harrison", "Rye", "Westchester County"],
    note: "The live page describes Harrison as an easy 15-minute drive from Greenwich."
  },
  {
    name: "Rye, NY",
    path: "/rye-ny",
    city: "Rye",
    state: "NY",
    address: "Served from the nearby Harrison office",
    phone: primaryPhone,
    phoneHref: primaryPhoneHref,
    hours: ["Please call for appointment availability."],
    type: "service-area",
    nearby: ["Harrison", "Greenwich", "Scarsdale"],
    note: "The live page describes the Harrison office as about 10 minutes from Rye."
  },
  {
    name: "Mt. Kisco, NY",
    path: "/mt-kisco-ny",
    city: "Mt. Kisco",
    state: "NY",
    address: "Served from nearby Westchester County offices",
    phone: primaryPhone,
    phoneHref: primaryPhoneHref,
    hours: ["Please call for appointment availability."],
    type: "service-area",
    nearby: ["Somers", "White Plains", "Northern Westchester"],
    note: "The live page describes Audiology Associates of Westchester offices as a short drive from Mt. Kisco."
  }
];

const blogPaths = new Set([
  "/celebrating-pride-month-embracing-inclusivity-and-compassion",
  "/psoriasis-affects-more-than-your-skin",
  "/how-to-take-care-of-a-blocked-ear"
]);

const lastModifiedByPath = new Map([
  ["/lyric-invisible-hearing", "2024-01-25"],
  ["/contact-us", "2026-03-17"],
  ["/instructional-videos", "2024-03-25"],
  ["/hearing-aids-101", "2024-01-25"],
  ["/hearing-tips", "2024-01-25"],
  ["/patient-forms", "2024-06-06"],
  ["/", "2026-03-17"],
  ["/mt-kisco-ny", "2024-01-25"],
  ["/dizziness-and-ringing-in-your-ears", "2024-01-25"],
  ["/Scarsdale-NY", "2026-03-17"],
  ["/meet-the-team", "2026-03-17"],
  ["/greenwich-ct", "2024-01-25"],
  ["/White-Plains-NY", "2024-01-25"],
  ["/improve-your-hearing", "2024-01-25"],
  ["/hearing-testing", "2026-03-17"],
  ["/tinnitus-therapy", "2026-03-17"],
  ["/get-answers", "2026-03-17"],
  ["/why-choose-us", "2026-03-17"],
  ["/rye-ny", "2024-01-25"],
  ["/harrison-ny", "2025-01-15"],
  ["/prevent-hearing-loss", "2024-01-25"],
  ["/help-a-loved-one", "2025-01-02"],
  ["/hearing-loss-misconceptions", "2024-01-25"],
  ["/hearing-aid-fitting", "2026-03-17"],
  ["/Somers-NY", "2026-03-17"],
  ["/thank-you", "2026-02-25"],
  ["/careers", "2025-09-19"],
  ["/hearing-protection", "2024-06-06"],
  ["/blog", "2024-05-08"],
  ["/types-of-hearing-aids", "2024-01-25"],
  ["/hearing-aid-repair", "2024-01-25"],
  ["/batteries-and-accessories", "2024-06-06"],
  ["/hearing-aids-brands", "2024-01-25"],
  ["/hearing-aid-referral-program", "2026-02-25"],
  ["/celebrating-pride-month-embracing-inclusivity-and-compassion", "2024-01-25"],
  ["/psoriasis-affects-more-than-your-skin", "2024-07-09"],
  ["/how-to-take-care-of-a-blocked-ear", "2024-01-25"],
  ["/privacy", "2026-05-08"]
]);

const typeOverrides = new Map<string, SitePageType>([
  ["/", "home"],
  ["/blog", "blog-index"],
  ["/contact-us", "contact"],
  ["/patient-forms", "form"],
  ["/meet-the-team", "team"],
  ["/careers", "careers"],
  ["/privacy", "legal"],
  ["/thank-you", "thank-you"],
  ["/hearing-tips", "educational"],
  ["/why-choose-us", "page"],
  ["/hearing-aid-referral-program", "hearing-aids"]
]);

function fixSpacing(value: string) {
  return value
    .replace(/AudiologistServing/g, "Audiologist Serving")
    .replace(/Testfor/g, "Test for")
    .replace(/Treatmentfor/g, "Treatment for")
    .replace(/Protectionfor/g, "Protection for")
    .replace(/Frequently Asked QuestionsAbout/g, "Frequently Asked Questions About")
    .replace(/providebest-practice/g, "provide best-practice")
    .replace(/informationfor/g, "information for")
    .replace(/American Board of Audiology \.CH-TM/g, "American Board of Audiology. CH-TM")
    .replace(/hearing aidin/g, "hearing aid in")
    .replace(/\s+/g, " ")
    .trim();
}

function expandBodyLine(line: string) {
  const withBreaks = line
    .replace(/(We receive your Personal Information from various sources:)\s+When/g, "$1|When")
    .replace(/(We do not rent, sell, or share Users’ information with third parties except as described in this Privacy Policy\. We may use the information for the following:)\s*Communicating/g, "$1|Communicating")
    .replace(/(You may request to:)\s+Receive/g, "$1|Receive")
    .replace(/Custom Ear Molds and PlugsWe provide/g, "Custom Ear Molds and Plugs|We provide")
    .replace(/Cell Phone AccessoriesWe offer/g, "Cell Phone Accessories|We offer")
    .replace(/Audiometric TestAn audiometric test/g, "Audiometric Test|An audiometric test")
    .replace(/TympanometryTympanometry tests/g, "Tympanometry|Tympanometry tests")
    .replace(/OAEsAcoustically evoked/g, "OAEs|Acoustically evoked")
    .replace(/Maskers – A tinnitus masker/g, "|Maskers – A tinnitus masker")
    .replace(/Allergy Treatment – Allergy symptoms/g, "|Allergy Treatment – Allergy symptoms")
    .replace(/Avoid heat, moisture, and hair products\.Follow/g, "Avoid heat, moisture, and hair products.|Follow")
    .replace(/When not in use, turn them off\.As soon/g, "When not in use, turn them off.|As soon")
    .replace(/batteries die, replace them\. Make sure/g, "batteries die, replace them.|Make sure")
    .replace(/\.The best way/g, ".|The best way")
    .replace(/patient\.Otolaryngologists/g, "patient.|Otolaryngologists")
    .replace(/DispenserCollege:/g, "Dispenser|College:")
    .replace(/(\d{4})Graduate:/g, "$1|Graduate:")
    .replace(/(\d{4})Board Certification:/g, "$1|Board Certification:")
    .replace(/Awards:/g, "|Awards:")
    .replace(/Certificate Holder:/g, "|Certificate Holder:")
    .replace(/Certification:/g, "|Certification:")
    .replace(/Professional Affiliations:/g, "|Professional Affiliations:")
    .replace(/Professional Proficiency/g, "|Professional Proficiency")
    .replace(/Hearing AssociationLong Island/g, "Hearing Association|Long Island");

  return withBreaks
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean)
    .flatMap((part) => {
      const question = part.match(/^(.{8,150}\?)\s+(.+)$/);
      if (question) return [question[1], question[2]];

      const tinnitusTherapies = part.match(/^(At Audiology Associates of Westchester, we utilize the following tinnitus therapies:)\s+(.+)$/);
      if (tinnitusTherapies) return [tinnitusTherapies[1], tinnitusTherapies[2]];

      return [part];
    })
    .map(fixSpacing);
}

function mostlyCoveredByOtherLines(line: string, allLines: string[]) {
  if (line.length < 120) return false;

  let remaining = line.toLowerCase();
  let covered = 0;
  const candidates = allLines
    .filter((other) => other !== line && other.length > 70 && line.toLowerCase().includes(other.toLowerCase()))
    .sort((a, b) => b.length - a.length);

  for (const candidate of candidates) {
    const lowerCandidate = candidate.toLowerCase();
    if (!remaining.includes(lowerCandidate)) continue;
    covered += lowerCandidate.length;
    remaining = remaining.replace(lowerCandidate, " ");
  }

  return covered / line.length > 0.72;
}

function pathFromUrl(url: string) {
  const pathname = new URL(url).pathname || "/";
  return pathname === "" ? "/" : pathname;
}

function dedupe<T>(items: T[], key: (item: T) => string) {
  const seen = new Set<string>();
  return items.filter((item) => {
    const id = key(item);
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

function cleanBodyText(page: CrawlPage, path: string) {
  const pathLabel =
    path === "/"
      ? ""
      : path
          .replace(/^\//, "")
          .replace(/-/g, " ")
          .replace(/\b\w/g, (character) => character.toUpperCase());
  const titleish = new Set([page.h1, page.title, page.title.replace(/\s*\|.*$/, ""), pathLabel].map(fixSpacing));
  const sectionish = new Set((page.sections || []).map(fixSpacing).filter(Boolean));
  const isLikelyHeading = (line: string) =>
    line.length < 130 &&
    !/[.!?]$/.test(line) &&
    !/^Call Us Today/i.test(line) &&
    !/^\(?\d{3}\)?/.test(line);
  const lines = page.text
    .map(fixSpacing)
    .flatMap(expandBodyLine)
    .filter(Boolean)
    .filter((line) => sectionish.has(line) || /^Call Us Today to Schedule/i.test(line) || !/^Call Us Today/i.test(line))
    .filter((line) => line !== primaryPhone)
    .filter((line) => !/^AUDIOLOGY ASSOCIATES OF WESTCHESTER$/i.test(line))
    .filter((line) => !/^WEBSITE DESIGN BY/i.test(line))
    .filter((line) => line !== "Privacy Policy")
    .filter((line) => line !== "New Paragraph")
    .filter((line) => !/^Harrison, NY Location550 Mamaroneck/i.test(line))
    .filter((line) => !/^Somers, NY Location325 NY 100/i.test(line))
    .filter((line) => !/^Somers, NY Location$/i.test(line))
    .filter((line) => !/^325 NY 100, Somers/i.test(line))
    .filter((line) => !/^Blog$/i.test(line))
    .filter((line) => !(line.includes("Phone:") && line.includes("Address:") && line.includes("Hours of Operation")))
    .filter((line) => !titleish.has(line))
    .filter((line, index) => index < 2 || !titleish.has(line));

  const cleaned = dedupe(lines, (line) => line.toLowerCase()).filter(
    (line, _index, allLines) => sectionish.has(line) || isLikelyHeading(line) || !mostlyCoveredByOtherLines(line, allLines)
  );

  if (path === "/thank-you") {
    return [
      "Thank you for contacting us! Your message has been received."
    ];
  }

  if (path === "/privacy" && cleaned.length < 3) {
    return [
      "Audiology Associates of Westchester Privacy Policy",
      "This page summarizes the privacy practices published on the current website, including the types of device, registration, and voluntary information collected through the site.",
      "Patients should contact the practice directly with privacy questions or to request additional information."
    ];
  }
  if (path === "/privacy" && !cleaned.includes("Audiology Associates of Westchester Privacy Policy")) {
    cleaned.unshift("Audiology Associates of Westchester Privacy Policy");
  }

  const bodyLimit = path === "/meet-the-team" ? 160 : path === "/privacy" ? 120 : 45;

  return cleaned.slice(0, bodyLimit);
}

function determineType(path: string, originalType: string): SitePageType {
  if (typeOverrides.has(path)) return typeOverrides.get(path)!;
  if (blogPaths.has(path)) return "blog-post";
  const location = locations.find((item) => item.path === path);
  if (location?.type === "service-area") return "service-area";
  if (location?.type === "office") return "location";
  if (originalType === "service") return "service";
  if (originalType === "hearing-aids") return "hearing-aids";
  if (originalType === "educational") return "educational";
  if (originalType === "legal") return "legal";
  return "page";
}

function imageForPage(page: CrawlPage) {
  return page.images.find(
    (image) =>
      image.src &&
      !image.src.includes("facebook.com/tr") &&
      !image.src.includes("zd_bookonline") &&
      !image.src.includes("logo")
  );
}

function listText(items: string[]) {
  if (items.length <= 1) return items[0] || "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function officeForAreaCityPath(path: string) {
  const city = cityForPath(path);
  if (!city) return null;
  return locations.find((location) => location.path === officePathForCity(city)) || null;
}

function serviceAreaIndexFaqs() {
  return [
    {
      question: "Which Westchester County communities does Audiology Associates of Westchester serve?",
      answer:
        "The practice serves patients across Westchester County, including Harrison, Somers, White Plains, Scarsdale, Rye, Mamaroneck, Larchmont, Port Chester, Rye Brook, Purchase, New Rochelle, Hartsdale, Mt. Kisco, Yorktown Heights, Katonah, Bedford, Chappaqua, Armonk, and Pleasantville."
    },
    {
      question: "Does the practice see patients from Greenwich, CT and southern Putnam County?",
      answer:
        "Yes. Greenwich-area patients can often use nearby Westchester County offices, and Mahopac or southern Putnam County patients can consider the Somers office. Patients should call to confirm appointment availability and the best office for their needs."
    },
    {
      question: "What hearing care services are available across the service area?",
      answer:
        "Core services include hearing testing, hearing aid fitting, tinnitus therapy, hearing protection, hearing aid repair, hearing aid accessories, and hearing loss education for patients throughout Westchester County and nearby communities."
    },
    {
      question: "How should I choose the right office for hearing care near me?",
      answer:
        "The best office depends on your town, appointment availability, and the type of care you need. The service-area pages identify nearby communities and office context, and the practice can confirm the most convenient location when you call."
    }
  ];
}

function countyAreaFaqs(page: SitePage) {
  const county = countyForPath(page.path);
  if (!county) return serviceAreaIndexFaqs();
  const flavor = localFlavorForCounty(county);
  const cities = citiesForCounty(county.slug);
  const cityNames = listText(cities.slice(0, 8).map((city) => `${city.name}, ${city.state}`));
  const regionNames = flavor ? listText(flavor.regions.map((region) => region.title.toLowerCase())) : county.name;
  const priority = flavor?.hearingPriorities[0] || "hearing testing and hearing aid care";

  return [
    {
      question: `Where can ${county.name}, ${county.state} patients schedule audiology care?`,
      answer: `${county.officeContext} Patients can call Audiology Associates of Westchester to confirm appointment availability and the most convenient office for hearing testing, hearing aid fitting, tinnitus therapy, hearing protection, or hearing aid repair.`
    },
    {
      question: `Which ${county.name} cities and communities are served?`,
      answer: `${county.name} service-area pages include ${cityNames}. Nearby communities may also be served depending on appointment needs and office availability.`
    },
    {
      question: `How do local listening environments in ${county.name} affect hearing aid recommendations?`,
      answer: flavor
        ? `${flavor.intro} During a hearing aid consultation, the audiology team can discuss how ${regionNames} affect speech clarity, sound comfort, device care, and follow-up programming.`
        : `Local listening environments vary across ${county.name}. A hearing aid consultation should consider restaurants, commuting, family conversations, outdoor activity, and quiet home settings.`
    },
    {
      question: `Does Audiology Associates of Westchester offer hearing aid repair and tinnitus support for ${county.name} patients?`,
      answer: `Yes. ${priority} is part of the broader care available to ${county.name} patients. The practice can confirm whether your needs are best handled through an appointment, a hearing aid service visit, or a tinnitus-focused consultation.`
    }
  ];
}

function cityAreaFaqs(page: SitePage) {
  const city = cityForPath(page.path);
  if (!city) return serviceAreaIndexFaqs();
  const office = officeForAreaCityPath(page.path);
  const county = countyForCity(city);
  const flavor = localFlavorForCity(city);
  const localEnvironment = flavor?.listeningEnvironments[0];
  const secondEnvironment = flavor?.listeningEnvironments[1];
  const servicesText = listText(city.patientNeeds);
  const nearbyText = listText(city.nearby.map((name) => `${name}`));
  const officeText = office
    ? `${office.name} at ${office.address}`
    : "one of the Westchester County offices";

  return [
    {
      question: `Where can I get a hearing test near ${city.name}, ${city.state}?`,
      answer: `${city.name} patients can contact Audiology Associates of Westchester about hearing testing through ${officeText}. ${city.travelNote} The office can confirm appointment availability and whether diagnostic testing, hearing aid support, or tinnitus care is the right next step.`
    },
    {
      question: `Which audiology services are most relevant for ${city.name} patients?`,
      answer: `Common needs for ${city.name} patients include ${servicesText}. Core services include hearing testing, hearing aid fitting, tinnitus therapy, hearing protection, hearing aid repair, and hearing aid education.`
    },
    {
      question: localEnvironment
        ? `Can hearing aids help with ${localEnvironment.title.toLowerCase()} around ${city.name}?`
        : `Can hearing aids help in everyday listening situations around ${city.name}?`,
      answer: localEnvironment
        ? `${localEnvironment.body} A professional hearing aid fitting can account for these ${city.name} listening environments through technology selection, verification, and follow-up programming.`
        : `Many patients notice difficulty in restaurants, cars, appointments, family gatherings, or outdoor settings. A hearing evaluation can identify whether hearing aids or other support may help.`
    },
    {
      question: secondEnvironment
        ? `Do ${city.name} patients need hearing protection or tinnitus support for ${secondEnvironment.title.toLowerCase()}?`
        : `Do ${city.name} patients have access to hearing protection and tinnitus support?`,
      answer: secondEnvironment
        ? `${secondEnvironment.body} Patients from ${city.name} can ask about tinnitus therapy, custom hearing protection, and hearing aid settings that match local routines.`
        : `Yes. Patients from ${city.name} can ask about tinnitus therapy, custom hearing protection, and hearing aid settings that match local routines.`
    },
    {
      question: `Does the practice serve communities near ${city.name}, ${city.state}?`,
      answer: `Yes. Nearby communities connected to this service area include ${nearbyText}. ${county ? `${city.name} is part of the ${county.name}, ${county.state} service area.` : ""} Patients should call to confirm the best office and appointment timing.`
    }
  ];
}

function baseFaqs(page: SitePage) {
  if (page.type === "product") {
    return [
      {
        question: "How do I know whether this hearing aid is right for me?",
        answer:
          "A hearing test, listening-needs discussion, and professional fitting consultation are needed before choosing any hearing aid model."
      },
      {
        question: "Does Audiology Associates of Westchester confirm availability and candidacy?",
        answer:
          "Yes. Product availability, candidacy, and clinical recommendations should be confirmed directly with the practice."
      }
    ];
  }

  if (page.type === "service-areas-index" || page.type === "area-county" || page.type === "area-city") {
    if (page.type === "area-city") return cityAreaFaqs(page);
    if (page.type === "area-county") return countyAreaFaqs(page);
    return serviceAreaIndexFaqs();
  }

  if (page.type === "product-brand" || page.type === "product-brand-index" || page.type === "products-index") {
    return [
      {
        question: "Which hearing aid brand is best?",
        answer:
          "There is no single best brand for everyone. The right choice depends on your hearing test, listening goals, comfort, handling needs, phone compatibility, and follow-up care."
      },
      {
        question: "Can I compare brands during an appointment?",
        answer:
          "Yes. The audiology team can explain differences among hearing aid brands and recommend options based on your individual needs."
      }
    ];
  }

  if (page.type === "provider") {
    const provider = providerProfiles.find((item) => providerPath(item) === page.path);
    return [
      {
        question: `What does ${provider?.name || "this audiologist"} specialize in?`,
        answer: provider
          ? `${provider.name}'s profile highlights ${listText(provider.specialties.slice(0, 5))}. Patients should schedule an appointment for recommendations based on their hearing needs.`
          : "This provider page summarizes audiology experience, credentials, and areas of focus using information published by Audiology Associates of Westchester."
      },
      {
        question: `Can I request an appointment with ${provider?.name || "this provider"}?`,
        answer:
          "Patients can call Audiology Associates of Westchester or use the appointment link on the website. Provider availability and clinical recommendations should be confirmed directly with the practice."
      },
      {
        question: "Where does Audiology Associates of Westchester provide care?",
        answer:
          "The practice serves Westchester County and nearby communities through offices including Harrison and Somers, with additional location information listed on the site."
      }
    ];
  }

  if (page.type === "service") {
    return [
      {
        question: `Who should schedule ${page.h1.replace(/ for .*/, "").toLowerCase()}?`,
        answer:
          "Patients who notice changes in hearing, communication, sound comfort, tinnitus, or hearing aid performance should call the practice to schedule an appointment for personalized guidance."
      },
      {
        question: "What happens during the visit?",
        answer:
          "The audiology team reviews your concerns, evaluates your hearing needs, explains findings in patient-friendly language, and discusses appropriate next steps."
      },
      {
        question: "Do I need to choose a location before calling?",
        answer:
          "No. You can call the practice and the team can help identify the most convenient office or appointment option."
      }
    ];
  }

  if (page.type === "location" || page.type === "service-area") {
    const location = locations.find((item) => item.path === page.path);
    return [
      {
        question: `Does Audiology Associates of Westchester serve ${location?.city || "this area"}?`,
        answer:
          location?.type === "office"
            ? `Yes. The ${location.name} page lists office information, hours, phone, and services for patients in and near ${location.city}.`
            : `Yes. The practice serves patients from ${location?.city || "this community"} and nearby communities through its Westchester County offices.`
      },
      {
        question: "What services are available?",
        answer:
          "Core services include hearing testing, hearing aid fitting, tinnitus therapy, hearing protection, hearing aid repair, and hearing aid education."
      },
      {
        question: "How do I schedule?",
        answer:
          "Call the practice directly or use the appointment link on the website to request care. Appointment availability and clinical recommendations should be confirmed with the office."
      }
    ];
  }

  return [
    {
      question: "How can I get personalized hearing care advice?",
      answer:
        "The educational information on this site is general. For personalized recommendations, schedule an appointment with Audiology Associates of Westchester."
    },
    {
      question: "Which locations does the practice serve?",
      answer:
        "The practice serves Westchester County and nearby communities including Harrison, Somers, White Plains, Scarsdale, Rye, Mt. Kisco, and Greenwich."
    }
  ];
}

function relatedLinks(page: SitePage) {
  const links = [
    ...services.map((service) => ({ label: service.title, href: service.path })),
    ...locations.slice(0, 4).map((location) => ({ label: location.name, href: location.path }))
  ].filter((link) => link.href !== page.path);

  if (page.type === "blog-post") {
    return generatedPages
      .filter((post) => post.path !== page.path)
      .filter((post) => post.type === "blog-post")
      .map((post) => ({ label: post.h1, href: post.path }))
      .slice(0, 3);
  }

  return links.slice(0, 7);
}

const uniqueCrawlPages = dedupe(
  (crawl as CrawlPage[]).filter((page) => page.status === 200),
  (page) => pathFromUrl(page.url)
);

const generatedPages = uniqueCrawlPages
  .map((page): SitePage => {
    const path = pathFromUrl(page.url);
    const type = determineType(path, page.type);
    const h1 = page.h1 || (path === "/privacy" ? "" : page.title.replace(/\s*\|.*$/, ""));
    const metaDescription =
      fixSpacing(page.metaDescription) ||
      `${h1} from ${siteName}, serving Westchester County and nearby communities.`;
    const images = dedupe(page.images.filter((image) => image.src), (image) => image.src);
    return {
      path,
      url: `${baseUrl}${path === "/" ? "" : path}`,
      title: h1,
      metaTitle: fixSpacing(page.title || h1),
      metaDescription,
      h1,
      type,
      lastModified: lastModifiedByPath.get(path),
      canonical: `${baseUrl}${path === "/" ? "" : path}`,
      heroImage: imageForPage(page),
      images,
      sections: page.sections.map(fixSpacing).filter(Boolean),
      body: cleanBodyText(page, path),
      faqs: [],
      related: []
    };
  })
  .sort((a, b) => (a.path === "/" ? -1 : b.path === "/" ? 1 : a.path.localeCompare(b.path)));

const productHubPages: SitePage[] = [
  {
    path: productsRootPath,
    url: `${baseUrl}${productsRootPath}`,
    title: "Products",
    metaTitle: `Products | ${siteName}`,
    metaDescription:
      "Explore hearing aids, hearing aid brands, custom earmolds, and hearing protection options from Audiology Associates of Westchester.",
    h1: "Products",
    type: "products-index",
    lastModified: "2026-06-07",
    canonical: `${baseUrl}${productsRootPath}`,
    images: [],
    sections: ["Hearing Aids", "Ear Gear"],
    body: [
      "Explore hearing technology and ear care products available to discuss with the audiology team at Audiology Associates of Westchester.",
      "The right solution depends on your hearing test, communication goals, lifestyle, dexterity, comfort, and clinical recommendations."
    ],
    faqs: [],
    related: []
  },
  {
    path: hearingAidBrandsPath,
    url: `${baseUrl}${hearingAidBrandsPath}`,
    title: "Hearing Aid Brands",
    metaTitle: `Hearing Aid Brands | ${siteName}`,
    metaDescription:
      "Compare premium hearing aid brands including Oticon, Phonak, Starkey, Signia, Widex, ReSound, Lyric, and custom ear protection options.",
    h1: "Hearing Aid Brands",
    type: "product-brand-index",
    lastModified: "2026-06-07",
    canonical: `${baseUrl}${hearingAidBrandsPath}`,
    images: [],
    sections: ["Your Partner for Better Hearing", "Our Featured Hearing Aid Brands"],
    body: [
      "Selecting the right hearing aid is a personal decision. Audiology Associates of Westchester works with patients to compare technology, sound quality, comfort, connectivity, and care needs.",
      "A professional hearing aid recommendation starts with a complete hearing evaluation and a conversation about the real listening situations you want to improve."
    ],
    faqs: [],
    related: []
  },
  ...productBrands.map((brand): SitePage => ({
    path: brandPath(brand.slug),
    url: `${baseUrl}${brandPath(brand.slug)}`,
    title: `${brand.name} Hearing Aids`,
    metaTitle: `${brand.name} Hearing Aids | ${siteName}`,
    metaDescription: `${brand.summary} Learn about ${brand.name} options with Audiology Associates of Westchester.`,
    h1: `${brand.name} Hearing Aids`,
    type: "product-brand",
    lastModified: "2026-06-07",
    canonical: `${baseUrl}${brandPath(brand.slug)}`,
    images: [],
    sections: [brand.headline, `${brand.name} Product Families`, "Explore Other Premium Hearing Aid Brands"],
    body: [brand.legacy, brand.summary, ...brand.technology.map((item) => `${item.title}: ${item.body}`)],
    faqs: [],
    related: []
  })),
  ...hearingAidProducts.map((product): SitePage => ({
    path: productPath(product),
    url: `${baseUrl}${productPath(product)}`,
    title: product.title,
    metaTitle: `${product.title} Hearing Aids | ${siteName}`,
    metaDescription: `${product.subtitle}. Learn whether ${product.title} may be appropriate for your hearing needs with Audiology Associates of Westchester.`,
    h1: product.title,
    type: "product",
    lastModified: "2026-06-07",
    canonical: `${baseUrl}${productPath(product)}`,
    heroImage: {
      src: product.image,
      alt: product.imageAlt
    },
    images: [
      {
        src: product.image,
        alt: product.imageAlt
      }
    ],
    sections: [product.subtitle, "Technology", "Frequently Asked Questions"],
    body: [...product.overview, ...product.technology.map((item) => `${item.title}: ${item.body}`)],
    faqs: product.faqs,
    related: []
  }))
];

const serviceAreaPages: SitePage[] = [
  {
    path: serviceAreasRootPath,
    url: `${baseUrl}${serviceAreasRootPath}`,
    title: "Areas We Serve",
    metaTitle: `Areas We Serve | ${siteName}`,
    metaDescription:
      "Explore audiology service areas for Audiology Associates of Westchester, including Westchester County, nearby Fairfield County communities, and southern Putnam County.",
    h1: "Hearing Aids & Audiology Across Westchester County",
    type: "service-areas-index",
    lastModified: "2026-07-06",
    canonical: `${baseUrl}${serviceAreasRootPath}`,
    images: [],
    sections: ["Westchester County", "Nearby Counties", "Plan Your Visit"],
    body: [
      "Audiology Associates of Westchester serves patients across Westchester County and nearby communities through offices in Harrison, Somers, White Plains, and Scarsdale.",
      "Explore county and city pages to find the most relevant office, services, and nearby communities for hearing testing, hearing aids, tinnitus therapy, hearing protection, and hearing aid repair."
    ],
    faqs: [],
    related: []
  },
  ...areaCounties.map((county): SitePage => ({
    path: countyPath(county.slug),
    url: `${baseUrl}${countyPath(county.slug)}`,
    title: `${county.name}, ${county.state}`,
    metaTitle: `Audiologist in ${county.name}, ${county.state} | ${siteName}`,
    metaDescription: `${county.summary} Find nearby hearing tests, hearing aids, tinnitus therapy, hearing protection, and hearing aid repair.`,
    h1: county.headline,
    type: "area-county",
    lastModified: "2026-07-06",
    canonical: `${baseUrl}${countyPath(county.slug)}`,
    images: [],
    sections: ["Cities and Communities", "Services", "Plan Your Visit"],
    body: [county.summary, county.officeContext],
    faqs: [],
    related: []
  })),
  ...areaCities.map((city): SitePage => ({
    path: cityPath(city),
    url: `${baseUrl}${cityPath(city)}`,
    title: `${city.name}, ${city.state}`,
    metaTitle: `Audiologist near ${city.name}, ${city.state} | ${siteName}`,
    metaDescription: `${city.localContext} Schedule hearing testing, hearing aid fitting, tinnitus therapy, hearing protection, or hearing aid repair near ${city.name}.`,
    h1: `Audiologist Near ${city.name}, ${city.state}`,
    type: "area-city",
    lastModified: "2026-07-06",
    canonical: `${baseUrl}${cityPath(city)}`,
    images: [],
    sections: ["Local Audiology Care", "Services", "Nearby Communities", "Frequently Asked Questions"],
    body: [city.localContext, city.travelNote, ...city.patientNeeds],
    faqs: [],
    related: []
  }))
];

const providerPages: SitePage[] = providerProfiles.map((provider): SitePage => ({
  path: providerPath(provider),
  url: `${baseUrl}${providerPath(provider)}`,
  title: provider.name,
  metaTitle: `${provider.name} | Audiologist at ${siteName}`,
  metaDescription: `${provider.name} is ${provider.role.toLowerCase()} at Audiology Associates of Westchester. Learn about credentials, specialties, and audiology experience.`,
  h1: provider.name,
  type: "provider",
  lastModified: "2026-07-07",
  canonical: `${baseUrl}${providerPath(provider)}`,
  heroImage: {
    src: provider.image,
    alt: provider.alt
  },
  images: [
    {
      src: provider.image,
      alt: provider.alt
    }
  ],
  sections: ["About", "Specialties", "Credentials", "Frequently Asked Questions"],
  body: [provider.role, provider.quote || "", ...provider.paragraphs, ...provider.credentials, ...(provider.affiliations || [])].filter(Boolean),
  faqs: [],
  related: []
}));

export const pages: SitePage[] = [...generatedPages, ...productHubPages, ...serviceAreaPages, ...providerPages].map((page) => {
  const withFaqs: SitePage = { ...page, faqs: [] };
  withFaqs.faqs = page.faqs.length ? page.faqs : baseFaqs(withFaqs);
  withFaqs.related = relatedLinks(withFaqs);
  return withFaqs;
});

export const pagePaths = pages.map((page) => page.path);

export const blogPosts = pages.filter((page) => page.type === "blog-post");

export function getPageByPath(path: string) {
  return pages.find((page) => page.path === path);
}

export function toPath(slug?: string[]) {
  if (!slug || slug.length === 0) return "/";
  return `/${slug.join("/")}`;
}

export function buildMetadata(page: SitePage): Metadata {
  const image = page.heroImage?.src || "/opengraph-image";
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: page.canonical
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: page.canonical,
      siteName,
      type: page.type === "blog-post" ? "article" : "website",
      images: [image]
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [image]
    }
  };
}

export function locationForPath(path: string) {
  return locations.find((location) => location.path === path);
}

export function splitLongText(value: string) {
  if (value.length < 520) return [value];
  return value
    .replace(/([.!?])(?=[A-Z])/g, "$1|")
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce<string[]>((acc, sentence) => {
      const last = acc[acc.length - 1];
      if (!last || last.length + sentence.length > 520) acc.push(sentence);
      else acc[acc.length - 1] = `${last} ${sentence}`;
      return acc;
    }, []);
}
