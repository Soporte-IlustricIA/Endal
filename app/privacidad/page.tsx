import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de privacidad y cookies',
  description: 'Información legal de ENDAL S.L., fabricante de envases alimentarios en San Vicente del Raspeig (Alicante).',
  alternates: { canonical: '/privacidad' },
  robots: { index: false, follow: true },
}

export default function PrivacidadPage() {
  return (
    <main className="legal-page">

      <section className="legal-header">
        <h2 className="section-label legal-header__label">Legal</h2>
        <h1 className="legal-header__title">Política de Privacidad<br />y Cookies</h1>
      </section>

      <section className="legal-body">
        <div className="legal-body__inner">

          <p>
            ENDAL S.L. es consciente de la importancia de la privacidad de los datos de carácter
            personal y por ello, ha implementado una política de tratamiento de datos orientada a
            proveer la máxima seguridad en el uso y recogida de los mismos, garantizando el
            cumplimiento de la normativa vigente en la materia.
          </p>
          <p>
            Durante la navegación a través de la web www.endal.es es posible que se soliciten datos
            de carácter personal a través de diferentes formularios dispuestos al efecto. Dichos datos
            formarán parte de los pertinentes tratamientos en función de la finalidad que motiva su
            recogida.
          </p>

          <h2>I. Identificación del responsable del tratamiento</h2>
          <p>
            La totalidad de tratamientos de datos son realizados en nombre de ENDAL S.L.:
          </p>
          <p>
            <strong>Responsable del tratamiento:</strong> ENDAL S.L.<br />
            Domicilio: C/ Ausias March 7-9 Pol. Ind. Canastell c.p. 03690<br />
            E-mail: <a href="mailto:info@endal.es">info@endal.es</a><br />
            Teléfono: <a href="tel:+34965669203">965 66 92 03</a>
          </p>
          <p>
            <strong>Ejercicio de derechos:</strong> Podrá acceder, rectificar y suprimir los datos,
            así como revocar la autorización para su tratamiento, ejercitar los derechos de
            limitación, portabilidad, y a no ser objeto de decisiones automatizadas dirigiéndose por
            escrito a la dirección postal indicada o a{' '}
            <a href="mailto:info@endal.es">info@endal.es</a>.
          </p>

          <h2>II. Tratamientos de datos realizados a través de www.endal.es</h2>

          <h3>1. Formularios de contacto</h3>
          <p>
            <strong>Datos tratados:</strong> Los que nos facilite a través de los formularios de
            contacto de la web o por medios electrónicos como e-mail o mensajería instantánea.
          </p>
          <p>
            <strong>Finalidad:</strong> Gestionar las comunicaciones establecidas con los usuarios
            que nos remitan mensajes. Los datos no serán utilizados con una finalidad diferente.
          </p>
          <p>
            <strong>Decisiones automatizadas:</strong> No se realiza segmentación de perfiles ni
            se toman decisiones automatizadas.
          </p>
          <p>
            <strong>Conservación:</strong> Durante el tiempo necesario para gestionar su solicitud.
            Posteriormente, los datos serán eliminados si no se produce una nueva interacción en el
            plazo de un año.
          </p>
          <p>
            <strong>Base jurídica:</strong> El consentimiento inequívoco que manifiesta al aceptar
            la política de privacidad.
          </p>
          <p>
            <strong>Obligación:</strong> Los datos solicitados son obligatorios. Sin ellos no se
            podrá gestionar su solicitud.
          </p>
          <ul>
            <li>No se realizarán cesiones de datos.</li>
            <li>No se realizarán transferencias internacionales de datos.</li>
          </ul>

          <h3>2. Gestión de pedidos online</h3>
          <p>
            <strong>Datos tratados:</strong> Los facilitados durante el proceso de pedido de
            productos ENDAL.
          </p>
          <p>
            <strong>Finalidad:</strong> La gestión y tramitación de su pedido online.
          </p>
          <p>
            <strong>Decisiones automatizadas:</strong> No se realiza segmentación de perfiles ni
            se toman decisiones automatizadas.
          </p>
          <p>
            <strong>Conservación:</strong> Durante el plazo de tiempo por el que pudieran derivarse
            responsabilidades entre las partes, con un mínimo de 5 años.
          </p>
          <p>
            <strong>Base jurídica:</strong> La aceptación de los Términos y Condiciones de
            Contratación.
          </p>
          <p>
            <strong>Destinatarios de sus datos:</strong>
          </p>
          <ul>
            <li>Entidades financieras para la formalización del pago del pedido.</li>
            <li>
              Empresas de logística, transporte y entrega de paquetes para el envío y entrega
              del pedido.
            </li>
            <li>
              Proveedores tecnológicos para el mantenimiento de la infraestructura del carrito
              de la compra.
            </li>
            <li>No se realizarán transferencias internacionales de datos.</li>
          </ul>

          <h2>III. Ejercicio de derechos</h2>
          <p>
            Tiene derecho a obtener confirmación sobre si estamos tratando datos personales que le
            conciernan. Como interesado, tiene derecho a acceder a sus datos personales, así como a
            solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión
            cuando los datos ya no sean necesarios para los fines que fueron recogidos.
          </p>
          <p>
            En determinadas circunstancias, podrá solicitar la limitación del tratamiento de sus
            datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de
            reclamaciones. Podrá también oponerse al tratamiento de sus datos por motivos
            relacionados con su situación particular.
          </p>
          <p>
            En aquellos supuestos en los que el tratamiento estuviera basado en su consentimiento,
            podrá revocarlo en cualquier momento. Cuando legalmente proceda, tendrá el derecho a la
            portabilidad de los datos.
          </p>
          <p>
            En caso de que considere que existe un problema con el tratamiento de sus datos, puede
            contactar con nosotros en{' '}
            <a href="mailto:info@endal.es">info@endal.es</a>. Tiene también derecho a presentar
            una reclamación ante la{' '}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
              Agencia Española de Protección de Datos
            </a>.
          </p>

        </div>
      </section>

    </main>
  )
}
