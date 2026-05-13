# Danmu Fire Server

彈幕桌面伺服器端應用程式。

## 快速開始

### 使用 Docker（推薦）

```bash
# 從專案根目錄
docker-compose up -d
```

> Compose 預設會啟動 Nginx `reverse-proxy`，對外端口為 `4000/4001`，server 容器僅內網可見。
> 可選 HTTPS：放置 `nginx/certs/fullchain.pem` 與 `nginx/certs/privkey.pem` 後，使用 `docker-compose --profile https up -d` 啟用 `80/443` 反向代理與 HTTP→HTTPS 轉址。

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
   # HTTP 伺服器
   PYTHONPATH=.. uv run python -m server.app

   # WebSocket 伺服器（另一個終端）
   PYTHONPATH=.. uv run python -m server.ws_app
   ```

## 專案結構

```
server/
├── app.py              # HTTP 伺服器主程式
├── ws_app.py           # WebSocket 伺服器主程式
├── config.py           # 配置管理
├── routes/             # Flask 路由藍圖
│   ├── admin.py        # 管理員面板路由
│   ├── api.py          # API 路由
│   └── main.py         # 主頁路由
├── services/           # 業務邏輯服務
│   ├── fonts.py        # 字型管理
│   ├── messaging.py    # 訊息傳遞
│   ├── security.py     # 安全功能（CSRF, Rate Limit）
│   └── settings.py     # 設定管理
├── managers/           # 狀態管理器
│   ├── connections.py  # 連線管理
│   └── settings.py     # 設定儲存
├── ws/                 # WebSocket 相關
│   └── server.py       # WebSocket 伺服器實作
├── templates/          # HTML 模板
├── static/             # 靜態資源
└── tests/              # 測試檔案
```

## 環境變數

詳見專案根目錄的 `.env.example` 檔案。

## 開發

### 執行測試

```bash
PYTHONPATH=.. uv run python -m pytest
```

### 程式碼風格

專案使用標準 Python 風格，建議使用 `black` 和 `flake8` 進行格式化與檢查。
