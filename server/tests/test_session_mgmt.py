"""Session lifecycle route tests (2026-04-29).

Covers:
  * GET  /admin/session/current
  * POST /admin/session/open
  * POST /admin/session/close
  * PATCH /admin/session/settings
  * GET  /admin/session/archive
  * GET  /admin/session/archive/<id>   ← P0-2 regression

Regression:
  P0-2  Session-detail 404 for lifecycle sessions:
        /admin/session/archive/<id> must resolve live + archived sessions
        so admin-session-detail.js fallback works.
"""
import json

import pytest

from server.services import session_service


# ─── helpers ─────────────────────────────────────────────────────────────────


def _login_csrf(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


# ─── /admin/session/current ───────────────────────────────────────────────────


def test_current_requires_login(client):
    res = client.get("/admin/session/current")
    assert res.status_code == 401


def test_current_returns_idle_state(client):
    _login_csrf(client)
    res = client.get("/admin/session/current")
    assert res.status_code == 200
    body = json.loads(res.data)
    assert body["status"] == "idle"
    assert body["id"] is None
    assert body["name"] is None


# ─── /admin/session/open ──────────────────────────────────────────────────────


def test_open_requires_csrf(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    res = client.post("/admin/session/open", json={"name": "Test"})
    assert res.status_code == 403


def test_open_requires_name(client):
    token = _login_csrf(client)
    res = client.post(
        "/admin/session/open",
        json={},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400
    body = json.loads(res.data)
    assert "name" in body["error"]


def test_open_name_too_long(client):
    token = _login_csrf(client)
    res = client.post(
        "/admin/session/open",
        json={"name": "x" * 121},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400


def test_open_creates_live_session(client):
    token = _login_csrf(client)
    res = client.post(
        "/admin/session/open",
        json={"name": "My Session"},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200
    body = json.loads(res.data)
    assert body["ok"] is True
    sess = body["session"]
    assert sess["status"] == "live"
    assert sess["name"] == "My Session"
    assert sess["id"] is not None
    assert sess["started_at"] is not None


def test_open_rejects_double_open(client):
    token = _login_csrf(client)
    client.post(
        "/admin/session/open",
        json={"name": "First"},
        headers={"X-CSRF-Token": token},
    )
    res = client.post(
        "/admin/session/open",
        json={"name": "Second"},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 409


# ─── /admin/session/close ────────────────────────────────────────────────────


def test_close_requires_csrf(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    # Open a session first
    session_service.open_session("Pre-open")
    res = client.post("/admin/session/close")
    assert res.status_code == 403


def test_close_with_no_active_session_is_409(client):
    token = _login_csrf(client)
    res = client.post(
        "/admin/session/close",
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 409


def test_close_archives_session(client):
    token = _login_csrf(client)
    # Open
    client.post(
        "/admin/session/open",
        json={"name": "Closing Test"},
        headers={"X-CSRF-Token": token},
    )
    # Close
    res = client.post(
        "/admin/session/close",
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200
    body = json.loads(res.data)
    assert body["ok"] is True
    archived = body["archived"]
    assert archived["name"] == "Closing Test"
    assert archived["ended_at"] is not None
    # Session is now idle
    state = session_service.get_state()
    assert state["status"] == "idle"


# ─── /admin/session/settings ─────────────────────────────────────────────────


def test_settings_requires_csrf(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    res = client.patch(
        "/admin/session/settings",
        json={"viewer_end_behavior": "reload"},
    )
    assert res.status_code == 403


def test_settings_invalid_behavior(client):
    token = _login_csrf(client)
    res = client.patch(
        "/admin/session/settings",
        json={"viewer_end_behavior": "explode"},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400


def test_settings_valid_behavior_persists(client):
    token = _login_csrf(client)
    for behavior in ("continue", "ended_screen", "reload"):
        res = client.patch(
            "/admin/session/settings",
            json={"viewer_end_behavior": behavior},
            headers={"X-CSRF-Token": token},
        )
        assert res.status_code == 200
        body = json.loads(res.data)
        assert body["ok"] is True
        assert body["session"]["viewer_end_behavior"] == behavior


def test_settings_no_valid_field(client):
    token = _login_csrf(client)
    res = client.patch(
        "/admin/session/settings",
        json={"unknown_field": "value"},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400


# ─── /admin/session/archive  (list) ──────────────────────────────────────────


def test_archive_list_requires_login(client):
    res = client.get("/admin/session/archive")
    assert res.status_code == 401


def test_archive_list_empty(client):
    _login_csrf(client)
    res = client.get("/admin/session/archive")
    assert res.status_code == 200
    body = json.loads(res.data)
    assert body["sessions"] == []
    assert body["total"] == 0


def test_archive_list_after_close(client):
    token = _login_csrf(client)
    client.post(
        "/admin/session/open",
        json={"name": "Archive Me"},
        headers={"X-CSRF-Token": token},
    )
    client.post(
        "/admin/session/close",
        headers={"X-CSRF-Token": token},
    )
    res = client.get("/admin/session/archive")
    body = json.loads(res.data)
    assert body["total"] == 1
    assert body["sessions"][0]["name"] == "Archive Me"


def test_archive_list_limit_clamped(client):
    _login_csrf(client)
    # limit=0 → clamped to 1
    res = client.get("/admin/session/archive?limit=0")
    assert res.status_code == 200
    # limit=999 → clamped to 200 (no error)
    res = client.get("/admin/session/archive?limit=999")
    assert res.status_code == 200


# ─── /admin/session/archive/<id>  P0-2 regression ───────────────────────────


def test_archive_detail_requires_login(client):
    res = client.get("/admin/session/archive/sess_abc12345")
    assert res.status_code == 401


def test_archive_detail_not_found(client):
    _login_csrf(client)
    res = client.get("/admin/session/archive/nonexistent_id")
    assert res.status_code == 404
    body = json.loads(res.data)
    assert "error" in body


def test_archive_detail_returns_live_session(client):
    """P0-2: session-detail page must find a currently live session by ID."""
    token = _login_csrf(client)
    open_res = client.post(
        "/admin/session/open",
        json={"name": "Live Detail Test"},
        headers={"X-CSRF-Token": token},
    )
    sid = json.loads(open_res.data)["session"]["id"]

    res = client.get(f"/admin/session/archive/{sid}")
    assert res.status_code == 200
    body = json.loads(res.data)
    assert body["session"]["id"] == sid
    assert body["session"]["name"] == "Live Detail Test"
    assert body["session"]["status"] == "live"
    assert body["session"]["ended_at"] is None
    # Shape expected by admin-session-detail.js
    assert "records" in body
    assert "density" in body


def test_archive_detail_returns_closed_session(client):
    """P0-2: closed lifecycle session found via archive endpoint."""
    token = _login_csrf(client)
    open_res = client.post(
        "/admin/session/open",
        json={"name": "Closed Detail Test"},
        headers={"X-CSRF-Token": token},
    )
    sid = json.loads(open_res.data)["session"]["id"]
    client.post("/admin/session/close", headers={"X-CSRF-Token": token})

    res = client.get(f"/admin/session/archive/{sid}")
    assert res.status_code == 200
    body = json.loads(res.data)
    assert body["session"]["id"] == sid
    assert body["session"]["name"] == "Closed Detail Test"
    assert body["session"]["ended_at"] is not None
    assert body["records"] == []
    assert body["density"] == []


def test_archive_detail_no_id_after_close(client):
    """After session closes, requesting its old ID returns correct archived record."""
    token = _login_csrf(client)
    open_res = client.post(
        "/admin/session/open",
        json={"name": "Check After Close"},
        headers={"X-CSRF-Token": token},
    )
    sid = json.loads(open_res.data)["session"]["id"]
    client.post("/admin/session/close", headers={"X-CSRF-Token": token})

    # The ID that was live is now in archive — must still resolve
    res = client.get(f"/admin/session/archive/{sid}")
    assert res.status_code == 200
    assert json.loads(res.data)["session"]["ended_at"] is not None
