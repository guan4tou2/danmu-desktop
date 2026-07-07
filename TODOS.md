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

## Completed
