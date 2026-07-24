# Demi Beurre — Static Landing


This is a small static HTML prototype for the Demi brand — a modern French pantry concept. The goal: cool, contemporary, approachable pantry essentials (not luxury; not rustic). The site is intentionally minimal and warm.

Brand highlights:
- Understated, sophisticated, warm, minimal.
- Everyday luxury that feels approachable — "I want this on my kitchen counter." 
- Visual palette: neutral creams, soft black typography, muted reds, butter yellow accents.

Files created:
- `index.html`
- `css/styles.css`
- `js/main.js`
- `assets/` (simple SVG placeholders for product images)

Preview:
1. Open `index.html` in your browser (double-click or use a local web server).
2. To serve via a local server (macOS):

```bash
cd "/Applications/MAMP/htdocs/DEMI BEURRE"
python3 -m http.server 8000
# then open http://localhost:8000
```

Notes & next steps:
- Replace the SVG placeholders in `assets/` with the real photographs (fresh baguette, butter, linen, natural light).
 - Replace the SVG placeholders in `assets/` with the real photographs (fresh baguette, butter, linen, natural light).
	 Recommended filenames (drop into `/Applications/MAMP/htdocs/DEMI BEURRE/assets/`):
	 - `demi-hero.jpg` — hero image (wide). I will crop/center to 16:9 display.
	 - `demi-side.jpg` — detail/side view (close-up).
	 - `demi-butter.jpg` — product thumbnail for the Butter card (can be same image cropped tighter).

If you upload the images here I can place them into the project and finalize the layout.
- If you want the site to feel less "luxury" and more "cool and approachable", I can reduce high-polish shadows, lighten copy, and add pricing / shop affordances.
- I can also export a deployable ZIP or add a simple Netlify config.
