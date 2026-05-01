"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote: "Alex transformed our brand completely. The attention to detail and creative vision exceeded our expectations. Our customers constantly compliment our new look.",
    name: "Sarah Mitchell",
    role: "CEO, Bloom Botanicals",
    image: "/images/testimonials/sarah.jpg",
  },
  {
    id: 2,
    quote: "Working with Alex was a game-changer for our startup. The new identity helped us secure our Series A funding and stand out in a crowded market.",
    name: "Marcus Chen",
    role: "Founder, TechFlow",
    image: "/images/testimonials/marcus.jpg",
  },
  {
    id: 3,
    quote: "Incredible talent and professionalism. Alex delivered a design system that our team still uses daily. The documentation was impeccable.",
    name: "Elena Rodriguez",
    role: "Creative Director, Urban Events",
    image: "/images/testimonials/elena.jpg",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">
            What Clients Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />

            <div className="text-center pt-8">
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 text-pretty">
                &quot;{current.quote}&quot;
              </blockquote>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary">
                  <Image
                    src={current.image}
                    alt={current.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="font-semibold text-lg">{current.name}</p>
                <p className="text-muted-foreground text-sm">{current.role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-border"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
