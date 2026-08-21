// Shared between the lead form and the API route that receives it. Keeping the
// option lists in one place is the whole point: when they live in both files,
// the form offers a value, the route silently discards it, and nobody finds out
// — a dropped optional field looks exactly like an unanswered one.

// Why this question exists at all: a patient who arrives through a conversation
// with an AI assistant carries no search terms and usually no referrer, so
// analytics cannot see them. Asking is the only reliable measurement, and the
// wording they used is far more useful than the bare fact of the visit.
export const AI_REFERRAL_SOURCE = "An AI assistant (ChatGPT, Gemini, Claude, Perplexity)";

export const REFERRAL_SOURCES = [
  "Google or another search engine",
  AI_REFERRAL_SOURCE,
  "Referred by a doctor",
  "Friend or family member",
  "Insurance directory",
  "Social media",
  "I am a returning patient",
  "Other",
];

export const REASONS = [
  "Hearing test / evaluation",
  "Hearing aids",
  "Tinnitus or sound sensitivity",
  "Hearing aid repair",
  "Senior living community visit",
  "Insurance or cost question",
  "Something else",
];

export const OFFICES = ["San Mateo", "San Carlos", "Either"];

// The selects mean a person cannot submit anything else, but the API is a public
// endpoint and a direct POST can send whatever it likes. Anything off-list is
// dropped rather than forwarded: a free-text field on a healthcare form is an
// invitation to paste things that should not land in an inbox.
export function allowed(value: string, list: string[]) {
  return list.includes(value) ? value : "";
}
