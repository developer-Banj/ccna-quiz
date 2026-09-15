# CCNA Practice Quiz

A static, client-side-only CCNA practice quiz. No backend, no database, no build step — just HTML/CSS/vanilla JS.

View the live site here:
https://ccna-quiz.onrender.com/

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```
npx serve .
```

## Deploy on Render

This repo includes a `render.yaml`, so Render will auto-detect the static site config. Otherwise, configure manually:

- **Type:** Static Site
- **Build command:** (leave empty)
- **Publish directory:** `.`

No environment variables or build step are required — `data.js` is bundled directly.

## Project structure

- `index.html` / `styles.css` / `app.js` — the app
- `data.js` — `BATCH_A`, `BATCH_B`, and `BATCH_C` question arrays, extracted from the source PDFs
- `assets/` — cropped exhibit images (topology diagrams, screenshots) referenced by question `image` fields
- `Part_9_.pdf`, `Part_12.pdf` — original source material the questions were extracted from
- `build_data.py` — builds `BATCH_A`/`BATCH_B` from extracted MCQ chunks
- `build_batch_c.py` — builds `BATCH_C` from the leftover MCQ/drag-and-drop chunks (`BATCH_C` is entirely drag-and-drop questions, since every leftover MCQ question after A/B had already been used)

## Question types

- **mcq** — single or multi-select multiple choice (`options` + `correctIndexes`)
- **dragdrop** — drag-and-drop / matching questions (`items`, `targets`, `correctMapping`). Rendered with the native HTML5 Drag and Drop API, with a tap-to-place fallback for touch devices. A dragdrop question is graded correct only if every item ends up on its correct target (unmapped/distractor items must be left unplaced).
