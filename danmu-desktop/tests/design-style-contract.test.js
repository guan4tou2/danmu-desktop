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

// 2026-09-06 設計稿 05/17：觀眾可選的彈幕色多了「紫 #c084fc」，i18n 因此
// 有一顆 `swatchPurple` 標籤。禁色清單管的是**介面色**別再飄回 design-v1 的
// violet／magenta，不是觀眾自己挑的彈幕顏色——那是內容，且設計稿 17 · CB1
// 明確要求每個色點旁邊都有名稱。只放行這一顆 key，不放寬 pattern 本身。
//
// 2026-09-07：色點改成「色點＋名稱」磚之後多了一顆 `swatchAriaPurple`
// （aria-label「顏色：紫」）。同一顆標籤的無障礙版本，理由完全相同。
const FORBIDDEN_EXEMPT = [/\bswatch(Aria)?Purple\b/];

function shouldSkip(fullPath) {
  const rel = path.relative(REPO_ROOT, fullPath);
  const parts = rel.split(path.sep);
  return parts.some((part) => SKIP_PARTS.has(part));
}

// Strip CSS block comments before scanning for the "bare word" forbidden
// patterns (magenta/violet/purple). Those patterns exist to catch a color
// name creeping back into live styles/copy, not prose in a code comment that
// explains a past color was *removed* (e.g. "the former violet #c4b5fd
// swapped to accent-light cyan to keep the no-violet rule"). Hex-code
// patterns still scan the raw source, since a literal hex value is
// unambiguous regardless of comment context.
function stripCssComments(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, (match) => match.replace(/[^\n]/g, " "));
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
    const rawSrc = fs.readFileSync(file, "utf8");
    const src = path.extname(file) === ".css" ? stripCssComments(rawSrc) : rawSrc;
    const lines = src.split(/\r?\n/);
    lines.forEach((line, i) => {
      if (FORBIDDEN_EXEMPT.some((re) => re.test(line))) return;
      FORBIDDEN_PATTERNS.forEach(({ label, pattern }) => {
        if (pattern.test(line)) failures.push(`${rel}:${i + 1} ${label}`);
      });
    });
  }

  expect(failures).toEqual([]);
});

// 2026-07-29 取代 2026-05-18 followup-2 的「淺色預覽 = 白底黑字」。
// 舊契約釘的那條 `body.viewer-body-v2:not(.is-dark) .viewer-preview` 淺色臂
// 把預覽台刷成白底，但台上的字色是觀眾自己挑的**彈幕**色，而彈幕色是為深色
// 投影幕調的：六個內建色票在白底上沒有一個過 WCAG AA（白 1.00 / 天藍 2.14 /
// 琥珀 1.67 / 綠 1.40 / 紅 2.77 / 黃 1.44），等於觀眾看不到自己選了什麼色。
// 現行決策：預覽台在**兩個主題都是深色舞台**——它模擬的 overlay 本來就永遠
// 是深色圖層，所以色票在預覽裡的對比＝上場後的真實對比（改後 6.71–18.57）。
test("viewer preview stage is one dark stage in both themes", () => {
  const css = fs.readFileSync(path.join(REPO_ROOT, "server/static/css/viewer-v2.css"), "utf8");
  // 2026-09-07：兩個 token 搬到 shared/tokens.css——admin 的主題卡「彈幕範例」
  // 也是同一塊舞台，而 admin 不載入 viewer-v2.css。值仍然只能有一份。
  const tokens = fs.readFileSync(path.join(REPO_ROOT, "server/static/css/tokens.css"), "utf8");

  // 深色舞台寫在 .viewer-preview 本體，不再分主題臂。
  // 2026-09-06 設計稿 05/09：舞台底色與字色抽成 --viewer-stage-bg /
  // --viewer-stage-ink，因為樣式抽層裡的預覽是同一塊畫面，值只能有一份。
  expect(tokens).toMatch(
    /--viewer-stage-bg:\s*linear-gradient\(135deg,\s*#02060f,\s*#0a1628\)/,
  );
  expect(tokens).toMatch(/--viewer-stage-ink:\s*#f1f5f9;/);
  expect(css).not.toMatch(/--viewer-stage-bg:\s*linear-gradient/);
  const previewRule = css.match(/\n\.viewer-preview\s*\{(?<body>[^}]*)\}/s);
  expect(previewRule).not.toBeNull();
  expect(previewRule.groups.body).toMatch(/background:\s*var\(--viewer-stage-bg\)/s);
  expect(previewRule.groups.body).toMatch(/color:\s*var\(--viewer-stage-ink\)/);

  // 舊的淺色臂必須整組消失（台、掃描線、kicker、speed、暱稱、字影）
  for (const sel of [
    "\\.viewer-preview",
    "\\.viewer-preview::before",
    "\\.viewer-preview-kicker",
    "\\.viewer-preview-speed",
    "\\.viewer-preview-nick",
    "\\.viewer-preview-text",
  ]) {
    expect(css).not.toMatch(
      new RegExp(`body\\.viewer-body-v2:not\\(\\.is-dark\\)\\s+${sel}\\s*\\{`),
    );
  }

  // 字影留深色版（深底就該用深色投影）
  const previewTextRule = css.match(/\n\.viewer-preview-text\s*\{(?<body>[^}]*)\}/s);
  expect(previewTextRule).not.toBeNull();
  expect(previewTextRule.groups.body).toMatch(/text-shadow:\s*0 2px 4px rgba\(0,\s*0,\s*0,\s*0\.55\);/);
  expect(previewTextRule.groups.body).not.toMatch(/\bcolor\s*:/);
  expect(previewTextRule.groups.body).not.toMatch(/!important/);
});

// 觀眾看得到自己打的字：色票不可以被套到輸入框文字上（淺色白字白底 1.10:1）。
test("viewer swatch colour never leaks onto the sendbar input text", () => {
  const mainJs = fs.readFileSync(path.join(REPO_ROOT, "server/static/js/main.js"), "utf8");
  expect(mainJs).not.toMatch(/elements\.danmuText\.style\.color\s*=/);
  expect(mainJs).toMatch(/elements\.danmuText\.style\.removeProperty\("color"\)/);
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

  // shared/tokens.css migrated to light-dark() (color system v2 Phase 2): the
  // two-track intent — admin text resolves to a bright color on dark, a dark
  // color on light — is now carried by a single light-dark() declaration
  // (light arm = --slate-900 dark ink, dark arm = --slate-100 bright) instead
  // of a static :root value plus a :root[data-theme="light"] override block.
  const rootBlock = tokens.match(/:root\s*\{(?<body>[^}]*)\}/s);
  expect(rootBlock).not.toBeNull();
  // D-2 (2026-07-28): --admin-text* 收斂為 color 層 alias；兩臂值不變
  // （--color-text-primary = light-dark(slate-900, slate-100)），下方一併
  // 釘住 alias 目標的字面定義，確保鏈條終點仍是同一組值。
  expect(rootBlock.groups.body).toMatch(
    /--admin-text:\s*var\(--color-text-primary\);/,
  );
  expect(rootBlock.groups.body).toMatch(
    /--admin-text-strong:\s*var\(--color-text-primary\);/,
  );
  expect(rootBlock.groups.body).toMatch(
    /--color-text-primary:\s*light-dark\(var\(--slate-900\),\s*var\(--slate-100\)\);/,
  );
  // The two arms keep their intended hex identity: slate-100 = #f1f5f9 (bright
  // on dark), slate-900 = #0f172a (dark ink on light).
  expect(tokens).toMatch(/--slate-100:\s*oklch\([^)]*\);\s*\/\*\s*#f1f5f9/);
  expect(tokens).toMatch(/--slate-900:\s*oklch\([^)]*\);\s*\/\*\s*#0f172a/);
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

// 2026-09-06 設計稿 05/14：觀眾端狀態從三處（兩顆 chip ＋底部紅色警語）
// 收成**一顆** chip。詞彙是觀眾想像得到的「大螢幕」，不是內部名詞
// （Desktop / overlay / 彈幕牆）。未開時不再出紅色橫幅，改成灰狀態 chip、
// 一張說明卡，加上送出列下方一行說明——設計稿 05 · V4。
test("viewer screen-off state is one chip plus one inline hint", () => {
  const zh = readJson("server/static/locales/zh/translation.json");
  const en = readJson("server/static/locales/en/translation.json");
  const mainJs = fs.readFileSync(path.join(REPO_ROOT, "server/static/js/main.js"), "utf8");
  const css = fs.readFileSync(path.join(REPO_ROOT, "server/static/css/viewer-v2.css"), "utf8");

  expect(zh.overlayNone).toBe("大螢幕未開");
  expect(zh.overlayConnected).toBe("大螢幕顯示中");
  expect(zh.viewerOfflineHint).toBe("大螢幕開啟後即可送出");
  expect(en.overlayNone).toBe("Screen is off");
  expect(en.overlayConnected).toBe("On the big screen");
  expect(en.viewerOfflineHint).toBe("You can send once the screen is on");
  // 內部名詞不該漏到觀眾端
  expect(zh.overlayNone).not.toMatch(/Desktop|overlay|彈幕牆/i);
  expect(zh.overlayConnected).not.toMatch(/Desktop|overlay|彈幕牆/i);
  expect(JSON.stringify(zh)).not.toContain("請等候 overlay 連線後再發送");

  expect(mainJs).toMatch(/elements\.btnSend\.dataset\.state\s*=\s*"offline";/);
  // 未開時走的是送出列下方那一行說明，不是紅色橫幅（狀態列必須清空）
  expect(mainJs).toMatch(/_setSendbarHint\(ServerI18n\.t\("viewerOfflineHint"\), "offline"\);/);
  expect(mainJs).toMatch(/_setSendbarStatusRow\(""\);\n\s*return;/);
  // 2026-07-29：原本釘死 #ff4d4f，那是**深色臂專用**的亮紅——淺色主題下
  // FIRE 離線態只有 2.72:1。改吃 --viewer-ink-error（light-dark：淺色 red-700
  // ／深色 red-400），淺色 5.38、深色 4.90，兩邊都過 AA。契約現在釘「必須是
  // 會跟主題翻面的 token」而不是某個固定色值。
  expect(css).toMatch(
    /\.viewer-fire-btn\[data-state="offline"\]\s*\{[^}]*color:\s*var\(--viewer-ink-error\);/s,
  );
  const tokensCss = fs.readFileSync(path.join(REPO_ROOT, "server/static/css/viewer-v2.css"), "utf8");
  expect(tokensCss).toMatch(
    /--viewer-ink-error:\s*light-dark\(var\(--red-700\),\s*var\(--red-400\)\);/,
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
  // 2026-07-29 offline font vendoring: overlay shell must never fetch
  // Google Fonts at runtime (assets/fonts woff2 + child.css @font-face).
  expect(childHtml).not.toContain("fonts.googleapis.com");
  expect(childHtml).not.toContain("fonts.gstatic.com");
  expect(overlayJs).toContain("DESKTOP · SILENT MODE");
  expect(overlayJs).toContain("NO DANMU RENDERING · DESKTOP PAUSED");
  expect(overlayJs).not.toContain("OVERLAY · SILENT MODE");
  expect(overlayJs).not.toContain("OVERLAY PAUSED");
  expect(overlayTemplate).toContain("<title>Danmu Fire Desktop</title>");
  expect(overlayTemplate).toContain("DANMU FIRE · DESKTOP");
  expect(overlayTemplate).not.toContain("<title>Danmu Fire Overlay</title>");
  expect(overlayTemplate).not.toContain("DANMU FIRE · OVERLAY");
});

// 2026-09-06 設計稿 14 文案總表：全域名詞 Desktop / Overlay → 顯示層（en:
// Display）。「Desktop」原本同時指桌面 app 和它投出去的那層畫面，主持人問
// 「Desktop 開了沒」時兩邊都說得通——這輪把畫面那一層固定叫顯示層。
// 按鈕只留動詞（開啟／關閉），不再把名詞塞進按鈕標籤。
test("desktop client speaks 顯示層 / Display, not Desktop or Overlay", () => {
  const langs = ["en", "zh", "ja", "ko"];
  const OLD_WORDS = /Overlay|overlay|オーバーレイ|오버레이/;

  const expectedStart = { zh: "開啟", en: "Turn on", ja: "オンにする", ko: "켜기" };
  const expectedStop = { zh: "關閉", en: "Turn off", ja: "オフにする", ko: "끄기" };

  for (const lang of langs) {
    const locale = readJson(`danmu-desktop/locales/${lang}/translation.json`);

    // 主要動作是純動詞，不帶名詞也不帶 ▶ / ■ 圖示（設計稿 14 文案規則）
    expect(locale.overlayButtonStart).toBe(expectedStart[lang]);
    expect(locale.overlayButtonStop).toBe(expectedStop[lang]);
    expect(locale.overlayActionClear).not.toMatch(/[⌫▶■⚡◱]/);
    expect(locale.overlayActionTestDanmu).not.toMatch(/[⌫▶■⚡◱]/);
    expect(locale.overlayActionIdleQr).not.toMatch(/[⌫▶■⚡◱]/);

    // 舊詞彙整組退場：不再有 overlay，也不再拿 Desktop 當畫面的名字
    for (const key of Object.keys(locale)) {
      expect(String(locale[key])).not.toMatch(OLD_WORDS);
    }
    expect(locale.clientOverlayTitle).toBe(
      { zh: "顯示層", en: "Display", ja: "表示レイヤー", ko: "표시 레이어" }[lang],
    );

    // 設計稿 14 刪除清單：kicker 與併頁後的 key 不該再存在
    for (const dead of [
      "overlaySectionTitle", "overlaySectionKicker", "clientNavOverlay",
      "clientNavConn", "clientNavAbout", "connSectionKicker", "updateKicker",
    ]) {
      expect(locale).not.toHaveProperty(dead);
    }
  }
});
