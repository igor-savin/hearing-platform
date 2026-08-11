import { allServiceLinks, baseUrl, locationForPath, locations, primaryPhone, siteName, type SitePage } from "@/lib/site";
import {
  brandForPath,
  brandForProduct,
  brandPath,
  hearingAidBrandsPath,
  productForPath,
  productsRootPath
} from "@/lib/products";
import { helpServiceForPath, howWeCanHelpRootPath } from "@/lib/howWeCanHelp";
import { tinnitusPageForPath, tinnitusRootPath } from "@/lib/tinnitus";
import {
  cityForPath,
  countyForCity,
  countyForPath,
  countyPath,
  serviceAreasRootPath
} from "@/lib/serviceAreas";
import { providerForPath, providerProfiles, providerPath } from "@/lib/team";

// JSON-LD requires absolute URLs. Local assets are stored as root-relative
// paths so next/image can optimize them; absolutize them here.
function absoluteImageUrl(src: string) {
  return src.startsWith("/") ? `${baseUrl}${src}` : src;
}

// Directory listings and profiles that describe this same practice. `sameAs` is
// how we tell search engines that this website and those listings are one
// entity, which is a cheap and durable local-SEO signal.
//
// Recovered on 2026-08-11 from the JSON-LD on the live Duda homepage, which was
// the only place the list was written down. It was split across that site's two
// MedicalClinic blocks (White Plains and Harrison); both describe this one
// organization, so they are merged here.
//
// Every entry must be a profile OF this practice. Do not add press coverage,
// articles, or individual clinicians' profiles — those are different entities
// and weaken the signal.
const entityCitations = [
  // Social
  "https://www.facebook.com/AAofW",
  "https://twitter.com/audiologyassoci",
  "https://foursquare.com/v/audiology-associates-of-westchester/4fdf8720e4b044e8239b27c7",

  // Review and healthcare directories
  "https://www.yelp.com/biz/audiology-associates-of-westchester-white-plains-2",
  "https://www.yelp.com/biz/audiology-associates-of-westchester-harrison",
  "https://www.healthgrades.com/group-directory/ny-new-york/white-plains/audiology-associates-of-westchester-oy56cmg",
  "https://www.healthyhearing.com/hearing-aids/26654-audiology-associates-of-westchester",
  "https://www.healthcare4ppl.com/medical-group/new-york/white-plains/audiology-associates-of-westchester-llc-5496050254.html",

  // NPI registries
  "https://npino.com/audiologist/1801251699-audiology-associates-of-westchester%2C-llc/",
  "https://npidb.org/organizations/speech_language_hearing/audiologist_231h00000x/1801251699.aspx",

  // General business directories
  "https://www.yellowpages.com/white-plains-ny/mip/audiology-associates-of-westchester-472805248",
  "https://www.yellowpages.com/harrison-ny/mip/audiology-associates-of-westchester-at-scarsdale-medical-group-546541162",
  "https://www.superpages.com/bp/white-plains-ny/audiology-associates-of-westchester-L2251951863.htm",
  "https://www.superpages.com/bp/harrison-ny/sensible-hearing-solutions-L2097124629.htm",
  "https://www.dexknows.com/business_profiles/audiology_associates_of_westchester-b901902168",
  "https://www.dexknows.com/business_profiles/audiology_associates_of_westchester-b2200053408",
  "https://www.whitepages.com/business/NY/Harrison/Audiology-Associates-Of-Westchester/b-1mnh6i4",
  "https://find-open.com/white-plains/audiology-associates-of-westchester-at-the-burke-rehabilitation-hospital-2013362",
  "https://verview.com/biz/9759121-audiology-associates-of-westchester-at-scarsdale-medical-group-harrison-new-york",

  // Maps
  "https://www.mapquest.com/us/new-york/audiology-associates-of-westchester-266045933",
  "https://www.mapquest.com/us/new-york/audiology-associates-of-westchester-375968230",
  "https://www.mapquest.com/us/new-york/audiology-associates-of-westchester-388226481",

  // Industry locators
  "https://locations.starkey.com/ny/whiteplains/hearing-aids_white-plains_ny_704741.html",
  "https://audiologists.cmac.ws/audiology-associates-of-westchester-at-the-burke-rehabilitation-hospital/6135/"
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${baseUrl}/#organization`,
    name: siteName,
    url: baseUrl,
    telephone: primaryPhone,
    medicalSpecialty: "Audiology",
    areaServed: ["Westchester County", "White Plains", "Harrison", "Somers", "Scarsdale", "Rye", "Mt. Kisco", "Greenwich"],
    sameAs: entityCitations,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: primaryPhone,
      contactType: "appointments",
      areaServed: "US",
      availableLanguage: "English"
    },
    department: locations
      .filter((location) => location.type === "office")
      .map((location) => ({
        "@id": `${baseUrl}${location.path}/#localbusiness`
      }))
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteName,
    url: baseUrl,
    publisher: {
      "@id": `${baseUrl}/#organization`
    },
    potentialAction: {
      "@type": "ContactAction",
      target: `${baseUrl}/contact-us`,
      name: "Request an audiology appointment"
    }
  };
}

export function breadcrumbSchema(page: SitePage) {
  const crumbs = productBreadcrumbItems(page) || areaBreadcrumbItems(page) || tinnitusBreadcrumbItems(page) || howWeCanHelpBreadcrumbItems(page);
  const itemListElement = (crumbs || [
    {
      name: "Home",
      item: baseUrl
    }
  ]).map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.item
  }));

  if (!crumbs && page.path !== "/") {
    itemListElement.push({
      "@type": "ListItem",
      position: itemListElement.length + 1,
      name: page.h1,
      item: page.canonical
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement
  };
}

function tinnitusBreadcrumbItems(page: SitePage) {
  const tinnitusPage = tinnitusPageForPath(page.path);
  if (!tinnitusPage) return null;
  return [
    { name: "Home", item: baseUrl },
    { name: "How We Can Help", item: `${baseUrl}${howWeCanHelpRootPath}` },
    { name: "Tinnitus Management", item: `${baseUrl}${tinnitusRootPath}` },
    { name: tinnitusPage.title, item: page.canonical }
  ];
}

function howWeCanHelpBreadcrumbItems(page: SitePage) {
  if (page.path !== howWeCanHelpRootPath && !page.path.startsWith(`${howWeCanHelpRootPath}/`)) return null;
  const items = [
    { name: "Home", item: baseUrl },
    { name: "How We Can Help", item: `${baseUrl}${howWeCanHelpRootPath}` }
  ];
  const helpService = helpServiceForPath(page.path);
  if (helpService) {
    items.push({ name: helpService.title, item: page.canonical });
  }
  return items;
}

function areaBreadcrumbItems(page: SitePage) {
  if (page.type !== "service-areas-index" && page.type !== "area-county" && page.type !== "area-city") return null;
  const city = cityForPath(page.path);
  const county = city ? countyForCity(city) : countyForPath(page.path);
  const items = [
    { name: "Home", item: baseUrl },
    { name: "Areas We Serve", item: `${baseUrl}${serviceAreasRootPath}` }
  ];

  if (county) {
    items.push({
      name: `${county.name}, ${county.state}`,
      item: `${baseUrl}${countyPath(county.slug)}`
    });
  }

  if (city) {
    items.push({
      name: `${city.name}, ${city.state}`,
      item: page.canonical
    });
  }

  return items;
}

function productBreadcrumbItems(page: SitePage) {
  const product = productForPath(page.path);
  const brand = product ? brandForProduct(product) : brandForPath(page.path);

  if (
    page.path !== productsRootPath &&
    page.path !== hearingAidBrandsPath &&
    page.type !== "product-brand" &&
    page.type !== "product"
  ) {
    return null;
  }

  const items = [
    { name: "Home", item: baseUrl },
    { name: "Products", item: `${baseUrl}${productsRootPath}` }
  ];

  if (page.path === productsRootPath) return items;

  if (product && !product.brandSlug) {
    items.push({ name: product.title, item: page.canonical });
    return items;
  }

  items.push({ name: "Hearing Aid Brands", item: `${baseUrl}${hearingAidBrandsPath}` });

  if (brand) {
    items.push({ name: brand.name, item: `${baseUrl}${brandPath(brand.slug)}` });
  }

  if (product) {
    items.push({ name: product.title, item: page.canonical });
  }

  return items;
}

export function pageSchema(page: SitePage) {
  const base = {
    "@context": "https://schema.org",
    "@type": page.type === "blog-post" ? "BlogPosting" : "WebPage",
    "@id": `${page.canonical}#webpage`,
    url: page.canonical,
    name: page.h1,
    headline: page.h1,
    description: page.metaDescription,
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#organization` },
    potentialAction:
      page.type === "service" || page.type === "location" || page.type === "service-area"
        ? {
            "@type": "ReserveAction",
            name: "Request an appointment",
            target: `${baseUrl}/contact-us`
          }
        : undefined,
    primaryImageOfPage: page.heroImage
      ? {
          "@type": "ImageObject",
          url: absoluteImageUrl(page.heroImage.src),
          caption: page.heroImage.alt || page.h1
        }
      : undefined
  };

  if (page.type === "blog-post") {
    return {
      ...base,
      author: { "@id": `${baseUrl}/#organization` },
      publisher: { "@id": `${baseUrl}/#organization` },
      dateModified: page.lastModified,
      datePublished: page.lastModified
    };
  }

  return base;
}

export function faqSchema(page: SitePage) {
  if (!page.faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function serviceSchema(page: SitePage) {
  if (page.type !== "service") return null;
  const service = allServiceLinks.find((item) => item.path === page.path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${page.canonical}#service`,
    name: service?.title || page.h1,
    description: service?.description || page.metaDescription,
    provider: { "@id": `${baseUrl}/#organization` },
    serviceType: "Audiology",
    category: "Hearing care",
    areaServed: ["Westchester County", "White Plains", "Harrison", "Somers", "Scarsdale", "Rye", "Mt. Kisco", "Greenwich"],
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: 18
    },
    potentialAction: {
      "@type": "ReserveAction",
      name: "Request an audiology appointment",
      target: `${baseUrl}/contact-us`
    },
    availableChannel: locations
      .filter((location) => location.type === "office")
      .map((location) => ({
        "@type": "ServiceChannel",
        serviceLocation: { "@id": `${baseUrl}${location.path}/#localbusiness` }
      }))
  };
}

export function localBusinessSchema(page: SitePage) {
  const location = locationForPath(page.path);
  if (!location || location.type !== "office") return null;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${baseUrl}${location.path}/#localbusiness`,
    name: `${siteName} - ${location.city}`,
    url: `${baseUrl}${location.path}`,
    telephone: location.phone,
    priceRange: "$$",
    parentOrganization: { "@id": `${baseUrl}/#organization` },
    medicalSpecialty: "Audiology",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.postalCode,
      addressCountry: "US"
    },
    hasMap: location.directionsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`,
    areaServed: [location.city, ...location.nearby],
    makesOffer: allServiceLinks.slice(0, 8).map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `${baseUrl}${service.path}`
      }
    })),
    potentialAction: {
      "@type": "ReserveAction",
      name: "Request an audiology appointment",
      target: `${baseUrl}/contact-us`
    },
    openingHoursSpecification: location.hours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      description: hours
    }))
  };
}

export function personSchemas(page: SitePage) {
  if (page.type === "provider") {
    const provider = providerForPath(page.path);
    if (!provider) return [];
    return [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${baseUrl}${providerPath(provider)}#person`,
        name: provider.name,
        jobTitle: provider.role,
        image: absoluteImageUrl(provider.image),
        description: page.metaDescription,
        worksFor: { "@id": `${baseUrl}/#organization` },
        hasOccupation: {
          "@type": "Occupation",
          name: "Audiologist",
          occupationalCategory: "29-1181.00"
        },
        memberOf: provider.affiliations?.map((affiliation) => ({
          "@type": "Organization",
          name: affiliation
        })),
        knowsAbout: provider.specialties,
        alumniOf: provider.credentials
          .filter((credential) => credential.startsWith("College:") || credential.startsWith("Graduate:"))
          .map((credential) => ({
            "@type": "EducationalOrganization",
            name: credential.replace(/^(College|Graduate):\s*/, "")
          }))
      }
    ];
  }

  if (page.type !== "team") return [];
  return providerProfiles.map((provider) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}${providerPath(provider)}#person`,
    name: provider.name,
    url: `${baseUrl}${providerPath(provider)}`,
    jobTitle: provider.role,
    image: absoluteImageUrl(provider.image),
    worksFor: { "@id": `${baseUrl}/#organization` },
    hasOccupation: {
      "@type": "Occupation",
      name: "Audiologist",
      occupationalCategory: "29-1181.00"
    },
    knowsAbout: provider.specialties
  }));
}

export function schemaForPage(page: SitePage) {
  return [
    breadcrumbSchema(page),
    pageSchema(page),
    faqSchema(page),
    serviceSchema(page),
    localBusinessSchema(page),
    ...personSchemas(page)
  ].filter(Boolean);
}
