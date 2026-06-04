# Design Bundle Review · zip4 Desktop · 2026-05-14

**Bundle reviewed:** `/Users/guantou/Downloads/danmu (4).zip`
**Repo branch at review time:** `claude/design-v2-retrofit`
**Review scope:** desktop bundle alignment against repo-canonical desktop rules

## Summary Verdict

**Status:** desktop artboards aligned, desktop source bundle not yet canonical

This bundle materially improves the desktop scene inventory and ordering. It
matches the intended three-surface desktop model at the artboard level:

- `Desktop · Control Window`
- `Desktop · Live / Disconnected / Idle / Reconnecting`
- `Desktop · Tray · Connected / Disconnected`

However, the underlying desktop source bundle still encodes the older product
model, so the zip cannot yet be treated as canonical by itself.

## What Aligns Correctly

- standalone `Desktop · Tray Popover` artboard is removed
- standalone `Desktop · Window Picker` artboard is removed
- standalone `Desktop · First-run Gate` artboard is removed
- desktop scene order now starts with `Desktop · Control Window`
- Desktop states are broken out into `Live / Disconnected / Idle / Reconnecting`
- tray is expressed as `Connected / Disconnected` state surfaces

## Blocking Mismatches In Source

The bundle still contains these desktop-source conflicts:

1. `components/desktop.jsx` still models `ControlWindow` as:
   `Desktop / Connection / Shortcuts / Update / About`
2. the default control-window section is still `desktop`, not `conn`
3. a standalone `FirstRunGate` scenario still exists in source
4. older tray/controller concepts still exist in source even though the
   corresponding artboards were removed

## Canonical Interpretation

Repo-canonical desktop rules remain:

- `Control Window` primary order is `Connection → Desktop → About`
- `Shortcuts` and `Update` are not primary desktop pages
- first-run is inline connection setup, not a standalone desktop surface
- tray is status-only, not a popover product surface
- window picker is internal display-selection behavior, not a deliverable scene

Until the bundle source reflects those rules directly, the zip should be read
as:

- **artboards:** aligned
- **desktop source:** still partial

## Engineering Follow-Up

Repo-tracked desktop design mirrors should be corrected to the canonical rules
even if the external zip is not edited in place. Engineering handoff docs
should avoid any claim that desktop is “fully aligned” without the caveat above.
