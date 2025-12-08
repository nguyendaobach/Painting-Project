"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Moon, Sun, ChevronDown, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

function SculpturesContent() {
  const [mounted, setMounted] = useState(false)
  const [selectedYear, setSelectedYear] = useState<string | null>(null)
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<typeof allArtworks[0] | null>(null)
  const { theme, toggleTheme } = useTheme()
  const searchParams = useSearchParams()

  useEffect(() => {
    setMounted(true)
    const yearParam = searchParams.get("year")
    if (yearParam) {
      setSelectedYear(yearParam)
    }
  }, [searchParams])

  if (!mounted) {
    return null
  }

  const years = [
    { year: "2025", count: 5 },
  ]

  const allArtworks = [
    {
      id: 1,
      title: "009",
      medium: "Sculpture",
      dimensions: "84 × 76 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/009_vxftes.jpg",
    },
    {
      id: 2,
      title: "062",
      medium: "Sculpture",
      dimensions: "80 × 72 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/062_jd4xye.jpg",
    },
    {
      id: 3,
      title: "006",
      medium: "Sculpture",
      dimensions: "82 × 74 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/006_trqdvi.jpg",
    },
    {
      id: 4,
      title: "060",
      medium: "Sculpture",
      dimensions: "78 × 70 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748876/060_qlzhik.jpg",
    },
    {
      id: 5,
      title: "005",
      medium: "Sculpture",
      dimensions: "80 × 72 inches",
      year: 2025,
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1762748875/005_ve5spp.jpg",
    },
  ]

  const displayedArtworks = selectedYear
    ? allArtworks.filter((artwork) => artwork.year.toString() === selectedYear)
    : allArtworks

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-500">
        {/* Header */}
        <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Back</span>
              </Link>
              <h1 className="text-2xl md:text-3xl font-light tracking-tight">
                Sculptures
              </h1>
            </div>

            <button
              onClick={toggleTheme}
              className="p-3 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon size={20} className="text-neutral-700" />
              ) : (
                <Sun size={20} className="text-neutral-300" />
              )}
            </button>
          </div>

          {/* Year Filter */}
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            {years.map((yearItem) => (
              <button
                key={yearItem.year}
                onClick={() => setSelectedYear(yearItem.year)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedYear === yearItem.year
                    ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                }`}
              >
                {yearItem.year}
              </button>
            ))}
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !selectedYear
                  ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            >
              All
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Masonry Grid - Smaller items */}
          <div className="columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-3">
            {displayedArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="mb-3 break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedImage(artwork)}
              >
                <div className="relative overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-900">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <p className="text-xs font-medium">{artwork.title}</p>
                      <p className="text-xs opacity-80">{artwork.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>

      {/* Modal for full image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-white dark:bg-neutral-950 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          
          <div className="max-w-7xl max-h-full flex flex-col items-center justify-center gap-4">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center text-neutral-900 dark:text-white" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl font-medium mb-2">{selectedImage.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{selectedImage.medium}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{selectedImage.dimensions}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">{selectedImage.year}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function SculpturesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-neutral-950" />}>
      <SculpturesContent />
    </Suspense>
  )
}
