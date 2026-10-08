import SpecularButton from './SpecularButton'

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
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    if (onPageChange) {
      onPageChange(id)
    }
  }

  return (
    <header className="site-header">
      <a 
        className="brand" 
        href="#home" 
        aria-label="KARRNIK home"
        onClick={(e) => handleNavClick(e, 'home')}
      >
        <span className="brand-mark" aria-hidden="true">
          <img src="/logo.png" alt="Karrnik Logo" width="44" height="44" style={{ objectFit: 'contain' }} />
        </span>
        <span className="brand-text">KARRNIK</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a
            href={`#${item.id}`}
            key={item.id}
            className={`nav-link ${currentPage === item.id ? 'active-nav-link' : ''}`}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            <span>{item.name}</span>
          </a>
        ))}
      </nav>

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
        href="#contact"
        onClick={(e) => {
          if (e && typeof e.preventDefault === 'function') e.preventDefault()
          if (onPageChange) onPageChange('contact')
        }}
      >
        Contact Us
      </SpecularButton>
    </header>
  )
}

