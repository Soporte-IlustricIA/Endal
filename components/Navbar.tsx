'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

type NavKey = 'INICIO' | 'PRODUCTOS' | 'NOSOTROS' | 'CATÁLOGO' | 'DISTRIBUCIÓN'

type Category   = { name: string; count: number; href: string }
type FeaturedRow = { name: string; desc: string; ref: string; href: string }
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
      { name: 'Recipientes de aluminio',  count: 12, href: '/aluminio' },
      { name: 'Film y bolsas de plástico', count: 8,  href: '/plastico' },
      { name: 'Papel de aluminio',          count: 6,  href: '/papel' },
      { name: 'Maquinaria',                count: 2,  href: '/maquinaria' },
    ],
    featured: [
      { name: 'BANDEJAS DE ALUMINIO',  desc: 'PARA HORNO Y CONGELADOR',  ref: 'AL-BND-001', href: '#' },
      { name: 'FILM ESTIRABLE',        desc: 'ALIMENTARIO Y DOMÉSTICO',   ref: 'PL-FLM-002', href: '#' },
      { name: 'PAPEL DE HORNO',        desc: 'ANTIADHERENTE Y VEGANO',    ref: 'PP-HRN-003', href: '#' },
      { name: 'CÁPSULAS DE ALUMINIO',  desc: 'PARA ESPRESSO Y BEBIDAS',   ref: 'AL-CAP-004', href: '#' },
    ],
    ctaLabel: 'VER TODOS LOS PRODUCTOS',
    ctaCount: 22,
    ctaHref: '/productos',
  },
}

const NAV_ITEMS: { key: NavKey; label: string; href: string }[] = [
  { key: 'INICIO',       label: 'INICIO',       href: '/'          },
  { key: 'PRODUCTOS',    label: 'PRODUCTOS',    href: '/productos' },
  { key: 'NOSOTROS',     label: 'NOSOTROS',     href: '/nosotros'  },
  { key: 'CATÁLOGO',     label: 'CATÁLOGO',     href: '#'          },
  { key: 'DISTRIBUCIÓN', label: 'DISTRIBUCIÓN', href: '#'          },
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

      {/* Mobile menu overlay */}
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
        <a href="/contacto" className="mobile-menu__contact" onClick={() => setMobileMenuOpen(false)}>
          CONTACTO
        </a>
      </div>

      {/* Mega panel — absolute child of fixed header, overflows below */}
      <div
        className={`mega-panel${panelOpen ? ' open' : ''}`}
        style={{ left: panelLeft }}
        onMouseEnter={cancelClose}
      >
        {panelData && (
          <div className={`mega-panel__content${contentVisible ? '' : ' fading'}`}>
            <div className="mega-categories">
              {panelData.categories.map(cat => (
                <a key={cat.name} href={cat.href} className="mega-cat">
                  <span>{cat.name}</span>
                  {cat.count > 0 && <sup>{cat.count}</sup>}
                </a>
              ))}
            </div>

            {panelData.featured.length > 0 && (
              <>
                <div className="mega-sep">
                  <span className="mega-sep__icon">□</span>
                  <span className="mega-sep__label">PRODUCTOS DESTACADOS</span>
                </div>
                <div className="mega-rows">
                  {panelData.featured.map(item => (
                    <a key={item.name} href={item.href} className="mega-row">
                      <div className="mega-row__thumb" />
                      <span className="mega-row__name">{item.name}</span>
                      <span className="mega-row__desc">{item.desc}</span>
                      <span className="mega-row__ref">{item.ref}</span>
                    </a>
                  ))}
                </div>
              </>
            )}

            <a href={panelData.ctaHref} className="mega-cta">
              {panelData.ctaLabel}
              {panelData.ctaCount ? ` [${panelData.ctaCount}]` : ''}
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
