# CCNA Practice Quiz

A static, client-side-only CCNA practice quiz. No backend, no database, no build step — just HTML/CSS/vanilla JS.

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
- `data.js` — `BATCH_A` and `BATCH_B` question arrays, extracted from the source PDFs
- `assets/` — cropped exhibit images (topology diagrams, screenshots) referenced by question `image` fields
- `Part_9_.pdf`, `Part_12.pdf` — original source material the questions were extracted from
