import type { MetadataRoute } from 'next'
import { catalogoEndal } from '@/src/data/catalogo'
import { SITE_URL } from '@/src/lib/site'

/* Prioridades: la portada y las cuatro gamas son las páginas que queremos
   posicionar; las fichas de producto son la cola larga y las legales van al
   final. /catalogo queda fuera a propósito, es un «Próximamente». */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const principales: MetadataRoute.Sitemap = ([
    { url: `${SITE_URL}/`,           changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/productos`,  changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/aluminio`,   changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/plastico`,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/papel`,      changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/maquinaria`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/nosotros`,   changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${SITE_URL}/contacto`,   changeFrequency: 'yearly',  priority: 0.7 },
  ] satisfies MetadataRoute.Sitemap).map(e => ({ ...e, lastModified: now }))

  const fichas: MetadataRoute.Sitemap = catalogoEndal.map(p => ({
    url: `${SITE_URL}/productos/${encodeURIComponent(p.referencia)}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  const legales: MetadataRoute.Sitemap = [
    `${SITE_URL}/aviso-legal`,
    `${SITE_URL}/privacidad`,
    `${SITE_URL}/devoluciones`,
  ].map(url => ({ url, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.2 }))

  return [...principales, ...fichas, ...legales]
}
