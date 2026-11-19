# 貢獻指南 / Contribution Guide

感謝您對本專案的興趣！以下提供中英雙語的貢獻流程。 / Thank you for contributing.

## 開發環境設定 / Development Environment

### 前置需求 / Requirements
- Python 3.11+
- [uv](https://github.com/astral-sh/uv)
- Node.js 22.12+ (前端 / renderer；`server/package.json` 與 `danmu-desktop/package.json` 的 `engines` 都是 `>=22.12.0`)
- Docker (optional for deployment)

### 設定步驟 / Setup Steps
1. **複製專案 / Clone repo**
   ```bash
   git clone https://github.com/guan4tou2/danmu-desktop.git
   cd danmu-desktop
   ```
2. **環境變數 / Env config**
   ```bash
   cp .env.example .env
   # Edit .env for passwords / 設定管理員密碼
   ```
3. **伺服器依賴 / Server deps**
   ```bash
   cd server
   uv sync
   ```
4. **前端依賴 / Frontend deps**
   ```bash
   cd ../danmu-desktop
   npm install
   ```
5. **啟動服務 / Run dev servers**
   - HTTP + WebSocket `/ws`: `PYTHONPATH=.. uv run python -m server.app`
   - Frontend: `npm run start`

## 程式碼風格 / Code Style
- Python: Black, isort, flake8 (PEP 8)。
- JavaScript: ESLint / Airbnb style (if configured)。

## 設計系統 / Design System
- 單一來源：[`DESIGN.md`](./DESIGN.md) 涵蓋品牌定位、色彩、字型、間距、動效、無障礙、語氣
- 設計 tokens 於 `shared/tokens.css`（server 與 Electron 兩邊共用，build 時自動同步）
- 字型：Bebas Neue（hero display only）+ Noto Sans 家族（Latin/TC/JP/KR）+ JetBrains Mono
- 新色、新間距、新字級 **先加 token**，不要硬寫 hex / rem
- CSS token 防回歸有 CI lint 把關：`make lint-css`（= `node scripts/check-css-tokens.mjs`，對照
  `scripts/css-token-baseline.json`）。CSS 檔新增裸 hex 色碼會讓 `.github/workflows/test.yml` 失敗。
- 對比率：所有 user-facing 文字需達 WCAG AA (body 4.5:1, large 3:1)
- 參考效能 baseline: [`docs/perf/baseline-v4.6.1.md`](./docs/perf/baseline-v4.6.1.md)

Format / 格式化:
```bash
cd server
uv run black .
uv run isort .
```
Lint / 檢查:
```bash
uv run flake8 . --max-line-length=100 --extend-ignore=E203,W503
make lint-css   # CSS 設計 token 防回歸
```

## Pre-commit Hooks / 預先提交檢查
```bash
pip install pre-commit
pre-commit install
```
Hooks 會在每次 commit 時自動執行。

## 測試 / Testing
Run tests:
```bash
cd server
PYTHONPATH=.. uv run python -m pytest
```
Coverage:
```bash
PYTHONPATH=.. uv run python -m pytest --cov=server --cov-report=html
```
Place tests in `server/tests/` (use pytest fixtures)。

## i18n 翻譯 / Translations

翻譯檔案為 JSON，是唯一的修改來源。修改後必須重新生成對應的 `i18n*.js`。**有兩支各自獨立的產生器**（server 與 Electron client），只跑一支會讓 CI 變紅。

| 來源 | 產生器（指令） | 生成物（要 commit） |
|---|---|---|
| `server/static/locales/{lang}/translation.json`（伺服器 Web UI） | `cd server && npm run build:i18n` | `server/static/js/i18n.js` 與 `i18n.{en,zh,ja,ko}.js` |
| `danmu-desktop/locales/{lang}/translation.json`（Electron client UI） | `cd danmu-desktop && npm run build:i18n` | `danmu-desktop/i18n.js` |

支援語言：`en`、`zh`、`ja`、`ko`。key 數會一直變動，這裡不寫死；要看目前數量可直接執行產生器（會印出每個語言的 key 數）。

**修改翻譯的流程 / Workflow:**
```bash
# 1. 編輯 JSON 檔
vim server/static/locales/zh/translation.json

# 2. 重新生成（改哪一邊就跑哪一邊；兩邊都改就兩支都跑）
(cd server && npm run build:i18n)
(cd danmu-desktop && npm run build:i18n)

# 3. Commit JSON 與生成物（在專案根目錄）
git add server/static/locales/ server/static/js/i18n*.js
git add danmu-desktop/locales/ danmu-desktop/i18n.js
```

> CI（`.github/workflows/test.yml`）會分別驗證兩邊的生成物與 JSON 是否同步。忘記執行 `build:i18n` 會失敗。

## Admin JS bundle

後台頁面（`server/templates/admin.html`）只載入一支 `server/static/js/admin.bundle.js`；`server/static/js/admin-*.js` 是它的原始碼。改了任何 admin 的 JS 之後必須重建並 commit bundle：

```bash
cd server && npm run build:admin-js
```

- 檔案清單與**載入順序**的唯一來源是 `server/static/js/admin-bundle.manifest.json`；新增模組就在那裡加一行（放在它依賴的模組之後）。這些檔案是全域 IIFE、靠 `window.*` 溝通，順序不能亂動（詳見 `server/scripts/build-admin-bundle.mjs` 開頭註解）。
- `i18n.js` 不在 bundle 內。
- CI 會重建並檢查 `admin.bundle.js` 是否與原始碼同步。
- `cd server && npm run build` 會依序跑 i18n、tailwind、viewer CSS 與 admin bundle。

## 已知待辦 / Known Deferred Work

已確認但尚未著手的項目記錄於 [`TODOS.md`](./TODOS.md)（依元件分組，標優先級）。開始新工作前可先掃一眼，避免重工。

## 提交規範 / Commit & PR
- 使用 [Conventional Commits](https://www.conventionalcommits.org/)。
  - `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`。
- 開發流程 / Workflow:
  1. `git checkout -b feature/your-feature`
  2. 撰寫程式碼與測試 / implement & test
  3. `git commit -m "feat: ..."`
  4. `git push` & 開 PR
- PR checklist / 檢查：
  - 測試通過
  - pre-commit 無錯
  - 文件同步更新
  - Commit 訊息符合規範

## 專案結構 / Project Structure

資料流與各模組的職責見 [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)；文件索引見 [`docs/README.md`](./docs/README.md)。

```
danmu-desktop/
├── server/              # Backend (Flask + WS /ws)：routes/ services/ managers/ ws/ static/ templates/ tests/ tests-js/
├── danmu-desktop/       # Electron client (display endpoint)
├── shared/              # server 與 Electron 共用的 tokens.css、danmu-effects.js、particle-bg.js
├── slido-extension/     # Chrome MV3 擴充功能：把 Slido 提問轉成彈幕
├── scripts/             # repo 層級腳本（CSS token lint、備份、部署、版本號）
├── nginx/               # HTTPS / HTTP 反向代理設定（docker compose profile）
├── traefik/             # Traefik profile 的 acme.json 存放處（僅 .gitkeep，見 DEPLOYMENT.md）
├── docs/                # Guides & archives
├── README.md / README-CH.md
└── ...
```

如有疑問，請開 Issue 或 PR。 / For questions, open an issue or PR.
