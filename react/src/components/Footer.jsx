export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <a href="#home" className="brand">
          <span className="brand-mark">V</span>
          <span className="brand-text">
            Vacilon de <span className="accent">Habana</span>
          </span>
        </a>
        <p className="footer-note">
          © {new Date().getFullYear()} Vacilon de Habana. Drink responsibly —
          get home safe.
        </p>
      </div>
    </footer>
  )
}