# NEXTJS TYPESCRIPT TAILWIND STARTER TEMPLATE

This project is built with [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/) & [TypeScript](https://www.typescriptlang.org/).

## Features

- Responsive Javascript
- Custom 404 page
- Tailwind stylesheet minification and optimisation.
- Template for optimal metadata (Lighthouse SEO score = 100)
- Automatic sitemap
- Staging environment support
- Accessbility linting
- First class Visual Studio Code integration

## Getting Started

First, install the required packages:

```bash
npm run install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

- **Always** run `yarn run build && yarn run start` to see how the code works in a production environment before committing.

- For staging environments use `build:staging` and `start:staging`.

  - This updates the system environment variables and page metadata.

- The [axe-react](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md) plugin is used for accessbility testing.

- Uses [Headwind](https://github.com/heybourn/headwind) VSCode extension for sorting Tailwind classes.

- Uses [classnames](https://www.npmjs.com/package/classnames) to organise our classes into groups that combine at build time.

### Tailwind Style Guide

#### React

```jsx
  <div className={classNames(
    "general classes here - colors, fonts, padding, margin etc",
    "each responsive class utility should have it's own string md: lg: etc."
    "placeholder classes",
    "animations, transforms, effect",
    "pseudo classes i.e hover, focus, active, etc.",
    "toggling classes i.e. NavMenu isExpanded"
  )}></div>
```

#### CSS

Any custom CSS classes should be written in [globals.css](styles/globals.css).

```css
.custom-class {
  @apply general classes here - colors, fonts, padding, margin;
  @apply group breakpointed classes into their own strings;
  @apply placeholder classes;
  @apply animations, transforms, effect;
  @apply pseudo classes i.e hover, focus, active;
}
```

### Notes

- We can't use template literals with classes if we want to purge the CSS.
  - https://github.com/tailwindlabs/tailwindcss/issues/2209#issuecomment-677855297
  - https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
  - Avoid: `hover:bg-black hover:text-${bgColor}`
  - Do: `const hoverClasses = [backgroundColor === 'black' && 'bg-black hover:text-black'];`

## Deployment

1. Once you have a domain replace all instances of `YOUR_DOMAIN_HERE` in this project.
2. Edit [constants/metadata.ts](constants/metadata.ts) with your project info for accurate metadata and effective SEO.
