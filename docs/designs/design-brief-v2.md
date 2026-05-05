# Danmu Fire UIUX Redesign — Brief v2

給 Claude Design 的設計說明。目標：在現有 codebase 能實作的範圍內，完善前端視覺與互動，不生出沒有後端支撐的假功能。

> **2026-05-05 update:** this brief is now historical baseline material. For new
> Claude Design work, read
> `docs/designs/design-v2/HANDOFF-PRIORITY-RESET-2026-05-05.md` first. The
> current product priority is Send / Display / Effects / Assets. Polls and
> moderation are secondary, and the client is only a local display endpoint.

---

## 產品定位

Danmu Fire 是即時彈幕送字系統：
- **觀眾（Viewer）** 用手機或桌機網頁輸入文字，送到主場大螢幕的 overlay
- **管理員（Admin）** 管理特效、主題、插件、黑名單、webhook、排程發送訊息等後台
- **Desktop Client（Electron）** 在主場桌機負責呈現透明 overlay、連線控制

**重要：本產品沒有「主持人」角色。只有 Viewer 與 Admin。所有 host / 主持人相關 UI 一律移除。**

---

## 現有 codebase 範圍（設計基準線）

### Viewer 可用欄位

對應 `server/config.py:SETTABLE_OPTION_KEYS`：

| 欄位 | 說明 |
|---|---|
| Nickname | 暱稱，max 20 字 |
| Color | 單色選擇（`<input type="color">`） |
| FontSize | 字級 slider |
| Opacity | 透明度 slider |
| Speed | 速度 slider |
| FontFamily | 字型下拉（來自後台上傳字庫 + 系統字） |
| Layout | 5 種：`scroll` 右→左 / `top_fixed` 頂固定 / `bottom_fixed` 底固定 / `float` 浮動 / `rise` 底→頂 |
| Effects | 8 種多選堆疊：`blink` / `bounce` / `glow` / `rainbow` / `shake` / `spin` / `wave` / `zoom` |
| Emojis | `:name:` 插入到文字中（透過 emoji picker） |

字元上限 100。送出按鈕叫 **FIRE**。

**Viewer 明確不做**：
- 不看別人發的彈幕（不是聊天室）
- 沒有 Poll 投票 UI
- 沒有貼圖快速面板（貼圖是 admin 素材）
- 沒有 per-message 描邊/陰影按鈕（樣式由 Theme 全域控制）
- 沒有「快速回應」預設短語

### Admin 模組（全部有對應 route）

| 模組 | 檔案 | 用途 |
|---|---|---|
| Dashboard | `dashboard.py` | 總覽 |
| **Metrics** | `metrics.py` | 需擴充為含 CPU / MEM / WS / RATE 4 條 sparkline |
| Effects | `effects.py` | `.dme` YAML 編輯、reload |
| Themes | `themes.py` | 主題套用（擴充為 Theme Pack） |
| Fonts | `uploads.py` + `services/fonts.py` | 上傳 + 需補 list/delete endpoint |
| Poll | `poll.py` | 2–6 選項投票，**不顯示 %** |
| Plugins | `plugins.py` | 啟用/停用 |
| Filters | `filters.py` | 規則引擎（WORD / REGEX → BLOCK / MASK / REVIEW） |
| Blacklist | `blacklist.py` | 直接功能，非插件 |
| Emojis | `emojis.py` | 素材管理 |
| Stickers | `admin-stickers.js` + uploads | 獨立素材 |
| Sounds | `sounds.py` | 音效上傳 |
| Scheduler | `scheduler.py` | 排程**發送訊息**（非排程切主題） |
| Webhooks | `webhooks.py` | 事件 webhook |
| History | `history.py` | 時間軸 |
| Replay | `replay.py` | 重播 |
| Live Feed | `live.py` | 即時訊息流 |
| Widgets | `widgets.py` | 分數板 / 跑馬燈 |
| System | `settings.py` / `ws_auth.py` | 全域設定 |
| **Fingerprint**（新）| 待實作 | 觀眾指紋 hash/msgs/rate/state |

### Desktop Client 4 場景

1. **Overlay on Desktop** — 透明 overlay 疊在任何視窗上
2. **Control Window** — sidebar：Overlay / Connection / Shortcuts / About
3. **Connect Dialog** — 3 步：Server → Auth & Prefs → Done
4. **Tray Menu**（macOS menubar）— 顯示/隱藏 overlay、暫停、清空、偏好、退出

---

## 明確排除清單

上一版設計有這些，請全部拿掉：

- [ ] Host HUD 整個 artboard
- [ ] 主持人手機遙控版
- [ ] Dashboard「哈囉 admin，活動進行中」主持人問候
- [ ] Control Window 的 Session 卡片（例 `#MTG-042 · Q&A 主場 · 247 觀眾在線 · 主持人控制中`）
- [ ] Tray menu「開啟主持人控制台...」
- [ ] Connect dialog「ADMIN PASSWORD」文案 → 改「管理密碼」
- [ ] 「登入時 Viewer 模式」選項
- [ ] AI 自動回覆 widget
- [ ] AI 毒性偵測
- [ ] Theme Pack 排程切換
- [ ] Desktop Control Window 的透明度 / 速度 / 排版 slider（那是 viewer 參數）
- [ ] Viewer 端描邊 / 陰影獨立按鈕
- [ ] Viewer 端表情包貼圖快速面板（只保留 emoji picker）
- [ ] Viewer 端「快速回應」短語列表

---

## 要補強的設計（新功能對應新後端）

### 1. Admin Dashboard Telemetry sparklines
- 4 條 sparkline：`CPU%` / `MEM%` / `WS clients` / `msg rate/min`
- 每條 60 筆樣本（1s 取樣）
- 顯示當前值 + 最近 60s 趨勢
- 視覺：細線 + 淡色 area fill，cyan `#38bdf8`

### 2. Admin Fonts 獨立頁
- 列表：名稱 / 預覽樣本（用該字型渲染「中文字 ABC 123」）/ 來源 chip（`default` / `system` / `uploaded`）/ 上傳時間
- 上傳區：drag-drop `.ttf`
- Delete 按鈕（僅 `uploaded` 可刪）
- 檔案上限 15MB，mime 限 TTF/OTF

### 3. Admin Fingerprint 表（新）
- 欄位：短 hash（8 碼）/ msgs 累計 / rate/min / 最後活動時間 / 狀態 chip（`active` / `throttled` / `banned`）/ 封鎖按鈕
- 排序：預設按 rate/min 降冪
- 封鎖後加入 blacklist 或獨立 block list
- 隱私：只顯示 hash，不顯示 IP / UA 原文

### 4. Theme Pack 擴充欄位
現有 `services/themes.py` 的 theme 只有：
```yaml
styles: { color, textStroke, strokeWidth, strokeColor, textShadow, shadowBlur }
effects_preset: [{ name, params }]
```

擴充為：
```yaml
styles: { ... }           # 原樣保留
effects_preset: [...]     # 原樣保留
palette: [色1, 色2, ...]  # 新：色盤（viewer color picker 建議色）
font: NotoSansTC          # 新：綁定字型
layout: scroll            # 新：綁定佈局
bg: url|color|null        # 新：overlay 背景
```

Admin Themes 頁要顯示 Pack 詳情卡（palette 色塊、font 預覽、effects 清單 chip、layout icon、bg preview）。

---

## 頁面清單（artboards）

### Viewer（2 張）
- Mobile Safari 375×812
- Desktop Web 900×760

### Admin（統一 1440×920，共 17 張）
Dashboard / Metrics / Effects / Themes(含 Pack 詳情) / Fonts / Poll / Plugins / Filters(+Blacklist) / Emojis / Stickers / Sounds / Scheduler / Webhooks / History(+Replay) / Live Feed / Widgets / System / Fingerprint

### Desktop Client（4 張）
Overlay / Control Window / Connect Dialog / Tray Menu

---

## 保留元素：Hero 大字 Lockup

**現有 `index.html` 的 "Danmu Fire" 大字設計是產品識別，請務必保留並延伸到新設計中。**

規格（對應 `server/static/css/style.css:.server-hero-title`）：

```css
font-family: var(--font-display);  /* Bebas Neue + Noto Sans CJK fallback */
font-size: clamp(3.2rem, 8vw, 6rem);  /* 51.2px → 96px 響應式 */
color: #7dd3fc;  /* sky-300 */
filter: drop-shadow-lg;
text-transform: uppercase;
letter-spacing: 0.02em;
```

副標（`.server-hero-subtitle`）：
```css
font-size: clamp(1rem, 2vw, 1.25rem);  /* 16px → 20px */
color: slate-300;
max-width: 40rem;
```

**Hero 應用場景**（新設計要在這些位置延用同款 lockup）：

1. **Viewer Home（mobile + desktop）** — 已有，維持
2. **Admin Login** — 登入卡片頂部放小一號版（clamp 2rem → 3.5rem）
3. **Admin Dashboard** — sidebar 頂端或 header 左側，縮為 inline 版（1.5rem 固定）
4. **Desktop Client Connect Dialog** 第一步 — 大字視為歡迎標識（3rem）
5. **Overlay** 測試畫面（空連線時）— 中置 hero 作 idle state

**延伸規則**：
- 全站 hero 一律用 Bebas Neue `--font-display`，不要換字體
- 顏色一律 sky-300，不要改色
- 副標一律 slate-300，留白充足（max-width 40rem）
- Hero 下方可接 status chip（connection、overlay state）作對比

---

## 視覺規格

- **主色**：`#38bdf8`（sky-400，cyan）
- **深底**：`#020617` slate-950 / `#0f172a` slate-900
- **禁色**：紫 / violet / magenta / 洋紅（和 codebase token 衝突）
- **字體**：
  - 數字 / code：IBM Plex Mono 或 JetBrains Mono
  - 內文：Noto Sans TC / Zen Kaku Gothic New
- **深色模式預設**：`color-scheme: dark`
- **動畫**：遵守 `prefers-reduced-motion`
- **觸控區**：效果按鈕最小 44×44px（WCAG）
- **Poll bar**：用 `flex: 1 1 0`，不要給 min-width（避免 mobile 溢出）
- **Heading 階層**：H2 = 24px / H3 = 16px（mobile <480px H2 縮至 20px）
- **Tokens 來源**：優先用 `shared/tokens.css` 現有變數（`--text-2xs`...`--text-3xl`、`--space-1`...`--space-8`），不要硬寫 hex

---

## 給設計師的反饋補充（對上一版的修正）

1. 觀眾端只負責送字，不是聊天室
2. Admin 不要即時預覽（那是 desktop client 的事）
3. Poll 不顯示 %
4. 黑名單是直接功能，不是插件（不要放在 Plugins 頁）
5. 控制視窗不要重複出現 viewer 的發送參數
6. 回到 cyan/navy 深色調，neon 對比不要太強
7. 沒有「主持人」這個角色 — 只有 Admin（後台管理員）與 Viewer（觀眾）
8. 字型字級透明度速度是 **viewer 每次發送的參數**，不是 overlay 全域設定 → 所以在 viewer 端出現，不在 desktop control 出現

---

## 交付形式

維持 HTML/CSS/JS 原型（React + Babel standalone），artboard 結構沿用上一版 DCSection / DCArtboard。實作方會對照現有 `server/templates/` 的 DOM 結構與 `shared/tokens.css` 的變數來落地，不直接拷貝原型程式碼。
