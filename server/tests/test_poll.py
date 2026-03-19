import threading

import pytest

from server.services.poll import PollService


@pytest.fixture(autouse=True)
def mock_ws_queue(monkeypatch):
    monkeypatch.setattr("server.services.poll.ws_queue.enqueue_message", lambda _: None)


def test_create_poll():
    svc = PollService()
    pid = svc.create("Favorite?", ["Apple", "Banana", "Cherry"])
    assert svc.state == "active"
    status = svc.get_status()
    assert status["question"] == "Favorite?"
    assert len(status["options"]) == 3
    assert status["options"][0]["key"] == "A"
    assert status["options"][1]["key"] == "B"
    assert status["options"][2]["key"] == "C"
    assert isinstance(pid, str)
    assert len(pid) == 8


def test_vote_increments_count():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    assert svc.vote("A", "user1") is True
    assert svc.get_status()["options"][0]["count"] == 1


def test_duplicate_vote_rejected():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    svc.vote("A", "user1")
    assert svc.vote("B", "user1") is False  # Same voter, different option


def test_vote_case_insensitive():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    assert svc.vote("a", "user1") is True


def test_vote_on_ended_poll():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    svc.end()
    assert svc.vote("A", "user1") is False


def test_vote_invalid_key():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    assert svc.vote("Z", "user1") is False


def test_reset_clears_poll():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    svc.reset()
    assert svc.state == "idle"
    assert svc.get_status() == {"state": "idle"}


def test_percentage_calculation():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    svc.vote("A", "u1")
    svc.vote("A", "u2")
    svc.vote("B", "u3")
    status = svc.get_status()
    assert status["options"][0]["percentage"] == 66.7
    assert status["options"][1]["percentage"] == 33.3
    assert status["total_votes"] == 3


def test_cannot_create_while_active():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    with pytest.raises(ValueError, match="already active"):
        svc.create("Another", ["A", "B"])


def test_can_create_after_end():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    svc.end()
    # Should be able to create a new poll after ending the previous one
    pid = svc.create("New", ["A", "B"])
    assert svc.state == "active"
    assert isinstance(pid, str)


def test_can_create_after_reset():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    svc.reset()
    pid = svc.create("New", ["A", "B"])
    assert svc.state == "active"
    assert isinstance(pid, str)


def test_concurrent_votes():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    results = []

    def vote(uid):
        results.append(svc.vote("A", uid))

    threads = [threading.Thread(target=vote, args=(f"u{i}",)) for i in range(50)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    assert sum(results) == 50
    assert svc.get_status()["options"][0]["count"] == 50


def test_end_idempotent():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    svc.end()
    svc.end()  # Should not raise
    assert svc.state == "ended"


def test_reset_idempotent():
    svc = PollService()
    svc.reset()  # No poll exists, should not raise
    assert svc.state == "idle"


def test_get_option_keys_when_active():
    svc = PollService()
    svc.create("Pick", ["X", "Y", "Z"])
    assert svc.get_option_keys() == ["A", "B", "C"]


def test_get_option_keys_when_idle():
    svc = PollService()
    assert svc.get_option_keys() == []


def test_get_option_keys_when_ended():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    svc.end()
    assert svc.get_option_keys() == []


def test_percentage_zero_when_no_votes():
    svc = PollService()
    svc.create("Pick", ["X", "Y"])
    status = svc.get_status()
    assert status["options"][0]["percentage"] == 0
    assert status["options"][1]["percentage"] == 0
    assert status["total_votes"] == 0


def test_status_includes_poll_id():
    svc = PollService()
    pid = svc.create("Pick", ["X", "Y"])
    status = svc.get_status()
    assert status["poll_id"] == pid


def test_vote_returns_false_when_idle():
    svc = PollService()
    assert svc.vote("A", "user1") is False
