/* Fotografía real de planta y equipo. El orden alterna producción y
   personas para que la cinta no encadene dos planos parecidos.

   La cinta pinta cada foto a 169 px en vertical y 463 px en una pantalla
   de 1920: los originales de 1080 px de ancho eran entre 3 y 6 veces más
   de lo necesario. Se sirven tres anchos y el navegador elige. */
const SLIDES = [
  { base: 'fabrica-endal',    alt: 'Línea de producción de envases de aluminio en la planta de ENDAL' },
  { base: 'equipo-endal-1',   alt: 'Operaria de ENDAL controlando una máquina de termoconformado' },
  { base: 'bobinas-aluminio', alt: 'Brazo robótico manipulando bobinas de aluminio' },
  { base: 'equipo-endal-2',   alt: 'Equipo de ENDAL en la nave de fabricación' },
  { base: 'papel-vegetal-2',  alt: 'Envasadora de bobinas de papel vegetal' },
  { base: 'equipo-endal-3',   alt: 'Instalaciones de ENDAL en el Polígono Industrial Canastell' },
]

const DIR = '/images/equipo'
const WIDTHS = [400, 640, 960]
const SIZES = '(max-width: 767px) 50vw, (max-width: 1439px) 22vw, 25vw'

export default function AboutCarousel() {
  const items = [...SLIDES, ...SLIDES]
  return (
    <div className="about-carousel">
      <div className="about-carousel__track">
        {items.map((s, i) => (
          <div key={i} className="about-carousel__item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${DIR}/${s.base}-640.webp`}
              srcSet={WIDTHS.map(w => `${DIR}/${s.base}-${w}.webp ${w}w`).join(', ')}
              sizes={SIZES}
              width={640}
              height={800}
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
