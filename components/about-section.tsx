"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, Cloud, Users, Lightbulb, Rocket } from "lucide-react"

const skills = [
  { icon: Code2, label: "Full-Stack Development", description: "React, Node.js, TypeScript" },
  { icon: Database, label: "Application Development", description: "Building scalable, high-performance applications with clean architecture and polished user experiences." },
  { icon: Cloud, label: "Cloud Architecture", description: "AWS, GCP, Terraform" },
  { icon: Users, label: "Technical Leadership", description: "Team building, mentorship" },
  { icon: Lightbulb, label: "Problem Solving", description: "Complex algorithms, optimization" },
  { icon: Rocket, label: "DevOps & CI/CD", description: "Docker, GitHub Actions, monitoring" },
]

const timeline = [
  { year: "2024", role: "Diploma Student", company: "Government Polytechnic, Hendaj, Murtizapur", description: "Ongoing [Percentage: 78.75]" },
  { year: "2023", role: "Student", company: "SSC Board", description: "Passed 10th grade with 90%." },
  
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/5 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`max-w-3xl mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-primary font-medium text-sm tracking-wide uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Crafting elegant solutions to complex problems
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 3 years in software engineering, I've built everything from Applications to Full Stack Website
            platforms. My passion lies in designing systems that are not just functional, but
            maintainable and a joy to work with.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <skill.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{skill.label}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className={`max-w-4xl mx-auto ${isVisible ? "animate-fade-up animation-delay-400" : "opacity-0"}`}>
          <h3 className="text-2xl font-bold text-foreground mb-10 text-center">Experience Timeline</h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-8 mb-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year badge */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-8 bg-primary text-primary-foreground text-sm font-bold rounded-full flex items-center justify-center z-10">
                  {item.year}
                </div>

                {/* Content */}
                <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                    <h4 className="font-semibold text-foreground">{item.role}</h4>
                    <p className="text-primary text-sm">{item.company}</p>
                    <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
