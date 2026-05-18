# Desktop Finalization · Canonical Direction · 2026-05-14

給 Design 與 Engineering 的 desktop 收斂指令。目標：先把 Electron
desktop client 收斂成穩定、可收尾的最小產品面，再回頭專心做 server /
admin 設計。

## Canonical Desktop Scenes

從 2026-05-14 起，desktop 設計只保留這 4 個場景：

1. **Desktop · Control Window**
2. **Desktop · Overlay on Desktop**
3. **Desktop · Tray · Connected**
4. **Desktop · Tray · Disconnected**

這 4 個場景之外的 desktop artboard，不再視為 canonical deliverables。

## Explicit Removals

以下項目從 canonical desktop design 中移除：

- `Desktop · Window Picker`
- `Desktop · Tray Popover`
- `Desktop · First-run Gate`

處理方式：

- `Window Picker` 不再是獨立設計場景；如果有多螢幕選擇，視為 `Control Window > Overlay` 內部行為
- `Tray Popover` 不再是獨立設計場景；tray 只需要 `Connected` / `Disconnected` 兩種狀態
- `First-run Gate` 不再是獨立設計場景；首次連線流程整合進 `Control Window > Connection`

## Control Window Canonical Structure

`Desktop · Control Window` 只保留 3 個一級區塊，且順序固定：

1. `Connection`
2. `Overlay`
3. `About`

規則：

- 不保留 `Shortcuts` 作為獨立一級區塊
- 不保留 `Update` 作為獨立一級區塊
- `Connection` 內可以容納首次設定 / 測試連線 / recent servers / token 輸入
- `Overlay` 只控制顯示、顯示在哪個螢幕、清空畫面、基本狀態
- `About` 承接版本 / 更新 / 外部連結等維護性資訊

## Desktop Scope Rules

Desktop client 仍然是 **local display endpoint**，不是第二個 admin。

因此 desktop 不設計也不控制：

- viewer per-message style parameters
- effects editing
- assets editing
- poll operations
- moderation surfaces
- admin/system settings

Desktop 只負責：

- connection
- overlay visibility
- display target
- clear screen
- lightweight status
- about / update

## Design Changes Required

### 1. Replace Tray Surface Definition

Design 不再交 `Tray Popover` 或 `Window Picker`。

改成交：

- `Desktop · Tray · Connected`
- `Desktop · Tray · Disconnected`

這兩張只表達 tray 在不同連線狀態下的資訊層級與可用動作，不再把 tray
設計成完整控制台。

### 2. Merge First-Run Into Control Window

Design 不再交 `First-run Gate` 獨立場景。

改成在 `Desktop · Control Window > Connection` 裡表達：

- server host / port
- test connection
- remember server
- recent servers
- confirm / skip

也就是說，第一次啟動只是 `Connection` 區塊的一種狀態，不是另一個產品面。

### 3. Keep Overlay Narrow

`Desktop · Overlay on Desktop` 只保留：

- connected / disconnected / reconnecting 狀態
- server URL / minimal HUD
- start / pause / clear
- idle scene if enabled

不再設計：

- session summary
- opacity / layout sliders
- viewer-side style controls
- admin-like inspection panels

## Engineering Completion Checklist

如果要說 desktop 可以先收尾，工程上至少要滿足這份清單：

### Must Be Treated As Final

- `Control Window` 的一級順序固定為 `Connection → Overlay → About`
- `First-run` 被視為 `Connection` 的子狀態，不是獨立產品面
- tray 不再被視為 `popover` 產品面，而只是 `Connected` / `Disconnected` 狀態
- `Window Picker` 不再被視為獨立設計交付

### Remaining Desktop Work Worth Finishing Before Server Focus

- overlay `reconnecting` 視覺狀態收齊
- overlay idle scene 定稿
- tray `Connected` / `Disconnected` 視覺層級定稿
- `About` / `Update` 呈現是否已符合最終 desktop 語言

### Do Not Reopen

- desktop 加回 viewer mode / viewer style 控制
- desktop 增加獨立 `Shortcuts` / `Update` 主區塊
- 把 `Window Picker` / `Tray Popover` 再升回獨立 scene

## Recommended Design Read Order

若在做 desktop 設計，請依序閱讀：

1. `docs/designs/design-v2/HANDOFF-PRIORITY-RESET-2026-05-05.md`
2. `docs/designs/desktop-finalization-2026-05-14.md`
3. `docs/designs/design-feedback-desktop-v2.md` only as historical context
