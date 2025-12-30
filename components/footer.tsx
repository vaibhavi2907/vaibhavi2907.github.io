"use client"

import { Github, Linkedin, Twitter, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Github, href: "https://github.com/vaibhavi2907", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/vaibhavi-lawhale", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export function Footer() {
  return (
    <footer id="contact" className="relative py-24 lg:py-32 border-t border-border">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            {"Let's build something great together"}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether you need a technical advisor or a partner to bring your vision to
            life – I'd love to hear from you.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <a
            href="mailto:alex@example.com"
            className="group flex items-center gap-4 p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="p-3 bg-primary/10 rounded-xl">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                vaibhavilawhale@gmail.com
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/vaibhavi-lawhale"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="p-3 bg-primary/10 rounded-xl">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">LinkedIn</div>
              <div className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                /in/vaibhavi-lawhale
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 bg-card border border-border rounded-2xl sm:col-span-2 lg:col-span-1">
            <div className="p-3 bg-primary/10 rounded-xl">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Location</div>
              <div className="font-medium text-foreground">Akola, Maharashtra</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-20">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-lg group"
            asChild
          >
            <a href="mailto:alex@example.com">
              Start a Conversation
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

        {/* Bottom footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vaibhavi Lawhale. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
