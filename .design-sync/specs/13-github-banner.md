# 設計稿 13 · GitHub README Banner + Social Preview

來源：`13 GitHub Banner.dc.html`

## B1 · README banner 1200×400 → `docs/banner.png`

- 底：`radial-gradient(ellipse at 20% 30%, #0f1e3a 0%, #0B1120 55%)`
- 疊 40px 網格：`rgba(56,189,248,.06)` 1px 雙向線，用 `mask-image: radial-gradient(ellipse at 70% 50%, #000 20%, transparent 75%)` 淡出
- 左側（left:64px，垂直置中，gap 22px）：
  1. wordmark 84px 高（白字＋`#38BDF8` 火花）
  2. 標語 26px 600 `#e2e8f0`：**讓你的演講也能有彈幕。**
     副標 20px 500 `#94a3b8`：**Live danmu for any talk, on any screen.**
  3. 四顆 pill 30px：`macOS` `Windows` `Web`（白 8% 底）＋ `Open source · MIT`（`rgba(56,189,248,.14)` 底、`#38BDF8` 字）
- 右側投影幕 mock 440×288 白卡、圓角 14px、`0 30px 80px rgba(0,0,0,.5)`；內含簡報版面＋三道彈幕（白／`#fbbf24`／`#7dd3fc`）
- 手機 mock 150×300 疊在投影幕左下（`right:400px; bottom:-40px`），內含 wordmark、預覽條、sendbar

## B2 · Social preview 1280×640 → Repo Settings › Social preview

- 同底色但 `ellipse at 30% 20%`、網格 48px、mask 中心淡出
- 上下各一條淡彈幕（`rgba(255,255,255,.18)` / `rgba(125,211,252,.16)`，40px 700）
- 置中直排：`assets/brand/icon-256.png` 160×160（drop-shadow）→ wordmark 96px → 一行 26px 500 `#94a3b8`：
  **讓你的演講也能有彈幕 · Live danmu for any talk, on any screen**

## 匯出與用法

- 2× PNG：`assets/brand/banner-readme-2400x800.png`、`assets/brand/social-preview-2560x1280.png`，複製到 repo `docs/`
- README 放在 H1 **之上**：`<p align="center"><img src="docs/banner.png" width="100%"></p>`
- 深底橫幅在 GitHub 淺色模式對比最好，**不需另出淺色版**
- 匯出時彈幕停格於最佳位置（靜態 PNG）
