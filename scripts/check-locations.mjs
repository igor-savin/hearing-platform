// Fails when office facts typed into prose drift from app/data/locations.ts.
// Run: node --experimental-strip-types scripts/check-locations.mjs
import { readFileSync } from "node:fs";
import { LOCATION_LIST } from "../app/data/locations.ts";

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), "utf8");
const prose = {
  corePages: read("app/data/corePages.ts"),
  llms: read("app/llms.txt/route.ts"),
  notFound: read("app/not-found.tsx"),
};
const problems = [];
for (const loc of LOCATION_LIST) {
  for (const [name, text] of Object.entries(prose)) {
    if (!text.includes(loc.street)) problems.push(`${name}: missing street "${loc.street}"`);
  }
  // corePages states hours as "Monday through Thursday 9am to 5pm, and Friday …".
  for (const g of loc.hours) {
    const first = g.intervals[0];
    const h = (t) => { const [H, M] = t.split(":").map(Number); const h12 = H % 12 || 12; return `${h12}${M ? ":" + String(M).padStart(2, "0") : ""}${H >= 12 ? "pm" : "am"}`; };
    const needle = `${h(first.opens)} to ${h(first.closes)}`;
    if (!prose.corePages.includes(needle)) problems.push(`corePages: ${loc.name} hours "${needle}" not found`);
  }
}
if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
console.log(`locations: prose matches ${LOCATION_LIST.length} office records`);
