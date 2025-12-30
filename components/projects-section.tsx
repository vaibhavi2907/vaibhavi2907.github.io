"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [

  {
    title: "Developer Portfolio",
    description:
      "A modern, dark-themed developer portfolio built with Next.js and TypeScript, featuring fluid animations, responsive layouts, and a clean, component-driven architecture designed to reflect senior-level engineering expertise.",
    image: "/data-analytics-dashboard-with-charts-dark-theme.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    role: "Frontend Engineer",
    link: "#",
    github: "https://github.com/vaibhavi2907",
  },
  {
    title: "Genshin Impact Companion App",
    description:
      "A feature-rich Android companion application for Genshin Impact that provides information on past, ongoing, and upcoming events, detailed character insights, and an interactive wish simulator. The app also includes OCR-based image text extraction, voice-enabled search, and an integrated music player. Built using a multi-activity architecture with a strong focus on modularity, performance, and user experience.",
    image: "/ecommerce-ai-recommendation-system-dark-theme.jpg",
    tech: ["Android", "Java", "Kotlin", "SQLite", "ML Kit"],
    role: "Android Developer",
    link: "#",
     github: "https://github.com/vaibhavi2907"
  }
  
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className={`max-w-3xl mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-primary font-medium text-sm tracking-wide uppercase">Selected Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Projects that made an impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A selection of projects I've architected and led, each solving real-world problems at scale and
            demonstrating different aspects of my technical expertise.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-secondary text-secondary-foreground rounded-full hover:scale-110 transition-transform"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.role}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
