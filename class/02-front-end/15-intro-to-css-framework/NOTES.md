# Notes
## Global.css
/* menargetkan komponen / element terluar */
:root {
  /* Membuat variable CSS */
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

/* media query untuk memeriksa piliha tema komputer kita */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
# Styles

## Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

- Yellow: hsl(47, 88%, 63%)

- White: hsl(0, 0%, 100%)

- Gray 500: hsl(0, 0%, 42%)
- Gray 950: hsl(0, 0%, 7%)

## Typography

### Body Copy

- Font size (paragraph): 16px

### Font

- Family: [Figtree](https://fonts.google.com/specimen/Figtree)
- Weights: 500, 800

> 💎 This is a free+ challenge. So, if you want to see all the design details and practice working with professional tools like Figma, you can download the design file from where you downloaded the starter code.



