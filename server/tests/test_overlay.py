"""Tests for the /overlay OBS Browser Source route."""


def test_overlay_route_returns_200(client):
    rv = client.get("/overlay")
    assert rv.status_code == 200
    assert b"danmubody" in rv.data
    assert b"overlay.js" in rv.data


def test_overlay_injects_ws_port(client):
    rv = client.get("/overlay")
    assert b"wsPort:" in rv.data


def test_overlay_includes_css(client):
    rv = client.get("/overlay")
    assert b"overlay.css" in rv.data


def test_overlay_has_ws_token_placeholder(client):
    rv = client.get("/overlay")
    assert b"wsToken:" in rv.data
