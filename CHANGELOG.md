# Changelog

所有重要的變更都會記錄在此文件中。

格式基於 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.0.0/)，
版本號遵循 [Semantic Versioning](https://semver.org/lang/zh-TW/)。

## [Unreleased]

(no items pending)

## [5.0.0] - 2026-05-04

**Design v2 Retrofit + P0-0 IA Migration + Polestar Lock-in** — first
v5 release to main. Two phases on the same branch:
**Phase A** ships the Soft Holo HUD aesthetic across admin / viewer /
overlay + a long tail of admin features (multi-pack stickers, multi-
question polls, dedicated broadcast / fonts / audit pages, etc.).
**Phase B** consolidates admin nav from 32 routes to the P0-0 final
shape: 10 top-level buttons (dashboard / polls / effects / moderation
/ widgets / appearance / assets / automation / history / system) +
standalone 安全. The polestar was locked 2026-05-04 in the
office-hours session: **single presenter, mid-size event, interaction
+ atmosphere**. All `/admin/*` endpoints preserved; old hash URLs
redirect via aliases so bookmarks keep working. Branch
`claude/design-v2-retrofit` accumulated 200+ commits over 4 design
handoff rounds + 8 engineering slices + cross-platform Electron
polish + i18n unification.

### 新增 / Added — IA migration

- **P0-0 sidebar collapsed to 10 P0-0 nav buttons + 安全**
  ([f74a771](#) Slice 1, [f40d179](#) Slice 4, [9a375a7](#) Slice 6).
  `dashboard` / `polls` / `effects` / `moderation` / `widgets` /
  `appearance` / `assets` / `automation` / `history` / `system` —
  4 of these (moderation / appearance / automation / history) are
  tabbed; `system` is an accordion of 8 leaves (setup / firetoken /
  api-tokens / backup / integrations / wcag / mobile / about).
- **Hash deep-linking** ([98161c6](#) Slice 2): `#/<nav>/<tab>` deep
  links work end-to-end. `window.AdminRouter.{parseHash, buildHash,
  tabMemory, aliases}` exposed for module use. Tab choice persists
  per-nav in `sessionStorage`.
- **Tab container shared component** ([82c6338](#) Slice 3) —
  `server/static/js/admin-tabs.js`, ~200 LoC. Used by 4 tabbed nav
  routes. Each tab can map to a single section ID or a list of section
  IDs (e.g. `history/replay` spans 3 sections). `applyTabSectionVisibility`
  hides inactive tabs even after MutationObserver re-fires.
- **System accordion shell** ([9a375a7](#) Slice 6) — `server/static/
  js/admin-system-accordion.js`, ~120 LoC. Vertical accordion with
  single-open semantics, `sessionStorage` memory of last-open section.
- **11 legacy URL aliases redirect to new nav+tab** ([f40d179](#)
  Slice 4 + [9a375a7](#) Slice 6): `audit / sessions / search / audience`
  → `history/<tab>`; `themes / viewer-config / fonts` → `appearance/<tab>`;
  `scheduler / webhooks / plugins` → `automation/<tab>`; `ratelimit /
  fingerprints` → `moderation/<tab>`; `firetoken / api-tokens / backup
  / integrations / wcag / mobile / about` → `system/<tab>`. Aliases
  carry `{nav, tab}` so the leaf tab gets activated automatically.
- **Q3 reversible-action feedback** ([9282c34](#) Slice 5) —
  `server/static/js/admin-quick-action.js`. Toast (universal) + inline
  green undo bar (only when reversible) per decisions-log-may04 Q3 rule.
  First wired into blacklist add: success → toast + ↶ button; click ↶ →
  POST `/admin/blacklist/remove` + "已撤銷" toast. Auto-dismiss after 5s.
- **Backend Gap 2 — `POST /admin/effects/<name>/fire`** ([daa6080](#)
  Slice 7): broadcasts `effect_pulse` payload to overlay clients +
  admin WS so dashboard live-console can echo "fired ✓" toast. Bypass
  STANDBY gate (non-danmu payload). target = `banner` | `next-danmu`,
  duration_ms clamped [200, 8000], audited.
- **Backend Gap 3 — `POST /admin/broadcast/send`** ([daa6080](#)
  Slice 7): admin pushes danmu directly to overlay, bypasses
  rate-limit + filter + STANDBY gate (operator messages aren't
  audience traffic). Marked `source: "admin"` + nickname "ADMIN" for
  overlay styling. Text 1–500 chars, no control chars.
- **`/admin/bootstrap` adds `session` + `audit` sections**
  ([1060bf7](#)) — live-console dashboard topbar (session selector)
  and notification bell (system events) read from first-paint payload.
  History tab (audit/sessions/audience deep-pages) stays B-tier
  on-demand.
- **`shell.dataset.activeLeaf`** ([c0be5fc](#) Slice 8) — canonical
  leaf slug (active tab if tabbed/accordion'd, else top route) for
  legacy `admin-*.js` modules to read. 10 modules updated to use it
  (admin-audit / admin-audience / admin-backup / admin-broadcast /
  admin-mobile / admin-notifications / admin-poll-deepdive /
  admin-search / admin-sessions).

### 修改 / Changed — IA + UX polish

- **Telemetry MEM display** ([263894a](#)): switched from absolute
  `5764 MB` (no context, arbitrary 1024 MB threshold) to `80%`
  matching CPU's format. `vm.percent` now drives bar fill (real
  pressure %, warn at ≥90%). Hover tooltip carries `5.5 / 16.0 GB used`
  for absolute context. `mem_total_mb` exposed via `/admin/metrics`.
- **Topbar admin** ([f74a771](#)–[c0be5fc](#)): removed legacy
  backstage panel toggle + collapsible panel; Slice 1's flat IA
  superseded it. ~50 lines of CSS + JS deleted.
- **Dashboard kept AdminV3SoftHolo panel grid** — owner reviewed the
  alternate "live-console" handoff layout and rejected as overpacked
  at 1440×900 (60% feed + 40% stacked quick-action zones + sidebar).
  Existing 12-col 3-row grid (KPI strip / 進行中投票 + 快速投票 /
  即時訊息 + Widgets) kept as-is.

### 新增 / Added — Design batch (pre-IA, pre-deployed at `609108d`)

- **Stickers 多 pack 模型 (P1-4 後端)**：`services/stickers.py` +
  `StickerPack {id, name, enabled, weight, order}` + `Sticker.pack_id`
  FK；持久化到 `runtime/stickers/{packs,stickers}.json`；首次載入時
  migrate 既有 stickers 到 `default` pack（idempotent）。新 endpoint
  集合：`/admin/stickers/packs/{create,<id>/toggle,<id>/rename,
  <id>/reorder,<id>}` + `POST /admin/stickers/<name>/assign`。
  Admin UI sidebar 顯示真 pack 列表 + 增改刪。([12f0e22](#))
- **Sounds per-tile inline volume (P1-2 後續)**：`services/sound.py`
  per-sound volume 0..1 持久化到 `runtime/sounds/sound_volumes.json`；
  rule volume 仍會覆蓋。`POST /admin/sounds/<name>/volume`。每張
  Sound tile 加 100px 滑桿。([12f0e22](#))
- **Effects user .dme live preview (P3-2 後續)**：用戶上傳的 .dme 卡
  片現在也會即時動畫(原本只有 8 個 builtin)。透過 lazy-fetch
  `/admin/effects/<name>/content` + `/admin/effects/preview` 取得
  rendered keyframes，注入 `<style>` 並套用到 demo 文字。Cache 與
  IntersectionObserver 復用。([12f0e22](#))
- **Polls 多題 session + 圖片上傳 (P0-1)**：`PollService` 改寫成
  question-session state machine，仍 backward-compat 提供 legacy
  `state.question` / `options` 派生欄位。新 endpoint `/admin/poll/
  {create,start,advance}`、`POST /admin/poll/<id>/upload-image/<qid>`
  (多 part / ≤2 MB / JPG·PNG·WebP / magic-byte / path-traversal)。
  公開 `/polls/media/<path>` 提供圖片讀取。Admin UI 多題 Builder +
  per-question image upload + START SESSION / 下一題 / 結束 控制器。
  17 新測試。([61a5dbc](#))
- **Polls Live HUD + Results 頁**：active 狀態替換 Builder 為 Live
  HUD（CountdownRing 1Hz / leader 漸層 / queue mini / 自動下一題 +
  overlay 顯示 toggle）；ended 狀態替換為 Results（per-question Tab
  + winner callout + ranked bars + Participation/Timeline + Export
  rail CSV/JSON/copy）。([609108d](#))
- **Broadcast 獨立後台頁 (`/admin/#/broadcast`)**：state strip + LIVE
  · 廣播中 + uptime/connections/messages 計時 + `⏸ 切到 STANDBY`，
  END BROADCAST 卡需輸入 `STANDBY` 確認碼 + `■ 結束廣播` crimson 按
  鈕；附 LIVE vs STANDBY 5-bullet 對比。([609108d](#))

### 新增 / Added — Design assets + governance

- **STYLE-CONTRACT.md** ([7ffef3c](#)) — locked palette, forbidden
  hexes (the drift traps from 2026-05-04 handoff), forbidden color
  families (magenta/violet — re-introduced and rejected), required
  chrome wrapper, delivery checklist self-verification, paste-ready
  prompt for the next Claude Design conversation.
- **HANDOFF-REWORK-2026-05-04.md** ([5ef14d1](#)) — per-file rework
  brief that drove rounds 2 + 3 of design handoff.
- **Engineering plan** ([46e6798](#)) — 8 slices documenting the IA
  migration with effort estimates + safety-first ordering.
- **Backend prep doc** ([1060bf7](#)) — Q3 quick-action endpoint
  audit + 3 gap analysis (Gaps 2 + 3 shipped this release; Gap 1
  message-level moderation deferred pending UX decision on
  hide-message vs mute-fingerprint model).
- **5 Claude Design components carried into repo** through 3 rework
  rounds: `live-console.jsx` (rejected as overpacked, kept as
  reference), `tab-chrome.jsx` (canonical for P0-0a), `system-
  accordion.jsx`, `decisions-log-may04.jsx`, `rwd-768.jsx`,
  `rwd-480.jsx`. All inline forbidden hexes + rgba mechanically
  cleaned to canonical hudTokens-equivalent values.

### 修正 / Fixed

- **MutationObserver respects active tab** ([82c6338](#)) — when
  late-injected sections fire `applySectionVisibility` re-application,
  the active tab's section visibility is now preserved (previously
  any DOM mutation reset display="" for all in-route sections,
  showing inactive tab content).
- **Session-detail query param preserved** ([c0be5fc](#)) —
  `#/session-detail?id=xxx` no longer alias-redirected (the parser
  would have stripped `?id=`). Kept as its own route.

### 工程指標 / Engineering Metrics

- **Tests**: 1009 passed (was 995 before this release) + 4 skipped +
  14 new tests across Slice 7 endpoints (effects/fire + broadcast/send
  validation, auth gates, queue insertion, STANDBY bypass).
- **Net LoC**: ~+1300 across 8 engineering slices, plus ~+300 design
  doc / handoff. Slice 8 cleanup deleted 73 lines (backstage dead code).
- **Sidebar**: 28 nav rows (5.0.0) → 11 nav buttons (10 P0-0 + 安全).
- **`/admin/*` endpoint count**: unchanged (every legacy endpoint
  preserved; new: `/admin/effects/<name>/fire` + `/admin/broadcast/send`).

### 新增 / Added

- **Stickers 多 pack 模型 (P1-4 後端)**：`services/stickers.py` +
  `StickerPack {id, name, enabled, weight, order}` + `Sticker.pack_id`
  FK；持久化到 `runtime/stickers/{packs,stickers}.json`；首次載入時
  migrate 既有 stickers 到 `default` pack（idempotent）。新 endpoint
  集合：`/admin/stickers/packs/{create,<id>/toggle,<id>/rename,
  <id>/reorder,<id>}` + `POST /admin/stickers/<name>/assign`。
  Admin UI sidebar 顯示真 pack 列表 + 增改刪。([12f0e22](#))
- **Sounds per-tile inline volume (P1-2 後續)**：`services/sound.py`
  per-sound volume 0..1 持久化到 `runtime/sounds/sound_volumes.json`；
  rule volume 仍會覆蓋。`POST /admin/sounds/<name>/volume`。每張
  Sound tile 加 100px 滑桿。([12f0e22](#))
- **Effects user .dme live preview (P3-2 後續)**：用戶上傳的 .dme 卡
  片現在也會即時動畫(原本只有 8 個 builtin)。透過 lazy-fetch
  `/admin/effects/<name>/content` + `/admin/effects/preview` 取得
  rendered keyframes，注入 `<style>` 並套用到 demo 文字。Cache 與
  IntersectionObserver 復用。([12f0e22](#))
- **Polls 多題 session + 圖片上傳 (P0-1)**：`PollService` 改寫成
  question-session state machine，仍 backward-compat 提供 legacy
  `state.question` / `options` 派生欄位。新 endpoint `/admin/poll/
  {create,start,advance}`、`POST /admin/poll/<id>/upload-image/<qid>`
  (多 part / ≤2 MB / JPG·PNG·WebP / magic-byte / path-traversal)。
  公開 `/polls/media/<path>` 提供圖片讀取。Admin UI 多題 Builder +
  per-question image upload + START SESSION / 下一題 / 結束 控制器。
  17 新測試。([61a5dbc](#))
- **Polls Live HUD + Results 頁**：active 狀態替換 Builder 為 Live
  HUD（CountdownRing 1Hz / leader 漸層 / queue mini / 自動下一題 +
  overlay 顯示 toggle）；ended 狀態替換為 Results（per-question Tab
  + winner callout + ranked bars + Participation/Timeline + Export
  rail CSV/JSON/copy）。([609108d](#))
- **Broadcast 獨立後台頁 (`/admin/#/broadcast`)**：state strip + LIVE
  · 廣播中 + uptime/connections/messages 計時 + `⏸ 切到 STANDBY`，
  END BROADCAST 卡需輸入 `STANDBY` 確認碼 + `■ 結束廣播` crimson 按
  鈕；附 LIVE vs STANDBY 5-bullet 對比。([609108d](#))
- **Rate Limits 加強**：LOGIN scope 加入 LOCKOUT 秒數欄、每 scope
  24-bar sparkline、effective_rate / burst mono footer、底部
  ViolationsFeed (TIME / SCOPE / KEY / UA / HITS / [BLOCK]) 與
  IpPolicyCard (DENY/ALLOW)。([609108d](#))
- **Viewer Theme legend 卡**：preview frame 下方加跳轉導引 — 彈幕色/
  描邊/陰影 → Theme Packs；字級/速度/透明度 → Display Settings；
  效果 → Effects；速率限制 → Moderation。([609108d](#))
- **Display Settings v2 重做 (P0-3 完整版)**：整頁從 `<details>`
  accordion 改成 `1fr / 340px` 二欄，左 6 列扁平表格 (OPACITY ·
  FONT SIZE · SPEED · COLOR · FONT FAMILY · LAYOUT)，每列
  `[150px label \| 1fr pickers \| 160px audience-pill]`；FontSize
  改 5 chip `[14][20][32][44][64]`，Layout 改 5-tile glyph grid
  `→ ▀ ▄ ■ ▌`，Color 換成 prototype 真實 8 色 palette；ON 狀態多
  `[Min · Max · Step]` dashed-accent 三 input；右 rail 三張卡：
  PreviewCard (180px stage + 2 sample danmu) / DeployCard
  (▶ 即時套用 + 還原預設) / SummaryCard (`AUDIENCE · N/6 OPEN`)。
  ([1e57d33](#))

### 改善 / Changed

- **Viewer prototype parity**（對齊新 bundle 的 `viewer.jsx`）：
  - Hero 從中央單欄改回 2-col（左 lockup + 右 chips）— 還原 v4
    決策同時反映新 prototype；padding `28px 32px 22px` desktop /
    `18px 16px 16px` mobile。
  - Form labels 從雙語 `暱稱 · NICKNAME` 改回單語 `暱稱` — 撤銷
    P3-6 cleanup（兩次 prototype iterate 來回後新 prototype 終於
    定下來單語）。
  - Speed label 從 `· SPEED · 5.0X` 改成 `5.0X`；Effects 從
    `· EFFECTS · 已選 N / 8 · 可疊加` 改成 `已選 N / 8 · 可疊加`。
  - Preview kicker 從 `PREVIEW · 你送出的樣子` 改成 Chinese
    `預覽 · 你送出的樣子`。
  - Preview 背景升級為 `linear-gradient(135deg, #0f172a, #1e293b)`
    + cyan-tint 邊框 + soft inset shadow + `repeating-linear-gradient`
    掃描線紋理。
  - Hero font-size 從 `clamp(3rem, 7vw, 5rem)` 提升為
    `clamp(3.2rem, 8vw, 6rem)` (HERO_SIZE.hero)，mobile drop 到
    `2rem` (HERO_SIZE.medium)。
  - Subtitle margin 從 `14px auto 0` 改成 `10px 0 0` desktop /
    `6px 0 0` mobile，max-width 取消強制。
  - ConnChip 內部分隔符從全形冒號 `：` (zh/ja/ko) 與 ASCII `:` (en)
    全部改成 `·` interpunct；online 狀態加 `cyanSoft` 底色 +
    cyan-line 邊框；font-size 11→10、padding 6×12→4×10、letter-
    spacing 0.5→1.0。
  - Placeholder `想對現場說點什麼?` 改為全形 `？`。
- **Admin Login i18n 字串對齊 prototype**：
  - subtitle 從亂編的 `後台管理 — 主辦方專用` 改成 prototype 真正
    的 `管理後台登入`
  - password label `密碼` → `管理密碼`
  - server-online chip `伺服器在線` → `伺服器上線`
- **zh.json 字串對齊 prototype**：`size: 大小→字級`、`effects: 特效→
  效果`、`multiSelectToStack: 多選疊加→可疊加`。
- **Viewer 桌面 layout 全部展開平鋪**（per user 2026-04-25：
  「desktop 上瀏覽應該是全部展開平鋪 不要陰影」）：移除
  `box-shadow: 0 10px 40px rgba(0,0,0,0.35)`，把 `overflow: hidden /
  flex column / 100dvh` 限制到 `@media (max-width: 599px)`，桌面
  整頁自然流動視窗 scrollbar。
- **Layout 副標 `R→L` → `右→左`**（match prototype Chinese）。
- **Preview `@nick` 字級** 動態 `max(11, fontSize × 0.42)` 反映
  prototype `viewer.jsx:130` 公式。

### 修復 / Fixed

- 透明度 / 字級 重複單位 bug：main.js 同時寫 `${value}%` / `${value}px`
  到 span 而 HTML 又有字面 `%` / `px` → 顯示 `100%%` / `60pxpx`。
  改成只寫數值，由 HTML 補上單位。
- Speed 顯示從整數 `5X` 改成 `5.0X`（toFixed(1)，符合
  `${speed.toFixed(1)}x` prototype 規格）。

### 文件 / Docs

- `docs/designs/design-v2/` 整批同步 2026-04-25 handoff bundle，
  含 5 個新元件 + tokens/hero/admin-pages/admin-v3 refresh。

### 驗證 / Verification

- Pytest（含新測試）836 pass / 1 pre-existing flaky browser-admin
- VPS production deployed at `609108d`：viewer / admin /
  admin-broadcast.js / admin-display.js / admin-display 顯示新樣式

### 新增 / Added — Phase A core (2026-04 · Soft Holo HUD retrofit)

Admin / viewer / overlay 全面切換到 Soft Holo HUD 美學（cyan #38bdf8
主色、IBM Plex Mono / Bebas Neue / Noto Sans TC、light theme 為預設）。
Server-side 包含 Rate Limit telemetry、admin 啟動單一 endpoint、Effects
即時動畫預覽、四個 P2 邊緣狀態頁。

**核心新增 / Core additions**

- **Rate Limit hits/violations counters**：`/admin/metrics` 新增
  `rate_limits.{fire,api,admin,login,totals}` 各帶 `hits` / `violations`
  / `locked_sources`（最近 300s 違規來源去重 IP 數）。Admin Rate Limits
  summary strip 從佔位 `—` 換成真實數字 + `阻擋率 X.X%`。
  ([3845c67](#))
- **`/admin/bootstrap`**：單次 endpoint 撈 16 個 admin 子模組初始狀態
  （blacklist / widgets / polls / settings / filters / history / ws-auth
  / effects / themes / webhooks / sounds / emojis / stickers / scheduler
  / fingerprints / metrics）。前端 `window.__danmuAdminBootstrap` 5s
  cache,init 從 ~25 個並發 GET 降到 1 個。nginx `/admin/*` limit_req
  bypass 可在 VPS 驗證後移除。([1703371](#))
- **Effects cards live preview (P3-2)**：8 張內建 .dme 卡片現場動畫
  （blink / bounce / glow / rainbow / shake / spin / wave / zoom），
  IntersectionObserver 暫停離畫面卡片,`prefers-reduced-motion` 全停。
  ([5ed9ac7](#))
- **P2 邊緣狀態頁**：([6899cfb](#))
  - P2-1 Viewer 離線卡（3 次 30s 內重連失敗 → 替換 viewer body 為離線
    卡 + 15s 倒數重試 + OpsContact 連結）
  - P2-2 Overlay CONNECTING… 狀態（page-load 至首封 WS 訊息或 500ms 後
    淡出）
  - P2-4 Admin 登入鎖定（5-attempt 視窗計數 + 429 鎖定畫面 + 5min 倒數）
- **P1 admin 頁面 retrofit**：10 個頁面從 `<details>` accordion 升級到
  v2 shell（kicker · title · note · `.admin-v2-*` 結構卡）：
  - Webhooks / Emojis / Sounds / Scheduler ([2ad1d70](#))
  - Stickers / Live Feed / Fonts upload ([eb52552](#))
  - Replay (P1-7, dedicated nav slug) ([76568ca](#))
  - Security (P1-9) + Backup & Export (P1-10) — 新增獨立 nav slug
    + sidebar buttons ([c38a050](#) + this release)
- **新 nav slugs**：sidebar 新增 `歷史重播` / `安全` / `備份 & 匯出`
  入口；admin.js `applyRoute` 同步寫入 URL hash 讓外掛 module 透過
  `hashchange` 取得路由變更。

### 改善 / Changed

- **viewer/admin html color-scheme**：透過 `:has(body.viewer-body-v2)`
  / `:has(body.admin-body)` 把 html 的 `color-scheme` 也設成 light，
  Chromium 原生 scrollbar 從 dark 變回 light，與 prototype 對齊。
  ([416dc4f](#))
- **P3-6 viewer 表單標籤改單語**：`暱稱 · NICKNAME` → `暱稱`（i18n
  驅動，4 語系）。Mono kicker 保留雙語裝飾（如 `PREVIEW · 你送出的
  樣子`）。([6899cfb](#))
- **P3-5 Mobile Safari viewer parity**：mobile 中斷點 640px → 600px,
  subtitle 在 mobile 也保持顯示，2-col hero 在 ≥600px 啟用。
  ([648e5f7](#))
- **P5-1 user-facing naming unification**：`Danmu Desktop` /
  `Danmu Client` user-facing 字串改為 `Danmu Fire`（Electron window
  title、about 頁、tray tooltip、4 語系 i18n、tests/e2e、README *.md
  prose）。**故意保留**：`package.json` 的 `productName: "Danmu
  Desktop"`（drives `.app` 檔名 + `build.yml` artifact glob）—— 改
  productName 必須同步更新 build.yml 與 README xattr 命令,目前先不動。
  ([648e5f7](#))

### 修復 / Fixed

- 退出視覺 `透明度 · 100%` 旁邊 scrollbar 顏色（前一版 dark mode 灰）
  與 prototype 不一致 — 現在走 light scrollbar。([416dc4f](#))
- v2 admin shell 的 `[id^="sec-"]` route filter 之前漏接新頁,3 個新頁
  改用 own visibility（`syncVisibility()` based on `dataset.activeRoute`
  / `hashchange`）。

### 升級 / Migration notes — v4.9.x → v5.0.0

**Breaking**:

1. **Token 主題語意翻轉**：`shared/tokens.css` 的 `--color-bg-base`、
   `--color-text-primary` 等預設值改成 `light` 配色。Admin / Viewer
   都從 light 出發；Overlay (`<body>` 無 class) 仍走 dark（OBS 透明
   依賴）。**自訂主題包 `.dmt` 若 hardcode 暗色 hex 需要重新檢視**。
2. **i18n key 重新對齊**：viewer 表單從 `nicknameField` / `colorField`
   等空 key 改回 canonical `nickname` / `color`；orphan key 已清理。
   **若有 fork 加過 *Field key 的 string 需要遷移**。
3. **Tailwind slate utility 已 scoped 到 `.admin-body`**：viewer 不再
   能用 `text-slate-400` 類別覆寫主題色 — 用 design tokens。
4. **`/admin/bootstrap` 落地後 nginx `/admin/*` limit_req bypass 可移
   除**：`deploy/nginx/sites-available/danmu-fire.conf` 內的 `location
   ~ ^/admin/` 例外規則目前還在,等部署 + 驗證後再清理。
5. **Admin `system` route sections 列表縮減**：`sec-security` /
   `sec-ws-auth` 從 system route 移到新的 `security` route 下。如有
   bookmark 直接指 `#/system` 找密碼設定的話,改指 `#/security`。

**Non-breaking but worth noting**:

- 原 `<details>` accordion 仍存在於 DOM,只是 `data-admin-v2-replaced`
  + `display: none !important` 隱藏。等 1–2 個版本確認 v2 穩定後再
  完全移除舊 markup。
- `productName: "Danmu Desktop"` 故意未動 → `.dmg` / `.AppImage` /
  `.exe` 仍命名 `Danmu Desktop-5.0.0-*`；想統一檔名需要協同改
  `build.yml` 的 artifact glob 與 README 的 xattr 命令。

### 驗證 / Verification

- 794 tests pass（non-browser，full suite 含 1 個 pre-existing
  Playwright timeout 與本版無關）
- Live preview 確認 12 個改動頁面渲染正常,3 個新 nav slugs 切換正常
- VPS 尚未部署 — branch `claude/design-v2-retrofit` 有 12 個 unpushed
  commits

## [4.9.0] - 2026-04-21

Admin observability bundle — 五支面向維運者的工具一次打包，server-only release
（不觸發 Electron 二進位構建，因為 `danmu-desktop/package.json` 未 bump）。

### 新增 / Added

- **T1 · Metrics sparklines**：Admin dashboard 新增即時 CPU / MEM / WS 客戶端數折線圖。
  psutil-based 取樣 `services/metrics.py`，routes `GET /admin/metrics` 回傳最近
  N 筆 ring-buffer 資料，前端 `admin-metrics.js` 10 秒自動刷新繪製 sparkline。
- **T2 · Admin fonts management**：`routes/admin/fonts.py` 提供 list/upload/delete
  字型檔 API，`secure_filename()` + `Path.is_relative_to()` 雙重 path-traversal 防護。
  Admin UI 新增 `<details id="sec-fonts">` 區塊管理自訂字型。
- **T3 · Fingerprint observatory**：`services/fingerprint_tracker.py` in-memory
  ring-buffer（MAX_RECORDS=1000，LRU eviction）追蹤每個 fingerprint 的 msgs /
  rate_per_min / blocked count。sha256[:12] 雜湊不外洩原始 fingerprint，60 秒
  rolling window 計算速率，>60/min 標記 `flagged`。routes `GET /admin/fingerprints`
  + `POST /admin/fingerprints/reset`（require CSRF）。Admin UI 新增狀態徽章表格，
  10 秒自動刷新。21 tests covering record / state / list / LRU / routes。
- **T4 · Theme bundle schema extension**：Theme `.dmt` YAML 新增 `tokens` /
  `overrides` 區塊，支援 override `shared/tokens.css` 變數 + 注入自訂 CSS。
  hot-reload with mtime tracking。
- **T5 · Desktop design v2 reference docs**：`docs/designs/design-feedback-desktop-v2.md`
  + 相關 design explorations 存檔，供後續 `claude/design-v2-retrofit` 分支參考。

### 改善 / Changed

- **Admin i18n**：4 個語系（en/zh/ja/ko）各新增 21 個 fingerprint 相關 key +
  fonts / metrics 區塊標題翻譯，admin 頁面 100% 已翻譯維持。
- **`routes/admin/__init__.py`**：註冊 `fingerprints` / `fonts` submodules 到
  admin blueprint package import 列表（alphabetical order）。

### 驗證 / Verification

- 791 tests pass（`cd server && PYTHONPATH=.. uv run python -m pytest`）
- i18n 生成檔確認 4 個語系都有新 key
- Preview 確認 fingerprint 表格、sparklines、fonts 區塊正常渲染
- Server-only change — `danmu-desktop/package.json` 保持 4.8.7，不觸發 build.yml
  binary release pipeline

---

## [4.8.7] - 2026-04-20

### 改善 / Improved

- **補齊 `style.css` 剩餘 3 處 hardcoded hex**：v4.6/v4.8.0 的 design-token
  retrofit 留了 3 處沒進 token — `#22d3ee`（stats-chart hover）、兩處 `#fff`
  / `#ffffff`（toggle handle + effect-btn active text）。新增兩個 token：
  - `--color-accent-light: #22d3ee`（cyan-400，比 `--color-accent` #06b6d4 亮）
  - `--color-white: #ffffff`（rare-use 絕對白 — checkbox handle 之類）

  現在 `style.css` **零 hardcoded hex**（RGBA 半透明值保留，仍搭配相同色系），
  為未來 theme 重構 / dark-light 模式打底。Preview 確認 tokens 正確 resolve。

---

## [4.8.6] - 2026-04-20

### 修復 / Fixed

- **Admin sidebar 兩段長描述仍是英文**：v4.8.5 Phase 1 打掃 admin 頁面 i18n
  時，為控制 scope 暫留了兩個 `admin-sidebar-copy` 段落（workflow 控制塔說明
  / 即時調整建議順序）沒譯。本版補齊，新增 `sidebarWorkflowCopy` +
  `sidebarRecommendedCopy` 兩個 key，共 8 條翻譯（en/zh/ja/ko）。

### 改善 / Improved

- **Docker 容器 hardening**：
  - `server/Dockerfile` 加 `ENV PYTHONDONTWRITEBYTECODE=1` + `PYTHONUNBUFFERED=1`
    — 不再寫 `.pyc` cache（小幅減少可寫空間使用），stdout/stderr 立即 flush
    讓 `docker logs` 即時看到錯誤而不是等 shutdown。
  - `docker-compose.yml` 4 個 service 加 `security_opt: no-new-privileges:true`
    — 阻止 setuid/setgid 升權，container 已經跑 UID 1000 非 root，這是 defence
    in depth 把逃生通道封死。
  - `server` + `redis` service 加 `cap_drop: ALL` — Python Flask + Redis 都不需
    要任何 Linux capability。nginx services 因為要 bind 80/443 + apk add openssl
    保留 default caps（cap_add `NET_BIND_SERVICE` 的話會複雜化 ports 自訂場景，
    直接留 default 更穩）。
  - 所有 service 加 `pids_limit` / `deploy.resources.limits.pids`（server: 200,
    其他: 100）— Python / nginx runaway 或惡意 plugin 無法 fork-bomb host。
    注意：`server` 用 `deploy.resources.limits.pids`（跟現有 memory/cpus 同樹），
    redis 用 top-level `pids_limit` — docker compose 不允許 service 同時兩種寫法。

### 驗證 / Verification

- `docker compose config` 通過（所有 4 services）
- 737 tests pass (server/)
- i18n 生成檔（`static/js/i18n.js`）確認 4 個語系都有新 2 個 key

---

## [4.8.5] - 2026-04-20

### 修復 / Fixed

- **Admin dashboard i18n 漏譯 (~35 條)**：v4.6.0 的 dashboard IA 重整把整個
  hero/nav/section 骨架換成英文寫死的字串，從沒 i18n 化過。切到中文 / 日文 /
  韓文時，admin 頁面 hero kicker、summary labels、nav chip 群組標題、section
  kickers、asset dashboard 卡片、sidebar workflow 連結等等都還是英文。新增
  35 個 translation key，4 語系齊備（en/zh/ja/ko），wrap 所有 hardcoded 字串
  為 `data-i18n` + `ServerI18n.t()` template 對應。

  影響：使用者切 ZH/JA/KO 時 admin 頁面現在全中/日/韓文，不再中英混雜。
  737 tests pass；Phase 1 完成 admin 頁面 visible i18n，剩一些低頻 sidebar
  描述段落以 TODO 保留（v4.9.0 一併處理）。

---

## [4.8.4] - 2026-04-20

### 修復 / Fixed

- **nginx `Host: $host` 丟 port → Flask redirect 走到錯 port (CRITICAL)**：
  v4.8.3 的 ProxyFix 讓 `/admin → /admin/` redirect 走 HTTPS 了，但 nginx
  用 `proxy_set_header Host $host;` 把 port **剝掉**（`$host` 只有 hostname，
  不含 port）。Flask 看到 `Host: 192.0.2.1`，redirect 預設 HTTPS →
  `https://192.0.2.1/admin/` → 443 → 在 shared-host 環境（例如 Oracle
  Cloud 同 VM 跑 netbird-caddy 或其他 web service 在 443）會被別的服務接走。

  修法：兩個 nginx config（`nginx-https.conf` + `nginx.conf`）把
  `proxy_set_header Host $host;` 改成 `proxy_set_header Host $http_host;`，
  `$http_host` 包含 client 實際連的 port。額外 `X-Forwarded-Host $http_host`
  讓 ProxyFix 有精確 fallback。

  使用者症狀：v4.8.3 部署後 `https://<ip>:4000/admin` 在 port-only
  deployment（沒 domain，走非標準 port）會被同機 443 服務攔截。改完
  `curl -L https://<ip>:4000/admin` 會正確落在 `https://<ip>:4000/admin/`。

---

## [4.8.3] - 2026-04-20

### 修復 / Fixed

- **Docker image 缺 `shared/tokens.css` → 所有 CSS 變數失效 (CRITICAL)**：
  `server/static/css/tokens.css` 是 symlink 指向 `../../../shared/tokens.css`。
  `docker-compose.yml` + `docker-build.yml` build context 是 `./server`，
  symlink 的 target 在 context 外，docker COPY 把 symlink 帶進 image 但
  target 檔案不存在。結果：`@import url("tokens.css")` 載入 404、
  `var(--radius-pill)` / `var(--color-success)` / 全部 tokens 變 `initial`。
  使用者可見症狀：hero status pill 不圓（看起來方角）、status dot 綠/紅消失、
  其他依賴 CSS 變數的元件 silently broken。

  修法：build context 改 repo root，Dockerfile COPY paths 加 `server/` prefix，
  明確 `COPY shared/ /app/shared/` 讓 symlink target 進 image。新增 root
  `.dockerignore` 排除 `danmu-desktop/` / docs / node_modules / pycache
  等，避免 context 變大影響 build 速度。

### 技術細節 / Technical

- **`docker-compose.yml`** `build.context` `./server` → `.`，dockerfile path
  改 `server/Dockerfile`。同樣改動套用到 `.github/workflows/docker-build.yml`
  的兩個 build step（PR + push to main）。
- **`server/Dockerfile`** 所有 `COPY <relpath>` 前綴 `server/`；新增
  `COPY shared/ /app/shared/` 在 server code 之前，確保 symlink 解析時
  target 已存在。
- **新增 root `.dockerignore`**：排除 `.git` / `.github` / `danmu-desktop/`
  / `docs/` / `*.md` / node_modules / python cache 等。
- **為何不用其他修法？**
  - Option A（把 tokens.css 變成真實檔案、刪 symlink）：破壞 MEMORY.md 記的
    "single source of truth" 架構，未來 Electron / 其他 consumer 不好共享。
  - Option B（Dockerfile 內 inline content）：不可維護，每次 tokens.css 改
    都要改 Dockerfile。
  - Option C（build step resolve symlink）：引入 build 時副作用，污染 local
    repo 狀態。
  選擇 context 改 root 的代價僅是 docker-compose / CI 各一行改動，換來乾淨的
  monorepo-style build。

---

## [4.8.2] - 2026-04-20

Deployment-papercut release — all four fixes were triggered by an actual
live deploy to Oracle Cloud where UID mismatch + .env inline-comment +
cloud firewall combined to hide the problem behind cryptic log lines.

### 修復 / Fixed

- **`.env.example` inline-comment 被 python-dotenv 吞成值 (CRITICAL)**：
  `SECRET_KEY=` 和 `WS_AUTH_TOKEN=` 兩行後面接了 `# comment`。dotenv 對
  **空值 + inline `#` comment** 的處理是把整個 comment 當成值，所以
  `WS_AUTH_TOKEN=              # Shared secret; ...` 會被 load 成
  `"# Shared secret; ..."`，接著 admin UI 也會顯示這串 garbage 當 token。
  修法：把說明註解移到變數的**上一行**，變數行保持 `KEY=`（值為空）。
  同個 bug 之前在 `WS_ALLOWED_ORIGINS` 被修過，這次補齊剩下兩個受害者。
- **`setup.sh` UID mismatch 無感知 (Oracle Cloud 常見)**：host 使用者 UID
  ≠ 1000（Oracle / 某些 minimal image 的 `ubuntu` 是 1001）時，docker
  bind-mount `server/runtime/` 會讓 container 的 `appuser`(uid 1000) 無法
  寫入，ws_auth.json / settings.json / webhooks.json 等全部寫失敗但無
  明顯錯誤訊息。`setup.sh init` 現在會：
  - `mkdir -p server/runtime server/user_plugins`（避免 docker 用 root 預設建）
  - 偵測 `$(id -u)` ≠ 1000 時 warn 並印出修復指令
    `sudo chown -R 1000:1000 server/runtime server/user_plugins`
- **`ws_auth.py` 寫入失敗時 log spam → 優雅降級**：先前每次 `set_state`
  / 每次 boot 都會 `ERROR ... Permission denied`。現改為：
  - 第一次失敗記一條 `WARNING` 附可行修復指令
  - 後續失敗降到 `DEBUG`
  - **in-memory cache 照更新** — admin UI 的變動在 container lifetime 內
    仍生效（只是無法跨 restart），比先前「靜默丟失」好

### 新增 / Added

- **`DEPLOYMENT.md` 疑難排解新段**：
  - `Permission denied writing runtime/ws_auth.json` — 完整診斷 + chown 修復
  - `Cloud firewall blocking 4000 / 4001` — host iptables + cloud ingress 雙層
    說明（Oracle Cloud / AWS / GCP 通則）

### 技術細節 / Technical

- **Tests**：`tests/test_ws_auth.py` 新增 4 個 graceful-degradation 測試
  （seed 失敗 / set_state 失敗 / 一次性 log / rotate 失敗時 in-memory 可用）。
  使用 `monkeypatch` 把 `os.open` 對 `ws_auth.tmp.*` 強制丟 `PermissionError`，
  模擬 UID mismatch 情境不需真的改 host 權限。全部標 `@ws_auth_raw_seed`
  opt out 預設的 disabled-state fixture。737 tests pass（v4.8.1: 733 + 4 new）。
- **Build tooling**：`server/package.json` `build:css` script 在 tailwindcss
  output 後追加 `\n`，避免 pre-commit `end-of-file-fixer` 每次重 build 都
  strip 掉尾行 newline（v4.8.0、v4.8.1 都撞過這個 DX papercut）。

---

## [4.8.1] - 2026-04-20

### 修復 / Fixed

- **`setup.sh init` 在 HTTPS mode 的 HTTP port 提示後靜默退出 (CRITICAL)**：v4.7.1 加入的 port 驗證邏輯有兩個 `set -e` 陷阱：
  1. `_port_in_use` 對**空閒 port** 回傳 1，直接觸發 `set -euo pipefail` 把 script 殺掉（`case $?` 根本沒機會跑）。使用者在 VPS 上看到的 symptom 就是輸入 HTTP port（比方 4080）後 prompt 消失、shell 回傳 exit code 1、沒有錯誤訊息。
  2. `_valid_port` 回傳 2（port 被佔用）也會被 `set -e` 吃掉，使得 occupied-port 的 override 路徑從來都不會被觸發。

  修法：在 `_valid_port` 裡用 `_port_in_use "$n" || _piu=$?` 捕 rc；在呼叫端用 `_valid_port … || _rc=$?` 同樣 idiom。兩個 `set -e` 豁免點都加了註解說明為什麼不能改回 `; case $?`。用 bash 5 + Docker 跑了三種 scenario（free port / in-use port / 非數字）確認修好。

  回報：使用者 VPS（ubuntu、ss 可用）實際重現 — 80/443 被佔用而被 fallback 到 4080，再輸入 4080 時 `_port_in_use 4080` 回 1（free），script 死。

---

## [4.8.0] - 2026-04-20

### 新增 / Added

- **Admin UI WS token toggle**（moderation 區新增 `sec-ws-auth` 區段）：過去要啟用/停用 `4001` 的 shared token 驗證必須改 `.env` 並重啟 container，現在在 admin 頁一鍵切換。開/關、手動填 token、重新產生 token、複製到剪貼簿都直接可用，設定瞬間套用 — existing connections 會被保留（grandfathered），新連線立即依新設定。支援 4 語系（中/英/日/韓）。直播中切換不用踢人，不用重開 server。
- **`runtime/ws_auth.json`**：新的 runtime state 檔，同 `settings.json` / `webhooks.json` / `filter_rules.json` 一樣放在 `server/runtime/`，被 Docker bind-mount、被 `scripts/backup.sh` 備份、被 v4.6.2+ 的 upgrade-safe 機制保護。
- **Secure-by-default 初始化**：首次啟動（runtime 檔不存在）如果環境變數 `WS_REQUIRE_TOKEN` / `WS_AUTH_TOKEN` 都沒設，會自動產生 24-byte urlsafe token 並啟用 token 驗證；管理員之後可在 UI 關閉。這是「fresh install 安全」與「已部署用戶 upgrade 不被靜默改設定」的折衷 — 若 env 明確 set `WS_REQUIRE_TOKEN=false`，就尊重這個決定。
- **Admin routes**：`GET /admin/ws-auth`（讀當前狀態）、`POST /admin/ws-auth`（更新）、`POST /admin/ws-auth/rotate`（重新產生 token）。全部 CSRF 保護、`require_login`、過 `admin` rate limit。

### 改善 / Improved

- **Per-connection auth lookup**：`server/ws/server.py` 的 `_is_authorized()` 不再從啟動時 capture 的 closure 常數讀，而是每次連線呼叫 `ws_auth.get_state()`。admin 改 token 或切換 require_token 不用重啟 server，下一個 WS 連線就吃到新設定。
- **啟動 warning 文字更新**：`startup_warnings.py` 原本提 `WS_REQUIRE_TOKEN is disabled`；現在改為 `WS token auth is disabled`，並提示「flip the admin UI toggle to enable token auth」作為可行的修復路徑。
- **`/overlay` 路由讀 live state**：`routes/main.py` 的 overlay handler 以前讀 `current_app.config["WS_AUTH_TOKEN"]`（啟動時固定），現在讀 `ws_auth.get_state()`，admin 改 token 後新開的 OBS browser source 就拿得到最新值。

### 修復 / Fixed

- **Admin UI auto-handler 衝突**：`wsAuthRequireToggle` 原本會被 `.toggle-checkbox` 全域監聽抓到並誤打到 `/admin/Set` endpoint。初始化時移掉該 class，改由本區段專用 save button 處理。

### 技術細節 / Technical

- **Tests**：`tests/test_ws_auth.py` 新增 21 個測試（seeding 行為、cache 語意、檔案毀損復原、route validation、CSRF、rotate 保持 require_token flag、管理員改完 state 新連線立即吃到）。`conftest.py` 新增 `_isolate_ws_auth` autouse fixture，每測試重置 runtime 檔 + in-memory cache；預設把 state 預先設為 disabled，和 v4.7 系統測試相容，需要觸發 seeding 邏輯的 test 用 `@pytest.mark.ws_auth_raw_seed` opt-out。
- **Validation schema**：`WsAuthSchema` 在 `validation.py` 新增，token 允許 `[A-Za-z0-9._~+/=-]{0,128}`（URL-safe base64 + 常見的 URL-safe 字元），同時用 `@validates_schema` 強制「require_token=True 時 token 必填」。服務層 `set_state()` 也會再 double-check。
- **文件層**：Wiki Admin-Guide / Configuration 下次更新會收錄。DEPLOYMENT.md 的「WS token auth」段也會指向 admin UI 而非 env var。

---

## [4.7.1] - 2026-04-20

### 修復 / Fixed

- **`setup.sh init` port 防呆**：HTTPS mode 分開輸入 HTTP_PORT 與 HTTPS_PORT 時，之前沒檢查兩者是否相同，也沒驗證是否為有效 port 或是否已被佔用。新增 `_valid_port` 驗證迴圈：非數字、超出 1-65535、已被佔用、兩 port 相同都會提示並重問。

### 改善 / Improved

- **`setup.sh init` WS 預設調整**：
  - `Expose WebSocket port 4001 for Danmu Desktop client?` 預設從 N 改為 **Y**（安裝 server 的主要原因就是要跑 overlay，不開等於沒用）
  - `Require a shared token for the WS port?` 預設保持 N（LAN / firewall 保護環境不需要；公網 VPS 可手動啟用）
- **統一安裝文件**：`README.md` 與 `DEPLOYMENT.md` 都把 `./setup.sh init` 列為 canonical 安裝路徑，不再並列多條 manual 流程。降低新用戶決策負擔。

---

## [4.7.0] - 2026-04-20

### 新增 / Added

- **直播模式 / Stream mode toggle**：Admin 頁 hero 右上新增 toggle 開關，開啟後自動折疊 11 個低頻率區段（Themes / Emojis / Stickers / Sounds / Polls / Plugins / Webhooks / Scheduler / Change password / Filters / Advanced），只保留直播中真的會用到的：Live Feed、黑名單、Effects、歷史、Core controls。Hero summary cards 同步縮小。偏好存 `localStorage['danmu-stream-mode']`，reload 後 before-paint 套用不閃爍。i18n 4 語系齊備（中：直播模式、日：配信モード、韓：방송 모드、英：Stream mode）。
- **Legacy runtime-state migration**：`filter_engine.py` 與 `webhook.py` 新增 one-shot 自動搬家邏輯，從舊 default（`server/filter_rules.json`、`server/webhooks.json`）搬到新的 `server/runtime/` 位置。只在使用 default path 時觸發，不影響測試 monkeypatch。

### 改善 / Improved

- **`filter_rules.json` + `webhooks.json` 預設路徑對齊**：跟 v4.6.3 的 `SETTINGS_FILE` / `plugins_state.json` 一致，預設全部改到 `server/runtime/`，backup.sh 一個指令即可涵蓋整組 user state。
- Docker 使用者無感（已經 bind-mount `./server/runtime/`）。非 Docker 直跑的使用者升級後會看到一次性 migration log，原檔保留不刪。

---

## [4.6.5] - 2026-04-20

### 修復 / Fixed

- **`scripts/bump-version.sh` drift self-heal**：腳本先前用 `$CURRENT` 當 sed 匹配模式，若 `package.json` 與 `config.py` 版本已 drift（如 `config.py` 被手動改成別的版本），sed 會 silent no-op 只更新 `package.json`，留下不一致。改為匹配任意 `[0-9]+\.[0-9]+\.[0-9]+` semver pattern，並加上 post-write verification 逐檔確認新版本已寫入。
- **`scripts/bump-version.sh` portability**：`grep -E '^\s*...'` 在 BSD grep（macOS 預設）下不認 `\s`，改為 `[[:space:]]` 與腳本其他地方一致，避免某些環境抓不到當前版本。
- **`scripts/bump-version.sh` awk double separator**：bump 後 CHANGELOG 會產生兩條 `---`，原因是 awk 不消化 `[Unreleased]` 後既存的 separator。現在會吞掉後續空白行與 `---` 再插入新 section，不再疊。

---

## [4.6.4] - 2026-04-20

### 新增 / Added

- **`scripts/bump-version.sh`**：一鍵同步更新 `danmu-desktop/package.json`、`server/config.py`、`CHANGELOG.md` 三處版本號。支援 `DRY_RUN=1` 預覽、版本格式驗證、自動 section 插入。
- **`setup.sh gen-secret`**：新指令，在 `.env` 遺失 `SECRET_KEY` 時一鍵產生 256-bit hex key 並寫入。原本 `setup.sh check` 只會回報錯誤沒指示如何修，現在錯誤訊息直接提示修復指令。

### 改善 / Improved

- `setup.sh check` 偵測 production 無 `SECRET_KEY` 時，錯誤後附上 `./setup.sh gen-secret` 與 `./setup.sh init` 兩種修復路徑。

---

## [4.6.3] - 2026-04-20

### 修復 / Fixed

- **SETTINGS_FILE 預設路徑 `/tmp`**：之前預設是 `tempfile.gettempdir()` 解析為 `/tmp`，macOS 重開機會清空（部分 Linux 發行版亦同），非 Docker 直跑的使用者每次開機都會 silently 丟失設定（顏色 / 透明度 / 速度 / 字型）。改為 `server/runtime/settings.json`，與其他 runtime state 同 dir。
- **插件狀態與使用者插件可持久化**：重構 `PluginManager`，拆開**內建 example 插件**（`server/plugins/`，跟 image 一起升級）與**使用者自訂插件**（`server/user_plugins/`，獨立 mount）。`plugins_state.json` 移到 `server/runtime/`。一次性自動 migration：升級時若偵測到舊位置檔案則複製至新位置。

### 新增 / Added

- **`scripts/backup.sh`**：一鍵備份 runtime / user_plugins / user_fonts / static / .env 成 dated tarball。支援 `BACKUP_SKIP_STATIC=1` 環境變數跳過 bundled static 資源。
- **`server/user_plugins/`**：使用者自訂插件放這裡；gitignored，可獨立 bind-mount。含 `README.md` 說明 SDK 路徑。

### 改善 / Improved

- `docker-compose.yml` 新增 `./server/user_plugins:/app/server/user_plugins` mount；不再 mount `./server/plugins`（避免 shadow bundled example plugins）。
- `DEPLOYMENT.md` persistence table 更新為新的雙 plugin dir 架構 + legacy migration 說明。

---

## [4.6.2] - 2026-04-20

### 修復 / Fixed

- **部署資料遺失 (CRITICAL)**：Docker 容器重建時會遺失使用者的 filter 規則、webhooks、設定、plugins 狀態。修法：加入 `./server/runtime/` 與 `./server/plugins/` bind mounts，透過 `FILTER_RULES_FILE` / `SETTINGS_FILE` / `WEBHOOKS_PATH` env vars 將 runtime 檔案導向持久化目錄。影響：先前的升級流程會 silently reset 全部使用者配置。
- **`webhook.py` 忽略 env var**：`config.py` 宣告 `WEBHOOKS_PATH` 但 `services/webhook.py` 硬寫檔名，env 永遠無效。現改為直接讀 `Config.WEBHOOKS_PATH`（單一設定來源，未設環境變數時回退到 `server/webhooks.json` 預設）。
- **`FILTER_RULES_PATH` → `FILTER_RULES_FILE` 名稱統一**：`config.py` 宣告 `FILTER_RULES_PATH` 但實際使用的 `services/filter_engine.py` 讀 `FILTER_RULES_FILE` env var，兩者名字不一致 config 欄位等於死碼。統一為 `Config.FILTER_RULES_FILE`。
- **無障礙對比不足 / A11y contrast**：61 處使用 `text-slate-500`（對比 3.75:1，僅符合 AA large 非 AA body）與 1 處 `text-slate-600`（對比 2.36:1，全數失敗）全面改為 `text-slate-400`（對比 6.96:1，通過 AA body）。影響：loading / empty-state 訊息、時間戳、metadata 標籤、篩選規則優先級顯示等皆可讀。
- **i18n 漏譯補齊**：`exportJSON`、`recordReplay` 補上 4 語系；韓文 `overlayNone`、`overlayConnected` 從英文改為 "연결 안 됨" / "Overlay: {n}개"。
- **`.env.example` 行內註解 bug**：`WS_ALLOWED_ORIGINS=  # comment` 在 python-dotenv 下會被解析成字串 literal，導致所有 WebSocket overlay 連線被 Origin 檢查擋掉。改成註解獨立一行。
- **`.env.example` 死變數清理**：移除 `EMOJI_DIR` / `PLUGINS_DIR` / `SOUNDS_DIR` / `WS_PUBLIC_PORT`（4 個完全沒程式讀取的假文件）；修正 `FILTER_RULES_PATH` → `FILTER_RULES_FILE` 對齊程式實際使用的名字。

### 新增 / Added

- `docs/perf/baseline-v4.6.1.md` — HTTP payload / latency / font loading strategy 的效能基線
- `DEPLOYMENT.md` 新增「Data persistence」與「Backup & restore」章節（完整 runtime state 檔案對照表、tar 備份指令、升級 / 搬機流程）
- `CONTRIBUTING.md` 新增「設計系統」章節，連結 `DESIGN.md` + tokens 使用規範
- `README.md` 文件索引新增 DESIGN.md / docs/perf / docs/designs / docs/audits 入口

### 改善 / Improved

- `shared/tokens.css` 的 `--color-text-*` tokens 加註 WCAG 對比率值，`--color-text-muted` 明確標註「僅用於 disabled/decorative」

---

## [4.6.1] - 2026-04-20

### 新增 / Added

- **DESIGN.md**：專案設計系統文件，涵蓋品牌定位、色彩、字型、間距、動效、無障礙、語氣 (F-010)
- **`docs/designs/typography-preview-2026-04-20.html`**：字型方向比較頁（4 候選 vs 現況）

### 改善 / Improved

- **四語雙語字型系統建立 (F-010)**：
  - Hero wordmark "Danmu Fire" 改用 **Bebas Neue**（街機跑馬燈感的 display face）
  - 依語系切換 CJK 字型：**Noto Sans TC**（繁中）/ **Noto Sans JP**（日文假名 + 日漢字）/ **Noto Sans KR**（韓文 Hangul）/ **Noto Sans**（Latin）
  - 數字 / 程式碼改用 **JetBrains Mono**
  - 新增 tokens：`--font-display` / `--font-brand` / `--font-ui` / `--font-mono`；`--font-family` 改為 `--font-ui` 的別名以保持回溯相容
  - `i18n.js` 在初始化與切換語系時同步設定 `<html lang="">`，讓 CSS `:lang()` 能自動挑選對應 CJK 字型，避免日文字用繁中 glyph、或 Hangul 完全 fallback 的問題
- **字體載入優化**：新增 `preconnect` 提示與 `display=swap`，減少 FOIT 並加速首次繪製
- **數字對齊**：`.composer-counter` / `.history-dashboard-value` / `.chart-label` 套用 `font-variant-numeric: tabular-nums`
- **Electron client 字型同步**：`danmu-desktop/about.css` 硬寫的 Poppins 改為 Noto Sans TC；`tokens.css` 自 shared 重新同步

---

## [4.6.0] - 2026-04-19

### 新增 / Added

- **品牌統一**：Server 端命名為「Danmu Fire」，Electron client 命名為「Danmu Desktop」；`Config.APP_NAME = "Danmu Fire"` 透過 context_processor 注入模板
- **Danmu Fire 圖示**：新增 `danmu-desktop/assets/icon-fire.svg`（暖色火焰調色盤），複製至 `server/static/`；`scripts/build-icons.sh` 一鍵從 SVG 重新生成所有 PNG / ICO / ICNS
- **About 視窗**：Electron 新增 About 視窗（`about.html`），顯示版本號（IPC `get-app-version`）、描述、GitHub 連結
- **Tray 選單升級**：新增動態連線狀態列（`⊘ Disconnected` / `◐ Connecting…` / `● Connected`）與 About 選項；連線狀態變更時透過 IPC 即時更新
- **主視窗 Fade-in**：新增 `.main-content` CSS fade-in，防止 i18n 初始化前的文字閃爍
- **Admin 儀表板資訊架構重整**：管理頁面重新分組為 Live Control / Moderation / Assets 三大區，新增 hero 區段、chip 快速導覽、sticky 工作流側欄
- **主頁 Composer 重設計**：輸入框與即時預覽改為兩欄 sticky 佈局；滾動時自動收合為更精簡的 pinned 狀態
- **跳轉連結 / Skip-link**：Admin 頁加入鍵盤導覽用的 Skip to main content 連結
- **設計 Token 型別尺度**：新增 `--text-2xs` 至 `--text-3xl`、`--space-1` 至 `--space-8`，4px 網格模組化字級
- **3 份設計稽核報告**：`docs/audits/admin-design-audit-2026-04-11.md`、`design-review-round2-2026-04-17.md`、`design-review-final-2026-04-19.md`

### 改善 / Improved

- **設計 Token 集中化**：`shared/tokens.css` 擴充至 43 個 token，作為唯一設計系統來源；`server/static/css/tokens.css` 同步自 shared；CI 新增 token 同步檢查
- `.env.example` 補齊 `LOGIN_RATE_LIMIT`、`LOGIN_RATE_WINDOW`、`WEBHOOK_TIMEOUT`、`STICKER_MAX_COUNT` 文件
- **顏色系統統一**：清除 11 個 admin JS 模組與 4 個語系 JSON 中的 78 個 violet/purple Tailwind class；移除 45 行 `!important` cascade 覆寫；`tokens.css` 的 sky 為唯一來源
- **標題層級修復**：Admin 區段 H2 從 18px 放大到 24px，卡片 H3 固定 16px，長英文標題在 mobile 自動縮到 20px 避免 3 行折行
- **觸控目標 WCAG 2.5.5**：Effect buttons 由 26-30px 提升至 44×44px；新增全域 `cursor: pointer` 涵蓋 button / summary / label / select
- **深色模式原生控件**：新增 `color-scheme: dark` 讓 scrollbar、date picker、select dropdown 等原生控件符合深色主題
- **Motion 無障礙**：`prefers-reduced-motion: reduce` 支援；移除 range slider 的 `transition: all` 避免 layout 屬性重排
- **圖表 viewport 自適應**：歷史區 stats-chart 24 個 bar 改為 flex 均分，mobile 375px 以下不再溢出

### 修復 / Fixed

- **未登入 /admin/ 錯誤 toast 牆**：`fetchLatestSettings()` 在未認證狀態下不再觸發 `renderControlPanel()`，避免 6 個 401 toast 湧出（FINDING-001）
- **Admin i18n locale 引用過期**：4 個語系檔 (en/zh/ja/ko) 的 emoji/sticker 使用提示不再引用已清除的 violet-300 class

---

## [4.5.0] - 2026-04-07

### 新增 / Added

- Admin 面板新增「佈局模式」設定卡：可設定預設模式（scroll / top_fixed / bottom_fixed / float / rise）及是否允許使用者自選
- 主頁面連線狀態拆分為「伺服器」與「Overlay」兩個指示燈，清楚區分 WebSocket server 連線狀態與 Electron overlay 連線數
- 新增 `GET /overlay_status` API，回傳目前 Electron overlay 連線數量

### 改善 / Improved

- **i18n 系統全面遷移至 i18next**（server 與 Electron client 統一）
  - 翻譯檔獨立為 JSON source-of-truth：`server/static/locales/{lang}/translation.json`、`danmu-desktop/locales/{lang}/translation.json`
  - 新增 `scripts/build-i18n.js`（兩端皆有），從 JSON 自動生成 `i18n.js`
  - 新增 `npm run build:i18n` 指令（`server/` 與 `danmu-desktop/`）
  - 插值保持 `{var}` 格式，現有呼叫端 `.replace("{n}", val)` 完全相容，同時支援新 API `t("key", {n: val})`
- zh locale 大量補齊翻譯：主頁面、管理員頁面、設定卡標籤、黑名單、歷史記錄、密碼變更等約 80 個 key 從英文改為正確中文

### CI/CD

- `test.yml` `js-test` job 新增 i18n 一致性檢查：驗證 `i18n.js` 與 JSON 檔案同步，若過時則 CI 失敗並提示執行 `npm run build:i18n`

## [4.4.0] - 2026-04-05

### 安全修正 / Security

- CodeQL 告警全數修復：移除 startup log 中的明文密碼（`py/clear-text-logging-sensitive-data`）；`overlay.js` 的 img src 與 emoji URL 加入 `new URL()` 協議驗證（`js/xss`、`js/client-side-unvalidated-url-redirection`）；SVG 頭像回應加入 `Content-Security-Policy: default-src 'none'`（`py/reflective-xss`）
- Dependabot 漏洞全清：Electron `^36` → `^41.1.1`（修所有 HIGH use-after-free CVE）；npm overrides 強制 `lodash@^4.18.1`（修 code injection + prototype pollution）與 `@xmldom/xmldom@^0.8.12`（修 XML injection）
- `WS_HOST` 預設值從 `127.0.0.1` 改為 `0.0.0.0`，與 HTTP server 行為一致，Docker 部署不再需要手動指定

### 改善 / Improved

- Docker image 從單階段改為 multi-stage build：779 MB → 222 MB（縮小 72%）。Runtime image 不含 pip、uv、pytest、black 等 dev 工具與測試檔案
- CI：所有 GitHub Actions workflow 加入 `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true`，提前遷移至 Node.js 24（deadline 2026-06-02）
- macOS Release artifact glob 修正（`danmu manager` → `Danmu Desktop`），`.dmg` 與 `.zip` 現在正確上傳至 GitHub Releases

### 修正 / Fixed

- Effects editor（admin 面板）開啟時永遠顯示「Network error」：根因為 JS strict mode 下 `if` 區塊內的 `function` 宣告是 block-scoped，對 IIFE 外層不可見。將 `_buildPreviewParams`、`_getPreviewParams`、`_previewEffect`、`_triggerPreviewDebounced` 移至 IIFE scope
- Footer 版本號從硬碼 `v1.0.0` 改為 `{{ app_version }}`，由 `Config.APP_VERSION` 透過 context_processor 注入

### 新增 / Added

- `Config.APP_VERSION`（`server/config.py`）透過 Flask context_processor 注入所有模板，所有頁面的版本號自動同步
- CSP nonce per-request（`g.csp_nonce`）、HSTS opt-in（`HSTS_ENABLED`）、`app_version` 模板注入
- `server/tests/conftest.py` 新增 `_isolate_webhook_store` autouse fixture

### 測試 / Testing

- 測試總數：692（原 347）
- 新增 `test_api_routes.py` CSP/HSTS/security headers 整合測試
- 新增 `test_security.py` webhook store isolation 測試

## [4.1.3] - 2026-03-30

### 安全修正 / Security

- SVG 頭像注入防護：`api.py` 的 `generate_avatar()` 加入 regex 驗證 + `html.escape()`
- Rate limiter / Filter engine 記憶體洩漏修復：定期清理過期條目防止無限增長
- Overlay 登入閘門：設定 WS token 時未登入者自動跳轉 admin
- Jinja2 模板 XSS 修復：`overlay.html` 的 `wsToken` 改用 `|tojson` 過濾器
- Admin 儀表板 `escapeHtml()`：圖表與熱門文字的 `innerHTML` 加入跳脫
- Nginx IP 偽造防護：`X-Forwarded-For` 改用 `$remote_addr`
- Electron child CSP 放寬 `connect-src` 為 `ws: wss:`（支援非 localhost 連線）

### 修正 / Fixed

- Overlay nickname `insertBefore` 錯誤修復（節點未附加到父元素前呼叫）
- 啟動動畫遵守 `enabled` 旗標（`null` 設定不再強制播放）
- `getDisplays` IPC 回傳新增 `size` 與 `primary` 欄位
- OSV-Scanner CI 修復：補上 `actions: read` 權限

### 測試 / Testing

- 新增 15 個 Playwright overlay 渲染整合測試（`test_browser_overlay_render.py`）
- `TestConfig` 明確設定 `WS_AUTH_TOKEN=""`，防止測試間污染

## [4.1.2] - 2026-03-29

### 安全修正 / Security

- 修正所有投票面板 XSS 漏洞：`overlay.js`、`child-ws-script.js`、`admin.js` 的 `innerHTML` 全部改用 DOM API（CodeQL 通過）
- OBS overlay 加入 `poll_update` 訊息處理（與 Electron child window 一致）

### 國際化 / i18n

- 投票系統新增 20 個翻譯鍵（en/zh/ja/ko 四語言完整）
- Admin 投票 toast 訊息改用 `ServerI18n.t()`

## [4.1.1] - 2026-03-28

### 重構 / Refactoring

- `admin.py` 拆分為 16 個 domain sub-modules（路由按功能分離）
- `admin.js` 拆分（2633→1989 行）：提取 `admin-themes.js`（117 行）+ `admin-effects-mgmt.js`（552 行）
- 修復 14 項中優先級程式碼審查問題 (#62)

### 新增 / Added

- E2E CI job（Electron Playwright + `xvfb-run` + `ELECTRON_DISABLE_SANDBOX`）
- 6 個整合測試（webhook CRUD + scheduler lifecycle）
- CI 依賴快取（`actions/cache@v4` for uv venv + npm）

### 改善 / Improved

- `env.example` 改名為 `.env.example`（慣例）+ 更新所有引用
- `.gitignore` 補全（`server/.env`、`webhooks.json`）
- `Dockerfile` 優化（`--no-install-recommends`、OCI LABEL）
- 移除 9 個過期 `docs/superpowers/` 計畫文件（-7,316 行）
- 移除 `serialize-javascript` override（已不在依賴樹中）

## [4.1.0] - 2026-03-27

### 新增 / Added

- 部署整合：HTTPS/WSS（nginx 自簽憑證 + Traefik Let's Encrypt）
- 設計令牌系統（Design tokens）、產品命名統一
- 托盤圖標設計改善

## [4.0.0] - 2026-03-26

### 新增 / Added — 9 大進階功能

- **定時發送** — cron-like 排程器，支援單次/重複/延遲
- **過濾引擎** — 正則規則 + 置換/阻擋/標記動作
- **表情包系統** — 內建 emoji 庫 + `:name:` 語法
- **即時監控** — Live Feed 即時彈幕事件流
- **佈局模式** — scroll / top_fixed / bottom_fixed / float / rise
- **Webhook 整合** — HMAC 簽章 + 外部服務串接
- **暱稱系統** — 匿名 / 自訂暱稱標籤
- **音效系統** — 彈幕觸發音效（本機來源限制）
- **插件系統** — Python 插件熱插拔 + 事件 hooks

### 新增 / Added — 4 大特色功能

- **OBS Browser Source overlay** — 獨立 `/overlay` 頁面，純瀏覽器 JS
- **互動投票** — Admin 建立投票 → 觀眾彈幕投票 → overlay 即時顯示
- **樣式主題包** — YAML 定義（default/neon/retro/cinema），一鍵切換
- **彈幕回放** — JSON timeline 匯出 + canvas 錄製影片

### 新增 / Added — 貼圖彈幕

- StickerService（resolve/list/delete + STICKER_MAX_COUNT）
- Admin 貼圖管理面板 + 上傳/刪除 API
- webp 支援、圖片大小限制、CSP 擴充

### 新增 / Added — 國際化

- Server-side i18n（`ServerI18n`）支援 en / zh / ja / ko
- Admin 面板 + 使用者頁面完整翻譯

### 新增 / Added — 測試

- 347+ 測試（Python 663 + Jest 300+）
- Playwright 瀏覽器測試（admin 20 + fire E2E）
- 系統測試（WS server + asyncio）
- E2E Electron Playwright 自動化

### 安全 / Security

- DoS 防護（WS 連線限制、nginx hardening、容器資源限制）
- Webhook HMAC 簽章驗證
- IPC sender 驗證 + 參數驗證
- CSP meta tag（index.html + child.html + overlay.html）
- Admin 密碼變更 API + bcrypt 雜湊

## [3.2.1] - 2026-03-02

### 安全更新 / Security

- 修復 GitHub CodeQL 告警：
  - `py/clear-text-logging-sensitive-data`（移除密碼明文輸出）
  - `py/stack-trace-exposure`（避免回傳內部例外細節）
  - `js/xss-through-dom`（圖片預覽 URL 增加 protocol/path 安全檢查）
  - `actions/missing-workflow-permissions`（workflow 權限最小化）
- Hardened admin auth defaults:
  - 移除 `ADMIN_PASSWORD` 不安全預設值
  - 啟動時要求至少提供 `ADMIN_PASSWORD` 或 `ADMIN_PASSWORD_HASHED`
  - runtime 密碼 hash 檔案權限調整為 `0600`

### 依賴與告警收斂 / Dependencies & Alerts

- 更新前端 lockfile，修復多個 transitive 漏洞（`minimatch`、`tar`、`glob`、`ajv`、`lodash`、`webpack`）。
- 透過 npm `overrides` 強制 `serialize-javascript@7.0.3`，修復 Dependabot alert `GHSA-5c6j-r48x-rmvq`。
- 移除暫時性忽略設定，改為實際版本修補。

### 文件與流程 / Docs & Process

- 更新 `README.md`、`README-CH.md`、`server/README.md` 的安全設定說明。
- 補充並更新 `security_best_practices_report.md`。
- 調整 OSV scanner workflow，支援 push 與手動觸發以保持安全頁面狀態同步。

## [3.1.0] - 2025-01-XX

### 新增

- **安全性改進**
  - 管理員密碼支援 bcrypt 雜湊（向後相容明文密碼）
  - CORS 配置支援，可設定允許的來源
  - Session Cookie 安全設定（Secure, HttpOnly, SameSite）
  - 輸入驗證使用 marshmallow schema 驗證所有 API 請求
- **監控與可觀測性**
  - 健康檢查端點 (`/health`, `/health/ready`, `/health/live`)
  - 結構化日誌支援（JSON 格式，可透過 `LOG_FORMAT=json` 啟用）
- **效能改進**
  - 靜態資源快取（Cache-Control headers）
  - Supervisor 進程管理配置（可選）
- **開發體驗**
  - Makefile 提供常用操作指令
  - 開發環境 Docker Compose 配置 (`docker-compose.dev.yml`)
  - 密碼雜湊工具腳本 (`server/scripts/hash_password.py`)
  - Docker 構建 GitHub Actions workflow

### 改進

- Docker 容器使用非 root 用戶運行（提升安全性）
- 健康檢查使用專用端點而非根路徑
- 環境變數配置更完整（`.env.example` 更新）

### 技術變更

- 新增依賴：`bcrypt`, `flask-cors`, `marshmallow`
- 輸入驗證統一使用 `server/services/validation.py`
- 日誌系統支援 JSON 格式輸出

## [3.0.0] - 2025-01-XX

### 新增

- 容器化部署支援（Docker 和 Docker Compose）
- 完整的部署文檔 (`DEPLOYMENT.md`)
- 伺服器架構重構（Blueprints、Services、Managers）
- WebSocket 伺服器分離為獨立進程
- CSRF 保護
- 速率限制
- 字型下載授權（簽名 token 含過期時間）
- Pytest 測試框架
- 自託管 CDN 資源（Tailwind、Three.js、Vanta.js）

### 改進

- 伺服器代碼結構化重構
- 安全性大幅提升
- 測試覆蓋率增加

## [2.x.x] - 先前版本

（歷史變更記錄...）
