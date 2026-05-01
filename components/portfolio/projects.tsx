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

// TODO: ADD YOUR ACTUAL PROJECTS HERE
// 1. Add your project images to the /public/projects/ folder
// 2. Add an entry to this array for each project
// 3. Make sure the category exactly matches one of the categories in the array below
const projects: Project[] = [
  {
    id: "1",
    title: "Project Name Example",
    category: "Social Media", // Must match a category from the categories array below
    thumbnail: "/projects/your-thumbnail-image.jpg",
    images: [
      "/projects/your-main-image.jpg", 
      "/projects/your-secondary-image.jpg"
    ],
    description: "A brief description of your graphic design project.",
    challenge: "What was the main challenge or goal for this project?",
    solution: "How did you solve it through your design?",
    results: "What was the outcome? (e.g., increased engagement, client satisfaction)",
    client: "Client Name or 'Personal Project'",
    year: "2024",
  },
  // Add more projects following the same structure...
]

const categories = ["All", "Social Media", "Banners", "Branding", "Print"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

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
            A selection of my recent work across branding, UI/UX design, and print media.
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

        {/* Projects Grid - Clean Aligned Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-xs font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold mt-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}
