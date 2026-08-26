"use client";

import { useState, type FormEvent } from "react";
import { AI_REFERRAL_SOURCE, REASONS, REFERRAL_SOURCES } from "../lib/contactForm";
import { trackConversion } from "./conversions";

type Status = "idle" | "sending" | "success" | "error";

// Mirrors the Audiology Associates of Westchester ContactForm flow: same
// /api/contact endpoint contract (Resend), the same `website` honeypot, and the
// same dataLayer/fbq success events — so both sister sites behave identically.
// CHC keeps its own styling and adds preferred-office + reason. It also carries
// Westchester's referral question, including the follow-up that captures what a
// patient typed into an AI assistant — that traffic arrives with no referrer
// and no search terms, so asking is the only way to measure it. No PHI collected.
export function LeadForm({ context = "Contact page" }: { context?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [referralSource, setReferralSource] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          context,
          name: String(data.get("name") || ""),
          phone: String(data.get("phone") || ""),
          email: String(data.get("email") || ""),
          office: String(data.get("office") || ""),
          reason: String(data.get("reason") || ""),
          referralSource: String(data.get("referralSource") || ""),
          aiPrompt: String(data.get("aiPrompt") || ""),
          message: String(data.get("message") || ""),
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          website: String(data.get("website") || ""),
        }),
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        setStatus("error");
        setMessage(result?.message || "The form couldn’t send. Please call 650-342-9449.");
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(result?.message || "Thank you. Your request has been sent and our team can follow up with you.");

      // Same conversion signals as the sister site (no-ops until GTM / Pixel exist).
      const w = window as unknown as {
        dataLayer?: unknown[];
        fbq?: (...args: unknown[]) => void;
      };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "website_interaction",
        interaction_action: "contact-submit-success",
        interaction_label: context,
        interaction_href: typeof window !== "undefined" ? window.location.href : "",
      });
      if (w.fbq) w.fbq("trackCustom", "contact-submit-success");

      // The one event on this site that means a patient actually asked for
      // something. It fires only after the API has accepted the submission, so
      // it counts sent enquiries rather than attempts.
      trackConversion("contact_form_submit", {
        form_context: context,
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
      });
    } catch {
      setStatus("error");
      setMessage("The online form couldn’t send just now. Please call 650-342-9449 to schedule.");
    }
  }

  if (status === "success") {
    return (
      <div className="lead-form-done" role="status" aria-live="polite">
        <h3>Thank you — your request is on its way.</h3>
        <p>{message} If it’s urgent, call <a href="tel:6503429449">650-342-9449</a>.</p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={onSubmit} noValidate aria-labelledby="lead-form-title">
      <h3 id="lead-form-title">Request an appointment</h3>
      <p className="lead-form-sub">
        Tell us how to reach you and what you’re after. No medical details needed — we’ll take the
        history in person.
      </p>

      {/* Honeypot — hidden from people, catches bots. Matches sister-site field name. */}
      <label className="lead-hp" aria-hidden="true">
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="lead-grid">
        <label className="lead-field">
          <span>Name <em>*</em></span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="lead-field">
          <span>Phone</span>
          <input type="tel" name="phone" autoComplete="tel" inputMode="tel" />
        </label>
        <label className="lead-field">
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" inputMode="email" />
        </label>
        <label className="lead-field">
          <span>Preferred office</span>
          <select name="office" defaultValue="Either">
            <option value="San Mateo">San Mateo</option>
            <option value="San Carlos">San Carlos</option>
            <option value="Either">Either / not sure</option>
          </select>
        </label>
        <label className="lead-field lead-span">
          <span>What can we help with?</span>
          <select name="reason" defaultValue="">
            <option value="" disabled>Choose one…</option>
            {REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </label>
        <label className="lead-field lead-span">
          <span>How did you find us? <em className="lead-optional">(optional)</em></span>
          <select
            name="referralSource"
            value={referralSource}
            onChange={(event) => setReferralSource(event.target.value)}
          >
            <option value="">Prefer not to say</option>
            {REFERRAL_SOURCES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </label>
        {referralSource === AI_REFERRAL_SOURCE ? (
          <label className="lead-field lead-span">
            <span>What did you ask it? <em className="lead-optional">(optional — helps us a lot)</em></span>
            <input
              type="text"
              name="aiPrompt"
              maxLength={500}
              placeholder="e.g. best audiologist near San Mateo for tinnitus"
            />
          </label>
        ) : null}
        <label className="lead-field lead-span">
          <span>Anything else? <em className="lead-optional">(optional — please don’t include medical details)</em></span>
          <textarea name="message" rows={3} maxLength={600} />
        </label>
      </div>

      <p className="lead-consent">
        By submitting, you agree we may contact you about your request. This form isn’t for medical
        emergencies or sharing health details — for those, please call the office.
      </p>

      <button type="submit" className="button primary wide" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send request"}
      </button>

      {status === "error" && (
        <p className="lead-error" role="alert">{message}</p>
      )}
    </form>
  );
}
