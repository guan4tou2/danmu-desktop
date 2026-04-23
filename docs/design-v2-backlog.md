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

## Round 2 feedback (after Claude Design v3 handoff, 2026-04-24)

User reviewed the v3 bundle
(`https://api.anthropic.com/v1/design/h/pE9NkgtUeFsUp0lfp0I-pA`) and
gave 14 specific modification asks. Applied directly: #A1, #A3, #A11
(see Priority A below). Remaining items sent back to Claude Design.

### Priority A · applied in this branch

| # | Change | Where |
|---|---|---|
| A1 | Admin Login drops username field (single password input) | `server/static/js/admin.js:renderLogin` |
| A3 | Viewer subtitle reverts to short `把你的訊息送上螢幕！` | `locales/zh/translation.json` + `i18n.js` |
| A11 | Remove `哈囉 admin, 活動進行中` + revert hero chip `#MTG-042` → `LIVE` | `admin.js` ADMIN_ROUTES, `templates/index.html` |

### Priority B · sent back to Claude Design

| # | Topic | Notes |
|---|---|---|
| B2  | Mobile Safari viewer should match Desktop Chrome viewer; hero stays centered, no mobile-specific IA divergence | `viewer.jsx` mobile variant |
| B4  | Drop dual-lang labels like `暱稱 · NICKNAME` · `顏色 · COLOR`; rely on i18n to pick single label | whole viewer + admin forms |
| B5  | Dashboard topbar "bar" not aligned with other admin pages — needs concrete screenshot or location to resolve | admin topbar |
| B7  | Display Settings needs **per-setting enable toggle** UX: each of Color / Opacity / FontSize / Speed / FontFamily / Layout has (✓ allow audience to set · min/max range) compound control. Backend `options.Color[0]` is already this boolean but UI doesn't expose it cleanly | new Display Settings page |
| B8  | RATE LIMITS currently read-only on System page; needs editable form for FIRE / API / ADMIN / LOGIN (each: limit + window) | new or updated System section |
| B9  | `⌘K` command palette scope lock — admin-only. Electron client displays no controls or palette — Electron is "display-only" | remove from Electron scope |
| B10 | Polls: **multi-question + ordering + per-question image upload**. Requires schema rework: `poll.questions[{text, options[], image_url, order}]`. Frontend: reorderable list + image picker per question | major feature, design from scratch |
| B13 | Viewer Theme — separate concept from Theme Packs. Controls page chrome only (bg / primary / dark-light / logo) | already item #19 elsewhere |
| B14 | Delete `Overlay 配對 · Pairing States` from v3 bundle — doesn't match original functionality | strike from spec |

### v3 delta to codebase

v3 prototype already contains things our codebase lacks; these are
design-complete but not yet implemented:

- `admin-display-settings.jsx` — new component file separating Display
  Settings from Theme Packs (aligns with backlog #3)
- `priority-2-pieces.jsx` — unclear contents (gzip bundle was truncated
  during fetch); likely contains messages filter tabs + sidebar
  telemetry mini-charts (#7, #8)
- Expanded Admin to **17 pages** — current codebase has Dashboard /
  Messages (collapsed) / History / Polls / Widgets / Themes / Moderation
  / RateLimit / Effects / Plugins / Fonts / System = 12 pages. Missing
  as dedicated pages: **Emojis / Stickers / Sounds / Scheduler /
  Webhooks / Live Feed** (exist as server modules but as admin-v3-card
  under Assets group, not own pages)

---

## Original codebase features not visible in v3 prototype

Checked the v3 `Danmu Redesign.html` + chat transcript against `server/routes/`
and `danmu-desktop/`. These features ship but have **no prototype screen**:

| Feature | Lives at | Status in v3 |
|---|---|---|
| Webhooks management | `routes/admin/webhooks.py` + `admin-webhooks.js` | Not designed |
| Sounds library + trigger rules | `routes/admin/sounds.py` + `admin-sounds.js` | Not designed |
| Emojis CRUD | `routes/admin/emojis.py` + `admin-emojis.js` | Not designed |
| Stickers CRUD | `routes/admin/stickers.py` + `admin-stickers.js` | Not designed |
| Scheduled broadcasts | `routes/admin/scheduler.py` + `admin-scheduler.js` | Not designed |
| Live feed (streaming messages stream) | `admin-live-feed.js` | Mentioned in admin-v3 STREAM card, no dedicated page |
| Replay recorder + timeline export | `replay-recorder.js` + `history.py:/history/export` | Not designed |
| Fingerprint observatory | `admin-fingerprints.js` + `services/fingerprints.py` | Mentioned in System page, no dedicated page |
| Fonts upload (TTF) + subsetting | `admin-fonts.js` | Partial: Fonts page shows read-only list, no upload UX |
| Password change | `main.py:_verify_current_password` + routes | Not designed |
| WS token auth enable/rotate | `services/ws_auth.py` | Mentioned in System page as collapsed row |
| CSV / JSON history export | `routes/admin/history.py` | Mentioned in System BACKUP, no dedicated UX |

## Pages/artboards missing from v3 that the app needs

| Page | Why it's needed | Design status |
|---|---|---|
| **Admin · Emojis** | CRUD image emojis with filename + hotkey; existing model is rich | Missing |
| **Admin · Stickers** | CRUD sticker packs (category + bulk upload) | Missing |
| **Admin · Sounds** | Assign sound effects to keywords / poll transitions | Missing |
| **Admin · Webhooks** | Register outgoing webhooks for danmu events (filter + URL + signature) | Missing |
| **Admin · Scheduler** | Scheduled broadcasts (one-off / recurring / conditional) | Missing |
| **Admin · Live Feed (dedicated)** | Full-screen message stream with moderation controls | Missing (only as dashboard card) |
| **Admin · Replay** | Timeline scrub + per-event replay + batch replay | Missing |
| **Admin · Fonts Upload** | TTF upload form + subset preview + delete | Missing (page shows list only) |
| **Admin · Security (password + tokens)** | Change admin password, rotate WS token, view active sessions | Missing |
| **Admin · Backup / Export** | Export history JSON/CSV, backup settings, danger zone (end session) | Mentioned on System, needs own page |
| **Viewer · Offline state** | What audience sees when server is down | Missing |
| **Overlay · Connecting state** | Before first danmu arrives (between page load and WS open) | Missing (only Idle state exists) |
| **Electron · Update available** | Auto-updater UX (download / ready to restart) | Missing |
| **Admin · Login failed / locked out** | Rate-limit hit, wrong password attempts, lockout screen | Missing |

---

## Changelog of decisions

| Date       | Decision                                                    | Source       |
|------------|-------------------------------------------------------------|--------------|
| 2026-04-23 | Connect dialog drops 3-step wizard, integrate into main    | User         |
| 2026-04-23 | Electron takes over window controls (frameless)            | User         |
| 2026-04-23 | Split `風格主題包` into Theme Packs + Display Settings     | User         |
| 2026-04-23 | Restore v4-style 2-col viewer layout                       | User         |
| 2026-04-23 | Scope locked — prototype-only, no features prototype lacks | User         |
| 2026-04-24 | Pairing States removed from v3 design                      | User         |
| 2026-04-24 | Admin Login drops username (password-only)                 | User + applied |
| 2026-04-24 | Viewer subtitle short: 把你的訊息送上螢幕！                | User + applied |
| 2026-04-24 | Remove 哈囉 admin greeting + #MTG-042 session id           | v3 chat + applied |
| 2026-04-24 | Admin Viewer Theme separate from Theme Packs (#19)         | User         |
| 2026-04-24 | Polls expand to multi-question + image upload              | User         |
| 2026-04-24 | Electron is display-only; ⌘K + all settings are server-side | User         |

---

*Last updated: 2026-04-24*
*Handoff target: Claude Design + product owner*
