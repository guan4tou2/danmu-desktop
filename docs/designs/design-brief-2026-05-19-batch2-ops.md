# Design Brief — 2026-05-19 Batch 2 (運維三頁)

**Status:** 待 designer 出 v4 mockup
**Author:** engineering（從現有實作 reverse 出功能 spec）
**Branch:** `claude/design-v2-retrofit`
**Context:** Batch 2 是「觀眾用不到、但維運會看」的三頁：插件管理、整合 / extensions、投票深度分析。Plugins 還沒用 v4 `admin-v2-head`（保留舊的 Tailwind+`hud-page-stack`），需要整頁重設計；Extensions / Poll-DeepDive 已上 v4 chrome 但 layout 沒進過 design canvas。

---

## 共通約定（同 Batch 1）

- HUD palette `hudTokens`（cyan / amber / lime / crimson）
- 每頁 `admin-v2-head`（kicker mono-uppercase + title + 一行 note）
- 全 admin 預設 light 主題，token 已 light/dark dual
- Loading: `AdminSkeletons.render(...)`
- Empty: `AdminEmpty.render(...)`
- Toast: `showToast(msg, isSuccess)`
- 預設 desktop 1280–1440px，mobile <768px 自動 single-column stack

---

## 1. `#/plugins` — 伺服器插件

### 為什麼

Admin 上傳 `.py` / `.js` 插件擴充 server 行為（filter middleware、自訂指令、自動回覆）。需要看哪些插件已載入、各自的優先級、開關、上傳新插件、重新載入、看 stdout/stderr。

### 現有實作 → [admin-plugins.js](server/static/js/admin-plugins.js) (368 行)

**目前是「Tailwind + 舊 hud-table」混血**，是 Batch 1-3 裡唯一還沒 retrofit 到 `admin-v2-head + admin-v2-card` 的頁。Designer 出 mockup 後工程會把整頁重寫成新 chrome。

**Layout: 單欄 vertical stack（hud-page-stack）**

#### Head row

- 左：插件管理 title + desc（i18n: `pluginsTitle` / `pluginsDesc`）
- 右：`＋ 上傳 .py/.js · ↻ 重新載入` CTA（hud-toolbar-action）

#### 4-KPI stats strip（已用 `hud-stats-strip` 但需 retrofit 成 `admin-kpi-strip is-4col`）

- LOADED · 已載入 · 數字（neutral text）
- RUNNING · 運行中 · 數字（lime）
- PAUSED · 已暫停 · 數字（amber）
- PRIORITY · AVG · 平均優先度 · 數字（cyan）

#### Plugin list table

6 column grid（`24px 1fr 120px 100px 80px 100px`）：
- `●` status dot（is-live lime / is-paused mute）
- `PLUGIN · 描述` — 大字 name + 灰字 description（truncate）
- `VERSION` — mono `v1.2.3` 或 `—`
- `PRIORITY` — colored pill：
  - 1-10 → danger (crimson) 「critical」
  - 11-50 → amber 「high」
  - 51+ → cyan 「normal」
- `LANG` — pill `PY` / `JS`（從 `file` 擴展名 detect）
- `STATUS` — 右對齊 toggle switch（24×28px 開關）

#### LIVE CONSOLE panel（最下方）

- 卡頭：`●live dot + LIVE CONSOLE + stdout + stderr · filter by plugin · TAIL · LIVE`
- 卡內：mono console body，最多 80 lines, 每 line：
  ```
  HH:MM:SS  INFO|WARN|ERROR|DEBUG  plugin-name  message text...
  ```
- 4 level color：INFO neutral / WARN amber / ERROR crimson / DEBUG mute
- 每 5s poll `/admin/plugins/console?since=N` 拉新訊息（incremental）
- 空 state 顯示：`Console stream becomes live when plugins emit stdout/stderr.`

### 後端 endpoint → [routes/admin/plugins.py](server/routes/admin/plugins.py)

| Method | Path | Body | Returns |
|---|---|---|---|
| GET | `/admin/plugins/list` | — | `{plugins: [{name, version, description, priority, enabled, file}]}` |
| POST | `/admin/plugins/enable` | `{name}` | `{ok}` |
| POST | `/admin/plugins/disable` | `{name}` | `{ok}` |
| POST | `/admin/plugins/reload` | — | `{loaded: N}` |
| GET | `/admin/plugins/console?since=N` | — | `{events: [{ts, level, plugin, msg, seq}], latest_seq}` |

**Plugin shape**:
```json
{
  "name": "auto_translate",
  "version": "1.2.0",
  "description": "翻譯外文彈幕成中文",
  "priority": 50,
  "enabled": true,
  "file": "plugins/auto_translate.py"
}
```

### States designer 需 spec

- ✅ **Loading**（list + console 各自）
- ✅ **Empty plugins** — `No plugins found`，並附 hint「上傳第一個 .py 或 .js」
- ✅ **Running / Paused** status dot 2 色 + toggle switch ON/OFF
- ✅ **Priority pill 3 色**（critical/high/normal）
- ✅ **LANG pill 2 種**（PY / JS）
- ✅ **Console 4 level color**（INFO/WARN/ERROR/DEBUG）
- ❌ **Upload UI** — 目前 CTA 寫 `+ 上傳 .py/.js`，但沒有 file picker 行為。後端也沒 upload endpoint，需 spec'd
- ❌ **Toggle 失敗回滾** animation（目前用 `checked = !enable` 直接回滾）
- ❌ **Console 篩選** — `filter by plugin` 寫在 kicker 但沒實作，需 spec UI

### Open Qs for design

- Upload 流程：drag-drop zone vs file picker vs 雙方都可？簽章驗證（HMAC？）？
- Plugin 卸載（uninstall vs disable）— 目前沒卸載，要不要加？
- Console filter 是 dropdown 還是 chip strip（per-plugin chip）？
- Priority 是否可 inline edit（current 是 readonly pill）？
- Plugin error log（ERROR-only filter） + alert badge 在 stats strip？

### BE 缺口

- `POST /admin/plugins/upload`（file upload + 解壓 + 驗證）
- `POST /admin/plugins/uninstall`
- `PATCH /admin/plugins/<name>/priority`

### 驗收

- 整頁採用 `admin-v2-head + admin-v2-card` chrome（重寫，不是 retrofit）
- 4-KPI 用 `admin-kpi-strip is-4col` 跟 dashboard 一致
- Console 即時 tail（≤5s latency）順暢，不會跳動
- Mobile（<768px）table 改 card stack（每 plugin 1 card）

---

## 2. `#/extensions` — 整合中心

### 為什麼

第三方接入的目錄頁 — Slido extension、Discord bridge、OBS plugin、bookmarklet 等都靠這頁安裝。**Fire Token**（共享 bearer）只在這裡管。Per 設計決議：Fire Token 跟 API Tokens（per-integration ACL）是分開的兩條 lane。

### 現有實作 → [admin-extensions.js](server/static/js/admin-extensions.js) (308 行)

**Layout: 卡片 grid（建議 2 column desktop / 1 column mobile）**

#### Page head

- Kicker: `INTEGRATIONS · 整合 · 第三方接入`
- Title: 整合
- Note: 「集中管理擴充功能與機器人接入。Slido extension / Discord bridge / OBS plugin / bookmarklet 等共用同一組 **Fire Token**，和 admin 的 API Tokens（per-integration ACL）是分開的兩條 lane。」

#### Extension cards (4 個)

每張卡的結構：
- **Head row**:
  - `●` status dot（`is-live` lime when matching source fired in last 5min, `is-cold` mute otherwise）
  - Icon `▦ ✉ ◎ ✦`（per-card color: cyan / violet / lime / amber）
  - Title block: name + version
  - Flag chip 右上：`READY` lime / `即將支援` amber
- **Description** (一行)
- **Install steps** (only `READY`): ordered list
  - download link → `/static/extensions/<file>.zip`
  - 「在 Slido 工作區點 Danmu icon → 貼入 Fire Token」這類純文字步驟
- **Fire Token panel** (只 Slido 卡有)：
  - Monolabel: `FIRE TOKEN · 共享機密` + 右側 deeplink `詳細統計 →` (`#/firetoken`)
  - Token display：
    - Plain (剛產生): 完整 token 用 `<code>` mono 顯示，帶 cyan accent
    - Masked (已存在): `dn_a1b2 (僅顯示前 6 碼，完整值僅產生時可見)`
    - 未設定: `未設定 — 點「產生」建立 token`
  - 4 個 button row：`複製` / `產生` (or `重新產生`) / `撤銷` (danger)
  - Hint: 「擴充功能在 popup 設定中貼入 token。撤銷會立即停用所有 extension（重 regen 後重新貼即可）。」

**4 個 extension 目前定義**:
| id | name | version | status | source match (for live dot) |
|---|---|---|---|---|
| slido | Slido Extension | v0.2.0 | ready | `slido` |
| discord | Discord Bridge | — | soon | `discord` |
| obs | OBS Plugin | — | soon | `obs` |
| bookmarklet | Bookmarklet | — | soon | `bookmarklet` |

### 後端 endpoint → [routes/admin/integrations.py](server/routes/admin/integrations.py)

| Method | Path | Returns |
|---|---|---|
| GET | `/admin/integrations/fire-token` | `{enabled, prefix, has_token, rotated_at}` |
| POST | `/admin/integrations/fire-token/regenerate` | `{enabled, prefix, has_token, rotated_at, token (raw, once)}` |
| POST | `/admin/integrations/fire-token/revoke` | `{enabled: false, has_token: false}` |
| GET | `/admin/integrations/sources/recent` | `{sources: [{source, last_seen, count}]}` |
| GET | `/admin/integrations/fire-token/audit` | `{events: [...]}` |
| GET | `/admin/integrations/fire-token/usage` | `{usage_24h, by_source}` |

`/sources/recent` 每 15s poll 一次，比對 `ext.sourceMatch` 點亮卡的 status dot。

### States designer 需 spec

- ✅ **READY / 即將支援** 兩種 flag chip
- ✅ **is-live / is-cold** status dot 2 色（lime + glow / mute + no glow）
- ✅ **Fire Token 3 狀態**（plain / masked / 未設定）
- ✅ **Install steps ordered list** 含 download link 樣式
- ❌ **Regenerate / Revoke 確認 modal** — 目前 native `confirm()`，danger 操作應該用 `HudConfirm`
- ❌ **Token 顯示動畫** — plain → masked 過渡（reload 後）
- ❌ **`即將支援` 卡是否可 collapse** 騰出空間給 ready 卡？

### Open Qs for design

- 4 張卡固定排版 vs ready 卡放大 / soon 卡縮小？目前 4 張同等大小。
- Token regenerate 後是 auto-copy + toast，還是要顯眼 banner（像 API Tokens 的成功 banner）？
- 卡 icon 是否需要重設（目前是 unicode glyph，沒插畫）？
- Source dot 5 分鐘窗口太短？太長？
- 第 5 張卡的 placeholder 該長什麼樣（鼓勵 community contribution）？

### BE 缺口

- 沒有 — 後端已就緒。

### 驗收

- Fire Token 顯示在 plain 狀態時，token 文字夠粗 / 易選取
- `即將支援` 卡視覺有區隔（不會讓 admin 誤點）
- Mobile 4 卡垂直 stack
- Status dot animation 平滑（pulse 不要太搶眼）

---

## 3. `#/poll-deepdive` — 投票深度分析

### 為什麼

投票結束 / 進行中時 admin 想看細節：每選項票數 + 百分比 + 視覺 bar、誠信檢查（去重狀態、bot risk）、sentiment index、跨期比較。**入口是 `#/polls` 頁的 📊 button，不在 sidebar nav。**

### 現有實作 → [admin-poll-deepdive.js](server/static/js/admin-poll-deepdive.js) (354 行)

**Layout: main + aside 兩欄（1.6fr + 1fr），mobile stack**

#### Page head

- Kicker: `POLL ANALYTICS · 深度分析`
- Title: 投票深度分析
- Note: 「選項分佈、票數佔比、誠信檢查。 `← 回投票列表` deeplink」

#### Main column

**(a) Header card** — 1 row
- State chip：`● ACTIVE` lime / `● ENDED` mute / `○ IDLE` muted
- Poll ID：mono `poll_xxxx`
- Question text（大字 24px）
- 5-KPI strip：
  - 總票數（lime）
  - 參與率（cyan）— `total / overlay_count * 100%`；無 audience snapshot 時顯 `—`
  - 持續時間（neutral）— `Nm SSs`
  - 重複指紋（lime if 0 / amber if >0）— `已自動去重`
  - 作弊嘗試（placeholder, dim）— `同 IP 連投（待 BE 擴張）`

**(b) Distribution card** — 選項分佈
- Monolabel: `選項分佈 · DISTRIBUTION`
- 每選項一 row：
  ```
  選項 label      N 票       XX.X%
  [▓▓▓▓▓░░░░░ horizontal bar fill with gradient + glow]
  ```
  - Bar 顏色循環：lime / cyan / amber / crimson / violet / orange（6 色 palette）
  - Bar fill `linear-gradient(90deg, c, c+aa)` + `box-shadow 0 0 8px c+55`
- 下方 sentiment 2-tile row：
  - **SENTIMENT INDEX** — `+N / -N` (大數字)：
    - `> +20` lime / `0..+20` cyan / `0..-20` amber / `< -20` crimson
    - sub: `正面 - 負面 / 100（依選項順序推算）`
  - **VS 上次** placeholder — `—` 灰 + `需要歷史 poll 持久化（v5.3 待補）`

**(c) Timeline placeholder card** — `投票時間分佈 · TIMELINE`
- 灰底 + 圖示 `⌖`
- 「需要 v5.3 vote-record 持久化」+ 描述 + link to prototype-gaps doc

#### Aside column

**(d) Geo placeholder card** — `地理分佈 · GEO`
- 灰底 + 圖示 `⊕`
- 「需要 IP geolocation · v5.3 想加 MaxMind / ipinfo lite」

**(e) Integrity check card** — 誠信檢查
- 4 row checklist：
  - ● is-good lime · 指紋去重 · 同一指紋 1 票 · `啟用`
  - ● is-good lime · Rate limit · /fire scope 限速 · `20/min`
  - ● is-warn amber · 同 IP 多投 · v5.3 將擋 X-Forwarded-For · `未強制`
  - ● is-warn amber · Bot 偵測 · UA / timing 分析尚未做 · `無`

**(f) Action card** — 3 CTA
- `↓ 匯出選項統計 (CSV)` primary
- `📋 複製分享連結` secondary
- `↺ 返回投票管理` ghost link → `#/polls`

### 後端 endpoint → [routes/admin/poll.py](server/routes/admin/poll.py)

| Method | Path | Returns（subset） |
|---|---|---|
| GET | `/admin/poll/status` | `{state, question, options: [{label, votes}], total_votes, poll_id, started_at, ended_at, duplicate_attempts}` |

`/admin/poll/status` 每 5s poll 一次。

### Real vs Placeholder (engineering 透明標示)

| Section | Status |
|---|---|
| Question text + options | ✅ real (poll service) |
| Per-option votes + % | ✅ real |
| Total votes + state chip | ✅ real |
| Participation rate | 🟡 real if `window._lastOverlayCount` snapshot 有；否則 `—` |
| Duration | ✅ real (started_at → ended_at / now) |
| Duplicate fp count | 🟡 real if BE 加 `duplicate_attempts` 欄；目前 fallback 0 |
| Sentiment index | ✅ frontend-derived (top half - bottom half %) |
| Timeline histogram | ❌ placeholder — 需要 v5.3 per-vote ts 持久化 |
| Geo distribution | ❌ placeholder — 需要 GeoIP lookup |
| Cheat attempts (same IP) | ❌ placeholder — 需要 IP tracking |
| Vs 上次 (Δ) | ❌ placeholder — 需要 poll history layer |
| Bot 偵測 | ❌ placeholder — UA / timing 分析未做 |

### States designer 需 spec

- ✅ **3 個 state chip 色**（active lime / ended mute / idle dim）
- ✅ **6-color option bar palette**（gradient + glow）
- ✅ **Sentiment 4 顏色階梯**（>+20 lime / 0..+20 cyan / 0..-20 amber / <-20 crimson）
- ✅ **Placeholder card 視覺**（灰底 / dim icon / 解釋文字 + 後端進度 link）
- ❌ **Empty page** state — 沒有任何 poll 時的引導
- ❌ **CSV 匯出 progress** — 目前同步即下載，但大量資料時可能要 spinner
- ❌ **Active poll 即時更新**動畫 — bar 漲縮過渡（目前 5s replace innerHTML 沒過渡）

### Open Qs for design

- Placeholder card 是否需要 ETA / target version 標籤（「v5.3」）顯示？目前用文字描述。
- Sentiment 是否需要圖示化（gauge / arrow）而不只是數字？
- Timeline placeholder 是否該顯示 mock 圖（避免空白感）？
- Integrity check 4 row 是否可摺疊 / 只看 warn？
- Geo placeholder 是否要顯示「啟用 GeoIP」CTA（即使 disable）？

### BE 缺口（per-vote level）

- per-vote `ts` 持久化（for timeline histogram）
- IP geolocation lookup（for geo card）
- Same-IP detection（for cheat counter）
- Poll history persistence（for VS 上次 Δ comparison）
- UA / timing bot heuristics（for bot detection）

這些都是 v5.3+ 後端工作。Design 可以先按假資料畫 timeline / geo 看起來的樣子，工程後續 wire 上去。

### 驗收

- Real vs Placeholder 視覺有明顯區隔（placeholder 灰底 + dim icon）
- 6 色 option bar 在白底（light theme）對比 OK
- Sentiment color 階梯切換清楚
- Action card 3 CTA 對齊一致

---

## Open BE-pending（跨 Batch 2 共用工程清單）

| 功能 | 影響頁 | BE 缺什麼 |
|---|---|---|
| Plugin upload | plugins | `POST /admin/plugins/upload` (file + 解壓 + 驗證) |
| Plugin uninstall | plugins | `POST /admin/plugins/uninstall` |
| Plugin priority edit | plugins | `PATCH /admin/plugins/<name>/priority` |
| Vote-record persistence | poll-deepdive | per-vote `ts` 寫 SQLite / append-only log |
| GeoIP lookup | poll-deepdive | MaxMind / ipinfo lite integration |
| Same-IP detection | poll-deepdive | `X-Forwarded-For` parsing + tracking |
| Poll history | poll-deepdive | 歷史 poll snapshot 持久化 |
| Bot heuristics | poll-deepdive | UA / timing 分析 |

Extensions 那頁沒 BE 缺口（Slido / Fire Token 都齊全），等 designer 出 Discord / OBS / Bookmarklet card 之後 BE 才需要加實際 endpoint。

---

## 交付期望（同 Batch 1）

- 每頁 Figma frame 或 mockup HTML，含 all states（empty / loading / active / error / placeholder）
- 不需重新設計 token / spacing；用 [shared/tokens.css](shared/tokens.css)
- Mobile 適配：admin pages 在 <768px 自動 single column stack，不用獨立設計
- BE 缺口請在 mockup 標註「待 BE：xxx」

Plugins 是 3 頁裡唯一需要「整頁重寫」的（從 Tailwind 舊 chrome → v4），Extensions / Poll-DeepDive 已有 v4 chrome，只需要 layout 校準 + state polish。

Batch 3（search / audience / fingerprints tab）等 designer 跑完 Batch 1+2 再說。
