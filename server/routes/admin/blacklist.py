"""Blacklist management routes."""

from flask import current_app, request

from . import (
    _broadcast_blacklist_update,
    _json_response,
    admin_bp,
    require_csrf,
    require_login,
    sanitize_log_string,
)
from ...services.blacklist import add_keyword, list_keywords, remove_keyword
from ...services.security import rate_limit
from ...services.validation import BlacklistKeywordSchema, validate_request


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
    if add_keyword(keyword):
        current_app.logger.info(f"Blacklist keyword added: {sanitize_log_string(keyword)}")
        _broadcast_blacklist_update()
        return _json_response({"message": "Keyword added"})
    current_app.logger.info(f"Blacklist keyword already exists: {sanitize_log_string(keyword)}")
    return _json_response({"message": "Keyword already exists"})


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
    if remove_keyword(keyword):
        current_app.logger.info(f"Blacklist keyword removed: {sanitize_log_string(keyword)}")
        _broadcast_blacklist_update()
        return _json_response({"message": "Keyword removed"})
    current_app.logger.warning(f"Blacklist keyword not found: {sanitize_log_string(keyword)}")
    return _json_response({"error": "Keyword not found"}, 404)


@admin_bp.route("/blacklist/get", methods=["GET"])
@require_login
def get_blacklist():
    return _json_response(list_keywords())
