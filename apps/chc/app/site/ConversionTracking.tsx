"use client";

import { useConversionClicks, type ClickRules } from "@chc/core/conversion-clicks";
import { trackConversion } from "./conversions";

// The click listener lives in the shared core package. This file holds the rules
// that belong to this site: the booking CTA is a link to /contact, styled with
// the `button` class or placed inside a [data-cta] wrapper.
const RULES: ClickRules = {
  contactPath: /^\/contact\/?($|[?#])/,
  looksLikeButton: (el) => el.classList.contains("button") || el.closest("[data-cta]") !== null,
  bookingLabel: /appointment|schedule|book/,
};

export function ConversionTracking() {
  useConversionClicks(trackConversion, RULES);
  return null;
}
