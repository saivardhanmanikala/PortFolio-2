"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.span
                className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Computer Science Engineering Graduate
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Sai Vardan Manikala
                </span>
              </h1>
            </motion.div>
            <motion.h2
              className="text-xl md:text-2xl text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Software Developer | Full Stack Engineer | Recent Graduate
            </motion.h2>
            <motion.p
              className="text-lg mb-8 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              A passionate Computer Science graduate with expertise in Full Stack Development, Machine Learning, DevOps,
              and Cyber Security. Skilled in Java, Python and web technologies.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-blue-500/20 transition-all duration-200"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 hover:bg-primary/10 transition-all duration-200"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 transition-all duration-200">
                <a
                  href="https://github.com/saivardhanmanikala"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 transition-all duration-200">
                <a
                  href="https://www.linkedin.com/in/saivardanmanikala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Simplified glow effect */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur-sm"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 bg-card">
                <img
                  src="https://i.ibb.co/rGT6dvyz/sai-2.jpg"
                  alt="Sai Vardan Manikala"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-200"
            aria-label="Scroll down"
          >
            <a href="#about">
              <ArrowDown className="h-6 w-6" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
