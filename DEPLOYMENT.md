# Deployment Guide

本文件說明如何部署 danmu-desktop 伺服器。

## 目錄

- [Docker 部署](#docker-部署)
- [手動部署](#手動部署)
- [環境變數說明](#環境變數說明)
- [生產環境建議](#生產環境建議)

## Docker 部署

### 前置需求

- Docker 20.10+
- Docker Compose 2.0+

### 快速開始

1. **複製環境變數範例檔**

   ```bash
   cp env.example .env
   ```

2. **編輯 `.env` 檔案**

   ```bash
   # 必須設定管理員密碼（二選一）
   # 方式 1: 使用明文密碼（僅用於開發）
   ADMIN_PASSWORD=your_secure_password_here

   # 方式 2: 使用雜湊密碼（推薦，用於生產環境）
   # 生成雜湊: python server/scripts/hash_password.py your_password
   # ADMIN_PASSWORD_HASHED=$2b$12$...

   # 可選：自訂端口
   PORT=4000
   WS_PORT=4001
   ```

3. **啟動服務**

   ```bash
   docker-compose up -d
   ```

4. **查看日誌**

   ```bash
   docker-compose logs -f
   ```

5. **停止服務**
   ```bash
   docker-compose down
   ```

### 使用 Redis 進行速率限制

如果需要使用 Redis 作為速率限制後端（適合多實例部署）：

```bash
# 啟動包含 Redis 的完整服務
docker-compose --profile redis up -d
```

並在 `.env` 中設定：

```bash
RATE_LIMIT_BACKEND=redis
REDIS_URL=redis://redis:6379/0
```

### 資料持久化

以下目錄會透過 volume 掛載，資料會保留在本地：

- `./server/user_fonts` - 使用者上傳的字型檔案
- `./server/static` - 靜態資源檔案
- `redis-data` (volume) - Redis 資料（如果啟用）

### 更新服務

```bash
# 拉取最新程式碼
git pull

# 重建並重啟容器
docker-compose up -d --build
```

## 手動部署

### 前置需求

- Python 3.11+
- [uv](https://github.com/astral-sh/uv) (Python 套件管理器)

### 安裝步驟

1. **複製專案**

   ```bash
   git clone https://github.com/guan4tou2/danmu-desktop
   cd danmu-desktop
   ```

2. **設定環境變數**

   ```bash
   cp env.example .env
   # 編輯 .env 設定管理員密碼等選項
   ```

3. **安裝依賴**

   ```bash
   cd server
   uv venv
   uv sync
   ```

4. **啟動服務**

   需要同時啟動兩個服務：

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

### 使用 systemd 服務（Linux）

建立 systemd 服務檔案以自動啟動：

**`/etc/systemd/system/danmu-server.service`**

```ini
[Unit]
Description=Danmu Desktop HTTP Server
After=network.target

[Service]
Type=simple
User=your-user
WorkingDirectory=/path/to/danmu-desktop/server
Environment="PYTHONPATH=/path/to/danmu-desktop"
EnvironmentFile=/path/to/danmu-desktop/.env
ExecStart=/path/to/uv run python -m server.app
Restart=always

[Install]
WantedBy=multi-user.target
```

**`/etc/systemd/system/danmu-ws-server.service`**

```ini
[Unit]
Description=Danmu Desktop WebSocket Server
After=network.target

[Service]
Type=simple
User=your-user
WorkingDirectory=/path/to/danmu-desktop/server
Environment="PYTHONPATH=/path/to/danmu-desktop"
EnvironmentFile=/path/to/danmu-desktop/.env
ExecStart=/path/to/uv run python -m server.ws_app
Restart=always

[Install]
WantedBy=multi-user.target
```

啟用服務：

```bash
sudo systemctl enable danmu-server danmu-ws-server
sudo systemctl start danmu-server danmu-ws-server
```

## 環境變數說明

| 變數名稱                  | 必填 | 預設值                     | 說明                                                                           |
| ------------------------- | ---- | -------------------------- | ------------------------------------------------------------------------------ |
| `ADMIN_PASSWORD`          | ⚠️   | `ADMIN_PASSWORD`           | 管理員面板密碼（與 `ADMIN_PASSWORD_HASHED` 二選一）                            |
| `ADMIN_PASSWORD_HASHED`   | ⚠️   | -                          | 管理員面板密碼雜湊值（推薦，使用 `server/scripts/hash_password.py` 生成）      |
| `PORT`                    | ❌   | `4000`                     | HTTP 伺服器端口                                                                |
| `WS_PORT`                 | ❌   | `4001`                     | WebSocket 伺服器端口                                                           |
| `SECRET_KEY`              | ❌   | 自動產生                   | Flask 密鑰（用於 session/CSRF）                                                |
| `FIRE_RATE_LIMIT`         | ❌   | `20`                       | 每時間窗口允許的請求數                                                         |
| `FIRE_RATE_WINDOW`        | ❌   | `60`                       | 速率限制時間窗口（秒）                                                         |
| `RATE_LIMIT_BACKEND`      | ❌   | `memory`                   | 速率限制後端：`memory` 或 `redis`                                              |
| `REDIS_URL`               | ⚠️   | `redis://localhost:6379/0` | Redis 連線 URL（使用 Redis 時必填）                                            |
| `LOG_LEVEL`               | ❌   | `INFO`                     | 日誌級別：`DEBUG`, `INFO`, `WARNING`, `ERROR`                                  |
| `LOG_FORMAT`              | ❌   | `text`                     | 日誌格式：`text` 或 `json`（JSON 格式用於日誌收集系統）                        |
| `FONT_TOKEN_EXPIRATION`   | ❌   | `900`                      | 字型下載 token 有效期限（秒）                                                  |
| `SESSION_COOKIE_SECURE`   | ❌   | `false`                    | 設為 `true` 如果使用 HTTPS                                                     |
| `SESSION_COOKIE_SAMESITE` | ❌   | `Lax`                      | Session Cookie SameSite 設定：`Strict`, `Lax`, `None`                          |
| `CORS_ORIGINS`            | ❌   | `*`                        | CORS 允許的來源（逗號分隔，例如：`http://localhost:3000,https://example.com`） |

⚠️ `ADMIN_PASSWORD` 和 `ADMIN_PASSWORD_HASHED` 至少需要設定一個。如果同時設定，優先使用 `ADMIN_PASSWORD_HASHED`。

⚠️ 使用 Redis 後端時 `REDIS_URL` 必填

## 生產環境建議

### 安全性

1. **強密碼與雜湊**

   - 使用強隨機密碼
   - **強烈建議使用密碼雜湊**：執行 `python server/scripts/hash_password.py your_password` 生成雜湊值
   - 將雜湊值設定為 `ADMIN_PASSWORD_HASHED` 環境變數
   - 定期更換密碼

2. **HTTPS**

   - 使用反向代理（如 Nginx）提供 HTTPS
   - 設定 SSL/TLS 憑證

3. **防火牆**

   - 僅開放必要端口（4000, 4001）
   - 限制管理員面板訪問 IP

4. **環境變數**
   - 不要在程式碼中硬編碼密碼
   - 使用 `.env` 檔案或密鑰管理服務

### 效能

1. **速率限制**

   - 生產環境建議使用 Redis 後端
   - 根據實際需求調整 `FIRE_RATE_LIMIT` 和 `FIRE_RATE_WINDOW`

2. **反向代理**

   - 使用 Nginx 或 Traefik 作為反向代理
   - 啟用 gzip 壓縮
   - 設定適當的快取策略

3. **監控**
   - 設定日誌收集（如 ELK Stack）
   - 使用 `LOG_FORMAT=json` 啟用 JSON 格式日誌，便於日誌收集系統處理
   - 監控服務健康狀態（使用 `/health` 端點）
   - 設定告警機制

### Nginx 範例配置

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:4000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

### 備份

定期備份以下資料：

- `server/user_fonts/` - 使用者上傳的字型
- `.env` - 環境變數配置（不含敏感資訊）
- Redis 資料（如果使用）

## 故障排除

### 服務無法啟動

1. 檢查端口是否被占用：

   ```bash
   lsof -i :4000
   lsof -i :4001
   ```

2. 檢查日誌：
   ```bash
   docker-compose logs
   # 或
   journalctl -u danmu-server -u danmu-ws-server
   ```

### 連線問題

1. 確認防火牆規則
2. 檢查 WebSocket 端口（4001）是否正確開放
3. 驗證客戶端 IP 和端口設定

### 效能問題

1. 檢查系統資源使用情況
2. 考慮啟用 Redis 後端進行速率限制
3. 調整日誌級別減少 I/O 負擔
