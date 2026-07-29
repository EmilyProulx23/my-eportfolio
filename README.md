# Teaching e-Portfolio — Emily Proulx

A static teaching e-portfolio built with plain HTML/CSS and minimal JS, deployed on GitHub Pages (no build step).

## Pages

- `index.html` — Home / landing page
- `teaching-statement.html` — Teaching Statement
- `syllabus.html` — ENC 3314: Writing & Rhetoric Foundations syllabus
- `signature-assignment.html` — The Writerly Identity Excavation
- `cv.html` — Curriculum Vitae (with downloadable PDF in `assets/`)

## Structure

- `css/style.css` — all site styling
- `js/main.js` — mobile navigation toggle
- `assets/` — downloadable files (CV PDF)
- `*.docx` / `*.pdf` at the repo root — original source documents

## Local preview

Any static server works, e.g.:

```
python3 -m http.server 8000
```

## Deployment

Push to the default branch with GitHub Pages enabled (Settings → Pages → Deploy from branch). The site serves at `https://<username>.github.io/my-eportfolio/`.
