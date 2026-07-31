import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de devoluciones',
  description: 'Información legal de ENDAL S.L., fabricante de envases alimentarios en San Vicente del Raspeig (Alicante).',
  alternates: { canonical: '/devoluciones' },
  robots: { index: false, follow: true },
}

export default function DevolucionesPage() {
  return (
    <main className="legal-page">

      <section className="legal-header">
        <h2 className="section-label legal-header__label">Legal</h2>
        <h1 className="legal-header__title">Política de<br />Devoluciones</h1>
      </section>

      <section className="legal-body">
        <div className="legal-body__inner">
          <p>
            Para cualquier tramitación en sus devoluciones deberá contactarnos
            telefónicamente en horarios de oficinas en cualquiera de los
            siguientes teléfonos:
          </p>

          <a className="legal-phone" href="tel:+34965661472">(+34) 965 66 14 72</a>
          <a className="legal-phone" href="tel:+34965669891">(+34) 965 66 98 91</a>
        </div>
      </section>

    </main>
  )
}
