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
    subtitle: "Rechargeable hearing aids for conversation in motion",
    menuDescription: "Innovative, rechargeable hearing aids with over a century of excellence.",
    image: "/assets/brands/Signia-IX.webp",
    imageAlt: "Signia IX hearing aid",
    overview: [
      "Signia IX hearing aids are designed to support conversation clarity in dynamic environments, including moments when people are moving, turning, or speaking from different directions.",
      "Our team can review Signia IX alongside other premium hearing aid options and help you decide what fits your hearing, comfort, and technology preferences."
    ],
    highlights: [
      "Rechargeable options",
      "Speech-focused processing for group settings",
      "Multiple styles depending on clinical needs",
      "App-based controls with compatible devices",
      "Personalized programming and counseling"
    ],
    technology: [
      {
        title: "Conversation Support",
        body: "Signia IX is built to help speech remain accessible in real-world conversations, including noisier and more active environments."
      },
      {
        title: "Rechargeable Convenience",
        body: "Rechargeable hearing aids can simplify daily use for patients who prefer not to change disposable batteries."
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
        question: "Are Signia IX hearing aids rechargeable?",
        answer: "Many Signia IX options are rechargeable. The exact style and charger depend on the model selected with your audiologist."
      },
      {
        question: "Does Signia IX work for group conversations?",
        answer: "The platform is designed with conversation support in mind, but results depend on hearing needs, fit, and programming."
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
        body: "Oticon Intent and Oticon Zeal represent two different directions: advanced user-intent sensing and deeply discreet in-ear design."
      }
    ],
    products: ["oticon-zeal", "oticon-intent"]
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
    headline: "Conversation-focused rechargeable hearing aids",
    summary:
      "Signia hearing aids emphasize speech understanding, rechargeable convenience, and modern features for active conversations.",
    legacy:
      "With roots connected to more than a century of hearing technology, Signia offers modern hearing aid platforms for many lifestyles.",
    technology: [
      {
        title: "Conversation in motion",
        body: "Signia IX is designed to help keep conversations accessible in dynamic settings where people and sound sources move."
      },
      {
        title: "Rechargeable convenience",
        body: "Rechargeable styles can reduce daily battery handling and simplify the routine for many patients."
      }
    ],
    products: ["signia-ix"]
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
