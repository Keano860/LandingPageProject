# Hog Hut BBQ Website

Static Cloudflare Pages landing page for `hoghutbbq.co.uk`.

## Files

- `index.html` - single-page sales landing page
- `styles.css` - responsive styling and brand colours
- `script.js` - hides optional missing images gracefully
- `assets/` - local imagery used by the page

## Cloudflare Pages deployment

Use these settings when connecting the GitHub repository to Cloudflare Pages:

- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`
- Root directory: `/`

The site has no build step. Cloudflare can publish the repository root directly.

Manual Wrangler deploy, once authenticated:

```powershell
npx wrangler pages deploy . --project-name hog-hut-bbq --branch main
```

Optional exact bottle renders can be added later as:

- `assets/shire-gold-bottle.png`
- `assets/blackthorn-smokehouse-bottle.png`
