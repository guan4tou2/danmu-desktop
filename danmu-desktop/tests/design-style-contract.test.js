const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.join(__dirname, "..", "..");

const SCAN_ROOTS = [
  "shared",
  "server/static/css",
  "server/static/js",
  "server/templates",
  "danmu-desktop",
];

const SKIP_PARTS = new Set([
  "assets",
  "dist",
  "e2e",
  "locales",
  "node_modules",
  "pack",
  "test-results",
  "tests",
  "vendor",
]);

const SCAN_EXTENSIONS = new Set([
  ".css",
  ".html",
  ".js",
]);

const FORBIDDEN_PATTERNS = [
  { label: "drifted viewport #0a0e1a", pattern: /#0a0e1a/i },
  { label: "drifted panel #0f1421", pattern: /#0f1421/i },
  { label: "drifted raised #13192c", pattern: /#13192c/i },
  { label: "invented raised2 #172037", pattern: /#172037/i },
  { label: "wrong lime #84cc16", pattern: /#84cc16/i },
  { label: "wrong lime rgb(132,204,22)", pattern: /rgba?\(\s*132\s*,\s*204\s*,\s*22\b/i },
  { label: "wrong crimson #f43f5e", pattern: /#f43f5e/i },
  { label: "wrong crimson rgb(244,63,94)", pattern: /rgba?\(\s*244\s*,\s*63\s*,\s*94\b/i },
  { label: "drifted hairline #1f2944", pattern: /#1f2944/i },
  { label: "forbidden pink #f472b6", pattern: /#f472b6/i },
  { label: "forbidden violet #a78bfa", pattern: /#a78bfa/i },
  { label: "forbidden magenta token/copy", pattern: /\bmagenta\b/i },
  { label: "forbidden violet token/copy", pattern: /\bviolet\b/i },
  { label: "forbidden purple token/copy", pattern: /\bpurple\b/i },
];

function shouldSkip(fullPath) {
  const rel = path.relative(REPO_ROOT, fullPath);
  const parts = rel.split(path.sep);
  return parts.some((part) => SKIP_PARTS.has(part));
}

function collectFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (shouldSkip(fullPath)) continue;
    if (entry.isDirectory()) {
      collectFiles(fullPath, out);
      continue;
    }
    if (entry.isFile() && SCAN_EXTENSIONS.has(path.extname(entry.name))) {
      out.push(fullPath);
    }
  }
  return out;
}

test("implementation frontend files do not reintroduce design-v2 forbidden palette drift", () => {
  const failures = [];
  const files = SCAN_ROOTS.flatMap((root) => collectFiles(path.join(REPO_ROOT, root)));

  for (const file of files) {
    const rel = path.relative(REPO_ROOT, file);
    const src = fs.readFileSync(file, "utf8");
    const lines = src.split(/\r?\n/);
    lines.forEach((line, i) => {
      FORBIDDEN_PATTERNS.forEach(({ label, pattern }) => {
        if (pattern.test(line)) failures.push(`${rel}:${i + 1} ${label}`);
      });
    });
  }

  expect(failures).toEqual([]);
});
