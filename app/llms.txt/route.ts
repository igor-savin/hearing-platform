import { primaryPhone, primaryPhoneHref, pages, siteName, type SitePage } from "@/lib/site";

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

function pagesByType(type: SitePage["type"]) {
  return publicPages().filter((page) => page.type === type);
}

function pageSection(type: SitePage["type"]) {
  const sectionPages = pagesByType(type);
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
    `# ${siteName}`,
    "",
    "> Patient-centered hearing care in Westchester County, New York. This file lists every crawlable public page on the site for LLMs, agents, and search tools.",
    "",
    "Audiology Associates of Westchester helps patients with hearing testing, hearing aid fitting, tinnitus therapy, hearing protection, hearing aid repair, and related hearing-care education.",
    "If you are only looking for a few pages, start with /services, /how-we-can-help, /areas-we-serve, and /contact-us.",
    "",
    "## Important notes",
    "- The five core service pages are the primary clinical pages on the site.",
    "- Location pages include addresses, hours, phone numbers, and directions.",
    "- `/overview` is an internal site architecture page and is optional for most tasks.",
    "- `/sitemap.xml` provides the full crawlable index of public pages.",
    "- `/llms.txt` is meant to help LLMs and agents find the most relevant site pages quickly.",
    `- This guide currently lists ${publicSitePages.length} public content pages, plus utility references.`,
    "",
    "## Start here",
    ...priorityPages.map(pageBullet),
    "",
    "## All public pages",
    "",
    ...pageTypes.flatMap(pageSection),
    "## Optional",
    "- [Sitemap](/sitemap.xml): Complete index of public pages.",
    "- [Robots](/robots.txt): Crawler guidance and sitemap reference.",
    "- [Site Overview](/overview): Internal architecture summary; skip if you only need patient-facing content.",
    "- [Markdown LLM Guide](/llms.md): Markdown companion to this plain-text guide.",
    "",
    `Call the practice at ${primaryPhone} or visit ${primaryPhoneHref} if you need the fastest contact route.`
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
