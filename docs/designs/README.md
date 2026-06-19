# Design Docs Guide

This directory contains dated design briefs, prototype exports, handoffs, and audit notes. It is intentionally not a single canonical spec.

## Read First

- [../FEATURES.md](../FEATURES.md) is the feature inventory and product boundary source of truth.
- [../../DESIGN.md](../../DESIGN.md) is the high-level design-system note.
- Runtime CSS and contract tests are authoritative for implemented UI:
  - [../../shared/tokens.css](../../shared/tokens.css)
  - [../../shared/hud.css](../../shared/hud.css)
  - [../../server/static/css/viewer-v2.css](../../server/static/css/viewer-v2.css)
  - [../../server/static/css/style.css](../../server/static/css/style.css)
  - [../../danmu-desktop/tests/design-style-contract.test.js](../../danmu-desktop/tests/design-style-contract.test.js)
  - [../../danmu-desktop/tests/admin-layout-compact.test.js](../../danmu-desktop/tests/admin-layout-compact.test.js)

## Current Design Context

- [design-fusion-2026-06-07.md](design-fusion-2026-06-07.md) — latest consolidation notes for blending older design ideas into the current UI.
- [design-coverage-2026-05-19.md](design-coverage-2026-05-19.md) — coverage map for admin/design batches.
- [design-status-2026-05-18-final.md](design-status-2026-05-18-final.md) — final status snapshot from the May design pass.
- [design-v2/STYLE-CONTRACT.md](design-v2/STYLE-CONTRACT.md) — prototype style contract reference; check runtime tests before implementing literally.

## Historical Design Briefs

Files named `design-brief-*`, `HANDOFF-*`, and `design-status-*` are dated records. They may mention old production vocabulary:

- `admin-v2-*` classes now map to shared `admin-ui-*` primitives.
- User-facing "Overlay" labels have been renamed to **Desktop**.
- Internal technical names such as `/overlay`, `overlay_status`, and overlay CSS/JS modules remain for compatibility.

Do not treat dated briefs as direct implementation instructions without checking current code and tests first.
