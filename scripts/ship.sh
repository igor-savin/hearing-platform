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
SUBJECT="Add the backlog and the GBP Products playbook, commit ship.sh"

BODY="Housekeeping, no site code.

BACKLOG.md is the running list for both practices. It has been living on disk
untracked, which means it was one clean checkout away from being lost. It
carries the current queue, the decisions already taken and why, and the things
that need a call from Igor.

marketing/gbp-products-automation.md is a new playbook for the Google Business
Profile PRODUCTS section, written while adding Signia MaX and Phonak EON to
three listings. The existing skill reference covers Posts only, and Products is
a different form with different traps: it renders blank for up to twenty
seconds and silently swallows anything typed before it appears, the category
dropdown re-orders between loads so a remembered coordinate files the product
under the wrong category, the two practices use different category names
(Hearing Aid singular at CHC, Hearing Aids plural at AAW), and new entries sit
in a PENDING review queue. It also documents the iframe upload bridge, which is
the only way to get a photo in without hitting a native file dialog automation
cannot see.

scripts/ship.sh gets committed for the first time, with two fixes: --no-pager,
so the diffstat does not open in less and look like a hang, and an existence
guard that now accepts a path absent from disk but still tracked in git, i.e. a
deletion or a rename's old name. Before that, any commit removing a file failed
the guard after the script had already switched branches, which is exactly what
happened on the Portola Valley rename."

FILES=(
  "BACKLOG.md"
  "marketing/gbp-products-automation.md"
  "scripts/ship.sh"
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
