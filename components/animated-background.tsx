"use client"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function AnimatedBackground() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: isDark
            ? "radial-gradient(circle at 50% 50%, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0) 50%)"
            : "radial-gradient(circle at 50% 50%, rgba(224, 242, 254, 0.5) 0%, rgba(255, 255, 255, 0) 50%)",
        }}
      />

      {/* Just two simple animated blobs instead of many */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)"
            : "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)"
            : "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Subtle grid pattern - static, no animation */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? "#fff" : "#000"} 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  )
}
