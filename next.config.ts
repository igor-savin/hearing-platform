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
