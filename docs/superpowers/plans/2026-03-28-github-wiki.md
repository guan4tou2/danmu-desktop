# GitHub Wiki Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a complete, bilingual (EN + 繁中) GitHub Wiki for danmu-desktop with 11 pages covering user and developer audiences.

**Architecture:** Wiki pages are stored in the GitHub Wiki git repo (`<repo>.wiki.git`), separate from the main repo. Each page is a standalone Markdown file. A `_Sidebar.md` controls navigation.

**Tech Stack:** Markdown, GitHub Wiki

---

## Setup

- [ ] **Clone the wiki repo**

```bash
git clone https://github.com/guan4tou2/danmu-desktop.wiki.git
cd danmu-desktop.wiki
```

---

## Task 1: Sidebar Navigation

**Files:**
- Create: `_Sidebar.md`

- [ ] **Create `_Sidebar.md`**

```markdown
## danmu-desktop Wiki

### 👤 For Users
- [[Home]]
- [[Getting Started|Getting-Started]]
- [[Installation]]
- [[Configuration]]
- [[User Guide|User-Guide]]
- [[Admin Guide|Admin-Guide]]

### 🛠️ For Developers
- [[API Reference|API-Reference]]
- [[Webhooks & Integration|Webhooks-and-Integration]]
- [[Plugin Development|Plugin-Development]]
- [[Effects System|Effects-System]]
- [[Themes & Layouts|Themes-and-Layouts]]

### 🤝 Contributing
- [[Contributing]]
```

- [ ] **Commit**

```bash
git add _Sidebar.md
git commit -m "docs: add wiki sidebar navigation"
```

---

## Task 2: Home Page

**Files:**
- Create: `Home.md`

- [ ] **Create `Home.md`**

```markdown
# danmu-desktop

**Display bullet-screen comments directly on your desktop.**

![danmu display](https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/img/danmu%20display.png)

---

## 🚀 Quick Navigation

### 👤 I'm a User
→ I want to set up and use the danmu system

- [[Getting Started|Getting-Started]] — up and running in 5 minutes
- [[Installation]] — Docker Hub / Docker Compose / manual setup
- [[Configuration]] — environment variables and admin settings
- [[User Guide|User-Guide]] — sending danmu, polls, themes
- [[Admin Guide|Admin-Guide]] — blacklist, filter rules, history

### 🛠️ I'm a Developer
→ I want to integrate, extend, or contribute

- [[API Reference|API-Reference]] — REST endpoint documentation
- [[Webhooks & Integration|Webhooks-and-Integration]] — outbound webhooks, Slido bridge
- [[Plugin Development|Plugin-Development]] — write custom plugins in Python
- [[Effects System|Effects-System]] — create `.dme` animation effects
- [[Themes & Layouts|Themes-and-Layouts]] — custom themes and layout modes
- [[Contributing]] — dev environment, tests, PR conventions

---

## ✨ Feature Highlights

| Feature | Description |
|---|---|
| 🎯 Danmu overlay | Transparent overlay displays comments floating across the screen |
| 🎨 Effects (.dme) | Hot-pluggable YAML-defined CSS animations — rainbow, shake, bounce, and more |
| 🔌 Plugin system | Python plugins with hot-reload; hooks for fire, connect, poll vote, startup |
| 🔗 Webhooks | Outbound webhooks to Discord, Slack, or custom endpoints on danmu events |
| 🗳️ Polls | Create polls; audience votes by sending option keys as danmu |
| 🖼️ Stickers & Emoji | Keyword-triggered sticker images and custom emoji syntax (`:name:`) |
| 🎭 Themes | YAML-defined color/style presets with optional effects preset |
| 📋 History | Full danmu history with client fingerprint logging |
| 🔒 Security | Rate limiting, CSRF protection, blacklist, filter engine, HMAC webhooks |

---

## Links

[![GitHub](https://img.shields.io/badge/GitHub-guan4tou2%2Fdanmu--desktop-blue)](https://github.com/guan4tou2/danmu-desktop)
[![Docker Hub](https://img.shields.io/badge/Docker%20Hub-albetyty%2Fdanmu--server-blue)](https://hub.docker.com/r/albetyty/danmu-server)
[![License](https://img.shields.io/github/license/guan4tou2/danmu-desktop)](https://github.com/guan4tou2/danmu-desktop/blob/main/LICENSE)

---

---

# danmu-desktop（中文）

**直接在桌面上顯示彈幕。**

## 🚀 快速導覽

### 👤 我是使用者
→ 我想要部署並使用彈幕系統

- [[Getting Started|Getting-Started]] — 5 分鐘快速上手
- [[Installation]] — Docker Hub / Docker Compose / 手動安裝
- [[Configuration]] — 環境變數與管理員設定
- [[User Guide|User-Guide]] — 發彈幕、投票、主題切換
- [[Admin Guide|Admin-Guide]] — 黑名單、篩選規則、歷史記錄

### 🛠️ 我是開發者
→ 我想要整合、擴充或貢獻

- [[API Reference|API-Reference]] — REST API 端點文件
- [[Webhooks & Integration|Webhooks-and-Integration]] — Outbound Webhook、Slido 整合
- [[Plugin Development|Plugin-Development]] — 撰寫 Python Plugin
- [[Effects System|Effects-System]] — 建立 `.dme` 動畫特效
- [[Themes & Layouts|Themes-and-Layouts]] — 自訂主題與佈局模式
- [[Contributing]] — 開發環境、測試、PR 規範

## ✨ 功能亮點

| 功能 | 說明 |
|---|---|
| 🎯 彈幕 Overlay | 透明視窗顯示漂浮彈幕，覆蓋在桌面最上層 |
| 🎨 特效 (.dme) | 熱插拔 YAML 特效定義，支援彩虹、震動、彈跳等 8+ 種 |
| 🔌 Plugin 系統 | Python Plugin 熱插拔，提供 fire/connect/poll/startup 等 Hook |
| 🔗 Webhook | 彈幕事件觸發時推送至 Discord、Slack 或自訂端點 |
| 🗳️ 投票 | 建立投票，觀眾發送選項鍵即可投票 |
| 🖼️ 貼圖 & 表情包 | 關鍵字觸發貼圖圖片，支援自訂 `:name:` 表情語法 |
| 🎭 主題 | YAML 定義顏色/樣式預設，含特效預設支援 |
| 📋 歷史記錄 | 完整彈幕歷史，含客戶端指紋記錄 |
| 🔒 安全性 | 速率限制、CSRF 防護、黑名單、篩選引擎、HMAC Webhook 簽名 |
```

- [ ] **Commit**

```bash
git add Home.md
git commit -m "docs: add Home wiki page"
```

---

## Task 3: Getting Started

**Files:**
- Create: `Getting-Started.md`

- [ ] **Create `Getting-Started.md`**

```markdown
# Getting Started

Get danmu-desktop running in under 5 minutes.

## Prerequisites

Choose one:
- **Docker** (recommended) — any platform
- **Python 3.11+** + **Node.js 18+** — for manual setup

You also need the **Electron client** to display the overlay:
→ Download from [GitHub Releases](https://github.com/guan4tou2/danmu-desktop/releases)

## Step 1: Start the Server

```bash
docker run -d --name danmu-server \
  -p 4000:4000 \
  -p 4001:4001 \
  -e ADMIN_PASSWORD=changeme \
  albetyty/danmu-server:latest
```

The server is ready when `docker logs danmu-server` shows the Flask and WebSocket startup messages.

## Step 2: Open the Electron Client

1. Launch **danmu manager** (download above)
2. Enter your server IP and port: `your-ip:4001`
3. Click **Connect** — the overlay window appears on your desktop

> **macOS users:** Run this first to bypass Gatekeeper:
> ```bash
> sudo xattr -r -d com.apple.quarantine 'danmu manager.app'
> ```

## Step 3: Send Your First Danmu

1. Open `http://your-ip:4000` in a browser
2. Type a message and press **Send**
3. Watch it fly across your screen 🎉

## Troubleshooting

| Problem | Solution |
|---|---|
| Overlay window doesn't appear | Check Electron is connected (green status); firewall may block port 4001 |
| "No overlay connected" error | Open the Electron client first before sending danmu |
| Can't reach `http://ip:4000` | Check Docker is running: `docker ps`; verify port 4000 is not in use |
| macOS: app can't be opened | Run the `xattr` command above |

---

---

# 快速上手（中文）

5 分鐘內讓 danmu-desktop 跑起來。

## 前置需求

選擇其一：
- **Docker**（推薦）— 任何平台皆可
- **Python 3.11+** + **Node.js 18+** — 手動安裝用

另外需要 **Electron 客戶端** 才能顯示 Overlay：
→ 從 [GitHub Releases](https://github.com/guan4tou2/danmu-desktop/releases) 下載

## 第一步：啟動 Server

```bash
docker run -d --name danmu-server \
  -p 4000:4000 \
  -p 4001:4001 \
  -e ADMIN_PASSWORD=changeme \
  albetyty/danmu-server:latest
```

執行 `docker logs danmu-server` 看到 Flask 與 WebSocket 啟動訊息即代表就緒。

## 第二步：開啟 Electron 客戶端

1. 啟動 **danmu manager**（上方連結下載）
2. 輸入伺服器 IP 和端口：`your-ip:4001`
3. 點擊 **Connect** — Overlay 視窗出現在桌面上

> **macOS 使用者：** 先執行以下指令解除 Gatekeeper 限制：
> ```bash
> sudo xattr -r -d com.apple.quarantine 'danmu manager.app'
> ```

## 第三步：發送第一則彈幕

1. 用瀏覽器開啟 `http://your-ip:4000`
2. 輸入文字並按下 **送出**
3. 觀看彈幕飄過畫面 🎉

## 疑難排解

| 問題 | 解決方法 |
|---|---|
| Overlay 視窗沒出現 | 確認 Electron 已連線（綠色狀態）；防火牆可能封鎖 4001 |
| 出現「No overlay connected」錯誤 | 先開啟 Electron 客戶端再發彈幕 |
| 無法連線 `http://ip:4000` | 確認 Docker 執行中：`docker ps`；確認 4000 port 未被佔用 |
| macOS：無法開啟 App | 執行上方的 `xattr` 指令 |
```

- [ ] **Commit**

```bash
git add Getting-Started.md
git commit -m "docs: add Getting-Started wiki page"
```

---

## Task 4: Installation

**Files:**
- Create: `Installation.md`

- [ ] **Create `Installation.md`**

```markdown
# Installation

Three ways to run the server, plus the Electron client.

## Option 1: Docker Hub (Recommended)

No source code required. Pull and run:

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

Add `--restart unless-stopped` for production deployments.

### Using a Hashed Password (Recommended for Production)

Generate a bcrypt hash:
```bash
python server/scripts/hash_password.py
```

Then use the hash instead of plaintext:
```bash
-e ADMIN_PASSWORD_HASHED='$2b$12$...'
```

### Available Tags

| Tag | Description |
|---|---|
| `latest` | Stable build from `main` branch |
| `main` | Rolling alias of the newest `main` commit |
| `<git-sha>` | Immutable build for a specific commit |

### Updating

```bash
docker pull albetyty/danmu-server:latest
docker stop danmu-server && docker rm danmu-server
# Re-run the docker run command above
```

---

## Option 2: Docker Compose

```bash
git clone https://github.com/guan4tou2/danmu-desktop
cd danmu-desktop
cp env.example .env
# Edit .env — at minimum set ADMIN_PASSWORD or ADMIN_PASSWORD_HASHED
docker-compose up -d
```

Ports exposed: `4000` (HTTP), `4001` (WebSocket).

### HTTPS Mode

```bash
# Place certificate files:
# nginx/certs/fullchain.pem
# nginx/certs/privkey.pem
docker-compose --profile https up -d
```

Opens ports `80` and `443`. HTTP automatically redirects to HTTPS.

### Redis Rate Limiting

```bash
docker-compose --profile redis up -d
```

Required for multi-instance deployments to share rate limit counters.

### Let's Encrypt / Traefik

```bash
# Set DOMAIN and ACME_EMAIL in .env first
docker-compose --profile traefik up -d
```

Requires a public domain and port 80 accessible from the internet.

---

## Option 3: Manual Setup

```bash
git clone https://github.com/guan4tou2/danmu-desktop
cd danmu-desktop
cp env.example .env
vim .env  # Set ADMIN_PASSWORD

cd server
uv venv
uv sync
```

Start both servers (two terminals):

```bash
# Terminal 1: HTTP server
cd /path/to/danmu-desktop
PYTHONPATH=.. uv run --project server python -m server.app

# Terminal 2: WebSocket server
cd /path/to/danmu-desktop
PYTHONPATH=.. uv run --project server python -m server.ws_app
```

---

## Electron Client (Desktop Overlay)

1. Download the latest release from [GitHub Releases](https://github.com/guan4tou2/danmu-desktop/releases)
2. Choose installer or portable version (Windows/macOS)

**macOS — remove quarantine attribute:**
```bash
sudo xattr -r -d com.apple.quarantine 'danmu manager.app'
```

3. Launch the app
4. Enter your server IP and WebSocket port (default: `4001`)
5. Click **Connect**

---

---

# 安裝說明（中文）

## 選項 1：Docker Hub（推薦）

不需要原始碼，直接拉取並執行：

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

生產環境建議加上 `--restart unless-stopped`。

### 使用雜湊密碼（推薦用於生產環境）

生成 bcrypt 雜湊：
```bash
python server/scripts/hash_password.py
```

改用雜湊替代明文：
```bash
-e ADMIN_PASSWORD_HASHED='$2b$12$...'
```

### 更新

```bash
docker pull albetyty/danmu-server:latest
docker stop danmu-server && docker rm danmu-server
# 重新執行上方的 docker run 指令
```

---

## 選項 2：Docker Compose

```bash
git clone https://github.com/guan4tou2/danmu-desktop
cd danmu-desktop
cp env.example .env
# 編輯 .env，至少設定 ADMIN_PASSWORD 或 ADMIN_PASSWORD_HASHED
docker-compose up -d
```

對外端口：`4000`（HTTP）、`4001`（WebSocket）。

### HTTPS 模式

```bash
# 先放入憑證檔案：
# nginx/certs/fullchain.pem
# nginx/certs/privkey.pem
docker-compose --profile https up -d
```

開放 `80` 和 `443`，HTTP 自動重導向至 HTTPS。

### Redis 速率限制

```bash
docker-compose --profile redis up -d
```

多實例部署時必須啟用，確保所有 server 共享同一限流計數器。

---

## 選項 3：手動安裝

```bash
git clone https://github.com/guan4tou2/danmu-desktop
cd danmu-desktop
cp env.example .env
vim .env  # 設定 ADMIN_PASSWORD

cd server
uv venv
uv sync
```

啟動兩個 server（兩個終端）：

```bash
# 終端 1：HTTP server
PYTHONPATH=.. uv run --project server python -m server.app

# 終端 2：WebSocket server
PYTHONPATH=.. uv run --project server python -m server.ws_app
```

---

## Electron 客戶端（桌面 Overlay）

1. 從 [GitHub Releases](https://github.com/guan4tou2/danmu-desktop/releases) 下載最新版本
2. 選擇安裝版或可攜式版（Windows/macOS）

**macOS — 移除隔離屬性：**
```bash
sudo xattr -r -d com.apple.quarantine 'danmu manager.app'
```

3. 啟動應用程式
4. 輸入伺服器 IP 和 WebSocket 端口（預設：`4001`）
5. 點擊 **Connect**
```

- [ ] **Commit**

```bash
git add Installation.md
git commit -m "docs: add Installation wiki page"
```

---

## Task 5: Configuration

**Files:**
- Create: `Configuration.md`

- [ ] **Create `Configuration.md`**

```markdown
# Configuration

## Environment Variables

Copy `env.example` to `.env` and configure before starting:

```bash
cp env.example .env
```

### Required

| Variable | Description |
|---|---|
| `ADMIN_PASSWORD` | Plaintext admin password (dev only) |
| `ADMIN_PASSWORD_HASHED` | bcrypt hash (recommended for production) |

At least one of the above must be set.

### Server

| Variable | Default | Description |
|---|---|---|
| `PORT` | `4000` | HTTP server port |
| `WS_PORT` | `4001` | WebSocket server port |
| `SECRET_KEY` | auto-generated | Flask session secret — set a stable value in production |
| `SETTINGS_FILE` | temp file | Path for persisting runtime settings (color, font, speed, etc.) |
| `LOG_LEVEL` | `INFO` | Logging level: `DEBUG`, `INFO`, `WARNING`, `ERROR` |
| `LOG_FORMAT` | `text` | Log format: `text` or `json` |

### Security

| Variable | Default | Description |
|---|---|---|
| `TRUSTED_HOSTS` | `localhost,127.0.0.1` | Allowed hostnames for Host header validation — set your domain in production |
| `TRUST_X_FORWARDED_FOR` | `false` | Trust `X-Forwarded-For` for client IP — enable only behind a trusted reverse proxy |
| `SESSION_COOKIE_SECURE` | `true` | Set `false` for HTTP-only development |
| `SESSION_COOKIE_SAMESITE` | `Lax` | Options: `Strict`, `Lax`, `None` |
| `CORS_ORIGINS` | `*` | Comma-separated allowed origins |

### WebSocket

| Variable | Default | Description |
|---|---|---|
| `WS_REQUIRE_TOKEN` | `true` | Require `?token=` query param for Electron connections |
| `WS_AUTH_TOKEN` | (empty) | Shared token for Electron clients |
| `WS_MAX_CONNECTIONS` | `200` | Global max WebSocket connections |
| `WS_MAX_CONNECTIONS_PER_IP` | `10` | Per-IP max connections |
| `WS_MAX_SIZE` | `1048576` | Max incoming message size in bytes (1 MB) |
| `WS_MAX_QUEUE` | `16` | Incoming message queue depth |
| `WS_WRITE_LIMIT` | `32768` | Write buffer limit in bytes |
| `WEB_WS_ALLOWED_ORIGINS` | (empty) | Allowlist for browser WebSocket Origin header |
| `WS_ALLOWED_ORIGINS` | (empty) | Allowlist for Electron WebSocket Origin header |

### Rate Limiting

| Variable | Default | Description |
|---|---|---|
| `RATE_LIMIT_BACKEND` | `memory` | `memory` or `redis` |
| `FIRE_RATE_LIMIT` | `20` | Max danmu sends per window |
| `FIRE_RATE_WINDOW` | `60` | Window in seconds for fire rate limit |
| `ADMIN_RATE_LIMIT` | `60` | Max admin requests per window |
| `API_RATE_LIMIT` | `30` | Max API requests per window |
| `REDIS_URL` | — | Redis connection URL (required if using redis backend) |
| `REDIS_PASSWORD` | `changeme` | Redis password for Docker deployments |

### History

| Variable | Default | Description |
|---|---|---|
| `DANMU_HISTORY_MAX_RECORDS` | `10000` | Maximum stored danmu records |
| `DANMU_HISTORY_CLEANUP_HOURS` | `24` | Auto-delete records older than this many hours |

---

## Admin Panel Settings

Log in to `/admin` to configure these at runtime. Changes take effect immediately without restart.

| Setting | Format | Description |
|---|---|---|
| `Color` | `[enabled, 0, 0, "#FFFFFF"]` | Default danmu text color |
| `Opacity` | `[enabled, 0, 100, 70]` | Text opacity (0–100) |
| `FontSize` | `[enabled, 20, 100, 50]` | Font size in pixels |
| `Speed` | `[enabled, 1, 10, 4]` | Scroll speed (1=slow, 10=fast) |
| `FontFamily` | `[enabled, "", "", "NotoSansTC"]` | Font family name |
| `Effects` | `[enabled, "", "", ""]` | Enable/disable effects feature |
| `Layout` | `[enabled, "", "", "scroll"]` | Default layout mode |
| `Nickname` | `[enabled, "", "", ""]` | Allow/disallow nickname field |

Format: `[allow_user_override, min, max, admin_default]`
- `allow_user_override: true` — users can customize this value within the min/max range
- `allow_user_override: false` — admin default is enforced for all danmu

---

---

# 設定說明（中文）

## 環境變數

複製 `env.example` 為 `.env` 再啟動：

```bash
cp env.example .env
```

### 必填

| 變數 | 說明 |
|---|---|
| `ADMIN_PASSWORD` | 明文管理員密碼（僅開發用） |
| `ADMIN_PASSWORD_HASHED` | bcrypt 雜湊（推薦用於生產環境） |

上述兩者至少需設定一個。

### 伺服器

| 變數 | 預設值 | 說明 |
|---|---|---|
| `PORT` | `4000` | HTTP 伺服器端口 |
| `WS_PORT` | `4001` | WebSocket 伺服器端口 |
| `SECRET_KEY` | 自動生成 | Flask Session 密鑰 — 生產環境請設定穩定值 |
| `SETTINGS_FILE` | 暫存檔案 | 執行期設定的持久化路徑（顏色/字型/速度等） |
| `LOG_LEVEL` | `INFO` | 日誌等級：`DEBUG`、`INFO`、`WARNING`、`ERROR` |

### 安全性

| 變數 | 預設值 | 說明 |
|---|---|---|
| `TRUSTED_HOSTS` | `localhost,127.0.0.1` | 允許的 Host 標頭值 — 生產環境請改為你的網域 |
| `TRUST_X_FORWARDED_FOR` | `false` | 信任 `X-Forwarded-For` — 僅在信任的反向代理後方才啟用 |
| `SESSION_COOKIE_SECURE` | `true` | 僅 HTTP 開發時設為 `false` |
| `CORS_ORIGINS` | `*` | 逗號分隔的允許來源 |

### 速率限制

| 變數 | 預設值 | 說明 |
|---|---|---|
| `RATE_LIMIT_BACKEND` | `memory` | `memory` 或 `redis` |
| `FIRE_RATE_LIMIT` | `20` | 每個時間窗口最多發送彈幕數 |
| `FIRE_RATE_WINDOW` | `60` | 彈幕速率限制時間窗口（秒） |
| `REDIS_URL` | — | Redis 連線 URL（使用 redis 後端時必填） |

## Admin 面板設定

登入 `/admin` 即可在執行期調整，無需重啟。

| 設定 | 格式 | 說明 |
|---|---|---|
| `Color` | `[enabled, 0, 0, "#FFFFFF"]` | 彈幕預設文字顏色 |
| `Opacity` | `[enabled, 0, 100, 70]` | 文字透明度（0–100） |
| `FontSize` | `[enabled, 20, 100, 50]` | 字型大小（像素） |
| `Speed` | `[enabled, 1, 10, 4]` | 滾動速度（1=慢，10=快） |
| `FontFamily` | `[enabled, "", "", "NotoSansTC"]` | 字型名稱 |
| `Effects` | `[enabled, "", "", ""]` | 啟用/停用特效功能 |
| `Layout` | `[enabled, "", "", "scroll"]` | 預設佈局模式 |
| `Nickname` | `[enabled, "", "", ""]` | 允許/禁止暱稱欄位 |

格式：`[allow_user_override, min, max, admin_default]`
- `allow_user_override: true` — 使用者可在 min/max 範圍內自訂
- `allow_user_override: false` — 強制使用管理員預設值
```

- [ ] **Commit**

```bash
git add Configuration.md
git commit -m "docs: add Configuration wiki page"
```

---

## Task 6: User Guide

**Files:**
- Create: `User-Guide.md`

- [ ] **Create `User-Guide.md`**

```markdown
# User Guide

How to use the danmu web interface at `http://your-server:4000`.

## Sending Danmu

1. Open `http://your-server:4000` in any browser
2. Type your message in the text box
3. (Optional) Pick a color using the color picker
4. (Optional) Enter a nickname
5. Press **Send** or hit **Enter**

The message appears flying across the connected overlay window.

### Text Formatting

| Feature | How to use | Example |
|---|---|---|
| Custom emoji | `:emoji-name:` syntax | `:fire:` → displays 🔥 image |
| Sticker | Type a sticker keyword | `ggwp` → displays sticker image |
| Plain text | Just type | `Hello world` |

Sticker keywords are configured by the admin. Ask your admin for available sticker keywords.

### Danmu Options (if enabled by admin)

| Option | Description |
|---|---|
| Color | Text color — admin may lock this |
| Opacity | Transparency 0–100 — admin may lock this |
| Font size | Size in pixels — admin may lock this |
| Speed | Scroll speed 1–10 — admin may lock this |
| Nickname | Your display name — admin may disable this |
| Effects | Apply animation effects to your danmu |

> If an option appears grayed out or locked, the admin has set a fixed value for all users.

## Effects

If the admin has enabled Effects:

1. Click **Effects** to expand the panel
2. Select one or more effects (e.g., rainbow, shake)
3. Adjust effect parameters (duration, amplitude, etc.)
4. Send — your danmu flies with the selected animations stacked

Multiple effects can be combined simultaneously.

## Layout Modes

Danmu can display in different layout modes (set by admin):

| Mode | Description |
|---|---|
| `scroll` | Classic right-to-left scrolling (default) |
| `top_fixed` | Fixed at top, fades after 3 seconds |
| `bottom_fixed` | Fixed at bottom, fades after 3 seconds |
| `float` | Appears at a random position, fades in/out |
| `rise` | Rises from bottom to top |

## Polls

If the admin creates a poll:

1. The poll options appear on the web interface
2. Vote by sending the option key as a danmu (e.g., `A`, `B`, `C`)
3. The vote is recorded and your message still flies as normal danmu
4. When the admin ends the poll, results are shown

## Theme Switching

If multiple themes are available, a theme selector appears at the top of the page. Select a theme to change the color style and effects preset of danmu.

---

---

# 使用者操作指南（中文）

## 發送彈幕

1. 用任何瀏覽器開啟 `http://your-server:4000`
2. 在文字框輸入訊息
3. （選擇性）使用色彩選取器選擇顏色
4. （選擇性）輸入暱稱
5. 按下 **送出** 或 **Enter**

訊息將飄過已連線的 Overlay 視窗。

### 文字功能

| 功能 | 使用方式 | 範例 |
|---|---|---|
| 自訂表情包 | `:表情名稱:` 語法 | `:fire:` → 顯示 🔥 圖片 |
| 貼圖 | 輸入貼圖關鍵字 | `ggwp` → 顯示貼圖圖片 |
| 純文字 | 直接輸入 | `Hello world` |

貼圖關鍵字由管理員設定，請向管理員詢問可用的關鍵字。

### 彈幕選項（若管理員已啟用）

| 選項 | 說明 |
|---|---|
| 顏色 | 文字顏色 — 管理員可能鎖定此項 |
| 透明度 | 0–100 — 管理員可能鎖定此項 |
| 字型大小 | 像素大小 — 管理員可能鎖定此項 |
| 速度 | 滾動速度 1–10 — 管理員可能鎖定此項 |
| 暱稱 | 你的顯示名稱 — 管理員可能停用此項 |
| 特效 | 為彈幕套用動畫特效 |

## 特效

若管理員已啟用特效：

1. 點擊 **特效** 展開面板
2. 選擇一個或多個特效（如 rainbow、shake）
3. 調整特效參數（週期、強度等）
4. 送出 — 彈幕以疊加的動畫飛出

多個特效可同時組合使用。

## 佈局模式

| 模式 | 說明 |
|---|---|
| `scroll` | 經典從右往左滾動（預設） |
| `top_fixed` | 固定在頂部，3 秒後淡出 |
| `bottom_fixed` | 固定在底部，3 秒後淡出 |
| `float` | 出現在隨機位置，淡入/淡出 |
| `rise` | 從底部往上升起 |

## 投票

若管理員建立了投票：

1. 投票選項出現在網頁介面上
2. 發送選項鍵作為彈幕即可投票（如 `A`、`B`、`C`）
3. 投票會被記錄，訊息同時正常飛出
4. 管理員結束投票後顯示結果

## 主題切換

若有多個主題可用，頁面頂部會出現主題選擇器。選擇主題可更改彈幕的顏色樣式與特效預設。
```

- [ ] **Commit**

```bash
git add User-Guide.md
git commit -m "docs: add User-Guide wiki page"
```

---

## Task 7: Admin Guide

**Files:**
- Create: `Admin-Guide.md`

- [ ] **Create `Admin-Guide.md`**

```markdown
# Admin Guide

Access the admin panel at `http://your-server:4000/admin`.

## Login

Enter the admin password set via `ADMIN_PASSWORD` or `ADMIN_PASSWORD_HASHED` in your environment.

## Danmu Settings

Controls the defaults and constraints for all danmu:

- **Color** — default color and whether users can override
- **Opacity** — default opacity 0–100
- **Font size** — default and user-adjustable range
- **Speed** — scroll speed 1–10
- **Font family** — choose from built-in or uploaded fonts
- **Effects** — enable/disable the effects panel for users
- **Layout** — set default layout mode (scroll, top_fixed, bottom_fixed, float, rise)
- **Nickname** — allow or disallow user nicknames

Each setting has an **Enable user override** toggle. When off, all danmu use the admin-set value regardless of what users send.

## Blacklist

Add keywords to block danmu containing those words:

1. Go to **Blacklist** section
2. Enter a keyword and click **Add**
3. Danmu containing the keyword return a `400` error to the sender

To remove: click the ✕ next to the keyword (a confirmation dialog appears).

## Filter Rules

More powerful than the blacklist — supports regex and replacement:

| Action | Effect |
|---|---|
| `block` | Danmu is rejected; sender sees an error |
| `replace` | Matched text is replaced before display |
| `allow` | Explicitly allow (overrides block rules for matching text) |

Rules are evaluated in priority order. Enable/disable individual rules without deleting them.

## History

View a log of all sent danmu:

- Timestamp, text, color, nickname, client IP, fingerprint
- Filter by date range or text
- Export as CSV

History is retained for `DANMU_HISTORY_CLEANUP_HOURS` (default: 24 hours) and capped at `DANMU_HISTORY_MAX_RECORDS` (default: 10,000).

## Plugin Management

View and toggle loaded plugins:

| Column | Description |
|---|---|
| Name | Plugin identifier |
| Version | Plugin version string |
| Description | What the plugin does |
| Priority | Execution order (lower = earlier) |
| Status | Enabled / Disabled toggle |

To add a plugin: drop a `.py` file into `server/plugins/`. It loads automatically within 5 seconds.

## Effects Management

View all loaded `.dme` effects. For each effect:
- See the YAML source
- Edit the content inline and save
- Changes reload within 5 seconds (hot-reload)

To add a new effect: drop a `.dme` file into `server/effects/`.

## Polls

Create a poll:
1. Enter the poll question and 2–4 options
2. Click **Start Poll** — options appear on the user interface
3. Users vote by sending the option key (`A`, `B`, `C`, etc.) as danmu
4. Click **End Poll** — results are displayed
5. Results show vote counts and percentages

Only one poll can be active at a time.

## Webhook Management

Configure outbound webhooks → see [[Webhooks & Integration|Webhooks-and-Integration]].

---

---

# 管理員指南（中文）

在 `http://your-server:4000/admin` 存取管理員面板。

## 登入

輸入透過 `ADMIN_PASSWORD` 或 `ADMIN_PASSWORD_HASHED` 設定的管理員密碼。

## 彈幕設定

控制所有彈幕的預設值與限制：

每個設定都有「**允許使用者覆蓋**」開關。關閉時，所有彈幕強制使用管理員設定值，無視使用者傳送的值。

## 黑名單

新增關鍵字以封鎖含有該字詞的彈幕：

1. 前往 **黑名單** 區塊
2. 輸入關鍵字並點擊 **新增**
3. 含有該關鍵字的彈幕會回傳 `400` 錯誤給發送者

刪除：點擊關鍵字旁的 ✕（會出現確認對話框）。

## 篩選規則

比黑名單更強大 — 支援 regex 和替換：

| 動作 | 效果 |
|---|---|
| `block` | 彈幕被拒絕；發送者看到錯誤 |
| `replace` | 匹配的文字在顯示前被替換 |
| `allow` | 明確允許（對匹配文字覆蓋封鎖規則） |

規則依優先順序評估。可個別啟用/停用規則而不需刪除。

## 歷史記錄

查看所有已發送彈幕的記錄：

- 時間戳記、文字、顏色、暱稱、客戶端 IP、指紋
- 依日期範圍或文字篩選
- 匯出為 CSV

歷史記錄保留 `DANMU_HISTORY_CLEANUP_HOURS`（預設 24 小時），上限 `DANMU_HISTORY_MAX_RECORDS`（預設 10,000 筆）。

## Plugin 管理

查看並切換已載入的 Plugin。

新增 Plugin：將 `.py` 檔案放入 `server/plugins/`，5 秒內自動載入。

## 特效管理

查看所有已載入的 `.dme` 特效：
- 檢視 YAML 原始碼
- 直接在介面上編輯並儲存
- 5 秒內自動重載（熱插拔）

新增特效：將 `.dme` 檔案放入 `server/effects/`。

## 投票

建立投票：
1. 輸入投票問題和 2–4 個選項
2. 點擊 **開始投票** — 選項出現在使用者介面
3. 使用者發送選項鍵（`A`、`B`、`C` 等）作為彈幕即可投票
4. 點擊 **結束投票** — 顯示結果
5. 結果顯示投票數和百分比

同時只能有一個投票進行中。
```

- [ ] **Commit**

```bash
git add Admin-Guide.md
git commit -m "docs: add Admin-Guide wiki page"
```

---

## Task 8: API Reference

**Files:**
- Create: `API-Reference.md`

- [ ] **Create `API-Reference.md`**

````markdown
# API Reference

Base URL: `http://your-server:4000`

## Authentication

| Endpoint group | Auth required |
|---|---|
| `POST /fire`, `GET /effects`, `GET /themes`, `GET /fonts`, `GET /stickers`, `GET /emojis`, `GET /get_settings`, `POST /check_blacklist` | None (rate-limited) |
| `POST /effects/reload`, all `/admin/*` routes | Admin session cookie |

To authenticate admin endpoints, first `POST /login` with the admin password.

---

## POST /fire

Send a danmu message to the overlay.

**Auth:** None (rate-limited: 20 requests / 60 seconds per IP)

**Request body:**

```json
{
  "text": "Hello world",
  "color": "#FF5500",
  "opacity": 80,
  "size": 50,
  "speed": 4,
  "nickname": "Alice",
  "effects": [
    { "name": "rainbow", "params": { "duration": 2.0 } }
  ],
  "isImage": false,
  "fingerprint": "optional-client-id"
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `text` | string | ✅ | Danmu text content (or image URL if `isImage: true`) |
| `color` | string | ❌ | Hex color with or without `#` — admin may override |
| `opacity` | number | ❌ | 0–100 — admin may override |
| `size` | number | ❌ | Font size in pixels — admin may override |
| `speed` | number | ❌ | 1–10 scroll speed — admin may override |
| `nickname` | string | ❌ | Display name — admin may disable |
| `effects` | array | ❌ | List of `{name, params}` effect objects |
| `isImage` | boolean | ❌ | Set `true` to display `text` as an image URL |
| `fingerprint` | string | ❌ | Client identifier for rate limiting and history |

**Success response (200):**

```json
{ "status": "OK" }
```

**Error responses:**

| Status | Reason |
|---|---|
| `400` | Invalid JSON / validation failed / content blocked |
| `503` | No overlay connected / queue full |
| `429` | Rate limit exceeded |

**curl example:**

```bash
curl -X POST http://localhost:4000/fire \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello!", "color": "#FF0000", "speed": 5}'
```

---

## GET /effects

List all available `.dme` effects with their parameter definitions.

**Auth:** None

**Response (200):**

```json
{
  "effects": [
    {
      "name": "rainbow",
      "label": "彩虹",
      "description": "文字循環變色（彩虹效果）",
      "params": {
        "duration": {
          "label": "週期 (秒)",
          "type": "float",
          "default": 2.0,
          "min": 0.5,
          "max": 10.0,
          "step": 0.5
        }
      }
    }
  ]
}
```

---

## POST /effects/reload

Force re-scan of the effects directory (hot-reload manual trigger).

**Auth:** Admin session required

**Response (200):**

```json
{ "message": "Reloaded", "count": 8 }
```

---

## GET /themes

List all available themes.

**Auth:** None

**Response (200):**

```json
{
  "themes": [
    { "name": "default", "label": "預設", "description": "標準白色彈幕" }
  ],
  "active": "default"
}
```

---

## GET /fonts

List available font families (system + user-uploaded).

**Auth:** None

**Response (200):** Array of font objects with `name`, `label`, `type` fields.

---

## GET /stickers

List available sticker keywords and filenames.

**Auth:** None

**Response (200):**

```json
{ "stickers": [{ "keyword": "ggwp", "filename": "ggwp.png" }] }
```

---

## GET /emojis

List available custom emoji.

**Auth:** None

---

## GET /get_settings

Get current admin settings.

**Auth:** None

**Response (200):**

```json
{
  "Color": [true, 0, 0, "#FFFFFF"],
  "Opacity": [true, 0, 100, 70],
  "FontSize": [true, 20, 100, 50],
  "Speed": [true, 1, 10, 4],
  "FontFamily": [false, "", "", "NotoSansTC"],
  "Effects": [true, "", "", ""],
  "Layout": [true, "", "", "scroll"],
  "Nickname": [true, "", "", ""]
}
```

Format: `[allow_user_override, min, max, admin_default]`

---

## POST /check_blacklist

Check if text contains a blocked keyword.

**Auth:** None

**Request:**

```json
{ "text": "some text to check" }
```

**Response (200):**

```json
{ "blocked": false, "message": "Content is allowed" }
```

---

## GET /layouts

List available layout modes.

**Auth:** None

---

---

# API 參考（中文）

Base URL：`http://your-server:4000`

## 認證說明

| 端點群組 | 是否需要認證 |
|---|---|
| `POST /fire`、`GET /effects`、`GET /themes` 等公開端點 | 不需要（有速率限制） |
| `POST /effects/reload`、所有 `/admin/*` 路由 | 需要 Admin Session Cookie |

若要呼叫管理員端點，先透過 `POST /login` 使用管理員密碼進行認證。

## POST /fire — 發送彈幕

**速率限制：** 每 IP 每 60 秒最多 20 次

```bash
curl -X POST http://localhost:4000/fire \
  -H "Content-Type: application/json" \
  -d '{"text": "哈囉！", "color": "#FF0000", "speed": 5}'
```

詳細 Request/Response 格式請見上方英文說明（格式相同）。
````

- [ ] **Commit**

```bash
git add API-Reference.md
git commit -m "docs: add API-Reference wiki page"
```

---

## Task 9: Webhooks and Integration

**Files:**
- Create: `Webhooks-and-Integration.md`

- [ ] **Create `Webhooks-and-Integration.md`**

````markdown
# Webhooks & Integration

## Outbound Webhooks

danmu-desktop can POST to external URLs when danmu events occur.

### Setup

In the Admin panel → **Webhooks** section, add a webhook:

| Field | Description |
|---|---|
| URL | Target endpoint to POST to |
| Events | Which events trigger this webhook |
| Format | Payload format: `json`, `discord`, or `slack` |
| Secret | HMAC-SHA256 signing secret (optional) |
| Retry count | Number of retries on failure (0–10, default 3) |
| Enabled | Toggle without deleting |

### Events

| Event | Triggered when |
|---|---|
| `on_danmu` | A danmu is successfully displayed |
| `on_poll_create` | A poll is created |
| `on_poll_end` | A poll ends |

### Payload Formats

**`json` (default):**

```json
{
  "event": "on_danmu",
  "data": {
    "text": "Hello!",
    "color": "FF0000",
    "nickname": "Alice",
    "ip": "192.168.1.10"
  },
  "timestamp": "2026-03-28T10:00:00+00:00"
}
```

**`discord`:**

```json
{
  "embeds": [{
    "title": "on_danmu",
    "description": "Hello!",
    "color": 8143341
  }]
}
```

**`slack`:**

```json
{
  "blocks": [{
    "type": "section",
    "text": { "type": "mrkdwn", "text": "*on_danmu*\nHello!" }
  }]
}
```

### Signature Verification

When a secret is set, each request includes an `X-Webhook-Signature` header with an HMAC-SHA256 hex digest of the request body.

Verify in your receiver:

```python
import hmac, hashlib

def verify(payload_bytes: bytes, signature: str, secret: str) -> bool:
    expected = hmac.new(
        secret.encode("utf-8"),
        payload_bytes,
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(expected, signature)
```

---

## Third-Party Integration

### Generic: POST /fire Bridge

Any system that can send HTTP POST requests can push danmu:

```bash
curl -X POST http://your-server:4000/fire \
  -H "Content-Type: application/json" \
  -d '{"text": "Message from external system", "nickname": "Bot"}'
```

### Slido Integration

Slido is a Q&A and polling platform popular for conferences. You can bridge Slido questions to danmu.

**Requirements:** Slido API access (enterprise plan) or a Playwright-based scraper.

**Approach 1: Slido API (enterprise)**

```python
"""slido_bridge.py — Poll Slido API and forward new questions to danmu /fire"""
import time
import requests

SLIDO_API_TOKEN = "your-slido-token"
SLIDO_EVENT_ID = "your-event-id"
DANMU_URL = "http://your-server:4000/fire"

seen_ids = set()

def get_slido_questions():
    resp = requests.get(
        f"https://app.slido.com/api/v3/events/{SLIDO_EVENT_ID}/questions",
        headers={"Authorization": f"Bearer {SLIDO_API_TOKEN}"},
    )
    resp.raise_for_status()
    return resp.json().get("questions", [])

def send_danmu(text, nickname="Slido"):
    requests.post(DANMU_URL, json={"text": text, "nickname": nickname})

while True:
    for q in get_slido_questions():
        if q["id"] not in seen_ids:
            seen_ids.add(q["id"])
            send_danmu(q["text"], nickname=q.get("author", "Slido"))
    time.sleep(5)
```

**Approach 2: Plugin (server-side, hot-pluggable)**

Drop `slido_bridge.py` into `server/plugins/` — it starts automatically:

```python
"""server/plugins/slido_bridge.py"""
import threading
import time
import requests
from server.services.plugin_manager import DanmuPlugin

class SlidoBridgePlugin(DanmuPlugin):
    name = "slido-bridge"
    version = "1.0.0"
    description = "Polls Slido API and fires new questions as danmu"
    priority = 50

    SLIDO_TOKEN = "your-slido-token"
    SLIDO_EVENT_ID = "your-event-id"
    DANMU_URL = "http://localhost:4000/fire"
    POLL_INTERVAL = 5  # seconds

    def on_startup(self):
        self._running = True
        self._seen = set()
        threading.Thread(target=self._poll_loop, daemon=True).start()

    def on_shutdown(self):
        self._running = False

    def _poll_loop(self):
        while self._running:
            try:
                resp = requests.get(
                    f"https://app.slido.com/api/v3/events/{self.SLIDO_EVENT_ID}/questions",
                    headers={"Authorization": f"Bearer {self.SLIDO_TOKEN}"},
                    timeout=10,
                )
                for q in resp.json().get("questions", []):
                    if q["id"] not in self._seen:
                        self._seen.add(q["id"])
                        requests.post(
                            self.DANMU_URL,
                            json={"text": q["text"], "nickname": q.get("author", "Slido")},
                            timeout=5,
                        )
            except Exception:
                pass
            time.sleep(self.POLL_INTERVAL)
```

### Discord Bot

```python
"""Discord bot that forwards messages from a channel to danmu."""
import discord
import requests

DISCORD_TOKEN = "your-bot-token"
CHANNEL_ID = 123456789
DANMU_URL = "http://your-server:4000/fire"

client = discord.Client(intents=discord.Intents.default())

@client.event
async def on_message(message):
    if message.channel.id == CHANNEL_ID and not message.author.bot:
        requests.post(DANMU_URL, json={
            "text": message.content,
            "nickname": message.author.display_name,
        })

client.run(DISCORD_TOKEN)
```

---

---

# Webhook 與第三方整合（中文）

## Outbound Webhook 設定

在 Admin 面板 → **Webhooks** 區塊新增 Webhook：

- **URL**：目標端點
- **Events**：觸發的事件（`on_danmu` / `on_poll_create` / `on_poll_end`）
- **Format**：`json`、`discord` 或 `slack`
- **Secret**：HMAC-SHA256 簽名密鑰（可選）
- **Retry count**：失敗重試次數（0–10）

## 第三方整合

### 通用方式：POST /fire

任何能發送 HTTP POST 的系統都可以推送彈幕：

```bash
curl -X POST http://your-server:4000/fire \
  -H "Content-Type: application/json" \
  -d '{"text": "來自外部系統的訊息", "nickname": "Bot"}'
```

### Slido 整合

Slido 是會議常用的 Q&A 和投票平台。可透過輪詢 Slido API（需企業方案）或 Playwright 截取網頁方式橋接問題至彈幕。

詳細程式碼請見上方英文說明。

**建議做法：** 將 Plugin 放入 `server/plugins/slido_bridge.py`，5 秒內自動啟動，無需重啟 server。
````

- [ ] **Commit**

```bash
git add Webhooks-and-Integration.md
git commit -m "docs: add Webhooks-and-Integration wiki page"
```

---

## Task 10: Plugin Development

**Files:**
- Create: `Plugin-Development.md`

- [ ] **Create `Plugin-Development.md`**

````markdown
# Plugin Development

Extend danmu-desktop with custom Python plugins.

## Overview

- Plugins live in `server/plugins/` as `.py` files
- Files starting with `_` are ignored
- Hot-reload: any new or modified `.py` file is detected within **5 seconds** — no restart needed
- Each plugin is a class that subclasses `DanmuPlugin`
- Enable/disable state is persisted in `server/plugins/plugins_state.json`

## Base Class

```python
from server.services.plugin_manager import DanmuPlugin

class MyPlugin(DanmuPlugin):
    name = "my-plugin"          # unique identifier (required)
    version = "1.0.0"           # version string
    description = "What I do"  # shown in admin panel
    priority = 100              # lower = executes first (default: 100)
```

## Hook Reference

| Hook | Signature | Return | Description |
|---|---|---|---|
| `on_fire` | `(self, context: dict) -> dict \| None` | Modified context dict | Called for every danmu before display. Return modified context, or raise `StopPropagation` to block. |
| `on_connect` | `(self, client_info: dict) -> None` | — | WebSocket client connected |
| `on_disconnect` | `(self, client_info: dict) -> None` | — | WebSocket client disconnected |
| `on_poll_vote` | `(self, vote_info: dict) -> None` | — | A poll vote was received |
| `on_startup` | `(self) -> None` | — | Server has started |
| `on_shutdown` | `(self) -> None` | — | Server is shutting down |

### `on_fire` Context Keys

| Key | Type | Description |
|---|---|---|
| `text` | string | Danmu text content |
| `color` | string | Hex color without `#` |
| `opacity` | number | 0–100 |
| `size` | number | Font size in pixels |
| `speed` | number | 1–10 |
| `nickname` | string | User's display name (may be absent) |
| `effects` | list | Selected effects |
| `fingerprint` | string | Client identifier (may be absent) |

### Timeout

Each plugin hook has a **3-second timeout**. If a hook takes longer, it is aborted and a warning is logged. Background work should be done in daemon threads.

## Blocking Danmu with StopPropagation

```python
from server.services.plugin_manager import DanmuPlugin, StopPropagation

class CensorPlugin(DanmuPlugin):
    name = "censor"
    version = "1.0.0"
    description = "Block danmu containing banned words"

    BANNED = {"spam", "blocked-word"}

    def on_fire(self, context):
        if context.get("text", "").lower() in self.BANNED:
            raise StopPropagation  # danmu is silently dropped
        return context
```

## Modifying Danmu

```python
class UpcasePlugin(DanmuPlugin):
    name = "upcase"
    version = "1.0.0"
    description = "Convert all danmu text to uppercase"

    def on_fire(self, context):
        context["text"] = context.get("text", "").upper()
        return context
```

## Background Work (Auto-Reply Example)

From `server/plugins/example_auto_reply.py`:

```python
import threading
from server.services.plugin_manager import DanmuPlugin

class AutoReplyPlugin(DanmuPlugin):
    name = "example_auto_reply"
    version = "1.0.0"
    description = "Auto-replies welcome message when someone says hello"
    priority = 200  # runs after other plugins

    def on_fire(self, context):
        text = context.get("text", "").lower()
        if text in ("hello", "hi", "hey"):
            def _reply():
                from server.services import messaging
                messaging.forward_to_ws_server({
                    "text": "Welcome! 🎉",
                    "color": "FFD700",
                    "size": 50,
                    "speed": 4,
                    "opacity": 100,
                })
            threading.Timer(1.0, _reply).start()
        return context
```

> **Key pattern:** do background I/O in a daemon thread to return from `on_fire` within the 3-second timeout.

## Priority

Multiple plugins run in `priority` order (ascending). Lower number = runs first.

```
priority=10  → runs first
priority=100 → runs after priority=10
priority=200 → runs last
```

If two plugins have the same priority, they run alphabetically by `name`.

## Installing a Plugin

1. Drop your `.py` file into `server/plugins/`
2. Wait up to 5 seconds
3. Check the Admin panel → Plugin Management — your plugin appears automatically
4. Toggle enabled/disabled without restart

## Uninstalling a Plugin

Delete the `.py` file from `server/plugins/`. It is removed from the plugin list within 5 seconds.

---

---

# Plugin 開發（中文）

## 概述

- Plugin 放在 `server/plugins/` 目錄，為 `.py` 檔案
- 以 `_` 開頭的檔案會被忽略
- **熱插拔**：新增或修改的 `.py` 檔案在 **5 秒內** 自動偵測載入
- 每個 Plugin 為繼承 `DanmuPlugin` 的 class
- 啟用/停用狀態持久化至 `server/plugins/plugins_state.json`

## Hook 說明

| Hook | 說明 |
|---|---|
| `on_fire(context)` | 每則彈幕顯示前呼叫。回傳修改後的 context，或 raise `StopPropagation` 封鎖彈幕 |
| `on_connect(client_info)` | WebSocket 客戶端連線時 |
| `on_disconnect(client_info)` | WebSocket 客戶端斷線時 |
| `on_poll_vote(vote_info)` | 收到投票時 |
| `on_startup()` | Server 啟動後 |
| `on_shutdown()` | Server 關閉前 |

**Timeout：** 每個 Hook 有 **3 秒** 超時限制。背景工作請放在 daemon thread 中。

## 安裝 Plugin

1. 將 `.py` 檔案放入 `server/plugins/`
2. 等待最多 5 秒
3. 在 Admin 面板 → Plugin 管理中查看 — Plugin 自動出現

## 完整範例請見上方英文說明
````

- [ ] **Commit**

```bash
git add Plugin-Development.md
git commit -m "docs: add Plugin-Development wiki page"
```

---

## Task 11: Effects System

**Files:**
- Create: `Effects-System.md`

- [ ] **Create `Effects-System.md`**

````markdown
# Effects System

danmu-desktop uses hot-pluggable YAML files (`.dme`) to define CSS animations.

## How It Works

1. `.dme` files live in `server/effects/`
2. The server scans the directory every **5 seconds** — add, edit, or delete files without restarting
3. When a danmu is fired with an effect selected, the server renders `keyframes` + `animation` CSS and sends it to the overlay
4. The overlay injects a `<style>` tag and applies the animation to the danmu element

## .dme File Format

```yaml
name: my-effect           # unique identifier (used in API calls)
label: My Effect          # display name in the UI
description: What it does  # shown in admin panel

params:                   # user-adjustable parameters
  duration:               # parameter key
    label: Duration (s)   # display label
    type: float           # type: float, int, color, select
    default: 1.0          # default value
    min: 0.1              # minimum (for numeric types)
    max: 5.0              # maximum (for numeric types)
    step: 0.1             # slider step

keyframes: |              # CSS @keyframes body (literal block)
  @keyframes dme-my-effect {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

animation: dme-my-effect {duration}s ease-in-out infinite
# {param-key} is replaced with the user's chosen value

composition: add          # "add" = stack with other transforms, "replace" = override
```

## Built-in Effects

| Name | Label | Description |
|---|---|---|
| `spin` | 旋轉 | Rotate continuously |
| `blink` | 閃爍 | Fade in/out |
| `shake` | 震動 | Horizontal shake |
| `bounce` | 彈跳 | Vertical bounce |
| `rainbow` | 彩虹 | Cycle through colors |
| `glow` | 發光 | Glowing text shadow |
| `wave` | 波浪 | Wave transform |
| `zoom` | 縮放 | Scale in/out |

## Creating a New Effect

Example — a "pulse" effect that scales up and down:

```yaml
name: pulse
label: Pulse
description: Rhythmic scaling pulse

params:
  duration:
    label: Duration (s)
    type: float
    default: 0.8
    min: 0.2
    max: 3.0
    step: 0.1
  scale:
    label: Max Scale
    type: float
    default: 1.3
    min: 1.1
    max: 2.0
    step: 0.1

keyframes: |
  @keyframes dme-pulse {
    0%   { transform: scale(1); }
    50%  { transform: scale({scale}); }
    100% { transform: scale(1); }
  }

animation: dme-pulse {duration}s ease-in-out infinite
composition: add
```

Save as `server/effects/pulse.dme`. It appears in the UI within 5 seconds.

## Multi-Effect Stacking

When a user selects multiple effects, their `animation` values are joined with `, ` and `animationComposition: add, add, ...` enables stacking multiple `transform` animations simultaneously.

Example: `rainbow` + `shake` → rainbow color cycling **plus** horizontal shaking.

> **Note:** `rainbow` uses explicit `color` keyframes (not `hue-rotate`) because `hue-rotate` has no effect on white text.

## composition Field

| Value | Behaviour |
|---|---|
| `add` | Stack with other transform animations |
| `replace` | Override other transforms (only last `replace` effect wins) |

## Admin Panel Inline Editing

1. Go to Admin panel → Effects Management
2. Click an effect to expand its YAML source
3. Edit the YAML inline and click **Save**
4. Changes take effect within 5 seconds

---

---

# 特效系統（中文）

## 運作原理

1. `.dme` 檔案放在 `server/effects/` 目錄
2. Server 每 **5 秒** 掃描一次目錄 — 新增、編輯或刪除無需重啟
3. 彈幕帶有特效時，Server 將 `keyframes` + `animation` CSS 送至 Overlay
4. Overlay 注入 `<style>` 標籤並套用動畫

## .dme 檔案格式

關鍵欄位說明：

- `name`：唯一識別字（API 呼叫使用）
- `label`：UI 顯示名稱
- `params`：使用者可調整的參數（float/int/color/select）
- `keyframes`：CSS `@keyframes` 定義（`|` literal block）
- `animation`：CSS animation 字串，`{param-key}` 會被替換為使用者選擇的值
- `composition`：`add`（疊加其他 transform）或 `replace`（覆蓋）

## 新增特效

將 `.dme` 檔案放入 `server/effects/`，5 秒內自動出現在 UI。

詳細格式與範例請見上方英文說明。

## 多特效疊加

選擇多個特效時，`composition: add` 讓多個 `transform` 動畫同時運作，例如：`rainbow`（變色）+ `shake`（震動）同時套用。
````

- [ ] **Commit**

```bash
git add Effects-System.md
git commit -m "docs: add Effects-System wiki page"
```

---

## Task 12: Themes and Layouts

**Files:**
- Create: `Themes-and-Layouts.md`

- [ ] **Create `Themes-and-Layouts.md`**

````markdown
# Themes & Layouts

## Themes

Themes define the default visual style applied to all danmu.

### Theme Files

Themes are YAML files in `server/themes/`:

```yaml
name: neon            # unique identifier
label: 霓虹           # display name in UI
description: Bright neon glow style

styles:
  color: "#00FFAA"    # default text color (hex)
  textStroke: true    # enable text outline
  strokeWidth: 2      # outline width in pixels
  strokeColor: "#003322"  # outline color
  textShadow: true    # enable text shadow/glow
  shadowBlur: 12      # shadow blur radius

effects_preset:       # applied when user selects no effect
  - name: glow
    params:
      intensity: 0.8
      color: "#00FFAA"
```

### Built-in Themes

| Name | Label | Description |
|---|---|---|
| `default` | 預設 | White text with black stroke |
| `neon` | 霓虹 | Bright green neon glow |
| `cinema` | 電影院 | Gold text, cinema style |
| `retro` | 復古 | Retro amber color |

### Styles Fields

| Field | Type | Description |
|---|---|---|
| `color` | hex string | Default text color |
| `textStroke` | boolean | Enable text outline |
| `strokeWidth` | number | Outline width in pixels |
| `strokeColor` | hex string | Outline color |
| `textShadow` | boolean | Enable glow/shadow |
| `shadowBlur` | number | Shadow blur radius |

### effects_preset

A list of `{name, params}` objects applied when the user does not manually select any effects. Allows themes to ship with a default animation:

```yaml
effects_preset:
  - name: glow
    params:
      intensity: 1.0
      color: "#00FFAA"
  - name: shake
    params:
      amplitude: 3
      speed: 10
```

### Creating a Custom Theme

1. Create `server/themes/my-theme.yaml` with the format above
2. The theme appears in the Admin panel and user UI immediately (server rescans on each request)
3. Select it via Admin panel or `GET /themes` + theme selector in the web UI

### Activating a Theme

Via Admin panel: **Settings → Theme** → select from dropdown.

Via API:
```bash
# Requires admin session
curl -X POST http://localhost:4000/admin/settings \
  -H "Content-Type: application/json" \
  --cookie "session=..." \
  -d '{"theme": "neon"}'
```

---

## Layout Modes

Layout controls how danmu appear on the overlay.

### Available Modes

| Mode | Description | Duration |
|---|---|---|
| `scroll` | Right-to-left scrolling (default) | Speed-based |
| `top_fixed` | Fixed at top of screen | 3 seconds, then fades |
| `bottom_fixed` | Fixed at bottom of screen | 3 seconds, then fades |
| `float` | Random position, fade in/out | 4 seconds |
| `rise` | Bottom-to-top rising | Speed-based |

### Setting the Layout

Via Admin panel: **Settings → Layout** → select mode.

The `Layout` admin setting format: `[allow_user_override, "", "", "scroll"]`

- Set `allow_user_override: false` to lock all danmu to one layout
- Set `allow_user_override: true` to let users choose their layout when sending

---

---

# 主題與佈局（中文）

## 主題

主題定義所有彈幕的預設視覺樣式。

### 主題檔案

YAML 格式，放在 `server/themes/` 目錄：

```yaml
name: my-theme
label: 我的主題
description: 主題說明

styles:
  color: "#FFCC00"    # 預設文字顏色
  textStroke: true    # 啟用文字描邊
  strokeWidth: 2      # 描邊寬度（像素）
  strokeColor: "#000000"  # 描邊顏色
  textShadow: true    # 啟用文字陰影/發光
  shadowBlur: 8       # 陰影模糊半徑

effects_preset:       # 使用者未選擇特效時的預設特效
  - name: glow
    params:
      intensity: 0.5
```

### effects_preset

使用者未手動選擇特效時自動套用的特效列表。讓主題自帶預設動畫效果。

### 建立自訂主題

1. 建立 `server/themes/my-theme.yaml`
2. 主題立即出現在 Admin 面板和使用者 UI
3. 透過 Admin 面板選取主題

## 佈局模式

| 模式 | 說明 | 持續時間 |
|---|---|---|
| `scroll` | 從右往左滾動（預設） | 依速度設定 |
| `top_fixed` | 固定在頂部 | 3 秒後淡出 |
| `bottom_fixed` | 固定在底部 | 3 秒後淡出 |
| `float` | 隨機位置出現 | 4 秒後淡出 |
| `rise` | 從底部往上升起 | 依速度設定 |
````

- [ ] **Commit**

```bash
git add Themes-and-Layouts.md
git commit -m "docs: add Themes-and-Layouts wiki page"
```

---

## Task 13: Contributing

**Files:**
- Create: `Contributing.md`

- [ ] **Create `Contributing.md`**

```markdown
# Contributing

## Development Environment

### Prerequisites

- Python 3.11+
- Node.js 18+
- `uv` (Python package manager): `pip install uv`
- Docker (optional, for integration tests)

### Setup

```bash
git clone https://github.com/guan4tou2/danmu-desktop
cd danmu-desktop

# Python server
cd server
uv venv
uv sync
cd ..

# Electron frontend (for Webpack builds)
cd danmu-desktop
npm install

# Pre-commit hooks
pip install pre-commit
pre-commit install
```

### Running the Server (Development)

```bash
# Terminal 1: HTTP server
PYTHONPATH=. uv run --project server python -m server.app

# Terminal 2: WebSocket server
PYTHONPATH=. uv run --project server python -m server.ws_app
```

### Running the Electron Client (Development)

```bash
cd danmu-desktop
npx webpack          # build bundles
npm start            # launch Electron
```

---

## Testing

### Run All Tests

```bash
make test
# or
make test-verbose
```

### Run Specific Tests

```bash
cd /path/to/danmu-desktop
uv run --project server python -m pytest server/tests/test_api.py -v --rootdir=.
```

### Coverage Report

```bash
make coverage
# Console summary: coverage report
# HTML report: server/htmlcov/index.html
```

### Test Suite Overview

| File | What it tests |
|---|---|
| `test_api.py` | `/fire`, `/effects`, `/themes`, `/stickers` endpoints |
| `test_admin.py` | Admin panel, settings, blacklist, webhooks, effects editing |
| `test_effects.py` | `.dme` parsing, `render_effects()`, hot-reload |
| `test_plugins.py` | PluginManager, hot-reload, hook execution, StopPropagation |
| `test_webhooks.py` | WebhookService CRUD, emit, signature |
| `test_browser_admin.py` | Playwright browser tests for Admin UI |
| `test_system_ws.py` | WebSocket integration tests |
| `test_system_e2e.py` | End-to-end danmu flow |

---

## Directory Structure

```
danmu-desktop/
├── danmu-desktop/          # Electron app
│   ├── main.js             # Entry point (imports main-modules/)
│   ├── renderer.js         # Renderer entry (imports renderer-modules/)
│   ├── main-modules/       # Main process modules
│   │   ├── window-manager.js
│   │   ├── ipc-handlers.js
│   │   └── child-ws-script.js
│   └── renderer-modules/   # Renderer process modules
│       ├── track-manager.js
│       ├── ws-manager.js
│       └── ...
├── server/                 # Python Flask + WebSocket server
│   ├── app.py              # Flask app factory
│   ├── ws_app.py           # WebSocket server
│   ├── routes/             # HTTP route handlers
│   │   ├── api.py          # Public API (/fire, /effects, /themes, ...)
│   │   ├── admin.py        # Admin panel routes
│   │   └── main.py         # Web UI routes
│   ├── services/           # Business logic
│   │   ├── effects.py      # .dme hot-reload and rendering
│   │   ├── plugin_manager.py
│   │   ├── webhook.py
│   │   ├── filter_engine.py
│   │   └── ...
│   ├── plugins/            # Drop .py plugins here
│   ├── effects/            # Drop .dme effects here
│   ├── themes/             # Drop .yaml themes here
│   └── tests/              # pytest test suite
└── docs/                   # Technical documentation
```

---

## CI/CD

- **docker-build.yml**: Builds and tests the server Docker image on every PR and push to `main`. Publishes `albetyty/danmu-server:latest` and a commit-SHA tag on `main` merges.
- **osv-scanner.yml**: OSV vulnerability scan on push, PR, and schedule.
- Dependabot is enabled for both Python and npm dependencies.

## PR Conventions

- Keep commits focused — one logical change per commit
- Prefix commit messages: `feat:`, `fix:`, `docs:`, `chore:`, `test:`, `refactor:`
- Tests are required for new server features
- Run `pre-commit run --all-files` before pushing
- PRs targeting `main` require CI to pass

---

---

# 貢獻指南（中文）

## 開發環境設定

```bash
git clone https://github.com/guan4tou2/danmu-desktop
cd danmu-desktop

# Python server
cd server && uv venv && uv sync && cd ..

# Electron
cd danmu-desktop && npm install && cd ..

# Pre-commit hooks
pip install pre-commit && pre-commit install
```

## 執行測試

```bash
make test          # 執行所有測試
make test-verbose  # 詳細輸出
make coverage      # 產生覆蓋率報告
```

## 目錄結構

請見上方英文說明（結構完全相同）。

## PR 規範

- 每個 commit 專注於一個邏輯變更
- Commit 訊息前綴：`feat:`、`fix:`、`docs:`、`chore:`、`test:`、`refactor:`
- 新功能需要附上測試
- 推送前執行 `pre-commit run --all-files`
```

- [ ] **Commit**

```bash
git add Contributing.md
git commit -m "docs: add Contributing wiki page"
```

---

## Task 14: Final Push

- [ ] **Review all files**

```bash
ls -la *.md
```

Expected output: 12 files (`Home.md`, `Getting-Started.md`, `Installation.md`, `Configuration.md`, `User-Guide.md`, `Admin-Guide.md`, `API-Reference.md`, `Webhooks-and-Integration.md`, `Plugin-Development.md`, `Effects-System.md`, `Themes-and-Layouts.md`, `Contributing.md`, `_Sidebar.md`)

- [ ] **Push to GitHub Wiki**

```bash
git push origin master
```

GitHub Wiki repos use `master` branch by default.

- [ ] **Verify on GitHub**

Open `https://github.com/guan4tou2/danmu-desktop/wiki` and confirm:
- Sidebar shows all 11 pages under correct sections
- Home page renders correctly with navigation cards
- At least one code block and one table render correctly in each page
