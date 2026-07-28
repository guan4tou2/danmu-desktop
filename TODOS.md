# TODOS

> 格式：依元件分組，每項標 `**Priority:**`（P0 最高 → P4），完成項移至底部 `## Completed` 並附版本。

## Server — Viewer 測試

### 建立 viewer 頁 browser test 套件（test_browser_viewer.py）
**Priority:** P1
viewer 主頁（`server/static/js/main.js` + `templates/index.html`）目前沒有自己的
browser test 檔（只有 overlay/admin/p3 有），v5.4.0 的 viewer 端行為——sendbar
狀態列（離線/滿載訊息）、投票即時「✓ 已投出」確認、重連 toast、行動端
blur-on-send——全數只靠人工驗證。比照 `test_browser_admin.py` 的模式新建套件，
涵蓋上述四個行為＋色票 aria-label i18n 渲染。
（出處：v5.4.0 /ship 覆蓋率稽核，coverage gate overridden at 35%。）

## Server — Viewer UX

### 軟鍵盤釘住 sendbar 時，重連 toast / 離線橫幅的定位碰撞
**Priority:** P2
`main.js` 的 visualViewport 處理會把 `.viewer-sendbar` 釘在鍵盤上緣，但
`.viewer-reconnected-toast` 與離線橫幅仍是 `position:fixed; bottom:0`——鍵盤開啟
時 toast 會被鍵盤蓋住或與 sendbar 重疊。兩套定位系統需要互相感知（toast 的
bottom 應加上 keyboardOffset）。
（出處：v5.4.0 /ship 對抗式審查 F5。）

## Server — Admin 測試基建

### server 端 JS 缺單元測試 harness（admin-hud-modal 等）
**Priority:** P3
`server/static/js/` 沒有 jest/jsdom 之類的單元測試環境，focus trap、breadcrumb
等純前端邏輯只能靠 playwright browser test 間接覆蓋。評估是否為 server 靜態 JS
建一個輕量 jest 環境（或決議維持 browser-test-only 並記錄為刻意取捨）。
（出處：v5.4.0 /ship testing specialist。）

## Server — Admin 設計一致性（/design-review 2026-07-28 deferred）

### 間距刻度二選一並寫進 lint（D-1）
**Priority:** P2
`--space-*`（4px 格）在 style.css 採用率僅 5.4%；px 值 51% 落在無文件的 4n+2 格
（2/6/10/14/18/22）。決定唯一刻度、把另一套 snap 過去、`check-css-tokens` 擋新增
盤外值。（出處：/design-review 2026-07-28，完整報告在
`~/.gstack/projects/guan4tou2-danmu-desktop/designs/design-audit-20260728/`。）

### 合併三套色彩 token 命名空間（D-2）
**Priority:** P2
`--admin-*`／`--color-*`／`--hud-*` 同語意解析出不同值：次要文字 slate-400
（158 處）vs slate-500（246 處）、面板底 #0f172a vs #0c1424。收斂成單一語意層，
跨頁灰階不再跳階。

### 頁首 shell 與按鈕階層收回原語（D-5/D-7，部分已修）
**Priority:** P2
剩餘：頁首缺 note 的 9 檔補齊、viewer-theme 自成一格的頁首收回、
onboarding `.ob-btn` 與 `admin-dsp2-btn-ghost` 兩套私有按鈕階層、
`admin-empty__btn` 與 `.admin-ui-action` 的 padding 量級差。
（已修 2026-07-28：ratelimit 頁首 clone 收回原語、fonts 補頁首、filters/fonts
刪除鈕進 danger 階層——其餘三個刪除鈕實查本來就有危險視覺。）

### 空狀態/載入態歸一（D-6）
**Priority:** P3
AdminEmpty 僅 5 頁採用、31 個模組自造 `*-empty`（72 條規則）；載入文案三派
（載入中…／讀取中…／Loading…），admin-sessions 同頁兩種載入視覺。

## Completed
