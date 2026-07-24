// Reusable on-brand SVG image kit for California Hearing Center blog posts.
// Two motifs: conceptHero (image 1) and infographic (image 2). No dependencies.
// Usage: node _migration/genBlogImages.mjs   (reads SPECS below, writes public/assets/blog/{slug}-{1,2}.svg)
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public/assets/blog");
mkdirSync(OUT, { recursive: true });

// --- Brand palette ---
const C = {
  teal: "#155f6b", tealDark: "#105966", aqua: "#86d0d5", gold: "#e0ae3c",
  orange: "#f05a28", ink: "#21424b", muted: "#6b8086", cream: "#fbf7ef",
  paper: "#ffffff", line: "#e5eceb", blue: "#2f7fd6",
};
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// --- Icon library: each returns SVG centered in a 100x100 box, scaled/translated by caller ---
const ICONS = {
  ear: (c = C.paper) => `
    <path d="M35 78 C22 70 22 40 42 30 C62 20 82 34 76 54 C72 66 60 62 60 74 C60 84 50 88 43 84" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>
    <circle cx="49" cy="47" r="7" fill="none" stroke="${c}" stroke-width="6"/>`,
  brain: (c = C.paper) => `
    <path d="M40 30 C25 30 22 48 30 52 C22 60 30 74 42 70 M60 30 C75 30 78 48 70 52 C78 60 70 74 58 70 M50 26 V74" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/>
    <circle cx="38" cy="44" r="3" fill="${c}"/><circle cx="62" cy="44" r="3" fill="${c}"/><circle cx="46" cy="60" r="3" fill="${c}"/>`,
  soundwave: (c = C.paper) => `
    <g stroke="${c}" stroke-width="7" stroke-linecap="round" fill="none">
      <path d="M30 40 V60"/><path d="M44 28 V72"/><path d="M58 36 V64"/><path d="M72 24 V76"/></g>`,
  mutedSound: (c = C.paper) => `
    <path d="M40 42 A16 16 0 0 1 40 74" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/>
    <path d="M52 34 A30 30 0 0 1 52 82" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/>
    <line x1="26" y1="80" x2="70" y2="30" stroke="${C.orange}" stroke-width="7" stroke-linecap="round"/>`,
  battery: (c = C.paper) => `
    <rect x="24" y="38" width="46" height="30" rx="6" fill="none" stroke="${c}" stroke-width="6"/>
    <rect x="70" y="46" width="8" height="14" rx="3" fill="${c}"/>
    <rect x="30" y="44" width="12" height="18" rx="2" fill="${C.gold}"/>`,
  bluetooth: (c = C.paper) => `
    <path d="M40 32 L62 48 L44 64 L44 30 L62 52 L40 68" fill="none" stroke="${c}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>`,
  phone: (c = C.paper) => `
    <rect x="36" y="24" width="30" height="54" rx="7" fill="none" stroke="${c}" stroke-width="6"/>
    <line x1="46" y1="70" x2="56" y2="70" stroke="${c}" stroke-width="5" stroke-linecap="round"/>
    <g stroke="${C.aqua}" stroke-width="4" fill="none"><path d="M62 34 a8 8 0 0 1 8 8"/><path d="M62 28 a14 14 0 0 1 14 14"/></g>`,
  earbud: (c = C.paper) => `
    <path d="M44 30 C58 30 60 46 54 56 L54 74 C54 80 46 80 46 74 L46 56 C40 48 34 34 44 30 Z" fill="none" stroke="${c}" stroke-width="6" stroke-linejoin="round"/>
    <circle cx="48" cy="44" r="4" fill="${c}"/>`,
  shield: (c = C.paper) => `
    <path d="M50 24 L74 34 V54 C74 68 62 76 50 80 C38 76 26 68 26 54 V34 Z" fill="none" stroke="${c}" stroke-width="6" stroke-linejoin="round"/>
    <path d="M40 52 L48 60 L64 42" fill="none" stroke="${C.gold}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
  people: (c = C.paper) => `
    <circle cx="38" cy="38" r="9" fill="none" stroke="${c}" stroke-width="5"/>
    <path d="M24 74 C24 58 52 58 52 74" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>
    <circle cx="66" cy="40" r="8" fill="none" stroke="${C.muted}" stroke-width="5"/>
    <path d="M56 74 C56 60 78 60 78 72" fill="none" stroke="${C.muted}" stroke-width="5" stroke-linecap="round"/>`,
  calendar: (c = C.paper) => `
    <rect x="26" y="30" width="48" height="46" rx="6" fill="none" stroke="${c}" stroke-width="6"/>
    <line x1="26" y1="44" x2="74" y2="44" stroke="${c}" stroke-width="6"/>
    <line x1="38" y1="24" x2="38" y2="34" stroke="${c}" stroke-width="6" stroke-linecap="round"/>
    <line x1="62" y1="24" x2="62" y2="34" stroke="${c}" stroke-width="6" stroke-linecap="round"/>
    <path d="M40 58 L47 65 L60 52" fill="none" stroke="${C.gold}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
  dna: (c = C.paper) => `
    <g stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round">
      <path d="M38 26 C68 42 32 58 62 74"/><path d="M62 26 C32 42 68 58 38 74"/>
      <line x1="42" y1="34" x2="58" y2="34"/><line x1="46" y1="50" x2="54" y2="50"/><line x1="42" y1="66" x2="58" y2="66"/></g>`,
  hearingaid: (c = C.paper) => `
    <path d="M40 34 C58 30 70 44 66 60 C63 72 52 72 50 80" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>
    <circle cx="42" cy="46" r="8" fill="none" stroke="${c}" stroke-width="6"/>
    <g stroke="${C.aqua}" stroke-width="4" fill="none"><path d="M70 40 a10 10 0 0 1 6 12"/></g>`,
  hidden: (c = C.paper) => `
    <path d="M22 50 C34 34 66 34 78 50 C66 66 34 66 22 50 Z" fill="none" stroke="${c}" stroke-width="6" stroke-linejoin="round"/>
    <circle cx="50" cy="50" r="9" fill="none" stroke="${c}" stroke-width="6"/>
    <line x1="28" y1="72" x2="72" y2="28" stroke="${C.gold}" stroke-width="6" stroke-linecap="round"/>`,
};

// --- Motif 1: concept hero (image 1) ---
function conceptHero({ title, icon, accent = C.gold, badge = "California Hearing Center" }) {
  const iconFn = ICONS[icon] || ICONS.ear;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560" role="img" aria-label="${esc(title)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.tealDark}"/>
    </linearGradient>
    <radialGradient id="halo" cx="0.5" cy="0.42" r="0.5">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.5"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="560" fill="url(#bg)"/>
  <circle cx="120" cy="120" r="240" fill="#ffffff" opacity="0.03"/>
  <circle cx="700" cy="470" r="220" fill="#ffffff" opacity="0.03"/>
  <ellipse cx="400" cy="238" rx="230" ry="200" fill="url(#halo)"/>
  <circle cx="400" cy="238" r="128" fill="#ffffff" opacity="0.08"/>
  <circle cx="400" cy="238" r="128" fill="none" stroke="${C.aqua}" stroke-width="2" opacity="0.5"/>
  <g transform="translate(320 158) scale(1.6)">${iconFn(C.paper)}</g>
  <text x="400" y="430" text-anchor="middle" font-family="Georgia, serif" font-size="40" fill="${C.paper}" font-weight="bold">${esc(title)}</text>
  <rect x="300" y="466" width="200" height="4" rx="2" fill="${accent}"/>
  <text x="400" y="516" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="${C.aqua}" letter-spacing="1">${esc(badge)}</text>
</svg>`;
}

// --- Motif 2: numbered infographic (image 2) ---
function infographic({ title, subtitle, rows, accent = C.gold }) {
  const top = 118, step = (520 - top - 20) / rows.length;
  const body = rows.map((r, i) => {
    const y = top + step * i + step / 2;
    return `
    <circle cx="66" cy="${y}" r="24" fill="${C.cream}" stroke="${accent}" stroke-width="3"/>
    <text x="66" y="${y + 7}" font-size="21" fill="${C.teal}" text-anchor="middle" font-weight="bold" font-family="Georgia, serif">${i + 1}</text>
    <text x="108" y="${y - 5}" font-size="18.5" fill="${C.ink}" font-weight="bold" font-family="Georgia, serif">${esc(r.title)}</text>
    <text x="108" y="${y + 18}" font-size="14.5" fill="${C.muted}" font-family="Georgia, serif">${esc(r.desc)}</text>
    ${i < rows.length - 1 ? `<line x1="108" y1="${y + step / 2}" x2="756" y2="${y + step / 2}" stroke="${C.line}" stroke-width="2"/>` : ""}`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" role="img" aria-label="${esc(title)}">
  <defs><linearGradient id="hd" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${C.teal}"/><stop offset="1" stop-color="${C.tealDark}"/></linearGradient></defs>
  <rect width="800" height="520" fill="${C.paper}"/>
  <rect x="0" y="0" width="800" height="90" fill="url(#hd)"/>
  <rect x="0" y="86" width="800" height="4" fill="${accent}"/>
  <text x="44" y="44" font-family="Georgia, serif" font-size="25" fill="${C.paper}" font-weight="bold">${esc(title)}</text>
  <text x="44" y="70" font-family="Georgia, serif" font-size="15" fill="${C.aqua}">${esc(subtitle)}</text>
  ${body}
</svg>`;
}

// --- SPECS: one per pilot post (hero icon/accent + infographic rows) ---
const SPECS = [
  {
    slug: "could-there-be-a-link-between-hearing-loss-and-dementia",
    hero: { title: "Hearing & Brain Health", icon: "brain", accent: C.gold },
    info: { title: "Hearing and Brain Health", subtitle: "What experts study — and why an evaluation helps regardless", accent: C.gold, rows: [
      { title: "Recognized risk factor", desc: "Untreated hearing loss is a modifiable risk factor for cognitive decline." },
      { title: "Listening effort", desc: "A straining ear makes the brain work harder to decode speech." },
      { title: "Reduced stimulation", desc: "Less rich sound reaches the brain as hearing fades." },
      { title: "Social withdrawal", desc: "Difficulty hearing can pull people out of conversation." },
      { title: "Low-risk evaluation", desc: "Getting checked is quick, comfortable, and helps either way." },
    ] },
  },
  {
    slug: "how-can-hearing-loss-affect-your-energy",
    hero: { title: "Listening Fatigue", icon: "battery", accent: C.gold },
    info: { title: "Signs your tiredness may be listening fatigue", subtitle: "Cues people often blame on age or stress instead", accent: C.gold, rows: [
      { title: "Drained after socializing", desc: "Wiped out after events that shouldn't be that tiring." },
      { title: "Foggy by late afternoon", desc: "Mental fog builds as the day of listening wears on." },
      { title: "Skipping group plans", desc: "Noisy gatherings start to feel like too much effort." },
      { title: "Zoning out in talk", desc: "Attention slips during longer conversations." },
      { title: "Craving quiet to recover", desc: "Needing alone time to reset after being with people." },
    ] },
  },
  {
    slug: "gene-therapy-may-be-the-answer-to-hearing-loss",
    hero: { title: "Research vs. Proven Care", icon: "dna", accent: C.blue },
    info: { title: "How to read a breakthrough headline", subtitle: "Five questions that separate real progress from hype", accent: C.blue, rows: [
      { title: "Who does it help?", desc: "Which specific condition or group was it tested in?" },
      { title: "How many were tested?", desc: "Early studies are small — promising, not proven." },
      { title: "Is it approved care?", desc: "Experimental research is not the same as available treatment." },
      { title: "Does it fit me?", desc: "Most hearing loss is age- or noise-related, not single-gene." },
      { title: "What helps now?", desc: "Evaluation, hearing aids, and tinnitus care work today." },
    ] },
  },
  {
    slug: "simple-steps-to-protect-and-preserve-your-hearing",
    hero: { title: "Protect Your Hearing", icon: "shield", accent: C.gold },
    info: { title: "Five simple ways to protect your hearing", subtitle: "Prevention beats treatment when it comes to noise damage", accent: C.gold, rows: [
      { title: "Turn the volume down", desc: "If you must raise your voice over it, it's too loud." },
      { title: "Keep your distance", desc: "Doubling your distance sharply cuts the intensity." },
      { title: "Wear ear protection", desc: "Custom plugs you'll actually wear beat foam you won't." },
      { title: "Rest your ears", desc: "Give ears quiet recovery time after loud events." },
      { title: "Get checked regularly", desc: "A periodic test catches gradual change early." },
    ] },
  },
  {
    slug: "smart-hearing-devices-take-your-hearing-into-the-future",
    hero: { title: "Smart Hearing Tech", icon: "bluetooth", accent: C.aqua },
    info: { title: "Five smart hearing features explained", subtitle: "What modern hearing aids can do — when properly fit", accent: C.aqua, rows: [
      { title: "Bluetooth streaming", desc: "Calls, TV, and music play straight into your ears." },
      { title: "Rechargeable batteries", desc: "Charge overnight — no fiddling with tiny cells." },
      { title: "Smartphone app control", desc: "Adjust volume and settings from your pocket." },
      { title: "Automatic noise handling", desc: "Devices adapt to quiet rooms or busy restaurants." },
      { title: "Directional microphones", desc: "Focus on the voice in front of you in a group." },
    ] },
  },
  {
    slug: "what-are-invisible-hearing-aids",
    hero: { title: "Invisible Hearing Aids", icon: "hidden", accent: C.aqua },
    info: { title: "Five things we check before an invisible style", subtitle: "What your fitting and ear exam actually cover", accent: C.aqua, rows: [
      { title: "Degree of hearing loss", desc: "Deeper losses often need a larger, more powerful style." },
      { title: "Canal size and shape", desc: "The canal must hold the electronics securely." },
      { title: "Dexterity and eyesight", desc: "Tiny devices ask more of your fingers and eyes." },
      { title: "Battery vs. rechargeable", desc: "Most invisibles use small disposable batteries." },
      { title: "Earwax and canal health", desc: "Deep-fit devices are sensitive to wax and moisture." },
    ] },
  },
  {
    slug: "undiagnosed-hearing-loss-associated-with-social-isolation-in-seniors",
    hero: { title: "Hearing & Connection", icon: "people", accent: C.gold },
    info: { title: "Five gentle ways to encourage a hearing check", subtitle: "Lead with care, not correction — an offer beats a verdict", accent: C.gold, rows: [
      { title: "Notice out loud", desc: "Mention what you've observed, kindly and specifically." },
      { title: "Name what they're missing", desc: "Tie it to the people and moments they value." },
      { title: "Offer to come along", desc: "Make it feel like company, not a test." },
      { title: "Call it a simple test", desc: "Frame it as low-pressure, not a diagnosis." },
      { title: "Follow up warmly", desc: "Keep the door open without pressure." },
    ] },
  },
  {
    slug: "welcome-to-may-better-hearing-month",
    hero: { title: "Better Hearing Month", icon: "calendar", accent: C.aqua },
    info: { title: "Five reasons to check your hearing yearly", subtitle: "A once-a-year check is quick, painless, and easy to keep", accent: C.aqua, rows: [
      { title: "Set your baseline", desc: "A normal result becomes your point of comparison." },
      { title: "Catch change early", desc: "Gradual loss is easiest to act on when caught early." },
      { title: "Painless and fast", desc: "No needles — most visits take under an hour." },
      { title: "Protect daily connection", desc: "Clear hearing keeps you in the conversation." },
      { title: "Check ringing too", desc: "Tinnitus often travels with hearing change." },
    ] },
  },
  {
    slug: "ear-buds-may-lead-to-hearing-loss-but-it-can-be-avoided",
    hero: { title: "Listen Safely", icon: "earbud", accent: C.gold },
    info: { title: "Five habits for safe earbud listening", subtitle: "Keep the volume and the hours in a safe range", accent: C.gold, rows: [
      { title: "Follow 60/60", desc: "About 60% volume, then a break near 60 minutes." },
      { title: "Take listening breaks", desc: "Quiet time lets inner-ear cells recover." },
      { title: "Seal out background noise", desc: "Isolating styles stop you cranking the volume." },
      { title: "Set a volume limit", desc: "Use built-in limits for yourself, kids, and teens." },
      { title: "Watch for ringing", desc: "Ringing or muffled hearing means it was too loud." },
    ] },
  },
];

for (const s of SPECS) {
  writeFileSync(join(OUT, `${s.slug}-1.svg`), conceptHero(s.hero).trim() + "\n");
  writeFileSync(join(OUT, `${s.slug}-2.svg`), infographic(s.info).trim() + "\n");
  console.log("wrote", s.slug, "-1.svg / -2.svg");
}
console.log(`Done: ${SPECS.length} posts, ${SPECS.length * 2} images.`);
export { conceptHero, infographic, ICONS, C };
