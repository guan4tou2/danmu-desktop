from ..managers import settings_store


def get_options():
    return settings_store.get_options()


def get_setting_ranges():
    return settings_store.get_ranges()


def update_setting(key, index, value):
    return settings_store.update_value(key, index, value)


def set_toggle(key, enabled):
    settings_store.set_toggle(key, enabled)