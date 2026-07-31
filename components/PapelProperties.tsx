'use client'
import { useState } from 'react'
import MaterialShowcase from './MaterialShowcase'

type AccordionItem = { id: string; title: string; body: string }

const ITEMS: AccordionItem[] = [
  {
    id: 'antiadherente',
    title: 'Superficie antiadherente',
    body: 'El tratamiento del papel evita que la masa se pegue sin necesidad de engrasar la bandeja, así que la pieza sale entera y el molde se retira limpio.',
  },
  {
    id: 'horno',
    title: 'Del horno al mostrador',
    body: 'Los moldes de papel para hornear aguantan la cocción y se presentan directamente en el punto de venta: la pieza no se desmolda ni se manipula entre el obrador y el expositor.',
  },
  {
    id: 'formatos',
    title: 'Formatos de obrador',
    body: 'Moldes para plumcake, tarta, magdalena y bandeja, más bobinas de papel vegetal para forrar y separar. Todos aptos para el contacto con alimentos.',
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
          <MaterialShowcase variant="papel" />
      </div>

      <div className="al-props__right">
        <span className="section-label">Nuevas referencias</span>
        <h2 className="al-props__title">
          Las tres funciones<br />del <em>papel de obrador</em>
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
