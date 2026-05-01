"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "./projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
      setCurrentImageIndex(0)
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [project])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
          <span className="sr-only">Close modal</span>
        </Button>

        <div className="grid lg:grid-cols-2 max-h-[90vh] overflow-y-auto">
          {/* Image Gallery */}
          <div className="relative aspect-square lg:aspect-auto lg:h-full bg-secondary">
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Image Navigation */}
            {project.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-5 h-5" />
                  <span className="sr-only">Next image</span>
                </Button>
                
                {/* Image Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-primary" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Project Details */}
          <div className="p-6 lg:p-8 overflow-y-auto">
            <span className="text-primary text-xs font-medium uppercase tracking-wider">
              {project.category} • {project.year}
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-2 mb-4">
              {project.title}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                  Challenge
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                  Solution
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                  Results
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.results}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Client:</span> {project.client}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
