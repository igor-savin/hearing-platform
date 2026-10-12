"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

// Email-only "notify me" capture. It posts to the same /api/contact endpoint as
// ContactForm, with the same honeypot field (`website`), and identifies its
// source through `context` (which must start with "Notify:" so the route treats
// it as an email-only signup). It deliberately does not fire the
// contact_form_submit conversion: a signup is not a patient enquiry.
export function NotifyForm({
  body,
  button,
  context,
  heading
}: {
  body: string;
  button: string;
  context: string;
  heading: string;
}) {
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
          pageUrl: window.location.href,
          website: String(data.get("website") || "")
        }),
        headers: { "Content-Type": "application/json" },
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
      setMessage("Thank you. We will send you one email when there is news.");

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "website_interaction",
        interaction_action: "notify-submit-success",
        interaction_label: context,
        interaction_href: window.location.href
      });
      if (window.fbq) window.fbq("trackCustom", "notify-submit-success");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "The form could not send just now. Please try again in a little while."
      );
    }
  }

  return (
    <section aria-labelledby="notify-heading" className="mt-12 border border-[#dedede] bg-[#f0f7fb] p-7">
      <h2 className="text-[28px] font-black leading-tight text-[#262626]" id="notify-heading">
        {heading}
      </h2>
      <p className="mt-3 text-[19px] leading-[1.5] text-[#333]">{body}</p>
      <form className="mt-5 grid max-w-[560px] gap-3" onSubmit={onSubmit}>
        <label className="grid gap-[6px] text-[15px] font-bold text-[#333]">
          Email address
          <input
            autoComplete="email"
            className="focus-ring h-[48px] border border-[#bcbcbc] bg-white px-[10px] text-[16px] font-normal text-[#333]"
            name="email"
            required
            type="email"
          />
        </label>
        <label className="hidden">
          Website
          <input autoComplete="off" name="website" tabIndex={-1} type="text" />
        </label>
        <button
          className="focus-ring inline-flex min-h-[48px] w-fit items-center justify-center bg-[#005a9c] px-[30px] py-[14px] text-[16px] font-bold uppercase tracking-[0.04em] text-white disabled:cursor-not-allowed disabled:opacity-70"
          data-track="notify-submit"
          disabled={status === "sending"}
          type="submit"
        >
          {status === "sending" ? "Sending..." : button}
        </button>
        {message ? (
          <div
            className={
              status === "success"
                ? "rounded-lg border border-[#b9dcc8] bg-[#f0fbf4] px-4 py-3 text-[#174b2a]"
                : "rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800"
            }
            role="status"
          >
            <p className="text-[17px] font-bold leading-6">{message}</p>
          </div>
        ) : null}
        <p className="text-[13px] leading-5 text-[#555]">
          We use your email only to send this update. No health information.
        </p>
      </form>
    </section>
  );
}
