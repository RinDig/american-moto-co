# CLAUDE.md — American Moto Co Website

## Project Overview

Custom website for American Moto Co, a brand-agnostic motorcycle culture newsletter/media brand. This site replaces/complements their existing Beehiiv newsletter with a polished, self-hosted editorial experience deployed on GitHub Pages.

**Live Beehiiv site:** https://www.americanmotoco.com/
**Tagline:** "Breaking down the walls to share the stories from the road, no matter what you ride."
**Footer tagline:** "Built for riders, who just want to ride."

## Tech Stack

| Layer | Tool | Why |
|-------|------|-----|
| Framework | **Astro** (Static Site Generation) | Markdown content collections, minimal JS, fast, GitHub Pages native |
| Styling | **Tailwind CSS** | Utility-first, matches design system, responsive |
| Fonts | **League Spartan** (headings) + **Roboto** (body) | Matches existing brand typography |
| Icons | **Lucide** (SVG) | Clean, consistent, accessible |
| Deployment | **GitHub Pages** via GitHub Actions | Free, simple, git-based |
| Content | **Markdown files** in `src/content/` | Phase 1: links to Beehiiv. Phase 2: self-hosted articles |

## Commands

```bash
cd american-moto-co
npm install
npm run dev          # Dev server (localhost:4321)
npm run build        # Production build to ./dist
npm run preview      # Preview production build locally
```

## Folder Structure

```
american-moto-co/
├── CLAUDE.md                    # This file — project routing guide
├── PRD.md                       # Product Requirements Document
├── public/                      # Static assets (copied as-is to build)
│   └── favicon.svg
├── src/
│   ├── layouts/                 # Page layout templates
│   │   ├── BaseLayout.astro     # HTML shell, head, fonts, global styles
│   │   └── ArticleLayout.astro  # Article page wrapper (future)
│   │   └── _README.md           # Layout conventions
│   ├── components/              # Reusable UI components
│   │   ├── Header.astro         # Site header + nav
│   │   ├── Footer.astro         # Site footer + social links
│   │   ├── Hero.astro           # Homepage hero with subscribe CTA
│   │   ├── ArticleCard.astro    # Article preview card (links to Beehiiv)
│   │   ├── CategoryFilter.astro # Content category tabs/filter
│   │   └── _README.md           # Component conventions
│   ├── pages/                   # File-based routing (each file = a page)
│   │   ├── index.astro          # Homepage
│   │   ├── stories.astro        # Article archive/grid
│   │   ├── about.astro          # About the brand
│   │   └── submit.astro         # Story submission info/form
│   ├── content/                 # Content collections (Astro Content Collections)
│   │   ├── articles/            # Article metadata (links to Beehiiv for Phase 1)
│   │   └── config.ts            # Content collection schema definitions
│   ├── styles/                  # Global styles and design tokens
│   │   └── global.css           # Tailwind imports + custom properties
│   ├── assets/                  # Processed assets (images optimized by Astro)
│   │   ├── images/              # Photography and hero images
│   │   └── icons/               # Custom SVG icons (logo, etc.)
│   └── data/                    # Static data files
│       └── articles.ts          # Article metadata array (Beehiiv links)
├── docs/                        # Project documentation
│   ├── brand-voice.md           # Tone, language, editorial guidelines
│   └── design-tokens.md         # Colors, typography, spacing reference
├── astro.config.mjs             # Astro configuration
├── tailwind.config.mjs          # Tailwind configuration with brand tokens
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies and scripts
```

## Key Design Decisions

1. **Astro over Next.js/React** — This is a content-first site with minimal interactivity. Astro ships zero JS by default, which means faster page loads. We can add React components later via Astro Islands if needed (e.g., for a CMS editor).

2. **Phase 1: Beehiiv links** — Articles on the site link out to the existing Beehiiv posts. No content migration yet. This gets a beautiful site live fast.

3. **Phase 2: Self-hosted content** — Migrate articles to markdown in `src/content/articles/`. Add Decap CMS for browser-based editing.

4. **GitHub Pages deployment** — Free, ties into the git workflow, supports custom domains.

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-dark` | `#1A1A1A` | Primary background |
| `--color-charcoal` | `#2A2A2A` | Card backgrounds, secondary surfaces |
| `--color-mauve` | `#804D4D` | Primary brand color (warm brown) |
| `--color-gold` | `#DDC618` | Accent, CTAs, highlights |
| `--color-sage` | `#436138` | Secondary accent, badges |
| `--color-cream` | `#F5F0E1` | Body text on dark backgrounds |
| `--color-white` | `#FFFFFF` | Headings, high-emphasis text |

## Content Categories

| Category | Slug | Description |
|----------|------|-------------|
| Rider Profiles | `profiles` | Long-form interview features |
| Reviews for Riders | `reviews` | Motorcycle reviews from real riders |
| Epic Rides | `epic-rides` | Road guides and route features |
| Weekly Newsletter | `weekly` | Curated weekly roundups |
| Feature Stories | `features` | One-off narrative pieces |

## Social Channels

Discord, Instagram, LinkedIn, TikTok, Twitter/X, YouTube, Threads, Facebook, Bluesky

## Important Constraints

- **No JS unless necessary** — Astro islands only for interactive components
- **Images must be optimized** — Use Astro's `<Image>` component, WebP format
- **Mobile-first** — Design for 375px up, test at 768px, 1024px, 1440px
- **Accessibility** — WCAG AA minimum, 4.5:1 contrast ratios, focus states, alt text
- **Keep it simple** — This is a template for future building, not a finished product
