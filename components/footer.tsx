"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
            <Link
              href="#home"
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-colors"
            >
              Sai Vardan Manikala
            </Link>
          </motion.div>
          <p className="mt-4 text-center text-muted-foreground">
            Tech Enthusiast | Software Developer
          </p>
          <div className="mt-6 flex space-x-6">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            © {currentYear} Sai Vardan Manikala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
