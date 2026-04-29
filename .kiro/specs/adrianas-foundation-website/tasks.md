# Tasks: Adriana's Foundation Website Redesign

## Implementation Plan

### 1. Project Setup and Configuration

- [x] 1.1 Initialize Astro 4 project with TypeScript
  - Run `npm create astro@latest` with strict TypeScript template
  - Configure `astro.config.mjs` with `output: 'static'` and Vercel adapter
  - Add `.nvmrc` or `engines` field pinning Node version

- [x] 1.2 Install and configure Tailwind CSS v4
  - Install `tailwindcss@^4` and `@astrojs/tailwind`
  - Create `src/styles/global.css` with `@theme` block defining all design tokens (colors, fonts, spacing)
  - Verify Tailwind v4 `@theme` custom properties are emitted in build output

- [x] 1.3 Install Fontsource font packages
  - Install `@fontsource/playfair-display`, `@fontsource/dm-sans`, `@fontsource/libre-baskerville`, `@fontsource/cormorant-garamond`
  - Import Latin subsets only in `BaseLayout.astro`

- [x] 1.4 Install and configure `@astrojs/image`
  - Add `@astrojs/image` integration to `astro.config.mjs`
  - Configure Sharp as the image service

- [x] 1.5 Create grain texture SVG
  - Create `public/textures/grain.svg` as a small repeating noise pattern (< 2KB)

- [x] 1.6 Set up Vitest and fast-check for testing
  - Install `vitest` and `fast-check`
  - Create `vitest.config.ts`

---

### 2. Content Data Layer

- [x] 2.1 Define TypeScript interfaces
  - Create `src/types/index.ts` with `Program`, `Stat`, `NavItem`, `ContactEntry`, `Value` interfaces

- [x] 2.2 Create programs content file
  - Create `src/content/programs.ts` exporting `Program[]` with all 8 programs
  - Include: id (slugified), title, tagline, description, goals, keyComponents, category
  - Data sourced from `programming.md`

- [x] 2.3 Create impact stats content file
  - Create `src/content/impact.ts` exporting `Stat[]` with all 5 statistics
  - Data sourced from `home.md`

- [x] 2.4 Create navigation content file
  - Create `src/content/navigation.ts` exporting `NavItem[]`
  - "Programming" item children derived from `getPrograms()` using `slugify()`

- [x] 2.5 Implement `slugify` utility function
  - Create `src/utils/slugify.ts`
  - Function converts title strings to lowercase kebab-case matching `/^[a-z0-9-]+$/`
  - Handle accented characters (normalize to ASCII)

- [x] 2.6 Write unit and property-based tests for utilities
  - Test `slugify()` with standard titles, special characters, accented characters
  - Property test: `slugify(s)` always matches `/^[a-z0-9-]+$/` for any non-empty string
  - Test `buildNavItems()` returns 8 program children
  - Property test: all program `id` values are unique

---

### 3. Layout and Global Components

- [x] 3.1 Create `BaseLayout.astro`
  - Props: `title`, `description`, `ogImage?`
  - Include font imports, global CSS, `<Nav />`, `<slot />`, `<Footer />`
  - Set Open Graph meta tags

- [x] 3.2 Create `Nav.astro`
  - Render top-level nav items from `navigation.ts`
  - CSS-only dropdown via `group-hover` and `group-focus-within` Tailwind classes
  - Mobile hamburger using `<details>` element (zero JS)
  - `aria-current="page"` on active link using `Astro.url.pathname`

- [x] 3.3 Create `Footer.astro`
  - Foundation name, address, phone, email
  - Social links (if applicable)
  - Copyright line with current year

---

### 4. Home Page Components

- [x] 4.1 Create `Hero.astro`
  - Full-viewport section with background image + dark overlay + grain texture
  - Headline in Playfair Display with diagonal CSS skew transform
  - Gold horizontal rule accent
  - Subheadline and CTA button

- [x] 4.2 Create `MissionValues.astro`
  - Mission and Vision as large editorial text blocks
  - Core values as gold-accented pill tags
  - Cream background section

- [x] 4.3 Create `WhatWeDo.astro`
  - Two-paragraph section from `home.md`
  - Editorial layout with optional decorative element

- [x] 4.4 Create `ImpactStats.astro`
  - Responsive grid of 5 stat blocks
  - Gold Playfair Display numerals with `data-value` attributes
  - Inline `<script>` for `IntersectionObserver` count-up animation
  - Graceful degradation: final values visible without JS

- [x] 4.5 Create `DonateCTA.astro`
  - Gold primary button → Stripe external link (`target="_blank" rel="noopener noreferrer"`)
  - Mail address block
  - `tel:` and `mailto:` links
  - Dark background section

- [x] 4.6 Assemble `pages/index.astro`
  - Compose all home components in order: Hero, MissionValues, WhatWeDo, ImpactStats, DonateCTA

---

### 5. Our Story Page

- [x] 5.1 Create `StorySection.astro`
  - Render Our Story content from `our-story.md`
  - Transformation list ("From uncertainty to confidence…") as styled list

- [x] 5.2 Create `FounderSection.astro`
  - Adriana's bio and nonprofit registration statement
  - "Access creates opportunity. Opportunity creates leaders." tagline

- [x] 5.3 Create `FounderQuote.astro`
  - Full-screen (`min-h-screen`) dark section
  - `<blockquote>` with Libre Baskerville italic, oversized quote text
  - Gold decorative quotation mark (`aria-hidden="true"`)
  - Grain texture overlay
  - Attribution in DM Sans small caps

- [x] 5.4 Assemble `pages/our-story.astro`
  - Compose: StorySection → FounderQuote → FounderSection

---

### 6. Programs Page

- [x] 6.1 Create `ProgramCard.astro`
  - Props: `program: Program`
  - `id={program.id}` for anchor navigation
  - Default state: title + tagline
  - CSS `max-height` expand on `:hover` / `:focus-within`
  - Chevron rotation via `group-hover:rotate-180`
  - Terracotta border accent on hover

- [x] 6.2 Create `ProgramGrid.astro`
  - Props: `programs: Program[]`
  - Asymmetric CSS Grid with some cards spanning 2 columns
  - Responsive: 1-col → 2-col → 3-col
  - Section intro heading and description above grid

- [x] 6.3 Assemble `pages/programs.astro`
  - Import `getPrograms()` and pass to `ProgramGrid`
  - Page heading and intro copy

---

### 7. Contact Page

- [x] 7.1 Create `ContactCategory.astro`
  - Props: `entry: ContactEntry`
  - Category heading, description, `mailto:` link
  - Gold underline on email hover

- [x] 7.2 Assemble `pages/contact.astro`
  - Render all 5 contact categories
  - Page heading: "We'd love to hear from you"
  - "Give Today" CTA linking to Stripe

---

### 8. Accessibility and Quality

- [x] 8.1 Audit all images for alt text
  - Verify every `<img>` has non-empty `alt` or `aria-hidden="true"` for decorative images
  - Verify grain texture elements have `aria-hidden="true"`

- [x] 8.2 Audit keyboard navigation
  - Tab through all pages verifying focus order and visible focus indicators
  - Verify nav dropdown accessible via keyboard
  - Verify program cards expand on keyboard focus

- [x] 8.3 Validate HTML output
  - Install `html-validate` and run against build output
  - Fix any semantic HTML errors

- [x] 8.4 Verify external link security
  - Audit all `<a target="_blank">` links for `rel="noopener noreferrer"`

---

### 9. Build and Deployment

- [x] 9.1 Configure Vercel deployment
  - Add `vercel.json` with security headers (CSP, X-Frame-Options, etc.)
  - Verify `astro build` produces static output in `dist/`

- [x] 9.2 Run full build verification
  - `astro build` completes without errors
  - All 4 pages present in `dist/`
  - No broken internal links

- [x] 9.3 Run test suite
  - `vitest --run` passes all unit and property-based tests
