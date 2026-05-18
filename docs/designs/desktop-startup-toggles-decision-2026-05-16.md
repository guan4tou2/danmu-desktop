# Desktop Control Window · STARTUP Toggles · 移除決策 · 2026-05-16

**狀態**：移除三個 STARTUP toggles（autostart / auto-show-overlay / background-keep-alive）；不在 canonical desktop mirror 內。
**重新評估觸發點**：實際 user demand（非 mockup-driven），且能歸納為單一窄功能而非三個 placeholder toggles。
**相關程式碼**：
- 設計鏡像：[`docs/designs/design-v2/components/desktop.jsx`](./design-v2/components/desktop.jsx)
- Electron 主程序：[`danmu-desktop/main.js`](../../danmu-desktop/main.js)
- Renderer 設定：[`danmu-desktop/renderer-modules/settings.js`](../../danmu-desktop/renderer-modules/settings.js) · [`ws-manager.js`](../../danmu-desktop/renderer-modules/ws-manager.js)
- Polestar：[`docs/designs/design-v2/HANDOFF-PRIORITY-RESET-2026-05-05.md`](./design-v2/HANDOFF-PRIORITY-RESET-2026-05-05.md)

---

## 1 · 為什麼有這份 doc

2026-05-16 review 第二輪重抓 v3 bundle 時，user 問：

> 「STARTUP / 開機啟動 & 自動連線 / 連線後自動顯示 overlay / 背景時保持連線 — 此部分有需要設定嗎 還是可以移除？」

三個 toggle 在 [`desktop.jsx`](./design-v2/components/desktop.jsx) ConnSection 已經出現一段時間，但 Electron app 端**完全沒實作**。這份 doc 把移除決策對應的場景分析寫下來，未來重啟同一討論時不用再跑一次。

---

## 2 · 三個 toggle 是什麼

從 mirror 中的 ConnSection（移除前 lines 326-334）：

| Toggle | 標籤 | Hint |
|---|---|---|
| 1 | 開機啟動 & 自動連線 | 登入後立即在背景連線到 server |
| 2 | 連線後自動顯示 overlay | 不必手動開啟透明層 |
| 3 | 背景時保持連線 | 關閉控制視窗時仍接收彈幕 |

三個都是 mockup-only：沒有 `setLoginItemSettings`、沒有 auto-show overlay 的 IPC、`window-all-closed → app.quit()` 也沒有 keep-alive 分支。

---

## 3 · Polestar 框架

從 [HANDOFF-PRIORITY-RESET](./design-v2/HANDOFF-PRIORITY-RESET-2026-05-05.md)：**single presenter / mid-size event / interaction + atmosphere**。

關鍵分類：

- **常駐軟體模型**（Slack / 1Password / Spotify）：每天上班開機就用，autostart 是 net positive
- **活動軟體模型**（Danmu Fire / Keynote / OBS）：1-2 次/月，活動前刻意 setup，autostart 是負擔

Danmu Fire 在 polestar 下屬於後者。下面三個 toggle 的成本／效益用這個分類框架評。

---

## 4 · 場景分析

### 4.1 場景 A · 活動前一小時 setup

```
presenter 到場 → 打開 laptop → launch app → 接投影機
→ test 連線到 server → silent 模式自己手機測彈幕
→ 確認 server 通了 → 開 overlay 並選對螢幕 → 開始 talk
```

| Toggle | 在這個場景的價值 |
|---|---|
| #1 autostart | **0** — presenter 是主動 launch |
| #2 auto-show overlay | **負** — 還沒 silent 測試完就把 overlay 暴露給觀眾；且 overlay 會 default 開在筆電屏，不是投影機 |
| #3 background keep-alive | **0** — 整個 setup 期 control window 都開著 |

### 4.2 場景 B · 多日活動 Day 2 之後

```
laptop 從 Day 1 帶過來 → 重開機 → presenter login
→ Danmu Fire 沒自動跑 → 手動 launch → 自動 reconnect 到 Day 1 server
→ 開 overlay → 繼續
```

| Toggle | 在這個場景的價值 |
|---|---|
| #1 autostart | **低** — 省下 cmd+space → "Danmu Fire" → Enter 大約 2 秒 |
| #2 auto-show overlay | **中** — 只當 display config 跟 Day 1 完全一致才安全；外部會議室常常不一致 |
| #3 background keep-alive | **0** |

### 4.3 場景 C · 長時間活動 presenter 休息

```
8 小時 conference → presenter 中場休息 → 想關 control window 減少螢幕雜訊
→ overlay 繼續顯示彈幕 → 回來再打開 control window
```

| Toggle | 在這個場景的價值 |
|---|---|
| #1 autostart | **0** |
| #2 auto-show overlay | **0** |
| #3 background keep-alive | **看起來有需求，但已內建** — [`main.js:277-280`](../../danmu-desktop/main.js) `window-all-closed → app.quit()`；overlay child window 也算 window，所以只要 overlay 還開著、關 control window，app 不會死、WS 持續。**自然行為已經涵蓋** |

### 4.4 場景 D · 雙視窗都關但繼續收 WS（toggle #3 真正想做的事）

```
control window 關 → overlay 也關 → tray 還在
→ WS 連線繼續維持
```

問題：WS 連線的唯一消費者是 overlay。overlay 都關了，**WS 收到的 broadcast 沒有地方渲染**，等於開冷氣不關門。這個情境不存在合理的 use case。

### 4.5 場景 E · Laptop sleep / wake

```
presenter laptop 睡 30 秒 → 醒來 → WS 斷了 → 該自動重連
```

這個既不是 toggle #1（autostart）、也不是 #3（keep-alive），而是 **wake-from-sleep auto-reconnect**。已經被 [`child-ws-script.js`](../../danmu-desktop/main-modules/child-ws-script.js) 的 exponential backoff 處理，**不在這份 doc 範圍**。提到只是要區分：user 喊「自動」時，真正想要的常常是「重連韌性」而不是「autostart」。

---

## 5 · 逐 toggle 判決

### 5.1 開機啟動 & 自動連線

| 維度 | 判讀 |
|---|---|
| 解決什麼 | 「不想重記 server URL」 |
| 已被誰解決 | localStorage 已存 host/port/wsToken；launch app → 自動重連最近一台 |
| autostart 額外提供 | 省下 cmd+space launch app 約 2 秒 |
| 副作用 | (a) 非活動日多吃 200-500ms 開機時間 + 持續 WS heartbeat 耗電 (b) 連到上次 server 但這次在不同網路 → 「connection failed」 (c) macOS 未簽署 build 會觸發 LoginItem entitlement prompt |
| 工程成本 | macOS / Windows / Linux 三套 autostart 機制；簽署 / entitlement / tray dock-icon 處理 |
| **判決** | **移除**。痛點 80% 被 localStorage 解掉，autostart 只覆蓋最後 2 秒，不值三平台工程成本 |

### 5.2 連線後自動顯示 overlay

| 維度 | 判讀 |
|---|---|
| 解決什麼 | 「少點一次按鈕」 |
| 已被誰解決 | [「顯示彈幕 Overlay」按鈕](../../danmu-desktop/index.html) 已經是單按鈕 + 狀態 chip |
| Auto-show 額外提供 | 省一個 click |
| 副作用 | (a) **破壞 silent setup 工作流** — presenter 常需要先 silent connect 測 server 再 surface 給觀眾；auto-show 會把測試 leak 出去 (b) Multi-display race — display picker 在 WS 連上之後執行，auto-show 會搶在 picker 之前在錯誤螢幕閃出 |
| 工程成本 | 新 IPC + display-change event 處理 + race condition coverage |
| **判決** | **移除**。負面效應 > 省一個 click 的正面 |

### 5.3 背景時保持連線

| 維度 | 判讀 |
|---|---|
| 解決什麼 | 「關 control window 時 overlay 不要斷」 |
| 已被誰解決 | **自然行為已涵蓋** — overlay window 開著時，app 不會在 control window 關掉時死 |
| Toggle 額外提供 | 兩個 window 都關但 WS 繼續連 — **但 WS 沒有消費者** |
| 工程成本 | 改寫 `window-all-closed`、tray-only 生命週期、quit confirmation、persist 連線狀態 |
| **判決** | **移除**。要嘛已涵蓋，要嘛是冷氣不關門 |

---

## 6 · 三個 toggle 共通的設計病

「未實作但顯示」比「沒這個功能」更糟。理由：

- **對新進工程師**：mirror 裡有 toggle → 預期該 wire 起來 → 開三平台調研工單 → 浪費時間
- **對 designer**：toggle 在 mirror 裡 → 視為已對齊的決策 → 後續 redesign 不會 challenge 前提 → debt 滾雪球
- **對 reviewer**：「implementation gap, 等 BE 補」 → backlog 上多三個鬼影 ticket → backlog 真正的 priority 被稀釋

這跟 [HANDOFF-ZIP4 review](./design-v2/HANDOFF-ZIP4-DESKTOP-REVIEW-2026-05-14.md) 抓到的「desktop artboards aligned, desktop source 不對齊」是同一類型 debt：**設計圖比 source code 多畫東西，吸引人來「補齊」一個不該存在的承諾**。

---

## 7 · 真有需求時的做法

不是「未來補回三個 toggle」，而是「窄功能 by demand」。最可能順序：

1. **Auto-reconnect on wake from sleep**（不在原三個內）— laptop 睡醒首次 attempt timing 可能踩到 network not ready；既有 backoff 邏輯加一個 `online` event listener 即可
2. **Remember last overlay display**（不在原三個內）— multi-display setup 跨 launch 保留 picker 選擇；用 localStorage 一個 key 解決
3. **Autostart**（原 toggle #1 — 真有 demand 才加）— 假設 Danmu Fire 進到「固定會議室、固定電腦」場景（例：lobby Mac 每月跑同一個 demo day），這時 autostart 有 case，但只加 macOS 起步

「auto-show overlay」「background keep-alive」兩個原本就不該存在，未來也不會回來。

---

## 8 · 重新評估的觸發條件

下列任一條件成立時，才應重開這份 doc：

1. polestar 從「single presenter / mid-size event」變為「streamer / always-on dock」
2. 出現 ≥3 個 user-driven 請求要 autostart 或 keep-alive，且能歸納成單一窄功能（不是「三個 toggle 包一起」）
3. wake-from-sleep reconnect 已實作但仍有人抱怨「斷線」 — 此時 keep-alive 才有討論空間

直到任一條件成立前，三個 toggle 不回來。

---

## 9 · 相鄰但無關的概念

容易跟 STARTUP toggles 搞混的東西：

| 名稱 | 是什麼 | 跟 STARTUP 的關係 |
|---|---|---|
| **localStorage server 持久化** | host / port / wsToken / displayIndex 跨 launch 保留 | 已解掉 80% 的「不想重新設定」痛點，autostart 的存在理由變弱 |
| **WS exponential backoff reconnect** | [`child-ws-script.js`](../../danmu-desktop/main-modules/child-ws-script.js) 3s → 30s + jitter | 真正提供「斷線韌性」的機制；user 喊「保持連線」時很多時候真正要的是這個 |
| **Overlay window 持續存在** | `window-all-closed → app.quit()` 但 overlay 算 window | 已天然涵蓋 toggle #3 想要的核心 use case |
| **`startupAnimationSettings`** | overlay 第一次連上後播的 LINK START / 領域展開 hero 動畫（[`child-ws-script.js`](../../danmu-desktop/main-modules/child-ws-script.js)） | **跟 STARTUP toggles 完全無關**，只是名稱碰巧都有 STARTUP；別搞混 |

四個概念目的、surface 都不一樣。
