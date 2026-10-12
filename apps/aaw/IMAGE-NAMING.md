# Image naming convention

Applies to every image on audiologyassociates.org and to every social card we make for
Audiology Associates of Westchester (Harrison and Somers). Set 6 Oct 2026.

## The rule

The file name is the phrase we want the image to rank for.

- Lowercase. Hyphens between words. No underscores, spaces, dates or camera names.
- Three to seven words. Under about 60 characters.
- Pattern: `{what-it-shows-or-topic}-{city}.{ext}`
- Local pages get the city: `hearing-aid-fitting-westchester.webp`
- Offices: `audiology-associates-of-westchester-somers-office-entrance.jpg` (use harrison or somers)
- People: `dr-first-last-audiologist-westchester.jpg`
- Responsive sizes keep the same stem and add a width: `...-hero-900.avif`
- No version tags (`-v2`, `-final`, `-copy`) and no `__` separators.

Good: `hearing-test-audiologist-westchester.jpg`. Bad: `IMG_6425.jpg`, `w2.jpg`, `untitled-3.jpg`.

## Where the same phrase must also appear

1. File name (above).
2. Alt text. Describe the image in plain words. Use the phrase once, naturally.
3. The page. The phrase sits in the heading or the text next to the image.
4. Social cards only: the phrase is readable text on the card itself, and it is
   the first words of the post caption.

## Social cards (GBP, Facebook, Instagram, Threads)

1. Name the card file after the phrase. Example: `hearing-test-westchester.png`.
2. Put the phrase as large readable text on the card.
3. Start the caption with the phrase.
4. Link the post to the matching page on audiologyassociates.org.
5. Links from social posts are mostly nofollow. Treat them as a small extra signal.
   Do steps 1 to 4 every time. Do not spend time on cross-posting to extra blogs.

## Renaming an image that is already live

1. Move the file. Update every reference (search the whole repo for the old path).
2. Add `"/old/path.ext": "/new/path.ext"` to `lib/imageRenames.ts`.
   `next.config.ts` turns each line into a 301. Never delete a line.
3. Run `node_modules/.bin/tsc --noEmit`.

## Do not rename

- Logos, favicons, icons, brand logos in `public/assets/brands` and `public/assets/duda/*logo*`.
- Social share images already posted (`public/assets/og/**`).
- Press images already linked from outside sites.

## Known gap

`public/assets/blog-seed/photo-v2/*-photo-v2.webp` keep the `-photo-v2` tag. The file
names already hold the article slug, so the gain from stripping the tag is small.
New images must not use version tags.
