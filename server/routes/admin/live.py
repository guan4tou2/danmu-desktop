"""Live feed API routes."""

from flask import request

from ...services.blacklist import add_keyword
from ...services.security import rate_limit
from ...services.validation import BlacklistKeywordSchema, validate_request
from . import _broadcast_blacklist_update, _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/live/block", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def live_block():
    """Live block -- add to blacklist or filter rule."""
    data = request.get_json(silent=True) or {}
    block_type = data.get("type", "keyword")  # "keyword" or "fingerprint"
    validated, errors = validate_request(BlacklistKeywordSchema, {"keyword": data.get("value", "")})
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    value = validated["keyword"]

    if block_type == "keyword":
        add_keyword(value)
        _broadcast_blacklist_update()
        return _json_response({"message": f"Keyword '{value}' blocked"})
    elif block_type == "fingerprint":
        from ...services.filter_engine import filter_engine

        filter_engine.add_rule(
            {
                "type": "fingerprint",
                "pattern": value,
                "action": "block",
                "priority": 0,
                "enabled": True,
            }
        )
        return _json_response({"message": "Fingerprint rule added"})
    return _json_response({"error": "Unknown block type"}, 400)
