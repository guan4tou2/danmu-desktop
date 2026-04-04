import logging
from pathlib import Path
from unittest.mock import MagicMock

import pytest

from server import state
from server.app import create_app
from server.services.security import (
    InMemoryRateLimiter,
    RedisRateLimiter,
    generate_font_token,
    hash_password,
    issue_csrf_token,
    verify_password,
)
from server.services.webhook import WebhookService
from server.services.ws_state import update_ws_client_count
from server.startup_warnings import log_ws_auth_warnings


def login(client):
    return client.post(
        "/login",
        data={"password": "test"},
        follow_redirects=True,
    )


def test_admin_update_requires_csrf(client):
    login(client)
    with client.session_transaction() as sess:
        token = sess["csrf_token"]

    payload = {"type": "Speed", "index": 3, "value": 5}
    res = client.post("/admin/update", json=payload)
    assert res.status_code == 403

    res = client.post(
        "/admin/update",
        json=payload,
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200


def test_fire_rate_limit(client):
    # ensure there is mock ws client connected
    update_ws_client_count(1)
    payload = {
        "text": "hello",
        "fontInfo": {"name": "NotoSansTC"},
        "isImage": False,
    }

    first = client.post("/fire", json=payload)
    second = client.post("/fire", json=payload)
    assert first.status_code == 200
    assert second.status_code == 200
    third = client.post("/fire", json=payload)
    assert third.status_code == 429


def test_font_download_requires_token(client, tmp_path):
    fonts_dir = Path(state.USER_FONTS_DIR)
    test_font = fonts_dir / "Sample.ttf"
    test_font.write_text("data")

    with client.application.app_context():
        token = generate_font_token("Sample.ttf")
    url = f"/user_fonts/Sample.ttf?token={token}"

    unauthorized = client.get("/user_fonts/Sample.ttf")
    assert unauthorized.status_code == 403

    bad = client.get("/user_fonts/Sample.ttf?token=bad")
    assert bad.status_code == 403

    authorized = client.get(url)
    assert authorized.status_code == 200


# ─── hash_password / verify_password ─────────────────────────────────────────


def test_hash_and_verify_password():
    hashed = hash_password("my-secure-password")
    assert verify_password("my-secure-password", hashed)
    assert not verify_password("wrong-password", hashed)


def test_hash_produces_different_salts():
    h1 = hash_password("same")
    h2 = hash_password("same")
    assert h1 != h2  # bcrypt 每次 salt 不同
    assert verify_password("same", h1)
    assert verify_password("same", h2)


def test_verify_password_invalid_hash():
    assert not verify_password("any", "not-a-valid-bcrypt-hash")


def test_ws_require_token_disabled_emits_startup_warning(caplog):
    logger = logging.getLogger("test.ws-warning")

    with caplog.at_level(logging.WARNING):
        log_ws_auth_warnings(
            logger,
            {
                "WS_REQUIRE_TOKEN": False,
                "WS_HOST": "127.0.0.1",
                "WS_PORT": 4001,
                "ENV": "development",
            },
        )

    assert "WS_REQUIRE_TOKEN is disabled" in caplog.text
    assert "reachable without token auth" not in caplog.text


def test_ws_require_token_disabled_on_public_host_emits_stronger_warning(caplog):
    logger = logging.getLogger("test.ws-warning-public")

    with caplog.at_level(logging.WARNING):
        log_ws_auth_warnings(
            logger,
            {
                "WS_REQUIRE_TOKEN": False,
                "WS_HOST": "0.0.0.0",
                "WS_PORT": 4001,
                "ENV": "production",
            },
        )

    assert "WS_REQUIRE_TOKEN is disabled" in caplog.text
    assert "reachable without token auth" in caplog.text


def test_production_requires_explicit_secret_key():
    class ProdConfig:
        ENV = "production"
        TESTING = True
        SECRET_KEY = "generated-for-test"
        SECRET_KEY_FROM_ENV = False
        ADMIN_PASSWORD = "correct horse battery staple"
        ADMIN_PASSWORD_HASHED = ""
        SESSION_COOKIE_SECURE = True
        TRUSTED_HOSTS = ["example.com"]
        WS_REQUIRE_TOKEN = False
        WS_AUTH_TOKEN = ""
        WS_HOST = "127.0.0.1"
        WS_PORT = 4001
        LOG_LEVEL = "INFO"
        RATE_LIMIT_BACKEND = "memory"
        SETTINGS_FILE = "/tmp/test-danmu-settings.json"

    with pytest.raises(RuntimeError, match="SECRET_KEY"):
        create_app(ProdConfig)


def test_production_requires_secure_session_cookie():
    class ProdConfig:
        ENV = "production"
        TESTING = True
        SECRET_KEY = "provided-secret"
        SECRET_KEY_FROM_ENV = True
        ADMIN_PASSWORD = "correct horse battery staple"
        ADMIN_PASSWORD_HASHED = ""
        SESSION_COOKIE_SECURE = False
        TRUSTED_HOSTS = ["example.com"]
        WS_REQUIRE_TOKEN = False
        WS_AUTH_TOKEN = ""
        WS_HOST = "127.0.0.1"
        WS_PORT = 4001
        LOG_LEVEL = "INFO"
        RATE_LIMIT_BACKEND = "memory"
        SETTINGS_FILE = "/tmp/test-danmu-settings.json"

    with pytest.raises(RuntimeError, match="SESSION_COOKIE_SECURE"):
        create_app(ProdConfig)


def test_production_requires_trusted_hosts():
    class ProdConfig:
        ENV = "production"
        TESTING = True
        SECRET_KEY = "provided-secret"
        SECRET_KEY_FROM_ENV = True
        ADMIN_PASSWORD = "correct horse battery staple"
        ADMIN_PASSWORD_HASHED = ""
        SESSION_COOKIE_SECURE = True
        TRUSTED_HOSTS = None
        WS_REQUIRE_TOKEN = False
        WS_AUTH_TOKEN = ""
        WS_HOST = "127.0.0.1"
        WS_PORT = 4001
        LOG_LEVEL = "INFO"
        RATE_LIMIT_BACKEND = "memory"
        SETTINGS_FILE = "/tmp/test-danmu-settings.json"

    with pytest.raises(RuntimeError, match="TRUSTED_HOSTS"):
        create_app(ProdConfig)


def test_production_allows_safe_security_baseline():
    class ProdConfig:
        ENV = "production"
        TESTING = True
        SECRET_KEY = "provided-secret"
        SECRET_KEY_FROM_ENV = True
        ADMIN_PASSWORD = "correct horse battery staple"
        ADMIN_PASSWORD_HASHED = ""
        SESSION_COOKIE_SECURE = True
        TRUSTED_HOSTS = ["example.com"]
        WS_REQUIRE_TOKEN = False
        WS_AUTH_TOKEN = ""
        WS_HOST = "127.0.0.1"
        WS_PORT = 4001
        LOG_LEVEL = "INFO"
        RATE_LIMIT_BACKEND = "memory"
        SETTINGS_FILE = "/tmp/test-danmu-settings.json"

    app = create_app(ProdConfig)

    assert app.config["ENV"] == "production"


def test_default_test_app_uses_isolated_webhook_store(client):
    WebhookService._instance = None
    assert WebhookService().list_hooks() == []


# ─── issue_csrf_token ────────────────────────────────────────────────────────


def test_issue_csrf_token_is_64_char_hex():
    token = issue_csrf_token()
    assert isinstance(token, str)
    assert len(token) == 64
    int(token, 16)  # 必須是有效 hex，否則拋 ValueError


def test_issue_csrf_token_unique():
    assert issue_csrf_token() != issue_csrf_token()


# ─── InMemoryRateLimiter ──────────────────────────────────────────────────────


def test_rate_limiter_allows_within_limit():
    limiter = InMemoryRateLimiter()
    assert limiter.allow("k", 3, 60)
    assert limiter.allow("k", 3, 60)
    assert limiter.allow("k", 3, 60)
    assert not limiter.allow("k", 3, 60)


def test_rate_limiter_reset_clears_history():
    limiter = InMemoryRateLimiter()
    limiter.allow("k", 1, 60)  # exhausted
    assert not limiter.allow("k", 1, 60)
    limiter.reset()
    assert limiter.allow("k", 1, 60)  # after reset → allowed


def test_rate_limiter_different_keys_independent():
    limiter = InMemoryRateLimiter()
    limiter.allow("a", 1, 60)
    assert not limiter.allow("a", 1, 60)  # "a" exhausted
    assert limiter.allow("b", 1, 60)  # "b" unaffected


def test_rate_limiter_window_expiry():
    import time

    limiter = InMemoryRateLimiter()
    assert limiter.allow("w", 1, 0.05)  # limit=1, window=0.05s
    assert not limiter.allow("w", 1, 0.05)  # blocked
    time.sleep(0.1)
    assert limiter.allow("w", 1, 0.05)  # window expired → allowed


def test_redis_rate_limiter_allow_uses_atomic_eval():
    limiter = RedisRateLimiter.__new__(RedisRateLimiter)
    limiter.client = MagicMock()
    limiter.client.eval.return_value = 1

    allowed = limiter.allow("ip:127.0.0.1", 10, 60)

    assert allowed is True
    limiter.client.eval.assert_called_once()


def test_redis_rate_limiter_rejects_when_eval_returns_zero():
    limiter = RedisRateLimiter.__new__(RedisRateLimiter)
    limiter.client = MagicMock()
    limiter.client.eval.return_value = 0

    allowed = limiter.allow("ip:127.0.0.1", 1, 60)

    assert allowed is False


# ─── timing-safe password comparison ─────────────────────────────────────────


def test_login_plaintext_uses_hmac_compare_digest(client, app):
    """Plaintext password path must use constant-time comparison."""
    from unittest.mock import patch

    app.config["ADMIN_PASSWORD"] = "testpass"
    app.config["ADMIN_PASSWORD_HASHED"] = ""

    with patch("server.routes.main.hmac") as mock_hmac:
        mock_hmac.compare_digest.return_value = True
        client.post("/login", data={"password": "testpass"})
        mock_hmac.compare_digest.assert_called_once()


def test_save_and_load_runtime_hash_roundtrip(tmp_path, app, monkeypatch):
    """save_runtime_hash -> load_runtime_hash should return the same hash."""
    import server.config as config_module

    hash_file = tmp_path / "admin_hash"
    monkeypatch.setattr(config_module, "_HASH_FILE", hash_file)

    test_hash = "$2b$12$somehashedvalue"
    config_module.save_runtime_hash(test_hash)

    loaded = config_module.load_runtime_hash()
    assert loaded == test_hash


def test_save_runtime_hash_sets_restrictive_permissions(tmp_path, app, monkeypatch):
    """Hash file should have 0o600 permissions."""
    import os
    import stat

    import server.config as config_module

    hash_file = tmp_path / "admin_hash"
    monkeypatch.setattr(config_module, "_HASH_FILE", hash_file)

    config_module.save_runtime_hash("testhash")
    mode = stat.S_IMODE(os.stat(str(hash_file)).st_mode)
    assert mode == 0o600


def test_verify_current_password_plaintext_uses_hmac(client, app):
    """_verify_current_password plaintext path must use constant-time comparison."""
    from unittest.mock import patch

    app.config["ADMIN_PASSWORD"] = "oldpass"
    app.config["ADMIN_PASSWORD_HASHED"] = ""

    with patch("server.routes.main.hmac") as mock_hmac:
        mock_hmac.compare_digest.return_value = True
        client.post("/login", data={"password": "oldpass"})
        with client.session_transaction() as sess:
            sess["logged_in"] = True
        client.post(
            "/admin/change_password",
            json={
                "current_password": "oldpass",
                "new_password": "newpass123",
                "confirm_password": "newpass123",
            },
            headers={"X-CSRFToken": "test"},
        )
        assert mock_hmac.compare_digest.call_count >= 1
