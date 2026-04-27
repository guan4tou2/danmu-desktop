# Design v2 冗餘盤點 · 2026-04-27

> 觸發：使用者在收到 bundle `V1Z4ZqsxRyVlr54pzTNsGA`（12 個新 artboard）後指示「**仔細對齊並且檢查是否有多餘設計**」。
> 在實作 V1Z4 之前，先做一次 codebase 盤點，回報目前已長出多少 surface area、哪些可能重疊或孤立，再請 Design 確認優先順序。
>
> 目的：避免 sidebar 一直膨脹。每收到一個 bundle 就無腦塞 nav 進 sidebar，導致已經有 20 + 1 個 route，認知成本失控。

---

## 1. Sidebar 現況（v5.2 Sprint 2 ship 完）

```
總覽
  ◉ 控制台          dashboard
  ≡ 訊息紀錄        messages       sec-live-feed
  ↳ 時間軸匯出      history        sec-history
  ▶ 歷史重播        replay         (own page: replay-v2-section)
互動
  ◈ 投票            polls          sec-polls
  ⬚ Overlay Widgets widgets        sec-widgets
  ❖ 風格主題包      themes         sec-themes
  ◐ 顯示設定        display        sec-color/opacity/fontsize/speed/fontfamily/layout
  ◍ 觀眾頁主題      viewer-theme   sec-viewer-theme
  ◰ 素材庫          assets         sec-assets-overview/emojis/stickers/sounds
  ⌨ 整合            integrations   sec-extensions-overview
    ⚿ Fire Token   firetoken      sec-firetoken-overview     ← Sprint 2 我自己加的
審核
  ⊘ 敏感字 & 黑名單 moderation     sec-blacklist/filters
  ◑ 速率限制        ratelimit      sec-ratelimit
設定
  ✦ 效果庫 .dme    effects        sec-effects/effects-mgmt
  ⬢ 伺服器插件     plugins        sec-plugins
  ⌂ 字型管理       fonts          sec-fonts
  ⚙ 系統 & 指紋    system         sec-system-overview/scheduler/webhooks/fingerprints
  ⛨ 安全           security       sec-security/ws-auth
  ⤓ 備份 & 匯出    backup         sec-backup
topbar
  ● BROADCASTING   broadcast      (own page: broadcast-page)
```

**總計：20 個 sidebar route + 1 個 topbar route + Fire Token sub-row = 21 個可達頁面。**

對比原版 Design v2 拍板（v5.0.0 sprint 起點）大約是 **11 個主要 nav slot**。一個半月內 sidebar 接近翻倍。

---

## 2. 重疊或可能合併的概念

### 2.1 「歷史 / 過往訊息」三條路 ⚠️
| nav | route | 真實意義 |
|-----|-------|----------|
| 訊息紀錄 | `messages` | 即時訊息 feed（live filter / pause / 全文搜尋） |
| 時間軸匯出 | `history` | 過去訊息匯出 CSV/JSON、選日期範圍 |
| 歷史重播 | `replay` | 把過去訊息「重新打到 overlay」 |

三條路在使用者腦中是同一件事：「我要看過去的訊息」。實際差異只在 **動詞**（看 / 匯出 / 重播）。

**建議：合併成單一 `history` 頁，把 messages（即時 feed）獨立留著，把 export + replay 變成同一頁的兩個 tab。** 這樣 sidebar -1 row。

### 2.2 「外觀設定」三條路 ⚠️
| nav | route | 範圍 |
|-----|-------|------|
| 風格主題包 | `themes` | overlay 上的彈幕（顏色 / 字型 / 動畫）整包預設 |
| 顯示設定 | `display` | 觀眾可在 viewer 自訂的欄位（顏色 / 透明度 / 字型 / 速度 / 字型家族 / layout）的 admin 端管理 |
| 觀眾頁主題 | `viewer-theme` | viewer 整頁背景 / hero 配色（Midnight / Daylight / Cinema / Retro） |

三個都是「外觀」，但分成 (a) overlay 彈幕、(b) viewer 表單、(c) viewer 整頁。對使用者來說邊界模糊。

**建議：改成 1 個 `appearance` route + 內部 3 個 tab（Overlay 彈幕 / Viewer 表單 / Viewer 整頁），sidebar -2 row。**

### 2.3 整合 + Fire Token sub-row ⚠️（這個 Sprint 2 的我自己造的）
原本 `integrations` 頁裡 Slido card 有 inline 的 Fire Token UI。Sprint 2 我又在 sidebar 加一個 sub-row `firetoken`，內容是 token + 24h chart + audit + IP table。

兩處都對同一個 token 操作。

**建議：移除 sidebar 的 Fire Token sub-row，把 integrations 頁面的「詳細統計 →」deeplink 留著就好。** firetoken page 的 deep stats 本來就只是按需查看。sidebar -1 row。

### 2.4 系統 vs 安全 vs 備份 vs 速率 ❓
這四個都偏「運維」性質，目前各自獨立 nav。看起來分得清楚（系統=日常運轉、安全=auth、備份=資料、速率=反刷屏），但 V1Z4 又新增了「Sessions / Notifications / Audit」這類橫切的觀測頁，會更亂。

**建議：等 V1Z4 那批落地時一起重整成「運維」分組。目前不動。**

---

## 3. 孤立 / 不在 sections array 但有頁的 route（已驗證 OK，記錄而已）

| route | sections | 真相 |
|-------|----------|------|
| dashboard | [] | 走 `data-route-view="dashboard"`，不是 sec- 系統 |
| replay | [] | `admin-replay.js` 自管 visibility（用 `replay-v2-section` 監聽 hashchange） |
| broadcast | [] | `admin-broadcast.js` 自管 visibility（用 `broadcast-page` 監聽 hashchange） |

不算冗餘，是兩種 page lifecycle pattern 並存（sec-* 集中切換 + 自管 hashchange）。**建議統一**到 sec- pattern 或全部走自管 hashchange，但這是大重構，不在這輪 scope。

---

## 4. V1Z4 bundle (12 新 artboard) 是否真的全要做？

bundle 內容（已 sync 到 `docs/designs/design-v2/components/admin-batch7-9.jsx`）：

### Batch 7 (operator inbox + investigative)
1. **AdminNotificationsPage 通知中心** — alert 收件匣（crit/warn/info/good 嚴重度、按來源 filter、starred / archived）
2. **Message Detail Drawer** — 點訊息 row 開側欄（指紋 / IP / UA / 同 fp 歷史 / actions）
3. **Cross-session Search** — 跨場次全文搜尋
4. **Audience List 觀眾列表** — 按指紋 aggregate 觀眾 + 訊息數 / 國家 / 上線時長

### Batch 8 (historical analysis + mobile)
5. **Sessions List 場次列表** — 過去 30 天場次 + 每場 spark line
6. **Session Detail (timeline replay)** — 單一場次完整時間軸 + 訊息流回放
7. **Poll Deep-Dive** — 單一投票的指紋分布 / 時間軸 / 地區
8. **Mobile Admin** — host 用手機站台時的精簡 admin

### Batch 9 (onboarding + about + desktop extras)
9. **Onboarding (admin Setup Wizard)** — 4 步驟首次登入精靈（密碼 / logo / theme / lang）
10. **About** — 版本資訊 / 開源資訊 / shortcuts cheat sheet
11. **Desktop Tray Popover** — Electron tray 點開的迷你控制面板
12. **Desktop Window Picker** — Electron 多 overlay window 管理

### 評估

| 類別 | 可行性 | 是否該做 |
|------|--------|----------|
| 1, 2, 3 通知 / 訊息 detail / 跨場次搜尋 | 後端要新表 + WS event channel | 🟡 需要 backend deep dive，先做 mock UI 沒意義 |
| 4 觀眾列表 | 已有 fingerprint 統計，可從 fingerprints 頁擴展 | 🟢 可做，但跟 §2.1 history 整併一起想 |
| 5, 6 sessions list + detail | 我們**目前沒有「場次」這個 entity** — 訊息只有時間，沒有 session_id | 🔴 需要先定義 session 才能做 |
| 7 poll deep-dive | 已有 polls，數據幾乎都在了 | 🟢 可做 |
| 8 mobile admin | 目前 admin 已 RWD，但沒有手機專屬 UI | 🟡 nice to have，不是 P0 |
| 9 setup wizard | bundle 2b76A6ot batch3 已列入 deferred | 🟢 已知 backlog，可做 |
| 10 about | 1 個 static page，半小時的事 | 🟢 可做 |
| 11, 12 desktop tray / window picker | Electron 端，不是 server admin | 🟡 範圍切換到 desktop app，獨立 sprint |

**直接 implement 全 12 個 ≈ 8–16 hr backend + frontend，且部份需要 backend schema 變動。**

---

## 5. 給 Design 的問題（請拍板）

### A. Sidebar 整併（建議在實作 V1Z4 之前先做）
提案把 sidebar 從 20 縮回 ~14：
- [ ] 訊息紀錄 / 時間軸匯出 / 歷史重播 → 合併成 `history`（保留 messages 即時串為單獨頁）
- [ ] 風格主題包 / 顯示設定 / 觀眾頁主題 → 合併成 `appearance`（內部 3 tab）
- [ ] Fire Token sub-row 移除（保留 integrations 頁的 deeplink）

要不要？

### B. V1Z4 12 個 artboard 的優先順序
我建議分批：
- **P0（這輪可做）**：Poll Deep-Dive、About、Setup Wizard
- **P1（需要先想 backend）**：通知中心（先定義 alert source schema）
- **P2（需要新 entity）**：Sessions List/Detail（先決定 session 怎麼切）、跨場次搜尋
- **P3（後）**：Audience List、Mobile Admin、Desktop Tray/Window Picker、Message Detail Drawer

請 Design 拍板：(a) 同意分批還是要全做？(b) P0 三個先做哪個？

### C. 是否同意暫停加 nav，等整併完？
sidebar 已經 21 個，再加 12 個 = 33 個。手機 RWD 一定爆。
建議先做 §A 的整併、確認 sidebar 先回到合理數量，再加新 page。

---

## 6. 我這邊做的事 / 沒做的事

✅ Sync V1Z4 bundle 到 `docs/designs/design-v2/components/admin-batch7-9.jsx`（12 artboards 都進去了，Design 那邊改了重 sync 即可）
✅ Sync `Danmu Redesign.html` 最新版

❌ 暫時**沒有**直接 implement V1Z4 的 12 個頁面 — 等 §5 拍板
❌ 暫時**沒有**做 sidebar 整併 — 等 §5.A 拍板（會動到很多 anchor / hash / route，要 Design 確認 UX 邊界）

待 Design 在這份 doc 留 reply 後再進下一輪 implement。

---

## 7. Production 現況（FYI）
- branch `claude/design-v2-retrofit` @ `dca32b0` (101 commits ahead of `main`)
- VPS `138.2.59.206:4000` 跑 `dca32b0`，container `danmu-fire` healthy
- 951 tests passing
- main 還在 v4.8.x — branch 沒 merge 回 main，等 Design v2 整體 stabilize 再合
