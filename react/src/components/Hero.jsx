const stats = [
  { value: '1200', label: 'Capacity' },
  { value: '85+', label: 'Guest DJs / Year' },
  { value: '4.9', label: 'Guest Rating' },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <p className="eyebrow">Open Daily · Gates 12PM</p>
        <h1 className="hero-title">
          <span className="kicker">After Dark</span>
          Vacilon de <span className="hero-accent">Habana</span>
        </h1>
        <p className="hero-sub">
          An immersive nightlife experience. World-class DJs, cinematic sound
          and light, premium service and a crowd that knows how to move.
        </p>
        <div className="hero-actions">
          <a href="#reserve" className="btn btn-primary">
            Reserve a Table
          </a>
          <a href="#events" className="btn btn-ghost">
            Tonight's Lineup
          </a>
        </div>
        <div className="hero-stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}