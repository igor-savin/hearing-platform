// Self-test for the screener scoring. Runs simulated listeners through the real
// staircase and scoring code and prints how the estimate behaves. It needs no
// install:
//
//   cd ~/California-Hearing-Center
//   node --experimental-strip-types scripts/screener-selftest.mjs
//
// It is a sanity check on the logic, NOT a clinical validation. The simulated
// listener is a textbook logistic curve; real people are messier. Use it to see
// how noisy the estimate is and how often the placeholder thresholds misfire,
// then check the cutoffs against real audiograms before launch.

import {
  PARAMS,
  makeTriplet,
  isCorrect,
  nextSnr,
  earStartSnr,
  summarize,
} from "../app/lib/screener/scoring.ts";

// Small seeded generator so a run is repeatable.
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Probability of getting a whole triplet right: 50% at the listener's SRT and
// about 15% per dB around it (a typical slope for this kind of test).
function pCorrect(snr, srt) {
  return 1 / (1 + Math.exp(-4 * 0.15 * (snr - srt)));
}

function runTrack(rand, ear, trials, startSnr, srt, quirk = {}) {
  const out = [];
  let snr = startSnr;
  let prev;
  for (let i = 0; i < trials; i++) {
    const digits = makeTriplet(rand, prev);
    prev = digits;
    const right = rand() < pCorrect(snr, srt);
    let response = digits;
    if (!right) {
      response = makeTriplet(rand);
      if (response.every((d, k) => d === digits[k])) response = [9, 8, 6];
    }
    if (quirk.alwaysSame) response = [1, 2, 3];
    if (quirk.silent) response = [];
    const t = { digits, response, snr, ear, ms: quirk.fast ? 120 : 900 + Math.floor(rand() * 1600) };
    out.push(t);
    snr = nextSnr(snr, isCorrect(t));
  }
  return out;
}

function simulate(rand, trueBoth, left, right, quirk) {
  const both = runTrack(rand, "both", PARAMS.binauralTrials, PARAMS.startSnr, trueBoth, quirk);
  const run = { both };
  // Use the same start rule the browser uses. It needs the both-ears estimate, so
  // compute it from a first summary.
  const first = summarize({ both });
  if (first.srtBoth !== null) {
    const start = earStartSnr(first.srtBoth);
    run.left = runTrack(rand, "left", PARAMS.earTrials, start, left, quirk);
    run.right = runTrack(rand, "right", PARAMS.earTrials, start, right, quirk);
  }
  return summarize(run);
}

const N = 2000;
const rand = rng(20260930);
const pct = (x) => `${(100 * x).toFixed(1)}%`.padStart(6);
const fmt = (x) => x.toFixed(2).padStart(6);

console.log(`Cutoffs in use (PLACEHOLDER): good <= ${PARAMS.goodMax} dB, fair <= ${PARAMS.fairMax} dB, ear gap > ${PARAMS.asymmetryDb} dB`);
console.log(`Simulated listeners per row: ${N}\n`);

console.log("A. Both-ears estimate for listeners with a known SRT (ears equal; ear runs are ~3 dB harder than both ears)");
console.log("true SRT | mean est | SD est | good  | fair  | poor  | unreliable | ear-gap flagged");
for (const trueSrt of [-12, -10, -8, -6, -4, -2, 0, 4]) {
  const ests = [];
  const bands = { good: 0, fair: 0, poor: 0, unreliable: 0 };
  let flagged = 0;
  for (let i = 0; i < N; i++) {
    const s = simulate(rand, trueSrt, trueSrt + 3, trueSrt + 3);
    bands[s.band]++;
    if (s.srtBoth !== null) ests.push(s.srtBoth);
    if (s.asymmetry) flagged++;
  }
  const m = ests.reduce((a, b) => a + b, 0) / ests.length;
  const sd = Math.sqrt(ests.reduce((a, b) => a + (b - m) ** 2, 0) / (ests.length - 1));
  console.log(
    `${String(trueSrt).padStart(8)} | ${fmt(m)}   | ${fmt(sd)} | ${pct(bands.good / N)} | ${pct(bands.fair / N)} | ${pct(bands.poor / N)} | ${pct(bands.unreliable / N)}     | ${pct(flagged / N)}`
  );
}

console.log("\nB. Ear-gap flag: one ear is worse than the other by the stated amount (better ear SRT -8 dB)");
console.log("gap (dB) | flagged");
for (const gap of [0, 3, 6, 9, 12, 18]) {
  let flagged = 0;
  for (let i = 0; i < N; i++) {
    const s = simulate(rand, -8 + gap / 2, -5, -5 + gap);
    if (s.asymmetry) flagged++;
  }
  console.log(`${String(gap).padStart(8)} | ${pct(flagged / N)}`);
}

console.log("\nC. Validity checks: cases that should NOT produce a band");
const cases = [
  ["tapping the same answer every time", { alwaysSame: true }],
  ["tapping answers far too fast", { fast: true }],
  ["audio off (every answer blank)", { silent: true }],
];
for (const [label, quirk] of cases) {
  let unreliable = 0;
  for (let i = 0; i < 200; i++) {
    const s = simulate(rand, -8, -5, -5, quirk);
    if (s.band === "unreliable") unreliable++;
  }
  console.log(`${label.padEnd(40)} -> unreliable in ${pct(unreliable / 200)} of runs`);
}

// Tampering: a browser that reports a made-up SNR must be caught by the server.
{
  const s = simulate(rand, -8, -5, -5);
  const both = runTrack(rand, "both", PARAMS.binauralTrials, PARAMS.startSnr, -8);
  both[10] = { ...both[10], snr: both[10].snr + 6 };
  const t = summarize({ both });
  console.log(`${"edited SNR in a submitted run".padEnd(40)} -> band: ${t.band} (${t.validity.join(", ")})`);
  void s;
}
