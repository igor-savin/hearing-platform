import type { NextConfig } from "next";

// 301 redirects for WordPress duplicate copies (-2/-3 slugs) -> canonical originals.
// Orphan cruft with no canonical points to /the-blog/.
const blogDuplicateRedirects = [
      { source: "/2025-guide-to-hearing-aids-in-san-mateo-san-carlos-brands-prices-and-real-life-results-2", destination: "/2025-guide-to-hearing-aids-in-san-mateo-san-carlos-brands-prices-and-real-life-results", permanent: true },
      { source: "/4124-2", destination: "/the-blog", permanent: true },
      { source: "/5-common-hearing-aid-problems-and-fixes-for-palo-alto-patients-2", destination: "/5-common-hearing-aid-problems-and-fixes-for-palo-alto-patients", permanent: true },
      { source: "/best-hearing-aids-to-buy-in-2025-2", destination: "/the-blog", permanent: true },
      { source: "/best-relaxation-techniques-for-tinnitus-relief-in-hillsborough-2", destination: "/best-relaxation-techniques-for-tinnitus-relief-in-hillsborough", permanent: true },
      { source: "/california-hearing-center-4", destination: "/the-blog", permanent: true },
      { source: "/can-an-audiologist-help-with-balance-problems-2", destination: "/can-an-audiologist-help-with-balance-problems", permanent: true },
      { source: "/can-audiologists-diagnose-ear-problems-2", destination: "/can-audiologists-diagnose-ear-problems", permanent: true },
      { source: "/can-audiologists-diagnose-ear-problems-3", destination: "/can-audiologists-diagnose-ear-problems", permanent: true },
      { source: "/can-hearing-aids-help-with-tinnitus-insights-for-palo-alto-residents-2", destination: "/can-hearing-aids-help-with-tinnitus-insights-for-palo-alto-residents", permanent: true },
      { source: "/can-stress-make-tinnitus-worse-what-atherton-patients-should-know-2", destination: "/can-stress-make-tinnitus-worse-what-atherton-patients-should-know", permanent: true },
      { source: "/hearing-aid-friendly-activities-for-families-in-hillsborough-2", destination: "/hearing-aid-friendly-activities-for-families-in-hillsborough", permanent: true },
      { source: "/how-much-does-a-hearing-test-cost-without-insurance-2", destination: "/how-much-does-a-hearing-test-cost-without-insurance", permanent: true },
      { source: "/how-to-adjust-to-new-hearing-aids-palo-alto-success-stories-2", destination: "/how-to-adjust-to-new-hearing-aids-palo-alto-success-stories", permanent: true },
      { source: "/invisible-hearing-aids-are-they-worth-it-for-atherton-patients-2", destination: "/invisible-hearing-aids-are-they-worth-it-for-atherton-patients", permanent: true },
      { source: "/napa-2", destination: "/napa", permanent: true },
      { source: "/the-real-cost-of-hearing-aids-in-burlingame-and-how-to-save-2", destination: "/the-real-cost-of-hearing-aids-in-burlingame-and-how-to-save", permanent: true },
      { source: "/what-are-the-disadvantages-of-an-audiologist-2", destination: "/what-are-the-disadvantages-of-an-audiologist", permanent: true },
      { source: "/what-is-the-1-hearing-aid-2", destination: "/what-is-the-1-hearing-aid", permanent: true },
      { source: "/what-is-the-difference-between-a-hearing-aid-and-an-audiologist-2", destination: "/what-is-the-difference-between-a-hearing-aid-and-an-audiologist", permanent: true },
      { source: "/why-untreated-hearing-loss-impacts-health-in-palo-alto-residents-2", destination: "/why-untreated-hearing-loss-impacts-health-in-palo-alto-residents", permanent: true },
      { source: "/why-untreated-hearing-loss-impacts-health-in-palo-alto-residents-3", destination: "/why-untreated-hearing-loss-impacts-health-in-palo-alto-residents", permanent: true },
      { source: "/why-would-someone-want-to-be-an-audiologist-2", destination: "/why-would-someone-want-to-be-an-audiologist", permanent: true }
];

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return blogDuplicateRedirects;
  },
};

export default nextConfig;
