import HeroText        from '@/components/HeroText'
import HeroCarousel    from '@/components/HeroCarousel'
import About           from '@/components/About'
import WorkCta         from '@/components/WorkCta'
import ServicesGrid    from '@/components/ServicesGrid'
import ServicesDiagram from '@/components/ServicesDiagram'
import StatsBanner     from '@/components/StatsBanner'

export default function Home() {
  return (
    <main>
      <HeroText />
      <HeroCarousel />
      <About />
      <StatsBanner />
      <WorkCta />
      <ServicesGrid />
      <ServicesDiagram />
    </main>
  )
}
