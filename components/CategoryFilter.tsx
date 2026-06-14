type Props = {
  cats: readonly string[]
  active: string
  onSelect: (cat: string) => void
}

export default function CategoryFilter({ cats, active, onSelect }: Props) {
  return (
    <div className="catalog-filters">
      {cats.map(cat => (
        <button
          key={cat}
          className={`cat-btn${active === cat ? ' cat-btn--active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
