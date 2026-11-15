"""訊息比對時的正規式時間上限（services/rule_regex.py 的「比對的時間上限」）。

新增規則時的檢查擋得掉常見的危險寫法，但通過檢查的寫法仍可能在某一則訊息上跑很久，
5.8 存下來的規則更是沒被檢查過。這裡釘住三件事：

* 跑太久的比對會在上限內被中斷，伺服器不會一直停著；
* 比不完的訊息不會被放行（封鎖照封鎖、送審照送審、替換改封鎖、放行當作沒命中）；
* 上限是每則訊息合計，不是每條規則各一份；而且比得完的比對，結果與沒有上限時完全相同。

慢的寫法用的是標準 re 會指數回溯的形狀；這些規則直接寫進規則檔載入（模擬舊站台
存下來的規則），不經過新增時的檢查。
"""

import json
import signal
import threading
import time
from pathlib import Path

import pytest

from server.services import filter_events, rule_regex
from server.services.filter_engine import filter_engine
from server.services.ws_state import update_ws_client_count

SLOW = "(a+)+$"  # 在下面這段文字上要回溯 2^40 步
SLOW_TEXT = "a" * 40 + "!"

# 被中斷的比對最多該花多久（秒）。上限本身是 0.1；留寬是為了負載很高的 CI 機器。
PROMPT = 3.0


@pytest.fixture(autouse=True)
def short_budget(monkeypatch):
    monkeypatch.setattr(rule_regex, "MATCH_BUDGET_SEC", 0.1)


@pytest.fixture()
def overlay():
    update_ws_client_count(1)
    yield
    update_ws_client_count(0)


def _load(rules):
    Path(filter_engine.path).write_text(json.dumps(rules), encoding="utf-8")
    filter_engine.reload()


def _rule(rule_id, rule_type, pattern, action, priority=0, **extra):
    return {
        "id": rule_id,
        "type": rule_type,
        "pattern": pattern,
        "action": action,
        "priority": priority,
        "lifetime": "permanent",
        **extra,
    }


def _timed(call):
    started = time.monotonic()
    result = call()
    return result, time.monotonic() - started


# ── run_pattern ────────────────────────────────────────────────────────────


def test_a_match_that_runs_too_long_is_interrupted():
    compiled = rule_regex.compile_pattern(SLOW)
    started = time.monotonic()
    with pytest.raises(rule_regex.MatchTimeout):
        rule_regex.run_pattern(compiled, SLOW_TEXT, timeout=0.1)
    assert time.monotonic() - started < PROMPT


def test_a_replacement_that_runs_too_long_is_interrupted():
    compiled = rule_regex.compile_pattern(SLOW)
    started = time.monotonic()
    with pytest.raises(rule_regex.MatchTimeout):
        rule_regex.run_pattern(compiled, SLOW_TEXT, mode="replace", replacement="*", timeout=0.1)
    assert time.monotonic() - started < PROMPT


@pytest.mark.parametrize(
    "pattern, text, mode, replacement",
    [
        (r"https?://[^\s]+", "看這裡 http://x.example/a 很讚", "search", None),
        (r"https?://[^\s]+", "沒有網址", "search", None),
        (r"\bfoo\b", "FOO bar", "search", None),
        (r"(.)\1{4,}", "哈哈哈哈哈哈", "search", None),
        (r"^\d{3}", "123abc", "match", None),
        (r"^\d{3}", "a123", "match", None),
        (r"\s+", "a   b \t c", "replace", " "),
        (r"(加)(line)", "加LINE 加line", "replace", r"\2\1"),
        (r"x*", "abc", "replace", "-"),
    ],
)
def test_a_match_that_finishes_gives_the_same_answer_with_or_without_a_limit(
    pattern, text, mode, replacement
):
    compiled = rule_regex.compile_pattern(pattern)
    plain = rule_regex.run_pattern(compiled, text, mode=mode, replacement=replacement)
    limited = rule_regex.run_pattern(
        compiled, text, mode=mode, replacement=replacement, timeout=5.0
    )
    assert limited == plain


def test_the_timer_and_the_signal_handler_are_put_back():
    before = signal.getsignal(signal.SIGALRM)
    compiled = rule_regex.compile_pattern("ab+c")
    assert rule_regex.run_pattern(compiled, "xxabbbc", timeout=0.1) == (1, "xxabbbc")
    assert signal.getsignal(signal.SIGALRM) is before
    assert signal.getitimer(signal.ITIMER_REAL) == (0.0, 0.0)

    with pytest.raises(rule_regex.MatchTimeout):
        rule_regex.run_pattern(rule_regex.compile_pattern(SLOW), SLOW_TEXT, timeout=0.1)
    assert signal.getsignal(signal.SIGALRM) is before
    assert signal.getitimer(signal.ITIMER_REAL) == (0.0, 0.0)
    time.sleep(0.25)  # 上限早就過了：收尾之後不會再有例外跑出來


def test_someone_elses_alarm_keeps_running_after_a_limited_match():
    """測試常用 SIGALRM 當保險絲；比對借用同一個計時器，用完要把剩下的時間還回去。"""
    fired = []

    def fuse(signum, frame):
        fired.append(signum)

    old = signal.signal(signal.SIGALRM, fuse)
    signal.setitimer(signal.ITIMER_REAL, 0.6)
    try:
        with pytest.raises(rule_regex.MatchTimeout):
            rule_regex.run_pattern(rule_regex.compile_pattern(SLOW), SLOW_TEXT, timeout=0.1)
        assert signal.getsignal(signal.SIGALRM) is fuse
        remaining = signal.getitimer(signal.ITIMER_REAL)[0]
        assert 0 < remaining <= 0.6
        assert fired == []  # 我們的上限不會觸發別人的處理函式
        deadline = time.monotonic() + 3
        while not fired and time.monotonic() < deadline:
            time.sleep(0.02)
        assert fired == [signal.SIGALRM]  # 別人的計時器照常到期
    finally:
        signal.setitimer(signal.ITIMER_REAL, 0)
        signal.signal(signal.SIGALRM, old)


def test_outside_the_main_thread_the_match_still_runs_without_a_limit():
    """計時訊號只能在主執行緒用；別的執行緒照常比對，只是沒有上限（與以前相同）。"""
    from gevent import monkey

    # 測試行程載入 server.app 時 gevent 已經打過補丁，threading.Thread 其實是 greenlet、
    # 仍在主執行緒上；要用沒被補丁換掉的 start_new_thread 才是真的另一條作業系統執行緒。
    start_native_thread = monkey.get_original("_thread", "start_new_thread")
    main_id = threading.get_native_id()
    compiled = rule_regex.compile_pattern("ab+c")
    out = []

    def work():
        out.append(threading.get_native_id() != main_id)
        try:
            out.append(rule_regex.run_pattern(compiled, "xxabbbc", timeout=0.1))
        except Exception as exc:  # 不該發生
            out.append(repr(exc))

    start_native_thread(work, ())
    deadline = time.monotonic() + 5
    while len(out) < 2 and time.monotonic() < deadline:
        time.sleep(0.01)
    assert out == [True, (1, "xxabbbc")]
    assert signal.getitimer(signal.ITIMER_REAL) == (0.0, 0.0)


# ── 引擎：比不完的訊息怎麼處理 ─────────────────────────────────────────────


@pytest.mark.parametrize(
    "rule, expected_action",
    [
        (_rule("r", "regex", SLOW, "block"), "block"),
        (_rule("r", "regex", SLOW, "review"), "review"),
        (_rule("r", "replace", SLOW, "replace", replacement="*"), "block"),
    ],
    ids=["block", "review", "replace_becomes_block"],
)
def test_a_message_a_rule_cannot_finish_matching_is_not_let_through(rule, expected_action):
    _load([rule])
    filter_events.clear()
    result, elapsed = _timed(lambda: filter_engine.check(SLOW_TEXT))

    assert elapsed < PROMPT
    assert result.action == expected_action
    assert result.rule_id == "r"
    assert result.text == SLOW_TEXT  # 沒替換完的文字不會送出去
    assert "timed out" in result.reason
    recorded = [e for e in filter_events.recent(limit=5) if e["rule_id"] == "r"]
    assert [e["action"].lower() for e in recorded] == [expected_action]  # 命中紀錄看得到


def test_an_allow_rule_that_cannot_finish_is_not_a_pass():
    """放行規則比不完，不能變成通行證：當作沒命中，後面的規則照常比。"""
    _load(
        [
            _rule("allow", "regex", SLOW, "allow", priority=0),
            _rule("later", "keyword", "aaaa", "review", priority=10),
        ]
    )
    result, elapsed = _timed(lambda: filter_engine.check(SLOW_TEXT))
    assert elapsed < PROMPT
    assert (result.action, result.rule_id) == ("review", "later")

    _load([_rule("allow", "regex", SLOW, "allow")])
    assert filter_engine.check(SLOW_TEXT).action == "pass"  # 沒有別的規則擋，就是一般訊息


def test_the_limit_is_for_the_whole_message_not_for_each_rule(monkeypatch):
    monkeypatch.setattr(rule_regex, "MATCH_BUDGET_SEC", 0.3)
    monkeypatch.setattr(rule_regex, "MATCH_MIN_SLICE_SEC", 0.01)
    _load([_rule(f"a{i}", "regex", SLOW, "allow", priority=i) for i in range(8)])
    spent = []
    real = rule_regex.run_pattern

    def spy(compiled, text, mode="search", replacement=None, timeout=None):
        spent.append(timeout)
        return real(compiled, text, mode=mode, replacement=replacement, timeout=timeout)

    monkeypatch.setattr(rule_regex, "run_pattern", spy)
    result, elapsed = _timed(lambda: filter_engine.check(SLOW_TEXT))

    assert result.action == "pass"
    assert len(spent) == 8
    assert spent[0] == pytest.approx(0.3, abs=0.05)  # 第一條拿到整份預算
    assert all(t == pytest.approx(0.01) for t in spent[1:])  # 用完之後每條只剩一小段
    assert elapsed < 0.3 * 8  # 不是每條規則各等一次完整的上限


def test_an_ordinary_message_is_matched_exactly_as_before():
    _load(
        [
            _rule("url", "regex", r"https?://[^\s]+", "block", priority=0),
            _rule("mask", "replace", r"\d{4,}", "replace", priority=1, replacement="****"),
            _rule("ok", "regex", r"^\[公告\]", "allow", priority=2),
        ]
    )
    assert filter_engine.check("看 http://x.example/a").action == "block"
    replaced = filter_engine.check("我的電話 0912345678")
    assert (replaced.action, replaced.text) == ("replace", "我的電話 ****")
    assert filter_engine.check("[公告] 開始了").action == "allow"
    assert filter_engine.check("大家好").action == "pass"


def test_the_slow_rule_is_logged_once_not_once_per_message(caplog, monkeypatch):
    monkeypatch.setattr(filter_engine, "_slow_logged", {})  # 前面的測試也讓規則逾時過
    _load([_rule("slow_one", "regex", SLOW, "block")])
    with caplog.at_level("WARNING", logger="server.services.filter_engine"):
        for _ in range(3):
            assert filter_engine.check(SLOW_TEXT).action == "block"
    warnings = [r for r in caplog.records if "did not finish matching" in r.getMessage()]
    assert len(warnings) == 1
    assert "slow_one" in warnings[0].getMessage()  # 日誌指得出是哪一條規則
    assert SLOW in warnings[0].getMessage()


# ── 整條送出路徑 ───────────────────────────────────────────────────────────


def test_fire_answers_promptly_when_a_stored_rule_would_have_hung(client, overlay):
    _load([_rule("r", "regex", SLOW, "block")])
    started = time.monotonic()
    blocked = client.post("/fire", json={"text": SLOW_TEXT, "color": "ffffff"})
    assert time.monotonic() - started < PROMPT
    assert blocked.status_code == 400
    assert "timed out" in blocked.get_json()["error"]

    fine = client.post("/fire", json={"text": "大家好", "color": "ffffff"})
    assert fine.status_code == 200  # 伺服器還活著，一般訊息照常送出


# ── 正式環境的執行方式：gevent 打過補丁、請求跑在 greenlet 上 ──────────────

_GEVENT_SCRIPT = r"""
from gevent import monkey
monkey.patch_all()
import json, time
import gevent
from server.services import rule_regex

compiled = rule_regex.compile_pattern("(a+)+$")
out = {"results": [], "ticks": 0}

def request(i):
    started = time.monotonic()
    try:
        rule_regex.run_pattern(compiled, "a" * 40 + "!", timeout=0.15)
        verdict = "finished"
    except rule_regex.MatchTimeout:
        verdict = "interrupted"
    out["results"].append([verdict, round(time.monotonic() - started, 3)])

def other_work():
    for _ in range(200):
        out["ticks"] += 1
        gevent.sleep(0.01)

jobs = [gevent.spawn(other_work)] + [gevent.spawn(request, i) for i in range(3)]
gevent.joinall(jobs[1:], timeout=30)
out["ticks_when_requests_done"] = out["ticks"]
gevent.sleep(0.2)
out["ticks_after"] = out["ticks"]
print(json.dumps(out))
"""


def test_the_limit_works_inside_greenlets_under_gevent():
    """伺服器是 gevent 單一行程：請求在 greenlet 裡比對。上限要在那裡有效，而且
    中斷之後其他連線要能繼續跑。"""
    import subprocess
    import sys

    repo_root = Path(__file__).resolve().parent.parent.parent
    proc = subprocess.run(
        [sys.executable, "-c", _GEVENT_SCRIPT],
        cwd=str(repo_root),
        env={**__import__("os").environ, "PYTHONPATH": str(repo_root)},
        capture_output=True,
        text=True,
        timeout=120,
    )
    assert proc.returncode == 0, proc.stderr[-2000:]
    out = json.loads(proc.stdout.strip().splitlines()[-1])
    assert [verdict for verdict, _ in out["results"]] == ["interrupted"] * 3
    assert all(elapsed < PROMPT for _, elapsed in out["results"])
    assert out["ticks_after"] > out["ticks_when_requests_done"]  # 其他 greenlet 還在跑
