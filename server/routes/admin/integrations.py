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

# NOTE: get_rate_limit_bucket_history imported lazily inside the usage
# handler to avoid an import cycle when this module is first loaded.


@admin_bp.route("/integrations/fire-token", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def get_fire_token_state():
    state = dict(fire_token.get_public_state())
    state["contract"] = {
        "acl_matrix_supported": False,
        "token_policy_scope": "global_fire_token_only",
    }
    return _json_response(state)


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
        # Stable schema so notifications UI can render unavailable channels.
        "source_catalog": [
            {"id": "rate_limit", "implemented": True},
            {"id": "fire_token", "implemented": True},
            {"id": "moderation", "implemented": True},
            {"id": "backup", "implemented": False},
            {"id": "webhooks", "implemented": False},
            {"id": "system", "implemented": False},
        ],
    })


@admin_bp.route("/integrations/fire-token/audit", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def get_fire_token_audit():
    """Recent token lifecycle events (rotated / revoked / toggled).

    Newest-first, capped at limit (1–100). In-memory only; clears on
    server restart. Persistent audit is v5.3+ scope.
    """
    try:
        limit = int(request.args.get("limit", "20") or 20)
    except (TypeError, ValueError):
        limit = 20
    return _json_response({"events": fire_token.recent_audit(limit)})


@admin_bp.route("/integrations/fire-token/usage", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def get_fire_token_usage():
    """24h hourly + 60min per-minute usage series for the Fire Token page.

    Backed by the existing rate-limit bucket history for the ``fire``
    scope (5-min granularity, 24h retention). Aggregated to:
      - usage_24h: 24 entries (one per hour)
      - usage_60m: 60 entries (one per minute, last 60min)
    """
    from ...services.security import get_rate_limit_bucket_history

    # 24h hourly aggregation (60-second granularity buckets summed per hour)
    hourly = get_rate_limit_bucket_history("fire", 60)  # returns 24 hour entries
    return _json_response({
        "usage_24h": list(hourly),
        "ceiling_per_min": 200,  # FIRE_RATE_LIMIT default
        "ips": fire_sources.recent_ips(window_sec=3600, limit=10),
    })
