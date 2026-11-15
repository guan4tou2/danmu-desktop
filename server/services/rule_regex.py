"""封鎖規則的正規式：所有編譯與執行都經過這個檔。

兩條路：

* ``compile_pattern`` ＋ ``run_pattern``：在本行程裡編譯、比對。給 /fire 的即時比對
  用（filter_engine 的 regex／replace 規則）。``run_pattern`` 可以帶時間上限：超過就
  中斷並丟 MatchTimeout（見下面「比對的時間上限」）。
* ``vet_pattern``：在**獨立的子行程**裡編譯並實際執行，有硬性逾時。新增規則、修改
  pattern、規則測試都走這裡——這幾個動作要拿使用者寫的正規式去跑，而一條會指數回溯的
  正規式在本行程裡跑，會把整個伺服器停住：伺服器是單一 gevent 行程，C 層的正規式
  比對不會讓出。子行程逾時就被殺掉，主行程只是等它（gevent 下這段等待會讓出給其他
  連線）。

旗標固定是 ``re.IGNORECASE``，與 5.8 相同。
"""

import json
import re
import signal
import subprocess
import sys
import threading
import time
from typing import Any, Callable, Optional

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

# ── 比對的時間上限 ──────────────────────────────────────────────────────────
#
# 通過新增檢查的正規式，仍可能在某一則特定的訊息上跑很久；5.8 存下來的規則更是從來沒
# 被檢查過。伺服器是單一行程，比對期間誰都不能動，所以要有上限。
#
# 做法是計時訊號：比對前設一個 ITIMER_REAL，時間到了核心送 SIGALRM，CPython 的正規式
# 迴圈每跑幾千步會檢查一次訊號，這時處理函式丟出例外，比對就從中間停下來。引擎仍是
# 標準函式庫的 re——換成別的正規式引擎會改變 \w、\d、\s 這些類別涵蓋的字元，等於
# 悄悄改掉既有規則的意思。
#
# 訊號只能在主執行緒收；伺服器的請求都跑在主執行緒的 greenlet 上，所以正式環境有效。
# 不在主執行緒、或平台沒有 SIGALRM（Windows）時，這次比對就沒有上限，與以前相同。

# 一則訊息的所有 regex／replace 規則合計能用多久（秒）。正常的比對是微秒級；這個數字
# 是「卡住時整個伺服器最多停多久」。
MATCH_BUDGET_SEC = 0.25

# 預算用完之後，剩下的規則每條還是給這麼一點時間，不直接當成逾時。
MATCH_MIN_SLICE_SEC = 0.01

# 同時存在的子行程上限。正式站的容器記憶體上限 512 MB、行程數上限 200；不設上限的話，
# 一個已登入的 session 用腳本同時送幾十個新增請求，就會同時起幾十個 Python。主持人
# 正常操作一次只會有一個，2 個足夠。
MAX_CONCURRENT_CHECKS = 2

# 排隊等空位最多等多久（秒）。前面每個檢查最多跑 PROBE_TIMEOUT_SEC；等這麼久還輪不到，
# 代表有人在大量送請求，回一個明確的錯誤（PatternCheckBusy），不無限等下去。
QUEUE_TIMEOUT_SEC = 5.0

# 子行程自己的位址空間上限（位元組）。一條 pattern 不該需要幾百 MB；超過就讓它在子行程
# 裡 MemoryError，不會去搶伺服器的記憶體。平台不支援（例如 macOS 不允許調低
# RLIMIT_AS、或沒有 resource 模組）時略過，只靠逾時。
CHILD_ADDRESS_SPACE_BYTES = 256 * 1024 * 1024

# 子行程執行的程式。用 -I -S 啟動：不讀環境變數、不載入 site-packages、目前目錄不在
# sys.path 上——它只需要標準函式庫的 re 與 json，也不會載到 server 套件或 gevent。
_CHILD = r"""
import json, re, sys
job = json.loads(sys.stdin.read())
try:
    import resource
    limit = job["address_space"]
    resource.setrlimit(resource.RLIMIT_AS, (limit, limit))
except (ImportError, AttributeError, ValueError, OSError):
    pass  # 不支援的平台：只靠逾時
try:
    try:
        rx = re.compile(job["pattern"], job["flags"])
    except (re.error, OverflowError, RecursionError) as exc:
        print(json.dumps({"ok": False, "message": str(exc) or type(exc).__name__}))
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
except MemoryError:
    out = {"ok": False, "memory": True}
print(json.dumps(out))
"""

_slots_guard = threading.Lock()
_slots: Optional[threading.BoundedSemaphore] = None


def _check_slots() -> threading.BoundedSemaphore:
    """第一次用到時才建立：伺服器在 app.py 先做 gevent monkey-patch，這時拿到的是
    gevent 的號誌（等待會讓出給其他連線）；在 import 時建立的話，可能早於 patch。"""
    global _slots
    with _slots_guard:
        if _slots is None:
            _slots = threading.BoundedSemaphore(MAX_CONCURRENT_CHECKS)
        return _slots


class PatternError(ValueError):
    """正規式寫法不合法（編譯失敗）。"""


class PatternTimeout(Exception):
    """在逾時內跑不完——當成危險的正規式。"""


class PatternCheckUnavailable(Exception):
    """子行程起不來、超過記憶體上限、或回了看不懂的結果。寧可拒絕，也不在主行程裡冒險執行。"""


class PatternCheckBusy(Exception):
    """同時進行的檢查已達上限，排隊 QUEUE_TIMEOUT_SEC 還輪不到。"""


class MatchTimeout(Exception):
    """run_pattern 在給定的時間內跑不完，比對已被中斷。"""


class _Expired(Exception):
    """計時訊號的處理函式丟的；只在這個模組裡用，對外一律轉成 MatchTimeout。"""


# 計時器是不是我們設的、還在等。處理函式只在這段期間丟例外：比對剛好跑完、訊號才到
# 的時候，不能把例外丟進不相干的程式裡。
_armed = False
# 設定計時器時存下的原狀：(原本的處理函式, 原本計時器剩餘秒數, 間隔, 設定的時刻)。
_saved: Optional[tuple] = None


def _on_alarm(signum: int, frame: Any) -> None:
    if _armed:
        raise _Expired()


def _disarm() -> None:
    """取消計時器並把訊號的處理函式還回去。可以重複呼叫。"""
    global _armed, _saved
    _armed = False
    saved, _saved = _saved, None
    if saved is None:
        return
    previous_handler, previous_delay, previous_interval, started = saved
    signal.setitimer(signal.ITIMER_REAL, 0)
    signal.signal(signal.SIGALRM, previous_handler)
    if previous_delay:
        # 原本就有人設了計時器（測試的保險絲）：把它剩下的時間還回去。
        remaining = previous_delay - (time.monotonic() - started)
        signal.setitimer(signal.ITIMER_REAL, max(remaining, 0.001), previous_interval)


def _run_limited(call: Callable[[], Any], seconds: float) -> Any:
    """執行 *call*，超過 *seconds* 就中斷並丟 MatchTimeout。

    不在主執行緒、或平台沒有計時訊號時，直接執行、沒有上限。
    """
    global _armed, _saved
    try:
        previous_handler = signal.signal(signal.SIGALRM, _on_alarm)
    except (ValueError, AttributeError, OSError):
        return call()
    try:
        try:
            _saved = (previous_handler, 0.0, 0.0, time.monotonic())
            _armed = True
            previous_delay, previous_interval = signal.setitimer(signal.ITIMER_REAL, seconds)
            _saved = (previous_handler, previous_delay, previous_interval, _saved[3])
            return call()
        finally:
            _disarm()
    except _Expired:
        # 也接住「訊號剛好在收尾時才到」的情況：再收一次尾（_disarm 可重複呼叫）。
        _disarm()
        raise MatchTimeout(f"did not finish within {seconds:.3f}s") from None


def compile_pattern(pattern: str) -> "re.Pattern[str]":
    """在本行程編譯一條規則的正規式。編譯不了時丟 ``re.error``。

    ``re.compile`` 對某些寫法丟的不是 re.error：重複次數超過上限是 OverflowError，
    括號巢狀太深是 RecursionError。對呼叫端來說都是「這條 pattern 不能用」，這裡統一
    轉成 re.error——漏接的話，規則檔裡有一條這樣的 pattern 就會讓引擎建不起來。
    """
    try:
        return re.compile(pattern, FLAGS)
    except (OverflowError, RecursionError) as exc:
        raise re.error(str(exc) or type(exc).__name__) from exc


def run_pattern(
    compiled: "re.Pattern[str]",
    text: str,
    mode: str = "search",
    replacement: Optional[str] = None,
    timeout: Optional[float] = None,
) -> tuple[int, str]:
    """在本行程執行一次比對，回傳 ``(命中次數, 結果文字)``。

    mode:
      search   找到任一處就算命中（次數 1），文字原樣回傳
      match    只從開頭比對，文字原樣回傳
      replace  全部替換成 *replacement*，回傳替換次數與替換後的文字

    *timeout*（秒）：給了就有時間上限，超過丟 MatchTimeout（見檔頭「比對的時間
    上限」）；不給就一路跑完。
    """

    def call() -> tuple[int, str]:
        if mode == "replace":
            new_text, count = compiled.subn(replacement or "", text)
            return count, new_text
        if mode == "match":
            return (1 if compiled.match(text) else 0), text
        return (1 if compiled.search(text) else 0), text

    if timeout is None:
        return call()
    return _run_limited(call, timeout)


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
    丟 PatternError（寫法錯）、PatternTimeout（逾時）、PatternCheckUnavailable、
    PatternCheckBusy（同時進行的檢查已滿，排隊等不到）。

    同一時間最多 MAX_CONCURRENT_CHECKS 個子行程；子行程的位址空間上限是
    CHILD_ADDRESS_SPACE_BYTES（平台不支援就略過）。

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
        "address_space": CHILD_ADDRESS_SPACE_BYTES,
    }
    slots = _check_slots()
    if not slots.acquire(timeout=QUEUE_TIMEOUT_SEC):
        raise PatternCheckBusy(f"more than {MAX_CONCURRENT_CHECKS} checks are already running")
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
    finally:
        slots.release()
    try:
        out = json.loads(proc.stdout.strip().splitlines()[-1])
    except (ValueError, IndexError) as exc:
        raise PatternCheckUnavailable(proc.stderr.strip()[-200:] or "no output") from exc
    if out.get("memory"):
        raise PatternCheckUnavailable("the check ran out of memory")
    if not out.get("ok"):
        raise PatternError(out.get("message") or "invalid pattern")
    if sample is None:
        return None
    return int(out["count"]), out["text"]
