"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { ImageLightbox } from "./image-lightbox"

const projects = [
  {
    id: 1,
    title: "Royal Orchard - Marketing & Print Collateral",
    category: ["Print", "Social Media"],
    description: "Designed engaging social media campaigns, promotional print media, and brand collateral for Royal Orchard retail brand.",
    images: [
      "/projects/royal-1.png",
      "/projects/royal-2.png",
      "/projects/royal-3.png",
      "/projects/royal-4.jpeg",
      "/projects/royal-5.png"
    ],
    tags: ["Print", "Social Media"]
  },
  {
    id: 2,
    title: "Sam Digital - Digital Graphics",
    category: ["Digital", "Social Media"],
    description: "Created eye-catching gig images and YouTube thumbnails optimized for engagement and client conversion.",
    images: [
      "/projects/sam-1.jpeg",
      "/projects/sam-2.jpeg",
      "/projects/sam-3.png",
      "/projects/sam-4.png"
    ],
    tags: ["Digital"]
  },
  {
    id: 3,
    title: "Retail Brand Concepts",
    category: ["Branding"],
    description: "Concept designs for retail/e-commerce branding including promotional materials and packaging visuals.",
    images: [
      "/projects/retail-1.png",
      "/projects/retail-2.jpg",
      "/projects/retail-3.png"
    ],
    tags: ["Branding"]
  }
]

const categories = ["All", "Print", "Social Media", "Digital", "Branding"]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const nextLightbox = () => setLightboxIndex((prev) => (prev + 1) % project.images.length)
  const prevLightbox = () => setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length)

  useEffect(() => {
    if (project.images.length <= 1) return
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % project.images.length)
      }
    }, 3500)
    return () => clearInterval(timer)
  }, [isHovered, project.images.length])

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % project.images.length)
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length)

  return (
    <>
      {/* ✅ FIX: pointer-events-none added when lightbox is open */}
      <motion.article
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className={`group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02] transition-all duration-300 ${isLightboxOpen ? "pointer-events-none" : ""
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* ✅ FIX: pointer-events-none added when lightbox is open */}
        <div
          onClick={() => openLightbox(currentIndex)}
          className={`relative aspect-video bg-muted overflow-hidden cursor-pointer ${isLightboxOpen ? "pointer-events-none" : ""
            }`}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={project.images[currentIndex]}
              alt={`${project.title} - Slide ${currentIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgODAwIDQ1MCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiMxZTE5MTkiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzY2NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4='
              }}
            />
          </AnimatePresence>

          {/* Hover Controls */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between px-4 pointer-events-none">
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevImage(); }}
                  className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-cyan-500 pointer-events-auto transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextImage(); }}
                  className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-cyan-500 pointer-events-auto transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 bg-cyan-500/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg shadow-cyan-500/30">
              <ExternalLink className="w-5 h-5 text-white" />
            </div>
          </div>

          {project.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
              {project.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-cyan-400 w-4 h-1.5" : "bg-white/50 w-1.5 h-1.5"}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex gap-2 mb-3">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
      </motion.article>

      {/* ✅ Lightbox Component */}
      <ImageLightbox
        images={project.images}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNext={nextLightbox}
        onPrev={prevLightbox}
      />
    </>
  )
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category.includes(activeFilter))

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium mb-2">PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work across branding, social media, and print design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === cat
                ? "bg-cyan-500 text-white"
                : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-cyan-500"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}