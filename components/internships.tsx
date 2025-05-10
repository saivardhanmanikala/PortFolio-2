"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import GradientBorder from "./gradient-border"
import ScrollReveal from "./scroll-reveal"

const internships = [
  {
    company: "IBM",
    position: "AI & Cloud Computing Intern",
    period: "Feb 2024 - Mar 2024",
    project: "COVID-19 Prediction Model",
    description:
      "Developed an AI model to predict COVID-19 cases using machine learning algorithms and cloud computing.",
    technologies: ["Python", "IBM Cloud", "Flask", "Machine Learning"],
    skills: ["AI Model Development", "Cloud Deployment", "API Integration"],
    color: "rgba(59, 130, 246, 0.4)", // blue
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    company: "VaultOfCodes (Google)",
    position: "AI & Prompt Engineering Intern",
    period: "Mar 2024 - Apr 2024",
    project: "AI-Powered Text Generation & Optimization",
    description: "Worked on enhancing AI prompt responses using Google Vertex AI to improve user interactions.",
    technologies: ["Python", "NLP", "Google Vertex AI", "Prompt Engineering"],
    skills: ["AI Prompt Engineering", "NLP Optimization", "API Integration"],
    color: "rgba(139, 92, 246, 0.4)", // purple
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    company: "Spypro Security Solutions",
    position: "Machine Learning Intern",
    period: "May 2023 - Jul 2023",
    project: "Titanic Survival Prediction (ML Model Deployment)",
    description: "Built and optimized a machine learning model to predict Titanic passengers' survival chances.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Flask"],
    skills: ["Data Preprocessing", "Model Evaluation", "Deployment Strategies"],
    color: "rgba(99, 102, 241, 0.4)", // indigo
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
  },
]

export default function Internships() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="internships" className="py-16 md:py-24">
      <div className="section-container" ref={ref}>
        <ScrollReveal>
          <h2 className="section-title">Internship Experience</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="section-subtitle">Professional experience and projects I've worked on</p>
        </ScrollReveal>

        <div className="space-y-8 mt-12">
          {internships.map((internship, index) => (
            <ScrollReveal
              key={`${internship.company}-${internship.position}`}
              delay={0.2 + index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}>
                <GradientBorder
                  animate={true}
                  borderWidth={2}
                  gradientColors={[
                    internship.color.replace("0.4", "0.6"),
                    internship.color.replace("0.4", "0.8"),
                    internship.color.replace("0.4", "0.6"),
                  ]}
                >
                  <Card className="border-0 bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-md overflow-hidden bg-white flex items-center justify-center p-1">
                            <img
                              src={internship.logo || "/placeholder.svg"}
                              alt={`${internship.company} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-xl">
                              {internship.position} at {internship.company}
                            </CardTitle>
                            <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{internship.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Project: {internship.project}</h4>
                          <p className="text-muted-foreground">{internship.description}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {internship.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="border-primary/20 hover:bg-primary/10 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Skills Learned</h4>
                          <div className="flex flex-wrap gap-2">
                            {internship.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="hover:bg-primary/10 transition-colors">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </GradientBorder>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
