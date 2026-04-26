"""Ring-buffer of recent filter-engine match events.

Used by:
  - /admin/filters/events  → Moderation page 即時審核日誌
  - /admin/metrics (future) → Ratelimits 違規 feed

Only records *matches* (block/allow/replace/review). Plain "pass" results
are not recorded, since they would be a firehose of every incoming
message and not what the moderation log shows.

Each event:
    {
      "seq":          monotonically increasing int (>0)
      "ts":           epoch seconds (float)
      "action":       "BLOCK" | "MASK" | "ALLOW" | "REPLACE" | "REVIEW"
      "rule_id":      str or None
      "pattern":      str (the rule's pattern; truncated to 80 chars)
      "text_excerpt": str (incoming text, truncated to 80 chars)
      "source":       str or None (fingerprint / IP / nick — caller supplies)
    }
"""

from __future__ import annotations

import threading
from collections import deque
from time import time as _time
from typing import Any, Deque, Dict, List, Optional

_BUFFER_SIZE = 200

_buffer: Deque[Dict[str, Any]] = deque(maxlen=_BUFFER_SIZE)
_lock = threading.Lock()
_seq = 0


def record(
    action: str,
    rule_id: Optional[str],
    pattern: str,
    text: str,
    source: Optional[str] = None,
) -> None:
    """Append a filter match event to the ring buffer."""
    global _seq
    with _lock:
        _seq += 1
        _buffer.append(
            {
                "seq": _seq,
                "ts": _time(),
                "action": (action or "").upper(),
                "rule_id": rule_id,
                "pattern": (pattern or "")[:80],
                "text_excerpt": (text or "")[:80],
                "source": source,
            }
        )


def recent(since: int = 0, limit: int = 50) -> List[Dict[str, Any]]:
    """Return events with seq > since, capped at `limit` (most recent first)."""
    with _lock:
        events = [e for e in _buffer if e["seq"] > since]
    if len(events) > limit:
        events = events[-limit:]
    return list(reversed(events))


def clear() -> None:
    """Test helper — drop all buffered events and reset seq."""
    global _seq
    with _lock:
        _buffer.clear()
        _seq = 0
