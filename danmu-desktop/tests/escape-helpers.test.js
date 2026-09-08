/**
 * 跳脫函式必須跳引號。
 *
 * 2026-09-08 之前 `AdminUtils.escapeHtml` 是 `textNode → innerHTML`：HTML 序列化
 * 規範只要求在**文字節點**裡跳 `&`、`<`、`>` 與 nbsp，引號只在序列化**屬性值**
 * 時才跳。所以它的輸出放進 `value="${…}"` 會被 `a" onfocus="…" autofocus x="`
 * 撐開，長出額外屬性。當時 admin 有 36 個檔都把 `escapeHtml` 指向這一支。
 *
 * 那時沒被利用是因為 CSP 的 `script-src-attr 'none'` 擋掉行內事件處理器的執行，
 * 但 CSP 擋不住注入 `style` / `formaction`——**不要把 CSP 當成跳脫的替代品**。
 */
const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

const JS_DIR = path.join(__dirname, "..", "..", "server", "static", "js");

// 拿真的原始碼來跑，而不是在測試裡複寫一份——複寫的那份永遠會通過。
function loadEscape() {
  const src = fs.readFileSync(path.join(JS_DIR, "admin-utils.js"), "utf8");
  const m = src.match(/var _ESCAPE_MAP = [\s\S]*?\n  function escapeHtml\(str\) \{[\s\S]*?\n  \}/);
  if (!m) throw new Error("找不到 admin-utils.js 的 escapeHtml —— 它被改寫了，請更新這支測試");
  // eslint-disable-next-line no-new-func
  return new Function(m[0] + "\nreturn escapeHtml;")();
}

test("AdminUtils.escapeHtml escapes quotes (attribute-safe)", () => {
  const esc = loadEscape();
  expect(esc('a"b')).toBe("a&quot;b");
  expect(esc("a'b")).toBe("a&#39;b");
  expect(esc("<b>&</b>")).toBe("&lt;b&gt;&amp;&lt;/b&gt;");
  // 屬性突破：跳脫過的字串不該還留著能結束屬性值的裸引號
  const payload = 'x" onfocus="alert(1)" autofocus y="';
  expect(esc(payload)).not.toMatch(/"/);
  // null/undefined → ""，但 0 與 false 要保留（舊版的 `if (!str)` 會吃掉它們）
  expect(esc(null)).toBe("");
  expect(esc(undefined)).toBe("");
  expect(esc(0)).toBe("0");
  expect(esc(false)).toBe("false");
});

test("no admin escape helper is weaker than AdminUtils.escapeHtml", () => {
  // 全站不該再有「只跳 & < >」或「漏跳單引號」的自製版本。判準是：任何名為
  // escapeHtml / escapeHTML / _esc / escapeAttr 的函式，其函式體要嘛委派給
  // AdminUtils，要嘛五個字元都涵蓋。
  const weak = [];
  for (const fn of fs.readdirSync(JS_DIR).filter((f) => f.endsWith(".js") && f !== "i18n.js")) {
    const src = fs.readFileSync(path.join(JS_DIR, fn), "utf8");
    const re = /function (escapeHtml|escapeHTML|_esc|escapeAttr)\s*\([^)]*\)\s*\{([\s\S]*?)\n  \}/g;
    let m;
    while ((m = re.exec(src))) {
      const body = m[2];
      // 委派給 AdminUtils（直接或透過檔案自己的別名）就算過
      if (/AdminUtils\s*\.\s*escapeHtml|return escape(Html|HTML)\(/.test(body)) continue;
      // 五個字元可能寫成字串（"&"）、正則字面（/&/g）或字元集（[&<>"']）
      const covers = ["&", "<", ">", '"', "'"].every(
        (c) =>
          body.includes(`"${c}"`) ||
          body.includes(`'${c}'`) ||
          body.includes(`/${c}/g`) ||
          /\[&<>"'\]/.test(body),
      );
      if (!covers) weak.push(`${fn}:${m[1]}`);
    }
  }
  expect(weak).toEqual([]);
});
