#!/usr/bin/env node
/**
 * check-css-tokens.test.mjs — behaviour tests for the lint metrics.
 *
 * A baseline ratchet is only worth having if it actually fires. The
 * `themeBlind` metric (D-6 階段 4, 2026-07-29) has two whitelists and a
 * comment-stripping pass, so "does it still catch the thing" is not obvious by
 * reading the regex. These cases pin both directions: known-bad CSS must count,
 * and the deliberately-allowed idioms must NOT — otherwise a future tweak that
 * silently zeroes the metric would look like a clean CI run.
 *
 * Zero-dependency, no fixtures on disk: the counters take a string.
 *
 * Usage: node scripts/check-css-tokens.test.mjs   (also run by `make lint-css`)
 */

import {
  countThemeBlind,
  countBareRgba,
  countOffGridSpacing,
} from "./check-css-tokens.mjs";

/** @type {[string, string, number][]} label, css, expected */
const THEME_BLIND_CASES = [
  // ── must count: theme-blind colour that light mode can't flip ───────────
  ["bare dark-arm hex as color", ".a { color: #7dd3fc; }", 1],
  ["bare dark-arm hex as border-color", ".a { border-color: #f87171; }", 1],
  ["dark-arm hex on a border longhand", ".a { border-top-color: #86efac; }", 1],
  ["dark-arm hex as fill", ".a { fill: #fbbf24; }", 1],
  ["raw scale var, tailwind form", ".a { color: var(--color-slate-600); }", 1],
  ["raw scale var, bare form", ".a { color: var(--sky-400); }", 1],
  ["raw scale var in any property", ".a { box-shadow: 0 0 4px var(--amber-400); }", 1],
  [
    "hits accumulate across rules",
    ".a { color: #7dd3fc; }\n.b { border-color: var(--red-400); }",
    2,
  ],

  // ── must NOT count: the documented whitelists ───────────────────────────
  ["var() fallback idiom is exempt", ".a { color: var(--hud-cyan, #38bdf8); }", 0],
  [
    "nested var() fallback is exempt",
    ".a { color: var(--color-primary, var(--hud-cyan, #38bdf8)); }",
    0,
  ],
  ["semantic token is clean", ".a { color: var(--color-primary); }", 0],
  [
    "semantic tokens that merely look scale-ish",
    ".a { color: var(--color-text-muted); gap: var(--space-4); font-size: var(--text-3xl); border-radius: var(--radius-2xs); }",
    0,
  ],
  [
    "dark-arm hex as background is out of scope (constant-dark surfaces)",
    ".a { background: #38bdf8; }",
    0,
  ],
  [
    "comments do not count",
    "/* never write color: #7dd3fc or var(--sky-400) */\n.a { color: var(--hud-cyan); }",
    0,
  ],
  ["a non-colour numeric var is not a hue", ".a { z-index: var(--layer-100); }", 0],
  ["light-arm hex is not flagged by this metric", ".a { color: #0284c7; }", 0],
];

// A couple of parity cases for the older metrics, so a refactor that breaks
// their shared helpers is caught here too.
const OTHER_CASES = [
  ["rgba: bare literal counts", countBareRgba, ".a { color: rgba(1,2,3,.5); }", 1],
  [
    "rgba: var() fallback is exempt",
    countBareRgba,
    ".a { color: var(--t, rgba(1,2,3,.5)); }",
    0,
  ],
  ["offGrid: 13px gap counts", countOffGridSpacing, ".a { gap: 13px; }", 1],
  ["offGrid: 12px gap is on-grid", countOffGridSpacing, ".a { gap: 12px; }", 0],
  ["offGrid: 2px hairline exempt", countOffGridSpacing, ".a { margin: 2px; }", 0],
];

let failures = 0;
const report = (ok, label, expected, got) => {
  if (!ok) failures += 1;
  console.log(
    `${ok ? "  ok  " : "  FAIL"} ${label} — expected ${expected}, got ${got}`,
  );
};

console.log("themeBlind:");
for (const [label, css, expected] of THEME_BLIND_CASES) {
  const got = countThemeBlind(css);
  report(got === expected, label, expected, got);
}

console.log("other metrics:");
for (const [label, fn, css, expected] of OTHER_CASES) {
  const got = fn(css);
  report(got === expected, label, expected, got);
}

if (failures) {
  console.error(`\n✗ check-css-tokens self-test: ${failures} case(s) failed.`);
  process.exit(1);
}
console.log(
  `\n✓ check-css-tokens self-test: ${THEME_BLIND_CASES.length + OTHER_CASES.length} cases passed.`,
);
