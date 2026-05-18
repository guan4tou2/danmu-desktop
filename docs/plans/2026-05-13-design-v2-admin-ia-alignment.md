# Design v2 Admin IA Alignment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Align the shipped admin shell with the handed-off design by making `Display` own the display-settings surface and moving `Security` under `System`.

**Architecture:** Keep the current admin shell and hidden legacy aliases, but correct the canonical ownership in the visible sidebar and route/leaf visibility. `admin.js` remains the router, `admin-system-accordion.js` owns `System` leaves, `admin-security.js` follows `system/security`, and `admin-display.js` splits display ownership from viewer ownership.

**Tech Stack:** Vanilla JS admin shell, Jest source-level regression tests, server static assets.

### Task 1: Lock The Scope In Tests

**Files:**
- Modify: `danmu-desktop/tests/admin-layout-compact.test.js`

**Step 1: Write the failing test**

Add assertions that:
- standalone `data-route="security"` is gone from `admin.js`
- `security` redirects into `system`
- `admin-system-accordion.js` contains a `security` leaf
- `admin-display.js` treats `display` as the page owner
- `admin-viewer-theme.js` links display-related controls to `display`

**Step 2: Run test to verify it fails**

Run: `npm test -- admin-layout-compact.test.js`
Expected: FAIL because the current source still exposes standalone security and display settings still live under viewer ownership.

**Step 3: Write minimal implementation**

Update the admin shell files until the new assertions pass without broadening scope beyond the IA ownership change.

**Step 4: Run test to verify it passes**

Run: `npm test -- admin-layout-compact.test.js`
Expected: PASS

### Task 2: Move Security Under System

**Files:**
- Modify: `server/static/js/admin.js`
- Modify: `server/static/js/admin-system-accordion.js`
- Modify: `server/static/js/admin-security.js`

**Step 1: Write the failing test**

Covered by Task 1.

**Step 2: Run test to verify it fails**

Covered by Task 1.

**Step 3: Write minimal implementation**

- Remove the visible standalone `Security` nav row from `admin.js`
- Redirect legacy `#/security` to `#/system/security`
- Add a `security` leaf to the system accordion
- Make `admin-security.js` visible when the active route is `system` and the active leaf is `security`

**Step 4: Run test to verify it passes**

Run: `npm test -- admin-layout-compact.test.js`
Expected: PASS

### Task 3: Make Display Own Display Settings

**Files:**
- Modify: `server/static/js/admin-display.js`
- Modify: `server/static/js/admin-viewer-theme.js`
- Modify: `server/static/js/admin.js`

**Step 1: Write the failing test**

Covered by Task 1.

**Step 2: Run test to verify it fails**

Covered by Task 1.

**Step 3: Write minimal implementation**

- Change `admin-display.js` visibility logic so the main display-settings page renders under `display`
- Keep viewer-theme / viewer-fields content under `viewer`
- Point viewer-theme “Display Settings” jumps at `display`
- Update route comments/copy where needed so the ownership split is explicit

**Step 4: Run test to verify it passes**

Run: `npm test -- admin-layout-compact.test.js`
Expected: PASS

### Task 4: Verify The Focused Slice

**Files:**
- Modify: none

**Step 1: Run focused verification**

Run: `npm test -- admin-layout-compact.test.js layout-compact.test.js`
Expected: PASS

**Step 2: Run a broader sanity check if cheap**

Run: `npm test -- admin-layout-compact.test.js admin-details-state.test.js layout-compact.test.js`
Expected: PASS
