# Slido → Danmu Bridge

一個 Chrome MV3 extension：主持人在自己的瀏覽器開著 Slido 活動頁時，把
**之後**出現的新提問轉送到 `danmu-desktop` server（`POST /fire`），以彈幕飄過螢幕。

> 為什麼不是 server 直接去拉 Slido？Slido 沒有對外開放的提問 API；參與者頁面
> 讀提問要先走 Slido 自家 OAuth 參與者流程（用 Slido 的第一方 client），活動代碼
> 查詢還有 captcha 擋自動化。server 端去模擬那些流程既易碎、又可能牴觸 Slido 條款，
> 所以改由主持人自己的瀏覽器（Slido 官方頁面自己完成登入與連線）把看得到的提問轉過來。

## 原理

- `inject.js` 在 Slido 頁面的 main world hook `fetch` / `XMLHttpRequest` / `WebSocket`，
  只轉發兩種回應的原文：提問清單（`…/events/<id>/questions`）與即時串流（socket.io `stream-sio`）。
- `core.js` 用 Slido 提問物件的明確欄位（`event_question_id`、`text`、`author.name`、
  `is_anonymous`、`is_public`、`path`、`date_published`）解析，不再猜欄位名。
- 只送「這個 Slido 分頁打開之後（且開關是開著）」才發佈的提問；開頁時 Slido 回來的
  歷史提問一則都不送。沒有時間戳的提問視為歷史。
- 回覆、尚未通過 Slido 審核（`is_public:false`）的提問不送；匿名提問不帶名字。
- 每則間隔預設 3 秒、待送佇列上限 10 則（滿了丟最舊的並計數），同一提問只送一次
  （服務工作者重啟後也記得，存在 `chrome.storage.session`）。
- 送到 `/fire` 時帶 `X-Fire-Source: slido`，指紋是 `slido:<Slido 參與者 id>`：
  後台訊息流會標出「Slido」，「封鎖此人」只封鎖那一位參與者。
  黑名單、過濾規則、審核佇列、封鎖與同屏上限都照常套用。

## 安裝

1. 打開 `chrome://extensions/`（或 Edge/Brave 對應頁）
2. 右上角打開「開發人員模式 / Developer mode」
3. 點「載入未封裝項目 / Load unpacked」，選這個 `slido-extension/` 目錄

## 使用

1. 後台「整合」頁的 Slido 卡片產生 Fire token，貼進 extension popup 的 **Fire Token**，
   **Server URL** 填你的 danmu server，按 Save。
2. 在同一個瀏覽器打開 Slido 活動頁（參與者頁 `app.sli.do/event/…`）。
3. 之後的新提問會變成彈幕；Slido 卡片上那一行狀態會顯示「已送出／已擋下」或錯誤原因。

沒有填 Fire token 也能送（走公開通道，受每 IP 速率與 captcha 限制），但後台看不到狀態。

## 狀態與除錯

- 後台 Slido 卡片的狀態列：等待回報／接收中／錯誤（限流、沒有 overlay、伺服器拒收、
  讀不懂 Slido 格式）。錯誤會同時寫進 server log（`[slido]`）。
- popup 顯示本機計數：sent / blocked / failed / dropped。
- 「讀不懂 Slido 格式」代表 Slido 改了回應形狀，需要更新 `core.js`。

## 已知限制

- 依賴 Slido 未公開的網頁內部介面；Slido 改版可能讓它失效（會以「讀不懂格式」顯示）。
- 只解析 socket.io v4 的文字封包；binary frame 不處理。
- 開關判定「之後」用的是本機時鐘，與 Slido 伺服器時間差會讓邊界上的幾秒不準。
- 必須有一個 Slido 分頁開著；關掉分頁約 90 秒後後台會回到「等待回報」。

## 權限說明

- `storage` — 設定（local）與已送提問 id（session）
- `scripting` — 注入 main-world hook
- `host_permissions`
  - `*.sli.do`, `*.slido.com` — content script 只在這些網域跑
  - `http://*/*`, `https://*/*` — 讓 service worker 能 POST 到使用者設定的 danmu server。
    只用本機時可以收窄成 `http://localhost/*` + `http://127.0.0.1/*`。

## 測試

`core.js` 的規則在 `server/tests-js/slido-extension-core.test.js` 離線測試；
server 端管線在 `server/tests/test_slido_bridge.py`。

## 授權

與 repo 同授權。
