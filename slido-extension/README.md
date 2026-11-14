# Slido → Danmu Bridge

一個 Chrome MV3 extension：主持人在自己的瀏覽器開著 Slido 活動頁時，把
**之後**出現的新提問轉送到 `danmu-desktop` server（`POST /fire`），以彈幕飄過螢幕。

> 這是非官方整合：它只讀主持人自己開的 Slido 頁面本來就收到的資料，
> 不代替 Slido 登入、不處理 captcha、不另外呼叫 Slido。依賴的是 Slido 網頁的
> 內部格式，Slido 改版時可能失效（後台會顯示「讀不懂 Slido 的提問格式」）。

## 從 v0.2 升級

升級到這一版（server 與擴充功能 v0.3.0）後，**之前在後台產生的 Fire token 一律失效**，
v0.2 擴充功能送出的請求會收到 401。請到後台「整合」頁重新產生 token，下載新版擴充功能、
重新載入，並把新 token 貼進 popup。v0.3 起沒有 token 就不會送出任何提問。

## 原理

- `inject.js` 在 Slido 頁面的 main world hook `fetch` / `XMLHttpRequest` / `WebSocket`，
  只轉發兩種回應的原文：提問清單（`…/events/<id>/questions`）與即時串流（socket.io `stream-sio`）。
- `core.js` 用 Slido 提問物件的明確欄位（`event_question_id`、`text`、`author.name`、
  `is_anonymous`、`is_public`、`path`、`date_published`）解析，不猜欄位名。
- **寧可不送、明確報錯**。「算不算新」和「送過沒有」是兩件事，分開記：
  1. **起算點**：每個「分頁＋活動」各一個（活動 id 取自提問清單的網址），等於該活動
     第一份回應到達時的 Slido 伺服器時間——取回應的 HTTP `Date` 標頭；讀不到時用那份
     清單裡最新一則的時間；兩者都有取較晚的。定下後不再變動：換排序、換分頁、送出
     都不會移動它。
  2. **有時間戳的提問**（`date_published`，沒有就 `date_created`）比起算點嚴格更晚
     才算新，不論來自清單或即時串流、到達順序如何。兩邊都是 Slido 的時鐘，不看本機時間。
  3. **沒有時間戳的提問**：在即時串流裡、而且這個活動第一次看到這個 id，才算新；在清單裡
     無法判定，不送。
  4. **無法判定要看得見**：同一個活動累計 3 則無法判定的提問就回報「讀不懂 Slido 格式」，
     不論有沒有看過串流。起算點之後才第一次看到、被當成舊提問略過的，計入「略過」。
  5. **不重送**只靠「已處理的 id」：已送出、待審、擋下、丟棄、關閉期間看到的，以及無法
     再判定的無時間戳舊提問，這些 id 永不剔除；單一活動累計 5000 個時停止轉送並回報
     「超過追蹤上限」。只有能靠規則 2 重判的有時間戳舊提問會被剔除（上限 2000）。
- 開關關閉或沒有 token 時仍記住看過的 id，所以開啟後就是「從現在起」，不必重整 Slido 頁。
- 回覆、尚未通過 Slido 審核（`is_public:false`）的提問不送。
- **匿名提問**顯示名稱是 `Slido`，而且不帶任何能串連同一位參與者的識別碼；後台
  對它只能撤下或封鎖關鍵字，不能「封鎖此人」。具名提問帶 `slido:<參與者 id>`，
  可以只封鎖那一位。
- 每則間隔預設 3 秒、待送佇列上限 10 則（滿了丟最舊的、計數，且之後不會再送）。
  送出的提問在伺服器給出結果（送出／待審／擋下）後才記為已處理；失敗的會在串流
  再次出現它時重試。
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
server 會回 401，popup 與卡片都會顯示「Fire token 無效」。沒填 token 時擴充功能
不送任何提問，popup 顯示「Fire token required」。

## 狀態與除錯

- 後台 Slido 卡片的狀態列：等待回報／接收中／錯誤（token 無效、需要 captcha、限流、
  螢幕已滿、沒有 overlay、伺服器拒收、讀不懂 Slido 格式、超過追蹤上限）。接收中時
  列出已送出／待審／已擋下／略過。錯誤會同時寫進 server log（`[slido]`）。
- popup 顯示本機計數：sent / held / blocked / failed / dropped / skipped
  （skipped ＝ 起算點之後才看到、被當成舊提問略過的）。

## 已知限制

- 依賴 Slido 未公開的網頁內部介面。
- 只解析 socket.io v4 的文字封包；binary frame 不處理。
- 分頁還沒載入任何活動的提問清單就收到串流時，那些提問不送；連續發生會回報「讀不懂格式」。
- 讀不到 `Date` 標頭、而第一份清單又不含最新的提問（例如熱門排序）時，起算點會偏早，
  之後換成最新排序可能把開頁前不久的提問當成新的。
- 開頁那一刻正在產生中的提問（清單已產生、回應還沒送出）可能被當成舊的而略過。
- 需審核的提問以 `date_published` 判斷；它是否等於「通過審核的時間」尚未以真實活動確認。
- 必須有一個 Slido 活動分頁開著；關掉分頁約 90 秒後後台會回到「等待回報」。

## 權限說明

- `storage` — 設定（local）、已處理的提問 id 與各分頁、各活動的起算點（session）。
  分頁關閉時清掉該分頁的狀態（`chrome.tabs.onRemoved`，不需要 `tabs` 權限）。
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
