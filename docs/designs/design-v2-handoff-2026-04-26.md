# Danmu Fire · v2 Design Handoff (2026-04-26)

對 Claude Design 的回覆稿。涵蓋：
1. 這輪 prototype 對齊已完成的事項（已部署到 VPS）
2. UI 在但資料是 mock / partial 的項目（需要後端決定才能補真）
3. Prototype 設計但完全未實作的元件
4. 我們在實作中為了務實做的設計偏離（需要 Design 確認 OK 還是要改）
5. 給 Design 的具體問題清單

---

## 1. 已對齊並部署（這輪 24 個 commit）

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
- Widget tile 加 PAUSE/RUN + CONFIG 動作按鈕（PAUSE/RUN POSTs `/admin/widgets/update {visible: !current}`，CONFIG navigates to widgets page）
- 快速投票 inline form：題目 + A~F 選項 + START（POST `/admin/poll/create` legacy shape）；多題 builder 連結保留
- Sidebar live badge 計數：訊息（24h）/Widgets/黑名單/效果/主題/插件，從 `/admin/bootstrap` 取（plugins 另 fetch `/admin/plugins/list`）

### Admin sub-pages
- 字型管理：每筆字型加「設為預設」按鈕（POST `/admin/update {type:FontFamily, index:3, value}`）；live `預設` badge 從 `/get_settings.FontFamily[3]` 取
- Moderation：頂部加 4-tile stats strip（RULES / MASKED·24H / BLOCKED·24H / BLACKLIST）
- System & Fingerprints：Server block 加 CPU USAGE / MEM RSS / MSG RATE 三個 KV（從 `/admin/metrics` 的 series last sample）
- Ratelimits：admin scope default 從 60 → 300（配合 config.py）

### Production fixes
- admin-broadcast.js 不再噴 `refreshHistory is not defined`（移除呼叫；後端從未有 `/admin/broadcast/history`）
- WebSocket URL 從 `wss://host/` 改成 `wss://host/ws`（nginx 只代理 `/ws` 到 4001 內部 port）
- `ADMIN_RATE_LIMIT` env default 60 → 300（admin 同時跑多個 polling 很容易爆 60/min）
- admin-scheduler 在 502 時不再 `SyntaxError: Unexpected token '<'`（先檢查 `resp.ok`）
- `--color-warning` token 從 `#eab308` (yellow-500) 校到 `#fbbf24` (amber-400) 對齊 prototype `hudTokens.amber`

---

## 2. UI 已建好，但資料是 mock / partial（需後端決定才能補真）

| 位置 | mock / partial 內容 | 補真所需 |
|---|---|---|
| Dashboard 訊息 filter chips | 點選只切換 active 樣式，不真的過濾 | `/admin/history` 記錄需要 `tag` / `intent` 欄位（`qna` / `poll` / `masked` / `replied`） |
| Dashboard Widget tile | 顯示 `STATUS · RUNNING/PAUSED`，沒有 UPTIME / CALLS | widgets 服務需追蹤 `started_at` + `call_count` |
| Plugins 列 | UPTIME / MEM / CALLS 在 prototype 但實作只顯示 PRIORITY · AVG | plugins 服務需追蹤 process stats，目前只記 priority/enabled |
| Plugins LIVE CONSOLE | 只顯示靜態 placeholder「Console stream becomes live when plugins emit stdout/stderr」 | 需要 plugin manager pipe stdout/stderr 到 ring buffer + admin endpoint 提供 tail |
| Moderation MASKED·24H + BLOCKED·24H | 顯示 `—` | filter_engine 需 per-action 24h counter |
| Moderation 即時審核日誌 | 只顯示「尚無事件 · 等待規則命中」 | filter_engine 需 push event 到 ring buffer + WS broadcast |
| Ratelimits 近期違規 feed | 顯示「即時違規列表將連接至 `/admin/metrics.recent_violations`」 | `/admin/metrics` response 需新增 `recent_violations[]` |
| Ratelimits IP 黑/白名單 | UI 可新增/刪除，但不持久化也不真的 enforce | 需 IP policy service + nginx/Flask middleware |
| Fonts CDN DELIVERY | HIT RATE / P95 TTFB / REQ/24H / EDGE 全部 `—` | 需要 CDN access log 解析 or proxy stats |
| Fonts SUBSETTING bar | 固定顯示 38% 「節省」 | 需要 pyftsubset 整合（依賴未加） |
| Fingerprint table FLAGGED count | 只顯示 `247 UNIQUE`，沒有 FLAGGED | fingerprint 服務需 `flagged_count` 欄位 |
| System Server block UPTIME | static 顯示，沒有真的 server start time | 需要 `/admin/metrics` 加 `server_started_at` |
| System QR · 觀眾掃碼 | 只有文字「觀眾掃碼即可加入」，沒實際 QR | 加 QR generator (qrcode.js client-side OK) |
| Effects YAML inspector RELOAD/PREVIEW | EDIT/RELOAD 動作有，但 PREVIEW 只切到 effect 卡 | 需要單檔 hot-reload preview（目前只能整體 reload） |

---

## 3. Prototype 完全未實作的元件

### `OverlayMiniCtrl`（priority-2-pieces.jsx）
**設計意圖**：在主持人簡報軟體（Keynote/PPT）上方覆蓋的浮動 mini control 小卡，可即時切換 BROADCAST 狀態、看 viewer count、send quick-broadcast 等。

**未做原因**：這不是 web 頁面，需要 Electron 桌面端做 always-on-top + transparent 子視窗。工作量約 2–3 天。

**問 Design**：
- 這個是 v5 的 must-have 還是 nice-to-have？
- 預期觸發方式？（Tray icon 點擊？快捷鍵？開機自動 always-on-top？）
- 主持人怎麼把它放在簡報上？（純前景 always-on-top？或 macOS 的 Stage Manager 整合？）

### Broadcast page（v5 自行加入，不在 prototype）
- 後端：`server/services/broadcast.py` + `server/routes/admin/broadcast.py`（新增於 commit `a06ad17`）
- 前端：`admin-broadcast.js` + 完整 sec-broadcast page + sidebar nav 「廣播」+ topbar 「BROADCASTING/STANDBY」按鈕

**Design 確認**：
- prototype 只在 topbar 有 `BROADCASTING` 純標示（沒有頁面、沒有 toggle 概念）
- 我們做了完整一頁可以切換 LIVE/STANDBY、看 metrics、有 history（但 history 端點未做）
- 用戶（產品方）說「先留著好了」
- **要不要砍掉？** 還是這個概念其實要納入 v5.1 設計？

### Display Settings 三張右側 rail card
prototype 右側有：
- PreviewCard（觀眾現在會看到的彈幕樣貌）
- DeployCard（套用按鈕 + 套用後幾秒生效）
- SummaryCard（AUDIENCE · X/6 OPEN 統計）

實作只有 SummaryCard。Preview 整合在中間欄頂部，Deploy 是隱式（每次 patch 即套用）。

**問 Design**：right rail 三卡疊放 vs 我們的「中欄頂部 preview + 隱式 deploy + 右側 summary」哪個體驗較好？

### Polls — 拖曳排序視覺回饋
題目佇列拖曳時，prototype 在 drop target 之間插入一條 cyan 高亮線（`drop-hint`）。實作只有 `is-dragging` opacity 變化，沒有插入線。

### Polls — 圖片上傳 + crop 比例選擇器
prototype 每題編輯區：
- 圖片拖放上傳（dropzone）
- 16:9 / 1:1 / 4:3 比例切換（影響圖片裁切）
- 每選項可獨立啟用 `img: true`，整題只在「至少一個選項 img: true」時顯示比例選擇器

實作：題目 schema 已支援 `image_url` + `time_limit_seconds`（commit `61a5dbc`），但前端裁切器與 dropzone 沒做。

---

## 4. 我們做的設計偏離（需要 Design 確認）

| 偏離點 | prototype | 我們做的 | 原因 |
|---|---|---|---|
| 語言選單 | viewer hero 只顯示「中/EN」2 個 SegBtn | viewer 顯示 中/EN Seg（visible），背後 hidden `<select>` 仍支援 EN/ZH/JA/KO | 程式碼有 4 語系，UX 隱藏多語也不對 |
| Admin topbar | 只有「⌕ 搜尋 ⌘K」+「BROADCASTING」按鈕 | 多了 lang select + 紅色 logout 按鈕 | 實際運維需要切語言 + 登出 |
| Admin sidebar 多了幾項 | 4 個分組共 12 nav | 多了「歷史重播」「觀眾頁主題」「素材庫」「廣播」「安全」「備份 & 匯出」| 都是程式碼有的功能，不秀就找不到入口 |
| viewer hero font-size | desktop `clamp(3.2rem, 8vw, 6rem)` HERO_SIZE.hero | 實作同上（OK） | — |
| viewer Footer | prototype 沒有 footer | 有 GitHub 連結 + version | open source 必要 attribution |
| viewer 排版按鈕 5 種 | scroll/top_fixed/bottom_fixed/float/rise 配 zh + EN sub | 同 | OK |

---

## 5. 給 Design 的問題

### 5.1 v5.0 vs v5.1 切分
這輪做的東西全部上 production VPS（branch `claude/design-v2-retrofit`，未 merge main）。要不要：
- (A) 把目前狀態作為 **v5.0 release** 標籤 + 刪 v4 相容 alias
- (B) 等 OverlayMiniCtrl + Polls 圖片上傳 + Display Settings 三卡右 rail 全做完才 release v5.0
- (C) 切 v5.0 用目前狀態 → v5.1 處理上面的「mock 補真」清單

### 5.2 Broadcast 頁面去留
請參考 §3 第二段。Design brief 明確不在 prototype，但已實作。

### 5.3 OverlayMiniCtrl 規格
- 視窗大小？預設位置？
- 拖曳？吸附螢幕邊緣？
- 透明度？hover 時放大？
- 跨螢幕（external display 簡報時）行為？

### 5.4 Mock 補真優先序
§2 那張表 14 個項目，哪些是 v5.0 必補、哪些可以 v5.x、哪些直接砍？

特別需要決定：
- **Plugins live console**：要做 stdout pipe 還是接受永久 placeholder？
- **Moderation 即時日誌 + Ratelimits 違規 feed**：兩者都需要 ring buffer + WS broadcast，可以共用同一套 event bus
- **Fonts 子集化**：實際做 pyftsubset 的話會多 10MB+ 依賴，值得嗎？
- **System 真實 UPTIME / DB 信息**：簡單加，但 prototype 顯示「sqlite · 42 MB」我們用 settings.json + filesystem，要怎麼表達？

### 5.5 Token 細節
- prototype `hudTokens.lime: '#86efac'` 我們有對齊 ✓
- prototype `hudTokens.crimson: '#f87171'` 我們有對齊 ✓
- prototype `hudTokens.amber: '#fbbf24'` 剛剛校到 `--color-warning` ✓
- prototype 有 `magenta` alias 指向 amber（per design brief 已決定 amber 取代 magenta）— 我們 `--color-magenta` 沒定義，admin 也沒用，OK

### 5.6 Mobile prototype handoff
viewer mobile prototype 裡（`ViewerMobile`）：
- 假狀態列 14:02 + ●●●● 訊號條（純視覺裝飾）
- 我們**沒**畫，因為實際手機瀏覽器有自己的狀態列
- 確認這是 prototype 的 mockup 表示 vs 真要 fake 一個？

### 5.7 Edge state pages
prototype `priority-2-pieces.jsx` 有：
- viewer offline / overlay connecting / admin lockout（per backlog P2 items）

memory 顯示 v5.0.0 sprint 「P2 edge state pages」已完成，我這輪沒重新驗證對齊度。要不要也審一輪？

---

## 6. 程式碼層面的 v5 工程債（與設計無關，但 Design 應知道）

- `admin.js` 還有 3197 行（從 3436 split 出 login + dashboard 後）。Design 改 dashboard 任何視覺一定動到這檔，建議 v5.1 再 split sidebar + topbar 出去
- `viewer-v2.css` 已是 prototype 一對一鏡像，未來 prototype 改設計時 diff 檔很乾淨
- shared `tokens.css` symlink 到 server/static/css/tokens.css — Electron 與 server 都吃同一份，prototype 的 token 改了我們改一處就同步

---

## 部署環境
- VPS: Oracle 138.2.59.206:4000（HTTPS via nginx）
- 容器：`danmu-fire` + `danmu-reverse-proxy-https`
- 當前 commit：`b1d45ef` on `claude/design-v2-retrofit`
- 未 merge main（main 仍 v4.8.x）

部署指令參考 `~/.claude/projects/-Users-guantou-Desktop-danmu-desktop/memory/vps_deploy.md`。
