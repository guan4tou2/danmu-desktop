# Design Brief — 2026-05-19 Batch 1 (admin 自用三頁)

**Status:** 待 designer 出 v4 mockup
**Author:** engineering（從現有實作 reverse 出功能 spec）
**Branch:** `claude/design-v2-retrofit`
**Context:** 三個 admin 自己用得最頻繁、但完全沒進過 v4 design canvas 的頁面。工程已用 v4 token + `admin-v2-head` chrome 包好，但具體 layout、empty/loading/error state、配色節奏、CTA 對比都未經 designer 審。本 brief 把 source-of-truth（功能、後端 endpoint、edge case）打包，designer 直接畫圖就好。

---

## 共通約定

- **設計系統**: HUD palette（`hudTokens` in `shared/tokens.css`）— cyan / amber / lime / crimson。沒 violet/magenta。
- **Chrome**: 每頁以 `admin-v2-head`（kicker mono-uppercase + title display + 一行 note）開頭，主體用 `hud-page-stack lg:col-span-2`。
- **Light/Dark dual**: 全部頁面 admin 預設 light 主題，但 token 已 light/dark 對齊（`:root[data-theme="light"]`）— 不用畫兩套，只要在 light 上看起來對就好。
- **Loading state**: 用 `AdminSkeletons.render(...)` helper（已存在）。
- **Empty state**: 用 `AdminEmpty.render(...)` helper（已存在）。
- **Toast**: 用 `showToast(msg, isSuccess)` — 不要再設計獨立 inline confirm，全走 toast。

---

## 1. `#/webhooks` — Webhooks 管理

### 為什麼

Admin 設好 endpoint，事件觸發時 server 把 payload 推給外部 service（Discord webhook、CI、自家 dashboard）。需要監看 delivery、看哪些 endpoint 在出錯、重發測試 ping、刪 endpoint。

### 現有實作 → [admin-webhooks.js](server/static/js/admin-webhooks.js) (596 行)

**Layout: 1fr + 380px 兩欄 grid**

#### Main column (1fr)

**(a) 4-KPI stats strip** — 一排 4 個 tile，色碼分別：
- 已啟用 ENDPOINTS · `N / M`（neutral text）
- 近 24h 推送 · 數字（lime）
- 失敗待重試 · 數字（>0 amber, =0 muted）
- 已放棄 (>3 次) · 數字（>0 crimson, =0 muted）

**(b) Endpoints list card**
- 卡頭：`ENDPOINTS · N 個` + `＋ 新增 endpoint` CTA
- 點 CTA → 卡內展開 inline add form（不要 modal）：
  - URL input（必填，type=url）
  - FORMAT select（json / discord / slack）
  - SECRET input（optional，HMAC-SHA256 簽 X-Webhook-Signature header）
  - EVENTS checkbox group（見下）
  - 註冊 / 取消 CTA
- Endpoint card per row（point-able 整列 → 開右側 detail）：
  ```
  ●(status dot)  hostname.com  [ACTIVE chip]                    last · 3 分鐘前
  https://full-url-here
  [evt-chip] [evt-chip] [evt-chip]
  ⚠ optional error preview (last 90 chars)
  SUCCESS RATE [▓▓▓▓▓▓▓░] 87.5%     ✓ 1,234      ✗ 5     [↻ 測試] [⚙ 設定]
  ```
- Status dot 3 色：active=lime / degraded=amber (last_status >= 400) / paused=mute (enabled=false)
- SUCCESS RATE bar 顏色 follow status dot

**(c) Delivery log table** — 同卡，下方
- 卡頭：`DELIVERY LOG · 即時` + filter chips（全部 / 失敗 / 2xx / 5xx）
- 6 column header（TIME / CODE / DUR / ENDPOINT / EVENT / RETRY）
- 每 row：
  - TIME — `HH:MM:SS` mono
  - CODE — pill 色：2xx=lime / 4xx=amber / 5xx=crimson
  - DUR — `Nms` or `N.Ns`，>1s amber
  - ENDPOINT — hostname only
  - EVENT — event key (mono)
  - RETRY — `—` or `×N`，>0 amber
- Dropped (放棄) 整列加 strikethrough + mute

#### Right rail (380px) — endpoint detail panel

點 endpoint card → 右欄滑出（hidden by default）：
- Head: status dot + hostname + `✕` close
- `事件訂閱` — 10 個 prototype event checkboxes，**BE 只支援 3 個**（on_danmu / on_poll_create / on_poll_end），其餘 7 個顯示 `待 BE` 灰標：
  ```
  message.created      message.pinned      message.blocked
  poll.opened          poll.closed
  session.started      session.ended       [待 BE]
  fire-token.rate-near fire-token.rotated  [待 BE]
  system.error                              [待 BE]
  ```
- `RETRY POLICY` — Max retries (數字) / Backoff (exponential 1s → 2s → 4s) / Timeout (5000ms) / HMAC sign (有 secret 顯 SHA-256, 無顯 — lime/muted)
- `PAYLOAD SAMPLE` — `<pre>` 顯 sample JSON（event/ts/hook_id/data）
- 底部 CTA row：
  - `↻ 送測試 ping`（primary）
  - `[PLACEHOLDER] ⏸ 暫停 / ▶ 啟用` — **BE 缺 `/admin/webhooks/toggle`**，目前 placeholder
  - `⊘ 刪除`（danger）

### 後端 endpoint → [routes/admin/webhooks.py](server/routes/admin/webhooks.py)

| Method | Path | Body / Query | Returns |
|---|---|---|---|
| GET | `/admin/webhooks/list` | — | `{webhooks: [...]}` |
| POST | `/admin/webhooks/register` | `{url, events[], format, secret?}` | `{hook_id}` |
| POST | `/admin/webhooks/unregister` | `{hook_id}` | `{message}` |
| GET | `/admin/webhooks/deliveries?limit=N` | (max 100) | `{deliveries: [...], stats}` |
| POST | `/admin/webhooks/test` | `{hook_id}` | `{message}` |
| POST | `/admin/webhook/incoming/<id>` | external receives | converts to danmu |

**Webhook payload shape (BE → external)**:
```json
{
  "event": "on_danmu",
  "ts": 1779126441,
  "hook_id": "wh_xxxx",
  "data": { "text": "...", "color": "#ffffff", "size": 50 }
}
```

### States designer 需 spec

- ✅ **Loading** (頁面初次載入)
- ✅ **Empty endpoints** (`尚未註冊 webhook`)
- ✅ **Empty delivery log** (`尚無 delivery 紀錄`)
- ✅ **Active / Degraded / Paused** endpoint card 3 色
- ✅ **Filter chip active** (cyan border + cyan-soft bg)
- ✅ **Detail panel open / closed** 動畫（建議 200ms slide-in）
- ❌ **Add form 開合** transition
- ❌ **Test ping in-flight** loading（CTA 變 spinner？toast 顯示就好？）
- ❌ **Error state**（list 載入失敗，目前直接吞掉錯誤）

### Open Qs for design

- 10 個 prototype event vocabulary — designer 是否認可？需要工程把 BE `_VALID_EVENTS` 擴成這 10 個（不貴，但要 spec'd）。
- HMAC secret 顯示時是否 masked（`••••12ab`）？目前完全不顯示。
- 已放棄訊息能不能 retry？目前無 retry UI。
- 右側 detail 在窄屏 (<1024px) 是 stack 下面還是改 modal？

### 驗收

- 4-KPI tile 顏色順序：neutral / lime / amber / crimson
- Endpoint card 三狀態都有 visual spec
- Delivery log filter chips 切換瞬間切（無 fetch）
- Detail panel 對 mobile (<768px) 有應對
- 整頁能正確繪 polestar light theme（slate-900 文字、#0284c7 cyan）

---

## 2. `#/api-tokens` — API Token 管理

### 為什麼

外部整合（OBS widget、CI bot、Slido extension）需要 token 才能呼 admin API。Admin 設 label + scope + 有效期、產 token、複製、列管、撤銷、停/啟用。**Token 只在產生瞬間顯示一次。**

### 現有實作 → [admin-api-tokens.js](server/static/js/admin-api-tokens.js) (630 行)

**Layout: 1fr (token list) + 380px (create form, right rail)**

#### Left main — Token list table

**Table head**: LABEL / 前綴·權限 / 最後使用 / 用量 / 建立日期 / 操作

**Per-row 結構**:
- Status dot：`active`(lime) / `expiring`(amber, 7天內到期) / `expired`(crimson) / `inactive`(muted, enabled=false)
- LABEL cell：dot + label + 可選的 badge
  - `⚠ 90天未使用` (amber badge) — `last_used_at` > 90天
  - `已過期` (crimson badge)
  - `即將過期` (amber badge)
- 前綴·權限 cell：
  - mono prefix `dn_a1b2cd...`
  - 4 種 scope badge 色碼：
    - `read:history` lime
    - `read:stats` cyan
    - `fire:danmu` amber
    - `admin:*` red (高風險)
- 最後使用 cell：`YYYY-MM-DD HH:MM` + `<br>` + IP（small mono）or `從未使用`
- 用量 cell：使用次數（toLocaleString）
- 建立日期：`YYYY-MM-DD`
- 操作 cell：`停用` / `啟用` button + `撤銷` (danger button)

#### Right rail — Create form

固定卡片 380px：
- **Head**：`產生新 Token` monolabel
- **Success banner** (hidden until create succeeds)：
  ```
  ✓ Token 已產生
  請立即複製並儲存。離開後將無法再次查看。
  [dn_xxxxxxxxxxxx readonly input] [📋 複製]
  ```
- **Form**：
  - LABEL — text input (max 80, required)
  - SCOPES — 4 個 checkbox row：
    - `[badge lime] read:history     讀取彈幕歷史`
    - `[badge cyan] read:stats       讀取統計資料`
    - `[badge amber] fire:danmu      發射彈幕`
    - `[badge red]   admin:*         完整管理員權限   ⚠ 高風險：擁有全部後台能力`（warn only shows when checked）
  - EXPIRY — radio button row（chip-style）：`7天 · 30天 · 90天(預設) · 永久`
  - ⚠ 警告語：`Token 僅在產生後顯示一次，請立即複製保存。`
  - Submit button (`⚿ 產生 Token`)
- **Form error inline** (hidden by default)

### 後端 endpoint → [routes/admin/api_tokens.py](server/routes/admin/api_tokens.py)

| Method | Path | Body | Returns |
|---|---|---|---|
| GET | `/admin/api-tokens` | — | `{tokens: [...], contract}` |
| POST | `/admin/api-tokens` | `{label, scopes[], expiry_days}` | `{id, prefix, token (raw, once)}` |
| DELETE | `/admin/api-tokens/<id>` | — | `{message}` |
| PATCH | `/admin/api-tokens/<id>` | `{enabled: bool}` | `{...token}` |

**Token shape**:
```json
{
  "id": "tok_abc",
  "prefix": "dn_a1b2",
  "label": "OBS Widget",
  "scopes": ["read:history", "fire:danmu"],
  "created_at": "2026-05-19T10:00:00Z",
  "expires_at": "2026-08-17T10:00:00Z",
  "last_used_at": "2026-05-19T14:23:00Z",
  "last_used_ip": "1.2.3.4",
  "usage_count": 142,
  "enabled": true
}
```

### States designer 需 spec

- ✅ **Empty** — 圖示 `⚿` + 「尚無 API Token / 使用右側表單核發第一個 token」
- ✅ **Loading** — table 處於 loading 提示
- ✅ **Active / Expiring / Expired / Inactive** 四種 status dot 色
- ✅ **Scope badge 4 色**
- ✅ **Success banner** — 含 raw token display + copy CTA
- ✅ **`admin:*` 警告** — 高風險 warning 視覺
- ❌ **Form error inline** — 紅底 banner？inline text？
- ❌ **Copy 後反饋** — 目前 button text 變「已複製 ✓」+ toast
- ❌ **Confirm 撤銷 modal** — 目前用 native `confirm()`，設計上應該是 `HudConfirm` modal

### Open Qs for design

- Form 是固定 right rail 還是「+ 新增 token」CTA 開合？right rail 永遠佔 380px 是否浪費版面？
- 4 個 scope 是否夠用？未來 `admin:read-only` / `admin:moderation` / `webhook:trigger` 等？
- Token expiry 是否要加「自訂天數」 input？
- 90 天未使用 warning 是 stale token detection — 是否要 admin 一鍵 revoke 全部 stale？
- 撤銷後是否能 undo（7 天 grace period）？目前 hard delete。

### 驗收

- Status dot 4 色都有 spec
- Scope badge 4 色都有 spec（特別是 `admin:*` 紅色要夠醒目）
- Success banner 突出但不阻擋 list 視線
- Copy CTA 反饋清楚（color shift + toast）

---

## 3. `#/backup` — 備份 & 匯出

### 為什麼

Admin 要備份歷史 / 設定，要還原備份，要清歷史 / 登出 / factory reset。**三個風險等級分區清楚**：安全（匯出）/ 警告（還原）/ 危險（清除/重置）。

### 現有實作 → [admin-backup.js](server/static/js/admin-backup.js) (354 行)

**Layout: 單欄 vertical stack，3 個 zone card**

#### Zone 1 · EXPORT （lime good dot）

- **HISTORY · 彈幕歷史** subcard
  - RANGE select：1h / 6h / 24h(預設) / 7d / 30d
  - FORMAT select：JSON / **CSV (disabled, 即將支援)** / **SRT (disabled, 即將支援)**
  - `下載` primary CTA → GET `/admin/history/export?hours=N`（瀏覽器 follow Content-Disposition）
- **SETTINGS · 設定快照** subcard
  - 描述：「一鍵 JSON 快照（client-side 組合）。不含密碼雜湊與 token，已自動剝除。」
  - `下載` primary CTA → fetch `/get_settings`、client-side strip secret keys、Blob 下載
- **PACKS · EFFECTS / EMOJIS / STICKERS** subcard (deferred)
  - 描述：「每類資產獨立 tarball 下載 — 即將支援（需後端 endpoint）」
  - `下載` button disabled

#### Zone 2 · RESTORE （amber warn dot）

- **SETTINGS · 還原設定** subcard
  - JSON FILE input
  - `Dry-run 預覽` button → client-side parse + diff vs current `/get_settings`
  - `套用` button **disabled (即將支援)** — 後端 endpoint 缺
  - Diff `<pre>` block：`+ key: val` / `- key: val` / `~ key: a → b`
  - Deferred note：「套用階段 — 即將支援（需後端 endpoint）。目前僅可 client-side 解析預覽。」
- **PACKS · 上傳資產包** subcard (deferred)
  - 描述：「上傳 effect / emoji / sticker 資產包 → 驗證 → 安裝 — 即將支援」
  - `上傳` disabled

#### Zone 3 · DANGER （crimson bad dot, 全卡 crimson tinted）

- **CLEAR HISTORY · 清除彈幕歷史** subcard
  - RANGE select：目前只有 `全部`
  - 描述：「清除所有彈幕歷史。此動作無法復原。」
  - `清除` is-bad CTA → confirm dialog → POST `/admin/history/clear`
- **END SESSION · 結束管理工作階段** subcard
  - 描述：「登出目前管理員，不影響 overlay / viewer 連線。」
  - `END SESSION` is-bad CTA → confirm → POST `/logout`
- **FACTORY RESET · 回復原廠 (即將支援)** subcard (deferred)
  - 輸入 `reset` 以確認 (text input)
  - 描述：「即將支援 — 目前請手動刪除 `server/runtime/` 後重啟。」
  - `FACTORY RESET` disabled

### 後端 endpoint

| Method | Path | Status |
|---|---|---|
| GET | `/admin/history/export?hours=N` | ✅ 已存在（[history.py](server/routes/admin/history.py)） |
| POST | `/admin/history/clear` | ✅ 已存在 |
| GET | `/get_settings` | ✅ 已存在 |
| POST | `/logout` | ✅ 已存在 |
| POST | `/admin/settings/apply` (restore) | ❌ **缺**，dry-run only |
| GET | `/admin/packs/export/<type>` | ❌ **缺**（effects/emojis/stickers tarball） |
| POST | `/admin/packs/install` | ❌ **缺** |
| POST | `/admin/factory/reset` | ❌ **缺** |
| POST | `/admin/history/export?format=csv,srt` | ❌ **缺**（只有 json） |

### States designer 需 spec

- ✅ **3 zone tinted 卡片** — Export 中性 / Restore amber 邊 / Danger crimson 邊
- ✅ **`is-deferred` subcard 視覺** — 灰底 + 「即將支援」標籤 + disabled CTA
- ✅ **Dry-run diff block** — `+/-/~` 三色高亮 in `<pre>`
- ✅ **Factory reset 確認 text input** — 必須輸入 `reset` 才能 enable
- ❌ **Pack 下載 / 上傳** — 還沒設計過 file picker + 驗證流程
- ❌ **Confirm modal** — 目前用 native `confirm()`，danger 級操作應該用 `HudConfirm` modal

### Open Qs for design

- 3 個 zone 是 vertical stack 還是 3-column grid（桌機）？目前 vertical stack。
- Deferred subcard 是否該完全藏起來、還是顯示 + disabled 表示 roadmap？目前後者。
- Dry-run diff 是否要 syntax highlight（JSON keys, types）？目前單色 mono pre。
- Factory reset 是否要 2-step confirm（輸入 reset + 再點 button + double confirm modal）？
- 「END SESSION」放在 Danger zone 是否太重？(只是登出，不刪資料)

### 驗收

- 3 zone 視覺層次清楚（Export 看起來安全、Danger 看起來會出事）
- 所有 deferred subcard 一眼能看出是「即將支援」
- Dry-run 後 diff `<pre>` 內文不會超出 card 邊界（要 `overflow-x: auto`）
- Mobile (<768px) 該怎麼 stack（這頁很長）

---

## Open BE-pending（跨頁共用工程清單）

| 功能 | 影響頁 | BE 缺什麼 |
|---|---|---|
| Webhook event vocab 擴充 | webhooks | `_VALID_EVENTS` 從 3 個擴成 10 個 |
| Webhook enable/disable | webhooks | `POST /admin/webhooks/toggle` |
| Settings apply (restore) | backup | `POST /admin/settings/apply` 含 validation |
| Pack export tarball | backup | `GET /admin/packs/export/<type>` (effects/emojis/stickers) |
| Pack upload + install | backup | `POST /admin/packs/install` 含驗證 |
| Factory reset | backup | `POST /admin/factory/reset` 含確認流程 |
| History CSV / SRT | backup | `?format=` 參數擴展 |

這些 BE 工作可以跟 design 平行進行 — designer 只要照 mockup spec UI，工程 backfill BE。

---

## 交付期望

- 每頁 Figma frame 或 mockup HTML，**包含所有 state**（empty / loading / active / error / deferred）。
- 不需要動圖、不需要 hover state 細節；hover/active 沿用既有 `--motion-fast/normal` token。
- 不需要重新設計 color / spacing token — 用 [shared/tokens.css](shared/tokens.css)。
- Mobile 適配：admin pages 在 <768px 時是 single column stack，不用獨立設計 mobile mockup（除非該頁有特殊互動）。
- 若有 BE 缺口，請在 mockup 標註「待 BE：xxx」— 工程會接著補。

完成後 ping engineering，會把每頁照 mockup 重新 retrofit（4-tile KPI / right rail detail / 3-zone 等共用 pattern 已有 CSS，工程主要工作是調間距 + 修對齊）。

Batch 2（plugins / extensions / poll-deepdive）會在 Batch 1 設計完後再出。
