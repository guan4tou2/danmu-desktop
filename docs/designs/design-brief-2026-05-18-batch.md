# Design Brief — 2026-05-18 batch (post-polestar pivot follow-ups)

**Status:** Design 待辦清單
**Author:** engineering
**Branch:** `claude/design-v2-retrofit`
**Context:** v5.0.0 + design v4-r7 (polestar pivot) + Batches 1-5 都已 ship。
此 brief 把剩餘 4 個 design gaps 打包，按急迫度排序。

---

## 1. Replay annotation timeline marker + add-modal 🔴 急

### 為什麼

Session detail 的密度時間軸（density timeline）目前只顯示「每分鐘訊息量」的 bar
chart，admin 看完一場後想記下「12:43 觀眾爆笑點」「12:55 投票揭曉」這類錨點，
回看 / 報告時可以 jump。

### 後端已 ship（2026-05-18 本 session）

`server/services/replay_annotations.py`：

```
POST   /admin/replay/annotations
       body { session_id, ts_ms, label, note }
       → 201 { annotation: { id: "ann_xxxxxxxx", ... } }

GET    /admin/replay/annotations?session_id=<id>
       → { annotations: [...] }  (sorted by ts_ms asc)

DELETE /admin/replay/annotations/<id>
       → { deleted: <id> }
```

Schema：

| Field        | Type      | Constraint                                   |
|--------------|-----------|----------------------------------------------|
| `id`         | string    | `ann_<8-hex>` 後端產生                         |
| `session_id` | string    | 必填                                          |
| `ts_ms`      | int       | ≥ 0，session 開始後的 ms offset                |
| `label`      | enum      | `highlight` / `vote` / `note` / `warning`    |
| `note`       | string    | ≤ 280 字（tweet-sized）                       |
| `actor`      | string    | 後端自動填 `session.username` (admin)         |
| `created_at` | float     | epoch ts                                     |

Storage 是 append-only JSON-lines，delete = 寫 tombstone。

### Design 需要產出

1. **Timeline marker** — 在 `admin-sd-timeline` 上 overlay 4 種 label 對應的視覺：
   - `highlight` cyan triangle / star
   - `vote` amber circle
   - `note` neutral dot
   - `warning` crimson exclamation
   定位用 `left: ts_ms / duration_ms * 100%`。

2. **「+ Add annotation」CTA** —
   - 放哪？建議 timeline 旁邊（目前 peak label 旁）or hover timeline 時 浮現 `+ here at 12:43`
   - 點下後跳 modal：時間（預填 hover 位置 ts_ms）、label chip group (4 顆)、note textarea。

3. **Annotation 列表 panel** — 在 timeline 下方 or 右側 sticky list
   - 每 row：`HH:MM:SS · [label chip] · 280-char preview · 🗑`
   - 點 row → timeline marker 高亮 + scroll to messages list 對應位置

### Open Qs for Design

- Modal 還是 inline popover？我們現有 `HudConfirm` modal helper 可重用。
- Marker hover 顯示 tooltip 還是直接 expand？
- 4 個 label 是否要 customizable？（現在 enum 固定，加 customizable 要 schema bump）

### 驗收

- 4 種 label 各有 spec'd 視覺
- modal 在桌機 (>768px) 與手機（bottom sheet pattern，跟 message-drawer 一致）兩種 size 都有
- 列表空狀態（無 annotation）配 `AdminEmpty.render(...)` 既有 helper

---

## 2. Time-bound ban duration picker + expires chip 🔴 急

### 為什麼

目前 `admin-fingerprints.js` 只有 state-based ban (`banned` / `muted` / `active`)，
永久封禁太重、暫時 mute 太輕，缺中間態（「ban 1 小時 / 24 小時 / 7 天」）。

### 後端 schema 已 doc'd（2026-05-18，audit_log.py）

```python
# source="moderation", kind="ban" | "mute"
meta = {
    "target_kind": "fingerprint" | "ip" | "nick",
    "target":      "<value>",
    "duration_s":  3600,            # 0 / null = permanent
    "expires_at":  1714202000.0,    # epoch seconds, null if permanent
    "reason":      "<short string>"
}
```

Audit log 是 source of truth：reaper 讀 reverse-chrono，最新一筆 ban event 的
`expires_at` 決定當前狀態。Schema 已凍結，等 design 把 UI 形狀定下來就接。

### Design 需要產出

1. **Ban dialog 改版** — 從現在的 `?確定要封禁？` confirm modal 變成 compound：
   - 期限 picker：preset chip group `1h / 6h / 24h / 7d / 永久`（5 顆）
   - 原因 input：可選，會寫到 audit `meta.reason`，後續 unban 可看
   - 目標展示：`fp:xxxxxxxx` / `192.0.2.1` / `nick:遊客` 視 `target_kind` 而定

2. **Ban 列表 expires-in chip** — fingerprints / blacklist 表格上：
   - 永久 ban：crimson chip `永久`
   - 限時 ban：amber chip `2h 14m 剩餘` 倒數
   - 過期但未清掉的 row：mute chip `已過期 · auto-unban`

3. **過期事件在 notifications 怎麼顯示** — reaper 解封會 emit
   `source="moderation", kind="ban_expired"`。design 決定它要不要進 notification
   inbox / events log，要的話對應 severity（建議 `info`）。

### Open Qs for Design

- 5 個 preset 是否合適？或加 「自訂」`<input type=number> 小時` ？
- Permanent ban 是否要 second confirm（防誤點）？
- ip ban 與 fp ban 共用同一 picker 還是各自有獨立頁面？

### 驗收

- 對 fp + ip + nick 三種 target_kind 共用一個 picker（不重複實作 3 套）
- Audit log 顯示時 reason 是可見的（reviewer 看得到上次 ban 原因）
- Mobile bottom-sheet variant

---

## 3. Sessions 表格 reframe — 列表 or chronological-bucket? 🟡 中

### 為什麼

本 session 已把 Sessions 頁的 kicker/note 改成「資料切片 / TIME WINDOWS」vocab。
但 8 欄列表（場次 / 開始時間 / 時長 / 訊息 / 觀眾 / 活動 / 操作）的結構還是直播
表格樣式。polestar 之後是否該換成 chronological-bucket（按日期 group、每日 1 row
+ expand 看 sub-sessions）會更貼資料切片心智模型？

### Design 需要回答

- A) **維持列表** — 每場次一 row，加上 thumbnail / density sparkline。
- B) **Bucket 分組** — `今天 / 昨天 / 本週 / 本月 / 更早`，row 是時間範圍 vs 場次數。
- C) **混合** — bucket header + 列表，可以摺疊。

我傾向 C，但要 design 確認資訊密度（KPI strip 是否還要？或移到單個 bucket 內？）。

### 既有約束

- 後端 API `GET /admin/sessions?hours=168` 回 `[{id, started_at, ended_at, duration_s, msg_count, viewer_count, is_live}]`，不需要改。
- 右側 sticky preview panel 已 ship，沿用即可。

---

## 4. Prior open Qs（從 2026-04-26 handoff 未答）

### 4a. Mobile viewer theme/lang switcher

Desktop hero 有 `◐/◑ theme toggle + 中/EN seg` 在 hero 右上。Mobile 完全沒這兩個
control（CSS @media 把它隱藏）。

**Design 決定：**
- 隱藏（mobile 跟系統 theme + 系統 lang）
- 顯示在 hamburger / bottom sheet
- 顯示在 hero 上但縮小

### 4b. #18 Fingerprint short form 長度

Admin 約定 `FP_DISPLAY_LEN=8` → `fp:xxxxxxxx`。Viewer 端要：
- 同樣 8 位（一致）
- 4 位（`fp-xxxx`，更精簡）
- 完全不顯示 fp（觀眾不需看）

### 4c. #18 暱稱改名互動

Viewer 點目前暱稱 chip 觸發改名：
- 跳 modal（離開當前情境）
- inline edit（chip 內 contenteditable）
- floating popover（chip 下方下拉）

### 4d. Desktop viewer hero 留白

`DanmuMarquee` 已填中段留白。Design 還有要加的嗎？或這條已自動 close？

---

## 不在這輪的（記錄用）

下面項目仍在 backlog 但**這輪不發 design**，避免 scope creep：

- P0-1 Polls multi-question + image — 後端 schema 還沒 bump
- P0-3 Display per-setting compound control — 既有 row 夠用
- Effects 用戶上傳 `.dme` live preview — 內建 8 個夠看
- Sounds per-tile inline volume — rules 控制夠用
- Fonts subset 按鈕 — pyftsubset 還不是 dep
- OBS Browser Source 配置嚮導 — 已記錄在 [memory/obs_browser_source_wizard_2026-05-18.md](../../../../.claude/projects/-Users-guantou-Desktop-danmu-desktop/memory/obs_browser_source_wizard_2026-05-18.md)

---

## 工程估時（design 回稿後）

| Item | 預估工程時 |
|------|----------|
| 1. Replay annotation UI | 4-6h |
| 2. Time-bound ban UI | 3-4h |
| 3. Sessions reframe | 2-3h（A 維持只要小調，C 混合要重寫表格） |
| 4. Open Qs | 1-2h（看回答） |

合計約 10-15h，可分 2 個 PR ship。
