from ..managers import blacklist_store


def add_keyword(keyword: str) -> bool:
    return blacklist_store.add(keyword)


def remove_keyword(keyword: str) -> bool:
    return blacklist_store.remove(keyword)


def list_keywords():
    return blacklist_store.list()


def contains_keyword(text: str) -> bool:
    text_lower = text.lower()
    for keyword in blacklist_store.snapshot():
        if keyword.lower() in text_lower:
            return True
    return False
