# danmu-desktop
Display bullet screen directly on the desktop  
在桌面直接顯示彈幕

[中文說明](https://github.com/guan4tou2/danmu-desktop/blob/main/README-CH.md)

![img](img/danmu%20display.png)

## Overview
This project is divided into two parts:

1. Danmu-Desktop  
   - Client-side application that runs on your computer to display danmu
   - Currently supports Windows and MacOS
   - Available as both installer and portable version

![img](img/client.png)
![img](img/client%20start%20effect.png)

2. Server
   - Creates a web interface for danmu input
   - Manages danmu delivery to connected clients
   - Includes admin panel for configuration, source fingerprint logging, and history review

![img](img/web%20panel.png)
![img](img/admin%20panel.png)

## Installation & Usage

### Danmu-Desktop Client
1. Download the [latest release](https://github.com/guan4tou2/danmu-desktop/releases)
2. For MacOS users, run:
   ```bash
   sudo xattr -r -d com.apple.quarantine 'danmu manager.app'
   ```
3. Launch the application
4. Enter the server's IP and port (default: 4001)

### Server Setup

#### Option 1: Docker Compose (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/guan4tou2/danmu-desktop
   cd danmu-desktop
   ```

2. Configure environment variables:
   ```bash
   cp env.example .env
   # Edit .env and set ADMIN_PASSWORD and other settings
   ```

3. Start services:
   ```bash
   docker-compose up -d
   ```

4. To use Redis for rate limiting (optional):
   ```bash
   docker-compose --profile redis up -d
   ```

#### Option 2: Manual Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/guan4tou2/danmu-desktop
   cd danmu-desktop
   ```

2. Configure environment:
   ```bash
   cp env.example .env
   vim .env  # Set your admin password and other settings
   ```

3. Setup virtual environment and install dependencies:
   ```bash
   cd server
   uv venv
   uv sync
   ```

4. Start the server (HTTP + WebSocket):
   ```bash
   # Terminal 1: HTTP server
   PYTHONPATH=.. uv run python -m server.app
   
   # Terminal 2: WebSocket server
   PYTHONPATH=.. uv run python -m server.ws_app
   ```

### Accessing the Server
- Main interface: `http://ip:4000`
- Admin panel: `http://ip:4000/admin`

### Environment Variables

Key configuration options (set via `.env` file or environment variables):

- `ADMIN_PASSWORD` (required): Password for admin panel access
- `PORT`: HTTP server port (default: 4000)
- `WS_PORT`: WebSocket server port (default: 4001)
- `SECRET_KEY`: Flask secret key (auto-generated if not set)
- `RATE_LIMIT_BACKEND`: Rate limiter backend - `memory` or `redis` (default: memory)
- `REDIS_URL`: Redis connection URL (required if using Redis backend)
- `LOG_LEVEL`: Logging level - `DEBUG`, `INFO`, `WARNING`, `ERROR` (default: INFO)

See `env.example` for all available options.

## Project Docs / 文件
- `docs/README.md` – index of technical notes and archives / 技術文件索引。
- `DEPLOYMENT.md` – production-grade setup instructions / 部署說明。
- `README-CH.md` – 中文總覽。
- `docs/archive/` – historical improvement notes kept for reference / 歷史紀錄。

## CI/CD & Docker Hub
- Workflow `.github/workflows/docker-build.yml` builds and tests the server image on each PR/push.
- Set GitHub secrets `DOCKERHUB_USERNAME` + `DOCKERHUB_TOKEN` (Docker Hub access token) to auto-publish `DOCKERHUB_USERNAME/danmu-server:latest` and a commit-SHA tag whenever `main` is updated.

## Testing & Coverage

- Run tests: `make test` or `make test-verbose`
- Generate coverage report: `make coverage`
  - Console summary via `coverage report`
  - HTML report at `server/htmlcov/index.html`

## Port Configuration
- `4000`: Web interface (HTTP)
- `4001`: Danmu Desktop Client connection (WebSocket)

## References
SAO UI design inspired by [SAO-UI-PLAN-LINK-START | Akilarの糖果屋](https://akilar.top/posts/1b4fa1dd/)