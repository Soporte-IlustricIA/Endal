'use client'
import {
  useRef, useState, useCallback,
  type RefObject,
} from 'react'
import {
  motion,
  useScroll, useTransform, useSpring,
  useInView,
} from 'framer-motion'

/* ─── Easing ─────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const

/* ─── Floating-square positions ─────────────────────── */
const FLOAT_SQUARES = [
  { x: 6,  y: 20, s: 12 },
  { x: 12, y: 32, s: 8  },
  { x: 8,  y: 44, s: 6  },
  { x: 88, y: 18, s: 10 },
  { x: 92, y: 30, s: 14 },
  { x: 85, y: 42, s: 7  },
  { x: 90, y: 52, s: 5  },
  { x: 14, y: 56, s: 5  },
]

/* ─── Cards (ENDAL Principios) ───────────────────────── */
const CARDS = [
  {
    id: 'calidad',
    title: 'Calidad',
    category: 'Seguridad Alimentaria & Certificaciones',
    year: '2024',
    image: 'https://images.pexels.com/photos/7691249/pexels-photo-7691249.jpeg?auto=compress&cs=tinysrgb&w=800',
    magnets: [
      { x: 5,  y: 30, s: 16 }, { x: 10, y: 42, s: 10 }, { x: 3, y: 52, s: 7 },
      { x: 80, y: 70, s: 14 }, { x: 85, y: 82, s: 9  }, { x: 78, y: 60, s: 6 },
    ],
  },
  {
    id: 'innovacion',
    title: 'Innovación',
    category: 'Desarrollo de Producto & I+D',
    year: '2023',
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800',
    magnets: [
      { x: 82, y: 55, s: 16 }, { x: 88, y: 68, s: 10 }, { x: 78, y: 72, s: 7 },
      { x: 85, y: 42, s: 6  }, { x: 90, y: 80, s: 8  },
    ],
  },
  {
    id: 'proximidad',
    title: 'Proximidad',
    category: 'Fabricación & Distribución Directa',
    year: '2022',
    image: 'https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=800',
    magnets: [
      { x: 4,  y: 24, s: 16 }, { x: 10, y: 36, s: 10 }, { x: 2, y: 44, s: 7 },
      { x: 78, y: 78, s: 14 }, { x: 84, y: 88, s: 8  },
    ],
  },
  {
    id: 'sostenibilidad',
    title: 'Sostenibilidad',
    category: 'Medio Ambiente & Reciclabilidad',
    year: '2021',
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
    magnets: [
      { x: 82, y: 26, s: 14 }, { x: 88, y: 38, s: 10 }, { x: 78, y: 44, s: 7 },
      { x: 84, y: 54, s: 5  }, { x: 90, y: 60, s: 8  },
    ],
  },
]

/* ─── Marquee logos (ENDAL certifications) ───────────── */
const LOGOS = [
  { name: 'REACH',        icon: 'code'        },
  { name: 'ISO 22000',    icon: 'dots'        },
  { name: 'BPA Free',     icon: 'circle-ring' },
  { name: 'Alimentario',  icon: 'arrow'       },
  { name: 'CE Mark',      icon: 'wave-circle' },
  { name: 'LFGB',         icon: 'lines'       },
  { name: 'FDA',          icon: 'bolt'        },
  { name: 'ENDAL S.L.',   icon: 'plus'        },
]

function LogoIcon({ type }: { type: string }) {
  switch (type) {
    case 'code':
      return (
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6,4 1,9 6,14" /><polyline points="16,4 21,9 16,14" /><line x1="13" y1="2" x2="9" y2="16" />
        </svg>
      )
    case 'dots':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="black">
          {[3,10,17].flatMap(cx => [3,10,17].map(cy => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.2" />
          )))}
        </svg>
      )
    case 'circle-ring':
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="black" strokeWidth="2">
          <circle cx="11" cy="11" r="9" /><circle cx="11" cy="11" r="4" />
        </svg>
      )
    case 'arrow':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
          <line x1="2" y1="16" x2="16" y2="2" /><polyline points="7,2 16,2 16,11" />
        </svg>
      )
    case 'wave-circle':
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="black" strokeWidth="1.5">
          <circle cx="11" cy="11" r="9" /><path d="M5 11Q8 7 11 11Q14 15 17 11" />
        </svg>
      )
    case 'lines':
      return (
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" stroke="black" strokeWidth="2.2" strokeLinecap="round">
          <line x1="0" y1="3" x2="24" y2="3" /><line x1="6" y1="9" x2="24" y2="9" /><line x1="0" y1="15" x2="18" y2="15" />
        </svg>
      )
    case 'bolt':
      return (
        <svg width="14" height="20" viewBox="0 0 14 20" fill="black">
          <polygon points="8,0 0,11 6,11 6,20 14,9 8,9" />
        </svg>
      )
    case 'plus':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="black">
          <rect x="7.5" y="0" width="3" height="18" /><rect x="0" y="7.5" width="18" height="3" />
        </svg>
      )
    default:
      return null
  }
}


/* ─── Magnetic squares per card ────────────────────────── */
function MagneticSquares({
  squares,
  hovered,
  pointerX,
  pointerY,
}: {
  squares: { x: number; y: number; s: number }[]
  hovered: boolean
  pointerX: number
  pointerY: number
}) {
  return (
    <>
      {squares.map((sq, i) => {
        const dx = (pointerX - 0.5) * 40
        const dy = (pointerY - 0.5) * 40
        return (
          <motion.div
            key={i}
            className="absolute bg-black z-20 pointer-events-none"
            style={{
              left:   `${sq.x}%`,
              top:    `${sq.y}%`,
              width:  sq.s,
              height: sq.s,
            }}
            animate={hovered
              ? { x: dx, y: dy, transition: { type: 'spring', stiffness: 80, damping: 18, mass: 0.6 } }
              : { x: 0,  y: 0,  transition: { type: 'spring', stiffness: 80, damping: 18, mass: 0.6 } }
            }
          />
        )
      })}
    </>
  )
}

/* ─── Single card ────────────────────────────────────── */
function CaseCard({
  card,
  index,
}: {
  card: (typeof CARDS)[0]
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setPointer({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top)  / rect.height,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHovered(false)
    setPointer({ x: 0.5, y: 0.5 })
  }, [])

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
    >
      <div
        ref={cardRef}
        className="group relative overflow-hidden cursor-pointer h-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.image}
          alt={card.title}
          className="absolute h-full w-full object-cover"
        />

        {/* Plus button */}
        <div
          className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center border border-white/30 text-xs text-white"
          style={{ zIndex: 10 }}
        >
          +
        </div>

        {/* Info plate */}
        <div
          className="absolute bottom-0 left-0 bg-white px-4 pb-3 pt-2.5"
          style={{ zIndex: 20, maxWidth: '70%' }}
        >
          <p
            className="font-normal leading-tight text-black"
            style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2rem)', fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif" }}
          >
            {card.title}
          </p>
          <div className="mt-1.5">
            <span className="text-[12px] text-black/60">{card.category}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Floating background squares ────────────────────── */
function FloatingSquare({
  sq,
  index,
  sectionRef,
}: {
  sq: { x: number; y: number; s: number }
  index: number
  sectionRef: RefObject<HTMLElement | null>
}) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const rawY   = useTransform(scrollYProgress, [0, 1], [0, -(80 + index * 30)])
  const springY = useSpring(rawY, { stiffness: 40, damping: 20 })

  return (
    <motion.div
      className="absolute bg-black"
      style={{
        left:   `${sq.x}%`,
        top:    `${sq.y}%`,
        width:  sq.s,
        height: sq.s,
        y:      springY,
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3 + index * 0.4,
        delay:    index * 0.3,
        repeat:   Infinity,
        ease:     'easeInOut',
      }}
    />
  )
}

/* ─── Main component ─────────────────────────────────── */
export default function NosotrosValues() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headerRef   = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const doubled = [...LOGOS, ...LOGOS]

  return (
    <section
      ref={sectionRef}
      className="nos-values-v2 relative bg-white text-black"
      style={{ fontFamily: "'DM Sans', var(--font-dm-sans), sans-serif" }}
    >
      <style>{`
        @keyframes marqueeProjects {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-projects {
          animation: marqueeProjects 28s linear infinite;
        }
        .marquee-projects:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── Header ── */}
      <div className="relative px-6 pb-4 pt-12 sm:px-10 lg:px-16 lg:pt-14">
        <div ref={headerRef} className="relative mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="mb-4 inline-block bg-black px-4 py-1.5 text-[13px] font-medium tracking-wide text-white">
              Principios
            </span>
            <h2
              className="font-light leading-[1.25] tracking-tight"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}
            >
              <span className="text-black">Lo que guía cada decisión </span>
              <span className="text-black/40">que tomamos</span>
              <br />
              <span className="text-black/40">en ENDAL.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* ── Cards grid — explicit height so cards render ── */}
      <div
        className="px-4 pb-4 sm:px-6"
        style={{ height: 'calc(100vh - 11rem)' }}
      >
        <div
          className="grid gap-2 md:grid-cols-2"
          style={{ height: '100%', gridTemplateRows: '1fr 1fr' }}
        >
          {CARDS.map((card, i) => (
            <CaseCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="mx-auto max-w-7xl px-6 pb-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          {/* Left: copy + CTA */}
          <div className="flex-1">
            <div className="mb-4 flex h-7 w-7 items-center justify-center border border-black/20 text-xs text-black">
              +
            </div>
            <p className="text-[14px] leading-[1.7] text-black/60 max-w-2xl">
              Trabajamos con empresas del sector alimentario que buscan envases de calidad,
              trazabilidad y cumplimiento normativo, convirtiendo sus necesidades de packaging
              en una ventaja competitiva real.
            </p>
            <div className="mt-6">
              <a href="/contacto" className="group inline-flex items-end">
                <span className="inline-flex items-center gap-[10px] border border-black/20 bg-black px-5 py-3 text-base font-medium text-white transition-colors hover:bg-black/85">
                  Hablemos de tu proyecto
                </span>
                <span
                  className="mb-6 flex h-6 w-6 items-center justify-center bg-black transition-all duration-300 group-hover:mb-9"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18.75 6V15.75C18.75 15.949 18.671 16.14 18.53 16.28C18.39 16.421 18.199 16.5 18 16.5C17.801 16.5 17.61 16.421 17.47 16.28C17.329 16.14 17.25 15.949 17.25 15.75V7.81L6.53 18.53C6.39 18.671 6.199 18.75 6 18.75C5.801 18.75 5.61 18.671 5.47 18.53C5.329 18.39 5.25 18.199 5.25 18C5.25 17.801 5.329 17.61 5.47 17.47L16.19 6.75H8.25C8.051 6.75 7.86 6.671 7.72 6.53C7.579 6.39 7.5 6.199 7.5 6C7.5 5.801 7.579 5.61 7.72 5.47C7.86 5.329 8.051 5.25 8.25 5.25H18C18.199 5.25 18.39 5.329 18.53 5.47C18.671 5.61 18.75 5.801 18.75 6Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right: marquee logos */}
          <div className="flex-1 overflow-hidden border-t border-black/10 md:ml-12 md:border-t-0">
            <div className="overflow-hidden py-5">
              <div className="marquee-projects flex w-max">
                {doubled.map((logo, i) => (
                  <div key={i} className="flex shrink-0 items-center gap-2.5 px-8">
                    <LogoIcon type={logo.icon} />
                    <span className="whitespace-nowrap text-sm font-medium tracking-wide text-black/80">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="h-12" />
    </section>
  )
}
