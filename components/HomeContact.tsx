'use client'
import { useState } from 'react'

export default function HomeContact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: '', apellidos: '', email: '', telefono: '', mensaje: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="hct">
      <div className="hct__inner">

        {/* Left — info */}
        <div className="hct__info">
          <span className="section-label">Contacto</span>
          <h2 className="hct__heading">
            Hablemos<br />de tu proyecto
          </h2>

          <div className="hct__info-rows">
            <div className="hct__row-inline">
              <div className="hct__row">
                <span className="hct__row-key">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <span className="hct__row-val">
                  <a href="tel:+34965661472">(+34) 965 66 14 72</a>
                </span>
              </div>
              <div className="hct__row">
                <span className="hct__row-key">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <span className="hct__row-val">
                  <a href="mailto:info@endal.es">info@endal.es</a>
                </span>
              </div>
            </div>
            <div className="hct__row">
              <span className="hct__row-key">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <span className="hct__row-val">
                Ausías March, 7-9<br />
                Polígono Industrial Canastell<br />
                San Vicente del Raspeig, Alicante
              </span>
            </div>
          </div>

          <a href="/contacto" className="hct__link">Ver página de contacto →</a>

          <div className="hct__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.810406214139!2d-0.5361910233824263!3d38.39963257183471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6233f87444cdf7%3A0xfd7e5c96ad72b521!2sEndal%20Sl!5e0!3m2!1ses!2ses!4v1783611213479!5m2!1ses!2ses"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ubicación ENDAL S.L."
            />
          </div>
        </div>

        {/* Right — form */}
        <div className="hct__form-wrap">
          {sent ? (
            <div className="ct-form__sent">
              <p className="ct-form__sent-title">Mensaje enviado.</p>
              <p className="ct-form__sent-sub">Nos pondremos en contacto contigo en breve.</p>
              <button className="ct-form__submit" onClick={() => setSent(false)}>Enviar otro →</button>
            </div>
          ) : (
            <form className="ct-form" onSubmit={handleSubmit} noValidate>
              <div className="ct-form__row">
                <div className="ct-field">
                  <label htmlFor="hct-nombre">Nombre</label>
                  <input id="hct-nombre" name="nombre" type="text" value={form.nombre} onChange={handleChange} required autoComplete="given-name" />
                </div>
                <div className="ct-field">
                  <label htmlFor="hct-apellidos">Apellidos</label>
                  <input id="hct-apellidos" name="apellidos" type="text" value={form.apellidos} onChange={handleChange} required autoComplete="family-name" />
                </div>
              </div>
              <div className="ct-form__row">
                <div className="ct-field">
                  <label htmlFor="hct-email">Email</label>
                  <input id="hct-email" name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" />
                </div>
                <div className="ct-field">
                  <label htmlFor="hct-telefono">Teléfono</label>
                  <input id="hct-telefono" name="telefono" type="tel" value={form.telefono} onChange={handleChange} autoComplete="tel" />
                </div>
              </div>
              <div className="ct-field ct-field--full">
                <label htmlFor="hct-mensaje">Mensaje</label>
                <textarea id="hct-mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} required rows={5} />
              </div>
              <div className="ct-form__footer">
                <button type="submit" className="ct-form__submit">Enviar mensaje →</button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
