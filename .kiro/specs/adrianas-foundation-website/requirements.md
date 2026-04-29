# Requirements Document: Adriana's Foundation Website Redesign

## Introduction

This document defines the functional and non-functional requirements for the redesign of Adriana's Foundation website — a 501(c)(3) nonprofit empowering Latino youth and women through mentorship, education, and career development. The site is built with Astro 4, Tailwind CSS v4, and deployed to Vercel as a fully static site.

---

## Requirements

### 1. Site Structure and Pages

#### 1.1 Static Site Generation
**User Story**: As a visitor, I want the site to load instantly and work without JavaScript, so that I can access all content regardless of my browser settings or device capabilities.

**Acceptance Criteria**:
- The Astro build produces fully pre-rendered HTML for all pages
- All core content (text, navigation, images) is visible without JavaScript enabled
- No JavaScript is required for page navigation between the 5 pages
- The site deploys successfully to Vercel as a static export

#### 1.2 Five-Page Structure
**User Story**: As a visitor, I want to navigate a clear, organized site structure, so that I can find information about the foundation, its story, programs, and how to get in touch.

**Acceptance Criteria**:
- The site contains exactly these routes: `/` (Home), `/our-story`, `/programs`, `/contact`
- Each page renders with the shared `BaseLayout` including Nav and Footer
- Each page has a unique `<title>` and `<meta name="description">` tag
- The build output contains an HTML file for each route

#### 1.3 Navigation with Programming Dropdown
**User Story**: As a visitor, I want to quickly jump to a specific program from the navigation, so that I don't have to scroll through the entire programs page.

**Acceptance Criteria**:
- The nav contains top-level items: Home, Our Story, Programming (dropdown), Contact Us
- The "Programming" item renders a dropdown with anchor links to all 8 programs
- Each dropdown link has `href="/programs#[program-slug]"`
- The dropdown is accessible via keyboard using `:focus-within` CSS (zero JavaScript)
- The active page link has `aria-current="page"`
- The nav is responsive with a mobile-friendly collapsed state

---

### 2. Home Page

#### 2.1 Hero Section
**User Story**: As a first-time visitor, I want to immediately understand the foundation's mission and feel the brand's energy, so that I'm inspired to learn more.

**Acceptance Criteria**:
- Hero section is full-viewport height
- Displays headline "SHAPING FUTURE LEADERS" in Playfair Display, large, with diagonal/skewed CSS treatment
- Displays subheadline about mentorship, training, and career pathways
- Background uses a community photo with dark overlay (`rgba(10,10,10,0.65)`) and grain texture
- Gold horizontal rule accent is visible below the headline
- A CTA button links to `/programs` or the donate section

#### 2.2 Mission, Vision, and Values
**User Story**: As a visitor, I want to understand the foundation's mission, vision, and core values, so that I can decide if I want to support or participate.

**Acceptance Criteria**:
- Mission statement is displayed: "to develop confident, capable leaders through mentorship, education, and real-world opportunities..."
- Vision statement is displayed: "A future where underserved communities have access to mentorship..."
- Four core values are displayed as styled tags: Growth, Opportunity, Knowledge, Integrity
- Section uses cream background (`#FAF7F2`) to contrast with the dark hero

#### 2.3 What We Do Section
**User Story**: As a visitor, I want a concise explanation of the foundation's programs and approach, so that I understand how they create impact.

**Acceptance Criteria**:
- Section displays the "What We Do" content from `home.md`
- Includes both paragraphs about structured mentorship and bridging the gap
- Visually distinct from adjacent sections

#### 2.4 Impact Statistics
**User Story**: As a potential donor or partner, I want to see concrete impact numbers, so that I can understand the foundation's reach and effectiveness.

**Acceptance Criteria**:
- Displays all 5 statistics: 3,500 Toys Distributed; 5,000 Families Served; 15 Annual Community Events; 50 Community Partners; 150 Volunteers Engaged
- Stat values are displayed in gold (`#D4A017`) using Playfair Display, large numerals
- Labels are displayed in DM Sans below each number
- Stats are arranged in a responsive grid (2-col mobile, up to 5-col desktop)
- Count-up animation triggers when the section enters the viewport (degrades gracefully without JS)
- Section uses dark background for contrast

#### 2.5 Donate CTA Section
**User Story**: As a supporter, I want clear, multiple ways to donate, so that I can contribute in the way that works best for me.

**Acceptance Criteria**:
- A prominent gold "Donate Now" button links externally to the Stripe donation page
- The button has `target="_blank"` and `rel="noopener noreferrer"`
- Mail donation address is displayed: Adriana's Foundation, 9445 Charles Smith Ave, Rancho Cucamonga, CA 91730
- Phone number is displayed as a `tel:` link: (909) 373-4760
- Giving email is displayed as a `mailto:` link: giving@adrianasfoundation.org
- No donation form exists on the site

---

### 3. Our Story Page

#### 3.1 Organization Story
**User Story**: As a visitor, I want to understand the foundation's origin and mission narrative, so that I feel connected to the cause.

**Acceptance Criteria**:
- Displays the Our Story content from `our-story.md`
- Includes the transformation narrative: "From uncertainty to confidence / From low-wage work to career pathways / From limited access to real opportunity"
- Content flows naturally into the Founder section on the same page

#### 3.2 Founder Section
**User Story**: As a visitor, I want to learn about Adriana Gallardo's personal story, so that I understand the human behind the foundation.

**Acceptance Criteria**:
- Displays Adriana's bio from `our-founder.md`
- Includes the nonprofit registration statement (501(c)(3))
- Includes the tagline: "Access creates opportunity. Opportunity creates leaders."

#### 3.3 Founder Quote — Typographic Art Piece
**User Story**: As a visitor, I want to experience Adriana's signature quote as a powerful visual moment, so that her story resonates emotionally.

**Acceptance Criteria**:
- The quote "From undocumented immigrant to insurance empire. Now building economic mobility for the next generation." is rendered as a full-screen (`min-h-screen`) section
- Quote is displayed in Libre Baskerville italic, oversized (≥ 3rem, scaling up to ≥ 5rem on desktop)
- Dark background (`#0A0A0A`) with optional grain texture overlay
- Gold decorative quotation mark or accent line is present
- Attribution "— Adriana Gallardo, Founder" is displayed in DM Sans small caps
- The `<blockquote>` element is used for semantic correctness

---

### 4. Programs Page

#### 4.1 All 8 Programs Displayed
**User Story**: As a visitor, I want to see all of the foundation's programs in one place, so that I can understand the full scope of their work.

**Acceptance Criteria**:
- All 8 programs are rendered: Elevate Academy, Adriana's Soccer Academy, Annual Copa Adriana's Soccer Tournament, Annual Back-to-School Drive, Annual Santa Tour, Festival de La Familia, Annual Food Drive, Global & Community Partnerships
- Each program card displays the program title and a tagline by default
- Programs are arranged in an asymmetric CSS Grid (responsive: 1-col mobile, 2-col tablet, 3-col desktop)
- A section intro with heading and description appears above the grid

#### 4.2 Expandable Program Cards
**User Story**: As a visitor, I want to expand a program card to read more details, so that I can learn about programs that interest me without leaving the page.

**Acceptance Criteria**:
- Each card shows title and tagline in default state
- On hover or keyboard focus (`:focus-within`), the description slides in via CSS `max-height` transition (300ms)
- A chevron icon rotates 180° on expand
- Expand/collapse works without JavaScript
- Cards are keyboard navigable (focusable, accessible)

#### 4.3 Anchor Link Navigation
**User Story**: As a visitor using the nav dropdown, I want clicking a program name to scroll directly to that program card, so that I can navigate efficiently.

**Acceptance Criteria**:
- Each program card has an `id` attribute equal to the program's kebab-case slug (e.g., `id="elevate-academy"`)
- Nav dropdown links use `href="/programs#[slug]"` matching the card `id`
- Native browser anchor navigation works without JavaScript
- All 8 nav dropdown slugs resolve to existing card `id` values

---

### 5. Contact Page

#### 5.1 Categorized Contact Information
**User Story**: As a visitor, I want to find the right email address for my specific inquiry, so that my message reaches the correct team.

**Acceptance Criteria**:
- Page displays 5 contact categories: General Inquiries, Partnerships, Donations & Giving, Press & Media, Programs
- Each category shows a heading, description, and `mailto:` email link
- Email addresses match exactly: info@adrianasfoundation.org, partnerships@adrianasfoundation.org, giving@adrianasfoundation.org, press@adrianasfoundation.org, programs@adrianasfoundation.org
- Email links use `mailto:` protocol
- A "Give Today" / "Make an Impact" CTA links to the Stripe donation page

---

### 6. Design System and Visual Identity

#### 6.1 Color Palette
**User Story**: As a brand stakeholder, I want the site to consistently use the defined color palette, so that the visual identity is cohesive and recognizable.

**Acceptance Criteria**:
- Background dark: `#0A0A0A` used for hero, stats, quote, and dark sections
- Background light: `#FAF7F2` used for mission/values and light sections
- Primary accent gold: `#D4A017` used for stat numbers, CTA buttons, links, and decorative elements
- Secondary accent terracotta: `#C4622D` used for card borders and warm accents
- All colors defined as CSS custom properties via Tailwind CSS v4 `@theme` block

#### 6.2 Typography
**User Story**: As a brand stakeholder, I want the site to use the defined typefaces consistently, so that the editorial and cultural tone is maintained.

**Acceptance Criteria**:
- Display/headline font: Playfair Display (or Cormorant Garamond as alternate) — used for headings, hero text, stat numbers
- Body font: DM Sans — used for body copy, labels, navigation
- Accent/quote font: Libre Baskerville italic — used exclusively for Adriana's quotes
- All fonts are self-hosted via Fontsource packages (no external CDN requests)
- Font imports are declared in `BaseLayout.astro`

#### 6.3 Grain Texture
**User Story**: As a designer, I want the grain texture applied to hero and quote sections, so that the editorial aesthetic is achieved.

**Acceptance Criteria**:
- A grain texture SVG is stored at `public/textures/grain.svg`
- The texture is applied as a CSS background overlay on the Hero and FounderQuote sections
- Texture opacity is ≤ 40% to remain subtle
- The texture element has `aria-hidden="true"` to avoid screen reader noise

---

### 7. Accessibility and Performance

#### 7.1 Image Accessibility
**User Story**: As a screen reader user, I want all images to have descriptive alt text, so that I can understand the visual content.

**Acceptance Criteria**:
- Every `<img>` element has a non-empty `alt` attribute
- Decorative images (grain texture, dividers) use `aria-hidden="true"` or `alt=""`
- All images are processed through `@astrojs/image` for optimization
- Hero image is provided at minimum 2400px wide for quality on large screens

#### 7.2 Keyboard Navigation
**User Story**: As a keyboard-only user, I want to navigate the entire site without a mouse, so that the site is accessible to me.

**Acceptance Criteria**:
- All interactive elements (links, buttons, nav items) are reachable via Tab key
- Focus indicators are visible (not removed via `outline: none` without replacement)
- Nav dropdown is accessible via keyboard using `:focus-within`
- Program cards expand on keyboard focus

#### 7.3 Performance
**User Story**: As a visitor on a slow connection, I want the site to load quickly, so that I'm not frustrated waiting for content.

**Acceptance Criteria**:
- Astro build produces zero render-blocking JavaScript for core pages
- Images are served in WebP/AVIF format with responsive `srcset` via `@astrojs/image`
- Fonts are subset to Latin characters only
- Lighthouse Performance score ≥ 90 on Home page

#### 7.4 External Link Security
**User Story**: As a security-conscious visitor, I want external links to be safe, so that I'm not exposed to tab-napping attacks.

**Acceptance Criteria**:
- All external links (Stripe donate, any partner links) have `rel="noopener noreferrer"`
- All external links open in a new tab (`target="_blank"`)
- No user data is collected or transmitted by the site itself

---

### 8. Content and Data

#### 8.1 Program Data Source
**User Story**: As a developer, I want program content defined in a typed TypeScript file, so that content changes are validated at build time.

**Acceptance Criteria**:
- `src/content/programs.ts` exports a `Program[]` array with all 8 programs
- Each program implements the `Program` interface (id, title, tagline, description, goals, keyComponents, category)
- TypeScript compilation fails if any required field is missing
- Program `id` values are unique across all 8 entries

#### 8.2 Slug Consistency
**User Story**: As a developer, I want program slugs to be derived consistently from titles, so that nav anchor links always match card ids.

**Acceptance Criteria**:
- A `slugify(title: string): string` utility function exists
- `slugify` returns lowercase kebab-case matching `/^[a-z0-9-]+$/`
- Both program card `id` attributes and nav dropdown `href` values use `slugify()` on the same source title
- No hardcoded slug strings exist in nav or card components
