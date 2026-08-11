import { NotFoundContent } from "@/components/NotFoundContent";

// A not-found boundary co-located with the catch-all route.
//
// NOTE: this does NOT currently change what the server sends. Verified against
// the deployed build on 2026-08-11: because notFound() fires from a
// dynamically-rendered catch-all (dynamicParams must stay true for
// Firestore-scheduled posts), Next 16 serves its own layout-less document --
// <html id="__next_error__"> with an empty suspense placeholder -- and streams
// this content as RSC payload for the client to render. Header, footer and the
// links below are absent from the server HTML and appear only after hydration.
//
// The status code (404) and robots (noindex) are correct, and JS-rendering
// crawlers do see the content, so this is a crawl-efficiency and
// no-JS-user issue rather than an indexing one. Kept because it is the
// correct boundary by the framework's own contract, and it starts working
// if that behaviour changes. A real fix needs a middleware rewrite to a
// statically prerendered 404 route, which is only safe once CMS article
// paths can be resolved without a per-request Firestore lookup.
export default function CatchAllNotFound() {
  return <NotFoundContent />;
}
