# Deployment Guide / 部署指南

This bilingual guide explains how to deploy the danmu-desktop server. / 本文件提供中英文部署說明。

## Contents / 目錄
- [Docker Deployment / Docker 部署](#docker-deployment--docker-部署)
- [Manual Deployment / 手動部署](#manual-deployment--手動部署)
- [Environment Variables / 環境變數說明](#environment-variables--環境變數說明)
- [Production Tips / 生產環境建議](#production-tips--生產環境建議)

## Docker Deployment / Docker 部署 {#docker-deployment--docker-部署}

### Prerequisites / 前置需求
- Docker 20.10+
- Docker Compose 2.0+

### Quick Start / 快速開始

#### A. Run published Docker Hub image / 直接使用 Docker Hub 映像
1. Pull & run / 直接執行：
   ```bash
   docker run -d --name danmu-server \
     -p 4000:4000 \
     -p 4001:4001 \
     -e ADMIN_PASSWORD=your_secure_password \
     -v danmu_fonts:/app/server/user_fonts \
     -v danmu_static:/app/server/static \
     -v danmu_logs:/app/server/logs \
     albetyty/danmu-server:latest
   ```
2. Optional restart policy / 建議加入：
   ```bash
   --restart unless-stopped
   ```
3. Tags & platforms / 標籤與架構：
   - `latest`：穩定版（對應 `main`）
   - `main`：隨 `main` 更新的滾動版本
   - `<git-sha>`：特定 commit 的不可變版本
   - 提供 `linux/amd64` 與 `linux/arm64/v8`
4. Update / 更新：
   ```bash
   docker pull albetyty/danmu-server:latest
   docker stop danmu-server && docker rm danmu-server
   # rerun the command above / 重新執行上方指令
   ```

#### B. Build via Docker Compose / 使用 Docker Compose 建置
1. **Copy env file / 複製環境檔**
   ```bash
   cp env.example .env
   ```
2. **Edit `.env` / 編輯 `.env`**
   ```bash
   ADMIN_PASSWORD=your_secure_password_here   # 或設定 ADMIN_PASSWORD_HASHED
   PORT=4000
   WS_PORT=4001
   ```
3. **Start services / 啟動服務**
   ```bash
   docker-compose up -d
   ```
4. **View logs / 查看日誌**
   ```bash
   docker-compose logs -f
   ```
5. **Stop / 停止**
   ```bash
   docker-compose down
   ```

### Redis Rate Limiting / Redis 速率限制
```bash
docker-compose --profile redis up -d
```
`.env` 設定 / set:
```bash
RATE_LIMIT_BACKEND=redis
REDIS_URL=redis://redis:6379/0
```

### Persistent Data / 資料持久化
- `./server/user_fonts` – user-uploaded fonts / 使用者字型
- `./server/static` – static assets / 靜態資源
- `redis-data` volume – Redis data (if enabled)

### Update Services / 更新服務
```bash
git pull
docker-compose up -d --build
```

## Manual Deployment / 手動部署 {#manual-deployment--手動部署}

### Requirements / 前置需求
- Python 3.11+
- [uv](https://github.com/astral-sh/uv)

### Steps / 安裝步驟
1. **Clone repo / 複製專案**
   ```bash
   git clone https://github.com/guan4tou2/danmu-desktop
   cd danmu-desktop
   ```
2. **Configure env / 設定環境**
   ```bash
   cp env.example .env
   ```
3. **Install deps / 安裝依賴**
   ```bash
   cd server
   uv venv
   uv sync
   ```
4. **Run services / 啟動服務**
   - HTTP server:
     ```bash
     cd server
     PYTHONPATH=.. uv run python -m server.app
     ```
   - WebSocket server:
     ```bash
     cd server
     PYTHONPATH=.. uv run python -m server.ws_app
     ```

### systemd Units / Linux systemd 服務
Create `danmu-server.service` 與 `danmu-ws-server.service` – replace paths as needed.
Enable / 啟用：
```bash
sudo systemctl enable danmu-server danmu-ws-server
sudo systemctl start danmu-server danmu-ws-server
```

## Environment Variables / 環境變數說明 {#environment-variables--環境變數說明}

| Variable | 必填 | Default | Description / 說明 |
| --- | --- | --- | --- |
| `ADMIN_PASSWORD` | ⚠️ | `ADMIN_PASSWORD` | Admin password (plain)。
| `ADMIN_PASSWORD_HASHED` | ⚠️ | - | Bcrypt hash (recommended)。
| `PORT` | ❌ | `4000` | HTTP port / HTTP 端口。
| `WS_PORT` | ❌ | `4001` | WebSocket port / WebSocket 端口。
| `SECRET_KEY` | ❌ | random | Flask secret key / Session 密鑰。
| `RATE_LIMIT_BACKEND` | ❌ | `memory` | `memory` 或 `redis`。
| `REDIS_URL` | ❌ | `redis://localhost:6379/0` | Redis 連線字串。
| `LOG_LEVEL` | ❌ | `INFO` | Logging level / 日誌等級。
| `LOG_FORMAT` | ❌ | `text` | `text` or `json`。
| `SESSION_COOKIE_SECURE` | ❌ | `false` | HTTPS-only cookie。
| `SESSION_COOKIE_SAMESITE` | ❌ | `Lax` | Cookie SameSite (Strict/Lax/None)。
| `FONT_TOKEN_EXPIRATION` | ❌ | `900` | Font token TTL (seconds)。
| `ADMIN_RATE_LIMIT` | ❌ | `60` | Admin requests per window / 管理端速率。
| `ADMIN_RATE_WINDOW` | ❌ | `60` | Time window seconds。
| `API_RATE_LIMIT` | ❌ | `30` | Public API rate limit。
| `API_RATE_WINDOW` | ❌ | `60` | Public API window。

Refer to `env.example` for the complete list / 更多設定請見 `env.example`。

## Production Tips / 生產環境建議 {#production-tips--生產環境建議}
1. **Use hashed password / 使用雜湊密碼**：`server/scripts/hash_password.py`。
2. **Enable HTTPS** (Nginx/Caddy) / 透過 Nginx 或 Caddy 啟用 HTTPS。
3. **Reverse proxy** – forward `/`→4000, `/ws/`→4001，確保 `Upgrade` header。
4. **Logging** – consider `LOG_FORMAT=json` for centralized log ingestion / 建議使用 JSON 日誌。
5. **Backup** – `.env`, `server/user_fonts`, custom static files / 定期備份關鍵檔案。
