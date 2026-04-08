# Design Tokens Centralization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminate all hardcoded colour/shadow/glow values from CSS files by extracting them into `shared/tokens.css`, so every visual constant is defined in exactly one place.

**Architecture:** `shared/tokens.css` is the single source of truth. `danmu-desktop/styles.css` already `@import`s it directly. `server/static/css/tokens.css` is a committed copy synced via `make copy-tokens`; a CI diff check prevents it from drifting. No build tools are added — only CSS custom properties.

**Tech Stack:** CSS custom properties, `make copy-tokens` (already exists), GitHub Actions (`.github/workflows/test.yml` `js-test` job)

---

## File Map

| File | Action | What changes |
|---|---|---|
| `shared/tokens.css` | **Modify** | Add 23 missing tokens |
| `danmu-desktop/styles.css` | **Modify** | Replace 20 hardcoded values with `var(--…)` |
| `server/static/css/style.css` | **Modify** | Replace 10 hardcoded values with `var(--…)` |
| `server/static/css/tokens.css` | **Modify** (generated) | Re-sync from `shared/tokens.css` via `make copy-tokens` |
| `.github/workflows/test.yml` | **Modify** | Add tokens-sync diff check to `js-test` job |

**Not changed:**
- `danmu-desktop/child.css` — overlay window (danmu text), intentionally isolated from UI tokens
- `server/static/css/overlay.css` — overlay styles, separate concern
- Tailwind config/input files — no changes needed

---

### Task 1: Add missing tokens to `shared/tokens.css`

**Files:**
- Modify: `shared/tokens.css`

**Current state:** 20 tokens covering brand, semantic, surface, text, radius.
**Goal:** Add 23 more tokens for bg variants, state colours, overlay/shadow, and glow/ring values — covering every hardcoded value in tasks 2 and 3.

- [ ] **Step 1: Open `shared/tokens.css` and replace the entire file content**

Replace the full file with:

```css
:root {
  /* Brand */
  --color-primary: #38bdf8;
  --color-primary-hover: #0ea5e9;
  --color-secondary: #3b82f6;
  --color-accent: #06b6d4;

  /* Semantic */
  --color-success: #22c55e;
  --color-warning: #eab308;
  --color-error: #ef4444;
  --color-error-hover: #dc2626;
  --color-error-light: #f87171;

  /* Surface / Background */
  --color-bg-deep: #000000;
  --color-bg-base: #0f172a;
  --color-bg-elevated: #1e293b;
  --color-bg-card: rgba(15, 23, 42, 0.75);
  --color-bg-input: rgba(30, 41, 59, 0.8);
  --color-bg-input-solid: rgba(30, 41, 59, 1);
  --color-bg-input-disabled: rgba(30, 41, 59, 0.5);
  --color-overlay: rgba(0, 0, 0, 0.6);

  /* Border */
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-focus: #38bdf8;
  --color-border-strong: #334155;

  /* Text */
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #475569;
  --color-text-bright: #e2e8f0;

  /* State colours */
  --color-connected: #14b8a6;
  --color-connected-dark: #0d9488;
  --color-surface-muted: #475569;
  --color-active-btn: #0369a1;

  /* Scrollbar */
  --color-scrollbar: rgba(71, 85, 105, 0.7);

  /* Shadow */
  --shadow-base: rgba(0, 0, 0, 0.3);

  /* Glow / Focus ring */
  --glow-primary: rgba(56, 189, 248, 0.4);
  --glow-primary-ring: rgba(56, 189, 248, 0.5);
  --glow-primary-lg: rgba(56, 189, 248, 0.6);
  --glow-accent: rgba(6, 182, 212, 0.6);
  --glow-connected: rgba(20, 184, 166, 0.4);
  --glow-success: rgba(34, 197, 94, 0.6);
  --ring-success: rgba(16, 185, 129, 0.2);
  --ring-error: rgba(239, 68, 68, 0.2);

  /* Typography */
  --font-family: "Poppins", sans-serif;

  /* Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-pill: 999px;
}
```

- [ ] **Step 2: Verify file was saved correctly**

```bash
grep -c "var\|--color\|--shadow\|--glow\|--ring\|--radius\|--font" shared/tokens.css
```

Expected output: a number ≥ 43 (one line per token definition + some comment lines).

---

### Task 2: Replace hardcoded values in `danmu-desktop/styles.css`

**Files:**
- Modify: `danmu-desktop/styles.css`

Replace every hardcoded colour/shadow. The replacements below are listed by line context so you can find them with grep/search.

- [ ] **Step 1: Replace `.form-input` border and focus styles**

Find and replace the `.form-input` block:

```css
/* BEFORE */
.form-input {
  background-color: var(--color-bg-input);
  border: 1px solid #334155;
  color: var(--color-text-primary);
  transition: all 0.3s ease;
}
.form-input:focus {
  background-color: rgba(30, 41, 59, 1);
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.5);
  outline: none;
}
.form-input::placeholder {
  color: var(--color-text-secondary);
  opacity: 1;
}
.form-input:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  background-color: rgba(30, 41, 59, 0.5);
}
```

```css
/* AFTER */
.form-input {
  background-color: var(--color-bg-input);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  transition: all 0.3s ease;
}
.form-input:focus {
  background-color: var(--color-bg-input-solid);
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--glow-primary-ring);
  outline: none;
}
.form-input::placeholder {
  color: var(--color-text-secondary);
  opacity: 1;
}
.form-input:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  background-color: var(--color-bg-input-disabled);
}
```

- [ ] **Step 2: Replace button shadow tokens**

Find and replace `.btn-primary` and its hover/active states:

```css
/* BEFORE */
.btn-primary {
  background-image: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.btn-primary:hover:not(:disabled) {
  box-shadow: 0 6px 12px rgba(56, 189, 248, 0.4);
  transform: translateY(-1px);
}

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
```

```css
/* AFTER */
.btn-primary {
  background-image: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  box-shadow: 0 4px 6px var(--shadow-base);
}

.btn-primary:hover:not(:disabled) {
  box-shadow: 0 6px 12px var(--glow-primary);
  transform: translateY(-1px);
}

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 4px var(--shadow-base);
}
```

- [ ] **Step 3: Replace button state colour tokens**

Find and replace `.btn-connecting`, `.btn-connected`, `.btn-active`, `.btn-stopped`:

```css
/* BEFORE */
.btn-connecting {
  background-image: linear-gradient(to right, var(--color-accent), #0891b2) !important;
  animation: pulse-connecting 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.btn-connected {
  background-image: linear-gradient(to right, #14b8a6, #0d9488) !important;
  box-shadow: 0 0 20px rgba(20, 184, 166, 0.4);
}

.btn-active {
  background-image: linear-gradient(to right, var(--color-primary), var(--color-secondary)) !important;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
}

.btn-stopped {
  background-image: linear-gradient(to right, #475569, #334155) !important;
  box-shadow: 0 0 10px rgba(71, 85, 105, 0.2);
}
```

```css
/* AFTER */
.btn-connecting {
  background-image: linear-gradient(to right, var(--color-accent), #0891b2) !important;
  animation: pulse-connecting 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.btn-connected {
  background-image: linear-gradient(to right, var(--color-connected), var(--color-connected-dark)) !important;
  box-shadow: 0 0 20px var(--glow-connected);
}

.btn-active {
  background-image: linear-gradient(to right, var(--color-primary), var(--color-secondary)) !important;
  box-shadow: 0 0 20px var(--glow-primary);
}

.btn-stopped {
  background-image: linear-gradient(to right, var(--color-surface-muted), var(--color-border-strong)) !important;
  box-shadow: 0 0 10px rgba(71, 85, 105, 0.2);
}
```

Note: `#0891b2` in `.btn-connecting` is cyan-600, a one-off design choice for the connecting animation. Leave as-is (YAGNI).
Note: `rgba(71, 85, 105, 0.2)` in `.btn-stopped` is a one-off alpha variant, leave as-is.

- [ ] **Step 4: Replace the pulse-connecting animation glow**

Find and replace the `@keyframes pulse-connecting` block:

```css
/* BEFORE */
@keyframes pulse-connecting {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.6);
  }
  50% {
    opacity: 0.9;
    box-shadow: 0 0 0 10px rgba(6, 182, 212, 0);
  }
}
```

```css
/* AFTER */
@keyframes pulse-connecting {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 0 0 var(--glow-accent);
  }
  50% {
    opacity: 0.9;
    box-shadow: 0 0 0 10px transparent;
  }
}
```

- [ ] **Step 5: Replace input validation ring tokens**

Find and replace `.input-valid` and `.input-invalid`:

```css
/* BEFORE */
.input-valid {
  border-color: var(--color-success) !important;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2) !important;
}

.input-invalid {
  border-color: var(--color-error) !important;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2) !important;
}
```

```css
/* AFTER */
.input-valid {
  border-color: var(--color-success) !important;
  box-shadow: 0 0 0 2px var(--ring-success) !important;
}

.input-invalid {
  border-color: var(--color-error) !important;
  box-shadow: 0 0 0 2px var(--ring-error) !important;
}
```

- [ ] **Step 6: Replace range slider glow tokens**

Find and replace both `input[type="range"]::-webkit-slider-thumb` and `input[type="range"]::-moz-range-thumb` hover states:

```css
/* BEFORE */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(56, 189, 248, 0.4);
  transition: all 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.6);
}

input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 8px rgba(56, 189, 248, 0.4);
  transition: all 0.2s ease;
}

input[type="range"]::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.6);
}
```

```css
/* AFTER */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  cursor: pointer;
  box-shadow: 0 2px 8px var(--glow-primary);
  transition: all 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px var(--glow-primary-lg);
}

input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 8px var(--glow-primary);
  transition: all 0.2s ease;
}

input[type="range"]::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px var(--glow-primary-lg);
}
```

- [ ] **Step 7: Replace scrollbar token**

Find and replace the scrollbar-thumb rule:

```css
/* BEFORE */
  .settings-scroll::-webkit-scrollbar-thumb {
    background: rgba(71, 85, 105, 0.7);
    border-radius: var(--radius-pill);
  }
```

```css
/* AFTER */
  .settings-scroll::-webkit-scrollbar-thumb {
    background: var(--color-scrollbar);
    border-radius: var(--radius-pill);
  }
```

- [ ] **Step 8: Verify no remaining hardcoded colour values**

```bash
grep -n "rgba\|#[0-9a-fA-F]\{3,6\}" danmu-desktop/styles.css | grep -v "var(--" | grep -v "^\s*/\*"
```

Expected: Only `#0891b2` (btn-connecting cyan-600, intentional) and `rgba(71, 85, 105, 0.2)` (btn-stopped one-off glow) remain.

- [ ] **Step 9: Commit**

```bash
git add shared/tokens.css danmu-desktop/styles.css
git commit -m "style(tokens): add 23 missing tokens and migrate desktop styles.css"
```

---

### Task 3: Replace hardcoded values in `server/static/css/style.css`

**Files:**
- Modify: `server/static/css/style.css`

- [ ] **Step 1: Replace range thumb border colour**

Find and replace `input[type="range"]::-webkit-slider-thumb`:

```css
/* BEFORE */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: var(--color-primary);
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #0f172a;
  transition: all 0.2s;
}
```

```css
/* AFTER */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: var(--color-primary);
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid var(--color-bg-base);
  transition: all 0.2s;
}
```

- [ ] **Step 2: Replace modal backdrop and background colours**

Find and replace `#blacklistWarningModal` and `.modal-content`:

```css
/* BEFORE */
#blacklistWarningModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  ...
}

#blacklistWarningModal .modal-content {
  background-color: #1e293b;
  padding: 2rem;
  border-radius: var(--radius-lg);
  text-align: center;
  border: 2px solid var(--color-error);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  ...
}
```

```css
/* AFTER */
#blacklistWarningModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-overlay);
  ...
}

#blacklistWarningModal .modal-content {
  background-color: var(--color-bg-elevated);
  padding: 2rem;
  border-radius: var(--radius-lg);
  text-align: center;
  border: 2px solid var(--color-error);
  box-shadow: 0 10px 25px var(--shadow-base);
  ...
}
```

- [ ] **Step 3: Replace modal flash animation colour**

Find and replace `@keyframes flashWarningBorder`:

```css
/* BEFORE */
@keyframes flashWarningBorder {
  0%,
  100% {
    border-color: var(--color-error);
  }
  50% {
    border-color: #f87171;
  }
}
```

```css
/* AFTER */
@keyframes flashWarningBorder {
  0%,
  100% {
    border-color: var(--color-error);
  }
  50% {
    border-color: var(--color-error-light);
  }
}
```

- [ ] **Step 4: Replace effect button active colour**

Find and replace `.effect-btn--active`:

```css
/* BEFORE */
.effect-btn--active {
  background-color: #0369a1 !important; /* sky-700 */
  color: #ffffff !important;
  border-color: var(--color-primary-hover) !important; /* sky-500 */
}
```

```css
/* AFTER */
.effect-btn--active {
  background-color: var(--color-active-btn) !important;
  color: #ffffff !important;
  border-color: var(--color-primary-hover) !important;
}
```

Note: `#ffffff` stays — it's always pure white text on the active button, not a themeable value.

- [ ] **Step 5: Replace success dot glow**

Find and replace `.connection-dot--connected`:

```css
/* BEFORE */
.connection-dot--connected {
  background-color: var(--color-success);
  box-shadow: 0 0 6px rgba(34, 197, 94, 0.6);
}
```

```css
/* AFTER */
.connection-dot--connected {
  background-color: var(--color-success);
  box-shadow: 0 0 6px var(--glow-success);
}
```

- [ ] **Step 6: Replace password toggle bright text**

Find and replace `.password-toggle:hover`:

```css
/* BEFORE */
.password-toggle:hover {
  color: #e2e8f0;
}
```

```css
/* AFTER */
.password-toggle:hover {
  color: var(--color-text-bright);
}
```

- [ ] **Step 7: Verify no remaining unintended hardcoded colour values**

```bash
grep -n "rgba\|#[0-9a-fA-F]\{3,6\}" server/static/css/style.css | grep -v "var(--" | grep -v "^\s*/\*"
```

Expected: Only intentional single-use values remain:
- `rgba(255, 255, 255, 0.2)` — range track background (form-specific, single use)
- `rgba(255,255,255,0.06)` / `rgba(255,255,255,0.12)` — skeleton shimmer gradient (single use)
- `#ffffff` — pure white text on active button

- [ ] **Step 8: Commit**

```bash
git add server/static/css/style.css
git commit -m "style(tokens): migrate server style.css to use design tokens"
```

---

### Task 4: Sync tokens to server and add CI check

**Files:**
- Modify (generated): `server/static/css/tokens.css`
- Modify: `.github/workflows/test.yml`

- [ ] **Step 1: Re-sync `server/static/css/tokens.css` from shared**

```bash
make copy-tokens
```

Expected: `server/static/css/tokens.css` is now identical to `shared/tokens.css`.

Verify:
```bash
diff shared/tokens.css server/static/css/tokens.css
```

Expected: no output (files are identical).

- [ ] **Step 2: Add CI tokens-sync check to `.github/workflows/test.yml`**

In the `js-test` job, after the existing i18n checks and before the Jest step, add:

```yaml
      - name: Verify tokens.css is in sync
        run: |
          diff shared/tokens.css server/static/css/tokens.css \
            || { echo "❌ tokens out of sync — run 'make copy-tokens' and commit"; exit 1; }
```

Find the existing block:
```yaml
      - name: Run Jest tests
        working-directory: danmu-desktop
        run: npx jest --testPathPatterns=tests/
```

Insert the new step directly before it.

- [ ] **Step 3: Verify the CI file is valid YAML**

```bash
python3 -c "import yaml; yaml.safe_load(open('.github/workflows/test.yml'))" && echo "YAML OK"
```

Expected: `YAML OK`

- [ ] **Step 4: Commit and push**

```bash
git add server/static/css/tokens.css .github/workflows/test.yml
git commit -m "ci(tokens): sync server tokens.css and add CI drift check"
git push
```

- [ ] **Step 5: Confirm CI passes**

```bash
gh run watch $(gh run list --limit 1 --json databaseId -q '.[0].databaseId') 2>&1 | tail -5
```

Expected: All jobs `success`.

---

## Self-Review

### Spec coverage check

| Requirement | Covered by |
|---|---|
| Single source of truth for tokens | Task 1 — `shared/tokens.css` |
| Remove hardcoded values from desktop CSS | Task 2 |
| Remove hardcoded values from server CSS | Task 3 |
| Server tokens file stays in sync | Task 4 (`make copy-tokens` + CI check) |
| CI enforces sync going forward | Task 4 (diff check in `js-test` job) |

### Intentionally NOT tokenized (YAGNI)

These values appear once and are form/component-specific, not design system choices:
- `#0891b2` — cyan-600 in `.btn-connecting` gradient (one-off animation colour)
- `rgba(71, 85, 105, 0.2)` — `.btn-stopped` glow (one-off alpha of `--color-surface-muted`)
- `rgba(255, 255, 255, 0.2)` — range track background
- `rgba(255,255,255,0.06/0.12)` — skeleton shimmer
- `#ffffff` — pure white text on active button

### No placeholders — all steps have exact code.

### Type consistency — all token names used in tasks 2–3 are defined in task 1.
