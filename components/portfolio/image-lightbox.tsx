"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageLightboxProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function ImageLightbox({ images, currentIndex, isOpen, onClose, onNext, onPrev }: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrev()
    }
    window.addEventListener("keydown", handleKeyDown)
    
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose, onNext, onPrev])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
        >
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-4 right-4 z-[9999] p-2 text-white/70 hover:text-white bg-white/10 hover:bg-cyan-500 rounded-full backdrop-blur-md transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-[90vw] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image area
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Project image ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl shadow-cyan-500/20"
              />
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); onPrev(); }}
                  className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-2 md:p-3 text-white/70 hover:text-white bg-white/10 hover:bg-cyan-500 rounded-full backdrop-blur-md transition-all duration-300 z-50"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); onNext(); }}
                  className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-2 md:p-3 text-white/70 hover:text-white bg-white/10 hover:bg-cyan-500 rounded-full backdrop-blur-md transition-all duration-300 z-50"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-white text-sm font-medium border border-white/10">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
