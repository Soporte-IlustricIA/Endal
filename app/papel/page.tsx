import PapelHero         from '@/components/PapelHero'
import PapelIntro        from '@/components/PapelIntro'
import PapelProperties   from '@/components/PapelProperties'
import PapelCatalog      from '@/components/PapelCatalog'
import PapelPresentation from '@/components/PapelPresentation'
import PapelNewsletter   from '@/components/PapelNewsletter'
import PapelExpert       from '@/components/PapelExpert'

export const metadata = {
  title: 'Papel de aluminio — Bobinas y rollos | ENDAL',
  description: 'Papel de aluminio doméstico e industrial para horno, congelador y envasado. Formatos en rollo y bobina profesional.',
}

export default function Papel() {
  return (
    <main className="al-page">
      <PapelHero />
      <PapelIntro />
      <PapelProperties />
      <PapelCatalog />
      <PapelPresentation />
      <PapelNewsletter />
      <PapelExpert />
    </main>
  )
}
