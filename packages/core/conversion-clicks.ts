import { useEffect } from "react";
import type { ConversionParams } from "./conversions-core";

/**
 * One delegated click listener that turns link clicks into conversion events.
 * Both sites use it. Each site passes the few rules that differ.
 *
 * One listener in the capture phase, rather than an onClick on each of the call,
 * map, booking and social links scattered through the site. Two reasons: links
 * rendered later (menus, sticky bars, third-party buttons that swap in after the
 * page loads) are covered automatically, and there is exactly one place to look
 * when a number stops moving.
 *
 * Capture phase specifically, because a tel: or outbound link starts a
 * navigation that can tear the page down before a bubbled handler runs.
 */

export type ClickConversion =
  | "click_to_call"
  | "mobile_click_to_call"
  | "get_directions"
  | "facebook_outbound_click"
  | "schedule_an_appointment";

export type ClickRules = {
  /** Matches the href of the practice's contact page. */
  contactPath: RegExp;
  /** True when the link looks like a button, not a breadcrumb or a footer entry. */
  looksLikeButton(el: Element): boolean;
  /** The words on a button that ask for a booking. */
  bookingLabel: RegExp;
  /** A link that exists only to book, such as a Zocdoc link. */
  directBooking?(href: string): boolean;
};

function classify(href: string, el: Element, rules: ClickRules): ClickConversion[] {
  const value = href.trim();

  if (value.startsWith("tel:")) {
    // A coarse pointer is the honest test for "could actually place this call",
    // which is what mobile_click_to_call is asking. The unqualified
    // click_to_call is emitted alongside so there is still one number that
    // means every call intent, on any device.
    const coarse =
      typeof window.matchMedia === "function" && window.matchMedia("(pointer: coarse)").matches;
    return coarse ? ["click_to_call", "mobile_click_to_call"] : ["click_to_call"];
  }

  if (value.includes("google.com/maps") || value.includes("maps.app.goo.gl")) {
    return ["get_directions"];
  }

  if (value.includes("facebook.com")) {
    return ["facebook_outbound_click"];
  }

  if (rules.directBooking?.(value)) return ["schedule_an_appointment"];

  // Telling a deliberate CTA click from an incidental one (a breadcrumb, a footer
  // nav entry) is the whole point: an undifferentiated "clicked a link to the
  // contact page" would count noise. So only elements that look like a button,
  // and only ones whose text reads as a booking ask.
  if (rules.contactPath.test(value) && rules.looksLikeButton(el)) {
    const label = (el.textContent || "").toLowerCase();
    if (rules.bookingLabel.test(label)) return ["schedule_an_appointment"];
  }

  return [];
}

export function useConversionClicks(
  track: (name: ClickConversion, params: ConversionParams) => void,
  rules: ClickRules
) {
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
      const names = classify(href, anchor, rules);
      if (names.length === 0) return;

      const params = {
        link_url: href,
        link_text: (anchor.textContent || "").trim().slice(0, 100),
        page_path: window.location.pathname,
      };

      for (const name of names) track(name, params);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [track, rules]);
}
