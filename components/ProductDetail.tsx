import type { Producto } from '@/src/data/catalogo'

const BASE_IMG = '/images/catalogo/'

type Props = {
  producto: Producto
  related: Producto[]
}

export default function ProductDetail({ producto, related }: Props) {
  const imgSrc = producto.imagen ? BASE_IMG + producto.imagen : null
  const hasAttrs = Object.keys(producto.atributos).length > 0

  return (
    <main className="pd-page">

      <div className="pd-breadcrumb">
        <a href="/productos">Catálogo</a>
        <span className="pd-breadcrumb__sep">/</span>
        <span>{producto.nombre}</span>
        <span className="pd-breadcrumb__sep">/</span>
        <span>{producto.referencia}</span>
      </div>

      {/* Rótulo de sección, no encabezado: las 159 fichas compartían un
          <h1> que ponía «PRODUCTO». El encabezado real es el nombre del
          envase, en la columna de la derecha. */}
      <p className="pd-section-title">PRODUCTO</p>

      <div className="pd-body">

        {/* Left — image */}
        <div className="pd-gallery">
          <div className="pd-gallery__main">
            {imgSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imgSrc} alt={`${producto.nombre} ${producto.referencia}`} />
            ) : (
              <div className="pd-gallery__placeholder">{producto.referencia}</div>
            )}
          </div>
        </div>

        {/* Right — specs */}
        <div className="pd-specs">
          <h1 className="pd-specs__name">{producto.nombre}</h1>
          <p className="pd-specs__ref"><strong>Referencia:</strong>{producto.referencia}</p>

          {hasAttrs && (
            <table className="pd-table">
              <tbody>
                {Object.entries(producto.atributos).map(([key, val]) => (
                  <tr key={key} className="pd-table__row">
                    <td className="pd-table__key">{key}</td>
                    <td className="pd-table__val">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {producto.descripcion && (
            <div className="pd-specs__desc">
              <p>{producto.descripcion}</p>
            </div>
          )}

          <a href="/contacto" className="pd-specs__cta">
            Solicitar información →
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <div className="pd-related">
          <h2 className="pd-related__title">PRODUCTOS RELACIONADOS</h2>
          <div className="pd-related__grid">
            {related.map(rel => {
              const relImg = rel.imagen ? BASE_IMG + rel.imagen : null
              return (
                <a
                  key={rel.id}
                  href={`/productos/${encodeURIComponent(rel.referencia)}`}
                  className="pd-related__card"
                >
                  <div className="pd-related__img">
                    {relImg ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={relImg} alt={rel.referencia} />
                    ) : (
                      <div className="pd-gallery__placeholder">{rel.referencia}</div>
                    )}
                  </div>
                  <span className="pd-related__cat">{rel.nombre}</span>
                  <span className="pd-related__ref">{rel.referencia}</span>
                </a>
              )
            })}
          </div>
        </div>
      )}
    </main>
  )
}
