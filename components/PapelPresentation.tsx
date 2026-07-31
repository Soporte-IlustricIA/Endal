'use client'
import { useEffect, useRef, useState } from 'react'

type Slide = { src: string; alt: string; name: string }

const SLIDES: Slide[] = [
  {
    src: '/bobinas-aluminio.webp',
    alt: 'Bobinas en la planta de ENDAL',
    name: 'Bobinas en planta',
  },
  {
    src: '/images/material/pres-papel.webp',
    alt: 'Galletas recién horneadas sobre papel vegetal',
    name: 'Horneado sobre papel',
  },
  {
    src: '/papel-vegetal-2.webp',
    alt: 'Envasadora de bobinas de papel vegetal',
    name: 'Papel vegetal',
  },
]

export default function PapelPresentation() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function goTo(index: number) {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => { setCurrent(index); setTransitioning(false) }, 250)
  }

  function prev() { goTo((current - 1 + SLIDES.length) % SLIDES.length) }
  function next() { goTo((current + 1) % SLIDES.length) }

  useEffect(() => {
    timerRef.current = setInterval(next, 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  })

  return (
    <section className="al-pres">
      <div className="al-pres__left">
        <div className="al-pres__left-top">
          <span className="section-label al-pres__label">Arte de la conservación</span>
          <h2 className="al-pres__title">
            Del rollo a la<br /><em>conservación perfecta</em>
          </h2>
        </div>
        <a href="/productos" className="al-pres__cta">Ver más →</a>
      </div>

      <div className="al-pres__right">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`al-pres__slide${i === current && !transitioning ? ' al-pres__slide--active' : ''}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.src} alt={slide.alt} loading="lazy" decoding="async" />
          </div>
        ))}
        <div className="al-pres__caption">
          <span className="al-pres__caption-name">{SLIDES[current].name}</span>
          <div className="al-pres__arrows">
            <button className="al-pres__arrow" onClick={prev} aria-label="Anterior">←</button>
            <button className="al-pres__arrow" onClick={next} aria-label="Siguiente">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
