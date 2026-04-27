# Design v2 Prototype 缺項清單 · 2026-04-27

> 工程進度盤點 + 需要 Design 補的 prototype。本 doc 跟 [`design-v2-redundancy-audit-2026-04-27.md`](./design-v2-redundancy-audit-2026-04-27.md) 是一對：audit 解決「太多冗餘」，這份解決「還有什麼沒做 + Design 該補什麼」。
>
> Branch `claude/design-v2-retrofit` @ commit `5b01843`（VPS 已部署）。

---

## A. 已 ship 的 prototype（27 個 artboard）

不重複列舉。對照表見：所有 `docs/designs/design-v2/components/admin-*.jsx` 中的 page 元件，扣掉 §B 的 17 項。

---

## B. 還沒 ship 的 prototype

> 2026-04-27 update：拆三組：**SHIP**（純 FE 照抄、現在做）/ **WAIT**（要 BE 擴張，等 Design buy-in，見 [`backend-extensions-pending`](./backend-extensions-pending-2026-04-27.md)）/ **CUT**（產品決策不做，見 [`scope-out`](./scope-out-2026-04-27.md)）。

### B.1 SHIP — 純 FE 1:1 照抄（現在做）

| # | 元件 | 來源 | 工程 |
|---|------|------|------|
| 1 | **AdminAboutPage** | V1Z4 batch9 | ✅ ship 完 (`e60a9a4`) — 待 G11 polish |
| 2 | **AdminOnboardingTour / Setup Wizard** | 2b76A6ot batch3 | 🟡 ship 簡化版 (`0701799`) — 5 步剩 3 步 |
| 3 | **AdminPollDeepDivePage** | V1Z4 batch8 | 🟡 ship 4/6 區塊 (`d71af67`) |
| 4 | **AdminMessageDetailPage** | V1Z4 batch7 | 🟡 ship overlay drawer 形式 (`e4919af`) |
| 5 | **AdminNotificationsPage** | V1Z4 batch7 | 🟡 ship 2-col (`fdeeb34`) — detail panel 等 B1 buy-in |
| 6 | **AdminAuditLogPage** | 2b76A6ot batch1 | 🟡 ship simplified (`262666f`) — ACTION/diff 等 B5/B6 buy-in |
| 14 | ViewerBanned / ViewerPollThankYou | 2b76A6ot batch4 | 🚧 **下一輪做** — 1-2 hr 純 FE 照抄 |
| 15 | OverlayPollLive / OverlayResultCelebration | 2b76A6ot batch4 | 🚧 **下一輪做** — 2-3 hr 純 FE 照抄 |
| 16 | OverlayIdleQR full state machine | 2b76A6ot batch4 | 🚧 可做 — 1-2 hr |
| 9 | AdminAudiencePage | V1Z4 batch7 #4 | 🚧 可做 — **去掉「出席場次數」column** 後 3 hr 純 FE |
| 10 | AdminMobilePage | V1Z4 batch8 #3 | 🚧 可做 — 4-6 hr 純 RWD |

### B.2 WAIT — Design 確認 BE 擴張要不要做（見 [backend-extensions-pending](./backend-extensions-pending-2026-04-27.md)）

| # | 元件 | 缺什麼 BE |
|---|------|-----------|
| 11 | AdminWcagPage + AdminDashboardEN（EN sweep） | i18n strings 全套（純 FE 但是工程量大，建議獨立 sprint） |
| 12 | AdminTokensPage（per-integration ACL） | **要新 token table**（目前只有 Fire Token 單一 shared bearer） |
| 13 | AdminWebhooksPage v2 retrofit | 後端 OK，純 FE 重畫，3-4 hr |
| 17 | DesktopTrayPopover / WindowPicker | Electron 端，獨立 sprint，6-10 hr |

### B.3 CUT — scope-out（**永遠不做**，見 [scope-out](./scope-out-2026-04-27.md)）

| # | 元件 | 原因 |
|---|------|------|
| 7 | AdminSessionsPage + SessionDetail | sessions entity scope-out |
| 8 | AdminSearchPage（跨場次） | sessions scope-out → 改成 #/history 內的全文搜尋 |

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

---

## F. Alignment Audit（Phase 2 P0 + P1 已 ship 的 6 個 page · 2026-04-27 補）

> 使用者問：「目前都有跟 prototype 對齊嗎？」回答：**不完全**。逐項列出已 ship 工作 vs prototype 的差距，方便 Design 挑要不要回頭補。
>
> Legend：✅ 完全對齊 / 🟡 partial（>=70%）/ ❌ deviated（<70% 或關鍵區塊缺）

### F.1 Phase 1 整併（commit `d208e9b`）— ✅ 跟 Design reply 對齊
- Sidebar 20 → 17 row，三個整併動作都符合 [audit §8](./design-v2-redundancy-audit-2026-04-27.md#8-design-回覆-2026-04-27) 拍板
- ⚠️ Design 還沒畫 history 2-tab artboard / viewer-config 2-tab artboard — 等 Design 補

### F.2 AdminAboutPage（commit `e60a9a4`）— 🟡 partial
| 區塊 | Prototype | 實作 | 對齊 |
|------|-----------|------|------|
| 版本卡 (icon + name + tag + build) | ✓ | ✓ | ✅ |
| 4 KPI tile 內容 | 已是最新版 / 上次檢查更新 / Server uptime / 授權 (Pro · 2026-08) | UPTIME / CHANNEL / PLATFORM / LICENSE (MIT) | ❌ 4 個 tile 都不同 |
| License 卡 (Pro Edition · 6 row) | ✓ 完整 | ❌ 砍掉 | 開源不適用 |
| 第三方 OSS Notices | ✓ 7 deps + 完整清單 | ✓ 7 deps + pyproject.toml 連結 | ✅ |
| Changelog（4 版 + tag） | ✓ feat/fix/perf/breaking | ✓ feat/fix（沒 perf 範例） | 🟡 |
| 動作按鈕 | 檢查更新 + 複製版本 | 複製版本 + Setup Wizard + GitHub Releases | 🟡 |

### F.3 AdminSetupWizard（commit `0701799`）— ❌ deviated
| Step | Prototype | 實作 | 狀態 |
|------|-----------|------|------|
| 1 設密碼 | ✓ 表單 + 強度條 + reset hint | ❌ **砍掉** | 缺 |
| 2 上傳 Logo | ✓ dropzone + 預覽 | ❌ **砍掉** | 缺 backend endpoint |
| 3 主題包 | ✓ 6 packs 寫死 | ✓ 4 packs 動態（從 /admin/themes） | 🟡 |
| 4 預設語言 | ✓ 4 lang + viewer 切語 | ✓ 同 | ✅ |
| 5 完成 | ✓ summary | ✓ summary | ✅ |

→ **5 步剩 3 步**。Design 沒拍板過砍法（自行決定）。

### F.4 AdminPollDeepDivePage（commit `d71af67`）— ❌ deviated
| 區塊 | Prototype | 實作 | 對齊 |
|------|-----------|------|------|
| 5 KPI tile | 總票數 / 參與率 / 持續時間 / 重複指紋 / 作弊嘗試 | 4 KPI: 總票數 / 選項數 / 指紋去重 / 狀態 | ❌ 內容全不同 |
| Result bars | ✓ | ✓ | ✅ |
| Sentiment +47 | ✓ | ❌ | 缺（需要 sentiment 計算） |
| vs 上次 (Q4) ↑+12 | ✓ | ❌ | 缺（需要跨 poll 比較） |
| Time histogram (18-min) | ✓ | ❌ placeholder | 缺 per-vote ts |
| Geo 4-row + bars | ✓ | ❌ placeholder | 缺 GeoIP |
| 跨選項地區交叉 | ✓ 3-row matrix | ❌ | 缺 |
| Integrity 5-row | 指紋去重 / 同 IP / Bot / Extension / VPN | 4-row（指紋去重 / Rate limit / X-Forwarded-For / Bot） | 🟡 |
| Actions | CSV / 分享連結 / 重啟題目 | CSV / 分享連結 / 返回 | 🟡（少「重啟」） |

→ **6 區塊只實作 4**。

### F.5 Message Detail Drawer（commit `e4919af`）— 🟡 form deviated
| 項目 | Prototype | 實作 |
|------|-----------|------|
| Form factor | full route page (list-on-left + drawer-on-right) | slide-in overlay drawer |
| 訊息 bubble | ✓ avatar + nick + fp + ts + status | ✓ |
| 5 個 action | 置頂 / 遮罩 / 隱藏 / 封禁指紋 / 回覆 overlay | 5 個都在 |
| Action 是否有實 endpoint | (prototype mock) | **只有「封禁指紋」串實，其他 4 個 toast「v5.3 待補」** |
| FP stats 3 KPI | 本場 / 歷史 / 違規 | ✓（追蹤總數來自 /admin/fingerprints） |
| 同指紋最近訊息 | ✓ 5 row | ✓（從 in-mem live-feed 取） |
| BAN 預覽 | ✓ | ✓ |
| 上一筆 / 下一筆 navigation | ✓ | ❌ 沒做 |

### F.6 Notifications Inbox（commit `fdeeb34`）— ❌ deviated
| 區塊 | Prototype | 實作 | 對齊 |
|------|-----------|------|------|
| Layout | 3-col（filters / list / detail） | **2-col**（filters / list） | ❌ 缺 detail 面板 |
| Sources | Backup / Webhooks / Fire Token / Moderation / System (5 個) | Rate Limit / Fire Token / Moderation (3 個) | 🟡 缺 Backup / Webhooks / System |
| Severity | crit / warn / info / good | ✓ 4 個 | ✅ |
| Read state | ✓ | ✓ | ✅ |
| Starred | ✓ ★ icon | ❌ 沒做 | 缺 |
| Archived | ✓ | ✓ | ✅ |
| Right detail（事件鏈 / 影響範圍 / 建議動作 / ① ② ③ buttons） | ✓ 完整 | ❌ 完全沒做 | 缺 |
| Per-item actions | 動態（"從 D-16 還原"等 context-aware） | 固定（已讀 / 封存） | 🟡 |

### F.7 Audit Log（commit `262666f`）— ❌ deviated
> 對照 batch1 AdminAuditLogPage prototype：

| 區塊 | Prototype | 實作 | 對齊 |
|------|-----------|------|------|
| Filter sidebar | 動作 / 操作者 / 時段 + CSV button | **來源** + 提示 box + JSON button | ❌ 缺 動作 / 操作者 / 時段 |
| 表格 col 1 (時間) | ✓ | ✓ | ✅ |
| 表格 col 2 | **動作** chip（UPDATE/CREATE/BLOCK… 配色） | **來源** chip | ❌ 不同維度 |
| 表格 col 3 | 操作者 + avatar + 來源 (web/desktop) | 純文字「執行者」 | ❌ 缺 avatar 圓圈、缺 web/desktop 來源 |
| 表格 col 4 (target) | ✓「速率限制 · FIRE」這種 human label | 原始 kind string | ❌ 沒做 human label mapping |
| 表格 col 5 | **before → after** diff（紅 → 綠） | META JSON dump | ❌ 缺 diff 視覺 |
| Live indicator | ● 即時 | ❌ 30s polling | 🟡 |
| SHA-256 簽章 | "保留 90 天 · 每筆 SHA-256 簽章" | ❌ 沒做簽章 | 缺（合規場景才需要） |
| 保留期 | 90 天 | 2 MiB rotation（時間不固定） | ❌ 不同 |

→ Audit Log 對齊度最低，主要差距：缺**操作者 multi-actor**（單 admin / kevin 兩人）、缺**動作分類**（UPDATE/CREATE…）、缺 **before/after diff**。這些都需要在 audit_log.append() 時帶結構化欄位（不是 free-form meta dict）。

### F.8 ViewerBanned + ViewerPollThankYou（commit `db5b09c`）— 🟡 partial trigger
| 項目 | Prototype | 實作 | 對齊 |
|------|-----------|------|------|
| ViewerBanned 視覺 | red HUD frame + slash icon + identifier + tip | ✓ 1:1 抄 | ✅ |
| ViewerPollThankYou 視覺 | check + recap + live count + 回到聊天 | ✓ 1:1 抄（live count tile 沒做即時計算） | 🟡 |
| Banned trigger | 服務器決定後 push | ✓ /fire 403 + ban/block 關鍵字 → 自動觸發 | ✅ |
| ThankYou trigger | viewer 投完票 push | 🟡 純 FE heuristic：fire 成功 + 文字單字母 A-Z | 🟡（false positive 可能） |
| URL preview | — | ✓ `?state=banned` / `?state=thankyou` | ✅ |

### F.9 OverlayPollLive + OverlayResultCelebration（commit `db5b09c`）— ✅ 對齊
| 項目 | Prototype | 實作 |
|------|-----------|------|
| Active panel 中央 76% 寬 | ✓ | ✓ |
| 4 option bars + LEADING chip | ✓ | ✓（含色帶 + glow + 動畫） |
| 倒數計時 + decay bar | ✓ | ✓（從 started_at + time_limit_seconds 算） |
| QR badge + 於手機投票 | ✓ | ✓（badge 是 placeholder 文字「QR」，沒嵌實際 QR 圖） |
| Celebration 24 confetti | ✓ | ✓ |
| 大寫贏家字母 + 動畫 pop | ✓ | ✓ |
| 12s 自動消失 | ✓ | ✓ |
| 取代既有 280px 角落 panel | — | ✓ |

→ **唯一 gap**：QR 沒嵌真 QR 圖（純文字 placeholder），prototype 也只是文字示意。可後補 qrcode lib。

### F.10 AdminAudiencePage（commit `db5b09c`）— 🟡 simplified per scope-out
| 區塊 | Prototype | 實作 | 對齊 |
|------|-----------|------|------|
| 5 KPI tile | 當前連線 / 5min 活躍 / 訊息/min / 高風險 / 已封禁 | 當前指紋 / 5min 活躍 / 總訊息 / 已標記 / 已封禁 | 🟡 |
| 7-col 列表 | avatar / nick·fp / ip+geo / ua / joined / msgs / score / status / actions | avatar / nick·fp / ip+ua / joined / msgs / status / actions | 🟡 砍 GEO + SCORE |
| 高風險右側 detail panel | ✓（5-rule flag + 近 5 分鐘訊息 + 4 建議動作） | ❌ 完全沒做 | 缺 |
| Filter chips | 全部 / 高風險 / 重複指紋 / extension | 全部 / 標記 | 🟡 |
| ban action | ✓ | ✓（接 /admin/live/block） | ✅ |
| kick action | ✓ | ❌ 沒做 | 缺（沒 endpoint） |

→ **最大 gap**：高風險右側 detail panel 沒做。其他依 [scope-out](./scope-out-2026-04-27.md) 砍掉的（geo / 出席場次 / score）已標清楚。

### F.11 AdminMobilePage（commit `c29743c`）— ✅ 對齊
| 項目 | Prototype | 實作 |
|------|-----------|------|
| 375x812 phone frame | ✓ | ✓（桌面預覽用 rounded + shadow） |
| iOS 狀態列 | ✓ | ✓ |
| App header | ✓ | ✓（real time 連線/elapsed） |
| Live ticker 3 row | ✓（mock data） | ✓（從 in-mem live-feed entries） |
| 4 big actions | 啟動投票 / 釘選 / 暫停 / 清空 | ✓（啟動投票 + 暫停 真 endpoint，釘選 + 清空 標 v5.3 待補） |
| 3 KPI tile | ✓ | ✓（從 /admin/metrics 拉） |
| 4 quick toggles | ✓ | 🟡 純 client side（持久化要新 endpoint） |
| 5-tab bottom bar | ✓ | ✓（連到 dashboard / polls / messages / notifications / about） |

→ **gap**：toggles client-side only（沒持久化）+ 釘選 / 清空螢幕 沒 backend endpoint。

### F.12 Sessions design doc — ✅ 對齊（沒實作）
spec-only，等 Design 拍板 §7 三題後從 S1 開工。

---

## G. 修整 vs 維持（status snapshot）

| # | 修整項目 | 狀態 | Commit |
|---|---------|------|--------|
| G1 | Audit Log 加 ACTION chip 配色 | 🟡 移到 [backend-pending B5](./backend-extensions-pending-2026-04-27.md) | — |
| G2 | Audit Log 加 before/after diff | 🟡 移到 [backend-pending B6](./backend-extensions-pending-2026-04-27.md) | — |
| G3 | Audit Log 加操作者 avatar + web/desktop source | 🟡 移到 [backend-pending B7](./backend-extensions-pending-2026-04-27.md) | — |
| G4 | Notifications 加右側 detail 面板 | 🟡 移到 [backend-pending B1](./backend-extensions-pending-2026-04-27.md) | — |
| G5 | Notifications 加 Webhooks / System 來源 | 🟡 移到 [backend-pending B2](./backend-extensions-pending-2026-04-27.md) | — |
| G6 | Setup Wizard 補密碼 step | 🟡 移到 [backend-pending B3](./backend-extensions-pending-2026-04-27.md) | — |
| G7 | Setup Wizard 補 Logo step | 🟡 移到 [backend-pending B4](./backend-extensions-pending-2026-04-27.md) | — |
| G8 | Poll Deep-Dive 加 Sentiment Index | ✅ **shipped** | `0aea208` |
| G9 | Poll Deep-Dive 加 vs 上次 Δ | 🟡 移到 [backend-pending B9](./backend-extensions-pending-2026-04-27.md) | — |
| G10 | Message Drawer 加 上一筆 / 下一筆 | ✅ **shipped** | `0aea208` |
| G11 | About 改 4 KPI tile 內容 + 檢查更新 button | ✅ **shipped** | `0aea208` |

**這輪純 FE 對齊工作完成**：G8 + G10 + G11 都已 ship，把 About / Drawer / Poll Deep-Dive 對齊度拉高到 ~80%。

**剩下要 BE 擴張的（G1-G7、G9）** 等 Design 在 [backend-extensions-pending](./backend-extensions-pending-2026-04-27.md) 表格圈要做哪幾個。

---

## H. 還沒實作的 prototype（簡表）

| 元件 | Bundle | 狀態 | 備註 |
|------|--------|------|------|
| OverlayIdleQR full state machine | batch4 | 🟡 部分（idle/connecting/disconnected dot 已有） | full QR overlay 1-2 hr 可補 |
| AdminWcagPage + AdminDashboardEN | batch5 | ❌ 沒做 | EN i18n 大工程 |
| AdminTokensPage（per-integration ACL） | batch6 | ❌ 沒做 | 要新 token table，已標 backend-pending B12 |
| AdminWebhooksPage v2 retrofit | batch6 | ❌ 沒做 | 純 FE，3-4 hr |
| DesktopTrayPopover / WindowPicker | batch9 | ❌ 沒做 | Electron 端，獨立 sprint |
| AdminSessionsPage / SessionDetail | batch8 | ❌ scope-out | sessions entity 不做 |
| AdminSearchPage（跨場次） | batch7 | ❌ scope-out | sessions 連動 |
