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
                src="https://a.storyblok.com/f/285561750510308/2000x2000/48f73d339e/ref_mint_thumbnail-tuile.jpg"
                alt="Envases de aluminio"
              />
            </a>
            <a href="/plastico" className="sg-cell" data-cursor="Ver Plástico">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://a.storyblok.com/f/285561750510308/2000x2000/4c12bcd989/hiloapp_thumb.jpg"
                alt="Envases de plástico"
              />
            </a>
            <a href="/papel" className="sg-cell" data-cursor="Ver Papel">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ref.digital/cdn-cgi/image/g=0.50x0.41,w=800,h=800,f=webp,q=95,fit=crop/https://a.storyblok.com/f/285561750510308/1680x1680/f7c2f22b9b/halo_preview_grid.jpg"
                alt="Envases de papel"
              />
            </a>
            <a href="/maquinaria" className="sg-cell" data-cursor="Ver Maquinaria">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://a.storyblok.com/f/285561750510308/2000x2000/4c93a6e157/ref_fromeo_thumbnail-tuile.jpg"
                alt="Maquinaria ENDAL"
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
