import json

from flask import current_app

from ..managers import connection_manager
from ..utils import sanitize_log_string
from . import onscreen_limiter, telemetry, ws_queue


def _broadcast_live_feed(data):
    if not (isinstance(data, dict) and data.get("text")):
        return
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


def _raw_forward(data) -> bool:
    """The actual WS enqueue + live-feed broadcast. Returns True on success."""
    try:
        ws_queue.enqueue_message(data)
        telemetry.record_message()
        _broadcast_live_feed(data)
        return True
    except Exception as exc:
        current_app.logger.error(
            "Error forwarding message to WS server: %s",
            sanitize_log_string(str(exc)),
        )
        return False


def forward_to_ws_server(data):
    """Forward `data` to the overlay WS subject to the onscreen limiter.

    Returns a status dict:
      {"status": "sent"}                             forwarded
      {"status": "queued"}                           queued for later release
      {"status": "dropped", "reason": <str>}         cap hit in drop mode,
                                                     or forward_failed
      {"status": "rejected", "reason": "queue_full"} queue at cap
    """
    # settings_changed and other non-danmu meta messages bypass the limiter —
    # they must reach the overlay regardless of load.
    if isinstance(data, dict) and data.get("type") == "settings_changed":
        ok = _raw_forward(data)
        return {"status": "sent"} if ok else {"status": "dropped", "reason": "forward_failed"}
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
