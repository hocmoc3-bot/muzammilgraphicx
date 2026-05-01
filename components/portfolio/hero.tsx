"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[#0a1628]">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-[#0d4f6e] rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute top-1/4 right-0 w-2/5 h-2/5 bg-[#0a3d5c] rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite_1s]" />
          <div className="absolute bottom-0 left-1/4 w-2/5 h-2/5 bg-[#134e5e] rounded-full blur-[120px] animate-[pulse_12s_ease-in-out_infinite_2s]" />
          <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-[#0c3547] rounded-full blur-[100px] animate-[pulse_9s_ease-in-out_infinite_0.5s]" />
        </div>
      </div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.02)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

      <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-2xl sm:text-3xl md:text-4xl font-medium tracking-[0.15em] mb-6 text-balance transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Hi, I&apos;m <span className="text-primary">Muzammil Malik</span>
            <br />
            <span className="text-muted-foreground tracking-[0.12em]">Graphic Designer</span>
          </h1>

          <p 
            className={`text-sm text-primary font-medium mb-4 tracking-wider transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Simple design. Strong impact.
          </p>

          <p 
            className={`text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            I create clean, promotional, and engaging graphic designs for brands and businesses. 
            My work focuses on social media posts, banners, product promotions, and branding visuals 
            that help businesses attract customers and present their products professionally.
          </p>

          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button asChild size="lg" className="text-base px-8">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link href="#contact">Let&apos;s Talk</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce transition-all duration-1000 delay-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
