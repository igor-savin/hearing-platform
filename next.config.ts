import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd()
  },
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        statusCode: 301
      },
      {
        source: "/somers-ny",
        destination: "/Somers-NY",
        statusCode: 301
      },
      {
        source: "/white-plains-ny",
        destination: "/White-Plains-NY",
        statusCode: 301
      },
      {
        source: "/scarsdale-ny",
        destination: "/Scarsdale-NY",
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
      }
    ]
  }
};

export default nextConfig;
