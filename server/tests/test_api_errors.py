from server import state
from server.services.ws_state import update_ws_client_count


def _register_ws_client():
    """Helper to ensure /fire endpoint can proceed."""
    update_ws_client_count(1)


def test_fire_invalid_json_returns_400(client):
    _register_ws_client()
    response = client.post("/fire")
    assert response.status_code == 400
    assert response.get_data(as_text=True) == "Invalid JSON"
    assert "X-Request-ID" in response.headers


def test_fire_validation_error_returns_details(client):
    _register_ws_client()
    response = client.post("/fire", json={"text": ""})
    assert response.status_code == 400
    assert response.is_json
    body = response.get_json()
    assert body["error"] == "Validation failed"
    assert "text" in body["details"]


def test_fire_blocked_keyword_returns_error(client):
    _register_ws_client()
    state.blacklist.add("BLOCKED")
    response = client.post("/fire", json={"text": "BLOCKED message"})
    assert response.status_code == 400
    assert response.is_json
    assert "blocked keywords" in response.get_json()["error"]


def test_check_blacklist_invalid_json(client):
    response = client.post("/check_blacklist")
    assert response.status_code == 400
    assert response.is_json
    assert response.get_json()["error"] == "Invalid JSON"


def test_rate_limit_error_returns_json(client):
    _register_ws_client()
    payload = {"text": "hello world"}
    assert client.post("/fire", json=payload).status_code == 200
    assert client.post("/fire", json=payload).status_code == 200
    third = client.post("/fire", json=payload)
    assert third.status_code == 429
    assert third.is_json
    body = third.get_json()
    assert "error" in body
    assert "too many requests" in body["error"].lower()


def test_not_found_returns_json_error(client):
    # 2026-05-18 design v4-r5: 404 is content-negotiated — browsers get
    # the friendly HTML page (errors/404.html), API callers must opt-in
    # to JSON by sending Accept: application/json (or X-Requested-With).
    response = client.get(
        "/non-existent-route",
        headers={"Accept": "application/json"},
    )
    assert response.status_code == 404
    assert response.is_json
    body = response.get_json()
    assert "error" in body
    assert "not found" in body["error"].lower()
    assert "X-Request-ID" in response.headers


def test_not_found_returns_html_for_browser(client):
    """Browser navigation (Accept: text/html) gets the v4-r5 error page."""
    response = client.get(
        "/non-existent-route",
        headers={"Accept": "text/html"},
    )
    assert response.status_code == 404
    assert not response.is_json
    body = response.data.decode("utf-8")
    assert "admin-err" in body
    assert "找不到頁面" in body


def test_health_endpoint_has_request_id(client):
    response = client.get("/health")
    assert response.status_code == 200
    assert response.is_json
    assert response.get_json()["status"] == "healthy"
    assert "X-Request-ID" in response.headers


def test_fire_no_ws_client_returns_503(client):
    """無 overlay 連線時 /fire 應回傳 503"""
    update_ws_client_count(0)
    resp = client.post("/fire", json={"text": "hello"})
    assert resp.status_code == 503
    assert resp.is_json
    assert "overlay" in resp.get_json()["error"].lower()


def test_fire_invalid_image_url_returns_400(client):
    """isImage=True 但 text 非合法 URL 應回傳 400"""
    update_ws_client_count(1)
    resp = client.post("/fire", json={"text": "not-a-url", "isImage": True})
    assert resp.status_code == 400
    assert resp.is_json
    assert "url" in resp.get_json()["error"].lower()
