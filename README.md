# Tom Patterson — Portfolio

Personal portfolio site built with [Astro](https://astro.build), deployed to GitHub Pages.

## Stack
- **Astro** — static site generator
- **Tailwind CSS** — utility styling
- **GLightbox** — photography lightbox
- **IBM Plex Mono + Playfair Display** — typography

## Pages
- `/` — Software: bio, skills, projects
- `/photography` — Photography: masonry grid with lightbox + category filter

## Getting started

```bash
npm install
npm run dev
```

## Adding photos

1. Drop your images into `/public/photos/`
2. Open `src/pages/photography.astro`
3. Update the `photos` array at the top of the file:

```js
const photos = [
  {
    src: '/photos/your-image.jpg',
    caption: 'Title of shot',
    location: 'Liverpool',
    category: 'Graffiti',  // Used for the filter tabs
  },
  // ...
];
```

Categories are generated automatically from whatever values you use — no config needed.

## Updating projects

Edit the `projects` array in `src/pages/index.astro`.

## Deploying to GitHub Pages

1. Push this repo to GitHub (e.g. `yourusername.github.io` for a root site, or any repo name for a project site)
2. Go to **Settings → Pages** and set source to **GitHub Actions**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` handles the rest

> **Note:** If deploying to a project sub-path (e.g. `github.io/portfolio`), update `site` and add `base` in `astro.config.mjs`:
> ```js
> site: 'https://yourusername.github.io',
> base: '/portfolio',
> ```

## Customising

| What | Where |
|---|---|
| Name, bio, skills | `src/pages/index.astro` |
| Projects | `src/pages/index.astro` |
| Photos + categories | `src/pages/photography.astro` |
| Nav, footer, fonts | `src/layouts/BaseLayout.astro` |
| Global styles | `src/layouts/BaseLayout.astro` → `<style is:global>` |
