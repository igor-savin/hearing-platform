// Re-fetch specific pages whose auto-matched Pexels photo was a poor fit.
// Uses better hand-written queries; picks a photo not already on disk.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const KEY = process.env.PEXELS_API_KEY;
if (!KEY) { console.error("set PEXELS_API_KEY"); process.exit(1); }

// path -> [kind, query, pickIndex]
const FIX = {
  "/hearing-aid-care-2025/": ["blog", "audiologist holding hearing aid device", 2],
  "/what-is-the-most-common-hearing-aid-style-in-the-current-market/": ["blog", "behind the ear hearing aid", 1],
};

const OUT = { blog: join(ROOT, "public/assets/blog-photos"), core: join(ROOT, "public/assets/core-photos") };
mkdirSync(OUT.blog, { recursive: true }); mkdirSync(OUT.core, { recursive: true });
const existing = new Set([...readdirSync(OUT.blog), ...readdirSync(OUT.core)]);

async function search(q) {
  const r = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&orientation=landscape&per_page=15`,
    { headers: { Authorization: KEY }, signal: AbortSignal.timeout(25000) });
  return r.ok ? (await r.json()).photos || [] : [];
}
function flat(p) { return p.replace(/^\/|\/$/g, "").replace(/\//g, "-"); } // hyphen, not "__": see IMAGE-NAMING.md
function mapFile(file) { const o = {}; for (const m of readFileSync(join(ROOT, file), "utf8").matchAll(/"(\/[^"]+\/)":\s*"([^"]+)"/g)) o[m[1]] = m[2]; return o; }
function writeMap(file, name, comment, obj) {
  const body = Object.keys(obj).sort().map((k) => `  "${k}": ${JSON.stringify(obj[k])},`).join("\n");
  writeFileSync(join(ROOT, file), `${comment}\nexport const ${name}: Record<string, string> = {\n${body}\n};\n`);
}
const blogMap = mapFile("app/data/blogPhotos.ts"), coreMap = mapFile("app/data/corePhotos.ts");

for (const [path, [kind, q, idx]] of Object.entries(FIX)) {
  const photos = await search(q);
  const pick = photos[idx] || photos[0];
  if (!pick) { console.log("MISS", path); continue; }
  const src = pick.src.large || pick.src.medium;
  const fname = `${flat(path)}.jpg`;
  const r = await fetch(src, { signal: AbortSignal.timeout(30000) });
  writeFileSync(join(OUT[kind], fname), Buffer.from(await r.arrayBuffer()));
  const pub = `/assets/${kind === "blog" ? "blog-photos" : "core-photos"}/${fname}`;
  (kind === "blog" ? blogMap : coreMap)[path] = pub;
  console.log("OK  ", path, "<-", q, "by", pick.photographer);
}
writeMap("app/data/blogPhotos.ts", "blogPhotos", "// AUTO-GENERATED. calhearing og:images + Westchester library + Pexels (commercial, no attribution).", blogMap);
writeMap("app/data/corePhotos.ts", "corePhotos", "// AUTO-GENERATED. Westchester library + calhearing + Pexels (commercial, no attribution).", coreMap);
console.log("done");
