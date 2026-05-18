# V5 Gap Closure Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 依據「Gap 全覽（65 artboards）」把可做項目拆成可執行 TODO，先完成純前端缺口，再為 BE 依賴項建立可交付契約，最後安排 Electron sprint。

**Architecture:** 採三軌併行：`Frontend-Now`（純前端可立即交付）、`Backend-Blocked`（先凍結 API 合約與 UI placeholder）、`Electron-Standalone`（獨立於 server/web 的桌面 sprint）。路由/語義以現行 lifecycle session + broadcast gate 為準，不回退至舊 scope-out 假設。

**Tech Stack:** Flask + server-side routes、Vanilla JS admin/viewer modules、Playwright browser tests、Electron main/renderer modules。

---

## Sprint Board（執行順序）

- `Now`（本週可完工）
  1. Viewer Fire/Poll 分頁 + ViewerPollTab
  2. Empty States x3（訊息/投票/字型）
  3. Error States x3（連線中斷/超速限制/上傳失敗）
  4. ViewerPollThankYou 改為 server-driven（移除 FE 猜測）
- `Blocked by BE`（先出 API 契約與驗收）
  5. Setup Wizard Step 1/2（first-run、logo API）
  6. Audit / Notifications / API Tokens / Poll Deep-Dive / Audience 的 schema 缺口
- `Standalone`（Electron 半天）
  7. Tray Popover
  8. Window Picker
- `Governance`
  9. scope-out 文件與現況矛盾收斂

### 2026-04-30 Execution Note

- Task 1–4 已完成並有測試覆蓋（上一批）。
- Task 5–6 以「contract-first」方式收斂：先固定 API schema placeholder，避免 FE/Design 對齊時欄位漂移。
- Browser 測試在受限 sandbox 可能因 `bind(127.0.0.1)` 權限失敗；CI/本機需再跑一次 browser suites。

---

### Task 1: Viewer Fire/Poll Tabs + ViewerPollTab

**Files:**
- Modify: `server/static/js/main.js`
- Modify: `server/static/css/style.css`
- Modify: `server/templates/index.html`
- Test: `server/tests/test_browser_fire_e2e.py`

**Step 1: Write the failing test**

在 `test_browser_fire_e2e.py` 新增測試：收到 poll 狀態時顯示 `ViewerPollTab`，且投票按鈕可送出選項。

**Step 2: Run test to verify it fails**

Run: `cd server && ADMIN_PASSWORD=test PYTHONPATH=.. .venv/bin/pytest tests/test_browser_fire_e2e.py::test_viewer_poll_tab_switch -q`
Expected: `FAIL`（找不到 poll tab / 投票按鈕）

**Step 3: Write minimal implementation**

在 `main.js` 加入 viewer tab state（Fire/Poll），以既有 poll status API 或 WS 事件切換視圖；`style.css` 加上 tab 與進度條樣式。

**Step 4: Run test to verify it passes**

Run 同 Step 2。
Expected: `PASS`

**Step 5: Commit**

```bash
git add server/static/js/main.js server/static/css/style.css server/templates/index.html server/tests/test_browser_fire_e2e.py
git commit -m "feat(viewer): add fire/poll tabs and poll card"
```

---

### Task 2: Empty States x3（訊息/投票/字型）

**Files:**
- Modify: `server/static/js/admin-live-feed.js`
- Modify: `server/static/js/admin-poll.js`
- Modify: `server/static/js/admin-fonts.js`
- Modify: `server/static/css/style.css`
- Test: `server/tests/test_browser_admin.py`

**Step 1: Write the failing test**

新增 browser 測試：在無資料時顯示全頁 empty state（含標題 + 說明 + CTA），不是僅 inline 文案。

**Step 2: Run test to verify it fails**

Run: `cd server && ADMIN_PASSWORD=test PYTHONPATH=.. .venv/bin/pytest tests/test_browser_admin.py::test_admin_fullpage_empty_states -q`
Expected: `FAIL`

**Step 3: Write minimal implementation**

在三個頁面注入統一 empty-state 容器（共用 class/token），保留既有功能按鈕 CTA。

**Step 4: Run test to verify it passes**

Run 同 Step 2。
Expected: `PASS`

**Step 5: Commit**

```bash
git add server/static/js/admin-live-feed.js server/static/js/admin-poll.js server/static/js/admin-fonts.js server/static/css/style.css server/tests/test_browser_admin.py
git commit -m "feat(admin): add full-page empty states for live feed poll fonts"
```

---

### Task 3: Error States x3（斷線/超速/上傳失敗）

**Files:**
- Modify: `server/static/js/main.js`
- Modify: `server/static/js/admin-fonts.js`
- Modify: `server/static/css/style.css`
- Test: `server/tests/test_browser_fire_e2e.py`

**Step 1: Write the failing test**

新增測試覆蓋三種錯誤視圖：
- viewer WS 斷線達門檻顯示全頁 offline
- fire 被 rate-limit 時顯示明確限流狀態
- 字型上傳失敗顯示 full error panel（含重試）

**Step 2: Run test to verify it fails**

Run: `cd server && ADMIN_PASSWORD=test PYTHONPATH=.. .venv/bin/pytest tests/test_browser_fire_e2e.py::test_viewer_error_states -q`
Expected: `FAIL`

**Step 3: Write minimal implementation**

用現有 offline/retry 架構補全 state 分支與 UI token；font upload 失敗改為 error panel，而非 toast-only。

**Step 4: Run test to verify it passes**

Run 同 Step 2。
Expected: `PASS`

**Step 5: Commit**

```bash
git add server/static/js/main.js server/static/js/admin-fonts.js server/static/css/style.css server/tests/test_browser_fire_e2e.py
git commit -m "feat(ui): add full error states for offline ratelimit upload"
```

---

### Task 4: ViewerPollThankYou 改為 Server-Driven

**Files:**
- Modify: `server/static/js/main.js`
- Modify: `server/routes/api.py`
- Modify: `server/services/poll.py` (if needed for explicit response payload)
- Test: `server/tests/test_browser_fire_e2e.py`
- Test: `server/tests/test_api_fire.py` (create if missing)

**Step 1: Write the failing test**

新增測試：只有 server 明確回傳 `vote_accepted` 或 WS 事件時才顯示 thank-you，普通 A/B/C 文本不觸發。

**Step 2: Run test to verify it fails**

Run: `cd server && ADMIN_PASSWORD=test PYTHONPATH=.. .venv/bin/pytest tests/test_browser_fire_e2e.py::test_poll_thankyou_server_driven -q`
Expected: `FAIL`

**Step 3: Write minimal implementation**

移除 `main.js` 內字母猜測邏輯，改讀 server 回應/事件旗標。

**Step 4: Run test to verify it passes**

Run 同 Step 2。
Expected: `PASS`

**Step 5: Commit**

```bash
git add server/static/js/main.js server/routes/api.py server/services/poll.py server/tests/test_browser_fire_e2e.py

git commit -m "fix(viewer): make poll thank-you server-driven"
```

---

### Task 5: Setup Wizard Step 1/2（BE Blocked）契約凍結

**Files:**
- Modify: `docs/designs/backend-extensions-pending-2026-04-27.md`
- Modify: `docs/designs/design-handoff-needs-2026-04-28.md`
- Modify: `server/static/js/admin-setup-wizard.js`
- Test: `server/tests/test_browser_p3_pages.py`

**Step 1: Write the failing test**

新增測試：Step 1/2 在 endpoint 不可用時顯示 `blocked by backend` 狀態，不讓流程靜默失敗。

**Step 2: Run test to verify it fails**

Run: `cd server && ADMIN_PASSWORD=test PYTHONPATH=.. .venv/bin/pytest tests/test_browser_p3_pages.py::test_setup_wizard_step_dependency_hints -q`
Expected: `FAIL`

**Step 3: Write minimal implementation**

在 setup wizard 加入 endpoint capability 檢查（可用/不可用提示），並補文件契約。

**Step 4: Run test to verify it passes**

Run 同 Step 2。
Expected: `PASS`

**Step 5: Commit**

```bash
git add docs/designs/backend-extensions-pending-2026-04-27.md docs/designs/design-handoff-needs-2026-04-28.md server/static/js/admin-setup-wizard.js server/tests/test_browser_p3_pages.py

git commit -m "docs+ui: freeze setup wizard backend dependency contract"
```

---

### Task 6: Audit/Notifications/API Tokens/Poll Deep-Dive/Audience（BE Blocked）差距契約

**Files:**
- Modify: `docs/designs/backend-extensions-pending-2026-04-27.md`
- Modify: `docs/plans/2026-04-30-v5-gap-closure-implementation-plan.md`
- Modify: `server/routes/admin/audit.py`
- Modify: `server/routes/admin/integrations.py`
- Modify: `server/routes/admin/api_tokens.py`
- Modify: `server/routes/admin/history.py`
- Test: `server/tests/test_admin_bootstrap.py` (or add `test_gap_contracts.py`)

**Step 1: Write the failing test**

新增 contract 測試：上述 API 回傳需包含 prototype 目標欄位（即使暫時為 `null`/`[]`）。

**Step 2: Run test to verify it fails**

Run: `cd server && ADMIN_PASSWORD=test PYTHONPATH=.. .venv/bin/pytest tests/test_gap_contracts.py -q`
Expected: `FAIL`

**Step 3: Write minimal implementation**

先補 schema placeholders（不做商業邏輯），確保前端可穩定 render 第 3 欄/新 filter。

**Step 4: Run test to verify it passes**

Run 同 Step 2。
Expected: `PASS`

**Step 5: Commit**

```bash
git add docs/designs/backend-extensions-pending-2026-04-27.md server/routes/admin/audit.py server/routes/admin/integrations.py server/routes/admin/api_tokens.py server/routes/admin/history.py tests/test_gap_contracts.py

git commit -m "chore(api): add blocked-gap response contracts"
```

---

### Task 7: Electron Tray Popover

**Files:**
- Modify: `danmu-desktop/main.js`
- Create: `danmu-desktop/main-modules/tray-popover.js`
- Modify: `danmu-desktop/preload.js`
- Test: `danmu-desktop/tests/tray-popover.test.js`

**Step 1: Write the failing test**

新增單元測試：tray popover 開啟時顯示迷你統計、快捷動作、快捷鍵提示。

**Step 2: Run test to verify it fails**

Run: `cd danmu-desktop && npm test -- tray-popover.test.js --runInBand`
Expected: `FAIL`

**Step 3: Write minimal implementation**

抽離 tray popover module，接既有 tray status pipeline。

**Step 4: Run test to verify it passes**

Run 同 Step 2。
Expected: `PASS`

**Step 5: Commit**

```bash
git add danmu-desktop/main.js danmu-desktop/main-modules/tray-popover.js danmu-desktop/preload.js danmu-desktop/tests/tray-popover.test.js

git commit -m "feat(electron): add tray popover mini dashboard"
```

---

### Task 8: Electron Window Picker（desktopCapturer）

**Files:**
- Modify: `danmu-desktop/main-modules/window-manager.js`
- Modify: `danmu-desktop/renderer.js`
- Modify: `danmu-desktop/preload.js`
- Test: `danmu-desktop/tests/window-picker.test.js`

**Step 1: Write the failing test**

新增測試：多螢幕/多視窗情境下可選擇 overlay 目標窗口，且 fallback 到 primary display。

**Step 2: Run test to verify it fails**

Run: `cd danmu-desktop && npm test -- window-picker.test.js --runInBand`
Expected: `FAIL`

**Step 3: Write minimal implementation**

建立 picker model + IPC，整合現有 display select 行為。

**Step 4: Run test to verify it passes**

Run 同 Step 2。
Expected: `PASS`

**Step 5: Commit**

```bash
git add danmu-desktop/main-modules/window-manager.js danmu-desktop/renderer.js danmu-desktop/preload.js danmu-desktop/tests/window-picker.test.js

git commit -m "feat(electron): add overlay window picker"
```

---

### Task 9: Scope-Out 矛盾收斂（治理）

**Files:**
- Modify: `docs/designs/scope-out-2026-04-27.md`
- Modify: `docs/designs/design-v2-prototype-gaps-2026-04-27.md`
- Modify: `docs/designs/design-handoff-needs-2026-04-28.md`

**Step 1: Write the failing check**

新增 docs 一致性檢查腳本（簡單 grep）確認不再同時出現「sessions 永遠不做」與「sessions 已上線」矛盾文字。

**Step 2: Run check to verify it fails**

Run: `rg -n "Sessions.*NOT IN SCOPE|sessions 已" docs/designs/*.md`
Expected: 有衝突行

**Step 3: Write minimal implementation**

把 scope-out §A 改成「舊決策已被 2026-04-29 lifecycle 決策覆蓋」，保留歷史但標註 superseded。

**Step 4: Run check to verify it passes**

Run 同 Step 2。
Expected: 不再有相互衝突的 active rule。

**Step 5: Commit**

```bash
git add docs/designs/scope-out-2026-04-27.md docs/designs/design-v2-prototype-gaps-2026-04-27.md docs/designs/design-handoff-needs-2026-04-28.md

git commit -m "docs: reconcile sessions scope decision with shipped lifecycle"
```

---

## Final Verification Gate

1. Server regression

```bash
cd server && ADMIN_PASSWORD=test PYTHONPATH=.. .venv/bin/pytest tests -q
```

2. Browser critical path

```bash
cd server && ADMIN_PASSWORD=test PYTHONPATH=.. .venv/bin/pytest tests/test_browser_fire_e2e.py tests/test_browser_p3_pages.py -q
```

3. Electron tests

```bash
cd danmu-desktop && npm test -- --runInBand
```

4. Manual smoke
- `/admin/#/dashboard`：session banner / broadcast toggle / backstage panel
- `/admin/#/sessions` → `#/session-detail?id=...` fallback
- `/` viewer：Fire/Poll tab + error states
