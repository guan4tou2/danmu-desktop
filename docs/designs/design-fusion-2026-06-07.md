# Design Fusion Decision — 2026-06-07

Canonical direction remains **v5 / Batch 10-12**. Older designs can be
reused only when they improve clarity without changing the v5 information
architecture.

## Keep As Canonical

- **Admin shell and route IA**: v5 / Batch 10-12.
- **Viewer settings**: Batch 11 `Viewer4TabPage`:
  Page, Fields, Defaults, Limits.
- **Desktop chrome**: Batch 12 `TrayPopover`, `WindowPicker`,
  `DesktopDisconnected`.
- **Token system**: cyan primary, amber warning, lime healthy, crimson danger,
  slate light/dark mirrors, no purple/magenta palette.

## Fuse From Older Versions

- **v2 Viewer hero**: keep the Danmu Fire lockup, status chips, and background
  marquee as brand motion. This already matches the public `/fire` page.
- **v3 Display / Viewer boundary**: keep the strict split:
  Desktop controls display/connection only; Viewer controls `/fire` fields,
  defaults, limits, and page theme.
- **v4 light-theme audit**: keep the stronger light-mode colors and contrast
  fixes for text, chips, marquee, and form controls.
- **Batch 11 compound defaults rows**: use the full row UI for Viewer
  Defaults instead of a text-only summary.

## Do Not Bring Back

- Standalone broadcast/show lifecycle wording.
- Viewer-side theme/language switchers when admin force mode is active.
- Duplicate Defaults summary panels.
- Desktop controls for per-message font, color, opacity, speed, layout, or
  effects. Those remain viewer-send parameters.
- Overlay as user-facing product vocabulary. Use **Desktop**.

## Current Implementation Note

`server/static/js/admin-display.js` now treats `sec-viewer-config-defaults`
as the single canonical Viewer Defaults surface. It reuses the full
`admin-dsp2-*` compound-row UI and keeps the admin-controlled language/copy
summary in the right rail.
