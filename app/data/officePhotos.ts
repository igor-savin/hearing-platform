// Real photographs of the San Mateo office, in the order a patient meets them.
//
// Lives in its own module because two very different consumers need the same
// list and neither should import the other: the renderer builds the arrival
// walkthrough from it, and app/sitemap.ts lists the files as image entries so
// Google can discover them. Importing the site component into the sitemap
// route to reach this array would pull the whole page graph into a metadata
// route for the sake of five strings.
//
// Cropped to a fixed 3:2 from portrait phone originals, so the walkthrough
// grid stays level -- keep any replacement at that ratio.
//
// Every caption describes only what is visible in its photograph. Nothing here
// asserts a fact the picture does not carry: not that the lot is free, not that
// it is reserved for patients, not which door the ramp reaches. Confirm those
// with the practice before writing them down.
export type OfficePhoto = { src: string; step: string; alt: string; caption: string };

export const sanMateoArrival: OfficePhoto[] = [
  {
    src: "/assets/office/san-mateo__01-sign.jpg",
    step: "Look for the sign",
    alt: "A red-and-white California Hearing Center sign reading 88, standing on a lawn beside the sidewalk on N. San Mateo Drive.",
    caption: "Our sign stands on the lawn right at the sidewalk, so you can pick it out from the road.",
  },
  {
    src: "/assets/office/san-mateo__02-driveway.jpg",
    step: "Turn up the driveway",
    alt: "A driveway running alongside the office building, with a banner on the fence reading California Hearing Center Parking and an arrow.",
    caption: "A driveway runs up the side of the building. A banner with our logo points the way in.",
  },
  {
    src: "/assets/office/san-mateo__03-parking.jpg",
    step: "Park at the top",
    alt: "An open parking lot behind the office building with marked spaces and a few parked cars.",
    caption: "The lot sits behind the building, off the street and out of the downtown traffic.",
  },
  {
    src: "/assets/office/san-mateo__04-ramp.jpg",
    step: "A step-free way in",
    alt: "A concrete ramp with a metal handrail running from the parking lot along the side of the office building.",
    caption: "A ramp with a handrail runs from the lot along the side of the building. If steps are difficult, tell us when you book and we will meet you at whichever door is easiest.",
  },
  {
    src: "/assets/office/san-mateo__05-entrance.jpg",
    step: "Or come in from the front",
    alt: "The front of the office building, number 88, with a brick path leading to a short flight of steps and a handrail.",
    caption: "From the sidewalk, a brick path leads to the front door up a short flight of steps with a handrail.",
  },
];

/** Photographs that belong to a given page, for the sitemap's image entries. */
export const officePhotosByPath: Record<string, string[]> = {
  "/contact/san-mateo/": sanMateoArrival.map((p) => p.src),
};
