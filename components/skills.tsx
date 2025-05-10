"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cloud, Wrench, Server } from "lucide-react"
import GradientBorder from "./gradient-border"
import ScrollReveal from "./scroll-reveal"

// Define skill levels
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

interface Skill {
  name: string
  level: SkillLevel
}

const skillCategories = [
  {
    title: "Front-End",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "HTML", level: "Expert" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "React.js", level: "Intermediate" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "Tailwind CSS", level: "Intermediate" },
    ] as Skill[],
    color: "rgba(59, 130, 246, 0.4)", // blue
  },
  {
    title: "Back-End",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "Python", level: "Expert" },
      { name: "C", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
    ] as Skill[],
    color: "rgba(139, 92, 246, 0.4)", // purple
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      { name: "AWS", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Ansible", level: "Beginner" },
      { name: "IBM Cloud", level: "Advanced" },
    ] as Skill[],
    color: "rgba(99, 102, 241, 0.4)", // indigo
  },
  {
    title: "Tools & Workflow",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "Agile & Scrum", level: "Intermediate" },
      { name: "Cyber Security", level: "Intermediate" },
      { name: "Machine Learning", level: "Advanced" },
    ] as Skill[],
    color: "rgba(236, 72, 153, 0.4)", // pink
  },
]

// Helper function to get dots based on skill level
const getSkillDots = (level: SkillLevel) => {
  const dots = {
    Beginner: 1,
    Intermediate: 2,
    Advanced: 3,
    Expert: 4,
  }
  return dots[level] || 0
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      <div className="section-container" ref={ref}>
        <ScrollReveal>
          <h2 className="section-title">My Skills</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="section-subtitle">Technologies and tools I've worked with</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.title} delay={0.2 + categoryIndex * 0.1}>
              <GradientBorder animate={false} borderWidth={2}>
                <Card className="h-full border-0 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-md bg-primary/10 text-primary">{category.icon}</div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}</span>
                          </div>
                          <div className="h-2 rounded-full bg-secondary overflow-hidden">
                            <div className="flex gap-1 px-1 items-center h-full">
                              {Array.from({ length: 4 }).map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-1 rounded-full flex-1 ${
                                    i < getSkillDots(skill.level) ? "bg-gradient-to-r" : "bg-secondary-foreground/10"
                                  }`}
                                  style={{
                                    backgroundImage:
                                      i < getSkillDots(skill.level)
                                        ? `linear-gradient(90deg, ${category.color}, ${category.color.replace(
                                            "0.4",
                                            "0.7",
                                          )})`
                                        : undefined,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </GradientBorder>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6} direction="up" className="mt-16 grid place-items-center">
          <div className="inline-flex flex-wrap justify-center gap-3 max-w-3xl">
            {[...new Set(skillCategories.flatMap((category) => category.skills.map((skill) => skill.name)))].map(
              (skill, index) => (
                <div
                  key={skill}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </div>
              ),
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
