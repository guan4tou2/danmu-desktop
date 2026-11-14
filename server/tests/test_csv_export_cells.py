"""CSV exports show viewer text as text in spreadsheet apps.

Cells starting with = + - @, Tab, CR or LF get a leading apostrophe; every
other cell is written exactly as before.
"""

import csv
import io
import json
import shutil
import subprocess
from pathlib import Path

import pytest

from server.routes.admin import history as history_route

UTILS_JS = Path(__file__).resolve().parents[1] / "static" / "js" / "admin-utils.js"

FORMULA_LIKE = ["=1+1", "+1", "-1", "@x", "\tx", "\rx", "\nx"]
PLAIN = ["hello", "你好", "a=b", "1-2", "", "50"]


def _cells(text, column):
    return [row[column] for row in csv.DictReader(io.StringIO(text))]


def test_timeline_csv_neutralizes_formula_cells():
    records = [{"offset_ms": 0, "text": t, "color": "#FFFFFF"} for t in FORMULA_LIKE]
    out = history_route._timeline_to_csv({"records": records})
    assert _cells(out, "text") == ["'" + t for t in FORMULA_LIKE]


def test_rows_csv_neutralizes_formula_cells_in_every_column():
    rows = [{"text": "=1", "delivery_reason": "+n", "fingerprint": "@f", "clientIp": "-ip"}]
    out = history_route._rows_to_csv(rows, include_pii=True)
    row = next(csv.DictReader(io.StringIO(out)))
    assert row["text"] == "'=1"
    assert row["delivery_reason"] == "'+n"
    assert row["fingerprint"] == "'@f"
    assert row["clientIp"] == "'-ip"


def test_ordinary_csv_content_is_unchanged():
    records = [{"offset_ms": 5, "text": t, "color": "#FFFFFF", "size": 50} for t in PLAIN]
    out = history_route._timeline_to_csv({"records": records})
    assert _cells(out, "text") == PLAIN
    assert _cells(out, "offset_ms") == ["5"] * len(PLAIN)
    # Numbers are not strings, so even a negative one is left alone.
    neg = history_route._timeline_to_csv({"records": [{"offset_ms": -3, "text": "x"}]})
    assert _cells(neg, "offset_ms") == ["-3"]


@pytest.mark.skipif(shutil.which("node") is None, reason="needs node")
def test_admin_csv_helper_matches_server_rule():
    """The browser-side exports (history, search, poll results) share one helper."""
    script = f"""
      global.window = {{}};
      global.document = {{ querySelector: () => null, addEventListener: () => {{}} }};
      require({json.dumps(str(UTILS_JS))});
      const u = window.AdminUtils;
      const inputs = {json.dumps(FORMULA_LIKE + PLAIN)};
      console.log(JSON.stringify({{
        safe: inputs.map(u.csvSafeText),
        cell: ['=a,b', 'plain', 'say "hi"', 7, null].map(u.csvCell),
      }}));
    """
    proc = subprocess.run(["node", "-e", script], capture_output=True, text=True, check=True)
    got = json.loads(proc.stdout)
    assert got["safe"] == ["'" + t for t in FORMULA_LIKE] + PLAIN
    assert got["cell"] == ['"\'=a,b"', "plain", '"say ""hi"""', "7", ""]
