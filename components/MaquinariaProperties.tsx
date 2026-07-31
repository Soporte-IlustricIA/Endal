'use client'
import { useState } from 'react'
import MaterialShowcase from './MaterialShowcase'

type AccordionItem = { id: string; title: string; body: string }

const ITEMS: AccordionItem[] = [
  {
    id: 'compatibilidad',
    title: 'Compatibilidad total',
    body: 'Cada máquina está diseñada para trabajar con la gama completa de envases ENDAL: bandejas de aluminio, envases de plástico y bobinas de film. Sin adaptaciones adicionales, integración directa en planta.',
  },
  {
    id: 'mantenimiento',
    title: 'Bajo mantenimiento',
    body: 'Construcción en acero inoxidable certificado para uso alimentario, con piezas de fácil acceso y recambios siempre disponibles. Diseño pensado para minimizar las paradas no planificadas en línea.',
  },
  {
    id: 'soporte',
    title: 'Soporte técnico',
    body: 'Cada equipo incluye instalación en planta, formación del personal y asistencia técnica continuada por el equipo de ingeniería de ENDAL. Servicio posventa garantizado con tiempos de respuesta prioritarios.',
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

export default function MaquinariaProperties() {
  return (
    <section className="al-props">
      <div className="al-props__icon-wrap">
          <MaterialShowcase variant="maquinaria" />
      </div>

      <div className="al-props__right">
        <span className="section-label">Nuestros equipos</span>
        <h2 className="al-props__title">
          Las tres ventajas<br />de nuestra <em>maquinaria</em>
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
