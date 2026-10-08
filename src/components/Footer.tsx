interface FooterProps {
  onPageChange?: (page: string) => void
}

export function Footer({ onPageChange }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    if (onPageChange) {
      e.preventDefault()
      onPageChange(page)
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="brand-mark" aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo.png" alt="Karrnik Logo" width="32" height="32" style={{ objectFit: 'contain' }} />
            </span>
            <span className="logo-text-title" style={{ fontSize: '1.5rem', fontWeight: 600 }}>KARRNIK</span>
          </div>
          <p className="footer-tagline-sub">Premium Automotive Care & Protection</p>

          <p className="footer-byline">
            Driven by care.
            <br />
            Built for what moves you.
          </p>

          <a href="#app-qr" className="scan-app-btn">
            Scan for Mobile App
          </a>

          <div className="qr-code-box">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="white" rx="8" />
              <rect x="8" y="8" width="30" height="30" fill="black" rx="4" />
              <rect x="14" y="14" width="18" height="18" fill="white" rx="2" />
              <rect x="18" y="18" width="10" height="10" fill="black" />

              <rect x="62" y="8" width="30" height="30" fill="black" rx="4" />
              <rect x="68" y="14" width="18" height="18" fill="white" rx="2" />
              <rect x="72" y="18" width="10" height="10" fill="black" />

              <rect x="8" y="62" width="30" height="30" fill="black" rx="4" />
              <rect x="14" y="68" width="18" height="18" fill="white" rx="2" />
              <rect x="18" y="72" width="10" height="10" fill="black" />

              <rect x="45" y="10" width="8" height="8" fill="black" />
              <rect x="45" y="25" width="8" height="15" fill="black" />
              <rect x="60" y="45" width="15" height="8" fill="black" />
              <rect x="45" y="45" width="10" height="10" fill="black" />
              <rect x="45" y="62" width="12" height="12" fill="black" />
              <rect x="62" y="62" width="14" height="8" fill="black" />
              <rect x="80" y="48" width="10" height="20" fill="black" />
              <rect x="65" y="76" width="15" height="14" fill="black" />
              <rect x="82" y="76" width="10" height="14" fill="black" />
            </svg>
          </div>
        </div>

        {/* Explore Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">EXPLORE</h4>
          <ul className="footer-links">
            <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
            <li><a href="#our-work" onClick={(e) => handleLinkClick(e, 'our-work')}>Our Work</a></li>
            <li><a href="#about-us" onClick={(e) => handleLinkClick(e, 'about-us')}>About Us</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">SERVICES</h4>
          <ul className="footer-links">
            <li><a href="#car-wash">Car Wash</a></li>
            <li><a href="#detailing">Detailing</a></li>
            <li><a href="#ceramic-coating">Ceramic Coating</a></li>
            <li><a href="#ppf">PPF</a></li>
            <li><a href="#car-wrapping">Car Wrapping</a></li>
            <li><a href="#alloy-wheels">Alloy & Tyre Upgrades</a></li>
            <li><a href="#repairs">Repairs & Maintenance</a></li>
          </ul>
        </div>

        {/* Locations Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">LOCATIONS</h4>
          <ul className="footer-links">
            <li><a href="#kompally">Kompally</a></li>
            <li><a href="#kondapur">Kondapur</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">CONTACT</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="contact-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </span>
              <a href="tel:9133239997" style={{ color: 'inherit', textDecoration: 'none' }}>9133239997</a>
            </li>
            <li>
              <span className="contact-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <a href="mailto:contact@karrnik.in" style={{ color: 'inherit', textDecoration: 'none' }}>contact@karrnik.in</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
