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
     ghcr.io/guan4tou2/danmu-server:latest
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
   docker pull ghcr.io/guan4tou2/danmu-server:latest
   docker stop danmu-server && docker rm danmu-server
   # rerun the command above / 重新執行上方指令
   ```

#### B. Build via Docker Compose / 使用 Docker Compose 建置
1. **Download config files only / 僅下載設定檔（不需 clone 整個 repo）**
   ```bash
   curl -O https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/docker-compose.yml
   curl -O https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/.env.example
   ```
2. **Configure / 設定環境**
   ```bash
   cp .env.example .env
   # Edit .env — set ADMIN_PASSWORD or ADMIN_PASSWORD_HASHED
   ```
3. **Start services / 啟動服務**
   ```bash
   docker compose up -d
   ```
4. **View logs / 查看日誌**
   ```bash
   docker compose logs -f
   ```
5. **Stop / 停止**
   ```bash
   docker compose down
   ```

### HTTPS — Self-Signed Certificate / 自簽憑證（自動產生）

Which scenario applies to you? / 選擇適合你的情境：

| Scenario / 情境 | `.env` setting / 設定 |
|---|---|
| Local / LAN only（localhost、192.168.x.x）| *(nothing extra needed)* |
| **Public IP, no domain** / 公網 IP，無 domain（e.g. VPS `1.2.3.4`）| `SERVER_IP=1.2.3.4` |
| Domain without Let's Encrypt / 有 domain 但不用 Let's Encrypt | `SERVER_DOMAIN=danmu.example.com` |

The certificate is auto-generated on first start with the correct SAN. Browser will still show an "untrusted issuer" warning (self-signed), but **no hostname mismatch**. / 首次啟動自動產生含正確 SAN 的憑證。瀏覽器仍會顯示「不受信任的憑證機構」警告（自簽），但**不會有 hostname 不符的錯誤**。

```bash
curl -O https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/docker-compose.yml
curl -O https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/docker-compose.https.yml
curl -O https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/.env.example
mkdir -p nginx/certs
curl -o nginx/nginx-https.conf https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/nginx/nginx-https.conf
cp .env.example .env
# Edit .env — set ADMIN_PASSWORD and SERVER_IP or SERVER_DOMAIN if needed
docker compose -f docker-compose.yml -f docker-compose.https.yml up -d
```
To replace with a real cert, drop `fullchain.pem` / `privkey.pem` into `nginx/certs/` and restart.

### HTTPS — Traefik + Let's Encrypt / 真實憑證（自動申請與續約）
Requires a public domain with port 80 accessible from the internet. / 需要公開 domain，且 80 port 可從網際網路連線。
```bash
curl -O https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/docker-compose.yml
curl -O https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/docker-compose.traefik.yml
curl -O https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/.env.example
mkdir -p traefik && touch traefik/acme.json && chmod 600 traefik/acme.json
cp .env.example .env
# Edit .env — set ADMIN_PASSWORD, DOMAIN=yourdomain.com, ACME_EMAIL=you@example.com
docker compose -f docker-compose.yml -f docker-compose.traefik.yml up -d
```
Traefik automatically obtains and renews the certificate via Let's Encrypt HTTP challenge.

### Redis Rate Limiting / Redis 速率限制
```bash
curl -O https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/docker-compose.yml
curl -O https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/docker-compose.redis.yml
curl -O https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/.env.example
cp .env.example .env
docker compose -f docker-compose.yml -f docker-compose.redis.yml up -d
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
docker compose up -d --build
```

## Manual Deployment / 手動部署 {#manual-deployment--手動部署}

### Requirements / 前置需求
- Python 3.11+
- [uv](https://github.com/astral-sh/uv)

### Steps / 安裝步驟
1. **Clone repo / 複製專案**

   Full clone:
   ```bash
   git clone https://github.com/guan4tou2/danmu-desktop
   cd danmu-desktop
   ```

   Server-only (skips Electron client, ~70% less data / 僅下載 server，跳過 Electron client):
   ```bash
   git clone --filter=blob:none --sparse https://github.com/guan4tou2/danmu-desktop
   cd danmu-desktop
   git sparse-checkout set server .env.example
   ```
2. **Configure env / 設定環境**
   ```bash
   cp .env.example .env
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
| `WS_HOST` | ❌ | `0.0.0.0` | Dedicated WS bind host / 專用 WS 綁定位址。 |
| `WS_REQUIRE_TOKEN` | ❌ | `false` | Dedicated WS token auth / 專用 WS token 驗證。When `false`, reachable clients can connect without token. |
| `WS_AUTH_TOKEN` | ❌ | empty | Shared token for dedicated WS clients / 專用 WS 共用 token。 |
| `SECRET_KEY` | ✅ (production) | random in dev | Flask secret key / Session 密鑰。Production startup refuses an auto-generated key. |
| `TRUSTED_HOSTS` | ✅ (production) | empty | Allowed hostnames for Host header validation / Host header 驗證白名單。Production startup refuses an empty value. |
| `RATE_LIMIT_BACKEND` | ❌ | `memory` | `memory` 或 `redis`。
| `REDIS_URL` | ❌ | `redis://localhost:6379/0` | Redis 連線字串。
| `LOG_LEVEL` | ❌ | `INFO` | Logging level / 日誌等級。
| `LOG_FORMAT` | ❌ | `text` | `text` or `json`。
| `SESSION_COOKIE_SECURE` | ✅ (production) | auto-`true` in production | HTTPS-only cookie。Production startup refuses `false`. |
| `SESSION_COOKIE_SAMESITE` | ❌ | `Strict` | Cookie SameSite (Strict/Lax/None)。
| `HSTS_ENABLED` | ❌ | `false` | Opt-in `Strict-Transport-Security` header for HTTPS responses. Enable only if this app is always served over HTTPS. |
| `HSTS_MAX_AGE` | ❌ | `31536000` | HSTS max-age in seconds. |
| `HSTS_INCLUDE_SUBDOMAINS` | ❌ | `false` | Append `includeSubDomains` to HSTS when enabled. |
| `FONT_TOKEN_EXPIRATION` | ❌ | `900` | Font token TTL (seconds)。
| `ADMIN_RATE_LIMIT` | ❌ | `60` | Admin requests per window / 管理端速率。
| `ADMIN_RATE_WINDOW` | ❌ | `60` | Time window seconds。
| `API_RATE_LIMIT` | ❌ | `30` | Public API rate limit。
| `API_RATE_WINDOW` | ❌ | `60` | Public API window。

Refer to `.env.example` for the complete list / 更多設定請見 `.env.example`。

### dotenv Precedence / dotenv 優先順序

This project uses `python-dotenv` which loads `.env` values **as overrides** of existing environment variables by default. This means `.env` file values take precedence over runtime environment variables set via `docker run -e` or shell exports.

本專案使用 `python-dotenv`，`.env` 檔案中的值會**覆蓋**已存在的環境變數。也就是說，`.env` 檔案的優先順序高於透過 `docker run -e` 或 shell `export` 設定的值。

**Example / 範例：**
```bash
# This will NOT work as expected if .env contains ADMIN_PASSWORD=changeme
# 如果 .env 中有 ADMIN_PASSWORD=changeme，以下不會生效：
ADMIN_PASSWORD=mysecret python -m server.app
# server will use "changeme" from .env, not "mysecret"

# Solution: edit .env directly, or remove the variable from .env
# 解法：直接編輯 .env，或從 .env 中移除該變數
```

For Docker deployments, the `docker-compose.yml` passes env vars from `.env` to the container. If running `docker run -e`, ensure no conflicting `.env` is mounted into the container.

Docker 部署時，`docker-compose.yml` 會從 `.env` 傳遞環境變數。若使用 `docker run -e`，請確保容器內無衝突的 `.env` 檔案。

## Production Tips / 生產環境建議 {#production-tips--生產環境建議}
1. **Use hashed password / 使用雜湊密碼**：`server/scripts/hash_password.py`。
2. **Enable HTTPS** (Nginx/Caddy) / 透過 Nginx 或 Caddy 啟用 HTTPS。
3. **Set production security baseline** – provide a persistent `SECRET_KEY`, keep `SESSION_COOKIE_SECURE=true`, and set real `TRUSTED_HOSTS`; the app now refuses startup if those are unsafe.
4. **Reverse proxy** – forward `/`→4000, `/ws/`→4001，確保 `Upgrade` header。
5. **Dedicated WS exposure** – default `WS_REQUIRE_TOKEN=false` means reachable clients can connect without token. If you expose port `4001` outside localhost or a trusted LAN, enable `WS_REQUIRE_TOKEN=true` and set `WS_AUTH_TOKEN`, or restrict access at the proxy/firewall layer.
6. **Security headers** – the app now emits a nonce-based CSP by default. Keep custom inline scripts minimal and use the template nonce if you must add one. HSTS remains opt-in via `HSTS_ENABLED=true` and should only be enabled when all user traffic is HTTPS.
7. **Logging** – consider `LOG_FORMAT=json` for centralized log ingestion / 建議使用 JSON 日誌。
8. **Backup** – `.env`, `server/user_fonts`, custom static files / 定期備份關鍵檔案。

## WebSocket over TLS (wss://) / WebSocket 加密連線

The overlay page connects via plain `ws://` by default, which is fine for local OBS Browser Source usage. For remote or public deployments, use a reverse proxy to terminate TLS:

以下範例是 Nginx 的 wss:// 設定：

```nginx
# /etc/nginx/sites-available/danmu
server {
    listen 443 ssl;
    server_name danmu.example.com;

    ssl_certificate     /etc/letsencrypt/live/danmu.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/danmu.example.com/privkey.pem;

    # HTTP API
    location / {
        proxy_pass http://127.0.0.1:4000;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # WebSocket (wss:// -> ws://)
    location /ws/ {
        proxy_pass http://127.0.0.1:4001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_read_timeout 3600s;
    }
}
```

For Caddy (auto-HTTPS):

```
danmu.example.com {
    reverse_proxy /ws/* 127.0.0.1:4001
    reverse_proxy * 127.0.0.1:4000
}
```

## Rate Limiting with Redis / 使用 Redis 做速率限制

By default, rate limiting uses in-memory counters that reset on server restart. For high-traffic or multi-worker deployments, switch to Redis:

預設使用記憶體計數器，重啟歸零。多 worker 或高流量場景建議改用 Redis：

```bash
# .env
RATE_LIMIT_BACKEND=redis
REDIS_URL=redis://localhost:6379/0
```

Install the Redis extra:
```bash
uv sync --extra redis
```

## Auto-Update / 自動更新

The Electron app includes `electron-updater` which checks GitHub Releases for new versions:
- First check: 10 seconds after startup
- Periodic checks: every 4 hours
- User is prompted before download and before restart

For this to work, the CI build must upload `latest.yml` / `latest-mac.yml` / `latest-linux.yml` alongside the app binaries in each GitHub Release. This is already configured in `.github/workflows/build.yml`.
