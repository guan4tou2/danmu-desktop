"""
Webhook 整合服務

支援 outbound webhooks（事件 -> HTTP POST）與 inbound 簽名驗證。
格式：json / discord / slack
持久化：webhooks.json
執行緒安全，使用 urllib.request（無額外依賴）。
"""

import hashlib
import hmac
import json
import logging
import threading
import time
import urllib.error
import urllib.request
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

from server.config import Config

logger = logging.getLogger(__name__)

_WEBHOOKS_FILE = Path(Config.WEBHOOKS_PATH)
_MAX_HOOKS = 20
_REQUEST_TIMEOUT = 10  # seconds
_VALID_FORMATS = {"json", "discord", "slack"}
_VALID_EVENTS = {"on_danmu", "on_poll_create", "on_poll_end"}


class WebhookConfig:
    """Single webhook registration."""

    __slots__ = (
        "id",
        "url",
        "events",
        "format",
        "secret",
        "enabled",
        "retry_count",
        "last_status",
        "last_error",
        "created_at",
    )

    def __init__(
        self,
        *,
        url: str,
        events: List[str],
        format: str = "json",
        secret: str = "",
        enabled: bool = True,
        retry_count: int = 3,
        id: Optional[str] = None,
        last_status: Optional[int] = None,
        last_error: Optional[str] = None,
        created_at: Optional[str] = None,
    ) -> None:
        self.id: str = id or uuid.uuid4().hex[:8]
        self.url: str = url
        self.events: List[str] = [e for e in events if e in _VALID_EVENTS]
        self.format: str = format if format in _VALID_FORMATS else "json"
        self.secret: str = secret
        self.enabled: bool = enabled
        self.retry_count: int = max(0, min(retry_count, 10))
        self.last_status: Optional[int] = last_status
        self.last_error: Optional[str] = last_error
        self.created_at: str = created_at or datetime.now(timezone.utc).isoformat()

    def to_dict(self) -> Dict[str, Any]:
        return {
            "id": self.id,
            "url": self.url,
            "events": self.events,
            "format": self.format,
            "secret": self.secret,
            "enabled": self.enabled,
            "retry_count": self.retry_count,
            "last_status": self.last_status,
            "last_error": self.last_error,
            "created_at": self.created_at,
        }

    @classmethod
    def from_dict(cls, d: Dict[str, Any]) -> "WebhookConfig":
        return cls(
            id=d.get("id"),
            url=d.get("url", ""),
            events=d.get("events", []),
            format=d.get("format", "json"),
            secret=d.get("secret", ""),
            enabled=d.get("enabled", True),
            retry_count=d.get("retry_count", 3),
            last_status=d.get("last_status"),
            last_error=d.get("last_error"),
            created_at=d.get("created_at"),
        )


class WebhookService:
    """Singleton webhook manager — thread-safe, file-backed persistence."""

    _instance: Optional["WebhookService"] = None
    _init_lock = threading.Lock()

    def __new__(cls) -> "WebhookService":
        if cls._instance is None:
            with cls._init_lock:
                if cls._instance is None:
                    inst = super().__new__(cls)
                    inst._hooks: Dict[str, WebhookConfig] = {}
                    inst._lock = threading.Lock()
                    inst._load()
                    cls._instance = inst
        return cls._instance

    # ── Persistence ──────────────────────────────────────────────────────

    def _load(self) -> None:
        """Load webhooks from JSON file (called once at init, under no lock).

        Legacy migration: v4.7.0 moved default to server/runtime/webhooks.json.
        Migration only runs when _WEBHOOKS_FILE is the current default
        (Config.WEBHOOKS_PATH) — tests that monkeypatch _WEBHOOKS_FILE to a
        tmp path stay isolated.
        """
        if not _WEBHOOKS_FILE.exists():
            default_is_current = str(_WEBHOOKS_FILE) == str(Config.WEBHOOKS_PATH)
            legacy = Path(__file__).parent.parent / "webhooks.json"
            if (
                default_is_current
                and legacy.is_file()
                and legacy.resolve() != _WEBHOOKS_FILE.resolve()
            ):
                try:
                    # shutil.copy2 preserves mtime + permissions. Matters here
                    # because webhooks.json can contain secrets — we want to
                    # carry over any restrictive chmod (e.g. 600) the operator
                    # set, not fall back to umask defaults.
                    import shutil

                    _WEBHOOKS_FILE.parent.mkdir(parents=True, exist_ok=True)
                    shutil.copy2(legacy, _WEBHOOKS_FILE)
                    logger.info("Migrated legacy webhooks %s -> %s", legacy, _WEBHOOKS_FILE)
                except Exception:
                    logger.exception("Failed to migrate legacy webhooks")
                    return
            else:
                return
        try:
            raw = json.loads(_WEBHOOKS_FILE.read_text(encoding="utf-8"))
            for entry in raw:
                hook = WebhookConfig.from_dict(entry)
                self._hooks[hook.id] = hook
            logger.info("Loaded %d webhook(s) from %s", len(self._hooks), _WEBHOOKS_FILE)
        except Exception:
            logger.exception("Failed to load webhooks from %s", _WEBHOOKS_FILE)

    def _save(self) -> None:
        """Persist current hooks to JSON. Caller must hold self._lock."""
        try:
            data = [h.to_dict() for h in self._hooks.values()]
            tmp = _WEBHOOKS_FILE.with_suffix(".tmp")
            tmp.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
            tmp.replace(_WEBHOOKS_FILE)
        except Exception:
            logger.exception("Failed to save webhooks to %s", _WEBHOOKS_FILE)

    # ── CRUD ─────────────────────────────────────────────────────────────

    def register(self, config_data: Dict[str, Any]) -> str:
        """Register a new webhook. Returns the hook id.

        Raises ValueError if limit reached or url is missing.
        """
        url = (config_data.get("url") or "").strip()
        if not url:
            raise ValueError("url is required")

        with self._lock:
            if len(self._hooks) >= _MAX_HOOKS:
                raise ValueError(f"Maximum of {_MAX_HOOKS} webhooks reached")

            hook = WebhookConfig(
                url=url,
                events=config_data.get("events", []),
                format=config_data.get("format", "json"),
                secret=config_data.get("secret", ""),
                enabled=config_data.get("enabled", True),
                retry_count=config_data.get("retry_count", 3),
            )
            self._hooks[hook.id] = hook
            self._save()
            logger.info("Registered webhook %s -> %s", hook.id, hook.url)
            return hook.id

    def unregister(self, hook_id: str) -> bool:
        """Remove a webhook by id. Returns True if it existed."""
        with self._lock:
            if hook_id not in self._hooks:
                return False
            del self._hooks[hook_id]
            self._save()
            logger.info("Unregistered webhook %s", hook_id)
            return True

    def get_hook(self, hook_id: str) -> Optional[Dict[str, Any]]:
        """Return a single hook by id (unredacted, for internal verification)."""
        with self._lock:
            hook = self._hooks.get(hook_id)
            return hook.to_dict() if hook else None

    def list_hooks(self) -> List[Dict[str, Any]]:
        """Return all hooks as dicts (secrets redacted)."""
        with self._lock:
            result = []
            for h in self._hooks.values():
                d = h.to_dict()
                if d["secret"]:
                    d["secret"] = "***"
                result.append(d)
            return result

    def update_hook(self, hook_id: str, data: Dict[str, Any]) -> bool:
        """Update mutable fields of an existing hook. Returns True if found."""
        with self._lock:
            hook = self._hooks.get(hook_id)
            if hook is None:
                return False

            if "url" in data:
                url = (data["url"] or "").strip()
                if url:
                    hook.url = url
            if "events" in data:
                hook.events = [e for e in data["events"] if e in _VALID_EVENTS]
            if "format" in data:
                fmt = data["format"]
                if fmt in _VALID_FORMATS:
                    hook.format = fmt
            if "secret" in data:
                hook.secret = data["secret"]
            if "enabled" in data:
                hook.enabled = bool(data["enabled"])
            if "retry_count" in data:
                hook.retry_count = max(0, min(int(data["retry_count"]), 10))

            self._save()
            logger.info("Updated webhook %s", hook_id)
            return True

    # ── Emit ─────────────────────────────────────────────────────────────

    def emit(self, event: str, data: Any) -> None:
        """Fire-and-forget: spawn a thread for each matching enabled hook."""
        with self._lock:
            targets = [h for h in self._hooks.values() if h.enabled and event in h.events]

        for hook in targets:
            t = threading.Thread(
                target=self._send_webhook,
                args=(hook, event, data),
                daemon=True,
            )
            t.start()

    # ── Send (runs in worker thread) ─────────────────────────────────────

    def _send_webhook(self, hook: WebhookConfig, event: str, data: Any) -> None:
        """Format, sign, and POST the webhook payload with retries."""
        payload_bytes = self._format_payload(hook, event, data)
        signature = ""
        if hook.secret:
            signature = hmac.new(
                hook.secret.encode("utf-8"),
                payload_bytes,
                hashlib.sha256,
            ).hexdigest()

        last_exc: Optional[Exception] = None
        attempts = hook.retry_count + 1  # first try + retries

        for attempt in range(attempts):
            if attempt > 0:
                backoff = 2 ** (attempt - 1)  # 1s, 2s, 4s, ...
                time.sleep(backoff)

            try:
                req = urllib.request.Request(
                    hook.url,
                    data=payload_bytes,
                    method="POST",
                    headers={
                        "Content-Type": "application/json",
                        "User-Agent": "DanmuDesktop-Webhook/1.0",
                    },
                )
                if signature:
                    req.add_header("X-Webhook-Signature", signature)

                with urllib.request.urlopen(req, timeout=_REQUEST_TIMEOUT) as resp:
                    status = resp.status
                    self._update_status(hook.id, status, None)
                    logger.debug(
                        "Webhook %s -> %s [%d] (attempt %d)",
                        hook.id,
                        event,
                        status,
                        attempt + 1,
                    )
                    return  # success

            except Exception as exc:
                last_exc = exc
                logger.warning(
                    "Webhook %s attempt %d/%d failed: %s",
                    hook.id,
                    attempt + 1,
                    attempts,
                    exc,
                )

        # all retries exhausted
        error_msg = str(last_exc) if last_exc else "unknown error"
        self._update_status(hook.id, None, error_msg)
        logger.error("Webhook %s failed after %d attempts: %s", hook.id, attempts, error_msg)

    def _update_status(self, hook_id: str, status: Optional[int], error: Optional[str]) -> None:
        """Persist last_status / last_error for a hook."""
        with self._lock:
            hook = self._hooks.get(hook_id)
            if hook is None:
                return
            hook.last_status = status
            hook.last_error = error
            self._save()

    # ── Payload formatting ───────────────────────────────────────────────

    @staticmethod
    def _format_payload(hook: WebhookConfig, event: str, data: Any) -> bytes:
        """Build the JSON payload bytes based on hook.format."""
        timestamp = datetime.now(timezone.utc).isoformat()

        # Ensure data is dict-like for field access; fall back gracefully.
        text = ""
        if isinstance(data, dict):
            text = str(data.get("text", ""))
        elif isinstance(data, str):
            text = data
        else:
            text = str(data) if data is not None else ""

        if hook.format == "discord":
            payload = {
                "embeds": [
                    {
                        "title": event,
                        "description": text,
                        "color": 0x7C3AED,
                    }
                ]
            }
        elif hook.format == "slack":
            payload = {
                "blocks": [
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": f"*{event}*\n{text}",
                        },
                    }
                ]
            }
        else:
            # default: json
            payload = {
                "event": event,
                "data": (
                    data
                    if isinstance(data, (dict, list, str, int, float, bool, type(None)))
                    else str(data)
                ),
                "timestamp": timestamp,
            }

        return json.dumps(payload, ensure_ascii=False).encode("utf-8")

    # ── Inbound verification ─────────────────────────────────────────────

    @staticmethod
    def verify_incoming(payload_bytes: bytes, signature: str, secret: str) -> bool:
        """Verify an inbound webhook's HMAC-SHA256 signature.

        Returns True if the signature matches, False otherwise.
        """
        if not secret or not signature:
            return False
        expected = hmac.new(
            secret.encode("utf-8"),
            payload_bytes,
            hashlib.sha256,
        ).hexdigest()
        return hmac.compare_digest(expected, signature)


# ── Module-level lazy proxy ───────────────────────────────────────────────


class _WebhookServiceProxy:
    """Resolve the singleton lazily so tests can reset/patch it reliably."""

    def __getattr__(self, name: str):
        return getattr(WebhookService(), name)


webhook_service = _WebhookServiceProxy()
