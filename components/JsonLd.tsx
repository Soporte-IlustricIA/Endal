/* Inserta datos estructurados. Componente de servidor: el JSON viaja en el
   HTML y Google lo lee sin ejecutar nada. */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
