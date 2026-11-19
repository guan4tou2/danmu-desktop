"""Webhook API routes."""

import json
import re as _re

from flask import current_app, request

from ...services import audit_log, messaging
from ...services.security import limit_public_body, rate_limit
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


@admin_bp.route("/webhooks/toggle", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def toggle_webhook():
    """Flip a webhook's `enabled` flag in one call (event vocab v2).

    Body: ``{"hook_id": "<id>", "enabled": true|false}`` — explicit
    boolean preferred. Missing ``enabled`` flips the current value (used
    by the FE's row-level switch when it doesn't track state locally).
    """
    data = request.get_json(silent=True) or {}
    hook_id = (data.get("hook_id") or "").strip()
    if not hook_id:
        return _json_response({"error": "hook_id required"}, 400)

    from ...services.webhook import webhook_service

    existing = webhook_service.get_hook(hook_id)
    if not existing:
        return _json_response({"error": "Webhook not found"}, 404)

    if "enabled" in data:
        next_state = bool(data["enabled"])
    else:
        next_state = not bool(existing.get("enabled"))

    # update_hook returns False if the hook was removed between our
    # get_hook above and this call. Surfacing as 404 (instead of a
    # misleading 200 + audit log) prevents the FE from caching a
    # phantom "enabled=true" state for a hook that no longer exists.
    if not webhook_service.update_hook(hook_id, {"enabled": next_state}):
        return _json_response({"error": "Webhook not found (race)"}, 404)

    audit_log.append(
        "webhooks",
        "toggle",
        actor="admin",
        meta={"hook_id": hook_id, "enabled": next_state},
    )
    return _json_response({"hook_id": hook_id, "enabled": next_state})


@admin_bp.route("/webhooks/events", methods=["GET"])
@require_login
def list_webhook_events():
    """Return the canonical event vocabulary so the FE can render an
    up-to-date subscription checklist without hard-coding the list.

    Each entry carries ``slug`` (the constant used in /register `events`
    arrays) and short bilingual labels for the admin UI. The catalog lives
    in services.webhook so this route, the runtime filter and
    WebhookSchema's whitelist can never drift apart again."""
    from ...services.webhook import EVENT_CATALOG

    return _json_response({"events": [dict(e) for e in EVENT_CATALOG]})


@admin_bp.route("/webhooks/test", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def test_webhook():
    """Test webhook (send test payload to one hook)."""
    data = request.get_json(silent=True) or {}
    hook_id = (data.get("hook_id") or "").strip()
    from ...services.webhook import webhook_service

    # send_test targets the hook directly instead of emit()-ing a "test"
    # event: "test" is not subscribable, so the old fan-out always matched
    # zero hooks and nothing reached the endpoint or the delivery log.
    if not webhook_service.send_test(hook_id):
        return _json_response({"error": "Webhook not found"}, 404)
    audit_log.append(
        "webhooks",
        "test",
        actor="admin",
        meta={"hook_id": hook_id},
    )
    return _json_response({"message": "Test webhook sent"})


@admin_bp.route("/webhook/incoming/<hook_id>", methods=["POST"])
@rate_limit("fire", "FIRE_RATE_LIMIT", "FIRE_RATE_WINDOW")
@limit_public_body
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

    color = body.get("color")
    if not isinstance(color, str) or not _re.match(r"^#?[0-9a-fA-F]{6}$", color):
        color = None  # 下面補：使用中主題的覆寫顏色，沒有就照舊 FFFFFF
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
    if result.action == "replace":
        # FilterResult 帶的是改寫後的全文（.text）。這裡原本讀 .replacement——
        # 沒有這個欄位，命中替換規則的訊息一律 500。
        text = result.text
    if result.action == "review":
        # 與觀眾送出的訊息一致：命中送審規則就進審核佇列，不直接上畫面。
        # 原本這條路徑完全沒看 review，等於外部系統可以繞過人工審核。
        # 佇列出問題時也與 /fire 一致——放行，而不是回 500 把訊息丟掉。
        from ...services.mod_queue import mod_queue

        queue_id = None
        try:
            rule_name = (result.reason or "review")[:60]
            queue_id = mod_queue.enqueue(text, rule_name=rule_name, pattern=rule_name)
        except Exception as exc:
            current_app.logger.warning("webhook incoming: review queue failed (%s)", exc)
        if queue_id is not None:
            # 訊息已經在佇列裡了：之後不管發生什麼都不能再放行，否則同一則
            # 訊息會既在畫面上、又在待審清單裡。清理執行緒起不來只影響過期
            # 項目的回收，不影響這則訊息。
            try:
                mod_queue.start_reaper()
            except Exception as exc:
                current_app.logger.warning("webhook incoming: review reaper failed (%s)", exc)
            return _json_response({"status": "queued_for_review", "queue_id": queue_id}, 202)

    msg = {
        "text": text,
        "color": color,
        "size": size,
        "speed": speed,
        "opacity": opacity,
    }
    # 外部系統轉進來的文字套用與觀眾相同的外部圖片政策（不合格的中和成文字）。
    from ...services import viewer_images

    viewer_images.apply_to_resend(msg, request.host_url)
    from ...services import danmu_style

    # 沒帶（或不合法的）顏色與字型用使用中主題的覆寫；沒有覆寫時與以前相同。
    danmu_style.apply_theme_defaults(msg)
    if not msg["color"]:
        msg["color"] = "FFFFFF"
    forwarded = messaging.forward_to_ws_server(msg) or {}
    if forwarded.get("status") in ("sent", "queued"):
        # 控制台的「訊息」數是這一場收下了幾則，外部系統送進來的也算——
        # 與 /fire 相同，畫面滿了被丟掉、佇列滿了被拒絕的不算。
        from ...services import session_service

        session_service.note_message()
    return _json_response({"status": "OK"})
