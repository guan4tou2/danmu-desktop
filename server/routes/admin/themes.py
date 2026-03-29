"""Theme management routes."""

from flask import request

from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/themes", methods=["GET"])
@require_login
def get_themes():
    from ...services import themes as theme_svc

    themes_list = theme_svc.load_all()
    active = theme_svc.get_active_name()
    return _json_response({"themes": themes_list, "active": active})


@admin_bp.route("/themes/active", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def set_active_theme():
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    if not name:
        return _json_response({"error": "Missing theme name"}, 400)
    from ...services import themes as theme_svc

    if theme_svc.set_active(name):
        return _json_response({"active": name})
    return _json_response({"error": "Theme not found"}, 404)


@admin_bp.route("/themes/reload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def reload_themes():
    from ...services import themes as theme_svc

    themes_list = theme_svc.load_all(force=True)
    return _json_response({"themes": themes_list})
