import json
import os
import math

SCRATCH = r"C:\Users\DAVIDB~1\AppData\Local\Temp\claude\c--Users-DavidBanjo-ccna-quiz\ed68f4bf-1757-437a-bdf5-bf807a360f26\scratchpad"
DATA_JS = r"C:\Users\DavidBanjo\ccna-quiz\data.js"
ASSETS_DIR = r"C:\Users\DavidBanjo\ccna-quiz\assets"


def load_chunk(name):
    path = os.path.join(SCRATCH, name)
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def load_merged(prefix):
    part1 = load_chunk(f"batchDEF_{prefix}_part1.json")
    part2 = load_chunk(f"batchDEF_{prefix}_part2.json")
    by_number = {}
    dupes = []
    for q in part1 + part2:
        n = q["number"]
        if n in by_number:
            dupes.append(n)
            continue
        by_number[n] = q
    ordered = [by_number[n] for n in sorted(by_number.keys())]
    numbers = sorted(by_number.keys())
    gaps = [n for n in range(numbers[0], numbers[-1] + 1) if n not in by_number] if numbers else []
    print(f"[{prefix}] part1={len(part1)} part2={len(part2)} merged={len(ordered)} range={numbers[0]}-{numbers[-1]}")
    if dupes:
        print(f"[{prefix}] WARNING duplicate numbers across parts (kept first occurrence): {dupes}")
    if gaps:
        print(f"[{prefix}] WARNING gaps in number sequence: {gaps}")
    return ordered


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


def split_thirds(items):
    n = len(items)
    third = math.ceil(n / 3)
    return items[:third], items[third:2 * third], items[2 * third:]


def main():
    p10 = load_merged("p10")
    p11 = load_merged("p11")

    p10_d, p10_e, p10_f = split_thirds(p10)
    p11_d, p11_e, p11_f = split_thirds(p11)

    batch_d = [to_app_question(q, "p10") for q in p10_d] + [to_app_question(q, "p11") for q in p11_d]
    batch_e = [to_app_question(q, "p10") for q in p10_e] + [to_app_question(q, "p11") for q in p11_e]
    batch_f = [to_app_question(q, "p10") for q in p10_f] + [to_app_question(q, "p11") for q in p11_f]

    for name, batch, p_d, p_e in [("BATCH_D", batch_d, p10_d, p11_d), ("BATCH_E", batch_e, p10_e, p11_e), ("BATCH_F", batch_f, p10_f, p11_f)]:
        type_counts = {}
        for q in batch:
            type_counts[q["type"]] = type_counts.get(q["type"], 0) + 1
        print(f"{name}: {len(batch)} questions ({len(p_d)} p10 + {len(p_e)} p11), by type: {type_counts}")

    with open(DATA_JS, "r", encoding="utf-8") as f:
        existing = f.read()

    if "var BATCH_D" in existing:
        raise SystemExit("BATCH_D already present in data.js -- aborting to avoid duplicate append")

    with open(DATA_JS, "a", encoding="utf-8") as f:
        for name, batch in [("BATCH_D", batch_d), ("BATCH_E", batch_e), ("BATCH_F", batch_f)]:
            f.write(f"\nvar {name} = ")
            json.dump(batch, f, ensure_ascii=False, indent=2)
            f.write(";\n")

    print(f"Appended BATCH_D, BATCH_E, BATCH_F to {DATA_JS}")


if __name__ == "__main__":
    main()
