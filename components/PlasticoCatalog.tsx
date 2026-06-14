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
  { id: 'pl-01', name: 'Film estirable PVC 30 cm',       ref: 'PL-FLM-001', category: 'Plástico', desc: 'Uso doméstico y hostelería' },
  { id: 'pl-02', name: 'Film estirable industrial 45 cm', ref: 'PL-FLM-002', category: 'Plástico', desc: 'Bobina gran formato industrial' },
  { id: 'pl-03', name: 'Bolsas de vacío 20×30 cm',        ref: 'PL-BOL-003', category: 'Plástico', desc: 'Conservación al vacío' },
  { id: 'pl-04', name: 'Bolsas zip reutilizables',         ref: 'PL-BOL-004', category: 'Plástico', desc: 'Cierre hermético reutilizable' },
  { id: 'pl-05', name: 'Bolsas para congelación',          ref: 'PL-BOL-005', category: 'Plástico', desc: 'Específicas para frío extremo' },
  { id: 'pl-06', name: 'Bolsas para hornear',              ref: 'PL-BOL-006', category: 'Plástico', desc: 'Resistentes hasta 200 °C' },
  { id: 'pl-07', name: 'Film para envasadoras',            ref: 'PL-FLM-007', category: 'Plástico', desc: 'Compatible con líneas automáticas' },
  { id: 'pl-08', name: 'Bolsas de vacío 30×40 cm',         ref: 'PL-BOL-008', category: 'Plástico', desc: 'Gran formato profesional' },
]

const TIPO_CHIPS  = ['Film', 'Bolsas', 'Zip']
const USO_CHIPS   = ['Microondas', 'Congelador', 'Frigorífico', 'Vacío']
const MAT_CHIPS   = ['PVC', 'LDPE', 'Multicapa']

export default function PlasticoCatalog() {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [activeTipo, setActiveTipo] = useState<string[]>([])
  const [activeUso,  setActiveUso]  = useState<string[]>([])
  const [activeMat,  setActiveMat]  = useState<string[]>([])
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
    <section className="al-catalog" id="pl-catalog">
      <div className="al-catalog__head">
        <span className="al-catalog__count">{PRODUCTS.length} referencias de plástico</span>
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
            <span className="al-filter-group__label">Material</span>
            <div className="al-filter-chips">
              {MAT_CHIPS.map(chip => (
                <button
                  key={chip}
                  className={`al-chip${activeMat.includes(chip) ? ' al-chip--active' : ''}`}
                  onClick={() => toggleChip(activeMat, setActiveMat, chip)}
                >
                  {activeMat.includes(chip) && <span className="al-chip__check">✓</span>}
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
