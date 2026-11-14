"""封鎖規則的正規式：所有編譯與執行都經過這個檔。

兩條路：

* ``compile_pattern`` ＋ ``run_pattern``：在本行程裡編譯、比對。給 /fire 的即時比對
  用（filter_engine 的 regex／replace 規則）。之後要加執行逾時就改這兩個函式。
* ``vet_pattern``：在**獨立的子行程**裡編譯並實際執行，有硬性逾時。新增規則、修改
  pattern、規則測試都走這裡——這幾個動作要拿使用者寫的正規式去跑，而一條會指數回溯的
  正規式在本行程裡跑，會把整個伺服器停住：伺服器是單一 gevent 行程，C 層的正規式
  比對不會讓出。子行程逾時就被殺掉，主行程只是等它（gevent 下這段等待會讓出給其他
  連線）。

旗標固定是 ``re.IGNORECASE``，與 5.8 相同。
"""

import json
import re
import subprocess
import sys
from typing import Optional

FLAGS = re.IGNORECASE

# 子行程的硬性逾時（秒）。一般的正規式在子行程裡跑完這幾段探測輸入只要微秒；時間幾乎
# 都花在啟動一個新的 Python（本機約 20–50 ms，慢的 ARM 主機上幾百 ms）。給 2 秒是
# 「啟動慢的機器也不會誤判」與「管理員按下新增後最多多等 2 秒」之間的取捨。會指數
# 回溯的寫法在下面那些長度 40–50 的輸入上要跑到 2^40 步以上，遠超過這個時間。
PROBE_TIMEOUT_SEC = 2.0

# 探測輸入：(比對方式, 文字)。都是典型會觸發回溯的形狀——一長串可以被重複匹配的字元，
# 結尾再接一個讓整體匹配失敗的字元，逼引擎回頭試遍所有切法。
PROBE_INPUTS = (
    ("match", "a" * 50),  # 5.8 就有的那一段
    ("search", "a" * 40 + "!"),  # 重複字元後接一個不匹配的字元
    ("search", "ab" * 20 + "!"),  # 兩種字元交替
    ("search", "a a " * 10 + "!"),  # 空白與文字混合
    ("search", "1" * 40 + "x"),  # 數字
)

# 子行程執行的程式。用 -I -S 啟動：不讀環境變數、不載入 site-packages、目前目錄不在
# sys.path 上——它只需要標準函式庫的 re 與 json，也不會載到 server 套件或 gevent。
_CHILD = r"""
import json, re, sys
job = json.loads(sys.stdin.read())
try:
    rx = re.compile(job["pattern"], job["flags"])
except re.error as exc:
    print(json.dumps({"ok": False, "message": str(exc)}))
    sys.exit(0)
for mode, text in job["probes"]:
    (rx.match if mode == "match" else rx.search)(text)
out = {"ok": True, "count": 0, "text": None}
sample = job.get("sample")
if sample is not None:
    if job["mode"] == "replace":
        new_text, count = rx.subn(job.get("replacement") or "", sample)
        out.update(count=count, text=new_text)
    else:
        found = (rx.match if job["mode"] == "match" else rx.search)(sample)
        out.update(count=1 if found else 0, text=sample)
print(json.dumps(out))
"""


class PatternError(ValueError):
    """正規式寫法不合法（編譯失敗）。"""


class PatternTimeout(Exception):
    """在逾時內跑不完——當成危險的正規式。"""


class PatternCheckUnavailable(Exception):
    """子行程起不來或回了看不懂的結果。寧可拒絕，也不在主行程裡冒險執行。"""


def compile_pattern(pattern: str) -> "re.Pattern[str]":
    """在本行程編譯一條規則的正規式。不合法時丟 ``re.error``。"""
    return re.compile(pattern, FLAGS)


def run_pattern(
    compiled: "re.Pattern[str]",
    text: str,
    mode: str = "search",
    replacement: Optional[str] = None,
) -> tuple[int, str]:
    """在本行程執行一次比對，回傳 ``(命中次數, 結果文字)``。

    mode:
      search   找到任一處就算命中（次數 1），文字原樣回傳
      match    只從開頭比對，文字原樣回傳
      replace  全部替換成 *replacement*，回傳替換次數與替換後的文字
    """
    if mode == "replace":
        new_text, count = compiled.subn(replacement or "", text)
        return count, new_text
    if mode == "match":
        return (1 if compiled.match(text) else 0), text
    return (1 if compiled.search(text) else 0), text


def vet_pattern(
    pattern: str,
    sample: Optional[str] = None,
    mode: str = "search",
    replacement: Optional[str] = None,
    probes: bool = True,
    timeout: Optional[float] = None,
) -> Optional[tuple[int, str]]:
    """在有硬性逾時的子行程裡編譯 *pattern*，跑探測輸入，必要時再跑 *sample*。

    回傳 sample 的 ``(命中次數, 結果文字)``；沒給 sample 時回 None。
    丟 PatternError（寫法錯）、PatternTimeout（逾時）、PatternCheckUnavailable。

    子行程用 ``subprocess.run`` 啟動。伺服器在 app.py 做了 gevent monkey-patch，這時
    它是 gevent 的版本：等待是合作式的，逾時一樣會殺掉子行程；沒有 patch 時（測試、
    命令列工具）就是標準函式庫的版本。兩種情況下都是「另一個作業系統行程」，卡住的
    只會是它。
    """
    if timeout is None:
        timeout = PROBE_TIMEOUT_SEC
    job = {
        "pattern": pattern,
        "flags": int(FLAGS),
        "probes": list(PROBE_INPUTS) if probes else [],
        "sample": sample,
        "mode": mode,
        "replacement": replacement,
    }
    try:
        proc = subprocess.run(
            [sys.executable, "-I", "-S", "-c", _CHILD],
            input=json.dumps(job),
            capture_output=True,
            text=True,
            timeout=timeout,
        )
    except subprocess.TimeoutExpired as exc:
        raise PatternTimeout(f"pattern ran longer than {timeout}s") from exc
    except OSError as exc:
        raise PatternCheckUnavailable(str(exc)) from exc
    try:
        out = json.loads(proc.stdout.strip().splitlines()[-1])
    except (ValueError, IndexError) as exc:
        raise PatternCheckUnavailable(proc.stderr.strip()[-200:] or "no output") from exc
    if not out.get("ok"):
        raise PatternError(out.get("message") or "invalid pattern")
    if sample is None:
        return None
    return int(out["count"]), out["text"]
