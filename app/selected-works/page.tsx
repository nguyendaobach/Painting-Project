"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun, ChevronLeft, ChevronRight, X, LayoutGrid, GalleryHorizontal, Menu } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import Footer from "@/components/footer"

export default function SelectedWorksPage() {
  const [mounted, setMounted] = useState(false)
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<typeof selectedWorks[0] | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const selectedWorks = [
    {
      id: 109,
      title: "Hybrid",
      medium: "Oil, acrylic, and fabric on canvas",
      dimensions: "60x81cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1784822486/DSC05940cropupweb_nz2otj.jpg",
    },
    {
      id: 110,
      title: "Untitle",
      medium: "Oil, acrylic, and fabric on canvas",
      dimensions: "54x65cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1784909988/DSC06232cropfinalupwebmaudep_umgfxl.jpg",
    },
    {
      id: 111,
      title: "Untitle",
      medium: "Oil, acrylic, and fabric on canvas",
      dimensions: "",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782706225/Screenshot_2026-06-29_110949_ju31po.png",
    },

    {
      id: 101,
      title: "Early Summer",
      medium: "oil, acrylic, and collage on wood",
      dimensions: "50x50cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782705090/Screenshot_2026-06-29_104940_koz5h0.png",
    },
    {
      id: 105,
      title: "Early Spring",
      medium: "oil, acrylic, and collage on wood",
      dimensions: "46x61cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782705472/Screenshot_2026-06-29_105625_bycvpk.png",
    },
    {
      id: 107,
      title: "Late spring",
      medium: "oil, acrylic, and collage on wood",
      dimensions: "46x61cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782705613/Screenshot_2026-06-29_105951_owcqix.png",
    },
    {
      id: 103,
      title: "Late Summer",
      medium: "Oil, and acrylic on canvas",
      dimensions: "54 x 65cm",
      year: 2026,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782705331/Screenshot_2026-06-29_105511_vcuog4.png",
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
      id: 112,
      title: "Napalm Bombs",
      medium: "Acrylic, Oil, Colored Pencils, Collage, and Colored Frog Tape on Wood Panel",
      dimensions: "64\"x38\"x2\" (162.5cm x 96.5cm x 5cm)",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1782715078/Screenshot_2026-06-29_133737_qxt5wc.png",
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
      id: 13,
      title: "Paris 1973",
      medium: "Oil on canvas",
      dimensions: "76 × 64 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748888/Paris_1973_gzj6jb.jpg",
    },
    {
      id: 9,
      title: "Radar",
      medium: "Oil on canvas",
      dimensions: "76 × 68 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748892/Radar_rcm5ce.jpg",
    },
  ]

  const navigationItems = [
    { label: "Selected Works", href: "/selected-works", id: "selected" },
    { label: "Paintings", href: "/paintings", id: "paintings" },
    { label: "Sculptures", href: "/sculptures", id: "sculptures" },
    { label: "Archives", href: "/archives", id: "archives" },
    { label: "About", href: "/about", id: "about" },
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
    if (viewMode !== 'carousel' || isMobileMenuOpen) return

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
  }, [selectedWorks.length, viewMode, isMobileMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-500">
      {/* Main Header */}
      <header className="border-b border-neutral-200/50 dark:border-neutral-800/50 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Artist name */}
            <Link href="/" className="group z-50" onClick={() => setIsMobileMenuOpen(false)}>
              <h1 className="text-lg md:text-xl font-light tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                Minh Doan
              </h1>
            </Link>

            {/* Center: Navigation - Desktop Only */}
            <nav className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => (
                item.href.startsWith("http") ? (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 lg:px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`px-3 lg:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
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

            {/* Right: Controls & Mobile Toggle */}
            <div className="flex items-center gap-2 z-50">
              {/* View Toggle */}
              <div className="flex bg-neutral-100 dark:bg-neutral-800/80 rounded-lg p-1 mr-1">
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

              <div className="w-px h-5 bg-neutral-200 dark:bg-neutral-800 hidden md:block"></div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon size={18} className="text-neutral-700" />
                ) : (
                  <Sun size={18} className="text-neutral-300" />
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 ml-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-neutral-950 z-40 md:hidden transition-transform duration-500 ease-in-out flex flex-col pt-24 pb-8 px-6 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-6 text-2xl font-light">
          {navigationItems.map((item, index) => (
            <div 
              key={item.id}
              className="transform transition-all duration-500 delay-100"
              style={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 50}ms`
              }}
            >
              {item.href.startsWith("http") ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`block transition-colors ${
                    item.id === 'selected'
                      ? 'text-black dark:text-white font-normal'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        <div className="mt-auto pt-8 border-t border-neutral-100 dark:border-neutral-900 flex flex-col gap-2">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Minh Doan</p>
          <Link
            href="/terms"
            className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Terms & Copyright
          </Link>
        </div>
      </div>

      {/* Main Content */}
      {viewMode === 'carousel' ? (
        <main className="flex-1 flex flex-col items-center justify-center relative bg-neutral-50 dark:bg-black px-4 md:px-8 py-4 md:py-6">
          {/* Large centered image - fixed height container */}
          <div className="relative flex items-center justify-center h-[65vh] md:h-[75vh] mb-6 md:mb-6 w-full">
            <img
              key={currentIndex}
              src={currentArtwork?.image || "/placeholder.svg"}
              alt={currentArtwork?.title}
              className="max-h-full max-w-full w-auto object-contain animate-fadeIn cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(currentArtwork)}
            />
          </div>

          {/* Info section below image - fixed position */}
          <div className="w-full max-w-4xl flex items-end justify-between px-2 md:px-4 z-10">
            {/* Info bottom left */}
            <div className="text-left min-h-[50px] md:min-h-[60px]">
              <h2 className="text-sm md:text-base font-medium mb-0.5">{currentArtwork?.title}</h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">{currentArtwork?.medium}</p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">{currentArtwork?.dimensions}</p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">{currentArtwork?.year}</p>
            </div>

            {/* Counter bottom right */}
            <div className="text-right">
              <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                {currentIndex + 1} / {selectedWorks.length}
              </p>
            </div>
          </div>

          {/* Navigation Arrows - Styled for mobile & desktop */}
          <button
            onClick={prevArtwork}
            className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 p-2.5 md:p-3 bg-white/50 dark:bg-black/50 md:bg-transparent md:dark:bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors backdrop-blur-sm md:backdrop-blur-none"
            aria-label="Previous artwork"
          >
            <ChevronLeft size={24} className="md:w-6 md:h-6 text-neutral-800 dark:text-neutral-200" />
          </button>

          <button
            onClick={nextArtwork}
            className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 p-2.5 md:p-3 bg-white/50 dark:bg-black/50 md:bg-transparent md:dark:bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors backdrop-blur-sm md:backdrop-blur-none"
            aria-label="Next artwork"
          >
            <ChevronRight size={24} className="md:w-6 md:h-6 text-neutral-800 dark:text-neutral-200" />
          </button>
        </main>
      ) : (
        <main className="flex-1 overflow-y-auto bg-white dark:bg-neutral-950 px-4 md:px-6 lg:px-12 pt-8 md:pt-12 pb-0 flex flex-col">
          <div className="max-w-7xl mx-auto w-full">
            {/* Masonry Grid - Mobile optimized columns */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {selectedWorks.map((artwork) => (
                <div
                  key={artwork.id}
                  className="break-inside-avoid"
                >
                  <div
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(artwork)}
                  >
                    <div className="relative overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    <div className="mt-3 px-1">
                      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {artwork.title}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        {artwork.year} • {artwork.medium}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                        {artwork.dimensions}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
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
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>

      {/* Modal for full image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] bg-white/95 dark:bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors z-10 text-neutral-900 dark:text-white"
            aria-label="Close"
          >
            <X size={20} className="md:w-6 md:h-6" />
          </button>

          <div className="max-w-6xl w-full flex flex-col md:flex-row gap-6 md:gap-12 items-center" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <div className="relative flex justify-center flex-1 w-full max-h-[60vh] md:max-h-[85vh]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[60vh] md:max-h-[85vh] w-auto object-contain rounded-md shadow-2xl"
              />
            </div>

            {/* Details */}
            <div className="text-neutral-900 dark:text-white space-y-3 md:space-y-4 md:w-80 w-full text-center md:text-left px-4 md:px-0">
              <div>
                <h2 className="text-2xl md:text-4xl font-light mb-1 md:mb-2">{selectedImage.title}</h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base">{selectedImage.year}</p>
              </div>
              <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <p className="leading-relaxed">
                  <span className="text-neutral-500 block md:inline">Medium:</span>{" "}
                  <span className="text-neutral-700 dark:text-neutral-300">{selectedImage.medium}</span>
                </p>
                <p>
                  <span className="text-neutral-500 block md:inline">Dimensions:</span>{" "}
                  <span className="text-neutral-700 dark:text-neutral-300">{selectedImage.dimensions}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}