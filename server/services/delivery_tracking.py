"""Bounded, socket-scoped render receipts. A receipt is a client report, not proof of sight.

One existing WS broadcast loop sweeps deadlines. No per-message worker/timer is
created. Socket identity is deliberately ephemeral: reconnecting cannot confirm
messages sent to the previous connection. Unknown is terminal after 30 seconds.
"""

import logging
import threading
import time
from collections import OrderedDict

logger = logging.getLogger(__name__)
ACK_TIMEOUT_SECONDS = 30.0
RESULT_TTL_SECONDS = 60.0
MAX_TRACKED = 2000
_lock = threading.RLock()
_entries = OrderedDict()


def _update_history(message_id, status, reason):
    from . import history

    if history.danmu_history:
        try:
            history.danmu_history.update_status(message_id, status, reason=reason)
        except Exception:
            logger.exception("Could not update render receipt history")


def _finish(message_id, entry, status, reason, now):
    entry.update(status=status, reason=reason, expires=now + RESULT_TTL_SECONDS)
    # Retain bounded socket provenance until the result TTL: another display's
    # legitimate, slower ACK must not be treated as a forged control message.
    # /fire may still be constructing its initial history record.
    if entry["payload"] is not None:
        entry["payload"]["_delivery_status"] = status
    _update_history(message_id, status, reason)


def begin(data):
    """Start tracking before enqueue can yield to the WS sender."""
    message_id = data.get("message_id") if isinstance(data, dict) else None
    if not isinstance(message_id, str) or not message_id or data.get("text") is None:
        return
    now = time.monotonic()
    with _lock:
        if message_id in _entries:
            return
        while len(_entries) >= MAX_TRACKED:
            old_id, old = next(iter(_entries.items()))
            if old["status"] == "forwarded":
                _finish(old_id, old, "unconfirmed", "capacity", now)
            _entries.pop(old_id)
        data["_delivery_status"] = "forwarded"
        _entries[message_id] = {
            "status": "forwarded",
            "reason": "",
            "expires": now + ACK_TIMEOUT_SECONDS,
            "sockets": set(),
            "ever_sent": False,
            "payload": data,
        }


def cancel(message_id):
    """An enqueue failure must not leave a successful-looking record."""
    if not isinstance(message_id, str):
        return
    with _lock:
        entry = _entries.pop(message_id, None)
        if entry and entry["payload"] is not None:
            entry["payload"].pop("_delivery_status", None)


def detach_payload(message_id):
    """History now exists; keeping font/image payloads is no longer needed."""
    if not isinstance(message_id, str):
        return
    with _lock:
        entry = _entries.get(message_id)
        if entry:
            entry["payload"] = None


def is_eligible(message_id, ws):
    """Whether this socket's receipt qualifies for the separate burst budget.

    This is provenance only. acknowledge() separately enforces terminal state
    and the original render deadline.
    """
    if not isinstance(message_id, str) or not 1 <= len(message_id) <= 128:
        return False
    with _lock:
        entry = _entries.get(message_id)
        return bool(entry and ws in entry["sockets"] and time.monotonic() < entry["expires"])


def sent_to(message_id, ws):
    """Grant just before ws.send(), since send itself can yield to an ACK."""
    if not isinstance(message_id, str):
        return
    with _lock:
        entry = _entries.get(message_id)
        if entry and entry["status"] == "forwarded" and time.monotonic() < entry["expires"]:
            entry["sockets"].add(ws)
            entry["ever_sent"] = True


def revoke(message_id, ws):
    if not isinstance(message_id, str):
        return
    with _lock:
        entry = _entries.get(message_id)
        if entry:
            entry["sockets"].discard(ws)


def disconnected(ws):
    with _lock:
        for entry in _entries.values():
            entry["sockets"].discard(ws)


def acknowledge(message_id, ws):
    if not isinstance(message_id, str) or not 1 <= len(message_id) <= 128:
        return False
    now = time.monotonic()
    with _lock:
        entry = _entries.get(message_id)
        if not entry or entry["status"] != "forwarded" or ws not in entry["sockets"]:
            return False
        if now >= entry["expires"]:
            _finish(message_id, entry, "unconfirmed", "timeout", now)
            return False
        _finish(message_id, entry, "rendered", "", now)
        return True


def snapshot(message_id):
    if not isinstance(message_id, str):
        return None
    with _lock:
        entry = _entries.get(message_id)
        return {"status": entry["status"], "reason": entry["reason"]} if entry else None


def sweep():
    now = time.monotonic()
    with _lock:
        for message_id, entry in list(_entries.items()):
            if now < entry["expires"]:
                continue
            if entry["status"] == "forwarded":
                reason = "timeout" if entry["ever_sent"] else "no_display"
                _finish(message_id, entry, "unconfirmed", reason, now)
            else:
                del _entries[message_id]


def reset():
    """New app lifecycle: in-flight receipts cannot survive server restart."""
    with _lock:
        _entries.clear()
