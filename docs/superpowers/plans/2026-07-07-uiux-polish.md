# UIUX Polish 三批次改善 Implementation Plan

> **For agentic workers:** 本計畫由 Workflow 多 agent 執行（Phase 1 三軌平行 → Phase 2 主題/token 工程 → Phase 3 驗證）。每個 Task 以 checkbox 追蹤。執行者看不到原始對話，本文件即唯一事實來源。

**Goal:** 落實 2026-07-07 UIUX 全面稽核的三批改善（desktop Electron + server admin/viewer/overlay + 設計系統），不改任何產品功能語意，不發版。

**Architecture:** 依「檔案領域不重疊」分三條平行軌（A=Electron、B=viewer/overlay、C=admin），完成後才進入會橫跨多檔的 D（主題統一）與 E（token 紀律 + CI lint），最後全套測試 + fresh-agent 驗證 + 視覺 smoke。

**Tech Stack:** Electron + webpack、Flask + vanilla JS SPA、tokens.css 設計系統、pytest（1061）+ jest（272）+ playwright browser tests。

## Global Constraints（每個 Task 隱含適用）

- **分支**：所有工作在 `claude/uiux-polish` 分支上進行；每個 Task 完成即 commit（訊息格式 `fix(uiux): <track><n> <一句話>`）。若遇 `index.lock` 衝突，等 2 秒重試。
- **改任何檔前先 Read**；文中行號是稽核時的參考值，**以實際檔案內容為準**，對不上就先重新定位。
- **`renderer.bundle.js` 被 `index.html`（主視窗）與 `child.html`（overlay）兩個 HTML 載入**——改 renderer-modules 要確認兩邊都不壞。
- **webpack 執行期 `__dirname` = `dist/`**，路徑用 `"../index.html"` 形式。
- **不改版本號**（`danmu-desktop/package.json` 與 `server/config.py:APP_VERSION` 都不動）。
- 改到 `server/**/*.py` 時，回報前必跑：`cd server && PYTHONPATH=.. uv run black --line-length 100 <檔> && uv run isort --profile black --line-length 100 <檔> && uv run python -m flake8 --max-line-length=100 --extend-ignore=E203,W503 <檔>`。
- **既有測試對 UI 字串/selector 敏感**：改任何 user-facing 文案或 class/id 前，先 `grep -r "<字串>" server/tests danmu-desktop/tests`，同 commit 內更新測試斷言。
- 顏色一律 sky 系（primary `#38bdf8`）；不得引入 violet/purple；新樣式一律用 `var(--...)` token，不寫裸 hex/px 字級。
- 產品決策（不得違反）：viewer poll **永不**顯示計數/百分比；admin-mobile 已永久刪除；overlay 詞彙用 OVERLAY ON/OFF（非 LIVE/STANDBY）。
- 測試指令：
  - Electron：`cd danmu-desktop && npx jest` 與 `npx webpack`
  - Server 全套：`cd server && PYTHONPATH=.. uv run python -m pytest tests/ --ignore=tests/test_browser_isolated.py -q`（browser 模組在全套會故意跳過，不是回歸）
  - Browser 測試單跑：`cd server && PYTHONPATH=.. uv run python -m pytest tests/test_browser_admin.py -q`（先 `PYTHONPATH=.. uv run python -m playwright install chromium`）

---

## Phase 1 — Track A：Desktop（Electron）

**Files（只准動這些領域）：** `danmu-desktop/index.html`、`danmu-desktop/child.html`、`danmu-desktop/styles.css`、`danmu-desktop/child.css`、`danmu-desktop/renderer-modules/*`、`danmu-desktop/main-modules/*`、`danmu-desktop/tests/*`

### Task A1：鍵盤焦點樣式
- [ ] `styles.css`（參考 :1069-1073）：`[data-client-action="edit-conn"]` 等 `role="button"` 元素目前 `outline:none` 無 focus 樣式。加 `:focus-visible { box-shadow: 0 0 0 3px var(--glow-primary, rgba(56,189,248,.4)); border-radius: inherit; }`。`.client-nav-btn` 同樣補 `:focus-visible`。
- [ ] 驗收：Tab 巡覽時每個可互動元素有可見焦點環。`npx jest` 通過。Commit。

### Task A2：連線表單即時驗證回饋
- [ ] `renderer-modules/ws-manager.js`（參考 :46-72）與 `renderer-modules/validation.js`：現況只在提交時 `showToast()`。在 input `blur` 時執行同一驗證，無效時加 class `input-invalid`、有效加 `input-valid`；`styles.css` 定義 `.input-invalid { border-color: var(--color-error, #ef4444); }`、`.input-valid { border-color: var(--color-success, #34d399); }`。
- [ ] 為驗證函式加/改 jest 測試（無效 host/port → invalid class 邏輯）。`npx jest` 通過。Commit。

### Task A3：測試連線按鈕狀態 + fail 色語義
- [ ] `renderer-modules/conn-test.js`（參考 :38-48）：測試進行中 `disabled=true` + 按鈕文字加 spinner（沿用既有 ⟳ 字元即可），結束後恢復。
- [ ] `styles.css`（參考 :1143-1147）：`[data-state="fail"]` 由 amber 改 `var(--color-error, #ef4444)`；amber 保留給 warning 狀態。
- [ ] 失敗訊息人話化：`conn-test.js:6-14` 已有 `_ERROR_LABELS`，確保所有失敗路徑（DNS/TLS/拒絕/逾時）都經過它輸出，不再裸吐 error code。
- [ ] `npx jest` 通過。Commit。

### Task A4：空狀態引導與技術文案
- [ ] `renderer-modules/settings.js`（參考 :11-19）+ `index.html`（參考 :154）：host 未設定時顯示「未設定 · 請輸入 server 位址」而非「—」。
- [ ] `index.html`（參考 :183）：說明文字「測試：one-shot WSS handshake 驗證…」改為「驗證伺服器連線，不會啟動 Desktop」。
- [ ] Commit。

### Task A5：Token 卡體驗
- [ ] `index.html`（參考 :142-215）：WebSocket Token 的 `<details>` 改預設 `open`；token 已設定時在卡標題旁顯示「✓ 已設定」badge（讀取既有 token 狀態來源，樣式用 `var(--color-success)`）。
- [ ] `npx jest` 通過。Commit。

### Task A6：overlay 計數器對比
- [ ] `child.css`（參考 :30-45）：`#danmu-counter` 文字 `rgba(255,255,255,0.45)` → `rgba(255,255,255,0.75)`。Commit。

### Task A7：桌面慣例小修
- [ ] `index.html`（參考 :45-48）：titlebar 狀態圓點旁的 `.client-titlebar-status-text` 恆顯（不再只有 dot）。
- [ ] ESC 關閉：連線編輯模式與 Window Picker modal 監聽 `keydown` ESC 觸發既有取消/關閉路徑（在對應 renderer module 加，不新建全域 listener 汙染）。
- [ ] 舊 Start/Stop hidden 按鈕（`index.html` 參考 :274-340）：先 `grep -rn "<其 id>" danmu-desktop/` 確認 renderer/main 模組與測試無引用後移除；**有任何引用就不移，改留註記回報**。
- [ ] `npx jest` + `npx webpack` 通過。Commit。

### Task A8：視窗記憶位置尺寸
- [ ] `main-modules/window-manager.js`（參考 :87-109）：主視窗 `close` 前把 bounds 存到 `app.getPath("userData")` 下 JSON（如 `window-state.json`），啟動時讀回並套用（需驗證螢幕仍存在，否則 fallback 預設 800x900）。
- [ ] jest 補一個 bounds 存讀的單元測試（mock fs）。`npx jest` 通過。Commit。

---

## Phase 1 — Track B：Viewer / Overlay（server 前台）

**Files：** `server/templates/index.html`、`server/templates/overlay.html`、`server/static/js/main.js`、`server/static/css/viewer-v2.css`、`server/tests/*`（僅為同步斷言）

### Task B1：手機軟鍵盤遮擋輸入列
- [ ] `main.js` + `viewer-v2.css`：sendbar（`index.html` 參考 :521-531）在鍵盤彈出時被遮。用 `window.visualViewport` 的 `resize` 事件把 sendbar 定位到可視視口底部（`position: fixed; bottom: 0` + `transform: translateY(-(innerHeight - visualViewport.height - visualViewport.offsetTop))` 或等效作法）；無 `visualViewport` 的瀏覽器維持現狀（feature-detect，不 polyfill）。
- [ ] 驗收：程式碼路徑有 feature-detect；桌面行為完全不變。Commit。

### Task B2：sticky header 裁切與未連線徽章佔位（實測截圖確認的破版）
- [ ] 375px 下捲動時「暱稱」等區塊標籤被 sticky header 蓋住：給各區塊標題/label 加 `scroll-margin-top`（= header 高度），或調整 header 下緣漸層讓其不蓋內容。
- [ ] 「Desktop 未連線 · 無法送出」徽章目前直接壓在輸入框上蓋住 placeholder（`main.js` 參考 :1589-1594 渲染處）：改為 sendbar **上方**獨立一列狀態列（`.sendbar-status-row`），輸入框永遠完整可見。
- [ ] 驗收：375px 視口下 label 不被裁切、placeholder 完整可見。同步更新受影響測試斷言。Commit。

### Task B3：觀眾端離線橫幅與重連狀態
- [ ] `main.js`（參考 :1909-2042）：WS/輪詢斷線時顯示頁頂橫幅「連線中斷，正在重新連線…」，恢復後顯示 2 秒「已重新連線」後自動消失。沿用既有 banner 機制，不新造元件。
- [ ] Commit。

### Task B4：觀眾語言文案 + 訊息丟棄回饋
- [ ] 「Desktop 未連線 · 無法送出」→「主持端尚未開啟 · 訊息暫時無法送出」；「Overlay 未連線」同理改觀眾視角文案（`main.js` 參考 :1589-1594）。
- [ ] dropped / queue_full（`main.js` 參考 :1836-1843）：由一閃 toast 改為 sendbar 狀態列顯示「訊息未送出：現場訊息量已滿，請稍後再試」，持續至下次輸入。
- [ ] 先 `grep -rn "未連線\|無法送出" server/tests/` 同步所有斷言。相關 pytest 子集通過並貼輸出。Commit。

### Task B5：送出後收鍵盤
- [ ] `main.js`（參考 :1773-1775）：送出成功清空輸入後，僅在觸控裝置（`matchMedia("(pointer: coarse)")`）呼叫 `blur()` 收鍵盤；桌面保留焦點供連發。Commit。

### Task B6：平板斷點
- [ ] `viewer-v2.css`（參考 :1211-1226）：字級/透明度/速度三欄 grid 的折行斷點由 599px 提到 768px。Commit。

### Task B7：色票可及性
- [ ] `index.html`（參考 :281-286）：每個色票 button 加 `aria-label`（白/天藍/琥珀/綠/紅/黃）與 `title`。Commit。

### Task B8：poll 投票確認感（不顯示數字！）
- [ ] `main.js`（參考 :677-709）：投票後選中的選項立即顯示選中態（邊框 + ✓）與 inline 文字「已投出」，不等事後感謝卡。**絕不顯示票數/百分比**（產品鐵則）。Commit。

### Task B9：overlay 配對 QR 放大
- [ ] `overlay.html`（參考 :59-68）：QR 180px 固定 → 點擊 QR 開全螢幕放大浮層（再點關閉，支援 ESC）；配對碼佔位符「··-··-··」明確指定 `font-family: var(--font-mono, ui-monospace, monospace)`。
- [ ] 相關 browser 測試若斷言 overlay DOM，同步更新。Commit。

---

## Phase 1 — Track C：Admin 後台

**Files：** `server/templates/admin.html`、`server/static/js/admin.js`、`server/static/js/admin-*.js`、`server/static/css/style.css`、`server/static/i18n/*`（若 i18n 字典在此）、`server/tests/*`（僅為同步斷言）

### Task C1：onboarding tour 標題對比（實測確認）
- [ ] tour 卡片標題（如「即時控制台」）目前淺灰疊白底。找到 tour 卡片樣式（`admin-onboarding.js` 或 style.css 內 tour 區塊），標題色改 `var(--admin-text, #0f172a)` 等主文字色，對比 ≥ 4.5:1。Commit。

### Task C2：HUD modal focus trap + ESC + 焦點歸還
- [ ] `admin-hud-modal.js`（參考 :109）：開啟時記錄 `document.activeElement`；Tab/Shift+Tab 循環侷限於 modal 內；ESC 觸發取消；關閉後焦點還給原元素。`aria-labelledby` 指向的 id 確保每個實例都存在（不存在就直接用 `aria-label`）。
- [ ] browser 測試若有 modal 互動流程，跑該子集貼輸出。Commit。

### Task C3：麵包屑
- [ ] `admin.js`（參考 :785-787 applyRoute 更新 topbar 處）：topbar 在 title 上方 kicker 位置渲染「分區 › 頁面（› 分頁）」路徑，資料來源就是側欄分組定義（參考 :655-751）與當前 route/tab。純顯示，不做可點擊連結（第一版）。
- [ ] Commit。

### Task C4：topbar 收斂 + DESKTOP·ON 狀態化（P3-7）
- [ ] `admin.js`（參考 :826-863）：右側叢集（搜尋 / 語言選單 / DESKTOP·ON / 登出）收成單列、垂直置中、統一間距 `var(--space-3)`；語言選單寬度收到內容寬。
- [ ] 「DESKTOP · ON」是狀態不是按鈕：移除 button 樣式（hover/cursor:pointer），改 status chip 樣式（同 viewer 的連線晶片語彙：圓點 + 文字）。若它其實綁了點擊行為，保留行為但視覺改 chip + `cursor:default` 例外回報。
- [ ] Commit。

### Task C5：路由別名 registry 統一
- [ ] `admin.js`（參考 :94-157）：`_bareLegacyRedirects` 與 `_routeAliases` 合併成單一 `ROUTE_ALIASES` 表（保留兩者全部映射，行為不變——URL 保留 alias slug、點擊的側欄鈕維持高亮，這是既有設計）。重導時 console.info 一行記錄（方便日後淘汰統計），不打擾使用者。
- [ ] 這是重構：前後跑 `pytest tests/test_browser_admin.py`（單跑）結果一致。Commit。

### Task C6：載入 skeleton 統一
- [ ] `admin-skeletons.js` 已存在：套用到 Themes、Emoji、Sounds 等目前無載入狀態的清單頁（與 Effects 的 spinner 行為對齊，統一改用 skeleton）。Commit。

### Task C7：空狀態補全
- [ ] `admin-empty-states.js`（參考 :33-80）：為 Modqueue、Filters（及掃描其他會露 `[PLACEHOLDER]` 的頁）補命名空狀態（icon + 一句說明 + 主要動作按鈕）。Commit。

### Task C8：i18n 補齊
- [ ] `admin.js`（參考 :296-298）`validateNumberRange` 的英文錯誤訊息改走 `ServerI18n.t()`；`admin-display.js`（參考 :198-205）「管理端控制」卡說明加 i18n key；側欄/topbar kicker 硬寫的中英混排字串加 key。zh/en 兩份字典都補。
- [ ] Commit。

### Task C9：異質色與內嵌樣式
- [ ] `style.css`（參考 :3441）`.hud-effect-card-preview.is-color { color:#ec4899 }` → 改 `var(--color-primary)` 系或既有語義 token（此處語意是「彩色預覽」示意，用 primary 即可；不引入新色）。
- [ ] `admin.js`（參考 :503-537）stats-chart 柱體 `style="height:${pct}%"` 保留（動態值），但 `style="color:var(--admin-text-dim)"` 之類靜態內嵌樣式改 CSS class。
- [ ] Commit。

### Task C10：KPI tile 直排斷行（實測確認）
- [ ] 窄視窗下「訊息總數」一字一行：KPI 標籤加 `white-space: nowrap` 或最小寬/字級縮放策略（比照既有 mobile 斷點），確認 375px 與 768px 都不直排。Commit。

---

## Phase 2 — Track D：主題統一（依賴 Phase 1 完成）

**Files：** `shared/tokens.css`（注意：`server/static/css/tokens.css` 是它的 symlink，改 shared 那份）、`server/static/css/style.css`、`server/templates/*.html`、登入頁相關 JS/CSS

### Task D1：`--admin-*` 併入主 token 雙軌
- [ ] `shared/tokens.css`（參考 :175-186 靜態 light hex、:273-281 dark 補救）：把 `--admin-*` 改為跟主 token 一樣的 light/dark 雙軌宣告（`:root` 深色預設 + `[data-theme="light"]` 覆蓋，或依現有機制反向），刪除「後置規則救濟」。行為驗收：admin 深/淺主題切換後所有 `--admin-*` 值正確。
- [ ] Commit。

### Task D2：亮色主題深色卡洩漏（實測截圖確認）
- [ ] Dashboard「目前沒有進行中的場次」場次卡在亮色主題仍是深色寫死：找到該卡樣式，底色/文字改 token（亮色下亮卡）。同時全面掃 `style.css` 中不隨 `data-theme` 變化的深色底（`#0f172a`、`#0b1220` 等硬寫在非 overlay-preview 元件者）逐一 token 化。**例外**：LIVE PREVIEW 這類「模擬 overlay 畫面」的元件本來就該恆深色，保留並加註記。
- [ ] Commit。

### Task D3：模板內嵌色清除
- [ ] `grep -n 'style="[^"]*color' server/templates/*.html`：`style="color:#fb7185"` 等內嵌色全部改 class + token。Commit。

### Task D4：登入頁一致化
- [ ] 登入頁與後台使用同一 theme 機制（目前登入亮色、後台深色，前後跳）；logo 的深色 drop-shadow 在亮底顯髒 → 亮色主題下移除/改淺。Commit。
- [ ] Phase 2 收尾：`pytest tests/test_browser_admin.py` 單跑通過。

---

## Phase 2 — Track E：Token 紀律 + CI lint（依賴 D 完成）

**Files：** 全 repo CSS、`danmu-desktop/renderer-modules/connection-status.js`、`danmu-desktop/webpack.config.js`、`scripts/`、CI workflow

### Task E1：動效時長 token 化
- [ ] 全 repo CSS 的 `transition`/`animation` 時長對映到 `--motion-fast/normal/slow`（120/180/240ms）：0.1-0.15s→fast、0.18-0.25s→normal、0.3s→slow；**>0.3s 的具名動畫（彈幕滾動、konami、hero 等展示性動畫）不動**，只動 UI 回饋類。Commit。

### Task E2：圓角 token 化
- [ ] 2/3/4px→`var(--radius-sm)`、6px→`--radius-md`、8px→`--radius-lg`、12px→`--radius-xl`（以 tokens.css 實際定義為準；若級距對不上，在 tokens.css 補級距而不是遷就裸值）。Commit。

### Task E3：hardcode 色遷移 + desktop 接上 tokens.css
- [ ] 主按鈕文字 `#000`（desktop styles.css 參考 :529,536,1674,1681；server style.css 參考 :236,643,999 等）→ 新 token `--btn-text-on-primary`（兩份 CSS 都定義，值仍 #000，先統一參照點）。
- [ ] `#fca5a5`→`var(--color-error-light)`（無此 token 就在 tokens.css 加）、`#22c1f5`→`var(--color-primary-light)`。
- [ ] `connection-status.js`（參考 :67-71）JS 內 hex → `getComputedStyle(document.documentElement).getPropertyValue("--...")` 讀 token（模組載入時讀一次即可）。
- [ ] desktop 接 tokens：webpack 以 CopyPlugin（或等效）把 `shared/tokens.css` 帶進 `dist/`，`index.html`/`child.html` `<link>` 引入（記住執行期 `__dirname`=dist）；desktop 自有 CSS 改讀這些變數。`npx webpack` + `npx jest` 通過。
- [ ] Commit（可拆多個）。

### Task E4：prefers-reduced-motion 補全
- [ ] `danmu-desktop/child.css`（參考 :68）、`about.css`（參考 :73）等尚未被 reduce-motion 截停的 transition/animation 補 `@media (prefers-reduced-motion: reduce)` 覆蓋。Commit。

### Task E5：CI lint 防回歸
- [ ] 新增 `scripts/check-css-tokens.mjs`（node，零依賴）：掃描 repo CSS（排除 `tokens.css`、`tailwind.css` 產物、`node_modules`、`dist`），對「新出現的裸 hex 色碼」報錯。作法：以 repo 內建 baseline 檔（`scripts/css-token-baseline.json`，生成現況清單）比對，只擋**新增**，不逼一次清完。
- [ ] 接進 CI：在現有 GitHub Actions 測試 workflow 加一步 `node scripts/check-css-tokens.mjs`。本機可 `make lint-css`（Makefile 加 target）。
- [ ] 驗收：baseline 下跑過；手動塞一個新 hex 進任一 CSS 會 fail（測完撤掉）。Commit。

---

## Phase 3 — 驗證（硬規則：驗證不自驗）

### Task V1：全套測試與建置
- [ ] `cd server && PYTHONPATH=.. uv run python -m pytest tests/ --ignore=tests/test_browser_isolated.py -q`（目標：1061 pass 水準，數字可因新增測試上調）
- [ ] `cd server && PYTHONPATH=.. uv run python -m pytest tests/test_browser_isolated.py -q`（browser 42 條隔離跑）
- [ ] `cd danmu-desktop && npx jest && npx webpack`
- [ ] 全部貼實際輸出。任何 fail 修到綠（同軌 agent 修，兩輪未果升級模型）。

### Task V2：fresh-agent 逐軌審查
- [ ] 每軌一個 fresh agent 依「審查模板」對照本計畫逐 Task 打 PASS/FAIL（交付物存在、對齊需求、無半修、測試證據真實）。FAIL 項回修。

### Task V3：視覺 smoke（主對話用 preview 工具執行）
- [ ] viewer 桌面 + 375px（B2 破版消失、離線列不蓋輸入框）、admin 亮/暗主題（D2 深卡洩漏消失、tour 對比）、登入頁（D4）。截圖留證。

### Task V4：收尾
- [ ] 更新 auto-memory：P0-3 標記完成（2026-07-07 實測確認）、記錄本次改動要點。
- [ ] 彙整 changelog 式總結給使用者（不發版、不開 PR——等使用者指示）。
