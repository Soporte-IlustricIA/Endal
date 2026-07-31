'use client'
import { useState } from 'react'
import MaterialShowcase from './MaterialShowcase'

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
          <MaterialShowcase variant="aluminio" />
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
