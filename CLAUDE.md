# CLAUDE.md — danmu-desktop

> 每個 session 自動載入。**只放路由與不可漏的硬規則**，細節一律在 `docs/agent-ops/`。
> 改這份前先讀 [維護協議](docs/agent-ops/40-maintenance-protocol.md)。備份：`CLAUDE.md.bak`（原始）、`CLAUDE.md.bak2`（2026-07-25 瘦身前）。

## 運作制度

`docs/agent-ops/` 是給 AI session 的操作制度——harness 陷阱、模型調度、判斷 rubric、派工模板、維護協議、hook 建議。**開新 session 或不確定怎麼做時，先讀 [README 的檔案地圖](docs/agent-ops/README.md)** 再點進對應檔。

## Skill 路由

先套判斷閘：使用者只是**問問題、描述問題、想事情**時，先給答案或評估，**不要**動手改、也不要硬套重 skill（判準見 [20-judgment-rubrics.md](docs/agent-ops/20-judgment-rubrics.md)）。明確要求時才叫 skill，`/斜線指令` 直接照叫。

名稱不直觀、需要對照的只有兩個：產品點子／「值不值得做」／腦力激盪 → `office-hours`；架構審查 → `plan-eng-review`。其餘（investigate / ship / qa / review / retro / document-release / design-*）照 skill 自身描述判斷即可。

## 硬規則

完整背景在**全域 auto-memory**：`/Users/guantou/.claude/projects/-Users-guantou-Desktop-danmu-desktop/memory/MEMORY.md`。那不是 repo 檔案，session 開頭會自動注入 context——別在 repo 裡 `Read MEMORY.md`，會找不到。

1. **版本號改兩處**：bump 時 `danmu-desktop/package.json` 與 `server/config.py:APP_VERSION` 必須改成**同一個值**（現值直接讀這兩個檔，別憑印象）。發現兩處不一致時先問使用者以哪個為準，別自己猜。
2. **兩個執行期陷阱**：webpack 的 `__dirname` 在執行期 = `dist/`（路徑要寫成 `"../index.html"` 之類）；`renderer.bundle.js` 同時被 `index.html`（主視窗）與 `child.html`（overlay）載入，改 renderer 要顧兩邊。
3. **`server/routes/admin/` 是套件**（一 domain 一檔），不是單一 `admin.py`。
4. **權限不會擋你，判斷力要擋**：`.claude/settings.local.json` 已允許 `rm -rf ./*`、`git reset`。破壞性/不可逆操作先確認，改既有檔先備份。
5. **宣稱完成前先驗證，且不自驗**：程式碼跑測試／實跑並貼實際輸出；檔案產出用 fresh agent read-back。

## 常用指令

`make help` 列出全部（含 `docker-up-*` 系列）。`make test` / `make run` / `make lint-css` 就是下面前三項的包裝。

- 測試：`cd server && PYTHONPATH=.. uv run python -m pytest`（= `make test`）
- 全套（正確排除法，**沒有** make target）：`cd server && PYTHONPATH=.. uv run python -m pytest tests/ --ignore=tests/test_browser_isolated.py -q` —— browser 模組在全套會**故意** module-level skip，另用隔離方式跑，別誤判成回歸
- 跑 server：`cd server && PYTHONPATH=.. uv run python -m server.app`（= `make run`）
- CSS token 防回歸：`make lint-css` —— CI（`.github/workflows/test.yml`）已接入，新增裸 hex 色碼會讓 CI 失敗
- Webpack：`cd danmu-desktop && npx webpack`
- Tailwind：`cd server && npm run build:css`（首次先 `npm install`）；完整 build 用 `npm run build`
