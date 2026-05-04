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
