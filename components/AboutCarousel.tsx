'use client'

const SLIDES = [
  '#c8c8c8',
  '#ababab',
  '#d2d2d2',
  '#b6b6b6',
  '#c2c2c2',
  '#b0b0b0',
]

export default function AboutCarousel() {
  const items = [...SLIDES, ...SLIDES]
  return (
    <div className="about-carousel">
      <div className="about-carousel__track">
        {items.map((color, i) => (
          <div key={i} className="about-carousel__item" style={{ background: color }} />
        ))}
      </div>
    </div>
  )
}
