"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Moon, Sun, ChevronDown, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function PaintingsPage() {
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
    { year: "2024", count: 6 },
    { year: "2023", count: 10 },
    { year: "2022", count: 3 },
  ]

  const allArtworks = [
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
                Paintings
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
                className="break-inside-avoid mb-3"
              >
                <div 
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(artwork)}
                >
                  <div className="relative overflow-hidden rounded bg-neutral-100 dark:bg-neutral-900">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-auto object-cover hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                  <div className="mt-1.5 px-0.5">
                    <p className="text-xs font-medium text-neutral-900 dark:text-neutral-100 line-clamp-1">
                      {artwork.title}
                    </p>
                    <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
                      {artwork.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {displayedArtworks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500 dark:text-neutral-400">No artworks found for this year</p>
            </div>
          )}
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
