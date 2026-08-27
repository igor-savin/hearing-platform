// Homepage versions.
//
// The homepage is the one page worth trying more than one way, and the one page
// where an undo is hardest six months later, when nobody remembers what the
// previous one actually looked like. So: every version stays in the codebase as
// a named, self-contained component, and the live one is chosen by a single
// constant in this file.
//
// This is deliberately NOT an A/B test. There is no traffic splitting, no
// cookie, no analytics dependency, and every visitor sees the same homepage.
// Splitting traffic on a practice this size would take months to reach a
// result worth acting on, and it doubles what has to be kept working. This is
// simply the ability to keep several homepages and choose which one is live.
//
//   To swap the live homepage   change activeHomepageVariantId below, push.
//   To look at one first        /homepage-preview/<id>
//                               (noindex, disallowed in robots.txt, absent
//                               from the sitemap, so it cannot be found or
//                               indexed by anyone who is not sent the link)
//   To add a version            write the component in PageRenderer.tsx,
//                               register it here, preview it, then switch.
//
// Retiring a version is a deliberate act: delete its entry here AND its
// component. Leaving it registered costs nothing but a few kilobytes, and it
// is what makes "put the old one back" a one-line change.

export type HomepageVariantId = "aug-2026-original" | "proof-first";

export type HomepageVariant = {
  id: HomepageVariantId;
  /** Shown in the preview index. Name it for what it does, not when it was made. */
  label: string;
  summary: string;
  /** Why this version exists, and what would make it worth retiring. */
  notes: string;
};

export const homepageVariants: HomepageVariant[] = [
  {
    id: "aug-2026-original",
    label: "Original",
    summary:
      "The homepage as it stood in August 2026: interactive ear hero, quick-action band, Your Trusted Audiologist, three link cards, four hearing-aid benefits, five service tiles, Live life to the fullest, Why Choose Us and the contact form.",
    notes:
      "The baseline. Captured before the site review's Wave 2 work started, so there is always something to put back. Do not edit this one to try an idea -- copy it to a new version instead, which is the whole point of the registry."
  },
  {
    id: "proof-first",
    label: "Proof first",
    summary:
      "The same page with three changes: a row of three checkable facts under the hero (486+ Google reviews, six Doctors of Audiology, Dr. Cliff Approved Provider), three patient reviews above the Why Choose band, and the eight generic reasons replaced by the four specific ones from /why-choose-us -- real-ear measurement, understanding your own audiogram, Doctors of Audiology and the referral, a full diagnostic battery rather than a screening.",
    notes:
      "Built from the site review's finding that the practice's strongest proof and its only real differentiation both sit on pages nobody navigates to, while the homepage runs weaker versions of each. Preview it beside Original before deciding; the only way to know which reads better to a patient is to look at them one after the other."
  }
];

export const activeHomepageVariantId: HomepageVariantId = "aug-2026-original";

export function homepageVariantFor(id: string): HomepageVariant | undefined {
  return homepageVariants.find((variant) => variant.id === id);
}

export function homepagePreviewPath(id: HomepageVariantId) {
  return `/homepage-preview/${id}`;
}
