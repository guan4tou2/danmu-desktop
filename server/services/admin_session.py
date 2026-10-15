"""Bound admin logins to the current credentials and an absolute expiry.

The browser only stores Flask's signed, HttpOnly session cookie. No admin
password or connection token is copied into browser storage.
"""

import hashlib
import hmac
import time
from datetime import datetime, timezone

from flask import current_app, session
from flask.sessions import SecureCookieSessionInterface

REMEMBER_SECONDS = 30 * 24 * 60 * 60
_CREDENTIAL_CACHE_KEY = "danmu.admin_session.credential_version"


def _credential_version():
    credential = current_app.config.get("ADMIN_PASSWORD_HASHED") or current_app.config.get(
        "ADMIN_PASSWORD", ""
    )
    secret = current_app.secret_key
    if isinstance(secret, str):
        secret = secret.encode("utf-8")
    cache_key = (credential, secret)
    cached = current_app.extensions.get(_CREDENTIAL_CACHE_KEY)
    if cached is not None and cached[0] == cache_key:
        return cached[1]

    # Credential-derived cookie data must resist password guessing even for
    # legacy plaintext environment credentials. Derive once per credential
    # or secret change; authenticated requests reuse the app-local result.
    # The domain and server secret make it deterministic across restarts
    # without publishing a password-only digest in the signed session.
    version = hashlib.pbkdf2_hmac(
        "sha256", credential.encode("utf-8"), b"admin-session-v2:" + secret, 600_000
    ).hex()
    current_app.extensions[_CREDENTIAL_CACHE_KEY] = (cache_key, version)
    return version


def start_admin_session(*, remember=False):
    session.clear()
    session["logged_in"] = True
    session["admin_auth_version"] = _credential_version()
    session["admin_expires_at"] = time.time() + (
        REMEMBER_SECONDS if remember else current_app.permanent_session_lifetime.total_seconds()
    )
    session.permanent = remember


def validate_admin_session():
    """Run before every route so APIs and rendered pages use the same policy."""
    if not session.get("logged_in"):
        return
    version = session.get("admin_auth_version")
    deadline = session.get("admin_expires_at")
    if (
        not isinstance(version, str)
        or not hmac.compare_digest(version, _credential_version())
        or not isinstance(deadline, (int, float))
        or not deadline > time.time()
    ):
        session.clear()


class AdminSessionInterface(SecureCookieSessionInterface):
    def get_expiration_time(self, app, session):
        if session.permanent and session.get("logged_in"):
            # Keep the original deadline even when another setting modifies
            # the session, rather than extending the login on each request.
            return datetime.fromtimestamp(session["admin_expires_at"], timezone.utc)
        return super().get_expiration_time(app, session)


def init_admin_sessions(app):
    app.session_interface = AdminSessionInterface()
    app.before_request(validate_admin_session)
