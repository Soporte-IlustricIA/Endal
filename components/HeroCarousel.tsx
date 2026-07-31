'use client'
import { useEffect, useState, useCallback, useRef } from 'react'

interface Project {
  name: string
  ref: string
  imgA: string
  imgB: string
  /* La tira pinta las miniaturas a 93×48; servir la imagen completa ahí
     costaba ~150 KB por miniatura. */
  thumb: string
}

/* La tira alterna dos registros: producto envasado (qué fabricamos) y
   planta, almacén y equipo (quiénes lo fabricamos). Ninguna de estas
   fotos se repite en las secciones de abajo.
   Las fotos se apoyan sobre el fondo de la página: el hero ya no pinta
   un recuadro de color a su alrededor. */
const PROJECTS: Record<string, Project> = {
  aluminio: {
    name: 'Envases de aluminio',
    ref: 'ENDAL · AL · 1991',
    imgA: '/images/home/aluminio-moldes.webp',
    imgB: '/images/home/aluminio-bandeja.webp',
    thumb: '/images/home/aluminio-moldes-thumb.webp',
  },
  papel: {
    name: 'Papel y film',
    ref: 'ENDAL · PF · 1991',
    imgA: '/images/home/papel-horno.webp',
    imgB: '/images/home/papel-galletas.webp',
    thumb: '/images/home/papel-horno-thumb.webp',
  },
  plastico: {
    name: 'Envases de plástico',
    ref: 'ENDAL · PL · 1991',
    imgA: '/images/home/plastico-tarrinas.webp',
    imgB: '/images/home/plastico-bandejas.webp',
    thumb: '/images/home/plastico-tarrinas-thumb.webp',
  },
  catering: {
    name: 'Listo para servir',
    ref: 'ENDAL · CT · 1991',
    imgA: '/images/home/catering-bandeja.webp',
    imgB: '/images/home/catering-asado.webp',
    thumb: '/images/home/catering-bandeja-thumb.webp',
  },
  planta: {
    name: 'Fabricación propia',
    ref: 'ENDAL · FB · 1991',
    imgA: '/images/home/planta-linea.webp',
    imgB: '/images/home/planta-nave.webp',
    thumb: '/images/home/planta-linea-thumb.webp',
  },
  almacen: {
    name: 'Almacén y logística',
    ref: 'ENDAL · LG · 1991',
    imgA: '/images/home/almacen-cajas.webp',
    imgB: '/images/home/almacen-pasillo.webp',
    thumb: '/images/home/almacen-cajas-thumb.webp',
  },
}

/* Producto y empresa alternados, para que la tira no encadene dos
   diapositivas del mismo registro. */
const ORDER = ['aluminio', 'catering', 'papel', 'planta', 'plastico', 'almacen']
const N = ORDER.length

/* La referencia encadena dos fases: primero corren las miniaturas,
   y sólo cuando terminan cambian media, fondo y textos. */
const SLIDE_MS = 600   // recorrido de la tira de miniaturas
const SWAP_MS  = 550   // entrada/salida de media y textos
const AUTO_MS  = 5000

const WINDOW = 3 // miniaturas visibles a cada lado del marcador
const idAt = (i: number) => ORDER[((i % N) + N) % N]

export default function HeroCarousel() {
  // Índice monotónico: nunca reinicia, así la tira corre siempre en la
  // dirección pedida y no da saltos al dar la vuelta.
  const [pos, setPos] = useState(0)
  const [shown, setShown] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const busy = useRef(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  // `go` se crea una sola vez, así que lee los valores vigentes por ref.
  const shownRef = useRef(shown)
  const posRef = useRef(pos)
  useEffect(() => { shownRef.current = shown }, [shown])
  useEffect(() => { posRef.current = pos }, [pos])

  const go = useCallback((target: number) => {
    if (busy.current || target === posRef.current) return
    busy.current = true
    setPos(target)
    timers.current.push(
      setTimeout(() => {
        setPrev(shownRef.current)
        setShown(target)
        timers.current.push(
          setTimeout(() => {
            setPrev(null)
            busy.current = false
          }, SWAP_MS)
        )
      }, SLIDE_MS)
    )
  }, [])

  useEffect(() => {
    const t = setInterval(() => { if (!busy.current) go(posRef.current + 1) }, AUTO_MS)
    return () => clearInterval(t)
  }, [go])

  useEffect(() => () => { timers.current.forEach(clearTimeout) }, [])

  const p = PROJECTS[idAt(shown)]
  const pOut = prev !== null ? PROJECTS[idAt(prev)] : null

  const thumbs: number[] = []
  for (let i = pos - WINDOW; i <= pos + WINDOW; i++) thumbs.push(i)

  return (
    <section className="hero-carousel">
      <div className="hero-carousel__inner">

        {/* ── Media: la nueva entra por encima de la saliente ── */}
        <div className="hero-carousel__media">
          <div className="hero-carousel__stage">
          {pOut && (
            <div className="hero-carousel__slide" key={`out-${prev}`}>
              <div className="hero-carousel__media-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pOut.imgA} alt="" width={1000} height={1200} decoding="async" />
              </div>
              <div className="hero-carousel__media-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pOut.imgB} alt="" width={1000} height={1200} decoding="async" />
              </div>
            </div>
          )}
          <div className="hero-carousel__slide hero-carousel__slide--in" key={`in-${shown}`}>
            <div className="hero-carousel__media-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.imgA} alt={p.name} width={1000} height={1200} decoding="async" fetchPriority="high" />
            </div>
            <div className="hero-carousel__media-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.imgB} alt={p.name} width={1000} height={1200} decoding="async" fetchPriority="high" />
            </div>
          </div>
          </div>
        </div>

        {/* ── Barra inferior ── */}
        <div className="hero-carousel__bottom">
          <p className="hero-carousel__project-name">
            <span className="hc-swap">
              {pOut && <span className="hc-swap__out" key={`n-out-${prev}`}>{pOut.name}</span>}
              <span className="hc-swap__in" key={`n-in-${shown}`}>{p.name}</span>
            </span>
          </p>

          <div className="hero-carousel__thumbs">
            <button
              type="button"
              className="hero-carousel__arrow hero-carousel__arrow--prev"
              onClick={() => go(pos - 1)}
              aria-label="Proyecto anterior"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="M10 3 5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="hero-carousel__strip">
              <ul className="hero-carousel__track">
                {thumbs.map(i => (
                  <li
                    key={i}
                    className="hero-carousel__thumb"
                    style={{ transform: `translate3d(calc(${i - pos} * var(--thumb-step)), 0, 0)` }}
                  >
                    <button
                      type="button"
                      onClick={() => go(i)}
                      tabIndex={i === pos ? 0 : -1}
                      aria-label={PROJECTS[idAt(i)].name}
                      aria-current={i === pos}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={PROJECTS[idAt(i)].thumb}
                        alt=""
                        width={220}
                        height={132}
                        decoding="async"
                      />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="hero-carousel__strip-fade" aria-hidden="true" />
              <div className="hero-carousel__marker" aria-hidden="true">
                <span /><span /><span /><span />
              </div>
            </div>

            <button
              type="button"
              className="hero-carousel__arrow hero-carousel__arrow--next"
              onClick={() => go(pos + 1)}
              aria-label="Proyecto siguiente"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="m6 3 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <p className="hero-carousel__ref">
            <span className="hc-swap">
              {pOut && <span className="hc-swap__out" key={`r-out-${prev}`}>{pOut.ref}</span>}
              <span className="hc-swap__in" key={`r-in-${shown}`}>{p.ref}</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
