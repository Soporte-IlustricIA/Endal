import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catálogo — Próximamente',
  description: 'El catálogo descargable de ENDAL está en preparación. Mientras tanto puedes consultar todas las referencias en la web.',
  alternates: { canonical: '/catalogo' },
  robots: { index: false, follow: true },
}

export default function CatalogoPage() {
  return (
    <main className="soon">
      <div className="soon__inner">
        <span className="section-label soon__label">Catálogo</span>

        <h1 className="soon__title">Próximamente</h1>

        <p className="soon__copy">
          Estamos preparando el catálogo completo en formato descargable.
          Mientras tanto, todas las referencias están disponibles en la web.
        </p>

        <div className="soon__actions">
          <a href="/productos" className="btn-outline">Ver productos</a>
          <a href="/contacto" className="soon__link">
            ¿Necesitas el catálogo ahora? Escríbenos
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </main>
  )
}
