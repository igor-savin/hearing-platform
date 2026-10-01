// Scoring for the online hearing screener (digits-in-noise).
//
// This file is deliberately self-contained: no imports, no DOM, no Node APIs.
// The browser uses it to run the adaptive staircase, the server uses it to
// re-score what the browser sends (the browser is never trusted to report its
// own band), and scripts/screener-selftest.mjs runs it directly under Node.
//
// WHAT THE TEST IS
// A listener hears three spoken digits in background noise and types them. If
// all three are right the next triplet is made harder (less speech relative to
// noise); if not, easier. The level the track settles around is the Speech
// Reception Threshold (SRT): the signal-to-noise ratio (SNR, in dB) at which the
// listener gets about half of the triplets right. A higher (less negative) SRT
// means more difficulty hearing speech in noise.
//
// WHAT IS A PLACEHOLDER
// Every number marked PLACEHOLDER below is a starting value that has NOT been
// approved by an audiologist. The band cutoffs and the ear-difference threshold
// decide what a patient is told, so an Au.D. must set them before launch. See
// SCREENER_CLINICAL_APPROVED in config.ts, which keeps the pages marked as a
// preview until that is done.

export type Ear = "both" | "left" | "right";
export type Band = "good" | "fair" | "poor" | "unreliable";
export type Priority = "urgent" | "high" | "normal" | "low";

export type Trial = {
  /** The three digits that were played. */
  digits: number[];
  /** What the listener entered. Empty or short when they chose "I could not hear". */
  response: number[];
  /** SNR in dB for this triplet. */
  snr: number;
  ear: Ear;
  /** Milliseconds from the end of the audio to the answer. */
  ms: number;
};

export type ValidityReason =
  | "incomplete"
  | "no-audio"
  | "too-easy"
  | "too-fast"
  | "repeated-answers"
  | "erratic"
  | "mismatch";

/**
 * Digits used. 7 is left out because "seven" has two syllables and is easier to
 * pick out than the others; 0 is left out for the same reason ("zero"). Every
 * digit here is one syllable, which keeps the triplets equally difficult.
 */
export const ALLOWED_DIGITS = [1, 2, 3, 4, 5, 6, 8, 9];

export const PARAMS = {
  /** SNR of the first triplet, dB. */
  startSnr: 0,
  /** Staircase step, dB. */
  step: 2,
  minSnr: -24,
  maxSnr: 16,
  /** Triplets in the both-ears run. */
  binauralTrials: 24,
  /** Triplets in each one-ear run. */
  earTrials: 12,
  /** One-ear runs start this much easier than the both-ears result, dB. */
  earStartOffset: 3,
  /** Early trials ignored while the track finds its level. */
  discardBinaural: 4,
  discardEar: 2,

  // PLACEHOLDER: band cutoffs, dB SNR. Good is at or below goodMax; Fair is above
  // goodMax up to fairMax; Poor is above fairMax. From the PRD's illustrative
  // values. Must be set by the practice's audiologist.
  goodMax: -8,
  fairMax: -4,

  // PLACEHOLDER: one ear must score this many dB worse than the other before the
  // result is flagged. Must be checked against real data: with only 12 triplets
  // per ear the estimate is noisy, so a low value will flag people who are fine.
  asymmetryDb: 6,
};

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n));
}

function mean(xs: number[]) {
  return xs.reduce((a, b) => a + b, 0) / xs.length;
}

function sd(xs: number[]) {
  if (xs.length < 2) return 0;
  const m = mean(xs);
  return Math.sqrt(xs.reduce((a, b) => a + (b - m) * (b - m), 0) / (xs.length - 1));
}

function median(xs: number[]) {
  const s = [...xs].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

// ---------------------------------------------------------------------------
// Running the test (browser)
// ---------------------------------------------------------------------------

/** Three different digits, not the same triplet as the previous one. */
export function makeTriplet(rand: () => number, previous?: number[]): number[] {
  for (let attempt = 0; attempt < 20; attempt++) {
    const pool = [...ALLOWED_DIGITS];
    const out: number[] = [];
    for (let i = 0; i < 3; i++) {
      const j = Math.floor(rand() * pool.length);
      out.push(pool[j]);
      pool.splice(j, 1);
    }
    if (!previous || out.some((d, i) => d !== previous[i])) return out;
  }
  return [1, 2, 3];
}

export function isCorrect(t: Trial): boolean {
  return (
    t.digits.length === 3 &&
    t.response.length === 3 &&
    t.digits.every((d, i) => d === t.response[i])
  );
}

/** One-up, one-down: right makes it harder, wrong makes it easier. */
export function nextSnr(current: number, correct: boolean): number {
  return clamp(current + (correct ? -PARAMS.step : PARAMS.step), PARAMS.minSnr, PARAMS.maxSnr);
}

/** Where a one-ear run starts, given the both-ears estimate. */
export function earStartSnr(srtBoth: number): number {
  return clamp(Math.round(srtBoth) + PARAMS.earStartOffset, PARAMS.minSnr, PARAMS.maxSnr);
}

// ---------------------------------------------------------------------------
// Scoring (browser and server)
// ---------------------------------------------------------------------------

/**
 * SRT estimate: the mean SNR over the trials after the early ones, plus the level
 * the track would have presented next. Returns null when there is too little data.
 */
export function estimateSrt(trials: Trial[], discard: number): number | null {
  if (!trials.length) return null;
  const last = trials[trials.length - 1];
  const used = trials.slice(discard).map((t) => t.snr);
  used.push(nextSnr(last.snr, isCorrect(last)));
  if (used.length < 5) return null;
  return mean(used);
}

/** True when each trial's SNR is what the staircase rules say it should be. */
export function staircaseConsistent(trials: Trial[], start: number): boolean {
  let snr = start;
  for (const t of trials) {
    if (Math.abs(t.snr - snr) > 0.01) return false;
    snr = nextSnr(snr, isCorrect(t));
  }
  return true;
}

function shapeOk(t: Trial, ear: Ear): boolean {
  if (!t || typeof t !== "object") return false;
  if (t.ear !== ear) return false;
  if (!Array.isArray(t.digits) || t.digits.length !== 3) return false;
  if (!t.digits.every((d) => ALLOWED_DIGITS.includes(d))) return false;
  if (new Set(t.digits).size !== 3) return false;
  if (!Array.isArray(t.response) || t.response.length > 3) return false;
  if (!t.response.every((d) => Number.isInteger(d) && d >= 0 && d <= 9)) return false;
  if (!Number.isFinite(t.snr) || t.snr < PARAMS.minSnr || t.snr > PARAMS.maxSnr) return false;
  if (!Number.isFinite(t.ms) || t.ms < 0 || t.ms > 120000) return false;
  return true;
}

function longestRun(trials: Trial[], test: (t: Trial) => boolean) {
  let best = 0;
  let run = 0;
  for (const t of trials) {
    run = test(t) ? run + 1 : 0;
    best = Math.max(best, run);
  }
  return best;
}

/**
 * Checks that a run looks like a person really took the test. A result that
 * fails any check is reported as "unreliable" rather than given a made-up band.
 */
export function assessRun(trials: Trial[], ear: Ear, expected: number, start: number, discard: number) {
  const reasons: ValidityReason[] = [];

  if (!Array.isArray(trials) || trials.length !== expected) {
    return { valid: false, reasons: ["incomplete" as ValidityReason] };
  }
  if (!trials.every((t) => shapeOk(t, ear)) || !staircaseConsistent(trials, start)) {
    return { valid: false, reasons: ["mismatch" as ValidityReason] };
  }

  const correct = trials.filter(isCorrect).length;
  // Nothing right, or several wrong in a row at the loudest setting: the audio
  // most likely did not play, was muted, or was turned far too low.
  if (correct === 0 || longestRun(trials, (t) => t.snr >= PARAMS.maxSnr && !isCorrect(t)) >= 4) {
    reasons.push("no-audio");
  }
  // Right every time at the quietest setting is not a plausible hearing result.
  if (longestRun(trials, (t) => t.snr <= PARAMS.minSnr && isCorrect(t)) >= 6) {
    reasons.push("too-easy");
  }
  // Three taps in well under half a second, every time, is not listening.
  if (median(trials.map((t) => t.ms)) < 350) {
    reasons.push("too-fast");
  }
  // The same answer over and over.
  const counts = new Map<string, number>();
  for (const t of trials) {
    if (t.response.length === 3) {
      const key = t.response.join("");
      counts.set(key, (counts.get(key) || 0) + 1);
    }
  }
  if (Math.max(0, ...counts.values()) >= Math.ceil(expected / 3)) {
    reasons.push("repeated-answers");
  }
  // A track that will not settle gives an estimate that means little.
  const counted = trials.slice(discard).map((t) => t.snr);
  if (sd(counted) > 7) {
    reasons.push("erratic");
  }

  return { valid: reasons.length === 0, reasons };
}

export function classify(srt: number): Exclude<Band, "unreliable"> {
  if (srt <= PARAMS.goodMax) return "good";
  if (srt <= PARAMS.fairMax) return "fair";
  return "poor";
}

export type Run = { both: Trial[]; left?: Trial[]; right?: Trial[] };

export type Summary = {
  band: Band;
  srtBoth: number | null;
  srtLeft: number | null;
  srtRight: number | null;
  validity: ValidityReason[];
  earCheck: "done" | "skipped" | "unreliable";
  /** Set only when both one-ear runs are valid and the gap is over the threshold. */
  asymmetry: null | { worseEar: "left" | "right"; diffDb: number };
  priority: Priority;
};

/** Turns the raw trials into the result. Used by the server; the browser only needs it for previews. */
export function summarize(run: Run): Summary {
  const both = assessRun(run.both, "both", PARAMS.binauralTrials, PARAMS.startSnr, PARAMS.discardBinaural);
  const srtBoth = both.valid ? estimateSrt(run.both, PARAMS.discardBinaural) : null;

  const base: Summary = {
    band: "unreliable",
    srtBoth,
    srtLeft: null,
    srtRight: null,
    validity: both.reasons,
    earCheck: "skipped",
    asymmetry: null,
    priority: "low",
  };

  if (!both.valid || srtBoth === null) return base;

  base.band = classify(srtBoth);

  if (run.left && run.right) {
    const start = earStartSnr(srtBoth);
    const l = assessRun(run.left, "left", PARAMS.earTrials, start, PARAMS.discardEar);
    const r = assessRun(run.right, "right", PARAMS.earTrials, start, PARAMS.discardEar);
    if (l.valid && r.valid) {
      const srtLeft = estimateSrt(run.left, PARAMS.discardEar);
      const srtRight = estimateSrt(run.right, PARAMS.discardEar);
      base.srtLeft = srtLeft;
      base.srtRight = srtRight;
      base.earCheck = "done";
      if (srtLeft !== null && srtRight !== null) {
        const diff = srtLeft - srtRight;
        if (Math.abs(diff) > PARAMS.asymmetryDb) {
          base.asymmetry = { worseEar: diff > 0 ? "left" : "right", diffDb: Math.round(Math.abs(diff) * 10) / 10 };
        }
      }
    } else {
      base.earCheck = "unreliable";
    }
  }

  if (base.asymmetry) base.priority = "urgent";
  else if (base.band === "poor") base.priority = "high";
  else if (base.band === "fair") base.priority = "normal";
  else base.priority = "low";

  return base;
}
