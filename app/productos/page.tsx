import ProductCatalog from '@/components/ProductCatalog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catálogo — ENDAL',
  description: 'Catálogo completo de envases de aluminio, plástico y papel de ENDAL. Más de 4 décadas de fabricación 100% española.',
}

export default function ProductosPage() {
  return (
    <main className="catalog-page">
      <ProductCatalog />
    </main>
  )
}
