"""Overlay control endpoints.

Admin actions that affect the live overlay surface but don't otherwise
fit a domain-specific module. Currently:

* ``POST /admin/overlay/clear`` — broadcast a ``{"type": "clear"}`` WS
  notification that overlay.js handles by removing every visible danmu
  (mirrors konami's animation flow, just without the particle effect).

Sister of ``/admin/konami/trigger`` — same broadcast plumbing.
"""

from flask import current_app

from ...services import audit_log, messaging
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string


@admin_bp.route("/overlay/clear", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def overlay_clear():
    """Wipe every danmu currently visible on overlay clients.

    Idempotent: re-issuing while overlay is already empty is a no-op for
    the client.
    """
    notification = {"type": "clear"}
    try:
        messaging.forward_to_ws_server(notification, bypass_broadcast_gate=True)
        current_app.logger.info("[overlay] clear broadcast")
        try:
            audit_log.append("broadcast", "overlay_cleared", actor="admin")
        except Exception:
            pass
    except Exception as exc:  # pragma: no cover — best-effort logging
        current_app.logger.error(
            "[overlay] clear broadcast failed: %s", sanitize_log_string(str(exc))
        )
        return _json_response({"error": "broadcast_failed"}, 500)
    return _json_response({"status": "ok"})
