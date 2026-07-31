'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

type NavKey = 'INICIO' | 'PRODUCTOS' | 'NOSOTROS' | 'CATÁLOGO'

type Category   = { name: string; count: number; href: string }
type FeaturedRow = { name: string; desc: string; ref: string; href: string; img: string }
type PanelData  = {
  categories: Category[]
  featured:   FeaturedRow[]
  ctaLabel:   string
  ctaCount?:  number
  ctaHref:    string
}

const PANELS: Partial<Record<NavKey, PanelData>> = {
  PRODUCTOS: {
    categories: [
      { name: 'Envases de aluminio',      count: 108, href: '/productos' },
      { name: 'Pastelería y bombonería',  count: 34,  href: '/productos' },
      { name: 'Bobinas y film',           count: 8,   href: '/productos' },
      { name: 'Maquinaria',               count: 2,   href: '/productos' },
    ],
    featured: [
      { name: 'ENVASE REDONDO',        desc: 'PARA TAPA · HORNO Y CONGELADOR', ref: '21400', img: '/images/catalogo/21400.webp',         href: `/productos/${encodeURIComponent('21400')}` },
      { name: 'BANDEJA RECTANGULAR',   desc: 'SIN TAPA · USO ALIMENTARIO',      ref: '4360',  img: '/images/catalogo/4360.webp',           href: `/productos/${encodeURIComponent('4360')}` },
      { name: 'MOLDE DE PASTELERÍA',   desc: 'ALUMINIO · USO PROFESIONAL',      ref: '1025',  img: '/images/catalogo/1025.webp',           href: `/productos/${encodeURIComponent('1025')}` },
      { name: 'ENVASE CON TAPA',       desc: 'RECTANGULAR · CATERING',          ref: '5475',  img: '/images/catalogo/5475.webp',           href: `/productos/${encodeURIComponent('5475')}` },
    ],
    ctaLabel: 'VER TODOS LOS PRODUCTOS',
    ctaCount: 159,
    ctaHref: '/productos',
  },
}

const NAV_ITEMS: { key: NavKey; label: string; href: string }[] = [
  { key: 'INICIO',       label: 'INICIO',       href: '/'          },
  { key: 'PRODUCTOS',    label: 'PRODUCTOS',    href: '/productos' },
  { key: 'NOSOTROS',     label: 'NOSOTROS',     href: '/nosotros'  },
  { key: 'CATÁLOGO',     label: 'CATÁLOGO',     href: '/catalogo'  },
]

export default function Navbar() {
  const pathname = usePathname()
  const isHome   = pathname === '/'
  const [scrolled,       setScrolled]       = useState(false)
  const [panelOpen,      setPanelOpen]      = useState(false)
  const [renderKey,      setRenderKey]      = useState<NavKey | null>(null)
  const [activeKey,      setActiveKey]      = useState<NavKey | null>(null)
  const [contentVisible, setContentVisible] = useState(true)
  const [panelLeft,      setPanelLeft]      = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Refs to avoid stale closures in async callbacks
  const panelOpenRef = useRef(false)
  const renderKeyRef = useRef<NavKey | null>(null)
  const closeTimer   = useRef<ReturnType<typeof setTimeout> | null>(null)
  const switchTimer  = useRef<ReturnType<typeof setTimeout> | null>(null)
  const itemRefs     = useRef<Partial<Record<NavKey, HTMLLIElement | null>>>({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => () => {
    if (closeTimer.current)  clearTimeout(closeTimer.current)
    if (switchTimer.current) clearTimeout(switchTimer.current)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null }
  }, [])

  const closePanel = useCallback(() => {
    if (switchTimer.current) { clearTimeout(switchTimer.current); switchTimer.current = null }
    panelOpenRef.current = false
    setPanelOpen(false)
    setActiveKey(null)
    // Clear render content after CSS fade-out completes (200ms transition)
    setTimeout(() => { setRenderKey(null); renderKeyRef.current = null; setContentVisible(true) }, 220)
  }, [])

  const scheduleClose = useCallback(() => {
    cancelClose()
    closeTimer.current = setTimeout(closePanel, 80)
  }, [cancelClose, closePanel])

  const handleNavHover = useCallback((key: NavKey) => {
    cancelClose()
    setActiveKey(key)

    const el = itemRefs.current[key]
    if (el) setPanelLeft(el.getBoundingClientRect().left)

    if (!panelOpenRef.current) {
      panelOpenRef.current = true
      renderKeyRef.current = key
      setRenderKey(key)
      setContentVisible(true)
      setPanelOpen(true)
    } else if (renderKeyRef.current !== key) {
      if (switchTimer.current) clearTimeout(switchTimer.current)
      setContentVisible(false)
      switchTimer.current = setTimeout(() => {
        if (!panelOpenRef.current) return // panel closed before switch fired
        renderKeyRef.current = key
        setRenderKey(key)
        setContentVisible(true)
      }, 80)
    }
  }, [cancelClose])

  const panelData = renderKey ? PANELS[renderKey] : null

  return (
    <>
    {/* Fuera del header: así el velo queda por debajo de la barra y no la apaga */}
    <div
      className={`mega-backdrop${panelOpen ? ' open' : ''}`}
      onMouseEnter={scheduleClose}
      aria-hidden="true"
    />
    {/* Captura el toque fuera del menú móvil sin tapar la página */}
    {mobileMenuOpen && (
      <div
        className="mobile-menu__catch"
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
    )}
    <header
      className={`nav${(scrolled || !isHome) ? ' scrolled' : ''}`}
      onMouseLeave={scheduleClose}
    >
      <a href="/" className="nav__logo" aria-label="ENDAL — Envases de Aluminio">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-endal.png" alt="ENDAL" />
      </a>

      <nav>
        <ul className="nav__links">
          {NAV_ITEMS.map(({ key, label, href }) => (
            <li
              key={key}
              ref={el => { itemRefs.current[key] = el }}
              onMouseEnter={() => {
                if (PANELS[key]) handleNavHover(key)
                else scheduleClose()
              }}
            >
              <a href={href} className={activeKey === key ? 'menu-active' : ''}>
                <span className="nav-bracket">[</span>
                {label}
                <span className="nav-bracket">]</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav__right">
        <a href="/contacto" className="nav__contact">CONTACTO</a>
        <a
          href="https://www.instagram.com/endal_envases/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav__star"
          aria-label="Instagram ENDAL"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
        </a>
        <button
          className="nav__hamburger"
          onClick={() => setMobileMenuOpen(v => !v)}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? '✕' : '≡'}
        </button>
      </div>

      {/* Menú móvil: pestaña colgada de la barra, no una capa a pantalla
          completa — el contenido de la página se sigue viendo detrás.
          Sólo las páginas: contacto e Instagram viven en la propia barra. */}
      <div className={`mobile-menu${mobileMenuOpen ? ' mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav">
          <ul>
            {NAV_ITEMS.map(({ key, label, href }) => (
              <li key={key}>
                <a href={href} onClick={() => setMobileMenuOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mega panel — el marco recorta y el contenido baja desde arriba */}
      <div
        className={`mega-panel${panelOpen ? ' open' : ''}`}
        style={{ left: panelLeft }}
        onMouseEnter={cancelClose}
      >
        <div className="mega-panel__sheet">
          {panelData && (
            <div className={`mega-panel__content${contentVisible ? '' : ' fading'}`}>
              <div className="mega-categories">
                {panelData.categories.map(cat => (
                  <a key={cat.name} href={cat.href} className="mega-cat">
                    <span className="mega-cat__label">
                      <span className="mega-cat__bracket">[</span>
                      {cat.name}
                      <span className="mega-cat__bracket">]</span>
                    </span>
                    {cat.count > 0 && <sup>{cat.count}</sup>}
                  </a>
                ))}
              </div>

              {panelData.featured.length > 0 && (
                <>
                  <div className="mega-sep">
                    <svg className="mega-sep__icon" viewBox="0 0 16 14" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true">
                      <path d="M.6 3.1h5.2L7.2 4.8h8.2v8.1a.5.5 0 0 1-.5.5H1.1a.5.5 0 0 1-.5-.5V3.1Z" />
                      <path d="M.6 3.1V1.6a.5.5 0 0 1 .5-.5h4.1l1.4 2" />
                    </svg>
                    <span className="mega-sep__label">PRODUCTOS DESTACADOS</span>
                  </div>

                  <div className="mega-sheet">
                    <div className="mega-rows">
                      {panelData.featured.map(item => (
                        <a key={item.name} href={item.href} className="mega-row">
                          <div className="mega-row__thumb">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.img} alt={item.name} />
                          </div>
                          <span className="mega-row__name">
                            <span className="mega-cat__bracket">[</span>
                            {item.name}
                            <span className="mega-cat__bracket">]</span>
                          </span>
                          <span className="mega-row__desc">{item.desc}</span>
                          <span className="mega-row__ref">REF. {item.ref}</span>
                        </a>
                      ))}
                    </div>

                    <a href={panelData.ctaHref} className="mega-cta">
                      {panelData.ctaLabel}
                      {panelData.ctaCount ? ` [${panelData.ctaCount}]` : ''}
                    </a>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
    </>
  )
}
