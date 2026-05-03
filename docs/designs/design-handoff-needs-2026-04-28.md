# Design Handoff · 需要設計的項目 · 2026-04-28（最後更新：2026-05-04）

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

## 2026-04-30 最新基線（請以本段為準）

### 1:1 對齊執行規則（2026-04-30 起強制）

1. 只允許使用 prototype 已定義元件。  
2. 若設計缺稿，不得工程自行設計；只能用「文字 + 方框」placeholder。  
3. placeholder 必須在 UI 上明示 `[PLACEHOLDER]`，並在本文件對應缺稿項目。  

### 仍缺 Design 稿（需補 artboard / spec）

| 類別 | 項目 | 目前狀態 | 需要 Design 交付 |
|------|------|----------|------------------|
| Admin | EN Dashboard | 尚無獨立頁/稿件 | 補 EN 版 dashboard artboard + 文案規格 |
| Admin RWD | Desktop 768 / 480 | 現在為工程 fallback | 補高頻頁 breakpoint（Dashboard / Messages / Polls / Broadcast / History） |
| Viewer | Effects 參數面板 | 有功能、無正式設計稿 | 補 per-effect parameter panel（dark/light） |
| Admin | History tabbed page | 工程已有 3 tabs，prototype 無完整 tabbed 稿 | 補 `AdminHistoryTabbedPage` |
| Admin | Viewer Config tabbed page | 工程已有 2 tabs，prototype 無此稿 | 補 `AdminViewerConfigTabbedPage` |
| Admin | Messages 進階空狀態 | `Paused` / `No Result` 在 prototype 無獨立 artboard，現改為 `[PLACEHOLDER]` | 補 `MessagesPausedState`、`MessagesNoResultState`（含 CTA 規格） |
| Admin | Live Feed Empty（首筆訊息前） | 目前改為 `[PLACEHOLDER]`，避免誤用非對應 artboard | 補 `LiveFeedEmptyState`（明確對應 `#/live-feed`） |
| Admin Mobile | Big Actions / Quick Toggles 互動語義 | 目前嚴格模式僅保留 prototype 視覺，`結束/釘選/清空/快速開關` 改為非互動或 placeholder | 補 mobile action semantics（哪些可操作、哪些只展示） |

### 本輪已完成對齊（不用再列缺稿）

| 功能 | 對齊狀態 |
|------|----------|
| Notifications | 已是 3 欄（filters/list/detail），來源為 `Fire Token / Webhooks / Backup(placeholder) / Moderation / System`，並補 `SEVERITY` 群組 |
| Audit Log | 已對齊 `ACTION / ACTOR / RANGE` 篩選與 `before→after` 語義 |
| Webhooks ↔ Audit | 已寫入 `register / test / unregister` 審計事件，可在 audit 與 notifications 直接看到 |
| Messages / Polls / Fonts Empty State | 已移除工程自加 emoji 通用卡；改為 prototype 文案與結構（Messages:「還沒有人發送訊息」、Polls:「還沒有任何投票」、Fonts:「尚未上傳自訂字型」） |
| Viewer Poll tab | 依 prototype `pollEnabled=false`，viewer 端預設關閉 Poll 分頁（只保留 Fire）；避免未定義流程直接露出 |
| BE 阻塞控制項 | `Webhooks Toggle` / `Backup Source Filter` / `Audience Kick` / `Google Fonts Import` 均改為不可點的 `[PLACEHOLDER]` 文字+方框，避免誤判為可操作 |
| History / Viewer Config tabs | 因缺 tabbed artboard，已改為 `[PLACEHOLDER]` 文字+方框容器（非互動；不再由 tab UI 直接切換） |
| Viewer Effect parameters | 因缺 per-effect 面板稿，已改為 `[PLACEHOLDER] Effect Parameters` 文字+方框 |
| Fake actions 清理 | `Message Drawer` 的 `置頂/遮罩/隱藏/overlay` 與 `Mobile` 的 `結束/釘選/清空/快速開關` 已移除假互動，改成非可點 placeholder（避免「點了只出待補 toast」） |
| Poll Empty 模板鍵 | `從模板` 改為不可點 `[PLACEHOLDER]` span（原 button 移除 toast + 降格為非互動） |
| RateLimit IP Policy | 移除 localStorage stub（新增/刪除），改為 `[PLACEHOLDER]` 文案；等待 BE endpoint |
| Viewer Theme Apply | `立即套用` 改為 `[PLACEHOLDER]`（待 BE 廣播），避免顯示「已套用」假成功語義 |

---

## 2026-04-30 補充（Setup Wizard 契約凍結）

- 密碼步驟使用 `POST /admin/change_password`，Logo 步驟使用 `POST /admin/logo`。
- 前端已實作 capability 探測；若 endpoint 不可用，該步驟會顯示 `Blocked by backend` 並允許略過，不再靜默失敗。
- Design 若調整文案，請保留上述「可偵測依賴缺失」語義，避免稿件回到「必填且無 fallback」。

---

## 2026-04-29 補充盤點（本次需求）

> 目的：回覆「還有哪些功能缺少設計、哪些設計未完整、RWD 還缺哪些頁」。

### E. 功能缺少設計（需要 Design 補稿）

| 類別 | 功能 / 頁面 | 目前狀態 | 需要 Design 交付 |
|------|-------------|----------|------------------|
| Viewer | effect 參數面板（選中效果後的參數區） | 工程已腦補 UI，prototype 無明確版型 | 補 `per-effect parameter panel` artboard（dark/light） |
| Admin | `#/history` tabbed page（匯出/列表/重播） | 工程有 tab strip + 3 content，但 prototype 只畫單頁 export | 補 `AdminHistoryTabbedPage` artboard |
| Admin | `#/viewer-config` tabbed page（整頁主題/表單欄位） | 工程已合併 route + 2 tabs，prototype 無此頁 | 補 `AdminViewerConfigTabbedPage` artboard |
| Admin RWD | desktop admin breakpoint（768 / 480） | 目前只有 1440 規格；CSS 多為工程 fallback | 補 768/480 breakpoint 設計稿（至少高頻頁） |

### F. 設計未完整 / 需拍板（有畫但規格未收斂）

| 功能 | 現況 | 要 Design 決策 |
|------|------|----------------|
| Setup Wizard step scope | prototype 是 5 steps（password/logo/theme/lang/done）；實作已補到 5 steps | 是否固定 6-pack，或保留 dynamic theme grid；是否保留「可略過」策略 |
| Polls page layout | prototype 12-col；實作 master-detail | 偏離是否接受（含窄屏行為） |
| Effects cards | prototype 固定 8 張；實作可動態 N | 是否維持固定 8，或正式改為 dynamic |
| Viewer identity 欄位 | prototype plain input；實作曾做 chip 後回退 plain | 最終互動 pattern（plain 或 chip）；文案請統一為「暱稱 / Nickname」，不要用「身分」 |
| Effects selected 視覺 | prototype `cyanSoft`；實作目前色系偏離 | 是否要求回 prototype 色階 |
| Message Detail | prototype 是 full route page；實作是 drawer | 保留 drawer 或改回 full page |
| Notifications | prototype 3 欄（含 detail pane）；實作 2 欄 | 是否要求補回 3rd detail pane |
| Audit Log | prototype 有 ACTION/diff 等結構化欄位；實作 simplified | 是否要求回補完整審計視覺語義 |
| Poll Deep-Dive | 原型分析區完整；實作部分指標/圖仍 placeholder | 是否保留現況，或等 BE 後補齊完整分析稿 |

### G. RWD 設計狀態（目前有 / 缺）

| 類別 | 頁面 | 設計狀態 | 備註 |
|------|------|----------|------|
| 已有 RWD form-factor 設計 | Viewer Mobile Web（375×812） | ✅ 有 | 設計檔已有 mobile artboard |
| 已有 RWD form-factor 設計 | Admin Mobile（375×812） | ✅ 有 | 獨立 `/admin/mobile` form-factor |
| 仍缺 desktop breakpoint 設計 | Dashboard / Messages / Polls / History / Broadcast / Widgets | ❌ 缺 768/480 | 目前只有 1440 桌機稿，窄屏為工程 fallback |

> 建議 Design 第 1 批先補：`History tabbed`、`Viewer Config tabbed`、`Admin desktop 768/480`。這三塊直接影響後續 1:1 對齊與回歸測試穩定度。

---

## 2026-04-29 IA / 語義同步（需 Design 先改 spec，避免對齊錯版）

> 這批不是純視覺調整，核心是資訊架構與狀態語義。若設計稿不先更新，工程會持續對齊到舊邏輯。

### H. Design 需立即更新的 5 項規則

| # | 規則 | 目前工程方向 | Design 需更新內容 |
|---|------|--------------|-------------------|
| 1 | 導航改成模式減法（B） | 預設只顯示 Live 高頻頁；其餘收在「⚙ 後台 & 設定」後 | 更新 IA spec：Live / Backstage / Admin 三層可見性，不再把 25 頁同層平鋪 |
| 2 | 場次唯一語義 | 正式場次以 `/admin/session/*` lifecycle 為主；`/admin/sessions` 推導資料降級歷史分析 | 更新頁面定義：Session = open/close lifecycle，不再只用「30 分鐘空窗切段」描述 |
| 3 | 廣播語義修正 | `standby` = 暫停顯示，但仍收訊息（可排隊） | 修正文案與狀態圖：不得再描述為「停止收訊息 / 時間軸停止 / 完全結束」 |
| 4 | 事件回顧頁責任收斂 | `messages/history/notifications/audit/sessions/search` 現況重疊過高 | 更新 IA：定義每頁唯一責任與入口層級，避免平行重複 |
| 5 | Live 模式風險隔離 | 高風險頁（plugins/system/backup/api-tokens）不在 Live 可見 | 更新操作流：Live 視角不可直達高風險頁，需先進後台模式 |

### H.1 要求 Design 的交付格式

1. IA map（含 route 可見性矩陣）  
2. state semantics（Session / Broadcast 的狀態圖與文案）  
3. Live 模式單頁操作流（主持/操作員常用路徑）

### H.2 備註（與視覺稿的先後順序）

- 先更新 IA / semantics spec，再做視覺 polish。  
- 若視覺稿先行但沿用舊語義，後續會再次產生「1:1 對齊錯版」。

### H.3 工程已完成（2026-04-29）

- ✅ P0-2（session detail fallback）  
  `#/session-detail?id=...` 現在會先查 `/admin/sessions/<id>`，404 時自動 fallback 到 `/admin/session/archive/<id>`。  
- ✅ P0-3（broadcast ENDED / writeState 清理）  
  已移除 UI-only ENDED 分支與 `writeState` 路徑，改為由 session lifecycle 統一管理「結束場次」語義。  
- ✅ 回歸測試已補（非 browser）  
  `test_session_mgmt.py` + `test_broadcast.py` 共 46 tests 通過，作為本批修復 baseline。

---

## 2026-04-29 Prototype Gap 最新快照（第二次更新）

> 本段覆蓋先前口頭盤點，作為目前可執行的 gap baseline。

### P.1 仍缺「獨立頁 / 畫面」的項目

| 類別 | Prototype 畫面 | 目前狀態 | 結論 |
|------|----------------|----------|------|
| Admin | EN Dashboard | 仍無對應可達頁 | 缺頁 |
| Desktop (Electron) | Tray Popover | 已落地（2026-04-30） | 已完成 |
| Desktop (Electron) | Window Picker | 已落地（2026-04-30） | 已完成 |

### P.2 有實作但不是 1:1 形態（合併/改名/改 form）

| Prototype route / screen | 現行實作 | 差異 |
|--------------------------|----------|------|
| `display` + `viewer-theme` | `viewer-config` | 兩頁合併為 tab |
| `extensions` | `integrations` | route 改名 + 模組整併 |
| `webhooks` | `system` 內 section | 獨立頁改併入系統頁 |
| `poll-detail` | `poll-deepdive` | route 改名 |
| Message Detail（full page） | Message Drawer | 由頁面改為側邊抽屜 |

### P.3 這批新增後的剩餘 gap（需後續補齊）

| 功能 | 現況 | gap |
|------|------|-----|
| Setup Wizard | 功能已補 5 steps（password/logo/theme/lang/done） | 新增 step 的視覺 token/版型尚未完整設計化 |
| Notifications | 已加入第三欄 detail pane DOM 與互動 | 3-col CSS/比例與狀態樣式仍未完整收斂 |
| Onboarding Tour | overlay + 5 steps 已上線 | 會攔截部分操作（測試中曾擋到 logout click）需調整觸發/遮罩策略 |

### P.4 RWD 設計缺口（仍未關）

| 範圍 | 狀態 |
|------|------|
| Admin desktop 768 / 480 breakpoint | 仍缺正式設計稿（目前多為工程 fallback） |

---

## A. 需要補的 artboard（最高優先）

prototype 沒畫過，工程 ship 時自己腦補了，請 Design 補 artboard 讓未來重構/onboarding 有 reference。

### A.1 效果參數面板（per-effect parameter panel）

- **Where**: viewer 主頁「效果」section 之下（user 選了一個或多個效果之後展開）
- **Prototype 現況**: `viewer.jsx:301-322` 只設計到「8 個效果按鈕反白」，**沒延伸 per-effect 參數 UI**
- **目前實作**: 已改為 `[PLACEHOLDER] Effect Parameters`（文字+方框）；暫不提供自設計 sliders/selects
- **要 Design 補**: per-effect param panel artboard（dark/light × 8 種效果，可只示意 1-2 個如 「彈跳」「閃爍」）
- **Spec 提示**:
  - 「彈跳」需要 速度（秒）+ 高度（px）兩 sliders
  - 「閃爍」需要 間隔（秒）+ 樣式（select：逐格/淡入淡出/…）
  - 其他效果參數參考 `server/effects/*.dme`

### A.2 History 多 tab strip（匯出 / 列表 / 重播）

- **Where**: `/admin/#/history`
- **Prototype 現況**: `admin-batch1.jsx:218 AdminHistoryPage` 只畫了單一 export 頁，沒畫上方 tab strip
- **目前實作**: 上方已改為 `[PLACEHOLDER] History Tabs`（文字+方框）；互動維持 `EXPORT / LIST / REPLAY`
- **要 Design 補**: `AdminHistoryTabbedPage` artboard — 3-tab strip + 三個 tab content 切換示意
- **Spec 提示**:
  - tab strip 用 `.admin-v2-tabbar` pattern（active state cyan-soft 反白）
  - tab content 三個 mutually-exclusive（其他兩個 `display: none`）

### A.3 Viewer Config tab strip（整頁主題 / 表單欄位）

- **Where**: `/admin/#/viewer-config`
- **Prototype 現況**: 沒畫
- **目前實作**: 上方已改為 `[PLACEHOLDER] Viewer Config Tabs`（文字+方框）；互動維持 `PAGE / FIELDS`
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
- **實作演化**: 中間做過 chip + fp 顯示 → 2026-04-28 user 反饋說「會重複出現 + 移除 @」，又改回 plain input + nickname live-sync 到 preview 左上角；2026-04-30 補充：欄位文案固定「暱稱 / Nickname」
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

4. ✅ **AdminNotificationsPage starred filter + ★ indicator**
   - commit `fe72880`
   - prototype `admin-batch7.jsx:169` 已對齊（★ icon + 「已標記」filter tab）

5. ✅ **AdminPollDeepDivePage 5-KPI tile retrofit**
   - commit `309cd5b`
   - prototype `admin-batch8.jsx:474` 已對齊（總票數 / 參與率 / 持續時間 / 重複指紋 / 作弊嘗試）
   - 「參與率」「作弊嘗試」目前是 placeholder，需要 BE 擴張（audience snapshot endpoint + per-IP 連投追蹤）。已寫進 [`backend-extensions-pending`](./backend-extensions-pending-2026-04-27.md) B8/B9 範圍

6. ✅ **AdminAudiencePage 右側 detail panel**
   - commit `8bef996`
   - prototype `admin-batch7.jsx:723` 已對齊（HIGH RISK chip + 5-rule flag + 近 5 分鐘訊息 + 4 建議動作）
   - 「踢出此場」目前 disabled placeholder（沒 endpoint），其他 3 個 action 都串實 endpoint

7. ✅ **AdminWebhooksPage v2 retrofit**
   - commit `f552a89`（BE + FE 同 commit）
   - prototype `admin-batch6.jsx:6` 已對齊（4-KPI stats / endpoint cards 含 success rate bar / delivery log table / 380px right detail panel 含 event matrix + payload sample + 3 actions）
   - BE 加 `success_count` / `fail_count` / `last_delivery_at` + 100-entry in-memory delivery log + `GET /admin/webhooks/deliveries` endpoint
   - 「暫停 / 啟用」目前 toast 提示「需新 endpoint」（`/admin/webhooks/toggle` 待 BE）；prototype 的 10 個 event keys 只有 3 個 (`on_danmu` / `on_poll_create` / `on_poll_end`) BE 支援，其餘 7 個 UI 標 `is-unsupported` + 「待 BE」tag

---

## TL;DR · 給 Design 的優先序

1. **第 1 批 · A.1-A.6**（6 個沒畫的 artboard）→ 工程在等 reference
2. **第 2 批 · B.1-B.4**（4 個偏離拍板）→ 已 ship，純確認
3. **第 3 批 · C.1-C.7**（7 個 BE 擴張決策）→ 決定 sprint 切片
4. **平行 · D.1-D.2**（mobile / Electron 獨立 form-factor）→ 不阻塞，挑時間做

---

## Design 任務單（可直接派工）

> 來源：本文件 A/B/C/D + 2026-04-29 補充盤點（E/F/G）。
> 欄位定義：P0=本週要補、P1=下個 sprint、P2=排期即可。

| Ticket | 優先級 | 類型 | 頁面/功能 | 預估 | 驗收條件（Design 交付） |
|--------|--------|------|-----------|------|--------------------------|
| DS-001 | P0 | 缺設計 | History tabbed（匯出/列表/重播） | 2-3 hr | 交付 1440 桌機稿，含 tab strip active/inactive + 三種 tab content 切換圖 |
| DS-002 | P0 | 缺設計 | Viewer Config tabbed（整頁主題/表單欄位） | 2-3 hr | 交付 1440 桌機稿，含 2-tab 切換、tab 樣式 token、內容區對齊規則 |
| DS-003 | P0 | 缺設計 + RWD | Admin desktop breakpoint（768/480） | 6-10 hr | 交付 Dashboard/Messages/Polls/History/Broadcast/Widgets 六頁在 768 + 480 版型（共 12 張） |
| DS-004 | P0 | 缺設計 | Viewer effects 參數面板 | 3-4 hr | 交付 dark/light 各 1 張，至少含「彈跳」「閃爍」兩種參數區塊樣式 |
| DS-005 | P1 | 設計拍板 | Setup Wizard（5-step 既有；6-pack vs dynamic） | 1-2 hr | 在稿上明確標註最終 theme pack 策略（固定/動態）與可略過策略 |
| DS-006 | P1 | 設計拍板 | Polls layout（12-col vs master-detail） | 1-2 hr | 產出「採用方案」1 張 + 註記窄屏行為（stack/scroll） |
| DS-007 | P1 | 設計拍板 | Message Detail（full page vs drawer） | 1-2 hr | 明確指定最終形態，並附 interaction spec（開啟/關閉/上下筆） |
| DS-008 | P1 | 設計拍板 | Notifications（2-col vs 3-col detail pane） | 1-2 hr | 明確指定最終欄位結構與 detail pane 必要資訊模組 |
| DS-009 | P1 | 設計拍板 | Audit Log 視覺語義（ACTION/diff/actor/source） | 2-3 hr | 提供 table 欄位規格 + before/after diff 視覺規格 |
| DS-010 | P1 | 設計拍板 | Effects selected 色階、identity input pattern | 1-2 hr | 明確給 token：selected bg/border/text + identity 欄位 pattern（plain/chip） |
| DS-011 | P2 | 獨立 form-factor | Admin Mobile（/admin/mobile）細化 | 2-4 hr | 補互動細節稿（ticker/action grid/空狀態/錯誤狀態） |
| DS-012 | Done | 已交付 | Desktop Tray Popover + Window Picker | 0 hr | 2026-04-30 已落地（工程使用既有 design token；可再補視覺 polish 非阻塞） |

### 任務依賴（給 PM / Design Lead）

| 依賴編號 | 描述 | 受影響 Ticket |
|----------|------|---------------|
| DEP-01 | 是否啟動 BE 擴張（見 §C） | DS-008, DS-009（部分）, DS-005（部分） |
| DEP-02 | 是否接受工程現行偏離（見 §B / §F） | DS-006, DS-007, DS-010 |
| DEP-03 | Desktop admin 斷點策略（sidebar 行為） | DS-003 |

### 建議排程

1. Week 1：DS-001 ~ DS-004（先補缺稿，讓 FE 有 1:1 參考）
2. Week 2：DS-005 ~ DS-010（偏離拍板，避免反覆返工）
3. Week 3+：DS-011 ~ DS-012（獨立 form-factor sprint）

工程目前繼續做的是 **§H.1** 裡 prototype **已完整存在** 的 retrofit（webhooks / audience detail panel / notifications starred / poll deep-dive 5th KPI 等），不會再擅自設計。

---

## 9. Design 回覆 design-handoff-needs-2026-04-28（2026-04-30 補）

> Design 側對本份 doc 的完整回應 + §G ROI bundle 關聯釐清。

### 9.1 §G bundle ↔ 04-28 doc 對應（自我釐清）

| 我剛 ship 的（§G） | 對應這份 doc | 結論 |
|---|---|---|
| G1-G3 · Audit Log（ActorChip / DiffPair / SHA-256 chip） | DS-009 P1 + §F「Audit Log 是否要求回補完整審計視覺語義」 | **DS-009 拍板**：視覺語義已 ship 在 prototype `AdminAuditLogPage`，以 `ActorChip` + `DiffPair` 為最終形態 |
| G10 · Drawer prev/next（K/J/Esc keycaps + counter） | DS-007 P1「Message Detail 保留 drawer 或改回 full page」 | **DS-007 拍板**：**保留 drawer**，不改回 full page；prev/next 用 K/J + counter `N / total`，Esc 關閉，已 ship |
| G11 · About 4 KPI | 04-28 doc 未列 | 純 polish，無衝突 |

### 9.2 P0 四件交付承諾（以 04-28 doc DS-001 ~ DS-004 為準）

| # | 承諾交付 | 預計 |
|---|---|---|
| DS-001 History tabbed | 補 `AdminHistoryTabbedPage` artboard，重用 `.admin-v2-tabbar` token，3 個 tab content 各畫一張示意 | 本週 |
| DS-002 Viewer Config tabbed | 補 `AdminViewerConfigTabbedPage`，2 tab + tab style token + 對齊規則 | 本週（與 DS-001 同批出） |
| DS-003 Admin 768/480 RWD | **先拍板 sidebar 策略**（見 9.3）後動工；本週先交 Dashboard + Messages 共 4 張，其餘 8 張下週 | 分兩批 |
| DS-004 Viewer effect parameters | dark/light × 2 種效果（彈跳 + 閃爍），其餘 6 種效果延後 | 本週 |

### 9.3 Sidebar @ 768 / 480 拍板（DEP-03 解鎖）

- **768px**：sidebar collapse 成 64px icon-only rail，hover 展開成全寬
- **480px**：sidebar 完全收起，改 bottom-tab 4 格（Live / Messages / Polls / More）
- KPI 卡列：1440 = 4-col → 768 = 2-col → 480 = 1-col
- 表格類（messages / history list）：480px 改卡片 stack，不做 horizontal scroll

### 9.4 §F 其餘拍板（直接結案，不另開 ticket）

| 項目 | 拍板結果 |
|---|---|
| DS-006 Polls layout | **接受 master-detail 偏離**，RWD 友善優先 |
| B.2 Effects 8 vs N | **保持固定 8**，自訂上傳走另外的 effect library |
| A.6 / B.4 / DS-010 Effects selected 色階 | **要求回 prototype `cyanSoft` + accent border**，工程需改回 |
| B.3 Identity field | plain input final，文案固定「暱稱 / Nickname」 |
| DS-008 Notifications | 接受 3-col；detail pane 必要模組：actor / source / 時間軸 / 3 actions |
| DS-005 / A.5 Setup Wizard theme pack | 接受 dynamic 4 個，placeholder grid 留位給未來擴張 |
| 已 ship #3 Viewer 字體尺寸 | **保留 user feedback 後尺寸**，prototype 改齊而非工程回退 |

### 9.5 明確不接（劃線）

- **DS-011**（Admin Mobile 細化）— 排到 P2 之後，不在本週 scope
- **§C BE 擴張 7 項** — Design 不拍板 BE sprint；工程先決定切片再回頭問 Design

---

## 10. 工程交付完成記錄（2026-05-04）

> §9 決策的工程 carry-through 已完成。以下為對應落地狀態。

### 10.1 G-bundle 工程落地

| 批次 | Prototype 來源 | 工程落地 | 狀態 |
|---|---|---|---|
| **G1** · ActorChip | `admin-batch1.jsx` → `ActorChip` | `admin-audit.js` `_actorChipHtml()` — 22×22 avatar circle（`--hud-cyan-soft` bg + `--color-primary` text）+ actor name | ✅ Done |
| **G2** · DiffPair | `admin-batch1.jsx` → `DiffPair` | `admin-audit.js` `_diffPairHtml()` — before 顯示 `--hud-crimson`、after 顯示 `--hud-lime`、僅 after 則 lime-only | ✅ Done |
| **G3** · SHA-256 chip | `admin-batch1.jsx` header chip | `admin-audit.js` `buildSection()` toolbar 尾端加 `<span class="admin-audit-hash-chip">SHA-256</span>`（mono、muted、opacity 0.55） | ✅ Done |
| **G10** · Drawer counter + keycaps | `admin-batch7.jsx` header | `admin-message-drawer.js` `_renderBody()` 加 `N / total` counter（來源 `AdminLiveFeed.getEntries()`）+ `K` / `J` / `Esc` keycap 標示 | ✅ Done |
| **G11** · About KPI | `admin-batch9.jsx` | `style.css` `.admin-about-stat .v` font-size 13 → 14px；license amber 色早已是 neutral（無需動） | ✅ Done |

### 10.2 §9.4 Effects selected 色階修正

| CSS Rule | 舊值 | 新值 |
|---|---|---|
| `.hud-effect-card.is-selected { background }` | `color-mix(in srgb, var(--hud-cyan-soft) 55%, var(--color-bg-elevated))` | `var(--hud-cyan-soft)` |

> 對應 §9.4「A.6 / B.4 / DS-010 Effects selected 色階 → 要求回 prototype `cyanSoft` + accent border」。`border-color: var(--color-primary)` 已在原規則保留，無需另改。

### 10.3 新增 CSS classes

| Class | 用途 |
|---|---|
| `.admin-audit-hash-chip` | SHA-256 chip（toolbar 尾端） |
| `.admin-audit-actor-chip` / `.admin-audit-actor-av` | ActorChip avatar + name |
| `.admin-audit-diff` / `.admin-audit-diff-b` / `.admin-audit-diff-a` | DiffPair crimson/lime |
| `.admin-audit-meta-extra` | diff 之外的 meta JSON（小字 code） |
| `.admin-msgd-counter` | Drawer `N / total` counter |
| `.admin-msgd-keycap` | K / J / Esc keycap 外框 |
