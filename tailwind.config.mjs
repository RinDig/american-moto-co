/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#1A1A1A',
        charcoal: '#2A2A2A',
        mauve: '#804D4D',
        gold: '#C8A94E',
        sage: '#2D5A27',
        forest: '#1B3A1A',
        cream: '#FAF9F6',
        sand: '#F0EDE5',
        'surface-hover': '#333333',
        'border-subtle': '#3A3A3A',
        'border-light': '#E5E2DB',
        muted: '#A0998A',
        ink: '#2A2A2A',
        'ink-light': '#5A5A5A',
        'dark-brown': '#5C4033',
      },
      fontFamily: {
        heading: ['"League Spartan"', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', fontWeight: '800' }],
        h1: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', fontWeight: '700' }],
        h3: ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
      },
      maxWidth: {
        site: '1280px',
        content: '768px',
        wide: '1024px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 32px rgba(0,0,0,0.12)',
        'card-dark': '0 2px 8px rgba(0,0,0,0.3)',
        'card-dark-hover': '0 8px 24px rgba(0,0,0,0.4)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
};
