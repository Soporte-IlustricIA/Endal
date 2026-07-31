export default function WorkCta() {
  return (
    <section className="work-cta">
      <div className="section-label">Catálogo</div>
      <div className="work-cta__content">
        <h2 className="work-cta__headline">
          De la bobina al envase, fabricamos la solución para cada <em>producto.</em>
        </h2>
        {/* En el escritorio la gama se descubre al pasar el cursor por las
            fotos; en táctil no hay hover, así que la pista va escrita. */}
        <div className="work-cta__actions">
          <a href="/productos" className="btn-outline">Ver catálogo completo</a>
          <p className="work-cta__hint">
            <span className="work-cta__hint-arrow" aria-hidden="true">↓</span>
            O entra en una gama tocando cualquiera de las cuatro imágenes
          </p>
        </div>
      </div>
    </section>
  )
}
