'use client'
import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    let animId: number
    let observer: IntersectionObserver | null = null

    import('@studio-freight/lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })

      const opts = lenis.options as Record<string, unknown>

      const slowSections = document.querySelectorAll('.about, .al-props, .nos-history')
      if (slowSections.length) {
        let slowCount = 0
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(e => { slowCount += e.isIntersecting ? 1 : -1 })
            slowCount = Math.max(0, slowCount)
            opts.wheelMultiplier = slowCount > 0 ? 0.35 : 1
          },
          { threshold: 0.15 }
        )
        slowSections.forEach(el => observer!.observe(el))
      }

      function raf(time: number) {
        lenis.raf(time)
        animId = requestAnimationFrame(raf)
      }
      animId = requestAnimationFrame(raf)
    })

    return () => {
      if (animId) cancelAnimationFrame(animId)
      observer?.disconnect()
    }
  }, [])

  return null
}
