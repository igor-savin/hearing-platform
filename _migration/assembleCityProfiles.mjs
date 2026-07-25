// Assemble app/data/cityProfiles.ts from per-city fragments in
// _migration/city-entries/*.txt (each = a keyed CityProfile object literal).
// Header (types + OFFICES) comes from _migration/cityProfiles.header.txt.
//
// Usage: node _migration/assembleCityProfiles.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ENTRIES = join(ROOT, "_migration/city-entries");
const header = readFileSync(join(ROOT, "_migration/cityProfiles.header.txt"), "utf8").replace(/\s+$/, "");

// Deterministic order: pilot/Peninsula-core first-ish is nice but not required;
// sort alphabetically for stable diffs.
const files = readdirSync(ENTRIES).filter((f) => f.endsWith(".txt")).sort();
const blocks = files.map((f) => {
  let b = readFileSync(join(ENTRIES, f), "utf8").replace(/\s+$/, "");
  // normalize entities and ensure it ends with a comma
  b = b.replace(/&amp;/g, "&");
  if (!b.endsWith(",")) b += ",";
  // ensure 2-space indentation on the opening key line
  b = b.replace(/^\s*"/, '  "');
  return b;
});

const out =
  header +
  "\nexport const cityProfiles: Record<string, CityProfile> = {\n" +
  blocks.join("\n") +
  "\n};\n\nexport const cityProfileSlugs = Object.keys(cityProfiles);\n";

writeFileSync(join(ROOT, "app/data/cityProfiles.ts"), out);
console.log(`Assembled cityProfiles.ts from ${files.length} fragments.`);
