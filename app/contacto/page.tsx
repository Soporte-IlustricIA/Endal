import type { Metadata } from 'next'
import ContactPage from '@/components/ContactPage'

export const metadata: Metadata = {
  title: 'Contacto — ENDAL',
  description: 'Ponte en contacto con el equipo de ENDAL. Especialistas en envases de aluminio, papel y plástico para la conservación de alimentos.',
}

export default function Contacto() {
  return <ContactPage />
}
