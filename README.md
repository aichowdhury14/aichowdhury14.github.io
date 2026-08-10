# Atiqul Islam Chowdhury — Portfolio

A free, self-hosted portfolio site for Data Science / AI work. Pure HTML/CSS/JS — no build step, no framework, no paid hosting.

**Live at:** `https://aichowdhury14.github.io` (once deployed — see below)

---

## 1. Preview it right now (no install needed)

Just double-click `index.html`. It opens directly in your browser and works fully offline — all content is defined in `assets/js/data.js`.

## 2. How to update your content

You never need to touch HTML or CSS for normal updates. Open **`assets/js/data.js`** and edit the plain-JS objects/arrays:

| To do this...                       | Edit this array in `data.js` |
|--------------------------------------|-------------------------------|
| Add a new job                        | `experience` — copy an existing block, paste at the top |
| Add a project                        | `projects` |
| Add an academic/personal project     | `academicProjects` |
| Add a certification                  | `certifications` |
| Add a publication                    | `publications` (grouped by type — pick the right group) |
| Update skills                        | `skills` — **keep each category to 10 items or fewer** (see below) |
| Change bio, tagline, email, links    | `profile` and `about` |
| Add/change research interest tags    | `profile.researchInterests` |

Save the file, refresh `index.html` in your browser to check it, then commit + push (see §4) to go live. That's the entire update workflow — forever.

### The "Toolkit Breadth by Category" chart updates itself
The interactive bar chart in the Skills section (hover/focus a bar for the full tool list, or click "View as table") is 100% computed from the `skills` array — bar length is just `items.length` per category. Add or remove a skill and the chart, tooltip, and table all update automatically. **Keep each category at ≤10 items** so the chart and cards stay readable — if a category grows past that, split it into two categories instead of stacking more tags in one.

### Your photo
Already wired in at `assets/img/profile.jpg` (referenced by `data.js` → `profile.photo`). Replace that file with a new square photo any time — no code changes needed.

### Certifications — backed by real files
Most of the 12 certifications link to an actual PDF hosted in `assets/certificates/` (no dependency on third-party "verify" links that can break or require login) — except the 3 that only ever had an external link (HackerRank SQL x2, one DataCamp share link).

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

### Your CV
Your PDF is already copied to `assets/resume/Atiqul-Islam-Chowdhury-CV.pdf` and the "Download CV" button links to it. Replace that file any time you update your CV — same filename, or update the path in `data.js` → `profile.resumeFile`.

### The "currently in production" code snippet
The terminal-style code card in the About section (`fraud_detection.py`) is static HTML in `index.html`, not data-driven — it's a representative illustration of your BRAC Bank work, not literal production code. To change it, edit the `<pre class="terminal-body">` block directly (search for `fraud_detection.py` in `index.html`).

### SEO / link-preview metadata
When this link is shared (LinkedIn, email, Slack), it now shows a branded preview card instead of a blank one. If your name, title, or key stats change meaningfully, regenerate `assets/img/og-image.png` (1200×630) to match, and update the `<meta property="og:*">` tags and the JSON-LD block at the top of `index.html`'s `<head>`. Not required for routine content edits — only if your headline identity changes.

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
├─ index.html                    ← page structure (rarely needs edits)
├─ robots.txt                    ← lets search engines crawl the site
├─ sitemap.xml                   ← basic SEO indexability
├─ assets/
│  ├─ css/style.css              ← visual design (dark/light theme, tokens at the top)
│  ├─ js/data.js                 ← ALL your content — edit this to update the site
│  ├─ js/main.js                 ← rendering + interactions (rarely needs edits)
│  ├─ img/
│  │  ├─ profile.jpg             ← your photo
│  │  ├─ favicon.svg / favicon-32.png / apple-touch-icon.png
│  │  ├─ og-image.png            ← social share preview card
│  │  └─ certificates/           ← certificate badge images (gallery)
│  ├─ certificates/               ← certification PDFs (linked from the Certifications list)
│  └─ resume/                    ← your downloadable CV PDF
├─ .gitignore
└─ README.md                     ← this file
```
