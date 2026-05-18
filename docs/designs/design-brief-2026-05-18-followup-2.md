# Design Brief — 2026-05-18 follow-up #2 (post-theme-unification)

**Status:** Design 待辦清單 v3
**Branch:** `claude/design-v2-retrofit`
**Context:** Brief 0518 第一批 (Replay annotations / Time-bound ban / Sessions bucket / Open Qs) + Brief 0518-v2 #2 (custom-duration chip) + admin↔viewer theme unification 都已 ship。本 brief 處理統一後浮現的 3 個小決定。

---

## 1. Viewer desktop 主題切換器 🔴 急

### 為什麼

Theme unification 已 ship：
- ✅ Admin topbar 有 ☼/☾ 三態 toggle (auto / light / dark)
- ✅ Mobile viewer 有 hamburger sheet（含主題 + 語言）
- ❌ **Desktop viewer 完全沒 UI 可切換主題** — 只能跟系統 prefers-color-scheme，或等 admin 從另一個分頁切。

對 desktop 觀眾來說，沒辦法主動切到他習慣的亮 / 暗主題。

### Design 需要回答

- **A) 維持現狀**（desktop = 跟系統 + cross-tab sync）— 0h
  - 假設：desktop 觀眾很少需要主動切；系統 dark/light 已涵蓋 95% 場景
- **B) Hero 右上加 ☼/☾ chip**（與 admin topbar 同款）— 1-2h
  - 視覺輕量，跟 admin 一致 pattern
  - Hero 已有 `viewer-hero-utility` 區域（目前放 connection chip）
- **C) Hero 右上加 ☰ hamburger（與 mobile 共用 sheet）** — 1-2h
  - 跟 mobile pattern 一致，未來如果加更多 viewer 設定有空間擴充
  - 但 desktop 用 bottom sheet UX 有點 awkward；可能改 dropdown

工程傾向 B（最輕、與 admin 對齊）；如果未來 viewer 還會加其他設定（如「字級大小」「動畫減量」）就走 C。

### 工程影響

- A: 0h
- B: 1-2h（hero 加 chip + 共用既有 theme apply 邏輯）
- C: 1-2h（hero 加 ☰ + desktop variant 把 bottom sheet 轉 dropdown，或共用 sheet）

---

## 2. Modbans 頁面 nav 位置 🔴 急

### 為什麼

封禁管理頁 `#/modbans` 已 ship（含 picker modal + expires chip），但 sidebar 8 主區沒收錄入口，只能透過 deep link 或 fingerprints 頁的 ban action 進入。

操作員主動想看「目前有哪些 ban」需要記得這個 URL，不直覺。

### Design 需要回答

- **A) System accordion 加 `bans` leaf** — 1h
  - 跟「access」「audit」等管理性 leaf 放一起
  - 缺點：埋深一層，找起來慢
- **B) Moderation 主區下加 sub-tab**（與 `modqueue` 並列）— 1-2h
  - 與審核流程同主區，符合心智模型
  - 需要 Moderation 主區架 tab 容器（目前只有 filters 一個頁面）
- **C) 維持 deep link only** — 0h
  - 假設：ban 列表查看頻率夠低，從 fingerprints 進就好
  - 缺點：缺乏 discoverability

工程傾向 B（語意最對），但要看 Moderation 主區是否值得開 tab 結構（目前只 1-2 個 sub-page 可能 overkill）。

### 工程影響

- A: 1h（admin-system-accordion 加 leaf + route）
- B: 1-2h（admin-tabs 註冊 moderation tabs + 路由）
- C: 0h

---

## 3. Light theme 在 viewer 端實際視覺驗證 🟡 中

### 為什麼

主題統一是純 plumbing（單一 storage key + 兩邊 sync），但 **light viewer 還沒在真實內容下走過 design 審**。

潛在問題點：
- Viewer hero 漸層/陰影在白底是否還 work？
- 預覽彈幕 (`.viewer-preview`) marquee 文字對比 (light 是黑字白底)
- Send bar (pill) light 變體
- 浮動 hamburger ☰ 在 light hero 上是否還夠醒目
- Nickname chip popover 在 light 模式邊框

### Design 需要產出

- 給一張 light viewer screenshot review（手機 + desktop 各一張）
- 列出 light 模式下需要調的 token (如果有)
- 確認 contrast 是否仍 WCAG AA（之前統一前是 dark-only 設計，沒驗 light）

### 工程影響

- 純 design review：0h
- 如果 design 找出色差 → 預估 1-3h 修 token / 條件選擇器

---

## 不在這輪的

下面項目仍在 backlog 但本 brief 不發 design：

- **P1 既有 backlog** — Polls multi-question + image、Display per-setting compound、Effects user-uploaded `.dme` preview、Sounds per-tile volume、Fonts subset
- **P2 polestar 程式碼清理** — `admin-broadcast.js` 改名、`services/broadcast.py` lifecycle 廢棄、Light theme 第二輪 audit (admin shell `rgba(255,255,255,X)`)
- **P3 UI polish** — Skeleton chart 一致性、Motion 語言定義、Tablet breakpoint 其他頁

---

## 建議優先序

| Item | 急迫度 | 工程估時 |
|------|------|--------|
| 1. Viewer desktop switcher | 🔴 | 0-2h |
| 2. Modbans nav 位置 | 🔴 | 0-2h |
| 3. Light viewer 視覺審 | 🟡 | 0-3h（看 design 找到什麼） |

合計最壞 7h、最樂觀 0h（全部選 A/C）。建議走 **B/B/review** = ~4h 補完發現性 + 視覺一致。
