import Script from "next/script";

/**
 * One loader for every third-party tag, shared by both practice sites.
 *
 * Rule: analytics tags start on the first touch, key press or scroll, or after
 * 12 seconds. A lab speed test never touches the page, and real visitors are
 * not slowed while they read.
 *
 * Call tracking (WhatConverts) is the exception: it starts after the page load
 * event. It swaps the visible phone number to its tracking line, and a visitor
 * who taps "call" at once must not dial the untracked number.
 *
 * Conversion events pushed to dataLayer before GTM starts are queued, so
 * nothing is lost by starting late.
 *
 * A tag is on when its id is set. A site turns a tag off by leaving it out.
 */
export type TagIds = {
  gtm?: string;
  ga4?: string;
  whatconverts?: string;
  datafast?: string;
  datafastDomain?: string;
  visibilitykit?: string;
  facebookPixel?: string;
  piwikUrl?: string;
  piwikSiteId?: string;
  snowplowDomain?: string;
  snowplowAppId?: string;
};

export type TagOptions = {
  /** Start the tags when a visitor clicks an element with data-track, and push that click to dataLayer. */
  trackClicks?: boolean;
  /** Load the Zocdoc booking plugin when a visitor reaches for a .zd-plugin element. */
  zocdoc?: boolean;
};

export const TAG_IDLE_TIMEOUT_MS = 12000;

export function TagLoader({ ids, options = {} }: { ids: TagIds; options?: TagOptions }) {
  const cfg = JSON.stringify({
    gtm: ids.gtm || "",
    ga4: ids.ga4 || "",
    wc: ids.whatconverts || "",
    df: ids.datafast || "",
    dfDomain: ids.datafastDomain || "",
    vk: ids.visibilitykit || "",
    fb: ids.facebookPixel || "",
    pwUrl: ids.piwikUrl || "",
    pwId: ids.piwikSiteId || "",
    spDomain: ids.snowplowDomain || "",
    spId: ids.snowplowAppId || "",
    clicks: Boolean(options.trackClicks),
    zd: Boolean(options.zocdoc),
    wait: TAG_IDLE_TIMEOUT_MS,
  }).replace(/</g, "\\u003c");

  const code = `(function(){
var C=${cfg};
window.dataLayer=window.dataLayer||[];
function add(src,attrs){var s=document.createElement('script');s.async=true;s.src=src;if(attrs){for(var k in attrs){s.setAttribute(k,attrs[k]);}}document.head.appendChild(s);}
if(C.wc){
  // WhatConverts reads $wc_leads when it loads: it records the landing URL and
  // referrer. Take the snapshot now, at page load, not when the tag starts.
  window.$wc_load=function(a){return JSON.parse(JSON.stringify(a));};
  window.$wc_leads=window.$wc_leads||{doc:{url:window.$wc_load(document.URL),ref:window.$wc_load(document.referrer),search:window.$wc_load(location.search),hash:window.$wc_load(location.hash)}};
  var startCalls=function(){setTimeout(function(){add('https://s.ksrndkehqnwntyxlhgto.com/'+C.wc+'.js',{id:'whatconverts-tracking-script'});},0);};
  if(document.readyState==='complete'){startCalls();}else{window.addEventListener('load',startCalls,{once:true});}
}
var started=false;
function start(){
  if(started)return;started=true;
  if(C.gtm){window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});add('https://www.googletagmanager.com/gtm.js?id='+C.gtm);}
  if(C.ga4){window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};window.gtag('js',new Date());window.gtag('config',C.ga4);add('https://www.googletagmanager.com/gtag/js?id='+C.ga4);}
  if(C.df){add('https://datafa.st/js/script.js',{id:'datafast-tracking','data-website-id':C.df,'data-domain':C.dfDomain,'data-disable-payments':'true'});}
  if(C.vk){add('https://cdn.visibilitykit.ai/t/'+C.vk+'/vk.js',{id:'vk-core'});}
  if(C.fb){
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init',C.fb);window.fbq('track','PageView');
  }
  if(C.pwId){
    window._paq=window._paq||[];
    window._paq.push(['trackPageView']);window._paq.push(['enableLinkTracking']);
    window._paq.push(['setTrackerUrl',C.pwUrl+'ppms.php']);window._paq.push(['setSiteId',C.pwId]);
    add(C.pwUrl+'ppms.js');
  }
  if(C.spId){
    (function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,'script','https://'+C.spDomain+'/sp-2.0.0-dm-0.1.min.js','snowplow'));
    window.dmsnowplow=window.snowplow;
    window.dmsnowplow('newTracker','cf',C.spDomain,{appId:C.spId});
    window.dmsnowplow('trackPageView');
  }
}
['pointerdown','keydown','scroll','touchstart'].forEach(function(n){window.addEventListener(n,start,{once:true,passive:true});});
window.setTimeout(start,C.wait);
if(C.zd){
  var zdDone=false;
  var zdLoad=function(){if(zdDone)return;zdDone=true;add('https://offsiteschedule.'+'zocdoc.com/plugin/embed');};
  var inZd=function(e){return e.target&&e.target.closest&&e.target.closest('.zd-plugin');};
  document.addEventListener('pointerover',function(e){if(inZd(e))zdLoad();},{passive:true});
  document.addEventListener('focusin',function(e){if(inZd(e))zdLoad();});
  document.addEventListener('click',function(e){if(inZd(e))zdLoad();});
}
if(C.clicks){
  document.addEventListener('click',function(e){
    var t=e.target&&e.target.closest?e.target.closest('[data-track]'):null;
    if(!t)return;
    start();
    var action=t.getAttribute('data-track');
    var payload={event:'website_interaction',interaction_action:action,interaction_label:t.textContent?t.textContent.trim():'',interaction_href:t.getAttribute('href')||''};
    window.dataLayer.push(payload);
    if(window.gtag)window.gtag('event',action,payload);
    if(window.fbq&&/appointment|phone|contact-submit/.test(action))window.fbq('trackCustom',action);
  });
}
})();`;

  return (
    <Script id="tag-loader" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: code }} />
  );
}

/** The no-JavaScript fallbacks for GTM and the Facebook pixel. */
export function TagNoscripts({ ids }: { ids: TagIds }) {
  return (
    <>
      {ids.gtm ? (
        <noscript>
          <iframe
            height="0"
            src={`https://www.googletagmanager.com/ns.html?id=${ids.gtm}`}
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
            width="0"
          />
        </noscript>
      ) : null}
      {ids.facebookPixel ? (
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            height="1"
            src={`https://www.facebook.com/tr?id=${ids.facebookPixel}&ev=PageView&noscript=1`}
            style={{ display: "none" }}
            width="1"
          />
        </noscript>
      ) : null}
    </>
  );
}
