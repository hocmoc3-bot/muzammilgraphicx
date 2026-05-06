"use client"

import { Share2, Layers, Box, PenLine, Monitor, Palette } from "lucide-react"

const services = [
  {
    icon: Share2,
    title: "Social Media Post Design",
    description: "Engaging visual content optimized for all major social platforms to boost your online presence and attract customers."
  },
  {
    icon: Layers,
    title: "Promotional Banner Design",
    description: "Eye-catching banners designed to showcase deals, offers, and promotions with strong visual impact."
  },
  {
    icon: Box,
    title: "Product Promotion Design",
    description: "Professional product-focused designs that highlight features, pricing, and promotional messaging."
  },
  {
    icon: PenLine,
    title: "Poster and Flyer Design",
    description: "Bold and creative posters and flyers that grab attention and communicate your message effectively."
  },
  {
    icon: Monitor,
    title: "Business Card Design",
    description: "Professional business cards with clean layouts, strong typography, and modern brand presentation."
  },
  {
    icon: Palette,
    title: "Logo Design",
    description: "Clean and modern logo designs created to build strong and memorable brand identities."
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium mb-2">SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What I Can Do For You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, I offer a range of design services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}