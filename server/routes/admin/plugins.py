"""Plugin API routes."""

from flask import request

from . import _json_response, admin_bp, require_csrf, require_login
from ...services.security import rate_limit


@admin_bp.route("/plugins/list", methods=["GET"])
@require_login
def list_plugins():
    from ...services.plugin_manager import plugin_manager

    return _json_response({"plugins": plugin_manager.list_plugins()})


@admin_bp.route("/plugins/enable", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def enable_plugin():
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    from ...services.plugin_manager import plugin_manager

    if plugin_manager.enable(name):
        return _json_response({"message": f"Plugin '{name}' enabled"})
    return _json_response({"error": "Plugin not found"}, 404)


@admin_bp.route("/plugins/disable", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def disable_plugin():
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    from ...services.plugin_manager import plugin_manager

    if plugin_manager.disable(name):
        return _json_response({"message": f"Plugin '{name}' disabled"})
    return _json_response({"error": "Plugin not found"}, 404)


@admin_bp.route("/plugins/reload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def reload_plugins():
    from ...services.plugin_manager import plugin_manager

    plugin_manager.reload()
    return _json_response({"plugins": plugin_manager.list_plugins()})
