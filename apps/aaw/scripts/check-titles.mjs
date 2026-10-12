// Reports <title> and meta description lengths for every URL in the sitemap.
//
// WHY: Bing Webmaster Tools marks a title over 70 characters as "too long" and
// a description under 150 as "too short", and it samples only 50 URLs per rule,
// so its report showed 8 long titles on a site that actually had 98. This walks
// the whole sitemap instead, which is what titleWithBrand() in lib/siteBasics.ts
// is measured against.
//
//   node scripts/check-titles.mjs                     # live site
//   CHECK_BASE=https://preview.vercel.app node scripts/check-titles.mjs
//
// Exits 1 when any title is over the limit, so it can gate a deploy.

const BASE = (process.env.CHECK_BASE || "https://www.audiologyassociates.org").replace(/\/$/, "");
const TITLE_MAX = 70;
const DESC_MIN = 150;
const DESC_MAX = 160;
const CONCURRENCY = 8;

function tag(html, re) {
  const m = html.match(re);
  return m ? m[1].replace(/\s+/g, " ").trim() : "";
}

async function inspect(url) {
  const res = await fetch(url);
  const html = await res.text();
  return {
    path: new URL(url).pathname,
    status: res.status,
    title: tag(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    description: tag(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)
  };
}

// The sitemap always names the live host, so rewrite it when checking a preview.
const HOST = /^https?:\/\/[^/]+/;
const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(HOST, BASE));

const rows = [];
const queue = urls.slice();
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    for (let next = queue.shift(); next; next = queue.shift()) {
      try {
        rows.push(await inspect(next));
      } catch (error) {
        rows.push({ path: next, status: 0, title: "", description: "", error: String(error) });
      }
    }
  })
);

const longTitles = rows.filter((r) => r.title.length > TITLE_MAX).sort((a, b) => b.title.length - a.title.length);
const shortDescriptions = rows.filter((r) => r.description.length > 0 && r.description.length < DESC_MIN);
const longDescriptions = rows.filter((r) => r.description.length > DESC_MAX);
const missingDescriptions = rows.filter((r) => r.description.length === 0);

console.log(`${BASE} — ${rows.length} pages checked\n`);
console.log(`titles over ${TITLE_MAX}:        ${longTitles.length}`);
console.log(`descriptions under ${DESC_MIN}:  ${shortDescriptions.length}`);
console.log(`descriptions over ${DESC_MAX}:   ${longDescriptions.length}`);
console.log(`descriptions missing:       ${missingDescriptions.length}\n`);

for (const row of longTitles) {
  console.log(`${String(row.title.length).padStart(3)}  ${row.path}\n     ${row.title}`);
}

process.exit(longTitles.length === 0 ? 0 : 1);
