import { useState, useRef, useEffect } from 'react'

const showcaseItems = [
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    image: '/images/work-ceramic-coating.png',
  },
  {
    id: 'ppf',
    title: 'Paint Protection Film (PPF)',
    image: '/images/work-ppf.png',
  },
  {
    id: 'alloy-tyre',
    title: 'Alloy & Tyre Upgrade',
    image: '/images/work-alloy-tyre.jpg',
  },
  {
    id: 'interior-detailing',
    title: 'Interior Detailing',
    image: '/images/work-interior-detailing.png',
  },
]

export function WorkShowcase() {
  const [stepIndex, setStepIndex] = useState(0)
  const stepIndexRef = useRef(stepIndex)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastScrollTime = useRef<number>(0)
  const touchStartY = useRef<number>(0)

  // Keep ref updated to avoid stale state in event listeners
  useEffect(() => {
    stepIndexRef.current = stepIndex
  }, [stepIndex])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleWheelNative = (e: WheelEvent) => {
      const rect = el.getBoundingClientRect()
      // Section is active if any part is visible in viewport
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (!isVisible) return

      const isScrollingDown = e.deltaY > 5
      const isScrollingUp = e.deltaY < -5

      if (isScrollingDown) {
        if (stepIndexRef.current < showcaseItems.length) {
          e.preventDefault()
          const targetY = window.pageYOffset + rect.top
          if (Math.abs(rect.top) > 2) {
            window.scrollTo({ top: targetY, behavior: 'auto' })
          }

          const now = Date.now()
          if (now - lastScrollTime.current > 380) {
            lastScrollTime.current = now
            setStepIndex((prev) => Math.min(prev + 1, showcaseItems.length))
          }
        }
      } else if (isScrollingUp) {
        if (stepIndexRef.current > 0) {
          e.preventDefault()
          const targetY = window.pageYOffset + rect.top
          if (Math.abs(rect.top) > 2) {
            window.scrollTo({ top: targetY, behavior: 'auto' })
          }

          const now = Date.now()
          if (now - lastScrollTime.current > 380) {
            lastScrollTime.current = now
            setStepIndex((prev) => Math.max(prev - 1, 0))
          }
        }
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const rect = el.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0
      if (!isVisible) return

      const deltaY = touchStartY.current - e.touches[0].clientY
      if (Math.abs(deltaY) > 15) {
        if (deltaY > 0 && stepIndexRef.current < showcaseItems.length) {
          e.preventDefault()
          const targetY = window.pageYOffset + rect.top
          if (Math.abs(rect.top) > 2) {
            window.scrollTo({ top: targetY, behavior: 'auto' })
          }
          const now = Date.now()
          if (now - lastScrollTime.current > 380) {
            lastScrollTime.current = now
            setStepIndex((prev) => Math.min(prev + 1, showcaseItems.length))
          }
        } else if (deltaY < 0 && stepIndexRef.current > 0) {
          e.preventDefault()
          const targetY = window.pageYOffset + rect.top
          if (Math.abs(rect.top) > 2) {
            window.scrollTo({ top: targetY, behavior: 'auto' })
          }
          const now = Date.now()
          if (now - lastScrollTime.current > 380) {
            lastScrollTime.current = now
            setStepIndex((prev) => Math.max(prev - 1, 0))
          }
        }
      }
    }

    el.addEventListener('wheel', handleWheelNative, { passive: false })
    el.addEventListener('touchstart', handleTouchStart, { passive: true })
    el.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      el.removeEventListener('wheel', handleWheelNative)
      el.removeEventListener('touchstart', handleTouchStart)
      el.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  const handleCardClick = () => {
    setStepIndex((prev) => (prev + 1) % (showcaseItems.length + 1))
  }

  return (
    <div className="work-showcase-container" ref={containerRef} id="our-work">
      <div
        className="work-showcase-single-card"
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        aria-label="Full screen work showcase gallery"
      >
        {/* Step 0: Full Screen Title Statement */}
        <div className={`work-card-content ${stepIndex === 0 ? 'active-step' : 'step-hidden-left'}`}>
          <div className="work-title-wrapper">
            <h3 className="work-card-title">
              WORK THAT
              <br />
              SPEAKS FOR ITSELF.
            </h3>
            <p className="work-scroll-hint">
              <span>Scroll down or tap to explore</span>
              <span className="scroll-hint-arrow">&darr;</span>
            </p>
          </div>
        </div>

        {/* Steps 1 to N: Images sliding and fading left */}
        {showcaseItems.map((item, idx) => {
          const itemStep = idx + 1
          let animClass = 'step-hidden-right'
          if (stepIndex === itemStep) {
            animClass = 'active-step'
          } else if (stepIndex > itemStep) {
            animClass = 'step-hidden-left'
          }

          return (
            <div key={item.id} className={`work-showcase-image-frame ${animClass}`}>
              <img
                src={item.image}
                alt={item.title}
                className="work-showcase-img"
              />
              <div className="work-showcase-overlay">
                <div className="work-item-details">
                  <h4 className="work-item-title">{item.title}</h4>
                </div>
              </div>
            </div>
          )
        })}

        {/* Floating Step Indicator Dots */}
        <div className="work-showcase-dots">
          {[0, 1, 2, 3, 4].map((dotIdx) => (
            <span
              key={dotIdx}
              className={`dot ${stepIndex === dotIdx ? 'active-pill' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                setStepIndex(dotIdx)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkShowcase
