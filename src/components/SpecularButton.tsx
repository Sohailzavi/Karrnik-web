import React, { useState, useEffect, useRef } from 'react'

export interface SpecularButtonProps {
  size?: 'sm' | 'md' | 'lg' | string
  radius?: number
  tint?: string
  tintOpacity?: number
  blur?: number
  textColor?: string
  lineColor?: string
  baseColor?: string
  intensity?: number
  shineSize?: number
  shineFade?: number
  thickness?: number
  speed?: number
  followMouse?: boolean
  proximity?: number
  autoAnimate?: boolean
  onClick?: (e: React.MouseEvent<any>) => void
  children?: React.ReactNode
  className?: string
  href?: string
}

export function SpecularButton({
  radius = 18,
  tint = 'transparent',
  tintOpacity = 0,
  blur = 0,
  textColor = '#f5f5f5',
  lineColor = '#dda91e',
  baseColor = 'transparent',
  intensity = 1,
  shineSize = 28,
  shineFade = 24,
  thickness = 3.2,
  speed = 0.2,
  followMouse = true,
  proximity = 360,
  autoAnimate = true,
  onClick,
  children,
  className = '',
  href,
}: SpecularButtonProps) {
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  const [mousePos, setMousePos] = useState<{ x: number; y: number; active: boolean }>({
    x: 50,
    y: 50,
    active: false,
  })
  const [autoAngle, setAutoAngle] = useState(0)

  useEffect(() => {
    let animFrame: number
    if (autoAnimate) {
      const animate = () => {
        setAutoAngle((prev) => (prev + speed * 2.5) % 360)
        animFrame = requestAnimationFrame(animate)
      }
      animFrame = requestAnimationFrame(animate)
    }
    return () => cancelAnimationFrame(animFrame)
  }, [autoAnimate, speed])

  useEffect(() => {
    if (!followMouse) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return
      const rect = buttonRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY)

      if (dist <= proximity) {
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePos({ x, y, active: true })
      } else {
        setMousePos((prev) => ({ ...prev, active: false }))
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [followMouse, proximity])

  const currentX = mousePos.active ? mousePos.x : 50 + Math.cos((autoAngle * Math.PI) / 180) * 45
  const currentY = mousePos.active ? mousePos.y : 50 + Math.sin((autoAngle * Math.PI) / 180) * 45

  const Component = href ? 'a' : 'button'

  return (
    <Component
      ref={buttonRef}
      href={href}
      onClick={onClick}
      className={`specular-button ${className}`}
      style={{
        '--radius': `${radius}px`,
        '--text-color': textColor,
        '--line-color': lineColor,
        '--base-color': baseColor,
        '--thickness': `${thickness}px`,
        '--shine-x': `${currentX}%`,
        '--shine-y': `${currentY}%`,
        '--shine-size': `${shineSize}px`,
        '--shine-fade': `${shineFade}px`,
        '--intensity': intensity,
        '--tint': tint,
        '--tint-opacity': tintOpacity,
        '--blur': `${blur}px`,
      } as React.CSSProperties}
    >
      <span className="specular-button-border" aria-hidden="true" />
      <span className="specular-button-bg" aria-hidden="true" />
      <span className="specular-button-shine" aria-hidden="true" />
      <span className="specular-button-content">{children}</span>
    </Component>
  )
}

export default SpecularButton
