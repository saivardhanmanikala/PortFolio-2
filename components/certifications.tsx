"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const certifications = [
  {
    title: "Electronic Arts – Software Engineering Job Simulation",
    issuer: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_W6b7NQxvpx7wKWcRh_1746761442164_completion_certificate.pdf",
    icon: "https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1635988655150?e=1718236800&v=beta&t=FGvM5wpYrTbHUQzrUOJgFYnKSZC-QKsVjZpQDvNWl_c",
    color: "rgba(59, 130, 246, 0.4)", // blue
    date: "May 2025",
    credentialId: "dnHQ2qSacDcJuyAKN",
  },
  {
    title: "Skyscanner – Front-End Software Engineering",
    issuer: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_W6b7NQxvpx7wKWcRh_1746777010327_completion_certificate.pdf",
    icon: "https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1635988655150?e=1718236800&v=beta&t=FGvM5wpYrTbHUQzrUOJgFYnKSZC-QKsVjZpQDvNWl_c",
    color: "rgba(139, 92, 246, 0.4)", // purple
    date: "May 2025",
    credentialId: "iJ5PhBffGRiYaB3uv",
  },
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google",
    link: "https://www.credly.com/badges/cefcab10-00de-4ec2-8dba-40d67ee2706b/linked_in_profile",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    color: "rgba(59, 130, 246, 0.4)", // blue
  },
  {
    title: "Full Stack Development",
    issuer: "Infosys",
    link: "https://verify.onwingspan.com/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    color: "rgba(139, 92, 246, 0.4)", // purple
  },
  {
    title: "Journey to Cloud: Envisioning Your Solution",
    issuer: "IBM",
    link: "https://www.credly.com/badges/749f5653-3b56-4320-9f29-af3eb901d6b3/public_url",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    color: "rgba(99, 102, 241, 0.4)", // indigo
  },
  {
    title: "Getting Started with Enterprise Data Science",
    issuer: "IBM",
    link: "https://www.credly.com/badges/05b3274c-3872-4168-8dd2-1c2d985288c9/public_url",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    color: "rgba(99, 102, 241, 0.4)", // indigo
  },
  {
    title: "Ethical Hacking",
    issuer: "NPTEL",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS75S73170008320345005",
    icon: "https://upload.wikimedia.org/wikipedia/en/f/f4/NPTEL_logo.svg",
    color: "rgba(236, 72, 153, 0.4)", // pink
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS04S125170024530685654",
    icon: "https://upload.wikimedia.org/wikipedia/en/f/f4/NPTEL_logo.svg",
    color: "rgba(59, 130, 246, 0.4)", // blue
  },
  {
    title: "Social Networks",
    issuer: "NPTEL",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS56S115170018130685654",
    icon: "https://upload.wikimedia.org/wikipedia/en/f/f4/NPTEL_logo.svg",
    color: "rgba(139, 92, 246, 0.4)", // purple
  },
  {
    title: "Cognitive Certification",
    issuer: "TCS iON NQT",
    link: "https://drive.google.com/file/d/1gfk3nFup32Q_-kpgkJKuD4J_88eXl1Nw/view?usp=sharing",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    color: "rgba(99, 102, 241, 0.4)", // indigo
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="certifications" className="py-16 md:py-24 bg-muted/30">
      <div className="section-container" ref={ref}>
        <ScrollReveal>
          <h2 className="section-title">Certifications</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="section-subtitle">Professional certifications and courses I've completed</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <ScrollReveal
              key={cert.title}
              delay={0.2 + index * 0.05}
              direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
            >
              <Card className="h-full flex flex-col border border-primary/10 bg-card/50 backdrop-blur-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-white p-2 flex items-center justify-center">
                      <img
                        src={cert.icon || "/placeholder.svg"}
                        alt={`${cert.issuer} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">Issued by {cert.issuer}</p>
                      {cert.date && <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>}
                      {cert.credentialId && (
                        <p className="text-xs text-muted-foreground mt-1">Credential ID: {cert.credentialId}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow"></CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
