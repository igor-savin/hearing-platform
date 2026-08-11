import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd()
  },
  async headers() {
    return [
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
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        statusCode: 301
      },
      {
        source: "/hearing-aid-brands",
        destination: "/hearing-aids-brands",
        statusCode: 301
      },
      {
        source: "/locations",
        destination: "/contact-us",
        statusCode: 301
      },
      {
        source: "/services",
        destination: "/hearing-testing",
        statusCode: 301
      },
      {
        source: "/null",
        destination: "/",
        statusCode: 301
      },
      // These paths were never published, but internal links pointed at them
      // for long enough that crawlers may have queued them. Send them to the
      // real pages instead of letting them 404.
      {
        source: "/products/hearing-aid-brands",
        destination: "/products/hearing-aids-by-brand",
        statusCode: 301
      },
      {
        source: "/tinnitus/:slug",
        destination: "/how-we-can-help/tinnitus-management/:slug",
        statusCode: 301
      }
    ];
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
