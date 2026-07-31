export type MaterialKey = 'aluminio' | 'plastico' | 'papel' | 'maquinaria'

type Intro = {
  eyebrow: string
  title:   string
  lead:    string
  copy:    string
  /* Ficha corta bajo el texto: mismo registro (rótulo en versales + dato)
     que el catálogo y la página de Nosotros. */
  specs:   [string, string][]
}

const DATA: Record<MaterialKey, Intro> = {
  aluminio: {
    eyebrow: 'Gama',
    title:   'Aluminio',
    lead:    'Un envase para cada forma de cocinar, conservar y transportar.',
    copy:    'Del redondo para tapa a la bañera de catering, la gama cubre horno, congelador y reparto sin cambiar de material. Elige por formato, por capacidad o por tipo de uso: todas las referencias comparten el mismo aluminio apto para el contacto con alimentos.',
    specs: [
      ['Formatos',     'Redondo · Rectangular · Ovalado · Bañera'],
      ['Aplicaciones', 'Horno · Congelador · Catering'],
      ['Fabricación',  'España, desde 1991'],
    ],
  },
  plastico: {
    eyebrow: 'Gama',
    title:   'Plástico',
    lead:    'Transparencia para lo que se vende por la vista.',
    copy:    'Envases OPS con tapa integrada, polipropileno para producto caliente y bobinas de film doméstico e industrial. Formatos pensados para mostrador, reparto y envasado en línea, con el cierre resuelto en la propia pieza.',
    specs: [
      ['Materiales',   'OPS · Polipropileno · Film'],
      ['Aplicaciones', 'Mostrador · Reparto · Envasado'],
      ['Cierre',       'Tapa integrada o termosellado'],
    ],
  },
  papel: {
    eyebrow: 'Gama',
    title:   'Papel',
    lead:    'Papel que entra en el horno con el producto dentro.',
    copy:    'Moldes de papel para hornear que pasan del horno al mostrador sin desmoldar, y bobinas de papel vegetal para forrar, separar y hornear. Sin engrasar la bandeja y sin que la masa se pegue.',
    specs: [
      ['Formatos',     'Molde para hornear · Bobina vegetal'],
      ['Aplicaciones', 'Horno · Obrador · Mostrador'],
      ['Uso',          'Apto para contacto alimentario'],
    ],
  },
  maquinaria: {
    eyebrow: 'Gama',
    title:   'Maquinaria',
    lead:    'Los equipos que acompañan al envase.',
    copy:    'Termoselladoras y portarrollos pensados para trabajar con los formatos de la gama ENDAL. Equipos compactos, de bajo mantenimiento y fáciles de integrar tanto en una cocina como en una línea de producción.',
    specs: [
      ['Equipos',        'Termoselladora · Portarrollos'],
      ['Compatibilidad', 'Formatos ENDAL'],
      ['Uso',            'Obrador · Cocina · Línea'],
    ],
  },
}

export default function MaterialIntro({ material }: { material: MaterialKey }) {
  const { eyebrow, title, lead, copy, specs } = DATA[material]

  return (
    <section className="al-intro">
      <div className="al-intro__head">
        <span className="section-label">{eyebrow}</span>
        <h1 className="al-intro__title">{title}</h1>
      </div>

      <div className="al-intro__body">
        <p className="al-intro__lead">{lead}</p>
        <p className="al-intro__copy">{copy}</p>
      </div>

      <dl className="al-intro__specs">
        {specs.map(([label, value]) => (
          <div className="al-intro__spec" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
