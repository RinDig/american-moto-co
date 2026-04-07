# Layouts

Astro layout components that wrap pages with shared HTML structure.

- **BaseLayout.astro** — The root HTML shell. Includes `<head>` (fonts, meta, global CSS), `<Header>`, `<main>`, `<Footer>`. Every page uses this.
- **ArticleLayout.astro** — (Phase 2) Wraps self-hosted article pages with article-specific meta, reading time, back navigation.

## Conventions

- Layouts receive page content via `<slot />`.
- Pass `title`, `description`, and optional `image` as props for SEO meta.
- All layouts import `global.css` for Tailwind and custom properties.
