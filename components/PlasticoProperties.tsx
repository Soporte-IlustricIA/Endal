'use client'
import { useState } from 'react'

type AccordionItem = { id: string; title: string; body: string }

const ITEMS: AccordionItem[] = [
  {
    id: 'flexibilidad',
    title: 'Flexibilidad',
    body: 'El film plástico alimentario se adapta a cualquier formato de producto, envolviendo herméticamente superficies irregulares y protegiendo el contenido del contacto exterior sin rigidez ni deformación.',
  },
  {
    id: 'barrera',
    title: 'Barrera activa',
    body: 'Nuestras bolsas de vacío y film multicapa actúan como barrera frente al oxígeno, la humedad y los olores, prolongando la vida útil del producto sin necesidad de conservantes adicionales.',
  },
  {
    id: 'versatilidad',
    title: 'Versatilidad',
    body: 'Compatible con líneas de envasado manual e industrial. Apto para microondas, frigorífico y congelador según el formato elegido, con opciones de cierre zip, termosellado o vacío.',
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

export default function PlasticoProperties() {
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
          {/* Bolsa / bag outline */}
          <rect x="60" y="72" width="80" height="84" rx="4" stroke="#111" strokeWidth="1.5" />
          {/* Bag top fold */}
          <path d="M60 72 Q60 58 75 58 L125 58 Q140 58 140 72" stroke="#111" strokeWidth="1.5" fill="none" />
          {/* Zip line */}
          <line x1="60" y1="88" x2="140" y2="88" stroke="#111" strokeWidth="1.2" />
          {/* Zip dots */}
          <circle cx="72" cy="88" r="2" fill="#111" opacity=".5" />
          <circle cx="84" cy="88" r="2" fill="#111" opacity=".5" />
          <circle cx="96" cy="88" r="2" fill="#111" opacity=".5" />
          <circle cx="108" cy="88" r="2" fill="#111" opacity=".5" />
          <circle cx="120" cy="88" r="2" fill="#111" opacity=".5" />
          <circle cx="132" cy="88" r="2" fill="#111" opacity=".5" />
          {/* Wavy lines inside bag */}
          <path d="M72 108 Q82 104 92 108 Q102 112 112 108 Q122 104 132 108" stroke="#111" strokeWidth=".8" opacity=".3" fill="none" />
          <path d="M72 120 Q82 116 92 120 Q102 124 112 120 Q122 116 132 120" stroke="#111" strokeWidth=".8" opacity=".3" fill="none" />
          <text x="100" y="52" textAnchor="middle" fontFamily="inherit" fontSize="9" fontWeight="400" letterSpacing="2" fill="#111" opacity=".5">PLÁSTICO</text>
        </svg>
      </div>

      <div className="al-props__right">
        <span className="section-label">Nuevas referencias</span>
        <h2 className="al-props__title">
          Las tres propiedades<br />del <em>film alimentario</em>
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
