# Siva Toleti — Portfolio

A multi-page React (Vite) web app: Full Stack Java Developer, Spring Boot & Spring AI focus.
Dark theme with glow accents (violet + cyan).

## Project structure

```
src/
  components/
    Layout.jsx         shared nav + footer, wraps every page via <Outlet />
    GlowBackground.jsx  reusable ambient glow orbs used behind hero sections
  pages/
    Home.jsx            hero + quick links into the other pages
    Skills.jsx           skills grouped by category
    Experience.jsx        work history
    Projects.jsx          project cards with GitHub links
    Education.jsx          education + certifications
    Contact.jsx             contact page with resume download
  App.jsx               route definitions (react-router-dom)
  main.jsx              React entry point, wraps App in <HashRouter>
  index.css             design tokens + global styles (dark + glow)
public/
  Siva_Toleti_Resume.pdf   downloadable resume (linked from Home + Contact)
```

## Routing

This uses **HashRouter** (URLs look like `/#/projects`) instead of BrowserRouter.
Reason: GitHub Pages is a static host with no server-side rewrite rules, so
navigating directly to `/projects` and refreshing would 404 with BrowserRouter.
HashRouter avoids that entirely with zero extra config — the tradeoff is the
`#` in the URL, which is a normal, accepted pattern for static SPA sites.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Deploy to GitHub Pages (this repo: sairamgitsmash.github.io)

This repo is a **user site** (named `sairamgitsmash.github.io`), so it's served from
the domain root — no subpath config needed.

**Option A — using the gh-pages package (recommended):**

```bash
npm install
npm run deploy
```

This builds the site and pushes the `dist/` folder to a `gh-pages` branch automatically.
Then in the repo: **Settings → Pages → Source → Deploy from a branch → `gh-pages` / `root`**.

**Option B — manual build:**

```bash
npm install
npm run build
```

This outputs static files to `dist/`. Copy everything from `dist/` into the root of this
repo (replacing old files), commit, and push to `main`. Then in **Settings → Pages**,
make sure it's set to deploy from `main` / root.

## Updating content later

All real content (experience, projects, education, skills) lives directly in the
component files under `src/components/` — no CMS, just edit the text/arrays at the
top of each file and redeploy.

To swap in a newer resume PDF, replace `public/Siva_Toleti_Resume.pdf` with the new
file (keep the same filename, or update the `href` in `Hero.jsx` and `Contact.jsx`).
