#!/usr/bin/env bash
# ship.sh — stage, commit, and push a scoped set of files, then report.
#
# Claude edits files directly in this repo but cannot run git: the cloud
# container has no GitHub credentials, and the VM where this folder is mounted
# has no network. So Claude rewrites the PENDING block below with exactly what
# it changed, and you run:
#
#     bash scripts/ship.sh
#
# Flags:
#     --dry-run   show what would happen, change nothing
#
# Why a scoped file list and not `git add -A`: this working tree carries
# long-lived unrelated churn (README, eslint config, the vinext deletions).
# Committing all of it by accident is the thing this script exists to prevent.

set -euo pipefail

# ─────────────────────────────────────────────────────────────────────────────
# PENDING — Claude rewrites everything between these markers.
# >>> PENDING START
SUBJECT="Add genetics, Elehear Beyond 2 Pro and squid news pages, update Signia MaX, relink"

BODY="Weekly news pages, Oct 8 2026.

New pages: /hearing-test-genetic-risk-hearing-loss/, /elehear-beyond-2-pro/ and /squid-hearing-loss-research/, each with original SVG art, an OG image, FAQ schema, a comparison table and AAW cross-links. Registered in crawledPages, contentDates and imageDimensions.

Signia MaX pages updated with verified facts: HearAdvisor MaX 7 score, listed tiers and prices (labeled as third-party listings), UK and US launch timeline, and a five AI flagships in seven weeks table. Stale no-test and no-price statements corrected across the Signia, EON and Reveal comparison pages.

Inbound links added from 23 existing pages (plus the Widex wording fix in 6 core pages). blogPosts.ts and corePages.ts were regenerated from the touched fragments only. tsc is clean.

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01QZN25ZUHMNdyv3DAW9k392"

# Leave BRANCH empty to commit straight to main. Set it to ship a branch + PR.
BRANCH="news-2026-10-08"

FILES=(
  "app/data/blog-entries/hearing-test-genetic-risk-hearing-loss.txt"
  "app/data/blog-entries/elehear-beyond-2-pro.txt"
  "app/data/blog-entries/squid-hearing-loss-research.txt"
  "app/data/blog-entries/signia-max-what-we-know.txt"
  "app/data/blog-entries/gene-therapy-may-be-the-answer-to-hearing-loss.txt"
  "app/data/blog-entries/how-to-read-audiogram-five-things.txt"
  "app/data/blog-entries/what-to-expect-at-a-hearing-test.txt"
  "app/data/blog-entries/what-are-my-hearing-loss-risk-factors.txt"
  "app/data/blog-entries/age-related-hearing-loss-understanding-managing-and-preventing-it.txt"
  "app/data/blog-entries/understanding-noise-induced-hearing-loss.txt"
  "app/data/blog-entries/the-science-of-hearing-loss-how-the-ear-and-brain-work-together.txt"
  "app/data/blog-entries/ear-buds-may-lead-to-hearing-loss-but-it-can-be-avoided.txt"
  "app/data/blog-entries/hearing-aids-cost-2026-otc-vs-prescription.txt"
  "app/data/blog-entries/legato-frames-ai-hearing-glasses.txt"
  "app/data/blog-entries/samsung-galaxy-buds-hearing-aid-feature.txt"
  "app/data/blog-entries/hearing-aids-vs-over-the-counter-devices-what-bay-area-patients-need-to-know.txt"
  "app/data/blog-entries/what-is-the-new-rule-about-hearing-aids.txt"
  "app/data/blog-entries/what-is-auracast-hearing-aids.txt"
  "app/data/blog-entries/what-is-dual-ai-in-hearing-aids.txt"
  "app/data/blog-entries/oticon-reveal-what-we-know.txt"
  "app/data/blog-entries/phonak-eon-what-we-know.txt"
  "_migration/core-entries/hearing-testing.txt"
  "_migration/core-entries/hearing-better__hearing-and-your-health.txt"
  "_migration/core-entries/products__hearing-aids.txt"
  "_migration/core-entries/hearing-aid-cost.txt"
  "_migration/core-entries/services__hearing-protection.txt"
  "_migration/core-entries/products__hearing-aids-by-brand__signia.txt"
  "_migration/core-entries/products__hearing-aids-by-brand__signia__signia-ix.txt"
  "_migration/core-entries/products__hearing-aids-by-brand__signia__signia-max.txt"
  "_migration/core-entries/products__hearing-aids-by-brand__signia__signia-max-cost.txt"
  "_migration/core-entries/products__hearing-aids-by-brand__signia__signia-max-vs-signia-ix.txt"
  "_migration/core-entries/products__hearing-aids-by-brand__signia__signia-max-vs-oticon-reveal.txt"
  "_migration/core-entries/products__hearing-aids-by-brand__phonak__phonak-eon-vs-signia-max.txt"
  "_migration/core-entries/products__hearing-aids-by-brand.txt"
  "_migration/core-entries/products__hearing-aids-by-brand__resound__resound-vivia.txt"
  "_migration/core-entries/products__hearing-aids-by-brand__phonak__phonak-eon.txt"
  "_migration/core-entries/products__hearing-aids-by-brand__oticon__oticon-reveal-vs-resound-sensia.txt"
  "_migration/core-entries/products__hearing-aids-by-brand__oticon__oticon-reveal-vs-widex-allure.txt"
  "_migration/core-entries/products__hearing-aids-by-brand__oticon__oticon-reveal.txt"
  "app/data/blogPosts.ts"
  "app/data/corePages.ts"
  "app/data/crawledPages.ts"
  "app/data/contentDates.ts"
  "app/data/imageDimensions.ts"
  "_migration/img-specs/hearing-test-genetic-risk-hearing-loss.json"
  "_migration/img-specs/elehear-beyond-2-pro.json"
  "public/assets/blog/hearing-test-genetic-risk-hearing-loss-1.svg"
  "public/assets/blog/hearing-test-genetic-risk-hearing-loss-2.svg"
  "public/assets/og/hearing-test-genetic-risk-hearing-loss.png"
  "public/assets/blog/elehear-beyond-2-pro-1.svg"
  "public/assets/blog/elehear-beyond-2-pro-2.svg"
  "public/assets/og/elehear-beyond-2-pro.png"
  "public/assets/blog/squid-hearing-loss-research-1.svg"
  "public/assets/blog/squid-hearing-loss-research-2.svg"
  "public/assets/og/squid-hearing-loss-research.png"
  "scripts/ship-news-2026-10-08.sh"
)
# <<< PENDING END
# ─────────────────────────────────────────────────────────────────────────────

DRY_RUN=0
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=1

cd "$(dirname "${BASH_SOURCE[0]}")/.."

# Claude edits this repo through a mount that cannot unlink files, so any git
# command it ran left a lock behind. Clearing them is safe from your Terminal.
rm -f .git/index.lock .git/HEAD.lock .git/refs/heads/*.lock 2>/dev/null || true
find .git/objects -name 'tmp_obj_*' -delete 2>/dev/null || true

red()  { printf '\033[31m%s\033[0m\n' "$*"; }
grn()  { printf '\033[32m%s\033[0m\n' "$*"; }
ylw()  { printf '\033[33m%s\033[0m\n' "$*"; }

if [[ -z "$SUBJECT" || ${#FILES[@]} -eq 0 ]]; then
  ylw "Nothing pending — the PENDING block is empty."
  echo "Ask Claude to fill it in with the files it changed."
  exit 0
fi

TARGET="${BRANCH:-main}"
branch=$(git rev-parse --abbrev-ref HEAD)
if [[ "$branch" != "$TARGET" ]]; then
  if [[ "$TARGET" == "main" ]]; then
    # Claude often creates a scratch branch and stages onto it without ever
    # committing. That branch is identical to main in history, so returning to
    # main is safe and keeps the staged work. A branch carrying real commits is
    # a different situation entirely — that is what this guard is for.
    ahead=$(git rev-list --count main.."$branch" 2>/dev/null || echo "?")
    if [[ "$ahead" == "0" ]]; then
      ylw "On scratch branch '$branch' with no commits of its own — returning to main."
      git checkout main
      branch=main
    else
      red "On branch '$branch', which is $ahead commit(s) ahead of main."
      red "Refusing to push. Merge or rebase it deliberately instead."
      exit 1
    fi
  else
    ylw "Switching from '$branch' to '$TARGET' (keeping your working changes)."
    git checkout -B "$TARGET"
  fi
fi

# A path in FILES may legitimately be absent from disk: a deletion or a rename's
# old name, which we still need to stage so the removal is committed. Absent
# from disk AND untracked in the index is the real error -- that is a typo.
missing=()
for f in "${FILES[@]}"; do
  [[ -e "$f" ]] && continue
  git ls-files --error-unmatch -- "$f" >/dev/null 2>&1 && continue
  missing+=("$f")
done
if [[ ${#missing[@]} -gt 0 ]]; then
  red "These paths exist neither on disk nor in git:"; printf '  %s\n' "${missing[@]}"
  exit 1
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

# Anything staged that is NOT in our list means something slipped in.
extra=$(comm -23 \
  <(git diff --staged --name-only | sort -u) \
  <(printf '%s\n' "${FILES[@]}" | sort -u))
if [[ -n "$extra" ]]; then
  red "Staged files outside the intended set — stopping:"
  printf '  %s\n' $extra
  echo "Run: git restore --staged <file>   then re-run."
  exit 1
fi

if [[ $DRY_RUN -eq 1 ]]; then
  ylw "Dry run — unstaging and stopping."
  git restore --staged -- "${FILES[@]}"
  exit 0
fi

if [[ -n "$BODY" ]]; then
  git commit -m "$SUBJECT" -m "$BODY"
else
  git commit -m "$SUBJECT"
fi

git push -u origin "$TARGET"

sha=$(git rev-parse --short HEAD)
grn "Pushed $sha to origin/$TARGET."
if [[ "$TARGET" == "main" ]]; then
  echo "Vercel builds from main — usually live in 90–120s."
  echo "https://github.com/igor-savin/California-Hearing-Center/commit/$sha"
else
  echo "Vercel will build a preview for this branch. Open the PR here:"
  echo "https://github.com/igor-savin/California-Hearing-Center/compare/main...$TARGET?expand=1"
fi

# Clear the pending block so a stray re-run can't double-commit.
python3 - "$0" <<'PY'
import re, sys
p = sys.argv[1]
s = open(p).read()
s = re.sub(r'(# >>> PENDING START\n).*?(# <<< PENDING END)',
           r'\1SUBJECT=""\n\nBODY=""\n\n# Leave BRANCH empty to commit straight to main. Set it to ship a branch + PR.\nBRANCH=""\n\nFILES=()\n\2', s, flags=re.S)
open(p, 'w').write(s)
PY
