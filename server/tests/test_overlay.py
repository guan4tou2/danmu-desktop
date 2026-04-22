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


def test_overlay_renders_idle_scene(client):
    rv = client.get("/overlay")
    body = rv.data
    assert b'id="overlay-idle"' in body
    assert b"hud-hero-title" in body
    assert b"Danmu Fire" in body
    assert b"OVERLAY READY" in body
    # QR is inlined as an SVG path
    assert b"<svg" in body
    assert b"<path" in body


def test_overlay_exposes_join_url(client):
    rv = client.get("/overlay")
    assert b"joinUrl:" in rv.data
