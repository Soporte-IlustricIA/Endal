const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Productos',  href: '/productos' },
  { label: 'Nosotros',  href: '#' },
  { label: 'Catálogo',  href: '#' },
  { label: 'Contacto',  href: '/contacto' },
]
/* Sólo los perfiles que ENDAL tiene activos. El de Instagram es el mismo
   que abre el icono de la barra de navegación. */
const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/endal_envases/' },
  { label: 'Facebook',  href: 'https://www.facebook.com/people/ENDAL-SL/100069825049118/' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__grid">
          <div className="footer__logo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-endal.png"
              alt="ENDAL"
              className="footer__logo"
            />
          </div>

          <nav>
            <ul className="footer__nav">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}>
                    <span className="crochet">[</span>&nbsp;{label}&nbsp;<span className="crochet">]</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="footer__social">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <span className="crochet">[</span>&nbsp;{label}&nbsp;<span className="crochet">]</span>
                </a>
              </li>
            ))}
          </ul>

          <address className="footer__contact" style={{ fontStyle: 'normal' }}>
            <div className="footer__contact-row">
              <span className="footer__contact-key">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <span className="footer__contact-val">
                Ausías March, 7-9,<br />Polígono Industrial Canastell
              </span>
            </div>
            <div className="footer__contact-row">
              <span className="footer__contact-key">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <span className="footer__contact-val">
                <a href="tel:+34965661472">(+34) 965 66 14 72</a><br />
                <a href="tel:+34965669891">(+34) 965 66 98 91</a>
              </span>
            </div>
            <div className="footer__contact-row">
              <span className="footer__contact-key">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
                </svg>
              </span>
              <span className="footer__contact-val">
                (+34) 965 66 92 03
              </span>
            </div>
            <div className="footer__contact-row">
              <span className="footer__contact-key">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </span>
              <span className="footer__contact-val">
                <a href="mailto:info@endal.es">INFO@ENDAL.ES</a>
              </span>
            </div>
          </address>
        </div>

        <div className="footer__legal">
          <a href="/devoluciones">Política de Devoluciones</a>
          <a href="/aviso-legal">Aviso Legal</a>
          <a href="/privacidad">Política de Privacidad y Cookies</a>
        </div>

        <div className="footer__bottom">
          <span className="footer__lang">© 2026 ENDAL, S.L.</span>
          <span className="footer__lang" style={{ opacity: .55 }}>Fabricación 100% española</span>
        </div>

      </div>
    </footer>
  )
}
