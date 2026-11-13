# Slido → Danmu Bridge

一個 Chrome MV3 extension：主持人在自己的瀏覽器開著 Slido 活動頁時，把
**之後**出現的新提問轉送到 `danmu-desktop` server（`POST /fire`），以彈幕飄過螢幕。

> 這是非官方整合：它只讀主持人自己開的 Slido 頁面本來就收到的資料，
> 不代替 Slido 登入、不處理 captcha、不另外呼叫 Slido。依賴的是 Slido 網頁的
> 內部格式，Slido 改版時可能失效（後台會顯示「讀不懂 Slido 的提問格式」）。

## 原理

- `inject.js` 在 Slido 頁面的 main world hook `fetch` / `XMLHttpRequest` / `WebSocket`，
  只轉發兩種回應的原文：提問清單（`…/events/<id>/questions`）與即時串流（socket.io `stream-sio`）。
- `core.js` 用 Slido 提問物件的明確欄位（`event_question_id`、`text`、`author.name`、
  `is_anonymous`、`is_public`、`path`、`date_published`）解析，不猜欄位名。
- **新舊以 id 判斷**：活動頁打開後載入的第一份提問清單全部視為歷史；之後才第一次
  出現的 id 就是新提問，不需要時間戳。時間戳只在兩邊都有時輔助判斷，而且比的是
  Slido 伺服器的時間（第一份清單裡最新的那則），不是本機時鐘。
- 開關關閉時仍記住看過的 id，所以重新打開就是「從現在起」，不必重整 Slido 頁。
- 回覆、尚未通過 Slido 審核（`is_public:false`）的提問不送。
- **匿名提問**顯示名稱是 `Slido`，而且不帶任何能串連同一位參與者的識別碼；後台
  對它只能撤下或封鎖關鍵字，不能「封鎖此人」。具名提問帶 `slido:<參與者 id>`，
  可以只封鎖那一位。
- 每則間隔預設 3 秒、待送佇列上限 10 則（滿了丟最舊的並計數）。一則提問只有在
  伺服器給出結果（送出／待審／擋下）後才記為已處理；失敗的會在 Slido 再次出現它時重試。
- 送到 `/fire` 時帶 `X-Fire-Source: slido`；有有效 Fire token 時後台訊息流會標出「Slido」。
  黑名單、過濾規則、審核佇列、封鎖與同屏上限都照常套用。

## 安裝

1. 後台「整合」頁的 Slido 卡片按「下載擴充功能（.zip）」，解壓縮。
2. 打開 `chrome://extensions/`，右上角打開「開發人員模式」，點「載入未封裝項目」，
   選解壓出來的 `slido-extension/` 目錄。

## 使用

1. Slido 卡片產生 Fire token。在擴充功能 popup 填入卡片上顯示的本站網址與 token，按 Save。
2. 在同一個瀏覽器打開 Slido 活動頁（`app.sli.do/event/…`）。
3. 之後的新提問會變成彈幕；卡片上的狀態列顯示「已送出／待審／已擋下」或錯誤。

帶了 token 但 token 無效（重新產生、撤銷、停用、或升級前產生的舊 token）時，
server 會回 401，popup 與卡片都會顯示「Fire token 無效」。沒填 token 也能送
（走公開通道，受每 IP 速率與 captcha 限制），但後台看不到狀態，也不會標出 Slido。

## 狀態與除錯

- 後台 Slido 卡片的狀態列：等待回報／接收中／錯誤（token 無效、需要 captcha、限流、
  螢幕已滿、沒有 overlay、伺服器拒收、讀不懂 Slido 格式）。錯誤會同時寫進 server log（`[slido]`）。
- popup 顯示本機計數：sent / held / blocked / failed / dropped。

## 已知限制

- 依賴 Slido 未公開的網頁內部介面。
- 只解析 socket.io v4 的文字封包；binary frame 不處理。
- 若活動頁沒有先載入提問清單就收到串流，該批提問視為歷史；連續發生會回報「讀不懂格式」。
- 必須有一個 Slido 活動分頁開著；關掉分頁約 90 秒後後台會回到「等待回報」。

## 權限說明

- `storage` — 設定（local）、已處理的提問 id 與各分頁的基準（session）
- `scripting` — 注入 main-world hook
- `host_permissions`
  - `*.sli.do`, `*.slido.com` — content script 只在這些網域跑
  - `http://*/*`, `https://*/*` — 讓 service worker 能 POST 到使用者設定的 danmu server。

## 開發

改了這個目錄後要重新打包下載檔（提交生成的 zip）：

```
python server/scripts/build_slido_extension_zip.py
```

`core.js` 的規則在 `server/tests-js/slido-extension-core.test.js` 離線測試；
server 端在 `server/tests/test_slido_bridge.py`；zip 的新鮮度在 `server/tests/test_slido_extension_zip.py`。

## 授權

與 repo 同授權。
