"""Time-bound moderation bans — admin-issued ban / mute with optional expiry.

Backend half of design v4 brief 0518-2 (2026-05-18).

Storage model: audit_log is the source of truth. Each ban / unban writes one
audit_log entry with shape:

    source="moderation"
    kind="ban" | "mute" | "unban"
    actor="<admin username>"
    meta={
      "target_kind": "fingerprint" | "ip" | "nick",
      "target":      "<value>",
      "duration_s":  3600 | 0,             # 0 / null = permanent
      "expires_at":  1714202000.0 | None,  # epoch s
      "reason":      "<short>"
    }

State lives in ``runtime/moderation_bans.json`` (one row per target),
mirrored by an in-memory dict. audit_log still records every action for the
audit trail, but it can no longer be the source of truth: its ring holds the
newest 500 events *across all sources*, so a few hundred logins were enough to
push a ban out of the window and silently un-ban someone. Measured before this
change — issue a ban, append 520 unrelated events, and ``is_banned()`` flips
back to False. A ban's lifetime has to depend on the duration the admin chose,
not on how much else happened to be logged afterwards.

No background reaper thread — expiry is evaluated on read, and expired rows are
surfaced with status="expired" so the UI can show "已過期 · auto-unban".
"""

from __future__ import annotations

import json
import logging
import threading
import time as _time
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

from . import audit_log

logger = logging.getLogger(__name__)

_STATE_FILE = Path(__file__).parent.parent / "runtime" / "moderation_bans.json"
_lock = threading.RLock()
_state: Optional[Dict[str, Dict[str, Any]]] = None  # "kind\x00target" -> row

_VALID_KINDS = {"fingerprint", "ip", "nick"}
_VALID_LABELS = {"ban", "mute"}
_MAX_REASON = 200


def _key(target_kind: str, target: str) -> str:
    return f"{target_kind}\x00{target}"


def _load_state() -> Dict[str, Dict[str, Any]]:
    """Read the ban rows from disk once, then keep them in memory."""
    global _state
    if _state is not None:
        return _state
    with _lock:
        if _state is not None:
            return _state
        loaded: Dict[str, Dict[str, Any]] = {}
        try:
            if _STATE_FILE.exists():
                raw = json.loads(_STATE_FILE.read_text(encoding="utf-8"))
                if isinstance(raw, dict):
                    for k, row in raw.items():
                        # 只收形狀對的列 —— 壞掉一行不該讓封禁狀態整個讀不出來。
                        if isinstance(row, dict) and row.get("target_kind") and row.get("target"):
                            loaded[k] = row
        except (OSError, json.JSONDecodeError, ValueError) as exc:
            logger.warning("moderation_bans: cannot read %s: %s", _STATE_FILE, exc)
        _state = loaded
        return _state


def _save_state() -> None:
    """Best-effort persist. Failures keep the in-memory view authoritative."""
    if _state is None:
        return
    try:
        _STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
        tmp = _STATE_FILE.with_suffix(".json.tmp")
        tmp.write_text(json.dumps(_state, ensure_ascii=False, indent=1), encoding="utf-8")
        tmp.replace(_STATE_FILE)
    except OSError as exc:
        logger.warning("moderation_bans: cannot persist %s: %s", _STATE_FILE, exc)


def reset_for_tests() -> None:
    """Drop the cached state so a test can start from a clean slate."""
    global _state
    with _lock:
        _state = None


def _validate_target_kind(target_kind: str) -> None:
    if target_kind not in _VALID_KINDS:
        raise ValueError(f"target_kind must be one of {sorted(_VALID_KINDS)}, got {target_kind!r}")


def add_ban(
    target_kind: str,
    target: str,
    duration_s: int = 0,
    reason: str = "",
    actor: str = "admin",
    kind: str = "ban",
) -> Dict[str, Any]:
    """Issue a ban / mute. duration_s = 0 means permanent.

    Returns the audit entry written. Raises ValueError on invalid input.
    """
    _validate_target_kind(target_kind)
    if kind not in _VALID_LABELS:
        raise ValueError(f"kind must be one of {sorted(_VALID_LABELS)}, got {kind!r}")
    if not target or not isinstance(target, str):
        raise ValueError("target must be a non-empty string")
    if duration_s < 0:
        raise ValueError("duration_s must be ≥ 0 (0 = permanent)")

    now = _time.time()
    expires_at = (now + duration_s) if duration_s > 0 else None
    meta = {
        "target_kind": target_kind,
        "target": target.strip(),
        "duration_s": int(duration_s),
        "expires_at": expires_at,
        "reason": (reason or "").strip()[:_MAX_REASON],
    }
    audit_log.append("moderation", kind, actor=actor, meta=meta)
    with _lock:
        state = _load_state()
        state[_key(target_kind, meta["target"])] = {
            **meta,
            "kind": kind,
            "actor": actor,
            "created_at": now,
        }
        _save_state()
    return meta


def remove_ban(
    target_kind: str,
    target: str,
    actor: str = "admin",
    reason: str = "",
) -> Dict[str, Any]:
    """Manually unban — writes a `kind="unban"` audit entry.

    Returns the audit meta. The next `list_active()` call will see this
    later than the original ban and exclude the target.
    """
    _validate_target_kind(target_kind)
    if not target:
        raise ValueError("target required")
    meta = {
        "target_kind": target_kind,
        "target": target.strip(),
        "reason": (reason or "").strip()[:_MAX_REASON],
    }
    audit_log.append("moderation", "unban", actor=actor, meta=meta)
    with _lock:
        state = _load_state()
        state.pop(_key(target_kind, meta["target"]), None)
        _save_state()
    return meta


def emit_expired(target_kind: str, target: str, duration_s: int) -> None:
    """Convenience: write a `ban_expired` audit entry. Surfaced in the
    notifications feed at info severity per the brief."""
    audit_log.append(
        "moderation",
        "ban_expired",
        actor="system",
        meta={
            "target_kind": target_kind,
            "target": target,
            "duration_s": int(duration_s or 0),
        },
    )


def _latest_per_target(
    events: List[Dict[str, Any]],
) -> Dict[Tuple[str, str], Dict[str, Any]]:
    """Reverse-chrono walk → newest event per (kind, target)."""
    seen: Dict[Tuple[str, str], Dict[str, Any]] = {}
    for ev in sorted(events, key=lambda e: e.get("ts", 0), reverse=True):
        meta = ev.get("meta") or {}
        kind = meta.get("target_kind")
        target = meta.get("target")
        if not kind or not target:
            continue
        key = (kind, target)
        if key in seen:
            continue
        seen[key] = ev
    return seen


def list_active(now: Optional[float] = None) -> List[Dict[str, Any]]:
    """Return rows for the admin ban list.

    Each row: {target_kind, target, reason, status, expires_at, duration_s,
    remaining_s, actor, created_at}. status ∈ {permanent, active, expired}.
    Rows where the latest event is `unban` are excluded.
    """
    if now is None:
        now = _time.time()
    with _lock:
        rows_in = list(_load_state().values())
    rows: List[Dict[str, Any]] = []
    for meta in rows_in:
        action = meta.get("kind") or "ban"
        if action not in ("ban", "mute"):
            continue
        kind_ = meta.get("target_kind")
        target = meta.get("target")
        expires_at = meta.get("expires_at")
        duration_s = int(meta.get("duration_s") or 0)
        if not expires_at or duration_s <= 0:
            status = "permanent"
            remaining = None
        elif expires_at > now:
            status = "active"
            remaining = int(expires_at - now)
        else:
            status = "expired"
            remaining = 0
        rows.append(
            {
                "target_kind": kind_,
                "target": target,
                "kind": action,
                "reason": meta.get("reason") or "",
                "status": status,
                "duration_s": duration_s,
                "expires_at": expires_at,
                "remaining_s": remaining,
                "actor": meta.get("actor") or "admin",
                "created_at": meta.get("created_at"),
            }
        )

    # Sort: active first (by remaining asc), then permanent, then expired.
    def _sort_key(r: Dict[str, Any]) -> Tuple[int, float]:
        order = {"active": 0, "permanent": 1, "expired": 2}.get(r["status"], 3)
        # For active sort by remaining ascending; others by created_at desc.
        secondary = r.get("remaining_s") if r["status"] == "active" else -(r.get("created_at") or 0)
        return (order, secondary or 0)

    rows.sort(key=_sort_key)
    return rows


def is_banned(target_kind: str, target: str, now: Optional[float] = None) -> bool:
    """Hot-path check — called for every incoming danmu.

    Reads the in-memory ban map, so cost is a dict lookup rather than a walk
    over the audit ring (which also could not answer correctly once the ban
    aged out of the 500-event window).
    """
    if not target:
        return False
    if now is None:
        now = _time.time()
    with _lock:
        row = _load_state().get(_key(target_kind, target))
    if not row or row.get("kind") not in ("ban", "mute"):
        return False
    expires_at = row.get("expires_at")
    duration_s = int(row.get("duration_s") or 0)
    if not expires_at or duration_s <= 0:
        return True  # permanent
    return expires_at > now
