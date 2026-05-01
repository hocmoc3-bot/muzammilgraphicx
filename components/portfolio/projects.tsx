"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectModal } from "./project-modal"

export interface Project {
  id: string
  title: string
  category: string
  thumbnail: string
  images: string[]
  description: string
  challenge: string
  solution: string
  results: string
  client: string
  year: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Kkmart Branding",
    category: "Branding",
    thumbnail: "/images/kkmart-branding.jpg",
    images: ["/images/kkmart-branding.jpg"],
    description: "Complete brand identity design including logo, color palette, and marketing materials.",
    challenge: "Creating a cohesive brand identity that stands out in a competitive retail market.",
    solution: "Developed a bold, modern visual language with a distinctive logo and consistent color system.",
    results: "Delivered a full brand kit that gave Kkmart a professional, recognizable presence.",
    client: "Kkmart",
    year: "2024",
  },
  {
    id: "2",
    title: "Social Media Designs",
    category: "Social Media",
    thumbnail: "/images/social-media-designs.jpg",
    images: ["/images/social-media-designs.jpg"],
    description: "Instagram posts, stories, and Facebook ad designs crafted to maximize engagement.",
    challenge: "Designing scroll-stopping content that converts viewers into customers.",
    solution: "Used vibrant layouts, strong typography, and brand-consistent visuals across all formats.",
    results: "Increased client engagement and delivered a consistent feed aesthetic.",
    client: "Various Clients",
    year: "2024",
  },
  {
    id: "3",
    title: "Video Editing Work",
    category: "Video Production",
    thumbnail: "/images/video-editing.jpg",
    images: ["/images/video-editing.jpg"],
    description: "Promotional videos, social media reels, and YouTube content edited for maximum impact.",
    challenge: "Turning raw footage into polished, brand-aligned video content.",
    solution: "Applied motion graphics, color grading, and tight pacing to keep viewers engaged.",
    results: "Delivered professional video assets used across social media and YouTube.",
    client: "Various Clients",
    year: "2024",
  },
  {
    id: "4",
    title: "Product Packaging",
    category: "Print",
    thumbnail: "/images/packaging-design.jpg",
    images: ["/images/packaging-design.jpg"],
    description: "Product packaging and label designs that attract attention on shelves and online.",
    challenge: "Designing packaging that communicates quality while standing out from competitors.",
    solution: "Created clean, informative labels with strong visual hierarchy and premium finishes.",
    results: "Products presented professionally, improving perceived value and sales.",
    client: "Various Clients",
    year: "2024",
  },
  {
    id: "5",
    title: "Logo Design",
    category: "Branding",
    thumbnail: "/images/logo-design.jpg",
    images: ["/images/logo-design.jpg"],
    description: "Modern and memorable logo designs crafted for various clients across industries.",
    challenge: "Distilling each client's brand essence into a single, scalable mark.",
    solution: "Explored multiple concepts and refined the strongest direction into a clean final logo.",
    results: "Clients received versatile logos that work across digital and print applications.",
    client: "Various Clients",
    year: "2024",
  },
  {
    id: "6",
    title: "Promotional Banners",
    category: "Banners",
    thumbnail: "/images/banner-design.jpg",
    images: ["/images/banner-design.jpg"],
    description: "Eye-catching promotional banners for web and print that drive action.",
    challenge: "Communicating promotions clearly and compellingly in limited space.",
    solution: "Bold headlines, strategic use of color, and strong calls-to-action in every banner.",
    results: "Banners used across multiple campaigns with strong click-through and response rates.",
    client: "Various Clients",
    year: "2024",
  },
]

const categories = ["All", "Social Media", "Banners", "Branding", "Print", "Video Production"]

/** Fallback thumbnail shown when an image hasn't been added to /public/images/ yet */
function PlaceholderThumbnail({ title, category }: { title: string; category: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary gap-3 p-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <ExternalLink className="w-5 h-5 text-primary/50" />
      </div>
      <div className="text-center">
        <p className="text-xs font-medium text-primary/60 uppercase tracking-wider">{category}</p>
        <p className="text-sm text-muted-foreground mt-1">{title}</p>
        <p className="text-xs text-muted-foreground/50 mt-1">Image coming soon</p>
      </div>
    </div>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-32 md:py-40">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work across branding, social media, video production, and print.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => {
              const imageAvailable = !failedImages.has(project.id)
              return (
                <article
                  key={project.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Thumbnail */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-secondary">
                    {imageAvailable ? (
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} – ${project.category} design by Muzammil Malik`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={() =>
                          setFailedImages((prev) => new Set(prev).add(project.id))
                        }
                      />
                    ) : (
                      <PlaceholderThumbnail
                        title={project.title}
                        category={project.category}
                      />
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <ExternalLink className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-5 md:p-6">
                    <span className="text-primary text-xs font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p>No projects in this category yet.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
