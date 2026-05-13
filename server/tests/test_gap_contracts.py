"""Regression tests for prototype-gap API contracts.

These tests ensure blocked-by-BE pages can rely on stable response keys
even when values are placeholders (null / false / empty list).
"""

from __future__ import annotations

from server.services import audit_log


def _login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def _csrf_token(client):
    _login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def _authed_get(client, url):
    _login(client)
    return client.get(url)


def _authed_post(client, url, payload):
    token = _csrf_token(client)
    return client.post(url, json=payload, headers={"X-CSRF-Token": token})


def test_audit_contract_fields_present(client):
    audit_log.append("auth", "login", actor="admin")
    resp = _authed_get(client, "/admin/audit")
    assert resp.status_code == 200
    data = resp.get_json()

    assert "contract" in data
    assert set(("actions", "actors", "supports_before_after", "supports_platform")) <= set(
        data["contract"]
    )
    assert isinstance(data["events"], list)
    assert data["events"], "expected at least one event"
    ev = data["events"][0]
    for key in ("action", "platform", "before", "after"):
        assert key in ev


def test_integrations_sources_recent_contract_catalog(client):
    resp = _authed_get(client, "/admin/integrations/sources/recent")
    assert resp.status_code == 200
    data = resp.get_json()
    assert "source_catalog" in data
    ids = {row["id"] for row in data["source_catalog"]}
    assert {"rate_limit", "fire_token", "moderation", "backup", "webhooks", "system"} <= ids


def test_api_tokens_contract_and_placeholder_acl(client):
    create = _authed_post(
        client,
        "/admin/api-tokens",
        {"label": "contract-test", "scopes": ["read:history"], "expiry_days": 7},
    )
    assert create.status_code == 200
    created = create.get_json()
    assert "integration_acl" in created

    listed = _authed_get(client, "/admin/api-tokens")
    assert listed.status_code == 200
    data = listed.get_json()
    assert "contract" in data
    assert data["contract"]["acl_matrix_supported"] is False
    assert "available_integrations" in data["contract"]
    assert isinstance(data["tokens"], list)
    assert data["tokens"], "expected at least one token"
    assert "integration_acl" in data["tokens"][0]


def test_history_contract_placeholders_on_history_and_search(client):
    hist = _authed_get(client, "/admin/history")
    assert hist.status_code == 200
    hist_data = hist.get_json()
    assert "contract" in hist_data
    assert "poll_deepdive" in hist_data["contract"]
    assert "audience" in hist_data["contract"]
    assert "time_histogram" in hist_data["contract"]["poll_deepdive"]
    assert "delta_vs_previous" in hist_data["contract"]["poll_deepdive"]

    # Invalid query still returns stable contract payload.
    sr = _authed_get(client, "/admin/search?q=")
    assert sr.status_code == 400
    sr_data = sr.get_json()
    assert "contract" in sr_data
    assert "poll_deepdive" in sr_data["contract"]
