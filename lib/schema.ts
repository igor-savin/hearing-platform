import { baseUrl, locationForPath, locations, primaryPhone, services, siteName, type SitePage } from "@/lib/site";
import {
  brandForPath,
  brandForProduct,
  brandPath,
  hearingAidBrandsPath,
  productForPath,
  productsRootPath
} from "@/lib/products";

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
    sameAs: [
      "https://www.facebook.com/AAofW",
      "https://twitter.com/audiologyassoci",
      "https://www.yelp.com/biz/audiology-associates-of-westchester-white-plains-2"
    ],
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
    }
  };
}

export function breadcrumbSchema(page: SitePage) {
  const crumbs = productBreadcrumbItems(page);
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
    primaryImageOfPage: page.heroImage
      ? {
          "@type": "ImageObject",
          url: page.heroImage.src,
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
  const service = services.find((item) => item.path === page.path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${page.canonical}#service`,
    name: service?.title || page.h1,
    description: service?.description || page.metaDescription,
    provider: { "@id": `${baseUrl}/#organization` },
    areaServed: ["Westchester County", "White Plains", "Harrison", "Somers", "Scarsdale", "Rye", "Mt. Kisco", "Greenwich"],
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
    parentOrganization: { "@id": `${baseUrl}/#organization` },
    medicalSpecialty: "Audiology",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.replace(`, ${location.city}, ${location.state}`, "").replace(/, NY \d{5}|, CT \d{5}/, ""),
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: "US"
    },
    openingHoursSpecification: location.hours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      description: hours
    }))
  };
}

export function personSchemas(page: SitePage) {
  if (page.type !== "team") return [];
  const names = [
    "Dr. Jennifer Ratner, Au.D.",
    "Dr. Caitlin Dold, Au.D.",
    "Dr. Jenna M. Elias, Au.D., F-AAA",
    "Dr. Leannmarie Senat",
    "Julia Rivera",
    "Dr. Kira Savin, Au.D."
  ];
  return names.map((name) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/meet-the-team#${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    name,
    worksFor: { "@id": `${baseUrl}/#organization` },
    knowsAbout: "Audiology"
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
