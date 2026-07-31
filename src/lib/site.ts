/* Datos de ENDAL en un solo sitio: los usan los metadatos, el sitemap y los
   datos estructurados. Si cambia un teléfono, cambia en todos a la vez. */

export const SITE_URL = 'https://www.endal.es'

export const EMPRESA = {
  nombre:      'ENDAL S.L.',
  nombreCorto: 'ENDAL',
  cif:         'B03222015',
  fundacion:   '1991',
  calle:       'Calle Ausiàs March, 7-9, Polígono Industrial Canastell',
  ciudad:      'San Vicente del Raspeig',
  provincia:   'Alicante',
  cp:          '03690',
  pais:        'ES',
  telefonos:   ['+34965661472', '+34965669891'],
  fax:         '+34965669203',
  email:       'info@endal.es',
  // Coordenadas del polígono, para el dato local
  lat:         38.3969,
  lon:         -0.5289,
  redes: [
    'https://www.instagram.com/endal_envases/',
    'https://www.facebook.com/people/ENDAL-SL/100069825049118/',
  ],
}

export const DESCRIPCION_BASE =
  'Fabricante español de envases de aluminio, papel y plástico para alimentación. ' +
  'Más de tres décadas fabricando en San Vicente del Raspeig (Alicante) para hostelería, ' +
  'obradores, catering y distribución.'

/* Ficha de empresa. Es a la vez Organization y negocio local: ENDAL fabrica
   y vende desde una dirección física, que es lo que Google necesita para
   las búsquedas de «envases de aluminio Alicante» y similares. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organizacion`,
    name: EMPRESA.nombre,
    alternateName: EMPRESA.nombreCorto,
    url: SITE_URL,
    logo: `${SITE_URL}/logo-endal.png`,
    image: `${SITE_URL}/logo-endal.png`,
    description: DESCRIPCION_BASE,
    foundingDate: EMPRESA.fundacion,
    taxID: EMPRESA.cif,
    vatID: `ES${EMPRESA.cif}`,
    email: EMPRESA.email,
    telephone: EMPRESA.telefonos[0],
    faxNumber: EMPRESA.fax,
    address: {
      '@type': 'PostalAddress',
      streetAddress: EMPRESA.calle,
      addressLocality: EMPRESA.ciudad,
      addressRegion: EMPRESA.provincia,
      postalCode: EMPRESA.cp,
      addressCountry: EMPRESA.pais,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: EMPRESA.lat,
      longitude: EMPRESA.lon,
    },
    contactPoint: EMPRESA.telefonos.map(t => ({
      '@type': 'ContactPoint',
      telephone: t,
      contactType: 'sales',
      areaServed: ['ES', 'EU', 'AF'],
      availableLanguage: ['es'],
    })),
    sameAs: EMPRESA.redes,
    areaServed: [
      { '@type': 'Country', name: 'España' },
      { '@type': 'Place',   name: 'Europa' },
      { '@type': 'Place',   name: 'África' },
    ],
    knowsAbout: [
      'Envases de aluminio para alimentación',
      'Envases de plástico OPS y polipropileno',
      'Papel para hornear y papel vegetal',
      'Bobinas de aluminio y film alimentario',
      'Maquinaria de envasado',
    ],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#web`,
    url: SITE_URL,
    name: `${EMPRESA.nombreCorto} — Envases alimentarios`,
    inLanguage: 'es-ES',
    publisher: { '@id': `${SITE_URL}/#organizacion` },
  }
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.url}`,
    })),
  }
}
