import type { SitePage } from "../data/crawledPages";
import { crawledPages } from "../data/crawledPages";

type MenuLink = [label: string, href: string];
type ProductMenuLink = [title: string, text: string, href: string, image: string];
type NavItem = {
  label: string;
  href: string;
  items?: MenuLink[];
  mega?: boolean;
};
type PageContent = {
  kicker: string;
  headline: string;
  intro: string[];
  sections: [string, string][];
  bullets: string[];
  takeaways?: string[];
  faqs?: [string, string][];
  image: string;
  imageLabel: string;
};

const scheduleUrl =
  "https://www.zocdoc.com/practice/california-hearing-and-research-institute-inc-72249";

const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us/",
    items: [
      ["Kira Savin", "/about-us/kira-savin/"],
      ["Lais Ama", "/about-us/lais-ama/"],
      ["Giana Hatem", "/about-us/giana-hatem/"],
      ["Jennifer Ratner", "/about-us/jennifer-ratner/"],
      ["Darcy Benson", "/about-us/darcy-benson/"],
      ["Emily McMahan", "/about-us/emily-mcmahan/"],
      ["Jarna Kothari", "/about-us/jarna-kothari/"],
      ["Career", "/about-us/career/"],
    ],
  },
  {
    label: "Services",
    href: "/services/",
    items: [
      ["Hearing Testing", "/hearing-testing/"],
      ["Hearing Aid Fitting", "/hearing-aid-fitting/"],
      ["Tinnitus Therapy", "/services/tinnitus-therapy/"],
      ["Tinnitus Knowledge Hub", "/tinnitus/"],
      ["What is Tinnitus?", "/tinnitus/what-is-tinnitus/"],
      ["Tinnitus Causes & Triggers", "/tinnitus/causes/"],
      ["Tinnitus Treatment & Relief Options", "/tinnitus/exercises/"],
      ["Sudden or Worsening Tinnitus", "/tinnitus/sudden-onset/"],
      ["Pulsatile Tinnitus", "/tinnitus/pulsatile/"],
      ["Hearing Protection", "/services/hearing-protection/"],
      ["Hearing Aid Repair", "/services/hearing-aid-repair/"],
      ["Hyperacusis", "/hyperacusis/"],
    ],
  },
  { label: "Service Areas", href: "/areas-we-serve/" },
  {
    label: "Hearing Aids",
    href: "/products/hearing-aids-by-brand/",
    mega: true,
  },
  {
    label: "Resources",
    href: "/resources/",
    items: [
      ["Blog", "/the-blog/"],
      ["Hearing Healthcare Resources", "/resources/"],
      ["A Patient's Journey to Better Hearing", "/a-patients-journey-to-better-hearing/"],
      ["Insurance", "/resources/insurance/"],
      ["HearingUp Approved Provider", "/resources/hearingup-approved-provider/"],
      ["Audiology Associates of Westchester", "/audiology-associates-of-westchester/"],
    ],
  },
  { label: "Reviews", href: "/reviews/" },
  {
    label: "Contact",
    href: "/contact/",
    items: [
      ["Contact Us", "/contact/"],
      ["San Carlos", "/contact/san-carlos/"],
      ["San Mateo", "/contact/san-mateo/"],
    ],
  },
];

const team = ["Kira Savin", "Lais Ama", "Giana Hatem", "Jennifer Ratner", "Darcy Benson", "Emily McMahan", "Jarna Kothari"];

const services = [
  ["Hearing Testing", "/hearing-testing/", "Thorough evaluations built around your lifestyle, communication goals, and listening environments."],
  ["Hearing Aid Fitting", "/hearing-aid-fitting/", "Personalized fittings, real-ear verification, adjustments, and ongoing support."],
  ["Tinnitus Therapy", "/services/tinnitus-therapy/", "Evidence-based relief plans for ringing, buzzing, sleep disruption, and sound sensitivity."],
  ["Hearing Protection", "/services/hearing-protection/", "Custom protection for musicians, law enforcement, hunters, work, travel, and daily life."],
  ["Hearing Aid Repair", "/services/hearing-aid-repair/", "Cleaning, troubleshooting, repairs, and fine-tuning for better performance."],
  ["Hyperacusis", "/hyperacusis/", "Care for sound sensitivity with careful evaluation, counseling, and gradual sound strategies."],
];

const products = [
  ["Oticon Intent", "BrainHearing™ technology for natural, effortless hearing in noise.", "/assets/oticon.webp"],
  ["Phonak Lyric", "Invisible extended-wear hearing with total discretion.", "/assets/phonak.webp"],
  ["Widex Allure", "Natural clarity from a family-owned innovator.", "/assets/widex.webp"],
  ["ReSound Vivia", "Award-winning connectivity and refined everyday sound.", "/assets/resound.webp"],
  ["Starkey Edge AI", "American innovation with AI-powered adaptive listening.", "/assets/starkey.webp"],
  ["Signia IX", "Rechargeable hearing aids with over a century of engineering.", "/assets/signia.webp"],
];

const hearingAidColumns: ProductMenuLink[][] = [
  [
    ["Oticon Intent", "Oticon's BrainHearing™ technology enables natural, effortless hearing even in noisy settings.", "/products/hearing-aids-by-brand/oticon/oticon-intent/", "/assets/oticon.webp"],
    ["Phonak Lyric", "Invisible, extended-wear Lyric Hearing Aids deliver exceptional sound with total discretion.", "/products/hearing-aids-by-brand/phonak/phonak-lyric/", "/assets/phonak.webp"],
    ["Widex Allure", "Family-owned since 1956, delivering natural sound clarity with innovative technology.", "/products/hearing-aids-by-brand/widex/widex-allure/", "/assets/widex.webp"],
  ],
  [
    ["Oticon Zeal", "The world's first invisible hearing aid with complete connectivity.", "/products/hearing-aids-by-brand/oticon/oticon-zeal/", "/assets/oticon-zeal.png"],
    ["Phonak Infinio", "Swiss engineering, AI dual-chip technology, and universal connectivity ensure unmatched clarity.", "/products/hearing-aids-by-brand/phonak/phonak-infinio/", "/assets/phonak-infinio.webp"],
    ["ReSound Vivia", "Pioneering award-winning hearing solutions and connectivity advancements since 1943.", "/products/hearing-aids-by-brand/resound/resound-vivia/", "/assets/resound.webp"],
  ],
  [
    ["Starkey Edge AI", "Pioneered American innovation, cutting-edge styles with AI-powered adaptive technology.", "/products/hearing-aids-by-brand/starkey/starkey-edge-ai/", "/assets/starkey.webp"],
    ["Signia IX", "Innovative, rechargeable hearing aids with over a century of excellence.", "/products/hearing-aids-by-brand/signia/signia-ix/", "/assets/signia.webp"],
    ["Ear Gear", "Custom earplugs and earmolds for all your hearing needs-serving the Bay Area.", "/products/eargear/", "/assets/ear-gear.webp"],
  ],
];

const tinnitus = [
  ["What is Tinnitus?", "/tinnitus/what-is-tinnitus/"],
  ["Causes & Triggers", "/tinnitus/causes/"],
  ["Treatment Options", "/tinnitus/"],
  ["Sound Therapy", "/tinnitus/sound-therapy/"],
  ["Pulsatile Tinnitus", "/tinnitus/pulsatile/"],
  ["Sleep Strategies", "/tinnitus/sleep-strategies/"],
];

const featuredRoutes = [
  "/", "/services/", "/products/hearing-aids/", "/contact/", "/contact/san-carlos/", "/contact/san-mateo/",
  "/areas-we-serve/", "/tinnitus/", "/resources/", "/reviews/",
];

const bespokeContent: Record<string, PageContent> = {
  "/services/": {
    kicker: "Services",
    headline: "Hearing care for every part of life",
    intro: [
      "California Hearing Center brings together thorough diagnostics, thoughtful counseling, modern hearing technology, and long-term follow-up care. The goal is not just to sell a device; it is to understand how hearing affects your daily life and build a plan that makes restaurants, work, family conversations, music, travel, and quiet moments easier again.",
      "Patients visit us for many reasons: a baseline hearing test, hearing aids, tinnitus care, custom hearing protection, hearing aid repairs, earwax management, or help choosing the next step. Each service starts with listening carefully to what you notice and what you want to change.",
      "With offices in San Mateo and San Carlos, our audiology team supports Bay Area patients with care that is clinical, practical, and personal."
    ],
    sections: [
      ["A complete hearing evaluation", "We look beyond volume and measure how you hear speech, how background noise affects you, and what listening situations matter most in your life."],
      ["Technology fit around you", "If hearing aids are recommended, we match the style and features to your hearing, dexterity, phone use, work life, and comfort preferences."],
      ["Care after the first visit", "Follow-up programming, cleanings, repairs, counseling, and education help patients get the most out of treatment over time."],
      ["Communication support", "Hearing care often includes practical coaching for family conversations, restaurants, meetings, television, phone calls, and social settings."],
      ["When medical referral is needed", "Ear pain, drainage, sudden hearing changes, dizziness, one-sided symptoms, or pulsatile tinnitus may need medical evaluation in addition to audiology care."]
    ],
    bullets: ["Hearing testing", "Hearing aid fitting", "Tinnitus therapy", "Hearing protection", "Repairs and adjustments", "Earwax removal"],
    takeaways: ["Comprehensive care includes testing, counseling, technology, repairs, protection, and follow-up.", "Recommendations should connect test results to real-life listening goals.", "The best outcomes usually come from ongoing support, not a single appointment."],
    faqs: [["What audiology services does California Hearing Center provide?", "The practice provides hearing evaluations, hearing aid consultations and fittings, tinnitus support, custom hearing protection, hearing aid repairs, earwax-related care, and follow-up support."], ["Do I need a hearing test before choosing hearing aids?", "Yes. A current hearing evaluation helps determine the type, degree, and pattern of hearing loss so technology can be selected and programmed appropriately."], ["Which office should I visit?", "Patients can contact the team for help choosing San Mateo or San Carlos based on availability, location, and the type of appointment needed."]],
    image: "/assets/doctor.jpg",
    imageLabel: "Doctor-level audiology care"
  },
  "/hearing-testing/": {
    kicker: "Hearing Testing",
    headline: "A thorough hearing test tells the real story",
    intro: [
      "A hearing evaluation at California Hearing Center is designed to answer more than whether you can hear beeps. We look at the full picture: your hearing thresholds, speech understanding, listening effort, ear health, lifestyle, and the moments where hearing feels hardest.",
      "Many people wait until hearing loss is obvious, but earlier testing gives you a baseline and helps separate hearing loss from earwax, noise exposure, tinnitus, medication changes, or everyday communication strain.",
      "After testing, we explain the results clearly and talk through practical next steps, whether that means monitoring, medical referral, hearing technology, tinnitus support, or communication strategies."
    ],
    sections: [
      ["What we measure", "Pure-tone thresholds, speech understanding, and real-world listening concerns help us understand both the ear and the communication experience."],
      ["Who should be tested", "Adults noticing muffled speech, asking for repetition, turning up the television, struggling in restaurants, or experiencing ringing should schedule a baseline evaluation."],
      ["What happens next", "You leave with clear results, plain-language guidance, and recommendations that fit your needs rather than a one-size-fits-all plan."],
      ["Why speech testing matters", "Two people can have similar audiograms but very different speech understanding, especially in background noise. Speech testing helps explain those real-world differences."],
      ["When not to wait", "Sudden hearing loss, new one-sided hearing changes, dizziness, ear pain, drainage, or sudden tinnitus should be addressed promptly rather than waiting for a routine checkup."]
    ],
    bullets: ["Baseline testing", "Speech understanding", "Noise difficulty", "Ear health review", "Clear explanation", "Personal recommendations"],
    takeaways: ["A hearing test should explain both hearing thresholds and real-world communication.", "Testing can help separate hearing loss from earwax, tinnitus, or other ear concerns.", "Prompt evaluation matters when symptoms appear suddenly or affect one ear."],
    faqs: [["What happens during a hearing test?", "A hearing test usually includes a case history, ear health review, pure-tone testing, speech testing, and a conversation about what the results mean for everyday listening."], ["How often should adults get their hearing checked?", "Adults should consider a baseline test if they notice difficulty hearing, tinnitus, noise exposure history, or family concern. Adults over 50 often benefit from periodic monitoring."], ["Can a hearing test show whether I need hearing aids?", "A hearing test can show whether hearing aids may help, but the recommendation also depends on communication goals, lifestyle, speech understanding, and patient preference."]],
    image: "/assets/doctor.jpg",
    imageLabel: "Comprehensive testing"
  },
  "/hearing-aid-fitting/": {
    kicker: "Hearing Aid Fitting",
    headline: "Better hearing depends on a better fit",
    intro: [
      "A hearing aid fitting is where technology becomes personal. The right devices need to match your hearing prescription, ear anatomy, comfort, phone use, hands, lifestyle, and the listening places you care about most.",
      "California Hearing Center uses careful programming and verification to help hearing aids sound clear, natural, and useful in real life. We spend time teaching you how to wear, charge, clean, adjust, and troubleshoot your devices.",
      "The first fitting is only the beginning. Follow-up visits help fine-tune comfort and clarity as your brain adjusts to hearing more sound again."
    ],
    sections: [
      ["Verification matters", "Real-ear measurement and careful programming help ensure the devices are doing what they are supposed to do for your hearing loss."],
      ["Comfort and confidence", "We check physical fit, sound quality, app setup, phone pairing, charger use, cleaning, and everyday handling."],
      ["Follow-up support", "Adjustments over the first weeks and months help turn good technology into a dependable hearing solution."],
      ["Real-world adaptation", "The brain needs time to relearn everyday sound. Follow-up programming can improve sharpness, comfort, loudness, and performance in specific places."],
      ["Maintenance habits", "Wax guards, domes, receivers, microphones, chargers, and app settings all affect daily performance. Patients should leave knowing how to care for their devices."]
    ],
    bullets: ["Real-ear verification", "Personal programming", "Phone pairing", "Cleaning practice", "Comfort checks", "Follow-up fine-tuning"],
    takeaways: ["A fitting is both a clinical appointment and a training session.", "Verification helps confirm the devices are matched to the hearing prescription.", "Follow-up adjustments are normal and expected as listening improves."],
    faqs: [["Why is hearing aid fitting important?", "Even excellent hearing aids can underperform if they are not programmed, verified, and physically fit to the patient."], ["What is real-ear measurement?", "Real-ear measurement checks how amplified sound reaches the eardrum and helps the audiologist match the hearing aid output to the patient’s prescription."], ["How long does it take to adjust to hearing aids?", "Many people notice benefit quickly, but full adjustment can take weeks or months as the brain adapts and the devices are fine-tuned."]],
    image: "/assets/phonak-infinio.webp",
    imageLabel: "Precisely fit technology"
  },
  "/products/hearing-aids/": {
    kicker: "Hearing Aids",
    headline: "Modern hearing aids, selected for real life",
    intro: [
      "Today’s hearing aids are smaller, smarter, and more connected than ever, but the best choice is still the one that fits your hearing, lifestyle, and comfort. California Hearing Center works with leading manufacturers so patients can compare options without being forced into a single brand.",
      "We consider sound quality, speech-in-noise performance, rechargeability, Bluetooth connectivity, invisible styles, dexterity, tinnitus features, durability, and budget. The technology is only as good as the fitting and support behind it.",
      "Our role is to help you understand the tradeoffs clearly and choose hearing aids that make daily listening feel easier."
    ],
    sections: [
      ["Styles and features", "Receiver-in-canal, behind-the-ear, in-the-ear, and invisible options can support different hearing needs and cosmetic preferences."],
      ["Leading brands", "Oticon, Phonak, Widex, ReSound, Starkey, Signia, Lyric, and Ear Gear options are represented across the product pages."],
      ["Fitting makes the difference", "Programming, verification, counseling, and follow-up care help hearing aids work in restaurants, meetings, family gatherings, and phone calls."],
      ["Prescription versus over-the-counter", "Prescription hearing aids can be programmed for a specific hearing loss and supported by an audiology team. OTC devices may help some mild-to-moderate needs but are not a substitute for a full evaluation."],
      ["Lifestyle matching", "A person who streams Zoom calls all day may need different features than someone focused on family dinners, music, theater, travel, or invisible cosmetics."]
    ],
    bullets: ["Rechargeable options", "Invisible devices", "Bluetooth streaming", "Speech in noise", "Tinnitus features", "Ongoing care"],
    takeaways: ["The best hearing aid is the one that fits the hearing loss, lifestyle, comfort, and support needs.", "Brands matter, but professional fitting and follow-up often matter more.", "Modern devices can support speech clarity, connectivity, tinnitus relief, and easier listening in noise."],
    faqs: [["What hearing aid brands does California Hearing Center work with?", "The site includes information on Oticon, Phonak, Widex, ReSound, Starkey, Signia, Lyric, Unitron, and other hearing technology options."], ["Are rechargeable hearing aids better?", "Rechargeable devices are convenient for many patients, but disposable battery devices may still be a good fit depending on dexterity, travel, device style, and preference."], ["Can hearing aids connect to phones?", "Many modern hearing aids support Bluetooth streaming, app controls, phone calls, and television accessories, depending on the model and phone."]],
    image: "/assets/oticon.webp",
    imageLabel: "Leading hearing technology"
  },
  "/services/tinnitus-therapy/": {
    kicker: "Tinnitus Therapy",
    headline: "Relief starts with understanding your tinnitus",
    intro: [
      "Tinnitus can sound like ringing, buzzing, hissing, pulsing, static, crickets, or a high-pitched tone. For some people it is a mild background sound; for others it affects sleep, concentration, stress, and quality of life.",
      "California Hearing Center approaches tinnitus with careful evaluation, education, sound strategies, hearing care when appropriate, and realistic management plans. The goal is to reduce the control tinnitus has over your day.",
      "We help patients identify triggers, understand what needs medical attention, and choose evidence-based steps that fit their life."
    ],
    sections: [
      ["Evaluation first", "A tinnitus visit may include hearing testing, symptom history, sound description, impact screening, and referral guidance when red flags are present."],
      ["Management options", "Sound therapy, hearing aids, counseling, sleep strategies, stress management, and tinnitus retraining principles can all play a role."],
      ["A calmer plan", "Patients often feel better once tinnitus is explained clearly and they have a structured path instead of internet confusion."],
      ["Lenire and advanced options", "Some patients may be candidates for bimodal neuromodulation or other structured therapy options. Candidacy depends on hearing history, medical factors, tinnitus profile, and provider evaluation."],
      ["When tinnitus needs urgent care", "Sudden tinnitus with sudden hearing loss, one-sided symptoms, dizziness, weakness, facial droop, severe headache, or a heartbeat rhythm should be evaluated promptly."]
    ],
    bullets: ["Tinnitus evaluation", "Sound therapy", "Sleep strategies", "Hearing aids", "Trigger review", "Long-term support"],
    takeaways: ["Tinnitus is a symptom, not a personal failure or something patients should simply be told to ignore.", "Treatment often combines education, hearing care, sound therapy, counseling, sleep support, and realistic habit changes.", "Some tinnitus patterns require medical evaluation before routine management."],
    faqs: [["Is there a cure for tinnitus?", "There is not one universal cure for tinnitus, but many patients improve with evidence-based management that reduces distress, improves sleep, and makes the sound less intrusive."], ["Can hearing aids help tinnitus?", "Hearing aids can help many patients when tinnitus is connected to hearing loss by restoring environmental sound and reducing listening strain."], ["When should tinnitus be checked urgently?", "Seek prompt medical care for sudden hearing loss, one-sided sudden symptoms, pulsatile heartbeat-like tinnitus, dizziness, neurological symptoms, severe pain, or drainage."]],
    image: "/assets/hero.webp",
    imageLabel: "Tinnitus care with perspective"
  },
  "/reviews/": {
    kicker: "Patient Reviews",
    headline: "What patients say about hearing better",
    intro: [
      "Reviews are one of the clearest ways to understand the experience California Hearing Center tries to create: careful listening, clear explanations, patient-centered care, and hearing solutions that make daily life easier.",
      "Patients often describe renewed confidence in restaurants, work meetings, family conversations, and social settings. That kind of change is the reason hearing care matters.",
      "Our team values long-term relationships and practical support after the first appointment."
    ],
    sections: [
      ["Confidence in daily life", "Better hearing can make conversations feel less tiring and help patients rejoin moments they had started avoiding."],
      ["Care that listens", "The best reviews mention feeling heard, respected, and guided through choices rather than rushed."],
      ["Support over time", "Adjustments, repairs, and follow-up visits help protect the investment patients make in hearing care."]
    ],
    bullets: ["Restaurants", "Work meetings", "Family conversations", "Follow-up care", "Clear explanations", "Trusted local team"],
    image: "/assets/google-reviews.webp",
    imageLabel: "Patient feedback"
  },
  "/contact/": {
    kicker: "Contact",
    headline: "Two Peninsula offices, one patient-centered team",
    intro: [
      "California Hearing Center sees patients in San Mateo and San Carlos, making expert audiology care accessible across the Peninsula and the wider Bay Area.",
      "Reach out if you are ready for a hearing test, hearing aid consultation, tinnitus visit, hearing protection, repairs, earwax care, or simply want help deciding what kind of appointment you need.",
      "Our team will help you choose the right office and next step."
    ],
    sections: [
      ["San Mateo – Main Office", "88 N. San Mateo Drive, San Mateo, CA 94401. Call 650-342-9449 for appointments and questions."],
      ["San Carlos", "1008 Laurel Street, San Carlos, CA 94070. The same phone number connects you with our team."],
      ["Schedule online", "Use the Schedule Now button for online appointment scheduling through Zocdoc."]
    ],
    bullets: ["San Mateo", "San Carlos", "650-342-9449", "Online scheduling", "Directions", "Appointment help"],
    image: "/assets/logo-alt.png",
    imageLabel: "California Hearing Center"
  },
  "/resources/": {
    kicker: "Resources",
    headline: "Clear guidance for better hearing decisions",
    intro: [
      "Hearing care involves new terms, technology choices, insurance questions, adjustment periods, and sometimes a lot of internet noise. The resources section gives patients a clearer place to start.",
      "Explore hearing healthcare resources, insurance guidance, the journey to better hearing, tinnitus education, HearingUp provider information, and related articles that help explain what to expect.",
      "Good decisions start with good information and a team willing to explain it plainly."
    ],
    sections: [
      ["Patient journey", "Learn what typically happens from the first signs of hearing difficulty through testing, technology, fitting, and follow-up care."],
      ["Insurance and access", "Understand what questions to ask about benefits, coverage, reimbursement, and financing before choosing technology."],
      ["Better education", "Resources help patients and families talk about hearing loss, tinnitus, communication, and long-term hearing wellness."]
    ],
    bullets: ["Patient journey", "Insurance", "HearingUp", "Tinnitus hub", "Blog", "Family guidance"],
    image: "/assets/ida.webp",
    imageLabel: "Person-centered resources"
  },
  "/about-us/": {
    kicker: "About Us",
    headline: "Audiology care built around listening",
    intro: [
      "California Hearing Center has helped Bay Area patients improve life through better hearing for more than 30 years. The practice combines experienced audiologists, modern hearing technology, and a warm person-centered approach.",
      "The team believes hearing care should begin with the patient’s story: where communication breaks down, what relationships matter most, and what kind of support will make treatment successful.",
      "That philosophy shapes every hearing test, fitting, tinnitus visit, repair appointment, and follow-up conversation."
    ],
    sections: [
      ["Experienced team", "The providers bring clinical training, practical technology knowledge, and a shared commitment to patient-centered care."],
      ["Person-centered approach", "Care is guided by what matters to the patient, not only what appears on an audiogram."],
      ["Local commitment", "With San Mateo and San Carlos offices, the practice serves patients across the Peninsula and Bay Area."]
    ],
    bullets: ["Over 30 years", "Doctor-level care", "Ida-inspired values", "Bay Area roots", "Modern technology", "Warm follow-up"],
    image: "/assets/doctor.jpg",
    imageLabel: "Meet the team"
  }
};

function titleFromPath(path: string) {
  return path
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase()) || "California Hearing Center";
}

function getPageKind(page?: SitePage) {
  const path = page?.path || "/";
  if (path.includes("/areas-we-serve/")) return "area";
  if (path.includes("/tinnitus/") || path.includes("/hyperacusis/")) return "tinnitus";
  if (path.includes("/products/")) return "product";
  if (path.includes("/about-us/")) return "team";
  if (path.includes("/the-blog/") || path.includes("/blog/")) return "resource";
  if (path.includes("/contact/")) return "contact";
  if (path.includes("/services/") || path.includes("hearing")) return "service";
  return "general";
}

function cityFromPath(path: string) {
  const parts = path.split("/").filter(Boolean);
  const areaIndex = parts.indexOf("areas-we-serve");
  const raw = areaIndex >= 0 ? parts[areaIndex + 1] : parts[parts.length - 1];
  return raw?.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()) || "the Bay Area";
}

function productImage(pageTitle: string) {
  const title = pageTitle.toLowerCase();
  if (title.includes("phonak") || title.includes("lyric")) return "/assets/phonak.webp";
  if (title.includes("widex")) return "/assets/widex.webp";
  if (title.includes("resound")) return "/assets/resound.webp";
  if (title.includes("starkey")) return "/assets/starkey.webp";
  if (title.includes("signia")) return "/assets/signia.webp";
  if (title.includes("eargear") || title.includes("ear gear")) return "/assets/ear-gear.webp";
  if (title.includes("zeal")) return "/assets/oticon-zeal.png";
  return "/assets/oticon.webp";
}

function tinnitusGuideContent(page: SitePage, pageTitle: string): PageContent {
  const slug = page.path.split("/").filter(Boolean).pop() || "";
  const topics: Record<string, { headline: string; sections: [string, string][]; takeaways: string[] }> = {
    "what-is-tinnitus": {
      headline: "What is tinnitus? Understanding ringing, buzzing, and phantom sound",
      sections: [
        ["Definition", "Tinnitus is the perception of sound when no external sound is present. It may sound like ringing, buzzing, hissing, whistling, roaring, clicking, crickets, static, music, or a high-pitched tone."],
        ["Tinnitus is a symptom", "Tinnitus is not a disease by itself. It is a signal that the hearing system, nervous system, vascular system, jaw, neck, medication profile, or stress response may be contributing."],
        ["Subjective and objective tinnitus", "Most tinnitus is subjective, meaning only the patient hears it. Less commonly, objective tinnitus may be related to a physical sound source that can sometimes be medically investigated."],
        ["Why the brain is involved", "When the ears send reduced or distorted sound information, the brain may increase internal gain, making neural activity noticeable as tinnitus."],
        ["Impact varies widely", "Some people notice tinnitus only in quiet rooms. Others experience sleep problems, concentration difficulty, anxiety, sound sensitivity, or activity avoidance."],
        ["Evaluation helps", "A tinnitus evaluation can identify hearing changes, earwax, middle-ear concerns, red flags, sound tolerance issues, and practical treatment options."]
      ],
      takeaways: ["Tinnitus means hearing sound without an external source.", "It is usually a symptom, not a stand-alone disease.", "The ear and brain both matter, which is why audiology evaluation is useful."]
    },
    "causes": {
      headline: "Tinnitus causes and triggers: why ears ring",
      sections: [
        ["Common causes", "Common contributors include hearing loss, noise exposure, aging, earwax, ear infections, middle-ear fluid, jaw or neck tension, certain medications, cardiovascular changes, migraine patterns, and stress."],
        ["Noise exposure", "Concerts, power tools, firearms, headphones, workplace noise, and sudden acoustic trauma can injure inner-ear structures and trigger temporary or long-term tinnitus."],
        ["Hearing loss", "Even mild hearing loss can reduce sound input to the brain. The brain may compensate by turning up internal sensitivity, which can make tinnitus more noticeable."],
        ["Earwax and ear conditions", "Wax buildup, fluid, infection, eustachian tube dysfunction, or pressure changes can create or worsen tinnitus and may be treatable once identified."],
        ["Medications and health conditions", "Some medications and medical conditions can be associated with tinnitus. Patients should not stop prescribed medication without speaking with the prescribing clinician."],
        ["Stress and sleep", "Stress does not mean tinnitus is imaginary. Stress and poor sleep can increase attention, nervous system arousal, and the perceived intensity of tinnitus."]
      ],
      takeaways: ["Tinnitus often has more than one contributing factor.", "Identifying triggers helps guide treatment.", "New, one-sided, pulsatile, or sudden tinnitus deserves prompt evaluation."]
    },
    "sound-therapy": {
      headline: "Sound therapy for tinnitus: how external sound can help",
      sections: [
        ["What sound therapy does", "Sound therapy uses gentle external sound to reduce contrast, calm the nervous system, support habituation, and make tinnitus less dominant in quiet environments."],
        ["It should not be too loud", "The goal is not to drown out tinnitus with high volume. Often the best sound is soft, comfortable, neutral, and easy to ignore."],
        ["Sound options", "Useful options can include white noise, pink noise, brown noise, nature sound, fans, bedside speakers, phone apps, hearing aid programs, or combination devices."],
        ["Hearing aids as sound therapy", "When hearing loss is present, hearing aids may provide both amplification and tinnitus programs, restoring environmental sound while reducing listening effort."],
        ["Consistency matters", "Sound therapy tends to work best when used consistently as part of a broader plan that includes education, counseling, sleep support, and trigger management."],
        ["When to personalize", "People with hyperacusis, sound sensitivity, migraine, or strong emotional reactions may need a slower and more carefully tailored sound plan."]
      ],
      takeaways: ["Sound therapy reduces contrast and helps the brain deprioritize tinnitus.", "Comfortable low-level sound is usually better than blasting noise.", "Hearing aids can be part of sound therapy when hearing loss is present."]
    },
    "sleep-strategies": {
      headline: "Managing tinnitus at night: sleep strategies that actually help",
      sections: [
        ["Why night feels harder", "At bedtime the room is quiet, distractions disappear, and the brain has fewer competing signals. Tinnitus may feel louder even when the underlying sound has not changed."],
        ["Create a sound floor", "A soft fan, sound machine, nature track, or hearing-aid-compatible sleep strategy can reduce the contrast between silence and tinnitus."],
        ["Keep volume gentle", "Set background sound at a level that blends with tinnitus or sits just below it. Loud masking can make sleep harder and may reinforce monitoring."],
        ["Build a predictable routine", "A repeatable wind-down routine trains the body toward sleep: dim lights, reduce doom-scrolling, keep caffeine earlier, and use calm breathing or body-scan exercises."],
        ["Manage the fear loop", "The thought “I will never sleep” can activate the nervous system. Reframing, relaxation, and structured tinnitus counseling can reduce that cycle."],
        ["Know when to ask for help", "If tinnitus is severely disrupting sleep, mood, or daily function, professional support is appropriate. Sleep problems are treatable and should not be minimized."]
      ],
      takeaways: ["Nighttime tinnitus often feels worse because of silence and attention.", "Gentle background sound and routine can improve sleep before tinnitus itself changes.", "Persistent insomnia deserves professional support."]
    },
    "exercises": {
      headline: "Tinnitus relief exercises: breathing, relaxation, neck, and attention tools",
      sections: [
        ["What exercises can and cannot do", "Exercises do not repair inner-ear damage or erase tinnitus on command. They can reduce stress arousal, muscle tension, monitoring, and the emotional reaction that makes tinnitus feel louder."],
        ["Slow belly breathing", "Breathe in slowly through the nose, let the belly expand, exhale longer than you inhale, and repeat for a few minutes. The aim is nervous-system calming, not perfect technique."],
        ["Progressive muscle relaxation", "Gently tense and release muscle groups from feet to face. This helps patients notice where they hold tension and create a stronger contrast between tension and relaxation."],
        ["Neck and jaw awareness", "Some tinnitus is influenced by jaw clenching, neck tension, posture, or TMJ patterns. Gentle movement may help, but pain, dizziness, or neurological symptoms should be evaluated."],
        ["Attention shifting", "Practice moving attention from tinnitus to a neutral sound, body sensation, reading, conversation, or task. This supports habituation without fighting the sound."],
        ["Use exercises as one layer", "Exercises work best alongside evaluation, education, sound therapy, sleep support, hearing care when needed, and realistic expectations."]
      ],
      takeaways: ["Exercises target the body’s reaction to tinnitus, not a quick cure.", "Breathing, relaxation, posture, and attention tools can reduce distress.", "Stop exercises that cause pain, dizziness, or worsening symptoms."]
    },
    "sudden-onset": {
      headline: "Sudden tinnitus: when it is urgent and what to do",
      sections: [
        ["Take sudden changes seriously", "Sudden tinnitus can be temporary, but it can also accompany sudden sensorineural hearing loss or other medical conditions where timing matters."],
        ["Emergency signs", "Seek urgent medical care for sudden hearing loss, tinnitus with weakness or facial droop, severe dizziness, new neurological symptoms, severe headache, ear trauma, or sudden one-sided symptoms."],
        ["One-sided tinnitus", "New tinnitus in one ear, especially with hearing change or dizziness, should be evaluated promptly rather than watched for months."],
        ["After loud noise", "Tinnitus after a concert or noise exposure may fade, but persistent ringing, muffled hearing, or pain should be checked."],
        ["Audiology’s role", "A hearing test can document whether hearing changed, identify patterns that need referral, and guide next steps after medical concerns are addressed."],
        ["Do not wait if hearing drops", "Sudden hearing loss is time-sensitive. If hearing suddenly changes, contact a medical professional or urgent care pathway immediately."]
      ],
      takeaways: ["Sudden tinnitus plus sudden hearing loss can be urgent.", "One-sided, pulsatile, dizzy, painful, or neurological symptoms need prompt care.", "Audiology testing helps document hearing status and guide next steps."]
    },
    "pulsatile": {
      headline: "What is pulsatile tinnitus? Heartbeat-like whooshing in the ear",
      sections: [
        ["How it sounds", "Pulsatile tinnitus often sounds like whooshing, thumping, pulsing, or a heartbeat in the ear. It may become more noticeable when lying down, exercising, or sitting in quiet."],
        ["Why it matters", "Because pulsatile tinnitus can be related to blood flow, pressure, vascular anatomy, middle-ear conditions, or other physical sources, it deserves medical attention."],
        ["Describe the rhythm", "Tell your clinician whether the sound matches your pulse, happens in one ear or both, changes with head position, or changes when you press gently near the neck. Do not perform maneuvers that feel unsafe."],
        ["Possible workup", "Evaluation may include hearing testing, ear exam, blood pressure review, medical referral, imaging, or specialty evaluation depending on symptoms and clinician judgment."],
        ["Do not assume stress", "Stress can make any tinnitus more noticeable, but heartbeat-like tinnitus should not be dismissed as stress without proper evaluation."],
        ["Treatment depends on cause", "Some causes are treatable; others are monitored or managed. The key first step is identifying whether a medical source is present."]
      ],
      takeaways: ["Pulsatile tinnitus has a rhythm, often like a heartbeat.", "It is one tinnitus type that often needs medical evaluation.", "Clear symptom description helps direct the right workup."]
    },
    "hearing-aids": {
      headline: "Hearing aids for tinnitus: when technology can reduce ringing",
      sections: [
        ["Why hearing aids can help", "When hearing loss reduces sound input, tinnitus can become more noticeable. Hearing aids restore environmental sound and may reduce the brain’s need to turn up internal sensitivity."],
        ["Not only amplification", "Many devices include noise management, directional microphones, Bluetooth streaming, app controls, tinnitus sound programs, and fine-tuning options."],
        ["Who is a candidate", "Patients with tinnitus and measurable hearing loss are often good candidates, especially if tinnitus is worse in quiet and communication is also difficult."],
        ["Realistic expectations", "Hearing aids may reduce tinnitus awareness and distress, but they are not an instant cure. Benefit often improves with consistent use and follow-up adjustments."],
        ["Fitting matters", "Tinnitus-focused fittings should consider comfort, loudness tolerance, sound therapy settings, speech clarity, and the patient’s most difficult environments."],
        ["Combined care", "Best results may come from hearing aids plus counseling, sound therapy, sleep strategies, stress management, and education."]
      ],
      takeaways: ["Hearing aids can help tinnitus when hearing loss is part of the picture.", "Tinnitus programs and professional fitting matter.", "Technology works best inside a broader management plan."]
    },
    "when-to-see-doctor": {
      headline: "When to see a doctor about tinnitus",
      sections: [
        ["Emergency symptoms", "Get urgent care for tinnitus with sudden hearing loss, facial weakness, severe dizziness, neurological symptoms, severe headache, trauma, or symptoms suggesting stroke."],
        ["Prompt medical evaluation", "Call a clinician soon for new one-sided tinnitus, pulsatile tinnitus, tinnitus with ear pain or drainage, or tinnitus that suddenly worsens."],
        ["Routine audiology evaluation", "Schedule a hearing test if tinnitus is persistent, affecting sleep or focus, associated with hearing difficulty, or concerning enough that you want a clear plan."],
        ["Why timing matters", "Some causes are time-sensitive, while others are best handled with structured education and management. Knowing the difference prevents both panic and neglect."],
        ["What to tell the clinician", "Describe onset, one or both ears, sound type, pulse rhythm, hearing changes, dizziness, noise exposure, medications, jaw or neck symptoms, and sleep impact."],
        ["Where audiology fits", "Audiologists assess hearing, sound tolerance, and tinnitus impact, then coordinate with medical providers when red flags are present."]
      ],
      takeaways: ["Sudden hearing changes and neurological symptoms are urgent.", "Pulsatile or one-sided tinnitus should be evaluated.", "Persistent tinnitus deserves a hearing test and a management plan."]
    },
    "temporary-or-permanent": {
      headline: "Is tinnitus temporary or permanent?",
      sections: [
        ["There is no single timeline", "Some tinnitus fades after hours or days, some improves over weeks or months, and some becomes long-term. The cause and contributing factors matter."],
        ["Temporary patterns", "Short-term tinnitus may follow noise exposure, earwax, fluid, infection, stress spikes, pressure changes, or medication changes. Evaluation helps identify treatable causes."],
        ["Long-term patterns", "Tinnitus that persists most days for months, occurs with hearing loss, or has multiple contributors may need ongoing management rather than watchful waiting."],
        ["Improvement is still possible", "Even long-term tinnitus can become less intrusive through habituation, sound therapy, hearing care, sleep improvement, counseling, and reducing fear."],
        ["Avoid doom searching", "Internet stories can make tinnitus feel hopeless. Most people can improve their relationship with the sound even when it does not disappear completely."],
        ["When to be checked", "If tinnitus is sudden, one-sided, pulsatile, painful, linked to hearing loss, or disrupting life, schedule evaluation instead of guessing."]
      ],
      takeaways: ["Temporary tinnitus often has a trigger and may fade.", "Long-term tinnitus can still become much less intrusive.", "Evaluation helps identify treatable causes and realistic next steps."]
    }
  };
  const topic = topics[slug];

  return {
    kicker: "Tinnitus Resource",
    headline: topic?.headline || `${pageTitle}: evidence-based tinnitus guidance`,
    intro: page.paragraphs.length ? page.paragraphs : [
      `${pageTitle} is one of the questions patients bring to California Hearing Center when tinnitus starts affecting sleep, concentration, quiet rooms, work, or peace of mind.`,
      "Tinnitus is real, common, and often manageable. It may be linked with hearing loss, noise exposure, earwax, ear conditions, stress physiology, jaw or neck factors, medications, or vascular patterns.",
      "The right approach starts with identifying whether anything needs medical attention, understanding the hearing system, and building a practical plan that reduces the sound’s control over daily life.",
      "This page is educational and does not replace medical advice. If tinnitus is sudden, one-sided, pulsatile, painful, associated with sudden hearing loss, dizziness, or neurological symptoms, seek prompt medical evaluation."
    ],
    sections: [
      ...(topic?.sections || [
      ["Understand the pattern", "Tinnitus is personal. Sound type, timing, triggers, hearing status, sleep, stress, and medical history all help determine the safest next step."],
      ["Evaluate before guessing", "A hearing evaluation and careful symptom history can identify hearing loss, ear conditions, red flags, sound sensitivity, and management options."],
      ["Treat the reaction too", "Tinnitus distress often improves when patients understand the sound, reduce monitoring, improve sleep, and use sound enrichment or hearing technology when appropriate."],
      ["Use evidence-based options", "Sound therapy, tinnitus-focused counseling, hearing aids, sleep strategies, relaxation, and medical referral can all be part of care depending on the patient."],
      ["Know red flags", "Sudden hearing loss, one-sided sudden symptoms, pulsatile rhythm, severe dizziness, neurological symptoms, pain, or drainage should not be ignored."],
      ["Plan for daily life", "The most useful tinnitus care helps patients work, sleep, communicate, relax, and participate in normal life with less fear and less disruption."]
      ]),
      ["How California Hearing Center evaluates tinnitus", "A useful tinnitus visit connects the patient’s story with hearing data. We look at onset, sound quality, one-ear versus both-ear symptoms, hearing thresholds, speech understanding, noise exposure, sleep impact, stress load, medical red flags, sound sensitivity, prior treatment, and what the patient most wants to improve."],
      ["What patients should track before the visit", "It helps to note when the sound started, whether it is steady or pulsing, whether it changes with jaw or neck movement, whether hearing changed, what makes it louder, what helps, how sleep is affected, and whether tinnitus is interfering with work, mood, or relationships."],
      ["How progress is measured", "Tinnitus progress is not always silence. Meaningful progress may mean sleeping better, reacting with less fear, noticing the sound less often, returning to restaurants or meetings, using sound support confidently, reducing avoidance, or feeling clear about what symptoms do and do not require urgent action."],
      ["Why an education-first plan works", "Patients often arrive after reading frightening or contradictory information online. Clear education reduces uncertainty, and uncertainty is one of the forces that keeps tinnitus in the spotlight. A practical plan gives the brain fewer reasons to monitor the sound all day."],
      ["What to avoid while you are waiting", "Avoid repeatedly checking the sound in silence, overprotecting with earplugs in safe everyday environments, making medication changes without a clinician, or assuming that one bad night predicts your future. Protect your ears from unsafe noise, but keep normal sound in your life when it is comfortable."]
    ],
    bullets: ["Clear definition", "Red flag guidance", "Evidence-based options", "Sleep support", "Sound therapy", "Audiology evaluation"],
    takeaways: topic?.takeaways || ["Tinnitus is a symptom with ear, brain, body, and lifestyle contributors.", "A hearing evaluation is often the best first step.", "Evidence-based management can reduce distress even when tinnitus does not disappear."],
    faqs: [
      ["Can tinnitus be treated?", "Yes. Treatment depends on the cause and impact, but many patients improve with education, hearing care, sound therapy, counseling strategies, sleep support, and medical referral when appropriate."],
      ["Is tinnitus dangerous?", "Most tinnitus is not dangerous, but sudden hearing loss, one-sided sudden tinnitus, pulsatile tinnitus, dizziness, neurological symptoms, pain, or drainage should be evaluated promptly."],
      ["Can hearing aids help tinnitus?", "Hearing aids can help many patients when tinnitus is associated with hearing loss by restoring environmental sound and reducing listening strain."],
      ["Should I sleep in silence with tinnitus?", "Many people sleep better with gentle background sound rather than silence. The sound should be comfortable and not painfully loud."],
      ["What should I do first?", "Start with a hearing evaluation and a careful review of symptoms, especially if tinnitus is persistent, new, one-sided, pulsatile, or affecting sleep and daily life."]
    ],
    image: "/assets/hero.webp",
    imageLabel: "Tinnitus education"
  };
}

function buildPageContent(page: SitePage): PageContent {
  const kind = getPageKind(page);
  const pageTitle = page.h1 || titleFromPath(page.path);
  const city = cityFromPath(page.path);
  const defaultParagraphs = page.paragraphs.length ? page.paragraphs : [];

  if (bespokeContent[page.path]) return bespokeContent[page.path];

  if (kind === "area") {
    const service = page.path.includes("/hearing-test/") ? "hearing testing" :
      page.path.includes("/hearing-aids/") ? "hearing aids" :
      page.path.includes("/tinnitus") ? "tinnitus therapy" :
      page.path.includes("/hearing-aid-fitting/") ? "hearing aid fitting" :
      page.path.includes("/hearing-aid-repairs/") ? "hearing aid repairs" :
      page.path.includes("/custom-hearing-protection/") ? "custom hearing protection" :
      page.path.includes("/earwax-removal/") ? "earwax removal" :
      page.path.includes("/invisible-hearing-aids/") ? "invisible hearing aids" :
      page.path.includes("/rechargeable-hearing-aids/") ? "rechargeable hearing aids" :
      page.path.includes("/bluetooth-hearing-aids/") ? "Bluetooth hearing aids" :
      page.path.includes("/lenire/") ? "Lenire tinnitus care" :
      page.path.includes("/dr-emily-mcmahan/") ? "tinnitus-focused audiology" :
      page.path.includes("/tinnitus-audiologist/") ? "tinnitus audiology" :
      "hearing care";
    return {
      kicker: "Areas We Serve",
      headline: `${service[0].toUpperCase()}${service.slice(1)} near ${city}`,
      intro: defaultParagraphs.length ? defaultParagraphs : [
        `California Hearing Center supports patients from ${city} with thoughtful, evidence-informed audiology care at our San Mateo and San Carlos offices.`,
        `Whether you are looking for ${service}, a clearer explanation of your hearing, or help choosing technology, our team focuses on the listening situations that matter most in your everyday life.`,
        `Patients from ${city} choose us for careful testing, person-centered counseling, modern hearing aids, tinnitus support, repairs, hearing protection, and follow-up care that continues after the first appointment.`
      ],
      sections: [
        [`Why ${city} patients visit us`, "Many people come in after noticing restaurant difficulty, missed words, television volume changes, tinnitus, earwax concerns, or hearing aids that no longer feel clear."],
        ["Care close to home", "Our Peninsula offices make it practical to receive diagnostics, fittings, adjustments, repairs, and counseling without navigating a large medical system."],
        ["A personal plan", "We connect test results with your lifestyle, communication goals, budget, and comfort so recommendations feel useful rather than generic."],
        ["Common reasons to schedule", "Patients schedule because family members notice hearing changes, work meetings feel harder, tinnitus becomes distracting, hearing aids need service, or noisy places require too much effort."],
        ["What to expect", "A first visit may include a case history, hearing testing, speech understanding measures, ear health review, discussion of goals, and recommendations for treatment or monitoring."],
        ["Local follow-up matters", "Hearing care is not finished after one appointment. Local access makes adjustments, cleanings, troubleshooting, tinnitus follow-up, and communication coaching easier to maintain."]
      ],
      bullets: [`${city} hearing care`, "San Mateo office", "San Carlos office", "Hearing tests", "Hearing aids", "Tinnitus support"],
      takeaways: [`Patients in ${city} can access California Hearing Center through the San Mateo and San Carlos offices.`, "The right first step depends on symptoms, hearing history, tinnitus, ear health, and communication goals.", "Follow-up care helps patients continue improving after testing or fitting."],
      faqs: [[`Do you see patients from ${city}?`, `Yes. California Hearing Center serves patients from ${city} and communities across the Bay Area through the San Mateo and San Carlos offices.`], ["What should I bring to a hearing appointment?", "Bring your hearing concerns, medication list, insurance information, prior hearing tests if available, and any hearing aids or accessories you currently use."], ["Can I schedule if I am not sure what service I need?", "Yes. The team can help determine whether you need a hearing test, hearing aid consultation, tinnitus visit, repair appointment, or another service."]],
      image: "/assets/hero.webp",
      imageLabel: `Local care for ${city}`
    };
  }

  if (kind === "tinnitus") {
    return tinnitusGuideContent(page, pageTitle);
  }

  if (kind === "product") {
    return {
      kicker: "Hearing Aid Technology",
      headline: `${pageTitle} at California Hearing Center`,
      intro: defaultParagraphs.length ? defaultParagraphs : [
        `${pageTitle} represents one of the technology options patients may consider when choosing hearing aids or hearing accessories. The right choice depends on hearing needs, comfort, style preference, phone use, listening environments, budget, and the level of support needed after fitting.`,
        "California Hearing Center works with leading hearing aid manufacturers and focuses on matching technology to the person rather than forcing every patient into the same device.",
        "A strong fitting includes programming, verification, counseling, follow-up adjustments, cleaning guidance, and realistic expectations for the first weeks of listening."
      ],
      sections: [
        ["What to consider", "Speech clarity, background noise, rechargeability, Bluetooth, app controls, tinnitus features, invisible styles, dexterity, and maintenance all shape the right recommendation."],
        ["Professional fitting", "Modern hearing aids perform best when programmed and verified by an audiology team that understands both the technology and the patient’s daily life."],
        ["Ongoing support", "Fine-tuning, cleanings, repairs, and education help protect your investment and keep devices working well."],
        ["How brands differ", "Manufacturers often emphasize different strengths such as sound processing, rechargeability, Bluetooth, invisible wear, artificial intelligence, app control, or tinnitus programs."],
        ["Why trial and follow-up matter", "Hearing aids should be evaluated in real environments, not just in a quiet office. Follow-up visits help improve comfort, clarity, loudness, and speech understanding."],
        ["How to compare fairly", "Compare devices by hearing goals: restaurants, meetings, phone calls, music, television, travel, dexterity, cosmetics, and budget. A brand name alone does not guarantee the best fit."]
      ],
      bullets: ["Brand comparison", "Style selection", "Rechargeable options", "Bluetooth support", "Real-ear fitting", "Follow-up care"],
      takeaways: [`${pageTitle} may be a strong option for some patients, but fit depends on hearing needs and lifestyle.`, "Professional programming and verification are essential for performance.", "Ongoing follow-up protects comfort, clarity, and long-term value."],
      faqs: [["How do I know which hearing aid brand is best?", "The best brand depends on your hearing test, speech understanding, ear anatomy, phone needs, tinnitus, dexterity, lifestyle, and budget. An audiologist can compare options objectively."], ["Are more expensive hearing aids always better?", "Not always. Higher technology can help in complex listening environments, but the right fit depends on goals, features, programming, and follow-up care."], ["Can hearing aids be adjusted after fitting?", "Yes. Follow-up adjustments are normal and often improve comfort, speech clarity, noise management, and app or Bluetooth performance."]],
      image: productImage(pageTitle),
      imageLabel: pageTitle
    };
  }

  if (kind === "team") {
    return {
      kicker: "Meet the Team",
      headline: `${pageTitle}`,
      intro: defaultParagraphs.length ? defaultParagraphs : [
        `${pageTitle} is part of the California Hearing Center team serving patients in San Mateo, San Carlos, and throughout the Bay Area.`,
        "The practice’s care philosophy is rooted in careful listening, clear education, and hearing recommendations that connect clinical results to real everyday communication needs.",
        "Patients are supported through hearing testing, hearing aid selection and fitting, tinnitus care, repairs, counseling, and follow-up appointments that make treatment feel personal."
      ],
      sections: [
        ["Patient-centered care", "The team takes time to understand what patients want to hear better, from family conversations to work meetings and restaurants."],
        ["Clear explanations", "Good care includes helping patients understand test results, technology choices, and realistic next steps."],
        ["Supportive follow-up", "Adjustments and education after the first visit help patients feel confident with hearing care over time."],
        ["A team-based practice", "Patients benefit from a coordinated clinic that can support testing, fittings, repairs, tinnitus questions, insurance guidance, and long-term hearing wellness."],
        ["What patients should ask", "Good questions include: what did my test show, what are my options, what happens if I wait, how will devices be verified, and what follow-up is included?"]
      ],
      bullets: ["Audiology care", "Clear guidance", "Modern technology", "San Mateo", "San Carlos", "Follow-up support"],
      takeaways: ["Provider pages should help patients understand care philosophy, not just credentials.", "California Hearing Center emphasizes listening, education, and personalized recommendations.", "Patients should feel comfortable asking detailed questions about testing, technology, and follow-up."],
      faqs: [["What makes a good audiology appointment?", "A good appointment includes listening to the patient’s concerns, accurate testing, clear explanation, realistic options, and a follow-up plan."], ["Should I bring a family member?", "Bringing a communication partner can be helpful because hearing goals often involve family conversations, restaurants, television, and shared daily routines."], ["Do providers help after hearing aids are purchased?", "Yes. Follow-up care, adjustments, troubleshooting, and education are important parts of successful hearing treatment."]],
      image: "/assets/doctor.jpg",
      imageLabel: "California Hearing Center team"
    };
  }

  if (kind === "service") {
    return {
      kicker: "Audiology Services",
      headline: `${pageTitle} with thoughtful, expert support`,
      intro: defaultParagraphs.length ? defaultParagraphs : [
        `${pageTitle} is part of the comprehensive care available at California Hearing Center. We help patients understand what is happening, what options make sense, and how to move forward with confidence.`,
        "Every recommendation is grounded in the patient’s goals, lifestyle, ear health, hearing history, and daily listening challenges. That means the care plan may include testing, technology, counseling, protection, repair, referral, or simple practical strategies.",
        "Our San Mateo and San Carlos offices make it easier for Bay Area patients to get clinical expertise without losing the warmth of a local practice."
      ],
      sections: [
        ["Start with the person", "We ask where communication feels hard, what you have already tried, and what a successful outcome would look like."],
        ["Use the right tools", "Testing, programming, real-ear verification, device checks, cleaning tools, and counseling may all support better hearing outcomes."],
        ["Keep care practical", "Patients leave with clear next steps and access to follow-up support as needs change."],
        ["When this service helps", "This service may be appropriate when symptoms affect communication, comfort, safety, sound tolerance, device performance, or confidence in daily life."],
        ["How we measure progress", "Progress may include clearer speech, less listening fatigue, better device reliability, fewer missed words, improved sleep, or a calmer response to tinnitus."],
        ["Questions worth asking", "Ask what the evaluation will include, whether medical referral is needed, what options exist, how benefits are measured, and what follow-up support is available."]
      ],
      bullets: ["Clinical evaluation", "Personal recommendations", "Modern tools", "Patient education", "Ongoing care", "Two local offices"],
      takeaways: [`${pageTitle} should be tailored to the patient’s symptoms, goals, and daily environments.`, "Accurate evaluation and clear education make treatment decisions easier.", "Follow-up support helps turn recommendations into real-world improvement."],
      faqs: [[`Who is ${pageTitle} for?`, `${pageTitle} may help patients who notice hearing difficulty, device problems, tinnitus concerns, sound sensitivity, protection needs, or changes in communication.`], ["Will I receive options or one recommendation?", "The goal is to explain reasonable options, including benefits, limitations, and next steps, so patients can make informed decisions."], ["Is medical referral ever needed?", "Yes. Sudden symptoms, pain, drainage, dizziness, one-sided changes, or other red flags may require medical evaluation in addition to audiology care."]],
      image: "/assets/doctor.jpg",
      imageLabel: pageTitle
    };
  }

  if (kind === "contact") {
    return bespokeContent["/contact/"];
  }

  return {
    kicker: "California Hearing Center",
    headline: pageTitle,
    intro: defaultParagraphs.length ? defaultParagraphs : [
      `${pageTitle} is part of California Hearing Center’s patient education and care experience for people exploring hearing, tinnitus, hearing aids, and better communication.`,
      "The practice combines clinical expertise with personal care, helping patients understand their needs and choose next steps that fit real life.",
      "With locations in San Mateo and San Carlos, the team supports patients across the Peninsula and greater Bay Area."
    ],
    sections: [
      ["Why it matters", "Hearing affects family, work, restaurants, music, safety, confidence, and connection. Clear information makes care easier to start."],
      ["How we help", "We pair modern diagnostics and technology with counseling, education, and follow-up care."],
      ["What to do next", "Schedule a consultation, bring your questions, and let the team guide you through the options."],
      ["What patients often want to know", "Patients usually want clear answers about what is happening, whether treatment is urgent, what options exist, how much support is included, and how care will affect everyday life."],
      ["How content is organized", "The site is structured around services, products, tinnitus education, resources, team information, local area pages, and contact details so patients and search engines can find answers quickly."]
    ],
    bullets: ["Personal care", "Clear education", "Hearing tests", "Hearing aids", "Tinnitus care", "Bay Area offices"],
    takeaways: ["California Hearing Center supports patients with hearing care, tinnitus care, hearing technology, and education.", "Helpful pages should answer patient questions clearly and make next steps obvious.", "Structured headings, FAQs, and related links help both people and search engines understand the page."],
    faqs: [["What does California Hearing Center help with?", "The practice helps with hearing tests, hearing aids, fittings, tinnitus, hearing protection, repairs, resources, insurance questions, and follow-up care."], ["Where is California Hearing Center located?", "California Hearing Center has offices in San Mateo and San Carlos, serving patients across the Peninsula and Bay Area."], ["How should I choose my next page?", "Start with services for care options, tinnitus pages for ringing or sound sensitivity, hearing aid pages for technology, or contact for scheduling help."]],
    image: "/assets/hero.webp",
    imageLabel: "California Hearing Center"
  };
}

function faqSchema(page: SitePage, content: PageContent) {
  if (!content.faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": content.headline,
    "url": `https://calhearing.com${page.path}`,
    "mainEntity": content.faqs.map(([question, answer]) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer
      }
    }))
  };
}

function InnerPage({ page }: { page: SitePage }) {
  const kind = getPageKind(page);
  const pageTitle = page.h1 || titleFromPath(page.path);
  const content = buildPageContent(page);
  const schema = faqSchema(page, content);
  const related = crawledPages
    .filter((item) => item.path !== page.path && getPageKind(item) === kind)
    .slice(0, 8);

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <section className={`subhero subhero-${kind}`}>
        <div className="container">
          <p className="eyebrow">{content.kicker}</p>
          <h1>{content.headline}</h1>
          <p>{content.intro[0]}</p>
          <div className="hero-actions">
            <a className="button primary" href="/contact/">Request an Appointment</a>
            <a className="button ghost" href="tel:6503429449">650-342-9449</a>
          </div>
        </div>
      </section>

      <section className="content-grid container">
        <article className="copy-card">
          <p className="section-kicker">{kind === "area" ? "Local care, close by" : content.kicker}</p>
          <h2>{pageTitle}</h2>
          <div className="intro-copy">
            {content.intro.map((paragraph, index) => (
              <p className={index === 0 ? "lead-copy" : undefined} key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {content.takeaways && (
            <section className="answer-box">
              <p className="section-kicker">At a glance</p>
              <ul>
                {content.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
              </ul>
            </section>
          )}
          <div className="section-stack">
            {content.sections.map(([heading, text]) => (
              <section key={heading}>
                <h3>{heading}</h3>
                <p>{text}</p>
              </section>
            ))}
          </div>
          <div className="feature-list">
            {content.bullets.map((bullet) => <span key={bullet}>{bullet}</span>)}
          </div>
          {content.faqs && (
            <section className="faq-block">
              <p className="section-kicker">Frequently asked questions</p>
              <h2>Questions patients ask about {pageTitle}</h2>
              {content.faqs.map(([question, answer]) => (
                <details key={question} open>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </section>
          )}
        </article>
        <aside className="sidebar-card">
          <div className="page-visual">
            <img src={content.image} alt="" />
            <span>{content.imageLabel}</span>
          </div>
          <h3>Set up your FREE hearing consultation</h3>
          <p>Tell us what you’re noticing. We’ll help you understand your options and build a plan around your life.</p>
          <a className="button primary wide" href="/contact/">Request an appointment</a>
          <hr />
          <strong>San Mateo – Main Office</strong>
          <p>88 N. San Mateo Drive<br />San Mateo, CA 94401</p>
          <strong>San Carlos</strong>
          <p>1008 Laurel Street<br />San Carlos, CA 94070</p>
        </aside>
      </section>

      <section className="container route-index">
        <p className="section-kicker">Explore related pages</p>
        <h2>Keep exploring {kind === "area" ? "local hearing care" : kind === "product" ? "hearing technology" : kind === "tinnitus" ? "tinnitus resources" : "California Hearing Center"}</h2>
        <div className="pill-grid">
          {related.map((item) => <a key={item.path} href={item.path}>{item.h1 || titleFromPath(item.path)}</a>)}
        </div>
      </section>
    </>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-panel">
          <p className="eyebrow">San Mateo & San Carlos Audiologists</p>
          <h1>Turn Up Your Life with Better Hearing</h1>
          <p>For over 30 years, California Hearing Center has helped people reconnect with family, restaurants, work, music, and the everyday moments that make life feel full.</p>
          <div className="hero-actions">
            <a className="button primary" href="/contact/">Request an Appointment</a>
            <a className="button ghost" href="/services/">Explore Services</a>
          </div>
        </div>
      </section>

      <section className="intro container">
        <div>
          <p className="section-kicker">Combining expertise with personal care</p>
          <h2>We listen because we care.</h2>
        </div>
        <p>Helping people hear starts with knowing how to listen. We take time to understand your needs, your routines, and the hearing moments you most want back.</p>
      </section>

      <section className="service-band">
        <div className="container">
          <p className="section-kicker">Services</p>
          <h2>Hearing care for every part of life</h2>
          <div className="cards">
            {services.map(([title, href, text]) => (
              <a className="service-card" href={href} key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="split container">
        <div className="image-card doctor" />
        <div>
          <p className="section-kicker">Person-centered care</p>
          <h2>We’re all ears</h2>
          <p>The Inspired by Ida label recognizes clinics dedicated to person-centered care. California Hearing Center is proud to pair advanced audiology with a warm, collaborative approach.</p>
          <div className="quote">“I feel much more comfortable at work meetings and restaurants — I’m able to hear over the background noise.”<strong>Bob F.</strong></div>
        </div>
      </section>

      <section className="products container">
        <p className="section-kicker">Hearing aids</p>
        <h2>Leading technology, carefully fit</h2>
        <div className="product-grid">
          {products.map(([title, text, image]) => (
            <article className="product-card" key={title}>
              <img src={image} alt="" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tinnitus-hub">
        <div className="container">
          <p className="section-kicker">Tinnitus knowledge hub</p>
          <h2>Relief starts with understanding what you hear</h2>
          <div className="pill-grid">
            {tinnitus.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </div>
        </div>
      </section>

      <section className="container route-index">
        <p className="section-kicker">Site inventory</p>
        <h2>Core pages copied into the new stack</h2>
        <div className="pill-grid">
          {featuredRoutes.map((path) => <a href={path} key={path}>{titleFromPath(path)}</a>)}
        </div>
      </section>
    </>
  );
}

export function CaliforniaHearingSite({ page }: { page?: SitePage }) {
  return (
    <main>
      <div className="topbar">
        <a href="https://www.google.com/maps/search/?api=1&query=1008+Laurel+Street+San+Carlos+CA">SAN CARLOS: 1008 Laurel Street</a>
        <a href="https://www.google.com/maps/search/?api=1&query=88+N.+San+Mateo+Drive+San+Mateo+CA">SAN MATEO: 88 N. San Mateo Drive</a>
        <a href="tel:6503429449">650-342-9449</a>
      </div>
      <header className="site-header">
        <a className="logo" href="/">
          <img src="/assets/logo.png" alt="California Hearing Center" />
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <div className="nav-item" key={item.href}>
              <a className="nav-link" href={item.href}>
                {item.label}
                {("items" in item || "mega" in item) && <span aria-hidden="true" />}
              </a>
              {item.items && (
                <div className="dropdown-menu">
                  {item.items.map(([label, href]) => (
                    <a href={href} key={href}>{label}</a>
                  ))}
                </div>
              )}
              {"mega" in item && (
                <div className="mega-menu">
                  <div className="mega-menu-inner">
                    {hearingAidColumns.map((column, columnIndex) => (
                      <div className="mega-column" key={columnIndex}>
                        {column.map(([title, text, href, image]) => (
                          <a className="mega-product" href={href} key={href}>
                            <img src={image} alt="" />
                            <span>
                              <strong>{title}</strong>
                              <small>{text}</small>
                            </span>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <strong>Menu</strong>
          </summary>
          <div className="mobile-panel">
            <a className="mobile-schedule" href={scheduleUrl} target="_blank" rel="noopener noreferrer">Schedule Now</a>
            {nav.map((item) => (
              <div className="mobile-nav-group" key={item.href}>
                {item.items || item.mega ? (
                  <details>
                    <summary>{item.label}</summary>
                    <a href={item.href}>Overview</a>
                    {item.items?.map(([label, href]) => (
                      <a href={href} key={href}>{label}</a>
                    ))}
                    {item.mega && hearingAidColumns.flat().map(([title, text, href, image]) => (
                      <a className="mobile-product-link" href={href} key={href}>
                        <img src={image} alt="" />
                        <span>
                          <strong>{title}</strong>
                          <small>{text}</small>
                        </span>
                      </a>
                    ))}
                  </details>
                ) : (
                  <a className="mobile-top-link" href={item.href}>{item.label}</a>
                )}
              </div>
            ))}
          </div>
        </details>
        <a className="schedule" href={scheduleUrl} target="_blank" rel="noopener noreferrer">Schedule Now</a>
      </header>
      {page ? <InnerPage page={page} /> : <HomePage />}
      <section className="appointment">
        <div>
          <p className="section-kicker">Set up your free hearing consultation</p>
          <h2>Turn life up with better hearing.</h2>
        </div>
        <a className="button primary" href="/contact/">Request an appointment</a>
      </section>
      <footer className="site-footer">
        <div className="footer-main">
          <section className="footer-location">
            <h5>San Mateo - Main Office</h5>
            <p>88 N. San Mateo Drive<br />San Mateo, CA 94401<br />Phone: <a href="tel:+16503429449">650-342-9449</a></p>
            <a className="footer-button" href="https://www.google.com/maps/dir//88+San+Mateo+Drive,+San+Mateo,+CA+94401" target="_blank" rel="noopener noreferrer">Get Directions</a>
          </section>
          <a className="footer-badge" href="https://www.google.com/maps/place/California+Hearing+Center" target="_blank" rel="noopener noreferrer">
            <img src="/assets/google-reviews.webp" alt="See our Patient Reviews" />
          </a>
          <section className="footer-location">
            <h5>San Carlos</h5>
            <p>1008 Laurel Street<br />San Carlos, CA 94070<br />Phone: <a href="tel:+16503429449">650-342-9449</a></p>
            <a className="footer-button" href="https://www.google.com/maps/dir//1008+Laurel+St,+San+Carlos,+CA+94070" target="_blank" rel="noopener noreferrer">Get Directions</a>
          </section>
          <a className="footer-badge ida-badge" href="https://idainstitute.com/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/ida.webp" alt="Explore The Ida Institute" />
            <span>Explore the Ida Institute</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 California Hearing Center and Audiology Services, Inc. All Rights Reserved.</span>
        </div>
      </footer>
    </main>
  );
}
