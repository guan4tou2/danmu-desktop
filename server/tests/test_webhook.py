# pyright: reportMissingImports=false

"""Tests for server.services.webhook — WebhookService."""

import hashlib
import hmac
import threading
from unittest.mock import MagicMock, patch

import pytest

from server.services.webhook import _MAX_HOOKS, WebhookService  # ty: ignore[unresolved-import]


@pytest.fixture(autouse=True)
def _reset_webhook_singleton(tmp_path):
    """Reset singleton state and redirect persistence to a temp file."""
    # Clear singleton so each test gets a fresh instance
    WebhookService._instance = None

    # Redirect persistence file to tmp_path so tests don't pollute real data
    tmp_file = tmp_path / "webhooks.json"
    with patch("server.services.webhook._WEBHOOKS_FILE", tmp_file):
        yield

    WebhookService._instance = None


def _make_service() -> WebhookService:
    return WebhookService()


def _sample_config(**overrides):
    base = {
        "url": "https://example.com/hook",
        "events": ["on_danmu"],
        "format": "json",
        "secret": "s3cret",
    }
    base.update(overrides)
    return base


# ── 1. Register returns hook_id ──────────────────────────────────────────


def test_register_returns_hook_id():
    svc = _make_service()
    hook_id = svc.register(_sample_config())
    assert isinstance(hook_id, str)
    assert len(hook_id) > 0


# ── 2. List hooks shows registered hook ──────────────────────────────────


def test_list_hooks_shows_registered():
    svc = _make_service()
    hook_id = svc.register(_sample_config(url="https://a.com/h"))
    hooks = svc.list_hooks()
    assert len(hooks) == 1
    assert hooks[0]["id"] == hook_id
    assert hooks[0]["url"] == "https://a.com/h"


# ── 3. List hooks redacts secret ─────────────────────────────────────────


def test_list_hooks_redacts_secret():
    svc = _make_service()
    svc.register(_sample_config(secret="super-secret"))
    hooks = svc.list_hooks()
    assert hooks[0]["secret"] == "***"


# ── 4. Unregister removes hook ───────────────────────────────────────────


def test_unregister_removes_hook():
    svc = _make_service()
    hook_id = svc.register(_sample_config())
    assert svc.unregister(hook_id) is True
    assert svc.list_hooks() == []


# ── 5. Unregister non-existent returns False ─────────────────────────────


def test_unregister_nonexistent():
    svc = _make_service()
    assert svc.unregister("does-not-exist") is False


# ── 6. Max 20 webhooks limit ────────────────────────────────────────────


def test_max_webhooks_limit():
    svc = _make_service()
    for i in range(_MAX_HOOKS):
        svc.register(_sample_config(url=f"https://example.com/{i}"))

    with pytest.raises(ValueError, match="Maximum"):
        svc.register(_sample_config(url="https://example.com/overflow"))

    assert len(svc.list_hooks()) == _MAX_HOOKS


# ── 7. verify_incoming correct HMAC ─────────────────────────────────────


def test_verify_incoming_correct():
    secret = "my-key"
    payload = b'{"event":"on_danmu"}'
    sig = hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()
    assert WebhookService.verify_incoming(payload, sig, secret) is True


# ── 8. verify_incoming wrong signature ───────────────────────────────────


def test_verify_incoming_wrong_signature():
    payload = b'{"event":"on_danmu"}'
    assert WebhookService.verify_incoming(payload, "badsig", "my-key") is False


# ── 9. emit spawns threads for matching hooks ────────────────────────────


def test_emit_spawns_threads(monkeypatch):
    svc = _make_service()
    svc.register(_sample_config(url="https://a.com/h1", events=["on_danmu"], secret=""))
    svc.register(_sample_config(url="https://b.com/h2", events=["on_danmu"], secret=""))

    mock_urlopen = MagicMock()
    mock_urlopen.__enter__ = MagicMock(return_value=MagicMock(status=200))
    mock_urlopen.__exit__ = MagicMock(return_value=False)

    started_threads: list = []
    original_thread_init = threading.Thread.__init__

    def tracking_init(self, *args, **kwargs):
        original_thread_init(self, *args, **kwargs)
        started_threads.append(self)

    with (
        patch("urllib.request.urlopen", return_value=mock_urlopen),
        patch.object(threading.Thread, "__init__", tracking_init),
    ):
        svc.emit("on_danmu", {"text": "hello"})

    assert len(started_threads) == 2


# ── 10. emit only triggers hooks matching the event ──────────────────────


def test_emit_filters_by_event():
    svc = _make_service()
    svc.register(_sample_config(url="https://a.com/danmu", events=["on_danmu"], secret=""))
    svc.register(_sample_config(url="https://b.com/poll", events=["on_poll_create"], secret=""))

    calls: list = []

    def fake_send(hook, event, data):
        calls.append(hook.url)

    with patch.object(svc, "_send_webhook", side_effect=fake_send):
        svc.emit("on_danmu", {"text": "hi"})
        # Wait briefly for daemon threads
        import time

        time.sleep(0.2)

    assert len(calls) == 1
    assert calls[0] == "https://a.com/danmu"


# ── 11. update_hook changes URL or events ────────────────────────────────


def test_update_hook():
    svc = _make_service()
    hook_id = svc.register(_sample_config(url="https://old.com", events=["on_danmu"]))

    result = svc.update_hook(
        hook_id,
        {
            "url": "https://new.com",
            "events": ["on_poll_create", "on_poll_end"],
        },
    )
    assert result is True

    hooks = svc.list_hooks()
    assert hooks[0]["url"] == "https://new.com"
    assert set(hooks[0]["events"]) == {"on_poll_create", "on_poll_end"}


def test_update_hook_nonexistent():
    svc = _make_service()
    assert svc.update_hook("nope", {"url": "https://x.com"}) is False


# ── 出站 URL：擋 link-local、放行區網（2026-09-08）──────────────────────────


@pytest.mark.parametrize(
    "url",
    [
        "https://discord.com/api/webhooks/abc",
        "http://192.168.1.50:3000/hook",  # 區網服務
        "http://10.0.0.5/hook",  # 區網服務
        "http://172.16.0.9/hook",  # 區網服務
        "http://localhost:9000/hook",  # 同機 sidecar
        "https://hooks.internal.example/x",
    ],
)
def test_outbound_url_allows_normal_and_lan_targets(url):
    """私有網段**刻意放行**。

    這是自架軟體：「把彈幕轉發到區網裡的一台服務」是真實且常見的用法。
    這支測試存在的目的，是讓之後任何想「順手把私網也擋掉」的改動先撞到它、
    先看到這段理由，而不是靜悄悄弄壞現場。
    """
    from server.services.webhook import _reject_link_local

    _reject_link_local(url)  # 不該丟例外


@pytest.mark.parametrize(
    "url",
    [
        "http://169.254.169.254/latest/meta-data/",  # AWS/GCP/Azure/Oracle metadata
        "http://169.254.1.1/x",
        "http://[fe80::1]/x",
    ],
)
def test_outbound_url_rejects_link_local(url):
    """link-local 永遠不是合法的 webhook 目標；擋的主要是雲端 metadata。"""
    from server.services.webhook import _reject_link_local

    with pytest.raises(ValueError):
        _reject_link_local(url)


def test_webhook_schema_rejects_non_http_schemes():
    """marshmallow 的 fields.Url 預設放行 ftp/ftps —— 這裡收成 http/https。"""
    from server.services.validation import WebhookSchema, validate_request

    ok, errors = validate_request(
        WebhookSchema, {"url": "https://example.com/h", "events": ["on_danmu"]}
    )
    assert not errors, errors

    _, errors = validate_request(
        WebhookSchema, {"url": "ftp://example.com/h", "events": ["on_danmu"]}
    )
    assert errors and "url" in errors
