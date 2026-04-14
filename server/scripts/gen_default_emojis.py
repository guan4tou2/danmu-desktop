"""
Generate the bundled default emoji set into server/static/emojis/.

These are simple 64×64 vector-style placeholders rendered with Pillow so the
admin panel has something usable on first install. Run this script once when
adding or refreshing the bundled set; the resulting PNGs are committed to git.

    python server/scripts/gen_default_emojis.py
"""

from pathlib import Path

from PIL import Image, ImageDraw

OUT_DIR = Path(__file__).resolve().parent.parent / "static" / "emojis"
SIZE = 64


def _new() -> tuple[Image.Image, ImageDraw.ImageDraw]:
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    return img, ImageDraw.Draw(img)


def smile() -> Image.Image:
    img, d = _new()
    d.ellipse((2, 2, 62, 62), fill=(255, 204, 0, 255), outline=(40, 30, 0, 255), width=2)
    d.ellipse((18, 22, 26, 32), fill=(40, 30, 0, 255))
    d.ellipse((38, 22, 46, 32), fill=(40, 30, 0, 255))
    d.arc((18, 28, 46, 50), start=0, end=180, fill=(40, 30, 0, 255), width=4)
    return img


def heart() -> Image.Image:
    img, d = _new()
    red = (235, 64, 80, 255)
    d.ellipse((6, 12, 34, 40), fill=red)
    d.ellipse((30, 12, 58, 40), fill=red)
    d.polygon([(8, 30), (56, 30), (32, 58)], fill=red)
    return img


def fire() -> Image.Image:
    img, d = _new()
    d.polygon(
        [(32, 4), (50, 24), (54, 44), (44, 60), (20, 60), (10, 44), (16, 26)],
        fill=(255, 110, 0, 255),
    )
    d.polygon(
        [(32, 18), (44, 34), (46, 48), (38, 58), (24, 58), (18, 46), (24, 32)],
        fill=(255, 200, 0, 255),
    )
    d.polygon([(32, 34), (38, 46), (32, 56), (26, 46)], fill=(255, 240, 200, 255))
    return img


def star() -> Image.Image:
    img, d = _new()
    pts = [
        (32, 4),
        (39, 24),
        (60, 24),
        (43, 37),
        (50, 58),
        (32, 45),
        (14, 58),
        (21, 37),
        (4, 24),
        (25, 24),
    ]
    d.polygon(pts, fill=(255, 215, 0, 255), outline=(120, 80, 0, 255))
    return img


def thumbsup() -> Image.Image:
    img, d = _new()
    skin = (255, 196, 140, 255)
    outline = (120, 70, 30, 255)
    # Fist
    d.rounded_rectangle((14, 28, 52, 60), radius=10, fill=skin, outline=outline, width=2)
    # Thumb
    d.rounded_rectangle((24, 6, 40, 32), radius=8, fill=skin, outline=outline, width=2)
    # Cuff
    d.rectangle((14, 56, 52, 62), fill=(60, 110, 200, 255))
    return img


def cry() -> Image.Image:
    img, d = _new()
    d.ellipse((2, 2, 62, 62), fill=(255, 204, 0, 255), outline=(40, 30, 0, 255), width=2)
    # Sad eyes (closed downward arcs)
    d.arc((16, 22, 30, 32), start=180, end=360, fill=(40, 30, 0, 255), width=3)
    d.arc((34, 22, 48, 32), start=180, end=360, fill=(40, 30, 0, 255), width=3)
    # Frown
    d.arc((20, 38, 44, 56), start=180, end=360, fill=(40, 30, 0, 255), width=4)
    # Tear
    d.polygon([(20, 32), (26, 32), (23, 44)], fill=(80, 170, 230, 255))
    return img


EMOJIS = {
    "smile": smile,
    "heart": heart,
    "fire": fire,
    "star": star,
    "thumbsup": thumbsup,
    "cry": cry,
}


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for name, builder in EMOJIS.items():
        out = OUT_DIR / f"{name}.png"
        builder().save(out, "PNG", optimize=True)
        print(f"wrote {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
