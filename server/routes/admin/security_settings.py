"""Admin Security settings routes."""

from flask import current_app, request

from ...services import api_tokens as api_token_svc
from ...services import audit_log, security_settings
from ...services.ip import get_client_ip
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/security/settings", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def security_settings_get():
    return _json_response(security_settings.summary(current_app.config, request))


@admin_bp.route("/security/settings", methods=["PATCH"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def security_settings_patch():
    payload = request.get_json(silent=True) or {}
    try:
        state = security_settings.set_state_patch(payload, current_ip=get_client_ip())
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)

    audit_log.append(
        "security",
        "settings_update",
        actor="admin",
        meta={
            "ip_allowlist_enabled": state.get("ip_allowlist", {}).get("enabled"),
            "cors_origins": state.get("cors", {}).get("origins"),
        },
    )
    return _json_response(security_settings.summary(current_app.config, request))


@admin_bp.route("/security/revoke-api-tokens", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def security_revoke_api_tokens():
    revoked = api_token_svc.revoke_all_tokens()
    audit_log.append(
        "security",
        "revoke_api_tokens",
        actor="admin",
        meta={"revoked": revoked},
    )
    return _json_response({"message": "API tokens revoked", "revoked": revoked})
