import type { Metadata } from 'next'
import NosotrosHero    from '@/components/NosotrosHero'
import NosotrosMission from '@/components/NosotrosMission'
import NosotrosHistory from '@/components/NosotrosHistory'
import NosotrosValues  from '@/components/NosotrosValues'
import NosotrosCerts   from '@/components/NosotrosCerts'
import NosotrosCta     from '@/components/NosotrosCta'

export const metadata: Metadata = {
  title: 'Nosotros — ENDAL',
  description: 'Más de tres décadas fabricando envases de aluminio, papel y plástico en España. Conoce la historia, los valores y el equipo de ENDAL S.L.',
}

export default function Nosotros() {
  return (
    <main className="nos-page">
      <NosotrosHero />
      <NosotrosMission />
      <NosotrosHistory />
      <NosotrosValues />
      <NosotrosCerts />
      <NosotrosCta />
    </main>
  )
}
