"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun, ChevronLeft, ChevronRight, X, LayoutGrid, GalleryHorizontal } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function SelectedWorksPage() {
  const [mounted, setMounted] = useState(false)
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<typeof selectedWorks[0] | null>(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const selectedWorks = [
    {
      id: 101,
      title: "Early Summer",
      medium: "oil, acrylic, and collage on wood",
      dimensions: "50x50cm",
      year: 2026,
      image: "https://3gudmi3d2n.ucarecd.net/01b71099-d0d2-4282-a03f-9bb8fffe47ee/4Finalcopy.png",
    },
    {
      id: 103,
      title: "Late Summer",
      medium: "Oil, and acrylic on canvas",
      dimensions: "54 x 65cm",
      year: 2026,
      image: "https://3gudmi3d2n.ucarecd.net/9ef9f6af-60c0-4886-8d87-c38ea340f25c/2nenreal.png",
    },
    {
      id: 1,
      title: "Brise-soleil",
      medium: "Sculptures",
      dimensions: "84 × 76 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/009_vxftes.jpg",
    },
    {
      id: 3,
      title: "Brise-soleil",
      medium: "Sculptures",
      dimensions: "82 × 74 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/006_trqdvi.jpg",
    },
    {
      id: 9,
      title: "Radar",
      medium: "Oil on canvas",
      dimensions: "76 × 68 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748892/Radar_rcm5ce.jpg",
    },
    {
      id: 10,
      title: "Linebacker 1972",
      medium: "Oil on canvas",
      dimensions: "82 × 74 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748892/Linebacker1972_damofk.jpg",
    },
    {
      id: 11,
      title: "Hanoi Saigon Paris",
      medium: "Oil on canvas",
      dimensions: "80 × 72 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748893/HanoiSaigonParis_uxcp9c.jpg",
    },
    {
      id: 112,
      title: "Napalm Bombs",
      medium: "Acrylic, Oil, Colored Pencils, Collage, and Colored Frog Tape on Wood Panel",
      dimensions: "64\"x38\"x2\" (162.5cm x 96.5cm x 5cm)",
      year: 2024,
      image: "https://3gudmi3d2n.ucarecd.net/e0ec3498-3d43-4e56-9843-3ba4e371d9cf/Painting1.jpg",
    },
    {
      id: 13,
      title: "Paris 1973",
      medium: "Oil on canvas",
      dimensions: "76 × 64 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748888/Paris_1973_gzj6jb.jpg",
    },
    {
      id: 14,
      title: "Bamboo",
      medium: "Oil on canvas",
      dimensions: "80 × 72 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748887/Bamboo_z3btzb.jpg",
    },
    {
      id: 24,
      title: "Bathroom",
      medium: "Pencil, water color, and gouache on paper",
      dimensions: "20 x 16 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1767021123/Bathroom_fz2ajg.jpg",
    },
    {
      id: 25,
      title: "Desk",
      medium: "Pencil, water color, and gouache on paper",
      dimensions: "20 x 16 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1767021124/Desk_csm5fg.jpg",
    },
  ]

  const navigationItems = [
    { label: "Selected Works", href: "/selected-works", id: "selected" },
    { label: "Paintings", href: "/paintings", id: "paintings" },
    { label: "Sculptures", href: "/sculptures", id: "sculptures" },
    { label: "Archives", href: "/archives", id: "archives" },
    { label: "About", href: "/about", id: "about" },
    { label: "Contact", href: "/contact", id: "contact" },
  ]

  const currentArtwork = selectedWorks[currentIndex]

  const nextArtwork = () => {
    setCurrentIndex((prev) => (prev + 1) % selectedWorks.length)
  }

  const prevArtwork = () => {
    setCurrentIndex((prev) => (prev - 1 + selectedWorks.length) % selectedWorks.length)
  }

  // Keyboard navigation for carousel
  useEffect(() => {
    if (viewMode !== 'carousel') return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + selectedWorks.length) % selectedWorks.length)
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % selectedWorks.length)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedWorks.length, viewMode])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-500 overflow-hidden">
      {/* Main Header with Navigation */}
      <header className="border-b border-neutral-200/50 dark:border-neutral-800/50 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Artist name */}
            <Link href="/" className="group">
              <h1 className="text-base md:text-lg lg:text-xl font-light tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                Minh Doan
              </h1>
            </Link>

            {/* Center: Navigation - scrollable on mobile */}
            <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide max-w-[40vw] md:max-w-none">
              {navigationItems.map((item) => (
                item.href.startsWith("http") ? (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 md:px-4 py-2 text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50 rounded-lg transition-all duration-200 whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`px-2 md:px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                      item.id === 'selected' 
                        ? 'text-black dark:text-white bg-neutral-100 dark:bg-neutral-800/50' 
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/30'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            {/* Right: View Toggle & Theme */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* View Toggle */}
              <div className="flex bg-neutral-100 dark:bg-neutral-800/80 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('carousel')}
                  className={`p-1.5 md:p-2 rounded-md transition-all ${
                    viewMode === 'carousel' 
                      ? 'bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-white' 
                      : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                  aria-label="Carousel view"
                >
                  <GalleryHorizontal size={16} className="md:w-[18px] md:h-[18px]" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 md:p-2 rounded-md transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-white' 
                      : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid size={16} className="md:w-[18px] md:h-[18px]" />
                </button>
              </div>

              <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-800"></div>

              <button
                onClick={toggleTheme}
                className="p-2 md:p-2.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 flex-shrink-0"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon size={16} className="md:w-[18px] md:h-[18px] text-neutral-700" />
                ) : (
                  <Sun size={16} className="md:w-[18px] md:h-[18px] text-neutral-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {viewMode === 'carousel' ? (
        <main className="flex-1 flex flex-col items-center justify-center relative bg-neutral-50 dark:bg-black px-4 md:px-8 py-4 md:py-6 overflow-hidden">
          {/* Large centered image - fixed height container */}
          <div className="relative flex items-center justify-center h-[60vh] md:h-[75vh] mb-4 md:mb-6 w-full">
            <img
              key={currentIndex}
              src={currentArtwork?.image || "/placeholder.svg"}
              alt={currentArtwork?.title}
              className="max-h-full max-w-full w-auto object-contain animate-fadeIn cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(currentArtwork)}
            />
          </div>

          {/* Info section below image - fixed position */}
          <div className="w-full max-w-4xl flex items-end justify-between px-2 md:px-4">
            {/* Info bottom left */}
            <div className="text-left min-h-[50px] md:min-h-[60px]">
              <h2 className="text-xs md:text-sm lg:text-base font-medium mb-0.5">{currentArtwork?.title}</h2>
              <p className="text-[10px] md:text-xs text-neutral-600 dark:text-neutral-400">{currentArtwork?.medium}</p>
              <p className="text-[10px] md:text-xs text-neutral-600 dark:text-neutral-400">{currentArtwork?.year}</p>
            </div>

            {/* Counter bottom right */}
            <div className="text-right">
              <p className="text-[10px] md:text-xs text-neutral-600 dark:text-neutral-400">
                {currentIndex + 1} / {selectedWorks.length}
              </p>
            </div>
          </div>

          {/* Navigation Arrows - Simple */}
          <button
            onClick={prevArtwork}
            className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 p-2 md:p-3 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors"
            aria-label="Previous artwork"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6 text-neutral-700 dark:text-neutral-300" />
          </button>

          <button
            onClick={nextArtwork}
            className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 p-2 md:p-3 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors"
            aria-label="Next artwork"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6 text-neutral-700 dark:text-neutral-300" />
          </button>
        </main>
      ) : (
        <main className="flex-1 overflow-y-auto bg-white dark:bg-neutral-950 px-6 lg:px-12 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Masonry Grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {selectedWorks.map((artwork) => (
                <div
                  key={artwork.id}
                  className="break-inside-avoid"
                >
                  <div
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(artwork)}
                  >
                    <div className="relative overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    <div className="mt-2 px-1">
                      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {artwork.title}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                        {artwork.year} • {artwork.medium}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

      {/* Modal for full image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Close"
          >
            <X size={24} className="text-white" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="grid md:grid-cols-[1fr,300px] gap-8 items-start">
              {/* Image */}
              <div className="relative flex justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Details */}
              <div className="text-white space-y-4 self-center">
                <div>
                  <h2 className="text-3xl font-light mb-2">{selectedImage.title}</h2>
                  <p className="text-neutral-400">{selectedImage.year}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-neutral-500">Medium:</span>{" "}
                    <span className="text-neutral-300">{selectedImage.medium}</span>
                  </p>
                  <p>
                    <span className="text-neutral-500">Dimensions:</span>{" "}
                    <span className="text-neutral-300">{selectedImage.dimensions}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}