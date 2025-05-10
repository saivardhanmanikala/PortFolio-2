import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Internships from "@/components/internships"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internships />
      <Certifications />
      <Contact />
    </main>
  )
}
