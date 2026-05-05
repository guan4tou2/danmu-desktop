from gevent import monkey

monkey.patch_all()

import secrets
import threading
import uuid

from flask import Flask, current_app, g, request
from flask_cors import CORS
from gevent.pywsgi import WSGIServer

from .config import Config
from .logging_config import setup_logging
from .routes.admin import admin_bp
from .routes.api import api_bp
from .routes.health import health_bp
from .routes.main import main_bp
from .services.history import init_history
from .services.security import init_security
from .startup_warnings import log_ws_auth_warnings
from .utils import json_response
from .ws import run_ws_server


def _build_content_security_policy(nonce: str) -> str:
    # `style-src-elem` forbids `'unsafe-inline'` so a successful HTML injection
    # cannot smuggle in an attacker-controlled `<style>` block (the main
    # CSS-exfiltration vector via `@import` or attribute selectors).
    # `style-src-attr` stays permissive so template `style=""` attributes and
    # JS-driven `.style.foo = …` assignments continue to work. `style-src`
    # is kept as a fallback for user agents that don't support the split.
    directives = [
        "default-src 'self'",
        "base-uri 'self'",
        "frame-ancestors 'none'",
        "object-src 'none'",
        "form-action 'self'",
        "img-src 'self' https: data:",
        "font-src 'self' https://fonts.gstatic.com data:",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "style-src-elem 'self' https://fonts.googleapis.com",
        "style-src-attr 'unsafe-inline'",
        "connect-src 'self' ws: wss:",
        f"script-src 'self' 'nonce-{nonce}'",
        "script-src-attr 'none'",
    ]
    return "; ".join(directives)


def _build_hsts_header(config) -> str:
    parts = [f"max-age={config.get('HSTS_MAX_AGE', 31536000)}"]
    if config.get("HSTS_INCLUDE_SUBDOMAINS", False):
        parts.append("includeSubDomains")
    return "; ".join(parts)


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    setup_logging(app.config.get("LOG_LEVEL", "INFO"))
    env = str(app.config.get("ENV", "development")).lower()

    # Security check for missing/default password
    if not app.config.get("ADMIN_PASSWORD_HASHED") and not app.config.get("ADMIN_PASSWORD"):
        raise RuntimeError(
            "Admin password is not configured. Set ADMIN_PASSWORD or ADMIN_PASSWORD_HASHED."
        )
    _weak_passwords = {"password", "changeme", "admin", "123456"}
    if app.config.get("ADMIN_PASSWORD") in _weak_passwords:
        if not app.config.get("TESTING") and env in {"production", "prod"}:
            raise RuntimeError(
                "Refusing to start in production with a weak default admin password. "
                "Set a strong ADMIN_PASSWORD or ADMIN_PASSWORD_HASHED in your .env file."
            )
        app.logger.warning(
            "SECURITY WARNING: Using a weak default password. "
            "Change it in your .env file before exposing this instance!"
        )
    if env in {"production", "prod"} and not app.config.get("SECRET_KEY_FROM_ENV", False):
        raise RuntimeError(
            "SECRET_KEY must be explicitly set in production. "
            "Refusing to start with an ephemeral auto-generated secret key."
        )
    if env in {"production", "prod"} and not app.config.get("SESSION_COOKIE_SECURE", False):
        raise RuntimeError(
            "SESSION_COOKIE_SECURE must remain enabled in production. "
            "Enable HTTPS and set SESSION_COOKIE_SECURE=true."
        )
    if env in {"production", "prod"} and not app.config.get("TRUSTED_HOSTS"):
        raise RuntimeError(
            "TRUSTED_HOSTS must be configured in production. "
            "Set TRUSTED_HOSTS to allowed hostnames to prevent host header poisoning."
        )
    # v4.8+: auth state now lives in runtime/ws_auth.json and is mutable at
    # runtime via the admin UI. startup_warnings.log_ws_auth_warnings() reads
    # the service-backed state; the Config.WS_* env vars are only used as a
    # first-boot seed (see services/ws_auth.py::_seed_from_env).
    log_ws_auth_warnings(app.logger, app.config, env=env)

    # Reverse-proxy awareness: when running behind nginx/Traefik, Flask
    # must honor X-Forwarded-Proto / X-Forwarded-Host / X-Forwarded-For
    # so redirects (e.g. GET /admin → /admin/), SESSION_COOKIE_SECURE
    # gating, and rate-limit IPs reflect the real client instead of the
    # proxy. Without this, a user hitting `https://example.com/admin`
    # gets redirected to `http://127.0.0.1/admin/` and lands on whatever
    # else is listening on port 80 of the host (netbird-caddy, etc.).
    # Enable only when the operator has opted in via TRUST_X_FORWARDED_FOR
    # so naive deploys aren't vulnerable to header spoofing from untrusted
    # clients. setup.sh auto-sets this to true for https / traefik modes.
    if app.config.get("TRUST_X_FORWARDED_FOR", False):
        from werkzeug.middleware.proxy_fix import ProxyFix

        app.wsgi_app = ProxyFix(
            app.wsgi_app,
            x_for=1,  # trust single hop of X-Forwarded-For
            x_proto=1,  # trust X-Forwarded-Proto
            x_host=1,  # trust X-Forwarded-Host
            x_prefix=0,
            x_port=0,
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

    init_security(app)
    init_history()

    # Request ID tracking
    @app.before_request
    def before_request():
        g.request_id = str(uuid.uuid4())
        g.csp_nonce = secrets.token_urlsafe(24)
        current_app.logger.debug(f"Request ID: {g.request_id} - {request.method} {request.path}")

    @app.context_processor
    def inject_security_template_state():
        return {
            "csp_nonce": getattr(g, "csp_nonce", ""),
            "app_version": Config.APP_VERSION,
            "app_name": Config.APP_NAME,
            "captcha_provider": Config.CAPTCHA_PROVIDER,
            "captcha_site_key": Config.CAPTCHA_SITE_KEY,
        }

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
        response.headers["Content-Security-Policy"] = _build_content_security_policy(
            getattr(g, "csp_nonce", "")
        )
        if app.config.get("HSTS_ENABLED", False) and request.is_secure:
            response.headers["Strict-Transport-Security"] = _build_hsts_header(app.config)

        return response

    app.register_blueprint(main_bp)
    app.register_blueprint(admin_bp)
    app.register_blueprint(api_bp)
    app.register_blueprint(health_bp)

    # Error handlers (simple JSON responses, no unused APIError abstraction)
    @app.errorhandler(404)
    def handle_not_found(error):
        return json_response({"error": "Resource not found"}, 404)

    @app.errorhandler(500)
    def handle_internal_error(error):
        current_app.logger.error(
            "Internal Server Error: %s (Request ID: %s)",
            str(error),
            getattr(g, "request_id", "N/A"),
        )
        return json_response({"error": "An internal error has occurred"}, 500)

    @app.errorhandler(429)
    def handle_rate_limit(error):
        return json_response({"error": "Too many requests. Please try again later."}, 429)

    return app


app = create_app()


def main():
    http_port = app.config["PORT"]
    ws_port = app.config["WS_PORT"]

    # Start telemetry sampler for admin dashboard sparklines
    from .services import telemetry

    telemetry.start_sampler()

    # WS server 與 HTTP server 必須在同一個 process 才能共享 in-memory ws_queue
    # 使用獨立執行緒跑 asyncio event loop（gevent monkey-patch 相容）
    ws_thread = threading.Thread(target=run_ws_server, args=(ws_port, app.logger), daemon=True)
    ws_thread.start()
    app.logger.info("WebSocket server thread started on port %s", ws_port)

    WSGIServer(("0.0.0.0", http_port), app).serve_forever()


if __name__ == "__main__":
    main()
