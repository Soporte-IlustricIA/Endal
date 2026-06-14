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
  { id: 'al-01', name: 'Bandeja de aluminio 5590',    ref: 'AL-BND-001', category: 'Aluminio', desc: 'Para horno y congelador' },
  { id: 'al-02', name: 'Cápsulas de aluminio',         ref: 'AL-CAP-002', category: 'Aluminio', desc: 'Para espresso y bebidas' },
  { id: 'al-03', name: 'Rollo de aluminio doméstico',  ref: 'AL-ROL-003', category: 'Aluminio', desc: 'Uso doméstico e industrial' },
  { id: 'al-04', name: 'Bandeja rectangular 800 ml',   ref: 'AL-BND-004', category: 'Aluminio', desc: 'Con tapa de cartón o PVC' },
  { id: 'al-05', name: 'Molde redondo pastelería',     ref: 'AL-MOL-005', category: 'Aluminio', desc: 'Repostería profesional' },
  { id: 'al-06', name: 'Bandeja asadora XL',           ref: 'AL-BND-006', category: 'Aluminio', desc: 'Para grandes formatos' },
  { id: 'al-07', name: 'Cápsulas café 100 ud',         ref: 'AL-CAP-007', category: 'Aluminio', desc: 'Compatible Nespresso®' },
  { id: 'al-08', name: 'Bandeja oval 1200 ml',         ref: 'AL-BND-008', category: 'Aluminio', desc: 'Con tapa termosellable' },
  { id: 'al-09', name: 'Bandeja cuadrada 600 ml',      ref: 'AL-BND-009', category: 'Aluminio', desc: 'Formato individual' },
  { id: 'al-10', name: 'Molde para plum cake',         ref: 'AL-MOL-010', category: 'Aluminio', desc: 'Repostería y panadería' },
  { id: 'al-11', name: 'Rollo aluminio industrial',    ref: 'AL-ROL-011', category: 'Aluminio', desc: 'Gran longitud profesional' },
  { id: 'al-12', name: 'Bandeja compartimentada',      ref: 'AL-BND-012', category: 'Aluminio', desc: 'Menú con 3 compartimentos' },
]

const TIPO_CHIPS   = ['Bandejas', 'Cápsulas', 'Rollos', 'Moldes']
const USO_CHIPS    = ['Horno', 'Congelador', 'Frigorífico', 'Microondas']
const TAPA_CHIPS   = ['Con tapa', 'Sin tapa']

export default function AluminioCatalog() {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [activeTipo, setActiveTipo] = useState<string[]>([])
  const [activeUso,  setActiveUso]  = useState<string[]>([])
  const [activeTapa, setActiveTapa] = useState<string[]>([])
  const [fading, setFading] = useState(false)
  const [visible, setVisible] = useState(PRODUCTS.slice(0, 4))

  function toggleChip<T extends string>(
    set: T[],
    setter: (v: T[]) => void,
    value: T
  ) {
    setter(set.includes(value) ? set.filter(v => v !== value) : [...set, value])
  }

  function handleLoadMore() {
    setFading(true)
    setTimeout(() => {
      setVisible(PRODUCTS)
      setFading(false)
    }, 150)
  }

  return (
    <section className="al-catalog" id="al-catalog">
      <div className="al-catalog__head">
        <span className="al-catalog__count">{PRODUCTS.length} referencias de aluminio</span>
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
            <span className="al-filter-group__label">Tapa</span>
            <div className="al-filter-chips">
              {TAPA_CHIPS.map(chip => (
                <button
                  key={chip}
                  className={`al-chip${activeTapa.includes(chip) ? ' al-chip--active' : ''}`}
                  onClick={() => toggleChip(activeTapa, setActiveTapa, chip)}
                >
                  {activeTapa.includes(chip) && <span className="al-chip__check">✓</span>}
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
