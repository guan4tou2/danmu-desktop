import logging
import threading
import time
from contextlib import nullcontext

from flask import current_app, has_app_context

from ..utils import sanitize_log_string
from . import broadcast, delivery_tracking, live_feed_buffer, onscreen_limiter, telemetry, ws_queue

logger = logging.getLogger(__name__)


def set_broadcast_mode(mode):
    """Use the same paced queue release for starting a session and resuming display."""
    state, items = broadcast.transition_and_drain(mode)
    if items:
        app = current_app._get_current_object() if has_app_context() else None

        def drain():
            with app.app_context() if app else nullcontext():
                for index, data in enumerate(items):
                    try:
                        # A pause during release must park the remaining messages again.
                        forward_to_ws_server(data)
                    except Exception:
                        logger.exception("broadcast drain item failed")
                    if index < len(items) - 1:
                        time.sleep(2.0 / len(items))

        threading.Thread(target=drain, name="broadcast-drain", daemon=True).start()
    return state


def _broadcast_live_feed(data):
    """Append a danmu snapshot to the admin polling buffer.

    Used to also push to flask-sock browser clients via send_message();
    that path was removed in v5.0.0 Phase 2 (admin polls
    /admin/live-feed/recent).
    """
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
        # 2026-10-29：帶上 message_id，admin 才能對「這一則」下撤回指令。
        # 沒有它，主持人唯一的手段是把整屏清空或永久封鎖——
        # 用過度手段解暫時需求（見 docs/audits/admin-ux-friction-2026-10-29.md F2）。
        "message_id": data.get("message_id", ""),
    }
    try:
        live_feed_buffer.append(snapshot)
    except Exception:
        pass  # buffer failure shouldn't block forwarding


def _raw_forward(data) -> bool:
    """Actual WS enqueue + telemetry + live-feed broadcast. Returns True on success.

    The onscreen_limiter callback. Standby gating happens BEFORE this so a parked
    danmu does not consume an in-flight slot.
    """
    if isinstance(data, dict) and broadcast.is_pending_expired(data):
        broadcast.mark_pending_expired(data)
        return False
    try:
        delivery_tracking.begin(data)
        ws_queue.enqueue_message(data)
        telemetry.record_message()
        if isinstance(data, dict) and data.get("text") is not None:
            from .history import danmu_history

            if danmu_history and data.get("message_id"):
                try:
                    state = delivery_tracking.snapshot(data["message_id"])
                    danmu_history.update_status(
                        data["message_id"],
                        state["status"] if state else "forwarded",
                        reason=state["reason"] if state else "",
                    )
                except Exception:
                    logger.exception("Could not update danmu delivery history")
            try:
                broadcast.increment_messages(1)
            except Exception:
                pass  # Counter is best-effort.
        _broadcast_live_feed(data)
        return True
    except Exception as exc:
        if isinstance(data, dict):
            delivery_tracking.cancel(data.get("message_id"))
        logger.error(
            "Error forwarding message to WS server: %s",
            sanitize_log_string(str(exc)),
        )
        return False


# 控制訊息：不是彈幕，不該和彈幕搶 onscreen limiter 的名額。
# 畫面滿載時主持人最需要的就是 recall / clear，不能被排隊或丟棄。
_CONTROL_TYPES = frozenset({"settings_changed", "recall", "clear"})


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
    The drain worker respects this gate so a pause during release parks
    the remaining messages again.

    Non-danmu control payloads (settings_changed / recall / clear) bypass BOTH
    gates so admin actions still propagate during standby and at limiter
    saturation.
    """
    # Control messages bypass everything — admin actions must reach overlay.
    if isinstance(data, dict) and data.get("type") in _CONTROL_TYPES:
        ok = _raw_forward(data)
        return {"status": "sent"} if ok else {"status": "dropped", "reason": "forward_failed"}

    # Broadcast standby gate runs BEFORE the limiter so parked danmu don't
    # consume in-flight slots.
    is_danmu = isinstance(data, dict) and data.get("text") is not None
    if is_danmu and broadcast.is_pending_expired(data):
        broadcast.mark_pending_expired(data)
        return {"status": "dropped", "reason": "expired"}
    if is_danmu and not bypass_broadcast_gate:
        queue_size = None
        try:
            queue_size = broadcast.enqueue_if_standby(data)
        except Exception as exc:
            logger.warning(
                "broadcast standby enqueue failed: %s",
                sanitize_log_string(str(exc)),
            )
            return {"status": "dropped", "reason": "queue_failed"}
        if queue_size is not None:
            return {"status": "queued", "reason": "broadcast_standby", "queue_size": queue_size}

    return onscreen_limiter.try_send(data, _raw_forward)
