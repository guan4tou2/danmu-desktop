#!/usr/bin/env node
/**
 * check-css-tokens.mjs — CI lint guarding against new hardcoded hex colors
 * in CSS (2026-07-07 UIUX polish E5 / Track E: token 紀律).
 *
 * Zero-dependency. Scans repo CSS (excluding tokens.css itself, generated
 * tailwind.css output, node_modules, dist, and other build/vendor dirs),
 * extracts every bare hex color literal (#abc / #aabbcc / #aabbccdd), and
 * diffs the current set against a committed baseline
 * (scripts/css-token-baseline.json).
 *
 * Design: this does NOT try to force the ~1000+ pre-existing hex values in
 * this codebase to zero in one pass — Track D/E already migrated a lot of
 * them, but a full sweep is out of scope for a lint gate. Instead it locks
 * in whatever the baseline says today and fails CI only when a CSS file
 * introduces a hex color that is not already accounted for in the
 * baseline's per-file count. This lets in-progress token migration
 * continue (removing hexes only ever *lowers* a file's count, which is
 * always allowed) while blocking regressions (a new PR adding fresh
 * hardcoded colors instead of using var(--...)).
 *
 * Usage:
 *   node scripts/check-css-tokens.mjs            # check against baseline
 *   node scripts/check-css-tokens.mjs --update    # rewrite the baseline to
 *                                                  # match the current tree
 *                                                  # (run after an intentional
 *                                                  # net-reduction sweep, or
 *                                                  # when adding a new CSS
 *                                                  # file that legitimately
 *                                                  # needs starting hexes)
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
    counts[relPath(f)] = countHexColors(content);
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
    const before = baseline[file] ?? 0;
    if (count > before) {
      regressions.push({ file, before, after: count, delta: count - before });
    }
  }

  // New CSS files not in the baseline at all are only a regression if they
  // actually contain hex colors — a brand-new file with zero hexes is fine.
  const newFilesWithHex = Object.keys(current).filter(
    (f) => !(f in baseline) && current[f] > 0,
  );

  if (regressions.length === 0 && newFilesWithHex.length === 0) {
    console.log(
      `✓ check-css-tokens: no new hardcoded hex colors (${Object.keys(current).length} CSS files checked against baseline)`,
    );
    return;
  }

  console.error("✗ check-css-tokens: new hardcoded hex color(s) detected\n");
  for (const r of regressions) {
    console.error(
      `  ${r.file}: ${r.before} → ${r.after} hex colors (+${r.delta}). Use var(--color-...) / var(--...) tokens instead of adding new ones, or run with --update if this is an intentional baseline change.`,
    );
  }
  for (const f of newFilesWithHex) {
    console.error(
      `  ${f}: new file with ${current[f]} hex color(s) not yet in baseline. Use tokens where possible, then run 'node scripts/check-css-tokens.mjs --update' to record the intentional baseline.`,
    );
  }
  console.error(
    "\nSee shared/tokens.css for available design tokens. This check does not require removing existing hex colors — only blocks adding more.",
  );
  process.exitCode = 1;
}

main();
