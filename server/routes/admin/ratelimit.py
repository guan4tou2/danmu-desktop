"""Admin routes for the request rate limits and the IP allow/deny rules.

    GET  /admin/ratelimit/config   what is in effect now, per scope
    POST /admin/ratelimit/apply    { "scope", "limit", "window" } — save one scope
    POST /admin/ratelimit/reset    { "scope"? } — back to the startup value(s)

Both writes answer with ``persisted``: false means the change is in effect but
could not be written to disk, so it will not survive a restart.

Saved limits live in ``runtime/rate_limits.json`` and survive a restart; the
scopes, bounds and precedence are documented in ``services/rate_limits.py``.

These three endpoints are deliberately **not** charged against the admin
rate limit. They are how an admin who set that limit too low puts it back —
if they were throttled by it, the only way out would be to edit the file and
restart. They still require a logged-in session (and CSRF for the writes).
"""

from flask import current_app, request

from ...services import rate_limits, ratelimit_ip
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string


@admin_bp.route("/ratelimit/config", methods=["GET"])
@require_login
def ratelimit_config():
    return _json_response({"scopes": rate_limits.snapshot(current_app.config)})


@admin_bp.route("/ratelimit/apply", methods=["POST"])
@require_csrf
@require_login
def ratelimit_apply():
    """Save a new (limit, window) pair for one scope and put it into effect."""
    payload = request.get_json(silent=True)
    if not isinstance(payload, dict):
        return _json_response({"error": "Body must be a JSON object"}, 400)
    try:
        applied = rate_limits.set_scope(
            current_app.config, payload.get("scope"), payload.get("limit"), payload.get("window")
        )
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)

    scope = payload["scope"]
    current_app.logger.info(
        "Rate limit saved: %s limit=%d window=%d",
        sanitize_log_string(scope),
        applied["limit"],
        applied["window"],
    )
    return _json_response({"scope": scope, **applied, "persisted": rate_limits.is_persisted()})


@admin_bp.route("/ratelimit/reset", methods=["POST"])
@require_csrf
@require_login
def ratelimit_reset():
    """Drop the saved value for one scope (or all) and return to the startup value.

    The startup value is the environment variable, or the built-in default
    when that is not set.
    """
    payload = request.get_json(silent=True)
    scope = payload.get("scope") if isinstance(payload, dict) else None
    try:
        rate_limits.reset(current_app.config, scope)
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)
    current_app.logger.info(
        "Rate limit reset to startup value: %s", sanitize_log_string(scope or "all")
    )
    return _json_response(
        {
            "scopes": rate_limits.snapshot(current_app.config),
            "persisted": rate_limits.is_persisted(),
        }
    )


@admin_bp.route("/ratelimit/ip-rules", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def ratelimit_ip_rules_get():
    """Return current IP allow/deny rules for the ratelimit admin page."""
    return _json_response(ratelimit_ip.get_state())


@admin_bp.route("/ratelimit/ip-rules", methods=["PUT"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def ratelimit_ip_rules_put():
    """Replace allowlist/denylist. Body: {allowlist?: [...], denylist?: [...]}.

    Entries are CIDR strings (bare IPs normalise to /32 or /128). Missing
    keys leave that list untouched. Persists to
    ``runtime/ratelimit_ip_rules.json``.
    """
    payload = request.get_json(silent=True)
    if not isinstance(payload, dict):
        return _json_response({"error": "Body must be a JSON object"}, 400)
    if "allowlist" not in payload and "denylist" not in payload:
        return _json_response({"error": "provide allowlist and/or denylist"}, 400)
    try:
        new_state = ratelimit_ip.set_state(payload)
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)
    current_app.logger.info(
        "Rate-limit IP rules updated: allow=%d deny=%d",
        len(new_state["allowlist"]),
        len(new_state["denylist"]),
    )
    return _json_response(new_state)
