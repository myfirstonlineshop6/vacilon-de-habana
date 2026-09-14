const marqueeItems = [
  'Open Daily',
  'House & Techno',
  'Premium Tables',
  'VIP Lounge',
  '12PM — 6AM',
]

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]
    .flatMap((item) => [item, '·'])
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}