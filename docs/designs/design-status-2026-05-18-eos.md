# Status Summary — 2026-05-18 EOS (end of session)

**Branch:** `claude/design-v2-retrofit`
**Sprint:** Polestar pivot + design v4 brief 0518 series
**Tests:** 1141 server pytest pass / 444 jest pass

---

## ✅ Shipped this session (in order)

### Brief 0518 round 1 (4 items)

1. **Replay annotation timeline** — Backend (`services/replay_annotations.py` + routes/admin/replay.py) + UI in `admin-session-detail.js`: 4 label types (highlight/vote/note/warning) with shape-encoded markers, hover-CTA, add modal via HudConfirm, sticky list panel
2. **Time-bound ban** — `services/moderation_bans.py` (audit-log-backed, lazy-check, no reaper thread) + `routes/admin/modbans.py` + new `admin-modbans.js` page with picker modal, expires-in chip, permanent confirm step
3. **Sessions bucket reframe** — `admin-sessions.js` swapped 8-col table for chronological buckets (今天/昨天/本週/更早) with collapse toggle + per-session sparkline rows
4. **Open Qs (4a/4b/4c/4d)** — 4a: mobile hamburger sheet with theme tri-state + lang quad-state. 4c: viewer nickname chip + floating popover edit. 4d: hero closed. 4b: fp hidden on viewer (existing behavior confirmed)

### Brief 0518-v2 (1 item from design's response)

5. **Custom-duration chip** — Modbans picker added 6th "自訂" chip with dashed border + slide-reveal input row (number + 小時/天 toggle + live `= N seconds`)

### Brief 0518-v3 (3 items from design's response)

6. **Viewer desktop theme chip** — ☼/◐/☾ 3-segment in hero (hidden on mobile, hamburger covers there)
7. **Moderation sub-tabs** — `#/moderation` now hosts 6 tabs: 審核佇列 / 封禁管理 / 黑名單 / 敏感字 / 速率限制 / 指紋. `#/modqueue` + `#/modbans` deep links alias-redirect into the new tabs
8. **Light viewer 3 token fixes** — Hero filter swap (glow → subtle shadow), nickname chip sky-400 → sky-600 + border 0.45 → 0.35, marquee `filter: brightness(0.7) saturate(1.15) contrast(1.15)` to shift pale -300/-400 colors into -600 territory on white

### Theme unification (raised by user)

9. **Single storage key (`theme-mode`) + single attribute (`<html data-theme>`)** — Admin theme switcher + viewer hamburger + viewer desktop chip all share state. Cross-tab `storage` event sync. Legacy keys (`admin-theme-mode`, `viewer.theme.override`) migrated once on boot

### Polestar polish pass

10. **Light theme admin shell audit pass 2** — Added `--hover-tint-{weak,strong,_}` theme-aware tokens. Migrated 9 hardcoded `rgba(255,255,255,X)` hover backgrounds (admin-about-btn / admin-msgd-actions / admin-notif-item / admin-err__hint code / admin-audit-tip code / admin-vc-preview-input / admin-sd-ann-row / admin-sessions-bucket-row / input[type=range] track)
11. **Dead route cleanup** — Removed standalone `modqueue` + `modbans` entries in ADMIN_ROUTES (now alias-only)
12. **Skeleton consistency** — Wired `AdminSkeletons.listRows` into Sessions + Modbans first-paint. Audit table got inline `<tr>` shimmer skeleton
13. **Motion language** — Theme chip + modbans preset chip get `--ease-spring` overshoot on `scale(1.05)` when active. Toast slide-in uses spring via inline transition
14. **Tablet breakpoints** — Polls master-detail stacks at ≤1023 (was 960). Effects card runs 2 cols at 769-1023 (was 3 cols cramped to 247px)

---

## 🔴 Remaining for design

### P1 — Backlog feature items (need design + backend)

1. Polls multi-question + per-question image — backend schema bump needed
2. Display per-setting compound control + live preview
3. Effects user-uploaded `.dme` live preview
4. Sounds per-tile inline volume slider
5. Fonts subset button (pyftsubset dep + design)

### P2 — Polestar code cleanup (needs design ack)

6. `admin-broadcast.js` + route `#/broadcast` → rename to `overlay`?  Page title already says "Overlay 控制" but module name + slug still broadcast
7. `services/broadcast.py` lifecycle states (standby/live/ended) — keep as internal or full rip-out?

---

## 🟢 Closed / record-only

- OBS Browser Source 配置嚮導 — recorded in [memory/obs_browser_source_wizard_2026-05-18.md](../../.claude/projects/-Users-guantou-Desktop-danmu-desktop/memory/obs_browser_source_wizard_2026-05-18.md), no implementation planned
- Cookies / Privacy consent modal — user declined
- Annotation custom labels (#1 from v2) — A: keep 4 fixed
- ban_expired auto-emit (#3 from v2) — A: accept lazy
- Sessions pagination (#4 from v2) — A: accept client-side full load

---

## 📊 Visual / functional regression risk

Low. All changes are additive or token-substitutions:
- New tokens introduced: `--hover-tint-{weak,strong,_}` (theme-aware), `--motion-{fast,normal,slow}`, `--ease-{out,in-out,spring}` already shipped earlier
- All hardcoded hex/rgba migrations only swap values that already match across themes
- Spring overshoot on chips is purely visual (no layout impact)
- Tablet breakpoint shifts only re-flow grid columns; no element resize

---

## 建議下一輪

- 沒有 design 待解的問題清空
- P2 code cleanup 工程主導即可，給 design 一個 yes/no
- P1 backlog 是真實 feature work，需要正式 design brief 才能動

要走 P2 嗎？工程估時 3-5h，可拆兩個 PR：
- PR-a: admin-broadcast → overlay rename（純命名、route alias 已存在）
- PR-b: services/broadcast.py lifecycle 廢棄評估 + 拔
