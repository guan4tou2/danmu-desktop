"""Runtime security settings for admin-only controls.

This module owns the mutable settings behind the admin Security page:

- admin IP allowlist
- runtime CORS policy summary/headers
- TLS/HSTS status summary

The file is intentionally small and JSON-backed, matching ws_auth/api_tokens
runtime persistence patterns.
"""

from __future__ import annotations

import copy
import json
import logging
import os
import threading
from ipaddress import ip_address, ip_network
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional

from flask import Request

logger = logging.getLogger(__name__)

_STATE_FILE = Path(__file__).resolve().parent.parent / "runtime" / "security_settings.json"
_LOCK = threading.RLock()
_STATE: Optional[Dict[str, Any]] = None

_DEFAULT_METHODS = ["GET", "POST", "DELETE", "PATCH", "OPTIONS"]
_DEFAULT_STATE: Dict[str, Any] = {
    "ip_allowlist": {
        "enabled": False,
        "entries": [],
    },
    "cors": {
        "origins": ["*"],
        "supports_credentials": False,
        "methods": _DEFAULT_METHODS,
    },
}


def _default_state() -> Dict[str, Any]:
    return copy.deepcopy(_DEFAULT_STATE)


def _atomic_write(path: Path, state: Dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(f".tmp.{os.getpid()}.{threading.get_ident()}")
    with tmp.open("w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False, indent=2)
    tmp.replace(path)


def _load_from_disk() -> Dict[str, Any]:
    if not _STATE_FILE.exists():
        return _default_state()
    try:
        data = json.loads(_STATE_FILE.read_text(encoding="utf-8"))
    except Exception as exc:
        logger.warning("security_settings: failed to read %s: %s", _STATE_FILE, exc)
        return _default_state()
    if not isinstance(data, dict):
        return _default_state()
    try:
        return _normalize_state(data)
    except ValueError as exc:
        logger.warning("security_settings: ignoring invalid state file %s: %s", _STATE_FILE, exc)
        return _default_state()


def _normalize_methods(methods: Any) -> List[str]:
    if not isinstance(methods, list):
        methods = _DEFAULT_METHODS
    out: List[str] = []
    for raw in methods:
        method = str(raw or "").strip().upper()
        if not method:
            continue
        if not method.replace("-", "").isalpha():
            raise ValueError("CORS methods must be HTTP method names")
        if method not in out:
            out.append(method)
    return out or list(_DEFAULT_METHODS)


def _normalize_origins(origins: Any) -> List[str]:
    if not isinstance(origins, list):
        origins = ["*"]
    out: List[str] = []
    for raw in origins:
        origin = str(raw or "").strip()
        if not origin:
            continue
        if origin == "*":
            if "*" not in out:
                out.append("*")
            continue
        if not (origin.startswith("http://") or origin.startswith("https://")):
            raise ValueError("CORS origins must be '*' or http(s) origins")
        if origin not in out:
            out.append(origin)
    return out or ["*"]


def _normalize_allowlist_entries(entries: Any) -> List[str]:
    if entries is None:
        entries = []
    if not isinstance(entries, list):
        raise ValueError("IP allowlist entries must be a list")
    out: List[str] = []
    for raw in entries:
        entry = str(raw or "").strip()
        if not entry:
            continue
        try:
            network = ip_network(entry, strict=False)
        except ValueError as exc:
            raise ValueError(f"Invalid IP allowlist entry: {entry}") from exc
        text = str(network)
        if text not in out:
            out.append(text)
    return out


def _normalize_state(data: Dict[str, Any]) -> Dict[str, Any]:
    base = _default_state()
    ip_cfg = dict(base["ip_allowlist"])
    ip_cfg.update(data.get("ip_allowlist") or {})
    ip_cfg = {
        "enabled": bool(ip_cfg.get("enabled", False)),
        "entries": _normalize_allowlist_entries(ip_cfg.get("entries", [])),
    }

    cors_cfg = dict(base["cors"])
    cors_cfg.update(data.get("cors") or {})
    origins = _normalize_origins(cors_cfg.get("origins", ["*"]))
    supports_credentials = bool(cors_cfg.get("supports_credentials", False))
    if supports_credentials and "*" in origins:
        raise ValueError("CORS credentials cannot be enabled with wildcard origin")
    cors_cfg = {
        "origins": origins,
        "supports_credentials": supports_credentials,
        "methods": _normalize_methods(cors_cfg.get("methods", _DEFAULT_METHODS)),
    }
    return {"ip_allowlist": ip_cfg, "cors": cors_cfg}


def get_state() -> Dict[str, Any]:
    global _STATE
    with _LOCK:
        if _STATE is None:
            _STATE = _load_from_disk()
        return copy.deepcopy(_STATE)


def set_state_patch(patch: Dict[str, Any], *, current_ip: str = "") -> Dict[str, Any]:
    """Merge and persist a partial state update.

    When enabling the admin IP allowlist, require the current admin IP to
    remain allowed. This prevents self-lockout from the UI.
    """

    if not isinstance(patch, dict):
        raise ValueError("security settings payload must be an object")

    with _LOCK:
        state = get_state()
        merged = copy.deepcopy(state)
        if "ip_allowlist" in patch:
            ip_patch = patch.get("ip_allowlist") or {}
            if not isinstance(ip_patch, dict):
                raise ValueError("IP allowlist payload must be an object")
            merged["ip_allowlist"].update(ip_patch)
        if "cors" in patch:
            cors_patch = patch.get("cors") or {}
            if not isinstance(cors_patch, dict):
                raise ValueError("CORS payload must be an object")
            merged["cors"].update(cors_patch)

        normalized = _normalize_state(merged)
        if normalized["ip_allowlist"]["enabled"]:
            if not normalized["ip_allowlist"]["entries"]:
                raise ValueError("IP allowlist cannot be enabled without entries")
            if current_ip and not _ip_matches(current_ip, normalized["ip_allowlist"]["entries"]):
                raise ValueError("IP allowlist would block the current admin IP")

        global _STATE
        _STATE = normalized
        _atomic_write(_STATE_FILE, normalized)
        return copy.deepcopy(normalized)


def _ip_matches(client_ip: str, entries: Iterable[str]) -> bool:
    try:
        ip = ip_address(str(client_ip))
    except ValueError:
        return False
    for entry in entries:
        try:
            if ip in ip_network(entry, strict=False):
                return True
        except ValueError:
            continue
    return False


def is_admin_ip_allowed(client_ip: str) -> bool:
    state = get_state()
    ip_cfg = state.get("ip_allowlist") or {}
    if not ip_cfg.get("enabled"):
        return True
    return _ip_matches(client_ip, ip_cfg.get("entries") or [])


def _hsts_header(config: Dict[str, Any]) -> str:
    parts = [f"max-age={int(config.get('HSTS_MAX_AGE', 31536000) or 31536000)}"]
    if config.get("HSTS_INCLUDE_SUBDOMAINS", False):
        parts.append("includeSubDomains")
    return "; ".join(parts)


def summary(config: Dict[str, Any], req: Optional[Request] = None) -> Dict[str, Any]:
    state = get_state()
    current_ip = ""
    https = False
    if req is not None:
        try:
            from .ip import get_client_ip

            current_ip = get_client_ip()
        except Exception:
            current_ip = req.remote_addr or ""
        https = bool(req.is_secure)
    hsts_enabled = bool(config.get("HSTS_ENABLED", False))
    tls = {
        "https": https,
        "hsts_enabled": hsts_enabled,
        "hsts_header": _hsts_header(config) if hsts_enabled else None,
        "trusted_proxy": bool(config.get("TRUST_X_FORWARDED_FOR", False)),
    }
    return {
        "ip_allowlist": {
            **state["ip_allowlist"],
            "current_ip": current_ip,
        },
        "cors": copy.deepcopy(state["cors"]),
        "tls": tls,
    }


def apply_cors_headers(response, origin: str | None):
    """Apply runtime CORS headers when an Origin header is present."""

    if not origin:
        return response
    for header in (
        "Access-Control-Allow-Origin",
        "Access-Control-Allow-Methods",
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Credentials",
    ):
        response.headers.pop(header, None)

    cors = get_state().get("cors") or {}
    origins = cors.get("origins") or ["*"]
    supports_credentials = bool(cors.get("supports_credentials", False))

    allow_origin = None
    if "*" in origins and not supports_credentials:
        allow_origin = "*"
    elif origin in origins:
        allow_origin = origin

    if allow_origin:
        response.headers["Access-Control-Allow-Origin"] = allow_origin
        response.headers["Access-Control-Allow-Methods"] = ", ".join(
            cors.get("methods") or _DEFAULT_METHODS
        )
        response.headers["Access-Control-Allow-Headers"] = (
            "Content-Type, X-CSRF-Token, X-Fire-Token"
        )
        if supports_credentials:
            response.headers["Access-Control-Allow-Credentials"] = "true"
        vary = response.headers.get("Vary")
        if vary:
            if "Origin" not in [v.strip() for v in vary.split(",")]:
                response.headers["Vary"] = f"{vary}, Origin"
        else:
            response.headers["Vary"] = "Origin"
    return response


def reset_for_tests() -> None:
    global _STATE
    with _LOCK:
        _STATE = None
