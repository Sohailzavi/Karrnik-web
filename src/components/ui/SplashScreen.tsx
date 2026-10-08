import { useEffect, useRef, useState } from 'react'
import lottie from 'lottie-web'

interface SplashScreenProps {
  onComplete?: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    let anim: any = null

    try {
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/splash-animation.json',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
          progressiveLoad: false,
        },
      })
    } catch (err) {
      console.warn('Lottie splash player warning:', err)
    }

    const timer = setTimeout(() => {
      setIsFading(true)
      setTimeout(() => {
        setIsVisible(false)
        if (onComplete) onComplete()
      }, 700)
    }, 2800)

    return () => {
      if (anim && typeof anim.destroy === 'function') {
        try {
          anim.destroy()
        } catch (_) {}
      }
      clearTimeout(timer)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className={`splash-screen-overlay ${isFading ? 'splash-fade-out' : ''}`}>
      <div className="splash-stage">
        <div className="splash-car-motion">
          <div className="splash-lottie-wrapper">
            <div ref={containerRef} className="splash-lottie-container" />
          </div>
        </div>
      </div>

      <div className="splash-brand-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/images/logo.png" alt="Karrnik Logo" width="48" height="48" style={{ objectFit: 'contain' }} />
          <span className="splash-brand-text">KARRNIK</span>
        </div>
        <span className="splash-brand-sub">PREMIUM AUTOMOTIVE CARE</span>
      </div>
    </div>
  )
}

export default SplashScreen
