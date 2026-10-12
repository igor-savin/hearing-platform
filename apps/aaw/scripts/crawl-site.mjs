import fs from "node:fs/promises";
import path from "node:path";
import * as cheerio from "cheerio";

const BASE_URL = "https://www.audiologyassociates.org";
const OUT_DIR = path.join(process.cwd(), "reports");
const DATA_DIR = path.join(process.cwd(), "data");
const MAX_PAGES = 80;

const SKIP_EXTENSIONS = /\.(?:pdf|doc|docx|xls|xlsx|ppt|pptx|zip|png|jpe?g|gif|svg|webp|ico|css|js|xml|txt|mp4|mov|avi|mp3|wav)$/i;

function normalizeUrl(input, source = BASE_URL) {
  try {
    const url = new URL(input, source);
    if (url.hostname !== "www.audiologyassociates.org") return null;
    url.hash = "";
    url.search = "";
    if (url.pathname.length > 1) {
      url.pathname = url.pathname.replace(/\/+$/, "");
    }
    if (SKIP_EXTENSIONS.test(url.pathname)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function text(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .replace(/\u00a0/g, " ")
    .trim();
}

function absoluteUrl(value, source) {
  try {
    return new URL(value, source).toString();
  } catch {
    return value || "";
  }
}

function pageType(url, title, h1) {
  const pathname = new URL(url).pathname.toLowerCase();
  const label = `${pathname} ${title} ${h1}`.toLowerCase();
  if (pathname === "/") return "home";
  if (label.includes("privacy")) return "legal";
  if (label.includes("blog")) return "blog";
  if (label.includes("contact")) return "contact";
  if (label.includes("forms")) return "form";
  if (label.includes("team")) return "team";
  if (label.includes("career")) return "careers";
  if (/(white-plains|harrison|somers|scarsdale|greenwich|rye|mt-kisco)/.test(pathname)) return "location";
  if (/(testing|therapy|protection|repair|fitting)/.test(pathname)) return "service";
  if (/(hearing-aid|hearing-aids|lyric|batteries|accessories|videos)/.test(pathname)) return "hearing-aids";
  if (/(hearing-loss|improve|dizziness|loved-one|get-answers|prevent)/.test(pathname)) return "educational";
  return "page";
}

function cleanMainText($) {
  $("script, style, noscript, svg, iframe, form, nav").remove();
  const chunks = [];
  $("h1, h2, h3, h4, h5, h6, p, li, .dmNewParagraph").each((_, el) => {
    const value = text($(el).text());
    if (!value) return;
    if (value.length < 3) return;
    if (/^(home|more|less|share by:)$/i.test(value)) return;
    if (chunks.at(-1) !== value) chunks.push(value);
  });
  return chunks.slice(0, 80);
}

function extractPage(html, url, status) {
  const $ = cheerio.load(html);
  const title = text($("title").first().text());
  const h1s = $("h1").map((_, el) => text($(el).text())).get().filter(Boolean);
  const h2s = $("h2").map((_, el) => text($(el).text())).get().filter(Boolean);
  const h3s = $("h3").map((_, el) => text($(el).text())).get().filter(Boolean);
  const metaDescription = text($("meta[name='description']").attr("content"));
  const metaRobots = text($("meta[name='robots']").attr("content"));
  const canonical = normalizeUrl($("link[rel='canonical']").attr("href") || url, url);
  const schema = $("script[type='application/ld+json']")
    .map((_, el) => text($(el).text()).slice(0, 600))
    .get()
    .filter(Boolean);
  const images = $("img")
    .map((_, el) => ({
      src: absoluteUrl($(el).attr("src") || $(el).attr("data-src") || "", url),
      alt: text($(el).attr("alt")),
      width: text($(el).attr("width")),
      height: text($(el).attr("height"))
    }))
    .get()
    .filter((image) => image.src && !image.src.startsWith("data:"))
    .slice(0, 30);
  const links = $("a[href]")
    .map((_, el) => {
      const href = $(el).attr("href");
      const normalized = normalizeUrl(href, url);
      return normalized
        ? {
            href: normalized,
            text: text($(el).text()) || text($(el).attr("aria-label"))
          }
        : null;
    })
    .get()
    .filter(Boolean);
  const forms = $("form")
    .map((_, el) => ({
      id: text($(el).attr("id")),
      action: text($(el).attr("action")),
      method: text($(el).attr("method") || "get"),
      fields: $(el)
        .find("input, textarea, select")
        .map((__, field) => text($(field).attr("name") || $(field).attr("placeholder") || $(field).attr("aria-label")))
        .get()
        .filter(Boolean)
    }))
    .get();
  const ctas = $("a, button")
    .map((_, el) => {
      const label = text($(el).text()) || text($(el).attr("aria-label"));
      const href = $(el).attr("href") || "";
      if (!/(call|phone|appointment|contact|schedule|request|learn|get started|hearing|location)/i.test(`${label} ${href}`)) return null;
      return {
        label,
        href: href ? absoluteUrl(href, url) : ""
      };
    })
    .get()
    .filter(Boolean)
    .slice(0, 25);
  const paragraphs = cleanMainText($);
  const footerLinks = links.slice(-20);

  return {
    url,
    status,
    title,
    h1: h1s[0] || "",
    h1s,
    metaTitle: title,
    metaDescription,
    sections: [...h2s, ...h3s].slice(0, 25),
    images,
    internalLinks: links,
    forms,
    ctas,
    footerLinks,
    schema,
    canonical,
    indexability: status === 200 && !/noindex/i.test(metaRobots) ? "indexable" : "review",
    type: pageType(url, title, h1s[0] || ""),
    text: paragraphs
  };
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "CodexSiteInventory/1.0 (+https://www.audiologyassociates.org)"
    },
    redirect: "follow"
  });
  return {
    status: response.status,
    finalUrl: normalizeUrl(response.url) || url,
    body: await response.text()
  };
}

async function sitemapUrls() {
  const { body } = await fetchText(`${BASE_URL}/sitemap.xml`);
  const $ = cheerio.load(body, { xmlMode: true });
  return $("loc")
    .map((_, el) => normalizeUrl($(el).text()))
    .get()
    .filter(Boolean);
}

function mdEscape(value) {
  return text(value).replace(/\|/g, "\\|");
}

function inventoryMarkdown(pages) {
  const rows = pages.map((page) => {
    const imageSummary = page.images.map((image) => `${image.alt || "missing alt"} (${image.src})`).slice(0, 4).join("; ");
    const ctaSummary = page.ctas.map((cta) => `${cta.label || cta.href}`).slice(0, 6).join("; ");
    return [
      page.url,
      page.type,
      page.status,
      page.indexability,
      page.title,
      page.h1,
      page.metaDescription,
      page.canonical || "",
      page.sections.join("; "),
      imageSummary,
      page.internalLinks.length,
      page.forms.length ? page.forms.map((form) => `${form.method} ${form.action || "inline"} (${form.fields.join(", ")})`).join("; ") : "None found",
      ctaSummary,
      page.schema.length ? `${page.schema.length} JSON-LD block(s)` : "None found"
    ]
      .map(mdEscape)
      .join(" | ");
  });

  return [
    "# Page Inventory",
    "",
    `Crawled ${pages.length} pages from ${BASE_URL}.`,
    "",
    "| URL | Type | Status | Indexability | Page Title | H1 | Meta Description | Canonical | Main Sections | Images / Alt Text | Internal Link Count | Forms | CTA Buttons | Schema |",
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ...rows
  ].join("\n");
}

function metadataMarkdown(pages) {
  return [
    "# SEO Metadata Map",
    "",
    "| URL | Existing Title | Existing Meta Description | Existing H1 | Recommended Focus |",
    "| --- | --- | --- | --- | --- |",
    ...pages.map((page) =>
      [
        page.url,
        page.metaTitle,
        page.metaDescription,
        page.h1,
        page.type === "location"
          ? `Audiologist and hearing care in ${page.h1.replace(/Audiology Associates of Westchester|Hearing Care Services|-/gi, "").trim() || "Westchester"}`
          : page.type === "service"
            ? `${page.h1 || page.title} in Westchester County`
            : page.type
      ]
        .map(mdEscape)
        .join(" | ")
    )
  ].join("\n");
}

function redirectMarkdown(pages) {
  const livePaths = new Set(pages.filter((page) => page.status === 200).map((page) => new URL(page.url).pathname || "/"));
  const suggestions = [
    ["/privacy-policy", "/privacy"],
    ["/locations", "/contact-us"],
    ["/services", "/hearing-testing"],
    ["/hearing-aid-brands", "/hearing-aids-brands"],
    ["/somers-ny", "/Somers-NY"],
    ["/white-plains-ny", "/White-Plains-NY"],
    ["/scarsdale-ny", "/Scarsdale-NY"],
    ["/null", "/"]
  ].filter(([from, to]) => (!livePaths.has(from) || from === "/null") && livePaths.has(to));

  return [
    "# Redirect Map",
    "",
    "Preserved live URLs are intended to remain unchanged. The redirects below cover common normalized or requested alternatives.",
    "",
    "| From | To | Status | Reason |",
    "| --- | --- | --- | --- |",
    ...suggestions.map(([from, to]) => `${from} | ${to} | 301 | Normalize alternate slug to preserved live URL |`)
  ].join("\n");
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(DATA_DIR, { recursive: true });

  const queue = new Set([BASE_URL, `${BASE_URL}/privacy`, ...(await sitemapUrls())]);
  const seen = new Set();
  const pages = [];

  while (queue.size && pages.length < MAX_PAGES) {
    const url = [...queue][0];
    queue.delete(url);
    if (seen.has(url)) continue;
    seen.add(url);

    try {
      const { body, status, finalUrl } = await fetchText(url);
      const page = extractPage(body, finalUrl, status);
      pages.push(page);
      for (const link of page.internalLinks) {
        if (!seen.has(link.href) && pages.length + queue.size < MAX_PAGES) {
          queue.add(link.href);
        }
      }
      console.log(`Crawled ${status} ${finalUrl}`);
    } catch (error) {
      console.warn(`Failed ${url}: ${error.message}`);
    }
  }

  const uniquePages = [];
  const uniqueKeys = new Set();
  for (const page of pages) {
    const key = new URL(page.url).pathname;
    if (uniqueKeys.has(key)) continue;
    uniqueKeys.add(key);
    uniquePages.push(page);
  }

  uniquePages.sort((a, b) => {
    const pathA = new URL(a.url).pathname;
    const pathB = new URL(b.url).pathname;
    return pathA.localeCompare(pathB);
  });

  await fs.writeFile(path.join(DATA_DIR, "crawl.json"), JSON.stringify(uniquePages, null, 2));
  await fs.writeFile(path.join(OUT_DIR, "page-inventory.md"), inventoryMarkdown(uniquePages));
  await fs.writeFile(path.join(OUT_DIR, "seo-metadata-map.md"), metadataMarkdown(uniquePages));
  await fs.writeFile(path.join(OUT_DIR, "redirect-map.md"), redirectMarkdown(uniquePages));
  console.log(`Saved ${uniquePages.length} pages to ${path.join(DATA_DIR, "crawl.json")}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
