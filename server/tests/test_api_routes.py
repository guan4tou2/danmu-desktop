"""Tests for public API routes: get_settings, fonts, check_blacklist, health."""

import json
import re

from server import state
from server.app import create_app
from server.config import Config

# ---------------------------------------------------------------------------
# /get_settings
# ---------------------------------------------------------------------------


def test_get_settings_returns_options(client):
    res = client.get("/get_settings")
    assert res.status_code == 200
    data = json.loads(res.data)
    # Expect keys matching Config.SETTABLE_OPTION_KEYS
    for key in ("Color", "Opacity", "FontSize", "Speed", "FontFamily"):
        assert key in data


def test_get_settings_content_type(client):
    res = client.get("/get_settings")
    assert "application/json" in res.content_type


# ---------------------------------------------------------------------------
# /fonts and /api/fonts
# ---------------------------------------------------------------------------


def test_public_fonts_returns_list(client):
    res = client.get("/fonts")
    assert res.status_code == 200
    data = json.loads(res.data)
    # Response is {"fonts": [...], "tokenTTL": ...}
    assert "fonts" in data
    fonts = data["fonts"]
    assert isinstance(fonts, list)
    names = [f.get("name") for f in fonts]
    assert "NotoSansTC" in names


def test_api_fonts_alias(client):
    """Backward-compatible /api/fonts endpoint returns same result as /fonts."""
    res1 = client.get("/fonts")
    res2 = client.get("/api/fonts")
    assert res1.status_code == 200
    assert res2.status_code == 200
    data1 = json.loads(res1.data)
    data2 = json.loads(res2.data)
    assert data1["fonts"] == data2["fonts"]


# ---------------------------------------------------------------------------
# /check_blacklist
# ---------------------------------------------------------------------------


def test_check_blacklist_allowed(client):
    res = client.post("/check_blacklist", json={"text": "hello world"})
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["blocked"] is False


def test_check_blacklist_blocked(client):
    state.blacklist.add("badword")
    res = client.post("/check_blacklist", json={"text": "this contains badword here"})
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["blocked"] is True


def test_check_blacklist_case_insensitive(client):
    state.blacklist.add("badword")
    res = client.post("/check_blacklist", json={"text": "BADWORD"})
    assert res.status_code == 200
    assert json.loads(res.data)["blocked"] is True


def test_check_blacklist_empty_text(client):
    res = client.post("/check_blacklist", json={"text": ""})
    assert res.status_code == 400


def test_check_blacklist_text_too_long(client):
    res = client.post("/check_blacklist", json={"text": "x" * 1001})
    assert res.status_code == 400


# ---------------------------------------------------------------------------
# Security headers
# ---------------------------------------------------------------------------


def test_security_headers_present(client):
    res = client.get("/get_settings")
    assert res.headers.get("X-Content-Type-Options") == "nosniff"
    assert res.headers.get("X-Frame-Options") == "DENY"
    assert "X-XSS-Protection" in res.headers
    csp = res.headers.get("Content-Security-Policy")
    assert csp is not None
    assert "default-src 'self'" in csp
    assert "object-src 'none'" in csp
    assert "script-src 'self' 'nonce-" in csp
    assert res.headers.get("Strict-Transport-Security") is None


def test_index_uses_csp_nonce_and_no_inline_event_handlers(client):
    res = client.get("/")
    csp = res.headers["Content-Security-Policy"]
    nonce_match = re.search(r"script-src 'self' 'nonce-([^']+)'", csp)
    assert nonce_match is not None
    nonce = nonce_match.group(1)
    body = res.data.decode()
    assert f'nonce="{nonce}"' in body
    assert "onchange=" not in body


def test_admin_and_overlay_use_response_csp_nonce(client):
    admin_res = client.get("/admin/")
    admin_csp = admin_res.headers["Content-Security-Policy"]
    admin_nonce_match = re.search(r"script-src 'self' 'nonce-([^']+)'", admin_csp)
    assert admin_nonce_match is not None
    admin_nonce = admin_nonce_match.group(1)
    admin_body = admin_res.data.decode()
    assert admin_body.count(f'nonce="{admin_nonce}"') >= 2

    overlay_res = client.get("/overlay")
    overlay_csp = overlay_res.headers["Content-Security-Policy"]
    overlay_nonce_match = re.search(r"script-src 'self' 'nonce-([^']+)'", overlay_csp)
    assert overlay_nonce_match is not None
    overlay_nonce = overlay_nonce_match.group(1)
    overlay_body = overlay_res.data.decode()
    assert f'nonce="{overlay_nonce}"' in overlay_body
    assert 'http-equiv="Content-Security-Policy"' not in overlay_body


def test_hsts_header_requires_secure_request_and_opt_in(tmp_path):
    class HstsConfig(Config):
        TESTING = True
        ENV = "production"
        SECRET_KEY = "test-secret"
        SECRET_KEY_FROM_ENV = True
        ADMIN_PASSWORD = "test"
        ADMIN_PASSWORD_HASHED = ""
        SESSION_COOKIE_SECURE = True
        TRUSTED_HOSTS = ["example.com"]
        HSTS_ENABLED = True
        HSTS_INCLUDE_SUBDOMAINS = True
        SETTINGS_FILE = str(tmp_path / "settings.json")

    app = create_app(HstsConfig)
    app.testing = True
    secure_client = app.test_client()

    https_res = secure_client.get("/health/live", base_url="https://example.com")
    assert (
        https_res.headers.get("Strict-Transport-Security") == "max-age=31536000; includeSubDomains"
    )

    http_res = secure_client.get("/health/live", base_url="http://example.com")
    assert http_res.headers.get("Strict-Transport-Security") is None


# ---------------------------------------------------------------------------
# /health endpoints
# ---------------------------------------------------------------------------


def test_health_liveness(client):
    res = client.get("/health/live")
    assert res.status_code == 200


def test_health_readiness(client):
    res = client.get("/health/ready")
    assert res.status_code in (200, 503)  # 503 if WS server not running in test


def test_health_has_request_id(client):
    res = client.get("/health/live")
    assert "X-Request-ID" in res.headers


# ── Avatar generation ─────────────────────────────────────────────────────


def test_avatar_returns_svg(client):
    """GET /avatar/<letter>/<color> returns SVG content."""
    resp = client.get("/avatar/A/7c3aed")
    assert resp.status_code == 200
    assert resp.content_type == "image/svg+xml"
    data = resp.data.decode()
    assert "<svg" in data
    assert "A" in data


def test_avatar_uses_first_letter_only(client):
    """Only the first character of the letter param is used."""
    resp = client.get("/avatar/Hello/ff0000")
    assert resp.status_code == 200
    data = resp.data.decode()
    assert "H" in data
    assert "ello" not in data


def test_avatar_uppercases_letter(client):
    """Letter is uppercased in output."""
    resp = client.get("/avatar/a/7c3aed")
    assert resp.status_code == 200
    data = resp.data.decode()
    assert "A" in data


def test_avatar_truncates_color(client):
    """Color is limited to 6 hex chars."""
    resp = client.get("/avatar/Z/aabbccddeeff")
    assert resp.status_code == 200
    data = resp.data.decode()
    assert "aabbcc" in data
    assert "ddeeff" not in data


def test_avatar_has_cache_header(client):
    """Avatar response has a cache-control header."""
    resp = client.get("/avatar/B/123456")
    assert "Cache-Control" in resp.headers
    assert "max-age" in resp.headers["Cache-Control"]


# ── Nickname validation ───────────────────────────────────────────────────


def test_fire_with_nickname_passes_validation(client):
    """Valid nickname is accepted in /fire."""
    from server.services.ws_state import update_ws_client_count

    update_ws_client_count(1)
    resp = client.post(
        "/fire",
        json={
            "text": "hello",
            "nickname": "Alice",
            "color": "#ffffff",
            "size": 24,
            "speed": 5,
            "opacity": 100,
        },
    )
    assert resp.status_code == 200


def test_fire_nickname_too_long_rejected(client):
    """Nickname exceeding 20 chars is rejected."""
    from server.services.ws_state import update_ws_client_count

    update_ws_client_count(1)
    resp = client.post(
        "/fire",
        json={
            "text": "hello",
            "nickname": "A" * 21,
            "color": "#ffffff",
            "size": 24,
            "speed": 5,
            "opacity": 100,
        },
    )
    assert resp.status_code in {400, 422}


def test_fire_without_nickname_succeeds(client):
    """Fire without nickname field still works."""
    from server.services.ws_state import update_ws_client_count

    update_ws_client_count(1)
    resp = client.post(
        "/fire",
        json={
            "text": "hello",
            "color": "#ffffff",
            "size": 24,
            "speed": 5,
            "opacity": 100,
        },
    )
    assert resp.status_code == 200
