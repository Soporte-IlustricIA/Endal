export default function HeroText() {
  return (
    <section className="hero-text">
      <div className="hero-text__logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-endal.png" alt="ENDAL — Envases de aluminio y plástico" />
      </div>
      <p className="hero-text__copy">
        Especialistas en la fabricación y venta de envases de aluminio, papel y plástico para la conservación de alimentos. Porque entendemos que cada producto merece el envase que se ajusta a él.
      </p>
      <h1 className="hero-text__headline">
        Fabricación española,<br />calidad garantizada.
      </h1>
    </section>
  )
}
