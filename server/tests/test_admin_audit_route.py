"""HTTP contract tests for /admin/audit route filters."""

from __future__ import annotations

from server.services import audit_log


def _login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def _authed_get(client, url):
    _login(client)
    return client.get(url)


def test_audit_filters_by_action(client):
    audit_log.append("auth", "login", actor="admin")
    audit_log.append("auth", "logout", actor="admin")
    audit_log.append("broadcast", "mode_changed", actor="admin")

    resp = _authed_get(client, "/admin/audit?action=login")
    assert resp.status_code == 200
    data = resp.get_json()
    assert data["events"], "expected at least one filtered event"
    assert all((e.get("action") or "") == "login" for e in data["events"])


def test_audit_filters_by_actor(client):
    audit_log.append("auth", "login", actor="admin")
    audit_log.append("auth", "login", actor="operator")
    audit_log.append("auth", "logout", actor="admin")

    resp = _authed_get(client, "/admin/audit?actor=operator")
    assert resp.status_code == 200
    data = resp.get_json()
    assert data["events"], "expected at least one filtered event"
    assert all((e.get("actor") or "") == "operator" for e in data["events"])
