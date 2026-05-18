# Design Bundle Review · zip3 · 2026-05-14

**Bundle reviewed:** `/Users/guantou/Downloads/danmu (3).zip`
**Repo branch at review time:** `claude/design-v2-retrofit`
**Reviewer:** engineering follow-up against repo-canonical design rules

## Scope

This review compares the new zip bundle against the repo-canonical design
references, not against older standalone prototype intent.

Canonical repo references used:

1. `docs/designs/design-v2/STYLE-CONTRACT.md`
2. `docs/designs/design-v2/HANDOFF-PRIORITY-RESET-2026-05-05.md`
3. `docs/designs/design-v2/HANDOFF-ENGINEERING-UPDATE-2026-05-13.md`
4. `docs/designs/design-brief-v2.md`

## Bundle Delta From The Previous Handoff

This bundle is materially different from the prior zip / handoff:

- no `README.md`
- new `Danmu Redesign v3.html`
- new `components/admin-shell-8area.jsx`
- new `components/admin-display-v2.jsx`
- still includes the older `docs/designs/design-v2/HANDOFF-REWORK-2026-05-04.md`

Interpretation: this is not a blind re-export. It is a response to the
2026-05-13 engineering handoff, but it is not yet a fully self-contained
canonical bundle.

## Summary Verdict

**Status:** promising partial alignment, not yet canonical

The bundle clearly absorbs the repo's newer IA direction. The biggest shifts
we asked for are present: `Security` is under `System`, `Display` is no longer
hidden under `Viewer`, and the 8-area admin shell is explicitly surfaced.

However, the bundle still closes several open decisions unilaterally, leaves
older handoff material in place, and contains at least one direct rules
conflict in the Viewer field inventory. It should be treated as a candidate
revision, not as the next source of truth.

## Aligned With Repo Rules

### 1. 8-Area Admin IA Is Now Explicit

The new bundle introduces `components/admin-shell-8area.jsx` and `Danmu
Redesign v3.html`, both of which clearly present:

`Live / Display / Effects / Assets / Viewer / Polls / Moderation / System`

This aligns with `HANDOFF-PRIORITY-RESET-2026-05-05.md`.

### 2. `Security` Moved Under `System`

The bundle now treats `Security` as a `System` leaf rather than a standalone
top-level area. This aligns with the code already shipped in:

- `server/static/js/admin-system-accordion.js`
- `server/static/js/admin-security.js`

### 3. `Display` And `Viewer` Ownership Is Split

`components/admin-display-v2.jsx` explicitly says:

- `Display` owns overlay / OBS / browser / layout / widgets
- `Viewer` owns `/fire` page theme / fields / defaults / limits

This aligns with the 2026-05-13 engineering handoff and with the production
route ownership already landed.

### 4. The Bundle Acknowledges Engineering Baseline

`Danmu Redesign v3.html` includes an intro note that directly references the
2026-05-13 engineering baseline. That is a good sign: the design bundle is now
responding to repo state instead of acting as an isolated prototype universe.

## Conflicts And Non-Canonical Items

### 1. The Bundle Is Not Self-Contained Yet

The zip still carries the old `HANDOFF-REWORK-2026-05-04.md`, but does not
include:

- `HANDOFF-PRIORITY-RESET-2026-05-05.md`
- `HANDOFF-ENGINEERING-UPDATE-2026-05-13.md`

That means a receiver opening the zip alone still cannot see the current
canonical ruleset in one place.

### 2. Open Decisions Are Marked Closed Without A Canonical Handoff Note

`components/admin-shell-8area.jsx` contains an `OPEN DECISIONS · ALL CLOSED`
section that closes:

- Polls layout
- Effects card count
- History tabbed page
- Viewer Config tabbed page
- Notifications destination
- Audit Log simplification

But the repo-canonical 2026-05-13 handoff still treated those as pending
Design decisions. A page-level artboard cannot close those decisions by itself;
the handoff doc must be updated explicitly.

### 3. Viewer Field Inventory Still Contains A Rules Conflict

`components/admin-display-v2.jsx` includes `Stroke / Shadow` as a viewer field
toggle. This conflicts with `docs/designs/design-brief-v2.md`, which explicitly
excludes independent viewer-side stroke / shadow controls.

Global theme styling is valid. Per-viewer stroke / shadow toggles are not.

### 4. System Scope Is Conceptually Simplified But Not Mapped

The v3 shell overview collapses `System` into a smaller leaf set such as:

- Security
- Setup
- Fire Token
- Integrations
- Backup
- About

But the shipped app still has additional system-owned leaves and legacy
surfaces reachable through `system`, including:

- `api-tokens`
- `wcag`
- `scheduler`
- `webhooks`
- `plugins`
- `sessions`
- `search`
- `audit`
- `replay`
- `audience`

The bundle does not yet include a migration note saying whether these are:

- hidden but still supported
- folded into other leaves
- intentionally removed from the canonical shell

Without that mapping, the bundle is visually clearer but operationally
underspecified.

### 5. Notifications / Audit / Polls Are Still Decision-Laden

The v3 HTML makes specific choices such as:

- bell tray + drawer for notifications
- simplified audit log
- fixed 8-card effects grid
- master-detail polls

Some of those may be good choices. The issue is not the choices themselves; the
issue is that the bundle presents them as settled without updating the canonical
handoff trail that engineering is using.

## Recommended Disposition

### Adopt Now

- the 8-area admin shell direction
- `Security` under `System`
- explicit `Display` vs `Viewer` ownership split
- the v3 bundle as evidence that Design has accepted the 2026-05-13 baseline

### Hold For Explicit Design Confirmation

- fixed 8-card Effects rule
- master-detail Polls as final canonical layout
- bell tray / drawer replacing fuller Notifications surfaces
- simplified Audit Log as final semantics
- the exact final `System` leaf inventory

### Reject As-Is

- viewer-side `Stroke / Shadow` field toggle
- any interpretation that this zip alone is now the canonical bundle

## Engineering Follow-Up Recommended

1. Update the GitHub handoff doc to record that zip3 aligned the major IA
   direction.
2. Keep the repo handoff canonical until Design ships a bundle that includes a
   current source-of-truth note and resolves the conflicts above.
3. Only implement low-risk slices from v3 that reinforce already-settled IA
   ownership, not the newly self-closed decisions.

## Short Conclusion

zip3 is the first bundle that visibly converges toward the repo's real 8-area
admin IA. That is progress.

It still cannot replace the repo handoff as the canonical design source because
it mixes strong alignment on IA with unresolved or self-asserted decisions on
Viewer controls, Notifications, Audit, Polls, Effects, and `System` scope.
