"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import GradientBorder from "./gradient-border"
import ScrollReveal from "./scroll-reveal"

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Developed a fully responsive and visually engaging portfolio website to showcase personal skills, academic background, certifications, and technical projects. The goal of the project was to create a professional online presence that aligns with modern web standards and can impress recruiters and potential employers.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    githubLink: "https://github.com/saivardhanmanikala/portfolio",
    demoLink: "https://portfolio-9hyh.onrender.com",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
    color: "rgba(59, 130, 246, 0.4)", // blue
  },
  {
    title: "Medical Health Insurance Cost Estimator",
    description:
      "A machine learning model using XGBoost to predict insurance premiums based on factors like age, BMI, smoking habits, and region. Helps insurance companies and individuals get accurate premium estimates with 96% accuracy.",
    technologies: ["Python", "Flask", "XGBoost", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/saivardhanmanikala/Medical_Insurance.git",
    demoLink: "https://v0-medical-insurance-ui-4vwjyq.vercel.app/",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    color: "rgba(139, 92, 246, 0.4)", // purple
  },
  {
    title: "Titanic Survival Prediction",
    description:
      "A machine learning-based prediction system analyzing survival chances based on factors like passenger class, age, and gender.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    githubLink: "#",
    demoLink: null,
    image: "https://images.unsplash.com/photo-1599493758267-c6c884c7071f?q=80&w=2069&auto=format&fit=crop",
    color: "rgba(99, 102, 241, 0.4)", // indigo
  },
  {
    title: "Fake News Detection",
    description: "A data science model that classifies news articles as real or fake using NLP and ML algorithms.",
    technologies: ["Python", "Scikit-learn", "NLP", "Flask"],
    githubLink: "#",
    demoLink: null,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    color: "rgba(236, 72, 153, 0.4)", // pink
  },
  {
    title: "E-Commerce Website",
    description:
      "An e-commerce website for SS Kirana and General Stores, allowing customers to browse and purchase groceries online. Features product categorization, images, price tags, and quantity adjustment for a seamless shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "SQL"],
    githubLink: "#",
    demoLink: null,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    color: "rgba(59, 130, 246, 0.4)", // blue
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="section-container" ref={ref}>
        <ScrollReveal>
          <h2 className="section-title">My Projects</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="section-subtitle">Showcasing my technical skills and problem-solving abilities</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={0.2 + index * 0.1}>
              <GradientBorder animate={false} borderWidth={2}>
                <Card className="h-full flex flex-col overflow-hidden group border-0 backdrop-blur-sm">
                  <div className="relative overflow-hidden h-48">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay with project title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <h3 className="text-white text-lg font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    {project.demoLink && (
                      <Button asChild size="sm">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </GradientBorder>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
