#!/usr/bin/env bash
# ship.sh — stage, commit, and push a scoped set of files, then report.
#
# Ported from the California-Hearing-Center repo, 24 Aug 2026.
#
# Claude edits files here but cannot run git: the cloud container has no GitHub
# credentials, and the VM where this folder is mounted has no network. It also
# cannot unlink, so any git command it ran would leave a lock behind. So Claude
# fills in the PENDING block below and you run:
#
#     bash scripts/ship.sh
#
# Flags:
#     --dry-run   show what would happen, change nothing
#
# Why a scoped file list and never `git add -A`: this working tree carries a lot
# of unrelated work in progress (the contact route, globals.css, Header,
# ContactForm, ZocdocButton and more). Sweeping that into a content commit by
# accident is exactly what this script exists to prevent.
#
# Unlike the CHC copy, this one commits to WHATEVER BRANCH YOU ARE ON. This repo
# lives on feature branches by default and being on a non-main branch is normal
# here, not a mistake.

set -euo pipefail

# ─────────────────────────────────────────────────────────────────────────────
# PENDING — Claude rewrites everything between these markers.
# >>> PENDING START
SUBJECT="Fix the office map links and stop cropping product images"

BODY="Two bugs Igor spotted, both in PageRenderer.

1. GET DIRECTIONS SENT SOMERS PATIENTS NEXT DOOR.
LegacyLocationSectionView built the directions link from a plain address string
and never consulted the office's directionsUrl. A bare address query resolves
to Google's own ADDRESS pin rather than to our Business Profile marker, and at
325 NY-100 that pin sits in the plaza next door. The embedded map on the same
pages was querying the same string, so the pin inside the map was wrong too.

The correct link was already in the repo. lib/site.ts has a verified
directionsUrl on both offices - Somers carries cid=16978045113785245584, which
decodes to exactly the business ID the wrong link was missing. Nothing needed
looking up; the page simply was not using it.

Sections that show one of our offices now carry officePath, and the component
resolves that to the office record: the button uses the verified place link and
the embed is queried by business name rather than street number. Harrison had
the identical defect on three sections and is fixed with it. The three sections
about towns rather than offices - Rye, Greenwich, Mt. Kisco - still use a plain
query, which is correct for a town.

Verified in the build: every Get Directions button on both office pages now
points at a verified business URL, and no office section emits an address query.

2. PRODUCT IMAGES WERE BEING BLOWN UP AND CROPPED.
Manufacturer device shots are square cut-outs on white, 540 to 640 pixels a
side. Every article image was rendered with object-cover into a 16:9 hero or a
16:10 card, which upscaled them about 1.9 times and sliced the top and bottom
off the device. That is why the Signia MaX and Phonak EON articles opened with
a giant blurry fragment of a hearing aid and why the related-article thumbnails
looked oversized.

Images under assets/brands now render object-contain on white. Photographs are
shot to be cropped and keep object-cover, so nothing else moves. Four render
sites were affected, not the three that were obvious: the article hero, the
related-article strip, the blog index cards, and an inline body figure that only
turned up when I checked the built HTML rather than the source.

Verified in the build: 2,432 brand-image renders across the site, 0 still
cropping. A sample photograph still renders object-cover.

calhearing.com does not share this bug - it renders the same assets at their
natural size with no crop - so nothing to do there.

Also committing scripts/ship.sh for the first time. It carries two fixes of its
own: --no-pager, so the diffstat does not open in less and look like a hang, and
an existence guard that now accepts a path absent from disk but still tracked in
git, i.e. a deletion or a rename's old name. Before that, any commit removing a
file failed the guard after the script had already switched branches."

FILES=(
  "components/PageRenderer.tsx"
  "scripts/ship.sh"
)

REFRESH_DATES=1
# <<< PENDING END
# ─────────────────────────────────────────────────────────────────────────────

DRY_RUN=0
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=1

cd "$(dirname "${BASH_SOURCE[0]}")/.."

# Claude reaches this repo through a mount that cannot unlink files. Clearing
# any lock it left behind is safe from your own Terminal.
rm -f .git/index.lock .git/HEAD.lock .git/refs/heads/*.lock 2>/dev/null || true
find .git/objects -name 'tmp_obj_*' -delete 2>/dev/null || true

red()  { printf '\033[31m%s\033[0m\n' "$*"; }
grn()  { printf '\033[32m%s\033[0m\n' "$*"; }
ylw()  { printf '\033[33m%s\033[0m\n' "$*"; }

if [[ -z "$SUBJECT" || ${#FILES[@]} -eq 0 ]]; then
  ylw "Nothing pending — the PENDING block is empty."
  exit 0
fi

branch=$(git rev-parse --abbrev-ref HEAD)
echo "── Branch ───────────────────────────────────────────"
echo "  $branch"
echo

missing=()
for f in "${FILES[@]}"; do [[ -e "$f" ]] || missing+=("$f"); done
if [[ ${#missing[@]} -gt 0 ]]; then
  red "These paths do not exist:"; printf '  %s\n' "${missing[@]}"; exit 1
fi

echo "── Files ────────────────────────────────────────────"
printf '  %s\n' "${FILES[@]}"
echo
echo "── Commit ───────────────────────────────────────────"
echo "  $SUBJECT"
echo

git add -- "${FILES[@]}"

echo "── Staged diff ──────────────────────────────────────"
git --no-pager diff --staged --stat -- "${FILES[@]}"
echo

extra=$(comm -23 \
  <(git diff --staged --name-only | sort -u) \
  <(printf '%s\n' "${FILES[@]}" | sort -u))
if [[ -n "$extra" ]]; then
  red "Staged files outside the intended set — stopping:"
  printf '  %s\n' $extra
  echo "This tree has a lot of unrelated work in progress; that is what this check is for."
  echo "Run: git restore --staged <file>   then re-run."
  exit 1
fi

if [[ $DRY_RUN -eq 1 ]]; then
  ylw "Dry run — unstaging and stopping."
  git restore --staged -- "${FILES[@]}"
  exit 0
fi

git commit -m "$SUBJECT" -m "$BODY"

if [[ "${REFRESH_DATES:-0}" == "1" ]]; then
  echo
  echo "── Refreshing generated content dates ───────────────"
  npm run dates
  if ! git diff --quiet -- lib/contentDates.ts; then
    git add -- lib/contentDates.ts
    git commit -m "Refresh generated content dates"
    grn "  lib/contentDates.ts updated and committed."
  else
    echo "  no change."
  fi
fi

git push -u origin "$branch"

sha=$(git rev-parse --short HEAD)
grn "Pushed $sha to origin/$branch."
echo "https://github.com/igor-savin/Audiology-Associates/commit/$sha"
if [[ "$branch" != "main" ]]; then
  echo
  echo "This is a feature branch — it will not deploy to production until merged."
  echo "https://github.com/igor-savin/Audiology-Associates/compare/main...$branch?expand=1"
fi

python3 - "$0" <<'PY'
import re, sys
p = sys.argv[1]
s = open(p).read()
s = re.sub(r'(# >>> PENDING START\n).*?(# <<< PENDING END)',
           r'\1SUBJECT=""\n\nBODY=""\n\nFILES=()\n\nREFRESH_DATES=0\n\2', s, flags=re.S)
open(p, 'w').write(s)
PY
