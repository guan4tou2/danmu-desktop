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

import json
import logging
import threading
import time
import zipfile
from pathlib import Path
from typing import Any, Dict, Optional

logger = logging.getLogger(__name__)

# Three missed heartbeats: tab closed, browser asleep, or extension off.
STALE_AFTER_SEC = 90

_STATES = frozenset({"watching", "error"})
_ERRORS = frozenset(
    {
        "",
        "rate_limited",
        "screen_full",
        "no_overlay",
        "rejected",
        "captcha_required",
        "token_invalid",
        "feed_unrecognized",
        "tracking_full",
        "server_unreachable",
    }
)
# late_skipped: unknown questions first seen after the extension's start
# point and skipped as history (older sort / page, or undatable).
_COUNTERS = ("sent", "held", "blocked", "failed", "dropped", "skipped", "late_skipped")
_MAX_COUNTER = 10_000_000

_lock = threading.Lock()
_report: Optional[Dict[str, Any]] = None
# Last heartbeat that carried a wrong / revoked token. Unauthenticated by
# nature, so it only ever flips the card to "token rejected" for a while;
# it never touches the stored report.
_rejected_at: Optional[float] = None
# The zip set last warned about, so a misbuilt static/extensions/ is logged
# once per process instead of on every admin poll (~15 s).
_warned_zips: Optional[tuple] = None


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
            "[slido] extension reports %s (sent=%d held=%d blocked=%d failed=%d dropped=%d)",
            report["error"],
            report["sent"],
            report["held"],
            report["blocked"],
            report["failed"],
            report["dropped"],
        )
    elif prev_error and not report["error"]:
        logger.info("[slido] extension recovered from %s", prev_error)
    return dict(report)


def note_rejected(now: Optional[float] = None) -> None:
    """Remember that a heartbeat arrived with an invalid token."""
    global _rejected_at
    ts = time.time() if now is None else now
    with _lock:
        first = _rejected_at is None or ts - _rejected_at > STALE_AFTER_SEC
        _rejected_at = ts
    if first:
        logger.warning("[slido] extension heartbeat rejected: invalid fire token")


def get_public(now: Optional[float] = None) -> Dict[str, Any]:
    """``{report, age_sec, stale, token_rejected}``.

    ``report`` is None until the first valid one. ``token_rejected`` is True
    only while there is no fresh valid report and a bad-token heartbeat
    arrived recently. Anyone can send a bad token, so it must never mask a
    live extension's real status — a fresh valid report always wins.
    """
    now = time.time() if now is None else now
    with _lock:
        report = dict(_report) if _report else None
        rejected_at = _rejected_at
    age = max(0.0, now - report["received_at"]) if report else None
    stale = age is None or age > STALE_AFTER_SEC
    token_rejected = stale and rejected_at is not None and now - rejected_at <= STALE_AFTER_SEC
    return {
        "report": report,
        "age_sec": round(age, 1) if age is not None else None,
        "stale": stale,
        "token_rejected": token_rejected,
    }


_EXTENSIONS_DIR = Path(__file__).resolve().parent.parent / "static" / "extensions"
_ZIP_PREFIX = "danmu-slido-extension-"


def extension_info(directory: Optional[Path] = None) -> Optional[Dict[str, str]]:
    """Version + download path of the packaged extension, or None.

    Read from the zip itself (its manifest.json), not from slido-extension/:
    the server image does not contain the repo root, but it does contain
    static/ — so the card can never advertise a version it cannot serve.
    """
    global _warned_zips
    folder = directory or _EXTENSIONS_DIR
    zips = sorted(folder.glob(f"{_ZIP_PREFIX}*.zip"))
    if len(zips) != 1:
        # The build script keeps exactly one; picking among several by name
        # would get versions like 0.10.0 vs 0.9.0 wrong.
        names = tuple(z.name for z in zips)
        with _lock:
            changed = bool(names) and names != _warned_zips
            _warned_zips = names
        if changed:
            logger.warning("[slido] %d extension zips in %s; expected one", len(zips), folder)
        return None
    with _lock:
        _warned_zips = None  # back to normal: warn again if it breaks again
    path = zips[0]
    try:
        with zipfile.ZipFile(path) as zf:
            manifest = json.loads(zf.read("slido-extension/manifest.json").decode("utf-8"))
        version = str(manifest["version"])
    except (OSError, KeyError, ValueError, zipfile.BadZipFile) as exc:
        logger.warning("[slido] cannot read %s: %s", path.name, exc)
        return None
    return {"version": version, "download_url": f"/static/extensions/{path.name}"}


def reset_for_tests() -> None:
    global _report, _rejected_at, _warned_zips
    with _lock:
        _report = None
        _rejected_at = None
        _warned_zips = None
