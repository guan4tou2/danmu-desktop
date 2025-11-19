from .. import state


def add_keyword(keyword: str) -> bool:
    if keyword and keyword not in state.blacklist:
        state.blacklist.add(keyword)
        return True
    return False


def remove_keyword(keyword: str) -> bool:
    if keyword in state.blacklist:
        state.blacklist.discard(keyword)
        return True
    return False


def list_keywords():
    return list(state.blacklist)


def contains_keyword(text: str) -> bool:
    text_lower = text.lower()
    for keyword in state.blacklist:
        if keyword.lower() in text_lower:
            return True
    return False


from .. import state


def add_keyword(keyword: str) -> bool:
    if keyword and keyword not in state.blacklist:
        state.blacklist.add(keyword)
        return True
    return False


def remove_keyword(keyword: str) -> bool:
    if keyword in state.blacklist:
        state.blacklist.discard(keyword)
        return True
    return False


def list_keywords():
    return list(state.blacklist)


def contains_keyword(text: str) -> bool:
    text_lower = text.lower()
    for keyword in state.blacklist:
        if keyword.lower() in text_lower:
            return True
    return False
