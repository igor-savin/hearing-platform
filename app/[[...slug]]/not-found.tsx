import { NotFoundContent } from "@/components/NotFoundContent";

// A not-found boundary co-located with the catch-all route.
//
// Without this, notFound() from app/[[...slug]]/page.tsx resolves to the root
// boundary, and Next serves its global error document -- <html
// id="__next_error__"> with no <h1> and no links, outside the root layout. The
// real content only appeared after client hydration. Resolving the boundary
// inside this segment keeps the 404 within the layout and in the server HTML.
export default function CatchAllNotFound() {
  return <NotFoundContent />;
}
