"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GradientBorderProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  borderWidth?: number
  gradientColors?: string[]
  animate?: boolean
}

export default function GradientBorder({
  children,
  className,
  containerClassName,
  borderWidth = 1,
  gradientColors = ["#3b82f6", "#8b5cf6", "#6366f1"],
  animate = false,
}: GradientBorderProps) {
  return (
    <div className={cn("relative rounded-lg p-[1px] overflow-hidden group", containerClassName)}>
      <div
        className={cn("absolute inset-0 rounded-lg", animate && "animate-gradient-xy")}
        style={{
          background: `linear-gradient(90deg, ${gradientColors.join(", ")})`,
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
      />
      <div
        className={cn("relative rounded-lg bg-background z-10", className)}
        style={{
          padding: borderWidth,
        }}
      >
        {children}
      </div>
    </div>
  )
}
