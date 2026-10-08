import { useEffect, useRef, useState } from 'react'
import lottie from 'lottie-web'
import animationData from '../assets/splash-animation.json'

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
      const validData = (animationData as any)?.default || animationData
      const hasLayers = validData && Array.isArray(validData.layers)

      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: hasLayers ? validData : undefined,
        path: !hasLayers ? '/splash-animation.json' : undefined,
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

      <div className="splash-brand-logo">
        <span className="splash-brand-text">KARNIK</span>
        <span className="splash-brand-sub">PREMIUM AUTOMOTIVE CARE</span>
      </div>
    </div>
  )
}

export default SplashScreen
