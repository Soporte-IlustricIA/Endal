export default function HeroText() {
  return (
    <section className="hero-text">
      <div className="hero-text__logo">
        <span className="hero-text__logo-mask">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-endal.png" alt="ENDAL — Envases de aluminio y plástico" />
        </span>
      </div>

      <p className="hero-text__copy">
        <span className="line-mask"><span className="line-mask__in" style={{ animationDelay: '.28s' }}>
          Especialistas en la fabricación y venta de envases de aluminio, papel y plástico para la conservación de alimentos. Porque entendemos que cada producto merece el envase que se ajusta a él.
        </span></span>
      </p>

      <h1 className="hero-text__headline">
        <span className="line-mask"><span className="line-mask__in" style={{ animationDelay: '.68s' }}>
          Fabricación española,
        </span></span>
        <span className="line-mask"><span className="line-mask__in" style={{ animationDelay: '.78s' }}>
          calidad garantizada.
        </span></span>
      </h1>
    </section>
  )
}
