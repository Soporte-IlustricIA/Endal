'use client'
import { useEffect, useRef } from 'react'

const MILESTONES = [
  {
    year: '1991',
    title: 'Fundación',
    desc: 'ENDAL S.L. abre sus puertas en el Polígono Industrial Canastell de San Vicente del Raspeig. Desde el primer día, especialización en envases de aluminio doméstico e industrial.',
  },
  {
    year: '2000',
    title: 'Expansión de gama',
    desc: 'Incorporación de líneas de film estirable y papel de cocina alimentario. La diversificación refuerza el servicio integral para el sector de la restauración y la gran distribución.',
  },
  {
    year: '2010',
    title: 'Presencia europea',
    desc: 'Primeras exportaciones regulares a mercados europeos y africanos. Obtención de certificaciones de seguridad alimentaria conforme a la normativa europea vigente.',
  },
  {
    year: '2018',
    title: 'Innovación de producto',
    desc: 'Desarrollo de nuevas referencias en aluminio con tapa termosellable y cápsulas compatibles con sistemas de café de monodosis. Más de 22 referencias activas en catálogo.',
  },
  {
    year: 'Hoy',
    title: 'Líderes en España',
    desc: 'Más de tres décadas de fabricación ininterrumpida. Presencia en toda España, Europa y África. Un equipo consolidado con la misma vocación industrial con la que empezamos.',
  },
]

export default function NosotrosHistory() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll<HTMLDivElement>('.nos-history__item')
    if (!items?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="nos-history">
      <div className="nos-history__left">
        <span className="section-label nos-history__label">Historia</span>
        <h2 className="nos-history__intro-title">
          Más de tres décadas<br />de especialización<br />en envases alimentarios.
        </h2>
      </div>
      <div className="nos-history__right" ref={timelineRef}>
        {MILESTONES.map((m) => (
          <div key={m.year} className="nos-history__item">
            <div className="nos-history__item-head">
              <span className="nos-history__year">{m.year}</span>
              <span className="nos-history__item-title">{m.title}</span>
            </div>
            <p className="nos-history__desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
