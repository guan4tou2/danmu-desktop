"""Admin bulk bootstrap endpoint.

A single GET /admin/bootstrap returns the snapshot that the admin SPA needs on
first paint. It replaces the ~16-way fan-out that previously tripped nginx's
public ``limit_req`` burst window (see commit b65abc5 for the temporary
per-path bypass that still serves as a fallback).

Each section mirrors the payload shape of its underlying per-section route
(so the admin JS can treat cache hits as interchangeable with live fetches).
Services are called directly to avoid paying decorator/CSRF overhead 16 times.
Any section that raises is captured as ``{"_error": str(e)}`` so one broken
subsystem does not sink the whole bundle.

IA mapping (per docs/design-v2-backlog.md § P0-0, 2026-05-04):

S-tier (live console — dashboard nav):
    metrics, polls, effects, blacklist, filters, session, audit

A-tier (each-event prep — appearance / assets / widgets / broadcast nav):
    themes, settings, sounds, emojis, stickers, widgets, ws_auth

B-tier (occasional — automation / history nav):
    webhooks, scheduler, history_stats, fingerprints

C-tier (system accordion) is intentionally NOT in bootstrap — those pages are
visited rarely and fetched on-demand to keep the first-paint payload small.

`session` and `audit` were added 2026-05-04 to support the live-console
dashboard topbar (session selector) and notification bell (system events
from audit log). Both are S-tier for live console.
"""

from flask import current_app

from ...services.security import rate_limit
from . import _json_response, admin_bp, require_login


def _blacklist():
    from ...services.blacklist import list_keywords

    return list_keywords()


def _widgets():
    from ...services.widgets import list_widgets

    return {"widgets": list_widgets()}


def _polls():
    from ...services.poll import poll_service

    return poll_service.get_status()


def _settings():
    from ...services.settings import get_options

    return get_options()


def _filters():
    from ...services.filter_engine import filter_engine

    return {"rules": filter_engine.list_rules()}


def _history_stats():
    from ...services import history as history_service

    if not history_service.danmu_history:
        return {"records": [], "stats": {}, "query": {"hours": 24, "limit": 1}}
    return {
        "records": history_service.danmu_history.get_recent(hours=24, limit=1),
        "stats": history_service.danmu_history.get_stats(),
        "query": {"hours": 24, "limit": 1},
    }


def _ws_auth():
    from ...services import ws_auth

    state = ws_auth.get_state()
    return {"require_token": state["require_token"], "token": state["token"]}


def _effects():
    from ...services.effects import list_with_file_info

    return {"effects": list_with_file_info()}


def _themes():
    from ...services import themes as theme_svc

    return {
        "themes": theme_svc.load_all(),
        "active": theme_svc.get_active_name(),
    }


def _webhooks():
    from ...services.webhook import webhook_service

    return {"webhooks": webhook_service.list_hooks()}


def _sounds():
    from ...services.sound import sound_service

    return {
        "sounds": sound_service.list_sounds(),
        "rules": sound_service.list_rules(),
    }


def _emojis():
    from ...services.emoji import emoji_service

    return {"emojis": emoji_service.list_emojis()}


def _stickers():
    from ...services.stickers import sticker_service

    return {"stickers": sticker_service.list_stickers()}


def _scheduler():
    from ...services.scheduler import scheduler_service

    return {"jobs": scheduler_service.list_jobs()}


def _fingerprints():
    from ...services import fingerprint_tracker

    records = fingerprint_tracker.list_all(limit=20)
    return {"records": records, "count": len(records)}


def _metrics():
    import time

    from ...services import telemetry, ws_queue, ws_state
    from ...services.poll import poll_service
    from ...services.security import get_rate_limit_stats
    from ...services.widgets import list_widgets

    state = ws_state.read_state()
    return {
        "ws_clients": state.get("ws_clients", 0),
        "ws_updated_at": state.get("updated_at", 0),
        "queue_size": len(ws_queue._queue),
        "queue_capacity": ws_queue._MAX_QUEUE_SIZE,
        "active_widgets": len(list_widgets()),
        "poll_state": poll_service.state,
        "server_time": time.time(),
        "rate_limits": get_rate_limit_stats(),
        **telemetry.get_series(),
    }


def _session():
    from ...services import session_service

    return session_service.get_state()


def _audit():
    from ...services import audit_log

    return {"events": audit_log.recent(limit=10)}


# Ordered section names — loaders are looked up on this module at request time
# so tests can ``monkeypatch.setattr`` an individual loader.
_SECTION_NAMES = (
    "blacklist",
    "widgets",
    "polls",
    "settings",
    "filters",
    "history_stats",
    "ws_auth",
    "effects",
    "themes",
    "webhooks",
    "sounds",
    "emojis",
    "stickers",
    "scheduler",
    "fingerprints",
    "metrics",
    "session",
    "audit",
)


@admin_bp.route("/bootstrap", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def admin_bootstrap():
    """Return the full admin first-paint snapshot in one request."""
    mod = globals()
    out = {}
    for name in _SECTION_NAMES:
        loader = mod.get(f"_{name}")
        try:
            out[name] = loader()
        except Exception as exc:  # noqa: BLE001 - we deliberately swallow per-section
            current_app.logger.warning("admin bootstrap section %r failed: %s", name, exc)
            out[name] = {"_error": str(exc)}
    return _json_response(out)
