"use client";

import { useEffect } from "react";
import { trackConversion, type ConversionName } from "./conversions";

// One delegated listener in the capture phase, rather than an onClick on each of
// the ~40 call, map, booking and social links scattered through the site. Two
// reasons: links rendered later (the mega-menu, the sticky mobile bar, anything
// a future page adds) are covered automatically, and there is exactly one place
// to look when a number stops moving.
//
// Capture phase specifically, because a tel: or outbound link starts a
// navigation that can tear the page down before a bubbled handler runs.

function classify(href: string, el: Element): ConversionName[] {
  const value = href.trim();

  if (value.startsWith("tel:")) {
    // A coarse pointer is the honest test for "could actually place this call",
    // which is what the existing mobile_click_to_call key event is asking. The
    // unqualified click_to_call is emitted alongside so there is still one
    // number that means every call intent, on any device.
    const coarse =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: coarse)").matches;
    return coarse ? ["click_to_call", "mobile_click_to_call"] : ["click_to_call"];
  }

  if (value.includes("google.com/maps") || value.includes("maps.app.goo.gl")) {
    return ["get_directions"];
  }

  if (value.includes("facebook.com")) {
    return ["facebook_outbound_click"];
  }

  // The booking CTA on this site is a link to the contact page. Distinguishing a
  // deliberate CTA click from an incidental one (a breadcrumb, a footer nav
  // entry) is the whole point — an undifferentiated "clicked a link to /contact"
  // would repeat the mistake the container made. So: only elements that present
  // as a button, and only ones whose text reads as a booking ask.
  const isContactLink = /^\/contact\/?($|[?#])/.test(value);
  if (isContactLink) {
    const looksLikeButton = el.classList.contains("button") || el.closest("[data-cta]") !== null;
    const label = (el.textContent || "").toLowerCase();
    const asksForAppointment = /appointment|schedule|book/.test(label);
    if (looksLikeButton && asksForAppointment) return ["schedule_an_appointment"];
  }

  return [];
}

export function ConversionTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      // Modified clicks open a new tab without leaving the page; they are still
      // real intent, so they count. Non-primary buttons do not.
      if (event.button !== 0) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const names = classify(href, anchor);
      if (names.length === 0) return;

      const params = {
        link_url: href,
        link_text: (anchor.textContent || "").trim().slice(0, 100),
        page_path: window.location.pathname,
      };

      for (const name of names) trackConversion(name, params);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
