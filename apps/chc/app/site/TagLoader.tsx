import Script from "next/script";

/**
 * One loader for every third-party tag. Kept byte-for-byte the same shape as
 * the sister site's loader so the two sites time their tags the same way.
 *
 * Rule: analytics tags (GTM, GA4, DataFast, VisibilityKit) start on the first
 * touch, key press or scroll, or after 12 seconds. A lab speed test never
 * touches the page, and real visitors are not slowed while they read.
 *
 * Call tracking (WhatConverts) is the exception: it starts after the page load
 * event. It swaps the visible phone number to its tracking line, and a visitor
 * who taps "call" at once must not dial the untracked number.
 *
 * Conversion events pushed to dataLayer before GTM starts are queued, so
 * nothing is lost by starting late.
 */
export type TagIds = {
  gtm?: string;
  ga4?: string;
  whatconverts?: string;
  datafast?: string;
  datafastDomain?: string;
  visibilitykit?: string;
};

export const TAG_IDLE_TIMEOUT_MS = 12000;

export function TagLoader({ ids }: { ids: TagIds }) {
  const cfg = JSON.stringify({
    gtm: ids.gtm || "",
    ga4: ids.ga4 || "",
    wc: ids.whatconverts || "",
    df: ids.datafast || "",
    dfDomain: ids.datafastDomain || "",
    vk: ids.visibilitykit || "",
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
}
['pointerdown','keydown','scroll','touchstart'].forEach(function(n){window.addEventListener(n,start,{once:true,passive:true});});
window.setTimeout(start,C.wait);
})();`;

  return (
    <Script id="tag-loader" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: code }} />
  );
}
