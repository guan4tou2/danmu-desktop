# 色彩系統 v2 設計提案（tokens.css core）

> 狀態：**提案 · 待決策**（2026-07-24）。不動碼,先讓人審。
> 合併 Issue #120 的兩個「重寫顏色核心」項目:**③(c) oklch 遷移** + **④ primitive 50–950 色階**。
> 這兩件本質是同一件事,分兩次做 = 對 `shared/tokens.css` 核心動兩刀,故合成一份。

---

## 0. TL;DR — 一句話與建議

現在 `tokens.css` 是「**semantic token 直接持 hex/rgba**、light 主題靠整段重宣告(且在 `@media` 裡再複製一次)」。提案改成三層:

```
primitive（oklch,固定）  →  semantic（light-dark() 綁雙主題）  →  component/alias
```

**建議採用組合**:`primitive 層（seed 自 Tailwind v4 oklch)` + `light-dark()` 消除主題重複 + **Phase 化、零視覺變化優先**。單一最大收益不是 oklch 本身,而是 **`light-dark()` 把 ~130 行重複的主題 override 收斂成 0**。

---

## 1. 現況（紮根事實,全部出自 `shared/tokens.css`）

### 1.1 沒有 primitive 層
Semantic token 直接寫死原始值,註解裡才提 Tailwind 色名 —— 但**沒有對應的 `--sky-400` primitive**:

```css
--color-primary: #38bdf8;          /* 註解說 sky-400,但沒有 --sky-400 token */
--color-text-secondary: #94a3b8;   /* slate-400 */
--hud-cyan-line: rgba(56, 189, 248, 0.45);  /* sky-400 @ 0.45 */
```
清點:**~150 個色值定義（101 hex + 49 rgba）**,幾乎全是 Tailwind v3 調色盤色。

### 1.2 light 主題 = 整段重宣告 ×2（核心痛點）
Light 主題不是「翻映射」,是把 ~50 個 semantic token **整段重寫**,而且**同一段複製在兩個地方**:

| 位置 | 內容 |
|---|---|
| `:root[data-theme="light"]`（L240-309） | ~50 個 token override |
| `@media (prefers-color-scheme: light) :root:not(...)`（L314-368） | **同樣 ~50 個,幾乎逐行複製** |

= **~130 行重複的主題 override**。記憶裡早有此警告(雙軌 token 容易 drift)。CSS custom property 無法用選擇器合併「屬性選擇器 + media query」,所以現況沒辦法 DRY —— **除非改機制**。

### 1.3 light 的「-2 steps darker」是手挑 hex,但其實是系統性的
註解明說 accent 在 light「shift -2 steps darker(sky-400 → sky-600)以保 WCAG AA on white」。實際比對:

| token | dark | light | 調色盤關係 |
|---|---|---|---|
| `--color-primary` | `#38bdf8` sky-400 | `#0284c7` sky-600 | **+2 階** |
| `--color-warning` | `#fbbf24` amber-400 | `#d97706` amber-600 | **+2 階** |
| `--color-error` | `#ef4444` red-500 | `#dc2626` red-600 | +1 階 |
| `--color-success` | `#22c55e` green-500 | `#16a34a` green-600 | +1 階 |

這正是 primitive 色階能**系統化**的東西:light = 「semantic 指向高 2 階的 primitive」,而非手挑一個新 hex。

---

## 2. 提案架構

### Layer 0 — primitive（oklch,主題無關,固定）
從專案已安裝的 **Tailwind v4 `theme.css` 直接種入真實 oklch 值**(不是我手算的近似):

```css
:root {
  /* sky */
  --sky-100: oklch(95.1% 0.026 236.824);
  --sky-400: oklch(74.6% 0.16  232.661);
  --sky-500: oklch(68.5% 0.169 237.323);
  --sky-600: oklch(58.8% 0.158 241.966);
  --sky-900: oklch(39.1% 0.09  240.876);
  /* slate */
  --slate-100: oklch(96.8% 0.007 247.896);
  --slate-400: oklch(70.4% 0.04  256.788);
  --slate-600: oklch(44.6% 0.043 257.281);
  --slate-900: oklch(20.8% 0.042 265.755);
  /* amber / red / green / emerald / cyan … 同法 */
}
```
只需引入專案**實際用到的色相**(sky · slate · amber · red · green · emerald · cyan)× 需要的階(50/100/…/900/950),不是全 22 色相全量。

### Layer 1 — semantic（用 `light-dark()` 一行綁雙主題）
```css
:root {
  color-scheme: light dark;   /* 啟用 light-dark() */

  --color-primary:        light-dark(var(--sky-600),   var(--sky-400));
  --color-warning:        light-dark(var(--amber-600), var(--amber-400));
  --color-text-primary:   light-dark(var(--slate-900), var(--slate-100));
  --color-bg-base:        light-dark(#ffffff,          var(--slate-900));
  --color-border:         light-dark(oklch(20.8% 0.042 265.755 / 0.10),
                                      oklch(100% 0 0 / 0.10));
  /* … 一個 token 一行,兩主題都在裡面 … */
}
```
主題切換改成控制 `color-scheme`,**不再重宣告任何 token**:
```css
:root[data-theme="dark"]  { color-scheme: dark; }
:root[data-theme="light"] { color-scheme: light; }
/* auto 模式::root 的 `color-scheme: light dark` 讓 light-dark() 跟隨系統偏好 */
```
→ **L220-368 那整塊(~150 行)`[data-theme=light]` + `@media` 重複全部刪除。**

### Layer 2 — component / alias
`--hud-*`、`--admin-*`、legacy alias 繼續存在,改成引用 semantic(很多已經是 `var(--color-…)`)。消費端 CSS(style.css 等)全走 `var(--token)`,**不需要動**。

---

## 3. 為什麼 oklch

- **感知均勻**:同 lightness 的不同色相看起來一樣亮,scale 產生一致;「-2 階 darker」變成可預測的 L 位移。
- **好生成/好維護**:未來加新 accent 只要沿 L 軸挑階,不用手調 hex。
- **廣色域(P3)可選**:oklch 能表達 sRGB 以外的顏色,P3 螢幕上更飽和(選配,見 §6)。
- **與工具鏈一致**:專案已用 Tailwind v4,其調色盤本就是 oklch —— 種入即對齊。

---

## 4. 遷移 Phase（零視覺變化優先)

| Phase | 內容 | 風險 | 可宣稱 |
|---|---|---|---|
| **P1** 引入 primitive 層 | 加 `--sky-*` 等 primitive,**無消費者** | 極低（純新增） | 零視覺變化 |
| **P2** semantic 改綁 `light-dark(primitive)` + 刪重複 override | 重寫 ~50 semantic、刪 ~150 行 | **中(核心)** | 需逐 token 雙主題 computed 值比對 |
| **P3**（選配） 廣色域 / 新 accent | P3 opt-in、primitive 驅動的新色 | 低（加值） | 刻意增強,非零變化 |

P2 是唯一有風險的一刀,靠 §5 的驗證閘守住。

---

## 5. 驗證閘 — 「證明零視覺變化」

寫一個一次性腳本:對**每個 semantic token**,在 **dark 與 light 各自** resolve 出最終 sRGB 值,**改動前 vs 改動後**逐一比對,差異需在 oklch→sRGB 捨入 epsilon 內。作法:

1. 用 headless(現有 browse/preview)載入舊 tokens.css,`getComputedStyle` 抓每個 token 在 `data-theme=dark` 與 `light` 的 resolved 值 → 存 baseline。
2. 套 P2 後重跑,逐 token diff。任何超出 epsilon 的即為回歸,需解釋或修正。

這比人工截圖可靠,且能覆蓋不在畫面上的 token。

---

## 6. 風險與地雷（含本 repo 特有)

1. **Tailwind scanner 命名衝突（本 repo 已中過)**:`--text-*` 曾與 tailwind v4 內建 theme var 同名,害每個 PR 要重生 `tailwind.css`(見記憶 issue-120 坑 1)。新增 `--sky-*` primitive **需驗證**是否被 scanner 當 utility(tailwind 用 `--color-sky-*`,前綴不同,理論上不撞,但**務必 `npm run build:css` 後檢查 `tailwind.css` 是否變動並 commit**)。
2. **oklch 種子的兩種取法(決策點)**:
   - **(A) 零視覺**:把現有 hex **精確**轉 oklch(`#38bdf8` → 其 sRGB 精確 oklch)。與現況 byte-identical。
   - **(B) 採 Tailwind v4 調色盤**:用 v4 的 oklch 值。更正統/乾淨,但 v4 對調色盤微調過,**與現有 v3 hex 有極小色偏**。
3. **`light-dark()` 瀏覽器基準**:Baseline 2024(Chrome 123 / Safari 17.5 / Firefox 120)。Electron 43 = Chromium 130+ ✓。**server 服務的使用者瀏覽器**需確認可接受此基準(觀眾頁 viewer 面向一般大眾 —— 這是決策點)。若要保守,可對 primitive 提供 fallback 或暫留 `[data-theme]` 覆寫。
4. **rgba 棘輪互動**:剛上的 rgba 棘輪數 style.css 等的裸 rgba。tokens.css **被 lint 排除**,故 primitive 用 oklch 不影響棘輪;semantic 改用 `var()`/`light-dark()` 反而**降低** tokens.css 外的裸值(但 tokens.css 本就不計)。無衝突。
5. **Electron 桌面 CSS**:`child.css`/`styles.css`/`about.css` 有自己的硬編色,**未完全走 tokens**。是否納入本次是決策點(建議**先不納**,獨立 phase)。

---

## 7. 待決策（開工前要你拍板）

| # | 決策 | 選項 | 我的傾向 |
|---|---|---|---|
| D1 | 主題機制 | (a) `light-dark()`（刪 ~150 行重複,需 Baseline-2024) / (b) 保留 `[data-theme]`+`@media` 但改綁 primitive | **(a)** —— 消除重複是最大收益 |
| D2 | oklch 種子 | (A) 現有 hex 精確轉(零視覺) / (B) 採 Tailwind v4 調色盤(微色偏) | **(A)** 先零視覺遷移,(B) 當獨立「調色盤刷新」提案 |
| D3 | 範圍 | 只 admin+viewer / 含 Electron 桌面 CSS | **只 admin+viewer**,Electron 獨立 phase |
| D4 | P3 廣色域 | 現在 opt-in / 之後 | **之後**（P3 選配) |
| D5 | primitive 命名 | `--sky-400`(對齊 tailwind) / `--blue-40`(中性) / `--brand-*`(語意) | **`--sky-400`** 對齊既有註解與 tailwind,遷移認知成本最低 |

---

## 8. 工作量與 PR 切分（估）

- **PR-1（P1）**:引入 primitive 層(~7 色相 × ~8 階 ≈ 60 token)。純新增、零視覺、可獨立 merge。
- **PR-2（P2）**:semantic 改綁 `light-dark(primitive)`、刪 `[data-theme=light]`+`@media` 重複、附 §5 逐 token 雙主題 computed 比對報告。**核心 PR**。
- **PR-3（P3,選配)**:P3 opt-in / 新 accent / Electron 納入。

---

## 附錄:實測 oklch 值(自專案 `node_modules/tailwindcss/theme.css`)

```
sky-400  oklch(74.6% 0.16  232.661)   sky-600  oklch(58.8% 0.158 241.966)
slate-100 oklch(96.8% 0.007 247.896)  slate-400 oklch(70.4% 0.04 256.788)
slate-900 oklch(20.8% 0.042 265.755)  amber-400 oklch(82.8% 0.189 84.429)
amber-600 oklch(66.6% 0.179 58.318)   red-500  oklch(63.7% 0.237 25.331)
red-600  oklch(57.7% 0.245 27.325)    green-500 oklch(72.3% 0.219 149.579)
green-600 oklch(62.7% 0.194 149.214)  cyan-400 oklch(78.9% 0.154 211.53)
```
