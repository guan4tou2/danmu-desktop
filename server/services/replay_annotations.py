"""Replay annotations — admin notes pinned to a session's playback timeline.

Each annotation is a (session_id, timestamp, label, note) tuple. Used by the
session detail / replay UI to overlay markers on the density timeline
("highlight at 12:43 — 觀眾爆笑點", "12:55 — 投票結果揭曉" 等).

Storage: append-only JSON-lines at ``server/runtime/replay_annotations.log``.
Same pattern as audit_log — cheap, restart-safe, no SQL needed at this scale.

Schema (per line):
    {
      "id":         "ann_<8-hex>",
      "session_id": "<session uuid>",
      "ts_ms":      12345,              # ms offset from session start
      "label":      "highlight" | "vote" | "note" | "warning",
      "note":       "<arbitrary short text>",
      "actor":      "admin" | "<username>",
      "created_at": 1714198400.123
    }

Deletes write a tombstone line: {"id": ..., "deleted": true}. list() filters
deleted ids out. Updates = delete + insert (preserves audit trail).
"""

from __future__ import annotations

import json
import logging
import threading
import time as _time
import uuid
from pathlib import Path
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

_LOG_FILE = Path(__file__).parent.parent / "runtime" / "replay_annotations.log"
_VALID_LABELS = {"highlight", "vote", "note", "warning"}

_lock = threading.RLock()
_cache: Dict[str, Dict[str, Any]] = {}
_loaded = False


def _ensure_loaded() -> None:
    global _loaded
    if _loaded:
        return
    with _lock:
        if _loaded:
            return
        _cache.clear()
        try:
            if _LOG_FILE.exists():
                with _LOG_FILE.open("r", encoding="utf-8") as f:
                    for line in f:
                        line = line.strip()
                        if not line:
                            continue
                        try:
                            row = json.loads(line)
                        except (json.JSONDecodeError, ValueError):
                            continue
                        rid = row.get("id")
                        if not rid:
                            continue
                        if row.get("deleted"):
                            _cache.pop(rid, None)
                        else:
                            _cache[rid] = row
        except OSError as exc:
            logger.warning("replay_annotations: unable to read %s: %s", _LOG_FILE, exc)
        _loaded = True


def _append(entry: Dict[str, Any]) -> None:
    try:
        _LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
        with _LOG_FILE.open("a", encoding="utf-8") as f:
            f.write(json.dumps(entry, ensure_ascii=False) + "\n")
    except OSError as exc:
        logger.warning("replay_annotations: append failed: %s", exc)


def add(
    session_id: str,
    ts_ms: int,
    label: str = "note",
    note: str = "",
    actor: Optional[str] = None,
) -> Dict[str, Any]:
    """Pin an annotation to a session timeline. Returns the row."""
    if not session_id:
        raise ValueError("session_id required")
    if ts_ms < 0:
        raise ValueError("ts_ms must be non-negative")
    if label not in _VALID_LABELS:
        raise ValueError(f"label must be one of {sorted(_VALID_LABELS)}")
    note = (note or "").strip()[:280]  # cap to a tweet-sized payload

    _ensure_loaded()
    rid = f"ann_{uuid.uuid4().hex[:8]}"
    entry = {
        "id": rid,
        "session_id": session_id,
        "ts_ms": int(ts_ms),
        "label": label,
        "note": note,
        "actor": actor or "admin",
        "created_at": _time.time(),
    }
    with _lock:
        _cache[rid] = entry
        _append(entry)
    return entry


def remove(annotation_id: str) -> bool:
    """Tombstone the annotation. Returns True if it existed."""
    _ensure_loaded()
    with _lock:
        if annotation_id not in _cache:
            return False
        _cache.pop(annotation_id, None)
        _append({"id": annotation_id, "deleted": True, "ts": _time.time()})
        return True


def list_for_session(session_id: str) -> List[Dict[str, Any]]:
    """Return all annotations for a session, sorted by ts_ms ascending."""
    _ensure_loaded()
    with _lock:
        rows = [r for r in _cache.values() if r.get("session_id") == session_id]
    rows.sort(key=lambda r: r.get("ts_ms", 0))
    return rows


def reset_for_tests() -> None:
    """Test helper: clear the in-memory cache + log file."""
    global _loaded
    with _lock:
        _cache.clear()
        _loaded = False
        try:
            if _LOG_FILE.exists():
                _LOG_FILE.unlink()
        except OSError:
            pass
