import PlasticoHero         from '@/components/PlasticoHero'
import PlasticoIntro        from '@/components/PlasticoIntro'
import PlasticoProperties   from '@/components/PlasticoProperties'
import PlasticoCatalog      from '@/components/PlasticoCatalog'
import PlasticoPresentation from '@/components/PlasticoPresentation'
import PlasticoNewsletter   from '@/components/PlasticoNewsletter'
import PlasticoExpert       from '@/components/PlasticoExpert'

export const metadata = {
  title: 'Plástico — Film y bolsas alimentarias | ENDAL',
  description: 'Gama completa de film estirable y bolsas alimentarias para conservación, vacío y envasado profesional.',
}

export default function Plastico() {
  return (
    <main className="al-page">
      <PlasticoHero />
      <PlasticoIntro />
      <PlasticoProperties />
      <PlasticoCatalog />
      <PlasticoPresentation />
      <PlasticoNewsletter />
      <PlasticoExpert />
    </main>
  )
}
