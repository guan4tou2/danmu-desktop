# P1 Backlog Audit — 2026-05-18 EOS

After P1 #1 Polls multi-Q ship, audited remaining items. Several were
already implemented but my running EOS doc still listed them as "remaining".
Updating record.

## Actual state

| # | Item | Status | Evidence |
|---|------|--------|----------|
| #1 | Polls multi-Q + per-Q image | ✅ Shipped 2026-05-18 | This session — backend metadata, admin send, viewer hero + dots + timer |
| #2 | Display per-setting compound + live preview | 🟡 Mostly shipped | [admin-display.js:1-27](server/static/js/admin-display.js) already has 6 rows + audience toggle + PreviewCard + SummaryCard. "Compound" gap unclear without design review |
| #3 | Effects user-uploaded `.dme` live preview | ✅ Shipped (P3-2 follow-up) | [admin-effects-mgmt.js:90](server/static/js/admin-effects-mgmt.js#L90) has user-.dme preview cache + `_buildPreviewParams` etc |
| #4 | Sounds per-tile inline volume | ✅ Shipped (P1-2) | [admin-sounds.js:101-110](server/static/js/admin-sounds.js#L101-L110) — 100px `<input type=range>` per tile + debounced POST + label |
| #5 | Fonts subset 按鈕 | 🔴 Not shipped | No `subset` / `pyftsubset` / range picker UI anywhere |

## What's truly left

**Only one real backlog item:** P1 #5 Fonts subset. Requires:
- Backend: `pyftsubset` (fontTools) dep + endpoint `/admin/fonts/<name>/subset` that takes a unicode-range string, produces a stripped .woff2, replaces the original
- Frontend: subset range picker (presets: 中文 BMP / 中文常用 3500 / 中日韓 / Latin only) + warning modal + size preview
- Design: needs to spec the picker UI + size diff display

## Why the drift

Multiple items were marked "remaining" in my running EOS notes but had already been shipped in earlier slices (P0-3, P1-2, P3-2 follow-up). The `docs/IMPROVEMENTS.md` / CHANGELOG should be source of truth; my session memory was outdated.

## P1 #2 Display compound — engineering self-review

The "compound control" framing was vague. Looking at admin-display.js, each
row already exposes:
1. Audience enable pill (per-setting toggle)
2. Default value picker (numeric / color / dropdown depending on type)
3. Min/max range when audience can override
4. Live preview pane updates as you drag

Gaps I can see without design input:
- No undo/snapshot mechanism (you can change defaults but can't see what they were)
- No "reset all to defaults" button
- Range band visual could be more distinct

None of these are blocking. Recommend closing P1 #2 unless design surfaces a concrete improvement target.

## P1 #5 Fonts subset — recommended path

Two-step:
1. **Backend skeleton (1-2h, no design needed)**: add `pyftsubset` to deps, implement `POST /admin/fonts/<name>/subset` taking `unicode_range` (string like `U+0020-007E,U+4E00-9FFF`), shell out to pyftsubset, replace file
2. **Design brief**: spec the picker UI — preset chips vs unicode-range input, size estimate display, before/after warning

Backend can ship first without UI; admin can use it via curl or API tokens.

## Recommendation

- Mark P1 #3 / #4 closed in EOS docs
- P1 #2 close pending design surfacing a concrete gap
- P1 #5 is the only real outstanding item — split into BE skeleton (工程 self-drive) + UI design brief

After P1 #5 BE skeleton, P1 backlog effectively done.
