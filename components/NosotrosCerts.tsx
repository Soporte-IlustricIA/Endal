const CERTS = [
  'Reglamento (CE) 1935/2004',
  'REACH compliant',
  'BPA Free',
  'Apto contacto alimentario',
  'ISO 22000',
  'LFGB',
  'Normativa FDA',
]

/* Ficha técnica en lugar de un párrafo suelto: es el mismo registro
   (rótulo corto en versales + dato) que usa el catálogo. */
const SPECS: [string, string][] = [
  ['Marco normativo', 'Reglamento (CE) 1935/2004'],
  ['Materiales',      'Aluminio · Papel · Plástico alimentario'],
  ['Control',         'Trazabilidad por lote de fabricación'],
  ['Alcance',         'España · Europa · África'],
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

        <div className="nos-certs__aside">
          <p className="nos-certs__lead">
            Todos nuestros envases superan los controles reglamentarios exigidos en la Unión
            Europea para materiales en contacto con alimentos.
          </p>
          <dl className="nos-certs__specs">
            {SPECS.map(([key, val]) => (
              <div key={key} className="nos-certs__spec">
                <dt>{key}</dt>
                <dd>{val}</dd>
              </div>
            ))}
          </dl>
          <p className="nos-certs__note">
            La trazabilidad y la inocuidad son requisitos, no opciones.
          </p>
        </div>
      </div>

      <div className="nos-certs__tags-wrap">
        <span className="nos-certs__tags-label">Certificaciones y normativas</span>
        <div className="nos-certs__tags">
          {CERTS.map((cert) => (
            <span key={cert} className="nos-certs__tag">{cert}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
