'use client'
import { useEffect, useRef, useState } from 'react'

/* El máster de planta es vertical y de baja resolución (720×720 con píxel
   anamórfico). En escritorio la sección de trayectoria lo estira a más del
   doble y se veía blando, así que hay una copia recortada al encuadre que
   realmente se ve, reescalada y con más bitrate.

   En móvil se sirve el original: ahí se ve bien y pesa 3 MB menos.

   Dos decisiones de carga:
   · La fuente se elige en cliente porque el atributo `media` de <source> no
     es fiable dentro de <video>; hasta que hidrata no hay src, y así ningún
     dispositivo se descarga el archivo que no le toca.
   · El src no se pone hasta que el bloque se acerca al viewport. Son 10 MB:
     descargarlos al abrir la portada competía con el hero. Fuera de pantalla
     el vídeo se pausa, que decodificar lo que nadie ve gasta batería. */

const DESKTOP = '/video-hd.mp4'
const MOBILE  = '/video.mp4'
const QUERY   = '(min-width: 1024px)'
const POSTER  = '/images/video-poster.webp'

export default function PlantVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [src, setSrc] = useState<string | undefined>(undefined)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const pick = () => (window.matchMedia(QUERY).matches ? DESKTOP : MOBILE)

    if (typeof IntersectionObserver === 'undefined') {
      setSrc(pick())
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrc(prev => {
            // Ya tenía src (reentra tras salir de pantalla): retomar aquí.
            // La primera vez el src todavía no está en el DOM, así que
            // ese play() lo dispara el efecto de abajo cuando React lo comite.
            if (prev) void el.play().catch(() => {})
            return prev ?? pick()
          })
        } else {
          el.pause()
        }
      },
      { rootMargin: '300px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || !src) return
    void el.play().catch(() => {})
  }, [src])

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={POSTER}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      aria-hidden="true"
    />
  )
}
