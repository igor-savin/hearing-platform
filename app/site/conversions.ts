// Conversion tracking, owned by the site.
//
// Why this file exists at all: the GTM container (GTM-M9CDTZP) that used to
// carry conversion tracking was built for the old WordPress site, and its
// triggers match on DOM text and WooCommerce URLs that no longer exist here.
// Three of its eight conversion tags are now permanently dead, and the one that
// still reported large numbers — Schedule_Appointment — fired on ANY click whose
// clicked-element text contained "SCHEDULE AN APPOINTMENT". Because GTM's
// all-elements click trigger reports the text of every ancestor of the thing you
// clicked, that matched almost any click on a page whose header carried the CTA.
// It was counting clicks, not appointments.
//
// The lesson is not "fix the triggers". It is that conversion tracking which
// lives in a tag manager and matches on markup breaks silently every time the
// markup changes, and nobody notices for eight months. So the site now names its
// own conversions, from the code that owns the action.
//
// Each call does two things:
//   1. gtag('event', ...) — reaches the GA4 property this page configures.
//   2. dataLayer.push with a "chc." prefix — inert today, but lets anyone with
//      access to the container wire these into the second property later without
//      touching this code. The prefix guarantees it can never collide with a
//      built-in GTM trigger name (notably "form_submit", which the container's
//      Contact_Form_Submission tag still listens for).

type ConversionParams = Record<string, string | number | boolean>;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

/**
 * Names are deliberate. The four lowercase ones already exist as key events in
 * the GA4 property and have never had anything sending them; emitting exactly
 * these names brings them to life with no analytics-admin work.
 */
export type ConversionName =
  | "click_to_call"            // every tel: click, any device
  | "mobile_click_to_call"     // tel: click on a touch device
  | "get_directions"           // click through to Google Maps
  | "schedule_an_appointment"  // click on a booking CTA
  | "facebook_outbound_click"  // click through to the practice's Facebook page
  | "contact_form_submit"      // the form actually sent
  | "hearing_plan_use";         // a Hearing Plan tool was used (tool name only, never content)

export function trackConversion(name: ConversionName, params: ConversionParams = {}) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;

  // Standing up the shim rather than bailing when gtag is missing matters: the
  // sister site defers its analytics loader until first interaction, so an early
  // click would otherwise be dropped. Pushing the arguments object is what
  // gtag.js itself does — it drains the queue when it loads.
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== "function") {
    w.gtag = function gtagShim() {
      // eslint-disable-next-line prefer-rest-params
      (w.dataLayer as unknown[]).push(arguments);
    };
  }
  w.gtag("event", name, params);

  w.dataLayer.push({ event: `chc.${name}`, ...params });
}
