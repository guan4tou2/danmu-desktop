from flask import current_app

from ..managers import connection_manager
from ..state import message_queue
from ..utils import sanitize_log_string


def forward_to_ws_server(data):
    try:
        message_queue.put(data)
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

