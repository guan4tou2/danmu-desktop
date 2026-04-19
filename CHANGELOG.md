# Changelog

所有重要的變更都會記錄在此文件中。

格式基於 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.0.0/)，
版本號遵循 [Semantic Versioning](https://semver.org/lang/zh-TW/)。

## [Unreleased]

---

## [4.6.1] - 2026-04-20

### 新增 / Added

- **DESIGN.md**：專案設計系統文件，涵蓋品牌定位、色彩、字型、間距、動效、無障礙、語氣 (F-010)
- **`docs/designs/typography-preview-2026-04-20.html`**：字型方向比較頁（4 候選 vs 現況）

### 改善 / Improved

- **四語雙語字型系統建立 (F-010)**：
  - Hero wordmark "Danmu Fire" 改用 **Bebas Neue**（街機跑馬燈感的 display face）
  - 依語系切換 CJK 字型：**Noto Sans TC**（繁中）/ **Noto Sans JP**（日文假名 + 日漢字）/ **Noto Sans KR**（韓文 Hangul）/ **Noto Sans**（Latin）
  - 數字 / 程式碼改用 **JetBrains Mono**
  - 新增 tokens：`--font-display` / `--font-brand` / `--font-ui` / `--font-mono`；`--font-family` 改為 `--font-ui` 的別名以保持回溯相容
  - `i18n.js` 在初始化與切換語系時同步設定 `<html lang="">`，讓 CSS `:lang()` 能自動挑選對應 CJK 字型，避免日文字用繁中 glyph、或 Hangul 完全 fallback 的問題
- **字體載入優化**：新增 `preconnect` 提示與 `display=swap`，減少 FOIT 並加速首次繪製
- **數字對齊**：`.composer-counter` / `.history-dashboard-value` / `.chart-label` 套用 `font-variant-numeric: tabular-nums`
- **Electron client 字型同步**：`danmu-desktop/about.css` 硬寫的 Poppins 改為 Noto Sans TC；`tokens.css` 自 shared 重新同步

---

## [4.6.0] - 2026-04-19

### 新增 / Added

- **品牌統一**：Server 端命名為「Danmu Fire」，Electron client 命名為「Danmu Desktop」；`Config.APP_NAME = "Danmu Fire"` 透過 context_processor 注入模板
- **Danmu Fire 圖示**：新增 `danmu-desktop/assets/icon-fire.svg`（暖色火焰調色盤），複製至 `server/static/`；`scripts/build-icons.sh` 一鍵從 SVG 重新生成所有 PNG / ICO / ICNS
- **About 視窗**：Electron 新增 About 視窗（`about.html`），顯示版本號（IPC `get-app-version`）、描述、GitHub 連結
- **Tray 選單升級**：新增動態連線狀態列（`⊘ Disconnected` / `◐ Connecting…` / `● Connected`）與 About 選項；連線狀態變更時透過 IPC 即時更新
- **主視窗 Fade-in**：新增 `.main-content` CSS fade-in，防止 i18n 初始化前的文字閃爍
- **Admin 儀表板資訊架構重整**：管理頁面重新分組為 Live Control / Moderation / Assets 三大區，新增 hero 區段、chip 快速導覽、sticky 工作流側欄
- **主頁 Composer 重設計**：輸入框與即時預覽改為兩欄 sticky 佈局；滾動時自動收合為更精簡的 pinned 狀態
- **跳轉連結 / Skip-link**：Admin 頁加入鍵盤導覽用的 Skip to main content 連結
- **設計 Token 型別尺度**：新增 `--text-2xs` 至 `--text-3xl`、`--space-1` 至 `--space-8`，4px 網格模組化字級
- **3 份設計稽核報告**：`docs/audits/admin-design-audit-2026-04-11.md`、`design-review-round2-2026-04-17.md`、`design-review-final-2026-04-19.md`

### 改善 / Improved

- **設計 Token 集中化**：`shared/tokens.css` 擴充至 43 個 token，作為唯一設計系統來源；`server/static/css/tokens.css` 同步自 shared；CI 新增 token 同步檢查
- `.env.example` 補齊 `LOGIN_RATE_LIMIT`、`LOGIN_RATE_WINDOW`、`WEBHOOK_TIMEOUT`、`STICKER_MAX_COUNT` 文件
- **顏色系統統一**：清除 11 個 admin JS 模組與 4 個語系 JSON 中的 78 個 violet/purple Tailwind class；移除 45 行 `!important` cascade 覆寫；`tokens.css` 的 sky 為唯一來源
- **標題層級修復**：Admin 區段 H2 從 18px 放大到 24px，卡片 H3 固定 16px，長英文標題在 mobile 自動縮到 20px 避免 3 行折行
- **觸控目標 WCAG 2.5.5**：Effect buttons 由 26-30px 提升至 44×44px；新增全域 `cursor: pointer` 涵蓋 button / summary / label / select
- **深色模式原生控件**：新增 `color-scheme: dark` 讓 scrollbar、date picker、select dropdown 等原生控件符合深色主題
- **Motion 無障礙**：`prefers-reduced-motion: reduce` 支援；移除 range slider 的 `transition: all` 避免 layout 屬性重排
- **圖表 viewport 自適應**：歷史區 stats-chart 24 個 bar 改為 flex 均分，mobile 375px 以下不再溢出

### 修復 / Fixed

- **未登入 /admin/ 錯誤 toast 牆**：`fetchLatestSettings()` 在未認證狀態下不再觸發 `renderControlPanel()`，避免 6 個 401 toast 湧出（FINDING-001）
- **Admin i18n locale 引用過期**：4 個語系檔 (en/zh/ja/ko) 的 emoji/sticker 使用提示不再引用已清除的 violet-300 class

---

## [4.5.0] - 2026-04-07

### 新增 / Added

- Admin 面板新增「佈局模式」設定卡：可設定預設模式（scroll / top_fixed / bottom_fixed / float / rise）及是否允許使用者自選
- 主頁面連線狀態拆分為「伺服器」與「Overlay」兩個指示燈，清楚區分 WebSocket server 連線狀態與 Electron overlay 連線數
- 新增 `GET /overlay_status` API，回傳目前 Electron overlay 連線數量

### 改善 / Improved

- **i18n 系統全面遷移至 i18next**（server 與 Electron client 統一）
  - 翻譯檔獨立為 JSON source-of-truth：`server/static/locales/{lang}/translation.json`、`danmu-desktop/locales/{lang}/translation.json`
  - 新增 `scripts/build-i18n.js`（兩端皆有），從 JSON 自動生成 `i18n.js`
  - 新增 `npm run build:i18n` 指令（`server/` 與 `danmu-desktop/`）
  - 插值保持 `{var}` 格式，現有呼叫端 `.replace("{n}", val)` 完全相容，同時支援新 API `t("key", {n: val})`
- zh locale 大量補齊翻譯：主頁面、管理員頁面、設定卡標籤、黑名單、歷史記錄、密碼變更等約 80 個 key 從英文改為正確中文

### CI/CD

- `test.yml` `js-test` job 新增 i18n 一致性檢查：驗證 `i18n.js` 與 JSON 檔案同步，若過時則 CI 失敗並提示執行 `npm run build:i18n`

## [4.4.0] - 2026-04-05

### 安全修正 / Security

- CodeQL 告警全數修復：移除 startup log 中的明文密碼（`py/clear-text-logging-sensitive-data`）；`overlay.js` 的 img src 與 emoji URL 加入 `new URL()` 協議驗證（`js/xss`、`js/client-side-unvalidated-url-redirection`）；SVG 頭像回應加入 `Content-Security-Policy: default-src 'none'`（`py/reflective-xss`）
- Dependabot 漏洞全清：Electron `^36` → `^41.1.1`（修所有 HIGH use-after-free CVE）；npm overrides 強制 `lodash@^4.18.1`（修 code injection + prototype pollution）與 `@xmldom/xmldom@^0.8.12`（修 XML injection）
- `WS_HOST` 預設值從 `127.0.0.1` 改為 `0.0.0.0`，與 HTTP server 行為一致，Docker 部署不再需要手動指定

### 改善 / Improved

- Docker image 從單階段改為 multi-stage build：779 MB → 222 MB（縮小 72%）。Runtime image 不含 pip、uv、pytest、black 等 dev 工具與測試檔案
- CI：所有 GitHub Actions workflow 加入 `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true`，提前遷移至 Node.js 24（deadline 2026-06-02）
- macOS Release artifact glob 修正（`danmu manager` → `Danmu Desktop`），`.dmg` 與 `.zip` 現在正確上傳至 GitHub Releases

### 修正 / Fixed

- Effects editor（admin 面板）開啟時永遠顯示「Network error」：根因為 JS strict mode 下 `if` 區塊內的 `function` 宣告是 block-scoped，對 IIFE 外層不可見。將 `_buildPreviewParams`、`_getPreviewParams`、`_previewEffect`、`_triggerPreviewDebounced` 移至 IIFE scope
- Footer 版本號從硬碼 `v1.0.0` 改為 `{{ app_version }}`，由 `Config.APP_VERSION` 透過 context_processor 注入

### 新增 / Added

- `Config.APP_VERSION`（`server/config.py`）透過 Flask context_processor 注入所有模板，所有頁面的版本號自動同步
- CSP nonce per-request（`g.csp_nonce`）、HSTS opt-in（`HSTS_ENABLED`）、`app_version` 模板注入
- `server/tests/conftest.py` 新增 `_isolate_webhook_store` autouse fixture

### 測試 / Testing

- 測試總數：692（原 347）
- 新增 `test_api_routes.py` CSP/HSTS/security headers 整合測試
- 新增 `test_security.py` webhook store isolation 測試

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
