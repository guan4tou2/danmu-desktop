#!/usr/bin/env bash
# bump-version.sh — atomic version bump across all canonical files.
#
# Keeps these in sync (they all have to match or build.yml + the UI show
# different versions):
#   danmu-desktop/package.json  — drives build.yml release trigger
#   server/config.py             — injected into all templates via context_processor
#   CHANGELOG.md                 — [Unreleased] header promoted to [<new>] - <date>
#
# Usage:
#   ./scripts/bump-version.sh 4.6.4           # bump to 4.6.4, dated today
#   ./scripts/bump-version.sh 4.7.0 2026-05-01 # bump to 4.7.0, dated given
#   DRY_RUN=1 ./scripts/bump-version.sh 4.6.4 # preview without writing
#
# Version format: MAJOR.MINOR.PATCH (semver-ish). Four-part versions like
# 4.6.1.2 are not supported.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

NEW="${1:-}"
DATE="${2:-$(date +%F)}"
DRY_RUN="${DRY_RUN:-0}"

if [ -z "$NEW" ]; then
  echo "Usage: $0 <new-version> [<date>]" >&2
  echo "Example: $0 4.6.4" >&2
  exit 1
fi

# Sanity: version matches N.N.N
if ! [[ "$NEW" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "ERROR: version must be MAJOR.MINOR.PATCH (got: $NEW)" >&2
  exit 1
fi

# Read current version from the canonical source (package.json).
CURRENT=$(grep -E '^\s*"version"' danmu-desktop/package.json | head -1 | sed -E 's/.*"([0-9]+\.[0-9]+\.[0-9]+)".*/\1/')
if [ -z "$CURRENT" ]; then
  echo "ERROR: could not parse current version from danmu-desktop/package.json" >&2
  exit 1
fi

echo "Bumping: $CURRENT → $NEW (date: $DATE)"

# Check all three files are in sync before touching anything.
CFG_VER=$(grep -E '^\s*APP_VERSION' server/config.py | head -1 | sed -E 's/.*"([0-9]+\.[0-9]+\.[0-9]+)".*/\1/')
if [ "$CFG_VER" != "$CURRENT" ]; then
  echo "WARN: server/config.py APP_VERSION ($CFG_VER) doesn't match package.json ($CURRENT)." >&2
  echo "      Continuing — bump will force both to $NEW." >&2
fi

if [ "$DRY_RUN" = "1" ]; then
  echo "DRY RUN — would update:"
  echo "  danmu-desktop/package.json: \"version\": \"$CURRENT\" → \"$NEW\""
  echo "  server/config.py:           APP_VERSION = \"$CURRENT\" → \"$NEW\""
  echo "  CHANGELOG.md:               add [### $NEW] - $DATE after [Unreleased]"
  exit 0
fi

# 1. package.json
sed -i.bak -E "s/\"version\": \"$CURRENT\"/\"version\": \"$NEW\"/" danmu-desktop/package.json
rm -f danmu-desktop/package.json.bak

# 2. server/config.py
sed -i.bak -E "s/APP_VERSION = \"$CURRENT\"/APP_VERSION = \"$NEW\"/" server/config.py
rm -f server/config.py.bak

# 3. CHANGELOG.md — insert new section after [Unreleased] if not already there.
if grep -qE "^## \[$NEW\]" CHANGELOG.md; then
  echo "WARN: CHANGELOG.md already has [$NEW] section — skipping CHANGELOG edit."
else
  # Use awk to insert a new section right after [Unreleased] block.
  # Finds the [Unreleased] heading, consumes any blank + --- separator lines,
  # then inserts our new section header and a single --- separator.
  awk -v ver="$NEW" -v date="$DATE" '
    BEGIN { inserted = 0 }
    /^## \[Unreleased\]/ && !inserted {
      print
      # Drain the blank-line and (possibly already present) --- separator
      # that normally follow [Unreleased], so we do not insert a double.
      while ((getline line) > 0) {
        if (line ~ /^---$/) { break }          # existing separator, swallow
        if (line ~ /^[[:space:]]*$/) { continue }
        # First non-blank non-separator line — belongs to unreleased content,
        # re-emit it AFTER our insertion.
        saved = line
        break
      }
      print ""
      print "## [" ver "] - " date
      print ""
      print "<!-- fill in release notes -->"
      print ""
      print "---"
      if (saved != "") { print ""; print saved; saved = "" }
      inserted = 1
      next
    }
    { print }
  ' CHANGELOG.md > CHANGELOG.md.tmp
  mv CHANGELOG.md.tmp CHANGELOG.md
fi

echo "Done."
echo ""
echo "Changed files:"
git status --porcelain -- danmu-desktop/package.json server/config.py CHANGELOG.md
echo ""
echo "Next steps:"
echo "  1. Fill in CHANGELOG.md [$NEW] section with actual release notes"
echo "  2. git add danmu-desktop/package.json server/config.py CHANGELOG.md"
echo "  3. git commit -m 'chore: bump version to $NEW'"
