export default function NosotrosCta() {
  return (
    <section className="nos-cta">
      <div className="nos-cta__left">
        <span className="section-label nos-cta__label">Contacto</span>
        <h2 className="nos-cta__heading">
          ¿Tienes un proyecto<br />en mente?
        </h2>
      </div>
      <div className="nos-cta__right">
        <p className="nos-cta__sub">
          Nuestro equipo está disponible para asesorarte sobre el envase
          más adecuado para cada producto, formato y canal de distribución.
        </p>
        <div className="nos-cta__actions">
          <a href="/contacto" className="btn-outline nos-cta__btn">
            Habla con nosotros →
          </a>
          <a href="/aluminio" className="nos-cta__link">
            Ver catálogo de aluminio
          </a>
        </div>
      </div>
    </section>
  )
}
