import RotatingPhrase from './RotatingPhrase'

export default function NosotrosMission() {
  return (
    <section className="nos-mission">
      <div className="nos-mission__inner">
        <div className="nos-mission__rule" aria-hidden="true" />
        <p className="nos-mission__text">
          Fabricamos con la convicción de que un buen envase es el primer
          acto de respeto hacia el <RotatingPhrase />
        </p>
        <div className="nos-mission__foot">
          <span className="nos-mission__attr">— ENDAL S.L., fundada en 1991</span>
        </div>
      </div>
    </section>
  )
}
