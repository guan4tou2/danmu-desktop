import logging
import time
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

    payload = {"type": "Speed", "index": 3, "value": 1.5}
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
    from server.services import ws_auth

    # v4.8+: startup_warnings reads live state from ws_auth service, not
    # from the passed Config dict. Explicitly put the service in the
    # "disabled" state that the test is documenting.
    ws_auth.set_state(require_token=False, token="")

    logger = logging.getLogger("test.ws-warning")

    with caplog.at_level(logging.WARNING):
        log_ws_auth_warnings(
            logger,
            {
                "WS_HOST": "127.0.0.1",
                "WS_PORT": 4001,
                "ENV": "development",
            },
        )

    assert "WS token auth is disabled" in caplog.text
    assert "reachable without token auth" not in caplog.text


def test_ws_require_token_disabled_on_public_host_emits_stronger_warning(caplog):
    from server.services import ws_auth

    ws_auth.set_state(require_token=False, token="")

    logger = logging.getLogger("test.ws-warning-public")

    with caplog.at_level(logging.WARNING):
        log_ws_auth_warnings(
            logger,
            {
                "WS_HOST": "0.0.0.0",
                "WS_PORT": 4001,
                "ENV": "production",
            },
        )

    assert "WS token auth is disabled" in caplog.text
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


def test_rate_limit_records_hits_and_violations(client, app):
    """The rate_limit decorator must feed the module-level counters so
    /admin/metrics can surface hits/violations to the v2 summary strip."""
    from server.services.security import (
        get_rate_limit_stats,
        rate_limit,
        reset_rate_limit_counters,
    )

    reset_rate_limit_counters()

    # Register a tiny test endpoint that uses the real decorator.
    app.config["DUMMY_RATE_LIMIT"] = 2
    app.config["DUMMY_RATE_WINDOW"] = 60

    @rate_limit("fire", "DUMMY_RATE_LIMIT", "DUMMY_RATE_WINDOW")
    def _dummy():
        return "ok"

    # Drive it through a request context so current_app + get_client_ip work.
    with app.test_request_context("/"):
        assert _dummy() == "ok"
    with app.test_request_context("/"):
        assert _dummy() == "ok"

    # Third call should 429 (werkzeug raises HTTPException via abort()).
    from werkzeug.exceptions import HTTPException

    with app.test_request_context("/"):
        with pytest.raises(HTTPException) as exc_info:
            _dummy()
        assert exc_info.value.code == 429

    stats = get_rate_limit_stats()
    assert stats["fire"]["hits"] == 2
    assert stats["fire"]["violations"] == 1
    assert stats["fire"]["locked_sources"] >= 1
    assert stats["totals"]["hits"] == 2
    assert stats["totals"]["violations"] == 1


def test_p95_computation_deterministic():
    """_percentile uses nearest-rank — verify against crafted inputs.

    For sorted [1, 2, ..., 20], 95th-pctile via nearest-rank is values[18] = 19.
    """
    from server.services.security import _percentile

    # Empty input → 0.0
    assert _percentile([], 95) == 0.0
    # Single value → that value
    assert _percentile([42.0], 95) == 42.0
    # Crafted 20-element series — 95th percentile is the 19th element (idx 18)
    values = [float(x) for x in range(1, 21)]
    assert _percentile(values, 95) == 19.0
    # Burst on top — nearest-rank P95 of 20 = idx 18 = 50.0 (P100 = 60.0).
    bursty = [1.0] * 18 + [50.0, 60.0]
    assert _percentile(bursty, 95) == 50.0
    assert _percentile(bursty, 100) == 60.0
    # P50 of [1..20] → idx = ceil(10) - 1 = 9 → values[9] = 10.0
    assert _percentile(values, 50) == 10.0


def test_rate_limit_suggestion_below_threshold():
    """When current_limit is well above observed P95 and violations are
    negligible, get_rate_limit_suggestion returns None."""
    from server.services.security import (
        _bump_bucket_locked,
        _rate_stats_hits,
        _rate_stats_lock,
        get_rate_limit_suggestion,
        reset_rate_limit_counters,
    )

    reset_rate_limit_counters()

    # Simulate 24 buckets each with 60 allowed requests = 0.2 req/s sustained.
    now = time.time()
    with _rate_stats_lock:
        for i in range(24):
            ts = now - (i * 300)
            _bump_bucket_locked("fire", ts)
            # Pump count to 60 by re-entering same bucket boundary.
            from server.services.security import _rate_buckets

            _rate_buckets["fire"][-1][1] = 60
        _rate_stats_hits["fire"] = 24 * 60  # 1440 hits, no violations

    # current_limit=200 / window=60 → effective rate cap of 3.33 req/s,
    # well above observed 0.2 req/s P95 — should NOT suggest.
    suggestion = get_rate_limit_suggestion("fire", current_limit=200, current_window=60)
    assert suggestion is None


def test_rate_limit_suggestion_when_undersized():
    """When current_limit < suggested * 0.7, surface the suggestion."""
    import time as _time

    from server.services.security import (
        _rate_buckets,
        _rate_stats_hits,
        _rate_stats_lock,
        get_rate_limit_suggestion,
        reset_rate_limit_counters,
    )

    reset_rate_limit_counters()
    now = _time.time()
    bucket_start = (int(now) // 300) * 300

    # Build 24 buckets where the busiest sustained ≈ 1 req/s (300 hits / 300s).
    with _rate_stats_lock:
        for i in range(24):
            _rate_buckets["fire"].append([float(bucket_start - i * 300), 300])
        _rate_stats_hits["fire"] = 24 * 300

    # current_limit=10 / window=60 → req/s cap = 0.166 → way below P95 of 1.0.
    # suggested_limit = ceil(1.0 * 60 * 1.5) = 90 → 10 < 90 * 0.7 = 63 → suggest!
    suggestion = get_rate_limit_suggestion("fire", current_limit=10, current_window=60)
    assert suggestion is not None
    assert suggestion["suggested_window"] == 60
    assert suggestion["suggested_limit"] >= 90
    assert suggestion["p95_per_second"] >= 0.99


def test_rate_limit_suggestion_violations_threshold():
    """Even if current_limit looks fine vs P95, a violations/hits > 5% must
    trip the suggestion."""
    from server.services.security import (
        _bump_bucket_locked,
        _rate_stats_hits,
        _rate_stats_lock,
        _rate_stats_violations,
        get_rate_limit_suggestion,
        reset_rate_limit_counters,
    )

    reset_rate_limit_counters()
    now = time.time()
    with _rate_stats_lock:
        # Tiny baseline: 100 hits, 10 violations → 10/110 ≈ 9% violation ratio.
        _rate_stats_hits["fire"] = 100
        _rate_stats_violations["fire"] = 10
        # No buckets → P95 = 0.0; current_limit looks comfortable BUT pressure
        # ratio still kicks in.
        _bump_bucket_locked("fire", now)

    suggestion = get_rate_limit_suggestion("fire", current_limit=20, current_window=60)
    assert suggestion is not None
    assert suggestion["suggested_window"] == 60
    # With P95 ≈ 0, suggested_limit clamps to 1 (max(1, ceil(0))).
    assert suggestion["suggested_limit"] >= 1


def test_rate_limit_suggestion_in_metrics_response(client, app):
    """The /admin/metrics endpoint must surface the suggestion (or null) per
    rate-limit scope so the admin UI can render the suggest banner."""
    import time as _time

    from server.services.security import (
        _rate_buckets,
        _rate_stats_hits,
        _rate_stats_lock,
        reset_rate_limit_counters,
    )

    reset_rate_limit_counters()
    now = _time.time()
    bucket_start = (int(now) // 300) * 300

    # Saturate the FIRE bucket to force a suggestion to surface in the response.
    with _rate_stats_lock:
        for i in range(24):
            _rate_buckets["fire"].append([float(bucket_start - i * 300), 300])
        _rate_stats_hits["fire"] = 24 * 300

    # Set current limit small so undersized condition fires.
    app.config["FIRE_RATE_LIMIT"] = 10
    app.config["FIRE_RATE_WINDOW"] = 60
    app.config["ADMIN_RATE_LIMIT"] = 9999  # don't rate-limit ourselves out
    app.config["ADMIN_RATE_WINDOW"] = 60

    login(client)
    res = client.get("/admin/metrics")
    assert res.status_code == 200
    payload = res.get_json()
    fire = payload["rate_limits"]["fire"]
    assert "suggestion" in fire
    assert fire["suggestion"] is not None
    assert fire["suggestion"]["suggested_window"] == 60
    assert fire["suggestion"]["suggested_limit"] >= 1
    assert fire["limit"] == 10
    assert fire["window"] == 60
    # API scope had no traffic — should suggest nothing.
    assert payload["rate_limits"]["api"]["suggestion"] is None


def test_bucket_history_returns_24_elements():
    """``get_rate_limit_bucket_history`` must always return 24 ints regardless
    of how many real buckets exist, and aggregate the 5-min source buckets up
    to the requested granularity (default 60 min = sum of 12 source buckets).
    """
    from server.services.security import (
        _rate_buckets,
        _rate_stats_lock,
        get_rate_limit_bucket_history,
        reset_rate_limit_counters,
    )

    reset_rate_limit_counters()

    # Empty state → 24 zeros (zero-padded).
    history = get_rate_limit_bucket_history("fire", 60)
    assert len(history) == 24
    assert all(v == 0 for v in history)
    assert all(isinstance(v, int) for v in history)

    # Seed last 24h × 12 5-min buckets (288 total) each with 5 hits → every
    # hourly aggregate should sum to 60 (12 × 5).
    now = time.time()
    granularity_seconds = 60 * 60
    end_bucket = (int(now) // granularity_seconds) * granularity_seconds
    start_bucket = end_bucket - 24 * granularity_seconds
    with _rate_stats_lock:
        for i in range(288):
            ts = start_bucket + i * 300
            _rate_buckets["fire"].append([float(ts), 5])

    history = get_rate_limit_bucket_history("fire", 60)
    assert len(history) == 24
    assert all(v == 60 for v in history), history
    # Total across the window should match the seed (288 × 5 = 1440).
    assert sum(history) == 1440

    # Granularity guardrail: invalid values fall back to 60-min default.
    history_bad = get_rate_limit_bucket_history("fire", 7)
    assert len(history_bad) == 24
    assert sum(history_bad) == 1440


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
