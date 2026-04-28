# Design Handoff · 需要設計的項目 · 2026-04-28

> 從 [`design-v2-prototype-gaps-2026-04-27.md §L`](./design-v2-prototype-gaps-2026-04-27.md#l-design-缺項--single-source-of-truth2026-04-28-整合) 抽出，獨立成這份只給 Design 看的清單。
>
> 工程不擅自設計，這裡列出的全部需要 Design 拍板 / 補 artboard / 確認偏離。

---

## 優先級一覽

| 區塊 | 件數 | 阻塞工程？ | 建議交付順序 |
|------|------|-----------|--------------|
| A. 完全沒畫的 artboard | 6 | 🟡 不阻塞但工程已腦補 | 第 1 批 |
| B. Prototype 有畫但工程偏離 | 4 | ❌ 不阻塞（已 ship） | 第 2 批（拍板偏離） |
| C. 需要新 BE schema 才能畫 | 7 | ✅ 阻塞工程 | 第 3 批（先決定 BE 要不要做） |
| D. 獨立 form-factor | 2 | ❌ 不阻塞 | 平行 |

---

## A. 需要補的 artboard（最高優先）

prototype 沒畫過，工程 ship 時自己腦補了，請 Design 補 artboard 讓未來重構/onboarding 有 reference。

### A.1 效果參數面板（per-effect parameter panel）

- **Where**: viewer 主頁「效果」section 之下（user 選了一個或多個效果之後展開）
- **Prototype 現況**: `viewer.jsx:301-322` 只設計到「8 個效果按鈕反白」，**沒延伸 per-effect 參數 UI**
- **目前實作（截圖建議補上）**: 灰底 panel + cyan label，每個選中效果一個區塊，內含 1-3 組 sliders/selects
- **要 Design 補**: per-effect param panel artboard（dark/light × 8 種效果，可只示意 1-2 個如 「彈跳」「閃爍」）
- **Spec 提示**:
  - 「彈跳」需要 速度（秒）+ 高度（px）兩 sliders
  - 「閃爍」需要 間隔（秒）+ 樣式（select：逐格/淡入淡出/…）
  - 其他效果參數參考 `server/effects/*.dme`

### A.2 History 多 tab strip（匯出 / 列表 / 重播）

- **Where**: `/admin/#/history`
- **Prototype 現況**: `admin-batch1.jsx:218 AdminHistoryPage` 只畫了單一 export 頁，沒畫上方 tab strip
- **目前實作**: 上方 3-tab（匯出 v2 · EXPORT / 列表 · LIST / 重播 · REPLAY），CSS-driven 切 `#history-v2-section` / `#sec-history` / `#replay-v2-section`
- **要 Design 補**: `AdminHistoryTabbedPage` artboard — 3-tab strip + 三個 tab content 切換示意
- **Spec 提示**:
  - tab strip 用 `.admin-v2-tabbar` pattern（active state cyan-soft 反白）
  - tab content 三個 mutually-exclusive（其他兩個 `display: none`）

### A.3 Viewer Config tab strip（整頁主題 / 表單欄位）

- **Where**: `/admin/#/viewer-config`
- **Prototype 現況**: 沒畫
- **目前實作**: 上方 2-tab，切 `#sec-viewer-theme` vs `#admin-display-v2-page`
- **要 Design 補**: `AdminViewerConfigTabbedPage` artboard — 雙 tab strip + 兩 tab content 切換示意
- **同 A.2 spec pattern**

### A.4 Admin desktop 的 768/480 RWD breakpoint

- **Where**: 全部 30+ admin pages
- **Prototype 現況**: 全部 `1440×900` 桌機版，**完全沒設計** 窄屏 breakpoint
- **目前實作**: `style.css` 有 34 個 `@media`，多半是 fallback「能擠就擠」，不是設計過的 layout
- **要 Design 補**: 挑 3-5 個高頻 page 補 768 + 480 兩個 breakpoint artboard
- **建議高頻 page**:
  1. dashboard（控制台）
  2. messages（訊息紀錄）
  3. polls（投票）
  4. broadcast（廣播）
  5. history（歷史）
- **要決定的事情**:
  - 768px 以下 sidebar 怎麼處理？collapse 成漢堡 menu？或 hide 改 bottom-tab？
  - KPI 卡列從 4-col → 2-col → 1-col 的斷點在哪？
  - 表格類（messages / history list）窄屏怎麼變？水平 scroll？卡片 stack？

### A.5 Setup Wizard 6-pack vs dynamic 4-pack 取捨

- **Where**: `/admin/setup` Step 03（挑起手主題包）
- **Prototype 現況**: `admin-batch3.jsx:198 WizStepTheme` 寫死 6 個 hardcoded（classic/neon/mono/sakura/matrix/twilight）
- **目前實作**: 走 `/admin/themes` 動態，目前 server 內建只有 4 個
- **要 Design 拍板**:
  - 選項 A：工程 ship 6 個 hardcoded（覆蓋 dynamic 結果）
  - 選項 B：Design 接受 dynamic 4 個，prototype 改成「最多 6 個 placeholder grid」

### A.6 Effects 按鈕 selected 視覺定位

- **Where**: viewer 主頁「效果」section 8 個按鈕
- **Prototype 規格**: `cyanSoft` 淺底 + `accent` 邊框 + `fontWeight 600`
- **目前實作**: 截圖看是深藍實底（可能是 `var(--color-primary)` 直接當 bg，或 sky-500 之類）
- **要 Design 拍板**:
  - 選項 A：偏離允許 → 工程不動
  - 選項 B：偏離不允許 → 工程改回 `var(--hud-cyan-soft)`

→ 這條跟 A.1 一起看比較好（同一個 effect section）

---

## B. Prototype 有畫但工程偏離（拍板偏離 OK 與否）

### B.1 AdminPollsPage 格局

- **Prototype**: 12-col grid（active poll 7 + builder 5）
- **實作**: master-detail（左清單 + 右編輯）
- **理由**: RWD 友善優先（master-detail 在窄屏可以堆疊）
- **問 Design**: 偏離允許嗎？

### B.2 Effects 8-card 是否動態

- **Prototype**: 寫死 8 張卡
- **實作**: `已選 N / 8`（內部支援未來擴張）
- **問 Design**: 保持 8 張固定？還是支援自訂上傳後變 N 張？

### B.3 Viewer Identity field 形式

- **Prototype**: plain `<input>`
- **實作演化**: 中間做過 chip + fp 顯示 → 2026-04-28 user 反饋說「會重複出現 + 移除 @」，又改回 plain input + nickname live-sync 到 preview 左上角
- **問 Design**: plain input 是 final 嗎？還是要設計 chip pattern？

### B.4 效果按鈕 selected 視覺

→ 同 A.6（合併拍板）

---

## C. 需要新 BE schema 才能畫 prototype

對照 [`backend-extensions-pending-2026-04-27.md`](./backend-extensions-pending-2026-04-27.md)。Design 要先拍板「BE 擴張要做嗎」，才有後續 artboard 細修空間。

| # | 元件 | 缺什麼 BE | 規模 |
|---|------|-----------|------|
| 1 | AdminTokensPage（per-integration ACL） | 新 token table | 中 |
| 2 | AdminWcagPage + AdminDashboardEN | 全套 EN i18n strings | 大（6-10 hr 純 FE） |
| 3 | Audit Log multi-actor / ACTION dim / before-after / source platform | audit_log schema 擴張 | 中-大 |
| 4 | Notifications detail panel + Webhooks/System sources | 新 alert schema | 中 |
| 5 | Setup Wizard password + Logo step | /admin/logo upload + first-run check | 小 |
| 6 | Poll Deep-Dive Time histogram / vs 上次 Δ | per-vote timestamp + poll history persistence | 中 |
| 7 | AdminAudiencePage 出席場次 / Sessions entity | sessions table | 大（牽動很多 page） |

→ 這 7 項全部進獨立 sprint，本份 doc 只記「Design 要拍板做不做」的決策節點。

---

## D. 獨立 form-factor sprint

不阻塞 server / web 工作，可平行開展。

### D.1 AdminMobilePage（手機 form-factor）

- **Prototype**: ✅ `admin-batch8.jsx:642 AdminMobilePage`（375×812 iOS chrome + ticker + action grid）
- **不是**: desktop 的 RWD 縮版（那是 A.4）
- **是**: 獨立的 `/admin/mobile` URL，dedicated phone-first 介面
- **工程估**: 4-6 hr 純 FE
- **要 Design 確認**: 這是 ship-ready prototype？還是要再修細節？

### D.2 Electron Desktop 端

| 元件 | Prototype | 工程估 | 備註 |
|------|-----------|--------|------|
| DesktopTrayPopover | V1Z4 batch9 #11 | 4-6 hr | macOS 風 tray dropdown，含 mini stats + quick actions + shortcut hints |
| DesktopWindowPicker | V1Z4 batch9 #12 | 3-4 hr | 多 overlay window 管理 picker |

→ Electron 獨立 sprint，加新 `danmu-desktop/main-modules/` 即可。

---

## 已 ship · prototype 還沒畫的（追溯記錄用）

工程做完了 prototype 沒畫過，建議補 artboard 讓未來 onboarding/重構有 reference。**不阻塞工程**，純記錄。

1. ✅ **OverlayIdleQR 4-state machine**（idle / scanning / paired / failed）
   - commit `13072df`
   - prototype `priority-2-pieces.jsx:174` 已對齊（但補 artboard 對 idle/scanning/paired/failed 4 個 state 各拍一張更好）

2. ✅ **AdminHistoryPage v2 timeline export**（3-step picker + recent exports）
   - commit `94ce6c1`
   - prototype `admin-batch1.jsx:218` 已對齊

3. ✅ **Viewer body 字體放大**
   - commit `54c2408`
   - 無 prototype 對應，2026-04-28 user feedback 驅動：label 9→11px、input 13→15px、color hex 10→12px、font select 13→15px
   - **要 Design 拍板**: 保持 user feedback 後的尺寸？還是回 prototype 9-10px 規格？

---

## TL;DR · 給 Design 的優先序

1. **第 1 批 · A.1-A.6**（6 個沒畫的 artboard）→ 工程在等 reference
2. **第 2 批 · B.1-B.4**（4 個偏離拍板）→ 已 ship，純確認
3. **第 3 批 · C.1-C.7**（7 個 BE 擴張決策）→ 決定 sprint 切片
4. **平行 · D.1-D.2**（mobile / Electron 獨立 form-factor）→ 不阻塞，挑時間做

工程目前繼續做的是 **§H.1** 裡 prototype **已完整存在** 的 retrofit（webhooks / audience detail panel / notifications starred / poll deep-dive 5th KPI 等），不會再擅自設計。
