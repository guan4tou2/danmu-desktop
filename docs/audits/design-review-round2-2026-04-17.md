# Design Review Round 2 — Full-Site Audit

- **Date:** 2026-04-17
- **Branch:** `feat/design-review-round1`
- **Scope:** Homepage (`/`) + Admin dashboard (`/admin/`), desktop + tablet + mobile
- **References studied:** [design-for-ai](https://github.com/ryanthedev/design-for-ai), [impeccable.style](https://impeccable.style/), [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- **Classifier:** HYBRID — `/` is marketing-leaning (hero + brand), `/admin/` is APP UI

---

## First Impression

The site communicates **dark, technical, gaming-adjacent**. It is a danmu (bullet-comment) control panel that takes its visual chrome seriously: sky-blue accent, strong brand typography, atmospheric particle background.

What stands out: the hero "Danmu Fire" title at 83px sets strong brand presence. The live status chips (伺服器/Overlay) create immediate clarity about system state. The composer two-column layout (input + preview) is thoughtful — shows craft.

First three eye targets: **1) "Danmu Fire" title, 2) "發射彈幕" send button, 3) connection status chips**. Hierarchy is intentional.

One word: **functional with craft**.

**Verdict:** this is not AI slop. It is a purposeful dark-mode tool UI. The issues below are polish, not identity problems.

---

## Inferred Design System

### Tokens — good foundation (`server/static/css/tokens.css`)

- **Brand:** `--color-primary: #38bdf8` (sky-400), `--color-accent: #06b6d4` (cyan)
- **Surface:** 7 graded backgrounds, rgba-based for glass effect
- **Semantic:** success / warning / error defined
- **Typography:** `--font-family: "Poppins"` declared (loaded from Google Fonts)
- **Radius:** sm/md/lg/xl/pill — proper scale

### Observed at runtime

| Axis | State | Notes |
|---|---|---|
| **Fonts** | 3 families | Poppins + system fallback + monospace. System stack renders on many elements (Tailwind preflight not fully overridden). |
| **Color palette** | 33 unique | A lot — but mostly rgba variants of same surfaces. Acceptable for glassmorphism. |
| **Heading scale (admin, before fix)** | H1=36, H2=16-18, H3=18, H4=12-16 | **Broken**: H2 and H3 identical. |
| **Heading scale (admin, after fix)** | H1=36, H2=24, H3=16, H4=14 | Proper cascade. |
| **Touch targets (before fix)** | 15 undersized | Effect buttons 26-30px, range tracks 6px |
| **Touch targets (after fix)** | Effect buttons 44px | Range tracks unchanged (native control, handled by thumb hit area) |
| **Spacing** | Mixed | Mostly systematic 4px-grid via `rem` increments; some arbitrary values (0.72, 0.78, 0.82, 0.86rem) |

---

## Hard-rule classifier results

### HYBRID classification

`/` is marketing-leaning (hero band, brand chrome, one strong CTA). `/admin/` is APP UI (workspace-driven, data-dense, scoped sections).

### Litmus scorecard

| # | Check | Verdict |
|---|---|---|
| 1 | Brand/product unmistakable in first screen? | **YES** — "Danmu Fire" brand typography carries |
| 2 | One strong visual anchor present? | **YES** — hero title |
| 3 | Page understandable by scanning headlines only? | **YES** (after F-002 fix — before, H2/H3 were ambiguous) |
| 4 | Each section has one job? | **YES** — admin's 3 major H2 sections (Live / Moderation / Assets) are clean |
| 5 | Are cards actually necessary? | **MIXED** — composer card yes (IS interaction), admin summary cards are decorative (flagged as F-005 in round 1) |
| 6 | Does motion improve hierarchy or atmosphere? | **YES** — fadeInScaleUp on load, pulse-dot on connecting state, all purposeful |
| 7 | Would design feel premium with all decorative shadows removed? | **MOSTLY YES** — shadows are restrained, glow-primary is the one flourish |

### Hard rejection patterns

None of the 7 hard rejection criteria fired.

### AI slop blacklist

- Purple/violet gradients: **no** (root tokens are sky/cyan; admin.js historical emissions already overridden to sky via round-1 `!important` block)
- 3-column feature grid: **no** — admin summary strip is 3-column but reads as stat-cards, not feature marketing
- Icons in colored circles: **no**
- Centered everything: **no** — content is left-aligned as app UI should be
- Uniform bubbly radius: **mostly ok** — radius tokens vary sensibly
- Decorative blobs/blurs: one radial gradient in `.admin-shell::before`, restrained
- Emoji as design: **no**
- Colored left-border cards: **no**
- Generic hero copy: **no** — "把你的訊息送上螢幕！" is product-specific
- Cookie-cutter section rhythm: **no** — sections have distinct functional shapes

---

## Findings (10 total)

### Fixed this round (7)

| # | Title | Impact | Commit |
|---|---|---|---|
| F-001 | `transition: all` on range controls | High | `2badbfc` |
| F-002 | Admin H2 = H3 font-size (18px) broke hierarchy | High | `1af3281` |
| F-003 | Missing `color-scheme: dark` on `<html>` | High | `6f6b2d3` |
| F-005 | Buttons missing `cursor: pointer` (10+) | Medium | `e745e0d` |
| F-006 | No `prefers-reduced-motion` support | Medium | `4d8b7d8` |
| F-007 | No skip-link on admin page | Medium | `3f91c6a` |
| F-008 | Effect buttons 26-30px (below 44px WCAG) | Medium | `be28d6f` |

### Deferred (3)

| # | Title | Impact | Why deferred |
|---|---|---|---|
| F-004 | 14 `!important` overrides mapping violet→sky in admin.js emissions | High | Architectural — needs search-replace across admin.js to remove upstream violet class emissions. Covered by round-1 FINDING-004. |
| F-009 | Spacing uses non-8px-grid values (0.72, 0.78, 0.82, 0.86rem) | Polish | Widespread; requires token introduction (`--space-*`) and grep-replace. Better as a dedicated refactor. |
| F-010 | Poppins is #8 most-used Google Font (AI-slop adjacent) | Polish | Brand-level decision. Defer to `/design-consultation` for typography direction. |

---

## Verification

All 7 fixes verified live via Preview at 1280×900:

- Homepage: composer layout intact, cursor states correct on send button
- Admin: login → dashboard renders with `H2 24px > H3 16px` cascade
- Touch targets: effect buttons `offsetHeight: 44` (was 30)
- Missing-pointer buttons: `0/21` (was 10+)
- Skip-link focus-visible: renders, CSS loaded via `fetch('/static/css/style.css')` confirms deployment

---

## Grade deltas

| Category | Before | After | Δ |
|---|---|---|---|
| Visual Hierarchy | B− | B+ | +1 (F-002) |
| Typography | C+ | B | +1 (F-002) |
| Color & Contrast | B | B+ | +0.5 (F-003) |
| Spacing & Layout | B | B | 0 (F-009 deferred) |
| Interaction States | C+ | B+ | +1.5 (F-005, F-007) |
| Responsive | A− | A− | 0 |
| Motion & A11y | C | B+ | +2 (F-001, F-006) |
| Content Quality | B+ | B+ | 0 |
| AI Slop | A− | A− | 0 (already clean) |

**Design Score:** B → B+
**AI Slop Score:** A− → A−

---

## Suggested next steps

1. **F-004 cleanup** (largest architectural debt): search-replace violet/purple Tailwind classes in `server/static/js/admin.js` → sky/cyan, then delete the `!important` override block in `style.css:22-62`. Codex round-2 territory.
2. **F-009 spacing tokens**: introduce `--space-1` through `--space-8` on a 4px grid, grep-replace arbitrary `rem` values.
3. **F-010 typography pass**: run `/design-consultation` to explore 3 brand-forward type pairings to replace Poppins.
4. **Round 3 audit** focus: interaction micro-details — toast positioning, modal focus trap, keyboard nav through collapsed `<details>` sections.

---

## Outside voices

Both outside voices (Codex source audit + Claude subagent consistency review) attempted but failed due to session cwd state corruption — the server's cwd was set to `server/` via a background process which later invalidated tool invocations. Findings in this report are single-model (primary agent direct inspection). Recommend re-running round 3 after session restart for cross-model consensus.
