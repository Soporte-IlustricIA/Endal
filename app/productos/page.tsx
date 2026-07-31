import ProductCatalog from '@/components/ProductCatalog'
import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/src/lib/site'

export const metadata: Metadata = {
  title: 'Catálogo de envases: 159 referencias de aluminio, plástico y papel',
  description:
    'Todas las referencias de ENDAL en un buscador: envases de aluminio, plástico OPS y polipropileno, ' +
    'papel para hornear, bobinas y maquinaria. Filtra por gama, formato y medidas.',
  alternates: { canonical: '/productos' },
  openGraph: {
    title: 'Catálogo de envases alimentarios | ENDAL',
    description: 'Envases de aluminio, plástico y papel: 159 referencias con medidas y capacidades.',
    url: '/productos',
    type: 'website',
  },
}

export default function ProductosPage() {
  return (
    <main className="catalog-page">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Inicio', url: '/' },
        { name: 'Catálogo', url: '/productos' },
      ])} />
      <ProductCatalog />
    </main>
  )
}
