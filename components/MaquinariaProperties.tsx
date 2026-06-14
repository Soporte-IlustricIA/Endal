'use client'
import { useState } from 'react'

type AccordionItem = { id: string; title: string; body: string }

const ITEMS: AccordionItem[] = [
  {
    id: 'compatibilidad',
    title: 'Compatibilidad total',
    body: 'Cada máquina está diseñada para trabajar con la gama completa de envases ENDAL: bandejas de aluminio, film de plástico y papel de aluminio. Sin adaptaciones adicionales, integración directa en planta.',
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
        <svg
          className="al-props__svg"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r="96" stroke="#111" strokeWidth="1.5" />
          {/* Outer gear ring */}
          <circle cx="100" cy="100" r="38" stroke="#111" strokeWidth="1.5" />
          {/* Inner gear hole */}
          <circle cx="100" cy="100" r="16" stroke="#111" strokeWidth="1.5" />
          {/* Gear teeth — 8 teeth */}
          <rect x="96" y="54" width="8" height="10" rx="1" fill="none" stroke="#111" strokeWidth="1.2" />
          <rect x="96" y="136" width="8" height="10" rx="1" fill="none" stroke="#111" strokeWidth="1.2" />
          <rect x="54" y="96" width="10" height="8" rx="1" fill="none" stroke="#111" strokeWidth="1.2" />
          <rect x="136" y="96" width="10" height="8" rx="1" fill="none" stroke="#111" strokeWidth="1.2" />
          {/* Diagonal teeth */}
          <rect x="68" y="63" width="8" height="10" rx="1" fill="none" stroke="#111" strokeWidth="1.2" transform="rotate(-45 72 68)" />
          <rect x="124" y="63" width="8" height="10" rx="1" fill="none" stroke="#111" strokeWidth="1.2" transform="rotate(45 128 68)" />
          <rect x="68" y="127" width="8" height="10" rx="1" fill="none" stroke="#111" strokeWidth="1.2" transform="rotate(45 72 132)" />
          <rect x="124" y="127" width="8" height="10" rx="1" fill="none" stroke="#111" strokeWidth="1.2" transform="rotate(-45 128 132)" />
          <text x="100" y="58" textAnchor="middle" fontFamily="inherit" fontSize="9" fontWeight="400" letterSpacing="2" fill="#111" opacity=".5">MAQUINARIA</text>
        </svg>
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
