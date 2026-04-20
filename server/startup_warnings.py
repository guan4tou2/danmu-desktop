import logging
from typing import Any


def _get_config_value(config: Any, key: str, default=None):
    getter = getattr(config, "get", None)
    if callable(getter):
        return getter(key, default)
    return getattr(config, key, default)


def _is_loopback_host(host: str) -> bool:
    normalized = (host or "").strip().lower()
    return normalized in {"127.0.0.1", "localhost", "::1"}


def log_ws_auth_warnings(logger: logging.Logger, config: Any, env: str | None = None) -> None:
    """Emit startup warnings for the dedicated WS server auth posture.

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

    ws_host = str(_get_config_value(config, "WS_HOST", "127.0.0.1") or "127.0.0.1")
    ws_port = int(_get_config_value(config, "WS_PORT", 4001))
    runtime_env = str(
        env or _get_config_value(config, "ENV", "development") or "development"
    ).lower()

    logger.warning(
        "WS token auth is disabled. Dedicated WebSocket clients on %s:%s do not "
        "require a token. Keep this port on trusted networks or behind a reverse "
        "proxy/firewall, or flip the admin UI toggle to enable token auth.",
        ws_host,
        ws_port,
    )

    if runtime_env in {"production", "prod"} or not _is_loopback_host(ws_host):
        logger.warning(
            "Dedicated WebSocket server is reachable without token auth "
            "(WS_HOST=%s). Any client that can reach port %s can connect.",
            ws_host,
            ws_port,
        )
