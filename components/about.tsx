"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const timelineItems = [
  {
    year: "2021 - 2025",
    title: "B.Tech in Computer Science and Engineering",
    description: "Bapatla Engineering College | CGPA: 8.5",
    icon: <GraduationCap className="h-5 w-5" />,
    color: "hsl(217, 91%, 60%)",
  },
  {
    year: "Feb 2024 - Mar 2024",
    title: "AI & Cloud Computing Intern",
    description: "EdunetFundation (IBM)",
    icon: <Briefcase className="h-5 w-5" />,
    color: "hsl(262, 80%, 60%)",
  },
  {
    year: "Mar 2024 - Apr 2024",
    title: "AI & Prompt Engineering Intern",
    description: "VaultOfCodes (Google)",
    icon: <Briefcase className="h-5 w-5" />,
    color: "hsl(335, 78%, 60%)",
  },
  {
    year: "May 2023 - Jul 2023",
    title: "Machine Learning Intern",
    description: "Spypro Security Solutions",
    icon: <Briefcase className="h-5 w-5" />,
    color: "hsl(156, 72%, 45%)",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="section-container" ref={ref}>
        <ScrollReveal>
          <h2 className="section-title">About Me</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="section-subtitle">My journey, experience, and aspirations in the tech world</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <ScrollReveal delay={0.2}>
            <Card className="h-full border bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  My Story
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a Computer Science and Engineering graduate (2025) from Bapatla Engineering College with a solid foundation in Software Development, Full Stack Development, and Machine Learning. Experienced in applying technical skills through hands-on internships at IBM, Google (VaultOfCodes), and Spypro Security Solutions.
                  </p>
                  <p>
                    Skilled in Java, Python, HTML, CSS, JavaScript, SQL, AWS, Docker, and DevOps tools. Worked on industry-relevant projects involving Artificial Intelligence, Cloud Computing, and Data Science.
                  </p>
                  <p>
                   Highly motivated to build scalable and efficient applications. Seeking entry-level opportunities in Software Development, Full Stack Development, or DevOps to contribute to impactful technology-driven solutions.


                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"></div>
            <div className="space-y-8 relative">
              {timelineItems.map((item, index) => (
                <ScrollReveal key={index} className="relative pl-10" delay={0.3 + index * 0.1}>
                  <div
                    className="absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: `${item.color}22`,
                      border: `2px solid ${item.color}`,
                      boxShadow: `0 0 10px ${item.color}44`,
                    }}
                  >
                    <div className="text-primary">{item.icon}</div>
                  </div>
                  <div className="text-sm mb-1 font-medium" style={{ color: item.color }}>
                    {item.year}
                  </div>
                  <h4 className="text-base font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
