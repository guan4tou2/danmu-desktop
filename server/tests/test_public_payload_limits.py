"""Size and count limits on what anonymous clients can make the server process.

Covers, per endpoint or service:
- /fire `effects` / `fontInfo` container limits and effect de-duplication
- the body ceiling on public POST endpoints, and refusing exhausted or
  denied clients before the body is read (without charging any bucket)
- emoji images attached per message
- the inbound WebSocket message ceiling inside simple-websocket

Each limit has a test that the oversized shape is refused and one that the
legitimate shape (viewer page, Slido extension with a Fire token, stickers,
all style fields filled) still goes through unchanged.
"""

import io
import json
import os
import socket
import threading

import pytest

from server.services import effects as eff_svc
from server.services import emoji as emoji_mod
from server.services import fire_token, ratelimit_ip, ws_queue
from server.services.effects import MAX_EFFECTS_PER_DANMU, render_effects
from server.services.emoji import EmojiService
from server.services.validation import FireRequestSchema, validate_request
from server.services.ws_state import update_ws_client_count

BUILTIN_EFFECTS = ["blink", "bounce", "glow", "rainbow", "shake", "spin", "wave", "zoom"]

# What server/static/js/main.js sends with every effect toggled on: one entry
# per effect name, params = .dme defaults merged with EFFECT_PARAM_SPEC.
VIEWER_EFFECT_PARAMS = {
    "glow": {"duration": 1.2, "intensity": "medium", "brightness": 80, "spread": 12},
    "blink": {"duration": 1, "rate": 3, "minOpacity": 20},
    "bounce": {"duration": 0.6, "height": 16, "rate": 2},
    "rainbow": {"duration": 2, "speed": 2, "saturation": 90},
    "shake": {"duration": 0.3, "strength": 4, "rate": 8},
    "spin": {"duration": 1, "speed": 1},
    "wave": {"duration": 1, "amplitude": 8, "wavelength": 40},
    "zoom": {"duration": 1, "maxScale": 1.5, "rate": 1},
}


def _viewer_effects():
    return [{"name": n, "params": dict(VIEWER_EFFECT_PARAMS[n])} for n in BUILTIN_EFFECTS]


def _largest_legit_fire_body():
    """Every /fire field at the size a real client can produce."""
    return {
        "text": "測" * 100,  # FireRequestSchema.text max, 3-byte chars
        "isImage": False,
        "color": "#FFAA00",
        "size": 64,
        "speed": 3.0,
        "opacity": 100,
        "font": "N" * 100,
        "fontInfo": {"name": "NotoSansTC", "url": "/user_fonts/x.ttf?token=" + "t" * 120},
        "effects": _viewer_effects(),
        "fingerprint": "f" * 128,
        "nickname": "暱" * 20,
        "layout": "scroll",
        # Schema allows 8192; real Turnstile / hCaptcha tokens are smaller.
        "captcha_token": "c" * 8192,
    }


class _TrackingStream(io.BytesIO):
    """Request body that records whether anything read from it."""

    def __init__(self, data: bytes):
        super().__init__(data)
        self.was_read = False
        self.max_pos = 0

    def _note(self):
        self.was_read = True
        self.max_pos = max(self.max_pos, self.tell())

    def read(self, *args, **kwargs):
        try:
            return super().read(*args, **kwargs)
        finally:
            self._note()

    def read1(self, *args, **kwargs):
        try:
            return super().read1(*args, **kwargs)
        finally:
            self._note()

    def readinto(self, *args, **kwargs):
        try:
            return super().readinto(*args, **kwargs)
        finally:
            self._note()

    def readline(self, *args, **kwargs):
        try:
            return super().readline(*args, **kwargs)
        finally:
            self._note()


def _post_stream(client, path, body: bytes, *, ip="1.1.1.1", headers=None, content_type=None):
    stream = _TrackingStream(body)
    resp = client.post(
        path,
        input_stream=stream,
        content_type=content_type or "application/json",
        headers={"Content-Length": str(len(body)), **(headers or {})},
        environ_base={"REMOTE_ADDR": ip},
    )
    return resp, stream


@pytest.fixture()
def overlay():
    update_ws_client_count(1)
    ws_queue.dequeue_all()
    yield
    ws_queue.dequeue_all()
    update_ws_client_count(0)


@pytest.fixture()
def isolated_fire_token(tmp_path, monkeypatch):
    monkeypatch.setattr(fire_token, "_STATE_FILE", tmp_path / "fire_token.json")
    fire_token.reset_for_tests()
    yield
    fire_token.reset_for_tests()


def _fire(client, payload, ip="1.1.1.1", headers=None):
    return client.post(
        "/fire", json=payload, headers=headers or {}, environ_base={"REMOTE_ADDR": ip}
    )


# ─── /fire effects and fontInfo ──────────────────────────────────────────────


def test_fire_rejects_effects_list_over_the_limit(client, overlay):
    resp = _fire(client, {"text": "hi", "effects": [{"name": "shake"}] * 500})
    assert resp.status_code == 400
    assert "effects" in resp.get_json()["details"]
    assert ws_queue.dequeue_all() == []


def test_effects_length_is_checked_before_items_are_deserialized():
    # Items that would each fail item validation: the length error must be the
    # one reported, i.e. the list was refused before per-item processing.
    data, errors = validate_request(
        FireRequestSchema, {"text": "hi", "effects": [{"name": "!"}] * 10_000}
    )
    assert data is None
    assert "effects" in errors
    assert "At most" in str(errors["effects"])


def test_fire_with_every_builtin_effect_still_renders_them_all(client, overlay):
    resp = _fire(client, {"text": "all effects", "effects": _viewer_effects()})
    assert resp.status_code == 200, resp.data
    css = ws_queue.dequeue_all()[0]["effectCss"]
    for name in BUILTIN_EFFECTS:
        assert f"dme-{name}" in css["animation"] or f"dme-{name}" in css["keyframes"], name
    assert len(css["animation"].split(", ")) == len(BUILTIN_EFFECTS)


def test_fire_accepts_effects_at_the_limit(client, overlay):
    resp = _fire(client, {"text": "hi", "effects": [{"name": "shake"}] * MAX_EFFECTS_PER_DANMU})
    assert resp.status_code == 200, resp.data


def test_render_effects_applies_each_name_once():
    single = render_effects([{"name": "shake", "params": {"duration": 0.3}}])
    repeated = render_effects([{"name": "shake", "params": {"duration": 0.3}}] * 12)
    assert repeated == single
    # The first entry for a name wins.
    mixed = render_effects(
        [
            {"name": "shake", "params": {"duration": 0.5}},
            {"name": "shake", "params": {"duration": 2}},
        ]
    )
    assert mixed == render_effects([{"name": "shake", "params": {"duration": 0.5}}])


def test_render_effects_keeps_order_and_composition_of_distinct_effects():
    out = render_effects([{"name": "shake"}, {"name": "glow"}, {"name": "shake"}])
    parts = out["animation"].split(", ")
    assert len(parts) == 2
    assert parts[0].startswith("dme-shake") and parts[1].startswith("dme-glow")
    assert len(out["animationComposition"].split(", ")) == 2


def test_render_effects_stops_at_the_cap(monkeypatch):
    fake = {
        f"fx{i}": {"keyframes": f"@keyframes fx{i} {{}}", "animation": f"fx{i} 1s", "params": {}}
        for i in range(MAX_EFFECTS_PER_DANMU + 5)
    }
    monkeypatch.setattr(eff_svc, "get_effect", lambda name: fake.get(name))
    out = render_effects([{"name": n} for n in fake])
    assert len(out["animation"].split(", ")) == MAX_EFFECTS_PER_DANMU


@pytest.mark.parametrize(
    "item",
    [
        {"name": "shake", "params": {f"k{i}": 1 for i in range(50)}},
        {"name": "shake", "params": ["not", "an", "object"]},
        {"name": "shake", "params": {"duration": {"nested": [1, 2, 3]}}},
        {"name": "shake", "params": {"duration": "x" * 1000}},
        {"name": "shake", "a": 1, "b": 2, "c": 3, "d": 4},
    ],
)
def test_fire_rejects_oversized_or_malformed_effect_entries(client, overlay, item):
    resp = _fire(client, {"text": "hi", "effects": [item]})
    assert resp.status_code == 400


def test_fire_rejects_font_info_with_too_many_keys(client, overlay):
    font_info = {"name": "NotoSansTC", **{f"k{i}": "v" for i in range(100)}}
    resp = _fire(client, {"text": "hi", "fontInfo": font_info})
    assert resp.status_code == 400
    assert "fontInfo" in resp.get_json()["details"]


def test_fire_accepts_font_payload_shaped_font_info(client, overlay):
    resp = _fire(
        client, {"text": "hi", "fontInfo": {"name": "NotoSansTC", "url": None, "type": "default"}}
    )
    assert resp.status_code == 200, resp.data


# ─── body ceiling on public endpoints ───────────────────────────────────────


def test_largest_legitimate_fire_body_is_well_under_the_ceiling(app, client, overlay):
    body = json.dumps(_largest_legit_fire_body()).encode("utf-8")
    ceiling = app.config["PUBLIC_BODY_MAX_BYTES"]
    assert len(body) * 2 < ceiling, (len(body), ceiling)
    # ensure_ascii escaping (what a non-browser client may send) also fits.
    escaped = json.dumps(_largest_legit_fire_body(), ensure_ascii=True).encode()
    assert len(escaped) < ceiling, (len(escaped), ceiling)

    resp, _ = _post_stream(client, "/fire", body)
    assert resp.status_code == 200, resp.data
    msg = ws_queue.dequeue_all()[0]
    assert msg["text"] == "測" * 100
    assert len(msg["effectCss"]["animation"].split(", ")) == len(BUILTIN_EFFECTS)


@pytest.mark.parametrize(
    "path",
    ["/fire", "/check_blacklist", "/poll/vote", "/integrations/slido/status"],
)
def test_public_json_endpoints_refuse_oversized_bodies_without_reading(
    app, client, overlay, isolated_fire_token, path
):
    headers = {}
    if path == "/integrations/slido/status":
        headers["X-Fire-Token"] = fire_token.regenerate()["token"]
    body = b'{"text": "' + b"a" * (app.config["PUBLIC_BODY_MAX_BYTES"] + 10) + b'"}'
    resp, stream = _post_stream(client, path, body, headers=headers)
    assert resp.status_code == 413
    assert resp.is_json
    assert not stream.was_read


def test_incoming_webhook_refuses_oversized_bodies_without_reading(app, client):
    body = b'{"text": "' + b"a" * (app.config["PUBLIC_BODY_MAX_BYTES"] + 10) + b'"}'
    resp, stream = _post_stream(client, "/admin/webhook/incoming/whatever", body)
    assert resp.status_code == 413
    assert not stream.was_read


def test_login_refuses_oversized_form_without_reading(app, client):
    body = b"password=" + b"a" * (app.config["PUBLIC_BODY_MAX_BYTES"] + 10)
    resp, stream = _post_stream(
        client, "/login", body, content_type="application/x-www-form-urlencoded"
    )
    assert resp.status_code == 413
    assert not stream.was_read


def test_login_still_works(client):
    resp = client.post("/login", data={"password": "test"})
    assert resp.status_code in (200, 302)


def test_body_without_content_length_is_still_bounded(app, client, overlay):
    """A body sent without Content-Length is cut off at the ceiling, not read in full."""
    ceiling = app.config["PUBLIC_BODY_MAX_BYTES"]
    stream = _TrackingStream(b'{"text": "' + b"a" * (ceiling * 4) + b'"}')
    resp = client.post(
        "/fire",
        input_stream=stream,
        content_type="application/json",
        environ_overrides={"wsgi.input_terminated": True},
    )
    assert resp.status_code == 413
    assert stream.max_pos <= ceiling + 1


def test_check_blacklist_and_poll_vote_still_work(client, overlay):
    assert client.post("/check_blacklist", json={"text": "hello"}).status_code == 200
    # No active poll: the endpoint answers normally (409) instead of 413.
    assert client.post("/poll/vote", json={"key": "A"}).status_code == 409


# ─── refusing exhausted / denied clients before the body is read ────────────


def test_exhausted_ip_is_refused_before_body_is_read(client, overlay):
    # conftest.TestConfig: FIRE_RATE_LIMIT = 2
    for text in ("one", "two"):
        resp, stream = _post_stream(client, "/fire", json.dumps({"text": text}).encode())
        assert resp.status_code == 200
        assert stream.was_read  # the tracker does see normal reads
    resp, stream = _post_stream(client, "/fire", json.dumps({"text": "three"}).encode())
    assert resp.status_code == 429
    assert not stream.was_read


def test_denied_ip_is_refused_before_body_is_read(client, overlay):
    ratelimit_ip.set_state({"denylist": ["9.9.9.9"]})
    resp, stream = _post_stream(client, "/fire", json.dumps({"text": "hi"}).encode(), ip="9.9.9.9")
    assert resp.status_code == 429
    assert not stream.was_read
    # Other IPs are unaffected.
    assert _fire(client, {"text": "hi"}, ip="1.2.3.4").status_code == 200


def test_precheck_does_not_charge_any_bucket(client, overlay):
    """Requests that fail validation never charged the bucket, and still don't."""
    for _ in range(5):
        assert _fire(client, {"text": ""}).status_code == 400
    assert _fire(client, {"text": "one"}).status_code == 200
    assert _fire(client, {"text": "two"}).status_code == 200
    assert _fire(client, {"text": "three"}).status_code == 429


def test_in_memory_would_allow_never_records_a_hit():
    from server.services.security import InMemoryRateLimiter

    rl = InMemoryRateLimiter()
    for _ in range(10):
        assert rl.would_allow("k", 2, 60) is True
    assert rl.allow("k", 2, 60) is True
    assert rl.allow("k", 2, 60) is True
    assert rl.would_allow("k", 2, 60) is False
    assert rl.allow("k", 2, 60) is False


def test_redis_would_allow_only_counts():
    from server.services.security import RedisRateLimiter

    calls = []

    class FakeRedis:
        def zcount(self, key, lo, hi):
            calls.append(("zcount", key, lo, hi))
            return 3

        def __getattr__(self, name):  # any write would show up here
            raise AssertionError(f"unexpected redis call: {name}")

    rl = RedisRateLimiter.__new__(RedisRateLimiter)
    rl.client = FakeRedis()
    assert rl.would_allow("fire:1.1.1.1", 3, 60) is False
    assert rl.would_allow("fire:1.1.1.1", 4, 60) is True
    assert [c[1] for c in calls] == ["ratelimit:fire:1.1.1.1"] * 2


def test_redis_would_allow_fails_open_to_allow():
    from server.services.security import RedisRateLimiter

    class Broken:
        def zcount(self, *a):
            raise ConnectionError("down")

    rl = RedisRateLimiter.__new__(RedisRateLimiter)
    rl.client = Broken()
    assert rl.would_allow("k", 1, 60) is True


def test_valid_fire_token_keeps_its_own_lane(app, client, overlay, isolated_fire_token):
    """Slido via a Fire token: not stopped by an exhausted public bucket, no captcha."""
    app.config["CAPTCHA_PROVIDER"] = "turnstile"
    app.config["CAPTCHA_SECRET"] = "s"
    app.config["FIRE_RATE_LIMIT"] = 1
    token = fire_token.regenerate()["token"]
    headers = {"X-Fire-Token": token, "X-Fire-Source": "slido"}
    slido_payload = {"text": "觀眾提問：這個怎麼用？", "nickname": "Slido"}

    for i in range(4):
        resp = _fire(client, dict(slido_payload, text=f"q{i}"), headers=headers)
        assert resp.status_code == 200, resp.data
    assert ws_queue.dequeue_all()[0]["text"] == "q0"


def test_invalid_fire_token_uses_its_own_bucket_and_is_refused_before_parsing(
    app, client, overlay, isolated_fire_token
):
    fire_token.regenerate()
    bad = {"X-Fire-Token": "not-the-token"}
    # Public bucket exhausted first: a bad token is still answered 401, not 429.
    assert _fire(client, {"text": "one"}).status_code == 200
    assert _fire(client, {"text": "two"}).status_code == 200
    assert _fire(client, {"text": "x"}, headers=bad).status_code == 401
    assert _fire(client, {"text": "x"}, headers=bad).status_code == 401
    # fire_badtoken bucket (FIRE_RATE_LIMIT = 2) now empty → 429 without reading.
    resp, stream = _post_stream(client, "/fire", b'{"text": "x"}', headers=bad)
    assert resp.status_code == 429
    assert not stream.was_read


def test_sticker_danmu_still_goes_through(client, overlay, monkeypatch):
    from server.routes import api as api_mod

    monkeypatch.setattr(api_mod.sticker_service, "resolve", lambda text: "party.gif")
    resp = _fire(client, {"text": ":party:"})
    assert resp.status_code == 200, resp.data
    msg = ws_queue.dequeue_all()[0]
    assert msg["isImage"] is True
    assert msg["text"].endswith("/static/stickers/party.gif")


def test_admin_route_without_session_is_refused_before_body_is_read(client):
    body = json.dumps({"require_token": True, "token": "x" * 20}).encode()
    resp, stream = _post_stream(client, "/admin/ws-auth", body)
    assert resp.status_code == 403
    assert not stream.was_read


# ─── emoji images per message ───────────────────────────────────────────────


@pytest.fixture()
def emoji_svc(tmp_path, monkeypatch):
    monkeypatch.setattr(emoji_mod, "_EMOJIS_DIR", tmp_path)
    return EmojiService()


def _png(size: int) -> bytes:
    return b"\x89PNG" + b"\x00" * (size - 4)


def test_each_emoji_occurrence_keeps_its_own_entry(emoji_svc, tmp_path):
    """Both displays replace one `:name:` per entry, so repeats need repeat entries."""
    (tmp_path / "cat.png").write_bytes(_png(200))
    (tmp_path / "dog.png").write_bytes(_png(200))
    emoji_svc._scan()
    result = emoji_svc.parse(":cat: :cat: :dog: :cat:")
    assert [e["name"] for e in result["emojis"]] == ["cat", "cat", "dog", "cat"]
    assert all(e["dataUrl"].startswith("data:image/png;base64,") for e in result["emojis"])
    assert result["text"] == ":cat: :cat: :dog: :cat:"


def test_emoji_hits_per_message_are_capped(emoji_svc, tmp_path):
    (tmp_path / "a.png").write_bytes(_png(100))
    emoji_svc._scan()
    text = ":a:" * 33  # 99 chars, under the 100-char text limit
    result = emoji_svc.parse(text)
    assert len(result["emojis"]) == emoji_mod._MAX_EMOJIS_PER_MESSAGE
    # The entries are the first occurrences, in order.
    assert [e["position"] for e in result["emojis"]] == [3 * i for i in range(20)]


def test_emoji_data_per_message_is_capped(emoji_svc, tmp_path):
    (tmp_path / "big.png").write_bytes(_png(emoji_mod._MAX_FILE_SIZE))
    (tmp_path / "s.png").write_bytes(_png(100))
    emoji_svc._scan()
    result = emoji_svc.parse(":big:" * 10 + ":s:")
    total = sum(len(e.get("dataUrl", "")) for e in result["emojis"])
    assert total <= emoji_mod._MAX_EMOJI_DATA_BYTES_PER_MESSAGE
    names = [e["name"] for e in result["emojis"]]
    assert names.count("big") >= 2  # a couple of large emoji still render
    assert names.count("big") < 10
    assert names[-1] == "s"  # a small one after the budget ran out still fits


def test_fire_emoji_message_reaches_overlay(client, overlay, monkeypatch, tmp_path):
    monkeypatch.setattr(emoji_mod, "_EMOJIS_DIR", tmp_path)
    from server.routes import api as api_mod

    svc = EmojiService()
    monkeypatch.setattr(api_mod, "emoji_service", svc)
    (tmp_path / "wave.png").write_bytes(_png(300))
    resp = _fire(client, {"text": "hi :wave: :wave:"})
    assert resp.status_code == 200, resp.data
    emojis = ws_queue.dequeue_all()[0]["emojis"]
    assert [e["name"] for e in emojis] == ["wave", "wave"]


# ─── WebSocket inbound message ceiling ──────────────────────────────────────


def test_sock_server_options_cap_matches_ws_max_size(app):
    opts = app.config["SOCK_SERVER_OPTIONS"]
    assert opts["max_message_size"] == app.config["WS_MAX_SIZE"]
    assert opts["max_message_size"] > 0


def test_explicit_sock_server_options_are_kept(tmp_path):
    from server.app import create_app
    from server.tests.conftest import TestConfig

    class Custom(TestConfig):
        SOCK_SERVER_OPTIONS = {"max_message_size": 4096, "ping_interval": 25}

    custom = create_app(Custom)
    assert custom.config["SOCK_SERVER_OPTIONS"] == {"max_message_size": 4096, "ping_interval": 25}


def _ws_pair(server_options):
    """A real simple_websocket.Server driven over a socketpair (no TCP port)."""
    import simple_websocket
    from wsproto import ConnectionType, WSConnection
    from wsproto.events import AcceptConnection, Request
    from wsproto.extensions import PerMessageDeflate

    srv_sock, cli_sock = socket.socketpair()
    client = WSConnection(ConnectionType.CLIENT)
    client.send(Request(host="example.test", target="/ws", extensions=[PerMessageDeflate()]))
    environ = {
        "werkzeug.socket": srv_sock,
        "HTTP_HOST": "example.test",
        "HTTP_UPGRADE": "websocket",
        "HTTP_CONNECTION": "Upgrade",
        "HTTP_SEC_WEBSOCKET_KEY": client.handshake._nonce.decode(),
        "HTTP_SEC_WEBSOCKET_VERSION": "13",
        "HTTP_SEC_WEBSOCKET_EXTENSIONS": "permessage-deflate; client_max_window_bits",
    }
    holder = {}
    t = threading.Thread(
        target=lambda: holder.setdefault("srv", simple_websocket.Server(environ, **server_options))
    )
    t.start()
    resp = cli_sock.recv(65536)
    t.join(timeout=5)
    client.receive_data(resp)
    accepted = [e for e in client.events() if isinstance(e, AcceptConnection)]
    assert accepted and accepted[0].extensions, "permessage-deflate was not negotiated"
    return holder["srv"], client, cli_sock


def _send_in_background(sock, data):
    def writer():
        try:
            sock.sendall(data)
        except OSError:
            pass

    threading.Thread(target=writer, daemon=True).start()


def test_compressed_oversized_ws_message_is_closed_with_1009(app):
    import simple_websocket
    from wsproto.events import CloseConnection, Message

    srv, client, cli_sock = _ws_pair(app.config["SOCK_SERVER_OPTIONS"])
    try:
        limit = app.config["SOCK_SERVER_OPTIONS"]["max_message_size"]
        text = '{"type":"heartbeat","pad":"' + "a" * (limit * 4) + '"}'
        wire = client.send(Message(data=text))
        # The frame on the wire is under the cap; the cap must apply to the
        # reassembled, decompressed message.
        assert len(wire) < limit
        _send_in_background(cli_sock, wire)

        # Returning the message, or None on timeout, both fail this.
        with pytest.raises(simple_websocket.ConnectionClosed):
            srv.receive(timeout=10)

        cli_sock.settimeout(5)
        client.receive_data(cli_sock.recv(65536))
        closes = [e for e in client.events() if isinstance(e, CloseConnection)]
        assert closes and closes[0].code == 1009
    finally:
        cli_sock.close()


def test_normal_display_messages_pass_the_ws_ceiling(app):
    from wsproto.events import Message

    srv, client, cli_sock = _ws_pair(app.config["SOCK_SERVER_OPTIONS"])
    try:
        messages = [
            json.dumps({"type": "heartbeat", "timestamp": 1731571200000}),
            json.dumps({"type": "pong"}),
            json.dumps({"type": "render_ack", "message_id": os.urandom(16).hex()}),
        ]
        for m in messages:
            _send_in_background(cli_sock, client.send(Message(data=m)))
            assert srv.receive(timeout=5) == m
        assert srv.connected
    finally:
        try:
            srv.close()
        except Exception:
            pass
        cli_sock.close()
