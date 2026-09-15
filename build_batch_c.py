import json
import os

SCRATCH = r"C:\Users\DAVIDB~1\AppData\Local\Temp\claude\c--Users-DavidBanjo-ccna-quiz\ed68f4bf-1757-437a-bdf5-bf807a360f26\scratchpad"
DATA_JS = r"C:\Users\DavidBanjo\ccna-quiz\data.js"
ASSETS_DIR = r"C:\Users\DavidBanjo\ccna-quiz\assets"


def load(prefix):
    path = os.path.join(SCRATCH, f"batchC_{prefix}.json")
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def to_app_question(q, prefix):
    qid = f"{prefix}_q{q['number']:03d}"
    if q.get("image"):
        img_path = os.path.join(ASSETS_DIR, q["image"])
        if not os.path.exists(img_path):
            print(f"WARNING [{qid}] image file missing: {q['image']}")

    if q["type"] == "dragdrop":
        return {
            "id": qid,
            "type": "dragdrop",
            "question": q["question"],
            "image": q.get("image"),
            "items": q["items"],
            "targets": q["targets"],
            "correctMapping": q["correctMapping"],
            "explanation": q.get("explanation", ""),
        }
    return {
        "id": qid,
        "type": "mcq",
        "question": q["question"],
        "image": q.get("image"),
        "options": q["options"],
        "correctIndexes": q["correctIndexes"],
        "explanation": q.get("explanation", ""),
    }


def main():
    p9 = sorted(load("p9"), key=lambda q: q["number"])
    p12 = sorted(load("p12"), key=lambda q: q["number"])

    print(f"p9: {len(p9)} questions -> {[q['number'] for q in p9]}")
    print(f"p12: {len(p12)} questions -> {[q['number'] for q in p12]}")

    batch_c = [to_app_question(q, "p9") for q in p9] + [to_app_question(q, "p12") for q in p12]

    type_counts = {}
    for q in batch_c:
        type_counts[q["type"]] = type_counts.get(q["type"], 0) + 1
    print(f"BATCH_C: {len(batch_c)} questions total, by type: {type_counts}")

    with open(DATA_JS, "r", encoding="utf-8") as f:
        existing = f.read()

    if "var BATCH_C" in existing:
        raise SystemExit("BATCH_C already present in data.js -- aborting to avoid duplicate append")

    with open(DATA_JS, "a", encoding="utf-8") as f:
        f.write("\nvar BATCH_C = ")
        json.dump(batch_c, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"Appended BATCH_C to {DATA_JS}")


if __name__ == "__main__":
    main()
