"""Replay API routes."""

from flask import request

from . import _json_response, admin_bp, require_csrf, require_login
from ...services.replay import replay_service
from ...services.security import rate_limit
from ...services.ws_state import get_ws_client_count


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
