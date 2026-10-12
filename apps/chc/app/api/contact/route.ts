import { createContactHandler, isValidEmail } from "@chc/core/contact";
import { AI_REFERRAL_SOURCE, OFFICES, REASONS, REFERRAL_SOURCES } from "../../lib/contactForm";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// The delivery pipeline is shared with the sister site (packages/core/contact.ts).
// This file holds what is specific to California Hearing Center: two extra
// fields (preferred office, reason) because the practice runs two offices, the
// sender and the inbox, and the words shown to the visitor.

export const POST = createContactHandler({
  // Sending identity. hearing-care.org is the domain verified in Resend (it
  // carries the resend._domainkey DKIM record), which is why mail leaves from
  // there rather than from calhearing.com. That domain is not set up in Resend.
  //
  // Where enquiries land: the practice inbox, already published on the careers
  // page. CONTACT_FORM_TO_EMAIL overrides this and takes a comma-separated list,
  // so adding a second reader is an environment change, not a deploy.
  defaults: {
    from: "California Hearing Center <admin@hearing-care.org>",
    to: ["infochc@hearing-care.org"],
    bcc: [],
  },
  referral: { sources: REFERRAL_SOURCES, aiSource: AI_REFERRAL_SOURCE },
  extraFields: [
    { key: "office", label: "Preferred office", max: 80, options: OFFICES, emptyLabel: "Not specified" },
    { key: "reason", label: "Reason", max: 120, options: REASONS, emptyLabel: "Not specified" },
  ],
  // "Notify me" signups (NotifyForm) send an email and nothing else. They are
  // recognised by their context label, and only they skip the name/phone rule.
  prepare(payload, isNotify) {
    if (isNotify) {
      if (!payload.email || !isValidEmail(payload.email)) return "Please enter a valid email address.";
      payload.name = "Update signup (email only)";
      payload.message = "Asked to be emailed once when this changes. Email only; no health information collected.";
      return null;
    }
    if (!payload.name || (!payload.phone && !payload.email)) {
      return "Please provide your name and a phone number or email.";
    }
    return null;
  },
  subject: (payload, isNotify) =>
    isNotify
      ? `Update signup: ${payload.context.slice("Notify:".length).trim()}`
      : `Website contact form: ${payload.name}`,
  messages: {
    success: (isNotify) =>
      isNotify
        ? "Thank you. We will send you one email when there is news."
        : "Thank you. Your request has been sent and our team can follow up with you.",
    notConfigured:
      "The online form isn’t configured for email delivery yet. Please call the practice at 650-342-9449.",
    failed: "The online form couldn’t send just now. Please call the practice at 650-342-9449 to schedule.",
  },
});
