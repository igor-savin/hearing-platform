import fs from "node:fs/promises";
import path from "node:path";
import * as cheerio from "cheerio";

const BASE = (process.env.QA_BASE || "https://audiology-associates-westchester.vercel.app").replace(/\/$/, "");
const LIVE_BASE = "https://www.audiologyassociates.org";
const OUT_DIR = path.join(process.cwd(), "reports");
const OUT_FILE =
  process.env.QA_REPORT ||
  `functionality-qa-${BASE.includes("vercel.app") ? "production" : "local"}-${new Date().toISOString().slice(0, 10)}.md`;

const routeTimeoutMs = 15000;
const externalTimeoutMs = 20000;

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

function absoluteUrl(href, base = BASE) {
  try {
    return new URL(href, base).toString();
  } catch {
    return "";
  }
}

function sameSitePath(href) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return "";
  const url = absoluteUrl(href);
  if (!url) return "";
  const parsed = new URL(url);
  if (parsed.origin === BASE) return parsed.pathname || "/";
  if (parsed.origin === LIVE_BASE) return parsed.pathname || "/";
  return "";
}

async function fetchWithTimeout(url, options = {}, timeoutMs = routeTimeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    const body = options.method === "HEAD" ? "" : await response.text();
    return { ok: true, response, body, error: "" };
  } catch (error) {
    return { ok: false, response: null, body: "", error: error instanceof Error ? error.message : String(error) };
  } finally {
    clearTimeout(timeout);
  }
}

function expectedPages(crawl) {
  const seen = new Set();
  return crawl
    .filter((page) => page.status === 200)
    .map((page) => pathFromUrl(page.url))
    .filter((pathname) => {
      if (seen.has(pathname)) return false;
      seen.add(pathname);
      return true;
    });
}

function assertField($, selector, label) {
  const field = $(selector).first();
  return {
    label,
    pass: field.length > 0,
    detail: field.length ? "present" : "missing"
  };
}

async function checkPage(pathname) {
  const page = await fetchWithTimeout(`${BASE}${pathname}`);
  const failures = [];
  const links = new Set();
  const externalAssets = [];

  if (!page.ok || !page.response) {
    return {
      path: pathname,
      status: "error",
      navLinks: 0,
      telLinks: 0,
      appointmentLinks: 0,
      forms: 0,
      failures: [page.error || "Fetch failed"],
      links,
      externalAssets
    };
  }

  const $ = cheerio.load(page.body);
  const status = page.response.status;
  if (status !== 200) failures.push(`Expected 200, got ${status}`);

  const navLinks = $("header a[href], header button").length;
  const telLinks = $("a[href^='tel:']").length;
  const appointmentLinks = $("a.zd-plugin, a[data-track*='appointment']").length;
  const forms = $("form").length;
  const h1Count = $("h1").length;

  if (h1Count !== 1) failures.push(`Expected one H1, found ${h1Count}`);
  if (pathname === "/" && forms < 1) failures.push("Homepage contact form missing");
  if (pathname === "/contact-us" && forms < 1) failures.push("Contact form missing");
  if (!telLinks) failures.push("No phone links found");
  if (!appointmentLinks) failures.push("No appointment/Zocdoc links found");

  $("a[href]").each((_, el) => {
    const href = $(el).attr("href") || "";
    const internalPath = sameSitePath(href);
    if (internalPath) links.add(internalPath);
    if (/irp-cdn\.multiscreensite\.com/.test(href) || /offsiteschedule\.zocdoc\.com/.test(href)) {
      externalAssets.push(href);
    }
  });

  return {
    path: pathname,
    status,
    navLinks,
    telLinks,
    appointmentLinks,
    forms,
    failures,
    links,
    externalAssets
  };
}

async function checkRedirect(pathname, expectedLocation) {
  const result = await fetchWithTimeout(`${BASE}${pathname}`, { redirect: "manual" });
  if (!result.response) {
    return { pathname, status: "error", location: "", pass: false, detail: result.error || "Fetch failed" };
  }
  const location = result.response.headers.get("location") || "";
  const pass =
    [301, 302, 307, 308].includes(result.response.status) &&
    (!expectedLocation || location.endsWith(expectedLocation));
  return {
    pathname,
    status: result.response.status,
    location,
    pass,
    detail: pass ? "Pass" : `Expected redirect to ${expectedLocation || "configured destination"}`
  };
}

async function checkStaticEndpoint(pathname, expectedNeedles = []) {
  const result = await fetchWithTimeout(`${BASE}${pathname}`);
  const statusPass = Boolean(result.response && result.response.status === 200);
  const missing = expectedNeedles.filter((needle) => !result.body.includes(needle));
  return {
    pathname,
    status: result.response?.status || "error",
    pass: statusPass && missing.length === 0,
    detail: !statusPass ? result.error || "Non-200 response" : missing.length ? `Missing: ${missing.join(", ")}` : "Pass"
  };
}

async function checkInternalLinks(paths) {
  const broken = [];
  const results = [];
  for (const pathname of [...paths].sort()) {
    const response = await fetchWithTimeout(`${BASE}${pathname}`, { redirect: "manual" });
    const status = response.response?.status || "error";
    const pass = [200, 301, 302, 307, 308].includes(Number(status));
    results.push({ pathname, status, pass });
    if (!pass) broken.push({ pathname, status, detail: response.error || "Unexpected status" });
  }
  return { results, broken };
}

async function checkExternalAssets(assets) {
  const uniqueAssets = [...new Set(assets)].sort();
  const results = [];
  for (const asset of uniqueAssets) {
    const result = await fetchWithTimeout(asset, { method: "HEAD", redirect: "follow" }, externalTimeoutMs);
    let status = result.response?.status || "error";
    if (status === 405 || status === "error") {
      const fallback = await fetchWithTimeout(asset, { redirect: "follow" }, externalTimeoutMs);
      status = fallback.response?.status || "error";
      results.push({
        asset,
        status,
        pass: Number(status) >= 200 && Number(status) < 500,
        detail: fallback.error || "GET fallback"
      });
    } else {
      results.push({
        asset,
        status,
        pass: Number(status) >= 200 && Number(status) < 500,
        detail: "HEAD"
      });
    }
  }
  return results;
}

async function checkHomeIntegrations() {
  const home = await fetchWithTimeout(`${BASE}/`);
  const values = [
    ["Google Tag Manager", "GTM-T6X664N"],
    ["Facebook Pixel", "2514209258866599"],
    ["Piwik Pro", "33153b90-8d23-4967-9b24-5a3b3f41f3f7"],
    ["Snowplow App", "d8404b56"],
    ["Snowplow Collector", "d32hwlnfiv2gyn.cloudfront.net"],
    ["Zocdoc Practice", "69184"],
    ["Zocdoc Lazy Loader", "loadZocdocPlugin"]
  ];
  return values.map(([label, needle]) => ({
    label,
    needle,
    pass: home.body.includes(needle)
  }));
}

async function checkForms() {
  const pages = ["/", "/contact-us"];
  const rows = [];
  for (const pathname of pages) {
    const result = await fetchWithTimeout(`${BASE}${pathname}`);
    const $ = cheerio.load(result.body);
    const checks = [
      assertField($, "form", "form"),
      assertField($, "input[name='name'][required]", "required name"),
      assertField($, "input[name='phone'][required]", "required phone"),
      assertField($, "input[name='email'][type='email']", "email field"),
      assertField($, "textarea[name='message'][required]", "required message"),
      assertField($, "button[type='submit'][data-track='contact-submit']", "tracked submit")
    ];
    rows.push({
      pathname,
      pass: checks.every((check) => check.pass),
      detail: checks.map((check) => `${check.label}: ${check.detail}`).join("; ")
    });
  }

  const api = await fetchWithTimeout(
    `${BASE}/api/contact`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ qa: true })
    },
    routeTimeoutMs
  );
  rows.push({
    pathname: "/api/contact",
    pass: Boolean(api.response && api.response.status === 400 && api.body.includes("Please provide")),
    detail: api.response ? `validation POST ${api.response.status}` : api.error
  });

  return rows;
}

function reportTable(rows, columns) {
  return [
    `| ${columns.map((column) => column.label).join(" | ")} |`,
    `| ${columns.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${columns.map((column) => md(column.value(row))).join(" | ")} |`)
  ].join("\n");
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const crawl = JSON.parse(await fs.readFile(path.join(process.cwd(), "data/crawl.json"), "utf8"));
  const pages = expectedPages(crawl);
  const pageRows = [];
  const internalLinks = new Set();
  const externalAssets = new Set();

  for (const pathname of pages) {
    const row = await checkPage(pathname);
    pageRows.push(row);
    row.links.forEach((link) => internalLinks.add(link));
    row.externalAssets.forEach((asset) => externalAssets.add(asset));
  }

  const internal = await checkInternalLinks(internalLinks);
  const redirects = await Promise.all([
    checkRedirect("/privacy-policy", "/privacy"),
    checkRedirect("/hearing-aid-brands", "/hearing-aids-brands"),
    checkRedirect("/locations", "/contact-us"),
    checkRedirect("/services", "/hearing-testing"),
    checkRedirect("/null", "/")
  ]);
  const endpoints = await Promise.all([
    checkStaticEndpoint("/sitemap.xml", ["https://www.audiologyassociates.org/"]),
    checkStaticEndpoint("/robots.txt", ["Sitemap: https://www.audiologyassociates.org/sitemap.xml"]),
    checkStaticEndpoint("/llms.txt", ["Audiology Associates of Westchester"])
  ]);
  const integrations = await checkHomeIntegrations();
  const formRows = await checkForms();
  const assets = await checkExternalAssets(externalAssets);

  const failures = [
    ...pageRows.flatMap((row) => row.failures.map((failure) => `${row.path}: ${failure}`)),
    ...internal.broken.map((row) => `${row.pathname}: internal link returned ${row.status}`),
    ...redirects.filter((row) => !row.pass).map((row) => `${row.pathname}: ${row.detail}`),
    ...endpoints.filter((row) => !row.pass).map((row) => `${row.pathname}: ${row.detail}`),
    ...integrations.filter((row) => !row.pass).map((row) => `Integration missing: ${row.label}`),
    ...formRows.filter((row) => !row.pass).map((row) => `${row.pathname}: ${row.detail}`),
    ...assets.filter((row) => !row.pass).map((row) => `${row.asset}: external asset returned ${row.status}`)
  ];

  const report = [
    "# Functionality QA Report",
    "",
    `Base URL: ${BASE}`,
    `Run date: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
    `- Crawled rebuilt pages checked: ${pageRows.length}`,
    `- Page-level failures: ${pageRows.filter((row) => row.failures.length).length}`,
    `- Internal links checked: ${internal.results.length}`,
    `- Broken internal links: ${internal.broken.length}`,
    `- Redirect checks passed: ${redirects.filter((row) => row.pass).length}/${redirects.length}`,
    `- Sitemap/robots/llms checks passed: ${endpoints.filter((row) => row.pass).length}/${endpoints.length}`,
    `- Tracking/widget checks passed: ${integrations.filter((row) => row.pass).length}/${integrations.length}`,
    `- Form structure/API checks passed: ${formRows.filter((row) => row.pass).length}/${formRows.length}`,
    `- External PDF/widget assets checked: ${assets.length}`,
    `- External PDF/widget asset failures: ${assets.filter((row) => !row.pass).length}`,
    "",
    failures.length ? "## Failures" : "## Failures",
    "",
    failures.length ? failures.map((failure) => `- ${failure}`).join("\n") : "No automated functionality failures found.",
    "",
    "## Page Checks",
    "",
    reportTable(pageRows, [
      { label: "Path", value: (row) => row.path },
      { label: "HTTP", value: (row) => row.status },
      { label: "Header Controls", value: (row) => row.navLinks },
      { label: "Phone Links", value: (row) => row.telLinks },
      { label: "Appointment Links", value: (row) => row.appointmentLinks },
      { label: "Forms", value: (row) => row.forms },
      { label: "Result", value: (row) => (row.failures.length ? row.failures.join("; ") : "Pass") }
    ]),
    "",
    "## Form and API Checks",
    "",
    reportTable(formRows, [
      { label: "Path", value: (row) => row.pathname },
      { label: "Pass", value: (row) => (row.pass ? "yes" : "no") },
      { label: "Detail", value: (row) => row.detail }
    ]),
    "",
    "## Redirect Checks",
    "",
    reportTable(redirects, [
      { label: "From", value: (row) => row.pathname },
      { label: "HTTP", value: (row) => row.status },
      { label: "Location", value: (row) => row.location },
      { label: "Pass", value: (row) => (row.pass ? "yes" : "no") },
      { label: "Detail", value: (row) => row.detail }
    ]),
    "",
    "## Sitemap, Robots, and LLM Checks",
    "",
    reportTable(endpoints, [
      { label: "Path", value: (row) => row.pathname },
      { label: "HTTP", value: (row) => row.status },
      { label: "Pass", value: (row) => (row.pass ? "yes" : "no") },
      { label: "Detail", value: (row) => row.detail }
    ]),
    "",
    "## Tracking and Widget Checks",
    "",
    reportTable(integrations, [
      { label: "Integration", value: (row) => row.label },
      { label: "Expected Value", value: (row) => row.needle },
      { label: "Present", value: (row) => (row.pass ? "yes" : "no") }
    ]),
    "",
    "## External PDF and Widget Assets",
    "",
    reportTable(assets, [
      { label: "Asset", value: (row) => row.asset },
      { label: "HTTP", value: (row) => row.status },
      { label: "Pass", value: (row) => (row.pass ? "yes" : "no") },
      { label: "Method", value: (row) => row.detail }
    ]),
    "",
    "## Manual Browser Checks To Pair With This Report",
    "",
    "- Header dropdowns open on hover/focus and collapse when the pointer leaves the nav item.",
    "- Zocdoc opens in a new tab or activates the embedded Zocdoc booking widget without blocking navigation.",
    "- Contact forms can save to Firebase Firestore using the live public rules.",
    "- Phone links trigger the device/browser call handler.",
    "- Patient form PDFs open in a new browser tab.",
    ""
  ].join("\n");

  const outputPath = path.join(OUT_DIR, OUT_FILE);
  await fs.writeFile(outputPath, report);
  console.log(outputPath);
  console.log(report);

  if (process.env.QA_STRICT === "1" && failures.length) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
