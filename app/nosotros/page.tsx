import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/src/lib/site'
import NosotrosHero    from '@/components/NosotrosHero'
import NosotrosMission from '@/components/NosotrosMission'
import NosotrosHistory from '@/components/NosotrosHistory'
import NosotrosValues  from '@/components/NosotrosValues'
import NosotrosCerts   from '@/components/NosotrosCerts'
import NosotrosCta     from '@/components/NosotrosCta'

export const metadata: Metadata = {
  title: 'Fabricante de envases alimentarios en Alicante desde 1991',
  description:
    'ENDAL S.L. fabrica envases de aluminio, papel y plástico en San Vicente del Raspeig (Alicante) ' +
    'desde 1991. Historia, principios y marco normativo de una producción 100% española.',
  alternates: { canonical: '/nosotros' },
  openGraph: {
    title: 'Fabricante de envases alimentarios en Alicante desde 1991 | ENDAL',
    description: 'Más de tres décadas fabricando envase alimentario en España.',
    url: '/nosotros',
    type: 'website',
  },
}

export default function Nosotros() {
  return (
    <main className="nos-page">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Inicio', url: '/' },
        { name: 'Nosotros', url: '/nosotros' },
      ])} />
      <NosotrosHero />
      <NosotrosMission />
      <NosotrosHistory />
      <NosotrosValues />
      <NosotrosCerts />
      <NosotrosCta />
    </main>
  )
}
