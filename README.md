# STILL — Virtual art gallery

An independent interactive art gallery by **Orlando David**. Explore thirteen artworks across four photographic room compositions, with a searchable collection and a close-up viewer.

## Explore

- English is the default language. Switch to Spanish with **EN / ES** in the gallery, collection or artwork viewer. The browser remembers your choice.
- Select any artwork on a wall or open **The collection** to search by artwork, artist, medium or room.
- Save favorites locally, open artwork details, zoom with the mouse wheel or a two-finger gesture, and share links to individual works.
- Drag the room view, use the wall controls, or choose **Just the art** to hide the interface.
- Use the arrow keys to switch room or artwork; `+` / `−` to zoom; `Esc` to close dialogs.

## Run

Open `index.html` in a modern browser, or serve this folder with any static hosting service. No build step, package installation, API keys or application server are required. All fonts and artwork images are included locally. Relative asset paths support a GitHub Pages project subdirectory.

## Publish with GitHub Pages

1. Upload the contents of this folder to a GitHub repository, with `index.html` at the root of `main`.
2. Open **Settings → Pages → Build and deployment**.
3. Choose **Deploy from a branch**, `main` and `/(root)`, then save.
4. Open the URL reported by GitHub after its deployment finishes.

The `.nojekyll` file allows the static files to be served directly.

## Source

`index.html`: semantic markup and English fallback copy. `gallery.css`: responsive layout and room presentation. `collection.js`: artwork data. `i18n.js`: English and Spanish copy and language persistence. `gallery.js`: navigation, dialogs and interaction. `gallery-math.js`: artwork-plane projection, camera bounds and search helpers.

In the development checkout, `scripts/add-languages.py` rebuilds `i18n.js`; update its dictionaries when editing translations. In `collection.js`, stable artwork IDs and room IDs also identify the shared routes. Keep those IDs unchanged to preserve existing links.

## Imagery and credits

Nine historical artworks are in the public domain. Museum metadata is credited to the Art Institute of Chicago, and reproductions to Wikimedia Commons. Three abstract images, the imagined sculpture and the gallery architecture are AI-generated. The rooms are interactive photographic compositions; this is not a freely walkable 3D building. Design and development used AI assistance.

Full artwork sources, image credits and font licenses are in `assets/CREDITS.txt` (English) and `assets/CREDITOS.txt` (Spanish). This project is not affiliated with the Art Institute of Chicago or Wikimedia.
