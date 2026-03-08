import asyncio
import json
import secrets
import threading
from urllib.parse import parse_qs, urlparse

import websockets

from ..config import Config
from ..managers import connection_manager
from ..services import ws_queue
from ..services.ws_state import update_ws_client_count
from ..utils import sanitize_log_string

# Signals check_connections() to stop gracefully
_stop_event = threading.Event()


def stop_connection_checker():
    """Call this during application shutdown to interrupt the checker immediately."""
    _stop_event.set()


def check_connections(logger):
    """Periodically ping web clients to detect dead connections.

    Uses Event.wait() instead of time.sleep() so the thread can be interrupted
    immediately on shutdown rather than waiting up to 30 seconds.
    """
    while not _stop_event.is_set():
        try:
            connections_copy = connection_manager.get_web_connections()
            if connections_copy:
                for ws in connections_copy:
                    try:
                        ws.send(json.dumps({"type": "ping"}))
                    except Exception as exc:
                        logger.warning(
                            "Connection dead, removing: %s",
                            sanitize_log_string(str(exc)),
                        )
                        connection_manager.unregister_web_connection(ws)
        except Exception as exc:
            logger.warning("Error in connection checker: %s", sanitize_log_string(str(exc)))
        # Wait up to 30 s, but wake immediately if stop is requested
        _stop_event.wait(timeout=30)


async def _forward_messages(logger):
    while True:
        try:
            messages = ws_queue.dequeue_all()
            clients = connection_manager.get_ws_clients()
            if messages and clients:
                message_tasks = []
                for data in messages:
                    message_tasks.extend(
                        [client.send(json.dumps(data)) for client in clients]
                    )
                if message_tasks:
                    await asyncio.gather(*message_tasks, return_exceptions=True)

            if clients:
                ping_message = json.dumps({"type": "ping"})
                dead_clients = []
                for client in clients:
                    try:
                        await client.send(ping_message)
                    except Exception as exc:
                        logger.warning("Client connection lost: %s", sanitize_log_string(str(exc)))
                        dead_clients.append(client)

                for client in dead_clients:
                    connection_manager.unregister_ws_client(client)
                update_ws_client_count(len(connection_manager.get_ws_clients()))

            await asyncio.sleep(0.5)
        except Exception as exc:
            logger.error("Error in message forwarding: %s", sanitize_log_string(str(exc)))
            await asyncio.sleep(5)


def run_ws_server(ws_port, logger):
    update_ws_client_count(0)
    require_token = bool(Config.WS_REQUIRE_TOKEN)
    configured_token = str(Config.WS_AUTH_TOKEN or "")
    allowed_origins = set(Config.WS_ALLOWED_ORIGINS or [])
    ws_max_size = int(Config.WS_MAX_SIZE)
    ws_max_queue = int(Config.WS_MAX_QUEUE)
    ws_write_limit = int(Config.WS_WRITE_LIMIT)

    if require_token and not configured_token:
        logger.warning("WS_REQUIRE_TOKEN is enabled but WS_AUTH_TOKEN is empty; all WS clients will be rejected.")

    def _request_path(websocket):
        path = getattr(websocket, "path", None)
        if path:
            return path
        request_obj = getattr(websocket, "request", None)
        request_path = getattr(request_obj, "path", None)
        return request_path or ""

    def _request_header(websocket, name: str):
        # websockets<16
        headers = getattr(websocket, "request_headers", None)
        if headers is not None:
            try:
                value = headers.get(name)
                if value is not None:
                    return value
            except Exception:
                pass
        # websockets>=16
        request_obj = getattr(websocket, "request", None)
        headers = getattr(request_obj, "headers", None)
        if headers is not None:
            try:
                return headers.get(name)
            except Exception:
                return None
        return None

    def _extract_token(websocket):
        path = _request_path(websocket)
        query = parse_qs(urlparse(path).query)
        vals = query.get("token", [])
        return vals[0] if vals else ""

    def _is_authorized(websocket):
        if allowed_origins:
            origin = _request_header(websocket, "Origin")
            if origin not in allowed_origins:
                logger.warning("Rejecting WS client with disallowed Origin: %s", sanitize_log_string(origin))
                return False
        if require_token:
            token = _extract_token(websocket)
            if not token or not secrets.compare_digest(token, configured_token):
                return False
        return True

    async def register(websocket):
        connection_manager.register_ws_client(websocket)
        total_clients = len(connection_manager.get_ws_clients())
        logger.info("New client connected. Total clients: %s", total_clients)
        update_ws_client_count(total_clients)

    async def unregister(websocket):
        connection_manager.unregister_ws_client(websocket)
        total_clients = len(connection_manager.get_ws_clients())
        logger.info("Client disconnected. Remaining clients: %s", total_clients)
        update_ws_client_count(total_clients)

    async def ws_handler(websocket):
        if not _is_authorized(websocket):
            await websocket.close(code=1008, reason="Unauthorized")
            return
        await register(websocket)
        try:
            async for message in websocket:
                try:
                    data = json.loads(message)
                    if data.get("type") == "heartbeat":
                        await websocket.send(
                            json.dumps(
                                {
                                    "type": "heartbeat_ack",
                                    "timestamp": data.get("timestamp"),
                                }
                            )
                        )
                    elif data.get("type") == "pong":
                        continue
                except Exception:
                    pass
        except Exception as exc:
            logger.error("WebSocket error in dedicated server: %s", sanitize_log_string(str(exc)))
        finally:
            await unregister(websocket)

    async def start_server():
        server = await websockets.serve(
            ws_handler,
            "0.0.0.0",
            ws_port,
            max_size=ws_max_size,
            max_queue=ws_max_queue,
            write_limit=ws_write_limit,
        )
        logger.info("WebSocket server started on port %s", ws_port)
        forwarding_task = asyncio.create_task(_forward_messages(logger))
        await server.wait_closed()
        forwarding_task.cancel()

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.run_until_complete(start_server())
