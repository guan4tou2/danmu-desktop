# Viewer Admin Field Alignment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Align the admin `Viewer` field inventory with the repo-canonical viewer spec by removing invalid per-message style controls and restoring the allowed viewer defaults.

**Architecture:** This slice stays entirely in the existing static admin UI. A source-level regression test will lock the intended field inventory and explanatory copy, then `server/static/js/admin-display.js` will be updated to render the corrected viewer field list and preview without changing backend behavior.

**Tech Stack:** Jest source tests, static admin JavaScript, repo design docs

### Task 1: Lock the canonical admin Viewer field inventory

**Files:**
- Modify: `danmu-desktop/tests/admin-layout-compact.test.js`
- Reference: `docs/designs/design-brief-v2.md`

**Step 1: Write the failing test**

Add expectations that the admin Viewer field inventory:
- includes `速度 / Speed` and `排版 / Layout`
- excludes `描邊 / Stroke`, `陰影 / Shadow`, `匿名送出`, and `附加圖片`
- describes Viewer as managing `/fire` page theme, fields, and defaults while theme styling stays global

**Step 2: Run test to verify it fails**

Run: `npm test -- admin-layout-compact.test.js`

Expected: FAIL because the current static source still includes `Stroke / Shadow` and lacks `Speed / Layout`.

### Task 2: Update the admin Viewer source to the canonical model

**Files:**
- Modify: `server/static/js/admin-display.js`

**Step 1: Write the minimal implementation**

Update the Viewer info banner, field definitions, and preview copy so that:
- `Nickname`, `Message`, `Color`, `Font`, `Size`, `Opacity`, `Speed`, `Layout`, and `Effect` are the visible inventory
- `Stroke / Shadow`, `匿名送出`, and `附加圖片` are removed
- the copy clearly says theme styling is handled globally, not by per-message viewer controls

**Step 2: Run test to verify it passes**

Run: `npm test -- admin-layout-compact.test.js`

Expected: PASS

### Task 3: Run focused regression coverage

**Files:**
- Test: `danmu-desktop/tests/admin-layout-compact.test.js`
- Test: `danmu-desktop/tests/layout-compact.test.js`
- Test: `server/tests/test_browser_admin.py`

**Step 1: Run the focused frontend/static tests**

Run: `npm test -- admin-layout-compact.test.js layout-compact.test.js`

Expected: PASS

**Step 2: Run the browser admin regression if needed**

Run: `pytest server/tests/test_browser_admin.py -q`

Expected: PASS or document why it was not run in this session.
