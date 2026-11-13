"""Server side of the Slido bridge (slido-extension v0.3.0).

The extension's own parsing / pacing / "only new questions" rules are
pinned offline in ``tests-js/slido-extension-core.test.js``. This file
pins what the server promises it:

- a Slido question goes through the *same* /fire pipeline as a viewer's
  danmu — blacklist, filter rules, review queue and bans all still apply;
- it is tagged ``source: "slido"`` in the admin live feed and history,
  while plain viewer danmu stay untagged;
- the token the operator generates on the Extensions page is honoured by
  /fire (it used to be ignored — only the env var worked);
- the extension's status heartbeat is token-gated, validated, logged on
  error transitions and readable by the admin card.
"""

from __future__ import annotations

import json
import logging
from pathlib import Path

import pytest

from server import state
from server.services import fire_sources, fire_token, live_feed_buffer, slido_status, ws_queue
from server.services.history import DanmuHistory
from server.services.ws_state import update_ws_client_count

FIXTURE = Path(__file__).parent.parent / "tests-js" / "fixtures" / "slido" / "questions-list.json"
SLIDO_HEADERS = {"X-Fire-Source": "slido"}


def _slido_payload(question_id: int) -> dict:
    """The /fire body slido-extension/core.js buildFirePayload() produces."""
    q = next(x for x in json.loads(FIXTURE.read_text()) if x["event_question_id"] == question_id)
    payload = {"text": q["text"], "fingerprint": f"slido:{q['event_user_id']}"}
    if not q["is_anonymous"]:
        payload["nickname"] = q["author"]["name"][:20]
    return payload


def _login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


@pytest.fixture(autouse=True)
def _isolated(tmp_path, monkeypatch):
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


# ─── pipeline: same path as /fire, tagged as Slido ──────────────────────────


def test_slido_question_reaches_overlay_feed_and_history_tagged(client, history):
    resp = client.post("/fire", json=_slido_payload(502), headers=SLIDO_HEADERS)
    assert resp.status_code == 200, resp.get_json()

    msgs = ws_queue.dequeue_all()
    assert [m["text"] for m in msgs] == ["Placeholder question asked after the bridge started"]
    assert "fingerprint" not in msgs[0]  # overlay privacy contract unchanged

    feed = live_feed_buffer.snapshot()
    assert feed[0]["data"]["source"] == "slido"
    assert feed[0]["data"]["fingerprint"] == "slido:1002"
    assert feed[0]["data"]["nickname"] == "Test Person B"

    record = history.get_records()[0]
    assert record["source"] == "slido"
    assert {s["source"] for s in fire_sources.recent_sources()} == {"slido"}


def test_viewer_danmu_stays_untagged(client):
    assert client.post("/fire", json={"text": "from a phone"}).status_code == 200
    assert live_feed_buffer.snapshot()[0]["data"]["source"] == ""


def test_slido_question_is_blocked_by_blacklist(client, history):
    state.blacklist.add("Placeholder")
    try:
        resp = client.post("/fire", json=_slido_payload(502), headers=SLIDO_HEADERS)
        assert resp.status_code == 400
        assert ws_queue.dequeue_all() == []
        record = history.get_records()[0]
        assert record["status"] == "blocked"
        assert record["source"] == "slido"
    finally:
        state.blacklist.discard("Placeholder")


def test_slido_question_is_blocked_by_filter_rule(client):
    from server.services.filter_engine import filter_engine

    rule_id = filter_engine.add_rule(
        {"type": "keyword", "pattern": "after the bridge", "action": "block"}
    )
    try:
        resp = client.post("/fire", json=_slido_payload(502), headers=SLIDO_HEADERS)
        assert resp.status_code == 400
        assert ws_queue.dequeue_all() == []
    finally:
        filter_engine.remove_rule(rule_id)


def test_slido_question_goes_to_review_queue_when_rule_says_review(client):
    from server.services.filter_engine import filter_engine
    from server.services.mod_queue import mod_queue

    rule_id = filter_engine.add_rule(
        {"type": "keyword", "pattern": "anonymous", "action": "review"}
    )
    try:
        resp = client.post("/fire", json=_slido_payload(503), headers=SLIDO_HEADERS)
        assert resp.status_code == 202
        assert ws_queue.dequeue_all() == []
        qid = resp.get_json()["queue_id"]
        mod_queue.reject(qid)
    finally:
        filter_engine.remove_rule(rule_id)


def test_banning_one_slido_participant_does_not_mute_the_others(client):
    from server.services import moderation_bans

    moderation_bans.add_ban("fingerprint", "slido:1002", reason="test")
    try:
        banned = client.post("/fire", json=_slido_payload(502), headers=SLIDO_HEADERS)
        assert banned.status_code == 403
        other = client.post("/fire", json=_slido_payload(503), headers=SLIDO_HEADERS)
        assert other.status_code == 200
        assert [m["text"] for m in ws_queue.dequeue_all()] == ["Placeholder anonymous question"]
    finally:
        moderation_bans.remove_ban("fingerprint", "slido:1002")


def test_anonymous_slido_question_carries_no_nickname(client):
    assert client.post("/fire", json=_slido_payload(503), headers=SLIDO_HEADERS).status_code == 200
    assert live_feed_buffer.snapshot()[0]["data"]["nickname"] == ""


# ─── the Extensions-page token now works on /fire ───────────────────────────


def test_generated_fire_token_uses_admin_lane(app, client):
    # conftest.TestConfig: FIRE_RATE_LIMIT = 2 on the public lane.
    app.config["FIRE_ADMIN_TOKEN"] = ""
    token = fire_token.regenerate()["token"]
    headers = {**SLIDO_HEADERS, "X-Fire-Token": token}
    for i in range(5):
        r = client.post("/fire", json={"text": f"q{i}"}, headers=headers)
        assert r.status_code == 200, (i, r.get_json())


def test_revoked_fire_token_falls_back_to_public_lane(app, client):
    app.config["FIRE_ADMIN_TOKEN"] = ""
    token = fire_token.regenerate()["token"]
    fire_token.revoke()
    headers = {**SLIDO_HEADERS, "X-Fire-Token": token}
    codes = [
        client.post("/fire", json={"text": f"q{i}"}, headers=headers).status_code for i in range(3)
    ]
    assert codes == [200, 200, 429]


# ─── status heartbeat ───────────────────────────────────────────────────────

GOOD_REPORT = {
    "state": "watching",
    "error": "",
    "sent": 4,
    "blocked": 1,
    "failed": 0,
    "dropped": 0,
    "skipped": 200,
    "version": "0.3.0",
}


def _report(client, body, token=None):
    headers = {"X-Fire-Token": token} if token else {}
    return client.post("/integrations/slido/status", json=body, headers=headers)


def test_status_report_requires_a_valid_token(app, client):
    app.config["FIRE_ADMIN_TOKEN"] = ""
    assert _report(client, GOOD_REPORT).status_code == 401
    assert _report(client, GOOD_REPORT, token="guess").status_code == 401
    assert slido_status.get_public()["report"] is None


def test_status_report_accepts_env_and_generated_tokens(app, client):
    app.config["FIRE_ADMIN_TOKEN"] = "env-secret"
    assert _report(client, GOOD_REPORT, token="env-secret").status_code == 200
    generated = fire_token.regenerate()["token"]
    assert _report(client, GOOD_REPORT, token=generated).status_code == 200


@pytest.mark.parametrize(
    "bad",
    [
        None,
        [],
        {**GOOD_REPORT, "state": "hacked"},
        {**GOOD_REPORT, "error": "<script>"},
        {**GOOD_REPORT, "sent": "4"},
        {**GOOD_REPORT, "sent": True},
    ],
)
def test_status_report_rejects_malformed_bodies(app, client, bad):
    app.config["FIRE_ADMIN_TOKEN"] = "env-secret"
    assert _report(client, bad, token="env-secret").status_code == 400
    assert slido_status.get_public()["report"] is None


def test_admin_reads_status_and_it_goes_stale(app, client):
    app.config["FIRE_ADMIN_TOKEN"] = "env-secret"
    assert client.get("/admin/integrations/slido/status").status_code in (302, 401)

    _report(client, GOOD_REPORT, token="env-secret")
    _login(client)
    data = client.get("/admin/integrations/slido/status").get_json()
    assert data["stale"] is False
    assert data["report"]["sent"] == 4
    assert data["report"]["state"] == "watching"

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
