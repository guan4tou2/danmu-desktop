# 設計稿 14 · 工程銜接（讓 repo 能直接開工）

來源：`14 工程銜接.dc.html`。**這是實作的主索引**。

> 設計稿明講：repo 的 `docs/agent-ops/60-style-contract.md` 已定 SF 字級刻度、4px 格、
> `--admin-*` 表面 token 與 `.admin-ui-group` 設定列版型，**與本套設計方向一致**。
> 本頁不另起一套 token，而是把設計稿的值**映射到既有 token**。

## 1 · Token 對照（`shared/tokens.css`）

| Token | 現值 (v5.3.1) | 新 · 淺 | 新 · 深 |
|---|---|---|---|
| `--admin-bg` | hud-bg0 `#050912` | `#F4F6F9` | `#0B1120` |
| `--admin-panel` | hud-bg1 `#0c1424` | `#FFFFFF` | `#121A2B` |
| `--admin-raised` | hud-bg2 `#182239` | `#EEF2F6` | `#1A2437` |
| `--admin-line` | slate-400 @18% | slate-900 @10% | slate-400 @16% |
| `--admin-text-dim` | slate-400（淺色 3.3:1 ✗） | `#5B6B7F`（5.6:1） | `#94A3B8`（7.0:1） |
| `--color-accent` | `#06b6d4` cyan | `#0284C7` | `#38BDF8`（其上字 `#04121F`） |
| `--color-success` / ink | green-600/500 · lime-700/green-300 | `#15803D`（面＝字） | `#34D399`（面＝字） |
| `--color-warning` / ink | amber-600/400 | `#B45309` | `#FBBF24` |
| `--color-danger` / `--color-error` | **兩個不同紅** | 合併 `#DC2626`（字 `#B91C1C`） | 合併 `#F87171` |
| `--font-ui` | Noto Sans + system | `-apple-system, "SF Pro TC", "PingFang TC", "Segoe UI Variable", "Segoe UI", "Microsoft JhengHei UI", "Noto Sans TC", system-ui` | |
| `--font-display` | "Bebas Neue"… | **刪除**。新增 `--font-brand: "Unbounded", var(--font-ui)`（僅字標） | |
| `--font-mono` | "JetBrains Mono", … | `ui-monospace, "SF Mono", Menlo, Consolas, "Cascadia Mono", monospace`（拿掉 JetBrains） | |
| `--radius-card` / `--radius-control` | 無（4/6/8 混用） | 新增 card 14px、control 10px、chip 999px；`--radius-lg`(12) 保留給既有呼叫 | |
| `--control-h` / `--control-h-touch` | 無 | 新增 36px / 48px；`--row-h` 44、`--row-h-tall` 52 | |
| `--text-*`（SF 刻度） | 12/13/15/17/22/28/34 ✓ | **不變**。手機 body 由 media query 升 `--text-subhead: 16px` | |
| `--hud-*`（bg0/1/2, line, glow…） | hud.css 5139 行 | **整組刪除**，`--admin-*` 改直接指 hex / `light-dark()` | |

## 2 · 元件 class 對照

### Admin（style.css / hud.css）
- **頁首** → `.admin-ui-page-head` 保留；刪 `.admin-ui-page-kicker`、`.admin-dash-topbar` 麵包屑
- **設定群組** → `.admin-ui-group / -row / .lbl / .sub / .val` 保留；row 高改 44/52、圓角 14
- **按鈕** → `.admin-ui-action` + `.is-primary / .is-secondary / .is-danger / .is-text`；刪 `.hud-btn*`
- **狀態 chip** → 新 `.ui-status`（色點＋字）取代 `.hud-dot / .hud-label / .admin-lf-v4__statedot`
- **側欄** → `.admin-dash-sidebar` 保留，刪 `.admin-dash-telem`、`.admin-dash-nav-badge`（改數字文字）
- **卡片** → `.admin-ui-card` 保留；刪 `.hud-panel / .hud-corners / .hud-corner`
- **訊息流** → `.admin-live-feed-row` 保留結構，刪 checkbox／fp／density 欄；動作改 `⋯` 選單
- **Toast** → `toast.js` 保留 API，樣式改 03
- **對話框** → `admin-hud-modal.js` **改名 `admin-dialog.js`**，去 HUD 角標

### 觀眾頁（viewer-v2.css）／桌面端（styles.css）
- **頂欄** → `.viewer-hero` 縮成 `.viewer-topbar`：字標 SVG＋狀態 chip；刪 `.viewer-hero-ghost` 漂浮字、Bebas h1
- **送出列** → `.viewer-sendbar` 保留；FIRE 改「發送」、高 48
- **樣式抽層** → `#viewerMobileSheet` 擴為全部樣式（顏色／大小／效果／暱稱）；桌面 ≥768 改右側面板
- **預覽** → `.viewer-preview` 保留，刪速度徽章、kicker
- **桌面端 shell** → 刪 `.client-sidebar / .client-nav-btn / .client-titlebar-status`；新 `.client-main-card`（開關卡）＋ `.client-group`（重用 admin-ui-group 樣式）
- **設定面板** → 新 `.client-settings`（sheet），內容＝原連線頁＋關於頁
- **精靈** → 新 `.client-onboarding`，首次啟動 `localStorage.serverUrl` 為空時顯示

## 3 · 刪除清單

- Google Fonts `<link>`：Bebas Neue、Noto Sans TC、JetBrains Mono（3 個 template）
- `shared/hud.css`、`hud.css.bak-hig`、`particle-bg.js`（登入頁網格／粒子）
- style.css：`.hud-*`、`.admin-kpi-tile-bars`（sparkline）、`.admin-dash-telem*`、`.admin-lf-v4__dchip`（density）
- viewer-v2.css：`.viewer-hero-ghost*`、`.viewer-fire-arrow`、掃描線 keyframes
- styles.css（桌面）：`.client-sidebar*`、`.client-nav-btn*`、雙語 `.client-nav-sub`、`.client-section-kicker`
- i18n：所有 kicker key（`*Kicker`、`*Eyebrow`）、`navDesktopWidgets` 等併頁後的 key
- assets：`icon.iconset` 舊圖、`icon-dynamic.svg`、`icon-fire.svg`

## 4 · 遷移順序（每步可獨立出 PR）

1. tokens.css 改值＋`--font-ui`；不動任何 markup —— 全站立刻換色換字
2. 刪 hud.css 引用，把 `.admin-ui-*` 從 hud.css 搬進 style.css；跑 `make lint-css`
3. Admin 側欄 IA：`ADMIN_ROUTES` 分 3 組 12 列（**路由 slug 不變**，i18n label 改）
4. Admin 各頁：頁首去 kicker → 設定群組化（07／08 順序）；審核／素材／擴充三頁合併
5. 觀眾頁：頂欄＋抽層＋送出列（05）；手機先，桌面用同一 DOM
6. 桌面端：新 shell（04）；`DEFAULT_MAIN_BOUNDS`、精靈、設定 sheet；tray 選單 6 項
7. 品牌：icon / tray / favicon 換檔（11）；字標 SVG 進 4 個位置
8. 大螢幕（09）：入場 QR、投票卡、LINK START 保留

## 5 · Electron 參數（`main-modules/window-manager.js`）

```js
const DEFAULT_MAIN_BOUNDS = { width: 560, height: 440 };   // 原 800×900
const COMPACT_BREAKPOINT = 420;                             // 寬 <420 → renderer 切精簡版 360×200
minWidth: 360,  minHeight: 200,                             // 原 400×700
maxWidth: 720,  maxHeight: 560,                             // 內容固定，不需更大
resizable: true, fullscreenable: false, maximizable: false,
titleBarStyle: isMac ? "hiddenInset" : "default",           // macOS 交通燈；Windows 系統框
trafficLightPosition: { x: 12, y: 13 },
backgroundColor: nativeTheme.shouldUseDarkColors ? "#121A2B" : "#F4F6F9",
vibrancy: undefined,                                        // 不用毛玻璃
icon: path.join(__dirname, "../assets/brand/icon-512.png"),

// tray
tray = new Tray(nativeImage.createFromPath("assets/brand/trayTemplate.png"));
tray.setToolTip("Danmu Fire");
// 狀態色點：疊 8px 圓在 tray 圖右下（開啟＝#34D399）；用 nativeImage 合成，不換整張圖
// 記住尺寸：沿用 restoreBounds；precompact 狀態另存 key "mainBoundsCompact"
```

打包：`electron-builder` 的 `mac.icon` 指向由 `brand/icon-{16…1024}.png` 產生的 `.icns`（iconutil）；`win.icon` 指向 `win/icon-{16…256}.png` 合成的 `.ico`（png2icons）。兩份 icon 底色一致，只差圓角。

## 6 · 文案總表（i18n.js zh-Hant / en）

| 位置 | 現況 | zh-Hant 新 | en 新 |
|---|---|---|---|
| 全域名詞 | Desktop / Overlay | 顯示層 | Display |
| 全域名詞 | WebSocket Token | 連線密碼 | Connection password |
| 全域名詞 | Fingerprint / fp | 裝置識別 | Device ID |
| 全域名詞 | 效果庫 .dme | 動畫效果 | Effects |
| 全域名詞 | 風格主題包 | 主題 | Themes |
| 全域名詞 | Session | 場次 | Session |
| 側欄 · 活動中 | 控制台 / Desktop / 投票 / 審核 | 控制台 · 顯示層 · 投票 · 審核 | Dashboard · Display · Polls · Moderation |
| 側欄 · 外觀與素材 | 觀眾頁 / Desktop Widgets / 效果庫 / 主題包 / 素材庫 | 觀眾頁 · 動畫效果 · 主題 · 素材 · 小工具 | Viewer page · Effects · Themes · Assets · Widgets |
| 側欄 · 系統 | 系統 / 紀錄&匯出 / 備份&還原 / 開發擴充 | 紀錄與匯出 · 備份與還原 · 安全 · 擴充 | History & export · Backup · Security · Extensions |
| 桌面端 · 主按鈕 | ▶ 開啟 Desktop / ■ 關閉 | 開啟 / 關閉 | Turn on / Turn off |
| 桌面端 · 狀態 | CONNECTED / DISCONNECTED | 已連線 · 連線中… · 無法連線 · 顯示中 · 未開啟 | Connected · Connecting… · Can't connect · Showing · Off |
| 桌面端 · 精靈 | SERVER · CONFIGURE | 連接到你的伺服器 / 測試並繼續 / 稍後設定 | Connect to your server / Test and continue / Set up later |
| 桌面端 · 錯誤 | chip 變紅 | 無法連線到 {host}。已重試 {n} 次。請確認伺服器已啟動、網路相同，或位址是否正確。 | Can't reach {host}. Tried {n} times. Check the server is running and you're on the same network. |
| 觀眾頁 · 副標 | Send your message to the screen! | 把想說的話送上大螢幕 | Put your words on the big screen |
| 觀眾頁 · 送出 | FIRE ▶ | 發送 | Send |
| 觀眾頁 · 佈景 | 想對現場說點什麼？ | 想對現場說什麼？ | Say something to the room… |
| 觀眾頁 · 狀態 | Desktop 離線 · 無法送出 | 大螢幕還沒開，先寫好等一下發 | The screen isn't on yet — write now, send later |
| 觀眾頁 · 限流 | Rate limited | 發太快了，{n} 秒後再試 | Too fast — try again in {n}s |
| 觀眾頁 · 成功 | （無） | 已送出 | Sent |
| Admin · 登入 | 管理後台登入 / 管理密碼 | 登入後台 / 密碼 | Sign in / Password |
| Admin · 審核 | Blacklist / Burst 容忍 / Cooldown | 封鎖字 · 被封鎖的觀眾 · 每人每分鐘最多 {n} 則 | Blocked words · Blocked people · Max {n} per person per minute |
| Admin · 危險 | factory reset / 清除歷史 | 刪除所有紀錄… / 回復出廠設定… | Delete all history… / Reset everything… |
| 大螢幕 · 入場 | DESKTOP READY · 等待中 | 掃 QR 或打開 {url} — 打字，就會飛到這個螢幕上 | Scan or open {url} — type, and it flies onto this screen |
| Toast 通則 | alert() / 技術字串 | 動詞完成式 ≤ 8 字：已送出 · 已清空 · 已封鎖 · 已儲存 | Sent · Cleared · Blocked · Saved |

**文案規則**：按鈕用動詞、不加圖示符號（▶ ■ ⚡）；危險動作結尾加「…」代表會再確認；狀態用「已／中／未」三態；錯誤三段式「發生什麼 · 可能原因 · 可以做什麼」；英文句首大寫、其餘小寫，不用全大寫。
