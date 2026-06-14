const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Productos',  href: '/productos' },
  { label: 'Nosotros',  href: '#' },
  { label: 'Catálogo',  href: '#' },
  { label: 'Contacto',  href: '/contacto' },
]
const SOCIAL_LINKS = ['Instagram', 'LinkedIn', 'Facebook', 'YouTube']

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
            {SOCIAL_LINKS.map(item => (
              <li key={item}>
                <a href="#">
                  <span className="crochet">[</span>&nbsp;{item}&nbsp;<span className="crochet">]</span>
                </a>
              </li>
            ))}
          </ul>

          <address className="footer__contact" style={{ fontStyle: 'normal' }}>
            <div className="footer__contact-row">
              <span className="footer__contact-key">A</span>
              <span className="footer__contact-val">
                Ausías March, 7-9,<br />Polígono Industrial Canastell
              </span>
            </div>
            <div className="footer__contact-row">
              <span className="footer__contact-key">T</span>
              <span className="footer__contact-val">
                <a href="tel:+34965661472">(+34) 965 66 14 72</a><br />
                <a href="tel:+34965669891">(+34) 965 66 98 91</a>
              </span>
            </div>
            <div className="footer__contact-row">
              <span className="footer__contact-key">F</span>
              <span className="footer__contact-val">
                (+34) 965 66 92 03
              </span>
            </div>
            <div className="footer__contact-row">
              <span className="footer__contact-key">E</span>
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
