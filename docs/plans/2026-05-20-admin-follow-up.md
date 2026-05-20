# Admin Follow-Up Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Finish the remaining admin work after desktop/viewer release closure by separating real blockers from design-only polish and known deferred scope.

**Architecture:** Keep the current Flask admin route modules and vanilla JS admin shell. Treat shipped admin behavior as the baseline, then close BE-pending placeholders page by page with regression tests before any visual polish. Do not restart the admin IA from scratch; the current v5 grouped sidebar is locked by tests.

**Tech Stack:** Flask admin routes, vanilla `server/static/js/admin-*.js`, Jest source checks, pytest HTTP/browser tests, Playwright for final UI smoke.

## Current Baseline

- Admin IA is already locked by `server/tests/test_admin_sidebar_ia.py`.
- Admin has broad HTTP coverage in `server/tests/test_admin.py`, `server/tests/test_admin_routes.py`, `server/tests/test_admin_search.py`, and related route tests.
- Admin browser smoke exists in `server/tests/test_browser_admin.py`.
- Frontend source-level guards exist in `danmu-desktop/tests/admin-layout-compact.test.js` and `danmu-desktop/tests/admin-details-state.test.js`.
- Main unresolved work is not desktop/viewer alignment; it is admin BE placeholders, visual finalization for a few self-use pages, and admin router maintainability.

## Priority Order

1. P0: Close BE placeholders that expose disabled or placeholder controls in shipped admin pages.
2. P1: Replace risky native browser confirms and underspecified error states with existing HUD modal/toast patterns.
3. P2: Add browser-level route smoke so future IA changes do not regress hidden pages.
4. P3: Split `admin.js` router/shell only after behavior is locked by tests.
5. Deferred: Plugin-first architecture, multi-question/image polls, and wider integration ACL until requested by real usage.

### Task 1: Freeze Admin Baseline Before Changes

**Files:**
- Test: `server/tests/test_admin_sidebar_ia.py`
- Test: `server/tests/test_admin_routes.py`
- Test: `server/tests/test_gap_contracts.py`
- Test: `danmu-desktop/tests/admin-layout-compact.test.js`

**Step 1: Run source-level admin checks**

Run:
```bash
cd danmu-desktop
npm test -- admin-layout-compact.test.js admin-details-state.test.js
```

Expected: PASS.

**Step 2: Run backend admin contract checks**

Run:
```bash
cd server
ADMIN_PASSWORD=test PYTHONPATH=.. uv run --group dev pytest \
  tests/test_admin_sidebar_ia.py \
  tests/test_admin_routes.py \
  tests/test_gap_contracts.py \
  -q
```

Expected: PASS.

**Step 3: Commit only if baseline files need test repairs**

If no files change, do not commit.

### Task 2: Webhooks BE Placeholder Closure

**Files:**
- Modify: `server/routes/admin/webhooks.py`
- Modify: `server/static/js/admin-webhooks.js`
- Test: `server/tests/test_admin_routes.py` or new `server/tests/test_admin_webhooks.py`
- Optional source guard: `danmu-desktop/tests/admin-layout-compact.test.js`

**Missing Today:**
- `_VALID_EVENTS` only covers the currently supported small set.
- UI shows unsupported event rows as `待 BE`.
- UI renders `[PLACEHOLDER] 暫停 / 啟用（待 BE：/admin/webhooks/toggle）`.

**Step 1: Write failing route tests**

Add tests for:
- `POST /admin/webhooks/toggle` toggles `enabled`.
- unknown `hook_id` returns 404.
- expanded event vocabulary is accepted or explicitly rejected with a stable contract.

Run:
```bash
cd server
ADMIN_PASSWORD=test PYTHONPATH=.. uv run --group dev pytest tests/test_admin_webhooks.py -q
```

Expected: FAIL before implementation.

**Step 2: Implement minimal backend**

In `server/routes/admin/webhooks.py`:
- Add `POST /admin/webhooks/toggle`.
- Persist `enabled` changes through the same webhook store used by register/unregister.
- Decide whether to expand event vocabulary now. If not, expose a `contract.supported_events` list and keep future events disabled by data, not hard-coded UI labels.

**Step 3: Update admin UI**

In `server/static/js/admin-webhooks.js`:
- Replace placeholder toggle block with a real button.
- Drive event checkbox disabled states from backend contract if available.
- Add explicit error state for list/deliveries loading failure.

**Step 4: Verify**

Run:
```bash
cd server
ADMIN_PASSWORD=test PYTHONPATH=.. uv run --group dev pytest tests/test_admin_webhooks.py tests/test_gap_contracts.py -q
```

Expected: PASS.

### Task 3: Backup / Restore BE Completion

**Files:**
- Modify: `server/routes/admin/backup.py`
- Modify: `server/routes/admin/history.py`
- Modify: `server/static/js/admin-backup.js`
- Test: new `server/tests/test_admin_backup.py`

**Missing Today:**
- `POST /admin/settings/apply`
- `GET /admin/packs/export/<type>`
- `POST /admin/packs/install`
- `POST /admin/factory/reset`
- CSV / SRT history export formats

**Step 1: Write failing tests for each endpoint**

Cover:
- settings restore dry-run/apply validation excludes secrets;
- pack export rejects invalid type and returns archive for valid type;
- pack install validates archive structure before writing;
- factory reset requires typed confirmation;
- history export supports `format=json,csv,srt`.

Run:
```bash
cd server
ADMIN_PASSWORD=test PYTHONPATH=.. uv run --group dev pytest tests/test_admin_backup.py -q
```

Expected: FAIL before implementation.

**Step 2: Implement endpoints incrementally**

Use structured JSON validation already present in `server/services/validation.py` where possible.

**Step 3: Enable UI controls**

In `server/static/js/admin-backup.js`:
- Enable apply only after dry-run validates.
- Enable pack download/upload only for implemented types.
- Keep factory reset disabled until endpoint and tests are complete.

**Step 4: Verify**

Run:
```bash
cd server
ADMIN_PASSWORD=test PYTHONPATH=.. uv run --group dev pytest tests/test_admin_backup.py tests/test_admin_routes.py -q
```

Expected: PASS.

### Task 4: Replace Native Confirm / Weak Error States

**Files:**
- Modify: `server/static/js/admin-api-tokens.js`
- Modify: `server/static/js/admin-backup.js`
- Modify: `server/static/js/admin-webhooks.js`
- Reuse: `server/static/js/admin-hud-modal.js`
- Test: add Jest/source checks under `danmu-desktop/tests/admin-layout-compact.test.js` or new focused test.

**Missing Today:**
- API token revoke and backup danger actions still rely on native `confirm()` in places.
- API token form error and copy feedback need final HUD-style treatment.
- Webhook load failures are underspecified.

**Step 1: Add source-level failing checks**

Assert these modules do not call native `confirm(` for destructive admin flows and reference `AdminHudModal` or the project modal helper.

Run:
```bash
cd danmu-desktop
npm test -- admin-layout-compact.test.js
```

Expected: FAIL before implementation.

**Step 2: Replace destructive confirms**

Use the existing HUD modal pattern. Keep copy short:
- title;
- irreversible warning;
- explicit action button;
- cancel.

**Step 3: Verify**

Run:
```bash
cd danmu-desktop
npm test -- admin-layout-compact.test.js
```

Expected: PASS.

### Task 5: Admin Browser Route Smoke

**Files:**
- Modify: `server/tests/test_browser_admin.py`
- Possibly add helper: `server/tests/admin_route_smoke.py`

**Missing Today:**
- Browser tests cover major flows, but not every visible v5 sidebar route with enough layout assertions.

**Step 1: Add route smoke table**

Use the locked sidebar slugs from `server/tests/test_admin_sidebar_ia.py`:
`live`, `messages`, `history`, `polls`, `widgets`, `themes`, `assets`, `viewer`, `moderation`, `ratelimit`, `effects`, `plugins`, `fonts`, `system`, `audit`, `extensions`, `webhooks`, `api-tokens`, `backup`.

For each route:
- navigate to `#/route`;
- wait for active sidebar button;
- assert no visible `[PLACEHOLDER]` unless the page is intentionally deferred;
- assert topbar title exists;
- assert no console error if the fixture exposes console logs.

**Step 2: Run browser module**

Run:
```bash
cd server
ADMIN_PASSWORD=test PYTHONPATH=.. uv run --group dev pytest tests/test_browser_admin.py -q
```

Expected: PASS.

### Task 6: Admin.js Router Split

**Files:**
- Modify: `server/static/js/admin.js`
- Create: `server/static/js/admin-router.js`
- Create: `server/static/js/admin-shell.js`
- Modify: `server/templates/admin.html`
- Test: `danmu-desktop/tests/admin-layout-compact.test.js`
- Test: `server/tests/test_admin_sidebar_ia.py`

**Reason:**
- `server/static/js/admin.js` is still about 1,858 lines and owns route config, shell rendering, login rendering, topbar, telemetry, and boot behavior.

**Step 1: Write source-level checks for new module boundaries**

Assert:
- `admin-router.js` contains `ADMIN_ROUTES`, aliases, hash parsing, and route application helpers.
- `admin-shell.js` contains login/control panel rendering helpers.
- `admin.js` only initializes and wires modules.

**Step 2: Extract route table without changing route behavior**

Move one boundary at a time:
1. route constants and hash parser;
2. sidebar rendering;
3. login render;
4. control panel render.

**Step 3: Verify after each extraction**

Run:
```bash
cd danmu-desktop
npm test -- admin-layout-compact.test.js admin-details-state.test.js
```

Run:
```bash
cd server
ADMIN_PASSWORD=test PYTHONPATH=.. uv run --group dev pytest tests/test_admin_sidebar_ia.py -q
```

Expected: PASS after each step.

### Task 7: Design-Final Admin Self-Use Pages

**Files:**
- Reference: `docs/designs/design-brief-2026-05-19-batch1-admin-self-use.md`
- Modify: `server/static/js/admin-webhooks.js`
- Modify: `server/static/js/admin-api-tokens.js`
- Modify: `server/static/js/admin-backup.js`
- Modify CSS in the admin stylesheet already owning these classes.

**Blocked By:**
- Designer final v4 mockups for `#/webhooks`, `#/api-tokens`, `#/backup`.

**Step 1: Do not redesign from scratch**

Use the brief as source of truth until mockups land.

**Step 2: When mockups arrive, retrofit only spacing/layout/states**

Preserve backend contracts and route behavior.

**Step 3: Verify desktop and tablet widths**

Use browser screenshots at:
- 1440x900
- 1024x768
- 390x844

Expected: no overlapping text, no nested cards, no broken right rail.

### Task 8: Explicitly Deferred Admin Work

Do not start these unless the owner asks:

- Plugin-first architecture for Poll / Widgets / Scheduler / Webhooks.
- Poll multi-question with ordering and per-question image.
- Full integration ACL matrix for API tokens.
- Google Fonts backend fetch/import.
- IP/CIDR allowlist editor.
- Poll deep-dive geolocation / cheat detection.
- Notification preferences design.

## Completion Criteria

- No visible admin control says `[PLACEHOLDER]` for a feature that can be implemented with current backend scope.
- Known deferred controls are either hidden or clearly marked `即將支援` with no clickable dead action.
- `pytest` admin route tests pass.
- Jest admin source guards pass.
- Browser admin smoke passes for all visible sidebar routes.
- `admin.js` no longer owns all routing/shell responsibilities before larger admin feature work resumes.
