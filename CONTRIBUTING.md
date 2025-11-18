# 貢獻指南

感謝您對本專案的興趣！本文檔將幫助您了解如何為專案做出貢獻。

## 開發環境設定

### 前置需求

- Python 3.11+
- [uv](https://github.com/astral-sh/uv) (Python 套件管理器)
- Node.js 18+ (用於前端開發)
- Docker (可選，用於容器化部署)

### 設定步驟

1. **複製專案**
   ```bash
   git clone https://github.com/guan4tou2/danmu-desktop.git
   cd danmu-desktop
   ```

2. **設定環境變數**
   ```bash
   cp env.example .env
   # 編輯 .env 設定必要的環境變數
   ```

3. **安裝伺服器依賴**
   ```bash
   cd server
   uv sync
   ```

4. **安裝前端依賴**
   ```bash
   cd ../danmu-desktop
   npm install
   ```

5. **啟動開發伺服器**
   
   **終端 1 - HTTP 伺服器：**
   ```bash
   cd server
   PYTHONPATH=.. uv run python -m server.app
   ```
   
   **終端 2 - WebSocket 伺服器：**
   ```bash
   cd server
   PYTHONPATH=.. uv run python -m server.ws_app
   ```
   
   **終端 3 - 前端開發：**
   ```bash
   cd danmu-desktop
   npm run start
   ```

## 程式碼風格

### Python

- 使用 **Black** 進行程式碼格式化
- 使用 **isort** 進行 import 排序
- 使用 **flake8** 進行程式碼檢查
- 遵循 PEP 8 風格指南

**格式化程式碼：**
```bash
cd server
uv run black .
uv run isort .
```

**檢查程式碼：**
```bash
cd server
uv run flake8 . --max-line-length=100 --extend-ignore=E203,W503
```

### JavaScript

- 使用 ESLint 進行程式碼檢查
- 遵循 Airbnb JavaScript 風格指南（如果配置了）

## Pre-commit Hooks

專案使用 pre-commit hooks 自動檢查程式碼品質。首次使用前需要安裝：

```bash
pip install pre-commit
pre-commit install
```

之後每次 commit 時會自動執行檢查。

## 測試

### 執行測試

```bash
cd server
PYTHONPATH=.. uv run python -m pytest
```

### 測試覆蓋率

```bash
cd server
PYTHONPATH=.. uv run python -m pytest --cov=server --cov-report=html
```

### 撰寫測試

- 測試檔案應放在 `server/tests/` 目錄
- 測試檔案命名：`test_*.py`
- 使用 pytest fixtures 進行測試設定

**範例：**
```python
def test_example(client):
    response = client.post("/api/fire", json={"text": "test"})
    assert response.status_code == 200
```

## 提交規範

### Commit 訊息格式

使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
<type>(<scope>): <subject>

<body>

<footer>
```

**類型（type）：**
- `feat`: 新功能
- `fix`: 修復 bug
- `docs`: 文檔變更
- `style`: 程式碼格式（不影響功能）
- `refactor`: 重構
- `test`: 測試相關
- `chore`: 構建過程或輔助工具的變動

**範例：**
```
feat(api): 新增速率限制功能

為 /admin/* 端點添加速率限制，防止濫用

Closes #123
```

### Pull Request

1. **建立分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **進行變更**
   - 撰寫程式碼
   - 添加測試
   - 更新文檔

3. **提交變更**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

4. **推送並建立 PR**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **PR 檢查清單**
   - [ ] 程式碼通過所有測試
   - [ ] 程式碼通過 pre-commit hooks
   - [ ] 添加了必要的測試
   - [ ] 更新了相關文檔
   - [ ] Commit 訊息符合規範

## 專案結構

```
danmu-desktop/
├── server/              # 伺服器端程式碼
│   ├── routes/         # 路由定義
│   ├── services/       # 業務邏輯
│   ├── managers/       # 連線管理
│   ├── tests/          # 測試檔案
│   └── ...
├── danmu-desktop/      # 前端程式碼
│   ├── main.js        # Electron 主進程
│   ├── renderer.js    # 渲染進程
│   └── ...
└── ...
```

## 問題回報

### Bug 回報

請使用 GitHub Issues 回報 bug，並包含：
- 問題描述
- 重現步驟
- 預期行為
- 實際行為
- 環境資訊（OS、Python 版本等）
- 相關日誌或錯誤訊息

### 功能建議

歡迎提出功能建議！請在 Issues 中說明：
- 功能描述
- 使用場景
- 預期效果

## 行為準則

- 尊重所有貢獻者
- 接受建設性批評
- 專注於對專案最有利的事情
- 展現同理心

## 聯絡方式

如有問題，可以：
- 開啟 GitHub Issue
- 發送 Pull Request
- 查看專案文檔

感謝您的貢獻！🎉

