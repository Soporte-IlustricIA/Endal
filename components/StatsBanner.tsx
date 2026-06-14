'use client'
import { useEffect, useRef, useState } from 'react'

type Stat = {
  prefix: string
  target: number
  suffix: string
  text: React.ReactNode
}

const STATS: Stat[] = [
  {
    prefix: '+',
    target: 33,
    suffix: '',
    text: <>Años de <strong>fabricación 100% española</strong> de envases de aluminio, papel y plástico</>,
  },
  {
    prefix: '',
    target: 22,
    suffix: '',
    text: <>Referencias disponibles para <strong>distribución inmediata</strong> en toda España y Europa</>,
  },
  {
    prefix: '',
    target: 100,
    suffix: '%',
    text: <><strong>Alimentario y certificado</strong>, cada envase cumple la normativa europea de seguridad alimentaria</>,
  },
]

function useCounter(target: number, active: boolean, duration = 1600) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) { setCount(0); return }
    let startTime: number | null = null
    let raf: number

    function animate(ts: number) {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return count
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCounter(stat.target, active)
  return (
    <div className="stats-card">
      <span className="stats-card__number">
        {stat.prefix}{count}{stat.suffix}
      </span>
      <p className="stats-card__text">{stat.text}</p>
    </div>
  )
}

export default function StatsBanner() {
  const [active, setActive] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { setActive(entry.isIntersecting) },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-intro">
        <h2 className="stats-intro__title">Calidad que protege lo que más importa</h2>
        <p className="stats-intro__desc">
          Fabricamos envases que preservan los alimentos en condiciones óptimas.
          Aluminio, papel y plástico alimentario con más de cuatro décadas de experiencia española.
        </p>
      </div>
      <div className="stats-cards">
        {STATS.map((stat, i) => (
          <StatCard key={i} stat={stat} active={active} />
        ))}
      </div>
    </section>
  )
}
