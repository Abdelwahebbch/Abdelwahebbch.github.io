import Image from "next/image"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import SkillBar from "@/components/skill-bar"
import ProjectCard from "@/components/project-card"
import CertificationCard from "@/components/certification-card"

export default function Home() {
  // Certificate image - now using the actual certificate image
  const certificateImageUrl =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_certificate_bouchahwaabdelwaheb-gmail-com_d383b800-b898-4ec3-8dd6-35ef52569f04_page-0001.jpg-ucCNiH8PRkxgWeH07dl45fhfnZ01nD.jpeg"

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background -z-10" />
        <div className="container max-w-4xl flex flex-col items-center gap-6">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/107766876-LijCorsMyi6fNCqjzjXfM4jqZkJiSE.png"
              alt="Abdelwaheb Bouchahwa"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Abdelwaheb Bouchahwa</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">Computer Science Student & Developer</p>
          <div className="flex gap-4 mt-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/Abdelwahebbch" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/abdelwaheb-bouchahwa-8449a5224/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:bouchahwaabdelwaheb@fsg.u-gabes.tn">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p>
              I'm a second-year computer science student passionate about software development and problem-solving. With
              a strong foundation in various programming languages and technologies, I'm constantly expanding my
              knowledge and skills in the field of computer science.
            </p>
            <p>
              My goal is to leverage my technical skills to create innovative solutions and contribute to meaningful
              projects. I enjoy tackling complex problems and learning new technologies to enhance my development
              capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SkillBar name="HTML/CSS" proficiency={90} />
            <SkillBar name="JavaScript" proficiency={75} />
            <SkillBar name="Java" proficiency={85} />
            <SkillBar name="C/C++" proficiency={80} />
            <SkillBar name="Python" proficiency={70} />
            <SkillBar name="MySQL" proficiency={70} />
            <SkillBar name="PHP" proficiency={65} />
            <SkillBar name="Assembly" proficiency={50} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Pharmacy Management System"
              description="A comprehensive system for managing pharmacy operations, inventory, and sales."
              tags={["Java", "JavaFX", "MySQL", "CSS"]}
              githubUrl="https://github.com/Abdelwahebbch/Pharmacy-App.git"
            />
            <ProjectCard
              title="E-karya App"
              description="A mobile application designed to simplify the process of finding, renting, and managing residential properties for both tenants and landlords. It serves as a bridge between affordable housing seekers and property owners by offering a transparent and user-friendly platform. While primarily focused on long-term rentals, the app also accommodates short-term stays."
              tags={["Java", "JavaFX", "MySQL", "CSS"]}
              githubUrl="https://github.com/Abdelwahebbch/E-karya-App.git"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 gap-6">
            <CertificationCard
              title="CCNA : Présentation des réseaux"
              issuer="Faculty of Sciences of Gabes - Cisco Networking Academy"
              date="29 Janvier 2025"
              instructor="Haifa Touati"
              imageUrl={certificateImageUrl}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid gap-6 max-w-md mx-auto">
            <a
              href="mailto:bouchahwaabdelwaheb@fsg.u-gabes.tn"
              className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm break-all">bouchahwaabdelwaheb@fsg.u-gabes.tn</span>
            </a>
            <a
              href="mailto:bouchahwaabdelwaheb@ieee.org"
              className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm break-all">bouchahwaabdelwaheb@ieee.org</span>
            </a>
            <a
              href="https://github.com/Abdelwahebbch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted transition-colors"
            >
              <Github className="h-5 w-5 text-primary" />
              <span className="text-sm">github.com/Abdelwahebbch</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abdelwaheb-bouchahwa-8449a5224/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted transition-colors"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <span className="text-sm">linkedin.com/in/abdelwaheb-bouchahwa-8449a5224</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Abdelwaheb Bouchahwa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

