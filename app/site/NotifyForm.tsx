"use client";

import { useId, useState, type FormEvent } from "react";
import { trackConversion } from "./conversions";

type Status = "idle" | "sending" | "success" | "error";

// Email-only "tell me when this changes" signup for news pages. It posts to the
// same /api/contact/ endpoint as LeadForm, with the same `website` honeypot and
// the same success events, so a signup is delivered to the practice inbox by the
// existing Resend route. `context` must start with "Notify:" -- the route keys
// off that prefix to accept an email-only submission. No health information is
// asked for or sent.
export function NotifyForm({
  context,
  heading,
  body,
  button,
}: {
  context: string;
  heading: string;
  body: string;
  button: string;
}) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

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
          email: String(data.get("email") || ""),
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          website: String(data.get("website") || ""),
        }),
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        setStatus("error");
        setMessage(result?.message || "The signup couldn’t send. Please try again in a moment.");
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(result?.message || "Thank you. We will send you one email when there is news.");

      // Same conversion signals as LeadForm (no-ops until GTM / Pixel exist).
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
      trackConversion("contact_form_submit", {
        form_context: context,
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
      });
    } catch {
      setStatus("error");
      setMessage("The signup couldn’t send just now. Please try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <section className="notify-form notify-form-done" role="status" aria-live="polite">
        <h2>You are on the list.</h2>
        <p>{message}</p>
      </section>
    );
  }

  return (
    <section className="notify-form" aria-labelledby={`${uid}-h`}>
      <h2 id={`${uid}-h`}>{heading}</h2>
      <p>{body}</p>
      <form onSubmit={onSubmit} noValidate>
        {/* Honeypot: hidden from people, catches bots. Same field name as LeadForm. */}
        <label className="lead-hp" aria-hidden="true">
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <div className="notify-row">
          <label htmlFor={`${uid}-e`} className="notify-label">Email address</label>
          <input id={`${uid}-e`} type="email" name="email" required autoComplete="email" inputMode="email" placeholder="you@example.com" />
          <button type="submit" className="button primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : button}
          </button>
        </div>
        <p className="notify-privacy">We use your email only to send this update. No health information.</p>
        {status === "error" && <p className="lead-error" role="alert">{message}</p>}
      </form>
    </section>
  );
}
