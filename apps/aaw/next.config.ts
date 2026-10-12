import path from "node:path";
import type { NextConfig } from "next";

const WORKSPACE_ROOT = path.join(process.cwd(), "..", "..");
import { permanentRedirects } from "./lib/redirects";
import { imageRenames } from "./lib/imageRenames";

const nextConfig: NextConfig = {
  // Workspace root holds node_modules and packages/core. Next must see it.
  outputFileTracingRoot: WORKSPACE_ROOT,
  turbopack: {
    root: WORKSPACE_ROOT,
  },
  transpilePackages: ["@chc/core"],
  async headers() {
    return [
      {
        // Vercel sends HSTS automatically on *.vercel.app but not on custom
        // domains, so set it here for the audiologyassociates.org cutover.
        // Two years, subdomains included, preload-eligible.
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          },
          // The four below are kept identical to the sister practice's config
          // (California Hearing Center). Both properties are the same business
          // with the same threat model, so this set should never drift between
          // them. When the shared core is extracted, this moves there.
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"
          }
        ]
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        source: "/google-reviews.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      }
    ];
  },
  async redirects() {
    // Renamed images: old file URL -> new file URL (lib/imageRenames.ts).
    const imageRenameRedirects = Object.entries(imageRenames).map(([source, destination]) => ({
      source,
      destination,
      statusCode: 301
    }));
    return [
      ...imageRenameRedirects,
      ...permanentRedirects.map(({ source, destination }) => ({
        source,
        destination,
        statusCode: 301
      }))
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // The two qualities this codebase actually asks for, plus the default:
    // LocalHeroPhoto sets 72, InteractiveEarHero sets 78.
    //
    // Added on a wrong diagnosis, kept on its own merits. The story, so nobody
    // repeats it: /_next/image answers 400 for any quality it has not been told
    // about, which is easy to confirm by requesting an arbitrary one. I took
    // that to mean the service-page hero photographs were failing, because they
    // looked absent in every screenshot I could take. They were not absent --
    // they render correctly for a real visitor, and the fault was in my capture,
    // not the site. Next collects the qualities used in the source at build
    // time, so this line was very probably a no-op. It stays because being
    // explicit is cheap and stops a future refactor silently breaking an image.
    qualities: [72, 75, 78],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com"
      },
      {
        protocol: "https",
        hostname: "evolutionhearing.com"
      }
    ]
  }
};

export default nextConfig;
