"""Admin session lifecycle routes (2026-04-29).

Endpoints:
  GET  /admin/session/current         → current session state
  POST /admin/session/open            → {name} — open new session
  POST /admin/session/close           → close active session
  PATCH /admin/session/settings       → {viewer_end_behavior} — update setting
  GET  /admin/session/archive         → list of closed sessions (newest-first)
  GET  /admin/session/archive/<id>    → single session by ID (archive or live)
"""

import time

from flask import request

from ...services import session_service
from ...services.security import rate_limit
from ...utils import sanitize_log_string
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/session/current", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def session_current():
    """Return current session state."""
    return _json_response(session_service.get_state())


@admin_bp.route("/session/open", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
@require_csrf
def session_open():
    """Open a new session.

    Body: {"name": "活動名稱"}
    On success sets broadcast to live and returns new state.
    """
    body = request.get_json(silent=True) or {}
    name = str(body.get("name") or "").strip()
    if not name:
        return _json_response({"error": "name is required"}, 400)
    if len(name) > 120:
        return _json_response({"error": "name must be ≤ 120 characters"}, 400)

    try:
        state = session_service.open_session(name)
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 409)

    return _json_response({"ok": True, "session": state})


@admin_bp.route("/session/close", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
@require_csrf
def session_close():
    """Close the active session.

    Archives session, sets broadcast to standby, pushes session_ended to
    all viewer WS connections. Returns the archived session record.
    """
    try:
        archived = session_service.close_session()
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 409)

    return _json_response({"ok": True, "archived": archived})


@admin_bp.route("/session/settings", methods=["PATCH"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
@require_csrf
def session_settings():
    """Update session-level settings.

    Body: {"viewer_end_behavior": "continue" | "ended_screen" | "reload"}
    """
    body = request.get_json(silent=True) or {}
    behavior = body.get("viewer_end_behavior")
    if behavior is not None:
        if behavior not in session_service.VALID_BEHAVIORS:
            valid = list(session_service.VALID_BEHAVIORS)
            return _json_response(
                {"error": f"viewer_end_behavior must be one of {valid}"},
                400,
            )
        try:
            state = session_service.set_viewer_end_behavior(behavior)
            return _json_response({"ok": True, "session": state})
        except Exception as exc:
            return _json_response({"error": sanitize_log_string(str(exc))}, 500)

    return _json_response({"error": "No valid settings field provided"}, 400)


@admin_bp.route("/session/archive", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def session_archive():
    """Return archived (closed) sessions newest-first."""
    limit = max(1, min(request.args.get("limit", 50, type=int), 200))
    records = session_service.get_archive(limit=limit)
    return _json_response({"sessions": records, "total": len(records)})


@admin_bp.route("/session/archive/<session_id>", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def session_archive_detail(session_id):
    """Return a single session by ID — checks live session first, then archive.

    Response shape mirrors GET /admin/sessions/<id>:
      {"session": {...}, "records": [], "density": []}
    Lifecycle sessions have no per-message records; the caller renders what it can.
    """
    if not session_id:
        return _json_response({"error": "session_id is required"}, 400)

    # 1. Check currently live session
    current = session_service.get_state()
    if current.get("status") == "live" and current.get("id") == session_id:
        now = time.time()
        started = current.get("started_at") or now
        sess = {
            "id": current["id"],
            "name": current["name"],
            "started_at": started,
            "ended_at": None,
            "duration_s": int(now - started),
            "viewer_end_behavior": current.get("viewer_end_behavior", "continue"),
            "status": "live",
        }
        return _json_response({"session": sess, "records": [], "density": []})

    # 2. Search closed archive
    records = session_service.get_archive(limit=500)
    sess = next((r for r in records if r.get("id") == session_id), None)
    if not sess:
        return _json_response({"error": "Session not found"}, 404)
    return _json_response({"session": sess, "records": [], "density": []})
