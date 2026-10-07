#!/usr/bin/env bash
# ship-hearing-plan.sh — one-time ship of the Hearing Plan (same steps as ship.sh).
# ship.sh — stage, commit, and push a scoped set of files, then report.
#
# Claude edits files directly in this repo but cannot run git: the cloud
# container has no GitHub credentials, and the VM where this folder is mounted
# has no network. So Claude rewrites the PENDING block below with exactly what
# it changed, and you run:
#
#     bash scripts/ship-hearing-plan.sh
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
SUBJECT="Add the open Hearing Plan at /hearing-plan/ (draft, noindex)"

BODY="A free buyer's guide that needs no test and no sign-up: warning signs that
mean a doctor first, what a fair first visit includes, what hearing aids cost,
a printable goals sheet, Quote Check, ten questions to ask any provider, and a
share-with-family message. Everything runs in the browser. Nothing typed or
ticked leaves the device; the only analytics call names the tool used.

Draft mode: the page is noindex and left out of the sitemap, and it shows a
draft notice, until an audiologist signs off. Then set REVIEWED_BY and REVIEWED_ON
in app/data/hearingPlan.ts and NEXT_PUBLIC_HEARING_PLAN_REVIEWED=true in Vercel.
Words live in app/data/hearingPlan.ts; claims for review carry review: true."

BRANCH="hearing-plan"

FILES=(
  "app/data/hearingPlan.ts"
  "app/site/HearingPlanPage.tsx"
  "app/site/HearingPlanTools.tsx"
  "app/site/conversions.ts"
  "app/site/CaliforniaHearingSite.tsx"
  "app/[...slug]/page.tsx"
  "app/data/crawledPages.ts"
  "app/data/contentDates.ts"
  "app/sitemap.ts"
  "scripts/ship-hearing-plan.sh"
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

