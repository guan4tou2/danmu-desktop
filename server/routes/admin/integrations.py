"""Admin endpoints for the Extensions catalog (v5.2 Sprint 1).

Powers ``/admin/#/integrations`` — a single page listing 4 cards (Slido,
Discord, OBS, Bookmarklet). The Slido card is fully wired this round; the
others are placeholders ("即將支援") until those integrations ship.

Endpoints
---------
GET  /admin/integrations/fire-token
    Public-safe view: ``{enabled, prefix, rotated_at, has_token}``.
POST /admin/integrations/fire-token/regenerate
    Generate + persist a new token. Returns the RAW token ONCE so the
    admin UI can copy it; subsequent reads only get the prefix.
POST /admin/integrations/fire-token/revoke
    Clear the stored token + disable enforcement.
GET  /admin/integrations/sources/recent
    Distinct fire sources seen in the last 5 minutes (window query
    overrideable). Each entry has ``source / last_seen / count``.
"""

from flask import current_app, request

from ...services import fire_sources, fire_token
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/integrations/fire-token", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def get_fire_token_state():
    return _json_response(fire_token.get_public_state())


@admin_bp.route("/integrations/fire-token/regenerate", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def regenerate_fire_token():
    state = fire_token.regenerate()
    current_app.logger.info("[fire_token] regenerated · prefix=%s", state.get("prefix"))
    # Return the raw token ONCE so the admin UI can show it for copying.
    return _json_response(state)


@admin_bp.route("/integrations/fire-token/revoke", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def revoke_fire_token():
    state = fire_token.revoke()
    current_app.logger.info("[fire_token] revoked")
    return _json_response(state)


@admin_bp.route("/integrations/sources/recent", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def get_recent_sources():
    try:
        window = int(request.args.get("window", "300") or 300)
    except (TypeError, ValueError):
        window = 300
    window = max(60, min(window, 3600))  # clamp 1m–1h
    return _json_response({
        "window_sec": window,
        "sources": fire_sources.recent_sources(window),
    })
