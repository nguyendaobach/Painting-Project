"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<typeof artworks[0] | null>(null)
  const { theme, toggleTheme } = useTheme()

  // Navigation items ordered from left to right (1-6)
  const navigationItems = [
    { label: "Selected Works", href: "/selected-works", id: "selected" },
    { label: "Paintings", href: "/paintings", id: "paintings" },
    { label: "Sculptures", href: "/sculptures", id: "sculptures" },
    { label: "Archives", href: "/archives", id: "archives" },
    { label: "About", href: "/about", id: "about" },
    { label: "Contact", href: "/contact", id: "contact" },
  ]

  const artworks = [
    {
      id: 1,
      title: "009",
      medium: "Oil on canvas",
      dimensions: "84 × 76 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/009_vxftes.jpg",
    },
    {
      id: 2,
      title: "062",
      medium: "Oil on canvas",
      dimensions: "80 × 72 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/062_jd4xye.jpg",
    },
    {
      id: 3,
      title: "006",
      medium: "Oil on canvas",
      dimensions: "82 × 74 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/006_trqdvi.jpg",
    },
    {
      id: 4,
      title: "060",
      medium: "Oil on canvas",
      dimensions: "78 × 70 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748876/060_qlzhik.jpg",
    },
    {
      id: 5,
      title: "005",
      medium: "Oil on canvas",
      dimensions: "80 × 72 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/005_ve5spp.jpg",
    },
    {
      id: 6,
      title: "Oral History and Written History",
      medium: "Oil on canvas",
      dimensions: "84 × 76 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748895/Oral_History_and_Written_History_vdxb2v.jpg",
    },
    {
      id: 7,
      title: "B52",
      medium: "Oil on canvas",
      dimensions: "80 × 72 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748889/B52_l9qij3.jpg",
    },
    {
      id: 8,
      title: "Boeing",
      medium: "Oil on canvas",
      dimensions: "78 × 70 inches",
      year: 2024,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748891/Boeing_thom1l.jpg",
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
      id: 12,
      title: "Linebacker",
      medium: "Oil on canvas",
      dimensions: "84 × 78 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748888/Linebacker_aozveh.jpg",
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
      id: 15,
      title: "Uncle X's Good Boy",
      medium: "Oil on canvas",
      dimensions: "76 × 68 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748887/Uncle_X_s_Good_Boy_dbmlum.jpg",
    },
    {
      id: 16,
      title: "This Whole War Is Bullshit",
      medium: "Oil on canvas",
      dimensions: "80 × 70 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748887/This_whole_war_is_bullshit_mbocuq.jpg",
    },
    {
      id: 17,
      title: "The Red River (or a red river)",
      medium: "Oil on canvas",
      dimensions: "84 × 76 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748886/The_Red_River_or_a_red_river_wvaa3i.jpg",
    },
    {
      id: 18,
      title: "1965-1975",
      medium: "Oil on canvas",
      dimensions: "78 × 72 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748880/1965-1975_ufo07l.jpg",
    },
    {
      id: 19,
      title: "Money, Aren't We All",
      medium: "Oil on canvas",
      dimensions: "80 × 68 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748879/Money_Aren_t_We_All_ruas6v.jpg",
    },
    {
      id: 20,
      title: "The Rear",
      medium: "Oil on canvas",
      dimensions: "76 × 70 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748878/The_Rear_fqwaob.jpg",
    },
    {
      id: 21,
      title: "The Target",
      medium: "Oil on canvas",
      dimensions: "82 × 74 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748878/The_Target_udymp4.jpg",
    },
    {
      id: 22,
      title: "New2",
      medium: "Oil on canvas",
      dimensions: "78 × 66 inches",
      year: 2023,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748877/New2_uugnfr.jpg",
    },
    {
      id: 23,
      title: "My Hometown",
      medium: "Oil on canvas",
      dimensions: "80 × 70 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748877/My_Hometown_vy79w4.jpg",
    },
    {
      id: 24,
      title: "My Table",
      medium: "Oil on canvas",
      dimensions: "76 × 68 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748877/My_Table_w0ysys.jpg",
    },
    {
      id: 25,
      title: "My Kitchen",
      medium: "Oil on canvas",
      dimensions: "78 × 66 inches",
      year: 2022,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748876/My_Kitchen_a7zawj.jpg",
    },
  ]

  const currentArtwork = artworks[currentIndex]

  const nextArtwork = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length)
  }

  const prevArtwork = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length)
  }

  const goToArtwork = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length)
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % artworks.length)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [artworks.length])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-500 overflow-hidden">
      {/* Header with Navigation */}
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
            <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide max-w-[50vw] md:max-w-none">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="px-2 md:px-4 py-2 text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50 rounded-lg transition-all duration-200 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Right: Theme toggle */}
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
      </header>

      {/* Main Content - Simple centered image */}
      <main className="flex-1 flex flex-col items-center justify-center relative bg-neutral-50 dark:bg-black px-4 md:px-8 py-4 md:py-6 overflow-hidden">
        {/* Large centered image - fixed height container */}
        <div className="relative flex items-center justify-center h-[60vh] md:h-[75vh] mb-4 md:mb-6">
          <img
            key={currentIndex}
            src={currentArtwork?.image || "/placeholder.svg"}
            alt={currentArtwork?.title}
            className="max-h-full w-auto object-contain animate-fadeIn cursor-pointer hover:opacity-90 transition-opacity"
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
              {currentIndex + 1} / {artworks.length}
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
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={24} className="text-white" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="grid md:grid-cols-[1fr,300px] gap-8 items-start">
              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Details */}
              <div className="text-white space-y-4">
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
