"""Konami easter egg trigger.

Admin (operator) presses ↑↑↓↓←→←→ B A on the admin console; the admin JS
detects the sequence and POSTs here. The endpoint broadcasts a single
``{"type": "konami"}`` notification to all overlay clients via the WS
queue. Overlays freeze every visible danmu, scale-up, explode outward as
particles, then clear.

Pure side-effect endpoint — no persistence, no rate limit beyond the
admin scope. The animation runs server-side only as a broadcast trigger;
all visual work lives in overlay.js.
"""

from flask import current_app

from ...services import messaging
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string


@admin_bp.route("/konami/trigger", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def trigger_konami():
    notification = {"type": "konami"}
    try:
        messaging.forward_to_ws_server(notification)
        current_app.logger.info("[konami] easter egg triggered")
    except Exception as exc:  # pragma: no cover — logging defence
        current_app.logger.error("[konami] broadcast failed: %s", sanitize_log_string(str(exc)))
        return _json_response({"error": "broadcast_failed"}, 500)
    return _json_response({"status": "ok"})
