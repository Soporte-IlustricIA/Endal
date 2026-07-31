import HeroText          from '@/components/HeroText'
import HeroCarousel      from '@/components/HeroCarousel'
import About             from '@/components/About'
import WorkCta           from '@/components/WorkCta'
import ServicesGrid      from '@/components/ServicesGrid'
import TrayectoriaSection from '@/components/TrayectoriaSection'
import HomeContact       from '@/components/HomeContact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'ENDAL | Envases de aluminio, papel y plástico para alimentación' },
  description:
    'Fabricamos envases de aluminio, papel y plástico para alimentación desde 1991 en Alicante. ' +
    'Bandejas, envases con tapa, bobinas y film para hostelería, obradores, catering y distribución.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <main>
      <HeroText />
      <HeroCarousel />
      <About />
      <WorkCta />
      <ServicesGrid />
      <TrayectoriaSection />
      <HomeContact />
    </main>
  )
}
