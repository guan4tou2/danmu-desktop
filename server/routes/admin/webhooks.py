"""Webhook API routes."""

import json
import re as _re

from flask import request

from ...services import audit_log, messaging
from ...services.security import rate_limit
from ...services.validation import WebhookSchema, validate_request
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/webhooks/register", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def register_webhook():
    data = request.get_json(silent=True) or {}
    validated, errors = validate_request(WebhookSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    from ...services.webhook import webhook_service

    try:
        hook_id = webhook_service.register(validated)
        audit_log.append(
            "webhooks",
            "register",
            actor="admin",
            meta={
                "hook_id": hook_id,
                "url": validated.get("url"),
                "events": list(validated.get("events") or []),
            },
        )
        return _json_response({"hook_id": hook_id})
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)


@admin_bp.route("/webhooks/unregister", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def unregister_webhook():
    data = request.get_json(silent=True) or {}
    hook_id = data.get("hook_id", "")
    from ...services.webhook import webhook_service

    if webhook_service.unregister(hook_id):
        audit_log.append(
            "webhooks",
            "unregister",
            actor="admin",
            meta={"hook_id": hook_id},
        )
        return _json_response({"message": "Webhook removed"})
    return _json_response({"error": "Webhook not found"}, 404)


@admin_bp.route("/webhooks/list", methods=["GET"])
@require_login
def list_webhooks():
    from ...services.webhook import webhook_service

    return _json_response({"webhooks": webhook_service.list_hooks()})


@admin_bp.route("/webhooks/deliveries", methods=["GET"])
@require_login
def list_deliveries():
    """Recent webhook delivery log (in-memory ring buffer, last 100).

    Powers the prototype admin-batch6 Delivery log table. Caller can
    pass ?limit=N to cap the response (default 50, max 100).
    """
    from ...services.webhook import webhook_service

    try:
        limit = int(request.args.get("limit", "50") or 50)
    except (TypeError, ValueError):
        limit = 50
    return _json_response(
        {
            "deliveries": webhook_service.list_deliveries(limit=limit),
            "stats": webhook_service.get_delivery_stats(),
        }
    )


@admin_bp.route("/webhooks/test", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def test_webhook():
    """Test webhook (send test payload)."""
    data = request.get_json(silent=True) or {}
    hook_id = data.get("hook_id", "")
    from ...services.webhook import webhook_service

    webhook_service.emit("test", {"text": "Test from danmu admin", "hook_id": hook_id})
    audit_log.append(
        "webhooks",
        "test",
        actor="admin",
        meta={"hook_id": hook_id},
    )
    return _json_response({"message": "Test webhook sent"})


@admin_bp.route("/webhook/incoming/<hook_id>", methods=["POST"])
@rate_limit("fire", "FIRE_RATE_LIMIT", "FIRE_RATE_WINDOW")
def incoming_webhook(hook_id):
    """Receive external webhook and convert to danmu."""
    from ...services.webhook import webhook_service

    payload = request.get_data()
    signature = request.headers.get("X-Webhook-Signature", "")

    hook = webhook_service.get_hook(hook_id)
    if not hook:
        return _json_response({"error": "Unknown webhook"}, 404)

    # Require secret on all webhooks -- reject unsigned requests
    if not hook.get("secret"):
        return _json_response({"error": "Webhook has no secret configured"}, 403)

    if not webhook_service.verify_incoming(payload, signature, hook["secret"]):
        return _json_response({"error": "Invalid signature"}, 403)

    try:
        body = json.loads(payload)
    except Exception:
        return _json_response({"error": "Invalid JSON"}, 400)

    text = body.get("text", "")
    if not text:
        return _json_response({"error": "Missing text"}, 400)

    color = body.get("color", "FFFFFF")
    if not isinstance(color, str) or not _re.match(r"^#?[0-9a-fA-F]{6}$", color):
        color = "FFFFFF"
    size = body.get("size", 50)
    if not isinstance(size, int) or not (1 <= size <= 200):
        size = 50
    speed = body.get("speed", 4)
    if not isinstance(speed, int) or not (1 <= speed <= 10):
        speed = 4
    opacity = body.get("opacity", 100)
    if not isinstance(opacity, int) or not (0 <= opacity <= 100):
        opacity = 100

    text = text[:100]

    # Apply content filtering (blacklist + filter engine)
    from ...services.blacklist import contains_keyword
    from ...services.filter_engine import filter_engine

    if contains_keyword(text):
        return _json_response({"error": "Blocked by blacklist"}, 403)

    result = filter_engine.check(text)
    if result.action == "block":
        return _json_response({"error": "Blocked by filter rule"}, 403)
    if result.action == "replace" and result.replacement is not None:
        text = result.replacement

    msg = {
        "text": text,
        "color": color,
        "size": size,
        "speed": speed,
        "opacity": opacity,
    }
    messaging.forward_to_ws_server(msg)
    return _json_response({"status": "OK"})
