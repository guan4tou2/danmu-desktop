"""Backend coverage for admin Security/System v5 surfaces."""

from __future__ import annotations

from pathlib import Path

import pytest

from server.services import api_tokens as api_token_svc
from server.services import security_settings as security_settings_svc


def _login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def _csrf_token(client):
    _login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def _authed_get(client, url, **kwargs):
    _login(client)
    return client.get(url, **kwargs)


def _authed_patch(client, url, payload, **kwargs):
    token = _csrf_token(client)
    return client.patch(url, json=payload, headers={"X-CSRF-Token": token}, **kwargs)


def _authed_post(client, url, payload=None, **kwargs):
    token = _csrf_token(client)
    return client.post(url, json=(payload or {}), headers={"X-CSRF-Token": token}, **kwargs)


@pytest.fixture()
def isolated_security_settings(tmp_path, monkeypatch):
    state_file = tmp_path / "security_settings.json"
    monkeypatch.setattr(security_settings_svc, "_STATE_FILE", state_file)
    security_settings_svc.reset_for_tests()
    yield state_file
    security_settings_svc.reset_for_tests()


@pytest.fixture(autouse=True)
def _isolate_security_settings(isolated_security_settings):
    yield


@pytest.fixture()
def isolated_api_tokens(tmp_path, monkeypatch):
    token_file = tmp_path / "api_tokens.json"
    monkeypatch.setattr(api_token_svc, "_TOKENS_FILE", str(token_file))
    return token_file


def test_security_settings_endpoint_returns_runtime_summary(client):
    resp = _authed_get(client, "/admin/security/settings")

    assert resp.status_code == 200
    body = resp.get_json()
    assert body["ip_allowlist"]["enabled"] is False
    assert body["ip_allowlist"]["entries"] == []
    assert body["ip_allowlist"]["current_ip"]
    assert body["cors"]["origins"] == ["*"]
    assert body["cors"]["supports_credentials"] is False
    assert "GET" in body["cors"]["methods"]
    assert isinstance(body["tls"]["https"], bool)
    assert isinstance(body["tls"]["hsts_enabled"], bool)


def test_security_settings_patch_persists_allowlist_and_cors(client):
    patch = _authed_patch(
        client,
        "/admin/security/settings",
        {
            "ip_allowlist": {
                "enabled": True,
                "entries": ["127.0.0.1/32", "10.0.0.0/8"],
            },
            "cors": {
                "origins": ["https://viewer.example"],
                "supports_credentials": True,
                "methods": ["GET", "POST"],
            },
        },
    )
    assert patch.status_code == 200

    resp = _authed_get(client, "/admin/security/settings")
    body = resp.get_json()
    assert body["ip_allowlist"]["enabled"] is True
    assert body["ip_allowlist"]["entries"] == ["127.0.0.1/32", "10.0.0.0/8"]
    assert body["cors"]["origins"] == ["https://viewer.example"]
    assert body["cors"]["supports_credentials"] is True
    assert body["cors"]["methods"] == ["GET", "POST"]


def test_security_settings_rejects_invalid_allowlist_entry(client):
    resp = _authed_patch(
        client,
        "/admin/security/settings",
        {"ip_allowlist": {"enabled": True, "entries": ["not-a-cidr"]}},
    )

    assert resp.status_code == 400
    assert "allowlist" in resp.get_json()["error"].lower()


def test_runtime_cors_policy_removes_headers_for_unlisted_origins(client):
    patch = _authed_patch(
        client,
        "/admin/security/settings",
        {
            "cors": {
                "origins": ["https://viewer.example"],
                "supports_credentials": True,
                "methods": ["GET", "POST"],
            }
        },
    )
    assert patch.status_code == 200

    allowed = _authed_get(
        client,
        "/admin/metrics",
        headers={"Origin": "https://viewer.example"},
    )
    assert allowed.status_code == 200
    assert allowed.headers.get("Access-Control-Allow-Origin") == "https://viewer.example"
    assert allowed.headers.get("Access-Control-Allow-Credentials") == "true"

    blocked = _authed_get(
        client,
        "/admin/metrics",
        headers={"Origin": "https://evil.example"},
    )
    assert blocked.status_code == 200
    assert "Access-Control-Allow-Origin" not in blocked.headers


def test_admin_ip_allowlist_blocks_unlisted_remote_addr(client):
    enabled = _authed_patch(
        client,
        "/admin/security/settings",
        {"ip_allowlist": {"enabled": True, "entries": ["127.0.0.1/32"]}},
    )
    assert enabled.status_code == 200

    allowed = _authed_get(
        client,
        "/admin/metrics",
        environ_overrides={"REMOTE_ADDR": "127.0.0.1"},
    )
    assert allowed.status_code == 200

    blocked = _authed_get(
        client,
        "/admin/metrics",
        environ_overrides={"REMOTE_ADDR": "203.0.113.44"},
    )
    assert blocked.status_code == 403


def test_security_revoke_api_tokens_disables_all_tokens(client, isolated_api_tokens):
    create = _authed_post(
        client,
        "/admin/api-tokens",
        {"label": "danger-zone", "scopes": ["read:history"], "expiry_days": 7},
    )
    assert create.status_code == 200

    revoke = _authed_post(client, "/admin/security/revoke-api-tokens")
    assert revoke.status_code == 200
    assert revoke.get_json()["revoked"] == 1

    listed = _authed_get(client, "/admin/api-tokens")
    assert listed.status_code == 200
    assert listed.get_json()["tokens"] == []
    assert Path(isolated_api_tokens).exists()


def test_metrics_include_system_counts_and_security_summary(client, isolated_api_tokens):
    _authed_post(
        client,
        "/admin/api-tokens",
        {"label": "metrics-token", "scopes": ["read:history"], "expiry_days": 7},
    )

    resp = _authed_get(client, "/admin/metrics")

    assert resp.status_code == 200
    body = resp.get_json()
    assert isinstance(body["disk_usage_bytes"], int)
    assert body["disk_usage"]
    assert isinstance(body["plugins_loaded"], int)
    assert isinstance(body["webhooks_count"], int)
    assert body["tokens_count"] == 1
    assert body["security"]["ip_allowlist"]["enabled"] is False
    assert "hsts_enabled" in body["security"]["tls"]
