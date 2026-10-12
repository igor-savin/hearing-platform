"use client";

import { useConversionClicks, type ClickRules } from "@chc/core/conversion-clicks";
import { trackConversion } from "@/lib/conversions";

// The click listener lives in the shared core package. This file holds the rules
// that belong to this site: two booking paths. Zocdoc is unambiguous. The
// contact page counts only when the link looks like a button.
const RULES: ClickRules = {
  contactPath: /^\/contact-us\/?($|[?#])/,
  directBooking: (href) => href.includes("zocdoc.com"),
  looksLikeButton: (el) =>
    el.getAttribute("data-type") === "book-button" ||
    /\brounded-md\b|\bbtn\b|\bbutton\b/.test(el.className || "") ||
    el.closest("[data-cta]") !== null,
  bookingLabel: /appointment|schedule|book|consultation/,
};

export function ConversionTracking() {
  useConversionClicks(trackConversion, RULES);
  return null;
}
