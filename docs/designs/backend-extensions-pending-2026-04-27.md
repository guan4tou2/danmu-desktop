# Backend Extensions Pending Design Buy-in · 2026-04-27

> 工程**想 1:1 照抄 prototype**，但這些區塊需要新後端能力（endpoint / service / persistence）才能完整對齊。
>
> **不會自己做** — 列在這裡等 Design / 產品確認該不該補這些後端，再進 implementation sprint。
>
> 對應 [`prototype-gaps`](./design-v2-prototype-gaps-2026-04-27.md) §G 工程量估算欄位。

---

## 表格

每一列：要做什麼 / 為什麼缺 / Backend 工 / Frontend 工 / 我的建議

| # | 區塊 | 為什麼缺 | BE 工程 | FE 工程 | 我的建議 |
|---|------|---------|---------|---------|----------|
| **B1** | Notifications 右側 detail 面板（事件鏈 / 影響範圍 / 建議動作） | 每個 audit / violation event 沒有 chain / impact / suggested-action 結構欄位。要在 audit_log.append 時帶這些 | 4-6 hr（schema + per-source instrumentation） | 4 hr（detail panel UI） | 🟢 **值得做** — Notifications inbox 沒這個就只是個 list；加上去才像真 ops tool |
| **B2** | Notifications 加 Webhooks / System / Backup sources | 後端沒對 webhook 失敗 / system error / backup snapshot 做 audit_log instrumentation | 3 hr（3 個來源各加幾行 audit_log.append） | 0（FE 已支援） | 🟢 **值得做** — 工程量小，補上 inbox 就完整 |
| **B3** | Setup Wizard 密碼 step（狀態提示契約） | `POST /admin/change_password` 已上線；前端新增 capability 探測，endpoint 不可用時顯示 `blocked by backend` 並允許略過 | 0（已上線） | 0（已上線） | ✅ done（2026-04-30） |
| **B4** | Setup Wizard Logo step（狀態提示契約） | `POST /admin/logo` 已上線；前端新增 capability 探測，endpoint 不可用時顯示 `blocked by backend` 並允許略過 | 0（已上線） | 0（已上線） | ✅ done（2026-04-30） |
| **B5** | Audit Log 加 ACTION 維度（UPDATE / CREATE / BLOCK / TOGGLE / ...） | 目前 audit_log entries 用 free-form `kind` (rotated / login / mode_changed)。要對每個 source 補 action category mapping | 1 hr（mapping 函式） | 1 hr（chip 配色 + filter） | 🟢 **值得做** — Audit Log 對齊度最低，加這個馬上接近 prototype |
| **B6** | Audit Log 加 before / after diff | 目前 audit_log entries 不帶 before/after。要每個 instrument 點主動帶這兩個欄位（toggle: from→to / settings change: old→new） | 3-4 hr（per-source 改寫） | 1 hr（紅綠 diff display） | 🟢 **值得做** — 跟 B5 一起做最有效率 |
| **B7** | Audit Log 加 source platform（web / desktop） | session 訊息分不出來自 web admin 還是 desktop tray。要看 request 的 User-Agent / origin 推斷 | 2 hr（中介層 detect + tag） | 1 hr（顯示 icon） | 🟡 — desktop tray 暫時沒太多 audit-worthy actions，可延 |
| **B8** | Poll Deep-Dive Time Histogram（投票時間直方圖） | poll service 只記 voter set，沒存 per-vote timestamp。要在 vote() 寫 timestamp，每個 poll keep 一個 vote-events list | 2 hr（vote 收 ts） | 2 hr（bar chart） | 🟢 **值得做** — Time histogram 是 deep-dive 的招牌區塊 |
| **B9** | Poll Deep-Dive vs 上次 Δ | 目前 poll 結束就 reset，沒持久化歷史。要 poll history file (JSON-lines @ runtime/poll-history.log) | 4 hr（history log + query） | 2 hr（Δ tile + 計算） | 🟡 — 對單機 / 一次性活動沒意義（哪有「上次」？）。如果是定期週會 host 才有用 |
| **B10** | Poll Deep-Dive Geo + cross-tab matrix | 需要 GeoIP — 已在 [`scope-out`](./scope-out-2026-04-27.md#d-geo--ip-geolocation--not-in-scopev1) 標 NOT IN SCOPE | — | — | ❌ **scope-out**，不做 |
| **B11** | Poll Deep-Dive Sentiment Index | heuristic 純 FE 算，**不需後端** — 已在 G8 列表，可隨 polish 一起做 | 0 | 2 hr | 🟢 **下一輪 polish 就做** |
| **B12** | Audit Log SHA-256 簽章 | 已 [`scope-out`](./scope-out-2026-04-27.md#c-sha-256-audit-簽章--90-天保留期--siem-forwarder--not-in-scope-v1) | — | — | ❌ **scope-out**，不做 |
| **B13** | Audit Log 90 天 time-based retention | 已 [`scope-out`](./scope-out-2026-04-27.md#c-sha-256-audit-簽章--90-天保留期--siem-forwarder--not-in-scope-v1) | — | — | ❌ **scope-out**，size-based 已夠 |
| **B14** | Audience List 出席場次數 column | 已 [`scope-out`](./scope-out-2026-04-27.md#a-sessions--場次-entity--not-in-scope) — sessions 不做 | — | — | ❌ **scope-out**，column 直接砍 |
| **B15** | Cross-session search | 已 [`scope-out`](./scope-out-2026-04-27.md#a-sessions--場次-entity--not-in-scope) — sessions 不做 | — | — | ❌ **scope-out**，整個 page 不做 |

---

## 排程建議

如果 Design / 產品同意做（標 🟢 的 6 個）：

**第二輪 polish sprint（依 ROI 排）**：
1. B5 + B6 + B7 — Audit Log 三件一起（~10 hr，FE+BE）
2. B1 + B2 — Notifications detail panel + 補來源（~11 hr）
3. B8 — Poll Time Histogram（~4 hr）

合計 ~25 hr，全做完 Audit Log + Notifications + Poll Deep-Dive 對齊度從 ~50% 推到 ~95%。

---

## 2026-04-30 補充：先行 contract placeholders（不含商業邏輯）

為避免前端渲染依賴缺口時 schema 漂移，已先上線以下 placeholder 契約：

- `GET /admin/audit`：每筆事件固定帶 `action/platform/before/after`，並回 `contract.actions/actors/supports_*`
- `GET /admin/integrations/sources/recent`：固定回 `source_catalog`（含 backup/webhooks/system 未實作標記）
- `GET /admin/api-tokens`：固定回 `contract.available_integrations` + token `integration_acl` placeholder
- `GET /admin/history` / `GET /admin/search` / `GET /admin/sessions*`：固定回 `contract.poll_deepdive` 與 `contract.audience` placeholders

> 以上僅保證前端可以穩定顯示缺口狀態，不代表對應能力已實作。

---

## 不在這份 doc 的（其他類別）

- **「完全照抄 OK」純 FE 工作** → 直接做，不在這列。見 [`prototype-gaps`](./design-v2-prototype-gaps-2026-04-27.md) §G G1/G2/G3/G8/G10/G11
- **scope-out（永遠不做）** → 見 [`scope-out`](./scope-out-2026-04-27.md)

---

**這份 doc 的 status**：waiting for product / Design buy-in。每個 ☑ 或 ✗ 之後我才動 BE，FE 部分等 BE 落地再做。
