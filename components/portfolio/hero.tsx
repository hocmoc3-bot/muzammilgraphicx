"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

      {/* Animated Background Blobs - Cyan/Purple Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Design Tool Icons - Desktop Only */}
      <div className="hidden md:block absolute top-20 left-10 animate-float opacity-20">
        <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 font-bold text-sm shadow-lg shadow-cyan-500/10">Ps</div>
      </div>
      <div className="hidden md:block absolute top-40 right-16 animate-float-reverse opacity-20">
        <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 font-bold text-sm shadow-lg shadow-purple-500/10">Ai</div>
      </div>
      <div className="hidden md:block absolute bottom-40 left-20 animate-float opacity-15">
        <div className="w-14 h-14 bg-cyan-400/10 border border-cyan-400/30 rounded-xl flex items-center justify-center text-cyan-300 font-bold text-sm shadow-lg shadow-cyan-400/10">Id</div>
      </div>
      <div className="hidden md:block absolute bottom-20 right-10 animate-float-reverse opacity-15">
        <div className="w-14 h-14 bg-purple-400/10 border border-purple-400/30 rounded-xl flex items-center justify-center text-purple-300 font-bold text-sm shadow-lg shadow-purple-400/10">Fi</div>
      </div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Name with Gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Muzammil Malik
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-muted-foreground mb-6">
            Graphic Designer
          </h2>

          {/* Tagline */}
          <p className="text-base md:text-lg text-cyan-400 mb-6 font-semibold">
            Simple design. Strong impact.
          </p>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            I create clean, promotional, and engaging graphic designs for brands and businesses.
            My work focuses on social media posts, banners, product promotions, and branding
            visuals that help businesses attract customers and present their products professionally.
          </p>

          {/* Buttons - Cyan Theme with Hover Glow */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-cyan-500 text-white rounded-lg font-medium 
                hover:bg-cyan-400 transition-all duration-300 hover:scale-105 
                shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-background border border-border text-foreground rounded-lg font-medium 
                hover:bg-muted hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 
                hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}