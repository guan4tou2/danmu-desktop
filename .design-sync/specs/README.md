# 設計稿實作進度

`.design-sync/specs/*.md` 是從 Claude Design 專案 `196ce1d7` 抽出的規格
（授權會過期，所以先落地成 markdown）。設計稿 **14「工程銜接」是主索引**：
token 對照、class 對照、刪除清單、8 步遷移順序、Electron 參數、i18n 文案總表。

## 遷移順序（設計稿 14 · §4）與現況

| # | 步驟 | 狀態 |
|---|---|---|
| 1 | tokens.css 改值＋`--font-ui` | ✅ 2026-08-19（SF 刻度）＋ 2026-09-06（`--color-accent` 轉 sky、新增 `--color-ink-on-accent`） |
| 2 | 刪 hud.css 引用、`.admin-ui-*` 搬進 style.css | ✅ 2026-09-07（整檔刪除，5584 行分家：admin 4334 → style.css、觀眾頁離線卡 → viewer-v2.css、大螢幕連線中 → overlay.css、焦點環＋reduced-motion → tokens.css、936 行死規則刪掉） |
| 3 | Admin 側欄 IA 3 組 | ✅ v8 ＋ 2026-09-06 加回 `widgets`（13 列） |
| 4 | Admin 各頁頁首去 kicker → 設定群組化 | ✅ 設計稿 07 全套；**08 的併頁未做**（見下） |
| 5 | 觀眾頁（05） | ✅ |
| 6 | 桌面端（04） | ✅ |
| 7 | 品牌 icon / tray / favicon（11） | ✅ 2026-09-06 稍早 |
| 8 | 大螢幕（09） | ✅ 入場 QR／HUD 移除／投票卡／系統匣／錯誤頁 |

## 還沒做的（依價值排序）

1. **設計稿 08 的併頁**——**已全數完成**（T1 主題／T2 表情／W1 小工具／
   H1 場次／X1 擴充／S1 系統）。S1 2026-09-07：入口頁＝狀態 chip＋四格數字
   ＋設定列（公開網址・QR・後台語言・後台深淺色）＋四條導向列；六格
   sparkline、services／recent errors 兩塊 pane、QUICK ACTIONS（含永遠
   disabled 的「待 BE」）、CONFIG SUMMARY 全數退場。
   **稿上對不上產品的一處**：已連線副標寫「1 顯示層 · 37 觀眾 · 1 後台」，
   但只有顯示層掛 WebSocket、觀眾是輪詢的、後台沒有連線——只報 server 真的
   知道的兩個數，沒有編第三個。
   擴充（X1）2026-09-07 **已照稿**：四合一分段（Webhook／插件／API 金鑰／
   定時發送），四條舊路由降級成分頁導向；「新增 Webhook」走 shell 的頁首
   動作插槽。Slido／Discord／OBS／Bookmarklet 目錄稿上沒有，但 Slido 那張卡
   有實際可用的下載與 Fire Token 設定，歸到「插件」分段。
   小工具（W1）2026-09-07 **已照稿**：一列＝圖示＋名稱＋摘要（「資工 12 ·
   電機 9 · 右上」）＋›，編輯器收在後面；三顆並排的新增鈕收成一顆「新增
   小工具」；右欄那塊寫死的 `<span>Desktop preview</span>` 換成真的大螢幕
   預覽，方塊可拖、放開吸附到最近的預設位置並寫回 server。
   素材（T2）2026-09-07 **已照稿**：四段（`表情 6` / `貼圖 1 包` / `字型 8` /
   `音效 4`），數量印在分段標籤上，由各分頁抓完資料後回報。表情分段的文案
   全數照稿（頁面說明、拖放區、底部註記），卡片下緣是「用過 N 次／尚未使用」
   （掃歷史算 `:名稱:` 出現次數，後端 `/admin/emojis/list` 補回 `used`）。
   **「總覽」分頁退場**：那頁自己寫著「上傳與編輯仍在各自頁面」「素材庫只
   負責總覽」——每一張卡都是連到別頁的連結，唯一獨有的是各類數量，而數量
   現在就印在分段標籤上（`admin-assets.js` 與它的 CSS 一併刪除）。
   字型分段的「CDN DELIVERY · 交付狀態」整張退場——HIT RATE／P95 TTFB／
   REQ/24H 三個 id **從來沒有任何程式寫過值**，EDGE 永遠印「LOCAL」，
   等於在宣傳一個不存在的 CDN；子集化卡那條寫死 38% 的進度條也退場
   （原始碼註解自己寫著「not real data」，而且子集化根本不是自動的，
   是每個字型各自按一次的動作），改成講真話並指路。
   貼圖／字型／音效三段的全大寫英文（`FILE ·` `SOUND LIBRARY ·` `VOLUME ·`
   `FAMILY/FOUNDRY/WEIGHT/SIZE/FMT` `ON` `SYS`）與 `＋` 圖示按鈕一併掃掉；
   「主題包」（指的其實是貼圖包）正名、音效說明的「Desktop」改「顯示層」。
   主題（T1）2026-09-07 **已照稿**：4 張卡（主題名＋直接把一行彈幕畫成那個
   主題的樣子＋使用中／套用；色票列、英文代號、meta 三行、BUILT-IN 標籤
   全數退場）、卡片下方的「<主題> · 細部設定」（字型下拉／描邊分段／陰影
   分段／觀眾預設顏色／預覽條）、頁首右側「新主題」。
   細部設定是**疊在 YAML 之上的一層覆寫**（`services/theme_overrides.py`，
   走 `json_state.py`）——主題檔是 repo 裡的程式碼，改它等於改程式碼。
   合併點只有一個：`themes.get_active()`；`/fire` 只呼叫它，所以覆寫自動
   吃到每一則彈幕，不必在送出路徑上再開分支。值傳空字串＝移除覆寫（回到
   主題原本的設定），而不是存一個「跟原本一樣」的值——後者會讓主題檔改版
   時那個欄位再也跟不上。
   描邊與陰影是**分段**不是數字：底層的 `strokeWidth` / `shadowBlur` 是連續
   值，但主持人要決定的是「有沒有、多重」，給 0–6 的滑桿只是把單位換算丟
   給他。「新主題」＝把現在這個主題（含覆寫）另存一份，寫進
   `runtime/themes/`（不是 repo 的 `server/themes/`——那會讓工作目錄變髒，
   也會被 `docker compose build` 蓋掉）；內建四個刪不掉，刪掉套用中的
   會退回預設。
   紀錄與匯出（H1）2026-09-07 做了一半：**場次分段已照稿**（一張表
   場次／訊息／觀眾／時長／匯出 ›，加匯出面板：格式分段、個資開關配警語、
   重播這場／下載），後端新增 `GET /admin/sessions/<id>/export`（兩種場次
   來源都認得，個資預設不帶）。分段順序也改成稿上的場次／觀眾／搜尋／
   操作紀錄。
   2026-09-07：**進行中的控制項已搬成全域**——暫停／繼續／停止／進度／錄製
   指示改住 `.admin-replay-bar`（比照斷線橫幅：插在 body 最前、sticky、閒置
   收起）。重播一開始主持人就會離開紀錄頁，控制項留在那裡等於離開後沒地方
   可以停；那也是「重播」分段一直拿不掉的唯一理由。實測在 `#/live` 上仍看
   得到進度並能暫停／停止。
   `admin-replay-controls.js` 原本「startBtn 不在就整個 return」也一併拿掉
   ——那顆按鈕在別的路由上本來就不在 DOM 裡。按鈕上的 ▶ ⏸ ⏹ ⏺ 同時清掉。
   2026-09-07 續：**時間軸匯出搬到「備份與還原」**。稿上寫「依小時的整批匯出
   收進場次的匯出面板」，但那在功能上不成立——場次面板是**單一場次**的
   CSV/JSON/SRT，給不了「近 7 天、跨場次、只要投票」這種匯出。照字面刪掉是
   真的少一個能力，所以改成搬家：「把資料整批倒出來」是備份的事，而「全部
   清除」本來就住那一頁。搬進去之後才發現備份頁**原本就有一列較陽春的
   「彈幕紀錄」匯出**（1/6/24/168/720 小時 ＋ 格式，沒有內容篩選與大小預估），
   是搬進來這個精靈的嚴格子集——一併移除，一頁只留一個匯出工具。
   `history-v2-section` 改名 `sec-timeline-export`：`sec-` 前綴之後可見性交給
   `applySectionVisibility` 統一管，模組自管的 route guard 刪掉。
   一個只有實測才看得到的坑：備份頁是 **MutationObserver 延遲注入**的，
   `admin-panel-rendered` 當下錨點還不存在——第一版直接 return，整塊精靈永遠
   沒被建出來。改成錨點沒到就先掛 grid 尾端，備份頁到齊時再挪到它後面。
   2026-09-07 收尾：**「重播」分段已刪**，紀錄與匯出就是稿上的四段
   （場次／觀眾／搜尋／操作紀錄）。連帶移除 `sec-history-tabs`（子分頁 strip）、
   `sec-history-list`、`sec-history`、`admin-replay.js`（replay-v2-section）與
   `replay-recorder.js`，以及 25 顆變成孤兒的 i18n key。
   **刻意放棄的能力**（使用者裁定照稿走）：重播個別訊息（勾選重播與單則
   re-fire）、錄製回放、JSON 時間軸匯出。整場重播仍在「場次 › 重播這場」。
   一個差點自己撤銷前一顆 commit 的坑：**場次面板啟動重播只發 toast**，
   從來沒呼叫過輪詢——那是退場的 `sec-history` 啟動鈕做的事。照原樣刪掉，
   全域重播列會永遠不出現，也就沒有地方可以暫停或停止。改成控制列自己
   認領正在跑的重播（進 admin 探詢一次 `/admin/replay/status`），啟動端
   另外呼叫 `notifyStarted()` 只是為了不用等下一輪。
   `admin-history.js` 只剩黑名單（歷史那半整個退場），`admin-message-drawer.js`
   那條永遠會是空陣列的 `allHistoryRecords` fallback 一併拿掉。
2. **設計稿 15 的補頁**——已做：⌘K 三段結果（動作 › 頁面 › 訊息，取代
   F1–F4）、說明抽屜（右側 360 推開）、斷線橫幅三段式、登入過期對話框
   （EX1，2026-09-07：401 改開對話框、保留 hash 路由、就地換 CSRF token）。
   快速鍵一覽（KS1，2026-09-07：表與綁定同一份陣列，⌘⇧D／⌘⇧⌫／J／K／B／
   ⇧B／Space／P 全數真的接線；說明抽屜原本 advertise 的三個鍵從來沒被綁過，
   已退場並改由頂欄「?」按鈕開抽屜）。
   觀眾列表（AU1）2026-09-07 **已照稿**：欄位改成 觀眾／裝置識別／訊息／
   被擋／最後活動；IP 與 UA 兩欄退場（頁面說明寫「不收個資」，旁邊擺 IP 是
   自己打自己的臉）；匿名合併成一列並標「×N 位」；已封鎖者名字旁標「已封鎖」；
   篩選列有「找暱稱或裝置識別」與排序；底部「顯示 N / M　載入更多」。
   後端 `fingerprint_tracker` 這次才開始記暱稱——在這之前「觀眾」與「訊息」
   兩欄**永遠是「匿名」與「0」**（前端讀 `r.nickname` 與 `r.message_count`，
   API 兩個都沒回過）。**稿上的「這場 · 37 人」下拉沒做**：這份名單是
   in-memory 的即時聚合、沒有場次維度，做一個只有一個選項的下拉沒有意義。
   搜尋（SR1）2026-09-07 **已照稿**：單欄——搜尋框＋結果數「N 則」、篩選 chip
   「這場／所有場次／只看被擋的」＋「任何人」下拉、右側「匯出結果 CSV」、
   結果列（日期時間／內文命中詞高亮／暱稱）、底部「還有 N 則 · 載入更多」。
   `history` 這次才開始存暱稱——在這之前 /admin/search 讀 `r.get("nickname")`
   **一直是空字串**，搜尋比對不到暱稱、結果列也寫不出「誰說的」。
   退場的是左邊 260px 篩選面板：六顆時間範圍 chip（「自訂」按了沒反應）、
   四個狀態勾選、以及一塊寫著 `fp:` `nick:` `session:` `after:` 的語法說明——
   **後端一個都沒實作**，等於教使用者一套不存在的語法。
   載入骨架（SK1）**已照稿**：超過 3 秒改顯示「連線較慢…」。

**設計稿 15 至此全數完成。**
3. **設計稿 08 的流程**——**已全數完成**。
   首次設定精靈（F1）2026-09-07 **已照稿**：四步
   `1 伺服器網址 · 2 主題 · 3 審核基本防線 · 4 完成`；「顯示規則」那一步
   退場（它是四個開關的巡覽，不是設定——首次設定要問的是非問不可的事）；
   主題那步的四張卡改用稿上的**定位說明**（「暖色像素感，適合活動主視覺」）
   而不是 server 的功能描述，順序也照稿；頁尾統一成「‹ 上一步／繼續」。
   全大寫英文一併退場：品牌副標「SETUP WIZARD · v5 YELLOW」、每個欄位下方
   的 SERVER NAME／PUBLIC URL／PORT／WS PATH、完成頁摘要的欄名。
   投票分析（P1）2026-09-07 **已照稿**：頁首（‹ 投票／題目／狀態時間／
   推結果到大螢幕＋匯出）、KPI 四格、結果長條「N · M%」、「投票時序 ·
   每 10 秒」折線圖。時序是真的資料：`poll.py` 開始記每一票的時間並分成
   10 秒一桶（只留時間、不留是誰投的），且只出現在 admin 的 status——
   `/poll/public-status` 是白名單組出來的，觀眾看不到。
   新增 `POST /admin/poll/broadcast`（「推結果到大螢幕」＝把現在的狀態
   再送一次，中途才連上的顯示層在下一票進來之前手上是空的）。
   退場的一整批都是「還沒有資料的格子」：第五格 KPI「作弊嘗試」（值永遠
   是「—」、副標「待 BE 擴張」）、SENTIMENT INDEX（把選項當 Likert 量表
   前後相減，一個編出來的數字）、「vs 上一次」（永遠「—」）、TIMELINE
   佔位卡（連結指向內部設計文件）、GEO 佔位卡、INTEGRITY 卡（四列裡兩列
   寫著「未強制」「無」，等於在宣傳沒有的防護）。
   通知中心（N1）2026-09-07 **已照稿**：頂欄鈴鐺＋數字 badge 開的右上彈出
   面板；整頁三欄式收件匣（篩選欄／清單／詳情窗＋四個分頁＋嚴重度篩選）退場，
   四個來源的聚合邏輯原封保留。舊書籤 `#/notifications` 改成把面板打開。
4. **設計稿 10** ——導覽氣泡（G1）2026-09-07 **已照稿**：3 步（顯示層／觀眾怎麼進來／遇到
   不當內容）、360px 圓角 16px 氣泡卡、45° 小三角、「1 / 3」計數、底列
   「略過導覽」＋「下一步」36px 主按鈕、底部一行進度文字。遮罩改用聚光燈
   自己的 `0 0 0 4px 白 / 0 0 0 9999px rgba(15,23,42,.35)` 外陰影打洞，
   原本手算 clip-path 八個頂點、視窗一縮就漏縫。
   退場的兩步：⌘K 命令面板、Fire Token 整合、通知中心——第一次開這個頁面
   的人還沒有 webhook 會失敗，也還沒有東西要 POST 進來。
   箭頭指目標中心（不跟著被邊緣夾住的卡片走），三個目標都是控制台上實際
   存在的選擇器；找不到或捲出畫面就退回置中無聚光燈。
   觀眾頁 emoji 列（V2）2026-09-07 **已照稿**：快捷列 6 格（🔥 👏 ❤️ 😂 ✨
   ＋「更多」），每格 44×44、圓角 12px；「更多」開的是這場自訂表情的完整
   面板（標題「表情」＋「收起」、44px 方格、Esc／外點關閉）。輸入框聚焦
   補上 1px 主色框 ＋ 3px 光暈，字數 tabular。
   **那顆「更多」在此之前沒有綁任何 handler**——按鈕寫著 `☺`、`/emojis`
   也抓回來填好格子了，但 `.is-open` 沒人加，觀眾永遠打不開；面板本身還是
   Tailwind 原型時代的 12 欄格線＋寫死 32px 的 `<img>`，空狀態與失敗訊息是
   寫死的英文。
   場次詳情（G2）2026-09-07 **已照稿**：頁首（‹ 紀錄與匯出／場次名／時間／
   重播＋匯出）、KPI 四格（訊息／觀眾／每分鐘高峰 N (時:分)／被擋下）、
   搜尋＋「全部／被擋下 N」分段、訊息表（時間戳／顏色點／內文／暱稱），
   被擋下的那幾列淡紅底＋刪除線＋標「封鎖字「加line」」。
   **被擋的彈幕這次才開始留紀錄**——在這之前它們直接消失，主持人事後查不到
   自己擋掉了什麼，`/admin/search` 讀的 `r.get("status")` 也永遠是預設值。
   場次的「訊息」數改成只算真的播出去的，被擋的另算一欄。
   退場的：回放控制列（標籤自己寫著「(VISUAL ONLY)」，四顆倍速鈕點了只會
   換 is-active）、右側 stats rail、熱門關鍵字卡；匯出改用真的「這一場」的
   端點（原本是 `hours=1` 當代理，匯出的是最近一小時、跟看的那場無關）。
   密度時間軸與標記收進摺疊區——稿上沒有，但標記有後端與測試，拿掉唯一入口
   等於廢掉功能。
   更新已下載（S7）2026-09-07 **已照稿**：320px 對話框（app icon／
   「Danmu Fire 5.4.1 已準備好」／「重新啟動即完成更新，約需 10 秒。設定與
   伺服器位址都會保留。」／直排兩顆「重新啟動並更新」「下次關閉時再更新」），
   而且**顯示中時不打斷——關閉顯示層之後才提示**。原本是下載完成直接彈
   toast，不管當下在不在放彈幕；重新啟動就是把大螢幕關掉，那是最糟的打斷。
   行為有四條 jest 測試（顯示中不跳／關閉後才跳／兩顆按鈕各自送出／同一次
   下載只跳一次）。
5. **設計稿 13** ——2026-09-07 **已出圖**：`docs/banner.png`（2400×800）與
   `docs/social-preview.png`（2560×1280），README 與 README-CH 的 H1 之上都
   放了橫幅。兩張都是拿設計稿自己的 HTML（`13 GitHub Banner.dc.html`）以
   deviceScaleFactor=2 重算，**不是**用設計專案附的那份 PNG——附的那份跟它
   自己的版型對不起來：手機 mock 疊到投影幕上、把三道彈幕中間那道整個蓋掉，
   social 版則掉了下方那條彈幕；稿上明講「匯出時彈幕停格於最佳位置」。
   ~~**還差一步只有你能做**：social preview 要在 GitHub repo Settings ›
   Social preview 手動上傳 `docs/social-preview.png`。~~
   **2026-09-08 使用者已上傳，這條結案。**
6. **設計稿 11 的四個「檔案在、但沒人引用」缺口**——2026-09-07 跟設計專案
   （`DesignSync list_files`，43 個資產、18 份文件，與手上的 zip 逐檔相同）
   對過之後補上。這四個的共同特徵是**畫面看起來正常**，所以先前都沒被發現：
   - `server/static/favicon.svg`（＝稿的 `app-icon-small.svg`，圖形逐字相同）
     躺在 repo 裡，但三個模板只連 `.ico`；錯誤頁連 `.ico` 都沒有。
   - 登入頁的**鎖定態**（P2-4）用 `<h1 class="hud-hero-title">Danmu Fire</h1>`
     排活字，不是跟正常登入卡同一張字標 SVG。
   - 桌面端首次啟動精靈放 app icon 64px；設計稿 04 · S1 的稿面與設計稿 11 的
     「字標只出現四處」清單都是**高 40 的字標**。
   - Admin 骨架載入態掛著 `.hud-corners-auto` 角標與全大寫
     「DANMU · ADMIN · BOOT」——設計稿 14 的文案規則明訂「不用全大寫」。

   順帶把因此變成零消費者的 `.hud-corners-auto` / `.hud-label` /
   `.hud-hero-title` CSS（137 行）刪掉。

   **資產本身不用動**：43 個逐一比對過，設計專案那份大很多是因為帶了 C2PA
   內容憑證（一大塊 base64 provenance metadata），去掉之後圖形等價；SVG 只差
   在 `<g transform>` 分組寫法與 template icon 的 `#000000` vs `#0f172a`
   （template 圖示的顏色會被系統遮罩忽略）。專案裡的 `app-icon.png`、
   `favicon-32.png`、`win/app-icon-win.svg` 不在設計稿 11 的「已輸出素材」
   清單上，不是漏接。

7. **設計稿 14 §2 的 `.ui-status`**——2026-09-08 **已實作**。元件照稿：32 高、
   8px 色點（`::before`，不進無障礙樹）、13px/600、四態（success／warning／
   danger／idle）。兩個呼叫端都換掉：登入頁底部「● 伺服器運作中 · v5.4.0」
   （順帶修掉它違反設計稿 03「等寬字只用在網址／識別碼」的 mono 字體）與訊息流
   底部「● 自動捲動」。`.hud-dot` / `.admin-lf-v4__statedot` /
   `.admin-lf-v4__statelabel` / `.admin-login-chip` 的規則一併刪除。

   **一個刻意的偏離**：字色不是純 `--color-ink-*`，而是再往
   `--color-text-primary` 混 15%。ink 層是對著「沒有淡底的卡片」調的，淺色臂
   只剩約 0.4 餘裕，疊上稿上那層 14% 同色薄膜就掉到 4.25／4.33，低於設計稿 03
   自己訂的「12–13px ≥ 4.5:1」。混完六個組合最低 4.89，而且兩臂方向自動正確。
   淡底維持稿上的 14%。

   **沒有動 `.hud-status-dot`**：那是 `hud-inspector-head`／效果卡標題前的裝飾
   點，不是狀態 chip，稿上 §2 沒點名。若之後要收，它會是獨立一項。

8. **訊息流卡底與 DENSITY**——2026-09-08 **已照稿**。設計稿 06 §3 寫的是卡底
   **一行**「自動捲動中 · 滑鼠停在訊息上可隱藏或封鎖」，而且把 DENSITY 切換
   放進移除清單。原本卡底是 `0 TOTAL · 0.0 MSG/S` 兩個等寬計數器（寫死在 JS
   的英文、全大寫、等寬字），數量在卡頭分段控制上已經有了。DENSITY 標籤與兩顆
   chip、`data-density` 屬性與相關 CSS 一併移除，速率統計（`_rateBuf` /
   `_trackRate` / `_currentRate`）也跟著退場。

9. **`@keyframes hud-pulse` 的重複定義**——2026-09-08 **已刪**。style.css 自己
   一份（只做 opacity）、hud.css 併入時帶進來一份（多了 transform: scale），
   後者勝出所以前者從來沒生效過。刪的是不可觸及的那份，零行為變化。

10. **`.hud-status-dot`**——2026-09-08 **已收**，但**不是**改成 `.ui-status`：
    五個用法沒有一個是狀態 chip。四個是純裝飾的發光脈動點（篩選面板標題 ×2、
    動畫效果卡、效果檢視器），依設計稿 14 §3 與 03「原則 4」移除——檢視器那顆
    連狀態都是冗餘的，選中效果的同一瞬間標題從「—」變成效果名、兩顆按鈕也解鎖，
    只有點是「顏色單獨承載意義」。第五個是篩選規則列的**啟用開關**，改名成
    `.admin-filter-toggle-dot`（它是控制項不是指示器）。

    **收的過程中實測抓到一個既有 bug**：那顆開關只能停用、再也點不回來。色點
    包在 `<label>` 裡，本來點它就會由瀏覽器切換 checkbox 並觸發 `change`；但
    程式另外掛了一個 click 分支手動 `cb.checked = !cb.checked`，而事件處理器跑
    在預設行為**之前**，label 隨後又把它翻回去。視覺更新也只寫在 click 分支裡，
    所以用鍵盤切換的人看到的色點永遠是舊的。已修：刪掉 click 分支、視覺搬進
    `change`。

11. **文案總掃（2026-09-08）· 圖示符號、全大寫、Desktop 詞彙**——**全數完成**
    （含訊息流 checkbox 與批次列的移除）。

    設計稿 14 的文案規則有三條可機器檢查：不加圖示符號、不用全大寫、Desktop /
    Overlay → 顯示層。三條各自掃完之後才發現規模比原本估的大得多。

    - **圖示符號**：i18n 48 個 key（`▶ 開始顯示`、`↻ 測試`、`⏭ 下一題`…）＋
      寫死在 JS 的 13 處。`previewBtn` 的 ▶ 還跟 `admin-sounds.js` 自己加的 ▶
      疊成兩個。**判準不是「按鈕不能有圖示」**——設計稿 06 自己就用 `⌕`（搜尋）
      與 `☰`（抽屜）當純圖示鈕，中間寬度還要把側欄收成 64px 圖示欄。禁的是
      「圖示黏在文字標籤上」。第一版判準沒排除圖示槽，把 17 個合格寫法誤判成
      違規；先看標記結構再判。
    - **全大寫**：一開始估 43 筆（確認框副標），實掃 **80＋**。多數同時沒進
      i18n，四國語系都吃不到，所以這輪是「改文案」與「補 i18n」一起做的
      （新增 ~145 個 key × 4 語）。觀眾看得到的那幾面優先：大螢幕靜默畫面整片
      `ATTEMPT 7 / ∞ · BACKOFF 30s · EXPONENTIAL`、投票結果的 `★ POLL CLOSED`、
      觀眾頁的 `BLOCKED · 已被禁言`、離線橫幅的 `OFFLINE · 1 MIN 00 SEC`。
      審核佇列的 `LOW/MED/HIGH` 是 `sev.toUpperCase()` **產生**的，改不掉除非
      改程式。剩下最大一類是**「中文 · ENGLISH」雙語標籤**（原始碼註解自己稱
      它 "the sitewide EN·中文"、"deferred"）——設計稿 04 §「文字」那一列寫的
      就是「SERVER · CONFIGURE 等雙語 → 單語白話」，一律砍英文那半。
    - **Desktop 詞彙**：31 個 zh key ＋ en/ja/ko。兩個指的是 Electron **應用程式
      本身**（`wsAuthDesc`、`helpDrawerWidgetsTip1`），不是投出去那層，另外處理。
      `server/services/webhook.py` 有**第二份**寫死的事件標籤清單（還在講
      "Overlay"），前端 i18n 掃乾淨也不會動到它——是實際開瀏覽器比對 DOM 與
      `i18next.t()` 不一致才發現的。about 頁 changelog 裡的 "Desktop" 是歷史
      commit 訊息，刻意不改。

    **三個判準教訓**（都寫進了測試的註解）：

    1. `>文字<` 這種正則會漏掉**文字中間夾標記**的（`PENDING · <span>0</span>`）。
       改用 AST 抽樣板字串。
    2. 原始碼裡的 `\u21bb` 是**逸出序列**不是那個字元，字面比對抓不到。
    3. AST 也有盲點：字串串接、函式參數（`_renderField("FOREGROUND", …)`）、
       `toUpperCase()` 產生的，都要**實際開瀏覽器走 DOM** 才看得到。

    **訊息流的 checkbox 與批次列**——2026-09-08 **已移除**（設計稿 06 §3 的移除
    清單有 checkbox，14 §2 也寫「刪 checkbox／fp／density 欄」；fp 與 density
    先前已收，checkbox 沒有，因為它是用 `cb.type = "checkbox"` 建的，
    grep `type="checkbox"` 掃不到）。

    帳面上的代價是「勾選多則 → 批次封鎖裝置」，但**實測發現那個流程本來就
    不可能生效**：`api.py` 在轉發前 `data.pop("fingerprint")`（不讓公開的
    overlay WS 收到指紋——這本身是對的），而 admin 的 `live_feed_buffer` 吃的是
    同一個已經被 pop 過的 dict，於是 `d.fingerprint` 永遠是空字串。
    `bulkBlock` 的 `if (!t.data.fingerprint) continue;` 會逐筆跳過、一則都不封；
    per-row 的「封鎖此人」按鈕 gate 在同一個條件上，**從來沒有渲染出來過**。
    實測證據：帶 `fingerprint` 打 `/fire`，攔 `/ws` 封包裡完全沒有那個欄位，
    admin 那一列只有「封鎖關鍵字」一顆按鈕。

    **底層那個 bug 已於同日修好**（見下）。批次能力**不補回來**——設計稿沒有
    要求，而且 per-row 的「封鎖指紋」現在真的能用了。

16. **指紋分流修正（2026-09-08）**——原本 `api.py` 用 `data.pop("fingerprint")`
    一次滿足「公開 overlay 不能看到指紋」，但位置太早：admin 專用的
    `live_feed_buffer` 吃的是同一個已經被 pop 過的 dict。

    收口改放在 `ws_queue.enqueue_message`——那是**所有**送往 overlay 的 payload
    的唯一出口（七個呼叫端：widgets／poll／replay／scheduler／messaging，其中
    四個完全繞過 `messaging`，所以「多傳一個參數」的做法顧不到）。剝的是
    `fingerprint` 與 `clientIp`，而且是複製出來剝——`_raw_forward` 的順序是
    「先 enqueue、再餵 live-feed buffer」，就地刪等於沒修。

    **一起壞掉、一起修好的有六件事**（都 gate 在同一個 `d.fingerprint` 上）：
    每列的「封鎖指紋」按鈕、鍵盤 `B`、左滑封鎖、封鎖後把同指紋的列標成
    `is-muted`、用指紋搜尋、以及（反過來）設計稿 06 §3 要求移除的 `fp:` 識別碼
    ——那一行先前是空的，指紋一補上就自己冒回來了，所以順手把它明確關掉。

    **為什麼單元測試沒抓到**：`test_forward_appends_danmu_to_live_feed_buffer`
    一直是綠的，它直接餵 `forward_to_ws_server` 一個還帶著指紋的 dict——
    跳過了真正的呼叫端。補了一支走 `/fire` 的端到端測試釘住另一半。

    實跑驗證：帶指紋打 `/fire` → 訊息流出現「封鎖指紋」、公開 WS frame 沒有
    該欄位；按下去 → 同指紋再送回 400 `Fingerprint blocked`、別的指紋照常
    200；該列變 `is-muted`；搜尋框輸入指紋前綴能精準篩出那列。

12. **實跑 Electron app 才發現的（2026-09-08，用 computer use）**

    先前桌面端只測「用 http 伺服 `index.html` / `child.html` 的靜態頁」，沒跑過
    真的 app。實際跑起來、連上 server、開顯示層之後：

    - **已修 · 入場 QR 畫面字標與網址疊在一起**。`child.css` 有一條裸的
      `img { position: absolute }`（給 track-manager 生出來的貼圖／表情定位用，
      比入場畫面早存在），而 `.overlay-idle-wordmark` 沒宣告 position，於是字標
      被絕對定位、壓在「掃 QR 或打開 / <網址>」上面。修法是
      `#overlay-idle img { position: static }`——範圍寫在畫面上而不是只修字標。
      彈幕本身仍照舊絕對定位（實跑確認過彈幕還會飛）。
    - **待辦 · 主視窗還有三處英文**：伺服器列的 `✗ Connection failed`、
      螢幕選擇器旁的 `DISPLAY · 偵測到 1 個螢幕`、編輯模式的 `Test connection`
      按鈕。設計稿 14 的狀態文案表給的是「已連線 · 連線中… · 無法連線 ·
      顯示中 · 未開啟」，P1 那顆按鈕是「測試連線」。Toast 是中文的沒問題。
      （`LINK START` 是稿上明列保留的，不算。）
    - **測試環境備忘**：app 只走 `wss://`，純 http 的開發 server 連不上。不用
      Docker 的做法是本機架一個 TLS 終結代理（純 TCP 轉發，HTTP 與 WS upgrade
      都原樣通過）指到 Flask 的 port，app 的 `certificate-error` handler 會接受
      自簽憑證。

13. **2026-09-08 實測全掃的結果**（27 條 admin 路由 ＋ 三條端到端流程）

    **已修**：`#/notifications`（保留給舊書籤的路由）冷啟動時只顯示空白頁。
    `_bind()` 立刻檢查一次 hash，但那時 `_mountBell()` 還沒建出面板，
    `openPanel()` 的 `if (!panel) return` **靜默**放棄。載入後再切 hash 反而正常。
    修法：抽出 `_openIfHashRequests()`，掛載成功後補呼叫一次。

    **走通的流程**（真瀏覽器 ＋ 真 Electron ＋ TLS 代理）：
    - 觀眾頁送彈幕 → server → 大螢幕，實際看到它飛過去。
    - 建投票 → 開始 → 推到大螢幕 → 觀眾投票 → admin 票數 +1 → 大螢幕卡片即時
      更新成「1 票 / 100%」。
    - admin 上傳表情 → 觀眾頁面板立刻出現且圖片載得到（測試資料已刪）。
    - 備份下載（完整備份回傳合法 gzip）。**還原沒測**——那會覆蓋執行期資料。

    **不是 bug（查證後排除）**：`setup` / `onboarding-tour` 是彈窗型路由；
    `session-detail` 沒帶 id 時顯示「請從場次列表選擇」是正確空狀態。

    > ~~觀眾頁投票分頁預設關閉（`?poll=1` 或 config 才開）是刻意的功能開關。~~
    > **2026-09-08 推翻**：那條 config 分支讀的是
    > `window.DANMU_CONFIG.viewer.pollEnabled`，而 `DANMU_CONFIG` 全 repo
    > **只在 `admin.html` 定義一處**，觀眾頁根本沒有這個物件——所以它不是
    > 「預設關閉」，是**任何觀眾都打不開**。而設計稿 05 · V6 與對照表寫的是
    > 「有投票時才浮出分段控制並帶紅點」。gate 已整條移除（commit ded7107）。
    > **教訓**：判一個開關是「刻意」之前，要先確認它真的**開得起來**。

    **新發現的待辦**：
    - **投票是以「送出選項代號當彈幕」實作的**（`api.py` 註解寫明
      `# Vote still passes through as normal danmu`）。後果實測到兩個：投票期間
      大螢幕會被 A/B 洗版；**過濾規則會擋掉投票**——開發環境有一條
      `keyword: a → block`，於是選項 A 完全投不出去，而觀眾看到的是內部訊息
      「Keyword match: 'a'」（違反設計稿 14 的錯誤三段式）。設計稿 05 · V6 寫的
      是投票頁自己有一顆 52px「送出投票」主按鈕，跟現況不同。
      **2026-09-08 已處理**：新增 `POST /poll/vote`，觀眾點選項就直接送出，
      完全不產生彈幕，於是過濾規則／限流／字數檢查都不再管一件不是留言的事。
      舊的打字投票路徑保留（習慣打字的人不受影響），那些票在大螢幕上被調暗
      （`display_layer.dim_poll_votes`，可關、透明度可調）。
      **跟設計稿的一處刻意分歧**：稿子畫的是「選了再按 52px 送出鍵」，
      使用者指定改成「按下選項即送出」（2026-09-08：「投票的送出方式應該是
      直接按選項送出」）。
    - 投票頁按鈕帶圖示符號：「開始這一輪 ▶」「＋ 新增題目」「⏭ 下一題」
      「◾ 結束投票」，設計稿 14 明訂按鈕不加 `▶ ■ ＋` 這類。
    - 控制台同樣有「■ 結束場次」「◐ 顯示控制 →」「▣ 顯示層」。

14. **刻意留著的規格殘留**——`--font-brand: "Unbounded"` 與
   `server/static/fonts/unbounded-800-latin.woff2`（1788 B）目前沒有任何
   `@font-face` 或消費者。原因是設計稿 11 要求字標「文字外框化後交付」，四個
   位置都用 SVG，活字字體根本用不到。token 是設計稿 12 明列的，先留著。

15. **設計稿 16/17 的收尾**——安全區（OS1）與淺底描邊（OS2）2026-09-07
   **已接上**：Admin › 顯示層 › 投影畫面 兩列（安全區 `0% / 5% / 8%` 分段、
   描邊 `自動／總是描邊／不描邊` 分段），值存進 `display_layer.json`。
   **顯示層那半 2026-08 就寫好了，但沒有任何東西會去設它**——`child.css`
   的 `--overlay-safe` 永遠是寫死的 5%，`stage-luminance.js` 的 `setForced`
   沒有呼叫端。現在兩個顯示層都吃：OBS 的 `overlay.js` 與 Electron 的
   `renderer-modules/display-layer.js`，彈幕軌道也會把顯示範圍再往內縮一圈
   （刻意推出畫面下方的用法不拉回來）。初始值由 server 在 client 註冊完成
   當下用 WS 補推——`child.html` 的 CSP 是 `connect-src ws: wss:`，overlay
   自己 fetch `/display-layer` 出不去。
   可及性（17）2026-09-07 補了四件本來是**缺的**（不是「怪怪的」，是真的
   用不了）：
   - **焦點環**：全站唯一一種樣式（`2px var(--focus)` ／ offset 3px），
     新增 `--focus: light-dark(#0284c7, #ffffff)`。深色臂刻意是白色——原本
     style.css 那條全域規則用 `--color-primary`，深色面板上是藍底藍框，
     等於沒畫。當時放 `shared/hud.css`，2026-09-07 步驟 2 把 hud.css 併掉後
     改放 `shared/tokens.css`：那是五個表面唯一都載得到的檔案（overlay.html
     的載入順序是 tokens → overlay，根本沒有 style.css）。
   - **`<html lang>`**：admin 與 overlay 的靜態標記原本寫死 `lang="en"`
     （稿上直接把這件事標成 bug），`child.html` 連 lang 都沒有。改成由
     `ServerI18n` 統一寫 BCP47（`zh` → `zh-Hant`；單一個 zh 沒說是正體還是
     簡體），兩支 i18n 產生器都改，viewer 那段重複的 inline 補丁刪掉。
   - **訊息流朗讀**：原本是 `role="list"` 且**沒有任何 aria-live**——螢幕
     閱讀器完全不會唸出新彈幕。改成 `role="log" aria-live="polite"
     aria-relevant="additions"`，暫停捲動時切 `off`（使用者刻意讓畫面停住，
     背景還在唸就是在吵他）。
   - **Windows 高對比**：全 repo 原本只有一句註解提到 forced-colors，
     `@media (forced-colors: active)` 區塊**零個**。補上卡片邊框、按鈕
     `ButtonText` 邊框、選中反白、狀態色點 `forced-color-adjust: none`
     （刻意挑過的清單——稿上明講訊息流的顏色點只是裝飾，不在其中）。
   - **色盲替代**：觀眾頁的顏色從六顆 28px 純色圓點改成「色點＋名稱」磚
     （選中加 ✓ 與 2px 粗框、`aria-label="顏色：紫"`），順序照稿
     白／黃／天藍／綠／紅／紫，命中區 ≥44。**與稿 16 · VP1 的「6 欄 grid、
     aspect-ratio:1」衝突時取 17**：色覺不同的人看到六個一樣的灰點是更嚴重
     的問題。
   **2026-09-08 自測了能自測的部分**（瀏覽器可驗的六項）：

   - **12–13px 對比 ≥ 4.5**：深色 44 個全過（最低 4.74）；淺色抓到
     `.viewer-nameask-ok` 只有 4.10（白字在 sky-600 上），改用
     `--color-primary-hover`（淺臂是 sky-700）後 5.93 / 深色 6.82。
     **不動 `--color-accent` 本身**——它有 15 個使用者。
   - **焦點環**：`viewer-v2.css` 五處 `outline: none` 把 tokens.css 的全站
     `:focus-visible` 一起壓掉，鍵盤走到送出框時 outline/border/box-shadow
     全是 none。檔尾補一條還回來，並加測試釘住。
   - **手機命中區 ≥ 44**：四個不到（暱稱連結只有 39×18）。用透明 `::after`
     覆蓋層擴大、不動視覺尺寸，只在 `pointer: coarse` 生效；頁尾另補下內距，
     否則覆蓋層會被 `overflow: hidden` 裁掉。四個都到 44。
   - 通過的：色票都有 `aria-label`、`<html lang>` 是 `zh-Hant`、
     reduce-motion 的 blanket 規則有進到觀眾頁、30 個可聚焦元素都有可讀名稱。

   **兩個量測教訓**（都讓我一度誤報）：
   1. **`transition: color` 進行中取樣會讀到中間值**。`.site-footer-link`
      因此被報成 2.45，等過渡結束實際是 **7.24**。量顏色前要先等 transition。
   2. **`.focus()` 不觸發 `:focus-visible`**（那是正確設計）。用它測焦點環會
      得到「每一個都沒有」這種太整齊的假結果，要用真的鍵盤事件。

   **剩下只有真機做得到的**：Windows 高對比（`forced-colors`）、系統層級 DPI
   125/150/200%、NVDA。macOS VoiceOver 技術上可用字幕面板比對，但那是逐句
   截圖、慢且易漏；改成稽核無障礙樹與焦點順序涵蓋了同一批問題。

## 契約測試

`server/tests/test_design_contract.py`（2026-09-06）把上面這些規格中
**可機器檢查的部分**釘住：關鍵文案在不在、退場的元素有沒有真的退場。

它不是像素比對。它擋的是這種回歸：有人為了修別的東西，把「大螢幕未開」
改回「彈幕牆 · 未開啟」，或把 KPI sparkline 加回控制台，而沒有人發現。

設計契約變了就更新那份清單，並在 commit 說明為什麼——不要為了讓它變綠
而繞過去。

17. **資安與效能稽核（2026-09-08）**——稿外的工程項目，記在這裡是因為它改動了
    觀眾頁與 admin 的載入方式，之後做設計改動時會踩到。

    **稽核沒有發現可被外部利用的漏洞**：197 條路由的 authz/CSRF 覆蓋、10 個
    上傳點（全都用比 `secure_filename` 更嚴格的正規白名單，貼圖還做 libmagic
    MIME 嗅探）、入站 webhook 強制 HMAC、CSP 有 `script-src-attr 'none'`、
    pip-audit 與 npm audit 都 0 筆。

    **觀眾頁 `/fire` 從 1392 KB 降到 76 KB gzipped（18.2x）**，四個來源：

    - 觀眾頁本來載 **admin 的 `style.css`**（482 KB），實測只 match 到那 2,789
      條規則裡的 **21 條**。改載 `viewer-base.css`（15 KB），由
      `server/scripts/build-viewer-css.mjs` 生成。**`style.css` 沒有動**——搬家
      會改變 admin 的層疊順序，所以是生成一份子集而不是抽出來。
    - i18n 四語全載 670 KB → runtime 6.2 KB ＋ 每語言一支。伺服器依 cookie /
      `Accept-Language` 挑一支，模板吃 `{{ i18n_lang }}`。
    - nginx 開 gzip（原本兩份設定都沒開）。
    - 輪詢綁區段可見性（`AdminUtils.pollWhileVisible`），66 → 39 requests/min。

    **改設計時要記得的三件事**：
    1. **動 `style.css` 之後要重生 `viewer-base.css`**（`npm run build:viewer-css`，
       CI 有守）。忘了的話觀眾頁會缺樣式，而且只在特定狀態才看得出來。
    2. **新增 i18n key 之後四支 bundle 都要重生**，不是只有 `i18n.js`
       （那支現在只剩 runtime）。
    3. 新的 admin 模組如果要輪詢，用 `AdminUtils.pollWhileVisible`，不要直接
       `setInterval` —— 模組是全部一起載入的。

    另外修掉一個實測發現的缺陷：`AdminUtils.escapeHtml` 用 `textNode → innerHTML`，
    **不跳脫引號**，36 個 admin 檔都指向它。當下被 CSP 擋住不可利用，但
    `value="${escapeHtml(x)}"` 這種寫法可以被撐開長出額外屬性。已改成
    `replace(/[&<>"']/g, …)`。
