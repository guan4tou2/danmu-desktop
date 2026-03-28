# danmu-desktop

在桌面直接顯示彈幕

![img](img/danmu%20display.png)

## 概述

此專案分為兩個部分：

1. Danmu-Desktop
   - 客戶端應用程式，在您的電腦上運行以顯示彈幕
   - 目前支援 Windows 和 MacOS
   - 提供安裝版和可攜式版本

![img](img/client.png)
![img](img/client%20start%20effect.png)

1. Server
   - 創建網頁界面用於彈幕輸入
   - 管理彈幕傳送到已連接的客戶端
   - 包含管理員配置面板、來源指紋記錄與歷史追蹤

![img](img/web%20panel.png)
![img](img/admin%20panel.png)

## 功能特色

### 佈局模式

支援五種彈幕顯示佈局：捲動（右至左）、頂部固定、底部固定、浮動（隨機位置）、上升（由下至上）。

![佈局模式](img/danmu-layouts.png)

### 特效與樣式

內建動畫特效（旋轉、彈跳、彩虹、發光、抖動、波浪、閃爍、縮放），每個特效可調參數。支援暱稱、自訂顏色、文字描邊/陰影，以及多特效疊加。

![特效動態展示](img/danmu-effects-demo.gif)
![特效展示](img/danmu-effects-showcase.png)

### 熱插拔特效 (.dme)

將 `.dme` 檔案（YAML 格式）放入 `server/effects/` 目錄即可新增自訂特效，5 秒內自動偵測載入。可在管理面板中編輯和管理特效。

## 安裝與使用

### Danmu-Desktop 客戶端

1. 下載[最新版本](https://github.com/guan4tou2/danmu-desktop/releases)
2. MacOS 用戶需要執行：
   ```bash
   sudo xattr -r -d com.apple.quarantine 'danmu manager.app'
   ```
3. 啟動應用程式
4. 輸入伺服器的 IP 和端口（預設：4001）

### 伺服器設置

#### 選項 1：直接使用 Docker Hub 映像（推薦）

1. 直接拉取並啟動映像（請替換密碼）：
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
   - 也可改用 bcrypt 雜湊避免明文：
     - 產生雜湊：`python server/scripts/hash_password.py`
     - 設定 `-e ADMIN_PASSWORD_HASHED='<bcrypt-hash>'`
   - 伺服器啟動時至少必須提供 `ADMIN_PASSWORD` 或 `ADMIN_PASSWORD_HASHED` 其中一個。
   - 建置的映像支援 `linux/amd64` 與 `linux/arm64/v8`
   - 可用標籤：
     - `latest`：`main` 分支的穩定版本
     - `main`：永遠指向最新的 `main` commit
     - `<git-sha>`：對應特定 commit 的不可變版本（可在 CI log 查看）
2. 建議加入 `--restart unless-stopped` 讓服務自動重啟。
3. 更新版本只需重新拉取並重建：
   ```bash
   docker pull albetyty/danmu-server:latest
   docker stop danmu-server && docker rm danmu-server
   # 重新執行上述 docker run 指令
   ```

#### 選項 2：Docker Compose

1. 克隆專案：

   ```bash
   git clone https://github.com/guan4tou2/danmu-desktop
   cd danmu-desktop
   ```

2. 配置環境變數：

   ```bash
   cp env.example .env
   # 編輯 .env，至少設定 ADMIN_PASSWORD 或 ADMIN_PASSWORD_HASHED
   ```

3. 啟動服務（HTTP）：

   ```bash
   docker compose up -d
   ```
   - Nginx 反向代理對外開放 `4000`（HTTP）與 `4001`（WebSocket）。
   - Python server 在 Compose 模式下僅內網可見，由 Nginx 反向代理。

4. 可選覆蓋設定（透過 `-f` 組合）：

   | 覆蓋設定 | 指令 |
   |----------|------|
   | HTTPS（自簽憑證） | `docker compose -f docker-compose.yml -f docker-compose.https.yml up -d` |
   | Traefik + Let's Encrypt | `docker compose -f docker-compose.yml -f docker-compose.traefik.yml up -d` |
   | Redis 速率限制 | `docker compose -f docker-compose.yml -f docker-compose.redis.yml up -d` |

   覆蓋設定可組合使用，例如 HTTPS + Redis：
   ```bash
   docker compose -f docker-compose.yml -f docker-compose.https.yml -f docker-compose.redis.yml up -d
   ```

#### 選項 3：手動設置

1. 克隆專案：

   ```bash
   git clone https://github.com/guan4tou2/danmu-desktop
   cd danmu-desktop
   ```

2. 配置環境：

   ```bash
   cp env.example .env
   vim .env  # 設定管理員密碼和其他選項
   ```

3. 設置虛擬環境並安裝依賴：

   ```bash
   cd server
   uv venv
   uv sync
   ```

4. 啟動伺服器（HTTP + WebSocket）：

   ```bash
   # 終端 1：HTTP 伺服器
   PYTHONPATH=.. uv run python -m server.app

   # 終端 2：WebSocket 伺服器
   PYTHONPATH=.. uv run python -m server.ws_app
   ```

詳細部署說明請參考 [DEPLOYMENT.md](DEPLOYMENT.md)、`docs/README.md` 以及英文版 README。

### 訪問伺服器

- 主界面：`http://ip:4000`
- 管理面板：`http://ip:4000/admin`

## 測試與覆蓋率

- 執行測試：`make test` 或 `make test-verbose`
- 產生覆蓋率報告：`make coverage`
  - 終端會顯示 `coverage report`
  - HTML 報告位於 `server/htmlcov/index.html`

## 端口配置

- `4000`：網頁界面（經由反向代理）
- `4001`：Danmu Desktop 客戶端連接（經由反向代理）

## 文件總覽 / Docs
- `README.md`：英文版總覽。
- `docs/README.md`：技術文件索引（English/中文）。
- `DEPLOYMENT.md`：生產部署細節 / Deployment reference。
- `docs/archive/`：歷史紀錄與整理檔案。

## CI/CD 與 Docker Hub
- `.github/workflows/docker-build.yml` 會在每次 PR / push（main）時建置與測試伺服器映像。
- 於 GitHub Secrets 設定 `DOCKERHUB_USERNAME` 與 `DOCKERHUB_TOKEN`（Docker Hub Access Token），即可在 main 更新時自動推送 `使用者/danmu-server:latest` 與對應 commit SHA 的 Tag。

## 安全備註
- 此 repo 已啟用 GitHub Advanced Security 與 Dependabot。
- OSV 掃描會在 `push`、`pull_request` 與排程任務執行（見 `.github/workflows/osv-scanner.yml`）。
- 前端 lockfile 透過 npm overrides 強制 `serialize-javascript@7.0.3`，對應 `GHSA-5c6j-r48x-rmvq`。

## 參考資料

SAO UI 設計參考自 [SAO-UI-PLAN-LINK-START | Akilar の糖果屋](https://akilar.top/posts/1b4fa1dd/)
