import json

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
    assert body["error"]["code"] == "TOO_MANY_REQUESTS"
    assert "request_id" in body["error"]


def test_not_found_returns_json_error(client):
    response = client.get("/non-existent-route")
    assert response.status_code == 404
    assert response.is_json
    body = response.get_json()
    assert body["error"]["code"] == "NOT_FOUND"
    assert "X-Request-ID" in response.headers


def test_health_endpoint_has_request_id(client):
    response = client.get("/health")
    assert response.status_code == 200
    assert response.is_json
    assert response.get_json()["status"] == "healthy"
    assert "X-Request-ID" in response.headers
