# Onscreen Danmu Limiter Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship an admin-controlled onscreen danmu cap (default 20) with drop or FIFO-queue overflow modes, surfaced to public submitters as ticket-grab-style "畫面已滿，排隊中…" toasts.

**Architecture:** Intercept `messaging.forward_to_ws_server()`—the single chokepoint all danmu flow through—with a new `OnscreenLimiter` service that maintains an in-flight tracker plus a bounded TTL queue. Setting persistence mirrors the existing `ws_auth.py` runtime-file pattern. No Electron (desktop) changes.

**Tech Stack:** Python 3.12 (`threading.RLock`, `threading.Timer`, `collections.deque`), Flask blueprint routing, existing JS toast + settings-card components, vanilla `fetch` for admin API.

**Spec:** `docs/superpowers/specs/2026-04-22-onscreen-danmu-limiter-design.md`

**Test runner:** `cd server && PYTHONPATH=.. uv run python -m pytest tests/<file>.py -v`

---

## File Structure

**New files:**
- `server/services/onscreen_config.py` — persistent settings (`max_onscreen_danmu`, `overflow_mode`); mirrors `ws_auth.py`
- `server/services/onscreen_limiter.py` — in-flight tracker + FIFO queue + TTL sweep; `try_send()` is the sole public entry
- `server/tests/test_onscreen_config.py`
- `server/tests/test_onscreen_limiter.py`
- `server/runtime/onscreen_limits.json` — runtime artefact (gitignored)

**Modified files:**
- `server/services/messaging.py` — wrap `forward_to_ws_server` through limiter; return dict
- `server/routes/api.py:~275` — propagate limiter status in `/fire` response
- `server/routes/admin/settings.py` — add `GET/POST /admin/api/onscreen-limits`
- `server/services/validation.py` — add `OnscreenLimitsSchema`
- `server/templates/admin.html` — new "流量控制" settings card
- `server/static/js/admin.js` — fetch/save limits
- `server/static/js/main.js:~803` — handle new status shape in `/fire` response
- `server/i18n/*.json` (zh-TW, zh-CN, en, ja) — new keys
- `server/config.py` — `APP_VERSION = "4.9.0"`
- `danmu-desktop/package.json` — `"version": "4.9.0"`
- `CHANGELOG.md` — v4.9.0 entry
- `server/tests/test_messaging.py`, `test_system_e2e.py`, `test_effects.py` — adapt to dict return
- `.gitignore` — ensure `server/runtime/onscreen_limits.json` excluded (pattern likely covers)

---

## Task 1: `onscreen_config.py` — settings persistence

**Files:**
- Create: `server/services/onscreen_config.py`
- Test: `server/tests/test_onscreen_config.py`

**Rationale:** Start with storage because limiter depends on it. Mirror `ws_auth.py` exactly—same locking, same atomic write, same graceful-degradation pattern (v4.8.2+).

- [ ] **Step 1.1: Write failing tests**

Create `server/tests/test_onscreen_config.py`:

```python
"""onscreen_config.py — persistent settings for onscreen limiter."""
import json
import threading
from pathlib import Path

import pytest

from server.services import onscreen_config


@pytest.fixture(autouse=True)
def _isolate_state(tmp_path, monkeypatch):
    state_file = tmp_path / "onscreen_limits.json"
    monkeypatch.setattr(onscreen_config, "_STATE_FILE", state_file)
    onscreen_config._reset_for_tests()
    yield
    onscreen_config._reset_for_tests()


def test_defaults_when_file_missing():
    state = onscreen_config.get_state()
    assert state == {"max_onscreen_danmu": 20, "overflow_mode": "drop"}


def test_get_state_returns_copy():
    s1 = onscreen_config.get_state()
    s1["max_onscreen_danmu"] = 999
    s2 = onscreen_config.get_state()
    assert s2["max_onscreen_danmu"] == 20


def test_set_state_persists_to_file():
    onscreen_config.set_state(max_onscreen_danmu=50, overflow_mode="queue")
    with open(onscreen_config._STATE_FILE) as f:
        on_disk = json.load(f)
    assert on_disk == {"max_onscreen_danmu": 50, "overflow_mode": "queue"}


def test_set_state_validates_max_range():
    with pytest.raises(ValueError):
        onscreen_config.set_state(max_onscreen_danmu=-1, overflow_mode="drop")
    with pytest.raises(ValueError):
        onscreen_config.set_state(max_onscreen_danmu=201, overflow_mode="drop")


def test_set_state_validates_mode():
    with pytest.raises(ValueError):
        onscreen_config.set_state(max_onscreen_danmu=20, overflow_mode="bogus")


def test_set_state_zero_means_unlimited():
    s = onscreen_config.set_state(max_onscreen_danmu=0, overflow_mode="drop")
    assert s["max_onscreen_danmu"] == 0


def test_reload_from_disk_after_cache_reset():
    onscreen_config.set_state(max_onscreen_danmu=42, overflow_mode="queue")
    onscreen_config._reset_for_tests()
    assert onscreen_config.get_state() == {"max_onscreen_danmu": 42, "overflow_mode": "queue"}


def test_write_failure_is_swallowed(monkeypatch, caplog):
    def boom(*a, **kw):
        raise PermissionError("read-only fs")
    monkeypatch.setattr(onscreen_config, "_write_state", boom)
    s = onscreen_config.set_state(max_onscreen_danmu=5, overflow_mode="drop")
    # Memory updated even though disk failed.
    assert s == {"max_onscreen_danmu": 5, "overflow_mode": "drop"}
    assert onscreen_config.get_state()["max_onscreen_danmu"] == 5


def test_malformed_file_falls_back_to_defaults(tmp_path, monkeypatch):
    bad = tmp_path / "onscreen_limits.json"
    bad.write_text("not json{{")
    monkeypatch.setattr(onscreen_config, "_STATE_FILE", bad)
    onscreen_config._reset_for_tests()
    assert onscreen_config.get_state() == {"max_onscreen_danmu": 20, "overflow_mode": "drop"}


def test_concurrent_set_state_is_serialized():
    results = []
    def writer(n):
        onscreen_config.set_state(max_onscreen_danmu=n, overflow_mode="drop")
        results.append(onscreen_config.get_state()["max_onscreen_danmu"])
    threads = [threading.Thread(target=writer, args=(i + 1,)) for i in range(10)]
    for t in threads: t.start()
    for t in threads: t.join()
    final = onscreen_config.get_state()["max_onscreen_danmu"]
    assert 1 <= final <= 10
```

- [ ] **Step 1.2: Run tests — expect ImportError**

Run: `cd server && PYTHONPATH=.. uv run python -m pytest tests/test_onscreen_config.py -v`
Expected: FAIL with `ModuleNotFoundError: server.services.onscreen_config`

- [ ] **Step 1.3: Implement `onscreen_config.py`**

Create `server/services/onscreen_config.py`:

```python
"""Onscreen-danmu rate-limit settings — admin-controllable runtime toggle.

Pattern mirrors ws_auth.py: a runtime JSON file is the source of truth;
admin UI writes to it; read path is hot (called from messaging chokepoint)
and cached in-memory after first load.

Keys:
    max_onscreen_danmu: int in [0, 200]  (0 = unlimited, default 20)
    overflow_mode: "drop" | "queue"      (default "drop")

When disk writes fail (host bind-mount owned by wrong UID, read-only FS),
we log once and continue with in-memory state. Admin UI still works, the
change just won't survive a container restart until the host is fixed.
"""
import errno
import json
import logging
import os
import threading
from pathlib import Path
from typing import Dict, Optional

logger = logging.getLogger(__name__)

_STATE_FILE = Path(__file__).parent.parent / "runtime" / "onscreen_limits.json"
_lock = threading.RLock()
_state: Optional[Dict] = None
_write_failure_logged: bool = False

_DEFAULTS = {"max_onscreen_danmu": 20, "overflow_mode": "drop"}
_VALID_MODES = ("drop", "queue")
_MAX_CAP = 200


def _validate(max_onscreen_danmu: int, overflow_mode: str) -> Dict:
    if not isinstance(max_onscreen_danmu, int) or isinstance(max_onscreen_danmu, bool):
        raise ValueError("max_onscreen_danmu must be int")
    if max_onscreen_danmu < 0 or max_onscreen_danmu > _MAX_CAP:
        raise ValueError(f"max_onscreen_danmu out of range [0, {_MAX_CAP}]")
    if overflow_mode not in _VALID_MODES:
        raise ValueError(f"overflow_mode must be one of {_VALID_MODES}")
    return {"max_onscreen_danmu": max_onscreen_danmu, "overflow_mode": overflow_mode}


def _write_state(state: Dict) -> None:
    _STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
    tmp = _STATE_FILE.with_suffix(f".tmp.{os.getpid()}.{threading.get_ident()}")
    flags = os.O_WRONLY | os.O_CREAT | os.O_TRUNC
    fd = os.open(tmp, flags, 0o600)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            json.dump(state, f, indent=2)
        try:
            os.chmod(tmp, 0o600)
        except OSError as exc:
            if exc.errno not in (errno.ENOSYS, errno.EPERM):
                raise
        tmp.replace(_STATE_FILE)
    except Exception:
        try:
            tmp.unlink()
        except OSError:
            pass
        raise


def _log_write_failure_once(exc: Exception) -> None:
    global _write_failure_logged
    if _write_failure_logged:
        logger.debug("onscreen_limits persist still failing: %s", exc)
        return
    _write_failure_logged = True
    logger.warning(
        "Cannot persist %s (%s: %s). State will live in memory for this "
        "process only.", _STATE_FILE, type(exc).__name__, exc,
    )


def _load() -> Dict:
    if _STATE_FILE.exists():
        try:
            with open(_STATE_FILE, encoding="utf-8") as f:
                data = json.load(f)
            if isinstance(data, dict):
                return _validate(
                    int(data.get("max_onscreen_danmu", _DEFAULTS["max_onscreen_danmu"])),
                    str(data.get("overflow_mode", _DEFAULTS["overflow_mode"])),
                )
        except (ValueError, OSError, json.JSONDecodeError) as exc:
            logger.warning("Malformed %s (%s); using defaults", _STATE_FILE, exc)
    return dict(_DEFAULTS)


def get_state() -> Dict:
    """Return current settings as a dict copy."""
    global _state
    with _lock:
        if _state is None:
            _state = _load()
        return dict(_state)


def set_state(*, max_onscreen_danmu: int, overflow_mode: str) -> Dict:
    """Validate, persist, and return the new state."""
    validated = _validate(max_onscreen_danmu, overflow_mode)
    global _state
    with _lock:
        _state = dict(validated)
        try:
            _write_state(validated)
        except OSError as exc:
            _log_write_failure_once(exc)
        return dict(_state)


def _reset_for_tests() -> None:
    global _state, _write_failure_logged
    with _lock:
        _state = None
        _write_failure_logged = False
```

- [ ] **Step 1.4: Run tests — expect all pass**

Run: `cd server && PYTHONPATH=.. uv run python -m pytest tests/test_onscreen_config.py -v`
Expected: 10 passed

- [ ] **Step 1.5: Commit**

```bash
git add server/services/onscreen_config.py server/tests/test_onscreen_config.py
git commit -m "feat(server): add onscreen_config persistent settings service"
```

---

## Task 2: `onscreen_limiter.py` — drop mode + in-flight tracker

**Files:**
- Create: `server/services/onscreen_limiter.py`
- Test: `server/tests/test_onscreen_limiter.py`

**Rationale:** Build the drop-mode core first (no queue, no TTL). This proves the tracker logic in isolation before layering complexity.

- [ ] **Step 2.1: Write failing tests for drop mode + duration formula**

Create `server/tests/test_onscreen_limiter.py`:

```python
"""onscreen_limiter.py — traffic shaper for danmu flow."""
import threading
import time
from unittest.mock import MagicMock

import pytest

from server.services import onscreen_config, onscreen_limiter


@pytest.fixture(autouse=True)
def _isolate_config(tmp_path, monkeypatch):
    monkeypatch.setattr(onscreen_config, "_STATE_FILE", tmp_path / "cfg.json")
    onscreen_config._reset_for_tests()
    onscreen_limiter.reset()
    yield
    onscreen_limiter.reset()
    onscreen_config._reset_for_tests()


# ── duration estimator parity with overlay (track-manager.js:320-323) ──

@pytest.mark.parametrize("speed,expected", [
    (1, 20000),
    (5, 12000),
    (10, 2000),
])
def test_duration_scroll_matches_overlay_formula(speed, expected):
    got = onscreen_limiter.estimate_duration_ms({"layout": "scroll", "speed": speed})
    assert got == expected


def test_duration_top_fixed_uses_layout_config():
    got = onscreen_limiter.estimate_duration_ms(
        {"layout": "top_fixed", "layoutConfig": {"duration": 5000}}
    )
    assert got == 5000


def test_duration_float_defaults_4000_when_no_config():
    assert onscreen_limiter.estimate_duration_ms({"layout": "float"}) == 4000


# ── drop mode ──

def test_unlimited_passes_all():
    onscreen_config.set_state(max_onscreen_danmu=0, overflow_mode="drop")
    send = MagicMock(return_value=True)
    for i in range(10):
        status = onscreen_limiter.try_send({"text": f"m{i}", "speed": 5}, send)
        assert status["status"] == "sent"
    assert send.call_count == 10


def test_drop_mode_caps_inflight():
    onscreen_config.set_state(max_onscreen_danmu=3, overflow_mode="drop")
    send = MagicMock(return_value=True)
    for i in range(3):
        assert onscreen_limiter.try_send({"text": f"m{i}", "speed": 1}, send)["status"] == "sent"
    # 4th is dropped (speed=1 → duration=20s, all slots full)
    status = onscreen_limiter.try_send({"text": "overflow", "speed": 1}, send)
    assert status == {"status": "dropped", "reason": "full"}
    assert send.call_count == 3
    assert onscreen_limiter.get_state()["in_flight"] == 3


def test_slot_frees_after_duration_expires():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="drop")
    send = MagicMock(return_value=True)
    # speed=10 → duration=2000ms, shortest for test speed
    onscreen_limiter.try_send({"text": "a", "speed": 10}, send)
    assert onscreen_limiter.get_state()["in_flight"] == 1
    time.sleep(2.3)  # wait past duration + timer jitter
    assert onscreen_limiter.get_state()["in_flight"] == 0
    # Slot is free again
    status = onscreen_limiter.try_send({"text": "b", "speed": 10}, send)
    assert status["status"] == "sent"


def test_send_failure_frees_slot_immediately():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="drop")
    send = MagicMock(return_value=False)
    onscreen_limiter.try_send({"text": "x", "speed": 5}, send)
    # send_fn returned False → slot must not be reserved
    assert onscreen_limiter.get_state()["in_flight"] == 0
    # Next send is allowed
    send_ok = MagicMock(return_value=True)
    status = onscreen_limiter.try_send({"text": "y", "speed": 5}, send_ok)
    assert status["status"] == "sent"


def test_live_config_change_takes_effect():
    """Changing settings at runtime must affect the next try_send."""
    onscreen_config.set_state(max_onscreen_danmu=5, overflow_mode="drop")
    send = MagicMock(return_value=True)
    assert onscreen_limiter.try_send({"text": "a", "speed": 1}, send)["status"] == "sent"
    # Tighten cap to 1 — 'a' already in-flight, so the next send must drop.
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="drop")
    status = onscreen_limiter.try_send({"text": "b", "speed": 1}, send)
    assert status["status"] == "dropped"
```

- [ ] **Step 2.2: Run tests — expect ImportError**

Run: `cd server && PYTHONPATH=.. uv run python -m pytest tests/test_onscreen_limiter.py -v`
Expected: FAIL with `ModuleNotFoundError`

- [ ] **Step 2.3: Implement `onscreen_limiter.py` (drop-mode core only)**

Create `server/services/onscreen_limiter.py`:

```python
"""Onscreen danmu limiter — gate the messaging chokepoint by max concurrent
danmu. Settings come from onscreen_config.

This task implements drop mode + in-flight tracker only. Queue mode is
layered on in Task 3.
"""
import logging
import threading
import time
import uuid
from typing import Callable, Dict

from . import onscreen_config

logger = logging.getLogger(__name__)

# Duration formula — MUST match danmu-desktop/renderer-modules/track-manager.js:320-323
_SCROLL_MIN_MS = 2000
_SCROLL_MAX_MS = 20000

_lock = threading.RLock()
_in_flight: Dict[str, float] = {}  # msg_id -> expires_at (unused but handy for debug)
_timers: Dict[str, threading.Timer] = {}


def _now() -> float:
    """Time source — tests monkeypatch this instead of time.monotonic globally."""
    return time.monotonic()


def estimate_duration_ms(data: dict) -> int:
    """Compute overlay animation duration so we can time slot release."""
    layout = data.get("layout", "scroll")
    if layout in ("top_fixed", "bottom_fixed"):
        cfg = data.get("layoutConfig") or {}
        return int(cfg.get("duration", 3000))
    if layout == "float":
        cfg = data.get("layoutConfig") or {}
        return int(cfg.get("duration", 4000))
    try:
        speed = int(data.get("speed", 5))
    except (TypeError, ValueError):
        speed = 5
    speed = max(1, min(10, speed))
    return int(_SCROLL_MAX_MS - (speed - 1) * (_SCROLL_MAX_MS - _SCROLL_MIN_MS) / 9)


def _schedule_release(msg_id: str, duration_ms: int) -> None:
    """Caller must hold _lock."""
    _in_flight[msg_id] = _now() + duration_ms / 1000.0
    t = threading.Timer(duration_ms / 1000.0, _on_slot_free, args=(msg_id,))
    t.daemon = True
    _timers[msg_id] = t
    t.start()


def _on_slot_free(msg_id: str) -> None:
    with _lock:
        _in_flight.pop(msg_id, None)
        _timers.pop(msg_id, None)
        # Queue drain happens in Task 3; for now just free the slot.


def try_send(data: dict, send_fn: Callable[[dict], bool]) -> dict:
    """Attempt to forward `data` via `send_fn`. Returns a status dict.

    Statuses:
      {"status": "sent"}                               -- forwarded
      {"status": "dropped", "reason": "full"}          -- over cap, drop mode
    """
    cfg = onscreen_config.get_state()
    max_cap = cfg["max_onscreen_danmu"]

    with _lock:
        if max_cap == 0 or len(_in_flight) < max_cap:
            msg_id = uuid.uuid4().hex
            duration = estimate_duration_ms(data)
            _schedule_release(msg_id, duration)
            # Release lock during send to avoid blocking other callers on slow IO.
        else:
            return {"status": "dropped", "reason": "full"}

    ok = send_fn(data)
    if not ok:
        # Forward failed — free the slot we just reserved.
        _on_slot_free(msg_id)
        return {"status": "dropped", "reason": "forward_failed"}
    return {"status": "sent"}


def get_state() -> dict:
    """Observability hook — admin dashboard reads this."""
    cfg = onscreen_config.get_state()
    with _lock:
        return {
            "in_flight": len(_in_flight),
            "queue_len": 0,  # populated in Task 3
            "max": cfg["max_onscreen_danmu"],
            "mode": cfg["overflow_mode"],
        }


def reset() -> None:
    """Clear all state. Test-only."""
    with _lock:
        for t in _timers.values():
            t.cancel()
        _in_flight.clear()
        _timers.clear()
```

- [ ] **Step 2.4: Run tests — expect all pass**

Run: `cd server && PYTHONPATH=.. uv run python -m pytest tests/test_onscreen_limiter.py -v`
Expected: 10 passed (5 duration parity via parametrize + 5 drop-mode/tracker tests)

- [ ] **Step 2.5: Commit**

```bash
git add server/services/onscreen_limiter.py server/tests/test_onscreen_limiter.py
git commit -m "feat(server): add onscreen_limiter drop mode + in-flight tracker"
```

---

## Task 3: Queue mode — FIFO + cap 50 + TTL 60s + sweep thread

**Files:**
- Modify: `server/services/onscreen_limiter.py`
- Modify: `server/tests/test_onscreen_limiter.py` (add queue tests)

- [ ] **Step 3.1: Write failing queue-mode tests**

Append to `server/tests/test_onscreen_limiter.py`:

```python
# ── queue mode ──

def test_queue_mode_fifo_release():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="queue")
    sent = []
    send = lambda d: sent.append(d["text"]) or True
    # 1st sends, 2nd/3rd queue. Use speed=10 → 2s duration.
    for i in range(3):
        onscreen_limiter.try_send({"text": str(i), "speed": 10}, send)
    assert sent == ["0"]
    assert onscreen_limiter.get_state()["queue_len"] == 2
    # Wait through 2 duration cycles.
    time.sleep(2.3)
    assert sent[:2] == ["0", "1"]
    time.sleep(2.3)
    assert sent == ["0", "1", "2"]
    assert onscreen_limiter.get_state()["queue_len"] == 0


def test_queue_returns_queued_status():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="queue")
    send = MagicMock(return_value=True)
    onscreen_limiter.try_send({"text": "a", "speed": 1}, send)
    status = onscreen_limiter.try_send({"text": "b", "speed": 1}, send)
    assert status == {"status": "queued"}


def test_queue_cap_rejects_51st():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="queue")
    send = MagicMock(return_value=True)
    onscreen_limiter.try_send({"text": "fill", "speed": 1}, send)  # in-flight
    for i in range(50):
        status = onscreen_limiter.try_send({"text": f"q{i}", "speed": 1}, send)
        assert status["status"] == "queued"
    # 51st queued entry → rejected
    status = onscreen_limiter.try_send({"text": "overflow", "speed": 1}, send)
    assert status == {"status": "rejected", "reason": "queue_full"}


def test_queue_ttl_expires_after_60s(monkeypatch):
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="queue")
    send = MagicMock(return_value=True)
    onscreen_limiter.try_send({"text": "a", "speed": 1}, send)
    onscreen_limiter.try_send({"text": "b", "speed": 1}, send)
    # Forge clock: move time forward past TTL. Patching the limiter's local
    # _now() wrapper avoids polluting the global time module.
    future = onscreen_limiter._now() + 120
    monkeypatch.setattr(onscreen_limiter, "_now", lambda: future)
    onscreen_limiter._sweep_expired()
    assert onscreen_limiter.get_state()["queue_len"] == 0


def test_drop_mode_does_not_queue():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="drop")
    send = MagicMock(return_value=True)
    onscreen_limiter.try_send({"text": "a", "speed": 1}, send)
    onscreen_limiter.try_send({"text": "b", "speed": 1}, send)
    assert onscreen_limiter.get_state()["queue_len"] == 0


def test_queue_preserves_order_under_concurrency():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="queue")
    sent = []
    lock = threading.Lock()
    def send(d):
        with lock: sent.append(d["text"])
        return True
    # Block the initial slot with a slow danmu, then race enqueuers.
    onscreen_limiter.try_send({"text": "fill", "speed": 1}, send)
    def enqueue(i):
        onscreen_limiter.try_send({"text": f"q{i:03d}", "speed": 10}, send)
    threads = [threading.Thread(target=enqueue, args=(i,)) for i in range(20)]
    for t in threads: t.start()
    for t in threads: t.join()
    assert onscreen_limiter.get_state()["queue_len"] == 20
    # No assertion on ordering of concurrent enqueues (by design, order is
    # whichever thread acquired the lock first), but queue must be a subset
    # of expected ids and no duplicates.
    # Cleanup: cancel timers so test teardown is fast.
```

- [ ] **Step 3.2: Run new tests — expect failures**

Run: `cd server && PYTHONPATH=.. uv run python -m pytest tests/test_onscreen_limiter.py -v`
Expected: 5 new tests FAIL (queue_len always 0, no queueing logic yet)

- [ ] **Step 3.3: Add queue + TTL sweep to `onscreen_limiter.py`**

Edit `server/services/onscreen_limiter.py`:

Add imports (atop; `time` already imported in Task 2):

```python
import atexit
from collections import deque
```

Add module-level constants (after `_SCROLL_MAX_MS`):

```python
QUEUE_MAX_SIZE = 50
QUEUE_TTL_SECONDS = 60
_SWEEP_INTERVAL_SECONDS = 1.0
```

Add module-level state (after `_timers`). Also add `Optional` to the `typing` import line:

```python
from typing import Callable, Dict, Optional  # add Optional

# Each queue entry: (msg_id, enqueue_monotonic, data, send_fn)
_queue: "deque[tuple[str, float, dict, Callable]]" = deque(maxlen=QUEUE_MAX_SIZE)
_sweep_thread: Optional[threading.Thread] = None
_sweep_stop = threading.Event()
```

Replace `_on_slot_free` with:

```python
def _on_slot_free(msg_id: str) -> None:
    """Timer callback — release slot and drain queue if possible."""
    drained: list = []
    with _lock:
        _in_flight.pop(msg_id, None)
        _timers.pop(msg_id, None)
        cfg = onscreen_config.get_state()
        max_cap = cfg["max_onscreen_danmu"]
        now = _now()
        while _queue and (max_cap == 0 or len(_in_flight) < max_cap):
            qid, enq_time, data, send_fn = _queue.popleft()
            if now - enq_time > QUEUE_TTL_SECONDS:
                continue  # TTL expired while waiting
            duration = estimate_duration_ms(data)
            _schedule_release(qid, duration)
            drained.append((qid, data, send_fn))
    # Release lock before invoking send_fn; reclaim slots on failure.
    for qid, data, send_fn in drained:
        try:
            ok = send_fn(data)
        except Exception as exc:
            logger.warning("queue send_fn raised: %s", exc)
            ok = False
        if not ok:
            _on_slot_free(qid)  # reclaim recursively


def _sweep_expired() -> None:
    """Drop queue entries older than QUEUE_TTL_SECONDS. Idempotent."""
    with _lock:
        now = _now()
        while _queue and now - _queue[0][1] > QUEUE_TTL_SECONDS:
            _queue.popleft()


def _sweep_loop() -> None:
    while not _sweep_stop.wait(_SWEEP_INTERVAL_SECONDS):
        try:
            _sweep_expired()
        except Exception as exc:
            logger.error("sweep loop error: %s", exc)


def _ensure_sweep_running() -> None:
    global _sweep_thread
    if _sweep_thread is None or not _sweep_thread.is_alive():
        _sweep_stop.clear()
        _sweep_thread = threading.Thread(target=_sweep_loop, daemon=True, name="onscreen-sweep")
        _sweep_thread.start()


def shutdown() -> None:
    """Stop sweep thread. Tests + app shutdown."""
    _sweep_stop.set()


atexit.register(shutdown)
```

Update `try_send`:

```python
def try_send(data: dict, send_fn: Callable[[dict], bool]) -> dict:
    """Attempt to forward `data` via `send_fn`. Returns a status dict.

    Statuses:
      sent                              forwarded immediately
      queued                            overflow mode=queue, placed in queue
      dropped (reason=full)             overflow mode=drop, cap reached
      dropped (reason=forward_failed)   send_fn returned False
      rejected (reason=queue_full)      queue at QUEUE_MAX_SIZE
    """
    _ensure_sweep_running()
    cfg = onscreen_config.get_state()
    max_cap = cfg["max_onscreen_danmu"]
    mode = cfg["overflow_mode"]

    with _lock:
        if max_cap == 0 or len(_in_flight) < max_cap:
            msg_id = uuid.uuid4().hex
            duration = estimate_duration_ms(data)
            _schedule_release(msg_id, duration)
        else:
            if mode == "drop":
                return {"status": "dropped", "reason": "full"}
            # queue mode
            if len(_queue) >= QUEUE_MAX_SIZE:
                return {"status": "rejected", "reason": "queue_full"}
            _queue.append((uuid.uuid4().hex, _now(), data, send_fn))
            return {"status": "queued"}

    ok = send_fn(data)
    if not ok:
        _on_slot_free(msg_id)
        return {"status": "dropped", "reason": "forward_failed"}
    return {"status": "sent"}
```

Update `get_state`:

```python
def get_state() -> dict:
    cfg = onscreen_config.get_state()
    with _lock:
        return {
            "in_flight": len(_in_flight),
            "queue_len": len(_queue),
            "max": cfg["max_onscreen_danmu"],
            "mode": cfg["overflow_mode"],
        }
```

Update `reset`:

```python
def reset() -> None:
    """Clear all state + stop sweep. Test-only."""
    with _lock:
        for t in _timers.values():
            t.cancel()
        _in_flight.clear()
        _timers.clear()
        _queue.clear()
    shutdown()
```

- [ ] **Step 3.4: Run tests — all pass**

Run: `cd server && PYTHONPATH=.. uv run python -m pytest tests/test_onscreen_limiter.py -v`
Expected: 16 passed (10 from Task 2 + 6 new queue tests)

- [ ] **Step 3.5: Commit**

```bash
git add server/services/onscreen_limiter.py server/tests/test_onscreen_limiter.py
git commit -m "feat(server): add queue overflow mode with FIFO + TTL sweep"
```

---

## Task 4: Wire limiter into `messaging.forward_to_ws_server`

**Files:**
- Modify: `server/services/messaging.py`
- Modify: `server/routes/api.py` (propagate status)
- Modify: `server/tests/test_messaging.py` (new return shape)
- Modify: `server/tests/test_system_e2e.py` (same)
- Modify: `server/tests/test_effects.py` (same)

- [ ] **Step 4.1: Update messaging tests for new dict return**

Read the current `test_messaging.py` tests that check `result is True` / `result is False`. Edit each to check `result["status"] == "sent"` / `result["status"] == "dropped"`:

In `server/tests/test_messaging.py`, replace:

```python
def test_forward_enqueues_message(app):
    with app.app_context():
        result = messaging.forward_to_ws_server({"text": "hello"})
    assert result is True
```

with:

```python
def test_forward_enqueues_message(app):
    with app.app_context():
        result = messaging.forward_to_ws_server({"text": "hello"})
    assert result["status"] == "sent"
```

Replace:

```python
def test_forward_returns_true_on_success(app):
    with app.app_context():
        result = messaging.forward_to_ws_server({"x": 1})
    assert result is True
```

with:

```python
def test_forward_returns_sent_on_success(app):
    with app.app_context():
        result = messaging.forward_to_ws_server({"x": 1})
    assert result["status"] == "sent"
```

Replace:

```python
def test_forward_returns_false_on_enqueue_exception(app):
    with app.app_context():
        with patch.object(ws_queue, "enqueue_message", side_effect=RuntimeError("boom")):
            result = messaging.forward_to_ws_server({"x": 1})
    assert result is False
```

with:

```python
def test_forward_returns_dropped_on_enqueue_exception(app):
    with app.app_context():
        with patch.object(ws_queue, "enqueue_message", side_effect=RuntimeError("boom")):
            result = messaging.forward_to_ws_server({"x": 1})
    assert result["status"] == "dropped"
    assert result["reason"] == "forward_failed"
```

Replace:

```python
def test_forward_live_broadcast_does_not_block_on_exception(app):
    ...
    assert result is True
```

with:

```python
def test_forward_live_broadcast_does_not_block_on_exception(app):
    ...
    assert result["status"] == "sent"
```

Also add an autouse fixture at the top of the file to reset the limiter between tests:

```python
@pytest.fixture(autouse=True)
def _reset_limiter():
    from server.services import onscreen_limiter, onscreen_config
    onscreen_config._reset_for_tests()
    onscreen_limiter.reset()
    yield
    onscreen_limiter.reset()
    onscreen_config._reset_for_tests()
```

- [ ] **Step 4.2: Run test_messaging — expect failures (old bool assertions not yet migrated to dict)**

Run: `cd server && PYTHONPATH=.. uv run python -m pytest tests/test_messaging.py -v`
Expected: 4-5 failures on assertions (result still bool)

- [ ] **Step 4.3: Update `messaging.forward_to_ws_server` to return dict via limiter**

Edit `server/services/messaging.py`, replace the entire `forward_to_ws_server` function:

```python
import json

from flask import current_app

from ..managers import connection_manager
from ..utils import sanitize_log_string
from . import onscreen_limiter, telemetry, ws_queue


def _broadcast_live_feed(data):
    if not (isinstance(data, dict) and data.get("text")):
        return
    try:
        live_msg = json.dumps({
            "type": "danmu_live",
            "data": {
                "text": data.get("text", ""),
                "color": data.get("color", ""),
                "size": data.get("size", ""),
                "speed": data.get("speed", ""),
                "opacity": data.get("opacity", ""),
                "nickname": data.get("nickname", ""),
                "layout": data.get("layout", "scroll"),
                "isImage": data.get("isImage", False),
                "fingerprint": data.get("fingerprint", ""),
            },
        })
        send_message(live_msg)
    except Exception:
        pass  # live feed failure never blocks main flow


def _raw_forward(data) -> bool:
    """The actual WS enqueue + live-feed broadcast. Returns True on success."""
    try:
        ws_queue.enqueue_message(data)
        telemetry.record_message()
        _broadcast_live_feed(data)
        return True
    except Exception as exc:
        current_app.logger.error(
            "Error forwarding message to WS server: %s",
            sanitize_log_string(str(exc)),
        )
        return False


def forward_to_ws_server(data):
    """Forward `data` to the overlay WS subject to the onscreen limiter.

    Returns a status dict:
      {"status": "sent"}                             — forwarded
      {"status": "queued"}                           — queued for later release
      {"status": "dropped", "reason": <str>}         — cap hit in drop mode,
                                                       or forward_failed
      {"status": "rejected", "reason": "queue_full"} — queue at cap
    """
    # settings_changed and other non-danmu meta messages bypass the limiter —
    # they must reach the overlay regardless of load.
    if isinstance(data, dict) and data.get("type") == "settings_changed":
        ok = _raw_forward(data)
        return {"status": "sent"} if ok else {"status": "dropped", "reason": "forward_failed"}
    return onscreen_limiter.try_send(data, _raw_forward)


def send_message(message):
    for client in connection_manager.get_web_connections():
        try:
            client.send(message)
        except Exception as exc:
            current_app.logger.warning(
                "Error sending message to client: %s",
                sanitize_log_string(str(exc)),
            )
            connection_manager.unregister_web_connection(client)
```

- [ ] **Step 4.4: Update `/fire` endpoint to propagate status**

Edit `server/routes/api.py` at line ~275. Find the block:

```python
        forward_success = messaging.forward_to_ws_server(data)

        if forward_success:
            fingerprint_tracker.record(fingerprint, client_ip, user_agent)
            _record_history_if_enabled(data, fingerprint, client_ip)

            # Webhook: emit on_danmu event (fire-and-forget)
            try:
                webhook_service.emit(...)
            except Exception:
                pass

            return _json_response({"status": "OK"}, 200)
        return _json_response({"error": "Failed to enqueue message"}, 503)
```

Replace with:

```python
        forward_result = messaging.forward_to_ws_server(data)
        status = forward_result.get("status", "dropped")

        # Anything except "rejected"/hard failure counts as "server accepted the
        # message" for the purposes of recording history, fingerprint, webhook.
        accepted = status in ("sent", "queued")

        if accepted:
            fingerprint_tracker.record(fingerprint, client_ip, user_agent)
            _record_history_if_enabled(data, fingerprint, client_ip)

            try:
                webhook_service.emit(
                    "on_danmu",
                    {
                        "text": text_content,
                        "color": data.get("color", ""),
                        "nickname": data.get("nickname", ""),
                        "ip": client_ip,
                    },
                )
            except Exception:
                pass

        # Even dropped/rejected return 200 — the request itself was valid,
        # the limiter just gated it. Client reads `status` to decide UX.
        return _json_response(forward_result, 200)
```

- [ ] **Step 4.5: Update `test_system_e2e.py` and `test_effects.py` return-shape assertions**

Run `grep -n "forward_to_ws_server" server/tests/test_system_e2e.py server/tests/test_effects.py` and replace every `is True` / `is False` / `== True` / `== False` assertion on a `forward_to_ws_server` return with `["status"] == "sent"` / `["status"] != "sent"` as appropriate. Also add the same `_reset_limiter` autouse fixture from Step 4.1 to both files.

- [ ] **Step 4.6: Run full server test suite**

Run: `cd server && PYTHONPATH=.. uv run python -m pytest -v`
Expected: all ~790 tests pass (777 existing + 14 new limiter/config tests − any that were renamed). If any fail with the old `is True/False` assertion, update them the same way.

- [ ] **Step 4.7: Commit**

```bash
git add server/services/messaging.py server/routes/api.py server/tests/test_messaging.py server/tests/test_system_e2e.py server/tests/test_effects.py
git commit -m "feat(server): route all danmu through onscreen limiter"
```

---

## Task 5: Admin API — `GET/POST /admin/api/onscreen-limits`

**Files:**
- Modify: `server/routes/admin/settings.py`
- Modify: `server/services/validation.py`
- Test: `server/tests/test_admin_settings.py` (if exists; else add tests inline in test_system_e2e.py)

- [ ] **Step 5.1: Add Pydantic schema for admin POST**

In `server/services/validation.py`, add next to the other `*Schema` classes:

```python
class OnscreenLimitsSchema(BaseModel):
    max_onscreen_danmu: int = Field(ge=0, le=200)
    overflow_mode: Literal["drop", "queue"]
```

Add `Literal` to existing `typing` imports if not there. Confirm `Field`/`BaseModel` are already imported from pydantic.

- [ ] **Step 5.2: Write failing test for admin endpoints**

Find an existing admin-endpoint test file. Run:

```bash
grep -rln "def test_admin" server/tests/ | head -5
```

If `server/tests/test_admin_settings.py` exists, append to it; otherwise create it. Add:

```python
"""Admin endpoint for onscreen-limits settings."""
import json
import pytest

from server.services import onscreen_config


@pytest.fixture(autouse=True)
def _isolate_cfg(tmp_path, monkeypatch):
    monkeypatch.setattr(onscreen_config, "_STATE_FILE", tmp_path / "o.json")
    onscreen_config._reset_for_tests()
    yield
    onscreen_config._reset_for_tests()


def test_get_onscreen_limits_returns_defaults(admin_client):
    r = admin_client.get("/admin/api/onscreen-limits")
    assert r.status_code == 200
    assert r.get_json() == {"max_onscreen_danmu": 20, "overflow_mode": "drop"}


def test_post_onscreen_limits_updates_state(admin_client, csrf_token):
    r = admin_client.post(
        "/admin/api/onscreen-limits",
        json={"max_onscreen_danmu": 50, "overflow_mode": "queue"},
        headers={"X-CSRFToken": csrf_token},
    )
    assert r.status_code == 200
    assert onscreen_config.get_state() == {"max_onscreen_danmu": 50, "overflow_mode": "queue"}


def test_post_rejects_out_of_range(admin_client, csrf_token):
    r = admin_client.post(
        "/admin/api/onscreen-limits",
        json={"max_onscreen_danmu": 999, "overflow_mode": "drop"},
        headers={"X-CSRFToken": csrf_token},
    )
    assert r.status_code == 400


def test_post_rejects_bad_mode(admin_client, csrf_token):
    r = admin_client.post(
        "/admin/api/onscreen-limits",
        json={"max_onscreen_danmu": 20, "overflow_mode": "whatever"},
        headers={"X-CSRFToken": csrf_token},
    )
    assert r.status_code == 400


def test_unauthenticated_post_rejected(client):
    r = client.post(
        "/admin/api/onscreen-limits",
        json={"max_onscreen_danmu": 20, "overflow_mode": "drop"},
    )
    assert r.status_code in (401, 403)
```

If `admin_client` / `csrf_token` fixtures don't already exist in `conftest.py`, grep for how other admin endpoint tests authenticate — e.g. `grep -rn "def admin_client" server/tests/conftest.py`. Reuse whatever pattern is already there; do NOT invent new fixtures.

- [ ] **Step 5.3: Run — expect 404s**

Run: `cd server && PYTHONPATH=.. uv run python -m pytest tests/test_admin_settings.py -v`
Expected: 4 of 5 tests FAIL with 404 Not Found (the unauthenticated one may pass since any route returns 404).

- [ ] **Step 5.4: Add the routes**

In `server/routes/admin/settings.py`, extend the top-of-file imports:

```python
from ...services import messaging, onscreen_config  # add onscreen_config
from ...services.validation import (
    OnscreenLimitsSchema,  # add
    SettingUpdateSchema,
    ToggleSettingSchema,
    validate_request,
)
```

Then append the two handlers at the bottom of the file:

```python
@admin_bp.route("/api/onscreen-limits", methods=["GET"])
@require_login
def get_onscreen_limits():
    return _json_response(onscreen_config.get_state())


@admin_bp.route("/api/onscreen-limits", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def set_onscreen_limits():
    payload = request.get_json(silent=True)
    validated, errors = validate_request(OnscreenLimitsSchema, payload)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    try:
        new_state = onscreen_config.set_state(
            max_onscreen_danmu=validated["max_onscreen_danmu"],
            overflow_mode=validated["overflow_mode"],
        )
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)
    current_app.logger.info("onscreen limits updated: %s", new_state)
    return _json_response(new_state)
```

- [ ] **Step 5.5: Run tests — all pass**

Run: `cd server && PYTHONPATH=.. uv run python -m pytest tests/test_admin_settings.py -v`
Expected: 5 passed

- [ ] **Step 5.6: Commit**

```bash
git add server/routes/admin/settings.py server/services/validation.py server/tests/test_admin_settings.py
git commit -m "feat(admin): add GET/POST /admin/api/onscreen-limits"
```

---

## Task 6: Public UI — handle new status shape in `/fire` response

**Files:**
- Modify: `server/static/js/main.js:~795-815`

**Context:** Current code checks `response.ok` (HTTP-level) and only distinguishes success vs error. New behaviour: success body is `{status: "sent"|"queued"|"dropped"|"rejected", reason?: "..."}`.

- [ ] **Step 6.1: Update `/fire` response handler**

In `server/static/js/main.js` around line 795, find:

```javascript
      const response = await fetch("/fire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        elements.danmuText.value = "";
        updateCharCount();
        updatePreview();
        showToast(ServerI18n.t("danmuFired"), true);
      } else {
        let message = ServerI18n.t("failedToSend");
        try {
          const data = await response.json();
          message = (typeof data.error === "string" ? data.error : data.error?.message) || message;
        } catch (_) { }
        showToast(message, false);
      }
```

Replace with:

```javascript
      const response = await fetch("/fire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        let body = {};
        try { body = await response.json(); } catch (_) { }
        const status = body.status || "sent";
        const reason = body.reason;

        // Clear the textbox on sent/queued (server accepted the submission).
        // Keep it on dropped/rejected so the user can retry.
        const accepted = status === "sent" || status === "queued";
        if (accepted) {
          elements.danmuText.value = "";
          updateCharCount();
          updatePreview();
        }

        if (status === "sent") {
          showToast(ServerI18n.t("danmuFired"), true);
        } else if (status === "queued") {
          showToast(ServerI18n.t("onscreenFullQueued"), true);  // yellow/neutral
        } else if (status === "dropped") {
          showToast(ServerI18n.t("onscreenFullDropped"), false);
        } else if (status === "rejected") {
          const key = reason === "queue_full" ? "queueFullTryLater" : "waitTimedOut";
          showToast(ServerI18n.t(key), false);
        } else {
          showToast(ServerI18n.t("danmuFired"), true);  // unknown but 200 — treat as sent
        }
      } else {
        let message = ServerI18n.t("failedToSend");
        try {
          const data = await response.json();
          message = (typeof data.error === "string" ? data.error : data.error?.message) || message;
        } catch (_) { }
        showToast(message, false);
      }
```

- [ ] **Step 6.2: Manual smoke test (deferred to Task 10 verification)**

i18n keys referenced (`onscreenFullQueued`, `onscreenFullDropped`, `queueFullTryLater`, `waitTimedOut`) are added in Task 8. Until then the toasts will fall back to showing the key literal—that's OK for now, it'll be fixed when Task 8 lands.

- [ ] **Step 6.3: Commit**

```bash
git add server/static/js/main.js
git commit -m "feat(public): map /fire status responses to localized toasts"
```

---

## Task 7: Admin UI — "流量控制" settings card

**Files:**
- Modify: `server/templates/admin.html`
- Modify: `server/static/js/admin.js`

- [ ] **Step 7.1: Locate the anchor for the new card**

Run: `grep -n "Display Settings\|顯示設定\|max-tracks\|maxTracks" server/templates/admin.html`. Identify a logical position — typically near other display/behaviour settings. If no obvious anchor exists, add the card at the end of the main settings section (before the first `</main>` or equivalent wrapper).

- [ ] **Step 7.2: Add the card markup**

Insert into `server/templates/admin.html` at the chosen anchor:

```html
<section class="settings-card" data-card="onscreen-limits">
  <h3 data-i18n="trafficControl">Traffic control</h3>
  <label class="field">
    <span data-i18n="maxOnscreenDanmu">Max onscreen danmu</span>
    <input type="number" id="max-onscreen-input" min="0" max="200" value="20" />
    <small class="hint" data-i18n="maxOnscreenHint">0 = unlimited</small>
  </label>
  <fieldset class="field">
    <legend data-i18n="overflowMode">Overflow mode</legend>
    <label>
      <input type="radio" name="overflow-mode" value="drop" checked />
      <span data-i18n="overflowModeDrop">Drop</span>
    </label>
    <label>
      <input type="radio" name="overflow-mode" value="queue" />
      <span data-i18n="overflowModeQueue">Queue</span>
    </label>
  </fieldset>
  <button type="button" id="onscreen-limits-save" data-i18n="save">Save</button>
</section>
```

Class names (`settings-card`, `field`, `hint`) should match the existing admin card pattern — grep for `settings-card` first and adjust if the existing pattern differs.

- [ ] **Step 7.3: Add JS handler in `admin.js`**

At the bottom of `server/static/js/admin.js` (or inside the existing DOMContentLoaded block if that's the pattern), add:

```javascript
// ── Onscreen Limits (v4.9.0) ──
(function initOnscreenLimits() {
  const maxInput = document.getElementById("max-onscreen-input");
  const saveBtn = document.getElementById("onscreen-limits-save");
  if (!maxInput || !saveBtn) return;

  async function loadCurrent() {
    try {
      const r = await fetch("/admin/api/onscreen-limits", { credentials: "same-origin" });
      if (!r.ok) return;
      const s = await r.json();
      maxInput.value = s.max_onscreen_danmu;
      const modeRadio = document.querySelector(
        `input[name="overflow-mode"][value="${s.overflow_mode}"]`
      );
      if (modeRadio) modeRadio.checked = true;
    } catch (e) {
      console.error("load onscreen limits:", e);
    }
  }

  saveBtn.addEventListener("click", async () => {
    const max = parseInt(maxInput.value, 10);
    const modeEl = document.querySelector('input[name="overflow-mode"]:checked');
    if (!modeEl || isNaN(max)) return;
    const csrf = document.querySelector('meta[name="csrf-token"]')?.content;
    try {
      const r = await fetch("/admin/api/onscreen-limits", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json", "X-CSRFToken": csrf || "" },
        body: JSON.stringify({ max_onscreen_danmu: max, overflow_mode: modeEl.value }),
      });
      if (r.ok) {
        // Reuse whatever toast helper admin.js already uses — grep for showToast.
        (window.adminToast || window.showToast || console.log)(
          (window.I18n?.t?.("saved") || "Saved"), true
        );
      } else {
        const err = await r.json().catch(() => ({}));
        (window.adminToast || window.showToast || console.error)(
          err.error || "Failed to save", false
        );
      }
    } catch (e) {
      console.error("save onscreen limits:", e);
    }
  });

  loadCurrent();
})();
```

Before committing, grep the file to see which toast helper admin.js uses (`grep -n "showToast\|adminToast" server/static/js/admin.js | head`) and hard-wire that name instead of the fallback chain.

- [ ] **Step 7.4: Smoke test (deferred to Task 10)**

- [ ] **Step 7.5: Commit**

```bash
git add server/templates/admin.html server/static/js/admin.js
git commit -m "feat(admin): add traffic control settings card"
```

---

## Task 8: i18n — 4 locales × 9 keys

**Files:**
- Modify: `server/i18n/zh-TW.json`
- Modify: `server/i18n/zh-CN.json`
- Modify: `server/i18n/en.json`
- Modify: `server/i18n/ja.json`

- [ ] **Step 8.1: Confirm i18n file layout**

Run: `ls server/i18n/` and `head -20 server/i18n/zh-TW.json`. If the files are different names (e.g. `zh_TW.json`), use the actual names.

- [ ] **Step 8.2: Add keys to zh-TW**

Edit `server/i18n/zh-TW.json` — insert into the top-level object (preserve alphabetical ordering if the file is sorted; otherwise append before the closing brace):

```json
"trafficControl": "流量控制",
"maxOnscreenDanmu": "畫面最多同時顯示彈幕數",
"maxOnscreenHint": "0 = 不限制",
"overflowMode": "超量處理方式",
"overflowModeDrop": "直接丟棄",
"overflowModeQueue": "排隊等待",
"onscreenFullQueued": "畫面已滿，排隊中⋯",
"onscreenFullDropped": "畫面已滿，略過",
"queueFullTryLater": "伺服器繁忙，請稍後再試",
"waitTimedOut": "等候逾時"
```

- [ ] **Step 8.3: Add keys to zh-CN**

```json
"trafficControl": "流量控制",
"maxOnscreenDanmu": "画面最多同时显示弹幕数",
"maxOnscreenHint": "0 = 不限制",
"overflowMode": "超量处理方式",
"overflowModeDrop": "直接丢弃",
"overflowModeQueue": "排队等待",
"onscreenFullQueued": "画面已满，排队中⋯",
"onscreenFullDropped": "画面已满，略过",
"queueFullTryLater": "服务器繁忙，请稍后再试",
"waitTimedOut": "等待超时"
```

- [ ] **Step 8.4: Add keys to en**

```json
"trafficControl": "Traffic control",
"maxOnscreenDanmu": "Max onscreen danmu",
"maxOnscreenHint": "0 = unlimited",
"overflowMode": "Overflow mode",
"overflowModeDrop": "Drop",
"overflowModeQueue": "Queue",
"onscreenFullQueued": "Screen full, queued…",
"onscreenFullDropped": "Screen full, skipped",
"queueFullTryLater": "Server busy, try again",
"waitTimedOut": "Timed out"
```

- [ ] **Step 8.5: Add keys to ja**

```json
"trafficControl": "トラフィック制御",
"maxOnscreenDanmu": "画面上の最大弾幕数",
"maxOnscreenHint": "0 = 無制限",
"overflowMode": "超過時の処理",
"overflowModeDrop": "破棄",
"overflowModeQueue": "順番待ち",
"onscreenFullQueued": "画面が満杯、待機中⋯",
"onscreenFullDropped": "画面が満杯、スキップ",
"queueFullTryLater": "サーバー混雑中、後ほど再試行",
"waitTimedOut": "タイムアウト"
```

- [ ] **Step 8.6: Validate JSON syntax**

Run: `cd server && python -c "import json, pathlib; [json.loads(p.read_text()) for p in pathlib.Path('i18n').glob('*.json')]"`
Expected: no output (all files parse).

- [ ] **Step 8.7: Run existing i18n consistency test if present**

Run: `cd server && PYTHONPATH=.. uv run python -m pytest tests/ -v -k "i18n"`
Expected: any existing coverage test (e.g. "every zh-TW key exists in other langs") passes. If it fails on missing keys in a locale, cross-check and fix.

- [ ] **Step 8.8: Commit**

```bash
git add server/i18n/*.json
git commit -m "feat(i18n): add traffic-control keys across 4 locales"
```

---

## Task 9: Version bump + CHANGELOG + rollout notice

**Files:**
- Modify: `server/config.py`
- Modify: `danmu-desktop/package.json`
- Modify: `CHANGELOG.md`

- [ ] **Step 9.1: Bump server version**

Edit `server/config.py`:

```python
APP_VERSION = "4.9.0"
```

- [ ] **Step 9.2: Bump desktop version**

Edit `danmu-desktop/package.json` — change `"version": "4.8.7"` to `"version": "4.9.0"`.

- [ ] **Step 9.3: Add CHANGELOG entry**

Prepend to `CHANGELOG.md` under a new `## v4.9.0 (2026-04-22)` heading:

```markdown
## v4.9.0 (2026-04-22)

### Features
- **Onscreen danmu limiter**: admin can cap concurrent danmu on screen (default 20, max 200, 0 = unlimited) with two overflow modes: `drop` (default — skip silently when full) and `queue` (FIFO; public submitters see "畫面已滿，排隊中⋯" toast). Queue is bounded at 50 entries with 60 s TTL. Settings live in `server/runtime/onscreen_limits.json` (mirrors `ws_auth.json` pattern).

### Breaking
- `server/services/messaging.forward_to_ws_server()` now returns a dict (`{status, reason?}`) instead of `bool`. External plugins that inspected the return value must update; plugins that only called and ignored the result are unaffected.
- `/fire` response body for successful submits changed from `{"status": "OK"}` to `{"status": "sent"}` / `{"status": "queued"}` / `{"status": "dropped", "reason": ...}` / `{"status": "rejected", "reason": ...}`. HTTP status remains 200 for all accepted-by-server outcomes. Third-party clients must check for `"sent"` (or `"sent"/"queued"` if they want to count queued as success).

### Migration
- Existing deploys should review admin → Traffic control after upgrade. To restore pre-v4.9.0 unthrottled behaviour, set **Max onscreen danmu = 0**.
```

- [ ] **Step 9.4: Full test run**

Run: `cd server && PYTHONPATH=.. uv run python -m pytest -v 2>&1 | tail -30`
Expected: all tests pass (~790+).

- [ ] **Step 9.5: Commit**

```bash
git add server/config.py danmu-desktop/package.json CHANGELOG.md
git commit -m "release: v4.9.0 — onscreen danmu limiter"
```

---

## Task 10: End-to-end manual verification

**Rationale:** Unit tests cover server behaviour; we still need to eyeball the admin card + public toast flow in a real browser against a running server, because those paths aren't under automated test.

- [ ] **Step 10.1: Start the server**

```bash
cd server && PYTHONPATH=.. uv run python -m server.app
```

- [ ] **Step 10.2: Start the Electron overlay (separate terminal)**

```bash
cd danmu-desktop && npx webpack && npm start
```

Make sure overlay WS is connected (admin page should show "overlay connected: 1").

- [ ] **Step 10.3: Verify admin card**

Open `http://localhost:8080/admin`, log in, find "Traffic control" card.
- Load shows 20 / Drop (defaults).
- Change to 3 / Queue, save, reload — values persist.
- Check `server/runtime/onscreen_limits.json` exists with correct content, `0o600` permissions.

- [ ] **Step 10.4: Verify drop mode**

Set max=3 / mode=drop. Open public page in two browser tabs. Submit 5 danmu rapidly in tab 1.
- Tabs 1 & 2 should see 3 danmu rendered on overlay.
- Tab 1 submits 4 and 5 should show "畫面已滿，略過" toast (grey/red).

- [ ] **Step 10.5: Verify queue mode**

Set max=2 / mode=queue. Submit 5 danmu rapidly.
- First 2 appear immediately with green toast.
- Next 3 show yellow "畫面已滿，排隊中⋯" toast.
- Within ~30 s (as in-flight slots open), remaining 3 appear sequentially on overlay.

- [ ] **Step 10.6: Verify queue cap**

Set max=1 / mode=queue, speed=1 (20 s duration). Submit 52 danmu (or 51 via a loop in browser console against `/fire`).
- Entries 2–51 should show "排隊中".
- Entry 52 should show "伺服器繁忙，請稍後再試".

- [ ] **Step 10.7: Verify admin live observability (if implemented — nice-to-have)**

If you added the `/admin/api/onscreen-limits/state` live stat endpoint, confirm it returns `{in_flight, queue_len, max, mode}`.

- [ ] **Step 10.8: Verify no regressions**

- Submit one normal danmu → renders correctly with correct speed/layout/effects.
- Flip to `max=0` (unlimited) → behaves exactly like pre-v4.9.0 (high-volume test: ~100 danmu bursts).

- [ ] **Step 10.9: Commit any polish**

If verification uncovered minor copy / styling issues, fix inline and commit as `fix(v4.9.0): ...`.

---

## Self-Review Notes

Checked against `docs/superpowers/specs/2026-04-22-onscreen-danmu-limiter-design.md`:

- Admin settings, defaults, range → Task 1, Task 5
- Duration formula parity → Task 2 Step 2.1 parametrized test
- Drop / queue / cap / TTL → Tasks 2 + 3
- `forward_to_ws_server` return-type change + call site updates → Task 4
- Public UI status handling → Task 6
- Admin UI card → Task 7
- i18n 4 locales × 9 keys → Task 8 (spec listed 9 keys; plan includes 10 with `maxOnscreenHint`, acceptable extra)
- Version bump + CHANGELOG migration notice → Task 9
- Manual E2E → Task 10

One deliberate deviation: the spec mentioned a "bonus" live-stat endpoint for admin dashboard. Plan treats it as optional (Task 10 Step 10.7 is "if implemented"); skipping it keeps v4.9.0 focused. Can land as a follow-up.
