/**
 * SHARED FILE. Byte-for-byte the same in California-Hearing-Center and
 * Audiology-Associates. Change it in both, or in neither. Check with:
 *   node scripts/check-shared.mjs
 * (Phase 2 of the platform plan moves this into one shared package.)
 *
 * What it does: one tracker per site, built with the site's event prefix.
 * Each call does two things:
 *   1. gtag('event', ...) reaches the GA4 property the page configures.
 *   2. dataLayer.push with a "<prefix>." name is inert until someone wires it up
 *      in the tag manager. The prefix cannot collide with a built-in trigger.
 *
 * Why it stands up a gtag shim: analytics tags start on first touch or after
 * 12 seconds on both sites. Without the shim an early click would be dropped.
 * Pushing the arguments object is what gtag.js does; it drains the queue when
 * it loads.
 */

export type ConversionParams = Record<string, string | number | boolean>;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

/**
 * Every event name either site may send. A site narrows this list in its own
 * wrapper. Names are deliberate: the lowercase ones already exist as key events
 * in the GA4 properties.
 */
export type ConversionName =
  | "click_to_call"            // every tel: click, any device
  | "mobile_click_to_call"     // tel: click on a touch device
  | "get_directions"           // click through to Google Maps
  | "schedule_an_appointment"  // click on a booking CTA
  | "facebook_outbound_click"  // click through to the practice's Facebook page
  | "contact_form_submit"      // the form actually sent
  | "hearing_plan_use"         // a Hearing Plan tool was used (tool name only, never content)
  // Home page hero graphic. Same names on both sites so the two compare.
  | "hero_play_click"          // Play / Pause journey (params: action, stage)
  | "hero_sound_toggle"        // Sound on / off (params: state)
  | "hero_stage_select"        // a stage was picked (params: stage, source)
  | "hero_mode_toggle"         // Natural hearing / With hearing aid (params: mode)
  | "hero_cta_click"           // a hero button or link (params: cta)
  | "scroll_depth";            // home page reached 25 / 50 / 75 / 100 percent (params: percent, page)

export function createConversionTracker<Name extends ConversionName>(prefix: string) {
  return function trackConversion(name: Name, params: ConversionParams = {}) {
    if (typeof window === "undefined") return;
    const w = window as AnalyticsWindow;

    w.dataLayer = w.dataLayer || [];
    if (typeof w.gtag !== "function") {
      w.gtag = function gtagShim() {
        // eslint-disable-next-line prefer-rest-params
        (w.dataLayer as unknown[]).push(arguments);
      };
    }
    w.gtag("event", name, params);

    w.dataLayer.push({ event: `${prefix}.${name}`, ...params });
  };
}
