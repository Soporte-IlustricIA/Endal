'use client'

/* Fotografía real de planta y equipo. El orden alterna producción y
   personas para que la cinta no encadene dos planos parecidos. */
const SLIDES = [
  { src: '/fabrica-endal.webp',    alt: 'Línea de producción de envases de aluminio en la planta de ENDAL' },
  { src: '/equipo-endal-1.webp',   alt: 'Operaria de ENDAL controlando una máquina de termoconformado' },
  { src: '/bobinas-aluminio.webp', alt: 'Brazo robótico manipulando bobinas de aluminio' },
  { src: '/equipo-endal-2.webp',   alt: 'Equipo de ENDAL en la nave de fabricación' },
  { src: '/papel-vegetal-2.webp',  alt: 'Envasadora de bobinas de papel vegetal' },
  { src: '/equipo-endal-3.webp',   alt: 'Instalaciones de ENDAL en el Polígono Industrial Canastell' },
]

export default function AboutCarousel() {
  const items = [...SLIDES, ...SLIDES]
  return (
    <div className="about-carousel">
      <div className="about-carousel__track">
        {items.map((s, i) => (
          <div key={i} className="about-carousel__item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt={i < SLIDES.length ? s.alt : ''}
              aria-hidden={i >= SLIDES.length}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
