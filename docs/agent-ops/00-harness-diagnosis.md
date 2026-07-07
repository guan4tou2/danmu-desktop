# A · 快速診斷：這個 harness 最容易踩的坑（前三名 × 三類）

> 這份是整套制度的基石，其他檔案會引用它。
> 讀者是未來的 Sonnet / Opus / Haiku session。每一條都給了「症狀 → 為什麼 → 具體修法」。
> 只要照修法做，就能省掉大部分浪費與翻車。

本 session 的觀測基礎：專案 `CLAUDE.md`（路由 + 硬規則）、`docs/` 大量設計/計畫文件、全域 auto-memory 13 檔 + `MEMORY.md`（注入 context，非 repo 檔）、龐大的 skill 目錄與多個 MCP、`.claude/settings.local.json` 內含危險允許項。以下依「最傷」排序。

---

## 一、最漏 token（context 被灌爆）

### A1. 指揮官自己做大量讀取／掃 repo（最嚴重）
- **症狀**：主對話直接 `Read` 整支大檔、`Grep` 出上百行、用 Bash `cat`/`sed` 倒檔案內容進 context。做三五次後，context 一半是原始檔案，模型開始忘記任務。
- **為什麼傷**：這個 harness 的系統提示本來就很大（skill 目錄、MCP、記憶全都常駐注入）。指揮官每吞一份原始檔，都疊在這個高基底上，且**永久**佔用到 session 結束。
- **修法**：
  1. 凡是「要掃很多檔／不確定在哪／要跨檔找命名」→ 派 `Explore` 或 `general-purpose` subagent，**只把結論和 `檔案:行號` 收回主對話**（見 [10-model-dispatch.md](10-model-dispatch.md)）。
  2. 真的要親自讀時，**先想清楚要哪一段**，用 `Read` 的 `offset`/`limit` 或針對性 `Grep`，不要整檔吞。
  3. **絕不**用 Bash `cat`/`head`/`tail`/`sed` 讀檔進 context——用 `Read`（harness 明文要求）。
- **正例**：「派 Explore 找出所有呼叫 `render_effects()` 的地方」→ 收到 5 個 `檔案:行號` + 一句結論。
- **反例**：主對話連續 `Read` 了 `admin.js`(3000+ 行)、`effects.py`、`app.py` 全文只為找一個函式名 → context 爆掉且沒必要。

### A2. 重複讀取／重複推導已知事實
- **症狀**：把剛編輯過的檔再 `Read` 一次「確認」；把 `MEMORY.md` 或對話上文已建立的事實再查一遍；同一份檔案在一個 session 讀三次。
- **為什麼傷**：純浪費，且 harness 會告訴你 Edit/Write 若失敗會直接報錯——編輯成功就不用回讀驗證。
- **修法**：
  1. Edit/Write 成功後**不要**回讀同一檔驗證（harness 已追蹤檔案狀態）。要驗「行為對不對」才驗，而且用測試/實跑而非回讀（見 A 類第三項與 [20-judgment-rubrics.md](20-judgment-rubrics.md)）。
  2. 動手前先問：「這個事實是不是已經在 context / MEMORY.md / 上一個 subagent 的回報裡？」有就直接用。
  3. 記憶檔（`MEMORY.md` 與 memory/）裡的路徑、函式名、旗標，**用之前先確認還存在**（記憶反映的是寫入當下，可能過時）——但這是「查一次確認」，不是「重新從頭調查」。

### A3. 貪心載入工具與冗長驗證
- **症狀**：一次把整組 MCP 工具（claude-in-chrome、computer-use…）全 `ToolSearch` 載入卻只用一個；用截圖去驗證本來用文字工具就能確認的東西；同一 `ToolSearch` 分很多次呼叫。
- **為什麼傷**：每個載入的工具 schema、每張截圖都吃 context。這個環境有幾十個 deferred 工具與多個 MCP。
- **修法**：
  1. 需要哪個工具才 `ToolSearch` 載哪個；同一批需求用**一次** `select:a,b,c` 載齊，不要一個一個載。
  2. 驗證優先用文字工具（`preview_snapshot`/`preview_inspect`/`preview_logs`、pytest 輸出），**只有最後要給使用者看視覺成果**時才截圖。
  3. 不確定某能力在不在時，用 `ToolSearch` 關鍵字查一次即可，別預先全載。

---

## 二、最容易失焦（跑偏、做錯事）

### B1. Skill 路由過度觸發 / 誤觸發
- **症狀**：CLAUDE.md 與 SessionStart 都強力要求「符合就先叫 skill」，弱模型於是對一個「查個小事實」的請求也硬套 `investigate`/`qa` 這種重流程 skill，或在使用者只是「問問題／想事情」時就開始動手改東西。
- **為什麼傷**：重 skill 會拉出一整套 checklist 與子流程，把一個 10 秒的回答變成 10 分鐘的儀式；在「使用者只是描述問題」時動手，等於沒問就改。
- **修法**：套用這個判斷閘（詳見 [20-judgment-rubrics.md](20-judgment-rubrics.md) 的「該不該叫 skill / 該不該動手」）：
  1. 使用者**明確**要那個動作（ship/qa/review/investigate…）→ 叫對應 skill。
  2. 使用者在**描述問題、問問題、想事情** → 先給評估與答案，**不要**動手改，除非他要你改。
  3. 純事實查詢、單檔小改、你已知答案 → 直接做，不套重 skill。
  4. `/斜線` 指令 = 使用者點名該 skill，照叫。
- **正例**：使用者說「幫我 ship」→ 叫 `ship` skill。使用者說「這段為什麼會 500？」→ 叫 `investigate`。
- **反例**：使用者問「APP_VERSION 現在幾號？」→ 不要叫任何 skill，直接查 `server/config.py` 回答。

### B2. 被龐大記憶與文件牽著走（scope creep）
- **症狀**：開場注入了 13 個記憶檔 + 一堆 `docs/`，弱模型想「全部照顧」，於是把一個小任務越做越大，或去修根本沒被要求的東西。
- **為什麼傷**：記憶與文件是**背景**，不是**指令**。它們描述歷史狀態，不是這次要你做的事。
- **修法**：
  1. 開場先用一句話寫下「這次的**唯一**交付是什麼」，貼在你的 todo / 回覆開頭，每個動作都對照它。
  2. 記憶／文件**只讀這次任務需要的那幾條**，其餘略過。system-reminder 裡的記憶是背景，不是使用者指令。
  3. 發現「順手可以修的別的東西」→ 用 `spawn_task` 開背景任務丟出去，**不要**在當前任務裡順手改（會膨脹 diff、失焦）。

### B3. 長回合裡忘記任務 / 最後一段變成計畫而非成果
- **症狀**：turn 很長之後，模型忘了原始目標，或在回覆最後一段寫「接下來我會…」「讓我先…」卻沒真的做。
- **為什麼傷**：harness 明文要求——回覆最後一段若是計畫/提問/承諾而非已完成的工作，就要現在用工具把它做掉。
- **修法**：
  1. 用 todo / 任務帳本維持主線；每完成一步對照「唯一交付」。
  2. 結束回合前檢查最後一段：若是「我會…」「接下來…」→ 現在就用工具做，不要把它留成承諾。
  3. 只有「任務完成」或「卡在只有使用者能給的輸入」才結束回合。

---

## 三、最容易出錯（翻車、造成傷害）

### C1. 沒讀就改 / 路徑與「兩處要同步」的陷阱
- **症狀**：沒 `Read` 就 `Edit`（harness 會直接擋）；或改了版本號只改一處；或忽略 danmu 特有的路徑規則。
- **為什麼傷**：這個 repo 有幾個「靜默陷阱」，弱模型不知道就會半修：
  - **版本號要改兩處**：`danmu-desktop/package.json` **和** `server/config.py:APP_VERSION`，發版時要一起改成同一值。（2026-07-06 已對齊為 5.3.1；日後若發現不一致先問使用者以哪個為準，別自己猜。）
  - **webpack `__dirname` 執行期 = `dist/`**，路徑要寫成 `"../index.html"`。
  - `renderer.bundle.js` **同時**被 `index.html`（主視窗）與 `child.html`（overlay）載入——改 renderer 要想到兩邊。
  - `server/routes/admin/` 是**套件**（一個 domain 一檔），不是單一 `admin.py`。
- **修法**：
  1. 改任何檔前先 `Read`（也是 harness 硬性要求）。
  2. 碰版本/發版 → 對照 [10-model-dispatch.md](10-model-dispatch.md) 引用的「發版兩處」清單，兩處都改。
  3. 不確定 danmu 的結構規則 → 看專案 auto-memory 的「Key Architecture」段（該 `MEMORY.md` 會在 session 開頭注入 context，**不是 repo 檔、別去 Read**；絕對路徑 `/Users/guantou/.claude/projects/-Users-guantou-Desktop-danmu-desktop/memory/MEMORY.md`）。

### C2. 宣稱完成卻沒驗證 / 自己驗自己
- **症狀**：改完就說「好了」；或用「我覺得對」當驗證；或用寫程式那顆模型自己的樂觀心態驗自己的產出。
- **為什麼傷**：未驗證的「完成」是這套制度最大的信任殺手。同一顆模型帶著剛才的假設驗自己，會系統性放過自己的錯。
- **修法**（硬規則，見 [20-judgment-rubrics.md](20-judgment-rubrics.md)「何時算真的完成」與 [10-model-dispatch.md](10-model-dispatch.md)「驗證不自驗」）：
  1. 程式碼改動 → 跑測試或實跑（pytest / preview），把**實際輸出**貼出來，不是「應該會過」。
  2. 檔案產出 → 用 fresh-context agent 做 read-back，確認確實落地且完整。
  3. 高風險判斷 → 找第二意見或多答案評審選優。
  4. 誠實回報：測試沒過就說沒過並貼輸出；步驟跳過就說跳過。**絕不**把「沒驗」講成「已驗」。

### C3. 在薄弱證據上做不可逆 / 破壞性操作
- **症狀**：看到一個「像是」某故障的訊號，就重啟服務 / 刪檔 / `git reset --hard` / force-push / `rm -rf`。注意本 repo 的 `settings.local.json`（撰寫本檔時）**已允許** `rm -rf ./*` 與 `git reset:*`——weak model 不會被權限擋下。
- **為什麼傷**：harness 明文警告——跑會改變系統狀態的命令前，要確認證據真的支持這個**特定**動作；pattern-match 到某故障不代表真是那個原因。破壞性操作做錯無法復原。
- **修法**：
  1. 破壞性/不可逆/對外的動作（刪除、覆寫、reset、force-push、重啟、發信、部署）→ **先確認**，除非使用者已明確授權「不用問直接做」。一個情境的授權不延伸到下一個。
  2. 刪除/覆寫前**先看目標內容**：若與描述不符、或不是你建立的 → 停下來回報，不要照做。
  3. 修改既有檔前先留備份副本（本制度的鐵律，見 [40-maintenance-protocol.md](40-maintenance-protocol.md)）。
  4. 破壞性 git（`reset --hard`、force-push、`rm -rf`）在弱模型手上風險最高——能用 `git stash`、開新分支、複製到 scratchpad 就別用破壞性做法。

---

## 一頁速記（貼在腦子最前面）

| 面向 | 一句話規則 |
|---|---|
| 讀取 | 大量讀取派 subagent，只收結論＋`檔案:行號`；不用 Bash 倒檔案 |
| 重複 | 已知的別再查；Edit 成功別回讀；記憶裡的路徑用前確認一次 |
| 工具 | 要哪個載哪個，一次載齊；驗證優先文字工具，截圖留到最後給人看 |
| Skill | 明確要動作才叫 skill；使用者在想事情就別動手；小事直接做 |
| Scope | 開場寫下「唯一交付」；記憶是背景不是指令；順手活丟 spawn_task |
| 收尾 | 最後一段不能是「我會…」，要現在做掉 |
| 改檔 | 先讀再改；版本改兩處；webpack 路徑=`dist/`基準 |
| 驗證 | 貼實際輸出；fresh agent read-back；不自驗；不謊報完成 |
| 破壞 | 不可逆操作先確認先看目標；弱模型避開破壞性 git |
