# TODOS

> 格式：依元件分組，每項標 `**Priority:**`（P0 最高 → P4），完成項移至底部 `## Completed` 並附版本。

## Server — Admin 測試基建

### server 端 JS 缺單元測試 harness（admin-hud-modal 等）
**Priority:** P3
`server/static/js/` 沒有 jest/jsdom 之類的單元測試環境，focus trap、breadcrumb
等純前端邏輯只能靠 playwright browser test 間接覆蓋。評估是否為 server 靜態 JS
建一個輕量 jest 環境（或決議維持 browser-test-only 並記錄為刻意取捨）。
（出處：v5.4.0 /ship testing specialist。）

## Completed

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
