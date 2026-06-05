import type { Metadata } from "next";
import crawl from "@/data/crawl.json";

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
  | "educational"
  | "blog-index"
  | "blog-post"
  | "contact"
  | "form"
  | "team"
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

function baseFaqs(page: SitePage) {
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

export const pages: SitePage[] = generatedPages.map((page) => {
  const withFaqs: SitePage = { ...page, faqs: [] };
  withFaqs.faqs = baseFaqs(withFaqs);
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
