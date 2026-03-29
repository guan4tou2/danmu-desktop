"""Tests for the require_login decorator in services/security.py."""

import json


def login(client):
    return client.post("/login", data={"password": "test"}, follow_redirects=True)


# ---------------------------------------------------------------------------
# Decorator isolation tests using a temporary route
# ---------------------------------------------------------------------------


def test_require_login_rejects_unauthenticated(app):
    """Unauthenticated request to a @require_login route returns 401 JSON."""
    from server.services.security import require_login

    @app.route("/_test_require_login")
    @require_login
    def _protected():
        return "ok"

    client = app.test_client()
    res = client.get("/_test_require_login")
    assert res.status_code == 401
    data = json.loads(res.data)
    assert data == {"error": "Unauthorized"}
    assert res.content_type == "application/json"


def test_require_login_allows_authenticated(app):
    """Authenticated request passes through to the wrapped function."""
    from server.services.security import require_login

    @app.route("/_test_require_login_ok")
    @require_login
    def _protected_ok():
        return "ok"

    client = app.test_client()
    login(client)
    res = client.get("/_test_require_login_ok")
    assert res.status_code == 200
    assert res.data == b"ok"


def test_require_login_preserves_function_name(app):
    """The decorator preserves the wrapped function's name via @wraps."""
    from server.services.security import require_login

    @require_login
    def my_view():
        return "ok"

    assert my_view.__name__ == "my_view"


# ---------------------------------------------------------------------------
# Integration: verify existing admin routes reject unauthenticated requests
# ---------------------------------------------------------------------------


def test_blacklist_get_requires_login(client):
    """GET /admin/blacklist/get should return 401 when not logged in."""
    res = client.get("/admin/blacklist/get")
    assert res.status_code == 401
    data = json.loads(res.data)
    assert data.get("error") == "Unauthorized"


def test_blacklist_get_works_when_logged_in(client):
    """GET /admin/blacklist/get should succeed when logged in."""
    login(client)
    res = client.get("/admin/blacklist/get")
    assert res.status_code == 200
