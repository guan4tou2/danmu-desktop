"""Tests for /fire anti-abuse layers added in v4.9.1:

- X-Fire-Token admin lane bypasses public rate limits + captcha
- Per-fingerprint rate limit (catches IP-rotating spammers)
- Global rate limit (ceiling for distributed floods)
- Captcha (Turnstile / hCaptcha) gate
"""

import json
from unittest.mock import patch

import pytest

from server.services.ws_state import update_ws_client_count

PAYLOAD = {"text": "hello", "fontInfo": {"name": "NotoSansTC"}, "isImage": False}


@pytest.fixture()
def overlay_connected():
    update_ws_client_count(1)
    yield
    update_ws_client_count(0)


def _post(client, payload=None, headers=None, ip="1.1.1.1"):
    return client.post(
        "/fire",
        json=payload if payload is not None else PAYLOAD,
        headers=headers or {},
        environ_base={"REMOTE_ADDR": ip},
    )


# --- Admin token bypass ------------------------------------------------------


def test_admin_token_bypasses_public_rate_limit(app, client, overlay_connected):
    # conftest.TestConfig sets FIRE_RATE_LIMIT = 2. Admin should blow past it.
    app.config["FIRE_ADMIN_TOKEN"] = "admin-secret"
    app.config["FIRE_ADMIN_RATE_LIMIT"] = 100

    headers = {"X-Fire-Token": "admin-secret"}
    for _ in range(6):
        r = _post(client, headers=headers)
        assert r.status_code == 200, r.data


def test_admin_token_mismatch_falls_back_to_public_limit(app, client, overlay_connected):
    app.config["FIRE_ADMIN_TOKEN"] = "admin-secret"

    headers = {"X-Fire-Token": "wrong"}
    assert _post(client, headers=headers).status_code == 200
    assert _post(client, headers=headers).status_code == 200
    # Third request from the same IP hits public FIRE_RATE_LIMIT=2
    assert _post(client, headers=headers).status_code == 429


def test_admin_token_has_own_ceiling(app, client, overlay_connected):
    app.config["FIRE_ADMIN_TOKEN"] = "admin-secret"
    app.config["FIRE_ADMIN_RATE_LIMIT"] = 2  # force a low admin ceiling
    app.config["FIRE_ADMIN_RATE_WINDOW"] = 60

    headers = {"X-Fire-Token": "admin-secret"}
    assert _post(client, headers=headers).status_code == 200
    assert _post(client, headers=headers).status_code == 200
    assert _post(client, headers=headers).status_code == 429


def test_no_admin_token_configured_means_header_ignored(app, client, overlay_connected):
    app.config["FIRE_ADMIN_TOKEN"] = ""  # feature off
    headers = {"X-Fire-Token": "anything"}
    assert _post(client, headers=headers).status_code == 200
    assert _post(client, headers=headers).status_code == 200
    assert _post(client, headers=headers).status_code == 429


# --- Per-fingerprint rate limit ---------------------------------------------


def test_fingerprint_rate_limit_catches_ip_rotation(app, client, overlay_connected):
    # Give per-IP enough room so this test measures only fingerprint limiting.
    app.config["FIRE_RATE_LIMIT"] = 100
    app.config["FIRE_FINGERPRINT_RATE_LIMIT"] = 2
    app.config["FIRE_FINGERPRINT_RATE_WINDOW"] = 60

    payload = dict(PAYLOAD, fingerprint="fp-attacker")

    assert _post(client, payload=payload, ip="1.1.1.1").status_code == 200
    assert _post(client, payload=payload, ip="2.2.2.2").status_code == 200
    # Third request from yet another IP — fingerprint is the trip wire
    assert _post(client, payload=payload, ip="3.3.3.3").status_code == 429


def test_fingerprint_limit_zero_disables(app, client, overlay_connected):
    app.config["FIRE_RATE_LIMIT"] = 100
    app.config["FIRE_FINGERPRINT_RATE_LIMIT"] = 0  # disabled

    payload = dict(PAYLOAD, fingerprint="fp-x")
    for _ in range(5):
        assert _post(client, payload=payload).status_code == 200


# --- Global rate limit -------------------------------------------------------


def test_global_rate_limit_trips_across_ips(app, client, overlay_connected):
    app.config["FIRE_RATE_LIMIT"] = 100
    app.config["FIRE_FINGERPRINT_RATE_LIMIT"] = 0
    app.config["GLOBAL_FIRE_RATE_LIMIT"] = 2
    app.config["GLOBAL_FIRE_RATE_WINDOW"] = 60

    assert _post(client, ip="1.1.1.1").status_code == 200
    assert _post(client, ip="2.2.2.2").status_code == 200
    assert _post(client, ip="3.3.3.3").status_code == 429


def test_global_rate_limit_admin_bypasses(app, client, overlay_connected):
    app.config["GLOBAL_FIRE_RATE_LIMIT"] = 1
    app.config["GLOBAL_FIRE_RATE_WINDOW"] = 60
    app.config["FIRE_ADMIN_TOKEN"] = "admin-secret"
    app.config["FIRE_ADMIN_RATE_LIMIT"] = 100

    # One public request trips the global limit immediately afterwards...
    assert _post(client).status_code == 200
    assert _post(client, ip="2.2.2.2").status_code == 429
    # ...but admin is a separate lane and continues to work.
    headers = {"X-Fire-Token": "admin-secret"}
    assert _post(client, ip="9.9.9.9", headers=headers).status_code == 200


# --- Captcha -----------------------------------------------------------------


class _FakeResp:
    def __init__(self, body):
        self._body = body

    def __enter__(self):
        return self

    def __exit__(self, *_):
        return False

    def read(self):
        return self._body.encode()


def test_captcha_blocks_when_provider_rejects(app, client, overlay_connected):
    app.config["CAPTCHA_PROVIDER"] = "turnstile"
    app.config["CAPTCHA_SECRET"] = "test-secret"

    with patch(
        "server.services.security.urllib.request.urlopen",
        return_value=_FakeResp(json.dumps({"success": False})),
    ):
        r = _post(client, payload=dict(PAYLOAD, captcha_token="bad-token"))
    assert r.status_code == 400
    assert "Captcha" in r.get_json()["error"]


def test_captcha_passes_when_provider_approves(app, client, overlay_connected):
    app.config["CAPTCHA_PROVIDER"] = "turnstile"
    app.config["CAPTCHA_SECRET"] = "test-secret"

    with patch(
        "server.services.security.urllib.request.urlopen",
        return_value=_FakeResp(json.dumps({"success": True})),
    ):
        r = _post(client, payload=dict(PAYLOAD, captcha_token="good-token"))
    assert r.status_code == 200


def test_captcha_admin_lane_skips_verification(app, client, overlay_connected):
    app.config["CAPTCHA_PROVIDER"] = "turnstile"
    app.config["CAPTCHA_SECRET"] = "test-secret"
    app.config["FIRE_ADMIN_TOKEN"] = "admin-secret"

    # urlopen is NOT patched — if admin bypass fails, the real HTTP call would
    # happen and the test would hang/fail. Success implies bypass worked.
    r = _post(
        client,
        payload=dict(PAYLOAD, fingerprint="ext-bot"),
        headers={"X-Fire-Token": "admin-secret"},
    )
    assert r.status_code == 200


def test_captcha_disabled_by_default(app, client, overlay_connected):
    # Default CAPTCHA_PROVIDER=="none" — no token needed
    assert _post(client).status_code == 200
