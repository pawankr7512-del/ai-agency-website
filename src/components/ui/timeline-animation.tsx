"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface TimelineContentProps {
  children: React.ReactNode
  animationNum?: number
  timelineRef?: React.RefObject<HTMLDivElement> | null
  customVariants?: any
  as?: React.ElementType
  className?: string
}

export function TimelineContent({
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  as: Component = "div",
  className,
}: TimelineContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef || ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])

  return (
    <Component
      ref={ref}
      className={className}
      style={{ opacity, y }}
    >
      {children}
    </Component>
  )
}
