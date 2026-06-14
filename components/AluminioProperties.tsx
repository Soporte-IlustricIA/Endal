'use client'
import { useState } from 'react'

type AccordionItem = { id: string; title: string; body: string }

const ITEMS: AccordionItem[] = [
  {
    id: 'conservacion',
    title: 'Conservación',
    body: 'El aluminio crea una barrera hermética frente a la luz, el oxígeno y la humedad, preservando el sabor, el aroma y la frescura de los alimentos durante más tiempo tanto en nevera como en congelador.',
  },
  {
    id: 'resistencia',
    title: 'Resistencia',
    body: 'Nuestros envases soportan rangos térmicos de −40 °C hasta 220 °C, siendo aptos para horno convencional, congelador y frigorífico sin deformarse ni alterar las propiedades del alimento.',
  },
  {
    id: 'reciclabilidad',
    title: 'Reciclabilidad',
    body: 'El aluminio es 100 % reciclable de forma indefinida sin pérdida de calidad. Elegir envases de aluminio ENDAL es apostar por una cadena de packaging circular y sostenible en la industria alimentaria.',
  },
]

function AccordionItem({ item }: { item: AccordionItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="al-accordion__item">
      <button
        className="al-accordion__trigger"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span>{item.title}</span>
        <span className={`al-accordion__icon${open ? ' al-accordion__icon--open' : ''}`}>+</span>
      </button>
      <div className={`al-accordion__body${open ? ' al-accordion__body--open' : ''}`}>
        <p className="al-accordion__body-inner">{item.body}</p>
      </div>
    </div>
  )
}

export default function AluminioProperties() {
  return (
    <section className="al-props">
      {/* Left: circular SVG icon */}
      <div className="al-props__icon-wrap">
        <svg
          className="al-props__svg"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer circle */}
          <circle cx="100" cy="100" r="96" stroke="#111" strokeWidth="1.5" />
          {/* Bandeja de aluminio outline */}
          <rect x="44" y="78" width="112" height="60" rx="6" stroke="#111" strokeWidth="1.5" />
          {/* Tapa / lid line */}
          <line x1="44" y1="90" x2="156" y2="90" stroke="#111" strokeWidth="1" strokeDasharray="4 3" />
          {/* Handle left */}
          <path d="M44 100 Q32 100 32 108 Q32 116 44 116" stroke="#111" strokeWidth="1.5" fill="none" />
          {/* Handle right */}
          <path d="M156 100 Q168 100 168 108 Q168 116 156 116" stroke="#111" strokeWidth="1.5" fill="none" />
          {/* Horizontal ribs */}
          <line x1="56" y1="102" x2="144" y2="102" stroke="#111" strokeWidth=".8" opacity=".4" />
          <line x1="56" y1="110" x2="144" y2="110" stroke="#111" strokeWidth=".8" opacity=".4" />
          <line x1="56" y1="118" x2="144" y2="118" stroke="#111" strokeWidth=".8" opacity=".4" />
          {/* Label text */}
          <text x="100" y="58" textAnchor="middle" fontFamily="inherit" fontSize="9" fontWeight="400" letterSpacing="2" fill="#111" opacity=".5">ALUMINIO</text>
        </svg>
      </div>

      {/* Right: title + accordion */}
      <div className="al-props__right">
        <span className="section-label">Nuevas referencias</span>
        <h2 className="al-props__title">
          Las tres dimensiones<br />del <em>aluminio alimentario</em>
        </h2>
        <div className="al-accordion">
          {ITEMS.map(item => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
