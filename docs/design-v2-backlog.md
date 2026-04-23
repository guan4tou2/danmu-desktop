# Design v2 · Backlog

This backlog tracks the remaining design + product decisions after the
`claude/design-v2-retrofit` pass that aligned viewer / overlay / admin / theme
packs / Electron client to the Claude Design handoff bundle
(`viewer.jsx`, `hero-scenes.jsx`, `admin-v3.jsx`, `admin-pages.jsx`,
`admin-theme-packs.jsx`, `desktop.jsx`, `tokens.jsx`).

**Status:** commits `a1e3427` / `af1f9ae` / `1f1a793` pushed to
`origin/claude/design-v2-retrofit`. Electron tested locally and functioning.

Handoff target: Claude Design (visual/IA decisions) + product owner
(naming + workflow decisions). Engineering implementation happens after
design decisions land.

---

## Priority 1 · Active design requests

### 1. Connect Dialog — integrate, no wizard

Drop the 3-step wizard. First-launch goes straight to the main window; the
connection fields already live inside the Conn section behind the
`⚙ 更改` action. Prototype never covered the empty-state visual for
`ws://—` when no host is configured yet.

**Needs design for:**
- Empty/unconfigured state of the SERVER card (current placeholder shows `ws://—:—` which feels broken).
- First-run hint: where does the user find the `⚙ 更改` button to enter their server URL? Consider an inline banner on first launch.

### 2. Electron client · integrate window controls

Move the close / minimize / maximize controls into the app itself. The
current title bar uses fake red/yellow/green circles that don't actually
close or minimize. Electron should be `frame: false` with custom controls
wired through IPC.

**Needs design for:**
- Frameless window treatment (shadow, border radius, drag-region surface).
- Interactive traffic-light states (macOS hover reveals `×` / `−` / `+` glyphs).
- Windows / Linux equivalent — traditional UI doesn't use macOS-style traffic lights. Propose a cross-platform pattern.
- Drag region: entire title bar is `-webkit-app-region: drag` except interactive children. Define exclusions.

**Engineering notes:**
- Electron main needs `frame: false, titleBarStyle: 'hidden'`.
- Preload must expose `window.API.windowControl({action: 'close'|'minimize'|'maximize'})`.
- Tray menu already has 「結束 Danmu」 as fallback if the app ever loses its custom controls.

### 3. Admin · split `風格主題包` into two nav items

The current `風格主題包` nav item bundles:
- Theme Packs card grid (the 4 preset themes)
- Display Settings toggles (Color / Opacity / FontSize / Speed / FontFamily / Layout + Emojis / Stickers / Sounds)

Prototype splits these. Proposal:
- **Theme Packs** — card grid only (+ future import/export, active-pack inspector from item 9 below).
- **Display Settings** — the 6 display toggles (Color / Opacity / FontSize / Speed / FontFamily / Layout).
- **Assets** (new?) — Emojis / Stickers / Sounds (or keep under Display Settings).

**Needs design for:**
- Icons for the new nav items (current is `❖`; pick distinct glyphs).
- Display Settings page layout — current stack of `admin-v3-card`s, or a 2-col grid?
- Where do Emojis / Stickers / Sounds belong?

### 4. Server public viewer · restore v4-style 2-col layout

Currently the `/` viewer stacks everything vertically (hero → preview →
input rows → sendbar). v4 had the hero on the left and a utility column
(connection chip, language picker, overlay status) on the right, which gave
the page more breathing room on desktop.

**Needs design for:**
- 2-col breakpoint map:
  - Desktop ≥ 960px: 2-col, hero left, utility right.
  - Tablet 520-960px: stack, hero on top.
  - Mobile < 520px: stack, hero compact.
- Right-column contents: `● CONNECTED · LIVE` chip, language select,
  dark/light toggle (currently light-only), optional `OVERLAY: N` status.
- Hero sizing in 2-col (currently `clamp(3.2rem, 8vw, 6rem)`; may go
  larger when constrained to half-width).
- Sendbar placement: fixed to viewport bottom (current) or scoped to the
  left column?

---

## Priority 2 · Approved, pending design

### 5. Overlay-on-Desktop · floating mini-control

`desktop.jsx:16 OverlayOnDesktop` shows a 280px cyan-bordered mini control
overlaying the presentation. Decide: demo concept or real production feature?
If production, needs: API to position the mini control per-display, hit
region (pass-through vs click-target), close affordance.

### 6. Admin Dashboard · inline Poll Builder

Dashboard currently shows a CTA link. Prototype has full A/B/C/D input + 時限
select + START ▶ inline. Clarify: same builder as the `/polls` route, or
two distinct views? If same, need shared component design.

### 7. Messages filter tabs

Prototype's messages stream filters: `全部 / Q&A / Poll投票 / 已遮罩 / 已回覆`.
Backend `history_service` records have no `type` field yet — needs
classification rules before this can be implemented. Claude Design to
define which signals drive each tag.

### 8. Sidebar Telemetry mini bar chart

Replace the text block `CPU 12% WS 5 MEM 218 MB RATE 4.2/s` with 4 inline
bar charts matching prototype. Existing telemetry series already available
at `/admin/metrics`.

### 9. Theme Packs · right-side active-pack inspector

Prototype uses `1fr + 380px` grid with an inspector column. Fold into item 3.

### 10. Command palette `⌘K`

Prototype topbar hints at `⌘K` but no screen exists. Needs result list
layout, keyboard nav, scope chips (messages / users / settings).

### 11. Real QR code for Overlay Idle

Replace the static placeholder SVG with a real QR derived from the active
room URL. Design: failure state (no server) and scan-to-pair feedback.

### 12. Broadcasting / Standby toggle

Dashboard topbar button renders once; should toggle interactively. Design
the interaction: does pressing it immediately switch, or show a confirm
modal? What changes on the server side?

---

## Priority 3 · Product decisions (no design work needed)

### 13. Unify product naming to `Danmu Fire`

Currently coexisting: `Danmu Fire` (server APP_NAME, admin title), `Danmu
Desktop` (Electron app name, macOS .app), `Danmu Client` (Electron title
bar after recent rebuild), `danmu-desktop` (repo slug). Consolidate all
user-facing references to `Danmu Fire`; keep repo slug for compatibility.

### 14. Remove Electron legacy `進階 · 舊版設定`

The collapsed `<details class="client-overlay-advanced">` contains
opacity / speed / size / color / stroke / shadow / track / animation
controls. Prototype explicitly states these belong to the viewer, not
the Electron client. Decide: delete entirely, or keep as "power user"
escape hatch?

### 15. Ship FEATURES.md to `/docs/`

Already written with corrected scope (5 layouts, 2–6 poll options, viewer
never shows percentages, scenarios A–D). Needs one editorial pass and a
link from README.

### 16. v5.0.0 breaking-changes migration note

The CHANGELOG has an entry but doesn't list the concrete breaking changes
from design-v2:
- Token rename: dark → light semantics on admin/viewer pages.
- i18n key changes: `heroConnected` default copy swapped, `fireDanmu`
  hardcoded to `FIRE` across all languages.
- `mainSubtitle` for zh rewritten.
- Tailwind slate utility classes being overridden by `.admin-body` scoped
  light theme — custom admin CSS that relied on the old dark tokens must
  audit.

---

## Priority 4 · Technical debt (code-only, no design)

### 17. Deduplicate viewer logic between Electron and server

`renderer-modules/particle-bg.js` and `renderer-modules/danmu-effects.js`
have server-side counterparts. Establish a single source of truth under
`shared/` or via a published package.

### 18. Split `admin.js` router

`server/static/js/admin.js` is now 1900+ lines. Extract the `ADMIN_ROUTES`
table + router into `admin-router.js`, and move `renderLogin` /
`renderControlPanel` / `refreshDashboardKpi` into their own modules.

---

## Changelog of decisions so far

| Date       | Decision                                                    | Source       |
|------------|-------------------------------------------------------------|--------------|
| 2026-04-23 | Connect dialog drops 3-step wizard, integrate into main    | User         |
| 2026-04-23 | Electron takes over window controls (frameless)            | User         |
| 2026-04-23 | Split `風格主題包` into Theme Packs + Display Settings     | User         |
| 2026-04-23 | Restore v4-style 2-col viewer layout                       | User         |
| 2026-04-23 | Scope locked — prototype-only, no features prototype lacks | User         |

---

*Last updated: 2026-04-23*
*Handoff target: Claude Design + product owner*
