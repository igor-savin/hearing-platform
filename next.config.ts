import type { NextConfig } from "next";
import { permanentRedirects } from "./lib/redirects";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd()
  },
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
    return permanentRedirects.map(({ source, destination }) => ({
      source,
      destination,
      statusCode: 301
    }));
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Measured against this deployment: /_next/image answers 200 for q=75 and
    // 400 for every other quality asked of it, so any <Image quality={n}> where
    // n is not in this list fails to render at all. Two components set one:
    // LocalHeroPhoto at 72 (the hero photograph on all twelve /how-we-can-help
    // pages) and InteractiveEarHero at 78. Declaring them here is the fix that
    // keeps the authored values; the alternative is deleting the props and
    // living with 75 everywhere.
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
