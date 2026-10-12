# Redirect Map

Preserved live URLs are intended to remain unchanged. The redirects below cover common normalized or requested alternatives.

The literal redirects are declared once in `lib/redirects.ts`. `next.config.ts` turns
them into 301s and `app/sitemap.ts` uses the same list to keep redirected paths out
of the sitemap, so a redirected URL can never be advertised as a final one.

The case-variant rows (`/somers-ny` and friends) are not in that list. They are
handled by the catch-all route in `app/[[...slug]]/page.tsx`, which matches a path
case-insensitively and permanently redirects to the canonical spelling.

| From | To | Status | Reason |
| --- | --- | --- | --- |
/privacy-policy | /privacy | 301 | Normalize alternate slug to preserved live URL |
/locations | /contact-us | 301 | Normalize alternate slug to preserved live URL |
/services | /hearing-testing | 301 | Normalize alternate slug to preserved live URL |
/hearing-aid-brands | /hearing-aids-brands | 301 | Normalize alternate slug to preserved live URL |
/home | / | 301 | The Duda site redirected /home to the root; preserve that behavior |
/somers-ny | /Somers-NY | 301 | Normalize alternate slug to preserved live URL |
/white-plains-ny | /White-Plains-NY | 301 | Normalize alternate slug to preserved live URL |
/scarsdale-ny | /Scarsdale-NY | 301 | Normalize alternate slug to preserved live URL |
/null | / | 301 | Normalize alternate slug to preserved live URL |
/products/hearing-aid-brands | /products/hearing-aids-by-brand | 301 | Corrected internal link target that was never a real page |
/tinnitus/:slug | /how-we-can-help/tinnitus-management/:slug | 301 | Corrected internal link target that was never a real page |
