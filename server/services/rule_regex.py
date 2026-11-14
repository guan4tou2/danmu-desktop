"""封鎖規則的正規式：所有編譯與比對都經過這兩個函式。

規則比對（filter_engine 的 regex／replace 規則）、規則測試、新增與更新時的試編譯
（validation._safe_compile_regex）都走這裡，不在別處直接呼叫 ``re``。集中在一處，
之後要加逾時保護或換引擎只需要改這個檔。旗標固定是 ``re.IGNORECASE``，與 5.8 相同。
"""

import re
from typing import Optional

FLAGS = re.IGNORECASE


def compile_pattern(pattern: str) -> "re.Pattern[str]":
    """編譯一條規則的正規式。不合法時丟 ``re.error``。"""
    return re.compile(pattern, FLAGS)


def run_pattern(
    compiled: "re.Pattern[str]",
    text: str,
    mode: str = "search",
    replacement: Optional[str] = None,
) -> tuple[int, str]:
    """執行一次比對，回傳 ``(命中次數, 結果文字)``。

    mode:
      search   找到任一處就算命中（次數 1），文字原樣回傳
      match    只從開頭比對（安全檢查用），文字原樣回傳
      replace  全部替換成 *replacement*，回傳替換次數與替換後的文字
    """
    if mode == "replace":
        new_text, count = compiled.subn(replacement or "", text)
        return count, new_text
    if mode == "match":
        return (1 if compiled.match(text) else 0), text
    return (1 if compiled.search(text) else 0), text
