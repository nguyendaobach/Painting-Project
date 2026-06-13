"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Moon, Sun, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function ArchivesPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedImage, setSelectedImage] = useState<typeof archivedWorks[0] | null>(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const archivedWorks = [
    {
      id: 1,
      title: "Archive - NFT 4",
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1781349998/NFT4_fextw7.jpg",
    },
    {
      id: 2,
      title: "Archive - NFT 5",
      image: "https://res.cloudinary.com/dyjtvhscz/image/upload/v1781350006/NFT5_pcxfs3.jpg",
    }
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
                  Archives
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
            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              {archivedWorks.map((artwork) => (
                <div
                  key={artwork.id}
                  className="break-inside-avoid"
                >
                  <div
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(artwork)}
                  >
                    <div className="relative overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-md">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
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
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}