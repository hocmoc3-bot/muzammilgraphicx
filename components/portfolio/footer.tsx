"use client"

import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo - Same gradient as Header & Hero */}
          <Link href="#home" className="text-2xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              MG
            </span>
            <span className="text-foreground">X</span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Muzammil GraphicX. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#" //  Replace with your actual Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/923085887135"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}