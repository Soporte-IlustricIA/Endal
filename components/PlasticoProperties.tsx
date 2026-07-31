'use client'
import { useState } from 'react'
import MaterialShowcase from './MaterialShowcase'

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
          <MaterialShowcase variant="plastico" />
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
