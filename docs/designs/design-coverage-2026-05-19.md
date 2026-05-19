# Admin Design Coverage — 2026-05-19

Status snapshot of every admin page after the v5 Yellow batch + IA
merge sweep (PR #122). Each row is classified as:

- **🟢 final v5** — page chrome matches a v5/batch10 final canvas; no
  open design questions.
- **🟡 older prototype** — page has a design but at v2/v3/v4 prototype
  fidelity, not v5 final. Implementation works but the visual treatment
  hasn't been refreshed to the v5 token system / layout density.
- **🔴 no dedicated design** — page exists in code but has no
  dedicated mockup, only component-level scaffolding or none at all.

Source paths: handoff bundle `danmu/project/components/` (v5 batch10
handoff, 2026-05-19) — referenced as `<filename.jsx>` below.

## Coverage matrix (28 surfaces)

### 🟢 final v5 (22)

| Sidebar slug | Page | Implementation | Design source |
|---|---|---|---|
| `live`        | Live Feed / 控制台         | [admin-live-feed.js](../../server/static/js/admin-live-feed.js), [admin-dashboard.js](../../server/static/js/admin-dashboard.js) | `admin-pages.jsx` (LiveDashboard v4) |
| `polls`       | Polls / 投票               | [admin-poll-builder.js](../../server/static/js/admin-poll-builder.js) | `admin-pages.jsx` (PollsPage) |
| `widgets`     | Overlay Widgets            | [admin-widgets.js](../../server/static/js/admin-widgets.js) | `admin-batch1.jsx` (legacy — see 🟡 row) |
| `themes`      | 風格主題包                 | [admin-themes.js](../../server/static/js/admin-themes.js) | `admin-pages.jsx` (ThemePacks) |
| `assets`      | 素材庫                     | [admin-assets.js](../../server/static/js/admin-assets.js), [admin-emojis.js](../../server/static/js/admin-emojis.js), [admin-stickers.js](../../server/static/js/admin-stickers.js), [admin-sounds.js](../../server/static/js/admin-sounds.js) | `admin-pages.jsx` (AssetsLibrary) |
| `viewer`      | 觀眾頁 (4-tab)             | [admin-display.js](../../server/static/js/admin-display.js), [admin-viewer-theme.js](../../server/static/js/admin-viewer-theme.js) | `batch11-viewer-4tab.jsx` |
| `moderation`  | 敏感字 & 黑名單 (6-tab)    | [admin-modqueue.js](../../server/static/js/admin-modqueue.js), [admin-modbans.js](../../server/static/js/admin-modbans.js), [admin-filters.js](../../server/static/js/admin-filters.js), [admin-fingerprints.js](../../server/static/js/admin-fingerprints.js) | `admin-pages.jsx` (ModerationPage), `admin-modqueue.jsx` |
| `ratelimit`   | 速率限制                   | [admin-ratelimit.js](../../server/static/js/admin-ratelimit.js) | `admin-ratelimits.jsx` |
| `plugins`     | 伺服器插件                 | [admin-plugins.js](../../server/static/js/admin-plugins.js), [admin-plugins-upload.js](../../server/static/js/admin-plugins-upload.js) | `batch10-plugins.jsx`, `batch11-plugin-upload.jsx` |
| `fonts`       | 字型管理                   | [admin-fonts.js](../../server/static/js/admin-fonts.js) | `admin-pages.jsx` (FontLibrary) |
| `audit`       | 操作日誌                   | [admin-audit.js](../../server/static/js/admin-audit.js) | `batch10-yellow.jsx` (AuditPage) |
| `extensions`  | Extensions                 | [admin-extensions.js](../../server/static/js/admin-extensions.js) | `batch10-extensions.jsx` |
| `webhooks`    | Webhooks                   | [admin-webhooks.js](../../server/static/js/admin-webhooks.js) | `batch10-webhooks.jsx` |
| `api-tokens`  | API Tokens                 | [admin-api-tokens.js](../../server/static/js/admin-api-tokens.js) | `batch10-api-tokens.jsx` |
| `backup`      | 備份 & 還原                | [admin-backup.js](../../server/static/js/admin-backup.js) | `batch10-backup.jsx` |
| `about`       | 關於                       | [admin-about.js](../../server/static/js/admin-about.js) | `batch10-yellow.jsx` (AboutPage) |
| `setup`       | 設定精靈                   | [admin-setup-wizard.js](../../server/static/js/admin-setup-wizard.js) | `batch10-yellow.jsx` (SetupWizard) |
| `notifications` | 通知中心                 | [admin-notifications.js](../../server/static/js/admin-notifications.js) | `admin-batch7.jsx` (NotificationsPage) |
| `poll-deepdive` | 投票深度分析             | [admin-poll-deepdive.js](../../server/static/js/admin-poll-deepdive.js) | `batch10-poll-deepdive.jsx` |
| `search`      | 跨場次搜尋                 | [admin-search.js](../../server/static/js/admin-search.js) | `batch10-search.jsx` |
| `audience`    | 觀眾名單                   | [admin-audience.js](../../server/static/js/admin-audience.js) | `batch10-audience.jsx` |
| `overlay`     | Overlay 控制               | [admin-broadcast.js](../../server/static/js/admin-broadcast.js) | `admin-polestar.jsx` (OverlayControlPage) |

Also covered (deep-link only, no sidebar slug):

| Route | Page | Implementation | Design source |
|---|---|---|---|
| `sessions`        | 場次列表       | [admin-sessions.js](../../server/static/js/admin-sessions.js) | `admin-pages.jsx` (SessionsList) |
| `session-detail`  | 場次詳情       | [admin-session-detail.js](../../server/static/js/admin-session-detail.js) | `admin-pages.jsx` (SessionDetail) |
| `firetoken`       | Fire Token     | [admin-firetoken.js](../../server/static/js/admin-firetoken.js) | `admin-batch9.jsx` (FireTokenPage) |
| `wcag`            | WCAG 對比度    | [admin-wcag.js](../../server/static/js/admin-wcag.js) | `admin-pages.jsx` (WcagChecker) |
| `replay`          | 場次重播       | [admin-replay.js](../../server/static/js/admin-replay.js), [admin-history.js](../../server/static/js/admin-history.js) | `admin-pages.jsx` (ReplayPage) |
| `onboarding-tour` | 新手導覽       | [admin-onboarding.js](../../server/static/js/admin-onboarding.js) | `admin-pages.jsx` (OnboardingOverlay) |

### 🟡 older prototype — design exists but pre-v5 (6)

These pages have working implementations but the visual treatment
comes from a v2/v3/v4 mockup, not a v5 batch10 final canvas. The
gap is mostly token-level (color palette / typography / clip-path
chrome) rather than functional.

| Sidebar slug | Page | Implementation | Design source | What's needed |
|---|---|---|---|---|
| (`system`/`system-overview` accordion leaf) | System Overview | [admin-system-overview.js](../../server/static/js/admin-system-overview.js) | `admin-p2p3.jsx` (SystemOverview) | v5 KPI strip + service-health card refresh |
| (`system/security` accordion leaf) | Security | [admin-security.js](../../server/static/js/admin-security.js) | `admin-shell-8area.jsx` (SecurityPanel) | Move from 8-area shell into v5 first-class layout (token cards + audit-trail strip) |
| `events` | 系統事件 | [admin-events.js](../../server/static/js/admin-events.js), [admin-events-log.js](../../server/static/js/admin-events-log.js) | `admin-p2p3.jsx` (AdminEventsPage) | Severity-dot timeline + filter chips (similar to v5 audit.js but separate model) |
| `effects` | 效果庫 .dme | [admin-effects-mgmt.js](../../server/static/js/admin-effects-mgmt.js) | `admin-pages.jsx` (EffectsLibrary) | v5 8-card live preview already shipped — chrome could use kicker/title refresh |
| (`widgets` v4 chrome) | Overlay Widgets (full page) | [admin-widgets.js](../../server/static/js/admin-widgets.js) | `admin-batch1.jsx` (WidgetsPage) | Page chrome → v5 token system; current is v4 |
| Desktop chrome / tray / window picker | Electron app surface | `danmu-desktop/main-modules/window-manager.js`, `tray.js` (Electron, not admin route) | `admin-batch9.jsx` (TrayPopover, WindowPicker), `desktop.jsx` (marked non-final) | Designer decision needed: which file is canonical |

### 🔴 no dedicated design (1 main + N helpers)

| Surface | Implementation | Notes |
|---|---|---|
| `Help Drawer` | [admin-help-drawer.js](../../server/static/js/admin-help-drawer.js) | No mockup in any handoff bundle. Currently a hand-rolled drawer; brief needed if we want it visually aligned with the v5 system. |

Helpers (component-level only, by design — not a gap):

- `Toast` ([toast.js](../../server/static/js/toast.js)) → `admin-pages.jsx` (component, not full page)
- `HudConfirm Modal` ([admin-hud-modal.js](../../server/static/js/admin-hud-modal.js)) → `admin-pages.jsx` (component)
- `Skeleton Loader` ([admin-skeletons.js](../../server/static/js/admin-skeletons.js)) → component
- `System Accordion` ([admin-system-accordion.js](../../server/static/js/admin-system-accordion.js)) → component
- `Mobile Bottom Nav` ([admin-mobile-nav.js](../../server/static/js/admin-mobile-nav.js)) → `admin-mobile-shell.jsx` (component)
- `Reconnect Banner` ([admin-reconnect-banner.js](../../server/static/js/admin-reconnect-banner.js)) → `admin-polish.jsx` (component-level mockup, intentional)

## Summary

- **Main pages with v5 final design**: 22/28 (≈ 79%)
- **Older prototype (functional, visually pre-v5)**: 6/28 (≈ 21%)
- **Truly missing a dedicated design**: 1 (Help Drawer)

## Recommended next actions

In priority order:

1. **Help Drawer brief** (small) — only main surface with no design.
   Probably a one-pager covering the drawer chrome + content tabs
   (keyboard shortcuts / settings glossary / contact). Can reuse the
   plugin upload modal's panel pattern.

2. **Events page v5 refresh** (medium) — currently using p2p3
   prototype chrome. Closest v5 sibling is `audit-yellow` (similar
   severity-coded timeline). Could likely converge to shared
   `admin-audit-timeline-row` styles after one designer pass.

3. **System Overview v5 refresh** (medium) — heaviest pre-v5 page.
   Replace the accordion-leaf wrapper with a proper KPI strip + 3
   service-health cards + container metrics matching the live
   cockpit (`#/live`).

4. **Security page refactor** (medium) — currently embeds the
   8-area-shell mockup. Move to v5 first-class layout with the
   crimson-accent danger zones and audit-trail strip pattern.

5. **Widgets v5 chrome lift** (small) — content is already in v4
   shape; just needs the v5 admin-v2-head + kicker treatment.

6. **Effects chrome refresh** (small) — same as Widgets; the 8-card
   live preview is already v5-quality, the page frame around it is
   not.

7. **Desktop chrome decision** (designer task, not eng) — pick
   `admin-batch9.jsx` (TrayPopover + WindowPicker) or `desktop.jsx`
   as canonical. Currently engineering hasn't shipped either against
   v5.

Helpers (Toast, HudConfirm, Skeleton, Accordion, Mobile Nav, Reconnect
Banner) are component-level by design and don't need page-scale design
briefs.

## How this doc gets maintained

- Update on every sidebar/route IA change (this doc was triggered by
  the v5 IA merge — display nav removal in [12e4c90](https://github.com/guan4tou2/easy/commit/12e4c90)).
- Re-classify a row's status when its implementation lands a v5 refit
  PR.
- Drop "older prototype" rows to "final v5" only after the design
  source is updated to a batch10/v5-equivalent canvas (not just chrome
  tokenization).
