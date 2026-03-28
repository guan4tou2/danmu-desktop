# 10 功能開發設計文件

## Context
danmu-desktop 已具備完整的彈幕發送/顯示/管理/特效/投票/主題/回放/OBS/i18n 功能。本輪新增 10 個進階功能，按依賴順序分 4 個 Phase 實施。

## 實施順序

```
Phase 1 (基礎層，無依賴):  5.即時監控  6.佈局模式  2.過濾引擎  1.排程發送
Phase 2 (擴展層):          8.暱稱頭像  4.表情貼圖  9.音效系統
Phase 3 (整合層):          3.多房間    7.Webhook
Phase 4 (頂層):            10.插件系統
```

---

## Feature 1: 彈幕排程 / 定時發送

### 目的
預設多條彈幕，按時間間隔自動輪播（活動倒數、公告輪播）。

### 新建檔案

**`server/services/scheduler.py`**
```python
class SchedulerService:
    _jobs: dict[str, ScheduledJob]  # job_id → job

    def create(messages: list[dict], interval_sec: float,
               repeat_count: int = -1, start_delay: float = 0) -> str:
        """建立排程任務，回傳 job_id (uuid[:8])"""

    def cancel(job_id: str) -> bool
    def pause(job_id: str) -> bool
    def resume(job_id: str) -> bool
    def list_jobs() -> list[dict]
    def _run_job(job_id: str) -> None  # threading.Timer 鏈式觸發
```

- 每個 job 用 `threading.Timer` 鏈式觸發，非 blocking
- 最大 20 個 job（`Config.SCHEDULER_MAX_JOBS`）
- 每個 job 呼叫 `messaging.forward_to_ws_server()` 發送
- Job 狀態：`active` / `paused` / `cancelled`

### 修改檔案
- `server/routes/admin.py` — 4 端點：`POST create/cancel/pause/resume` + `GET list`
- `server/static/js/admin.js` — 「Scheduler」section
- `server/services/validation.py` — `SchedulerCreateSchema`
- `server/config.py` — `SCHEDULER_MAX_JOBS = 20`

### 測試
- `test_scheduler.py`：create/cancel/pause/resume/max_jobs/timer_chain

---

## Feature 2: 過濾規則引擎

### 目的
擴展黑名單為完整過濾引擎：正則、替換、速率限制。

### 新建檔案

**`server/services/filter_engine.py`**
```python
class FilterEngine:
    _rules: list[FilterRule]  # 按 priority 排序

    class FilterRule:
        id: str           # uuid[:8]
        type: str         # "keyword" | "regex" | "replace" | "rate_limit"
        pattern: str      # 匹配模式
        replacement: str  # type=replace 時的替換文字
        action: str       # "block" | "replace" | "allow"
        priority: int     # 越小越先執行
        enabled: bool

    def check(text: str, fingerprint: str = None) -> FilterResult:
        """回傳 {action, text, reason, rule_id}"""

    def add_rule(rule_data: dict) -> str
    def remove_rule(rule_id: str) -> bool
    def list_rules() -> list[dict]
    def test_rule(rule_data: dict, text: str) -> FilterResult
```

- 規則持久化到 `filter_rules.json`
- `rate_limit` 規則用 sliding window（per fingerprint）
- 現有 `blacklist.py` 的 keywords 遷移為 `type=keyword` 規則
- `blacklist.py` 保留為相容包裝

### 修改檔案
- `server/routes/api.py` — `/fire` 用 `filter_engine.check()` 取代 `contains_keyword()`
- `server/routes/admin.py` — CRUD: `add/remove/list/test`
- `server/static/js/admin.js` — 「Filter Rules」section + 正則測試器
- `server/config.py` — `FILTER_RULES_PATH`

### 測試
- `test_filter_engine.py`：keyword/regex/replace/rate_limit/priority/persistence

---

## Feature 3: 多房間 / 頻道支援（輕量路由）

### 目的
URL 路徑分隔，每個房間獨立 WebSocket 頻道。

### 新建檔案

**`server/services/rooms.py`**
```python
class RoomManager:
    _rooms: dict[str, Room]

    class Room:
        name: str
        display_name: str
        config: dict        # 設定覆寫（主題、佈局等）
        ws_queue: deque      # 獨立訊息佇列
        created_at: datetime

    def create_room(name: str, display_name: str = "", config: dict = None) -> Room
    def delete_room(name: str) -> bool
    def get_room(name: str) -> Room | None
    def list_rooms() -> list[dict]
    def get_queue(room: str) -> deque  # 回傳對應房間的 queue
```

- 預設 `"default"` 房間，向後兼容
- 房間名限 `[a-z0-9-]`，最多 20 個房間
- 房間設定覆寫：theme、layout、filter rules

### 修改檔案
- `server/routes/main.py` — `GET /overlay/<room>`
- `server/routes/api.py` — `/fire` 接受 `room` 參數
- `server/services/ws_queue.py` — per-room 隊列
- `server/services/messaging.py` — `forward_to_ws_server(msg, room="default")`
- `server/app.py` — WS 連線帶 `room` param
- `server/static/js/admin.js` — 「Rooms」section
- `server/static/js/overlay.js` — URL param `?room=xxx`
- `danmu-desktop/main-modules/child-ws-script.js` — WS URL 帶 room
- `server/config.py` — `ROOMS_ENABLED`, `ROOMS_MAX`

### 測試
- `test_rooms.py`：create/delete/isolation/queue_separation/default_compat

---

## Feature 4: 彈幕表情包 / 貼圖

### 目的
支援 `:emoji_name:` 語法，渲染 inline 圖片。

### 新建檔案

**`server/services/emoji.py`**
```python
class EmojiService:
    _emojis: dict[str, EmojiInfo]  # name → {path, url, width, height}
    EMOJI_DIR = "server/static/emojis/"

    def parse(text: str) -> str:
        """將 :name: 替換為 <img> 標籤 URL"""

    def upload(name: str, file) -> bool
    def delete(name: str) -> bool
    def list_emojis() -> list[dict]
    def _scan() -> None  # 掃描目錄
```

- 內建 10 個預設 emoji（smile, heart, fire, star, thumbsup, laugh, cry, angry, cool, party）
- 自訂上傳：PNG/GIF/WebP，最大 500KB，resize 到 48x48
- 5 秒掃描目錄，mtime 熱載入（同 effects/themes 模式）

**`server/static/emojis/`** — 預設 emoji 圖片目錄

### 修改檔案
- `server/routes/api.py` — `/fire` 呼叫 `emoji_service.parse()`
- `server/routes/admin.py` — emoji CRUD + upload
- `server/static/js/main.js` — emoji picker grid
- `server/static/js/overlay.js` — `showdanmu()` inline `<img>` 渲染
- `danmu-desktop/main-modules/child-ws-script.js` — 同上

### 測試
- `test_emoji.py`：parse/upload/delete/scan/size_validation

---

## Feature 5: Admin 即時監控

### 目的
Admin 頁面即時彈幕流 + 一鍵管理。

### 修改檔案

**`server/services/messaging.py`**
- `forward_to_ws_server()` 同時廣播 `{type: "danmu_live", data: {...}}` 到 admin WS

**`server/routes/admin.py`**
- `POST /admin/live/block` — 封鎖 fingerprint 或關鍵字

**`server/static/js/admin.js`**
- 新增「Live Feed」section（`<details id="sec-live-feed">`）
- 即時彈幕流列表（最新 200 條，虛擬滾動）
- 每條：時間戳、文字預覽、顏色方塊、特效標籤、fingerprint（遮罩）
- 操作按鈕：封鎖關鍵字、封鎖 fingerprint、加入黑名單
- 暫停/恢復按鈕（暫停時累積不丟棄）
- 搜尋過濾（即時 filter）

### 測試
- `test_admin.py` 追加：live block endpoint
- `test_messaging.py`：danmu_live broadcast

---

## Feature 6: 彈幕佈局模式

### 目的
5 種佈局：scroll（現有）、top_fixed、bottom_fixed、float、rise。

### 新建檔案

**`server/services/layout.py`**
```python
class LayoutMode(Enum):
    SCROLL = "scroll"          # 右→左滾動（預設）
    TOP_FIXED = "top_fixed"    # 頂部固定 3 秒
    BOTTOM_FIXED = "bottom_fixed"  # 底部固定 3 秒
    FLOAT = "float"            # 隨機位置漂浮
    RISE = "rise"              # 由下往上

LAYOUT_CONFIG = {
    "scroll": {"animation": "danmu-scroll", "direction": "rtl", "duration_base": True},
    "top_fixed": {"position": "top", "fixed": True, "duration": 3000},
    "bottom_fixed": {"position": "bottom", "fixed": True, "duration": 3000},
    "float": {"random_position": True, "fade_in_out": True, "duration": 4000},
    "rise": {"animation": "danmu-rise", "direction": "btt", "duration_base": True},
}
```

### 修改檔案
- `server/routes/api.py` — `_resolve_danmu_style()` 加 `layout` 欄位
- `server/static/js/main.js` — 佈局模式選擇器
- `server/static/js/overlay.js` — `showdanmu()` 根據 layout 選擇動畫
- `danmu-desktop/main-modules/child-ws-script.js` — 同上
- `danmu-desktop/renderer-modules/track-manager.js` — 固定模式 track 邏輯
- `server/static/js/admin.js` — 全域預設佈局設定
- `server/config.py` — `SETTABLE_OPTION_KEYS` 加 `"Layout"`

### 測試
- `test_layout.py`：each mode config, resolve_style integration

---

## Feature 7: Webhook 外部整合

### 目的
出站 Webhook（事件通知）+ 入站 Webhook（外部轉彈幕）。

### 新建檔案

**`server/services/webhook.py`**
```python
class WebhookService:
    _hooks: list[WebhookConfig]

    class WebhookConfig:
        id: str
        url: str
        events: list[str]     # ["on_danmu", "on_poll_create", ...]
        format: str           # "json" | "discord" | "slack"
        secret: str           # HMAC signing key
        enabled: bool
        retry_count: int      # default 3
        last_status: int      # HTTP status code

    def register(config: dict) -> str
    def unregister(hook_id: str) -> bool
    def list_hooks() -> list[dict]
    def emit(event: str, data: dict) -> None  # 非同步觸發
    def verify_incoming(request, hook_id: str) -> bool  # HMAC 驗簽
```

- 出站：`threading.Thread` 非同步發送，失敗重試 3 次 + 指數退避
- 入站：`POST /webhook/incoming/<id>` → HMAC 驗簽 → 轉為彈幕
- 格式模板：Discord（embed）、Slack（block）、raw JSON
- 持久化到 `webhooks.json`

### 修改檔案
- `server/routes/api.py` — `/fire` 後觸發 `webhook.emit("on_danmu", ...)`
- `server/routes/admin.py` — webhook CRUD + test + incoming endpoint
- `server/static/js/admin.js` — 「Webhooks」section
- `server/config.py` — `WEBHOOKS_PATH`, `WEBHOOK_TIMEOUT`

### 測試
- `test_webhook.py`：register/emit/retry/hmac_verify/incoming

---

## Feature 8: 使用者暱稱 & 頭像

### 目的
彈幕附帶暱稱和頭像，增強社群感。

### 修改檔案

**`server/services/validation.py`**
- `FireRequestSchema` 加 `nickname`（str, max 20）、`avatar_url`（optional URL）

**`server/routes/api.py`**
- `/fire` 處理暱稱 + 生成 SVG 首字母頭像（無外部依賴）
- 新增 `GET /avatar/<letter>/<color>` — 動態 SVG 頭像端點

**`server/static/js/main.js`**
- 暱稱輸入框 + 頭像預覽
- localStorage 持久化暱稱

**`server/static/js/overlay.js`**
- `showdanmu()` 加小頭像（24x24）+ 暱稱標籤

**`danmu-desktop/main-modules/child-ws-script.js`**
- 同上

**`server/routes/admin.py`**
- 啟用/停用暱稱功能的設定

**`server/config.py`**
- `SETTABLE_OPTION_KEYS` 加 `"Nickname"`

### 測試
- `test_api_routes.py` 追加：nickname validation, avatar generation

---

## Feature 9: 音效系統

### 目的
關鍵字/特效觸發音效。

### 新建檔案

**`server/services/sound.py`**
```python
class SoundService:
    _sounds: dict[str, SoundInfo]
    _rules: list[SoundRule]
    SOUNDS_DIR = "server/static/sounds/"

    class SoundRule:
        id: str
        trigger_type: str     # "keyword" | "effect" | "poll_vote"
        trigger_value: str    # 匹配的關鍵字或特效名
        sound_name: str
        volume: float         # 0.0 ~ 1.0
        cooldown_ms: int      # 防止連續觸發

    def match(text: str, effects: list = None) -> str | None:
        """回傳 sound URL 或 None"""

    def upload(name: str, file) -> bool
    def delete(name: str) -> bool
    def list_sounds() -> list[dict]
    def add_rule(rule: dict) -> str
    def remove_rule(rule_id: str) -> bool
```

- 內建 5 個音效：cheer.mp3, bell.mp3, pop.mp3, whoosh.mp3, tada.mp3
- 自訂上傳：MP3/OGG/WAV，最大 1MB
- 觸發規則：cooldown 防止連續觸發
- 5 秒掃描 + mtime 熱載入

**`server/static/sounds/`** — 預設音效目錄

### 修改檔案
- `server/routes/api.py` — `/fire` 回傳增加 `sound` 欄位
- `server/routes/admin.py` — 音效 CRUD + 規則管理
- `server/static/js/overlay.js` — `new Audio(url).play()`
- `danmu-desktop/main-modules/child-ws-script.js` — 同上
- `server/static/js/admin.js` — 「Sounds」section
- `server/config.py` — `SOUNDS_DIR`

### 測試
- `test_sound.py`：match/upload/rules/cooldown

---

## Feature 10: Plugin API / 插件系統

### 目的
開放 hook 點，第三方可寫 Python 插件擴充行為。

### 新建檔案

**`server/services/plugin_manager.py`**
```python
class DanmuPlugin:
    """插件基類"""
    name: str
    version: str
    description: str
    priority: int = 100  # 越小越先執行

    def on_fire(self, context: dict) -> dict | None:
        """彈幕發送前。回傳 None=不修改，回傳 dict=修改內容，raise StopPropagation=攔截"""

    def on_connect(self, client_info: dict) -> None
    def on_disconnect(self, client_info: dict) -> None
    def on_poll_vote(self, vote_info: dict) -> None
    def on_startup(self) -> None
    def on_shutdown(self) -> None

class PluginManager:
    _plugins: dict[str, PluginWrapper]

    def load_all() -> None          # importlib 掃描 plugins/ 目錄
    def reload() -> None
    def enable(name: str) -> bool
    def disable(name: str) -> bool
    def list_plugins() -> list[dict]
    def emit(hook: str, context: dict) -> dict:
        """鏈式呼叫，timeout 3s/plugin，異常隔離"""
```

- 插件目錄：`server/plugins/`
- 動態載入：`importlib.import_module`，5 秒掃描熱插拔
- 安全：每個 hook 3 秒 timeout，異常隔離（log + 跳過）
- 持久化啟停狀態到 `plugins_state.json`

**`server/plugins/example_logger.py`**
- 範例：日誌記錄所有彈幕到 `danmu_log.txt`

**`server/plugins/example_auto_reply.py`**
- 範例：匹配 "hello" → 自動回覆 "Welcome!"

### 修改檔案
- `server/app.py` — 啟動時 `plugin_manager.load_all()` + `emit("on_startup")`
- `server/routes/api.py` — `/fire` 呼叫 `emit("on_fire", context)`
- `server/routes/admin.py` — 插件 list/enable/disable/reload
- `server/static/js/admin.js` — 「Plugins」section
- `server/config.py` — `PLUGINS_DIR`

### 測試
- `test_plugin_manager.py`：load/enable/disable/emit/timeout/isolation/priority

---

## 共用變更

### server/config.py 新增
```python
SCHEDULER_MAX_JOBS = 20
FILTER_RULES_PATH = "filter_rules.json"
ROOMS_ENABLED = True
ROOMS_MAX = 20
EMOJI_DIR = "static/emojis"
WEBHOOKS_PATH = "webhooks.json"
WEBHOOK_TIMEOUT = 10
SOUNDS_DIR = "static/sounds"
PLUGINS_DIR = "plugins"
```

### server/config.py SETTABLE_OPTION_KEYS 擴展
```python
SETTABLE_OPTION_KEYS = {
    "Color", "Opacity", "FontSize", "Speed",
    "FontFamily", "Effects",
    "Layout", "Nickname",  # 新增
}
```

### i18n 擴展
- `server/static/js/i18n.js` — 10 功能的 en/zh/ja/ko 翻譯
- `danmu-desktop/i18n.js` — Layout / Nickname 相關翻譯

### 驗證指令
```bash
# Python tests
uv run --project server python -m pytest server/tests/ -v --rootdir=. \
  --ignore=server/tests/test_browser_admin.py \
  --ignore=server/tests/test_browser_fire_e2e.py

# JS tests
cd danmu-desktop && npx jest --no-coverage

# Lint
cd server && uv run flake8 . && uv run black --check . && uv run isort --check-only .
```
