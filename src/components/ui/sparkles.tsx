"use client"
import { useEffect, useId, useState } from "react"

export function Sparkles({
  className,
  size = 1,
  minSize = null,
  density = 800,
  speed = 1,
  minSpeed = null,
  opacity = 1,
  opacitySpeed = 3,
  minOpacity = null,
  color = "#FFFFFF",
  background = "transparent",
  options = {},
}: {
  className?: string
  size?: number
  minSize?: number | null
  density?: number
  speed?: number
  minSpeed?: number | null
  opacity?: number
  opacitySpeed?: number
  minOpacity?: number | null
  color?: string
  background?: string
  options?: any
}) {
  const [isReady, setIsReady] = useState(false)
  const id = useId()

  useEffect(() => {
    // Simple particle effect without tsparticles dependency
    setIsReady(true)
  }, [])

  if (!isReady) return null

  return (
    <div
      id={id}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 70%)`,
        opacity: opacity * 0.3,
        animation: `sparkle ${speed}s ease-in-out infinite alternate`,
      }}
    />
  )
}
