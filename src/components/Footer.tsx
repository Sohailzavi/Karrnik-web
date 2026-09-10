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
          <div className="footer-logo">
            <span className="logo-ring">
              <span className="inner-gold-dot" />
            </span>
            <span className="logo-text-title">KARNIK</span>
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
              <span className="contact-icon">📞</span>
              <span>9133239997</span>
            </li>
            <li>
              <span className="contact-icon">✉</span>
              <span>contact@karnik.in</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
