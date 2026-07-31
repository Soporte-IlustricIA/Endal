import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/src/lib/site'
import PlasticoHero         from '@/components/PlasticoHero'
import MaterialIntro      from '@/components/MaterialIntro'
import PlasticoProperties   from '@/components/PlasticoProperties'
import MaterialCatalog     from '@/components/MaterialCatalog'
import PlasticoPresentation from '@/components/PlasticoPresentation'
import PlasticoExpert       from '@/components/PlasticoExpert'

export const metadata: Metadata = {
  title: 'Envases de plástico OPS, polipropileno y film alimentario',
  description:
    'Envases OPS con tapa integrada, polipropileno para producto caliente y bobinas de film doméstico e industrial. 23 referencias para mostrador, reparto y envasado en línea.',
  alternates: { canonical: '/plastico' },
  openGraph: { title: 'Envases de plástico OPS, polipropileno y film alimentario | ENDAL', description: 'Envases OPS con tapa integrada, polipropileno para producto caliente y bobinas de film doméstico e industrial. 23 referencias para mostrador, reparto y envasado en línea.', url: '/plastico', type: 'website' },
}

export default function Plastico() {
  return (
    <main className="al-page">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Inicio', url: '/' },
        { name: 'Plástico', url: '/plastico' },
      ])} />
      <PlasticoHero />
      <MaterialIntro material="plastico" />
      <PlasticoProperties />
      <MaterialCatalog material="plastico" />
      <PlasticoPresentation />
      <PlasticoExpert />
    </main>
  )
}
