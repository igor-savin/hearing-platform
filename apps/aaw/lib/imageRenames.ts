// Image renames: old URL -> new URL. See IMAGE-NAMING.md for the convention.
//
// Every rename here is served as a 301 from next.config.ts, so Google Images,
// external hot-links and any cached page keep resolving. Add a line here (and
// do the file move) whenever a published image is renamed. Never delete a line:
// the redirect is what carries the old URL's ranking to the new one.
//
// next.config.ts imports this file, so keep it free of imports.

export const imageRenames: Record<string, string> = {
  "/assets/blog-conversation.png": "/assets/couple-conversation-hearing-loss-at-home.png",
  "/assets/blog-ear-care.png": "/assets/ear-care-drying-ear-with-towel.png",
  "/assets/blog-headphones.png": "/assets/headphones-listening-at-home.png",
  "/assets/blog-hearing-aid-fit.png": "/assets/hearing-aid-fit-adjusting-behind-the-ear.png",
  "/assets/blog-hearing-care-options.png": "/assets/hearing-care-options-reviewing-paperwork.png",
  "/assets/duda/0255mfox9-2021-edit.jpg": "/assets/duda/dr-caitlin-dold-audiologist-westchester.jpg",
  "/assets/duda/0422mfox9-2021-edit.jpg": "/assets/duda/dr-kira-savin-audiologist-westchester.jpg",
  "/assets/duda/0643mfox9-2021-edit.jpg": "/assets/duda/alicia-rivera-patient-care-coordinator-westchester.jpg",
  "/assets/duda/adobestock-232317406.jpg": "/assets/duda/hearing-aid-fitting-ear-exam-westchester.jpg",
  "/assets/duda/audiologoy-associates-of-west-chester-logo.png": "/assets/duda/audiology-associates-of-westchester-logo.png",
  "/assets/duda/hazel-26-edit.jpg": "/assets/duda/hazel-icaza-patient-care-coordinator-westchester.jpg",
  "/assets/duda/hearst-widex-photo.png": "/assets/duda/hearing-aid-repair-westchester.png",
  "/assets/duda/jen-ratner-img.jpg": "/assets/duda/dr-jennifer-ratner-audiologist-westchester.jpg",
  "/assets/duda/jennifer-tarlton-img.jpg": "/assets/duda/jennifer-tarlton-practice-administrator-westchester.jpg",
  "/assets/duda/untitled-3.jpg": "/assets/duda/dr-jenna-elias-audiologist-westchester.jpg",
  "/assets/duda/w1.jpg": "/assets/duda/hearing-protection-earmuffs-westchester.jpg",
  "/assets/duda/w2.jpg": "/assets/duda/hearing-test-audiologist-westchester.jpg",
  "/assets/duda/w4.jpg": "/assets/duda/tinnitus-ringing-in-ears-westchester.jpg",
  "/assets/home-hero.jpg": "/assets/hearing-aids-audiologist-westchester-home-hero.jpg",
  "/assets/interactive-ear-hero.png": "/assets/ear-anatomy-hearing-aid-sound-waves.png",
  "/assets/team/francheska-cotto.jpg": "/assets/team/francheska-cotto-patient-care-coordinator-westchester.jpg",
  "/assets/team/julia-rivera.jpg": "/assets/team/dr-julia-rivera-audiologist-westchester.jpg",
  "/assets/team/leannmarie-senat.jpg": "/assets/team/dr-leannmarie-senat-audiologist-westchester.jpg",
};
