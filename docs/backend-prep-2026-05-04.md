# Backend Prep · 2026-05-04 (post P0-0)

Audit of which Q3 quick-action endpoints exist vs need building.
Reference: `docs/design-v2-backlog.md` § P0-0 + decisions-log-may04 Q3.

## Q3 Reversible (need fire + undo + audit)

| Action | Fire endpoint | Undo endpoint | Status |
|---|---|---|---|
| 加入黑名單 | `POST /admin/blacklist/add` | `POST /admin/blacklist/remove` | ✅ DONE |
| Mute 訊息 (by fingerprint) | — | — | ❌ MISSING |
| 封鎖單則訊息 (message-id) | — | — | ❌ MISSING |
| 隱藏訊息 (in-overlay) | — | — | ❌ MISSING |

## Q3 Irreversible (need fire only — no undo by definition)

| Action | Endpoint | Status |
|---|---|---|
| 啟動投票 | `POST /admin/poll/create` + `/poll/start` | ✅ DONE |
| 觸發效果 (broadcast .dme to overlay) | — | ⚠ ONLY admin preview (`/effects/preview` returns CSS, not broadcast) |
| 推送廣播 (admin sends danmu) | — | ⚠ Public `/fire` exists, no admin-side variant |
| 結束場次 | `POST /admin/session/close` | ✅ DONE |

## Three concrete gaps

### Gap 1 — Message-level moderation (mute / block-single / hide)

The dashboard's per-row ⋯ menu (post-Q4-retraction) needs to act on a
single message in the live feed. Currently moderation works at:
- **fingerprint level** (blacklist/add — bans the user) — heavy
- **filter rule level** (regex match on text) — global

Neither is "block this one specific message".

**Proposal — new endpoints:**

```
POST   /admin/messages/<msg_id>/hide          # remove from overlay only
POST   /admin/messages/<msg_id>/restore       # undo hide
POST   /admin/fingerprint/<fp>/mute           # silence for N seconds
POST   /admin/fingerprint/<fp>/unmute         # undo mute
```

Backend lift: needs `message_id` to flow from `/fire` through `ws_queue`
into history (currently history records messages but assigning a stable
ID for moderation lookup needs verification — likely a service-side
change). Mute is simpler: just a TTL-keyed deny set against fingerprint
checked at /fire admit time.

**Decision needed:** is per-message hide the right model, or is mute-by-fingerprint
sufficient for the live console use case? Original `decisions-log-may04.jsx`
treats them as 4 separate reversible actions — but in practice presenters
usually want "shut up that one user" (fingerprint mute) more than "remove
that one specific quote" (message hide).

### Gap 2 — Effect "fire-now" broadcast

Today's effects flow:
1. Audience sends danmu containing keyword (or every danmu, depending on rule)
2. Match → effect CSS pushed to overlay via existing render pipeline

Dashboard quick action needs:
3. Admin clicks effect card → effect plays NOW for everyone (no danmu)

Endpoint: `POST /admin/effects/<name>/fire` — broadcasts an "effect_pulse"
WS message to overlay; overlay applies the effect to a synthetic visual
beat (or to next danmu, designer's call).

**Proposal:**
```
POST /admin/effects/<name>/fire
  body: { duration_ms?, target?: 'next-danmu' | 'banner' }
  → { fired: true, effect: <name>, ws_clients: <int> }
```

Service work: extend `services/effects.py` with `fire_effect(name, target)`
that pushes a WS frame. Overlay JS needs a handler for the new message
type (frontend work, not backend prep).

### Gap 3 — Admin push broadcast danmu

`/fire` is the public submission endpoint, gated by rate-limit + filter
+ blacklist. Admin "推送廣播" should bypass rate-limit and filter (admin
text isn't subject to audience moderation), and should mark the message
as `source: 'admin'` so overlay can style it differently.

**Proposal:**
```
POST /admin/broadcast/send
  body: { text, style? }
  → { sent: true, message: <persisted record> }
```

Reuses `messaging.forward_to_ws_server(data, bypass_broadcast_gate=True)`
which already exists for the queue-drain code path. Just needs a new
admin endpoint that calls it.

## Bootstrap snapshot expansion (DONE this commit)

Added two sections to `/admin/bootstrap`:
- `session` — `session_service.get_state()` (current/live session info)
- `audit` — last 10 audit log entries

Rationale: the live-console dashboard topbar shows session name +
duration, and the notification bell pulls system events from the audit
log. Both should be in the first-paint payload to avoid extra fetches.

History tab (sessions / search / audit / replay / audience) is B-tier
and lazy-loaded on tab activation — NOT added to bootstrap to keep the
payload light.

## Recommendation

**Build now (mechanical, low-risk):**
- Bootstrap expansion ✅ (this commit)

**Build when frontend pulls:**
- Gap 2 (`/admin/effects/<name>/fire`) — small, well-scoped, unblocks
  the dashboard's most differentiating quick action
- Gap 3 (`/admin/broadcast/send`) — small, reuses existing service
  function, unblocks the broadcast quick action

**Decide before building:**
- Gap 1 (message-level moderation) — needs UX call on whether to model
  it as "hide message" vs "mute fingerprint" vs both. Affects history
  schema, audit shape, and UI affordance.

Owner sign-off needed on Gap 1 model before code lands.
