"use client";

import { FormEvent, useState } from "react";
import { AI_REFERRAL_SOURCE, REFERRAL_SOURCES } from "@/lib/contactForm";
import { trackConversion } from "@/lib/conversions";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ context = "General contact" }: { context?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  // Drives the follow-up question below. Kept in state rather than toggled with
  // CSS so the prompt field is genuinely absent from the form -- and from the
  // submission -- for the patients it does not apply to.
  const [referralSource, setReferralSource] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({
          aiPrompt: String(data.get("aiPrompt") || ""),
          context,
          email: String(data.get("email") || ""),
          message: String(data.get("message") || ""),
          name: String(data.get("name") || ""),
          pageUrl: window.location.href,
          phone: String(data.get("phone") || ""),
          referralSource: String(data.get("referralSource") || ""),
          website: String(data.get("website") || "")
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        setStatus("error");
        setMessage(result?.message || "The form could not send.");
        return;
      }

      form.reset();
      setReferralSource("");
      setStatus("success");
      setMessage(result?.message || "Thank you. Your message has been sent and the practice can follow up with you.");

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "website_interaction",
        interaction_action: "contact-submit-success",
        interaction_label: context,
        interaction_href: window.location.href
      });
      if (window.fbq) window.fbq("trackCustom", "contact-submit-success");

      // The one event on this site that means a patient actually asked for
      // something. It fires only after the API has accepted the submission, so
      // it counts sent enquiries rather than attempts.
      trackConversion("contact_form_submit", {
        form_context: context,
        page_path: window.location.pathname
      });
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "The online form could not send just now. Please call the practice directly to schedule or confirm care."
      );
    }
  }

  return (
    <form className="legacy-contact-form grid gap-[13px] bg-white text-left" onSubmit={onSubmit}>
      <div className="grid gap-[13px] md:grid-cols-2">
        <label className="grid gap-[6px] text-[15px] font-bold text-[#333]">
          Name
          <input
            className="focus-ring h-[42px] border border-[#bcbcbc] bg-white px-[10px] text-[16px] font-normal text-[#333]"
            name="name"
            required
            type="text"
          />
        </label>
        <label className="grid gap-[6px] text-[15px] font-bold text-[#333]">
          Phone
          <input
            className="focus-ring h-[42px] border border-[#bcbcbc] bg-white px-[10px] text-[16px] font-normal text-[#333]"
            name="phone"
            type="tel"
          />
        </label>
      </div>
      <label className="grid gap-[6px] text-[15px] font-bold text-[#333]">
        Email
        <input
          className="focus-ring h-[42px] border border-[#bcbcbc] bg-white px-[10px] text-[16px] font-normal text-[#333]"
          name="email"
          type="email"
        />
        <span className="text-[13px] font-normal leading-5 text-[#666]">
          A phone number or an email address is enough — whichever you prefer we use.
        </span>
      </label>
      <label className="hidden">
        Website
        <input autoComplete="off" name="website" tabIndex={-1} type="text" />
      </label>
      <label className="grid gap-[6px] text-[15px] font-bold text-[#333]">
        How did you find us? <span className="font-normal text-[#666]">(optional)</span>
        <select
          className="focus-ring h-[42px] border border-[#bcbcbc] bg-white px-[10px] text-[16px] font-normal text-[#333]"
          name="referralSource"
          onChange={(event) => setReferralSource(event.target.value)}
          value={referralSource}
        >
          <option value="">Prefer not to say</option>
          {REFERRAL_SOURCES.map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </select>
      </label>
      {referralSource === AI_REFERRAL_SOURCE ? (
        <label className="grid gap-[6px] text-[15px] font-bold text-[#333]">
          What did you ask it? <span className="font-normal text-[#666]">(optional)</span>
          <input
            className="focus-ring h-[42px] border border-[#bcbcbc] bg-white px-[10px] text-[16px] font-normal text-[#333]"
            name="aiPrompt"
            placeholder="e.g. best audiologist near White Plains for tinnitus"
            type="text"
          />
          <span className="text-[13px] font-normal leading-5 text-[#666]">
            Knowing the exact wording helps us make sure these tools point people to accurate hearing-care information.
          </span>
        </label>
      ) : null}
      <label className="grid gap-[6px] text-[15px] font-bold text-[#333]">
        Message <span className="font-normal text-[#666]">(optional)</span>
        <textarea
          className="focus-ring min-h-[118px] border border-[#bcbcbc] bg-white px-[10px] py-[9px] text-[16px] font-normal text-[#333]"
          name="message"
        />
      </label>
      <button
        className="focus-ring mt-[4px] inline-flex min-h-[42px] w-fit items-center justify-center bg-[#005a9c] px-[30px] py-[12px] text-[15px] font-bold uppercase tracking-[0.04em] text-white disabled:cursor-not-allowed disabled:opacity-70"
        data-track="contact-submit"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
      {message ? (
        <div
          className={
            status === "success"
              ? "mt-[8px] rounded-lg border border-[#b9dcc8] bg-[#f0fbf4] px-5 py-4 text-[#174b2a] shadow-sm"
              : "mt-[8px] rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-red-800"
          }
          role="status"
        >
          {status === "success" ? (
            <div className="flex gap-3">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1f8f4d] text-[16px] font-black text-white">
                ✓
              </span>
              <div>
                <p className="text-[22px] font-black leading-tight">Thank you — your message was sent.</p>
                <p className="mt-2 text-[17px] leading-7">{message}</p>
              </div>
            </div>
          ) : (
            <p className="text-[18px] font-bold leading-7">{message}</p>
          )}
        </div>
      ) : null}
      <p className="text-[13px] leading-5 text-[#555]">
        Do not use this form for emergencies. Appointment availability and clinical recommendations
        should be confirmed directly with the practice.
      </p>
    </form>
  );
}
