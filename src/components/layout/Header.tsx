import { useState, useEffect } from 'react'
import SpecularButton from '../ui/SpecularButton'

interface HeaderProps {
  currentPage?: string
  onPageChange?: (page: string) => void
}

const navigation = [
  { name: 'Home', id: 'home' },
  { name: 'Our Work', id: 'our-work' },
  { name: 'About Us', id: 'about-us' },
  { name: 'Locations', id: 'locations' },
]

export function Header({ currentPage = 'home', onPageChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (onPageChange) {
      onPageChange(id)
    }
  }

  return (
    <header className="site-header">
      <a 
        className="brand" 
        href="/" 
        aria-label="KARRNIK home"
        onClick={(e) => handleNavClick(e, 'home')}
      >
        <span className="brand-mark" aria-hidden="true">
          <img src="/images/logo.png" alt="Karrnik Logo" width="44" height="44" style={{ objectFit: 'contain' }} />
        </span>
        <span className="brand-text">KARRNIK</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a
            href={item.id === 'home' ? '/' : `/${item.id}`}
            key={item.id}
            className={`nav-link ${currentPage === item.id ? 'active-nav-link' : ''}`}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            <span>{item.name}</span>
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <div className="desktop-contact-btn">
          <SpecularButton
            size="lg"
            radius={22}
            tint="transparent"
            tintOpacity={0}
            blur={0}
            textColor="#ffffff"
            lineColor="#dda91e"
            baseColor="transparent"
            thickness={1}
            revolving
            href="/contact"
            onClick={(e) => {
              if (e && typeof e.preventDefault === 'function') e.preventDefault()
              setIsMobileMenuOpen(false)
              if (onPageChange) onPageChange('contact')
            }}
          >
            Contact Us
          </SpecularButton>
        </div>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-content">
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                href={item.id === 'home' ? '/' : `/${item.id}`}
                key={item.id}
                className={`mobile-nav-link ${currentPage === item.id ? 'active-nav-link' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                <span>{item.name}</span>
              </a>
            ))}
            <a
              href="/contact"
              className={`mobile-nav-link ${currentPage === 'contact' ? 'active-nav-link' : ''}`}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              <span>Contact Us</span>
            </a>
          </nav>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="mobile-sidebar-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </header>
  )
}

