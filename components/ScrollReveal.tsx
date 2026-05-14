'use client'

/**
 * ScrollReveal — mounts once in the layout and uses IntersectionObserver
 * to animate .container-custom divs inside <section> elements as they
 * enter the viewport. Progressive enhancement: if JS doesn't run,
 * all content is visible as-is.
 */
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const HIDDEN_STYLE = {
      opacity: '0',
      transform: 'translateY(28px)',
      transition:
        'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
      willChange: 'opacity, transform',
    }

    const reveal = (el: HTMLElement) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -48px 0px' }
    )

    // Target the container-custom div inside every section except the hero (first)
    const sections = Array.from(document.querySelectorAll('main section'))
    const targets: HTMLElement[] = []

    sections.forEach((section, i) => {
      if (i === 0) return // skip hero — always visible
      const container = section.querySelector('.container-custom') as HTMLElement | null
      if (container) targets.push(container)
    })

    // Also pick up any explicit [data-reveal] elements
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      targets.push(el)
    })

    if (targets.length === 0) return

    // Apply initial hidden state after first paint (avoids FOIC on fast loads)
    const raf = requestAnimationFrame(() => {
      targets.forEach((el) => {
        Object.assign(el.style, HIDDEN_STYLE)
        observer.observe(el)
      })
    })

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return null
}
