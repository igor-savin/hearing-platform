# Lighthouse and Performance Notes

The rebuild is designed for strong Core Web Vitals:

- Static App Router pages are generated from crawl data.
- Images use `next/image` with remote patterns for the existing CDN.
- No heavy runtime website-builder scripts are carried over.
- Contact behavior is isolated to the contact form client component.
- Metadata, sitemap, robots.txt, and llms.txt are generated without client JavaScript.
- Fonts use the system stack to avoid render-blocking external font requests.

Recommended post-deployment checks:

- Run Lighthouse on Home, Contact, one service page, one location page, and one blog post.
- Confirm Firebase rules do not block intended contact form submissions.
- Confirm all production analytics IDs load only when environment variables are present.
