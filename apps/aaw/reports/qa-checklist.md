# QA Checklist

- [x] Crawl live sitemap and robots.txt.
- [x] Preserve all sitemap URLs in the rebuild.
- [x] Include `/privacy` because it is linked from the live footer.
- [x] Add redirects for `/privacy-policy`, lowercase location variants, `/hearing-aid-brands`, and stray `/null`.
- [x] Add unique metadata, canonical URLs, Open Graph metadata, and Twitter metadata.
- [x] Add JSON-LD for Organization, WebSite, WebPage, BreadcrumbList, FAQPage, Service, BlogPosting, Person, and MedicalBusiness where relevant.
- [x] Add sitemap.xml route.
- [x] Add robots.txt route.
- [x] Add llms.txt.
- [x] Add Firebase-backed contact form and optional attachment upload.
- [x] Preserve live GTM, Facebook Pixel, Piwik Pro, and Zocdoc widget IDs.
- [x] Add accessible form labels and keyboard-friendly navigation.
- [x] Add internal links between services, locations, and related content.
- [ ] Confirm conflicting location NAP details with the business.
- [ ] Add final production tracking IDs when provided.
- [ ] Confirm Firebase Firestore and Storage security rules before launch.
