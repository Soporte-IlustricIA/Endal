type Product = {
  id: string
  name: string
  ref: string
  category: string
  desc: string
  img?: string
}

type Props = {
  product: Product
  index: number
}

const CATEGORY_HREFS: Record<string, string> = {
  'Aluminio':   '/aluminio',
  'Plástico':   '/plastico',
  'Papel':      '/papel',
  'Maquinaria': '/maquinaria',
}

export default function ProductCard({ product, index }: Props) {
  const href = CATEGORY_HREFS[product.category]
  const style = { animationDelay: `${index * 40}ms` }

  const inner = (
    <>
      <div className="catalog-card__img">
        {product.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.img} alt={product.name} />
        ) : null}
      </div>
      <span className="catalog-card__cat">{product.category}</span>
      <h3 className="catalog-card__name">{product.name}</h3>
      <span className="catalog-card__ref">{product.ref}</span>
      <p className="catalog-card__desc">{product.desc}</p>
    </>
  )

  if (href) {
    return (
      <a href={href} className="catalog-card" style={style}>
        {inner}
      </a>
    )
  }

  return (
    <article className="catalog-card" style={style}>
      {inner}
    </article>
  )
}
