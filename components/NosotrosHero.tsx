export default function NosotrosHero() {
  return (
    <section className="nos-hero">
      <div className="nos-hero__left">
        <span className="section-label">Nosotros</span>
        <div className="nos-hero__center">
          <span className="nos-hero__year" aria-hidden="true">1991</span>
          <p className="nos-hero__tagline">
            Tres décadas fabricando<br />envases que protegen<br />lo que más importa.
          </p>
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
