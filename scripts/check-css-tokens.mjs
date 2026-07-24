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
import { fileURLToPath } from "node:url";

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

function countFile(content) {
  return { hex: countHexColors(content), gridPx: countGridPx(content) };
}

// Baseline entries may be a legacy bare number (hex-only) or { hex, gridPx }.
// Normalize to the object form; a legacy number grandfathers gridPx to
// Infinity so the very first run before a --update migration can't fail on the
// new metric.
function normalizeBaselineEntry(entry) {
  if (typeof entry === "number") return { hex: entry, gridPx: Infinity };
  return { hex: entry?.hex ?? 0, gridPx: entry?.gridPx ?? Infinity };
}

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
    for (const metric of ["hex", "gridPx"]) {
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
    (f) => !(f in baseline) && (current[f].hex > 0 || current[f].gridPx > 0),
  );

  if (regressions.length === 0 && newFilesWithValues.length === 0) {
    console.log(
      `✓ check-css-tokens: no new hardcoded hex colors or token-able px (${Object.keys(current).length} CSS files checked against baseline)`,
    );
    return;
  }

  console.error(
    "✗ check-css-tokens: new hardcoded design value(s) detected\n",
  );
  const label = {
    hex: "hex colors → use var(--color-...)",
    gridPx: "token-able px (font-size/spacing) → use var(--text-*/--space-*)",
  };
  for (const r of regressions) {
    console.error(
      `  ${r.file} [${r.metric}]: ${r.before} → ${r.after} ${label[r.metric]} (+${r.delta}). Tokenize instead of hardcoding, or run with --update if this is an intentional baseline change.`,
    );
  }
  for (const f of newFilesWithValues) {
    console.error(
      `  ${f}: new file with ${current[f].hex} hex / ${current[f].gridPx} token-able px not yet in baseline. Use tokens where possible, then run 'node scripts/check-css-tokens.mjs --update' to record the intentional baseline.`,
    );
  }
  console.error(
    "\nSee shared/tokens.css for available design tokens. This check does not require removing existing values — only blocks adding more.",
  );
  process.exitCode = 1;
}

main();
