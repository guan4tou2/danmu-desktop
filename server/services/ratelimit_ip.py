"""Rate-limit IP allow/deny rules — admin-controllable per-IP overrides.

Motivation: the four scoped rate limiters (fire/api/admin/login) treat every
source equally, which is fine 95% of the time but fails two real cases:

1. A friendly stress-test IP or a known-good ops workstation gets throttled
   just like a random visitor. Fix: allowlist entries skip *all* rate limits.
2. A bad actor's IP keeps burning through the fire lane's captcha budget,
   or a scraper keeps hitting /api. Fix: denylist entries 429 immediately,
   never consuming limiter budget or reaching handler code.

Storage mechanics (atomic write, RLock, one-shot warn on unwritable disk)
live in JsonState — see services/json_state.py.

Precedence rule when an IP matches both lists: **allow wins over deny**.
Rationale: the typical UX is "block a whole subnet then punch a hole for
staff" — inverting that means every allowlist entry needs a matching deny
removal, which is easy to forget. Documented in the admin UI.

Entries are CIDR strings (``1.2.3.4`` normalises to ``1.2.3.4/32``,
``10.0.0.0/8`` stays as-is). ``ipaddress.ip_network(strict=False)`` handles
both IPv4 and IPv6.
"""

from __future__ import annotations

import copy
import logging
from ipaddress import ip_address, ip_network
from typing import Any, Dict, Iterable, List, Optional

from .json_state import JsonState

logger = logging.getLogger(__name__)

_MAX_ENTRIES = 256  # per list — sane ceiling so admins can't paste MB of CIDRs

_DEFAULT_STATE: Dict[str, Any] = {"allowlist": [], "denylist": []}


def _default_state() -> Dict[str, Any]:
    return copy.deepcopy(_DEFAULT_STATE)


def _normalize_entries(entries: Any, *, field: str) -> List[str]:
    if entries is None:
        return []
    if not isinstance(entries, list):
        raise ValueError(f"{field} must be a list")
    if len(entries) > _MAX_ENTRIES:
        raise ValueError(f"{field} exceeds {_MAX_ENTRIES} entries")
    out: List[str] = []
    for raw in entries:
        entry = str(raw or "").strip()
        if not entry:
            continue
        try:
            network = ip_network(entry, strict=False)
        except ValueError as exc:
            raise ValueError(f"Invalid {field} entry: {entry}") from exc
        text = str(network)
        if text not in out:
            out.append(text)
    return out


def _normalize_state(data: Any) -> Dict[str, Any]:
    if not isinstance(data, dict):
        return _default_state()
    return {
        "allowlist": _normalize_entries(data.get("allowlist"), field="allowlist"),
        "denylist": _normalize_entries(data.get("denylist"), field="denylist"),
    }


_state = JsonState(
    "ratelimit_ip_rules.json",
    default=_default_state,
    normalize=_normalize_state,
)


def get_state() -> Dict[str, Any]:
    """Return the current {allowlist, denylist}. Hot-path cheap after warm-up."""
    return _state.get()


def set_state(patch: Dict[str, Any]) -> Dict[str, Any]:
    """Replace allowlist/denylist. Missing keys leave that list untouched.

    ``patch = {"allowlist": [...], "denylist": [...]}`` — either or both.
    Entries are validated + de-duplicated + normalised (``1.2.3.4`` →
    ``1.2.3.4/32``). Raises ``ValueError`` on invalid input.

    Disk failures are logged once and swallowed by JsonState; the in-memory
    cache always takes the change so admin UI stays responsive.
    """
    if not isinstance(patch, dict):
        raise ValueError("payload must be an object")
    return _state.update(patch)


def _matches(client_ip: str, entries: Iterable[str]) -> bool:
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


def check_ip(client_ip: str) -> Optional[str]:
    """Classify an IP for rate-limit short-circuit.

    Returns:
        ``"allow"`` — skip all rate limits for this request.
        ``"deny"`` — always 429, do not consume limiter budget.
        ``None`` — no rule matches; apply normal per-scope limits.

    Allow wins over deny when an IP is in both lists (documented in the
    admin UI). Falsy / malformed IPs get no override (``None``).
    """
    if not client_ip or client_ip == "unknown":
        return None
    state = get_state()
    if _matches(client_ip, state.get("allowlist") or []):
        return "allow"
    if _matches(client_ip, state.get("denylist") or []):
        return "deny"
    return None


def _reset_for_tests() -> None:
    """Drop the in-memory cache. Conftest fixtures should call
    ``_state.reset_for_tests(path)`` directly to redirect the storage
    location per test rather than reassigning module attributes.
    """
    _state.reset_for_tests()


def __getattr__(name: str):
    """Back-compat shim: expose ``_STATE_FILE`` for legacy test callsites.

    See services/ws_auth.py for the same pattern's rationale.
    """
    if name == "_STATE_FILE":
        return _state.path
    raise AttributeError(f"module 'server.services.ratelimit_ip' has no attribute {name!r}")
