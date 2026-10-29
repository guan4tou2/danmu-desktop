# Danmu Fire — Admin 操作摩擦審查與修補

**日期：** 2026-10-29（三輪）
**Commit（審查基準）：** `28eed75`
**範圍：** `server/` 管理後台；第二輪含 Viewer 離線回饋與主題頁
**方法：** 源碼審查 → 逐條修補 → 單元測試與契約測試驗證

---

## 一、核心判斷

管理台的摩擦不在視覺，在兩件事：

1. **IA 按「功能」分區，但主持人的工作是「時間線」。** 場前、場中、場後各自只有 1–2 個高頻任務，卻要在一條 13 列、3 區、最多 3 層的結構裡找。
2. **狀態掛在 DOM 上，不在資料上。** 訊息流每來一則就整表重建，於是 hover、滾動位置、鍵盤焦點一起被清掉——**流量越大，操作越不可用**，而流量大正是這個產品存在的場合。

第 2 點是這輪最重要的發現：它不是「不夠好看」，是「在真實使用條件下功能會失效」。

---

## 二、修補總覽

| 編號 | 問題 | 狀態 |
|---|---|---|
| F1 | 訊息流每則訊息全量重建 200 列 | ✅ 已修補 |
| F2 | 單則訊息無法只撤下 | ✅ 已修補（新增 recall） |
| F3 | 訊息詳情抽屜沒有入口 | ✅ 已修補 |
| F4 | 審核佇列預設分頁永遠空、規則 UI 無 review | ✅ 已修補 |
| F5 | 兩個快捷規則 chip 送 `mask` 必 400 | ✅ 已修補 |
| F6 | 側欄「系統」組沒有「系統」列 | ✅ 已修補 |
| F7 | 手機導覽狀態說謊、小工具不可達 | ✅ 已修補 |
| F8 | 手機滑動「靜音」與「封禁」同一個行為 | ✅ 已修補 |
| F9 | 即時保存無草稿與前置校驗 | ⏸ 未處理（見 §五） |
| F10 | toast 無去重／上限／暫停 | ✅ 已修補 |
| F11 | 規則表 375px 無重排 | ✅ 已修補 |
| F12 | 全域沒有 undo | ⏸ 未處理（見 §五） |

---

## 三、逐條修補

### F1 · 訊息流改增量渲染

**問題：** `addEntry()` 每則訊息呼叫 `renderList()`，後者 `textContent = ""` 後重建全部 200 列。輪詢一次拿回 N 則就是 N 次全量重建。`moveFocus()` 依賴 DOM 節點，於是 **J/K 焦點每則訊息斷一次**。

**修補（`admin-live-feed.js`）：**
- 新增 `_insertRow()`：只 `insertBefore` 一列；捲到頂時不量 `scrollHeight`（避免批次時 N 次強制重排）。
- 新增 `_trimRows()`：超過 200 則時只移除對應的那幾列 DOM，不重建。
- `renderList()` 保留給篩選／搜尋／恢復暫停，並加上 `_focusedRowId()` / `_restoreRowFocus()`——重建後焦點回到原本那一列。
- 使用者往下讀時，插入後補回 `scrollHeight` 差值並累計 `_unseen`，畫面不會被推走。
- 跳轉 pill 以前只會被顯示、按了沒反應（沒有綁 listener）；現在綁上點擊與捲動偵測。
- `init()` 的 MutationObserver 掛載成功後 `disconnect()`——原本整場都在為一件早已成立的事觸發 `getElementById`。
- 移除 `updateCountBadge()`：它一直在找 `#liveFeedCount`，而該節點自 chips 上線後就不存在，等於每則訊息都在更新 null。

**驗證：** `tests-js/admin-live-feed.test.js`（7 項）釘住「舊列是同一個 DOM 節點」「焦點存活」「200 則上限」。

### F2 · 新增單則撤回

**問題：** 處理一句不該出現的話只有兩條路——永久封鎖發話者，或清空整屏。

**修補：**
- `services/messaging.py`：live-feed 快照帶上 `message_id`（原本只為 render_ack 存在，沒進 admin 的資料流）。
- `routes/admin/overlay.py`：新增 `POST /admin/overlay/recall`，廣播 `{"type":"recall","message_id":…}`，寫 audit，id 截斷 64 字元。
- `overlay.js` / `renderer-modules/overlay-ws.js`：渲染時把 `data-message-id` 掛在 wrapper 上；收到 recall 只淡出並移除那一個節點，找不到是 no-op。
- `renderer-modules/track-manager.js`：`showdanmu()` 增加 `messageId` 參數（桌面端與 Web 同一契約）。
- `admin-live-feed.js`：列上新增「撤下」，無確認框——它不刪資料、不動黑名單，加確認等於把「一鍵撤下」變回「三步撤下」。

**驗證：** `tests/test_overlay_recall.py`（7 項）涵蓋廣播內容、缺 id、空白 id、未登入、缺 CSRF、重送、超長截斷。

### F3 · 接線訊息詳情抽屜

**問題：** `admin-message-drawer.js` 匯出 `AdminMessageDrawer.open`，全庫零個呼叫點。它提供的「同指紋歷史」與「回覆到顯示層」等於不存在。

**修補：**
- `createEntryEl()`：列可點擊、可按 Enter 開啟抽屜（`is-clickable` 補上 cursor）。
- `admin-shortcuts.js`：抽屜或確認框開著時，`_feedActive()` 回 false——否則 j/k 會同時翻抽屜與移動列表焦點。
- `admin-message-drawer.js`：在回覆框打字時 j/k 不再翻頁；開啟時記住來源焦點、關閉後還原。
- 抽屜內四顆按鈕收成三顆誠實的：封鎖這個人 / 撤下這則 / 加入黑名單（原本「靜音指紋」與「封禁」打同一支 API，「Mask」其實是把整句加進黑名單）。

### F4 · 審核佇列不再空轉

**修補：**
- `admin-filters.js`：`ACTIONS` 加入 `review`；下拉新增「送審」；動作 chip 與測試面板都吃 i18n 與 review 分支（原本命中 review 會顯示成「No match (pass)」）。
- `admin-tabs.js`：moderation 預設分頁 `queue` → `blacklist`。佇列留著，但不再當門面。

### F5 · 快捷規則 chip 不再 400

`action: "mask"` → `"review"`。全大寫與重複字元是「可疑但不確定」，送人看比直接封掉合理，也讓佇列有內容。

### F6 · 側欄補上「系統」列

- `admin.js`：系統組第一列新增 `data-route="system"`（原本四個分頁裡只有 security 有入口）。
- `ADMIN_ROUTES.security` 移除，改由 `_routeAliases` 指到 `{nav:"system", tab:"security"}`——同一頁不再有兩種外殼（一個有分頁列、一個沒有）。
- `admin-command-palette.js`：補一條 `security` 設定項，否則 ⌘K 搜不到「安全」（palette 靠 `ADMIN_ROUTES[slug].title` 解析，條目沒了整筆被濾掉）。

### F7 · 手機導覽不再說謊

- `_activeFromHash()`：先過 `ROUTE_ALIAS` 再比對；未知路由回空字串而不是 `"live"`（誠實優於好看）。
- OVERFLOW 補上 `widgets`（原本手機完全到不了），`security` 換成 `system`。
- CSS：抽屜 `max-height: calc(100dvh - 56px)` + `overflow-y: auto`——10 列在矮手機上會把登出擠出畫面。

### F8 · 滑動動作誠實化

三顆（遮罩／靜音／封禁，兩種行為）→ 兩顆（撤下／封禁）。

### F10 · toast 收斂

重寫 `toast.js`：同句 2.5 秒內去重並累加「×N」、同時最多 4 則、hover／focus 暫停倒數、顏色走主題 token（`var(--color-surface, …)`，淺深色都跟得上）、子節點不再 `role="alert"`（外層已是 `aria-live` 容器，會被唸兩次）。

**驗證：** `tests-js/toast.test.js`（6 項）。

### F11 · 規則表窄螢幕重排

欄寬從 inline style 移到 `.admin-flt-v4__grid`，≤600px 時 pattern 獨佔一列、其餘縮成第二列、表頭隱藏。

---

## 四、驗證

| 項目 | 結果 |
|---|---|
| `node --check`（所有改動的 JS） | 通過 |
| `npm run build:i18n` | 4 語各 2993 鍵 |
| `npm run build:admin-js` | 67 檔 → 805 KB |
| Jest | **43 passed / 6 suites**（新增 13 項） |
| pytest（排除 browser E2E） | **1655 passed / 5 skipped** |

**順手修掉的既有紅燈（與本輪無關，但擋住綠燈）：**
- `test_admin_kicker_keys_are_gone`：`viewerPaletteEyebrow` 違反「不要 Eyebrow/Kicker 命名」的設計契約。改名為 `viewerPaletteLabel`，文案不動（四個語言的值都保留）。
- `test_a11y_focus_lang_and_live_region`：色票樣板化後 `data-i18n-aria="swatchAriaWhite"` 變成插值，斷言釘的是字面值。改釘真正的契約（`{{ preset.aria_key }}` + `DEFAULT_COLOR_PRESETS` 提供該鍵）。

**未執行：** `tests/test_browser_isolated.py` 與 `test_browser_*.py` 共 6 項需要起一份可連線的服務與 Playwright 瀏覽器，本輪環境沒有跑。

**同步更新的契約測試：** `test_admin_sidebar_ia.py` 的 `EXPECTED_NAV_ORDER`、retired slug 清單、`PROMOTED_TO_FIRST_CLASS`、v2-page owner 清單。這些是刻意改的，不是為了讓測試變綠。

---

## 五、明確未處理

**F9 · 即時保存沒有草稿與前置校驗。** 開關與數值是對的（場中要即時），但 regex 規則、Webhook URL 這類手工輸入仍是「輸錯就寫進去」。要解需要「編輯中」狀態與 server-side 預檢，屬於另一個工作流，不適合塞進這批修補。

**F12 · 全域沒有 undo。** 目前只有 3 個模組用 `HudConfirm`，其餘刪除類操作既無確認也無撤銷。對「場中誤觸」這個情境，撤銷比確認有用——但需要一個共用的 action log，範圍比本輪大。

**前三輪當時尚未做視覺驗收（已於 §十二補驗）。** 本輪的結論與修補都以程式碼與測試為準，**沒有在瀏覽器裡看過實際畫面**。F1 的捲動補償、F11 的 375px 重排、F10 的 toast 在深色主題下的對比，這三項建議優先做一次真實螢幕檢查。

---

# 第二輪：操作結果與系統行為不一致（功能語意）

針對外部審查指出的「畫面說成功、伺服器沒事」類問題逐條核實。**四條指控全部屬實**，但其中一條的重要前提錯了，處理方式因此不同。

## 六、核實結果與處理

### G1 · Dashboard 假審核操作 — 屬實，但**是死代碼**

外部審查說 `admin-dashboard.js` 的遮罩／隱藏只改 class 就 toast 成功、封鎖指紋打的是 `/admin/blacklist/add`（文字關鍵字黑名單，收 `fp:<fp>` 等於沒封鎖任何人）——**代碼確實如此**。

但核實發現：`data-msg-action` 按鈕**從來沒有被任何渲染路徑產生過**（全庫零 emit 點），`_bindMessageRowActions` 也從未被呼叫。訊息列的快速處理早就改由訊息流自己接手。所以正確處理不是「修好它」，是**刪掉**：連同孤立的 `.admin-dash-msg-row` 樣式（91 行主塊＋HIG 補丁）一起移除，讓下一個接手的人不會以為 Dashboard 有審核功能。

### G2 · 設定精靈的假開關 — 屬實，三個開關全是裝飾

核實結果比審查說的更糟：
- 「敏感字過濾：啟用內建敏感字詞庫」——**伺服器根本沒有內建字詞庫**；
- 「速率限制：每分鐘 20 則」——`FIRE_RATE_LIMIT` 預設本來就是 20/60，開關無事可做；
- 「指紋追蹤」——`fingerprint_tracker` 沒有開關。

三個都只寫 `_state.moderationRules`，完成頁卻顯示「N / M 啟用」、toast「設定精靈完成」。

**處理：** 開關步驟改成**指引列**——三列說明各自指向審核頁的真實位置（速率限制／封鎖字／被封鎖的觀眾），完成頁拿掉「N / M 啟用」、改放前往審核與顯示層的連結；文案明說「首次設定不該出現按了完成卻什麼都沒寫進伺服器的開關」。`_renderToggleStep`、`_toggleList`、孤立樣式一併移除。

### G3 · 投票編輯器未串接的控件 — 屬實，比審查多找到一個

`PollQuestionSchema` 只收 `text / options / image_url / time_limit_seconds`，且 `unknown = EXCLUDE`。核實：
- **允許多選**（`q.multi`）：只寫本機，建立請求不送——審查屬實；
- **裁切比例**（`q.crop`）：同上，且佇列 meta 還會顯示「含圖片 · 16:9」——審查屬實；
- **選項圖片**（審查說用 placeholder 標記）：核實後確認按鈕只把 `opt.img` 設成字串 `"placeholder"`，**沒有上傳管道**——比審查說的更空。

**處理：** 三者從正式介面移除（審查自己也建議「補齊完整流程，或暫時不在正式介面提供」），連同處理程序、佇列 meta 的 crop 顯示、孤立樣式。註解寫明回歸條件：schema → poll_service → viewer 投票 UI → 計票，整條串起來才回來。題目圖片**保留**——它的上傳 API 是真的（`/admin/poll/<id>/upload-image/<qid>`）。

### G4 · Viewer 離線「已排隊」文案 — 屬實，且方向相反的謊言更重

核實：`main.js` 四處硬編中文「已排隊 N 則訊息」，計算的是**輸入框裡的草稿**——「排隊」在這個產品裡有明確意義（已進待顯示佇列），把沒送出的草稿說成已排隊，觀眾會以為伺服器已收到。審查屬實。

更重的一條審查沒抓到：橫幅標題寫「離線中 · **連線後將自動送出**」、卡片寫「連線恢復後自動送出」——**自動送出根本沒有實作**。承諾了不存在的行為。

**處理：** 文案全面改成誠實版並補上 i18n（原本硬編中文，其他語言直接看到 key 名）：「未送出草稿 {n} 則」「連線恢復後**不會**自動送出，由你自己決定」。審查建議不做自動送出，照辦——文案與行為現在一致。

### G5 · 觀眾頁主題的兩套儲存 — 屬實

核實：`viewerThemePageNote` 原文寫「僅影響觀眾進入 /fire 時看到的頁面外觀」，但顏色／Logo／字型只寫 `localStorage`（檔頭註明 backend persistence pending）；真正寫入 Server 的只有「強制主題與語言」卡。

**處理：** 後端持久化是另一個 feature（需要 server 設定 + viewer 拉取），本輪不實作；先把頁面說明改成如實披露：「管理端預覽，尚未寫入伺服器」，並指明唯一會到達觀眾端的是強制主題卡。

---

## 七、第二輪驗證

| 項目 | 結果 |
|---|---|
| `node --check`（全部改動 JS） | 通過 |
| CSS | 括號平衡；`admin-dash-msg-row` / `admin-setup-toggle` / `admin-poll-crop` / `opt-img-toggle` / `foot-check` 全數歸零（僅存說明註解） |
| i18n | 四語 2999 鍵；`pollBuilderHasImage` 補齊 |
| Jest | 43 passed / 6 suites |
| pytest（排除 browser E2E） | **1655 passed / 5 skipped** |

**測試基建修正：** `test_i18n_keys_resolve.py` 加入 `admin.bundle.js` 到 skip 清單。原因：esbuild 這次把 admin-dashboard 的 `<option>` 輔助函式命名成 `t`，`opt("continue", …)` 被測試的 `\bt\(` regex 誤判成 `t("continue", …)`，多出兩個假「缺 key」。bundle 是原始檔的一對一壓縮，掃原始檔就夠；壓縮碼的識別字不可信。

**未處理（與第一輪相同理由）：** Viewer 聚合輪詢端點（審查的工作包 C）——仍是獨立的效能專案，需先確認 webpack 切片與測試策略，不塞進這批。Setup Wizard 的 Readiness 化與 ModerationActions 共用層已在第三輪（第八節）完成。

**事故記錄：** 本輪一次腳本化 CSS 編輯因沙箱寫入語義把 `style.css` 截斷成 0 byte。已從 git HEAD 重建並重放今天兩輪的全部 CSS 變更（腳本帶斷言、單次原子寫入），逐項驗證通過。教訓：大檔案的批次編輯一律先備份、用斷言腳本、寫入後立即驗證尺寸。

---

# 第三輪：共用層與設定精靈就緒檢查（架構收斂）

承接第二輪，把「同一次操作在兩處各有實作」收斂成單一來源，並讓設定精靈的伺服器步驟顯示真實的就緒狀態而非快照。

## 八、修補內容

### H1 · ModerationActions 共用層 — 新建

第二輪刪掉 Dashboard 的假審核後，撤回／封鎖仍分散在兩處：訊息流（`admin-live-feed.js` 的 `blockAction`/`recallAction`）與訊息抽屜（`admin-message-drawer.js` 的 `_banFingerprint`/`_recallMessage`/`_blacklistKeyword`）各自呼叫不同端點、各自處理 CSRF 與 toast。

新建 `admin-moderation-actions.js`，掛在 `window.AdminModeration`：
- `block(type, value, opts)` → `POST /admin/live/block`（訊息流的封鎖與抽屜的「封鎖這個人」走同一支）；
- `recall(messageId)` → `POST /admin/overlay/recall`（與 F2 端點一致）；
- `banFingerprint(fp, opts)` → `POST /admin/modbans`（帶 duration，與既有封禁契約一致）。

三處呼叫點改為直接呼叫共用層；`manifest.json` 在 `admin-hud-modal.js` 之後註冊新模組（抽屜開啟時共用層已載入）。

**驗證：** `tests-js/admin-moderation-actions.test.js`（mock `csrfFetch`）釘住三個方法打到正確端點、參數與 toast 文案；`admin-live-feed.test.js` 同步載入共用模組。

### H2 · 設定精靈就緒檢查 — 真實資料

原本伺服器步驟是 `_renderShellField` 的 `serverName` 快照（使用者填什麼就顯示什麼），與「這台機器現在能不能跑顯示層」無關。

改成 `_fetchReadiness()` 呼叫 `/overlay_status`，`_renderServerStep` 渲染四列狀態與指引：
- 伺服器：目前管理端網址；
- 顯示層：`/overlay_status` 的 `overlay_count`，失敗時標未知；
- 主題：目前選擇；
- 觀眾測試：前往觀眾設定的手動測試指引，沒有自動探測觀眾連線。

失敗列顯示原因與前往對應設定的連結；`_renderShellField`、`serverName` 快照與相關樣式移除。新增 8 個 i18n 鍵 `setupWizardReady*`（四語）。

---

## 九、第三輪驗證

| 項目 | 結果 |
|---|---|
| `node --check`（全部改動 JS） | 通過 |
| i18n | 四語各 2999 鍵（含 `setupWizardReady*` 8 鍵） |
| Jest | 50 passed / 7 suites（新增 `admin-moderation-actions.test.js`） |
| pytest（排除 browser E2E） | 1655 passed / 5 skipped |

**同步更新：** `test_design_contract.py` / `test_admin_sidebar_ia.py` / `test_i18n_keys_resolve.py` 將 bundle 納入 `_SKIP_FILES`；`setupWizardStepServer` 鍵值復原為「伺服器網址」（就緒標題另用 `setupWizardReadyServer`，不受影響）。

---

## 十、整輪結論

三輪累計：12 項摩擦修補（F1–F11 + H1/H2）、4 條功能語意指控核實並處理（G1–G5）、1 個共用層新建、1 個死代碼區塊移除。所有修補均以單元與契約測試釘住，未引入新紅燈（除 browser E2E 仍須真實環境）。

**前三輪當時待驗收（已於 §十二補驗）：** F1 捲動補償、F11 375px 重排、F10 深色主題 toast 對比、G5 主題預覽頁披露說明實際呈現。程式碼與測試全綠，但本輪未在瀏覽器看過實際畫面。


## 十一、接續實測（2026-10-29）

本次使用 `server/.venv` 與專案 Jest 重跑，不能將先前綠燈視為瀏覽器驗收完成。

- Jest：7 suites、50 tests 通過。
- Python（不含 browser wrapper）：1628 passed、6 skipped；27 項因本機 socket 權限在 setup 出錯。取得本機服務權限後，單獨重跑四個相關模組，33 passed。
- Chromium 安裝於暫存目錄後實跑六個 browser 模組：3 個通過、3 個失敗。
- Admin：45 passed、8 failed。失敗涉及空場次訊息流可見性、審核預設頁改動後的佇列請求預期，以及六種尺寸／主題組合的訊息列未出現。
- Admin routes：85 passed、2 failed；live 與 moderation 落地頁未找到可見 data-tpl。
- P3 pages：13 passed、1 skipped、3 failed；精靈仍斷言已移除的 server-name／裝飾開關，以及 moderation 預設 queue。

**此階段狀態（後續已接續處理，見 §十二）：** 尚須區分過時測試與產品問題，並補完四項瀏覽器驗收。


## 十二、瀏覽器回歸修補與驗收

本次實際修補兩個操作問題：

1. 訊息流在首次掛載後關閉 MutationObserver，但管理台接著重建 settings-grid，導致訊息流消失。改用既有 `admin-panel-rendered` 生命週期事件重新掛載、重新綁定控制項並恢復資料；不保留永久 DOM observer。新增容器替換後保留訊息、繼續接收訊息的回歸測試。
2. 訊息流手動補償 scrollTop 與 Chromium 原生 scroll anchoring 重複，造成約一列的跳動。對訊息流設定 `overflow-anchor: none`，由既有補償統一維持閱讀位置。

補上封鎖字頁面的 `data-tpl="B"`，使預設審核頁符合現有版型契約。瀏覽器測試同步改為明確進入 queue 驗證輪詢、以 attached 狀態檢查刻意收合的空訊息流，並驗證精靈目前提供的四列狀態、三個真實設定連結與 blacklist 預設分頁。

補充瀏覽器驗收：

- F1：80 則訊息捲動後插入第 81 則，原列相對容器位置維持在 2px 內；點擊跳轉按鈕回到頂端。
- F11：375px 下長 regex pattern 獨占首列，其餘控制項在下一列且均未超出螢幕。
- F10：375px／1280px 深色 toast 的文字對比至少 4.5:1，提示完整位於視窗內。
- G5：375px／1280px 主題預覽頁可見「尚未寫入伺服器」限制說明。
- 訊息流六種尺寸／主題組合通過無重疊檢查，另擷取 375px 淺深色截圖並檢視。

本次 Jest：51 tests／7 suites 通過；導覽、設計與翻譯契約：140 tests 通過；完整隔離瀏覽器 wrapper：6 個模組全部通過（257.63 秒）；四項新增瀏覽器案例另跑：4 passed。375px 淺深色訊息流截圖案例：2 passed。

F9 草稿／預檢、F12 全域 undo 與 Viewer 聚合輪詢維持原有獨立工作範圍。
