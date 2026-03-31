"""Overlay widget API routes."""

from flask import request

from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/widgets/list", methods=["GET"])
@require_login
def list_widgets():
    from ...services.widgets import list_widgets

    return _json_response({"widgets": list_widgets()})


@admin_bp.route("/widgets/create", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def create_widget():
    data = request.get_json(silent=True) or {}
    widget_type = data.get("type", "")
    config = data.get("config", {})

    from ...services.widgets import WIDGET_TYPES, create_widget

    if widget_type not in WIDGET_TYPES:
        return _json_response(
            {"error": f"Invalid type. Must be one of: {', '.join(sorted(WIDGET_TYPES))}"},
            400,
        )

    try:
        widget = create_widget(widget_type, config)
        return _json_response({"widget": widget})
    except Exception as e:
        return _json_response({"error": str(e)}, 400)


@admin_bp.route("/widgets/update", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def update_widget():
    data = request.get_json(silent=True) or {}
    widget_id = data.get("id", "")
    config = data.get("config", {})

    from ...services.widgets import update_widget

    widget = update_widget(widget_id, config)
    if widget is None:
        return _json_response({"error": "Widget not found"}, 404)
    return _json_response({"widget": widget})


@admin_bp.route("/widgets/delete", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def delete_widget():
    data = request.get_json(silent=True) or {}
    widget_id = data.get("id", "")

    from ...services.widgets import delete_widget

    if delete_widget(widget_id):
        return _json_response({"message": "Widget deleted"})
    return _json_response({"error": "Widget not found"}, 404)


@admin_bp.route("/widgets/score", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def update_score():
    data = request.get_json(silent=True) or {}
    widget_id = data.get("id", "")
    team_index = int(data.get("team_index", 0))
    delta = int(data.get("delta", 1))

    from ...services.widgets import update_scoreboard_score

    widget = update_scoreboard_score(widget_id, team_index, delta)
    if widget is None:
        return _json_response({"error": "Scoreboard not found"}, 404)
    return _json_response({"widget": widget})


@admin_bp.route("/widgets/clear", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def clear_widgets():
    from ...services.widgets import clear_all

    clear_all()
    return _json_response({"message": "All widgets cleared"})
