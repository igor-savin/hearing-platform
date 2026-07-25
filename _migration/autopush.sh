#!/bin/bash
# Claude auto-push watcher. Run in a Terminal tab and leave open.
cd "$HOME/California-Hearing-Center" || { echo "repo not found"; exit 1; }
echo "✅ Claude auto-push watcher running in $(pwd)"
echo "   Watching for push signals. Ctrl-C to stop."
while true; do
  if [ -f .claude-push ]; then
    MSG="$(cat .claude-push)"; [ -z "$MSG" ] && MSG="Update from Claude"
    # clear any stale index lock left by bridge-side git access
    [ -f .git/index.lock ] && rm -f .git/index.lock
    git add -A
    if git diff --cached --quiet; then
      echo "$(date '+%H:%M:%S') · signal received, nothing to commit"; echo "NOOP $(date) :: $MSG" > .claude-push-log
    elif git commit -m "$MSG" >/dev/null 2>&1 && git push >/dev/null 2>&1; then
      H="$(git rev-parse --short HEAD)"; echo "$(date '+%H:%M:%S') · ✅ pushed $H — $MSG"; echo "OK $H $(date) :: $MSG" > .claude-push-log
    else
      echo "$(date '+%H:%M:%S') · ❌ push failed — $MSG"; echo "FAIL $(date) :: $MSG" > .claude-push-log
    fi
    rm -f .claude-push
  fi
  sleep 8
done
