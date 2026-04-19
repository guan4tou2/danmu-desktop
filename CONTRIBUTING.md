# 貢獻指南 / Contribution Guide

感謝您對本專案的興趣！以下提供中英雙語的貢獻流程。 / Thank you for contributing.

## 開發環境設定 / Development Environment

### 前置需求 / Requirements
- Python 3.11+
- [uv](https://github.com/astral-sh/uv)
- Node.js 18+ (前端 / renderer)
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
   - HTTP: `PYTHONPATH=.. uv run python -m server.app`
   - WebSocket: `PYTHONPATH=.. uv run python -m server.ws_app`
   - Frontend: `npm run start`

## 程式碼風格 / Code Style
- Python: Black, isort, flake8 (PEP 8)。
- JavaScript: ESLint / Airbnb style (if configured)。

## 設計系統 / Design System
- 單一來源：[`DESIGN.md`](./DESIGN.md) 涵蓋品牌定位、色彩、字型、間距、動效、無障礙、語氣
- 設計 tokens 於 `shared/tokens.css`（server 與 Electron 兩邊共用，build 時自動同步）
- 字型：Bebas Neue（hero display only）+ Noto Sans 家族（Latin/TC/JP/KR）+ JetBrains Mono
- 新色、新間距、新字級 **先加 token**，不要硬寫 hex / rem
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

翻譯檔案為 JSON，是唯一的修改來源。修改後必須重新生成 `i18n.js`。

| 目錄 | 用途 |
|---|---|
| `server/static/locales/{lang}/translation.json` | 伺服器 Web UI（474 keys） |
| `danmu-desktop/locales/{lang}/translation.json` | Electron client UI（68 keys） |

支援語言：`en`、`zh`、`ja`、`ko`

**修改翻譯的流程 / Workflow:**
```bash
# 1. 編輯 JSON 檔
vim server/static/locales/zh/translation.json

# 2. 重新生成 i18n.js（兩端各自執行）
cd server && npm run build:i18n
cd ../danmu-desktop && npm run build:i18n

# 3. Commit JSON 與生成的 i18n.js
git add server/static/locales/ server/static/js/i18n.js
git add danmu-desktop/locales/ danmu-desktop/i18n.js
```

> CI 會自動驗證 `i18n.js` 與 JSON 是否同步。若忘記執行 `build:i18n`，CI 會失敗並提示。

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
```
danmu-desktop/
├── server/              # Backend (Flask + WS)
│   ├── routes/
│   ├── services/
│   ├── managers/
│   ├── tests/
│   └── ...
├── danmu-desktop/       # Electron renderer
├── docs/                # Guides & archives
├── README.md / README-CH.md
└── ...
```

如有疑問，請開 Issue 或 PR。 / For questions, open an issue or PR.
