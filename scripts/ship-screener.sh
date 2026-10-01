#!/usr/bin/env bash
# ship-screener.sh — one-time ship of the screener (same steps as ship.sh).
# ship.sh — stage, commit, and push a scoped set of files, then report.
#
# Claude edits files directly in this repo but cannot run git: the cloud
# container has no GitHub credentials, and the VM where this folder is mounted
# has no network. So Claude rewrites the PENDING block below with exactly what
# it changed, and you run:
#
#     bash scripts/ship-screener.sh
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
SUBJECT="Add the free online hearing screener (preview, noindex)"

BODY="A 3-minute digits-in-noise hearing check at /free-online-hearing-test/.
Visitors hear generated digits in noise, then give name and email (with opt-in)
before they see a Good / Fair / Poor result and a PDF report. The server re-scores
the raw answers, saves the lead (Neon, optional), emails the patient, and emails
the front desk an alert with a priority (ear difference = urgent, poor = call).

Preview mode: the page is noindex and every result says PREVIEW until
NEXT_PUBLIC_SCREENER_CLINICAL_APPROVED=true is set after an audiologist reviews
the cutoffs. next.config.ts adds a production-only strict CSP on this route so
no analytics trackers run on it. Result levels are manufacturer-neutral."

BRANCH=""

FILES=(
  "app/free-online-hearing-test/page.tsx"
  "app/free-online-hearing-test/ScreenerApp.tsx"
  "app/free-online-hearing-test/screener.css"
  "app/api/screener/route.ts"
  "app/lib/screener/audio.ts"
  "app/lib/screener/config.ts"
  "app/lib/screener/copy.ts"
  "app/lib/screener/emails.ts"
  "app/lib/screener/mail.ts"
  "app/lib/screener/pdf.ts"
  "app/lib/screener/scoring.ts"
  "app/lib/screener/store.ts"
  "scripts/screener-selftest.mjs"
  "scripts/ship-screener.sh"
  "next.config.ts"
  ".env.example"
  "public/screener/audio/af_heart-1.wav"
  "public/screener/audio/af_heart-2.wav"
  "public/screener/audio/af_heart-3.wav"
  "public/screener/audio/af_heart-4.wav"
  "public/screener/audio/af_heart-5.wav"
  "public/screener/audio/af_heart-6.wav"
  "public/screener/audio/af_heart-8.wav"
  "public/screener/audio/af_heart-9.wav"
  "public/screener/audio/af_heart-noise.wav"
  "public/screener/audio/am_michael-1.wav"
  "public/screener/audio/am_michael-2.wav"
  "public/screener/audio/am_michael-3.wav"
  "public/screener/audio/am_michael-4.wav"
  "public/screener/audio/am_michael-5.wav"
  "public/screener/audio/am_michael-6.wav"
  "public/screener/audio/am_michael-8.wav"
  "public/screener/audio/am_michael-9.wav"
  "public/screener/audio/am_michael-noise.wav"
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

