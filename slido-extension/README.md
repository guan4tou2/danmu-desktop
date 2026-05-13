# Slido → Danmu Bridge

一個 Chrome MV3 extension，把 Slido 活動頁面上的問題 / 留言 / 投票文字
即時轉送到本機的 `danmu-desktop` server（`POST /fire`），顯示為彈幕。

## 原理

Slido 的頁面透過 `fetch` / `XMLHttpRequest` / `WebSocket` 與 `*.sli.do`
API 通訊。Extension 在使用者已登入的 Slido 頁面上注入 `inject.js` 到
main world，hook 三個 transport 並從 JSON response 中遞迴找出
`text` / `body` / `question` / `message` / `answer` 等欄位，去重後
轉發到 `http://localhost:4000/fire`。

- 不用 Slido API key（走使用者自己的登入 session）
- 不碰 server 認證（`/fire` 是 public endpoint）
- 在 background service worker 做 dedup（預設 5 分鐘）+ rate limit（預設 800ms）
- 超過 100 字的訊息自動截斷（符合 `FireRequestSchema` 上限）

## 安裝

1. 打開 `chrome://extensions/`（或 Edge/Brave 對應頁）
2. 右上角打開「開發人員模式 / Developer mode」
3. 點「載入未封裝項目 / Load unpacked」
4. 選這個 `slido-extension/` 目錄

## 使用

1. 啟動 danmu-desktop server（預設 `http://localhost:4000`）與 Electron overlay
2. 點 extension icon 打開 popup：
   - **Server URL**：如果不是本機，改成你的 server 位址
   - **Fire Token** (選填)：對應 server 的 `FIRE_ADMIN_TOKEN`，填了之後
     extension 打 `/fire` 會帶 `X-Fire-Token` header，走 admin 快速通道，
     不受 public per-IP / per-fingerprint / 全域速率限制和 captcha 阻擋。
     只在你是 server 管理者、extension 跑在公開場合時才需要。
   - **Mode**：先用 `Dry run` 驗證能抓到訊息再切 `Live`
   - **Test /fire**：手動發一則測試彈幕
3. 打開 Slido 活動頁（`https://app.sli.do/event/...`），開 DevTools console
   應該看到 `[slido-danmu] hooks installed`
4. Slido 上有新問題/留言/投票出現時，就會自動轉成彈幕

## 調整 & 除錯

### 看抓到哪些訊息
打開 Slido 頁的 DevTools → Console，filter `[slido-danmu]`。
在 popup 切 `Dry run` 可以只 log 不實際送，適合第一次對 mapping。

### 如果沒抓到訊息
Slido API schema 可能改了。開 DevTools → Network 面板看 Slido 打的
XHR/Fetch/WS，找出實際的 JSON 路徑，然後在 `inject.js` 的
`TEXT_FIELDS` / `AUTHOR_FIELDS` set 裡加欄位名。

### Server 拒收
- 檢查 popup 的 Test /fire 結果
- 檢查 server log：可能是 rate limit、黑名單關鍵字、或 overlay 沒連線
- `/fire` 會在沒有 overlay 連線時回 503

## 權限說明

- `storage` — 儲存 server URL / mode 等設定
- `scripting` — 注入 main-world hook
- `host_permissions`
  - `*.sli.do`, `*.slido.com` — content script 只在這些網域跑
  - `http://*/*`, `https://*/*` — 讓 service worker 能 POST 到任意
    使用者配置的 danmu server（本機 / LAN / 遠端）。
    如果只用本機，可以把這個收窄成 `http://localhost/*` + `http://127.0.0.1/*`。

## 已知限制

- 只攔截字串型 JSON 與 WS text frame；binary frames（protobuf）無法解析
- Slido 偶爾會改 API 欄位名 → 需要手動 tune `TEXT_FIELDS`
- 依賴 main-world hook；如果 Slido 未來加 CSP 或 iframe sandbox 限制，注入會失敗

## 授權

與 repo 同授權。
