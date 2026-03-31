"""Admin metrics endpoint for performance monitoring."""

import time

from ...services import ws_queue, ws_state
from ...services.poll import poll_service
from ...services.widgets import list_widgets
from . import _json_response, admin_bp, rate_limit, require_login


@admin_bp.route("/metrics", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def get_metrics():
    state = ws_state.read_state()
    queue_len = len(ws_queue._queue)

    return _json_response(
        {
            "ws_clients": state.get("ws_clients", 0),
            "ws_updated_at": state.get("updated_at", 0),
            "queue_size": queue_len,
            "queue_capacity": ws_queue._MAX_QUEUE_SIZE,
            "active_widgets": len(list_widgets()),
            "poll_state": poll_service.state,
            "server_time": time.time(),
        }
    )
