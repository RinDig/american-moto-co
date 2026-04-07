# Components

Reusable Astro components. All are `.astro` files (server-rendered, zero JS) unless they need interactivity.

## Naming

- PascalCase file names: `ArticleCard.astro`
- Props typed via `interface Props {}` at top of component
- Use Tailwind classes for styling, reference design tokens from `docs/design-tokens.md`

## Interactive Components

If a component needs client-side JS (e.g., mobile menu toggle, category filter), use Astro Islands:
```astro
<MobileMenu client:load />
```

Keep these minimal — the goal is near-zero JS.
