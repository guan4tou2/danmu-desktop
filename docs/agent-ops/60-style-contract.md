# 60 · Style Contract — admin UI 的設計詞彙

> **讀者**：未來要改 admin 介面的 session（包含你自己）。
> **權威性**：與個別檔案牴觸時以本文為準。牴觸如果是本文錯了，改本文。
> **時點**：2026-09-06，設計稿 04–17 全套落地中（詳見 `.design-sync/specs/`）。
> 前一版時點是 2026-08-19（IA v8 / Apple SF 刻度）。
> 前身 `docs/designs/design-v2/STYLE-CONTRACT.md` 講的是 `tokens.jsx` /
> `hudTokens` / JSX 元件——那是 v2 原型時代，已被現行的 CSS token 系統取代，
> 留作歷史。

本文列出的每一個 token 與 class **都已對照建置產物驗證過存在**。
新增條目前請照 §7 的方式驗一次；寫進來卻不存在的名字，比沒寫更糟——
下一個 session 會相信它，然後產出靜靜失效的樣式。

---

## 1. 這套系統長什麼樣（先講清楚，免得誤判）

**不是元件庫。** 沒有 React、沒有 Storybook、沒有可匯出的 `dist/`。
admin 介面由 **61 個 JS 檔用 HTML 字串樣板**（`pageTemplate()` /
`innerHTML` / `insertAdjacentHTML`）產生，樣式全靠 CSS class 約定。

所以「元件」在這裡的意思是：**一組 class 名稱 + 一份 HTML 結構慣例**。
要新增 UI，你是寫樣板字串套既有 class，不是 import 元件。

**檔案分工**

| 檔案 | 角色 | 注意 |
|---|---|---|
| `shared/tokens.css` | 所有 token 的唯一來源 | symlink 到 `server/static/css/tokens.css` 與 `danmu-desktop/tokens.css` |
| `shared/hud.css` | admin 元件層（`admin-ui-*` 等） | symlink 到 `server/static/css/hud.css`——**改要改 `shared/`** |
| `server/static/css/style.css` | admin 頁面級樣式；`@import url("tokens.css")` | 非 symlink |
| `server/static/css/viewer-v2.css` | 觀眾頁 | |
| `server/static/css/overlay.css` | OBS overlay | |
| `danmu-desktop/styles.css` / `child.css` | Electron 主視窗 / overlay 視窗 | 各自 `@import "./tokens.css"` |

**載入順序**（決定覆蓋關係）：
`admin.html` = tailwind.css → style.css（內含 tokens）→ hud.css
`index.html` = tailwind.css → style.css → hud.css → viewer-v2.css
`overlay.html` = tokens.css → hud.css → overlay.css

---

## 2. 字級 — Apple SF 原生刻度（唯一刻度）

2026-08-19 起採用 SF 級距，取代先前自訂的 11/13/16/20/28/34。
SF 的級距本身就是 HIG 原文，17 是 iOS Body 標準。

| Token | px | SF 角色 | 用在哪 |
|---|---|---|---|
| `--text-caption` | 12 | Caption1 | 群組小標、單位、輔助註記 |
| `--text-footnote` | 13 | Footnote | 次要說明、頁首註解 |
| `--text-subhead` | 15 | Subheadline | **設定列標籤（主力 body）** |
| `--text-body` | 17 | Body | 卡片標題、強調 |
| `--text-title2` | 22 | Title2 | 頁面 h1 |
| `--text-title1` | 28 | Title1 | 區段大標 |
| `--text-large` | 34 | LargeTitle | 僅 hero |

**規則**

- **一律用 token，不要寫字面 px。** 六個 CSS 檔的 `font-size` 已全部
  tokenize，`make lint-css` 的 ratchet 會擋新增的可 token 化字面值。
- 例外只有沒有對應 token 的 hero 尺寸（42/48/52/56/60/72/140），
  它們刻意留字面值。
- `body` 的基準是 `var(--text-subhead)`（15px），設在 `body` 不是 `html`
  ——token 是 `rem`，要讓它們續以 16px 換算。
- 舊名 `--text-xs/sm/base/lg/xl/2xl/3xl` 仍在，已改指向 SF 級距，
  呼叫點無需改。新程式碼請用語意名。

---

## 3. 間距 · 圓角

**間距是 4px 格，且是唯一刻度。** `--space-1`(4) `-2`(8) `-3`(12)
`-4`(16) `-5`(20) `-6`(24) `-8`(32)。`--space-05`(2px) 只給髮絲級間隙。
0/1/2px 是允許的例外；其餘離格值會被 `check-css-tokens.mjs` 的
offGrid ratchet 擋下。

**圓角**：`--radius-2xs`(2) `-xs`(3) `-sm`(4) `-md-sm`(6) `-md`(8)
`-lg`(12) `-xl`(16) `-pill`(999px)。設定群組卡片用 `--radius-lg`。

---

## 4. 色彩 — 兩層，別搞混

這是最容易踩的一條。**訊號色分兩層**：

- **`--color-ink-*`** — 拿來**畫字**。`accent` `success` `warning`
  `error` `theme` `danger`。
- **`--color-*`** — 拿來**畫面**（背景、邊框、圓點）。

直接把語意 token 的淺色臂調深會弄壞按鈕（實測黑字對比 5.0 → 3.6）。
要改文字對比度，動 ink 層。

**admin 表面 token**（深淺主題自動成立，別寫死 hex）：

| Token | 用途 |
|---|---|
| `--admin-bg` | viewport |
| `--admin-panel` | 側欄 / 頂欄 / 卡片 |
| `--admin-raised` | 卡片內的次級表面（控制項底） |
| `--admin-line` | 髮絲線 |
| `--admin-text` | 主文字 |
| `--admin-text-dim` | 次要文字 |

`make lint-css` 會擋新增的裸 hex 與裸 `rgba()`。要陰影用 `--shadow-base`。

---

## 5. 版型規則（設計稿 07 拍板，2026-08-19）

### 5.1 頁首

**標題 + 一行說明 + 右側最多 1 主 1 次動作。沒有 kicker、沒有麵包屑、
沒有狀態色條圖例。**

kicker（標題上方那行全大寫英文代號）全域 34 處已移除。不要加回來——
頁面叫什麼標題已經寫了，那行只是把同一件事說兩次，還吃掉最貴的垂直空間。

```html
<div class="admin-ui-page-head">
  <h2 class="admin-ui-page-title">安全</h2>
  <p class="admin-ui-page-note">管理密碼、顯示層連線密碼、誰可以進後台。</p>
</div>
<!-- 主動作要放在 page-head 外面，見下方陷阱 -->
<div class="admin-ui-page-actions">
  <button class="admin-ui-action is-primary">下載完整備份</button>
</div>
```

> **陷阱**：section 標題與路由標題相同時，`_dedupSectionTitles()` 會把
> **整個** `.admin-ui-page-head` 收起來（並把 note 上移頂欄）。
> 放在裡面的按鈕會跟著消失——所以主動作一律放外面。

### 5.2 設定群組卡片（內容層的主力版型）

**一列一個設定。** 群組小標（12px）+ 卡片（列高 48／雙行 52、
列間髮絲線、右側放值／開關／分段控制）。

```html
<div class="admin-ui-group-label">顯示層連線密碼</div>
<div class="admin-ui-group">
  <div class="admin-ui-group-row is-tall">
    <span class="lbl">需要密碼才能連接顯示層
      <span class="sub">開啟後，桌面端要在設定填入這組密碼</span>
    </span>
    <span class="val">
      <input type="checkbox" class="admin-ui-checkbox" />
    </span>
  </div>
  <div class="admin-ui-group-row">
    <span class="lbl">上次更換</span>
    <span class="val">—</span>
  </div>
</div>
```

- `.admin-ui-group-row` 預設 48px；含副標用 `.is-tall`（52px）
- `.lbl` 是 flex column：主標 + 選填 `.sub`（12px，說明這設定會做什麼）
- `.val` 右側值，已套 `tabular-nums`（數字調整時不跳動）
- 最後一列的下框線自動移除

### 5.3 其餘元件

| Class | 用途 |
|---|---|
| `.admin-ui-seg` | 分段控制，表達互斥選項（取代一排 chip）。作用中的加 `.is-active` |
| `.admin-ui-stepper` | `− 值 +`。內含 `.stepper-val` |
| `.admin-ui-danger-label` + `.admin-ui-group.is-danger` | 危險區 |
| `.admin-ui-danger-btn` | 危險動作按鈕 |

### 5.4 危險操作

**永遠在頁面最底、紅框淡底、按鈕帶「…」**表示按了還會再確認一次。

### 5.5 文案

**全域名詞表**（設計稿 14 · 文案總表，2026-09-06 拍板）：

| 內部／舊稱 | 對主持人（zh） | 對主持人（en） |
|---|---|---|
| Desktop / Overlay | 顯示層 | Display |
| WebSocket Token | 連線密碼 | Connection password |
| Fingerprint / fp | 裝置識別 | Device ID |
| 效果庫 .dme | 動畫效果 | Effects |
| 風格主題包 | 主題 | Themes |
| Desktop Widgets | 小工具 | Widgets |

**對觀眾**再降一階：顯示層 → **大螢幕**。觀眾不需要知道主持人在跑一個
桌面 app，也不需要學會「彈幕牆」這個我們自己發明的詞。

**按鈕**只寫動詞，不加圖示符號（`▶` `■` `⚡` `⌫` `◱` 一律不要）。
危險動作結尾加「…」代表會再確認。狀態用「已／中／未」三態。
Toast 是動詞完成式且 ≤ 8 字：已送出 · 已清空 · 已封鎖 · 已儲存。
錯誤三段式「發生什麼 · 可能原因 · 可以做什麼」，技術訊息降到頁腳小字。

- **白話，不要術語。** 「Dry-run」→「預覽變更」；
  「WebSocket 令牌」→「顯示層連線密碼」；
  「emojis/ · stickers/ · runtime/stickers/packs.json」→「表情、貼圖、音效」。
- **不要中英對照。** 中文已經是標籤，旁邊再擺一行大寫英文是同一件事說兩次。
  全域已清到可見殘留 0，別再引入。
- **真技術詞保留原文**：URL、HMAC、JSON、YAML、MP3/OGG/WAV、
  主題包專有名（RETRO/NEON/CINEMA）——換成中文反而看不懂。
- **四語同步**。新增 key 要同時進 `server/static/locales/{zh,en,ja,ko}/`，
  然後 `cd server && npm run build:i18n`（`static/js/i18n.js` 是生成物）。

---

## 6. IA（側欄 3 區 13 列）

分組軸線是「活動當下 / 活動之前 / 與活動無關」，不是「功能分類」。

```
活動中      控制台 · 顯示層 · 投票 · 審核
外觀與素材  觀眾頁 · 動畫效果 · 主題 · 素材 · 小工具
系統        紀錄與匯出 · 備份與還原 · 安全 · 擴充
```

- 2026-09-06（設計稿 08/14）：`widgets` 從「擴充」hub 回到「外觀與素材」。
  小工具是主持人活動前擺一次的東西，跟主題、素材同類；「擴充」是給
  IT 人員的區域（Webhook / 插件 / API 金鑰 / 定時發送）。
- 四個降級的路由（`system` `plugins` `webhooks` `api-tokens`）
  **仍是 first-class route**，深連結與 ⌘K 照常，只是不佔側欄，入口收在「擴充」。
- **側欄名與頁面標題必須一致**——同一個東西不該有兩個名字。
  改側欄要同步改 `ADMIN_ROUTES` 的 `title` 與 `adminRouteTitle_*` i18n key。
- **動側欄必同步改 `server/tests/test_admin_sidebar_ia.py`**，它鎖順序與分組。

**顯示層 / 觀眾頁的拆分**：同一份面板服務兩條路由，
`syncVisibility()` 在容器標 `data-dsp-mode`：

- `values`（顯示層）→ 只露「值」欄：主持人設定大螢幕長什麼樣
- `audience`（觀眾頁）→ 只露「觀眾可自訂」開關欄

資料本來就是同一列的 slot 3（值）與 slot 0（可自訂），拆的是呈現不是資料。
兩套標題／表頭／提示並存，用 `data-dsp-only="values|audience"` 擇一顯示。

### 6.1 控制台首屏＝三塊（設計稿 06 · K1/K2）

```
① 顯示層開關卡（左半）  .admin-cockpit-overlay   ← 全頁唯一的狀態顯示
② 一行數字（右半）      .admin-cockpit-stats     ← tabular-nums，無 sparkline
③ 即時訊息流（撐滿）    #sec-live-feed
```

**已退場、不要復活**：KPI 四卡的 Bebas 大數字與 20 條 sparkline（20 個資料點
畫不出趨勢，只讓每張卡長高 60px）、Quick Actions F1–F4 四張常駐面板
（⌘K 一步就到，設計稿 15 · CK1 明講取代它）、My Actions 側欄
（稽核用的回顧，家在「紀錄與匯出 › 操作紀錄」）。

---

## 7. 改動前後要做的事

**改 CSS 前**：確認是不是 symlink。`shared/hud.css` 與 `shared/tokens.css`
才是本體，改 `server/static/css/` 下的同名檔等於沒改（或改錯邊）。

**驗證名字存在**（寫進本文或 conventions 前必做）：

```bash
grep -n "\-\-text-subhead\|\.admin-ui-group\b" shared/tokens.css shared/hud.css
```

**改完要跑**：

```bash
make lint-css
cd server && PYTHONPATH=.. uv run python -m pytest tests/test_design_contract.py -q
```

`make lint-css` 擋新增的裸 hex、裸 rgba、可 token 化的 px、離格間距、
theme-blind 色彩。刻意的 baseline 變動才用
`node scripts/check-css-tokens.mjs --update`。

`test_design_contract.py`（2026-09-06 新增）釘住**設計稿上的文案與結構**：
關鍵字串在不在、退場的元素有沒有真的退場。它不是像素比對，也不取代看畫面
——它擋的是「有人為了修別的東西，把『大螢幕未開』改回『彈幕牆 · 未開啟』，
或把 KPI sparkline 加回控制台，而沒有人發現」。設計契約變了就更新那份清單，
並在 commit 說明為什麼；不要為了讓它變綠而繞過去。

**視覺驗證用可見節點量，不要用 `innerText`。**
admin 有大量 `display:none` 的隱藏面板（開發者覆寫工具、未啟用分頁），
`innerText` 會把它們一起算進去——本 session 的英文標籤統計就因此從 65 灌水
到看似 191。正確做法：

```js
document.querySelectorAll('.admin-dash-main *')
  .forEach(el => { if (el.children.length || el.offsetParent === null) return; /* ... */ });
```

相關的量測陷阱另見 auto-memory 的 `contrast_probe_pitfalls_2026-07-29`
與 `admin_dom_probe_hazard_2026-07-28`。
