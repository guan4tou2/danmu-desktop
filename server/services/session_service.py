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
  * Pushes {"type": "session_ended", "behavior": <viewer_end_behavior>} to all
    web WS connections (viewer + admin pages receive it).

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

VALID_BEHAVIORS = ("continue", "ended_screen", "reload")

_DEFAULT_STATE: Dict[str, Any] = {
    "status": "idle",          # "idle" | "live"
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
    tmp = path.with_suffix(
        path.suffix + f".tmp.{os.getpid()}.{threading.get_ident()}"
    )
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
    """Write _state to disk. Caller must hold _lock."""
    if _state is None:
        return
    try:
        _atomic_write_json(_STATE_FILE, _state)
    except OSError as exc:
        _log_write_failure_once(exc)


def _ensure_loaded() -> None:
    global _state
    if _state is None:
        _state = _load_state()


def _append_archive(record: Dict[str, Any]) -> None:
    """Append one closed-session record to sessions_archive.jsonl."""
    try:
        _ARCHIVE_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(_ARCHIVE_FILE, "a", encoding="utf-8") as f:
            f.write(json.dumps(record, ensure_ascii=False) + "\n")
    except OSError as exc:
        logger.warning("Cannot append to sessions_archive.jsonl: %s", exc)


def _push_session_ended(behavior: str) -> None:
    """Push session_ended event to all web WS connections (fire-and-forget)."""
    try:
        import json as _json

        # Import here to avoid circular imports at module load time.
        from ..managers import connection_manager  # type: ignore[import]

        payload = _json.dumps({"type": "session_ended", "behavior": behavior})
        for client in connection_manager.get_web_connections():
            try:
                client.send(payload)
            except Exception:
                pass
    except Exception as exc:
        logger.warning("session_ended WS push failed: %s", exc)


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

    with _lock:
        _ensure_loaded()
        if _state.get("status") == "live":  # type: ignore[union-attr]
            raise ValueError("A session is already live. Close it first.")

        now = time.time()
        # Deterministic ID from start timestamp
        sid = "sess_" + hashlib.md5(str(now).encode()).hexdigest()[:8]

        _state.update({  # type: ignore[union-attr]
            "status": "live",
            "id": sid,
            "name": name,
            "started_at": now,
        })
        _persist()
        state_copy = dict(_state)  # type: ignore[arg-type]

    # Side-effect: set broadcast to live (outside lock to avoid deadlock with broadcast's own lock)
    try:
        from . import broadcast as broadcast_svc
        broadcast_svc.set_mode("live")
    except Exception as exc:
        logger.warning("Could not auto-set broadcast to live on session open: %s", exc)

    logger.info("Session opened: %s (%s)", name, sid)
    return state_copy


def close_session() -> Dict[str, Any]:
    """Close the active session.

    Archives the session record, sets broadcast to standby, pushes
    session_ended to viewer WS connections.
    Returns the archived session record (not the new idle state).
    Raises ValueError if no session is currently live.
    """
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
        _state.update({  # type: ignore[union-attr]
            "status": "idle",
            "id": None,
            "name": None,
            "started_at": None,
        })
        _persist()

    # Append archive record (outside lock)
    _append_archive(archived)

    # Set broadcast to standby
    try:
        from . import broadcast as broadcast_svc
        broadcast_svc.set_mode("standby")
    except Exception as exc:
        logger.warning("Could not auto-set broadcast to standby on session close: %s", exc)

    # Push session_ended to all viewer WS connections
    _push_session_ended(behavior)

    logger.info("Session closed: %s (%s), duration=%ds", archived["name"], archived["id"], archived["duration_s"])
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
    global _state, _write_failure_logged
    with _lock:
        _state = None
        _write_failure_logged = False
