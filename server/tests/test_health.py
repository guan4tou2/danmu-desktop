def test_health_returns_healthy(client):
    resp = client.get("/health")
    assert resp.status_code == 200
    data = resp.get_json()
    assert data["status"] == "healthy"
    assert data["service"] == "danmu-server"


def test_health_ready_returns_ready(client):
    resp = client.get("/health/ready")
    assert resp.status_code == 200
    data = resp.get_json()
    assert data["status"] == "ready"


def test_health_live_returns_alive(client):
    resp = client.get("/health/live")
    assert resp.status_code == 200
    data = resp.get_json()
    assert data["status"] == "alive"
