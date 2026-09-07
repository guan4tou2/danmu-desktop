"""每個 JS 引用的 i18n key 都必須在四語檔裡存在。

2026-09-07 加。i18next 找不到 key 時會把 **key 名字本身**印出來，所以一個
漏掉的 key 不會報錯、不會變空白，而是讓畫面上出現 `firetokenChartKicker`
這種變數名——沒有任何測試會紅，除非有人剛好看到那一格。

這條測試就是為了擋那個。它的由來：2026-09-06 的「kicker 全域移除」清了
DOM 也清了 locales，但漏了七個呼叫端；`test_admin_kicker_keys_are_gone`
只驗「locales 裡沒有 Kicker 結尾的 key」，所以它一直是綠的。
"""

import json
import re
from pathlib import Path

import pytest

_STATIC_JS = Path(__file__).resolve().parent.parent / "static" / "js"
_LOCALES = Path(__file__).resolve().parent.parent / "static" / "locales"

# `ServerI18n.t("key")` / `t("key")` / `i18n("key")`——只認**完整的**字面量：
# 字串後面必須直接是 `)` 或 `,`（第二個參數是插值物件）。
#
# 少了這個尾巴條件，`t("theme_" + theme.name)` 會被當成一個叫 `theme_` 的
# key。動態組出來的 key 本來就驗不了，這裡不假裝驗得了——寧可漏，不要製造
# 一堆假警報讓人學會忽略這條測試。
_CALL_RE = re.compile(r'(?:ServerI18n\.t|\bt|\bi18n)\(\s*"([A-Za-z][A-Za-z0-9_]*)"\s*[,)]')

# i18n.js 是 build-i18n.js 產生的，裡面本來就內嵌所有語言的字典。
_SKIP_FILES = {"i18n.js"}


def _locale(lang: str) -> dict:
    return json.loads((_LOCALES / lang / "translation.json").read_text(encoding="utf-8"))


@pytest.fixture(scope="module")
def zh() -> dict:
    return _locale("zh")


def _strip_comments(src: str) -> str:
    """把 JS 註解剝掉再掃。

    註解裡引述 `t("someKey")` 是常見的——例如「原本是 t("xxx")，已退場」這種
    說明。不剝的話這條測試會咬自己的解釋文字。

    **順序有意義：行註解要先剝。** 反過來的話，一行 `// … Viewer/* …` 裡的
    `/*` 會被當成區塊註解的起點，一路吃到很後面的 `*/`
    （test_design_contract.py 踩過同一個坑）。
    """
    src = re.sub(r"^\s*//.*$", "", src, flags=re.M)
    src = re.sub(r"/\*[\s\S]*?\*/", "", src)
    return src


def _referenced_keys() -> dict:
    """{key: [檔名, ...]} —— 所有被字面量引用的 key。"""
    found: dict = {}
    for path in sorted(_STATIC_JS.glob("*.js")):
        if path.name in _SKIP_FILES:
            continue
        src = _strip_comments(path.read_text(encoding="utf-8"))
        for key in _CALL_RE.findall(src):
            found.setdefault(key, []).append(path.name)
    return found


def test_every_referenced_key_exists(zh):
    """漏一個 key，畫面就會印出那個 key 的名字給使用者看。"""
    missing = {
        key: sorted(set(files)) for key, files in _referenced_keys().items() if key not in zh
    }
    assert (
        not missing
    ), "這些 key 在 JS 裡被引用，但 locales 沒有——畫面會直接印出 key 名：\n" + "\n".join(
        f"  {k} ← {', '.join(v)}" for k, v in sorted(missing.items())
    )


@pytest.mark.parametrize("lang", ["en", "ja", "ko"])
def test_locales_share_the_same_keys(zh, lang):
    """四語的 key 集合要一致。少一個就是那個語言的使用者看到 key 名。

    build-i18n.js 只是把四份檔案打包起來，不會補洞；`fallbackLng: "en"`
    也只在 en 有的時候救得了。
    """
    other = _locale(lang)
    only_zh = sorted(set(zh) - set(other))
    only_other = sorted(set(other) - set(zh))
    assert not only_zh and not only_other, (
        f"zh 與 {lang} 的 key 不一致\n"
        f"  只有 zh 有（{len(only_zh)}）：{only_zh[:15]}\n"
        f"  只有 {lang} 有（{len(only_other)}）：{only_other[:15]}"
    )
