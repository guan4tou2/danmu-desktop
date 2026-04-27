"""Persistent audit log: cross-restart record of admin-significant events.

Fire token rotations, password changes, broadcast toggles, etc. all flow
through here. Unlike ``fire_token._audit`` (in-memory ring), this survives
process restarts and aggregates multiple sources.

Storage: append-only JSON-lines at ``server/runtime/audit.log`` (one
JSON object per line). Bounded by file size — when it crosses
``_MAX_FILE_BYTES`` we rotate to ``audit.log.1`` (single backup, no
multi-generation rotation in v1; cron / external tools should ship the
backups elsewhere if needed).

Each entry shape:
    {
      "ts": 1714198400.123,
      "source": "fire_token" | "auth" | "broadcast" | ...,
      "kind":   "rotated" | "revoked" | "toggled" | "login" | ...,
      "actor":  "admin" | "system" | None,
      "meta":   {arbitrary payload, kept small}
    }

Usage:
    from ..services import audit_log
    audit_log.append("fire_token", "rotated", actor="admin",
                     meta={"prefix": "xxxxx…"})

    events = audit_log.recent(limit=50, source="fire_token")
"""

from __future__ import annotations

import errno
import json
import logging
import os
import threading
import time as _time
from collections import deque
from pathlib import Path
from typing import Any, Deque, Dict, List, Optional

logger = logging.getLogger(__name__)

_LOG_FILE = Path(__file__).parent.parent / "runtime" / "audit.log"
_BACKUP_FILE = Path(__file__).parent.parent / "runtime" / "audit.log.1"
_MAX_FILE_BYTES = 2 * 1024 * 1024  # 2 MiB before rotating to .1
_RING_SIZE = 500                    # in-memory cache of last N events for fast list

_lock = threading.RLock()
_ring: Deque[Dict[str, Any]] = deque(maxlen=_RING_SIZE)
_loaded: bool = False
_write_failure_logged: bool = False


def _ensure_loaded() -> None:
    """Lazily seed the ring from disk on first read/append after start."""
    global _loaded
    if _loaded:
        return
    with _lock:
        if _loaded:
            return
        _ring.clear()
        try:
            if _LOG_FILE.exists():
                with _LOG_FILE.open("r", encoding="utf-8") as f:
                    for line in f:
                        line = line.strip()
                        if not line:
                            continue
                        try:
                            _ring.append(json.loads(line))
                        except (json.JSONDecodeError, ValueError):
                            continue
        except OSError as exc:
            logger.warning("audit_log: unable to read %s: %s", _LOG_FILE, exc)
        _loaded = True


def _try_rotate(stat_size: int) -> None:
    """If log exceeds size cap, rename to .1 (overwrites prior backup)."""
    if stat_size < _MAX_FILE_BYTES:
        return
    try:
        if _BACKUP_FILE.exists():
            _BACKUP_FILE.unlink()
        _LOG_FILE.rename(_BACKUP_FILE)
    except OSError as exc:
        logger.warning("audit_log: rotate failed: %s", exc)


def _append_to_disk(entry: Dict[str, Any]) -> None:
    """Best-effort persistent append. Failures degrade to in-memory only."""
    global _write_failure_logged
    try:
        _LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
        if _LOG_FILE.exists():
            try:
                _try_rotate(_LOG_FILE.stat().st_size)
            except OSError:
                pass
        line = json.dumps(entry, ensure_ascii=False, separators=(",", ":")) + "\n"
        # Open with O_APPEND-equivalent for atomic-per-line writes.
        with _LOG_FILE.open("a", encoding="utf-8") as f:
            f.write(line)
            f.flush()
            try:
                os.fsync(f.fileno())
            except (OSError, ValueError):
                pass
        try:
            os.chmod(_LOG_FILE, 0o600)
        except OSError:
            pass
        _write_failure_logged = False
    except OSError as exc:
        if not _write_failure_logged:
            logger.warning(
                "audit_log: cannot persist (degrading to in-memory): %s (errno=%s)",
                exc, getattr(exc, "errno", None),
            )
            _write_failure_logged = True


def append(source: str, kind: str, *, actor: Optional[str] = None,
           meta: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
    """Record a new audit event. Returns the stored entry.

    ``source``  identifies the subsystem (fire_token, auth, broadcast, …).
    ``kind``    is the action verb (rotated, revoked, login, toggled, …).
    ``actor``   is who triggered it (admin, system, …); free-form.
    ``meta``    carries lightweight context. Keep it small (< 1 KB).
    """
    entry: Dict[str, Any] = {
        "ts": _time.time(),
        "source": str(source)[:32] or "unknown",
        "kind": str(kind)[:32] or "event",
        "actor": (str(actor)[:32] if actor else None),
        "meta": dict(meta or {}),
    }
    _ensure_loaded()
    with _lock:
        _ring.append(entry)
        _append_to_disk(entry)
    return entry


def recent(limit: int = 50, source: Optional[str] = None) -> List[Dict[str, Any]]:
    """Return up to ``limit`` newest-first events, optionally source-filtered.

    ``limit`` is clamped to [1, 500]. Reads from in-memory ring (fast). To
    inspect older events use the on-disk file directly.
    """
    n = max(1, min(_RING_SIZE, int(limit or 50)))
    _ensure_loaded()
    with _lock:
        items = list(_ring)
    if source:
        s = str(source)[:32]
        items = [e for e in items if e.get("source") == s]
    items.reverse()
    return items[:n]


def sources() -> List[str]:
    """Distinct sources currently held in the in-memory ring."""
    _ensure_loaded()
    with _lock:
        items = list(_ring)
    return sorted({(e.get("source") or "unknown") for e in items})


def reset_for_tests() -> None:
    """Drop in-memory cache + delete log files. Test-only."""
    global _loaded, _write_failure_logged
    with _lock:
        _ring.clear()
        _loaded = False
        _write_failure_logged = False
        for path in (_LOG_FILE, _BACKUP_FILE):
            try:
                if path.exists():
                    path.unlink()
            except OSError:
                pass
