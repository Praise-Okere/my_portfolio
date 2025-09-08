import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Facebook, Mail, ExternalLink, Code, Smartphone, Coins } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const projects = [
    {
      title: "clinic dashboard management",
      description: "The dashboard provides healthcare professionals with a centralized view of critical patient information.",
      github: "https://github.com/Praise-Okere/medical-dashboard",
      demo: "https://medical-dashboard.pxxl.click/"
    },
    {
      title: "NFT Marketplace",
      description: "Full-stack NFT marketplace with minting, buying, and selling capabilities",
      tech: ["Next.js", "Ethereum", "IPFS", "MetaMask"],
      github: "#",
      demo: "#"
    },
    {
      title: "My Portfolio Website",
      description: " My personal portfolio website showcasing my projects, skills, and experiences, designed to highlight my work and provide an easy way to connect with me.",
      tech: ["Nextjs", "TypeScript", "Tailwind CSS"],
      github: "",
      demo: "#"
    }
  ]

  const skills = [
    { name: "JavaScript", level: "Expert" },
    { name: "React", level: "Expert" },
    { name: "Next.js", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Solidity", level: "Intermediate" },
    { name: "Sui Move", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Git", level: "Advanced" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">Praise Okere</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6">
              <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
                Projects
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
                Skills
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Link href="https://github.com/Praise-Okere" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://x.com/P_Tech_" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Praise Okere
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Frontend Developer & Smart Contract Engineer passionate about building decentralized applications and beautiful user experiences.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/praise.jpg"
                width={400}
                height={400}
                alt="Praise Okere"
                className="rounded-full border-4 border-primary/20"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full p-3">
                <Code className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-24 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
          <p className="text-muted-foreground md:text-lg">
            I'm a passionate developer with expertise in both frontend development and blockchain technology. 
            With over 3 years of experience, I specialize in creating intuitive user interfaces and robust smart contracts 
            that power the next generation of decentralized applications.
          </p>
          <p className="text-muted-foreground md:text-lg">
            My journey began with traditional web development, but I quickly became fascinated by the potential of 
            blockchain technology. Today, I bridge the gap between complex smart contract functionality and 
            user-friendly interfaces, making DeFi and Web3 accessible to everyone.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <div className="text-center">
              <Smartphone className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-semibold">Frontend</p>
              <p className="text-sm text-muted-foreground">React, Next.js, TypeScript</p>
            </div>
            <div className="text-center">
              <Coins className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-semibold">Blockchain</p>
              <p className="text-sm text-muted-foreground">Sui Move, Solidity, DeFi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container px-4 py-24">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development and smart contract engineering.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container px-4 py-24 bg-muted/50">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Programming Languages & Skills</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.name}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <Badge variant={skill.level === 'Expert' ? 'default' : skill.level === 'Advanced' ? 'secondary' : 'outline'}>
                    {skill.level}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let's Work Together</h2>
          <p className="text-muted-foreground md:text-lg">
            I'm always interested in new opportunities and exciting projects. 
            Whether you need a frontend developer or smart contract engineer, let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" asChild>
              <Link href="mailto:praise.okere@example.com">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Link>
            </Button>
            <div className="flex gap-2 justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/Praise-Okere" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with ❤️ by Praise Okere. © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="https://github.com/Praise-Okere" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://x.com/P_Tech_" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
