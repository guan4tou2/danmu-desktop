# Onscreen Danmu Limiter Design

**Goal:** Let admins cap how many danmu are on screen at once, so the overlay never smothers underlying content (e.g. slides). Supports two overflow strategies — **drop** or **queue (FIFO + TTL)**; public submitters see a "screen full, waiting…" state in queue mode.

**Architecture:** Server-side rate limiter that sits in front of the existing `messaging.forward_to_ws_server()` chokepoint. No desktop (Electron) code changes required — the overlay renders whatever the server sends, and the server decides when to send.

**Tech Stack:** Python 3 (`threading.Lock`, `collections.deque`, `threading.Timer`), Flask blueprints, existing settings-store pattern, vanilla JS in public web.

---

## Problem

`server/services/messaging.py:forward_to_ws_server()` is the single point where all danmu (public submit, admin test, webhook replies, scheduled replays, polls, widgets) are pushed to the overlay WS. Today every message is forwarded unconditionally. The Electron overlay caps **tracks** (rows) via `max-tracks`, but nothing caps total concurrent danmu — so a busy chat still buries the screen.

The original request was "desktop can set max danmu on screen." Clarifying with the user revised the scope: the setting belongs in the **admin panel** (centralised across all submit paths), and when overflow is queued the **public web** must show a "screen full, waiting…" state, ticket-grab style.

---

## Feature Spec

### Admin settings (2 new scalars)

| Key | Type | Default | Range |
|---|---|---|---|
| `max_onscreen_danmu` | int | `20` | `0` = unlimited, otherwise `1–200` |
| `overflow_mode` | enum | `"drop"` | `"drop"` \| `"queue"` |

### Overflow behaviour

- **drop mode** — if in-flight count ≥ max, discard silently. Public submit response: `{status: "dropped", reason: "full"}`.
- **queue mode** — if in-flight count ≥ max, enqueue the message. When an in-flight slot opens, pop from queue and forward. Public submit response: `{status: "queued"}`.
  - Queue is FIFO, bounded at 50 entries. 51st entry is rejected: `{status: "rejected", reason: "queue_full"}`.
  - Each queued entry has a TTL of 60 s. If still in queue after 60 s, it is discarded. If the client is still holding a pending UI, its next submit will surface the rejection; otherwise the drop is silent server-side.

### Public web UX

Minimal "ticket-grab" feedback — no position number, no estimated wait time. Submit button click → server response → toast:

| `status` | Toast (zh-TW) | Toast (en) | Color |
|---|---|---|---|
| `sent` | 已送出 | Sent | green (or silent) |
| `queued` | 畫面已滿，排隊中⋯ | Screen full, queued… | yellow |
| `dropped` | 畫面已滿，略過 | Screen full, dropped | grey |
| `rejected` (queue_full) | 伺服器繁忙，請稍後再試 | Server busy, try again | red |
| `rejected` (ttl_expired) | 等候逾時 | Timed out | grey |

Reuse existing public-web toast component — no new UI shell.

---

## Architecture

### New service: `server/services/onscreen_limiter.py`

Single class `OnscreenLimiter` (module-level singleton instance `_limiter`) with a `threading.RLock` guarding all state. Exposes three public functions:

```python
def try_send(data: dict, send_fn: Callable[[dict], bool]) -> dict:
    """Attempt to send `data` via `send_fn`. Returns a status dict."""

def get_state() -> dict:
    """Returns {in_flight: int, queue_len: int, max: int, mode: str} for admin dashboard."""

def reset() -> None:
    """Testing hook — clear all state."""
```

Internal state:
- `_in_flight: dict[str, float]` — `{msg_id: expires_at}` where `msg_id` is a uuid4, `expires_at = now + duration_ms/1000`.
- `_queue: deque[tuple[str, float, dict, Callable]]` — `(msg_id, enqueue_time, data, send_fn)`, bounded `maxlen=50`.
- `_timers: dict[str, threading.Timer]` — one per in-flight entry, fires on expiry to pop queue.
- `_sweep_thread: threading.Thread` — daemon thread, wakes every 1 s to evict queue entries older than 60 s.

### Duration estimation

Mirror the Electron formula so server and overlay agree:

```python
SCROLL_MIN_MS, SCROLL_MAX_MS = 2000, 20000

def estimate_duration_ms(data: dict) -> int:
    layout = data.get("layout", "scroll")
    if layout in ("top_fixed", "bottom_fixed"):
        cfg = data.get("layoutConfig") or {}
        return int(cfg.get("duration", 3000))
    if layout == "float":
        cfg = data.get("layoutConfig") or {}
        return int(cfg.get("duration", 4000))
    # scroll / rise
    speed = max(1, min(10, int(data.get("speed", 5))))
    return int(SCROLL_MAX_MS - (speed - 1) * (SCROLL_MAX_MS - SCROLL_MIN_MS) / 9)
```

This matches `danmu-desktop/renderer-modules/track-manager.js:320–323` exactly. A unit test pins both sides to a shared table so future drift is caught.

### `try_send()` algorithm

```
1. lock:
2.   evict expired in_flight entries (defensive; timers should have done this)
3.   max = settings.max_onscreen_danmu  (0 → disabled)
4.   if max == 0:
5.     unlock; call send_fn(data); return {status: "sent"}
6.   if len(in_flight) < max:
7.     msg_id = uuid4(); duration = estimate_duration_ms(data)
8.     in_flight[msg_id] = now + duration/1000
9.     Timer(duration/1000, _on_slot_free, args=(msg_id,)).start()
10.    unlock; ok = send_fn(data)
11.    if not ok: _on_slot_free(msg_id) immediately (free the slot)
12.    return {status: "sent"}
13.  # full
14.  mode = settings.overflow_mode
15.  if mode == "drop":
16.    unlock; return {status: "dropped", reason: "full"}
17.  # queue mode
18.  if len(queue) >= 50:
19.    unlock; return {status: "rejected", reason: "queue_full"}
20.  queue.append((uuid4(), now, data, send_fn))
21.  unlock; return {status: "queued"}
```

### `_on_slot_free(msg_id)` algorithm

```
1. lock:
2.   in_flight.pop(msg_id, None); timers.pop(msg_id, None)
3.   while queue and len(in_flight) < max:
4.     (qid, enq_time, data, send_fn) = queue.popleft()
5.     if now - enq_time > 60: continue  # TTL expired
6.     duration = estimate_duration_ms(data)
7.     in_flight[qid] = now + duration/1000
8.     Timer(duration/1000, _on_slot_free, args=(qid,)).start()
9.     unlock; send_fn(data); lock  # release lock during send
10. unlock
```

Note: releasing the lock during `send_fn()` avoids deadlock if send_fn touches limiter state (it shouldn't, but defensively).

### Sweep thread (`_sweep_queue_ttl`)

Every 1 s, scan queue left-to-right, `popleft()` entries with `now - enq_time > 60`. Daemon thread so it dies with the process. Started once on app boot via an `init_limiter(app)` call in `server/app.py`.

### Integration point

`server/services/messaging.py:forward_to_ws_server()` becomes the `send_fn`:

```python
def forward_to_ws_server(data):
    def _do_send(payload):
        try:
            ws_queue.enqueue_message(payload)
            telemetry.record_message()
            _broadcast_live_feed(payload)  # extracted
            return True
        except Exception as exc:
            current_app.logger.error("ws forward error: %s", sanitize_log_string(str(exc)))
            return False
    return onscreen_limiter.try_send(data, _do_send)  # returns status dict
```

**Breaking change:** `forward_to_ws_server()` previously returned `bool`; now returns `dict`. Call sites updated:

- `server/routes/api.py:275` — pass the full status dict back to the public client.
- `server/routes/admin/webhooks.py` — treat any non-error status as "sent enough" (webhook test path doesn't care about queueing).
- `server/routes/admin/settings.py` — same.
- `server/plugins/example_*.py` — plugin examples updated to ignore return (they don't inspect it today).

The existing test calls (`test_system_e2e.py`, `test_messaging.py`, `test_effects.py`) are updated to unpack `.get("status")`.

---

## Settings Storage & Admin UI

### Settings persistence

`max_onscreen_danmu` and `overflow_mode` do **not** fit the existing index-based `settings_store` schema (which is for display options like `Color[0]=true,#fff`). They are scalar runtime controls — same shape as `ws_auth.json`.

Create `server/runtime/onscreen_limits.json`:

```json
{"max_onscreen_danmu": 20, "overflow_mode": "drop"}
```

File mode `0o600`. Lazy-read on first access, cached in module-level `_state`. Writes go through `set_state(dict)` which validates and atomically rewrites (temp file + `os.replace`). Missing file → defaults.

New module `server/services/onscreen_config.py` exports `get_state()` and `set_state(partial)`. Mirror the layout of `server/services/ws_auth.py` (same memory, concurrency, graceful-degradation pattern v4.8.2+).

### Admin API

Add to `server/routes/admin/settings.py`:

- `GET /admin/api/onscreen-limits` → `{max_onscreen_danmu, overflow_mode}`
- `POST /admin/api/onscreen-limits` (CSRF + login) → validates and calls `onscreen_config.set_state(...)`
  - Validation: `max_onscreen_danmu` is int in `[0, 200]`; `overflow_mode` is `"drop"` or `"queue"`.

### Admin UI

Add a card to the admin dashboard under the existing "顯示設定 / Display Settings" section (or its own "流量控制 / Traffic Control" card — leaning toward new card since it's behavioural, not visual).

- Number input: "畫面最多同時顯示彈幕數 (0 = 不限)" `<input type=number min=0 max=200>`
- Radio buttons: `◉ 超過就丟棄 (Drop) / ○ 排隊等待 (Queue)`
- Save button → POST, success toast.
- (Nice-to-have, v4.9+) Live stat: "當前在顯示: X / Y，排隊中: Z"

### i18n

New keys across the 4 existing locales (`zh-TW`, `zh-CN`, `en`, `ja`):

| Key | zh-TW | en |
|---|---|---|
| `maxOnscreenDanmu` | 最大同時顯示數 | Max onscreen danmu |
| `overflowMode` | 超量處理方式 | Overflow mode |
| `overflowModeDrop` | 直接丟棄 | Drop |
| `overflowModeQueue` | 排隊等待 | Queue |
| `onscreenFullQueued` | 畫面已滿，排隊中⋯ | Screen full, queued… |
| `onscreenFullDropped` | 畫面已滿，略過 | Screen full, skipped |
| `queueFullTryLater` | 伺服器繁忙，請稍後再試 | Server busy, try again |
| `waitTimedOut` | 等候逾時 | Timed out |
| `trafficControl` | 流量控制 | Traffic control |

---

## Public Web Integration

`server/templates/index.html` (public submit form) already has a submit handler that reads the JSON response. Current shape is `{"status": "OK"}` on success, `{"error": ...}` on failure.

**Shape change:** success response is now the limiter status dict:

```json
{"status": "sent"}                              // existing behaviour
{"status": "queued"}
{"status": "dropped", "reason": "full"}
{"status": "rejected", "reason": "queue_full"}
{"status": "rejected", "reason": "ttl_expired"}
```

The existing check `if (res.status === "OK")` becomes `if (res.status === "sent")` (green path); other statuses trigger appropriate toast keys above. This is a minor breaking change for anyone who built external clients against `{"status": "OK"}` — mention in CHANGELOG but don't add a backwards-compat shim.

---

## Testing

New file `server/tests/test_onscreen_limiter.py`:

| Test | Behaviour |
|---|---|
| `test_unlimited_passes_all` | `max=0` → all pass through regardless of load |
| `test_drop_mode_caps` | `max=3, mode=drop` → 4th returns `dropped`, in_flight stays at 3 |
| `test_queue_mode_fifo` | `max=2, mode=queue` → send 5; first 2 sent; next 3 queued in order; as timers fire, queue releases FIFO |
| `test_queue_cap_50` | `max=1, mode=queue` → enqueue 50; 51st rejected with `queue_full` |
| `test_queue_ttl_60s` | `max=1, mode=queue` → enqueue, monkeypatch time → 61s; sweep removes it; slot opens → no release |
| `test_duration_formula_parity` | table-driven; asserts server's `estimate_duration_ms()` matches overlay's formula for speeds 1–10 and each layout |
| `test_forward_failure_frees_slot` | `send_fn` returns False → slot must not leak; in_flight decremented |
| `test_settings_live_reload` | change `max` via `onscreen_config.set_state` mid-test; next `try_send` sees new value |
| `test_concurrency` | 10 threads × 20 sends; invariants hold: in_flight ≤ max, queue ≤ 50, no duplicate msg_ids |

Playwright browser tests are **not** extended for this feature — unit coverage is sufficient, and the browser suite is already expensive.

Existing tests updated:
- `test_messaging.py` — unpack new dict return from `forward_to_ws_server`.
- `test_system_e2e.py` — same.
- `test_effects.py` — same.

Test suite count: 777 → ~786 (9 new + 3 modified).

---

## Files Changed

**New:**
- `server/services/onscreen_limiter.py`
- `server/services/onscreen_config.py`
- `server/tests/test_onscreen_limiter.py`
- `server/runtime/onscreen_limits.json` (runtime artefact, gitignored)
- `docs/superpowers/specs/2026-04-22-onscreen-danmu-limiter-design.md` (this file)

**Modified:**
- `server/services/messaging.py` — wrap `forward_to_ws_server` with limiter; return dict
- `server/routes/api.py:~275` — propagate dict to JSON response
- `server/routes/admin/__init__.py` — register new settings routes if needed
- `server/routes/admin/settings.py` — add `GET/POST /admin/api/onscreen-limits`
- `server/templates/admin.html` — new settings card markup (locate by existing `max-tracks` card as anchor)
- `server/templates/index.html` — map new statuses to toast messages
- Admin settings card JS — fetch/save limits. Locate by grepping for an existing admin settings handler (e.g. `fetch('/admin/api/settings'`) and colocate the new handler there
- Public submit JS — handle new status shape. Locate by grepping for the current `"status": "OK"` check in `server/static/js/` or inline in `index.html`
- `server/i18n/*.json` (4 locales) — new keys
- `server/config.py` — bump `APP_VERSION = "4.9.0"`
- `danmu-desktop/package.json` — bump `version` to `"4.9.0"`
- `CHANGELOG.md` — v4.9.0 entry
- `server/tests/test_messaging.py`, `test_system_e2e.py`, `test_effects.py` — adapt return shape
- `.gitignore` — add `server/runtime/onscreen_limits.json` (pattern may already cover `runtime/*.json`)

**Unchanged:**
- All `danmu-desktop/` code. The overlay keeps rendering whatever arrives. No client-side limiting.

---

## Non-Goals (YAGNI)

- **No position indicator** in public UI (user explicitly chose ticket-grab UX).
- **No desktop-side limiter** (would require reverse state sync, no user value over server-side).
- **No cross-worker queue sharing** (server runs single-process; if that changes, use Redis pub/sub, out of scope).
- **No user-visible queue depth** (admin can see it via `/admin/api/onscreen-limits/state`; public can't).
- **No per-layout caps** (single global cap only).
- **No priority queue** (purely FIFO; moderators who want "always show mine" can use the existing admin test path, which still goes through the limiter — same rules).

---

## Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Server's duration estimate drifts from overlay's actual animation time (window resize, CPU lag) | Timers are a best-effort cap, not a hard invariant. If estimate is 5% off, in_flight is ~5% off — acceptable. Pinned formula test catches algorithmic drift. |
| `threading.Timer` per message is wasteful at high volume | At `max=20`, only 20 timers alive at any time. Queue entries don't get timers. Acceptable. If profiling shows it hurts, switch to single `heapq` + scheduler thread. |
| Public client polls submit on retry, gets 5 consecutive `queued` responses | Expected — each new submission creates a new queue entry. Public UI should debounce submit button (already does) so this isn't an incremental regression. |
| `forward_to_ws_server` return-type change breaks third-party plugin code | Plugins that called it already ignore return value (see `server/plugins/example_*.py`). Documented in CHANGELOG under "Breaking". |
| Queue TTL of 60 s and cap of 50 are magic numbers | Plumbed as module-level constants `QUEUE_TTL_SECONDS = 60` and `QUEUE_MAX_SIZE = 50` so they're greppable. Not exposed as admin settings (YAGNI); can promote later if requested. |

---

## Rollout

1. Ship under `APP_VERSION = "4.9.0"`.
2. Defaults: `max_onscreen_danmu = 20`, `overflow_mode = "drop"`. This **is** a behavioural change for existing deployments — if they currently run with unthrottled flow and rely on raw throughput, 20 may be too strict. Document in CHANGELOG that setting `max_onscreen_danmu = 0` restores pre-v4.9.0 behaviour. Add a one-time notice to the admin UI on first load of v4.9.0: "流量控制已啟用，預設上限 20 條。若需停用請設為 0。"
3. Follow the standard v4.x release train: bump `package.json` + `config.py:APP_VERSION` in the same commit; `.github/workflows/build.yml` auto-triggers binaries.
