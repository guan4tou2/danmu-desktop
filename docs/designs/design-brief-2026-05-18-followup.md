# Design Brief — 2026-05-18 follow-up (post-implementation Open Qs)

**Status:** Design 待辦清單 v2
**Author:** engineering
**Branch:** `claude/design-v2-retrofit`
**Context:** Brief 2026-05-18 第一批（Replay annotations / Time-bound ban / Sessions bucket / 4 個 open Qs）已全部 ship。本 brief 處理 ship 後出現的 4 個延伸決定。

---

## 1. Annotation 自訂 label 🔴 急

### 為什麼

目前 4 種固定 label：
- ★ `highlight` (cyan star)
- ⊷ `vote` (amber circle)
- ● `note` (neutral dot)
- ! `warning` (crimson square)

實作後 user 可能會想要客製化 label（例如「demo」「Q&A」「coffee break」分類）。Backend 目前是 enum，加新 label 需要 schema bump。

### Design 需要回答

- A) **維持 4 種固定** — 簡單明確，凍結 vocab。
- B) **加第 5 種「custom」** — 仍 enum 但加一個 catch-all，note 內 prefix 自訂 label
- C) **完全 free-form** — 用戶可建立自己的 label set（含 icon + color picker）。需要 settings 頁 + schema：
  - `replay_annotation_labels: [{ id, icon, color, name }]`
  - 預設 4 個 system label 鎖死，user-added label 可改可刪

工程傾向 A（YAGNI），但若 user 已抱怨單調可走 C。

### 工程影響

- A：0h（已 done）
- B：1-2h（admin-session-detail.js modal 加第 5 個 chip + 後端 enum 擴充）
- C：6-8h（新增 settings 頁面 + label CRUD 後端 + label picker UI）

---

## 2. Time-bound ban「自訂時數」input 🔴 急

### 為什麼

目前 5 顆 preset：`1h / 6h / 24h / 7d / 永久`。Open Q from prior brief 仍未答：是否要加自訂時數欄位？

例如「3 小時」「12 小時」「30 天」這些常見但不在 preset 內的值。

### Design 需要回答

- A) **維持 5 顆 preset** — 簡單，覆蓋 80% case。
- B) **加「自訂」第 6 顆 chip** — 點開後展開 `<input type="number"> 小時 / 天` 切換。Backend 已支援任意 `duration_s`，純前端工作。

工程傾向 B（low cost, high flexibility），但 design 確認 chip 視覺如何處理「展開狀態」。

### 工程影響

- A：0h
- B：1-2h（admin-modbans.js picker 加 conditional input + UI）

---

## 3. ban_expired auto-emit 時機 🟡 中

### 為什麼

目前 ban_expired 是 **lazy check** — backend 不跑 reaper thread，只在 `list_active()` 時遇到過期 entry 標記為 `status=expired`。但 audit log 不會自動 emit `ban_expired` event，也不會推到 notification feed。

意思是：限時 ban 「到期了」這件事在 notification 永遠不出現，除非 admin 主動 unban。

### Trade-off

- ✅ Lazy check：簡單，沒有 reaper thread，server restart 不會丟失 timing
- ❌ Lazy check：到期通知不會 surface

### Design 需要回答

- A) **接受 lazy** — 過期不發通知，admin 自己看 list（建議：對 single-presenter 場景夠用）
- B) **第一次 list 看到 expired entry 時 auto-emit** — backend 自動寫 `ban_expired` 並更新 audit
- C) **加 cron / scheduled reaper** — 每 5 分鐘掃一次 audit ring，過期就 emit + write unban。複雜度高

工程傾向 A 或 B。C 等 polestar 之後再考慮。

### 工程影響

- A：0h
- B：1-2h（`moderation_bans.list_active()` 加 side-effect）
- C：3-5h（新 reaper thread + threading.Timer chain）

---

## 4. Sessions bucket — 大量資料的後端切片 🟡 中

### 為什麼

目前 sessions API `GET /admin/sessions?hours=168` 一次撈全部，前端 client-side 分組到 4 個 bucket（今天/昨天/本週/更早）。若 session > 1000 筆會：
1. 一次 fetch 大 payload
2. Bucket header 顯示「12 sessions」但 collapse 後 row 仍在 DOM
3. 「更早」bucket 如果是 1000+ rows 全部 render 會卡

### Design 需要回答

- A) **接受 client-side 全載** — 預期使用規模 < 100 sessions / 週，目前夠用
- B) **後端 pagination + bucket aggregate** — `GET /admin/sessions/buckets` 回 bucket summary（每個 bucket 一筆 metadata），點 expand 才 fetch 該 bucket 內 sessions
- C) **Infinite scroll bucket** — 維持 single endpoint，但「更早」bucket 改 lazy load

### 預期使用規模

需要 design / user 確認：典型部署一週會產生多少 sessions？polestar 是 single-presenter / mid-size event，估計每週 5-20 場？若是，A 完全夠用。

### 工程影響

- A：0h
- B：4-6h（新 endpoint + 改前端 bucket render 為 async expand）
- C：3-4h（admin-sessions.js 加 IntersectionObserver lazy render）

---

## 不在這輪的

下面項目仍在 backlog，本 brief 不發 design：

- **P1 既有 backlog** — Polls multi-question + image (#5)、Display per-setting compound (#6)、Effects user-uploaded `.dme` preview (#7)、Sounds per-tile volume (#8)、Fonts subset (#9)
- **P2 polestar 程式碼清理** — `admin-broadcast.js` 改名 (#10)、`services/broadcast.py` lifecycle 廢棄 (#11)、Light theme 第二輪 audit (#12)
- **P3 UI polish** — Skeleton chart 一致性 (#13)、Motion 語言定義 (#14)、Tablet breakpoint 其他頁 (#15)

---

## 建議優先序

| Item | 急迫度 | 工程估時 | 後續解鎖 |
|------|------|--------|--------|
| 1. Annotation 自訂 label | 🔴 | 0-8h | 視 A/B/C 答案 |
| 2. Custom hours ban | 🔴 | 0-2h | 視 A/B 答案 |
| 3. ban_expired emit | 🟡 | 0-5h | 視 A/B/C 答案 |
| 4. Sessions paging | 🟡 | 0-6h | 視預期規模 |

合計最壞 21h、最樂觀 0h（全部選 A）。**建議走 A/B/A/A 組合 = ~2h** 即可清完延伸 Open Qs。
