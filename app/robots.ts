import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/src/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // El catálogo descargable todavía es una página «Próximamente»:
        // no aporta nada en resultados y canibaliza a /productos.
        disallow: ['/catalogo'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
