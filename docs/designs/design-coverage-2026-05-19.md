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
| `widgets`     | Desktop Widgets            | [admin-widgets.js](../../server/static/js/admin-widgets.js) | `admin-batch1.jsx` (legacy — see 🟡 row) |
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
| `overlay`     | Desktop 控制               | [admin-broadcast.js](../../server/static/js/admin-broadcast.js) | `admin-polestar.jsx` (DesktopControlPage) |

Also covered (deep-link only, no sidebar slug):

| Route | Page | Implementation | Design source |
|---|---|---|---|
| `sessions`        | 場次列表       | [admin-sessions.js](../../server/static/js/admin-sessions.js) | `admin-pages.jsx` (SessionsList) |
| `session-detail`  | 場次詳情       | [admin-session-detail.js](../../server/static/js/admin-session-detail.js) | `admin-pages.jsx` (SessionDetail) |
| `firetoken`       | Fire Token     | [admin-firetoken.js](../../server/static/js/admin-firetoken.js) | `admin-batch9.jsx` (FireTokenPage) |
| `wcag`            | WCAG 對比度    | [admin-wcag.js](../../server/static/js/admin-wcag.js) | `admin-pages.jsx` (WcagChecker) |
| `replay`          | 場次重播       | [admin-replay.js](../../server/static/js/admin-replay.js), [admin-history.js](../../server/static/js/admin-history.js) | `admin-pages.jsx` (ReplayPage) |
| `onboarding-tour` | 新手導覽       | [admin-onboarding.js](../../server/static/js/admin-onboarding.js) | `admin-pages.jsx` (OnboardingOverlay) |

### 🟡 older prototype — design exists but pre-v5 (0)

_2026-05-19 (PR #122) — Batch 12 cleared the older-prototype queue.
All 6 pages in this row got v5 chrome refreshes per batch12-*.jsx._

| Sidebar slug | Page | Implementation | Now-canonical design |
|---|---|---|---|
| (system overview accordion leaf) | System Overview | [admin-system-overview.js](../../server/static/js/admin-system-overview.js) | `batch12-system.jsx` SystemOverviewPage |
| (system security accordion leaf) | Security | [admin-security.js](../../server/static/js/admin-security.js) | `batch12-system.jsx` SecurityPage |
| `events` | 系統事件 | [admin-events-log.js](../../server/static/js/admin-events-log.js) | `batch12-system.jsx` SystemEventsPage |
| `effects` | 效果庫 .dme | [admin-effects-mgmt.js](../../server/static/js/admin-effects-mgmt.js) | `batch12-effects.jsx` |
| `widgets` | Desktop Widgets | [admin-widgets.js](../../server/static/js/admin-widgets.js) | `batch12-overlay-widgets.jsx` |
| Desktop chrome (tray popover) | Tray popover | [danmu-desktop/tray-popover.html](../../danmu-desktop/tray-popover.html) | `batch12-desktop-chrome.jsx` TrayPopover. **Partial implementation**: tray popover refit landed; Window Picker + Disconnected-state UI deferred (would require new Electron BrowserWindows). |

### 🔴 no dedicated design (0 main + N helpers)

_2026-05-19 — Help Drawer brief shipped in batch12-help.jsx and was
implemented in commit landing alongside this doc update. There are
no longer any main surfaces missing a design._

Helper-level surfaces still intentionally component-level only:

Helpers (component-level only, by design — not a gap):

- `Toast` ([toast.js](../../server/static/js/toast.js)) → `admin-pages.jsx` (component, not full page)
- `HudConfirm Modal` ([admin-hud-modal.js](../../server/static/js/admin-hud-modal.js)) → `admin-pages.jsx` (component)
- `Skeleton Loader` ([admin-skeletons.js](../../server/static/js/admin-skeletons.js)) → component
- `System Accordion` ([admin-system-accordion.js](../../server/static/js/admin-system-accordion.js)) → component
- `Mobile Bottom Nav` ([admin-mobile-nav.js](../../server/static/js/admin-mobile-nav.js)) → `admin-mobile-shell.jsx` (component)
- `Reconnect Banner` ([admin-reconnect-banner.js](../../server/static/js/admin-reconnect-banner.js)) → `admin-polish.jsx` (component-level mockup, intentional)

## Summary

**As of Batch 12 (2026-05-19, PR #122):**

- **Main pages with v5 final design**: 28/28 (≈ 100%)
- **Older prototype (functional, visually pre-v5)**: 0/28
- **Truly missing a dedicated design**: 0 (Help Drawer shipped)

Original baseline (this doc's first version):
- 22/28 final v5 (79%) → 28/28 (100%)
- 6/28 older prototype → 0/28
- 1/28 no design → 0/28

## Recommended next actions

All Batch 12 items shipped in PR #122. Remaining design follow-ups
are small / nice-to-have:

1. **Window Picker + Disconnected state UI** (Electron) — `batch12-
   desktop-chrome.jsx` has spec; engineering would need new Electron
   BrowserWindow + IPC wiring. Currently the tray popover refit shipped
   alone (sufficient for v1).

2. **Effects drop-zone polish** — `batch12-effects.jsx` spec'd a
   dashed cyan drop-zone card; we shipped library stats + stacking
   rules only. Drop-zone visual could be lifted from the plugin
   upload modal's Step 1 dropzone (already implemented).

3. **Widgets per-card v5 polish** — `batch12-overlay-widgets.jsx`
   has rich per-widget card spec (drag handle / L# layer chip /
   collapsed param chips). Shipped KPI strip + OBS source URL card
   only. Per-card refit would touch the existing edit-modal flow.

These are all polish — main IA / design coverage is complete.

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
