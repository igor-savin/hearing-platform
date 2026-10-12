#!/usr/bin/env bash
# ship-screener-2.sh — second ship of the screener (same steps as ship.sh).
# ship.sh — stage, commit, and push a scoped set of files, then report.
#
# Claude edits files directly in this repo but cannot run git: the cloud
# container has no GitHub credentials, and the VM where this folder is mounted
# has no network. So Claude rewrites the PENDING block below with exactly what
# it changed, and you run:
#
#     bash scripts/ship-screener-2.sh
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
SUBJECT="Screener: brand styling, funnel counts, ear-difference wording fix"

BODY="Three review rounds run against the live page and a local copy.

Brand: site logo, pill buttons in the site gradient, Arial, cream page, questions
section under the card, skip link. The quiet-room step now sits on the intro card.
Result buttons come before the support-level box. Share button added.

Analytics: anonymous first-party funnel counts (no trackers, no personal data) in a
new screener_events table, plus visit source (referrer / UTM) saved with each lead
and shown in the staff alert. /api/screener/stats/ returns counts, protected by
SCREENER_STATS_KEY.

Fixes found by running the flow: a Good score with an ear difference said 'check
again in a year' next to an urgent flag. It now says 'One ear needs a closer look'
in the page, PDF and email. Audio start no longer hangs on phones that leave the
audio engine paused. Focus moves to the new heading at each step. The screen stays
awake during the test."

BRANCH=""

FILES=(
  "app/free-online-hearing-test/page.tsx"
  "app/free-online-hearing-test/ScreenerApp.tsx"
  "app/free-online-hearing-test/screener.css"
  "app/free-online-hearing-test/track.ts"
  "app/api/screener/route.ts"
  "app/api/screener/event/route.ts"
  "app/api/screener/stats/route.ts"
  "app/lib/screener/audio.ts"
  "app/lib/screener/copy.ts"
  "app/lib/screener/emails.ts"
  "app/lib/screener/pdf.ts"
  "app/lib/screener/store.ts"
  ".env.example"
  "scripts/ship-screener-2.sh"
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

