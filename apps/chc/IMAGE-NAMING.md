# Image naming convention

Applies to every image on calhearing.com and to every social card we make for
California Hearing Center. Set 6 Oct 2026.

## The rule

The file name is the phrase we want the image to rank for.

- Lowercase. Hyphens between words. No underscores, spaces, dates or camera names.
- Three to seven words. Under about 60 characters.
- Pattern: `{what-it-shows-or-topic}-{city}.{ext}`
- Local pages get the city: `hearing-aid-fitting-san-mateo.webp`
- Offices: `california-hearing-center-san-mateo-office-entrance.jpg`
- People: `dr-first-last-audiologist-san-mateo.jpg`
- Responsive sizes keep the same stem and add a width: `...-hero-900.avif`
- No version tags (`-v2`, `-final`, `-copy`) and no `__` separators.

Good: `tinnitus-sleep-strategies.jpg`. Bad: `tinnitus__sleep-strategies.jpg`, `IMG_6425.jpg`, `w2.jpg`.

## Where the same phrase must also appear

1. File name (above).
2. Alt text. Describe the image in plain words. Use the phrase once, naturally.
3. The page. The phrase sits in the heading or the text next to the image.
4. Social cards only: the phrase is readable text on the card itself, and it is
   the first words of the post caption.

## Social cards (GBP, Facebook, Instagram, Threads)

1. Name the card file after the phrase. Example: `hearing-test-san-mateo.png`.
2. Put the phrase as large readable text on the card.
3. Start the caption with the phrase.
4. Link the post to the matching page on calhearing.com.
5. Links from social posts are mostly nofollow. Treat them as a small extra signal.
   Do steps 1 to 4 every time. Do not spend time on cross-posting to extra blogs.

## Renaming an image that is already live

1. Move the file. Update every reference (search the whole repo for the old path).
2. Add `"/old/path.ext": "/new/path.ext"` to `app/data/imageRenames.ts`.
   `next.config.ts` turns each line into a 301. Never delete a line.
3. Run `node _migration/genImageDimensions.mjs`.
4. Run `node_modules/.bin/tsc --noEmit`.

## Do not rename

- `public/wp-content/uploads/**`. These old WordPress URLs keep Google Images
  traffic alive. They are frozen on purpose.
- Logos, favicons, icons, `og.jpg`.
- Decorative tiles with no search value (`doctor.jpg` is a "30" graphic,
  `service-2.png` and `service-3.png` are icons).

## Known gap

`_migration/harvest*.mjs` now write hyphen names. They do not add a city. Rename new
local-page images by hand after harvesting.
