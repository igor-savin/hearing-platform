// Harvest UNIQUE, commercial-usable photos from the Openverse API (keyless) for
// every blog + core page still rendering an SVG placeholder. Prefers CC0/PDM
// (no attribution) and falls back to CC-BY (attribution recorded in credits).
//
// Usage:
//   node _migration/harvestOpenverse.mjs plan   -> writes /tmp/ov_plan.json (targets + queries), no downloads
//   node _migration/harvestOpenverse.mjs run     -> downloads photos, writes data files + credits
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
function queryFor(slug, kicker) {
  if (HINTS[slug]) return HINTS[slug];
  const words = slug.split("-").filter((w) => !STOP.has(w) && w.length > 2);
  // pick up to 4 distinctive words; bias toward domain nouns
  const q = words.slice(0, 4).join(" ");
  return q || (kicker || "audiology hearing care");
}
function slugOf(p) { return p.replace(/\/$/, "").split("/").pop(); }
function flat(p) { return p.replace(/^\/|\/$/g, "").replace(/\//g, "__"); }

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

// ---- 3. Download from Openverse -----------------------------------------
const OUT_BLOG = join(ROOT, "public/assets/blog-photos");
const OUT_CORE = join(ROOT, "public/assets/core-photos");
mkdirSync(OUT_BLOG, { recursive: true });
mkdirSync(OUT_CORE, { recursive: true });

const usedIds = new Set();
const credits = [];
const results = { blog: {}, core: {} };

async function ovSearch(query, licenses) {
  const url = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(query)}` +
    `&license=${licenses}&mature=false&size=medium&aspect_ratio=wide&page_size=20`;
  try {
    const r = await fetch(url, { headers: { "User-Agent": "CHC-site-image-harvester/1.0" }, signal: AbortSignal.timeout(25000) });
    if (!r.ok) return [];
    const j = await r.json();
    return j.results || [];
  } catch { return []; }
}
async function download(u, dest) {
  try {
    const r = await fetch(u, { headers: { "User-Agent": "CHC-site-image-harvester/1.0" }, signal: AbortSignal.timeout(30000) });
    if (!r.ok) return false;
    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.length < 4000) return false; // skip tiny/broken
    writeFileSync(dest, buf);
    return true;
  } catch { return false; }
}

let ok = 0, miss = 0;
for (const e of plan) {
  // Prefer no-attribution licenses; widen if nothing usable/unique found.
  let picked = null;
  for (const lic of ["cc0,pdm", "cc0,pdm,by", "cc0,pdm,by,by-sa"]) {
    const hits = await ovSearch(e.query, lic);
    picked = hits.find((h) => h.url && !usedIds.has(h.id));
    if (picked) break;
  }
  if (!picked) {
    // last resort: broaden the query to the domain
    const hits = await ovSearch("hearing audiology ear doctor senior", "cc0,pdm,by");
    picked = hits.find((h) => h.url && !usedIds.has(h.id));
  }
  if (!picked) { miss++; console.log(`  MISS  ${e.slug}`); continue; }
  usedIds.add(picked.id);
  const ext = (picked.url.match(/\.(jpe?g|png|webp)(\?|$)/i)?.[1] || "jpg").toLowerCase().replace("jpeg", "jpg");
  const outDir = e.kind === "blog" ? OUT_BLOG : OUT_CORE;
  const fname = `${e.flat}.${ext}`;
  const dest = join(outDir, fname);
  const good = await download(picked.url, dest);
  if (!good) { miss++; console.log(`  DLFAIL ${e.slug}`); continue; }
  const publicPath = `/assets/${e.kind === "blog" ? "blog-photos" : "core-photos"}/${fname}`;
  results[e.kind][e.path] = publicPath;
  const lic = (picked.license || "").toLowerCase();
  if (!["cc0", "pdm"].includes(lic)) {
    credits.push({ path: e.path, title: picked.title, creator: picked.creator, license: picked.license, license_version: picked.license_version, source: picked.foreign_landing_url || picked.url });
  }
  ok++;
  console.log(`  OK    ${e.slug}  [${picked.license}]  ${picked.title?.slice(0, 40) || ""}`);
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
  "// AUTO-GENERATED. calhearing og:images + Westchester library + Openverse (keyless CC).", results.blog);
mergeData("app/data/corePhotos.ts", "corePhotos",
  "// AUTO-GENERATED. Westchester library + calhearing + Openverse (keyless CC).", results.core);

writeFileSync(join(ROOT, "app/data/imageCredits.ts"),
  "// AUTO-GENERATED. Attribution for CC-BY / by-sa images sourced via Openverse.\n" +
  "export type ImageCredit = { path: string; title: string; creator: string; license: string; license_version: string; source: string };\n" +
  `export const imageCredits: ImageCredit[] = ${JSON.stringify(credits, null, 2)};\n`);

console.log(`\nDONE  ok=${ok}  miss=${miss}  attribution-required=${credits.length}`);
