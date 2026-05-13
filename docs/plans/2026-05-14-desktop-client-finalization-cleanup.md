# Desktop Client Finalization Cleanup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Align the desktop client implementation with the final desktop canonical direction so the Electron client can be treated as wrapped up before server-focused design work.

**Architecture:** Keep the existing three-surface runtime model intact: control window, overlay window, and tray status. Remove leftover code paths and helper naming that still model tray as a popover product surface, then lock the intended behavior with focused regression tests.

**Tech Stack:** Electron, plain renderer JavaScript, Jest

### Task 1: Lock tray finalization behavior with tests

**Files:**
- Modify: `danmu-desktop/tests/client-ia.test.js`
- Modify: `danmu-desktop/tests/tray-popover.test.js`

**Step 1: Write the failing test**

Add assertions that the main process no longer depends on the `tray-popover` helper naming and that the helper output, if still used during migration, stays status-only.

**Step 2: Run test to verify it fails**

Run: `npm test -- tray-popover.test.js client-ia.test.js`

Expected: FAIL because the main process still imports and uses `buildTrayPopoverSections`.

**Step 3: Write minimal implementation**

Inline the tray status snapshot into `main.js` and remove the old popover helper dependency.

**Step 4: Run test to verify it passes**

Run: `npm test -- tray-popover.test.js client-ia.test.js`

Expected: PASS.

### Task 2: Keep first-run as inline connection setup and document intentional leftovers

**Files:**
- Modify: `danmu-desktop/tests/client-ia.test.js`
- Modify: `danmu-desktop/index.html`
- Modify: `danmu-desktop/renderer-modules/first-run-gate.js`

**Step 1: Write the failing test**

Add a focused assertion that the first-run setup is rendered inside the `conn` section and does not require a standalone fullscreen desktop scene.

**Step 2: Run test to verify it fails or confirm existing coverage**

Run: `npm test -- client-ia.test.js`

Expected: Either a red test that guides the cleanup, or confirmation that existing behavior is already locked and only comments/source language need tightening.

**Step 3: Write minimal implementation**

Tighten source comments and module wording so the code reflects the inline connection-setup model instead of a separate desktop product surface.

**Step 4: Run test to verify it passes**

Run: `npm test -- client-ia.test.js`

Expected: PASS.

### Task 3: Verify the desktop regression slice

**Files:**
- Test: `danmu-desktop/tests/client-ia.test.js`
- Test: `danmu-desktop/tests/tray-popover.test.js`
- Test: `danmu-desktop/tests/window-picker.test.js`
- Test: `danmu-desktop/tests/ws-manager.test.js`

**Step 1: Run focused regression suite**

Run: `npm test -- client-ia.test.js tray-popover.test.js window-picker.test.js ws-manager.test.js`

Expected: PASS.

**Step 2: Summarize intentional deferrals**

Record any remaining non-blocking desktop leftovers, such as internal module naming that no longer affects the shipped UX.
