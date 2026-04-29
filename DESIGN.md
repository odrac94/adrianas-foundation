# Design System — Adriana's Foundation Website

## Overview

Sistema de diseño para el sitio web de Adriana's Foundation, una organización 501(c)(3) que empodera a jóvenes y mujeres latinas. Construido con Astro 4, Tailwind CSS y desplegado en Vercel como sitio estático. El lenguaje visual es editorial moderno con alma latina: azul navy profundo, acentos dorados, tipografía audaz y texturas que honran la historia de Adriana Gallardo.

---

## 1. Paleta de Colores

### Colores Primarios

| Token | Hex | Uso |
|---|---|---|
| `--color-bg-dark` | `#0A1F2D` | Fondo principal (navy profundo) |
| `--color-gold` | `#E9AD00` | Acento principal, CTAs, iconos, labels |
| `--color-terracotta` | `#06579A` | Azul medio, enlaces, headings secundarios |

### Colores Secundarios

| Hex | Uso |
|---|---|
| `#0D3456` | Fondo de cards, paneles, secciones alternas |
| `#FFD040` | Hover state del dorado (más claro) |
| `#4A9BD9` | Categoría "community" en programas |
| `#7BCFED` | Categoría "partnership" en programas |

### Colores de Texto

| Token | Valor | Uso |
|---|---|---|
| `--color-text-light` | `#FFFFFF` | Texto principal sobre fondos oscuros |
| `--color-text-dark` | `#000000` | Texto sobre fondos claros (mission section) |
| `--color-text-muted` | `rgba(255,255,255,0.7)` | Texto secundario sobre oscuro |
| — | `rgba(255,255,255,0.45-0.65)` | Texto terciario, subtítulos, descripciones |
| — | `rgba(255,255,255,0.35)` | Labels mínimos (footer, section titles) |

### Fondos con Transparencia

| Valor | Uso |
|---|---|
| `rgba(233,173,0,0.15)` | Fondo warm/gold (MissionValues section) |
| `rgba(233,173,0,0.08-0.18)` | Hover states, icon backgrounds |
| `rgba(6,87,154,0.15)` | Fondo de blockquotes, callouts |
| `rgba(255,255,255,0.03-0.06)` | Cards sobre fondo oscuro |
| `rgba(255,255,255,0.06-0.08)` | Bordes sutiles |

---

## 2. Tipografía

### Font Stack

| Variable | Familia | Pesos | Uso |
|---|---|---|---|
| `--font-display` | Playfair Display | 400, 700, 900 | Headlines, títulos de sección, números de stats |
| `--font-body` | DM Sans | 400, 500, 700 | Body text, labels, botones, navegación |
| `--font-accent` | Libre Baskerville | 400, 400i, 700 | Citas, subtítulos itálicos, callouts |

### Escala Tipográfica

| Elemento | Tamaño | Peso | Font |
|---|---|---|---|
| Hero headline | `clamp(2.75rem, 5.5vw, 5.5rem)` | 900 | Display |
| Page title (h1) | `clamp(2.5rem, 6vw, 5rem)` | 900 | Display |
| Section heading (h2) | `clamp(1.75rem, 3vw, 2.75rem)` | 700 | Display |
| Card title (h3) | `1.125rem - 1.75rem` | 700 | Display |
| Body text | `1rem - 1.25rem` | 400-500 | Body |
| Small text / labels | `0.6875rem - 0.875rem` | 600-700 | Body |
| Section label (eyebrow) | `1rem` | 700 | Body, uppercase, `letter-spacing: 0.15em` |
| Stats numbers | `clamp(2.25rem, 4vw, 3.5rem)` | 900 | Display |
| Quote text | `1.0625rem - 2rem` | 400i | Accent |

### Convenciones

- Labels/eyebrows: siempre `uppercase`, `letter-spacing: 0.12-0.15em`, color dorado
- Palabras de énfasis en headlines: `color: #E9AD00` o `color: #06579A`, `font-style: italic`
- Line-height: body `1.6-1.75`, headlines `1-1.2`

---

## 3. Espaciado y Layout

### Container

```css
max-width: 1280px;
margin: 0 auto;
padding: 0 1.5rem;
```

### Secciones

| Propiedad | Valor |
|---|---|
| Padding vertical | `6rem 0` (estándar), `8rem 0 6rem` (story) |
| Gap entre columnas | `3rem - 6rem` |
| Gap entre cards | `0.875rem - 1.5rem` |

### Grid Patterns

| Layout | Columnas Desktop | Mobile |
|---|---|---|
| Hero | `1fr 1.1fr` | `1fr` |
| Two-column (WhatWeDo, Story) | `1fr 1.2-1.5fr` | `1fr` |
| Donate CTA | `1.2fr 1fr` | `1fr` |
| Stats grid | `repeat(5, 1fr)` | `repeat(2, 1fr)` |
| Program cards | `repeat(4, 1fr)` | horizontal scroll |
| Footer | `2fr 1fr 1fr 1.5fr` | `1fr` |
| Contact grid | `repeat(2, 1fr)` | `1fr` |

### Breakpoints

| Nombre | Valor | Cambios principales |
|---|---|---|
| Desktop | > 1024px | Grids multi-columna |
| Tablet | ≤ 1024px | Grids colapsan a 1-2 columnas |
| Mobile | ≤ 768px | Nav mobile, single column |
| Small | ≤ 640px | Stats 2-col, cards 1-col |

---

## 4. Componentes

### 4.1 Navegación (Nav.astro)

- **Posición**: `fixed`, `z-index: 100`
- **Fondo**: `rgba(10,31,45,0.92)` + `backdrop-filter: blur(12px)`
- **Altura**: `4.5rem`
- **Logo**: 80px source, CSS constrained to `2.5rem` height (retina sharp)
- **Dropdown**: CSS-only via `:hover` / `:focus-within`, `min-width: 280px`
- **Mobile**: `<details>` element, zero JS
- **Botón Donate**: gold bg, dark text, `border-radius: 0.375rem`

### 4.2 Hero (Hero.astro)

- **Altura**: `min-height: 100vh`
- **Fondo**: mesh gradient multi-layer + grain texture SVG overlay
- **Collage**: 4 celdas grid (1 tall spanning 2 rows), crossfade images
- **Animación headline**: word-by-word reveal con `skewY(2deg)` → `0deg`
- **CTAs**: primary (gold bg) + secondary (ghost border)

### 4.3 Botones

| Tipo | Background | Color | Border | Hover |
|---|---|---|---|---|
| Primary | `#E9AD00` | `#0A1F2D` | none | `#FFD040`, `translateY(-2px)`, gold shadow |
| Secondary/Ghost | transparent | `rgba(255,255,255,0.85)` | `1px solid rgba(255,255,255,0.2)` | border gold, text gold |
| Custom Amount | `#E9AD00` | `#0A1F2D` | `#E9AD00` | `#FFD040`, shadow |

**Propiedades comunes**: `border-radius: 0.375rem`, `font-weight: 700`, `font-family: var(--font-body)`

### 4.4 Cards

- **Background**: `rgba(255,255,255,0.03)`
- **Border**: `1px solid rgba(255,255,255,0.06-0.08)`
- **Border-radius**: `0.5rem - 0.75rem`
- **Hover**: `border-color: var(--accent)`, `translateY(-2px)`, bg lighten
- **Accent bar**: bottom bar `scaleX(0)` → `scaleX(1)` on active

### 4.5 Icon Boxes

```css
width: 2.5-3rem;
height: 2.5-3rem;
background: rgba(233,173,0,0.18);
border: 1px solid rgba(233,173,0,0.3);
border-radius: 0.375-0.5rem;
color: #E9AD00;
```

Iconos: Tabler Icons (SVG inline), `currentColor` para heredar color.

### 4.6 Blockquotes / Callouts

```css
border-left: 2-3px solid #06579A or #E9AD00;
background: rgba(6,87,154,0.15);
border-radius: 0 0.375rem 0.375rem 0;
padding: 1.5rem;
```

- Quote text: `font-accent`, italic
- Attribution: `font-body`, uppercase, gold, `letter-spacing: 0.08-0.1em`

### 4.7 Section Labels (Eyebrows)

```css
font-family: var(--font-body);
font-size: 1rem;
font-weight: 700;
color: #E9AD00; /* o #06579A sobre fondo claro */
text-transform: uppercase;
letter-spacing: 0.15em;
margin-bottom: 1-1.5rem;
```

---

## 5. Animaciones

### Scroll-Triggered (data-animate)

| Tipo | Transform Inicial | Uso |
|---|---|---|
| `fade-up` | `translateY(32px)` | Contenido general |
| `fade-down` | `translateY(-24px)` | — |
| `fade-left` | `translateX(32px)` | Columnas derechas |
| `fade-right` | `translateX(-32px)` | Columnas izquierdas |
| `fade-in` | none (solo opacity) | Elementos sutiles |
| `scale-up` | `scale(0.92)` | Cards |
| `stagger` | Children `translateY(24px)` | Listas, grids |

**Timing**: `0.7s`, `cubic-bezier(0.16, 1, 0.3, 1)`
**Trigger**: `IntersectionObserver`, `threshold: 0.12`
**Delay custom**: `data-delay="0.15"` (segundos)
**Reduced motion**: respeta `prefers-reduced-motion: reduce`

### Hero Word Reveal

```css
@keyframes wordReveal {
  from { opacity: 0; transform: translateY(24px) skewY(2deg); }
  to { opacity: 1; transform: translateY(0) skewY(0deg); }
}
```

Delay escalonado: `0.1s + i * 0.1s` por palabra.

### Stats Count-Up

- JS con `IntersectionObserver` + `requestAnimationFrame`
- Duración: 1500ms, easing: `easeOutCubic`
- Degradación: valores finales pre-renderizados en HTML

### Collage Crossfade

- Primera imagen siempre visible (base layer, `opacity: 1`)
- Imágenes siguientes: `animation: collageCrossfade` con delays escalonados
- Sin gap navy entre transiciones

### Carousel (Donate page)

- CSS `@keyframes carouselScroll` infinito
- Imágenes duplicadas para loop seamless
- Pausa en hover
- Edge fade gradients

---

## 6. Texturas y Decoración

### Grain Texture

```css
background-image: url('/textures/grain.svg');
background-repeat: repeat;
background-size: 200px 200px;
opacity: 0.2-0.3;
mix-blend-mode: overlay; /* en hero */
```

### Mesh Gradients

Múltiples `radial-gradient` superpuestos con colores brand a baja opacidad:

```css
radial-gradient(ellipse 80% 60% at 70% 40%, rgba(6,87,154,0.22) 0%, transparent 60%),
radial-gradient(ellipse 60% 80% at 85% 80%, rgba(233,173,0,0.15) 0%, transparent 55%)
```

### Decorative Elements

- **Gold glow line**: `linear-gradient(90deg, transparent, #E9AD00, transparent)` en border-top
- **Floating ring**: `border: 1.5px solid rgba(233,173,0,0.4)`, rotación lenta
- **Pulsing dot**: `background: #E9AD00`, `box-shadow` glow, scale pulse

---

## 7. Imágenes

### Optimización

- Todas las imágenes usan `astro:assets` Image component
- Format: WebP preferido, quality 85-90
- Lazy loading por defecto, eager solo para above-the-fold
- Retina: source 2x del tamaño de display (ej: logo 80px para display 40px)

### Aspect Ratios

| Contexto | Ratio |
|---|---|
| Hero collage cells | Libre (fill container) |
| Community photo (Mission) | `3/1` |
| WhatWeDo photo | `3/2` |
| Story photo | `12/7` |
| Donate CTA photo | `16/9` |
| Carousel slides | `4/3` |
| Program panel (mobile) | `16/9` |
| Stats image | `16/9` |

### Object-fit

- Siempre `object-fit: cover`
- Mobile program panels: `object-position: center`
- Opacity reducida (`0.8-0.85`) en fotos decorativas

---

## 8. Secciones de Fondo

| Sección | Background |
|---|---|
| Hero | `#0A1F2D` + mesh gradient + grain |
| Mission/Values | `rgba(233,173,0,0.15)` (warm gold tint) |
| WhatWeDo | `#0A1F2D` |
| Impact Stats | `#0D3456` + radial glow |
| Donate CTA | `#0A1F2D` + grain + gold border-top |
| Story | `rgba(233,173,0,0.15)` |
| Programs | `#0A1F2D` |
| Contact | `#0A1F2D` |
| Donate page | `#0A1F2D` + mesh gradient + grain |
| Footer | `#0A1F2D` + gold border-top |

**Patrón**: alternar dark navy → warm gold → dark navy para ritmo visual.

---

## 9. Iconografía

### Fuente

Tabler Icons (tabler.io) — SVG inline, `stroke="currentColor"`, `stroke-width="2"`.

### Iconos Usados

| Contexto | Icono |
|---|---|
| Shield (confianza) | `icon-tabler-shield` (filled) |
| Route (caminos) | `icon-tabler-route` |
| Lock open (acceso) | `icon-tabler-lock-open-2` |
| Empathize (comunidad) | `icon-tabler-empathize` |
| School (educación) | `icon-tabler-school` |
| Shirt sport (familia) | `icon-tabler-shirt-sport` |
| Mail | `icon-tabler-mail` |
| Phone | `icon-tabler-phone` |
| At (@) | `icon-tabler-at` |
| Tax | `icon-tabler-tax` |
| Shield lock | `icon-tabler-shield-lock` |
| Heart handshake | `icon-tabler-heart-handshake` |
| Question mark | `icon-tabler-question-mark` |
| Cash banknote heart | `icon-tabler-cash-banknote-heart` |
| Play football | `icon-tabler-play-football` |
| Contract | `icon-tabler-contract` |
| Device TV old | `icon-tabler-device-tv-old` |

### Tamaños

- En icon boxes: `width="24" height="24"`
- En trust signals: `width="18" height="18"`
- Inline decorativos: `width="16" height="16"`

---

## 10. Accesibilidad

- **Focus visible**: `outline: 2px solid #E9AD00; outline-offset: 2px`
- **aria-label** en secciones, listas, y elementos interactivos
- **aria-hidden="true"** en elementos decorativos (iconos, texturas, labels)
- **aria-current="page"** en nav links activos
- **role="list"** explícito en `<ul>` con estilos custom
- **Reduced motion**: todas las animaciones respetan `prefers-reduced-motion`
- **Semantic HTML**: `<section>`, `<nav>`, `<main>`, `<footer>`, `<address>`, `<blockquote>`
- **Skip links**: via nav structure
- **Color contrast**: gold `#E9AD00` sobre `#0A1F2D` = ratio ~5.8:1 (AA pass)

---

## 11. Estructura de Archivos

```
src/
├── assets/              # Imágenes (optimizadas por Astro)
│   ├── donate/          # 8 imágenes carousel
│   └── programms/       # Imágenes de programas
├── components/
│   ├── Nav.astro
│   ├── Footer.astro
│   ├── home/            # Hero, MissionValues, WhatWeDo, ImpactStats, DonateCTA
│   ├── story/           # StorySection, FounderSection, FounderQuote
│   ├── programs/        # ProgramCard, ProgramCardV2, ProgramGrid, ProgramGridV2
│   └── contact/         # ContactCategory
├── content/             # Data (programs.ts, impact.ts, navigation.ts)
├── layouts/             # BaseLayout.astro
├── pages/               # index, our-story, programs-v2, contact, donate
├── scripts/             # animate.ts
├── styles/              # global.css, fonts.css, animations.css
├── types/               # index.ts (Program, Stat, NavItem, etc.)
└── utils/               # slugify.ts
```

---

## 12. Patrones de Diseño Recurrentes

1. **Section label → Heading → Content**: Cada sección abre con eyebrow dorado uppercase, seguido de heading grande, luego contenido
2. **Two-column asymmetric**: Columna izquierda (texto) + derecha (visual/cards), ratio ~1:1.2
3. **Gold accent on dark**: Elementos interactivos y de énfasis siempre en dorado sobre navy
4. **Card hover lift**: `translateY(-2px)` + border-color change + optional shadow
5. **Gradient overlays**: Sobre imágenes para integrarlas con el fondo
6. **Stagger animations**: Listas y grids animan children con delay incremental
7. **Grain texture**: Presente en hero, donate sections para textura editorial
8. **Border-top gold**: Separador entre secciones con `linear-gradient` dorado
