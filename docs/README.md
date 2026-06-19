# Docs Overview / 文件索引

This folder contains project reference material. Prefer the current source-of-truth files below before reading dated handoff notes.

## Current Sources Of Truth

- [FEATURES.md](FEATURES.md) — canonical feature inventory, product boundaries, admin route map, and vocabulary guardrails.
- [../DESIGN.md](../DESIGN.md) — high-level design-system notes. Runtime tokens and contract tests are authoritative when they disagree.
- [designs/README.md](designs/README.md) — how to read design drafts, historical handoffs, and prototype files.
- [../DEPLOYMENT.md](../DEPLOYMENT.md) — Docker, HTTPS, and VPS deployment guide.
- [IMPROVEMENTS.md](IMPROVEMENTS.md) — implemented and planned enhancements.

## Implementation Contracts

Use these tests as the living UI/design contracts:

- [../danmu-desktop/tests/design-style-contract.test.js](../danmu-desktop/tests/design-style-contract.test.js)
- [../danmu-desktop/tests/admin-layout-compact.test.js](../danmu-desktop/tests/admin-layout-compact.test.js)
- [../danmu-desktop/tests/design-mirror-desktop.test.js](../danmu-desktop/tests/design-mirror-desktop.test.js)

Runtime styling lives in:

- [../shared/tokens.css](../shared/tokens.css)
- [../shared/hud.css](../shared/hud.css)
- [../server/static/css/viewer-v2.css](../server/static/css/viewer-v2.css)
- [../server/static/css/style.css](../server/static/css/style.css)

## Historical / Reference Docs

- [designs/](designs/) — dated design briefs and prototype handoffs. Many mention old names such as `admin-v2-*` or user-facing "Overlay"; treat those as historical unless the design README says otherwise.
- [plans/](plans/) — dated implementation plans.
- [audits/](audits/) — past audit reports.
- [archive/](archive/) — legacy fix logs and simplification notes.
- [release-readiness-5.1.0.md](release-readiness-5.1.0.md) — historical release checklist.

## Vocabulary

- User-facing display surface: **Desktop**.
- Technical route/API compatibility name: `/overlay`, `overlay_status`, overlay CSS/JS internals may remain.
- Shared admin UI primitives: `admin-ui-*`.
- Legacy production names such as `admin-v2-*` should not appear in runtime code.

If you add new guides, list them here so contributors can find them quickly.
