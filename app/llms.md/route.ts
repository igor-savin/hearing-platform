import { primaryPhone, pages, siteName, type SitePage } from "@/lib/site";

export const dynamic = "force-static";

const priorityPaths = [
  "/",
  "/services",
  "/how-we-can-help",
  "/areas-we-serve",
  "/contact-us",
  "/patient-forms"
];

const typeLabels: Record<SitePage["type"], string> = {
  "area-city": "Service Area Cities",
  "area-county": "Service Area Counties",
  "blog-index": "Blog Index",
  "blog-post": "Articles",
  careers: "Careers",
  contact: "Contact",
  educational: "Education",
  form: "Forms",
  "hearing-aids": "Hearing Aid Education",
  home: "Home",
  "how-we-can-help-index": "How We Can Help",
  legal: "Legal",
  location: "Locations",
  page: "Pages",
  product: "Hearing Aid Products",
  "product-brand": "Hearing Aid Brands",
  "product-brand-index": "Hearing Aid Brand Index",
  "products-index": "Products Index",
  provider: "Provider Profiles",
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

function pageSection(type: SitePage["type"]) {
  const sectionPages = publicPages().filter((page) => page.type === type);
  if (!sectionPages.length) return [];
  return [`## ${typeLabels[type]}`, "", ...sectionPages.map(pageBullet), ""];
}

export function GET() {
  const publicSitePages = publicPages();
  const priorityPages = priorityPaths
    .map((path) => publicSitePages.find((page) => page.path === path))
    .filter((page): page is SitePage => Boolean(page));
  const pageTypes = Array.from(new Set(publicSitePages.map((page) => page.type)));

  const lines = [
    `# ${siteName} — Markdown Guide`,
    "",
    "> A markdown-first reference for human readers and LLM crawlers. This guide lists every crawlable public page on the site.",
    "",
    "This site focuses on patient-centered audiology care in Westchester County and nearby communities. The most useful destinations are the home page, services hub, location pages, tinnitus resources, educational pages, and contact options.",
    "",
    `This guide currently lists ${publicSitePages.length} public content pages, plus utility references.`,
    "",
    "## Start here",
    "",
    ...priorityPages.map(pageBullet),
    "",
    "## All public pages",
    "",
    ...pageTypes.flatMap(pageSection),
    "## Helpful references",
    "",
    "- [Sitemap](/sitemap.xml): Complete crawlable index of public pages.",
    "- [Robots](/robots.txt): Crawler guidance.",
    "- [LLMs text guide](/llms.txt): Plain-text companion guide.",
    "- [Site overview](/overview): Internal architecture summary; optional.",
    "",
    `For fast contact, call ${primaryPhone}.`
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
