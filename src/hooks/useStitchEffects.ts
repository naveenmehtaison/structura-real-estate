import { useEffect } from 'react'

/** Ports Stitch HTML scroll-reveal + counter scripts. */
export function useStitchEffects() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal-on-scroll')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 },
    )
    revealEls.forEach((el) => revealObserver.observe(el))

    const counters = document.querySelectorAll<HTMLElement>('.counter')
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          if (el.dataset.done) return
          el.dataset.done = '1'
          const target = Number(el.dataset.target || '0')
          const duration = 1400
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            el.textContent = String(Math.floor(p * target))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.4 },
    )
    counters.forEach((el) => counterObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      counterObserver.disconnect()
    }
  }, [])
}
