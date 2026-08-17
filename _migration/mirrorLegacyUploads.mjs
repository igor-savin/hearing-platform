#!/usr/bin/env node
/**
 * Mirror the legacy WordPress media library into public/wp-content/uploads/
 *
 * Why: after the calhearing.com DNS cutover, every /wp-content/uploads/... URL
 * would 404. Those URLs carry Google Images equity and are hot-linked from
 * external sites. Mirroring keeps them resolving.
 *
 * Rules:
 *   - The URL path, filename and extension are preserved EXACTLY. That is the
 *     entire point; a "better" filename defeats the purpose.
 *   - The format is preserved (png stays png). Only the bytes shrink.
 *   - Longest edge capped at MAX_EDGE. Legacy never displayed above ~1200px.
 *   - Files already under SKIP_BYTES are copied untouched — re-encoding a small
 *     image usually makes it bigger.
 *   - GIF (may be animated) and PDF are always copied untouched.
 *
 * Usage: node _migration/mirrorLegacyUploads.mjs <stage-dir>
 */

import { readdirSync, statSync, mkdirSync, copyFileSync, writeFileSync } from "node:fs";
import { join, dirname, extname, relative } from "node:path";
import sharp from "sharp";

const STAGE = process.argv[2];
if (!STAGE) {
  console.error("usage: node _migration/mirrorLegacyUploads.mjs <stage-dir>");
  process.exit(1);
}
const OUT = "public/wp-content/uploads";
const MAX_EDGE = 1600;
const SKIP_BYTES = 100 * 1024;

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

// The staged tree is <stage>/wp-content/uploads/<year>/<month>/<file>
const root = join(STAGE, "wp-content", "uploads");
const files = walk(root);

let inBytes = 0;
let outBytes = 0;
const manifest = [];

for (const src of files) {
  const rel = relative(root, src);
  const dest = join(OUT, rel);
  mkdirSync(dirname(dest), { recursive: true });

  const size = statSync(src).size;
  inBytes += size;
  const ext = extname(src).toLowerCase();

  const passthrough = ext === ".gif" || ext === ".pdf" || size < SKIP_BYTES;
  if (passthrough) {
    copyFileSync(src, dest);
    outBytes += size;
    manifest.push({ rel, from: size, to: size, action: "copy" });
    continue;
  }

  try {
    let img = sharp(src, { failOn: "none" });
    const meta = await img.metadata();
    if (Math.max(meta.width || 0, meta.height || 0) > MAX_EDGE) {
      img = img.resize({
        width: MAX_EDGE,
        height: MAX_EDGE,
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    let buf;
    if (ext === ".png") {
      // Photographic PNGs (most of these are AI-generated art) shrink hugely
      // with palette quantisation. Take whichever encoding is smaller, but
      // never accept a result larger than the source.
      const [pal, plain] = await Promise.all([
        img.clone().png({ palette: true, quality: 90, effort: 10 }).toBuffer(),
        img.clone().png({ compressionLevel: 9, effort: 10 }).toBuffer(),
      ]);
      buf = pal.length <= plain.length ? pal : plain;
    } else if (ext === ".webp") {
      buf = await img.webp({ quality: 82, effort: 6 }).toBuffer();
    } else {
      buf = await img.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    }

    if (buf.length >= size) {
      copyFileSync(src, dest);
      outBytes += size;
      manifest.push({ rel, from: size, to: size, action: "copy (re-encode was larger)" });
    } else {
      writeFileSync(dest, buf);
      outBytes += buf.length;
      manifest.push({ rel, from: size, to: buf.length, action: "re-encode" });
    }
  } catch (err) {
    copyFileSync(src, dest);
    outBytes += size;
    manifest.push({ rel, from: size, to: size, action: `copy (${err.message.slice(0, 40)})` });
  }
}

writeFileSync(
  "_migration/uploads-mirror-manifest.json",
  JSON.stringify({ count: manifest.length, inBytes, outBytes, files: manifest }, null, 2)
);

const mb = (b) => (b / 1048576).toFixed(1);
console.log(`files:  ${manifest.length}`);
console.log(`before: ${mb(inBytes)} MB`);
console.log(`after:  ${mb(outBytes)} MB  (${((1 - outBytes / inBytes) * 100).toFixed(1)}% smaller)`);
