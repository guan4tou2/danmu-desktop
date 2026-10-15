"""Admin sign-in persistence, absolute expiry and credential revocation."""

from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

import pytest

from server.services import admin_session


def _login(client, remember=False, password="test"):
    data = {"password": password}
    if remember:
        data["remember"] = "1"
    return client.post(
        "/login", data=data, headers={"X-Requested-With": "fetch", "Accept": "application/json"}
    )


def test_unchecked_login_remains_a_browser_session(client, app):
    response = _login(client)
    assert response.status_code == 200
    cookie = response.headers["Set-Cookie"]
    assert "Expires=" not in cookie
    assert "Max-Age=" not in cookie
    with client.session_transaction() as stored:
        assert not stored.permanent
        assert stored["admin_expires_at"] - admin_session.time.time() == pytest.approx(
            app.permanent_session_lifetime.total_seconds(), abs=3
        )


def test_remember_cookie_lasts_30_days_and_keeps_security_flags(client, app):
    app.config["SESSION_COOKIE_SECURE"] = True
    response = _login(client, remember=True)
    cookie = response.headers["Set-Cookie"]
    assert "Secure" in cookie and "HttpOnly" in cookie and "SameSite=Strict" in cookie
    expiry = parsedate_to_datetime(cookie.split("Expires=", 1)[1].split(";", 1)[0])
    remaining = (expiry - datetime.now(timezone.utc)).total_seconds()
    assert remaining == pytest.approx(admin_session.REMEMBER_SECONDS, abs=3)
    with client.session_transaction() as stored:
        assert stored.permanent
        assert "password" not in stored
        assert len(stored["admin_auth_version"]) == 64
        assert stored["admin_auth_version"] != app.config["ADMIN_PASSWORD"]


def test_remembered_cookie_restores_login_in_a_new_browser_context(client, app):
    _login(client, remember=True)
    cookie = client.get_cookie(app.config["SESSION_COOKIE_NAME"])
    restored = app.test_client()
    restored.set_cookie(cookie.key, cookie.value)
    assert restored.get("/admin/ws-auth").status_code == 200
    assert b"logged_in: true" in restored.get("/admin/").data


def test_active_requests_do_not_extend_remember_deadline(client, monkeypatch):
    _login(client, remember=True)
    with client.session_transaction() as stored:
        deadline = stored["admin_expires_at"]
    monkeypatch.setattr(admin_session.time, "time", lambda: deadline - 10)
    response = client.get("/admin/ws-auth")
    assert response.status_code == 200
    cookie = response.headers["Set-Cookie"]
    expiry = parsedate_to_datetime(cookie.split("Expires=", 1)[1].split(";", 1)[0])
    assert expiry.timestamp() == pytest.approx(deadline, abs=1)


@pytest.mark.parametrize("remember", [False, True])
def test_expiry_rejects_api_page_and_overlay_access(client, monkeypatch, remember):
    from server.services import ws_auth

    _login(client, remember=remember)
    with client.session_transaction() as stored:
        deadline = stored["admin_expires_at"]
    ws_auth.set_state(require_token=True, token="isolated-display-password")
    monkeypatch.setattr(admin_session.time, "time", lambda: deadline + 1)
    assert client.get("/admin/ws-auth").status_code == 401
    assert b"logged_in: null" in client.get("/admin/").data
    overlay = client.get("/overlay")
    assert overlay.status_code != 200
    assert b"isolated-display-password" not in overlay.data


def test_legacy_unversioned_sessions_require_one_fresh_login(client):
    with client.session_transaction() as stored:
        stored["logged_in"] = True
        stored["csrf_token"] = "legacy"
    assert client.get("/admin/ws-auth").status_code == 401
    assert _login(client, remember=True).status_code == 200
    assert client.get("/admin/ws-auth").status_code == 200


def test_logout_deletes_remembered_cookie(client, app):
    response = _login(client, remember=True)
    response = client.post("/logout", headers={"X-CSRF-Token": response.json["csrf_token"]})
    assert response.status_code == 302
    assert "Max-Age=0" in response.headers["Set-Cookie"]
    assert client.get_cookie(app.config["SESSION_COOKIE_NAME"]) is None
    assert client.get("/admin/ws-auth").status_code == 401


def test_password_change_revokes_this_and_other_devices_and_keeps_new_login_working(
    client, app, monkeypatch, tmp_path
):
    import runpy

    from server import config as config_module
    from server.app import create_app
    from server.services import ws_auth

    hash_file = tmp_path / "persisted-runtime" / "admin_password.hash"
    monkeypatch.setattr(config_module, "_HASH_FILE", hash_file)
    monkeypatch.setattr(config_module, "_LEGACY_HASH_FILE", tmp_path / "legacy-missing")
    ws_auth.set_state(require_token=True, token="isolated-display-password")
    response = _login(client, remember=True)
    previous_cookie = client.get_cookie(app.config["SESSION_COOKIE_NAME"])
    other = app.test_client()
    _login(other, remember=True)
    response = client.post(
        "/admin/change_password",
        json={
            "current_password": "test",
            "new_password": "updated-password-123",
            "confirm_password": "updated-password-123",
        },
        headers={"X-CSRF-Token": response.json["csrf_token"]},
    )
    assert response.status_code == 200
    assert response.json["reauthenticate"] is True
    assert client.get("/admin/ws-auth").status_code == 401
    assert other.get("/overlay").status_code != 200
    assert other.get("/admin/ws-auth").status_code == 401
    assert _login(client, remember=True, password="updated-password-123").status_code == 200
    assert client.get("/admin/ws-auth").status_code == 200

    # Re-evaluate Config exactly as a new process does, retaining the mounted
    # runtime directory and the original environment password/SECRET_KEY.
    # The actual password save above must survive; no save stub is involved.
    monkeypatch.setenv("ADMIN_PASSWORD_HASH_FILE", str(hash_file))
    monkeypatch.setenv("ADMIN_PASSWORD", "test")
    monkeypatch.setenv("ADMIN_PASSWORD_HASHED", "")
    monkeypatch.setenv("SECRET_KEY", app.secret_key)
    monkeypatch.setenv("ENV", "development")
    monkeypatch.setenv("SESSION_COOKIE_SECURE", "false")
    restored_config = runpy.run_path(config_module.__file__)["Config"]
    assert restored_config.ADMIN_PASSWORD_HASHED == config_module.load_runtime_hash()

    class RecreatedConfig(restored_config):
        TESTING = True
        DANMU_HISTORY_PERSIST = False

    recreated = create_app(RecreatedConfig)
    restored = recreated.test_client()
    restored.set_cookie(previous_cookie.key, previous_cookie.value)
    assert restored.get("/admin/ws-auth").status_code == 401
    assert _login(restored, password="test").status_code == 401
    assert _login(restored, remember=True, password="updated-password-123").status_code == 200
    assert restored.get("/admin/ws-auth").status_code == 200


def test_wrong_password_cannot_create_remembered_login(client):
    response = _login(client, remember=True, password="incorrect")
    assert response.status_code == 401
    assert "Set-Cookie" not in response.headers
    assert client.get("/admin/ws-auth").status_code == 401


def test_reauthentication_replaces_csrf_and_remember_setting(client):
    first = _login(client).json["csrf_token"]
    second = _login(client, remember=True).json["csrf_token"]
    assert second != first
    with client.session_transaction() as stored:
        assert stored.permanent
    _login(client)
    with client.session_transaction() as stored:
        assert not stored.permanent


def test_credential_derivation_is_cached_between_authenticated_requests(client, app, monkeypatch):
    from unittest.mock import Mock

    derive = Mock(wraps=admin_session.hashlib.pbkdf2_hmac)
    monkeypatch.setattr(admin_session.hashlib, "pbkdf2_hmac", derive)
    assert _login(client, remember=True).status_code == 200
    assert client.get("/admin/ws-auth").status_code == 200
    assert client.get("/admin/").status_code == 200
    assert _login(client).status_code == 200
    assert derive.call_count == 1
    assert derive.call_args.args[0] == "sha256"
    assert derive.call_args.args[3] == 600_000


def test_credential_derivation_recomputes_when_password_or_server_secret_changes(app, monkeypatch):
    from unittest.mock import Mock

    derive = Mock(wraps=admin_session.hashlib.pbkdf2_hmac)
    monkeypatch.setattr(admin_session.hashlib, "pbkdf2_hmac", derive)
    original = admin_session._credential_version()
    app.config["ADMIN_PASSWORD"] = "changed-isolated-password"
    changed_password = admin_session._credential_version()
    assert changed_password != original
    assert admin_session._credential_version() == changed_password
    app.secret_key = "changed-isolated-server-secret"
    changed_secret = admin_session._credential_version()
    assert changed_secret != changed_password
    assert admin_session._credential_version() == changed_secret
    assert derive.call_count == 3


def test_same_credentials_and_secret_restore_remembered_cookie_after_app_recreation(client, app):
    from server.app import create_app
    from server.config import Config

    assert _login(client, remember=True).status_code == 200
    cookie = client.get_cookie(app.config["SESSION_COOKIE_NAME"])

    class RecreatedConfig(Config):
        TESTING = True
        DANMU_HISTORY_PERSIST = False
        SECRET_KEY = app.secret_key
        ADMIN_PASSWORD = app.config["ADMIN_PASSWORD"]
        ADMIN_PASSWORD_HASHED = app.config["ADMIN_PASSWORD_HASHED"]

    recreated = create_app(RecreatedConfig)
    restored = recreated.test_client()
    restored.set_cookie(cookie.key, cookie.value)
    assert restored.get("/admin/ws-auth").status_code == 200
    assert b"logged_in: true" in restored.get("/admin/").data
