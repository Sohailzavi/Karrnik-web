import SplitFlapText from './SplitFlapText'

interface HeroProps {
  onPageChange?: (page: string) => void
}

export function Hero({ onPageChange }: HeroProps) {
  return (
    <section className="hero-section" id="home" aria-label="Hero Showcase">
      <div className="hero-card">
        {/* High-Definition Car Image & Dark Gradient Overlay */}
        <div className="hero-car-wrapper" aria-hidden="true">
          <img
            src="/car.png"
            alt="Porsche Carrera Detail"
            className="hero-car-img"
            decoding="sync"
            fetchPriority="high"
          />
          <div className="hero-car-mask" />
        </div>

        <div className="hero-card-content">
          {/* Top Section: Title & Subtitle */}
          <div className="hero-header-row">
            <div className="hero-title-group">
              <div className="hero-title-line-1">
                <SplitFlapText
                  words={['PRECISION', 'PERFECTION', 'EXCELLENCE']}
                  flipDuration={0.12}
                  stagger={0.06}
                  cycleDelay={3200}
                  flipsPerChar={8}
                  tileColor="#141414"
                  textColor="#dda91e"
                  tileRadius={8}
                  gap={5}
                  fontSize={52}
                  loop
                  padTo={10}
                  className="split-flap-gold"
                />
                <span className="hero-subtitle">
                  Your car deserves more<br />than just the ordinary.
                </span>
              </div>
              <div className="hero-title-line-2">
                <span className="white-text">in Every </span>
                <SplitFlapText
                  words={['DETAIL', 'FINISH', 'STANDARD']}
                  flipDuration={0.12}
                  stagger={0.06}
                  cycleDelay={3200}
                  flipsPerChar={8}
                  tileColor="#141414"
                  textColor="#dda91e"
                  tileRadius={8}
                  gap={5}
                  fontSize={52}
                  loop
                  padTo={8}
                  className="split-flap-gold"
                />
              </div>
            </div>
          </div>

          {/* Middle Section: Corner Bracket Framed Promise */}
          <div className="hero-middle-frame">
            <div className="bracket-top-right" aria-hidden="true" />
            <p className="hero-promise-text">
              We deliver a standard<br />
              your car deserves.
            </p>
            <div className="bracket-bottom-left" aria-hidden="true" />
          </div>

          {/* Bottom Section: Reflection Statement */}
          <div className="hero-bottom-statement">
            <p>
              It reflects your <span className="gold-accent">Taste</span>, your{' '}
              <span className="gold-accent">Character</span>, your{' '}
              <span className="gold-accent">Standard.</span>
            </p>
          </div>
        </div>

        {/* Floating Book Now Button */}
        <a
          className="book-now-button"
          href="#contact"
          aria-label="Book Now"
          onClick={(e) => {
            e.preventDefault()
            if (onPageChange) onPageChange('contact')
          }}
        >
          <span>Book Now</span>
          <span className="book-now-icon" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
