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
        <p className={status === "success" ? "text-[#333]" : "text-red-700"} role="status">
          {message}
        </p>
      ) : null}
      <p className="text-[13px] leading-5 text-[#555]">
        Do not use this form for emergencies. Appointment availability and clinical recommendations
        should be confirmed directly with the practice.
      </p>
    </form>
  );
}
