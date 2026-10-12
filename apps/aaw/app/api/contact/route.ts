import { createContactHandler } from "@chc/core/contact";
import { AI_REFERRAL_SOURCE, REFERRAL_SOURCES } from "@/lib/contactForm";

// The delivery pipeline is shared with the sister site (packages/core/contact.ts).
// This file holds what is specific to Audiology Associates of Westchester: the
// sender and the inboxes, which fields are required, and the words shown to the
// visitor.

export const POST = createContactHandler({
  defaults: {
    from: "Audiology Associates <admin@hearing-care.org>",
    to: ["admin@hearing-care.org"],
    bcc: ["igor@hearing-care.org"],
  },
  referral: { sources: REFERRAL_SOURCES, aiSource: AI_REFERRAL_SOURCE },
  // Email-only "notify me" signups (components/NotifyForm.tsx) identify
  // themselves by a context that starts with "Notify:". They carry no name,
  // phone or message, so those are filled in here for this context only, and an
  // email becomes the one required field. Every other context keeps the
  // original requirements.
  prepare(payload, isNotify) {
    if (isNotify) {
      if (!payload.email) return "Please enter your email address.";
      payload.name = payload.name || "Email update signup";
      payload.phone = payload.phone || "Not provided";
      payload.message = payload.message || "Please email me once when this changes. Email only, no other details.";
    }
    if (!payload.name || !payload.phone || !payload.message) {
      return "Please provide your name, phone number, and message.";
    }
    return null;
  },
  subject: (payload, isNotify) =>
    isNotify ? `Email update signup (${payload.context})` : `Website contact form: ${payload.name}`,
  messages: {
    success: () => "Thank you. Your message has been sent and the practice can follow up with you.",
    notConfigured: "The online form is not configured for email delivery yet. Please call the practice directly.",
    failed: "The online form could not send just now. Please call the practice directly to schedule or confirm care.",
  },
});
