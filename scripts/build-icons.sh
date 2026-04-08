#!/usr/bin/env bash
# Build icon assets from source SVGs.
# Prerequisites: brew install librsvg imagemagick
# Usage: bash scripts/build-icons.sh

set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> Danmu Desktop icons (from danmu-desktop/assets/icon.svg)"
for size in 16 32 64 128 256 512 1024; do
  rsvg-convert -w $size -h $size danmu-desktop/assets/icon.svg \
    -o danmu-desktop/assets/icon-${size}.png
  echo "  icon-${size}.png"
done
cp danmu-desktop/assets/icon-1024.png danmu-desktop/assets/icon.png

echo "==> macOS .icns (Danmu Desktop)"
ICONSET=danmu-desktop/assets/icon.iconset
mkdir -p "$ICONSET"
for s in 16 32 128 256 512; do
  rsvg-convert -w $s -h $s danmu-desktop/assets/icon.svg -o "$ICONSET/icon_${s}x${s}.png"
  rsvg-convert -w $((s*2)) -h $((s*2)) danmu-desktop/assets/icon.svg -o "$ICONSET/icon_${s}x${s}@2x.png"
done
iconutil -c icns "$ICONSET" -o danmu-desktop/assets/icon.icns
echo "  icon.icns"

echo "==> Danmu Fire icons (from danmu-desktop/assets/icon-fire.svg)"
for size in 256 512; do
  rsvg-convert -w $size -h $size danmu-desktop/assets/icon-fire.svg \
    -o server/static/icon-fire-${size}.png
  echo "  icon-fire-${size}.png"
done
cp server/static/icon-fire-256.png server/static/icon.png

echo "==> server/static/favicon.ico (from icon-fire.svg)"
rsvg-convert -w 32 -h 32 danmu-desktop/assets/icon-fire.svg -o /tmp/favicon-32.png
rsvg-convert -w 16 -h 16 danmu-desktop/assets/icon-fire.svg -o /tmp/favicon-16.png
convert /tmp/favicon-32.png /tmp/favicon-16.png server/static/favicon.ico
echo "  favicon.ico"

echo "Done."
