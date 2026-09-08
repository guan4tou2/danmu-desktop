/**
 * `${...}` 只有在樣板字串（反引號）裡才會求值。放進單／雙引號字串裡不會報錯，
 * 也不會被 `node --check` 攔下來——它會**原樣印在畫面上**：使用者看到的是
 * 字面的 `${ServerI18n.t("uiTop")}`。
 *
 * 2026-09-08 全大寫文案改 i18n 那輪，5 處這樣寫錯（admin-firetoken 1、
 * admin-scheduler 2、admin-webhooks 2）。逐行讀原始碼沒看出來，因為那幾行
 * 前後都是同樣長相的 HTML 片段，只有引號種類不同。用 AST 判就沒有模糊空間。
 */
const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const REPO_ROOT = path.join(__dirname, "..", "..");
const SCAN_DIRS = ["server/static/js", "danmu-desktop"];

function jsFiles(rel) {
  const dir = path.join(REPO_ROOT, rel);
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".js") && f !== "i18n.js")
    .map((f) => ({ rel: `${rel}/${f}`, abs: path.join(dir, f) }));
}

test("no ${...} inside plain quoted strings — it would render literally", () => {
  const bad = [];
  for (const rel of SCAN_DIRS) {
    for (const { rel: name, abs } of jsFiles(rel)) {
      const ast = parser.parse(fs.readFileSync(abs, "utf8"), {
        sourceType: "unambiguous",
        errorRecovery: false,
      });
      traverse(ast, {
        StringLiteral(p) {
          // 只抓「明顯是要求值」的：呼叫函式或讀屬性，不是 CSS 的 ${} 之類
          if (/\$\{\s*[A-Za-z_$][\w$]*\s*[.(]/.test(p.node.value)) {
            bad.push(`${name}:${p.node.loc.start.line}  ${p.node.value.slice(0, 70)}`);
          }
        },
      });
    }
  }
  expect(bad).toEqual([]);
});
