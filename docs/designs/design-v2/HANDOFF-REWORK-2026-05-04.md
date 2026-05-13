# Handoff Rework · 2026-05-04 batch

**To:** Claude Design (claude.ai/design)
**From:** danmu-desktop owner review
**Status:** 5 files need rework before they're considered canonical.

The 2026-05-04 handoff (`live-console.jsx`, `tab-chrome.jsx`,
`decisions-log-may04.jsx`, `rwd-768.jsx`, `rwd-480.jsx`) all share the same
drift pattern. Fix each file per the table below, then redeliver.

## Read first

1. `docs/designs/design-v2/STYLE-CONTRACT.md` — full token / palette / chrome rules
2. `docs/designs/design-v2/components/tokens.jsx` — `hudTokens` source of truth
3. `docs/designs/design-v2/components/admin-pages.jsx` — `AdminPageShell` wrapper
4. `docs/designs/design-v2/components/admin-v3.jsx` — `AdminV3SoftHolo` reference

## Per-file diagnosis (uniform across 5 files)

| File | Private block | Forbidden hexes | Magenta/violet | Uses AdminPageShell? |
|---|---|---|---|---|
| `live-console.jsx` | `_lc` (line 25) | 9 | yes | **no** |
| `tab-chrome.jsx` | `_tab` (line 23) | 9 | yes | **no** |
| `decisions-log-may04.jsx` | `_d504` (line 7) | 8 | yes | **no** |
| `rwd-768.jsx` | `_r768` (line 15) | 8 | yes | **no** |
| `rwd-480.jsx` | `_r480` (line 13) | 8 | yes | **no** |

## Required fixes (apply to ALL 5 files)

### Fix 1 — delete the private token block

Remove the `const _lc = { ... }` (or `_tab`, `_d504`, `_r768`, `_r480`)
block entirely. Replace every `_lc.bg` / `_tab.panel` / `_d504.cyan` / etc.
reference with `hudTokens.<key>`.

`hudTokens` is already on `window` (loaded by `tokens.jsx` before any
artboard runs), so no import statement needed in JSX prototype context.

### Fix 2 — replace forbidden hexes with locked palette

| Forbidden hex (in current files) | Replace with | hudTokens key |
|---|---|---|
| `#0A0E1A` | `#020617` | `hudTokens.bg0` |
| `#0F1421` | `#0f172a` | `hudTokens.bg1` |
| `#13192C` | `#1e293b` | `hudTokens.bg2` |
| `#172037` | (no equivalent — pick `bg2` or `bg3` per usage) | `hudTokens.bg2` / `bg3` |
| `#1F2944` | `rgba(148, 163, 184, 0.18)` | `hudTokens.line` |
| `#84cc16` | `#86efac` | `hudTokens.lime` |
| `#f43f5e` | `#f87171` | `hudTokens.crimson` |
| `#f472b6` (magenta) | use `#fbbf24` `hudTokens.amber` instead | (magenta is deprecated) |
| `#a78bfa` (violet) | use one of cyan/amber/lime/crimson per status | (violet is forbidden) |

### Fix 3 — kill magenta + violet usage entirely

`tokens.jsx` line 30 deprecates `magenta` (alias to `amber`). The header
comment of `tokens.jsx` says: "NO violet/magenta/purple anywhere — they
conflict with codebase tokens." Re-introducing them is rejected.

Wherever the new files use `magenta` (e.g. POLL tag tone) or `violet`
(e.g. PIVOT chip tone), remap to:

- POLL tag (currently `magenta`) → `hudTokens.amber` (it's a "live state" indicator anyway)
- PIVOT / decision pivot (currently `violet`) → `hudTokens.cyan` (primary accent)

If you genuinely need a 5th status color beyond cyan/amber/lime/crimson,
**ask the owner before adding** — do not invent.

### Fix 4 — wrap admin pages in `AdminPageShell`

`live-console.jsx`, `tab-chrome.jsx` (the 4 page mockups), `rwd-768.jsx`,
`rwd-480.jsx` all need to wrap their main content in `AdminPageShell`:

```jsx
<AdminPageShell route="dashboard" title="控制台" en="DASHBOARD · LIVE · 14:02" theme={theme}>
  {({ panel, raised, line, text, textDim, accent, radius }) => (
    /* page-specific body */
  )}
</AdminPageShell>
```

Delete private `_TabTopbar`, `_TabHeader`, `_LcTopbar` etc. — the shell
handles topbar / sidebar / route awareness with the locked 10-nav.

`decisions-log-may04.jsx` is a single-purpose artboard, not an admin
page — it can stay full-bleed without `AdminPageShell`, but still must
use `hudTokens` not `_d504`.

### Fix 5 — reuse shared components

Where any of these are inlined, replace with imports from window:

| Inlined locally | Use instead |
|---|---|
| Private `_TabTopbar` | `AdminPageShell` (it provides the topbar) |
| Private `_TabHeader` | `CardHeader` from `admin-v3.jsx` |
| Private `_Pill` | `HudLabel` from `tokens.jsx` for plain pills |
| Private status dot | `StatusDot` from `tokens.jsx` |
| Private corner brackets | `HudCorners` from `tokens.jsx` |

## Specific to dashboard (live-console.jsx)

After fixing tokens / chrome, also revise structure: the dashboard owner
reviewed the live-console layout (60% feed + 40% stacked quick-action
zones + sidebar) and rejected it as overpacked at 1440×900.

**Replace dashboard layout with `AdminV3SoftHolo`'s 12-col 3-row panel
grid** — see `docs/designs/design-v2/components/admin-v3.jsx` for the
reference implementation. Keep Q1 (compact topbar) and Q3 (toast +
inline complement rule) — both compatible with AdminV3SoftHolo. Q2
(effect strip on dashboard) and Q4 (220px sidebar) are retracted.

Effects do NOT live on the dashboard; they have their own `effects` nav.
Moderator's own actions stay inline in the message feed via per-row
⋯ menu + Q3 inline undo, NOT in a sidebar.

## Re-delivery checklist (per file)

Before redelivering each file, verify:

- [ ] No `const _<name> = { bg, panel, ... }` block in the file
- [ ] Search the file for `#0A0E1A`, `#0F1421`, `#13192C`, `#172037`,
  `#1F2944`, `#84cc16`, `#f43f5e`, `#f472b6`, `#a78bfa` — all return zero hits
- [ ] Search for `magenta:` and `violet:` token keys — zero hits
- [ ] If admin page: wraps in `<AdminPageShell>`
- [ ] Display font for hero text uses `<DanmuHero>` / `<HeroInline>`
- [ ] `live-console.jsx` dashboard section: rewritten to `AdminV3SoftHolo`
  panel grid (KPI strip / 進行中投票 + 快速投票 / 即時訊息 + Widgets)

---

## Round 2 follow-up (2026-05-04 PM, after first redo)

Round 1 result: **partial pass.** Landed:

- ✓ `magenta` / `violet` token keys gone (mapped to amber / cyan via comment)
- ✓ Private `_lc` / `_tab` / `_d504` / `_r768` / `_r480` blocks now alias
  through `hudTokens.<key>` instead of holding raw drift hexes

Owner cleaned up mechanically (commit follows): replaced 47 forbidden
rgba + 24 forbidden hex literals in inline styles. **Do not undo these.**

Round 2 still needs the following — these are STRUCTURAL, not mechanical,
so they need design judgement:

### R2-1 — Wrap admin pages in `AdminPageShell` (priority: high)

`live-console.jsx`, `tab-chrome.jsx` (4 page mockups), `rwd-768.jsx`,
`rwd-480.jsx` are all admin pages but none use `AdminPageShell`. Currently
each builds its own private `_TabTopbar` / inline topbar.

**Required:** Replace the per-file private topbar with `<AdminPageShell
route="..." title="..." en="...">` wrapper. Pass page-specific body as
the children render-prop. The 10-nav structure is the canonical one
locked in `design-v2-backlog.md` § P0-0; `AdminPageShell` already knows it.

`decisions-log-may04.jsx` is a non-admin documentation artboard — exempt.

### R2-2 — Rewrite `live-console.jsx` dashboard structure (priority: high)

Round 1 kept the original "Live Console" layout (60% feed + 40% stacked
quick-action zones + sidebar). Owner reviewed and rejected as overpacked
at 1440×900.

**Required:** Replace `LiveConsoleDashboard` body with the
`AdminV3SoftHolo` 12-col 3-row panel grid:

- Row 1 (span 12): KPI strip — 訊息總數 + 高峰/分鐘 only (no 4-tile rail)
- Row 2: 進行中投票 (span 7) + 快速投票 builder (span 5)
- Row 3: 即時訊息 stream (span 7) + Widgets & Plugins grid (span 5)

See `docs/designs/design-v2/components/admin-v3.jsx` for the reference.

Effects do NOT live on the dashboard. Effects strip removed entirely
from this file. Q4 sidebar removed entirely. Q1 (compact topbar) and
Q3 (toast + inline complement rule) remain locked.

### R2-3 — Fully rewrite `system-accordion.jsx` (priority: high)

The new file shipped in this round is fully off-contract: private
`_sys` block with raw forbidden hexes (`#0A0E1A`, `#84cc16`, `#f43f5e`,
`#f472b6`, `#a78bfa`), zero `hudTokens` references, zero
`AdminPageShell`. The contract was right there in the bundle.

**Required:** Full rewrite from scratch:

1. No private `_sys` block — use `hudTokens` directly
2. No raw forbidden hexes (see §3 of the contract)
3. No magenta / violet keys or values
4. Wrap in `<AdminPageShell route="system" title="系統" en="SYSTEM · ACCORDION">`
5. Use `HudLabel` / `StatusDot` / `CardHeader` shared components
6. 8 sections in the order specified in `design-v2-backlog.md` P0-0:
   `setup, security, firetoken, backup, integrations, wcag, mobile, about`

Owner has NOT carried `system-accordion.jsx` into the repo until this
rewrite ships. Until then, the system accordion does not exist as a
canonical artboard.

### R2-4 — Drop the private alias blocks (priority: low)

Currently round 1 kept `const _lc = { bg: hudTokens.bg0, ... }` as a
local naming alias. Functionally identical to using `hudTokens.bg0`
directly, but adds a layer that future contributors can drift. If
the rewrites in R2-1/R2-2/R2-3 already eliminate these blocks, no
extra work needed. If they survive, drop them and use `hudTokens.<key>`
inline.

---

### Round 2 paste-ready prompt

> Read `docs/designs/design-v2/HANDOFF-REWORK-2026-05-04.md` "Round 2
> follow-up" section + `STYLE-CONTRACT.md` first. Round 1 partial pass
> recognized — token block alias is acceptable as a transitional state.
> Round 2 must address R2-1 (AdminPageShell wrapping for 4 admin
> artboards), R2-2 (`live-console.jsx` dashboard rewrite to AdminV3SoftHolo
> panel grid per `admin-v3.jsx`), R2-3 (full rewrite of
> `system-accordion.jsx` from scratch using `hudTokens` + `AdminPageShell`).
> Same delivery checklist applies.
