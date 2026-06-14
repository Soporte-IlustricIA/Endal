import type { Metadata } from 'next'
import './globals.css'
import { Outfit, DM_Sans } from 'next/font/google'
import Navbar       from '@/components/Navbar'
import Footer       from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'

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

export const metadata: Metadata = {
  title: 'ENDAL — Envases de Aluminio',
  description: 'Especialistas en envases de aluminio, papel y plástico para la conservación de alimentos. Más de 4 décadas de experiencia. Fabricación 100% española.',
  icons: {
    icon: '/favicon.PNG',
  },
  openGraph: {
    title: 'ENDAL — Envases de Aluminio',
    description: 'Especialistas en envases de aluminio, papel y plástico para la conservación de alimentos. Más de 4 décadas de experiencia. Fabricación 100% española.',
    images: [{ url: '/logo-endal.png', width: 512, height: 512, alt: 'ENDAL' }],
  },
  twitter: {
    card: 'summary',
    images: ['/logo-endal.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
