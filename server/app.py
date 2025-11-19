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
from .routes.admin import admin_bp
from .routes.api import api_bp
from .routes.main import main_bp
from .routes.health import health_bp
from .utils import sanitize_log_string, register_error_handlers
from .managers import connection_manager
from .services.security import init_security
from .services.history import init_history
from .logging_config import setup_logging
from .ws import check_connections as background_check_connections


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    setup_logging(app.config.get("LOG_LEVEL", "INFO"))
    
    # CORS configuration
    CORS(
        app,
        origins=app.config.get("CORS_ORIGINS", ["*"]),
        supports_credentials=app.config.get("CORS_SUPPORTS_CREDENTIALS", True),
    )
    
    sock.init_app(app)
    init_security(app)
    init_history()
    
    # Request ID tracking
    @app.before_request
    def before_request():
        g.request_id = str(uuid.uuid4())
        current_app.logger.debug(f"Request ID: {g.request_id} - {request.method} {request.path}")
    
    @app.after_request
    def after_request(response):
        # Add Request ID to response headers
        if hasattr(g, 'request_id'):
            response.headers['X-Request-ID'] = g.request_id
        
        # Static file caching
        if request.endpoint == "static":
            response.cache_control.max_age = 3600
            response.cache_control.public = True
        
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

if __name__ == "__main__":
    http_port = app.config["PORT"]

    check_thread = threading.Thread(
        target=background_check_connections, args=(app.logger,), daemon=True
    )
    check_thread.start()

    WSGIServer(("0.0.0.0", http_port), app).serve_forever()
