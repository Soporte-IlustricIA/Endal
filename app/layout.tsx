import type { Metadata } from 'next'
import './globals.css'
import { Outfit, DM_Sans } from 'next/font/google'
import Navbar       from '@/components/Navbar'
import Footer       from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import { SITE_URL, EMPRESA, DESCRIPCION_BASE, organizationJsonLd, websiteJsonLd } from '@/src/lib/site'

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-outfit',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-dm-sans',
})

/* `metadataBase` es lo que convierte en absolutas las URLs de canonical y de
   Open Graph: sin él, al compartir un enlace la miniatura no se resuelve.
   El `template` deja que cada página escriba sólo su nombre. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  'ENDAL | Envases de aluminio, papel y plástico para alimentación',
    template: '%s | ENDAL',
  },
  description: DESCRIPCION_BASE,
  applicationName: EMPRESA.nombreCorto,
  authors: [{ name: EMPRESA.nombre, url: SITE_URL }],
  creator: EMPRESA.nombre,
  publisher: EMPRESA.nombre,
  category: 'Envases alimentarios',
  keywords: [
    'envases de aluminio',
    'envases alimentarios',
    'bandejas de aluminio',
    'envases de plástico OPS',
    'papel para hornear',
    'bobinas de aluminio',
    'film alimentario',
    'fabricante de envases',
    'envases Alicante',
    'ENDAL',
  ],
  alternates: { canonical: '/' },
  formatDetection: { telephone: true, address: true, email: true },
  // El favicon era un PNG de 284x218 sin comprimir (33 KB) que se pedía en
  // cada página. 96x96 con paleta pesa 3 KB y se ve igual en la pestaña.
  icons: { icon: [{ url: '/icon.png', type: 'image/png', sizes: '96x96' }] },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: EMPRESA.nombreCorto,
    url: SITE_URL,
    title: 'ENDAL | Envases de aluminio, papel y plástico para alimentación',
    description: DESCRIPCION_BASE,
    images: [{ url: '/logo-endal.png', width: 800, height: 164, alt: 'ENDAL — Envases de aluminio y plástico' }],
  },
  twitter: {
    card: 'summary',
    title: 'ENDAL | Envases de aluminio, papel y plástico',
    description: DESCRIPCION_BASE,
    images: ['/logo-endal.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>
        {/* Ficha de empresa y del sitio: es lo que permite a Google mostrar
            dirección, teléfono y perfiles sin tener que deducirlos del texto. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd(), websiteJsonLd()]),
          }}
        />
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
