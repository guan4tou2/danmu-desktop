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
   cp env.example .env
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
