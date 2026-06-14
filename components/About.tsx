import AboutCarousel from './AboutCarousel'

export default function About() {
  return (
    <section className="about">
      <h2 className="section-label about__label">Nosotros</h2>
      <header className="about__header">
        <div className="about__content">
          <p className="about__copy">
            ENDAL investiga, diseña y fabrica envases pensando siempre en quien los usa: el espacio, la temperatura y la higiene de cada producto.
            <br /><br />
            Presentes en Europa y África, con más de 4 décadas de fabricación 100% española
            <span style={{ color: 'var(--blue)' }}>.</span>
          </p>
          <a href="/nosotros" className="btn-outline">Conoce ENDAL</a>
          <AboutCarousel />
        </div>
        <div className="about__video-wrap">
          <video src="/video.mp4" autoPlay loop muted playsInline />
        </div>
      </header>

      <div className="about__media">
        <div className="about__media-box">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://a.storyblok.com/f/285561750510308/1920x1080/20d97ea675/cellart_09_elevated-process.jpg"
            alt="CellArt project"
          />
        </div>
      </div>
    </section>
  )
}
