from flask import (
    Flask,
    render_template,
    request,
    redirect,
    url_for,
    flash,
    session,
    make_response,
)

from flask_sock import Sock
from gevent import monkey
from gevent.pywsgi import WSGIServer
import json
import re
import os
from dotenv import load_dotenv, find_dotenv
import secrets
import threading
import time
import queue
import socket

# Load environment variables
load_dotenv(find_dotenv(), override=True)

# Create message queue for communication between Web server and WebSocket server
message_queue = queue.Queue()

# Main Web application
app = Flask(__name__)
sock = Sock(app)

monkey.patch_all()

app.config["WS"] = ""
app.secret_key = secrets.token_hex(16)
password = os.getenv("ADMIN_PASSWORD", "ADMIN_PASSWORD")
http_port = int(os.getenv("PORT", "4000"))  # Fix type
ws_port = int(os.getenv("WS_PORT", "4001"))  # Fix type

Options = {
    "Color": [True, 0, 0, "#FFFFFF"],
    "Opacity": [True, 0, 100, 70],
    "FontSize": [True, 20, 100, 50],
    "Speed": [True, 1000, 8000, 7000],
}

# Define global variables
active_ws = None
active_connections = set()
# Add client connections for WebSocket server
ws_clients = set()


def is_valid_image_url(url):
    return bool(re.match(r"https?://.*\.(jpeg|jpg|gif|png|webp)$", url, re.I))


# Internal communication: Forward messages to WebSocket server
def forward_to_ws_server(data):
    global message_queue
    try:
        # Put message in queue, to be sent by forwarding thread to all WebSocket clients
        message_queue.put(data)
        return True
    except Exception as e:
        print(f"Error forwarding message to WS server: {e}")
        return False


# Web server WebSocket handler (maintain original functionality, mainly for admin interface)
@sock.route("/")
def websocket(ws):
    global active_ws, active_connections
    print("Web server WebSocket connected")
    active_ws = ws
    active_connections.add(ws)
    while True:
        try:
            message = ws.receive()
            # Handle heartbeat messages
            try:
                data = json.loads(message)
                if data.get("type") == "heartbeat":
                    # Send heartbeat response
                    ws.send(
                        json.dumps(
                            {
                                "type": "heartbeat_ack",
                                "timestamp": data.get("timestamp"),
                            }
                        )
                    )
                    continue
                elif data.get("type") == "pong":
                    # Record pong response, can add logic here to update connection status
                    continue
            except Exception as e:
                pass  # Not JSON format or not a heartbeat message, ignore error and continue
        except Exception as e:
            print(f"WebSocket error: {e}")
            active_connections.discard(ws)
            if ws == active_ws:
                active_ws = None
            break


def send_message(message):
    global active_ws, active_connections
    with app.app_context():
        connections_copy = list(active_connections)
        for client in connections_copy:
            try:
                client.send(message)
            except Exception as e:
                print(f"Error sending message to client: {e}")
                active_connections.discard(client)
                if client == active_ws:
                    active_ws = None


@app.route("/")
def index():
    ws_url = f"ws://{request.host.split(':')[0]}:{ws_port}"
    return render_template("index.html", Options=Options, ws_url=ws_url)


@app.route("/login", methods=["POST"])
def login():
    if request.form["password"] == password:
        session["logged_in"] = True
        return redirect(url_for("admin"))
    else:
        flash("wrong password!")
        return redirect(url_for("admin"))


@app.route("/logout")
def logout():
    session.pop("logged_in", None)
    return redirect(url_for("admin"))


@app.route("/admin")
def admin():
    if not session.get("logged_in"):
        return render_template("admin.html")
    return render_template("admin.html", Options=Options)


@app.route("/fire", methods=["POST"])
def fire():
    global active_ws
    if not ws_clients and not active_connections:
        return make_response("No active WebSocket connections", 503)

    try:
        data = request.get_json()

        if not data.get("text"):
            return make_response("Content can't be empty", 400)

        if data.get("isImage"):
            if not is_valid_image_url(data["text"]):
                return make_response("Invalid image url", 400)

        # Prefer forwarding to dedicated WebSocket server (for Danmu Desktop clients)
        forward_success = forward_to_ws_server(data)

        # Also try to send using Web server WebSocket connection (for Web interface)
        web_success = False
        if active_ws and active_ws in active_connections:
            try:
                active_ws.send(json.dumps(data))
                web_success = True
            except Exception as e:
                print(f"Failed to send with active_ws: {e}")
                active_connections.discard(active_ws)
                active_ws = None

        # If active_ws send fails, try all Web connections
        if not web_success and active_connections:
            connections_copy = list(active_connections)
            for ws in connections_copy:
                try:
                    ws.send(json.dumps(data))
                    active_ws = ws  # Update active_ws to the successful connection
                    web_success = True
                    break
                except Exception as e:
                    print(f"Failed to send to connection: {e}")
                    active_connections.discard(ws)

        if forward_success or web_success:
            return make_response("OK", 200)
        else:
            return make_response("Failed to send to any connection", 503)

    except Exception as e:
        print(f"Send Error: {e}")
        return make_response(str(e), 500)


@app.route("/update", methods=["POST"])
def update():
    global active_ws
    if not session.get("logged_in"):
        return redirect(url_for("admin"))
    data = request.get_json()
    for key in data:
        if key == "Color":
            if data[key]:
                Options[key][3] = "#" + data[key]
        else:
            # Process numeric data
            try:
                if data[key] == "":
                    continue
                Options[key][3] = int(data[key])
            except ValueError:
                print(f"Can't convert '{data[key]}' to int, stay original value")

    try:
        # Send settings update to Web clients
        if active_ws:
            notification = {"type": "settings_changed", "settings": Options}
            active_ws.send(json.dumps(notification))

        # Broadcast settings update to all Danmu Desktop clients
        notification = {"type": "settings_changed", "settings": Options}
        forward_to_ws_server(notification)
    except Exception as e:
        print(f"Change Error: {e}")

    return make_response()


@app.route("/admin/Set", methods=["POST"])
def Set():
    global active_ws
    if not session.get("logged_in"):
        return redirect(url_for("admin"))
    data = request.get_data().decode().split(" ")
    Options[data[0]][0] = data[1] == "True"

    try:
        # Send settings update to Web clients
        if active_ws:
            notification = {"type": "settings_changed", "settings": Options}
            active_ws.send(json.dumps(notification))

        # Broadcast settings update to all Danmu Desktop clients
        notification = {"type": "settings_changed", "settings": Options}
        forward_to_ws_server(notification)
    except Exception as e:
        print(f"Change Error: {e}")

    return redirect(url_for("admin"))


@app.route("/get_settings", methods=["GET"])
def get_settings():
    return make_response(json.dumps(Options), 200, {"Content-Type": "application/json"})


# Add connection health check thread
def check_connections():
    global active_ws
    while True:
        try:
            # Check all Web server WebSocket connections
            if active_connections:
                connections_copy = list(active_connections)
                for ws in connections_copy:
                    try:
                        # Send a ping message to check connection
                        ws.send(json.dumps({"type": "ping"}))
                    except Exception as e:
                        print(f"Connection dead, removing: {e}")
                        active_connections.discard(ws)
                        if ws == active_ws:
                            active_ws = None
            time.sleep(30)  # Check every 30 seconds
        except Exception as e:
            print(f"Error in connection check: {e}")
            time.sleep(30)


# Dedicated WebSocket server running on different port
def run_ws_server():
    import websockets
    import asyncio

    clients = set()

    async def register(websocket):
        clients.add(websocket)
        global ws_clients
        ws_clients = clients
        print(f"New client connected. Total clients: {len(clients)}")

    async def unregister(websocket):
        clients.discard(websocket)
        global ws_clients
        ws_clients = clients
        print(f"Client disconnected. Remaining clients: {len(clients)}")

    # Handle WebSocket connections from Danmu Desktop
    async def ws_handler(websocket, path):
        await register(websocket)
        try:
            async for message in websocket:
                try:
                    # Handle special messages like heartbeats
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
                except:
                    # Not JSON or message that doesn't need special handling, ignore
                    pass
        except Exception as e:
            print(f"WebSocket error in dedicated server: {e}")
        finally:
            await unregister(websocket)

    # Forward messages to all WebSocket clients
    async def forward_messages():
        global ws_clients  # Ensure access to global variable
        while True:
            try:
                # Non-blocking check for messages in queue
                try:
                    while not message_queue.empty():
                        data = message_queue.get_nowait()
                        if clients:  # If there are connected clients
                            message = json.dumps(data)
                            await asyncio.gather(
                                *[client.send(message) for client in clients.copy()]
                            )
                except queue.Empty:
                    pass

                # Periodically send ping message to maintain connections
                if clients:
                    ping_message = json.dumps({"type": "ping"})
                    dead_clients = set()
                    for client in clients.copy():
                        try:
                            await client.send(ping_message)
                        except Exception as e:
                            print(f"Client connection lost: {e}")
                            dead_clients.add(client)

                    # Remove disconnected clients
                    for client in dead_clients:
                        clients.discard(client)

                    # Update global variable
                    global ws_clients
                    ws_clients = clients

                await asyncio.sleep(1)  # Check message queue every second
            except Exception as e:
                print(f"Error in message forwarding: {e}")
                await asyncio.sleep(5)  # Wait longer when an error occurs

    # Start WebSocket server
    async def start_server():
        server = await websockets.serve(ws_handler, "0.0.0.0", ws_port)
        print(f"WebSocket server started on port {ws_port}")
        forwarding_task = asyncio.create_task(forward_messages())
        await server.wait_closed()
        forwarding_task.cancel()

    # Start event loop for WebSocket server
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.run_until_complete(start_server())


# Start services
if __name__ == "__main__":
    print(
        f"Starting Danmu Server with Web port {http_port} and WebSocket port {ws_port}"
    )

    # Start connection check thread
    check_thread = threading.Thread(target=check_connections, daemon=True)
    check_thread.start()

    # Start WebSocket server thread
    ws_thread = threading.Thread(target=run_ws_server, daemon=True)
    ws_thread.start()

    # Start Web server
    WSGIServer(("0.0.0.0", http_port), app).serve_forever()
