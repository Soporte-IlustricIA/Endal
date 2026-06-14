'use client'
import { useState } from 'react'
import CategoryFilter from './CategoryFilter'
import ProductCard from './ProductCard'

type Category = 'Aluminio' | 'Plástico' | 'Papel' | 'Maquinaria'

type Product = {
  id: string
  name: string
  ref: string
  category: Category
  desc: string
  img?: string
}

const CATS = ['Todos', 'Aluminio', 'Plástico', 'Papel', 'Maquinaria'] as const
type Filter = typeof CATS[number]

const PRODUCTS: Product[] = [
  { id: 'al-01', name: 'Bandeja de aluminio 5590',     ref: 'AL-BND-001', category: 'Aluminio',   desc: 'Para horno y congelador' },
  { id: 'al-02', name: 'Cápsulas de aluminio',          ref: 'AL-CAP-002', category: 'Aluminio',   desc: 'Para espresso y bebidas' },
  { id: 'al-03', name: 'Rollo de aluminio doméstico',   ref: 'AL-ROL-003', category: 'Aluminio',   desc: 'Uso doméstico e industrial' },
  { id: 'al-04', name: 'Bandeja rectangular 800 ml',    ref: 'AL-BND-004', category: 'Aluminio',   desc: 'Con tapa de cartón o PVC' },
  { id: 'pl-01', name: 'Film estirable alimentario',    ref: 'PL-FLM-001', category: 'Plástico',   desc: 'Alimentario y doméstico' },
  { id: 'pl-02', name: 'Bolsas de vacío',               ref: 'PL-VAC-002', category: 'Plástico',   desc: 'Para conservación al vacío' },
  { id: 'pl-03', name: 'Bolsas de congelación',         ref: 'PL-CON-003', category: 'Plástico',   desc: 'Resistentes a −40 °C' },
  { id: 'pl-04', name: 'Bolsas zip reutilizables',      ref: 'PL-ZIP-004', category: 'Plástico',   desc: 'Alimentario certificado' },
  { id: 'pp-01', name: 'Papel de horno antiadherente',  ref: 'PP-HRN-001', category: 'Papel',      desc: 'Antiadherente y vegano' },
  { id: 'pp-02', name: 'Papel vegetal 8 m',             ref: 'PP-VEG-002', category: 'Papel',      desc: 'Uso doméstico, personalizable' },
  { id: 'pp-03', name: 'Film de cocina biodegradable',  ref: 'PP-BIO-003', category: 'Papel',      desc: 'Compostable certificado' },
  { id: 'pp-04', name: 'Papel vegetal 15 m',            ref: 'PP-VEG-004', category: 'Papel',      desc: 'Formato profesional' },
  { id: 'mq-01', name: 'Termoselladora manual',         ref: 'MQ-SEL-001', category: 'Maquinaria', desc: 'Para bandejas de aluminio' },
  { id: 'mq-02', name: 'Dispensador de film',           ref: 'MQ-DIS-002', category: 'Maquinaria', desc: 'Corte automático' },
]

export default function ProductCatalog() {
  const [active, setActive] = useState<Filter>('Todos')
  const [fading, setFading] = useState(false)

  function handleFilter(cat: string) {
    const c = cat as Filter
    if (c === active) return
    setFading(true)
    setTimeout(() => { setActive(c); setFading(false) }, 150)
  }

  const visible = active === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === active)

  return (
    <>
      <div className="catalog-header">
        <span className="section-label">Catálogo</span>
        <h1 className="catalog-header__title">Todos los productos</h1>
        <CategoryFilter cats={CATS} active={active} onSelect={handleFilter} />
        <span className="catalog-header__count">
          {visible.length} {visible.length === 1 ? 'referencia' : 'referencias'}
        </span>
      </div>

      <div className="catalog-body">
        <div className={`catalog-grid${fading ? ' catalog-grid--fading' : ''}`}>
          {visible.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </>
  )
}
