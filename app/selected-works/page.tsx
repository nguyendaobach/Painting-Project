"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Moon, Sun, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function SelectedWorksPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedImage, setSelectedImage] = useState<typeof selectedWorks[0] | null>(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
                  Selected Works
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
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 lg:px-12 py-12">
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
      </div>

      {/* Fullscreen Image Modal */}
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

          <div className="max-w-7xl max-h-full flex flex-col items-center justify-center gap-6">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center text-neutral-900 dark:text-white max-w-2xl px-4" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-light mb-2">{selectedImage.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {selectedImage.medium}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {selectedImage.dimensions}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                {selectedImage.year}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}