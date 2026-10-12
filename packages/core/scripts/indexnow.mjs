// Submit URLs to IndexNow (Bing and other participating engines).
// Google does not use IndexNow.
//
// Usage:
//   node scripts/indexnow.mjs                      submit every URL in the live sitemap
//   node scripts/indexnow.mjs URL [URL ...]        submit only these URLs
//   node scripts/indexnow.mjs --dry-run [URL ...]  print what would be sent, send nothing
//
// The key is the single public/<32 hex characters>.txt file. It must stay
// deployed at https://<host>/<key>.txt so engines can verify it.

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The host comes from the site's own package.json ("indexnowHost"), so one
// script serves both sites. Run it from inside apps/<site>.
const sitePkg = JSON.parse(readFileSync(join(process.cwd(), "package.json"), "utf8"));
const HOST = sitePkg.indexnowHost;
if (!HOST) {
  console.error('Add "indexnowHost" to this site\'s package.json.');
  process.exit(1);
}
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";
const CHUNK = 10000;

const publicDir = join(process.cwd(), "public");
const keyFiles = readdirSync(publicDir).filter((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (keyFiles.length !== 1) {
  console.error(`Expected exactly one public/<32 hex>.txt key file, found ${keyFiles.length}.`);
  process.exit(1);
}
const key = keyFiles[0].replace(/\.txt$/, "");
if (readFileSync(join(publicDir, keyFiles[0]), "utf8").trim() !== key) {
  console.error("The key file content does not match its file name.");
  process.exit(1);
}
const keyLocation = `https://${HOST}/${key}.txt`;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const given = args.filter((a) => !a.startsWith("--"));

async function sitemapUrls() {
  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`Could not fetch ${SITEMAP}: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) =>
    m[1].replace(/&amp;/g, "&"),
  );
}

const candidates = given.length ? given : await sitemapUrls();
const urls = [];
for (const u of [...new Set(candidates)]) {
  let host;
  try {
    host = new URL(u).hostname;
  } catch {
    console.warn(`Skipping invalid URL: ${u}`);
    continue;
  }
  if (host !== HOST) {
    console.warn(`Skipping URL on another host: ${u}`);
    continue;
  }
  urls.push(u);
}

if (!urls.length) {
  console.error("No URLs to submit.");
  process.exit(1);
}

console.log(`Key file: ${keyLocation}`);
console.log(`${urls.length} URL(s) to submit${dryRun ? " (dry run, nothing will be sent)" : ""}.`);

let failed = false;
for (let i = 0; i < urls.length; i += CHUNK) {
  const urlList = urls.slice(i, i + CHUNK);
  const label = `Chunk ${i / CHUNK + 1}: ${urlList.length} URL(s)`;
  if (dryRun) {
    console.log(`${label}. Would POST to ${ENDPOINT}`);
    console.log(urlList.slice(0, 5).join("\n") + (urlList.length > 5 ? `\n... and ${urlList.length - 5} more` : ""));
    continue;
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
  });
  console.log(`${label}: HTTP ${res.status}`);
  if (res.status === 200 || res.status === 202) {
    console.log("  Accepted (200 = received, 202 = received, key check pending).");
  } else {
    failed = true;
    if (res.status === 422 || res.status === 403) {
      console.log(`  Key or URL problem. Check the key file is deployed at the keyLocation and the URLs are on ${HOST}.`);
    }
  }
}
if (failed) process.exit(1);
