"use client";

import { useState, type FormEvent } from "react";

const REASONS = [
  "Hearing test / evaluation",
  "Hearing aids",
  "Tinnitus or sound sensitivity",
  "Hearing aid repair",
  "Insurance or cost question",
  "Something else",
];

// A deliberately minimal, non-PHI lead form: name + a way to reach back, plus
// low-sensitivity context. It posts JSON to /api/lead, which forwards to the
// practice's inbox (the access key stays server-side). We ask patients NOT to
// include medical details so nothing sensitive travels through the form.
export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.company) {
      setStatus("ok"); // honeypot: silently accept bots
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
        setError(json.error || "Something went wrong. Please call 650-342-9449.");
      }
    } catch {
      setStatus("error");
      setError("We couldn’t reach the server. Please call 650-342-9449.");
    }
  }

  if (status === "ok") {
    return (
      <div className="lead-form-done" role="status" aria-live="polite">
        <h3>Thank you — your request is on its way.</h3>
        <p>
          A member of our team will reach out within one business day to help you pick a time and the
          right office. If it’s urgent, call <a href="tel:6503429449">650-342-9449</a>.
        </p>
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

      {/* Honeypot: hidden from people, catches bots. */}
      <div className="lead-hp" aria-hidden="true">
        <label>Company<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>

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
        <p className="lead-error" role="alert">{error}</p>
      )}
    </form>
  );
}
