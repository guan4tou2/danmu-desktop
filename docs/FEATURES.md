# Danmu Fire — Feature Specification

**Status:** Canonical feature inventory (synced 2026-11-19 against v5.12.0; the admin IA and route map below are current, the 5.0.0 notes further down are a historical snapshot)
**Audience:** designers, PMs, Claude Design agents
**Pairs with:** [DESIGN.md](../DESIGN.md) (design tokens), [CLAUDE.md](../CLAUDE.md) (project rules)

---

## What's new in 5.1 → 5.12 (synced 2026-11-19)

One line per release, taken from [CHANGELOG.md](../CHANGELOG.md) (the authority; read it for upgrade notes).

- **5.1.0** (2026-05-18) — Polestar pivot: `#/broadcast` becomes `#/overlay`; replay annotations; time-bound viewer bans; polls with multiple questions and per-question images; font subsetting; viewer theme chip.
- **5.2.0** (2026-05-19) — Audience aggregation service and backup pack/unpack service; webhook event vocabulary v2; `/admin/search` gains `since`/`until`; help drawer; system overview and security page refit.
- **5.3.0 / 5.3.1** (2026-05-20) — Desktop client finalised; WebSocket delivery consolidated on the Flask `/ws` route; release artifacts are portable-only.
- **5.4.0** (2026-07-07) — UI/UX polish across desktop, viewer and admin (desktop remembers window position and size, viewer shows a disconnected banner, poll vote confirmation).
- **5.4.1 / 5.4.2** (2026-10-15/16) — Delivery tracking (displays report rendering; history separates forwarded, confirmed and unconfirmed); queued messages expire after 24 h; optional 30-day remembered admin login; admin password change survives container updates.
- **5.5.0** (2026-11-14) — Viewer colour palette configurable from admin; per-message "take down" in the live feed; plugin upload accepts `.py` only.
- **5.6.0** (2026-11-14) — Slido questions become danmu through the bundled Chrome extension (v0.3.0); live feed labels the message source; Fire token bypasses captcha and public rate limits; display controls unified.
- **5.7.0** (2026-11-14) — Sidebar reduced from 14 to 11 rows: security, backup and extensions become tabs of System.
- **5.8.0** (2026-11-14) — Viewer image settings (external images, allowed sites and formats); request size caps on public endpoints and WebSocket messages.
- **5.9.0** (2026-11-15) — Security hardening: `ALLOW_PLUGIN_UPLOAD`, backups exclude secrets by default, outbound webhook address checks, CSV formula escaping.
- **5.9.1** (2026-11-15) — Plugin upload is enabled by default again, including in production.
- **5.10.0** (2026-11-15) — Blocked words, temporary rules and the rule library merge into one persisted list; regex rules are test-run under a time limit when saved.
- **5.11.0** (2026-11-15) — "Viewer" page renamed Danmu style (彈幕樣式 in the sidebar): one page for themes, defaults and viewer-page appearance; theme font and viewer default colour now take effect.
- **5.12.0** (2026-11-15) — Time limit on regex matching of each message (shared 0.25 s budget; rules that cannot finish fail closed).

The sidebar is now 10 rows (5.11.0 merged Themes into Danmu style). Work after 5.12.0 is planned in [plans/2026-11-15-next-steps.md](plans/2026-11-15-next-steps.md).

---

## What's new in 5.0.0 + 2nd-wave (historical, synced 2026-05-05)

Historical snapshot. Several items below have since been renamed, moved or removed (notably the admin IA, see the route map). Full notes in [CHANGELOG.md](../CHANGELOG.md).

### First wave (commit `acca401` and earlier)
- **Soft Holo HUD design retrofit** across viewer / admin / overlay (10 admin pages: Webhooks, Emojis, Sounds, Scheduler, Stickers, Live Feed, Fonts, Replay, Security, Backup).
- **Admin bootstrap endpoint** — `GET /admin/bootstrap` replaces the 25-fetch boot wave with a single payload.
- **Per-rate-limit telemetry** — `/admin/metrics` now reports hits / violations per limiter.
- **Effects live preview** — inline preview on Effects cards for all 8 built-in `.dme` animations.
- **Rate Limits live-apply** — `POST /admin/ratelimit/apply` applies new caps without restart.
- **⌘K command palette** — keyboard navigation between admin routes.
- **Edge-state pages** — viewer offline, overlay connecting, admin lockout (4 P2 states retrofitted).
- **P0-0 admin IA consolidation** — (superseded; the current sidebar is 3 groups / 10 rows, see
  [Server admin route map](#server-admin-route-map--ui-pages).) Legacy route hashes alias into
  tabs or deeplink-only pages. Dedicated mobile-admin was removed; `/admin/` uses its
  normal responsive layout on phones.
- **`admin.js` modularised** — split into login + dashboard modules (since then split further; the admin JS is bundled into `server/static/js/admin.bundle.js`, see [CONTRIBUTING.md](../CONTRIBUTING.md)).

### Second wave (2026-04-25 PM, post-`acca401`)

Triggered by Claude Design fetching a refreshed handoff bundle (5 new admin components: `admin-display-settings`, `admin-polls`, `admin-ratelimits`, `admin-viewer-theme`, `priority-2-pieces`).

- **Polls multi-question session + per-question image upload (P0-1)** — schema bumped to `poll.questions[]`; `POST /admin/poll/<id>/upload-image/<qid>` (≤2 MB, JPG/PNG/WebP, magic-byte check, path-traversal guarded). Public `GET /polls/media/<path>`. Backward-compat preserved for legacy single-question callers.
- **Polls Live HUD + Results page** — active-state replaces Builder with CountdownRing + leader-gradient bars + queue mini + auto-advance toggle; ended-state shows winner callout + ranked bars + Participation/Timeline tiles + CSV/JSON/copy export rail (per-question Tab pagination).
- **Display Settings v2 redesign (P0-3)** — full rewrite from `<details>` accordion to `1fr / 340px` two-column grid: 6 flat table-rows (`OPACITY · FONT SIZE · SPEED · COLOR · FONT FAMILY · LAYOUT`) + right-rail PreviewCard (live 2-pill stage) / DeployCard / SummaryCard. FontSize uses 5 monospaced chips, Layout uses 5-tile glyph grid, Color uses prototype 8-color palette.
- **Stickers multi-pack model (P1-4 backend)** — `StickerPack {id, name, enabled, weight, order}` + `Sticker.pack_id` FK persisted to `runtime/stickers/{packs,stickers}.json`. Idempotent migration assigns existing stickers to a synthetic `default` pack. New endpoints `POST /admin/stickers/packs/{create,<id>/toggle,<id>/rename,<id>/reorder,<id>}` + `POST /admin/stickers/<name>/assign`.
- **Sounds per-tile inline volume (P1-2)** — per-sound volume 0..1 persisted to `runtime/sounds/sound_volumes.json`; trigger-rule volume cascades over per-sound default. Inline 100-px slider per Sound tile.
- **Effects user `.dme` live preview (P3-2 follow-up)** — user-uploaded `.dme` cards now animate too (was: builtin-8-only). Lazy-fetches `/admin/effects/<name>/content` + `/admin/effects/preview`, injects keyframes, observes IntersectionObserver for off-screen pause.
- **Desktop 控制 dedicated admin page (`/admin/#/overlay`, legacy `#/broadcast` alias; sidebar label now 顯示層 / Display)** — state strip with circular cyan dot + `DESKTOP · ON` + uptime/connections/messages meta + `■ 停止顯示` button (toggles to OFF); session lifecycle (start/end/archive) lives in `#/history/sessions`. Polestar 2026-05-18: 2-state Desktop display toggle replaces the legacy 4-state broadcast lifecycle.
- **Rate Limits enhancements** — LOGIN scope adds LOCKOUT seconds knob; per-scope 24-bar sparkline; `effective_rate = N/W · burst = round(N×1.5)` mono footer; bottom row gains ViolationsFeed (TIME / SCOPE / KEY / UA / HITS / [BLOCK]) + IpPolicyCard (DENY/ALLOW list).
- **Viewer Theme out-of-scope legend** — card under preview frame links to the right route per scope (彈幕色 → Theme Packs / 字級 → Display Settings / 效果 → Effects / 速率限制 → Moderation).
- **Viewer prototype parity sweep** — hero 2-col restored (left lockup + right ConnChip stack); single-language form labels; preview gradient + scanline; ConnChip `·` interpunct + `cyanSoft` online state; full-width `？` placeholder; Layout sub `右→左`; Hero font-size `clamp(3.2rem, 8vw, 6rem)` matching `HERO_SIZE.hero`.
- **Admin Login i18n alignment** — strings now match prototype literally (`管理後台登入` / `管理密碼` / `伺服器上線`); previous placeholder copy invented in commit `249d4bc` was replaced.

---

## Why this file exists

Designers keep inventing features that already exist under different names, or proposing new features the codebase does not support. This doc is the complete, frozen feature map. **Before adding any new card, modal, button, or section to a mockup, confirm the feature is listed here.** If it is not, it does not exist — raise it as a separate scope discussion, do not silently expand the design.

Product boundaries:
- **Danmu Fire = overlay controller for livestreams.** A streamer sends text, the text flies across an OBS Browser Source overlay. That is the job.
- **Not** a chat app, **not** a full CMS, **not** a streaming platform, **not** a payment tool. Do not design toward those.

### Product axes (v5.0.0 polestar — 2026-05-04)

| Axis | What it means | Primary surface |
|---|---|---|
| **發送 / Send** | Viewer types + fires a danmu in the shortest possible path | `server/templates/index.html` viewer page |
| **顯示 / Display** | Overlay renders danmu on stream / projector with stable WS connection | OBS Browser Source `/overlay` + Electron overlay child window |
| **效果 / Effects** | `.dme` keyframe bundles, themes, animations applied per-danmu | `server/effects/*.dme` + admin Effects page |
| **素材 / Assets** | Fonts, stickers, sounds, logos, theme packs | admin Assets page (集中管理) + `server/static/{stickers,emojis,sounds}` + `server/user_fonts/` |

Secondary (don't dilute the four axes above):

| Secondary | When it matters |
|---|---|
| **Polls** | Mid-stream interactive layer; viewer votes via A/B/C danmu, **never sees counts or percentages** |
| **Moderation** | Blacklist + filter rules + rate limits + fingerprint observability |
| **History / Audit / Notifications** | Post-event review; not on the live operating path |

Roles re-stated for v5.0.0:

- `server/viewer` = 觀眾發彈幕入口（only that）
- `server/admin` = 主播控制台（effects / assets / display 為主，polls / moderation 為輔）
- `client (Electron)` = 顯示端 (Overlay player) — connection + screen pick + show/hide/clear + status, **不是發彈幕入口、不是設定中心**

---

## Glossary

| Term | Meaning |
|---|---|
| **danmu / 彈幕** | A single scrolling message. Japanese "danmaku" / 子彈幕 lineage, ニコニコ動画 style. |
| **Overlay** | Transparent browser page loaded as an OBS Browser Source (or Electron child window) that renders danmu on top of the game/camera. |
| **Viewer** | Any visitor at `/` who types and fires a danmu. No login. |
| **Admin** | Password-gated operator at `/admin/`. Manages filters, themes, effects, history, automation. |
| **Desktop client** | Electron app (`danmu-desktop/`). Local display endpoint that connects to the server and hosts overlay windows on selected displays. |
| **Effect** (`.dme`) | YAML-defined CSS keyframe bundle. Hot-reloadable. |
| **Theme** | YAML bundle of `palette + font + layout + bg + effects_preset` flags. Hot-reloadable. |
| **Fingerprint** | SHA-256 of IP+UA used for rate limiting and moderation without persistent accounts. |

---

## User roles

Only four. Designs must respect them — no hybrid "power viewer" role etc.

| Role | How they arrive | What they can do |
|---|---|---|
| **Viewer** | Loads `/`, no auth | Type + fire danmu; pick color/opacity/size/speed/effects/font/layout from what admin allows |
| **OBS streamer** | Loads `/overlay` as OBS Browser Source | Render-only — no input UI |
| **Admin** | `/login` with password | Everything in `/admin/` — settings, moderation, content, automation, security |
| **API / plugin / webhook** | Machine callers | POST `/fire`, receive outbound webhooks, register plugins |
| **Desktop operator** | Runs the Electron app | Connect to the server, choose target display(s), show/hide/clear local overlay windows |

Viewers never log in. Admins never appear in the viewer UI. Desktop clients do not expose admin routes — the Electron app is a local overlay display endpoint, not a viewer surface or admin controller.

---

## Server features

Entry points live under `server/` (Flask app at the web port, with WebSocket at `/ws` on the same port). Public routes are in `server/routes/` (`api.py`, `main.py`, `health.py`); admin routes are the `server/routes/admin/` package, one domain per file. See [ARCHITECTURE.md](ARCHITECTURE.md).

### 1. Danmu lifecycle

The primary flow. Everything else exists to shape or gate this.

| Capability | Route / module | Scenario |
|---|---|---|
| Fire a danmu | `POST /fire` ([server/routes/api.py](../server/routes/api.py)) | Viewer / API caller / plugin submits text + optional style; server validates → filter → history → broadcast |
| List rendering options | `GET /get_settings`, `/fonts`, `/themes`, `/effects`, `/layouts`, `/emojis`, `/stickers` | Viewer page populates dropdowns |
| Overlay connection count | `GET /overlay_status` | Shows streamer if at least one overlay is listening |
| Generate avatar | `GET /avatar/<letter>/<color>` | Inline SVG placeholder for usernames |
| Serve uploaded fonts | `GET /user_fonts/<filename>?token=…` | Signed token, 900s default TTL |
| WS broadcast | `ws://host:port/ws` or `wss://host/ws` | Same web origin — pushes `danmu`, `widget_sync`, `poll_update`, `blacklist_update`, `metrics` messages to overlays |

**Rate limits:** `/fire` is 20/60s per IP by default. `/fire` returns 503 immediately if zero overlays are connected. Designs that show a "Fire" button must handle both states (throttled, no overlay).

### 2. Admin settings (the dashboard's core)

Admin sets *defaults + ranges* for viewer-side sliders, edited on the 彈幕樣式 page (`#/viewer`): one row per property with a "viewers can change" switch. The set is fixed — **do not invent new settings**.

| Key | Type | Purpose |
|---|---|---|
| `Color` | hex string | Default text color |
| `Opacity` | int 0–100 | Default text opacity % |
| `FontSize` | int 20–100 | Default font size (px) |
| `Speed` | int 1–10 | Default scroll speed multiplier |
| `FontFamily` | string | Default font (NotoSansTC + uploads + system) |
| `Effects` | string[] | Default stacked effects |
| `Layout` | enum (scroll / top / bottom / float / rise) | Display mode (5 layouts) |
| `Nickname` | string | Default display name |
| `ViewerThemeMode` | `[true, mode]` | Force the viewer page light / dark, or `auto` (follow `prefers-color-scheme`) |
| `ViewerLangMode` | `[true, mode]` | Force the viewer page language (zh / en / ja / ko), or `auto` |
| `ViewerFireCooldownSec` | `[true, sec]`, float 0–10 | Client-side cooldown after a successful `/fire`; 0 disables (set from the 發送上限 tab) |
| `ViewerColorPicker` | `[bool]` (default `[true]`) | Whether viewers may pick their own colour (the palette itself is configured in admin, up to 64 colours) |

Stored in `server/runtime/settings.json`. See `SETTABLE_OPTION_KEYS` in [server/config.py](../server/config.py).

### 3. Moderation

| Capability | Route / module | Scenario |
|---|---|---|
| Live feed | [admin-live-feed.js](../server/static/js/admin-live-feed.js), `GET /admin/live-feed/recent`, `POST /admin/live/block` | Real-time scroll of incoming danmu on `#/live`; take down a single message, open message detail, block by fingerprint / keyword |
| Review queue | `/admin/modqueue/{list,approve,reject,bulk}` | Messages matched by a rule with action `review` wait here for approval |
| Viewer bans | `/admin/mod/bans/{list,add,remove}` | Time-bound bans on a viewer (fingerprint) |
| History | `GET /admin/history`, `/history/clear`, `/history/export` | Paginated log (10K cap, 24h cleanup); CSV export |
| Hourly + top-text stats | `GET /admin/stats/hourly`, `/stats/top-text` | Retrospective charts |
| Blocked words (封鎖字) | `/admin/blacklist/{add,get,remove}` | Since 5.10.0 the word list, temporary rules and rule library are one persisted list in the filter engine (`runtime/filter_rules.json`); these routes are the quick-block entry points |
| Filter engine | `/admin/filters/{list,add,update,remove,test,events,clear-session}` | Rule types (`FILTER_RULE_TYPES`): word / keyword / regex / replace / rate_limit / fingerprint; actions block / replace / allow / review; lifetime permanent / session / timed. Regex and replace rules are time-limited (5.12.0) |
| Fingerprint observatory | `/admin/fingerprints`, `/fingerprints/reset` | LRU 1000 records, per-fingerprint msgs / rate / block count / state (active, flagged, blocked); shown with viewer bans on the 被封鎖的觀眾 tab |
| Audience | `/admin/audience/{list,stats,flag,kick,unkick}`, `/audience/<fp>` | Aggregated per-fingerprint view with flag / kick (history › 觀眾) |
| Replay | `/admin/replay/{status,pause,resume,stop}`, `/admin/replay`, `/replay/annotations` | Replay a past session (started from the session export panel) with a global pause/stop bar; annotations on a session |
| Send limits | `#/moderation/ratelimit`, `GET /admin/ratelimit/config`, `POST /admin/ratelimit/apply`, `POST /admin/ratelimit/reset`, `/admin/ratelimit/ip-rules`, `/admin/api/onscreen-limits`, setting `ViewerFireCooldownSec` | One form — who the limit applies to (each viewer per IP, each device, whole room) + how many + per how long — plus cooldown after send (0–10 s) and how many danmu may be on screen at once (drop or queue when full). Folded below: the other request limits (general requests, admin panel, login attempts, Fire Token lane) in the same form, the IP allowlist/denylist, and recently blocked requests with sizing suggestions. Every value shown is the server's; saved limits persist in `runtime/rate_limits.json` and override the env vars; "Reset all" returns to the startup values. A 429 carries `Retry-After`. |

### 4. Content bundles

Admin uploads and toggles content that viewers / overlays can use. Hot-reloadable where noted.

| Bundle | Files | Admin routes | Hot-reload |
|---|---|---|---|
| Themes | `server/themes/*.yaml` (default, neon, retro, cinema) | `/admin/themes[/active,/reload]` | Yes |
| Effects | `server/effects/*.dme` (blink, bounce, glow, rainbow, shake, spin, wave, zoom + custom) | `/admin/effects[/<name>/content,/save,/upload,/delete,/preview]` | Yes (mtime) |
| Fonts | `server/user_fonts/` (.ttf/.otf/.woff2) | `/admin/fonts`, `/admin/upload_font`, `DELETE /admin/fonts/<name>` | Yes |
| Sounds | `server/static/sounds/` + `sound_rules.json`, `sound_volumes.json` | `/admin/sounds/{list,upload,delete,rules/{add,remove}}`, `/admin/sounds/<name>/volume` | Yes |
| Stickers | `server/static/stickers/` + pack metadata `runtime/stickers/` | `/admin/upload_sticker`, `/admin/stickers/<name>[/assign]`, `/admin/stickers/packs[/create,/<id>[/toggle,/rename,/reorder]]` | Yes |
| Emojis | `server/static/emojis/` | `/admin/emojis/{list,upload,delete}` | Yes |

Theme bundle flags (`palette / font / layout / bg / effects`) drive the admin badge UI. Example: `neon` bundles all five; `default` bundles none. Per-theme overrides (font, viewer default colour) live in `runtime/theme_overrides.json` (`/admin/themes/<name>/overrides`); since 5.11.0 they take effect as defaults. Themes are managed at the top of the 彈幕樣式 page (`#/viewer/themes`).

### 5. Automation

| Capability | Routes | Scenario |
|---|---|---|
| Scheduler (System › Extensions, collapsed block) | `/admin/scheduler/{list,create,pause,resume,cancel}` | Timed repeating danmu (e.g. "訂閱頻道!" every 5 min); max 20 jobs |
| Polls | `/admin/poll/{create,start,advance,status,end,reset}` + `POST /admin/poll/<id>/upload-image/<qid>` + public `GET /polls/media/<path>` | Multi-question session: each question has 2–6 options (A/B/C/D…) + optional image (≤2MB, JPG/PNG/WebP). Live vote counts broadcast to overlays and admin. **Viewer poll tab shows only the question and option keys/text; counts and percentages are admin-only.** Legacy single-question shape still supported. |
| Widgets (`#/widgets`) | `/admin/widgets/{list,create,update,delete,score,clear}` | Overlay widgets: scoreboard / ticker / label with position presets; persisted in `runtime/widgets.json` |

### 6. Extensions

| Capability | Routes / directory | Scenario |
|---|---|---|
| Webhooks (outbound) | `/admin/webhooks/{list,register,unregister,test}` | Forward fired danmu to Discord / Slack / custom JSON; signature-verified |
| Webhook (inbound) | `POST /admin/webhook/incoming/<hook_id>` | External service can fire danmu via signed webhook |
| Plugins | `server/plugins/` (bundled examples) + `server/user_plugins/` + `/admin/plugins/{list,enable,disable,reload,uninstall,upload,console}` | Python plugins (`.py` only) with hooks `on_fire`, `on_connect`, `on_disconnect`, `on_poll_vote`, `on_startup`, `on_shutdown`; upload is controlled by `ALLOW_PLUGIN_UPLOAD` (enabled by default). See [server/PLUGIN_GUIDE.md](../server/PLUGIN_GUIDE.md) |
| API tokens | `/admin/api-tokens[/<token_id>]` | Machine-caller tokens for the API (System › Extensions) |
| Fire token | `/admin/integrations/fire-token[/regenerate,/revoke,/usage,/audit]` | A token that lets an integration call `/fire` without captcha or public rate limits; filtering, review, bans and the on-screen cap still apply |
| Slido bridge | [slido-extension/](../slido-extension/README.md), `/admin/integrations/slido/status`, `/admin/integrations/sources/recent` | Chrome MV3 extension (v0.3.0, unofficial) read from the host's open Slido event page; new questions are sent to `/fire` with `X-Fire-Source: slido`. Anonymous questions show as "Slido" with no participant id (can be taken down or keyword-blocked, not person-blocked); named ones carry `slido:<id>`. The admin status card shows waiting / receiving / error states. The extension zip is built by `server/scripts/build_slido_extension_zip.py` |

### 7. Security surface

Designers should show these controls on the admin UI but **never invent new ones**.

| Feature | Route / module | Config |
|---|---|---|
| Login | `POST /login`, rate-limited 5/5min by default (`LOGIN_RATE_LIMIT` / `LOGIN_RATE_WINDOW`, adjustable under Send limits) | Runtime password hash takes priority over `ADMIN_PASSWORD_HASHED` / `ADMIN_PASSWORD`; optional 30-day remembered session; the wrong-password hint and lockout countdown use the limit in effect |
| Change password | `POST /admin/change_password` | Atomically writes bcrypt to `runtime/admin_password.hash` and revokes existing logins |
| CSRF | Token in session, `<meta name="csrf-token">`, `X-CSRF-Token` header | `SESSION_COOKIE_SAMESITE=Strict` |
| Request rate limits | `#/moderation/ratelimit`, `/admin/ratelimit/config`, `/apply`, `/reset` | Seven scopes: fire (per IP) / fire_fingerprint / fire_global / fire_admin (Fire Token lane) / api / admin / login; in-memory or Redis counters; saved from the admin panel to `runtime/rate_limits.json`, applied without restart. The three endpoints are not charged against the admin limit, so a limit set too low can always be raised again |
| WebSocket auth | `#/system/security`, `/admin/ws-auth[/rotate]` | Bearer token stored in `runtime/ws_auth.json` |
| Security settings | `/admin/security/settings`, `/admin/security/revoke-api-tokens` | Admin IP allowlist, runtime CORS policy, TLS/HSTS status summary (`runtime/security_settings.json`) |
| Backup / restore | `/admin/backup/{export,import,manifest,factory-reset}`, `/admin/backup/assets/{export,import,manifest}` | System › Backup. Exports exclude the Fire token, display WS token and webhook URLs/secrets unless "include credentials" is ticked (5.9.0) |
| Trusted Hosts + ProxyFix | `TRUSTED_HOSTS`, `TRUST_X_FORWARDED_FOR` | Server-level config, not admin UI |
| CSP + HSTS | `app.py` | Nonce per request; HSTS opt-in for prod |

### 8. Observability

| Capability | Route |
|---|---|
| Health probes | `GET /health`, `/health/ready`, `/health/live` (Kubernetes-style) |
| Metrics | `GET /admin/metrics` (uptime, msg count, client count, per-limiter hits / violations) |
| Admin bootstrap | `GET /admin/bootstrap` (single-payload boot data — replaces 25-fetch fan-out) |
| Live feed (see §3) | WS push + admin UI |

---

## Server admin route map → UI pages

The sidebar is 3 groups and 10 rows (5.11.0). The single sources of truth are
`EXPECTED_NAV_ORDER` in
[test_admin_sidebar_ia.py](../server/tests/test_admin_sidebar_ia.py), `ADMIN_ROUTES` in
[admin.js](../server/static/js/admin.js) and `TabConfig` in
[admin-tabs.js](../server/static/js/admin-tabs.js); labels come from
`server/static/locales/{zh,en}/translation.json`. **Do not add new sidebar rows**;
new content goes into an existing page or tab. Group labels: 活動中 / In session,
外觀與素材 / Look & assets, 系統 / System.

| Group | Route hash | Label (ZH / EN) | Contents |
|---|---|---|---|
| 活動中 | `#/live` | 控制台 / Dashboard | Live feed, KPI strip, quick actions |
| 活動中 | `#/overlay` | 顯示層 / Display | Desktop display on / pause, clear screen, display layout |
| 活動中 | `#/polls` | 投票 / Polls | Poll builder, active session, results; deep-dive at `#/poll-deepdive` |
| 活動中 | `#/moderation` | 審核 / Moderation | Tabs: `queue` 審核佇列 / Queue, `blacklist` 封鎖字 / Blocked words (default), `bans` 被封鎖的觀眾 / Blocked viewers (bans + fingerprints), `ratelimit` 發送上限 / Send limits |
| 外觀與素材 | `#/viewer` | 彈幕樣式 / Danmu style | One page, no tab strip: themes, style table (default + range + "viewers can change" per property), viewer-page appearance, limits. Second URL segment scrolls to a block: `themes`, `defaults`, `fields`, `page`, `limits` |
| 外觀與素材 | `#/effects` | 動畫效果 / Effects | Effect library and `.dme` management / preview |
| 外觀與素材 | `#/assets` | 素材 / Assets | Tabs: `emojis` 表情 / Emoji (default), `stickers` 貼圖 / Stickers, `fonts` 字型 / Fonts, `sounds` 音效 / Sounds |
| 外觀與素材 | `#/widgets` | 小工具 / Widgets | Overlay widgets: scoreboard, ticker, label |
| 系統 | `#/system` | 系統 / System | Tabs: `overview` 概覽 / Overview (default), `security` 安全 / Security, `backup` 備份與還原 / Backup & restore, `integrations` 擴充 / Extensions, `firetoken` Fire Token, `wcag` 無障礙 / Accessibility, `about` 關於 / About |
| 系統 | `#/history` | 紀錄與匯出 / Records & export | Tabs: `sessions` 場次 / Sessions (default), `audience` 觀眾 / Audience, `search` 搜尋 / Search, `audit` 操作紀錄 / Activity log |

The 擴充 tab opens on the integration catalogue (Slido, Fire token); Webhooks,
Plugins, API keys and Scheduler are collapsed blocks inside it
(`#/system/webhooks`, `#/system/plugins`, `#/system/api-tokens`,
`#/system/scheduler` open the tab and expand that block).

Legacy hashes still resolve through the alias tables in `admin.js`
(`_bareLegacyRedirects`, `_routeAliases`) and are scheduled for removal; they log a
console notice once per slug. Examples: `#/dashboard` / `#/messages` → `#/live`,
`#/themes` / `#/appearance` / `#/viewer-config` / `#/display` → `#/viewer`,
`#/ratelimit` / `#/filters` / `#/modqueue` / `#/modbans` / `#/fingerprints` →
`#/moderation/...`, `#/fonts` → `#/assets/fonts`, `#/audit` → `#/history/audit`,
`#/security` / `#/backup` / `#/integrations` / `#/extensions` / `#/firetoken` /
`#/automation` / `#/mobile` → `#/system/...`, `#/broadcast` → `#/overlay`.
`#/replay` still resolves to `#/history` but the replay tab no longer exists
(replay controls are a global pause/stop bar).

Deeplink-only routes (not in the sidebar) remain in `ADMIN_ROUTES`:
`#/notifications` (opens the bell panel), `#/setup`, `#/poll-deepdive`,
`#/session-detail`, `#/onboarding-tour`, `#/events`, and standalone entries for
`#/sessions`, `#/search`, `#/audience`, `#/wcag`, `#/about`. Section IDs
(`sec-...`) are stable identifiers.

---

## Desktop client features

The Electron app at [danmu-desktop/](../danmu-desktop/) has two windows. Treat them as separate products with one shared store.

### 1. Main window (`index.html`) — display controller (v5.0.0+)

> **Re-positioned in v5.0.0:** the desktop client is the **顯示端 / Overlay
> player**, not a remote control panel. Display tuning (opacity / speed /
> font / color / stroke / shadow / track count) lives in **`/admin/`**,
> not here. The client currently has three sidebar tabs total: Connection,
> Overlay, and About.

**Connection** (sidebar `連線 / CONNECTION`, default tab on first run)
- Server host (IP or hostname) + port input
- WebSocket auth token (optional, paste-only — admin generates via
  `/admin/` → WebSocket token auth section)
- Test connection button — opens `wss://${host}:${port}/ws` and reports
  pass/fail (matches the actual runtime URL since v5.0.0)
- Recent servers list (persists last successful host)
- Connection status badge (idle / connecting / connected / disconnected
  / failed) + reconnect count / uptime metrics

**Overlay** (sidebar `Overlay / DISPLAY`)
- Display target chips backed by `API.getDisplays()`
- Sync multi-display checkbox (spawn one overlay per display)
- One primary runtime control:
  - `開啟 / 關閉 Overlay` button — spawns/closes the overlay child window + WS
- One secondary action:
  - `⌫ 清空畫面` — sends `overlay-clear` IPC to every overlay window so
    they drop currently-rendering danmu **without disconnecting WS**
- Note panel reminding the user that danmu styling (font / color / size /
  opacity / speed / layout / effects) lives in the viewer + admin, not
  here

**About** (sidebar `關於 / ABOUT`)
- Version, platform, GitHub link, license
- Update check / download progress / restart-to-install actions

**Persisted state** (localStorage `danmu-settings`)
- `host`, `port`, `displayIndex`, `syncMultiDisplay`, `wsToken`
- (No `useWss` field since v5.0.0 — wss is the only path.)
- (No display-tuning fields — those are server-side admin settings.)

**Removed in v5.0.0** (was in the old controller; now lives in admin or
was deprecated):
- ✗ Opacity / speed / font-size / color / stroke / shadow sliders
- ✗ Display-area top / height masks, max tracks, collision detection
- ✗ Test danmu input, batch test
- ✗ Startup animation (LINK START / 領域展開 / custom) UI controls
- ✗ Export / import settings buttons (will likely return as Advanced)
- ✗ "Use WSS" checkbox (always wss now)

### 2. Overlay window (`child.html`) — display role

Render-only. No user input. Spawned by the main window.

- Frameless, transparent, click-through
- Positioned to match selected display bounds (fullscreen)
- Receives danmu over **`wss://${host}:${port}/ws`** (same HTTPS/web port as admin/viewer)
- Self-signed cert auto-trusted via `trusted-wss-hosts` registry (scoped to current `host:port` only — never global)
- Track manager assigns each danmu to a collision-aware lane
- Applies admin-side display-area mask (top + height %) when configured server-side
- HUD label bottom-right shows active danmu count
- Heartbeat every 15s; reconnects with exponential backoff 3–30s, max 10 attempts
- Listens for `overlay-clear` IPC from main → drops `.danmu / .danmu-wrapper / h1.danmu` nodes without touching WS
- Plays startup animation (LINK START / 領域展開 / custom) once per spawn — settings come from `loadStartupAnimationSettings()` localStorage default; UI controls were removed from main window in v5.0.0
- Konami code (↑↑↓↓←→←→BA) on main window triggers an effect on all children

### 3. Main process + tray

- Tray icon + context menu (status snapshot / show control window / About / Quit)
- Auto-updater UX via `electron-updater` — checks GitHub Releases on startup
  (10s delay) and every 4h where platform updater metadata is published.
  Current policy publishes macOS ZIP metadata only; Windows updater metadata is
  intentionally unpublished while Windows remains portable-only.
- About window (`about.html`) — version + GitHub link
- IPC surface (preload bridge) — see channels in [ipc-handlers.js](../danmu-desktop/main-modules/ipc-handlers.js); do not add new channels without extending preload

### 4. Packaging

Electron-builder produces portable-only release artifacts: Windows portable x64
`.exe`, macOS arm64 `.zip`, and Linux AppImage + `.deb`. GitHub Releases publish
macOS ZIP updater metadata; Windows updater metadata is intentionally
unpublished while Windows remains portable-only.

---

## End-to-end scenarios

These are the canonical flows. Designs should cover all of them, and **only** these.

### Scenario A — Streamer preparing to go live (v5.0.0)
1. Launch desktop app → Connection tab accepts host/port → "Test connection" runs `wss://${host}:${port}/ws` against the configured server
2. Pick display in the Overlay tab → click `開啟 Overlay` → overlay child window spawns on chosen display
3. Open `/admin/` (browser, not in client) → pick theme → adjust default Color / Speed / FontSize → activate effects
4. Send a real danmu from `/` (or another viewer) to confirm rendering. **Test danmu UI no longer in client — that moved to admin.**

### Scenario B — Viewer fires a danmu
1. Visit `/`
2. Type text → optional tweaks (color / effects / nickname) within admin-set ranges
3. Press Fire → danmu appears on overlay within ~100ms

### Scenario C — Admin handles spam
1. Spot bad danmu in the `#/live` feed
2. Take the message down, or block it → adds a fingerprint rule / ban OR adds the keyword to the blocked-word list
3. Optional: open `#/moderation/bans` → see viewer bans and fingerprint rate / block count / state chip

### Scenario D — Mid-stream poll
1. `#/polls` → create question + 2–6 options (A/B/C/D…)
2. Overlays broadcast poll UI (widget)
3. Viewers vote via danmu text matching option label; **viewer never sees counts or percentages**
4. Admin ends poll → results pushed to overlay

### Scenario E — Scheduled promo
1. `#/system/scheduler` (System › Extensions › Scheduler block) → create job ("訂閱頻道!" every 300s)
2. Server fires the message on interval while stream is live
3. Pause / resume / cancel as needed

### Scenario F — Webhook-driven danmu
1. Admin registers inbound webhook → copies signed URL
2. External service (bot / CI / Twitch EventSub) POSTs to `/admin/webhook/incoming/<id>`
3. Server verifies signature → fires danmu

### Scenario G — Power-off
1. Admin exports a backup if needed (`#/system/backup`) and ends the session (`POST /admin/session/close`; session list at `#/history/sessions`)
2. Streamer closes desktop app → tray quit → child windows auto-close

---

## Persistence map

Where state lives. Useful when designing sections that imply "save" / "restore" / "reset" affordances.

| Store | Path | Lifetime |
|---|---|---|
| Settings | `server/runtime/settings.json` | Persistent |
| Filter rules (blocked words included) | `server/runtime/filter_rules.json` | Persistent |
| Webhooks | `server/runtime/webhooks.json` | Persistent |
| WS auth | `server/runtime/ws_auth.json` (chmod 0o600) | Persistent |
| Fire token / API tokens | `server/runtime/fire_token.json`, `server/runtime/api_tokens.json` | Persistent |
| Admin password hash | `server/runtime/admin_password.hash` (chmod 0o600; migrates legacy `server/.admin_password.hash`) | Persistent |
| Widgets | `server/runtime/widgets.json` | Persistent |
| Display layer / theme overrides / viewer images / security settings | `server/runtime/display_layer.json`, `theme_overrides.json`, `viewer_images.json`, `security_settings.json` | Persistent |
| On-screen limits / IP rate-limit rules / viewer bans | `server/runtime/onscreen_limits.json`, `ratelimit_ip_rules.json`, `moderation_bans.json` | Persistent |
| Plugin enable state | `server/runtime/plugins_state.json` (migrates legacy `server/plugins/plugins_state.json`) | Persistent |
| Danmu history | `server/runtime/danmu_history.jsonl` (rotates to `.1`; client IP not written by default) plus an in-memory deque (10K cap) that serves reads | Persistent file + in-memory view |
| Sessions | `server/runtime/active_session.json`, `sessions_archive.jsonl` | Persistent |
| Broadcast / queue state | `server/runtime/broadcast.json`, `broadcast_queue.json` | Persistent |
| Audit log / replay annotations / audience | `server/runtime/audit.log`, `replay_annotations.log`, `audience.json` | Persistent |
| Sticker pack metadata | `server/runtime/stickers/*.json` | Persistent |
| Uploaded fonts | `server/user_fonts/*.ttf\|otf\|woff2` | Persistent (gitignored) |
| Sound rules / volumes | `server/static/sounds/sound_rules.json`, `sound_volumes.json` | Persistent |
| Uploaded plugins | `server/user_plugins/*.py` (bundled examples in `server/plugins/`) | Persistent |
| Themes | `server/themes/*.yaml` | Read-only + hot-reload |
| Effects | `server/effects/*.dme` | Read-write + hot-reload |
| Request rate limits saved in the admin panel | `server/runtime/rate_limits.json` | Persistent; overrides the env vars. Counters and blocked-request history are in memory |
| Fingerprints | in-memory LRU 1000 | Volatile |
| Polls / scheduler jobs | in-memory | Volatile |
| Desktop settings | `localStorage[danmu-settings]`, `[danmu-display-settings]`, `[danmu-startup-animation]` | Per-user-profile |

---

## Non-features (DO NOT design these)

These do not exist and are out of scope. If a mockup implies one of these, flag it back before building.

- ❌ User accounts / sign-up / profiles (viewers are anonymous)
- ❌ Payments, tips, subscriptions, Stripe / 金流
- ❌ Multi-tenant / per-stream isolation (one server = one streamer)
- ❌ Video recording, VOD, clip export
- ❌ Chat (two-way conversations) — danmu is one-shot, fire-and-forget
- ❌ DM / private messages between viewers
- ❌ Emoji reactions on danmu (no upvote / heart / reply)
- ❌ AI moderation / LLM summarization (filter engine is deterministic)
- ❌ Analytics beyond hourly + top-text charts (no funnels, no segments, no retention)
- ❌ Mobile app (desktop client is Electron only; web viewer works on mobile browser but not packaged)
- ❌ Multi-language danmu translation
- ❌ Push notifications to external devices
- ❌ Role-based permissions — there is exactly one admin password
- ❌ Version history / undo for settings or filter rules
- ❌ Cloud sync between desktop installs

If a designer wants one of these, it is a **new product scope** and needs explicit approval, not a stealth addition to a mockup.

---

## How to use this doc

1. **Before designing a new screen**: find the matching capability above. If not found, stop and discuss scope.
2. **When proposing a rename**: use the canonical term in the left column of the tables. Do not rename `Effects` to "Animations" etc.
3. **When adding a section to a mockup**: it must map to one of the 10 sidebar rows (or a tab / collapsed block inside one) or one of the deeplink-only routes listed above. Do not invent a new one.
4. **When showing flows**: use the 7 scenarios above as the storyboard backbone.
5. **When in doubt about what persists**: check the persistence map. Volatile state should not have a "Reset" button unless the data visibly accumulates (fingerprints, history, widgets).

Last sync: 2026-11-19 against the current workspace, `APP_VERSION = 5.12.0`. The desktop-client sections were not re-audited in this pass and still describe v5.0.0 behaviour.
