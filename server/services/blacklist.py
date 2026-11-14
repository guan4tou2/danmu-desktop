"""封鎖字的薄轉接層。

封鎖字現在是封鎖規則清單裡 ``type == "word"`` 的那些規則（services/filter_engine.py），
這裡只把舊的呼叫方式（/admin/blacklist/*、/admin/live/block、/check_blacklist、/fire
的第 2 段比對）轉過去。引擎每次都從模組屬性取，測試替換單例時才跟得上。
"""

from . import filter_engine as _engine_module


def _engine():
    return _engine_module.filter_engine


def add_keyword(keyword: str) -> bool:
    if not keyword:
        return False
    return _engine().add_word(keyword)


def remove_keyword(keyword: str) -> bool:
    return _engine().remove_word(keyword)


def list_keywords():
    return _engine().list_words()


def matched_keyword(text: str) -> str:
    """Return the first blocked word found in *text*, or ""."""
    return _engine().match_word(text)


def contains_keyword(text: str) -> bool:
    return bool(matched_keyword(text))
