export default function ServicesGrid() {
  return (
    <section className="sg-section">
      <div className="sg-outer">

        {/* Left labels: Aluminio (top) + Papel (bottom) */}
        <div className="sg-side">
          <div className="sg-label">
            <span className="sg-label__title">Aluminio</span>
            <span className="sg-label__desc">Envases y bobinas de aluminio doméstico e industrial para conservación profesional.</span>
          </div>
          <div className="sg-label">
            <span className="sg-label__title">Papel</span>
            <span className="sg-label__desc">Bobinas de papel vegetal y envases de papel para hornear de uso alimentario.</span>
          </div>
        </div>

        {/* Center: 2×2 image grid */}
        <div className="sg-center">
          <div className="sg-images">
            <a href="/aluminio" className="sg-cell" data-cursor="Ver Aluminio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bandeja-lasana.webp"
                alt="Bandeja de aluminio con lasaña recién horneada"
                loading="lazy"
                decoding="async"
                width={700}
                height={700}
              />
            </a>
            <a href="/plastico" className="sg-cell" data-cursor="Ver Plástico">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/home/plastico-envase.webp"
                alt="Envase de plástico transparente con ensalada preparada"
                loading="lazy"
                decoding="async"
                width={700}
                height={700}
              />
            </a>
            <a href="/papel" className="sg-cell" data-cursor="Ver Papel">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/papel-vegetal-1.webp"
                alt="Bobinas de papel vegetal en la línea de producción"
                loading="lazy"
                decoding="async"
                width={700}
                height={700}
              />
            </a>
            <a href="/maquinaria" className="sg-cell" data-cursor="Ver Maquinaria">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/papel-vegetal-2.webp"
                alt="Máquina envasadora de bobinas en planta"
                loading="lazy"
                decoding="async"
                width={700}
                height={700}
              />
            </a>
          </div>
        </div>

        {/* Right labels: Plástico (top) + Maquinaria (bottom) */}
        <div className="sg-side sg-side--right">
          <div className="sg-label" style={{ alignItems: 'flex-end' }}>
            <span className="sg-label__title">Plástico</span>
            <span className="sg-label__desc" style={{ textAlign: 'right' }}>Envases OPS y polipropileno, bobinas de film doméstico e industrial.</span>
          </div>
          <div className="sg-label" style={{ alignItems: 'flex-end' }}>
            <span className="sg-label__title">Maquinaria</span>
            <span className="sg-label__desc" style={{ textAlign: 'right' }}>Máquinas dispensadoras y portarrollos para uso profesional.</span>
          </div>
        </div>

      </div>
    </section>
  )
}
