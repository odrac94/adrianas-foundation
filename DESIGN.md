# Design System: Adriana's Foundation

## 1. Visual Theme & Atmosphere

The design language is **warm, purposeful, and community-driven** — blending nonprofit gravitas with an approachable, modern editorial aesthetic. The overall atmosphere is one of quiet confidence: deep navy foundations anchored by radiant gold accents that evoke optimism and upward mobility.

The visual density is **medium-to-generous** — sections breathe with ample whitespace (6rem vertical padding), yet content areas feel rich and layered through overlapping photo collages, gradient meshes, and subtle grain textures. The mood oscillates between two poles:

- **Dark, immersive sections** (hero, stats, program cards) that feel cinematic and aspirational
- **Warm, light sections** (mission, story, donate) that feel inviting and community-oriented

A fine **grain texture overlay** (SVG, 200×200px repeat, 10–30% opacity with `mix-blend-mode: overlay`) is applied across hero and CTA sections, lending an organic, tactile quality that softens the digital feel — like printed paper or woven fabric.

---

## 2. Color Palette & Roles

### Primary Colors

* **Deep Maritime Navy** (`#0A1F2D`) — The foundational dark tone. Used for the navigation bar, footer, hero text, and as the primary text color on light backgrounds. Conveys authority and trust.

* **Radiant Marigold Gold** (`#E9AD00`) — The signature accent. Used for primary CTAs, stat values, headline accents, eyebrow labels, decorative elements, and focus outlines. Represents optimism, growth, and opportunity.

* **Brightened Gold** (`#FFD040`) — Hover state for gold elements. A warmer, lighter variant that provides clear interactive feedback.

### Secondary Colors

* **Institutional Cerulean** (`#06579A`) — A mid-tone blue used for secondary accents, section labels ("Who We Are," "What We Do"), icon containers, blockquote borders, and category badges. Named `--color-terracotta` in the codebase (a legacy naming choice), it functions as the secondary brand blue.

* **Midnight Blue** (`#0D3456`) — A slightly lighter navy used for dropdown menus, the stats section background, and partnership category badges. Provides depth variation within dark sections.

### Neutral & Background Colors

* **Soft Warm Gray** (`#EDEDED` / `--color-bg-light-gray`) — The primary light background for content sections. Clean without being stark white.

* **Golden Mist** (`rgba(233, 173, 0, 0.15)` / `--color-bg-warm`) — A warm, translucent gold wash used for mission, founder, story, and donate sections. Creates a sun-kissed warmth that differentiates these sections from the neutral gray.

* **Pure White** (`#FFFFFF`) — Body background and card interiors on light sections.

* **Pure Black** (`#000000`) — Used at reduced opacities for body text on light backgrounds (typically 0.65–0.8 alpha).

### Text Colors

* **Muted Cloud** (`rgba(255, 255, 255, 0.6)` / `--color-text-muted`) — Secondary text on dark backgrounds (stats labels, footer links, taglines).

* **Faded Ink** (`rgba(0, 0, 0, 0.65–0.7)`) — Body paragraph text on light backgrounds.

* **Whisper Gray** (`rgba(255, 255, 255, 0.35–0.4)`) — Tertiary text (copyright, footnotes) on dark backgrounds.

---

## 3. Typography Rules

### Font Families

* **Display / Headlines:** `Playfair Display` (serif) — Used at weights 700 and 900. Provides editorial elegance and visual authority for all section headings. Tight letter-spacing (`-0.02em` to `-0.03em`) and compressed line-height (0.93–1.2) create dramatic, poster-like headlines.

* **Body / UI:** `DM Sans` (sans-serif) — Used at weights 400, 500, 600, and 700. The workhorse font for paragraphs, labels, buttons, navigation, and all interface text. Clean geometric forms with excellent readability at small sizes.

* **Accent / Quotes:** `Libre Baskerville` (serif) — Used in italic for blockquotes, taglines, and subheadings that need a literary, reflective quality. Adds warmth and personality to callout text.

* **Alternate Display:** `Cormorant Garamond` (serif) — Available at weights 400 and 600 as an alternate display option. Reserved for special typographic moments.

### Typographic Hierarchy

| Level | Font | Size | Weight | Tracking |
|-------|------|------|--------|----------|
| H1 (Hero) | Playfair Display | clamp(2.75rem, 5.5vw, 4.25rem) | 900 | -0.03em |
| H2 (Section) | Playfair Display | clamp(1.75rem–2.5rem, 3–5vw, 2.75rem–4.5rem) | 700–900 | -0.02em |
| H3 (Card/Pillar) | Playfair Display | 1.25rem–1.75rem | 700 | normal |
| Body Large | DM Sans | 1.25rem | 400 | normal |
| Body | DM Sans | 1.0625rem | 400 | normal |
| Label/Eyebrow | DM Sans | 0.6875rem–1rem | 700 | 0.12em–0.15em |
| Caption | DM Sans | 0.75rem | 600–700 | 0.08em |

### Typographic Patterns

- **Section eyebrows** are always uppercase, bold, with generous letter-spacing (0.12–0.15em), colored in Institutional Cerulean or Marigold Gold
- **Italic emphasis** within headlines uses the gold or cerulean accent color to highlight key words
- **Blockquotes** use Libre Baskerville italic at larger sizes (up to 2rem) with a left border accent

---

## 4. Component Stylings

### Buttons

* **Primary CTA:** Pill-shaped (`border-radius: 3rem`) with Marigold Gold background and Deep Navy text. Bold weight (700), 0.9375rem–1rem size, generous padding (1rem 2rem). On hover: brightens to `#FFD040`, lifts 2px, and gains a warm golden glow shadow (`0 8px 24px rgba(233, 173, 0, 0.35)`). Used for "Apply for the Program," "Learn How It Works."

* **Secondary CTA (Outlined):** Pill-shaped with transparent background, 2px Deep Navy border, and Deep Navy text. On hover: fills with Deep Navy background, text turns gold, lifts 2px. Used for "Support Our Mission."

* **Tertiary CTA (Donate/Nav):** Subtly rounded corners (`border-radius: 0.375rem`) with Marigold Gold background. Compact padding (0.5rem 1.25rem for nav, 0.75rem 1.75rem for footer). Same hover behavior as primary but without the pill shape.

* **Text Link CTA:** No background or border. Cerulean-colored text with an inline arrow icon. On hover: the gap between text and arrow widens (gap animation from 0.5rem to 0.75rem). Used for "See All Programs," "Learn More."

### Cards & Containers

* **Program Cards (Dark):** Generously rounded corners (`border-radius: 0.75rem`). Near-transparent dark background (`rgba(255, 255, 255, 0.03)`) with a subtle 1px border (`rgba(255, 255, 255, 0.08)`). On hover: border takes the category accent color, card lifts 4px, gains a deep shadow (`0 12px 32px rgba(0, 0, 0, 0.25)`), and a 2px accent line animates in from the left along the bottom edge.

* **Pillar Cards (Light):** Gently rounded corners (`border-radius: 0.5rem`). Semi-transparent white background (`rgba(255, 255, 255, 0.6)`) with a hairline border (`rgba(0, 0, 0, 0.08)`). On hover: border warms to gold tint, background shifts to golden mist.

* **Callout/Blockquote Containers:** Squared-off on the left with a 3px Cerulean left border, subtly rounded on the right (`border-radius: 0 0.375rem 0.375rem 0`). Light blue-tinted background (`rgba(6, 87, 154, 0.08)`).

* **Nonprofit Badge Containers:** Gently rounded (`border-radius: 0.5rem`). Golden mist background with a 1px gold border (`rgba(233, 173, 0, 0.3)`).

* **Photo Frames:** Moderately rounded (`border-radius: 0.625rem–1rem`). Often include gradient overlays that fade from transparent to dark navy at the bottom, creating depth and allowing text overlays.

### Inputs & Forms

* **Icon Containers:** Subtly rounded (`border-radius: 0.375rem`). Light cerulean background (`rgba(6, 87, 154, 0.1)`) with a 1px cerulean-tinted border. Cerulean icon color.

### Tags & Badges

* **Value Tags:** Pill-shaped (`border-radius: 2rem`). Transparent background with a 1px gold-tinted border (`rgba(233, 173, 0, 0.4)`). On hover: border solidifies to full gold, background fills with golden mist.

* **Category Badges:** Pill-shaped. Dark semi-transparent background with backdrop blur. 1px border matching the category accent color. Tiny uppercase text (0.5625rem).

* **Eyebrow Badges:** Pill-shaped (`border-radius: 2rem`). Transparent background with a 1px tinted border. Uppercase, tiny (0.75rem), bold, with generous letter-spacing.

---

## 5. Layout Principles

### Grid System

- **Max content width:** 1280px, centered with `margin: 0 auto`
- **Horizontal padding:** 1.5rem on all containers (consistent edge breathing room)
- **Primary grid:** Two-column asymmetric layouts dominate (1fr 1.1fr, 1fr 1.2fr, 1fr 1.5fr) — the content column is always slightly wider than the media/secondary column
- **Column gaps:** 3rem–6rem depending on section density
- **Stats grid:** Equal columns (repeat(5, 1fr)) with 1px gap borders creating a table-like structure

### Vertical Rhythm & Spacing

- **Section padding:** 6rem top and bottom (`--spacing-section`), creating generous breathing room between content blocks
- **Heading-to-body gap:** 1.25rem–1.5rem
- **Body-to-CTA gap:** 2–2.5rem
- **Label-to-heading gap:** 1.25rem–1.75rem
- **Card internal padding:** 1.5rem–2rem
- **Grid item gaps:** 0.625rem–1.5rem

### Responsive Strategy

- **1024px breakpoint:** Grids collapse to single column; collage heights reduce
- **900px breakpoint:** Two-column content layouts stack; images reorder above text
- **768px breakpoint:** Desktop navigation hides; mobile hamburger appears
- **640px breakpoint:** Multi-column grids become single column; padding reduces

### Depth & Elevation

The design uses a **layered, atmospheric depth model** rather than heavy drop shadows:

- **Level 0 (Flat):** Most content sits flat with no shadow — cards, tags, and containers rely on borders and background color for separation
- **Level 1 (Whisper):** Subtle shadows on hover states (`0 8px 24px rgba(0, 0, 0, 0.08–0.12)`) — barely perceptible lift
- **Level 2 (Glow):** Gold-tinted shadows on primary CTAs (`0 4px 16px rgba(233, 173, 0, 0.25)`) that intensify on hover — creates a warm, radiant elevation
- **Level 3 (Cinematic):** Deep shadows on photo frames and hovered cards (`0 20px 48px rgba(0, 0, 0, 0.12)`) — reserved for hero imagery and dramatic moments
- **Backdrop blur:** Used on the fixed navigation (`blur(12px)`) and floating badges (`blur(4px–8px)`) to create frosted-glass depth

### Animation & Motion

- **Entrance animations:** Scroll-triggered via IntersectionObserver. Elements fade in with 32px translation (up, left, or right) over 0.7s using a spring-like easing (`cubic-bezier(0.16, 1, 0.3, 1)`)
- **Stagger pattern:** Children animate sequentially with 70ms delays between items
- **Hover transitions:** Quick and subtle (0.15–0.2s) — typically a 2px upward lift with shadow intensification
- **Hero word reveal:** Each word animates individually with a slight skew rotation, creating a typewriter-meets-curtain-rise effect
- **Photo crossfade:** Collage images cycle with 6s per image, smooth opacity transitions
- **Reduced motion:** All animations respect `prefers-reduced-motion: reduce` — instantly visible, no transforms

---

## 6. Decorative Patterns

* **Mesh gradients:** Radial gradient ellipses in gold tones layered behind hero content, creating a warm atmospheric glow
* **Grain texture:** SVG noise pattern repeated at 200×200px, applied at low opacity with overlay blend mode
* **Gold accent lines:** 2px-tall horizontal rules (2.5rem wide) used as visual separators between label and content
* **Floating ring:** A 5rem circular border element (1.5px, gold at 40% opacity) that rotates slowly (20s infinite)
* **Pulsing dot:** A 0.5rem gold circle with a glowing box-shadow that scales between 1× and 1.5× on a 3s loop
* **Photo offset borders:** A 2px gold border positioned 10px behind and below founder photos, creating a layered frame effect
* **Bottom fades:** Linear gradients from transparent to the next section's background color, creating seamless transitions between sections
