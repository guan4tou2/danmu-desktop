# Danmu Fire · v2 Design Handoff

**Last updated**: 2026-04-27 (post Phase 1 sidebar 17-row consolidation · commit `d208e9b` · live on VPS)

> ✅ **2026-04-27 Phase 1 done**：依照 Design reply（[`design-v2-redundancy-audit-2026-04-27.md`](./design-v2-redundancy-audit-2026-04-27.md) §8），sidebar 已從 20 → 17 row，三個整併動作都落地並部署到 VPS：
>
> - `messages` 獨立 + `history` 含 2-tab strip（匯出 / 重播）→ 砍掉 `replay` row
> - `themes` 獨立 + `viewer-config` 含 2-tab strip（整頁主題 / 表單欄位）→ 砍掉 `display` + `viewer-theme` row
> - Fire Token sub-row 移除，`#/firetoken` 仍可由 integrations 頁的「詳細統計 →」deeplink 進入
>
> **Mobile RWD verified at 375px** — 17 row 不爆版、tabbar 325px 內合住。**951/951 non-browser tests pass**；24/26 browser tests（同樣的 2 個 sec-security v2 retrofit 既有破口，跟整併無關）。
>
> **下一步邀請 Design 補的 prototype（可選，工程不阻塞）**：
> 1. `#/history` 的 2-tab strip artboard（匯出 tab 已實作，重播 tab 用既有 admin-replay UI）
> 2. `#/viewer-config` 的 2-tab strip artboard（PAGE tab = 既有 viewer-theme presets，FIELDS tab = 既有 display rows）
>
> **Phase 2 P0 開工**（依 Design 拍板順序）：About → Setup Wizard → Poll Deep-Dive。三個都是新獨立 page，sidebar 加 nav 沒問題（17 row 還有 buffer，不會回到 20+ 的擁擠狀態）。

**原 last updated**: 2026-04-27 (post Sprint 1 + DanmuMarquee bundle · commit `f959b62`)

對 Claude Design 的回覆稿。涵蓋：
1. 已對齊並部署的事項（VPS 上跑著）
2. UI 在但資料是 mock / partial 的項目（哪些已補真、哪些還在等決策）
3. Prototype 設計但完全未實作的元件
4. 我們做的設計偏離（需要 Design 確認 OK 還是要改）
5. 給 Design 的具體問題清單

---

## 1. 已對齊並部署

當前 production commit `8f118fd` on branch `claude/design-v2-retrofit`（**未** merge main）。
從接手起累計 27 個 commit。

### Viewer (`/fire`)
- 滑桿 cyan 漸層 track（用 `::-webkit-slider-runnable-track` + `::-moz-range-progress` 解決 Tailwind preflight + Safari 不認 `accent-color` 的問題）
- 桌面版整頁滿版（移除 960px 卡片），與 prototype `width: '100%'` 一致
- Sendbar 統一桌面 + 手機都 sticky 在 viewport 底部（之前桌面是自然流）
- 主題切換 ◐/◑（desktop only，per `!isMobile` guard）+ localStorage 持久化
- 語言切換中/EN Seg（替換原本的 select；`<select>` 隱藏保留給 i18n.js wiring）
- Sendbar pill 邊框：有文字時轉 cyan
- charCount > 90 字轉 amber（`var(--color-warning)`，已校準到 `#fbbf24`）
- glow 效果選中時，預覽文字加 `0 0 12px ${color}` 發光陰影
- 字級/透明度 2 欄 grid · 速度 step 0.1
- Speed 範圍 0.5–3.0（默認 1.0×）/ Opacity 20–100（默認 100）/ FontSize 16–64（默認 32）

### Admin Dashboard
- 移除 topbar 上的「直播模式」toggle（v4 遺留物，prototype 沒有）
- 即時訊息加 filter chips（全部/Q&A/Poll 投票/已遮罩/已回覆 — UI scaffold；filter 邏輯待後端訊息標籤）
- Widget tile 加 PAUSE/RUN + CONFIG 動作按鈕（PAUSE/RUN POSTs `/admin/widgets/update {visible: !current}`）
- 快速投票 inline form：題目 + A~F 選項 + START
- Sidebar live badge 計數：訊息（24h）/ Widgets / 黑名單 / 效果 / 主題 / 插件
- KPI bar sparklines from real `/admin/stats/hourly` distribution

### Admin sub-pages
- 字型管理：每筆字型加「設為預設」按鈕；live `預設` badge 從 `/get_settings.FontFamily[3]` 取
- Moderation：頂部 4-tile stats strip（RULES / MASKED·24H / BLOCKED·24H / BLACKLIST），其中 RULES + BLACKLIST 已是 live；MASKED/BLOCKED 等 backend per-action counter（見 §2）
- **Moderation 即時審核日誌**：✅ 完整 live（`services/filter_events.py` 200-entry ring buffer + `filter_engine.check()` 命中時 push + `GET /admin/filters/events?since=<seq>` + 前端 4 秒輪詢、動作著色）
- **Plugins LIVE CONSOLE**：✅ 完整 live（`services/plugin_console.py` ring buffer + `_PluginStream(io.TextIOBase)` + `plugin_manager._run()` 用 `contextlib.redirect_stdout/redirect_stderr` 包住每個 hook 呼叫，既有 plugin 的 `print()` 自動進 buffer + `GET /admin/plugins/console?since=<seq>&plugin=<name?>` + 前端 5 秒輪詢、最多 80 行）
- System & Fingerprints：Server block 加 CPU USAGE / MEM RSS / MSG RATE / **UPTIME** 四個 KV（從 `/admin/metrics` 的 series last sample，UPTIME 從 module-import 時記的 `_SERVER_STARTED_AT`）
- Fingerprint table 標題改成「`247 UNIQUE · 2 FLAGGED`」（routes/admin/fingerprints.py 加 `flagged` 計數）
- Polls 拖曳排序：drop-hint cyan 發光線（`::before` 偽元素，避免 border-top 造成 content shift）
- Polls 後端 schema 已支援 `image_url` + `time_limit_seconds`（commit `61a5dbc`），前端 dropzone + crop ratio 切換器**未做**（見 §3）
- Ratelimits：admin scope default 從 60 → 300（配合 config.py）

### Bundle drop 2026-04-27 (`YUL7-YdY` redesign)

- **DanmuMarquee** — 12 fake danmu chips scroll right→left across the hero
  background (`.viewer-hero-marquee`). Mask gradient on left 22%, per-chip
  stagger via `:nth-child` overrides, mobile clamps y to ≤38, mobile uses
  -500px scroll distance vs desktop -1100px. `prefers-reduced-motion`
  respected (animation off). Hero gets `position:relative; overflow:hidden`
  and a new `<div class="viewer-hero-spacer">` between lockup and utility.
- **ConnChip solid bg** — was `transparent`, now `var(--color-bg-base)`
  (offline) and `linear-gradient(cyanSoft, cyanSoft) + bg` (online) so the
  marquee no longer bleeds through the pill.
- **URL cleanup** — overlay idle subtitle `danmu.im/42` → `伺服器網址`;
  admin-broadcast hint「主持人暫停」→「暫停接收」. Other mtg-042 / fire-id
  references already absent (sysoPublicUrl uses `location.origin`).
- **Prototype sync** — `docs/designs/design-v2/` refreshed from new bundle
  (14 `.jsx` + `design-canvas.jsx` + `Danmu Redesign.html`).

**Skipped from this bundle**:
- ViewerTabs (Fire / Poll) — needs public `/poll/status` endpoint or WS
  push. Defer to v5.1 Sprint 2.
- 結束廣播確認碼 `END-LIVE` — production already uses `randomCode()` (4-digit
  random) which is stronger than a fixed string. Keep current.

### Sprint 1 (post Design reply 2026-04-26)

- **Sidebar 廣播 nav 移除**（per Design: 廣播只留 topbar 燈號 + backend service 保留）
- **Moderation MASKED·24H / BLOCKED·24H** 即時值（`filter_events.counts_24h()` 從 ring buffer aggregate；前端 4s 輪詢同步更新 stats strip）
- **Ratelimits 近期違規 feed** 串上後端（`security.recent_violations(limit=30)` 從現有 `_rate_stats_violators` deque 抽，掛在 `/admin/metrics.recent_violations`；前端 5 分鐘窗口顯示 TIME / SCOPE / IP）
- **Dashboard Widget UPTIME 前端**（`widgets.create_widget()` 已加 `created_at`；tile 從 `Math.floor(Date.now()/1000 - w.created_at)` 算 d/h/m/s 顯示，回退到 `STATUS · RUNNING/PAUSED`）
- **Display Settings AutoSyncCard**（取代 DeployCard：implicit deploy 狀態指示器 + 還原預設 + **匯出 JSON** 按鈕，dsp2-export client-side Blob download）
- **Language endonyms**（admin 與 viewer hidden select 從 EN/ZH/JA/KO 改成 English / 中文 / 日本語 / 한국어）

### Production fixes
- admin-broadcast.js 不再噴 `refreshHistory is not defined`（移除呼叫；後端從未有 `/admin/broadcast/history`）
- WebSocket URL 從 `wss://host/` 改成 `wss://host/ws`（nginx 只代理 `/ws` 到 4001 內部 port）
- `ADMIN_RATE_LIMIT` env default 60 → 300（admin 同時跑多個 polling 很容易爆 60/min）
- admin-scheduler 在 502 時不再 `SyntaxError: Unexpected token '<'`（先檢查 `resp.ok`）
- `--color-warning` token 從 `#eab308` (yellow-500) 校到 `#fbbf24` (amber-400) 對齊 prototype `hudTokens.amber`

---

## 2. UI 已建好的 mock / partial 狀態追蹤

**已從原 14 項消掉 9 項**（Phase 1+2+3 + Sprint 1 完成）：

| 位置 | 狀態 | 補真所需 / 原因 |
|---|---|---|
| ~~Plugins LIVE CONSOLE~~ | ✅ 完成 | stdout pipe + ring buffer + endpoint + 前端 tail 全部實作 |
| ~~Moderation 即時審核日誌~~ | ✅ 完成 | filter_engine 命中即 push event + 前端動作著色輪詢 |
| ~~System Server block UPTIME~~ | ✅ 完成 | metrics route module-import 時記 `_SERVER_STARTED_AT` |
| ~~Fingerprint table FLAGGED count~~ | ✅ 完成 | routes 加 `flagged` 計數，前端標題顯示「N UNIQUE · M FLAGGED」 |
| ~~Dashboard Widget UPTIME~~ | ✅ 完成 | widgets.create_widget 加 `created_at`，tile 渲染 d/h/m/s 格式 |
| ~~Moderation MASKED·24H + BLOCKED·24H~~ | ✅ 完成（buffer-bound）| `filter_events.counts_24h()` 從 200-entry ring buffer aggregate；高流量下會吃不下完整 24h，需要 v5.2 真 aggregator |
| ~~Ratelimits 近期違規 feed~~ | ✅ 完成（5 分鐘窗口）| 從現有 `_rate_stats_violators` deque 抽；長期窗口需 ratelimit_events ring buffer（仿 filter_events pattern） |

**仍是 mock，等 v5.1 Sprint 2 / v5.2**：

| 位置 | mock / partial 內容 | 補真所需 |
|---|---|---|
| Dashboard 訊息 filter chips | 點選只切換 active 樣式，不真的過濾 | `/admin/history` 記錄需要 `tag` / `intent` 欄位（`qna` / `poll` / `masked` / `replied`）— v5.1 Sprint 2 |
| Polls 圖片上傳 + crop | 後端 schema 就緒，前端 dropzone + canvas crop 未做 | spec 已給（drag reposition + scroll wheel zoom，預設 16:9，≤2MB，自動壓縮 1280px）— v5.1 Sprint 2 |
| Dashboard Widget tile CALLS | 不顯示 | widgets 服務需 `call_count` — v5.2 |
| Plugins 列 UPTIME / MEM / CALLS | prototype 有，實作只顯示 PRIORITY · AVG | plugins 服務需追蹤 process stats — v5.2（需 instrumentation framework） |
| Ratelimits IP 黑/白名單 | UI 可新增/刪除，但不持久化也不真的 enforce | 需 IP policy service + nginx/Flask middleware — v5.2 |
| Fonts CDN DELIVERY | HIT RATE / P95 TTFB / REQ/24H / EDGE 全部 `—` | 需要 CDN access log 解析 or proxy stats — v5.2 |
| Fonts SUBSETTING bar | 固定顯示 38% 「節省」 | 需要 pyftsubset 整合（依賴未加） — v5.2 |
| System QR · 觀眾掃碼 | 只有文字「觀眾掃碼即可加入」，沒實際 QR | 加 QR generator (qrcode.js client-side OK，~6KB) — Design 確認 v5.1 Sprint 1 但這輪未做 |
| Effects YAML inspector PREVIEW | EDIT/RELOAD 動作有，但 PREVIEW 只切到 effect 卡 | 需要單檔 hot-reload preview — v5.2 |
| Moderation 24h aggregator (long tail) | 200-entry ring buffer 在高流量下吃不下整 24h | 真 aggregator 需要 hourly bucket persistence — v5.2 |

---

## 3. Prototype 完全未實作的元件

### `OverlayMiniCtrl`（priority-2-pieces.jsx）
**設計意圖**：在主持人簡報軟體（Keynote/PPT）上方覆蓋的浮動 mini control 小卡，可即時切換 BROADCAST 狀態、看 viewer count、send quick-broadcast 等。

**狀態**：✅ **產品方確認跳過**（不在 v5 scope）。需 Electron 桌面端做 always-on-top + transparent 子視窗。

### Broadcast page（v5 自行加入，不在 prototype）
- 後端：`server/services/broadcast.py` + `server/routes/admin/broadcast.py`（新增於 commit `a06ad17`）
- 前端：`admin-broadcast.js` + 完整 sec-broadcast page + sidebar nav 「廣播」+ topbar 「BROADCASTING/STANDBY」按鈕

**Design 確認**：
- prototype 只在 topbar 有 `BROADCASTING` 純標示（沒有頁面、沒有 toggle 概念）
- 我們做了完整一頁可以切換 LIVE/STANDBY、看 metrics
- 用戶（產品方）說「先留著好了」
- **要不要砍掉？** 還是這個概念其實要納入 v5.1 設計？

### Display Settings 三張右側 rail card
prototype 右側有：
- PreviewCard（觀眾現在會看到的彈幕樣貌）
- DeployCard（套用按鈕 + 套用後幾秒生效）
- SummaryCard（AUDIENCE · X/6 OPEN 統計）

實作只有 SummaryCard。Preview 整合在中間欄頂部，Deploy 是隱式（每次 patch 即套用）。

**問 Design**：right rail 三卡疊放 vs 我們的「中欄頂部 preview + 隱式 deploy + 右側 summary」哪個體驗較好？

### Polls — 圖片上傳 + crop 比例選擇器
prototype 每題編輯區：
- 圖片拖放上傳（dropzone）
- 16:9 / 1:1 / 4:3 比例切換（影響圖片裁切）
- 每選項可獨立啟用 `img: true`，整題只在「至少一個選項 img: true」時顯示比例選擇器

實作：題目 schema 已支援 `image_url` + `time_limit_seconds`（commit `61a5dbc`），但前端裁切器與 dropzone 沒做。

**問 Design**：
- crop UX 是預覽即時裁切（canvas）還是上傳完成才裁切？
- 若使用者沒選比例，預設 16:9 還是 1:1？
- 圖片大小限制？格式（PNG/JPG/WebP）？
- 需不需要支援 emoji 或 sticker 直接拉進來？

---

## 4. 我們做的設計偏離（需要 Design 確認）

| 偏離點 | prototype | 我們做的 | 原因 |
|---|---|---|---|
| 語言選單 | viewer hero 只顯示「中/EN」2 個 SegBtn | viewer 顯示 中/EN Seg（visible），背後 hidden `<select>` 仍支援 EN/ZH/JA/KO | 程式碼有 4 語系，UX 隱藏多語也不對 |
| Admin topbar | 只有「⌕ 搜尋 ⌘K」+「BROADCASTING」按鈕 | 多了 lang select + 紅色 logout 按鈕 | 實際運維需要切語言 + 登出 |
| Admin sidebar 多了幾項 | 4 個分組共 12 nav | 多了「歷史重播」「觀眾頁主題」「素材庫」「廣播」「安全」「備份 & 匯出」| 都是程式碼有的功能，不秀就找不到入口 |
| viewer Footer | prototype 沒有 footer | 有 GitHub 連結 + version | open source 必要 attribution |
| Plugins 列欄位 | UPTIME / MEM / CALLS / LANG / ACTIONS | VERSION / PRIORITY / LANG / STATUS | UPTIME/MEM/CALLS 後端沒追蹤；我們的欄位反映實際資料 |

---

## 5. 給 Design 的問題

### 5.1 v5.0 vs v5.1 切分
這輪做的東西全部上 production VPS（branch `claude/design-v2-retrofit`，未 merge main）。要不要：
- **(A)** 把目前狀態作為 **v5.0 release** 標籤 + 刪 v4 相容 alias
- **(B)** 等 Polls 圖片上傳 + Display Settings 三卡右 rail 全做完才 release v5.0
- **(C)** 切 v5.0 用目前狀態 → v5.1 處理 §2 的「mock 補真」清單

我傾向 **(C)**：當前狀態已遠超 v4.8，「mock 補真」清單需要 Design 排序與後端架構決策才能進行。

### 5.2 Broadcast 頁面去留
請參考 §3 第二段。Design brief 明確不在 prototype，但已實作。

### 5.3 Mock 補真優先序
§2 還剩 9 項（含已部分完成的 Widget UPTIME 前端渲染）。建議 Design 給優先順序：

**容易補（已有 ring buffer 基礎，照樣 pattern 加即可）**：
- Moderation MASKED·24H / BLOCKED·24H — filter_events.py 已有 buffer，加 24h aggregator
- Ratelimits 近期違規 feed — 重用 filter_events pattern，新增 ratelimit_events ring buffer

**中等（需要新後端服務）**：
- IP 黑/白名單 enforce — IP policy service + middleware
- Polls 圖片上傳 + crop — 需要 Design 確認 UX flow（§3）
- System QR — 加 qrcode.js（~6KB）就好

**重（需要新依賴或新架構）**：
- Fonts pyftsubset 子集化（10 MB+ 依賴）
- Fonts CDN 分析統計
- Plugins UPTIME / MEM / CALLS（需要 plugin instrumentation framework）

### 5.4 Token 細節
- prototype `hudTokens.lime: '#86efac'` 我們有對齊 ✓
- prototype `hudTokens.crimson: '#f87171'` 我們有對齊 ✓
- prototype `hudTokens.amber: '#fbbf24'` 已校到 `--color-warning` ✓
- prototype 有 `magenta` alias 指向 amber（per design brief 已決定 amber 取代 magenta）— 我們 `--color-magenta` 沒定義，admin 也沒用，OK

### 5.5 Mobile prototype handoff
viewer mobile prototype 裡（`ViewerMobile`）：
- 假狀態列 14:02 + ●●●● 訊號條（純視覺裝飾）
- 我們**沒**畫，因為實際手機瀏覽器有自己的狀態列
- 確認這是 prototype 的 mockup 表示 vs 真要 fake 一個？

### 5.5b Open Q from Design's bundle (chat ended before resolution)

Design's chat transcript closes with two unanswered questions. Need product/Design to align before implementation:

- **Mobile viewer theme/lang switcher** — currently the ◐/◑ + 中/EN seg row is desktop-only (per prototype `!isMobile` guard). On mobile, user sees no way to switch theme or language. Should mobile get the seg too? Or a different control (e.g. tap-and-hold gesture, or buried in a hamburger)?

- **Desktop viewer hero too sparse on wide screens** — Danmu Fire title can look tiny + lost on a 2560px monitor. Options Design hinted at: (a) cap title font-size at viewport-relative ceiling (e.g. `min(8vw, 7rem)` instead of unbounded `clamp`), (b) add a subtle decorative element on either side, (c) center-constrain the hero block while keeping body full-width.

Both are pure CSS/HTML changes once Design picks a direction.

### 5.6 Edge state pages
prototype `priority-2-pieces.jsx` 有：
- viewer offline / overlay connecting / admin lockout（per backlog P2 items）

memory 顯示 v5.0.0 sprint 「P2 edge state pages」已完成，這輪沒重新驗證對齊度。要不要也審一輪？

---

## 6. 程式碼層面的 v5 工程債（與設計無關，但 Design 應知道）

- `admin.js` 還有 3197 行（從 3436 split 出 login + dashboard 後）。Design 改 dashboard 任何視覺一定動到這檔，建議 v5.1 再 split sidebar + topbar 出去
- `viewer-v2.css` 已是 prototype 一對一鏡像，未來 prototype 改設計時 diff 檔很乾淨
- shared `tokens.css` symlink 到 server/static/css/tokens.css — Electron 與 server 都吃同一份，prototype 的 token 改了我們改一處就同步
- `services/filter_events.py` + `services/plugin_console.py` — 兩個新 ring buffer 服務都用相同 pattern（threading.Lock + collections.deque + monotonic seq）。後續 Ratelimits 違規 feed、Widget call_count 等可以照抄。

---

## 7. 後端新檔（這輪新增 / 重構）

```
server/services/filter_events.py     ← Moderation 即時審核日誌 ring buffer
server/services/plugin_console.py    ← Plugin LIVE CONSOLE ring buffer + io stream
server/services/widgets.py            ← create_widget() 加 created_at
server/services/filter_engine.py      ← check() 命中時呼叫 filter_events.record()
server/services/plugin_manager.py     ← _run() 用 contextlib.redirect_stdout 包住 hook
server/routes/admin/filters.py        ← + /admin/filters/events
server/routes/admin/plugins.py        ← + /admin/plugins/console
server/routes/admin/fingerprints.py   ← list_fingerprints() 加 flagged 計數
server/routes/admin/metrics.py        ← + server_started_at
server/static/js/admin-filters.js     ← Live log polling + action color
server/static/js/admin-plugins.js     ← Console tail polling
server/static/js/admin-fingerprints.js ← UNIQUE · FLAGGED 顯示
```

---

## 8. 對 Design 2026-04-27 priority list 的回覆

Design 提了三組未實作項：

### 🟡 Cross-page UX standards (todo #33)
- **#18 指紋 / 暱稱統一** — 我選這個當下一輪起手，理由：影響跨頁，已掛 todo，後端有 fingerprint_tracker 可直接接。
- #19 Effects inline preview — admin-effects-mgmt.js 卡片已有 IntersectionObserver 觸發 live demo，視覺上其實非靜態。要 Design 確認還缺什麼？
- #21 雙語標題清理 — 同步檢查時可順便做，不獨立排優先序。

### 🟡 Viewer 端 feedback
- **送出後反饋 toast** — 第二輪做。實作：fire 200 後 setTimeout 1.5s 內觀察 `previewText` 高亮 + show toast `已送出 · 預計 2s 內出現於螢幕`
- **Cooldown 倒數** — fire 收 429 時，FIRE 按鈕變 `▼ 等 Ns` disabled 倒數
- **被 mod 反饋** — fire 收 400 with `reason: blocked` 時 toast 顯示「訊息含敏感字 · 已遮罩」

### 🟡 Admin / 其他
- Live 狀態 hero band — Dashboard 加 LIVE chip 不難（已有 `broadcasting` state），但要 Design 確認位置（topbar 還是頂部 strip 上方？）
- 權限分層 / 多角色 — 後端要做 role table + 中介層，至少 3-5 天工程。先擱。
- 行動版 Admin — admin 全頁 1440 寬，沒有 mobile media query。重做整套 1-2 週工程。先擱。

### 🟢 視覺薄
- **Polls Builder 拖曳視覺** — drop indicator 已在這 session 修了（`::before` cyan glow line）。Ghost row 還沒做。第三輪可補。
- Effects dropzone hover/drop state — admin-effects-mgmt.js 有 dropzone 但 hover 樣式薄。視覺打磨 1-2 hr。
- Plugins installing/error variants — 要 backend instrumentation framework，v5.2。
- Desktop Overlay reconnecting pill — overlay.html 已有 idle/connecting/disconnected dot，但沒「reconnecting」變體。`connection-status.js` 有 reconnect 邏輯但沒 chip 切到 reconnecting label。視覺打磨 1 hr。

### 我選的下一輪 priority order
1. **#18 fp/nickname 統一**（4-6 hr，跨 admin + viewer）
2. **viewer 送出反饋 toast + cooldown UX**（2-3 hr）
3. **Polls Builder ghost row + Desktop reconnecting pill + Effects dropzone polish**（合併打磨輪，3-4 hr）
4. **#19 / #21 雙語標題稽核 + Effects inline preview 驗證**（1-2 hr）

### Open Qs for Design (從上輪未答)

- **Mobile viewer theme/lang switcher** — desktop hero 顯示 ◐/◑ + 中/EN seg，mobile 完全沒有，是要加還是隱藏？
- **Desktop viewer hero too sparse** — DanmuMarquee 應該已經填滿中間留白，但確認一下 Design 還想加什麼？或者這條已自動 close？
- **#18 fp short form 長度** — AdminIdentity 約定 `FP_DISPLAY_LEN=8`（顯示 `fp:xxxxxxxx`），viewer 端用同樣 8 位還是更短的 `fp-xxxx`（4 位）？
- **#18 暱稱改名 chip** — viewer 點擊 chip 跳出 modal 還是直接 inline edit？

---

## 部署環境
- VPS: Oracle 138.2.59.206:4000（HTTPS via nginx）
- 容器：`danmu-fire` + `danmu-reverse-proxy-https`
- 當前 commit：`8f118fd` on `claude/design-v2-retrofit`
- 未 merge main（main 仍 v4.8.x）
- Tests: 881 通過（unit + system，排除 browser playwright 需獨立跑）

部署指令參考 `~/.claude/projects/-Users-guantou-Desktop-danmu-desktop/memory/vps_deploy.md`。
