// Generate app/data/imageDimensions.ts — the intrinsic pixel size of every
// image in public/, keyed by the URL path the site references it by.
//
// WHY: every <img> the site renders needs width and height attributes, or the
// browser reserves no space for it and the page shifts as images arrive. In
// June 2026 that put 61 mobile URLs into Search Console's "poor CLS" bucket at
// 0.30. Rather than hand-maintain dimensions in the markup, SiteImage looks
// them up here.
//
// Usage: node _migration/genImageDimensions.mjs
// Re-run whenever files are added to public/.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative, sep } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(ROOT, "public");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

// Header parsers. Deliberately dependency-free: this runs in CI and on a
// laptop, and an image-size package is not worth a supply-chain surface.
function pngSize(b) {
  if (b.length < 24 || b.readUInt32BE(0) !== 0x89504e47) return null;
  return [b.readUInt32BE(16), b.readUInt32BE(20)];
}
function gifSize(b) {
  if (b.length < 10 || b.toString("ascii", 0, 3) !== "GIF") return null;
  return [b.readUInt16LE(6), b.readUInt16LE(8)];
}
// EXIF orientation, because the SOF header is not the whole story. Orientations
// 5 to 8 rotate by 90 degrees, and the image optimizer auto-rotates while a raw
// header read does not. Recording W x H for an image that will be served H x W
// reserves a transposed box that resizes the moment the file arrives — which is
// precisely the layout shift this manifest exists to prevent. No JPEG in
// public/ is currently rotated (checked 294 of them on 25 Aug 2026); this is
// here so that the first phone photo somebody drops in does not reintroduce it.
function jpegOrientation(b) {
  let i = 2;
  while (i < b.length - 4) {
    if (b[i] !== 0xff) { i++; continue; }
    const marker = b[i + 1];
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) { i += 2; continue; }
    const len = b.readUInt16BE(i + 2);
    if (marker === 0xe1 && b.toString("ascii", i + 4, i + 10) === "Exif\0\0") {
      const tiff = i + 10;
      const le = b.toString("ascii", tiff, tiff + 2) === "II";
      const u16 = (o) => (le ? b.readUInt16LE(o) : b.readUInt16BE(o));
      const u32 = (o) => (le ? b.readUInt32LE(o) : b.readUInt32BE(o));
      const ifd = tiff + u32(tiff + 4);
      const count = u16(ifd);
      for (let e = 0; e < count; e++) {
        const entry = ifd + 2 + e * 12;
        if (u16(entry) === 0x0112) return u16(entry + 8);
      }
      return null;
    }
    if (marker === 0xda) return null; // start of scan: no EXIF before the image data
    i += 2 + len;
  }
  return null;
}

function jpegSize(b) {
  if (b.length < 4 || b[0] !== 0xff || b[1] !== 0xd8) return null;
  let i = 2;
  while (i < b.length - 9) {
    if (b[i] !== 0xff) { i++; continue; }
    const marker = b[i + 1];
    // SOF0..SOF15, skipping the four that are not frame headers.
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      const size = [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      const orientation = jpegOrientation(b);
      return orientation >= 5 && orientation <= 8 ? [size[1], size[0]] : size;
    }
    i += 2 + b.readUInt16BE(i + 2);
  }
  return null;
}
function webpSize(b) {
  if (b.length < 30 || b.toString("ascii", 0, 4) !== "RIFF" || b.toString("ascii", 8, 12) !== "WEBP") return null;
  const fmt = b.toString("ascii", 12, 16);
  if (fmt === "VP8 ") return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
  if (fmt === "VP8L") {
    const bits = b.readUInt32LE(21);
    return [(bits & 0x3fff) + 1, ((bits >> 14) & 0x3fff) + 1];
  }
  if (fmt === "VP8X") return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
  return null;
}
function avifSize(b) {
  // ispe box carries the canvas size; scan for it rather than parse the tree.
  const i = b.indexOf("ispe");
  if (i < 0 || i + 16 > b.length) return null;
  return [b.readUInt32BE(i + 8), b.readUInt32BE(i + 12)];
}
function svgSize(text) {
  const w = /\bwidth="([\d.]+)(?:px)?"/.exec(text);
  const h = /\bheight="([\d.]+)(?:px)?"/.exec(text);
  if (w && h) return [Math.round(+w[1]), Math.round(+h[1])];
  const vb = /viewBox="[-\d.]+[ ,]+[-\d.]+[ ,]+([\d.]+)[ ,]+([\d.]+)"/.exec(text);
  return vb ? [Math.round(+vb[1]), Math.round(+vb[2])] : null;
}

const dims = {};
const skipped = [];
for (const file of walk(PUBLIC)) {
  const url = "/" + relative(PUBLIC, file).split(sep).join("/");
  const ext = file.split(".").pop().toLowerCase();
  let size = null;
  try {
    if (ext === "svg") size = svgSize(readFileSync(file, "utf8").slice(0, 6000));
    else if (["png", "jpg", "jpeg", "webp", "gif", "avif"].includes(ext)) {
      const b = readFileSync(file);
      size = pngSize(b) || jpegSize(b) || webpSize(b) || gifSize(b) || avifSize(b);
    } else continue;
  } catch { /* fall through to skipped */ }
  if (size && size[0] > 0 && size[1] > 0) dims[url] = size;
  else skipped.push(url);
}

const keys = Object.keys(dims).sort();
const body = keys.map((k) => `  ${JSON.stringify(k)}: [${dims[k][0]}, ${dims[k][1]}],`).join("\n");
writeFileSync(
  join(ROOT, "app/data/imageDimensions.ts"),
  `// AUTO-GENERATED by _migration/genImageDimensions.mjs. Do not edit by hand.\n` +
  `// Intrinsic pixel size of every image in public/, keyed by its URL path.\n` +
  `// SiteImage reads this so no <img> ever ships without width and height.\n` +
  `// Re-run the generator after adding files to public/.\n\n` +
  `export const imageDimensions: Record<string, readonly [number, number]> = {\n${body}\n};\n`
);
console.log(`imageDimensions.ts: ${keys.length} images${skipped.length ? `, ${skipped.length} unreadable` : ""}`);
if (skipped.length) console.log(skipped.slice(0, 20).join("\n"));
