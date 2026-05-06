"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo - Gradient to match Hero */}
          <Link href="#home" className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              MG
            </span>
            <span className="text-foreground">X</span>
          </Link>

          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button asChild className="bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/20">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between">
          {/* Logo - Gradient */}
          <Link href="#home" className="text-xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              MG
            </span>
            <span className="text-foreground">X</span>
          </Link>

          <button
            className="text-foreground p-2 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <ul className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block text-muted-foreground hover:text-cyan-400 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild className="w-full mt-2 bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/20">
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}