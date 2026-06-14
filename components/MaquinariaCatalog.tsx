'use client'
import { useState } from 'react'
import ProductCard from './ProductCard'

type Product = {
  id: string
  name: string
  ref: string
  category: string
  desc: string
  img?: string
}

const PRODUCTS: Product[] = [
  { id: 'mq-01', name: 'Envasadora semiautomática',    ref: 'MQ-ENV-001', category: 'Maquinaria', desc: 'Para bandejas de aluminio' },
  { id: 'mq-02', name: 'Termoformadora automática',    ref: 'MQ-ENV-002', category: 'Maquinaria', desc: 'Línea industrial completa' },
]

const TIPO_CHIPS = ['Semiautomática', 'Automática']
const USO_CHIPS  = ['Bandejas', 'Film', 'Universal']

export default function MaquinariaCatalog() {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [activeTipo,  setActiveTipo]  = useState<string[]>([])
  const [activeUso,   setActiveUso]   = useState<string[]>([])

  function toggleChip<T extends string>(set: T[], setter: (v: T[]) => void, value: T) {
    setter(set.includes(value) ? set.filter(v => v !== value) : [...set, value])
  }

  return (
    <section className="al-catalog" id="mq-catalog">
      <div className="al-catalog__head">
        <span className="al-catalog__count">{PRODUCTS.length} referencias de maquinaria</span>
        <button
          className={`al-catalog__filter-btn${filtersOpen ? ' al-catalog__filter-btn--active' : ''}`}
          onClick={() => setFiltersOpen(v => !v)}
        >
          <span>{filtersOpen ? '✕' : '⊞'}</span>
          {filtersOpen ? 'Cerrar filtros' : 'Filtrar'}
        </button>
      </div>

      <div className={`al-filters${filtersOpen ? ' al-filters--open' : ''}`}>
        <div className="al-filters__inner">
          <div className="al-filter-group">
            <span className="al-filter-group__label">Tipo</span>
            <div className="al-filter-chips">
              {TIPO_CHIPS.map(chip => (
                <button
                  key={chip}
                  className={`al-chip${activeTipo.includes(chip) ? ' al-chip--active' : ''}`}
                  onClick={() => toggleChip(activeTipo, setActiveTipo, chip)}
                >
                  {activeTipo.includes(chip) && <span className="al-chip__check">✓</span>}
                  {chip}
                </button>
              ))}
            </div>
          </div>
          <div className="al-filter-group">
            <span className="al-filter-group__label">Uso</span>
            <div className="al-filter-chips">
              {USO_CHIPS.map(chip => (
                <button
                  key={chip}
                  className={`al-chip${activeUso.includes(chip) ? ' al-chip--active' : ''}`}
                  onClick={() => toggleChip(activeUso, setActiveUso, chip)}
                >
                  {activeUso.includes(chip) && <span className="al-chip__check">✓</span>}
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="al-catalog__grid-wrap">
        <div className="catalog-grid">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
