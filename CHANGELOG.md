# Changelog

所有重要的變更都會記錄在此文件中。

格式基於 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.0.0/)，
版本號遵循 [Semantic Versioning](https://semver.org/lang/zh-TW/)。

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
- 環境變數配置更完整（`env.example` 更新）

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
