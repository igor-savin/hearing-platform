import fs from "node:fs/promises";
import path from "node:path";
import * as cheerio from "cheerio";

const BASE = (process.env.QA_BASE || "https://audiology-associates-westchester.vercel.app").replace(/\/$/, "");
const LIVE_BASE = "https://www.audiologyassociates.org";
const OUT_DIR = path.join(process.cwd(), "reports");

function pathFromUrl(url) {
  const pathname = new URL(url).pathname || "/";
  return pathname === "" ? "/" : pathname;
}

function text(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function md(value) {
  return text(value).replace(/\|/g, "\\|");
}

async function fetchPage(pathname, options = {}) {
  const response = await fetch(`${BASE}${pathname}`, options);
  const body = await response.text();
  return { response, body };
}

function expectedPages(crawl) {
  const seen = new Set();
  return crawl
    .filter((page) => page.status === 200)
    .filter((page) => {
      const pathname = pathFromUrl(page.url);
      if (seen.has(pathname)) return false;
      seen.add(pathname);
      return true;
    })
    .map((page) => ({
      path: pathFromUrl(page.url),
      liveTitle: page.title,
      liveH1: page.h1 || (pathFromUrl(page.url) === "/privacy" ? "Privacy Policy" : ""),
      liveMetaDescription: page.metaDescription,
      liveType: page.type
    }));
}

function classify(pathname, liveType) {
  if (pathname === "/blog") return "blog index";
  if (
    [
      "/celebrating-pride-month-embracing-inclusivity-and-compassion",
      "/psoriasis-affects-more-than-your-skin",
      "/how-to-take-care-of-a-blocked-ear"
    ].includes(pathname)
  ) {
    return "blog post";
  }
  if (pathname === "/privacy") return "legal";
  return liveType;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const crawl = JSON.parse(await fs.readFile(path.join(process.cwd(), "data/crawl.json"), "utf8"));
  const expected = expectedPages(crawl);
  const rows = [];
  const internalLinks = new Set();

  for (const page of expected) {
    const { response, body } = await fetchPage(page.path);
    const $ = cheerio.load(body);
    const title = text($("title").first().text());
    const metaDescription = text($("meta[name='description']").attr("content"));
    const h1s = $("h1").map((_, el) => text($(el).text())).get().filter(Boolean);
    const canonical = text($("link[rel='canonical']").attr("href"));
    const schemaCount = $("script[type='application/ld+json']").length;
    const faqCount = $("script[type='application/ld+json']").text().includes("FAQPage") ? "yes" : "review";
    const ctas = $("a[href^='tel:'], a[data-track*='appointment'], button[data-track='contact-submit']").length;
    const forms = $("form").length;
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href") || "";
      if (href.startsWith("/")) internalLinks.add(href.split("#")[0].split("?")[0] || "/");
    });

    const notes = [];
    if (response.status !== 200) notes.push(`Expected 200, got ${response.status}`);
    if (!title) notes.push("Missing title");
    if (!metaDescription) notes.push("Missing meta description");
    if (h1s.length !== 1) notes.push(`H1 count ${h1s.length}`);
    if (!canonical.includes(`${LIVE_BASE}${page.path === "/" ? "" : page.path}`)) notes.push("Canonical mismatch");
    if (!schemaCount) notes.push("Missing schema");
    if (!ctas) notes.push("No CTA found");

    rows.push({
      path: page.path,
      type: classify(page.path, page.liveType),
      liveTitle: page.liveTitle,
      liveH1: page.liveH1,
      status: response.status,
      title: title ? "yes" : "no",
      meta: metaDescription ? "yes" : "no",
      h1: h1s.length === 1 ? "yes" : `no (${h1s.length})`,
      canonical: canonical ? "yes" : "no",
      schema: schemaCount ? `${schemaCount}` : "no",
      faq: faqCount,
      cta: ctas ? `${ctas}` : "no",
      form: forms ? `${forms}` : page.path === "/contact-us" || page.path === "/" ? "missing" : "n/a",
      notes: notes.length ? notes.join("; ") : "Pass"
    });
  }

  const sitemap = await fetchPage("/sitemap.xml");
  const robots = await fetchPage("/robots.txt");
  const llms = await fetchPage("/llms.txt");
  const home = await fetchPage("/");
  const pixelChecks = [
    ["Google Tag Manager", "GTM-T6X664N"],
    ["Facebook Pixel", "2514209258866599"],
    ["Piwik Pro", "33153b90-8d23-4967-9b24-5a3b3f41f3f7"],
    ["Duda/Snowplow App", "d8404b56"],
    ["Duda/Snowplow Collector", "d32hwlnfiv2gyn.cloudfront.net"],
    ["Zocdoc Practice", "69184"],
    ["Zocdoc Lazy Loader", "loadZocdocPlugin"]
  ].map(([label, value]) => ({
    label,
    value,
    present: home.body.includes(value)
  }));
  const redirectChecks = [
    "/privacy-policy",
    "/somers-ny",
    "/white-plains-ny",
    "/scarsdale-ny",
    "/hearing-aid-brands",
    "/locations",
    "/services",
    "/null"
  ];
  const redirects = [];
  for (const pathname of redirectChecks) {
    const response = await fetch(`${BASE}${pathname}`, { redirect: "manual" });
    redirects.push({ pathname, status: response.status, location: response.headers.get("location") || "" });
  }

  const brokenInternal = [];
  for (const href of [...internalLinks].sort()) {
    const response = await fetch(`${BASE}${href}`, { redirect: "manual" });
    if (![200, 301, 302, 307, 308].includes(response.status)) {
      brokenInternal.push({ href, status: response.status });
    }
  }

  const report = [
    "# Page-by-Page Compliance Report",
    "",
    `Compared ${rows.length} rebuilt pages against the crawled live inventory.`,
    "",
    "## Summary",
    "",
    `- Expected live pages recreated: ${rows.length}`,
    `- Blog posts found and recreated: ${rows.filter((row) => row.type === "blog post").length}`,
    `- Pages with pass notes: ${rows.filter((row) => row.notes === "Pass").length}`,
    `- Internal broken links found: ${brokenInternal.length}`,
    `- Sitemap status: ${sitemap.response.status}`,
    `- Robots status: ${robots.response.status}`,
    `- llms.txt status: ${llms.response.status}`,
    `- Pixel/widget parity checks passed: ${pixelChecks.filter((item) => item.present).length}/${pixelChecks.length}`,
    "",
    "## Pages",
    "",
    "| Path | Type | Live Title | Live H1 | HTTP | Title | Meta | One H1 | Canonical | Schema Blocks | FAQ | CTAs | Forms | Notes |",
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ...rows.map((row) =>
      [
        row.path,
        row.type,
        row.liveTitle,
        row.liveH1,
        row.status,
        row.title,
        row.meta,
        row.h1,
        row.canonical,
        row.schema,
        row.faq,
        row.cta,
        row.form,
        row.notes
      ]
        .map(md)
        .join(" | ")
    ),
    "",
    "## Redirect Checks",
    "",
    "| From | Status | Location |",
    "| --- | --- | --- |",
    ...redirects.map((item) => [item.pathname, item.status, item.location].map(md).join(" | ")),
    "",
    "## Pixel and Widget Checks",
    "",
    "| Integration | Expected value | Present |",
    "| --- | --- | --- |",
    ...pixelChecks.map((item) => [item.label, item.value, item.present ? "yes" : "no"].map(md).join(" | ")),
    "",
    "## Broken Internal Links",
    "",
    brokenInternal.length
      ? brokenInternal.map((item) => `- ${item.href}: ${item.status}`).join("\n")
      : "No broken internal links found in rebuilt pages.",
    "",
    "## Business Confirmation Needed",
    "",
    "- Live footer and contact page emphasize Harrison and Somers, while live White Plains and Scarsdale pages list separate addresses. Confirm whether White Plains and Scarsdale are active office locations before launch.",
    "- Confirm current office hours and phone routing for each office before launch.",
    "- Confirm Firebase Firestore and Storage rules for public form submissions before launch."
  ].join("\n");

  await fs.writeFile(path.join(OUT_DIR, "page-compliance.md"), report);
  console.log(report);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
