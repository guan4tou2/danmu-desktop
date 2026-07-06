# 90 · Hook 建議清單（供使用者決定是否採用）

> 使用者在建立本制度時選擇「只要建議清單，先不動 `settings.json`」。
> 所以這份**只列建議**。要實際安裝時，**先問使用者**，並用 `update-config` skill 或互動式 `claude` 的 `/hooks` 產生/驗證正確格式再寫入——**不要直接盲貼**，因為 hook 的確切 schema 可能隨 Claude Code 版本演變。
> 設計原則：**全部非阻斷（advisory）**——只提醒、不擋操作，避免把弱模型卡死。使用者若要更強的防線，可把選定項改成阻斷式。

為什麼 hook 值得考慮：hook 由 **harness 執行**，不受模型強弱影響。文件靠模型自律，hook 靠機器強制——這是唯一「弱模型也逃不掉」的防線。以下每個 hook 對應 [00-harness-diagnosis.md](00-harness-diagnosis.md) 的一個坑。

---

## 建議 1：擋「用 Bash 倒檔案」→ 提醒改用 Read（對應 A1/A3）

**目的**：主對話用 `cat`/`head`/`tail`/`sed` 把檔案內容倒進 context 是最大 token 漏洞之一。

- **事件**：`PreToolUse`，matcher 針對 `Bash`。
- **邏輯**：命令若含 `cat `/`head `/`tail `/`sed ` 且看起來在讀檔 → 印一行提醒「考慮改用 Read 工具，避免灌爆 context（見 00-harness-diagnosis A1）」，**放行不擋**。
- **形狀示意**（安裝前用 update-config 驗證確切格式）：
  ```
  PreToolUse hook on Bash → 檢查 command 是否 match /\b(cat|head|tail|sed)\b .*\.(js|py|md|json|css|html)/ → 若 match 印提醒到 stderr，exit 0（不阻斷）
  ```

## 建議 2：破壞性命令加確認提示（對應 C3）

**目的**：本 repo `settings.local.json` 已允許 `rm -rf ./*`、`git reset:*`，權限層不會擋弱模型。

- **事件**：`PreToolUse`，matcher 針對 `Bash`。
- **邏輯**：命令含 `rm -rf`、`git reset --hard`、`git push --force`/`-f`、`git clean -fd` → 印醒目提醒「這是破壞性/不可逆操作，確認證據真的支持這個特定動作再做（見 00-harness-diagnosis C3）」。使用者要更硬的話可改成阻斷並要求二次確認。

## 建議 3：Stop 時檢查「未完成的承諾 / 未驗證的完成」（對應 B3/C2）

**目的**：弱模型常在回覆最後一段寫「我會…／接下來…」卻沒做，或宣稱完成卻沒驗證。

- **事件**：`Stop`（模型準備結束回合時）。
- **邏輯**：印一句 checklist 提醒到輸出「結束前確認：(1) 最後一段不是『我會…』的承諾；(2) 程式改動有跑測試並貼輸出；(3) 檔案產出有 fresh agent read-back。」——advisory，不強制。
- 註：Stop hook 也可做得更強（偵測到未驗證就要求繼續），但那需要更謹慎的邏輯，建議先從純提醒版開始。

## 建議 4：SessionStart 注入制度入口提醒（對應「讀一次就忘」退化）

**目的**：確保每個 session 開頭都看到制度存在。

- **事件**：`SessionStart`。
- **邏輯**：印一行「本 repo 有操作制度於 docs/agent-ops/，遇到模型調度/派工/驗證/判斷疑問先看對應檔；入口見 CLAUDE.md 第 0 區。」
- 註：`CLAUDE.md` 本身已會載入，此 hook 是雙保險，價值中等，可選。

## 建議 5：Edit/Write 前提醒「先讀、先備份」（對應 C1、維護鐵律）

**目的**：改既有檔前要先 Read（harness 已強制）並留備份（本制度鐵律，harness 不強制）。

- **事件**：`PreToolUse`，matcher 針對 `Edit`/`Write`。
- **邏輯**：若目標是 `CLAUDE.md` 或 `docs/agent-ops/*.md`（制度檔）→ 提醒「改制度檔前先備份 .bak，並確認這是修正而非改主意（改主意要先問使用者，見 40-maintenance-protocol）」。
- 註：對一般程式檔價值低（harness 已擋未讀先改），建議只針對制度檔啟用。

---

## 安裝方式（使用者同意後）

1. 叫 `update-config` skill，或在互動式 `claude` 終端用 `/hooks`，讓它產生**符合當前版本 schema** 的 hook 設定。
2. 寫入 `/Users/guantou/Desktop/danmu-desktop/.claude/settings.json`（專案層；`settings.local.json` 是個人層權限，hook 建議放共用的 `settings.json` 讓團隊共享，或依使用者偏好）。
3. 先只裝**建議 1~3**（CP 值最高），跑幾個 session 觀察是否有用/擾民，再決定是否加 4、5。
4. 每個 hook 都先用**非阻斷**版本試水溫，確定不誤擋再考慮升級成阻斷式。

⚠️ 誠實提醒：本檔描述的是 hook 的**意圖與觸發時機**，不是保證可直接執行的成品設定。確切 JSON 格式與欄位（matcher 寫法、command 介面、stdin/stdout 協定）以安裝當下的 Claude Code 版本為準，務必用 `update-config`/`/hooks` 驗證後再套用。
