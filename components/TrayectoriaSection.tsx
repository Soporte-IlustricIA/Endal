'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import PlantVideo from './PlantVideo'

export type Milestone = { year: string; title: string; desc: string }

/* ── Hitos reales de ENDAL (versión breve para la home) ── */
const DEFAULT_MILESTONES: Milestone[] = [
  {
    year: '1991',
    title: 'Fundación',
    desc: 'ENDAL S.L. abre sus puertas en el Polígono Industrial Canastell. Desde el primer día, especialización en envases de aluminio doméstico e industrial.',
  },
  {
    year: '2000',
    title: 'Expansión de gama',
    desc: 'Incorporación de las líneas de film estirable y papel de cocina alimentario, reforzando el servicio integral a restauración y gran distribución.',
  },
  {
    year: '2010',
    title: 'Presencia europea',
    desc: 'Primeras exportaciones regulares a mercados europeos y africanos, con certificaciones de seguridad alimentaria conforme a normativa europea.',
  },
  {
    year: '2018',
    title: 'Innovación de producto',
    desc: 'Nuevas referencias en aluminio con tapa termosellable y cápsulas compatibles con sistemas de café de monodosis.',
  },
  {
    year: 'Hoy',
    title: 'Líderes en España',
    desc: 'Más de tres décadas de fabricación ininterrumpida. Presencia en toda España, Europa y África, con la misma vocación industrial del primer día.',
  },
]

/* ─────────────────────────────────────────────────────────
   Mapa temporal — replica del timeline scrubbed original
   (duración 5.25 unidades repartidas sobre el rango de pin)
───────────────────────────────────────────────────────── */
const TL = 5.25
const seg = (t0: number, dur: number): [number, number] => [t0 / TL, (t0 + dur) / TL]

const S_VISUAL   = seg(0, 2)     // la ventana de vídeo se abre a pantalla completa
const S_VIDEO    = seg(0, 3)     // zoom lento del vídeo 1 → 1.1
const S_OVERLAY  = seg(0, 2)     // negro sólido → degradado de marca
const S_TEXT_OUT = seg(1.5, 0.5) // titular + intro se desenfocan y salen
const S_LAYER2   = seg(2, 0.5)   // entra la capa del timeline

/* Cuarta fase: el timeline se retira y entran las cifras. La historia
   (1991 → hoy) desemboca en lo que esa historia produce hoy. */
const S_LAYER2_OUT = seg(4.15, 0.5)  // sale la capa del timeline
const S_STATS      = seg(4.35, 0.65) // entran titular y contadores

const STATS = [
  { prefix: '+', target: 33,  suffix: '',  text: 'Años de fabricación 100% española de envases de aluminio, papel y plástico' },
  { prefix: '',  target: 159, suffix: '',  text: 'Referencias en catálogo listas para distribución en España y Europa' },
  { prefix: '',  target: 100, suffix: '%', text: 'Alimentario y certificado conforme a la normativa europea de seguridad' },
]

/* Ventana inicial del vídeo, en % del viewport (inset: top right bottom left).
   El encuadre de escritorio es un panel estrecho a la izquierda; a 390px
   ese 24% de ancho quedaba en una tira de ~95px, así que en vertical se
   abre a un panel centrado. */
const INSET_WIDE = [10.3, 63.1, 8.4, 12.2]
const INSET_TALL = [9, 13, 11, 13]

const clamp = (v: number, a = 0, b = 1) => (v < a ? a : v > b ? b : v)
const at = (p: number, [a, b]: [number, number]) => clamp((p - a) / (b - a))
const mix = (a: number, b: number, t: number) => a + (b - a) * t

/* Capas de material: aluminio, plástico, papel */
function IconCapas() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 5 3.5 11.5 16 18l12.5-6.5L16 5Z" />
      <path d="M3.5 17 16 23.5 28.5 17" />
      <path d="M3.5 22.5 16 29l12.5-6.5" />
    </svg>
  )
}

interface Props {
  milestones?: Milestone[]
  introCopy?: string
  introTitle?: string
  claim?: string
  ctaLabel?: string
  ctaHref?: string
  /* Modificador de apilado: cada página tiene su propia pila de sticky. */
  variant?: string
}

export default function TrayectoriaSection({
  milestones = DEFAULT_MILESTONES,
  introCopy = 'Fabricamos envase alimentario desde 1991. Tres décadas afinando el aluminio, el plástico y el papel para quien cocina, conserva y reparte cada día.',
  introTitle = 'ENDAL: tres décadas dando forma al envase.',
  claim = 'Más de 30 años fabricando en España.',
  ctaLabel = 'Conoce ENDAL',
  ctaHref = '/nosotros',
  variant,
}: Props = {}) {
  const wrapRef = useRef<HTMLElement>(null)
  const holderRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const activeRef = useRef(0)
  // Los contadores se escriben directo en el DOM: cambian en cada frame
  // del scrub y pasarlos por estado forzaría un render por frame.
  const numRefs = useRef<(HTMLSpanElement | null)[]>([])

  // Los hitos se reparten sobre el mismo tramo (t 2 → 4) sea cual sea su número.
  const segments = useMemo(() => {
    const stagger = milestones.length > 1 ? 1.5 / (milestones.length - 1) : 0
    return milestones.map((_, i) => seg(2 + i * stagger, 0.5))
  }, [milestones])

  useEffect(() => {
    const wrap = wrapRef.current
    const holder = holderRef.current
    if (!wrap || !holder) return

    const paint = (sp: number) => {
      STATS.forEach((s, i) => {
        const el = numRefs.current[i]
        if (el) el.textContent = `${s.prefix}${Math.round(sp * s.target)}${s.suffix}`
      })
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      holder.style.setProperty('--p', '1')
      segments.forEach((_, i) => holder.style.setProperty(`--i${i}`, '1'))
      holder.style.setProperty('--tl-op', '0')
      holder.style.setProperty('--st-op', '1')
      setActive(segments.length - 1)
      paint(1)
      return
    }

    // Se relee en cada frame: cubre rotación de pantalla sin listener extra.
    const mqTall = window.matchMedia('(max-width: 767px)')

    let raf = 0
    let last = -1

    const tick = () => {
      raf = requestAnimationFrame(tick)

      const vh = window.innerHeight
      const rect = wrap.getBoundingClientRect()
      // Mismo encuadre que el original: arranca en "top 25%" y el recorrido
      // útil equivale a la altura del bloque menos un viewport.
      const range = wrap.offsetHeight - vh
      if (range <= 0) return
      const p = clamp((0.25 * vh - rect.top) / range)
      if (Math.abs(p - last) < 0.0004) return
      last = p

      const vis = at(p, S_VISUAL)
      const from = mqTall.matches ? INSET_TALL : INSET_WIDE
      const inset = from.map(v => mix(v, 0, vis))

      holder.style.setProperty('--clip', `inset(${inset[0]}% ${inset[1]}% ${inset[2]}% ${inset[3]}%)`)
      holder.style.setProperty('--radius', `${mix(6, 0, vis)}px`)
      holder.style.setProperty('--vscale', String(mix(1, 1.1, at(p, S_VIDEO))))

      const ov = at(p, S_OVERLAY)
      holder.style.setProperty('--ov-solid', String(mix(0.4, 0, ov)))
      holder.style.setProperty('--ov-grad', String(mix(0, 0.6, ov)))

      const out = at(p, S_TEXT_OUT)
      holder.style.setProperty('--intro-op', String(1 - out))
      holder.style.setProperty('--intro-blur', `${mix(0, 12, out)}px`)

      // La capa del timeline entra y, en la cuarta fase, se retira.
      holder.style.setProperty(
        '--tl-op',
        String(at(p, S_LAYER2) * (1 - at(p, S_LAYER2_OUT)))
      )

      const sp = at(p, S_STATS)
      holder.style.setProperty('--st-op', String(sp))
      paint(sp)

      let idx = 0
      for (let i = 0; i < segments.length; i++) {
        const t = at(p, segments[i])
        holder.style.setProperty(`--i${i}`, String(t))
        if (t > 0.5) idx = i
      }
      if (idx !== activeRef.current) {
        activeRef.current = idx
        setActive(idx)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [segments])

  return (
    <section className={`tray${variant ? ` tray--${variant}` : ''}`} ref={wrapRef}>
      <div className="tray__holder" ref={holderRef}>

        {/* ── Capa 1 · vídeo + titular ── */}
        <div className="tray__layer">
          <div className="tray__visual">
            <PlantVideo className="tray__video" />
            <div className="tray__ov tray__ov--solid" />
            <div className="tray__ov tray__ov--grad" />
            <div className="tray__ov tray__ov--scrim" />
          </div>

          <div className="tray__intro">
            <p className="tray__intro-copy">{introCopy}</p>
            <h2 className="tray__intro-title">{introTitle}</h2>
          </div>
        </div>

        {/* ── Capa 2 · timeline ── */}
        <div className="tray__layer tray__layer--tl">
          <div className="tray__years">
            <div className="tray__rule" />
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`tray__year${i === active ? ' tray__year--on' : ''}`}
                style={{ ['--t' as string]: `var(--i${i}, 0)` }}
              >
                <span className="tray__year-num">{m.year}</span>
                <span className="tray__year-tick" />
              </div>
            ))}
          </div>

          <div className="tray__bottom">
            <div className="tray__bottom-left">
              <p className="tray__claim">{claim}</p>
              <a href={ctaHref} className="tray__btn">{ctaLabel}</a>
            </div>

            <div className="tray__bottom-right" key={active}>
              <span className="tray__detail-icon"><IconCapas /></span>
              <p className="tray__detail-title">{milestones[active].title}</p>
              <p className="tray__detail-desc">{milestones[active].desc}</p>
            </div>
          </div>
        </div>

        {/* ── Capa 3 · las cifras que deja esa trayectoria ── */}
        <div className="tray__layer tray__layer--stats">
          <div className="tray__stats-inner">
            <h2 className="tray__stats-title">Calidad que protege lo que más importa</h2>
            <p className="tray__stats-lead">
              Fabricamos envases que preservan los alimentos en condiciones óptimas.
              Aluminio, papel y plástico alimentario con más de tres décadas de experiencia española.
            </p>
            <div className="tray__stats-row">
              {STATS.map((s, i) => (
                <div key={i} className="tray__stat">
                  <span
                    className="tray__stat-num"
                    ref={el => { numRefs.current[i] = el }}
                  >
                    {s.prefix}0{s.suffix}
                  </span>
                  <p className="tray__stat-text">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
