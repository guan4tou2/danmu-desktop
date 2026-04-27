# Design v2 Prototype 缺項清單 · 2026-04-27

> 工程進度盤點 + 需要 Design 補的 prototype。本 doc 跟 [`design-v2-redundancy-audit-2026-04-27.md`](./design-v2-redundancy-audit-2026-04-27.md) 是一對：audit 解決「太多冗餘」，這份解決「還有什麼沒做 + Design 該補什麼」。
>
> Branch `claude/design-v2-retrofit` @ commit `5b01843`（VPS 已部署）。

---

## A. 已 ship 的 prototype（27 個 artboard）

不重複列舉。對照表見：所有 `docs/designs/design-v2/components/admin-*.jsx` 中的 page 元件，扣掉 §B 的 17 項。

---

## B. 還沒 ship 的 prototype（17 個 artboard）

| # | 元件 | 來源 bundle | Phase | Backend 依賴 | 工程預估 |
|---|------|------------|-------|-------------|----------|
| 1 | **AdminAboutPage** | V1Z4 batch9 | 2 P0 | 無 | 0.5 hr |
| 2 | **AdminOnboardingTour** (Setup Wizard 4 步驟) | 2b76A6ot batch3 / V1Z4 batch9 重申 | 2 P0 | 無（用既有 settings API） | 2-3 hr |
| 3 | **AdminPollDeepDivePage** | V1Z4 batch7 | 2 P0 | 無（指紋 + poll record 都已存在） | 2-3 hr |
| 4 | AdminMessageDetailPage | V1Z4 batch7 #2 | 3 P1 | 無（mock 即可） | 1.5 hr |
| 5 | AdminNotificationsPage | V1Z4 batch7 #1 | 3 P1 | **要新 alert source schema** | 4-6 hr (FE) + 4-8 hr (BE) |
| 6 | AdminAuditLogPage | 2b76A6ot batch1 | 3 P1 | **要新 audit table**（fire_token 已有 in-mem audit，要改持久化） | 3-5 hr |
| 7 | AdminSessionsPage + SessionDetail | V1Z4 batch8 #1 | 3 P2 | **要新 session entity**（目前訊息只有 ts，沒 session_id） | 8-12 hr |
| 8 | AdminSearchPage（跨場次） | V1Z4 batch7 #3 | 3 P2 | 跟 #7 連動（沒 session 切不出範圍） | 跟 #7 一起 |
| 9 | AdminAudiencePage | V1Z4 batch7 #4 | 3 P3 | 跟 history 整併要一起想 | 3-4 hr |
| 10 | AdminMobilePage | V1Z4 batch8 #3 | 3 P3 | 無（純 RWD） | 4-6 hr |
| 11 | AdminWcagPage + AdminDashboardEN（EN sweep） | 2b76A6ot batch5 | 3 P2 | 無（i18n strings） | 6-10 hr |
| 12 | AdminTokensPage（per-integration ACL） | 2b76A6ot batch6 | 3 P2 | **要新 token table**（目前只有 Fire Token 單一 shared bearer） | 6-8 hr (FE) + 4-6 hr (BE) |
| 13 | AdminWebhooksPage v2 retrofit | 2b76A6ot batch6 | 3 P2 | 無（後端已有 webhooks model） | 3-4 hr |
| 14 | ViewerBanned / ViewerPollThankYou | 2b76A6ot batch4 | 3 P2 | 無 | 1-2 hr |
| 15 | OverlayPollLive / OverlayResultCelebration | 2b76A6ot batch4 | 3 P2 | 無 | 2-3 hr |
| 16 | OverlayIdleQR (full state machine) | 2b76A6ot batch4 | 3 P3 | 無（idle/connecting/disconnected dot 已有） | 1-2 hr |
| 17 | DesktopTrayPopover / WindowPicker | V1Z4 batch9 #11-12 | 3 P3 | Electron 端，獨立 sprint | 6-10 hr |

**合計工程量**：純前端可立刻做的 ~= 30-40 hr；含 backend 變動的（#5/#6/#7/#12）~= 60-90 hr。

---

## C. 需要 Design 補的 prototype（不阻塞工程）

### C.1 已實作但 prototype 沒對應 artboard
> 這些工程做完了，prototype 沒畫過 — Design 拍板後我直接做的，建議補 artboard 讓未來 onboarding/重構有 reference。

1. **History 2-tab strip**（匯出 / 重播）
   - 現實作：`#/history` 上方 2-tab，CSS-driven 切 sec-history vs replay-v2-section
   - 建議 artboard：`AdminHistoryTabbedPage` — 雙 tab strip + 兩個 tab content 切換示意

2. **Viewer Config 2-tab strip**（整頁主題 / 表單欄位）
   - 現實作：`#/viewer-config` 上方 2-tab，切 sec-viewer-theme vs admin-display-v2-page
   - 建議 artboard：`AdminViewerConfigTabbedPage` — 雙 tab strip + 兩個 tab content 切換示意

3. **Identity Chip in Viewer**（@nick · fp:xxxxxxxx 即時編輯）
   - 已實作（commit `1510c04`）；prototype 有 IdentityChip 元件但沒整合到 ViewerCore artboard 顯示

### C.2 已實作但跟 prototype 偏離的
> 這些有 prototype，但實作跟 artboard 細節不同 — 要 Design 確認要對齊還是改 prototype。

1. **AdminPollsPage 的 master-detail 格局**
   - prototype 是 12-col（active poll 7 + builder 5），現實作走 master-detail（左清單 + 右編輯）
   - 工程選擇是 RWD 友善優先，需要 Design 看一下這個偏離 OK 嗎

2. **Effects 8-card grid 是否要 dynamic 數量**
   - 現實作 `已選 N / 8`，但 prototype 寫死 8 張
   - 是要保持 8 張固定？還是支援自訂上傳後變 N 張？

### C.3 未來再決定的
> Design 不一定要立刻畫，等 §B 的 P1/P2 拍板後再說。

- 若 §B #7 Sessions entity 要做 → 需要 session timeline / spark line 的細節 spec
- 若 §B #12 Tokens 要做 → 需要 per-token ACL matrix 的 artboard（不只是清單）

---

## D. 我這邊接下來要做的（Phase 2 P0）

依 audit §8 拍板順序：

1. **AdminAboutPage**（0.5 hr） — 清掉 backlog，sidebar 加新 nav `about`
2. **AdminOnboardingTour / Setup Wizard**（2-3 hr） — 首次登入 4 步驟（密碼 / logo / theme / lang）
3. **AdminPollDeepDivePage**（2-3 hr） — 投票深度分析（指紋分布 / 時間軸 / 地區），sidebar 不加新 nav，從 polls 頁面 deeplink

做完後 sidebar 會從 17 → 18（+About）+ Poll Deep-Dive deeplink。Setup Wizard 是 modal/overlay，不佔 sidebar slot。

---

## E. Open Qs for Design

1. **About page 的內容**：版本 / 授權 / shortcuts cheat sheet / 開源資訊 / 致謝 — V1Z4 prototype 已涵蓋全部，要不要砍 sections？
2. **Setup Wizard 觸發條件**：單純 first-run（從 admin password 沒設過判斷）？還是 admin 可手動再開（`/setup` route）？
3. **Poll Deep-Dive 進入點**：單一 poll row 點「📊」icon 開？還是 master-detail 右側多一個「Deep」tab？
4. **§C.2.1 Polls master-detail 偏離**：保持現狀還是改回 12-col？
5. **§C.2.2 Effects 8-card vs N-card**：固定 8 還是動態？

不阻塞 Phase 2 P0 開工。Q1-Q3 我會做合理預設（all 3 sections / 用 first-run 判斷 / 從 row 上的 icon 開），Design 之後再 reply 我來調。
