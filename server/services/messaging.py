import json

from flask import current_app

from ..managers import connection_manager
from ..utils import sanitize_log_string
from . import broadcast, telemetry, ws_queue


def forward_to_ws_server(data, bypass_broadcast_gate=False):
    """Forward danmu payload to WS overlay queue.

    v5.0.0+: when broadcast.is_live() is False (admin in STANDBY mode), the
    payload is parked in broadcast's pending queue instead of being pushed
    to overlay. The drain worker calls back here with
    ``bypass_broadcast_gate=True`` so re-emitting drained items doesn't
    re-park them.

    Non-danmu payloads (e.g. settings_changed dicts) are NOT gated — admin
    actions must still propagate during standby. We detect "danmu" by
    presence of a ``"text"`` key, matching what the frontend renders.
    """
    try:
        is_danmu = isinstance(data, dict) and data.get("text") is not None
        if is_danmu and not bypass_broadcast_gate and not broadcast.is_live():
            # Standby mode — park in broadcast queue, do NOT push to overlay.
            try:
                broadcast.enqueue_pending(data)
            except Exception as exc:
                current_app.logger.warning(
                    "broadcast standby enqueue failed: %s",
                    sanitize_log_string(str(exc)),
                )
            return True

        ws_queue.enqueue_message(data)
        telemetry.record_message()
        if is_danmu:
            try:
                broadcast.increment_messages(1)
            except Exception:
                pass  # Counter is best-effort.

        # Broadcast live feed to admin WS connections (fire-and-forget)
        if isinstance(data, dict) and data.get("text"):
            try:
                live_msg = json.dumps(
                    {
                        "type": "danmu_live",
                        "data": {
                            "text": data.get("text", ""),
                            "color": data.get("color", ""),
                            "size": data.get("size", ""),
                            "speed": data.get("speed", ""),
                            "opacity": data.get("opacity", ""),
                            "nickname": data.get("nickname", ""),
                            "layout": data.get("layout", "scroll"),
                            "isImage": data.get("isImage", False),
                            "fingerprint": data.get("fingerprint", ""),
                        },
                    }
                )
                send_message(live_msg)
            except Exception:
                pass  # live feed broadcast failure should never block main flow

        return True
    except Exception as exc:
        current_app.logger.error(
            "Error forwarding message to WS server: %s",
            sanitize_log_string(str(exc)),
        )
        return False


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
