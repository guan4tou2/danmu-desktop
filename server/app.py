from gevent import monkey

monkey.patch_all()

import json
import threading
import uuid

from flask import Flask, current_app, g, request
from flask_cors import CORS
from gevent.pywsgi import WSGIServer

from .config import Config
from .extensions import sock
from .logging_config import setup_logging
from .managers import connection_manager
from .routes.admin import admin_bp
from .routes.api import api_bp
from .routes.health import health_bp
from .routes.main import main_bp
from .services.history import init_history
from .services.security import init_security
from .utils import register_error_handlers, sanitize_log_string
from .ws import check_connections as background_check_connections, run_ws_server


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    setup_logging(app.config.get("LOG_LEVEL", "INFO"))

    # Security check for default password
    if app.config.get("ADMIN_PASSWORD") == "password":
        app.logger.warning(
            "CRITICAL SECURITY WARNING: Using default password. "
            "Please change it in your .env file immediately!"
        )

    # CORS configuration
    # NOTE: Using wildcard origins with supports_credentials=True is forbidden by the CORS spec.
    # Default: credentials disabled so public endpoints are accessible from any origin safely.
    cors_origins = app.config.get("CORS_ORIGINS", ["*"])
    cors_credentials = app.config.get("CORS_SUPPORTS_CREDENTIALS", False)
    if cors_credentials and cors_origins == ["*"]:
        app.logger.warning(
            "CORS misconfiguration: cannot combine wildcard origins with credentials. "
            "Set CORS_ORIGINS to specific origins when enabling CORS_SUPPORTS_CREDENTIALS."
        )
        cors_credentials = False
    CORS(app, origins=cors_origins, supports_credentials=cors_credentials)

    sock.init_app(app)
    init_security(app)
    init_history()

    # Request ID tracking
    @app.before_request
    def before_request():
        g.request_id = str(uuid.uuid4())
        current_app.logger.debug(
            f"Request ID: {g.request_id} - {request.method} {request.path}"
        )

    @app.after_request
    def after_request(response):
        # Add Request ID to response headers
        if hasattr(g, "request_id"):
            response.headers["X-Request-ID"] = g.request_id

        # Static file caching
        if request.endpoint == "static":
            response.cache_control.max_age = 3600
            response.cache_control.public = True

        # Security headers
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        response.headers["Permissions-Policy"] = "geolocation=(), microphone=(), camera=()"

        return response

    app.register_blueprint(main_bp)
    app.register_blueprint(admin_bp)
    app.register_blueprint(api_bp)
    app.register_blueprint(health_bp)

    # Register error handlers
    register_error_handlers(app)

    return app


app = create_app()


@sock.route("/")
def websocket(ws):
    connection_manager.register_web_connection(ws)
    current_app.logger.info("Web server WebSocket connected")
    while True:
        try:
            message = ws.receive()
            try:
                data = json.loads(message)
                if data.get("type") == "heartbeat":
                    ws.send(
                        json.dumps(
                            {
                                "type": "heartbeat_ack",
                                "timestamp": data.get("timestamp"),
                            }
                        )
                    )
                    continue
                if data.get("type") == "pong":
                    continue
            except Exception:
                pass
        except Exception as exc:
            current_app.logger.error(
                "WebSocket error: %s", sanitize_log_string(str(exc))
            )
            connection_manager.unregister_web_connection(ws)
            break


def main():
    http_port = app.config["PORT"]
    ws_port = app.config["WS_PORT"]

    # HTTP 連線保活檢查執行緒
    check_thread = threading.Thread(
        target=background_check_connections, args=(app.logger,), daemon=True
    )
    check_thread.start()

    # WS server 與 HTTP server 必須在同一個 process 才能共享 in-memory ws_queue
    # 使用獨立執行緒跑 asyncio event loop（gevent monkey-patch 相容）
    ws_thread = threading.Thread(
        target=run_ws_server, args=(ws_port, app.logger), daemon=True
    )
    ws_thread.start()
    app.logger.info("WebSocket server thread started on port %s", ws_port)

    WSGIServer(("0.0.0.0", http_port), app).serve_forever()


if __name__ == "__main__":
    main()
