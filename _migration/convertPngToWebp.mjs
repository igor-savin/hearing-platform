// Convert the oversized PNG blog photos to WebP (~940px, q80), rewrite their
// blogPhotos.ts entries to the new extension, and delete the dormant hero PNG.
// Usage: node _migration/convertPngToWebp.mjs
import { readdirSync, readFileSync, writeFileSync, statSync, unlinkSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = join(ROOT, "public/assets/blog-photos");
const MAXW = 940;
const QUALITY = 80;

const pngs = readdirSync(DIR).filter((f) => f.endsWith(".png"));
if (!pngs.length) {
  console.log("No PNGs to convert.");
}

let before = 0;
let after = 0;
const renames = {}; // old public path -> new public path

for (const f of pngs) {
  const src = join(DIR, f);
  const webpName = f.replace(/\.png$/, ".webp");
  const dest = join(DIR, webpName);
  before += statSync(src).size;

  const img = sharp(src);
  const meta = await img.metadata();
  const pipeline = meta.width && meta.width > MAXW ? img.resize({ width: MAXW }) : img;
  await pipeline.webp({ quality: QUALITY }).toFile(dest);

  after += statSync(dest).size;
  unlinkSync(src);
  renames[`/assets/blog-photos/${f}`] = `/assets/blog-photos/${webpName}`;
  console.log(`  ${f}  ->  ${webpName}  (${(statSync(dest).size / 1024).toFixed(0)}KB)`);
}

// Rewrite blogPhotos.ts to point at the new .webp files.
const bpPath = join(ROOT, "app/data/blogPhotos.ts");
let bp = readFileSync(bpPath, "utf8");
let replaced = 0;
for (const [oldP, newP] of Object.entries(renames)) {
  if (bp.includes(`"${oldP}"`)) {
    bp = bp.split(`"${oldP}"`).join(`"${newP}"`);
    replaced++;
  }
}
writeFileSync(bpPath, bp);

// Delete the dormant, unreferenced 2.1MB hero PNG (CSS + data use .webp/.avif).
let heroDeleted = false;
try {
  unlinkSync(join(ROOT, "public/assets/hearing-journey-hero.png"));
  heroDeleted = true;
} catch {
  /* already gone */
}

console.log(`\nConverted ${pngs.length} PNGs; updated ${replaced} blogPhotos.ts entries.`);
console.log(`Blog PNGs: ${(before / 1e6).toFixed(1)}MB -> WebP: ${(after / 1e6).toFixed(1)}MB`);
console.log(`Dormant hero PNG deleted: ${heroDeleted}`);
