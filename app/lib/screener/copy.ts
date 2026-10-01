// Patient-facing wording, in one place so the result screen, the PDF and the
// emails always say the same thing. Plain language, no scare tactics, and never
// the word "audiogram" or a decibel hearing threshold: this is a screening.
//
// An audiologist must review everything in this file before launch.

import type { Band, ValidityReason } from "./scoring";
import { BAND_LEVEL_RANGE, LEVELS } from "./config";

export const SCREENING_NOT_DIAGNOSIS =
  "This is a screening, not a diagnosis. Only an in-office evaluation by an audiologist can diagnose hearing loss.";

export const BAND_COPY: Record<Band, { label: string; headline: string; body: string; next: string }> = {
  good: {
    label: "Good",
    headline: "No sign of difficulty in this screening.",
    body:
      "You picked out the numbers well, even with background noise. A short screening cannot rule out every kind of hearing loss. If you or the people around you notice changes, a full hearing evaluation is still worth having.",
    next: "If anything changes, or in a year, check again. You can also book a hearing evaluation at any time.",
  },
  fair: {
    label: "Fair",
    headline: "Some difficulty hearing in background noise.",
    body:
      "You had some trouble picking out the numbers when noise was playing. This is common, and it can be an early sign of change. It is worth getting checked.",
    next: "We suggest a hearing evaluation. It takes about an hour and you leave knowing where you stand.",
  },
  poor: {
    label: "Poor",
    headline: "Significant difficulty hearing in background noise.",
    body:
      "You had a lot of trouble picking out the numbers when noise was playing. There are many possible reasons, and many of them can be treated. We recommend a hearing evaluation soon.",
    next: "Please call us or request an appointment. A member of our team may also call you, if you said that was okay.",
  },
  unreliable: {
    label: "Not reliable",
    headline: "We could not get a reliable result.",
    body:
      "Something about this run means we do not want to give you a score that might be wrong. That does not say anything about your hearing.",
    next: "Try again in a quiet room with headphones, or book a hearing evaluation and we will test you in person.",
  },
};

export const EAR_NOTE =
  "One ear scored lower than the other. A difference between the ears is worth checking soon. If your hearing in one ear dropped suddenly, do not wait: call us today or see a doctor right away.";

export const URGENT_HINT =
  "If you noticed a sudden drop in hearing, in one ear or both, call us today or see a doctor right away.";

const REASON_TIPS: Record<ValidityReason, string> = {
  incomplete: "The test did not finish.",
  "no-audio": "We could not tell that the sound was playing. Check that your volume is up and your headphones are plugged in.",
  "too-easy": "Your answers looked unusual. Check for a second window playing sound, and try again.",
  "too-fast": "The answers came in very fast. Take a moment to listen before you tap.",
  "repeated-answers": "The same answer was entered many times. Listen for the three numbers each time.",
  erratic: "Your answers varied a lot. Background noise at home can cause this. Try a quieter room.",
  mismatch: "The test data did not look right. Please try again.",
};

export function reliabilityTips(reasons: ValidityReason[]): string[] {
  const out = reasons.map((r) => REASON_TIPS[r]).filter(Boolean);
  return out.length ? out : ["Try again in a quiet room with headphones."];
}

const EAR_NEXT =
  "Please call us this week to book a hearing evaluation. If your hearing in one ear dropped suddenly, call today or see a doctor right away.";

/**
 * The wording to show for a result. When the ear check found a difference between
 * the ears, that finding comes first: a Good overall score must never say "check
 * again in a year" next to an ear difference. "look" is the band whose color to use.
 */
export function resultCopy(band: Band, asymmetry: { worseEar: "left" | "right" } | null) {
  const base = BAND_COPY[band];
  if (!asymmetry || band === "unreliable") return { ...base, look: band };
  if (band === "good") {
    return {
      label: "Ear check",
      headline: "One ear needs a closer look.",
      body:
        "You picked out the numbers well with both ears together. When we tested each ear alone, one scored lower than the other. There can be a simple reason, such as ear wax, but a difference between the ears is worth checking soon.",
      next: EAR_NEXT,
      look: "fair" as Band,
    };
  }
  return { ...base, next: EAR_NEXT, look: band };
}

/** One sentence on the support levels to ask about, or null when none are suggested. */
export function levelRangeText(band: Band): string | null {
  const range = BAND_LEVEL_RANGE[band];
  if (!range) return null;
  const [lo, hi] = range;
  const where = lo === hi ? `Level ${lo}` : `Level ${lo} to Level ${hi}`;
  return `With a result like this, people often ask about ${where} hearing technology. This is only a direction. Your audiologist will confirm what fits after an evaluation.`;
}

export function levelNotes(band: Band): { level: number; note: string }[] {
  const range = BAND_LEVEL_RANGE[band];
  if (!range) return [];
  return LEVELS.filter((l) => l.level >= range[0] && l.level <= range[1]);
}

export function earNote(summary: { asymmetry: { worseEar: "left" | "right" } | null }): string | null {
  if (!summary.asymmetry) return null;
  const side = summary.asymmetry.worseEar === "left" ? "left" : "right";
  // Only the finding. The result headline and next step carry the advice.
  return `Your ${side} ear scored lower than the other.`;
}

// Consent wording. CONSENT_VERSION is stored with every lead, so change it
// whenever either label below changes: it is the record of what the person agreed to.
export const CONSENT_VERSION = "2026-09-v1";

export const CONSENT_EMAIL_LABEL =
  "Yes, email me my report and a few helpful follow-up messages. I can unsubscribe at any time.";

export const CONSENT_CALL_LABEL = "It is okay for the practice to call me about my result.";
