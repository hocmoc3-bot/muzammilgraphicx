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
    title: "Royal Orchard – Brand Identity",
    category: "Branding",
    thumbnail: "/images/kkmart-branding.jpg",
    images: ["/images/kkmart-branding.jpg"],
    description: "Complete brand overhaul including logo, business cards, and guidelines.",
    challenge: "Creating a cohesive brand identity that reflects the premium nature of Royal Orchard.",
    solution: "Developed a refined visual language with a distinctive logo, typography, and color system.",
    results: "Delivered a full brand kit ready for print and digital applications.",
    client: "Royal Orchard",
    year: "2024",
  },
  {
    id: "2",
    title: "Royal Orchard – Social Media",
    category: "Social Media",
    thumbnail: "/images/social-media-designs.jpg",
    images: ["/images/social-media-designs.jpg"],
    description: "Instagram posts, stories, and promotional banners.",
    challenge: "Maintaining brand consistency across all social media formats while keeping content fresh.",
    solution: "Designed a set of reusable templates aligned with the brand identity for quick content creation.",
    results: "Consistent, on-brand social media presence across all platforms.",
    client: "Royal Orchard",
    year: "2024",
  },
  {
    id: "3",
    title: "Royal Orchard – Print Media",
    category: "Print",
    thumbnail: "/images/packaging-design.jpg",
    images: ["/images/packaging-design.jpg"],
    description: "Brochures, flyers, and standee designs for retail promotions.",
    challenge: "Translating the digital brand identity into compelling print collateral.",
    solution: "Applied the brand guidelines to print formats with attention to layout, hierarchy, and print specs.",
    results: "Professional print materials ready for in-store and event use.",
    client: "Royal Orchard",
    year: "2024",
  },
  {
    id: "4",
    title: "Retail Promotional Campaign",
    category: "Banners",
    thumbnail: "/images/banner-design.jpg",
    images: ["/images/banner-design.jpg"],
    description: "Concept designs for e-commerce sale banners and digital ads.",
    challenge: "Designing high-impact banners that drive clicks and conversions for retail sales.",
    solution: "Bold headlines, strategic use of color, and clear calls-to-action tailored for digital retail.",
    results: "Banner set delivered for multi-platform retail campaign use.",
    client: "Various Clients",
    year: "2024",
  },
  {
    id: "5",
    title: "Product Packaging",
    category: "Print",
    thumbnail: "/images/logo-design.jpg",
    images: ["/images/logo-design.jpg"],
    description: "Label and packaging designs for retail products.",
    challenge: "Creating packaging that communicates product quality and stands out on shelves.",
    solution: "Designed clean, informative labels with strong visual hierarchy and premium presentation.",
    results: "Retail-ready packaging that improves perceived product value.",
    client: "Various Clients",
    year: "2024",
  },
]

const categories = ["All", "Social Media", "Banners", "Branding", "Print"]

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
