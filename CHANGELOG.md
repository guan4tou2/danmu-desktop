# Changelog

所有重要的變更都會記錄在此文件中。

格式基於 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.0.0/)，
版本號遵循 [Semantic Versioning](https://semver.org/lang/zh-TW/)。

## [Unreleased]

## [4.8.5] - 2026-04-20

### 修復 / Fixed

- **Admin dashboard i18n 漏譯 (~35 條)**：v4.6.0 的 dashboard IA 重整把整個
  hero/nav/section 骨架換成英文寫死的字串，從沒 i18n 化過。切到中文 / 日文 /
  韓文時，admin 頁面 hero kicker、summary labels、nav chip 群組標題、section
  kickers、asset dashboard 卡片、sidebar workflow 連結等等都還是英文。新增
  35 個 translation key，4 語系齊備（en/zh/ja/ko），wrap 所有 hardcoded 字串
  為 `data-i18n` + `ServerI18n.t()` template 對應。

  影響：使用者切 ZH/JA/KO 時 admin 頁面現在全中/日/韓文，不再中英混雜。
  737 tests pass；Phase 1 完成 admin 頁面 visible i18n，剩一些低頻 sidebar
  描述段落以 TODO 保留（v4.9.0 一併處理）。

---

## [4.8.4] - 2026-04-20

### 修復 / Fixed

- **nginx `Host: $host` 丟 port → Flask redirect 走到錯 port (CRITICAL)**：
  v4.8.3 的 ProxyFix 讓 `/admin → /admin/` redirect 走 HTTPS 了，但 nginx
  用 `proxy_set_header Host $host;` 把 port **剝掉**（`$host` 只有 hostname，
  不含 port）。Flask 看到 `Host: 138.2.59.206`，redirect 預設 HTTPS →
  `https://138.2.59.206/admin/` → 443 → 在 shared-host 環境（例如 Oracle
  Cloud 同 VM 跑 netbird-caddy 或其他 web service 在 443）會被別的服務接走。

  修法：兩個 nginx config（`nginx-https.conf` + `nginx.conf`）把
  `proxy_set_header Host $host;` 改成 `proxy_set_header Host $http_host;`，
  `$http_host` 包含 client 實際連的 port。額外 `X-Forwarded-Host $http_host`
  讓 ProxyFix 有精確 fallback。

  使用者症狀：v4.8.3 部署後 `https://<ip>:4000/admin` 在 port-only
  deployment（沒 domain，走非標準 port）會被同機 443 服務攔截。改完
  `curl -L https://<ip>:4000/admin` 會正確落在 `https://<ip>:4000/admin/`。

---

## [4.8.3] - 2026-04-20

### 修復 / Fixed

- **Docker image 缺 `shared/tokens.css` → 所有 CSS 變數失效 (CRITICAL)**：
  `server/static/css/tokens.css` 是 symlink 指向 `../../../shared/tokens.css`。
  `docker-compose.yml` + `docker-build.yml` build context 是 `./server`，
  symlink 的 target 在 context 外，docker COPY 把 symlink 帶進 image 但
  target 檔案不存在。結果：`@import url("tokens.css")` 載入 404、
  `var(--radius-pill)` / `var(--color-success)` / 全部 tokens 變 `initial`。
  使用者可見症狀：hero status pill 不圓（看起來方角）、status dot 綠/紅消失、
  其他依賴 CSS 變數的元件 silently broken。

  修法：build context 改 repo root，Dockerfile COPY paths 加 `server/` prefix，
  明確 `COPY shared/ /app/shared/` 讓 symlink target 進 image。新增 root
  `.dockerignore` 排除 `danmu-desktop/` / docs / node_modules / pycache
  等，避免 context 變大影響 build 速度。

### 技術細節 / Technical

- **`docker-compose.yml`** `build.context` `./server` → `.`，dockerfile path
  改 `server/Dockerfile`。同樣改動套用到 `.github/workflows/docker-build.yml`
  的兩個 build step（PR + push to main）。
- **`server/Dockerfile`** 所有 `COPY <relpath>` 前綴 `server/`；新增
  `COPY shared/ /app/shared/` 在 server code 之前，確保 symlink 解析時
  target 已存在。
- **新增 root `.dockerignore`**：排除 `.git` / `.github` / `danmu-desktop/`
  / `docs/` / `*.md` / node_modules / python cache 等。
- **為何不用其他修法？**
  - Option A（把 tokens.css 變成真實檔案、刪 symlink）：破壞 MEMORY.md 記的
    "single source of truth" 架構，未來 Electron / 其他 consumer 不好共享。
  - Option B（Dockerfile 內 inline content）：不可維護，每次 tokens.css 改
    都要改 Dockerfile。
  - Option C（build step resolve symlink）：引入 build 時副作用，污染 local
    repo 狀態。
  選擇 context 改 root 的代價僅是 docker-compose / CI 各一行改動，換來乾淨的
  monorepo-style build。

---

## [4.8.2] - 2026-04-20

Deployment-papercut release — all four fixes were triggered by an actual
live deploy to Oracle Cloud where UID mismatch + .env inline-comment +
cloud firewall combined to hide the problem behind cryptic log lines.

### 修復 / Fixed

- **`.env.example` inline-comment 被 python-dotenv 吞成值 (CRITICAL)**：
  `SECRET_KEY=` 和 `WS_AUTH_TOKEN=` 兩行後面接了 `# comment`。dotenv 對
  **空值 + inline `#` comment** 的處理是把整個 comment 當成值，所以
  `WS_AUTH_TOKEN=              # Shared secret; ...` 會被 load 成
  `"# Shared secret; ..."`，接著 admin UI 也會顯示這串 garbage 當 token。
  修法：把說明註解移到變數的**上一行**，變數行保持 `KEY=`（值為空）。
  同個 bug 之前在 `WS_ALLOWED_ORIGINS` 被修過，這次補齊剩下兩個受害者。
- **`setup.sh` UID mismatch 無感知 (Oracle Cloud 常見)**：host 使用者 UID
  ≠ 1000（Oracle / 某些 minimal image 的 `ubuntu` 是 1001）時，docker
  bind-mount `server/runtime/` 會讓 container 的 `appuser`(uid 1000) 無法
  寫入，ws_auth.json / settings.json / webhooks.json 等全部寫失敗但無
  明顯錯誤訊息。`setup.sh init` 現在會：
  - `mkdir -p server/runtime server/user_plugins`（避免 docker 用 root 預設建）
  - 偵測 `$(id -u)` ≠ 1000 時 warn 並印出修復指令
    `sudo chown -R 1000:1000 server/runtime server/user_plugins`
- **`ws_auth.py` 寫入失敗時 log spam → 優雅降級**：先前每次 `set_state`
  / 每次 boot 都會 `ERROR ... Permission denied`。現改為：
  - 第一次失敗記一條 `WARNING` 附可行修復指令
  - 後續失敗降到 `DEBUG`
  - **in-memory cache 照更新** — admin UI 的變動在 container lifetime 內
    仍生效（只是無法跨 restart），比先前「靜默丟失」好

### 新增 / Added

- **`DEPLOYMENT.md` 疑難排解新段**：
  - `Permission denied writing runtime/ws_auth.json` — 完整診斷 + chown 修復
  - `Cloud firewall blocking 4000 / 4001` — host iptables + cloud ingress 雙層
    說明（Oracle Cloud / AWS / GCP 通則）

### 技術細節 / Technical

- **Tests**：`tests/test_ws_auth.py` 新增 4 個 graceful-degradation 測試
  （seed 失敗 / set_state 失敗 / 一次性 log / rotate 失敗時 in-memory 可用）。
  使用 `monkeypatch` 把 `os.open` 對 `ws_auth.tmp.*` 強制丟 `PermissionError`，
  模擬 UID mismatch 情境不需真的改 host 權限。全部標 `@ws_auth_raw_seed`
  opt out 預設的 disabled-state fixture。737 tests pass（v4.8.1: 733 + 4 new）。
- **Build tooling**：`server/package.json` `build:css` script 在 tailwindcss
  output 後追加 `\n`，避免 pre-commit `end-of-file-fixer` 每次重 build 都
  strip 掉尾行 newline（v4.8.0、v4.8.1 都撞過這個 DX papercut）。

---

## [4.8.1] - 2026-04-20

### 修復 / Fixed

- **`setup.sh init` 在 HTTPS mode 的 HTTP port 提示後靜默退出 (CRITICAL)**：v4.7.1 加入的 port 驗證邏輯有兩個 `set -e` 陷阱：
  1. `_port_in_use` 對**空閒 port** 回傳 1，直接觸發 `set -euo pipefail` 把 script 殺掉（`case $?` 根本沒機會跑）。使用者在 VPS 上看到的 symptom 就是輸入 HTTP port（比方 4080）後 prompt 消失、shell 回傳 exit code 1、沒有錯誤訊息。
  2. `_valid_port` 回傳 2（port 被佔用）也會被 `set -e` 吃掉，使得 occupied-port 的 override 路徑從來都不會被觸發。

  修法：在 `_valid_port` 裡用 `_port_in_use "$n" || _piu=$?` 捕 rc；在呼叫端用 `_valid_port … || _rc=$?` 同樣 idiom。兩個 `set -e` 豁免點都加了註解說明為什麼不能改回 `; case $?`。用 bash 5 + Docker 跑了三種 scenario（free port / in-use port / 非數字）確認修好。

  回報：使用者 VPS（ubuntu、ss 可用）實際重現 — 80/443 被佔用而被 fallback 到 4080，再輸入 4080 時 `_port_in_use 4080` 回 1（free），script 死。

---

## [4.8.0] - 2026-04-20

### 新增 / Added

- **Admin UI WS token toggle**（moderation 區新增 `sec-ws-auth` 區段）：過去要啟用/停用 `4001` 的 shared token 驗證必須改 `.env` 並重啟 container，現在在 admin 頁一鍵切換。開/關、手動填 token、重新產生 token、複製到剪貼簿都直接可用，設定瞬間套用 — existing connections 會被保留（grandfathered），新連線立即依新設定。支援 4 語系（中/英/日/韓）。直播中切換不用踢人，不用重開 server。
- **`runtime/ws_auth.json`**：新的 runtime state 檔，同 `settings.json` / `webhooks.json` / `filter_rules.json` 一樣放在 `server/runtime/`，被 Docker bind-mount、被 `scripts/backup.sh` 備份、被 v4.6.2+ 的 upgrade-safe 機制保護。
- **Secure-by-default 初始化**：首次啟動（runtime 檔不存在）如果環境變數 `WS_REQUIRE_TOKEN` / `WS_AUTH_TOKEN` 都沒設，會自動產生 24-byte urlsafe token 並啟用 token 驗證；管理員之後可在 UI 關閉。這是「fresh install 安全」與「已部署用戶 upgrade 不被靜默改設定」的折衷 — 若 env 明確 set `WS_REQUIRE_TOKEN=false`，就尊重這個決定。
- **Admin routes**：`GET /admin/ws-auth`（讀當前狀態）、`POST /admin/ws-auth`（更新）、`POST /admin/ws-auth/rotate`（重新產生 token）。全部 CSRF 保護、`require_login`、過 `admin` rate limit。

### 改善 / Improved

- **Per-connection auth lookup**：`server/ws/server.py` 的 `_is_authorized()` 不再從啟動時 capture 的 closure 常數讀，而是每次連線呼叫 `ws_auth.get_state()`。admin 改 token 或切換 require_token 不用重啟 server，下一個 WS 連線就吃到新設定。
- **啟動 warning 文字更新**：`startup_warnings.py` 原本提 `WS_REQUIRE_TOKEN is disabled`；現在改為 `WS token auth is disabled`，並提示「flip the admin UI toggle to enable token auth」作為可行的修復路徑。
- **`/overlay` 路由讀 live state**：`routes/main.py` 的 overlay handler 以前讀 `current_app.config["WS_AUTH_TOKEN"]`（啟動時固定），現在讀 `ws_auth.get_state()`，admin 改 token 後新開的 OBS browser source 就拿得到最新值。

### 修復 / Fixed

- **Admin UI auto-handler 衝突**：`wsAuthRequireToggle` 原本會被 `.toggle-checkbox` 全域監聽抓到並誤打到 `/admin/Set` endpoint。初始化時移掉該 class，改由本區段專用 save button 處理。

### 技術細節 / Technical

- **Tests**：`tests/test_ws_auth.py` 新增 21 個測試（seeding 行為、cache 語意、檔案毀損復原、route validation、CSRF、rotate 保持 require_token flag、管理員改完 state 新連線立即吃到）。`conftest.py` 新增 `_isolate_ws_auth` autouse fixture，每測試重置 runtime 檔 + in-memory cache；預設把 state 預先設為 disabled，和 v4.7 系統測試相容，需要觸發 seeding 邏輯的 test 用 `@pytest.mark.ws_auth_raw_seed` opt-out。
- **Validation schema**：`WsAuthSchema` 在 `validation.py` 新增，token 允許 `[A-Za-z0-9._~+/=-]{0,128}`（URL-safe base64 + 常見的 URL-safe 字元），同時用 `@validates_schema` 強制「require_token=True 時 token 必填」。服務層 `set_state()` 也會再 double-check。
- **文件層**：Wiki Admin-Guide / Configuration 下次更新會收錄。DEPLOYMENT.md 的「WS token auth」段也會指向 admin UI 而非 env var。

---

## [4.7.1] - 2026-04-20

### 修復 / Fixed

- **`setup.sh init` port 防呆**：HTTPS mode 分開輸入 HTTP_PORT 與 HTTPS_PORT 時，之前沒檢查兩者是否相同，也沒驗證是否為有效 port 或是否已被佔用。新增 `_valid_port` 驗證迴圈：非數字、超出 1-65535、已被佔用、兩 port 相同都會提示並重問。

### 改善 / Improved

- **`setup.sh init` WS 預設調整**：
  - `Expose WebSocket port 4001 for Danmu Desktop client?` 預設從 N 改為 **Y**（安裝 server 的主要原因就是要跑 overlay，不開等於沒用）
  - `Require a shared token for the WS port?` 預設保持 N（LAN / firewall 保護環境不需要；公網 VPS 可手動啟用）
- **統一安裝文件**：`README.md` 與 `DEPLOYMENT.md` 都把 `./setup.sh init` 列為 canonical 安裝路徑，不再並列多條 manual 流程。降低新用戶決策負擔。

---

## [4.7.0] - 2026-04-20

### 新增 / Added

- **直播模式 / Stream mode toggle**：Admin 頁 hero 右上新增 toggle 開關，開啟後自動折疊 11 個低頻率區段（Themes / Emojis / Stickers / Sounds / Polls / Plugins / Webhooks / Scheduler / Change password / Filters / Advanced），只保留直播中真的會用到的：Live Feed、黑名單、Effects、歷史、Core controls。Hero summary cards 同步縮小。偏好存 `localStorage['danmu-stream-mode']`，reload 後 before-paint 套用不閃爍。i18n 4 語系齊備（中：直播模式、日：配信モード、韓：방송 모드、英：Stream mode）。
- **Legacy runtime-state migration**：`filter_engine.py` 與 `webhook.py` 新增 one-shot 自動搬家邏輯，從舊 default（`server/filter_rules.json`、`server/webhooks.json`）搬到新的 `server/runtime/` 位置。只在使用 default path 時觸發，不影響測試 monkeypatch。

### 改善 / Improved

- **`filter_rules.json` + `webhooks.json` 預設路徑對齊**：跟 v4.6.3 的 `SETTINGS_FILE` / `plugins_state.json` 一致，預設全部改到 `server/runtime/`，backup.sh 一個指令即可涵蓋整組 user state。
- Docker 使用者無感（已經 bind-mount `./server/runtime/`）。非 Docker 直跑的使用者升級後會看到一次性 migration log，原檔保留不刪。

---

## [4.6.5] - 2026-04-20

### 修復 / Fixed

- **`scripts/bump-version.sh` drift self-heal**：腳本先前用 `$CURRENT` 當 sed 匹配模式，若 `package.json` 與 `config.py` 版本已 drift（如 `config.py` 被手動改成別的版本），sed 會 silent no-op 只更新 `package.json`，留下不一致。改為匹配任意 `[0-9]+\.[0-9]+\.[0-9]+` semver pattern，並加上 post-write verification 逐檔確認新版本已寫入。
- **`scripts/bump-version.sh` portability**：`grep -E '^\s*...'` 在 BSD grep（macOS 預設）下不認 `\s`，改為 `[[:space:]]` 與腳本其他地方一致，避免某些環境抓不到當前版本。
- **`scripts/bump-version.sh` awk double separator**：bump 後 CHANGELOG 會產生兩條 `---`，原因是 awk 不消化 `[Unreleased]` 後既存的 separator。現在會吞掉後續空白行與 `---` 再插入新 section，不再疊。

---

## [4.6.4] - 2026-04-20

### 新增 / Added

- **`scripts/bump-version.sh`**：一鍵同步更新 `danmu-desktop/package.json`、`server/config.py`、`CHANGELOG.md` 三處版本號。支援 `DRY_RUN=1` 預覽、版本格式驗證、自動 section 插入。
- **`setup.sh gen-secret`**：新指令，在 `.env` 遺失 `SECRET_KEY` 時一鍵產生 256-bit hex key 並寫入。原本 `setup.sh check` 只會回報錯誤沒指示如何修，現在錯誤訊息直接提示修復指令。

### 改善 / Improved

- `setup.sh check` 偵測 production 無 `SECRET_KEY` 時，錯誤後附上 `./setup.sh gen-secret` 與 `./setup.sh init` 兩種修復路徑。

---

## [4.6.3] - 2026-04-20

### 修復 / Fixed

- **SETTINGS_FILE 預設路徑 `/tmp`**：之前預設是 `tempfile.gettempdir()` 解析為 `/tmp`，macOS 重開機會清空（部分 Linux 發行版亦同），非 Docker 直跑的使用者每次開機都會 silently 丟失設定（顏色 / 透明度 / 速度 / 字型）。改為 `server/runtime/settings.json`，與其他 runtime state 同 dir。
- **插件狀態與使用者插件可持久化**：重構 `PluginManager`，拆開**內建 example 插件**（`server/plugins/`，跟 image 一起升級）與**使用者自訂插件**（`server/user_plugins/`，獨立 mount）。`plugins_state.json` 移到 `server/runtime/`。一次性自動 migration：升級時若偵測到舊位置檔案則複製至新位置。

### 新增 / Added

- **`scripts/backup.sh`**：一鍵備份 runtime / user_plugins / user_fonts / static / .env 成 dated tarball。支援 `BACKUP_SKIP_STATIC=1` 環境變數跳過 bundled static 資源。
- **`server/user_plugins/`**：使用者自訂插件放這裡；gitignored，可獨立 bind-mount。含 `README.md` 說明 SDK 路徑。

### 改善 / Improved

- `docker-compose.yml` 新增 `./server/user_plugins:/app/server/user_plugins` mount；不再 mount `./server/plugins`（避免 shadow bundled example plugins）。
- `DEPLOYMENT.md` persistence table 更新為新的雙 plugin dir 架構 + legacy migration 說明。

---

## [4.6.2] - 2026-04-20

### 修復 / Fixed

- **部署資料遺失 (CRITICAL)**：Docker 容器重建時會遺失使用者的 filter 規則、webhooks、設定、plugins 狀態。修法：加入 `./server/runtime/` 與 `./server/plugins/` bind mounts，透過 `FILTER_RULES_FILE` / `SETTINGS_FILE` / `WEBHOOKS_PATH` env vars 將 runtime 檔案導向持久化目錄。影響：先前的升級流程會 silently reset 全部使用者配置。
- **`webhook.py` 忽略 env var**：`config.py` 宣告 `WEBHOOKS_PATH` 但 `services/webhook.py` 硬寫檔名，env 永遠無效。現改為直接讀 `Config.WEBHOOKS_PATH`（單一設定來源，未設環境變數時回退到 `server/webhooks.json` 預設）。
- **`FILTER_RULES_PATH` → `FILTER_RULES_FILE` 名稱統一**：`config.py` 宣告 `FILTER_RULES_PATH` 但實際使用的 `services/filter_engine.py` 讀 `FILTER_RULES_FILE` env var，兩者名字不一致 config 欄位等於死碼。統一為 `Config.FILTER_RULES_FILE`。
- **無障礙對比不足 / A11y contrast**：61 處使用 `text-slate-500`（對比 3.75:1，僅符合 AA large 非 AA body）與 1 處 `text-slate-600`（對比 2.36:1，全數失敗）全面改為 `text-slate-400`（對比 6.96:1，通過 AA body）。影響：loading / empty-state 訊息、時間戳、metadata 標籤、篩選規則優先級顯示等皆可讀。
- **i18n 漏譯補齊**：`exportJSON`、`recordReplay` 補上 4 語系；韓文 `overlayNone`、`overlayConnected` 從英文改為 "연결 안 됨" / "Overlay: {n}개"。
- **`.env.example` 行內註解 bug**：`WS_ALLOWED_ORIGINS=  # comment` 在 python-dotenv 下會被解析成字串 literal，導致所有 WebSocket overlay 連線被 Origin 檢查擋掉。改成註解獨立一行。
- **`.env.example` 死變數清理**：移除 `EMOJI_DIR` / `PLUGINS_DIR` / `SOUNDS_DIR` / `WS_PUBLIC_PORT`（4 個完全沒程式讀取的假文件）；修正 `FILTER_RULES_PATH` → `FILTER_RULES_FILE` 對齊程式實際使用的名字。

### 新增 / Added

- `docs/perf/baseline-v4.6.1.md` — HTTP payload / latency / font loading strategy 的效能基線
- `DEPLOYMENT.md` 新增「Data persistence」與「Backup & restore」章節（完整 runtime state 檔案對照表、tar 備份指令、升級 / 搬機流程）
- `CONTRIBUTING.md` 新增「設計系統」章節，連結 `DESIGN.md` + tokens 使用規範
- `README.md` 文件索引新增 DESIGN.md / docs/perf / docs/designs / docs/audits 入口

### 改善 / Improved

- `shared/tokens.css` 的 `--color-text-*` tokens 加註 WCAG 對比率值，`--color-text-muted` 明確標註「僅用於 disabled/decorative」

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
