import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/src/lib/site'
import MaquinariaHero         from '@/components/MaquinariaHero'
import MaterialIntro      from '@/components/MaterialIntro'
import MaquinariaProperties   from '@/components/MaquinariaProperties'
import MaterialCatalog     from '@/components/MaterialCatalog'
import MaquinariaPresentation from '@/components/MaquinariaPresentation'
import MaquinariaExpert       from '@/components/MaquinariaExpert'

export const metadata: Metadata = {
  title: 'Maquinaria de envasado: termoselladoras y portarrollos',
  description:
    'Termoselladoras y portarrollos compatibles con los formatos de envase de ENDAL. Equipos compactos y de bajo mantenimiento para obrador, cocina y línea de producción.',
  alternates: { canonical: '/maquinaria' },
  openGraph: { title: 'Maquinaria de envasado: termoselladoras y portarrollos | ENDAL', description: 'Termoselladoras y portarrollos compatibles con los formatos de envase de ENDAL. Equipos compactos y de bajo mantenimiento para obrador, cocina y línea de producción.', url: '/maquinaria', type: 'website' },
}

export default function Maquinaria() {
  return (
    <main className="al-page">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Inicio', url: '/' },
        { name: 'Maquinaria', url: '/maquinaria' },
      ])} />
      <MaquinariaHero />
      <MaterialIntro material="maquinaria" />
      <MaquinariaProperties />
      <MaterialCatalog material="maquinaria" />
      <MaquinariaPresentation />
      <MaquinariaExpert />
    </main>
  )
}
