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

`list_active(now=None)` reads the audit ring + walks targets in
reverse-chrono order; the most recent event per (target_kind, target)
determines current state. No background reaper thread — clients call
`list_active()` lazily; expired entries are surfaced with state="expired"
so the UI can show "已過期 · auto-unban" and the next admin action will
auto-emit a `ban_expired` audit event for the notification feed.
"""

from __future__ import annotations

import time as _time
from typing import Any, Dict, List, Optional, Tuple

from . import audit_log

_VALID_KINDS = {"fingerprint", "ip", "nick"}
_VALID_LABELS = {"ban", "mute"}
_MAX_REASON = 200


def _validate_target_kind(target_kind: str) -> None:
    if target_kind not in _VALID_KINDS:
        raise ValueError(
            f"target_kind must be one of {sorted(_VALID_KINDS)}, got {target_kind!r}"
        )


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
    # Pull all moderation events from the audit ring.
    events = audit_log.recent(limit=500, source="moderation")
    latest = _latest_per_target(events)
    rows: List[Dict[str, Any]] = []
    for (kind_, target), ev in latest.items():
        action = ev.get("kind") or ""
        meta = ev.get("meta") or {}
        if action == "unban":
            continue
        if action not in ("ban", "mute"):
            continue
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
        rows.append({
            "target_kind": kind_,
            "target": target,
            "kind": action,
            "reason": meta.get("reason") or "",
            "status": status,
            "duration_s": duration_s,
            "expires_at": expires_at,
            "remaining_s": remaining,
            "actor": ev.get("actor") or "admin",
            "created_at": ev.get("ts"),
        })

    # Sort: active first (by remaining asc), then permanent, then expired.
    def _sort_key(r: Dict[str, Any]) -> Tuple[int, float]:
        order = {"active": 0, "permanent": 1, "expired": 2}.get(r["status"], 3)
        # For active sort by remaining ascending; others by created_at desc.
        secondary = r.get("remaining_s") if r["status"] == "active" else -(r.get("created_at") or 0)
        return (order, secondary or 0)
    rows.sort(key=_sort_key)
    return rows


def is_banned(target_kind: str, target: str, now: Optional[float] = None) -> bool:
    """Lazy check used by the filter pipeline.

    Returns True iff the most recent moderation event for (target_kind, target)
    is `ban`/`mute` AND its expires_at is None or in the future.
    """
    if now is None:
        now = _time.time()
    events = audit_log.recent(limit=500, source="moderation")
    latest = _latest_per_target(events)
    ev = latest.get((target_kind, target))
    if not ev or ev.get("kind") not in ("ban", "mute"):
        return False
    meta = ev.get("meta") or {}
    expires_at = meta.get("expires_at")
    duration_s = int(meta.get("duration_s") or 0)
    if not expires_at or duration_s <= 0:
        return True  # permanent
    return expires_at > now
