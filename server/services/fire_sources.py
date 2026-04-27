"""Ring buffer of recent /fire integration sources.

Powers the Extensions catalog status lights — each card shows green when
its named source has fired in the last 5 minutes. Purely observational;
no enforcement.

Source identification rules (best→worst):
  1. ``X-Fire-Source`` request header (extension self-identifies)
  2. ``User-Agent`` if it starts with a known signature (Slido / OBS / …)
  3. Fallback ``"web"`` for normal browser viewer fires

Each entry: ``{ts, source, fingerprint?}`` — fingerprint truncated. Buffer
holds 200 most recent fires; ``recent_sources(window_sec)`` returns the
distinct source set seen within the time window.
"""

from __future__ import annotations

import threading
from collections import deque
from time import time as _time
from typing import Any, Deque, Dict, List, Optional

_BUFFER_SIZE = 200

_buffer: Deque[Dict[str, Any]] = deque(maxlen=_BUFFER_SIZE)
_lock = threading.Lock()


# Known UA prefixes that map to canonical source names. Extensions may
# also send ``X-Fire-Source: <name>`` directly (preferred — overrides UA).
_UA_HINTS = (
    ("slido-extension", "slido"),
    ("danmu-slido", "slido"),
    ("discord", "discord"),
    ("obs", "obs"),
    ("bookmarklet", "bookmarklet"),
)


def detect(ua: str = "", explicit: str = "") -> str:
    """Pick the best source label for a /fire request.

    ``explicit`` takes precedence (X-Fire-Source). Falls back to UA prefix
    match. Defaults to ``web``.
    """
    explicit = (explicit or "").strip().lower()
    if explicit:
        return explicit[:32]
    ua_lc = (ua or "").lower()
    for needle, name in _UA_HINTS:
        if needle in ua_lc:
            return name
    return "web"


def record(
    source: str,
    fingerprint: Optional[str] = None,
    ip: Optional[str] = None,
    ua: Optional[str] = None,
) -> None:
    """Append a fire-source observation to the ring buffer."""
    if not source:
        return
    with _lock:
        _buffer.append({
            "ts": _time(),
            "source": str(source)[:32],
            "fingerprint": (str(fingerprint)[:12] if fingerprint else None),
            "ip": (str(ip)[:64] if ip else None),
            "ua": (str(ua)[:120] if ua else None),
        })


def recent_sources(window_sec: int = 300) -> List[Dict[str, Any]]:
    """Distinct sources seen within the last ``window_sec`` seconds, with
    last-seen timestamp + count.

    Returns: ``[{source, last_seen, count}, …]`` newest-first by last_seen.
    Empty list when nothing observed.
    """
    cutoff = _time() - max(1, int(window_sec))
    by_source: Dict[str, Dict[str, Any]] = {}
    with _lock:
        for e in _buffer:
            if e["ts"] < cutoff:
                continue
            src = e["source"]
            slot = by_source.get(src)
            if slot is None:
                by_source[src] = {"source": src, "last_seen": e["ts"], "count": 1}
            else:
                slot["count"] += 1
                if e["ts"] > slot["last_seen"]:
                    slot["last_seen"] = e["ts"]
    return sorted(by_source.values(), key=lambda r: r["last_seen"], reverse=True)


def recent_ips(window_sec: int = 3600, limit: int = 10) -> List[Dict[str, Any]]:
    """Top IPs by hit count in window. Each: {ip, count, last_seen, ua, source}.
    Used by Fire Token page's "近 1h 來源 IP" panel.
    """
    cutoff = _time() - max(1, int(window_sec))
    by_ip: Dict[str, Dict[str, Any]] = {}
    with _lock:
        for e in _buffer:
            if e["ts"] < cutoff:
                continue
            ip = e.get("ip")
            if not ip:
                continue
            slot = by_ip.get(ip)
            if slot is None:
                by_ip[ip] = {
                    "ip": ip,
                    "count": 1,
                    "last_seen": e["ts"],
                    "ua": e.get("ua") or "",
                    "source": e.get("source") or "",
                }
            else:
                slot["count"] += 1
                if e["ts"] > slot["last_seen"]:
                    slot["last_seen"] = e["ts"]
                    slot["ua"] = e.get("ua") or slot["ua"]
                    slot["source"] = e.get("source") or slot["source"]
    out = sorted(by_ip.values(), key=lambda r: (-r["count"], -r["last_seen"]))
    return out[: max(1, int(limit or 10))]


def clear() -> None:
    """Test helper."""
    with _lock:
        _buffer.clear()
