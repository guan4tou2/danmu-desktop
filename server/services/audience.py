"""Audience aggregation, risk scoring, and flag/kick lifecycle.

Sits on top of `fingerprint_tracker` (live observations: msgs / rate /
blocked / first-last seen) and overlays an audience-management state
layer: admin flags + risk score + kick history.

State model:

    AudienceEntry {
      hash: str (12-char sha256 prefix, same as fingerprint_tracker)
      fingerprint: str (raw — needed for moderation_bans.add_ban kick path)
      ip, ua, msgs, blocked, rate_per_min, first_seen, last_seen, state
                (mirrored from fingerprint_tracker)
      # audience-specific overlay
      is_flagged: bool       # admin-toggled — surfaces in UI
      flag_note: str         # short admin note (≤ 200)
      is_kicked: bool        # set true when kicked; also adds fp to
                              # moderation_bans as a permanent ban
      kick_reason: str
      kicked_at: int | None
      risk_score: int        # 0-100, computed on demand
      risk_factors: [str]    # why the score is what it is
    }

Persistence: in-memory dict + lazy save to ``runtime/audience.json``.
Flags + kicks survive restarts; live counters (msgs / rate) reset
since they come from fingerprint_tracker which is process-local by
design.

Risk scoring is transparent — see `_score()` for the rubric. Factors
contributing to the score are returned as a list so the UI can render
"why is this person risky" tooltips.
"""

from __future__ import annotations

import json
import logging
import threading
import time
from pathlib import Path
from typing import Any, Dict, List, Optional

from server.config import Config

logger = logging.getLogger(__name__)

_STATE_FILE = (
    Path(Config.RUNTIME_DIR) / "audience.json"
    if hasattr(Config, "RUNTIME_DIR")
    else Path(__file__).resolve().parent.parent / "runtime" / "audience.json"
)

_lock = threading.Lock()
# raw fingerprint → overlay dict
_state: Dict[str, Dict[str, Any]] = {}
_loaded = False

_MAX_NOTE = 200
_MAX_REASON = 200


def _load() -> None:
    """Lazy first-call load from disk."""
    global _loaded, _state
    if _loaded:
        return
    try:
        if _STATE_FILE.exists():
            with _STATE_FILE.open("r", encoding="utf-8") as f:
                data = json.load(f)
            if isinstance(data, dict):
                _state = {k: v for k, v in data.items() if isinstance(v, dict)}
    except Exception as exc:  # pragma: no cover — best-effort load
        logger.warning("audience: failed to load %s: %s", _STATE_FILE, exc)
        _state = {}
    _loaded = True


def _save() -> None:
    """Persist current state to disk via temp + rename for atomicity."""
    try:
        _STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
        tmp = _STATE_FILE.with_suffix(_STATE_FILE.suffix + ".tmp")
        with tmp.open("w", encoding="utf-8") as f:
            json.dump(_state, f, ensure_ascii=False, indent=2)
        tmp.replace(_STATE_FILE)
    except OSError as exc:  # pragma: no cover — disk error → fall back to memory
        logger.warning("audience: failed to save %s: %s", _STATE_FILE, exc)


def _score(rec: Dict[str, Any], overlay: Dict[str, Any]) -> Dict[str, Any]:
    """Compute a 0-100 risk score from live counters + overlay state.

    Each contributing condition adds to the score and appends a tag to
    `risk_factors`. Cap at 100. Transparent on purpose so admins can
    debate the rubric and the FE can render tooltips.
    """
    score = 0
    factors: List[str] = []
    rate = int(rec.get("rate_per_min", 0) or 0)
    blocked = int(rec.get("blocked", 0) or 0)
    state = rec.get("state", "")
    msgs = int(rec.get("msgs", 0) or 0)
    now = int(time.time())
    last_seen = int(rec.get("last_seen", 0) or 0)

    if rate > 60:
        score += 30
        factors.append("high_rate")
    if blocked > 5:
        score += 25
        factors.append("blocked_msgs")
    if state == "blocked":
        score += 20
        factors.append("state_blocked")
    elif state == "flagged":
        score += 15
        factors.append("state_flagged")
    if overlay.get("is_kicked"):
        score += 10
        factors.append("kicked")
    if overlay.get("is_flagged"):
        score += 10
        factors.append("admin_flagged")
    # Heavy-but-recent activity (might be a bot ramping up)
    if msgs > 100 and (now - last_seen) < 60:
        score += 5
        factors.append("heavy_recent")

    return {"risk_score": min(100, score), "risk_factors": factors}


def _overlay_for(fingerprint: str) -> Dict[str, Any]:
    """Return the persisted overlay for a fp (creating an empty default)."""
    return _state.get(fingerprint) or {
        "is_flagged": False,
        "flag_note": "",
        "is_kicked": False,
        "kick_reason": "",
        "kicked_at": None,
    }


def list_entries(limit: int = 100) -> List[Dict[str, Any]]:
    """Return all audience entries (live counters + overlay + risk score).

    Sorted by risk_score desc (most-risky first), then last_seen desc.
    Cap `limit` to [1, 500].
    """
    from . import fingerprint_tracker

    with _lock:
        _load()
        # Use list_with_raw so each row carries the raw fp — needed for
        # overlay lookup + kick action. The standard list_all path
        # (used by /admin/fingerprints) intentionally hides raw fp.
        live = fingerprint_tracker.list_with_raw(limit=500)
        out: List[Dict[str, Any]] = []
        tracked_hashes = set()
        for rec in live:
            raw_fp = rec["fingerprint"]
            tracked_hashes.add(rec["hash"])
            overlay = _overlay_for(raw_fp)
            scored = _score(rec, overlay)
            out.append({**rec, **overlay, **scored})

        # Append overlay-only entries (kicked / flagged but no live record).
        for fp, ov in _state.items():
            if ov.get("hash") in tracked_hashes:
                continue
            stub = {
                "hash": ov.get("hash") or "",
                "ip": ov.get("ip", ""),
                "ua": ov.get("ua", ""),
                "msgs": 0,
                "blocked": 0,
                "rate_per_min": 0,
                "state": "inactive",
                "first_seen": ov.get("kicked_at") or 0,
                "last_seen": ov.get("kicked_at") or 0,
            }
            scored = _score(stub, ov)
            out.append({**stub, **ov, **scored, "fingerprint": fp})

        # Sort: highest risk first, then most recent
        out.sort(key=lambda r: (-r["risk_score"], -(r.get("last_seen") or 0)))
        return out[: max(1, min(int(limit), 500))]


def get_entry(fingerprint: str) -> Optional[Dict[str, Any]]:
    """Single-entry lookup by raw fingerprint. Returns None if not seen."""
    from . import fingerprint_tracker

    if not fingerprint:
        return None
    with _lock:
        _load()
        live = fingerprint_tracker.get(fingerprint)
        overlay = _overlay_for(fingerprint)
        if not live and not _state.get(fingerprint):
            return None
        rec = live or {
            "hash": overlay.get("hash") or "",
            "ip": overlay.get("ip", ""),
            "ua": overlay.get("ua", ""),
            "msgs": 0,
            "blocked": 0,
            "rate_per_min": 0,
            "state": "inactive",
            "first_seen": overlay.get("kicked_at") or 0,
            "last_seen": overlay.get("kicked_at") or 0,
        }
        scored = _score(rec, overlay)
        return {**rec, **overlay, **scored, "fingerprint": fingerprint}


def set_flag(fingerprint: str, flagged: bool, note: str = "") -> Dict[str, Any]:
    """Toggle the admin flag on a fingerprint. Persists immediately.

    Raises ValueError on empty fingerprint or oversized note.
    """
    if not fingerprint or not isinstance(fingerprint, str):
        raise ValueError("fingerprint must be a non-empty string")
    note = (note or "")[:_MAX_NOTE]
    with _lock:
        _load()
        from . import fingerprint_tracker

        existing = _state.get(fingerprint) or {}
        live = fingerprint_tracker.get(fingerprint) or {}
        merged = {
            **_overlay_for(fingerprint),
            **existing,
            "is_flagged": bool(flagged),
            "flag_note": note if flagged else "",
            "hash": live.get("hash") or existing.get("hash") or "",
            "ip": live.get("ip") or existing.get("ip", ""),
            "ua": live.get("ua") or existing.get("ua", ""),
        }
        _state[fingerprint] = merged
        _save()
        return merged


def kick(fingerprint: str, reason: str = "", actor: str = "admin") -> Dict[str, Any]:
    """Mark a fingerprint as kicked + add to moderation_bans permanent ban.

    The ban path uses target_kind="fingerprint" so future /fire from this
    fp is rejected at the rate-limit layer. Returns the updated overlay.
    """
    if not fingerprint or not isinstance(fingerprint, str):
        raise ValueError("fingerprint must be a non-empty string")
    reason = (reason or "")[:_MAX_REASON]

    # Issue the underlying ban via moderation_bans (handles audit log).
    from . import moderation_bans

    try:
        moderation_bans.add_ban(
            target_kind="fingerprint",
            target=fingerprint,
            duration_s=0,  # permanent until manually unbanned
            reason=reason or "kicked from audience page",
            actor=actor,
            kind="ban",
        )
    except ValueError:
        # Propagate validation errors so the route returns 400
        raise

    with _lock:
        _load()
        from . import fingerprint_tracker

        existing = _state.get(fingerprint) or {}
        live = fingerprint_tracker.get(fingerprint) or {}
        merged = {
            **_overlay_for(fingerprint),
            **existing,
            "is_kicked": True,
            "kick_reason": reason,
            "kicked_at": int(time.time()),
            "hash": live.get("hash") or existing.get("hash") or "",
            "ip": live.get("ip") or existing.get("ip", ""),
            "ua": live.get("ua") or existing.get("ua", ""),
        }
        _state[fingerprint] = merged
        _save()
        return merged


def unkick(fingerprint: str, actor: str = "admin") -> Dict[str, Any]:
    """Clear the kicked flag + remove the underlying ban."""
    if not fingerprint:
        raise ValueError("fingerprint must be a non-empty string")
    from . import moderation_bans

    try:
        moderation_bans.remove_ban(
            target_kind="fingerprint",
            target=fingerprint,
            actor=actor,
        )
    except Exception:
        # Removing a non-existent ban shouldn't block the unkick path —
        # we still want to clear the overlay flag.
        pass

    with _lock:
        _load()
        existing = _state.get(fingerprint) or {}
        merged = {
            **_overlay_for(fingerprint),
            **existing,
            "is_kicked": False,
            "kick_reason": "",
            "kicked_at": None,
        }
        _state[fingerprint] = merged
        _save()
        return merged


def stats() -> Dict[str, int]:
    """Aggregate counts for the audience page header."""
    from . import fingerprint_tracker

    with _lock:
        _load()
        live = fingerprint_tracker.list_all(limit=500)
        total_live = len(live)
        flagged = sum(1 for v in _state.values() if v.get("is_flagged"))
        kicked = sum(1 for v in _state.values() if v.get("is_kicked"))
        return {
            "total_live": total_live,
            "flagged": flagged,
            "kicked": kicked,
        }


def reset_for_test() -> None:
    """Test helper — clears in-memory state without touching disk."""
    global _state, _loaded
    with _lock:
        _state = {}
        _loaded = True
