# 設計稿 17 · 可及性與平台整合

來源：`17 可及性與平台.dc.html`

**原則**：系統偏好一律尊重、**不在 app 內另設開關**；顏色永不單獨承載意義；每個可互動元件有可見焦點；通知走系統，不自畫。

## prefers-reduced-motion

| 元素 | 一般 | reduce-motion |
|---|---|---|
| 觀眾頁預覽區 | 彈幕滾動 | **置中靜止**；樣式改變時淡入 120ms |
| LINK START | 掃描＋閃爍 1.6s | **靜態字卡 1.2s 淡入淡出**，無掃描線 |
| 抽層 | 滑入 240ms | opacity 120ms |
| Toast | 滑入 | opacity 120ms |

**大螢幕彈幕本身不受影響**——那是內容，由主持人在 Admin 決定速度。

## Windows 高對比 `@media (forced-colors: active)`

- 所有卡片背景移除，改 2px `CanvasText` 邊框
- 按鈕用 `ButtonText` 邊框
- 狀態色點保留系統色（`forced-color-adjust: none`），**但旁邊永遠有字**
- 淡色底（rgba）全部失效 → 設計本來就不能只靠淡色底區分

## DPI（Windows 125% / 150% / 200%）

Electron 以 DIP 計算，尺寸自動縮放。要確認的只有兩點：

1. icon 選 24/32px 版而非 16px 放大（`nativeImage.createFromPath` 讀 `@1.5x`／`@2x` 後綴）
2. `minWidth` 用 DIP 不用像素

## 色盲替代

- 觀眾頁樣式抽層的顏色改為 **「色點＋名稱」磚**（白／黃／天藍／綠／紅／紫），選中加 ✓ 與 2px 粗框；`aria-label="顏色：黃"`
- Admin 訊息流的顏色點旁**不需**名稱（顏色只是裝飾，內容才是資訊）
- 狀態 chip 已全部「色點＋文字」
- 投票結果條**同色**，不用色彩區分選項

## 焦點環（一種樣式全站通用）

```css
:focus-visible { outline: 2px solid var(--focus); outline-offset: 3px }
```

- 淺色 `--focus: #0284C7`；**深色 `#FFFFFF`**（藍底藍框看不見）
- 列表列／側欄用 `outline-offset: -2px` 內縮
- 用 `:focus-visible` 而非 `:focus`——滑鼠點擊不出焦點環
- Tab 順序＝視覺順序；抽層／對話框開啟時 focus trap，Esc 關閉並還回焦點

## 觸控目標

- 手機所有可點元素命中區 **≥ 44×44**（視覺可以小，用 padding 或 `::after` 撐）；桌面 ≥ 32
- 8px 色點 → 44 命中區；`⋯` 選單 44；關閉 `×` 44；手機主按鈕 48

## 螢幕閱讀器標記

- 字標 SVG：`role="img" aria-label="Danmu Fire"`
- 符號單獨出現：`aria-hidden` ＋旁邊文字，或 `aria-label`
- 狀態 chip：`role="status" aria-live="polite"`；顯示層切換時朗讀「顯示層已開啟，Display 2」
- 訊息流：`role="log" aria-live="polite" aria-relevant="additions"`；**暫停捲動時 `aria-live="off"`**
- 觀眾頁送出成功 Toast 同時 `aria-live`；限流倒數 `aria-live="polite"` **每 5 秒更新一次，不逐秒吵**
- `<html lang>` 跟隨介面語言（**現況固定 en，是 bug**）

## macOS 系統整合

- **選單列**：符號 template ＋角落狀態點；第一項＝主動作
  - 「顯示層」選單：開啟顯示層 ⌘⇧D／清空畫面 ⌘⇧⌫／試放一則／—／顯示在 › Display 2／顯示入場 QR
- **通知**：只在「非預期事件」發（斷線、被封鎖累積、更新完成）；**成功送出不發**
  - 範例：「與伺服器斷線 — 正在重新連線。大螢幕上的彈幕會暫停出現。」
- **Dock 徽章**：待審核數；顯示層開啟時**不顯示計數**（避免焦慮）

## Windows 系統整合

- **工作列**：app icon 用 `win/` 方形版；徽章＝待審核數（`setOverlayIcon`）
- **系統匣**：白／黑版依工作列主題
- **Toast**：Windows 原生（`new Notification`），**兩顆按鈕以內**
  - 範例：「更新已下載 · 5.4.0 — 下次啟動時安裝。活動中不會打斷你。」＋「現在重新啟動」「稍後」
- 右鍵選單 6 項與 macOS 一致，Ctrl 取代 ⌘

## 交付前工程自測檢核清單

- [ ] 系統開 reduce-motion 後：預覽靜止、LINK START 無掃描、抽層無滑動
- [ ] Windows 高對比：所有卡片有邊框、按鈕可辨、狀態旁有字
- [ ] 125% / 150% / 200% DPI：icon 不模糊、視窗不被 minWidth 卡住
- [ ] Tab 走完整頁，焦點環永遠可見，Esc 關閉任何浮層
- [ ] VoiceOver / NVDA 讀出：顯示層狀態改變、新訊息、送出結果
- [ ] 手機所有可點命中區 ≥ 44；桌面 ≥ 32
- [ ] 12–13px 文字對比 ≥ 4.5:1（兩主題都測）
- [ ] 顏色 chips 有名稱；投票條不靠顏色區分
- [ ] 通知只在斷線／封鎖累積／更新完成觸發
- [ ] `<html lang>` 跟隨介面語言
