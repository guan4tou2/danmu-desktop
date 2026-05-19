"""Audience aggregation + flag/kick endpoints (Batch 12-pending BE).

Surfaces the `services.audience` layer to the admin dashboard:

  GET  /admin/audience/list      — paginated list (highest risk first)
  GET  /admin/audience/<fp>      — single entry detail
  POST /admin/audience/flag      — toggle admin flag (with optional note)
  POST /admin/audience/kick      — kick (permanent fp ban via moderation_bans)
  POST /admin/audience/unkick    — undo a previous kick
  GET  /admin/audience/stats     — counts for the page header strip

All endpoints require admin login. Mutating endpoints require CSRF.
"""

from flask import request

from ...services import audience as audience_svc
from ...services import audit_log
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/audience/list", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def audience_list():
    """Paginated audience list. Optional ?limit=N (1-500, default 100)."""
    try:
        limit = int(request.args.get("limit", "100") or 100)
    except (TypeError, ValueError):
        limit = 100
    return _json_response({
        "entries": audience_svc.list_entries(limit=limit),
        "stats": audience_svc.stats(),
    })


@admin_bp.route("/audience/stats", methods=["GET"])
@require_login
def audience_stats():
    """Header strip stats: total_live / flagged / kicked counts."""
    return _json_response(audience_svc.stats())


@admin_bp.route("/audience/<fp>", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def audience_detail(fp):
    """Single-fingerprint detail. Returns 404 if neither live record nor
    overlay state exists for this fp."""
    entry = audience_svc.get_entry(fp)
    if entry is None:
        return _json_response({"error": "Fingerprint not found"}, 404)
    return _json_response(entry)


@admin_bp.route("/audience/flag", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def audience_flag():
    """Toggle admin flag on a fingerprint.

    Body: ``{"fingerprint": "abc", "flagged": bool, "note": "..."}``
    Note is truncated to 200 chars at the service layer.
    """
    data = request.get_json(silent=True) or {}
    fp = (data.get("fingerprint") or "").strip()
    if not fp:
        return _json_response({"error": "fingerprint required"}, 400)
    flagged = bool(data.get("flagged", True))
    note = (data.get("note") or "").strip()

    try:
        entry = audience_svc.set_flag(fp, flagged, note)
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)

    audit_log.append(
        "audience",
        "flag" if flagged else "unflag",
        actor="admin",
        meta={"fp": entry.get("hash", fp[:12]), "note": note[:60] if flagged else ""},
    )
    return _json_response({"entry": entry})


@admin_bp.route("/audience/kick", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def audience_kick():
    """Kick a fingerprint — adds permanent fp ban + sets is_kicked flag.

    Body: ``{"fingerprint": "abc", "reason": "..."}``
    The underlying ban is via moderation_bans, so subsequent /fire from
    this fingerprint will be blocked at the rate-limit layer. Reason is
    truncated to 200 chars at the service layer.
    """
    data = request.get_json(silent=True) or {}
    fp = (data.get("fingerprint") or "").strip()
    if not fp:
        return _json_response({"error": "fingerprint required"}, 400)
    reason = (data.get("reason") or "").strip()

    try:
        entry = audience_svc.kick(fp, reason=reason, actor="admin")
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)

    # moderation_bans.add_ban already writes a moderation/ban audit row;
    # we add a complementary audience/kick row so the audience page's
    # own activity feed can show the event in context.
    audit_log.append(
        "audience",
        "kick",
        actor="admin",
        meta={"fp": entry.get("hash", fp[:12]), "reason": reason[:60]},
    )
    return _json_response({"entry": entry})


@admin_bp.route("/audience/unkick", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def audience_unkick():
    """Undo a kick — clears the overlay flag and removes the fp ban.

    Body: ``{"fingerprint": "abc"}``
    """
    data = request.get_json(silent=True) or {}
    fp = (data.get("fingerprint") or "").strip()
    if not fp:
        return _json_response({"error": "fingerprint required"}, 400)

    try:
        entry = audience_svc.unkick(fp, actor="admin")
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)

    audit_log.append(
        "audience",
        "unkick",
        actor="admin",
        meta={"fp": entry.get("hash", fp[:12])},
    )
    return _json_response({"entry": entry})
