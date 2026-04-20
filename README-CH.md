# danmu-desktop

在桌面直接顯示彈幕

[English README](https://github.com/guan4tou2/danmu-desktop/blob/main/README.md)

![img](img/danmu%20display.png)

## 概述

此專案分為兩個部分：

1. Danmu-Desktop
   - 客戶端應用程式，在您的電腦上運行以顯示彈幕
   - 支援 Windows、MacOS 和 Linux
   - 提供安裝版和可攜式版本
   - 從 GitHub Releases 自動更新

![img](img/client.png)
![img](img/client%20start%20effect.png)

2. Server
   - 提供網頁介面用於彈幕輸入
   - 管理彈幕傳送到已連接的客戶端
   - 包含管理員配置面板、來源指紋記錄與歷史追蹤
   - OBS Browser Source 覆蓋層（`/overlay` 路由）
   - 插件 SDK 支援伺服器端擴展
   - 四語介面（EN、ZH、JA、KO）

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

### 樣式主題

預定義視覺主題（預設、霓虹、復古、電影），一鍵切換顏色、描邊、陰影和特效組合。可在管理面板或使用者頁面切換主題。

### 互動投票

管理員建立 2-6 個選項的投票。觀眾透過發送選項代號（A/B/C）作為彈幕來投票。即時結果顯示在覆蓋層上，包含即時票數統計。

### 覆蓋層小工具

在 OBS 覆蓋層上新增持久的計分板、跑馬燈和標籤。從管理面板管理位置、樣式和內容。小工具透過 WebSocket 廣播至所有已連接的覆蓋層客戶端。

### OBS Browser Source

使用 `http://your-server:4000/overlay` 作為 OBS Browser Source，無需 Electron 即可顯示彈幕。透明背景，透過 WebSocket 自動連接。

### 插件 SDK

建立伺服器端插件，可對彈幕事件做出反應、修改訊息、過濾內容和自動回覆。每 5 秒熱載入。詳見[插件開發指南](server/PLUGIN_GUIDE.md)。

### 時間軸匯出

將即時彈幕場次錄製為 JSON 時間軸，供離線回放或分析使用。可從管理面板操作。

## 安裝與使用

### Danmu-Desktop 客戶端

1. 下載[最新版本](https://github.com/guan4tou2/danmu-desktop/releases)
2. macOS 使用者解除隔離：
   ```bash
   sudo xattr -r -d com.apple.quarantine 'Danmu Desktop.app'
   ```
3. 啟動應用程式
4. 輸入伺服器的 IP 與 WebSocket port（預設：`4001`）

### 伺服器設置

正規安裝路徑是 `./setup.sh init` — 一個互動式精靈，會根據你的
環境挑合理預設、自動產生 secret、寫好 `.env`。這一套流程涵蓋
HTTP 開發、HTTPS 自簽（LAN / VPS）、以及 Traefik + Let's Encrypt
（公網 domain）三種部署模式。

```bash
git clone https://github.com/guan4tou2/danmu-desktop.git
cd danmu-desktop
./setup.sh init                      # 互動式：模式、密碼、ports、desktop client
./setup.sh init --advanced           # + 速率限制、log、資源上限
./setup.sh check                     # 啟動前驗證現有 .env
./setup.sh gen-secret                # 只產生並寫入 SECRET_KEY

# 再啟動 stack。精靈會印出確切指令，常見路徑：
docker compose --profile http up -d          # 本機 HTTP
docker compose --profile https up -d         # HTTPS 自簽（LAN / VPS）
docker compose --profile traefik up -d       # HTTPS + Let's Encrypt（公網 domain）
```

完整部署文件（HTTPS 模式、桌面客戶端 WS port、Redis、備份/還原、升級）：
**[DEPLOYMENT.md](DEPLOYMENT.md)**。

#### 捷徑：預編譯映像，無需 clone

若你只要跑 server，不需要原始碼：

```bash
docker run -d --name danmu-server \
  -p 4000:4000 -p 4001:4001 \
  -e ADMIN_PASSWORD=your_secure_password \
  -e SECRET_KEY=$(openssl rand -hex 32) \
  -e ENV=production \
  -v "$(pwd)/danmu-runtime:/app/server/runtime" \
  -v "$(pwd)/danmu-user-plugins:/app/server/user_plugins" \
  -v "$(pwd)/danmu-user-fonts:/app/server/user_fonts" \
  --restart unless-stopped \
  ghcr.io/guan4tou2/danmu-server:latest
```

`SECRET_KEY` 在 production 為必填 — 啟動時會拒絕 ephemeral key。
`openssl rand -hex 32` 會即時產一把；記下來才能在 container 重建後保有
相同的 session。

多架構（`linux/amd64` + `linux/arm64/v8`）。Tags：`latest`、`main`、
`<git-sha>`。此路徑要用 HTTPS 需自行在前面架反向代理。

#### 手動（不使用 Docker）

```bash
cp .env.example .env
./setup.sh gen-secret                # 寫入 SECRET_KEY
# 編輯 .env：設定 ADMIN_PASSWORD

cd server && uv venv && uv sync
PYTHONPATH=.. uv run python -m server.app    # HTTP + WS 都從這邊起
```

### 存取伺服器

啟動後開啟：

- 主介面：`http://<host>:<port>`
- 管理面板：`http://<host>:<port>/admin`
- OBS overlay：`http://<host>:<port>/overlay`

（`<host>` 與 `<port>` 請替換成精靈印出的值。）

### 環境變數

`.env.example` 有完整註解。精靈會幫你處理的關鍵變數：

| 變數 | 用途 |
|---|---|
| `ADMIN_PASSWORD` / `ADMIN_PASSWORD_HASHED` | 管理員登入（至少設一個） |
| `SECRET_KEY` | Flask session 密鑰（精靈 / `gen-secret` 產生） |
| `ENV` | `production` 啟用嚴格 session / HSTS 預設值 |
| `PORT` / `WS_PORT` | HTTP 與 WebSocket port（預設 4000 / 4001） |
| `HTTPS_PORT` | `--profile https` / `traefik` 對外的 HTTPS port |
| `TRUSTED_HOSTS` | Host header 白名單（逗號分隔） |
| `SESSION_COOKIE_SECURE` | production 走 HTTPS 時設 `true` |
| `WS_REQUIRE_TOKEN` / `WS_AUTH_TOKEN` | 選配：port 4001 的共用 token 驗證 |
| `RATE_LIMIT_BACKEND` | `memory` 或 `redis`（透過 `--profile redis` 啟） |

其他設定都有安全預設；`.env.example` 列齊了所有項目。

## 安全備註

- 此 repo 已啟用 GitHub Advanced Security 與 Dependabot。
- OSV 掃描會在 `push`、`pull_request` 與排程任務執行（見 `.github/workflows/osv-scanner.yml`）。
- 前端 lockfile 透過 npm overrides 強制 `serialize-javascript@7.0.3`，對應 `GHSA-5c6j-r48x-rmvq`。
- 專用 WebSocket 預設為 `WS_REQUIRE_TOKEN=false`。若 `4001` 對 localhost 或受信任 LAN 以外的網路可達，任何可到達該埠的客戶端都能連線；請改為啟用 token 驗證，或用反向代理 / 防火牆限制路徑。
- production 啟動現在會拒絕以下不安全設定：未明確設定 `SECRET_KEY`、`SESSION_COOKIE_SECURE=false`、或未設定 `TRUSTED_HOSTS`。部署前請先補齊。
- 目前 app 會送出 nonce-based `Content-Security-Policy` header。之後若新增 inline script，請使用模板提供的 nonce，不要退回 `unsafe-inline`。
- `Strict-Transport-Security` 目前是 opt-in，需明確設定 `HSTS_ENABLED=true`，且只會在 HTTPS 回應上送出。

## 專案文件

- [`DESIGN.md`](./DESIGN.md) – 設計系統（brand、color、typography、motion、a11y、voice）。所有視覺決策的單一真相來源。
- `docs/perf/baseline-v4.6.1.md` – performance baseline（HTTP payload、latency、font loading）。
- `docs/designs/` – 設計探索產出（排版比較頁等）。
- `docs/audits/` – 設計審查 audit 報告（依 round 編列）。
- `docs/README.md` – 技術文件與 archive 的索引。
- `DEPLOYMENT.md` – production 部署指南。
- `server/PLUGIN_GUIDE.md` – Plugin SDK 開發文件。
- `README.md` – 英文總覽。
- `docs/archive/` – 歷史紀錄與整理檔案。

## CI/CD 與 Docker Hub

- `.github/workflows/docker-build.yml` 會在每次 PR / push 時建置與測試伺服器映像。
- `.github/workflows/test.yml` 執行 Python 測試（含覆蓋率報告與 `pip-audit` CVE 掃描）。
- `.github/workflows/build.yml` 在版本更新時為 Windows、macOS、Linux 建置 Electron 應用程式，並建立含自動更新中繼資料的 GitHub Releases。
- 於 GitHub Secrets 設定 `DOCKERHUB_USERNAME` 與 `DOCKERHUB_TOKEN`（Docker Hub Access Token），即可在 main 更新時自動推送 `DOCKERHUB_USERNAME/danmu-server:latest` 與對應 commit SHA tag。

## 測試與覆蓋率

- 執行測試：`make test` 或 `make test-verbose`
- 產生覆蓋率報告：`make coverage`
  - 終端會顯示 `coverage report`
  - HTML 報告位於 `server/htmlcov/index.html`

## 端口配置

- `4000`：網頁介面（HTTP，可經反向代理）
- `4001`：Danmu Desktop 客戶端連接（WebSocket，可經反向代理）

## 參考資料

SAO UI 設計參考自 [SAO-UI-PLAN-LINK-START | Akilar の糖果屋](https://akilar.top/posts/1b4fa1dd/)
