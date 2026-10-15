# Mckisa17.github.io

Personal portfolio of Sam McKinven. Plain HTML, CSS and a little JavaScript,
hosted on GitHub Pages at https://mckisa17.github.io/.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page |
| `projects.html` | Project cards |
| `about.html` | Story and career timeline |
| `contact.html` | LinkedIn and GitHub links |
| `css/style.css` | All styling. Colors and fonts are variables at the top. |
| `js/main.js` | Mobile menu button and footer year |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Save a file and refresh to see changes.

## Editing content

- All text is plain HTML in the page files. Edit, save, refresh.
- The Book Tracker card appears on both Home and Projects. Update both.
- A project with a private repo shows `<p class="card__private">Private repository</p>`
  instead of a "View the repo" link. Swap them if you make the repo public.
- To change colors, edit the variables in section 1 of `css/style.css`.
- Keep personal contact details (email, phone) off the site: it is public.

## Adding a project card

1. In `projects.html`, copy everything from `<!-- ===== START CARD ===== -->`
   to `<!-- ===== END CARD ===== -->`.
2. Paste it directly below the last `END CARD` line.
3. Edit the title, "Built with" line, summary, Problem, What I built and repo link.
4. Optional: to feature it on Home, replace the card in `index.html`
   (keep its title as `<h3>` there).

## Adding a timeline entry

In `about.html`, copy a `START ENTRY` to `END ENTRY` block and edit it.
Newest entries go first. Only the current role keeps `timeline__item--current`.

## Adding a page (for example, Consulting)

1. Copy `contact.html` to `consulting.html` and replace the content inside `<main>`.
2. Add `<li><a href="consulting.html">Consulting</a></li>` to the nav in every page.
3. Move `aria-current="page"` to the new link in `consulting.html`.

## Custom domain (optional)

1. Buy a domain from a registrar.
2. In the repo on GitHub: Settings → Pages → Custom domain → enter it and save.
   GitHub adds a `CNAME` file to the repo.
3. At your registrar, add DNS records as described in GitHub's guide
   "Managing a custom domain for your GitHub Pages site"
   (an apex domain uses `A` records; a `www` subdomain uses a `CNAME`
   pointing to `mckisa17.github.io`).
4. Once DNS has updated, tick "Enforce HTTPS" in Settings → Pages.
