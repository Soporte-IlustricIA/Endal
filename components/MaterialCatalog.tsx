'use client'
import { useMemo, useState } from 'react'
import { catalogoEndal } from '@/src/data/catalogo'

/* Las cuatro páginas de material mostraban una lista inventada de 12
   productos y anunciaban "12 referencias". Aquí se leen del catálogo real,
   así el recuento y las fichas no pueden desincronizarse. */

export type MaterialId = 'aluminio' | 'plastico' | 'papel' | 'maquinaria'

type Grupo = { id: string; label: string; nombres: string[] }

const GRUPOS: Record<MaterialId, Grupo[]> = {
  aluminio: [
    { id: 'redondos',      label: 'Redondos',      nombres: ['ENVASE REDONDO PARA TAPA', 'ENVASE REDONDO SIN TAPA'] },
    { id: 'rectangulares', label: 'Rectangulares', nombres: ['ENVASE RECTANGULAR SIN TAPA', 'ENVASE RECTANGULAR PARA TAPA'] },
    { id: 'ovaladas',      label: 'Ovaladas',      nombres: ['OVALADAS', 'ENVASES OVALADOS PARA TAPA'] },
    { id: 'baneras',       label: 'Bañeras',       nombres: ['BAÑERAS'] },
    { id: 'pasteleria',    label: 'Pastelería',    nombres: ['PASTELERÍA', 'PARED LISA'] },
    { id: 'bomboneria',    label: 'Bombonería',    nombres: ['BOMBONERÍA'] },
    { id: 'tapas',         label: 'Tapas',         nombres: ['TAPAS ENVASES REDONDOS Y RECTANGULARES'] },
    { id: 'bobinas-al',    label: 'Bobinas',       nombres: ['ALUMINIO INDUSTRIAL', 'BOBINA ALUMINIO DOMÉSTICO'] },
  ],
  plastico: [
    { id: 'ops-ovalado',   label: 'OPS Ovalado',   nombres: ['ENVASE OPS OVALADO'] },
    { id: 'ops-cuadrado',  label: 'OPS Cuadrado',  nombres: ['ENVASE OPS CUADRADO'] },
    { id: 'polipropileno', label: 'Polipropileno', nombres: ['ENVASE POLIPROPILENO PP'] },
    { id: 'film',          label: 'Film',          nombres: ['BOBINA FILM INDUSTRIAL', 'BOBINA FILM DOMÉSTICO'] },
  ],
  papel: [
    { id: 'papel-hornear', label: 'Papel para hornear', nombres: ['ENVASE DE PAPEL PARA HORNEAR', 'ENVASE 4590 PH'] },
    { id: 'papel-vegetal', label: 'Papel vegetal',      nombres: ['BOBINA DE PAPEL VEGETAL', 'BOBINA PAPEL VEGETAL'] },
  ],
  maquinaria: [
    { id: 'maquinas',   label: 'Máquinas',   nombres: ['MÁQUINA', 'MAQUINA'] },
    { id: 'accesorios', label: 'Accesorios', nombres: ['PORTA ROLLO'] },
  ],
}

const ETIQUETA: Record<MaterialId, string> = {
  aluminio:   'de aluminio',
  plastico:   'de plástico',
  papel:      'de papel y cartón',
  maquinaria: 'de maquinaria',
}

const BASE_IMG = '/images/catalogo/'
const PAGE_SIZE = 8

export default function MaterialCatalog({ material }: { material: MaterialId }) {
  const grupos = GRUPOS[material]

  const productos = useMemo(() => {
    const nombres = new Set(grupos.flatMap(g => g.nombres))
    return catalogoEndal.filter(p => nombres.has(p.nombre))
  }, [grupos])

  const [activos,  setActivos]  = useState<string[]>([])
  const [expandido, setExpandido] = useState(false)
  const [fading,   setFading]   = useState(false)

  const filtrados = useMemo(() => {
    if (!activos.length) return productos
    const nombres = new Set(
      grupos.filter(g => activos.includes(g.id)).flatMap(g => g.nombres)
    )
    return productos.filter(p => nombres.has(p.nombre))
  }, [productos, grupos, activos])

  const visibles = expandido ? filtrados : filtrados.slice(0, PAGE_SIZE)

  function transition(cb: () => void) {
    setFading(true)
    setTimeout(() => { cb(); setFading(false) }, 150)
  }

  function toggleGrupo(id: string) {
    transition(() => {
      setActivos(prev => (prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]))
      setExpandido(false)
    })
  }

  return (
    <section className="al-catalog" id="al-catalog">
      <div className="al-catalog__head">
        <span className="al-catalog__count">
          {filtrados.length} referencias {ETIQUETA[material]}
          {activos.length > 0 && <> · de {productos.length}</>}
        </span>
        <a href="/productos" className="al-catalog__all">Ver catálogo completo →</a>
      </div>

      <div className="al-catalog__groups">
        {grupos.map(g => {
          const nombres = new Set(g.nombres)
          const n = productos.filter(p => nombres.has(p.nombre)).length
          if (!n) return null
          return (
            <button
              key={g.id}
              className={`al-chip${activos.includes(g.id) ? ' al-chip--active' : ''}`}
              onClick={() => toggleGrupo(g.id)}
              aria-pressed={activos.includes(g.id)}
            >
              {activos.includes(g.id) && <span className="al-chip__check">✓</span>}
              {g.label}
              <sup className="al-chip__count">{n}</sup>
            </button>
          )
        })}
      </div>

      <div className="al-catalog__grid-wrap">
        <div className={`catalog-grid${fading ? ' catalog-grid--fading' : ''}`}>
          {visibles.map((p, i) => {
            const img = p.imagen ? BASE_IMG + p.imagen : null
            return (
              <a
                key={p.id}
                href={`/productos/${encodeURIComponent(p.referencia)}`}
                className="catalog-card"
                style={{ animationDelay: `${(i % 16) * 35}ms` }}
              >
                <div className="catalog-card__img">
                  {img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={img} alt={`${p.nombre} ${p.referencia}`} loading="lazy" decoding="async" />
                  ) : (
                    <div className="catalog-card__img-placeholder">{p.referencia}</div>
                  )}
                </div>
                <span className="catalog-card__cat">{p.nombre}</span>
                <h3 className="catalog-card__name">{p.referencia}</h3>
                <div className="catalog-card__footer">
                  <span className="catalog-card__ref">REF. {p.referencia}</span>
                  <span className="catalog-card__detail-btn">Ver detalles →</span>
                </div>
              </a>
            )
          })}
        </div>

        {!expandido && filtrados.length > PAGE_SIZE && (
          <button className="al-catalog__more" onClick={() => transition(() => setExpandido(true))}>
            ← ver las {filtrados.length} referencias →
          </button>
        )}
      </div>
    </section>
  )
}
