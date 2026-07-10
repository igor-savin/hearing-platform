"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ context = "General contact" }: { context?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({
          context,
          email: String(data.get("email") || ""),
          message: String(data.get("message") || ""),
          name: String(data.get("name") || ""),
          pageUrl: window.location.href,
          phone: String(data.get("phone") || ""),
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
            required
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
      </label>
      <label className="hidden">
        Website
        <input autoComplete="off" name="website" tabIndex={-1} type="text" />
      </label>
      <label className="grid gap-[6px] text-[15px] font-bold text-[#333]">
        Message
        <textarea
          className="focus-ring min-h-[118px] border border-[#bcbcbc] bg-white px-[10px] py-[9px] text-[16px] font-normal text-[#333]"
          name="message"
          required
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
