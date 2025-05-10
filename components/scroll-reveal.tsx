"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  className?: string
  once?: boolean
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.1 })

  // Simplified animation with reduced values
  let initial = {}
  if (direction === "up") initial = { opacity: 0, y: 20 }
  else if (direction === "down") initial = { opacity: 0, y: -20 }
  else if (direction === "left") initial = { opacity: 0, x: 20 }
  else if (direction === "right") initial = { opacity: 0, x: -20 }
  else initial = { opacity: 0 }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
