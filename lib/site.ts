import type { Metadata } from "next";
import crawl from "@/data/crawl.json";
import {
  baseUrl,
  canonicalPathFor,
  primaryPhone,
  primaryPhoneHref,
  siteName,
  titleWithBrand
} from "@/lib/siteBasics";
import { buildNextBlogPosts } from "@/lib/blogNext";
import { buildSeedBlogPosts } from "@/lib/blogSeed";
import { contentDateFor, contentDates } from "@/lib/contentDates";
import { comparisonPages } from "@/lib/conversion";
import { productGuides } from "@/lib/productGuides";
import { hearingLossPages } from "@/lib/hearingLoss";
import { pressPages } from "@/lib/press";
import { reviewsPage } from "@/lib/reviews";
import {
  brandPath,
  hearingAidBrandsPath,
  hearingAidProducts,
  productBrands,
  productPath,
  productsRootPath
} from "@/lib/products";
import { helpServicePath, helpServices, howWeCanHelpRootPath } from "@/lib/howWeCanHelp";
import { tinnitusPages, tinnitusPath, tinnitusRootPath } from "@/lib/tinnitus";
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

// Identity constants and canonicalPathFor live in lib/siteBasics.ts so client
// components can import them without dragging data/crawl.json into the browser
// bundle. Re-exported here so every existing server-side import keeps working.
export {
  baseUrl,
  siteName,
  primaryPhone,
  primaryPhoneHref,
  zocdocUrl,
  zocdocPracticeId,
  logoPath,
  logoUrl,
  canonicalPathFor,
  titleWithBrand
} from "@/lib/siteBasics";

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
  | "how-we-can-help-index"
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
  streetAddress?: string;
  postalCode?: string;
  phone: string;
  phoneHref: string;
  fax?: string;
  hours: string[];
  // Machine-readable opening hours for JSON-LD. `hours` above is the
  // human-facing display string; schema.org needs dayOfWeek/opens/closes.
  hoursSpec?: Array<{ days: string[]; opens: string; closes: string }>;
  // Verified from the place marker in each office's own directionsUrl below,
  // not geocoded from the street address: the Harrison office is a suite on the
  // fourth floor, and address geocoders routinely land on the wrong side of a
  // building. Offices only -- service areas are not places we occupy.
  geo?: { latitude: number; longitude: number };
  type: "office" | "service-area";
  nearby: string[];
  directionsUrl?: string;
  // What a patient needs to know between parking the car and sitting down:
  // where to leave the car, and what floor the office is on. Offices only.
  arrival?: string;
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
  // First publication, kept distinct from lastModified. The two used to carry
  // the same value on every article, which told crawlers that nothing on the
  // site had ever been revised. Absent for pages carried over from the
  // pre-2026 site, whose original publication date is not recoverable here;
  // omitting it is more honest than claiming the date this repo happened to
  // start.
  datePublished?: string;
  canonical: string;
  heroImage?: CrawlImage;
  images: CrawlImage[];
  sections: string[];
  body: string[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
  blogMeta?: {
    frame: string;
    byline: string;
    reviewedBy: string;
    // Provider slugs from lib/team.ts. When set, the article is attributed to
    // that named clinician in the rendered byline and in the JSON-LD `author`
    // and `reviewedBy`. When absent -- which is currently every article --
    // attribution falls back to the organization and the free-text `byline` /
    // `reviewedBy` strings above, exactly as before.
    //
    // These are deliberately separate from those strings rather than parsed
    // out of them: naming a clinician as the reviewer of medical content is a
    // factual claim about who reviewed what, so it should be set explicitly,
    // per article, by someone who knows it is true.
    authorSlug?: string;
    reviewedBySlug?: string;
    readTime: string;
    articleType: string;
    pullQuote: string;
    keyTakeaways: string[];
    patientQuestion: string;
    storyLead: string;
    sources?: { label: string; href: string }[];
  };
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

export const allServiceLinks = [
  ...services,
  ...helpServices.map((service) => ({
    title: service.title,
    path: helpServicePath(service),
    description: service.shortDescription
  }))
];

export const locations: Location[] = [
  {
    name: "Harrison, NY Location",
    path: "/harrison-ny",
    city: "Harrison",
    state: "NY",
    address: "550 Mamaroneck Ave, Suite 407 (4th floor), Harrison, NY 10528",
    streetAddress: "550 Mamaroneck Ave, Suite 407 (4th floor)",
    postalCode: "10528",
    phone: primaryPhone,
    phoneHref: primaryPhoneHref,
    // One line per day, the same shape as Somers below. The single compressed
    // "Monday-Friday" line left a patient unable to tell whether any one day
    // was actually a full day, and read as less considered beside the Somers
    // list on the contact page.
    hours: [
      "Monday: 8:30am - 5:00pm",
      "Tuesday: 8:30am - 5:00pm",
      "Wednesday: 8:30am - 5:00pm",
      "Thursday: 8:30am - 5:00pm",
      "Friday: 8:30am - 5:00pm"
    ],
    hoursSpec: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" }
    ],
    geo: { latitude: 40.9796062, longitude: -73.7426423 },
    type: "office",
    nearby: ["Rye", "Greenwich", "Scarsdale", "White Plains"],
    directionsUrl:
      "https://www.google.com/maps/place/Audiology+Associates+of+Westchester/@40.9796102,-73.7452172,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2941f220a4edf:0x3781801f76f64a38!8m2!3d40.9796062!4d-73.7426423!16s%2Fg%2F1thvtmkc?entry=ttu",
    arrival: "Plenty of parking in the lot. Our office is Suite 407, on the fourth floor.",
    note: "The live site identifies this office as Suite 407 on the 4th floor."
  },
  {
    name: "Somers, NY Location",
    path: "/Somers-NY",
    city: "Somers",
    state: "NY",
    address: "325 NY 100, Somers, NY 10589",
    streetAddress: "325 NY 100",
    postalCode: "10589",
    phone: "(914) 556-6720",
    phoneHref: "tel:+19145566720",
    fax: "(914) 556-6722",
    hours: [
      "Monday: 8:30am - 5:00pm",
      "Tuesday: 8:30am - 5:00pm",
      "Wednesday: 8:30am - 5:00pm",
      "Thursday: Closed",
      "Friday: 8:30am - 2:30pm"
    ],
    hoursSpec: [
      { days: ["Monday", "Tuesday", "Wednesday"], opens: "08:30", closes: "17:00" },
      { days: ["Friday"], opens: "08:30", closes: "14:30" }
    ],
    geo: { latitude: 41.326271, longitude: -73.688044 },
    type: "office",
    nearby: ["Mahopac", "Putnam Valley", "Mt. Kisco", "Northern Westchester"],
    directionsUrl:
      "https://google.com/maps?ll=41.326271,-73.688044&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=16978045113785245584",
    arrival: "Plenty of parking in the lot. Our office is at ground level, with no stairs to climb."
  },
  {
    name: "White Plains, NY",
    path: "/White-Plains-NY",
    city: "White Plains",
    state: "NY",
    address: "Served by the Harrison office at 550 Mamaroneck Ave, Suite 407 (4th floor), Harrison, NY 10528",
    phone: primaryPhone,
    phoneHref: primaryPhoneHref,
    hours: ["Call the Harrison office for appointment availability."],
    type: "service-area",
    nearby: ["Harrison", "Scarsdale", "Rye", "Westchester County"],
    note: "White Plains is a service area, not a physical office. The nearest practice location is Harrison."
  },
  {
    name: "Scarsdale, NY",
    path: "/Scarsdale-NY",
    city: "Scarsdale",
    state: "NY",
    address: "Served by the Harrison office at 550 Mamaroneck Ave, Suite 407 (4th floor), Harrison, NY 10528",
    phone: primaryPhone,
    phoneHref: primaryPhoneHref,
    hours: ["Call the Harrison office for appointment availability."],
    type: "service-area",
    nearby: ["White Plains", "Harrison", "Rye", "Westchester County"],
    note: "Scarsdale is a service area, not a physical office. The nearest practice location is Harrison."
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
    .replace(/\(914\)\s*821-6496/g, primaryPhone)
    .replace(/914-821-6496/g, "914-949-0034")
    .replace(/\+1-914-821-6496/g, "+1-914-949-0034")
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
    .replace(/Audiometric TestAn audiometric test/g, "|Audiometric Test|An audiometric test")
    .replace(/\s*TympanometryTympanometry tests/g, "|Tympanometry|Tympanometry tests")
    .replace(/\s*OAEsAcoustically evoked/g, "|OAEs|Acoustically evoked")
    // /types-of-hearing-aids shipped six device headings with nothing under them,
    // because the crawl stored the headings as bare strings and welded all six
    // descriptions into one twelve-line paragraph above them. The copy is right
    // and in the right order -- it just needs breaking at each label, the same
    // way the hearing-test names are handled above. The now-duplicate bare
    // headings further down are removed by the existing dedupe pass.
    .replace(/\s*Behind the Ear \(BTE\) Hearing Aids Behind the ear/g, "|Behind the Ear (BTE) Hearing Aids|Behind the ear")
    .replace(/\s*In the Canal \(IC\) Hearing Aids In the canal/g, "|In the Canal (IC) Hearing Aids|In the canal")
    .replace(/\s*In the Ear \(ITE\) Hearing Aids In the ear/g, "|In the Ear (ITE) Hearing Aids|In the ear")
    .replace(/\s*Extended Wear Hearing Aids If you need/g, "|Extended Wear Hearing Aids|If you need")
    .replace(/\s*Receiver in the Ear \(RIC\) Hearing Aids Receiver in the ear/g, "|Receiver in the Ear (RIC) Hearing Aids|Receiver in the ear")
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

function correctOfficeClaims(value: string) {
  return value
    .replace(/\bWhite Plains, NY Location\b/gi, "Audiology Care for White Plains, NY")
    .replace(/\bScarsdale, NY Location\b/gi, "Audiology Care for Scarsdale, NY")
    .replace(/\b(?:4|Four) convenient locations\b/g, "Two office locations")
    .replace(/\bour Two office locations\b/g, "our two office locations")
    .replace(/\bLocations? in White Plains,\s*Harrison,\s*Scarsdale\s*(?:&|and|or)\s*Somers(?:,?\s*NY)?/g, "Offices in Harrison and Somers, NY")
    .replace(/\b(?:our\s+)?(?:4|four)\s+convenient\s+locations\b/gi, "our two office locations")
    .replace(/\blocations?\s+in\s+White Plains,\s*Harrison,\s*Scarsdale\s*(?:&|and|or)\s*Somers(?:,?\s*NY)?/gi, "offices in Harrison and Somers, NY")
    .replace(/\boffices?\s+in\s+White Plains,\s*Harrison,\s*Scarsdale\s*(?:&|and|or)\s*Somers(?:,?\s*NY)?/gi, "offices in Harrison and Somers, NY")
    .replace(/\boffices?\s+in\s+Harrison,\s*Somers,\s*White Plains,?\s*(?:and|&)\s*Scarsdale\b/gi, "offices in Harrison and Somers")
    .replace(/\bWhite Plains,\s*Harrison,\s*Scarsdale\s*(?:&|and|or)\s*Somers\b/gi, "Harrison and Somers")
    // The live sentence on /meet-the-team read "locations in White Plains,
    // Harrison, Scarsdale, and our newest office in Somers, NY, which opened in
    // 2021". Every rule above requires Scarsdale to be followed immediately by
    // "and Somers", so eight intervening words let a four-office claim through
    // on a top-level trust page. This one tolerates whatever sits between.
    .replace(
      /\blocations?\s+in\s+White Plains,\s*Harrison,\s*Scarsdale,?\s*(?:&|and|or)?[^.]{0,80}?Somers,?\s*NY(?:,\s*which opened in \d{4})?/gi,
      "offices in Harrison and Somers, NY"
    );
}

function cleanBodyText(page: CrawlPage, path: string) {
  const pathLabel =
    path === "/"
      ? ""
      : path
          .replace(/^\//, "")
          .replace(/-/g, " ")
          .replace(/\b\w/g, (character) => character.toUpperCase());
  const isSomersLocation = path === "/Somers-NY";
  const titleish = new Set([page.h1, page.title, page.title.replace(/\s*\|.*$/, ""), pathLabel].map(fixSpacing));
  const sectionish = new Set((page.sections || []).map(fixSpacing).filter(Boolean));
  const isLikelyHeading = (line: string) =>
    line.length < 130 &&
    !/[.!?]$/.test(line) &&
    !/^Call Us Today/i.test(line) &&
    !/^\(?\d{3}\)?/.test(line);
  const lines = page.text
    .map(fixSpacing)
    .map(correctOfficeClaims)
    .map((line) => (isSomersLocation ? line : line.replace(/\(914\)\s*556-6720/g, primaryPhone)))
    .flatMap(expandBodyLine)
    .filter(Boolean)
    .filter((line) => sectionish.has(line) || /^Call Us Today to Schedule/i.test(line) || !/^Call Us Today/i.test(line))
    .filter(
      (line) =>
        !/We'?d also like to (announce|introduce) (the )?(upcoming )?Somers, NY office/i.test(line) &&
        !/opening of our newest office in Somers, NY/i.test(line) &&
        !/newest office in Somers, NY is now open/i.test(line)
    )
    .filter((line) => line !== primaryPhone)
    .filter((line) => !/^Phone:\s*\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\.?$/.test(line))
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
      answer: `At ${officeText}. A first appointment is a full diagnostic evaluation rather than a screening: case history, otoscopy, air and bone thresholds, and speech testing, with the results explained to you in the same visit. Call (914) 949-0034 to book one.`
    },
    {
      question: `Which audiology services are most relevant for ${city.name} patients?`,
      answer: `Common needs for ${city.name} patients include ${servicesText}. Core services include hearing testing, hearing aid fitting, tinnitus therapy, hearing protection, hearing aid repair, and hearing aid education.`
    },
    {
      question: localEnvironment
        ? `Can hearing aids help with ${localEnvironment.title.toLowerCase()} around ${city.name}?`
        : `Can hearing aids help in everyday listening situations around ${city.name}?`,
      // Answer the question that was asked. This used to reprint
      // localEnvironment.body, which already appears in the section above and
      // in the FAQPage JSON-LD, so ~52 words of every city page rendered three
      // times. The first rewrite fixed the duplication but made the answer
      // generic, so a question about tinnitus at night was answered with a
      // remote microphone. The environment now has to appear in the answer.
      answer: localEnvironment
        ? `Yes, though the setting decides how. For ${localEnvironment.title.toLowerCase()} we build a dedicated program around that situation rather than turning everything up, verify it against your own ear with a probe microphone, and adjust it at the follow-up once you have lived with it. If it still is not working then, we change it.`
        : `Yes. We build the fitting around the two or three rooms where you are actually losing words, verify it in your ear, and adjust it at follow-up once you have lived with it.`
    },
    {
      question: secondEnvironment
        ? `Do ${city.name} patients need hearing protection or tinnitus support for ${secondEnvironment.title.toLowerCase()}?`
        : `Do ${city.name} patients have access to hearing protection and tinnitus support?`,
      answer: secondEnvironment
        ? `Yes, and ${secondEnvironment.title.toLowerCase()} is exactly the case custom protection is made for. Plugs are taken from impressions of your own ears, so musicians, shooters, swimmers and people working around machinery each get a different filter. Tinnitus care runs out of the Harrison office, where several of our audiologists hold the American Board of Audiology's tinnitus certificate.`
        : `Yes. Custom hearing protection is taken from impressions of your own ears, so musicians, shooters, swimmers and people working around machinery each get a different filter. Tinnitus care runs out of the Harrison office, where several of our audiologists hold the American Board of Audiology's tinnitus certificate.`
    },
    {
      question: `Does the practice serve communities near ${city.name}, ${city.state}?`,
      answer: `Yes. Nearby communities connected to this service area include ${nearbyText}. ${county ? `${city.name} is part of the ${county.name}, ${county.state} service area.` : ""} Both offices see patients from across the county, so book whichever is the easier drive for you.`
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

  if (page.type === "how-we-can-help-index") {
    return [
      {
        question: "What is the best first step if I am not sure what kind of hearing care I need?",
        answer:
          "Call Audiology Associates of Westchester and describe what you are noticing. The team can help identify whether a hearing assessment, hearing aid appointment, tinnitus consultation, device service, or another visit type is appropriate."
      },
      {
        question: "Does Audiology Associates of Westchester offer tele-audiology?",
        answer:
          "No. Tele-audiology is not listed as a supported service for this practice. Patients should contact the office for current appointment options."
      },
      {
        question: "Are all services appropriate for every patient?",
        answer:
          "No. Recommendations depend on the patient's hearing results, symptoms, goals, device details, and clinical evaluation."
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

  // No generic fallback. These two questions were being emitted as FAQPage
  // structured data on 38 pages that render neither of them, including /,
  // /blog, /careers, /patient-forms and /privacy. Google's structured-data
  // policy requires the content to be visible on the page, and a FAQPage on a
  // privacy policy is not defensible under any reading of it. A page with no
  // real questions now emits no FAQ markup.
  return [];
}

function relatedLinks(page: SitePage) {
  if (page.related.length) return page.related;

  if (page.path === howWeCanHelpRootPath) {
    return helpServices.map((service) => ({ label: service.title, href: helpServicePath(service) })).slice(0, 7);
  }

  if (page.path.startsWith(`${tinnitusRootPath}/`)) {
    return [
      { label: "Tinnitus Management", href: tinnitusRootPath },
      ...tinnitusPages
        .filter((topic) => tinnitusPath(topic.slug) !== page.path)
        .map((topic) => ({ label: topic.title, href: tinnitusPath(topic.slug) })),
      { label: "Tinnitus Therapy", href: "/tinnitus-therapy" },
      { label: "Lenire for Tinnitus", href: "/how-we-can-help/lenire-for-tinnitus" }
    ].slice(0, 7);
  }

  if (page.path.startsWith(`${howWeCanHelpRootPath}/`)) {
    return [
      ...helpServices
        .filter((service) => helpServicePath(service) !== page.path)
        .map((service) => ({ label: service.title, href: helpServicePath(service) })),
      ...services.map((service) => ({ label: service.title, href: service.path }))
    ].slice(0, 7);
  }

  const links = [
    ...services.map((service) => ({ label: service.title, href: service.path })),
    ...locations.filter((location) => location.type === "office").map((location) => ({ label: location.name, href: location.path }))
  ].filter((link) => link.href !== page.path);

  if (page.type === "blog-post") {
    const curatedLinks = editorialBlogRelatedLinks[page.path];
    if (curatedLinks) return curatedLinks;
    if (page.related.length) return page.related;
    return [...generatedPages, ...editorialBlogPosts, ...nextBlogPosts, ...seedBlogPosts, ...comparisonPages]
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
    const h1 = correctOfficeClaims(fixSpacing(
      page.h1 || (path === "/privacy" ? "Audiology Associates of Westchester Privacy Policy" : page.title.replace(/\s*\|.*$/, ""))
    ));
    const metaDescription =
      correctOfficeClaims(fixSpacing(page.metaDescription)) ||
      `${h1} from ${siteName}, serving Westchester County and nearby communities.`;
    const images = dedupe(page.images.filter((image) => image.src), (image) => image.src);
    return {
      path,
      url: `${baseUrl}${path === "/" ? "" : path}`,
      title: h1,
      metaTitle:
        path === "/privacy"
          ? `Privacy Policy | ${siteName}`
          : path === "/thank-you"
            ? `Thank You | ${siteName}`
            : correctOfficeClaims(fixSpacing(page.title || h1)),
      metaDescription,
      h1,
      type,
      lastModified: lastModifiedByPath.get(path),
      canonical: `${baseUrl}${path === "/" ? "" : path}`,
      heroImage: imageForPage(page),
      images,
      sections: page.sections.map(fixSpacing).map(correctOfficeClaims).filter(Boolean),
      body: cleanBodyText(page, path),
      faqs: [],
      related: []
    };
  })
  .sort((a, b) => (a.path === "/" ? -1 : b.path === "/" ? 1 : a.path.localeCompare(b.path)));

const editorialImages = {
  hearingAidFit: { src: "/assets/blog-hearing-aid-fit.png", alt: "Adult adjusting a hearing aid comfortably at home" },
  conversation: { src: "/assets/blog-conversation.png", alt: "Two adults having an easy conversation at a cafe" },
  headphones: { src: "/assets/blog-headphones.png", alt: "Adult listening with over-ear headphones at home" },
  earCare: { src: "/assets/blog-ear-care.png", alt: "Adult gently drying the outside of an ear with a towel" },
  careOptions: { src: "/assets/blog-hearing-care-options.png", alt: "Adult reviewing hearing care options at home" }
};

const editorialBlogPosts: SitePage[] = [
  {
    path: "/how-far-do-you-push-hearing-aid-in",
    url: `${baseUrl}/how-far-do-you-push-hearing-aid-in`,
    title: "How Far Should a Hearing Aid Go In?",
    metaTitle: titleWithBrand("How Far Should a Hearing Aid Go In?"),
    metaDescription: "Learn how hearing aids should sit in the ear, why comfort and feedback matter, and when Westchester patients should schedule a fitting adjustment.",
    h1: "How Far Should a Hearing Aid Go In?",
    type: "blog-post",
    lastModified: "2026-07-09",
    canonical: `${baseUrl}/how-far-do-you-push-hearing-aid-in`, heroImage: editorialImages.hearingAidFit, images: [editorialImages.hearingAidFit], sections: [], faqs: [], related: [],
    body: [
      "A hearing aid should feel secure and comfortable, not forced. The right position depends on the device style, your ear anatomy, and whether you use a dome, custom mold, or an invisible device.",
      "For receiver-in-canal devices, the dome usually sits comfortably in the ear canal while the hearing aid rests behind the ear. An in-the-ear device should sit flush enough to feel stable without creating pain or pressure.",
      "If you hear whistling, notice soreness, feel the device working loose, or need to push it in repeatedly, do not keep forcing it. A dome, receiver length, mold, wax filter, or fit may need attention.",
      "A fitting follow-up is the best place to resolve those questions. The audiology team can check comfort, retention, feedback, cleaning, and sound quality—and show you the placement technique that fits your specific device."
    ]
  },
  {
    path: "/understanding-hearing-loss-at-4000-hz",
    url: `${baseUrl}/understanding-hearing-loss-at-4000-hz`,
    title: "What Does Hearing Loss at 4,000 Hz Mean?",
    metaTitle: titleWithBrand("What Does Hearing Loss at 4,000 Hz Mean?"),
    metaDescription: "Understand why 4,000 Hz is an important hearing-test frequency, how high-frequency hearing loss affects speech clarity, and when to schedule testing.",
    h1: "Understanding Hearing Loss at 4,000 Hz",
    type: "blog-post", lastModified: "2026-07-09", canonical: `${baseUrl}/understanding-hearing-loss-at-4000-hz`, heroImage: editorialImages.conversation, images: [editorialImages.conversation], sections: [], faqs: [], related: [],
    body: [
      "A 4,000 Hz finding on an audiogram refers to a high-pitched frequency tested during a hearing evaluation. Changes there are common and can make speech sound less crisp, especially in background noise.",
      "High-frequency hearing loss can affect consonants such as s, f, th, sh, and t. That is why someone may say, ‘I can hear people talking, but I miss the words,’ particularly in restaurants, meetings, cars, and family gatherings.",
      "Noise exposure, aging, some medications, and other factors can contribute. The audiogram pattern matters more than a single number, so results should be explained alongside speech understanding and your real listening experiences.",
      "If hearing at 4,000 Hz has changed, an audiologist can help determine whether monitoring, hearing protection, hearing technology, or medical follow-up is appropriate."
    ]
  },
  {
    path: "/what-is-the-60-60-rule-in-audiology",
    url: `${baseUrl}/what-is-the-60-60-rule-in-audiology`,
    title: "The 60–60 Rule for Headphones",
    metaTitle: titleWithBrand("The 60–60 Rule for Headphones"),
    metaDescription: "Learn the 60–60 headphone guideline, its limits, and practical ways to protect your hearing in daily life.",
    h1: "What Is the 60–60 Rule in Audiology?",
    type: "blog-post", lastModified: "2026-07-09", canonical: `${baseUrl}/what-is-the-60-60-rule-in-audiology`, heroImage: editorialImages.headphones, images: [editorialImages.headphones], sections: [], faqs: [], related: [],
    body: [
      "The 60–60 rule is a simple reminder: aim for no more than about 60 percent volume for about 60 minutes at a time, then give your ears a break. It is a useful starting point, not a precise medical threshold for every device or setting.",
      "The safer listening level depends on the headphones, the recording, the environment, and your own hearing. If you need to raise volume to overcome subway noise, gym music, or a busy office, you may already be listening louder than you realize.",
      "Noise-canceling or well-fitting headphones can help because they reduce the urge to turn volume up. A good rule of thumb is that you should still be able to notice someone speaking nearby without removing your headphones.",
      "Ringing after listening, muffled hearing, or sensitivity to sound are signs to give your ears a break and schedule a hearing evaluation if symptoms persist."
    ]
  },
  {
    path: "/understanding-and-treating-dry-ears",
    url: `${baseUrl}/understanding-and-treating-dry-ears`,
    title: "Dry, Itchy Ears: Common Causes and Next Steps",
    metaTitle: titleWithBrand("Dry, Itchy Ears: Causes and Care"),
    metaDescription: "Learn common reasons ears can feel dry or itchy, which home habits can make irritation worse, and when to seek medical care.",
    h1: "Understanding Dry, Itchy Ears",
    type: "blog-post", lastModified: "2026-07-09", canonical: `${baseUrl}/understanding-and-treating-dry-ears`, heroImage: editorialImages.earCare, images: [editorialImages.earCare], sections: [], faqs: [], related: [],
    body: [
      "Dry or itchy ears are common, but the cause is not always simply ‘not enough wax.’ Skin conditions, irritation from products, allergies, earbuds, hearing aids, frequent cleaning, and infection can all play a role.",
      "Avoid putting cotton swabs, oils, or objects deeply into the ear canal. They can push wax further in, scratch delicate skin, or make an underlying problem harder to identify.",
      "If you wear hearing aids or earbuds, regular cleaning and fit checks matter. A device that traps moisture or rubs the skin can contribute to irritation, and the solution may be as simple as a cleaning routine or fit adjustment.",
      "Ear pain, drainage, swelling, hearing changes, fever, or persistent itching need medical assessment. An ear inspection can distinguish wax, skin irritation, infection, and other causes."
    ]
  },
  {
    path: "/what-is-the-best-hearing-aid-sold-at-costco",
    url: `${baseUrl}/what-is-the-best-hearing-aid-sold-at-costco`,
    title: "What Is the Best Hearing Aid at Costco?",
    metaTitle: titleWithBrand("Best Hearing Aid at Costco? How to Compare"),
    metaDescription: "A practical guide to comparing Costco hearing aids, professional fitting, verification, follow-up care, and the questions Westchester patients should ask.",
    h1: "What Is the Best Hearing Aid Sold at Costco?",
    type: "blog-post", lastModified: "2026-07-09", canonical: `${baseUrl}/what-is-the-best-hearing-aid-sold-at-costco`, heroImage: editorialImages.careOptions, images: [editorialImages.careOptions], sections: [], faqs: [], related: [],
    body: [
      "There is no universally best hearing aid at Costco—or anywhere else. A good choice depends on your hearing test, speech understanding, listening environments, comfort, dexterity, phone needs, and the quality of follow-up care.",
      "Costco can be a sensible option for some people with straightforward hearing needs and a preference for a limited selection. Before choosing, ask who will provide your care, what testing is included, how the fitting will be verified, and how adjustments will work after purchase.",
      "For patients with tinnitus, sudden or uneven hearing changes, dizziness, complex listening concerns, or prior difficulty with hearing aids, a comprehensive audiology evaluation can help clarify what is going on before a device is selected.",
      "The most valuable question is not which model has the most features. It is whether the device, fitting process, verification, and ongoing support match the way you actually live and communicate."
    ]
  },
  {
    path: "/how-much-does-costco-charge-for-a-hearing-test",
    url: `${baseUrl}/how-much-does-costco-charge-for-a-hearing-test`,
    title: "How Much Does a Costco Hearing Test Cost?",
    metaTitle: titleWithBrand("Costco Hearing Test Cost and What to Compare"),
    metaDescription: "Learn what to ask when comparing a retail hearing screening with a comprehensive audiology evaluation in Westchester County.",
    h1: "How Much Does Costco Charge for a Hearing Test?",
    type: "blog-post", lastModified: "2026-07-09", canonical: `${baseUrl}/how-much-does-costco-charge-for-a-hearing-test`, heroImage: editorialImages.careOptions, images: [editorialImages.careOptions], sections: [], faqs: [], related: [],
    body: [
      "Retail hearing centers may offer a no-cost hearing test or screening, often connected to a hearing-aid consultation. Policies, membership requirements, and what is included can change, so confirm details directly with the location before scheduling.",
      "Price alone does not show whether two appointments are comparable. Ask whether the visit includes a full case history, ear inspection, hearing thresholds, speech testing, middle-ear testing when appropriate, a review of red flags, and a clear explanation of results.",
      "A comprehensive audiology evaluation is especially important when you have one-sided symptoms, sudden changes, tinnitus, dizziness, ear pressure, ear pain, or difficulty understanding speech despite ‘normal’ volume.",
      "At Audiology Associates of Westchester, the goal of testing is to understand your hearing and guide the next step—not simply determine whether a device can be sold."
    ]
  },
  {
    path: "/what-are-the-red-flags-for-audiology-referrals",
    url: `${baseUrl}/what-are-the-red-flags-for-audiology-referrals`,
    title: "Audiology Red Flags: When Hearing Symptoms Need Prompt Care",
    metaTitle: titleWithBrand("Audiology Red Flags and Referrals"),
    metaDescription: "Know the hearing symptoms that may need prompt medical attention, including sudden hearing loss, one-sided changes, dizziness, and pulsatile tinnitus.",
    h1: "What Are the Red Flags for Audiology Referrals?",
    type: "blog-post", lastModified: "2026-07-09", canonical: `${baseUrl}/what-are-the-red-flags-for-audiology-referrals`, heroImage: editorialImages.careOptions, images: [editorialImages.careOptions], sections: [], faqs: [], related: [],
    body: [
      "Most hearing changes are not emergencies, but certain symptoms should never be treated as routine. Early attention can matter when a hearing or ear problem is sudden, one-sided, painful, or accompanied by balance or neurological symptoms.",
      "Seek prompt medical guidance for sudden hearing loss, severe spinning dizziness, facial weakness or numbness, a severe new headache, hearing changes after injury, or tinnitus that sounds like a heartbeat.",
      "New one-sided hearing loss or tinnitus, persistent drainage, severe ear pain, significant pressure, and a major difference between ears also deserve timely evaluation. An audiologist can document hearing findings and help identify when ENT or other medical assessment is needed.",
      "This list is educational, not a diagnosis. If symptoms feel urgent or severe, use emergency or urgent medical services rather than waiting for a routine hearing appointment."
    ]
  },
  {
    path: "/how-many-hours-a-day-should-you-wear-new-hearing-aids",
    url: `${baseUrl}/how-many-hours-a-day-should-you-wear-new-hearing-aids`,
    title: "How Many Hours a Day Should You Wear New Hearing Aids?",
    metaTitle: titleWithBrand("Wearing New Hearing Aids: A Practical Schedule"),
    metaDescription: "Learn how to build comfortable hearing-aid wear time, what adjustment feels like, and when to call your audiologist for help.",
    h1: "How Many Hours a Day Should You Wear New Hearing Aids?",
    type: "blog-post", lastModified: "2026-07-09", canonical: `${baseUrl}/how-many-hours-a-day-should-you-wear-new-hearing-aids`, heroImage: editorialImages.hearingAidFit, images: [editorialImages.hearingAidFit], sections: [], faqs: [], related: [],
    body: [
      "Most new hearing-aid users do best by wearing their devices consistently during waking hours, following the plan set by their audiologist. Your brain needs real-world sound exposure to adapt to changes in clarity and amplification.",
      "At first, ordinary sounds may seem unusually sharp, busy, or present. Your own voice, running water, paper, dishes, and traffic can stand out. That adjustment is common, but pain, harsh sound, feedback, or headaches are reasons to call rather than simply pushing through.",
      "Begin in familiar settings, practice putting devices in and taking them out, and make notes about the situations that feel most successful or difficult. Those notes make follow-up programming more useful.",
      "Do not compare your experience to someone else’s timeline. Hearing loss, device settings, listening demands, and prior sound exposure are different for every patient."
    ]
  },
  {
    path: "/how-to-get-water-out-of-your-ear",
    url: `${baseUrl}/how-to-get-water-out-of-your-ear`,
    title: "How to Get Water Out of Your Ear Safely",
    metaTitle: titleWithBrand("How to Get Water Out of Your Ear Safely"),
    metaDescription: "Safe first steps for a water-trapped ear, what to avoid, and when pain, drainage, or hearing changes need medical care.",
    h1: "How to Get Water Out of Your Ear Safely",
    type: "blog-post", lastModified: "2026-07-09", canonical: `${baseUrl}/how-to-get-water-out-of-your-ear`, heroImage: editorialImages.earCare, images: [editorialImages.earCare], sections: [], faqs: [], related: [],
    body: [
      "Water in the ear often clears on its own, but a blocked sensation can be annoying. Start gently: tilt the affected ear downward, pull the outer ear lightly, and give gravity time to work.",
      "Do not insert cotton swabs, hairpins, or other objects into the canal. They can scratch the skin, compact wax, or create a pathway for infection.",
      "If water stays trapped, you have pain, drainage, fever, swelling, hearing loss, tubes, a known eardrum perforation, or a history of ear surgery, contact a medical professional for advice rather than using drops or home remedies.",
      "Frequent swimmers and people who wear hearing aids may benefit from an ear inspection if the blocked sensation keeps returning. Wax or skin irritation can make water feel trapped more easily."
    ]
  },
  {
    path: "/how-to-relieve-ear-pressure",
    url: `${baseUrl}/how-to-relieve-ear-pressure`,
    title: "Ear Pressure: What May Help and When to Get Checked",
    metaTitle: titleWithBrand("Ear Pressure Relief and When to Seek Care"),
    metaDescription: "Understand common causes of ear pressure, safe next steps, and symptoms that require medical evaluation.",
    h1: "How to Relieve Ear Pressure",
    type: "blog-post", lastModified: "2026-07-09", canonical: `${baseUrl}/how-to-relieve-ear-pressure`, heroImage: editorialImages.earCare, images: [editorialImages.earCare], sections: [], faqs: [], related: [],
    body: [
      "Ear pressure can happen with colds, allergies, altitude changes, congestion, jaw tension, wax, or middle-ear concerns. The right approach depends on what else you are noticing.",
      "For mild pressure related to travel or congestion, swallowing, yawning, chewing, and staying hydrated may help. Avoid forceful pressure maneuvers if you have ear pain, infection symptoms, recent surgery, or are unsure what is causing the sensation.",
      "Pressure paired with severe pain, drainage, fever, new hearing loss, spinning dizziness, or one-sided tinnitus should be evaluated medically. Those symptoms can point to something more than a routine altitude change.",
      "If pressure is recurring or affecting your hearing, an ear and hearing evaluation can help distinguish wax, middle-ear changes, hearing loss, and other contributors."
    ]
  },
  {
    path: "/8-expert-tips-to-conceal-your-hearing-aids-discreetly",
    url: `${baseUrl}/8-expert-tips-to-conceal-your-hearing-aids-discreetly`,
    title: "8 Ways to Wear Hearing Aids More Discreetly",
    metaTitle: titleWithBrand("How to Wear Hearing Aids Discreetly"),
    metaDescription: "Practical ways to choose and wear hearing aids discreetly without sacrificing comfort, fit, or sound quality.",
    h1: "8 Ways to Wear Hearing Aids More Discreetly",
    type: "blog-post", lastModified: "2026-07-09", canonical: `${baseUrl}/8-expert-tips-to-conceal-your-hearing-aids-discreetly`, heroImage: editorialImages.hearingAidFit, images: [editorialImages.hearingAidFit], sections: [], faqs: [], related: [],
    body: [
      "Many people want hearing aids to feel private and unobtrusive. The best approach is not to hide a poorly fitting device—it is to choose a style that balances your hearing needs, comfort, handling, lifestyle, and cosmetic preferences.",
      "Ask about small receiver-in-canal models, in-the-ear styles, color choices that work with hair or skin tone, rechargeable options, and invisible or extended-wear devices when clinically appropriate. Not every small style is right for every hearing loss or ear canal.",
      "A well-fitted device is less noticeable because it stays in place, does not whistle, and does not require constant adjustment. If you wear glasses, masks, hats, or use a phone frequently, bring that into the fitting conversation.",
      "Hearing aids are communication tools, not something to apologize for. The right device should help you participate more easily in the conversations and activities that matter to you."
    ]
  }
];

const editorialBlogRelatedLinks: Record<string, { label: string; href: string }[]> = {
  "/how-far-do-you-push-hearing-aid-in": [
    { label: "Wearing New Hearing Aids", href: "/how-many-hours-a-day-should-you-wear-new-hearing-aids" },
    { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
    { label: "Ways to Wear Hearing Aids More Discreetly", href: "/8-expert-tips-to-conceal-your-hearing-aids-discreetly" }
  ],
  "/understanding-hearing-loss-at-4000-hz": [
    { label: "The 60–60 Rule for Headphones", href: "/what-is-the-60-60-rule-in-audiology" },
    { label: "Hearing Testing", href: "/hearing-testing" },
    { label: "Hearing Protection", href: "/hearing-protection" }
  ],
  "/what-is-the-60-60-rule-in-audiology": [
    { label: "Understanding Hearing Loss at 4,000 Hz", href: "/understanding-hearing-loss-at-4000-hz" },
    { label: "Hearing Protection", href: "/hearing-protection" },
    { label: "Hearing Testing", href: "/hearing-testing" }
  ],
  "/understanding-and-treating-dry-ears": [
    { label: "How to Get Water Out of Your Ear Safely", href: "/how-to-get-water-out-of-your-ear" },
    { label: "Ear Pressure: What May Help", href: "/how-to-relieve-ear-pressure" },
    { label: "Hearing Testing", href: "/hearing-testing" }
  ],
  "/what-is-the-best-hearing-aid-sold-at-costco": [
    { label: "Costco Hearing Test Cost", href: "/how-much-does-costco-charge-for-a-hearing-test" },
    { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
    { label: "Hearing Testing", href: "/hearing-testing" }
  ],
  "/how-much-does-costco-charge-for-a-hearing-test": [
    { label: "Comparing Costco Hearing Aids", href: "/what-is-the-best-hearing-aid-sold-at-costco" },
    { label: "Audiology Red Flags", href: "/what-are-the-red-flags-for-audiology-referrals" },
    { label: "Hearing Testing", href: "/hearing-testing" }
  ],
  "/what-are-the-red-flags-for-audiology-referrals": [
    { label: "Sudden or Worsening Tinnitus", href: "/how-we-can-help/tinnitus-management/sudden-or-worsening-tinnitus" },
    { label: "Ear Pressure: What May Help", href: "/how-to-relieve-ear-pressure" },
    { label: "Hearing Testing", href: "/hearing-testing" }
  ],
  "/how-many-hours-a-day-should-you-wear-new-hearing-aids": [
    { label: "How Far Should a Hearing Aid Go In?", href: "/how-far-do-you-push-hearing-aid-in" },
    { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
    { label: "Ways to Wear Hearing Aids More Discreetly", href: "/8-expert-tips-to-conceal-your-hearing-aids-discreetly" }
  ],
  "/how-to-get-water-out-of-your-ear": [
    { label: "Dry, Itchy Ears", href: "/understanding-and-treating-dry-ears" },
    { label: "Ear Pressure: What May Help", href: "/how-to-relieve-ear-pressure" },
    { label: "Hearing Testing", href: "/hearing-testing" }
  ],
  "/how-to-relieve-ear-pressure": [
    { label: "How to Get Water Out of Your Ear Safely", href: "/how-to-get-water-out-of-your-ear" },
    { label: "Dry, Itchy Ears", href: "/understanding-and-treating-dry-ears" },
    { label: "Audiology Red Flags", href: "/what-are-the-red-flags-for-audiology-referrals" }
  ],
  "/8-expert-tips-to-conceal-your-hearing-aids-discreetly": [
    { label: "How Far Should a Hearing Aid Go In?", href: "/how-far-do-you-push-hearing-aid-in" },
    { label: "Wearing New Hearing Aids", href: "/how-many-hours-a-day-should-you-wear-new-hearing-aids" },
    { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" }
  ]
};

const aboutTrustPages: SitePage[] = [
  {
    path: "/services",
    url: `${baseUrl}/services`,
    title: "Services",
    metaTitle: titleWithBrand("Services"),
    metaDescription:
      "Explore the main hearing services at Audiology Associates of Westchester, including hearing testing, hearing aid fitting, tinnitus therapy, hearing protection, and hearing aid repair.",
    h1: "Services",
    type: "page",
    lastModified: "2026-07-10",
    canonical: `${baseUrl}/services`,
    images: [],
    sections: ["Hearing Services", "Choose the Right Next Step", "Frequently Asked Questions"],
    body: [
      "Audiology Associates of Westchester offers the core hearing care services patients use most often: testing, hearing aid fitting, tinnitus support, protection, and repair.",
      "If you are not sure which visit to schedule, start with hearing testing or call the practice for help choosing the best next step.",
      "The cards below make it easier to compare each service at a glance and move directly to the page that fits your needs."
    ],
    faqs: [],
    related: []
  },
  {
    path: "/dr-cliff-approved-provider",
    url: `${baseUrl}/dr-cliff-approved-provider`,
    title: "Dr. Cliff Approved Provider",
    metaTitle: titleWithBrand("Dr. Cliff Approved Provider"),
    metaDescription:
      "Audiology Associates of Westchester is a Dr. Cliff Approved Provider, reflecting a commitment to patient-centered audiology, best-practice hearing care, and professional hearing aid fittings.",
    h1: "Dr. Cliff Approved Provider",
    type: "page",
    lastModified: "2026-07-10",
    canonical: `${baseUrl}/dr-cliff-approved-provider`,
    images: [],
    sections: ["What This Means", "Best-Practice Hearing Care", "Schedule With Our Team"],
    body: [
      "Audiology Associates of Westchester is proud to be a Dr. Cliff Approved Provider.",
      "Dr. Cliff Approved Providers are selected for a commitment to evidence-informed audiology, patient education, and hearing care that goes beyond simply choosing a device.",
      "For patients, this means working with a team that emphasizes comprehensive evaluations, clear explanations, professional fittings, verification, follow-up care, and practical support for real listening environments.",
      "The program is connected with HearingUp, an educational resource founded by Dr. Cliff Olson, Au.D., to help patients understand what high-quality hearing care should include.",
      "Best-practice hearing care means a detailed case history, otoscopy, diagnostic testing, speech understanding measures, real-ear measurement at every hearing aid fitting, counseling, device orientation, and ongoing adjustments. Not when convenient — every fitting. That is what this recognition is for.",
      "We explain what the audiogram actually means for the rooms you are in — the restaurant, the meeting, the car — not just where the line sits on the chart.",
      "If you are comparing providers, the question worth asking each of them is whether they measure the fitting in your ear with a probe microphone, at every fitting. We do."
    ],
    faqs: [],
    related: []
  },
  {
    path: "/california-hearing-center",
    url: `${baseUrl}/california-hearing-center`,
    title: "California Hearing Center",
    metaTitle: titleWithBrand("California Hearing Center: Our Sister Practice"),
    metaDescription:
      "Learn about California Hearing Center, a sister practice connected to Audiology Associates of Westchester for patients and families looking for hearing care in California.",
    h1: "California Hearing Center",
    type: "page",
    lastModified: "2026-07-10",
    canonical: `${baseUrl}/california-hearing-center`,
    images: [],
    sections: ["Our Sister Practice", "Connected Hearing Care", "Visit California Hearing Center"],
    body: [
      "California Hearing Center is a sister practice of Audiology Associates of Westchester.",
      "Both practices share a patient-first approach to hearing care, with a focus on thoughtful evaluations, hearing technology, counseling, follow-up, and communication needs in everyday life.",
      "This page is here for patients, relatives, and referring partners who may be looking for trusted hearing care in California.",
      "Visit California Hearing Center to learn more about its providers, services, and locations."
    ],
    faqs: [],
    related: []
  }
];

const howWeCanHelpPages: SitePage[] = [
  {
    path: howWeCanHelpRootPath,
    url: `${baseUrl}${howWeCanHelpRootPath}`,
    title: "How We Can Help",
    metaTitle: titleWithBrand("How We Can Help"),
    metaDescription:
      "Explore hearing assessments, hearing aid technology, tinnitus management, cochlear implant support, earwax removal, cognitive screening, and other audiology services.",
    h1: "How We Can Help",
    type: "how-we-can-help-index",
    lastModified: "2026-07-07",
    canonical: `${baseUrl}${howWeCanHelpRootPath}`,
    images: [],
    sections: ["Hearing Care Services", "Choose Your Next Step", "Frequently Asked Questions"],
    body: [
      "Audiology Associates of Westchester helps patients choose the right hearing care pathway based on symptoms, hearing results, technology needs, and daily communication goals.",
      "Explore the services below to learn what each visit type is for, who it helps, what to expect, and when to contact the practice."
    ],
    faqs: [],
    related: []
  },
  ...helpServices.map((service): SitePage => ({
    path: helpServicePath(service),
    url: `${baseUrl}${helpServicePath(service)}`,
    title: service.title,
    metaTitle: titleWithBrand(service.title),
    metaDescription: service.metaDescription,
    h1: service.title,
    type: "service",
    lastModified: "2026-07-07",
    canonical: `${baseUrl}${canonicalPathFor(helpServicePath(service))}`,
    images: [],
    sections: ["Who This Helps", "When to Schedule", "What to Expect", "Frequently Asked Questions"],
    body: [
      ...service.intro,
      `Who this helps: ${listText(service.whoWeHelp)}`,
      `Signs to schedule: ${listText(service.signs)}`,
      `What to expect: ${listText(service.appointmentSteps)}`,
      service.whyItMatters
    ],
    faqs: service.faqs,
    related: []
  })),
  ...tinnitusPages.map((topic): SitePage => ({
    path: tinnitusPath(topic.slug),
    url: `${baseUrl}${tinnitusPath(topic.slug)}`,
    title: topic.title,
    metaTitle: titleWithBrand(topic.title, "Tinnitus Help in Westchester"),
    metaDescription: topic.description,
    h1: topic.title,
    type: "service",
    lastModified: "2026-07-07",
    canonical: `${baseUrl}${tinnitusPath(topic.slug)}`,
    images: [],
    sections: topic.sections.map((section) => section.title),
    body: [...topic.intro, ...topic.sections.flatMap((section) => [section.title, ...section.body])],
    faqs: topic.faqs,
    related: []
  }))
];

const productHubPages: SitePage[] = [
  {
    path: productsRootPath,
    url: `${baseUrl}${productsRootPath}`,
    title: "Products",
    metaTitle: titleWithBrand("Products"),
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
  // No generated page for hearingAidBrandsPath: that path is the legacy
  // /hearing-aids-brands page from the crawl, which already renders the brand
  // grid and links to each brand child. Emitting a second page object here
  // would duplicate the URL in pagePaths and in the sitemap.
  ...productBrands.map((brand): SitePage => ({
    path: brandPath(brand.slug),
    url: `${baseUrl}${brandPath(brand.slug)}`,
    title: `${brand.name} Hearing Aids`,
    metaTitle: titleWithBrand(`${brand.name} Hearing Aids`),
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
    metaTitle: titleWithBrand(`${product.title} Hearing Aids`),
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
    metaTitle: titleWithBrand("Areas We Serve"),
    metaDescription:
      "Explore audiology service areas for Audiology Associates of Westchester, including Westchester County, nearby Fairfield County communities, and southern Putnam County.",
    h1: "Hearing Aids & Audiology Across Westchester County",
    type: "service-areas-index",
    lastModified: "2026-07-06",
    canonical: `${baseUrl}${serviceAreasRootPath}`,
    images: [],
    sections: ["Westchester County", "Nearby Counties", "Plan Your Visit"],
    body: [
      "Audiology Associates of Westchester serves patients across Westchester County and nearby communities through two offices in Harrison and Somers.",
      "Explore county and city pages to find the most relevant office, services, and nearby communities for hearing testing, hearing aids, tinnitus therapy, hearing protection, and hearing aid repair."
    ],
    faqs: [],
    related: []
  },
  ...areaCounties.map((county): SitePage => ({
    path: countyPath(county.slug),
    url: `${baseUrl}${countyPath(county.slug)}`,
    title: `${county.name}, ${county.state}`,
    metaTitle: titleWithBrand(`Audiologist in ${county.name}, ${county.state}`),
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
  ...areaCities.filter((city) => !city.legacyPath).map((city): SitePage => ({
    path: cityPath(city),
    url: `${baseUrl}${cityPath(city)}`,
    title: `${city.name}, ${city.state}`,
    metaTitle: titleWithBrand(`Audiologist near ${city.name}, ${city.state}`),
    // The old tail ("Schedule hearing testing, hearing aid fitting, tinnitus
    // therapy, hearing protection, or hearing aid repair near X") ate 118 of
    // the ~160 characters a searcher ever sees, and repeated "hearing" five
    // times. localContext already names the office and what happens there.
    metaDescription: city.localContext,
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

const nextBlogPosts = buildNextBlogPosts(baseUrl, siteName);
const seedBlogPosts = buildSeedBlogPosts(baseUrl, siteName);

const providerPages: SitePage[] = providerProfiles.map((provider): SitePage => ({
  path: providerPath(provider),
  url: `${baseUrl}${providerPath(provider)}`,
  title: provider.name,
  metaTitle: titleWithBrand(`${provider.name}, Audiologist`),
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

// Each content module used to hard-code one date for its whole group: all 25
// service pages shared "2026-07-07", all 16 product pages "2026-06-07". A page
// could not report a date of its own, so editing one page moved the date on
// every page beside it -- or, more often, on none of them.
//
// lib/contentDates.ts carries a per-page date derived from git history
// (regenerate with `npm run dates`). Applying it here, at the one point every
// page passes through, gives all 182 pages real dates without a date field
// having to be threaded through nine content modules.
//
// The group constants stay as the fallback: a page the registry does not know
// about is no worse off than it was.
function withContentDates(page: SitePage): SitePage {
  // Pages recovered from the pre-2026 crawl already carry a true modification
  // date in `lastModifiedByPath`. The registry is keyed by slug for some
  // modules, so a legacy path could otherwise pick up the date of an unrelated
  // page that happens to end in the same segment.
  const dates = lastModifiedByPath.has(page.path) ? contentDates[page.path] : contentDateFor(page.path);

  if (!dates) return page;
  return {
    ...page,
    lastModified: dates.modified || page.lastModified,
    // Only claim a publication date the registry actually established.
    datePublished: dates.published ?? page.datePublished
  };
}

export const pages: SitePage[] = [...generatedPages, ...editorialBlogPosts, ...nextBlogPosts, ...seedBlogPosts, ...comparisonPages, ...productGuides, ...aboutTrustPages, ...howWeCanHelpPages, ...hearingLossPages, reviewsPage, ...pressPages, ...productHubPages, ...serviceAreaPages, ...providerPages].map((page) => {
  const withFaqs: SitePage = { ...withContentDates(page), faqs: [] };
  withFaqs.faqs = page.faqs.length ? page.faqs : baseFaqs(withFaqs);
  withFaqs.related = relatedLinks(withFaqs);
  return withFaqs;
});

export const pagePaths = pages.map((page) => page.path);

export const blogPosts = pages.filter((page) => page.type === "blog-post");

export function getPageByPath(path: string) {
  return pages.find((page) => page.path === path) ?? pages.find((page) => page.path.toLowerCase() === path.toLowerCase());
}

export function toPath(slug?: string[]) {
  if (!slug || slug.length === 0) return "/";
  return `/${slug.join("/")}`;
}

// Bing Webmaster Tools site verification. Bing reads this only on the site
// root, so it is scoped to the homepage rather than emitted on all 180 pages.
// Safe to keep in source: it is a public token that appears in the served HTML,
// and it proves nothing on its own without control of this domain.
export const bingSiteVerification =
  process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "D9DA69251B598DFCE6D72A6402D17438";

export function buildMetadata(page: SitePage): Metadata {
  const image = page.heroImage?.src || "/opengraph-image";

  // DO NOT reintroduce `robots: undefined` / `verification: undefined` here.
  // Next resolves metadata by walking layout -> page and letting the closest
  // value win PER KEY — but a key that is merely PRESENT with the value
  // undefined counts as the closest value and overrides the parent with
  // nothing. It does not fall back. Because every page on this site goes
  // through buildMetadata, that one word silently stripped the root layout's
  // robots directive from all 147 pages: max-image-preview:large was set,
  // typechecked, built and deployed, and appeared on exactly zero of them.
  // The sister site got the identical change on the same day and it worked,
  // because CHC has no equivalent helper. Spread the key in only when there
  // is something to say, so inheritance survives.
  const robotsOverride =
    page.path === "/thank-you" ? { robots: { index: false, follow: true } } : {};
  const verificationOverride =
    page.path === "/" && bingSiteVerification
      ? { verification: { other: { "msvalidate.01": bingSiteVerification } } }
      : {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    ...robotsOverride,
    ...verificationOverride,
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
