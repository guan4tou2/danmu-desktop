#!/usr/bin/env node
/**
 * 產生 `static/css/viewer-base.css` —— 觀眾頁要用的那一小塊 style.css。
 *
 * 為什麼要有這支：`style.css` 是 **admin 的**樣式表（17,307 行 / 482 KB，
 * 2026-09-07 把 hud.css 併進來之後更大），但 `index.html` 也載它。實測觀眾頁
 * 只 match 到裡面 2,789 條規則的 **21 條**——活動現場每支手機都在下載 482 KB
 * 換 21 條 reset。
 *
 * **不動 style.css**：admin 的層疊順序完全不變，風險留在觀眾頁這一側。代價是
 * 兩邊有重複的規則，用這支腳本生成來保證不會走鐘（CI 會檢查是不是最新的）。
 *
 * 判準（沿用清死 CSS 那輪的四道防線，但方向相反——這裡寧可多留）：
 *   1. 邊界比對，不是子字串。
 *   2. 後代選擇器只要**任何一段**的 class 在觀眾頁來源出現過就留。
 *   3. JS 用字串串接組 class 名 → 字串常值也算來源。
 *   4. JS 用樣板字串組名字 → `${` 之前的靜態前綴當開放前綴。
 * 元素／偽類／屬性選擇器（html, body, *, :lang, [data-x]）一律保留。
 * i18n 的 JSON 也算來源（bundle 裡有 class="..."）。
 *
 * 驗證方式不是看這支腳本對不對，是 computed-style golden master：同一個頁面
 * 切換 style.css ↔ viewer-base.css 逐元素比對。2026-09-08 跑過 11 個狀態
 * （預設／深／淺／被禁言／限流／投票感謝／黑名單警示／設定／投票分頁／手機
 * 375／手機面板展開），226–252 個元素，零差異。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const CSS = path.join(HERE, "../static/css/style.css");
const OUT = path.join(HERE, "../static/css/viewer-base.css");

const VIEWER_SOURCES = [
  "../templates/index.html",
  "../static/js/main.js",
  "../static/js/viewer-states.js",
  "../static/js/viewer-style-sheet.js",
  "../static/js/toast.js",
  "../static/js/overlay-poll.js",
  "../static/locales/zh/translation.json",
  "../static/locales/en/translation.json",
  "../static/locales/ja/translation.json",
  "../static/locales/ko/translation.json",
];

/** 把 CSS 切成 top-level 區塊，保留原始文字。 */
function parseBlocks(src) {
  const out = [];
  let i = 0;
  const n = src.length;
  while (i < n) {
    const start = i;
    while (i < n && " \t\r\n".includes(src[i])) i++;
    if (i >= n) break;
    if (src.startsWith("/*", i)) {
      const j = src.indexOf("*/", i);
      i = j === -1 ? n : j + 2;
      continue;
    }
    if (src[i] === "@") {
      const semi = src.indexOf(";", i);
      const br = src.indexOf("{", i);
      if (semi !== -1 && (br === -1 || semi < br)) {
        out.push({ kind: "at-simple", prelude: src.slice(i, semi + 1).trim(), text: src.slice(start, semi + 1) });
        i = semi + 1;
        continue;
      }
    }
    const brace = src.indexOf("{", i);
    if (brace === -1) break;
    const prelude = src.slice(i, brace).trim();
    let depth = 1;
    let k = brace + 1;
    while (k < n && depth) {
      const c = src[k];
      if (c === "{") depth++;
      else if (c === "}") depth--;
      else if (c === '"' || c === "'") {
        const q = c;
        k++;
        while (k < n && src[k] !== q) {
          if (src[k] === "\\") k++;
          k++;
        }
      } else if (src.startsWith("/*", k)) {
        const e = src.indexOf("*/", k);
        k = e === -1 ? n : e + 1;
      }
      k++;
    }
    out.push({
      kind: prelude.startsWith("@") ? "at" : "rule",
      prelude,
      body: src.slice(brace + 1, k - 1),
      text: src.slice(start, k),
    });
    i = k;
  }
  return out;
}

const blob = VIEWER_SOURCES.map((p) => {
  const f = path.join(HERE, p);
  return fs.existsSync(f) ? fs.readFileSync(f, "utf8") : "";
}).join("\n");

// 防線 3/4：字串常值與樣板前綴
const openPrefixes = new Set(
  [...blob.matchAll(/["'`]([a-zA-Z][\w-]*-)(?=["'`]|\$\{)/g)].map((m) => m[1]),
);

const usedCache = new Map();
function nameUsed(name) {
  if (usedCache.has(name)) return usedCache.get(name);
  const re = new RegExp(`(^|[^\\w-])${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^\\w-]|$)`);
  const hit = re.test(blob) || [...openPrefixes].some((p) => name.startsWith(p));
  usedCache.set(name, hit);
  return hit;
}

function selectorWanted(sel) {
  for (const raw of sel.split(",")) {
    const part = raw.trim();
    if (!part) continue;
    const classes = [...part.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)].map((m) => m[1]);
    const ids = [...part.matchAll(/#(-?[_a-zA-Z][\w-]*)/g)].map((m) => m[1]);
    if (!classes.length && !ids.length) return true; // 元素/偽類/屬性選擇器
    if (classes.every(nameUsed) && ids.every(nameUsed)) return true;
  }
  return false;
}

const src = fs.readFileSync(CSS, "utf8");
const kept = [];
let dropped = 0;
for (const b of parseBlocks(src)) {
  if (b.kind === "at-simple") { kept.push(b.text.trim()); continue; }
  if (b.kind === "at") {
    const head = b.prelude.split(/\s+/)[0];
    if (head === "@keyframes") { kept.push(b.text.trim()); continue; }
    if (head === "@media" || head === "@supports") {
      const inner = parseBlocks(b.body).filter(
        (x) => x.kind !== "rule" || selectorWanted(x.prelude),
      );
      if (inner.length) kept.push(`${b.prelude} {\n${inner.map((x) => x.text.trim()).join("\n")}\n}`);
      else dropped++;
      continue;
    }
    kept.push(b.text.trim());
    continue;
  }
  if (selectorWanted(b.prelude)) kept.push(b.text.trim());
  else dropped++;
}

const header = `/* AUTO-GENERATED — do NOT edit. Source: static/css/style.css
 * Regenerate: node scripts/build-viewer-css.mjs  (or npm run build:viewer-css)
 * 為什麼存在、判準是什麼、怎麼驗證：見 scripts/build-viewer-css.mjs 的檔頭。
 */\n`;
const out = header + kept.join("\n\n") + "\n";
fs.writeFileSync(OUT, out, "utf8");
console.log(
  `viewer-base.css: 保留 ${kept.length} 塊 / 丟棄 ${dropped}  ` +
    `→ ${(out.length / 1024).toFixed(0)} KB（style.css ${(src.length / 1024).toFixed(0)} KB）`,
);
