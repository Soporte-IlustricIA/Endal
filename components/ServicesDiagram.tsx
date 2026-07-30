'use client'
import { useEffect, useRef, useState } from 'react'

/* Iconos de píxeles, en unidades del viewBox */
const ICON_DOTS: Record<string, [number, number][]> = {
  aluminio: [
    [20, 0],
    [16, 4], [20, 4], [24, 4],
    [12, 8], [16, 8], [20, 8], [24, 8], [28, 8],
    [16, 12], [20, 12], [24, 12],
    [20, 16],
    [18, 20], [20, 20], [22, 20],
  ],
  plastico: [
    [8, 0], [16, 0],
    [10, 4], [14, 4],
    [0, 8], [4, 8], [12, 8], [16, 8], [20, 8],
    [12, 12],
    [12, 16],
    [12, 20],
    [10, 24], [12, 24], [14, 24],
  ],
  papel: [
    [12, 0],
    [8, 4], [12, 4], [16, 4],
    [4, 8], [8, 8], [12, 8], [16, 8], [20, 8],
    [12, 12],
    [12, 16],
    [10, 20], [12, 20], [14, 20],
  ],
}

type Node = {
  icon: keyof typeof ICON_DOTS
  label: string
  /* punta del brazo */
  at: [number, number]
  /* origen del grupo icono + rótulo */
  g: [number, number]
  /* línea base del rótulo respecto al grupo */
  ly: number
}

type Layout = { viewBox: string; hub: [number, number]; nodes: Node[] }

/* Dos geometrías para el mismo diagrama. En vertical el viewBox va casi
   1:1 con el ancho real del móvil: si no, el rótulo (11px en unidades de
   usuario) se escalaba a ~4px y quedaba ilegible. */
const WIDE: Layout = {
  viewBox: '0 0 1000 580',
  hub: [460, 310],
  nodes: [
    { icon: 'aluminio', label: '■ ALUMINIO',        at: [130, 90],  g: [30, 18],  ly: 46 },
    { icon: 'plastico', label: '■ PLÁSTICO & FILM', at: [820, 80],  g: [720, 12], ly: 50 },
    { icon: 'papel',    label: '■ PAPEL',           at: [140, 510], g: [30, 440], ly: 44 },
  ],
}

/* Alto contenido a propósito: la sección va pinada y la de contacto
   sube por encima, así que un diagrama que llene los 100vh justos se
   quedaría sin ventana de scroll en la que verse entero. */
const TALL: Layout = {
  viewBox: '0 0 400 440',
  hub: [200, 222],
  nodes: [
    { icon: 'aluminio', label: '■ ALUMINIO',        at: [86, 78],   g: [22, 20],  ly: 46 },
    { icon: 'plastico', label: '■ PLÁSTICO & FILM', at: [314, 112], g: [246, 54], ly: 50 },
    { icon: 'papel',    label: '■ PAPEL',           at: [96, 368],  g: [22, 312], ly: 44 },
  ],
}

/* Seis trazos por brazo, con ligeros desvíos: es lo que da el efecto de haz */
const JITTER: [number, number, number, number, number][] = [
  [0, 0, 0, 0, 0.9],
  [2, 3, 2, 3, 0.7],
  [-2, -3, -2, -3, 0.7],
  [5, 2, 5, 2, 0.5],
  [-5, -2, -5, -2, 0.5],
  [8, 4, 8, 4, 0.4],
]
const OPACITY = [0.55, 0.3, 0.3, 0.2, 0.2, 0.12]

export default function ServicesDiagram() {
  const sectionRef = useRef<HTMLElement>(null)
  const [tall, setTall] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const sync = () => setTall(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  // Se vuelve a lanzar al cambiar de geometría: las líneas son otras.
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const lines = section.querySelectorAll<SVGLineElement>('.diag-line')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    lines.forEach(line => {
      const dx = parseFloat(line.getAttribute('x2') || '0') - parseFloat(line.getAttribute('x1') || '0')
      const dy = parseFloat(line.getAttribute('y2') || '0') - parseFloat(line.getAttribute('y1') || '0')
      const len = Math.sqrt(dx * dx + dy * dy)
      line.style.strokeDasharray = String(len)
      line.style.strokeDashoffset = reduced ? '0' : String(len)
    })
    if (reduced) return

    const timers: ReturnType<typeof setTimeout>[] = []
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        lines.forEach((line, i) => {
          const delay = Math.floor(i / 6) * 220 + (i % 6) * 55
          timers.push(setTimeout(() => {
            line.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.32,.94,.6,1)'
            line.style.strokeDashoffset = '0'
          }, delay))
        })
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.15 })

    observer.observe(section)
    return () => { observer.disconnect(); timers.forEach(clearTimeout) }
  }, [tall])

  const L = tall ? TALL : WIDE
  const [hx, hy] = L.hub

  return (
    <section className="sd-section" ref={sectionRef}>
      <div className="sd-header">
        <h2 className="section-label">Materiales</h2>
        <div className="sd-content">
          <p className="sd-copy">
            En la intersección del aluminio, el plástico y el papel, fabricamos el envase perfecto para cada producto alimentario.
          </p>
          <a href="/productos" className="btn-outline">Ver todas las gamas</a>
        </div>
      </div>

      <div className={`sd-canvas${tall ? ' sd-canvas--tall' : ''}`}>
        <svg
          className="sd-svg"
          viewBox={L.viewBox}
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {L.nodes.map(n =>
            JITTER.map(([ox, oy, tx, ty, sw], j) => (
              <line
                key={`${n.icon}-${j}`}
                className="diag-line"
                x1={hx + ox} y1={hy + oy}
                x2={n.at[0] + tx} y2={n.at[1] + ty}
                strokeWidth={sw}
                opacity={OPACITY[j]}
              />
            ))
          )}

          {L.nodes.map(n => (
            <g key={n.icon} transform={`translate(${n.g[0]},${n.g[1]})`}>
              {ICON_DOTS[n.icon].map(([x, y], k) => (
                <rect key={k} x={x} y={y} width="4" height="4" fill="#333" opacity=".85" />
              ))}
              <text className="node-text" x="0" y={n.ly}>{n.label}</text>
            </g>
          ))}
        </svg>
      </div>
    </section>
  )
}
