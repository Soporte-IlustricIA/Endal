'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    mensaje: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="ct-page">

      <div className="ct-hero">
        <span className="section-label ct-hero__label">Contacto</span>
        <h1 className="ct-hero__heading">
          Hablemos<br />de tu proyecto
        </h1>
      </div>

      <div className="ct-body">

        {/* Left column — info + map */}
        <div className="ct-info">
          <div className="ct-info-block">
            <div className="ct-info-row">
              <span className="ct-info-row__key">T</span>
              <span className="ct-info-row__val">
                <a href="tel:+34965661472">(+34) 965 66 14 72</a><br />
                <a href="tel:+34965669891">(+34) 965 66 98 91</a>
              </span>
            </div>
            <div className="ct-info-row">
              <span className="ct-info-row__key">E</span>
              <span className="ct-info-row__val">
                <a href="mailto:info@endal.es">info@endal.es</a>
              </span>
            </div>
            <div className="ct-info-row">
              <span className="ct-info-row__key">A</span>
              <span className="ct-info-row__val">
                Ausías March, 7-9<br />
                Polígono Industrial Canastell<br />
                San Vicente del Raspeig, Alicante
              </span>
            </div>
          </div>

          <div className="ct-map">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.81040499589!2d-0.5336160999999998!3d38.3996326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6233f87444cdf7%3A0xfd7e5c96ad72b521!2sEndal%20Sl!5e0!3m2!1ses!2ses!4v1780565788652!5m2!1ses!2ses"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación ENDAL S.L."
            />
          </div>
        </div>

        {/* Right column — form */}
        <div className="ct-form-wrap">
          {sent ? (
            <div className="ct-form__sent">
              <p className="ct-form__sent-title">Mensaje enviado.</p>
              <p className="ct-form__sent-sub">Nos pondremos en contacto contigo en breve.</p>
              <button className="ct-form__submit" onClick={() => setSent(false)}>
                Enviar otro →
              </button>
            </div>
          ) : (
            <form className="ct-form" onSubmit={handleSubmit} noValidate>
              <div className="ct-form__row">
                <div className="ct-field">
                  <label htmlFor="ct-nombre">Nombre</label>
                  <input
                    id="ct-nombre"
                    name="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-apellidos">Apellidos</label>
                  <input
                    id="ct-apellidos"
                    name="apellidos"
                    type="text"
                    value={form.apellidos}
                    onChange={handleChange}
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="ct-form__row">
                <div className="ct-field">
                  <label htmlFor="ct-email">Email</label>
                  <input
                    id="ct-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-telefono">Teléfono</label>
                  <input
                    id="ct-telefono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="ct-field ct-field--full">
                <label htmlFor="ct-mensaje">Mensaje</label>
                <textarea
                  id="ct-mensaje"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                />
              </div>

              <div className="ct-form__footer">
                <button type="submit" className="ct-form__submit">
                  Enviar mensaje →
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </main>
  )
}
