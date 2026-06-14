'use client'
import { useState } from 'react'

type Freq = 'semana' | 'mes'

export default function PlasticoNewsletter() {
  const [email, setEmail] = useState('')
  const [freq, setFreq]   = useState<Freq>('semana')
  const [sent, setSent]   = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <section className="al-newsletter">
      <div className="al-newsletter__left">
        <span className="section-label">Boletín</span>
        <p className="al-newsletter__copy">
          Para más novedades sobre nuestros productos de plástico alimentario
          o para descubrir otras soluciones de envasado,
          suscríbete a nuestras <em>noticias ENDAL</em>.
          Dos opciones se ofrecen a tu elección.
        </p>
      </div>

      <div className="al-newsletter__right">
        <div className="al-newsletter__options">
          <label className="al-newsletter__option" onClick={() => setFreq('semana')}>
            <span className={`al-newsletter__radio${freq === 'semana' ? ' al-newsletter__radio--selected' : ''}`} />
            Dos veces por semana
          </label>
          <label className="al-newsletter__option" onClick={() => setFreq('mes')}>
            <span className={`al-newsletter__radio${freq === 'mes' ? ' al-newsletter__radio--selected' : ''}`} />
            Una vez al mes
          </label>
        </div>

        {sent ? (
          <p style={{ fontSize: '1.3rem', fontWeight: 300, opacity: .7 }}>
            ¡Gracias! Te has suscrito correctamente.
          </p>
        ) : (
          <form className="al-newsletter__form" onSubmit={handleSubmit}>
            <input
              className="al-newsletter__input"
              type="email"
              placeholder="Introduce tu e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button className="al-newsletter__submit" type="submit">
              Suscribirse →
            </button>
          </form>
        )}

        <p className="al-newsletter__disclaimer">
          Al confirmar esto, certifico que acepto el tratamiento de mis datos según las{' '}
          <a href="/privacidad">condiciones de utilización</a>.
        </p>
      </div>
    </section>
  )
}
