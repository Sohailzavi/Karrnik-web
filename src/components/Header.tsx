import SpecularButton from './SpecularButton'

interface HeaderProps {
  currentPage?: string
  onPageChange?: (page: string) => void
}

const navigation = [
  { name: 'Home', id: 'home' },
  { name: 'Our Work', id: 'our-work' },
  { name: 'About Us', id: 'about-us' },
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
        aria-label="KARNIK home"
        onClick={(e) => handleNavClick(e, 'home')}
      >
        <span className="brand-mark" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9.5" stroke="#dda91e" strokeWidth="2.4" />
            <circle cx="12" cy="10.5" r="3.2" fill="#dda91e" />
            <path d="M12 13.5V16.8" stroke="#dda91e" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </span>
        <span className="brand-text">KARNIK</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a
            href={`#${item.id}`}
            key={item.id}
            className={currentPage === item.id ? 'active-nav-link' : ''}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            {item.name}
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
        intensity={1.2}
        shineSize={36}
        shineFade={28}
        thickness={3.5}
        speed={0.2}
        followMouse
        proximity={360}
        autoAnimate
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
