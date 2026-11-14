"""封鎖規則合一：合併前後對同一批輸入的判定必須完全相同。

5.8 以前是兩套東西：``services/filter_engine.py``（規則，存檔）與 ``state.blacklist``
（字串黑名單，只在記憶體）。現在封鎖字是同一份清單裡 ``type == "word"`` 的規則。
這裡拿凍結的舊引擎（``_legacy_filter_engine_v58.py``）加上當時的黑名單比對當參照組，
與新引擎逐筆比對 /fire 會看到的每一項：第 1 段的 action／text／reason／rule_id、
第 2 段擋下的那個字（= 紀錄裡的 ``blocked_by``）、以及觀眾看到的錯誤訊息。

**刻意的例外：5.8 的 keyword＋block 過濾規則。** 2026-11-14 擁有者拍板統一：讀檔時轉成
封鎖字（word）。所以等價比對用的規則集合不含這一類（``UNCHANGED_RULES``），轉換後的
差異另外在 ``test_block_rules.py`` 逐項列出、用測試釘住。
"""

import json

import pytest

from server.services.filter_engine import FilterEngine
from server.tests import _legacy_filter_engine_v58 as legacy

# 5.8 的規則檔長相（沒有 lifetime 欄位）。涵蓋每一種型別與動作、同 priority 的先後、
# 停用的規則，以及「放行」排在封鎖字之前的情況（舊行為：放行擋不住黑名單）。
LEGACY_RULES = [
    {"id": "allow01", "type": "keyword", "pattern": "VIP", "action": "allow", "priority": 1},
    {"id": "kwblk01", "type": "keyword", "pattern": "Spam", "action": "block", "priority": 5},
    {"id": "rxblk01", "type": "regex", "pattern": r"\d{4}-\d{4}", "action": "block", "priority": 5},
    {
        "id": "repl01",
        "type": "replace",
        "pattern": "fu+ck",
        "action": "replace",
        "priority": 3,
        "replacement": "***",
    },
    {"id": "review1", "type": "regex", "pattern": "^ask:", "action": "review", "priority": 10},
    {"id": "kwrev01", "type": "keyword", "pattern": "maybe", "action": "review", "priority": 10},
    {"id": "fpblk01", "type": "fingerprint", "pattern": "fp_bad", "action": "block", "priority": 0},
    {
        "id": "rate001",
        "type": "rate_limit",
        "pattern": "flood",
        "action": "block",
        "priority": 50,
        "max_count": 3,
        "window_sec": 60.0,
    },
    {"id": "off0001", "type": "keyword", "pattern": "hello", "action": "block", "enabled": False},
    # 不合法的正規式：舊引擎載入時自動停用，新引擎也要
    {"id": "badrx01", "type": "regex", "pattern": "[unclosed", "action": "block", "priority": 0},
]

# 5.8 的 keyword＋block：讀檔時轉成封鎖字，判定刻意改變（見檔頭）。
KEYWORD_BLOCK_IDS = {"kwblk01", "off0001"}
UNCHANGED_RULES = [r for r in LEGACY_RULES if r["id"] not in KEYWORD_BLOCK_IDS]

# 舊黑名單裡的字。每個輸入最多命中一個字——舊黑名單是 set，多個字同時命中時回報哪一個
# 由雜湊順序決定，沒有「相同」可言；新引擎改成加入順序（確定性的）。
LEGACY_WORDS = ["加line", "BadWord", "賭博"]

INPUTS = [
    ("今天好熱鬧", None),
    ("加LINE 給你折扣", "fp_a"),
    ("this is SPAM", "fp_a"),
    ("call 1234-5678 now", "fp_a"),
    ("fuuuck this", "fp_b"),
    ("fuuck 加line", "fp_b"),  # 替換之後才比對封鎖字
    ("vip badword", "fp_c"),  # 放行擋不住封鎖字
    ("VIP only", "fp_c"),
    ("ask: what time", "fp_c"),
    ("maybe 賭博", "fp_c"),  # 送審在第 1 段就結束（佇列寫入成功時）
    ("anything", "fp_bad"),
    ("hello world", "fp_a"),  # 停用的規則不擋
    ("[unclosed", "fp_a"),
    ("", "fp_a"),
] + [("flood message %d" % i, "fp_rate") for i in range(5)]


def _decide(stage1, match_word, text, fp):
    """照 routes/api.py 的 /fire 順序走一次，回傳所有對外看得到的結果。"""
    r = stage1(text, fp)
    out = {"stage1": (r.action, r.text, r.reason, r.rule_id)}
    if r.action == "block":
        out.update(blocked_by=r.rule_id or r.reason or "filter", error=r.reason)
        return out
    if r.action == "review":
        out.update(queued=True)
        return out
    if r.action == "replace":
        text = r.text
    word = match_word(text)
    if word:
        out.update(blocked_by=word, error="Content contains blocked keywords")
    return out


@pytest.fixture()
def legacy_engine(tmp_path):
    path = tmp_path / "legacy.json"
    path.write_text(json.dumps(UNCHANGED_RULES), encoding="utf-8")
    legacy.FilterEngine._instance = None
    engine = legacy.FilterEngine(path=str(path))
    yield engine
    legacy.FilterEngine._instance = None


@pytest.fixture()
def unified_engine(tmp_path):
    path = tmp_path / "filter_rules.json"
    path.write_text(json.dumps(UNCHANGED_RULES), encoding="utf-8")
    FilterEngine._instance = None
    engine = FilterEngine(path=str(path))
    # 舊黑名單沒有存檔；升級後重新加入的字走 /admin/blacklist/add → add_word
    for word in LEGACY_WORDS:
        assert engine.add_word(word) is True
    yield engine
    FilterEngine._instance = None


def _legacy_match_word(text):
    text_lower = text.lower()
    for word in LEGACY_WORDS:
        if word.lower() in text_lower:
            return word
    return ""


def test_every_input_gets_the_same_verdict(legacy_engine, unified_engine):
    # 參照組不能含被刻意改變的那一類，否則這條測試會悄悄變寬
    assert not any(r["type"] == "keyword" and r["action"] == "block" for r in UNCHANGED_RULES)
    assert {r["type"] for r in UNCHANGED_RULES} >= {
        "keyword",
        "regex",
        "replace",
        "rate_limit",
        "fingerprint",
    }
    for text, fp in INPUTS:
        before = _decide(legacy_engine.check, _legacy_match_word, text, fp)
        after = _decide(unified_engine.check, unified_engine.match_word, text, fp)
        assert after == before, (text, fp)


def test_upgrade_keeps_every_rule_and_backs_up_the_old_file(tmp_path):
    path = tmp_path / "filter_rules.json"
    original = json.dumps(LEGACY_RULES)
    path.write_text(original, encoding="utf-8")
    FilterEngine._instance = None
    engine = FilterEngine(path=str(path))
    try:
        backup = tmp_path / "filter_rules.json.pre-unified.bak"
        assert backup.read_text(encoding="utf-8") == original

        rules = {r["id"]: r for r in engine.list_rules()}
        assert set(rules) == {r["id"] for r in LEGACY_RULES}
        assert all(r["lifetime"] == "permanent" for r in rules.values())
        assert rules["badrx01"]["enabled"] is False

        # keyword＋block 轉成封鎖字：id、樣式、啟用狀態、priority、期限照舊
        assert rules["kwblk01"] == {
            "id": "kwblk01",
            "type": "word",
            "pattern": "Spam",
            "action": "block",
            "priority": 5,
            "enabled": True,
            "lifetime": "permanent",
        }
        assert rules["off0001"]["type"] == "word" and rules["off0001"]["enabled"] is False
        # keyword 搭配其他動作不受影響
        assert rules["allow01"]["type"] == "keyword" and rules["kwrev01"]["type"] == "keyword"
        # 轉換讀檔當下就寫回（備份已經先留好）
        on_disk = {r["id"]: r for r in json.loads(path.read_text(encoding="utf-8"))}
        assert on_disk["kwblk01"]["type"] == "word"
        assert all("lifetime" in r for r in on_disk.values())

        # 冪等：再讀一次不再轉、不覆寫備份
        backup.write_text("sentinel", encoding="utf-8")
        engine.reload()
        assert backup.read_text(encoding="utf-8") == "sentinel"
        assert {r["id"]: r for r in engine.list_rules()} == rules
    finally:
        FilterEngine._instance = None


def test_words_come_after_every_other_rule_in_the_list(unified_engine):
    types = [r["type"] for r in unified_engine.list_rules()]
    first_word = types.index("word")
    assert all(t == "word" for t in types[first_word:])
    assert [r["pattern"] for r in unified_engine.list_rules() if r["type"] == "word"] == (
        LEGACY_WORDS
    )


def test_a_converted_file_backs_up_before_converting_even_with_lifetimes(tmp_path):
    """有 lifetime 但仍有 keyword＋block 的檔案（例如這一批的開發版寫出來的）也要先備份再轉。"""
    path = tmp_path / "filter_rules.json"
    original = json.dumps(
        [{"id": "k1", "type": "keyword", "pattern": "x", "action": "block", "lifetime": "session"}]
    )
    path.write_text(original, encoding="utf-8")
    FilterEngine._instance = None
    try:
        engine = FilterEngine(path=str(path))
        assert (tmp_path / "filter_rules.json.pre-unified.bak").read_text(
            encoding="utf-8"
        ) == original
        rule = engine.get_rule("k1")
        assert (rule["type"], rule["lifetime"]) == ("word", "session")
    finally:
        FilterEngine._instance = None
