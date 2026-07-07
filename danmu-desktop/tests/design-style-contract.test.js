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

function readJson(relPath) {
  return JSON.parse(fs.readFileSync(path.join(REPO_ROOT, relPath), "utf8"));
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

test("viewer light preview follows the black-on-white design followup", () => {
  const css = fs.readFileSync(path.join(REPO_ROOT, "server/static/css/viewer-v2.css"), "utf8");

  expect(css).toMatch(
    /body\.viewer-body-v2:not\(\.is-dark\)\s+\.viewer-preview\s*\{[^}]*background:\s*var\(--color-bg-base\);[^}]*color:\s*var\(--color-text-primary\);/s,
  );
  expect(css).toMatch(
    /body\.viewer-body-v2:not\(\.is-dark\)\s+\.viewer-preview::before\s*\{[^}]*rgba\(15,\s*23,\s*42,\s*0\.035\)/s,
  );
  const lightPreviewTextRule = css.match(
    /body\.viewer-body-v2:not\(\.is-dark\)\s+\.viewer-preview-text\s*\{(?<body>[^}]*)\}/s,
  );
  expect(lightPreviewTextRule).not.toBeNull();
  expect(lightPreviewTextRule.groups.body).not.toMatch(/\bcolor\s*:/);
  expect(lightPreviewTextRule.groups.body).toMatch(
    /text-shadow:\s*0 1px 2px rgba\(15,\s*23,\s*42,\s*0\.35\),\s*0 0 1px rgba\(15,\s*23,\s*42,\s*0\.55\);/s,
  );
  expect(lightPreviewTextRule.groups.body).not.toMatch(/!important/);
  expect(css).toMatch(
    /body\.viewer-body-v2\.is-dark\s+\.viewer-preview\s*\{[^}]*linear-gradient\(135deg,\s*#000814/s,
  );
});

test("viewer font dropdown shows the configured default font name", () => {
  const template = fs.readFileSync(path.join(REPO_ROOT, "server/templates/index.html"), "utf8");
  const mainJs = fs.readFileSync(path.join(REPO_ROOT, "server/static/js/main.js"), "utf8");

  expect(template).toMatch(
    /<option\s+value="">\s*\{\{\s*options\.FontFamily\[3\]\s+or\s+"NotoSansTC"\s*\}\}\s*<\/option>/,
  );
  expect(template).not.toMatch(/data-i18n="defaultFont"[^>]*>\s*Default Font/);
  expect(mainJs).toMatch(/function\s+getDefaultFontName\(\)\s*\{/);
  expect(mainJs).toMatch(/defaultOption\.textContent\s*=\s*getDefaultFontName\(\);/);
  expect(mainJs).not.toMatch(/defaultOption\.textContent\s*=\s*ServerI18n\.t\("defaultFont"\);/);
});

test("admin light inputs have a dark strong text token", () => {
  const tokens = fs.readFileSync(path.join(REPO_ROOT, "shared/tokens.css"), "utf8");
  const adminCss = fs.readFileSync(path.join(REPO_ROOT, "server/static/css/style.css"), "utf8");

  expect(tokens).toMatch(/--admin-text:\s*#0f172a;/);
  expect(tokens).toMatch(/--admin-text-strong:\s*#0f172a;/);
  expect(tokens).toMatch(
    /:root\[data-theme="dark"\]\s*\{[^}]*--admin-text:\s*#f1f5f9;[^}]*--admin-text-strong:\s*#f1f5f9;/s,
  );
  expect(adminCss).toMatch(
    /\.admin-widget-input,\s*\.admin-widget-select,\s*\.admin-widget-textarea\s*\{[^}]*color:\s*var\(--admin-text-strong,\s*#f1f5f9\);/s,
  );
});

test("API Tokens admin page has production CSS for its generated surface", () => {
  const apiTokensJs = fs.readFileSync(path.join(REPO_ROOT, "server/static/js/admin-api-tokens.js"), "utf8");
  const adminCss = fs.readFileSync(path.join(REPO_ROOT, "server/static/css/style.css"), "utf8");
  const hudCss = fs.readFileSync(path.join(REPO_ROOT, "shared/hud.css"), "utf8");

  [
    "admin-at-page",
    "admin-at-grid",
    "admin-at-main",
    "admin-at-rail",
    "admin-at-table",
    "admin-at-success-banner",
  ].forEach((className) => {
    expect(apiTokensJs).toContain(className);
    expect(adminCss).toContain(`.${className}`);
  });

  [
    "admin-ui-pill admin-at-scope-badge",
    "admin-ui-pill admin-at-badge",
    "admin-ui-input admin-at-input",
    "admin-ui-action is-primary is-block admin-at-submit-btn",
    "admin-ui-notice is-warn admin-at-once-note",
  ].forEach((className) => {
    expect(apiTokensJs).toContain(className);
  });

  expect(hudCss).toContain(".admin-ui-action.is-block");
  expect(hudCss).toContain(".admin-ui-option-row");
  expect(hudCss).toContain(".admin-ui-choice > span");
  expect(hudCss).toContain(".admin-ui-notice");
  expect(adminCss).not.toContain(".admin-at-submit-btn {");
  expect(adminCss).not.toContain(".admin-at-scope-badge,");
});

test("viewer offline send gate uses Desktop copy and red button state", () => {
  const zh = readJson("server/static/locales/zh/translation.json");
  const en = readJson("server/static/locales/en/translation.json");
  const mainJs = fs.readFileSync(path.join(REPO_ROOT, "server/static/js/main.js"), "utf8");
  const css = fs.readFileSync(path.join(REPO_ROOT, "server/static/css/viewer-v2.css"), "utf8");

  expect(zh.overlayNone).toBe("主持端 · 未開啟");
  expect(zh.overlayConnected).toBe("主持端 · {n} 個");
  expect(zh.overlayOfflineFire).toBe("主持端尚未開啟 · 訊息暫時無法送出");
  expect(zh.overlayOfflineHint).toBe("");
  expect(en.overlayNone).toBe("Host · –");
  expect(en.overlayConnected).toBe("Host · {n}");
  expect(en.overlayOfflineFire).toBe("Host is not running yet · messages cannot be sent right now");
  expect(en.overlayOfflineHint).toBe("");
  expect(JSON.stringify(zh)).not.toContain("請等候 overlay 連線後再發送");

  expect(mainJs).toMatch(/elements\.btnSend\.dataset\.state\s*=\s*"offline";/);
  expect(mainJs).toMatch(/_setSendbarHint\("",\s*""\);/);
  expect(css).toMatch(
    /\.viewer-fire-btn\[data-state="offline"\]\s*\{[^}]*color:\s*#ff4d4f;/s,
  );
  const offlineButtonBlock = css.match(/\.viewer-fire-btn\[data-state="offline"\]\s*\{(?<body>[^}]*)\}/);
  expect(offlineButtonBlock?.groups?.body || "").not.toMatch(/\bborder\s*:/);
});

test("Desktop runtime shells do not expose old Overlay labels", () => {
  const childHtml = fs.readFileSync(path.join(REPO_ROOT, "danmu-desktop/child.html"), "utf8");
  const overlayJs = fs.readFileSync(path.join(REPO_ROOT, "server/static/js/overlay.js"), "utf8");
  const overlayTemplate = fs.readFileSync(path.join(REPO_ROOT, "server/templates/overlay.html"), "utf8");

  expect(childHtml).toContain("DESKTOP READY");
  expect(childHtml).not.toContain("OVERLAY READY");
  expect(overlayJs).toContain("DESKTOP · SILENT MODE");
  expect(overlayJs).toContain("NO DANMU RENDERING · DESKTOP PAUSED");
  expect(overlayJs).not.toContain("OVERLAY · SILENT MODE");
  expect(overlayJs).not.toContain("OVERLAY PAUSED");
  expect(overlayTemplate).toContain("<title>Danmu Fire Desktop</title>");
  expect(overlayTemplate).toContain("DANMU FIRE · DESKTOP");
  expect(overlayTemplate).not.toContain("<title>Danmu Fire Overlay</title>");
  expect(overlayTemplate).not.toContain("DANMU FIRE · OVERLAY");
});

test("desktop-facing Overlay labels are renamed to Desktop", () => {
  const langs = ["en", "zh", "ja", "ko"];

  for (const lang of langs) {
    const locale = readJson(`danmu-desktop/locales/${lang}/translation.json`);
    expect(locale.overlaySectionTitle).toBe("Desktop");
    expect(locale.clientNavOverlay).toBe("Desktop");
    expect(locale.overlayButtonStart).toContain("Desktop");
    expect(locale.overlayButtonStop).toContain("Desktop");
    expect(locale.windowPickerHint).toContain("Desktop");
    expect(locale.overlayCardTitle).not.toMatch(/Overlay|overlay|オーバーレイ|오버레이/);
    expect(locale.overlayNoteBody).not.toMatch(/Overlay|overlay|オーバーレイ|오버레이/);
    expect(locale.connTestHint).not.toMatch(/Overlay|overlay|オーバーレイ|오버레이/);
    expect(locale.aboutDesc).not.toMatch(/Overlay|overlay|オーバーレイ|오버레이/);
  }
});
