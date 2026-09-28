from pathlib import Path
from PIL import Image
from pillow_heif import register_heif_opener
import rawpy

register_heif_opener()

ROOT = Path("public/portfolio/photography")

folders = [
    ROOT / "Projections",
    ROOT / "VLF",
]

for folder in folders:
    print(f"\nProcessing: {folder}")

    for source in folder.iterdir():
        if not source.is_file():
            continue

        extension = source.suffix.lower()

        # HEIC / HEIF
        if extension in [".heic", ".heif"]:
            output = source.with_suffix(".jpg")

            if output.exists():
                print(f"SKIP: {output.name}")
                continue

            try:
                with Image.open(source) as image:
                    image = image.convert("RGB")
                    image.save(
                        output,
                        "JPEG",
                        quality=95,
                        optimize=True
                    )

                print(f"HEIC -> JPG: {source.name} -> {output.name}")

            except Exception as e:
                print(f"ERROR: {source.name}")
                print(e)

        # DNG / RAW
        elif extension == ".dng":
            output = source.with_suffix(".jpg")

            if output.exists():
                print(f"SKIP: {output.name}")
                continue

            try:
                with rawpy.imread(str(source)) as raw:
                    rgb = raw.postprocess(
                        use_camera_wb=True,
                        output_bps=8
                    )

                image = Image.fromarray(rgb)
                image.save(
                    output,
                    "JPEG",
                    quality=95,
                    optimize=True
                )

                print(f"DNG -> JPG: {source.name} -> {output.name}")

            except Exception as e:
                print(f"ERROR: {source.name}")
                print(e)

print("\nConversion complete.")