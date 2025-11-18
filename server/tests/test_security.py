import json
from pathlib import Path

from server import state
from server.managers import connection_manager
from server.services.security import generate_font_token


def login(client):
    return client.post(
        "/login",
        data={"password": "test"},
        follow_redirects=True,
    )


def test_admin_update_requires_csrf(client):
    login(client)
    with client.session_transaction() as sess:
        token = sess["csrf_token"]

    payload = {"type": "Speed", "index": 3, "value": 5}
    res = client.post("/admin/update", json=payload)
    assert res.status_code == 403

    res = client.post(
        "/admin/update",
        json=payload,
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200


def test_fire_rate_limit(client):
    # ensure there is mock ws client connected
    connection_manager.register_ws_client(object())
    payload = {
        "text": "hello",
        "fontInfo": {"name": "NotoSansTC"},
        "isImage": False,
    }

    first = client.post("/fire", json=payload)
    second = client.post("/fire", json=payload)
    assert first.status_code == 200
    assert second.status_code == 200
    third = client.post("/fire", json=payload)
    assert third.status_code == 429


def test_font_download_requires_token(client, tmp_path):
    fonts_dir = Path(state.USER_FONTS_DIR)
    test_font = fonts_dir / "Sample.ttf"
    test_font.write_text("data")

    with client.application.app_context():
        token = generate_font_token("Sample.ttf")
    url = f"/user_fonts/Sample.ttf?token={token}"

    unauthorized = client.get("/user_fonts/Sample.ttf")
    assert unauthorized.status_code == 403

    bad = client.get("/user_fonts/Sample.ttf?token=bad")
    assert bad.status_code == 403

    authorized = client.get(url)
    assert authorized.status_code == 200

