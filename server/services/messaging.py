import json

from flask import current_app

from ..managers import connection_manager
from ..utils import sanitize_log_string
from . import broadcast, live_feed_buffer, onscreen_limiter, telemetry, ws_queue


def _broadcast_live_feed(data):
    if not (isinstance(data, dict) and data.get("text")):
        return
    snapshot = {
        "text": data.get("text", ""),
        "color": data.get("color", ""),
        "size": data.get("size", ""),
        "speed": data.get("speed", ""),
        "opacity": data.get("opacity", ""),
        "nickname": data.get("nickname", ""),
        "layout": data.get("layout", "scroll"),
        "isImage": data.get("isImage", False),
        "fingerprint": data.get("fingerprint", ""),
    }
    # Phase 1 of admin-WS removal: append to the polling-backed ring
    # buffer first so admin's polling primitive doesn't lag behind. The
    # send_message() call below is still the legacy push for any client
    # holding the flask-sock /ws connection (viewer settings_changed
    # path) — admin no longer connects since admin.js dropped
    # initAdminWebSocket().
    try:
        live_feed_buffer.append(snapshot)
    except Exception:
        pass  # buffer failure shouldn't block forwarding
    try:
        live_msg = json.dumps({"type": "danmu_live", "data": snapshot})
        send_message(live_msg)
    except Exception:
        pass  # live feed broadcast failure should never block main flow


def _raw_forward(data) -> bool:
    """Actual WS enqueue + telemetry + live-feed broadcast. Returns True on success.

    The onscreen_limiter callback. Standby gating happens BEFORE this so a parked
    danmu does not consume an in-flight slot.
    """
    try:
        ws_queue.enqueue_message(data)
        telemetry.record_message()
        if isinstance(data, dict) and data.get("text") is not None:
            try:
                broadcast.increment_messages(1)
            except Exception:
                pass  # Counter is best-effort.
        _broadcast_live_feed(data)
        return True
    except Exception as exc:
        current_app.logger.error(
            "Error forwarding message to WS server: %s",
            sanitize_log_string(str(exc)),
        )
        return False


def forward_to_ws_server(data, bypass_broadcast_gate=False):
    """Forward `data` to the overlay WS subject to broadcast gate + onscreen limiter.

    Returns a status dict:
      {"status": "sent"}                                 forwarded immediately
      {"status": "queued"}                               queued for later release
      {"status": "dropped", "reason": <str>}             cap hit in drop mode,
                                                         or forward_failed
      {"status": "rejected", "reason": "queue_full"}     queue at cap

    v5.0.0: when ``broadcast.is_live()`` is False (admin in STANDBY mode), the
    payload is parked in broadcast's pending queue instead of pushed to overlay.
    The drain worker calls back here with ``bypass_broadcast_gate=True`` so
    re-emitting drained items doesn't re-park them.

    Non-danmu meta payloads (settings_changed) bypass BOTH gates so admin
    actions still propagate during standby and at limiter saturation.
    """
    # Meta messages bypass everything — admin toggles must reach overlay.
    if isinstance(data, dict) and data.get("type") == "settings_changed":
        ok = _raw_forward(data)
        return {"status": "sent"} if ok else {"status": "dropped", "reason": "forward_failed"}

    # Broadcast standby gate runs BEFORE the limiter so parked danmu don't
    # consume in-flight slots.
    is_danmu = isinstance(data, dict) and data.get("text") is not None
    if is_danmu and not bypass_broadcast_gate and not broadcast.is_live():
        queue_size = None
        try:
            queue_size = broadcast.enqueue_pending(data)
        except Exception as exc:
            current_app.logger.warning(
                "broadcast standby enqueue failed: %s",
                sanitize_log_string(str(exc)),
            )
        result = {"status": "queued", "reason": "broadcast_standby"}
        if queue_size is not None:
            result["queue_size"] = queue_size
        return result

    return onscreen_limiter.try_send(data, _raw_forward)


def send_message(message):
    for client in connection_manager.get_web_connections():
        try:
            client.send(message)
        except Exception as exc:
            current_app.logger.warning(
                "Error sending message to client: %s",
                sanitize_log_string(str(exc)),
            )
            connection_manager.unregister_web_connection(client)
