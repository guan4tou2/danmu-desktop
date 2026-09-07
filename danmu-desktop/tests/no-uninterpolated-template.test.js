/**
 * 單引號／雙引號字串裡的 `${...}` 永遠不會被插值——使用者看到的是字面上的
 * `${ServerI18n.t("mlSpeed")}`。
 *
 * 2026-09-07 在畫面上抓到五處（admin-replay ×3、admin-display ×1、
 * admin-scheduler ×1），全部是「本來要寫成 template literal，結果引號用錯」。
 * 這種錯不會噴任何錯誤：JS 照樣跑、HTML 照樣長出來，只是字是錯的。
 *
 * 用 acorn 真的把檔案 parse 過一次，只看 **字串字面值**（Literal）的原始
 * 寫法裡有沒有 `${`。先前試過的字串比對法（挖掉反引號區段再掃）擋不住
 * 巢狀 template literal（`${cond ? `a` : `b`}`），一路誤報十幾個地方；
 * 這種 heuristic parser 的失敗方式就是這樣安靜又難查。
 */
const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");
const acorn = require("acorn");

const ROOTS = [
  path.join(__dirname, "..", "..", "server", "static", "js"),
  path.join(__dirname, "..", "renderer-modules"),
];
const SKIP_FILES = new Set(["i18n.js"]);

function walk(node, visit) {
  if (!node || typeof node.type !== "string") return;
  visit(node);
  for (const key of Object.keys(node)) {
    if (key === "type" || key === "start" || key === "end") continue;
    const child = node[key];
    if (Array.isArray(child)) child.forEach((c) => walk(c, visit));
    else if (child && typeof child.type === "string") walk(child, visit);
  }
}

function offenders(src, filename) {
  const ast = acorn.parse(src, {
    ecmaVersion: "latest",
    sourceType: "script",
    locations: true,
    allowReturnOutsideFunction: true,
  });
  const hits = [];
  walk(ast, (node) => {
    if (node.type !== "Literal" || typeof node.value !== "string") return;
    if (!node.raw || !node.raw.includes("${")) return;
    hits.push(`${filename}:${node.loc.start.line}  ${node.raw.slice(0, 90)}`);
  });
  return hits;
}

test("no quoted string smuggles an uninterpolated ${...}", () => {
  const failures = [];
  for (const root of ROOTS) {
    if (!fs.existsSync(root)) continue;
    for (const name of fs.readdirSync(root)) {
      if (!name.endsWith(".js") || SKIP_FILES.has(name)) continue;
      failures.push(...offenders(fs.readFileSync(path.join(root, name), "utf8"), name));
    }
  }
  expect(failures).toEqual([]);
});
