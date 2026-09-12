import json
import os

EXTRACT_DIR = r"C:\Users\DavidBanjo\AppData\Local\Temp\claude\C--Users-DavidBanjo\01092cf0-8106-46ef-a503-0ef04c73ffc4\scratchpad\extract"
ASSETS_DIR = r"C:\Users\DavidBanjo\ccna-quiz\assets"

P9_CHUNKS = [f"p9_chunk{i}.json" for i in range(1, 6)]
P12_CHUNKS = [f"p12_chunk{i}.json" for i in range(1, 7)]

MANUAL_PATCHES_FILE = os.path.join(EXTRACT_DIR, "manual_patches.json")


def load_chunks(filenames):
    items = []
    for fn in filenames:
        path = os.path.join(EXTRACT_DIR, fn)
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
            items.extend(data)
    return items


def merge_part(raw_items, prefix):
    by_number = {}
    for item in raw_items:
        n = item["number"]
        if n not in by_number:
            by_number[n] = item
        else:
            existing = by_number[n]
            # prefer the more complete record (has explanation + correctIndexes)
            existing_complete = bool(existing.get("explanation")) and bool(existing.get("correctIndexes"))
            new_complete = bool(item.get("explanation")) and bool(item.get("correctIndexes"))
            if new_complete and not existing_complete:
                by_number[n] = item

    dropped_partial = []
    good = []
    for n in sorted(by_number.keys()):
        q = by_number[n]
        if q.get("skip"):
            continue
        if q.get("partial") or not q.get("options") or not q.get("correctIndexes"):
            dropped_partial.append(n)
            continue
        if q.get("image"):
            img_path = os.path.join(ASSETS_DIR, q["image"])
            if not os.path.exists(img_path):
                print(f"WARNING [{prefix}] Q{n}: image file missing: {q['image']}")
        good.append(q)

    print(f"[{prefix}] total raw: {len(by_number)}, usable: {len(good)}, dropped incomplete: {dropped_partial}")
    return good


def apply_manual_patches(good_list, prefix):
    if not os.path.exists(MANUAL_PATCHES_FILE):
        return good_list
    with open(MANUAL_PATCHES_FILE, "r", encoding="utf-8") as f:
        patches = json.load(f)
    part_patches = patches.get(prefix, [])
    existing_numbers = {q["number"] for q in good_list}
    for p in part_patches:
        if p["number"] not in existing_numbers:
            good_list.append(p)
            existing_numbers.add(p["number"])
    good_list.sort(key=lambda q: q["number"])
    return good_list


def to_app_question(q, prefix):
    return {
        "id": f"{prefix}_q{q['number']:03d}",
        "question": q["question"],
        "image": q["image"],
        "options": q["options"],
        "correctIndexes": q["correctIndexes"],
        "explanation": q["explanation"],
    }


def split_batches(questions, n_each=50):
    batch_a = questions[:n_each]
    batch_b = questions[n_each:n_each * 2]
    return batch_a, batch_b


def main():
    p9_raw = load_chunks(P9_CHUNKS)
    p12_raw = load_chunks(P12_CHUNKS)

    p9_good = merge_part(p9_raw, "p9")
    p12_good = merge_part(p12_raw, "p12")

    p9_good = apply_manual_patches(p9_good, "p9")
    p12_good = apply_manual_patches(p12_good, "p12")

    print(f"p9 usable after patches: {len(p9_good)}")
    print(f"p12 usable after patches: {len(p12_good)}")

    p9_a, p9_b = split_batches(p9_good, 50)
    p12_a, p12_b = split_batches(p12_good, 50)

    batch_a = [to_app_question(q, "p9") for q in p9_a] + [to_app_question(q, "p12") for q in p12_a]
    batch_b = [to_app_question(q, "p9") for q in p9_b] + [to_app_question(q, "p12") for q in p12_b]

    print(f"BATCH_A: {len(batch_a)} questions ({len(p9_a)} p9 + {len(p12_a)} p12)")
    print(f"BATCH_B: {len(batch_b)} questions ({len(p9_b)} p9 + {len(p12_b)} p12)")

    out_path = r"C:\Users\DavidBanjo\ccna-quiz\data.js"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("// Auto-generated from Part_9_.pdf and Part_12.pdf. Do not hand-edit; see build_data.py.\n")
        f.write("var BATCH_A = ")
        json.dump(batch_a, f, ensure_ascii=False, indent=2)
        f.write(";\n\nvar BATCH_B = ")
        json.dump(batch_b, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"Wrote {out_path}")


if __name__ == "__main__":
    main()
