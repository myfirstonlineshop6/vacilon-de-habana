import { gallery } from '../data'

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Gallery</p>
          <h2 className="section-title">Nights we remember</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((label, i) => (
            <div className="g-item" style={{ '--g': i }} key={label}>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}