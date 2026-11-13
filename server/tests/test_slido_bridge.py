"""Server side of the Slido bridge (slido-extension v0.3.0).

The extension's own parsing / pacing / "only new questions" rules are
pinned offline in ``tests-js/slido-extension-core.test.js``. This file
pins what the server promises it:

- a Slido question goes through the *same* /fire content gates as a
  viewer's danmu — blacklist, filter rules, review queue and bans — on the
  public lane *and* on the token (admin) lane;
- the integration label reaches the admin feed and history only for a
  valid token and a known integration name, never the overlay;
- the token generated on the Extensions page works on /fire, a wrong /
  revoked / pre-upgrade one is refused with 401 (after rate limiting), and
  odd header bytes cannot crash the route;
- anonymous Slido questions cannot be linked to one participant;
- the extension's status heartbeat is token-gated, validated and logged.
"""

from __future__ import annotations

import json
import logging
from pathlib import Path
from unittest.mock import patch

import pytest

from server import state
from server.services import fire_sources, fire_token, live_feed_buffer, slido_status, ws_queue
from server.services.history import DanmuHistory
from server.services.ws_state import update_ws_client_count

FIXTURE = Path(__file__).parent.parent / "tests-js" / "fixtures" / "slido" / "questions-list.json"


def _slido_payload(question_id: int) -> dict:
    """The /fire body slido-extension/core.js buildFirePayload() produces."""
    q = next(x for x in json.loads(FIXTURE.read_text()) if x["event_question_id"] == question_id)
    if q["is_anonymous"]:
        return {"text": q["text"], "nickname": "Slido"}
    return {
        "text": q["text"],
        "nickname": q["author"]["name"][:20],
        "fingerprint": f"slido:{q['event_user_id']}",
    }


def _login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


@pytest.fixture(autouse=True)
def _isolated(app, tmp_path, monkeypatch):
    app.config["FIRE_ADMIN_TOKEN"] = ""
    update_ws_client_count(1)
    ws_queue.dequeue_all()
    live_feed_buffer.reset()
    fire_sources.clear()
    slido_status.reset_for_tests()
    monkeypatch.setattr(fire_token, "_STATE_FILE", tmp_path / "fire_token.json")
    fire_token.reset_for_tests()
    yield
    ws_queue.dequeue_all()
    live_feed_buffer.reset()
    fire_sources.clear()
    slido_status.reset_for_tests()
    fire_token.reset_for_tests()
    update_ws_client_count(0)


@pytest.fixture()
def history():
    from server.services import history as hist_svc

    original = hist_svc.danmu_history
    hist_svc.danmu_history = DanmuHistory(max_records=100)
    yield hist_svc.danmu_history
    hist_svc.danmu_history = original


@pytest.fixture(params=["public", "token"])
def lane(request):
    """Headers for each way the extension can reach /fire."""
    headers = {"X-Fire-Source": "slido"}
    if request.param == "token":
        headers["X-Fire-Token"] = fire_token.regenerate()["token"]
    return request.param, headers


@pytest.fixture()
def token_headers():
    return {"X-Fire-Source": "slido", "X-Fire-Token": fire_token.regenerate()["token"]}


# ─── pipeline: the content gates hold on both lanes ─────────────────────────


def test_slido_question_reaches_overlay_feed_and_history(client, history, token_headers):
    resp = client.post("/fire", json=_slido_payload(502), headers=token_headers)
    assert resp.status_code == 200, resp.get_json()

    msgs = ws_queue.dequeue_all()
    assert [m["text"] for m in msgs] == ["Placeholder question asked after the bridge started"]
    # The overlay gets neither the fingerprint nor the integration label.
    assert "fingerprint" not in msgs[0]
    assert "integration" not in msgs[0]

    feed = live_feed_buffer.snapshot()[0]["data"]
    assert feed["integration"] == "slido"
    assert feed["fingerprint"] == "slido:1002"
    assert feed["nickname"] == "Test Person B"
    assert history.get_records()[0]["integration"] == "slido"


def test_slido_question_is_blocked_by_blacklist(client, history, lane):
    _, headers = lane
    state.blacklist.add("Placeholder")
    try:
        resp = client.post("/fire", json=_slido_payload(502), headers=headers)
        assert resp.status_code == 400
        assert ws_queue.dequeue_all() == []
        assert history.get_records()[0]["status"] == "blocked"
    finally:
        state.blacklist.discard("Placeholder")


def test_slido_question_is_blocked_by_filter_rule(client, lane):
    from server.services.filter_engine import filter_engine

    _, headers = lane
    rule_id = filter_engine.add_rule(
        {"type": "keyword", "pattern": "after the bridge", "action": "block"}
    )
    try:
        resp = client.post("/fire", json=_slido_payload(502), headers=headers)
        assert resp.status_code == 400
        assert ws_queue.dequeue_all() == []
    finally:
        filter_engine.remove_rule(rule_id)


def test_slido_question_goes_to_review_queue_and_keeps_its_label(app, client, lane):
    from server.services import mod_queue as mq_mod
    from server.services.filter_engine import filter_engine

    name, headers = lane
    rule_id = filter_engine.add_rule(
        {"type": "keyword", "pattern": "anonymous", "action": "review"}
    )
    try:
        resp = client.post("/fire", json=_slido_payload(503), headers=headers)
        assert resp.status_code == 202
        assert ws_queue.dequeue_all() == []
        qid = resp.get_json()["queue_id"]

        _login(client)
        with client.session_transaction() as sess:
            csrf = sess["csrf_token"]
        approved = client.post(
            "/admin/modqueue/approve", json={"id": qid}, headers={"X-CSRF-Token": csrf}
        )
        assert approved.status_code == 200
        feed = live_feed_buffer.snapshot()[-1]["data"]
        assert feed["text"] == "Placeholder anonymous question"
        # Label survives the review queue only when it was trusted to begin with.
        assert feed["integration"] == ("slido" if name == "token" else "")
    finally:
        filter_engine.remove_rule(rule_id)
        mq_mod.mod_queue._pending.clear()


def test_banning_one_slido_participant_does_not_mute_the_others(client, lane):
    from server.services import moderation_bans

    _, headers = lane
    moderation_bans.add_ban("fingerprint", "slido:1002", reason="test")
    try:
        banned = client.post("/fire", json=_slido_payload(502), headers=headers)
        assert banned.status_code == 403
        other = client.post("/fire", json=_slido_payload(503), headers=headers)
        assert other.status_code == 200
        assert [m["text"] for m in ws_queue.dequeue_all()] == ["Placeholder anonymous question"]
    finally:
        moderation_bans.remove_ban("fingerprint", "slido:1002")


def test_token_lane_skips_captcha_but_not_content_gates(client, token_headers):
    with patch("server.routes.api.verify_captcha", return_value=False):
        # Public lane: captcha fails.
        public = client.post("/fire", json=_slido_payload(502), headers={"X-Fire-Source": "slido"})
        assert public.status_code == 400
        assert "Captcha" in public.get_json()["error"]
        # Token lane: no captcha, but the blacklist still applies.
        assert (
            client.post("/fire", json=_slido_payload(502), headers=token_headers).status_code == 200
        )
        state.blacklist.add("anonymous")
        try:
            blocked = client.post("/fire", json=_slido_payload(503), headers=token_headers)
            assert blocked.status_code == 400
        finally:
            state.blacklist.discard("anonymous")


# ─── anonymous questions stay anonymous (owner decision D3) ─────────────────


def test_anonymous_slido_questions_cannot_be_linked(client, history, token_headers):
    # Fixture 503 is anonymous; the extension never sends its event_user_id.
    for _ in range(2):
        resp = client.post("/fire", json=_slido_payload(503), headers=token_headers)
        assert resp.status_code == 200
    feed = [e["data"] for e in live_feed_buffer.snapshot()]
    records = history.get_records()
    for row in feed + records:
        assert row["nickname"] == "Slido"
        assert not row.get("fingerprint")
        assert "1003" not in json.dumps(row)
    # Named questions keep their per-participant identity.
    client.post("/fire", json=_slido_payload(502), headers=token_headers)
    assert live_feed_buffer.snapshot()[-1]["data"]["fingerprint"] == "slido:1002"


# ─── the integration label cannot be forged (M2) ────────────────────────────


@pytest.mark.parametrize("forged", ["slido", "Admin", "admin", "<img src=x onerror=1>"])
def test_source_header_without_token_is_not_trusted(client, history, forged):
    resp = client.post("/fire", json={"text": "hi"}, headers={"X-Fire-Source": forged})
    assert resp.status_code == 200
    assert live_feed_buffer.snapshot()[0]["data"]["integration"] == ""
    assert history.get_records()[0]["integration"] == ""
    assert "integration" not in ws_queue.dequeue_all()[0]


def test_unknown_source_with_valid_token_is_not_labelled(client, token_headers):
    headers = dict(token_headers, **{"X-Fire-Source": "admin"})
    assert client.post("/fire", json={"text": "hi"}, headers=headers).status_code == 200
    assert live_feed_buffer.snapshot()[0]["data"]["integration"] == ""


def test_viewer_danmu_stays_unlabelled(client):
    assert client.post("/fire", json={"text": "from a phone"}).status_code == 200
    assert live_feed_buffer.snapshot()[0]["data"]["integration"] == ""


# ─── poll: a Slido question that looks like an option is not a vote (S13) ───


def test_slido_question_is_never_counted_as_a_poll_vote(client, token_headers):
    from server.services.poll import poll_service

    poll_service.reset()
    poll_service.create("Q?", ["Yes", "No"])
    try:
        resp = client.post("/fire", json={"text": "A", "nickname": "Slido"}, headers=token_headers)
        assert resp.status_code == 200
        assert "poll_vote" not in resp.get_json()
        assert poll_service.get_status()["questions"][0]["options"][0]["count"] == 0
        # Viewers on the public lane still vote by typing the key.
        viewer = client.post("/fire", json={"text": "A", "fingerprint": "viewer-1"})
        assert viewer.get_json().get("poll_vote", {}).get("accepted") is True
    finally:
        poll_service.reset()


def test_slido_question_matching_an_option_still_goes_through_filters(client, token_headers):
    from server.services.filter_engine import filter_engine
    from server.services.poll import poll_service

    poll_service.reset()
    poll_service.create("Q?", ["Yes", "No"])
    rule_id = filter_engine.add_rule({"type": "keyword", "pattern": "a", "action": "block"})
    try:
        assert client.post("/fire", json={"text": "A"}, headers=token_headers).status_code == 400
    finally:
        filter_engine.remove_rule(rule_id)
        poll_service.reset()


# ─── fire token: valid / invalid / odd bytes / pre-upgrade (M1, M3, S9, D2) ─


def test_generated_fire_token_uses_admin_lane(client, token_headers):
    # conftest.TestConfig: FIRE_RATE_LIMIT = 2 on the public lane.
    for i in range(5):
        r = client.post("/fire", json={"text": f"q{i}"}, headers=token_headers)
        assert r.status_code == 200, (i, r.get_json())


def test_revoked_token_gets_401_then_429(client):
    # Was [200, 200, 429] (silent fallback to the public lane) before S9.
    token = fire_token.regenerate()["token"]
    fire_token.revoke()
    headers = {"X-Fire-Source": "slido", "X-Fire-Token": token}
    codes = [
        client.post("/fire", json={"text": f"q{i}"}, headers=headers).status_code for i in range(3)
    ]
    assert codes == [401, 401, 429]
    assert ws_queue.dequeue_all() == []


def test_regenerated_token_invalidates_the_old_one(client):
    old = fire_token.regenerate()["token"]
    new = fire_token.regenerate()["token"]
    assert (
        client.post("/fire", json={"text": "x"}, headers={"X-Fire-Token": old}).status_code == 401
    )
    assert (
        client.post("/fire", json={"text": "x"}, headers={"X-Fire-Token": new}).status_code == 200
    )


def test_disabled_token_is_rejected(client):
    token = fire_token.regenerate()["token"]
    fire_token.set_enabled(False)
    assert (
        client.post("/fire", json={"text": "x"}, headers={"X-Fire-Token": token}).status_code == 401
    )


def test_env_token_still_works_and_wrong_env_token_is_rejected(app, client):
    app.config["FIRE_ADMIN_TOKEN"] = "env-secret"
    for _ in range(4):
        assert (
            client.post(
                "/fire", json={"text": "x"}, headers={"X-Fire-Token": "env-secret"}
            ).status_code
            == 200
        )
    assert (
        client.post("/fire", json={"text": "x"}, headers={"X-Fire-Token": "nope"}).status_code
        == 401
    )


@pytest.mark.parametrize("bad", ["é", "токен", "😀"])
def test_non_ascii_token_never_crashes_and_is_rate_limited(app, client, bad):
    """M1: compare_digest on non-ASCII str raised TypeError → 500, uncounted."""
    app.config["FIRE_ADMIN_TOKEN"] = "env-secret"
    fire_token.regenerate()
    headers = {"X-Fire-Token": bad.encode("utf-8").decode("latin-1")}
    codes = [
        client.post("/fire", json={"text": "x"}, headers=headers).status_code for _ in range(3)
    ]
    # Public limit (2) is charged: never 500, never the admin lane.
    assert codes == [401, 401, 429]
    assert ws_queue.dequeue_all() == []


def test_non_ascii_token_on_status_endpoint_is_401(client):
    fire_token.regenerate()
    resp = client.post(
        "/integrations/slido/status",
        json={"state": "watching"},
        headers={"X-Fire-Token": "é".encode("utf-8").decode("latin-1")},
    )
    assert resp.status_code == 401


def test_fire_token_verify_handles_non_ascii_directly():
    fire_token.regenerate()
    assert fire_token.verify("é") is False
    assert fire_token.verify("😀" * 40) is False


LEGACY_STATE = {
    "enabled": True,
    "token": "legacy-token-from-v5-2",
    "rotated_at": 1.0,
    "created_at": 1.0,
}


def test_pre_upgrade_token_file_is_ignored_until_regenerated(client, tmp_path, caplog):
    """D2: a token written before format 2 must not become an admin-lane pass."""
    path = tmp_path / "fire_token.json"
    path.write_text(json.dumps(LEGACY_STATE))
    fire_token.reset_for_tests()
    caplog.set_level(logging.WARNING, logger="server.services.fire_token")

    assert fire_token.verify("legacy-token-from-v5-2") is False
    public = fire_token.get_public_state()
    assert public["has_token"] is False and public["enabled"] is False
    assert any("predates" in r.getMessage() for r in caplog.records)
    assert json.loads(path.read_text()) == LEGACY_STATE  # file left untouched
    resp = client.post(
        "/fire", json={"text": "x"}, headers={"X-Fire-Token": "legacy-token-from-v5-2"}
    )
    assert resp.status_code == 401

    fresh = fire_token.regenerate()["token"]
    assert fire_token.verify(fresh) is True
    assert json.loads(path.read_text())["format"] == 2


def test_pre_upgrade_token_restored_from_backup_is_ignored(tmp_path, monkeypatch):
    from server.services import backup as backup_svc

    old_host = tmp_path / "old_runtime"
    new_host = tmp_path / "new_runtime"
    old_host.mkdir()
    new_host.mkdir()
    (old_host / "fire_token.json").write_text(json.dumps(LEGACY_STATE))
    monkeypatch.setattr(backup_svc, "_INCLUDE_DIRS", [("runtime", old_host, "runtime", "*.json")])
    blob = backup_svc.pack()

    monkeypatch.setattr(backup_svc, "_INCLUDE_DIRS", [("runtime", new_host, "runtime", "*.json")])
    result = backup_svc.unpack(blob, dry_run=False)
    assert result["applied"] >= 1, result
    assert json.loads((new_host / "fire_token.json").read_text()) == LEGACY_STATE

    monkeypatch.setattr(fire_token, "_STATE_FILE", new_host / "fire_token.json")
    fire_token.reset_for_tests()
    assert fire_token.verify("legacy-token-from-v5-2") is False
    assert fire_token.get_public_state()["has_token"] is False


def test_env_token_unaffected_by_pre_upgrade_file(app, client, tmp_path):
    (tmp_path / "fire_token.json").write_text(json.dumps(LEGACY_STATE))
    fire_token.reset_for_tests()
    app.config["FIRE_ADMIN_TOKEN"] = "env-secret"
    resp = client.post("/fire", json={"text": "x"}, headers={"X-Fire-Token": "env-secret"})
    assert resp.status_code == 200


# ─── status heartbeat ───────────────────────────────────────────────────────

GOOD_REPORT = {
    "state": "watching",
    "error": "",
    "sent": 4,
    "held": 1,
    "blocked": 1,
    "failed": 0,
    "dropped": 0,
    "skipped": 200,
    "version": "0.3.0",
}


def _report(client, body, token=None):
    headers = {"X-Fire-Token": token} if token else {}
    return client.post("/integrations/slido/status", json=body, headers=headers)


def test_status_report_requires_a_valid_token(client):
    assert _report(client, GOOD_REPORT).status_code == 401
    assert _report(client, GOOD_REPORT, token="guess").status_code == 401
    assert slido_status.get_public()["report"] is None


def test_status_report_accepts_env_and_generated_tokens(app, client):
    app.config["FIRE_ADMIN_TOKEN"] = "env-secret"
    assert _report(client, GOOD_REPORT, token="env-secret").status_code == 200
    generated = fire_token.regenerate()["token"]
    assert _report(client, GOOD_REPORT, token=generated).status_code == 200


def test_rejected_heartbeat_flags_the_card_until_a_valid_one_arrives(client):
    token = fire_token.regenerate()["token"]
    _report(client, GOOD_REPORT, token=token)
    assert slido_status.get_public()["token_rejected"] is False
    fire_token.revoke()
    assert _report(client, GOOD_REPORT, token=token).status_code == 401
    assert slido_status.get_public()["token_rejected"] is True
    fresh = fire_token.regenerate()["token"]
    _report(client, GOOD_REPORT, token=fresh)
    assert slido_status.get_public()["token_rejected"] is False
    # No token at all is "not configured", not "rejected".
    slido_status.reset_for_tests()
    _report(client, GOOD_REPORT)
    assert slido_status.get_public()["token_rejected"] is False


@pytest.mark.parametrize(
    "bad",
    [
        None,
        [],
        {**GOOD_REPORT, "state": "hacked"},
        {**GOOD_REPORT, "error": "<script>"},
        {**GOOD_REPORT, "sent": "4"},
        {**GOOD_REPORT, "held": True},
    ],
)
def test_status_report_rejects_malformed_bodies(app, client, bad):
    app.config["FIRE_ADMIN_TOKEN"] = "env-secret"
    assert _report(client, bad, token="env-secret").status_code == 400
    assert slido_status.get_public()["report"] is None


def test_admin_reads_status_extension_info_and_staleness(app, client):
    app.config["FIRE_ADMIN_TOKEN"] = "env-secret"
    assert client.get("/admin/integrations/slido/status").status_code in (302, 401)

    _report(client, {**GOOD_REPORT, "state": "error", "error": "token_invalid"}, token="env-secret")
    _login(client)
    data = client.get("/admin/integrations/slido/status").get_json()
    assert data["stale"] is False
    assert data["report"]["error"] == "token_invalid"
    assert data["extension"]["download_url"].endswith(".zip")

    received = data["report"]["received_at"]
    later = slido_status.get_public(now=received + slido_status.STALE_AFTER_SEC + 1)
    assert later["stale"] is True


def test_status_counters_are_clamped_and_version_trimmed():
    out = slido_status.record({**GOOD_REPORT, "sent": -5, "dropped": 10**12, "version": "x" * 40})
    assert out["sent"] == 0
    assert out["dropped"] == 10_000_000
    assert len(out["version"]) == 16


def test_error_transitions_are_logged_once(caplog):
    caplog.set_level(logging.INFO, logger="server.services.slido_status")
    slido_status.record(GOOD_REPORT)
    err = {**GOOD_REPORT, "state": "error", "error": "no_overlay"}
    slido_status.record(err)
    slido_status.record(err)
    slido_status.record(GOOD_REPORT)
    warnings = [r for r in caplog.records if r.levelno == logging.WARNING]
    infos = [r for r in caplog.records if r.levelno == logging.INFO]
    assert len(warnings) == 1 and "no_overlay" in warnings[0].getMessage()
    assert len(infos) == 1 and "recovered" in infos[0].getMessage()
