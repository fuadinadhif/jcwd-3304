# NOTES

## Global.css

```css
/* Import/enable TailwindCSS functionality */
@import "tailwindcss";

/* Menargetkan komponen / element terluar */
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

/* Media query untuk memeriksa pilihan tema komputer kita */
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

.title {
  font-size: 72px;
  font-weight: bold;
  color: oklch(76.9% 0.188 70.08);
}
```

# Styles

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

# Layout

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- displays site properly based on user's device -->

    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./assets/images/favicon-32x32.png"
    />

    <title>Frontend Mentor | Blog preview card</title>

    <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
    <style>
      .attribution {
        font-size: 11px;
        text-align: center;
      }
      .attribution a {
        color: hsl(228, 45%, 44%);
      }
    </style>
  </head>
  <body>
    Learning Published 21 Dec 2023 HTML & CSS foundations These languages are
    the backbone of every website, defining structure, content, and
    presentation. Greg Hooper

    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.
    </div>
  </body>
</html>
```
