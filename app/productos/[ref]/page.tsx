import { notFound } from 'next/navigation'
import { catalogoEndal, type Producto } from '@/src/data/catalogo'
import ProductDetail from '@/components/ProductDetail'
import type { Metadata } from 'next'
import { SITE_URL, EMPRESA, breadcrumbJsonLd } from '@/src/lib/site'

type Props = { params: Promise<{ ref: string }> }

export async function generateStaticParams() {
  return catalogoEndal.map(p => ({ ref: encodeURIComponent(p.referencia) }))
}

/* La descripción del catálogo es texto de venta largo; para el resultado de
   búsqueda se recorta a la primera frase y se le añaden las medidas, que es
   lo que la gente teclea («envase redondo aluminio 187 mm»). */
const MEDIDAS: [string, (v: string) => string][] = [
  ['exterior(mm)',  v => `Ø exterior ${v} mm`],
  ['altura(mm)',    v => `altura ${v} mm`],
  ['capacidad(ml)', v => `${v} ml`],
  ['unidades/caja', v => `${v} uds./caja`],
]

function resumen(p: Producto) {
  const medidas = MEDIDAS
    .map(([k, fmt]) => (p.atributos[k] ? fmt(p.atributos[k]) : null))
    .filter(Boolean)
    .join(' · ')
  const frase = (p.descripcion || '').split(/(?<=\.)\s/)[0] || ''
  const base = `${p.nombre} ${p.referencia}, fabricado por ENDAL en España.`
  const texto = [base, medidas ? `${medidas}.` : '', frase].filter(Boolean).join(' ').trim()
  // Google recorta sobre los 160 caracteres: se corta por palabra, no a hachazos.
  if (texto.length <= 185) return texto
  return texto.slice(0, 185).replace(/\s+\S*$/, '') + '…'
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ref } = await params
  const producto = catalogoEndal.find(p => p.referencia === decodeURIComponent(ref))
  if (!producto) return { title: 'Producto no encontrado' }

  const url = `/productos/${encodeURIComponent(producto.referencia)}`
  const nombre = `${producto.nombre} — Ref. ${producto.referencia}`
  const desc = resumen(producto)

  return {
    title: nombre,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${nombre} | ENDAL`,
      description: desc,
      url,
      type: 'website',
      images: producto.imagen
        ? [{ url: `/images/catalogo/${producto.imagen}`, alt: nombre }]
        : undefined,
    },
  }
}

/* Ficha de producto para Google: referencia como SKU, fabricante y la tabla
   de medidas como propiedades. Sin precio no hay `offers`, y anunciar uno
   falso es peor que no tenerlo. */
function productoJsonLd(p: Producto) {
  const url = `${SITE_URL}/productos/${encodeURIComponent(p.referencia)}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#producto`,
    name: `${p.nombre} ${p.referencia}`,
    sku: p.referencia,
    mpn: p.referencia,
    category: p.nombre,
    url,
    description: p.descripcion || undefined,
    image: p.imagen ? `${SITE_URL}/images/catalogo/${p.imagen}` : undefined,
    brand: { '@type': 'Brand', name: EMPRESA.nombreCorto },
    manufacturer: { '@id': `${SITE_URL}/#organizacion` },
    additionalProperty: Object.entries(p.atributos).map(([name, value]) => ({
      '@type': 'PropertyValue',
      name,
      value,
    })),
  }
}

export default async function ProductoPage({ params }: Props) {
  const { ref } = await params
  const producto = catalogoEndal.find(p => p.referencia === decodeURIComponent(ref))
  if (!producto) notFound()

  const related = catalogoEndal
    .filter(p => p.nombre === producto.nombre && p.referencia !== producto.referencia)
    .slice(0, 4)

  const migas = breadcrumbJsonLd([
    { name: 'Inicio',    url: '/' },
    { name: 'Catálogo',  url: '/productos' },
    { name: producto.nombre, url: '/productos' },
    { name: producto.referencia, url: `/productos/${encodeURIComponent(producto.referencia)}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([productoJsonLd(producto), migas]) }}
      />
      <ProductDetail producto={producto} related={related} />
    </>
  )
}
