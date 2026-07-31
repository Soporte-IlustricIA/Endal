/** @type {import('next').NextConfig} */

/* Los estáticos de /public se sirven por defecto sin caché, así que en cada
   visita se vuelven a pedir las fotos y el vídeo (10 MB). Como los nombres
   de archivo son estables, se cachean un mes con revalidación en segundo
   plano: la primera visita no cambia y las siguientes son inmediatas. */
const LONG_CACHE = 'public, max-age=2592000, stale-while-revalidate=86400'

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
