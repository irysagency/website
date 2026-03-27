/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        secondary: 'var(--color-text-secondary)',
        muted: 'var(--color-text-muted)',
        subdued: 'var(--color-text-subdued)',
        faint: 'var(--color-text-faint)',
        separator: 'var(--color-separator)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-outfit)', 'var(--font-dm-sans)', 'sans-serif'],
        display: ['IvyPresto', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
