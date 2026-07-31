'use client'
import { useState, useMemo, useRef } from 'react'
import { catalogoEndal } from '@/src/data/catalogo'

// ── ICON SVGs ────────────────────────────────────────────────────────────────
const IconRound      = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><circle cx="16" cy="16" r="10"/><ellipse cx="16" cy="16" rx="10" ry="3.5"/></svg>
const IconRect       = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><rect x="4" y="9" width="24" height="14" rx="1"/><path d="M4 13h24"/></svg>
const IconOval       = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><ellipse cx="16" cy="16" rx="12" ry="7"/><ellipse cx="16" cy="16" rx="12" ry="3"/></svg>
const IconTray       = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><path d="M3 10h26l-2 12H5L3 10Z"/><path d="M3 10c0-2 1.5-3 2-3h22c.5 0 2 1 2 3"/></svg>
const IconCake       = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><path d="M9 26V17c0-3.9 3.1-7 7-7s7 3.1 7 7v9H9Z"/><path d="M6 26h20M16 10V5M13 5.5c0-1.7 1.3-2.5 3-2.5s3 .8 3 2.5"/></svg>
const IconBonbon     = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><circle cx="16" cy="16" r="7"/><circle cx="16" cy="16" r="3"/><path d="M9.5 9.5 7 7M22.5 22.5 25 25M22.5 9.5 25 7M9.5 22.5 7 25"/></svg>
const IconLid        = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><path d="M4 18h24"/><path d="M6 18c0-5.5 4.5-9 10-9s10 3.5 10 9"/><rect x="4" y="18" width="24" height="4" rx=".5"/></svg>
const IconRoll       = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><ellipse cx="16" cy="16" rx="4" ry="11"/><path d="M12 5h8M12 27h8"/><path d="M4 16h8M20 16h8"/></svg>
const IconOPS        = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><ellipse cx="16" cy="16" rx="11" ry="7"/><path d="M5 16h22" strokeDasharray="3 2"/></svg>
const IconSquare     = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><rect x="6" y="6" width="20" height="20" rx="2"/><path d="M6 13h20M6 19h20" strokeDasharray="2 2"/></svg>
const IconPP         = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><rect x="6" y="8" width="20" height="16" rx="2"/><path d="M11 8v16M16 8v16" strokeDasharray="2 2"/></svg>
const IconFilm       = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><circle cx="16" cy="16" r="11"/><circle cx="16" cy="16" r="4"/><path d="M16 5v7M16 20v7M5 16h7M20 16h7"/></svg>
const IconPaper      = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><rect x="8" y="5" width="16" height="22" rx="1"/><path d="M8 11h16M8 16h10M8 21h12"/></svg>
const IconVegetal    = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><circle cx="16" cy="16" r="9"/><path d="M7 16h18M16 7c0 5-5 9-5 9s5 4 5 9M16 7c0 5 5 9 5 9s-5 4-5 9"/></svg>
const IconMachine    = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><rect x="3" y="7" width="26" height="18" rx="2"/><circle cx="23" cy="16" r="3.5"/><path d="M3 13h17M7 19h10"/></svg>
const IconAccessory  = () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><rect x="7" y="9" width="18" height="14" rx="1"/><circle cx="16" cy="16" r="4"/><path d="M16 12v8M12 16h8"/></svg>

// ── TAXONOMY ─────────────────────────────────────────────────────────────────
type SubcatDef = { id: string; label: string; nombres: string[]; Icon: () => JSX.Element }
type MacroDef  = { id: string; label: string; desc: string; image: string; subcats: SubcatDef[] }

const TAXONOMY: MacroDef[] = [
  {
    id: 'aluminio', label: 'Aluminio', desc: 'Envases de aluminio de alta calidad',
    image: '/images/catalogo/macro-aluminio.webp',
    subcats: [
      { id: 'redondos',      label: 'Redondos',      Icon: IconRound,     nombres: ['ENVASE REDONDO PARA TAPA', 'ENVASE REDONDO SIN TAPA'] },
      { id: 'rectangulares', label: 'Rectangulares',  Icon: IconRect,      nombres: ['ENVASE RECTANGULAR SIN TAPA', 'ENVASE RECTANGULAR PARA TAPA'] },
      { id: 'ovaladas',      label: 'Ovaladas',       Icon: IconOval,      nombres: ['OVALADAS', 'ENVASES OVALADOS PARA TAPA'] },
      { id: 'baneras',       label: 'Bañeras',        Icon: IconTray,      nombres: ['BAÑERAS'] },
      { id: 'pasteleria',    label: 'Pastelería',     Icon: IconCake,      nombres: ['PASTELERÍA', 'PARED LISA'] },
      { id: 'bomboneria',    label: 'Bombonería',     Icon: IconBonbon,    nombres: ['BOMBONERÍA'] },
      { id: 'tapas',         label: 'Tapas',          Icon: IconLid,       nombres: ['TAPAS ENVASES REDONDOS Y RECTANGULARES'] },
      { id: 'bobinas-al',    label: 'Bobinas',        Icon: IconRoll,      nombres: ['ALUMINIO INDUSTRIAL', 'BOBINA ALUMINIO DOMÉSTICO'] },
    ],
  },
  {
    id: 'plastico', label: 'Plástico', desc: 'Transparencia y resistencia',
    image: '/images/catalogo/macro-plastico.webp',
    subcats: [
      { id: 'ops-ovalado',   label: 'OPS Ovalado',   Icon: IconOPS,       nombres: ['ENVASE OPS OVALADO'] },
      { id: 'ops-cuadrado',  label: 'OPS Cuadrado',  Icon: IconSquare,    nombres: ['ENVASE OPS CUADRADO'] },
      { id: 'polipropileno', label: 'Polipropileno', Icon: IconPP,        nombres: ['ENVASE POLIPROPILENO PP'] },
      { id: 'film',          label: 'Film',           Icon: IconFilm,      nombres: ['BOBINA FILM INDUSTRIAL', 'BOBINA FILM DOMÉSTICO'] },
    ],
  },
  {
    id: 'papel', label: 'Papel y Cartón', desc: 'Biodegradable y sostenible',
    image: '/images/catalogo/macro-papel.webp',
    subcats: [
      { id: 'papel-hornear', label: 'Papel para Hornear', Icon: IconPaper,   nombres: ['ENVASE DE PAPEL PARA HORNEAR', 'ENVASE 4590 PH'] },
      { id: 'papel-vegetal', label: 'Papel Vegetal',      Icon: IconVegetal, nombres: ['BOBINA DE PAPEL VEGETAL', 'BOBINA PAPEL VEGETAL'] },
    ],
  },
  {
    id: 'maquinaria', label: 'Maquinaria', desc: 'Equipos de sellado y envasado',
    image: '/images/catalogo/macro-maquinaria.webp',
    subcats: [
      { id: 'maquinas',   label: 'Máquinas',  Icon: IconMachine,   nombres: ['MÁQUINA', 'MAQUINA'] },
      { id: 'accesorios', label: 'Accesorios', Icon: IconAccessory, nombres: ['PORTA ROLLO'] },
    ],
  },
]

// Pre-build nombre → macroId map
const NOMBRE_TO_MACRO: Record<string, string> = {}
TAXONOMY.forEach(m => m.subcats.forEach(s => s.nombres.forEach(n => { NOMBRE_TO_MACRO[n] = m.id })))

// Product counts per macro
const MACRO_COUNTS: Record<string, number> = {}
TAXONOMY.forEach(m => {
  const nombresSet = new Set(m.subcats.flatMap(s => s.nombres))
  MACRO_COUNTS[m.id] = catalogoEndal.filter(p => nombresSet.has(p.nombre)).length
})

const BASE_IMG = '/images/catalogo/'

// ── ADVANCED FILTER DEFS ─────────────────────────────────────────────────────
type AdvFilter = { id: string; label: string; test: (p: typeof catalogoEndal[0]) => boolean }

const CAPACITY_FILTERS: AdvFilter[] = [
  { id: 'lt500',   label: '< 500 ml',    test: p => { const v = parseInt(p.atributos['capacidad(ml)']); return !isNaN(v) && v < 500 } },
  { id: '500-1k',  label: '500–1000 ml', test: p => { const v = parseInt(p.atributos['capacidad(ml)']); return !isNaN(v) && v >= 500 && v <= 1000 } },
  { id: '1k-2k',   label: '1–2 L',       test: p => { const v = parseInt(p.atributos['capacidad(ml)']); return !isNaN(v) && v > 1000 && v <= 2000 } },
  { id: 'gt2k',    label: '> 2 L',       test: p => { const v = parseInt(p.atributos['capacidad(ml)']); return !isNaN(v) && v > 2000 } },
]
const USAGE_FILTERS: AdvFilter[] = [
  { id: 'con-tapa', label: 'Con tapa',  test: p => p.nombre.includes('PARA TAPA') },
  { id: 'sin-tapa', label: 'Sin tapa',  test: p => p.nombre.includes('SIN TAPA') },
]

// ── COMPONENT ────────────────────────────────────────────────────────────────
export default function ProductCatalog() {
  const [macroId,     setMacroId]     = useState<string | null>(null)
  const [subcatId,    setSubcatId]    = useState<string | null>(null)
  const [search,      setSearch]      = useState('')
  const [advOpen,     setAdvOpen]     = useState(false)
  const [advFilters,  setAdvFilters]  = useState<Set<string>>(new Set())
  const [fading,      setFading]      = useState(false)
  const subRowRef = useRef<HTMLDivElement>(null)

  const activeMacro  = TAXONOMY.find(m => m.id === macroId) ?? null
  const subcats      = activeMacro?.subcats ?? []

  function transition(cb: () => void) {
    setFading(true)
    setTimeout(() => { cb(); setFading(false) }, 150)
  }

  function selectMacro(id: string) {
    if (id === macroId) {
      transition(() => { setMacroId(null); setSubcatId(null) })
    } else {
      transition(() => {
        setMacroId(id); setSubcatId(null)
        requestAnimationFrame(() => subRowRef.current?.scrollTo({ left: 0, behavior: 'smooth' }))
      })
    }
  }

  function selectSubcat(id: string) {
    transition(() => setSubcatId(prev => prev === id ? null : id))
  }

  function toggleAdvFilter(id: string) {
    setAdvFilters(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const visible = useMemo(() => {
    let products = catalogoEndal

    if (macroId) {
      const macro = TAXONOMY.find(m => m.id === macroId)!
      const ok    = new Set(macro.subcats.flatMap(s => s.nombres))
      products = products.filter(p => ok.has(p.nombre))
    }

    if (subcatId && macroId) {
      const macro  = TAXONOMY.find(m => m.id === macroId)!
      const subcat = macro.subcats.find(s => s.id === subcatId)
      if (subcat) {
        const ok = new Set(subcat.nombres)
        products = products.filter(p => ok.has(p.nombre))
      }
    }

    if (advFilters.size > 0) {
      const capActive  = CAPACITY_FILTERS.filter(f => advFilters.has(f.id))
      const useActive  = USAGE_FILTERS.filter(f => advFilters.has(f.id))
      if (capActive.length)  products = products.filter(p => capActive.some(f => f.test(p)))
      if (useActive.length)  products = products.filter(p => useActive.some(f => f.test(p)))
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      products = products.filter(p =>
        p.referencia.toLowerCase().includes(q) ||
        p.nombre.toLowerCase().includes(q) ||
        Object.values(p.atributos).some(v => v.toLowerCase().includes(q))
      )
    }

    return products
  }, [macroId, subcatId, advFilters, search])

  const subcatCount = (s: SubcatDef) =>
    catalogoEndal.filter(p => s.nombres.includes(p.nombre)).length

  const hasActiveFilters = macroId || subcatId || advFilters.size > 0 || search.trim()

  return (
    <div className="cat-nav">

      {/* ── HEADER ── */}
      <div className="cat-nav__header">
        <div>
          <span className="section-label">Catálogo</span>
          {/* «Todos los productos» no dice de qué: el encabezado de la
              página del catálogo es lo que Google lee como tema. */}
          <h1 className="cat-nav__title">Envases de aluminio, plástico y papel</h1>
        </div>
        <div className="cat-nav__meta">
          <span className="cat-nav__count">{visible.length} {visible.length === 1 ? 'referencia' : 'referencias'}</span>
          {hasActiveFilters && (
            <button className="cat-clear-all" onClick={() => { setMacroId(null); setSubcatId(null); setSearch(''); setAdvFilters(new Set()) }}>
              Limpiar filtros ×
            </button>
          )}
        </div>
      </div>

      {/* Guía de uso: en la home la pista va junto al CTA, aquí no hay CTA
          que la sostenga, así que se apoya sobre la propia rejilla. */}
      <p className="cat-nav__hint">
        <span className="cat-nav__hint-arrow" aria-hidden="true">↓</span>
        Elige el tipo de envase que buscas: aluminio, plástico, papel o maquinaria
      </p>

      {/* ── LEVEL 1: MACRO CARDS ── */}
      <div className="cat-macros">
        {TAXONOMY.map(m => (
          <button
            key={m.id}
            className={`cat-macro-card${macroId === m.id ? ' cat-macro-card--active' : ''}`}
            onClick={() => selectMacro(m.id)}
            aria-pressed={macroId === m.id}
          >
            <div className="cat-macro-card__img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.image} alt={m.label} width={900} height={675} decoding="async" />
            </div>
            <div className="cat-macro-card__body">
              <strong className="cat-macro-card__label">{m.label}</strong>
              <span className="cat-macro-card__desc">{m.desc}.</span>
            </div>
            <span className="cat-macro-card__badge">{MACRO_COUNTS[m.id]}</span>
          </button>
        ))}
      </div>

      {/* ── LEVEL 2: SUBCATEGORY ICON ROW ── */}
      <div className={`cat-subs-wrap${subcats.length ? ' cat-subs-wrap--open' : ''}`}>
        <div className="cat-subs" ref={subRowRef}>
          {subcats.map(s => (
            <button
              key={s.id}
              data-sub={s.id}
              className={`cat-sub${subcatId === s.id ? ' cat-sub--active' : ''}`}
              onClick={() => selectSubcat(s.id)}
            >
              <span className="cat-sub__icon"><s.Icon /></span>
              <span className="cat-sub__label">{s.label}</span>
              <sup className="cat-sub__count">{subcatCount(s)}</sup>
            </button>
          ))}
        </div>
      </div>

      {/* ── LEVEL 3: SEARCH + ADVANCED FILTERS ── */}
      <div className="cat-toolbar">
        <label className="cat-search">
          <span className="cat-search__icon" aria-hidden>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
            </svg>
          </span>
          <input
            className="cat-search__input"
            type="search"
            placeholder="¿Qué envase estás buscando?"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Buscar producto"
          />
          {search && (
            <button className="cat-search__clear" onClick={() => setSearch('')} aria-label="Limpiar búsqueda">×</button>
          )}
        </label>

        <button
          className={`cat-adv-btn${advOpen ? ' cat-adv-btn--open' : ''}${advFilters.size > 0 ? ' cat-adv-btn--has-active' : ''}`}
          onClick={() => setAdvOpen(v => !v)}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            <path d="M4 6h16M7 12h10M10 18h4"/>
          </svg>
          Filtros avanzados
          {advFilters.size > 0 && <span className="cat-adv-btn__pill">{advFilters.size}</span>}
        </button>
      </div>

      {/* ── ADVANCED FILTER PANEL ── */}
      <div className={`cat-adv-panel${advOpen ? ' cat-adv-panel--open' : ''}`} aria-hidden={!advOpen}>
        <div className="cat-adv-panel__inner">
          <div className="cat-adv-row">
            <span className="cat-adv-row__label">Capacidad</span>
            <div className="cat-adv-chips">
              {CAPACITY_FILTERS.map(f => (
                <button
                  key={f.id}
                  className={`cat-adv-chip${advFilters.has(f.id) ? ' cat-adv-chip--active' : ''}`}
                  onClick={() => toggleAdvFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="cat-adv-row">
            <span className="cat-adv-row__label">Tipo</span>
            <div className="cat-adv-chips">
              {USAGE_FILTERS.map(f => (
                <button
                  key={f.id}
                  className={`cat-adv-chip${advFilters.has(f.id) ? ' cat-adv-chip--active' : ''}`}
                  onClick={() => toggleAdvFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div className="catalog-body">
        <div className={`catalog-grid${fading ? ' catalog-grid--fading' : ''}`}>
          {visible.map((producto, i) => {
            const imgSrc = producto.imagen ? BASE_IMG + producto.imagen : null
            const href   = `/productos/${encodeURIComponent(producto.referencia)}`
            return (
              <a key={producto.id} href={href} className="catalog-card" style={{ animationDelay: `${(i % 16) * 35}ms` }}>
                <div className="catalog-card__img">
                  {imgSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={imgSrc} alt={`${producto.nombre} ${producto.referencia}`} loading="lazy" />
                  ) : (
                    <div className="catalog-card__img-placeholder">{producto.referencia}</div>
                  )}
                </div>
                <span className="catalog-card__cat">{producto.nombre}</span>
                <h3 className="catalog-card__name">{producto.referencia}</h3>
                <div className="catalog-card__footer">
                  <span className="catalog-card__ref">REF. {producto.referencia}</span>
                  <span className="catalog-card__detail-btn">Ver detalles →</span>
                </div>
              </a>
            )
          })}
        </div>

        {visible.length === 0 && (
          <div className="cat-empty">
            <p>No hay productos para esta selección.</p>
            <button onClick={() => { setMacroId(null); setSubcatId(null); setSearch(''); setAdvFilters(new Set()) }}>
              Ver todo el catálogo
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
