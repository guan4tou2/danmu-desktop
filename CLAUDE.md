# CLAUDE.md — danmu-desktop 專案指南

> 這份檔案每個 session 都會載入，是最高槓桿的路由層。**只放路由與少數不可漏的硬規則**，細節一律指到 `docs/agent-ops/`。
> 原始版本備份在 `CLAUDE.md.bak`。改這份前先讀 [維護協議](docs/agent-ops/40-maintenance-protocol.md)。

---

## 0. 運作制度（先讀這區）

這個 repo 有一套「操作制度」給 AI session 用，位置 `docs/agent-ops/`。**開新 session、或不確定怎麼做時，先看對應檔**：

| 你要做的事 | 看這個檔 |
|---|---|
| 想知道這 harness 最容易踩哪些坑 | [00-harness-diagnosis.md](docs/agent-ops/00-harness-diagnosis.md) |
| 決定用哪顆模型、怎麼派 subagent、怎麼驗證 | [10-model-dispatch.md](docs/agent-ops/10-model-dispatch.md) |
| 判斷「該升級模型/算完成了沒/該不該停下來問/方向對不對」 | [20-judgment-rubrics.md](docs/agent-ops/20-judgment-rubrics.md) |
| 派工給 subagent 時要怎麼寫 prompt | [30-delegation-templates.md](docs/agent-ops/30-delegation-templates.md) |
| 想更新這些制度檔 | [40-maintenance-protocol.md](docs/agent-ops/40-maintenance-protocol.md) |
| 想了解這套制度的初衷與退化預防 | [50-letter-to-future-sessions.md](docs/agent-ops/50-letter-to-future-sessions.md) |
| 想加 hooks 強制關鍵規則 | [90-hook-suggestions.md](docs/agent-ops/90-hook-suggestions.md) |

索引與導讀：[docs/agent-ops/README.md](docs/agent-ops/README.md)

---

## 1. Skill 路由

當使用者請求**明確**符合某個 skill 時，用 Skill 工具叫它，作為第一個動作。但先套判斷閘（見 [判斷力 rubric](docs/agent-ops/20-judgment-rubrics.md)）：使用者只是**問問題、描述問題、想事情**時，先給答案/評估，**不要**動手改也不要硬套重 skill。

| 使用者明確要 | 叫這個 skill |
|---|---|
| 產品點子、「值不值得做」、腦力激盪 | office-hours |
| bug、錯誤、「為什麼壞了」、500 | investigate |
| ship、部署、push、開 PR | ship |
| QA、測站、找 bug | qa |
| code review、檢查我的 diff | review |
| 出貨後更新文件 | document-release |
| 每週回顧 | retro |
| 設計系統、品牌 | design-consultation |
| 視覺稽核、設計打磨 | design-review |
| 架構審查 | plan-eng-review |

`/斜線指令` = 使用者點名該 skill，直接照叫。

---

## 2. danmu-desktop 不可漏的硬規則

改這個 repo 前，這幾條記牢（完整背景在專案 auto-memory 的「Key Architecture」——那份 `MEMORY.md` **不是 repo 檔案**，是 session 開頭自動注入 context 的全域記憶，絕對路徑 `/Users/guantou/.claude/projects/-Users-guantou-Desktop-danmu-desktop/memory/MEMORY.md`；不要在 repo 裡 `Read MEMORY.md`，會找不到）：

1. **版本號改兩處**：發版（bump）時 `danmu-desktop/package.json` **和** `server/config.py:APP_VERSION` 要一起改成**同一個值**。（2026-07-06 已對齊為 5.3.1。若日後又發現兩處不一致，先問使用者以哪個為準，別自己猜。）
2. **webpack `__dirname` 執行期 = `dist/`**：路徑寫成 `"../index.html"` 之類。
3. **`renderer.bundle.js` 被兩個 HTML 載入**：`index.html`（主視窗）與 `child.html`（overlay）。改 renderer 要顧兩邊。
4. **`server/routes/admin/` 是套件**（一 domain 一檔），不是單一 `admin.py`。
5. **改任何檔前先 `Read`**；**改既有檔前先留備份**；**破壞性/不可逆操作先確認**（本 repo `settings.local.json` 已允許 `rm -rf ./*`、`git reset` —— 權限不會擋你，判斷力要擋）。
6. **宣稱完成前先驗證，且不自驗**：程式碼跑測試/實跑並貼實際輸出；檔案產出用 fresh agent read-back。

---

## 3. 常用指令

- Webpack：`cd danmu-desktop && npx webpack`
- 測試：`cd server && PYTHONPATH=.. uv run python -m pytest`（= `make test`）
- 全套（正確排除法）：`cd server && PYTHONPATH=.. uv run python -m pytest tests/ --ignore=tests/test_browser_isolated.py -q`（browser 模組在全套會故意跳過，另用隔離方式跑，別誤判成回歸）
- 跑 server：`cd server && PYTHONPATH=.. uv run python -m server.app`
- Tailwind：`cd server && npm run build:css`（首次先 `npm install`）
- 完整 build：`cd server && npm run build`
- CSS token 防回歸檢查：`make lint-css`（= `node scripts/check-css-tokens.mjs`，對照 `scripts/css-token-baseline.json`；CI（`.github/workflows/test.yml`）已接入，新增裸 hex 色碼會讓 CI 失敗）
