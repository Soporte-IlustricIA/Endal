'use client'
import { useEffect, useRef, useState } from 'react'

function useCounter(target: number, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) { setCount(0); return }
    let startTime: number | null = null
    let raf: number
    function animate(ts: number) {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])
  return count
}

export default function MaquinariaHero() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const count = useCounter(2, active)

  return (
    <section className="al-hero" ref={ref}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="al-hero__img"
        src="/fabrica-endal.webp"
        alt="Maquinaria de envasado ENDAL"
      />
      <div className="al-hero__badge">
        <span className="al-hero__badge-label">Número de referencias</span>
        <div className="al-hero__badge-row">
          <span className="al-hero__badge-count">{count}</span>
          <a href="#mq-catalog" className="al-hero__badge-btn" aria-label="Ver referencias">
            →
          </a>
        </div>
      </div>
    </section>
  )
}
