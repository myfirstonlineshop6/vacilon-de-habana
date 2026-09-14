import { useEffect, useState } from 'react'

function Logo() {
  return (
    <a href="#home" className="brand">
      <span className="brand-mark">V</span>
      <span className="brand-text">
        Vacilon de <span className="accent">Habana</span>
      </span>
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'The Club' },
    { href: '#events', label: 'Lineup' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#reserve', label: 'Reservations' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
      <div className="container nav-wrap">
        <Logo />
        <nav className={open ? 'nav open' : 'nav'}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#reserve" className="btn btn-primary btn-sm nav-join" onClick={() => setOpen(false)}>
            Book a Table
          </a>
        </nav>
        <button
          className={open ? 'nav-toggle open' : 'nav-toggle'}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}