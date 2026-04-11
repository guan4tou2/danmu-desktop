# Admin Page Design Audit — Round 1

**Date:** 2026-04-11
**Branch:** `feat/admin-dashboard-refactor` (commit `850887a`)
**Reviewer:** Claude Sonnet
**Method:** Code review + unauthenticated DOM snapshot via Claude Preview MCP
**Scope:** `/admin/` page (post-Codex refactor)
**Status:** Round 1 of iterative refinement. Round 2 polish handed to Codex.

---

## Executive summary

The Codex refactor (Live Control / Moderation / Assets buckets + sticky workflow sidebar + sky-cyan accent reconvergence) is a real upgrade over the old single long page. The information architecture is cleaner, the chip-nav gives users a real mental model, and the focus override cascade successfully kills the residual violet that bled in from Tailwind utility classes.

But there are seven issues worth fixing before claiming "done." One is critical (visible to users on every login), three are medium impact (visual polish + IA gaps), three are low impact (cleanup that pays back when the design system grows).

**Grades:**

| Category | Grade | Notes |
|---|---|---|
| Visual hierarchy | B+ | Hero + section kickers work; sidebar slightly competes |
| Typography | B | New Inter/Outfit upgrade is good; sizes mostly consistent |
| Color & contrast | A− | Sky/cyan converged; one !important cascade is technical debt |
| Spacing & layout | B+ | Grid breaks cleanly at 1024px; sidebar sticky offset needs tuning |
| Interaction states | B− | Chip nav has hover but no active/scroll-spy state |
| First impression | **D** | Login screen shows 6 error toasts before user can type |
| Information architecture | A− | Three-bucket grouping is much better than the old soup |
| Motion | B+ | Fade-in scale-up is tasteful, not cargo-culted |
| Accessibility | B | aria-labels present; keyboard focus consistent in app shell |
| Code quality | C+ | `!important` overrides + per-submodule init both deserve cleanup |

---

## FINDING-001 — Wall of error toasts on login screen

**Severity:** High (first-impression breaker)
**Visible to:** Every unauthenticated visitor
**Status:** Confirmed via DOM snapshot at `/admin/` (unauthenticated)

### What I see

Six red error toasts stack on the right side of the login card before the user can even type their password:

```
[alert] 載入過濾規則失敗            (filter rules)
[alert] 取得黑名單時出錯：Unauthorized
[alert] 取得歷史記錄時出錯：Unauthorized
[alert] 載入音效失敗                (sounds, fired twice)
[alert] 載入音效失敗
[alert] Unauthorized                (generic)
```

Browser console additionally shows the same 401s repeated 4–6× per fetch from `admin-plugins.js`, `admin-sounds.js`, `admin-emojis.js`, and `admin-filters.js`.

### Root cause

`admin.js` correctly gates rendering on `session.logged_in` (line 1454), but the submodule scripts loaded via `<script defer>` each attach their own `DOMContentLoaded` listener and fire fetches **without** checking auth state:

| File | Listener | Fires |
|---|---|---|
| `admin-sounds.js:517` | `DOMContentLoaded` → MutationObserver → `fetchSounds()` | 4× |
| `admin-filters.js` | `DOMContentLoaded` → `fetchRules()` | 4× |
| `admin-plugins.js` | `DOMContentLoaded` → `fetchPlugins()` | 4× |
| `admin-emojis.js` | `DOMContentLoaded` → `fetchAndRenderEmojis()` | 4× |

`window.DANMU_CONFIG.session.logged_in` is already injected from the template (line 61) — submodules can read it, they just don't.

### Fix (recommended)

Two approaches, ordered from cheap to clean:

**A. Local guard in each submodule** (1 line per file × 4 files):

```js
document.addEventListener("DOMContentLoaded", () => {
  if (!window.DANMU_CONFIG?.session?.logged_in) return;
  // existing init...
});
```

**B. Pub/sub from `admin.js`**: have `admin.js` dispatch a `danmu:auth-ready` CustomEvent after `render()` finishes the logged-in branch, and submodules listen for that instead of `DOMContentLoaded`. Cleaner long term, slightly more refactor.

Recommend **A** for now (5 lines, contained), and treat **B** as a follow-up when adding the next admin submodule.

### Acceptance

`/admin/` (unauthenticated) snapshot should contain zero `[alert]` elements, and the browser console should be free of 401 errors before submitting the password.

---

## FINDING-002 — Chip nav has no active state

**Severity:** Medium
**File:** `server/static/css/style.css:236-259`, `server/static/js/admin.js:771-800`

The chip nav at the top of the admin page is the user's primary "where am I" cue, but currently no chip is highlighted as the user scrolls through sections. Hover changes background, but on click the user lands at the section and the chip stays visually neutral.

**Fix:** IntersectionObserver watching each `#sec-*` section. When a section's top crosses ~120px (account for the sticky composer offset), add `.admin-chip--active` to the matching `<a>`.

```css
.admin-chip--active {
  background: rgba(2, 132, 199, 0.22);
  border-color: var(--color-sky-400);
  color: var(--color-sky-200);
}
```

```js
function initChipScrollSpy() {
  const chips = document.querySelectorAll(".admin-chip");
  const targets = Array.from(chips).map((c) => document.querySelector(c.getAttribute("href")));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = "#" + e.target.id;
          chips.forEach((c) => c.classList.toggle("admin-chip--active", c.getAttribute("href") === id));
        }
      });
    },
    { rootMargin: "-120px 0px -60% 0px" }
  );
  targets.forEach((t) => t && io.observe(t));
}
```

Call from `initAdminSectionLayout()` after the layout is stable.

---

## FINDING-003 — Sidebar competes with primary content for attention

**Severity:** Medium
**File:** `server/static/js/admin.js:861-881`, `server/static/css/style.css:209-212, 261-307`

The right-hand sidebar contains two cards: "Workflow" and "Recommended order." Both are valuable as a one-time orientation aid, but they're equally weighted with the primary stack at all times — the user sees the same hint cards on every visit, including their 50th login.

This both wastes prime real estate and trains users to ignore the sidebar (banner blindness).

**Fix:** Make sidebar cards dismissible per-user via `localStorage`. Add a small × button in the top-right of each card; on dismiss, store `localStorage.setItem("admin_sidebar_dismissed_workflow", "1")` and hide. Add a "Show tips" link to the hero kicker for re-enabling.

Alternative (lower effort): collapse both cards into a single `<details>` element labeled "Operator tips" that defaults to open on first visit and remembers state.

---

## FINDING-004 — `!important` cascade is technical debt

**Severity:** Medium (architectural)
**File:** `server/static/css/style.css:14-62`

The `.admin-app-shell` selector currently uses ~12 `!important` declarations to override Tailwind utility classes (`text-violet-300`, `bg-violet-600`, etc.) and force them into the sky/cyan palette. This works but creates a maintenance hazard:

1. Adding a new violet utility anywhere in `admin.js` requires remembering to add a corresponding override here.
2. Future Tailwind updates may rename classes (`bg-violet-500/10` → `bg-violet-500/10` got version-specific selector escape rules), breaking the overrides silently.
3. New developers won't understand why their `text-violet-300` doesn't render violet.

**Fix:** Search-and-replace all `text-violet-*`, `bg-violet-*`, `bg-purple-*`, `accent-violet-*`, `border-violet-*` in `admin.js` with their sky/cyan equivalents at the source. Then delete the entire override block.

```bash
# In admin.js:
text-violet-300  → text-sky-300
bg-violet-600    → bg-sky-600
bg-purple-600/80 → bg-sky-600/80
accent-violet-500 → accent-sky-500
border-violet-500 → border-sky-500
hover:bg-violet-500 → hover:bg-sky-500
```

Then verify with: `grep -E "(violet|purple)" server/static/js/admin.js` returns empty.

---

## FINDING-005 — Hero summary cards are static

**Severity:** Low
**File:** `server/static/js/admin.js:746-759`

The hero shows three summary cards: `${enabledSettingCount} live controls enabled`, `${overlayMode}`, `${fontLabel}`. These are populated **once** at render time and never refreshed. As soon as the user toggles a setting, the summary becomes stale.

**Fix:** Subscribe each card's text to the same store/event that the toggles fire. After the existing setting-update handler succeeds, re-run a `refreshHeroSummary()` that recomputes the three values from `currentSettings` and updates the DOM.

Or: don't pretend they're live. Rename them to "Workspace overview" with a small caption "(at page load)" and call it a snapshot. Less code, sets honest expectations.

---

## FINDING-006 — Sidebar sticky offset doesn't account for the toast container

**Severity:** Low
**File:** `server/static/css/style.css:209-212`

`.admin-sidebar { position: sticky; top: 5.5rem; }`

The 5.5rem offset matches the visual top of the chip-nav at desktop sizes, but the toast container is `fixed top-5 right-5 z-50` and on small heights (≤900px) the sticky sidebar can collide with toasts on the right edge during scroll.

**Fix:** Add `right: 0` clipping context, or better, give the toast container a left-aligned variant when the viewport is narrow:

```css
@media (max-width: 1280px) {
  #toast-container { right: auto; left: 1rem; }
}
```

Marginal — only matters when both sidebar + toasts are visible at narrow widths.

---

## FINDING-007 — Section headings repeat the same kicker pattern but inconsistently sized

**Severity:** Polish
**File:** `server/static/js/admin.js:805-851`

Each section uses an `admin-section-kicker` (uppercase, sky-400, 0.72rem) above an `<h2>` or `<h3>`. But:

- Live Control section: kicker + `<h2 class="text-xl">`
- Moderation: kicker + `<h2 class="text-xl">`
- Assets: kicker + `<h2 class="text-xl">`
- Advanced (`<details>`): kicker + `<h3 class="text-lg">`

The Advanced section drops a heading level (h3 instead of h2) and shrinks visually. This is fine for "Advanced" being a power-user collapsed area, but the typography downgrade also makes it look like a sub-section of Assets when it's actually a peer.

**Fix:** Promote Advanced's heading to `<h2 class="text-xl">` and let the `<details>` collapsed state communicate the "less prominent" hierarchy instead of font size.

---

## What works (don't change)

- **Hero band gradient** (`server/static/css/style.css:147-153`) — the dual radial gradient over the linear-gradient base creates depth without competing with content. Tasteful.
- **Chip nav grouping** (admin.js:771-800) — Control / Moderation / Assets & Automation labels above each chip row are exactly the right level of structure.
- **Section kicker pattern** — `Live control` / `Moderation` / `Assets` uppercase tracking-wide labels are doing what kickers should do (orient the user without stealing focus).
- **Sticky sidebar location** — right rail at `top: 5.5rem` is correct; the issue is the content of the cards, not their position.
- **Glass-effect on settings cards** — backdrop-blur + border + hover border lift is the right amount of interaction.
- **Color reconvergence** — `--color-sky-*` and `--color-cyan-*` everywhere is a real improvement; the brand now reads as "live broadcast cool" instead of the previous violet-blue mishmash.

---

## Out of scope for this round

- **Empty states** for History / Live Feed (currently show "—" with no CTA when there are no danmu yet). Worth a P3 follow-up.
- **Mobile audit** at 375px width — the layout cascades correctly down to single-column at 1024px, but I haven't verified the chip-nav wrapping behavior or hero summary stacking. Should be a separate pass.
- **Performance baseline** (Vanta.js cost, settings re-render hot path). The previous session noted Vanta eats RAF budget; worth measuring but not part of design.
- **Visual regression for the 8 .dme effects preview area** — that's a Codex round 2 item.

---

## Suggested fix order

1. **FINDING-001** (high impact, ~5 lines, fixes login screen first impression — ship immediately)
2. **FINDING-004** (medium, ~30 line search-replace, removes the worst architectural debt)
3. **FINDING-002** (medium, ~25 lines for IntersectionObserver, big UX win)
4. **FINDING-003** (medium, ~20 lines for dismissible sidebar)
5. **FINDING-007** (polish, 1 line)
6. **FINDING-005** (polish, 10 lines or rename)
7. **FINDING-006** (polish, 3 lines media query)

Total: ~100 lines of focused changes to take the page from B− to A−.
