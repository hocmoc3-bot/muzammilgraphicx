"use client"

import { Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-3xl text-center">
        <p className="text-cyan-400 font-medium mb-2 tracking-wider">CONTACT</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Have a project in mind? I'd love to hear about it. Reach out and let's create something amazing together.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email */}
          <a
            href="mailto:muzammilgraphicx@gmail.com"
            className="group flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 text-left"
          >
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <Mail className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Email</p>
              <p className="text-sm text-muted-foreground group-hover:text-cyan-400 transition-colors">
                muzammilgraphicx@gmail.com
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/923085887135"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 text-left"
          >
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <Phone className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">WhatsApp</p>
              <p className="text-sm text-muted-foreground group-hover:text-cyan-400 transition-colors">
                +92 308 5887135
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}