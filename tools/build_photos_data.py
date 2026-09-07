#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
photos フォルダの中の画像を base64 に変換して photos-data.js を生成します。
（Chromeでローカルファイルをcanvasに描画してPNG保存しようとすると
「Tainted canvases」エラーになることがあるのを避けるための仕組みです）

写真を追加・変更・削除したときは、このスクリプトを実行してから
index.html を再読み込みしてください。

使い方:
  cd receipt-photo-system
  python3 tools/build_photos_data.py
"""
import base64
import json
import mimetypes
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
PHOTOS_DIR = ROOT / "photos"
OUT_FILE = ROOT / "photos-data.js"

def main():
    if not PHOTOS_DIR.exists():
        print(f"photosフォルダが見つかりません: {PHOTOS_DIR}", file=sys.stderr)
        sys.exit(1)

    data = {}
    exts = {".jpg", ".jpeg", ".png", ".gif", ".webp"}
    files = sorted(p for p in PHOTOS_DIR.rglob("*") if p.is_file() and p.suffix.lower() in exts)

    for p in files:
        mime, _ = mimetypes.guess_type(str(p))
        mime = mime or "image/jpeg"
        b64 = base64.b64encode(p.read_bytes()).decode("ascii")
        rel = "photos/" + str(p.relative_to(PHOTOS_DIR)).replace("\\", "/")
        data[rel] = f"data:{mime};base64,{b64}"

    lines = []
    lines.append("/* 自動生成ファイル: tools/build_photos_data.py で再生成してください。手動編集しないでください。 */")
    lines.append("window.PHOTO_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";")
    OUT_FILE.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"{len(files)}件の写真を photos-data.js に書き出しました。")

if __name__ == "__main__":
    main()
