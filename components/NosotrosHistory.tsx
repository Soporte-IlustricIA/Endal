import TrayectoriaSection, { type Milestone } from './TrayectoriaSection'

/* Los mismos hitos que en la home, en su versión larga. La sección reutiliza
   el componente de trayectoria: idéntica lógica de pin, scrub y fases. */
const MILESTONES: Milestone[] = [
  {
    year: '1991',
    title: 'Fundación',
    desc: 'ENDAL S.L. abre sus puertas en el Polígono Industrial Canastell de San Vicente del Raspeig. Desde el primer día, especialización en envases de aluminio doméstico e industrial.',
  },
  {
    year: '2000',
    title: 'Expansión de gama',
    desc: 'Incorporación de líneas de film estirable y papel de cocina alimentario. La diversificación refuerza el servicio integral para el sector de la restauración y la gran distribución.',
  },
  {
    year: '2010',
    title: 'Presencia europea',
    desc: 'Primeras exportaciones regulares a mercados europeos y africanos. Obtención de certificaciones de seguridad alimentaria conforme a la normativa europea vigente.',
  },
  {
    year: '2018',
    title: 'Innovación de producto',
    desc: 'Desarrollo de nuevas referencias en aluminio con tapa termosellable y cápsulas compatibles con sistemas de café de monodosis.',
  },
  {
    year: 'Hoy',
    title: 'Líderes en España',
    desc: 'Más de tres décadas de fabricación ininterrumpida. Presencia en toda España, Europa y África. Un equipo consolidado con la misma vocación industrial con la que empezamos.',
  },
]

export default function NosotrosHistory() {
  return (
    <TrayectoriaSection
      variant="nos"
      milestones={MILESTONES}
      introCopy="Desde 1991 fabricamos envase alimentario en España. Tres décadas afinando el aluminio, el plástico y el papel para quien cocina, conserva y reparte cada día."
      introTitle="Más de tres décadas de especialización en envases alimentarios."
      claim="Fabricación ininterrumpida desde 1991."
      ctaLabel="Ver catálogo"
      ctaHref="/productos"
    />
  )
}
