export type ProductBrand = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  legacy: string;
  technology: Array<{ title: string; body: string }>;
  products: string[];
};

export type HearingAidProduct = {
  slug: string;
  brandSlug?: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  menuDescription: string;
  image: string;
  imageAlt: string;
  overview: string[];
  highlights: string[];
  technology: Array<{ title: string; body: string }>;
  videos?: Array<{ title: string; youtubeId: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const productsRootPath = "/products";
// The brand hub lives on the legacy URL. That path carries the practice's
// existing search authority, so the newer product tree is parented onto it
// rather than competing with it from /products/hearing-aids-by-brand.
export const hearingAidBrandsPath = "/hearing-aids-brands";

export const hearingAidProducts: HearingAidProduct[] = [
  {
    slug: "oticon-reveal",
    brandSlug: "oticon",
    title: "Oticon Reveal",
    shortTitle: "Oticon Reveal",
    subtitle: "The world's first hearing aid powered by Dual AI",
    menuDescription: "Speech AI and Context AI running together on Oticon's newest platform.",
    image: "/assets/brands/Oticon-Reveal.webp",
    imageAlt: "Oticon Reveal miniRITE R hearing aid",
    overview: [
      "Oticon Reveal is Oticon's newest hearing aid family, introduced in August 2026 and built on the Reveal AI™ platform. Where earlier Oticon technology used a single neural network, Reveal runs two AI systems at the same time: Speech AI, which identifies and enhances the voices around you, and Context AI, which preserves the surrounding sounds that tell your brain where you are and what is happening.",
      "Oticon reports that this produces a measurably stronger brain response than its previous generation. Whether that translates into a better outcome for you specifically depends on your hearing test results, your listening environments, and how you use your hearing day to day — which is exactly what a consultation at Audiology Associates of Westchester is for."
    ],
    highlights: [
      "Dual AI processing: Speech AI enhances voices while Context AI preserves the surrounding sound scene",
      "Built on the Reveal AI™ platform, Oticon's third generation of AI sound processing",
      "Rechargeable miniRITE R style designed for a full day of use on a single charge",
      "Bluetooth® LE Audio with Auracast™ broadcast support, hands-free calls, Made for iPhone and optimized for Android",
      "Four technology levels, so the platform can be matched to your hearing needs and budget"
    ],
    technology: [
      {
        title: "Two AI Systems, Working at Once",
        body: "Speech AI and Context AI run simultaneously rather than trading off against each other. The intent is to sharpen speech without stripping away the environmental cues — footsteps, traffic, a room's acoustics — that help your brain orient itself. Oticon cites a 60% stronger brain response than Oticon Intent, along with feedback management that reacts 30% faster with four times greater fitting precision. These are the manufacturer's figures from its own research."
      },
      {
        title: "Professional Fitting Matters",
        body: "A new platform only helps if it is programmed to your hearing loss. Real-ear measurement, verification, and follow-up visits are what turn the technology into everyday benefit, and our audiologists will compare Reveal against other current platforms rather than assuming the newest option is the right one for you."
      }
    ],
    videos: [
      {
        title: "Oticon Reveal product video",
        youtubeId: "79BU3IIjKrY"
      }
    ],
    faqs: [
      {
        question: "How is Oticon Reveal different from Oticon Intent?",
        answer: "Intent is built around user-intent sensors that read your movement and listening behavior. Reveal is built around Dual AI — two neural networks handling speech and surrounding sound at the same time. Both are premium platforms, and the better choice depends on your hearing profile and priorities rather than on which launched more recently."
      },
      {
        question: "Is Oticon Reveal available now?",
        answer: "Oticon began releasing Reveal in August 2026, with a wider rollout through the second half of the year. Please contact Audiology Associates of Westchester to confirm current availability, technology levels, and whether it is an appropriate match for your hearing needs."
      }
    ]
  },
  {
    slug: "signia-max",
    brandSlug: "signia",
    title: "Signia MaX",
    shortTitle: "Signia MaX",
    subtitle: "Four neural networks reading the room together",
    menuDescription: "Signia's 2026 flagship, with telecoil and Auracast built into one device.",
    image: "/assets/brands/Signia-MaX-device.webp",
    imageAlt: "Signia Pure Charge&Go MaX rechargeable hearing aid in beige, shown with receiver and dome",
    overview: [
      "Multi-adaptive Xperience, shortened to MaX, arrived on 24 August 2026 and now heads the Signia range. It reached American dispensers on announcement day, which is unusually fast, and our Harrison and Somers audiologists are fitting it.",
      "The engineering idea is worth understanding before the marketing around it. Rival platforms lean on a single trained network whose job is to lift voices out of background sound. Signia has split that work four ways: one network decides whether it is hearing speech, a second recognises the wearer's own voice, a third reads the acoustics of the space, and a fourth decides how the remaining noise should be handled. Under the banner Acoustic Intelligence, the four run in concert.",
      "Because the platform is barely a week old, we have written this page differently from most of what is circulating. Nothing has been through an outside laboratory, the price list is unpublished, and there is exactly one model. Below we separate the specification from the sales figures, and say which is which."
    ],
    highlights: [
      "Speech, own-voice, scene, and noise each handled by a dedicated neural network rather than one general-purpose model",
      "A single connectivity package — OneConnect — covering Bluetooth Classic, LE Audio, telecoil, and Auracast without picking a special variant",
      "Own-voice tuning happens automatically, removing a step that used to be done in the clinic",
      "Pure Charge&Go MaX, rechargeable, eight finishes; half an hour in the case buys roughly six hours, and the case itself stores four complete charges",
      "Receiver-in-canal only for now — anyone needing a custom shell, an earbud shape, a power BTE, or a CROS setup should look at Signia IX"
    ],
    technology: [
      {
        title: "Why Four Networks and Not One",
        body: "Splitting the task is the substantive change. A single model tuned to suppress background sound has no way of knowing whether you are mid-conversation, whether the voice it just found belongs to you, or whether you have walked from a quiet corridor into a crowded hall. Miss any of those and the aid helps in the wrong direction — flattening a room you were listening to, or dipping your voice the instant you start talking. Dedicated networks are Signia's answer. Whether four beats one for your particular hearing is not something the published record can settle today."
      },
      {
        title: "Reading the Manufacturer's Numbers",
        body: "Two headline results accompany the launch: that MaX beat unnamed rival devices for 97 per cent of wearers in noisy group settings, and that it leads on signal-to-noise performance in the same conditions. Trace either back and you arrive at in-house Signia white papers from 2026 that have not been released, with no disclosed protocol or sample. A third figure — a 54-fold gain in processing capacity, half again the energy efficiency, double the memory — is supported by a footnote whose entire content is that the yardstick was Signia IX. We are not suggesting the engineering is overstated; internal validation is normal and necessary. We are pointing out that nobody independent has looked, and that silicon capacity is a poor proxy for what a patient notices in a crowded room."
      },
      {
        title: "Ask Specifically About Auracast",
        body: "Every summary of MaX lists Auracast, and the chip does support it. What the summaries omit is Signia's own timetable: the feature is switched on by a firmware release due before March 2027. Today the aid is prepared for broadcast audio rather than able to use it. Given how hard the whole industry is promoting Auracast at the moment, that gap is worth naming. The built-in telecoil is live now and handles most loop-equipped theatres, halls, and houses of worship in Westchester."
      },
      {
        title: "The Gaps, Stated Plainly",
        body: "Outside testing: none, from any laboratory. Pricing: unannounced at every level. Also missing are the performance-tier breakdown, the fitting range, receiver strengths, and an ingress rating for dust and water. One absence stands out to us — tinnitus. Signia equips the IX family with tinnitus therapy as a matter of course, yet none of the MaX material refers to it. The likeliest explanation is that it simply carries over, but we would rather open the fitting software and check than print an assumption."
      },
      {
        title: "Eight Finishes, and Why It Is Not a Trivial Choice",
        body: "MaX is made in eight colours — Beige, Black, Chestnut Brown, Dark Champagne, Honey Blonde, Rose Gold, Silver and Titanium Grey. The finish alters nothing about the sound; the hardware underneath is identical. We mention it because it is one of the few parts of this decision that belongs entirely to you, and because it counts for more than specification sheets imply. Hearing aids only help while they are being worn, and hours per day is the strongest single predictor of benefit anyone has measured. Patients hoping the device will vanish against hair or skin generally settle on Beige, Honey Blonde or Chestnut Brown. Those who would rather it look like a piece of technology than a medical appliance usually prefer Black, Titanium Grey or Silver. At the fitting we hold the real finishes against your hair rather than asking you to pick from a screen."
      },
      {
        title: "The Fitting Decides More Than the Platform",
        body: "Specifications describe potential, not outcome. Every device we dispense is set to your prescription and then measured in your own ear canal with a probe microphone, and adjusted again over subsequent appointments as your hearing settles. Out-of-the-box manufacturer settings commonly land under target, which is how a thoroughly verified mid-tier aid ends up outperforming a premium one nobody checked. No amount of neural processing rescues amplification set wrong at the frequencies that matter to you."
      }
    ],
    videos: [
      {
        title: "Signia Pure Charge&Go MaX",
        youtubeId: "oGWxYOMZoGc"
      },
      {
        title: "Acoustic Intelligence: the four neural networks explained",
        youtubeId: "yjJOhxOC1r0"
      }
    ],
    faqs: [
      {
        question: "What does MaX stand for?",
        answer: "Multi-adaptive Xperience. Signia names its platforms this way — AX was Augmented Xperience, IX was Integrated Xperience. MaX is the 2026 generation and the current top of the range."
      },
      {
        question: "How does Signia MaX differ from Signia IX?",
        answer: "Three things, practically speaking. The processing is rebuilt around four specialised networks on a faster chip. Own-voice setup no longer needs a calibration step during your appointment. And telecoil plus Auracast hardware come as standard rather than requiring a particular model. Against that, IX is available in shapes MaX is not — custom, earbud, slim, power BTE, and CROS."
      },
      {
        question: "Has anyone outside Signia tested it?",
        answer: "No. As of late August 2026 every published figure originates with the manufacturer. Signia IX has been through independent laboratory assessment and performed strongly, so if verified measurement carries more weight with you than platform age, that comparison matters."
      },
      {
        question: "Can I get Signia MaX as a custom in-the-ear aid?",
        answer: "Not currently. The launch line-up is one device, the rechargeable Pure Charge&Go MaX, which rests behind the ear with the receiver seated in the canal. Custom shells, instant-fit tips, power behind-the-ear models, and CROS fittings are all available on Signia IX."
      },
      {
        question: "Is it worth holding out for, or should I be fitted now?",
        answer: "If hearing is a daily struggle, a properly verified fitting today will serve you better than waiting on a platform whose real-world results are still unmeasured. If your present aids are doing their job, nothing about this launch obliges you to move. Come in to either office and we will give you a straight answer."
      }
    ]
  },
  {
    slug: "oticon-intent",
    brandSlug: "oticon",
    title: "Oticon Intent",
    shortTitle: "Oticon Intent",
    subtitle: "Revolutionary user-intent sensors",
    menuDescription: "Oticon's BrainHearing™ technology enables natural, effortless hearing even in noisy settings.",
    image: "/assets/brands/Oticon-Intent-scale.webp",
    imageAlt: "Oticon Intent hearing aid",
    overview: [
      "Oticon Intent is a premium hearing aid family built around Oticon's BrainHearing™ approach and user-intent sensor technology. The goal is to support the way your brain naturally makes sense of sound, especially when your listening needs change from moment to moment.",
      "At Audiology Associates of Westchester, our audiology team can review your hearing test results, listening goals, dexterity needs, and lifestyle to determine whether Oticon Intent or another hearing aid option is appropriate for you."
    ],
    highlights: [
      "4D user-intent sensors that respond to conversation activity, movement, and sound environment",
      "Deep Neural Network 2.0 sound processing",
      "Rechargeable and battery-powered options depending on model",
      "Bluetooth streaming with compatible phones and accessories",
      "Designed for more natural sound access in complex listening settings"
    ],
    technology: [
      {
        title: "BrainHearing™ Technology",
        body: "Oticon designs its hearing technology around the brain's role in hearing. Instead of only making sounds louder, the system is designed to preserve more of the sound scene so speech and environmental cues remain easier to interpret."
      },
      {
        title: "User-Intent Sensors",
        body: "Intent technology uses multiple inputs, including motion and sound-scene information, to adjust support as your listening situation changes."
      }
    ],
    videos: [
      {
        title: "Oticon Intent product video",
        youtubeId: "gzX6A5w0ilE"
      }
    ],
    faqs: [
      {
        question: "Is Oticon Intent right for every type of hearing loss?",
        answer: "Not necessarily. A hearing evaluation and hearing aid consultation are needed to determine whether Oticon Intent is a good match for your hearing profile and communication goals."
      },
      {
        question: "Can Oticon Intent connect to my phone?",
        answer: "Oticon Intent supports wireless connectivity with compatible devices. The office can confirm compatibility with your phone and preferred accessories."
      }
    ]
  },
  {
    slug: "oticon-zeal",
    brandSlug: "oticon",
    title: "Oticon Zeal",
    shortTitle: "Oticon Zeal",
    subtitle: "The world's first invisible hearing aid with complete connectivity",
    menuDescription: "The world's first invisible hearing aid with complete connectivity.",
    image: "/assets/brands/Oticon-Zeal.png",
    imageAlt: "Oticon Zeal hearing aid",
    overview: [
      "Oticon Zeal introduces a new NXT in-the-ear category: a deeply discreet hearing aid designed to combine near-invisible placement with advanced sound processing, rechargeability, and wireless connectivity.",
      "Because the device sits deep in the ear canal, candidacy depends on your ear anatomy, hearing needs, comfort, and clinical goals. Audiology Associates of Westchester can help you understand whether this style is appropriate as availability and candidacy are confirmed."
    ],
    highlights: [
      "Completely-in-canal style designed to be invisible or barely visible for many users",
      "AI-powered sound processing with Deep Neural Network 2.0",
      "Rechargeable design with all-day battery goals",
      "Bluetooth LE Audio and Auracast-ready technology where supported",
      "Instant-fit and custom-fit pathways depending on clinical needs"
    ],
    technology: [
      {
        title: "Invisible Design Without the Old Tradeoffs",
        body: "Traditional invisible hearing aids often required compromises around batteries or connectivity. Zeal is designed to bring more premium features into an in-ear form factor."
      },
      {
        title: "Professional Fitting Matters",
        body: "A deep-fitting device needs careful clinical selection and verification. Real-ear measurement, comfort checks, and follow-up care help ensure the technology is matched to your hearing needs."
      }
    ],
    faqs: [
      {
        question: "When will Oticon Zeal be available?",
        answer: "Availability can change by market and timing. Please contact Audiology Associates of Westchester directly for current availability and candidacy guidance."
      },
      {
        question: "Who is a good candidate for Oticon Zeal?",
        answer: "It may be considered for people who want a discreet in-ear solution, but candidacy depends on hearing level, ear canal anatomy, comfort, and clinical recommendations."
      }
    ]
  },
  {
    slug: "phonak-lyric",
    brandSlug: "phonak",
    title: "Phonak Lyric",
    shortTitle: "Phonak Lyric",
    subtitle: "Invisible extended-wear hearing aids",
    menuDescription: "Invisible, extended-wear Lyric Hearing Aids deliver exceptional sound with total discretion.",
    image: "/assets/brands/Phonak-Lyric-Hearing-Aid.webp",
    imageAlt: "Phonak Lyric invisible hearing aid",
    overview: [
      "Phonak Lyric is an extended-wear hearing aid placed deep in the ear canal by a trained professional. It is designed to remain out of sight and can be worn continuously for long periods between office visits.",
      "Lyric is not appropriate for every ear canal or every hearing loss. A consultation is needed to check anatomy, hearing needs, medical considerations, and comfort."
    ],
    highlights: [
      "Deep-canal placement for a highly discreet appearance",
      "Extended-wear design with no daily insertion or removal",
      "Professional placement and replacement visits",
      "Natural use of the outer ear for sound collection",
      "Useful for patients who prioritize discretion and simplicity"
    ],
    technology: [
      {
        title: "Extended-Wear Design",
        body: "Lyric is worn deep in the ear canal and managed through in-office care rather than daily handling."
      },
      {
        title: "Clinical Candidacy",
        body: "Ear canal shape, skin health, hearing needs, and lifestyle all influence whether Lyric is a good option."
      }
    ],
    videos: [
      {
        title: "Phonak Lyric product video",
        youtubeId: "OTQUD3DKXi4"
      }
    ],
    faqs: [
      {
        question: "Can I sleep with Lyric hearing aids?",
        answer: "Lyric is designed for extended wear, including many normal daily activities. Your audiologist will review care instructions and limitations during candidacy evaluation."
      },
      {
        question: "Is Lyric visible?",
        answer: "Lyric is placed deeply in the ear canal and is designed to be highly discreet, but fit and visibility vary by anatomy."
      }
    ]
  },
  {
    slug: "phonak-infinio",
    brandSlug: "phonak",
    title: "Phonak Infinio",
    shortTitle: "Phonak Infinio",
    subtitle: "Swiss engineering with AI dual-chip technology",
    menuDescription: "Swiss engineering, AI dual-chip technology, and universal connectivity ensure unmatched clarity.",
    image: "/assets/brands/Phonak-Infinio-copper-scale.webp",
    imageAlt: "Phonak Infinio hearing aid",
    overview: [
      "Phonak Infinio hearing aids bring Phonak's newest platform approach to speech clarity, comfort, and connectivity. The platform is designed to support understanding in demanding listening environments while preserving ease of use.",
      "Audiology Associates of Westchester can help determine whether Infinio, Lyric, or another hearing aid family best matches your communication needs."
    ],
    highlights: [
      "AI-assisted speech-in-noise processing on select models",
      "Universal Bluetooth connectivity goals across many devices",
      "Rechargeable styles depending on model",
      "Compatible accessories for challenging listening situations",
      "Personalized fitting, verification, and support"
    ],
    technology: [
      {
        title: "SmartSpeech™ and AutoSense",
        body: "Phonak technology is designed to analyze the listening environment and adjust automatically for improved comfort and speech access."
      },
      {
        title: "Connectivity Focus",
        body: "Phonak is known for broad wireless connectivity options that can support phone calls, media, and accessories."
      }
    ],
    videos: [
      {
        title: "Phonak Infinio product video",
        youtubeId: "Guo_O9duNz0"
      }
    ],
    faqs: [
      {
        question: "What makes Phonak Infinio different?",
        answer: "Infinio focuses on speech clarity, adaptive processing, and connectivity. The best comparison depends on your hearing test and real-world listening priorities."
      },
      {
        question: "Can Phonak Infinio help in restaurants?",
        answer: "Advanced hearing aids may help in noise, but benefit varies. A professional fitting and follow-up programming are important for difficult listening environments."
      }
    ]
  },
  {
    slug: "signia-ix",
    brandSlug: "signia",
    title: "Signia IX",
    shortTitle: "Signia IX",
    subtitle: "The broad Signia range, and the one with laboratory results behind it",
    menuDescription: "Custom, instant-fit, slim, and CROS styles, independently measured.",
    image: "/assets/brands/Signia-IX.webp",
    imageAlt: "Signia IX hearing aid",
    overview: [
      "Integrated Xperience reached the market in 2023, engineered around conversations that will not sit still — several people talking, heads turning, the speaker changing every few seconds. Signia introduced a successor in August 2026, but IX has not been retired. The catalogue still lists it in full, and a fresh IX model shipped as recently as July 2026.",
      "We continue to recommend it often, and not as a fallback. Two reasons. It exists in almost every shape Signia manufactures, whereas the newer platform currently ships in one. And its performance has been assessed by laboratories with no stake in the answer, which is not yet true of anything newer.",
      "Both the Harrison and the Somers office fit the whole IX family. If you would like to hear it against Signia MaX, or against another manufacturer entirely, we can arrange that within a single appointment."
    ],
    highlights: [
      "Assessed by independent laboratory testing, with the Pure Charge&Go BCT IX rated 4.4 out of 5 and the Active Pro IX landing in the leading five per cent of devices examined",
      "Available as a custom shell, an instant-fit tip, a slim profile, a power behind-the-ear, an earbud shape, or a CROS pairing for one-sided hearing",
      "Tinnitus therapy is included throughout the family — something the newer platform's launch material never mentions",
      "Rechargeable across most of the line, with cases that charge and protect at the same time",
      "Actively supported: fitting software, firmware, servicing, and accessories all ongoing"
    ],
    technology: [
      {
        title: "Conversations That Will Not Hold Still",
        body: "IX was designed for the situation patients describe most often as impossible — a table of people where whoever is talking keeps changing. Instead of committing to one direction and holding it, the platform can pick out several voices at once and follow them as they move around you."
      },
      {
        title: "What Outside Testing Showed",
        body: "Here IX has something its successor cannot yet claim. Independent laboratory assessment, carried out by an organisation that gains nothing from the verdict, rated the Pure Charge&Go BCT IX at 4.4 out of 5 and put the Active Pro IX inside the leading five per cent of every hearing aid it has examined. Those are genuinely strong marks. Signia MaX has not been through any comparable process, and previous launches suggest that will remain the case for some months."
      },
      {
        title: "A Shape for Nearly Every Fitting",
        body: "The breadth is the point. Pure Charge&Go is the everyday rechargeable, with a telecoil-equipped sibling for loop systems. Silk seats itself in the canal with no impression taken and is close to undetectable. Styletto reads as a piece of consumer electronics rather than a medical device. Motion handles substantial hearing losses from behind the ear. Active and Active Mini borrow the earbud silhouette. Insio is made from a mould of your own ear. Several of these also come in CROS form where hearing is limited to one side."
      },
      {
        title: "Everyday Rechargeability",
        body: "Most IX models charge overnight and run a full day with streaming included, topping up quickly when needed. Patients who find tiny disposable cells awkward to handle often rate this above any processing specification, and we think that judgement is sound."
      }
    ],
    videos: [
      {
        title: "Signia IX product video",
        youtubeId: "0fHS3TYitA8"
      }
    ],
    faqs: [
      {
        question: "Now that MaX exists, can I still get Signia IX?",
        answer: "Yes. The complete IX family remains in Signia's catalogue next to MaX, and a new IX model was released in July 2026, a month ahead of the MaX announcement. Servicing, repairs, firmware, and accessories all carry on, and we dispense IX from both locations."
      },
      {
        question: "Which should I choose, IX or MaX?",
        answer: "If the right device for your ears is a custom shell, an instant-fit, a power BTE, a slim model, or a CROS pairing, only IX offers it. If a receiver-in-canal aid suits you, then weigh the newer architecture against laboratory results and probable pricing. We are glad to demonstrate the two together."
      },
      {
        question: "Will Signia IX help with tinnitus?",
        answer: "Tinnitus therapy signals come as standard across IX and we configure them during your fitting. It is worth noting that MaX's launch documentation is silent on tinnitus altogether; we anticipate the features transfer, but IX is the one we can presently stand behind on this. Sound delivered through hearing aids is one element of tinnitus care, and rarely the entire answer on its own."
      },
      {
        question: "Are they rechargeable?",
        answer: "The majority are. Which charger and which style depends on the model you and your audiologist settle on — a few of the very smallest custom devices still take a disposable cell, simply because there is no room for a rechargeable one."
      }
    ]
  },
  {
    slug: "widex-allure",
    brandSlug: "widex",
    title: "Widex Allure",
    shortTitle: "Widex Allure",
    subtitle: "Natural sound clarity with modern processing",
    menuDescription: "Family-owned since 1956, delivering natural sound clarity with innovative technology.",
    image: "/assets/brands/Widex-Allure.webp",
    imageAlt: "Widex Allure hearing aid",
    overview: [
      "Widex Allure is built for patients who value natural sound quality, comfortable listening, and modern hearing aid performance. Widex has long emphasized sound clarity and listening comfort across its technology.",
      "A professional hearing aid fitting helps determine whether Widex Allure's sound profile and features match your hearing needs and preferences."
    ],
    highlights: [
      "Natural sound-focused processing",
      "Rechargeable options depending on model",
      "Wireless controls and accessories with compatible devices",
      "Support for speech clarity and listening comfort",
      "Fine-tuning based on real-world feedback"
    ],
    technology: [
      {
        title: "Sound Quality First",
        body: "Widex technology is often selected by patients who place a high value on naturalness and comfort in everyday listening."
      },
      {
        title: "Personal Fine-Tuning",
        body: "Your audiologist can adjust settings over time as you experience the devices at home, work, and social settings."
      }
    ],
    videos: [
      {
        title: "Widex Allure product video",
        youtubeId: "-2eTLqcBUYU"
      },
      {
        title: "Widex Allure receiver-in-canal video",
        youtubeId: "SpFXfGdDb9E"
      }
    ],
    faqs: [
      {
        question: "Is Widex Allure good for music?",
        answer: "Widex hearing aids are often considered by patients who value sound quality. Your audiologist can discuss music and lifestyle needs during consultation."
      },
      {
        question: "How do I compare Widex with Oticon or Phonak?",
        answer: "Comparison should be based on hearing test results, sound preference, connectivity needs, comfort, and follow-up support."
      }
    ]
  },
  {
    slug: "resound-vivia",
    brandSlug: "resound",
    title: "ReSound Vivia",
    shortTitle: "ReSound Vivia",
    subtitle: "Connected hearing technology for everyday life",
    menuDescription: "Pioneering award-winning hearing solutions and connectivity advancements since 1943.",
    image: "/assets/brands/ReSound-Vivia.webp",
    imageAlt: "ReSound Vivia hearing aid",
    overview: [
      "ReSound Vivia hearing aids continue ReSound's emphasis on connectivity, natural listening, and practical technology for daily communication.",
      "Audiology Associates of Westchester can help compare ReSound Vivia with other product families so you understand the tradeoffs among sound quality, phone compatibility, comfort, and style."
    ],
    highlights: [
      "Modern wireless connectivity with compatible devices",
      "Rechargeable options depending on model",
      "Designed for comfort in everyday environments",
      "Accessory options for streaming and remote microphones",
      "Professional fitting and follow-up adjustments"
    ],
    technology: [
      {
        title: "Connectivity Heritage",
        body: "ReSound is known for hearing aid connectivity and app-based controls that help patients manage daily listening."
      },
      {
        title: "Real-World Adjustments",
        body: "A successful fitting includes both initial programming and follow-up visits based on your actual listening experiences."
      }
    ],
    videos: [
      {
        title: "ReSound Vivia product video",
        youtubeId: "ZZGkgKNjl3Y"
      }
    ],
    faqs: [
      {
        question: "Can ReSound Vivia stream phone calls?",
        answer: "Streaming features depend on model and phone compatibility. The office can check your device and explain options."
      },
      {
        question: "Is ReSound Vivia rechargeable?",
        answer: "Rechargeable options may be available depending on the selected model and style."
      }
    ]
  },
  {
    slug: "eargear",
    title: "Ear Gear",
    shortTitle: "Ear Gear",
    subtitle: "Custom earplugs and earmolds",
    menuDescription: "Custom earplugs and earmolds for hearing needs.",
    image: "/assets/brands/earmolds-earplugs.webp",
    imageAlt: "Custom colorful earmolds",
    overview: [
      "Ear Gear includes custom earplugs, earmolds, and hearing protection options for patients who want protection, comfort, and a more precise fit than over-the-counter options.",
      "Audiology Associates of Westchester provides hearing protection guidance for musicians, workers, swimmers, hunters, recreational users, and anyone concerned about noise exposure."
    ],
    highlights: [
      "Custom earmolds and earplugs",
      "Options for music, recreation, work, and sleep",
      "Hearing protection counseling",
      "Fit guidance for comfort and seal",
      "Appropriate referral when medical ear concerns are present"
    ],
    technology: [
      {
        title: "Custom Fit",
        body: "Custom ear products are made from impressions or scans so they fit the ear more precisely than generic plugs."
      },
      {
        title: "Protection for Real Life",
        body: "Different activities need different levels and styles of protection. The audiology team can help choose the right option."
      }
    ],
    faqs: [
      {
        question: "Who should consider custom earplugs?",
        answer: "Musicians, concertgoers, workers in noise, swimmers, motorcyclists, hunters, and people with sound sensitivity may benefit from custom-fit options."
      },
      {
        question: "Are custom earplugs the same as hearing aids?",
        answer: "No. Custom earplugs are protective or comfort devices, while hearing aids are programmed amplification devices for hearing loss."
      }
    ]
  },
  {
    slug: "starkey-edge-ai",
    brandSlug: "starkey",
    title: "Starkey Edge AI",
    shortTitle: "Starkey Edge AI",
    subtitle: "AI-powered adaptive hearing technology",
    menuDescription: "Pioneered American innovation, cutting-edge styles with AI-powered adaptive technology.",
    image: "/assets/brands/Starkey-Edge-AI.webp",
    imageAlt: "Starkey Edge AI hearing aid",
    overview: [
      "Starkey Edge AI is designed around onboard artificial intelligence that adapts to real-world listening environments. It supports speech clarity, comfort, and everyday usability through modern hearing aid styles and wireless features.",
      "Our audiologists can compare Starkey technology with other hearing aid platforms and help you choose based on your hearing test, listening environments, phone needs, and care preferences."
    ],
    highlights: [
      "AI-driven processing for changing environments",
      "Multiple hearing aid styles depending on hearing needs",
      "Rechargeable options and wireless accessories",
      "Designed for daily comfort and practical use",
      "Personalized programming and follow-up care"
    ],
    technology: [
      {
        title: "Adaptive Sound Processing",
        body: "AI-assisted processing helps the devices respond to changing sound scenes, from quiet rooms to busier social settings."
      },
      {
        title: "Everyday Support",
        body: "The right fitting balances speech clarity, sound comfort, cosmetics, connectivity, and maintenance needs."
      }
    ],
    videos: [
      {
        title: "Starkey Edge AI product video",
        youtubeId: "38q7GgjS--I"
      }
    ],
    faqs: [
      {
        question: "Does Starkey Edge AI require a smartphone?",
        answer: "A smartphone may unlock additional controls and features, but your audiologist can review what is needed for your preferred setup."
      },
      {
        question: "Can Starkey hearing aids be adjusted after fitting?",
        answer: "Yes. Follow-up appointments allow the audiologist to fine-tune settings as you adapt to everyday listening."
      }
    ]
  }
];

export const productBrands: ProductBrand[] = [
  {
    slug: "oticon",
    name: "Oticon",
    headline: "Brain-focused hearing technology",
    summary:
      "Oticon hearing aids are built around BrainHearing™ technology, supporting the way the brain naturally processes speech and surrounding sound.",
    legacy:
      "Founded in 1904, Oticon has helped shape modern hearing technology with research focused on the connection between the ear, the brain, and everyday communication.",
    technology: [
      {
        title: "BrainHearing™",
        body: "Oticon technology is designed to provide access to a fuller sound scene, helping reduce listening effort in complex environments."
      },
      {
        title: "Premium product families",
        body: "Oticon Reveal, Oticon Intent, and Oticon Zeal represent three different directions: Dual AI sound processing, user-intent sensing, and deeply discreet in-ear design."
      }
    ],
    products: ["oticon-reveal", "oticon-intent", "oticon-zeal"]
  },
  {
    slug: "phonak",
    name: "Phonak",
    headline: "Swiss engineering excellence",
    summary:
      "Phonak hearing aids are known for speech-in-noise technology, broad connectivity, and practical solutions for many hearing needs.",
    legacy:
      "Founded in Switzerland, Phonak has spent decades developing hearing solutions that help people communicate in demanding real-world environments.",
    technology: [
      {
        title: "Speech and connectivity",
        body: "Phonak platforms emphasize automatic environmental adaptation and wireless connection to phones, accessories, and remote microphones."
      },
      {
        title: "Multiple product pathways",
        body: "Phonak Infinio focuses on advanced daily amplification, while Lyric offers a deep-canal extended-wear option for appropriate candidates."
      }
    ],
    products: ["phonak-infinio", "phonak-lyric"]
  },
  {
    slug: "starkey",
    name: "Starkey",
    headline: "American innovation with AI-powered support",
    summary:
      "Starkey hearing aids combine modern processing, comfort, and AI-assisted features across a range of discreet and practical styles.",
    legacy:
      "Starkey has developed hearing technology in the United States for decades, with a focus on personalization, usability, and real-world communication.",
    technology: [
      {
        title: "AI in everyday listening",
        body: "Starkey Edge AI is designed to adapt to changing environments and support speech clarity throughout the day."
      },
      {
        title: "Style flexibility",
        body: "Starkey offers several hearing aid styles, making it possible to balance cosmetics, power, handling, and connectivity."
      }
    ],
    products: ["starkey-edge-ai"]
  },
  {
    slug: "signia",
    name: "Signia",
    headline: "Two current Signia platforms, suited to different patients",
    summary:
      "Signia concentrates on speech clarity in demanding rooms, comfortable own-voice sound, and rechargeable convenience. MaX, released in 2026, distributes its processing across four neural networks; IX, the preceding platform, is still sold and reaches far more device shapes.",
    legacy:
      "The brand descends from Siemens' hearing division, renamed Signia in 2016 — better than a hundred years of work on intelligible speech, now expressed through contemporary platforms and understated industrial design.",
    technology: [
      {
        title: "Signia MaX, released 2026",
        body: "Where most AI-branded hearing aids depend on one trained model, MaX divides the job among four, and folds Bluetooth, a telecoil, and Auracast circuitry into a single unit. It launched in August 2026 as one rechargeable style, and each performance claim published so far traces back to Signia's own research rather than an outside assessor."
      },
      {
        title: "Signia IX, still sold and far broader",
        body: "The earlier platform continues in production. Custom shells, instant-fit tips, slim profiles, power behind-the-ear models, earbud shapes, and CROS pairings are all IX and none are MaX. Tinnitus therapy is standard on IX, and independent laboratories have measured it."
      },
      {
        title: "How your own voice sounds",
        body: "New wearers frequently complain that their own speech comes back boomy or hollow. Signia has invested in this problem for longer than most of its rivals, and on MaX the correction applies itself from first fit, with no calibration routine to sit through in the clinic."
      },
      {
        title: "Measured on your ear, not on paper",
        body: "The platform matters less than the fitting. We check what actually reaches your eardrum against your prescription, because factory defaults regularly undershoot it — and a properly verified IX will beat an unchecked MaX in the rooms where you actually need to hear."
      }
    ],
    products: ["signia-max", "signia-ix"]
  },
  {
    slug: "widex",
    name: "Widex",
    headline: "Natural sound specialists since 1956",
    summary:
      "Widex hearing aids are often selected by patients who value natural sound quality, comfort, and careful fine-tuning.",
    legacy:
      "Widex has advanced hearing technology for decades with an emphasis on sound quality and listening comfort.",
    technology: [
      {
        title: "Natural sound",
        body: "Widex Allure continues the brand's focus on natural sound clarity and comfortable daily listening."
      },
      {
        title: "Personalized fitting",
        body: "Professional programming helps match the device to your hearing test, sound preferences, and lifestyle."
      }
    ],
    products: ["widex-allure"]
  },
  {
    slug: "resound",
    name: "ReSound",
    headline: "Connectivity pioneers since 1943",
    summary:
      "ReSound hearing aids are known for connected listening, wireless features, and practical support for daily communication.",
    legacy:
      "ReSound has developed hearing solutions since 1943 and is recognized for connectivity innovation across modern hearing aid platforms.",
    technology: [
      {
        title: "Connected hearing",
        body: "ReSound Vivia supports modern wireless features and daily listening comfort with compatible devices."
      },
      {
        title: "Real-world usability",
        body: "Your audiologist can review phone compatibility, accessories, and follow-up needs before selecting a device."
      }
    ],
    products: ["resound-vivia"]
  }
];

export const productMenuCards = hearingAidProducts.map((product) => ({
  title: product.shortTitle,
  description: product.menuDescription,
  href: product.brandSlug
    ? `${hearingAidBrandsPath}/${product.brandSlug}/${product.slug}`
    : `${productsRootPath}/${product.slug}`,
  image: product.image
}));

export function brandPath(slug: string) {
  return `${hearingAidBrandsPath}/${slug}`;
}

export function productPath(product: HearingAidProduct) {
  return product.brandSlug ? `${brandPath(product.brandSlug)}/${product.slug}` : `${productsRootPath}/${product.slug}`;
}

export function brandForPath(path: string) {
  return productBrands.find((brand) => brandPath(brand.slug) === path);
}

export function productForPath(path: string) {
  return hearingAidProducts.find((product) => productPath(product) === path);
}

export function brandForProduct(product: HearingAidProduct) {
  return product.brandSlug ? productBrands.find((brand) => brand.slug === product.brandSlug) : undefined;
}
