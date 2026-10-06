// Harvest UNIQUE, commercial-license photos from the Pexels API for every
// blog + core page still rendering an SVG placeholder. Pexels license allows
// commercial use with NO attribution required, so no credits page is needed.
//
// Setup: get a free key at https://www.pexels.com/api/  (takes ~2 min)
// Usage:
//   PEXELS_API_KEY=xxxx node _migration/harvestPexels.mjs plan  -> preview queries, no downloads
//   PEXELS_API_KEY=xxxx node _migration/harvestPexels.mjs run    -> download + write data files
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const MODE = process.argv[2] || "plan";

// ---- 1. Figure out which pages still need a real photo -------------------
function frags(file) {
  const t = readFileSync(join(ROOT, file), "utf8");
  const re = /"(\/[^"]+\/)":\s*\{/g;
  const idx = [];
  let m;
  while ((m = re.exec(t))) idx.push([m[1], m.index]);
  return idx.map(([p, i], k) => {
    const end = k + 1 < idx.length ? idx[k + 1][1] : t.length;
    const block = t.slice(i, end);
    const im = block.match(/image:\s*"([^"]+)"/);
    const head = block.match(/headline:\s*"([^"]+)"/);
    const kick = block.match(/kicker:\s*"([^"]+)"/);
    return { p, img: im ? im[1] : "", headline: head ? head[1] : "", kicker: kick ? kick[1] : "" };
  });
}
function alreadyPhotoed(file) {
  return new Set([...readFileSync(join(ROOT, file), "utf8").matchAll(/"(\/[^"]+\/)":/g)].map((x) => x[1]));
}
const have = new Set([...alreadyPhotoed("app/data/blogPhotos.ts"), ...alreadyPhotoed("app/data/corePhotos.ts")]);
const blogTargets = frags("app/data/blogPosts.ts").filter((f) => !have.has(f.p) && /\.svg$/.test(f.img));
const coreTargets = frags("app/data/corePages.ts").filter((f) => !have.has(f.p) && /\.svg$/.test(f.img));

// ---- 2. Build a topical search query for each page -----------------------
// Distinctive keyword extraction from the slug, mapped onto photographable
// concepts. A HINT map overrides pages whose slug alone is a poor visual cue.
const STOP = new Set("the a an and or of to for in on with your you how what why when is are can do does may be it its as at from vs".split(" "));
const HINTS = {
  // blog
  "are-hearing-aids-waterproof": "hearing aid water splash",
  "balance-and-hearing-health": "senior balance walking",
  "best-hearing-aids-for-profound-hearing-loss": "powerful hearing aid",
  "can-you-negotiate-hearing-aid-prices": "hearing aid cost money",
  "causes-of-ear-itching": "ear itch",
  "common-causes-of-hearing-problems-how-to-spot-them": "ear examination doctor",
  "connection-between-kidney-disease-and-hearing-loss": "kidney health senior",
  "could-there-be-a-link-between-hearing-loss-and-dementia": "elderly memory dementia",
  "debunking-the-myths-of-hearing-loss": "senior thinking question",
  "different-ways-to-test-for-hearing-loss": "audiometry hearing test booth",
  "do-you-know-the-less-common-causes-of-hearing-loss": "ear anatomy doctor",
  "does-miracle-ear-have-audiologists": "audiologist consultation",
  "drive-safely-even-with-hearing-loss": "senior driving car",
  "ear-buds-may-lead-to-hearing-loss-but-it-can-be-avoided": "earbuds headphones loud",
  "gene-therapy-may-be-the-answer-to-hearing-loss": "dna laboratory research",
  "gentamicin-and-hearing-loss": "medication pills",
  "health-monitoring-features-in-hearing-aids-the-future-of-hearing-health": "smartwatch health technology",
  "hearing-aid-care-2025": "cleaning hearing aid",
  "hearing-aid-repair-vs-replace": "hearing aid repair tools",
  "hearing-aid-warranties-repair-loss-damage": "hearing aid case",
  "tinnitus": "person ringing ears stress",
};
// Concept classifier: map slug keywords onto photographable, on-brand concepts.
// Rules are checked in order; first match wins. Keeps weird slugs (waymo,
// paul-simon, better-hearing-month) from becoming literal junk searches.
const CONCEPTS = [
  [/insurance|medicare|medi-cal|cost|price|negotiate|afford|warrant/, "hearing aid cost consultation desk"],
  [/audiogram|test|screening|diagnos|evaluat/, "audiologist hearing test booth patient"],
  [/audiologist|specialist|miracle-ear|provider/, "audiologist consulting senior patient"],
  [/tinnitus|ringing|hyperacusis|noise-sensit/, "man stressed ringing ears headache"],
  [/dementia|cognitive|brain|memory|isolation|lonel|energy|fatigue|stigma|mental/, "senior man thoughtful window"],
  [/diabet|kidney|heart|cardio|smoking|snoring|health-implication|risk-factor/, "senior health checkup doctor"],
  [/water|swim|waterproof|itch|wax|infection/, "ear close up examination"],
  [/repair|troubleshoot|care|clean|maintain|battery/, "cleaning hearing aid hands"],
  [/waterproof/, "hearing aid water"],
  [/senior|grandparent|grandchild|elderly|loved-one|family|generation|communicat|accommodate/, "happy senior family conversation"],
  [/ai|technology|smart|future|health-monitor|auracast|revolution|innovat|latest|devices?/, "modern hearing aid technology"],
  [/waymo|robotaxi|driv/, "senior driving car"],
  [/gene-therapy|research|study|science/, "medical research laboratory"],
  [/medication|gentamicin|drug|ototoxic/, "prescription medication pills"],
  [/paul-simon|celebrit|journey|story|patient/, "senior man smiling portrait"],
  [/month|awareness|welcome|myth|debunk|question|should-i|should-you/, "senior couple audiologist office"],
  [/vertigo|balance|dizz|vestibular/, "senior balance physical therapy"],
  [/over-the-counter|otc|hearing-aids-for|best-hearing|profound/, "hearing aids display fitting"],
  [/listen|communicat|conversation|social/, "seniors talking together outdoors"],
  [/menieres?|tmj|jaw|ear-pain/, "senior ear pain doctor visit"],
  [/when-to-see|seek-help|when-to|see-doctor|referral/, "senior doctor appointment consultation"],
  [/what-to-expect|why-choose|choose-us|about|success-stor|support-group|habituation/, "friendly audiology clinic welcoming patient"],
  [/sleep/, "senior resting peaceful bedroom"],
  [/captel|caption/, "senior using telephone at home"],
  [/real-ear|measurement|word-recognition|wrs|fitting/, "audiologist fitting hearing aid patient"],
  [/hawkeye|marvel|celebrity/, "modern hearing aid closeup"],
];
function queryFor(slug, kicker) {
  if (HINTS[slug]) return HINTS[slug];
  for (const [re, q] of CONCEPTS) if (re.test(slug)) return q;
  const words = slug.split("-").filter((w) => !STOP.has(w) && w.length > 2);
  const q = words.slice(0, 4).join(" ");
  return q || "audiologist hearing care senior";
}
function slugOf(p) { return p.replace(/\/$/, "").split("/").pop(); }
function flat(p) { return p.replace(/^\/|\/$/g, "").replace(/\//g, "-"); } // hyphen, not "__": see IMAGE-NAMING.md

const plan = [
  ...blogTargets.map((f) => ({ kind: "blog", path: f.p, slug: slugOf(f.p), flat: flat(f.p), query: queryFor(slugOf(f.p), f.kicker) })),
  ...coreTargets.map((f) => ({ kind: "core", path: f.p, slug: slugOf(f.p), flat: flat(f.p), query: queryFor(slugOf(f.p), f.kicker) })),
];
writeFileSync("/tmp/ov_plan.json", JSON.stringify(plan, null, 2));
console.log(`Targets: ${blogTargets.length} blog + ${coreTargets.length} core = ${plan.length}`);
if (MODE === "plan") {
  for (const e of plan) console.log(`  [${e.kind}] ${e.slug}  ->  "${e.query}"`);
  process.exit(0);
}

// ---- 3. Download from Pexels --------------------------------------------
const KEY = process.env.PEXELS_API_KEY;
if (!KEY) { console.error("\nERROR: set PEXELS_API_KEY (free at https://www.pexels.com/api/) then re-run."); process.exit(1); }
const OUT_BLOG = join(ROOT, "public/assets/blog-photos");
const OUT_CORE = join(ROOT, "public/assets/core-photos");
mkdirSync(OUT_BLOG, { recursive: true });
mkdirSync(OUT_CORE, { recursive: true });

const usedIds = new Set();
const results = { blog: {}, core: {} };

async function pexelsSearch(query) {
  // landscape orientation, request several so we can skip already-used photos
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=landscape&per_page=15`;
  try {
    const r = await fetch(url, { headers: { Authorization: KEY }, signal: AbortSignal.timeout(25000) });
    if (r.status === 429) { console.log("  RATE-LIMIT: sleeping"); await new Promise((s) => setTimeout(s, 3000)); return pexelsSearch(query); }
    if (!r.ok) return [];
    const j = await r.json();
    return j.photos || [];
  } catch { return []; }
}
async function download(u, dest) {
  try {
    const r = await fetch(u, { signal: AbortSignal.timeout(30000) });
    if (!r.ok) return false;
    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.length < 4000) return false;
    writeFileSync(dest, buf);
    return true;
  } catch { return false; }
}

let ok = 0, miss = 0;
for (const e of plan) {
  let hits = await pexelsSearch(e.query);
  let picked = hits.find((h) => !usedIds.has(h.id));
  if (!picked) { // broaden to the domain if the specific query is exhausted/empty
    hits = await pexelsSearch("audiologist hearing care senior patient");
    picked = hits.find((h) => !usedIds.has(h.id));
  }
  if (!picked) { miss++; console.log(`  MISS  ${e.slug}`); continue; }
  usedIds.add(picked.id);
  // Pexels "large" (~940w) is ideal for a card/hero without being huge.
  const src = picked.src.large || picked.src.medium || picked.src.original;
  const outDir = e.kind === "blog" ? OUT_BLOG : OUT_CORE;
  const fname = `${e.flat}.jpg`;
  const dest = join(outDir, fname);
  const good = await download(src, dest);
  if (!good) { miss++; console.log(`  DLFAIL ${e.slug}`); continue; }
  results[e.kind][e.path] = `/assets/${e.kind === "blog" ? "blog-photos" : "core-photos"}/${fname}`;
  ok++;
  console.log(`  OK    ${e.slug}  <-  "${e.query}"  by ${picked.photographer}`);
}

// ---- 4. Merge into data files (append, don't clobber existing) -----------
function mergeData(file, varName, comment, add) {
  const existing = {};
  const t = readFileSync(join(ROOT, file), "utf8");
  for (const m of t.matchAll(/"(\/[^"]+\/)":\s*"([^"]+)"/g)) existing[m[1]] = m[2];
  Object.assign(existing, add);
  const body = Object.keys(existing).sort().map((k) => `  "${k}": ${JSON.stringify(existing[k])},`).join("\n");
  writeFileSync(join(ROOT, file), `${comment}\nexport const ${varName}: Record<string, string> = {\n${body}\n};\n`);
}
mergeData("app/data/blogPhotos.ts", "blogPhotos",
  "// AUTO-GENERATED. calhearing og:images + Westchester library + Pexels (commercial, no attribution).", results.blog);
mergeData("app/data/corePhotos.ts", "corePhotos",
  "// AUTO-GENERATED. Westchester library + calhearing + Pexels (commercial, no attribution).", results.core);

console.log(`\nDONE  ok=${ok}  miss=${miss}  (Pexels license = commercial use, no attribution required)`);
