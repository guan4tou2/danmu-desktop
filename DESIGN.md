# Danmu Fire — Design System

**Status:** DRAFT (F-010 exploration, 2026-04-20)
**Owner:** project maintainer
**Source of truth for:** color, typography, spacing, motion, voice

---

## Product positioning

**Danmu Fire** is a live-streaming danmu (barrage / bullet-comment) controller for Taiwan- and Asia-leaning streamers. Two interfaces:

1. **`/` — composer** (main UI): streamers type a message, tune its style, and launch it to the overlay. Marketing-leaning in shape (hero + strong CTA) but the CTA is literal: press button, message flies.
2. **`/admin/` — control dashboard**: data-dense admin for moderation, effects, history, integrations.

**Personality target:** fire, heat, arcade energy, night-time, adrenaline. NOT corporate SaaS, NOT Material Design, NOT Twitch bot.

**Reference products:**
- ✅ OBS (utilitarian, dark, technical)
- ✅ ニコニコ動画 (bullet-comment DNA, anime/gamer crowd)
- ✅ Arcade marquees, CRT-era streaming graphics
- ❌ Streamlabs (too marketing-ish)
- ❌ Material Design (too neutral)

---

## Color system

Canonical tokens live in `shared/tokens.css` (symlinked to `server/static/css/tokens.css`).

### Brand

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#38bdf8` (sky-400) | Accent, CTA, links, focus ring |
| `--color-primary-hover` | `#0ea5e9` (sky-500) | Hover state for primary |
| `--color-accent` | `#06b6d4` (cyan-500) | Charts, secondary emphasis |

### Surface

| Token | Value | Use |
|---|---|---|
| `--color-bg-deep` | `#000000` | Body background |
| `--color-bg-base` | `#0f172a` (slate-900) | Cards, containers |
| `--color-bg-elevated` | `#1e293b` (slate-800) | Elevated surfaces, modals |
| `--color-bg-card` | `rgba(15, 23, 42, 0.75)` | Glass-morphism panels |

### Semantic

| Token | Value | Use |
|---|---|---|
| `--color-success` | `#22c55e` | Connected status, positive actions |
| `--color-warning` | `#eab308` | Connecting, cautions |
| `--color-error` | `#ef4444` | Disconnected, destructive actions |

**Rule:** no hardcoded hex / rgba in component CSS. If a new color is needed, add a token first.

---

## Typography (PROPOSED — F-010)

### The bilingual problem

Danmu Fire's UI is ~70% Traditional Chinese. Currently:

- **Latin text** renders in Poppins (loaded from Google Fonts)
- **Chinese text** falls through to `ui-sans-serif, system-ui` — OS default (PingFang on macOS, Microsoft YaHei on Windows, Noto Sans CJK on Linux)

**This means the brand has no type control over the majority of the UI.** Fixing Poppins without addressing CJK is half a solution.

### Recommended direction: Candidate D — "Display hero + neutral body"

```css
:root {
  /* Hero "Danmu Fire" wordmark only — arcade marquee personality */
  --font-display: "Bebas Neue", "Noto Sans TC", sans-serif;

  /* Everything else — UI, body, CJK */
  --font-brand: "Noto Sans TC", "Noto Sans", system-ui, sans-serif;
  --font-ui: "Noto Sans TC", "Noto Sans", system-ui, sans-serif;

  /* Code, numbers, technical data */
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}

/* Apply display only to specific hero elements */
.server-hero-title,
.admin-hero-wordmark {
  font-family: var(--font-display);
  letter-spacing: 0.03em;
  font-weight: 400; /* Bebas Neue only ships 1 weight */
}
```

**Why:**
- Hero gets real brand personality (Bebas Neue = arcade marquee, narrow caps, high impact)
- Body/UI gets a designed-for-screen pan-CJK face (Noto Sans TC, 9 weights, matching Latin x-height)
- CJK no longer falls through to OS guess
- Mono (JetBrains Mono) handles all numeric/code surfaces with proper tabular figures

### Alternatives considered

| Candidate | Approach | Verdict |
|---|---|---|
| A · Responsible | Noto Sans TC everywhere + JetBrains Mono | Safe but generic. No brand lift. |
| B · Tech | IBM Plex Sans TC + Plex Mono | More character than Noto, but TC weight range thinner. Consider if brand wants "tool-oriented" over "performance-oriented." |
| C · Dual-star | Geist (Latin) + Noto (CJK) + Geist Mono | x-height mismatch in mixed strings causes visible wobble. Reject. |
| D · Display ★ | Bebas Neue hero + Noto body | Chosen. Maximum personality-to-risk ratio. |

### Type scale (already in `tokens.css` as of v4.6.0)

```css
--text-2xs: 0.75rem;   /* 12px — kicker, caption */
--text-xs: 0.75rem;    /* 12px — small label */
--text-sm: 0.875rem;   /* 14px — secondary body */
--text-base: 1rem;     /* 16px — body */
--text-lg: 1.125rem;   /* 18px — emphasis */
--text-xl: 1.25rem;    /* 20px — card heading */
--text-2xl: 1.5rem;    /* 24px — section heading */
--text-3xl: 1.875rem;  /* 30px — page heading */
```

**Display sizes (hero only, no token):** `clamp(2.8rem, 7vw, 5.2rem)`.

### Font loading strategy

Current: single `@import` of Poppins in `admin.html` + `index.html` `<head>`.

Recommended:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+TC:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
  rel="stylesheet"
/>
```

- `display=swap` = show fallback immediately, swap in when loaded (no FOIT)
- Preconnect = shave ~100-200ms on first paint
- Bebas only needs 1 weight. Noto TC needs 5 (400 / 500 / 600 / 700 / 800). Mono needs 3.
- Total additional weight: ~240KB over current Poppins setup (acceptable — gets cached after first load)

### Migration cost

- **Tokens:** add `--font-display`, `--font-brand`, `--font-ui`, `--font-mono` to `shared/tokens.css`
- **Templates:** update `@font-face` imports in `admin.html` + `index.html`
- **CSS:** change `--font-family: "Poppins"` → use new tokens. Scoped override for `.server-hero-title` and `.admin-hero-wordmark`.
- **Testing:** visual regression at 1280/768/375 × 4 languages (zh/ja/ko/en)

**Effort:** ~30 min with CC + design review verification.

---

## Spacing system

See `shared/tokens.css` — `--space-1` (4px) through `--space-8` (32px), 4px grid.

Rule: no arbitrary rem values in component CSS. Use tokens or Tailwind utilities backed by Tailwind's default 4px scale.

---

## Motion

- **Duration:** 50-700ms; most interactions 150-250ms
- **Easing:** `ease-out` for entering, `ease-in` for exiting, `ease-in-out` for moving
- **`transition: all` is banned** — list specific properties (`transform`, `opacity`, `background-color`)
- **Only animate compositor-friendly properties:** `transform`, `opacity`. Never `width`, `height`, `top`, `left`.
- **`prefers-reduced-motion: reduce` globally supported** — overrides duration to 0.01ms

---

## Voice / copy

- Direct and product-specific: "發射彈幕" not "Submit", "把你的訊息送上螢幕！" not "Welcome to Danmu Fire"
- Metaphor-aware: messages "發射"/"飛出" (launch/fly), effects "燃燒"/"閃爍" (burn/flash) — honor the fire/arcade metaphor
- Never corporate-ish: no "empowering", "seamless", "transform your workflow"
- Bilingual cohesion: same tone in 4 languages (en/zh/ja/ko) — not formal Chinese + casual English

---

## Component conventions

### Cards
- Use cards only when the card IS the interaction (settings group, theme card, history entry)
- Decorative card grids are banned (AI slop pattern)

### Touch targets
- Minimum 44×44 per WCAG 2.5.5
- Enforced in style.css for `.effect-btn` (previously 26-30px)

### Focus
- `focus-visible` rings only (never generic `:focus`)
- 2px outline, `outline-offset: 2px`, using `--color-primary`

### Color-scheme
- `color-scheme: dark` on `<html>` — native controls (scrollbar, date picker, select) follow theme

---

## Accessibility

- WCAG 2.1 AA minimum, AAA where reasonable
- Body text 16px+ (WCAG)
- Touch targets 44px+ (WCAG 2.5.5)
- Focus-visible on all interactive elements
- Skip-links on `/` and `/admin/`
- `prefers-reduced-motion` respected
- Semantic landmarks (`<main>`, `<nav>`, `<aside>`) not divs

---

## What's NOT covered yet (TODO)

- Illustration system (fire icon is one-off; needs family)
- Iconography (currently Tailwind Heroicons; no custom set)
- Sound design (future — stream alert sounds, effect fires)
- Print / screenshot / OG image styles
- Social / app store marketing visuals
