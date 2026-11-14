"""封鎖規則合一的第二輪：獨立審查（2026-11-14）退回的項目。

每一段開頭寫的是審查重現到的問題；測試釘住修好之後的行為。正規式會真的被拿去跑的
測試都包在 ``hard_limit`` 裡——沒有 pytest-timeout，萬一哪天又在本行程裡卡進回溯，
測試會在幾秒內失敗而不是整個套件停住。
"""

import contextlib
import io
import json
import random
import re
import signal
import sys
import tarfile
import time
from pathlib import Path

import pytest

from server.services import backup as backup_svc
from server.services import filter_engine as engine_module
from server.services import filter_events, rule_regex, session_service
from server.services.blacklist import list_keywords
from server.services.filter_engine import FilterEngine, filter_engine
from server.services.ws_state import update_ws_client_count
from server.tests import _legacy_filter_engine_v58 as legacy

SERVER = Path(__file__).resolve().parent.parent
HEURISTIC = r"(\([^)]*\)[+*?{].*[+*?{]|\[[^\]]*\][+*?{].*[+*?{])"  # validation.py 的啟發式


@contextlib.contextmanager
def hard_limit(seconds):
    """用 SIGALRM 當保險絲。CPython 的正規式迴圈會定期檢查訊號，卡在回溯裡也停得下來。"""

    def _boom(signum, frame):
        raise TimeoutError(f"took longer than {seconds}s")

    old = signal.signal(signal.SIGALRM, _boom)
    signal.setitimer(signal.ITIMER_REAL, seconds)
    try:
        yield
    finally:
        signal.setitimer(signal.ITIMER_REAL, 0)
        signal.signal(signal.SIGALRM, old)


def _csrf(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def _post(client, url, payload):
    return client.post(url, json=payload, headers={"X-CSRF-Token": _csrf(client)})


def _load_legacy(rules):
    Path(filter_engine.path).write_text(json.dumps(rules), encoding="utf-8")
    filter_engine.reload()


@pytest.fixture()
def overlay():
    update_ws_client_count(1)
    yield
    update_ws_client_count(0)


@pytest.fixture()
def fast_probe(monkeypatch):
    """逾時路徑的測試不需要等滿 2 秒；常數本身另有一條測試用原值跑。"""
    monkeypatch.setattr(rule_regex, "PROBE_TIMEOUT_SEC", 0.5)


# ── 必修 1：危險的舊正規式要停得掉、刪得掉，而且不能卡住伺服器 ──────────
#
# 5.8 只改 pattern 的更新不跑安全檢查，所以站台上可能存著 (a+)+b 這種寫法。合併後的
# 第一版把「停用」也當成整筆重驗：啟發式抓不到的會在本行程裡跑 "a"*50 → 整站卡死；
# 抓得到的回 400 → 停用不了。含 tab 的舊關鍵字、轉換後重複的封鎖字也一樣停用不了。

LEGACY_HAZARDS = [
    {"id": "rx_hang", "type": "regex", "pattern": "(a+)+b", "action": "block", "priority": 1},
    {"id": "rx_flag", "type": "regex", "pattern": "(a+)+b+", "action": "block", "priority": 2},
    {"id": "kw_tab", "type": "keyword", "pattern": "a\tb", "action": "review", "priority": 3},
    {"id": "dup1", "type": "keyword", "pattern": "dup", "action": "block", "priority": 4},
    {"id": "dup2", "type": "keyword", "pattern": "dup", "action": "block", "priority": 5},
]


def test_heuristic_misses_the_classic_exponential_regex():
    """前提：下面那條「靠逾時抓」的測試用的寫法，靜態啟發式確實抓不到。"""
    assert not re.search(HEURISTIC, "(a+)+b")
    assert re.search(HEURISTIC, "(a+)+b+")


@pytest.mark.parametrize("rule_id", [r["id"] for r in LEGACY_HAZARDS])
def test_legacy_hazards_can_be_toggled_retimed_reprioritised_and_deleted(client, rule_id):
    _load_legacy(LEGACY_HAZARDS)
    updates = [
        {"enabled": False},
        {"enabled": True},
        {"priority": 42},
        {"lifetime": "timed", "duration_sec": 3600},
        {"lifetime": "permanent"},
    ]
    with hard_limit(15):
        for change in updates:
            started = time.monotonic()
            res = _post(client, "/admin/filters/update", {"rule_id": rule_id, "updates": change})
            assert res.status_code == 200, (change, res.get_json())
            assert time.monotonic() - started < 1.0  # 沒有起子行程、沒有跑正規式
        rule = filter_engine.get_rule(rule_id)
        assert (rule["enabled"], rule["priority"], rule["lifetime"]) == (True, 42, "permanent")

        started = time.monotonic()
        assert _post(client, "/admin/filters/remove", {"rule_id": rule_id}).status_code == 200
        assert time.monotonic() - started < 1.0
    assert filter_engine.get_rule(rule_id) is None


def test_saving_the_whole_edit_form_unchanged_counts_as_a_metadata_change(client):
    """編輯表單會把整條規則送回來；pattern 沒變就不算改 pattern。"""
    _load_legacy(LEGACY_HAZARDS)
    form = {
        "type": "regex",
        "pattern": "(a+)+b",
        "action": "block",
        "priority": 9,
        "enabled": False,
        "lifetime": "permanent",
        "replacement": "",
    }
    with hard_limit(10):
        started = time.monotonic()
        res = _post(client, "/admin/filters/update", {"rule_id": "rx_hang", "updates": form})
        assert res.status_code == 200
        assert time.monotonic() - started < 1.0
    assert filter_engine.get_rule("rx_hang")["enabled"] is False


def test_changing_anything_else_on_a_dangerous_regex_goes_through_the_timeout(client, fast_probe):
    _load_legacy(LEGACY_HAZARDS)
    with hard_limit(10):
        res = _post(
            client,
            "/admin/filters/update",
            {"rule_id": "rx_hang", "updates": {"action": "review"}},
        )
    assert res.status_code == 400
    assert res.get_json()["code"] == "regex_timeout"
    assert filter_engine.get_rule("rx_hang")["action"] == "block"


def test_adding_a_regex_the_heuristic_misses_is_rejected_by_the_timeout(client):
    """用正式的 PROBE_TIMEOUT_SEC（2 秒）跑一次完整路徑。"""
    with hard_limit(rule_regex.PROBE_TIMEOUT_SEC + 8):
        started = time.monotonic()
        res = _post(client, "/admin/filters/add", {"type": "regex", "pattern": "(a+)+b"})
        elapsed = time.monotonic() - started
    assert res.status_code == 400
    assert res.get_json()["code"] == "regex_timeout"
    assert rule_regex.PROBE_TIMEOUT_SEC * 0.9 <= elapsed < rule_regex.PROBE_TIMEOUT_SEC + 3
    assert filter_engine.list_rules() == []


def test_rule_test_reports_a_timeout_instead_of_hanging(client, fast_probe):
    # 探測輸入裡沒有 x，安全檢查會過；卡住的是主持人貼上的樣本。
    rule = {"type": "regex", "pattern": "(x+x+)+y", "action": "block"}
    with hard_limit(10):
        res = _post(client, "/admin/filters/test", {"rule": rule, "text": "x" * 30})
    assert res.status_code == 400
    assert res.get_json()["code"] == "regex_timeout"


def test_rule_test_still_answers_through_the_child_process(client):
    with hard_limit(10):
        block = _post(
            client,
            "/admin/filters/test",
            {"rule": {"type": "regex", "pattern": r"\d{3}", "action": "block"}, "text": "a123"},
        ).get_json()
        replaced = _post(
            client,
            "/admin/filters/test",
            {
                "rule": {"type": "replace", "pattern": "b(a)d", "replacement": "*"},
                "text": "BAD and bad",
            },
        ).get_json()
        missed = _post(
            client,
            "/admin/filters/test",
            {"rule": {"type": "regex", "pattern": "zzz", "action": "block"}, "text": "abc"},
        ).get_json()
    assert block["action"] == "block"
    assert (replaced["action"], replaced["text"]) == ("replace", "* and *")
    assert missed["action"] == "pass"


# 每種探測輸入都抓得到一條專屬於它的寫法（其他探測輸入跑得很快）。啟發式全部抓不到。
PROBE_SHAPES = [
    (1, "(a|aa)+$"),  # 重複字元後接不匹配的字元
    (2, "(?:a|b|ab|ba)+$"),  # 兩種字元交替
    (3, r"(?:a\s|a |A\s|A )+$"),  # 空白與文字混合
    (4, "(?:1|11)+$"),  # 數字
]


@pytest.mark.parametrize("index, pattern", PROBE_SHAPES)
def test_each_probe_input_catches_its_own_shape(monkeypatch, fast_probe, index, pattern):
    assert not re.search(HEURISTIC, pattern)
    probe = rule_regex.PROBE_INPUTS[index]
    others = tuple(p for i, p in enumerate(rule_regex.PROBE_INPUTS) if i != index)
    with hard_limit(10):
        monkeypatch.setattr(rule_regex, "PROBE_INPUTS", others)
        assert rule_regex.vet_pattern(pattern) is None
        monkeypatch.setattr(rule_regex, "PROBE_INPUTS", (probe,))
        with pytest.raises(rule_regex.PatternTimeout):
            rule_regex.vet_pattern(pattern)


def test_the_original_probe_is_kept():
    assert rule_regex.PROBE_INPUTS[0] == ("match", "a" * 50)


def test_waiting_for_the_child_does_not_stop_other_greenlets(fast_probe):
    """伺服器是單一 gevent 行程：等子行程時，其他連線（greenlet）要照常跑。"""
    from gevent import monkey

    if not monkey.is_module_patched("subprocess"):
        pytest.skip("app.py 的 monkey.patch_all() 沒有在這個測試行程生效")
    import gevent

    ticks = []

    def ticker():
        while True:
            ticks.append(time.monotonic())
            gevent.sleep(0.02)

    g = gevent.spawn(ticker)
    try:
        with hard_limit(10):
            with pytest.raises(rule_regex.PatternTimeout):
                rule_regex.vet_pattern("(a+)+b")
    finally:
        g.kill()
    assert len(ticks) >= 10


def test_child_process_does_not_load_the_server_or_gevent():
    """子行程用 -I -S 啟動：不受 monkey-patch 與工作目錄影響，只用標準函式庫。"""
    src = (SERVER / "services" / "rule_regex.py").read_text(encoding="utf-8")
    assert '[sys.executable, "-I", "-S", "-c", _CHILD]' in src
    child = rule_regex._CHILD
    assert "import json, re, sys" in child
    assert "server" not in child and "gevent" not in child


# ── 必修 3（＝差異 8）：同一個字被停用時，快捷封鎖要真的把它開回來 ──────────


def test_live_block_reenables_a_disabled_word(client, overlay):
    rule_id = filter_engine.add_rule({"type": "word", "pattern": "Spam"})
    filter_engine.update_rule(rule_id, {"enabled": False})

    res = _post(client, "/admin/live/block", {"type": "keyword", "value": "Spam"})
    assert res.status_code == 200
    assert res.get_json()["status"] == "enabled"
    assert "blocked again" in res.get_json()["message"]
    assert filter_engine.get_rule(rule_id)["enabled"] is True
    assert client.post("/fire", json={"text": "Spam here"}).status_code == 400
    assert client.post("/check_blacklist", json={"text": "Spam"}).get_json()["blocked"] is True

    again = _post(client, "/admin/live/block", {"type": "keyword", "value": "Spam"}).get_json()
    assert again["status"] == "exists"
    assert again["message"] == "Keyword 'Spam' is already blocked"
    assert len(filter_engine.list_rules()) == 1


def test_blacklist_add_reenables_and_uses_the_requested_lifetime(client):
    rule_id = filter_engine.add_rule(
        {"type": "word", "pattern": "限時", "lifetime": "timed", "duration_sec": 600}
    )
    filter_engine.update_rule(rule_id, {"enabled": False})
    res = _post(client, "/admin/blacklist/add", {"keyword": "限時"})
    assert res.get_json() == {
        "message": "Keyword was disabled and is blocked again",
        "status": "enabled",
    }
    rule = filter_engine.get_rule(rule_id)
    # 這個入口要求的是永久封鎖
    assert (rule["enabled"], rule["lifetime"]) == (True, "permanent")
    assert "expires_at" not in rule


def test_disabled_converted_keyword_block_then_quick_block(client, overlay):
    """升級站台第一天會碰到的情況：5.8 停用的 keyword＋block 轉成停用的封鎖字。"""
    _load_legacy(
        [{"id": "old", "type": "keyword", "pattern": "賭博", "action": "block", "enabled": False}]
    )
    assert client.post("/fire", json={"text": "賭博"}).status_code == 200
    _post(client, "/admin/live/block", {"type": "keyword", "value": "賭博"})
    assert client.post("/fire", json={"text": "賭博網站"}).status_code == 400
    assert list_keywords() == ["賭博"]


# ── 必修 4：.pre-unified.bak 不會被備份匯出帶走 ──────────────────────────


def test_backup_export_leaves_out_the_pre_unified_copy(tmp_path, monkeypatch):
    runtime = tmp_path / "runtime"
    runtime.mkdir()
    (runtime / "filter_rules.json").write_text("[]")
    (runtime / ("filter_rules.json" + engine_module.LEGACY_BACKUP_SUFFIX)).write_text("[]")
    monkeypatch.setattr(backup_svc, "_INCLUDE_DIRS", [("runtime", runtime, "runtime", "*.json")])
    with tarfile.open(fileobj=io.BytesIO(backup_svc.pack()), mode="r:gz") as tar:
        names = tar.getnames()
    assert "runtime/filter_rules.json" in names
    assert not [n for n in names if n.endswith(".bak")]


# ── 第 5 項：備份失敗就不覆寫原檔；備份是原子寫入 ──────────────────────────

_KB = [{"id": "kb1", "type": "keyword", "pattern": "legacy", "action": "block", "priority": 0}]


def test_when_the_backup_fails_the_original_file_is_left_alone(monkeypatch, caplog):
    disk_full = [True]
    real_copy = engine_module.shutil.copy2

    def broken_copy(src, dst, *a, **k):
        if not disk_full[0]:
            return real_copy(src, dst, *a, **k)
        Path(dst).write_text("half")  # 寫到一半就失敗
        raise OSError("disk full")

    monkeypatch.setattr(engine_module.shutil, "copy2", broken_copy)
    original = json.dumps(_KB)
    path = Path(filter_engine.path)
    path.write_text(original, encoding="utf-8")
    with caplog.at_level("WARNING", logger="server.services.filter_engine"):
        filter_engine.reload()

    assert path.read_text(encoding="utf-8") == original  # 沒有寫回轉換結果
    backup = Path(filter_engine.path + engine_module.LEGACY_BACKUP_SUFFIX)
    assert not backup.exists()  # 半份暫存檔沒有被當成備份
    assert not Path(str(backup) + ".tmp").exists()
    assert filter_engine.match_word("legacy text") == "legacy"  # 記憶體裡照樣轉換
    assert "could not back up" in caplog.text
    assert "converted in memory only" in caplog.text

    disk_full[0] = False
    filter_engine.reload()  # 下次啟動再試一次備份，成功了才寫回
    assert backup.read_text(encoding="utf-8") == original
    assert json.loads(path.read_text(encoding="utf-8"))[0]["type"] == "word"


# ── 第 6 項：規則檔寫不進去時要說，而且這次改動不生效 ──────────────────────


@pytest.fixture()
def unwritable(monkeypatch):
    real_replace = engine_module.os.replace

    def replace(src, dst):
        if str(dst) == filter_engine.path:
            raise OSError("read-only file system")
        return real_replace(src, dst)

    def apply():
        monkeypatch.setattr(engine_module.os, "replace", replace)

    return apply


def test_a_failed_write_is_reported_and_the_change_does_not_take_effect(client, unwritable, caplog):
    session_service.open_session("場")
    keep = filter_engine.add_rule({"type": "word", "pattern": "keep"})
    filter_engine.add_rule({"type": "word", "pattern": "本場", "lifetime": "session"})
    before = filter_engine.list_rules()
    unwritable()

    with caplog.at_level("WARNING", logger="server.services.filter_engine"):
        calls = [
            ("/admin/filters/add", {"type": "word", "pattern": "new"}),
            ("/admin/filters/update", {"rule_id": keep, "updates": {"enabled": False}}),
            ("/admin/filters/remove", {"rule_id": keep}),
            ("/admin/filters/clear-session", {}),
            ("/admin/blacklist/add", {"keyword": "new2"}),
            ("/admin/blacklist/remove", {"keyword": "keep"}),
            ("/admin/live/block", {"type": "keyword", "value": "new3"}),
            ("/admin/live/block", {"type": "fingerprint", "value": "fp_new"}),
        ]
        for url, payload in calls:
            res = _post(client, url, payload)
            assert res.status_code == 500, url
            assert res.get_json()["code"] == "save_failed", url

    assert filter_engine.list_rules() == before
    assert "could not write" in caplog.text


# ── 第 7、8 項：expires_at 只由伺服器算；沒帶 type 的新增是 400 ────────────


def test_clients_cannot_set_expires_at(client, monkeypatch):
    monkeypatch.setattr(engine_module.time, "time", lambda: 1_000.0)
    res = _post(
        client,
        "/admin/filters/add",
        {"type": "word", "pattern": "x", "lifetime": "timed", "expires_at": 9e12},
    )
    assert res.status_code == 400  # 只有 expires_at = 沒有期限

    rule_id = filter_engine.add_rule(
        {
            "type": "word",
            "pattern": "y",
            "lifetime": "timed",
            "duration_sec": 600,
            "expires_at": 1,
        }
    )
    assert filter_engine.get_rule(rule_id)["expires_at"] == 1_600.0
    filter_engine.update_rule(rule_id, {"expires_at": 9e12})
    filter_engine.update_rule(rule_id, {"pattern": "z", "expires_at": 9e12})
    assert filter_engine.get_rule(rule_id)["expires_at"] == 1_600.0


def test_add_without_type_is_a_400_like_5_8(client):
    res = _post(client, "/admin/filters/add", {"pattern": "x", "action": "block"})
    assert res.status_code == 400
    assert "type" in res.get_json()["details"]
    assert filter_engine.list_rules() == []


# ── 第 9 項：快捷規則的誤判 ──────────────────────────────────────────


def _quick_pattern(quick_id):
    """直接從 admin-filters.js 取出快捷規則的正規式（Python 寫法，由後端比對）。"""
    src = (SERVER / "static" / "js" / "admin-filters.js").read_text(encoding="utf-8")
    block = src[src.index("const QUICK = [") :]
    block = block[: block.index("\n  ];")]
    entry = block[block.index(f'id: "{quick_id}"') :]
    entry = entry[entry.index("pattern:") : entry.index("action:")]
    return "".join(json.loads(lit) for lit in re.findall(r'"(?:[^"\\]|\\.)*"', entry))


ALLCAPS_HITS = ["HELLO WORLD", "STOP SPAMMING NOW", "HELLO WORLD 2024", "WHY?! WHY?! WHY?!"]
ALLCAPS_MISSES = [
    "!!!!!!!!",
    "........",
    "????????????",
    "OK OK OK",
    "OK OK OK OK",
    "WOW!!! 😀😀",
    "hello world",
    "Hello World Again",
    "HELLO WORLd",
    "        ",
]
EMOJI_HITS = ["😀😀", "👍 👍", "❤️", "👨‍👩‍👧", "✅", "⚡⚡", "1️⃣", "🏳️‍🌈", "✔️"]
# ★ ✔ → 這些沒帶 U+FE0F 的是文字符號，不算表情（取捨見 admin-filters.js）
EMOJI_MISSES = ["   ", "", "\t", "★★★", "✔", "→→→", "hi 😀", "😀 hi", "™"]


@pytest.mark.parametrize(
    "quick_id, hits, misses, action",
    [
        ("allcaps", ALLCAPS_HITS, ALLCAPS_MISSES, "review"),
        ("emojionly", EMOJI_HITS, EMOJI_MISSES, "block"),
    ],
)
def test_quick_rules_hit_and_miss(quick_id, hits, misses, action):
    pattern = _quick_pattern(quick_id)
    with hard_limit(10):
        filter_engine.add_rule({"type": "regex", "pattern": pattern, "action": action})
    for text in hits:
        assert filter_engine.check(text).action == action, text
    for text in misses:
        assert filter_engine.check(text).action == "pass", text


def test_every_quick_rule_passes_the_safety_check(client):
    src = (SERVER / "static" / "js" / "admin-filters.js").read_text(encoding="utf-8")
    ids = re.findall(r'id: "(\w+)", key:', src) + re.findall(r'id: "(\w+)",\n\s+key:', src)
    assert sorted(ids) == ["allcaps", "emojionly", "repeat", "url"]
    session_service.open_session("場")
    with hard_limit(20):
        for quick_id in ids:
            pattern = _quick_pattern(quick_id)
            assert len(pattern) <= 500
            res = _post(
                client,
                "/admin/filters/add",
                {
                    "type": "regex",
                    "pattern": pattern,
                    "action": "review",
                    "priority": 50,
                    "lifetime": "session",
                },
            )
            assert res.status_code == 200, (quick_id, res.get_json())


# ── 等價：隨機規則集 × 隨機輸入（不含 keyword＋block），引擎層 ──────────────

_PATTERNS = ["ab", "AB", "spam", "Spam", "vip", "ask", "x", "1234", "加line", "ß", "İ"]
_TEXTS = [
    "ab spam",
    "AB vip",
    "ask: spam",
    "spam 1234",
    "vip ab x",
    "加LINE",
    "",
    "x",
    "SS ß",
    "i̇ İ",
    "spamspam",
    "hello",
]
_FPS = [None, "fp1", "fp2", "fpz"]


def _random_rule(rnd, i):
    kind = rnd.choice(
        ["kw_allow", "kw_review", "rx_block", "rx_allow", "rx_review", "replace", "rate", "fp"]
    )
    rule = {"id": f"r{i}", "priority": rnd.choice([0, 1, 5, 5, 10, 50, 100])}
    rule["enabled"] = rnd.random() > 0.15
    pattern = rnd.choice(_PATTERNS)
    if kind.startswith("kw_"):
        rule.update(type="keyword", pattern=pattern, action=kind[3:])
    elif kind.startswith("rx_"):
        pattern = rnd.choice([pattern, r"\d+", "^ask", "s+p", "(?i)AB"])
        rule.update(type="regex", pattern=pattern, action=kind[3:])
    elif kind == "replace":
        rule.update(
            type="replace",
            pattern=rnd.choice([pattern, r"\d", "spa+m"]),
            action="replace",
            replacement=rnd.choice(["***", "", "spam", r"\g<0>!"]),
        )
    elif kind == "rate":
        rule.update(
            type="rate_limit",
            pattern="",
            action="block",
            max_count=rnd.randint(1, 3),
            window_sec=60.0,
        )
    else:
        rule.update(type="fingerprint", pattern=rnd.choice(["fp1", "fp2"]), action="block")
    return rule


def _random_case(seed):
    rnd = random.Random(seed)
    rules = [_random_rule(rnd, i) for i in range(rnd.randint(1, 7))]
    words = rnd.sample(_PATTERNS, rnd.randint(0, 3))
    messages = [(rnd.choice(_TEXTS), rnd.choice(_FPS)) for _ in range(12)]
    return rules, words, messages


def _ordered_word_match(words):
    # 舊黑名單是 set（多個字同時命中時回報哪一個看雜湊順序）；這裡用加入順序當參照，
    # 與新引擎相同。
    def match(text):
        lowered = text.lower()
        return next((w for w in words if w.lower() in lowered), "")

    return match


def _decide(check, match_word, text, fp):
    result = check(text, fp)
    out = {"stage1": (result.action, result.text, result.reason, result.rule_id)}
    if result.action == "block":
        return {**out, "status": 400, "by": result.rule_id or result.reason, "err": result.reason}
    if result.action == "review":
        return {**out, "status": 202}
    if result.action == "replace":
        text = result.text
    word = match_word(text)
    if word:
        return {**out, "status": 400, "by": word, "err": "Content contains blocked keywords"}
    return {**out, "status": 200, "text": text}


def test_seeded_random_rule_sets_decide_exactly_like_5_8(tmp_path):
    original = FilterEngine._instance
    diffs = []
    try:
        for seed in range(300):
            rules, words, messages = _random_case(seed)
            old_path, new_path = tmp_path / f"l{seed}.json", tmp_path / f"n{seed}.json"
            old_path.write_text(json.dumps(rules))
            new_path.write_text(json.dumps(rules))
            legacy.FilterEngine._instance = None
            old = legacy.FilterEngine(path=str(old_path))
            FilterEngine._instance = None
            new = FilterEngine(path=str(new_path))
            for word in words:
                assert new.add_word(word) == "added"
            old_words = _ordered_word_match(words)
            for text, fp in messages:
                a = _decide(old.check, old_words, text, fp)
                b = _decide(new.check, new.match_word, text, fp)
                if a != b:
                    diffs.append((seed, text, fp, a, b))
    finally:
        legacy.FilterEngine._instance = None
        FilterEngine._instance = original
    assert diffs == []


# ── 等價：走一次完整的 /fire（回應、紀錄裡的 blocked_by、命中紀錄） ───────────


def _fire_snapshot(client, messages):
    from server.services import fingerprint_tracker, history, ws_queue
    from server.services.mod_queue import mod_queue

    history.danmu_history.clear()
    filter_events.clear()
    mod_queue.clear()
    fingerprint_tracker.reset()
    ws_queue.dequeue_all()
    responses = []
    for text, fp in messages:
        payload = {"text": text, "color": "ffffff"}
        if fp:
            payload["fingerprint"] = fp
        res = client.post("/fire", json=payload)
        body = res.get_json() or {}
        body.pop("queue_id", None)
        responses.append((res.status_code, body))
    records = [
        (r.get("text"), r.get("status"), r.get("blockedBy"))
        for r in history.danmu_history.get_recent(hours=1, limit=1000)
    ]
    events = [
        (
            e.get("action"),
            e.get("rule_id"),
            e.get("pattern"),
            e.get("text_excerpt"),
            e.get("source"),
        )
        for e in filter_events.recent(limit=200)
    ]
    delivered = [m.get("text") for m in ws_queue.dequeue_all() if m.get("text") is not None]
    return {"responses": responses, "history": records, "events": events, "delivered": delivered}


def test_fire_full_path_matches_5_8_on_seeded_rule_sets(client, overlay, tmp_path, monkeypatch):
    from flask import current_app

    from server.routes import api as api_routes

    monkeypatch.setitem(current_app.config, "FIRE_RATE_LIMIT", 100_000)
    monkeypatch.setitem(current_app.config, "FIRE_FINGERPRINT_RATE_LIMIT", 100_000)
    # 凍結的舊引擎用 `from . import filter_events` 記命中紀錄；讓它找得到正式的那一個。
    monkeypatch.setitem(sys.modules, "server.tests.filter_events", filter_events)
    real_engine, real_match = api_routes.filter_engine, api_routes.matched_keyword
    saw_events = False
    try:
        for seed in range(25):
            rules, words, messages = _random_case(1000 + seed)
            old_path = tmp_path / f"fire{seed}.json"
            old_path.write_text(json.dumps(rules))
            legacy.FilterEngine._instance = None
            api_routes.filter_engine = legacy.FilterEngine(path=str(old_path))
            api_routes.matched_keyword = _ordered_word_match(words)
            before = _fire_snapshot(client, messages)

            api_routes.filter_engine, api_routes.matched_keyword = real_engine, real_match
            filter_engine._rate_tracker.clear()  # 參照組每輪都是新的引擎（空的頻率計數）
            _load_legacy(rules)
            for word in words:
                filter_engine.add_word(word)
            after = _fire_snapshot(client, messages)

            assert after == before, seed
            saw_events = saw_events or bool(before["events"])
    finally:
        api_routes.filter_engine, api_routes.matched_keyword = real_engine, real_match
        legacy.FilterEngine._instance = None
    assert saw_events  # 參照組真的有記到命中紀錄，比對不是空對空


# ── keyword＋block 轉成封鎖字：審查另外找到的差異 9、10（刻意的行為改變） ──────


def test_difference_9_an_earlier_replace_rule_no_longer_lets_the_word_through(client, overlay):
    replace = {
        "id": "rp1",
        "type": "replace",
        "pattern": "damn",
        "action": "replace",
        "replacement": "***",
        "priority": 0,
    }
    kb = {"id": "kb1", "type": "keyword", "pattern": "legacy", "action": "block", "priority": 5}
    _load_legacy([replace, kb])
    res = client.post("/fire", json={"text": "damn legacy"})
    # 5.8: 200，送出「*** legacy」（替換規則 priority 較小，第 1 段就結束，
    # keyword＋block 沒比到）。現在替換之後再比封鎖字，替換沒換掉 legacy → 擋下。
    assert res.status_code == 400
    assert res.get_json()["error"] == "Content contains blocked keywords"


@pytest.mark.parametrize(
    "other, payload, error",
    [
        (
            {"id": "rx1", "type": "regex", "pattern": "leg", "action": "block", "priority": 50},
            {"text": "legacy"},
            "Regex match: 'leg'",
        ),
        (
            {
                "id": "fp1",
                "type": "fingerprint",
                "pattern": "fp_x",
                "action": "block",
                "priority": 50,
            },
            {"text": "legacy", "fingerprint": "fp_x"},
            "Fingerprint blocked: 'fp_x'",
        ),
    ],
)
def test_difference_10_other_block_rules_now_match_first(client, overlay, other, payload, error):
    from server.services import history

    kb = {"id": "kb1", "type": "keyword", "pattern": "legacy", "action": "block", "priority": 0}
    _load_legacy([kb, other])
    history.danmu_history.clear()
    filter_events.clear()
    _csrf(client)
    res = client.post("/fire", json={"color": "ffffff", **payload})
    # 5.8: keyword＋block（priority 0）先命中——訊息是 "Keyword match: 'legacy'"、
    # blocked_by 是 "kb1"、命中紀錄記在 kb1。現在封鎖字排在第 1 段之後，
    # priority 50 的那條先擋：訊息、blocked_by、命中紀錄都是那一條的。
    assert res.status_code == 400
    assert res.get_json()["error"] == error
    blocked = [
        r["blockedBy"]
        for r in history.danmu_history.get_recent(hours=1, limit=10)
        if r["status"] == "blocked"
    ]
    assert blocked == [other["id"]]
    assert [(e["action"], e["rule_id"]) for e in filter_events.recent()] == [("BLOCK", other["id"])]


def test_difference_10_rate_limit_now_matches_first(client, overlay, monkeypatch):
    from flask import current_app

    monkeypatch.setitem(current_app.config, "FIRE_RATE_LIMIT", 1000)
    kb = {"id": "kb1", "type": "keyword", "pattern": "legacy", "action": "block", "priority": 0}
    rate = {
        "id": "rl1",
        "type": "rate_limit",
        "pattern": "",
        "action": "block",
        "priority": 50,
        "max_count": 1,
        "window_sec": 60,
    }
    _load_legacy([kb, rate])
    assert client.post("/fire", json={"text": "ok", "fingerprint": "fp_r"}).status_code == 200
    res = client.post("/fire", json={"text": "legacy", "fingerprint": "fp_r"})
    # 5.8: "Keyword match: 'legacy'"（kb1 先命中）；現在是頻率規則先擋。
    assert res.status_code == 400
    assert res.get_json()["error"].startswith("Rate limit exceeded")


# ── 外部審查（2026-11-14 第三輪）──────────────────────────────────────────


def test_restore_waits_for_an_edit_in_flight_and_the_restored_rules_stay(monkeypatch):
    """還原與一次規則編輯交錯：還原要等編輯提交完，換檔＋重新載入在同一個鎖裡。

    以前備份模組先自己寫檔、之後才 reload()；中間提交的編輯會用還原前的記憶體清單
    把剛還原的檔案蓋回去。
    """
    import threading

    filter_engine.add_rule({"type": "word", "pattern": "before"})
    entered, release = threading.Event(), threading.Event()
    real_write = filter_engine._write_bytes
    first = []

    def slow_write(payload):
        if not first:
            first.append(True)
            entered.set()
            release.wait(5)
        return real_write(payload)

    monkeypatch.setattr(filter_engine, "_write_bytes", slow_write)
    edit = threading.Thread(
        target=lambda: filter_engine.add_rule({"type": "word", "pattern": "edited"})
    )
    restored = json.dumps(
        [{"id": "r1", "type": "word", "pattern": "restored", "action": "block"}]
    ).encode()
    result = {}
    restore = threading.Thread(
        target=lambda: result.update(n=engine_module.restore_rules_file(restored))
    )
    with hard_limit(15):
        edit.start()
        assert entered.wait(5)
        restore.start()
        time.sleep(0.2)
        assert "n" not in result  # 還原在等編輯放掉鎖
        release.set()
        edit.join(5)
        restore.join(5)
    assert result["n"] == 1
    assert [r["pattern"] for r in filter_engine.list_rules()] == ["restored"]
    assert [r["pattern"] for r in json.loads(Path(filter_engine.path).read_text())] == ["restored"]


def test_backup_restore_goes_through_the_engine(tmp_path, monkeypatch):
    runtime = tmp_path / "runtime"
    runtime.mkdir()
    monkeypatch.setattr(backup_svc, "_INCLUDE_DIRS", [("runtime", runtime, "runtime", "*.json")])
    monkeypatch.setattr(filter_engine, "_path", str(runtime / "filter_rules.json"))
    filter_engine.reload()
    filter_engine.add_rule({"type": "word", "pattern": "現有"})
    calls = []
    real_restore = engine_module.restore_rules_file
    monkeypatch.setattr(
        engine_module, "restore_rules_file", lambda data: calls.append(data) or real_restore(data)
    )

    def tarball(content):
        buf = io.BytesIO()
        with tarfile.open(fileobj=buf, mode="w:gz") as tar:
            for name, data in (
                ("manifest.json", b'{"version": "1", "files": []}'),
                ("runtime/filter_rules.json", content),
            ):
                info = tarfile.TarInfo(name)
                info.size = len(data)
                tar.addfile(info, io.BytesIO(data))
        return buf.getvalue()

    # 壞掉的規則檔：回報錯誤，現有規則與檔案都不動
    broken = backup_svc.unpack(tarball(b"{not json"), dry_run=False)
    assert broken["ok"] is False
    assert any("filter_rules.json" in e for e in broken["errors"])
    assert [r["pattern"] for r in filter_engine.list_rules()] == ["現有"]

    good = json.dumps([{"id": "x", "type": "regex", "pattern": "a+", "action": "block"}])
    assert backup_svc.unpack(tarball(good.encode()), dry_run=False)["ok"] is True
    assert len(calls) == 2
    assert [r["pattern"] for r in filter_engine.list_rules()] == ["a+"]
    # 暫存檔名不共用，也不留在目錄裡
    assert not [p.name for p in runtime.iterdir() if p.name.endswith(".tmp")]


def test_writes_use_their_own_temporary_file_name(monkeypatch):
    names = []
    real_replace = engine_module.os.replace

    def spy(src, dst):
        names.append(Path(src).name)
        return real_replace(src, dst)

    monkeypatch.setattr(engine_module.os, "replace", spy)
    filter_engine.add_rule({"type": "word", "pattern": "a"})
    filter_engine.add_rule({"type": "word", "pattern": "b"})
    assert len(set(names)) == 2
    assert all(n.startswith(".filter_rules.json.") and n.endswith(".tmp") for n in names)
    assert "filter_rules.json.tmp" not in names  # 備份模組以前用的那個名字


def test_a_session_rule_is_rechecked_inside_the_lock(monkeypatch):
    """驗證時場次還在、提交前結束了：不能提交，否則它會留到下一場結束。"""
    answers = iter([True, False])
    monkeypatch.setattr(engine_module, "_session_live", lambda: next(answers))
    with pytest.raises(engine_module.RuleValidationError) as exc:
        filter_engine.add_rule(
            {"type": "keyword", "pattern": "x", "action": "review", "lifetime": "session"}
        )
    assert exc.value.code == "no_session"
    assert filter_engine.list_rules() == []


def test_expired_words_are_not_duplicates(monkeypatch):
    now = [10_000.0]
    monkeypatch.setattr(engine_module.time, "time", lambda: now[0])
    filter_engine.add_rule(
        {"type": "word", "pattern": "限時", "lifetime": "timed", "duration_sec": 60}
    )
    now[0] += 61  # 到期了，但還沒有任何比對把它清掉
    assert filter_engine.add_word("限時") == "added"
    assert filter_engine.get_rule(filter_engine.list_rules()[0]["id"])["lifetime"] == "permanent"
    assert filter_engine.match_word("限時") == "限時"

    filter_engine.add_rule(
        {"type": "word", "pattern": "另一個", "lifetime": "timed", "duration_sec": 60}
    )
    now[0] += 61
    filter_engine.add_rule({"type": "word", "pattern": "另一個"})  # 不是 duplicate
    assert sorted(list_keywords()) == sorted(["限時", "另一個"])


def test_regex_patterns_keep_their_spaces(client):
    res = _post(
        client, "/admin/filters/add", {"type": "regex", "pattern": "foo ", "action": "block"}
    )
    rule_id = res.get_json()["rule_id"]
    form = {"type": "regex", "pattern": "foo ", "action": "block", "priority": 3}
    assert (
        _post(client, "/admin/filters/update", {"rule_id": rule_id, "updates": form}).status_code
        == 200
    )
    assert filter_engine.get_rule(rule_id)["pattern"] == "foo "
    assert filter_engine.check("foobar").action == "pass"
    assert filter_engine.check("foo bar").action == "block"


@pytest.mark.parametrize("stored_action", ["block", "replace", "allow", "review"])
def test_fingerprint_and_rate_rules_always_block_whatever_action_is_stored(stored_action):
    """事實（5.8 起就是這樣）：比對時不看指紋／頻率規則存的動作，命中一律封鎖。"""
    _load_legacy(
        [
            {"id": "fp", "type": "fingerprint", "pattern": "fp_a", "action": stored_action},
            {
                "id": "rl",
                "type": "rate_limit",
                "pattern": "",
                "action": stored_action,
                "max_count": 1,
                "window_sec": 60,
            },
        ]
    )
    filter_engine._rate_tracker.clear()
    assert filter_engine.check("hi", "fp_a").action == "block"
    assert filter_engine.check("hi", "fp_b").action == "pass"  # 頻率：第一則
    assert filter_engine.check("hi", "fp_b").action == "block"
    old_path = Path(filter_engine.path)
    legacy.FilterEngine._instance = None
    old = legacy.FilterEngine(path=str(old_path))
    try:
        assert old.check("hi", "fp_a").action == "block"
    finally:
        legacy.FilterEngine._instance = None


def test_at_most_two_checks_run_at_once(monkeypatch):
    import threading

    real_run = rule_regex.subprocess.run
    live, peak = [0], [0]
    counter_lock = threading.Lock()  # += 跨執行緒不是原子操作

    def counting_run(*args, **kwargs):
        with counter_lock:
            live[0] += 1
            peak[0] = max(peak[0], live[0])
        try:
            time.sleep(0.15)  # 讓同時送出的檢查真的重疊
            return real_run(*args, **kwargs)
        finally:
            with counter_lock:
                live[0] -= 1

    monkeypatch.setattr(rule_regex.subprocess, "run", counting_run)
    errors = []

    def one():
        try:
            rule_regex.vet_pattern("abc")
        except Exception as exc:  # pragma: no cover - 失敗時看得到原因
            errors.append(exc)

    # 號誌不保證先來先等，放寬排隊上限，只量同時存活的數量
    monkeypatch.setattr(rule_regex, "QUEUE_TIMEOUT_SEC", 30.0)
    threads = [threading.Thread(target=one) for _ in range(8)]
    with hard_limit(20):
        for th in threads:
            th.start()
        for th in threads:
            th.join(15)
    assert errors == []
    assert peak[0] == rule_regex.MAX_CONCURRENT_CHECKS == 2


def test_waiting_too_long_for_a_check_slot_is_a_clear_error(client, monkeypatch):
    monkeypatch.setattr(rule_regex, "QUEUE_TIMEOUT_SEC", 0.1)
    slots = rule_regex._check_slots()
    held = 0
    try:
        while slots.acquire(blocking=False):
            held += 1
        with hard_limit(10):
            with pytest.raises(rule_regex.PatternCheckBusy):
                rule_regex.vet_pattern("abc")
            res = _post(client, "/admin/filters/add", {"type": "regex", "pattern": "abc"})
    finally:
        for _ in range(held):
            slots.release()
    assert held == rule_regex.MAX_CONCURRENT_CHECKS
    assert res.status_code == 400
    assert res.get_json()["code"] == "regex_busy"
    assert rule_regex.vet_pattern("abc") is None  # 放掉之後照常


def test_the_child_limits_its_own_address_space_and_degrades_where_unsupported():
    child = rule_regex._CHILD
    assert "resource.setrlimit(resource.RLIMIT_AS" in child
    assert "except (ImportError, AttributeError, ValueError, OSError)" in child
    assert "except MemoryError" in child
    assert rule_regex.CHILD_ADDRESS_SPACE_BYTES == 256 * 1024 * 1024
    # 在這個平台上（macOS 不允許調低 RLIMIT_AS）照常可以檢查
    with hard_limit(10):
        assert rule_regex.vet_pattern("abc") is None


# ── 第四輪複核（2026-11-14）──────────────────────────────────────────────

_BAD_ENTRIES = {
    "priority_null": {
        "id": "a",
        "type": "keyword",
        "pattern": "x",
        "action": "review",
        "priority": None,
    },
    "priority_high": {
        "id": "a",
        "type": "keyword",
        "pattern": "x",
        "action": "review",
        "priority": "high",
    },
}


def _tarball(files):
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for name, data in files:
            info = tarfile.TarInfo(name)
            info.size = len(data)
            tar.addfile(info, io.BytesIO(data))
    return buf.getvalue()


@pytest.mark.parametrize("case", sorted(_BAD_ENTRIES))
def test_restoring_unreadable_entries_changes_nothing_and_the_rest_still_restores(
    tmp_path, monkeypatch, case
):
    """B1：條目欄位型別不對的規則檔——還原是全有或全無，一個檔失敗不毀掉整次還原。"""
    runtime = tmp_path / "runtime"
    runtime.mkdir()
    rules_file = runtime / "filter_rules.json"
    monkeypatch.setattr(backup_svc, "_INCLUDE_DIRS", [("runtime", runtime, "runtime", "*.json")])
    monkeypatch.setattr(filter_engine, "_path", str(rules_file))
    filter_engine.reload()
    filter_engine.add_rule({"type": "word", "pattern": "現有"})
    before = rules_file.read_bytes()

    bad = json.dumps(
        [{"id": "ok", "type": "word", "pattern": "好的", "action": "block"}, _BAD_ENTRIES[case]]
    ).encode()
    archive = _tarball(
        [
            ("manifest.json", b"{}"),
            ("runtime/filter_rules.json", bad),
            ("runtime/zz_other.json", b'{"k": 1}'),  # 排在後面的檔
        ]
    )
    out = backup_svc.unpack(archive, dry_run=False)  # 不丟例外

    assert out["ok"] is False
    assert any("filter_rules.json" in e and "priority" in e for e in out["errors"])
    assert rules_file.read_bytes() == before
    assert [r["pattern"] for r in filter_engine.list_rules()] == ["現有"]
    assert (runtime / "zz_other.json").read_text() == '{"k": 1}'
    original = FilterEngine._instance
    try:
        FilterEngine._instance = None
        restarted = FilterEngine(path=str(rules_file))  # 不丟例外
        assert [r.pattern for r in restarted._rules] == ["現有"]
    finally:
        FilterEngine._instance = original


@pytest.mark.parametrize(
    "bad",
    [
        {"type": "regex", "pattern": None, "action": "block"},
        {"type": "word", "pattern": 123, "action": "block"},
        {"type": "keyword", "pattern": "x", "action": "review", "window_sec": "slow"},
        "not an object",
    ],
)
def test_restore_file_rejects_other_unreadable_entries(bad):
    filter_engine.add_rule({"type": "word", "pattern": "現有"})
    before = Path(filter_engine.path).read_bytes()
    with pytest.raises(ValueError, match="entry 1"):
        engine_module.restore_rules_file(json.dumps([bad]).encode())
    assert Path(filter_engine.path).read_bytes() == before
    assert [r["pattern"] for r in filter_engine.list_rules()] == ["現有"]


def test_startup_skips_an_unreadable_entry_and_keeps_a_copy(caplog):
    path = Path(filter_engine.path)
    content = json.dumps(
        [
            {
                "id": "a",
                "type": "word",
                "pattern": "留著",
                "action": "block",
                "lifetime": "permanent",
            },
            {
                "id": "b",
                "type": "keyword",
                "pattern": "壞",
                "action": "review",
                "priority": None,
                "lifetime": "permanent",
            },
            {
                "id": "c",
                "type": "regex",
                "pattern": r"\d+",
                "action": "block",
                "lifetime": "permanent",
            },
        ]
    )
    path.write_text(content, encoding="utf-8")
    original = FilterEngine._instance
    try:
        with caplog.at_level("WARNING", logger="server.services.filter_engine"):
            FilterEngine._instance = None
            engine = FilterEngine(path=str(path))  # 伺服器起得來
        assert [r.id for r in engine._rules] == ["a", "c"]
        assert engine.match_word("留著") == "留著"
        assert "skipped 1 unreadable entry" in caplog.text

        copies = sorted(path.parent.glob("filter_rules.json.unreadable-*.bak"))
        assert len(copies) == 1
        assert copies[0].read_text(encoding="utf-8") == content
        assert path.read_text(encoding="utf-8") == content  # 讀檔本身不改原檔

        # 同樣的內容再啟動一次：不重複留副本
        FilterEngine._instance = None
        FilterEngine(path=str(path))
        assert sorted(path.parent.glob("filter_rules.json.unreadable-*.bak")) == copies

        # 備份打包不會帶走副本
        assert not copies[0].name.endswith(".json")
    finally:
        FilterEngine._instance = original


def test_update_to_session_rechecks_the_session_inside_the_lock(monkeypatch):
    """N4：改 pattern 加改期限成本場次的更新——驗證時場次在、提交前結束，不能提交。"""
    rule_id = filter_engine.add_rule({"type": "regex", "pattern": "a+", "action": "block"})
    answers = iter([True, False])
    monkeypatch.setattr(engine_module, "_session_live", lambda: next(answers))
    with pytest.raises(engine_module.RuleValidationError) as exc:
        filter_engine.update_rule(rule_id, {"pattern": "b+", "lifetime": "session"})
    assert exc.value.code == "no_session"
    rule = filter_engine.get_rule(rule_id)
    assert (rule["pattern"], rule["lifetime"]) == ("a+", "permanent")


def test_updating_an_expired_rule_is_not_found(monkeypatch):
    """N4：update_rule 第一段鎖裡清到期——已到期的規則不能被「改」回來。"""
    now = [50_000.0]
    monkeypatch.setattr(engine_module.time, "time", lambda: now[0])
    rule_id = filter_engine.add_rule(
        {
            "type": "keyword",
            "pattern": "x",
            "action": "review",
            "lifetime": "timed",
            "duration_sec": 60,
        }
    )
    now[0] += 61
    assert filter_engine.update_rule(rule_id, {"priority": 7}) is False
    assert filter_engine.get_rule(rule_id) is None
    assert json.loads(Path(filter_engine.path).read_text()) == []


def test_a_rule_that_expires_while_its_edit_is_checked_is_not_found(monkeypatch):
    """N4：update_rule 第二段鎖裡清到期——驗證（鎖外）期間到期的規則不會被寫回。"""
    now = [50_000.0]
    monkeypatch.setattr(engine_module.time, "time", lambda: now[0])
    rule_id = filter_engine.add_rule(
        {
            "type": "regex",
            "pattern": "a+",
            "action": "review",
            "lifetime": "timed",
            "duration_sec": 60,
        }
    )
    real_validate = filter_engine._validate

    def slow_validate(*args, **kwargs):
        rule = real_validate(*args, **kwargs)
        now[0] += 61  # 驗證跑到一半，規則到期
        return rule

    monkeypatch.setattr(filter_engine, "_validate", slow_validate)
    assert filter_engine.update_rule(rule_id, {"pattern": "b+"}) is False
    assert filter_engine.get_rule(rule_id) is None
    assert json.loads(Path(filter_engine.path).read_text()) == []


def test_a_check_that_runs_out_of_memory_is_rejected(client, monkeypatch):
    """N5：子行程 MemoryError 的那條路（用改過的子行程程式走到那個分支）。"""
    marker = '    for mode, text in job["probes"]:'
    assert rule_regex._CHILD.count(marker) == 1
    monkeypatch.setattr(
        rule_regex,
        "_CHILD",
        rule_regex._CHILD.replace(marker, "    raise MemoryError\n" + marker),
    )
    with hard_limit(10):
        with pytest.raises(rule_regex.PatternCheckUnavailable, match="out of memory"):
            rule_regex.vet_pattern("abc")
        res = _post(client, "/admin/filters/add", {"type": "regex", "pattern": "abc"})
    assert res.status_code == 400
    assert res.get_json()["code"] == "unsafe_regex"
    assert filter_engine.list_rules() == []
