'use client'
import { useCallback, useRef } from 'react'

export type MaterialVariant = 'aluminio' | 'plastico' | 'papel' | 'maquinaria'

/* Producto real de ENDAL, recortado sobre fondo transparente: la pieza se
   inclina en 3D siguiendo al cursor y la sombra sigue su silueta, no un
   rectángulo. */
const PRODUCT: Record<MaterialVariant, { src: string; alt: string }> = {
  aluminio: {
    src: '/images/material/prod-aluminio.webp',
    alt: 'Envase redondo de aluminio ENDAL, referencia 21400',
  },
  plastico: {
    src: '/images/material/prod-plastico.webp',
    alt: 'Envases OPS ovalados con tapa integrada',
  },
  papel: {
    src: '/images/material/prod-papel.webp',
    alt: 'Bobinas de papel saliendo de la línea de fabricación de ENDAL',
  },
  maquinaria: {
    src: '/images/material/prod-maquinaria.webp',
    alt: 'Máquina termoselladora ENDAL M42600',
  },
}

export default function MaterialShowcase({ variant }: { variant: MaterialVariant }) {
  const ref = useRef<HTMLDivElement>(null)
  const { src, alt } = PRODUCT[variant]

  const onMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', String(((e.clientX - r.left) / r.width - 0.5) * 2))
    el.style.setProperty('--my', String(((e.clientY - r.top) / r.height - 0.5) * 2))
  }, [])

  const reset = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--mx', '0')
    el.style.setProperty('--my', '0')
  }, [])

  return (
    <div
      ref={ref}
      className={`ms ms--${variant}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <span className="ms__ring" aria-hidden="true" />
      <div className="ms__stage">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ms__photo" src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
    </div>
  )
}
