"""Moderation bans API — time-bound ban / mute with optional expiry.

Frontend: design v4 brief 0518-2 (admin-brief-0518.jsx BanDurationPicker +
BanExpiresChips). The duration picker writes a single audit_log entry per
ban; the list endpoint computes status (permanent / active / expired)
lazily by walking the audit ring.
"""

from flask import request, session

from ...services import moderation_bans
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/mod/bans/list", methods=["GET"])
@require_login
def list_mod_bans():
    """Return the active + recently-expired ban list for the admin UI."""
    rows = moderation_bans.list_active()
    return _json_response({"bans": rows})


@admin_bp.route("/mod/bans/add", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def add_mod_ban():
    """Issue a ban / mute. body: { target_kind, target, duration_s, reason, kind }"""
    data = request.get_json(silent=True) or {}
    try:
        meta = moderation_bans.add_ban(
            target_kind=str(data.get("target_kind") or "").strip(),
            target=str(data.get("target") or "").strip(),
            duration_s=int(data.get("duration_s") or 0),
            reason=str(data.get("reason") or ""),
            actor=str(session.get("username") or "admin"),
            kind=str(data.get("kind") or "ban").strip(),
        )
        return _json_response({"ban": meta}, 201)
    except (ValueError, TypeError) as exc:
        return _json_response({"error": str(exc)}, 400)


@admin_bp.route("/mod/bans/remove", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def remove_mod_ban():
    """Manually unban. body: { target_kind, target, reason }"""
    data = request.get_json(silent=True) or {}
    try:
        meta = moderation_bans.remove_ban(
            target_kind=str(data.get("target_kind") or "").strip(),
            target=str(data.get("target") or "").strip(),
            actor=str(session.get("username") or "admin"),
            reason=str(data.get("reason") or ""),
        )
        return _json_response({"unban": meta})
    except (ValueError, TypeError) as exc:
        return _json_response({"error": str(exc)}, 400)
