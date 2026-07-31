import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/src/lib/site'
import AluminioHero         from '@/components/AluminioHero'
import MaterialIntro      from '@/components/MaterialIntro'
import AluminioProperties   from '@/components/AluminioProperties'
import MaterialCatalog     from '@/components/MaterialCatalog'
import AluminioPresentation from '@/components/AluminioPresentation'
import AluminioExpert       from '@/components/AluminioExpert'

export const metadata: Metadata = {
  title: 'Envases de aluminio para horno, congelador y catering',
  description:
    'Bandejas, envases redondos y rectangulares, moldes de pastelería, tapas y bobinas de aluminio. 119 referencias fabricadas en España, aptas para el contacto con alimentos.',
  alternates: { canonical: '/aluminio' },
  openGraph: { title: 'Envases de aluminio para horno, congelador y catering | ENDAL', description: 'Bandejas, envases redondos y rectangulares, moldes de pastelería, tapas y bobinas de aluminio. 119 referencias fabricadas en España, aptas para el contacto con alimentos.', url: '/aluminio', type: 'website' },
}

export default function Aluminio() {
  return (
    <main className="al-page">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Inicio', url: '/' },
        { name: 'Aluminio', url: '/aluminio' },
      ])} />
      <AluminioHero />
      <MaterialIntro material="aluminio" />
      <AluminioProperties />
      <MaterialCatalog material="aluminio" />
      <AluminioPresentation />
      <AluminioExpert />
    </main>
  )
}
