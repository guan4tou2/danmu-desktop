# docs/agent-ops · AI session 操作制度

這個目錄是給 **AI session（未來的 Sonnet / Opus / Haiku）** 用的操作制度，不是給人讀的產品文件。
由一個 Fable 5 session 在 2026-07-06 建立，目的：把「只有強模型才擅長的判斷」外化成弱模型可執行的規則，讓每個未來 session 都因此變強。

## 從哪開始

1. **每個 session 開頭**：掃一眼 [`../../CLAUDE.md`](../../CLAUDE.md) 第 0 區的路由表（它會自動載入）。
2. **遇到疑問**：按下表點進對應檔。

## 檔案地圖

| 檔案 | 內容 | 什麼時候看 |
|---|---|---|
| [00-harness-diagnosis.md](00-harness-diagnosis.md) | 這 harness 最容易踩的坑（漏 token / 失焦 / 出錯）＋修法 | 想知道「哪裡最容易翻車」；一頁速記在檔末 |
| [10-model-dispatch.md](10-model-dispatch.md) | 模型調度：指揮官不下場、派工三件套、model/effort 對照、升降級、驗證不自驗 | 要派 subagent、選模型、決定怎麼驗證 |
| [20-judgment-rubrics.md](20-judgment-rubrics.md) | 判斷 rubric：何時升級/算完成/該問/該換路/怎麼驗品質/該不該叫 skill | 卡在「這該怎麼判斷」 |
| [30-delegation-templates.md](30-delegation-templates.md) | 五種派工 prompt 模板（搜尋/實作/重構/研究/審查），可複製填空 | 要寫派工 prompt |
| [40-maintenance-protocol.md](40-maintenance-protocol.md) | 怎麼安全更新這些制度檔（可自改/先問/踩坑回寫/精簡） | 要改這裡任何一個檔 |
| [50-letter-to-future-sessions.md](50-letter-to-future-sessions.md) | 建立者留給未來 session 的信：三件最重要的事＋退化預防 | 想理解制度初衷；定期回看防退化 |
| [90-hook-suggestions.md](90-hook-suggestions.md) | 用 hooks 強制關鍵規則的建議清單（尚未安裝） | 使用者想加 harness 級強制防線 |

## 核心不變量（維護時不能破壞，動它們先問使用者）

1. 指揮官不下場（大量讀取/掃描/批改派 subagent）
2. 驗證不自驗（fresh agent / 測試 / 第二意見）
3. 破壞性操作先確認
4. 改既有檔先備份
5. 抽象要求不算數——每條規則具體、可執行、有判準或範例
6. CLAUDE.md 只放路由與硬規則，細節在這裡

## 本制度的既定前提（2026-07-06 使用者拍板）

- 主力模型：**Opus 4.8**；取向：**平衡**；範圍：**danmu 為主但要通用**。
- 可用模型：`haiku < sonnet < opus < fable`（成本序）；effort：`low/medium/high/xhigh/max`。
- hooks：目前只有建議清單，**未寫入** `settings.json`。
