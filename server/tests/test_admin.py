"""Tests for admin routes: blacklist, history, settings toggle, auth."""
import json

from server import state
from server.services.ws_state import update_ws_client_count


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def login(client):
    return client.post("/login", data={"password": "test"}, follow_redirects=True)


def csrf_token(client):
    login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def authed_post(client, url, payload):
    """POST with CSRF token sent as header (avoids polluting JSON schema validation)."""
    token = csrf_token(client)
    return client.post(url, json=payload, headers={"X-CSRF-Token": token})


# ---------------------------------------------------------------------------
# Auth: login / logout
# ---------------------------------------------------------------------------

def test_login_correct_password(client):
    res = login(client)
    assert res.status_code == 200
    with client.session_transaction() as sess:
        assert sess.get("logged_in") is True
        assert "csrf_token" in sess


def test_login_wrong_password(client):
    res = client.post("/login", data={"password": "wrong"}, follow_redirects=True)
    assert res.status_code == 200
    with client.session_transaction() as sess:
        assert not sess.get("logged_in")


def test_logout_clears_session(client):
    token = csrf_token(client)
    res = client.post("/logout", json={"csrf_token": token})
    assert res.status_code in (200, 302)
    with client.session_transaction() as sess:
        assert not sess.get("logged_in")


def test_login_rate_limit(client):
    """Login endpoint should be rate-limited (default 5 attempts per window)."""
    for _ in range(5):
        client.post("/login", data={"password": "bad"})
    res = client.post("/login", data={"password": "bad"})
    assert res.status_code == 429


# ---------------------------------------------------------------------------
# Blacklist
# ---------------------------------------------------------------------------

def test_blacklist_add_and_list(client):
    res = authed_post(client, "/admin/blacklist/add", {"keyword": "spam"})
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["message"] == "Keyword added"
    assert "spam" in state.blacklist


def test_blacklist_add_duplicate(client):
    authed_post(client, "/admin/blacklist/add", {"keyword": "dup"})
    res = authed_post(client, "/admin/blacklist/add", {"keyword": "dup"})
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["message"] == "Keyword already exists"


def test_blacklist_add_validates_keyword(client):
    # empty keyword
    res = authed_post(client, "/admin/blacklist/add", {"keyword": ""})
    assert res.status_code == 400

    # keyword too long (> 200 chars)
    res = authed_post(client, "/admin/blacklist/add", {"keyword": "x" * 201})
    assert res.status_code == 400

    # keyword with control characters
    res = authed_post(client, "/admin/blacklist/add", {"keyword": "bad\x00word"})
    assert res.status_code == 400


def test_blacklist_remove(client):
    state.blacklist.add("remove-me")
    res = authed_post(client, "/admin/blacklist/remove", {"keyword": "remove-me"})
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["message"] == "Keyword removed"
    assert "remove-me" not in state.blacklist


def test_blacklist_remove_not_found(client):
    res = authed_post(client, "/admin/blacklist/remove", {"keyword": "nonexistent"})
    assert res.status_code == 404
    data = json.loads(res.data)
    assert "error" in data


def test_blacklist_get(client):
    state.blacklist.update({"word1", "word2"})
    login(client)
    res = client.get("/admin/blacklist/get")
    assert res.status_code == 200
    keywords = json.loads(res.data)
    assert "word1" in keywords
    assert "word2" in keywords


def test_blacklist_requires_auth(client):
    res = client.get("/admin/blacklist/get")
    assert res.status_code == 401


# ---------------------------------------------------------------------------
# Settings toggle (/admin/Set)
# ---------------------------------------------------------------------------

def test_set_option_toggle(client):
    token = csrf_token(client)
    res = client.post(
        "/admin/Set",
        json={"key": "Color", "enabled": False},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["message"] == "OK"


def test_set_option_unknown_key(client):
    token = csrf_token(client)
    res = client.post(
        "/admin/Set",
        json={"key": "NonExistentKey", "enabled": True},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400
    data = json.loads(res.data)
    assert "error" in data


def test_set_option_requires_auth(client):
    # CSRF check runs before auth check → 403 (no CSRF token provided)
    res = client.post("/admin/Set", json={"key": "Color", "enabled": True})
    assert res.status_code == 403


# ---------------------------------------------------------------------------
# Admin settings update (/admin/update)
# ---------------------------------------------------------------------------

def test_update_invalid_setting_type(client):
    token = csrf_token(client)
    payload = {"type": "HackerField", "index": 0, "value": 99, "csrf_token": token}
    res = client.post("/admin/update", json=payload)
    assert res.status_code == 400


def test_update_speed_out_of_range(client):
    token = csrf_token(client)
    payload = {"type": "Speed", "index": 3, "value": 99, "csrf_token": token}
    res = client.post("/admin/update", json=payload)
    # Should fail validation (Speed max is 10)
    assert res.status_code == 400


def test_update_speed_valid(client):
    token = csrf_token(client)
    res = client.post(
        "/admin/update",
        json={"type": "Speed", "index": 3, "value": 7},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200


# ---------------------------------------------------------------------------
# Danmu history
# ---------------------------------------------------------------------------

def test_history_get_empty(client):
    login(client)
    res = client.get("/admin/history")
    assert res.status_code == 200
    data = json.loads(res.data)
    assert "records" in data
    assert "stats" in data
    assert "query" in data


def test_history_get_with_params(client):
    login(client)
    res = client.get("/admin/history?hours=12&limit=50")
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["query"]["hours"] == 12
    assert data["query"]["limit"] == 50


def test_history_get_clamps_params(client):
    login(client)
    # hours > 168 and limit > 5000 should be clamped
    res = client.get("/admin/history?hours=9999&limit=99999")
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["query"]["hours"] == 168
    assert data["query"]["limit"] == 5000


def test_history_clear(client):
    token = csrf_token(client)
    res = client.post("/admin/history/clear", json={"csrf_token": token})
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["message"] == "History cleared"


def test_history_requires_auth(client):
    res = client.get("/admin/history")
    assert res.status_code == 401
