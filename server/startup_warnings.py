import logging
from typing import Any


def _get_config_value(config: Any, key: str, default=None):
    getter = getattr(config, "get", None)
    if callable(getter):
        return getter(key, default)
    return getattr(config, key, default)


def log_ws_auth_warnings(logger: logging.Logger, config: Any, env: str | None = None) -> None:
    """Emit startup warnings for the Flask-integrated /ws auth posture.

    v4.8+: the source of truth is server/services/ws_auth.py (runtime file),
    not Config.WS_REQUIRE_TOKEN. We import lazily so this module stays
    importable in the tiny subset of tests that don't spin up the service.
    """

    try:
        from .services import ws_auth

        auth_state = ws_auth.get_state()
        require_token = bool(auth_state["require_token"])
    except Exception:
        # Fall back to the env-var snapshot if ws_auth service is unavailable
        # (e.g. during early boot or in isolated unit tests).
        require_token = bool(_get_config_value(config, "WS_REQUIRE_TOKEN", False))

    if require_token:
        return

    runtime_env = str(
        env or _get_config_value(config, "ENV", "development") or "development"
    ).lower()

    logger.warning(
        "WS token auth is disabled. The /ws endpoint on the web server does not "
        "require a token. Keep the web port on trusted networks or behind a "
        "reverse proxy/firewall, or flip the admin UI toggle to enable token auth."
    )

    if runtime_env in {"production", "prod"}:
        logger.warning(
            "Public /ws endpoint is reachable without token auth. Any client "
            "that can reach the web port can connect."
        )
