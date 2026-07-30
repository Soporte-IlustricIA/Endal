export default function MaterialesSection() {
  const waves = [0, 28, 56, 84, 112, 140, 168, 196, 224, 252, 280, 308].map((y, i) => {
    const a = i % 2 === 0 ? -16 : 16
    return `M0,${y} Q240,${y + a} 480,${y} Q720,${y - a} 960,${y} Q1200,${y + a} 1440,${y}`
  })

  return (
    <section className="mat">

      {/* ── Dark header with waves ── */}
      <div className="mat__header">
        <svg className="mat__waves" viewBox="0 0 1440 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {waves.map((d, i) => (
            <path key={i} d={d} fill="none" stroke="rgba(255,255,255,0.055)" strokeWidth="1.4" />
          ))}
        </svg>
        <div className="mat__header-inner">
          <p className="mat__header-title">
            El propósito de este sitio es presentar nuestros materiales
            y recibir solicitudes de pedido
          </p>
          <span className="mat__header-label">Bloque materiales</span>
        </div>
      </div>

      {/* ── Two-column cards ── */}
      <div className="mat__cards">

        {/* Left card */}
        <div className="mat__card-left">
          <div className="mat__cl-top">
            <div className="mat__cl-brand">
              <span>ENDAL</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="mat__cl-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="1" y="1" width="12" height="12" rx="2" />
                  <line x1="7" y1="4" x2="7" y2="10" />
                  <line x1="4" y1="7" x2="10" y2="7" />
                </svg>
              </div>
            </div>
            <p className="mat__cl-sub">Tu envase ideal en el corazón de la producción alimentaria</p>
          </div>
          <div className="mat__cl-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/bandeja-lasana.webp" alt="Envases ENDAL" />
          </div>
          <div className="mat__cl-cta">
            <span>DESCARGAR</span>
            <span>EL CATÁLOGO</span>
          </div>
          <ul className="mat__cl-list">
            <li>Infraestructura industrial y confort doméstico</li>
            <li>20 minutos del centro logístico de distribución</li>
          </ul>
        </div>

        {/* Right card */}
        <div className="mat__card-right">
          <div className="mat__cr-content">
            <h2 className="mat__cr-title">
              Aluminio desde 5,3 mm. Nos encargamos de toda la rutina por ti
            </h2>
            <p className="mat__cr-body">
              Según tu necesidad, el asesor de materiales te indicará qué documentos
              reunir, qué proveedores contactar y en qué orden gestionar tu solicitud
            </p>
            <div className="mat__cr-features">
              <div className="mat__feature">
                <span className="mat__check">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6.5" stroke="#2a7a3a" />
                    <path d="M4 7l2 2 4-4" stroke="#2a7a3a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Mínima tasa de rechazo</span>
              </div>
              <div className="mat__feature">
                <span className="mat__check">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6.5" stroke="#2a7a3a" />
                    <path d="M4 7l2 2 4-4" stroke="#2a7a3a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Condiciones favorables</span>
              </div>
              <div className="mat__feature">
                <span className="mat__check">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6.5" stroke="#2a7a3a" />
                    <path d="M4 7l2 2 4-4" stroke="#2a7a3a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Respuesta acelerada a la solicitud</span>
              </div>
              <div className="mat__feature">
                <span className="mat__check">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6.5" stroke="#2a7a3a" />
                    <path d="M4 7l2 2 4-4" stroke="#2a7a3a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Ahorro de tiempo</span>
              </div>
            </div>
          </div>
          <div className="mat__cr-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/bobinas-aluminio.webp" alt="Materiales ENDAL" />
          </div>
        </div>
      </div>

      {/* ── Full-width image ── */}
      <div className="mat__full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/fabrica-endal.webp" alt="Fábrica ENDAL" className="mat__full-img" />
        <div className="mat__full-overlay">
          <p className="mat__full-text">
            Información sobre el proyecto y la arquitectura
          </p>
        </div>
        <div className="mat__full-bar">
          <p className="mat__full-bar-left">
            Club náutico, eco-parque, complejo deportivo, instalaciones y playa equipada
          </p>
          <div className="mat__full-bar-right">
            <svg width="32" height="22" viewBox="0 0 32 22" fill="none" aria-hidden="true">
              <rect y="0"  width="32" height="4" rx="2" fill="#4caf50" />
              <rect y="9"  width="24" height="4" rx="2" fill="#4caf50" />
              <rect y="18" width="16" height="4" rx="2" fill="#4caf50" />
            </svg>
            <p>En nuestra comunidad, infraestructura de producción y confort urbano</p>
          </div>
        </div>
      </div>

    </section>
  )
}
