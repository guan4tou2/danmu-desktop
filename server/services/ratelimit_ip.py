"""Rate-limit IP allow/deny rules — admin-controllable per-IP overrides.

Motivation: the four scoped rate limiters (fire/api/admin/login) treat every
source equally, which is fine 95% of the time but fails two real cases:

1. A friendly stress-test IP or a known-good ops workstation gets throttled
   just like a random visitor. Fix: allowlist entries skip *all* rate limits.
2. A bad actor's IP keeps burning through the fire lane's captcha budget,
   or a scraper keeps hitting /api. Fix: denylist entries 429 immediately,
   never consuming limiter budget or reaching handler code.

Data lives at ``server/runtime/ratelimit_ip_rules.json`` — same persistence
pattern as ``ws_auth.py`` and ``security_settings.py``:

- atomic tmp-then-rename write
- one-shot log on unwritable disk, then degrade to in-memory-only
- RLock around cache + disk
- get_state() called per-request, so first call primes the cache

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
import json
import logging
import os
import threading
from ipaddress import ip_address, ip_network
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional

logger = logging.getLogger(__name__)

_STATE_FILE = Path(__file__).resolve().parent.parent / "runtime" / "ratelimit_ip_rules.json"
_LOCK = threading.RLock()
_STATE: Optional[Dict[str, Any]] = None
_write_failure_logged: bool = False

_MAX_ENTRIES = 256  # per list — sane ceiling so admins can't paste MB of CIDRs

_DEFAULT_STATE: Dict[str, Any] = {"allowlist": [], "denylist": []}


def _default_state() -> Dict[str, Any]:
    return copy.deepcopy(_DEFAULT_STATE)


def _atomic_write(path: Path, state: Dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(f".tmp.{os.getpid()}.{threading.get_ident()}")
    with tmp.open("w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False, indent=2)
    tmp.replace(path)


def _log_write_failure_once(exc: Exception) -> None:
    global _write_failure_logged
    if _write_failure_logged:
        logger.debug("ratelimit_ip persist still failing: %s", exc)
        return
    _write_failure_logged = True
    logger.warning(
        "Cannot persist %s (%s: %s). IP rules will live in memory for this "
        "process only — admin changes won't survive a restart. Common cause: "
        "host bind-mount owned by wrong UID. Fix: `sudo chown -R 1000:1000 "
        "server/runtime` on the host, then recreate the container.",
        _STATE_FILE,
        type(exc).__name__,
        exc,
    )


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


def _load_from_disk() -> Dict[str, Any]:
    if not _STATE_FILE.exists():
        return _default_state()
    try:
        data = json.loads(_STATE_FILE.read_text(encoding="utf-8"))
    except Exception as exc:
        logger.warning("ratelimit_ip: failed to read %s: %s", _STATE_FILE, exc)
        return _default_state()
    try:
        return _normalize_state(data)
    except ValueError as exc:
        logger.warning("ratelimit_ip: ignoring invalid state file %s: %s", _STATE_FILE, exc)
        return _default_state()


def get_state() -> Dict[str, Any]:
    """Return the current {allowlist, denylist}. Hot-path cheap after warm-up."""
    global _STATE
    with _LOCK:
        if _STATE is None:
            _STATE = _load_from_disk()
        return copy.deepcopy(_STATE)


def set_state(patch: Dict[str, Any]) -> Dict[str, Any]:
    """Replace allowlist/denylist. Missing keys leave that list untouched.

    ``patch = {"allowlist": [...], "denylist": [...]}`` — either or both.
    Entries are validated + de-duplicated + normalised (``1.2.3.4`` →
    ``1.2.3.4/32``). Raises ``ValueError`` on invalid input.

    Disk failures are logged once and swallowed; the in-memory cache always
    takes the change so admin UI stays responsive.
    """
    if not isinstance(patch, dict):
        raise ValueError("payload must be an object")

    global _STATE
    with _LOCK:
        current = get_state()
        merged = copy.deepcopy(current)
        if "allowlist" in patch:
            merged["allowlist"] = _normalize_entries(patch.get("allowlist"), field="allowlist")
        if "denylist" in patch:
            merged["denylist"] = _normalize_entries(patch.get("denylist"), field="denylist")
        _STATE = merged
        try:
            _atomic_write(_STATE_FILE, merged)
        except OSError as exc:
            _log_write_failure_once(exc)
        return copy.deepcopy(_STATE)


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
    """Drop in-memory cache. Tests should monkeypatch _STATE_FILE first."""
    global _STATE, _write_failure_logged
    with _LOCK:
        _STATE = None
        _write_failure_logged = False
