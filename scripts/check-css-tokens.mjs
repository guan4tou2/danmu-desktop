#!/usr/bin/env node
/**
 * check-css-tokens.mjs — CI lint guarding against new hardcoded design values
 * in CSS (2026-07-07 UIUX polish E5 / Track E: token 紀律).
 *
 * Zero-dependency. Scans repo CSS (excluding tokens.css itself, generated
 * tailwind.css output, node_modules, dist, and other build/vendor dirs) and
 * diffs two per-file metrics against a committed baseline
 * (scripts/css-token-baseline.json):
 *
 *   1. hex    — bare hex color literals (#abc / #aabbcc / #aabbccdd) that
 *               should be var(--color-...).
 *   2. gridPx — font-size / spacing (gap · margin* · padding*) declarations
 *               written as a literal px that EXACTLY matches a design token
 *               (font-size 12/14/16/18/20/24/30px → var(--text-*);
 *                spacing 4/8/12/16/20/24/32px → var(--space-*)). These are
 *               values that could be a token with zero visual change but
 *               are still hardcoded. Off-grid values (10/11/13px, 6/7px …)
 *               are NOT counted — they have no exact token, so flagging them
 *               would be noise. Element sizing (width/height/…) is excluded
 *               too — --space-* is a spacing semantic, not a dimension.
 *   3. rgba   — bare rgb()/rgba() color literals that are NOT already the
 *               fallback of a var(--token, rgba(...)) declaration. The folded
 *               idiom var(--token, rgba(...)) is the *desired* end state (Batch
 *               2a/2b, #120), so an rgba serving as a var() fallback does NOT
 *               count — that means folding a bare literal into a token always
 *               LOWERS this count (rewarding the retrofit), while a freshly
 *               hardcoded rgba raises it (a regression). Like hex/gridPx this
 *               does not force existing literals to zero; it locks in today's
 *               count and only fails when a file grows.
 *   4. themeBlind — colours that can't follow the light/dark theme: raw colour
 *               ramp references (var(--sky-400) / var(--color-slate-600)) and
 *               known dark-arm hex literals used directly as color/border-color.
 *               tokens.css defines the light-dark() semantics; anything that
 *               bypasses it is frozen on the dark arm and turns unreadable in
 *               light mode. var(--token, #darkarm) fallbacks are exempt (same
 *               reasoning as rgba: that idiom is the desired end state).
 *
 * Design: this does NOT try to force the pre-existing values to zero in one
 * pass — a full sweep is out of scope for a lint gate (Issue #120 tracks the
 * incremental retrofit). Instead it locks in whatever the baseline says today
 * and fails CI only when a file's hex OR gridPx count goes UP. Removing a hex
 * or tokenizing a grid px only ever *lowers* a count (always allowed); adding
 * a fresh hardcoded color / re-hardcoding a token-able size is a regression.
 *
 * Baseline format: per file, either a bare number (legacy = hex-only count,
 * still accepted on read) or { hex, gridPx }. Run --update to migrate/refresh.
 *
 * Usage:
 *   node scripts/check-css-tokens.mjs            # check against baseline
 *   node scripts/check-css-tokens.mjs --update    # rewrite the baseline to
 *                                                  # match the current tree
 *                                                  # (run after an intentional
 *                                                  # net-reduction sweep, or
 *                                                  # when adding a new CSS
 *                                                  # file that legitimately
 *                                                  # needs starting values)
 */

import { readFileSync, writeFileSync, existsSync, realpathSync } from "node:fs";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const BASELINE_PATH = path.join(__dirname, "css-token-baseline.json");

const EXCLUDE_DIR_NAMES = new Set([
  "node_modules",
  "dist",
  "pack",
  ".git",
  ".claude", // session worktrees under .claude/worktrees/ duplicate every CSS file
  ".venv",
  "__pycache__",
  "htmlcov",
]);

// Files that are the token system itself, or generated output — not subject
// to the "no new hardcoded hex" rule.
const EXCLUDE_FILENAMES = new Set(["tokens.css", "tailwind.css"]);

function walk(dir, out) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (EXCLUDE_DIR_NAMES.has(entry.name)) continue;
      walk(path.join(dir, entry.name), out);
    } else if (entry.isFile() && entry.name.endsWith(".css")) {
      if (EXCLUDE_FILENAMES.has(entry.name)) continue;
      out.push(path.join(dir, entry.name));
    }
  }
  return out;
}

// Matches #abc, #aabbcc, #aabbccdd (3/4/6/8 hex digits), case-insensitive,
// not preceded by another hex digit or '&' (avoids HTML entities) and not
// part of a longer alphanumeric token.
const HEX_COLOR_RE = /#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g;

function countHexColors(content) {
  const matches = content.match(HEX_COLOR_RE);
  return matches ? matches.length : 0;
}

// px values that map 1:1 onto a design token (zero visual change at 16px rem).
const FONT_TOKEN_PX = new Set([12, 14, 16, 18, 20, 24, 30]); // --text-xs … --text-3xl
const SPACE_TOKEN_PX = new Set([4, 8, 12, 16, 20, 24, 32]); //  --space-1 … --space-8
// Spacing props only — element sizing (width/height/inset/border*) is excluded
// on purpose so a `width: 16px` dimension is never mistaken for spacing.
const SPACE_PROP_RE =
  /\b(?:gap|row-gap|column-gap|margin|margin-top|margin-bottom|margin-left|margin-right|padding|padding-top|padding-bottom|padding-left|padding-right)\s*:\s*([^;{}]+)/gi;
const FONT_SIZE_RE = /\bfont-size\s*:\s*(\d+)px/gi;
const COMMENT_RE = /\/\*[\s\S]*?\*\//g;

// Count declarations that hardcode a px which exactly equals a token — i.e.
// values that a zero-risk retrofit could replace with var(--text-*/--space-*).
function countGridPx(content) {
  const src = content.replace(COMMENT_RE, ""); // ignore px mentioned in comments
  let n = 0;

  for (const m of src.matchAll(FONT_SIZE_RE)) {
    if (FONT_TOKEN_PX.has(Number(m[1]))) n += 1;
  }

  for (const m of src.matchAll(SPACE_PROP_RE)) {
    const value = m[1];
    // A spacing value may be shorthand ("16px 8px"): count each px term that
    // maps to a token. var(...) terms carry no bare px so they're ignored.
    for (const px of value.matchAll(/(\d+)px/g)) {
      if (SPACE_TOKEN_PX.has(Number(px[1]))) n += 1;
    }
  }

  return n;
}

// A bare rgb()/rgba() is a hardcoded color. One that appears as the fallback of
// var(--token, rgba(...)) is already tokenized (the repo idiom) and must NOT
// count — otherwise folding a literal into a token wouldn't lower the metric.
// rgb()/rgba() args are plain numbers/percentages (no nested parens), so the
// simple [^)]* body match is safe. Strip the folded idiom first, then tally what
// remains. var(--a, var(--b, rgba(...))) nests the rgba one level deeper, so we
// peel var(...) fallbacks repeatedly until the pass stops removing any.
const VAR_FALLBACK_RGBA_RE = /var\(\s*--[\w-]+\s*,\s*rgba?\([^)]*\)\s*\)/gi;
const BARE_RGBA_RE = /\brgba?\(/gi;

function countBareRgba(content) {
  let prev;
  let src = content;
  do {
    prev = src;
    src = src.replace(VAR_FALLBACK_RGBA_RE, "var(--tokenized)");
  } while (src !== prev);
  const matches = src.match(BARE_RGBA_RE);
  return matches ? matches.length : 0;
}

// D-1 (2026-07-28 拍板「全面遷移 4px 格」): spacing px values must sit on the
// 4px grid. Allowed: multiples of 4, plus 0/1/2 (hairlines and micro-gaps —
// the documented sub-grid exceptions). calc() values are skipped, matching
// the migration codemod. After the sweep this count is 0 for the two big
// files; the ratchet keeps any new off-grid value out.
function countOffGridSpacing(content) {
  const src = content.replace(COMMENT_RE, "");
  let n = 0;
  for (const m of src.matchAll(SPACE_PROP_RE)) {
    const value = m[1];
    if (value.includes("calc(")) continue;
    for (const px of value.matchAll(/(\d+(?:\.\d+)?)px/g)) {
      const v = Number(px[1]);
      if (!Number.isInteger(v)) continue; // fractional = intentional hairline
      if (v <= 2) continue;
      if (v % 4 !== 0) n += 1;
    }
  }
  return n;
}

// D-6 階段 4 (2026-07-29): 主題盲值。D-2 的色彩收斂只做在 token 層 ——
// tokens.css 有 36 個 light-dark() 正確處理雙主題，但繞過 token 的規則永遠停在
// 深色臂，淺色模式就會出現白底上的深色臂顏色。這個指標擋兩類回歸：
//
//   (a) 原始色階：`var(--sky-400)` / `var(--color-slate-600)` 這種「色環上的
//       第幾階」。它按定義就是主題無關的 —— 會翻轉的是語意 token
//       （--color-primary / --hud-* 都已經是 light-dark()）。
//   (b) 已知深色臂 hex 直接當文字／邊框色：`color: #7dd3fc`。
//
// 兩個白名單（照 rgba 指標的同一套邏輯）：
//   * tokens.css / tailwind.css 整檔豁免（EXCLUDE_FILENAMES）—— 色階本來就
//     定義在那裡。
//   * `var(--token, #38bdf8)` 這個 fallback 慣用法不算：它是 #120 retrofit
//     想要的終點，深色臂 hex 只是 token 不存在時的保險。跟 rgba 指標一樣，
//     把裸值折進 token 只會讓數字下降（獎勵 retrofit），新寫死才會上升。
//
// (b) 只看 color / border-color 這類「前景」屬性。background 用深色臂 hex 也
// 是主題盲，但 overlay.css 那種恆定深色表面是刻意的，先不擴大範圍 —— 前景色
// 才是淺色模式下真的看不見的那個。
const RAW_SCALE_HUES =
  "slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose";
const RAW_SCALE_VAR_RE = new RegExp(
  String.raw`var\(\s*--(?:color-)?(?:${RAW_SCALE_HUES})-\d{2,3}\b`,
  "gi",
);

// 深色臂字面值：tokens.css 裡各 light-dark() 的「深色那一半」。
const DARK_ARM_HEX_RE =
  /#(?:38bdf8|7dd3fc|86efac|a3e635|4ade80|22d3ee|fbbf24|f87171|fca5a5|ff4d4f)\b/gi;
const FOREGROUND_COLOR_PROP_RE =
  /(?:^|[;{])\s*(?:color|border-color|border-(?:top|right|bottom|left)-color|outline-color|text-decoration-color|caret-color|fill|stroke)\s*:\s*([^;{}]+)/gi;
// 帶 fallback 的 var()。反覆剝除以處理巢狀 var(--a, var(--b, #hex))；替換成
// 不含括號的字面，下一輪外層才咬得到。
const VAR_WITH_FALLBACK_RE = /var\(\s*--[\w-]+\s*,\s*[^()]*\)/gi;

function stripVarFallbacks(value) {
  let prev;
  let src = value;
  do {
    prev = src;
    src = src.replace(VAR_WITH_FALLBACK_RE, "TOKENIZED");
  } while (src !== prev);
  return src;
}

function countThemeBlind(content) {
  // 註解裡列出禁用色（像這個檔案上面那段說明）不該讓 lint 自己變紅。
  const src = content.replace(COMMENT_RE, "");
  let n = 0;

  const rawScale = src.match(RAW_SCALE_VAR_RE);
  if (rawScale) n += rawScale.length;

  for (const m of src.matchAll(FOREGROUND_COLOR_PROP_RE)) {
    const bare = stripVarFallbacks(m[1]);
    const hits = bare.match(DARK_ARM_HEX_RE);
    if (hits) n += hits.length;
  }

  return n;
}

function countFile(content) {
  return {
    hex: countHexColors(content),
    gridPx: countGridPx(content),
    rgba: countBareRgba(content),
    offGrid: countOffGridSpacing(content),
    themeBlind: countThemeBlind(content),
  };
}

// Baseline entries may be a legacy bare number (hex-only) or
// { hex, gridPx[, rgba] }. Normalize to the object form; any metric absent from
// an older baseline is grandfathered to Infinity so the first run before an
// --update migration can't fail on a newly-added metric.
function normalizeBaselineEntry(entry) {
  if (typeof entry === "number")
    return { hex: entry, gridPx: Infinity, rgba: Infinity };
  return {
    hex: entry?.hex ?? 0,
    gridPx: entry?.gridPx ?? Infinity,
    rgba: entry?.rgba ?? Infinity,
    offGrid: entry?.offGrid ?? Infinity,
    themeBlind: entry?.themeBlind ?? Infinity,
  };
}

// 單一來源：新增指標時只改這裡（外加 countFile / normalizeBaselineEntry）。
const METRICS = ["hex", "gridPx", "rgba", "offGrid", "themeBlind"];

function relPath(p) {
  return path.relative(REPO_ROOT, p).split(path.sep).join("/");
}

function collectCurrentCounts() {
  const files = walk(REPO_ROOT, []);
  // De-duplicate symlinked files that resolve to the same real path (e.g.
  // danmu-desktop/hud.css and server/static/css/hud.css both -> shared/hud.css)
  // so the same physical file isn't counted/scanned twice under different
  // aliases and doesn't double-flag the same new hex.
  const seenReal = new Map(); // realpath -> first relPath encountered
  const counts = {};
  for (const f of files.sort()) {
    let real;
    try {
      real = realpathSync(f);
    } catch {
      continue;
    }
    if (seenReal.has(real)) continue;
    seenReal.set(real, f);
    const content = readFileSync(f, "utf8");
    counts[relPath(f)] = countFile(content);
  }
  return counts;
}

function loadBaseline() {
  if (!existsSync(BASELINE_PATH)) return {};
  return JSON.parse(readFileSync(BASELINE_PATH, "utf8"));
}

function main() {
  const args = process.argv.slice(2);
  const shouldUpdate = args.includes("--update");

  const current = collectCurrentCounts();

  if (shouldUpdate) {
    writeFileSync(BASELINE_PATH, JSON.stringify(current, null, 2) + "\n");
    console.log(`✓ Baseline updated: ${BASELINE_PATH}`);
    console.log(`  ${Object.keys(current).length} CSS files tracked.`);
    return;
  }

  const baseline = loadBaseline();
  const regressions = [];

  for (const [file, count] of Object.entries(current)) {
    const before = normalizeBaselineEntry(baseline[file] ?? 0);
    for (const metric of METRICS) {
      if (count[metric] > before[metric]) {
        regressions.push({
          file,
          metric,
          before: before[metric],
          after: count[metric],
          delta: count[metric] - before[metric],
        });
      }
    }
  }

  // New CSS files not in the baseline at all are only a regression if they
  // actually contain something to flag — a brand-new file with zero of both
  // metrics is fine.
  const newFilesWithValues = Object.keys(current).filter(
    (f) => !(f in baseline) && METRICS.some((m) => current[f][m] > 0),
  );

  if (regressions.length === 0 && newFilesWithValues.length === 0) {
    console.log(
      `✓ check-css-tokens: no new hardcoded hex, token-able px, bare rgba, off-grid spacing, or theme-blind colour (${Object.keys(current).length} CSS files checked against baseline)`,
    );
    return;
  }

  console.error(
    "✗ check-css-tokens: new hardcoded design value(s) detected\n",
  );
  const label = {
    hex: "hex colors → use var(--color-...)",
    gridPx: "token-able px (font-size/spacing) → use var(--text-*/--space-*)",
    rgba: "bare rgb()/rgba() → fold into var(--token, rgba(...))",
    offGrid: "off-grid spacing px → use the 4px grid (0/1/2 hairlines exempt)",
    themeBlind:
      "theme-blind colour (raw --<hue>-<step> scale, or a dark-arm hex as color/border-color) → use a light-dark() semantic token such as --color-primary / --hud-amber / --color-text-muted",
  };
  for (const r of regressions) {
    console.error(
      `  ${r.file} [${r.metric}]: ${r.before} → ${r.after} ${label[r.metric]} (+${r.delta}). Tokenize instead of hardcoding, or run with --update if this is an intentional baseline change.`,
    );
  }
  for (const f of newFilesWithValues) {
    const summary = METRICS.map((m) => `${current[f][m]} ${m}`).join(" / ");
    console.error(
      `  ${f}: new file (${summary}) not yet in baseline. Use tokens where possible, then run 'node scripts/check-css-tokens.mjs --update' to record the intentional baseline.`,
    );
  }
  console.error(
    "\nSee shared/tokens.css for available design tokens. This check does not require removing existing values — only blocks adding more.",
  );
  process.exitCode = 1;
}

// 指標函式導出供測試直接呼叫（見 scripts/check-css-tokens.test.mjs）。只有
// 當作 CLI 執行時才跑 main()，import 這個模組不該有副作用。
export {
  countHexColors,
  countGridPx,
  countBareRgba,
  countOffGridSpacing,
  countThemeBlind,
  countFile,
  METRICS,
};

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  main();
}
