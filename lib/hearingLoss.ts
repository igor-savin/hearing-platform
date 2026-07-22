import type { SitePage } from "@/lib/site";

const baseUrl = "https://www.audiologyassociates.org";

// Hearing-loss condition hub: one overview page + a set of condition/type pages.
// Content is educational (not diagnostic) and mirrors the site's careful tone,
// with NIDCD/ASHA sources and a clinical-team review byline for E-E-A-T.

export const hearingLossRootPath = "/hearing-loss";

const photo = (name: string, alt: string) => ({
  src: `/assets/blog-seed/photo-v2/${name}-photo-v2.webp`,
  alt
});

const REVIEWED_BY = "Reviewed by the Audiology Associates of Westchester clinical team";
const LOCAL_CTA =
  "Audiology Associates of Westchester evaluates hearing concerns at our Harrison and Somers, NY offices, serving Westchester County and nearby communities. A hearing test connects what you notice day to day to a clear, personalized next step.";
const SAFETY =
  "Seek prompt medical care for sudden hearing loss, hearing loss in one ear, severe dizziness, drainage or bleeding, significant ear pain, facial weakness, or tinnitus that pulses with your heartbeat. Educational information cannot diagnose an individual ear.";

type Condition = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  pullQuote: string;
  patientQuestion: string;
  hero: { src: string; alt: string };
  body: string[];
  keyTakeaways: string[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
  sources: { label: string; href: string }[];
};

const conditions: Condition[] = [
  {
    slug: "sensorineural-hearing-loss",
    title: "Sensorineural Hearing Loss",
    metaTitle: "Sensorineural Hearing Loss | Audiology Associates of Westchester",
    metaDescription:
      "What sensorineural hearing loss is, what causes it, and how it is evaluated and managed — from Audiology Associates of Westchester in Harrison and Somers, NY.",
    pullQuote:
      "Sensorineural hearing loss is the most common permanent type, and hearing aids are the most common way to restore access to sound.",
    patientQuestion: "Is sensorineural hearing loss permanent, and can it be treated?",
    hero: photo(
      "what-high-frequency-hearing-loss-sounds-like",
      "Adult straining to follow speech that sounds muffled from sensorineural hearing loss"
    ),
    body: [
      "Sensorineural hearing loss is the most common type of permanent hearing loss. It happens when the tiny hair cells in the inner ear (the cochlea) or the auditory nerve that carries sound to the brain are damaged. Because these structures do not regenerate, this type of loss is usually permanent — but it is very often manageable.",
      "What it feels like",
      "Many people describe sounds as present but unclear: you can hear that someone is talking, but individual words blur, especially in background noise. High-pitched sounds — children's voices, consonants like s, f, and th — are often the first to fade.",
      "Common causes",
      "The most frequent contributors are aging and cumulative noise exposure. Genetics, certain medications that can affect the ear (ototoxic drugs), viral illness, and medical conditions can also play a role. Often more than one factor is involved.",
      "How it is evaluated",
      "A comprehensive hearing evaluation measures the softest sounds you can hear across pitches and how clearly you understand speech. Those results show the pattern and degree of loss and guide the recommendation, whether that is hearing aids, medical referral, or monitoring.",
      "How it is managed",
      "Because the loss is in the inner ear, sound needs to be made clearer and better organized rather than simply louder. Well-fit hearing aids are the most common solution. For severe or profound loss where hearing aids no longer provide enough clarity, a cochlear implant evaluation may be appropriate.",
      "When to move faster",
      SAFETY,
      "A practical next step",
      LOCAL_CTA
    ],
    keyTakeaways: [
      "Sensorineural loss involves the inner ear or hearing nerve and is usually permanent.",
      "It typically makes speech unclear rather than simply quiet, especially in noise.",
      "Hearing aids are the most common treatment; cochlear implants help when loss is severe."
    ],
    faqs: [
      {
        question: "Can sensorineural hearing loss be reversed?",
        answer:
          "In most cases it is permanent because inner-ear hair cells do not regrow. Sudden sensorineural hearing loss is the important exception — it is a medical urgency, and prompt treatment can sometimes recover hearing."
      },
      {
        question: "Will hearing aids help sensorineural hearing loss?",
        answer:
          "Usually yes. Modern hearing aids are designed for exactly this pattern, improving clarity in conversation and noise. A hearing evaluation and fitting determine the right technology and settings."
      },
      {
        question: "How do I know how severe mine is?",
        answer:
          "A comprehensive hearing test grades the loss from mild to profound across pitches and measures speech understanding, which together guide the plan."
      }
    ],
    related: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Age-Related Hearing Loss", href: "/hearing-loss/age-related-hearing-loss" },
      { label: "Noise-Induced Hearing Loss", href: "/hearing-loss/noise-induced-hearing-loss" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" }
    ],
    sources: [
      { label: "NIDCD: Hearing Loss", href: "https://www.nidcd.nih.gov/health/hearing-ear-infections-deafness" }
    ]
  },
  {
    slug: "conductive-hearing-loss",
    title: "Conductive Hearing Loss",
    metaTitle: "Conductive Hearing Loss | Audiology Associates of Westchester",
    metaDescription:
      "Conductive hearing loss explained — outer- and middle-ear causes, why it is often treatable, and how it is evaluated in Harrison and Somers, NY.",
    pullQuote:
      "Conductive hearing loss is a blockage of sound in the outer or middle ear — and unlike most hearing loss, it is often reversible.",
    patientQuestion: "My ear feels blocked and sounds are muffled — is that conductive hearing loss?",
    hero: photo(
      "ear-fullness-no-pain-hearing-loss",
      "Adult touching the ear while sound feels blocked from conductive hearing loss"
    ),
    body: [
      "Conductive hearing loss happens when something keeps sound from passing efficiently through the outer or middle ear to the inner ear. Sounds seem muffled or quiet, as if your ears are plugged. Unlike sensorineural loss, conductive loss is frequently treatable — and sometimes fully reversible.",
      "Common causes",
      "Earwax buildup, fluid or infection in the middle ear, a perforated eardrum, otosclerosis (abnormal bone growth), or a problem with the tiny middle-ear bones can all block sound. In children, middle-ear fluid is especially common.",
      "What it feels like",
      "People often describe fullness or pressure, their own voice sounding louder or hollow, and speech that is soft but not necessarily unclear once it is loud enough. Symptoms may come and go if the cause is fluid or wax.",
      "How it is evaluated",
      "An ear examination plus a hearing test and middle-ear (tympanometry) testing show whether sound is being blocked and where. This helps separate a conductive problem from an inner-ear one — and points to whether medical treatment, cerumen management, or a device is the right path.",
      "How it is managed",
      "Because the issue is a blockage, treatment targets the cause: removing wax, treating an infection, or a medical or surgical referral when appropriate. When a conductive component is permanent, hearing aids or other devices can help.",
      "When to move faster",
      SAFETY,
      "A practical next step",
      LOCAL_CTA
    ],
    keyTakeaways: [
      "Conductive loss is a blockage in the outer or middle ear, so sound is muffled or quiet.",
      "Common causes — wax, fluid, infection — are often treatable or reversible.",
      "An exam plus hearing and middle-ear testing pinpoints the cause and the fix."
    ],
    faqs: [
      {
        question: "Is conductive hearing loss permanent?",
        answer:
          "Often not. Many causes, such as earwax or middle-ear fluid, can be treated. Some causes are longer lasting and may need medical care or a device — an evaluation clarifies which applies."
      },
      {
        question: "Can earwax really cause hearing loss?",
        answer:
          "Yes. A fully blocked ear canal can noticeably reduce hearing and cause fullness. An examination confirms whether wax is the cause before any removal, because not every plugged sensation is wax."
      },
      {
        question: "Do I need a hearing aid for conductive hearing loss?",
        answer:
          "Not always. If the cause is treatable, addressing it may restore hearing. When a conductive loss is permanent, hearing aids or bone-conduction options can help."
      }
    ],
    related: [
      { label: "Earwax Removal", href: "/how-we-can-help/earwax-removal" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "How to Take Care of a Blocked Ear", href: "/how-to-take-care-of-a-blocked-ear" },
      { label: "Mixed Hearing Loss", href: "/hearing-loss/mixed-hearing-loss" }
    ],
    sources: [
      { label: "ASHA: Conductive Hearing Loss", href: "https://www.asha.org/public/hearing/conductive-hearing-loss/" }
    ]
  },
  {
    slug: "mixed-hearing-loss",
    title: "Mixed Hearing Loss",
    metaTitle: "Mixed Hearing Loss | Audiology Associates of Westchester",
    metaDescription:
      "Mixed hearing loss combines conductive and sensorineural components. Learn how it is identified and managed at Audiology Associates of Westchester.",
    pullQuote:
      "Mixed hearing loss has two parts — a treatable blockage layered on top of a permanent inner-ear loss.",
    patientQuestion: "What does it mean to have both conductive and sensorineural hearing loss?",
    hero: photo(
      "one-ear-hearing-loss-when-to-get-checked",
      "Adult discussing a combined hearing loss pattern with an audiologist"
    ),
    body: [
      "Mixed hearing loss means both a conductive problem (a blockage in the outer or middle ear) and a sensorineural problem (inner-ear or nerve involvement) are present at the same time. In practice, a treatable component sits on top of a more permanent one.",
      "Why it happens",
      "A person with long-standing age- or noise-related inner-ear loss might also develop earwax, an ear infection, or middle-ear fluid. The result is a hearing loss with two contributors that each need attention.",
      "How it is evaluated",
      "The same comprehensive testing used for other hearing loss — thresholds, speech understanding, and middle-ear measures — reveals the mixed pattern by showing both a blockage and inner-ear involvement.",
      "How it is managed",
      "Care often addresses the conductive part first, since it may be reversible, and then supports the remaining sensorineural loss with well-fit hearing aids. Sequencing matters, which is why a clear evaluation is the starting point.",
      "When to move faster",
      SAFETY,
      "A practical next step",
      LOCAL_CTA
    ],
    keyTakeaways: [
      "Mixed loss combines a conductive (often treatable) and a sensorineural (usually permanent) component.",
      "Testing identifies both parts so each can be addressed in the right order.",
      "Treating the blockage first and then fitting hearing aids is a common path."
    ],
    faqs: [
      {
        question: "Can the conductive part of mixed hearing loss be fixed?",
        answer:
          "Sometimes. If the conductive component is caused by wax, fluid, or infection, treating it may improve hearing. The sensorineural component usually remains and is supported with hearing aids."
      },
      {
        question: "How is mixed hearing loss diagnosed?",
        answer:
          "A comprehensive hearing evaluation with middle-ear testing shows both a blockage and inner-ear involvement, which together define a mixed loss."
      }
    ],
    related: [
      { label: "Sensorineural Hearing Loss", href: "/hearing-loss/sensorineural-hearing-loss" },
      { label: "Conductive Hearing Loss", href: "/hearing-loss/conductive-hearing-loss" },
      { label: "Hearing Testing", href: "/hearing-testing" }
    ],
    sources: [
      { label: "ASHA: Mixed Hearing Loss", href: "https://www.asha.org/public/hearing/mixed-hearing-loss/" }
    ]
  },
  {
    slug: "age-related-hearing-loss",
    title: "Age-Related Hearing Loss (Presbycusis)",
    metaTitle: "Age-Related Hearing Loss (Presbycusis) | Audiology Associates",
    metaDescription:
      "Age-related hearing loss (presbycusis) is gradual and common. Learn the signs and what helps, from Audiology Associates of Westchester in Harrison and Somers, NY.",
    pullQuote:
      "Age-related hearing loss is gradual and easy to miss — which is exactly why a baseline hearing test matters.",
    patientQuestion: "Is it normal to lose some hearing as I get older, and should I do anything about it?",
    hero: photo(
      "is-hearing-loss-normal-with-age",
      "Older adult enjoying a conversation with family after addressing age-related hearing loss"
    ),
    body: [
      "Age-related hearing loss, or presbycusis, is the gradual reduction in hearing that develops over years. It is one of the most common conditions affecting older adults, and because it comes on slowly and usually affects both ears equally, many people do not notice it at first — friends and family often do.",
      "What it feels like",
      "High-pitched sounds fade first, so speech can seem mumbled and hard to follow in restaurants or group conversations even when quiet listening feels fine. Turning up the TV, asking for repeats, and listening fatigue are common early signs.",
      "Why it happens",
      "It reflects the cumulative effects of aging on the inner ear, often combined with a lifetime of noise exposure, family history, and general health factors such as circulation. It is a sensorineural loss, so it is typically permanent.",
      "Why it is worth addressing",
      "Untreated hearing loss is linked with more listening effort, social withdrawal, and communication strain. Addressing it early tends to make the adjustment to hearing aids easier and helps keep everyday conversation and connection intact.",
      "How it is managed",
      "A comprehensive hearing evaluation establishes a baseline and, when appropriate, guides a hearing aid fitting matched to your lifestyle. Even a first visit that finds only mild change is useful, because it gives you a reference point to track over time.",
      "When to move faster",
      SAFETY,
      "A practical next step",
      LOCAL_CTA
    ],
    keyTakeaways: [
      "Presbycusis is gradual, affects both ears, and takes the high pitches first.",
      "It is permanent but very manageable, most often with hearing aids.",
      "A baseline hearing test is valuable even when the loss is still mild."
    ],
    faqs: [
      {
        question: "At what age should I get my hearing checked?",
        answer:
          "Many adults benefit from a baseline hearing test around their mid-50s to 60s, and sooner if they notice difficulty. Establishing a baseline makes future changes easier to track."
      },
      {
        question: "Is age-related hearing loss preventable?",
        answer:
          "The aging component is not, but protecting your ears from loud noise throughout life can reduce added damage. Once present, it is managed rather than cured."
      },
      {
        question: "Do I need hearing aids in both ears?",
        answer:
          "Because presbycusis usually affects both ears, two hearing aids often provide the most natural, balanced hearing. Your evaluation determines what fits your pattern and goals."
      }
    ],
    related: [
      { label: "Is Hearing Loss Normal With Age?", href: "/is-hearing-loss-normal-with-age" },
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Sensorineural Hearing Loss", href: "/hearing-loss/sensorineural-hearing-loss" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" }
    ],
    sources: [
      { label: "NIDCD: Age-Related Hearing Loss", href: "https://www.nidcd.nih.gov/health/age-related-hearing-loss" }
    ]
  },
  {
    slug: "noise-induced-hearing-loss",
    title: "Noise-Induced Hearing Loss",
    metaTitle: "Noise-Induced Hearing Loss | Audiology Associates of Westchester",
    metaDescription:
      "How loud noise damages hearing, the warning signs, and how to prevent noise-induced hearing loss — from Audiology Associates of Westchester.",
    pullQuote:
      "Noise-induced hearing loss is almost entirely preventable — and the damage it causes is permanent.",
    patientQuestion: "Can loud noise permanently damage my hearing, and how do I protect it?",
    hero: photo(
      "noise-induced-hearing-loss-prevention",
      "Person wearing hearing protection near loud equipment to prevent noise-induced hearing loss"
    ),
    body: [
      "Noise-induced hearing loss is caused by exposure to loud sound — either a single intense blast or, more often, repeated exposure over months and years. It is one of the few types of hearing loss that is largely preventable, yet the damage, once done, is permanent.",
      "How loud is too loud",
      "Sound is measured in decibels, and risk rises quickly as levels climb. Extended exposure to power tools, loud music, firearms, motorcycles, or industrial equipment can all contribute. A useful rule of thumb: if you must raise your voice to be heard an arm's length away, the environment is loud enough to matter.",
      "What it feels like",
      "It often starts with temporary muffling or ringing after a loud event, then becomes a permanent high-frequency loss. A classic pattern is a dip in hearing around 4,000 Hz that makes speech clarity suffer while lower pitches still sound normal.",
      "How to prevent it",
      "Custom or well-fit hearing protection, distance from the source, lower volumes, and breaks from noise all reduce risk. For musicians, hunters, and people with loud jobs or hobbies, custom protection preserves comfort and sound quality while lowering the dose.",
      "How it is evaluated and managed",
      "A hearing test can reveal early noise-related changes, often before they affect everyday conversation. Damage cannot be reversed, but hearing aids can help once loss affects communication, and protection prevents further decline.",
      "When to move faster",
      SAFETY,
      "A practical next step",
      LOCAL_CTA
    ],
    keyTakeaways: [
      "Loud noise causes permanent, but largely preventable, hearing damage.",
      "It often shows first as a high-frequency dip that blurs speech clarity.",
      "Custom hearing protection and a baseline hearing test are the best defenses."
    ],
    faqs: [
      {
        question: "Does noise-induced hearing loss come back?",
        answer:
          "Temporary muffling or ringing after a loud event may fade, but permanent damage does not recover. That is why prevention and early testing matter."
      },
      {
        question: "Are custom earplugs worth it?",
        answer:
          "For regular exposure — work, music, shooting — custom protection is more comfortable and preserves sound quality better than foam, so people are more likely to wear it consistently."
      },
      {
        question: "Can one loud event cause lasting damage?",
        answer:
          "Yes. A single very loud blast can cause permanent loss or tinnitus. Sudden change in hearing after noise exposure should be evaluated promptly."
      }
    ],
    related: [
      { label: "Hearing Protection", href: "/how-we-can-help/hearing-protection" },
      { label: "Prevent Hearing Loss", href: "/prevent-hearing-loss" },
      { label: "Understanding Hearing Loss at 4,000 Hz", href: "/understanding-hearing-loss-at-4000-hz" },
      { label: "Hearing Testing", href: "/hearing-testing" }
    ],
    sources: [
      { label: "NIDCD: Noise-Induced Hearing Loss", href: "https://www.nidcd.nih.gov/health/noise-induced-hearing-loss" }
    ]
  },
  {
    slug: "sudden-hearing-loss",
    title: "Sudden Hearing Loss",
    metaTitle: "Sudden Hearing Loss: Why Not to Wait | Audiology Associates",
    metaDescription:
      "Sudden hearing loss is a medical urgency. Learn the warning signs and why fast evaluation matters — Audiology Associates of Westchester, Harrison & Somers, NY.",
    pullQuote:
      "Sudden hearing loss is a medical urgency: the sooner it is evaluated, the better the chance of recovery.",
    patientQuestion: "I lost hearing in one ear quickly — is that an emergency?",
    hero: photo(
      "sudden-hearing-loss-why-not-wait",
      "Person seeking prompt care after a rapid drop in hearing in one ear"
    ),
    body: [
      "Sudden sensorineural hearing loss is a rapid drop in hearing — usually in one ear, often noticed on waking or over a few hours to a few days. Unlike gradual hearing loss, it is treated as a medical urgency, because prompt care can meaningfully improve the odds of recovery.",
      "Why timing matters",
      "Treatment, when appropriate, is most effective when it begins quickly — generally within the first days to a couple of weeks. Waiting to 'see if it comes back' can reduce the chance of regaining hearing.",
      "Signs to take seriously",
      "A clear, sudden reduction in one ear, a feeling of fullness, new ringing, or dizziness that accompanies the change all warrant urgent evaluation. It is easy to mistake sudden loss for a plugged ear or wax, which is one reason a professional assessment is important.",
      "What to do",
      "Do not wait it out. Contact a medical provider or audiologist right away, or seek urgent care, so the cause can be assessed and time-sensitive treatment considered without delay.",
      "This is when to move faster",
      SAFETY,
      "How we can help",
      LOCAL_CTA
    ],
    keyTakeaways: [
      "Sudden hearing loss — often in one ear — is a medical urgency, not a wait-and-see issue.",
      "Prompt treatment, ideally within days, improves the chance of recovery.",
      "New one-sided loss, fullness, ringing, or dizziness should be evaluated right away."
    ],
    faqs: [
      {
        question: "Is sudden hearing loss an emergency?",
        answer:
          "It should be treated as urgent. Seek care right away rather than waiting, because time-sensitive treatment can improve recovery when it is started early."
      },
      {
        question: "Could it just be earwax?",
        answer:
          "Sometimes a blocked ear is wax, but sudden sensorineural hearing loss can feel similar and needs prompt evaluation. It is safer to have it checked quickly than to assume."
      },
      {
        question: "Can sudden hearing loss be treated?",
        answer:
          "In many cases, yes — especially when addressed early. A prompt evaluation determines the cause and whether time-sensitive treatment is appropriate."
      }
    ],
    related: [
      { label: "Sudden Hearing Loss — Why Not to Wait", href: "/sudden-hearing-loss-why-not-wait" },
      { label: "Audiologist vs ENT for Hearing Loss", href: "/audiologist-vs-ent-for-hearing-loss" },
      { label: "Hearing Testing", href: "/hearing-testing" }
    ],
    sources: [
      { label: "NIDCD: Sudden Deafness", href: "https://www.nidcd.nih.gov/health/sudden-deafness" }
    ]
  }
];

function conditionPage(c: Condition): SitePage {
  const path = `${hearingLossRootPath}/${c.slug}`;
  return {
    path,
    url: `${baseUrl}${path}`,
    title: c.title,
    metaTitle: c.metaTitle,
    metaDescription: c.metaDescription,
    h1: c.title,
    type: "blog-post",
    lastModified: "2026-07-21",
    canonical: `${baseUrl}${path}`,
    heroImage: c.hero,
    images: [c.hero],
    sections: [],
    body: c.body,
    faqs: c.faqs,
    related: c.related,
    blogMeta: {
      frame: "Hearing loss condition guide",
      byline: "Audiology Associates of Westchester",
      reviewedBy: REVIEWED_BY,
      readTime: "5 min read",
      articleType: "Condition guide",
      pullQuote: c.pullQuote,
      keyTakeaways: c.keyTakeaways,
      patientQuestion: c.patientQuestion,
      storyLead: "Understanding the type of hearing loss is the first step toward the right next step.",
      sources: c.sources
    }
  };
}

const hubHero = photo(
  "first-signs-of-hearing-loss-family-notice",
  "Family noticing the first signs of hearing loss and talking about getting a hearing test"
);

const hubPage: SitePage = {
  path: hearingLossRootPath,
  url: `${baseUrl}${hearingLossRootPath}`,
  title: "Types of Hearing Loss",
  metaTitle: "Types of Hearing Loss: Causes & Next Steps | Audiology Associates",
  metaDescription:
    "A clear guide to the types and causes of hearing loss — sensorineural, conductive, mixed, age-related, noise-induced, and sudden — from Audiology Associates of Westchester.",
  h1: "Understanding Hearing Loss",
  type: "blog-post",
  lastModified: "2026-07-21",
  canonical: `${baseUrl}${hearingLossRootPath}`,
  heroImage: hubHero,
  images: [hubHero],
  sections: [],
  body: [
    "Hearing loss is not one condition — it is a family of them, and the right next step depends on which type you have. Some kinds are permanent but very manageable with hearing aids; others are a blockage that can be treated or even reversed; and one, sudden hearing loss, is a medical urgency. This guide explains the main types so you can recognize what you are noticing and know when to act.",
    "The two main categories",
    "Most hearing loss is either sensorineural (a permanent inner-ear or nerve loss, the most common type) or conductive (a blockage in the outer or middle ear that is often treatable). When both are present at once, it is called mixed hearing loss.",
    "By cause",
    "Hearing loss is also described by what caused it. Age-related hearing loss (presbycusis) develops gradually over years. Noise-induced hearing loss comes from loud-sound exposure and is largely preventable. Sudden hearing loss appears rapidly, usually in one ear, and should be evaluated right away.",
    "Explore each type",
    "Sensorineural hearing loss is the most common permanent type and is usually managed with hearing aids. Conductive hearing loss is a blockage in the outer or middle ear that is often treatable, and mixed hearing loss combines the two. Age-related hearing loss (presbycusis) develops gradually with aging, noise-induced hearing loss is preventable damage from loud sound, and sudden hearing loss is a rapid drop that should be treated as a medical urgency. You can open any of these guides from the related links on this page.",
    "How any hearing loss is evaluated",
    "Whatever the type, the starting point is the same: a comprehensive hearing evaluation that measures what you can hear across pitches and how clearly you understand speech, along with an ear examination. Those findings identify the type and degree of loss and point to the right plan — treatment, a hearing aid fitting, medical referral, or monitoring.",
    "When to move faster",
    SAFETY,
    "A practical next step",
    LOCAL_CTA
  ],
  faqs: [
    {
      question: "What are the main types of hearing loss?",
      answer:
        "The two main types are sensorineural (inner ear or nerve, usually permanent) and conductive (a treatable blockage in the outer or middle ear). Mixed hearing loss involves both. Hearing loss is also described by cause — age-related, noise-induced, or sudden."
    },
    {
      question: "Which type of hearing loss is most common?",
      answer:
        "Sensorineural hearing loss is the most common permanent type, frequently from aging and noise exposure. It is usually managed effectively with hearing aids."
    },
    {
      question: "How do I find out which type I have?",
      answer:
        "A comprehensive hearing evaluation with an ear examination and middle-ear testing identifies the type and degree of your hearing loss and guides the right next step."
    }
  ],
  related: [
    { label: "Sensorineural Hearing Loss", href: "/hearing-loss/sensorineural-hearing-loss" },
    { label: "Conductive Hearing Loss", href: "/hearing-loss/conductive-hearing-loss" },
    { label: "Mixed Hearing Loss", href: "/hearing-loss/mixed-hearing-loss" },
    { label: "Age-Related Hearing Loss", href: "/hearing-loss/age-related-hearing-loss" },
    { label: "Noise-Induced Hearing Loss", href: "/hearing-loss/noise-induced-hearing-loss" },
    { label: "Sudden Hearing Loss", href: "/hearing-loss/sudden-hearing-loss" },
    { label: "Hearing Testing", href: "/hearing-testing" }
  ],
  blogMeta: {
    frame: "Hearing loss condition hub",
    byline: "Audiology Associates of Westchester",
    reviewedBy: REVIEWED_BY,
    readTime: "6 min read",
    articleType: "Condition hub",
    pullQuote:
      "The right next step for hearing loss depends on its type — and identifying the type is what a hearing evaluation is for.",
    keyTakeaways: [
      "Hearing loss is sensorineural, conductive, or mixed — and described by cause (age, noise, sudden).",
      "Sensorineural loss is most common and usually managed with hearing aids.",
      "Sudden hearing loss is a medical urgency; get it evaluated right away."
    ],
    patientQuestion: "What kind of hearing loss do I have, and what should I do about it?",
    storyLead: "Knowing the type of hearing loss turns a vague worry into a clear next step.",
    sources: [
      { label: "NIDCD: Hearing Loss", href: "https://www.nidcd.nih.gov/health/hearing-ear-infections-deafness" }
    ]
  }
};

export const hearingLossPages: SitePage[] = [hubPage, ...conditions.map(conditionPage)];
