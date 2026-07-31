export default function NosotrosHero() {
  return (
    <section className="nos-hero">
      <div className="nos-hero__left">
        <span className="section-label">Nosotros</span>
        <div className="nos-hero__center">
          <span className="nos-hero__year" aria-hidden="true">1991</span>
          {/* La página no tenía encabezado principal: este párrafo era su
              titular a todos los efectos, así que pasa a serlo también en
              el marcado. El aspecto no cambia, la clase es la misma. */}
          <h1 className="nos-hero__tagline">
            Tres décadas fabricando<br />envases que protegen<br />lo que más importa.
          </h1>
        </div>
        <div className="nos-hero__meta">
          <span className="nos-hero__meta-item">San Vicente del Raspeig · Alicante</span>
          <span className="nos-hero__meta-sep">·</span>
          <span className="nos-hero__meta-item">Fabricación 100% española</span>
        </div>
      </div>
      <div className="nos-hero__right">
        <video
          src="/nosotros.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="nos-hero__img"
        />
      </div>
    </section>
  )
}
