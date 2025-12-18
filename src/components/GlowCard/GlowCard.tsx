'use client'

import { useRef, useState } from 'react'
import styles from './GlowCard.module.css'

type GlowCardProps = {
  children: React.ReactNode
  
  // Základní styling
  background?: string
  color?: string
  fontSize?: string | number
  fontWeight?: string | number
  padding?: string | number
  borderRadius?: string | number
  width?: string | number
  height?: string | number
  
  // Border
  borderColor?: string
  borderWidth?: number
  borderGlowColor?: string
  borderGlowIntensity?: number
  
  // Shadow
  boxShadow?: string
  
  // Glow efekt
  glowColor?: string
  glowIntensity?: number
  glowSize?: number
  glowBlur?: number
  glowEnabled?: boolean
  
  // Hover animace
  hoverScale?: number
  hoverRotate?: number
  hoverTranslateX?: number
  hoverTranslateY?: number
  hoverDuration?: number
  
  // Spotlight efekt
  spotlightEnabled?: boolean
  spotlightColor?: string
  spotlightSize?: number
  
  // Callbacks
  onHoverStart?: () => void
  onHoverEnd?: () => void
  onClick?: () => void
}

export function GlowCard({
  children,
  background = 'rgba(20, 20, 30, 0.6)',
  color = '#ffffff',
  fontSize = '1rem',
  fontWeight = 400,
  padding = 32,
  borderRadius = 16,
  width = '100%',
  height = 'auto',
  
  borderColor = 'rgba(255, 255, 255, 0.1)',
  borderWidth = 1,
  borderGlowColor,
  borderGlowIntensity = 1,
  
  boxShadow,
  
  glowColor = 'rgba(100, 200, 255, 0.4)',
  glowIntensity = 0.8,
  glowSize = 400,
  glowBlur = 80,
  glowEnabled = true,
  
  hoverScale = 1,
  hoverRotate = 0,
  hoverTranslateX = 0,
  hoverTranslateY = 0,
  hoverDuration = 0.4,
  
  spotlightEnabled = false,
  spotlightColor = 'rgba(255, 255, 255, 0.03)',
  spotlightSize = 300,
  
  onHoverStart,
  onHoverEnd,
  onClick,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, rawX: -1000, rawY: -1000 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const rawX = e.clientX - rect.left
    const rawY = e.clientY - rect.top
    const x = (rawX / rect.width) * 100
    const y = (rawY / rect.height) * 100
    setMousePos({ x, y, rawX, rawY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHoverStart?.()
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePos({ x: 50, y: 50, rawX: -1000, rawY: -1000 })
    onHoverEnd?.()
  }

  const formatValue = (value: string | number, unit = 'px') => 
    typeof value === 'number' ? `${value}${unit}` : value

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        '--bg': background,
        '--color': color,
        '--font-size': formatValue(fontSize),
        '--font-weight': fontWeight,
        '--padding': formatValue(padding),
        '--radius': formatValue(borderRadius),
        '--width': formatValue(width, ''),
        '--height': formatValue(height, ''),
        '--border-color': borderColor,
        '--border-width': `${borderWidth}px`,
        '--border-glow-color': borderGlowColor || glowColor,
        '--border-glow-intensity': borderGlowIntensity,
        '--glow-color': glowColor,
        '--glow-size': `${glowSize}px`,
        '--glow-blur': `${glowBlur}px`,
        '--glow-intensity': isHovered ? glowIntensity : 0,
        '--glow-x': `${mousePos.rawX}px`,
        '--glow-y': `${mousePos.rawY}px`,
        '--spotlight-color': spotlightColor,
        '--spotlight-size': `${spotlightSize}px`,
        '--hover-scale': hoverScale,
        '--hover-rotate': `${hoverRotate}deg`,
        '--hover-translate-x': `${hoverTranslateX}px`,
        '--hover-translate-y': `${hoverTranslateY}px`,
        '--hover-duration': `${hoverDuration}s`,
        ...(boxShadow && { boxShadow }),
      } as React.CSSProperties}
      data-hovered={isHovered}
      data-clickable={!!onClick}
    >
      {glowEnabled && (
        <div className={styles.glow} />
      )}
      
      <div className={styles.border} />
      
      <div className={styles.content}>
        {spotlightEnabled && (
          <div className={styles.spotlight} />
        )}
        <div className={styles.contentInner}>
          {children}
        </div>
      </div>
    </div>
  )
}