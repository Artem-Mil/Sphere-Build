# Sphere Vision — Build Guide 2026

A static site. No build step, no framework, no dependencies.

## Files

| File | What it is | Edit it? |
|---|---|---|
| `content.js` | ALL text on the site | YES — this is the only file you edit |
| `img/` | Photos and diagrams | Add or replace images here |
| `index.html` | Page shell | No |
| `styles.css` | Design | No |
| `app.js` | Renders content.js onto the page | No |

## Deploy to Vercel (first time)

Option A — drag and drop (no account setup beyond login):
1. Go to https://vercel.com/new
2. Drag this whole folder onto the page.
3. Vercel deploys it and gives you a URL like `sphere-vision.vercel.app`.

Option B — CLI:
1. `npm i -g vercel`
2. From this folder: `vercel --prod`

Option C — GitHub (best for repeated updates):
1. Push this folder to a GitHub repo.
2. Import the repo at https://vercel.com/new
3. Framework preset: "Other". No build command. Output directory: leave blank.
4. Every `git push` now updates the live site automatically.

## Update the guide

1. Open `content.js` in any text editor.
2. Edit the text between the quotes. Add or remove `{ ... }` blocks in lists to add or remove items.
3. Save.
4. Redeploy:
   - Drag-and-drop method: drag the folder onto vercel.com/new again (or into your existing project's page).
   - CLI: `vercel --prod`
   - GitHub: commit and push.

Change `lastUpdated` in `content.js` each time so the crew can see the guide is current.

## Add a photo

1. Put the image in `img/` (JPG, ideally under 500 KB).
2. Reference it in `content.js`, e.g. `image: "img/my-photo.jpg"` inside a camp-structure or playa-art block.

## Note

The page has `noindex` set so search engines skip it, but the URL is public. The trailer lock code is on the page. If you want it protected, remove it from `content.js` or turn on Vercel password protection (paid feature), or share the URL only inside the WhatsApp group.
