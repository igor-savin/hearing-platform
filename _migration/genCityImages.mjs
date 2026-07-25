// Per-city hero SVGs for /areas-we-serve/{city}. On-brand, no dependencies.
// Each city gets a scene chosen by its `motif` (coast, airport, bayside,
// downtown, estate, wine, transit, civic) so no two location pages share art.
// Source of truth is app/data/cityProfiles.ts (parsed below), so adding a city
// there + re-running this script produces its image.
//
// Usage: node _migration/genCityImages.mjs
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public/assets/areas");
mkdirSync(OUT, { recursive: true });

// --- Brand palette ---
const C = {
  teal: "#155f6b", tealDark: "#105966", aqua: "#86d0d5", gold: "#e0ae3c",
  orange: "#f05a28", ink: "#21424b", muted: "#6b8086", cream: "#fbf7ef",
  paper: "#ffffff", line: "#e5eceb", sky: "#dff0f1", water: "#7cc0c6",
};
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ---- Parse slug -> {name, motif} from cityProfiles.ts (top-level 2-space keys) ----
function parseProfiles() {
  const text = readFileSync(join(ROOT, "app/data/cityProfiles.ts"), "utf8");
  const keyRe = /^ {2}"([a-z0-9-]+)":\s*\{/gm;
  const marks = [];
  let m;
  while ((m = keyRe.exec(text))) marks.push({ slug: m[1], start: m.index });
  const out = [];
  for (let i = 0; i < marks.length; i++) {
    const block = text.slice(marks[i].start, i + 1 < marks.length ? marks[i + 1].start : text.length);
    const name = (block.match(/name:\s*"([^"]+)"/) || [])[1];
    const motif = (block.match(/motif:\s*"([^"]+)"/) || [])[1];
    if (name && motif) out.push({ slug: marks[i].slug, name, motif });
  }
  return out;
}

// ---- Scenes: each fills the area below y=250 within a 900x300 stage ----
const SCENES = {
  coast: () => `
    <rect x="0" y="360" width="900" height="180" fill="${C.water}"/>
    <circle cx="720" cy="330" r="46" fill="${C.gold}" opacity="0.9"/>
    <g fill="none" stroke="${C.paper}" stroke-width="5" stroke-linecap="round" opacity="0.85">
      <path d="M120 430 q40 -26 80 0 t80 0 t80 0 t80 0"/>
      <path d="M120 470 q40 -26 80 0 t80 0 t80 0 t80 0 t80 0"/>
    </g>
    <path d="M0 360 q120 -34 240 -6 t240 -2 240 -10 180 4 V540 H0 Z" fill="${C.teal}" opacity="0.16"/>
    <g stroke="${C.paper}" stroke-width="4" fill="none" opacity="0.8"><path d="M300 300 q14 -12 28 0"/><path d="M320 300 q14 -12 28 0"/></g>`,
  airport: () => `
    <rect x="0" y="430" width="900" height="110" fill="${C.teal}" opacity="0.14"/>
    <g transform="translate(560 250) rotate(-18)">
      <path d="M0 0 L150 24 L150 44 L0 40 Z" fill="${C.teal}"/>
      <path d="M40 20 L92 -34 L108 -30 L74 26 Z" fill="${C.tealDark}"/>
      <path d="M40 30 L92 78 L108 74 L74 34 Z" fill="${C.tealDark}"/>
      <path d="M150 26 L182 14 L184 34 L150 40 Z" fill="${C.gold}"/>
    </g>
    <g stroke="${C.aqua}" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.9">
      <path d="M120 300 h120"/><path d="M150 330 h150"/><path d="M120 360 h90"/></g>
    <g stroke="${C.paper}" stroke-width="4" stroke-dasharray="14 16" opacity="0.85"><path d="M60 470 H840"/></g>`,
  bayside: () => `
    <rect x="0" y="380" width="900" height="160" fill="${C.water}"/>
    <path d="M0 380 h900" stroke="${C.paper}" stroke-width="3" opacity="0.5"/>
    <g fill="none" stroke="${C.tealDark}" stroke-width="6"><path d="M120 380 L120 300 L118 300"/></g>
    <path d="M120 300 L200 372 L120 372 Z" fill="${C.paper}"/>
    <path d="M128 300 L128 372 L188 372 Z" fill="${C.aqua}"/>
    <g stroke="${C.paper}" stroke-width="5" fill="none" opacity="0.75"><path d="M520 300 h300"/><path d="M560 300 v18"/><path d="M600 300 v18"/><path d="M640 300 v18"/><path d="M680 300 v18"/><path d="M720 300 v18"/><path d="M760 300 v18"/></g>
    <g stroke="${C.paper}" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.8"><path d="M150 440 q40 -22 80 0 t80 0 t80 0"/></g>`,
  downtown: () => `
    <g fill="${C.teal}">
      <rect x="120" y="300" width="70" height="240"/>
      <rect x="210" y="250" width="60" height="290" fill="${C.tealDark}"/>
      <rect x="290" y="330" width="66" height="210"/>
      <rect x="376" y="280" width="58" height="260" fill="${C.tealDark}"/>
      <rect x="452" y="340" width="72" height="200"/>
    </g>
    <g fill="${C.gold}" opacity="0.92">
      ${[...Array(4)].map((_, r) => [...Array(3)].map((_, c) => `<rect x="${132 + c * 20}" y="${316 + r * 34}" width="10" height="16"/>`).join("")).join("")}
      ${[...Array(5)].map((_, r) => [...Array(2)].map((_, c) => `<rect x="${222 + c * 22}" y="${268 + r * 34}" width="11" height="18"/>`).join("")).join("")}
    </g>
    <rect x="0" y="500" width="900" height="40" fill="${C.ink}" opacity="0.12"/>`,
  estate: () => `
    <path d="M0 420 q225 -70 450 -20 t450 -30 V540 H0 Z" fill="${C.teal}" opacity="0.16"/>
    <g transform="translate(150 300)">
      <path d="M0 90 L70 40 L140 90 Z" fill="${C.tealDark}"/>
      <rect x="18" y="90" width="104" height="70" fill="${C.teal}"/>
      <rect x="58" y="118" width="24" height="42" fill="${C.gold}"/>
    </g>
    <g fill="${C.tealDark}">
      <circle cx="560" cy="330" r="46"/><rect x="554" y="330" width="12" height="60"/>
      <circle cx="650" cy="350" r="34"/><rect x="645" y="350" width="10" height="46"/>
      <circle cx="720" cy="320" r="52"/><rect x="714" y="320" width="12" height="70"/>
    </g>`,
  wine: () => `
    <path d="M0 330 q225 -60 450 -10 t450 -20 V540 H0 Z" fill="${C.teal}" opacity="0.2"/>
    <path d="M0 400 q225 -40 450 0 t450 -10 V540 H0 Z" fill="${C.tealDark}" opacity="0.22"/>
    <circle cx="720" cy="315" r="42" fill="${C.gold}" opacity="0.9"/>
    <g stroke="${C.tealDark}" stroke-width="4" opacity="0.7">
      ${[...Array(9)].map((_, i) => `<path d="M${120 + i * 80} 430 L${150 + i * 80} 360"/>`).join("")}
    </g>
    <g fill="${C.orange}" opacity="0.8">${[...Array(9)].map((_, i) => `<circle cx="${150 + i * 80}" cy="360" r="6"/>`).join("")}</g>`,
  transit: () => `
    <rect x="0" y="470" width="900" height="70" fill="${C.ink}" opacity="0.14"/>
    <line x1="0" y1="452" x2="900" y2="452" stroke="${C.muted}" stroke-width="4"/>
    <line x1="0" y1="470" x2="900" y2="470" stroke="${C.muted}" stroke-width="4"/>
    <g transform="translate(300 300)">
      <rect x="0" y="0" width="300" height="140" rx="18" fill="${C.teal}"/>
      <rect x="20" y="24" width="60" height="54" rx="8" fill="${C.aqua}"/>
      <rect x="120" y="24" width="60" height="54" rx="8" fill="${C.aqua}"/>
      <rect x="220" y="24" width="60" height="54" rx="8" fill="${C.aqua}"/>
      <circle cx="70" cy="150" r="20" fill="${C.ink}"/><circle cx="230" cy="150" r="20" fill="${C.ink}"/>
      <rect x="-8" y="70" width="16" height="40" rx="4" fill="${C.gold}"/>
    </g>
    <g stroke="${C.muted}" stroke-width="4" opacity="0.6"><path d="M120 250 v46"/><path d="M780 250 v46"/><path d="M120 262 H780"/></g>`,
  civic: () => `
    <path d="M0 500 H900" stroke="${C.ink}" stroke-width="0" />
    <rect x="0" y="500" width="900" height="40" fill="${C.ink}" opacity="0.12"/>
    <g transform="translate(330 250)">
      <path d="M120 0 L200 70 L40 70 Z" fill="${C.tealDark}"/>
      <path d="M100 -30 q20 -30 40 0" fill="none" stroke="${C.gold}" stroke-width="6"/>
      <rect x="40" y="70" width="160" height="20" fill="${C.tealDark}"/>
      <g fill="${C.teal}">${[...Array(5)].map((_, i) => `<rect x="${52 + i * 32}" y="90" width="18" height="120"/>`).join("")}</g>
      <rect x="40" y="210" width="160" height="20" fill="${C.tealDark}"/>
    </g>
    <g fill="${C.tealDark}"><circle cx="180" cy="360" r="40"/><rect x="174" y="360" width="12" height="54"/><circle cx="740" cy="360" r="40"/><rect x="734" y="360" width="12" height="54"/></g>`,
};

function cityHero({ name, motif }) {
  const scene = (SCENES[motif] || SCENES.civic)();
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 540" role="img" aria-label="California Hearing Center serving ${esc(name)}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.cream}"/><stop offset="1" stop-color="${C.sky}"/>
    </linearGradient>
    <clipPath id="card"><rect x="0" y="0" width="900" height="540" rx="26"/></clipPath>
  </defs>
  <g clip-path="url(#card)">
    <rect width="900" height="540" fill="url(#sky)"/>
    ${scene}
    <!-- unifying hearing motif: soundwave arcs radiating from a listening point -->
    <g transform="translate(96 150)" fill="none" stroke="${C.teal}" stroke-width="6" stroke-linecap="round" opacity="0.55">
      <circle cx="0" cy="0" r="7" fill="${C.teal}" stroke="none"/>
      <path d="M18 -20 a30 30 0 0 1 0 40"/>
      <path d="M34 -34 a52 52 0 0 1 0 68"/>
      <path d="M50 -48 a74 74 0 0 1 0 96"/>
    </g>
    <!-- title band -->
    <rect x="0" y="0" width="900" height="118" fill="${C.teal}"/>
    <text x="60" y="52" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-weight="700" fill="${C.paper}">${esc(name)}</text>
    <text x="60" y="88" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="20" fill="${C.aqua}" letter-spacing="1.5">CALIFORNIA HEARING CENTER · AREAS WE SERVE</text>
    <rect x="0" y="118" width="900" height="5" fill="${C.gold}"/>
  </g>
</svg>`;
}

const cities = parseProfiles();
let n = 0;
for (const c of cities) {
  writeFileSync(join(OUT, `${c.slug}.svg`), cityHero(c));
  n++;
}
console.log(`Wrote ${n} city hero SVGs to public/assets/areas/`);
console.log(cities.map((c) => `  ${c.slug} (${c.motif})`).join("\n"));
