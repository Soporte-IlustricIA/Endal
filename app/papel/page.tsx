import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/src/lib/site'
import PapelHero         from '@/components/PapelHero'
import MaterialIntro      from '@/components/MaterialIntro'
import PapelProperties   from '@/components/PapelProperties'
import MaterialCatalog     from '@/components/MaterialCatalog'
import PapelPresentation from '@/components/PapelPresentation'
import PapelExpert       from '@/components/PapelExpert'

export const metadata: Metadata = {
  title: 'Papel para hornear y papel vegetal para obrador',
  description:
    'Moldes de papel para hornear que pasan del horno al mostrador y bobinas de papel vegetal para forrar y separar. 13 referencias aptas para el contacto con alimentos.',
  alternates: { canonical: '/papel' },
  openGraph: { title: 'Papel para hornear y papel vegetal para obrador | ENDAL', description: 'Moldes de papel para hornear que pasan del horno al mostrador y bobinas de papel vegetal para forrar y separar. 13 referencias aptas para el contacto con alimentos.', url: '/papel', type: 'website' },
}

export default function Papel() {
  return (
    <main className="al-page">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Inicio', url: '/' },
        { name: 'Papel', url: '/papel' },
      ])} />
      <PapelHero />
      <MaterialIntro material="papel" />
      <PapelProperties />
      <MaterialCatalog material="papel" />
      <PapelPresentation />
      <PapelExpert />
    </main>
  )
}
