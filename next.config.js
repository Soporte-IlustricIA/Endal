/** @type {import('next').NextConfig} */

/* Los estáticos de /public se sirven por defecto sin caché, así que en cada
   visita se vuelven a pedir las fotos y el vídeo (10 MB). Como los nombres
   de archivo son estables, se cachean con revalidación en segundo plano: la
   primera visita no cambia y las siguientes son inmediatas.

   OJO: estos ficheros se siguen editando (se sustituyen fotos con el mismo
   nombre de archivo). Con un max-age de 30 días, el navegador de quien ya
   visitó el sitio no vuelve a pedir la imagen aunque el servidor tenga una
   versión nueva — se queda con la vieja hasta que expire. Mientras el sitio
   siga en esta fase de cambios frecuentes, el max-age se mantiene corto (1h)
   para que un redeploy se note enseguida; subirlo a semanas/un mes tiene
   sentido una vez el catálogo de fotos esté cerrado y ya no se reemplacen
   ficheros con el mismo nombre. */
const LONG_CACHE = 'public, max-age=3600, stale-while-revalidate=86400'

const nextConfig = {
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: '/:path*.(webp|png|jpg|jpeg|svg|ico|avif)',
        headers: [{ key: 'Cache-Control', value: LONG_CACHE }],
      },
      {
        source: '/:path*.(mp4|webm)',
        headers: [{ key: 'Cache-Control', value: LONG_CACHE }],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
