# Sessions Entity — 設計提案 · 2026-04-27

> Phase: **未開工**。本 doc 是 P2 Sessions / SessionDetail / CrossSessionSearch 那批 prototype（V1Z4 batch7-8）的工程前置設計。實作要 dedicated sprint，不在這輪 P1 一起做。

---

## 1. 為什麼需要 session

目前資料模型：每筆訊息有 `ts`、`text`、`color`、`fingerprint`，但**沒有歸屬**。所有訊息都是一條長 stream。Admin 想知道：

- 上週的「Q1 OKR Town Hall」總共收到幾則？哪則最熱？
- 過去 30 天有哪幾場活動？參與最多的觀眾是誰？
- 「fp_a3f2」這個觀眾在哪幾場出現過？

這些問題在 Q&A / Audience / Search prototype 都會問到，但現有 schema 答不出來，因為**沒有「場次」概念**。

---

## 2. Session 該長什麼樣

最小 schema：

```python
@dataclass
class Session:
    id: str            # sess_a3f2 — 8-char base32 prefix
    name: str          # "Q1 OKR Town Hall" — operator 命名
    started_at: float  # unix ts
    ended_at: float | None
    created_by: str    # admin's actor name (for multi-user future)
    notes: str         # 操作員自由欄位

    # Aggregate counters (計算欄，非 source-of-truth)
    message_count: int
    poll_count: int
    peak_concurrent_viewers: int
```

訊息 / poll / fire_sources / audit 全部加一個 `session_id` 欄位指向 active session。

---

## 3. Session lifecycle

3 種狀態：`idle`（沒 active）/ `active`（有 active）/ `paused`（保留給未來 break time）。

操作流程：

```
[idle]  ──admin Start Session──>  [active]  ──admin End Session──>  [ended, immutable]
                                       │
                                       ├── /fire 寫入時自動帶 session_id = active.id
                                       ├── poll create 自動帶 session_id
                                       └── audit_log 自動帶 session_id
```

**只能有 1 個 active session**（單機產品，不做多 session 並發）。

UI 觸發點：
- Dashboard 加一張 "Active Session" card（沒 active 時 prompt "▶ 開始新場次"）
- Sidebar Live state chip（既有的 BROADCASTING）旁邊多一個 SESSION:xxx
- 訊息列表 row 上加一個 session badge（只在 cross-session 視圖出現）

---

## 4. 資料寫入點清單（要動的地方）

| 模組 | 改動 |
|------|------|
| `services/session.py`（新） | session lifecycle: start / end / get_active / list_recent |
| `services/messaging.py` | enqueue 訊息時讀 session_active() 並夾帶 session_id |
| `services/poll.py` | poll create 時夾帶 session_id |
| `services/fire_sources.py` | record() 加 session_id 參數 |
| `services/audit_log.py` | append() 加 session_id 參數 |
| `routes/admin/session.py`（新） | POST /admin/session/start / end · GET /admin/session/list / detail / search |
| `routes/api.py` /fire | 寫訊息時讀 active session_id |
| schema migrations | 既有訊息 / poll log 沒 session_id，需要 ALTER + backfill 或標記為 "pre-session" |

---

## 5. 持久化選擇

### A. SQLite（推薦）
新增 `sessions` table + 既有 message log 改成 SQLite（從 in-memory ring + JSON dump 升級）。

- ✅ 跨重啟、可 query、relational join 好寫
- ❌ 大重構：current message log 是 ring buffer，沒 disk persistence；要先補資料層
- 工程量：3-5 天

### B. JSON-lines append（次選）
模仿 `audit_log` 模式：`runtime/sessions.log` 存 session metadata，訊息照舊在 in-mem ring（多帶 session_id 欄位），偶爾 dump 到 disk。

- ✅ 跟 audit_log 同模式，不引入 SQLite 依賴
- ❌ Cross-session search 要全檔掃，10k+ 訊息會慢
- 工程量：1-2 天

### C. 混合
session metadata → SQLite，訊息保持 in-mem，匯出時才合併。

- ✅ 對 query 友善，但訊息 history 仍在 RAM
- ❌ 最複雜
- 工程量：4-6 天

**建議：B 起步（quick），等真的有 cross-session query 痛點再升級 A。**

---

## 6. UI 變動（呼應 V1Z4 prototype）

### AdminSessionsPage
- 過去 30 天場次列表（spark line per session）
- 4-tile KPI（30d 場次 / 總觀眾 / 總訊息 / 高峰場次）
- 點某 session row → SessionDetail

### AdminSessionDetailPage
- 整場時間軸 + 訊息流回放
- 訊息密度 histogram per minute
- Top 觀眾、Top 訊息、Poll 列表
- Export (CSV / JSON)

### AdminSearchPage
- 跨場次全文搜尋（Search params: keyword, time range, sessions, fingerprints, action="masked"）
- 結果按 session 分組

### AdminAudiencePage
- 觀眾 = unique fingerprint 跨 sessions 的聚合
- 出席 sessions 數、總訊息數、第一次 / 最後一次出現時間
- Click → 該觀眾在哪幾場、發了什麼

---

## 7. 風險 / 開放問題

1. **既有訊息怎麼辦**：當前訊息 log 沒 session_id。要 (a) 全部 mark as `session_id=null` 顯示為 "歷史 · 無場次"、(b) 一律不顯示，只認新場次起算的訊息、(c) 用 ts 嘗試 backfill（沒準）。建議 (a)。

2. **多 session 並行**：v1 鎖死單一 active session 簡化 UX。但「主辦同時開兩個 stage」會卡。建議 v1 不做，文件標清楚單一 active。

3. **session 自動 close**：忘了結束的 session 怎麼辦？建議：start 後超過 24h 沒新訊息就自動 ended，或啟動下一場 session 時自動 end 上一場。

4. **electron 桌面端**：FirstRunGate / Tray Popover 顯示 active session。要 IPC bridge 把狀態推到桌面 process。

5. **匯出**：每 session 結束後是否觸發 daily snapshot？跟 backup 的關係要釐清。

---

## 8. 建議的 sprint 排程

依複雜度由低到高，一次一個：

| Sprint | 範圍 | 工程量 |
|--------|------|--------|
| S1 | services/session.py + lifecycle API + start/end UI on Dashboard | 1 天 |
| S2 | session_id propagation 到 messages / polls / fire_sources / audit | 1-2 天 |
| S3 | AdminSessionsPage（list + KPI tiles）、SessionDetail（time axis + replay） | 2 天 |
| S4 | AdminSearchPage（cross-session search）+ AdminAudiencePage | 2 天 |
| S5 | Persistence 升級（B → A 視效能而定） | 3-5 天 |

每個 sprint 結束都能 ship 可用 feature，不是 big-bang。

---

## 9. 不在 scope

- 多 admin / 多 actor 角色（單機產品）
- Session import / export between deployments
- Session-level rate limit overrides（先用既有 ratelimit）
- Recording / VOD（要影音管線，獨立 product feature）

---

## 10. 等什麼

要 Design / 產品先回 §7 的 Q1 / Q2 / Q3 拍板：

1. 既有「無 session_id」訊息要不要顯示？（建議 a）
2. 鎖死單一 active session OK？（建議 yes）
3. session auto-close 邏輯？（建議：開新場時自動結束舊場）

回了之後 S1 可以開工。
