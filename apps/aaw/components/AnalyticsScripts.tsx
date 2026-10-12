import { TagLoader, TagNoscripts, type TagIds } from "@chc/core/tags";

// The loading rules live in the shared core package (packages/core/tags.tsx).
// This file only holds the ids this practice uses.
export function AnalyticsScripts() {
  const ids: TagIds = {
    ga4: process.env.NEXT_PUBLIC_GA4_ID,
    gtm: process.env.NEXT_PUBLIC_GTM_ID || "GTM-T6X664N",
    facebookPixel: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "2514209258866599",
    piwikUrl: process.env.NEXT_PUBLIC_PIWIK_PRO_URL || "https://localedge.piwik.pro/",
    piwikSiteId: process.env.NEXT_PUBLIC_PIWIK_PRO_SITE_ID || "33153b90-8d23-4967-9b24-5a3b3f41f3f7",
    snowplowDomain: process.env.NEXT_PUBLIC_SNOWPLOW_DOMAIN || "d32hwlnfiv2gyn.cloudfront.net",
    snowplowAppId: process.env.NEXT_PUBLIC_SNOWPLOW_APP_ID || "d8404b56",
  };
  return (
    <>
      <TagLoader ids={ids} options={{ trackClicks: true, zocdoc: true }} />
      <TagNoscripts ids={ids} />
    </>
  );
}
