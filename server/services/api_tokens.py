"""Admin API Token management service.

Tokens are stored in runtime/api_tokens.json as:
  {id, label, prefix, token_hash, scopes, expiry_days,
   created_at, last_used_at, last_used_ip, usage_count, enabled}

The raw token (api_<32hex>) is shown once on creation and never stored.
"""

import hashlib
import json
import logging
import os
import secrets
import threading
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

_TOKENS_FILE = os.path.join(os.path.dirname(__file__), "..", "runtime", "api_tokens.json")
_LOCK = threading.Lock()

VALID_SCOPES = frozenset({"read:history", "read:stats", "fire:danmu", "admin:*"})
EXPIRY_OPTIONS = {7: "7d", 30: "30d", 90: "90d", 0: "永久"}


def _load() -> List[Dict]:
    try:
        path = Path(_TOKENS_FILE)
        if path.exists():
            return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        logger.warning("api_tokens: load error: %s", exc)
    return []


def _save(tokens: List[Dict]) -> None:
    path = Path(_TOKENS_FILE)
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = str(path) + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(tokens, f, ensure_ascii=False, indent=2)
    os.replace(tmp, str(path))


def _hash(raw: str) -> str:
    return hashlib.sha256(raw.encode()).hexdigest()


def list_tokens() -> List[Dict]:
    with _LOCK:
        tokens = _load()
    # Never return token_hash in list
    return [{k: v for k, v in t.items() if k != "token_hash"} for t in tokens]


def create_token(label: str, scopes: List[str], expiry_days: int = 90) -> Dict:
    """Create a new token. Returns the record + raw token (shown once)."""
    label = label.strip()[:80]
    if not label:
        raise ValueError("label required")
    scopes = [s for s in scopes if s in VALID_SCOPES]
    if not scopes:
        raise ValueError("at least one valid scope required")
    if expiry_days not in (0, 7, 30, 90):
        expiry_days = 90

    raw = "api_" + secrets.token_hex(16)
    prefix = raw[:12]
    token_id = secrets.token_hex(4)
    now = datetime.now(timezone.utc).isoformat()

    if expiry_days:
        expires_at = (datetime.now(timezone.utc) + timedelta(days=expiry_days)).isoformat()
    else:
        expires_at = None

    record: Dict[str, Any] = {
        "id": token_id,
        "label": label,
        "prefix": prefix,
        "token_hash": _hash(raw),
        "scopes": scopes,
        "expiry_days": expiry_days,
        "expires_at": expires_at,
        "created_at": now,
        "last_used_at": None,
        "last_used_ip": None,
        "usage_count": 0,
        "enabled": True,
    }

    with _LOCK:
        tokens = _load()
        tokens.append(record)
        _save(tokens)

    visible = {k: v for k, v in record.items() if k != "token_hash"}
    visible["raw_token"] = raw
    return visible


def revoke_token(token_id: str) -> bool:
    with _LOCK:
        tokens = _load()
        before = len(tokens)
        tokens = [t for t in tokens if t["id"] != token_id]
        if len(tokens) == before:
            return False
        _save(tokens)
    return True


def update_token(token_id: str, updates: Dict) -> Optional[Dict]:
    allowed = {"label", "scopes", "enabled"}
    with _LOCK:
        tokens = _load()
        for t in tokens:
            if t["id"] == token_id:
                for k, v in updates.items():
                    if k in allowed:
                        if k == "scopes":
                            v = [s for s in v if s in VALID_SCOPES]
                        t[k] = v
                _save(tokens)
                return {k: v for k, v in t.items() if k != "token_hash"}
    return None


def record_usage(raw: str, client_ip: str) -> Optional[Dict]:
    """Called on authenticated API requests that use a token."""
    h = _hash(raw)
    now = datetime.now(timezone.utc).isoformat()
    with _LOCK:
        tokens = _load()
        for t in tokens:
            if t.get("token_hash") == h:
                if not t.get("enabled"):
                    return None
                if t.get("expires_at") and datetime.fromisoformat(t["expires_at"]) < datetime.now(timezone.utc):
                    return None
                t["last_used_at"] = now
                t["last_used_ip"] = client_ip
                t["usage_count"] = t.get("usage_count", 0) + 1
                _save(tokens)
                return t
    return None
