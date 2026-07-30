import HeroText          from '@/components/HeroText'
import HeroCarousel      from '@/components/HeroCarousel'
import About             from '@/components/About'
import WorkCta           from '@/components/WorkCta'
import ServicesGrid      from '@/components/ServicesGrid'
import TrayectoriaSection from '@/components/TrayectoriaSection'
import HomeContact       from '@/components/HomeContact'

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
