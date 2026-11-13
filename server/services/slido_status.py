"""Last status report from the Slido browser extension.

The extension does its work inside the operator's browser (see
``slido-extension/``), so without this the server only ever sees the
danmu that made it through — never "the Slido feed stopped parsing" or
"every send is being rate-limited". The extension posts a small counter
snapshot on state changes and every ~30 s while a Slido tab is open; the
Extensions page reads it back as one status line.

In-memory only: it describes the current browser session, and a restart
simply means "waiting for the next report". Not admin-mutable, so it does
not use ``JsonState``.
"""

from __future__ import annotations

import logging
import threading
import time
from typing import Any, Dict, Optional

logger = logging.getLogger(__name__)

# Three missed heartbeats: tab closed, browser asleep, or extension off.
STALE_AFTER_SEC = 90

_STATES = frozenset({"watching", "error"})
_ERRORS = frozenset(
    {"", "rate_limited", "no_overlay", "rejected", "feed_unrecognized", "server_unreachable"}
)
_COUNTERS = ("sent", "blocked", "failed", "dropped", "skipped")
_MAX_COUNTER = 10_000_000

_lock = threading.Lock()
_report: Optional[Dict[str, Any]] = None


def _normalize(raw: Any) -> Dict[str, Any]:
    if not isinstance(raw, dict):
        raise ValueError("report must be an object")
    state = raw.get("state")
    if state not in _STATES:
        raise ValueError("invalid state")
    error = raw.get("error") or ""
    if error not in _ERRORS:
        raise ValueError("invalid error")
    out: Dict[str, Any] = {"state": state, "error": error}
    for key in _COUNTERS:
        value = raw.get(key, 0)
        if isinstance(value, bool) or not isinstance(value, int):
            raise ValueError(f"{key} must be an integer")
        out[key] = max(0, min(value, _MAX_COUNTER))
    version = raw.get("version") or ""
    out["version"] = str(version)[:16] if isinstance(version, str) else ""
    return out


def record(raw: Any, now: Optional[float] = None) -> Dict[str, Any]:
    """Validate and store one report. Raises ``ValueError`` on bad input."""
    global _report
    report = _normalize(raw)
    report["received_at"] = time.time() if now is None else now
    with _lock:
        previous = _report
        _report = report
    prev_error = previous["error"] if previous else ""
    if report["error"] and report["error"] != prev_error:
        logger.warning(
            "[slido] extension reports %s (sent=%d blocked=%d failed=%d dropped=%d)",
            report["error"],
            report["sent"],
            report["blocked"],
            report["failed"],
            report["dropped"],
        )
    elif prev_error and not report["error"]:
        logger.info("[slido] extension recovered from %s", prev_error)
    return dict(report)


def get_public(now: Optional[float] = None) -> Dict[str, Any]:
    """``{report, age_sec, stale}``; ``report`` is None until the first one."""
    with _lock:
        report = dict(_report) if _report else None
    if report is None:
        return {"report": None, "age_sec": None, "stale": True}
    age = max(0.0, (time.time() if now is None else now) - report["received_at"])
    return {"report": report, "age_sec": round(age, 1), "stale": age > STALE_AFTER_SEC}


def reset_for_tests() -> None:
    global _report
    with _lock:
        _report = None
