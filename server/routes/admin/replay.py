"""Replay API routes."""

from flask import request, session

from ...services.replay import replay_service
from ...services import replay_annotations
from ...services.security import rate_limit
from ...services.ws_state import get_ws_client_count
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/replay", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def start_replay():
    """Start historical danmu replay."""
    if get_ws_client_count() <= 0:
        return _json_response({"error": "No overlay connected"}, 503)

    data = request.get_json(silent=True) or {}
    records = data.get("records", [])
    speed = data.get("speedMultiplier", 1.0)

    if not records:
        return _json_response({"error": "No records provided"}, 400)
    if len(records) > 500:
        return _json_response({"error": "Too many records (max 500)"}, 400)
    if not isinstance(speed, (int, float)) or speed <= 0:
        return _json_response({"error": "Invalid speed multiplier"}, 400)

    replay_id = replay_service.start(records, speed_multiplier=float(speed))
    return _json_response(
        {
            "replayId": replay_id,
            "count": len(records),
        }
    )


@admin_bp.route("/replay/pause", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def pause_replay():
    """Pause replay."""
    replay_service.pause()
    return _json_response(replay_service.get_status())


@admin_bp.route("/replay/resume", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def resume_replay():
    """Resume replay."""
    replay_service.resume()
    return _json_response(replay_service.get_status())


@admin_bp.route("/replay/stop", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def stop_replay():
    """Stop replay."""
    replay_service.stop()
    return _json_response({"status": "stopped"})


@admin_bp.route("/replay/status", methods=["GET"])
@require_login
def get_replay_status():
    """Get replay status."""
    return _json_response(replay_service.get_status())


@admin_bp.route("/replay/annotations", methods=["GET"])
@require_login
def list_replay_annotations():
    """List annotations pinned to a session timeline."""
    session_id = request.args.get("session_id", "").strip()
    if not session_id:
        return _json_response({"error": "session_id required"}, 400)
    rows = replay_annotations.list_for_session(session_id)
    return _json_response({"annotations": rows})


@admin_bp.route("/replay/annotations", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def add_replay_annotation():
    """Create an annotation tied to a session timestamp."""
    data = request.get_json(silent=True) or {}
    try:
        row = replay_annotations.add(
            session_id=str(data.get("session_id") or "").strip(),
            ts_ms=int(data.get("ts_ms", 0)),
            label=str(data.get("label") or "note").strip(),
            note=str(data.get("note") or "")[:280],
            actor=str(session.get("username") or "admin"),
        )
        return _json_response({"annotation": row}, 201)
    except (ValueError, TypeError) as exc:
        return _json_response({"error": str(exc)}, 400)


@admin_bp.route("/replay/annotations/<annotation_id>", methods=["DELETE"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def delete_replay_annotation(annotation_id: str):
    """Tombstone an annotation."""
    if not replay_annotations.remove(annotation_id):
        return _json_response({"error": "Annotation not found"}, 404)
    return _json_response({"deleted": annotation_id})
