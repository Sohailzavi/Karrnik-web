import SpecularButton from './SpecularButton'

interface AboutUsPageProps {
  onPageChange?: (page: string) => void
}

export function AboutUsPage({ onPageChange }: AboutUsPageProps) {
  const handleServicesClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    if (onPageChange) {
      onPageChange('services')
    } else {
      window.location.hash = 'services'
    }
  }

  const handleAppClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    if (onPageChange) {
      onPageChange('our-work')
    } else {
      window.location.hash = 'our-work'
    }
  }

  return (
    <div className="about-us-page">
      {/* Hero Banner Section */}
      <section className="about-us-hero">
        <div className="about-hero-bg">
          <img 
            src="/about-us-hero.png" 
            alt="KARRNIK Facility & Workshop" 
            className="about-hero-img" 
          />
        </div>
        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <h1 className="about-hero-headline">
            <span className="headline-line">WE DON'T JUST CARE FOR CARS.</span>
            <span className="headline-line">WE CARE ABOUT WHAT THEY MEAN TO YOU.</span>
          </h1>

          <div className="about-hero-actions">
            <button 
              className="about-btn-dark"
              onClick={handleServicesClick}
            >
              Explore Our Services
            </button>
            
            <SpecularButton
              size="lg"
              radius={22}
              tint="transparent"
              tintOpacity={0}
              blur={0}
              textColor="#ffffff"
              lineColor="rgba(255, 255, 255, 0.3)"
              baseColor="transparent"
              intensity={1.2}
              shineSize={36}
              shineFade={28}
              thickness={3.5}
              speed={0.2}
              followMouse
              proximity={360}
              autoAnimate
              onClick={handleAppClick}
            >
              Open Karrnik App
            </SpecularButton>
          </div>
        </div>
      </section>

      {/* Complete Automotive Care Grid Section */}
      <section className="about-services-grid-section">
        <div className="about-services-header">
          <span className="our-services-pill-tag">OUR SERVICES</span>
          <h2 className="about-services-title">
            Complete automotive care, from everyday<br />
            detailing to advanced protection and<br />
            upgrades.
          </h2>
        </div>

        <div className="about-6tile-grid">
          {/* Tile 01: Clean & Detail Card */}
          <div className="about-tile-card">
            <div className="tile-number-badge">01</div>
            <h3 className="about-tile-title">Clean & Detail</h3>
            <p className="about-tile-desc">
              Restore your car's finish with professional cleaning and detailing, inside and out.
            </p>
            <button className="tile-explore-btn" onClick={handleServicesClick}>
              Explore Services &rarr;
            </button>
          </div>

          {/* Tile 02: Protect Card */}
          <div className="about-tile-card">
            <div className="tile-number-badge">02</div>
            <h3 className="about-tile-title">Protect</h3>
            <p className="about-tile-desc">
              Protect your vehicle with advanced solutions designed for lasting shine and finish.
            </p>
            <button className="tile-explore-btn" onClick={handleServicesClick}>
              Explore Services &rarr;
            </button>
          </div>

          {/* Tile 3: Supercar Taillight Photo */}
          <div className="about-tile-image">
            <img 
              src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=90" 
              alt="Supercar Taillight Detail" 
              loading="lazy"
            />
          </div>

          {/* Tile 4: Audi Taillights Photo */}
          <div className="about-tile-image">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=90" 
              alt="Luxury Car Rear Tail Light" 
              loading="lazy"
            />
          </div>

          {/* Tile 03: Customize Card */}
          <div className="about-tile-card">
            <div className="tile-number-badge">03</div>
            <h3 className="about-tile-title">Customize</h3>
            <p className="about-tile-desc">
              Upgrade your car with premium styling, wheels, tyres, audio, lighting, and accessories.
            </p>
            <button className="tile-explore-btn" onClick={handleServicesClick}>
              Explore Services &rarr;
            </button>
          </div>

          {/* Tile 6: Supercar in LED Studio Photo */}
          <div className="about-tile-image">
            <img 
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=90" 
              alt="Supercar in LED Studio" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Brand Destination & Discover Section */}
      <section className="about-destination-section">
        <div className="destination-container">
          <p className="destination-text">
            Karrnik is your destination for premium automotive care, protection,
            customization, and maintenance &mdash; bringing professional service and
            attention to detail together under one standard.
          </p>

          <SpecularButton
            size="lg"
            radius={22}
            tint="transparent"
            tintOpacity={0}
            blur={0}
            textColor="#ffffff"
            lineColor="rgba(255, 255, 255, 0.3)"
            baseColor="transparent"
            intensity={1.2}
            shineSize={36}
            shineFade={28}
            thickness={3.5}
            speed={0.2}
            followMouse
            proximity={360}
            autoAnimate
            onClick={handleServicesClick}
          >
            Discover Karrnik &rarr;
          </SpecularButton>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage
