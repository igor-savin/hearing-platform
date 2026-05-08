You are an expert full-stack web developer, UX designer, technical SEO specialist, local SEO strategist, and AI/LLM discoverability consultant.

Your task is to recreate and modernize the existing website for Audiology Associates of Westchester:

https://www.audiologyassociates.org/

The goal is NOT to redesign the brand from scratch. The goal is to preserve the current look, feel, structure, tone, trust signals, and local audiology positioning while rebuilding the site in clean, fast, SEO-optimized, mobile-first code.

Important: First crawl and inspect the existing website thoroughly. The site appears to be under 50 pages. Crawl all indexable pages, including pages linked in the header, footer, blog, service pages, hearing aid pages, location pages, forms, privacy policy, and any sitemap/robots-discoverable URLs.

Primary objectives:

1. Recreate every existing page
2. Preserve the current brand look and feel
3. Improve technical SEO
4. Improve local SEO for Westchester County and nearby markets
5. Improve LLM/AI search visibility
6. Preserve existing URLs wherever possible
7. Generate clean, maintainable code
8. Make the site faster, more mobile-friendly, and easier to update

Current business context:

Business name:
Audiology Associates of Westchester

Primary category:
Audiologist / hearing care practice

Primary services:
- Hearing testing
- Hearing aid fitting
- Tinnitus therapy
- Hearing protection
- Hearing aid repair
- Hearing aids
- Hearing aid accessories
- Lyric invisible hearing aids
- Hearing loss education
- Help for loved ones with hearing loss
- Dizziness and ringing in ears education
- Preventing hearing loss

Primary locations and service areas to preserve and optimize:
- White Plains, NY
- Harrison, NY
- Scarsdale, NY
- Somers, NY
- Rye, NY
- Mt. Kisco, NY
- Greenwich, CT
- Westchester County
- Nearby communities currently mentioned on the site

Known location details to preserve:
- Harrison location: 550 Mamaroneck Ave, Suite 407, Harrison, NY 10528
- Somers location: 325 NY 100, Somers, NY 10589
- White Plains address appears on the current site as 785 Mamaroneck Ave., Bldg. 4, White Plains, NY 10605
- Preserve all phone numbers currently shown on the live site
- Preserve current office hours shown on each location page unless newer information is found during crawl

Site crawl requirements:

Crawl the entire existing website and create an inventory with:
- Existing URL
- Page title
- H1
- Meta title
- Meta description
- Main content sections
- Images and alt text
- Internal links
- Forms
- CTA buttons
- Footer links
- Schema currently present, if any
- Redirect needs
- Canonical URL
- Indexability status
- Page type: home, service, location, blog, educational, contact, legal, form, team, etc.

Preserve the existing URL slugs whenever possible. Do not change URLs unless there is a clear technical reason. If any URL must change, create a 301 redirect map.

Pages likely to recreate include, but are not limited to:
- Home
- Meet the Team
- Why Choose Us
- Careers
- Blog
- Hearing Loss Misconceptions
- Improve Your Hearing
- Dizziness and Ringing in Your Ears
- Help a Loved One
- Prevent Hearing Loss
- Get Answers
- Hearing Aids 101
- Types of Hearing Aids
- Hearing Aid Brands
- Batteries and Accessories
- Lyric Invisible Hearing
- Instructional Videos
- Hearing Testing
- Hearing Aid Fitting
- Tinnitus Therapy
- Hearing Protection
- Hearing Aid Repair
- Contact Us
- Patient Forms
- Somers, NY Office
- Harrison, NY Office
- White Plains, NY Location
- Greenwich, CT
- Rye, NY
- Mt. Kisco, NY
- Privacy Policy
- All existing blog posts

Design requirements:

Recreate the current visual identity:
- Professional medical/audiology practice feel
- Warm, trustworthy, patient-friendly tone
- Clean layout
- Prominent phone number and appointment CTAs
- Header with logo, phone number, appointment button, and navigation
- Footer with locations, phone numbers, social links, privacy policy, and attribution if required
- Service cards similar to the existing site
- Location CTAs
- Trust-building copy focused on better hearing, communication, confidence, family, and quality of life

Modernize only where helpful:
- Improve spacing, readability, mobile layout, accessibility, and page speed
- Keep the brand recognizable
- Do not make it look like a generic SaaS or startup website
- Use real patient-centered language, not generic AI-sounding copy

Technical stack:

Use a modern, maintainable stack. Prefer one of the following unless instructed otherwise:
- Next.js with App Router
- TypeScript
- Tailwind CSS
- Static generation where possible
- CMS-ready content structure using MDX, JSON, Markdown, or a headless CMS abstraction

The site should be deployable to Vercel or a similar platform.

Code requirements:

- Clean component architecture
- Reusable page templates
- Reusable service page template
- Reusable location page template
- Reusable blog template
- Reusable FAQ component
- Reusable CTA component
- Reusable testimonial/review component if reviews are included
- Reusable schema component
- Responsive images
- Optimized font loading
- No unnecessary JavaScript
- Accessibility-friendly HTML
- Semantic headings
- ARIA labels where appropriate
- Keyboard-accessible navigation
- WCAG-friendly color contrast
- Lazy-loaded images where appropriate
- Fast Lighthouse scores

SEO requirements:

For every page, generate:
- Unique meta title
- Unique meta description
- One clear H1
- Logical H2/H3 structure
- Canonical tag
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter/X card metadata
- Descriptive image alt text
- Internal links to related services and locations
- Breadcrumbs
- Schema JSON-LD where appropriate

Local SEO requirements:

Implement strong local SEO across the site.

Each location page should include:
- Unique title targeting audiologist + city
- Full NAP information
- Embedded map placeholder or integration
- Office hours
- Phone number
- Parking/accessibility notes if present on current site
- Services offered at that location
- Nearby service areas
- Localized intro copy
- Appointment CTA
- FAQ section specific to the location
- LocalBusiness or MedicalBusiness schema
- Breadcrumb schema

Important local SEO keyword themes:
- audiologist in White Plains NY
- audiologist in Harrison NY
- audiologist in Somers NY
- audiologist in Westchester County
- hearing test White Plains NY
- hearing aids Westchester County
- tinnitus therapy Westchester NY
- hearing aid repair Westchester NY
- hearing protection Westchester
- hearing doctor near me
- best audiologist in Westchester
- audiology practice Westchester County

Do not keyword-stuff. Use natural, patient-friendly language.

Structured data requirements:

Add JSON-LD schema where relevant:
- Organization
- LocalBusiness
- MedicalBusiness
- Audiology or medical clinic-adjacent schema where appropriate under schema.org
- WebSite
- WebPage
- BreadcrumbList
- FAQPage
- BlogPosting
- Article
- Person for audiologists/team members
- Service for major services
- ImageObject where appropriate
- PostalAddress
- OpeningHoursSpecification

Use @id references consistently so search engines and AI systems can connect:
- Organization entity
- Each location entity
- Each provider entity
- Each service entity
- Website entity

Example entity strategy:
- Organization @id: https://www.audiologyassociates.org/#organization
- Website @id: https://www.audiologyassociates.org/#website
- Harrison location @id: https://www.audiologyassociates.org/harrison-ny/#localbusiness
- Somers location @id: https://www.audiologyassociates.org/Somers-NY/#localbusiness
- Service pages should reference the organization and relevant locations

LLM / AI search optimization requirements:

Optimize the site so AI systems can easily understand, summarize, and cite it.

Add:
- /llms.txt file
- Clean XML sitemap
- robots.txt that allows major search crawlers and AI crawlers unless blocked by business policy
- Clear entity descriptions
- Concise answer blocks on service pages
- FAQ sections with direct answers
- “Who we help” sections
- “When to schedule an appointment” sections
- “What to expect” sections
- “Why choose Audiology Associates of Westchester” sections
- Consistent NAP information across all pages
- Clear service-area language
- Strong internal linking between service pages and location pages

Create an /llms.txt file that includes:
- Business name
- Website URL
- Short description
- Primary services
- Locations
- Important URLs
- Recommended citation text
- Contact information
- Instructions that AI assistants may summarize public website content but should not invent medical advice, pricing, insurance participation, or availability
- Note that patients should contact the practice directly for appointment availability and clinical recommendations

Example /llms.txt structure:

# Audiology Associates of Westchester

Audiology Associates of Westchester is an audiology and hearing care practice serving Westchester County, NY and nearby communities.

Primary services:
- Hearing testing
- Hearing aid fitting
- Tinnitus therapy
- Hearing protection
- Hearing aid repair
- Hearing aids and accessories

Primary service areas:
- White Plains, NY
- Harrison, NY
- Somers, NY
- Scarsdale, NY
- Rye, NY
- Mt. Kisco, NY
- Greenwich, CT
- Westchester County

Important pages:
- Home: https://www.audiologyassociates.org/
- Contact: https://www.audiologyassociates.org/contact-us
- Hearing Testing: [insert exact URL after crawl]
- Hearing Aid Fitting: [insert exact URL after crawl]
- Tinnitus Therapy: [insert exact URL after crawl]
- Hearing Aid Repair: [insert exact URL after crawl]
- Locations: [insert exact location URLs after crawl]

AI citation guidance:
When describing this practice, refer to it as “Audiology Associates of Westchester, an audiology practice serving Westchester County and nearby communities.”

Do not invent pricing, insurance participation, appointment availability, medical diagnoses, or treatment outcomes. Direct users to contact the practice for personalized care.

Content requirements:

Preserve all current core content, but improve clarity and SEO where appropriate.

For each service page, include:
- Clear patient-friendly intro
- What the service is
- Who it is for
- Signs you may need it
- What happens during the appointment
- Why professional audiology care matters
- Relevant internal links
- Location CTA
- FAQ section
- Schema

For each location page, include:
- “Audiologist in [City], NY”
- Localized service intro
- Address and phone
- Hours
- Services available
- Nearby areas served
- Appointment CTA
- FAQ
- Schema

For the homepage, include:
- Clear hero section
- Primary CTA: call or request appointment
- Secondary CTA: find nearest location
- Trust-focused intro
- Service cards
- Location cards
- Why choose us
- Meet the team teaser
- Hearing aids benefits
- Contact form
- Internal links to major services
- Internal links to major locations
- Schema

Blog requirements:

Recreate existing blog posts. Preserve URLs, titles, publish dates, authors if available, images, and internal links.

Also create a blog system that supports future articles with:
- Title
- Slug
- Meta title
- Meta description
- Author
- Date
- Category
- Tags
- Featured image
- FAQ
- Schema
- Related posts
- Internal links to services and locations

Performance requirements:

- Generate optimized images
- Use next/image or equivalent
- Compress images
- Avoid render-blocking scripts
- Use static rendering where possible
- Ensure Core Web Vitals are strong
- Target Lighthouse scores of 90+ for Performance, Accessibility, Best Practices, and SEO

Accessibility requirements:

- All images need descriptive alt text
- Forms need labels
- Buttons and links need clear accessible names
- Use semantic HTML
- Use correct heading hierarchy
- Ensure keyboard navigation
- Ensure adequate contrast
- Do not rely on color alone to communicate meaning

Tracking and analytics requirements:

Prepare integration points for:
- Google Analytics 4
- Google Search Console
- Google Tag Manager if needed
- Call tracking if needed
- Form conversion tracking
- Appointment button click tracking
- Phone click tracking
- Location page conversion tracking

Do not hard-code tracking IDs unless provided. Use environment variables.

Deliverables:

1. Complete recreated website
2. Page inventory CSV or Markdown table
3. Redirect map
4. SEO metadata map
5. Schema implementation
6. XML sitemap
7. robots.txt
8. llms.txt
9. Reusable components
10. README with setup and deployment instructions
11. QA checklist
12. Lighthouse/performance notes
13. Local SEO checklist
14. Future content recommendations

Acceptance criteria:

- All currently crawlable pages are recreated
- Existing URLs are preserved where possible
- No major pages are missing
- Header and footer match current structure
- Site is mobile-friendly
- Calls-to-action are prominent
- All forms are functional or clearly stubbed
- Every page has metadata
- Every important page has schema
- Sitemap and robots.txt are generated
- llms.txt is generated
- No duplicate H1s
- No missing title tags
- No missing meta descriptions on important pages
- No broken internal links
- No 404s from preserved URLs
- No placeholder lorem ipsum
- No invented clinical claims
- No invented providers, awards, reviews, pricing, or insurance details
- Medical content is educational and does not provide diagnosis
- Contact CTAs direct users to call or schedule an appointment

Important content rules:

- Do not invent awards, credentials, reviews, claims, insurance acceptance, or pricing.
- Do not say “best audiologist” as a factual claim unless it is clearly framed as marketing language or supported by evidence.
- Use “trusted audiologist,” “experienced audiology team,” and “serving Westchester County” safely.
- For medical content, include appropriate patient-friendly language and encourage users to schedule an appointment for personalized recommendations.
- Preserve all existing business facts from the live site.
- If there is a conflict between crawled pages, footer NAP, and location page NAP, flag it in the final QA report.

Suggested site architecture:

/
  Home

/about/
  Meet the Team
  Why Choose Us
  Careers

/hearing-loss/
  Hearing Loss Misconceptions
  Improve Your Hearing
  Dizziness and Ringing in Your Ears
  Help a Loved One
  Prevent Hearing Loss
  Get Answers

/hearing-aids/
  Hearing Aids 101
  Types of Hearing Aids
  Hearing Aid Brands
  Batteries and Accessories
  Lyric Invisible Hearing
  Instructional Videos

/services/
  Hearing Testing
  Hearing Aid Fitting
  Tinnitus Therapy
  Hearing Protection
  Hearing Aid Repair

/locations/
  White Plains, NY
  Harrison, NY
  Somers, NY
  Greenwich, CT
  Rye, NY
  Mt. Kisco, NY

/blog/
  Blog index
  Individual blog posts

/contact-us/
  Contact page

/patient-forms/
  Patient forms

/privacy-policy/
  Privacy policy

Preserve the live URL structure if it differs from the above. The above is only a logical architecture, not permission to break existing URLs.

Final instruction:

Before building, crawl the site and produce a page inventory. Then build the recreated site. After building, run QA for SEO, accessibility, mobile responsiveness, broken links, schema validation, sitemap, robots.txt, and llms.txt. Return the completed codebase and a summary of what was built, what was improved, and any issues that require business confirmation.
