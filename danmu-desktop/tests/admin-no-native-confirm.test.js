const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

// Admin destructive actions must go through the HUD confirm modal
// (`window.HudConfirm.open()` in server/static/js/admin-hud-modal.js), not the
// browser's native `confirm()`.
//
// Native confirm() is a hard blocker on the whole tab, ignores the admin's
// visual language entirely, and on top of that it cannot render the
// title / subtitle / severity structure the HUD modal was built for. The modal
// helper's own docstring says it exists to "replace the ad-hoc confirm() calls
// scattered through the admin modules" — this test is what keeps them from
// coming back.
//
// Follow-up plan reference: docs/plans/2026-05-20-admin-follow-up.md Task 4.

const STATIC_JS = path.join(__dirname, "..", "..", "server", "static", "js");

// `window.confirm(...)` and bare `confirm(...)`. The negative lookbehind keeps
// property access like `HudConfirm.open` / `opts.confirm` from matching, and
// `\w` guards against names that merely end in "confirm".
const NATIVE_CONFIRM_PATTERNS = [/\bwindow\.confirm\s*\(/, /(?<![.\w])confirm\s*\(/];

/**
 * Strip comments and string literals so a `confirm(` mentioned in prose or
 * inside a message never counts as a call site.
 */
function stripCommentsAndStrings(src) {
  return (
    src
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/^\s*\/\/.*$/gm, "")
      // Template literals can span lines and embed expressions; dropping them
      // wholesale is fine because a confirm() call is never written inside one.
      .replace(/`(?:[^`\\]|\\[\s\S])*`/g, '""')
      .replace(/'(?:[^'\\\n]|\\.)*'/g, '""')
      .replace(/"(?:[^"\\\n]|\\.)*"/g, '""')
  );
}

function nativeConfirmCallSites(src) {
  const cleaned = stripCommentsAndStrings(src);
  return cleaned
    .split("\n")
    .map((line, i) => ({ line: i + 1, text: line.trim() }))
    .filter(({ text }) => NATIVE_CONFIRM_PATTERNS.some((re) => re.test(text)));
}

test("no admin module calls native confirm()", () => {
  const offenders = {};
  for (const file of fs.readdirSync(STATIC_JS).filter((f) => /^admin.*\.js$/.test(f))) {
    const src = fs.readFileSync(path.join(STATIC_JS, file), "utf8");
    const hits = nativeConfirmCallSites(src);
    if (hits.length) offenders[file] = hits;
  }

  expect(offenders).toEqual({});
});

test("the confirm detector actually detects", () => {
  // Guards the regex/stripping above: a rewrite that accidentally neuters the
  // detector would otherwise make the test above pass vacuously.
  expect(nativeConfirmCallSites('if (!confirm("x")) return;')).toHaveLength(1);
  expect(nativeConfirmCallSites("const ok = window.confirm(msg);")).toHaveLength(1);
  // ...and does not fire on the things it must ignore.
  expect(nativeConfirmCallSites("await window.HudConfirm.open({});")).toHaveLength(0);
  expect(nativeConfirmCallSites("// if (!confirm('x')) return;")).toHaveLength(0);
  expect(nativeConfirmCallSites('const s = "confirm(";')).toHaveLength(0);
  expect(nativeConfirmCallSites("if (!config || !config.confirm) return;")).toHaveLength(0);
});
