import { useState, useRef, useCallback } from 'react'
import SpecularButton from '../ui/SpecularButton'

interface HeroProps {
  onPageChange?: (page: string) => void
}

const MASK_RADIUS = 160

export function Hero({ onPageChange }: HeroProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect || e.touches.length === 0) return
    setPos({ x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top })
  }, [])

  const maskStyle = hovered
    ? {
        WebkitMaskImage: `radial-gradient(circle ${MASK_RADIUS}px at ${pos.x}px ${pos.y}px, black 45%, transparent 100%)`,
        maskImage: `radial-gradient(circle ${MASK_RADIUS}px at ${pos.x}px ${pos.y}px, black 45%, transparent 100%)`,
        opacity: 1,
      }
    : {
        WebkitMaskImage: "radial-gradient(circle 0px at 50% 50%, black 0%, transparent 0%)",
        maskImage: "radial-gradient(circle 0px at 50% 50%, black 0%, transparent 0%)",
        opacity: 0,
      }

  return (
    <section className="hero-section" id="home" aria-label="Hero Showcase">
      <div 
        ref={containerRef}
        className="hero-card"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={(e) => {
          setHovered(true)
          handleTouchMove(e)
        }}
        onTouchEnd={() => setHovered(false)}
      >
        {/* Porsche Carrera Image Background & Fade Overlay */}
        <div className="hero-car-wrapper" aria-hidden="true">
          <img
            src="/images/car.jpg"
            alt="Porsche Carrera Detail"
            className="hero-car-img hero-car-base"
            decoding="sync"
            fetchPriority="high"
            draggable={false}
          />
          <img
            src="/images/car-glow.jpg"
            alt="Porsche Carrera Glowing Detail"
            className="hero-car-img hero-car-glow"
            decoding="sync"
            style={{
              ...maskStyle,
              transition: hovered ? "none" : "mask-image 0.3s ease, -webkit-mask-image 0.3s ease, opacity 0.3s ease",
            }}
            draggable={false}
          />
          <div className="hero-car-mask" />
        </div>

        <div className="hero-card-content">
          {/* Headline Top Section */}
          <div className="hero-header-row">
            <div className="hero-title-group">
              <div className="hero-title-line-1">
                <span className="gold-text-hero">Precision</span>
                <div className="hero-subtitle">
                  <span className="subtitle-highlight-bar" aria-hidden="true" />
                  <div className="subtitle-line-1">Your car deserves more</div>
                  <div className="subtitle-line-2">than just the ordinary.</div>
                </div>
              </div>

              <div className="hero-title-line-2">
                <span className="white-text-hero">in Every </span>
                <span className="gold-text-hero">Detail</span>
              </div>
            </div>
          </div>

          {/* Middle Section: L-Bracket Framed Statement */}
          <div className="hero-middle-frame">
            <div className="bracket-top-right" aria-hidden="true" />
            <p className="hero-promise-text">
              We deliver a standard<br />
              your car deserves.
            </p>
            <div className="bracket-bottom-left" aria-hidden="true" />
          </div>

          {/* Bottom Tagline Statement */}
          <div className="hero-bottom-statement">
            <p>
              It reflects your <span className="gold-accent">Taste</span>, your{' '}
              <span className="gold-accent">Character</span>, your{' '}
              <span className="gold-accent">Standard.</span>
            </p>
          </div>
        </div>

        {/* Floating Specular Action Button styled like Discover Karrnik in About Us */}
        <div className="hero-contact-button-wrapper">
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
            href="/contact"
            onClick={(e) => {
              if (e && typeof e.preventDefault === 'function') e.preventDefault()
              if (onPageChange) onPageChange('contact')
            }}
          >
            Book Now &rarr;
          </SpecularButton>
        </div>
      </div>
    </section>
  )
}

