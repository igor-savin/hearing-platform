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
      }
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "irp.cdn-website.com"
      },
      {
        protocol: "https",
        hostname: "lirp.cdn-website.com"
      },
      {
        protocol: "https",
        hostname: "static.cdn-website.com"
      },
      {
        protocol: "https",
        hostname: "irp-cdn.multiscreensite.com"
      },
      {
        protocol: "https",
        hostname: "calhearing.com"
      },
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
