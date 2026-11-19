# Docs Overview / 文件索引

This folder contains project reference material. Prefer the current source-of-truth files below before reading dated handoff notes.

## Current Sources Of Truth

- [ARCHITECTURE.md](ARCHITECTURE.md) — project layout, runtime data flow, where each concern lives.
- [wiki/](wiki/Home.md) — user manual (繁體中文), screenshot-led: quick start, host guide, audience, FAQ. Written in GitHub-wiki layout (`Home.md`, `_Sidebar.md`, `images/`); to publish, copy the folder's contents into the `danmu-desktop.wiki` repository.
- [FEATURES.md](FEATURES.md) — canonical feature inventory, product boundaries, admin route map, and vocabulary guardrails.
- [../DESIGN.md](../DESIGN.md) — high-level design-system notes. Runtime tokens and contract tests are authoritative when they disagree.
- [designs/README.md](designs/README.md) — how to read design drafts, historical handoffs, and prototype files.
- [../DEPLOYMENT.md](../DEPLOYMENT.md) — Docker, HTTPS, and VPS deployment guide.
- [IMPROVEMENTS.md](IMPROVEMENTS.md) — implemented and planned enhancements.
- [../CHANGELOG.md](../CHANGELOG.md) — per-version release notes.
- [../TODOS.md](../TODOS.md) — open and deferred work.
- [../server/PLUGIN_GUIDE.md](../server/PLUGIN_GUIDE.md) — writing server plugins.
- [../slido-extension/README.md](../slido-extension/README.md) — Chrome extension that turns Slido questions into danmu.
- [agent-ops/](agent-ops/README.md) — operating rules for AI coding sessions (harness pitfalls, model dispatch, judgment rubrics, delegation templates, maintenance protocol). Not product documentation.

## Implementation Contracts

Use these tests as the living UI/design contracts:

- [../danmu-desktop/tests/design-style-contract.test.js](../danmu-desktop/tests/design-style-contract.test.js)
- [../danmu-desktop/tests/admin-layout-compact.test.js](../danmu-desktop/tests/admin-layout-compact.test.js)
- [../danmu-desktop/tests/design-mirror-desktop.test.js](../danmu-desktop/tests/design-mirror-desktop.test.js)

Runtime styling lives in:

- [../shared/tokens.css](../shared/tokens.css)
- [../shared/danmu-effects.js](../shared/danmu-effects.js) and [../shared/particle-bg.js](../shared/particle-bg.js) — shared effect and background scripts (not styling, listed for completeness)
- [../server/static/css/viewer-v2.css](../server/static/css/viewer-v2.css)
- [../server/static/css/style.css](../server/static/css/style.css)

## Historical / Reference Docs

- [designs/](designs/) — dated design briefs and prototype handoffs. Many mention old names such as `admin-v2-*` or user-facing "Overlay"; treat those as historical unless the design README says otherwise.
- [plans/](plans/) — dated implementation plans. The latest is [plans/2026-11-15-next-steps.md](plans/2026-11-15-next-steps.md) (planning document for the work after 5.12.0, no implementation).
- [superpowers/](superpowers/) — earlier plans and specs (`plans/`, `specs/`, April–July 2026).
- [perf/](perf/) — performance baselines ([baseline-v4.6.1.md](perf/baseline-v4.6.1.md)).
- [releases/](releases/) — per-release notes and smoke-test records ([v5.3.1.md](releases/v5.3.1.md), [windows-ui-overlay-smoke.md](releases/windows-ui-overlay-smoke.md)).
- [audits/](audits/) — past audit reports.
- [archive/](archive/) — legacy fix logs and simplification notes.
- [release-readiness-5.1.0.md](release-readiness-5.1.0.md) — historical release checklist.
- [backend-prep-2026-05-04.md](backend-prep-2026-05-04.md) and [engineering-plan-2026-05-04.md](engineering-plan-2026-05-04.md) — May 2026 planning notes for the P0-0 admin IA migration (endpoint audit and engineering plan).
- [color-system-v2-proposal.md](color-system-v2-proposal.md) and [design-v2-backlog.md](design-v2-backlog.md) — colour-system proposal (2026-07-24, marked as a proposal awaiting a decision) and the design v2 backlog.
- [pentest_dynamic_https_2026-03-07.md](pentest_dynamic_https_2026-03-07.md) — dynamic penetration verification of the `https` compose profile (March 2026).

## Vocabulary

- User-facing display surface: **Desktop**.
- Technical route/API compatibility name: `/overlay`, `overlay_status`, overlay CSS/JS internals may remain.
- Shared admin UI primitives: `admin-ui-*`.
- Legacy production names such as `admin-v2-*` should not appear in runtime code.

If you add new guides, list them here so contributors can find them quickly.
