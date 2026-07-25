// Topical hero SVGs for enriched core pages (tinnitus/service/facility/resource)
// that would otherwise share /assets/hero.webp. Reads _migration/core-entries/*.txt,
// and for any fragment whose image is "/assets/hero.webp": picks an icon by topic,
// writes public/assets/core/{flat}.svg, and rewrites the fragment's image field.
// Product pages (brand images) are left untouched. Re-run assembler afterward.
//
// Usage: node _migration/genCoreImages.mjs && node _migration/assembleCorePages.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ENTRIES = join(ROOT, "_migration/core-entries");
const OUT = join(ROOT, "public/assets/core");
mkdirSync(OUT, { recursive: true });

const C = { teal: "#155f6b", tealDark: "#105966", aqua: "#86d0d5", gold: "#e0ae3c", orange: "#f05a28", ink: "#21424b", cream: "#fbf7ef", paper: "#ffffff" };
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const ICONS = {
  ear: (c) => `<path d="M35 78 C22 70 22 40 42 30 C62 20 82 34 76 54 C72 66 60 62 60 74 C60 84 50 88 43 84" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/><circle cx="49" cy="47" r="7" fill="none" stroke="${c}" stroke-width="6"/>`,
  brain: (c) => `<path d="M40 30 C25 30 22 48 30 52 C22 60 30 74 42 70 M60 30 C75 30 78 48 70 52 C78 60 70 74 58 70 M50 26 V74" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/>`,
  soundwave: (c) => `<g stroke="${c}" stroke-width="7" stroke-linecap="round" fill="none"><path d="M30 40 V60"/><path d="M44 28 V72"/><path d="M58 36 V64"/><path d="M72 24 V76"/></g>`,
  mutedSound: (c) => `<path d="M40 42 A16 16 0 0 1 40 74" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/><path d="M52 34 A30 30 0 0 1 52 82" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/><line x1="26" y1="80" x2="70" y2="30" stroke="${C.orange}" stroke-width="7" stroke-linecap="round"/>`,
  shield: (c) => `<path d="M50 24 L74 34 V54 C74 68 62 76 50 80 C38 76 26 68 26 54 V34 Z" fill="none" stroke="${c}" stroke-width="6" stroke-linejoin="round"/><path d="M40 52 L48 60 L64 42" fill="none" stroke="${C.gold}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
  people: (c) => `<circle cx="38" cy="38" r="9" fill="none" stroke="${c}" stroke-width="5"/><path d="M24 74 C24 58 52 58 52 74" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/><circle cx="66" cy="40" r="8" fill="none" stroke="${C.aqua}" stroke-width="5"/><path d="M56 74 C56 60 78 60 78 72" fill="none" stroke="${C.aqua}" stroke-width="5" stroke-linecap="round"/>`,
  calendar: (c) => `<rect x="26" y="30" width="48" height="46" rx="6" fill="none" stroke="${c}" stroke-width="6"/><line x1="26" y1="44" x2="74" y2="44" stroke="${c}" stroke-width="6"/><path d="M40 58 L47 65 L60 52" fill="none" stroke="${C.gold}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
  hearingaid: (c) => `<path d="M40 34 C58 30 70 44 66 60 C63 72 52 72 50 80" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/><circle cx="42" cy="46" r="8" fill="none" stroke="${c}" stroke-width="6"/><g stroke="${C.aqua}" stroke-width="4" fill="none"><path d="M70 40 a10 10 0 0 1 6 12"/></g>`,
  moon: (c) => `<path d="M62 30 A26 26 0 1 0 62 78 A20 20 0 0 1 62 30 Z" fill="none" stroke="${c}" stroke-width="6" stroke-linejoin="round"/>`,
  pin: (c) => `<path d="M50 26 C38 26 30 35 30 47 C30 62 50 82 50 82 C50 82 70 62 70 47 C70 35 62 26 50 26 Z" fill="none" stroke="${c}" stroke-width="6" stroke-linejoin="round"/><circle cx="50" cy="47" r="8" fill="none" stroke="${c}" stroke-width="5"/>`,
  heart: (c) => `<path d="M50 76 C24 58 28 36 44 36 C50 36 50 42 50 44 C50 42 50 36 56 36 C72 36 76 58 50 76 Z" fill="none" stroke="${c}" stroke-width="6" stroke-linejoin="round"/>`,
};

function iconFor(path) {
  const p = path;
  if (/hearing-protection|musicians|hunting|law-enforcement/.test(p)) return "shield";
  if (/hearing-aid-repair/.test(p)) return "hearingaid";
  if (/earwax/.test(p)) return "ear";
  if (/insurance/.test(p)) return "shield";
  if (/hearingup/.test(p)) return "shield";
  if (/referral/.test(p)) return "people";
  if (/patients-journey/.test(p)) return "calendar";
  if (/senior-living|atria|sunrise|stratford|peninsula-regent/.test(p)) return "people";
  if (/hyperacusis/.test(p)) return "mutedSound";
  if (/(east-bay|peninsula|san-francisco|san-jose)-tinnitus/.test(p)) return "pin";
  if (/sleep/.test(p)) return "moon";
  if (/stress|anxiety|habituation|retraining|what-to-expect|getting-louder|can-tinnitus/.test(p)) return "brain";
  if (/menieres|one-ear|tmj|types-of/.test(p)) return "ear";
  if (/success-stories|why-choose-us|support-groups|diet-lifestyle/.test(p)) return "heart";
  if (/tinnitus/.test(p)) return "soundwave";
  return "ear";
}

function conceptHero(title, icon, accent) {
  const draw = (ICONS[icon] || ICONS.ear)(C.paper);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" role="img" aria-label="${esc(title)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.tealDark}"/></linearGradient>
    <clipPath id="card"><rect width="900" height="480" rx="26"/></clipPath>
  </defs>
  <g clip-path="url(#card)">
    <rect width="900" height="480" fill="url(#bg)"/>
    <circle cx="700" cy="150" r="230" fill="${C.paper}" opacity="0.05"/>
    <circle cx="740" cy="120" r="140" fill="${accent}" opacity="0.14"/>
    <g transform="translate(600 90) scale(2.4)">${draw}</g>
    <g stroke="${accent}" stroke-width="6" fill="none" opacity="0.5"><path d="M70 360 a40 40 0 0 1 0 -80"/><path d="M96 380 a70 70 0 0 1 0 -120"/></g>
    <text x="70" y="180" font-family="Georgia, 'Times New Roman', serif" font-size="46" font-weight="700" fill="${C.paper}" style="max-width:420px">${esc(title)}</text>
    <rect x="70" y="205" width="70" height="6" rx="3" fill="${accent}"/>
    <text x="70" y="250" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="19" fill="${C.aqua}" letter-spacing="1.2">CALIFORNIA HEARING CENTER</text>
  </g>
</svg>`;
}

const ACCENT = { shield: C.gold, people: C.aqua, brain: C.gold, ear: C.aqua, soundwave: C.gold, mutedSound: C.orange, hearingaid: C.aqua, calendar: C.gold, moon: C.aqua, pin: C.gold, heart: C.orange };

const files = readdirSync(ENTRIES).filter((f) => f.endsWith(".txt"));
let n = 0;
for (const f of files) {
  const fp = join(ENTRIES, f);
  let txt = readFileSync(fp, "utf8");
  if (!/image:\s*"\/assets\/hero\.webp"/.test(txt)) continue; // only generic-hero pages
  const path = (txt.match(/"(\/[^"]+)":\s*\{/) || [])[1] || "";
  const label = (txt.match(/imageLabel:\s*"([^"]+)"/) || [])[1] || (txt.match(/headline:\s*"([^"]+)"/) || [])[1] || "Hearing Care";
  const icon = iconFor(path);
  const flat = f.replace(/\.txt$/, "");
  const title = label.length > 42 ? label.slice(0, 40).replace(/\s+\S*$/, "") + "…" : label;
  writeFileSync(join(OUT, `${flat}.svg`), conceptHero(title, icon, ACCENT[icon] || C.gold));
  txt = txt.replace(/image:\s*"\/assets\/hero\.webp"/, `image: "/assets/core/${flat}.svg"`);
  writeFileSync(fp, txt);
  n++;
}
console.log(`Generated ${n} core hero SVGs and rewired their fragments.`);
