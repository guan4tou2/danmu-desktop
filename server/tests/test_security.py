from pathlib import Path
from unittest.mock import MagicMock

from server import state
from server.services.security import (
    InMemoryRateLimiter,
    RedisRateLimiter,
    generate_font_token,
    hash_password,
    issue_csrf_token,
    verify_password,
)
from server.services.ws_state import update_ws_client_count


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
