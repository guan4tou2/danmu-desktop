"""Admin broadcast (LIVE / STANDBY) routes.

Endpoints:
  * ``GET  /admin/broadcast/status`` — return current state (login required)
  * ``POST /admin/broadcast/toggle`` — change mode (CSRF + login + rate-limit)
  * ``POST /admin/broadcast/send``   — admin pushes danmu (Slice 7, Gap 3)

When toggling back to LIVE from STANDBY, the queued messages drain to overlay
over ~2 seconds via a background thread so a flood of stored danmu doesn't
all fire at the same frame. Streamers asked for this — feels natural.
"""

import threading
import time

from flask import current_app, request

from ...services import broadcast as broadcast_svc
from ...services import messaging
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string

# Spread the drain over this window. Picked so 50 stored messages = 40 ms apart.
_DRAIN_WINDOW_SEC = 2.0


def _drain_queue_async(items):
    """Re-emit queued danmu to overlay in a background thread, paced over ~2s."""
    n = len(items)
    if n <= 0:
        return
    interval = _DRAIN_WINDOW_SEC / max(1, n)

    def _worker():
        for d in items:
            try:
                messaging.forward_to_ws_server(d, bypass_broadcast_gate=True)
            except Exception as exc:
                # Best-effort drain; log but keep going so one bad payload
                # doesn't strand the rest of the queue.
                try:
                    current_app.logger.warning(
                        "broadcast drain item failed: %s", sanitize_log_string(str(exc))
                    )
                except Exception:
                    pass
            time.sleep(interval)

    t = threading.Thread(target=_worker, name="broadcast-drain", daemon=True)
    t.start()


@admin_bp.route("/broadcast/status", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def broadcast_status():
    """Return current broadcast state (mode + started_at + counters + queue size + session)."""
    state = broadcast_svc.get_state()
    # Attach session status so the broadcast page can show session-aware UI.
    try:
        from ...services import session_service
        state["session"] = session_service.get_state()
    except Exception:
        state["session"] = None
    # `started_at` is unix seconds (float) or None — frontend expects ms-style
    # comparison, but JSON-serialised seconds is fine for the JS Date wrapper.
    return _json_response(state)


@admin_bp.route("/broadcast/toggle", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def broadcast_toggle():
    """Switch broadcast mode. Body: ``{"mode": "live" | "standby"}``."""
    payload = request.get_json(silent=True)
    if not isinstance(payload, dict):
        return _json_response({"error": "Body must be a JSON object"}, 400)

    mode = payload.get("mode")
    if mode not in broadcast_svc.VALID_MODES:
        return _json_response(
            {"error": f"mode must be one of {list(broadcast_svc.VALID_MODES)}"}, 400
        )

    prev_state = broadcast_svc.get_state()
    new_state = broadcast_svc.set_mode(mode)
    current_app.logger.info(
        "Broadcast mode: %s → %s",
        sanitize_log_string(prev_state.get("mode") or "?"),
        sanitize_log_string(mode),
    )
    try:
        from ...services import audit_log
        audit_log.append(
            "broadcast",
            "mode_changed",
            actor="admin",
            meta={"from": prev_state.get("mode"), "to": mode},
        )
    except Exception:
        pass

    # Transition STANDBY → LIVE: drain queued messages over ~2s.
    if prev_state.get("mode") == "standby" and mode == "live":
        items = broadcast_svc.drain_pending()
        if items:
            _drain_queue_async(items)
            current_app.logger.info(
                "Broadcast drain scheduled: %d queued messages", len(items)
            )

    return _json_response(new_state)


# Slice 7 — Gap 3 from docs/backend-prep-2026-05-04.md.
# Admin-side danmu push. Bypasses rate-limit + filter (admin is trusted)
# AND the broadcast LIVE/STANDBY gate (admin pushes are always live —
# they don't queue during STANDBY because that's the operator speaking).
# Marks payload with `source: "admin"` so overlay can style differently.
@admin_bp.route("/broadcast/send", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def broadcast_send():
    """Admin pushes a danmu directly to overlay.

    Body: ``{"text": str, "color"?: str, "size"?: int, "speed"?: int,
             "opacity"?: int, "layout"?: str}``

    Validation: text 1–500 chars, no control chars. Optional style params
    are passed through; overlay applies its defaults for missing fields.
    """
    payload = request.get_json(silent=True)
    if not isinstance(payload, dict):
        return _json_response({"error": "Body must be a JSON object"}, 400)

    text = payload.get("text")
    if not isinstance(text, str):
        return _json_response({"error": "text is required (string)"}, 400)
    text = text.strip()
    if not text:
        return _json_response({"error": "text must be non-empty"}, 400)
    if len(text) > 500:
        return _json_response({"error": "text must be ≤ 500 characters"}, 400)
    # Reject ASCII control chars (newlines OK — overlay treats them as space).
    if any(ord(c) < 32 and c not in "\n\t" for c in text):
        return _json_response({"error": "text contains invalid control characters"}, 400)

    data = {
        "text": text,
        "source": "admin",
        "nickname": "ADMIN",
    }
    # Optional style passthroughs — overlay validates again client-side.
    for k in ("color", "size", "speed", "opacity", "layout", "fontfamily"):
        if k in payload:
            data[k] = payload[k]

    # bypass_broadcast_gate=True so the message hits overlay even when the
    # broadcast is in STANDBY — admin pushes are operator messages, not
    # audience traffic to be queued.
    ok = messaging.forward_to_ws_server(data, bypass_broadcast_gate=True)
    if not ok:
        return _json_response({"error": "Forward to overlay failed"}, 502)

    current_app.logger.info(
        "Admin broadcast sent: text='%s' (%d chars)",
        sanitize_log_string(text[:80]),
        len(text),
    )
    try:
        from ...services import audit_log
        audit_log.append("broadcast", "admin_sent", actor="admin",
                         meta={"text_preview": text[:120], "len": len(text)})
    except Exception:
        pass

    return _json_response({"sent": True, "text": text, "source": "admin"})
