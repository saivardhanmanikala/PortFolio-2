"use client"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

// Simplified version without tilt effect to improve performance
export default function TiltCard({ children, className, glowColor = "rgba(var(--primary), 0.4)" }: TiltCardProps) {
  return (
    <div className={cn("relative overflow-hidden transition-all duration-200 hover:shadow-lg", className)}>
      {children}
    </div>
  )
}
