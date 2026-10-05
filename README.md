# Atiqul Islam Chowdhury — Portfolio

A free, self-hosted portfolio site for Data Science / AI work. Pure HTML/CSS/JS — no framework, no paid hosting. One optional script (`npm run prerender`) bakes the content into `index.html` for search engines.

**Live at:** `https://aichowdhury14.github.io` (once deployed — see below)

---

## 1. Preview it right now (no install needed)

Just double-click `index.html`. It opens directly in your browser and works fully offline — all content is defined in `assets/js/data.js`.

## 2. How to update your content

You never need to touch HTML or CSS for normal updates. Open **`assets/js/data.js`** and edit the plain-JS objects/arrays:

| To do this...                       | Edit this array in `data.js` |
|--------------------------------------|-------------------------------|
| Add a new job                        | `experience` — copy an existing block, paste at the top (set `logoMark` to a square logo in `assets/img/logos/`) |
| Add a project                        | `projects` |
| Add an academic project (shown under Projects) | `academicProjects` |
| Add a talk, press mention or milestone | `engagements` |
| Change the three focus areas         | `profile.focusAreas` |
| Add a certification                  | `certifications` |
| Add a publication                    | `publications` (grouped by type — pick the right group) |
| Update skills                        | `skills` — **keep each category to 10 items or fewer** (see below) |
| Change bio, tagline, email, links    | `profile` and `about` |
| Add/change research interest tags    | `profile.researchInterests` |

Save the file, refresh `index.html` in your browser to check it, then refresh the search-engine snapshot and push:

```powershell
npm install          # once
npm run prerender    # after any content change
git add . ; git commit -m "Update content" ; git push
```

Visitors always see the latest `data.js` even if you skip `npm run prerender` — the snapshot only affects what search engines and AI crawlers read.

### Skills
Each skill category card shows a tool count computed from the `skills` array. Keep each category at 10 items or fewer so the cards stay readable.

### Your photo
The hero uses a background-removed cut-out: `assets/img/profile-cutout.webp` (880px) and `profile-cutout-480.webp` (for phones), referenced by `profile.photo` / `profile.photoSmall` in `data.js`. To change the photo, replace both files with transparent-background square images of the same names.

### Certifications — backed by real files
Most of the certifications link to an actual PDF hosted in `assets/certificates/` (no dependency on third-party "verify" links that can break or require login) — except the 3 that only ever had an external link (HackerRank SQL x2, one DataCamp share link).

### Certificate badge gallery
There's also a visual badge gallery below the Certifications list, driven by `certificateGallery` in `data.js`. It's **hidden automatically until an image exists** — no code changes needed either way.

`sql-1-certificate.png` and `sql-2-certificate.png` are already in place, so that gallery is live now. To add the rest, save these from your [Google Drive certificates folder](https://drive.google.com/drive/folders/1Sb66KT8gNzPC3IjMTjde5EIyYkVziifu) into `assets/img/certificates/` using these filenames:

| Save as... | Source file in Drive |
|---|---|
| `ml.jpg` | ML.jpg |
| `android.jpg` | Android.jpg |
| `hackerrank-python.png` | HackerRank (Python).png |
| `cf-jquery.jpg` | Cf Jquery.jpg |
| `cf-python.jpg` | Cf Python.jpg |
| `cf-sql.jpg` | Cf Sql.jpg |

Each badge appears the moment its file exists at that path. To add more later, add a new `{ image, label }` entry to `certificateGallery` in `data.js`.

> Housekeeping: the original `certificates/` folder (the source PDFs/images you dropped at the project root) is safe to delete — everything from it has been copied into `assets/certificates/` and `assets/img/certificates/` under clean filenames. Keep it only if you want a backup.

### Talks, teaching & recognition
Edit `engagements` in `data.js`. Each entry has a `type` (Teaching, Talk, Press, Judge, Milestone), title, org, date, description and link. The entry with `featured: true` gets the large card; the rest show newest-first.

### The "currently in production" code snippet
The terminal-style code card in the About section (`fraud_detection.py`) is static HTML in `index.html`, not data-driven — it's a representative illustration of your BRAC Bank work, not literal production code. To change it, edit the `<pre class="terminal-body">` block directly (search for `fraud_detection.py` in `index.html`).

### SEO / link-preview metadata
- **Link preview:** `assets/img/og-image.png` (1200×630) is the card shown when the link is shared on LinkedIn, WhatsApp, Slack, etc. Regenerate it if your headline, photo or key stats change.
- **Prerendered content:** `tools/prerender.mjs` opens the page in headless Chrome and saves the rendered HTML between the `<!-- prerender:start -->` / `<!-- prerender:end -->` markers in `index.html`, so crawlers that don't run JavaScript still see everything. On load, `main.js` clears that snapshot and renders fresh from `data.js`.
- **Structured data:** the `Person` block in `<head>` is hand-written; the Book and all publications (`ScholarlyArticle`) are generated from `data.js` into `#structured-data` automatically.

---

## 3. One-time setup: install Git

This machine doesn't have Git installed yet. Install it once:

1. Download **Git for Windows**: https://git-scm.com/download/win
2. Run the installer — default options are fine.
3. Restart your terminal (or VS Code) after install so the `git` command is recognized.

Verify:
```powershell
git --version
```

## 4. Deploy for free with GitHub Pages

### Step A — Create the GitHub repo
1. Go to https://github.com/new (sign in / sign up first if needed — use username **aichowdhury14** to match this setup, or update the folder name to match whatever username you actually use).
2. Repository name: **`aichowdhury14.github.io`** — this exact name is required for GitHub's free user-site hosting.
3. Set it to **Public**, don't initialize with a README (you already have one), click **Create repository**.

### Step B — Push this folder to GitHub
Open a terminal in this folder (`aichowdhury14.github.io`) and run:
```powershell
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/aichowdhury14/aichowdhury14.github.io.git
git push -u origin main
```
You'll be prompted to sign in to GitHub in your browser the first time (this sets up credentials for future pushes too).

### Step C — Turn on GitHub Pages
1. On GitHub, open your repo → **Settings** → **Pages**.
2. Under "Build and deployment" → Source: **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. Wait ~1 minute. Your site goes live at:
   ```
   https://aichowdhury14.github.io
   ```

### Every future update (this is your permanent workflow)
```powershell
git add .
git commit -m "Describe what you changed"
git push
```
GitHub Pages auto-rebuilds in under a minute. No dashboard clicking required.

---

## 5. (Optional) No-Git shortcut for your very first upload

If you don't want to install Git today, you can still launch:
1. Create the repo as in Step A above.
2. On the empty repo page, click **"uploading an existing file"**.
3. Drag the entire contents of this folder (not the folder itself — its *contents*: `index.html`, `assets/`, `robots.txt`, `sitemap.xml`, `README.md`, `.gitignore`) into the browser drop zone.
4. Commit directly to `main`.
5. Do Step C above to enable Pages.

You'll still want Git eventually — editing `data.js` in the GitHub web editor works too, but Git is far less friction once you're updating regularly.

---

## 6. About your free domain

- **`aichowdhury14.github.io`** is your permanent free domain — no expiry, no renewal, backed by GitHub. This is what's configured here and is the recommended choice for a DS/AI professional portfolio: recruiters and collaborators trust `.github.io` links, and it doubles as proof you know how to ship via Git.
- If you later want something like `atiqul.dev` or `atiqulchowdhury.com`, buy it from a registrar (Cloudflare Registrar or Namecheap — sold at-cost, no markup games) for roughly $10–15/year, then add a `CNAME` file pointing to it — GitHub Pages supports custom domains natively. If you do this, also update the hardcoded `https://aichowdhury14.github.io` URLs in `index.html`'s `<head>` (canonical, Open Graph, JSON-LD) and in `robots.txt`/`sitemap.xml` to your new domain.
- Avoid "free" TLDs like `.tk`, `.ml`, `.ga` (Freenom) — they stopped free registrations in 2023 and are widely blacklisted by browsers/security tools, which looks bad on a professional portfolio.

---

## Project structure
```
aichowdhury14.github.io/
├─ index.html                    ← page structure + prerendered snapshot (regenerated by the script)
├─ robots.txt                    ← lets search engines crawl the site
├─ sitemap.xml                   ← basic SEO indexability
├─ package.json                  ← `npm run prerender` (dev tooling only)
├─ tools/prerender.mjs           ← bakes rendered content into index.html
├─ assets/
│  ├─ css/style.css              ← visual design (dark/light theme, tokens at the top)
│  ├─ js/data.js                 ← ALL your content — edit this to update the site
│  ├─ js/main.js                 ← rendering + interactions (rarely needs edits)
│  ├─ img/
│  │  ├─ profile-cutout*.webp    ← your photo (cut-out, 880px + 480px)
│  │  ├─ logos/                  ← employer logo marks (square, 96px)
│  │  ├─ projects/               ← project thumbnails
│  │  ├─ favicon.svg / favicon-32.png / apple-touch-icon.png
│  │  ├─ og-image.png            ← social share preview card
│  │  └─ certificates/           ← certificate badge images (gallery)
│  ├─ certificates/               ← certification PDFs (linked from the Certifications list)
│  └─ resume/                    ← CV PDF (no longer linked from the site)
├─ .gitignore
└─ README.md                     ← this file
```
