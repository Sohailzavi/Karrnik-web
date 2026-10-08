import { useState, useEffect, useRef } from 'react'

const showcaseItems = [
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    image: '/work-ceramic-coating.png',
  },
  {
    id: 'ppf',
    title: 'Paint Protection Film (PPF)',
    image: '/work-ppf.png',
  },
  {
    id: 'alloy-tyre',
    title: 'Alloy & Tyre Upgrade',
    image: '/work-alloy-tyre.jpg',
  },
  {
    id: 'interior-detailing',
    title: 'Interior Detailing',
    image: '/work-interior-detailing.png',
  },
]

export function WorkShowcase() {
  // stepIndex: 0 = "WORK THAT SPEAKS FOR ITSELF" text card, 1..4 = showcase images
  const [stepIndex, setStepIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const advanceStep = (targetStep?: number) => {
    if (isFading) return
    setIsFading(true)
    setTimeout(() => {
      setStepIndex((prev) => {
        if (targetStep !== undefined) return targetStep
        return (prev + 1) % (showcaseItems.length + 1)
      })
      setIsFading(false)
    }, 250)
  }

  // Auto-play interval (3.2 seconds)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      advanceStep()
    }, 3200)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [stepIndex, isFading])

  const handleCardClick = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    advanceStep()
  }

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation()
    if (timerRef.current) clearInterval(timerRef.current)
    advanceStep(index)
  }

  const activeItem = stepIndex > 0 ? showcaseItems[stepIndex - 1] : null

  return (
    <div className="work-showcase-container">
      <div
        className="work-showcase-single-card"
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        aria-label="Work showcase gallery"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleCardClick()
          }
        }}
      >
        {stepIndex === 0 ? (
          <div className={`work-card-content ${isFading ? 'fading-out-left' : 'fade-in-left'}`}>
            <h3 className="work-card-title">
              WORK THAT
              <br />
              SPEAKS FOR ITSELF.
            </h3>
          </div>
        ) : (
          <div className="work-showcase-image-frame">
            <img
              key={activeItem?.id}
              src={activeItem?.image}
              alt={activeItem?.title}
              className={`work-showcase-img ${isFading ? 'fading-out-left' : 'fade-in-left'}`}
            />
          </div>
        )}

        {/* Indicator dots */}
        <div className="work-showcase-dots">
          <button
            type="button"
            className={`showcase-dot ${stepIndex === 0 ? 'active' : ''}`}
            onClick={(e) => handleDotClick(e, 0)}
            aria-label="Title slide"
          />
          {showcaseItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`showcase-dot ${stepIndex === idx + 1 ? 'active' : ''}`}
              onClick={(e) => handleDotClick(e, idx + 1)}
              aria-label={`View ${item.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkShowcase
