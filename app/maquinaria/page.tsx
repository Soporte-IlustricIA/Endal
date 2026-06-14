import MaquinariaHero         from '@/components/MaquinariaHero'
import MaquinariaIntro        from '@/components/MaquinariaIntro'
import MaquinariaProperties   from '@/components/MaquinariaProperties'
import MaquinariaCatalog      from '@/components/MaquinariaCatalog'
import MaquinariaPresentation from '@/components/MaquinariaPresentation'
import MaquinariaNewsletter   from '@/components/MaquinariaNewsletter'
import MaquinariaExpert       from '@/components/MaquinariaExpert'

export const metadata = {
  title: 'Maquinaria de envasado | ENDAL',
  description: 'Maquinaria de envasado compatible con toda la gama ENDAL. Envasadoras y termoformadoras para líneas de producción alimentaria.',
}

export default function Maquinaria() {
  return (
    <main className="al-page">
      <MaquinariaHero />
      <MaquinariaIntro />
      <MaquinariaProperties />
      <MaquinariaCatalog />
      <MaquinariaPresentation />
      <MaquinariaNewsletter />
      <MaquinariaExpert />
    </main>
  )
}
