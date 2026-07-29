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


### 空狀態歸一批次二：B 類 renderCustom 九處（D-6 續）
**Priority:** P3
批次一已完成（見 Completed）。剩 B 類：admin-poll.js 的 proto-empty--poll
（含模板卡 grid 與 [PLACEHOLDER] chip 清理，換掉後 proto-empty 基底 CSS
全死）、api-tokens（hidden 切換要改 replaceChildren）、notifications、
session-detail（同一 HTML 複製兩份）、webhooks（值得補 CTA）、history、
widgets（文案指向按鈕卻不給按鈕）、stickers、sounds×2（仍借 emojis
class）。C 類 row/inline 級佔位為刻意保留（分類表見 2026-07-28 盤點）。
另：scheduler:436 與 admin-display 兩處「載入中」佔位可換 AdminSkeletons。

## Completed

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
