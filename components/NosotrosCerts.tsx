const CERTS = [
  'Reglamento (CE) 1935/2004',
  'REACH compliant',
  'BPA Free',
  'Apto contacto alimentario',
  'ISO 22000',
  'LFGB',
  'Normativa FDA',
]

export default function NosotrosCerts() {
  return (
    <section className="nos-certs">
      <div className="nos-certs__header">
        <div>
          <span className="section-label">Cumplimiento</span>
          <h2 className="nos-certs__title">
            Seguridad alimentaria<br />sin compromisos.
          </h2>
        </div>
        <p className="nos-certs__sub">
          Todos nuestros envases superan los controles reglamentarios exigidos en la Unión Europea
          para materiales en contacto con alimentos. La trazabilidad y la inocuidad son requisitos,
          no opciones.
        </p>
      </div>
      <div className="nos-certs__tags">
        {CERTS.map((cert) => (
          <span key={cert} className="nos-certs__tag">{cert}</span>
        ))}
      </div>
    </section>
  )
}
