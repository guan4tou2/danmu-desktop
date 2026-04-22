"""QR code SVG renderer — used by the overlay idle scene.

Generates a minimal SVG path QR code (no <?xml?> prolog, no width/height) that
can be inlined directly into a Jinja template. Size is controlled by the
caller via CSS on the wrapping element.
"""

from __future__ import annotations

import io
import re

import qrcode
import qrcode.image.svg

_WIDTH_HEIGHT_RE = re.compile(r'\s(width|height)="[^"]*"')


def render_svg(data: str) -> str:
    """Return an SVG string for *data* suitable for direct HTML inlining.

    The QR is rendered as a single <path> (SvgPathImage). We strip the XML
    prolog and fixed mm dimensions so the caller can size the SVG with CSS.
    """
    img = qrcode.make(
        data,
        image_factory=qrcode.image.svg.SvgPathImage,
        box_size=10,
        border=1,
    )
    buf = io.BytesIO()
    img.save(buf)
    svg = buf.getvalue().decode("utf-8")
    svg = svg.split("?>", 1)[-1].lstrip()
    svg = _WIDTH_HEIGHT_RE.sub("", svg, count=2)
    return svg
