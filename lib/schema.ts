import { allServiceLinks, baseUrl, locationForPath, locations, logoUrl, primaryPhone, siteName, type SitePage } from "@/lib/site";
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
import { parseCredentials, providerForPath, providerForSlug, providerProfiles, providerPath, type ProviderProfile } from "@/lib/team";

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

type Office = (typeof locations)[number];

// The office the brand's main phone number rings at. Used as the organization's
// postal address so every page carries a machine-readable NAP, which the
// homepage lost when the site moved off Duda.
const primaryOffice = locations.find((location) => location.type === "office");

function postalAddress(location: Office) {
  return {
    "@type": "PostalAddress",
    streetAddress: location.streetAddress,
    addressLocality: location.city,
    addressRegion: location.state,
    postalCode: location.postalCode,
    addressCountry: "US"
  };
}

// schema.org expects dayOfWeek/opens/closes. Emitting the human display string
// as a `description` produced markup no parser could read, which is what the
// site was doing. Days absent from the list read as closed.
function openingHours(location: Office) {
  if (location.hoursSpec?.length) {
    return location.hoursSpec.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.days.map((day) => `https://schema.org/${day}`),
      opens: spec.opens,
      closes: spec.closes
    }));
  }
  return undefined;
}

export function officeBusinessSchema(location: Office) {
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
    address: postalAddress(location),
    geo: location.geo
      ? {
          "@type": "GeoCoordinates",
          latitude: location.geo.latitude,
          longitude: location.geo.longitude
        }
      : undefined,
    hasMap: location.directionsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`,
    areaServed: [location.city, ...location.nearby],
    logo: logoUrl,
    branchCode: location.city.toLowerCase(),
    currenciesAccepted: "USD",
    // Both offices are in Westchester County. Stated rather than left to be
    // inferred from the postal code, because the county is how patients and
    // search engines actually scope "near me" for this practice.
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Westchester County, New York"
    },
    // Was `makesOffer` truncated at the first eight services, for no reason
    // anyone recorded. hasOfferCatalog is the property that means "here is
    // everything this location offers", and it can hold all of them.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Audiology services at the ${location.city} office`,
      itemListElement: allServiceLinks.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${baseUrl}${service.path}`
        }
      }))
    },
    potentialAction: {
      "@type": "ReserveAction",
      name: "Request an audiology appointment",
      target: `${baseUrl}/contact-us`
    },
    openingHoursSpecification: openingHours(location)
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${baseUrl}/#organization`,
    name: siteName,
    url: baseUrl,
    logo: logoUrl,
    image: logoUrl,
    telephone: primaryPhone,
    address: primaryOffice ? postalAddress(primaryOffice) : undefined,
    medicalSpecialty: "Audiology",
    // The group NPI. Already implicit in the npino and npidb entries in
    // entityCitations above; stated here as an identifier so it does not have
    // to be scraped out of a directory URL to be used.
    identifier: {
      "@type": "PropertyValue",
      propertyID: "NPI",
      value: "1801251699"
    },
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

// Pages that describe hearing, hearing loss, tinnitus, or the appointments that
// address them are health content, and schema.org has a type that says so.
// MedicalWebPage tells a parser that the page is about a medical subject, who
// it is written for, and -- once reviewers are assigned -- who checked it.
//
// The list below is an opt-out rather than an opt-in because nearly everything
// on this site is clinical. These are the pages that are not: marking a Pride
// Month post as otolaryngology content would be false, and false precision is
// worse for a health site than no markup.
const nonClinicalPaths = new Set([
  "/celebrating-pride-month-embracing-inclusivity-and-compassion",
  "/careers",
  "/privacy",
  "/patient-forms",
  "/reviews",
  "/hearing-aid-referral-program",
  "/california-hearing-center",
  "/instructional-videos"
]);

const clinicalPageTypes = new Set<SitePage["type"]>(["blog-post", "educational", "service", "hearing-aids"]);

function isClinicalPage(page: SitePage) {
  return clinicalPageTypes.has(page.type) && !nonClinicalPaths.has(page.path);
}

// schema.org has no `Audiology` MedicalSpecialty. Otolaryngologic is the
// accepted enum value for ear, nose, and throat care and is what the two
// MedicalBusiness nodes already imply.
const clinicalSpecialty = "https://schema.org/Otolaryngologic";

// No `aspect`. MedicalWebPage.aspect names the part of a condition a page
// covers -- Symptoms, Diagnosis, Treatment, Prevention -- but the labels the
// content modules record are editorial framings ("Buying lens", "Clinic note",
// "Real-life scenario"), not clinical ones. Only a handful would map without
// inventing a claim about what the page is, so none are mapped. If an aspect
// is wanted later, add it as its own reviewed field on the page rather than
// inferring it from an editorial label.

// Resolve an optional provider slug on blogMeta to that clinician's Person
// node. Until reviewers are assigned (see blogMeta.authorSlug in lib/site.ts)
// every article returns undefined here and falls back to the organization,
// which is the behaviour the site has today.
function providerRef(slug?: string) {
  if (!slug) return undefined;
  const provider = providerForSlug(slug);
  if (!provider) return undefined;
  return { "@id": `${baseUrl}${providerPath(provider)}#person` };
}

export function pageSchema(page: SitePage) {
  const clinical = isClinicalPage(page);
  const author = providerRef(page.blogMeta?.authorSlug);
  const reviewer = providerRef(page.blogMeta?.reviewedBySlug);

  const type: string[] = [page.type === "blog-post" ? "BlogPosting" : "WebPage"];
  if (clinical) type.push("MedicalWebPage");

  const base = {
    "@context": "https://schema.org",
    "@type": type.length === 1 ? type[0] : type,
    "@id": `${page.canonical}#webpage`,
    url: page.canonical,
    name: page.h1,
    headline: page.h1,
    description: page.metaDescription,
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#organization` },
    // Every page type carries its date now, not just articles. Service,
    // location, product, provider, and service-area pages previously emitted
    // no date at all, so a crawler had no way to tell a page revised last week
    // from one untouched for two years.
    dateModified: page.lastModified,
    datePublished: page.datePublished,
    publisher: { "@id": `${baseUrl}/#organization` },
    potentialAction:
      page.type === "service" || page.type === "location" || page.type === "service-area"
        ? {
            "@type": "ReserveAction",
            name: "Request an appointment",
            target: `${baseUrl}/contact-us`
          }
        : undefined,
    // The sources these articles were written from are already curated in
    // blogMeta -- FDA, NIDCD, and similar. They were rendered for readers and
    // then dropped. `citation` is where a parser looks for them, and on health
    // content the difference between an assertion and a sourced assertion is
    // most of the value.
    citation: page.blogMeta?.sources?.length
      ? page.blogMeta.sources.map((source) => ({
          "@type": "WebPage",
          name: source.label,
          url: source.href
        }))
      : undefined,
    primaryImageOfPage: page.heroImage
      ? {
          "@type": "ImageObject",
          url: absoluteImageUrl(page.heroImage.src),
          caption: page.heroImage.alt || page.h1
        }
      : undefined
  };

  const medical = clinical
    ? {
        specialty: clinicalSpecialty,
        medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
        // reviewedBy and lastReviewed are emitted together or not at all. A
        // review date with nobody attached to it asserts a process the page
        // cannot evidence.
        reviewedBy: reviewer,
        lastReviewed: reviewer ? page.lastModified : undefined
      }
    : {};

  if (page.type === "blog-post") {
    return {
      ...base,
      ...medical,
      author: author || { "@id": `${baseUrl}/#organization` }
    };
  }

  return { ...base, ...medical };
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
  return officeBusinessSchema(location);
}

// Providers who work from more than one office get workLocation links to those
// offices. The @ids match the MedicalBusiness nodes emitted on the location
// pages and the homepage, so this is the same entity referenced, not a copy.
function providerWorkLocations(officePaths?: string[]) {
  if (!officePaths?.length) return undefined;
  return officePaths.map((path) => ({ "@id": `${baseUrl}${path}/#localbusiness` }));
}

// One builder for both places a Person node is emitted -- the provider's own
// page and the team roster. They had drifted: the roster omitted the
// description, memberOf, and alumniOf the profile carried, so the same @id
// described a different person depending on which page a crawler read first.
function personSchema(provider: ProviderProfile, description?: string) {
  const parsed = parseCredentials(provider);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}${providerPath(provider)}#person`,
    name: provider.name,
    url: `${baseUrl}${providerPath(provider)}`,
    jobTitle: provider.role,
    image: absoluteImageUrl(provider.image),
    description,
    worksFor: { "@id": `${baseUrl}/#organization` },
    workLocation: providerWorkLocations(provider.officePaths),
    // schema.org has no Audiology specialty; Otolaryngologic is the enum value
    // for ear, nose, and throat care and matches what the practice's
    // MedicalBusiness nodes already declare.
    medicalSpecialty: "https://schema.org/Otolaryngologic",
    identifier: provider.npi
      ? { "@type": "PropertyValue", propertyID: "NPI", value: provider.npi }
      : undefined,
    hasOccupation: {
      "@type": "Occupation",
      name: "Audiologist",
      occupationalCategory: "29-1181.00"
    },
    // Licences, board certifications, and certificates were being rendered on
    // the page and then thrown away. They are the substance of a clinician's
    // authority, and the part a health search engine is looking for.
    hasCredential: parsed.credentials.length
      ? parsed.credentials.map((credential) => ({
          "@type": "EducationalOccupationalCredential",
          credentialCategory: credential.category,
          name: credential.name,
          ...(credential.category === "license" ? { recognizedBy: { "@type": "GovernmentOrganization", name: "New York State" } } : {})
        }))
      : undefined,
    award: parsed.awards.length ? parsed.awards : undefined,
    knowsLanguage: provider.knowsLanguage,
    memberOf: provider.affiliations?.map((affiliation) => ({
      "@type": "Organization",
      name: affiliation
    })),
    knowsAbout: provider.specialties,
    alumniOf: parsed.alumniOf.map((name) => ({
      "@type": "EducationalOrganization",
      name
    }))
  };
}

export function personSchemas(page: SitePage) {
  if (page.type === "provider") {
    const provider = providerForPath(page.path);
    return provider ? [personSchema(provider, page.metaDescription)] : [];
  }

  if (page.type !== "team") return [];
  return providerProfiles.map((provider) => personSchema(provider));
}

export function schemaForPage(page: SitePage) {
  return [
    breadcrumbSchema(page),
    pageSchema(page),
    faqSchema(page),
    serviceSchema(page),
    localBusinessSchema(page),
    // The homepage is where Google looks for the practice's NAP. Each office
    // node is emitted here as well as on its own location page; they share an
    // @id, so this is one entity described twice, not two entities.
    ...(page.path === "/" ? locations.filter((location) => location.type === "office").map(officeBusinessSchema) : []),
    ...personSchemas(page)
  ].filter(Boolean);
}
