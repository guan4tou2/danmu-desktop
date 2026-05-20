# Danmu Fire Server

彈幕桌面伺服器端應用程式。

## 快速開始

### 使用 Docker（推薦）

```bash
# 從專案根目錄
docker-compose up -d
```

> 正式部署對外只需要 `443` HTTPS/WSS 入口；WebSocket 走同一個入口的 `/ws`
>（`wss://<host>/ws`）。
> 放置 `nginx/certs/fullchain.pem` 與 `nginx/certs/privkey.pem` 後，使用 `docker-compose --profile https up -d` 啟用 `443` HTTPS/WSS 反向代理。

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

```
server/
├── app.py              # HTTP + WebSocket (/ws) 伺服器主程式
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
│   └── flask_ws.py     # Flask /ws route 實作
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
