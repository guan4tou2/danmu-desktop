"""Poll API routes."""

from flask import request

from . import _json_response, admin_bp, require_csrf, require_login
from ...services.poll import poll_service
from ...services.security import rate_limit
from ...services.validation import PollCreateSchema


@admin_bp.route("/poll/create", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def create_poll():
    """Create a new poll."""
    data = request.get_json(silent=True) or {}
    schema = PollCreateSchema()
    errors = schema.validate(data)
    if errors:
        return _json_response({"error": errors}, 400)
    try:
        poll_id = poll_service.create(data["question"], data["options"])
        return _json_response({"poll_id": poll_id, **poll_service.get_status()})
    except ValueError as e:
        return _json_response({"error": str(e)}, 409)


@admin_bp.route("/poll/end", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def end_poll():
    """End the active poll."""
    poll_service.end()
    return _json_response(poll_service.get_status())


@admin_bp.route("/poll/reset", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def reset_poll():
    """Reset the poll."""
    poll_service.reset()
    return _json_response({"state": "idle"})


@admin_bp.route("/poll/status", methods=["GET"])
@require_login
def get_poll_status():
    """Get poll status."""
    return _json_response(poll_service.get_status())
