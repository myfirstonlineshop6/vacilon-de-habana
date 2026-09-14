import { lineup } from '../data'

export default function Events() {
  return (
    <section className="section events" id="events">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Upcoming Nights</p>
          <h2 className="section-title">Lineup</h2>
        </div>
        <div className="lineup">
          {lineup.map((n) => (
            <article className="ln-item" key={n.night}>
              <div className="ln-date">{n.date}</div>
              <div className="ln-head">
                <h3>{n.night}</h3>
                <p>{n.dj}</p>
              </div>
              <span className="ln-genre">{n.genre}</span>
            </article>
          ))}
        </div>
        <p className="lineup-cta">
          Questions about an event? <a href="#contact">Get in touch</a>
        </p>
      </div>
    </section>
  )
}