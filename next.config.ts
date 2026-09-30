import type { NextConfig } from "next";

// 301 redirects from the blog-curation pass: thin/duplicate/hyperlocal/dated
// posts point to their most relevant canonical, pillar, or areas-we-serve page.
// Regenerate via scratchpad curation flow if the keep/redirect split changes.
//
// 25 Aug 2026 — FOUR SOURCES REMOVED, TWO RETARGETED. Search Console showed the
// curation had redirected away the four highest-earning URLs on the site:
//   /how-far-do-you-push-hearing-aid-in/            1,415 clicks / 90 days, pos 5.4
//   /understanding-hearing-loss-at-4000-hz/           914 clicks, 65k impressions
//   /understanding-and-treating-dry-ears-.../          892 clicks, 182k impressions
//   /how-many-hours-a-day-...-a-complete-guide/        476 clicks, pos 3.3
// Three of the four pointed at /the-blog/, an index that answers none of those
// queries. Each now has a written article again. Before adding a redirect here,
// check the page's clicks in Search Console: a redirect to a hub page throws
// away the demand rather than consolidating it.
// 30 Sep 2026 — the Medicare open-enrollment page moved to an evergreen slug (no
// year) so the same URL can carry next year's update. Headline and body keep 2027.
const newsSlugRedirects = [
  { source: "/medicare-open-enrollment-2027-hearing-benefits/", destination: "/medicare-open-enrollment-hearing-benefits/", permanent: true },
  { source: "/medicare-open-enrollment-2027-hearing-benefits", destination: "/medicare-open-enrollment-hearing-benefits/", permanent: true },
];

const blogRedirects = [
      // 25 Aug 2026 — per-city service sub-pages consolidated into their city
      // page. Thirteen of these were Atherton alone, with a median pairwise
      // similarity of 0.83; /atherton/lenire/ shared 18 of its 30 body
      // sentences with /atherton/. The whole /areas-we-serve/ family earned 80
      // clicks in 90 days and 158 of its pages sit in Google's "Discovered,
      // currently not indexed" bucket, so there is no traffic to lose and a
      // scaled-content signal to stop sending.
      { source: "/areas-we-serve/atherton/hearing-test/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/areas-we-serve/atherton/hearing-aids/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/areas-we-serve/atherton/tinnitus-therapy/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/areas-we-serve/atherton/hearing-aid-fitting/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/areas-we-serve/atherton/hearing-aid-repairs/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/areas-we-serve/atherton/custom-hearing-protection/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/areas-we-serve/atherton/earwax-removal/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/areas-we-serve/atherton/invisible-hearing-aids/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/areas-we-serve/atherton/rechargeable-hearing-aids/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/areas-we-serve/atherton/bluetooth-hearing-aids/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/areas-we-serve/atherton/tinnitus-audiologist/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/areas-we-serve/atherton/lenire/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/areas-we-serve/atherton/dr-emily-mcmahan/", destination: "/about-us/emily-mcmahan/", permanent: true },
      { source: "/areas-we-serve/san-mateo/lenire/", destination: "/areas-we-serve/san-mateo/", permanent: true },
      { source: "/areas-we-serve/san-mateo/tinnitus-audiologist/", destination: "/areas-we-serve/san-mateo/", permanent: true },
      { source: "/areas-we-serve/san-mateo/dr-emily-mcmahan/", destination: "/about-us/emily-mcmahan/", permanent: true },
      { source: "/areas-we-serve/berkeley/lenire/", destination: "/areas-we-serve/alameda-county/#berkeley", permanent: true },
      { source: "/areas-we-serve/berkeley/tinnitus-audiologist/", destination: "/areas-we-serve/alameda-county/#berkeley", permanent: true },
      { source: "/areas-we-serve/berkeley/dr-emily-mcmahan/", destination: "/about-us/emily-mcmahan/", permanent: true },
      { source: "/areas-we-serve/palo-alto/tinnitus-audiologist/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/areas-we-serve/palo-alto/lenire/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/areas-we-serve/palo-alto/dr-emily-mcmahan/", destination: "/about-us/emily-mcmahan/", permanent: true },
      { source: "/areas-we-serve/burlingame/tinnitus-audiologist/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/areas-we-serve/burlingame/lenire/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/areas-we-serve/burlingame/dr-emily-mcmahan/", destination: "/about-us/emily-mcmahan/", permanent: true },
  // WordPress draft/duplicate cruft → homepage.
  { source: "/home-new/", destination: "/", permanent: true },
  { source: "/california-hearing-center-4/", destination: "/", permanent: true },
  // Sierra Melendez departed the practice (Aug 2026); her bio page is retired.
  { source: "/about-us/sierra-melendez/", destination: "/about-us/", permanent: true },
  // Dead WooCommerce scaffolding on the legacy site (plugin installed, no storefront:
  // /shop/ 404s and there is no product sitemap). Redirect so old links don't 404.
  { source: "/cart/", destination: "/products/hearing-aids/", permanent: true },
  { source: "/checkout/", destination: "/products/hearing-aids/", permanent: true },
  { source: "/my-account/", destination: "/contact/", permanent: true },
      { source: "/how-much-do-doctors-of-audiology-make-in-the-us/", destination: "/about-us/", permanent: true },
      { source: "/the-critical-link-between-hearing-loss-and-dementia-new-research-offers-hope/", destination: "/could-there-be-a-link-between-hearing-loss-and-dementia/", permanent: true },
      { source: "/do-hearing-aids-help-tinnitus-what-our-patients-experience/", destination: "/can-hearing-aids-help-tinnitus/", permanent: true },
      { source: "/rechargeable-hearing-aids-the-power-of-advanced-battery-technology/", destination: "/rechargeable-hearing-aid-battery-life-and-charging/", permanent: true },
      { source: "/understanding-over-the-counter-hearing-solutions-essential-information-for-seniors/", destination: "/hearing-aids-vs-over-the-counter-devices-what-bay-area-patients-need-to-know/", permanent: true },
      { source: "/invisible-hearing-aids-for-burlingames-frequent-travelers/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/when-to-upgrade-your-hearing-aids-in-athertons-tech-community/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/best-hearing-test-clinics-near-hillsboroughs-carolands-mansion/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/best-hearing-aid-choices-for-seniors-living-in-hillsboroughs-gated-estates/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/why-untreated-hearing-loss-impacts-heart-health-in-athertons-94027-community/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/how-to-choose-the-right-audiologist-in-palo-altos-california-avenue-district/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/the-real-cost-of-hearing-aids-in-athertons-luxury-communities-and-how-to-save/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/what-is-the-best-test-to-see-about-hearing-loss/", destination: "/different-ways-to-test-for-hearing-loss/", permanent: true },
      { source: "/8-expert-tips-to-conceal-your-hearing-aids-discreetly/", destination: "/what-are-invisible-hearing-aids/", permanent: true },
      { source: "/how-many-hours-a-day-should-you-wear-new-hearing-aids/", destination: "/how-many-hours-a-day-should-you-wear-new-hearing-aids-a-complete-guide/", permanent: true },
      { source: "/do-i-need-a-hearing-test-signs-adults-should-not-ignore/", destination: "/hearing-testing/", permanent: true },
      { source: "/how-long-does-it-take-to-get-hearing-aids-from-an-audiologist/", destination: "/about-us/", permanent: true },
      { source: "/what-is-the-difference-between-a-hearing-aid-and-an-audiologist/", destination: "/about-us/", permanent: true },
      { source: "/discover-the-different-hearing-aids-offered-at-california-hearing-center/", destination: "/what-is-vertigo-and-what-can-i-do-about-it/", permanent: true },
      { source: "/sleeping-with-hearing-aids-everything-you-need-to-know/", destination: "/is-it-ok-to-leave-hearing-aids-in-overnight/", permanent: true },
      { source: "/is-it-better-to-go-to-an-audiologist-for-hearing-aids/", destination: "/is-it-better-to-get-a-hearing-aid-from-an-audiologist/", permanent: true },
      { source: "/hearing-aid-buying-guide-2025-expert-tips-from-california-hearing-center/", destination: "/should-you-get-a-hearing-aid/", permanent: true },
      { source: "/self-driving-cars-hearing-aids-waymo-accessibility/", destination: "/waymo-robotaxi-hearing-loss-hearing-aids/", permanent: true },
      { source: "/how-much-does-costco-charge-for-hearing-aids/", destination: "/what-is-the-best-hearing-aid-sold-at-costco/", permanent: true },
      { source: "/what-is-the-average-cost-of-a-costco-hearing-aid/", destination: "/what-is-the-best-hearing-aid-sold-at-costco/", permanent: true },
      { source: "/does-medicare-pay-for-hearing-aids-at-costco/", destination: "/what-is-the-best-hearing-aid-sold-at-costco/", permanent: true },
      { source: "/why-did-costco-stop-selling-kirkland-hearing-aid/", destination: "/what-is-the-best-hearing-aid-sold-at-costco/", permanent: true },
      { source: "/does-costco-only-sell-over-the-counter-hearing-aids/", destination: "/what-is-the-best-hearing-aid-sold-at-costco/", permanent: true },
      { source: "/do-i-need-a-membership-to-buy-hearing-aids-from-costco/", destination: "/what-is-the-best-hearing-aid-sold-at-costco/", permanent: true },
      { source: "/are-costco-hearing-tests-done-by-audiologists/", destination: "/what-is-the-best-hearing-aid-sold-at-costco/", permanent: true },
      { source: "/costco-vs-audiologist-hearing-aid-care-model/", destination: "/what-is-the-best-hearing-aid-sold-at-costco/", permanent: true },
      { source: "/costco-hearing-aids-vs-a-private-audiologist-what-is-the-difference/", destination: "/what-is-the-best-hearing-aid-sold-at-costco/", permanent: true },
      { source: "/what-are-invisible-in-canal-iic-hearing-aids/", destination: "/what-are-invisible-hearing-aids/", permanent: true },
      { source: "/what-is-the-1-hearing-aid/", destination: "/hearing-aid-care-2025/", permanent: true },
      { source: "/will-hearing-aids-help-tinnitus/", destination: "/can-hearing-aids-help-tinnitus/", permanent: true },
      { source: "/tesla-robotaxi-hearing-loss-hearing-aids/", destination: "/waymo-robotaxi-hearing-loss-hearing-aids/", permanent: true },
      { source: "/how-much-does-it-cost-to-see-an-audiologist/", destination: "/how-much-does-an-audiologist-cost/", permanent: true },
      { source: "/why-is-hearing-loss-not-covered-by-insurance/", destination: "/are-hearing-aids-not-covered-by-insurance/", permanent: true },
      { source: "/accommodate-your-loved-ones-with-hearing-loss/", destination: "/ways-to-accommodate-your-loved-ones-with-hearing-loss/", permanent: true },
      { source: "/what-is-real-ear-measurement-and-why-does-it-matter/", destination: "/what-is-real-ear-measurement/", permanent: true },
      { source: "/2025-guide-to-hearing-aids-in-san-mateo-san-carlos-brands-prices-and-real-life-results/", destination: "/areas-we-serve/san-mateo/", permanent: true },
      { source: "/2025-guide-to-hearing-aids-in-san-mateo-san-carlos-brands-prices-and-real-life-results-2/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/4124-2/", destination: "/the-blog/", permanent: true },
      { source: "/5-common-hearing-aid-problems-and-fixes-for-palo-alto-patients/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/5-common-hearing-aid-problems-and-fixes-for-palo-alto-patients-2/", destination: "/services/hearing-aid-repair/", permanent: true },
      { source: "/5-signs-you-need-a-hearing-test-dont-ignore-these-red-flags/", destination: "/hearing-testing/", permanent: true },
      { source: "/a-brief-history-of-hearing-loss/", destination: "/the-blog/", permanent: true },
      { source: "/ai-search-seo-for-audiology-clinics-building-pillar-pages-and-support-content/", destination: "/about-us/", permanent: true },
      { source: "/archive/", destination: "/the-blog/", permanent: true },
      { source: "/are-hearing-aids-better-in-the-ear-or-behind-the-ear/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/are-hearing-aids-better-in-the-ear-or-behind-the-ear-complete-guide/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/are-hearing-aids-tax-deductible-complete-guide/", destination: "/are-hearing-aids-tax-deductible/", permanent: true },
      { source: "/are-miracle-ear-hearing-aids-any-good/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/at-what-level-of-hearing-do-you-need-a-hearing-aid/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/bay-area-events-youll-enjoy-more-with-better-hearing-concerts-lectures-theater/", destination: "/services/hearing-protection/", permanent: true },
      { source: "/bay-area-union-hearing-benefits-guide-complete-list-of-san-francisco-oakland-san-mateo-locals/", destination: "/areas-we-serve/san-mateo/", permanent: true },
      { source: "/best-audiologist-in-san-mateo-ca-for-hearing-tests-and-hearing-aids/", destination: "/areas-we-serve/san-mateo/", permanent: true },
      { source: "/best-audiologists-near-midtown-palo-alto-a-local-guide/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/best-audiologists-near-mills-peninsula-hospital-burlingame/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/best-hearing-aids-for-seniors-in-atherton/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/best-hearing-aids-for-seniors-in-burlingame/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/best-hearing-aids-to-buy-in-2025-2/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/best-hearing-protection-for-musicians-living-in-atherton/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/best-hearing-protection-options-for-musicians-in-hillsborough/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/best-hearing-protection-options-for-musicians-in-palo-altos-university-avenue-scene/", destination: "/services/hearing-protection/", permanent: true },
      { source: "/best-places-in-san-mateo-to-test-your-new-hearing-aids-restaurants-parks-events/", destination: "/areas-we-serve/san-mateo/", permanent: true },
      { source: "/best-quiet-restaurants-in-burlingame-for-people-dining-with-hearing-aids/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/best-quiet-restaurants-in-palo-alto-for-people-dining-with-hearing-aids/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/best-quiet-restaurants-in-palo-alto-for-people-with-hearing-loss/", destination: "/the-blog/", permanent: true },
      { source: "/best-quiet-restaurants-near-hillsborough-for-people-with-hearing-loss/", destination: "/the-blog/", permanent: true },
      { source: "/best-relaxation-techniques-for-tinnitus-relief-in-hillsborough/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/best-relaxation-techniques-for-tinnitus-relief-in-hillsborough-2/", destination: "/tinnitus/", permanent: true },
      { source: "/best-relaxation-techniques-for-tinnitus-relief-in-palo-alto/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/breakthrough-research-senolytic-treatment-shows-promise-in-delaying-age-related-hearing-loss/", destination: "/the-blog/", permanent: true },
      { source: "/bryan-johnsons-bold-vision-for-hearing-health-what-it-means-for-you/", destination: "/the-blog/", permanent: true },
      { source: "/bryan-johnsons-dont-die-blueprint-a-new-vision-for-hearing-health-and-longevity/", destination: "/the-blog/", permanent: true },
      { source: "/can-an-audiologist-help-with-balance-problems-2/", destination: "/about-us/", permanent: true },
      { source: "/can-audiologists-diagnose-ear-problems-2/", destination: "/hearing-testing/", permanent: true },
      { source: "/can-audiologists-diagnose-ear-problems-3/", destination: "/hearing-testing/", permanent: true },
      { source: "/can-diet-exercise-or-lifestyle-changes-improve-your-hearing-what-research-says/", destination: "/the-blog/", permanent: true },
      { source: "/can-hearing-aids-help-tinnitus-what-patients-should-know/", destination: "/can-hearing-aids-help-tinnitus/", permanent: true },
      { source: "/can-hearing-aids-help-with-tinnitus-insights-for-palo-alto-residents/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/can-hearing-aids-help-with-tinnitus-insights-for-palo-alto-residents-2/", destination: "/tinnitus/", permanent: true },
      { source: "/can-stress-make-tinnitus-worse-what-atherton-patients-should-know/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/can-stress-make-tinnitus-worse-what-atherton-patients-should-know-2/", destination: "/tinnitus/", permanent: true },
      { source: "/can-you-sleep-with-hearing-aids-advice-for-burlingame-patients/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/can-you-sleep-with-hearing-aids-advice-for-hillsborough-patients/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/communication-at-work-may-is-better-hearing-and-speech-month/", destination: "/the-blog/", permanent: true },
      { source: "/concerns-over-headphone-use-in-young-people-what-parents-and-teens-need-to-know/", destination: "/the-blog/", permanent: true },
      { source: "/could-drinking-alcohol-affect-your-hearing/", destination: "/the-blog/", permanent: true },
      { source: "/custom-ear-molds-for-musicians-swimmers-and-concert-lovers-in-the-bay-area/", destination: "/services/hearing-protection/", permanent: true },
      { source: "/did-you-know-hearing-aids-could-help-protect-your-mind/", destination: "/services/hearing-protection/", permanent: true },
      { source: "/discreet-hearing-aid-technology-could-give-you-your-life-back/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/discreet-hearing-solutions-hear-everything-show-nothing/", destination: "/the-blog/", permanent: true },
      { source: "/do-audiologists-go-to-nursing-homes/", destination: "/hearing-aids-for-seniors/", permanent: true },
      { source: "/do-audiologists-perform-ear-surgery/", destination: "/about-us/", permanent: true },
      { source: "/do-audiologists-prescribe-medication/", destination: "/about-us/", permanent: true },
      { source: "/do-i-need-two-hearing-aids-advice-for-hillsborough-patients/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/does-aarp-have-hearing-aid-benefits-complete-guide/", destination: "/does-aarp-have-hearing-aid-benefits/", permanent: true },
      { source: "/does-blue-cross-blue-shield-cover-hearing-tests/", destination: "/hearing-testing/", permanent: true },
      { source: "/does-blue-cross-blue-shield-medicare-pay-for-hearing-aids/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/does-caffeine-affect-tinnitus-research-for-burlingame-patients/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/does-medicare-cover-hearing-aids-at-costco/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/does-medicare-cover-hearing-aids-understanding-your-options/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/does-medicare-cover-hearing-tests/", destination: "/hearing-testing/", permanent: true },
      { source: "/does-social-security-pay-for-hearing-aids-complete-guide/", destination: "/does-social-security-pay-for-hearing-aids/", permanent: true },
      { source: "/eli-lilly-weight-loss-pill-orforglipron-hearing-aids/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/enjoy-the-holidays-with-your-hearing-aids/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/exercise-may-be-good-for-your-ears-too/", destination: "/the-blog/", permanent: true },
      { source: "/finding-quality-hearing-aids-near-me-a-complete-guide-to-local-hearing-care/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/first-hearing-aids-checklist/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/first-hearing-test-step-by-step-guide-for-adults-in-san-mateo-san-carlos/", destination: "/areas-we-serve/san-mateo/", permanent: true },
      { source: "/five-myths-about-hearing-aids-that-stop-people-from-getting-help/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/five-shocking-links-to-hearing-damage/", destination: "/the-blog/", permanent: true },
      { source: "/from-faqs-to-ai-overviews-turning-your-front-desk-questions-into-ai-friendly-content/", destination: "/the-blog/", permanent: true },
      { source: "/game-changing-hearing-solutions-for-tennis-golf-pickleball-players/", destination: "/the-blog/", permanent: true },
      { source: "/glp-1-ozempic-wegovy-hearing-aids/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/good-hearing-aids/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/harbor-hearing/", destination: "/the-blog/", permanent: true },
      { source: "/have-a-problem-with-your-hearing-aids-here-are-some-troubleshooting-tips/", destination: "/services/hearing-aid-repair/", permanent: true },
      { source: "/hearing-aid-friendly-activities-for-families-in-atherton/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/hearing-aid-friendly-activities-for-families-in-hillsborough/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/hearing-aid-friendly-activities-for-families-in-hillsborough-2/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/hearing-aid-maintenance-tips-for-hillsborough-homes/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/hearing-aid-support-groups-in-atherton-and-menlo-park/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/hearing-aids-and-smartphones-a-simple-guide-to-pairing-apps-and-troubleshooting/", destination: "/services/hearing-aid-repair/", permanent: true },
      { source: "/hearing-aids-near-burlingame-avenue-for-hillsborough-residents/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/hearing-aids-near-burlingame-caltrain-station-commuters-guide/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/hearing-aids-near-me-in-burlingame-trusted-local-clinics/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/hearing-aids-near-me-in-palo-alto-local-audiologists-reviewed/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/hearing-aids-near-stanford-shopping-center-what-to-expect/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/hearing-damage-and-childrens-development-early-detection-is-key/", destination: "/the-blog/", permanent: true },
      { source: "/hearing-for-the-holidays/", destination: "/the-blog/", permanent: true },
      { source: "/hearing-health-and-your-heart-a-few-recipes/", destination: "/the-blog/", permanent: true },
      { source: "/hearing-loss-and-cognitive-health-what-recent-research-means-for-bay-area-patients/", destination: "/hearing-loss-cognitive-health/", permanent: true },
      { source: "/hearing-loss-and-diabetes-what-burlingame-residents-should-know/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/hearing-protection-for-tech-workers-and-remote-professionals-on-headsets-all-day/", destination: "/services/hearing-protection/", permanent: true },
      { source: "/hearing-resolutions-for-2019/", destination: "/the-blog/", permanent: true },
      { source: "/hearing-test-clinics-near-athertons-menlo-circus-club/", destination: "/hearing-testing/", permanent: true },
      { source: "/hearing-test-clinics-near-stanford-university-palo-altos-local-options-explained/", destination: "/hearing-testing/", permanent: true },
      { source: "/holiday-parties-for-the-hearing-impaired/", destination: "/the-blog/", permanent: true },
      { source: "/how-ai-search-is-changing-how-patients-find-audiologists-and-what-private-practices-should-do/", destination: "/about-us/", permanent: true },
      { source: "/how-burlingame-employers-can-support-workers-with-hearing-loss/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/how-diabetes-and-hearing-loss-are-linked-in-burlingame-residents/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/how-dr-emily-mcmahan-brings-advanced-tinnitus-care-to-the-bay-area-without-you-flying-to-alaska/", destination: "/tinnitus/", permanent: true },
      { source: "/how-far-should-you-push-a-hearing-aid-in-tips-from-california-hearing-center/", destination: "/how-far-do-you-push-hearing-aid-in/", permanent: true },
      { source: "/how-long-do-hearing-aid-batteries-last-size-10-vs-312-vs-13-vs-675/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/how-long-does-it-take-to-become-a-hearing-aid-specialist/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/how-long-does-it-take-to-become-an-audiology-technician/", destination: "/about-us/", permanent: true },
      { source: "/how-long-to-get-used-to-hearing-aids/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/how-loud-is-too-loud-noise-exposure-in-atherton-workplaces/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/how-minerals-can-protect-your-hearing/", destination: "/services/hearing-protection/", permanent: true },
      { source: "/how-modern-hearing-tests-work-inside-the-audiology-booth/", destination: "/hearing-testing/", permanent: true },
      { source: "/how-much-do-audiologists-make-their-money/", destination: "/about-us/", permanent: true },
      { source: "/how-much-does-a-hearing-test-cost-without-insurance-2/", destination: "/hearing-testing/", permanent: true },
      { source: "/how-much-does-costco-charge-for-a-hearing-test/", destination: "/what-is-the-best-hearing-aid-sold-at-costco/", permanent: true },
      { source: "/how-often-hearing-aids-cleaned-serviced/", destination: "/hearing-aid-replacement-intervals-domes-wax-guards-receivers/", permanent: true },
      { source: "/how-often-should-adults-get-a-hearing-test/", destination: "/hearing-testing/", permanent: true },
      { source: "/how-often-should-hearing-aids-be-replaced-in-the-bay-area-climate/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/how-often-should-you-get-a-hearing-test-in-palo-alto/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/how-often-should-you-get-your-hearing-checked-after-age-50/", destination: "/the-blog/", permanent: true },
      { source: "/how-should-you-clean-your-ears/", destination: "/services/earwax-removal/", permanent: true },
      { source: "/how-to-adjust-to-new-hearing-aids-palo-alto-success-stories/", destination: "/hearing-aid-fitting/", permanent: true },
      { source: "/how-to-adjust-to-new-hearing-aids-palo-alto-success-stories-2/", destination: "/hearing-aid-fitting/", permanent: true },
      { source: "/how-to-choose-the-right-audiologist-in-hillsborough/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/how-to-choose-the-right-audiologist-in-palo-alto-near-california-avenue/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/how-to-clean-and-maintain-hearing-aids-in-atherton/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/how-to-clean-and-maintain-hearing-aids-in-burlingame-homes/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/how-to-make-your-audiology-website-ai-readable-with-schema-and-clear-headings/", destination: "/about-us/", permanent: true },
      { source: "/how-untreated-ear-infections-affect-hearing-in-hillsborough-children/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/how-untreated-ear-infections-can-affect-hearing-in-hillsborough/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/how-untreated-hearing-loss-impacts-health-in-atherton-residents/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/how-we-choose-which-hearing-aid-brands-to-offer-at-our-clinic/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/how-we-fine-tune-hearing-aids-for-noisy-restaurants-family-dinners-and-holidays/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/invisible-hearing-aids-are-they-worth-it-for-atherton-patients/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/invisible-hearing-aids-are-they-worth-it-for-atherton-patients-2/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/invisible-hearing-aids-for-hillsborough-residents-are-they-worth-it/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/invisible-hearing-aids-in-burlingame-are-they-worth-it-for-frequent-travelers/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/is-a-torrent-audiologist-a-doctor/", destination: "/about-us/", permanent: true },
      { source: "/is-an-audiologist-covered-by-medicare/", destination: "/about-us/", permanent: true },
      { source: "/is-an-audiology-degree-worth-it/", destination: "/about-us/", permanent: true },
      { source: "/is-audiologist-a-stressful-job/", destination: "/about-us/", permanent: true },
      { source: "/is-audiology-a-good-career-to-go-into/", destination: "/about-us/", permanent: true },
      { source: "/is-audiology-school-difficult/", destination: "/about-us/", permanent: true },
      { source: "/is-hearing-loss-reversible-local-audiologists-explain-in-hillsborough/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/is-it-better-to-get-a-hearing-aid-from-an-audiologist-expert-guidance/", destination: "/is-it-better-to-get-a-hearing-aid-from-an-audiologist/", permanent: true },
      { source: "/is-it-normal-to-feel-tired-from-untreated-hearing-loss/", destination: "/the-blog/", permanent: true },
      { source: "/is-it-ok-to-leave-hearing-aids-in-overnight-expert-advice/", destination: "/is-it-ok-to-leave-hearing-aids-in-overnight/", permanent: true },
      { source: "/is-two-always-better-than-one/", destination: "/the-blog/", permanent: true },
      { source: "/lenire-in-san-mateo-the-bay-area-how-bimodal-neuromodulation-works-in-plain-english/", destination: "/areas-we-serve/san-mateo/", permanent: true },
      { source: "/local-resources-for-seniors-with-hearing-loss-in-atherton/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/local-resources-for-seniors-with-hearing-loss-in-burlingame/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/local-resources-for-seniors-with-hearing-loss-in-hillsborough/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/loop-systems-availability-and-benefits/", destination: "/the-blog/", permanent: true },
      { source: "/lunch-and-learn-hearing-healthcare-technology/", destination: "/the-blog/", permanent: true },
      { source: "/meet-your-audiologist-dr-kira-savins-approach-to-hearing-care-in-san-mateo/", destination: "/areas-we-serve/san-mateo/", permanent: true },
      { source: "/menieres-disease/", destination: "/hearing-testing/", permanent: true },
      { source: "/napa/", destination: "/the-blog/", permanent: true },
      { source: "/napa-2/", destination: "/the-blog/", permanent: true },
      { source: "/navigating-the-impact-of-trade-policies-on-hearing-aid-availability-uncertainties-and-considerations/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/noise-pollution-and-hearing-health/", destination: "/services/hearing-protection/", permanent: true },
      { source: "/occupational-hearing-loss-high-risk-industries-and-how-to-protect-your-hearing/", destination: "/services/hearing-protection/", permanent: true },
      { source: "/oticon-intent-vs-zeal/", destination: "/the-blog/", permanent: true },
      { source: "/oticon-zeal-bluetooth-le-audio-auracast/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/oticon-zeal-brainhearing-ai/", destination: "/the-blog/", permanent: true },
      { source: "/oticon-zeal-durability-encapsulation-ip68/", destination: "/the-blog/", permanent: true },
      { source: "/oticon-zeal-professional-fitting-rem/", destination: "/hearing-aid-fitting/", permanent: true },
      { source: "/pairing-hearing-aids/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/pairing-hearing-aids-to-iphone/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/pediatric-hearing-tests-in-san-mateo-a-parents-step-by-step-guide/", destination: "/areas-we-serve/san-mateo/", permanent: true },
      { source: "/police-officers-guide-to-hearing-aids-protecting-your-hearing-in-the-line-of-duty/", destination: "/services/hearing-protection/", permanent: true },
      { source: "/pool-time-avoid-swimmers-ear-with-these-tips/", destination: "/the-blog/", permanent: true },
      { source: "/port-of-oakland-longshoremen-comprehensive-hearing-healthcare-guide/", destination: "/areas-we-serve/alameda-county/#oakland", permanent: true },
      { source: "/preparing-for-a-big-life-event-with-new-hearing-aids-weddings-travel-reunions/", destination: "/hearing-aid-fitting/", permanent: true },
      { source: "/protect-your-hearing/", destination: "/services/hearing-protection/", permanent: true },
      { source: "/protect-your-hearing-and-still-enjoy-concerts/", destination: "/services/hearing-protection/", permanent: true },
      { source: "/protecting-your-devices-and-your-hearing-all-year-long/", destination: "/services/hearing-protection/", permanent: true },
      { source: "/quicksin-speech-in-noise-test-vs-standard-hearing-test/", destination: "/hearing-testing/", permanent: true },
      { source: "/real-stories-how-better-hearing-changed-daily-life-for-bay-area-grandparents/", destination: "/the-blog/", permanent: true },
      { source: "/receiver-in-canal-hearing-technology-a-seniors-complete-resource-for-selection-and-use/", destination: "/hearing-aids-for-seniors/", permanent: true },
      { source: "/rechargeable-vs-disposable-hearing-aids-for-atherton-commuters/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/rechargeable-vs-disposable-hearing-aids-in-palo-alto/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/rechargeable-vs-disposable-hearing-aids-which-works-best-for-hillsborough-musicians/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/remote-hearing-care-what-can-be-done-by-telehealth-and-what-still-needs-the-clinic/", destination: "/about-us/", permanent: true },
      { source: "/retirement-and-hearing-healthcare/", destination: "/hearing-aids-for-seniors/", permanent: true },
      { source: "/routine-hearing-assessments-in-scotland-a-game-changer-for-older-adults/", destination: "/the-blog/", permanent: true },
      { source: "/smartphone-hearing-aid-compatibility-fcc-rules/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/specialized-hearing-solutions-for-motorsports-racing-motorcycling-off-road-adventures/", destination: "/the-blog/", permanent: true },
      { source: "/specialized-hearing-solutions-for-outdoor-adventures-hiking-cycling-water-sports/", destination: "/the-blog/", permanent: true },
      { source: "/specialized-hearing-solutions-for-racquet-sports-squash-racquetball-badminton/", destination: "/the-blog/", permanent: true },
      { source: "/sudden-hearing-loss-when-its-an-emergency-and-what-to-do/", destination: "/the-blog/", permanent: true },
      { source: "/summer-travel-tips-for-hearing-aids/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/team-sports-hearing-solutions-enhance-communication-performance-on-the-field/", destination: "/the-blog/", permanent: true },
      { source: "/teamsters-union-hearing-aid-benefits-complete-coverage-guide-for-bay-area-members/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/test/", destination: "/the-blog/", permanent: true },
      { source: "/the-latest-hearing-aid-technology-in-hillsborough-2025-update/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/the-real-cost-of-hearing-aids-for-atherton-residents-2025-update/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/the-real-cost-of-hearing-aids-in-atherton-and-how-to-save/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/the-real-cost-of-hearing-aids-in-burlingame-and-how-to-save/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/the-real-cost-of-hearing-aids-in-burlingame-and-how-to-save-2/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/this-year-make-a-resolution-that-is-easy-to-keep/", destination: "/the-blog/", permanent: true },
      { source: "/tinnitus-clinic-dr-emily-mcmahan-san-mateo-march-30-2026/", destination: "/areas-we-serve/san-mateo/", permanent: true },
      { source: "/tinnitus-therapy-lenire-in-san-mateo-dr-emily-mcmahan/", destination: "/areas-we-serve/san-mateo/", permanent: true },
      { source: "/tinnitus-treatment-in-the-bay-area-what-really-works-in-2025/", destination: "/tinnitus/", permanent: true },
      { source: "/tinnitus-treatment-options-for-commuters-in-burlingame-2025-update/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/tinnitus-treatment-options-in-palo-alto-what-actually-works/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/tinnitus-treatment-options-near-athertons-lindenwood-neighborhood/", destination: "/tinnitus/", permanent: true },
      { source: "/tinnitus-treatment-options-near-burlingames-broadway-district/", destination: "/tinnitus/", permanent: true },
      { source: "/tips-for-first-time-hearing-aid-users-in-atherton/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/tips-for-first-time-hearing-aid-users-in-burlingame/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/top-10-questions-to-ask-your-audiologist-at-your-first-visit/", destination: "/about-us/", permanent: true },
      { source: "/top-5-mistakes-burlingame-residents-make-when-buying-hearing-aids/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/top-5-mistakes-people-in-hillsborough-make-when-buying-hearing-aids/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/top-5-things-to-do-in-burlingame-with-hearing-aids/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/top-questions-palo-alto-patients-ask-about-hearing-aids-answered/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/top-signs-of-hearing-loss-residents-notice-in-palo-altos-tech-workforce/", destination: "/the-blog/", permanent: true },
      { source: "/top-signs-of-hearing-loss-to-watch-for-in-atherton-residents/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/top-signs-of-hearing-loss-to-watch-for-in-atherton-seniors/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/top-signs-of-hearing-loss-to-watch-for-in-burlingame-residents/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/tracking-your-audiology-brand-in-ai-search-a-simple-starter-checklist/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/training-your-hearing-a-marathon-not-a-sprint/", destination: "/the-blog/", permanent: true },
      { source: "/try-these-tips-to-avoid-swimmers-ear/", destination: "/the-blog/", permanent: true },
      { source: "/understanding-age-related-hearing-loss-in-palo-altos-94301-zip-code/", destination: "/the-blog/", permanent: true },
      { source: "/understanding-age-related-hearing-loss-presbycusis-in-burlingame/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/vertigo-vs-balance-disorders-understanding-symptoms-in-palo-alto/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/welcome-spring-prepare-your-ears/", destination: "/the-blog/", permanent: true },
      { source: "/what-are-the-disadvantages-of-an-audiologist/", destination: "/about-us/", permanent: true },
      { source: "/what-are-the-disadvantages-of-an-audiologist-2/", destination: "/about-us/", permanent: true },
      { source: "/what-causes-sudden-hearing-loss-in-hillsborough/", destination: "/areas-we-serve/hillsborough/", permanent: true },
      { source: "/what-happens-after-you-buy-hearing-aids-follow-up-visits-cleanings-and-adjustments/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/what-happens-if-you-wait-too-long-to-get-hearing-aids/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/what-is-the-1-hearing-aid-2/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/what-is-the-60-60-rule-in-audiology-complete-guide/", destination: "/what-is-the-60-60-rule-in-audiology/", permanent: true },
      { source: "/what-is-the-average-lifespan-of-a-hearing-aid-complete-guide/", destination: "/what-is-the-average-lifespan-of-a-hearing-aid/", permanent: true },
      { source: "/what-is-the-difference-between-a-hearing-aid-and-an-audiologist-2/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/what-makes-a-good-fit-in-hearing-aids-comfort-sound-and-lifestyle-match/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/what-really-happens-in-a-tinnitus-evaluation-beyond-your-hearing-is-fine/", destination: "/tinnitus/", permanent: true },
      { source: "/what-tinnitus-progress-really-looks-like-less-quieter-or-just-not-in-the-spotlight/", destination: "/tinnitus/", permanent: true },
      { source: "/what-tinnitus-really-is-and-why-80-of-people-learn-to-ignore-it/", destination: "/tinnitus/", permanent: true },
      { source: "/what-to-ask-during-a-hearing-consultation/", destination: "/the-blog/", permanent: true },
      { source: "/what-to-expect-at-your-audiology-appointment-a-comprehensive-guide/", destination: "/about-us/", permanent: true },
      { source: "/what-to-expect-at-your-childs-first-hearing-appointment/", destination: "/the-blog/", permanent: true },
      { source: "/what-to-expect-at-your-first-hearing-appointment-in-atherton/", destination: "/areas-we-serve/atherton/", permanent: true },
      { source: "/what-to-expect-in-the-first-30-days-with-your-new-hearing-aids/", destination: "/hearing-aid-fitting/", permanent: true },
      { source: "/what-tools-does-an-audiologist-use/", destination: "/about-us/", permanent: true },
      { source: "/what-two-terms-are-acceptable-to-use-when-someone-has-hearing-loss/", destination: "/the-blog/", permanent: true },
      { source: "/when-is-it-time-to-get-your-hearing-checked-early-signs-adults-often-ignore/", destination: "/the-blog/", permanent: true },
      { source: "/when-should-audiologists-refer-to-ent/", destination: "/about-us/", permanent: true },
      { source: "/when-should-you-see-an-audiologist/", destination: "/about-us/", permanent: true },
      { source: "/when-to-upgrade-your-hearing-aids-in-burlingame/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/where-can-i-get-my-hearing-checked/", destination: "/the-blog/", permanent: true },
      { source: "/which-doctor-is-best-for-the-ears/", destination: "/about-us/", permanent: true },
      { source: "/whoopi-goldbergs-inspiring-journey-with-hearing-loss-breaking-barriers-and-raising-awareness/", destination: "/the-stigma-of-hearing-loss/", permanent: true },
      { source: "/whooshing-sound/", destination: "/the-blog/", permanent: true },
      { source: "/why-just-turning-up-the-tv-isnt-a-long-term-hearing-solution/", destination: "/the-blog/", permanent: true },
      { source: "/why-patients-drive-from-lafayette-walnut-creek-san-ramon-to-our-san-mateo-clinic/", destination: "/areas-we-serve/san-mateo/", permanent: true },
      { source: "/why-untreated-hearing-loss-can-impact-your-health-in-burlingame/", destination: "/areas-we-serve/burlingame/", permanent: true },
      { source: "/why-untreated-hearing-loss-can-impact-your-health-in-palo-alto/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/why-untreated-hearing-loss-impacts-health-in-palo-alto-residents/", destination: "/areas-we-serve/palo-alto/", permanent: true },
      { source: "/why-untreated-hearing-loss-impacts-health-in-palo-alto-residents-2/", destination: "/the-blog/", permanent: true },
      { source: "/why-untreated-hearing-loss-impacts-health-in-palo-alto-residents-3/", destination: "/the-blog/", permanent: true },
      { source: "/why-would-someone-want-to-be-an-audiologist/", destination: "/about-us/", permanent: true },
      { source: "/why-would-someone-want-to-be-an-audiologist-2/", destination: "/about-us/", permanent: true },
      { source: "/will-hearing-aids-make-my-hearing-lazy/", destination: "/products/hearing-aids/", permanent: true },
      { source: "/will-medicare-pay-for-an-audiologist/", destination: "/about-us/", permanent: true },
      { source: "/winter-sports-hearing-solutions-protect-enhance-your-mountain-experience/", destination: "/services/hearing-protection/", permanent: true },
      { source: "/yearly-hearing-wellness-check-why-hearing-should-be-part-of-your-preventive-health-routine/", destination: "/the-blog/", permanent: true },
      { source: "/your-hearing-health-worth-the-investment/", destination: "/the-blog/", permanent: true },
      { source: "/your-hearing-what-you-dont-know/", destination: "/the-blog/", permanent: true }
];

// WordPress archive URLs. These never appeared in any sitemap, which is why the
// earlier redirect pass missed them — but they are real, indexed pages on the
// live site, linked from every post: four category archives, 267 tag archives,
// five author archives, and the paginated blog. Without these they all 404 the
// day the domain moves.
// Yoast's sitemap paths. Search Console has /sitemap_index.xml on file and
// crawlers have the child sitemaps cached, so all four would 404 the moment the
// domain moves. Next's own sitemap lives at /sitemap.xml.
// Legacy WordPress pages that Search Console still reports as 404 (Page
// indexing report, 16 Sep 2026). Several are the old office and booking pages,
// which directories and old bookmarks still point at. The rest are recurring
// mistyped URLs that were earning impressions.
const legacyPageRedirects = [
  { source: "/home/", destination: "/", permanent: true },
  { source: "/schedule-an-appointment/", destination: "/contact/", permanent: true },
  { source: "/san-mateo-main-office/", destination: "/contact/san-mateo/", permanent: true },
  { source: "/san-carlos/", destination: "/contact/san-carlos/", permanent: true },
  { source: "/online-hearing-test/", destination: "/hearing-testing/", permanent: true },
  { source: "/hearing-test/", destination: "/hearing-testing/", permanent: true },
  { source: "/best-hearing-aids-to-buy-in-2025/", destination: "/products/hearing-aids/", permanent: true },
  { source: "/study-shows-exercise-improves-hearing/", destination: "/the-blog/", permanent: true },
  { source: "/understanding-and-treating-dry-ears/", destination: "/understanding-and-treating-dry-ears-causes-symptoms-and-solutions/", permanent: true },
  { source: "/understanding-and-treating-dry-ears-causes-solutions/", destination: "/understanding-and-treating-dry-ears-causes-symptoms-and-solutions/", permanent: true },
  { source: "/one-ear/", destination: "/tinnitus/one-ear/", permanent: true },
  { source: "/why-does-hawkeye-have-hearing-aid/", destination: "/why-does-hawkeye-have-hearing-aids/", permanent: true },
  { source: "/why-does-hawkeye-have-a-hearing-aid/", destination: "/why-does-hawkeye-have-hearing-aids/", permanent: true },
  { source: "/the-60-60-rule-in-audiology/", destination: "/what-is-the-60-60-rule-in-audiology/", permanent: true },
  // Duplicate of the tinnitus hub page: 370 impressions at position 45 and no
  // clicks in the 28 days to 16 Sep 2026, while /tinnitus/one-ear/ ranks ~7.
  { source: "/tinnitus-in-one-ear/", destination: "/tinnitus/one-ear/", permanent: true },

  // 17 Sep 2026 — legacy WordPress URLs Google still holds but that 404ed with
  // no redirect at all. Found by walking the "Excluded by 'noindex' tag" bucket
  // in Search Console (74 URLs) and fetching every one against production:
  // 25 tag archives and 2 feeds already redirected correctly, 15 were wp-admin
  // and wp-login paths, 5 were robots.txt patterns rather than URLs, and these
  // were the real pages with an equivalent still on the site.
  { source: "/contact-us/", destination: "/contact/", permanent: true },
  { source: "/book-appointment/", destination: "/contact/#request-appointment", permanent: true },
  { source: "/hearing-services/", destination: "/services/", permanent: true },
  { source: "/services/hearing-tests/", destination: "/hearing-testing/", permanent: true },
  { source: "/services/custom-earplugs/", destination: "/services/hearing-protection/", permanent: true },
  { source: "/hearing-aid-troubleshooting/", destination: "/services/hearing-aid-repair/", permanent: true },
  { source: "/shop/", destination: "/products/hearing-aids/", permanent: true },
  { source: "/tinnitus/assessment/", destination: "/tinnitus/", permanent: true },
  { source: "/products/hearing-aids-by-brand/oticon/oticon-own/", destination: "/products/hearing-aids-by-brand/oticon/", permanent: true },
  // Atherton kept its city page and most of its service sub-pages; these four
  // were dropped without a redirect. Parent city page is the closest match.
  { source: "/areas-we-serve/atherton/hearing-tests/", destination: "/areas-we-serve/atherton/", permanent: true },
  { source: "/areas-we-serve/atherton/hearing-aid-fittings/", destination: "/areas-we-serve/atherton/", permanent: true },
  { source: "/areas-we-serve/atherton/hearing-aid-brands/", destination: "/areas-we-serve/atherton/", permanent: true },
  { source: "/areas-we-serve/atherton/tele-audiology/", destination: "/areas-we-serve/atherton/", permanent: true },
  // Malformed inbound links. The real pages are fine; only the suffix is junk.
  // Straight to the final page: -complete-guide/ is itself redirected, and a
  // two-hop chain is a hop Google does not have to make.
  { source: "/what-is-the-60-60-rule-in-audiology-complete-/", destination: "/what-is-the-60-60-rule-in-audiology/", permanent: true },
  { source: "/ear-buds-may-lead-to-hearing-loss-but-it-can-be-avoided/Links/", destination: "/ear-buds-may-lead-to-hearing-loss-but-it-can-be-avoided/", permanent: true },
];

const legacySitemapRedirects = [
  { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
  { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
  { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
  { source: "/author-sitemap.xml", destination: "/sitemap.xml", permanent: true },
];

const wordpressArchiveRedirects = [
  { source: "/category/:slug*", destination: "/the-blog/", permanent: true },
  { source: "/tag/:slug*", destination: "/the-blog/", permanent: true },
  { source: "/author/:slug*", destination: "/about-us/", permanent: true },
  { source: "/the-blog/page/:page*", destination: "/the-blog/", permanent: true },
  { source: "/page/:page*", destination: "/", permanent: true },
  { source: "/feed/", destination: "/the-blog/", permanent: true },
  { source: "/comments/feed/", destination: "/the-blog/", permanent: true },
  { source: "/:path*/feed/", destination: "/the-blog/", permanent: true },
  // WordPress date archives (/2018/06/, /2020/05/ ...). Matched as a pattern
  // rather than one by one, because Google holds more of these than it shows.
  // Two segments of exactly four then two digits cannot collide with a real
  // route: no path in crawledPages starts with a bare four-digit segment.
  { source: "/:year(\\d{4})/:month(\\d{2})/", destination: "/the-blog/", permanent: true },
];


// 26 Aug 2026 — FIFTY-TWO CITY PAGES CONSOLIDATED INTO THEIR COUNTY HUB.
//
// The rule is demand, not distance. The first cut of this was going to retire
// every city too far to drive from, and the per-page Search Console data killed
// that: six of the ten best-performing city pages were far-tier (Gilroy 8
// clicks, Fremont 7, Concord 5), while San Mateo, San Carlos, Mountain View and
// Menlo Park — the office and near cities — earned nothing at all. Near an
// office Google answers with the map pack, which the practice is already in, so
// the page adds nothing; far away there is no pack slot to lose and a page
// catches a trickle.
//
// So: every office/near/mid city keeps its page for catchment reasons, every
// far-tier page earning 2+ clicks in 90 days keeps its page because it works,
// and the 52 below — one click or none, 21 of them without a single impression
// — fold into the county hub. Six clicks in 90 days between all 52.
//
// The writing is not lost. Each city's prose renders as a section of its hub,
// anchored on the city slug, which is what these redirects point at.
// 26 Aug 2026 — the Portola Valley page had shipped under a misspelled slug,
// /areas-we-serve/portolo-valley/. The page name and body were always correct;
// only the URL was wrong. It earned 0 clicks on 2 impressions in 90 days, so the
// correction costs nothing and stops the typo being the canonical.
const slugCorrectionRedirects = [
      { source: "/areas-we-serve/portolo-valley/", destination: "/areas-we-serve/portola-valley/", permanent: true },
      { source: "/areas-we-serve/santa-clara-country/", destination: "/areas-we-serve/santa-clara-county/", permanent: true },
];

const cityConsolidationRedirects = [
      { source: "/areas-we-serve/alameda/", destination: "/areas-we-serve/alameda-county/#alameda", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/albany/", destination: "/areas-we-serve/alameda-county/#albany", permanent: true }, // 0 clicks, 18 impr
      { source: "/areas-we-serve/antioch/", destination: "/areas-we-serve/contra-costa-county/#antioch", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/bay-area/", destination: "/areas-we-serve/", permanent: true }, // 1 clicks, 215 impr
      { source: "/areas-we-serve/benicia/", destination: "/areas-we-serve/solano-county/#benicia", permanent: true }, // 1 clicks, 159 impr
      { source: "/areas-we-serve/berkeley/", destination: "/areas-we-serve/alameda-county/#berkeley", permanent: true }, // 0 clicks, 20 impr
      { source: "/areas-we-serve/brentwood/", destination: "/areas-we-serve/contra-costa-county/#brentwood", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/cupertino/", destination: "/areas-we-serve/santa-clara-county/#cupertino", permanent: true }, // 0 clicks, 113 impr
      { source: "/areas-we-serve/danville/", destination: "/areas-we-serve/contra-costa-county/#danville", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/dixon/", destination: "/areas-we-serve/solano-county/#dixon", permanent: true }, // 0 clicks, 3 impr
      { source: "/areas-we-serve/emeryville/", destination: "/areas-we-serve/alameda-county/#emeryville", permanent: true }, // 0 clicks, 11 impr
      { source: "/areas-we-serve/fairfield/", destination: "/areas-we-serve/solano-county/#fairfield", permanent: true }, // 0 clicks, 8 impr
      { source: "/areas-we-serve/hayward/", destination: "/areas-we-serve/alameda-county/#hayward", permanent: true }, // 1 clicks, 117 impr
      { source: "/areas-we-serve/hercules/", destination: "/areas-we-serve/contra-costa-county/#hercules", permanent: true }, // 0 clicks, 15 impr
      { source: "/areas-we-serve/lafayette/", destination: "/areas-we-serve/contra-costa-county/#lafayette", permanent: true }, // 0 clicks, 9 impr
      { source: "/areas-we-serve/larkspur/", destination: "/areas-we-serve/marin-county/#larkspur", permanent: true }, // 0 clicks, 15 impr
      { source: "/areas-we-serve/livermore/", destination: "/areas-we-serve/alameda-county/#livermore", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/los-altos-hills/", destination: "/areas-we-serve/santa-clara-county/#los-altos-hills", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/los-gatos/", destination: "/areas-we-serve/santa-clara-county/#los-gatos", permanent: true }, // 0 clicks, 15 impr
      { source: "/areas-we-serve/martinez/", destination: "/areas-we-serve/contra-costa-county/#martinez", permanent: true }, // 0 clicks, 5 impr
      { source: "/areas-we-serve/mill-valley/", destination: "/areas-we-serve/marin-county/#mill-valley", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/monte-sereno/", destination: "/areas-we-serve/santa-clara-county/#monte-sereno", permanent: true }, // 0 clicks, 6 impr
      { source: "/areas-we-serve/morgan-hill/", destination: "/areas-we-serve/santa-clara-county/#morgan-hill", permanent: true }, // 0 clicks, 8 impr
      { source: "/areas-we-serve/novato/", destination: "/areas-we-serve/marin-county/#novato", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/oakland/", destination: "/areas-we-serve/alameda-county/#oakland", permanent: true }, // 1 clicks, 122 impr
      { source: "/areas-we-serve/oakley/", destination: "/areas-we-serve/contra-costa-county/#oakley", permanent: true }, // 0 clicks, 166 impr
      { source: "/areas-we-serve/orinda/", destination: "/areas-we-serve/contra-costa-county/#orinda", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/petaluma/", destination: "/areas-we-serve/sonoma-county/#petaluma", permanent: true }, // 0 clicks, 1257 impr
      { source: "/areas-we-serve/pittsburg/", destination: "/areas-we-serve/contra-costa-county/#pittsburg", permanent: true }, // 1 clicks, 641 impr
      { source: "/areas-we-serve/pleasant-hill/", destination: "/areas-we-serve/contra-costa-county/#pleasant-hill", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/pleasanton/", destination: "/areas-we-serve/alameda-county/#pleasanton", permanent: true }, // 1 clicks, 809 impr
      { source: "/areas-we-serve/richmond/", destination: "/areas-we-serve/contra-costa-county/#richmond", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/rio-vista/", destination: "/areas-we-serve/solano-county/#rio-vista", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/san-jose/", destination: "/areas-we-serve/santa-clara-county/#san-jose", permanent: true }, // 0 clicks, 26 impr
      { source: "/areas-we-serve/san-leandro/", destination: "/areas-we-serve/alameda-county/#san-leandro", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/san-pablo/", destination: "/areas-we-serve/contra-costa-county/#san-pablo", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/san-rafael/", destination: "/areas-we-serve/marin-county/#san-rafael", permanent: true }, // 0 clicks, 42 impr
      { source: "/areas-we-serve/san-ramon/", destination: "/areas-we-serve/contra-costa-county/#san-ramon", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/santa-clara/", destination: "/areas-we-serve/santa-clara-county/#santa-clara", permanent: true }, // 0 clicks, 4 impr
      { source: "/areas-we-serve/santa-rosa/", destination: "/areas-we-serve/sonoma-county/#santa-rosa", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/saratoga/", destination: "/areas-we-serve/santa-clara-county/#saratoga", permanent: true }, // 0 clicks, 3 impr
      { source: "/areas-we-serve/sausalito/", destination: "/areas-we-serve/marin-county/#sausalito", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/sonoma/", destination: "/areas-we-serve/sonoma-county/#sonoma", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/st-helena/", destination: "/areas-we-serve/napa-county/#st-helena", permanent: true }, // 0 clicks, 183 impr
      { source: "/areas-we-serve/suisun-city/", destination: "/areas-we-serve/solano-county/#suisun-city", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/tiburon/", destination: "/areas-we-serve/marin-county/#tiburon", permanent: true }, // 0 clicks, 7 impr
      { source: "/areas-we-serve/union-city/", destination: "/areas-we-serve/alameda-county/#union-city", permanent: true }, // 0 clicks, 151 impr
      { source: "/areas-we-serve/vacaville/", destination: "/areas-we-serve/solano-county/#vacaville", permanent: true }, // 0 clicks, 0 impr
      { source: "/areas-we-serve/vallejo/", destination: "/areas-we-serve/solano-county/#vallejo", permanent: true }, // 0 clicks, 147 impr
      { source: "/areas-we-serve/walnut-creek/", destination: "/areas-we-serve/contra-costa-county/#walnut-creek", permanent: true }, // 0 clicks, 451 impr
      { source: "/areas-we-serve/windsor/", destination: "/areas-we-serve/sonoma-county/#windsor", permanent: true }, // 0 clicks, 10 impr
      { source: "/areas-we-serve/yountville/", destination: "/areas-we-serve/napa-county/#yountville", permanent: true }, // 0 clicks, 0 impr
      // 17 Sep 2026 — ten more city pages the old WordPress site had that were
      // never migrated and never redirected. None of them exist in cityProfiles,
      // so there is no prose to anchor at; the county hub is the closest parent.
      // Davis, Woodland and Winters are Yolo County, which has no hub, so they
      // go to the areas directory like /areas-we-serve/bay-area/ does.
      { source: "/areas-we-serve/rodeo/", destination: "/areas-we-serve/contra-costa-county/", permanent: true },
      { source: "/areas-we-serve/crockett/", destination: "/areas-we-serve/contra-costa-county/", permanent: true },
      { source: "/areas-we-serve/discovery-bay/", destination: "/areas-we-serve/contra-costa-county/", permanent: true },
      { source: "/areas-we-serve/healdsburg/", destination: "/areas-we-serve/sonoma-county/", permanent: true },
      { source: "/areas-we-serve/rohnert-park/", destination: "/areas-we-serve/sonoma-county/", permanent: true },
      { source: "/areas-we-serve/american-canyon/", destination: "/areas-we-serve/napa-county/", permanent: true },
      { source: "/areas-we-serve/castro-valley/", destination: "/areas-we-serve/alameda-county/", permanent: true },
      { source: "/areas-we-serve/davis/", destination: "/areas-we-serve/", permanent: true },
      { source: "/areas-we-serve/woodland/", destination: "/areas-we-serve/", permanent: true },
      { source: "/areas-we-serve/winters/", destination: "/areas-we-serve/", permanent: true },
];

const nextConfig: NextConfig = {
  // Kept identical to the sister practice (Audiology Associates of
  // Westchester): both properties are the same business with the same image
  // problem, and this pair should never drift between them. Everything the
  // site renders goes through app/site/SiteImage.tsx, which hands local raster
  // images to the optimizer with their real intrinsic dimensions.
  images: {
    formats: ["image/avif", "image/webp"],
    // deviceSizes stays at Next's default. Trimming it was the wrong lever:
    // srcset length was driven by passing a fixed-pixel `sizes` string, which
    // makes next/image emit deviceSizes UNION imageSizes. SiteImage now hands
    // fixed-box images their display size and omits `sizes` entirely, so those
    // get 1x/2x and only the genuinely fluid images use the width list.
    //
    // Every filename under /assets and /wp-content is content-stable and gets
    // a one-year immutable header below, but headers() does not apply to
    // /_next/image, whose default cache TTL is four hours. Optimized output of
    // an immutable source should be equally immutable.
    minimumCacheTTL: 31536000,
  },
  // Serve every URL WITH a trailing slash, matching the migrated WordPress URLs,
  // the sitemap, the per-page canonicals, and all internal links. Without this,
  // Next served the no-slash form and 308-redirected the slash form, contradicting
  // the canonical tags (which point at the slash form). Now canonical == served URL.
  trailingSlash: true,
  outputFileTracingRoot: process.cwd(),
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [...newsSlugRedirects, ...blogRedirects, ...cityConsolidationRedirects, ...slugCorrectionRedirects, ...wordpressArchiveRedirects, ...legacyPageRedirects, ...legacySitemapRedirects];
  },
  async headers() {
    // Static assets under /public/assets are content-stable (we rename on change),
    // so cache them hard instead of Vercel's default max-age=0, must-revalidate,
    // which forced a revalidation round-trip on every image, on every visit.
    return [
      {
        // Keep every *.vercel.app copy of the site out of the index. Until the
        // domain is cut over, that deployment is fully crawlable AND emits
        // canonicals pointing at calhearing.com — which is still the WordPress
        // site. Google is being handed two different pages claiming the same
        // URL. X-Robots-Tag is better than a robots.txt Disallow here: a
        // disallowed page can still be indexed from inbound links, because the
        // crawler never fetches it and so never sees the noindex.
        //
        // Matched positively on vercel.app rather than negatively on the
        // production host, deliberately. If this rule ever stops matching, the
        // failure is "preview gets indexed again" — not "calhearing.com gets
        // noindexed", which is what a `missing`-based rule would risk.
        source: "/:path*",
        has: [{ type: "host", value: "(.*\\.)?vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Mirrored legacy WordPress media. These paths exist only to keep the
        // pre-migration image URLs resolving after the domain moves — Google
        // Images equity plus whatever external sites hot-link. The filenames are
        // frozen by definition, so they cache exactly like /assets.
        source: "/wp-content/uploads/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Baseline security headers. HSTS is already supplied by the host.
        // Deliberately no CSP here: the site embeds YouTube and loads GTM/GA4,
        // so a CSP needs to be authored and tested against those or it will
        // silently break video and analytics.
        source: "/:path*",
        headers: [
          // HSTS matches the sister practice (Audiology Associates of
          // Westchester). Vercel sends this automatically on *.vercel.app but
          // NOT on custom domains, so it has to be set here for calhearing.com.
          // includeSubDomains is safe: the pre-cutover zone
          // (_migration/cutover/zone-calhearing-pre-cutover.txt) contains only
          // the apex and www as web hosts, both served over HTTPS by Vercel.
          // Mail is Google Workspace on external hostnames, which HSTS does
          // not touch. Two years, preload-eligible.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
