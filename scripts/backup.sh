#!/usr/bin/env bash
# backup.sh — snapshot Danmu Fire runtime state into a dated tarball.
#
# Covers everything documented in DEPLOYMENT.md § Data persistence:
#   - server/runtime/  (filter_rules, settings, webhooks, plugins_state,
#     the admin password hash and the connection tokens)
#   - server/user_plugins/  (custom user plugin .py files)
#   - server/user_fonts/  (uploaded user fonts)
#   - server/static/  (uploaded stickers, emojis, plus bundled static assets)
#   - .env  ONLY when asked for (--include-env or BACKUP_INCLUDE_ENV=1):
#     it holds SECRET_KEY and possibly the plain-text admin password
#
# The archive is not encrypted and is written with mode 0600. Even without
# .env it contains the admin password hash and the integration tokens, so
# treat it like the admin password.
#
# Usage:
#   ./scripts/backup.sh                       # writes danmu-backup-YYYY-MM-DD.tar.gz
#   ./scripts/backup.sh /path/to/out          # writes to a specific file
#   ./scripts/backup.sh --include-env [OUT]   # also include .env
#   BACKUP_INCLUDE_ENV=1 ./scripts/backup.sh  # same, via environment
#   BACKUP_SKIP_STATIC=1 ./scripts/backup.sh  # skip bundled static assets
#
# Restore: tar -xzf <file>.tar.gz  then restart the stack with the same
# --profile (+ any -f override files) used at deploy time. Without .env in
# the archive, copy the deployment's .env over separately.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRIPT_PATH="$REPO_ROOT/scripts/$(basename "${BASH_SOURCE[0]}")"
cd "$REPO_ROOT"

INCLUDE_ENV="${BACKUP_INCLUDE_ENV:-0}"
OUT=""
for arg in "$@"; do
  case "$arg" in
    --include-env) INCLUDE_ENV=1 ;;
    -h|--help)
      sed -n '2,26p' "$SCRIPT_PATH" | sed 's/^# \{0,1\}//'
      exit 0
      ;;
    -*)
      echo "ERROR: unknown option: $arg" >&2
      exit 2
      ;;
    *)
      if [[ -n "$OUT" ]]; then
        echo "ERROR: more than one output path given" >&2
        exit 2
      fi
      OUT="$arg"
      ;;
  esac
done
OUT="${OUT:-danmu-backup-$(date +%F).tar.gz}"

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

if [[ "$INCLUDE_ENV" == "1" ]]; then
  if [[ -f ".env" ]]; then
    PATHS+=(".env")
  else
    echo "WARN: --include-env given but there is no .env" >&2
  fi
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
# Write to a fresh owner-only temp file next to OUT and move it into place
# only after tar succeeds. An existing OUT (whatever its mode) is never
# truncated in place, and a failed run leaves neither a partial archive nor
# the temp file behind.
TMP_OUT="$(umask 077 && mktemp "$(dirname "$OUT")/.danmu-backup.XXXXXX")"
trap 'rm -f "$TMP_OUT"' EXIT
chmod 600 "$TMP_OUT"
tar -czf "$TMP_OUT" "${EXIST_PATHS[@]}"
mv -f "$TMP_OUT" "$OUT"
trap - EXIT

SIZE=$(du -h "$OUT" | cut -f1)
TOTAL=$(tar -tzf "$OUT" | wc -l | tr -d ' ')
echo "Done. $OUT ($SIZE, $TOTAL entries)"
echo "Preview (first 20):"
# Read tar output into an array instead of `tar | head` — the latter breaks
# under `set -o pipefail` because head closes the pipe early, sending SIGPIPE
# to tar, which returns 141 and trips `set -e`.
CONTENTS=()
while IFS= read -r line; do
  CONTENTS+=("$line")
done < <(tar -tzf "$OUT")
for entry in "${CONTENTS[@]:0:20}"; do
  echo "  $entry"
done
if (( TOTAL > 20 )); then
  echo "  ... ($((TOTAL - 20)) more)"
fi
echo "NOTE: $OUT is unencrypted and grants admin access to this server; keep it private (mode 0600)."
