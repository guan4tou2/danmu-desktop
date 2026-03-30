# Changelog

所有重要的變更都會記錄在此文件中。

格式基於 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.0.0/)，
版本號遵循 [Semantic Versioning](https://semver.org/lang/zh-TW/)。

## [4.1.3] - 2026-03-30

### 安全修正 / Security

- SVG 頭像注入防護：`api.py` 的 `generate_avatar()` 加入 regex 驗證 + `html.escape()`
- Rate limiter / Filter engine 記憶體洩漏修復：定期清理過期條目防止無限增長
- Overlay 登入閘門：設定 WS token 時未登入者自動跳轉 admin
- Jinja2 模板 XSS 修復：`overlay.html` 的 `wsToken` 改用 `|tojson` 過濾器
- Admin 儀表板 `escapeHtml()`：圖表與熱門文字的 `innerHTML` 加入跳脫
- Nginx IP 偽造防護：`X-Forwarded-For` 改用 `$remote_addr`
- Electron child CSP 放寬 `connect-src` 為 `ws: wss:`（支援非 localhost 連線）

### 修正 / Fixed

- Overlay nickname `insertBefore` 錯誤修復（節點未附加到父元素前呼叫）
- 啟動動畫遵守 `enabled` 旗標（`null` 設定不再強制播放）
- `getDisplays` IPC 回傳新增 `size` 與 `primary` 欄位
- OSV-Scanner CI 修復：補上 `actions: read` 權限

### 測試 / Testing

- 新增 15 個 Playwright overlay 渲染整合測試（`test_browser_overlay_render.py`）
- `TestConfig` 明確設定 `WS_AUTH_TOKEN=""`，防止測試間污染

## [4.1.2] - 2026-03-29

### 安全修正 / Security

- 修正所有投票面板 XSS 漏洞：`overlay.js`、`child-ws-script.js`、`admin.js` 的 `innerHTML` 全部改用 DOM API（CodeQL 通過）
- OBS overlay 加入 `poll_update` 訊息處理（與 Electron child window 一致）

### 國際化 / i18n

- 投票系統新增 20 個翻譯鍵（en/zh/ja/ko 四語言完整）
- Admin 投票 toast 訊息改用 `ServerI18n.t()`

## [4.1.1] - 2026-03-28

### 重構 / Refactoring

- `admin.py` 拆分為 16 個 domain sub-modules（路由按功能分離）
- `admin.js` 拆分（2633→1989 行）：提取 `admin-themes.js`（117 行）+ `admin-effects-mgmt.js`（552 行）
- 修復 14 項中優先級程式碼審查問題 (#62)

### 新增 / Added

- E2E CI job（Electron Playwright + `xvfb-run` + `ELECTRON_DISABLE_SANDBOX`）
- 6 個整合測試（webhook CRUD + scheduler lifecycle）
- CI 依賴快取（`actions/cache@v4` for uv venv + npm）

### 改善 / Improved

- `env.example` 改名為 `.env.example`（慣例）+ 更新所有引用
- `.gitignore` 補全（`server/.env`、`webhooks.json`）
- `Dockerfile` 優化（`--no-install-recommends`、OCI LABEL）
- 移除 9 個過期 `docs/superpowers/` 計畫文件（-7,316 行）
- 移除 `serialize-javascript` override（已不在依賴樹中）

## [4.1.0] - 2026-03-27

### 新增 / Added

- 部署整合：HTTPS/WSS（nginx 自簽憑證 + Traefik Let's Encrypt）
- 設計令牌系統（Design tokens）、產品命名統一
- 托盤圖標設計改善

## [4.0.0] - 2026-03-26

### 新增 / Added — 9 大進階功能

- **定時發送** — cron-like 排程器，支援單次/重複/延遲
- **過濾引擎** — 正則規則 + 置換/阻擋/標記動作
- **表情包系統** — 內建 emoji 庫 + `:name:` 語法
- **即時監控** — Live Feed 即時彈幕事件流
- **佈局模式** — scroll / top_fixed / bottom_fixed / float / rise
- **Webhook 整合** — HMAC 簽章 + 外部服務串接
- **暱稱系統** — 匿名 / 自訂暱稱標籤
- **音效系統** — 彈幕觸發音效（本機來源限制）
- **插件系統** — Python 插件熱插拔 + 事件 hooks

### 新增 / Added — 4 大特色功能

- **OBS Browser Source overlay** — 獨立 `/overlay` 頁面，純瀏覽器 JS
- **互動投票** — Admin 建立投票 → 觀眾彈幕投票 → overlay 即時顯示
- **樣式主題包** — YAML 定義（default/neon/retro/cinema），一鍵切換
- **彈幕回放** — JSON timeline 匯出 + canvas 錄製影片

### 新增 / Added — 貼圖彈幕

- StickerService（resolve/list/delete + STICKER_MAX_COUNT）
- Admin 貼圖管理面板 + 上傳/刪除 API
- webp 支援、圖片大小限制、CSP 擴充

### 新增 / Added — 國際化

- Server-side i18n（`ServerI18n`）支援 en / zh / ja / ko
- Admin 面板 + 使用者頁面完整翻譯

### 新增 / Added — 測試

- 347+ 測試（Python 663 + Jest 300+）
- Playwright 瀏覽器測試（admin 20 + fire E2E）
- 系統測試（WS server + asyncio）
- E2E Electron Playwright 自動化

### 安全 / Security

- DoS 防護（WS 連線限制、nginx hardening、容器資源限制）
- Webhook HMAC 簽章驗證
- IPC sender 驗證 + 參數驗證
- CSP meta tag（index.html + child.html + overlay.html）
- Admin 密碼變更 API + bcrypt 雜湊

## [3.2.1] - 2026-03-02

### 安全更新 / Security

- 修復 GitHub CodeQL 告警：
  - `py/clear-text-logging-sensitive-data`（移除密碼明文輸出）
  - `py/stack-trace-exposure`（避免回傳內部例外細節）
  - `js/xss-through-dom`（圖片預覽 URL 增加 protocol/path 安全檢查）
  - `actions/missing-workflow-permissions`（workflow 權限最小化）
- Hardened admin auth defaults:
  - 移除 `ADMIN_PASSWORD` 不安全預設值
  - 啟動時要求至少提供 `ADMIN_PASSWORD` 或 `ADMIN_PASSWORD_HASHED`
  - runtime 密碼 hash 檔案權限調整為 `0600`

### 依賴與告警收斂 / Dependencies & Alerts

- 更新前端 lockfile，修復多個 transitive 漏洞（`minimatch`、`tar`、`glob`、`ajv`、`lodash`、`webpack`）。
- 透過 npm `overrides` 強制 `serialize-javascript@7.0.3`，修復 Dependabot alert `GHSA-5c6j-r48x-rmvq`。
- 移除暫時性忽略設定，改為實際版本修補。

### 文件與流程 / Docs & Process

- 更新 `README.md`、`README-CH.md`、`server/README.md` 的安全設定說明。
- 補充並更新 `security_best_practices_report.md`。
- 調整 OSV scanner workflow，支援 push 與手動觸發以保持安全頁面狀態同步。

## [3.1.0] - 2025-01-XX

### 新增

- **安全性改進**
  - 管理員密碼支援 bcrypt 雜湊（向後相容明文密碼）
  - CORS 配置支援，可設定允許的來源
  - Session Cookie 安全設定（Secure, HttpOnly, SameSite）
  - 輸入驗證使用 marshmallow schema 驗證所有 API 請求
- **監控與可觀測性**
  - 健康檢查端點 (`/health`, `/health/ready`, `/health/live`)
  - 結構化日誌支援（JSON 格式，可透過 `LOG_FORMAT=json` 啟用）
- **效能改進**
  - 靜態資源快取（Cache-Control headers）
  - Supervisor 進程管理配置（可選）
- **開發體驗**
  - Makefile 提供常用操作指令
  - 開發環境 Docker Compose 配置 (`docker-compose.dev.yml`)
  - 密碼雜湊工具腳本 (`server/scripts/hash_password.py`)
  - Docker 構建 GitHub Actions workflow

### 改進

- Docker 容器使用非 root 用戶運行（提升安全性）
- 健康檢查使用專用端點而非根路徑
- 環境變數配置更完整（`.env.example` 更新）

### 技術變更

- 新增依賴：`bcrypt`, `flask-cors`, `marshmallow`
- 輸入驗證統一使用 `server/services/validation.py`
- 日誌系統支援 JSON 格式輸出

## [3.0.0] - 2025-01-XX

### 新增

- 容器化部署支援（Docker 和 Docker Compose）
- 完整的部署文檔 (`DEPLOYMENT.md`)
- 伺服器架構重構（Blueprints、Services、Managers）
- WebSocket 伺服器分離為獨立進程
- CSRF 保護
- 速率限制
- 字型下載授權（簽名 token 含過期時間）
- Pytest 測試框架
- 自託管 CDN 資源（Tailwind、Three.js、Vanta.js）

### 改進

- 伺服器代碼結構化重構
- 安全性大幅提升
- 測試覆蓋率增加

## [2.x.x] - 先前版本

（歷史變更記錄...）
