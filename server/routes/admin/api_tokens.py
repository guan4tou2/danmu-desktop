"""Admin API Token routes."""

from flask import request

from ...services import api_tokens as svc
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/api-tokens", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def list_api_tokens():
    return _json_response({"tokens": svc.list_tokens()})


@admin_bp.route("/api-tokens", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def create_api_token():
    data = request.get_json(silent=True) or {}
    label = (data.get("label") or "").strip()
    scopes = data.get("scopes") or []
    expiry_days = data.get("expiry_days", 90)

    if not label:
        return _json_response({"error": "label required"}, 400)
    if not isinstance(scopes, list) or not scopes:
        return _json_response({"error": "scopes required"}, 400)

    try:
        token = svc.create_token(label, scopes, expiry_days)
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)

    return _json_response(token)


@admin_bp.route("/api-tokens/<token_id>", methods=["DELETE"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def revoke_api_token(token_id):
    ok = svc.revoke_token(token_id)
    if not ok:
        return _json_response({"error": "Token not found"}, 404)
    return _json_response({"message": "Token revoked"})


@admin_bp.route("/api-tokens/<token_id>", methods=["PATCH"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def update_api_token(token_id):
    data = request.get_json(silent=True) or {}
    updated = svc.update_token(token_id, data)
    if not updated:
        return _json_response({"error": "Token not found"}, 404)
    return _json_response(updated)
