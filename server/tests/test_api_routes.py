"""Tests for public API routes: get_settings, fonts, check_blacklist, health."""

import json

from server import state

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
