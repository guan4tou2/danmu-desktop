"""Admin HTTP routes for onscreen-limiter settings (v4.9.0+)."""
import json

import pytest

from server.services import onscreen_config


@pytest.fixture()
def logged_client(client):
    with client.session_transaction() as sess:
        sess["logged_in"] = True
        sess["csrf_token"] = "test-csrf"
    return client


def _csrf_headers():
    return {
        "X-CSRF-Token": "test-csrf",
        "Content-Type": "application/json",
    }


def test_get_requires_login(client):
    res = client.get("/admin/api/onscreen-limits")
    assert res.status_code in (302, 401, 403)


def test_get_returns_current_state(logged_client):
    onscreen_config.set_state(max_onscreen_danmu=42, overflow_mode="queue")
    res = logged_client.get("/admin/api/onscreen-limits")
    assert res.status_code == 200
    assert res.get_json() == {"max_onscreen_danmu": 42, "overflow_mode": "queue"}


def test_post_updates_state(logged_client):
    res = logged_client.post(
        "/admin/api/onscreen-limits",
        data=json.dumps({"max_onscreen_danmu": 50, "overflow_mode": "queue"}),
        headers=_csrf_headers(),
    )
    assert res.status_code == 200
    assert res.get_json() == {"max_onscreen_danmu": 50, "overflow_mode": "queue"}
    assert onscreen_config.get_state() == {"max_onscreen_danmu": 50, "overflow_mode": "queue"}


def test_post_rejects_out_of_range(logged_client):
    res = logged_client.post(
        "/admin/api/onscreen-limits",
        data=json.dumps({"max_onscreen_danmu": 999, "overflow_mode": "drop"}),
        headers=_csrf_headers(),
    )
    assert res.status_code == 400


def test_post_rejects_bad_mode(logged_client):
    res = logged_client.post(
        "/admin/api/onscreen-limits",
        data=json.dumps({"max_onscreen_danmu": 20, "overflow_mode": "bogus"}),
        headers=_csrf_headers(),
    )
    assert res.status_code == 400


def test_post_rejects_negative(logged_client):
    res = logged_client.post(
        "/admin/api/onscreen-limits",
        data=json.dumps({"max_onscreen_danmu": -1, "overflow_mode": "drop"}),
        headers=_csrf_headers(),
    )
    assert res.status_code == 400


def test_post_accepts_unlimited_zero(logged_client):
    res = logged_client.post(
        "/admin/api/onscreen-limits",
        data=json.dumps({"max_onscreen_danmu": 0, "overflow_mode": "drop"}),
        headers=_csrf_headers(),
    )
    assert res.status_code == 200
    assert onscreen_config.get_state()["max_onscreen_danmu"] == 0


def test_post_requires_csrf(logged_client):
    res = logged_client.post(
        "/admin/api/onscreen-limits",
        data=json.dumps({"max_onscreen_danmu": 20, "overflow_mode": "drop"}),
        headers={"Content-Type": "application/json"},  # no CSRF
    )
    assert res.status_code in (400, 403)


def test_post_requires_login(client):
    res = client.post(
        "/admin/api/onscreen-limits",
        data=json.dumps({"max_onscreen_danmu": 20, "overflow_mode": "drop"}),
        headers={"Content-Type": "application/json", "X-CSRF-Token": "test-csrf"},
    )
    assert res.status_code in (302, 401, 403)
