# Design v3 Review And Slice Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Review `danmu (3).zip` against repo design rules, update the Design-facing handoff, and land one low-risk v3-aligned admin UI slice without importing conflicting design decisions.

**Architecture:** Keep the work split into three layers. First, record the zip-vs-repo comparison in a dedicated review doc. Second, update the existing engineering handoff so Design sees what is already aligned and what still conflicts. Third, implement only text- and ownership-level UI refinements that reinforce the shipped `Display` / `Viewer` / `System > Security` boundaries without adding backend-dependent controls.

**Tech Stack:** Markdown design docs, vanilla JS admin shell, Jest source-level regression tests.

### Task 1: Write The zip3 Review Document

**Files:**
- Create: `docs/designs/design-v2/HANDOFF-ZIP3-REVIEW-2026-05-14.md`

**Step 1: Draft the review structure**

Cover:
- bundle contents and what changed from prior zip
- aligned items already matching repo rules
- conflicting items still not canonical
- recommended adoption / non-adoption guidance

**Step 2: Save the document**

Use a concise design-review format that can be linked from later handoff docs.

### Task 2: Update The Design Handoff Entry

**Files:**
- Modify: `docs/designs/design-v2/HANDOFF-ENGINEERING-UPDATE-2026-05-13.md`

**Step 1: Add a zip3 update section**

Record:
- what the new bundle correctly aligned
- what still conflicts with repo rules
- where the formal review doc lives

**Step 2: Keep the handoff canonical**

Do not replace the existing rules; only extend them with the 2026-05-14 review outcome.

### Task 3: Lock The UI Slice In A Failing Test

**Files:**
- Modify: `danmu-desktop/tests/admin-layout-compact.test.js`

**Step 1: Write the failing test**

Add assertions that:
- `admin-display.js` contains explicit `Display` vs `Viewer` boundary copy
- `admin-viewer-theme.js` points out that overlay / layout ownership belongs to `Display`
- `admin-security.js` reflects `System › Security` rather than a standalone security page

**Step 2: Run the focused test**

Run: `npm test -- admin-layout-compact.test.js`

Expected: FAIL until the new copy and boundary cues are added.

### Task 4: Implement The Minimal v3-Aligned Slice

**Files:**
- Modify: `server/static/js/admin-display.js`
- Modify: `server/static/js/admin-viewer-theme.js`
- Modify: `server/static/js/admin-security.js`

**Step 1: Add the minimal implementation**

- `admin-display.js`: add a boundary note stating `Display` owns overlay / client / target-display concerns while `Viewer` owns `/fire` page defaults
- `admin-viewer-theme.js`: make the scope note explicitly send layout / connection ownership to `Display`
- `admin-security.js`: update title / kicker copy to read as `System › Security`

**Step 2: Re-run the focused test**

Run: `npm test -- admin-layout-compact.test.js`

Expected: PASS

### Task 5: Verify The Whole Slice

**Files:**
- Modify: none

**Step 1: Run focused regression coverage**

Run: `npm test -- admin-layout-compact.test.js admin-details-state.test.js layout-compact.test.js`

Expected: PASS

**Step 2: Check repo diff**

Run: `git diff -- docs/designs/design-v2/HANDOFF-ZIP3-REVIEW-2026-05-14.md docs/designs/design-v2/HANDOFF-ENGINEERING-UPDATE-2026-05-13.md docs/designs/design-brief-v2.md danmu-desktop/tests/admin-layout-compact.test.js server/static/js/admin-display.js server/static/js/admin-viewer-theme.js server/static/js/admin-security.js`

Expected: only the intended review / handoff / boundary-slice changes appear.
