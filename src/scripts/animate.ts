/**
 * Scroll-triggered entrance animations
 * Observes elements with [data-animate] and adds .is-visible when they enter viewport
 */
function initAnimations(): void {
  const elements = document.querySelectorAll<HTMLElement>('[data-animate]')

  if (!elements.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          // Apply custom delay if set via data-delay attribute
          const delay = el.dataset.delay
          if (delay) {
            el.style.setProperty('--anim-delay', `${delay}s`)
          }
          el.classList.add('is-visible')
          observer.unobserve(el) // animate once
        }
      })
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  )

  elements.forEach((el) => observer.observe(el))
}

// Run on initial load
initAnimations()

// Re-run after Astro view transitions (if enabled)
document.addEventListener('astro:page-load', initAnimations)
