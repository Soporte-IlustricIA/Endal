'use client'
import { useState } from 'react'

type AccordionItem = { id: string; title: string; body: string }

const ITEMS: AccordionItem[] = [
  {
    id: 'barrera',
    title: 'Barrera hermética',
    body: 'El papel de aluminio crea una barrera total frente a la luz, el oxígeno y los vapores de agua, manteniendo la frescura y el sabor de los alimentos durante más tiempo tanto en nevera como en despensa.',
  },
  {
    id: 'versatilidad',
    title: 'Versatilidad térmica',
    body: 'Desde el congelador hasta el horno convencional. Nuestro papel de aluminio resiste rangos de −40 °C a 220 °C sin alterar los alimentos ni liberar sustancias nocivas, con total seguridad alimentaria.',
  },
  {
    id: 'formatos',
    title: 'Formatos profesionales',
    body: 'Disponible en bobinas de gran formato para máquinas de envasado automático, restauración colectiva y catering de alto volumen, con anchos de 30 cm a 60 cm y metrajes industriales.',
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

export default function PapelProperties() {
  return (
    <section className="al-props">
      <div className="al-props__icon-wrap">
        <svg
          className="al-props__svg"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r="96" stroke="#111" strokeWidth="1.5" />
          {/* Foil roll body — ellipse cylinder */}
          <ellipse cx="100" cy="110" rx="44" ry="14" stroke="#111" strokeWidth="1.5" />
          <line x1="56" y1="110" x2="56" y2="85" stroke="#111" strokeWidth="1.5" />
          <line x1="144" y1="110" x2="144" y2="85" stroke="#111" strokeWidth="1.5" />
          <ellipse cx="100" cy="85" rx="44" ry="14" stroke="#111" strokeWidth="1.5" />
          {/* Core hole */}
          <ellipse cx="100" cy="85" rx="14" ry="5" stroke="#111" strokeWidth="1" opacity=".5" />
          {/* Horizontal lines suggesting foil layers */}
          <line x1="56" y1="92" x2="144" y2="92" stroke="#111" strokeWidth=".7" opacity=".25" />
          <line x1="56" y1="99" x2="144" y2="99" stroke="#111" strokeWidth=".7" opacity=".25" />
          <line x1="56" y1="106" x2="144" y2="106" stroke="#111" strokeWidth=".7" opacity=".25" />
          {/* Unrolled sheet suggestion */}
          <path d="M144 92 Q158 88 162 78 Q158 68 144 72" stroke="#111" strokeWidth="1" fill="none" opacity=".4" />
          <text x="100" y="58" textAnchor="middle" fontFamily="inherit" fontSize="9" fontWeight="400" letterSpacing="2" fill="#111" opacity=".5">PAPEL</text>
        </svg>
      </div>

      <div className="al-props__right">
        <span className="section-label">Nuevas referencias</span>
        <h2 className="al-props__title">
          Las tres funciones<br />del <em>papel de aluminio</em>
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
