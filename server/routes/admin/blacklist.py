"""Blacklist management routes."""

from flask import current_app, request

from ...services.blacklist import block_keyword, list_keywords, remove_keyword
from ...services.filter_engine import RuleSaveError, RuleValidationError
from ...services.security import rate_limit
from ...services.validation import BlacklistKeywordSchema, validate_request
from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string

# block_keyword 的結果 → 回給呼叫端的訊息（反映實際發生的事）
_ADD_MESSAGES = {
    "added": "Keyword added",
    "enabled": "Keyword was disabled and is blocked again",
    "exists": "Keyword already exists",
}


@admin_bp.route("/blacklist/add", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def add_to_blacklist_route():
    data = request.get_json(silent=True)
    validated_data, errors = validate_request(BlacklistKeywordSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    keyword = validated_data["keyword"]
    try:
        status = block_keyword(keyword)
    except RuleValidationError as e:
        return _json_response({"error": str(e), "code": e.code, "details": e.details}, 400)
    except RuleSaveError as e:
        return _json_response({"error": str(e), "code": e.code}, 500)
    current_app.logger.info(f"Blacklist keyword {status}: {sanitize_log_string(keyword)}")
    return _json_response({"message": _ADD_MESSAGES[status], "status": status})


@admin_bp.route("/blacklist/remove", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def remove_from_blacklist_route():
    data = request.get_json(silent=True)
    validated_data, errors = validate_request(BlacklistKeywordSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    keyword = validated_data["keyword"]
    try:
        removed = remove_keyword(keyword)
    except RuleSaveError as e:
        return _json_response({"error": str(e), "code": e.code}, 500)
    if removed:
        current_app.logger.info(f"Blacklist keyword removed: {sanitize_log_string(keyword)}")
        return _json_response({"message": "Keyword removed"})
    current_app.logger.warning(f"Blacklist keyword not found: {sanitize_log_string(keyword)}")
    return _json_response({"error": "Keyword not found"}, 404)


@admin_bp.route("/blacklist/get", methods=["GET"])
@require_login
def get_blacklist():
    return _json_response(list_keywords())
