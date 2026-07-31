import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/src/lib/site'
import ContactPage from '@/components/ContactPage'

export const metadata: Metadata = {
  title: 'Contacto: pide presupuesto de envases alimentarios',
  description:
    'Habla con ENDAL S.L. — Polígono Industrial Canastell, San Vicente del Raspeig (Alicante). ' +
    'Teléfono (+34) 965 66 14 72 e info@endal.es para presupuestos de envases de aluminio, plástico y papel.',
  alternates: { canonical: '/contacto' },
  openGraph: {
    title: 'Contacto | ENDAL',
    description: 'Polígono Industrial Canastell, San Vicente del Raspeig (Alicante). (+34) 965 66 14 72.',
    url: '/contacto',
    type: 'website',
  },
}

export default function Contacto() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Inicio', url: '/' },
        { name: 'Contacto', url: '/contacto' },
      ])} />
      <ContactPage />
    </>
  )
}
