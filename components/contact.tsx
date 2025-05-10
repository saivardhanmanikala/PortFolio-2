"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"
import GradientBorder from "./gradient-border"
import TiltCard from "./tilt-card"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have a question or want to work together? Feel free to contact me!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TiltCard glowColor="rgba(99, 102, 241, 0.4)" scale={1.02}>
              <Card className="h-full border border-primary/10 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div className="flex items-start gap-4" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a
                        href="mailto:sai.vardan@example.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        saivardhanmanikala@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start gap-4" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">India</p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start gap-4" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+91-7780196021</p>
                    </div>
                  </motion.div>

                  <div className="pt-4">
                    <h3 className="font-medium mb-3">Social Profiles</h3>
                    <div className="flex gap-3">
                      <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                        <Button
                          asChild
                          variant="outline"
                          size="icon"
                          className="border-primary/20 hover:bg-primary/10 transition-all duration-200"
                        >
                          <a href="https://github.com/saivardhanmanikala" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                        <Button
                          asChild
                          variant="outline"
                          size="icon"
                          className="border-primary/20 hover:bg-primary/10 transition-all duration-200"
                        >
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GradientBorder animate={true} borderWidth={2}>
              <Card className="h-full border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                        <Mail className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                      <Button
                        className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="border-primary/20 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                          className="border-primary/20 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Your message"
                          rows={5}
                          required
                          className="border-primary/20 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-blue-500/20 transition-all duration-200"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </GradientBorder>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
