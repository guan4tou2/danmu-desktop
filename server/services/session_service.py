"""Active session lifecycle management (2026-04-29).

State machine:
    IDLE  ──[open_session(name)]──▶  LIVE  ──[close_session()]──▶  IDLE
                                                                    (session archived)

Persistence:
  * active state  : server/runtime/active_session.json
  * closed archive: server/runtime/sessions_archive.jsonl (append-only, one JSON per line)

Side effects on open_session():
  * Sets broadcast mode to "live" via broadcast service.

Side effects on close_session():
  * Sets broadcast mode to "standby" via broadcast service.
  * Appends closed session record to sessions_archive.jsonl.
  * Removes block rules whose lifetime is "session" (services/filter_engine.py).

The viewer learns about live → ended transitions by polling
``GET /session/public-state`` (v5.0.0 Phase 2 — replaces the legacy
``session_ended`` WS push).

viewer_end_behavior options (stored in active_session.json, admin-configurable):
  "continue"      — viewer page keeps working normally (IDLE behaviour)
  "ended_screen"  — input disabled, show "本場活動已結束" overlay
  "reload"        — viewer page auto-reloads after 3 s
"""

from __future__ import annotations

import errno
import hashlib
import json
import logging
import os
import threading
import time
from pathlib import Path
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

_RUNTIME = Path(__file__).parent.parent / "runtime"
_STATE_FILE = _RUNTIME / "active_session.json"
_ARCHIVE_FILE = _RUNTIME / "sessions_archive.jsonl"

_lock = threading.RLock()
_state: Optional[Dict[str, Any]] = None
_write_failure_logged: bool = False

# Messages accepted in the running session. Kept beside ``_state`` rather than
# in it: ``get_state()`` is also what the public /session endpoint returns, and
# the count is the host's to see. ``None`` = not known yet (a session that was
# already running when this counter was introduced); the caller seeds it once.
_message_count: Optional[int] = None
_count_saved_at: float = 0.0
# The count is written to disk at most this often, plus when the session
# closes — not once per message. A crash loses a few seconds of counting.
_COUNT_SAVE_INTERVAL = 5.0
_COUNT_KEY = "message_count"

VALID_BEHAVIORS = ("continue", "ended_screen", "reload")

_DEFAULT_STATE: Dict[str, Any] = {
    "status": "idle",  # "idle" | "live"
    "id": None,
    "name": None,
    "started_at": None,
    "viewer_end_behavior": "continue",
}


# ---------------------------------------------------------------------------
# Internal helpers
# ---------------------------------------------------------------------------


def _atomic_write_json(path: Path, payload: Any) -> None:
    """Atomic write via tmp + os.replace. Caller must hold _lock."""
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + f".tmp.{os.getpid()}.{threading.get_ident()}")
    flags = os.O_WRONLY | os.O_CREAT | os.O_TRUNC
    fd = os.open(tmp, flags, 0o600)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            json.dump(payload, f, ensure_ascii=False, indent=2)
        try:
            os.chmod(tmp, 0o600)
        except OSError as exc:
            if exc.errno not in (errno.ENOSYS, errno.EPERM):
                raise
        tmp.replace(path)
    except Exception:
        try:
            tmp.unlink()
        except OSError:
            pass
        raise


def _log_write_failure_once(exc: Exception) -> None:
    global _write_failure_logged
    if _write_failure_logged:
        logger.debug("session persist still failing: %s", exc)
        return
    _write_failure_logged = True
    logger.warning(
        "Cannot persist session state (%s: %s). Running in-memory only.",
        type(exc).__name__,
        exc,
    )


def _load_state() -> Dict[str, Any]:
    """Read state file or return idle default. Caller must hold _lock."""
    if _STATE_FILE.exists():
        try:
            with open(_STATE_FILE, encoding="utf-8") as f:
                data = json.load(f)
            if isinstance(data, dict):
                status = data.get("status", "idle")
                if status not in ("idle", "live"):
                    status = "idle"
                behavior = data.get("viewer_end_behavior", "continue")
                if behavior not in VALID_BEHAVIORS:
                    behavior = "continue"
                return {
                    "status": status,
                    "id": data.get("id"),
                    "name": data.get("name"),
                    "started_at": data.get("started_at"),
                    "viewer_end_behavior": behavior,
                }
        except Exception as exc:
            logger.warning("active_session.json malformed (%s); resetting.", exc)
    return dict(_DEFAULT_STATE)


def _persist() -> None:
    """Write _state (and the message count) to disk. Caller must hold _lock."""
    global _count_saved_at
    if _state is None:
        return
    payload = dict(_state)
    if _message_count is not None:
        payload[_COUNT_KEY] = _message_count
    _count_saved_at = time.monotonic()
    try:
        _atomic_write_json(_STATE_FILE, payload)
    except OSError as exc:
        _log_write_failure_once(exc)


def _load_message_count() -> Optional[int]:
    """The count saved with a live session, or None. Caller must hold _lock."""
    try:
        with open(_STATE_FILE, encoding="utf-8") as f:
            saved = json.load(f).get(_COUNT_KEY)
    except (OSError, ValueError, AttributeError):
        return None
    if isinstance(saved, bool) or not isinstance(saved, int) or saved < 0:
        return None
    return saved


def _ensure_loaded() -> None:
    global _state, _message_count
    if _state is None:
        _state = _load_state()
        _message_count = _load_message_count() if _state.get("status") == "live" else None


def _append_archive(record: Dict[str, Any]) -> None:
    """Append one closed-session record to sessions_archive.jsonl."""
    try:
        _ARCHIVE_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(_ARCHIVE_FILE, "a", encoding="utf-8") as f:
            f.write(json.dumps(record, ensure_ascii=False) + "\n")
    except OSError as exc:
        logger.warning("Cannot append to sessions_archive.jsonl: %s", exc)


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------


def get_state() -> Dict[str, Any]:
    """Return a copy of the current session state."""
    with _lock:
        _ensure_loaded()
        return dict(_state)  # type: ignore[arg-type]


def is_live() -> bool:
    with _lock:
        _ensure_loaded()
        return _state.get("status") == "live"  # type: ignore[union-attr]


def note_message() -> None:
    """One more message was accepted. Does nothing when no session is live."""
    global _message_count
    with _lock:
        _ensure_loaded()
        if _state.get("status") != "live" or _message_count is None:  # type: ignore[union-attr]
            return
        _message_count += 1
        if time.monotonic() - _count_saved_at >= _COUNT_SAVE_INTERVAL:
            _persist()


def get_message_count() -> Optional[int]:
    """Messages accepted in the live session; None when idle or not known yet."""
    with _lock:
        _ensure_loaded()
        if _state.get("status") != "live":  # type: ignore[union-attr]
            return None
        return _message_count


def seed_message_count(count: int) -> int:
    """Give a live session that has no count a starting one. Returns the count.

    For a session that was already running before the counter existed: the
    caller passes the best figure it has (what history still holds). A count
    that is already known is left alone.
    """
    global _message_count
    with _lock:
        _ensure_loaded()
        if _state.get("status") != "live":  # type: ignore[union-attr]
            return 0
        if _message_count is None:
            _message_count = max(0, int(count))
            _persist()
        return _message_count


def open_session(name: str) -> Dict[str, Any]:
    """Open a new session.

    Sets broadcast to "live". Returns new state dict.
    Raises ValueError if a session is already live.
    """
    name = (name or "").strip()
    if not name:
        raise ValueError("Session name is required.")
    if len(name) > 120:
        raise ValueError("Session name must be ≤ 120 characters.")

    global _message_count
    with _lock:
        _ensure_loaded()
        if _state.get("status") == "live":  # type: ignore[union-attr]
            raise ValueError("A session is already live. Close it first.")
        _message_count = 0

        now = time.time()
        # Deterministic ID from start timestamp
        sid = "sess_" + hashlib.md5(str(now).encode()).hexdigest()[:8]

        _state.update(
            {  # type: ignore[union-attr]
                "status": "live",
                "id": sid,
                "name": name,
                "started_at": now,
            }
        )
        _persist()
        state_copy = dict(_state)  # type: ignore[arg-type]

    # Side-effect: set broadcast to live (outside lock to avoid deadlock with broadcast's own lock)
    try:
        from . import messaging

        messaging.set_broadcast_mode("live")
    except Exception as exc:
        logger.warning("Could not auto-set broadcast to live on session open: %s", exc)

    # Webhook v2 — fire-and-forget on_session_start. Logged at warning
    # so broken webhook config is visible during ops/debug instead of
    # silently swallowed.
    try:
        from . import webhook as webhook_svc

        webhook_svc.webhook_service.emit(
            "on_session_start",
            {"id": sid, "name": name, "started_at": now},
        )
    except Exception as exc:
        logger.warning("on_session_start webhook emit failed: %s", exc)

    logger.info("Session opened: %s (%s)", name, sid)
    return state_copy


def close_session() -> Dict[str, Any]:
    """Close the active session.

    Archives the session record, sets broadcast to standby, pushes
    session_ended to viewer WS connections.
    Returns the archived session record (not the new idle state).
    Raises ValueError if no session is currently live.
    """
    global _message_count
    with _lock:
        _ensure_loaded()
        if _state.get("status") != "live":  # type: ignore[union-attr]
            raise ValueError("No active session to close.")

        now = time.time()
        started = _state.get("started_at") or now  # type: ignore[union-attr]
        behavior = _state.get("viewer_end_behavior", "continue")  # type: ignore[union-attr]

        archived: Dict[str, Any] = {
            "id": _state["id"],  # type: ignore[index]
            "name": _state["name"],  # type: ignore[index]
            "started_at": started,
            "ended_at": now,
            "duration_s": int(now - started),
            "viewer_end_behavior": behavior,
        }

        # Reset to idle, preserving the viewer_end_behavior preference
        _state.update(
            {  # type: ignore[union-attr]
                "status": "idle",
                "id": None,
                "name": None,
                "started_at": None,
            }
        )
        _message_count = None
        _persist()

    # Append archive record (outside lock)
    _append_archive(archived)

    # 封鎖規則清單裡「到本場次結束」的那些在這裡清掉。
    try:
        from .filter_engine import filter_engine

        filter_engine.clear_session_rules(must_save=False)
    except Exception as exc:
        logger.warning("Could not clear session-scoped block rules: %s", exc)

    # Set broadcast to standby
    try:
        from . import messaging

        messaging.set_broadcast_mode("standby")
    except Exception as exc:
        logger.warning("Could not auto-set broadcast to standby on session close: %s", exc)

    # Webhook v2 — fire-and-forget on_session_end with the archived
    # session metadata (id/name/duration/started/ended). Logged at
    # warning so broken webhook config is visible during ops/debug.
    try:
        from . import webhook as webhook_svc

        webhook_svc.webhook_service.emit("on_session_end", dict(archived))
    except Exception as exc:
        logger.warning("on_session_end webhook emit failed: %s", exc)

    logger.info(
        "Session closed: %s (%s), duration=%ds",
        archived["name"],
        archived["id"],
        archived["duration_s"],
    )
    return archived


def set_viewer_end_behavior(behavior: str) -> Dict[str, Any]:
    """Update viewer_end_behavior. Returns new state."""
    if behavior not in VALID_BEHAVIORS:
        raise ValueError(f"behavior must be one of {VALID_BEHAVIORS}")
    with _lock:
        _ensure_loaded()
        _state["viewer_end_behavior"] = behavior  # type: ignore[index]
        _persist()
        return dict(_state)  # type: ignore[arg-type]


def get_archive(limit: int = 100) -> List[Dict[str, Any]]:
    """Return archived sessions newest-first (from sessions_archive.jsonl)."""
    if not _ARCHIVE_FILE.exists():
        return []
    records: List[Dict[str, Any]] = []
    try:
        with open(_ARCHIVE_FILE, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    records.append(json.loads(line))
                except json.JSONDecodeError:
                    continue
    except OSError as exc:
        logger.warning("Cannot read sessions_archive.jsonl: %s", exc)
        return []

    # Newest-first
    records.sort(key=lambda r: r.get("started_at", 0), reverse=True)
    return records[:limit]


def reset_for_tests() -> None:
    """Drop in-memory cache. Tests should patch _STATE_FILE first."""
    global _state, _write_failure_logged, _message_count, _count_saved_at
    with _lock:
        _state = None
        _write_failure_logged = False
        _message_count = None
        _count_saved_at = 0.0
