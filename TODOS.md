# TODOS

> 格式：依元件分組，每項標 `**Priority:**`（P0 最高 → P4），完成項移至底部 `## Completed` 並附版本。

## Open

> 2026-11-14 盤點：對照程式碼逐項查證後仍然開放的項目。`docs/plans/`、
> `docs/design-v2-backlog.md`、`.design-sync/specs/README.md` 裡其餘未勾選項
> 多數已實作，只是文件沒更新（見最後一節）。

### 設計方向（2026-11-14 拍板）

- **合併與摺疊（後續批次）** — 目標是 Linear 官網／Apple 備忘錄等級的乾淨。
  owner 拍板的做法：以合併與摺疊為主，只移除本來就沒作用的東西，真的功能
  一律保留；偏好「加一個選項把分散的功能併成一處」。一頁只留一個主動作，
  頁面看不懂就改版面、不補說明文字。每批附改前改後的控制項對照。
  第一批（場中控制）已於 5.6.0 完成。剩下的批次只能循序做（都會改同一份
  bundle 與 locale）：
  1. 側欄收斂：安全、備份、擴充併進系統。
  2. 封鎖規則合一：封鎖字＋臨時規則＋規則庫 → 一個清單，每條選期限、
     命中方式、動作。
  3. 彈幕樣式合一：顯示層、主題、觀眾頁三處的樣式設定 → 一頁，每個屬性
     一個「觀眾可改」開關。
  4. 發送上限四組 → 一組數值加「對象」選項；匯出與備份 → 一個匯出頁。
  5. 觀眾頁首屏：輸入框與送出鈕目前在視覺權重上排第 6。
  **Priority:** P1
- **清混語** — logo／品牌字樣用英文，其餘介面文字一律走 i18n、同一畫面不混語。
  「EN · 中文」雙語標籤與混在中文裡的大寫英文 token 全部清掉（推翻 2026-08-09
  的 monolabel 決議）。**Priority:** P1
- **Extensions 頁三張「即將支援」卡**（Discord Bridge／OBS Plugin／Bookmarklet，
  `admin-extensions.js`）— 沒有實作的空殼，減法的首批候選。**Priority:** P1

### UI/UX 稽核待修（2026-11-14 實機稽核）

- **入場 QR 與公開網址在本機自架時是 localhost** — 投影出去的待機畫面寫
  「連入 localhost:4000」，觀眾掃了連不進來（VPS 部署不受影響）。由 server
  決定公開網址或區網 IP，偵測到 localhost 就警示。**Priority:** P1
- **觀眾選的語言重新整理後被蓋回瀏覽器語言**，切換後部分字樣不跟著換
  （`i18n:changed` 事件沒有人發出）。**Priority:** P2
- **觀眾送出成功的回饋出現三次且互相矛盾**，第一則就顯示「送太快了」。
  **Priority:** P2
- **投票快速範本產生空選項** — 範本寫 `o.text`、編輯器讀 `o.label`。
  **Priority:** P2
- **訊息流的時間戳是頁面收到的時間**，不是訊息送出的時間。**Priority:** P2
- **紀錄頁的場次與主持人開的場次是兩套**，進行中的場次顯示 0 則。合併前
  要先查清楚兩套各存了什麼。**Priority:** P2
- **後台對觀眾頁的描述與實際不符**（字數上限、語言切換、字級選項）。
  **Priority:** P2
- **通知鈴常駐 99+**，內容全是自己的登入事件。**Priority:** P2
- **控制台的數字** — 「已進行」只在載入時算一次、「訊息」是近 24 小時總數
  而非本場次；頂欄的「顯示層 · 開」不反映暫停狀態。**Priority:** P3
- **其餘 8 處「複製」在非安全連線下沒有反應** — 5.6.0 修了 4 處並抽出
  `AdminUtils.copyText`；剩 about／api-tokens／emojis／stickers／poll-builder／
  security／ratelimit／widgets。**Priority:** P3
- **七個確認框的等級待決** — 重新產生 Fire token、重設連線密碼、移除黑名單
  關鍵字、刪除草稿題目、子集化字型等，目前預設焦點在確認鍵。**Priority:** P3
- **訊息流的來源標籤被樣式轉成全大寫**（`SLIDO`）；品牌名應照原樣顯示。
  **Priority:** P4
- 完整清單 25 項見稽核報告（未入庫）；上面只列尚未處理且已確認的。

### Slido 整合

- **需審核的提問未以真實活動驗證** — 核准時的事件與時間欄位仍是從 Slido
  網頁程式碼推得的。正式活動若開審核，使用前先測一次。**Priority:** P2
- **長時間運作未驗證** — Chrome 回收閒置的背景程式後的狀態還原只有單元
  測試。**Priority:** P2
- **按讚、回覆、刪除的串流事件**是否會被誤判成新提問，未驗證。
  **Priority:** P3
- **備份檔內含明文 Fire token** — token 現在能略過 captcha 與限流，敏感度
  比以前高。**Priority:** P3

### Server

- **觀眾頁主題後端持久化**（顏色／Logo／字型）— 目前只存 localStorage，換裝置
  就沒了；UI 有如實標示。**Priority:** P2
- **手動輸入的預檢（F9）** — regex 規則、Webhook URL 輸錯就直接寫入，沒有草稿
  或 server 端 dry-run。**Priority:** P2
- **瀏覽器測試的時序問題治本** — 目前靠 retry 與等待；5.6.0 修掉其中一個
  根因（色票無效狀態重繪後消失），其餘尚未逐一追。**Priority:** P2
- **外掛上傳開關** — `.py` 外掛以 importlib 直接載入、沒有隔離，admin 登入等同
  server 程式執行權。是否加預設關閉的環境變數待 owner 決定。**Priority:** P2
- **全域 undo（F12）** — 只有個別模組有撤銷，沒有共用 action log。注意
  `docs/FEATURES.md` 把設定與規則的 undo 列為 non-feature，兩者衝突，要先決定
  做不做。**Priority:** P3
- **其餘 `except Exception` 稽核** — 14 處直接 `pass` 的已於 5.5.0 補上 log；
  其餘九十幾處有內容的還沒逐一看過。**Priority:** P3
- **手寫 atomic write 遷到 `JsonState`** — `managers/settings.py`、
  `services/fire_token.py`、`services/filter_engine.py`、`services/api_tokens.py`、
  `config.py`。**Priority:** P3
- **覆蓋率門檻** — CI 有量但沒設 `fail_under`；以現值起算、只准升。
  **Priority:** P3
- **觀眾頁聚合輪詢端點** — overlay 狀態與投票狀態各自輪詢；獨立的效能專案。
  **Priority:** P3
- **顯示頁「內容限制」卡的行內編輯器** — 目前唯讀，等 `SettingUpdateSchema`
  擴充（`admin-display.js` 的 BE TODO）。**Priority:** P4

### Admin 前端

- **拆分 `admin.js` 的 router／shell** — 1,989 行，比當初計畫時還長。
  **Priority:** P3
- **IA v7 收尾** — S3 版型模板、S4 清路由別名。**Priority:** P3
- **`admin.bundle.js` 依路由切片**（825 KB、68 個模組整包載入）與
  **`style.css` 拆檔**（17,438 行）— 減法做完再量一次，可能自然縮小。
  **Priority:** P4

### 發行與驗證

- **Windows／Linux 實機驗收矩陣**（#197）— 三平台都有打包，只有 Mac 做過完整
  實機流程。**Priority:** P2
- **deepmerge 忽略到期檢查** — `osv-scanner.toml` 的例外 2027-02-14 到期，到期
  前確認 jest 上游是否已換掉它。**Priority:** P3
- Mac 的 Developer ID 簽署與公證（#194）**決定不做**，維持 ad-hoc 簽章與手動
  更新。

### 文件

- **標為歷史或更新** — `docs/engineering-plan-2026-05-04.md`、
  `docs/backend-prep-2026-05-04.md`（描述的缺口都已補上）、
  `docs/color-system-v2-proposal.md`（Phase 1／2 已合併，仍寫待決策）、
  `docs/release-readiness-5.1.0.md`、`docs/IMPROVEMENTS.md`；
  `docs/FEATURES.md` 停在 v5.0.0。**Priority:** P3
- **過期註解** — `admin-message-drawer.js:241`（monolabel 決議待決）、
  `track-manager.js:30`（maxTracks 未接線）。**Priority:** P4

## Completed

### Slido 提問變彈幕 — done 2026-11-14（v5.6.0）
查證後確認 server 端直接取 Slido 不可行（無公開 API、讀提問要走 Slido 自家
的參與者登入、代碼查詢有 captcha），改為強化既有的 Chrome 擴充功能並內建
下載。新舊提問以「開頁那一刻的 Slido 伺服器時間」為固定起算點判斷；匿名
提問不帶識別碼。三輪獨立審查修掉非 ASCII token 造成 500、來源標頭可偽造、
無效 token 耗光觀眾限流額度等問題。以真實活動錄到的格式做成測試資料，並
在真的 Chrome 上端到端驗證（提問 → 擴充功能 → 伺服器 → 顯示端畫面）。

### 合併與摺疊第一批：場中控制 — done 2026-11-14（v5.6.0）
顯示層頁的暫停與清空移到首屏，約 70 個外觀控制項原樣收進收合區；控制台、
顯示層頁、快速鍵、指令面板共用同一份顯示控制；危險確認框預設焦點在取消。
兩輪瀏覽器獨立驗證。排除生成物淨減約 330 行。路由冒煙測試的量測改為把
「已渲染但預設收合」的內容算進去，之後摺疊其他頁不會再誤報空白頁。

### Server JavaScript 單元測試環境 — done 2026-10-15（v5.4.1）
獨立 Jest/jsdom harness、鎖定的 server/package-lock.json 與 CI test:js。
13 案涵蓋 HudConfirm 取消／焦點循環／textarea Enter／堆疊與文字安全，
以及 breadcrumb alias／分頁／翻譯。另以真實瀏覽器驗證鍵盤原生操作，
修正 Enter 在「取消」或 textarea 上誤觸確認的缺陷。

### 磨光三項（P4）— done 2026-08-09
① F-108：效果庫 YAML 側欄 RELOAD/EDIT 初始 disabled、首次選卡解鎖
（雙態實測）。② 分段雙軌拍板「刻意取捨」：.admin-ui-tab=資料濾鏡、
.admin-tabs-strip=區塊導航——合併會讓濾資料與導頁面長一樣，決議落在
style.css 註解。③ 36 處 admin-ui-page-title div→h2＋UA margin 歸零
（style.css 蓋、hud.css 免 rebuild）；現況 dedup 讓可見標題由頂欄 h1
承擔、hidden 頭不進 AX tree——h2 是正確語意與未來保險，非即時 SR
增益（誠實記錄）。順帶挖出 D-4 盲點：\u 轉義中文 41 處（所有 CJK
grep 皆不可見）一併遷移；decode 重寫吃掉 regex 反斜線的事故已逐位元
復原並與 HEAD 比對。


### 「EN · 中文」雙語 monolabel pattern — done 2026-08-09（決策＋執行）
拍板：zh 半 t() 化（caps EN token 保留為設計語言）——與 D-4 期間 kicker/
行內字串的既行規則歸一，zh 視覺零變化、en/ja/ko 拼布歸零；「雙語對＝
品牌」否決（識別在 caps token 不在混語）。32 keys ×4 語、28 處接線
（backup ×9、poll-deepdive ×4、fonts ×4、notifications ×4、
message-drawer ×3、extensions ×3、session-detail ×3、assets/sounds ×1）。


### D-4：admin 模組硬編中文全數遷移 — done 2026-08-09（31 批）
~40 模組、~1,900 keys ×4 語（zh/en/ja/ko）分 31 批收官，全數 CI 綠＋
部署驗證。配方與教訓封存在各批 commit 訊息（36b5ec2 起）：fragment-first
派工＋三道獨立驗證（四語齊全／key 雙向吻合／zh 對 HEAD 逐字）、lazy
labelKey（頂層常數陷阱）、{var} 插值、live span 當變數、後端契約字面
（「匿名」/action 白名單/theme slug）比對保留顯示 t() 化、瀏覽器測試
locale 釘 zh-TW 前置解鎖（3e2715a）。**槓桿最高一擊**：側欄 25 個
adminNav* 譯文在 locale 躺了整個專案週期——i18n 的 data-i18n 掃描跑在
shell 注入前，一行冪等 updateUI() 補掃了案（3289283）。刻意保留類：
ROUTE_META 活 fallback、語言自名、EN·中文 monolabel（P3 待決）、
CHANGELOG 版本史、開發標記。遺留小工：後端 EVENT_CATALOG 補 ja/ko、
toLocaleString("zh-TW") 統一。


### viewer 頁 browser test 套件 — done 2026-07-29（a119f7d）
`test_browser_viewer.py` 11 案例：sendbar 離線/滿載狀態列、投票「✓ 已投出」、
重連 toast、blur-on-send、色票 aria-label i18n；建套件當下順帶修掉它抓到的
三個 bug（#160）。已納入 `test_browser_isolated.py` 隔離跑法。

### 軟鍵盤 toast/橫幅定位碰撞 — done 2026-07-29
`main.js` 的 visualViewport handler 把 keyboardOffset 發布成
`--viewer-kb-offset`；重連 toast 與離線橫幅 `bottom` 吃該變數（admin 無人
設定、fallback 0 = 原行為）。

### 載入態換 AdminSkeletons（D-6 尾項）— done 2026-07-29
AdminSkeletons 新增 `html()` 序列化入口（模板字串脈絡用）；
scheduler / admin-display ×2 / webhooks ×2 / stickers 六處「載入中…」
全數換成骨架。C 類 row/inline 級佔位維持刻意保留。


### 空狀態/載入態歸一（D-6 批次一＋二）— done 2026-07-28/29（v5.4.0 後）
17 處自造空狀態全數收斂到共用 AdminEmpty（modbans/webhooks/widgets 順帶
獲得首次使用 CTA）、48 條死 CSS 清除、polls 的 [PLACEHOLDER] chip 與
配額表歸零。C 類 row/inline 級佔位為刻意保留。

### 間距刻度二選一並寫進 lint（D-1）— done 2026-07-28（v5.4.0 後）
拍板 4px 格為唯一刻度；六個 CSS 檔 939 個 4n+2/奇數值以 half-down snap；
0/1/2px 為髮絲例外（`--space-05` 入 token）；`check-css-tokens.mjs` 新增
offGrid ratchet、九檔歸零起算。golden master 驗證零非預期差異。

### 色彩命名空間殘項二拍（D-2 續）— done 2026-07-28（v5.4.0 後）
拍板 admin-bg/raised/line 統一到 hud 側；`--admin-*` 七顆全數成為純 alias，
深色階梯收斂為 #050912 → #0c1424 → #182239 單一套。

### 頁首 shell 與按鈕階層收回原語（D-5/D-7）— done 2026-07-28（v5.4.0 後）
ratelimit 頁首 clone 收回原語、fonts/viewer-theme 補標準頁首、八頁補 note、
filters/fonts 刪除鈕進 danger 階層、onboarding 與 display 的私有按鈕階層
拆除。`admin-empty__btn` CTA 尺寸為刻意層級，記錄為保留。

### 合併三套色彩 token 命名空間（D-2 主體）— done 2026-07-28（v5.4.0 後）
拍板：次要文字統一 slate-400（muted := secondary，回歸 muted 的
decorative-only 設計意圖）、面板底統一 #0c1424（admin-panel := hud-bg1）；
`--admin-text/text-strong/text-dim` 降為 color 層純 alias；`.admin-body`
的反向 remap 拆除。殘項見上方 P3 條目。
