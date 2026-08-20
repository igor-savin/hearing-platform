#!/usr/bin/env node
// Derives a per-page date registry from git history and writes lib/contentDates.ts.
//
// Why this exists
// ---------------
// Page dates used to be group-level constants: every one of the 25 service
// pages carried "2026-07-07", every product page "2026-06-07", and so on.
// Editing one page could not change its own date, so `dateModified` in the
// JSON-LD and `lastmod` in the sitemap said the same thing about pages that
// had genuinely diverged. Crawlers read those dates; publishing a date that
// cannot move is worse than publishing none.
//
// Rather than hand-maintaining a date on every item across nine content
// modules, this script reads the truth that already exists — git — and
// generates a registry keyed by page. `lib/site.ts` applies it to every page
// in one place.
//
// How it works
// ------------
// For each content module, a page's block is the source text between its own
// marker (`path:` or `slug:`) and the next marker. Walking only the commits
// that touched that file, we hash each block per commit:
//
//   published = first commit in which the block appears
//   modified  = last commit in which the block's hash changed
//
// A block whose hash never changed after it was added reports published ===
// modified, which is accurate: it has not been edited since.
//
// Caveats, stated plainly
// -----------------------
// - Reformatting a block (prettier, a rename) counts as a modification. That
//   is a small overstatement of freshness and is preferred to missing a real
//   edit.
// - Pages carried over from the pre-2026-05 Duda site are older than this
//   repository. Their true publication dates are not in git, so the script
//   emits no `published` for them rather than claiming the repo's first
//   commit. `lastModifiedByPath` in lib/site.ts still holds their real
//   crawled modification dates.
// - Keys are page paths where a module stores them, and slugs otherwise.
//   Duplicate keys are reported and skipped rather than silently resolved.
//
// Usage:  node scripts/refresh-content-dates.mjs [--check]
//         --check exits non-zero if the committed file is out of date.

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const OUTPUT = "lib/contentDates.ts";

// Each source names the file to walk and the marker that opens a page block.
// `key: "path"` modules already store the final URL path; `key: "slug"`
// modules store a segment, which lib/site.ts resolves against the last
// segment of each page path.
const SOURCES = [
  { file: "lib/blogSeed.ts", key: "path" },
  { file: "lib/blogNext.ts", key: "path" },
  { file: "lib/conversion.ts", key: "path" },
  { file: "lib/hearingLoss.ts", key: "slug" },
  { file: "lib/howWeCanHelp.ts", key: "slug" },
  { file: "lib/tinnitus.ts", key: "slug" },
  { file: "lib/products.ts", key: "slug" },
  { file: "lib/serviceAreas.ts", key: "slug" },
  { file: "lib/team.ts", key: "slug" },
  { file: "lib/reviews.ts", key: "path" }
];

function git(args) {
  return execFileSync("git", args, { encoding: "utf8", maxBuffer: 256 * 1024 * 1024 });
}

// Commits that touched this file, oldest first.
function commitsFor(file) {
  const out = git(["log", "--reverse", "--format=%H%x00%aI", "--", file]).trim();
  if (!out) return [];
  return out.split("\n").map((line) => {
    const [hash, iso] = line.split("\0");
    return { hash, date: iso.slice(0, 10) };
  });
}

function fileAtCommit(commit, file) {
  try {
    return git(["show", `${commit}:${file}`]);
  } catch {
    return null; // File did not exist in that commit.
  }
}

// Split a module into one block per page. A block runs from its own marker to
// the next one, which is a rough boundary but a stable one: any edit to a
// page's title, body, FAQs, or metadata lands inside its own block.
function blocksFor(text, key) {
  const marker = new RegExp(`"?${key}"?\\s*:\\s*"([^"]+)"`, "g");
  const hits = [];
  let match;
  while ((match = marker.exec(text))) hits.push({ value: match[1], start: match.index });
  return hits.map((hit, index) => ({
    key: hit.value,
    body: text.slice(hit.start, index + 1 < hits.length ? hits[index + 1].start : text.length)
  }));
}

const hash = (value) => createHash("sha1").update(value).digest("hex");

function collect() {
  const dates = new Map(); // key -> { published, modified }
  const seenIn = new Map(); // key -> file, for duplicate detection
  const duplicates = [];

  for (const source of SOURCES) {
    const commits = commitsFor(source.file);
    if (!commits.length) {
      console.warn(`  ! ${source.file}: no history, skipped`);
      continue;
    }

    const previous = new Map(); // key -> last seen hash
    let found = 0;

    for (const commit of commits) {
      const text = fileAtCommit(commit.hash, source.file);
      if (text === null) continue;

      for (const block of blocksFor(text, source.key)) {
        const digest = hash(block.body);
        const before = previous.get(block.key);
        if (before === digest) continue;
        previous.set(block.key, digest);

        const existing = dates.get(block.key);
        if (!existing) {
          const owner = seenIn.get(block.key);
          if (owner && owner !== source.file) {
            duplicates.push(`${block.key} (${owner} and ${source.file})`);
            continue;
          }
          seenIn.set(block.key, source.file);
          dates.set(block.key, { published: commit.date, modified: commit.date });
          found += 1;
        } else {
          existing.modified = commit.date;
        }
      }
    }

    console.log(`  ${source.file}: ${found} pages across ${commits.length} commits`);
  }

  return { dates, duplicates };
}

function render(dates) {
  const keys = [...dates.keys()].sort();
  const rows = keys
    .map((key) => {
      const { published, modified } = dates.get(key);
      return `  ${JSON.stringify(key)}: { published: ${JSON.stringify(published)}, modified: ${JSON.stringify(modified)} }`;
    })
    .join(",\n");

  return `// GENERATED FILE — do not edit by hand.
// Run \`npm run dates\` (scripts/refresh-content-dates.mjs) to regenerate.
//
// Per-page publication and modification dates derived from git history. See the
// script's header for how the dates are established and where they are known to
// be approximate. lib/site.ts applies these to every page, replacing the
// group-level date constants each content module used to share.

export type ContentDate = {
  // Absent for pages carried over from the pre-2026 site, whose true first
  // publication predates this repository and is therefore not knowable here.
  published?: string;
  modified: string;
};

export const contentDates: Record<string, ContentDate> = {
${rows}
};

// Pages are keyed by URL path in some modules and by slug in others. Try the
// full path first, then the last segment.
export function contentDateFor(path: string): ContentDate | undefined {
  const direct = contentDates[path];
  if (direct) return direct;
  const segment = path.split("/").filter(Boolean).pop();
  return segment ? contentDates[segment] : undefined;
}
`;
}

const checkOnly = process.argv.includes("--check");

console.log("Reading page dates from git history…");
const { dates, duplicates } = collect();

if (duplicates.length) {
  console.warn(`\n! ${duplicates.length} ambiguous key(s) skipped — resolve before trusting their dates:`);
  for (const entry of duplicates) console.warn(`    ${entry}`);
}

const output = render(dates);
const target = resolve(process.cwd(), OUTPUT);

if (checkOnly) {
  let current = "";
  try {
    current = readFileSync(target, "utf8");
  } catch {
    /* not yet generated */
  }
  if (current !== output) {
    console.error(`\n${OUTPUT} is out of date. Run: npm run dates`);
    process.exit(1);
  }
  console.log(`\n${OUTPUT} is current (${dates.size} pages).`);
} else {
  writeFileSync(target, output);
  console.log(`\nWrote ${OUTPUT} — ${dates.size} pages.`);
}
