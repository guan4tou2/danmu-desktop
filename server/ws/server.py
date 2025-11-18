import asyncio
import json
import queue
import time

import websockets

from .. import state
from ..managers import connection_manager
from ..utils import sanitize_log_string


def check_connections(logger):
    while True:
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
        time.sleep(30)


async def _forward_messages(clients, logger):
    while True:
        try:
            try:
                while not state.message_queue.empty():
                    data = state.message_queue.get_nowait()
                    if clients:
                        message = json.dumps(data)
                        await asyncio.gather(
                            *[client.send(message) for client in clients.copy()]
                        )
            except queue.Empty:
                pass

            if clients:
                ping_message = json.dumps({"type": "ping"})
                dead_clients = set()
                for client in clients.copy():
                    try:
                        await client.send(ping_message)
                    except Exception as exc:
                        logger.warning(
                            "Client connection lost: %s", sanitize_log_string(str(exc))
                        )
                        dead_clients.add(client)

                for client in dead_clients:
                    clients.discard(client)

            await asyncio.sleep(0.5)
        except Exception as exc:
            logger.error("Error in message forwarding: %s", sanitize_log_string(str(exc)))
            await asyncio.sleep(5)


def run_ws_server(ws_port, logger):
    clients = set()

    async def register(websocket):
        clients.add(websocket)
        connection_manager.register_ws_client(websocket)
        logger.info("New client connected. Total clients: %s", len(clients))

    async def unregister(websocket):
        clients.discard(websocket)
        connection_manager.unregister_ws_client(websocket)
        logger.info("Client disconnected. Remaining clients: %s", len(clients))

    async def ws_handler(websocket):
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
            logger.error(
                "WebSocket error in dedicated server: %s", sanitize_log_string(str(exc))
            )
        finally:
            await unregister(websocket)

    async def start_server():
        server = await websockets.serve(ws_handler, "0.0.0.0", ws_port)
        logger.info("WebSocket server started on port %s", ws_port)
        forwarding_task = asyncio.create_task(_forward_messages(clients, logger))
        await server.wait_closed()
        forwarding_task.cancel()

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.run_until_complete(start_server())

