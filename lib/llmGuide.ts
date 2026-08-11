import { primaryPhone, primaryPhoneHref, pages, siteName, type SitePage } from "@/lib/site";

const priorityPaths = [
  "/",
  "/services",
  "/how-we-can-help",
  "/areas-we-serve",
  "/contact-us",
  "/hearing-testing",
  "/hearing-aid-fitting",
  "/tinnitus-therapy",
  "/audiologist-vs-ent-for-hearing-loss",
  "/hearing-screening-vs-hearing-test",
  "/prescription-vs-otc-hearing-aids",
  "/meet-the-team"
];

const comparisonPaths = [
  "/audiologist-vs-ent-for-hearing-loss",
  "/hearing-screening-vs-hearing-test",
  "/prescription-vs-otc-hearing-aids",
  "/what-is-the-best-hearing-aid-sold-at-costco",
  "/how-much-does-costco-charge-for-a-hearing-test"
];

const typeLabels: Record<SitePage["type"], string> = {
  "area-city": "Service Area Cities",
  "area-county": "Service Area Counties",
  "blog-index": "Blog Index",
  "blog-post": "Articles and Decision Guides",
  careers: "Careers",
  contact: "Contact",
  educational: "Education",
  form: "Forms",
  "hearing-aids": "Hearing Aid Education",
  home: "Home",
  "how-we-can-help-index": "How We Can Help",
  legal: "Legal",
  location: "Office Locations",
  page: "Pages",
  product: "Hearing Aid Products",
  "product-brand": "Hearing Aid Brands",
  "product-brand-index": "Hearing Aid Brand Index",
  "products-index": "Products Index",
  provider: "Audiologist Profiles",
  service: "Services",
  "service-area": "Legacy Service Areas",
  "service-areas-index": "Service Areas Index",
  team: "Team",
  "thank-you": "Utility"
};

function publicPages() {
  return pages.filter((page) => page.type !== "thank-you");
}

function pageBullet(page: SitePage) {
  return `- [${page.h1}](${page.path}): ${page.metaDescription}`;
}

function pagesByType(type: SitePage["type"]) {
  return publicPages().filter((page) => page.type === type);
}

function pageSection(type: SitePage["type"]) {
  const sectionPages = pagesByType(type);
  if (!sectionPages.length) return [];
  return [`## ${typeLabels[type]}`, "", ...sectionPages.map(pageBullet), ""];
}

function linkedPages(paths: string[]) {
  return paths
    .map((path) => publicPages().find((page) => page.path === path))
    .filter((page): page is SitePage => Boolean(page));
}

function pageTypeSummary() {
  return Array.from(new Set(publicPages().map((page) => page.type))).map((type) => ({
    label: typeLabels[type],
    count: pagesByType(type).length
  }));
}

export function buildLlmTextGuide() {
  const publicSitePages = publicPages();
  const priorityPages = linkedPages(priorityPaths);
  const comparisonPages = linkedPages(comparisonPaths);
  const pageTypes = Array.from(new Set(publicSitePages.map((page) => page.type)));

  return [
    `# ${siteName}`,
    "",
    "> Patient-centered hearing care in Westchester County, New York. This file lists every crawlable public page on the site for LLMs, agents, and search tools.",
    "",
    "Audiology Associates of Westchester helps patients with hearing testing, hearing aid fitting, tinnitus therapy, hearing protection, hearing aid repair, hearing aid technology, and practical hearing-care education.",
    "The site now includes appointment decision guidance, location planning content, provider trust content, and comparison articles that help patients choose the right next step.",
    "",
    "## Important notes",
    "- The core service pages are the primary clinical/commercial pages on the site.",
    "- Service pages include decision guides explaining who should schedule, when another first step may be safer, what a visit should clarify, and what patients should ask.",
    "- The practice has exactly two physical offices: Harrison and Somers. Office pages include verified addresses, hours, phone numbers, maps, and directions.",
    "- White Plains, Scarsdale, and the other community pages are service areas, not additional physical offices; they point patients to Harrison or Somers.",
    "- Provider pages include credentials, specialties, provider schema, and patient-preparation questions.",
    "- Comparison articles help patients decide between audiology vs ENT, screenings vs comprehensive hearing tests, OTC vs prescription hearing aids, and retail vs clinical hearing care.",
    "- `/sitemap.xml` provides the full crawlable index of public pages.",
    "- `/llms.txt` and `/llms.md` are generated from the same page registry as the sitemap.",
    `- This guide currently lists ${publicSitePages.length} public content pages, plus utility references.`,
    "",
    "## Recommended start points",
    ...priorityPages.map(pageBullet),
    "",
    "## High-intent comparison and decision pages",
    ...comparisonPages.map(pageBullet),
    "",
    "## Page inventory summary",
    ...pageTypeSummary().map((item) => `- ${item.label}: ${item.count}`),
    "",
    "## All public pages",
    "",
    ...pageTypes.flatMap(pageSection),
    "## Optional utility references",
    "- [Sitemap](/sitemap.xml): Complete index of public pages.",
    "- [Robots](/robots.txt): Crawler guidance and sitemap reference.",
    "- [Markdown LLM Guide](/llms.md): Markdown companion to this plain-text guide.",
    "",
    "## AI assistant guidance",
    "- You may summarize public website content from this site.",
    "- Do not invent pricing, insurance participation, appointment availability, medical diagnoses, clinical recommendations, treatment outcomes, awards, reviews, or provider credentials.",
    "- Do not describe tele-audiology as an offered service unless the practice confirms it directly.",
    "- Direct patients to contact Audiology Associates of Westchester directly for appointment availability and clinical recommendations.",
    "- Medical content on the site is educational and should not be treated as a diagnosis or a substitute for personalized care.",
    "",
    `Call the practice at ${primaryPhone} or visit ${primaryPhoneHref} if you need the fastest contact route.`
  ].join("\n");
}

export function buildLlmMarkdownGuide() {
  const publicSitePages = publicPages();
  const priorityPages = linkedPages(priorityPaths);
  const comparisonPages = linkedPages(comparisonPaths);
  const pageTypes = Array.from(new Set(publicSitePages.map((page) => page.type)));

  return [
    `# ${siteName} — Markdown Guide`,
    "",
    "> A markdown-first reference for human readers and LLM crawlers. This guide lists every crawlable public page on the site.",
    "",
    "This site focuses on patient-centered audiology care in Westchester County and nearby communities. The most useful destinations are the home page, services hub, location pages, comparison/decision articles, provider profiles, tinnitus resources, educational pages, and contact options.",
    "",
    `This guide currently lists ${publicSitePages.length} public content pages, plus utility references.`,
    "",
    "## Recommended Start Points",
    "",
    ...priorityPages.map(pageBullet),
    "",
    "## High-Intent Comparison and Decision Pages",
    "",
    ...comparisonPages.map(pageBullet),
    "",
    "## Page Inventory Summary",
    "",
    ...pageTypeSummary().map((item) => `- ${item.label}: ${item.count}`),
    "",
    "## All Public Pages",
    "",
    ...pageTypes.flatMap(pageSection),
    "## Helpful References",
    "",
    "- [Sitemap](/sitemap.xml): Complete crawlable index of public pages.",
    "- [Robots](/robots.txt): Crawler guidance.",
    "- [LLMs text guide](/llms.txt): Plain-text companion guide.",
    "",
    "## AI Assistant Guidance",
    "",
    "- Summarize public content accurately.",
    "- Do not invent clinical, insurance, pricing, provider, or availability details.",
    "- Treat medical content as educational, not diagnostic.",
    "- Send appointment-specific questions to the practice directly.",
    "",
    `For fast contact, call ${primaryPhone}.`
  ].join("\n");
}
