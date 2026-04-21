"""In-memory fingerprint observatory for the admin dashboard.

Tracks per-fingerprint stats (ip, user agent, message count, rolling rate,
block count) so operators can spot abusers from the admin UI without digging
through logs. State is process-local and cleared on restart — this is a live
observability tool, not an audit trail.
"""

from __future__ import annotations

import hashlib
import threading
import time
from collections import deque
from typing import Any, Deque, Dict, List, Optional

RATE_WINDOW_SEC = 60  # rolling window for msgs-per-minute rate
MAX_TIMESTAMPS = 200  # cap per-fp deque so runaway clients don't grow memory
MAX_RECORDS = 1000  # evict LRU once this many distinct fingerprints exist
UA_MAX_LEN = 256

_FLAG_RATE_PER_MIN = 60  # >60 msgs/min flags the fingerprint as hot


class _Record:
    __slots__ = (
        "hash",
        "ip",
        "ua",
        "msgs",
        "blocked",
        "first_seen",
        "last_seen",
        "_timestamps",
    )

    def __init__(self, fingerprint: str, ip: str, ua: str, now: float) -> None:
        self.hash = hashlib.sha256(fingerprint.encode("utf-8")).hexdigest()[:12]
        self.ip = ip
        self.ua = (ua or "")[:UA_MAX_LEN]
        self.msgs = 0
        self.blocked = 0
        self.first_seen = now
        self.last_seen = now
        self._timestamps: Deque[float] = deque(maxlen=MAX_TIMESTAMPS)

    def tick(self, ip: str, ua: str, now: float, blocked: bool) -> None:
        self.ip = ip or self.ip
        if ua:
            self.ua = ua[:UA_MAX_LEN]
        self.last_seen = now
        self._timestamps.append(now)
        self.msgs += 1
        if blocked:
            self.blocked += 1

    def rate_per_min(self, now: float) -> int:
        cutoff = now - RATE_WINDOW_SEC
        # Drop stale timestamps outside the window — deque.popleft is O(1).
        while self._timestamps and self._timestamps[0] < cutoff:
            self._timestamps.popleft()
        return len(self._timestamps)

    def state(self, now: float) -> str:
        if self.blocked > 0:
            return "blocked"
        if self.rate_per_min(now) > _FLAG_RATE_PER_MIN:
            return "flagged"
        return "active"

    def to_dict(self, now: float) -> Dict[str, Any]:
        return {
            "hash": self.hash,
            "ip": self.ip,
            "ua": self.ua,
            "msgs": self.msgs,
            "blocked": self.blocked,
            "rate_per_min": self.rate_per_min(now),
            "state": self.state(now),
            "first_seen": int(self.first_seen),
            "last_seen": int(self.last_seen),
        }


_lock = threading.Lock()
_records: Dict[str, _Record] = {}


def record(
    fingerprint: Optional[str],
    ip: Optional[str],
    ua: Optional[str],
    blocked: bool = False,
) -> None:
    """Log one observation for *fingerprint*. Silently no-ops if missing."""
    if not fingerprint:
        return
    now = time.time()
    with _lock:
        rec = _records.get(fingerprint)
        if rec is None:
            if len(_records) >= MAX_RECORDS:
                # Evict the least-recently-seen record.
                victim_fp = min(_records, key=lambda k: _records[k].last_seen)
                _records.pop(victim_fp, None)
            rec = _Record(fingerprint, ip or "", ua or "", now)
            _records[fingerprint] = rec
        rec.tick(ip or "", ua or "", now, blocked)


def list_all(limit: int = 100) -> List[Dict[str, Any]]:
    """Return all records, newest last_seen first, capped to *limit*."""
    now = time.time()
    with _lock:
        # Sort on the float last_seen before to_dict truncates to int seconds,
        # otherwise sub-second ordering is lost.
        ordered = sorted(_records.values(), key=lambda r: r.last_seen, reverse=True)
        snapshot = [rec.to_dict(now) for rec in ordered]
    return snapshot[: max(1, min(limit, MAX_RECORDS))]


def get(fingerprint: str) -> Optional[Dict[str, Any]]:
    now = time.time()
    with _lock:
        rec = _records.get(fingerprint)
        return rec.to_dict(now) if rec else None


def reset() -> None:
    with _lock:
        _records.clear()
