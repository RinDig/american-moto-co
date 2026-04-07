# Product Requirements Document — American Moto Co Website

**Version:** 1.0
**Date:** 2026-04-07
**Status:** Draft — Awaiting Alignment

---

## 1. Executive Summary

Build a polished, static website for **American Moto Co**, a brand-agnostic motorcycle culture media brand currently hosted entirely on Beehiiv. The new site serves as the brand's front door — showcasing content, driving newsletter subscriptions, and establishing a visual identity beyond Beehiiv's template constraints.

**Phase 1 (this sprint):** A beautiful, deployable template that links to existing Beehiiv content.
**Phase 2 (future):** Self-hosted articles, CMS integration, story submissions, community features.

---

## 2. Problem Statement

American Moto Co has strong content and a clear brand voice, but their digital presence is limited to Beehiiv's default templates. This means:

- **No visual differentiation** — looks like every other Beehiiv newsletter
- **No control over layout** — can't feature content strategically, no category filtering
- **No brand expansion** — can't add merch, events, community, or sponsor integrations
- **No SEO ownership** — Beehiiv controls meta, structure, and domain architecture
- **No submission pipeline** — story submissions go through a basic Beehiiv form

A custom site solves all of these while keeping Beehiiv as the email delivery engine (for now).

---

## 3. Target Users

| User | Need |
|------|------|
| **New visitor** | Understand what AMC is in 5 seconds, subscribe or browse content |
| **Returning reader** | Find new articles, browse by category, share stories |
| **Story contributor** | Submit a rider story with photos and structured info |
| **Zach (owner)** | Publish content, manage the site, grow the brand |
| **You (builder)** | Edit and maintain the site through code/git |

---

## 4. Design Philosophy

### 4.1 Visual Direction

**Style:** Editorial Magazine + Nature Distilled (warm earth tones on dark backgrounds)

The site should feel like a motorcycle magazine you'd pick up at a gas station — gritty, warm, full of real photography and honest stories. Not a tech startup. Not a lifestyle blog. A place for riders.

| Principle | Meaning |
|-----------|---------|
| **Content is king** | Photography and stories are the centerpiece, not chrome |
| **Dark and warm** | Dark backgrounds (#1A1A1A) with warm earth-tone accents |
| **Documentary feel** | Real photos, natural light, no stock. Gritty but editorial |
| **Anti-gatekeeping** | Visual language says "everyone welcome" — no brand tribalism |
| **Breathing room** | Generous whitespace, large type, let content speak |

### 4.2 Color Palette

```
Primary Background:  #1A1A1A  (near-black)
Surface/Cards:       #2A2A2A  (charcoal)
Brand Mauve:         #804D4D  (warm brown — primary brand color)
Gold Accent:         #DDC618  (mustard gold — CTAs, highlights)
Sage Green:          #436138  (secondary accent — badges, tags)
Cream Text:          #F5F0E1  (body text on dark)
White:               #FFFFFF  (headings, high-emphasis)
Error/Alert:         #C0392B  (muted red)
```

### 4.3 Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| H1 (Hero) | League Spartan | 700-900 | clamp(2.5rem, 5vw, 4rem) |
| H2 (Section) | League Spartan | 700 | clamp(1.75rem, 3vw, 2.5rem) |
| H3 (Card) | League Spartan | 600 | 1.25rem |
| Body | Roboto | 400 | 1rem (16px) |
| Body Large | Roboto | 400 | 1.125rem (18px) |
| Caption/Meta | Roboto | 300 | 0.875rem (14px) |
| CTA Button | League Spartan | 600 | 1rem |

**Line height:** 1.6 for body, 1.2 for headings
**Max line length:** 72ch for body text

### 4.4 Spacing System

Base unit: 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
Section padding: 96px vertical (desktop), 64px (mobile).
Content max-width: 1280px (overall), 768px (article body).

### 4.5 Key Effects

- **Scroll reveal:** Subtle fade-up on section entry (respect `prefers-reduced-motion`)
- **Image treatment:** Slight desaturation (filter: saturate(0.85)) for documentary feel
- **Hover states:** Card lift with warm shadow, 200ms transition
- **Parallax:** Subtle on hero image only, disabled on mobile
- **Grain overlay:** Optional subtle film grain texture on hero (CSS noise)

---

## 5. Site Map & Pages

```
/                    → Homepage (hero, featured content, subscribe CTA)
/stories             → Article archive grid with category filter
/about               → Brand story, values, team
/submit              → Story submission info and form
```

### 5.1 Homepage (`/`)

**Purpose:** First impression. Convert visitors to subscribers. Showcase best content.

**Sections (top to bottom):**

1. **Hero**
   - Full-viewport background image (rider on open road)
   - Logo badge overlay (top-center or top-left)
   - Tagline: "Breaking down the walls to share the stories from the road, no matter what you ride."
   - Email subscribe input + "Join the Ride" button (primary CTA)
   - Subtle scroll indicator (chevron or "Explore" text)

2. **Featured Articles** (3-article grid)
   - Large feature card (left, 2/3 width) + two stacked cards (right, 1/3 width)
   - Each card: image, category badge, title, one-line description, read time
   - Cards link to Beehiiv article URLs
   - "View All Stories" link below

3. **Content Categories** (horizontal scroll on mobile)
   - Visual category cards: Rider Profiles, Reviews, Epic Rides, Features
   - Each card: icon/illustration, category name, article count, link to `/stories?category=X`

4. **Pull Quote / Brand Statement**
   - Full-width dark section with large italic quote
   - "Built for riders, who just want to ride."
   - Warm gold accent line above/below

5. **Latest Articles** (3-4 article grid)
   - Standard card layout, chronologically sorted
   - "See More" link to `/stories`

6. **Subscribe Banner** (secondary CTA)
   - "Never miss a story from the road"
   - Email input + subscribe button (duplicate of hero CTA for scroll depth)

7. **Footer**
   - Logo, social links (all 10 channels), nav links, copyright
   - "Proudly brand-agnostic" or similar closing tagline

### 5.2 Stories Page (`/stories`)

**Purpose:** Browse all content with category filtering.

- **Header:** Page title "Stories from the Road" + category filter tabs (All, Profiles, Reviews, Epic Rides, Weekly, Features)
- **Grid:** 3-column card grid (2 on tablet, 1 on mobile)
- **Cards:** Image, category badge (color-coded by category), title, excerpt, date, read time
- **All cards link to Beehiiv** (Phase 1)
- **Pagination or "Load More"** if >12 articles

### 5.3 About Page (`/about`)

**Purpose:** Tell the brand story. Build connection.

- **Hero:** Photo of Zach / the team + headline
- **Brand Story:** 2-3 paragraphs on why AMC exists (from brand voice doc)
- **Values Section:** 3 pillars with icons — Community, Authenticity, Inclusivity
- **"Join the Community" CTA** (subscribe + social links)

### 5.4 Submit Page (`/submit`)

**Purpose:** Invite rider story submissions.

- **Headline:** "Got a Story? We Want to Hear It."
- **What we're looking for:** Brief description of content types accepted
- **Submission guidelines:** Word count, photo requirements, tone guidance
- **Phase 1:** Link to existing Beehiiv form or simple mailto
- **Phase 2:** Inline form with structured fields (name, email, riding style, story text, photo upload)

---

## 6. Article Data Model (Phase 1)

Articles in Phase 1 are metadata-only — they link out to Beehiiv. Each article entry:

```typescript
interface Article {
  title: string;              // "Hayley Bell: On the Edge of Pakistan's Mountain"
  slug: string;               // "hayley-bell-on-the-edge-of-pakistans-mountain"
  beehiivUrl: string;         // Full Beehiiv URL
  category: Category;         // "profiles" | "reviews" | "epic-rides" | "weekly" | "features"
  description: string;        // 1-2 sentence hook
  date: string;               // ISO date "2026-03-26"
  readTime: string;           // "6 min read"
  image: string;              // Path to local image or placeholder
  featured: boolean;          // Show on homepage feature grid
}
```

**Known articles (42 total) from Beehiiv sitemap — categorized:**

| Category | Count | Examples |
|----------|-------|---------|
| Rider Profiles | ~12 | Hayley Bell, Erin Sills, Michelle Lamphere, Tracy Charles, Amanda Knapp, Paolo Cattaneo, R-Dub |
| Reviews for Riders | ~10 | TW200, Honda Grom, Goldwing, Hayabusa, Ural, KLR650, CB750, SV650, Ninja 650, Street Triple, HD 883 |
| Epic Rides | ~7 | Colorado High Country Loop, Daytona Loop, Smoky Mountain 500, Women Riders World Rally, North Cascades, Skyline Drive |
| Weekly Newsletter | ~9 | Issues 202 through 0102 |
| Feature Stories | ~4 | Billy Lane Sons of Speed, H.O.G.S, 12 Must-Ride Roads, Unprepared in Paradise, Vietnam scooter story |

---

## 7. Component Inventory

| Component | Description | Priority |
|-----------|-------------|----------|
| `BaseLayout` | HTML shell, fonts, meta, global styles | P0 |
| `Header` | Logo, nav links (Home, Stories, About, Submit), mobile hamburger | P0 |
| `Footer` | Logo, social icons (10), nav, copyright | P0 |
| `Hero` | Full-bleed image, tagline, subscribe form | P0 |
| `ArticleCard` | Image, category badge, title, excerpt, date — links to Beehiiv | P0 |
| `FeaturedGrid` | Asymmetric 2/3 + 1/3 layout for homepage features | P0 |
| `CategoryFilter` | Horizontal tab/pill filter for Stories page | P1 |
| `SubscribeBanner` | Inline email capture with CTA | P1 |
| `PullQuote` | Full-width brand statement section | P1 |
| `CategoryCard` | Visual card for content category browsing | P2 |
| `SocialLinks` | Icon row for all social channels | P0 |

---

## 8. Technical Requirements

### 8.1 Framework & Build

- **Astro 4+** with static output (`output: 'static'`)
- **Tailwind CSS 3+** with custom theme config
- **TypeScript** for type safety on content schemas
- **GitHub Actions** for build + deploy to GitHub Pages
- **No client-side JS** unless explicitly needed (Astro Islands pattern)

### 8.2 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Total Bundle Size (JS) | < 10KB (ideally 0) |
| Image format | WebP with fallback |

### 8.3 SEO

- Semantic HTML (`<article>`, `<nav>`, `<main>`, `<section>`)
- Open Graph + Twitter Card meta on every page
- Structured data (JSON-LD) for articles and organization
- Sitemap.xml generated by Astro
- Canonical URLs pointing to the custom site

### 8.4 Accessibility

- WCAG AA compliance (4.5:1 text contrast, focus visible, keyboard nav)
- `alt` text on all images
- `aria-label` on icon-only buttons
- Skip-to-content link
- `prefers-reduced-motion` respected for all animations

### 8.5 Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 768px | Single column, stacked, hamburger nav |
| Tablet | 768-1023px | 2-column grids, compact nav |
| Desktop | 1024-1439px | Full layout, 3-column grids |
| Wide | 1440px+ | Max-width container, centered |

---

## 9. Phase Roadmap

### Phase 1 — Template Sprint (NOW)

**Goal:** Deployable site on GitHub Pages with brand polish and Beehiiv article links.

- [x] Project structure and documentation
- [ ] Astro project initialization with Tailwind
- [ ] Base layout with fonts, colors, global styles
- [ ] Header + Footer components
- [ ] Homepage: Hero, Featured Grid, Categories, Pull Quote, Subscribe Banner
- [ ] Stories page with category filter
- [ ] About page
- [ ] Submit page (links to Beehiiv form)
- [ ] Article data file with all 42 Beehiiv articles
- [ ] Stock/placeholder images sourced and optimized
- [ ] GitHub Actions deployment pipeline
- [ ] Mobile responsive pass
- [ ] Accessibility audit

### Phase 2 — Content Migration (Future)

- [ ] Astro Content Collections for self-hosted markdown articles
- [ ] Article page template (`/stories/[slug]`)
- [ ] RSS feed generation
- [ ] Image optimization pipeline for contributor photos
- [ ] Migrate top 10 articles from Beehiiv to markdown

### Phase 3 — CMS & Submissions (Future)

- [ ] Decap CMS (or similar) for browser-based editing
- [ ] Story submission form with structured fields + photo upload
- [ ] Email subscribe integration (Beehiiv API or alternative)
- [ ] Contact form

### Phase 4 — Community & Growth (Future)

- [ ] Event calendar (Bike Week, rallies)
- [ ] Merch store integration
- [ ] Member profiles / contributor pages
- [ ] Comments or discussion system
- [ ] Podcast/video embed support
- [ ] Content segmentation by riding style

---

## 10. Article Reference Data

All 42 current Beehiiv articles with URLs for Phase 1 linking:

### Rider Profiles
| Title (derived from slug) | URL | Date |
|---------------------------|-----|------|
| Hayley Bell: On the Edge of Pakistan's Mountain | /p/hayley-bell-on-the-edge-of-pakistans-mountain | 2026-03-26 |
| Erin Sills: The Motorcycle Never Truly Goes Straight | /p/erin-sills-the-motorcycle-never-truly-goes-straight | 2026-02-13 |
| Tracy Charles, Roo, and the Long Way of Letting Go | /p/tracy-charles-roo-and-the-long-way-of-letting-go | 2026-01-29 |
| Amanda Knapp and the Ride She Hasn't Taken Yet | /p/amanda-knapp-and-the-ride-she-hasn-t-taken-yet | 2026-01-15 |
| Paolo Cattaneo: Outrunning Death at His Own Speed | /p/paolo-cattaneo-outrunning-death-at-his-own-speed | 2026-02-26 |
| Michelle Lamphere: The KLR and the Long Way Down | /p/michelle-lamphere-the-klr-and-the-long-way-down | 2025-12-15 |
| R-Dub and the Road Glide Bound for Hawaii | /p/r-dub-and-the-road-glide-bound-for-hawaii | 2025-11-03 |
| Motorcycle Vagabond: Epiphanies & Lessons from Life on the Road | /p/motorcycle-vagabond-epiphanies-lessons-from-life-on-the-road | 2025-11-12 |
| Vietnam, a Scooter, and 56 Days on the Fourth Floor | /p/vietnam-a-scooter-and-56-days-on-the-fourth-floor | 2025-12-31 |
| Unprepared in Paradise | /p/unprepared-in-paradise | 2025-12-01 |

### Reviews for Riders
| Title | URL | Date |
|-------|-----|------|
| Reviews for Riders: TW200 | /p/reviews-for-riders-tw200 | 2026-03-12 |
| Reviews for Riders: Suzuki Hayabusa | /p/reviews-for-riders-suzuki-hayabusa | 2026-03-26 |
| Reviews for Riders: Harley-Davidson 883 | /p/reviews-for-riders-harley-davidson-883 | 2026-02-26 |
| Reviews for Riders: The Ural | /p/reviews-for-riders-the-ural | 2026-02-12 |
| Reviews for Riders: The 2017 Honda Grom | /p/reviews-for-riders-the-2017-honda-grom | 2026-01-14 |
| Reviews for Riders: 2001 Honda Goldwing | /p/reviews-for-riders-2001-honda-goldwing | 2025-10-30 |
| Reviews from the Road: Kawasaki KLR650 | /p/reviews-from-the-road-the-kawasaki-klr650 | 2025-12-15 |
| Reviews for Riders: Kawasaki Ninja 650 | /p/reviews-for-riders-kawasaki-ninja-650 | 2025-12-31 |
| Reviews for Riders: The 1969 Honda CB750 | /p/reviews-for-riders-the-1969-honda-cb750 | 2025-11-06 |
| Reviews for Riders: The 2003 Suzuki SV650 | /p/reviews-for-riders-the-2003-suzuki-sv650 | 2025-11-20 |
| Reviews for Riders: Triumph Street Triple 675 | /p/reviews-for-riders-the-triumph-street-triple-675 | 2026-01-29 |

### Epic Rides
| Title | URL | Date |
|-------|-----|------|
| Epic Rides: The Colorado High Country Loop | /p/epic-rides-the-colorado-high-country-loop | 2026-03-12 |
| Epic Rides: North Cascades Scenic Highway (WA-20) | /p/epic-rides-north-cascades-scenic-highway-wa-20 | 2026-03-26 |
| Epic Rides: Smoky Mountain 500 | /p/epic-rides-smoky-mountain-500 | 2026-02-26 |
| Epic Rides: Women Riders World Rally | /p/epic-rides-women-riders-world-rally | 2026-02-12 |
| Epic Rides: Daytona Loop | /p/epic-rides-daytona-loop | 2026-01-29 |
| Epic Rides: Skyline Drive, Virginia | /p/epic-rides-skyline-drive-virginia | 2026-01-14 |
| 12 Must-Ride American Roads in 2026 | /p/12-must-ride-american-roads-in-2026 | 2025-12-15 |
| Georgia Dragon | /p/georgia-dragon | 2025-12-31 |

### Feature Stories
| Title | URL | Date |
|-------|-----|------|
| Billy Lane: Sons of Speed Race | /p/billy-lane-sons-of-speed-race | 2026-03-12 |
| H.O.G.S | /p/h-o-g-s | 2026-02-12 |
| Diogo Moreira's First Encounter with MotoGP | /p/track-racing-diogo-moreira-s-first-encounter-with-motogp | 2025-11-20 |

### Weekly Newsletter
| Title | URL | Date |
|-------|-----|------|
| Weekly 0102 | /p/american-moto-co-weekly-0102 | 2026-03-26 |
| Weekly 0101 | /p/american-moto-co-weekly-0101 | 2026-03-12 |
| Weekly 909 | /p/american-moto-co-weekly-909 | 2026-02-26 |
| Weekly 808 | /p/american-moto-co-weekly-808 | 2026-02-12 |
| Weekly 707 | /p/american-moto-co-weekly-707 | 2026-01-29 |
| Weekly 606 | /p/american-moto-co-weekly-606 | 2026-01-15 |
| Weekly 505 | /p/american-moto-co-weekly-505 | 2026-01-01 |
| Weekly 404 | /p/american-moto-co-weekly-404 | 2025-12-18 |
| Weekly 303 | /p/american-moto-co-weekly-303 | 2025-12-04 |
| Weekly 202 | /p/american-moto-co-weekly-202 | 2025-11-20 |

---

## 11. Open Questions

1. **Logo file** — Do we have the AMC badge logo as SVG/PNG? Or do we need to recreate it?
2. **Photography** — Can we pull real images from the Beehiiv site, or do we source stock for placeholders?
3. **Custom domain** — Will this live on americanmotoco.com eventually, or a separate domain?
4. **Newsletter integration** — Should the subscribe form hit Beehiiv's API directly, or just link to the Beehiiv subscribe page?
5. **Social links** — Do we have URLs for all 10 social channels, or just some?
