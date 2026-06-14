'use client'
import { useEffect, useRef } from 'react'

export default function ServicesDiagram() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const diagLines = section.querySelectorAll<SVGLineElement>('.diag-line')

    diagLines.forEach(line => {
      const dx = parseFloat(line.getAttribute('x2') || '0') - parseFloat(line.getAttribute('x1') || '0')
      const dy = parseFloat(line.getAttribute('y2') || '0') - parseFloat(line.getAttribute('y1') || '0')
      const len = Math.sqrt(dx * dx + dy * dy)
      line.style.strokeDasharray = String(len)
      line.style.strokeDashoffset = String(len)
    })

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        diagLines.forEach((line, i) => {
          const arm = Math.floor(i / 6)
          const idx = i % 6
          const delay = arm * 220 + idx * 55
          setTimeout(() => {
            line.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.32,.94,.6,1)'
            line.style.strokeDashoffset = '0'
          }, delay)
        })
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.15 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="sd-section" ref={sectionRef}>
      <div className="sd-header">
        <h2 className="section-label">Materiales</h2>
        <div className="sd-content">
          <p className="sd-copy">
            En la intersección del aluminio, el plástico y el papel, fabricamos el envase perfecto para cada producto alimentario.
          </p>
          <a href="#" className="btn-outline">Ver todas las gamas</a>
        </div>
      </div>

      <div className="sd-canvas">
        <svg
          className="sd-svg"
          viewBox="0 0 1000 580"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Arm → DESIGN (top-left) */}
          <line className="diag-line" x1="460" y1="310" x2="130" y2="90"  strokeWidth=".9" opacity=".55" />
          <line className="diag-line" x1="462" y1="313" x2="132" y2="93"  strokeWidth=".7" opacity=".30" />
          <line className="diag-line" x1="458" y1="307" x2="128" y2="87"  strokeWidth=".7" opacity=".30" />
          <line className="diag-line" x1="465" y1="312" x2="135" y2="92"  strokeWidth=".5" opacity=".20" />
          <line className="diag-line" x1="455" y1="308" x2="125" y2="88"  strokeWidth=".5" opacity=".20" />
          <line className="diag-line" x1="468" y1="314" x2="138" y2="94"  strokeWidth=".4" opacity=".12" />

          {/* Arm → STRATEGY & BUSINESS (top-right) */}
          <line className="diag-line" x1="460" y1="310" x2="820" y2="80"  strokeWidth=".9" opacity=".55" />
          <line className="diag-line" x1="462" y1="313" x2="822" y2="83"  strokeWidth=".7" opacity=".30" />
          <line className="diag-line" x1="458" y1="307" x2="818" y2="77"  strokeWidth=".7" opacity=".30" />
          <line className="diag-line" x1="465" y1="312" x2="825" y2="82"  strokeWidth=".5" opacity=".20" />
          <line className="diag-line" x1="455" y1="308" x2="815" y2="78"  strokeWidth=".5" opacity=".20" />
          <line className="diag-line" x1="452" y1="307" x2="812" y2="77"  strokeWidth=".4" opacity=".12" />

          {/* Arm → TECHNOLOGY (bottom-left) */}
          <line className="diag-line" x1="460" y1="310" x2="140" y2="510" strokeWidth=".9" opacity=".55" />
          <line className="diag-line" x1="462" y1="313" x2="142" y2="513" strokeWidth=".7" opacity=".30" />
          <line className="diag-line" x1="458" y1="307" x2="138" y2="507" strokeWidth=".7" opacity=".30" />
          <line className="diag-line" x1="465" y1="312" x2="145" y2="512" strokeWidth=".5" opacity=".20" />
          <line className="diag-line" x1="455" y1="308" x2="135" y2="508" strokeWidth=".5" opacity=".20" />
          <line className="diag-line" x1="452" y1="307" x2="132" y2="507" strokeWidth=".4" opacity=".12" />

          {/* NODE: DESIGN */}
          <g transform="translate(30,18)">
            <rect x="20" y="0"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="16" y="4"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="20" y="4"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="24" y="4"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="12" y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="16" y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="20" y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="24" y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="28" y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="16" y="12" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="20" y="12" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="24" y="12" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="20" y="16" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="18" y="20" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="20" y="20" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="22" y="20" width="4" height="4" fill="#333" opacity=".85" />
            <text className="node-text" x="0" y="46">■ ALUMINIO</text>
          </g>

          {/* NODE: STRATEGY & BUSINESS */}
          <g transform="translate(720,12)">
            <rect x="8"  y="0"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="16" y="0"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="10" y="4"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="14" y="4"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="12" y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="12" y="12" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="0"  y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="4"  y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="16" y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="20" y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="12" y="16" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="12" y="20" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="10" y="24" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="12" y="24" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="14" y="24" width="4" height="4" fill="#333" opacity=".85" />
            <text className="node-text" x="0" y="50">■ PLÁSTICO &amp; FILM</text>
          </g>

          {/* NODE: TECHNOLOGY */}
          <g transform="translate(30,440)">
            <rect x="12" y="0"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="8"  y="4"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="12" y="4"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="16" y="4"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="4"  y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="8"  y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="12" y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="16" y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="20" y="8"  width="4" height="4" fill="#333" opacity=".85" />
            <rect x="12" y="12" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="12" y="16" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="10" y="20" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="12" y="20" width="4" height="4" fill="#333" opacity=".85" />
            <rect x="14" y="20" width="4" height="4" fill="#333" opacity=".85" />
            <text className="node-text" x="0" y="44">■ PAPEL</text>
          </g>
        </svg>
      </div>
    </section>
  )
}
