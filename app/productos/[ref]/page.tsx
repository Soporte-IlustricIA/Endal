import { notFound } from 'next/navigation'
import { catalogoEndal } from '@/src/data/catalogo'
import ProductDetail from '@/components/ProductDetail'
import type { Metadata } from 'next'

type Props = { params: Promise<{ ref: string }> }

export async function generateStaticParams() {
  return catalogoEndal.map(p => ({ ref: encodeURIComponent(p.referencia) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ref } = await params
  const producto = catalogoEndal.find(p => p.referencia === decodeURIComponent(ref))
  if (!producto) return { title: 'Producto — ENDAL' }
  return {
    title: `${producto.referencia} — ${producto.nombre} | ENDAL`,
    description: producto.descripcion || `Ficha técnica del envase ${producto.referencia} de ENDAL.`,
  }
}

export default async function ProductoPage({ params }: Props) {
  const { ref } = await params
  const producto = catalogoEndal.find(p => p.referencia === decodeURIComponent(ref))
  if (!producto) notFound()

  const related = catalogoEndal
    .filter(p => p.nombre === producto.nombre && p.referencia !== producto.referencia)
    .slice(0, 4)

  return <ProductDetail producto={producto} related={related} />
}
