import type { SitePage } from "@/lib/site";

// Richer copy for service pages whose text still comes from the 2026 crawl of
// the old Duda site. The crawl text is short and generic. An entry here
// replaces the body, FAQs and search snippet for one path and nothing else.
//
// The service page renderer shows the first three body strings as intro
// paragraphs. After that, a short line without end punctuation is read as a
// label for the paragraph that follows it. A line shaped like
// "Call ... appointment!" becomes the phone button. Keep labels at 48
// characters or fewer, and keep them free of end punctuation.
//
// Rules for this copy:
// - No prices, trial lengths, restocking terms or insurance networks. The
//   practice has not confirmed them for the web. Tell the reader to ask.
// - Real-ear measurement and live speech mapping are stated on the live site.
type ServicePageOverride = Partial<Pick<SitePage, "body" | "faqs" | "metaTitle" | "metaDescription">>;

export const servicePageOverrides: Record<string, ServicePageOverride> = {
  "/hearing-aid-fitting": {
    metaTitle: "Hearing Aid Fitting in Westchester, NY | Audiology Associates",
    metaDescription:
      "Hearing aid fitting with real-ear measurement, live speech mapping and follow-up care in Harrison and Somers, NY. Call us to book your fitting.",
    body: [
      "Getting a customized fitting is just as important as choosing the right hearing aid. At Audiology Associates of Westchester, we make sure your hearing aids are programmed to your hearing, checked in your ear canal, and comfortable to wear. We serve patients across White Plains, NY; Harrison, NY; Scarsdale, NY; Rye, NY; Mt. Kisco, NY; Somers, NY; and Greenwich, CT.",
      "A fitting is more than handing over a device. Your audiologist sets the hearing aids from your hearing test results, measures what they deliver at your eardrum, and shows you how to handle, clean and charge them. The visits that follow fine-tune the sound after you have worn them in real rooms.",
      "Hearing aids that fit well also stay put, stay quiet, and need fewer adjustments. If you already own hearing aids that feel wrong, a fitting visit can help you too.",
      "Programming to your hearing test",
      "Your audiologist programs each hearing aid to the pattern of your own hearing loss. Factory settings are built on averages, and no two ears are the same. Programming also covers where and when you plan to use the devices, such as quiet rooms, restaurants, the car, meetings and phone calls.",
      "Real-ear measurement",
      "Real-ear measurement uses a thin, soft probe tube placed in the ear canal near the eardrum. It measures what the hearing aid actually delivers and compares it with a target for your hearing loss. Many audiologists consider it the best way to confirm a fitting. We use real-ear measurement at every fitting, because a device that looks right on a screen can still miss the target in your ear.",
      "Live speech mapping",
      "Live speech mapping uses the same probe microphones to show the benefit of your hearing aids in real time. You can see how speech sounds change as your audiologist adjusts the devices, and you can hear the difference at the same moment.",
      "Fit, comfort and style",
      "Your audiologist checks how each device sits in the ear, whether it stays in place, and whether it whistles. If you wear glasses or masks, use a phone often, or want a discreet device, say so at the fitting. Small receiver-in-canal models, in-the-ear styles and invisible options each suit different ears and different hearing losses.",
      "What happens at the visit",
      "Your audiologist confirms the devices and checks the fit in both ears. The hearing aids are programmed to your prescription. Real-ear measurement checks the result at your eardrum. You practice insertion, cleaning, charging and phone pairing before you leave. A follow-up visit is then planned for after you have worn the devices for a week or two.",
      "Getting used to new hearing aids",
      "Getting used to hearing aids takes time, usually a few weeks or months. Wear them as much as you can and be patient. The brain needs time to relearn sounds it has not heard clearly in years. A deeper hearing loss usually takes longer. Keep a log of times when you did not hear well, and bring it to your next visit so your audiologist can adjust the devices to match.",
      "Follow-up care",
      "Follow-up care is part of a good fitting. Ask what follow-up visits are included, and for how long, before you buy. Please get that in writing. If you need more adjustments or reprogramming in the future, call us.",
      "Trial period and return terms",
      "Every provider sets its own trial period, return terms and fees. Ask each one to give you the trial length, the return terms and any restocking fee in writing. Ask us about ours when you book.",
      "Hearing aids from another provider",
      "If you bought your hearing aids somewhere else, call ahead with the brand and model. In many cases we can help with adjustments, cleaning or reprogramming. Your audiologist will tell you what is possible for your device.",
      "Dr. Cliff Approved Provider",
      "Audiology Associates of Westchester is a Dr. Cliff Approved Provider. Dr. Cliff is a doctor of audiology whose videos explain hearing aid care to patients.",
      "Call Us Today to Schedule an Appointment!"
    ],
    faqs: [
      {
        question: "What is real-ear measurement?",
        answer:
          "Real-ear measurement uses a thin probe tube in your ear canal to measure what your hearing aid delivers near your eardrum. Your audiologist compares that result with a target for your hearing loss and adjusts the device to match."
      },
      {
        question: "How long does it take to get used to hearing aids?",
        answer:
          "Most people need a few weeks to a few months. The brain needs time to relearn sounds. Wear the devices as much as you can and keep a note of the situations that are hard."
      },
      {
        question: "Why do I need follow-up visits?",
        answer:
          "Your first week or two with hearing aids shows what you need in real rooms. Follow-up visits let your audiologist fine-tune comfort, clarity and settings based on what you tell us."
      },
      {
        question: "Can you adjust hearing aids I bought somewhere else?",
        answer:
          "In many cases, yes. Call ahead with the brand and model so the team can tell you what is possible for your device."
      },
      {
        question: "How much do hearing aids cost, and will insurance help?",
        answer:
          "Price depends on the technology level, the style and the care included. Our cost guide and our insurance guide explain the ranges and the rules for Medicare, New York Medicaid and Connecticut plans. Call us to talk through your own situation."
      },
      {
        question: "What should I ask about the trial period?",
        answer:
          "Ask for the trial length, the return terms and any restocking fee in writing before you buy. Ask us about ours when you book."
      }
    ]
  }
};
