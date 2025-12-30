"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className={`space-y-4 ${mounted ? "animate-fade-up" : "opacity-0"}`}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Available for consulting
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1] ${mounted ? "animate-fade-up animation-delay-100" : "opacity-0"}`}
            >
              <span className="text-balance">Building the future,</span>
              <br />
              <span className="text-primary">one system at a time.</span>
            </h1>

            <p
              className={`text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed ${mounted ? "animate-fade-up animation-delay-200" : "opacity-0"}`}
            >
              Senior Diploma Student with <span className="text-foreground font-medium">3+ years</span> of experience
              designing Android Applications and Websites and delivering high-impact solutions.
            </p>

            <div className={`flex flex-wrap gap-4 ${mounted ? "animate-fade-up animation-delay-300" : "opacity-0"}`}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 group"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-border hover:bg-secondary bg-transparent"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div
              className={`flex items-center gap-6 pt-4 ${mounted ? "animate-fade-up animation-delay-400" : "opacity-0"}`}
            >
              <a
                href="https://github.com/vaibhavi2907/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/vaibhavi-lawhale/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Right content - Portrait */}
          <div className={`relative ${mounted ? "animate-fade-in animation-delay-300" : "opacity-0"}`}>
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform rotate-6" />

              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-card animate-glow-pulse">
                <Image
                  src="/vaibhavi.jpg"
                  alt="Vaibhavi Lawhale - Software Engineer"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating stats cards */}
              <div className="absolute -left-4 top-1/4 bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
