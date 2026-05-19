"""Flask-integrated WebSocket handler via flask-sock.

v5.3.0: merged WS onto Flask's port via flask-sock. The /ws route handles
the same Electron overlay protocol (auth, heartbeat, ping/pong, message
forwarding) that previously ran on a dedicated asyncio server on port 4001.

Architecture:
  - Each WS connection spawns two gevent greenlets:
    1. Handler (the @sock.route function) — receives client messages
    2. Sender (_sender_loop) — serializes all outbound sends per connection
  - A single broadcast greenlet (_forward_messages) dequeues from ws_queue
    and pushes to every connection's outbox.
  - Separating receive and send into distinct greenlets avoids concurrent
    access to the underlying wsproto Connection object.
"""

import json
import logging
import secrets
import threading
import time

import gevent
from gevent.queue import Queue
from simple_websocket import ConnectionClosed

from ..config import Config
from ..managers import connection_manager
from ..services import ws_auth, ws_queue
from ..services.ws_state import update_ws_client_count
from ..utils import sanitize_log_string

logger = logging.getLogger(__name__)

_PING_INTERVAL = 5
_WS_MSG_RATE = 30
_WS_MSG_WINDOW = 10.0
_STOP = object()

_connections_by_ip: dict = {}
_msg_counts: dict = {}
_outboxes: dict = {}
_outboxes_lock = threading.Lock()


def _register_outbox(ws):
    q = Queue()
    with _outboxes_lock:
        _outboxes[ws] = q
    return q


def _unregister_outbox(ws):
    with _outboxes_lock:
        _outboxes.pop(ws, None)


def _broadcast_to_outboxes(payload):
    with _outboxes_lock:
        boxes = list(_outboxes.values())
    for q in boxes:
        try:
            q.put_nowait(payload)
        except Exception:
            pass


def _check_msg_rate(ws) -> bool:
    now = time.monotonic()
    entry = _msg_counts.get(ws)
    if entry is None or now - entry[1] >= _WS_MSG_WINDOW:
        _msg_counts[ws] = [1, now]
        return True
    if entry[0] >= _WS_MSG_RATE:
        return False
    entry[0] += 1
    return True


def _sender_loop(ws, outbox):
    try:
        while True:
            msg = outbox.get()
            if msg is _STOP:
                break
            ws.send(msg)
    except Exception:
        pass
    try:
        ws.close()
    except Exception:
        pass


def _forward_messages():
    last_ping_time = 0.0
    while True:
        try:
            messages = ws_queue.dequeue_all()
            if messages:
                for data in messages:
                    _broadcast_to_outboxes(json.dumps(data))

            now = time.monotonic()
            with _outboxes_lock:
                has_clients = bool(_outboxes)
            if has_clients and now - last_ping_time >= _PING_INTERVAL:
                last_ping_time = now
                _broadcast_to_outboxes(json.dumps({"type": "ping"}))

            gevent.sleep(0.5)
        except Exception as exc:
            logger.error(
                "Error in message forwarding: %s",
                sanitize_log_string(str(exc)),
            )
            gevent.sleep(5)


def init_ws(app):
    """Register the /ws flask-sock route (no greenlets — safe for tests)."""
    from flask_sock import Sock

    sock = Sock(app)

    ws_max_connections = int(Config.WS_MAX_CONNECTIONS)
    ws_max_connections_per_ip = int(Config.WS_MAX_CONNECTIONS_PER_IP)
    allowed_origins = set(Config.WS_ALLOWED_ORIGINS or [])

    @sock.route("/ws")
    def ws_handler(ws):
        from flask import request

        if allowed_origins:
            origin = request.headers.get("Origin")
            if origin not in allowed_origins:
                logger.warning(
                    "Rejecting WS client with disallowed Origin: %s",
                    sanitize_log_string(origin),
                )
                ws.close()
                return

        auth = ws_auth.get_state()
        if auth["require_token"]:
            configured_token = auth["token"]
            token = request.args.get("token", "")
            if not token or not configured_token:
                ws.close()
                return
            if not secrets.compare_digest(token, configured_token):
                ws.close()
                return

        client_ip = request.remote_addr or "unknown"
        total_clients = len(connection_manager.get_ws_clients())

        if total_clients >= ws_max_connections:
            logger.warning("WS global connection limit reached (%s)", ws_max_connections)
            ws.close()
            return

        ip_conns = _connections_by_ip.get(client_ip, set())
        if len(ip_conns) >= ws_max_connections_per_ip:
            logger.warning(
                "WS per-IP connection limit reached for %s (%s)",
                client_ip,
                ws_max_connections_per_ip,
            )
            ws.close()
            return

        _connections_by_ip.setdefault(client_ip, set()).add(ws)
        connection_manager.register_ws_client(ws)
        outbox = _register_outbox(ws)
        total_clients = len(connection_manager.get_ws_clients())
        logger.info("New client connected from %s. Total: %s", client_ip, total_clients)
        update_ws_client_count(total_clients)
        sender_gl = gevent.spawn(_sender_loop, ws, outbox)

        try:
            while True:
                try:
                    data = ws.receive(timeout=5)
                except ConnectionClosed:
                    break
                if data is None:
                    continue
                if not _check_msg_rate(ws):
                    logger.warning(
                        "WS per-connection message rate limit exceeded for %s",
                        client_ip,
                    )
                    continue
                try:
                    msg = json.loads(data)
                    if msg.get("type") == "heartbeat":
                        outbox.put_nowait(
                            json.dumps(
                                {
                                    "type": "heartbeat_ack",
                                    "timestamp": msg.get("timestamp"),
                                }
                            )
                        )
                    elif msg.get("type") == "pong":
                        continue
                except (json.JSONDecodeError, ValueError):
                    pass
        except Exception as exc:
            logger.error("WebSocket error: %s", sanitize_log_string(str(exc)))
        finally:
            outbox.put(_STOP)
            sender_gl.join(timeout=2)
            _unregister_outbox(ws)
            _msg_counts.pop(ws, None)
            if client_ip in _connections_by_ip:
                _connections_by_ip[client_ip].discard(ws)
                if not _connections_by_ip[client_ip]:
                    del _connections_by_ip[client_ip]
            connection_manager.unregister_ws_client(ws)
            total_clients = len(connection_manager.get_ws_clients())
            logger.info("Client disconnected. Remaining: %s", total_clients)
            update_ws_client_count(total_clients)

    logger.info("WebSocket /ws route registered")


def start_ws_broadcast():
    """Start the broadcast greenlet. Call from main() only, not create_app()."""
    initial_auth = ws_auth.get_state()
    if initial_auth["require_token"] and not initial_auth["token"]:
        logger.warning(
            "WS auth enabled but token is empty; all WS clients will be "
            "rejected. Flip the admin UI toggle or set WS_AUTH_TOKEN."
        )
    update_ws_client_count(0)
    gevent.spawn(_forward_messages)
    logger.info("WebSocket broadcast greenlet started")
