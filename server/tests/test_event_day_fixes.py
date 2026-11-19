"""Small fixes that had no test of their own.

Each of these was a control in the admin panel, or a message on the viewer
page, that did the wrong thing every time.
"""

import re
from pathlib import Path

import pytest

from server.services.ws_state import update_ws_client_count

JS = Path(__file__).resolve().parents[1] / "static" / "js"


@pytest.fixture()
def overlay_connected():
    update_ws_client_count(1)
    yield
    update_ws_client_count(0)


def _csrf(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def _function_body(source: str, name: str) -> str:
    start = source.index(f"function {name}(")
    following = re.search(r"\n  (?:async )?function ", source[start + 1 :])
    return source[start : start + 1 + following.start()] if following else source[start:]


def test_audience_mask_sends_an_action_the_server_accepts(client, overlay_connected):
    """Audience › device detail › mask. The button posted action "mask", which
    is not a rule action, so the server answered 400 every time."""
    source = (JS / "admin-audience.js").read_text(encoding="utf-8")
    sent = re.search(r'action:\s*"(\w+)"', _function_body(source, "_maskFingerprint")).group(1)

    token = _csrf(client)
    payload = {
        "type": "fingerprint",
        "pattern": "fp-noisy",
        "action": sent,
        "priority": 0,
        "enabled": True,
    }
    added = client.post("/admin/filters/add", json=payload, headers={"X-CSRF-Token": token})
    assert added.status_code == 200, added.data

    # …and the rule does what the button says: that device's messages stop.
    blocked = client.post("/fire", json={"text": "hello", "fingerprint": "fp-noisy"})
    other = client.post("/fire", json={"text": "hello", "fingerprint": "fp-quiet"})
    assert blocked.status_code == 400
    assert other.status_code == 200

    # The value it used to send is still not accepted — the fix is on the page.
    rejected = client.post(
        "/admin/filters/add", json={**payload, "action": "mask"}, headers={"X-CSRF-Token": token}
    )
    assert rejected.status_code == 400


def test_viewer_only_says_too_fast_when_it_was_throttled():
    """After a successful send the hint line used to flip straight to "you're
    sending too fast" — the cooldown tick wrote it on every pass. That line is
    for a 429; the routine pause after a send keeps the caller's own hint."""
    source = (JS / "main.js").read_text(encoding="utf-8")
    tick = _function_body(source, "_tickCooldown")

    assert (
        'if (_cooldownThrottled) _setSendbarHint(ServerI18n.t("hintCooldown"), "cooldown");' in tick
    )
    assert tick.count('ServerI18n.t("hintCooldown")') == 1
    # Only the 429 path starts a throttled cooldown.
    assert "_startCooldown(retryAfter * 1000, true)" in source
    assert source.count("_startCooldown(_resolveCooldownMs())") == 2
