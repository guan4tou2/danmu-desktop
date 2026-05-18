"""Plugin API routes."""

from flask import request

from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


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


@admin_bp.route("/plugins/console", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def plugin_console_tail():
    """Tail recent plugin stdout/stderr.

    Caller passes ``?since=<seq>`` to fetch only newer lines; first call
    should pass 0 to fetch the latest 100. Optional ``?plugin=<name>``
    filters to a single plugin.
    """
    from ...services import plugin_console

    try:
        since = int(request.args.get("since", "0") or 0)
    except (TypeError, ValueError):
        since = 0
    limit = max(1, min(200, int(request.args.get("limit", "100") or 100)))
    plugin_filter = (request.args.get("plugin", "") or "").strip()
    events = plugin_console.recent(since=since, limit=limit)
    if plugin_filter:
        events = [e for e in events if e["plugin"] == plugin_filter]
    latest_seq = events[0]["seq"] if events else since
    return _json_response({"events": events, "latest_seq": latest_seq})
