#!/usr/bin/env bash
# backup.sh — snapshot Danmu Fire runtime state into a dated tarball.
#
# Covers everything documented in DEPLOYMENT.md § Data persistence:
#   - server/runtime/  (filter_rules, settings, webhooks, plugins_state)
#   - server/user_plugins/  (custom user plugin .py files)
#   - server/user_fonts/  (uploaded user fonts)
#   - server/static/  (uploaded stickers, emojis, plus bundled static assets)
#   - .env  (deploy configuration)
#
# Usage:
#   ./scripts/backup.sh                 # writes danmu-backup-YYYY-MM-DD.tar.gz
#   ./scripts/backup.sh /path/to/out    # writes to a specific file
#   BACKUP_SKIP_STATIC=1 ./scripts/backup.sh  # skip bundled static assets
#
# Restore: tar -xzf <file>.tar.gz  then restart the stack with the same
# --profile (+ any -f override files) used at deploy time.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

OUT="${1:-danmu-backup-$(date +%F).tar.gz}"

if [[ -d "$(dirname "$OUT")" ]]; then :; else
  echo "ERROR: output directory does not exist: $(dirname "$OUT")" >&2
  exit 1
fi

PATHS=(
  "server/runtime"
  "server/user_plugins"
  "server/user_fonts"
)

# Bundled stickers/emojis live under server/static/ — backing them up is
# usually desired but can be skipped if they're large and already in the image.
if [[ "${BACKUP_SKIP_STATIC:-0}" != "1" ]]; then
  PATHS+=("server/static")
fi

if [[ -f ".env" ]]; then
  PATHS+=(".env")
fi

# Sanity check: warn on missing paths, skip from archive.
EXIST_PATHS=()
for p in "${PATHS[@]}"; do
  if [[ -e "$p" ]]; then
    EXIST_PATHS+=("$p")
  else
    echo "WARN: skipping missing path: $p" >&2
  fi
done

if [[ ${#EXIST_PATHS[@]} -eq 0 ]]; then
  echo "ERROR: no paths to back up. Is this a Danmu Fire checkout?" >&2
  exit 1
fi

echo "Writing $OUT"
tar -czf "$OUT" "${EXIST_PATHS[@]}"

SIZE=$(du -h "$OUT" | cut -f1)
echo "Done. $OUT ($SIZE)"
echo "Contents:"
tar -tzf "$OUT" | head -20
TOTAL=$(tar -tzf "$OUT" | wc -l | tr -d ' ')
echo "... ($TOTAL entries total)"
