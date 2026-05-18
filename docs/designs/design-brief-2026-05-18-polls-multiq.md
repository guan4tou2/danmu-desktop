# Design Brief — Polls multi-question + per-question image (P1 #1)

**Status:** Design 待辦
**Branch:** `claude/design-v2-retrofit`
**Context:** v5.0.0 已 ship admin polls master-detail UI（queue + editor，commit 3fc4df4），但 backend 仍是「一個 poll = 一題」的 schema。Polestar pivot 後沒動到。要正式開 multi-question，需 design 先鎖 UX 模型，工程才能 schema bump。

---

## 現況盤點

### 已 ship

- **Admin UI shell** — `admin-poll-builder.js` 有 master-detail：左側 queue（題目列表，可拖曳排序），右側 editor（編輯當前題目），下方 session controls（START / 下一題 / 結束）
- **Image upload endpoint** — `POST /admin/poll/<id>/upload-image/<qid>` 已存在（≤2MB JPG/PNG/WebP），路由 + storage 都 ready
- **Viewer poll tab** — 觀眾端可看題目 + 選項，**永遠不看計票 / 百分比**（polestar lock）
- **Mode toggle** — admin 可選「手動 / 自動」播放模式

### 沒 ship 的後端

- `poll.questions: [{text, options[], image_url, ts_started_at, ts_ended_at}]` 多題 schema
- Question advance API (`POST /admin/poll/<id>/advance`)
- Session state machine: pending / active(q_idx=N) / ended

---

## Design 需要回答的 5 個 Open Qs

### Q1. Session 結構

- **A) 一個 poll = 多題的 session**
  - URL: `/admin/poll/<id>` 是整個 session，內含 N 題
  - Viewer 看到「投票進行中 · 第 3/5 題」之類的 indicator
- **B) 每題各自獨立的 poll，可被「群組」起來成 session**
  - URL: `/admin/poll/<id>` 一題一個 poll
  - Session 是另一個 entity，包多個 poll_id
- **C) 混合：active session 結構但 polls 仍各自可獨立** — 不推薦，複雜度太高

工程傾向 **A**（單一 entity，schema 簡單）。

### Q2. 題目導引方式（mode）

目前 admin 已有 `manual` / `auto` mode toggle。但確切意思未定：

- **`manual`** — admin 按「下一題」推進。投票時長無上限。觀眾看到當前題直到 admin 切換
- **`auto`** — 每題限時 N 秒，到時自動下一題。
  - 時限：每題獨立 (`question.duration_s`) 還是 session-level fixed?
  - 倒數顯示：viewer 看到「剩 7s」or 隱藏?

Design 確認：auto 模式的時限粒度 + 是否顯示倒數。

### Q3. 並發 / 切換規則

- 一個 session 同一時間只有「一題 active」？✓ (預設)
- 題目間切換是否要 transition UI（例如「下一題準備中…」3 秒 buffer）?
- 上一題的結果頁是否要 admin 先 review 才能 advance? (觀眾不看結果，所以僅是 admin 緩衝)

### Q4. Session 進行中可否編輯下一題?

- **A) Freeze whole queue** — START 後不能改任何題（最安全）
- **B) Editable until question becomes active** — 「下一題」之前都可改
- **C) Always editable** — admin 隨時改任意題

工程傾向 **B**（admin 通常想 last-minute 微調但不會回頭改已投過的）。

### Q5. 圖片在 viewer 上的位置 + size

Endpoint 已 ready，但圖片在 viewer poll tab 的位置 design 未定：

- **A) 題目上方**（hero-style banner，最 prominent）
- **B) 題目右側**（兩欄，左題目 + 右圖）— mobile 會擠
- **C) 選項旁**（每個選項都可有 image，A/B/C/D 各一張）— 複雜度 +1

工程傾向 **A**（單張、題目上方）。Mobile 自動 stack。

---

## 後端 schema bump 設計（待 design 答 Q1）

如果走 Q1 = A（推薦）：

```python
# server/services/poll.py — current single-question:
{
    "id": "poll_xxx",
    "question": "你最喜歡哪個?",
    "options": ["A", "B", "C", "D"],
    "votes": {"A": 12, "B": 8, ...},
    "state": "active" | "ended",
    "started_at": 1714198400,
}

# Proposed multi-question (additive — old shape stays valid):
{
    "id": "poll_xxx",
    "title": "本場討論",                      # NEW: session-level label
    "mode": "manual" | "auto",               # NEW
    "default_duration_s": 60,                # NEW (auto mode)
    "questions": [                            # NEW: 1+ questions
        {
            "qid": "q1",
            "text": "...",
            "options": ["A", "B", ...],
            "image_url": "/static/polls/poll_xxx/q1.png",  # optional
            "duration_s": 60,                # override default
            "votes": {"A": 12, ...},
            "started_at": 1714198400,
            "ended_at": 1714198460,
        },
        ...
    ],
    "active_qid": "q2",                       # NEW: which question is live
    "state": "pending" | "active" | "ended",
}
```

Migration：舊 single-question polls 自動 wrap 成 `questions: [{ ... }]` shape 在 read time。Write path 永遠寫新 shape。

---

## 工程估時

- Q1-Q5 答完 + design mockup（題目導引、圖片位置、倒數樣式、queue 編輯狀態）：**design 2-3 hr**
- Backend schema bump + migration + advance API + admin UI re-wire + viewer multi-Q tab update + tests: **工程 8-12 hr**
- 可拆兩個 PR：
  - PR-a: backend schema + admin advance flow
  - PR-b: viewer multi-Q rendering + image display

---

## 建議優先序

| Open Q | 急迫度 | Design 提供 |
|------|------|--------|
| Q1 Session 結構 | 🔴 必要 | 選 A/B/C |
| Q2 Mode 細節 | 🔴 必要 | 時限粒度 + 倒數顯示 |
| Q4 Editable rules | 🟡 中 | 選 A/B/C |
| Q5 圖片位置 | 🟡 中 | 選 A/B/C + size constraint |
| Q3 並發/切換規則 | 🟢 可後續調 | transition UI 是否需要 |

**建議走 A/manual+auto-per-question/B/A**，工程能在 8-10h 內 ship。
