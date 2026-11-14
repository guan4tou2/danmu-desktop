#!/usr/bin/env python3
"""規則層級的 cascade 檢查：在指定視窗寬度下，哪一條 CSS 規則最後決定某個屬性。

jsdom 沒有版面、沙箱又開不了瀏覽器時，用這支在「規則層級」自我檢查：
把 admin 頁實際載入的樣式表（tailwind.css → style.css，順序同 admin.html）
解析成規則，對一個描述好的元素（標籤、class、屬性、祖先）找出所有命中的
宣告，依 cascade 排序（!important → 非 @layer 勝過 @layer → 特異度 → 出現
順序），列出勝出者與所有競爭者。

限制（刻意簡化，結果欄會標 ?）：
  · 祖先只看「選擇器裡每個祖先 compound 都能在元素的祖先清單找到」，不驗
    組合子的精確結構；+ / ~ 兄弟組合子一律標成不確定。
  · :hover / :focus 等狀態偽類視為不命中（量的是靜止狀態）；:nth-child
    之類結構偽類視為命中但標 ?。
  · 媒體查詢：寬高照參數；hover:none、pointer:coarse（手機）；
    prefers-* 與 forced-colors 一律當成預設值（不命中 reduce / active）；
    認不得的條件視為命中並標 ?。

用法：python3 scripts/css-cascade-check.py [--width 375]
"""

import argparse
import re
import sys
from pathlib import Path

# 放在 repo 根目錄的 scripts/（跟 check-css-tokens.mjs 一起），不放 server/ 底下：
# tailwind v4 會自動掃 server/ 裡的所有檔案，這支的字串會被當成工具類別，
# 讓 tailwind.css 多出規則、新鮮度檢查變紅。
ROOT = Path(__file__).resolve().parents[1] / "server"
SHEETS = [ROOT / "static/css/tailwind.css", ROOT / "static/css/style.css"]


# ─── 解析 ────────────────────────────────────────────────────────────────


def strip_comments(text):
    # 換成同樣多的換行，回報的行號才對得上原檔
    return re.sub(r"/\*.*?\*/", lambda m: "\n" * m.group(0).count("\n"), text, flags=re.S)


def parse_blocks(text, pos, media, layered, out, sheet):
    """遞迴解析：回傳結束位置。out 收 (selector, decls, media, layered, line, sheet)。"""
    n = len(text)
    while pos < n:
        # 找下一個 { 、} 或 ;
        m = re.compile(r"[{};]").search(text, pos)
        if not m:
            return n
        ch = m.group(0)
        head = text[pos : m.start()].strip()
        if ch == "}":
            return m.end()
        if ch == ";":
            pos = m.end()  # @import / @layer a, b; 之類的陳述
            continue
        line = text.count("\n", 0, m.start()) + 1
        body_start = m.end()
        if head.startswith("@"):
            name = head.split()[0].lower()
            if name == "@media":
                cond = head[len("@media") :].strip()
                pos = parse_blocks(text, body_start, media + [cond], layered, out, sheet)
            elif name in ("@supports", "@container"):
                pos = parse_blocks(text, body_start, media, layered, out, sheet)
            elif name == "@layer":
                pos = parse_blocks(text, body_start, media, True, out, sheet)
            else:  # @keyframes / @font-face / @property … 不是元素規則，略過整塊
                pos = skip_block(text, body_start)
            continue
        # 一般規則：宣告區不會有巢狀（tailwind v4 輸出已經攤平）
        end = text.index("}", body_start)
        decls = parse_decls(text[body_start:end])
        out.append((head, decls, media, layered, line, sheet))
        pos = end + 1
    return pos


def skip_block(text, pos):
    depth = 1
    while depth:
        m = re.compile(r"[{}]").search(text, pos)
        if not m:
            return len(text)
        depth += 1 if m.group(0) == "{" else -1
        pos = m.end()
    return pos


def parse_decls(body):
    out = []
    for part in body.split(";"):
        if ":" not in part:
            continue
        prop, val = part.split(":", 1)
        prop = prop.strip().lower()
        val = val.strip()
        important = val.endswith("!important")
        if important:
            val = val[: -len("!important")].strip()
        out.append((prop, val, important))
    return out


# ─── 媒體查詢 ────────────────────────────────────────────────────────────


def eval_media(cond, width, height):
    """回傳 True / False / None(不確定)。"""
    results = []
    for alt in cond.split(","):
        alt = alt.strip().lower()
        neg = alt.startswith("not ")
        if neg:
            alt = alt[4:]
        val = True
        unsure = False
        for feat in re.findall(r"\(([^)]*)\)", alt):
            feat = feat.strip()
            mm = re.match(r"(min|max)-(width|height)\s*:\s*([\d.]+)(px|rem|em)", feat)
            if mm:
                num = float(mm.group(3)) * (16 if mm.group(4) in ("rem", "em") else 1)
                dim = width if mm.group(2) == "width" else height
                ok = dim >= num if mm.group(1) == "min" else dim <= num
                val = val and ok
                continue
            rng = re.match(r"width\s*(<=|>=|<|>)\s*([\d.]+)(px|rem)", feat)
            if rng:
                num = float(rng.group(2)) * (16 if rng.group(3) == "rem" else 1)
                op = rng.group(1)
                ok = {"<=": width <= num, ">=": width >= num, "<": width < num, ">": width > num}[
                    op
                ]
                val = val and ok
                continue
            if feat.startswith("hover"):
                val = val and feat.endswith("none")
            elif feat.startswith("pointer"):
                val = val and "coarse" in feat
            elif feat.startswith(("prefers-reduced-motion", "prefers-contrast", "forced-colors")):
                val = val and feat.endswith(("no-preference", "none"))
            elif feat.startswith("prefers-color-scheme"):
                unsure = True
            else:
                unsure = True
        if "print" in alt and "screen" not in alt:
            val = False
        r = (not val) if neg else val
        results.append(None if (unsure and r) else r)
    if any(r is True for r in results):
        return True
    if any(r is None for r in results):
        return None
    return False


# ─── 選擇器 ──────────────────────────────────────────────────────────────

# 單冒號寫法的偽元素（tailwind 的 *,:after,:before）
LEGACY_PSEUDO_ELEMENTS = {"after", "before", "first-line", "first-letter", "backdrop", "marker"}
STATE_PSEUDO = {
    "hover",
    "focus",
    "focus-visible",
    "focus-within",
    "active",
    "checked",
    "visited",
    "target",
    "placeholder-shown",
    "invalid",
    "indeterminate",
}


def split_list(sel):
    parts, depth, cur = [], 0, ""
    for ch in sel:
        if ch in "([":
            depth += 1
        elif ch in ")]":
            depth -= 1
        if ch == "," and depth == 0:
            parts.append(cur.strip())
            cur = ""
        else:
            cur += ch
    parts.append(cur.strip())
    return [p for p in parts if p]


def split_compounds(sel):
    """→ [(combinator, compound)]，第一個的組合子是 None。"""
    out, depth, cur, comb = [], 0, "", None
    i = 0
    while i < len(sel):
        ch = sel[i]
        if ch in "([":
            depth += 1
        elif ch in ")]":
            depth -= 1
        if depth == 0 and ch in " >+~":
            if cur.strip():
                out.append((comb, cur.strip()))
                cur = ""
                comb = " "
            if ch in ">+~":
                comb = ch
            i += 1
            continue
        cur += ch
        i += 1
    if cur.strip():
        out.append((comb, cur.strip()))
    return out


TOKEN = re.compile(
    r"(?P<tag>^[a-zA-Z][\w-]*|^\*)|#(?P<id>[\w-]+)|\.(?P<cls>(?:\\.|[\w-])+)"
    r"|\[(?P<attr>[^\]]+)\]|::(?P<pe>[\w-]+)(?:\([^)]*\))?"
    r"|:(?P<pc>[\w-]+)(?P<args>\((?:[^()]|\([^()]*\))*\))?"
)


def compound_match(comp, el):
    """回傳 (matched: True/False/None, specificity tuple)。"""
    a = b = c = 0
    unsure = False
    pos = 0
    for m in TOKEN.finditer(comp):
        if m.start() != pos:
            return None, (0, 0, 0)
        pos = m.end()
        if m.group("tag"):
            t = m.group("tag")
            if t != "*":
                c += 1
                if t.lower() != el["tag"]:
                    return False, (a, b, c)
        elif m.group("id"):
            a += 1
            if el.get("id") != m.group("id"):
                return False, (a, b, c)
        elif m.group("cls"):
            b += 1
            if m.group("cls").replace("\\", "") not in el["classes"]:
                return False, (a, b, c)
        elif m.group("attr"):
            b += 1
            am = re.match(
                r'\s*([\w-]+)\s*(?:([~|^$*]?=)\s*"?([^"\]]*?)"?\s*(?:\s[is])?)?\s*$',
                m.group("attr"),
            )
            if not am:
                unsure = True
                continue
            name, op, val = am.groups()
            have = el["attrs"].get(name)
            if have is None:
                return False, (a, b, c)
            if op == "=" and have != val:
                return False, (a, b, c)
            if op and op != "=":
                unsure = True
        elif m.group("pe"):
            return False, (a, b, c + 1)  # 偽元素不是元素本身
        elif m.group("pc"):
            name = m.group("pc")
            args = (m.group("args") or "")[1:-1]
            if name == "where":
                r = any(sel_match(s, el)[0] for s in split_list(args))
                if not r:
                    return False, (a, b, c)
            elif name in ("is", "not", "has"):
                subs = [sel_match(s, el) for s in split_list(args)]
                spec = max((s[1] for s in subs), default=(0, 0, 0))
                a, b, c = a + spec[0], b + spec[1], c + spec[2]
                hit = any(s[0] for s in subs)
                if name == "has":
                    unsure = True
                elif name == "is" and not hit:
                    return False, (a, b, c)
                elif name == "not" and hit:
                    return False, (a, b, c)
            elif name in LEGACY_PSEUDO_ELEMENTS:
                return False, (a, b, c + 1)
            elif name == "host":
                return False, (a, b + 1, c)
            else:
                b += 1
                if name in STATE_PSEUDO:
                    return False, (a, b, c)
                if name == "disabled":
                    if "disabled" not in el["attrs"]:
                        return False, (a, b, c)
                elif name == "root":
                    if el["tag"] != "html":
                        return False, (a, b, c)
                else:
                    unsure = True
    if pos != len(comp):
        return None, (a, b, c)
    return (None if unsure else True), (a, b, c)


def sel_match(sel, el):
    comps = split_compounds(sel)
    if not comps:
        return False, (0, 0, 0)
    spec = [0, 0, 0]
    unsure = False
    last_ok, s = compound_match(comps[-1][1], el)
    spec = [x + y for x, y in zip(spec, s)]
    if last_ok is False:
        return False, tuple(spec)
    unsure = last_ok is None
    for comb, comp in comps[:-1]:
        hits = [compound_match(comp, anc) for anc in el["ancestors"]]
        s = compound_match(comp, {"tag": "", "classes": set(), "attrs": {}})[1]
        spec = [x + y for x, y in zip(spec, s)]
        if not any(h[0] for h in hits):
            if any(h[0] is None for h in hits):
                unsure = True
            else:
                return False, tuple(spec)
    if any(c in ("+", "~") for c, _ in comps[1:]):
        unsure = True
    return (None if unsure else True), tuple(spec)


# ─── 要檢查的元素 ────────────────────────────────────────────────────────


def el(tag, classes="", attrs=None, ancestors=(), id=None):
    return {
        "tag": tag,
        "classes": set(classes.split()),
        "attrs": attrs or {},
        "id": id,
        "ancestors": list(ancestors),
    }


SHELL = [
    el("html"),
    el("body", "admin-body"),
    el("div", "admin-dash-grid"),
    el("div", "admin-dash-main"),
    el("div", "grid admin-route-sections", id="settings-grid"),
]
PAGE = SHELL + [
    el("div", "admin-dsp2-page hud-page-stack lg:col-span-2", id="sec-viewer-config-defaults"),
    el("div", "admin-dsp2-grid"),
]
LIST = PAGE + [
    el("div", "admin-dsp2-list", id="dsp2-list"),
    el("div", "", id="dsp2-rows"),
    el("div", "admin-dsp2-row is-on", {"data-row-key": "Opacity"}),
    el("div", "admin-dsp2-cell-center"),
]
BAND = LIST + [
    el("div", "admin-dsp2-band-host", {"data-band-host": ""}),
    el("div", "admin-dsp2-band"),
    el("label", "admin-dsp2-band-cell"),
    el("span", "admin-dsp2-band-input"),
]
PICK = LIST + [el("div", "admin-dsp2-picker", {"data-picker-host": ""})]
STAGE = PAGE + [
    el("div", "admin-dsp2-rail"),
    el("div", "admin-dsp2-card admin-dsp2-preview", id="dsp2-preview"),
    el("div", "admin-dsp2-preview-stage", {"data-preview-stage": "", "data-layout": "scroll"}),
]

TARGETS = [
    (
        "範圍／步進數字框",
        el("input", "", {"type": "number", "data-num-key": "Opacity", "data-num-index": "1"}, BAND),
        ["height", "min-height", "padding", "padding-top", "line-height", "box-sizing"],
    ),
    (
        "預設值數字框 .admin-dsp2-num",
        el(
            "input",
            "admin-dsp2-num",
            {"type": "number", "data-num-key": "Opacity", "data-num-index": "3"},
            PICK + [el("div", "admin-dsp2-track")],
        ),
        ["height", "min-height"],
    ),
    (
        "預設值滑桿 .admin-dsp2-range",
        el(
            "input",
            "admin-dsp2-range",
            {"type": "range", "data-range-key": "Opacity"},
            PICK + [el("div", "admin-dsp2-track"), el("div", "admin-dsp2-slider")],
        ),
        ["height", "min-height"],
    ),
    (
        "範圍外框 span",
        el("span", "admin-dsp2-band-input", {}, BAND[:-1]),
        ["padding", "padding-top", "min-height"],
    ),
    (
        "色票 swatch",
        el(
            "button",
            "admin-dsp2-swatch",
            {"type": "button", "data-chip-key": "Color", "data-chip-value": "FFFFFF"},
            PICK + [el("div", "admin-dsp2-swatches")],
        ),
        ["width", "height", "min-height"],
    ),
    (
        "自訂色 swatch",
        el("label", "admin-dsp2-swatch-custom", {}, PICK + [el("div", "admin-dsp2-swatches")]),
        ["width", "height"],
    ),
    (
        "字級 chip",
        el(
            "button",
            "admin-dsp2-fchip",
            {"type": "button", "data-chip-key": "FontSize"},
            PICK + [el("div", "admin-dsp2-chiprow")],
        ),
        ["min-height", "height"],
    ),
    (
        "字型 chip",
        el(
            "button",
            "admin-dsp2-tchip",
            {"type": "button"},
            PICK + [el("div", "admin-dsp2-chiprow")],
        ),
        ["min-height", "height"],
    ),
    (
        "版面磚",
        el("button", "admin-dsp2-tile", {"type": "button"}, PICK + [el("div", "admin-dsp2-tiles")]),
        ["min-height", "height"],
    ),
    (
        "觀眾可改開關",
        el(
            "button",
            "admin-dsp2-pill is-on",
            {"type": "button", "data-toggle-key": "Opacity"},
            LIST[:-1] + [el("div", "admin-dsp2-cell-toggle")],
        ),
        ["min-height", "height"],
    ),
    (
        "清單按鈕",
        el(
            "button",
            "admin-dsp2-allow-btn",
            {"type": "button"},
            PICK + [el("div", "admin-dsp2-allow-controls")],
        ),
        ["min-height", "height"],
    ),
    (
        "描邊分段鈕",
        el(
            "button",
            "",
            {"type": "button", "data-theme-opt": "thin"},
            PICK + [el("span", "admin-ui-seg admin-dsp2-seg", {"data-theme-seg": "stroke"})],
        ),
        ["min-height", "height"],
    ),
    (
        "預覽 stage",
        el(
            "div",
            "admin-dsp2-preview-stage",
            {"data-preview-stage": "", "data-layout": "scroll"},
            STAGE[:-1],
        ),
        ["height", "min-height", "display", "overflow"],
    ),
    (
        "預覽 pill 1",
        el(
            "div",
            "admin-dsp2-preview-pill admin-dsp2-preview-pill-1",
            {"data-preview-pill": "1"},
            STAGE,
        ),
        ["position", "left", "white-space", "max-width", "overflow-wrap"],
    ),
    (
        "預覽 pill 2",
        el(
            "div",
            "admin-dsp2-preview-pill admin-dsp2-preview-pill-2",
            {"data-preview-pill": "2"},
            STAGE,
        ),
        ["position", "left", "white-space", "max-width"],
    ),
    (
        "預覽 tag",
        el(
            "span",
            "admin-dsp2-preview-tag",
            {},
            STAGE + [el("div", "admin-dsp2-preview-pill admin-dsp2-preview-pill-1")],
        ),
        ["display", "max-width", "white-space"],
    ),
    (
        "觀眾圖片格式",
        el(
            "label",
            "admin-vi-ext",
            {},
            PAGE[:-1]
            + [
                el("div", "", id="viewer-images-group"),
                el("span", "val admin-vi-exts", id="viewer-images-extensions"),
            ],
        ),
        ["min-height", "height"],
    ),
]


def rank(entry):
    _, imp, layered, spec, order = entry[:5]
    return (imp, not layered if not imp else layered, spec, order)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--width", type=int, default=375)
    ap.add_argument("--height", type=int, default=812)
    ap.add_argument("--only", help="只看名稱含這段字的元素")
    args = ap.parse_args()

    rules = []
    for sheet in SHEETS:
        parse_blocks(
            strip_comments(sheet.read_text(encoding="utf-8")), 0, [], False, rules, sheet.name
        )

    for label, element, props in TARGETS:
        if args.only and args.only not in label:
            continue
        print(f"\n■ {label}  (@ {args.width}px)")
        for prop in props:
            cands = []
            for order, (sel, decls, media, layered, line, sheet) in enumerate(rules):
                mres = [eval_media(m, args.width, args.height) for m in media]
                if any(r is False for r in mres):
                    continue
                best = None
                for one in split_list(sel):
                    ok, spec = sel_match(one, element)
                    if ok is False:
                        continue
                    if best is None or spec > best[1]:
                        best = (one, spec, ok)
                if not best:
                    continue
                for dprop, val, imp in decls:
                    if dprop != prop:
                        continue
                    flag = "?" if (best[2] is None or any(r is None for r in mres)) else ""
                    where = (
                        f"{sheet}:{line}"
                        + (f" @media {' & '.join(media)}" if media else "")
                        + (" [@layer]" if layered else "")
                    )
                    cands.append((val, imp, layered, best[1], order, best[0], where, flag))
            if not cands:
                print(f"  {prop}: （沒有規則，用瀏覽器預設）")
                continue
            cands.sort(key=rank, reverse=True)
            for i, (val, imp, layered, spec, order, sel, where, flag) in enumerate(cands):
                mark = "✔ 生效" if i == 0 else "  被蓋"
                imp_txt = " !important" if imp else ""
                print(f"  {prop}: {mark} {val}{imp_txt}  特異度{spec}{flag}  {sel}  ← {where}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
