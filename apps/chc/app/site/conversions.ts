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

import { createConversionTracker, type ConversionName as CoreConversionName } from "@chc/core/conversions-core";

export type { ConversionParams } from "@chc/core/conversions-core";

// CHC sends every event the shared core defines.
export type ConversionName = CoreConversionName;

// The "chc." prefix names the dataLayer copy of each event.
export const trackConversion = createConversionTracker<ConversionName>("chc");
