import { useState } from 'react'

const initialForm = {
  name: '',
  phone: '',
  date: 'Tonight',
  size: '2 — 4 people',
  note: '',
}

export default function Reserve() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, phone } = form

    if (!name.trim() || !phone.trim()) {
      setStatus({ ok: false, text: 'Please tell us your name and phone number.' })
      return
    }

    setStatus({
      ok: true,
      text: `On it, ${name.trim()}! Our reservations team will call you at ${phone.trim()} within the hour.`,
    })
    setForm(initialForm)
  }

  return (
    <section className="section reserve" id="reserve">
      <div className="container reserve-wrap">
        <div className="reserve-info">
          <p className="eyebrow">Reservations</p>
          <h2 className="section-title">Claim your spot</h2>
          <p className="section-sub">
            Tables start at $150 per party. Bottle service, guest lists and
            birthday packages — we've got you covered.
          </p>
          <ul className="reserve-list">
            <li>📞 +1 (555) 010-2040</li>
            <li>📱 WhatsApp: +1 (555) 010-2041</li>
            <li>✉️ tables@vacilondehabana.example</li>
            <li>🕐 Reservations: 12PM — 6AM, 7 days</li>
          </ul>
        </div>
        <form className="reserve-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="r-name">Full name</label>
              <input
                type="text"
                id="r-name"
                name="name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="r-phone">Phone</label>
              <input
                type="tel"
                id="r-phone"
                name="phone"
                placeholder="+1 555 010 0000"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="r-date">Night</label>
              <select id="r-date" name="date" value={form.date} onChange={handleChange}>
                <option>Tonight</option>
                <option>Tomorrow night</option>
                <option>This weekend</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="r-size">Party size</label>
              <select id="r-size" name="size" value={form.size} onChange={handleChange}>
                <option>2 — 4 people</option>
                <option>5 — 8 people</option>
                <option>9 — 12 people</option>
                <option>VIP / 12+</option>
              </select>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="r-note">Anything we should know?</label>
            <textarea
              id="r-note"
              name="note"
              rows="4"
              placeholder="Occasion, music taste, table location..."
              value={form.note}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Request a Table
          </button>
          {status && (
            <p
              className={status.ok ? 'form-status ok' : 'form-status err'}
              role="status"
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}