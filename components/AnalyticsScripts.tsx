import Script from "next/script";

export function AnalyticsScripts() {
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-T6X664N";
  const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "2514209258866599";
  const piwikUrl = process.env.NEXT_PUBLIC_PIWIK_PRO_URL || "https://localedge.piwik.pro/";
  const piwikSiteId =
    process.env.NEXT_PUBLIC_PIWIK_PRO_SITE_ID || "33153b90-8d23-4967-9b24-5a3b3f41f3f7";
  const snowplowDomain = process.env.NEXT_PUBLIC_SNOWPLOW_DOMAIN || "d32hwlnfiv2gyn.cloudfront.net";
  const snowplowAppId = process.env.NEXT_PUBLIC_SNOWPLOW_APP_ID || "d8404b56";

  return (
    <>
      <Script
        id="analytics-bootstrap"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];

            function loadExternalScript(src) {
              var script = document.createElement('script');
              script.async = true;
              script.src = src;
              document.head.appendChild(script);
            }

            function loadAnalytics() {
              if (window.__analyticsRequested) return;
              window.__analyticsRequested = true;

              ${gaId ? `
                loadExternalScript('https://www.googletagmanager.com/gtag/js?id=${gaId}');
                window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
                gtag('js', new Date());
                gtag('config', '${gaId}');
              ` : ""}

              ${gtmId ? `
                dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
                loadExternalScript('https://www.googletagmanager.com/gtm.js?id=${gtmId}');
              ` : ""}

              ${facebookPixelId ? `
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
                (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${facebookPixelId}');
                fbq('track', 'PageView');
              ` : ""}

              ${piwikSiteId ? `
                window._paq = window._paq || [];
                _paq.push(['trackPageView']);
                _paq.push(['enableLinkTracking']);
                _paq.push(['setTrackerUrl', '${piwikUrl}ppms.php']);
                _paq.push(['setSiteId', '${piwikSiteId}']);
                loadExternalScript('${piwikUrl}ppms.js');
              ` : ""}

              ${snowplowAppId ? `
                ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
                p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)};
                p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
                n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,'script','https://${snowplowDomain}/sp-2.0.0-dm-0.1.min.js','snowplow'));
                window.dmsnowplow = window.snowplow;
                dmsnowplow('newTracker', 'cf', '${snowplowDomain}', { appId: '${snowplowAppId}' });
                dmsnowplow('trackPageView');
              ` : ""}
            }

            ['pointerdown', 'keydown', 'scroll'].forEach(function(eventName) {
              window.addEventListener(eventName, loadAnalytics, { once: true, passive: true });
            });
            window.setTimeout(loadAnalytics, 12000);

            function loadZocdocPlugin() {
              if (window.__zocdocPluginRequested) return;
              window.__zocdocPluginRequested = true;
              loadExternalScript('https://offsiteschedule.' + 'zocdoc.com/plugin/embed');
            }
            document.addEventListener('pointerover', function(event) {
              if (event.target && event.target.closest && event.target.closest('.zd-plugin')) loadZocdocPlugin();
            }, { passive: true });
            document.addEventListener('focusin', function(event) {
              if (event.target && event.target.closest && event.target.closest('.zd-plugin')) loadZocdocPlugin();
            });
            document.addEventListener('click', function(event) {
              if (event.target && event.target.closest && event.target.closest('.zd-plugin')) loadZocdocPlugin();
              var target = event.target && event.target.closest ? event.target.closest('[data-track]') : null;
              if (!target) return;
              loadAnalytics();
              var action = target.getAttribute('data-track');
              var payload = {
                event: 'website_interaction',
                interaction_action: action,
                interaction_label: target.textContent ? target.textContent.trim() : '',
                interaction_href: target.getAttribute('href') || ''
              };
              dataLayer.push(payload);
              if (window.gtag) window.gtag('event', action, payload);
              if (window.fbq && /appointment|phone|contact-submit/.test(action)) window.fbq('trackCustom', action);
            });
          `
        }}
      />
      {gtmId ? (
        <noscript>
          <iframe
            height="0"
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
            width="0"
          />
        </noscript>
      ) : null}
      {facebookPixelId ? (
        <noscript>
          <img
            alt=""
            height="1"
            src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
            style={{ display: "none" }}
            width="1"
          />
        </noscript>
      ) : null}
    </>
  );
}
