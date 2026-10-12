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

import { createConversionTracker, type ConversionName as CoreConversionName } from "@chc/core/conversions-core";

export type { ConversionParams } from "@chc/core/conversions-core";

// AAW sends every shared event except the two that only CHC has.
export type ConversionName = Exclude<CoreConversionName, "hearing_plan_use" | "hero_cta_click">;

// The "aaw." prefix names the dataLayer copy of each event.
export const trackConversion = createConversionTracker<ConversionName>("aaw");
