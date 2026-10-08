// Conversion tracking, owned by the site.
//
// The sister site (calhearing.com) was found to have eight months of conversion
// data that meant nothing: its tag-manager container was built for a WordPress
// site, and after the platform move three of its conversion tags were
// permanently dead while the one still reporting large numbers fired on any
// click whose element text happened to contain the header CTA's label. It was
// counting clicks, not appointments.
//
// This site's container (GTM-T6X664N) has not been audited for the same rot, and
// it does not need to be: conversion tracking that matches on markup breaks
// silently every time the markup changes. So the site names its own conversions,
// from the code that owns the action.
//
// Each call does two things:
//   1. gtag('event', ...) — reaches the GA4 property this page configures.
//   2. dataLayer.push with an "aaw." prefix — inert today, but lets anyone with
//      container access wire these up later without touching this code. The
//      prefix guarantees it can never collide with a built-in GTM trigger name.
//
// One local wrinkle: AnalyticsScripts defers every loader until first
// interaction or twelve seconds. The gtag shim below is what keeps an early
// click from being dropped on the floor.

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
  // Home page hero graphic. Same names on the sister site so the two compare.
  | "hero_play_click"          // Play / Pause journey (params: action, stage)
  | "hero_sound_toggle"        // Sound on / off (params: state)
  | "hero_stage_select"        // a stage was picked (params: stage, source)
  | "hero_mode_toggle"         // Natural hearing / With hearing aid (params: mode)
  | "scroll_depth";            // home page reached 25 / 50 / 75 / 100 percent (params: percent, page)

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

  w.dataLayer.push({ event: `aaw.${name}`, ...params });
}
