# Danmu Fire Server

彈幕桌面伺服器端應用程式。

## 快速開始

### 使用 Docker（推薦）

```bash
# 從專案根目錄。先產生 .env（沒有 ADMIN_PASSWORD 伺服器不會啟動）：
./setup.sh init                           # 互動式；或 cp .env.example .env 後自行設定 ADMIN_PASSWORD

# 再擇一 profile（完整說明見 ../DEPLOYMENT.md）
docker compose --profile https up -d     # IP / 網域 + HTTPS 自簽憑證（推薦；桌面版需要 TLS）
docker compose --profile traefik up -d   # 網域 + Let's Encrypt
docker compose --profile http up -d      # 本機 HTTP（僅開發，桌面版連不上）
```

> 正式部署對外只需要 `443` HTTPS/WSS 入口；WebSocket 走同一個入口的 `/ws`
>（`wss://<host>/ws`）。`https` profile 會在第一次啟動時自動產生自簽憑證，
> 憑證設定、自訂 port、Let's Encrypt 與 Redis 的做法請看 [`../DEPLOYMENT.md`](../DEPLOYMENT.md)。

### 手動安裝

1. 安裝依賴：
   ```bash
   uv sync
   ```

2. 設定環境變數：
   ```bash
   cp ../.env.example ../.env
   # 編輯 ../.env，至少設定 ADMIN_PASSWORD 或 ADMIN_PASSWORD_HASHED 其中一個
   ```
   可用 `python scripts/hash_password.py` 產生 bcrypt 雜湊並填入 `ADMIN_PASSWORD_HASHED`。

3. 啟動服務：
   ```bash
   # HTTP + WebSocket (/ws) 都由同一個 Flask/gevent server 提供
   PYTHONPATH=.. uv run python -m server.app
   ```

## 專案結構

資料流與各模組的職責見 [`../docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md)。

```
server/
├── app.py              # Flask app 工廠與 HTTP + WebSocket (/ws) 進入點
├── config.py           # 配置管理（環境變數、APP_VERSION、可設定的選項鍵）
├── state.py / utils.py # 共用狀態與小工具
├── routes/             # Flask 路由藍圖
│   ├── admin/          # 管理後台 API（套件，一個 domain 一個檔案）
│   ├── api.py          # 公開 API（/fire、/get_settings 等）
│   ├── main.py         # 觀眾頁 /、/overlay、登入／登出、改密碼
│   └── health.py       # /health 探針
├── services/           # 業務邏輯（過濾引擎、歷史、投票、Webhook、備份、JsonState 等）
├── managers/           # 連線與設定狀態管理器
├── ws/                 # WebSocket 實作（flask_ws.py，/ws）
├── static/             # 靜態資源：js（含 admin.bundle.js）、css、locales、字型、表情、貼圖、音效
├── templates/          # HTML 模板（觀眾頁、後台、overlay、錯誤頁）
├── effects/            # 內建 .dme 動畫效果（可熱重載）
├── themes/             # 主題 YAML（可熱重載）
├── plugins/            # 內建範例外掛
├── user_plugins/       # 使用者上傳或自行放入的外掛（.py）
├── runtime/            # 執行期狀態檔（設定、規則、token、歷史…）；Docker 部署要放在持久化 volume
├── tests/              # pytest
├── tests-js/           # 後台與觀眾頁 JS 的 jest 測試
└── scripts/            # 建置與維運腳本（build-i18n、build-admin-bundle、hash_password.py 等）
```

另有 `user_fonts/`（後台上傳的字型）。外掛寫法見 [`PLUGIN_GUIDE.md`](./PLUGIN_GUIDE.md)。

## 環境變數

詳見專案根目錄的 `.env.example` 檔案。

## 開發

### 執行測試

```bash
PYTHONPATH=.. uv run python -m pytest
```

### 前端建置

改了 `static/locales/` 或後台 JS 之後要重新生成產物（`npm run build:i18n`、`npm run build:admin-js`，或一次 `npm run build`）；細節見 [`../CONTRIBUTING.md`](../CONTRIBUTING.md)。

### 程式碼風格

專案使用標準 Python 風格，建議使用 `black` 和 `flake8` 進行格式化與檢查。
