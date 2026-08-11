// Single source of truth for permanent redirects.
//
// next.config.ts turns these into real 301s, and app/sitemap.ts uses the same
// list to keep redirected paths out of the sitemap. Keeping both sides on one
// list is the point: a sitemap that advertises a URL which then redirects wastes
// crawl budget and was exactly the /services defect.
//
// Must stay dependency-free so next.config.ts can import it.

export type SiteRedirect = {
  source: string;
  destination: string;
  reason: string;
};

export const permanentRedirects: SiteRedirect[] = [
  {
    source: "/privacy-policy",
    destination: "/privacy",
    reason: "Normalize alternate slug to preserved live URL"
  },
  {
    source: "/hearing-aid-brands",
    destination: "/hearing-aids-brands",
    reason: "Normalize alternate slug to preserved live URL"
  },
  {
    source: "/locations",
    destination: "/contact-us",
    reason: "Normalize alternate slug to preserved live URL"
  },
  {
    source: "/services",
    destination: "/hearing-testing",
    reason: "Normalize alternate slug to preserved live URL"
  },
  {
    source: "/home",
    destination: "/",
    reason: "The Duda site redirected /home to the root; preserve that behavior"
  },
  {
    source: "/null",
    destination: "/",
    reason: "Normalize alternate slug to preserved live URL"
  },
  // These paths were never published, but internal links pointed at them for
  // long enough that crawlers may have queued them. Send them to the real
  // pages instead of letting them 404.
  {
    source: "/products/hearing-aid-brands",
    destination: "/products/hearing-aids-by-brand",
    reason: "Corrected internal link target"
  },
  {
    source: "/tinnitus/:slug",
    destination: "/how-we-can-help/tinnitus-management/:slug",
    reason: "Corrected internal link target"
  }
];

// Literal sources only. Patterned sources such as "/tinnitus/:slug" never match
// a real registry path, so they cannot collide with a sitemap entry anyway.
export const redirectedPaths = new Set(
  permanentRedirects.map((redirect) => redirect.source).filter((source) => !source.includes(":"))
);
