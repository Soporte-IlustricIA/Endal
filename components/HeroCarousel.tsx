'use client'
import { useEffect, useState, useCallback, useRef } from 'react'

interface Project {
  color: string
  name: string
  ref: string
  imgA: string
  imgB: string
}

const PROJECTS: Record<string, Project> = {
  halo: {
    color: '#231F1D',
    name: 'Halo Dental',
    ref: 'REF · PCA · 0524',
    imgA: 'https://a.storyblok.com/f/285561750510308/2000x2000/88bf31eac6/halo_thumb.jpg',
    imgB: 'https://a.storyblok.com/f/285561750510308/1680x1680/f7c2f22b9b/halo_preview_grid.jpg',
  },
  cellart: {
    color: '#0d0c0b',
    name: 'CellArt',
    ref: 'REF · STR · 0423',
    imgA: 'https://a.storyblok.com/f/285561750510308/1920x1080/20d97ea675/cellart_09_elevated-process.jpg',
    imgB: 'https://a.storyblok.com/f/285561750510308/3840x2160/1176805b4c/ref_cellart_02-museum-inspired-brand.jpg',
  },
  mission: {
    color: '#1a3fbe',
    name: 'Mission 2035',
    ref: 'REF · PHM · 0524',
    imgA: 'https://a.storyblok.com/f/285561750510308/1920x1080/f62a0a6393/ref_mission2035_04_thumb.jpg',
    imgB: 'https://a.storyblok.com/f/285561750510308/2880x1620/7df61ee83c/ref_mission2035_01-3d-global.jpg',
  },
}

const PROJECT_ORDER = ['halo', 'cellart', 'mission']

const FADE_MS = 350

export default function HeroCarousel() {
  const [activeId, setActiveId] = useState('mission')
  const [fading,   setFading]   = useState(false)
  const fadingRef  = useRef(false)

  const activate = useCallback((id: string) => {
    if (fadingRef.current) return
    fadingRef.current = true
    setFading(true)
    setTimeout(() => {
      setActiveId(id)
      setFading(false)
      fadingRef.current = false
    }, FADE_MS)
  }, [])

  useEffect(() => {
    let idx = PROJECT_ORDER.indexOf('mission')
    const timer = setInterval(() => {
      idx = (idx + 1) % PROJECT_ORDER.length
      activate(PROJECT_ORDER[idx])
    }, 5000)
    return () => clearInterval(timer)
  }, [activate])

  const p = PROJECTS[activeId]

  return (
    <section
      className="hero-carousel"
      style={{ '--project-color': p.color, backgroundColor: p.color } as React.CSSProperties}
    >
      <div className="hero-carousel__inner">
        <div className="hero-carousel__media" style={{ opacity: fading ? 0 : 1 }}>
          <div className="hero-carousel__media-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.imgA} alt={p.name} />
          </div>
          <div className="hero-carousel__media-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.imgB} alt={p.name} />
          </div>
        </div>

        <div className="hero-carousel__bottom">
          <span className="hero-carousel__project-name" style={{ opacity: fading ? 0 : 1 }}>{p.name}</span>

          <div className="hero-carousel__thumbs">
            {PROJECT_ORDER.map(id => (
              <button
                key={id}
                className={`hero-carousel__thumb${activeId === id ? ' active' : ''}`}
                onClick={() => activate(id)}
                aria-label={PROJECTS[id].name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PROJECTS[id].imgA} alt={PROJECTS[id].name} />
              </button>
            ))}
          </div>

          <span className="hero-carousel__ref" style={{ opacity: fading ? 0 : 1 }}>{p.ref}</span>
        </div>
      </div>
    </section>
  )
}
