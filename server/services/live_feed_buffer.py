"""Ring buffer of recent danmu, exposed to admin via polling.

Replaces the WS push channel admin used to watch live activity. Each
forwarded danmu (via ``messaging._broadcast_live_feed``) appends a
snapshot here with a monotonically-increasing sequence number; admin
polls ``GET /admin/live-feed/recent?since=<seq>`` every ~1.5 s.

Phase 1 of the admin-WS removal (2026-05-05) — admin no longer opens
``wss://host/ws``, so a polling primitive must exist before we cut the
WS bootstrap. flask-sock route stays for the viewer's
``settings_changed`` push for now.
"""

from __future__ import annotations

import threading
from collections import deque
from typing import Any, Deque, Dict, List

# Cap chosen so a single admin tab catching up after a brief network
# stall (~30 s gap) at peak event throughput (~5 danmu/s) still gets
# the full window. Buffer is RAM-only — restart wipes it, which is
# fine: live feed is operator-now data, not historical record.
_MAX_ENTRIES = 200

_lock = threading.Lock()
_buffer: Deque[Dict[str, Any]] = deque(maxlen=_MAX_ENTRIES)
_next_seq = 1  # monotonically increasing; never reuses a seq across appends


def append(entry: Dict[str, Any]) -> int:
    """Push one entry; return its assigned seq number.

    ``entry`` is the same shape as the legacy WS ``danmu_live.data``
    payload (text / color / size / speed / opacity / nickname / layout
    / isImage / fingerprint).
    """
    global _next_seq
    if not isinstance(entry, dict):
        return 0
    with _lock:
        seq = _next_seq
        _next_seq += 1
        _buffer.append({"seq": seq, "data": dict(entry)})
        return seq


def recent(since: int = 0, limit: int = 100) -> Dict[str, Any]:
    """Return entries with seq > since (oldest-first, capped at limit).

    Response shape:
        {"entries": [{"seq": int, "data": {...}}, ...],
         "next_since": int}

    ``next_since`` is the seq of the last returned entry; client uses
    it as the next ``since`` cursor. If the client's ``since`` is older
    than the oldest buffer entry (buffer wraparound while client was
    asleep), client just receives the current window — same operator
    experience as connecting WS late.
    """
    if not isinstance(since, int) or since < 0:
        since = 0
    if not isinstance(limit, int) or limit <= 0 or limit > _MAX_ENTRIES:
        limit = 100
    with _lock:
        # Filter in O(n) — buffer is small (<= _MAX_ENTRIES).
        out: List[Dict[str, Any]] = [e for e in _buffer if e["seq"] > since]
    out = out[:limit]
    next_since = out[-1]["seq"] if out else since
    return {"entries": out, "next_since": next_since}


def reset() -> None:
    """Test hook — drop the buffer + reset the sequence counter."""
    global _next_seq
    with _lock:
        _buffer.clear()
        _next_seq = 1


def snapshot() -> List[Dict[str, Any]]:
    """Test hook — return a copy of the buffer (for assertion convenience)."""
    with _lock:
        return [dict(e) for e in _buffer]
