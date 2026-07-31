import AboutCarousel from './AboutCarousel'
import PlantVideo from './PlantVideo'

export default function About() {
  return (
    <section className="about">
      <h2 className="section-label about__label">Nosotros</h2>
      <header className="about__header">
        <div className="about__content">
          <p className="about__copy">
            ENDAL investiga, diseña y fabrica envases pensando siempre en quien los usa: el espacio, la temperatura y la higiene de cada producto.
            <br /><br />
            Presentes en Europa y África, con más de 3 décadas de fabricación 100% española
            <span style={{ color: 'var(--black)' }}>.</span>
          </p>
          <a href="/nosotros" className="btn-outline">Conoce ENDAL</a>
          <AboutCarousel />
        </div>
        <div className="about__video-wrap">
          {/* Mismo archivo que la sección de trayectoria: en escritorio ya
              está en caché cuando se llega abajo. */}
          <PlantVideo />
        </div>
      </header>

    </section>
  )
}
