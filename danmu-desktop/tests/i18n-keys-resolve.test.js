/**
 * Electron 端：每個被引用的 i18n key 都必須在四語檔裡存在。
 *
 * 2026-09-07 加，跟 server 端的 test_i18n_keys_resolve.py 是同一條規矩。
 * i18n 找不到 key 時把 key 名字本身印出來（renderer.js 的 t() 也是
 * `: key` 收尾），所以漏一個 key 不會報錯、不會空白，而是讓畫面出現
 * 變數名——沒有任何測試會紅，除非有人剛好看到那一格。
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const LOCALES = path.join(ROOT, "locales");

// 只認**完整的**字面量：字串後面必須直接是 `)` 或 `,`。
// 少了尾巴條件，`t("prefix_" + name)` 會被當成一個叫 `prefix_` 的 key。
const CALL_RE = /(?:i18n\.t|\bt)\(\s*"([A-Za-z][A-Za-z0-9_]*)"\s*[,)]/g;

// i18n.js 是 build 產物，內嵌所有語言的字典。
const SKIP = new Set(["i18n.js", "webpack.config.js", "playwright.config.js"]);

function stripComments(src) {
  // 順序有意義：行註解先剝。反過來的話，行註解裡的 `/*` 會被當成區塊
  // 註解起點，一路吃到很後面的 `*/`。
  return src.replace(/^\s*\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "");
}

function loadLocale(lang) {
  return JSON.parse(
    fs.readFileSync(path.join(LOCALES, lang, "translation.json"), "utf8"),
  );
}

function referencedKeys() {
  const found = new Map();
  const files = fs
    .readdirSync(ROOT)
    .filter((f) => f.endsWith(".js") && !SKIP.has(f));
  for (const name of files) {
    const src = stripComments(fs.readFileSync(path.join(ROOT, name), "utf8"));
    let m;
    CALL_RE.lastIndex = 0;
    while ((m = CALL_RE.exec(src)) !== null) {
      if (!found.has(m[1])) found.set(m[1], new Set());
      found.get(m[1]).add(name);
    }
  }
  return found;
}

test("every referenced i18n key exists in the locales", () => {
  const zh = loadLocale("zh");
  const missing = [];
  for (const [key, files] of referencedKeys()) {
    if (!(key in zh)) missing.push(`${key} ← ${[...files].join(", ")}`);
  }
  expect(missing).toEqual([]);
});

test.each(["en", "ja", "ko"])("zh and %s declare the same keys", (lang) => {
  const zh = Object.keys(loadLocale("zh")).sort();
  const other = Object.keys(loadLocale(lang)).sort();
  expect(other).toEqual(zh);
});
