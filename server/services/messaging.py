import json

from flask import current_app

from ..managers import connection_manager
from ..utils import sanitize_log_string
from . import ws_queue


def forward_to_ws_server(data):
    try:
        ws_queue.enqueue_message(data)

        # Broadcast live feed to admin WS connections (fire-and-forget)
        if isinstance(data, dict) and data.get("text"):
            try:
                live_msg = json.dumps({
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
                })
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
