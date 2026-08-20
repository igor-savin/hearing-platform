// Shared between the contact form and the API route that receives it. The
// options existed in both files for a moment and that is exactly how an
// allowlist drifts out of step with the field it is meant to validate: the
// form offers a value, the route silently discards it, and nobody finds out
// because a dropped optional field looks the same as an unanswered one.

// Why this question exists: a patient who arrives through a conversation with
// an AI assistant carries no search terms and often no referrer, so analytics
// cannot see them at all. Asking is the only reliable measurement, and the
// wording they used is more useful than the fact of the visit.
export const AI_REFERRAL_SOURCE = "An AI assistant (ChatGPT, Gemini, Claude, Perplexity)";

export const REFERRAL_SOURCES = [
  "Google or another search engine",
  AI_REFERRAL_SOURCE,
  "Referred by a doctor",
  "Friend or family member",
  "Insurance directory",
  "Social media",
  "I am a returning patient",
  "Other"
];
