"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FloatAnimationProps {
  children: ReactNode
  duration?: number
  delay?: number
  className?: string
  amplitude?: number
}

export default function FloatAnimation({
  children,
  duration = 4,
  delay = 0,
  className = "",
  amplitude = 10,
}: FloatAnimationProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [`-${amplitude}px`, `${amplitude}px`, `-${amplitude}px`],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
