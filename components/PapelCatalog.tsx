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
  { id: 'pp-01', name: 'Papel aluminio doméstico 30 m',    ref: 'PP-ROL-001', category: 'Papel', desc: 'Para uso doméstico' },
  { id: 'pp-02', name: 'Papel aluminio XL 60 m',           ref: 'PP-ROL-002', category: 'Papel', desc: 'Gran formato doméstico' },
  { id: 'pp-03', name: 'Papel aluminio industrial 300 m',  ref: 'PP-ROL-003', category: 'Papel', desc: 'Para restauración colectiva' },
  { id: 'pp-04', name: 'Papel aluminio antiadherente',      ref: 'PP-ROL-004', category: 'Papel', desc: 'Con tratamiento antiadherente' },
  { id: 'pp-05', name: 'Bobina aluminio 45 cm',             ref: 'PP-BOB-005', category: 'Papel', desc: 'Formato profesional ancho' },
  { id: 'pp-06', name: 'Papel aluminio extra resistente',   ref: 'PP-ROL-006', category: 'Papel', desc: 'Grosor reforzado para horno' },
]

const TIPO_CHIPS    = ['Doméstico', 'Industrial', 'Antiadherente']
const USO_CHIPS     = ['Horno', 'Congelador', 'Embalaje']
const FORMATO_CHIPS = ['Bobina', 'Rollo']

export default function PapelCatalog() {
  const [filtersOpen,   setFiltersOpen]   = useState(false)
  const [activeTipo,    setActiveTipo]    = useState<string[]>([])
  const [activeUso,     setActiveUso]     = useState<string[]>([])
  const [activeFormato, setActiveFormato] = useState<string[]>([])
  const [fading, setFading] = useState(false)
  const [visible, setVisible] = useState(PRODUCTS.slice(0, 4))

  function toggleChip<T extends string>(set: T[], setter: (v: T[]) => void, value: T) {
    setter(set.includes(value) ? set.filter(v => v !== value) : [...set, value])
  }

  function handleLoadMore() {
    setFading(true)
    setTimeout(() => { setVisible(PRODUCTS); setFading(false) }, 150)
  }

  return (
    <section className="al-catalog" id="pp-catalog">
      <div className="al-catalog__head">
        <span className="al-catalog__count">{PRODUCTS.length} referencias de papel</span>
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
          <div className="al-filter-group">
            <span className="al-filter-group__label">Formato</span>
            <div className="al-filter-chips">
              {FORMATO_CHIPS.map(chip => (
                <button
                  key={chip}
                  className={`al-chip${activeFormato.includes(chip) ? ' al-chip--active' : ''}`}
                  onClick={() => toggleChip(activeFormato, setActiveFormato, chip)}
                >
                  {activeFormato.includes(chip) && <span className="al-chip__check">✓</span>}
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="al-catalog__grid-wrap">
        <div className={`catalog-grid${fading ? ' catalog-grid--fading' : ''}`}>
          {visible.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        {visible.length < PRODUCTS.length && (
          <button className="al-catalog__more" onClick={handleLoadMore}>
            ← + más referencias →
          </button>
        )}
      </div>
    </section>
  )
}
