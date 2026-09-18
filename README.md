# David Alvarez — Portfolio

Personal developer portfolio built with Astro and TypeScript. Optimized for GitHub Pages with English/Spanish support and dark/light themes.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) for English and [http://localhost:4321/es/](http://localhost:4321/es/) for Spanish.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push to the `main` branch.
2. In your repository settings, set **Pages → Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

## Content to edit

| File | What to change |
|------|----------------|
| `src/data/site.ts` | Name, GitHub username, social URLs, projects, technologies |
| `src/data/translations/en.ts` | All English copy |
| `src/data/translations/es.ts` | All Spanish copy |
| `public/projects/` | Project screenshot images |
| `public/favicon.svg` | Site favicon |
| `public/og-image.svg` | Social sharing preview image |
| `astro.config.mjs` | Site URL if your domain changes |

## Features

- Static Astro site with minimal JavaScript
- Responsive layout (mobile, tablet, desktop)
- Dark/light theme toggle with system preference default
- English and Spanish locales
- SEO metadata and Open Graph tags
- Accessible semantic HTML
