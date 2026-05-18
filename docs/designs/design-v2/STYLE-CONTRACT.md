# Design v2 · Style Contract

**Audience.** Claude Design (claude.ai/design) when iterating on this project.
**Authority.** Overrides anything in component files where they disagree.

---

## 1. Single source of truth — `tokens.jsx`

`docs/designs/design-v2/components/tokens.jsx` defines the global `hudTokens`
object plus shared components: `HudCorners`, `CutPanel`, `HudLabel`,
`StatusDot`, `HudBackdrop`, `MiniBars`, `Sparkline`, `DanmuHero`, `HeroInline`.

Admin pages additionally use `AdminPageShell` (from `admin-pages.jsx`),
`CardHeader`, `KpiTile` (from `admin-v3.jsx`).

**MUST:** read tokens via `hudTokens.<key>`. Reuse the shared components.

**MUST NOT:** define a private token block inside an artboard. The 2026-05-04
handoff broke this rule with `_lc`, `_tab`, `_d504`, `_r768`, `_r480` —
each silently drifted hexes (see §3) and reintroduced forbidden colors (§4).

## 2. Locked palette — only these hexes for these roles

| Role | Hex | Source | Token key |
|---|---|---|---|
| viewport | `#020617` | slate-950 | `bg0` |
| panel | `#0f172a` | slate-900 | `bg1` |
| raised | `#1e293b` | slate-800 | `bg2` |
| row hover | `#334155` | slate-700 | `bg3` |
| text | `#f1f5f9` | slate-100 | `text` |
| text dim | `#94a3b8` | slate-400 | `textDim` |
| text mute | `#64748b` | slate-500 | `textMute` |
| primary | `#38bdf8` | sky-400 | `cyan` |
| live / warn | `#fbbf24` | amber-400 | `amber` |
| healthy | `#86efac` | green-300 | `lime` |
| danger | `#f87171` | red-400 | `crimson` |

## 3. Forbidden hexes (drift traps from 2026-05-04 handoff)

| Wrong hex | What it should be | Why |
|---|---|---|
| `#0A0E1A` | `#020617` (slate-950) | drifted dark bg |
| `#0F1421` | `#0f172a` (slate-900) | drifted panel |
| `#13192C` | `#1e293b` (slate-800) | drifted raised |
| `#172037` | (no equivalent) | invented `raised2` |
| `#84cc16` | `#86efac` (green-300) | wrong lime — too vibrant |
| `#f43f5e` | `#f87171` (red-400) | wrong crimson — too saturated |
| `#1F2944` | use `hudTokens.line` | drifted hairline |

If you need a hex outside this palette, **ask first**. Do not invent.

## 4. Forbidden colors entirely

`tokens.jsx` line 30: `magenta: '#fbbf24'  // DEPRECATED alias — kept so old
refs resolve, but maps to amber`.

The comment at the top of `tokens.jsx` says explicitly:
> NO violet/magenta/purple anywhere — they conflict with codebase tokens.

The 2026-05-04 handoff reintroduced `magenta: '#f472b6'` and `violet: '#a78bfa'`
as active accent colors in 5 files. **This is rejected.** Use the locked
palette in §2. If a status needs a fifth color (beyond cyan/amber/lime/crimson),
ask the owner before inventing.

## 5. Chrome — use `AdminPageShell`

Every admin page MUST wrap in `AdminPageShell`:

```jsx
<AdminPageShell route="<slug>" title="<zh>" en="<KICKER>" theme={theme}>
  {({ panel, raised, line, text, textDim, accent, radius }) => (
    /* page-specific content */
  )}
</AdminPageShell>
```

Do not build private `_TabTopbar`, `_LcTopbar`, `_TabHeader`, etc. The shared
shell handles the topbar/sidebar/route awareness. For new designs, its nav must
follow `HANDOFF-PRIORITY-RESET-2026-05-05.md`'s 8-area IA, not the older
10-nav target from `design-v2-backlog.md` § P0-0.

## 6. Typography

- Display (hero): `"Bebas Neue", "Noto Sans TC", "Noto Sans CJK TC", sans-serif`
  — only via `<DanmuHero>` / `<HeroInline>` from `tokens.jsx`
- Sans (UI): `hudTokens.fontSans`
- Mono (kicker / numeric): `hudTokens.fontMono` (IBM Plex Mono)

Don't substitute `Bebas Neue` for `IBM Plex Mono` in display position;
`hudTokens.fontDisplay` is intentionally `IBM Plex Mono` (HUD aesthetic),
distinct from the `Bebas Neue` Hero lockup.

## 7. Delivery checklist (Claude Design self-verifies before handoff)

- [ ] No `const _<name> = { bg, panel, ... }` token block in the file
- [ ] All colors come from `hudTokens.<key>` references
- [ ] None of the forbidden hexes from §3 appear
- [ ] No `magenta` or `violet` token keys, no `#f472b6` / `#a78bfa`
- [ ] Admin pages wrap in `<AdminPageShell>`
- [ ] Reuses `CardHeader`, `KpiTile`, `HudLabel`, `StatusDot`, `HudCorners`
  from `tokens.jsx` / `admin-v3.jsx` where applicable; does not redefine
- [ ] Hero text uses `<DanmuHero>` / `<HeroInline>`, not raw `<h1>` with
  `Bebas Neue`

## 8. What to paste into the next Claude Design prompt

> Project: danmu-desktop (Electron + Flask). Branch:
> `claude/design-v2-retrofit`. Read these in order before designing anything:
> 1. `docs/designs/design-v2/STYLE-CONTRACT.md` — token / palette / chrome rules
> 2. `docs/designs/design-v2/HANDOFF-PRIORITY-RESET-2026-05-05.md` — current
>    product priority and prototype alignment target
> 3. `docs/designs/design-v2/components/tokens.jsx` — `hudTokens` source of truth
> 4. `docs/designs/design-v2/components/admin-pages.jsx` — `AdminPageShell` wrapper
> 5. `docs/designs/design-v2/components/admin-v3.jsx` — legacy dashboard reference
> 6. `docs/design-v2-backlog.md` — historical content inventory; 2026-05-04
>    10-nav target is superseded by the 2026-05-05 handoff
>
> Constraints: no private token blocks, no magenta/violet, no inventing hexes,
> wrap admin pages in `AdminPageShell`. Pass §7 checklist before delivery.

## 9. Why this contract exists

The 2026-05-04 handoff (`live-console.jsx`, `tab-chrome.jsx`,
`decisions-log-may04.jsx`, `rwd-768.jsx`, `rwd-480.jsx`) introduced visual
drift: silently re-shaded lime / crimson / dark backgrounds, reintroduced
deprecated magenta and violet, built private chrome instead of using
`AdminPageShell`. Visually similar to the codebase, but if these compile
to production CSS we lose coherence and gain N parallel mini-design-systems.

This contract makes the rules explicit so future handoffs converge.
