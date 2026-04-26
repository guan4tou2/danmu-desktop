"""Filter engine API routes."""

from flask import request

from ...services.security import rate_limit
from ...services.validation import FilterRuleSchema, validate_request
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/filters/add", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def add_filter_rule():
    data = request.get_json(silent=True) or {}
    validated, errors = validate_request(FilterRuleSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    from ...services.filter_engine import filter_engine

    try:
        rule_id = filter_engine.add_rule(validated)
        return _json_response({"rule_id": rule_id})
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)


@admin_bp.route("/filters/remove", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def remove_filter_rule():
    data = request.get_json(silent=True) or {}
    rule_id = data.get("rule_id", "")
    from ...services.filter_engine import filter_engine

    if filter_engine.remove_rule(rule_id):
        return _json_response({"message": "Rule removed"})
    return _json_response({"error": "Rule not found"}, 404)


@admin_bp.route("/filters/update", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def update_filter_rule():
    data = request.get_json(silent=True) or {}
    rule_id = data.get("rule_id", "")
    updates = data.get("updates", {})
    if not rule_id or not isinstance(updates, dict):
        return _json_response({"error": "Missing rule_id or updates"}, 400)

    from ...services.filter_engine import filter_engine
    from ...services.validation import FilterRuleUpdateSchema, validate_request

    validated_updates, errors = validate_request(FilterRuleUpdateSchema, updates)
    if errors:
        return _json_response({"error": errors}, 400)

    try:
        if filter_engine.update_rule(rule_id, validated_updates):
            return _json_response({"message": "Rule updated"})
        return _json_response({"error": "Rule not found"}, 404)
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)


@admin_bp.route("/filters/list", methods=["GET"])
@require_login
def list_filter_rules():
    from ...services.filter_engine import filter_engine

    return _json_response({"rules": filter_engine.list_rules()})


@admin_bp.route("/filters/test", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def test_filter_rule():
    """Test if a filter rule matches sample text."""
    data = request.get_json(silent=True) or {}
    rule_data = data.get("rule", {})
    sample_text = data.get("text", "")
    from ...services.filter_engine import filter_engine

    try:
        result = filter_engine.test_rule(rule_data, sample_text)
        return _json_response(
            {
                "action": result.action,
                "text": result.text,
                "reason": result.reason,
            }
        )
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)


@admin_bp.route("/filters/events", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def get_filter_events():
    """Recent filter match events (block / mask / replace / allow).

    Powers the Moderation page 即時審核日誌. Caller passes ``?since=<seq>``
    to get only newer events; first call should pass 0 (or omit) to fetch
    the latest 50.
    """
    from ...services import filter_events

    try:
        since = int(request.args.get("since", "0") or 0)
    except (TypeError, ValueError):
        since = 0
    limit = max(1, min(200, int(request.args.get("limit", "50") or 50)))
    events = filter_events.recent(since=since, limit=limit)
    latest_seq = events[0]["seq"] if events else since
    return _json_response({"events": events, "latest_seq": latest_seq})
