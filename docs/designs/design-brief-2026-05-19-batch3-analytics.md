# Design Brief — 2026-05-19 Batch 3 (分析三頁)

**Status:** 待 designer 出 v4 mockup
**Author:** engineering（從現有實作 reverse 出功能 spec）
**Branch:** `claude/design-v2-retrofit`
**Context:** Batch 3 是「分析 / 觀測」類三頁：全文搜尋、觀眾列表、指紋觀測 tab。搜尋 + 觀眾已上 v4 chrome（admin-v2-head + 用 inline `style` 排版），但沒進過 design canvas；fingerprints tab 還是舊 `<details>`-collapse 卡，**整 tab 需要重設計**。

---

## 共通約定（同 Batch 1/2）

- HUD palette `hudTokens`（cyan / amber / lime / crimson）
- 每頁 `admin-v2-head`（kicker mono-uppercase + title + 一行 note）
- 全 admin 預設 light 主題，token light/dark dual
- Loading: `AdminSkeletons.render(...)`
- Empty: `AdminEmpty.render(...)`
- Toast: `showToast(msg, isSuccess)`
- 預設 desktop 1280–1440px，mobile <768px 自動 single-column stack

---

## 1. `#/search` — 彈幕全文搜尋

### 為什麼

Admin 要從歷史彈幕找特定關鍵字、指紋、暱稱、場次 — 例：「上週講題 X 投影片那邊有人問什麼？」「fp:a3f1c8 都說了什麼？」。需要時間範圍篩選、status 篩選、進階語法、CSV 匯出。

### 現有實作 → [admin-search.js](server/static/js/admin-search.js) (465 行)

**Layout: 260px 篩選 + 1fr 結果**

#### Left filter panel (260px) — `admin-v2-card`

**(a) 時間範圍** — 3×2 grid 6 buttons
- 今天 (24h) / 7天 (168h, 預設) / 30天 (720h)
- 90天 (2160h) / 全部 (0) / **自訂** (-1, 暫無 date-picker)
- Active 狀態：cyan border + cyan-soft bg

**(b) 場次** — 文字 hint：「（根據歷史紀錄自動分組）」
- 未實作 session filter UI；只是 placeholder
- BE 已支援 `session:<id>` 進階語法

**(c) 狀態 checkboxes** — vertical list 4 個：
- ☑ 顯示（預設 checked）
- ☐ 已釘選
- ☐ 已遮罩
- ☐ 已封鎖
- ⚠ **目前 checkbox 是純 visual，不會 hit BE filter**（BE 不支援 status filter）

**(d) 進階語法 reference** — `<pre>` mono block：
```
fp:<fingerprint>
nick:<nickname>
session:<id>
after:YYYY-MM-DD
```

#### Right results panel (1fr) — `hud-page-stack`

**(a) Search bar** — `⌕` icon + input (`type=search`, debounce 300ms)
- Enter 立即搜
- 空字串清空 results state

**(b) Results head row**
- 左：`N 筆結果 · Nms`（mono dim）
- 右：`↓ 匯出 CSV` chip（hidden until results）

**(c) Time distribution chart**（hidden until results）
- 24-bucket horizontal bar chart, height 32px
- Bucket 等分 search 時窗（hours window / 24）
- Bar opacity = density (`0.15 ~ 1.0`)
- Bar fill cyan `var(--color-primary)`
- 過渡：`height transition 200ms`

**(d) Results list**
- 每張卡：
  ```
  ●(hue dot from fp)  nickname        fp:a1b2c3d  10/15 14:23:45
  message text with <mark>highlighted</mark> query
  ```
  - Hue dot 由 fp 前 6 字 hash 出 0-360 色相
  - Highlight 用 `<mark>` cyan-soft bg
  - Card bg: `admin-raised`, border: `admin-line`, radius 5px, padding 10×12, gap 6

### 後端 endpoint

| Method | Path | Params | Returns |
|---|---|---|---|
| GET | `/admin/search?q=<term>&hours=<N>` | `q` (required), `hours` (optional) | `{results: [{id, nickname, fingerprint, timestamp, text, status}], total, query_ms}` |

**支援的進階語法（BE 解析）**:
- `fp:<value>` — 完整或前綴 match
- `nick:<value>` — exact 或 prefix
- `session:<id>` — 場次 filter
- `after:YYYY-MM-DD` — 時間 lower bound

### States designer 需 spec

- ✅ **Initial** — 「輸入關鍵字開始搜尋」empty state
- ✅ **Loading** — 「搜尋中…」
- ✅ **No results** — 「找不到符合的彈幕」
- ✅ **Has results** — count + chart + list
- ✅ **Range button active** state（cyan 反白）
- ✅ **Status checkbox UI**（但 BE 不支援，需明示 disabled 或加 BE）
- ✅ **24-bucket chart** — 空時 hide / 有資料時 fade-in
- ✅ **Result card** + highlight `<mark>` styling
- ❌ **CSV 匯出 in-flight** loading（目前同步立即下載）
- ❌ **自訂 date-picker** 完整 UI（目前 `-1` button 不點）

### Open Qs for design

- 260px 左欄太寬還是剛好？篩選太少時很多空白。
- 24-bucket chart 是否需要 hover tooltip（顯示 bucket 時間 + count）？
- Highlight `<mark>` 顏色（目前 cyan-soft）會不會在 light theme 不夠醒目？
- Status checkboxes 4 個是否該收進 dropdown（picker pattern）？
- 進階語法 reference 是否該變成 autocomplete chip（輸入 `fp:` 自動提示）？
- 自訂 date range 是否要 spec'd？目前 -1 button 是死的。

### BE 缺口

- Status filter（pinned / masked / blocked）— BE 目前不支援
- 自訂 date range — 需要從 hours 改成 from/to ISO
- Real-time search-as-you-type — 目前每次都 query DB；高頻搜可能要 cache 或 limit

### 驗收

- 左欄 6 range button + 4 status checkbox + advanced syntax 排版整齊
- 結果卡 hue dot 顏色穩定（同 fp 永遠同色）
- `<mark>` highlight 在 dark / light 兩 theme 對比都 OK
- 24-bucket chart 即時更新無閃爍

---

## 2. `#/audience` — 觀眾列表

### 為什麼

看哪些指紋連著、發了幾則訊息、有沒有可疑活動（同 IP 多 fp / 訊息超量 / 已標記）。整個是 **觀眾觀測** 加 **風險評估**。Slido extension / API token 用的 fp 也都會聚合到這頁。

### 現有實作 → [admin-audience.js](server/static/js/admin-audience.js) (535 行)

**Layout: 5-tile stats strip + main table + 380px right rail detail**

⚠ **已 scope-out 的 prototype 欄位**（per `docs/designs/scope-out-2026-04-27.md`）：
- ❌ GEO / 「TW · Taipei」— 沒 GeoIP service
- ❌ 出席場次數 — sessions entity scope-out
- ❌ SCORE 0-100 — 沒 scoring model
這 3 個別出在 mockup 裡。

#### Page head

- Kicker: `AUDIENCE · 觀眾列表`
- Title: 觀眾
- Note: 「即時連線觀眾的指紋聚合，按 message_count 排序。資料來源：fingerprint_tracker（in-memory）。」

#### 5-KPI stats strip

- 當前指紋 · 數字（neutral）
- 5min 活躍 · 數字（lime）
- 總訊息 · 數字（cyan）
- 已標記 · 數字（amber）
- 已封禁 · 數字（crimson）

#### Toolbar row

- 左：`顯示 N 筆`（mono dim）
- 中：filter chips
  - `全部 N`（cyan if active）
  - `標記 N`（amber if active + count）
- 右：`↻` refresh button

#### Main table

7 column：avatar / NICK·FP / IP·UA / JOINED / MSGS / STATUS / ACTIONS

**Per-row 結構**:
- **Avatar** — 圓形大頭貼，色 from `_hashColor(fp)` (9 色 palette)，內顯 nickname 第一字（or `?`）
- **NICK·FP** — nickname 一行 + `fp:xxxxxxxx`（mono small）一行
- **IP·UA** — IP 一行 + UA 截 30 字一行（mono small dim）
- **JOINED** — `Ns` / `Nm` / `Nh` / `Nd` 相對時間
- **MSGS** — 純數字（mono）
- **STATUS** — chip：5 種
  - `ACTIVE` lime
  - `FLAGGED` amber
  - `BLOCKED` crimson
  - `DUPLICATE` amber
  - `EXTENSION` cyan（fp 開頭 `slido` 或 `ext_`）
  - `IDLE` mute
- **ACTIONS** — `ban` button (danger)

點 row（避開 button）→ 右側 detail panel 滑出。

#### Right rail detail panel (380px)

**(a) Risk header** — chip + close `✕`
- Risk level 4 種：
  - `NORMAL` lime（無 flag）
  - `MID` amber（msg 15-24 或 same-IP 3+）
  - `HIGH RISK` crimson（msg ≥25 或 flagged）
  - `BLOCKED` crimson（state blocked）

**(b) Identity card** — avatar + nick + fp

**(c) ⚠ FLAG block** — 觸發規則 list（heuristic, BE 缺真實 flag schema）
- 「已被封禁 · 訊息自動遮罩中」
- 「已被標記 · 等待人工確認」
- 「訊息量 N 則 · 超過 spam threshold(25)」
- 「同 IP N 個指紋 · 可能換裝置 / VPN」
- 「Slido / extension 橋接 · 訊息來自 fire token」
- 「使用者未設暱稱（首次出現）」
- 都未觸發顯示 `未觸發任何 flag · 行為正常`

**(d) 近 5 分鐘訊息** — fetch `/admin/history?hours=1&limit=200` 後 filter
- 每訊息一 row：時間 + 文字 + status chip (SHOWN/MASKED/BLOCKED)
- 最多顯 8 則
- 空：「近 5 分鐘無訊息」

**(e) 建議動作 4-button**
- `⊗ 立即封禁指紋 · 7 天`（primary, danger）→ `POST /admin/live/block`
- `◐ 改為遮罩模式`（warn）→ `POST /admin/filters/add` (type fingerprint, action mask)
- `[PLACEHOLDER] 👢 踢出此場（待 BE endpoint）`
- `✓ 標記安全 · 解除 flag`（neutral）→ scan `/admin/filters/list` + 批次 remove

### 後端 endpoint

| Method | Path | Params | Returns |
|---|---|---|---|
| GET | `/admin/fingerprints?limit=N` | — | `{records: [...]}` |
| POST | `/admin/live/block` | `{type, value}` | `{ok}` |
| POST | `/admin/filters/add` | `{type, pattern, action, priority, enabled}` | `{rule_id}` |
| GET | `/admin/filters/list` | — | `{rules: [...]}` |
| POST | `/admin/filters/remove` | `{rule_id}` | `{ok}` |
| GET | `/admin/history?hours=1&limit=200` | — | `{records: [{nickname, fingerprint, timestamp, text, muted, banned}]}` |

**Audience record shape**:
```json
{
  "fingerprint": "a3f1c8d2e5",
  "nickname": "小明",
  "ip": "1.2.3.4",
  "ua": "Mozilla/5.0...",
  "first_seen": 1779120000,
  "last_seen": 1779126441,
  "message_count": 42,
  "state": "active"
}
```

### States designer 需 spec

- ✅ **Loading** + **Empty audience** state（建議：等觀眾連線 message）
- ✅ **5-tile stats strip** color sequence (neutral / lime / cyan / amber / crimson)
- ✅ **Filter chips** active state
- ✅ **9-color avatar palette**（hash-stable per fp）
- ✅ **6 status chips** 色（active / flagged / blocked / duplicate / extension / idle）
- ✅ **Row selected** 高亮（is-selected modifier）
- ✅ **Detail panel** 4 risk level header chip
- ✅ **Detail flag block** rule list 樣式（含 `risk-level` data attr 控背景）
- ✅ **建議動作 4-button** primary/warn/placeholder/neutral 層級
- ❌ **Refresh in-flight** spinner
- ❌ **Detail panel close 動畫** slide-out
- ❌ **Row click → detail 開啟** transition

### Open Qs for design

- 5-tile vs 4-tile（dashboard 一致性）？目前 5 因為要顯示 5min 活躍。
- Avatar 9-color palette 是否需要 darker shade for light theme？
- Risk level 4 階是否該變 3 階（normal / suspicious / blocked）？
- Detail 4 個 action 順序 / 視覺重要性如何排列（最危險的封禁是 primary）？
- 表格 desktop 顯 7 column，mobile 該怎麼摺（只剩 avatar + nick + msgs + action？）？

### BE 缺口

- 真實 flag schema（rule_id / rule_type / triggered_at / severity） — 目前 frontend heuristic 計算
- 「踢出此場」endpoint
- Risk 評分模型（目前 frontend 數 message_count）
- GeoIP lookup（被 scope-out，但若要加可以 unblock 完整觀眾分析）
- Score 0-100（被 scope-out）

### 驗收

- 5-tile + table + right-rail 三段在 desktop 看起來不擠
- Row click + ban button 不衝突（事件不冒泡）
- Right-rail risk 4 級顏色與 audience table 一致
- Mobile (<768px) table column collapse 順序合理

---

## 3. `moderation/fingerprints` tab — 指紋觀測

### 為什麼

純技術觀測頁：每個 fingerprint 的訊息頻率、被擋次數、UA 串、IP — 用來查 spam pattern、看哪個 UA 異常。**和 `#/audience` 重疊**但更技術向（少 nick / risk，多 rate / blocked / UA）。

### 現有實作 → [admin-fingerprints.js](server/static/js/admin-fingerprints.js) (239 行)

⚠ **這頁還在 legacy `<details>` collapse 卡 chrome，沒上 v4。需要整頁重寫**（不是 retrofit）。

**Layout: collapsed `<details>` card 內含 toolbar + 8-column table**

#### Card head（被 details summary 包住）

- Kicker: `FINGERPRINTS · 觀測` (cyan accent)
- Title: i18n `fingerprintsTitle`
- Description: i18n `fingerprintsDesc`
- 右側 chevron `⌄`（open 時 rotate 180°）

#### Toolbar row

- 左：`N UNIQUE · M FLAGGED` count（mono small caps）
- 右：
  - `重新整理` button (`hud-toolbar-action`)
  - `重置指紋追蹤` button (`hud-toolbar-action`, red text)

#### 8-column table

```
HASH (fp:xxxxxxxx)  IP    UA (truncate)   MSGS  RATE  BLOCKED  STATE  LAST SEEN
```

- HASH — `fp:` + first 8 chars of SHA-256 prefix（用 cursor pointer 因 row 是可 click jump）
- IP — `1.2.3.4` mono
- UA — truncate to row width, full UA in `title=`
- MSGS — count（mono right-align）
- RATE — per-min count（mono right-align）
- BLOCKED — count（>0 crimson, 0 mute, right-align）
- STATE — pill `ACTIVE` cyan / `FLAGGED` amber / `BLOCKED` crimson
- LAST SEEN — local time string

### 後端 endpoint

| Method | Path | Params | Returns |
|---|---|---|---|
| GET | `/admin/fingerprints?limit=N` | — | `{records, count, flagged}` |
| POST | `/admin/fingerprints/reset` | — | `{ok}` |

**Fingerprint record shape**:
```json
{
  "hash": "a3f1c8d2e5b9...",  // 12-char SHA-256 prefix
  "ip": "1.2.3.4",
  "ua": "Mozilla/5.0...",
  "msgs": 42,
  "rate_per_min": 3,
  "blocked": 0,
  "state": "active",
  "last_seen": 1779126441
}
```

Auto-refresh: 每 10s（only if details open）。

### States designer 需 spec

- ❌ **整頁要重設計到 v4 chrome**：去掉 `<details>` collapse、用 `admin-v2-head` + `admin-v2-card`
- ✅ **Loading** state
- ✅ **Empty fingerprints** state（i18n `noFingerprints`）
- ✅ **N UNIQUE · M FLAGGED** count display
- ✅ **3 state pill 色**（active / flagged / blocked）
- ✅ **BLOCKED count color** (0 vs >0)
- ❌ **重置確認** modal（目前 native `confirm()`，重置不可逆要更慎重）
- ❌ **Row click 行為** — 目前 jump 到 AdminIdentity（已 deprecated 因 polestar pivot 取消 presenter），需重新定義
- ❌ **Sort column** UI（目前固定 by message_count）

### Open Qs for design

- 這頁跟 `#/audience` 顯著重疊（都看 fp + msgs + IP + UA）。是否該合併？
- 若不合併，這頁該偏 **raw observation**（不 ban、只看數據）還是 **action site**（可 ban / mask）？
- `hash` 顯示 8 字 vs 完整 12 字（mouseover）— 目前 8，是否夠？
- RATE / BLOCKED 是否需要 sparkline（per-min trend）？
- Reset 是否該分級（reset all vs reset stale only）？

### BE 缺口

- 沒有 — endpoint 充足。
- 可選：per-fingerprint 訊息時間序列（for sparkline），但不必要。

### 與 #/audience 重疊度

| 欄位 | audience | fingerprints |
|---|---|---|
| nickname | ✅ | ❌ |
| fp hash | ✅ | ✅ |
| IP | ✅ | ✅ |
| UA | ✅ | ✅ |
| message_count | ✅ | ✅ |
| rate_per_min | ❌ | ✅ |
| blocked count | ❌ | ✅ |
| first_seen / JOINED | ✅ | ❌ |
| last_seen | ❌ | ✅ |
| state | ✅ | ✅ |
| ban action | ✅ | ❌ |
| risk panel | ✅ | ❌ |

**設計建議**：把 fingerprints 變成 audience 的 **technical view** tab（同頁 2-tab toggle：「人觀點」/「技術觀點」），共用 detail panel。Designer 決定要不要這樣合。

### 驗收

- 整頁從 `<details>` → 完整 admin-v2 chrome
- 8-column table 在 1280px 可讀（不需要橫向 scroll）
- Reset button 視覺上夠醒目（紅色）但不會誤點
- Auto-refresh 不會閃爍（diff update / 不是整表 replace）

---

## Open BE-pending（跨 Batch 3 共用工程清單）

| 功能 | 影響頁 | BE 缺什麼 |
|---|---|---|
| Search status filter | search | `?status=pinned,masked,blocked` 過濾參數 |
| Search 自訂 date range | search | `?from=ISO&to=ISO` 改成時間區間 |
| Audience flag schema | audience | 真實 rule_id / triggered_at / severity 欄位 |
| Audience kick endpoint | audience | `POST /admin/audience/kick` |
| Audience risk score | audience | scoring model（被 scope-out, 但若加可 unblock 完整風險面板） |
| GeoIP lookup | audience + poll-deepdive | MaxMind / ipinfo lite |

Fingerprints tab 沒 BE 缺口（純前端重設計）。

---

## 交付期望（同 Batch 1/2）

- 每頁 Figma frame 或 mockup HTML，含 all states（empty / loading / active / error / placeholder）
- 不需重新設計 token / spacing；用 [shared/tokens.css](shared/tokens.css)
- Mobile 適配：admin pages 在 <768px 自動 single column stack
- BE 缺口請在 mockup 標註「待 BE：xxx」

**特別注意**：
- Fingerprints tab 是 3 頁裡唯一需要「整頁重寫」的（從 `<details>` 卡 → v4 chrome）。最好跟 Audience 一起設計，看看要不要合併。
- Search 的左欄篩選 panel 在篩選不多時很空，看是否能 collapse 或變橫向 chip strip。
- Audience right rail detail 跟 Webhooks / Audience 之間共用 380px detail panel pattern — 可以一次設計一個 reusable component。

---

## 全 3 Batch 總覽

| Batch | 頁數 | 狀態 |
|---|---|---|
| Batch 1 admin-self-use | 3 (webhooks / api-tokens / backup) | ✅ brief 出貨 |
| Batch 2 ops | 3 (plugins / extensions / poll-deepdive) | ✅ brief 出貨 |
| Batch 3 analytics | 3 (search / audience / fingerprints) | ✅ brief 出貨 |

**共 9 頁 design brief**。每頁含 layout / 控件 / 後端 endpoint / state / open Qs / BE 缺口。

Designer 可以按 Batch 順序出 mockup，每 batch ship 後工程 retrofit 一輪。也可以集中看完 9 頁、抓共用 component（5-tile KPI / 1fr+380px 雙欄 / detail panel slide-in / filter chips strip / status dot 5 級色 / hue avatar / mono-uppercase kicker），先設計 component library 再套頁面。

Engineering 等 mockup 出來會接著做 retrofit。BE 缺口會另開 backlog issue 追蹤，跟 design 平行 unblock。
