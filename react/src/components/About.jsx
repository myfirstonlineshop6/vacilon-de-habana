import { features } from '../data'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">The Club</p>
          <h2 className="section-title">More than a night out</h2>
          <p className="section-sub">
            Three floors and four sound rooms. Engineered for
            sound that hits deep and lights that move with the beat.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}