# American Moto Co — Design Tokens Reference

## Colors

### Primary Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `dark` | `#1A1A1A` | 26, 26, 26 | Primary background, hero overlay |
| `charcoal` | `#2A2A2A` | 42, 42, 42 | Card backgrounds, secondary surfaces |
| `mauve` | `#804D4D` | 128, 77, 77 | Primary brand color — nav accents, borders, hover states |
| `gold` | `#DDC618` | 221, 198, 24 | CTA buttons, highlights, badges, links |
| `sage` | `#436138` | 67, 97, 56 | Secondary accent — category badges, success states |
| `cream` | `#F5F0E1` | 245, 240, 225 | Body text on dark backgrounds |
| `white` | `#FFFFFF` | 255, 255, 255 | Headings, high-emphasis text on dark |

### Functional Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `error` | `#C0392B` | Error states, destructive actions |
| `success` | `#436138` | Same as sage — success confirmations |
| `surface-hover` | `#333333` | Card hover background |
| `border` | `#3A3A3A` | Subtle borders on dark backgrounds |
| `text-muted` | `#A0998A` | De-emphasized text, timestamps, meta |

### Category Badge Colors

| Category | Background | Text |
|----------|-----------|------|
| Profiles | `#804D4D` (mauve) | `#FFFFFF` |
| Reviews | `#436138` (sage) | `#FFFFFF` |
| Epic Rides | `#DDC618` (gold) | `#1A1A1A` |
| Weekly | `#2A2A2A` (charcoal) | `#F5F0E1` (cream) |
| Features | `#5C4033` (dark brown) | `#FFFFFF` |

## Typography

### Font Stack

```css
--font-heading: 'League Spartan', system-ui, sans-serif;
--font-body: 'Roboto', system-ui, sans-serif;
```

### Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap');
```

### Type Scale

| Token | Size | Weight | Line Height | Font | Usage |
|-------|------|--------|-------------|------|-------|
| `display` | clamp(2.5rem, 5vw, 4rem) | 800 | 1.1 | Heading | Hero headline only |
| `h1` | clamp(2rem, 4vw, 3rem) | 700 | 1.2 | Heading | Page titles |
| `h2` | clamp(1.5rem, 3vw, 2rem) | 700 | 1.2 | Heading | Section titles |
| `h3` | 1.25rem | 600 | 1.3 | Heading | Card titles, subsections |
| `h4` | 1.125rem | 600 | 1.4 | Heading | Small headings |
| `body-lg` | 1.125rem | 400 | 1.7 | Body | Article body, feature text |
| `body` | 1rem | 400 | 1.6 | Body | Default body text |
| `small` | 0.875rem | 400 | 1.5 | Body | Meta, captions, timestamps |
| `xs` | 0.75rem | 300 | 1.4 | Body | Labels, badges |

## Spacing

### Base Unit: 4px

| Token | Value | Common Usage |
|-------|-------|-------------|
| `space-1` | 4px | Tight gaps, icon padding |
| `space-2` | 8px | Inline spacing, small gaps |
| `space-3` | 12px | Form field padding |
| `space-4` | 16px | Default padding, card padding |
| `space-6` | 24px | Section sub-padding |
| `space-8` | 32px | Component gaps |
| `space-12` | 48px | Large gaps between components |
| `space-16` | 64px | Section padding (mobile) |
| `space-24` | 96px | Section padding (desktop) |
| `space-32` | 128px | Hero vertical padding |

### Layout

| Token | Value | Usage |
|-------|-------|-------|
| `max-width-site` | 1280px | Outer container |
| `max-width-content` | 768px | Article body, narrow sections |
| `max-width-wide` | 1024px | Wide content sections |
| `nav-height` | 72px | Fixed header height |
| `border-radius-sm` | 4px | Buttons, badges |
| `border-radius-md` | 8px | Cards, inputs |
| `border-radius-lg` | 16px | Large cards, modals |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-card` | `0 2px 8px rgba(0,0,0,0.3)` | Default card shadow |
| `shadow-card-hover` | `0 8px 24px rgba(0,0,0,0.4)` | Card hover state |
| `shadow-nav` | `0 1px 0 rgba(255,255,255,0.05)` | Header bottom border effect |

## Transitions

| Token | Value | Usage |
|-------|-------|-------|
| `transition-fast` | `150ms ease` | Color changes, opacity |
| `transition-default` | `200ms ease` | Most hover states |
| `transition-slow` | `300ms ease` | Card transforms, reveals |

## Breakpoints

| Token | Value | Tailwind |
|-------|-------|----------|
| `sm` | 640px | `sm:` |
| `md` | 768px | `md:` |
| `lg` | 1024px | `lg:` |
| `xl` | 1280px | `xl:` |
| `2xl` | 1440px | `2xl:` |

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `z-base` | 0 | Default |
| `z-card` | 10 | Cards, interactive surfaces |
| `z-sticky` | 20 | Sticky elements |
| `z-nav` | 30 | Header navigation |
| `z-overlay` | 40 | Overlays, backdrops |
| `z-modal` | 50 | Modals, drawers |
