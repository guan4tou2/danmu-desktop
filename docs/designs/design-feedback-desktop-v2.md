# Desktop 場景回饋 (design v2)

> **2026-05-14 update:** this file is now historical feedback only.
> Canonical desktop direction moved to
> `docs/designs/desktop-finalization-2026-05-14.md`.
> In particular:
> - `Desktop · Window Picker` removed
> - `Desktop · Tray Popover` removed
> - `Desktop · First-run Gate` removed as a standalone scene
> - desktop top-level structure is now `Connection / Overlay / About`

送給 Claude Design 的上一輪修訂清單。若與
`desktop-finalization-2026-05-14.md` 衝突，以新文件為準。

---

## 1. Control Window — 結構通過,只需 token 遷移

- 所有 `hudTokens.cyan` 等 oklch 值 → 改用 `#38bdf8` (sky-400) 對齊 `shared/tokens.css`
- `magenta`、`crimson` 全面替換:poll / 警示用 `--color-amber` (`#f59e0b`),錯誤用 `--color-red`(不要紫 / 洋紅)

## 2. Connect Dialog — 兩個硬傷要改

- `components/desktop.jsx:336` logo gradient `linear-gradient(135deg, accent, magenta)` 違反 no-magenta 規則
  → 改 `linear-gradient(135deg, #38bdf8, #0ea5e9)` 純 sky 漸層
- `components/desktop.jsx:379` checkbox `登入時以 Viewer 模式開啟 overlay` 刪除
  → 架構上 Viewer 已從 desktop 路徑分離,此選項不存在

## 3. Overlay on Desktop — mini 控制面板大瘦身

- `components/desktop.jsx:83` `SESSION · #MTG-042 · 247 viewers` 整行移除(殘留的主持人 / session 概念)
- `components/desktop.jsx:91-106` `OPACITY` slider + `LAYOUT` 五按鈕刪掉
  → 與 viewer 參數面板重複;子視窗只負責「是否接收」,樣式在 viewer / admin 控制
- 保留:header(CONNECTED 狀態 + SERVER URL)、`▶ 接收 / ⏸ 暫停 / ⌫ 清空` 三顆按鈕
- 建議補:`→ 開 Admin` 小連結(對齊 ControlWindow 右下的 `⤴ 開啟 Admin 後台`)

## 4. 全域 token 遷移(三個 scene 共用)

- `oklch(...)` 背景 / 面板 → 改 hex,色值參考 `shared/tokens.css`
- `hudTokens.fontDisplay` 保留 Bebas Neue(和 Hero Lockup 一致)
- `hudTokens.fontMono` 建議定名 `JetBrains Mono`(server 已有字體資源)

---

## 脈絡備忘(給自己)

- Tray 設計 OK,不動
- 整體目標:desktop 三 scene 視覺和 viewer / admin 用同一組 token,不要走 oklch 平行色系
- 子視窗定位重整:Control Window = 完整偏好(overlay / conn / keys / about),Overlay mini = 只管接收開關,viewer 面板 = 參數,Admin 後台 = 全局
