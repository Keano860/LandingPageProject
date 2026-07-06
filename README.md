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
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank unless this site is inside a subfolder

The build step only copies the static files into `dist` so Cloudflare has a clear output directory.

Manual Wrangler deploy, once authenticated:

```powershell
npm run build
npx wrangler pages deploy dist --project-name hog-hut-bbq --branch main
```

Optional exact bottle renders can be added later as:

- `assets/shire-gold-bottle.png`
- `assets/blackthorn-smokehouse-bottle.png`
