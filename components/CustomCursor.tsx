'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top  = e.clientY + 'px'
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest('[data-cursor]') as HTMLElement | null
      if (target?.dataset.cursor) {
        cursor.textContent = '| ' + target.dataset.cursor.toUpperCase() + ' |'
        cursor.classList.add('visible')
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = (e.target as Element).closest('[data-cursor]')
      if (target) cursor.classList.remove('visible')
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
    }
  }, [])

  return <div ref={cursorRef} className="cursor" aria-hidden="true" />
}
