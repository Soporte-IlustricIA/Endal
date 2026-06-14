import AluminioHero         from '@/components/AluminioHero'
import AluminioIntro        from '@/components/AluminioIntro'
import AluminioProperties   from '@/components/AluminioProperties'
import AluminioCatalog      from '@/components/AluminioCatalog'
import AluminioPresentation from '@/components/AluminioPresentation'
import AluminioNewsletter   from '@/components/AluminioNewsletter'
import AluminioExpert       from '@/components/AluminioExpert'

export const metadata = {
  title: 'Aluminio — Recipientes de aluminio | ENDAL',
  description: 'Descubre nuestra gama completa de recipientes de aluminio para horno, congelador y conservación alimentaria.',
}

export default function Aluminio() {
  return (
    <main className="al-page">
      <AluminioHero />
      <AluminioIntro />
      <AluminioProperties />
      <AluminioCatalog />
      <AluminioPresentation />
      <AluminioNewsletter />
      <AluminioExpert />
    </main>
  )
}
