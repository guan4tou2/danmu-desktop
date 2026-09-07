from ..managers import blacklist_store


def add_keyword(keyword: str) -> bool:
    return blacklist_store.add(keyword)


def remove_keyword(keyword: str) -> bool:
    return blacklist_store.remove(keyword)


def list_keywords():
    return blacklist_store.list()


def matched_keyword(text: str) -> str:
    """Return the first blacklisted keyword found in *text*, or "".

    設計稿 10 · G2 的訊息表要在被擋的那一列標出「封鎖字「加line」」——所以
    要知道**是哪個字**擋的，不只是「有沒有被擋」。
    """
    text_lower = text.lower()
    for keyword in blacklist_store.snapshot():
        if keyword.lower() in text_lower:
            return keyword
    return ""


def contains_keyword(text: str) -> bool:
    return bool(matched_keyword(text))
